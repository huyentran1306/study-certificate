-- UPDATE-only patch for corrected AZ-900 interaction types (including image hotspots).
BEGIN;

UPDATE questions
SET
  options = '{"type":"matching_drag_drop","statements":[{"id":"1","text":"Eligible technical support plan — 1 of 4","correctAnswer":"B"},{"id":"2","text":"Eligible technical support plan — 2 of 4","correctAnswer":"C"},{"id":"3","text":"Eligible technical support plan — 3 of 4","correctAnswer":"D"},{"id":"4","text":"Eligible technical support plan — 4 of 4","correctAnswer":"E"}],"choices":[{"key":"A","text":"Basic"},{"key":"B","text":"Developer"},{"key":"C","text":"Standard"},{"key":"D","text":"Professional Direct"},{"key":"E","text":"Premier"}]}'::jsonb,
  correct_answers = ARRAY['1=B', '2=C', '3=D', '4=E']::text[],
  explanation = 'Developer, Standard, Professional Direct và Premier bao gồm hỗ trợ kỹ thuật và cho phép các yêu cầu hỗ trợ kỹ thuật. Basic bao gồm hỗ trợ thanh toán và đăng ký nhưng không bao gồm các trường hợp hỗ trợ kỹ thuật.',
  image_url = NULL
WHERE cert_id = 'az-900'
  AND id = 'az-900-question-001';

UPDATE questions
SET
  options = '{"type":"image_hotspot","choices":[{"key":"A","text":"NAT gateways","hotspot":{"x":34.9,"y":16.8,"width":62,"height":8.5}},{"key":"B","text":"Application gateways","hotspot":{"x":34.9,"y":27.2,"width":62,"height":8.5}},{"key":"C","text":"Local network gateways","hotspot":{"x":34.9,"y":37.7,"width":62,"height":8.5}},{"key":"D","text":"Virtual network gateways","hotspot":{"x":34.9,"y":48.1,"width":62,"height":8.5}}]}'::jsonb,
  correct_answers = ARRAY['C']::text[],
  explanation = 'Cổng mạng cục bộ đại diện cho thiết bị VPN tại chỗ và địa chỉ IP công cộng của thiết bị đó trong Azure. Cổng mạng ảo là điểm cuối VPN phía Azure.',
  image_url = 'az900/images/97.png'
WHERE cert_id = 'az-900'
  AND id = 'az-900-question-078';

UPDATE questions
SET
  options = '{"type":"image_hotspot","choices":[{"key":"A","text":"Blob containers","hotspot":{"x":8.5,"y":17,"width":44,"height":38}},{"key":"B","text":"Azure file shares","hotspot":{"x":54.2,"y":17,"width":44.2,"height":38}},{"key":"C","text":"Azure Table Storage","hotspot":{"x":8.5,"y":59.3,"width":44,"height":38}},{"key":"D","text":"Azure Queue Storage","hotspot":{"x":54.2,"y":59.3,"width":44.2,"height":38}}]}'::jsonb,
  correct_answers = ARRAY['A']::text[],
  explanation = 'Đĩa máy ảo Azure không được quản lý được lưu trữ dưới dạng các đốm màu trang trong vùng chứa blob. Đĩa được quản lý Azure trừu tượng hóa tài khoản lưu trữ từ người dùng.',
  image_url = 'az900/images/109.png'
WHERE cert_id = 'az-900'
  AND id = 'az-900-question-086';

UPDATE questions
SET
  options = '{"type":"image_hotspot","choices":[{"key":"A","text":"Azure SQL Database","hotspot":{"x":51.5,"y":9.7,"width":47.5,"height":9}},{"key":"B","text":"Azure Cosmos DB","hotspot":{"x":1.1,"y":9.7,"width":47.8,"height":9}},{"key":"C","text":"Azure Database for MySQL","hotspot":{"x":1.1,"y":21,"width":47.8,"height":9}},{"key":"D","text":"Azure Cache for Redis","hotspot":{"x":1.1,"y":54.5,"width":47.8,"height":9}}]}'::jsonb,
  correct_answers = ARRAY['B']::text[],
  explanation = 'Azure Cosmos DB là cơ sở dữ liệu phân tán toàn cầu hỗ trợ ghi nhiều vùng, truy cập có độ trễ thấp và mở rộng quy mô linh hoạt.',
  image_url = 'az900/images/112.png'
WHERE cert_id = 'az-900'
  AND id = 'az-900-question-089';

UPDATE questions
SET
  options = '{"type":"statement_matrix","statements":[{"id":"1","text":"A Windows Virtual Desktop session host can run Windows 10 only.","correctAnswer":"No"},{"id":"2","text":"A Windows Virtual Desktop host pool that includes 20 session hosts supports a maximum of 20 simultaneous user connections.","correctAnswer":"No"},{"id":"3","text":"Windows Virtual Desktop supports desktop and application virtualization.","correctAnswer":"Yes"}],"choices":[]}'::jsonb,
  correct_answers = ARRAY['1:No', '2:No', '3:Yes']::text[],
  explanation = 'Nhận định 1 và 2 sai, nhận định 3 đúng. Session host không chỉ giới hạn ở Windows 10 mà có thể chạy các hệ điều hành Windows được hỗ trợ. Một host pool có thể phục vụ nhiều phiên người dùng trên mỗi session host tùy cấu hình và năng lực. Windows Virtual Desktop hỗ trợ cả ảo hóa desktop lẫn ứng dụng.',
  image_url = NULL
WHERE cert_id = 'az-900'
  AND id = 'az-900-question-095';

UPDATE questions
SET
  options = '{"type":"statement_matrix","statements":[{"id":"1","text":"An Azure subscription can have multiple account administrators.","correctAnswer":"No"},{"id":"2","text":"An Azure subscription can be managed only by using a Microsoft account.","correctAnswer":"No"},{"id":"3","text":"An Azure resource group can contain resources from multiple Azure subscriptions.","correctAnswer":"No"}],"choices":[]}'::jsonb,
  correct_answers = ARRAY['1:No', '2:No', '3:No']::text[],
  explanation = 'Cả ba nhận định đều sai. Một subscription chỉ có một Account Administrator, dù có thể cấp thêm vai trò quản trị khác. Subscription có thể được quản lý bằng tài khoản Microsoft hoặc tài khoản tổ chức trong Microsoft Entra ID khi được cấp quyền. Mỗi resource group thuộc duy nhất một subscription và không thể chứa tài nguyên từ subscription khác.',
  image_url = NULL
WHERE cert_id = 'az-900'
  AND id = 'az-900-question-096';

UPDATE questions
SET
  options = '{"type":"image_hotspot","choices":[{"key":"A","text":"Overview","hotspot":{"x":0.9,"y":20.4,"width":21.5,"height":5.1}},{"key":"B","text":"Activity log","hotspot":{"x":0.9,"y":25.5,"width":21.5,"height":4.7}},{"key":"C","text":"Access control (IAM)","hotspot":{"x":0.9,"y":30.1,"width":21.5,"height":5.5}},{"key":"D","text":"Tags","hotspot":{"x":0.9,"y":35.6,"width":21.5,"height":4.5}}]}'::jsonb,
  correct_answers = ARRAY['C']::text[],
  explanation = 'Việc gán vai trò cho phạm vi nhóm tài nguyên được tạo từ Kiểm soát truy cập (IAM). Vai trò Người đọc cấp quyền truy cập chỉ đọc vào các tài nguyên trong phạm vi đó.',
  image_url = 'az900/images/200.png'
WHERE cert_id = 'az-900'
  AND id = 'az-900-question-150';

UPDATE questions
SET
  options = '{"type":"image_hotspot","choices":[{"key":"A","text":"Quickstart","hotspot":{"x":18.8,"y":11.7,"width":69.2,"height":10.4}},{"key":"B","text":"Deployments","hotspot":{"x":18.8,"y":37.2,"width":69.2,"height":10.4}},{"key":"C","text":"Policies","hotspot":{"x":18.8,"y":50,"width":69.2,"height":10.4}},{"key":"D","text":"Locks","hotspot":{"x":18.8,"y":75.1,"width":69.2,"height":10.4}}]}'::jsonb,
  correct_answers = ARRAY['D']::text[],
  explanation = 'Áp dụng khóa tài nguyên CanNotDelete ở phạm vi nhóm tài nguyên để ngăn chặn việc vô tình xóa nhóm và tài nguyên của nhóm.',
  image_url = 'az900/images/276.png'
WHERE cert_id = 'az-900'
  AND id = 'az-900-question-206';

UPDATE questions
SET
  options = '{"type":"image_hotspot","choices":[{"key":"A","text":"Resource groups","hotspot":{"x":4.1,"y":1.7,"width":88.2,"height":5.2}},{"key":"B","text":"App Services","hotspot":{"x":4.1,"y":13.9,"width":88.2,"height":5.2}},{"key":"C","text":"Storage accounts","hotspot":{"x":4.1,"y":50.4,"width":88.2,"height":5.2}},{"key":"D","text":"Virtual networks","hotspot":{"x":4.1,"y":56.5,"width":88.2,"height":5.2}}]}'::jsonb,
  correct_answers = ARRAY['C']::text[],
  explanation = 'Chia sẻ tệp Azure được tạo và quản lý trong tài khoản lưu trữ Azure.',
  image_url = 'az900/images/399.png'
WHERE cert_id = 'az-900'
  AND id = 'az-900-question-279';

UPDATE questions
SET
  options = '{"type":"image_hotspot","choices":[{"key":"A","text":"Create a resource","hotspot":{"x":7,"y":30.2,"width":7.2,"height":25.5}},{"key":"B","text":"Subscriptions","hotspot":{"x":40.6,"y":30.2,"width":9.3,"height":25.5}},{"key":"C","text":"Microsoft Entra ID","hotspot":{"x":51.8,"y":30.2,"width":9.9,"height":25.5}},{"key":"D","text":"Resource groups","hotspot":{"x":7,"y":58.3,"width":7.6,"height":25.7}}]}'::jsonb,
  correct_answers = ARRAY['C']::text[],
  explanation = 'Tạo và quản lý danh tính người dùng của đối tượng thuê trong Microsoft Entra ID. Sau khi danh tính tồn tại, kiểm soát truy cập dựa trên vai trò có thể cấp cho nó quyền truy cập vào đăng ký.',
  image_url = 'az900/images/403.png'
WHERE cert_id = 'az-900'
  AND id = 'az-900-question-282';

COMMIT;
