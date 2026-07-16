import React, { useState, useEffect } from 'react';
import { 
  Users, Plus, Link, Copy, Check, LogOut, Loader2, ArrowLeft, 
  Search, Trophy, Calendar, Sparkles, RefreshCw, Zap, BookOpen, QrCode, ClipboardList, Info, Trash2
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import { 
  fetchGroupsFromDb, 
  createGroupInDb, 
  joinGroupInDb,
  joinGroupByTokenInDb, 
  leaveGroupInDb, 
  fetchGroupMembersProgress 
} from '../lib/sync';
import { StudyGroup, GroupMemberProgress } from '../types';

interface GroupStudyProps {
  username: string;
  onUsernameChange: (username: string) => void;
  certificates: any[];
  showToast: (message: string, type: 'success' | 'error' | 'info') => void;
}

export default function GroupStudy({ username, onUsernameChange, certificates, showToast }: GroupStudyProps) {
  const [groups, setGroups] = useState<StudyGroup[]>([]);
  const [activeGroup, setActiveGroup] = useState<StudyGroup | null>(null);
  const [membersProgress, setMembersProgress] = useState<GroupMemberProgress[]>([]);
  
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Create Group Form State
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupDesc, setNewGroupDesc] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  // QR Code and Share Form State
  const [showQrModal, setShowQrModal] = useState(false);
  const [copiedGroupToken, setCopiedGroupToken] = useState(false);

  // Leaderboard Filtering State
  const [selectedCertFilter, setSelectedCertFilter] = useState<string>('all');

  // Local/Temporary Username State for visitors without an account yet
  const [tempUsername, setTempUsername] = useState('');

  // Load groups on mount or when username changes
  useEffect(() => {
    loadAllGroups();
    checkForJoinToken();
  }, [username]);

  // Load progress when active group changes or filter changes
  useEffect(() => {
    if (activeGroup) {
      loadGroupMembersProgress();
    }
  }, [activeGroup]);

  // Check URL query parameters for automatic join tokens (?joinGroup=token)
  const checkForJoinToken = async () => {
    const params = new URLSearchParams(window.location.search);
    const joinToken = params.get('joinGroup');
    if (joinToken) {
      if (!username) {
        showToast('Vui lòng đặt tên tài khoản để tự động tham gia nhóm!', 'info');
        return;
      }
      try {
        setIsLoading(true);
        const joined = await joinGroupByTokenInDb(joinToken, username);
        if (joined) {
          setActiveGroup(joined);
          showToast(`Chào mừng bạn đã tham gia nhóm "${joined.name}"! 🎉`, 'success');
          // Clear query param to avoid duplicate messages
          const newUrl = window.location.pathname;
          window.history.replaceState({}, document.title, newUrl);
        } else {
          showToast('Mã token nhóm không tồn tại hoặc không hợp lệ!', 'error');
        }
      } catch (err) {
        console.error('Failed to auto join group:', err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const loadAllGroups = async () => {
    try {
      setIsLoading(true);
      const dbGroups = await fetchGroupsFromDb();
      if (dbGroups) {
        setGroups(dbGroups);
        
        // If user is already in some group, set it as active if none is active
        if (username && !activeGroup) {
          // Check if user is a member of any fetched group
          for (const group of dbGroups) {
            const { data } = await supabase
              .from('group_members')
              .select('*')
              .eq('group_id', group.id)
              .eq('username', username)
              .maybeSingle();
            
            if (data) {
              setActiveGroup(group);
              break;
            }
          }
        }
      }
    } catch (err) {
      console.error('Error loading groups:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const loadGroupMembersProgress = async () => {
    if (!activeGroup) return;
    try {
      setIsRefreshing(true);
      const progress = await fetchGroupMembersProgress(activeGroup.id);
      if (progress) {
        // Sort progress based on highest answeredCount or streak
        setMembersProgress(progress);
      }
    } catch (err) {
      console.error('Error loading members progress:', err);
    } finally {
      setIsRefreshing(false);
    }
  };

  const handleCreateGroup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username) {
      showToast('Vui lòng kết nối tài khoản trước khi tạo nhóm!', 'error');
      return;
    }
    if (!newGroupName.trim()) {
      showToast('Tên nhóm không được để trống!', 'error');
      return;
    }

    try {
      setIsCreating(true);
      // Create random token for group
      const token = Math.random().toString(36).substring(2, 8).toUpperCase();
      const groupId = await createGroupInDb(newGroupName.trim(), newGroupDesc.trim(), username, token);
      
      if (groupId) {
        const newGrp: StudyGroup = {
          id: groupId,
          name: newGroupName.trim(),
          description: newGroupDesc.trim(),
          createdBy: username,
          token,
          createdAt: new Date().toISOString()
        };
        
        setGroups(prev => [newGrp, ...prev]);
        setActiveGroup(newGrp);
        setShowCreateModal(false);
        setNewGroupName('');
        setNewGroupDesc('');
        showToast(`Tạo nhóm "${newGrp.name}" thành công! Mời các thành viên cùng tham gia 🚀`, 'success');
      } else {
        showToast('Có lỗi xảy ra khi tạo nhóm trên Database.', 'error');
      }
    } catch (err) {
      console.error('Failed to create group:', err);
      showToast('Không thể kết nối đến cơ sở dữ liệu.', 'error');
    } finally {
      setIsCreating(false);
    }
  };

  const handleJoinGroup = async (group: StudyGroup) => {
    if (!username) {
      showToast('Vui lòng đặt tên tài khoản để tham gia nhóm học tập!', 'error');
      return;
    }
    try {
      setIsLoading(true);
      const success = await joinGroupInDb(group.id, username);
      if (success) {
        setActiveGroup(group);
        showToast(`Đã tham gia nhóm "${group.name}" thành công!`, 'success');
      } else {
        showToast('Tham gia nhóm thất bại.', 'error');
      }
    } catch (err) {
      console.error('Error joining group:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleJoinByTokenSubmit = async (e: React.FormEvent, tokenInput: string) => {
    e.preventDefault();
    if (!username) {
      showToast('Vui lòng đặt tên tài khoản để tham gia nhóm!', 'error');
      return;
    }
    if (!tokenInput.trim()) return;

    try {
      setIsLoading(true);
      const group = await joinGroupByTokenInDb(tokenInput.trim().toUpperCase(), username);
      if (group) {
        setActiveGroup(group);
        showToast(`Đã tham gia thành công nhóm "${group.name}"!`, 'success');
      } else {
        showToast('Mã token không hợp lệ hoặc nhóm không tồn tại.', 'error');
      }
    } catch (err) {
      console.error('Error joining group by token:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLeaveGroup = async () => {
    if (!activeGroup || !username) return;
    if (!window.confirm(`Bạn có chắc chắn muốn rời khỏi nhóm "${activeGroup.name}" không?`)) return;

    try {
      setIsLoading(true);
      const success = await leaveGroupInDb(activeGroup.id, username);
      if (success) {
        showToast(`Đã rời khỏi nhóm "${activeGroup.name}"`, 'info');
        setActiveGroup(null);
        setMembersProgress([]);
        loadAllGroups();
      } else {
        showToast('Rời nhóm thất bại.', 'error');
      }
    } catch (err) {
      console.error('Error leaving group:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyInviteLink = () => {
    if (!activeGroup) return;
    const inviteUrl = `${window.location.origin}?joinGroup=${activeGroup.token}`;
    navigator.clipboard.writeText(inviteUrl);
    setCopiedGroupToken(true);
    showToast('Đã sao chép liên kết mời tham gia nhóm học tập! 🔗', 'success');
    setTimeout(() => setCopiedGroupToken(false), 2000);
  };

  const handleSetUsername = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tempUsername.trim()) {
      showToast('Tên tài khoản không được để trống!', 'error');
      return;
    }
    onUsernameChange(tempUsername.trim());
    showToast(`Đã thiết lập tài khoản "${tempUsername.trim()}" thành công!`, 'success');
  };

  // Get filtered progress data based on certificate filter
  const getSortedMembers = () => {
    return [...membersProgress].map(m => {
      // Calculate active stats for the member based on the selected cert
      if (selectedCertFilter === 'all') {
        // Sum up stats across all certificates
        const totalAnswered = m.certProgress.reduce((sum, p) => sum + p.answeredCount, 0);
        const totalCorrect = m.certProgress.reduce((sum, p) => sum + p.correctCount, 0);
        const maxStreak = m.certProgress.reduce((max, p) => Math.max(max, p.streak), 0);
        const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
        
        // Find most recent updated timestamp
        let latestDate = m.joinedAt;
        m.certProgress.forEach(p => {
          if (p.lastUpdated && new Date(p.lastUpdated) > new Date(latestDate)) {
            latestDate = p.lastUpdated;
          }
        });

        return {
          username: m.username,
          joinedAt: m.joinedAt,
          answeredCount: totalAnswered,
          correctCount: totalCorrect,
          streak: maxStreak,
          accuracy,
          lastUpdated: latestDate
        };
      } else {
        // Specific certification filter
        const target = m.certProgress.find(p => p.certId === selectedCertFilter);
        return {
          username: m.username,
          joinedAt: m.joinedAt,
          answeredCount: target?.answeredCount || 0,
          correctCount: target?.correctCount || 0,
          streak: target?.streak || 0,
          accuracy: target?.answeredCount ? Math.round((target.correctCount / target.answeredCount) * 100) : 0,
          lastUpdated: target?.lastUpdated || m.joinedAt
        };
      }
    }).sort((a, b) => {
      // Sort by answeredCount first, then accuracy, then streak
      if (b.answeredCount !== a.answeredCount) {
        return b.answeredCount - a.answeredCount;
      }
      return b.accuracy - a.accuracy;
    });
  };

  // Filter group listings
  const filteredGroups = groups.filter(g => 
    g.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    g.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    g.token.toLowerCase().includes(searchQuery.toLowerCase())
  );

  let inviteLinkUrl = '';
  if (activeGroup) {
    let origin = window.location.origin;
    if (origin.includes('-dev-')) {
      origin = origin.replace('-dev-', '-pre-');
    }
    inviteLinkUrl = `${origin}?joinGroup=${activeGroup.token}`;
  }
  const qrCodeImgSrc = activeGroup ? `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(inviteLinkUrl)}` : '';

  // Return non-connected state first if user hasn't set up a name yet
  if (!username) {
    return (
      <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-100 shadow-md max-w-2xl mx-auto space-y-6 text-center animate-fadeIn">
        <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
          <Users className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <span className="text-[10px] font-black text-indigo-700 bg-indigo-50 border border-indigo-100 px-3.5 py-1 rounded-full uppercase tracking-wider">Học Nhóm Thi Đua 👥</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Cần Thiết Lập Tên Tài Khoản</h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Để xem tiến độ, thi đua thứ hạng, chia sẻ nhóm học tập cùng đồng đội, bạn cần thiết lập tên biệt danh hiển thị của mình.
          </p>
        </div>

        <form onSubmit={handleSetUsername} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            required
            placeholder="Nhập tên tài khoản (Ví dụ: HuyenTran, Admin, Dev)"
            value={tempUsername}
            onChange={(e) => setTempUsername(e.target.value)}
            className="flex-1 px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-xs sm:text-sm font-bold text-slate-800"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-2xl transition-all cursor-pointer shadow-sm shrink-0"
          >
            Bắt đầu học nhóm
          </button>
        </form>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-slate-400 text-[11px] font-medium">
          <Info className="w-3.5 h-3.5 text-indigo-500" />
          <span>Tài khoản đồng bộ trực tiếp tiến độ học các chứng chỉ quốc tế.</span>
        </div>
      </div>
    );
  }

  // Active group workspace mode
  if (activeGroup) {
    const sortedMembers = getSortedMembers();
    return (
      <div className="space-y-6 animate-fadeIn">
        {/* Active Group Header Dashboard */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
          {/* Ambient light effects */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 relative z-10">
            <button 
              onClick={() => { setActiveGroup(null); loadAllGroups(); }}
              className="flex items-center gap-1.5 text-[11px] font-black text-indigo-300 hover:text-white uppercase tracking-widest transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Xem danh sách nhóm khác</span>
            </button>
            <div className="space-y-1.5">
              <span className="text-[9px] font-extrabold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-3 py-1 rounded-full uppercase tracking-wider">Đang hoạt động 🟢</span>
              <h2 className="text-xl md:text-2xl font-black tracking-tight">{activeGroup.name}</h2>
              {activeGroup.description && (
                <p className="text-xs text-slate-400 max-w-xl font-medium leading-relaxed">
                  {activeGroup.description}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-[11px] font-bold text-slate-300">
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-indigo-400" />
                Mã nhóm: <strong className="text-indigo-300">{activeGroup.token}</strong>
              </span>
              <span className="text-slate-600">|</span>
              <span className="flex items-center gap-1">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                Sĩ số: <strong className="text-slate-100">{membersProgress.length} học viên</strong>
              </span>
              <span className="text-slate-600">|</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                Người tạo: <span className="text-slate-100">{activeGroup.createdBy === username ? 'Bạn' : activeGroup.createdBy}</span>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0 relative z-10">
            <button
              onClick={handleCopyInviteLink}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-750 text-slate-100 rounded-xl transition-all font-bold text-xs flex items-center gap-1.5 cursor-pointer border border-slate-700 shadow-sm"
              title="Chia sẻ liên kết mời"
            >
              {copiedGroupToken ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copiedGroupToken ? 'Đã copy link' : 'Copy link mời'}</span>
            </button>

            <button
              onClick={() => setShowQrModal(true)}
              className="p-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-all cursor-pointer shadow-md flex items-center gap-1.5 text-xs font-bold"
              title="Hiện QR Code để quét gia nhập nhanh"
            >
              <QrCode className="w-3.5 h-3.5" />
              <span>Mã QR</span>
            </button>

            <button
              onClick={handleLeaveGroup}
              className="p-2.5 bg-slate-800 hover:bg-rose-950 hover:text-rose-400 text-slate-400 rounded-xl transition-all cursor-pointer border border-slate-700"
              title="Rời khỏi nhóm"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Leaderboard and Competition workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left / Main Grid: Member ranked Leaderboard */}
          <div className="lg:col-span-2 bg-white border border-slate-100 rounded-3xl p-5 md:p-6 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-0.5">
                <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-amber-500" />
                  Bảng Vàng Thi Đua Group
                </h3>
                <p className="text-[11px] text-slate-500 font-medium">
                  Xếp hạng dựa trên số lượng câu trả lời đã làm & tỷ lệ chính xác.
                </p>
              </div>

              {/* Refresh & Filter Row */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={loadGroupMembersProgress}
                  disabled={isRefreshing}
                  className="p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-500 hover:text-indigo-600 transition-all border border-slate-200/60 disabled:opacity-50"
                  title="Làm mới bảng xếp hạng"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
                </button>

                <select
                  value={selectedCertFilter}
                  onChange={(e) => setSelectedCertFilter(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 px-2.5 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                >
                  <option value="all">Tất cả chứng chỉ</option>
                  {certificates.map(c => (
                    <option key={c.id} value={c.id}>{c.code}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Podium for top 3 if has data */}
            {sortedMembers.length > 0 && sortedMembers[0].answeredCount > 0 && (
              <div className="grid grid-cols-3 gap-3 pt-2 pb-4 border-b border-slate-100">
                {/* 2nd Place */}
                {sortedMembers[1] && (
                  <div className="flex flex-col items-center justify-end text-center p-3 rounded-2xl bg-slate-50 border border-slate-100/50 min-h-[140px] relative">
                    <span className="absolute top-2 left-2 text-[9px] font-black text-slate-400">#2</span>
                    <div className="w-9 h-9 bg-slate-200 text-slate-700 rounded-full flex items-center justify-center font-black text-xs shadow-xs mb-2">
                      {sortedMembers[1].username.substring(0, 2).toUpperCase()}
                    </div>
                    <span className="text-[11px] font-extrabold text-slate-800 truncate max-w-full">{sortedMembers[1].username}</span>
                    <span className="text-[10px] font-bold text-slate-500">{sortedMembers[1].answeredCount} câu</span>
                    <span className="text-[9px] font-black text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full mt-1.5">{sortedMembers[1].accuracy}% ĐH</span>
                  </div>
                )}
                
                {/* 1st Place */}
                {sortedMembers[0] && (
                  <div className="flex flex-col items-center justify-end text-center p-4 rounded-2xl bg-amber-50/50 border border-amber-100/70 min-h-[160px] relative shadow-xs">
                    <span className="absolute top-2 left-1/2 -translate-x-1/2 text-xs">👑</span>
                    <div className="w-11 h-11 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center font-black text-sm shadow-xs mb-2 ring-2 ring-amber-400 ring-offset-2">
                      {sortedMembers[0].username.substring(0, 2).toUpperCase()}
                    </div>
                    <span className="text-xs font-black text-slate-900 truncate max-w-full flex items-center gap-0.5">
                      {sortedMembers[0].username}
                    </span>
                    <span className="text-[11px] font-extrabold text-amber-700">{sortedMembers[0].answeredCount} câu</span>
                    <span className="text-[9px] font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full mt-1.5">{sortedMembers[0].accuracy}% ĐH</span>
                  </div>
                )}

                {/* 3rd Place */}
                {sortedMembers[2] && (
                  <div className="flex flex-col items-center justify-end text-center p-3 rounded-2xl bg-orange-50/20 border border-orange-100/30 min-h-[130px] relative">
                    <span className="absolute top-2 right-2 text-[9px] font-black text-orange-400">#3</span>
                    <div className="w-9 h-9 bg-orange-100/50 text-orange-700 rounded-full flex items-center justify-center font-black text-xs shadow-xs mb-2">
                      {sortedMembers[2].username.substring(0, 2).toUpperCase()}
                    </div>
                    <span className="text-[11px] font-extrabold text-slate-800 truncate max-w-full">{sortedMembers[2].username}</span>
                    <span className="text-[10px] font-bold text-slate-500">{sortedMembers[2].answeredCount} câu</span>
                    <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full mt-1.5">{sortedMembers[2].accuracy}% ĐH</span>
                  </div>
                )}
              </div>
            )}

            {/* Leaderboard Table List */}
            <div className="space-y-2.5 max-h-[420px] overflow-y-auto pr-1">
              {sortedMembers.map((member, idx) => {
                const isSelf = member.username === username;
                return (
                  <div 
                    key={member.username}
                    className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all ${
                      isSelf 
                        ? 'bg-indigo-50/50 border-indigo-200/80 shadow-xs' 
                        : 'bg-slate-50/50 border-slate-100 hover:bg-slate-50 hover:border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="flex items-center justify-center w-6 text-xs font-black text-slate-400">
                        {idx + 1}
                      </div>
                      
                      <div className={`w-8 h-8 rounded-full font-bold text-xs flex items-center justify-center shadow-xs shrink-0 ${
                        isSelf ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {member.username.substring(0, 2).toUpperCase()}
                      </div>

                      <div className="min-w-0">
                        <span className={`text-xs font-black tracking-tight truncate block ${isSelf ? 'text-indigo-950' : 'text-slate-800'}`}>
                          {member.username} {isSelf && <span className="text-[9px] font-bold bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded-md ml-1">Bạn</span>}
                        </span>
                        <span className="text-[10px] font-medium text-slate-400 block">
                          Tham gia: {new Date(member.joinedAt).toLocaleDateString('vi-VN')}
                        </span>
                      </div>
                    </div>

                    {/* Member detailed metrics */}
                    <div className="flex items-center gap-4 sm:gap-6 shrink-0">
                      <div className="text-right">
                        <span className="text-[9px] text-slate-400 font-bold uppercase block tracking-wider">Đã làm</span>
                        <span className="text-xs font-black text-slate-800">{member.answeredCount} câu</span>
                      </div>

                      <div className="text-right">
                        <span className="text-[9px] text-slate-400 font-bold uppercase block tracking-wider">Chuỗi</span>
                        <span className="text-xs font-black text-rose-600 flex items-center justify-end gap-0.5">
                          <Zap className="w-3.5 h-3.5 fill-rose-500 animate-pulse" />
                          {member.streak}
                        </span>
                      </div>

                      <div className="text-right min-w-[50px]">
                        <span className="text-[9px] text-slate-400 font-bold uppercase block tracking-wider">Chính xác</span>
                        <span className={`text-xs font-black px-2 py-0.5 rounded-lg ${
                          member.accuracy >= 80 
                            ? 'bg-emerald-50 text-emerald-700' 
                            : member.accuracy >= 50 
                            ? 'bg-amber-50 text-amber-700' 
                            : 'bg-slate-100 text-slate-600'
                        }`}>{member.accuracy}%</span>
                      </div>
                    </div>
                  </div>
                );
              })}

              {sortedMembers.length === 0 && (
                <div className="text-center py-10 space-y-2">
                  <Trophy className="w-10 h-10 text-slate-300 mx-auto" />
                  <p className="text-xs text-slate-400 font-bold">Chưa có bảng thành tích học viên nào.</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar: Active Certificate Progress breakdown for group overview */}
          <div className="bg-white border border-slate-100 rounded-3xl p-5 md:p-6 shadow-sm space-y-5">
            <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
              <ClipboardList className="w-4 h-4 text-indigo-500" />
              Tổng Quan Tiến Trình Certs
            </h3>

            <div className="space-y-4">
              {certificates.map(cert => {
                // Calculate average metrics for this cert in the group
                let totalGroupAnswered = 0;
                let activeStudents = 0;
                let totalCorrect = 0;

                membersProgress.forEach(m => {
                  const progress = m.certProgress.find(cp => cp.certId === cert.id);
                  if (progress && progress.answeredCount > 0) {
                    totalGroupAnswered += progress.answeredCount;
                    totalCorrect += progress.correctCount;
                    activeStudents++;
                  }
                });

                const groupAccuracy = totalGroupAnswered > 0 ? Math.round((totalCorrect / totalGroupAnswered) * 100) : 0;

                return (
                  <div key={cert.id} className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-indigo-500" />
                        <span className="text-xs font-black text-slate-800">{cert.code}</span>
                      </div>
                      <span className="text-[10px] font-bold text-slate-500">
                        {activeStudents} học viên
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-center text-[10px] font-bold">
                      <div className="bg-white border border-slate-100 p-1.5 rounded-xl">
                        <span className="text-slate-400 block text-[8px] uppercase tracking-wider">Tổng giải</span>
                        <span className="text-slate-800 block font-black text-xs">{totalGroupAnswered} câu</span>
                      </div>
                      <div className="bg-white border border-slate-100 p-1.5 rounded-xl">
                        <span className="text-slate-400 block text-[8px] uppercase tracking-wider">Tỷ lệ chính xác</span>
                        <span className="text-indigo-600 block font-black text-xs">{groupAccuracy}%</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick guide on scanning */}
            <div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-4 space-y-2">
              <h4 className="text-[11px] font-black text-amber-900 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                Làm thế nào để thi đua?
              </h4>
              <p className="text-[10px] text-amber-800 font-medium leading-relaxed">
                Mỗi khi bạn làm bài thi thử hoặc ôn tập trong mục luyện tập, kết quả sẽ tự động đồng bộ lên Database. Toàn bộ đồng đội trong nhóm sẽ thấy tiến độ cập nhật tức thì của bạn để cùng so tài và thúc đẩy học tập!
              </p>
            </div>
          </div>
        </div>

        {/* QR Code and Sharing Modal Popup */}
        {showQrModal && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 md:p-8 max-w-sm w-full border border-slate-100 shadow-2xl text-center space-y-6 animate-scaleIn">
              <div className="space-y-1.5">
                <h3 className="text-lg font-black text-slate-900">Mã QR Quét Tham Gia</h3>
                <p className="text-xs text-slate-500 font-medium">
                  Đưa điện thoại lên quét mã QR dưới đây để tham gia trực tiếp vào nhóm học tập cực nhanh!
                </p>
                {window.location.origin.includes('-dev-') && (
                  <div className="bg-emerald-50 text-emerald-800 border border-emerald-200/60 p-2.5 rounded-xl text-[11px] font-bold text-left space-y-1">
                    <p className="flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0 animate-pulse" />
                      <span>Đã chuyển đổi link tự động:</span>
                    </p>
                    <p className="text-[10px] text-slate-500 font-medium">
                      Hệ thống tự đổi link phát triển (<span className="font-mono">dev</span> - bị chặn 403 trên mobile) thành link chia sẻ công khai (<span className="font-mono">pre</span>) để đồng đội quét thành công 100%!
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-slate-50 border border-slate-100 p-4 rounded-3xl w-fit mx-auto shadow-inner">
                {qrCodeImgSrc ? (
                  <img 
                    src={qrCodeImgSrc} 
                    alt="Group Invite QR Code" 
                    className="w-48 h-48 rounded-2xl ring-1 ring-slate-100 shadow-sm mx-auto"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-48 h-48 flex items-center justify-center text-slate-400">
                    <Loader2 className="w-8 h-8 animate-spin" />
                  </div>
                )}
              </div>

              <div className="space-y-2 text-left">
                <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Đường link mời trực tiếp:</span>
                <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-2 rounded-2xl border border-slate-200">
                  <span className="text-[11px] font-bold text-indigo-700 truncate flex-1">{inviteLinkUrl}</span>
                  <button
                    onClick={handleCopyInviteLink}
                    className="p-1.5 bg-white text-slate-500 hover:text-indigo-600 border border-slate-200 rounded-lg transition-colors cursor-pointer shrink-0"
                    title="Sao chép link"
                  >
                    {copiedGroupToken ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <button
                onClick={() => setShowQrModal(false)}
                className="w-full bg-slate-900 hover:bg-slate-850 text-white font-bold py-2.5 rounded-2xl text-xs transition-colors cursor-pointer"
              >
                Đóng cửa sổ
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Groups general list workspace (not inside any group yet)
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Banner / Title block */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-950 text-white rounded-3xl p-6 md:p-8 border border-indigo-950 shadow-lg relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="space-y-2 relative z-10">
          <span className="text-[9px] font-extrabold text-indigo-300 bg-indigo-900/60 border border-indigo-800 px-3.5 py-1 rounded-full uppercase tracking-wider">Học Nhóm Thi Đua 👥</span>
          <h2 className="text-xl md:text-2xl font-black tracking-tight">Học Nhóm & Leaderboard Đồng Đội</h2>
          <p className="text-xs text-slate-300 max-w-xl font-medium leading-relaxed">
            Học tập thi đua tiến độ làm bài thi thử các chứng chỉ quốc tế, chia sẻ bảng xếp hạng, tăng tốc hiệu quả học tập cùng nhóm đồng đội!
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 relative z-10">
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-3 rounded-2xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Tạo Nhóm Mới</span>
          </button>
        </div>
      </div>

      {/* Main Study Group Listing Workspace */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Left/Main Column: Group List */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center justify-between bg-white border border-slate-100 rounded-3xl p-4 shadow-sm">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Tìm kiếm nhóm học tập theo tên hoặc token..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white"
              />
            </div>
            <span className="text-[11px] font-bold text-slate-400 hidden sm:inline pl-4">
              Hiển thị {filteredGroups.length} nhóm
            </span>
          </div>

          <div className="space-y-3">
            {isLoading ? (
              <div className="text-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-indigo-500 mx-auto" />
                <p className="text-xs text-slate-400 font-bold mt-2">Đang tải danh sách nhóm từ Database...</p>
              </div>
            ) : filteredGroups.map(group => (
              <div 
                key={group.id}
                className="bg-white border border-slate-100 hover:border-indigo-100 rounded-3xl p-5 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-black text-slate-900 tracking-tight">{group.name}</h4>
                    <span className="text-[10px] font-black text-indigo-700 bg-indigo-50 border border-indigo-100/50 px-2.5 py-0.5 rounded-lg">
                      Mã: {group.token}
                    </span>
                  </div>
                  {group.description && (
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      {group.description}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-50 text-[11px] font-bold text-slate-400">
                  <span>Tạo bởi: <strong className="text-slate-700 font-extrabold">{group.createdBy}</strong></span>
                  <button
                    onClick={() => handleJoinGroup(group)}
                    className="bg-indigo-600 hover:bg-slate-900 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all cursor-pointer shadow-xs shrink-0 flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Gia nhập</span>
                  </button>
                </div>
              </div>
            ))}

            {!isLoading && filteredGroups.length === 0 && (
              <div className="bg-white border border-slate-100 rounded-3xl p-12 text-center space-y-3">
                <Users className="w-10 h-10 text-slate-300 mx-auto" />
                <div className="space-y-1">
                  <h4 className="text-xs font-black text-slate-800">Không tìm thấy nhóm học tập nào</h4>
                  <p className="text-[11px] text-slate-400 font-medium max-w-xs mx-auto">
                    Hiện chưa có nhóm học tập phù hợp hoặc khớp từ khóa. Hãy trở thành người đầu tiên tạo nhóm nhé!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Join Group by Token Input */}
        <div className="space-y-6">
          <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm space-y-4">
            <div className="space-y-1">
              <h3 className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                <Link className="w-4 h-4 text-indigo-500" />
                Nhập Token Tham Gia Nhanh
              </h3>
              <p className="text-[11px] text-slate-400 font-medium">
                Bạn nhận được một mã token từ đồng đội? Nhập mã token gồm 6 ký tự để tham gia tức thì.
              </p>
            </div>

            <form 
              onSubmit={(e) => {
                const form = e.currentTarget;
                const token = new FormData(form).get('group_token_input') as string;
                handleJoinByTokenSubmit(e, token || '');
                form.reset();
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                name="group_token_input"
                required
                maxLength={8}
                placeholder="Ví dụ: XY6HUA"
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-xs font-bold text-slate-800 uppercase"
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all cursor-pointer shadow-xs"
              >
                Gia nhập
              </button>
            </form>
          </div>

          {/* Quick Stats overview info */}
          <div className="bg-indigo-50/40 border border-indigo-100 rounded-3xl p-5 space-y-3">
            <h4 className="text-xs font-black text-indigo-950 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-indigo-600 animate-pulse" />
              Tại sao nên học nhóm?
            </h4>
            <ul className="text-[11px] text-indigo-900/80 space-y-2 list-disc pl-4 font-medium leading-relaxed">
              <li>Thi đua thứ hạng, chuỗi sấm sét liên tục cùng đồng đội.</li>
              <li>Dễ dàng chia sẻ các câu hỏi hay, đáp án chính xác.</li>
              <li>Cập nhật tiến trình thời gian thực, có động lực ôn luyện vượt qua kỳ thi thực tế.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Create New Group Modal Popup */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <form 
            onSubmit={handleCreateGroup}
            className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full border border-slate-100 shadow-2xl space-y-5 animate-scaleIn"
          >
            <div className="space-y-1">
              <h3 className="text-base font-black text-slate-900">Tạo Nhóm Học Tập Mới</h3>
              <p className="text-[11px] text-slate-500 font-medium">
                Hãy tạo lập một nhóm học tập của riêng bạn, sau đó gửi link hoặc QR Code cho đồng đội cùng vào ôn thi nhé.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-1 text-left">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">Tên nhóm học tập:</label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Team Ôn Thi AWS/Azure 2026, GenAI Study"
                  value={newGroupName}
                  onChange={(e) => setNewGroupName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-xs font-bold text-slate-800"
                />
              </div>

              <div className="space-y-1 text-left">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">Mô tả ngắn gọn:</label>
                <textarea
                  placeholder="Mô tả mục tiêu của nhóm, ví dụ: Nhóm học chung thi đỗ AZ-900 trong tháng này!"
                  rows={3}
                  value={newGroupDesc}
                  onChange={(e) => setNewGroupDesc(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-xs font-bold text-slate-800"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 rounded-2xl text-xs transition-colors cursor-pointer"
              >
                Hủy bỏ
              </button>
              <button
                type="submit"
                disabled={isCreating}
                className="flex-1 bg-indigo-600 hover:bg-slate-900 text-white font-bold py-2.5 rounded-2xl text-xs transition-colors cursor-pointer flex items-center justify-center gap-1"
              >
                {isCreating ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Plus className="w-3.5 h-3.5" />}
                <span>Tạo nhóm</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
