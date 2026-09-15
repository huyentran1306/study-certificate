-- =========================================================================
-- STANDALONE SQL IMPORT FOR SC-200: Microsoft Security Operations Analyst
-- Total questions: 480 questions
-- Default status: is_disabled = true
-- =========================================================================

BEGIN;

-- 1. Ensure custom_certificates table has is_disabled & badge column
ALTER TABLE public.custom_certificates ADD COLUMN IF NOT EXISTS is_disabled BOOLEAN DEFAULT false;
ALTER TABLE public.custom_certificates ADD COLUMN IF NOT EXISTS badge TEXT DEFAULT 'none';

-- 2. Upsert Certificate metadata
INSERT INTO public.custom_certificates (
  id, name, code, description, difficulty, estimated_hours, color_class, icon_name, is_vip, is_disabled, badge
) VALUES (
  'sc-200',
  'Microsoft Security Operations Analyst',
  'SC-200',
  'Chinh phục chứng chỉ Microsoft Certified: Security Operations Analyst Associate (SC-200). Phát hiện, điều tra và ứng phó sự cố bảo mật với Microsoft Defender XDR, Microsoft Sentinel và Microsoft Purview.',
  'Trung cấp',
  '18-22 Giờ',
  'bg-gradient-to-br from-rose-700 via-red-900 to-slate-950 text-white',
  'ShieldCheck',
  false,
  true,
  'new'
) ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  code = EXCLUDED.code,
  description = EXCLUDED.description,
  difficulty = EXCLUDED.difficulty,
  estimated_hours = EXCLUDED.estimated_hours,
  color_class = EXCLUDED.color_class,
  icon_name = EXCLUDED.icon_name,
  badge = EXCLUDED.badge;

-- 3. Upsert Questions
INSERT INTO public.questions (
  id, cert_id, question_number, text, options,
  correct_answers, explanation, category, tags, image_url, status
) VALUES
  ('sc200-1', 'sc-200', 1, 'You have an Azure subscription that uses Microsoft Defender for Endpoint.  
  
You need to ensure that you can allow or block a user-specified range of IP addresses and URLs.  
  
Which feature should you enable first under **Advanced features** in **Endpoint Settings** in the Microsoft 365 Defender portal?', '[{"key":"A","text":"custom network indicators"},{"key":"B","text":"live response for servers"},{"key":"C","text":"endpoint detection and response (EDR) in block mode"},{"key":"D","text":"web content filtering"}]'::jsonb, ARRAY['A']::text[], 'Chỉ báo mạng tùy chỉnh cho phép tạo chỉ báo cho phép hoặc chặn tùy chỉnh cho địa chỉ IP, URL và miền trong Bộ bảo vệ Microsoft dành cho Điểm cuối. Microsoft ghi lại tính năng này dưới dạng cài đặt Tính năng nâng cao cần thiết trước khi chặn địa chỉ IP hoặc URL. Chỉ báo tùy chỉnh hỗ trợ các địa chỉ IP bên ngoài riêng lẻ thay vì dải IP.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-2', 'sc-200', 2, 'You have a Microsoft 365 E5 subscription that includes a database server named DB1. DB1 is onboarded to Microsoft Defender XDR.  
  
You need to ensure that DB1 is shown on the attack surface map.  
  
What should you configure?', '[{"key":"A","text":"an asset rule"},{"key":"B","text":"a critical asset rule"},{"key":"C","text":"a sensitive entity tag"},{"key":"D","text":"a honeytoken entity tag"}]'::jsonb, ARRAY['B']::text[], 'Quản lý phơi nhiễm bảo mật của Microsoft sử dụng phân loại tài sản quan trọng để xác định và ưu tiên các thiết bị quan trọng trong kinh doanh, bao gồm cả cơ sở dữ liệu. Các nội dung quan trọng được hiển thị trên bản đồ bề mặt tấn công với các chỉ báo mức độ quan trọng; một quy tắc tài sản quan trọng có thể phân loại DB1 như vậy.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-3', 'sc-200', 3, 'You have a Microsoft 365 subscription that uses Microsoft Defender for Office 365.  
  
You have Microsoft SharePoint Online sites containing sensitive documents. The documents contain customer account numbers, each consisting of 32 alphanumeric characters.  
  
You need to create a data loss prevention (DLP) policy to protect the sensitive documents.  
  
What should you use to identify which documents are sensitive?', '[{"key":"A","text":"SharePoint search"},{"key":"B","text":"a hunting query in Microsoft 365 Defender"},{"key":"C","text":"Azure Information Protection"},{"key":"D","text":"RegEx pattern matching"}]'::jsonb, ARRAY['D']::text[], 'Biểu thức chính quy có thể xác định loại thông tin nhạy cảm tùy chỉnh giúp phát hiện các chuỗi khớp với định dạng số tài khoản gồm 32 ký tự chữ và số được yêu cầu. Microsoft Purview DLP sử dụng biểu thức chính quy để xác định và phân loại các mẫu dữ liệu nhạy cảm trong nội dung.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-4', 'sc-200', 4, 'You have a Microsoft 365 E5 subscription that uses Microsoft Teams.  
  
You must perform a content search of a user’s Teams chats by using the Microsoft Purview compliance portal. The solution must minimize the search scope.  
  
How should you configure the content search?', '[]'::jsonb, ARRAY[]::text[], 'Nội dung trò chuyện nhóm (tin nhắn tức thời) dành cho người dùng được lưu trữ trong hộp thư Exchange của người dùng để tìm kiếm tuân thủ. Giới hạn vị trí ở các hộp thư Exchange và lọc bằng thuộc tính KQL `kind:im` nhắm mục tiêu các mục tin nhắn/trò chuyện tức thời, giảm thiểu phạm vi tìm kiếm.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-5', 'sc-200', 5, 'You have a Microsoft 365 subscription that contains a Windows device named Device1. Device1 is onboarded to Microsoft Defender for Endpoint.  
  
You initiate a live response session on Device1.  
  
You need to execute a long-running script while ensuring that you can run additional commands during the session. How should you complete the live response command?', '[]'::jsonb, ARRAY[]::text[], 'Lệnh `run` thực thi tập lệnh PowerShell từ thư viện phản hồi trực tiếp. Việc thêm `&` sẽ chạy một lệnh chạy dài ở chế độ nền, để lại phiên phản hồi trực tiếp có sẵn cho các lệnh tiếp theo.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-6', 'sc-200', 6, 'You have a Microsoft 365 E5 subscription that includes a device named Device1.  
  
In the Microsoft Defender portal, you discover that an alert was triggered for Device1.  
  
From the Device inventory page, you isolate Device1.  
  
You need to obtain a list of the programs installed on Device1.  
  
What should you do?', '[{"key":"A","text":"Initiate an automated investigation and view the results in the Action center."},{"key":"B","text":"Collect an investigation package and download the results from the Action center."},{"key":"C","text":"Run an advanced hunting query against the DeviceTvmInfoGathering table."},{"key":"D","text":"Run an advanced hunting query against the DeviceProcessEvents table."}]'::jsonb, ARRAY['B']::text[], 'Gói điều tra của Microsoft Defender thu thập thông tin thiết bị và có thể tải xuống từ Trung tâm hành động sau khi thu thập. Đối với các thiết bị Windows, gói này bao gồm tệp CSV liệt kê các chương trình đã cài đặt, cho phép nhận dạng phần mềm hiện được cài đặt trên thiết bị.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-7', 'sc-200', 7, 'You have a Microsoft 365 E5 subscription that uses Microsoft Defender XDR.  
  
You must create a KQL hunting query that meets these requirements:  
  
- Identify devices that received an email with an attachment named File1.pdf in the past 12 hours and opened the attachment.  
- Minimize the resources needed to run the query.  
  
How should you complete the query?', '[]'::jsonb, ARRAY[]::text[], 'EmailAttachmentInfo ghi lại giá trị băm của tệp đính kèm và DeviceFileEvents ghi lại hoạt động của tệp điểm cuối có cùng giá trị SHA256; việc tham gia SHA256 sẽ tương quan với tệp đính kèm được gửi qua email với các thiết bị đã mở tệp đó. `innerunique` chỉ giữ lại các hàng trùng khớp và loại bỏ các khóa nối bên trái trùng lặp, giảm quá trình xử lý so với `inner`. `FileOriginUrl` là URL mà tệp thiết bị được tải xuống, không phải khóa tương quan với tệp đính kèm email.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-8', 'sc-200', 8, 'You have a Microsoft 365 subscription that uses Microsoft Security Copilot.  
  
You plan to configure a custom GPT plugin for Copilot.  
  
Which GPT model is appropriate to use?', '[{"key":"A","text":"gpt-4o"},{"key":"B","text":"o1-mini"},{"key":"C","text":"davinci-002"},{"key":"D","text":"gpt-35-turbo"}]'::jsonb, ARRAY['A']::text[], 'Các plugin GPT Copilot của Microsoft Security hỗ trợ `gpt-4o` dưới dạng `ModelName` có sẵn cho kỹ năng GPT. Tài liệu về bảng kê khai plugin liệt kê `gpt-4o` trong bảng mô hình có sẵn và sử dụng nó trong các ví dụ về bảng kê khai.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-9', 'sc-200', 9, 'You have an Azure subscription that uses Microsoft Sentinel.  
  
You need to minimize the administrative effort required to respond to the incidents and remediate the security threats detected by Microsoft Sentinel.  
  
Which two features should you use? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Microsoft Sentinel workbooks"},{"key":"B","text":"Azure Automation runbooks"},{"key":"C","text":"Microsoft Sentinel automation rules"},{"key":"D","text":"Microsoft Sentinel playbooks"},{"key":"E","text":"Azure Functions apps"}]'::jsonb, ARRAY['C', 'D']::text[], 'Các quy tắc và sách hướng dẫn tự động hóa Microsoft Sentinel cùng nhau giảm thiểu nỗ lực quản trị để ứng phó sự cố. Quy tắc tự động hóa tự động thực thi khi sự cố được tạo hoặc cập nhật, thực hiện các hành động như thay đổi trạng thái, chỉ định chủ sở hữu và quản lý thẻ. Playbook (dựa trên Ứng dụng Azure Logic) cung cấp khả năng khắc phục mạnh mẽ, thường được kích hoạt bởi các quy tắc tự động hóa. Sổ làm việc, sổ tay Azure Automation và Azure Functions không được thiết kế để xử lý sự cố tự động.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-10', 'sc-200', 10, 'You purchase a Microsoft 365 subscription.  
  
You plan to configure Microsoft Cloud App Security.  
  
You need to create a custom template-based policy that detects connections to Microsoft 365 apps originating from a botnet network.  
  
What should you use?', '[]'::jsonb, ARRAY[]::text[], 'Chính sách Access đánh giá hoạt động truy cập và đăng nhập cho các ứng dụng đám mây. Thẻ địa chỉ IP cho phép nó xác định lưu lượng truy cập từ các địa chỉ IP hoặc mạng được phân loại, bao gồm cả mạng botnet, do đó, chính sách truy cập được lọc theo thẻ địa chỉ IP sẽ phát hiện các kết nối được yêu cầu.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-11', 'sc-200', 11, 'You have a Windows 11 device named Device1 that is onboarded to Microsoft Defender for Endpoint, with tamper protection enabled.  
  
A user reports that Microsoft Defender Antivirus blocks installation of a line-of-business (LOB) application.  
  
You enable troubleshooting mode on Device1.  
  
You need to retrieve the logs and setting snapshots that Defender for Endpoint collects while Device1 is in troubleshooting mode. The solution must minimize administrative effort.  
  
What should you do?', '[{"key":"A","text":"Initiate an automated investigation."},{"key":"B","text":"Collect the Microsoft Defender Antivirus troubleshooting diagnostic files."},{"key":"C","text":"Initiate a live response session."},{"key":"D","text":"Collect an investigation package."}]'::jsonb, ARRAY['D']::text[], 'Bộ bảo vệ Microsoft dành cho Điểm cuối thu thập nhật ký hoạt động trong chế độ khắc phục sự cố và chụp ảnh chụp nhanh cài đặt MpPreference trước khi chế độ bắt đầu và ngay trước khi chế độ hết hạn. Những thành phần này được cung cấp trên trang thiết bị thông qua tính năng **Thu thập gói điều tra**, cung cấp bộ sưu tập tập trung cần thiết với nỗ lực quản trị tối thiểu.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-12', 'sc-200', 12, 'Your on-premises network has two Active Directory Domain Services (AD DS) domains named contoso.com and fabrikam.com. Contoso.com has a group named Group1. Fabrikam.com has a group named Group2.  
  
You have a Microsoft Sentinel workspace named WS1 that contains a scheduled query rule named Rule1. Rule1 creates alerts in response to anomalous AD DS security events. Every alert creates an incident.  
  
You need to implement an incident-triage solution that meets the following requirements:  
  
- Security incidents from contoso.com must be assigned to Group1.  
- Security incidents from fabrikam.com must be assigned to Group2.  
- Administrative effort must be minimized.  
  
What should you include in the solution?', '[{"key":"A","text":"a playbook that is triggered by the creation of an incident"},{"key":"B","text":"a playbook that is triggered by the creation of an alert"},{"key":"C","text":"one automation rule assigned to Rule1"},{"key":"D","text":"two automation rules assigned to Rule1"}]'::jsonb, ARRAY['D']::text[], 'Quy tắc tự động hóa Microsoft Sentinel có thể tự động thực hiện các hành động phân loại sự cố, bao gồm chỉ định chủ sở hữu sự cố. Bởi vì mỗi hành động phân công nhắm mục tiêu vào một nhóm duy nhất, nên hãy tạo một quy tắc tự động hóa trong phạm vi Rule1 cho các sự cố trên contoso.com được chỉ định cho Nhóm1 và một quy tắc khác cho các sự cố được chỉ định cho Nhóm2 trên fabrikam.com. Điều này sử dụng tính năng tự động hóa sự cố tích hợp sẵn và tránh việc quản lý thêm các sổ tay.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-13', 'sc-200', 13, 'You have an Azure subscription containing a Microsoft Sentinel workspace and a virtual machine named VM1. VM1 runs Linux and hosts a log forwarder that receives Syslog and Common Event Format (CEF) messages from network appliances on TCP/UDP port 514. VM1 has the Azure Monitor Agent installed and is associated with one data collection rule (DCR) that collects Syslog facilities.  
  
You find that when the appliances send CEF messages by using the `local0` facility, the events are ingested into both the `CommonSecurityLog` table and the `Syslog` table.  
  
You need to prevent the CEF messages from being ingested into the `Syslog` table. The solution must ensure that the CEF messages continue to be ingested into `CommonSecurityLog`.  
  
What should you use?', '[{"key":"A","text":"a KQL function"},{"key":"B","text":"an analytics rule in Microsoft Sentinel"},{"key":"C","text":"an ingestion-time transformation"},{"key":"D","text":"a table-level retention setting"}]'::jsonb, ARRAY['C']::text[], 'Quá trình chuyển đổi tại thời điểm nhập trên luồng Syslog có thể lọc các thông báo có định dạng CEF trước khi chúng được ghi vào bảng Syslog, trong khi luồng CEF riêng biệt tiếp tục ghi các sự kiện đó vào CommonSecurityLog. Microsoft ghi lại đây là cách tiếp cận để tránh trùng lặp khi Syslog và CEF sử dụng cùng một cơ sở.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-14', 'sc-200', 14, 'You have a Microsoft 365 E5 subscription that includes a device named Device1.  
  
In the Microsoft Defender portal, you find that an alert has been triggered for Device1.  
  
From the Device inventory page, you isolate Device1.  
  
You need to obtain a list of the programs installed on Device1.  
  
What should you do?', '[{"key":"A","text":"Run an advanced hunting query against the DeviceProcessEvents table."},{"key":"B","text":"Run an advanced hunting query against the DeviceTvmSoftwareInventory table."},{"key":"C","text":"Initiate an automated investigation and view the results in the Action center."},{"key":"D","text":"Initiate a live response session and run the processes command."}]'::jsonb, ARRAY['B']::text[], 'Bảng Săn tìm nâng cao `DeviceTvmSoftwareInventory` chứa các bản ghi kiểm kê Quản lý lỗ hổng bảo vệ của Microsoft cho phần mềm hiện được cài đặt trên thiết bị, bao gồm tên và phiên bản phần mềm. Truy vấn và lọc bảng này để tìm Device1 sẽ cung cấp danh sách chương trình đã cài đặt.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-15', 'sc-200', 15, 'You have an Azure subscription with Azure Defender enabled for every supported resource type.  
  
You need to configure continuous export of high-severity alerts so that a third-party security information and event management (SIEM) solution can retrieve them.  
  
To which service should the alerts be exported?', '[{"key":"A","text":"Azure Cosmos DB"},{"key":"B","text":"Azure Event Grid"},{"key":"C","text":"Azure Event Hubs"},{"key":"D","text":"Azure Data Lake"}]'::jsonb, ARRAY['C']::text[], 'Azure Event Hubs là điểm đến xuất khẩu liên tục để truyền trực tuyến cảnh báo Microsoft Defender for Cloud tới người tiêu dùng hạ nguồn như giải pháp SIEM của bên thứ ba. Xuất liên tục hỗ trợ lọc dữ liệu cảnh báo theo mức độ nghiêm trọng, bao gồm cả cảnh báo mức độ nghiêm trọng cao.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-16', 'sc-200', 16, 'You have an Azure subscription containing a Log Analytics workspace named Workspace1.  
  
You configure Azure activity logs and Microsoft Entra ID logs to forward to Workspace1.  
  
You need to identify the Azure resources that risky users queried or modified.  
  
Complete the KQL query by selecting the appropriate options in the answer area.', '[]'::jsonb, ARRAY[]::text[], 'MicrosoftGraphActivityLogs ghi lại các yêu cầu API Microsoft Graph và bao gồm người dùng, URI yêu cầu, phương thức yêu cầu, ID yêu cầu và trạng thái phản hồi. Việc tham gia AADRiskyUsers sẽ xác định hoạt động của những người dùng nguy hiểm. `parse_url(RequestUri).Path` trích xuất đường dẫn yêu cầu, sau đó được chuẩn hóa trước khi tổng hợp.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-17', 'sc-200', 17, 'You must implement the Azure Information Protection requirements.  
  
What should you configure first?', '[{"key":"A","text":"Device health and compliance reports settings in Microsoft Defender Security Center"},{"key":"B","text":"scanner clusters in Azure Information Protection from the Azure portal"},{"key":"C","text":"content scan jobs in Azure Information Protection from the Azure portal"},{"key":"D","text":"Advanced features from Settings in Microsoft Defender Security Center"}]'::jsonb, ARRAY['D']::text[], 'Tích hợp Azure Information Protection kế thừa với Bộ bảo vệ Microsoft dành cho Điểm cuối được bật từ **Cài đặt > Tính năng nâng cao** trong Trung tâm Bảo mật của Bộ bảo vệ Microsoft. Việc kích hoạt nó sẽ cho phép Defender for Endpoint khám phá các tệp được gắn nhãn trên các điểm cuối của Windows và gửi dữ liệu liên quan đến Azure Information Protection. Các cụm máy quét và công việc quét nội dung là để quét các kho lưu trữ tại chỗ và không phải là điều kiện tiên quyết để tích hợp điểm cuối.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-18', 'sc-200', 18, 'You have three Azure subscriptions, each containing multiple virtual machines running Windows Server.  
  
You have a Microsoft Sentinel workspace.  
  
You need to ensure that failed sign-in attempts from every virtual machine can be analyzed by using Microsoft Sentinel. The solution must minimize administrative effort.  
  
What should you do first?', '[{"key":"A","text":"From the Microsoft Defender portal, install the Windows Security Events solution."},{"key":"B","text":"On each virtual machine, create an event subscription."},{"key":"C","text":"On each virtual machine, install the Azure Connected Machine agent."},{"key":"D","text":"From the Microsoft Defender portal, install the Syslog solution."}]'::jsonb, ARRAY['A']::text[], 'Giải pháp Sự kiện Bảo mật Windows cho phép trình kết nối Sự kiện Bảo mật Windows Microsoft Sentinel thu thập nhật ký sự kiện Bảo mật Windows, chẳng hạn như các sự kiện đăng nhập không thành công. Bộ sưu tập dựa trên Tác nhân Azure Monitor của nó có thể được quản lý trên quy mô lớn thông qua các quy tắc thu thập dữ liệu, giảm bớt việc quản trị trên mỗi VM. Cần có tác nhân Azure Arc/Connected Machine cho các máy không phải Azure, không phải Azure virtual machines.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-19', 'sc-200', 19, 'You have multiple Azure subscriptions containing multiple Microsoft Sentinel workspaces.  
  
You are creating a Microsoft Sentinel workbook that includes references to the `AzureActivity` table.  
  
You need a KQL query that performs these actions:  
  
- Check whether the `AzureActivity` table exists in every workspace.  
- When the table exists, return one row whose `isMissing` column is set to `0`.  
- When the table does not exist, return one row whose `isMissing` column is set to `1`.  
  
How should you complete the query?', '[]'::jsonb, ARRAY[]::text[], '`datatable (isMissing:int) [1]` tạo hàng dự phòng với `isMissing` được đặt thành 1. `union isfuzzy=true` cho phép liên kết tiếp tục khi không có bảng hoặc không gian làm việc được tham chiếu; nhánh AzureActivity mang lại `isMissing` 0 khi lược đồ của nó tồn tại.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-20', 'sc-200', 20, 'You have a Microsoft 365 subscription that uses Microsoft Defender for Endpoint Plan 2 and includes a Windows device named Device1.  
  
Twenty files on Device1 were quarantined by custom indicators as part of an investigation.  
  
You need to release the 20 files from quarantine.  
  
How should you complete the command?', '[]'::jsonb, ARRAY[]::text[], '`MpCmdRun.exe` là tiện ích dòng lệnh Chống vi-rút của Bộ bảo vệ Microsoft. `-Restore` khôi phục các mục bị cách ly và `-Name EUS:Win32/CustomEnterpriseBlock -All` khôi phục mọi mục bị cách ly liên quan đến việc phát hiện khối doanh nghiệp tùy chỉnh đó.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-21', 'sc-200', 21, 'You have an Azure subscription that includes two users, User1 and User2, and a Microsoft Sentinel workspace.  
  
You need each user to perform the following actions:  
  
- **User1:** Triage incident detections for well-known attack techniques and manage incident status.  
- **User2:** Investigate complex incidents and create indicators, hunting rules, and workbooks.  
  
The solution must comply with the principle of least privilege.  
  
Which role should you assign to each user?', '[]'::jsonb, ARRAY[]::text[], 'Microsoft Sentinel Replyer có thể xem và quản lý các sự cố, bao gồm các thay đổi về phân loại và trạng thái sự cố. Microsoft Sentinel Contributor bao gồm tất cả các quyền của Người phản hồi và thêm quyền tạo cũng như chỉnh sửa tài nguyên và nội dung Microsoft Sentinel, hỗ trợ tạo chỉ báo, quy tắc tìm kiếm và sổ làm việc. Chủ sở hữu cấp quyền Azure rộng hơn mức cần thiết.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-22', 'sc-200', 22, 'You have a Microsoft Sentinel workspace that includes Common Event Format (CEF) data.  
  
You need to run a query on the CEF data.  
  
Which table should you query?', '[{"key":"A","text":"Syslog"},{"key":"B","text":"SecurityEvent"},{"key":"C","text":"CommonSecurityLog"},{"key":"D","text":"TrreatIntelligentIndicator"}]'::jsonb, ARRAY['C']::text[], 'Microsoft Sentinel thu thập các sự kiện Định dạng sự kiện chung (CEF) trong bảng CommonSecurityLog, bao gồm các sự kiện được gửi từ các thiết bị bảo mật như Check Point và Palo Alto.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-23', 'sc-200', 23, 'You need to build a KQL query in a Microsoft Sentinel workspace. The query must return the SecurityEvent record for accounts whose latest record has an EventID value of 4624.  
  
How should you complete the query?', '[]'::jsonb, ARRAY[]::text[], '`arg_max(TimeGenerated, *) by Account` trả về hàng SecurityEvent mới nhất đầy đủ cho mỗi tài khoản. Việc áp dụng `where EventID == 4624` sau đó đảm bảo rằng hàng mới nhất được chọn, thay vì chỉ là hàng 4624 mới nhất, có EventID 4624.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-24', 'sc-200', 24, 'You have a Microsoft 365 subscription that uses Microsoft Defender for Endpoint Plan 2. The subscription includes 1,000 Windows 11 devices running third-party antivirus software with Smart App Control enabled.  
  
You need to ensure that, if Defender for Endpoint detects a malicious artifact missed by the third-party software, it automatically remediates that artifact.  
  
What should you configure?', '[{"key":"A","text":"endpoint detection and response (EDR) in block mode"},{"key":"B","text":"Allow or block file"},{"key":"C","text":"Automatically resolve alerts"},{"key":"D","text":"tamper protection"}]'::jsonb, ARRAY['A']::text[], 'Phát hiện và phản hồi điểm cuối (EDR) ở chế độ chặn cung cấp khả năng bảo vệ sau vi phạm cho các thiết bị sử dụng giải pháp chống vi-rút không phải của Microsoft trong khi Tính năng chống vi-rút của Bộ bảo vệ Microsoft chạy ở chế độ thụ động. Nó chặn và tự động khắc phục các thành phần độc hại được Defender for Endpoint phát hiện mà sản phẩm chống vi-rút chính đã bỏ sót.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-25', 'sc-200', 25, 'You have 1,000 on-premises Windows 11 Pro devices that are onboarded to Microsoft Defender for Endpoint.  
  
You have a Microsoft 365 subscription that uses Microsoft Defender XDR.  
  
You discover that an attacker performed the following actions on a device:  
  
- Modified the file system path of a registry-based antivirus exclusion  
- Downloaded a malicious file to that file system path  
  
You initiate a live response session on the device.  
  
You need to remove the malicious file.  
  
Which command should you run?', '[{"key":"A","text":"collect"},{"key":"B","text":"getfile"},{"key":"C","text":"undo"},{"key":"D","text":"remediate"}]'::jsonb, ARRAY['D']::text[], 'Trong Microsoft Defender dành cho Phản hồi trực tiếp điểm cuối, `remediate` sẽ xóa một thực thể khỏi thiết bị. Đối với một thực thể file, hành động khắc phục là xóa nên sẽ loại bỏ file độc ​​hại theo đường dẫn đã chỉ định.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-26', 'sc-200', 26, 'You implement Safe Attachments policies in Microsoft Defender for Office 365.  
  
Users report that email messages with attachments take longer than expected to arrive.  
  
You need to decrease the time required to deliver messages containing attachments without compromising security. The attachments must be scanned for malware, and all messages that contain malware must be blocked.  
  
What should you configure in the Safe Attachments policies?', '[{"key":"A","text":"Dynamic Delivery"},{"key":"B","text":"Replace"},{"key":"C","text":"Block and Enable redirect"},{"key":"D","text":"Monitor and Enable redirect"}]'::jsonb, ARRAY['A']::text[], 'Phân phối động gửi tin nhắn ngay lập tức trong khi thay thế phần giữ chỗ tệp đính kèm cho đến khi quá trình quét Tệp đính kèm an toàn hoàn tất. Nếu phần đính kèm được xác định là độc hại thì thư sẽ bị cách ly, duy trì khả năng bảo vệ đồng thời tránh tình trạng chậm trễ thông thường trong việc gửi nội dung thư.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-27', 'sc-200', 27, 'You have an Azure subscription that includes a Log Analytics workspace.  
  
You need to enable just-in-time (JIT) VM access and network detections for Azure resources. Where should Azure Defender be enabled?', '[{"key":"A","text":"at the subscription level"},{"key":"B","text":"at the workspace level"},{"key":"C","text":"at the resource level"}]'::jsonb, ARRAY['A']::text[], 'Việc truy cập VM và phát hiện mạng kịp thời cho tài nguyên Azure yêu cầu phải bật Bộ bảo vệ Microsoft dành cho Máy chủ trên gói đăng ký có chứa khối lượng công việc. Chỉ hỗ trợ cấp độ không gian làm việc không cung cấp những khả năng đó cho tài nguyên Azure.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-28', 'sc-200', 28, 'HOTSPOT  
  
You have an Azure subscription containing a guest user named User1 and a Microsoft Sentinel workspace named workspace1.  
  
You must ensure that User1 can triage Microsoft Sentinel incidents in workspace1, while following the principle of least privilege.  
  
Which roles should be assigned to User1?', '[]'::jsonb, ARRAY[]::text[], 'Microsoft Sentinel Replyer có thể xem và quản lý các sự cố, khiến nó trở thành vai trò Sentinel có ít đặc quyền nhất trong việc phân loại sự cố. Người dùng khách cần chỉ định hoặc quản lý sự cố Sentinel cũng cần có vai trò Microsoft Entra Directory Readers. Trình đọc toàn cầu cấp khả năng hiển thị rộng hơn cho toàn bộ đối tượng thuê và trình đọc gán thuộc tính không cung cấp khả năng đọc thư mục cần thiết.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-29', 'sc-200', 29, 'You have two Azure subscriptions that use Microsoft Defender for Cloud.  
  
You need to ensure that particular Defender for Cloud security alerts are suppressed at the root management group level. The solution must minimize administrative effort.  
  
What should you do in the Azure portal?', '[{"key":"A","text":"Create an Azure Policy assignment."},{"key":"B","text":"Modify the Workload protections settings in Defender for Cloud."},{"key":"C","text":"Create an alert rule in Azure Monitor."},{"key":"D","text":"Modify the alert settings in Defender for Cloud."}]'::jsonb, ARRAY['A']::text[], 'Các quy tắc ngăn chặn cảnh báo Microsoft Defender for Cloud có thể được áp dụng ở phạm vi nhóm quản lý bằng cách sử dụng Chính sách Azure. Việc gán Chính sách Azure ở nhóm quản lý gốc sẽ áp dụng tập trung cấu hình ngăn chặn cho các đăng ký con của nó, tránh việc quản trị cấp đăng ký riêng biệt.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-30', 'sc-200', 30, 'You learn of a new common vulnerabilities and exposures (CVE) vulnerability that affects your environment.  
  
You must use Microsoft Defender XDR to request remediation from the team responsible for affected systems when a documented active exploit is available.  
  
Which three actions should you take, in sequence?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"C"},{"id":"step2","text":"Slot 2:","correctAnswer":"F"},{"id":"step3","text":"Slot 3:","correctAnswer":"E"}],"choices":[{"key":"A","text":"From Device Inventory, search for the CVE."},{"key":"B","text":"Open the Threat Protection report."},{"key":"C","text":"From Threat & Vulnerability Management, select Weaknesses, and search for the CVE."},{"key":"D","text":"From Advanced hunting, search for CveId in the DeviceTvmSoftwareInventoryVulnerabilities table."},{"key":"E","text":"Create the remediation request."},{"key":"F","text":"Select Security recommendations."}]}'::jsonb, ARRAY['step1=C', 'step2=F', 'step3=E']::text[], 'Quản lý lỗ hổng bảo vệ liệt kê các CVE trên trang Điểm yếu. Khuyến nghị bảo mật liên quan của CVE là điểm bắt đầu khắc phục; việc chọn nó sẽ cho phép gửi yêu cầu khắc phục tới nhóm quản trị viên CNTT, bao gồm thông qua quy trình làm việc tích hợp Intune khi được định cấu hình.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-31', 'sc-200', 31, 'Your company uses Azure Sentinel to manage alerts from over 10,000 IoT devices.  
  
A security manager reports that tracking security threats is becoming increasingly difficult because of the high volume of incidents.  
  
You need to recommend a solution that provides a custom visualization to simplify threat investigations and infer threats by using machine learning.  
  
What should you include in the recommendation?', '[{"key":"A","text":"built-in queries"},{"key":"B","text":"livestream"},{"key":"C","text":"notebooks"},{"key":"D","text":"bookmarks"}]'::jsonb, ARRAY['C']::text[], 'Sổ ghi chép Microsoft Sentinel sử dụng sổ ghi chép Jupyter và có thể tạo hình ảnh trực quan tùy chỉnh để điều tra bảo mật trong khi sử dụng các mô hình và thư viện máy học để phân tích dữ liệu và suy ra các mối đe dọa.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-32', 'sc-200', 32, 'Your on-premises network contains an Active Directory Domain Services (AD DS) forest.  
  
You have a Microsoft Entra tenant that uses Microsoft Defender for Identity. The AD DS forest syncs with the tenant.  
  
You need to create a hunting query that will identify LDAP simple binds to the AD DS domain controllers.  
  
Which table should you query?', '[{"key":"A","text":"AADServicePrincipalRiskEvents"},{"key":"B","text":"AADDomainServicesAccountLogon"},{"key":"C","text":"SigninLogs"},{"key":"D","text":"IdentityLogonEvents"}]'::jsonb, ARRAY['D']::text[], 'Bảng **IdentityLogonEvents** từ Defender for Identity ghi lại các sự kiện xác thực bao gồm chi tiết giao thức. Nó có thể được truy vấn để xác định các hoạt động liên kết đơn giản LDAP với các bộ lọc như `Protocol == "LDAP"` và `AuthenticationType == "SimpleBind"`. Bảng này đặc biệt hỗ trợ các tình huống tìm kiếm Danh tính của Defender.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-33', 'sc-200', 33, 'You have an Azure subscription that uses Microsoft Security Copilot.  
  
You need to temporarily raise the number of security compute units.  
  
What is the minimum time interval for which you can be billed?', '[{"key":"A","text":"1 second"},{"key":"B","text":"1 minute"},{"key":"C","text":"1 hour"},{"key":"D","text":"1 day"}]'::jsonb, ARRAY['C']::text[], 'Đơn vị tính toán bảo mật được cung cấp cho Microsoft Security Copilot được tính phí theo khối hàng giờ, với thời hạn thanh toán tối thiểu là một giờ; việc sử dụng trong vòng một giờ sẽ được tính phí như một giờ SCU được cung cấp đầy đủ.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-34', 'sc-200', 34, 'You have an on-premises virtual machine named VM1 that runs Windows Server.  
  
You have a Microsoft Sentinel workspace named Workspace1.  
  
You install the Azure Connected Machine agent on VM1.  
  
You need to collect events from VM1 and send them to Workspace1.  
  
Which two actions should you take? Each correct answer represents part of the solution.  
  
NOTE: Each correct answer is worth one point.', '[{"key":"A","text":"OnVM1, install the Microsoft Monitoring Agent."},{"key":"B","text":"On VM1, install the Log Analytics agent."},{"key":"C","text":"From the Microsoft Defender portal, add the Windows Security Events via AMA data connector."},{"key":"D","text":"From the Microsoft Defender portal, add the Syslog via AMA data connector."},{"key":"E","text":"On VM1, enable the Azure Monitor Agent extensions."},{"key":"F","text":"From the Microsoft Defender portal, create a data collection rule (DCR) that targets VM1."}]'::jsonb, ARRAY['C', 'F']::text[], 'Việc nhập sự kiện bảo mật Windows cho Máy chủ Windows hỗ trợ Azure Arc sử dụng Sự kiện bảo mật Windows thông qua trình kết nối AMA và quy tắc thu thập dữ liệu nhắm mục tiêu máy chủ. DCR chỉ định các sự kiện cần thu thập và gửi chúng đến không gian làm việc Log Analytics được Microsoft Sentinel sử dụng; khi máy được chọn chưa có Tác nhân Azure Monitor, quá trình cấu hình sẽ cài đặt nó.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-35', 'sc-200', 35, 'You have 100 on-premises servers running Windows Server that have no internet access.  
  
An Azure subscription contains a dedicated monitoring server, and you have a Microsoft Sentinel workspace named Workspace1.  
  
You need to ingest Windows event logs from the on-premises servers into Workspace1.  
  
What should you do?', '[]'::jsonb, ARRAY[]::text[], 'Chuyển tiếp sự kiện Windows thu thập các sự kiện Windows từ máy tính nguồn tại bộ thu thập sự kiện Windows, cho phép máy chủ giám sát chuyên dụng gửi các sự kiện hợp nhất tới Microsoft Sentinel. Trình kết nối dữ liệu Sự kiện được chuyển tiếp của Windows là trình kết nối Sentinel dành cho phương pháp thu thập này; nó tránh yêu cầu mọi máy chủ nguồn phải có quyền truy cập internet trực tiếp.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-36', 'sc-200', 36, 'You have an Azure subscription containing the users in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783733178928-80sdmot6.png)  
  
You must delegate these tasks:  
  
- Enable Microsoft Defender for Servers on virtual machines.  
- Review security recommendations and enable server vulnerability scans.  
  
The solution must follow the principle of least privilege.  
  
Which user should perform each task? An individual user may be used once, multiple times, or not at all.', '{"statements":[{"id":"enable_defender_servers","text":"Enable Microsoft Defender for Servers on virtual machines:","correctAnswer":"A"},{"id":"review_recommendations_enable_scans","text":"Review security recommendations and enable server vulnerability scans:","correctAnswer":"C"}],"choices":[{"key":"A","text":"User1"},{"key":"B","text":"User2"},{"key":"C","text":"User3"}]}'::jsonb, ARRAY['enable_defender_servers=A', 'review_recommendations_enable_scans=C']::text[], 'Vai trò quản trị viên Bảo mật có thể xem và cập nhật cài đặt Microsoft Defender for Cloud, bao gồm chính sách bảo mật và gói Defender, do đó, vai trò được liệt kê có ít đặc quyền nhất có thể kích hoạt Defender cho Máy chủ. Security Reader ở chế độ chỉ đọc và không thể kích hoạt máy quét. Cộng tác viên có thể xem xét các đề xuất và thực hiện các thay đổi cần thiết về cấu hình máy ảo để cho phép quét lỗ hổng.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783733178928-80sdmot6.png', 'published'),
  ('sc200-37', 'sc-200', 37, 'Which team’s issue can be addressed by using Microsoft Defender for Endpoint?', '[{"key":"A","text":"executive"},{"key":"B","text":"sales"},{"key":"C","text":"marketing"}]'::jsonb, ARRAY['B']::text[], 'Bộ bảo vệ Microsoft dành cho Điểm cuối cung cấp khả năng bảo vệ, phát hiện, điều tra và phản hồi mối đe dọa điểm cuối cho các thiết bị của tổ chức. Điều này giải quyết các rủi ro bảo mật của các điểm cuối di động và được sử dụng từ xa của nhóm bán hàng.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-38', 'sc-200', 38, 'Your organization uses line-of-business applications that include Microsoft Office VBA macros.  
  
You need to stop users from downloading and running extra payloads from Office VBA macros as additional child processes.  
  
Which two commands can you run to meet the goal? Each correct answer provides a complete solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"![](https://cdn.examcademy.com/images/questions/1785597838249-x2mker77.png)"},{"key":"B","text":"![](https://cdn.examcademy.com/images/questions/1785597840540-gcejq54o.png)"},{"key":"C","text":"![](https://cdn.examcademy.com/images/questions/1785597842540-wn42gsy0.png)"},{"key":"D","text":"![](https://cdn.examcademy.com/images/questions/1785597844797-qe8x0bmb.png)"}]'::jsonb, ARRAY['A', 'D']::text[], 'Quy tắc ASR được xác định bởi `D4F940AB-401B-4EFC-AADC-AD5F3C50688A` chặn các ứng dụng Office tạo các tiến trình con, bao gồm cả hoạt động macro VBA độc hại tải xuống và cố gắng chạy các tải trọng bổ sung. Quy tắc phải sử dụng hành động `Enabled`; `AuditMode` chỉ ghi lại hoạt động mà không chặn nó. Cả `Add-MpPreference` và `Set-MpPreference` đều có thể kích hoạt quy tắc, mặc dù `Set-MpPreference` thay thế cài đặt quy tắc ASR hiện có.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-39', 'sc-200', 39, 'You have a Microsoft Sentinel workspace.  
  
You enable User and Entity Behavior Analytics (UEBA) by using Audit Logs and Signin Logs.  
  
The following entities are identified in the Azure AD tenant:  
  
- App name: App1  
- IP address: 192.168.1.2  
- Computer name: Device1  
- Used client app: Microsoft Edge  
- Email address: [email protected]  
- Sign-in URL: https://www.company.com  
  
Which entities can be investigated by using UEBA?', '[{"key":"A","text":"IP address and email address only"},{"key":"B","text":"app name, computer name, IP address, email address, and used client app only"},{"key":"C","text":"IP address only"},{"key":"D","text":"used client app and app name only"}]'::jsonb, ARRAY['B']::text[], 'Microsoft Sentinel UEBA sử dụng Nhật ký kiểm tra và Nhật ký đăng nhập được kết nối để xây dựng bối cảnh hành vi cho người dùng, thiết bị hoặc máy chủ, địa chỉ IP và ứng dụng. Địa chỉ email đại diện cho danh tính người dùng, tên máy tính đại diện cho một thiết bị và tên ứng dụng cũng như ứng dụng khách cung cấp bối cảnh hoạt động liên quan đến ứng dụng. URL đăng nhập không phải là thực thể UEBA có thể điều tra được trong trường hợp này.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-40', 'sc-200', 40, 'You have a Microsoft 365 subscription.  
  
You plan to use Microsoft Defender XDR to hunt for email-related threats.  
  
You need to identify sign-ins performed by users within 30 minutes of receiving a known malicious email.  
  
How should you complete the KQL query?', '[]'::jsonb, ARRAY[]::text[], '`let` xác định biểu thức dạng bảng được đặt tên `MaliciousEmails` để sử dụng sau này trong truy vấn. `split(RecipientEmailAddress, "@")[0]` trả về phần trước dấu hiệu, cho phép nó khớp với `AccountName` trong IdentityLogonEvents. Bộ lọc cuối cùng giữ lại các lần đăng nhập xảy ra từ 0 đến 30 phút sau dấu thời gian của email.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-41', 'sc-200', 41, 'You have an Azure subscription that contains a user named User1 and a Microsoft Sentinel workspace named WS1. WS1 uses Microsoft Defender for Cloud.  
  
You have the Microsoft security analytics rules shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783739295356-zn6cocbt.png)  
  
User1 performs an action that matches Rule1, Rule2, Rule3, and Rule4.  
  
How many incidents will be created in WS1?', '[{"key":"A","text":"1"},{"key":"B","text":"2"},{"key":"C","text":"3"},{"key":"D","text":"4"}]'::jsonb, ARRAY['D']::text[], 'Mỗi quy tắc phân tích được định cấu hình để tạo ra sự cố sẽ hoạt động độc lập bất cứ khi nào các tiêu chí riêng của nó được đáp ứng; cảnh báo không được tự động hợp nhất giữa các quy tắc riêng biệt trừ khi việc tự động hóa hoặc nhóm sự cố theo quy tắc chéo rõ ràng được định cấu hình. Vì một hành động duy nhất đáp ứng tiêu chí của cả bốn quy tắc riêng biệt nên mỗi quy tắc sẽ kích hoạt và tạo ra sự cố riêng, dẫn đến bốn sự cố trong WS1.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783739295356-zn6cocbt.png', 'published'),
  ('sc200-42', 'sc-200', 42, 'You have an Azure subscription that contains a Microsoft Sentinel workspace.  
  
You need to create a Kusto Query Language (KQL) hunting query that meets these requirements:  
  
- Identifies an anomalous number of changes to network security group (NSG) rules made by the same security principal.  
- Automatically associates the security principal with a Microsoft Sentinel entity.  
  
How should you complete the query?', '[]'::jsonb, ARRAY[]::text[], 'Nhật ký hoạt động Azure chứa các bản ghi hoạt động của Trình quản lý tài nguyên Azure, bao gồm ghi quy tắc bảo mật NSG và giá trị `Caller` của chúng. Tổng hợp bởi `Caller` xác định các thay đổi có thể quy cho từng nguyên tắc bảo mật. `extend AccountCustomEntity = Caller` tạo cột thực thể tùy chỉnh mà Microsoft Sentinel nhận dạng để ánh xạ thực thể trong kết quả truy vấn.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-43', 'sc-200', 43, 'You have a Microsoft 365 E5 subscription that uses Microsoft 365 Defender for Endpoint.  
  
You need to ensure that you can initiate remote shell connections to Windows servers by using the Microsoft 365 Defender portal.  
  
What should you configure?', '[]'::jsonb, ARRAY[]::text[], 'Phản hồi trực tiếp cho máy chủ phải được bật trong các tính năng Nâng cao để bắt đầu phiên Phản hồi trực tiếp trên máy chủ. Một nhóm thiết bị cần có mức độ tự động hóa/khắc phục được chỉ định cho các hành động Phản hồi trực tiếp trên thiết bị của nhóm đó; thẻ và giá trị thiết bị chỉ là tiêu chí thành viên.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-44', 'sc-200', 44, 'You have an on-premises Linux server that runs a background process named App1 and has the Azure Connected Machine agent installed. You have a Microsoft Sentinel workspace named WS1.  
  
Configure a data collection rule (DCR) named DCR1 that uses the Syslog via AMA connector to collect messages related to App1. The solution must meet these requirements:  
  
- Collect only messages that have a critical priority level.  
- Minimize the volume of collected data.  
  
Which facility and log level should DCR1 use?', '[]'::jsonb, ARRAY[]::text[], 'LOG_DAEMON là cơ sở nhật ký hệ thống cho các thông báo daemon/process-background. LOG_CRIT là mức độ nghiêm trọng tới hạn; LOG_EMERG là trường hợp khẩn cấp, nghiêm trọng hơn. Azure Monitor thu thập các sự kiện ở mức độ nghiêm trọng tối thiểu đã chọn và cao hơn cho cơ sở đã chọn.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-45', 'sc-200', 45, 'You have a Microsoft 365 E5 subscription that uses Microsoft Defender XDR and contains a user named User1.  
  
You need to ensure that User1 can manage Microsoft Defender XDR custom detection rules and Endpoint security policies. The solution must follow the principle of least privilege.  
  
Which role should you assign to User1?', '[{"key":"A","text":"Security Administrator"},{"key":"B","text":"Security Operator"},{"key":"C","text":"Cloud Device Administrator"},{"key":"D","text":"Desktop Analytics Administrator"}]'::jsonb, ARRAY['A']::text[], 'Vai trò **Quản trị viên bảo mật** có quyền quản lý cả quy tắc phát hiện tùy chỉnh và chính sách bảo mật điểm cuối trong Microsoft Defender XDR. Vai trò Người vận hành bảo mật có thể xem và quản lý cảnh báo nhưng không thể sửa đổi chính sách. Theo đặc quyền tối thiểu, vai trò tối thiểu cấp cả hai quyền bắt buộc là Quản trị viên bảo mật.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-46', 'sc-200', 46, 'You have a Microsoft Sentinel workspace.  
  
A KQL query returns Microsoft Sentinel incidents stored in the `SecurityIncident` table that occurred during the past 90 days.  
  
You need to create a Microsoft Sentinel workbook that includes a visualization of the query.  
  
What should you select for **Data source** and **Resource type**?', '[]'::jsonb, ARRAY[]::text[], 'Bảng `SecurityIncident` được truy vấn thông qua Nhật ký Azure Monitor trong không gian làm việc Log Analytics làm nền tảng cho Microsoft Sentinel. Do đó, truy vấn sổ làm việc Sentinel sử dụng nguồn dữ liệu Nhật ký (Analytics) và loại tài nguyên Log Analytics.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-47', 'sc-200', 47, 'You have 50 Microsoft Sentinel workspaces.  
  
You need to view every incident from all the workspaces on one page in the Azure portal. The solution must minimize administrative effort.  
  
Which Azure portal page should you use?', '[{"key":"A","text":"Microsoft Sentinel - Incidents"},{"key":"B","text":"Microsoft Sentinel - Workbooks"},{"key":"C","text":"Microsoft Sentinel"},{"key":"D","text":"Log Analytics workspaces"}]'::jsonb, ARRAY['C']::text[], 'Trang đích Microsoft Sentinel cho phép bạn chọn nhiều không gian làm việc có thể truy cập và mở chế độ xem sự cố thống nhất. Chế độ xem nhiều không gian làm việc hỗ trợ tới 100 không gian làm việc và hiển thị các sự cố từ các không gian làm việc đã chọn trong một danh sách, do đó, chế độ xem này có thể chứa 50 không gian làm việc mà không cần xây dựng giải pháp tổng hợp riêng.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-48', 'sc-200', 48, 'You have a Microsoft 365 E5 subscription that uses Microsoft Defender 365.  
  
Your network contains an on-premises Active Directory Domain Services (AD DS) domain that syncs with Azure AD.  
  
You need to identify the 100 most recent sign-in attempts recorded on devices and AD DS domain controllers.  
  
How should you complete the KQL query?', '[]'::jsonb, ARRAY[]::text[], '`DeviceLogonEvents` lưu giữ các sự kiện đăng nhập thiết bị, trong khi `IdentityLogonEvents` chứa các sự kiện xác thực được ghi lại từ bộ điều khiển miền AD DS tại chỗ. `union` nối cả hai bộ sự kiện vào một kết quả trước khi `Timestamp` sắp xếp; thay vào đó, việc tham gia sẽ yêu cầu các hàng khớp trên một khóa và sẽ không tạo ra danh sách đăng nhập kết hợp được yêu cầu.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-49', 'sc-200', 49, 'You have a Microsoft 365 subscription that uses Microsoft Defender XDR. All endpoint devices are onboarded to Microsoft Defender for Endpoint.  
  
You have an Azure subscription containing a Microsoft Sentinel workspace named Workspace1. All Microsoft Defender XDR events are ingested into Workspace1.  
  
You have a Microsoft Entra tenant.  
  
You create a KQL query named query1 that searches device logs for a known vulnerability.  
  
You need to ensure that query1 runs every hour. The solution must minimize administrative effort.  
  
What should you configure?', '[{"key":"A","text":"a custom detection rule"},{"key":"B","text":"automated investigation and response (AIR)"},{"key":"C","text":"a watchlist"},{"key":"D","text":"an automation rule"}]'::jsonb, ARRAY['A']::text[], 'Quy tắc phát hiện tùy chỉnh XDR của Bộ bảo vệ Microsoft sử dụng các truy vấn KQL tìm kiếm nâng cao và có thể chạy ở tần suất được định cấu hình, bao gồm cả mỗi giờ. Do đó, việc định cấu hình query1 làm quy tắc phát hiện tùy chỉnh sẽ lên lịch tìm kiếm lỗ hổng định kỳ với mức quản lý tối thiểu.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-50', 'sc-200', 50, 'You need to recommend a solution that satisfies the technical requirements for the Azure virtual machines.  
  
What should the recommendation include?', '[{"key":"A","text":"just-in-time (JIT) access"},{"key":"B","text":"Azure Defender"},{"key":"C","text":"Azure Firewall"},{"key":"D","text":"Azure Application Gateway"}]'::jsonb, ARRAY['B']::text[], 'Azure Defender, hiện được phân phối thông qua Microsoft Defender for Cloud/Defender for Servers, cung cấp khả năng bảo vệ bảo mật cho Azure virtual machines, bao gồm phát hiện mối đe dọa và kiểm soát bảo mật VM. Quyền truy cập VM đúng lúc là một khả năng được cung cấp thông qua Defender for Cloud chứ không phải là giải pháp thay thế cho dịch vụ bảo vệ VM rộng hơn.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-51', 'sc-200', 51, 'Solution: You create a scheduled query rule for a data connector.  
  
Does this achieve the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[], 'Quy tắc phân tích theo lịch trình Microsoft Sentinel chạy truy vấn KQL dựa trên dữ liệu được nhập thông qua trình kết nối. Khi truy vấn phát hiện điều kiện đăng nhập IP độc hại đã xác định, quy tắc sẽ tạo ra cảnh báo; việc tạo sự cố được bật theo mặc định cho các cảnh báo do quy tắc tạo ra.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-52', 'sc-200', 52, 'Solution: You create a hunting bookmark.  
  
Does this achieve the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], 'Dấu trang săn bắn ghi lại kết quả săn bắn đã chọn để điều tra sau này. Nó không tự động phát hiện các lần đăng nhập từ các địa chỉ IP độc hại hoặc tạo ra sự cố. Việc tạo sự cố tự động được định cấu hình thông qua quy tắc phân tích khi bật tính năng tạo sự cố.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-53', 'sc-200', 53, 'Solution: You create a Microsoft incident-creation rule for a data connector.  
  
Does this meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], 'Quy tắc tạo sự cố của Microsoft chỉ chuyển đổi cảnh báo rằng một sản phẩm bảo mật được kết nối của Microsoft (như Defender for Cloud hoặc Defender for Identity) đã tạo thành sự cố Sentinel; nó không tự kiểm tra dữ liệu hoạt động hoặc đăng nhập thô để tìm các chỉ báo như địa chỉ IP nguồn độc hại. Việc phát hiện hoạt động đăng nhập vào máy ảo Azure từ một IP độc hại yêu cầu quy tắc phân tích Fusion (được lên lịch) hoặc tùy chỉnh để truy vấn nhật ký có liên quan và so sánh chúng với các chỉ báo thông tin về mối đe dọa, do đó, việc chỉ bật quy tắc tạo sự cố sẽ không đáp ứng được mục tiêu này.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-54', 'sc-200', 54, 'Solution: You create a livestream based on a query.  
  
Does this fulfill the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], 'Các buổi phát trực tiếp săn Microsoft Sentinel chạy các truy vấn tương tác và thông báo về các trận đấu, nhưng chúng không tự động tạo ra sự cố. Cần có quy tắc phân tích để phát hiện hoạt động đăng nhập độc hại và tạo cảnh báo cũng như sự cố liên quan.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-55', 'sc-200', 55, 'You have a Microsoft Sentinel workspace named Workspace1 that includes a table named CommonSecurityLog.  
  
Logs are ingested into CommonSecurityLog, with an average ingestion time of five minutes.  
  
Create an analytics rule with a seven-minute lookback that uses data in CommonSecurityLog. The solution must:  
  
- Prevent an event from being processed twice.  
- Minimize missed events caused by log-ingestion delays.  
  
Complete the KQL query that defines the rule.', '[]'::jsonb, ARRAY[]::text[], 'Bộ lọc TimeGenerated phải kéo dài thời gian trễ nhập 5 phút và xem lại quy tắc 7 phút để các sự kiện bị trì hoãn vẫn đủ điều kiện. Việc lọc theo ingestion_time() theo quy tắc xem lại 7 phút sẽ giới hạn kết quả đối với các bản ghi mới được nhập, ngăn không cho cửa sổ TimeGenerated mở rộng xử lý lại cùng một bản ghi trong các lần chạy quy tắc sau này.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-56', 'sc-200', 56, 'You have a Microsoft 365 E5 subscription containing two users named User1 and User2.  
  
The hunting query is shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783732838563-urcqx1te.png)  
  
The users perform these actions:  
  
- User1 assigns User2 the Global administrator role.  
- User1 creates a new user named User3 and assigns that user a Microsoft Teams license.  
- User2 creates a new user named User4 and assigns that user the Security reader role.  
- User2 creates a new user named User5 and assigns that user the Security operator role.  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"The query will identify the role assignment of User2.","correctAnswer":"No"},{"id":"2","text":"The query will identify the creation of User3.","correctAnswer":"No"},{"id":"3","text":"The query will identify the creation of User5.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:No', '2:No', '3:No']::text[], 'Truy vấn thực hiện liên kết bên trong giữa những người dùng mới được thêm vào trong AuditLogs và Người gọi các hoạt động gán vai trò trong AzureActivity. Các giá trị của người dùng đã tạo là User3, User4 và User5, trong khi các lệnh gọi gán vai trò là User1 và User2. Vì không có giá trị nào khớp với nhau nên các hàng đã nối no sẽ được trả về. Kiểu nối mặc định của KQL là Innerunique, chỉ trả về các hàng khớp.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783732838563-urcqx1te.png', 'published'),
  ('sc200-57', 'sc-200', 57, 'You have an Azure subscription that uses Microsoft Defender for Cloud and includes an Azure logic app named app1.  
  
You need to ensure that app1 starts when a particular Defender for Cloud security alert is generated. How should you complete the Azure Resource Manager (ARM) template?', '[]'::jsonb, ARRAY[]::text[], 'Tự động hóa Microsoft Defender for Cloud sử dụng loại tài nguyên `Microsoft.Security/automations`. Hành động tự động hóa Ứng dụng Logic yêu cầu URI gọi lại kích hoạt Ứng dụng Logic; URL gọi lại được lấy từ đường dẫn tài nguyên `Microsoft.Logic/workflows/triggers` cho trình kích hoạt `manual`.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-58', 'sc-200', 58, 'You have a Microsoft 365 E5 subscription that uses Microsoft Defender XDR.  
  
You are investigating an incident.  
  
You need to review the incident tasks that have been performed.  
  
What can you use on the Incident page?', '[{"key":"A","text":"Tasks only"},{"key":"B","text":"Tasks and Activity log only"},{"key":"C","text":"Tasks and Alert timeline only"},{"key":"D","text":"Tasks, Activity log, and Alert timeline"}]'::jsonb, ARRAY['D']::text[], 'Trang Sự cố cung cấp các nhiệm vụ để theo dõi công việc điều tra, nhật ký hoạt động để xem xét các hành động được thực hiện đối với sự cố và dòng thời gian cảnh báo hiển thị các cảnh báo liên quan theo thứ tự thời gian.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-59', 'sc-200', 59, 'You have a Microsoft 365 E5 subscription that uses Microsoft Defender XDR and contains two users named User1 and User2.  
  
You need to ensure that the users can perform searches by using the Microsoft Purview portal. The solution must meet the following requirements:  
  
- Ensure that User1 can search the Microsoft Purview Audit service logs and review the Microsoft Purview Audit service configuration.  
- Ensure that User2 can search Microsoft Exchange Online mailboxes.  
- Follow the principle of least privilege.  
  
To which Microsoft Purview role group should you add each user?', '[]'::jsonb, ARRAY[]::text[], 'Trình đọc kiểm tra cấp quyền truy cập chỉ đọc để tìm kiếm và xuất nhật ký kiểm tra mà không được phép bật hoặc tắt tính năng ghi nhật ký kiểm tra. Trình điều tra dữ liệu cho phép tìm kiếm điều tra trên các nguồn dữ liệu Microsoft 365, bao gồm tệp đính kèm email và hộp thư Exchange Online mà không chỉ định vai trò cho các giải pháp tuân thủ không liên quan.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-60', 'sc-200', 60, 'You have 500 on-premises Windows 11 devices that use Microsoft Defender for Endpoint.  

You enable Network device discovery.  
  
You need to create a hunting query that will identify discovered network devices and return the identity of the onboarded device that discovered each network device.  
  
Which built-in function should you use?', '[{"key":"A","text":"SeenBy()"},{"key":"B","text":"DeviceFromIP()"},{"key":"C","text":"next()"},{"key":"D","text":"current_cluster_endpoint()"}]'::jsonb, ARRAY['A']::text[], 'Chức năng tích hợp SeenBy() rất cần thiết cho các truy vấn khám phá thiết bị mạng. Nó trả về thông tin chi tiết về thiết bị tích hợp nào đã quan sát từng thiết bị mạng được phát hiện, giúp định vị các thiết bị trong cấu trúc liên kết mạng. DeviceFromIP(), next() và current_cluster_endpoint() không cung cấp khả năng hiển thị giữa các thiết bị cần thiết cho kịch bản tìm kiếm này.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-61', 'sc-200', 61, 'You have a Microsoft 365 subscription that uses Microsoft 365 Defender.  
  
A remediation action from an automated investigation quarantines a file on multiple devices.  
  
You need to mark the file as safe and remove it from quarantine on the devices.  
  
What should you use in the Microsoft 365 Defender portal?', '[{"key":"A","text":"From the History tab in the Action center, revert the actions."},{"key":"B","text":"From the investigation page, review the AIR processes."},{"key":"C","text":"From Quarantine from the Review page, modify the rules."},{"key":"D","text":"From Threat tracker, review the queries."}]'::jsonb, ARRAY['A']::text[], 'Tab Lịch sử của Trung tâm hành động của Bộ bảo vệ Microsoft ghi lại các hành động khắc phục đã hoàn thành và cho phép người dùng được ủy quyền hoàn tác hành động **Cách ly tệp**. Đối với một tệp bị cách ly trên nhiều thiết bị, thao tác hoàn tác có thể được áp dụng cho các phiên bản bổ sung, giải phóng tệp khỏi vùng cách ly.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-62', 'sc-200', 62, 'You have a custom Microsoft Sentinel workbook named Workbook1.  
  
You need to add a grid to Workbook1. The solution must ensure that the grid includes a maximum of 100 rows.  
  
What should you do?', '[{"key":"A","text":"In the grid query, include the take operator."},{"key":"B","text":"In the grid query, include the project operator."},{"key":"C","text":"In the query editor interface, configure Settings."},{"key":"D","text":"In the query editor interface, select Advanced Editor."}]'::jsonb, ARRAY['C']::text[], 'Lưới sổ làm việc Azure Monitor có giới hạn hàng có thể định cấu hình trong cài đặt nâng cao của thành phần truy vấn. Định cấu hình giới hạn hàng lưới là 100 để đảm bảo rằng no có hơn 100 hàng được hiển thị.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-63', 'sc-200', 63, 'You have an Azure subscription that contains a Microsoft Sentinel workspace named WS1 and 100 virtual machines that run Windows Server.  
  
You need to configure the collection of Windows Security event logs for ingestion to WS1. The solution must meet the following requirements:  
  
• Capture a full user audit trail including user sign-in and user sign-out events.  

• Minimize the volume of events.  

• Minimize administrative effort.  
  
Which event set should you select?', '[{"key":"A","text":"Minimal"},{"key":"B","text":"Common"},{"key":"C","text":"All events"},{"key":"D","text":"Custom"}]'::jsonb, ARRAY['B']::text[], 'Nhóm sự kiện **Common** là tập hợp các sự kiện Bảo mật Windows được xác định trước, bao gồm các sự kiện đăng nhập (4624) và đăng xuất (4634), cung cấp dấu vết kiểm tra người dùng đầy đủ. Nó tạo ra sự cân bằng giữa việc thu thập thông tin kiểm tra cần thiết và giảm thiểu khối lượng sự kiện so với "Tất cả sự kiện". Nó yêu cầu cấu hình tùy chỉnh no, giảm thiểu nỗ lực quản trị.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-64', 'sc-200', 64, 'You have a Microsoft 365 E5 subscription that uses Microsoft Copilot for Security.  
  
You plan to run the following code to create a custom Copilot for Security plugin.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783741535097-laki34qn.png)  
  
You need to specify a format and complete the code segment.  
  
Which format should you use for the   

![Question Image](https://cdn.examcademy.com/images/questions/1783741538748-mydk6e3h.png)  

variable?', '[{"key":"A","text":"API"},{"key":"B","text":"GPT"},{"key":"C","text":"KQL"},{"key":"D","text":"SQL"}]'::jsonb, ARRAY['C']::text[], 'Các plugin Copilot tùy chỉnh dành cho bảo mật sử dụng KQL (Ngôn ngữ truy vấn Kusto) làm định dạng để chỉ định các truy vấn và thao tác. KQL là ngôn ngữ truy vấn gốc dành cho các sản phẩm bảo mật của Microsoft và Defender for Endpoint.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783741535097-laki34qn.png', 'published'),
  ('sc200-65', 'sc-200', 65, 'You receive a security bulletin about a potential attack that uses an image file.  
  
You need to create an indicator of compromise (IoC) in Microsoft Defender for Endpoint to prevent the attack.  
  
Which indicator type should you use?', '[{"key":"A","text":"a URL/domain indicator that has Action set to Alert only"},{"key":"B","text":"a URL/domain indicator that has Action set to Alert and block"},{"key":"C","text":"a file hash indicator that has Action set to Alert and block"},{"key":"D","text":"a certificate indicator that has Action set to Alert and block"}]'::jsonb, ARRAY['C']::text[], 'Chỉ báo băm tệp sẽ xác định chính tệp hình ảnh độc hại và có thể được định cấu hình để đưa ra cảnh báo cũng như chặn tệp khi thiết bị cố gắng chạy tệp đó. Chỉ báo URL/miền quản lý quyền truy cập web và chỉ báo chứng chỉ áp dụng cho các tệp đã ký được liên kết với chứng chỉ thay vì tệp độc hại cụ thể.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-66', 'sc-200', 66, 'You have a Microsoft 365 subscription that uses Microsoft Defender for Endpoint and contains the devices shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783741310705-8gcu52cy.png)  
  
You initiate a live response session on each device.  
  
You need to collect a Defender for Endpoint investigation package from each device.  
  
On which devices can you collect the package by running advanced live response commands from the command-line interface (CLI)?', '[{"key":"A","text":"Device1 and Device2 only"},{"key":"B","text":"Device1, Device2, and Device3 only"},{"key":"C","text":"Device3 and Device4 only"},{"key":"D","text":"Device1, Device2, Device3, and Device4"}]'::jsonb, ARRAY['C']::text[], 'Lệnh thu thập để thu thập các gói điều tra thông qua phản hồi trực tiếp CLI chỉ được hỗ trợ trên các thiết bị macOS và Linux (Device3 và Device4). Các thiết bị Windows (Device1 và Device2) không hỗ trợ lệnh nâng cao này trong các phiên phản hồi trực tiếp. Hạn chế này được ghi lại trong tài liệu tham khảo lệnh phản hồi trực tiếp của Defender for Endpoint.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783741310705-8gcu52cy.png', 'published'),
  ('sc200-67', 'sc-200', 67, 'You have an Azure subscription containing 50 virtual machines.  
  
You plan to deploy Microsoft Defender for Cloud.  
  
You must enable agentless scanning for 40 virtual machines. The solution must create disk snapshots of the virtual machines and perform out-of-band analysis of those snapshots.  
  
What should you do?', '[]'::jsonb, ARRAY[]::text[], 'Defender CSPM bao gồm tính năng quét máy không cần tác nhân, chụp ảnh nhanh các đĩa VM và thực hiện phân tích ngoài băng tần riêng biệt. Để bỏ qua các máy ảo đã chọn trong khi quét phần còn lại, hãy định cấu hình loại trừ quét không cần tác nhân bằng các cặp tên/giá trị thẻ môi trường hiện có.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-68', 'sc-200', 68, 'You have a Microsoft Sentinel workspace named Workspace1.  
  
You must create a custom workbook in Workspace1 that displays a time chart of failed Microsoft Entra sign-ins from the last seven days. The chart must include the number of failed sign-ins for every day.  
  
How should you complete the KQL query?', '[]'::jsonb, ARRAY[]::text[], '`make-series Count=count() default=0 on TimeGenerated step 1d` tạo ra một điểm dữ liệu cho mỗi bước 1 ngày trong phạm vi 7 ngày, chèn lấp bất kỳ ngày nào với no đăng nhập không thành công với số lượng bằng 0. `summarize. by bin(TimeGenerated, 1d)` đơn giản chỉ trả về các hàng cho những ngày thực sự chứa bản ghi trùng khớp, do đó, một ngày không có lần đăng nhập thất bại nào sẽ bị thiếu hoàn toàn trong kết quả thay vì được hiển thị là 0, không yêu cầu đưa vào mỗi ngày trong biểu đồ.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-69', 'sc-200', 69, 'You have a Microsoft Sentinel workspace named Workspace.  
  
You need to run a KQL query as a search job.  
  
Which five actions should you perform in Workspace1, in sequence?', '{"statements":[{"id":"1","text":"Slot 1:","correctAnswer":"A"},{"id":"2","text":"Slot 2:","correctAnswer":"D"},{"id":"3","text":"Slot 3:","correctAnswer":"E"},{"id":"4","text":"Slot 4:","correctAnswer":"F"},{"id":"5","text":"Slot 5:","correctAnswer":"G"}],"choices":[{"key":"A","text":"Select Logs."},{"key":"B","text":"Enter a KQL query and select Run."},{"key":"C","text":"Select Search."},{"key":"D","text":"Set Search job mode to On."},{"key":"E","text":"Enter a KQL query and select Search job."},{"key":"F","text":"Enter a new table name."},{"key":"G","text":"Select Run a search job."}]}'::jsonb, ARRAY['1=A', '2=D', '3=E', '4=F', '5=G']::text[], 'Công việc tìm kiếm Microsoft Sentinel được định cấu hình từ Nhật ký bằng cách bật chế độ Công việc tìm kiếm, nhập truy vấn KQL và chọn Công việc tìm kiếm, chỉ định bảng đích mới cho kết quả và chọn Chạy công việc tìm kiếm. Hành động Chạy thông thường chỉ để chạy truy vấn một cách tương tác chứ không phải để gửi công việc tìm kiếm.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-70', 'sc-200', 70, 'You have a Windows device named Device1 that is onboarded to Microsoft Defender for Endpoint.  
  
You create an attack surface reduction (ASR) policy named Policy1 and configure **Block all Office applications from creating child processes** as **Block**.  
  
On Device1, a required Microsoft Office plugin named Plugin1 fails.  
  
You need to validate whether Policy1 is causing Plugin1 to fail on Device1. The solution must minimize administrative effort.  
  
What should you do first?', '[{"key":"A","text":"From the Microsoft Defender portal, enable Selective isolation mode for Device1."},{"key":"B","text":"From the Microsoft Defender portal, enable troubleshooting mode for Device1."},{"key":"C","text":"On Device1, run the Set-MpPreference -DisableTamperProtection $true cmdlet."},{"key":"D","text":"On Device1, run the Set-MpPreference -AttackSurfaceReductionRules_Ids E5AF940AB-401D-41FC-AADC-AD5F3C50679AAttackSurfaceReductionRules_Actions cmdlet."}]'::jsonb, ARRAY['B']::text[], 'Chế độ khắc phục sự cố của Bộ bảo vệ Microsoft dành cho điểm cuối tạm thời cho phép quản trị viên cục bộ sửa đổi cài đặt Tính năng chống vi-rút của Bộ bảo vệ Microsoft được quản lý chính sách trên một thiết bị cụ thể để kiểm tra khả năng tương thích. Kịch bản được ghi lại của Microsoft về plugin Office bị chặn bởi quy tắc ASR **Chặn tất cả các ứng dụng Office tạo tiến trình con** bắt đầu bằng cách bật chế độ khắc phục sự cố, sau đó có thể tạm thời tắt quy tắc ASR để xác nhận xem plugin có hoạt động hay không.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-71', 'sc-200', 71, 'You need to recommend remediation actions for Contoso''s Microsoft Defender for Cloud alerts.  
  
What action should you recommend for each threat?', '[]'::jsonb, ARRAY[]::text[], 'Đối với người dùng nội bộ đáng ngờ hoặc ứng dụng trái phép, hãy sửa đổi chính sách truy cập Key Vault để xóa nguyên tắc bảo mật hoặc hạn chế các hoạt động được phép, duy trì quyền truy cập hợp pháp của nguyên tắc. Đối với IP bên ngoài không được nhận dạng, hãy định cấu hình tường lửa Key Vault bằng các tài nguyên và mạng ảo đáng tin cậy; Azure Firewall và NSG không trực tiếp điều khiển Key Vault service endpoint.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-72', 'sc-200', 72, 'You have a Microsoft 365 E5 subscription that uses Microsoft Defender for Office 365.  
  
You need to build a hunting query that lists events involving potentially malicious emails detected after delivery but not successfully removed from mailboxes. The solution must correlate these events with the sign-in events of the email recipients.  
  
How should you complete the query?', '[]'::jsonb, ARRAY[]::text[], 'Tự động thanh lọc 0 giờ (ZAP) hoạt động đối với các email lừa đảo hoặc phần mềm độc hại sau khi gửi. Lọc các sự kiện ZAP có kết quả là `Error` xác định các lỗi ZAP—các thông báo độc hại không được xóa thành công. `AccountUpn` là trường tài khoản đăng nhập tương ứng để kết nối với địa chỉ email của người nhận.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-73', 'sc-200', 73, 'You need to finish the query for failed sign-ins to meet the technical requirements.  
  
Where can you locate the column name needed to complete the `where` clause?', '[{"key":"A","text":"Security alerts in Azure Security Center"},{"key":"B","text":"Activity log in Azure"},{"key":"C","text":"Azure Advisor"},{"key":"D","text":"the query windows of the Log Analytics workspace"}]'::jsonb, ARRAY['D']::text[], 'Azure Monitor Log Analytics hiển thị các bảng và các cột của chúng trong khung lược đồ trong giao diện truy vấn. Các tên cột đó được sử dụng khi viết các mệnh đề `where` của Ngôn ngữ truy vấn Kusto.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-74', 'sc-200', 74, 'You have a Microsoft Sentinel workspace named Workspace1.  
  
In Workspace1, you create a Microsoft Sentinel workbook called WB1.  
  
You need to add a query to WB1 that returns a list of every watchlist in Workspace1.  
  
What should you set as the query’s **Data source**?', '[{"key":"A","text":"SQL database"},{"key":"B","text":"Logs (Analytics)"},{"key":"C","text":"Storage account"},{"key":"D","text":"Azure Resource Graph"}]'::jsonb, ARRAY['B']::text[], 'Microsoft Sentinel cung cấp hàm KQL `_GetWatchlistAlias` để trả về bí danh của tất cả danh sách theo dõi trong không gian làm việc. Các truy vấn KQL đối với không gian làm việc được chạy thông qua nguồn dữ liệu sổ làm việc Nhật ký (Analytics).', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-75', 'sc-200', 75, 'You have a Microsoft 365 E5 subscription.  
  
You need to use PowerShell on a Windows device to search the Microsoft Purview audit log.  
  
What should you do first?', '[{"key":"A","text":"Install the Microsoft Graph PowerShell module."},{"key":"B","text":"Enable PowerShell remoting."},{"key":"C","text":"Install the Microsoft Exchange Online PowerShell module."},{"key":"D","text":"Modify the TrustedHosts list."}]'::jsonb, ARRAY['C']::text[], 'Lệnh ghép ngắn `Search-UnifiedAuditLog` dùng để tìm kiếm nhật ký kiểm tra hợp nhất Microsoft Purview được cung cấp bởi Exchange Online PowerShell. Do đó, việc cài đặt mô-đun Exchange Online PowerShell là bước bắt buộc đầu tiên.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-76', 'sc-200', 76, 'You use Azure Defender.  
  
You have an Azure Storage account containing sensitive information.  
  
You need to run a PowerShell script when someone accesses the storage account from a suspicious IP address.  
  
Which two actions should you take? Each correct answer is part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"From Azure Security Center, enable workflow automation."},{"key":"B","text":"Create an Azure logic app that has a manual trigger."},{"key":"C","text":"Create an Azure logic app that has an Azure Security Center alert trigger."},{"key":"D","text":"Create an Azure logic app that has an HTTP trigger."},{"key":"E","text":"From Azure Active Directory (Azure AD), add an app registration."}]'::jsonb, ARRAY['A', 'C']::text[], 'Tự động hóa quy trình làm việc Microsoft Defender for Cloud có thể tự động gọi Ứng dụng Logic khi cảnh báo bảo mật đáp ứng các tiêu chí đã định cấu hình. Ứng dụng Logic phải sử dụng trình kích hoạt cảnh báo Microsoft Defender for Cloud (Trung tâm bảo mật Azure) để nhận được sự kiện cảnh báo và phải bật tự động hóa quy trình làm việc để tự động chạy.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-77', 'sc-200', 77, 'You have a Microsoft 365 E5 subscription using Microsoft Copilot for Security. Copilot for Security is configured with its default settings.  
  
You need to ensure that a user named User can use Copilot for Security to perform the following tasks:  
  
- Upload files.  
- View the usage dashboard.  
- Share promptbooks with all users.  
  
The solution must adhere to the principle of least privilege.  
  
Which role should you assign to User?', '[{"key":"A","text":"Copilot owner"},{"key":"B","text":"Cloud Application Administrator"},{"key":"C","text":"Security Administrator"},{"key":"D","text":"Copilot Contributor"}]'::jsonb, ARRAY['A']::text[], 'Vai trò chủ sở hữu Copilot cho phép tải tệp lên, xem bảng thông tin sử dụng Security Copilot và chia sẻ sổ nhắc với người thuê. Mặc dù người đóng góp Copilot có thể tải tệp lên và chia sẻ sổ nhắc theo cài đặt mặc định nhưng người đóng góp không thể xem trang tổng quan sử dụng. Do đó, chủ sở hữu phi công phụ có vai trò tối thiểu cung cấp mọi khả năng cần thiết.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-78', 'sc-200', 78, 'You need to implement Azure Defender so that it meets the Azure Defender requirements and the business requirements.  
  
What should the solution include?', '[]'::jsonb, ARRAY[]::text[], 'LA1 tập trung việc đo từ xa máy chủ trong không gian làm việc Log Analytics hiện có. Cấp độ sự kiện bảo mật chung của Windows nhằm đáp ứng hầu hết các nhu cầu của khách hàng trong khi cung cấp quy trình kiểm tra đầy đủ; Tối thiểu làm giảm quá nhiều việc thu thập, trong khi Tất cả sự kiện thu thập mọi sự kiện và tăng khối lượng nhập một cách không cần thiết.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-79', 'sc-200', 79, 'You have an Azure subscription named Sub1 that is linked to a Microsoft Entra tenant named contoso.com. Sub1 contains a Log Analytics workspace named Workspace1. All logs from contoso.com are streamed to Workspace1.  
  
You have a Microsoft 365 E5 subscription.  
  
You need to query Workspace1 for the following:  
  
- HTTP requests to the Microsoft Graph service of contoso.com  
- Third-party app sign-in activities that use certificates or secrets  
  
How should you complete the KQL query?', '[]'::jsonb, ARRAY[]::text[], 'AADServicePrincipalSignInLogs ghi lại các lần đăng nhập service principal, bao gồm xác thực chứng chỉ ứng dụng khách và bí mật ứng dụng khách. Mối tương quan KQL được ghi lại của Microsoft Entra kết hợp SignInActivityId của nhật ký hoạt động Microsoft Graph với UniqueTokenIdentifier của nhật ký đăng nhập.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-80', 'sc-200', 80, 'You have an Azure subscription using Microsoft Defender for Servers Plan 1 that contains a server named Server1.  
  
You enable agentless scanning.  
  
You need to stop Server1 from being scanned while minimizing administrative effort.  
  
What should you do?', '[{"key":"A","text":"Create an exclusion tag."},{"key":"B","text":"Upgrade the subscription to Defender for Servers Plan 2."},{"key":"C","text":"Create a governance rule."},{"key":"D","text":"Create an exclusion group."}]'::jsonb, ARRAY['A']::text[], 'Microsoft Defender for Cloud có thể loại trừ các máy riêng lẻ khỏi quá trình quét không cần tác nhân bằng cách khớp thẻ loại trừ đã định cấu hình (cặp tên/giá trị) được áp dụng cho tài nguyên; máy được gắn thẻ sẽ bị bỏ qua trong chu kỳ khám phá tiếp theo. Việc áp dụng một thẻ duy nhất cho Server1 tốn ít công sức hơn nhiều so với việc nâng cấp gói đăng ký, xây dựng quy tắc quản trị hoặc tạo một nhóm loại trừ, không có cơ chế nào trong số đó là cơ chế được sử dụng để loại bỏ các máy cụ thể khỏi quá trình quét không cần tác nhân.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-81', 'sc-200', 81, 'You have a Microsoft 365 E5 subscription that uses Microsoft Exchange Online.  
  
You identify the suspicious emails shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783741898556-invcta66.png)  
  
In Microsoft Purview, you create the content searches shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783741901348-o2p8z55h.png)  
  
For each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"Search1 will include Email1.","correctAnswer":"Yes"},{"id":"2","text":"Search2 will include Email2.","correctAnswer":"No"},{"id":"3","text":"Search3 will include Email3.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:Yes', '2:No', '3:Yes']::text[], 'Search1 khớp với Email1 vì nó được gửi bởi Prize@contoso.com và chứa tệp đính kèm.docx. Search2 loại trừ Email2 vì chủ đề chứa các lợi ích. Search3 khớp với Email3 vì nó được gửi bởi Benefits@contoso.com và chủ đề của nó chứa WON chứ không phải từ người chiến thắng.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783741898556-invcta66.png', 'published'),
  ('sc200-82', 'sc-200', 82, 'You have an Azure subscription that includes a Microsoft Sentinel workspace.  
  
You need to create a playbook that runs automatically in response to a Microsoft Sentinel alert.  
  
What should you create first?', '[{"key":"A","text":"a hunting query in Microsoft Sentinel"},{"key":"B","text":"an Azure logic app"},{"key":"C","text":"an automation rule in Microsoft Sentinel"},{"key":"D","text":"a trigger in Azure Functions"}]'::jsonb, ARRAY['B']::text[], 'Playbook Microsoft Sentinel là các quy trình công việc được xây dựng trong Ứng dụng Azure Logic. Sau đó, một quy tắc tự động hóa có thể liên kết phản hồi được kích hoạt cảnh báo với sổ tay, nhưng Ứng dụng Logic triển khai sổ tay phải tồn tại trước tiên.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-83', 'sc-200', 83, 'You have an Azure subscription that contains a resource group named RG1. RG1 contains a Microsoft Sentinel workspace. The subscription is linked to a Microsoft Entra tenant that contains a user named User1.  
  
You need to ensure that User1 can deploy and customize Microsoft Sentinel workbook templates. The solution must follow the principle of least privilege.  
  
Which role should you assign to User1 for RG1?', '[{"key":"A","text":"Microsoft Sentinel Contributor"},{"key":"B","text":"Workbook Contributor"},{"key":"C","text":"Microsoft Sentinel Automation Contributor"},{"key":"D","text":"Contributor"}]'::jsonb, ARRAY['B']::text[], 'Việc triển khai và tùy chỉnh các mẫu sổ làm việc Microsoft Sentinel yêu cầu quyền ghi/xóa/đọc Microsoft.Insights/workbooktemplates, được cấp bởi vai trò Người đóng góp sổ làm việc tích hợp Azure Monitor. Microsoft Sentinel Contributor quản lý các phiên bản sổ làm việc nhưng không quản lý các mẫu, vì vậy Workbook Contributor là vai trò có ít đặc quyền nhất đáp ứng yêu cầu.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-84', 'sc-200', 84, 'You have a Microsoft 365 subscription that uses Microsoft Defender XDR.  
  
You are investigating an attacker that is known to use the Microsoft Graph API as an attack vector. The attacker performs the tactics shown the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783740192955-60aqo9bb.png)  
  
You need to search for malicious activities in your organization.  
  
Which tactics can you analyze by using the MicrosoftGraphActivityLogs table?', '[{"key":"A","text":"Tactic1 only"},{"key":"B","text":"Tactic2 only"},{"key":"C","text":"Tactic1 and Tactic3 only"},{"key":"D","text":"Tactic2 and Tactic3 only"},{"key":"E","text":"Tactic1, Tactic2, and Tactic3"}]'::jsonb, ARRAY['E']::text[], 'MicrosoftGraphActivityLogs là bản kiểm tra của mọi yêu cầu HTTP mà dịch vụ Microsoft Graph nhận được và xử lý cho đối tượng thuê. Mỗi hàng ghi lạiRequestUri,RequestMethod, AppId, ServicePrincipalId, UserId, IPAddress cũng như Vai trò và Phạm vi của mã thông báo, do đó, bất kỳ lệnh gọi nào đến graph.microsoft.com đều có thể được xây dựng lại bằng KQL, bất kể khối lượng công việc nào nó chạm vào và liệu lệnh gọi đó đến từ ứng dụng dòng nghiệp vụ, SDK, tập lệnh hay ứng dụng khách của Microsoft như Outlook hay Teams. Điều quyết định liệu một hoạt động có nằm trong bảng này hay không là điểm cuối mà kẻ tấn công gọi chứ không phải loại tài nguyên bị ảnh hưởng. Ở đây, vectơ của kẻ tấn công là Microsoft Graph API, do đó, việc trinh sát hộp thư, tìm kiếm và xuất cuộc trò chuyện của Teams cũng như việc xóa máy ảo đều được thực hiện dưới dạng yêu cầu Đồ thị và cả ba đều hiển thị dưới dạng hàng trong MicrosoftGraphActivityLogs, nơi bạn có thể tìm kiếm chúng bằng cách lọc requestUri và xoay vòng trên AppId, ServicePrincipalId hoặc UserId. Quy tắc tương tự sẽ gửi hoạt động đi nơi khác khi sử dụng mặt phẳng điều khiển khác. Quản lý máy ảo được cấp thẳng tới Azure Resource Manager, DELETE https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}, là đường dẫn được thực hiện bởi cổng Azure, Azure CLI và API điện toán REST và được ghi lại trong AzureActivity; thay vào đó, các lệnh gọi kế thừa đối với vùng cuối của Đồ thị Azure AD đã ngừng hoạt động trong AADGraphActivityLogs. Để liên kết một yêu cầu Đồ thị trở lại với danh tính đằng sau nó, hãy kết hợp SignInActivityId với UniqueTokenIdentifier trong nhật ký đăng nhập.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783740192955-60aqo9bb.png', 'published'),
  ('sc200-85', 'sc-200', 85, 'You have a Microsoft 365 E5 subscription that uses Microsoft Defender for Endpoint.  
  
You need to create a query to link the AlertInfo, AlertEvidence, and DeviceLogonEvents tables. The solution must return every row from the tables.  
  
Which operator should you use?', '[{"key":"A","text":"search *"},{"key":"B","text":"union kind = inner"},{"key":"C","text":"join kind = inner"},{"key":"D","text":"evaluate hint.remote ="}]'::jsonb, ARRAY['A']::text[], 'Toán tử KQL `search *` tìm kiếm tất cả các bảng trong phạm vi với một vị từ ký tự đại diện tương đương với một điều kiện luôn đúng, trả về mọi hàng và xác định bảng nguồn trong kết quả. Liên kết bên trong chỉ trả về các hàng có khóa liên kết phù hợp, trong khi liên kết bên trong giới hạn các cột đầu ra ở những cột được chia sẻ bởi tất cả các đầu vào.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-86', 'sc-200', 86, 'You have a Microsoft Sentinel workspace named sws1.  
  
You plan to create an Azure Logic App that raises an incident in an on-premises IT service management system when an incident is generated in sws1.  
  
Configure the Microsoft Sentinel connector credentials for the Logic App while meeting these requirements:  
  
- Minimize administrative effort.  
- Use the principle of least privilege.  
  
How should you configure the credentials?', '[]'::jsonb, ARRAY[]::text[], 'managed identity loại bỏ nhu cầu quản lý thông tin xác thực riêng biệt cho Ứng dụng Logic. Đầu đọc Microsoft Sentinel cho phép kích hoạt và đọc hành động kết nối Microsoft Sentinel, đủ để nhận chi tiết sự cố trước khi tạo sự cố ITSM bên ngoài; nó không cấp quyền ghi không cần thiết.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-87', 'sc-200', 87, 'You have an Azure subscription containing 10 virtual machines onboarded to Microsoft Defender for Cloud.  
  
Ensure that an email notification is received when Defender for Cloud detects digital currency-mining behavior on a virtual machine. The solution must also generate a test email.  
  
Which three actions should you carry out, in order?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"D"},{"id":"step2","text":"Slot 2:","correctAnswer":"E"},{"id":"step3","text":"Slot 3:","correctAnswer":"C"}],"choices":[{"key":"A","text":"From Workflow automation in Defender for Cloud, change the status of the workflow automation."},{"key":"B","text":"From Logic App Designer, run a trigger."},{"key":"C","text":"From Security alerts in Defender for Cloud, create a sample alert."},{"key":"D","text":"From Logic App Designer, create a logic app."},{"key":"E","text":"From Workflow automation in Defender for Cloud, add a workflow automation."}]}'::jsonb, ARRAY['step1=D', 'step2=E', 'step3=C']::text[], 'Ứng dụng Logic cung cấp hành động email. Sau đó, tự động hóa quy trình làm việc của Defender for Cloud được định cấu hình để gọi Ứng dụng Logic đó khi cảnh báo bảo mật phù hợp được tạo. Việc tạo cảnh báo mẫu trong Defender for Cloud sẽ thực hiện tự động hóa quy trình làm việc và tạo email kiểm tra.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-88', 'sc-200', 88, 'You have an Azure Sentinel deployment in the East US Azure region.  
  
You create a Log Analytics workspace named LogsWest in the West US Azure region.  
  
You need to ensure that scheduled analytics rules in the existing Azure Sentinel deployment can generate alerts from queries against LogsWest.  
  
What should you do first?', '[{"key":"A","text":"Deploy Azure Data Catalog to the West US Azure region."},{"key":"B","text":"Modify the workspace settings of the existing Azure Sentinel deployment."},{"key":"C","text":"Add Azure Sentinel to a workspace."},{"key":"D","text":"Create a data connector in Azure Sentinel."}]'::jsonb, ARRAY['C']::text[], 'Các quy tắc phân tích được lên lịch trên nhiều không gian làm việc chỉ có thể truy vấn một không gian làm việc Log Analytics khác khi Microsoft Sentinel được triển khai trên mọi không gian làm việc được tham chiếu bởi truy vấn. Việc kích hoạt Azure Sentinel trên LogsWest đáp ứng điều kiện tiên quyết đó; cảnh báo được tạo bởi quy tắc vẫn còn trong không gian làm việc nơi quy tắc được xác định.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-89', 'sc-200', 89, 'You have a Microsoft Sentinel workspace.  
  
You develop a custom Advanced Security Information Model (ASIM) parser named Parser1 that produces a schema named Schema1.  
  
You need to validate Schema1.  
  
How should you complete the command?', '[]'::jsonb, ARRAY[]::text[], 'Trước tiên, xác thực lược đồ ASIM truy xuất lược đồ đầu ra của trình phân tích cú pháp bằng cách sử dụng `getschema`, sau đó gọi hàm dạng bảng của trình kiểm tra lược đồ ASIM bằng `invoke ASimSchemaTester(''Schema1'')`.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-90', 'sc-200', 90, 'You have a Microsoft 365 E5 subscription that includes a device named Device1.  
  
In the Microsoft Defender portal, you find that an alert was generated for Device1.  
  
From the Device inventory page, you isolate Device1.  
  
You need to obtain a list of programs installed on Device1.  
  
What should you do?', '[{"key":"A","text":"Run an advanced hunting query against the DeviceProcessEvents table."},{"key":"B","text":"Initiate an automated investigation and view the results in the Action center."},{"key":"C","text":"Run an advanced hunting query against the DeviceTvmInfoGathering table."},{"key":"D","text":"Run an advanced hunting query against the DeviceTvmSoftwareInventory table."}]'::jsonb, ARRAY['D']::text[], 'Bảng tìm kiếm nâng cao `DeviceTvmSoftwareInventory` chứa dữ liệu kiểm kê Quản lý lỗ hổng bảo vệ của Microsoft cho phần mềm hiện được cài đặt trên thiết bị, bao gồm nhà cung cấp phần mềm, tên và phiên bản. Việc lọc bảng này để tìm Device1 sẽ trả về danh sách chương trình đã cài đặt của nó.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-91', 'sc-200', 91, 'You have an Azure subscription that contains a Microsoft Sentinel workspace named Workspace1 and a user named User1.  
  
You need to ensure that User1 can investigate incidents by using Workspace1. The solution must follow the principle of least privilege.  
  
Which role should you assign to User1?', '[{"key":"A","text":"Microsoft Sentinel Responder"},{"key":"B","text":"Microsoft Sentinel Contributor"},{"key":"C","text":"Microsoft Sentinel Automation Contributor"},{"key":"D","text":"Microsoft Sentinel Reader"}]'::jsonb, ARRAY['A']::text[], 'Các điều kiện tiên quyết của chính Microsoft đối với việc điều tra sự cố nêu rõ rằng cần phải gán vai trò Người phản hồi Microsoft Sentinel để điều tra sự cố vì nó cho phép xem chi tiết sự cố, cập nhật trạng thái và thêm nhận xét. Sentinel Reader ở chế độ chỉ đọc và không thể tương tác với sự cố, trong khi Contributor và Automation Contributor cấp quyền cấu hình rộng hơn mức cần thiết.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-92', 'sc-200', 92, 'You have a third-party security information and event management (SIEM) solution.  
  
You need to make sure that the SIEM solution can generate alerts for Azure Active Directory (Azure AD) sign-in events in near real time.  
  
What should you do to route events to the SIEM solution?', '[{"key":"A","text":"Create an Azure Sentinel workspace that has a Security Events connector."},{"key":"B","text":"Configure the Diagnostics settings in Azure AD to stream to an event hub."},{"key":"C","text":"Create an Azure Sentinel workspace that has an Azure Active Directory connector."},{"key":"D","text":"Configure the Diagnostics settings in Azure AD to archive to a storage account."}]'::jsonb, ARRAY['B']::text[], 'Cài đặt chẩn đoán Azure AD có thể truyền các danh mục nhật ký đăng nhập đã chọn tới Trung tâm sự kiện Azure. Trung tâm sự kiện là tuyến được hỗ trợ để tích hợp nhật ký hoạt động Microsoft Entra ID với các công cụ SIEM của bên thứ ba, cho phép SIEM tiếp thu và phân tích các sự kiện. Việc lưu trữ vào Bộ lưu trữ là để lưu giữ và các trình kết nối Sentinel áp dụng cho Microsoft Sentinel thay vì SIEM bên ngoài.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-93', 'sc-200', 93, 'You have an Azure Functions app that produces thousands of Azure Security Center alerts each day during normal activity.  
  
You need to automatically hide the alerts in Security Center.  
  
Which three actions should you take, in sequence, in Security Center?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"E"},{"id":"step2","text":"Slot 2:","correctAnswer":"F"},{"id":"step3","text":"Slot 3:","correctAnswer":"C"}],"choices":[{"key":"A","text":"Select Pricing & settings."},{"key":"B","text":"Select IP as the entity type and specify the IP address."},{"key":"C","text":"Select Azure Resource as the entity type and specify the Resource ID."},{"key":"D","text":"Select Security policy."},{"key":"E","text":"Select Security alerts."},{"key":"F","text":"Select Suppression rules, and then select Create new suppression rule."}]}'::jsonb, ARRAY['step1=E', 'step2=F', 'step3=C']::text[], 'Trung tâm bảo mật Azure/Defender for Cloud sử dụng các quy tắc ngăn chặn để tự động ẩn các cảnh báo được cho là vô hại. Tạo quy tắc từ Cảnh báo bảo mật, chọn Quy tắc loại bỏ và Tạo quy tắc loại bỏ mới, sau đó đưa quy tắc đó vào ứng dụng Azure Functions bằng cách chọn Azure Resource và nhập ID tài nguyên của nó.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-94', 'sc-200', 94, 'You have a Microsoft Sentinel workspace named SW1.  
  
You plan to create a custom workbook that includes a time chart.  
  
You need a query that identifies the number of security alerts per day for each provider.  
  
How should you complete the query?', '[]'::jsonb, ARRAY[]::text[], '`bin(TimeGenerated, 1d)` tạo các nhóm thời gian một ngày cho nhóm `summarize`, tạo ra số lượng cho mỗi nhà cung cấp mỗi ngày. Toán tử Kusto `render timechart` hiển thị các kết quả chuỗi thời gian đó dưới dạng biểu đồ thời gian.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-95', 'sc-200', 95, 'You have a Microsoft 365 E5 subscription that includes two users, User1 and User2, and uses Microsoft Copilot for Security.  
  
From the Copilot for Security portal, User1 begins a session and creates these prompts:  
  
- Prompt1: Provides access to the Entra plugin  
- Prompt2: Provides access to the Intune plugin  
- Prompt3: Provides access to the Entra plugin  
  
User1 shares the session with User2.  
  
User2 does **NOT** have access to Microsoft Intune.  
  
For which prompts can User2 view results in the shared session?', '[{"key":"A","text":"Prompt1 only"},{"key":"B","text":"Prompt1 and Prompt2 only"},{"key":"C","text":"Prompt3 only"},{"key":"D","text":"Prompt1 and Prompt3 only"},{"key":"E","text":"Prompt1, Prompt2, and Prompt3"}]'::jsonb, ARRAY['E']::text[], 'Phiên Microsoft Security Copilot được chia sẻ chứa tất cả lời nhắc và phản hồi, đồng thời được hiển thị tĩnh cho người nhận được ủy quyền. Cần có quyền truy cập vào dịch vụ và dữ liệu cơ bản của plugin để tạo phản hồi nhưng nó không được đánh giá lại khi người nhận xem phiên được chia sẻ. Do đó, người nhận không có quyền truy cập Intune vẫn có thể xem kết quả được tạo thông qua plugin Intune cũng như kết quả từ plugin Entra.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-96', 'sc-200', 96, 'You have a Microsoft 365 E5 subscription that uses Microsoft Copilot for Security.  
  
You have a Copilot for Security workspace that uses the following plugins:  
  
- Microsoft Entra  
- Microsoft Defender XDR  
  
From the Microsoft Defender portal, you use Copilot for Security to investigate a reported incident.  
  
You need to run a promptbook that includes information from Microsoft Entra ID Protection in the investigation.  
  
What should you do first?', '[{"key":"A","text":"From the Microsoft Defender portal, create an incident report."},{"key":"B","text":"Open the investigation in the Copilot for Security standalone experience."},{"key":"C","text":"Open the investigation in Microsoft Sentinel."},{"key":"D","text":"From the Microsoft Defender portal, create an advanced hunting query."}]'::jsonb, ARRAY['B']::text[], 'Trải nghiệm Microsoft Security Copilot độc lập cung cấp quyền truy cập vào thư viện sổ nhắc và các plugin được kích hoạt bổ sung. Việc mở cuộc điều tra Defender trong trải nghiệm đó cho phép plugin Microsoft Entra cung cấp thông tin Bảo vệ Microsoft Entra ID trong khi sổ nhắc chạy.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-97', 'sc-200', 97, 'You have 500 on-premises devices.  
  
You have a Microsoft 365 E5 subscription that uses Microsoft Defender 365.  
  
You onboard 100 devices to Microsoft Defender 365.  
  
You need to identify any unmanaged on-premises devices. The solution must ensure that only specific onboarded devices perform the discovery.  
  
What should you do first?', '[{"key":"A","text":"Create a device group."},{"key":"B","text":"Create an exclusion."},{"key":"C","text":"Set Discovery mode to Basic."},{"key":"D","text":"Create a tag."}]'::jsonb, ARRAY['D']::text[], 'Khám phá thiết bị cho phép bạn kiểm soát những thiết bị tích hợp nào hoạt động như cảm biến khám phá bằng cách gán cho chúng một thẻ thiết bị và sau đó hạn chế khám phá tiêu chuẩn đối với các thiết bị mang thẻ đó; các thiết bị không được gắn thẻ chỉ quay lại khám phá cơ bản. Các nhóm thiết bị được sử dụng cho RBAC và nhắm mục tiêu chính sách thay vì chọn cảm biến khám phá và cả cài đặt chế độ khám phá cũng như loại trừ đều không cho phép bạn chỉ định các thiết bị cụ thể làm thiết bị thực hiện quét.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-98', 'sc-200', 98, 'You create a new Azure subscription and begin collecting Azure Monitor logs.  
  
You must validate that Microsoft Defender for Cloud triggers an alert when a malicious file exists on an Azure virtual machine that runs Windows Server.  
  
Which three actions should you perform, in sequence? More than one ordering of the answer choices is correct.', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"F"},{"id":"step2","text":"Slot 2:","correctAnswer":"B"},{"id":"step3","text":"Slot 3:","correctAnswer":"D"}],"choices":[{"key":"A","text":"Rename the executable file as AlertTest.exe."},{"key":"B","text":"Copy an executable file on a virtual machine and rename the file as ASC_AlertTest_662jf039N.exe."},{"key":"C","text":"Change the alert severity threshold for emails to Medium."},{"key":"D","text":"Run the executable file and specify the appropriate arguments."},{"key":"E","text":"Change the alert severity threshold for emails to Low."},{"key":"F","text":"Enable Microsoft Defender for Cloud’s enhanced security features for the subscription."}]}'::jsonb, ARRAY['step1=F', 'step2=B', 'step3=D']::text[], 'Trước tiên, các tính năng bảo mật nâng cao (gói Defender for Cloud trả phí) phải được bật trên đăng ký vì việc tạo cảnh báo cho VM yêu cầu gói Defender có liên quan phải hoạt động. Sau khi được bật, quy trình xác thực cảnh báo tiêu chuẩn sẽ sao chép tệp thực thi thử nghiệm vào máy ảo và đổi tên thành tên ASC_AlertTest_662jf039N.exe đặc biệt mà Defender for Cloud nhận ra, sau đó chạy tệp đó với các đối số bắt buộc để kích hoạt cảnh báo thử nghiệm chính hãng.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-99', 'sc-200', 99, 'You have a Microsoft 365 E5 subscription containing four users named User1, User2, User3, and User4. The subscription uses Microsoft Purview Audit and Microsoft Defender XDR.  
  
User2 and User3 have delegated access to User1''s mailbox.  
  
A phishing email was sent from User1''s mailbox and displays User1 as the sender.  
  
You must ensure that User4 can use Audit to determine whether User2 or User3 sent the phishing email, while following the principle of least privilege.  
  
What should you do?', '[]'::jsonb, ARRAY[]::text[], 'Audit Reader cung cấp quyền truy cập chỉ đọc vào nhật ký kiểm tra, đáp ứng nhu cầu tìm kiếm mà không cần cấp các quyền quản trị bảo mật, eDiscovery hoặc tuân thủ rộng hơn. Hoạt động kiểm tra SendAs ghi lại email do người đại diện gửi như thể email đó đến từ chủ sở hữu hộp thư; Thay vào đó, SendOnBehalf xác định người được ủy quyền thực sự cho người nhận.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-100', 'sc-200', 100, 'You need to remediate ongoing attacks to satisfy the technical requirements.  
  
What should you include in the solution?', '[{"key":"A","text":"Azure Automation runbooks"},{"key":"B","text":"Azure Logic Apps"},{"key":"C","text":"Azure Functions"},{"key":"D","text":"Azure Sentinel livestreams"}]'::jsonb, ARRAY['B']::text[], 'Cẩm nang Microsoft Sentinel là các quy trình làm việc của Ứng dụng Azure Logic tự động hóa và điều phối các hành động khắc phục cũng như ứng phó với mối đe dọa. Chúng có thể chạy tự động để phản hồi các cảnh báo hoặc sự cố đã định cấu hình, cho phép khắc phục nhanh chóng các cuộc tấn công đang hoạt động.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-101', 'sc-200', 101, 'You have a Microsoft 365 E5 subscription that uses Microsoft Defender XDR and contains a Windows device named Device1.  
  
You investigate Device1 for malicious activity and discover a suspicious file named File1.exe. You collect an investigation package from Device1.  
  
You need to review the following forensic data points:  
  
- Is an attacker currently accessing Device1 remotely?  
- When was File1.exe first executed?  
  
Which folder in the investigation package should you review for each data point?', '[]'::jsonb, ARRAY[]::text[], 'Thư mục Kết nối mạng chứa thông tin kết nối TCP/IP hiện tại có thể tiết lộ các kết nối từ xa. Việc tìm nạp trước các bản ghi siêu dữ liệu thực thi sẽ khởi chạy ứng dụng và có thể được sử dụng để xác định thời gian thực thi đầu tiên của File1.exe.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-102', 'sc-200', 102, 'You have the following advanced hunting query in Microsoft 365 Defender.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783728840163-z82aewjj.png)  
  
You must receive an alert when any process disables System Restore on a device managed by Microsoft Defender during the past 24 hours.  
  
Which two actions should you take? Each correct answer is part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Create a detection rule."},{"key":"B","text":"Create a suppression rule."},{"key":"C","text":"Add | order by Timestamp to the query."},{"key":"D","text":"Replace DeviceProcessEvents with DeviceNetworkEvents."},{"key":"E","text":"Add DeviceId and ReportId to the output of the query."}]'::jsonb, ARRAY['A', 'E']::text[], 'Quy tắc phát hiện tùy chỉnh biến kết quả tìm kiếm nâng cao phù hợp thành cảnh báo. Đối với các bảng sự kiện của Bộ bảo vệ Microsoft dành cho Điểm cuối, chẳng hạn như DeviceProcessEvents, kết quả truy vấn phải chứa Dấu thời gian, DeviceId và ReportId từ cùng một sự kiện để có thể xác định được sự kiện ban đầu và thiết bị bị ảnh hưởng. Dấu thời gian đã có sẵn nên DeviceId và ReportId cũng phải được chiếu.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783728840163-z82aewjj.png', 'published'),
  ('sc200-103', 'sc-200', 103, 'You need to visualize Microsoft Sentinel data and enrich it by using third-party data sources to identify indicators of compromise (IoC).  
  
What should you use?', '[{"key":"A","text":"notebooks in Microsoft Sentinel"},{"key":"B","text":"Microsoft Defender for Cloud Apps"},{"key":"C","text":"Azure Monitor"}]'::jsonb, ARRAY['A']::text[], 'Máy tính xách tay Microsoft Sentinel cung cấp khả năng phân tích và trực quan hóa dữ liệu có thể lập trình. Họ có thể sử dụng MSTICPy và các thư viện Python khác để truy xuất và làm phong phú thêm dữ liệu điều tra từ các nguồn của bên thứ ba, bao gồm cả dữ liệu được sử dụng để xác định các dấu hiệu xâm phạm (IoC).', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-104', 'sc-200', 104, 'You have a Microsoft 365 subscription containing these resources:  
  
- 100 users assigned a Microsoft 365 E5 license  
- 100 Windows 11 devices joined to the Microsoft Entra tenant  
  
The users use Outlook on the web to access their Microsoft Exchange Online mailboxes.  
  
You need to ensure that an Outlook on the web session token can be revoked if a user account is compromised. What should you configure?', '[{"key":"A","text":"security defaults in Microsoft Entra"},{"key":"B","text":"Microsoft Entra Verified ID"},{"key":"C","text":"a Conditional Access policy in Microsoft Entra"},{"key":"D","text":"Microsoft Entra ID Protection"}]'::jsonb, ARRAY['D']::text[], 'Microsoft Entra ID Protection phát hiện rủi ro người dùng cao cho thấy tài khoản có khả năng bị xâm phạm. Rủi ro người dùng cao là sự kiện quan trọng trong Đánh giá quyền truy cập liên tục; Exchange Online có thể sử dụng nó để vô hiệu hóa quyền truy cập Outlook trên web hiện có và yêu cầu xác thực lại trong thời gian gần như thực.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-105', 'sc-200', 105, 'Your on-premises network has 100 servers running Windows Server.  
  
You have an Azure subscription that uses Microsoft Sentinel.  
  
You need to upload custom logs from the on-premises servers to Microsoft Sentinel.  
  
What should you do?', '[]'::jsonb, ARRAY[]::text[], 'Tác nhân Log Analytics thu thập nhật ký văn bản tùy chỉnh từ máy tính Windows và gửi chúng đến không gian làm việc Log Analytics làm nền tảng cho Microsoft Sentinel. Trình kết nối dữ liệu Microsoft Sentinel cung cấp cấu hình nhập nhật ký tùy chỉnh. Tác nhân Azure Connected Machine dành cho việc triển khai Azure Arc, trong khi tác nhân Phụ thuộc thu thập dữ liệu bản đồ phụ thuộc.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-106', 'sc-200', 106, 'You have a Microsoft 365 E5 subscription containing a user named User1. The subscription uses Microsoft 365 Copilot for Security, which uses the Sentinel plugin.  
  
User1 has been assigned the Copilot Contributor role.  
  
During an investigation, User1 submits a prompt and receives a notification that Copilot for Security cannot respond to requests because security compute unit (SCU) usage is approaching the provisioned-capacity limit.  
  
You need to ensure that User1 can use Copilot for Security to produce a successful response.  
  
What should User1 do?', '[{"key":"A","text":"Wait one hour and resubmit the prompt."},{"key":"B","text":"Update the provisioned SCUs."},{"key":"C","text":"Run the Microsoft Sentinel Optimization Workbook."},{"key":"D","text":"Open a second Copilot for Security session and submit the prompt."}]'::jsonb, ARRAY['A']::text[], 'Khi dung lượng SCU được cung cấp và dư thừa đã được sử dụng hết, Copilot for Security sẽ ngừng chấp nhận lời nhắc cho đến khi dung lượng được làm mới trong khối hàng giờ tiếp theo. Việc thay đổi SCU được cung cấp yêu cầu chủ sở hữu hoặc người đóng góp năng lực Azure chứ không phải vai trò Người đóng góp Copilot. Do đó, việc đợi một giờ và gửi lại lời nhắc sẽ cho phép khả năng sẵn sàng.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-107', 'sc-200', 107, 'You have a Microsoft Sentinel workspace named Workspace1 with a retention period of 12 years. Workspace1 includes two custom auxiliary tables named Table1 and Table2.  
  
You need to correlate data from Table1 and Table2 for the past six months by using a JOIN operation. The solution must minimize cost and administrative effort.  
  
Which three actions should you take, in sequence?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"B"},{"id":"step2","text":"Slot 2:","correctAnswer":"D"},{"id":"step3","text":"Slot 3:","correctAnswer":"A"}],"choices":[{"key":"A","text":"Run a query against the Log Analytics tables."},{"key":"B","text":"Run a query against the Auxiliary log tables."},{"key":"C","text":"Delete tables that have the _SRCH suffix."},{"key":"D","text":"Run two search jobs."},{"key":"E","text":"Run a single search job."}]}'::jsonb, ARRAY['step1=B', 'step2=D', 'step3=A']::text[], 'Truy vấn bảng nhật ký phụ trợ không thể sử dụng `join`. Công việc tìm kiếm hiện thực hóa các kết quả trong bảng `_SRCH` của Analytics, hỗ trợ các truy vấn Log Analytics đầy đủ. Vì một công việc tìm kiếm được tối ưu hóa cho một bảng nguồn tại một thời điểm nên hãy sử dụng một công việc cho mỗi bảng phụ, sau đó nối hai bảng kết quả. Việc xóa bảng kết quả chỉ phù hợp sau khi quá trình phân tích hoàn tất.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-108', 'sc-200', 108, 'You plan to connect an external solution that will send Common Event Format (CEF) messages to Azure Sentinel.  
  
You need to deploy the log forwarder.  
  
Which three actions should you carry out, in sequence?', '{"statements":[{"id":"slot1","text":"Slot 1:","correctAnswer":"D"},{"id":"slot2","text":"Slot 2:","correctAnswer":"E"},{"id":"slot3","text":"Slot 3:","correctAnswer":"C"}],"choices":[{"key":"A","text":"Deploy an OMS Gateway on the network."},{"key":"B","text":"Set the syslog daemon to forward the events directly to Azure Sentinel."},{"key":"C","text":"Configure the syslog daemon. Restart the syslog daemon and the Log Analytics agent."},{"key":"D","text":"Download and install the Log Analytics agent."},{"key":"E","text":"Set the Log Analytics agent to listen on port 25226 and forward the CEF messages to Azure Sentinel."}]}'::jsonb, ARRAY['slot1=D', 'slot2=E', 'slot3=C']::text[], 'Trình chuyển tiếp nhật ký CEF sử dụng tác nhân Log Analytics làm trình nhận và tải lên cục bộ. Trước tiên hãy cài đặt tác nhân, định cấu hình tác nhân để nhận CEF qua TCP 25226 và chuyển tiếp các sự kiện tới Azure Sentinel, sau đó định cấu hình và khởi động lại tác nhân và dịch vụ nhật ký hệ thống để daemon bắt đầu gửi các sự kiện theo cấu hình mới.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-109', 'sc-200', 109, 'You are configuring Azure Sentinel.  
  
You need to send a Microsoft Teams message to a channel whenever a sign-in from a suspicious IP address is detected.  
  
Which two actions should you take in Azure Sentinel? Each correct answer represents part of the solution.  
  
**NOTE:** Each correct selection is worth one point.', '[{"key":"A","text":"Add a playbook."},{"key":"B","text":"Associate a playbook to an incident."},{"key":"C","text":"Enable Entity behavior analytics."},{"key":"D","text":"Create a workbook."},{"key":"E","text":"Enable the Fusion rule."}]'::jsonb, ARRAY['A', 'B']::text[], 'Playbook Microsoft Sentinel tự động hóa các hành động phản hồi và có thể gửi thông báo đến kênh Microsoft Teams. Việc liên kết sổ tay với một sự cố cho phép nó chạy khi sự cố liên quan được tạo. [Automate threat response with playbooks in Microsoft Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/automation/automate-responses-with-playbooks)', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-110', 'sc-200', 110, 'You have an Azure subscription that uses Microsoft Defender for Cloud.  
  
You need to configure Defender for Cloud to mitigate these risks:  
  
- Vulnerabilities in application source code  
- Exploitation toolkits in declarative templates  
- Operations originating from malicious IP addresses  
- Exposed secrets  
  
Which two Defender for Cloud services should you use? Each correct answer presents part of the solution.  
  
> NOTE: Each correct answer is worth one point.', '[{"key":"A","text":"Microsoft Defender for Resource Manager"},{"key":"B","text":"Microsoft Defender for DNS"},{"key":"C","text":"Microsoft Defender for App Service"},{"key":"D","text":"Microsoft Defender for Servers"},{"key":"E","text":"Microsoft Defender for DevOps"}]'::jsonb, ARRAY['A', 'E']::text[], 'Bộ bảo vệ Microsoft dành cho DevOps quét các môi trường phát triển và kho lưu trữ được kết nối để tìm các lỗ hổng mã, sự cố cơ sở hạ tầng dưới dạng mã và các bí mật bị lộ. Bộ bảo vệ Microsoft dành cho Trình quản lý Tài nguyên giám sát các hoạt động quản lý tài nguyên Azure và phát hiện hoạt động đáng ngờ, bao gồm các hoạt động từ các địa chỉ IP độc hại và việc sử dụng bộ công cụ khai thác.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-111', 'sc-200', 111, 'You have a Microsoft 365 E5 subscription containing 100 Windows 10 devices.  
  
You onboard the devices to Microsoft Defender 365.  
  
You need to ensure that remote shell connections to the onboarded devices can be initiated from the Microsoft 365 Defender portal.  
  
What should you do first?', '[{"key":"A","text":"Modify the permissions for Microsoft 365 Defender."},{"key":"B","text":"Create a device group."},{"key":"C","text":"From Advanced features in the Endpoints settings of the Microsoft 365 Defender portal, enable automated investigation."},{"key":"D","text":"Configure role-based access control (RBAC)."}]'::jsonb, ARRAY['D']::text[], 'Phản hồi trực tiếp cung cấp kết nối shell từ xa tới các thiết bị tích hợp. Việc bắt đầu phiên phản hồi trực tiếp yêu cầu quyền vai trò RBAC thích hợp và sau đó các nhóm thiết bị được gán cho các vai trò để truy cập phạm vi vào thiết bị. Do đó, hãy định cấu hình RBAC trước khi tạo nhóm thiết bị hoặc chỉ định khả năng phản hồi trực tiếp.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-112', 'sc-200', 112, 'You have a Microsoft 365 E5 subscription that includes the hosts shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784206386645-4zebaq3y.png)  
  
You have Microsoft Defender for Endpoint indicators as shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784206393158-mckaimhz.png)  
  
ID1 and ID2 refer to the same file as ID3.  
  
For each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"Host1 will block the execution of a file that has the SHA-1 hash value of 2aae6c35c94fcfb415dbe95f408b9ce91ee846ed.","correctAnswer":"Yes"},{"id":"2","text":"Host2 will block and remediate a file that has the SHA-256 hash value of 88d4266fd4e6338d13b845fcf289579d209c897823b9217da3e161936f031589.","correctAnswer":"No"},{"id":"3","text":"Host3 will block the execution of a file that has the SHA-256 hash value of 88d4266fd4e6338d13b845fcf289579d209c897823b9217da3e161936f031589.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:Yes', '2:No', '3:Yes']::text[], 'ID3 là chỉ báo thực thi Khối nằm trong phạm vi cả DG1 và DG2. Hành động chặn của nó được ưu tiên hơn chỉ báo Cho phép đối với cùng một tệp, do đó Host1 chặn việc thực thi. ID4 là chỉ báo thực thi Khối chỉ nằm trong phạm vi DG1, do đó, nó không ảnh hưởng đến Host2 trong DG2 nhưng chặn thực thi trên Host3 trong DG1. Bộ bảo vệ Microsoft dành cho Điểm cuối hỗ trợ các chỉ báo tệp tùy chỉnh trên macOS khi bật các biện pháp bảo vệ bắt buộc và tính toán hàm băm tệp.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784206386645-4zebaq3y.png', 'published'),
  ('sc200-113', 'sc-200', 113, 'You have an Azure subscription named Sub1 that contains an Azure key vault named Vault1 and an Azure Automation account named Automation1.  
  
You must ensure that Automation1 can access Vault1. Solution1 must meet these requirements:  
  
- Ensure that, if Automation1 is deleted, the permissions granted for Vault1 are removed automatically.  
- Ensure that runbooks created in Automation1 can read secret values stored in Vault1.  
- Follow the principle of least privilege.  
  
What should you configure for Automation1, and which built-in role should Automation1 use to access Vault1?', '[]'::jsonb, ARRAY[]::text[], 'system-assigned managed identity được gắn với vòng đời của Automation1 và Azure sẽ xóa danh tính khi tài khoản Tự động hóa bị xóa. Người dùng Key Vault Secrets cấp quyền cho mặt phẳng dữ liệu để đọc nội dung bí mật, cho phép runbook truy xuất các giá trị bí mật mà không cần có quyền quản lý bí mật rộng hơn của Key Vault Secrets Officer.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-114', 'sc-200', 114, 'You have a Microsoft 365 subscription that uses Microsoft Defender for Endpoint Plan 2 and contains 1,000 Windows devices.  
  
You have a PowerShell script named Script1.ps1 that is signed digitally.  
  
You need to ensure that you can run Script1.ps1 in a live response session on one of the devices.  
  
What should you do first from the live response session?', '[{"key":"A","text":"Run the library command."},{"key":"B","text":"Upload Script1.ps1 to the library."},{"key":"C","text":"Run the putfile command."},{"key":"D","text":"Modify the PowerShell execution policy of the device."}]'::jsonb, ARRAY['B']::text[], 'Các tập lệnh phải được **tải lên thư viện** trước khi chúng có thể được thực thi trong phiên phản hồi trực tiếp của Defender for Endpoint. Đây là bước tiên quyết giúp tập lệnh có sẵn trong môi trường phản hồi trực tiếp. Chỉ sau khi tải lên, bạn mới có thể tham khảo và chạy tập lệnh trong phiên phản hồi trực tiếp đang hoạt động.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-115', 'sc-200', 115, 'You have an Azure Sentinel playbook.  
  
When the playbook is triggered, it sends an email to a distribution group.  
  
You need to change the playbook so that it sends the email to the resource owner rather than to the distribution group.  
  
What should you do?', '[{"key":"A","text":"Add a parameter and modify the trigger."},{"key":"B","text":"Add a custom data connector and modify the trigger."},{"key":"C","text":"Add a condition and modify the action."},{"key":"D","text":"Add an alert and modify the action."}]'::jsonb, ARRAY['C']::text[], 'Lược đồ kích hoạt của Playbook Sentinel được cố định bằng dữ liệu sự cố/cảnh báo mà nó nhận được, do đó, lược đồ kích hoạt này không thể được mở rộng bằng tham số chủ sở hữu tùy ý. Thay vào đó, bạn thêm một bước điều kiện vào quy trình làm việc nhằm giải quyết chủ sở hữu tài nguyên (ví dụ: bằng cách tra cứu tài nguyên hoặc thẻ của tài nguyên đó) rồi sửa đổi trường người nhận của hành động Gửi Email để sử dụng giá trị động đó thay cho nhóm phân phối được mã hóa cứng.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-116', 'sc-200', 116, 'You have a Microsoft 365 subscription that uses Microsoft 365 Defender.  
  
You need to identify every entity affected by an incident.  
  
Which tab should you use in the Microsoft 365 Defender portal?', '[{"key":"A","text":"Investigations"},{"key":"B","text":"Devices"},{"key":"C","text":"Evidence and Response"},{"key":"D","text":"Alerts"}]'::jsonb, ARRAY['C']::text[], 'Tab **Bằng chứng và phản hồi** hiển thị các sự kiện được hỗ trợ và các thực thể đáng ngờ liên quan đến cảnh báo trong một sự cố, bao gồm các thực thể bị ảnh hưởng như thiết bị, tệp, người dùng, ứng dụng đám mây và hộp thư.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-117', 'sc-200', 117, 'You have a Microsoft Sentinel workspace.  
  
You are investigating an incident that involves multiple alerts, events, and entities.  
  
You need to create a bookmark for the investigation. The solution must minimize administrative effort.  
  
Which settings should you use?', '[{"key":"A","text":"Incidents"},{"key":"B","text":"Hunting"},{"key":"C","text":"Content hub"},{"key":"D","text":"Logs"}]'::jsonb, ARRAY['B']::text[], 'Dấu trang được tạo bằng cách chạy truy vấn và chọn kết quả để lưu. Microsoft ghi lại kịch bản chính xác này, thêm dấu trang cho một sự cố đang được điều tra, dưới dạng quy trình làm việc của Hunting-blade: chạy truy vấn săn tìm, chọn các sự kiện hoặc thực thể có liên quan và chọn "Thêm dấu trang" để đính kèm chúng vào sự cố với thiết lập tối thiểu.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-118', 'sc-200', 118, 'You have an Azure subscription named Sub1 and an Azure DevOps organization named AzDO1. AzDO1 uses Defender for Cloud and includes a project with a YAML pipeline named Pipeline1.  
  
Pipeline1 sends details of discovered open-source software vulnerabilities to Defender for Cloud.  
  
You need to configure Pipeline1 to send secret-scanning results to Defender for Cloud.  
  
What should you add to Pipeline1?', '[]'::jsonb, ARRAY[]::text[], 'Cấu hình tác vụ Microsoft Security DevOps đặt cài đặt tác vụ trong `inputs`. Đầu vào `categories` chọn danh mục máy phân tích bảo mật, do đó, việc đặt nó thành `secrets` sẽ định cấu hình chức năng quét bí mật.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-119', 'sc-200', 119, 'You have a Microsoft 365 subscription that uses Microsoft Defender XDR.  
  
You discover that when Microsoft Defender for Endpoint generates alerts for a commonly used executable file, it causes alert fatigue.  
  
You need to tune the alerts.  
  
Which two actions can an alert tuning rule perform for the alerts? Each correct answer presents a complete solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"delete"},{"key":"B","text":"hide"},{"key":"C","text":"resolve"},{"key":"D","text":"merge"},{"key":"E","text":"assign"}]'::jsonb, ARRAY['B', 'C']::text[], 'Quy tắc điều chỉnh cảnh báo có thể thực hiện hai hành động để giảm bớt sự mệt mỏi của cảnh báo: ẩn (xóa cảnh báo khỏi hàng đợi sự cố trong khi vẫn lưu chúng trong nhật ký) và giải quyết (đánh dấu cảnh báo là đã giải quyết, cho biết no cần thêm hành động). Quy tắc điều chỉnh không thể xóa cảnh báo vĩnh viễn, hợp nhất nhiều cảnh báo hoặc gán chúng cho người dùng cụ thể. Hai hành động này giúp giảm tiếng ồn hiệu quả trong khi vẫn duy trì các dấu vết kiểm tra.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-120', 'sc-200', 120, 'You have a Microsoft 365 E5 subscription that uses Microsoft Defender XDR.  
  
The security team at your company detects command and control (C2) agent traffic on the network. Agents communicate once every 50 hours.  
  
You need to create a Microsoft Defender XDR custom detection rule that will identify compromised devices and establish a pattern of communication. The solution must meet the following requirements:  
  
• Identify all the devices that have communicated during the past 14 days.  

• Minimize how long it takes to identify the devices.  
  
To what should you set the detection frequency for the rule?', '[{"key":"A","text":"Every 12 hours"},{"key":"B","text":"Every 24 hours"},{"key":"C","text":"Every three hours"},{"key":"D","text":"Every hour"}]'::jsonb, ARRAY['B']::text[], 'Cửa sổ xem lại tích hợp của quy tắc phát hiện tùy chỉnh được gắn với tần suất chạy của quy tắc đó (24 giờ -> xem lại 30 ngày, 12 giờ -> 48 giờ, 3 giờ -> 12 giờ, 1 giờ -> 4 giờ). Chỉ tần số 24 giờ mới cung cấp khả năng xem lại đủ lâu để nắm bắt toàn bộ lịch sử liên lạc trong 14 ngày cần thiết để phát hiện thiết bị báo hiệu cứ sau 50 giờ, khiến đây là lựa chọn duy nhất đáp ứng yêu cầu 14 ngày trong khi vẫn chạy thường xuyên nhất có thể.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-121', 'sc-200', 121, 'You need to limit cloud apps running on CLIENT1 to satisfy the Microsoft Defender for Endpoint requirements.  
  
Which two configurations should be modified? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"the Onboarding settings from Device management in Microsoft Defender Security Center"},{"key":"B","text":"Cloud App Security anomaly detection policies"},{"key":"C","text":"Advanced features from Settings in Microsoft Defender Security Center"},{"key":"D","text":"the Cloud Discovery settings in Cloud App Security"}]'::jsonb, ARRAY['C', 'D']::text[], 'Thực thi quyền truy cập ứng dụng đám mây yêu cầu bật chỉ báo mạng tùy chỉnh trong Microsoft Defender cho Endpoint và bật Enforce quyền truy cập ứng dụng trong tích hợp Microsoft Defender for Endpoint trong Cloud Discovery. Các cài đặt này cho phép các ứng dụng được đánh dấu là không hoạt động được đồng bộ hóa và chặn thông qua bảo vệ mạng.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-122', 'sc-200', 122, 'You have an Azure subscription that uses Microsoft Defender for Cloud.  
  
You have an Amazon Web Services (AWS) subscription that contains multiple virtual machines running Windows Server.  
  
You need to enable Microsoft Defender for Servers on the virtual machines.  
  
Which two actions should you take? Each correct answer presents part of the solution.  
  
> NOTE: Each correct answer is worth one point.', '[{"key":"A","text":"From Defender for Cloud, enable agentless scanning."},{"key":"B","text":"Onboard the virtual machines to Microsoft Defender for Endpoint."},{"key":"C","text":"From Defender for Cloud, configure the AWS connector."},{"key":"D","text":"Install the Azure Virtual Machine Agent (VM Agent) on each virtual machine."},{"key":"E","text":"From Defender for Cloud, configure auto-provisioning."}]'::jsonb, ARRAY['B', 'C']::text[], 'Defender for Cloud phải kết nối tài khoản AWS bằng cách sử dụng trình kết nối AWS để có thể khám phá và quản lý khối lượng công việc AWS. Tính năng bảo vệ của Bộ bảo vệ dành cho Máy chủ trên các máy chủ không phải Azure sử dụng cảm biến của Bộ bảo vệ Microsoft dành cho Điểm cuối, do đó, các máy ảo Windows Server phải được tích hợp vào Bộ bảo vệ Microsoft dành cho Điểm cuối.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-123', 'sc-200', 123, 'You have an Azure subscription named Sub1 that contains the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783742295817-2ceij3lv.png)  
  
You plan to configure Rule1 so that it triggers Lapp1 when an incident is generated.  
  
You need to recommend the RBAC role to assign to WS1 and the scope at which to assign the role. The solution must follow the principle of least privilege.  
  
What should you recommend?', '[]'::jsonb, ARRAY[]::text[], 'Microsoft Sentinel Automation Contributor cho phép các quy tắc tự động hóa chạy playbook. Tài khoản dịch vụ Microsoft Sentinel phải nhận được vai trò này trên nhóm tài nguyên chứa sổ tay; LApp1 nằm trong RG2. RG2 là phạm vi có sẵn có đặc quyền thấp nhất đáp ứng yêu cầu đó.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783742295817-2ceij3lv.png', 'published'),
  ('sc200-124', 'sc-200', 124, 'You have a Microsoft 365 E5 subscription that includes a device named Device1.  
  
In the Microsoft Defender portal, you find that an alert was triggered for Device1.  
  
From the Device inventory page, you isolate Device1.  
  
You need to obtain a list of programs installed on Device1.  
  
What should you do?', '[{"key":"A","text":"Initiate a live response session and run the processes command."},{"key":"B","text":"Initiate an automated investigation and view the results in the Action center."},{"key":"C","text":"Initiate a live response session and run the analyze command."},{"key":"D","text":"Run an advanced hunting query against the DeviceTvmSoftwareInventory table."}]'::jsonb, ARRAY['D']::text[], 'Bảng tìm kiếm nâng cao `DeviceTvmSoftwareInventory` chứa các bản ghi kiểm kê Quản lý lỗ hổng bảo vệ của Microsoft dành cho phần mềm hiện được cài đặt trên thiết bị. Việc lọc bảng đó cho Device1 sẽ trả về danh sách chương trình đã cài đặt của nó. Lệnh phản hồi trực tiếp `processes` báo cáo các tiến trình đang chạy, trong khi `analyze` đánh giá một thực thể được chỉ định.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-125', 'sc-200', 125, 'You have a Microsoft Sentinel workspace named SW1.  
  
You need to identify which anomaly rules are enabled in SW1.  
  
What should you review in Microsoft Sentinel?', '[{"key":"A","text":"Content hub"},{"key":"B","text":"Entity behavior"},{"key":"C","text":"Analytics"},{"key":"D","text":"Settings"}]'::jsonb, ARRAY['C']::text[], 'Trong Microsoft Sentinel, các quy tắc bất thường và trạng thái bật của chúng được xem xét trong phần Phân tích, cụ thể là trong tab Bất thường. Tab này hiển thị tất cả các quy tắc bất thường có sẵn trong chế độ xem dạng lưới và cho biết quy tắc nào hiện được bật hoặc tắt. Trung tâm nội dung quản lý việc triển khai quy tắc, hành vi của thực thể cung cấp thông tin chi tiết về hành động của người dùng/thực thể và Cài đặt xử lý cấu hình không gian làm việc.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-126', 'sc-200', 126, 'You have a Microsoft 365 E5 subscription containing 500 Windows 11 devices.  
  
You have a Microsoft Defender for Endpoint deployment configured with the following settings:  
  
- Discovery mode: Basic  
- Live Response: Disabled  
- Enable EDR in block mode: Off  
- Tamper Protection: Off  
  
You need to implement automatic attack disruption in Microsoft Defender XDR.  
  
What should you do?', '[{"key":"A","text":"Change Discovery mode to Standard discovery."},{"key":"B","text":"Set Live Response to On."},{"key":"C","text":"Set Tamper Protection to On."},{"key":"D","text":"Set Enable EDR in block mode to On."}]'::jsonb, ARRAY['A']::text[], 'Việc tự động gián đoạn cuộc tấn công yêu cầu Bộ bảo vệ Microsoft dành cho việc khám phá thiết bị điểm cuối phải được đặt thành Khám phá tiêu chuẩn để tự động bắt đầu hành động Chứa thiết bị. Đăng ký Microsoft 365 E5 đáp ứng yêu cầu cấp phép.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-127', 'sc-200', 127, 'A security administrator receives email notifications from Azure Defender for activities such as possible malware being uploaded to a storage account and possible successful brute-force attacks.  
  
The security administrator does **not** receive email notifications for activities such as failed antimalware actions and suspicious network activity, although the alerts appear in Azure Security Center.  
  
You need to ensure that the security administrator receives email notifications for all activities.  
  
What should you configure in the Security Center settings?', '[{"key":"A","text":"the severity level of email notifications"},{"key":"B","text":"a cloud connector"},{"key":"C","text":"the Azure Defender plans"},{"key":"D","text":"the integration settings for Threat detection"}]'::jsonb, ARRAY['A']::text[], 'Thông báo email Microsoft Defender for Cloud có thể được định cấu hình với mức độ cảnh báo ở mức tối thiểu. Việc đặt mức độ nghiêm trọng của thông báo đủ thấp sẽ khiến thông báo được gửi cho các cảnh báo có mức độ nghiêm trọng thấp hơn cũng như các cảnh báo có mức độ nghiêm trọng cao hơn.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-128', 'sc-200', 128, 'You have an Azure subscription.  
  
You need to stream Microsoft Graph activity logs to a third-party security information and event management (SIEM) tool. The solution must require minimal administrative effort.  
  
Where should you stream the logs?', '[{"key":"A","text":"an Azure Event Hubs namespace"},{"key":"B","text":"an Azure Storage account"},{"key":"C","text":"an Azure Event Grid namespace"},{"key":"D","text":"a Log Analytics workspace"}]'::jsonb, ARRAY['A']::text[], 'Nhật ký hoạt động của Microsoft Graph có thể được truyền trực tuyến qua không gian tên Azure Event Hubs tới các giải pháp SIEM của bên thứ ba. Trung tâm sự kiện cung cấp đường dẫn tích hợp thời gian thực được hỗ trợ, tránh các quy trình thu thập hoặc xuất bổ sung cần thiết với bộ lưu trữ hoặc không gian làm việc Log Analytics.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-129', 'sc-200', 129, 'You have a Microsoft Sentinel workspace named Workspace1.  
  
The AzureActivity table in Workspace1 has these retention periods:  
  
- Interactive: 180 days  
- Total: 180 days  
  
You need to modify the retention periods to meet these requirements:  
  
- Minimize the costs associated with storing data in the table.  
- Maximize the period during which the table data remains available.  
  
How should you configure each retention period?', '[]'::jsonb, ARRAY[]::text[], 'Microsoft Sentinel bao gồm 90 ngày lưu giữ tương tác (cấp phân tích) đầu tiên cho bảng Log Analytics ở mức phí bổ sung no, do đó, việc đặt lưu giữ tương tác thành 90 ngày sẽ sử dụng toàn bộ hạn mức miễn phí mà không phải trả thêm dung lượng lưu trữ ở cấp tương tác. Đặt tổng thời gian lưu giữ thành 2 năm, sau đó giữ dữ liệu có sẵn trong khoảng thời gian dài nhất có thể bằng cách chuyển mọi dữ liệu cũ hơn 90 ngày sang lưu trữ dài hạn (lưu trữ) chi phí thấp thay vì xóa dữ liệu đó.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-130', 'sc-200', 130, 'You have a Microsoft Sentinel workspace with Microsoft Sentinel data lake enabled for long-term retention.  
  
You have a Microsoft Security Operations Center (SOC) that uses Jupyter notebooks for advanced investigations.  
  
You run a weekly, hypothesis-driven hunting query to identify potential lateral movement. The query searches for multiple failed sign-ins followed by a successful sign-in.  
  
You need to offload the query''s heavy computation and persist the processed results in the data lake.  
  
What should you do?', '[{"key":"A","text":"Create an analytics rule."},{"key":"B","text":"Create a scheduled notebook job."},{"key":"C","text":"Use livestream to continuously append the results of a second hunting query."},{"key":"D","text":"Every hour, create a watchlist from raw events."}]'::jsonb, ARRAY['B']::text[], 'Công việc sổ ghi chép đã lên lịch sẽ thực thi quá trình xử lý sổ ghi chép Jupyter dựa trên dữ liệu hồ dữ liệu Microsoft Sentinel theo lịch định kỳ. Nó được thiết kế để tính toán dựa trên máy tính xách tay nặng hơn và có thể ghi kết quả đã xử lý vào các bảng tùy chỉnh trong kho dữ liệu hoặc tầng phân tích, giúp nó phù hợp với quy trình điều tra và săn lùng mối đe dọa định kỳ.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-131', 'sc-200', 131, 'You have a Microsoft Sentinel workspace named Workspace1 and a firewall named FW1. FW1 logs are ingested into Workspace1. Firewall events are usually ingested about two minutes after they occur, and occasionally as late as five minutes afterward.  
  
A scheduled analytics rule runs every five minutes and queries the `TimeGenerated` value for the preceding five minutes.  
  
You need to minimize missed detections resulting from ingestion delays and avoid duplicate alerts between rule runs.  
  
How should you modify the analytics rule query?', '[{"key":"A","text":"Increase the rule frequency to one minute and keep the lookback window on TimeGenerated at five minutes."},{"key":"B","text":"Keep the lookback window on TimeGenerated at five minutes and add | where ingestion_time() > ago(5m)."},{"key":"C","text":"Increase the lookback window on TimeGenerated to 10 minutes and add | where ingestion_time() > ago(5m)."},{"key":"D","text":"Increase the lookback window on TimeGenerated to 10 minutes and do NOT add ingestion_time() filter."}]'::jsonb, ARRAY['C']::text[], 'Để bao gồm các sự kiện xảy ra tối đa 5 phút sau dấu thời gian `TimeGenerated` của chúng, việc xem lại `TimeGenerated` phải kéo dài khoảng thời gian quy tắc 5 phút cộng với độ trễ nhập tối đa 5 phút, tổng cộng là 10 phút. Vì điều này tạo ra phạm vi thời gian chồng chéo giữa các lần thực thi, `ingestion_time() > ago(5m)` hạn chế mỗi lần thực thi đối với các bản ghi được nhập trong khoảng thời gian 5 phút của chính nó, ngăn ngừa trùng lặp.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-132', 'sc-200', 132, 'You have a Microsoft 365 subscription that uses Microsoft 365 Defender.  
  
You plan to create a hunting query in Microsoft Defender.  
  
You need to create a custom tracked query that will be used to evaluate the subscription''s threat status.  
  
From which page in the Microsoft 365 Defender portal should you create the query?', '[{"key":"A","text":"Threat analytics"},{"key":"B","text":"Advanced Hunting"},{"key":"C","text":"Explorer"},{"key":"D","text":"Policies & rules"}]'::jsonb, ARRAY['C']::text[], 'Truy vấn được theo dõi tùy chỉnh được tạo trong Threat Explorer bằng cách lưu truy vấn và chọn **Theo dõi truy vấn này**. Sau đó, truy vấn sẽ tự động chạy và kết quả của nó sẽ xuất hiện trong Trình theo dõi mối đe dọa. [Threat trackers in Microsoft Defender for Office 365 Plan 2](https://learn.microsoft.com/en-us/defender-office-365/threat-trackers)', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-133', 'sc-200', 133, 'Solution: You configure Controlled folder access.  
  
Does this meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], 'Định cấu hình Quyền truy cập Thư mục được Kiểm soát không đáp ứng được mục tiêu. Quyền truy cập thư mục được kiểm soát (một tính năng Chống vi rút của Bộ bảo vệ Microsoft) chỉ hoạt động khi Bộ chống vi rút của Bộ bảo vệ ở chế độ hoạt động. Khi phần mềm chống vi-rút của bên thứ ba được cài đặt, Bộ bảo vệ sẽ trở lại chế độ thụ động và Quyền truy cập Thư mục được Kiểm soát sẽ bị tắt. EDR ở chế độ chặn sẽ cung cấp sự bảo vệ cần thiết vì nó hoạt động độc lập với chế độ Chống vi-rút.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-134', 'sc-200', 134, 'Solution: You enable automated investigation and response (AIR).  
  
Does this meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], 'Việc bật Điều tra và Phản hồi Tự động (AIR) không đáp ứng được mục tiêu trong trường hợp này. Khả năng khắc phục của AIR phụ thuộc vào việc Microsoft Defender Antivirus đang ở chế độ hoạt động hay đang chạy trong EDR ở chế độ chặn. Khi Defender Antivirus ở chế độ thụ động (do có sự hiện diện của phần mềm chống vi-rút của bên thứ ba), AIR không thể thực hiện các hành động khắc phục. Cần phải có EDR ở chế độ chặn hoặc bật Defender ở chế độ hoạt động.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-135', 'sc-200', 135, 'Solution: You enable endpoint detection and response (EDR) in block mode.  
  
Does this satisfy the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[], 'EDR ở chế độ chặn cung cấp khả năng bảo vệ sau vi phạm trên các thiết bị có tính năng Chống vi-rút của Bộ bảo vệ Microsoft ở chế độ thụ động cùng với giải pháp chống vi-rút của bên thứ ba. Nó có thể chặn và khắc phục các thành phần độc hại được EDR phát hiện mà sản phẩm chống vi-rút chính đã bỏ sót.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-136', 'sc-200', 136, 'Solution: You enable Live Response.  
  
Does this achieve the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], 'Live Response là một shell tương tác từ xa dành cho các hoạt động điều tra và phản hồi. EDR ở chế độ chặn là tính năng cung cấp khả năng bảo vệ sau vi phạm bằng cách phát hiện và khắc phục các thành phần độc hại bị bỏ sót bởi sản phẩm chống vi-rút không phải của Microsoft trong khi Tính năng chống vi-rút của Bộ bảo vệ Microsoft chạy ở chế độ thụ động.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-137', 'sc-200', 137, 'Solution: From **Security alerts**, select the alert, choose **Take Action**, and then expand the **Mitigate the threat** section.  
  
Does this meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[], 'Phần **Giảm thiểu mối đe dọa** trong tab **Thực hiện hành động** của cảnh báo bảo mật cung cấp các bước khắc phục thủ công cho cảnh báo đó. Những hành động được đề xuất này hỗ trợ giải quyết mối đe dọa được phát hiện.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-138', 'sc-200', 138, 'Solution: Download the report from **Regulatory compliance**.  
  
Does this accomplish the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], 'Báo cáo tuân thủ quy định nhằm mục đích báo cáo tình trạng tuân thủ so với các tiêu chuẩn. Để xem hướng dẫn liên quan đến cảnh báo bảo mật, hãy sử dụng thông tin chi tiết về cảnh báo bảo mật, bao gồm các bước giảm thiểu và đề xuất nhằm giúp ngăn chặn các cuộc tấn công trong tương lai.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-139', 'sc-200', 139, 'Solution: In **Security alerts**, select the alert, choose **Take action**, and expand the **Prevent future attacks** section.  
  
Does this satisfy the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[], 'Phần **Ngăn chặn các cuộc tấn công trong tương lai** trong tab **Thực hiện hành động** của cảnh báo cung cấp các đề xuất bảo mật giúp giảm bề mặt tấn công, cải thiện tình trạng bảo mật và ngăn chặn các cuộc tấn công trong tương lai.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-140', 'sc-200', 140, 'You have an Azure subscription that uses Microsoft Defender for Cloud.  
  
You need to use an Azure Resource Manager (ARM) template to create a workflow automation that triggers a logic app when Microsoft Defender for Cloud receives specific alerts.  
  
How should you complete the template?', '[]'::jsonb, ARRAY[]::text[], 'Quy trình công việc của Ứng dụng Logic có loại tài nguyên ARM `Microsoft.Logic/workflows`. Do đó, biểu thức `resourceId()` cho hành động Ứng dụng Logic phải sử dụng `Microsoft.Logic` trước phân đoạn loại tài nguyên `/workflows`.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-141', 'sc-200', 141, 'You have an Azure subscription that contains a user named User1 and a Microsoft Sentinel workspace named WS1.  
  
You deploy Advanced Security Information Model (ASIM) authentication parsers to WS1.  
  
You need to use the parsers to query the authentication events generated by User1 during the last 24 hours. The solution must maximize the query performance.  
  
How should you complete the query?', '[]'::jsonb, ARRAY[]::text[], '`imAuthentication` là trình phân tích cú pháp thống nhất xác thực ASIM. Tham số `targetusername_has` của nó lọc tên người dùng đích trong khi trình phân tích cú pháp xử lý dữ liệu nguồn, trong khi `starttime` và `endtime` giới hạn kết quả trong 24 giờ trước đó. Các tham số của trình phân tích cú pháp tránh bộ lọc chuỗi sau trình phân tích cú pháp riêng biệt và mang lại hiệu suất tốt hơn.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-142', 'sc-200', 142, 'Your organization uses Azure Sentinel.  
  
A newly hired security analyst says she cannot assign or resolve incidents in Azure Sentinel.  
  
You need to ensure that the analyst is able to assign and resolve incidents. The solution must follow the principle of least privilege.  
  
Which role should you assign to the analyst?', '[{"key":"A","text":"Azure Sentinel Responder"},{"key":"B","text":"Logic App Contributor"},{"key":"C","text":"Azure Sentinel Contributor"},{"key":"D","text":"Azure Sentinel Reader"}]'::jsonb, ARRAY['A']::text[], 'Vai trò Người phản hồi Azure Sentinel bao gồm khả năng quản lý sự cố, bao gồm việc chỉ định và giải quyết chúng mà không cần cấp các quyền quản lý tài nguyên rộng hơn do Người đóng góp Azure Sentinel cung cấp. Trình đọc Azure Sentinel ở chế độ chỉ xem và Trình đóng góp ứng dụng logic áp dụng cho Ứng dụng logic và sách giải trí thay vì quản lý sự cố.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-143', 'sc-200', 143, 'You have an Azure subscription that uses Microsoft Defender for Cloud and includes 100 virtual machines running Windows Server.  
  
You need to configure Defender for Cloud to gather event data from the virtual machines. The solution must minimize administrative effort and costs.  
  
Which two actions should you take? Each correct answer is part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"From the workspace created by Defender for Cloud, set the data collection level to Common."},{"key":"B","text":"From the Microsoft Endpoint Manager admin center, enable automatic enrollment."},{"key":"C","text":"From the Azure portal, create an Azure Event Grid subscription."},{"key":"D","text":"From the workspace created by Defender for Cloud, set the data collection level to All Events."},{"key":"E","text":"From Defender for Cloud in the Azure portal, enable automatic provisioning for the virtual machines."}]'::jsonb, ARRAY['A', 'E']::text[], 'Trong cấu hình dựa trên tác nhân Defender for Cloud cũ, tính năng cung cấp tự động sẽ triển khai tác nhân giám sát cần thiết cho các máy ảo ở quy mô đăng ký. Việc đặt Bộ bảo vệ cho không gian làm việc Log Analytics do Đám mây tạo thành cấp bộ sưu tập Chung sẽ tập hợp các sự kiện bảo mật tiêu chuẩn đồng thời tránh khối lượng nhập bổ sung và chi phí thu thập Tất cả Sự kiện. Khả năng tự động cung cấp tác nhân Log Analytics cũ này đã bị ngừng sử dụng đối với các cấu hình mới.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-144', 'sc-200', 144, 'Your Azure subscription uses Microsoft Defender for Cloud.  
  
You need to configure Defender for Cloud to mitigate these risks:  
  
- Vulnerabilities in the application source code  
- Exploitation toolkits in declarative templates  
- Operations originating from malicious IP addresses  
- Exposed secrets  
  
Which two Defender for Cloud services should you use? Each correct answer presents part of the solution.  
  
> **NOTE:** Each correct answer is worth one point.', '[{"key":"A","text":"Microsoft Defender for APIs"},{"key":"B","text":"Microsoft Defender for Resource Manager"},{"key":"C","text":"Microsoft Defender for App Service"},{"key":"D","text":"Microsoft Defender for Servers"},{"key":"E","text":"Microsoft Defender for DevOps"}]'::jsonb, ARRAY['B', 'E']::text[], 'Bộ bảo vệ Microsoft dành cho DevOps xác định các lỗ hổng mã và bí mật bị lộ trong kho lưu trữ và môi trường CI/CD. Bộ bảo vệ Microsoft dành cho Trình quản lý tài nguyên giám sát các hoạt động quản lý tài nguyên Azure và phát hiện hoạt động từ các địa chỉ IP độc hại và bộ công cụ khai thác, bao gồm MicroBurst và PowerZure.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-145', 'sc-200', 145, 'You have five on-premises Linux servers.  
  
You have an Azure subscription that uses Microsoft Defender for Cloud.  
  
You need to use Defender for Cloud to protect the Linux servers. What should you install on the servers first?', '[{"key":"A","text":"the Dependency agent"},{"key":"B","text":"the Log Analytics agent"},{"key":"C","text":"the Azure Connected Machine agent"},{"key":"D","text":"the Guest Configuration extension"}]'::jsonb, ARRAY['C']::text[], 'Tác nhân Azure Connected Machine tích hợp máy chủ tại chỗ dưới dạng máy chủ hỗ trợ Azure Arc, kết nối máy chủ đó với đăng ký Azure để Defender for Cloud có thể bảo vệ máy chủ đó và triển khai các tiện ích mở rộng cần thiết. Các tác nhân hoặc tiện ích mở rộng khác không thiết lập kết nối Azure Arc ban đầu đó.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-146', 'sc-200', 146, 'You have a Microsoft Sentinel workspace containing these Advanced Security Information Model (ASIM) parsers:  
  
- `_Im_ProcessCreate`  
- `imProcessCreate`  
  
You create a new source-specific parser named `vimProcessCreate`.  
  
You need to modify parsers to meet the following requirements:  
  
- Call all ProcessCreate parsers.  
- Standardize fields to the Process schema.  
  
Each parser may be used once, more than once, or not at all.', '{"statements":[{"id":"call_all","text":"Call all the ProcessCreate parsers:","correctAnswer":"B"},{"id":"standardize","text":"Standardize fields to the Process schema:","correctAnswer":"C"}],"choices":[{"key":"A","text":"_Im_ProcessCreate"},{"key":"B","text":"imProcessCreate"},{"key":"C","text":"vimProcessCreate"}]}'::jsonb, ARRAY['call_all=B', 'standardize=C']::text[], 'ASIM sử dụng một hệ thống phân cấp trong đó trình phân tích cú pháp thống nhất gọi các trình phân tích cú pháp nguồn cụ thể, trong khi mỗi trình phân tích cú pháp nguồn cụ thể ánh xạ dữ liệu nguồn của nó tới lược đồ chuẩn hóa. Đối với các trình phân tích cú pháp được triển khai trong không gian làm việc, `imProcessCreate` là trình phân tích cú pháp hợp nhất; `vimProcessCreate` là trình phân tích cú pháp lọc dành riêng cho nguồn phải chuẩn hóa các trường của nó thành lược đồ Quy trình.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-147', 'sc-200', 147, 'You have a Microsoft 365 E5 subscription.  
  
You need to ensure that Microsoft Defender XDR generates an alert when attackers try to connect to a specific device. The solution must minimize administrative effort.  
  
What should you do in the Microsoft Defender portal?', '[{"key":"A","text":"Create a deception rule that includes a decoy."},{"key":"B","text":"Tag an existing device as a honeytoken entity."},{"key":"C","text":"Create a deception rule that includes a lure."},{"key":"D","text":"Tag an existing device as a sensitive entity."}]'::jsonb, ARRAY['B']::text[], 'Bộ bảo vệ danh tính Microsoft hỗ trợ gắn thẻ thiết bị dưới dạng mã thông báo mật ong. Các thực thể Honeytoken là bẫy đối với các tác nhân độc hại và hoạt động xác thực liên quan đến Honeytoken sẽ tạo ra cảnh báo. Do đó, việc gắn thẻ thiết bị hiện có sẽ cung cấp cảnh báo cần thiết với cấu hình tối thiểu.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-148', 'sc-200', 148, 'You have an Azure subscription named Sub1 that contains a resource group named RG1. RG1 contains two Azure key vaults, KV1 and KV2, that use Azure role-based access control (Azure RBAC).  
  
The subscription includes the users in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783742193875-zdiqgk74.png)  
  
KV1 contains a secret named Secret1. KV2 contains a secret named Secret2.  
  
Which users can read each secret''s value?', '[]'::jsonb, ARRAY[]::text[], 'Vai trò Quản trị viên Key Vault bao gồm quyền truy cập vào mặt phẳng dữ liệu vào các bí mật và việc chỉ định vai trò trong phạm vi đăng ký áp dụng cho tất cả các tài nguyên trong đăng ký. Key Vault Reader chỉ cho phép siêu dữ liệu bí mật chứ không cho phép nội dung bí mật. Key Vault Secrets Người dùng cho phép đọc nội dung bí mật, nhưng nhiệm vụ của User3 chỉ nằm trong phạm vi KV1.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783742193875-zdiqgk74.png', 'published'),
  ('sc200-149', 'sc-200', 149, 'You have an Azure subscription containing a virtual machine named VM1 that uses Microsoft Defender for Cloud.  
  
Microsoft Defender for Cloud is configured for automatic provisioning with Azure Monitor Agent.  
  
You need to create a custom alert-suppression rule to suppress false-positive alerts for suspicious PowerShell usage on VM1.  
  
What should you do first?', '[{"key":"A","text":"From Microsoft Defender for Cloud, export the alerts to a Log Analytics workspace."},{"key":"B","text":"From Microsoft Defender for Cloud, add a workflow automation."},{"key":"C","text":"On VM1, trigger a PowerShell alert."},{"key":"D","text":"On VM1, run the Get-MPThreatCatalog cmdlet."}]'::jsonb, ARRAY['C']::text[], 'Quy tắc loại bỏ Microsoft Defender for Cloud không thể loại bỏ loại cảnh báo chưa được kích hoạt trước đó trong nhóm quản lý hoặc đăng ký có liên quan. Việc tạo cảnh báo PowerShell đáng ngờ trên VM1 sẽ thiết lập loại cảnh báo và cung cấp ngữ cảnh cảnh báo cần thiết để tạo quy tắc nhắm vào cảnh báo đó.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-150', 'sc-200', 150, 'You have the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783744522176-ga4nnn91.png)  
  
Your Azure subscription uses Microsoft Defender for Cloud.  
  
You need to use Defender for Cloud to protect VM1 and Server1. The solution must meet these requirements:  
  
- Support Advanced Threat Protection and vulnerability assessment.  
- Register each SQL Server 2022 instance as a SQL virtual machine.  
- Minimize implementation and administrative effort.  
  
What should you deploy to each server?', '[]'::jsonb, ARRAY[]::text[], 'Tiện ích mở rộng Tác nhân SQL IaaS đăng ký SQL Server được cài đặt trên máy ảo Azure với nhà cung cấp tài nguyên máy ảo SQL, vì vậy VM1 chỉ yêu cầu tiện ích mở rộng VM. SQL Server tại chỗ phải được kích hoạt Azure Arc với tác nhân Azure Connected Machine trước khi có thể triển khai các tiện ích mở rộng; Do đó, Server1 yêu cầu tác nhân đó và phần mở rộng VM. Bộ bảo vệ dành cho máy chủ SQL trên máy cung cấp khả năng đánh giá lỗ hổng và bảo vệ mối đe dọa nâng cao cho SQL Server trên máy ảo Azure và máy hỗ trợ Arc.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783744522176-ga4nnn91.png', 'published'),
  ('sc200-151', 'sc-200', 151, 'You need to recommend remediation actions for the Azure Defender alerts for Fabrikam.  
  
What should you recommend for each threat?', '[]'::jsonb, ARRAY[]::text[], 'Chính sách truy cập của Key Vault quản lý các quyền đối với khóa, bí mật và chứng chỉ, do đó việc sửa đổi cài đặt chính sách truy cập của vault sẽ giải quyết quyền truy cập nội bộ không phù hợp. Cài đặt tường lửa Key Vault kiểm soát các địa chỉ IP và mạng ảo được phép đối với các yêu cầu mặt phẳng dữ liệu Key Vault, do đó việc sửa đổi các cài đặt đó sẽ hạn chế quyền truy cập từ bên ngoài. NSG và Azure Firewall không trực tiếp thực thi các quy tắc tường lửa mặt phẳng dữ liệu của dịch vụ Key Vault.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-152', 'sc-200', 152, 'You have an Azure subscription named Sub1 linked to a Microsoft Entra tenant named contoso.com. Contoso.com contains a user named User1. Sub1 contains a Microsoft Sentinel workspace.  
  
You provision a Microsoft Copilot for Security capacity.  
  
Ensure that User1 can use Copilot for Security to perform these tasks while following the principle of least privilege:  
  
- Update the data sharing and feedback options.  
- Investigate Microsoft Sentinel incidents.  
  
Which role should you assign to User1 for each task?', '[]'::jsonb, ARRAY[]::text[], 'Quản trị viên bảo mật tự động kế thừa khả năng của chủ sở hữu Security Copilot, cho phép cập nhật các tùy chọn phản hồi và chia sẻ dữ liệu mà không cần chỉ định vai trò Quản trị viên toàn cầu đặc quyền hơn. Microsoft Sentinel yêu cầu vai trò Người phản hồi Microsoft Sentinel để điều tra các sự cố; Microsoft Sentinel Reader chỉ cung cấp quyền truy cập đọc.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-153', 'sc-200', 153, 'You have a Microsoft 365 E5 subscription that uses Microsoft Defender and an Azure subscription that uses Azure Sentinel.  
  
You need to identify all devices that contain files from emails sent by a known malicious email sender. The query must be based on a matching SHA256 hash.  
  
Complete the query by selecting the appropriate options.', '[]'::jsonb, ARRAY[]::text[], 'SHA256 là trường băm tệp đính kèm/tệp được chia sẻ trong EmailAttachmentInfo và DeviceFileEvents. Việc lọc SHA256 được điền sẽ ngăn chặn các bản ghi tương quan mà không có hàm băm có thể sử dụng được và việc kết hợp trên SHA256 sẽ xác định các sự kiện tệp điểm cuối—và do đó, xác định các thiết bị—đối với các tệp được đính kèm vào thư từ người gửi được chỉ định.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-154', 'sc-200', 154, 'You have a Microsoft 365 E5 subscription that uses Microsoft Defender for Endpoint.  
  
The following table shows your on-premises devices.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784205363824-hdhu53z7.png)  
  
You are preparing an incident-response plan for devices infected with malware.  
  
You need to recommend response actions that meet these requirements:  
  
- Block malware from communicating with and infecting managed devices.  
- Do **not** affect the ability to control managed devices.  
  
Which actions should you use for each device?', '[]'::jsonb, ARRAY[]::text[], 'Việc cách ly và điều tra tự động được hỗ trợ cho thiết bị Windows Server 2022 tích hợp. Tính năng cách ly hạn chế quyền truy cập mạng bên ngoài trong khi vẫn cho phép các dịch vụ Defender bắt buộc, do đó, thiết bị vẫn có thể quản lý được. Ngăn chặn thiết bị được thiết kế cho một thiết bị được phát hiện không được quản lý: Bộ bảo vệ dành cho các thiết bị tích hợp tại Điểm cuối chặn giao tiếp vào và ra với thiết bị đó, ngăn ngừa lây nhiễm từ bên trong trong khi vẫn giữ nguyên khả năng kiểm soát thiết bị được quản lý.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784205363824-hdhu53z7.png', 'published'),
  ('sc200-155', 'sc-200', 155, 'You have an Azure subscription that uses Microsoft Sentinel.  
  
You need to create a custom report that visualizes sign-in information over time.  
  
What should you create first?', '[{"key":"A","text":"a hunting query"},{"key":"B","text":"a workbook"},{"key":"C","text":"a notebook"},{"key":"D","text":"a playbook"}]'::jsonb, ARRAY['B']::text[], 'Sổ làm việc Microsoft Sentinel cung cấp các báo cáo và hình ảnh tương tác tùy chỉnh dựa trên truy vấn nhật ký, bao gồm các biểu đồ hiển thị hoạt động đăng nhập Microsoft Entra theo thời gian.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-156', 'sc-200', 156, 'You have an on-premises datacenter containing a custom web app named App1. App1 uses Active Directory Domain Services (AD DS) authentication and is accessed through Microsoft Entra application proxy.  
  
You have a Microsoft 365 E5 subscription that uses Microsoft Defender XDR.  
  
After an alert that a user downloaded highly confidential documents, remediate the risk by requiring MFA when users use App1 to begin downloading documents labeled **Highly Confidential**.  
  
What should you do?', '[]'::jsonb, ARRAY[]::text[], 'Truy cập có điều kiện thực thi MFA dưới dạng kiểm soát cấp quyền truy cập. Ứng dụng Microsoft Defender for Cloud cung cấp các chính sách phiên Kiểm soát ứng dụng truy cập có điều kiện để kiểm tra và kiểm soát các hoạt động trong thời gian thực, bao gồm cả việc tải xuống các tệp nhạy cảm và có thể gọi bối cảnh xác thực để yêu cầu MFA tăng cường cho hành động nhạy cảm đó. Kiểm soát này hỗ trợ các ứng dụng tại chỗ được xuất bản thông qua proxy ứng dụng Microsoft Entra.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-157', 'sc-200', 157, 'You have a Microsoft 365 E5 subscription that uses Microsoft Exchange Online.  
  
You need to identify phishing email messages.  
  
Which three cmdlets should you run, in sequence?', '{"statements":[{"id":"1","text":"Slot 1:","correctAnswer":"A"},{"id":"2","text":"Slot 2:","correctAnswer":"E"},{"id":"3","text":"Slot 3:","correctAnswer":"B"}],"choices":[{"key":"A","text":"Connect-IPPSSession"},{"key":"B","text":"Start-ComplianceSearch"},{"key":"C","text":"Connect-ExchangeOnline"},{"key":"D","text":"Search-UnifiedAuditLog"},{"key":"E","text":"New-ComplianceSearch"}]}'::jsonb, ARRAY['1=A', '2=E', '3=B']::text[], 'Connect-IPPSSession kết nối với PowerShell Bảo mật & Tuân thủ, nơi tạo các tìm kiếm tuân thủ. New-ComplianceSearch xác định vị trí hộp thư và tiêu chí truy vấn cho các thư lừa đảo bị nghi ngờ và Start-ComplianceSearch sẽ thực hiện tìm kiếm đó. Search-UnifiedAuditLog dùng để kiểm tra hoạt động của người dùng và quản trị viên chứ không phải để định vị nội dung thư email.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-158', 'sc-200', 158, 'You use Azure Sentinel.  
  
You need to receive a near-real-time alert whenever Azure Storage account keys are enumerated.  
  
Which two actions should you take? Each correct answer is part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Create a livestream"},{"key":"B","text":"Add a data connector"},{"key":"C","text":"Create an analytics rule"},{"key":"D","text":"Create a hunting query."},{"key":"E","text":"Create a bookmark."}]'::jsonb, ARRAY['B', 'C']::text[], 'Trình kết nối dữ liệu Hoạt động Azure tiếp thu các hoạt động của Trình quản lý tài nguyên Azure ở cấp đăng ký, bao gồm các hoạt động quản lý như liệt kê các khóa tài khoản Lưu trữ. Quy tắc phân tích đánh giá hoạt động đã nhập và tạo cảnh báo khi đáp ứng tiêu chí phát hiện của hoạt động đó.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-159', 'sc-200', 159, 'You have an Azure subscription that uses Microsoft Sentinel and includes a user named User1.  
  
You must ensure that User1 can enable User and Entity Behavior Analytics (UEBA) for entity behavior in Azure AD. The solution must follow the principle of least privilege.  
  
Which roles should you assign to User1?', '[]'::jsonb, ARRAY[]::text[], 'Việc kích hoạt UEBA yêu cầu vai trò Quản trị viên bảo mật Microsoft Entra ID (hoặc các quyền tương đương) và quyền quản lý Microsoft Sentinel. Quản trị viên bảo mật là vai trò Entra được liệt kê có đặc quyền thấp nhất đủ điều kiện và Người đóng góp Microsoft Sentinel là vai trò Azure được liệt kê cho phép quản lý tài nguyên Sentinel.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-160', 'sc-200', 160, 'You have a custom analytics rule that detects threats in Azure Sentinel. You find that the analytics rule has stopped running. The rule was disabled, and its name is prefixed with **AUTO DISABLED**.  
  
What could have caused this issue?', '[{"key":"A","text":"There are connectivity issues between the data sources and Log Analytics."},{"key":"B","text":"The number of alerts exceeded 10,000 within two minutes."},{"key":"C","text":"The rule query takes too long to run and times out."},{"key":"D","text":"Permissions to one of the data sources of the rule query were modified."}]'::jsonb, ARRAY['D']::text[], 'Microsoft Sentinel tự động vô hiệu hóa quy tắc phân tích được lên lịch và đặt trước tên của nó là "TỰ ĐỘNG TẮT" sau các lỗi vĩnh viễn liên tiếp. Việc thay đổi quyền đối với nguồn dữ liệu được truy vấn quy tắc sử dụng là lỗi vĩnh viễn vì truy vấn no có thể truy cập tài nguyên đó lâu hơn mà không cần can thiệp.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-161', 'sc-200', 161, 'You have a Microsoft 365 E5 subscription that includes a Microsoft SharePoint Online site named Site1.  
  
You need to enable Microsoft Defender for Cloud Apps session control for Site1.  
  
Which policy type should you create first?', '[{"key":"A","text":"access"},{"key":"B","text":"session"},{"key":"C","text":"app governance"},{"key":"D","text":"Conditional Access"}]'::jsonb, ARRAY['D']::text[], 'Các điều khiển phiên của Ứng dụng Microsoft Defender for Cloud phụ thuộc vào chính sách Truy cập có điều kiện của Microsoft Entra được định cấu hình cho Kiểm soát ứng dụng truy cập có điều kiện. Chính sách đó định tuyến lưu lượng truy cập SharePoint Online thông qua Defender for Cloud Apps, cho phép chính sách phiên sau giám sát hoặc kiểm soát phiên.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-162', 'sc-200', 162, 'You have an Azure environment containing 50 subscriptions, including a subscription called Sub1. Sub1 has a Microsoft Sentinel workspace named Workspace1 that collects logs from the other subscriptions. Workspace1 includes a workbook named WB1.  
  
You add a parameters item named Item1 to WB1, and then add a parameter named Parameter1 to Item1.  
  
Configure Parameter1’s drop-down menu to meet these requirements:  
  
- Allow users to select one or more subscriptions to query.  
- Give users one option for querying every subscription.  
  
The solution must minimize both the time needed to populate WB1 with data and administrative effort.  
  
What should you do?', '[]'::jsonb, ARRAY[]::text[], 'Bộ chọn đăng ký là loại tham số Sổ làm việc Azure để chọn một hoặc nhiều tài nguyên đăng ký. Cài đặt nhiều lựa chọn của nó cho phép lựa chọn một số đăng ký và định cấu hình nguồn dữ liệu của nó vì Tất cả các đăng ký sẽ tự động cung cấp danh sách đăng ký đầy đủ mà không cần duy trì thủ công. Điều này tốt hơn là truy vấn hoặc nhập đăng ký theo cách thủ công cho kịch bản này.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-163', 'sc-200', 163, 'You have a Microsoft Sentinel workspace named sws1.  
  
You need to create a query that detects when a user creates an unusually large number of Azure AD user accounts.  
  
How should you complete the query?', '[]'::jsonb, ARRAY[]::text[], 'BehaviorAnalytics lưu trữ các sự kiện được tăng cường UEBA Microsoft Sentinel, bao gồm ActionType, Hoạt động chuyên sâu, Thông tin chi tiết về người dùng và SourceRecordId được chuẩn hóa. Việc lọc hành động Thêm người dùng và thông tin chi tiết về hành vi thực sự sẽ xác định hoạt động tạo tài khoản bất thường. AuditLogs cung cấp sự kiện kiểm tra Microsoft Entra ban đầu, bao gồm TargetResources và được kết hợp thông qua _ItemId với mã định danh bản ghi nguồn UEBA.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-164', 'sc-200', 164, 'You have an Azure subscription with Microsoft Defender for Cloud enabled.  
  
A virtual machine named Server1 runs Windows Server 2022 and is hosted in Amazon Web Services (AWS).  
  
You need to collect logs and remediate vulnerabilities for Server1 by using Defender for Cloud.  
  
What should you install on Server1 first?', '[{"key":"A","text":"the Microsoft Monitoring Agent"},{"key":"B","text":"the Azure Monitor agent"},{"key":"C","text":"the Azure Connected Machine agent"},{"key":"D","text":"the Azure Pipelines agent"}]'::jsonb, ARRAY['C']::text[], 'Phiên bản AWS EC2 phải cài đặt Azure Arc cho máy chủ trước khi Defender for Cloud có thể sử dụng các tiện ích mở rộng máy được kết nối với Arc như Microsoft Defender cho Endpoint và giải pháp đánh giá lỗ hổng. Tác nhân Azure Connected Machine đưa máy Windows Server 2022 lên Azure Arc; Windows Server 2022 được đại lý đó hỗ trợ.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-165', 'sc-200', 165, 'You have an on-premises network.  
  
You have a Microsoft 365 E5 subscription that uses Microsoft Defender for Identity.  
  
From the Microsoft Defender portal, you investigate an incident on a device named Device1 of a user named User1. The incident contains the following Defender for Identity alert.  
  
Suspected identity theft (pass-the-ticket) (external ID 2018)  
  
You need to contain the incident without affecting users and devices. The solution must minimize administrative effort.  
  
What should you do?', '[{"key":"A","text":"Disable User1 only."},{"key":"B","text":"Quarantine Device1 only."},{"key":"C","text":"Reset the password for all the accounts that previously signed in to Device1."},{"key":"D","text":"Disable User1 and quarantine Device1."},{"key":"E","text":"Disable User1, quarantine Device1, and reset the password for all the accounts that previously signed in to Device1."}]'::jsonb, ARRAY['B']::text[], 'Một cuộc tấn công qua vé sẽ sử dụng lại vé Kerberos đã được phát hành, do đó, việc vô hiệu hóa tài khoản của User1 hay đặt lại mật khẩu của bất kỳ tài khoản nào đều không làm mất hiệu lực một vé vẫn còn trong thời hạn sử dụng — vé bị đánh cắp vẫn tiếp tục hoạt động bất kể những thay đổi đó. Cách ly Thiết bị1 sẽ cắt điểm cuối bị xâm phạm khỏi mạng, ngay lập tức dừng việc sử dụng thêm vé bị đánh cắp từ thiết bị đó, trong khi vẫn giữ nguyên tài khoản của Người dùng1 và mọi tài khoản và thiết bị khác không bị ảnh hưởng.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-166', 'sc-200', 166, 'Your company deploys the following services:  
  
- Microsoft Defender for Identity  
- Microsoft Defender for Endpoint  
- Microsoft Defender for Office 365  
  
You need to give a security analyst the ability to use the Microsoft 365 security center. The analyst must be able to approve and reject pending actions created by Microsoft Defender for Endpoint. The solution must follow the principle of least privilege.  
  
Which two roles should you assign to the analyst? Each correct answer presents part of the solution.  
  
**NOTE:** Each correct selection is worth one point.', '[{"key":"A","text":"the Compliance Data Administrator in Azure Active Directory (Azure AD)"},{"key":"B","text":"the Active remediation actions role in Microsoft Defender for Endpoint"},{"key":"C","text":"the Security Administrator role in Azure Active Directory (Azure AD)"},{"key":"D","text":"the Security Reader role in Azure Active Directory (Azure AD)"}]'::jsonb, ARRAY['B', 'D']::text[], 'Vai trò Hành động khắc phục hiện hoạt trong Bộ bảo vệ Microsoft dành cho Điểm cuối cho phép người dùng thực hiện các hành động phản hồi, bao gồm phê duyệt hoặc loại bỏ các hành động khắc phục đang chờ xử lý. Vai trò Azure AD Security Reader cung cấp quyền truy cập vào trung tâm bảo mật mà không cần có đặc quyền quản trị rộng hơn của vai trò Quản trị viên bảo mật, đáp ứng đặc quyền tối thiểu.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-167', 'sc-200', 167, 'You have the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784205377828-yjgumg34.png)  
  
You have an Azure subscription that uses Microsoft Defender for Cloud.  
  
You need to use Defender for Cloud to protect VM1 and Server1. The solution must meet the following requirements:  
  
- Support Advanced Threat Protection and vulnerability assessment.  
- Register each SQL Server 2022 instance as a SQL virtual machine.  
- Minimize implementation and administrative effort.  
  
What should you deploy to each server?', '[]'::jsonb, ARRAY[]::text[], 'Bộ bảo vệ Microsoft dành cho máy chủ SQL trên máy tự động cung cấp Tác nhân Azure Monitor, phần mở rộng SQL IaaS và phần mở rộng Bộ bảo vệ dành cho SQL cho máy ảo Azure, máy tại chỗ và máy chủ SQL hỗ trợ Azure Arc. Các thành phần này đăng ký các phiên bản và cung cấp khả năng bảo vệ khỏi mối đe dọa và đánh giá lỗ hổng. Tác nhân Log Analytics là giải pháp thay thế cũ.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784205377828-yjgumg34.png', 'published'),
  ('sc200-168', 'sc-200', 168, 'You need to correlate data in the **SecurityEvent** Log Analytics table to satisfy the Microsoft Sentinel requirements for using UEBA.  
  
Which Log Analytics table should you use?', '[{"key":"A","text":"IdentityInfo"},{"key":"B","text":"AADRiskyUsers"},{"key":"C","text":"SentinelAudit"},{"key":"D","text":"IdentityDirectoryEvents"}]'::jsonb, ARRAY['A']::text[], 'Bảng **IdentityInfo** chứa các chi tiết nhận dạng được UEBA đồng bộ hóa, bao gồm SID tài khoản tại chỗ, siêu dữ liệu người dùng, tư cách thành viên nhóm và vai trò. Nó có thể được kết hợp với dữ liệu **SecurityEvent** bằng cách sử dụng SID và `IdentityInfo.AccountSID` của người dùng sự kiện bảo mật để làm phong phú thêm các sự kiện bảo mật cho phân tích UEBA.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-169', 'sc-200', 169, 'You need to assign Azure RBAC roles to Group1 and Group2 to meet the Microsoft Defender for Cloud and business requirements.  
  
Which role should you assign to each group?', '[]'::jsonb, ARRAY[]::text[], 'Quản trị viên bảo mật bao gồm các quyền để tạo và quản lý các nhiệm vụ Chính sách Azure cũng như các định nghĩa về bộ chính sách cần thiết để chỉ định các sáng kiến ​​tuân thủ quy định ở phạm vi đăng ký. Nó cũng cho phép cập nhật các chính sách bảo mật Microsoft Defender for Cloud. Người đóng góp đánh giá bảo mật chỉ cho phép tạo hoặc cập nhật các đánh giá bảo mật; Người đóng góp và Chủ sở hữu cấp quyền quản lý tài nguyên chung rộng hơn.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-170', 'sc-200', 170, 'You need to assign role-based access control (RBAC) roles to Group1 and Group2 to meet the Microsoft Sentinel and business requirements.  
  
Which role should you assign to each group? Each role may be used once, more than once, or not at all.', '{"statements":[{"id":"group1_1","text":"Slot 1:","correctAnswer":"A"},{"id":"group1_2","text":"Slot 2:","correctAnswer":"C"},{"id":"group2_1","text":"Slot 3:","correctAnswer":"E"}],"choices":[{"key":"A","text":"Logic App Contributor"},{"key":"B","text":"Logic App Operator"},{"key":"C","text":"Microsoft Sentinel Contributor"},{"key":"D","text":"Microsoft Sentinel Playbook Operator"},{"key":"E","text":"Microsoft Sentinel Responder"}]}'::jsonb, ARRAY['group1_1=A', 'group1_2=C', 'group2_1=E']::text[], 'Trình đóng góp ứng dụng logic cho phép Group1 tạo, chỉnh sửa và chạy Ứng dụng logic triển khai sách giải trí Microsoft Sentinel. Microsoft Sentinel Contributor cho phép Group1 tạo và chỉnh sửa tài nguyên Sentinel, bao gồm các quy tắc phân tích. Bộ phản hồi Microsoft Sentinel cung cấp cho Group2 các quyền quản lý sự cố cần thiết. Playbook Operator không đủ cho Group1 vì nó hỗ trợ chạy playbook nhưng không tạo hoặc chỉnh sửa chúng.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-171', 'sc-200', 171, 'You need to deploy the native cloud connector to Account 1 to meet the Microsoft Defender for Cloud requirements.  
  
What should you do first in Account1?', '[{"key":"A","text":"Create an AWS user for Defender for Cloud."},{"key":"B","text":"Configure AWS Security Hub."},{"key":"C","text":"Deploy the AWS Systems Manager (SSM) agent."},{"key":"D","text":"Create an Access control (IAM) role for Defender for Cloud."}]'::jsonb, ARRAY['C']::text[], 'Việc tự động cấp phép Azure Arc cho các phiên bản AWS EC2 thông qua trình kết nối gốc Microsoft Defender for Cloud yêu cầu Tác nhân quản lý hệ thống AWS (SSM). Nếu tác nhân đó vắng mặt, trình kết nối không thể tự động triển khai tác nhân Máy được kết nối Azure. Mẫu CloudFormation tích hợp sẽ tạo các thành phần xác thực AWS IAM cần thiết.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-172', 'sc-200', 172, 'You need to fulfill the Microsoft Sentinel requirements for App1.  
  
What should you configure for App1?', '[{"key":"A","text":"a trigger"},{"key":"B","text":"a connector"},{"key":"C","text":"authorization"},{"key":"D","text":"an API connection"}]'::jsonb, ARRAY['A']::text[], 'Quy tắc tự động hóa Microsoft Sentinel chạy sách hướng dẫn Ứng dụng Logic. Playbook phải sử dụng trình kích hoạt trình kết nối Microsoft Sentinel—chẳng hạn như trình kích hoạt sự cố, cảnh báo hoặc thực thể—xác định lược đồ đầu vào mà Sentinel gửi khi gọi quy trình làm việc. Việc định cấu hình trình kích hoạt đó sẽ giúp Ứng dụng Logic có sẵn để sử dụng theo các quy tắc tự động hóa.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-173', 'sc-200', 173, 'You need to ensure that hunting queries can be run to satisfy the Microsoft Sentinel requirements.  
  
Which type of workspace should you create?', '[{"key":"A","text":"Azure Synapse Analytics"},{"key":"B","text":"Azure Machine Learning"},{"key":"C","text":"Log Analytics"},{"key":"D","text":"Azure Databricks"}]'::jsonb, ARRAY['B']::text[], 'Sổ ghi chép Jupyter Microsoft Sentinel được sử dụng để tìm kiếm và điều tra nâng cao, đồng thời chạy chúng từ Microsoft Sentinel yêu cầu quyền truy cập vào không gian làm việc Azure Machine Learning. Không gian làm việc đó cung cấp môi trường thực thi sổ ghi chép cho các truy vấn tìm kiếm.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-174', 'sc-200', 174, 'You need to identify the mean time metrics required to meet the Microsoft Sentinel requirements.  
  
Which workbook should you use?', '[{"key":"A","text":"Event Analyzer"},{"key":"B","text":"Investigation Insights"},{"key":"C","text":"Security Operations Efficiency"},{"key":"D","text":"Analytics Efficiency"}]'::jsonb, ARRAY['C']::text[], 'Sổ làm việc Microsoft Sentinel **Hiệu quả hoạt động bảo mật** cung cấp các số liệu hiệu suất sự cố SOC, bao gồm thời gian trung bình để phân loại và thời gian trung bình để đóng. Các số liệu này đo lường thời gian kết thúc và phân loại sự cố cần thiết.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-175', 'sc-200', 175, 'You need to create a query to investigate DNS-related activity. The solution must meet the Microsoft Sentinel requirements.  
  
How should you complete the query?', '[]'::jsonb, ARRAY[]::text[], '`_Im_Dns` là trình phân tích cú pháp thống nhất DNS ASIM tích hợp. Tham số `starttime` của nó lọc `TimeGenerated`, do đó `starttime=ago(7d)` giới hạn kết quả trong bảy ngày qua. Bộ lọc tham số `responsecodename=''NXDOMAIN''` cho các yêu cầu DNS không giải quyết được và sử dụng tính năng lọc phía trình phân tích cú pháp để có hiệu suất tốt hơn.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-176', 'sc-200', 176, 'You need to fulfill the Microsoft Sentinel requirement for collecting Windows Security event logs.  
  
What should you do?', '[]'::jsonb, ARRAY[]::text[], 'Sự kiện bảo mật Windows thông qua trình kết nối AMA sử dụng tác nhân Azure Monitor. Truy vấn XPath trong quy tắc thu thập dữ liệu của nó sẽ lọc các sự kiện Bảo mật Windows tại nguồn để chỉ thu thập các sự kiện thay đổi thành viên nhóm cục bộ, giảm việc nhập không cần thiết. KQL truy vấn dữ liệu sau khi nó đã được thu thập.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-177', 'sc-200', 177, 'You need to minimize the effort needed to investigate false-positive alerts from Microsoft Defender for Identity.  
  
What should you review?', '[{"key":"A","text":"the status update time"},{"key":"B","text":"the resolution method of the source computer"},{"key":"C","text":"the alert status"},{"key":"D","text":"the certainty of the source computer"}]'::jsonb, ARRAY['D']::text[], 'Defender for Identity bao gồm tính chắc chắn của việc phân giải tên máy tính trong bằng chứng cảnh báo. Khi máy tính nguồn có độ phân giải chắc chắn thấp, hãy xác minh thiết bị thực tế đã sử dụng địa chỉ IP; cảnh báo tấn công DCSync đáng ngờ là dương tính giả khi hoạt động bắt nguồn từ bộ điều khiển miền. Giá trị chắc chắn này tập trung điều tra xem liệu thiết bị nguồn được báo cáo có đáng tin cậy hay không.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-178', 'sc-200', 178, 'You must meet the Microsoft Defender for Cloud Apps requirements.  
  
What actions should you take?', '[]'::jsonb, ARRAY[]::text[], 'Tính năng phát hiện điểm bất thường khi di chuyển bất thường sẽ đánh giá hoạt động trước đó của người dùng; Độ nhạy thấp làm giảm khả năng cảnh báo về những thay đổi cận biên. Việc xác định địa chỉ đầu ra VPN của tổ chức dưới dạng dải địa chỉ IP sẽ ngăn các vị trí mạng công ty đã biết gây ra kết quả dương tính giả không thể di chuyển. Việc phát hiện thông tin xác thực bị rò rỉ không liên quan đến tiếng ồn cảnh báo không thể di chuyển.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-179', 'sc-200', 179, 'You need to implement the Defender for Cloud requirements.  
  
What should you configure for Server2?', '[{"key":"A","text":"the Microsoft Antimalware extension"},{"key":"B","text":"the Azure Automanage machine configuration extension for Windows"},{"key":"C","text":"an Azure resource lock"},{"key":"D","text":"an Azure resource tag"}]'::jsonb, ARRAY['D']::text[], 'Microsoft Defender for Cloud loại trừ các máy riêng lẻ khỏi quá trình quét không cần tác nhân bằng cách sử dụng thẻ môi trường. Việc gán cho Server2 một thẻ tài nguyên Azure cũng như đặt cấu hình thẻ và giá trị đó dưới dạng loại trừ quét không cần tác nhân cho phép Bộ bảo vệ dành cho máy chủ Gói 2 vẫn được bật trong khi Server2 bị bỏ qua trong quá trình quét.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-180', 'sc-200', 180, 'You need to implement the Defender for Cloud requirements.  
  
Which subscription-level role should be assigned to Group1?', '[{"key":"A","text":"Security Assessment Contributor"},{"key":"B","text":"Contributor"},{"key":"C","text":"Security Admin"},{"key":"D","text":"Owner"}]'::jsonb, ARRAY['C']::text[], 'Vai trò Quản trị viên bảo mật có thể bật hoặc tắt các gói Microsoft Defender cũng như thêm hoặc chỉ định các sáng kiến, bao gồm cả các tiêu chuẩn tuân thủ quy định. Nó cung cấp Defender for Cloud cần thiết và các quyền quản lý chính sách mà không có quyền truy cập toàn bộ tài nguyên rộng hơn do Chủ sở hữu cấp.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-181', 'sc-200', 181, 'You need to ensure that the HuntingQuery1 configuration fulfills the Microsoft Sentinel requirements.  
  
What should you do?', '[{"key":"A","text":"Add HuntingQuery1 to a livestream."},{"key":"B","text":"Create a watchlist."},{"key":"C","text":"Create an Azure Automation rule."},{"key":"D","text":"Add HuntingQuery1 to favorites."}]'::jsonb, ARRAY['D']::text[], 'Microsoft Sentinel tự động chạy các truy vấn tìm kiếm được lưu vào mục yêu thích mỗi khi truy cập trang Săn bắn. Do đó, việc lưu HuntingQuery1 làm mục ưa thích sẽ đáp ứng yêu cầu thực thi tự động.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-182', 'sc-200', 182, 'You need to implement the ASIM query for DNS requests. The solution must satisfy the Microsoft Sentinel requirements.  
  
How should you configure the query?', '[]'::jsonb, ARRAY[]::text[], 'Trình phân tích cú pháp DNS Infoblox NIOS tích hợp dành riêng cho từng nguồn và tránh xử lý các nguồn DNS không liên quan. Cung cấp `responsecodename=''NXDOMAIN''` làm tham số lọc trình phân tích cú pháp để bộ lọc được áp dụng trước khi phân tích cú pháp; điều này cải thiện hiệu suất truy vấn ASIM so với mệnh đề `where` sau phân tích cú pháp.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-183', 'sc-200', 183, 'You need to implement the scheduled rule for generating incidents based on rulequery1.  
  
What should you configure first?', '[{"key":"A","text":"custom details"},{"key":"B","text":"entity mapping"},{"key":"C","text":"event grouping"},{"key":"D","text":"alert details"}]'::jsonb, ARRAY['B']::text[], 'Để nhóm các cảnh báo định kỳ từ cùng một người dùng Azure Cloud Shell vào một sự cố, quy tắc này cần ánh xạ thực thể Tài khoản từ đầu ra truy vấn. Nhóm cảnh báo Microsoft Sentinel có thể nhóm các cảnh báo khi các thực thể được ánh xạ được chọn khớp với nhau, do đó, việc ánh xạ thực thể phải được định cấu hình trước khi nhóm theo thực thể người dùng. Các trường `Account_0_Name` và `Account_0_UPNSuffix` của truy vấn cung cấp các giá trị tài khoản cho ánh xạ đó.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-184', 'sc-200', 184, 'You need to ensure that incident processing for incidents generated by `rulequery1` satisfies the Microsoft Sentinel requirements.  
  
What should you create first?', '[{"key":"A","text":"a playbook with an incident trigger"},{"key":"B","text":"a playbook with an alert trigger"},{"key":"C","text":"an Azure Automation rule"},{"key":"D","text":"a playbook with an entity trigger"}]'::jsonb, ARRAY['A']::text[], 'Để đóng một sự cố có điều kiện, Microsoft Sentinel sử dụng quy tắc tự động hóa để gọi một sổ tay cập nhật sự cố. Quy tắc tự động hóa dựa trên trình kích hoạt sự cố chỉ có thể chạy các sách giải trí bắt đầu bằng trình kích hoạt sự cố Microsoft Sentinel, do đó, sách giải trí đó phải tồn tại trước khi có thể được chọn trong quy tắc tự động hóa. [Create and use Microsoft Sentinel automation rules to manage response](https://learn.microsoft.com/en-us/azure/sentinel/create-manage-use-automation-rules)', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-185', 'sc-200', 185, 'You need to set up event monitoring for Server1. The solution must satisfy the Microsoft Sentinel requirements.  
  
What should you create first?', '[{"key":"A","text":"a Microsoft Sentinel automation rule"},{"key":"B","text":"an Azure Event Grid topic"},{"key":"C","text":"a Microsoft Sentinel scheduled query rule"},{"key":"D","text":"a Data Collection Rule (DCR)"}]'::jsonb, ARRAY['D']::text[], 'Sự kiện bảo mật Windows thông qua trình kết nối AMA sử dụng Quy tắc thu thập dữ liệu (DCR) để xác định những sự kiện Bảo mật Windows nào mà tác nhân Azure Monitor thu thập và liên kết quy tắc với Server1. Dữ liệu phải được thu thập thông qua DCR đó trước khi phân tích hoặc tự động hóa có thể xử lý dữ liệu đó.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-186', 'sc-200', 186, 'You need to ensure that the members of Group1 can fulfill the Microsoft Sentinel requirements.  
  
Which role should be assigned to Group1?', '[{"key":"A","text":"Microsoft Sentinel Playbook Operator"},{"key":"B","text":"Logic App Contributor"},{"key":"C","text":"Automation Operator"},{"key":"D","text":"Microsoft Sentinel Automation Contributor"}]'::jsonb, ARRAY['B']::text[], 'Sách hướng dẫn Microsoft Sentinel được triển khai dưới dạng quy trình công việc của Ứng dụng Azure Logic. Vai trò **Người đóng góp ứng dụng logic** cho phép người dùng tạo, chỉnh sửa và quản lý các ứng dụng logic, do đó cung cấp khả năng tạo và chỉnh sửa sách giải trí cần thiết. Các vai trò được liệt kê khác hỗ trợ chạy sách giải trí hoặc hành vi tự động hóa thay vì soạn thảo sách giải trí.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-187', 'sc-200', 187, 'You need to implement the Microsoft Sentinel NRT rule that monitors the designated break-glass account. The solution must satisfy the Microsoft Sentinel requirements.  
  
How should you complete the query?', '[]'::jsonb, ARRAY[]::text[], 'Danh sách theo dõi Sentinel được truy xuất bằng bí danh `_GetWatchlist`. `join` bên trong giữa `SigninLogs` và danh sách theo dõi `breakglass_account` trên `UserPrincipalName` và `SearchKey` chỉ trả về thông tin đăng nhập cho các tài khoản được liệt kê trong danh sách theo dõi đó.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-188', 'sc-200', 188, 'You need to monitor password resets while satisfying the Microsoft Sentinel requirements.  
  
What should you do?', '[]'::jsonb, ARRAY[]::text[], 'Bộ bảo vệ danh tính Microsoft giám sát lưu lượng bộ điều khiển miền Active Directory tại chỗ và có thể phát hiện cũng như báo cáo các hoạt động nhạy cảm như đặt lại mật khẩu; Bảo vệ mật khẩu Azure AD và Khóa thông minh là các biện pháp kiểm soát phòng ngừa nhằm ngăn chặn các mật khẩu yếu hoặc bị ép buộc chứ không phải các công cụ giám sát. Trong Microsoft Sentinel, Phân tích hành vi người dùng và thực thể (UEBA) dựa trên hoạt động bình thường của tài khoản và phát sinh sự bất thường khi số lần đặt lại mật khẩu của người dùng cao hơn dự kiến.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-189', 'sc-200', 189, 'You need to implement the query for Workbook1 and Webapp1. The solution must satisfy the Microsoft Sentinel requirements.  
  
How should you configure the query?', '[]'::jsonb, ARRAY[]::text[], 'Sổ làm việc Azure Monitor sử dụng nguồn dữ liệu Điểm cuối tùy chỉnh để truy xuất dữ liệu từ bất kỳ nguồn bên ngoài nào, bao gồm cả dịch vụ web trả về JSON. Điểm cuối phải hỗ trợ Chia sẻ tài nguyên nhiều nguồn gốc (CORS) nếu không yêu cầu trình duyệt do sổ làm việc thực hiện không thành công. Nguồn dữ liệu JSON dành cho nội dung JSON tĩnh và chính sách cùng nguồn gốc sẽ không cho phép yêu cầu có nguồn gốc chéo này.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-190', 'sc-200', 190, 'You have a Microsoft Sentinel workspace connected to the Microsoft Sentinel data lake.  
  
In Microsoft Visual Studio Code, you plan to run Jupyter notebooks using a GitHub Copilot agent that hunts for threats. The agent will use natural-language queries to find relevant tables and query long-term data in the data lake.  
  
You need to connect the GitHub Copilot agent to the Microsoft Sentinel Model Context Protocol (MCP) collection endpoint.  
  
Which URL should you use?', '[{"key":"A","text":"https://sentinel.microsoft.com/mcp/triage"},{"key":"B","text":"https://sentinel.microsoft.com/mcp/data-exploration"},{"key":"C","text":"https://sentinel.microsoft.com/mcp/graph"},{"key":"D","text":"https://sentinel.microsoft.com/mcp/security-copilot-agent-creation"}]'::jsonb, ARRAY['B']::text[], 'Bộ sưu tập MCP khám phá dữ liệu Microsoft Sentinel hỗ trợ khám phá ngôn ngữ tự nhiên của các bảng hồ dữ liệu có liên quan và truy xuất/truy vấn dữ liệu hồ dữ liệu Microsoft Sentinel. Điểm cuối của nó là `https://sentinel.microsoft.com/mcp/data-exploration`.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-191', 'sc-200', 191, 'You have a Microsoft Sentinel workspace connected to the Microsoft Sentinel data lake.  
  
Newly ingested data can require up to 15 minutes before it is queryable in the data lake.  
  
You must schedule a KQL job to run daily at 12:10 AM and populate a summary table for threat hunters. The solution must meet these requirements:  
  
- Each run queries a fixed 24-hour window ending 15 minutes before the job runs.  
- Prevent double-counting between daily runs.  
- Include late-arriving records in the summary.  
  
How should you complete the KQL query?', '[]'::jsonb, ARRAY[]::text[], 'Dữ liệu hồ dữ liệu Microsoft Sentinel có thể mất tới 15 phút mới có thể truy vấn được, vì vậy `endTime` phải là `now() - delay;`. Việc xác định `startTime` là `endTime - lookback;` sẽ tạo ra khoảng thời gian một ngày bị trì hoãn, cố định. Lịch trình hàng ngày tạo ra các khoảng thời gian trễ liền kề, trong khi độ trễ 15 phút đảm bảo các bản ghi chưa sẵn sàng trong thời gian chạy hiện tại sẽ đủ điều kiện cho lần chạy tiếp theo.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-192', 'sc-200', 192, 'You have a Microsoft Sentinel workspace that contains a custom workbook named Workbook1.  
  
You need to create a visual based on the SecurityEvent table. The solution must meet the following requirements:  
  
• Identify the number of security events ingested during the past week.  

• Display the count of events by day in a timechart.  
  
What should you add to Workbook1?', '[{"key":"A","text":"a query"},{"key":"B","text":"a metric"},{"key":"C","text":"a group"},{"key":"D","text":"links or tabs"}]'::jsonb, ARRAY['A']::text[], '**Truy vấn** truy xuất và tổng hợp dữ liệu từ bảng SecurityEvent. Bạn có thể viết truy vấn KQL để đếm các sự kiện trong tuần trước và nhóm theo ngày, sau đó hiển thị kết quả dưới dạng trực quan hóa biểu đồ thời gian. Số liệu là các phép tính được xác định trước, các nhóm truy vấn có tính tổ chức và các liên kết/tab cung cấp điều hướng—không có kết quả truy vấn nào trực quan hóa.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-193', 'sc-200', 193, 'You have a Microsoft 365 subscription that uses Microsoft Defender for Endpoint Plan 2 and contains 500 Windows devices.  
  
You plan to create a Microsoft Defender XDR custom deception rule.  
  
You need to ensure that the rule will be applied to only 10 specific devices.  
  
What should you do first?', '[{"key":"A","text":"Add custom lures to the rule."},{"key":"B","text":"Add the IP address of each device to the list of decoy accounts and hosts of the rule."},{"key":"C","text":"Add the devices to a group."},{"key":"D","text":"Assign a tag to the devices."}]'::jsonb, ARRAY['D']::text[], 'Để xác định phạm vi quy tắc lừa dối cho các thiết bị cụ thể, trước tiên bạn phải gán thẻ cho 10 thiết bị mục tiêu. Sau đó, cấu hình quy tắc lừa đảo cho phép bạn chọn ''Thiết bị có thẻ cụ thể'' trong phần phạm vi của nó, hạn chế quy tắc đối với các thiết bị mang thẻ đó. Việc thêm thiết bị vào nhóm hoặc sửa đổi nội dung thu hút không cho phép phạm vi cấp thiết bị cho các quy tắc lừa dối.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-194', 'sc-200', 194, 'You have a Microsoft 365 subscription that contains 500 devices onboarded to Microsoft Defender for Endpoint.  
  
You also have an Azure subscription containing a Microsoft Sentinel workspace.  
  
You need to conduct a pilot on 50 devices that will automatically remediate threats. The solution must meet these requirements:  
  
- Minimize the impact on devices excluded from the pilot.  
- Minimize administrative effort.  
  
What should you configure first?', '[{"key":"A","text":"a playbook"},{"key":"B","text":"an endpoint security policy"},{"key":"C","text":"a device group"},{"key":"D","text":"an automation rule"}]'::jsonb, ARRAY['C']::text[], 'Bộ bảo vệ Microsoft dành cho Điểm cuối đặt cấu hình điều tra và khắc phục tự động thông qua các nhóm thiết bị. Một nhóm thiết bị có thể xác định 50 thiết bị thí điểm và chỉ định mức tự động hóa **Tự động khắc phục hoàn toàn các mối đe dọa**, cách ly thiết bị thí điểm khỏi các thiết bị còn lại trong khi chỉ yêu cầu một cấu hình trong phạm vi.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-195', 'sc-200', 195, 'You have a Microsoft 365 E5 subscription that uses Microsoft Purview and includes a user named User1.  
  
User1 shares a Microsoft Power BI report file from your company’s Microsoft OneDrive folder with an external user by using Microsoft Teams.  
  
You need to identify the Power BI report file that was shared.  
  
How should you configure the search?', '[]'::jsonb, ARRAY[]::text[], 'Chia sẻ OneDrive được kiểm tra dưới dạng sự kiện chia sẻ SharePoint/OneDrive, có tên hoạt động thân thiện là "Tệp, thư mục hoặc site được chia sẻ". Vì đối tượng dùng chung được lưu trữ trong OneDrive nên hãy lọc bản ghi kiểm tra và khối lượng công việc vào OneDrive. Sự kiện kiểm tra Power BI áp dụng cho báo cáo được chia sẻ từ dịch vụ Power BI, thay vì tệp báo cáo được chia sẻ từ OneDrive.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-196', 'sc-200', 196, 'You have a Microsoft Sentinel workspace named sws1.  
  
You need to create a hunting query that identifies users who list storage keys of multiple Azure Storage accounts. The solution must exclude users who list storage keys for a single storage account.  
  
How should you complete the query?', '[]'::jsonb, ARRAY[]::text[], '`AzureActivity` ghi lại các hoạt động của Trình quản lý tài nguyên Azure, bao gồm các hoạt động danh sách khóa tài khoản lưu trữ thành công. `autocluster()` được gọi thông qua toán tử `evaluate` của KQL và tìm các mẫu phổ biến trong các thuộc tính riêng biệt. Tổng hợp cuối cùng tính toán ID tài nguyên tài khoản lưu trữ riêng biệt cho mỗi người gọi và IP người gọi.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-197', 'sc-200', 197, 'You have a Microsoft 365 subscription that uses Microsoft Defender XDR.  
  
You are investigating an attacker that is known to use the Microsoft Graph API as an attack vector. The attacker performs the tactics shown the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783739287866-q72dtxbq.png)  
  
You need to search for malicious activities in your organization.  
  
Which tactics can you analyze by using the MicrosoftGraphActivityLogs table?', '[{"key":"A","text":"Tactic2 only"},{"key":"B","text":"Tactic1 and Tactic2 only"},{"key":"C","text":"Tactic2 and Tactic3 only"},{"key":"D","text":"Tactic1, Tactic2, and Tactic3"}]'::jsonb, ARRAY['D']::text[], 'Tất cả ba chiến thuật—khảo sát chính sách Truy cập có điều kiện, trinh sát hộp thư và lời mời người dùng khách—sử dụng lệnh gọi API Microsoft Graph và do đó được ghi vào bảng MicrosoftGraphActivityLogs. Các hoạt động trinh sát và leo thang đặc quyền này sẽ bị ghi lại khi thực hiện thông qua các điểm cuối API Đồ thị (ví dụ: /me/mailboxSettings, /chats, /invitations).', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783739287866-q72dtxbq.png', 'published'),
  ('sc200-198', 'sc-200', 198, 'Solution: From Defender, you modify the search criteria of the audit search to reduce the number of returned records, and then you export the results. From Excel, you perform the Get & Transform Data operations by using the new export.  
  
Does this meet the requirement?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[], 'Giải pháp đáp ứng được yêu cầu. Tính năng Nhận & Chuyển đổi Dữ liệu của Excel đánh giá các thuộc tính JSON từ 1.000 hàng dữ liệu kiểm tra được xuất đầu tiên. Nếu các thuộc tính JSON bổ sung tồn tại trong các bản ghi ngoài hàng 1.000 thì các thuộc tính đó và các cột của chúng sẽ không được tạo trong quá trình chuyển đổi. Việc giảm tiêu chí tìm kiếm kiểm tra sẽ đảm bảo tổng số bản ghi ít hơn và ngăn ngừa thiếu sót thuộc tính, cho phép Excel chuyển đổi thành công tất cả các trường JSON có liên quan thành cột.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-199', 'sc-200', 199, 'Solution: From Excel, you apply filters to the existing columns in File1.csv to reduce the number of rows, and then you perform the Get & Transform Data operations to parse the AuditData column.  
  
Does this meet the requirement?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[], 'Lọc cột Hoạt động (cột hiện có) để giảm số lượng hàng trước khi chạy Nhận & Chuyển đổi dữ liệu chính xác là giải pháp thay thế mà các tài liệu của Microsoft dành cho những trường hợp các thuộc tính JSON riêng biệt trong AuditData xuất hiện ngoài 1.000 hàng đầu tiên; Việc giảm hàng trước bước phân tích cú pháp cho phép Power Query chọn các thuộc tính cần thiết, do đó giải pháp này đáp ứng yêu cầu.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-200', 'sc-200', 200, 'Solution: From Defender, you modify the search criteria of the audit search to increase the number of returned records, and then you export the results. From Excel, you perform the Get & Transform Data operations by using the new export.  
  
Does this meet the requirement?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], 'Giải pháp chưa đáp ứng được yêu cầu. Việc tăng số lượng bản ghi được trả về trong quá trình tìm kiếm kiểm tra sẽ làm trầm trọng thêm vấn đề cắt bớt thuộc tính JSON. Dữ liệu Nhận & Chuyển đổi của Excel chỉ đánh giá 1.000 hàng đầu tiên để suy luận lược đồ; các thuộc tính bổ sung ngoài ngưỡng đó sẽ bị bỏ qua. Cách tiếp cận đúng là giảm tiêu chí tìm kiếm để giảm thiểu tổng số bản ghi, đảm bảo tất cả các thuộc tính JSON đều được phát hiện và chuyển đổi.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-201', 'sc-200', 201, 'Solution: From Excel, you apply filters to the existing columns in File1.csv to reduce the number of JSON properties, and then you perform the Get 8t Transform Data operations to parse the AuditData column.  
  
Does this meet the requirement?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], 'Việc lọc các cột hiện có chỉ làm giảm số lượng hàng được trả về; việc khiến Power Query nhận ra hoặc phân chia các thuộc tính JSON bổ sung được tìm thấy trong cột AuditData ngoài 1.000 hàng đầu tiên không có tác dụng gì. Việc cắt bớt các thuộc tính JSON theo cách này không giải quyết được vấn đề tạo cột cơ bản, do đó giải pháp không đáp ứng được yêu cầu.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-202', 'sc-200', 202, 'You have a Microsoft Sentinel workspace.  
  
You are investigating an incident involving these entities:  
  
- A host named Host1  
- A user account named User1  
- An IP address of 175.45.176.99  
  
You need to update the threat intelligence list to include the entities.  
  
Which entities can you add from the Incident page?', '[{"key":"A","text":"175.45.176.99 only"},{"key":"B","text":"Host1 only"},{"key":"C","text":"User1 only"},{"key":"D","text":"175.45.176.99 and Host1 only"},{"key":"E","text":"Host1 and User1 only"},{"key":"F","text":"175.45.176.99, Host1, and User1"}]'::jsonb, ARRAY['A']::text[], 'Microsoft Sentinel chỉ có thể thêm tên miền, địa chỉ IP (IPv4 hoặc IPv6), URL và băm tệp làm chỉ báo thông tin về mối đe dọa từ một sự cố. Địa chỉ IP được hỗ trợ, trong khi thực thể máy chủ và tài khoản người dùng không phải là loại chỉ báo được hỗ trợ.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-203', 'sc-200', 203, 'You have a Microsoft 365 subscription containing a group named Group1. The subscription uses Microsoft Defender for Endpoint.  
  
You have 500 Windows 11 devices. The devices are managed by Microsoft Intune and belong to Group1.  
  
You implement security baselines for the devices.  
  
You find that some devices do not receive the security baselines.  
  
You need to identify the devices that failed to receive the security baselines and the baselines that were **not** received. The solution must minimize administrative effort.  
  
Which node should you use in the Microsoft Intune admin center?', '[{"key":"A","text":"Endpoint security"},{"key":"B","text":"Apps"},{"key":"C","text":"Devices"},{"key":"D","text":"Groups"}]'::jsonb, ARRAY['C']::text[], 'Nút Thiết bị cung cấp báo cáo Lỗi phân công, báo cáo này tổng hợp các nhiệm vụ không thành công theo thiết bị và chính sách. Báo cáo bao gồm các đường cơ sở bảo mật, cho phép xác định cả từng thiết bị bị ảnh hưởng và đường cơ sở bị lỗi mà không cần xem xét từng đường cơ sở riêng biệt.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-204', 'sc-200', 204, 'You have a Microsoft 365 subscription that uses Microsoft Defender XDR.  
  
You have a query that contains the following statements.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783741319516-onm2jbtw.png)  
  
You need to configure a custom detection rule that will use the query. The solution must minimize how long it takes to be notified about events that match the query.  
  
Which frequency should you select for the rule?', '[{"key":"A","text":"Every hour"},{"key":"B","text":"Continuous (NRT)"},{"key":"C","text":"Every 12 hours"},{"key":"D","text":"Every 3 hours"}]'::jsonb, ARRAY['A']::text[], 'Truy vấn KQL kết hợp hai bảng (DeviceEvents và DeviceProcessEvents) và các quy tắc phát hiện tùy chỉnh Liên tục (NRT) chỉ hỗ trợ các truy vấn tham chiếu một bảng duy nhất và một tập hợp toán tử KQL bị hạn chế, ngoại trừ kết hợp, nối và các hàm như ingestion_time(). Vì không thể sử dụng Liên tục (NRT) với truy vấn này nên khoảng thời gian thăm dò nhanh nhất được phép là hàng giờ, giúp giảm thiểu độ trễ thông báo trong số các tùy chọn hợp lệ còn lại.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783741319516-onm2jbtw.png', 'published'),
  ('sc200-205', 'sc-200', 205, 'You have an Azure subscription containing a Microsoft Sentinel workspace named WS1. WS1 has the Azure Activity connector and the Microsoft Entra ID connector configured.  
  
You need to investigate which accounts have the highest number of alerts and any related incident information for each alert. The solution must minimize administrative effort.  
  
What should you do first in WS1?', '[{"key":"A","text":"Use User and Entity Behavior Analytics (UEBA) to detect anomalies."},{"key":"B","text":"Enable User and Entity Behavior Analytics (UEBA)."},{"key":"C","text":"From Content hub, install the Microsoft Purview insider risk management solution."},{"key":"D","text":"From Content hub, install Cloud Identity Threat Protection Essentials."}]'::jsonb, ARRAY['B']::text[], 'Phân tích hành vi người dùng và thực thể (UEBA) phân tích cảnh báo và nhật ký từ các nguồn dữ liệu được kết nối để tạo hồ sơ hành vi cho các thực thể như người dùng. Trải nghiệm điều tra người dùng/thực thể của nó cung cấp bối cảnh thực thể liên quan đến cảnh báo và hỗ trợ điều tra các sự cố liên quan. Cần phải bật UEBA trong không gian làm việc trước khi có thể sử dụng các khả năng UEBA đó; trình kết nối Microsoft Entra ID và Azure Hoạt động hiện có cung cấp các nguồn dữ liệu được kết nối có liên quan. Giải pháp Cloud Identity Threat Protection Essentials cung cấp các quy tắc phân tích và truy vấn tìm kiếm, thay vì khả năng hành vi thực thể trên toàn không gian làm việc này.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-206', 'sc-200', 206, 'You are investigating an incident by using Microsoft 365 Defender.  
  
You need to create an advanced hunting query that counts failed sign-in authentications on three devices named CFOLaptop, CEOLaptop, and COOLaptop.  
  
How should you complete the query?', '{"statements":[{"id":"source","text":"Slot 1:","correctAnswer":"H"},{"id":"device_filter","text":"Slot 2:","correctAnswer":"D"},{"id":"action_filter","text":"Slot 3:","correctAnswer":"E"},{"id":"summarize","text":"Slot 4:","correctAnswer":"B"}],"choices":[{"key":"A","text":"| project LogonFailures=count()"},{"key":"B","text":"| summarize LogonFailures=count() by DeviceName, LogonType"},{"key":"C","text":"| where ActionType == FailureReason"},{"key":"D","text":"| where DeviceName in (\"CFOLaptop\", \"CEOLaptop\", \"COOLaptop\")"},{"key":"E","text":"ActionType == \"LogonFailed\""},{"key":"F","text":"ActionType == FailureReason"},{"key":"G","text":"DeviceEvents"},{"key":"H","text":"DeviceLogonEvents"}]}'::jsonb, ARRAY['source=H', 'device_filter=D', 'action_filter=E', 'summarize=B']::text[], 'DeviceLogonEvents chứa thông tin đăng nhập thiết bị và các sự kiện xác thực khác. ActionType xác định hoạt động, trong khi FailReason giải thích một sự kiện không thành công. Việc lọc hành động LogonFailed trên ba thiết bị được đặt tên và tổng hợp count() theo DeviceName và LogonType sẽ tạo ra số lượng xác thực không thành công được yêu cầu.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-207', 'sc-200', 207, 'You have a Microsoft 365 subscription with Microsoft 365 Defender enabled.  
  
You need to identify every change made to sensitivity labels over the previous seven days.  
  
What should you use?', '[{"key":"A","text":"the Incidents blade of the Microsoft 365 Defender portal"},{"key":"B","text":"the Alerts settings on the Data Loss Prevention blade of the Microsoft 365 compliance center"},{"key":"C","text":"Activity explorer in the Microsoft 365 compliance center"},{"key":"D","text":"the Explorer settings on the Email & collaboration blade of the Microsoft 365 Defender portal"}]'::jsonb, ARRAY['C']::text[], 'Trình khám phá hoạt động cung cấp chế độ xem lịch sử về hoạt động có nội dung được gắn nhãn từ nhật ký kiểm tra hợp nhất của Microsoft 365. Nó bao gồm các thay đổi về nhãn nhạy cảm như nâng cấp, hạ cấp và xóa, đồng thời hỗ trợ lọc theo phạm vi ngày; lịch sử hoạt động của nó lên tới 30 ngày.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-208', 'sc-200', 208, 'You have the following environment:  
  
Azure Sentinel -  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783729396777-0u4qzyu4.png)  
  
- A Microsoft 365 subscription  
- Microsoft Defender for Identity  
- An Azure Active Directory (Azure AD) tenant  
  
You configure Azure Sentinel to collect security logs from every Active Directory member server and domain controller.  
  
You deploy Microsoft Defender for Identity by using standalone sensors.  
  
You need to ensure that modifications to sensitive groups in Active Directory can be detected.  
  
Which two actions should you perform? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Configure the Advanced Audit Policy Configuration settings for the domain controllers."},{"key":"B","text":"Modify the permissions of the Domain Controllers organizational unit (OU)."},{"key":"C","text":"Configure auditing in the Microsoft 365 compliance center."},{"key":"D","text":"Configure Windows Event Forwarding on the domain controllers."}]'::jsonb, ARRAY['A', 'D']::text[], 'Cảm biến độc lập của Defender for Identity yêu cầu cài đặt Chính sách kiểm tra nâng cao được định cấu hình chính xác trên bộ điều khiển miền để ghi lại các sự kiện quản lý nhóm bảo mật và Active Directory bắt buộc. Chuyển tiếp sự kiện Windows được sử dụng để chuyển tiếp các sự kiện của bộ điều khiển miền tới cảm biến độc lập, cho phép nó xử lý các sự kiện cần thiết để phát hiện sửa đổi nhóm nhạy cảm.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783729396777-0u4qzyu4.png', 'published'),
  ('sc200-209', 'sc-200', 209, 'You have an Azure subscription that uses Microsoft Defender for Cloud.  
  
You have a GitHub account named Account1 that contains 10 repositories.  
  
You need to make sure that Defender for Cloud can access the repositories in Account1.  
  
What should you do first in the Microsoft Defender for Cloud portal?', '[{"key":"A","text":"Enable integrations."},{"key":"B","text":"Enable a plan."},{"key":"C","text":"Add an environment."},{"key":"D","text":"Enable security policies."}]'::jsonb, ARRAY['C']::text[], 'Để tích hợp kho lưu trữ GitHub, Defender for Cloud yêu cầu có môi trường/trình kết nối GitHub. Từ **Cài đặt môi trường**, việc chọn **Thêm môi trường** sẽ bắt đầu luồng kết nối GitHub, trong đó quyền truy cập kho lưu trữ được cấp phép và ứng dụng Defender for Cloud GitHub được cài đặt.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-210', 'sc-200', 210, 'You have a Microsoft 365 subscription using Microsoft Defender for Endpoint Plan 2 and a Windows device named Device1.  
  
You started a live response session on Device1.  
  
You must run a command that downloads a 250-MB file named File1.exe from the live response library to Device1. The solution must ensure that File1.exe downloads as a background process.  
  
How should you complete the live response command?', '[]'::jsonb, ARRAY[]::text[], '`putfile` đặt một tệp từ thư viện Phản hồi trực tiếp vào thiết bị; trên Windows, nó hỗ trợ các tệp có dung lượng lên tới 300 MB, vì vậy tệp 250 MB là hợp lệ. Toán tử `&` chạy lệnh ở chế độ nền.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-211', 'sc-200', 211, 'You have a Microsoft Sentinel workspace.  
  
You need to stop a built-in Advanced Security Information Model (ASIM) parser from being updated automatically.  
  
What are two ways to accomplish this goal? Each correct answer provides a complete solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Create a hunting query that references the built-in parser."},{"key":"B","text":"Build a custom unifying parser and include the built-in parser version."},{"key":"C","text":"Redeploy the built-in parser and specify a CallerContext parameter of Any and a SourceSpecificParser parameter of Any."},{"key":"D","text":"Redeploy the built-in parser and specify a CallerContext parameter of Built-in."},{"key":"E","text":"Create an analytics rule that includes the built-in parser."}]'::jsonb, ARRAY['B', 'C']::text[], 'Có thể ngăn cập nhật tự động bằng cách ghim phiên bản cụ thể của trình phân tích cú pháp dành riêng cho nguồn tích hợp trong trình phân tích cú pháp thống nhất tùy chỉnh hoặc bằng cách loại trừ tất cả các trình phân tích cú pháp tích hợp thông qua bản ghi loại trừ với `Any` trong cả hai trường `CallerContext` và `SourceSpecificParser`. Các tham chiếu truy vấn và quy tắc phân tích không ngăn cản việc cập nhật trình phân tích cú pháp.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-212', 'sc-200', 212, 'You have a Microsoft 365 subscription that uses Microsoft Defender for Endpoint.  
  
You need to add threat indicators for every IP address in the range `171.23.34.32-171.23.34.63`. The solution must minimize administrative effort.  
  
What should you do in the Microsoft 365 Defender portal?', '[{"key":"A","text":"Create an import file that contains the individual IP addresses in the range. Select Import and import the file."},{"key":"B","text":"Create an import file that contains the IP address of 171.23.34.32/27. Select Import and import the file."},{"key":"C","text":"Select Add indicator and set the IP address to 171.23.34.32-171.23.34.63."},{"key":"D","text":"Select Add indicator and set the IP address to 171.23.34.32/27."}]'::jsonb, ARRAY['A']::text[], 'Chỉ báo IP tùy chỉnh của Bộ bảo vệ Microsoft cho Điểm cuối chỉ chấp nhận các địa chỉ IP riêng lẻ; Dải IP và khối CIDR không được hỗ trợ. Việc nhập CSV có thể tạo 32 chỉ báo IP riêng lẻ trong một thao tác, giảm thiểu nỗ lực quản trị.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-213', 'sc-200', 213, 'You have a Microsoft Sentinel workspace that uses the Microsoft 365 Defender data connector.  
  
From Microsoft Sentinel, you investigate an incident in Microsoft 365.  
  
You need to update the incident so that it includes an alert generated by Microsoft Defender for Cloud Apps.  
  
What should you use?', '[{"key":"A","text":"the entity side panel of the Timeline card in Microsoft Sentinel"},{"key":"B","text":"the Timeline tab on the incidents page of Microsoft Sentinel"},{"key":"C","text":"the investigation graph on the incidents page of Microsoft Sentinel"},{"key":"D","text":"the Alerts page in the Microsoft 365 Defender portal"}]'::jsonb, ARRAY['D']::text[], 'Cảnh báo của Ứng dụng Microsoft Defender for Cloud xuất hiện trong hàng đợi cảnh báo và sự cố của cổng Microsoft Defender. Từ hàng đợi Cảnh báo, một cảnh báo có thể được di chuyển hoặc liên kết với một sự cố hiện có, từ đó liên kết nó với sự cố đó.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-214', 'sc-200', 214, 'HOTSPOT -  
  
You need to create a query for a workbook that meets these requirements:  
  
- List every incident by incident number.  
- Include only the latest log for each incident.  
  
How should you complete the query?', '[]'::jsonb, ARRAY[]::text[], '`summarize` nhóm các bản ghi Sự cố bảo mật theo `IncidentNumber`. `arg_max(LastModifiedTime, *)` chọn hàng có LastModifiedTime lớn nhất trong mỗi nhóm và trả về tất cả các cột của nó, để lại nhật ký gần đây nhất cho mọi sự cố.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-215', 'sc-200', 215, 'You have an Azure subscription that uses Microsoft Sentinel.  
  
You need to create a custom workbook that calculates the average time required to close security incidents. The solution must minimize administrative effort.  
  
Which built-in Microsoft Sentinel workbook template should you choose?', '[{"key":"A","text":"Security operations efficiency"},{"key":"B","text":"Incident Overview"},{"key":"C","text":"Workspace Usage Report"},{"key":"D","text":"Investigation Insights"}]'::jsonb, ARRAY['A']::text[], 'Sổ làm việc về hiệu quả hoạt động bảo mật được thiết kế để giám sát hiệu suất SOC và bao gồm chỉ số thời gian trung bình để đóng. Việc sử dụng mẫu tích hợp này sẽ cung cấp phép đo kết thúc sự cố cần thiết với nỗ lực quản trị tối thiểu.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-216', 'sc-200', 216, 'You open the Cloud App Security portal as shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783729275596-mzkdnk1x.jpg)  
  
Your environment does **not** have Microsoft Defender for Endpoint enabled.  
  
You need to remediate the risk for the Launchpad app. Which four actions should you perform in sequence?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"D"},{"id":"step2","text":"Slot 2:","correctAnswer":"A"},{"id":"step3","text":"Slot 3:","correctAnswer":"F"},{"id":"step4","text":"Slot 4:","correctAnswer":"B"}],"choices":[{"key":"A","text":"Tag the app as Unsanctioned."},{"key":"B","text":"Run the script on the source appliance."},{"key":"C","text":"Run the script in Azure Cloud Shell."},{"key":"D","text":"Select the app."},{"key":"E","text":"Tag the app as Sanctioned."},{"key":"F","text":"Generate a block script."}]}'::jsonb, ARRAY['step1=D', 'step2=A', 'step3=F', 'step4=B']::text[], 'Ứng dụng được phát hiện phải được chọn trước khi có thể được đánh dấu là Không hoạt động. Khi Bộ bảo vệ dành cho Điểm cuối không khả dụng, thẻ Không được phê duyệt sẽ không cung cấp đường dẫn chặn tự động dựa trên điểm cuối đó. Thay vào đó, Defender cho Ứng dụng đám mây có thể tạo tập lệnh khối chuyên dụng cho thiết bị bảo mật tại chỗ, sau đó thiết bị này phải nhận và chạy tập lệnh.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783729275596-mzkdnk1x.jpg', 'published'),
  ('sc200-217', 'sc-200', 217, 'You have a Microsoft Sentinel workspace that ingests Windows security events into the `SecurityEvent` table.  
  
You are building a Jupyter notebook.  
  
You need to add a cell that meets these requirements:  
  
- Run a KQL hunting query that identifies accounts with a high number of failed sign-ins from one IP address during the last day.  
- Return the `IPCustomEntity` entity column, representing the query result''s originating IP address.  
- Return the `AccountCustomEntity` entity column, representing the query result''s user account.  
  
How should you complete the Python code?', '[]'::jsonb, ARRAY[]::text[], 'Trong KQL, `extend` thêm các cột được tính toán, ánh xạ `TargetUserName` và `IPAddress` vào các cột thực thể tùy chỉnh tài khoản và IP. `summarize` tổng hợp các sự kiện đăng nhập không thành công, tạo ra `count()` cũng như thời gian sự kiện tối thiểu và tối đa được nhóm theo tài khoản và IP gốc.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-218', 'sc-200', 218, 'You have a Microsoft Sentinel workspace named `workspace1` that includes custom Kusto queries.  
  
You need to create a Python-based Jupyter notebook that produces visuals. The visuals must show the query results and be pinned to a dashboard. The solution must minimize development effort.  
  
What should you use to create the visuals?', '[{"key":"A","text":"plotly"},{"key":"B","text":"TensorFlow"},{"key":"C","text":"msticpy"},{"key":"D","text":"matplotlib"}]'::jsonb, ARRAY['C']::text[], 'MSTICPy được thiết kế cho máy tính xách tay Jupyter Microsoft Sentinel và bao gồm các khả năng tích hợp để truy vấn, phân tích, làm phong phú và trực quan hóa dữ liệu bảo mật. Công cụ trực quan dành riêng cho Sentinel của nó giúp giảm thiểu nỗ lực phát triển tùy chỉnh.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-219', 'sc-200', 219, 'You have a Microsoft Sentinel workspace with a default data-retention period of 30 days. The workspace includes two custom tables, as shown below.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784205249825-3blj3l1r.png)  
  
Each table has ingested two records per day for the last 365 days.  
  
You create KQL statements for analytic rules, as shown below.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784205251948-uf6q86sc.png)  
  
For each following statement, select **Yes** if it is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"For Query1 to return a value of 30, you must change Table plan to Analytics.","correctAnswer":"Yes"},{"id":"2","text":"For Query2 to return a value of 240, you must change Total retention period to 120 days.","correctAnswer":"No"},{"id":"3","text":"For Query3 to return 90 rows, you must change Total retention period to 45 days.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:Yes', '2:No', '3:No']::text[], 'Truy vấn quy tắc Analytics yêu cầu dữ liệu kế hoạch Analytics. Do đó, việc thay đổi Bảng1 thành Analytics cho phép Query1 đếm 15 ngày của hai bản ghi hàng ngày. Table2 đã giữ lại tổng cộng 365 ngày, nhưng truy vấn tương tác 120 ngày cần thời gian lưu giữ Analytics kéo dài đến 120 ngày; thay đổi tổng lưu giữ là không đủ. Việc tăng tổng mức lưu giữ của bảng Cơ bản không làm cho dữ liệu được lưu giữ lâu dài cũ hơn có sẵn cho truy vấn quy tắc phân tích tiêu chuẩn; lấy nó đòi hỏi một công việc tìm kiếm.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784205249825-3blj3l1r.png', 'published'),
  ('sc200-220', 'sc-200', 220, 'You need to configure Microsoft Defender for Cloud Apps to create alerts and initiate remediation actions when confidential files are shared externally.  
  
Which two actions should you take in the Microsoft 365 Defender portal? Each correct answer represents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"From Settings, select Information Protection, select Azure Information Protection, and then select Only scan files for Azure Information Protection classification labels and content inspection warnings from this tenant."},{"key":"B","text":"From Cloud apps, select Files, and then filter File Type to Document.B. From Settings, select Information Protection, select Files, and then enable file monitoring."},{"key":"D","text":"From Cloud apps, select Files, and then filter App to Office 365."},{"key":"E","text":"From Cloud apps, select Files, and then select New policy from search."},{"key":"F","text":"From Settings, select Information Protection, select Azure Information Protection, and then select Automatically scan new files for Azure Information Protection classification labels and content inspection warnings."}]'::jsonb, ARRAY['E', 'F']::text[], 'Tích hợp Bảo vệ thông tin Microsoft Purview phải quét các tệp mới để Bộ bảo vệ dành cho Ứng dụng đám mây có thể xác định nhãn Độ nhạy bí mật. Chính sách tệp được tạo từ tìm kiếm Tệp có thể sử dụng nhãn đó và điều kiện cấp truy cập bên ngoài/công khai, đồng thời có thể được định cấu hình bằng các hành động cảnh báo và quản trị có sẵn để khắc phục nguy cơ chia sẻ.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-221', 'sc-200', 221, 'You have a Microsoft Sentinel workspace.  
  
A Microsoft Sentinel incident is generated as shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1785751637211-2m9p5ool.png)', '[]'::jsonb, ARRAY[]::text[], 'Việc chọn Điều tra sẽ mở biểu đồ điều tra Microsoft Sentinel, biểu đồ này ánh xạ các thực thể được kết nối với cảnh báo. Tab Nhận xét cung cấp các nhận xét điều tra và lịch sử hoạt động của vụ việc.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1785751637211-2m9p5ool.png', 'published'),
  ('sc200-222', 'sc-200', 222, 'You are responsible for responding to Azure Defender for Key Vault alerts.  
  
While investigating an alert, you find unauthorized attempts to access a key vault from a Tor exit node. What should you configure to mitigate this threat?', '[{"key":"A","text":"Key Vault firewalls and virtual networks"},{"key":"B","text":"Azure Active Directory (Azure AD) permissions"},{"key":"C","text":"role-based access control (RBAC) for the key vault"},{"key":"D","text":"the access policy settings of the key vault"}]'::jsonb, ARRAY['A']::text[], 'Tường lửa Key Vault và các quy tắc mạng ảo hạn chế vị trí mạng nào có thể tiếp cận vault. Việc giới hạn quyền truy cập vào các mạng được phê duyệt giúp chặn các yêu cầu trái phép bắt nguồn từ các nút thoát Tor.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-223', 'sc-200', 223, 'You need to set up the Azure Sentinel integration so that the Azure Sentinel requirements are met. What should you do?', '[]'::jsonb, ARRAY[]::text[], 'Defender for Cloud Apps được kết nối với SIEM thông qua tiện ích mở rộng bảo mật. Tích hợp Microsoft Sentinel được kích hoạt thông qua trình kết nối dữ liệu; sổ làm việc là nội dung trực quan hóa và cài đặt Nhật ký không cấu hình trình kết nối dịch vụ.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-224', 'sc-200', 224, 'You have an Azure subscription that uses Microsoft Copilot for Security.  
  
You create a new user named User1 and assign User1 the following roles:  
  
- The Security Operator role in Microsoft Entra  
- The Security Copilot Contributor role  
  
You need to ensure that User1 can use the Microsoft Sentinel plug-in in Copilot for Security. The solution must follow the principle of least privilege.  
  
Which role should you assign to User1?', '[{"key":"A","text":"Microsoft Sentinel Reader"},{"key":"B","text":"Security Reader"},{"key":"C","text":"Global Administrator"},{"key":"D","text":"Microsoft Sentinel Contributor"}]'::jsonb, ARRAY['A']::text[], 'Người đóng góp Copilot bảo mật cung cấp quyền truy cập vào nền tảng Copilot, nhưng quyền truy cập vào dữ liệu Microsoft Sentinel thông qua trình cắm của nó cũng yêu cầu vai trò Azure RBAC thích hợp. Trình đọc Microsoft Sentinel cấp quyền truy cập đọc vào dữ liệu và sự cố của không gian làm việc Sentinel, đủ để sử dụng plugin mà không cần cấp quyền sửa đổi có trong Microsoft Sentinel Contributor.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-225', 'sc-200', 225, 'You have a Microsoft 365 subscription that uses Microsoft Defender for Cloud Apps, with Cloud Discovery enabled.  
  
You need to enrich the Cloud Discovery data. The solution must ensure that usernames in the Cloud Discovery traffic logs are associated with the user principal name (UPN) of the corresponding Microsoft Entra ID user accounts.  
  
What should you do first?', '[{"key":"A","text":"From Conditional Access App Control, configure User monitoring."},{"key":"B","text":"Create a Microsoft 365 app connector."},{"key":"C","text":"Enable automatic redirection to Microsoft 365 Defender."},{"key":"D","text":"Create an Azure app connector."}]'::jsonb, ARRAY['B']::text[], 'Làm giàu người dùng Cloud Discovery khớp tên người dùng nhận được trong nhật ký lưu lượng khám phá với tên người dùng Microsoft Entra ID và hiển thị người dùng theo UPN. Trình kết nối ứng dụng Microsoft 365 được kết nối là điều kiện tiên quyết để làm phong phú thêm nội dung này.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-226', 'sc-200', 226, 'You have a Microsoft 365 subscription that uses Microsoft Defender XDR.  
  
You plan to investigate suspicious activity in the subscription by using Microsoft Graph activity logs.  
  
You need to find requests that delete resources from the subscription and identify the users who initiated them.  
  
How should you complete the KQL query?', '[]'::jsonb, ARRAY[]::text[], '`matches regex` lọc requestUri theo mẫu biểu thức chính quy được cung cấp, khớp với URI `/users/` kết thúc bằng GUID. Truy vấn trích xuất GUID đó và nối nó với `IdentityInfo.AccountObjectId`; chiếu `AccountName` trả về danh tính người dùng được liên kết.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-227', 'sc-200', 227, 'You need to implement Azure Sentinel queries for Contoso and Fabrikam to satisfy the technical requirements.  
  
What should the solution include?', '[]'::jsonb, ARRAY[]::text[], 'Microsoft Sentinel được bật trên không gian làm việc Log Analytics, vì vậy Fabrikam yêu cầu ít nhất một không gian làm việc. Biểu thức KQL không gian làm việc() truy xuất dữ liệu từ không gian làm việc Log Analytics được chỉ định và là thành phần truy vấn được sử dụng khi kết hợp dữ liệu trên các không gian làm việc hoặc đối tượng thuê với quyền truy cập được yêu cầu; mở rộng và dự án chỉ chuyển đổi các cột dữ liệu đã có trong phạm vi.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-228', 'sc-200', 228, 'You have a Microsoft 365 E5 subscription that contains a device named Device1.  
  
From the Microsoft Defender portal, you find that an alert was triggered for Device1.  
  
From the Device inventory page, you isolate Device1.  
  
You need to obtain a list of the programs installed on Device1.  
  
What should you do?', '[{"key":"A","text":"Collect an investigation package and download the results from the Action center."},{"key":"B","text":"Initiate a live response session and run the analyze command."},{"key":"C","text":"Run an advanced hunting query against the DeviceProcessEvents table."},{"key":"D","text":"Run an advanced hunting query against the DeviceTvmInfoGathering table."}]'::jsonb, ARRAY['A']::text[], 'Gói điều tra được thu thập dành cho thiết bị Windows chứa tệp CSV **Chương trình đã cài đặt** liệt kê phần mềm hiện được cài đặt. Gói có sẵn để tải xuống từ Trung tâm hành động.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-229', 'sc-200', 229, 'You need to create an analytics rule that meets the Azure Sentinel requirements. What should you do?', '[]'::jsonb, ARRAY[]::text[], 'Quy tắc phân tích được lên lịch chạy truy vấn Log Analytics theo một khoảng thời gian xác định và tạo cảnh báo hoặc sự cố từ các kết quả trùng khớp. Playbook Microsoft Sentinel là quy trình làm việc của Ứng dụng Azure Logic và cần có trình kích hoạt để nhận cảnh báo hoặc sự cố Sentinel và bắt đầu tự động hóa. Cài đặt chẩn đoán và service principal có thể hỗ trợ giám sát hoặc xác thực nhưng không khởi động playbook.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-230', 'sc-200', 230, 'You have a Microsoft 365 subscription that uses Microsoft Copilot for Security.  
  
You create a promptbook called Book1.  
  
For Book1, you must create a prompt that includes an input named IncidentID.  
  
How should IncidentID be formatted?', '[{"key":"A","text":"`<IncidentID>`"},{"key":"B","text":"`##IncidentID##`"},{"key":"C","text":"`[IncidentID]`"},{"key":"D","text":"`$IncidentID$`"}]'::jsonb, ARRAY['A']::text[], 'Các tham số đầu vào của sổ nhắc Microsoft Security Copilot sử dụng một tên dễ hiểu được đặt trong dấu ngoặc nhọn và chứa khoảng trắng no, chẳng hạn như `<IncidentID>`.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-231', 'sc-200', 231, 'You have a Microsoft 365 E5 subscription.  
  
You have a PowerShell script that queries the unified audit log.  
  
You discover that, because of server-side paging, the query returns only the first page of results.  
  
You need to ensure that all results are obtained.  
  
Which property should you query in the results?', '[{"key":"A","text":"@odata.context"},{"key":"B","text":"@odata.count"},{"key":"C","text":"@odata.nextLink"},{"key":"D","text":"@odata.deltaLink"}]'::jsonb, ARRAY['C']::text[], 'Đối với phản hồi Microsoft Graph được phân trang trên máy chủ, `@odata.nextLink` chứa URL cho trang kết quả tiếp theo. Tiếp tục yêu cầu URL được trả về trong thuộc tính này cho đến khi no `@odata.nextLink` được trả về để truy xuất tập kết quả hoàn chỉnh.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-232', 'sc-200', 232, 'You have a Microsoft 365 subscription containing 500 Windows 11 devices onboarded to Microsoft Defender for Endpoint.  
  
In Microsoft Defender XDR, you must:  
  
- Populate random endpoints in the finance department with fake cached credentials.  
- Ensure that an incident is created if an attacker tries to use the fake cached credentials.  
  
The fake cached credentials must be planted only on finance-department endpoints.  
  
Which three actions should you take, in sequence? More than one ordering of the answer choices is correct; any correct ordering receives credit.', '{"statements":[{"id":"1","text":"1","correctAnswer":"E"},{"id":"2","text":"2","correctAnswer":"A"},{"id":"3","text":"3","correctAnswer":"C"}],"choices":[{"key":"A","text":"From the Microsoft Defender XDR settings, assign a device tag."},{"key":"B","text":"From the Endpoints settings, create a device group."},{"key":"C","text":"From the Endpoints settings, create an advanced lure."},{"key":"D","text":"From the Endpoints settings, create a basic lure."},{"key":"E","text":"From Advanced features of the Endpoints settings, set Deception to On."},{"key":"F","text":"From the Identities settings, configure a Honeytoken account."},{"key":"G","text":"From the Endpoints settings, create a custom detection rule."}]}'::jsonb, ARRAY['1=E', '2=A', '3=C']::text[], 'Tính năng lừa đảo XDR của Microsoft Defender phải được bật trước khi có thể triển khai mồi. Thông tin xác thực được lưu trong bộ nhớ đệm là loại mồi nhử nâng cao và phạm vi của mồi nhử có thể sử dụng thẻ thiết bị; việc chỉ định thẻ tài chính sẽ giới hạn việc trồng vào các điểm cuối đó. Việc tương tác với mồi nhử lừa dối sẽ tạo ra cảnh báo lừa dối có độ tin cậy cao có liên quan đến một sự cố, do đó, không cần phải có quy tắc phát hiện tùy chỉnh riêng biệt.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-233', 'sc-200', 233, 'You intend to create a custom Azure Sentinel query that provides a visual representation of the security alerts generated by Azure Security Center.  
  
You need to create a query that will display a bar graph. What should you include in the query?', '[{"key":"A","text":"extend"},{"key":"B","text":"bin"},{"key":"C","text":"count"},{"key":"D","text":"workspace"}]'::jsonb, ARRAY['C']::text[], 'Biểu đồ thanh cần có giá trị số cho từng danh mục cảnh báo. Tập hợp Kusto `count()` tạo ra số lượng bản ghi cảnh báo, thường là với `summarize` và `render barchart`, để cung cấp các giá trị thanh đó.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-234', 'sc-200', 234, 'You have a Microsoft Sentinel workspace with User and Entity Behavior Analytics (UEBA) enabled.  
  
You need to identify every log entry related to security-sensitive user actions performed on a server named Server1. The solution must meet these requirements:  
  
- Include only security-sensitive actions by users who are not members of the IT department.  
- Minimize false positives.  
  
How should you complete the query?', '[]'::jsonb, ARRAY[]::text[], 'IdentityInfo cung cấp các thuộc tính nhận dạng UEBA, bao gồm cả Bộ phận, cần thiết để loại trừ người dùng CNTT. Kết nối bên trong chỉ giữ các bản ghi SecurityEvent có bản ghi nhận dạng phù hợp trong khi vẫn giữ lại tất cả các mục nhập sự kiện bảo mật phù hợp; một phép nối bên trong có thể loại bỏ các hàng bên trái có các khóa nối trùng lặp.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-235', 'sc-200', 235, 'You have a custom detection rule that contains the following KQL query.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783735824818-zl9bhxf9.png)  
  
For each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"The custom detection rule can be used to automate the deletion of email messages from a user’s mailbox based on the RecipientEmailAddress column.","correctAnswer":"No"},{"id":"2","text":"The custom detection rule can be used to restrict app execution automatically based on the DeviceId column.","correctAnswer":"Yes"},{"id":"3","text":"The custom detection rule can be used to automate the deletion of a file based on the SHA256 column.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:No', '2:Yes', '3:Yes']::text[], 'Tác vụ email yêu cầu cả `NetworkMessageId` và `RecipientEmailAddress`; truy vấn không trả về `NetworkMessageId`. Hạn chế thực thi ứng dụng là một hành động của thiết bị nhắm mục tiêu kết quả truy vấn trong cột `DeviceId`. Một tệp có thể được cách ly bằng `SHA256`; việc cách ly sẽ loại bỏ nó khỏi vị trí hiện tại và giữ lại một bản sao để cách ly.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783735824818-zl9bhxf9.png', 'published'),
  ('sc200-236', 'sc-200', 236, 'HOTSPOT -  
  
You have been notified of increased malicious email received by users.  
  
You need to create an advanced hunting query in Microsoft 365 Defender to identify whether the email recipients’ accounts were compromised. The query must return the most recent 20 sign-ins performed by the recipients within one hour of receiving the known malicious email.  
  
How should you complete the query?', '[]'::jsonb, ARRAY[]::text[], 'EmailEvents chứa kết quả về phần mềm độc hại và các trường email người nhận cần thiết để xác định người nhận thư độc hại. IdentityLogonEvents cung cấp hồ sơ đăng nhập tài khoản của họ để tham gia. Vị từ thời gian giữ lại thông tin đăng nhập từ thời điểm nhận cho đến 60 phút sau. `take 20` giới hạn đầu ra khớp ở 20 bản ghi; `top` sẽ yêu cầu biểu thức `by`.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-237', 'sc-200', 237, 'You have a Microsoft 365 E5 subscription linked to a hybrid Azure AD tenant.  
  
You need to identify every change made to the Domain Admins group during the last 30 days.  
  
What should you use?', '[{"key":"A","text":"the Modifications of sensitive groups report in Microsoft Defender for Identity"},{"key":"B","text":"the identity security posture assessment in Microsoft Defender for Cloud Apps"},{"key":"C","text":"the Azure Active Directory Provisioning Analysis workbook"},{"key":"D","text":"the Overview settings of Insider risk management"}]'::jsonb, ARRAY['A']::text[], 'Bộ bảo vệ danh tính Microsoft phân loại Quản trị viên miền là nhóm nhạy cảm. Báo cáo **Sửa đổi nhóm nhạy cảm** của nó liệt kê từng sửa đổi được thực hiện đối với các nhóm nhạy cảm, cho phép xem xét các thay đổi của nhóm Quản trị viên miền trong khoảng thời gian báo cáo được yêu cầu.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-238', 'sc-200', 238, 'You have a Microsoft Sentinel workspace named workspace1 and an Azure virtual machine named VM1.  
  
An alert is received for suspicious use of PowerShell on VM1. You must investigate the incident, determine the event that triggered the alert, and determine whether these actions occurred on VM1 after the alert:  
  
- Modification of local group memberships  
- Purging of event logs  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783730283974-soxgoq4e.png)  
  
Which three actions should you carry out, in order, in the Azure portal?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"A"},{"id":"step2","text":"Slot 2:","correctAnswer":"B"},{"id":"step3","text":"Slot 3:","correctAnswer":"D"}],"choices":[{"key":"A","text":"From the details pane of the incident, select Investigate."},{"key":"B","text":"From the Investigation blade, select the entity that represents VM1."},{"key":"C","text":"From the Investigation blade, select the entity that represents powershell.exe."},{"key":"D","text":"From the Investigation blade, select Timeline."},{"key":"E","text":"From the Investigation blade, select Info."},{"key":"F","text":"From the Investigation blade, select Insights."}]}'::jsonb, ARRAY['step1=A', 'step2=B', 'step3=D']::text[], 'Điều tra mở ra trải nghiệm điều tra Microsoft Sentinel. Việc chọn VM1 sẽ đưa ra phạm vi đánh giá cho máy ảo và Dòng thời gian của nó sẽ hiển thị các cảnh báo và hoạt động thực thể được ghi nhật ký theo trình tự thời gian, cho phép xem xét cảnh báo kích hoạt và hoạt động xóa nhật ký sự kiện hoặc tư cách thành viên nhóm sau này.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783730283974-soxgoq4e.png', 'published'),
  ('sc200-239', 'sc-200', 239, 'You have a Microsoft Sentinel workspace containing a table named Table1. Table1 is configured with the Analytics plan.  
  
You must configure Table1''s retention period while maximizing the retention of data stored in the table.  
  
How should you configure the Data retention settings?', '[]'::jsonb, ARRAY[]::text[], 'Bảng kế hoạch Analytics hỗ trợ khả năng lưu giữ tương tác lên đến hai năm. Tổng thời gian lưu giữ của nó, bao gồm lưu giữ tương tác và lâu dài, có thể được đặt lên tới 12 năm; do đó những giá trị tối đa này sẽ tối đa hóa khả năng lưu giữ.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-240', 'sc-200', 240, 'You have a Microsoft Sentinel workspace.  
  
You investigate an incident that contains the following entities:  
  
- A user account named User1  
- An IP address of 192.168.10.200  
- An Azure virtual machine named VM1  
- An on-premises server named Server1  
  
You need to label an entity as an indicator of compromise (IoC) directly from the incidents page.  
  
Which entity can you label?', '[{"key":"A","text":"192.168.10.200"},{"key":"B","text":"VM1"},{"key":"C","text":"Server1"},{"key":"D","text":"User1"}]'::jsonb, ARRAY['A']::text[], 'Microsoft Sentinel hỗ trợ thêm các thực thể địa chỉ IP, bao gồm cả địa chỉ IPv4, để thu thập thông tin tình báo về mối đe dọa trực tiếp từ trang chi tiết sự cố. Không thể thêm tài khoản người dùng và thực thể máy chủ như Azure virtual machines và máy chủ tại chỗ làm chỉ báo mối đe dọa thông qua hành động đó.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-241', 'sc-200', 241, 'You manage the security posture of an Azure subscription that contains two virtual machines named vm1 and vm2. The Azure Security Center secure score is shown in the Security Center exhibit. (Click the Security Center tab.)  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783728835966-7f6jzdxl.jpg)  
  
Azure Policy assignments are configured as shown in the Policies exhibit. (Click the Policies tab.)  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783728838787-1dpgujiq.jpg)  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"Both virtual machines have inbound rules that allow access from either Any or Internet ranges.","correctAnswer":"Yes"},{"id":"2","text":"Both virtual machines have management ports exposed directly to the internet.","correctAnswer":"No"},{"id":"3","text":"If you enable just-in-time network access controls on all virtual machines, you will increase the secure score by four point.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:Yes', '2:No', '3:Yes']::text[], 'Kiểm soát "Hạn chế truy cập mạng trái phép" không lành mạnh đối với cả hai tài nguyên cho thấy quyền truy cập vào quá mức cho phép trên cả hai máy ảo. Chỉ có một VM không tốt cho các cổng quản lý an toàn, do đó, khả năng hiển thị không xuất hiện trên cả hai VM. Truy cập VM đúng lúc sẽ khóa các cổng quản lý gửi đến; việc khắc phục sự kiểm soát này sẽ kiếm được bốn điểm an toàn tiềm năng được hiển thị.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783728835966-7f6jzdxl.jpg', 'published'),
  ('sc200-242', 'sc-200', 242, 'You have an Azure subscription containing a user named User1 and a Microsoft Sentinel workspace named Workspace1.  
  
You must ensure that User1 can create workbooks and playbooks in Workspace1. The solution must meet these requirements:  
  
- Minimize the number of roles assigned to User1.  
- Follow the principle of least privilege.  
  
Which roles should be assigned to User1, and at what scope?  
  
*Each correct selection is worth one point.*', '[]'::jsonb, ARRAY[]::text[], 'Microsoft Sentinel Contributor cho phép tạo và chỉnh sửa sổ làm việc, trong khi Logic App Contributor cho phép tạo và chỉnh sửa sổ tay. Playbook Microsoft Sentinel là tài nguyên Ứng dụng Azure Logic. Gán cả hai vai trò tại nhóm tài nguyên chứa không gian làm việc Sentinel; điều này bao gồm không gian làm việc và tài nguyên sổ tay có liên quan mà không cấp quyền cho toàn bộ gói đăng ký.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-243', 'sc-200', 243, 'You create an Azure subscription named `sub1`.  
  
In `sub1`, you create a Log Analytics workspace named `workspace1`.  
  
You enable Azure Security Center and configure Security Center to use `workspace1`.  
  
You need to collect security event logs from the Azure virtual machines that report to `workspace1`.  
  
What should you do?', '[{"key":"A","text":"From Security Center, enable data collection"},{"key":"B","text":"In sub1, register a provider."},{"key":"C","text":"From Security Center, create a Workflow automation."},{"key":"D","text":"In workspace1, create a workbook."}]'::jsonb, ARRAY['A']::text[], 'Microsoft Defender for Cloud, trước đây là Trung tâm bảo mật Azure, sử dụng cài đặt thu thập dữ liệu đăng ký để thu thập dữ liệu sự kiện liên quan đến bảo mật từ các máy ảo được bảo vệ và lưu trữ dữ liệu đó trong không gian làm việc Log Analytics đã định cấu hình.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-244', 'sc-200', 244, 'You have a Microsoft Sentinel workspace that contains an Azure AD data connector.  
  
You need to associate a bookmark with an Azure AD-related incident.  
  
What should you do? Each blade may be used once, more than once, or not at all.', '{"statements":[{"id":"create_bookmark","text":"Create a bookmark by using the:","correctAnswer":"A"},{"id":"associate_bookmark","text":"Associate a bookmark with the incident by using the:","correctAnswer":"A"}],"choices":[{"key":"A","text":"Hunting blade"},{"key":"B","text":"Incident blade"},{"key":"C","text":"Logs blade"}]}'::jsonb, ARRAY['create_bookmark=A', 'associate_bookmark=A']::text[], 'Microsoft Sentinel tạo dấu trang từ các kết quả truy vấn tìm kiếm có liên quan và tab Dấu trang của trang Săn bắn cung cấp các hành động Sự cố để thêm dấu trang đã chọn vào sự cố hiện có. Do đó, lưỡi dao Săn được sử dụng cho cả hai hành động.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-245', 'sc-200', 245, 'You have a Microsoft 365 E5 subscription.  
  
You need to configure Microsoft Defender XDR automatic attack disruption to use signals generated by Microsoft Defender for Cloud Apps.  
  
Which two actions should you take for Defender for Cloud Apps in the Microsoft Defender portal? Each correct answer is part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Enable the Microsoft 365 connector."},{"key":"B","text":"Add a log collector for automatic log upload."},{"key":"C","text":"Turn on app governance."},{"key":"D","text":"Deploy Cloud Discovery user enrichment."},{"key":"E","text":"From Information protection, enable file monitoring."}]'::jsonb, ARRAY['A', 'C']::text[], 'Tự động gián đoạn cuộc tấn công yêu cầu Ứng dụng Microsoft Defender for Cloud phải được kết nối thông qua trình kết nối Microsoft 365; cấu hình trình kết nối phải bao gồm các ứng dụng Microsoft Entra ID để hỗ trợ các luồng gián đoạn và quản trị ứng dụng. Quản trị ứng dụng cung cấp khả năng hiển thị, cảnh báo và biện pháp khắc phục cho các ứng dụng hỗ trợ OAuth, bao gồm cả kịch bản ứng dụng OAuth bị xâm phạm do gián đoạn cuộc tấn công.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-246', 'sc-200', 246, 'You have a Microsoft Sentinel workspace.  
  
You need to create a KQL query that identifies successful sign-ins from multiple countries over the last three hours.  
  
How should you complete the query?', '[]'::jsonb, ARRAY[]::text[], '`imAuthentication` là lược đồ chuẩn hóa ASIM được sử dụng cho các sự kiện xác thực, bao gồm đăng nhập và kết quả của chúng. `SrcGeoCountry` là trường quốc gia của hệ thống nguồn, do đó, việc đếm các giá trị riêng biệt của nó sẽ phát hiện các lượt đăng nhập thành công từ nhiều quốc gia.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-247', 'sc-200', 247, 'You have this KQL query.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783732830412-wdg5y5zb.png)  
  
For each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"The UserName field is set as the account entity.","correctAnswer":"Yes"},{"id":"2","text":"The watchlist cannot be updated after it is created.","correctAnswer":"No"},{"id":"3","text":"The IPList variable is set as the IP address entity.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:Yes', '2:No', '3:No']::text[], '`AccountCustomEntity = UserName` ánh xạ giá trị Tên người dùng làm thực thể tùy chỉnh tài khoản. Các mục trong danh sách theo dõi có thể được chỉnh sửa và danh sách theo dõi có thể được cập nhật hàng loạt sau khi tạo. `IPList` là tập kết quả danh sách theo dõi; `IPCustomEntity` là trường được gán cho địa chỉ IP nguồn hoặc đích phù hợp.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783732830412-wdg5y5zb.png', 'published'),
  ('sc200-248', 'sc-200', 248, 'You have a suppression rule in Azure Security Center for 10 virtual machines used for testing. The virtual machines run Windows Server.  
  
You are troubleshooting an issue on the virtual machines.  
  
In Security Center, you need to view the alerts generated by the virtual machines during the past five days.  
  
What should you do?', '[{"key":"A","text":"Change the rule expiration date of the suppression rule."},{"key":"B","text":"Change the state of the suppression rule to Disabled."},{"key":"C","text":"Modify the filter for the Security alerts page."},{"key":"D","text":"View the Windows event logs on the virtual machines."}]'::jsonb, ARRAY['C']::text[], 'Cảnh báo phù hợp với quy tắc ngăn chặn hiện hoạt sẽ tự động được đánh dấu là Đã loại bỏ nhưng chúng vẫn nằm trong danh sách Cảnh báo bảo mật. Trang Cảnh báo bảo mật hỗ trợ lọc danh sách cảnh báo, bao gồm xem cảnh báo có trạng thái Bị loại bỏ, do đó, các bộ lọc của nó có thể được sử dụng để hiển thị cảnh báo của các máy ảo có liên quan trong khoảng thời gian cần thiết.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-249', 'sc-200', 249, 'You create a hunting query in Azure Sentinel.  
  
You need to receive a notification in the Azure portal immediately when the hunting query finds a match. The solution must require minimal effort.  
  
What should you use?', '[{"key":"A","text":"a playbook"},{"key":"B","text":"a notebook"},{"key":"C","text":"a livestream"},{"key":"D","text":"a bookmark"}]'::jsonb, ARRAY['C']::text[], 'Phiên phát trực tiếp Microsoft Sentinel có thể được tạo từ truy vấn tìm kiếm và cung cấp thông báo cổng Azure khi các sự kiện mới khớp với truy vấn mà không cần duy trì quy tắc cảnh báo tùy chỉnh. Microsoft sau đó đã thông báo ngừng phát trực tiếp, nhưng khả năng này đáp ứng các yêu cầu đã nêu của kịch bản này.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-250', 'sc-200', 250, 'Your company stores each project''s data in a separate Azure subscription. All subscriptions use the same Azure Active Directory (Azure AD) tenant.  
  
Each project includes multiple Azure virtual machines running Windows Server. The virtual machines'' Windows events are stored in a Log Analytics workspace in the respective subscription for each machine.  
  
You deploy Azure Sentinel to a new Azure subscription.  
  
You need to run hunting queries in Azure Sentinel that search across all Log Analytics workspaces in all subscriptions.  
  
Which two actions should you take? Each correct answer represents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Add the Security Events connector to the Azure Sentinel workspace."},{"key":"B","text":"Create a query that uses the workspace expression and the union operator."},{"key":"C","text":"Use the alias statement."},{"key":"D","text":"Create a query that uses the resource expression and the alias operator."},{"key":"E","text":"Add the Azure Sentinel solution to each workspace."}]'::jsonb, ARRAY['B', 'E']::text[], 'Microsoft Sentinel phải được thêm vào mọi không gian làm việc Log Analytics mà bạn muốn tìm kiếm, sau đó truy vấn tìm kiếm sẽ sử dụng biểu thức không gian làm việc() cùng với toán tử hợp để kết hợp các bảng sự kiện Windows từ mỗi không gian làm việc—trên các đăng ký trong cùng một đối tượng thuê Azure AD—vào một truy vấn duy nhất.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-251', 'sc-200', 251, 'You have a Microsoft Sentinel workspace named SW1.  
  
In SW1, you investigate an incident that is associated with the following entities:  
  
• Host  

• IP address  

• User account  

• Malware name  
  
Which entity can be labeled as an indicator of compromise (IoC) directly from the incident''s page?', '[{"key":"A","text":"malware name"},{"key":"B","text":"host"},{"key":"C","text":"user account"},{"key":"D","text":"IP address"}]'::jsonb, ARRAY['D']::text[], 'Chỉ các thực thể địa chỉ IP mới có thể được gắn nhãn là chỉ báo xâm phạm (IoC) trực tiếp từ trang sự cố Sentinel. Các loại IoC được hỗ trợ bao gồm tên miền, địa chỉ IP (IPv4 và IPv6), URL và băm tệp. Tên phần mềm độc hại, tên máy chủ và thực thể tài khoản người dùng không được hỗ trợ dưới dạng nhãn IoC trong khung thông tin về mối đe dọa của Sentinel.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-252', 'sc-200', 252, 'You need to configure Microsoft Defender for Cloud Apps so that it generates alerts and initiates remediation actions when confidential files are shared externally.  
  
Which two actions should you take in the Microsoft 365 Defender portal? Each correct answer represents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"From Settings, select Cloud App, select Microsoft Information Protection, and then select Only scan files for Microsoft Information Protection sensitivity labels and content inspection warnings from this tenant."},{"key":"B","text":"From Cloud apps, select Files, and then filter File Type to Document."},{"key":"C","text":"From Settings, select Cloud App, select Microsoft Information Protection, select Files, and then enable file monitoring."},{"key":"D","text":"From Cloud apps, select Files, and then filter App to Office 365."},{"key":"E","text":"From Cloud apps, select Files, and then select New policy from search."},{"key":"F","text":"From Settings, select Cloud App, select Microsoft Information Protection, and then select Automatically scan new files for Microsoft Information Protection sensitivity labels and content inspection warnings."}]'::jsonb, ARRAY['E', 'F']::text[], 'Bộ bảo vệ dành cho Ứng dụng đám mây sử dụng chính sách tệp để phát hiện các tệp có nhãn Độ nhạy bí mật và cấp truy cập chia sẻ bên ngoài, tạo cảnh báo và áp dụng các hành động quản trị được hỗ trợ. Tự động quét các tệp mới để tìm nhãn nhạy cảm của Microsoft Information Protection giúp các nhãn đó có sẵn để đánh giá chính sách. Microsoft ghi lại quy trình làm việc này bằng cách cho phép tự động quét nhãn nhạy cảm và tạo chính sách tệp với nhãn Bí mật và các bộ lọc chia sẻ bên ngoài.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-253', 'sc-200', 253, 'You have the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783729560181-q2k5op2h.png)  
  
You need to prevent duplicate events from occurring in SW1.  
  
For each action, choose the appropriate resource. A resource may be used once, more than once, or not at all.', '{"statements":[{"id":"syslog_facilities","text":"From the Syslog configuration, remove the facilities that send CEF messages.","correctAnswer":"C"},{"id":"disable_sync","text":"From the Log Analytics agent, disable Syslog synchronization.","correctAnswer":"C"}],"choices":[{"key":"A","text":"SW1"},{"key":"B","text":"CEF1"},{"key":"C","text":"Server1"},{"key":"D","text":"Server2"}]}'::jsonb, ARRAY['syslog_facilities=C', 'disable_sync=C']::text[], 'Theo bảng tài nguyên, Server1 là máy Linux gửi nhật ký có định dạng CEF tới bộ chuyển tiếp nhật ký CEF1, bộ chuyển tiếp nhật ký này cũng chuyển tiếp lưu lượng Syslog đơn giản của Server2 sang SW1. Hướng dẫn của Microsoft về việc sử dụng một trình chuyển tiếp duy nhất cho cả Syslog và CEF đơn giản nêu rõ rằng có thể tránh trùng lặp bằng cách thực hiện cả hai thay đổi trên chính máy nguồn gửi CEF chứ không phải trên trình chuyển tiếp: chỉnh sửa cấu hình Syslog của Server1 để xóa các phương tiện được sử dụng để gửi tin nhắn CEF và vô hiệu hóa đồng bộ hóa Syslog của tác nhân Log Analytics trên Server1 để thay đổi đó không bị ghi đè.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783729560181-q2k5op2h.png', 'published'),
  ('sc200-254', 'sc-200', 254, 'You have a Microsoft 365 E5 subscription that includes Microsoft 365 Defender.  
  
You need to review newly discovered attack techniques from Microsoft and identify vulnerable resources in the subscription. The solution must minimize administrative effort.  
  
Which blade should you use in the Microsoft 365 Defender portal?', '[{"key":"A","text":"Advanced hunting"},{"key":"B","text":"Threat analytics"},{"key":"C","text":"Incidents & alerts"},{"key":"D","text":"Learning hub"}]'::jsonb, ARRAY['B']::text[], 'Phân tích mối đe dọa cung cấp thông tin tình báo do Microsoft nghiên cứu về các kỹ thuật tấn công mới và phổ biến, đồng thời liên hệ thông tin đó với dữ liệu phơi nhiễm của tổ chức. Các báo cáo của nó cho thấy các tài sản bị ảnh hưởng và các thiết bị dễ bị tấn công, cho phép xem xét các kỹ thuật mới nổi và các tài nguyên bị ảnh hưởng mà không cần thực hiện công việc quản trị là tạo các truy vấn tìm kiếm nâng cao.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-255', 'sc-200', 255, 'You have recently deployed Azure Sentinel.  
  
You find that the default Fusion rule generates no alerts, although you confirm that the rule is enabled.  
  
You need to make sure that the Fusion rule can generate alerts.  
  
What should you do?', '[{"key":"A","text":"Disable, and then enable the rule."},{"key":"B","text":"Add data connectors"},{"key":"C","text":"Create a new machine learning analytics rule."},{"key":"D","text":"Add a hunting bookmark."}]'::jsonb, ARRAY['B']::text[], 'Microsoft Sentinel Fusion liên kết các cảnh báo và hoạt động từ các nguồn dữ liệu được kết nối để phát hiện các cuộc tấn công nhiều tầng. Quy tắc kết hợp được bật vẫn yêu cầu tín hiệu nguồn từ các trình kết nối dữ liệu đã định cấu hình; việc thêm trình kết nối sẽ cung cấp dữ liệu cần thiết để phát hiện Fusion.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-256', 'sc-200', 256, 'You have a Microsoft Sentinel workspace.  
  
You need to configure a report visual for a custom workbook. The solution must meet these requirements:  
  
- Include the count and usage trend of `AppDisplayName`.  
- Ensure that the `TrendList` column can be used in a sparkline visual.  
  
How should you complete the KQL query?', '[]'::jsonb, ARRAY[]::text[], '`join` hợp nhất kết quả đếm tổng hợp với kết quả chuỗi thời gian trên mỗi ứng dụng bằng `AppDisplayName`. `make-series` tạo `TrendList` dưới dạng một mảng đếm động trong các ngăn thời gian 4 giờ mà sổ làm việc Azure Monitor có thể hiển thị dưới dạng biểu đồ thu nhỏ.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-257', 'sc-200', 257, 'You have a Microsoft 365 subscription named contoso.com that contains a Windows 11 device named Device1. Device1 is onboarded to Microsoft Defender for Endpoint.  
  
You perform the following actions:  
  
- From Defender for Endpoint, create the device groups shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783744521969-cky62vxn.png)  
  
- Onboard an Android device named Device2 to Defender for Endpoint.  
  
To which device groups will the devices be added?', '[]'::jsonb, ARRAY[]::text[], 'Bộ bảo vệ Microsoft dành cho Điểm cuối đánh giá tư cách thành viên của nhóm thiết bị theo thứ hạng và chỉ định thiết bị cho nhóm đầu tiên áp dụng quy tắc so khớp. Thiết bị1 khớp với Nhóm 2 và 3, vì vậy Nhóm2 hạng 2 sẽ thắng. Thiết bị2 khớp với Nhóm 1 và 2, vì vậy Nhóm 1 hạng 1 sẽ thắng.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783744521969-cky62vxn.png', 'published'),
  ('sc200-258', 'sc-200', 258, 'You have an Azure subscription that contains a Microsoft Sentinel workspace named Workspace1.  
  
From Content Hub, you deploy the Microsoft Entra solution for Microsoft Sentinel and configure a connector.  
  
You need to analyze actions performed by users that have administrative privileges to the subscription.  
  
Which workbook should you use?', '[{"key":"A","text":"Azure Activity"},{"key":"B","text":"Microsoft Entra Audit logs"},{"key":"C","text":"Microsoft Entra Sign-ins logs"},{"key":"D","text":"Identity & Access"}]'::jsonb, ARRAY['A']::text[], 'Các hành động được thực hiện bởi người dùng giữ vai trò quản trị ở phạm vi đăng ký, chẳng hạn như Chủ sở hữu hoặc Người đóng góp, được ghi lại trong nhật ký hoạt động của Trình quản lý tài nguyên Azure thay vì trong nhật ký thư mục Entra. Sổ làm việc Hoạt động Azure được xây dựng riêng để hiển thị và tương quan các hoạt động ở cấp độ đăng ký này, khiến nó trở thành lựa chọn phù hợp để kiểm tra quản trị viên đăng ký.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-259', 'sc-200', 259, 'You have a Microsoft 365 subscription that uses Microsoft Defender for Endpoint Plan 2 and contains a macOS device named Device1.  
  
You need to investigate a Defender for Endpoint agent alert on Device1. The solution must meet the following requirements:  
  
• Identify all the active network connections on Device1.  

• Identify all the running processes on Device1.  

• Retrieve the login history of Device1.  

• Minimize administrative effort.  
  
What should you do first from the Microsoft Defender portal?', '[{"key":"A","text":"From Devices, click Collect investigation package for Device1."},{"key":"B","text":"From Advanced features in Endpoints, enable Live Response unsigned script execution."},{"key":"C","text":"From Devices, initiate a live response session on Device1."},{"key":"D","text":"From Advanced features in Endpoints, disable Authenticated telemetry."}]'::jsonb, ARRAY['A']::text[], 'Việc thu thập gói điều tra từ trang thiết bị sẽ tập hợp, trong một hành động duy nhất, các quy trình đang chạy, kết nối mạng đang hoạt động, lịch sử đăng nhập/người dùng đã đăng nhập và các tạo phẩm pháp lý khác cần thiết cho cuộc điều tra. Phiên phản hồi trực tiếp có thể truy xuất thông tin tương tự nhưng chỉ thông qua các lệnh tương tác thủ công, đòi hỏi nhiều nỗ lực quản trị hơn so với việc thu thập gói tự động.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-260', 'sc-200', 260, 'You have a Microsoft Sentinel workspace called Workspace1.  
  
You configure Workspace1 to collect DNS events and deploy the Advanced Security Information Model (ASIM) unifying parser for the DNS schema.  
  
You need to query the ASIM DNS schema to list all DNS events from the past 24 hours that have a response code of ‘NXDOMAIN’ and are aggregated by source IP address in 15-minute intervals. The solution must maximize query performance.  
  
How should you complete the query?', '[]'::jsonb, ARRAY[]::text[], '`_Im_Dns` là trình phân tích cú pháp hợp nhất ASIM cho các sự kiện DNS được chuẩn hóa. Các tham số lọc `starttime` và `responsecodename` của nó hạn chế đầu vào của trình phân tích cú pháp trước khi kết quả được trả về, hiệu suất cao hơn so với việc áp dụng các bộ lọc `where` tương đương sau trình phân tích cú pháp. `SrcIpAddr` là trường IP nguồn được chuẩn hóa và `bin(TimeGenerated,15m)` tạo khoảng thời gian tổng hợp 15 phút.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-261', 'sc-200', 261, 'You have a Microsoft 365 E5 subscription.  
  
Automated investigation and response (AIR) is enabled in Microsoft Defender for Office 365 and devices use full automation in Microsoft Defender for Endpoint.  
  
You have an incident involving a user that received malware-infected email messages on a managed device.  
  
Which action requires manual remediation of the incident?', '[{"key":"A","text":"soft deleting the email message"},{"key":"B","text":"hard deleting the email message"},{"key":"C","text":"isolating the device"},{"key":"D","text":"containing the device"}]'::jsonb, ARRAY['C']::text[], 'Với AIR hoàn toàn tự động, Bộ bảo vệ dành cho Office 365 sẽ tự động xóa mềm hoặc xóa cứng email độc hại và tính năng điều tra tự động của Bộ bảo vệ cho Điểm cuối có thể cách ly các tệp, hủy quy trình và xóa các tác vụ đã lên lịch trên thiết bị được quản lý mà không cần sự can thiệp của con người. Tuy nhiên, việc cách ly thiết bị được cố tình loại trừ khỏi quá trình khắc phục tự động và vẫn là hành động phản hồi thủ công mà nhà phân tích phải kích hoạt từ trang thiết bị.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-262', 'sc-200', 262, 'You have a Microsoft Sentinel workspace named Workspace1 and 200 custom Advanced Security Information Model (ASIM) parsers that are based on the DNS schema.  
  
You need to make the 200 parsers available in Workspace1 while minimizing administrative effort.  
  
What should you do first?', '[{"key":"A","text":"Copy the parsers to the Azure Monitor Logs page."},{"key":"B","text":"Create a JSON file based on the DNS template."},{"key":"C","text":"Create an XML file based on the DNS template."},{"key":"D","text":"Create a YAML file based on the DNS template."}]'::jsonb, ARRAY['D']::text[], 'Đối với một số lượng lớn trình phân tích cú pháp ASIM, hãy sử dụng các mẫu ARM của trình phân tích cú pháp thay vì tạo thủ công từng chức năng Nhật ký Azure Monitor. Quy trình triển khai bắt đầu bằng cách tạo tệp YAML từ mẫu cho loại lược đồ và trình phân tích cú pháp có liên quan; YAML được chuyển đổi thành mẫu ARM và sau đó được triển khai.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-263', 'sc-200', 263, 'You have a Microsoft Sentinel workspace that contains the following tables.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783744856703-m43lbprw.png)  
  
You need to investigate the log data by using a search.  
  
Which tables can you search?', '[{"key":"A","text":"Table3 only"},{"key":"B","text":"Table1 and Table3 only"},{"key":"C","text":"Table3 and Table4 only"},{"key":"D","text":"Table1, Table3, and Table4 only"},{"key":"E","text":"Table1, Table2, Table3, and Table4"}]'::jsonb, ARRAY['E']::text[], 'Công việc tìm kiếm Azure Monitor có thể truy xuất dữ liệu từ cả lưu giữ phân tích và lưu giữ (lưu trữ) dài hạn. Công việc tìm kiếm hỗ trợ các gói bảng Analytics và Cơ bản, vì vậy tất cả bốn bảng đều có thể tìm kiếm được.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783744856703-m43lbprw.png', 'published'),
  ('sc200-264', 'sc-200', 264, 'You deploy a Linux virtual machine in a new Azure subscription.  
  
You enable Azure Defender and onboard the virtual machine to Azure Defender.  
  
You need to confirm that an attack on the virtual machine generates an alert in Azure Defender.  
  
Which two Bash commands should you run on the virtual machine? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"cp /bin/echo ./asc_alerttest_662jfi039n"},{"key":"B","text":"./alerttest testing eicar pipe"},{"key":"C","text":"cp /bin/echo ./alerttest"},{"key":"D","text":"./asc_alerttest_662jfi039n testing eicar pipe"}]'::jsonb, ARRAY['A', 'D']::text[], 'Mô phỏng cảnh báo Linux sử dụng một bản sao lành tính của `/bin/echo` được đổi tên thành `asc_alerttest_662jfi039n`, sau đó chạy tệp thực thi được đổi tên đó với `testing eicar pipe`. Tên và đối số bắt buộc sẽ tạo ra sự kiện phát hiện thử nghiệm được báo cáo dưới dạng cảnh báo Azure Defender.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-265', 'sc-200', 265, 'You have a Microsoft 365 E5 subscription that uses Microsoft Defender XDR.  
  
You enable automatic attack disruption.  
  
During a recent ransomware incident, Defender for Endpoint responded automatically to the incident.  
  
You need to review Defender for Endpoint’s automatic responses to the incident.  
  
What should you use in the Microsoft Defender portal?', '[{"key":"A","text":"Advanced hunting"},{"key":"B","text":"Incidents"},{"key":"C","text":"Action center"},{"key":"D","text":"Threat analytics"}]'::jsonb, ARRAY['C']::text[], 'Trung tâm hành động hợp nhất của cổng thông tin Microsoft Defender liệt kê các hành động khắc phục và phản hồi được thực hiện tự động hoặc thủ công. Bạn có thể xem xét các hành động gián đoạn cuộc tấn công tự động, bao gồm ngăn chặn hoặc khắc phục Bộ bảo vệ điểm cuối trong các sự cố về phần mềm tống tiền tại đó.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-266', 'sc-200', 266, 'Which rule setting should be configured to satisfy the Azure Sentinel requirements?', '[{"key":"A","text":"From Set rule logic, turn off suppression."},{"key":"B","text":"From Analytics rule details, configure the tactics."},{"key":"C","text":"From Set rule logic, map the entities."},{"key":"D","text":"From Analytics rule details, configure the severity."}]'::jsonb, ARRAY['C']::text[], 'Ánh xạ thực thể được định cấu hình trong **Đặt logic quy tắc** và ánh xạ các trường được truy vấn quy tắc phân tích trả về tới các thực thể được công nhận Microsoft Sentinel. Điều này làm phong phú thêm các cảnh báo và sự cố với các thực thể cần điều tra và ứng phó. [Create scheduled analytics rules in Microsoft Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/create-analytics-rules)', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-267', 'sc-200', 267, 'You need to visualize Azure Sentinel data and enrich it by using third-party data sources to identify indicators of compromise (IoCs).  
  
What should you use?', '[{"key":"A","text":"notebooks in Azure Sentinel"},{"key":"B","text":"Microsoft Cloud App Security"},{"key":"C","text":"Azure Monitor"},{"key":"D","text":"hunting queries in Azure Sentinel"}]'::jsonb, ARRAY['A']::text[], 'Sổ ghi chép Microsoft Sentinel cung cấp môi trường Jupyter tương tác để phân tích và trực quan hóa, còn MSTICPy cung cấp các công cụ an ninh mạng để truy xuất, phân tích, làm phong phú và trực quan hóa dữ liệu. Máy tính xách tay cũng có thể sử dụng các gói Python của bên thứ ba và các nguồn dữ liệu bên ngoài để làm phong phú thêm các dấu hiệu về sự xâm phạm.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-268', 'sc-200', 268, 'You have a Microsoft 365 subscription that uses Microsoft Defender XDR. All client computers run Windows 11 and are onboarded to Microsoft Defender for Endpoint.  
  
You have an Azure subscription containing a Microsoft Sentinel workspace.  
  
You need to ensure that an investigation package is collected whenever malware is detected on a Windows 11 computer. The solution must minimize administrative effort.  
  
What should you configure?', '[{"key":"A","text":"an automation rule"},{"key":"B","text":"an automated alert response in Defender for Endpoint"},{"key":"C","text":"an endpoint security policy"},{"key":"D","text":"a custom detection rule"}]'::jsonb, ARRAY['B']::text[], 'Tính năng Điều tra và Phản hồi Tự động (AIR) của Bộ bảo vệ Microsoft dành cho Điểm cuối có thể được cấu hình để tự động thu thập các gói điều tra khi phát hiện thấy phần mềm độc hại, giảm thiểu nỗ lực quản trị so với các quy tắc tự động hóa của Sentinel hoặc thu thập thủ công.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-269', 'sc-200', 269, 'Your company uses Azure Security Center and Azure Defender.  
  
The company’s security operations team reports that it does **not** receive email notifications for security alerts. What should you configure in Security Center to enable those email notifications?', '[{"key":"A","text":"Security solutions"},{"key":"B","text":"Security policy"},{"key":"C","text":"Pricing & settings"},{"key":"D","text":"Security alerts"},{"key":"E","text":"Azure Defender"}]'::jsonb, ARRAY['B']::text[], 'Chính sách bảo mật của Trung tâm Bảo mật chứa cấu hình thông báo email ở cấp đăng ký, bao gồm cài đặt thông báo cảnh báo và địa chỉ email người nhận. Microsoft Defender for Cloud tiếp tục cung cấp các cài đặt này dưới dạng cấu hình liên hệ bảo mật/thông báo email đăng ký.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-270', 'sc-200', 270, 'Your company deploys Azure Sentinel and plans to delegate its administration to various groups.  
  
You must delegate these tasks:  
  
- Create and run playbooks  
- Create workbooks and analytic rules  
  
The solution must follow the principle of least privilege. Which role should be assigned to each task?  
  
Roles may be used once, more than once, or not at all.', '{"statements":[{"id":"playbooks","text":"Create and run playbooks:","correctAnswer":"D"},{"id":"workbooks_analytics","text":"Create workbooks and analytic rules:","correctAnswer":"A"}],"choices":[{"key":"A","text":"Azure Sentinel Contributor"},{"key":"B","text":"Azure Sentinel Responder"},{"key":"C","text":"Azure Sentinel Reader"},{"key":"D","text":"Logic App Contributor"}]}'::jsonb, ARRAY['playbooks=D', 'workbooks_analytics=A']::text[], 'Sách hướng dẫn Microsoft Sentinel là Ứng dụng Azure Logic, vì vậy Người đóng góp ứng dụng Logic là vai trò được liệt kê có ít đặc quyền nhất có thể tạo và chạy chúng. Azure Sentinel Contributor có thể tạo và quản lý các quy tắc phân tích cũng như sổ làm việc, trong khi Azure Sentinel Replyer tập trung vào quản lý sự cố và Azure Sentinel Reader ở chế độ chỉ đọc.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-271', 'sc-200', 271, 'You have a Microsoft Sentinel workspace that contains a custom workbook.  
  
You need to query for a security-event summary that meets these requirements:  
  
- Identify the number of security events ingested during the past week.  
- Show the event count by day in a chart.  
  
How should you complete the query?', '[]'::jsonb, ARRAY[]::text[], 'Hàm bin() nhóm các giá trị ngày giờ thành các khoảng có kích thước cố định. Việc áp dụng nó cho TimeGenerated sẽ tạo ra số lượng sự kiện trả về summary() cho các nhóm thời gian và hiển thị biểu đồ thời gian cho các số lượng được nhóm đó theo thời gian.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-272', 'sc-200', 272, 'You have an Azure subscription with Azure Defender enabled for every supported resource type.  
  
You create an Azure logic app named LA1. You plan to use LA1 to automatically remediate security risks identified in Azure Security Center.  
  
You need to test LA1 in Security Center. What should you do?', '[]'::jsonb, ARRAY[]::text[], 'Đề xuất của Trung tâm bảo mật Azure xác định rủi ro bảo mật và có thể kích hoạt ứng dụng logic thông qua trình kích hoạt đề xuất của Trung tâm bảo mật Azure. Việc kiểm tra quy trình công việc này được bắt đầu từ trải nghiệm Đề xuất; cảnh báo bảo mật dành cho quy trình xử lý sự cố/phản hồi dựa trên cảnh báo thay vì đề xuất khắc phục.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-273', 'sc-200', 273, 'You have a Microsoft 365 subscription that uses Microsoft Purview.  
  
Your company has a project named Project1.  
  
You need to identify all the email messages that have the word Project1 in the subject line. The solution must search only the mailboxes of users that worked on Project1.  
  
What should you do?', '[{"key":"A","text":"Perform a user data search."},{"key":"B","text":"Create a records management disposition."},{"key":"C","text":"Perform an audit search."},{"key":"D","text":"Perform a content search."}]'::jsonb, ARRAY['D']::text[], 'Tìm kiếm nội dung trong Microsoft Purview eDiscovery cho phép tìm kiếm email, cuộc trò chuyện nhóm và tài liệu với phạm vi linh hoạt đến các hộp thư cụ thể. Bạn có thể truy vấn các email có ''Project1'' trong dòng chủ đề và hạn chế tìm kiếm trong hộp thư của chỉ các thành viên nhóm Project1. Tìm kiếm dữ liệu người dùng không phải là tính năng Purview tiêu chuẩn; tìm kiếm kiểm tra theo dõi hoạt động của người dùng thay vì nội dung email; quản lý hồ sơ xử lý các chính sách lưu giữ.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-274', 'sc-200', 274, 'You need an Azure Resource Manager template that creates a workflow automation to trigger automatic remediation when Azure Security Center receives specific security alerts.  
  
How should you complete the portion of the template that provisions the required Azure resources?', '[]'::jsonb, ARRAY[]::text[], '`Microsoft.Security/automations` tạo ra tính năng tự động hóa bảo mật Defender for Cloud. Hành động `LogicApp` của nó phải tham chiếu quy trình làm việc của Ứng dụng Logic và trình kích hoạt thủ công của nó, sử dụng các loại tài nguyên `Microsoft.Logic/workflows` và `Microsoft.Logic/workflows/triggers`.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-275', 'sc-200', 275, 'Your on-premises network includes a Hyper-V cluster. The cluster contains the virtual machines shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783742191631-ntjvcefu.png)  
  
You have a Microsoft Sentinel workspace named SW1.  
  
You have a data collection rule (DCR) with these configurations:  
  
- Name: DCR1  
- Destination: SW1  
- Platform type: All  
- Data collection endpoint: None  
- Data source: Windows event logs, Linux syslog  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"Server1 can be added to DCR1 as a resource and all the Windows event logs can be gathered.","correctAnswer":"No"},{"id":"2","text":"Server2 can be added to DCR1 as a resource and specific Windows event log events can be gathered.","correctAnswer":"Yes"},{"id":"3","text":"Server3 can be added to DCR1 as a resource and all the Linux syslog data can be gathered.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:No', '2:Yes', '3:No']::text[], 'Máy ảo tại chỗ trước tiên phải được tác nhân Azure Connected Machine kích hoạt Azure Arc trước khi có thể quản lý nó dưới dạng tài nguyên DCR. Do đó, không thể thêm Server1 và Server3 dù đã có AMA. Server2 được hỗ trợ Arc; việc thêm nó vào DCR thông qua cổng sẽ cài đặt AMA nếu cần, cho phép thu thập các sự kiện nhật ký sự kiện Windows đã định cấu hình của DCR.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783742191631-ntjvcefu.png', 'published'),
  ('sc200-276', 'sc-200', 276, 'You need to configure DC1 to satisfy the business requirements.  
  
Which three actions should you take, in order?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"B"},{"id":"step2","text":"Slot 2:","correctAnswer":"A"},{"id":"step3","text":"Slot 3:","correctAnswer":"D"}],"choices":[{"key":"A","text":"Provide domain administrator credentials to the litware.com Active Directory domain."},{"key":"B","text":"Create an instance of Microsoft Defender for Identity."},{"key":"C","text":"Provide global administrator credentials to the litware.com Azure AD tenant."},{"key":"D","text":"Install the sensor on DC1."},{"key":"E","text":"Install the standalone sensor on DC1."}]}'::jsonb, ARRAY['step1=B', 'step2=A', 'step3=D']::text[], 'Việc bảo vệ bộ điều khiển miền bằng Microsoft Defender for Identity bắt đầu bằng việc tạo phiên bản Defender for Identity. Sau đó, bạn cung cấp thông tin xác thực của quản trị viên miền (tài khoản dịch vụ thư mục) để phiên bản có thể kết nối và truy vấn miền Active Directory litware.com và cuối cùng bạn cài đặt cảm biến trực tiếp trên DC1; cảm biến độc lập chỉ được sử dụng khi cảm biến không thể được cài đặt trên chính bộ điều khiển miền.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-277', 'sc-200', 277, 'You have a Microsoft Sentinel workspace named Workspace1 that ingests 1 TB/day of firewall events into the Microsoft Sentinel data lake tier. Workspace1 contains a workbook named Workbook1 that refreshes each morning at 06:00 AM.  
  
Events can arrive up to 10 minutes late.  
  
Analysts start reviewing Workbook1 at 06:30 AM and require the refresh to be complete by that time.  
  
Configure a summary rule schedule that creates a complete daily summary without omitting late-arriving events. The solution must minimize summary-rule execution costs.', '[]'::jsonb, ARRAY[]::text[], 'Thùng 1.440 phút chạy một lần mỗi ngày, do đó, nó tạo ra tổng hợp hàng ngày với ít lần thực thi nhất. Độ trễ là khoảng thời gian chờ đợi cho độ trễ nhập; 15 phút vượt quá thời gian đến muộn tối đa 10 phút. Độ trễ bằng 0 có thể bỏ qua các sự kiện trễ, trong khi độ trễ 120 phút là không cần thiết và làm chậm tính khả dụng.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-278', 'sc-200', 278, 'You must assign an RBAC role to admin1 to satisfy the Azure Sentinel and business requirements.  
  
Which role should be assigned?', '[{"key":"A","text":"Automation Operator"},{"key":"B","text":"Automation Runbook Operator"},{"key":"C","text":"Azure Sentinel Contributor"},{"key":"D","text":"Azure Sentinel Responder"}]'::jsonb, ARRAY['C']::text[], 'Microsoft Sentinel Contributor bao gồm các quyền của Bộ phản hồi Microsoft Sentinel, đồng thời cho phép cài đặt hoặc cập nhật các giải pháp cũng như tạo hoặc chỉnh sửa tài nguyên Microsoft Sentinel. Đây là vai trò tích hợp thích hợp khi quản trị viên phải quản lý cấu hình và nội dung của Sentinel bên cạnh các sự cố.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-279', 'sc-200', 279, 'You have an Azure subscription that uses Microsoft Defender for Cloud and includes a storage account named storage1.  
  
You receive an alert indicating an unusually high volume of delete operations on the blobs in storage1.  
  
You need to identify which blobs were deleted.  
  
What should you review?', '[{"key":"A","text":"the activity logs of storage1"},{"key":"B","text":"the Azure Storage Analytics logs"},{"key":"C","text":"the alert details"},{"key":"D","text":"the related entities of the alert"}]'::jsonb, ARRAY['B']::text[], 'Nhật ký Azure Storage Analytics ghi lại các yêu cầu đọc, ghi và xóa dịch vụ blob chi tiết, bao gồm các hoạt động `DeleteBlob`. Những bản ghi này có thể xác định các đốm màu riêng lẻ đã bị xóa.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-280', 'sc-200', 280, 'You have a Microsoft 365 E5 subscription that uses Microsoft Copilot for Security.  
  
You start a Copilot for Security session and enter five prompts that each provide responses.  
  
You need to create a promptbook that will use the prompts but will NOT contain the responses. The solution must minimize administrative effort.  
  
What should you do?', '[{"key":"A","text":"Select each prompt, and then select Create promptbook."},{"key":"B","text":"Create a new promptbook and include each prompt."},{"key":"C","text":"Enter a new prompt that has the following input: Create a promptbook from my session prompts."},{"key":"D","text":"Share the session, and then select Create promptbook."}]'::jsonb, ARRAY['A']::text[], 'Bên trong phiên Copilot for Security đang hoạt động, chọn các mục nhập lời nhắc riêng lẻ, sau đó chọn Chỉ tạo các gói sổ nhắc đã chọn vào sổ nhắc có thể sử dụng lại mà không chuyển các phản hồi đã tạo. Điều này sử dụng quy trình làm việc một bước tích hợp sẵn và yêu cầu no nhập lại văn bản lời nhắc, khiến nó trở thành đường dẫn tài liệu tốn ít công sức nhất để xây dựng sổ nhắc từ phiên hiện có.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-281', 'sc-200', 281, 'You have a Microsoft 365 E5 subscription that includes the users shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783742193388-0tl6khnf.png)  
  
You configure Microsoft Entra Internet Access.  
  
Which users can manage Microsoft Entra Internet Access?', '[{"key":"A","text":"User1 only"},{"key":"B","text":"User2 only"},{"key":"C","text":"User3 only"},{"key":"D","text":"User1 and User2 only"},{"key":"E","text":"User1, User2 and User3"}]'::jsonb, ARRAY['D']::text[], 'Quản trị viên toàn cầu có thể quản lý các dịch vụ Microsoft Entra và vai trò Quản trị viên truy cập an toàn toàn cầu cho phép rõ ràng việc tạo và quản lý tất cả các khía cạnh của Microsoft Entra Internet Access. Vai trò Quản trị viên vai trò đặc quyền được giới hạn trong việc quản lý các bài tập vai trò Microsoft Entra, Quản lý danh tính đặc quyền và các đơn vị hành chính; nó không cấp quyền quản lý Microsoft Entra Internet Access.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783742193388-0tl6khnf.png', 'published'),
  ('sc200-282', 'sc-200', 282, 'You have an Azure subscription that uses Microsoft Defender for Cloud.  
  
You need to use an Azure Resource Manager (ARM) template to create a workflow automation that triggers a logic app when Microsoft Defender for Cloud receives specific alerts.  
  
How should you complete the template?', '[]'::jsonb, ARRAY[]::text[], 'Tự động hóa quy trình làm việc Microsoft Defender for Cloud được triển khai dưới dạng tài nguyên Microsoft.Security/automations. Luồng công việc của Ứng dụng Logic có loại tài nguyên Microsoft.Logic/workflows, do đó ID tài nguyên ARM của nó phải sử dụng Microsoft.Logic.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-283', 'sc-200', 283, 'You have an Azure subscription that includes a user named User1.  
  
User1 has been assigned an Azure Active Directory Premium Plan 2 license.  
  
You need to determine whether User1''s identity was compromised during the previous 90 days.  
  
What should you use?', '[{"key":"A","text":"the risk detections report"},{"key":"B","text":"the risky users report"},{"key":"C","text":"Identity Secure Score recommendations"},{"key":"D","text":"the risky sign-ins report"}]'::jsonb, ARRAY['B']::text[], 'Báo cáo người dùng rủi ro cung cấp thông tin về rủi ro danh tính ở cấp độ người dùng và lịch sử rủi ro, cho phép quản trị viên xác định xem tài khoản của người dùng có được xác định là bị xâm phạm hay gặp rủi ro trong khoảng thời gian liên quan hay không. Microsoft Entra ID P2 cung cấp quyền truy cập đầy đủ vào dữ liệu của người dùng có rủi ro.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-284', 'sc-200', 284, 'You have an Azure DevOps organization containing an Azure Repos repository named Repo1 that is onboarded to Microsoft Defender for DevOps.  
  
You create infrastructure-as-code (IaC) files and store them in Repo1. The IaC files are formatted as Bicep files and Helm charts.  
  
You need to configure Defender for DevOps to identify misconfigurations in the IaC files.  
  
Which scanning tool should you use for each file type?', '[]'::jsonb, ARRAY[]::text[], 'Trình phân tích Mẫu đánh giá các mẫu Trình quản lý tài nguyên Azure và tệp Bicept để tìm các vấn đề về cấu hình. Terrascan phân tích các cấu hình IaC, bao gồm biểu đồ Helm, để tìm các cấu hình sai về bảo mật. CredScan phát hiện thông tin xác thực và bí mật bị lộ nên không phù hợp với yêu cầu này.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-285', 'sc-200', 285, 'You have 200 on-premises Linux servers and a Microsoft Sentinel workspace named Workspace1.  
  
You plan to collect Common Event Format (CEF) Syslog events from the servers and ingest them into Workspace1 by using the Azure Monitor Log Ingestion API.  
  
You need to configure a data collection rule (DCR) for the events by using an API request.  
  
How should you complete the API request?', '[]'::jsonb, ARRAY[]::text[], 'Các sự kiện bảo mật CEF được chuẩn hóa vào bảng CommonSecurityLog, do đó DCR sử dụng `Microsoft-CommonSecurityLog`. Trong nguồn dữ liệu Syslog, `facilityNames` là thuộc tính mảng cho các cơ sở như `cron` và `daemon`; `logLevels` cung cấp bộ lọc mức độ nghiêm trọng.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-286', 'sc-200', 286, 'You have a Microsoft 365 subscription using Microsoft Defender for Endpoint Plan 2 that includes a Windows device named Device1. You start a live response session on Device1 and run an executable named File1.exe in the background.  
  
You need to:  
  
- Identify File1.exe’s command ID.  
- Interact with File1.exe.  
  
Which live response command should you use for each action?', '[]'::jsonb, ARRAY[]::text[], '`jobs` liệt kê các công việc nền đang hoạt động và ID lệnh của chúng. `fg` sử dụng ID lệnh từ `jobs` để đặt công việc nền đó ở nền trước, cho phép tương tác với nó.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-287', 'sc-200', 287, 'An Azure subscription uses Microsoft Defender for Cloud and includes 100 virtual machines running Windows Server.  
  
You need to configure Defender for Cloud to collect event data from the virtual machines. The solution must minimize administrative overhead and costs.  
  
Which two actions should you take? Each correct answer is part of the solution.  
  
**NOTE:** Each correct selection is worth one point.', '[{"key":"A","text":"Configure auto-provisioning by setting the security event storage to Common."},{"key":"B","text":"From the Microsoft Endpoint Manager admin center, enable automatic enrollment."},{"key":"C","text":"From the Azure portal, create an Azure Event Grid subscription."},{"key":"D","text":"Configure auto-provisioning by setting the security event storage to All Events."},{"key":"E","text":"From Defender for Cloud in the Azure portal, enable Microsoft Defender for Servers."}]'::jsonb, ARRAY['A', 'E']::text[], 'Bộ bảo vệ Microsoft dành cho Máy chủ kích hoạt gói bảo vệ máy chủ của Bộ bảo vệ dành cho đám mây. Tính năng tự động cấp phép triển khai thành phần giám sát bắt buộc trên các tài nguyên máy chủ trên quy mô lớn. Việc thu thập nhóm sự kiện bảo mật chung của Windows giúp giảm việc nhập dữ liệu so với việc thu thập Tất cả sự kiện, giảm chi phí đồng thời tránh phải nỗ lực cấu hình trên mỗi VM.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-288', 'sc-200', 288, 'You have an Azure subscription with Microsoft Defender for Cloud enabled.  
  
You have a virtual machine named Server1 that runs Windows Server 2022 and is hosted in Amazon Web Services (AWS).  
  
You need to collect logs and remediate vulnerabilities for Server1 by using Defender for Cloud.  
  
What should you install on Server1 first?', '[{"key":"A","text":"the Microsoft Monitoring Agent"},{"key":"B","text":"the Azure Monitor agent"},{"key":"C","text":"the Azure Arc agent"},{"key":"D","text":"the Azure Pipelines agent"}]'::jsonb, ARRAY['C']::text[], 'Máy ảo AWS phải được cài đặt dưới dạng máy chủ hỗ trợ Azure Arc trước khi Defender for Cloud có thể quản lý nó và cung cấp các chức năng của Defender for Servers. Cài đặt tác nhân Azure Arc kết nối máy với Azure; các phần mở rộng giám sát và đánh giá lỗ hổng có thể được triển khai sau đó. Tác nhân giám sát của Microsoft đã ngừng hoạt động.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-289', 'sc-200', 289, 'You have a Microsoft 365 subscription containing a user named User1 and two Windows devices named Device1 and Device2. Device1 and Device2 are onboarded to Microsoft Defender for Endpoint.  
  
The following events occur:  
  
- User1 signs in to Device1.  
- Automatic attack disruption in Microsoft Defender XDR responds to an attack on Device1 and contains User1.  
- User1 attempts to connect to Device2.  
  
Which protocols will Device2 block when User1 attempts to connect to it?', '[{"key":"A","text":"RDP only"},{"key":"B","text":"RPC only"},{"key":"C","text":"SMB only"},{"key":"D","text":"RDP and RPC only"},{"key":"E","text":"SMB and RPC only"},{"key":"F","text":"RDP, RPC, and SMB"}]'::jsonb, ARRAY['F']::text[], 'Tính năng ngăn chặn người dùng trong Bộ bảo vệ Microsoft dành cho Điểm cuối áp dụng chính sách ngăn chặn cho tất cả các thiết bị tích hợp. Nó chặn quyền truy cập dựa trên xác thực của người dùng, quyền truy cập hệ thống tệp và đường dẫn liên lạc mạng để hạn chế chuyển động ngang; các sự kiện ngăn chặn được ghi lại bao gồm các phiên Remote Desktop bị chặn, quyền truy cập tài nguyên RPC và quyền truy cập phiên hoặc tệp SMB. Do đó, Device2 chặn RDP, RPC và SMB cho User1.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-290', 'sc-200', 290, 'You have a Microsoft Sentinel workspace that contains the following incident:  
  
Brute force attack against Azure Portal analytics rule has been triggered.  
  
You need to identify the geolocation information associated with the incident.  
  
What should you do?', '[{"key":"A","text":"From Overview, review the Potential malicious events map."},{"key":"B","text":"From Incidents, review the details of the IPCustomEntity entity associated with the incident."},{"key":"C","text":"From Incidents, review the details of the AccountCustomEntity entity associated with the incident."},{"key":"D","text":"From Investigation, review insights on the incident entity."}]'::jsonb, ARRAY['B']::text[], 'Các thực thể địa chỉ IP trong sự cố Sentinel bao gồm dữ liệu vị trí địa lý. Việc xem xét chi tiết **IPCustomEntity** liên quan đến sự cố sẽ cung cấp thông tin vị trí địa lý như quốc gia và khu vực cho các địa chỉ IP tấn công. Đây là con đường trực tiếp để có được bối cảnh địa lý cho việc điều tra sự cố.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-291', 'sc-200', 291, 'HOTSPOT -  
  
You use Azure Sentinel to monitor unusual Azure activity. You create custom analytics rules to detect threats, as shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1785695719502-vbf3ffpf.jpg)  
  
You do not configure any incident settings as part of the rule definition. Use the drop-down menus to choose the answer that completes each statement based on the information in the graphic.', '[]'::jsonb, ARRAY[]::text[], 'Truy vấn quy tắc kết thúc bằng `make-series dcount(ResourceId) … by Caller`, do đó, nó trả về một hàng cho mỗi người gọi và ngưỡng cảnh báo là "số kết quả truy vấn lớn hơn 2". Một người dùng triển khai ba máy ảo vẫn là một người gọi duy nhất — một kết quả — nằm dưới ngưỡng, do đó cảnh báo no được tạo ra. Ba người dùng khác nhau triển khai một máy ảo, mỗi người tạo ra ba kết quả vượt quá ngưỡng; vì nhóm sự kiện được đặt thành "Nhóm tất cả các sự kiện thành một cảnh báo duy nhất", đó là một cảnh báo.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1785695719502-vbf3ffpf.jpg', 'published'),
  ('sc200-292', 'sc-200', 292, 'You have a Microsoft 365 E5 subscription.  
  
You have the following KQL query.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783742350977-x6dobtq5.png)  
  
You need to use the query to create a Microsoft Defender XDR custom detection rule that can isolate an onboarded device.  
  
How should you change the query?', '[{"key":"A","text":"Add the AccountUpn and Timestamp columns to the project operator."},{"key":"B","text":"Add a distinct operator."},{"key":"C","text":"Add a summarize operator."},{"key":"D","text":"Add the DeviceId and Timestamp columns to the project operator."}]'::jsonb, ARRAY['D']::text[], 'Microsoft Defender XDR áp dụng các hành động của thiết bị, bao gồm cách ly thiết bị, cho các thiết bị được xác định trong kết quả truy vấn theo cột `DeviceId`. Phát hiện tùy chỉnh cũng yêu cầu `Timestamp` thiết lập thời gian sự kiện cảnh báo; `ReportId` đã được truy vấn này trả về. Việc chiếu `DeviceId` và `Timestamp` giúp truy vấn phù hợp để phát hiện có thể cách ly thiết bị.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783742350977-x6dobtq5.png', 'published'),
  ('sc200-293', 'sc-200', 293, 'You have a Microsoft 365 subscription.  
  
You have the devices shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783744866238-3cjm6oa0.png)  
  
All devices are onboarded to Microsoft Defender for Endpoint.  
  
You are investigating a possible malware exploit on the devices.  
  
You need to review each device''s system log. The solution must minimize disruption to the devices.  
  
What should you do first for each device in the Microsoft Defender portal?', '[{"key":"A","text":"Isolate the device."},{"key":"B","text":"Collect an investigation package."},{"key":"C","text":"Initiate an automated investigation."},{"key":"D","text":"Initiate a live response session."}]'::jsonb, ARRAY['B']::text[], 'Thu thập hồ sơ điều tra là hành động ít gây rối nhất; nó gói các nhật ký hệ thống, dữ liệu đăng ký và chẩn đoán vào một tệp ZIP để xem xét ngoại tuyến mà không cần cách ly thiết bị hoặc yêu cầu giám sát tương tác.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783744866238-3cjm6oa0.png', 'published'),
  ('sc200-294', 'sc-200', 294, 'You have an on-premises Windows 11 Pro device named Device1 that is onboarded to Microsoft Defender for Endpoint.  
  
You have a Microsoft 365 subscription.  
  
You need to determine the processes running on Device1 and the network connections those processes have open. The solution must minimize administrative effort.  
  
Which four actions should you take in the Microsoft Defender portal, in sequence?', '{"statements":[{"id":"slot1","text":"Slot 1:","correctAnswer":"C"},{"id":"slot2","text":"Slot 2:","correctAnswer":"B"},{"id":"slot3","text":"Slot 3:","correctAnswer":"E"},{"id":"slot4","text":"Slot 4:","correctAnswer":"D"}],"choices":[{"key":"A","text":"Select View Map."},{"key":"B","text":"Collect an investigation package."},{"key":"C","text":"Navigate to the device page for Device1."},{"key":"D","text":"Extract the contents of the ZIP file."},{"key":"E","text":"From the Action center, invoke an action."},{"key":"F","text":"Run the netstat utility."},{"key":"G","text":"Initiate a live response session."}]}'::jsonb, ARRAY['slot1=C', 'slot2=B', 'slot3=E', 'slot4=D']::text[], 'Gói điều tra Windows chứa một CSV liệt kê các quy trình hiện đang chạy và ActiveNetConnections.txt, chứa các kết nối TCP/IP hiện tại để xác định kết nối đáng ngờ được tạo bởi một quy trình. Nhận gói từ trang thiết bị; khi bộ sưu tập hoàn tất, hãy sử dụng Trung tâm hành động để tải xuống, sau đó giải nén ZIP để xem lại. Điều này tránh việc quản trị tương tác bổ sung cần thiết để bắt đầu phản hồi trực tiếp và chạy netstat theo cách thủ công.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-295', 'sc-200', 295, 'You have a Microsoft 365 subscription that uses Microsoft Defender XDR and contains a Windows device named Device1.  
  
The timeline of Device1 includes three files named File1.ps1, File2.exe, and File3.dll.  
  
You need to submit files for deep analysis in Microsoft Defender XDR.  
  
Which files can you submit?', '[{"key":"A","text":"File1.ps1 only"},{"key":"B","text":"File2.exe only"},{"key":"C","text":"File3.dll only"},{"key":"D","text":"File2.exe and File3.dll only"},{"key":"E","text":"File1.ps1 and File2.exe only"},{"key":"F","text":"File1.ps1, File2.exe, and File3.dll"}]'::jsonb, ARRAY['D']::text[], 'Phân tích chuyên sâu trong Microsoft Defender XDR chỉ hỗ trợ các tệp thực thi di động (PE)—cụ thể là các tệp.exe và.dll. Tập lệnh PowerShell (.ps1) và các loại tệp khác không được hỗ trợ để phân tích sâu vì tệp PE là mục tiêu chính để phân tích mối đe dọa thực thi. File2.exe và File3.dll có thể được gửi nhưng File1.ps1 thì không.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-296', 'sc-200', 296, 'You have a Microsoft Sentinel workspace that ingests endpoint process events into a Log Analytics workspace.  
  
You need a hunting query that identifies suspicious, rarely seen processes on Windows devices. The solution must:  
  
- Return the 20 least common process names observed in the last 24 hours.  
- Exclude a list of approved administrative tools.  
  
How should you complete the KQL query?', '[]'::jsonb, ARRAY[]::text[], '`Timestamp >= ago(24h)` giữ lại các sự kiện có dấu thời gian nằm trong vòng 24 giờ trước đó. `!in` loại trừ tên tệp công cụ quản trị đã được phê duyệt. Thứ tự tăng dần của `DeviceCount` làm cho `top 20` trả về 20 tên quy trình ít phổ biến nhất.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-297', 'sc-200', 297, 'You have a Microsoft 365 E5 subscription that uses Microsoft Defender XDR.  
  
Your network has an on-premises Active Directory Domain Services (AD DS) domain that synchronizes with a Microsoft Entra tenant.  
  
You need to identify the 100 most recent sign-in attempts recorded on devices and AD DS domain controllers.  
  
How should you complete the KQL query?', '[]'::jsonb, ARRAY[]::text[], '`DeviceLogonEvents` ghi lại hoạt động đăng nhập trên các điểm cuối và `IdentityLogonEvents` ghi lại hoạt động xác thực từ bộ điều khiển miền Active Directory tại chỗ thông qua Defender for Identity. `union` nối thêm hai bộ kết quả để tất cả các sự kiện đăng nhập đã chọn có thể được chiếu và sắp xếp cùng nhau; một phép nối sẽ yêu cầu các bản ghi khớp giữa các bảng.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-298', 'sc-200', 298, 'You have an Azure subscription that uses Microsoft Sentinel.  
  
You identify a new threat by using a hunting query.  
  
You need to ensure that Microsoft Sentinel detects the threat automatically. The solution must minimize administrative effort.  
  
What should you do?', '[{"key":"A","text":"Create an analytics rule."},{"key":"B","text":"Add the query to a workbook."},{"key":"C","text":"Create a watchlist."},{"key":"D","text":"Create a playbook."}]'::jsonb, ARRAY['A']::text[], 'Quy tắc phân tích Microsoft Sentinel tự động chạy logic phát hiện dựa trên truy vấn và tạo cảnh báo khi đáp ứng các điều kiện đã định cấu hình. Truy vấn tìm kiếm có thể được sử dụng để tạo quy tắc phân tích, giúp phát hiện được phát hiện tự động lặp lại. Sổ làm việc dùng để trực quan hóa, danh sách theo dõi cung cấp dữ liệu tham khảo và sổ tay giải trí tự động phản hồi các cảnh báo thay vì thực hiện phát hiện.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-299', 'sc-200', 299, 'You have resources in Azure and Google Cloud. You need to ingest Google Cloud Platform (GCP) data into Azure Defender.  
  
In which sequence should you perform the actions?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"C"},{"id":"step2","text":"Slot 2:","correctAnswer":"A"},{"id":"step3","text":"Slot 3:","correctAnswer":"E"},{"id":"step4","text":"Slot 4:","correctAnswer":"D"},{"id":"step5","text":"Slot 5:","correctAnswer":"B"}],"choices":[{"key":"A","text":"Enable Security Health Analytics."},{"key":"B","text":"From Azure Security Center, add cloud connectors."},{"key":"C","text":"Configure the GCP Security Command Center."},{"key":"D","text":"Create a dedicated service account and a private key."},{"key":"E","text":"Enable the GCP Security Command Center API."}]}'::jsonb, ARRAY['step1=C', 'step2=A', 'step3=E', 'step4=D', 'step5=B']::text[], 'Trung tâm chỉ huy bảo mật và Phân tích tình trạng bảo mật phải được định cấu hình để tạo ra các phát hiện bảo mật GCP. API Trung tâm chỉ huy bảo mật tiết lộ những phát hiện đó và tài khoản dịch vụ chuyên dụng/khóa riêng cung cấp thông tin xác thực cho Trung tâm bảo mật Azure. Trình kết nối đám mây Azure chỉ được thêm sau khi các điều kiện tiên quyết phía GCP đã sẵn sàng.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-300', 'sc-200', 300, 'Your network has an on-premises Active Directory Domain Services (AD DS) domain that synchronizes with an Azure AD tenant.  
  
You have a Microsoft Sentinel workspace called Sentinel1.  
  
You need to turn on User and Entity Behavior Analytics (UEBA) for Sentinel1 and collect security events from the AD DS domain.  
  
Which three actions should you take, in sequence?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"B"},{"id":"step2","text":"Slot 2:","correctAnswer":"E"},{"id":"step3","text":"Slot 3:","correctAnswer":"F"}],"choices":[{"key":"A","text":"For Sentinel1, configure the Windows Forwarded Events connector."},{"key":"B","text":"To the AD DS domain, deploy Microsoft Defender for Identity."},{"key":"C","text":"For the AD DS domain, configure Windows Event Forwarding."},{"key":"D","text":"From Sentinel1, collect the AD DS security events by using the Legacy Agent connector."},{"key":"E","text":"For Sentinel1, configure the Microsoft Defender for Identity connector."},{"key":"F","text":"For Sentinel1, enable UEBA."}]}'::jsonb, ARRAY['step1=B', 'step2=E', 'step3=F']::text[], 'Microsoft Sentinel có thể đồng bộ hóa các thực thể người dùng AD tại chỗ thông qua Bộ bảo vệ danh tính của Microsoft. Điều này yêu cầu phải cài đặt Defender for Identity và cài đặt cảm biến của nó trên bộ điều khiển miền AD DS. Định cấu hình trình kết nối Defender for Identity trong Sentinel để Sentinel có thể sử dụng dữ liệu đó, sau đó kích hoạt UEBA để xây dựng hồ sơ hành vi của thực thể và phân tích nguồn dữ liệu được kết nối. Chuyển tiếp sự kiện Windows và tác nhân cũ là các phương pháp nhập sự kiện riêng biệt và không cần thiết cho quá trình tích hợp này.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-301', 'sc-200', 301, 'You have a Microsoft 365 subscription that uses Microsoft Defender XDR and includes a user named User1.  
  
You must ensure that User1 can identify endpoint vulnerabilities on devices impacted by a security incident, without requiring User1 to know KQL.  
  
Which three actions should User1 take in the Microsoft Defender portal, in sequence?', '{"statements":[{"id":"slot1","text":"Slot 1:","correctAnswer":"D"},{"id":"slot2","text":"Slot 2:","correctAnswer":"A"},{"id":"slot3","text":"Slot 3:","correctAnswer":"E"}],"choices":[{"key":"A","text":"Select Query in builder."},{"key":"B","text":"Specify a workbook."},{"key":"C","text":"Select Query in editor."},{"key":"D","text":"Select Advanced hunting."},{"key":"E","text":"Specify a data domain and a filter."},{"key":"F","text":"Select to Investigations."}]}'::jsonb, ARRAY['slot1=D', 'slot2=A', 'slot3=E']::text[], 'Chế độ hướng dẫn săn tìm nâng cao được thiết kế cho các nhà phân tích không biết KQL. Từ Tìm kiếm nâng cao, việc chọn Truy vấn trong trình tạo sẽ mở ra chế độ hướng dẫn, trong đó nhà phân tích chọn miền dữ liệu điểm cuối và lọc dữ liệu để tìm các thiết bị dễ bị tấn công có liên quan.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-302', 'sc-200', 302, 'You have 1,000 on-premises Windows 11 Pro devices onboarded to Microsoft Defender for Endpoint.  
  
You have a Microsoft 365 subscription that uses Microsoft Defender XDR.  
  
You discover that an attacker performed the following actions on a device:  
  
- Modified the file system path of a registry-based antivirus exclusion  
- Downloaded a malicious file to that file system path  
  
You start a live response session on the device.  
  
You need to reverse the registry modification.  
  
Which command should you run?', '[{"key":"A","text":"remediate"},{"key":"B","text":"registry"},{"key":"C","text":"scan"},{"key":"D","text":"analyze"}]'::jsonb, ARRAY['A']::text[], 'Trong Microsoft Defender dành cho Phản hồi trực tiếp điểm cuối, lệnh `remediate` sẽ loại bỏ mục đăng ký bằng cách xóa mục đó. Việc xóa tùy chọn loại trừ chống vi-rút do kẻ tấn công sửa đổi sẽ đảo ngược thay đổi sổ đăng ký có hại và cho phép bảo vệ lại đường dẫn bị loại trừ.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-303', 'sc-200', 303, 'You have an Azure subscription.  
  
You have a Microsoft Sentinel workbook containing these text parameters:  
  
- `text1`  
- `grouptime1`  
  
You need to show the count of security alerts. The count must be filtered by the `text1` parameter and grouped by the `grouptime1` parameter.  
  
How should you complete the KOL query?', '[]'::jsonb, ARRAY[]::text[], 'Các tham số của Sổ làm việc Azure được mở rộng bằng cú pháp dấu ngoặc nhọn. Một tham số văn bản duy nhất mở rộng mà không có dấu ngoặc kép, do đó, việc so sánh chuỗi yêu cầu `"{text1}"`. Kích thước `bin()` phải là biểu thức khoảng thời gian, do đó `{grouptime1}` được chèn trực tiếp chứ không phải dưới dạng chuỗi.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-304', 'sc-200', 304, 'You have a Microsoft 365 subscription that uses Microsoft Defender XDR and includes a Windows device named Device1.  
  
You use a live response session to investigate a suspicious process named Prod on Device1.  
  
You need to:  
  
- Stop Prod.  
- Send Prod for further review.  
  
Which live response command should you run for each action?', '[]'::jsonb, ARRAY[]::text[], 'Lệnh `remediate` dừng một quá trình (và xóa tệp hình ảnh của nó). Lệnh `analyze` phân tích một thực thể có nhiều công cụ buộc tội để đưa ra phán quyết, hỗ trợ xem xét thêm.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-305', 'sc-200', 305, 'You have two Microsoft Entra tenants, Tenant1 and Tenant2, and each tenant is associated with an Azure subscription. Tenant1 has a group named Group1, while Tenant2 has a group named Group2.  
  
You need to deploy Microsoft Sentinel for both tenants. The solution must satisfy these requirements:  
  
- Ensure that Group1 can manage security incidents for Tenant1 and Tenant2 from a single workspace view.  
- Ensure that Group2 can manage security incidents only for Tenant2.  
- Minimize guest-account usage.  
- Minimize administrative effort.  
- Minimize costs.  
  
What should the solution include?', '[{"key":"A","text":"one workspace and Privileged Identity Management (PIM)"},{"key":"B","text":"one workspace and multiple role-based access control (RBAC) role assignments"},{"key":"C","text":"two workspaces and Azure Lighthouse"},{"key":"D","text":"two workspaces and granular delegated admin privileges (GDAP)"}]'::jsonb, ARRAY['C']::text[], 'Azure Lighthouse ủy quyền các quyền Microsoft Sentinel trên các đối tượng thuê Microsoft Entra, cho phép Group1 trong đối tượng thuê quản lý truy cập và quản lý không gian làm việc Sentinel trong Tenant2 mà không cần tài khoản khách. Việc giữ một không gian làm việc trong mỗi đối tượng thuê giúp duy trì sự cách ly dữ liệu và tính các chi phí liên quan cho đối tượng thuê tương ứng, trong khi chế độ xem nhiều không gian làm việc của Microsoft Sentinel cho phép Group1 quản lý các sự cố trên cả hai không gian làm việc. Group2 chỉ có thể nhận vai trò Microsoft Sentinel gốc trong Tenant2, giới hạn vai trò này cho đối tượng thuê đó.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-306', 'sc-200', 306, 'You have a Microsoft 365 E5 subscription that uses Microsoft Defender XDR.  
  
You have a custom detection rule named Rule1 that creates an alert when more than five antivirus detections are found on a device. Rule1 has a lookback period of 12 hours.  
  
You need to change the lookback period to 48 hours.  
  
What should you modify for Rule1?', '[{"key":"A","text":"the scope"},{"key":"B","text":"the summarize operator of the KQL query"},{"key":"C","text":"the frequency"},{"key":"D","text":"the where operator of the KQL query"}]'::jsonb, ARRAY['C']::text[], 'Trong quy tắc phát hiện tùy chỉnh XDR của Bộ bảo vệ Microsoft, khoảng thời gian xem lại được đặt theo tần suất quy tắc được định cấu hình. Quy tắc chạy ba giờ một lần sử dụng thời gian xem lại là 12 giờ, trong khi quy tắc chạy 12 giờ một lần sử dụng thời gian xem lại là 48 giờ. Do đó, việc thay đổi tần số sẽ thay đổi khoảng thời gian nhìn lại.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-307', 'sc-200', 307, 'You have an Azure subscription that uses Microsoft Defender for Cloud.  
  
You create a Google Cloud Platform (GCP) organization named GCP1.  
  
You need to onboard GCP1 to Defender for Cloud by using the native cloud connector. The solution must ensure that all future GCP projects are onboarded automatically.  
  
What should the solution include?', '[]'::jsonb, ARRAY[]::text[], 'Việc triển khai GCP cấp tổ chức sử dụng một dự án quản lý và vai trò GCP tùy chỉnh với các quyền khám phá và danh sách dự án ở cấp tổ chức, cho phép khám phá và tự động triển khai các dự án trong tương lai. Defender for Cloud tạo tập lệnh giới thiệu GCloud để tạo các tài nguyên GCP cần thiết và được chạy trong GCP Cloud Shell.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-308', 'sc-200', 308, 'You have a Microsoft 365 subscription that includes a user named User1 and uses Microsoft Defender XDR.  
  
You suspect User1 of suspicious activity.  
  
You need to use the Microsoft Graph security API to query every suspicious activity detected by both Microsoft Defender for Identity and Microsoft Defender for Endpoint over the past three days.  
  
How should you complete the query?', '[]'::jsonb, ARRAY[]::text[], 'Điểm cuối cảnh báo v2 trả về các cảnh báo bảo mật thống nhất, bao gồm các cảnh báo từ Bộ bảo vệ Microsoft dành cho Điểm cuối và Bộ bảo vệ Microsoft dành cho Danh tính. Nó hỗ trợ lọc OData trên `createdDateTime`; `ge` giới hạn kết quả ở các cảnh báo được tạo vào hoặc sau ngày ba ngày trước đó. Các sự cố là các hồ sơ điều tra được nhóm lại thay vì các cảnh báo riêng lẻ được yêu cầu.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-309', 'sc-200', 309, 'You have a Microsoft 365 subscription that uses Microsoft Defender for Endpoint Plan 2 and contains 500 Windows devices.  
  
As part of an incident investigation, you identify the following suspected malware files:  
  
• sys  

• pdf  

• docx  

• xlsx  
  
You need to create indicator hashes to block users from downloading the files to the devices.  
  
Which files can you block by using the indicator hashes?', '[{"key":"A","text":"File1.sys only"},{"key":"B","text":"File1.sys and File3.docx only"},{"key":"C","text":"File1.sys, File3.docx, and File4.xlsx only"},{"key":"D","text":"File2.pdf, File3.docx, and File4.xlsx only"},{"key":"E","text":"File1.sys, File2.pdf, File3.docx, and File4.xlsx"}]'::jsonb, ARRAY['A']::text[], 'Chỉ báo băm tệp chặn tải xuống hiện chỉ áp dụng cho nội dung thực thi di động (PE), chẳng hạn như tệp.exe,.dll và.sys. Microsoft Defender for Endpoint không hỗ trợ chặn các định dạng tài liệu không phải PE như.pdf,.docx hoặc.xlsx thông qua cơ chế này, vì vậy chỉ File1.sys mới có thể bị chặn bằng cách sử dụng hàm băm chỉ báo.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-310', 'sc-200', 310, 'You have a Microsoft 365 E5 subscription that includes a device named Device1.  
  
In the Microsoft Defender portal, you find that an alert was triggered for Device1.  
  
From the Device inventory page, you isolate Device1.  
  
You need to obtain a list of programs installed on Device1.  
  
What should you do?', '[{"key":"A","text":"Initiate a live response session and run the library command."},{"key":"B","text":"Run an advanced hunting query against the DeviceTvmSoftwareInventory table."},{"key":"C","text":"Initiate a live response session and run the analyze command."},{"key":"D","text":"Initiate an automated investigation and view the results in the Action center."}]'::jsonb, ARRAY['B']::text[], 'Bảng Săn tìm nâng cao `DeviceTvmSoftwareInventory` chứa kho lưu trữ Quản lý lỗ hổng bảo vệ Microsoft của phần mềm hiện được cài đặt trên thiết bị. Truy vấn và lọc nó để tìm Device1 sẽ trả về danh sách chương trình đã cài đặt của nó.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-311', 'sc-200', 311, 'You need to update the anomaly-detection policy settings to satisfy the Cloud App Security requirements and fix the reported issue.  
  
Which policy should you modify?', '[{"key":"A","text":"Activity from suspicious IP addresses"},{"key":"B","text":"Activity from anonymous IP addresses"},{"key":"C","text":"Impossible travel"},{"key":"D","text":"Risky sign-in"}]'::jsonb, ARRAY['C']::text[], 'Chính sách phát hiện bất thường **Không thể di chuyển** phát hiện hoạt động của cùng một người dùng từ hai vị trí cách xa nhau về mặt địa lý trong một khung thời gian di chuyển không khả thi. Mức độ nhạy cảm của nó có thể được điều chỉnh để ngăn chặn các kết quả dương tính giả từ các địa điểm văn phòng hợp pháp. Chính sách này đề cập cụ thể đến tình huống kết nối đồng thời từ các vùng địa lý khác nhau.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-312', 'sc-200', 312, 'You have an Azure Sentinel workspace.  
  
You need to manually test a playbook in the Azure portal.  
  
From which location in Azure Sentinel can you run the test?', '[{"key":"A","text":"Playbooks"},{"key":"B","text":"Analytics"},{"key":"C","text":"Threat intelligence"},{"key":"D","text":"Incidents"}]'::jsonb, ARRAY['A']::text[], 'Sách hướng dẫn Azure Sentinel được triển khai dưới dạng quy trình công việc của Ứng dụng Azure Logic. Khu vực Playbooks cung cấp quyền truy cập vào playbook để quy trình làm việc hoặc trình kích hoạt của nó có thể được chạy theo cách thủ công để thử nghiệm. Analytics dành cho các quy tắc phân tích, Thông tin về mối đe dọa dành cho các chỉ báo và Sự cố dành cho việc điều tra và ứng phó sự cố.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-313', 'sc-200', 313, 'You have a Microsoft Sentinel workspace named Workspace1.  
  
You need to exclude a built-in, source-specific Advanced Security Information Model (ASIM) parser from a built-in unified ASIM parser.  
  
What should you create in Workspace1?', '[{"key":"A","text":"an analytic rule"},{"key":"B","text":"a watchlist"},{"key":"C","text":"a workbook"},{"key":"D","text":"a hunting query"}]'::jsonb, ARRAY['B']::text[], 'Microsoft Sentinel sử dụng danh sách theo dõi để loại trừ các trình phân tích cú pháp ASIM dành riêng cho nguồn được tích hợp sẵn khỏi trình phân tích cú pháp hợp nhất được tích hợp sẵn; trình phân tích cú pháp hợp nhất tích hợp không thể được chỉnh sửa trực tiếp cho mục đích này.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-314', 'sc-200', 314, 'You create an Azure subscription called sub1.  
  
In sub1, you create a Log Analytics workspace called workspace1.  
  
You enable Microsoft Defender for Cloud and configure it to use workspace1.  
  
You need to collect security event logs from the Azure virtual machines that report to workspace1.  
  
What should you do?', '[{"key":"A","text":"From Defender for Cloud, modify Microsoft Defender for Servers plan settings."},{"key":"B","text":"In sub1, register a provider."},{"key":"C","text":"From Defender for Cloud, create a workflow automation."},{"key":"D","text":"In workspace1, create a workbook."}]'::jsonb, ARRAY['A']::text[], 'Bộ bảo vệ Microsoft dành cho Máy chủ cung cấp cấu hình để thu thập dữ liệu bảo mật máy chủ và sử dụng không gian làm việc Log Analytics được kết nối để nhập sự kiện bảo mật đủ điều kiện. Cài đặt gói của nó là nơi bật tính năng bảo vệ máy chủ và cấu hình thu thập dữ liệu liên quan; đăng ký nhà cung cấp, tự động hóa quy trình làm việc và sổ làm việc không định cấu hình bộ sưu tập sự kiện bảo mật VM.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-315', 'sc-200', 315, 'You have a Microsoft 365 subscription that uses Microsoft Defender XDR.  
  
You need to create a custom detection rule that identifies devices with more than five antivirus detections during the last 24 hours.  
  
How should you complete the query?', '[]'::jsonb, ARRAY[]::text[], '`arg_max(Timestamp, ReportId)` chọn hàng phát hiện gần đây nhất cho từng thiết bị trong khi vẫn giữ lại ReportId của nó. `count() by DeviceId` đếm số lần phát hiện phần mềm chống vi-rút được lọc trên mỗi thiết bị và `count_ > 5` xác định các thiết bị được yêu cầu.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-316', 'sc-200', 316, 'You have a Microsoft 365 E5 subscription that uses Microsoft Defender XDR.  
  
You have a Microsoft Sentinel workspace.  
  
Microsoft Sentinel connectors are configured as shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783741904501-nvu69hhc.png)  
  
You use Microsoft Sentinel to investigate suspicious Microsoft Graph API activity related to Conditional Access policies.  
  
You need to search for these activities:  
  
- Downloads of the Conditional Access policies by using PowerShell  
- Updates to the Conditional Access policies by using the Microsoft Entra admin center  
  
Which tables should you query for each activity?', '[]'::jsonb, ARRAY[]::text[], 'MicrosoftGraphActivityLogs ghi lại các yêu cầu HTTP được Microsoft Graph nhận và xử lý, bao gồm các yêu cầu có lập trình được thực hiện thông qua PowerShell. AuditLogs ghi lại các thay đổi trong thư mục Microsoft Entra, chẳng hạn như các cập nhật chính sách Truy cập có điều kiện. Các bản cập nhật được thực hiện thông qua trung tâm quản trị Microsoft Entra cũng phải tương quan với hoạt động của Microsoft Graph. OfficeActivity không thể áp dụng vì trình kết nối Microsoft 365 được đặt cấu hình sẽ thu thập hoạt động Exchange Online, SharePoint Online và Teams.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783741904501-nvu69hhc.png', 'published'),
  ('sc200-317', 'sc-200', 317, 'You have an Azure subscription that contains 100 Linux virtual machines.  
  
You need to set up Microsoft Sentinel to collect event logs from the virtual machines.  
  
Which three actions should you take, in sequence?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"B"},{"id":"step2","text":"Slot 2:","correctAnswer":"E"},{"id":"step3","text":"Slot 3:","correctAnswer":"A"}],"choices":[{"key":"A","text":"Install the Log Analytics agent for Linux on the virtual machines."},{"key":"B","text":"Add Microsoft Sentinel to a workspace."},{"key":"C","text":"Add a Security Events connector to the workspace."},{"key":"D","text":"Add an Microsoft Sentinel workbook."},{"key":"E","text":"Add a Syslog connector to the workspace."}]}'::jsonb, ARRAY['step1=B', 'step2=E', 'step3=A']::text[], 'Syslog là giao thức ghi nhật ký sự kiện của Linux. Kích hoạt Microsoft Sentinel trên không gian làm việc Log Analytics, định cấu hình trình kết nối Syslog của nó, sau đó cài đặt tác nhân Linux Log Analytics để các thông báo Syslog đã định cấu hình được chuyển tiếp đến không gian làm việc đó. Sự kiện bảo mật là một trình kết nối nhật ký sự kiện của Windows và sổ làm việc dùng để trực quan hóa chứ không phải để nhập. Tác nhân Log Analytics hiện là di sản; các hoạt động triển khai hiện tại sử dụng Syslog thông qua Tác nhân Azure Monitor, nhưng hành động tác nhân kế thừa được liệt kê sẽ xác định trình tự này.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-318', 'sc-200', 318, 'You have a Microsoft 365 E5 subscription that uses Microsoft SharePoint Online. You delete users from the subscription.  
  
You need to receive notifications when deleted users downloaded a large number of documents from SharePoint Online sites during the month before their accounts were deleted.  
  
What should you use?', '[{"key":"A","text":"a file policy in Microsoft Defender for Cloud Apps"},{"key":"B","text":"an access review policy"},{"key":"C","text":"an alert policy in Microsoft Defender for Office 365"},{"key":"D","text":"an insider risk policy"}]'::jsonb, ARRAY['D']::text[], 'Chính sách Quản lý rủi ro nội bộ Microsoft Purview sử dụng mẫu **Trộm cắp dữ liệu bởi người dùng rời đi** có thể sử dụng sự kiện kích hoạt đã xóa tài khoản Microsoft Entra và đánh giá hoạt động trước đó của người dùng. Nó phát hiện các lượt tải xuống tệp SharePoint Online đáng ngờ và hỗ trợ phát hiện hoạt động tích lũy trong 30 ngày trước đó, cho phép cảnh báo về số lượt tải xuống bất thường do người dùng rời đi hoặc xóa.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-319', 'sc-200', 319, 'You have on-premises servers running Windows Server and a Microsoft Sentinel workspace named SW1. SW1 collects Windows Security log entries from the servers by using the Azure Monitor Agent data connector.  
  
You plan to restrict collected events to event IDs 4624 and 4625 only.  
  
You need to validate the connector filter syntax by using a PowerShell script. How should you complete the script?', '[]'::jsonb, ARRAY[]::text[], 'Biểu thức XPath chọn các sự kiện Bảo mật với EventID 4624 hoặc EventID 4625. `Get-WinEvent` hỗ trợ lựa chọn sự kiện dựa trên XPath thông qua tham số `-FilterXPath`.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-320', 'sc-200', 320, 'You have 50 on-premises servers.  
  
You have an Azure subscription using Microsoft Defender for Cloud. Its deployment has Microsoft Defender for Servers and automatic provisioning enabled.  
  
Configure Defender for Cloud to support the on-premises servers while meeting these requirements:  
  
- Provide threat and vulnerability management.  
- Support data collection rules.  
  
Which three actions should you perform, in sequence?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"A"},{"id":"step2","text":"Slot 2:","correctAnswer":"D"},{"id":"step3","text":"Slot 3:","correctAnswer":"E"}],"choices":[{"key":"A","text":"From the Add servers with Azure Arc settings in the Azure portal, generate an installation script."},{"key":"B","text":"From the Data controller settings in the Azure portal, create an Azure Arc data controller."},{"key":"C","text":"On the on-premises servers, install the Log Analytics agent."},{"key":"D","text":"On the on-premises servers, install the Azure Connected Machine agent."},{"key":"E","text":"On the on-premises servers, install the Azure Monitor agent."}]}'::jsonb, ARRAY['step1=A', 'step2=D', 'step3=E']::text[], 'Trước tiên, các máy chủ tại chỗ phải được tích hợp vào Azure Arc bằng cách tạo tập lệnh tích hợp và cài đặt tác nhân Azure Connected Machine. Azure Monitor Agent là tác nhân được hỗ trợ để thu thập dữ liệu thông qua các quy tắc thu thập dữ liệu. Tác nhân Log Analytics là cũ và bộ điều khiển dữ liệu Azure Arc chỉ cần thiết cho các dịch vụ dữ liệu hỗ trợ Arc chứ không cần cho Bộ bảo vệ cho Máy chủ.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-321', 'sc-200', 321, 'You have a Microsoft Sentinel workspace containing a custom workbook.  
  
You must query the daily number of security alerts. The solution must meet these requirements:  
  
- Identify alerts that occurred during the last 30 days.  
- Show the results in a timechart.  
  
How should you complete the query?', '[]'::jsonb, ARRAY[]::text[], '`summarize count()` tổng hợp các hàng cảnh báo và `bin(TimeGenerated, 1d)` tạo các nhóm thời gian hàng ngày. Bộ lọc 30 ngày giới hạn các cảnh báo trước khi tổng hợp và `render timechart` sử dụng nhóm ngày giờ làm trục thời gian và Tên nhà cung cấp làm thứ nguyên chuỗi.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-322', 'sc-200', 322, 'Your network has an on-premises Active Directory Domain Services (AD DS) domain synchronized with Azure AD.  
  
You have a Microsoft 365 E5 subscription that uses Microsoft Defender 365.  
  
You need to find every interactive authentication attempt by users in your company’s finance department.  
  
Complete the KQL query.', '[]'::jsonb, ARRAY[]::text[], 'IdentityInfo cung cấp cho bộ phận người dùng và ID đối tượng tài khoản Microsoft Entra. IdentityLogonEvents chứa hoạt động xác thực và bao gồm các hoạt động đăng nhập tương tác vào Microsoft Entra, do đó, việc kết hợp nó với các bản ghi nhận dạng được lọc bởi Finance sẽ trả về những lần thử cần thiết.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-323', 'sc-200', 323, 'You have the Azure subscriptions shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783742297910-ax7ezgyv.png)  
  
You have a Microsoft Entra tenant containing the users shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783742301638-ye92sogc.png)  
  
The users have the Azure roles shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783742304186-2bj1vaxn.png)  
  
You configure Microsoft Copilot for Security capacities as shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783742307223-2nw09lo6.png)  
  
For each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"User1 can add an additional capacity to Capacity1.","correctAnswer":"Yes"},{"id":"2","text":"User2 can view the capacity usage information of Capacity2.","correctAnswer":"Yes"},{"id":"3","text":"User3 can configure additional plugins in Capacity2.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:Yes', '2:Yes', '3:No']::text[], 'Việc chỉ định Chủ sở hữu Azure ở phạm vi đăng ký sẽ áp dụng cho các nhóm tài nguyên và tài nguyên của nó, vì vậy Người dùng1 có thể thay đổi Dung lượng1. Nhiệm vụ Azure Reader tại Sub2 áp dụng cho Dung lượng2 trong RG3 và hỗ trợ xem thông tin sử dụng của nó. Việc chỉ định Chủ sở hữu Azure của Người dùng3 được giới hạn ở RG2; nó không áp dụng cho Dung lượng2 trong RG3. Quản trị viên toàn cầu Microsoft Entra là vai trò của đối tượng thuê và không tự động cấp cho Azure RBAC quyền truy cập vào tài nguyên Dung lượng2.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783742297910-ax7ezgyv.png', 'published'),
  ('sc200-324', 'sc-200', 324, 'You have a Microsoft Sentinel workspace containing a custom workbook named Workbook1.  
  
You need to create a visual in Workbook1 that displays the logon count for accounts with logon event IDs 4624 and 4634.  
  
How should you complete the query?', '[]'::jsonb, ARRAY[]::text[], 'Toán tử KQL `join` kết hợp tập kết quả 4624 và 4634 tổng hợp bằng cách sử dụng `Account` làm khóa chung. `kind=inner` chỉ giữ lại các tài khoản xuất hiện trong cả hai bộ kết quả và trả về giá trị LogOnCount và LogOffCount của chúng.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-325', 'sc-200', 325, 'You have a Microsoft 365 E5 subscription that uses Microsoft Defender XDR.  
  
A malicious process initiated by a file named File1.exe is discovered on a device named Device1.  
  
You need to create a KQL query that identifies when File1.exe was created. The solution must meet these requirements:  
  
- Return the FileName, InitiatingProcessFileName, and InitiatingProcessCommandLine columns.  
- Minimize the volume of returned data.  
  
How should you complete the query?', '[]'::jsonb, ARRAY[]::text[], 'DeviceFileEvents ghi lại việc tạo, sửa đổi tệp và các sự kiện hệ thống tệp khác, đồng thời bao gồm các trường tệp và quá trình khởi tạo. Lọc nó theo DeviceName, FileCreated và FileName xác định các sự kiện tạo có liên quan. Toán tử lưu giữ dự án chỉ giữ lại các cột bắt buộc được đặt tên, giảm thiểu dữ liệu kết quả.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-326', 'sc-200', 326, 'You already have an Azure logic app that blocks Azure Active Directory (Azure AD) users. The logic app uses a manual trigger.  
  
You deploy Azure Sentinel.  
  
You need to use the existing logic app as an Azure Sentinel playbook.  
  
What should you do first?', '[{"key":"A","text":"And a new scheduled query rule."},{"key":"B","text":"Add a data connector to Azure Sentinel."},{"key":"C","text":"Configure a custom Threat Intelligence connector in Azure Sentinel."},{"key":"D","text":"Modify the trigger in the logic app."}]'::jsonb, ARRAY['D']::text[], 'Playbook Microsoft Sentinel là quy trình làm việc của Ứng dụng Azure Logic bắt đầu từ sự cố, cảnh báo hoặc kích hoạt thực thể Microsoft Sentinel. Trình kích hoạt xác định lược đồ đầu vào mà Sentinel gửi tới playbook; trình kích hoạt thủ công không cung cấp sự tích hợp đó. Do đó, trình kích hoạt ứng dụng logic phải được thay đổi trước khi có thể sử dụng ứng dụng làm sổ tay Sentinel.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-327', 'sc-200', 327, 'You have an Azure subscription named Sub1 that uses Microsoft Defender for Cloud.  

You need to assign the PCI DSS 4.0 initiative to Sub1 and have the initiative displayed in the Defender for Cloud Regulatory compliance dashboard.  
  
From Security policies in the Environment settings, you discover that the option to add more industry and regulatory standards is unavailable.  
  
What should you do first?', '[{"key":"A","text":"Configure the Continuous export settings for Log Analytics."},{"key":"B","text":"Enable the Cloud Security Posture Management (CSPM) plan for the subscription."},{"key":"C","text":"Configure the Continuous export settings for Azure Event Hubs."},{"key":"D","text":"Disable the Microsoft Cloud Security Benchmark (MCSB) assignment."}]'::jsonb, ARRAY['B']::text[], 'Để chỉ định các tiêu chuẩn tuân thủ quy định như PCI DSS 4.0 cho một gói đăng ký và xem chúng trong bảng thông tin Tuân thủ quy định, trước tiên bạn phải bật gói Quản lý tình trạng bảo mật đám mây (CSPM). CSPM cung cấp khả năng quản lý tiêu chuẩn và theo dõi tuân thủ; không có nó, tùy chọn thêm các tiêu chuẩn ngành và quy định sẽ không khả dụng. Xuất liên tục hoặc cấu hình MCSB không phải là điều kiện tiên quyết.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-328', 'sc-200', 328, 'You have a Microsoft Entra tenant and a Microsoft Sentinel workspace named Workspaces1.  
  
You need to configure long-term retention for Microsoft Entra audit logs in Workspace1. The solution must maximize log retention.  
  
To what retention period should you set it?', '[{"key":"A","text":"2 years"},{"key":"B","text":"4 years"},{"key":"C","text":"7 years"},{"key":"D","text":"12 years"}]'::jsonb, ARRAY['D']::text[], 'Không gian làm việc Log Analytics có thể lưu giữ dữ liệu lên đến 12 năm thông qua tổng lưu giữ, bao gồm cả lưu giữ dài hạn. Do đó, 12 năm là thời gian lưu giữ tối đa cho nhật ký kiểm tra.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-329', 'sc-200', 329, 'You use Azure Sentinel.  
  
You need to use a built-in role to grant a security analyst the ability to edit queries in custom Azure Sentinel workbooks. The solution must follow the principle of least privilege.  
  
Which role should you assign to the analyst?', '[{"key":"A","text":"Azure Sentinel Contributor"},{"key":"B","text":"Security Administrator"},{"key":"C","text":"Azure Sentinel Responder"},{"key":"D","text":"Logic App Contributor"}]'::jsonb, ARRAY['A']::text[], 'Microsoft Sentinel Contributor bao gồm quyền tạo và chỉnh sửa tài nguyên Microsoft Sentinel, bao gồm sổ làm việc và các truy vấn của chúng. Bộ phản hồi Microsoft Sentinel nhằm mục đích xem tài nguyên và quản lý sự cố, trong khi Trình đóng góp ứng dụng logic áp dụng cho sách giải trí thay vì sách bài tập. Quản trị viên bảo mật cung cấp các khả năng quản trị rộng hơn không cần thiết cho tác vụ này.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-330', 'sc-200', 330, 'You have a Microsoft 365 subscription that uses Microsoft Defender for Endpoint and contains the following devices:  
  
- Device1: Runs Windows 11 Pro  
- Device2: Runs Windows Server  
- Device3: Runs Ubuntu Linux  
  
You identify three suspicious files named File1.exe, File2.zip, and File3.ps1.  
  
You need to investigate the files by using deep analysis.  
  
Which devices support deep analysis, and which files can be submitted for deep analysis?', '[]'::jsonb, ARRAY[]::text[], 'Phân tích sâu hỗ trợ thu thập tệp tự động từ các thiết bị Windows 10, Windows 11 và Windows Server 2012 R2 trở lên, vì vậy Device1 và Device2 đủ điều kiện. Nó chỉ hỗ trợ các tệp PE như.exe và.dll; do đó File1.exe đủ điều kiện, trong khi kho lưu trữ ZIP và tập lệnh PowerShell thì không.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-331', 'sc-200', 331, 'You provision Azure Sentinel for a new Azure subscription.  
  
You are configuring the Security Events connector. While creating a new rule from a connector template, you choose to generate a new alert for each event. You create the following rule query.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783728832767-9hu7354x.png)  
  
By which two components can alerts be grouped into incidents? Each correct answer provides a complete solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"user"},{"key":"B","text":"resource group"},{"key":"C","text":"IP address"},{"key":"D","text":"computer"}]'::jsonb, ARRAY['A', 'D']::text[], 'Microsoft Sentinel có thể nhóm các cảnh báo liên quan theo các thực thể được ánh xạ. `AccountCustomEntity` ánh xạ giá trị tài khoản tới thực thể Tài khoản (người dùng) và `HostCustomEntity` ánh xạ giá trị máy tính tới thực thể Máy chủ (máy tính). Truy vấn không ánh xạ địa chỉ IP hoặc thực thể nhóm tài nguyên. [Map data fields to Microsoft Sentinel entities](https://learn.microsoft.com/en-us/azure/sentinel/map-data-fields-to-entities)', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783728832767-9hu7354x.png', 'published'),
  ('sc200-332', 'sc-200', 332, 'You have an Azure subscription with Microsoft Defender for Cloud enhanced security features enabled, and it contains a user named User1.  
  
You need to ensure that User1 can export alert data from Defender for Cloud. The solution must follow the principle of least privilege.  
  
Which role should be assigned to User1?', '[{"key":"A","text":"User Access Administrator"},{"key":"B","text":"Owner"},{"key":"C","text":"Contributor"},{"key":"D","text":"Reader"}]'::jsonb, ARRAY['D']::text[], 'Vai trò Azure Reader cấp quyền truy cập chỉ đọc vào các cảnh báo của Defender for Cloud và thông tin bảo mật liên quan, đủ để xuất dữ liệu cảnh báo. Người đóng góp và Chủ sở hữu bổ sung các khả năng ghi hoặc quản trị không cần thiết và Quản trị viên quyền truy cập của người dùng nhằm mục đích quản lý các nhiệm vụ truy cập.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-333', 'sc-200', 333, 'You have a Microsoft subscription with Microsoft Defender for Cloud enabled.  
  
You configure the Azure Logic Apps shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783732823566-j2fxevwk.png)  
  
You need to configure an automatic action that runs if a **Suspicious process executed** alert is triggered. The solution must minimize administrative effort.  
  
Which three actions should you perform in sequence?', '{"statements":[{"id":"1","text":"Slot 1:","correctAnswer":"C"},{"id":"2","text":"Slot 2:","correctAnswer":"F"},{"id":"3","text":"Slot 3:","correctAnswer":"D"}],"choices":[{"key":"A","text":"Configure the Mitigate the threat settings."},{"key":"B","text":"Configure the Suppress similar alerts settings."},{"key":"C","text":"Filter by alert title."},{"key":"D","text":"Configure the Trigger automated response settings."},{"key":"E","text":"Configure the Prevent future attacks settings."},{"key":"F","text":"Select Take action."}]}'::jsonb, ARRAY['1=C', '2=F', '3=D']::text[], 'Sự kiện thực thi quy trình đáng ngờ là cảnh báo bảo mật của Defender for Cloud. Lọc theo tiêu đề cảnh báo sẽ xác định loại cảnh báo đó. Trong quy trình thực hiện hành động của cảnh báo, Phản hồi tự động kích hoạt là tùy chọn kích hoạt Ứng dụng Logic. LogicApp2 phù hợp vì trình kích hoạt của nó dành cho các cảnh báo của Defender for Cloud; LogicApp1 chỉ dành cho đề xuất. Ngăn chặn các cuộc tấn công trong tương lai cung cấp các đề xuất bảo mật thay vì định cấu hình phản hồi tự động.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783732823566-j2fxevwk.png', 'published'),
  ('sc200-334', 'sc-200', 334, 'You have an Azure subscription containing a Microsoft Sentinel workspace named WS1.  
  
You must ensure that incidents in WS1 include a list of actions that need to be completed. The solution must meet these requirements:  
  
- Enable a tailored action list for every incident type.  
- Minimize administrative effort.  
  
What should you do?', '[]'::jsonb, ARRAY[]::text[], 'Nhiệm vụ sự cố cung cấp danh sách kiểm tra các hành động cần thực hiện. Quy tắc tự động hóa có thể thêm nhiệm vụ khi xảy ra sự cố và có thể được xác định phạm vi theo quy tắc phân tích, cho phép danh sách nhiệm vụ riêng biệt cho các loại sự cố khác nhau bằng quản trị tự động, tập trung. Tab Phản hồi tự động là nơi có thể tạo hoặc quản lý các quy tắc tự động hóa cho quy tắc phân tích.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-335', 'sc-200', 335, 'You are configuring Microsoft Cloud App Security.  
  
You have a custom threat-detection policy based on the IP address ranges for your company''s United States-based offices.  
  
You receive many alerts related to impossible travel and sign-ins from risky IP addresses. You determine that 99% of the alerts are legitimate sign-ins from your corporate offices.  
  
You need to prevent alerts for legitimate sign-ins from known locations.  
  
Which two actions should you take? Each correct answer represents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Configure automatic data enrichment."},{"key":"B","text":"Add the IP addresses to the corporate address range category."},{"key":"C","text":"Increase the sensitivity level of the impossible travel anomaly detection policy."},{"key":"D","text":"Add the IP addresses to the other address range category and add a tag."},{"key":"E","text":"Create an activity policy that has an exclusion for the IP addresses."}]'::jsonb, ARRAY['A', 'B']::text[], 'Việc thêm địa chỉ IP công ty vào danh mục dải địa chỉ **Corporate** (B) sẽ tự động đánh dấu chúng là đáng tin cậy và loại trừ chúng khỏi các chính sách phát hiện IP rủi ro. Định cấu hình làm giàu dữ liệu tự động (A) cho phép ghi đè thông tin vị trí đối với các phạm vi văn phòng đã biết. Cùng với nhau, những điều này ngăn chặn cảnh báo về lưu lượng truy cập hợp pháp của công ty. Việc tăng độ nhạy (C) sẽ tạo ra nhiều cảnh báo hơn chứ không phải ít hơn. Danh mục "Khác" (D) có thẻ ít trực tiếp hơn so với việc sử dụng danh mục Công ty được chỉ định.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-336', 'sc-200', 336, 'You have an Azure subscription that uses Microsoft Defender for Cloud and includes a resource group named RG1. RG1 contains 20 virtual machines running Windows Server 2019.  
  
You need to configure just-in-time (JIT) access for the virtual machines in RG1. The solution must meet these requirements:  
  
- Limit the maximum request duration to two hours.  
- Restrict protocol access to Remote Desktop Protocol (RDP) only.  
- Minimize administrative effort.  
  
What should you use?', '[{"key":"A","text":"Azure AD Privileged Identity Management (PIM)"},{"key":"B","text":"Azure Policy"},{"key":"C","text":"Azure Bastion"},{"key":"D","text":"Azure Front Door"}]'::jsonb, ARRAY['B']::text[], 'Quyền truy cập VM đúng lúc của Microsoft Defender for Cloud có thể xác định chính sách trên mỗi cổng chỉ định giao thức và thời gian yêu cầu tối đa. Chính sách Azure có thể triển khai và thực thi cấu hình JIT đó một cách nhất quán trên các máy ảo trong một nhóm tài nguyên, giảm thiểu công việc quản trị trên mỗi VM. RDP có thể bị hạn chế ở cổng quản lý TCP với thời gian truy cập tối đa là hai giờ.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-337', 'sc-200', 337, 'You have an Azure subscription connected to an Azure Active Directory (Azure AD) tenant. The tenant has two users, User1 and User2.  
  
You plan to deploy Azure Defender. You must allow User1 and User2 to perform the subscription-level tasks shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783729531385-zsj5k6xc.png)  
  
The solution must follow the principle of least privilege. Which role should be assigned to each user?  
  
Each role may be used once, more than once, or not at all.', '{"statements":[{"id":"user1","text":"User1:","correctAnswer":"C"},{"id":"user2","text":"User2:","correctAnswer":"A"}],"choices":[{"key":"A","text":"Contributor"},{"key":"B","text":"Owner"},{"key":"C","text":"Security administrator"},{"key":"D","text":"Security reader"}]}'::jsonb, ARRAY['user1=C', 'user2=A']::text[], 'Quản trị viên bảo mật có thể quản lý các chính sách bảo mật và phân công chính sách của Defender for Cloud, bao gồm cài đặt Defender for Cloud có liên quan. Người đóng góp ở phạm vi đăng ký có thể áp dụng các đề xuất bảo mật tài nguyên bằng cách sử dụng Fix, đồng thời cũng có thể xem và loại bỏ cảnh báo. Security Reader ở chế độ chỉ đọc và Chủ sở hữu cấp các quyền không cần thiết.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783729531385-zsj5k6xc.png', 'published'),
  ('sc200-338', 'sc-200', 338, 'You have a Microsoft 365 E5 subscription.  
  
You need to configure Microsoft Sentinel to collect logs from Microsoft Entra.  
  
Which two nodes should you use in the Microsoft Defender portal?

![Question Image](https://cdn.examcademy.com/images/questions/1785604148840-lt1t3b01.png)', '[]'::jsonb, ARRAY[]::text[], 'Microsoft Sentinel uses the Content hub to discover and install solution packages, including the Microsoft Entra ID solution. The solution includes the Microsoft Entra ID data connector; configure that connector from Data connectors to ingest Entra audit and sign-in logs into the Log Analytics workspace.

**Tài liệu tham khảo:**
[Send Microsoft Entra ID data to Microsoft Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/connect-azure-active-directory) · [Connect data sources to Microsoft Sentinel by using data connectors](https://learn.microsoft.com/en-us/azure/sentinel/configure-data-connector)', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1785604148840-lt1t3b01.png', 'published'),
  ('sc200-339', 'sc-200', 339, 'You need to receive a security alert when a user tries to sign in from a location that no other users in your organization have previously used to sign in.  
  
Which anomaly detection policy should you use?', '[{"key":"A","text":"Impossible travel"},{"key":"B","text":"Activity from anonymous IP addresses"},{"key":"C","text":"Activity from infrequent country"},{"key":"D","text":"Malware detection"}]'::jsonb, ARRAY['C']::text[], 'Chính sách phát hiện bất thường **Hoạt động từ quốc gia không thường xuyên** xác định hoạt động có nguồn gốc từ một quốc gia không phổ biến đối với tổ chức. Nó nhằm mục đích cảnh báo về hoạt động đăng nhập từ các vị trí mà người dùng của tổ chức thường không sử dụng.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-340', 'sc-200', 340, 'You have a Microsoft 365 E5 subscription that uses Microsoft Defender for Endpoint.  
  
You need to identify all devices that triggered a malware alert and collect evidence associated with the alert. The solution must ensure that you can use the results to initiate device isolation for the affected devices.  
  
What should you use in the Microsoft 365 Defender portal?', '[{"key":"A","text":"incidents"},{"key":"B","text":"Remediation"},{"key":"C","text":"Investigations"},{"key":"D","text":"Advanced hunting"}]'::jsonb, ARRAY['D']::text[], 'Truy vấn tìm kiếm nâng cao XDR của Bộ bảo vệ Microsoft có thể xác định các thiết bị được liên kết với cảnh báo phần mềm độc hại và trả về giá trị `DeviceId` của chúng. Từ các kết quả truy vấn đó, các nhà phân tích có thể thu thập gói điều tra để tìm bằng chứng pháp lý và cách ly các thiết bị bị ảnh hưởng làm hành động phản hồi.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-341', 'sc-200', 341, 'You have a Microsoft Sentinel workspace.  
  
You need to configure the Fusion analytics rule to temporarily suppress incidents generated by a Microsoft Defender connector. The solution must meet these requirements:  
  
- Minimize the impact on the ability to detect multistage attacks.  
- Minimize administrative effort.  
  
How should you configure the rule?', '[]'::jsonb, ARRAY[]::text[], 'Quy tắc tự động hóa sự cố có giới hạn thời gian có thể tự động đóng các sự cố khi chúng được tạo, loại bỏ chúng mà không cần sổ tay và với mức quản lý tối thiểu. Việc loại trừ tín hiệu nguồn của Bộ bảo vệ Microsoft khỏi Fusion sẽ ngăn các hoạt động phát hiện của Fusion dựa vào tín hiệu đó, làm giảm khả năng phát hiện cuộc tấn công nhiều giai đoạn.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-342', 'sc-200', 342, 'You have an Azure Sentinel deployment.  
  
You need to query for every suspicious credential-access activity.  
  
Which three actions should you take, in order?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"A"},{"id":"step2","text":"Slot 2:","correctAnswer":"D"},{"id":"step3","text":"Slot 3:","correctAnswer":"B"}],"choices":[{"key":"A","text":"From Azure Sentinel, select Hunting."},{"key":"B","text":"Select Run All Queries."},{"key":"C","text":"Select New Query."},{"key":"D","text":"Filter by tactics."},{"key":"E","text":"From Azure Sentinel, select Notebooks."}]}'::jsonb, ARRAY['step1=A', 'step2=D', 'step3=B']::text[], 'Trang Săn bắn của Microsoft Sentinel chứa các truy vấn săn bắn tích hợp. Lọc theo chiến thuật Truy cập thông tin xác thực MITER ATT&CK sẽ mở rộng danh sách thành các truy vấn truy cập thông tin xác thực và Chạy tất cả truy vấn sẽ thực thi chúng. Truy vấn mới dùng để tạo truy vấn, trong khi Notebook dùng để điều tra và phân tích.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-343', 'sc-200', 343, 'You create an Azure subscription.  
  
You enable Azure Defender for that subscription.  
  
You need to protect on-premises computers by using Azure Defender.  
  
What should you do on the on-premises computers?', '[{"key":"A","text":"Install the Log Analytics agent."},{"key":"B","text":"Install the Dependency agent."},{"key":"C","text":"Configure the Hybrid Runbook Worker role."},{"key":"D","text":"Install the Connected Machine agent."}]'::jsonb, ARRAY['A']::text[], 'Trong quy trình làm việc cũ của Azure Defender, tác nhân Log Analytics (Tác nhân giám sát của Microsoft) thu thập và gửi các sự kiện bảo mật từ máy tính tại chỗ đến không gian làm việc Log Analytics để Azure Defender có thể giám sát và bảo vệ chúng. Microsoft đã ngừng hoạt động tác nhân đó và hiện đề xuất các phương pháp tích hợp Defender for Cloud mới hơn, nhưng tác nhân Log Analytics là thành phần bắt buộc cho kịch bản cũ này.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-344', 'sc-200', 344, 'You have a Microsoft 365 E5 subscription that uses Microsoft Defender for Endpoint.  
  
You must create a detection rule that meets these requirements:  
  
- It triggers when a device with critical software vulnerabilities was active in the last hour.  
- It restricts the number of duplicate results.  
  
How should you complete the KQL query?', '[]'::jsonb, ARRAY[]::text[], '`distinct DeviceId` loại bỏ các hàng trùng lặp do nhiều CVE quan trọng gây ra trên cùng một thiết bị. Bộ lọc bên trong và bộ lọc Dấu thời gian kéo dài một giờ giữ lại các thiết bị hoạt động trong khoảng thời gian đó. `project Timestamp, DeviceId, ReportId` trả về các trường sự kiện cần thiết để xác định duy nhất một sự kiện của Bộ bảo vệ Microsoft dành cho Điểm cuối cho quy tắc phát hiện tùy chỉnh.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-345', 'sc-200', 345, 'You have an Azure subscription named Sub1. Sub1 contains a Microsoft Sentinel workspace named SW1 and a virtual machine named VM1 that runs Windows Server. SW1 gathers security logs from VM1 by using the Windows Security Events via AMA connector.  
  
You need to restrict the scope of events collected from VM1. The solution must ensure that only audit failure events are collected.  
  
How should you complete the connector filter expression?', '[]'::jsonb, ARRAY[]::text[], 'Các sự kiện kiểm tra không thành công của Bảo mật Windows sử dụng mặt nạ Từ khóa `0x8010000000000000`. Trường `Keywords` nằm trong nút sự kiện `System`, do đó vị từ XPath bắt buộc là `System[Keywords=''0x8010000000000000'']`.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-346', 'sc-200', 346, 'You must configure Microsoft Cloud App Security to generate alerts and initiate remediation actions when confidential files are shared externally.  
  
Which two actions should you take in the Cloud App Security portal? Each correct answer is part of the solution.  
  
**NOTE:** Each correct selection is worth one point.', '[{"key":"A","text":"From Settings, select Information Protection, select Azure Information Protection, and then select Only scan files for Azure Information Protection classification labels and content inspection warnings from this tenant."},{"key":"B","text":"Select Investigate files, and then filter App to Office 365."},{"key":"C","text":"Select Investigate files, and then select New policy from search."},{"key":"D","text":"From Settings, select Information Protection, select Azure Information Protection, and then select Automatically scan new files for Azure Information Protection classification labels and content inspection warnings."},{"key":"E","text":"From Settings, select Information Protection, select Files, and then enable file monitoring."},{"key":"F","text":"Select Investigate files, and then filter File Type to Document."}]'::jsonb, ARRAY['C', 'D']::text[], 'Tính năng quét tự động giúp nhãn nhạy cảm của Azure Information Protection có sẵn cho các tệp mới được thêm vào, cho phép xác định các tệp bí mật. Chính sách tệp có thể kết hợp nhãn nhạy cảm và điều kiện chia sẻ bên ngoài, tạo cảnh báo và áp dụng các hành động quản trị tự động như thay đổi quyền truy cập chia sẻ, xóa quyền, cách ly hoặc gắn nhãn tệp.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-347', 'sc-200', 347, 'You are investigating an Azure Sentinel incident that contains more than 127 alerts.  
  
You identify eight alerts in the incident that need additional investigation.  
  
You must escalate the alerts to another Azure Sentinel administrator.  
  
What should you do to provide the alerts to that administrator?', '[{"key":"A","text":"Create a Microsoft incident creation rule"},{"key":"B","text":"Share the incident URL"},{"key":"C","text":"Create a scheduled query rule"},{"key":"D","text":"Assign the incident"}]'::jsonb, ARRAY['D']::text[], 'Sự cố Microsoft Sentinel tổng hợp các cảnh báo liên quan và việc chỉ định sự cố cho người dùng hoặc nhóm sẽ đặt chủ sở hữu của sự cố đó để điều tra. Điều này chuyển giao trách nhiệm về sự cố và các cảnh báo liên quan cho quản trị viên được chỉ định.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-348', 'sc-200', 348, 'You have a Microsoft 365 subscription that uses Microsoft Defender XDR, Microsoft Purview, and Exchange Online.  
  
You have a partner company named Contoso, Ltd.  
  
You need to review every email that contains PDF attachments and was received from Contoso during the past month. The solution must minimize administrative effort.  
  
What should you use?', '[{"key":"A","text":"Content search"},{"key":"B","text":"Content explorer"},{"key":"C","text":"Activity explorer"},{"key":"D","text":"Advanced Hunting"}]'::jsonb, ARRAY['A']::text[], 'Microsoft Purview Tìm kiếm nội dung nhằm mục đích tìm kiếm nội dung Microsoft 365 và hỗ trợ truy vấn từ khóa cũng như điều kiện tìm kiếm. Thuộc tính email có thể tìm kiếm của nó có thể hạn chế kết quả theo người gửi và ngày nhận, trong khi tiêu chí tên tệp đính kèm có thể nhắm mục tiêu các tệp `.pdf`, cho phép xem xét các thư Exchange Online phù hợp với thiết lập tối thiểu.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-349', 'sc-200', 349, 'You have a Microsoft Sentinel workspace connected to the Microsoft Defender portal. You enable the User and Entity Behavior Analytics (UEBA) behavior layers and verify that behavior records are generated.  
  
Create an advanced hunting query that returns only UEBA behavior records generated by Microsoft Sentinel.', '[]'::jsonb, ARRAY[]::text[], '`ServiceSource` xác định sản phẩm hoặc dịch vụ đã tạo ra hành vi. Bảng `BehaviorEntities` của cổng Defender có thể bao gồm các hành vi UEBA từ nhiều dịch vụ của Microsoft và các bản ghi hành vi UEBA của Microsoft Sentinel được lọc theo giá trị chính xác `"Microsoft Sentinel"`; `==` thực hiện so sánh đẳng thức chính xác đó.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-350', 'sc-200', 350, 'You have access to a Microsoft Sentinel workspace.  
  
You are investigating a multistage security attack in your environment.  
  
You need to identify the MITRE ATT&CK phases for the tactics and techniques the attacker used. The solution must minimize administrative effort.  
  
What should you do?', '[{"key":"A","text":"From Microsoft Sentinel in the Microsoft Defender portal, select Threat management, an then use the MITRE ATT&CK node."},{"key":"B","text":"Use the Microsoft Security Compliance Toolkit"},{"key":"C","text":"From Investigation & response in the Microsoft Defender portal, select Incident & alerts, and then use the Incidents node."},{"key":"D","text":"From Microsoft Sentinel in the Microsoft Defender portal, select Threat management, and then use the Hunting node."}]'::jsonb, ARRAY['A']::text[], 'Trang MITER ATT&CK của Microsoft Sentinel sắp xếp và trực quan hóa phạm vi phát hiện không gian làm việc theo chiến thuật và kỹ thuật MITER ATT&CK. Trong cổng Microsoft Defender, tính năng này có sẵn tại **Microsoft Sentinel > Quản lý mối đe dọa > MITER ATT&CK**, biến nó thành tùy chọn trực tiếp với nỗ lực quản trị tối thiểu.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-351', 'sc-200', 351, 'You have a Microsoft Sentinel playbook triggered by using the Azure Activity connector.  
  
You need to create a new near-real-time (NRT) analytics rule that will use the playbook.  
  
What should you configure for the rule?', '[{"key":"A","text":"the incident automation settings"},{"key":"B","text":"the query rule"},{"key":"C","text":"entity mapping"},{"key":"D","text":"the Alert automation settings"}]'::jsonb, ARRAY['D']::text[], 'Quy tắc NRT tạo ra cảnh báo trực tiếp chứ không phải sự cố, do đó, một playbook được đính kèm với nó thông qua cài đặt tự động hóa cảnh báo của quy tắc, chạy playbook đã chọn bất cứ khi nào quy tắc NRT tạo cảnh báo. Cài đặt tự động hóa sự cố chỉ áp dụng sau khi sự cố được tạo và bản thân ánh xạ thực thể hoặc logic truy vấn có no liên quan đến sổ giải trí được gọi.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-352', 'sc-200', 352, 'You have a Microsoft 365 subscription that uses Microsoft 365 Defender and includes a user named User1.  
  
You are notified that User1''s account has been compromised. You need to review the alerts generated on devices to which User1 signed in.  
  
How should you complete the query?', '[]'::jsonb, ARRAY[]::text[], 'Kết nối bên trong với AlertEvidence sẽ liên kết các thiết bị được Người dùng1 sử dụng với bằng chứng cảnh báo được ghi lại cho các thiết bị đó. Việc chiếu AlertId cho phép tham gia tiếp theo với AlertInfo và dự án cuối cùng chỉ trả về các trường cảnh báo được yêu cầu.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-353', 'sc-200', 353, 'You have a Microsoft 365 subscription containing 1,000 Windows 10 devices. Microsoft Office 365 is installed on the devices.  
  
You need to mitigate these device threats:  
  
- Microsoft Excel macros that download scripts from untrusted websites  
- Users opening executable attachments in Microsoft Outlook  
- Exploits involving Outlook rules and forms  
  
What should you use?', '[{"key":"A","text":"Microsoft Defender Antivirus"},{"key":"B","text":"attack surface reduction rules in Microsoft Defender for Endpoint"},{"key":"C","text":"Windows Defender Firewall"},{"key":"D","text":"adaptive application control in Azure Defender"}]'::jsonb, ARRAY['B']::text[], 'Các quy tắc giảm thiểu bề mặt tấn công của Bộ bảo vệ Microsoft dành cho Điểm cuối có thể chặn các ứng dụng Office và macro tạo các tiến trình con hoặc nội dung thực thi, chặn nội dung thực thi từ ứng dụng email và webmail, đồng thời chặn các ứng dụng giao tiếp Office tạo các tiến trình con. Các quy tắc này giảm thiểu các kỹ thuật tấn công Excel và Outlook được chỉ định.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-354', 'sc-200', 354, 'You have a Microsoft 365 E5 subscription that uses Microsoft Defender XDR.  
  
You are implementing a deception rule and need to supply a custom lure file. For that custom lure, you set the Planting path to HOME.  
  
Select which file types you can use for the custom lure and the home directory in which the file should reside on a device.', '[]'::jsonb, ARRAY[]::text[], 'Mồi nhử tùy chỉnh loại trừ các tệp thực thi (.EXE) và DLL; XLSX và PDF được cho phép. Mã thông báo HOME phân giải tới thư mục chính của người dùng đang hoạt động trên thiết bị.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-355', 'sc-200', 355, 'You have a Microsoft Sentinel workspace named Workspace1 that includes the AzureActivity table.  
  
You need to set the retention period for the AzureActivity table. The solution must meet these requirements:  
  
- Maximize the time during which interactive queries can be run.  
- Minimize retention costs.  
  
To what value should you configure the retention period? Select the appropriate options in the answer area.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"30 days"},{"key":"B","text":"90 days"},{"key":"C","text":"180 days"},{"key":"D","text":"2 years"}]'::jsonb, ARRAY['B']::text[], 'Dữ liệu AzureActivity được lưu giữ trong ít nhất 90 ngày với mức phí no và có sẵn cho các truy vấn tương tác trong quá trình lưu giữ phân tích. Việc tăng thời gian lưu giữ vượt quá 90 ngày sẽ phát sinh phí lưu giữ, đồng thời giảm thời gian lưu giữ xuống còn 30 ngày sẽ rút ngắn thời gian truy vấn tương tác. Do đó, 90 ngày là khoảng thời gian lưu giữ tương tác dài nhất với chi phí no.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-356', 'sc-200', 356, 'Solution: From **Entity tags**, you add the accounts as Honeytoken accounts.  
  
Does this satisfy the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[], 'Microsoft Defender for Identity hỗ trợ áp dụng thủ công thẻ Honeytoken cho tài khoản người dùng. Tài khoản Honeytoken đóng vai trò là cái bẫy cho những kẻ độc hại; xác thực liên quan đến một thường tạo ra một cảnh báo.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-357', 'sc-200', 357, 'Solution: In Azure AD Identity Protection, you configure the sign-in risk policy.  
  
Does this meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], 'Các tài khoản nhằm mục đích bẫy kẻ độc hại phải được đặt cấu hình làm tài khoản mã thông báo mật ong trong Bộ bảo vệ danh tính Microsoft. Chính sách rủi ro khi đăng nhập trong Azure AD Identity Protection đánh giá và khắc phục các lần đăng nhập rủi ro chứ không phải cấu hình tài khoản honeytoken.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-358', 'sc-200', 358, 'Solution: You add the accounts to an Active Directory group, then add that group as a Sensitive group.  
  
Does this meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], 'Tài khoản Honeytoken phải được gắn thẻ là Honeytoken để làm bẫy cho những kẻ độc hại; xác thực được liên kết với tài khoản honeytoken sẽ kích hoạt cảnh báo. Thẻ nhạy cảm được sử dụng để phát hiện phụ thuộc vào trạng thái nhạy cảm của thực thể và không định cấu hình tài khoản dưới dạng mật ong.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-359', 'sc-200', 359, 'Solution: You add each account as a Sensitive account.  
  
Does this fulfill the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], 'Bộ bảo vệ danh tính Microsoft sử dụng tài khoản mã thông báo mật ong làm bẫy cho các tác nhân độc hại; xác thực vào tài khoản honeytoken thường không hoạt động sẽ kích hoạt cảnh báo. Thay vào đó, thẻ Nhạy cảm xác định các thực thể có giá trị cao và cho phép phát hiện phụ thuộc vào trạng thái nhạy cảm của thực thể, do đó, thẻ này không tạo tài khoản mồi nhử cho kẻ tấn công.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-360', 'sc-200', 360, 'You have a Microsoft Sentinel workspace.  
  
You need to determine which rules detect advanced multistage attacks consisting of two or more alerts or activities. The solution must minimize administrative effort.  
  
Which rule type should you query?', '[{"key":"A","text":"Fusion"},{"key":"B","text":"Microsoft Security"},{"key":"C","text":"ML Behavior Analytics"},{"key":"D","text":"Scheduled"}]'::jsonb, ARRAY['A']::text[], 'Fusion là loại quy tắc phân tích và công cụ tương quan được tích hợp sẵn của Microsoft Sentinel để tự động phát hiện các cuộc tấn công đa tầng nâng cao. Nó liên quan đến các hành vi bất thường và hoạt động đáng ngờ trong các giai đoạn của cuộc tấn công và tạo ra các sự cố bao gồm hai cảnh báo hoặc hoạt động trở lên. Fusion được bật theo mặc định nên yêu cầu quản trị tối thiểu.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-361', 'sc-200', 361, 'You have an Azure Storage account that multiple Azure Function apps will access while an application is being developed.  
  
You need to hide Azure Defender alerts for the storage account.  
  
Which entity type and field should be used in a suppression rule?', '[]'::jsonb, ARRAY[]::text[], 'Tài khoản Azure Storage là tài nguyên Azure. Quy tắc ngăn chặn của Bộ bảo vệ cho đám mây có thể xác định phạm vi cảnh báo cho một tài nguyên cụ thể theo ID tài nguyên của tài nguyên đó, do đó, điều kiện thực thể phù hợp là Tài nguyên Azure với trường Id tài nguyên.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-362', 'sc-200', 362, 'You have a Microsoft 365 E5 subscription that contains the devices shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783746022293-oqr2adde.png)  
  
You are assessing the use of custom indicators of compromise (IoCs) in Defender for Endpoint.  
  
On which devices can you use custom IoCs?', '[{"key":"A","text":"Device1 only"},{"key":"B","text":"Device2 and Device4 only"},{"key":"C","text":"Device1 and Device3 only"},{"key":"D","text":"Device1, Device2, and Device3 only"},{"key":"E","text":"Device1, Device2, Device3, and Device4"}]'::jsonb, ARRAY['D']::text[], 'Các chỉ báo tùy chỉnh được hỗ trợ trên các điểm cuối Windows 11, Windows Server 2019 và Linux được tích hợp vào Bộ bảo vệ Microsoft dành cho Điểm cuối. Do đó, Device1, Device2 và Device3 tích hợp có thể sử dụng chúng. Đăng ký Intune không phải là điều kiện tiên quyết, trong khi Device4 không được tích hợp vào Defender cho Endpoint.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783746022293-oqr2adde.png', 'published'),
  ('sc200-363', 'sc-200', 363, 'You have a Microsoft 365 subscription that includes a user named User1 and uses Microsoft Defender XDR.  
  
You suspect User1 of suspicious activity.  
  
You need to use the Microsoft Graph security API to query data for every suspicious activity detected. The solution must retrieve only the id, title, severity, and createdDateTime fields.  
  
How should you complete the query?', '[]'::jsonb, ARRAY[]::text[], 'Bộ sưu tập Alert_v2 liệt kê các tài nguyên cảnh báo bảo mật Microsoft Graph được tạo để theo dõi các hoạt động đáng ngờ. Tùy chọn truy vấn $select OData giới hạn các thuộc tính trả về id, tiêu đề, mức độ nghiêm trọng và createDateTime; $expand truy xuất các tài nguyên liên quan, trong khi $orderby chỉ kiểm soát thứ tự sắp xếp.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-364', 'sc-200', 364, 'You have an Azure subscription that uses Microsoft Defender for Cloud.  
  
You need to build a workflow that sends a Microsoft Teams message to the company IT department whenever a new Microsoft Secure Score action is generated.  
  
Which three actions should you carry out in sequence?', '{"statements":[{"id":"slot1","text":"Slot 1:","correctAnswer":"B"},{"id":"slot2","text":"Slot 2:","correctAnswer":"E"},{"id":"slot3","text":"Slot 3:","correctAnswer":"D"}],"choices":[{"key":"A","text":"Create an Azure logic app that includes the Defender for Cloud regulatory compliance assessment trigger."},{"key":"B","text":"Configure workflow automation."},{"key":"C","text":"Create an Azure logic app that includes the Defender for Cloud alert trigger."},{"key":"D","text":"Create an Azure logic app that includes the Defender for Cloud recommendation trigger."},{"key":"E","text":"Configure a trigger condition."}]}'::jsonb, ARRAY['slot1=B', 'slot2=E', 'slot3=D']::text[], 'Bạn bắt đầu bằng cách thêm tính năng tự động hóa quy trình công việc mới trong Defender for Cloud và xác định phạm vi của nó với điều kiện kích hoạt được đặt thành loại dữ liệu Đề xuất để nó kích hoạt bất cứ khi nào đề xuất Điểm Bảo mật mới được tạo. Sau đó, hành động tự động hóa sẽ gọi Ứng dụng Azure Logic, ứng dụng này phải sử dụng trình kích hoạt đề xuất Defender for Cloud (không phải trình kích hoạt cảnh báo hoặc trình kích hoạt đánh giá tuân thủ quy định, phản hồi các loại sự kiện khác nhau) để đăng thông báo của Nhóm.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-365', 'sc-200', 365, 'Your company operates an on-premises network that uses Microsoft Defender for Identity.  
  
The company’s Microsoft Secure Score includes a security assessment for unsecure Kerberos delegation.  
  
You need to remediate the security risk.  
  
What should you do?', '[{"key":"A","text":"Disable legacy protocols on the computers listed as exposed entities."},{"key":"B","text":"Enforce LDAP signing on the computers listed as exposed entities."},{"key":"C","text":"Modify the properties of the computer objects listed as exposed entities."},{"key":"D","text":"Install the Local Administrator Password Solution (LAPS) extension on the computers listed as exposed entities."}]'::jsonb, ARRAY['C']::text[], 'Việc ủy ​​quyền Kerberos không an toàn được khắc phục bằng cách thay đổi cài đặt liên quan đến ủy quyền trên các đối tượng máy tính Active Directory bị ảnh hưởng—ví dụ: xóa ủy quyền không bị ràng buộc, vô hiệu hóa ủy quyền hoặc sử dụng ủy quyền bị ràng buộc. Bộ bảo vệ danh tính Microsoft xác định các thực thể bị lộ và đề xuất biện pháp khắc phục phù hợp với loại ủy nhiệm.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-366', 'sc-200', 366, 'You have a Microsoft 365 subscription that uses Microsoft Defender XDR. The subscription includes 100 Windows 11 devices running Microsoft Defender Antivirus. The devices are in one Microsoft Defender for Endpoint device group.  
  
You need to ensure that potentially malicious files can be blocked on the devices by using the **Allow or block file** option.  
  
In the Microsoft Defender portal, you set **Allow or block file** to **On**.  
  
What should you do next?', '[{"key":"A","text":"Configure devices automated response"},{"key":"B","text":"Add indicators."},{"key":"C","text":"Create asset rues"},{"key":"D","text":"Assign remediation levels."}]'::jsonb, ARRAY['B']::text[], 'Việc bật **Cho phép hoặc chặn tệp** sẽ kích hoạt khả năng này nhưng một tệp phải được thêm rõ ràng làm chỉ báo và chỉ định hành động Chặn cho tính năng Chống vi-rút của Bộ bảo vệ Microsoft để chặn tệp đó. Các chỉ báo tệp có thể được đặt trong phạm vi nhóm thiết bị Defender for Endpoint.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-367', 'sc-200', 367, 'You have an Azure subscription with Microsoft Defender for Cloud enabled.  
  
You have a virtual machine running Windows 10 with the Log Analytics agent installed.  
  
You need to simulate an attack on the virtual machine that generates an alert.  
  
What should you do first?', '[{"key":"A","text":"Run the Log Analytics Troubleshooting Tool."},{"key":"B","text":"Copy and executable and rename the file as ASC_AlertTest_662jfi039N.exe."},{"key":"C","text":"Modify the settings of the Microsoft Monitoring Agent."},{"key":"D","text":"Run the MMASetup executable and specify the –foo argument."}]'::jsonb, ARRAY['B']::text[], 'Quy trình xác thực cảnh báo của Defender dành cho Cloud Windows sử dụng tệp thực thi thử nghiệm được đổi tên thành `ASC_AlertTest_662jfi039N.exe`. Tên tệp thử nghiệm được công nhận sẽ khiến tác nhân giám sát được cài đặt báo cáo kết quả đo từ xa, từ đó kích hoạt cảnh báo thử nghiệm của Bộ bảo vệ cho Đám mây.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-368', 'sc-200', 368, 'You have a Microsoft 365 subscription that uses Microsoft Defender XDR.  
  
You need to implement deception rules. The solution must ensure that you can limit the scope of the rules.  
  
What should you create first?', '[{"key":"A","text":"device groups"},{"key":"B","text":"device tags"},{"key":"C","text":"honeytoken entity tags"},{"key":"D","text":"sensitive entity tags"}]'::jsonb, ARRAY['B']::text[], 'Trước tiên, thẻ thiết bị phải được tạo để áp dụng các quy tắc lừa dối cho các thiết bị cụ thể. Cấu hình quy tắc lừa đảo cho phép xác định phạm vi thông qua ''Thiết bị có thẻ cụ thể'', cung cấp khả năng kiểm soát chi tiết về thiết bị nào lưu trữ mồi nhử lừa đảo. Các nhóm thiết bị tuy hữu ích cho tổ chức nhưng không thể trực tiếp xác định phạm vi triển khai quy tắc lừa đảo. Thẻ mật ong và thẻ thực thể nhạy cảm phục vụ các mục đích khác nhau trong quản lý thông tin về mối đe dọa.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-369', 'sc-200', 369, 'An Azure Defender for Key Vault alert is received.  
  
The alert is found to originate from several suspicious IP addresses. You need to reduce the risk of Key Vault secrets being exposed while the issue is investigated. The solution must be deployed as quickly as possible and minimize effects on legitimate users.  
  
What should you do first?', '[{"key":"A","text":"Modify the access control settings for the key vault."},{"key":"B","text":"Enable the Key Vault firewall."},{"key":"C","text":"Create an application security group."},{"key":"D","text":"Modify the access policy for the key vault."}]'::jsonb, ARRAY['B']::text[], 'Tường lửa Key Vault có thể từ chối quyền truy cập vào mặt phẳng dữ liệu theo mặc định và chỉ cho phép các dải IP công cộng hoặc mạng ảo được phê duyệt. Điều này nhanh chóng chặn các địa chỉ IP đáng ngờ trong khi người dùng hợp pháp có thể giữ quyền truy cập thông qua các quy tắc cho phép được định cấu hình. Chính sách truy cập và cài đặt kiểm soát truy cập chi phối danh tính được ủy quyền chứ không phải ranh giới mạng nguồn.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-370', 'sc-200', 370, 'You have a Microsoft Sentinel workspace.  
  
You receive multiple alerts for failed sign-in attempts against an account.  
  
You determine that the alerts are false positives.  
  
You need to stop any additional failed sign-in alerts from being generated for the account. The solution must meet the following requirements:  
  
- Ensure failed sign-in alerts continue to be generated for other accounts.  
- Minimize administrative effort.  
  
What should you do?', '[{"key":"A","text":"Modify the analytics rule."},{"key":"B","text":"Create a watchlist."},{"key":"C","text":"Add an activity template to the entity behavior."},{"key":"D","text":"Create an automation rule."}]'::jsonb, ARRAY['A']::text[], 'Quy tắc phân tích xác định xem cảnh báo đăng nhập không thành công có được tạo hay không. Sửa đổi truy vấn hoặc logic lọc của nó để loại trừ tài khoản được xác định; điều này sẽ ngăn chặn các cảnh báo trong tương lai cho tài khoản đó trong khi vẫn duy trì khả năng phát hiện quy tắc cho tất cả các tài khoản khác. Quy tắc tự động hóa chỉ chạy sau khi cảnh báo hoặc sự cố được tạo nên chúng không thể tự ngăn cảnh báo.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-371', 'sc-200', 371, 'You have an Azure subscription.  
  
You plan to implement a Microsoft Sentinel workspace and expect to ingest 20 GB of security-log data each day.  
  
You must configure storage for the workspace to meet these requirements:  
  
- Minimize costs for daily ingested data.  
- Maximize the data-retention period without extra cost.  
  
What should you do for each requirement?', '[]'::jsonb, ARRAY[]::text[], 'Mức giá cam kết bắt đầu ở mức 100 GB/ngày, do đó, không gian làm việc chỉ sử dụng 20 GB/ngày sẽ giảm thiểu chi phí truyền dữ liệu bằng PAYG, tính phí theo mức sử dụng thực tế. Microsoft Sentinel bao gồm 90 ngày lưu giữ ở cấp phân tích đầu tiên; việc lưu giữ dữ liệu quá 90 ngày sẽ phải chịu phí lưu giữ.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-372', 'sc-200', 372, 'You have a Microsoft 365 tenant and a known threat file named File1.docx.  
  
You need to stop users from downloading File1.docx.  
  
What should you do?', '[{"key":"A","text":"From the Microsoft Defender portal, add an indicator."},{"key":"B","text":"From the Microsoft Purview portal, create a data loss prevention (DLP) policy."},{"key":"C","text":"From the Microsoft Purview portal, create a sensitivity label."},{"key":"D","text":"From the Microsoft Defender portal configure an automated investigation."}]'::jsonb, ARRAY['A']::text[], 'Chỉ báo tệp trong cổng Microsoft Defender có thể tạo một mục nhập khối cho hàm băm SHA-256 của tệp, ngăn không cho gửi hoặc truy cập tệp độc hại đã biết thông qua quy trình bảo vệ hiện hành của Defender. Chính sách DLP và nhãn nhạy cảm phân loại hoặc hạn chế dữ liệu nhạy cảm, không phải tệp mối đe dọa đã biết, trong khi bản thân việc điều tra tự động không tạo ra khối bắt buộc.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-373', 'sc-200', 373, 'You have a Microsoft 365 subscription that uses Microsoft Defender for Endpoint and contains a user named User1 and a Microsoft 365 group named Group1. All users are assigned a Defender for Endpoint Plan 1 license.  
  
You enable Microsoft Defender XDR Unified role-based access control (RBAC) for Endpoints & Vulnerability Management.  
  
You need to ensure that User1 can configure alerts that will send email notifications to Group1. The solution must follow the principle of least privilege.  
  
Which permissions should you assign to User1?', '[{"key":"A","text":"Defender Vulnerability Management - Remediation handling"},{"key":"B","text":"Alerts investigation"},{"key":"C","text":"Live response capabilities: Basic"},{"key":"D","text":"Manage security settings"}]'::jsonb, ARRAY['D']::text[], 'Để định cấu hình thông báo email cho cảnh báo trong Microsoft Defender XDR, Người dùng1 cần có quyền ''Quản lý cài đặt bảo mật''. Quyền này đặc biệt cho phép cấu hình người nhận thông báo cảnh báo và cài đặt phân phối email. Quyền điều tra cảnh báo cho phép xem và phản hồi cảnh báo nhưng không bao gồm quyền cấu hình cho cài đặt thông báo.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-374', 'sc-200', 374, 'You plan to review Microsoft Defender for Cloud alerts by using a third-party security information and event management (SIEM) solution.  
  
You need to locate alerts that indicate the use of the Privilege Escalation MITRE ATT&CK tactic.  
  
Which JSON key should you search?', '[{"key":"A","text":"Description"},{"key":"B","text":"Intent"},{"key":"C","text":"ExtendedProperies"},{"key":"D","text":"Entities"}]'::jsonb, ARRAY['B']::text[], 'Thuộc tính cảnh báo `intent` xác định mục đích liên quan đến chuỗi tiêu diệt của cảnh báo Microsoft Defender for Cloud. Nâng cao đặc quyền là một giá trị mục đích được hỗ trợ phù hợp với chiến thuật MITER ATT&CK.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-375', 'sc-200', 375, 'You have an Azure subscription named Sub1 and a Microsoft 365 subscription. Sub1 is linked to an Azure Active Directory (Azure AD) tenant named contoso.com.  
  
You create an Azure Sentinel workspace named workspace1. In workspace1, you activate an Azure AD connector for contoso.com and an Office 365 connector for the Microsoft 365 subscription.  
  
You need to use the Fusion rule to detect multistage attacks that include suspicious sign-ins to contoso.com followed by anomalous Microsoft Office 365 activity.  
  
Which two actions should you take? Each correct answer represents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Create custom rule based on the Office 365 connector templates."},{"key":"B","text":"Create a Microsoft incident creation rule based on Azure Security Center."},{"key":"C","text":"Create a Microsoft Cloud App Security connector."},{"key":"D","text":"Create an Azure AD Identity Protection connector."}]'::jsonb, ARRAY['C', 'D']::text[], 'Các tình huống kết hợp tương quan giữa hoạt động đăng nhập Microsoft Entra ID đáng ngờ với hoạt động bất thường của Microsoft 365 yêu cầu dữ liệu từ cả Microsoft Entra ID Protection và Ứng dụng Microsoft Defender for Cloud (trước đây là Microsoft Cloud App Security). Trình kết nối Bảo vệ danh tính cung cấp cảnh báo đăng nhập đáng ngờ và trình kết nối Bảo mật ứng dụng đám mây cung cấp cảnh báo hoạt động bất thường trên đám mây và Office 365.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-376', 'sc-200', 376, 'You have a Microsoft 365 subscription that uses Microsoft Defender XDR. The subscription includes 500 Windows 11 devices onboarded to Microsoft Defender for Endpoint.  
  
You identify unauthorized changes to the membership of the devices’ Administrators group.  
  
You need to configure a solution that meets these requirements:  
  
- Every hour, check the Administrators group membership on each endpoint.  
- When a change in Administrators group membership is detected, create an incident in Microsoft Defender XDR.  
  
What should you create first?', '[{"key":"A","text":"a device group"},{"key":"B","text":"an advanced hunting query"},{"key":"C","text":"an alert tuning rule"},{"key":"D","text":"a detection rule"}]'::jsonb, ARRAY['B']::text[], 'Quy tắc phát hiện tùy chỉnh XDR của Bộ bảo vệ Microsoft dựa trên các truy vấn tìm kiếm nâng cao. Truy vấn cung cấp logic để xác định các thay đổi về tư cách thành viên nhóm Quản trị viên cục bộ; sau đó, quy tắc phát hiện tùy chỉnh có thể chạy truy vấn đó mỗi giờ và tạo ra các cảnh báo có liên quan đến các sự cố.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-377', 'sc-200', 377, 'You must use an Azure Sentinel analytics rule to search for particular criteria in Amazon Web Services (AWS) logs and generate incidents.  
  
Which three actions should you take, in sequence?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"C"},{"id":"step2","text":"Slot 2:","correctAnswer":"E"},{"id":"step3","text":"Slot 3:","correctAnswer":"D"}],"choices":[{"key":"A","text":"Create a rule by using the Changes to Amazon VPC settings rule template"},{"key":"B","text":"From Analytics in Azure Sentinel, create a Microsoft incident creation rule"},{"key":"C","text":"Add the Amazon Web Services connector"},{"key":"D","text":"Set the alert logic"},{"key":"E","text":"From Analytics in Azure Sentinel, create a custom analytics rule that uses a scheduled query"},{"key":"F","text":"Select a Microsoft security service"},{"key":"G","text":"Add the Syslog connector"}]}'::jsonb, ARRAY['step1=C', 'step2=E', 'step3=D']::text[], 'Trình kết nối Dịch vụ web của Amazon nhập nhật ký dịch vụ AWS vào Microsoft Sentinel. Quy tắc phân tích truy vấn theo lịch trình tùy chỉnh sẽ tìm kiếm các nhật ký đó theo định kỳ và logic cảnh báo của nó sẽ xác định thời điểm kết quả truy vấn kích hoạt cảnh báo; cảnh báo quy tắc phân tích có thể tạo ra sự cố Sentinel.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-378', 'sc-200', 378, 'You have a Microsoft 365 E5 subscription containing Windows 11 and Linux CentOS devices.  
  
In Microsoft Defender XDR, Deception is turned on.  
  
You plan to create a deception rule that uses a custom lure.  
  
You need to specify the file type and planting path for the custom lure. What should you specify?', '[]'::jsonb, ARRAY[]::text[], 'Trong quy tắc lừa đảo XDR của Microsoft Defender, mồi nhử tùy chỉnh có thể là bất kỳ loại tệp nào ngoại trừ.DLL và.EXE (tối đa 10 MB), loại tệp này sẽ loại bỏ ngay EXE; trong số các lựa chọn còn lại BIN là mồi nhử nhị phân đa nền tảng, hợp lệ, trong khi EXE rõ ràng không được phép. Đối với đường dẫn trồng cây, bạn có thể sử dụng mã thông báo {HOME}, mã thông báo này sẽ phân giải vào thư mục chính của người dùng đang hoạt động và phải xuất hiện ở đầu đường dẫn; \server1\share1 là một chia sẻ mạng UNC và /usr/tmp là một đường dẫn Linux, cả hai đường dẫn này đều không phải là vị trí đặt mồi nhử được hỗ trợ (mồi nhử được trồng trên các thiết bị khách Windows trong phạm vi). Do đó, loại tệp là BIN và đường dẫn trồng là {HOME}.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-379', 'sc-200', 379, 'Solution: Enable Azure Arc and onboard the virtual machines to Azure Arc.  
  
Does this satisfy the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[], 'Azure Arc cho phép các máy ảo AWS được kết nối dưới dạng máy chủ hỗ trợ Azure Arc, cho phép Microsoft Defender for Cloud triển khai các tác nhân hoặc tiện ích mở rộng cần thiết thông qua tính năng tự động cung cấp và giám sát trạng thái bảo mật của chúng.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-380', 'sc-200', 380, 'Solution: Manually install the Log Analytics agent on the virtual machines.  
  
Does this achieve the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[], 'Tác nhân Log Analytics thu thập các cấu hình và nhật ký sự kiện liên quan đến bảo mật từ các máy ảo và gửi dữ liệu đến không gian làm việc Log Analytics để giám sát bảo mật. Việc triển khai tác nhân theo cách thủ công sẽ cho phép bộ sưu tập đó khi việc triển khai tự động không được sử dụng hoặc chưa hoàn thành.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-381', 'sc-200', 381, 'You have a Microsoft 365 subscription.  
  
You need to identify every security principal that submitted requests to modify or delete groups.  
  
How should you complete the KQL query?', '[]'::jsonb, ARRAY[]::text[], 'RequestUri xác định tài nguyên được nhắm mục tiêu theo từng yêu cầu Microsoft Graph, trong khiRequestMethod ghi lại động từ HTTP của nó. Việc lọc URI nhóm và loại trừ GET sẽ loại bỏ hoạt động chỉ đọc, để lại các yêu cầu thay đổi hoặc xóa. AppId, UserId và ServicePrincipalId xác định ứng dụng, người dùng và service principal đã thực hiện các yêu cầu đó.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-382', 'sc-200', 382, 'You need to configure DC1 to fulfill the business requirements.  
  
Which four actions should you complete, in order?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"C"},{"id":"step2","text":"Slot 2:","correctAnswer":"B"},{"id":"step3","text":"Slot 3:","correctAnswer":"A"},{"id":"step4","text":"Slot 4:","correctAnswer":"D"}],"choices":[{"key":"A","text":"Provide domain administrator credentials to the litware.com Active Directory domain."},{"key":"B","text":"Create an instance of Microsoft Defender for Identity."},{"key":"C","text":"Provide global administrator credentials to the litware.com Azure AD tenant."},{"key":"D","text":"Install the sensor on DC1."},{"key":"E","text":"Install the standalone sensor on DC1."}]}'::jsonb, ARRAY['step1=C', 'step2=B', 'step3=A', 'step4=D']::text[], 'Việc triển khai Bộ bảo vệ danh tính được tạo trong đối tượng thuê Microsoft Entra ID trước khi tích hợp cảm biến. Cảm biến cần thông tin xác thực thư mục để truy vấn miền Active Directory và cảm biến Defender for Identity tiêu chuẩn được cài đặt trực tiếp trên bộ điều khiển miền chẳng hạn như DC1. Cảm biến độc lập dành cho một máy chủ riêng biệt giám sát lưu lượng mạng chứ không phải để cài đặt trên chính bộ điều khiển miền.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-383', 'sc-200', 383, 'You have a Microsoft 365 E5 subscription containing 200 Windows 10 devices enrolled in Microsoft Defender for Endpoint.  
  
You must ensure that users can access the devices through a remote shell connection directly from the Microsoft 365 Defender portal. The solution must use the principle of least privilege.  
  
What should you do in the Microsoft 365 Defender portal?', '[]'::jsonb, ARRAY[]::text[], 'Phản hồi trực tiếp là lớp vỏ tương tác dựa trên đám mây dành cho Bộ bảo vệ Microsoft dành cho Điểm cuối, do đó, việc bật nó sẽ cung cấp quyền truy cập lớp vỏ từ xa từ cổng thông tin của Bộ bảo vệ. Nhóm thiết bị xác định phạm vi thiết bị mà người dùng có thể truy cập. Việc đặt nhóm thành phản hồi tự động No sẽ tránh đưa ra các hành động điều tra hoặc khắc phục tự động không bắt buộc đối với Phản hồi trực tiếp.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-384', 'sc-200', 384, 'You have a Microsoft 365 E5 subscription that uses Microsoft Defender 365.  
  
Your network has an on-premises Active Directory Domain Services (AD DS) domain synchronized with Azure AD.  
  
You need to identify LDAP requests by AD DS users that enumerate AD DS objects.  
  
How should you complete the KQL query?', '[]'::jsonb, ARRAY[]::text[], 'IdentityQueryEvents ghi lại các truy vấn đối với các đối tượng Active Directory, bao gồm cả hoạt động LDAP. Lọc bằng isnoempty(AccountSid) giữ lại các sự kiện được liên kết với SID tài khoản người dùng, xác định các yêu cầu LDAP do người dùng AD DS thực hiện.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-385', 'sc-200', 385, 'You have a Microsoft 365 subscription.  
  
You have the following KQL query.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783741891335-bitlvt36.png)  
  
You need to ensure that you can create a Microsoft Defender XDR custom detection rule by using this query.  
  
What should you add to the query?', '[{"key":"A","text":"| summarize (Timestamp, ReportId)=arg_max(Timestamp, ReportId), count() by DeviceId"},{"key":"B","text":"| summarize (ReportId)=make_set(ReportId), count() by DeviceId"},{"key":"C","text":"| summarize (Timestamp, DeviceName)=arg_min(Timestamp, DeviceName), count() by DeviceId"},{"key":"D","text":"| summarize (Timestamp)=range(Timestamp), count() by DeviceId"}]'::jsonb, ARRAY['A']::text[], 'Truy vấn phát hiện tùy chỉnh của Bộ bảo vệ Microsoft cho Điểm cuối phải trả về `Timestamp`, `DeviceId` và `ReportId` từ cùng một sự kiện. Việc nhóm theo `DeviceId` sẽ giữ lại mã định danh đó, trong khi `arg_max(Timestamp, ReportId)` trả về dấu thời gian sự kiện mới nhất và ID báo cáo trùng khớp của nó. Microsoft ghi lại mẫu tổng hợp chính xác này cho các truy vấn phát hiện phần mềm chống vi-rút.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783741891335-bitlvt36.png', 'published'),
  ('sc200-386', 'sc-200', 386, 'You have an Azure subscription that uses Microsoft Sentinel.  
  
You need to reduce the administrative effort needed to respond to incidents and remediate security threats detected by Microsoft Sentinel.  
  
Which two features should you use? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Microsoft Sentinel bookmarks"},{"key":"B","text":"Azure Automation runbooks"},{"key":"C","text":"Microsoft Sentinel automation rules"},{"key":"D","text":"Microsoft Sentinel playbooks"},{"key":"E","text":"Azure Functions apps"}]'::jsonb, ARRAY['C', 'D']::text[], 'Các quy tắc tự động hóa Microsoft Sentinel quản lý tập trung việc xử lý sự cố tự động và có thể chạy một sổ tay khi đáp ứng các điều kiện cảnh báo hoặc sự cố đã xác định. Sách hướng dẫn Microsoft Sentinel cung cấp logic quy trình phản hồi và khắc phục, cho phép các hành động tự động và được sắp xếp chống lại các mối đe dọa.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-387', 'sc-200', 387, 'You have a Microsoft 365 E5 subscription containing two groups, Group1 and Group2, and it uses Microsoft Copilot for Security.  
  
You must configure Copilot for Security role assignments to meet these requirements:  
  
- Ensure that Group1 members can run prompts and respond to Microsoft Defender XDR security incidents.  
- Ensure that Group2 members can run prompts.  
- Follow the principle of least privilege.  
  
You remove Everyone from the Copilot Contributor role.  
  
Which two actions should you perform next? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Assign the Security Operator role to Group1."},{"key":"B","text":"Assign the Copilot Owner role to Group2."},{"key":"C","text":"Assign the Copilot Owner role to Group1"},{"key":"D","text":"Assign the Security Operator role to Group2."},{"key":"E","text":"Assign the Copilot Contributor role to Group2."}]'::jsonb, ARRAY['A', 'E']::text[], 'Vai trò Người vận hành bảo mật cung cấp cho Nhóm1 các quyền XDR của Bộ bảo vệ Microsoft cần thiết để ứng phó với các sự cố bảo mật và cung cấp quyền truy cập Security Copilot thông qua các vai trò bảo mật được đề xuất của Microsoft. Vai trò Người đóng góp Copilot cung cấp cho Group2 quyền truy cập để chạy các lời nhắc mà không cần có đặc quyền quản trị trên toàn đối tượng thuê do Chủ sở hữu Copilot cấp.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-388', 'sc-200', 388, 'You deploy Azure Sentinel.  
  
You need to implement Azure Sentinel connectors to monitor Microsoft Teams and Linux virtual machines in Azure. The solution must minimize administrative effort.  
  
Which data connector type should you use for each workload?', '[]'::jsonb, ARRAY[]::text[], 'Trình kết nối Office 365 nhập dữ liệu kiểm tra Office 365, bao gồm các hoạt động của Microsoft Teams. Các máy ảo Linux tạo ra các sự kiện Syslog, vì vậy trình kết nối Syslog là trình kết nối tiêu chuẩn để ghi nhật ký bảo mật và hệ thống của chúng. Bộ sưu tập tùy chỉnh sẽ yêu cầu cấu hình bổ sung và Sự kiện bảo mật dành cho nhật ký sự kiện của Windows.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-389', 'sc-200', 389, 'You have an Azure subscription. You must delegate permissions that meet these requirements:  
  
- Enable and disable Azure Defender.  
- Apply security recommendations to a resource.  
  
The solution must follow the principle of least privilege. Which Azure Security Center role should be used for each requirement?  
  
Each role may be used once, more than once, or not at all.', '{"statements":[{"id":"enable_disable_defender","text":"Enable and disable Azure Defender:","correctAnswer":"A"},{"id":"apply_recommendations","text":"Apply security recommendations to a resource:","correctAnswer":"B"}],"choices":[{"key":"A","text":"Security Admin"},{"key":"B","text":"Resource Group Owner"},{"key":"C","text":"Subscription Contributor"},{"key":"D","text":"Subscription Owner"}]}'::jsonb, ARRAY['enable_disable_defender=A', 'apply_recommendations=B']::text[], 'Quản trị viên bảo mật có thể bật và tắt các gói Microsoft Defender for Cloud. Việc áp dụng đề xuất bảo mật bằng cách sử dụng Fix yêu cầu quyền của Người đóng góp hoặc Chủ sở hữu ở phạm vi nhóm tài nguyên; Chủ sở hữu nhóm tài nguyên cung cấp khả năng đó mà không cần cấp các quyền rộng hơn cho toàn bộ đăng ký.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-390', 'sc-200', 390, 'Your company has one office in Istanbul and a Microsoft 365 subscription.  
  
The company intends to use Conditional Access policies to enforce multi-factor authentication (MFA).  
  
You need to require MFA for every user who works remotely.  
  
What should the solution include?', '[{"key":"A","text":"a fraud alert"},{"key":"B","text":"a user risk policy"},{"key":"C","text":"a named location"},{"key":"D","text":"a sign-in user policy"}]'::jsonb, ARRAY['C']::text[], 'Vị trí được đặt tên xác định phạm vi IP công cộng của mạng văn phòng và có thể được đánh dấu là đáng tin cậy. Chính sách MFA truy cập có điều kiện có thể bao gồm bất kỳ mạng hoặc vị trí nào trong khi loại trừ vị trí văn phòng đáng tin cậy đó, yêu cầu MFA cho người dùng đăng nhập từ xa. [Microsoft Learn: Require MFA for all users with Conditional Access](https://learn.microsoft.com/en-us/entra/identity/conditional-access/policy-all-users-mfa-strength)', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-391', 'sc-200', 391, 'You have a Microsoft Sentinel workspace with User and Entity Behavior Analytics (UEBA) enabled for Signin Logs.  
  
You need to make sure failed interactive sign-ins are detected while minimizing administrative effort.  
  
What should you use?', '[{"key":"A","text":"a scheduled alert query"},{"key":"B","text":"the Activity Log data connector"},{"key":"C","text":"a UEBA activity template"},{"key":"D","text":"a hunting query"}]'::jsonb, ARRAY['C']::text[], 'Khi UEBA được bật trên nguồn dữ liệu Nhật ký đăng nhập, Microsoft Sentinel có thể áp dụng các mẫu hoạt động UEBA tích hợp sẵn, đã nhận dạng và các sự kiện cơ bản như đăng nhập tương tác không thành công mà không cần bất kỳ tác giả truy vấn tùy chỉnh nào. Thay vào đó, một truy vấn cảnh báo hoặc truy vấn tìm kiếm đã lên lịch sẽ yêu cầu viết và duy trì KQL tùy chỉnh, đồng thời trình kết nối Nhật ký hoạt động sẽ sử dụng hoạt động đăng ký Azure thay vì hành vi đăng nhập.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-392', 'sc-200', 392, 'You have a Microsoft 365 E3 subscription containing two users named User1 and User2.  
  
A phishing alert indicates that User1 may have been compromised 240 days ago.  
  
User2 runs an audit search of User1’s activity and does **not** find any `MailItemsAccessed` events for User1.  
  
You need to ensure that User2 can query User1’s audit data for future events up to 240 days old. The solution must minimize costs.  
  
What should you do?', '[{"key":"A","text":"Assign User1 a Microsoft 365 E5 license."},{"key":"B","text":"Assign User1 and User2 a Microsoft 365 E5 license."},{"key":"C","text":"Add User2 to the Audit Reader role group."},{"key":"D","text":"Assign User2 a Microsoft 365 E5 license."}]'::jsonb, ARRAY['A']::text[], 'Hồ sơ kiểm tra đối với người dùng không sử dụng E5 được lưu giữ trong 180 ngày. Để lưu giữ nhật ký kiểm tra trong hơn 180 ngày và tối đa một năm, người dùng tạo hoạt động được kiểm tra phải có giấy phép Microsoft 365 E5 (hoặc giấy phép Audit Premium đủ điều kiện). Do đó, việc cấp phép cho Người dùng1 sẽ lưu giữ dữ liệu kiểm tra Exchange trong tương lai của Người dùng1 đủ lâu để tìm kiếm các sự kiện cách đây 240 ngày; việc cấp phép cho người dùng tìm kiếm không mở rộng việc lưu giữ hồ sơ của Người dùng1.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-393', 'sc-200', 393, 'You have an Azure subscription that uses Azure Defender.  
  
You plan to use Azure Security Center workflow automation to respond to Azure Defender threat alerts.  
  
You need to create an Azure policy that automatically performs threat remediation. What should the solution include?', '[]'::jsonb, ARRAY[]::text[], 'Hiệu ứng DeployIfNotExists chạy triển khai mẫu khi tài nguyên hoặc cấu hình được xác định không tồn tại, cho phép khắc phục theo chính sách. Tự động hóa quy trình làm việc phản hồi cảnh báo của Trung tâm bảo mật sử dụng sổ tay Ứng dụng Azure Logic với trình kích hoạt phản hồi cảnh báo của Trung tâm bảo mật để thực hiện hành động khắc phục.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-394', 'sc-200', 394, 'Create an advanced hunting query to investigate the executive-team issue.  
  
Complete the query.', '[]'::jsonb, ARRAY[]::text[], 'Tình huống hỏi về hoạt động của tệp trong các ứng dụng được bảo vệ bởi Ứng dụng Microsoft Defender for Cloud. `CloudAppEvents` chứa các sự kiện liên quan đến tài khoản và đối tượng trong Office 365 cũng như các ứng dụng đám mây được kết nối khác, bao gồm tài khoản và dữ liệu hành động mà truy vấn cần. `count()` đếm các bản ghi hoạt động trong mỗi nhóm tóm tắt để dòng cuối cùng có thể giữ lại các tệp có nhiều hơn năm hoạt động trong hai ngày trước đó.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-395', 'sc-200', 395, 'You have a Microsoft 365 E5 subscription and plan to perform cross-domain investigations by using Microsoft 365 Defender.  
  
You need to create an advanced hunting query that identifies devices affected by a malicious email attachment. Complete the query by selecting the appropriate options.', '[]'::jsonb, ARRAY[]::text[], '`join` tương quan với `EmailAttachmentInfo` với kết quả `DeviceFileEvents` trong ngoặc đơn theo hàm băm SHA256 được chia sẻ. Bên trong dấu ngoặc đơn, `project FileName, SHA256` chỉ giữ lại các cột cần thiết cho phép nối. `project` cuối cùng chọn các trường email, tệp và thiết bị được yêu cầu từ các hàng kết hợp.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-396', 'sc-200', 396, 'You have an Azure subscription containing a Microsoft Sentinel workspace.  
  
You need to create and customize a workbook for the Microsoft Entra ID Audit Logs.  
  
Which three actions should you take, in order?', '{"statements":[{"id":"order1","text":"1","correctAnswer":"B"},{"id":"order2","text":"2","correctAnswer":"E"},{"id":"order3","text":"3","correctAnswer":"A"}],"choices":[{"key":"A","text":"From Workbooks, select Microsoft Entra ID Audit logs and then select Save."},{"key":"B","text":"From Content hub, install the Microsoft Entra ID solution."},{"key":"C","text":"From Workbooks, select Microsoft Entra ID Audit logs and then select View saved workbook."},{"key":"D","text":"Enable Workspace manager."},{"key":"E","text":"From Workbooks, select Microsoft Entra ID Audit logs and then select View Template."},{"key":"F","text":"Configure a Data connector."}]}'::jsonb, ARRAY['order1=B', 'order2=E', 'order3=A']::text[], 'Sổ làm việc Nhật ký kiểm tra Microsoft Entra ID được cung cấp thông qua giải pháp Microsoft Entra ID trong trung tâm Nội dung Microsoft Sentinel. Sau khi giải pháp được cài đặt, hãy mở mẫu sổ làm việc bằng Xem mẫu. Việc lưu mẫu đó sẽ tạo một phiên bản sổ làm việc riêng biệt có thể được tùy chỉnh; Xem sổ làm việc đã lưu được sử dụng sau đó để mở phiên bản đã lưu đó.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-397', 'sc-200', 397, 'You have an Azure DevOps organization that uses Microsoft Defender for DevOps. It contains an Azure DevOps repository named Repo1 and an Azure Pipelines pipeline named Pipeline1. Pipeline1 builds and deploys code stored in Repo1.  
  
You need to ensure that, when Pipeline1 runs, Microsoft Defender for Cloud can scan the code in Repo1 for secrets.  
  
What should you install in the organization, and what should you add to Pipeline1''s YAML file?', '[]'::jsonb, ARRAY[]::text[], 'Tiện ích mở rộng Microsoft Security DevOps Azure DevOps tích hợp phân tích bảo mật vào một quy trình; nhiệm vụ Đường ống Azure của nó được khai báo trong phần YAML `steps`. Sau đó, Microsoft đã ngừng sử dụng cả tiện ích mở rộng MSCA cũ và CredScan trong Microsoft Security DevOps, nhưng sự kết hợp giữa tiện ích mở rộng và các bước là cấu hình trong quy trình dự kiến ​​cho trường hợp này.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-398', 'sc-200', 398, 'Which team''s issue can be resolved by using Microsoft Defender for Office 365?', '[{"key":"A","text":"executive"},{"key":"B","text":"marketing"},{"key":"C","text":"security"},{"key":"D","text":"sales"}]'::jsonb, ARRAY['B']::text[], 'Nhóm tiếp thị cộng tác với các nhà cung cấp bên ngoài thông qua SharePoint Online và đã phát hiện các nhà cung cấp tải phần mềm độc hại lên. Phần đính kèm An toàn của Bộ bảo vệ Microsoft dành cho Office 365 bổ sung khả năng bảo vệ cho SharePoint, OneDrive và Teams bằng cách phát hiện và chặn các tệp độc hại trong các trang web và thư viện tài liệu, nhờ đó giải quyết được sự cố của nhóm tiếp thị.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-399', 'sc-200', 399, 'Your company uses Microsoft Defender for Endpoint.  
  
The company has Microsoft Word documents containing macros. These documents are frequently used on the devices of the company''s accounting team.  
  
You need to hide false positives in the Alerts queue while maintaining the existing security posture.  
  
Which three actions should you take? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Resolve the alert automatically."},{"key":"B","text":"Hide the alert."},{"key":"C","text":"Create a suppression rule scoped to any device."},{"key":"D","text":"Create a suppression rule scoped to a device group."},{"key":"E","text":"Generate the alert."}]'::jsonb, ARRAY['B', 'D', 'E']::text[], 'Quy tắc loại bỏ có thể ẩn các cảnh báo lành tính đã biết khỏi hàng Cảnh báo. Việc đưa quy tắc vào nhóm thiết bị kế toán sẽ hạn chế ngoại lệ đối với các thiết bị sử dụng tài liệu hỗ trợ macro, trong khi vẫn duy trì khả năng hiển thị cảnh báo cho hoạt động tương tự trên các thiết bị khác. Cảnh báo dương tính giả phải được tạo trước khi có thể xác định và sử dụng nó để xác định quy tắc ngăn chặn.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-400', 'sc-200', 400, 'You have an Azure subscription that uses Microsoft Defender for Cloud.  
  
You need to filter the security alerts view to display these alerts:  
  
- Unusual user accessed a key vault  
- Log on from an unusual location  
- Impossible travel activity  
  
Which severity should you select?', '[{"key":"A","text":"Informational"},{"key":"B","text":"Low"},{"key":"C","text":"Medium"},{"key":"D","text":"High"}]'::jsonb, ARRAY['C']::text[], 'Tất cả ba loại cảnh báo được liệt kê đều có phân loại mức độ nghiêm trọng Trung bình trong Microsoft Defender for Cloud. Lọc chế độ xem cảnh báo bảo mật theo Phương tiện bao gồm từng cảnh báo đó.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-401', 'sc-200', 401, 'You have an Azure subscription that uses Microsoft Sentinel and includes 100 Linux virtual machines.  
  
You need to monitor the virtual machines by using Microsoft Sentinel. The solution must satisfy these requirements:  
  
- Minimize administrative effort.  
- Minimize the parsing needed to read fog data.  
  
What should you configure?', '[{"key":"A","text":"a Log Analytics Data Collector API"},{"key":"B","text":"REST API integration"},{"key":"C","text":"a Common Evert Format (CEF) connector"},{"key":"D","text":"a Syslog connector"}]'::jsonb, ARRAY['D']::text[], 'Trình kết nối Syslog được thiết kế để thu thập các thông báo Syslog gốc từ các máy ảo Linux thông qua Tác nhân Azure Monitor. Nó nhập nhật ký vào bảng Syslog mà không yêu cầu tích hợp REST hoặc API thu thập dữ liệu tùy chỉnh, đồng thời tránh yêu cầu định dạng và phân tích cú pháp dành riêng cho CEF khi sử dụng CEF. [Microsoft Learn: Syslog and CEF via AMA connectors](https://learn.microsoft.com/en-us/azure/sentinel/cef-syslog-ama-overview)', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-402', 'sc-200', 402, 'You have a Microsoft 365 E5 subscription that uses Microsoft Defender XDR.  
  
You have an Azure subscription containing a Log Analytics workspace named Workspace1. All logs are forwarded to Workspace1.  
  
You need to identify all applications and security principals that made requests to modify Microsoft Entra groups during the previous 24 hours.  
  
Complete the KQL query by selecting the appropriate options.', '[]'::jsonb, ARRAY[]::text[], 'MicrosoftGraphActivityLogs ghi lại các yêu cầu API Microsoft Graph và chứa URI, phương thức HTTP, ID ứng dụng, ID người dùng và ID service principal cần thiết cho phân tích này. GET là một phương thức HTTP chỉ đọc, do đó việc loại trừ GET sẽ giữ lại các yêu cầu nhóm có thể sửa đổi tài nguyên.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-403', 'sc-200', 403, 'You have a Microsoft 365 subscription that uses Microsoft Purview and contains a Microsoft SharePoint Online site named Site1.  
  
Site1 contains the files shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784205378529-nzuy0bvs.png)  
  
From Microsoft Purview, you create the content search queries shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784205382147-oembxj4s.png)  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"Search1 will return File3.","correctAnswer":"Yes"},{"id":"2","text":"Search2 will return File1.","correctAnswer":"Yes"},{"id":"3","text":"Search3 will return File2.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:Yes', '2:Yes', '3:No']::text[], 'Tìm kiếm khám phá điện tử Microsoft Purview xử lý khoảng cách giữa các biểu thức thuộc tính:giá trị dưới dạng OR. Do đó, tệp XLSX đáp ứng biểu thức FileExtension:xlsx ngay cả khi giá trị Tác giả của nó khác. Dấu ngoặc kép vô hiệu hóa các ký tự đại diện và các phép toán bên trong chúng, đồng thời các toán tử Boolean phải là chữ hoa; do đó, FileExtension:* khớp một tệp với phần mở rộng, trong khi Tác giả:("User1.3") không tạo phạm vi tác giả bao gồm User2.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784205378529-nzuy0bvs.png', 'published'),
  ('sc200-404', 'sc-200', 404, 'You have a Microsoft 365 E5 subscription that uses Microsoft Defender XDR and includes a Windows device named Device1.  
  
Malicious activity is detected on Device1, and you start a live response session on that device.  
  
You need to perform these actions:  
  
- Download a file from the live response library.  
- Stop a process that is running on Device1.  
  
Which live response command should be run for each action?', '[]'::jsonb, ARRAY[]::text[], '`putfile` chuyển tệp từ thư viện phản hồi trực tiếp sang thiết bị. `remediate` dừng một quá trình như một phần của việc khắc phục quá trình đó trên thiết bị.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-405', 'sc-200', 405, 'You have a Microsoft Sentinel workspace.  
  
You plan to visualize data from Microsoft SharePoint Online and OneDrive sites.  
  
You need to create a KQL query for the visual. The solution must meet the following requirements:  
  
- Select all workloads as a single operation.  
- Include two parameters named Operations and Users.  
- In the results, exclude empty values for the site URLs.  
  
How should you complete the query?', '[]'::jsonb, ARRAY[]::text[], 'Tham chiếu tham số sổ làm việc được mở rộng khi truy vấn chạy. Kiểm tra nhãn duy trì lựa chọn Tất cả, trong khi `Operation in ({Operations})` lọc các lựa chọn riêng lẻ. `Site_Url!= ""` xóa các bản ghi có URL trang web trống trước khi tổng hợp.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-406', 'sc-200', 406, 'You have a Microsoft 365 E5 subscription linked to a Microsoft Entra tenant named contoso.com.  
  
You need to query Microsoft Graph activity logs to identify role changes in contoso.com.', '[]'::jsonb, ARRAY[]::text[], 'Việc thêm thành viên vai trò thư mục sử dụng `POST /directoryRoles/{role-id}/members/$ref` và thành công với Nội dung HTTP 204 No. ID vai trò là phân đoạn đường dẫn thứ ba tính từ cuối URI yêu cầu, do đó, việc tách `RequestUri` trên `/` và chọn `[-3]` sẽ trích xuất nó. Phản hồi 204 có nội dung phản hồi no.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-407', 'sc-200', 407, 'You have a Microsoft 365 subscription that uses Microsoft Defender XDR.  
  
You need to identify all the entities affected by an incident.  
  
Which tab should you use in the Microsoft Defender portal?', '[{"key":"A","text":"Investigations"},{"key":"B","text":"Assets"},{"key":"C","text":"Evidence and Response"},{"key":"D","text":"Alerts"}]'::jsonb, ARRAY['C']::text[], 'Tab Bằng chứng và Phản hồi trên trang sự cố hợp nhất mọi thực thể liên quan đến cảnh báo của sự cố, chẳng hạn như tệp, quy trình, người dùng, thiết bị và địa chỉ IP, cùng với trạng thái khắc phục và hành động sẵn có cho từng thực thể, biến tab này thành tab được sử dụng để xác định tất cả các thực thể bị ảnh hưởng bởi sự cố.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-408', 'sc-200', 408, 'A company uses Azure Sentinel.  
  
You need to create an automated response to threats.  
  
What should you use?', '[{"key":"A","text":"a data connector"},{"key":"B","text":"a playbook"},{"key":"C","text":"a workbook"},{"key":"D","text":"a Microsoft incident creation rule"}]'::jsonb, ARRAY['B']::text[], 'Sách hướng dẫn Microsoft Sentinel triển khai quy trình ứng phó với mối đe dọa tự động. Họ có thể tự động chạy các hành động khắc phục hoặc điều phối để ứng phó với các cảnh báo và sự cố.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-409', 'sc-200', 409, 'You create a custom analytics rule to identify threats in Azure Sentinel.  
  
You find that the rule fails intermittently.  
  
Which two possible causes could explain the failures? Each correct answer presents part of the solution.  
  
> **NOTE:** Each correct selection is worth one point.', '[{"key":"A","text":"The rule query takes too long to run and times out."},{"key":"B","text":"The target workspace was deleted."},{"key":"C","text":"Permissions to the data sources of the rule query were modified."},{"key":"D","text":"There are connectivity issues between the data sources and Log Analytics"}]'::jsonb, ARRAY['A', 'D']::text[], 'Truy vấn quy tắc vượt quá giới hạn thời gian thực thi có thể hết thời gian chờ và các sự cố kết nối giữa nguồn dữ liệu và Log Analytics có thể tạm thời ngăn chặn việc thực thi quy tắc. Microsoft Sentinel phân loại cả hai điều kiện là lỗi tạm thời, do đó, quy tắc có thể không liên tục và sau đó thành công.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-410', 'sc-200', 410, 'You have a Microsoft 365 E5 subscription.  
  
You need to create a hunting query that returns every email containing an attachment named Document.pdf. The query must meet these requirements:  
  
- Show only emails sent during the last hour.  
- Optimize query performance.  
  
How should you complete the query?', '[]'::jsonb, ARRAY[]::text[], '`Timestamp > ago(1h)` giới hạn EmailAttachmentInfo trong số giờ được yêu cầu. Việc áp dụng cùng một bộ lọc bên trong phép nối DeviceFileEvents sẽ giảm đầu vào bên phải trước phép nối bên trong, điều này làm giảm dữ liệu được xử lý. EmailAttachmentInfo cung cấp tên tệp đính kèm và SHA256, đồng thời SHA256 là hàm băm tệp phổ biến được sử dụng để nối.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-411', 'sc-200', 411, 'You have an Azure subscription that uses Microsoft Defender for Cloud and includes a user named User1.  
  
You need to ensure that User1 can modify Microsoft Defender for Cloud security policies. The solution must follow the principle of least privilege.  
  
Which role should you assign to User1?', '[{"key":"A","text":"Security operator"},{"key":"B","text":"Security Admin"},{"key":"C","text":"Owner"},{"key":"D","text":"Contributor"}]'::jsonb, ARRAY['B']::text[], 'Vai trò Quản trị viên bảo mật tích hợp cho Microsoft Defender for Cloud có thể cập nhật các chính sách bảo mật trong khi chỉ cung cấp các quyền quản lý bảo mật của Defender for Cloud. Chủ sở hữu và Người đóng góp có vai trò rộng hơn nên họ không đáp ứng được yêu cầu về ít đặc quyền nhất.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-412', 'sc-200', 412, 'You have an Azure subscription named Sub1 that uses Microsoft Defender for Cloud.  
  
You have an Azure DevOps organization named AzDO1.  
  
You need to integrate Sub1 and AzDO1. The solution must meet these requirements:  
  
- Detect secrets exposed in pipelines by using Defender for Cloud.  
- Minimize administrative effort.  
  
What should you do?', '[]'::jsonb, ARRAY[]::text[], 'Việc thêm môi trường Azure DevOps sẽ kết nối tổ chức với Defender for Cloud và kích hoạt các khả năng bảo mật DevOps. Cài đặt tiện ích mở rộng Azure DevOps của Microsoft Security DevOps để chạy phân tích bảo mật trong quy trình, bao gồm tích hợp quét bí mật được hỗ trợ sau đó và hiển thị kết quả cho Defender for Cloud.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-413', 'sc-200', 413, 'You have an Azure subscription containing these resources:  
  
- A Windows Server virtual machine named VM1  
- A Microsoft Sentinel workspace named Sentinel1 with User and Entity Behavior Analytics (UEBA) enabled  
  
A scheduled query rule named Rule1 tracks sign-in attempts to VM1.  
  
Update Rule1 so it detects when a user outside your company’s IT department signs in to VM1. The solution must:  
  
- Use UEBA results.  
- Maximize query performance.  
- Minimize false positives.  
  
How should you complete the rule definition?', '[]'::jsonb, ARRAY[]::text[], 'Microsoft Sentinel UEBA điền IdentityInfo với các thuộc tính nhận dạng người dùng, bao gồm AccountSID và Bộ phận. Một kết nối bên trong chỉ tương quan các sự kiện đăng nhập VM1 với các bản ghi nhận dạng đã biết, sau đó việc lọc `Department!= "IT"` sẽ giữ lại những người dùng không rành về CNTT; điều này tránh các bản ghi không khớp có thể tạo ra kết quả dương tính giả.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-414', 'sc-200', 414, 'You have a Microsoft Sentinel workspace named Workspace1 that is connected to the Microsoft Sentinel data lake and includes a table named Table1.  
  
You need to create a scheduled KQL job named Job1 that runs every hour, queries data across multiple Microsoft Sentinel workspaces, and writes Job1 output to Table1.  
  
What should you do?', '[{"key":"A","text":"Assign the Microsoft Sentinel Reader role on Workspace1 to the managed identity of Job1."},{"key":"B","text":"Add a project statement to Job1."},{"key":"C","text":"Append the _KQL_CL_ suffix to Table1."},{"key":"D","text":"Ensure that the output of Job1 matches the schema of Table1."}]'::jsonb, ARRAY['D']::text[], 'Khi công việc KQL thêm kết quả vào bảng hồ dữ liệu Microsoft Sentinel hiện có, đầu ra truy vấn của nó phải khớp với lược đồ của bảng đích, bao gồm tên cột và loại dữ liệu. Công việc KQL hỗ trợ thực thi theo lịch trình và phạm vi truy vấn của nhiều không gian làm việc.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-415', 'sc-200', 415, 'You have an Azure subscription that includes a user named User1 and a Microsoft Sentinel workspace named WS1.  
  
You must ensure that User1 can enable User and Entity Behavior Analytics (UEBA) for WS1. The solution must adhere to the principle of least privilege.  
  
Which roles should you assign to User1?', '[]'::jsonb, ARRAY[]::text[], 'Việc bật hoặc tắt UEBA yêu cầu vai trò Quản trị viên bảo mật Microsoft Entra ID hoặc các quyền tương đương. Microsoft Sentinel Contributor là vai trò không gian làm việc có sẵn có ít đặc quyền nhất cho phép cấu hình Microsoft Sentinel. Quản trị viên và Cộng tác viên toàn cầu cung cấp quyền truy cập rộng hơn, trong khi Nhà điều hành bảo mật và Người đóng góp tự động hóa Microsoft Sentinel không cấp các quyền cấu hình UEBA cần thiết.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-416', 'sc-200', 416, 'You are investigating a possible attack that deploys a new ransomware strain.  
  
You have three custom device groups. The groups contain devices that store highly sensitive information.  
  
You plan to perform automated actions on all devices.  
  
You need to be able to temporarily group the machines to perform actions on the devices.  
  
Which three actions should you take? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Assign a tag to the device group."},{"key":"B","text":"Add the device users to the admin role."},{"key":"C","text":"Add a tag to the machines."},{"key":"D","text":"Create a new device group that has a rank of 1."},{"key":"E","text":"Create a new admin role."},{"key":"F","text":"Create a new device group that has a rank of 4."}]'::jsonb, ARRAY['A', 'C', 'D']::text[], 'Các nhóm thiết bị Microsoft Defender dành cho điểm cuối có thể xác định tư cách thành viên thông qua thẻ. Áp dụng một thẻ chung cho các máy và liên kết thẻ đó với nhóm thiết bị tạm thời làm tiêu chí phù hợp. Một thiết bị phù hợp với nhiều nhóm sẽ chỉ được gán cho nhóm được xếp hạng cao nhất, do đó, việc chỉ định nhóm tạm thời xếp hạng 1 sẽ được ưu tiên trong khoảng thời gian phản hồi tự động. Cài đặt khắc phục tự động được định cấu hình thông qua các nhóm thiết bị; không cần tạo hoặc thay đổi vai trò quản trị viên để tạo nhóm thiết bị tạm thời này.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-417', 'sc-200', 417, 'You have a Microsoft Sentinel workspace.  
  
You need to create playbooks that meet these requirements:  
  
- Use an automation rule to trigger actions on an entity.  
- Call the Entities - Get Hosts action.  
  
Which playbook types should you use, and which parameters should you specify?', '[]'::jsonb, ARRAY[]::text[], 'Playbook kích hoạt sự cố Microsoft Sentinel có thể được gắn vào quy tắc tự động hóa và nhận các thực thể và cảnh báo của sự cố. Không thể gọi các playbook được kích hoạt bằng cảnh báo và thực thể bằng các quy tắc tự động hóa. Thực thể - Nhận máy chủ yêu cầu danh sách thực thể; các tham số mang thực thể có thể sử dụng được là Alert và FullIncidentProperties.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-418', 'sc-200', 418, 'You have a Microsoft 365 subscription that uses Microsoft Defender XDR and Microsoft Defender for Endpoint. The subscription includes the devices shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784206386420-z3tr24ly.png)  
  
You discover the following forensic data:  
  
- During Device1 startup, a connection to Device2 is established through port 5555.  
- Device2 connects to Device3 by using port 5555.  
- Device4 connects to Device1 by using port 5555.  
  
You perform these actions:  
  
- Initiate a live response session on Device1 and run `processes`.  
- From **Devices** in the Microsoft Defender portal, isolate Device1 and Device2.  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"Device1 will block connections from Device4.","correctAnswer":"Yes"},{"id":"2","text":"Existing connections from Device2 to Device3 will be maintained.","correctAnswer":"No"},{"id":"3","text":"The command run in the live response session will identify all the startup processes.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:Yes', '2:No', '3:No']::text[], 'Việc cách ly mạng sẽ ngắt kết nối một thiết bị Windows bị cô lập khỏi mạng trong khi chỉ giữ lại kết nối dịch vụ Bộ bảo vệ cho điểm cuối, do đó, Device1 chặn kết nối của Device4 và kết nối của Device2 với Device3 không được duy trì. Lệnh Live Response `processes` liệt kê các tiến trình hiện đang chạy; `persistence` và `startupfolders` là các lệnh riêng biệt cho các phương thức lưu giữ và tệp thư mục khởi động.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784206386420-z3tr24ly.png', 'published'),
  ('sc200-419', 'sc-200', 419, 'You intend to create a custom Azure Sentinel query that tracks anomalous Azure Active Directory (Azure AD) sign-in activity and displays that activity as a time chart aggregated by day.  
  
You need to create a query to display the time chart.  
  
What should you include in the query?', '[{"key":"A","text":"extend"},{"key":"B","text":"bin"},{"key":"C","text":"makeset"},{"key":"D","text":"workspace"}]'::jsonb, ARRAY['B']::text[], 'Hàm Kusto `bin()` nhóm các giá trị ngày giờ thành các khoảng cố định, chẳng hạn như các nhóm hàng ngày (`1d`). Nó được sử dụng với tính năng tổng hợp để tạo ra dữ liệu chuỗi thời gian hàng ngày cho biểu đồ thời gian.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-420', 'sc-200', 420, 'You have an Azure subscription containing a Microsoft Sentinel workspace. The workspace has a Microsoft Defender for Cloud data connector.  
  
You need to customize the details that are included when an alert is generated for a particular event.  
  
What should you do?', '[{"key":"A","text":"Enable User and Entity Behavior Analytics (UEBA)."},{"key":"B","text":"Create a Data Collection Rule (DCR)."},{"key":"C","text":"Modify the properties of the connector."},{"key":"D","text":"Create a scheduled query rule."}]'::jsonb, ARRAY['D']::text[], 'Quy tắc truy vấn được lập lịch Microsoft Sentinel hỗ trợ làm phong phú cảnh báo: các trường từ kết quả truy vấn có thể được hiển thị dưới dạng chi tiết tùy chỉnh và được sử dụng để tùy chỉnh các thuộc tính cảnh báo cho từng phiên bản cảnh báo. Đây là cơ chế kiểm soát các chi tiết có trong cảnh báo được tạo cho các sự kiện được chọn từ dữ liệu được kết nối.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-421', 'sc-200', 421, 'You have a Microsoft 365 subscription that uses Microsoft Defender XDR. The subscription includes 500 devices that are joined to Microsoft Entra, belong to the Microsoft Defender for Endpoint default device group, and are managed using Microsoft Intune.  
  
You need to implement Microsoft Defender Vulnerability Management. The solution must minimize administrative effort.  
  
What should you do first in the Microsoft Defender portal?', '[{"key":"A","text":"From Configuration management, configure the Enforcement scope settings."},{"key":"B","text":"Configure auto remediation for the default device group."},{"key":"C","text":"Set Microsoft Intune connection to On."},{"key":"D","text":"Set Live Response to On."}]'::jsonb, ARRAY['C']::text[], 'Việc kích hoạt kết nối Microsoft Intune cho phép Microsoft Defender Vulnerability Management tạo các tác vụ bảo mật Intune cho các yêu cầu khắc phục trên các thiết bị được quản lý bởi Intune, được Microsoft Entra tham gia. Điều này sử dụng mối quan hệ quản lý Intune hiện có và tránh đặt cấu hình phạm vi thực thi riêng biệt hoặc các tính năng phản hồi không liên quan.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-422', 'sc-200', 422, 'You have an Azure subscription that contains the users shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783742293687-hk6911er.png)  
  
The subscription contains Azure Firewall instances, as shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783742298466-c0sh4z7w.png)  
  
You have a Microsoft 365 E5 subscription that uses Microsoft Copilot for Security. The Copilot for Security role assignments are shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783742301331-w7ba55eb.png)  
  
Each user runs a Copilot for Security session.  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"User1 can use prompts to retrieve information from AFW1.","correctAnswer":"No"},{"id":"2","text":"User2 can use prompts to retrieve information from AFW2.","correctAnswer":"No"},{"id":"3","text":"User3 can use prompts to retrieve information from AFW3.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:No', '2:No', '3:Yes']::text[], 'Việc tích hợp Azure Firewall trong Microsoft Security Copilot yêu cầu nhật ký IDPS có cấu trúc dành riêng cho tài nguyên được gửi đến không gian làm việc Log Analytics, cùng với quyền truy cập Azure RBAC vào tường lửa và không gian làm việc liên quan. AFW1 không đạt yêu cầu về nhật ký có cấu trúc và AFW2 không đáp ứng được yêu cầu đích Log Analytics. AFW3 đáp ứng yêu cầu ghi nhật ký và User3 có quyền truy cập vào nền tảng Copilot cùng với quyền truy cập vào Trình đọc bảo mật ở phạm vi nhóm tài nguyên.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783742293687-hk6911er.png', 'published'),
  ('sc200-423', 'sc-200', 423, 'You have a Microsoft 365 E5 subscription that uses Microsoft Defender 365.  
  
You need to ensure you can investigate threats by using data from the unified audit log in Microsoft Defender for Cloud Apps.  
  
What should you configure first?', '[{"key":"A","text":"the User enrichment settings"},{"key":"B","text":"the Azure connector"},{"key":"C","text":"the Office 365 connector"},{"key":"D","text":"the Automatic log upload settings"}]'::jsonb, ARRAY['C']::text[], 'Trình kết nối Office 365 kết nối Ứng dụng Microsoft Defender for Cloud với dữ liệu kiểm tra Microsoft 365, cung cấp khả năng hiển thị các hoạt động được kiểm tra để điều tra mối đe dọa. Tài liệu của Microsoft xác định việc kiểm tra Microsoft 365 là điều kiện tiên quyết để giám sát các hoạt động của Microsoft 365 và mô tả việc kết nối Microsoft 365 thông qua trình kết nối ứng dụng.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-424', 'sc-200', 424, 'You have a Microsoft 365 subscription that uses Microsoft Purview and Microsoft Teams.  
  
You have a team named Team1 that includes a project named Project1.  
  
You need to identify any Project1 files stored on Team1''s team site between February 1, 2023, and February 10, 2023.  
  
Which KQL query should you run?', '[{"key":"A","text":"(c:c)(Project1)(date=(2023-02-01)..date=(2023-02-10))"},{"key":"B","text":"AuditLogs -| where Timestamp between (datetime(2023-02-01)..datetime(2023-02-10))| where FileName contains “Project1”"},{"key":"C","text":"Project1(c:c)(date=2023-02-01..2023-02-10)"},{"key":"D","text":"AuditLogs -| where Timestamp > ago(10d)| where FileName contains “Project1”"}]'::jsonb, ARRAY['C']::text[], 'Tìm kiếm nội dung khám phá điện tử Microsoft Purview sử dụng KeyQL. Biểu thức `c:c` kết hợp từ khóa và điều kiện với hành vi giống AND và phạm vi ngày được biểu thị dưới dạng `date=start.end`. Với trang web nhóm SharePoint của Team1 được xác định là vị trí tìm kiếm, `Project1(c:c)(date=2023-02-01.2023-02-10)` trả về nội dung phù hợp với Project1 trong phạm vi ngày đó. `AuditLogs | where.` là cú pháp truy vấn Azure Monitor/Log Analytics, không phải Purview KeyQL.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-425', 'sc-200', 425, 'You have a Microsoft 365 E5 subscription that contains a device named Device1. Device1 is enrolled in Microsoft Defender for Endpoint.  
  
Device1 reports an incident that includes a file named File1.exe as evidence.  
  
You initiate the Collect Investigation Package action and download the ZIP file.  
  
You need to identify the first and last time File1.exe was executed.  
  
What should you review in the investigation package?', '[{"key":"A","text":"Processes"},{"key":"B","text":"Autoruns"},{"key":"C","text":"Security event log"},{"key":"D","text":"Scheduled tasks"},{"key":"E","text":"Prefetch files"}]'::jsonb, ARRAY['E']::text[], '**Tìm nạp trước các tệp** (tệp.pf) trong siêu dữ liệu thực thi bản ghi Windows, bao gồm cả thời gian thực thi đầu tiên và cuối cùng của ứng dụng. Hệ điều hành duy trì dữ liệu này để tối ưu hóa hiệu suất khởi động. Đây là nguồn đáng tin cậy về mặt pháp lý cho lịch sử thực thi. Các quy trình chỉ hiển thị các ứng dụng hiện đang chạy và nhật ký sự kiện không thu thập dữ liệu thực thi chi tiết này một cách nhất quán.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-426', 'sc-200', 426, 'You have an Azure subscription named Sub1 that includes a Microsoft Sentinel workspace named WS1.  
  
You need to create a hunting query in WS1 that meets the following requirements:  
  
- Returns the daily number of changes made by each Microsoft Entra security principal during a seven-day period  
- Identifies all successful changes to the resources in Sub1  
- Replaces any missing data points with 0  
  
How should you complete the KQL query?', '[]'::jsonb, ARRAY[]::text[], 'AzureActivity chứa dữ liệu Nhật ký hoạt động Azure, bao gồm các giá trị hoạt động và trạng thái đối với các thay đổi tài nguyên. Toán tử `make-series` tạo chuỗi tổng hợp hàng ngày được nhóm theo Người gọi, trong khi `default=0` cung cấp số 0 cho các ngăn thời gian vắng mặt.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-427', 'sc-200', 427, 'You have a Microsoft 365 E5 subscription with a Conditional Access policy named Policy1.  
  
You need to perform these actions:  
  
- Create a Conditional Access App Control custom policy named Custom1.  
- Configure Policy1 to use Custom1.  
  
What should you use to create Custom1, and in which Policy1 settings should you enable Conditional Access App Control?', '[]'::jsonb, ARRAY[]::text[], 'Chính sách tùy chỉnh Kiểm soát ứng dụng truy cập có điều kiện được tạo trong Ứng dụng Microsoft Defender for Cloud, có sẵn thông qua cổng thông tin Microsoft Defender. Chính sách Truy cập có điều kiện cho phép tích hợp Kiểm soát ứng dụng trong các điều khiển Phiên, nơi có thể chọn chính sách tùy chỉnh.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-428', 'sc-200', 428, 'You use Azure Security Center.  
  
You receive a security alert in Security Center. You need to view the recommendations for resolving the alert in Security Center.  
  
What should you do?', '[{"key":"A","text":"From Security alerts, select the alert, select Take Action, and then expand the Prevent future attacks section."},{"key":"B","text":"From Security alerts, select Take Action, and then expand the Mitigate the threat section."},{"key":"C","text":"From Regulatory compliance, download the report."},{"key":"D","text":"From Recommendations, download the CSV report."}]'::jsonb, ARRAY['A']::text[], 'Trong ngăn Thực hiện hành động của cảnh báo Trung tâm Bảo mật, phần Ngăn chặn các cuộc tấn công trong tương lai cung cấp các đề xuất bảo mật giúp giảm bề mặt tấn công và cải thiện tình trạng bảo mật. Thay vào đó, phần Giảm thiểu mối đe dọa chứa các bước khắc phục thủ công cho cảnh báo.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-429', 'sc-200', 429, 'You have a Microsoft 365 subscription that contains 500 Windows 11 devices onboarded to Microsoft Defender for Endpoint.  
  
You also have 500 devices running Linux.  
  
Users sign in to both the Windows and Linux devices using their Microsoft Entra credentials.  
  
You need to recommend a response process for Microsoft Defender XDR security incidents related to a compromised Linux endpoint. The solution must ensure that the compromised device cannot communicate with any device onboarded to Defender for Endpoint.  
  
Which response action should you include in the recommendation?', '[{"key":"A","text":"Contain user"},{"key":"B","text":"Contain device"},{"key":"C","text":"Isolate device"},{"key":"D","text":"Confirm user compromised"}]'::jsonb, ARRAY['B']::text[], 'Hành động **Chứa thiết bị** khiến mọi thiết bị tích hợp Bộ bảo vệ Microsoft dành cho Điểm cuối chặn hoạt động giao tiếp đến và đi với thiết bị được chứa. Nó nhằm mục đích ngăn chặn chuyển động ngang từ một thiết bị không được quản lý bị xâm phạm hoặc có khả năng bị xâm phạm, bao gồm cả điểm cuối Linux không được tích hợp sẵn.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-430', 'sc-200', 430, 'You have an Azure subscription linked to a hybrid Azure AD tenant and containing a Microsoft Sentinel workspace named Sentinel1.  
  
You need to enable User and Entity Behavior Analytics (UEBA) for Sentinel and configure UEBA to use data gathered from Active Directory Domain Services (AD DS).  
  
What should you do?', '[]'::jsonb, ARRAY[]::text[], 'Microsoft Sentinel UEBA sử dụng Microsoft Defender for Identity để đồng bộ hóa các thực thể người dùng từ Active Directory tại chỗ; điều này yêu cầu cảm biến Defender for Identity trên mỗi bộ điều khiển miền. Sự kiện bảo mật là nguồn dữ liệu UEBA cho hoạt động sự kiện bảo mật của bộ điều khiển miền, trong khi Nhật ký kiểm tra và Nhật ký đăng nhập là nguồn dữ liệu Microsoft Entra ID.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-431', 'sc-200', 431, 'You have a Microsoft 365 subscription containing three users: User1, User2, and User3. The resources are shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783742294965-0ugndusl.png)  
  
You have a Microsoft Defender XDR detection rule named Rule1 with these configurations:  
  
- Scope: DevGroup1  
- File hash: File1.exe  
- Actions:  
  - Devices: Collect investigation package  
  - User: Mark as compromised  
  - Files: Block  
  
Each user tries to run File1.exe on their device.  
  
For each statement, select **Yes** if it is true; otherwise, select **No**.', '{"statements":[{"id":"1","text":"File1.exe will be blocked on Device3.","correctAnswer":"No"},{"id":"2","text":"User2 will be marked with a risk level of medium.","correctAnswer":"No"},{"id":"3","text":"An investigation package will be collected from Device1.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:No', '2:No', '3:Yes']::text[], 'Quy tắc1 chỉ áp dụng cho các thiết bị trong DevGroup1, do đó hành động chặn tệp của nó không ảnh hưởng đến Device3 trong DevGroup2. File1.exe chạy trên Device1 sẽ kích hoạt bộ sưu tập đã được định cấu hình của gói điều tra. Hành động Đánh dấu là bị xâm phạm sẽ đặt mức độ rủi ro của người dùng liên quan ở mức cao thay vì ở mức trung bình.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783742294965-0ugndusl.png', 'published'),
  ('sc200-432', 'sc-200', 432, 'You have a Microsoft 365 E5 subscription that uses Microsoft Defender for Endpoint and contains a Windows device named Device1.  
  
You must investigate a suspicious executable file detected on Device1. The solution must meet these requirements:  
  
- Identify the image file path of the file.  
- Identify when the file was first detected on Device1.  
  
What should you review from the detection event timeline?', '[]'::jsonb, ARRAY[]::text[], 'Biểu đồ thực thể-sự kiện hiển thị các thực thể liên quan và mối quan hệ của chúng, cung cấp vị trí tệp hình ảnh quy trình. Thông tin chi tiết về thực thể tệp cung cấp lịch sử quan sát dành riêng cho thiết bị, bao gồm cả sự kiện được nhìn thấy lần đầu trên thiết bị; do đó thời gian phát hiện ban đầu của tệp trên Thiết bị1 được lấy thông qua Thực thể. Tài liệu của Microsoft cho biết chi tiết sự kiện theo dòng thời gian của thiết bị có thể hiển thị biểu đồ gồm các thực thể liên quan và mối quan hệ của chúng, đồng thời chế độ xem thiết bị của tệp bao gồm các sự kiện được nhìn thấy lần đầu tiên và lần cuối cùng cho mỗi thiết bị. [Investigate devices in Microsoft Defender for Endpoint](https://learn.microsoft.com/en-us/defender-endpoint/investigate-machines#investigate-device-timeline) [Investigate a file](https://learn.microsoft.com/en-us/defender-endpoint/investigate-files)', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-433', 'sc-200', 433, 'You have an Azure subscription that contains a Microsoft Sentinel workspace named WS1.  
  
You create a hunting query that detects a new attack vector. The attack vector maps to a tactic listed in the MITRE ATT&CK database.  
  
You need to ensure that an incident is created in WS1 when the new attack vector is detected.  
  
What should you configure?', '[{"key":"A","text":"a hunting livestream session"},{"key":"B","text":"a query bookmark"},{"key":"C","text":"a scheduled query rule"},{"key":"D","text":"a Fusion rule"}]'::jsonb, ARRAY['C']::text[], 'Quy tắc truy vấn được lên lịch cho phép bạn chạy truy vấn tìm kiếm định kỳ và tự động tạo ra sự cố khi phát hiện thấy kết quả trùng khớp. Loại quy tắc này thực hiện truy vấn theo các khoảng thời gian xác định và kích hoạt việc tạo sự cố khi tìm thấy vectơ tấn công, cho phép phát hiện liên tục mà không cần can thiệp thủ công. Săn phiên phát trực tiếp, dấu trang truy vấn và quy tắc Fusion phục vụ các mục đích khác nhau.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-434', 'sc-200', 434, 'You have a Microsoft Sentinel workspace named Workspace1 that is connected to the Microsoft Sentinel data lake. Workspace1 stores 12 years of historical data in the data lake tier.  
  
You plan to run an advanced hunting query that uses `join` across multiple tables and accesses the data directly in the data lake.  
  
You need to ensure the query can run on demand during investigations and on a schedule. The solution must allow the query to run asynchronously.  
  
What should you use?', '[{"key":"A","text":"a summary rule"},{"key":"B","text":"a scheduled analytics rule that queries the analytics tier only"},{"key":"C","text":"a search job"},{"key":"D","text":"a KQL job"}]'::jsonb, ARRAY['D']::text[], 'Các công việc KQL Microsoft Sentinel chạy các truy vấn KQL không đồng bộ một lần hoặc theo lịch trình trên dữ liệu trong tầng hồ dữ liệu. Chúng được thiết kế để điều tra bằng cách sử dụng nhật ký lịch sử và hỗ trợ các phép nối hoặc liên kết trên nhiều bảng; phạm vi thời gian truy vấn được hỗ trợ của họ lên tới 12 năm.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-435', 'sc-200', 435, '$34', '{"statements":[{"id":"1","text":"The RequestId field can be used to group requests that were in a single batch.","correctAnswer":"No"},{"id":"2","text":"Request1 was initiated by an application making app-only Microsoft Graph calls.","correctAnswer":"Yes"},{"id":"3","text":"The AppId field in Request2 can be used to identify the credentials used to make the Microsoft Graph call.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:No', '2:Yes', '3:No']::text[], '`OperationId` xác định một lô, trong khi `RequestId` xác định một yêu cầu riêng lẻ, do đó, requestId không thể nhóm các thành viên của lô. Giá trị `ClientAuthMethod` `2` có nghĩa là xác thực chứng chỉ ứng dụng khách; `UserId` trống và service principal được điền sẽ xác định lệnh gọi chỉ dành cho ứng dụng. `AppId` xác định ứng dụng chứ không phải thông tin xác thực ứng dụng khách cụ thể được sử dụng để xác thực ứng dụng đó.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-436', 'sc-200', 436, 'You have an Azure subscription with Microsoft Defender for Cloud enabled for every supported resource type.  
  
You create an Azure logic app named LA1.  
  
You plan to use LA1 to automatically remediate security risks detected in Defender for Cloud.  
  
You need to test LA1 in Defender for Cloud.  
  
What should you do?', '[]'::jsonb, ARRAY[]::text[], 'Tự động hóa quy trình làm việc hỗ trợ trình kích hoạt Ứng dụng Logic khi đề xuất của Bộ bảo vệ cho Đám mây được tạo hoặc kích hoạt. Ứng dụng Logic có thể được chạy thủ công bằng cách mở đề xuất tương ứng và chọn Ứng dụng logic kích hoạt, vì vậy Đề xuất là vị trí thử nghiệm thích hợp.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-437', 'sc-200', 437, 'You have a Microsoft 365 E5 subscription containing a Windows 11 device named Device1. Device1 is onboarded to Microsoft Defender XDR.  
  
You perform the following actions:  
  
- Create a PowerShell script named Script1.ps1.  
- From the Microsoft Defender XDR portal, establish a live response session to Device1.  
  
You need to ensure that you can run Script1.ps1 on Device1.  
  
Which three actions should you perform, in sequence?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"B"},{"id":"step2","text":"Slot 2:","correctAnswer":"C"},{"id":"step3","text":"Slot 3:","correctAnswer":"E"}],"choices":[{"key":"A","text":"During the live response session, run the library command."},{"key":"B","text":"From the Microsoft Defender XDR portal, select Advanced features."},{"key":"C","text":"From the Microsoft Defender XDR portal, upload Script1.ps1 to the library."},{"key":"D","text":"During the live response session, run the getfile command."},{"key":"E","text":"During the live response session, run the putfile command."}]}'::jsonb, ARRAY['step1=B', 'step2=C', 'step3=E']::text[], 'Phản hồi trực tiếp yêu cầu bật tính năng thực thi tập lệnh PowerShell chưa được ký trong các tính năng Nâng cao. Các tập lệnh lần đầu tiên được tải lên thư viện Phản hồi trực tiếp và `putfile` sao chép tệp thư viện vào thiết bị. `library` chỉ liệt kê các tệp trong thư viện, trong khi `getfile` thu thập tệp từ thiết bị.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-438', 'sc-200', 438, 'You have a Microsoft 365 E5 subscription that includes 100 Linux devices. The devices are onboarded to Microsoft Defender 365.  
  
You need to start collecting investigation packages from the devices by using the Microsoft 365 Defender portal.  
  
Which response action should you use?', '[{"key":"A","text":"Run antivirus scan"},{"key":"B","text":"Initiate Automated Investigation"},{"key":"C","text":"Collect investigation package"},{"key":"D","text":"Initiate Live Response Session"}]'::jsonb, ARRAY['C']::text[], 'Hành động phản hồi **Thu thập gói điều tra** thu thập dữ liệu điều tra và điều tra từ một thiết bị tích hợp được hỗ trợ thông qua cổng thông tin Bộ bảo vệ Microsoft 365. Linux được hỗ trợ cho hành động phản hồi này.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-439', 'sc-200', 439, 'You create a new Azure subscription and begin collecting logs for Azure Monitor.  
  
You must configure Azure Security Center to detect potential threats involving sign-ins from suspicious IP addresses to Azure virtual machines. The solution must validate the configuration.  
  
Which three actions should you take, in order?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"C"},{"id":"step2","text":"Slot 2:","correctAnswer":"B"},{"id":"step3","text":"Slot 3:","correctAnswer":"E"}],"choices":[{"key":"A","text":"Change the alert severity threshold for emails to Medium."},{"key":"B","text":"Copy an executable file on a virtual machine and rename the file as ASC_AlertTest_662jfi039N.exe."},{"key":"C","text":"Enable Azure Defender for the subscription."},{"key":"D","text":"Change the alert severity threshold for emails to Low."},{"key":"E","text":"Run the executable file and specify the appropriate arguments."},{"key":"F","text":"Rename the executable file as AlertTest.exe."}]}'::jsonb, ARRAY['step1=C', 'step2=B', 'step3=E']::text[], 'Defender for Cloud phải bật Azure Defender/Defender for Servers trước khi có thể phát hiện mối đe dọa máy chủ. Tệp thực thi cảnh báo thử nghiệm của nó sử dụng tên tệp `ASC_AlertTest_662jfi039N.exe` được yêu cầu và sau đó được chạy với các đối số được ghi lại để kích hoạt cảnh báo xác thực. Ngưỡng mức độ nghiêm trọng của email chỉ ảnh hưởng đến thông báo chứ không ảnh hưởng đến việc phát hiện mối đe dọa hoặc quy trình kiểm tra.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-440', 'sc-200', 440, 'You have a Microsoft 365 E5 subscription that contains a Microsoft SharePoint Online site named Site1.  
  
In Site1, you identify the suspicious files shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783742287089-njb1sx0c.png)  
  
In Microsoft Purview, you create the content searches shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783742290465-go9a4wxv.png)  
  
For each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"Search1 will return File1.docx.","correctAnswer":"No"},{"id":"2","text":"Search2 will return File2.docx.","correctAnswer":"No"},{"id":"3","text":"Search3 will return File3.docx.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:No', '2:No', '3:Yes']::text[], 'Search1 không thành công vì điều kiện `-ItemClass=IPM.Document` phủ định loại trừ hoàn toàn các mục tài liệu và các điều kiện thuộc tính duy nhất được kết hợp với AND, do đó, Tên tệp khớp trên File1.docx không bao giờ có cơ hội trả lại. Search2 sử dụng `filetype=doc` với toán tử Equals và hướng dẫn eDiscovery của chính Microsoft nêu rõ rằng điều kiện Equals trên một loại tệp chỉ khớp với phần mở rộng chính xác đó — các tệp `.docx` không được trả về bởi điều kiện loại tệp `doc` — vì vậy File2.docx bị loại trừ ngay cả khi tác giả của nó khớp. Điều kiện `contenttype:item document` của Search3 khớp với loại nội dung Tài liệu của File3.docx và điều kiện tác giả được kết nối AND cũng khớp với User3, do đó File3.docx được trả về.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783742287089-njb1sx0c.png', 'published'),
  ('sc200-441', 'sc-200', 441, 'Your company uses Microsoft Sentinel to manage alerts from more than 10,000 IoT devices.  
  
A security manager reports that the high volume of incidents is making security-threat tracking increasingly difficult.  
  
You need to recommend a solution that provides a custom visualization to simplify threat investigations and enables threats to be inferred by using machine learning.  
  
What should you include in the recommendation?', '[{"key":"A","text":"built-in queries"},{"key":"B","text":"livestream"},{"key":"C","text":"workbooks"},{"key":"D","text":"bookmarks"}]'::jsonb, ARRAY['C']::text[], 'Sổ làm việc Microsoft Sentinel cung cấp bảng thông tin tương tác, có thể tùy chỉnh giúp hợp nhất các kết quả, bảng và biểu đồ truy vấn nhật ký thành một hình ảnh trực quan duy nhất, đây chính xác là những gì cần thiết để đơn giản hóa việc điều tra trên môi trường IoT có khối lượng sự cố cao. Sổ làm việc cũng có thể hiển thị đầu ra của các phân tích dựa trên máy học tích hợp của Sentinel (chẳng hạn như phát hiện sự bất thường và Fusion), cho phép các nhà phân tích suy ra các mối đe dọa một cách trực quan thay vì tương quan các cảnh báo thô theo cách thủ công.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-442', 'sc-200', 442, 'You need to add notes to events to satisfy the Azure Sentinel requirements.  
  
Which three actions should you carry out, in order?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"E"},{"id":"step2","text":"Slot 2:","correctAnswer":"D"},{"id":"step3","text":"Slot 3:","correctAnswer":"A"}],"choices":[{"key":"A","text":"Add a bookmark and map an entity."},{"key":"B","text":"From Azure Monitor, run a Log Analytics query."},{"key":"C","text":"Add the query to favorites."},{"key":"D","text":"Select a query result."},{"key":"E","text":"From the Azure Sentinel workspace, run a Log Analytics query."}]}'::jsonb, ARRAY['step1=E', 'step2=D', 'step3=A']::text[], 'Dấu trang Microsoft Sentinel lưu giữ các kết quả truy vấn có liên quan và ghi chú hỗ trợ. Chạy truy vấn Log Analytics từ Microsoft Sentinel, chọn kết quả có liên quan rồi thêm dấu trang trong khi ánh xạ một thực thể. Ngăn Nhật ký được mở trực tiếp từ Azure Monitor không hỗ trợ tạo dấu trang.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-443', 'sc-200', 443, 'You have an Azure subscription containing an Azure logic app named app1 and a Microsoft Sentinel workspace with an Azure Active Directory (Azure AD) connector.  
  
You need to ensure that app1 starts when Microsoft Sentinel detects an alert generated by Azure AD.  
  
What should you create first?', '[{"key":"A","text":"a repository connection"},{"key":"B","text":"a watchlist"},{"key":"C","text":"an analytics rule"},{"key":"D","text":"an automation rule"}]'::jsonb, ARRAY['C']::text[], 'Quy tắc phân tích Microsoft Sentinel đánh giá dữ liệu Azure AD được kết nối và tạo cảnh báo. Sau khi nguồn cảnh báo đó tồn tại, quy tắc tự động hóa có thể được định cấu hình bằng trình kích hoạt do cảnh báo tạo để chạy quy trình làm việc của Ứng dụng Logic. Các tài liệu của Microsoft cảnh báo có thể được tạo theo quy tắc phân tích theo lịch trình hoặc gần thời gian thực và quy tắc tự động hóa sử dụng trình kích hoạt cảnh báo có thể chạy sổ tay.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-444', 'sc-200', 444, 'You have an Azure subscription containing two users, User1 and User2, and a Microsoft Sentinel workspace named workspace1.  
  
Ensure the users can perform these tasks in workspace1:  
  
- User1 must be able to dismiss incidents and assign incidents to users.  
- User2 must be able to modify analytics rules.  
  
Use the principle of least privilege. Each role may be used once, more than once, or not at all.  
  
Which role should be assigned to each user?', '{"statements":[{"id":"user1","text":"User1:","correctAnswer":"E"},{"id":"user2","text":"User2:","correctAnswer":"C"}],"choices":[{"key":"A","text":"Contributor"},{"key":"B","text":"Microsoft Sentinel Automation Contributor"},{"key":"C","text":"Microsoft Sentinel Contributor"},{"key":"D","text":"Microsoft Sentinel Reader"},{"key":"E","text":"Microsoft Sentinel Responder"},{"key":"F","text":"Reader"}]}'::jsonb, ARRAY['user1=E', 'user2=C']::text[], 'Microsoft Sentinel Replyer là vai trò dành riêng cho Sentinel có ít đặc quyền nhất, có thể quản lý các sự cố, bao gồm thay đổi trạng thái để loại bỏ/đóng chúng và chỉ định chủ sở hữu sự cố. Microsoft Sentinel Contributor bổ sung khả năng tạo và chỉnh sửa tài nguyên Sentinel, bao gồm các quy tắc phân tích; quyền đó là cần thiết để sửa đổi các quy tắc phân tích.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-445', 'sc-200', 445, 'You have a Microsoft 365 subscription that uses Azure Defender.  
  
You have 100 virtual machines in a resource group named RG1.  
  
You assign the Security Admin role to a new user named SecAdmin1.  
  
You need to ensure that SecAdmin1 can use Azure Defender to apply quick fixes to the virtual machines. The solution must follow the principle of least privilege.  
  
Which role should you assign to SecAdmin1?', '[{"key":"A","text":"the Security Reader role for the subscription"},{"key":"B","text":"the Contributor for the subscription"},{"key":"C","text":"the Contributor role for RG1"},{"key":"D","text":"the Owner role for RG1"}]'::jsonb, ARRAY['C']::text[], 'Hành động **Khắc phục** của Bộ bảo vệ cho đám mây để áp dụng các đề xuất bảo mật yêu cầu các quyền ở cấp độ Người đóng góp hoặc Chủ sở hữu ở nhóm tài nguyên hoặc phạm vi đăng ký có liên quan; Một mình Quản trị viên bảo mật không thể thực hiện được. Người đóng góp trên RG1 cho phép khắc phục các máy ảo trong nhóm tài nguyên đó mà không cấp quyền truy cập trên toàn bộ đăng ký hoặc đặc quyền của Chủ sở hữu không cần thiết.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-446', 'sc-200', 446, 'HOTSPOT  
  
You have a Microsoft Sentinel workbook that contains the following KQL query.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783742349648-09b7qm6s.png)  
  
You need to create a visual that changes the color of the **errCount** column according to the returned value.  
  
How should you configure the visual?', '[]'::jsonb, ARRAY[]::text[], 'Trực quan hóa lưới hiển thị đầu ra KQL dạng bảng dưới dạng các cột có thể định cấu hình. Trình kết xuất Ngưỡng áp dụng định dạng và màu có điều kiện theo quy tắc giá trị cho một cột, chẳng hạn như errCount.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783742349648-09b7qm6s.png', 'published'),
  ('sc200-447', 'sc-200', 447, 'You have a Microsoft 365 tenant that uses Microsoft Exchange Online and Microsoft Defender for Office 365.  
  
What should you use to determine whether zero-hour auto purge (ZAP) moved an email message from a user''s mailbox?', '[{"key":"A","text":"the Threat Protection Status report in Microsoft Defender for Office 365"},{"key":"B","text":"the mailbox audit log in Exchange"},{"key":"C","text":"the Safe Attachments file types report in Microsoft Defender for Office 365"},{"key":"D","text":"the mail flow report in Exchange"}]'::jsonb, ARRAY['D']::text[], 'Báo cáo trạng thái Luồng thư Exchange bao gồm chế độ xem Luồng thư hiển thị các thư bị ảnh hưởng bởi ZAP trong phạm vi ngày đã chọn. Hành động ZAP không được ghi lại dưới dạng hành động hệ thống trong nhật ký kiểm tra hộp thư Exchange.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-448', 'sc-200', 448, 'You have an Azure subscription that uses Microsoft Defender for Cloud.  
  
You also have an Amazon Web Services (AWS) account containing an Amazon Elastic Compute Cloud (EC2) instance named EC2-1.  
  
You need to onboard EC2-1 to Defender for Cloud.  
  
What should you install on EC2-1?', '[{"key":"A","text":"the Log Analytics agent"},{"key":"B","text":"the Azure Connected Machine agent"},{"key":"C","text":"the unified Microsoft Defender for Endpoint solution package"},{"key":"D","text":"Microsoft Monitoring Agent"}]'::jsonb, ARRAY['B']::text[], 'Phiên bản AWS EC2 được kết nối với Defender for Cloud dưới dạng máy chủ hỗ trợ Azure Arc. Tác nhân Azure Connected Machine là tác nhân Azure Arc thiết lập kết nối này, cho phép Defender for Cloud tích hợp và quản lý máy không phải Azure.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-449', 'sc-200', 449, 'You have a Microsoft Sentinel workspace named SW1.  
  
In SW1, User and Entity Behavior Analytics (UEBA) is enabled.  
  
You need to use KQL to complete these tasks:  
  
- View entity data that includes fields for each entity type.  
- Evaluate rule quality by analyzing how effectively a rule performs.  
  
Which table should you use in KQL for each task?  
  
Each table can be used once, more than once, or not at all.', '{"statements":[{"id":"view_entity_data","text":"View entity data:","correctAnswer":"D"},{"id":"assess_rule_quality","text":"Assess rule quality:","correctAnswer":"A"}],"choices":[{"key":"A","text":"Anomalies"},{"key":"B","text":"AuditLogs"},{"key":"C","text":"AzureDiagnostics"},{"key":"D","text":"BehaviorAnalytics"},{"key":"E","text":"CommonSecurityLog"}]}'::jsonb, ARRAY['view_entity_data=D', 'assess_rule_quality=A']::text[], 'BehaviorAnalytics là bảng đầu ra UEBA để cung cấp thông tin thực thể và hành vi phong phú, bao gồm thông tin chi tiết về thực thể và bối cảnh hoạt động. Các sự kiện bất thường ghi lại các sự kiện được UEBA xác định là bất thường; việc xem xét các kết quả đầu ra này hỗ trợ việc đánh giá kết quả và chất lượng của quy tắc bất thường.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-450', 'sc-200', 450, 'You have 100 Azure subscriptions with enhanced security features in Microsoft Defender for Cloud enabled. Every subscription is linked to one Azure Active Directory (Azure AD) tenant.  
  
You need to stream Defender for Cloud logs to a syslog server while minimizing administrative effort.  
  
What should you do?', '[]'::jsonb, ARRAY[]::text[], 'Xuất liên tục Microsoft Defender for Cloud có thể gửi dữ liệu bảo mật đến Azure Event Hubs, cho phép trình kết nối SIEM hoặc nhật ký hệ thống xuôi dòng tiếp nhận dữ liệu đó. Việc chỉ định Chính sách Azure ở nhóm quản lý gốc sẽ áp dụng cấu hình cho các đăng ký của đối tượng thuê và tránh định cấu hình 100 đăng ký riêng lẻ.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-451', 'sc-200', 451, 'You have an Azure subscription containing a Log Analytics workspace named Workspace1.  
  
Azure activity logs and Microsoft Entra ID logs are configured to forward to Workspace1.  
  
You need to query Workspace1 and identify every request that failed because of insufficient authorization.  
  
How should you complete the KQL query?', '[]'::jsonb, ARRAY[]::text[], 'MicrosoftGraphActivityLogs ghi lại hoạt động API Microsoft Graph và bao gồm siêu dữ liệu yêu cầu như ứng dụng hoặc danh tính người dùng, URI và phương thức yêu cầu cũng như mã trạng thái phản hồi HTTP. HTTP 401 (Không được phép) và 403 (Bị cấm) đều xác định lỗi ủy quyền, do đó truy vấn phải lọc cả hai mã trạng thái riêng biệt.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-452', 'sc-200', 452, 'You are configuring Azure Sentinel.  
  
You need to send a Microsoft Teams message to a channel whenever an incident that represents a sign-in risk event becomes active in Azure Sentinel.  
  
Which two actions should you take in Azure Sentinel? Each correct answer is part of the solution.  
  
**NOTE:** Each correct selection is worth one point.', '[{"key":"A","text":"Enable Entity behavior analytics."},{"key":"B","text":"Associate a playbook to the analytics rule that triggered the incident."},{"key":"C","text":"Enable the Fusion rule."},{"key":"D","text":"Add a playbook."},{"key":"E","text":"Create a workbook."}]'::jsonb, ARRAY['B', 'D']::text[], 'Playbook là công cụ tự động hóa dựa trên Ứng dụng Logic có thể đăng thông báo lên kênh Microsoft Teams, do đó, playbook phải được tạo trước tiên (Thêm playbook) rồi liên kết với quy tắc phân tích tạo ra sự cố rủi ro đăng nhập để nó tự động chạy bất cứ khi nào sự cố đó được kích hoạt. Phân tích hành vi thực thể, quy tắc Fusion và sổ làm việc không gửi thông báo và đóng vai trò no trong việc kích hoạt thông báo Nhóm.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-453', 'sc-200', 453, 'You have a Microsoft Sentinel workspace.  
  
You have a query named Query1, shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783732853918-r3gojnn7.png)  
  
You plan to create a custom parser named Parser1.  
  
You need to use Query1 in Parser1.  
  
What should you do first?', '[{"key":"A","text":"Remove line 5."},{"key":"B","text":"Remove line 2."},{"key":"C","text":"In line 3, replace the !contains operator with the !has operator."},{"key":"D","text":"In line 4, remove the TimeGenerated predicate."}]'::jsonb, ARRAY['B']::text[], 'Trình phân tích cú pháp Microsoft Sentinel không được lọc các bản ghi theo thời gian vì truy vấn sử dụng trình phân tích cú pháp sẽ áp dụng phạm vi thời gian. Việc xóa bộ lọc `TimeGenerated > ago(7h)` sẽ ngăn không cho Parser1 bị giới hạn chỉ trong bảy giờ trước đó.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783732853918-r3gojnn7.png', 'published'),
  ('sc200-454', 'sc-200', 454, 'You have four Azure subscriptions, and one subscription contains a Microsoft Sentinel workspace.  
  
You need to deploy Microsoft Sentinel data connectors through Azure Policy to collect data from the subscriptions. The solution must make the policy apply to both new and existing resources in the subscriptions.  
  
Which connector type should you provision, and what should you use to ensure that every resource is monitored?', '[]'::jsonb, ARRAY[]::text[], 'Microsoft Sentinel có thể thu thập nhật ký dịch vụ Azure thông qua cài đặt chẩn đoán được gửi đến không gian làm việc Log Analytics của nó. Nhiệm vụ Chính sách Azure với hiệu ứng DeployIfNotExists sẽ đánh giá các tài nguyên mới, trong khi tác vụ khắc phục sẽ triển khai các cài đặt chẩn đoán cần thiết cho các tài nguyên hiện có không tuân thủ.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-455', 'sc-200', 455, 'From Azure Sentinel, open the Investigation pane for a high-severity incident, as shown here.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783729405427-0yt2vz5v.jpg)  
  
Use the drop-down menus to choose the answer that completes each statement from the information in the graphic.', '[]'::jsonb, ARRAY[]::text[], 'Một thực thể máy ảo trong biểu đồ điều tra Azure Sentinel hiển thị thông tin quy trình được liên kết với máy chủ đó. Chế độ xem Dòng thời gian cung cấp điều hướng theo trình tự thời gian thông qua các sự kiện và thực thể liên quan đến sự cố.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783729405427-0yt2vz5v.jpg', 'published'),
  ('sc200-456', 'sc-200', 456, 'You have a Microsoft 365 subscription that uses Microsoft Defender XDR.  
  
You are investigating an incident.  
  
You need to review the incident tasks that were performed. The solution must include a query that will display the incidents in a workbook, and then display the tasks of each incident in another grid.  
  
Which table should you target in the query?', '[{"key":"A","text":"SecurityIncident"},{"key":"B","text":"SecurityEvent"},{"key":"C","text":"SentinelAudit"},{"key":"D","text":"SecurityAlert"}]'::jsonb, ARRAY['A']::text[], 'Bảng Sự cố bảo mật trong Ngôn ngữ truy vấn Kusto (được sổ làm việc Sentinel sử dụng) chứa siêu dữ liệu sự cố bao gồm ID sự cố, mức độ nghiêm trọng, trạng thái và thông tin nhiệm vụ. Truy vấn bảng này cho phép bạn hiển thị các sự cố trong một lưới và nêu chi tiết các nhiệm vụ liên quan của chúng trong một lưới khác. Các bảng SecurityEvent, SentinelAudit và SecurityAlert không chứa thông tin chi tiết về nhiệm vụ sự cố.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-457', 'sc-200', 457, 'You have a Microsoft 365 subscription that uses Microsoft Defender XDR.  
  
You have an Azure subscription that uses Microsoft Security Copilot.  
  
You need to create a custom promptbook in Security Copilot to collect the following information for an incident ID:  
  
- An incident summary  
- Threat intelligence about the identified threat actors  
- A detailed analysis of users affected by the incident  
- A detailed analysis of devices affected by the incident  
  
Which four actions should you perform, in sequence?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"A"},{"id":"step2","text":"Slot 2:","correctAnswer":"F"},{"id":"step3","text":"Slot 3:","correctAnswer":"D"},{"id":"step4","text":"Slot 4:","correctAnswer":"B"}],"choices":[{"key":"A","text":"From the Security Copilot standalone portal, create a session."},{"key":"B","text":"Create the promptbook."},{"key":"C","text":"Enter a single prompt and gather the required information about a sample incident."},{"key":"D","text":"Select the prompts to include in the promptbook."},{"key":"E","text":"From the Microsoft Defender XDR portal, select Copilot."},{"key":"F","text":"Enter the four prompts and gather the required information about a sample incident."}]}'::jsonb, ARRAY['step1=A', 'step2=F', 'step3=D', 'step4=B']::text[], 'Sổ nhắc tùy chỉnh trong Microsoft Security Copilot chỉ có thể được xây dựng từ cổng Security Copilot độc lập chứ không phải từ trải nghiệm Defender XDR được nhúng. Bạn bắt đầu một phiên ở đó và chạy bốn lời nhắc cần thiết để thu thập bản tóm tắt sự cố, thông tin về tác nhân đe dọa cũng như phân tích tác động của người dùng và thiết bị; sau đó bạn chọn những lời nhắc thành công đó từ phiên và chọn Tạo sổ nhắc để lưu trình tự dưới dạng quy trình làm việc có thể sử dụng lại.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-458', 'sc-200', 458, 'You have the resources displayed in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783735829239-hhw0nn5t.png)  
  
You have an Azure subscription that uses Microsoft Defender for Cloud.  
  
You need to enable Microsoft Defender for Servers on every resource.  
  
Which resources require installation of the Azure Arc agent?', '[{"key":"A","text":"Server3 only"},{"key":"B","text":"Server1 and Server4 only"},{"key":"C","text":"Server1, Server2, and Server4 only"},{"key":"D","text":"Server1, Server2, Server3, and Server4"}]'::jsonb, ARRAY['C']::text[], 'Các máy chủ hỗ trợ Azure Arc sử dụng tác nhân Máy được kết nối cho các máy chủ tích hợp được lưu trữ tại chỗ hoặc trên đám mây khác tới Azure. Do đó, máy chủ tại chỗ và máy ảo AWS cần có tác nhân. Azure virtual machine đã có khả năng quản lý Azure gốc và không yêu cầu Azure Arc.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783735829239-hhw0nn5t.png', 'published'),
  ('sc200-459', 'sc-200', 459, 'You have a Microsoft 365 subscription that uses Microsoft Security Copilot.  
  
You have the files listed in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783746021772-8w3c25xu.png)  
  
Each file contains a copy of your company''s compliance policy.  
  
You need to ensure that Security Copilot responses are informed by the compliance policy.  
  
Which files can you upload to Security Copilot?', '[{"key":"A","text":"File1.docx only"},{"key":"B","text":"File3.txt only"},{"key":"C","text":"File1.docx and File3.txt only"},{"key":"D","text":"File2.pdf and File3.txt only"},{"key":"E","text":"File1.docx, File2.pdf, and File3.txt"}]'::jsonb, ARRAY['D']::text[], 'Microsoft Security Copilot hỗ trợ tải lên DOCX, PDF và TXT khi mỗi tệp riêng lẻ no lớn hơn 3 MB. Tệp TXT 2 MB và 128 KB đáp ứng các yêu cầu đó; tệp DOCX 4 MB thì không.', 'General', ARRAY['SC-200', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783746021772-8w3c25xu.png', 'published'),
  ('sc200-460', 'sc-200', 460, 'You have a Microsoft 365 subscription that uses Microsoft 365 Defender and has data loss prevention (DLP) policies configured with aggregated alerts.  
  
You need to identify the entities affected by an aggregated alert.  
  
What should you review in the DLP alert management dashboard in the Microsoft 365 compliance center?', '[{"key":"A","text":"the Events tab of the alert"},{"key":"B","text":"the Sensitive Info Types tab of the alert"},{"key":"C","text":"Management log"},{"key":"D","text":"the Details tab of the alert"}]'::jsonb, ARRAY['A']::text[], 'Cảnh báo DLP tổng hợp nhóm nhiều sự kiện khớp chính sách. Tab Sự kiện hiển thị các sự kiện có trong cảnh báo và chi tiết của từng sự kiện bao gồm các thực thể bị ảnh hưởng như người dùng, thiết bị, địa chỉ IP và thông tin tệp.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-461', 'sc-200', 461, 'You have a Microsoft 365 subscription containing 500 Windows 11 devices onboarded to Microsoft Defender for Endpoint.  
  
Configure Defender for Endpoint to meet these requirements:  
  
- Allow security operations analysts to run PowerShell scripts on client computers.  
- Automatically remediate threats on client computers.  
  
Which endpoint settings should be configured in the Microsoft Defender XDR portal?', '[]'::jsonb, ARRAY[]::text[], 'Phản hồi trực tiếp cho phép các nhà phân tích được ủy quyền kết nối với thiết bị và chạy các lệnh và tập lệnh PowerShell. Hành vi điều tra và khắc phục tự động được kiểm soát theo cấp độ tự động hóa của từng nhóm thiết bị, có thể cho phép khắc phục hoàn toàn tự động các mối đe dọa được phát hiện.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-462', 'sc-200', 462, 'You have a Microsoft 365 E5 subscription and a Microsoft Sentinel workspace.  
  
You need to create a KQL query that combines data from these sources:  
  
- Microsoft Graph  
- Risky users detected by using Microsoft Entra ID Protection  
  
The solution must minimize the amount of data returned.  
  
How should the query begin?', '[{"key":"A","text":"![](https://cdn.examcademy.com/images/questions/1785601638732-wh0t1f97.png)"},{"key":"B","text":"![](https://cdn.examcademy.com/images/questions/1785601640755-uznopya7.png)"},{"key":"C","text":"![](https://cdn.examcademy.com/images/questions/1785601642775-5dtix6vr.png)"},{"key":"D","text":"![](https://cdn.examcademy.com/images/questions/1785601644800-weqq7672.png)"}]'::jsonb, ARRAY['B']::text[], '`join` mặc định là hương vị tham gia `innerunique`, chỉ trả về các bản ghi từ `MicrosoftGraphActivityLogs` có bản ghi `AADRiskyUsers` phù hợp và loại bỏ trùng lặp phía bên trái. Điều này tránh trả về các bản ghi hoạt động Microsoft Graph không liên quan, không giống như tra cứu `leftouter`, tra cứu này giữ lại tất cả các hàng bên trái.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-463', 'sc-200', 463, 'You have a Microsoft Sentinel workspace named Workspace1 that is connected to the Microsoft Defender portal and has the User and Entity Behavior Analytics (UEBA) behavior layers enabled.  
  
You are creating workbooks.  
  
Standardize workspace queries to meet these requirements:  
  
- Workbook queries must use the Microsoft Sentinel table that stores behavior records.  
- Analysts must be able to drill down from a behavior in a workbook to its contributing raw records by using evidence metadata stored in the behavior records.  
  
What should you configure?', '[]'::jsonb, ARRAY[]::text[], 'SentinelBehaviorInfo là bảng UEBA Microsoft Sentinel dành cho các bản ghi hành vi. Trường động Các trường bổ sung của nó chứa các chi tiết bằng chứng/hành vi bổ sung, bao gồm thông tin tham chiếu bản ghi nguồn cần thiết để liên kết một hành vi trở lại với nhật ký thô đóng góp. Danh mục và Tiêu đề là siêu dữ liệu mô tả, không phải dữ liệu tham chiếu nhật ký thô.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-464', 'sc-200', 464, 'You have three Microsoft Sentinel workspaces connected to the Microsoft Sentinel data lake.  
  
Newly ingested data can require up to 15 minutes before it is available in the data lake tier.  
  
You have a KQL job called Job1 that runs hourly and uses this time filter:  
  
```kql  
where TimeGenerated between (ago(1h) .. now())  
```  
  
You need to modify Job1 so that every run avoids querying data that might **NOT** yet be available in the data lake tier. The solution must ensure that Job1 uses a one-hour lookback window.  
  
What should you do?', '[{"key":"A","text":"Change Job1 to run every 15 minutes."},{"key":"B","text":"Use the ingestion_time() function to filter out the last 15 minutes of data."},{"key":"C","text":"Set the job start time to 30 minutes after job editing."},{"key":"D","text":"Change the time filter to where TimeGenerated between (ago(75m) .. ago(15m))."}]'::jsonb, ARRAY['D']::text[], 'Các công việc hồ dữ liệu Microsoft Sentinel sẽ bù đắp thời gian kết thúc truy vấn bằng độ trễ sẵn sàng dữ liệu. Việc kết thúc khoảng thời gian tại `ago(15m)` sẽ loại trừ dữ liệu gần đây có thể không có sẵn; bắt đầu tại `ago(75m)` giữ lại khoảng thời gian chính xác là một giờ. [Create KQL jobs in the Microsoft Sentinel data lake](https://learn.microsoft.com/en-us/azure/sentinel/datalake/kql-jobs)', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-465', 'sc-200', 465, 'You have a Microsoft Sentinel workspace that retains high-volume firewall logs in the Microsoft Sentinel data lake.  
  
You need to create a dataset optimized for fast queries over a small set of frequently used fields, with refreshes on a frequent schedule. The solution must save the dataset in a custom table in the analytics tier and minimize development effort.  
  
What should you use?', '[{"key":"A","text":"KQL jobs"},{"key":"B","text":"summary rules"},{"key":"C","text":"search jobs"},{"key":"D","text":"scheduled analytics rules"}]'::jsonb, ARRAY['B']::text[], 'Quy tắc tóm tắt Microsoft Sentinel tổng hợp dữ liệu có dung lượng lớn, chẳng hạn như nhật ký tường lửa, ở chế độ nền thành các kết quả được tính toán trước. Chúng có thể chạy 20 phút một lần và lưu kết quả vào các bảng tùy chỉnh ở cấp Analytics, cho phép truy vấn nhanh hơn với nỗ lực phát triển tối thiểu.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-466', 'sc-200', 466, 'You have a Microsoft 365 subscription that includes a Windows device named Device1 and two users named User1 and User2. Device1 is onboarded to Microsoft Defender for Endpoint.  
  
Automatic attack disruption is triggered on Device1, and User1 is contained during the disruption.  
  
You need to ensure that User2 can undo User1''s containment. The solution must adhere to the principle of least privilege.  
  
Which role should you assign to User2?', '[{"key":"A","text":"User Administrator"},{"key":"B","text":"Security Administrator"},{"key":"C","text":"Security Reader"},{"key":"D","text":"Global Administrator"}]'::jsonb, ARRAY['D']::text[], 'Việc hoàn tác tác vụ **Chứa người dùng** trong Bộ bảo vệ Microsoft dành cho Điểm cuối yêu cầu tư cách thành viên trong vai trò Quản trị viên Toàn cầu của Microsoft Entra. Các vai trò bảo mật khác có thể hỗ trợ các hoạt động khắc phục khác nhau nhưng chúng không đáp ứng yêu cầu về quyền cụ thể này. [Take response actions on a device in Microsoft Defender for Endpoint](https://learn.microsoft.com/en-us/defender-endpoint/respond-machine-alerts)', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-467', 'sc-200', 467, 'You have 250 Windows 11 devices that are onboarded to Microsoft Defender for Endpoint.  
  
You need to configure an attack surface reduction (ASR) policy that meets these requirements:  
  
- Prevent all configurations that do not comply with the recommended ASR policy settings.  
- Notify users when a PSExec command runs.  
  
How should you configure the Attack Surface Reduction Rules profile in the endpoint security policy?', '[{"key":"A","text":"Set all recommended rules to Warn and set Block process creations originating from PSExec and WMI commands to Audit."},{"key":"B","text":"Set all recommended rules to Block and set Block process creations originating from PSExec and WMI commands to Warn."},{"key":"C","text":"Set all recommended rules to Block and set Block process creations originating from PSExec and WMI commands to Audit."},{"key":"D","text":"Set all recommended rules to Warn and set Block process creations originating from PSExec and WMI commands to Block."}]'::jsonb, ARRAY['B']::text[], 'Microsoft khuyên bạn nên bật quy tắc ASR bảo vệ tiêu chuẩn ở chế độ Chặn. Chế độ cảnh báo kích hoạt quy tắc ASR như thể nó đang chặn và hiển thị thông báo cảnh báo cho người dùng, trong khi chế độ Kiểm tra ghi lại các phát hiện mà không thực hiện hành động. Do đó, việc đặt quy tắc được đề xuất thành Chặn và quy tắc chặn việc tạo quy trình từ lệnh PSExec và WMI thành Warn sẽ đáp ứng cả hai yêu cầu.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-468', 'sc-200', 468, 'You have an Azure subscription containing two resource groups, RG1 and RG2. The subscription is connected to a Microsoft Entra tenant containing a group named Group1. RG1 contains a Microsoft Sentinel workspace named Workspace1, and RG2 contains an incident-triggered playbook named Playbook1.  
  
Ensure that Group1 members can view incidents and update incident status in Workspace1, while meeting these requirements:  
  
- They can manually run Playbook1.  
- They cannot edit analytics rules.  
- They cannot edit Playbook1.  
- The solution follows least privilege.  
  
Which RBAC role should be assigned to each resource group?', '[]'::jsonb, ARRAY[]::text[], 'Microsoft Sentinel Replyer có thể điều tra sự cố và thay đổi trạng thái của chúng nhưng không cấp quyền tạo hoặc sửa đổi quy tắc phân tích. Nhà điều hành Playbook Microsoft Sentinel cấp khả năng chạy playbook theo cách thủ công mà không được phép sửa đổi playbook; chỉ định nó ở phạm vi RG2 truy cập vào nhóm tài nguyên của Playbook1.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-469', 'sc-200', 469, 'You have a Microsoft Sentinel workspace named Workspace1.  
  
In Workspace1, you plan to create an auxiliary table containing five columns. The columns will store data collected from Linux-based appliances.  
  
You must perform these actions:  
  
- Create the table.  
- Send data to the table.  
  
The solution must minimize administrative effort.  
  
What should you use for each action?', '[]'::jsonb, ARRAY[]::text[], 'Bạn có thể tạo bảng tùy chỉnh gói phụ trợ trong không gian làm việc Log Analytics trực tiếp thông qua trải nghiệm Bảng của cổng thông tin Azure bằng cách chọn Tạo và chọn sơ đồ bảng Phụ trợ/Hồ, một quy trình công việc được hướng dẫn đòi hỏi ít nỗ lực quản trị hơn đáng kể so với việc xây dựng và gửi các yêu cầu API REST, mẫu ARM/Bicept hoặc tập lệnh CLI/PowerShell theo cách thủ công. Sau đó, để nhập tập dữ liệu năm cột từ các thiết bị dựa trên Linux, API Nhập nhật ký được ghép nối với Quy tắc thu thập dữ liệu là cơ chế được thiết kế đặc biệt để định tuyến dữ liệu lược đồ tùy chỉnh vào bảng Log Analytics tùy chỉnh, vì Tác nhân Azure Monitor nhắm mục tiêu thu thập dữ liệu đo từ xa dựa trên VM và trình kết nối nhật ký hệ thống tích hợp nằm trong phạm vi lược đồ bảng Syslog cố định thay vì các bảng tùy chỉnh tùy ý.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-470', 'sc-200', 470, 'You have a Windows 11 device named Device1 that is onboarded to Microsoft Defender for Endpoint and has tamper protection enabled.  
  
You are investigating a possible threat on Device1.  
  
You enable troubleshooting mode for Device1.  
  
You need to temporarily turn off tamper protection on Device1.  
  
Which PowerShell command should you run on Device1?', '[{"key":"A","text":"Set-MpPreference"},{"key":"B","text":"mpcmdrun.exe"},{"key":"C","text":"Get-MpComputerStatus"},{"key":"D","text":"MDELiveAnalyzer.ps1"}]'::jsonb, ARRAY['A']::text[], 'Trong chế độ khắc phục sự cố của Bộ bảo vệ Microsoft dành cho điểm cuối trên Windows, `Set-MpPreference -DisableTamperProtection $true` tạm thời vô hiệu hóa tính năng chống giả mạo. `Get-MpComputerStatus` chỉ truy xuất thông tin trạng thái của Defender; nó không thay đổi cài đặt chống giả mạo.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-471', 'sc-200', 471, 'You are investigating an incident in Microsoft Defender XDR involving a simulated fileless PowerShell attack. The incident includes correlated alerts from Microsoft Defender for Endpoint and Microsoft Defender for Identity.  
  
You need to identify:  
  
- A list of devices affected by the incident  
- The incident timeline  
  
Which Microsoft Defender portal option should you use for each requirement while minimizing administrative effort?', '[]'::jsonb, ARRAY[]::text[], 'Tab Nội dung cung cấp chế độ xem tổng hợp về nội dung sự cố, bao gồm tất cả các thiết bị liên quan. Tab Cảnh báo trình bày các cảnh báo tương quan của sự cố theo trình tự thời gian, cho phép xem xét tiến trình tấn công theo dòng thời gian.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-472', 'sc-200', 472, 'You have a Microsoft 365 subscription.  
  
You have a Microsoft Sentinel workspace named Workspace1 that is connected to Microsoft Defender XDR.  
  
You have an Amazon Web Services (AWS) account named AWS1. AWS CloudTrail events are ingested into Workspace1 by using the Amazon Simple Storage Service (Amazon S3) data connector.  
  
You have a unified incident showing a risky Microsoft Entra sign-in, followed by AWS IAM access key creation events in CloudTrail, and then a rapid rise in AWS API activity from the same identity.  
  
You need to recommend a solution that dynamically limits the impact of similar incidents. The solution must meet the following requirements:  
  
- Ensure that you can review and reverse attack-containment actions if required.  
- Minimize administrative effort.  
  
What should you include in the recommendation?', '[{"key":"A","text":"User and Entity Behavior Analytics (UEBA)"},{"key":"B","text":"automatic attack disruption in Microsoft Defender XDR"},{"key":"C","text":"Microsoft Purview multicloud data discovery scans"},{"key":"D","text":"Microsoft Sentinel automation rules and Azure Logic Apps playbooks"}]'::jsonb, ARRAY['B']::text[], 'Tính năng gián đoạn tấn công tự động của Microsoft Defender XDR sử dụng mối tương quan ở mức độ sự cố có độ tin cậy cao để tự động ngăn chặn các cuộc tấn công. Đối với AWS IAM, nó có thể đính kèm chính sách từ chối đối với người dùng IAM bị xâm phạm hoặc vai trò liên kết để thu hồi quyền và chặn quyền truy cập tài nguyên AWS bổ sung. Các hành động ngăn chặn có thể được xem xét trong sự cố và Trung tâm hành động và được phát hành hoặc hoàn tác. Khả năng tích hợp này yêu cầu quản trị ít liên tục hơn so với việc thiết kế và duy trì các quy tắc tự động hóa Sentinel tùy chỉnh và sách hướng dẫn Ứng dụng Logic.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-473', 'sc-200', 473, 'You have a Microsoft 365 subscription that includes a Windows 11 device named Device1. Device1 is onboarded to Microsoft Defender for Endpoint.  
  
An automated investigation generates a pending remediation action to stop a suspicious process on Device1.  
  
You need to approve that remediation action.  
  
What should you use in the Microsoft Defender portal?', '[{"key":"A","text":"Tutorials & simulations from Endpoints"},{"key":"B","text":"Advanced hunting from Hunting"},{"key":"C","text":"Incidents from Incidents & alerts"},{"key":"D","text":"Action center from Actions & submissions"}]'::jsonb, ARRAY['D']::text[], 'Trung tâm hành động hợp nhất, trong phần Hành động và nội dung gửi, liệt kê các hành động khắc phục đang chờ xử lý từ các cuộc điều tra tự động. Tab Đang chờ xử lý của nó cho phép các nhà phân tích được ủy quyền phê duyệt hoặc từ chối hành động để cuộc điều tra có thể tiếp tục.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-474', 'sc-200', 474, 'You have a Microsoft 365 subscription that uses Microsoft Purview.  
  
During a suspected account compromise, an executive’s account carries out Microsoft 365 Copilot interactions.  
  
You need to determine which Copilot interactions were performed. The solution must minimize administrative effort.  
  
Which Microsoft Purview solution should you use?', '[{"key":"A","text":"Audit"},{"key":"B","text":"eDiscovery"},{"key":"C","text":"Data Loss Prevention (DLP)"},{"key":"D","text":"Data Security Investigations"}]'::jsonb, ARRAY['A']::text[], 'Kiểm tra Microsoft Purview tự động ghi lại các tương tác của người dùng Microsoft 365 Copilot, bao gồm những người đã tương tác với Copilot, thời gian và địa điểm xảy ra tương tác cũng như các tài nguyên được truy cập có liên quan. Tìm kiếm kiểm tra có thể lọc các hoạt động Copilot, biến nó thành tùy chọn trực tiếp, ít quản trị để xác định các tương tác của tài khoản trong quá trình điều tra xâm phạm.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-475', 'sc-200', 475, 'You have a Microsoft 365 subscription that uses Microsoft Defender for Endpoint Plan 1 and includes a Windows 11 device named Device1.  
  
A suspicious PowerShell-activity alert is generated on Device1.  
  
You need to collect forensic data from Device1. The solution must meet these requirements:  
  
- Include details of all running processes and active network connections on Device1.  
- Minimize administrative effort.  
  
What should you do first in the Microsoft Defender portal?', '[{"key":"A","text":"Restrict the execution of all applications."},{"key":"B","text":"Contain Device1."},{"key":"C","text":"Initiate a live response session."},{"key":"D","text":"Collect an investigation package."}]'::jsonb, ARRAY['D']::text[], 'Gói điều tra tự động thu thập các tạo phẩm điều tra của Windows, bao gồm CSV của các tiến trình hiện đang chạy và `ActiveNetConnections.txt` với các kết nối mạng TCP/IP hiện tại. Điều này tạo ra dữ liệu cần thiết trong một hành động thu thập và yêu cầu ít thao tác thủ công hơn so với việc đưa ra các lệnh phản hồi trực tiếp riêng lẻ.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-476', 'sc-200', 476, 'You have a Microsoft 365 subscription that uses Microsoft Defender XDR with automatic attack disruption enabled.  
  
During an active ransomware incident, Microsoft Defender for Endpoint automatically contains a device to limit lateral movement.  
  
Use advanced hunting to return:  
  
- Devices that are contained due to response actions  
- The most recent isolation state for each device  
  
How should you complete the KQL query?', '[]'::jsonb, ARRAY[]::text[], '`project` chọn các trường sự kiện bắt buộc sau bộ lọc hành động phản hồi. `summarize arg_max(Timestamp, *) by DeviceId, DeviceName` nhóm các sự kiện theo thiết bị và giữ lại hàng hoàn chỉnh có dấu thời gian lớn nhất, mang lại trạng thái cách ly mới nhất cho từng thiết bị.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-477', 'sc-200', 477, 'You have a Microsoft 365 E5 subscription.  
  
You are investigating a suspected data-exfiltration attempt in which a user allegedly emailed a file to multiple external recipients and then deleted the message.  
  
Create one content-search keyword query for an email message that meets these criteria:  
  
- Includes an attachment named File1.xlsx  
- Was sent during the 48-hour window from February 01, 2026, through February 02, 2026  
- Was sent to multiple external recipients, including a user at the contoso-partner.com domain  
  
How should you complete the keyword query?', '[]'::jsonb, ARRAY[]::text[], 'AttachmentNames tìm kiếm tên của các tệp được đính kèm trong thư email. Người nhận tìm kiếm tất cả các trường người nhận—Tới, Cc và Bcc—và có thể khớp với miền của người nhận, trong khi Đến chỉ tìm kiếm trường Đến. Thuộc tính Đã gửi hỗ trợ so sánh phạm vi ngày để giới hạn thư trong khoảng thời gian được chỉ định.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-478', 'sc-200', 478, 'You have a Microsoft Sentinel workspace named Workspace1 that is connected to the Microsoft Defender portal.  
  
You perform the following actions:  
  
- Configure the Log Analytics workspace diagnostic setting to collect query audit data into a table named LAQueryLogs in Workspace1.  
- Enable the User and Entity Behavior Analytics (UEBA) behavior layers and confirm that behavior records are being generated and stored in the SentinelBehaviorInfo and SentinelBehaviorEntities tables in Workspace1.  
  
You need to create an advanced hunting query that meets these requirements:  
  
- Returns UEBA behaviors generated by Microsoft Sentinel during the last 24 hours.  
- Includes the user principal name (UPN) associated with each behavior.  
- Returns the behavior row even when no UPN is associated.  
  
How should you complete the KQL query?', '[]'::jsonb, ARRAY[]::text[], 'Tính năng tìm kiếm nâng cao trong cổng Defender sử dụng BehaviorInfo và BehaviorEntities. BehaviorInfo có thể được ServiceSource lọc để trả về các hành vi UEBA của Microsoft Sentinel, trong khi BehaviorEntities chứa AccountUpn. Một kết nối bên trái sẽ bảo tồn mọi bản ghi hành vi đủ điều kiện từ BehaviorInfo ngay cả khi nó có thực thể người dùng hoặc UPN phù hợp với no.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-479', 'sc-200', 479, 'You have a Microsoft 365 subscription that uses Microsoft Purview and contains a Microsoft Teams team named Team1.  
  
You are investigating a suspected leak of internal credentials through messages and shared files in Teams chats.  
  
You need to create a content search that returns content from Team1’s private and shared channels.  
  
What should be included in the content search for each channel type?', '[]'::jsonb, ARRAY[]::text[], 'Thư được đăng trong kênh riêng tư của Microsoft Teams được ghi nhật ký vào hộp thư Exchange Online của các thành viên trong kênh đó chứ không phải vào hộp thư của chính nhóm, do đó, việc trả lại nội dung thư của kênh riêng tư trong tìm kiếm nội dung yêu cầu phải bao gồm hộp thư Exchange Online của các thành viên của kênh. Thay vào đó, các tin nhắn kênh chung được ghi vào hộp thư hệ thống được liên kết với nhóm chính và vì Nhóm không hỗ trợ tìm kiếm trực tiếp hộp thư hệ thống đó nên cách tiếp cận được ghi lại là tìm kiếm hộp thư riêng của nhóm chính để nắm bắt nội dung thư kênh chung.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published'),
  ('sc200-480', 'sc-200', 480, 'You have a Microsoft Entra tenant with Microsoft Entra ID P1 licenses.  
  
Microsoft Graph activity logs are streamed to a Log Analytics workspace named Workspace1 by using Azure Monitor Diagnostic settings.  
  
You can query Workspace1.  
  
An internal line-of-business (LOB) application is suspected of enumerating Microsoft 365 groups and failing authorization checks. During the last three days, the application has generated a high volume of Microsoft Graph requests, with failures reported as HTTP 401 and HTTP 403 errors.  
  
You need to identify the identity associated with the failed requests. The solution must return the top identities that generated unauthorized requests to the `/groups` resource during the last three days, grouped by AppId, ServicePrincipalId, and UserId.  
  
Which KQL query should you run in Workspace1?', '[{"key":"A","text":"![](https://cdn.examcademy.com/images/questions/1788322868184-7zq7q1i1.png)"},{"key":"B","text":"![](https://cdn.examcademy.com/images/questions/1788322871277-oylcyfrj.png)"},{"key":"C","text":"![](https://cdn.examcademy.com/images/questions/1788322873858-flqvi22r.png)"},{"key":"D","text":"![](https://cdn.examcademy.com/images/questions/1788322876466-kjxsum3q.png)"}]'::jsonb, ARRAY['C']::text[], 'Nhật ký hoạt động của Microsoft Graph trong Log Analytics sử dụng bảng `MicrosoftGraphActivityLogs` và bao gồm `TimeGenerated`, `ResponseStatusCode`, `RequestUri`, `RequestId`, `AppId`, `ServicePrincipalId` và `UserId`. Lọc bảng đó trong ba ngày qua, trạng thái 401 hoặc 403 và `/groups`, sau đó đếm các ID yêu cầu riêng biệt theo ba trường nhận dạng và sắp xếp giảm dần, trả về các nguồn yêu cầu trái phép hàng đầu cần thiết. Truy vấn được ghi lại của Microsoft cho kịch bản này sử dụng cùng một mẫu truy vấn đó.', 'General', ARRAY['SC-200', 'General']::text[], NULL, 'published')
ON CONFLICT (id) DO UPDATE SET
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

COMMIT;