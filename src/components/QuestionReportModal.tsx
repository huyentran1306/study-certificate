import { useState } from 'react';
import { AlertTriangle, Loader2, Send, X } from 'lucide-react';
import type { Question } from '../types';
import { submitQuestionReport, type QuestionReportType } from '../lib/sync';

interface QuestionReportModalProps {
  question: Question;
  certId: string;
  reporterName?: string;
  onClose: () => void;
  onResult: (message: string, type: 'success' | 'error') => void;
}

const reportTypes: { value: QuestionReportType; label: string }[] = [
  { value: 'wrong_answer', label: 'Đáp án hoặc giải thích chưa đúng' },
  { value: 'outdated', label: 'Nội dung đã lỗi thời' },
  { value: 'formatting', label: 'Sai định dạng / hình ảnh / vùng chọn' },
  { value: 'unclear', label: 'Câu hỏi khó hiểu hoặc thiếu dữ kiện' },
  { value: 'other', label: 'Vấn đề khác' },
];

export default function QuestionReportModal({ question, certId, reporterName, onClose, onResult }: QuestionReportModalProps) {
  const [reportType, setReportType] = useState<QuestionReportType>('wrong_answer');
  const [details, setDetails] = useState('');
  const [saving, setSaving] = useState(false);

  const submit = async () => {
    if (details.trim().length < 5) return;
    setSaving(true);
    const saved = await submitQuestionReport({
      certId,
      questionId: question.id,
      questionNumber: question.questionNumber,
      reporterName,
      reportType,
      details,
    });
    setSaving(false);
    if (saved) {
      onResult('Đã gửi báo cáo. Admin sẽ kiểm tra câu hỏi này.', 'success');
      onClose();
    } else {
      onResult('Chưa thể gửi báo cáo lên Database. Hãy kiểm tra migration question_reports.', 'error');
    }
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="report-question-title">
      <div className="w-full max-w-lg rounded-3xl border border-slate-100 bg-white p-5 shadow-2xl sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
              <AlertTriangle className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <h2 id="report-question-title" className="text-base font-black text-slate-900">Báo vấn đề câu hỏi #{question.questionNumber}</h2>
              <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-500">{question.text}</p>
            </div>
          </div>
          <button type="button" onClick={onClose} className="flex min-h-11 min-w-11 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100" aria-label="Đóng báo cáo">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 space-y-4">
          <label className="block">
            <span className="mb-1.5 block text-[10px] font-black uppercase tracking-wider text-slate-500">Loại vấn đề</span>
            <select value={reportType} onChange={event => setReportType(event.target.value as QuestionReportType)} className="min-h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm font-semibold text-slate-800 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100">
              {reportTypes.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[10px] font-black uppercase tracking-wider text-slate-500">Mô tả cụ thể</span>
            <textarea value={details} onChange={event => setDetails(event.target.value)} rows={4} placeholder="Ví dụ: Đáp án B mới đúng theo tài liệu cập nhật tháng 8..." className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm leading-relaxed text-slate-800 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100" />
          </label>
        </div>

        <div className="mt-5 flex justify-end gap-2">
          <button type="button" onClick={onClose} className="min-h-11 rounded-xl bg-slate-100 px-4 text-xs font-black text-slate-700 hover:bg-slate-200">Hủy</button>
          <button type="button" onClick={submit} disabled={saving || details.trim().length < 5} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 text-xs font-black text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40">
            {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            Gửi báo cáo
          </button>
        </div>
      </div>
    </div>
  );
}
