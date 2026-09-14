-- =========================================================================
-- UTILITY SCRIPT: BẬT / TẮT HIỂN THỊ CHỨNG CHỈ (TOGGLE VISIBILITY)
-- Giúp ẩn bớt các chứng chỉ chưa học trên trang chủ để giao diện gọn gàng.
-- =========================================================================

-- 1. Xem danh sách trạng thái Ẩn / Hiện hiện tại của tất cả chứng chỉ:
SELECT id, code, name, is_disabled, badge
FROM public.custom_certificates
ORDER BY is_disabled ASC, id ASC;

-- 2. Ẩn (Disable) một hoặc nhiều chứng chỉ (không hiện trên trang chủ):
-- UPDATE public.custom_certificates
-- SET is_disabled = true
-- WHERE id IN ('az-104', 'az-204', 'az-400', 'az-500', 'dp-900');

-- 3. Bật hiển thị lại (Enable) chứng chỉ bạn muốn học:
-- UPDATE public.custom_certificates
-- SET is_disabled = false
-- WHERE id = 'az-104';

-- 4. Bật hiển thị lại tất cả chứng chỉ:
-- UPDATE public.custom_certificates
-- SET is_disabled = false;
