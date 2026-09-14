-- =========================================================================
-- STANDALONE SQL IMPORT FOR AZ-500: Microsoft Azure Security Technologies
-- Total questions: 347 questions
-- Default status: is_disabled = true (Hidden from home screen to avoid clutter)
-- =========================================================================

BEGIN;

-- 1. Ensure custom_certificates table has is_disabled & badge column
ALTER TABLE public.custom_certificates ADD COLUMN IF NOT EXISTS is_disabled BOOLEAN DEFAULT false;
ALTER TABLE public.custom_certificates ADD COLUMN IF NOT EXISTS badge TEXT DEFAULT 'none';

-- 2. Upsert Certificate metadata with is_disabled = true
INSERT INTO public.custom_certificates (
  id, name, code, description, difficulty, estimated_hours, color_class, icon_name, is_vip, is_disabled, badge
) VALUES (
  'az-500',
  'Microsoft Azure Security Technologies',
  'AZ-500',
  'Chinh phục chứng chỉ Microsoft Azure Security Technologies (AZ-500). Quản lý danh tính và quyền truy cập, bảo mật mạng, bảo vệ dữ liệu và ứng dụng, và quản lý các hoạt động bảo mật với Defender và Sentinel.',
  'Nâng cao',
  '18-22 Giờ',
  'bg-gradient-to-br from-rose-700 via-red-800 to-slate-950 text-white',
  'ShieldCheck',
  false,
  true, -- is_disabled = true by default
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
  ('az500-2', 'az-500', 2, 'You have an Azure subscription containing the virtual networks shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783965706296-q1840ju2.png)  
  
The subscription includes the virtual machines shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783965709673-hslkqu8b.png)  
  
All virtual machines have private IP addresses only.  
  
You deploy Azure Bastion to VNet1 as shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783965717507-376763li.png)  
  
For each statement below, select **Yes** if it is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"You can connect to VM1 through Bastion1 by using the Remote Desktop Connection client.","correctAnswer":"No"},{"id":"2","text":"You can connect to VM2 through Bastion1 by using SSH.","correctAnswer":"Yes"},{"id":"3","text":"You can connect to VM3 through Bastion1 by using the Azure portal.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:Yes","3:No"]'::jsonb, 'Azure Bastion Basic hỗ trợ các kết nối SSH dựa trên trình duyệt với các máy ảo trong cùng một mạng ảo hoặc ngang hàng trực tiếp, nhưng kết nối máy khách RDP/SSH gốc yêu cầu SKU Tiêu chuẩn hoặc Cao cấp. VNet peering không mang tính truyền dẫn: kết nối VNet1-to-VNet2 và kết nối VNet2-to-VNet3 không cung cấp kết nối giữa VNet1 và VNet3. [Azure Bastion SKU comparison](https://learn.microsoft.com/en-us/azure/bastion/bastion-sku-comparison), [Azure Bastion overview](https://learn.microsoft.com/en-us/azure/bastion/bastion-overview)', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783965706296-q1840ju2.png', 'published'),
  ('az500-4', 'az-500', 4, 'You have a Microsoft Entra tenant named contoso.com.  
  
You plan to collaborate with a partner organization that has a Microsoft Entra tenant named fabrikam.com.  
  
Fabrikam.com uses these identity providers:  
  
- Google Cloud Platform (GCP)  
- Microsoft accounts  
- Microsoft Entra ID  
  
You need to configure the Cross-tenant access settings for B2B collaboration.  
  
Which identity providers support cross-tenant access?', '[{"key":"A","text":"Microsoft Entra ID only"},{"key":"B","text":"GCP and Microsoft Entra ID only"},{"key":"C","text":"Microsoft accounts and Microsoft Entra ID only"},{"key":"D","text":"GCP, Microsoft accounts, and Microsoft Entra ID"}]'::jsonb, '["A"]'::jsonb, 'Cài đặt quyền truy cập của nhiều người thuê kiểm soát hoạt động cộng tác B2B với các tổ chức Microsoft Entra bên ngoài. Tài khoản Google và Microsoft được hỗ trợ với tư cách là nhà cung cấp danh tính bên ngoài để đăng nhập với tư cách khách nhưng cài đặt quyền truy cập của nhiều đối tượng thuê chỉ áp dụng cho đối tượng thuê Microsoft Entra.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-5', 'az-500', 5, 'After creating a new Azure subscription, you are tasked with ensuring that custom alert rules can be created in Azure Security Center.  
  
You have created an Azure Storage account.  
  
Which action should you take?', '[{"key":"A","text":"You should make sure that Azure Active Directory (Azure AD) Identity Protection is removed."},{"key":"B","text":"You should create a DLP policy."},{"key":"C","text":"You should create an Azure Log Analytics workspace."},{"key":"D","text":"You should make sure that Security Center has the necessary tier configured."}]'::jsonb, '["C"]'::jsonb, 'Quy tắc cảnh báo dựa trên nhật ký tùy chỉnh yêu cầu không gian làm việc Log Analytics làm kho lưu trữ dữ liệu mục tiêu cho các nhật ký và truy vấn được thu thập. Microsoft Defender for Cloud (trước đây là Trung tâm bảo mật Azure) tích hợp với Log Analytics và Azure Monitor tạo các quy tắc cảnh báo tìm kiếm nhật ký tùy chỉnh đối với không gian làm việc đó.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-6', 'az-500', 6, 'Your company uses an Azure Container Registry.  
  
You must assign a user a role that permits uploading images to the Azure Container Registry. The assigned role must provide no more privileges than necessary.  
  
Which of the following roles should you assign?', '[{"key":"A","text":"Owner"},{"key":"B","text":"Contributor"},{"key":"C","text":"AcrPush"},{"key":"D","text":"AcrPull"}]'::jsonb, '["C"]'::jsonb, 'Vai trò `AcrPush` cấp quyền cho mặt phẳng dữ liệu để đẩy và kéo các hình ảnh và thành phần trong vùng chứa mà không cần cấp quyền quản lý tài nguyên Azure. `AcrPull` bị giới hạn ở việc kéo hình ảnh, trong khi `Contributor` và `Owner` cung cấp các đặc quyền rộng hơn mức yêu cầu.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-7', 'az-500', 7, 'HOTSPOT -  
  
You have an Azure subscription containing the alerts shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953052473-ol5jbi8a.jpg)  
  
Use the drop-down menus to choose the answer that completes each statement based on the information in the graphic.', '[]'::jsonb, '[]'::jsonb, 'Các phiên bản cảnh báo Azure Monitor sử dụng trạng thái phản hồi của người dùng Mới, Đã xác nhận và Đã đóng. Trạng thái phản hồi có thể chỉnh sửa được, do đó, cảnh báo đã xác nhận có thể chuyển sang Mới hoặc Đã đóng, trong khi cảnh báo đã đóng có thể chuyển sang Mới hoặc Đã xác nhận.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953052473-ol5jbi8a.jpg', 'published'),
  ('az500-8', 'az-500', 8, 'HOTSPOT -  
  
You have an Azure subscription named Sub1.  
  
You create a virtual network containing one subnet. You provision the virtual machines on that subnet as shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783952199313-m0vbkffk.png)  
  
No network security groups (NSGs) have been provisioned yet. You need to implement network security that meets these requirements:  
  
- Allow traffic to VM4 only from VM3.  
- Allow Internet traffic only to VM1 and VM2.  
- Minimize the number of NSGs and network security rules.  
  
How many NSGs and network security rules should you create?', '[]'::jsonb, '[]'::jsonb, 'Một NSG được gắn vào mạng con có thể sử dụng các nhóm bảo mật ứng dụng trong các quy tắc của nó. Tạo quy tắc cho phép từ AppGroup3 đến AppGroup4, sau đó tạo quy tắc từ chối có mức độ ưu tiên thấp hơn từ mạng ảo đến AppGroup4 để quy tắc AllowVNetInBound mặc định không cho phép các nguồn VNet khác. Quy tắc thứ ba cho phép lưu lượng truy cập Internet tới AppGroup12, chứa VM1 và VM2. Quy tắc từ chối gửi đến mặc định chặn quyền truy cập Internet vào VM3 và VM4.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783952199313-m0vbkffk.png', 'published'),
  ('az500-9', 'az-500', 9, 'You have an Azure subscription containing an Azure SQL database named SQLDB1. SQLDB1 includes the columns shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783955735251-mxajqkg2.jpg)  
  
For the Email and Birthday columns, dynamic data masking is implemented by using the default masking function. Which value will users see in each column?  
  
Each value may be used once, more than once, or not at all.', '{"statements":[{"id":"email","text":"Email:","correctAnswer":"D"},{"id":"birthday","text":"Birthday:","correctAnswer":"A"}],"choices":[{"key":"A","text":"1900-01-01"},{"key":"B","text":"1900-01-01 00:00:00.0000"},{"key":"C","text":"2010-XX-XX"},{"key":"D","text":"XXXX"},{"key":"E","text":"aXXXX@XXXX.com"},{"key":"F","text":"XXXX@XXXX.com"},{"key":"G","text":"XXXX@XXXX.XXX"}]}'::jsonb, '["email=D","birthday=A"]'::jsonb, 'Chức năng che giấu dữ liệu động mặc định của Azure SQL Database trả về XXXX cho dữ liệu chuỗi. Đối với dữ liệu ngày/giờ, nó trả về giá trị 1900-01-01; cột Ngày hiển thị giá trị này là 1900-01-01.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783955735251-mxajqkg2.jpg', 'published'),
  ('az500-10', 'az-500', 10, 'You have an Azure environment.  
  
You need to identify Azure configurations and workloads that do not comply with ISO 27001:2013 standards.  
  
What should you use?', '[{"key":"A","text":"Azure Sentinel"},{"key":"B","text":"Azure Active Directory (Azure AD) Identity Protection"},{"key":"C","text":"Microsoft Defender for Cloud"},{"key":"D","text":"Microsoft Defender for Identity"}]'::jsonb, '["C"]'::jsonb, 'Microsoft Defender for Cloud sử dụng bảng điều khiển tuân thủ quy định để đánh giá các tài nguyên Azure dựa trên các tiêu chuẩn và biện pháp kiểm soát quy định, đồng thời báo cáo các tài nguyên tuân thủ hoặc không tuân thủ. ISO 27001:2013 được cung cấp dưới dạng sáng kiến ​​tuân thủ quy định của Chính sách Azure để đánh giá các cấu hình và khối lượng công việc có liên quan của Azure.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-11', 'az-500', 11, 'You have an Azure subscription containing an Azure web app named App1 and a virtual machine named VM1. VM1 runs Microsoft SQL Server and connects to a virtual network named VNet1. App1, VM1, and VNet1 are located in the US Central Azure region.  
  
You need to make sure that App1 can connect to VM1. The solution must minimize costs.  
  
What should you include in the solution?', '[{"key":"A","text":"regional virtual network integration"},{"key":"B","text":"gateway-required virtual network integration"},{"key":"C","text":"Azure Front Door"},{"key":"D","text":"Azure Application Gateway integration"},{"key":"E","text":"NAT gateway integration"}]'::jsonb, '["A"]'::jsonb, 'Tích hợp mạng ảo khu vực cho phép ứng dụng Azure App Service tạo kết nối ra bên ngoài tới các tài nguyên trong mạng ảo trong cùng khu vực, bao gồm cả VM chạy SQL Server. Nó tránh được cổng mạng ảo và chi phí liên quan cần thiết cho việc tích hợp cần có cổng.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-12', 'az-500', 12, 'You have an Azure subscription.  
  
You plan to deploy a new Conditional Access policy named CAPolicy1.  
  
You need to use the What If tool to evaluate how CAPolicy1 will affect users. The solution must minimize CAPolicy1''s impact on users.  
  
What should you set the **Enable policy** setting for CAPolicy1 to?', '[{"key":"A","text":"Off"},{"key":"B","text":"On"},{"key":"C","text":"Report only"}]'::jsonb, '["C"]'::jsonb, 'Chế độ chỉ báo cáo đánh giá và báo cáo kết quả của chính sách Truy cập có điều kiện mà không thực thi các biện pháp kiểm soát trong quá trình đăng nhập. Nó được bao gồm trong các đánh giá What If, trong khi chính sách được đặt thành Tắt thì không, do đó, nó cho phép đánh giá tác động đồng thời tránh gây gián đoạn cho người dùng.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-13', 'az-500', 13, 'You have an Azure subscription.  
  
You create an Azure web app named Contoso1812 that uses an S1 App Service plan.  
  
You plan to:  
  
- Create a CNAME DNS record for www.contoso.com that points to Contoso1812.  
  
You need to ensure that users can access Contoso1812 by using the https://www.contoso.com URL.  
  
Which two actions should you take? Each correct answer provides part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Turn on the system-assigned managed identity for Contoso1812."},{"key":"B","text":"Add a hostname to Contoso1812."},{"key":"C","text":"Scale out the App Service plan of Contoso1812."},{"key":"D","text":"Add a deployment slot to Contoso1812."},{"key":"E","text":"Scale up the App Service plan of Contoso1812."},{"key":"F","text":"Upload a PFX file to Contoso1812."}]'::jsonb, '["B","F"]'::jsonb, 'Miền tùy chỉnh Dịch vụ ứng dụng phải được thêm làm tên máy chủ trên ứng dụng web sau khi ánh xạ DNS của nó được định cấu hình. HTTPS trên tên máy chủ tùy chỉnh đó cũng yêu cầu chứng chỉ TLS/SSL được liên kết với tên máy chủ; tệp PFX cung cấp chứng chỉ mang theo của riêng bạn. Gói Dịch vụ ứng dụng S1 hỗ trợ ràng buộc SSL bắt buộc.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-14', 'az-500', 14, 'You have 15 Azure virtual machines in a resource group called RG1.  
  
All of the virtual machines run the same applications.  
  
You need to stop unauthorized applications and malware from running on the virtual machines.  
  
What should you do?', '[{"key":"A","text":"Apply an Azure policy to RG1."},{"key":"B","text":"From Azure Security Center, configure adaptive application controls."},{"key":"C","text":"Configure Azure Active Directory (Azure AD) Identity Protection."},{"key":"D","text":"Apply a resource lock to RG1."}]'::jsonb, '["B"]'::jsonb, 'Kiểm soát ứng dụng thích ứng sử dụng khối lượng công việc được quan sát để tạo danh sách cho phép các ứng dụng đã biết là an toàn cho máy ảo và xác định việc thực thi các ứng dụng bên ngoài danh sách đó. Khả năng liệt kê cho phép ứng dụng này được thiết kế để bảo vệ máy khỏi phần mềm trái phép và phần mềm độc hại.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-15', 'az-500', 15, 'You have an Azure Container Registry named `Registry1`.  
  
From Azure Security Center, you enable Azure Container Registry vulnerability scanning for the images in `Registry1`.  
  
You perform the following actions:  
  
- Push a Windows image named `Image1` to `Registry1`.  
- Push a Linux image named `Image2` to `Registry1`.  
- Push a Windows image named `Image3` to `Registry1`.  
- Modify `Image1` and push the new image as `Image4` to `Registry1`.  
- Modify `Image2` and push the new image as `Image5` to `Registry1`.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953697497-1njlra9m.png)  
  
Which two images will be scanned for vulnerabilities? Each correct answer presents a complete solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Image4"},{"key":"B","text":"Image2"},{"key":"C","text":"Image1"},{"key":"D","text":"Image3"},{"key":"E","text":"Image5"}]'::jsonb, '["B","E"]'::jsonb, 'Quét lỗ hổng bảo mật của Trung tâm bảo mật Azure để đăng ký Azure Container tự động quét các hình ảnh Linux được hỗ trợ khi chúng được đẩy vào sổ đăng ký. Do đó, hình ảnh Linux `Image2` và `Image5` được quét; hình ảnh Windows thì không.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953697497-1njlra9m.png', 'published'),
  ('az500-16', 'az-500', 16, 'HOTSPOT -  
  
You have an Azure subscription containing the virtual machines listed in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953185016-gx2qgytb.png)  
  
Subnet1 and Subnet2 are configured with a Microsoft.Storage service endpoint.  
  
You have an Azure Storage account named storageacc1, configured as shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953187245-3xwwoe5j.jpg)  
  
For each of the following statements, select **Yes** if it is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"From VM1, you can upload a blob to storageacc1.","correctAnswer":"No"},{"id":"2","text":"From VM2, you can upload a blob to storageacc1.","correctAnswer":"No"},{"id":"3","text":"From VM3, you can upload a blob to storageacc1.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:No","3:No"]'::jsonb, 'Tài khoản lưu trữ được giới hạn ở các mạng đã chọn chỉ cho phép các mạng con mạng ảo được định cấu hình hoặc các nguồn IP được phép. Microsoft.Storage service endpoint thay đổi lưu lượng truy cập giới hạn lưu trữ từ mạng con để sử dụng IP riêng của VM, do đó, mục nhập tường lửa IP công cộng của VM1 không được áp dụng. Vì mạng con mạng ảo no được định cấu hình trên tài khoản lưu trữ nên lưu lượng truy cập từ cả Subnet1 và Subnet2 đều bị từ chối.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953185016-gx2qgytb.png', 'published'),
  ('az500-17', 'az-500', 17, 'You must evaluate the underlined segment to determine whether it is correct.  
  
You have been assigned to create a separate subscription for every division in your company. However, all subscriptions will be associated with one Azure Active Directory (Azure AD) tenant.  
  
You need to ensure that every subscription has the same role assignments.  
  
You use Azure AD Privileged Identity Management (PIM).  
  
Select `No adjustment required` if the underlined segment is correct. If it is incorrect, select the correct option.', '[{"key":"A","text":"No adjustment required"},{"key":"B","text":"Azure Blueprints"},{"key":"C","text":"Conditional access policies"},{"key":"D","text":"Azure DevOps"}]'::jsonb, '["B"]'::jsonb, 'Quản lý danh tính đặc quyền Azure AD cung cấp các phân công vai trò Azure RBAC đủ điều kiện và có giới hạn thời gian, trong khi Azure Blueprints hỗ trợ các tạo phẩm phân công vai trò có thể được áp dụng cho các đăng ký để chuẩn hóa các nhiệm vụ truy cập.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-18', 'az-500', 18, 'You have the Azure resource hierarchy shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953090039-0wz85rn4.jpg)  
  
RG1, RG2, and RG3 are resource groups. RG2 contains a virtual machine named VM2. You assign Azure role-based access control (RBAC) roles to the users shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953093081-tawvncjy.png)  
  
For each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"User1 can deploy virtual machines to RG1.","correctAnswer":"Yes"},{"id":"2","text":"User2 can delete VM2.","correctAnswer":"Yes"},{"id":"3","text":"User3 can reset the password of the built-in Administrator account of VM2.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:Yes","2:Yes","3:No"]'::jsonb, 'Các bài tập Azure RBAC kế thừa từ phạm vi cha đến phạm vi con. Người đóng góp được chỉ định trong nhóm quản lý gốc đối tượng thuê sẽ áp dụng cho RG1 và cho phép triển khai tài nguyên. Virtual Machine Contributor được chỉ định tại Subscription2 sẽ áp dụng cho VM2 và cho phép xóa VM. Đăng nhập quản trị viên máy ảo cung cấp thông tin đăng nhập của quản trị viên vào VM, nhưng nó không cung cấp quyền quản lý VM cần thiết để đặt lại mật khẩu Quản trị viên tích hợp cục bộ của nó.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953090039-0wz85rn4.jpg', 'published'),
  ('az500-19', 'az-500', 19, 'You have five Azure subscriptions linked to one Azure Active Directory (Azure AD) tenant.  
  
You create an Azure Policy initiative named SecurityPolicyInitiative1.  
  
You determine the standard role assignments that must be configured on all new resource groups.  
  
You need to enforce SecurityPolicyInitiative1 and the role assignments whenever a new resource group is created.  
  
Which three actions should you perform, in sequence?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"F"},{"id":"step2","text":"Slot 2:","correctAnswer":"A"},{"id":"step3","text":"Slot 3:","correctAnswer":"B"}],"choices":[{"key":"A","text":"Publish an Azure Blueprints version"},{"key":"B","text":"Assign an Azure blueprint."},{"key":"C","text":"Create a policy assignment."},{"key":"D","text":"Create a custom role-based access control (RBAC) role"},{"key":"E","text":"Create a dedicated management subscription."},{"key":"F","text":"Create an Azure Blueprints definition."},{"key":"G","text":"Create an initiative assignment."}]}'::jsonb, '["step1=F","step2=A","step3=B"]'::jsonb, 'Định nghĩa Azure Blueprint có thể đóng gói các nhiệm vụ sáng kiến ​​Chính sách Azure và các nhiệm vụ vai trò RBAC dưới dạng các tạo phẩm. Sau khi xác định các tạo phẩm đó, hãy xuất bản định nghĩa dưới dạng phiên bản và gán bản thiết kế đã xuất bản đó cho các đăng ký hiện hành. Sau đó, việc gán bản thiết kế sẽ áp dụng cấu hình được quản lý cho các nhóm tài nguyên mới được tạo.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-20', 'az-500', 20, 'You have an Azure subscription that contains the Azure App Service web apps displayed in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783965706894-kfa3zzc6.png)  
  
You upload a private-key certificate named Cert1.pfx to App1.  
  
Which apps can use Cert1?', '[{"key":"A","text":"App1 only"},{"key":"B","text":"App1 and App2 only"},{"key":"C","text":"App1 and App4 only"},{"key":"D","text":"App1, App2, and App3 only"},{"key":"E","text":"App1, App2, App3, and App4"}]'::jsonb, '["A"]'::jsonb, 'Chứng chỉ riêng được tải lên hoặc nhập vào Azure App Service chỉ được chia sẻ với các dịch vụ ứng dụng trong cùng một đơn vị triển khai (không gian web), được liên kết với nhóm tài nguyên, khu vực và hệ điều hành của gói Dịch vụ ứng dụng. Chỉ App1 phù hợp với RG1, Đông Mỹ và Windows; App2 có Linux, App3 ở RG2 và App4 ở miền Trung Hoa Kỳ.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783965706894-kfa3zzc6.png', 'published'),
  ('az500-21', 'az-500', 21, 'You have an Azure SQL database and implement Always Encrypted.  
  
You need to ensure that application developers can retrieve and decrypt data in the database.  
  
Which two pieces of information should you give the developers? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"a stored access policy"},{"key":"B","text":"a shared access signature (SAS)"},{"key":"C","text":"the column encryption key"},{"key":"D","text":"user credentials"},{"key":"E","text":"the column master key"}]'::jsonb, '["D","E"]'::jsonb, 'Luôn được mã hóa mã hóa dữ liệu bằng khóa mã hóa cột, khóa này được bảo vệ bằng khóa chính của cột được giữ trong kho khóa bên ngoài. Trình điều khiển máy khách luôn được mã hóa phải có khả năng truy cập vào khóa chính của cột để giải mã khóa mã hóa cột và trả về dữ liệu văn bản gốc. Do đó, các nhà phát triển yêu cầu khóa chính của cột và thông tin xác thực cho phép sử dụng nó.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-22', 'az-500', 22, 'Your network has an on-premises Active Directory domain named adatum.com that synchronizes with a Microsoft Entra tenant.  
  
The Microsoft Entra tenant includes the users in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783965525016-tcvv04wa.png)  
  
You configure Microsoft Entra Password Protection for adatum.com as shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783965527974-ejdly85x.png)  
  
For each statement, select **Yes** if it is true; otherwise, select **No**.', '{"statements":[{"id":"1","text":"User1 will be prompted to change the password on the next sign-in.","correctAnswer":"No"},{"id":"2","text":"User2 can change the password to @d@tum_C0mpleX123.","correctAnswer":"Yes"},{"id":"3","text":"User3 can change the password to Adatum123!.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:Yes","3:Yes"]'::jsonb, 'Bảo vệ mật khẩu kiểm tra mật khẩu trong khi thay đổi hoặc đặt lại; nó không buộc người dùng chỉ sử dụng đám mây có mật khẩu bị cấm hiện tại phải thay đổi mật khẩu đó. Thuật toán mật khẩu bị cấm tùy chỉnh bình thường hóa các thay thế phổ biến và cho điểm các thuật ngữ bị cấm phù hợp cùng với các ký tự còn lại; @d@tum_C0mpleX123 có đủ ký tự còn lại để đáp ứng điểm chấp nhận. Đối với AD DS tại chỗ, chế độ Kiểm tra ghi lại các mật khẩu có thể bị từ chối nhưng cho phép thay đổi mật khẩu, vì vậy Adatum123! được cho phép.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783965525016-tcvv04wa.png', 'published'),
  ('az500-23', 'az-500', 23, 'You are investigating a security issue with an Azure Storage account.  
  
You enable Azure Storage Analytics logs and archive them to a storage account. What should you use to retrieve the diagnostic logs?', '[{"key":"A","text":"Azure Cosmos DB explorer"},{"key":"B","text":"SQL query editor in Azure"},{"key":"C","text":"AzCopy"},{"key":"D","text":"the Security admin center"}]'::jsonb, '["C"]'::jsonb, 'Nhật ký chẩn đoán Azure Storage Analytics được lưu trữ dưới dạng các đốm màu trong vùng chứa `$logs` của tài khoản lưu trữ. AzCopy có thể tải xuống các đốm màu nhật ký đó để xem xét và phân tích.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-25', 'az-500', 25, 'Your company has an Azure subscription named Sub1 that is associated with an Azure Active Directory (Azure AD) tenant named contoso.com.  
  
The company develops a mobile application named App1. App1 uses the OAuth 2 implicit grant type to acquire Azure AD access tokens.  
  
You need to register App1 in Azure AD.  
  
Which information should you obtain from the developer to register the application?', '[{"key":"A","text":"a redirect URI"},{"key":"B","text":"a reply URL"},{"key":"C","text":"a key"},{"key":"D","text":"an application ID"}]'::jsonb, '["B"]'::jsonb, 'Đăng ký ứng dụng Azure AD phải chứa URL trả lời (URI chuyển hướng), vì luồng ngầm OAuth 2.0 chỉ trả về mã thông báo truy cập cho điểm cuối đã đăng ký. Nền tảng nhận dạng từ chối URI trả về không khớp với đăng ký ứng dụng.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-26', 'az-500', 26, 'You have an Azure Active Directory (Azure AD) tenant named contoso.com with Azure Active Directory Premium Plan 1 licenses.  
  
You need to create a group named Group1 that will be assigned the Global reader role.  
  
Which portal should you use to create Group1, and which group type should you create?', '[]'::jsonb, '[]'::jsonb, 'Azure AD Premium P1 cho phép các nhóm có thể gán vai trò. Một nhóm bảo mật mới hoặc nhóm Microsoft 365 có thể được cấu hình để gán vai trò Azure AD, bao gồm cả vai trò Người đọc toàn cầu. Các nhóm bảo mật hỗ trợ thư không thể được sử dụng cho mục đích này.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-27', 'az-500', 27, 'You have the Azure virtual machines shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953083046-ojndo3g2.png)  
  
Each virtual machine has one network interface.  
  
You add VM1''s network interface to an application security group named ASG1.  
  
You need to identify the virtual machines whose network interfaces can be added to ASG1.  
  
What should you identify?', '[{"key":"A","text":"VM2 only"},{"key":"B","text":"VM2 and VM3 only"},{"key":"C","text":"VM2, VM3, VM4, and VM5"},{"key":"D","text":"VM2, VM3, and VM5 only"}]'::jsonb, '["B"]'::jsonb, 'Các giao diện mạng được thêm vào nhóm bảo mật ứng dụng Azure phải nằm trong cùng một mạng ảo và vị trí Azure với giao diện đã được gán cho nhóm. Vì VM1 nằm ở Tây Hoa Kỳ 2 và VNET1 nên VM2 và VM3 đủ điều kiện; ở trong một mạng con khác không ngăn cản tư cách thành viên.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953083046-ojndo3g2.png', 'published'),
  ('az500-28', 'az-500', 28, 'In Azure Security Center, you create a custom alert rule.  
  
You need to configure the users who receive an email message when the alert is triggered.  
  
What should you do?', '[{"key":"A","text":"From Azure Monitor, create an action group."},{"key":"B","text":"From Security Center, modify the Security policy settings of the Azure subscription."},{"key":"C","text":"From Azure Active Directory (Azure AD), modify the members of the Security Reader role group."},{"key":"D","text":"From Security Center, modify the alert rule."}]'::jsonb, '["A"]'::jsonb, 'Các nhóm hành động Azure Monitor xác định người nhận thông báo và hành động cho cảnh báo, bao gồm cả thông báo qua email. Liên kết nhóm hành động với quy tắc cảnh báo tùy chỉnh để người dùng được định cấu hình của nhóm sẽ nhận được email khi cảnh báo kích hoạt.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-29', 'az-500', 29, 'Determine whether the underlined segment is correct.  
  
Your Azure Active Directory Azure (Azure AD) tenant has an Azure subscription associated with it.  
  
Your developer has developed a mobile application that acquires Azure AD access tokens by using the OAuth 2 implicit grant type.  
  
The mobile application must be registered in Azure AD.  
  
For registration, you need a redirect URI from the developer.  
  
Select `No adjustment required` if the underlined segment is correct. If the underlined segment is incorrect, select the correct option.', '[{"key":"A","text":"No adjustment required"},{"key":"B","text":"a secret"},{"key":"C","text":"a login hint"},{"key":"D","text":"a client ID"}]'::jsonb, '["A"]'::jsonb, 'URI chuyển hướng xác định đích được phê duyệt mà Microsoft Entra ID gửi mã thông báo bảo mật sau khi xác thực. Nó phải được định cấu hình cho một ứng dụng nhận mã thông báo truy cập thông qua luồng OAuth dựa trên trình duyệt; các máy khách di động công cộng không sử dụng bí mật máy khách cho mục đích này.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-30', 'az-500', 30, 'You have an Azure subscription named Sub 1 associated with an Azure Active Directory (Azure AD) tenant named contoso.com. The tenant includes the users shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953092469-k79grlet.png)  
  
Each user has an Azure AD Premium P2 license.  
  
You plan to onboard and configure Azure AD Identity Protection. Which users can onboard Azure AD Identity Protection, remediate users, and configure policies?', '[]'::jsonb, '[]'::jsonb, 'Quản trị viên toàn cầu là vai trò có thể tích hợp Bảo vệ danh tính Azure AD. Quản trị viên toàn cầu và Quản trị viên bảo mật có toàn quyền truy cập Bảo vệ danh tính, cho phép họ khắc phục những người dùng gặp rủi ro và định cấu hình chính sách. Bảo mật Người đọc chỉ có thể xem báo cáo và Quản trị viên cấp phép không nhận được các quyền này.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953092469-k79grlet.png', 'published'),
  ('az500-31', 'az-500', 31, 'Your company has an Azure subscription named Subscription1. Subscription1 is associated with the Azure Active Directory tenant that includes the users shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954287785-oxmkrcet.png)  
  
The company is sold to a new owner.  
  
The company must transfer ownership of Subscription1. Which user can transfer the ownership, and which tool should that user use?', '[]'::jsonb, '[]'::jsonb, 'Đối với đăng ký Azure cổ điển, Quản trị viên tài khoản là chủ sở hữu thanh toán được ủy quyền chuyển quyền sở hữu đăng ký. Quá trình chuyển được bắt đầu trong Trung tâm tài khoản Azure; Bản thân các vai trò Quản trị viên thanh toán và Chủ sở hữu Azure RBAC, Quản trị viên toàn cầu Azure AD và Quản trị viên thanh toán không cung cấp khả năng chuyển quyền sở hữu đăng ký cổ điển này.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783954287785-oxmkrcet.png', 'published'),
  ('az500-32', 'az-500', 32, 'You must satisfy the technical requirements for VNetwork1.  
  
What should you do first?', '[{"key":"A","text":"Create a new subnet on VNetwork1."},{"key":"B","text":"Remove the NSGs from Subnet11 and Subnet13."},{"key":"C","text":"Associate an NSG to Subnet12."},{"key":"D","text":"Configure DDoS protection for VNetwork1."}]'::jsonb, '["A"]'::jsonb, 'Việc tạo mạng con bắt buộc sẽ thiết lập phân đoạn mạng cần thiết trước khi áp dụng các nhóm bảo mật mạng cấp mạng con hoặc cấu hình khác cho mạng con đó.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-33', 'az-500', 33, 'You have an Azure subscription containing virtual machines.  
  
You enable just-in-time (JIT) VM access on all the virtual machines.  
  
You need to connect to a virtual machine by using Remote Desktop.  
  
What should you do first?', '[{"key":"A","text":"From Azure Directory (Azure AD) Privileged Identity Management (PIM), activate the Security administrator user role."},{"key":"B","text":"From Azure Active Directory (Azure AD) Privileged Identity Management (PIM), activate the Owner role for the virtual machine."},{"key":"C","text":"From the Azure portal, select the virtual machine, select Connect, and then select Request access."},{"key":"D","text":"From the Azure portal, select the virtual machine and add the Network Watcher Agent virtual machine extension."}]'::jsonb, '["C"]'::jsonb, 'Quyền truy cập VM đúng lúc yêu cầu một yêu cầu tạm thời mở cổng RDP gửi đến đã định cấu hình cho IP nguồn yêu cầu và khoảng thời gian được phê duyệt. Từ trang Kết nối cổng thông tin Azure của máy ảo, chọn **Yêu cầu quyền truy cập** trước khi kết nối qua RDP.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-34', 'az-500', 34, 'Your network has an on-premises Active Directory Domain Services (AD DS) domain that synchronizes with an Azure AD tenant.  
  
You plan to implement single sign-on (SSO) for Azure AD resources.  
  
You need to configure an Intranet Zone setting for every user by using a Group Policy Object (GPO).  
  
Which setting should you configure?', '[{"key":"A","text":"Logon options"},{"key":"B","text":"Allow updates to status bar via script"},{"key":"C","text":"Allow active scripting"},{"key":"D","text":"Access data sources across domains"}]'::jsonb, '["B"]'::jsonb, 'SSO liền mạch của Microsoft Entra yêu cầu đặt URL tự động đăng nhập của Microsoft Entra trong vùng Mạng nội bộ cục bộ của người dùng và yêu cầu bật cài đặt Chính sách nhóm vùng mạng nội bộ **Cho phép bật cập nhật lên thanh trạng thái thông qua tập lệnh**.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-35', 'az-500', 35, 'Your company’s Azure subscription contains 100 virtual machines with Azure Diagnostics enabled.  
  
You need to analyze the security events from a Windows Server 2016 virtual machine and have already opened Azure Monitor.  
  
Which of the following options should you use?', '[{"key":"A","text":"Application Log"},{"key":"B","text":"Metrics"},{"key":"C","text":"Activity Log"},{"key":"D","text":"Logs"}]'::jsonb, '["D"]'::jsonb, 'Nhật ký Azure Monitor là giao diện truy vấn dành cho các bản ghi sự kiện bảo mật Windows được thu thập, chẳng hạn như các bản ghi trong bảng `SecurityEvent`. Số liệu là các phép đo bằng số, trong khi Nhật ký hoạt động ghi lại các hoạt động quản lý tài nguyên Azure chứ không phải các sự kiện bảo mật của hệ điều hành khách.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-36', 'az-500', 36, 'You have an Azure subscription that includes an Azure Data Lake Storage account named `sa1`.  
  
You plan to deploy an app named App1 that will access `sa1` and perform operations including Read, List, Create Directory, and Delete Directory.  
  
You need to ensure that App1 can securely connect to `sa1` by using a private endpoint.  
  
What is the minimum number of private endpoints required for `sa1`?', '[{"key":"A","text":"1"},{"key":"B","text":"2"},{"key":"C","text":"3"},{"key":"D","text":"4"},{"key":"E","text":"5"}]'::jsonb, '["B"]'::jsonb, 'Các hoạt động thư mục Azure Data Lake Storage yêu cầu private endpoint cho tài nguyên con Data Lake Storage (`dfs`). Cũng cần có private endpoint cho nguồn phụ Blob (`blob`) vì các yêu cầu nhắm mục tiêu điểm cuối Bộ lưu trữ hồ dữ liệu có thể được chuyển hướng đến điểm cuối Blob. Do đó, hai điểm cuối riêng tư đảm bảo tất cả các hoạt động được liệt kê có thể hoàn thành một cách an toàn.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-37', 'az-500', 37, 'You have an Azure subscription called Subscription1.  
  
You need to see which security settings are assigned to Subscription1 by default. Which Azure Policy or initiative definition should you examine?', '[{"key":"A","text":"the Audit diagnostic setting policy definition"},{"key":"B","text":"the Enable Monitoring in Azure Security Center initiative definition"},{"key":"C","text":"the Enable Azure Monitor for VMs initiative definition"},{"key":"D","text":"the Azure Monitor solution ''Security and Audit'' must be deployed policy definition"}]'::jsonb, '["B"]'::jsonb, 'Sáng kiến ​​**Bật giám sát trong Trung tâm bảo mật Azure** tích hợp nhóm các định nghĩa Chính sách Azure được sử dụng để bật và đặt cấu hình giám sát bảo mật mặc định cho các tài nguyên trong đăng ký. Việc xem xét sáng kiến ​​đó sẽ xác định các cài đặt bảo mật được chỉ định theo mặc định.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-38', 'az-500', 38, 'You plan to deploy an app that will modify Azure Active Directory (Azure AD) user properties by using Microsoft Graph.  
  
You need to ensure that the app can access Azure AD. What should you configure first?', '[{"key":"A","text":"an app registration"},{"key":"B","text":"an external identity"},{"key":"C","text":"a custom role-based access control (RBAC) role"},{"key":"D","text":"an Azure AD Application Proxy"}]'::jsonb, '["A"]'::jsonb, 'Việc đăng ký ứng dụng sẽ tạo ra danh tính ứng dụng và mối quan hệ tin cậy trong Microsoft Entra ID (Azure AD), cho phép ứng dụng đó xác thực và sau đó được cấp các quyền Microsoft Graph cần thiết để sửa đổi thuộc tính người dùng.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-39', 'az-500', 39, 'You are configuring and securing a network environment.  
  
You deploy an Azure virtual machine named VM1, configured to analyze network traffic.  
  
You need to ensure that all network traffic is routed through VM1.  
  
What should you configure?', '[{"key":"A","text":"a system route"},{"key":"B","text":"a network security group (NSG)"},{"key":"C","text":"a user-defined route"}]'::jsonb, '["C"]'::jsonb, 'Tuyến do người dùng xác định có thể buộc lưu lượng truy cập đến một thiết bị ảo mạng bằng cách đặt VM1 làm bước nhảy tiếp theo của thiết bị ảo. Tuyến mặc định có tiền tố địa chỉ 0.0.0.0/0 sẽ hướng tất cả lưu lượng truy cập phù hợp qua công cụ đó. Các nhóm bảo mật mạng lọc lưu lượng thay vì định tuyến lưu lượng và các tuyến hệ thống là các tuyến mặc định do Azure quản lý.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-40', 'az-500', 40, 'You have an Azure subscription connected to an on-premises datacenter that contains the resources in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783960420986-45xkknf4.png)  
  
You must configure virtual network service endpoints for VNet1 and VNet2. The solution must meet these requirements:  
  
- Virtual machines connected to the VNet1 subnet must access storage1, storage2, and Azure AD through the Microsoft backbone network.  
- Virtual machines connected to the VNet2 subnet must access storage1 and KeyVault1 through the Microsoft backbone network.  
- The virtual machines must use the Microsoft backbone network to communicate between VNet1 and VNet2.  
  
How many service endpoints should be configured for each virtual network?', '[]'::jsonb, '[]'::jsonb, 'Một bộ lưu trữ Azure service endpoint duy nhất bao gồm quyền truy cập từ mạng con được kích hoạt của nó vào nhiều tài khoản lưu trữ, do đó, storage1 và storage2 không yêu cầu các điểm cuối riêng biệt. Azure Key Vault sử dụng Microsoft.KeyVault service endpoint riêng biệt. Điểm cuối Microsoft.AzureActiveDirectory là một loại điểm cuối riêng biệt (được sử dụng để tích hợp Azure Data Lake Storage Gen1). Điểm cuối dịch vụ bảo mật lưu lượng truy cập từ mạng con đến dịch vụ Azure PaaS; chúng không cung cấp kết nối VNet-to-VNet, yêu cầu kết nối VNet peering hoặc cổng.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783960420986-45xkknf4.png', 'published'),
  ('az500-41', 'az-500', 41, 'You have an Azure Active Directory (Azure AD) tenant named contoso.com that contains the users in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954558000-thjgggb6.png)  
  
Azure AD Privileged Identity Management (PIM) is used in contoso.com. In PIM, the Password Administrator role has these settings:  
  
- Maximum activation duration (hours): 2  
- Send email notifying admins of activation: Disable  
- Require incident/request ticket number during activation: Disable  
- Require Azure Multi-Factor Authentication for activation: Enable  
- Require approval to activate this role: Enable  
- Selected approver: Group1  
  
You assign the Password Administrator role to users as shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954560081-fx7dwvxk.png)  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"When User1 signs in, the user is assigned the Password Administrator role automatically.","correctAnswer":"Yes"},{"id":"2","text":"User2 can request to activate the Password Administrator role.","correctAnswer":"No"},{"id":"3","text":"If User3 wants to activate the Password Administrator role, the user can approve their own request.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:Yes","2:No","3:No"]'::jsonb, 'Việc gán PIM hoạt động sẽ làm cho vai trò Quản trị viên mật khẩu hoạt động mà không cần yêu cầu kích hoạt. Nhiệm vụ Đủ điều kiện phải được kích hoạt; vì MFA là bắt buộc để kích hoạt nên người dùng có trạng thái MFA bị vô hiệu hóa sẽ không thể kích hoạt vai trò này. Những người phê duyệt đã chọn không thể phê duyệt các yêu cầu kích hoạt vai trò PIM của chính họ, kể cả khi họ là thành viên của nhóm phê duyệt.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783954558000-thjgggb6.png', 'published'),
  ('az500-42', 'az-500', 42, 'HOTSPOT —  
  
You have an Azure key vault.  
  
You need to delegate administrative access to the key vault and meet these requirements:  
  
- Provide a user named User1 the ability to configure advanced access policies for the key vault.  
- Provide a user named User2 the ability to add and delete certificates in the key vault.  
- Use the principle of least privilege.  
  
What should you use to assign access to each user?', '[]'::jsonb, '[]'::jsonb, 'Azure RBAC kiểm soát các hoạt động trên mặt phẳng quản lý Key Vault, bao gồm cập nhật các thuộc tính và chính sách truy cập của Key Vault. Hoạt động chứng chỉ là hoạt động trên mặt phẳng dữ liệu; chính sách truy cập Key Vault chỉ có thể cấp cho Người dùng2 quyền Tạo và Xóa Chứng chỉ, đáp ứng ít đặc quyền nhất.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-43', 'az-500', 43, 'You have an Azure subscription containing the virtual networks shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783960949869-nhv40elv.png)  
  
The subscription includes the subnets shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783960953197-s8muqdqn.png)  
  
You plan to create an Azure web app named WebApp2 with these settings:  
  
- Region: East US  
- VNet integration: Enabled  
- Scale out: Autoscale to up to 10 instances  
  
For each statement below, select **Yes** if it is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"WebApp2 can be integrated with Subnet11.","correctAnswer":"No"},{"id":"2","text":"WebApp2 can be integrated with Subnet12.","correctAnswer":"Yes"},{"id":"3","text":"WebApp2 can be integrated with Subnet21.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:Yes","3:No"]'::jsonb, 'Tích hợp VNet khu vực Azure App Service yêu cầu một mạng con chuyên dụng, chưa được sử dụng trong cùng khu vực với ứng dụng, có phạm vi địa chỉ ít nhất là /28. Subnet11 chứa VM1 nên không thể sử dụng được. Subnet12 là một /27 trống ở miền Đông Hoa Kỳ, phù hợp với khu vực của WebApp2 và cung cấp đủ địa chỉ cho kế hoạch mở rộng quy mô. Subnet21 ở Tây Hoa Kỳ và đã lưu trữ một ứng dụng web tích hợp nên không thể sử dụng được.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783960949869-nhv40elv.png', 'published'),
  ('az500-46', 'az-500', 46, 'Your network has an on-premises Active Directory domain named contoso.com, which contains a user named User1.  
  
You have an Azure subscription linked to an Azure Active Directory (Azure AD) tenant named contoso.com. The tenant includes an Azure Storage account named storage1, and storage1 contains an Azure file share named share1.  
  
The domain and tenant are currently not integrated.  
  
You need to ensure that User1 can access share1 by using domain credentials.  
  
Which three actions should you perform, in sequence?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"C"},{"id":"step2","text":"Slot 2:","correctAnswer":"B"},{"id":"step3","text":"Slot 3:","correctAnswer":"E"}],"choices":[{"key":"A","text":"Create a private link to storage1."},{"key":"B","text":"Enable an Active Directory source for Azure File shares"},{"key":"C","text":"Implement Azure AD Connect."},{"key":"D","text":"Create a service endpoint to storage1."},{"key":"E","text":"Assign share-level permissions for share1."}]}'::jsonb, '["step1=C","step2=B","step3=E"]'::jsonb, 'Azure AD Connect đồng bộ hóa người dùng AD DS tại chỗ với Azure AD để Azure RBAC có thể cấp quyền truy cập ở cấp độ chia sẻ cho người dùng. Việc bật AD DS làm nguồn nhận dạng Azure Files cho phép xác thực SMB bằng thông tin xác thực tên miền tại chỗ. Sau đó, quyền cấp độ chia sẻ phải được chỉ định để cho phép truy cập vào phần chia sẻ tệp.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-47', 'az-500', 47, 'You have an Azure subscription containing the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953066387-bujxy6u5.png)  
  
You create the Azure Storage accounts shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953068791-kmrr420g.png)  
  
You need to configure auditing for SQL1. Which storage accounts and Log Analytics workspaces can you use as the audit log destination?', '[]'::jsonb, '[]'::jsonb, 'Storage2 là tài khoản lưu trữ V1 cho mục đích chung cùng khu vực đủ điều kiện. Storage1 là tài khoản chỉ dành cho Blob và Storage3 nằm ở một khu vực khác. Kiểm tra Azure SQL có thể gửi các sự kiện kiểm tra tới Log Analytics thông qua cài đặt chẩn đoán Azure Monitor, do đó, cả ba không gian làm việc Log Analytics được liệt kê đều có thể được sử dụng bất kể nhóm tài nguyên hoặc khu vực của chúng.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953066387-bujxy6u5.png', 'published'),
  ('az500-48', 'az-500', 48, 'You have an Azure Kubernetes Service (AKS) cluster that must connect to an Azure Container Registry.  
  
You need to use the AKS cluster’s automatically generated service principal to authenticate to the Azure Container Registry.  
  
What should you create?', '[{"key":"A","text":"a secret in Azure Key Vault"},{"key":"B","text":"a role assignment"},{"key":"C","text":"an Azure Active Directory (Azure AD) user"},{"key":"D","text":"an Azure Active Directory (Azure AD) group"}]'::jsonb, '["B"]'::jsonb, 'Quyền truy cập Sổ đăng ký vùng chứa Azure cho service principal được cấp thông qua Azure RBAC. Gán cho service principal một vai trò đăng ký thích hợp—chẳng hạn như `AcrPull` để kéo quyền truy cập vào sổ đăng ký không hỗ trợ ABAC—cho phép cụm AKS truy xuất hình ảnh vùng chứa.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-49', 'az-500', 49, 'Your on-premises network contains the servers shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783957469662-wujbrfb7.png)  
  
You have an Azure subscription that contains multiple virtual machines running either Windows Server 2019 or SLES.  
  
You plan to implement adaptive application controls in Microsoft Defender for Cloud.  
  
Which operating systems and platforms can you monitor?', '[]'::jsonb, '[]'::jsonb, 'Các điều khiển ứng dụng thích ứng hỗ trợ các máy Windows Server, bao gồm máy ảo Azure và máy Windows Server được kích hoạt thông qua Azure Arc. SLES không được hỗ trợ cho tính năng này và máy ảo Hyper-V tại chỗ không được đưa vào làm nền tảng được hỗ trợ chỉ vì chúng chạy trong Hyper-V.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783957469662-wujbrfb7.png', 'published'),
  ('az500-50', 'az-500', 50, 'You have been assigned to create an Azure key vault by using PowerShell. You have been told that objects deleted from the key vault must be retained for a defined period of 90 days.  
  
Which two of the following parameters must be used together to satisfy the requirement? (Choose two.)', '[{"key":"A","text":"EnabledForDeployment"},{"key":"B","text":"EnablePurgeProtection"},{"key":"C","text":"EnabledForTemplateDeployment"},{"key":"D","text":"EnableSoftDelete"}]'::jsonb, '["B","D"]'::jsonb, 'Xóa mềm sẽ giữ lại các đối tượng Key Vault đã xóa trong khoảng thời gian lưu giữ, trong khi tính năng bảo vệ thanh lọc ngăn chặn việc xóa vĩnh viễn trong khoảng thời gian lưu giữ đó và yêu cầu xóa mềm. Các tham số triển khai không cung cấp khả năng lưu giữ hoặc bảo vệ xóa.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-51', 'az-500', 51, 'You have an Azure subscription that includes a storage account named `storage1` and a virtual machine named `VM1`.  
  
`VM1` is connected to a virtual network named `VNet1`, which contains one subnet and uses Azure DNS.  
  
You need to ensure that `VM1` connects to `storage1` by using a private IP address. The solution must minimize administrative effort.  
  
What should you do?', '[{"key":"A","text":"For storage1, disable public network access."},{"key":"B","text":"On VNet1, create a new subnet."},{"key":"C","text":"For storage1, create a new private endpoint."},{"key":"D","text":"Create an Azure Private DNS zone."}]'::jsonb, '["C"]'::jsonb, 'Bộ lưu trữ Azure private endpoint tạo giao diện mạng với địa chỉ IP riêng trong mạng ảo và cung cấp kết nối riêng tư với dịch vụ lưu trữ thông qua Azure Private Link. Với DNS do Azure cung cấp, vùng DNS riêng tư bắt buộc và các bản ghi có thể được tạo tự động, cho phép tên điểm cuối lưu trữ thông thường phân giải thành địa chỉ IP riêng tư.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-52', 'az-500', 52, 'You create an Azure subscription that has Azure AD Premium P2.  
  
You need to ensure that Azure Active Directory (Azure AD) Privileged Identity Management (PIM) can be used to secure Azure AD roles.  
  
Which three actions should you perform in order?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"C"},{"id":"step2","text":"Slot 2:","correctAnswer":"E"},{"id":"step3","text":"Slot 3:","correctAnswer":"B"}],"choices":[{"key":"A","text":"Discover privileged roles."},{"key":"B","text":"Sign up PIM for Azure AD roles."},{"key":"C","text":"Consent to PIM."},{"key":"D","text":"Discover resources."},{"key":"E","text":"Verify your identity by using multi-factor authentication (MFA)."}]}'::jsonb, '["step1=C","step2=E","step3=B"]'::jsonb, 'Trình tự giới thiệu PIM ban đầu là cấp sự đồng ý của đối tượng thuê đối với PIM, hoàn thành xác minh danh tính MFA bắt buộc, sau đó đăng ký PIM để quản lý các vai trò Azure AD. Khám phá các vai trò đặc quyền là hoạt động đánh giá sau, trong khi khám phá tài nguyên áp dụng cho việc quản lý tài nguyên Azure thay vì vai trò Azure AD.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-53', 'az-500', 53, 'You have an Azure subscription containing a storage account named `storage1` and two web apps named `app1` and `app2`.  
  
Both apps will write data to `storage1`.  
  
You need to ensure that each app can read only the data it wrote.  
  
What should you do?', '[{"key":"A","text":"Provide each app with a system-assigned identity and configure storage1 to use Azure AD User account authentication."},{"key":"B","text":"Provide each app with a separate Storage account key and configure the app to send the key with each request."},{"key":"C","text":"Provide each app with a user-managed identity and configure storage1 to use Azure AD User account authentication."},{"key":"D","text":"Provide each app with a unique Base64-encoded AES-256 encryption key and configure the app to send the key with each request."}]'::jsonb, '["A"]'::jsonb, 'system-assigned managed identity cung cấp cho mỗi ứng dụng web nguyên tắc bảo mật Microsoft Entra riêng. Azure Storage có thể sử dụng xác thực Microsoft Entra và Azure RBAC để chỉ cấp cho mỗi danh tính quyền truy cập vào phạm vi dữ liệu được phép của ứng dụng đó. Khóa tài khoản lưu trữ cung cấp quyền truy cập Khóa chia sẻ ở cấp tài khoản, do đó, các khóa riêng biệt không tách biệt dữ liệu của ứng dụng.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-54', 'az-500', 54, 'HOTSPOT -  
  
You have an Azure subscription containing the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953222956-j3p5oaoq.png)  
  
VM1 and VM2 are stopped.  
  
You create an alert rule with these settings:  
  
- Resource: RG1  
- Condition: All Administrative operations  
- Actions: Action groups configured for this alert rule: ActionGroup1  
- Alert rule name: Alert1  
  
You create an action rule with these settings:  
  
- Scope: VM1  
- Filter criteria: Resource Type = "Virtual Machines"  
- Define on this scope: Suppression  
- Suppression config: From now (always)  
- Name: ActionRule1  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"If you start VM1, an alert is triggered.","correctAnswer":"Yes"},{"id":"2","text":"If you start VM2, an alert is triggered.","correctAnswer":"Yes"},{"id":"3","text":"If you add a tag to RG1, an alert is triggered.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:Yes","2:Yes","3:Yes"]'::jsonb, 'Các sự kiện trong Nhật ký hoạt động quản trị bao gồm các hoạt động tạo, cập nhật, xóa và hành động của Trình quản lý tài nguyên. Khởi động máy ảo và cập nhật RG1 bằng cách thêm thẻ đáp ứng điều kiện cảnh báo nhật ký hoạt động trong RG1. Quy tắc ngăn chặn luôn bật chỉ áp dụng cho các cảnh báo cho VM1 và loại bỏ các nhóm hành động của chúng; nó không ngăn cảnh báo được kích hoạt hiển thị hoặc được tạo.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953222956-j3p5oaoq.png', 'published'),
  ('az500-55', 'az-500', 55, 'HOTSPOT -  
  
You have two Azure virtual machines in the East US 2 region, as shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783952229922-sw6jdn85.png)  
  
You deploy and configure an Azure Key vault.  
  
You need to ensure that Azure Disk Encryption can be enabled on VM1 and VM2.  
  
What should you modify on each virtual machine?', '[]'::jsonb, '[]'::jsonb, 'Azure Disk Encryption yêu cầu cấp VM và kích thước VM được hỗ trợ. Máy ảo cấp cơ bản không thể sử dụng Azure Disk Encryption, do đó VM1 phải chuyển sang cấp Chuẩn. VM2 đã ở cấp Tiêu chuẩn, nhưng loại VM được tối ưu hóa cho bộ lưu trữ L4 của nó phải được thay đổi thành loại được hỗ trợ trước khi có thể bật Mã hóa ổ đĩa Azure.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783952229922-sw6jdn85.png', 'published'),
  ('az500-56', 'az-500', 56, 'You have an Azure subscription that contains a resource group named RG1 and an Azure policy named Policy1.  
  
You need to assign Policy1 to RG1.  
  
Complete the script. Each value may be used once, more than once, or not at all.', '{"statements":[{"id":"policyDefinition","text":"Slot 1:","correctAnswer":"B"},{"id":"policyAssignment","text":"Slot 2:","correctAnswer":"D"}],"choices":[{"key":"A","text":"Get-AzPolicyAssignment"},{"key":"B","text":"Get-AzPolicyDefinition"},{"key":"C","text":"Get-AzPolicySetDefinition"},{"key":"D","text":"New-AzPolicyAssignment"},{"key":"E","text":"New-AzPolicyDefinition"}]}'::jsonb, '["policyDefinition=B","policyAssignment=D"]'::jsonb, '`Get-AzPolicyDefinition` truy xuất định nghĩa Chính sách1 hiện có. `New-AzPolicyAssignment` tạo một bài tập bằng cách sử dụng định nghĩa đó và `$rg.ResourceID` đưa nó vào phạm vi RG1.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-57', 'az-500', 57, 'You have an Azure web app named **webapp1**.  
  
You need to configure continuous deployment for **webapp1** by using an Azure Repo.  
  
What should you create first?', '[{"key":"A","text":"an Azure Application Insights service"},{"key":"B","text":"an Azure DevOps organization"},{"key":"C","text":"an Azure Storage account"},{"key":"D","text":"an Azure DevTest Labs lab"}]'::jsonb, '["B"]'::jsonb, 'Azure Repos được lưu trữ trong tổ chức Azure DevOps. Trước khi có thể chọn Azure Repo làm nguồn triển khai liên tục cho ứng dụng web Dịch vụ ứng dụng, tổ chức Azure DevOps phải tồn tại để chứa dự án và kho lưu trữ.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-58', 'az-500', 58, 'On Monday, you set up a Microsoft Defender for Cloud email notification for [email protected] for alerts with Low, Medium, or High severity.  
  
On Tuesday, Microsoft Defender for Cloud generates the security alerts in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783960413496-pkbg89b9.png)  
  
How many email notifications will [email protected] receive on Tuesday?', '[]'::jsonb, '[]'::jsonb, 'Defender for Cloud giới hạn số lượng email cảnh báo cho mỗi người nhận mỗi ngày ở mức bốn email cảnh báo ở mức độ nghiêm trọng Cao, hai ở mức độ nghiêm trọng trung bình và một ở mức độ nghiêm trọng thấp. Do đó, hai cảnh báo mạnh mẽ RDP Cao và hai Trung bình tạo ra bốn email. Trên tất cả các cảnh báo, bảy cảnh báo Cao được giới hạn ở bốn email, hai cảnh báo Trung bình tạo ra hai email và hai cảnh báo Thấp được giới hạn ở một email, tổng cộng là bảy email.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783960413496-pkbg89b9.png', 'published'),
  ('az500-59', 'az-500', 59, 'You must ensure that users are able to access VM0. The solution must satisfy the platform-protection requirements.  
  
What should you do?', '[{"key":"A","text":"Move VM0 to Subnet1."},{"key":"B","text":"On Firewall, configure a network traffic filtering rule."},{"key":"C","text":"Assign RT1 to AzureFirewallSubnet."},{"key":"D","text":"On Firewall, configure a DNAT rule."}]'::jsonb, '["A"]'::jsonb, 'Quyền truy cập VM đúng lúc (JIT) không thành công đối với máy ảo nằm trong mạng con có bảng định tuyến buộc lưu lượng truy cập đi qua Azure Firewall là bước nhảy tiếp theo: quy tắc cho phép gửi đến tạm thời mà JIT mở cho phép kết nối tiếp cận trực tiếp IP công cộng của VM, nhưng lưu lượng truy cập quay lại được chuyển hướng đến tường lửa theo tuyến do người dùng xác định và tường lửa loại bỏ nó vì nó chưa bao giờ nhìn thấy phiên gửi đến ban đầu — một lỗi định tuyến không đối xứng. Quy tắc lọc lưu lượng truy cập mạng hoặc quy tắc DNAT trên tường lửa không khắc phục được điều này, vì vấn đề là đường dẫn trả về không đối xứng chứ không phải quy tắc cho phép hoặc dịch thuật bị thiếu. Việc di chuyển VM0 vào mạng con không có tuyến do người dùng xác định trỏ đến tường lửa sẽ loại bỏ tình trạng định tuyến không đối xứng và cho phép JIT truy cập hoạt động bình thường, trong khi tường lửa tiếp tục bảo vệ phần còn lại của lưu lượng truy cập của môi trường, đáp ứng yêu cầu bảo vệ nền tảng.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-60', 'az-500', 60, 'You have an Azure subscription named Sub1 that is associated with an Azure Active Directory (Azure AD) tenant named contoso.com.  
  
An administrator named Admin1 has access to the following identities:  
  
- An OpenID-enabled user account  
- A Hotmail account  
- An account in contoso.com  
- An account in an Azure AD tenant named fabrikam.com  
  
You plan to use Azure Account Center to transfer ownership of Sub1 to Admin1.  
  
To which accounts can ownership of Sub1 be transferred?', '[{"key":"A","text":"contoso.com only"},{"key":"B","text":"contoso.com, fabrikam.com, and Hotmail only"},{"key":"C","text":"contoso.com and fabrikam.com only"},{"key":"D","text":"contoso.com, fabrikam.com, Hotmail, and OpenID-enabled user account"}]'::jsonb, '["B"]'::jsonb, 'Quyền sở hữu thanh toán đăng ký có thể được chuyển sang tài khoản Microsoft hoặc tài khoản tổ chức Azure AD đủ điều kiện. Tài khoản tổ chức trong contoso.com hoặc fabrikam.com đều đủ điều kiện và tài khoản Hotmail là tài khoản Microsoft; tài khoản người dùng hỗ trợ OpenID không phải là loại tài khoản đủ điều kiện cho việc chuyển tiền này.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-61', 'az-500', 61, 'You have an Azure subscription containing a resource group named RG1. RG1 contains a virtual machine named VM1 that uses Azure Active Directory (Azure AD) authentication.  
  
Two custom Azure roles, Role1 and Role2, are scoped to RG1. Their permissions are shown here:  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783957454917-q11yicdi.png)  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783957457420-f71sal86.png)  
  
The roles are assigned to users as shown here:  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783957460633-m9wqytwh.png)  
  
For each statement, select Yes if it is true; otherwise, select No.', '{"statements":[{"id":"1","text":"User1 can delete VM1.","correctAnswer":"No"},{"id":"2","text":"User2 can delete VM1.","correctAnswer":"Yes"},{"id":"3","text":"User3 can sign in to VM1 by using Azure AD credentials.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:Yes","3:No"]'::jsonb, 'Azure RBAC NotActions chỉ loại trừ khỏi định nghĩa vai trò cụ thể mà chúng thuộc về; khi hiệu trưởng giữ nhiều nhiệm vụ vai trò, các quyền hiệu quả là sự kết hợp của tất cả các hành động được phép của tất cả các vai trò được giao, do đó, quyền xóa được cấp bởi một vai trò (Role2) không bị chặn bởi loại trừ NotActions trong một vai trò được chỉ định khác (Role1) — đây là lý do tại sao Người dùng2, người có cả hai vai trò, có thể xóa VM mặc dù Người dùng1, người chỉ có Vai trò1, không thể. Riêng biệt, đăng nhập Azure AD vào máy ảo là một hoạt động trên mặt phẳng dữ liệu được kiểm soát bởi dataActions (được sử dụng bởi các vai trò Quản trị viên/Đăng nhập người dùng máy ảo tích hợp sẵn) và vì cả Vai trò 1 và Vai trò 2 đều có các hành động dữ liệu trống nên việc gán no của các vai trò này sẽ cấp khả năng đăng nhập vào VM1 bằng thông tin xác thực Azure AD.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783957454917-q11yicdi.png', 'published'),
  ('az500-62', 'az-500', 62, 'You manage an Azure Active Directory (Azure AD) tenant named contoso.com that includes a user named User1.  
  
You are planning to publish several applications within this tenant.  
  
You need to make sure that User1 is able to grant admin consent for these published applications.  
  
Which two user roles could you assign to User1 to accomplish this? (Each correct answer presents a complete solution.)', '[{"key":"A","text":"Security administrator"},{"key":"B","text":"Cloud application administrator"},{"key":"C","text":"Application administrator"},{"key":"D","text":"User administrator"},{"key":"E","text":"Application developer"}]'::jsonb, '["B","C"]'::jsonb, 'Sự đồng ý của quản trị viên đối với các ứng dụng đã xuất bản có thể được cấp bởi người dùng được chỉ định một số vai trò Azure AD tích hợp nhất định, bao gồm quyền quản lý việc cấp quyền ứng dụng cho toàn bộ tổ chức. Cả hai vai trò Quản trị viên ứng dụng đám mây và Quản trị viên ứng dụng đều bao gồm khả năng này, cho phép người dùng được chỉ định cấp quyền quản trị viên cho toàn bộ đối tượng thuê đối với các ứng dụng đã đăng ký/xuất bản, trong khi các vai trò Quản trị viên bảo mật, Quản trị viên người dùng và Nhà phát triển ứng dụng không bao gồm quyền này.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-63', 'az-500', 63, 'You have an Azure subscription containing the virtual machines shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953363409-rh1hljba.png)  
  
In Azure Security Center, you enable Auto Provisioning. You then deploy the virtual machines shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953366594-kxe5wbyj.png)  
  
On which virtual machines is the Microsoft Monitoring Agent installed?', '[{"key":"A","text":"VM3 only"},{"key":"B","text":"VM1 and VM3 only"},{"key":"C","text":"VM3 and VM4 only"},{"key":"D","text":"VM1, VM2, VM3, and VM4"}]'::jsonb, '["D"]'::jsonb, 'Tự động cung cấp Trung tâm bảo mật Azure tự động triển khai tác nhân Log Analytics, trước đây gọi là Tác nhân giám sát Microsoft (MMA), tới Azure virtual machines trong đăng ký. Nó bao gồm cả máy ảo hiện có và máy ảo được triển khai sau khi bật Tự động cấp phép; do đó, VM1, VM2, VM3 và VM4 nhận tác nhân.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953363409-rh1hljba.png', 'published'),
  ('az500-64', 'az-500', 64, 'You use Azure Resource Manager templates to deploy Azure virtual machines.  
  
You need to automatically disable unused Windows features as virtual machine instances are provisioned.  
  
What should you use?', '[{"key":"A","text":"device configuration policies in Microsoft Intune"},{"key":"B","text":"an Azure Desired State Configuration (DSC) virtual machine extension"},{"key":"C","text":"security policies in Azure Security Center"},{"key":"D","text":"Azure Logic Apps"}]'::jsonb, '["B"]'::jsonb, 'Tiện ích mở rộng máy ảo Azure Desired State Configuration (DSC) áp dụng cấu hình PowerShell DSC cho máy ảo Windows. Cấu hình DSC có thể quản lý các tính năng của Windows, bao gồm việc đảm bảo không có các tính năng không được sử dụng và tiện ích mở rộng có thể được đưa vào mẫu Trình quản lý tài nguyên Azure để định cấu hình tại thời điểm triển khai.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-65', 'az-500', 65, 'You have an Azure subscription linked to Azure Active Directory (Azure AD). The tenant contains the users listed in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783955732881-97sxcll6.jpg)  
  
You have an Azure key vault named Vault1 with Purge protection set to Disable. Vault1 has the access policies shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783955737024-xliiamms.jpg)  
  
You create the role assignments for Vault1 shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783955740846-hz1042ac.jpg)  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"User1 can set Purge protection to Enable for Vault1.","correctAnswer":"No"},{"id":"2","text":"User2 can configure firewalls and virtual networks for Vault1.","correctAnswer":"No"},{"id":"3","text":"User3 can add access policies to Vault1.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:No","3:Yes"]'::jsonb, 'Azure Key Vault tách mặt phẳng điều khiển (tạo/xóa vault, đặt chính sách truy cập, định cấu hình quy tắc mạng và các thuộc tính vault khác như bảo vệ thanh lọc) khỏi mặt phẳng dữ liệu (làm việc với khóa, bí mật và chứng chỉ). Mặt phẳng điều khiển được ủy quyền độc quyền thông qua Azure RBAC, trong khi các chính sách truy cập (hoặc hành động dữ liệu RBAC) chỉ chi phối mặt phẳng dữ liệu. Vai trò Người đóng góp Key Vault tích hợp sẵn cấp quyền quản lý mặt phẳng điều khiển của vault, bao gồm khả năng đặt chính sách truy cập mà không cấp quyền truy cập mặt phẳng dữ liệu vào khóa, bí mật hoặc chứng chỉ - không giống như Key Vault Reader, Network Contributor hoặc vai trò Azure AD chẳng hạn như Quản trị viên bảo mật, không vai trò nào trong số đó bao gồm quyền Microsoft.KeyVault/vaults/write cần thiết cho các thay đổi thuộc tính vault như bảo vệ thanh lọc hoặc cấu hình mạng.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783955732881-97sxcll6.jpg', 'published'),
  ('az500-66', 'az-500', 66, 'You have been asked to delegate administrative access to your company’s Azure Key Vault.  
  
You must ensure that a specific user can add and delete certificates in the Key Vault, while assigning access according to the principle of least privilege.  
  
Which of the following options should you use to accomplish this goal?', '[{"key":"A","text":"A key vault access policy"},{"key":"B","text":"Azure policy"},{"key":"C","text":"Azure AD Privileged Identity Management (PIM)"},{"key":"D","text":"Azure DevOps"}]'::jsonb, '["A"]'::jsonb, 'Chính sách truy cập Azure Key Vault chỉ có thể cấp cho người dùng được đặt tên các quyền chứng chỉ bắt buộc, bao gồm `create` và `delete` mà không cấp các quyền không liên quan đối với khóa, bí mật hoặc quản trị vault rộng hơn.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-67', 'az-500', 67, 'HOTSPOT -  
  
Your company has an Azure subscription named Subscription1 that includes the users shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953717830-cf5it1t1.png)  
  
The company is being sold to a new owner. It must transfer ownership of Subscription1.  
  
Which user can transfer the ownership, and which tool should that user use?', '[]'::jsonb, '[]'::jsonb, 'Quản trị viên tài khoản là chủ sở hữu thanh toán trong mô hình quản trị viên đăng ký Azure cổ điển và là vai trò được ủy quyền để chuyển quyền sở hữu đăng ký. Trung tâm tài khoản Azure là giao diện quản lý tài khoản cho lần chuyển tiền này; Các vai trò Chủ sở hữu tài nguyên, Quản trị viên toàn cầu Microsoft Entra và Quản trị viên thanh toán không thay thế Quản trị viên tài khoản đăng ký cho quy trình làm việc cổ điển này.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953717830-cf5it1t1.png', 'published'),
  ('az500-68', 'az-500', 68, 'You intend to use Azure Resource Manager templates to carry out multiple deployments of identically configured Azure virtual machines. The administrator-account password for every deployment is stored as a secret in different Azure key vaults.  
  
You need to identify a way to dynamically construct a resource ID that designates the key vault containing the correct secret for each deployment.  
  
The key vault name and secret name will be supplied as inline parameters.  
  
What should you use to construct the resource ID?', '[{"key":"A","text":"a key vault access policy"},{"key":"B","text":"a linked template"},{"key":"C","text":"a parameters file"},{"key":"D","text":"an automation account"}]'::jsonb, '["B"]'::jsonb, 'Mẫu được liên kết hỗ trợ tạo động ID tài nguyên Key Vault từ các tham số triển khai và chuyển ID đó cho tham chiếu bí mật. Biểu thức mẫu ARM không được phép trong tệp tham số, do đó nó không thể tạo ID động ở đó.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-69', 'az-500', 69, 'You have an Azure subscription containing the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954564680-3khxd9d2.png)  
  
The subscription is linked to an Azure Active Directory (Azure AD) tenant containing the users shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954568171-yo7t8x72.png)  
  
You create the groups shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954570750-kjftxmew.png)  
  
The membership rules for Group1 and Group2 are configured as shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954573538-r5f8j46a.png)  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"User1 is a member of Group1 and Group2.","correctAnswer":"Yes"},{"id":"2","text":"User2 is a member of Group2 only.","correctAnswer":"No"},{"id":"3","text":"Managed1 is a member of Group1 and Group2.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:Yes","2:No","3:No"]'::jsonb, 'Cả hai nhóm đều có cùng quy tắc Người dùng động. Người dùng1 khớp với `usageLocation = "US"`; người dùng được bật, bao gồm User2, khớp với `accountEnabled = true`, vì vậy cả hai người dùng đều thuộc cả hai nhóm. managed identity không phải là đối tượng người dùng và không thể đáp ứng quy tắc thành viên Người dùng động. Microsoft Entra hỗ trợ `accountEnabled` và thuộc tính `usageLocation` gồm hai chữ cái trong quy tắc người dùng động; Nhóm động Microsoft 365 chỉ có thể chứa người dùng.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783954564680-3khxd9d2.png', 'published'),
  ('az500-70', 'az-500', 70, 'You have an Azure subscription that includes the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783960950087-xqeive8j.png)  
  
You plan to deploy an Azure Private Link service named APL1.  
  
Which resource should you reference when creating APL1?', '[{"key":"A","text":"LB1"},{"key":"B","text":"SQL1"},{"key":"C","text":"VMSS1"},{"key":"D","text":"VM1"}]'::jsonb, '["A"]'::jsonb, 'Dịch vụ Azure Private Link hiển thị một dịch vụ được triển khai đằng sau Cân bằng tải tiêu chuẩn Azure và được tạo bằng cách liên kết dịch vụ đó với cấu hình IP giao diện người dùng của cân bằng tải đó. LB1 là Cân bằng tải tiêu chuẩn Azure được liệt kê.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783960950087-xqeive8j.png', 'published'),
  ('az500-71', 'az-500', 71, 'You have a hybrid Azure Active Directory (Azure AD) configuration.  
  
All users have Windows 10 computers that are hybrid Azure AD joined.  
  
You have an Azure SQL database configured to support Azure AD authentication.  
  
Database developers must connect to the SQL database by using Microsoft SQL Server Management Studio (SSMS) and authenticate by using their on-premises Active Directory account.  
  
You need to tell the developers which authentication method to use in SSMS to connect to the SQL database. The solution must minimize authentication prompts.  
  
Which authentication method should you tell the developers to use?', '[{"key":"A","text":"SQL Login"},{"key":"B","text":"Active Directory ג€\" Universal with MFA support"},{"key":"C","text":"Active Directory ג€\" Integrated"},{"key":"D","text":"Active Directory ג€\" Password"}]'::jsonb, '["C"]'::jsonb, 'Active Directory Xác thực tích hợp sử dụng thông tin xác thực của người dùng Windows đã đăng nhập. Đối với danh tính kết hợp Microsoft Entra, việc tham gia kết hợp môi trường AD tại chỗ cho phép danh tính Windows được liên kết sử dụng đăng nhập một lần khi kết nối với Azure SQL, giảm thiểu các lời nhắc xác thực bổ sung.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-72', 'az-500', 72, 'You have Azure Resource Manager templates that you use to deploy Azure virtual machines.  
  
You need to automatically disable unused Windows features as virtual-machine instances are provisioned.  
  
What should you use?', '[{"key":"A","text":"device configuration policies in Microsoft Intune"},{"key":"B","text":"Azure Automation State Configuration"},{"key":"C","text":"security policies in Azure Security Center"},{"key":"D","text":"device compliance policies in Microsoft Intune"}]'::jsonb, '["B"]'::jsonb, 'Cấu hình trạng thái tự động hóa Azure áp dụng Cấu hình trạng thái mong muốn PowerShell cho Azure virtual machines và liên tục thực thi cấu hình được chỉ định của chúng. Tài nguyên DSC `WindowsFeature` có thể yêu cầu vắng mặt tính năng Windows, cho phép các tính năng không sử dụng tự động bị tắt trong quá trình triển khai và cấu hình VM.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-73', 'az-500', 73, 'You are investigating a security issue involving an Azure Storage account.  
  
You enable diagnostic logging for the storage account. What should you use to retrieve the diagnostic logs?', '[{"key":"A","text":"the Security & Compliance admin center"},{"key":"B","text":"Azure Security Center"},{"key":"C","text":"Azure Cosmos DB explorer"},{"key":"D","text":"AzCopy"}]'::jsonb, '["D"]'::jsonb, 'Nhật ký Azure Storage Analytics được lưu trữ dưới dạng các đốm màu trong vùng chứa `$logs`. AzCopy tải xuống dữ liệu nhật ký này từ tài khoản lưu trữ để xem xét cục bộ.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-74', 'az-500', 74, 'You have been assigned to apply Conditional Access policies for your company’s current Azure Active Directory (Azure AD).  
  
The process includes evaluating risk events and risk levels. Which of the following risk levels should be configured for users whose credentials have leaked?', '[{"key":"A","text":"None"},{"key":"B","text":"Low"},{"key":"C","text":"Medium"},{"key":"D","text":"High"}]'::jsonb, '["D"]'::jsonb, 'Việc phát hiện thông tin xác thực bị rò rỉ luôn được phân loại là rủi ro cao vì Microsoft đã xác nhận rằng tài liệu thông tin xác thực hợp lệ đã bị lộ, thay vì chỉ quan sát tín hiệu theo kinh nghiệm hoặc xác suất.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-75', 'az-500', 75, 'Solution: You create an Azure Active Directory (Azure AD) role assignment.  
  
Does this solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["B"]'::jsonb, 'Việc kéo hình ảnh từ Cơ quan đăng ký bộ chứa Azure yêu cầu gán vai trò Azure RBAC để cấp quyền kéo đăng ký AKS service principal, chẳng hạn như vai trò `AcrPull` cho sổ đăng ký không phải ABAC. Việc gán vai trò thư mục Azure AD không cung cấp quyền truy cập đăng ký đó.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-76', 'az-500', 76, 'You create resources in an Azure subscription as shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953095115-8mk9d1iz.png)  
  
VNET1 has two subnets named Subnet1 and Subnet2. Subnet1 has the network ID 10.0.0.0/24, and Subnet2 has the network ID 10.1.1.0/24.  
  
Contoso1901 is configured as shown in the exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953098430-oghmbran.jpg)  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"An Azure virtual machine on Subnet1 can access data in Contoso1901.","correctAnswer":"Yes"},{"id":"2","text":"An Azure virtual machine on Subnet2 can access data in Contoso1901.","correctAnswer":"No"},{"id":"3","text":"A computer on the Internet that has an IP address of 193.77.10.2 can access data in Contoso1901.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:Yes","2:No","3:Yes"]'::jsonb, 'Quy tắc mạng lưu trữ Azure với hành động mặc định là Từ chối chỉ cho phép truy cập từ các nguồn được cho phép rõ ràng. Quy tắc mạng ảo được phép được giới hạn ở Subnet1, không phải Subnet2. Dải IP được phép 193.77.0.0/16 bao gồm 193.77.10.2.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953095115-8mk9d1iz.png', 'published'),
  ('az500-77', 'az-500', 77, 'You have an Azure subscription containing the custom roles shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953714443-et68k7c3.png)  
  
In the Azure portal, you plan to create new custom roles by cloning existing roles. The new roles will be configured as shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953716676-yajemlid.png)  
  
Which roles can you clone to create each new role?', '[]'::jsonb, '[]'::jsonb, 'Vai trò tùy chỉnh Microsoft Entra ID có thể sao chép các quyền cơ bản của vai trò Microsoft Entra tùy chỉnh hiện có, nhưng không thể sao chép vai trò Microsoft Entra tích hợp. Vai trò tùy chỉnh Azure RBAC cho tài nguyên Azure có thể sao chép vai trò Azure RBAC tích hợp sẵn hoặc tùy chỉnh hiện có. Vai trò thư mục Microsoft Entra và đăng ký Azure Vai trò RBAC là các hệ thống vai trò riêng biệt, vì vậy các vai trò từ một vai trò này không thể đóng vai trò là nguồn nhân bản cho vai trò tùy chỉnh trong vai trò kia.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953714443-et68k7c3.png', 'published'),
  ('az500-78', 'az-500', 78, 'You have an Azure subscription that contains an Azure key vault named KeyVault1 and the virtual machines shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954772861-l96pgqvq.png)  
  
You configure the Key Vault access policy to enable access to Azure Disk Encryption for volume encryption. KeyVault1 is configured as shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954776967-uyowxloq.jpg)  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"From VM1, users can manage the keys and secrets stored in KeyVault1.","correctAnswer":"Yes"},{"id":"2","text":"From VM2, users can manage the keys and secrets stored in KeyVault1.","correctAnswer":"No"},{"id":"3","text":"VM2 can use KeyVault1 for Azure Disk Encryption.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:Yes","2:No","3:Yes"]'::jsonb, 'KeyVault1 cho phép VNET1/mạng con mặc định, do đó VM1 có thể tiếp cận mặt phẳng dữ liệu của vault (tùy thuộc vào người dùng có khóa hoặc quyền bí mật cần thiết). VM2 nằm trên VNET2/mặc định, điều này không được phép, do đó quyền truy cập vào mặt phẳng dữ liệu thông thường từ VM2 bị chặn. Azure Disk Encryption là một dịch vụ đáng tin cậy của Microsoft và việc cho phép bỏ qua tường lửa của các dịch vụ đáng tin cậy cùng với chính sách truy cập Azure Disk Encryption sẽ cho phép dịch vụ này sử dụng KeyVault1 từ VM2.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783954772861-l96pgqvq.png', 'published'),
  ('az500-79', 'az-500', 79, 'You must create Role1 to satisfy the platform-protection requirements.  
  
How should the Role1 role definition be completed?', '[]'::jsonb, '[]'::jsonb, 'Ổ đĩa được quản lý là tài nguyên Điện toán Azure, vì vậy `Microsoft.Compute/disks/*` cấp quyền mặt phẳng quản lý cho ổ đĩa. Việc giới hạn `AssignableScopes` ở ID tài nguyên Nhóm tài nguyên1 khiến vai trò tùy chỉnh chỉ khả dụng trong nhóm tài nguyên đó; vai trò tùy chỉnh nên sử dụng phạm vi nhóm quản lý, đăng ký hoặc nhóm tài nguyên thay vì phạm vi gốc.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-80', 'az-500', 80, 'You have two Azure subscriptions named Sub1 and Sub2. Sub1 contains a resource group named RG1 and an Azure policy named Policy1.  
  
You need to remediate the non-compliant resources in Sub1 based on Policy1.  
  
Complete the PowerShell script. Each value may be used once, more than once, or not at all.', '{"statements":[{"id":"context_cmd","text":"Slot 1:","correctAnswer":"B"},{"id":"remediation_cmd","text":"Slot 2:","correctAnswer":"E"}],"choices":[{"key":"A","text":"Get-AzPolicyRemediation"},{"key":"B","text":"Set-AzContext"},{"key":"C","text":"Set-AzResourceGroup"},{"key":"D","text":"Start-AzPolicyComplianceScan"},{"key":"E","text":"Start-AzPolicyRemediation"}]}'::jsonb, '["context_cmd=B","remediation_cmd=E"]'::jsonb, 'Set-AzContext chọn Sub1 cho phiên PowerShell. Start-AzPolicyRemediation tạo một tác vụ khắc phục cho việc gán chính sách và ReEvaluateCompliance làm mới việc phát hiện tuân thủ trước khi tác vụ chạy. Start-AzPolicyComplianceScan chỉ bắt đầu đánh giá tuân thủ; nó không khắc phục được tài nguyên.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-82', 'az-500', 82, 'You have an Azure subscription containing the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783965517403-nto0np01.png)  
  
You need to configure network connectivity to meet these requirements:  
  
- Communication from VM1 to storage1 must traverse an optimized Microsoft backbone network.  
- All outbound traffic from VM1 to the internet must be denied.  
- The solution must minimize costs and administrative effort.  
  
What should you configure for VNet1 and NSG1? Each component may be used once, more than once, or not at all.', '{"statements":[{"id":"vnet1","text":"VNet1:","correctAnswer":"C"},{"id":"nsg1","text":"NSG1:","correctAnswer":"D"}],"choices":[{"key":"A","text":"A private endpoint"},{"key":"B","text":"A route table"},{"key":"C","text":"A service endpoint"},{"key":"D","text":"A service tag"}]}'::jsonb, '["vnet1=C","nsg1=D"]'::jsonb, 'Bộ lưu trữ Azure service endpoint định tuyến lưu lượng dịch vụ trực tiếp từ mạng ảo qua đường trục Microsoft Azure và có thêm chi phí quản lý điểm cuối no. Quy tắc gửi đi NSG có thể sử dụng thẻ dịch vụ Internet làm đích đến và từ chối lưu lượng truy cập đó, ghi đè quy tắc cho phép internet gửi đi mặc định.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783965517403-nto0np01.png', 'published'),
  ('az500-83', 'az-500', 83, 'You have an Azure subscription that includes the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783966878028-p8jltqco.png)  
  
You plan to implement Microsoft Defender for Cloud.  
  
Which resources can be protected by using Defender for Cloud?', '[{"key":"A","text":"VM1 only"},{"key":"B","text":"VM1 and storage1 only"},{"key":"C","text":"Vault1 and storage1 only"},{"key":"D","text":"VM1, Vault1, and storage1 only"},{"key":"E","text":"VNet1, VM1, Vault1, and storage1"}]'::jsonb, '["D"]'::jsonb, 'Microsoft Defender for Cloud cung cấp các gói Defender bảo vệ máy ảo thông qua Defender for Servers, tài khoản lưu trữ thông qua Defender for Storage và các phiên bản Azure Key Vault thông qua Defender for Key Vault. Mạng ảo không được coi là tài nguyên được bảo vệ trực tiếp theo các gói này.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783966878028-p8jltqco.png', 'published'),
  ('az500-84', 'az-500', 84, 'An Azure subscription contains an Azure Blob storage account named `blob1`.  
  
You need to configure attribute-based access control (ABAC) for `blob1`.  
  
Which attributes can be used in access conditions?', '[{"key":"A","text":"blob index tags only"},{"key":"B","text":"blob index tags and container names only"},{"key":"C","text":"file extensions and container names only"},{"key":"D","text":"blob index tags, file extensions, and container names"}]'::jsonb, '["B"]'::jsonb, 'Các điều kiện Azure Blob Storage ABAC hỗ trợ thẻ chỉ mục blob và tên vùng chứa làm thuộc tính. Phần mở rộng tệp không phải là thuộc tính được hỗ trợ riêng biệt; đường dẫn blob là thuộc tính tài nguyên liên quan đến đường dẫn được hỗ trợ.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-85', 'az-500', 85, 'You have an Azure Active Directory tenant that synchronizes with an Active Directory Domain Services (AD DS) domain.  
  
You plan to create an Azure file share that will contain folders and files.  
  
Which identity store can be used to assign permissions to the Azure file share and to folders within the share?', '[]'::jsonb, '[]'::jsonb, 'Quyền truy cập chia sẻ tệp Azure được ủy quyền ở cấp độ chia sẻ thông qua việc gán vai trò Azure RBAC cho danh tính Azure AD. Các quyền cấp thư mục được thực thi bởi Windows ACL (quyền NTFS), sử dụng danh tính Dịch vụ miền Active Directory. Cả hai lớp quyền đều được đánh giá, với việc áp dụng quyền có hiệu lực hạn chế hơn. [Microsoft Learn: Assign share-level permissions for Azure file shares](https://learn.microsoft.com/en-us/azure/storage/files/storage-files-identity-assign-share-level-permissions)', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-86', 'az-500', 86, 'You have an Azure Sentinel workspace that includes an Azure Active Directory (Azure AD) data connector.  
  
You are threat hunting suspicious traffic from a specific IP address. You need to annotate an intermediate event stored in the workspace and be able to reference the IP address when navigating the investigation graph.  
  
Which three actions should you perform in sequence?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"B"},{"id":"step2","text":"Slot 2:","correctAnswer":"G"},{"id":"step3","text":"Slot 3:","correctAnswer":"E"}],"choices":[{"key":"A","text":"Add the query to Favorites."},{"key":"B","text":"From the Azure Sentinel workspace, run an Azure Log Analytics query."},{"key":"C","text":"In a Jupyter notebook, create a reference to the IP address."},{"key":"D","text":"Add a bookmark and assign a tag."},{"key":"E","text":"Add a bookmark and map an entity."},{"key":"F","text":"From Azure Monitor, run an Azure Log Analytics query."},{"key":"G","text":"Select a query result."}]}'::jsonb, '["step1=B","step2=G","step3=E"]'::jsonb, 'Dấu trang Microsoft Sentinel lưu giữ kết quả truy vấn tìm kiếm có liên quan. Để hiển thị dấu trang trong biểu đồ điều tra, ít nhất một thực thể phải được ánh xạ; ánh xạ địa chỉ IP cung cấp thực thể đó. Truy vấn yêu thích và thẻ đánh dấu không ánh xạ thực thể IP.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-87', 'az-500', 87, 'You have an Azure subscription containing an Azure Container Registry named Registry1. Microsoft Defender for Cloud is enabled for the subscription.  
  
You upload several container images to Registry1 and find that vulnerability security scans were not performed.  
  
You need to ensure that container images are vulnerability-scanned when they are uploaded to Registry1. What should you do?', '[{"key":"A","text":"From the Azure portal, modify the Pricing tier settings."},{"key":"B","text":"From Azure CLI, lock the container images."},{"key":"C","text":"Upload the container images by using AzCopy."},{"key":"D","text":"Push the container images to Registry1 by using Docker."}]'::jsonb, '["D"]'::jsonb, 'Microsoft Defender for Cloud quét hình ảnh Sổ đăng ký vùng chứa Azure khi chúng được đẩy vào sổ đăng ký (và cũng hỗ trợ các hoạt động đăng ký đủ điều kiện khác). Việc đẩy Docker tạo ra sự kiện đẩy hình ảnh kích hoạt quá trình quét lỗ hổng; khóa đăng ký, tải lên AzCopy và mức giá của Cơ quan đăng ký vùng chứa Azure không cung cấp trình kích hoạt đó.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-88', 'az-500', 88, 'Solution: You configure a delegated permission without admin consent.  
  
Does this solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["A"]'::jsonb, 'Các quyền được ủy quyền cho phép ứng dụng hành động thay mặt cho người dùng đã đăng nhập, trong phạm vi quyền truy cập của chính người dùng đó. Azure Key Vault hiển thị phạm vi `https://vault.azure.net/user_impersonation` và các quyền được ủy quyền đủ điều kiện có thể được người dùng đồng ý mà không cần có sự đồng ý của quản trị viên toàn đối tượng thuê.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-89', 'az-500', 89, 'Solution: You set up a delegated permission with administrator consent.  
  
Does this solution achieve the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["A"]'::jsonb, 'Quyền được ủy quyền cho phép ứng dụng hành động thay mặt cho người dùng đã đăng nhập. Sự đồng ý của quản trị viên cấp quyền được ủy quyền đã định cấu hình cho người dùng trong đối tượng thuê, cho phép mô hình truy cập được ủy quyền cần thiết để truy cập thay mặt người dùng.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-90', 'az-500', 90, 'You have an Azure subscription.  
  
You plan to deploy the virtual machines shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783966877122-ldbdnqdi.png)  
  
You need to determine which virtual machines and operating systems can be deployed as confidential virtual machines.  
  
Which Windows virtual machines and which Linux virtual machines should you identify?', '[]'::jsonb, '[]'::jsonb, 'Máy ảo bí mật Azure hỗ trợ các kích thước máy ảo DCadsv5 và ECadsv5. Các hình ảnh Windows Server đủ điều kiện bao gồm Trung tâm dữ liệu Windows Server 2022: Phiên bản Azure và Trung tâm dữ liệu Windows Server 2022, trong khi Windows Server Standard không được liệt kê. Hình ảnh Linux đủ tiêu chuẩn bao gồm Ubuntu và SUSE, trong khi Debian không được liệt kê. [About Azure confidential VMs](https://learn.microsoft.com/en-us/azure/confidential-computing/confidential-vm-overview)', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783966877122-ldbdnqdi.png', 'published'),
  ('az500-91', 'az-500', 91, 'You have an Azure subscription containing a resource group named RG1 and a security group named ServerAdmins. RG1 includes 10 virtual machines, a virtual network named VNET1, and a network security group (NSG) named NSG1. ServerAdmins can access the virtual machines by using RDP.  
  
You need to ensure that NSG1 permits RDP connections to the virtual machines for no more than 60 minutes when a ServerAdmins member requests access.  
  
What should you configure?', '[{"key":"A","text":"an Azure policy assigned to RG1"},{"key":"B","text":"a just in time (JIT) VM access policy in Microsoft Defender for Cloud"},{"key":"C","text":"an Azure Active Directory (Azure AD) Privileged Identity Management (PIM) role assignment"},{"key":"D","text":"an Azure Bastion host on VNET1"}]'::jsonb, '["B"]'::jsonb, 'Quyền truy cập VM đúng lúc của Microsoft Defender for Cloud có thể bảo vệ cổng RDP 3389 và đặt thời gian yêu cầu tối đa. Theo yêu cầu được phê duyệt, nó tạm thời định cấu hình NSG có liên quan để cho phép truy cập RDP gửi đến trong khoảng thời gian được định cấu hình, sau đó khôi phục trạng thái NSG sau khi hết thời gian đó.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-92', 'az-500', 92, 'You have an on-premises network and an Azure subscription.  
  
You have the Microsoft SQL Server instances shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783955730967-u8g53xu8.png)  
  
You plan to deploy Microsoft Defender for SQL.  
  
Which SQL Server instances will Microsoft Defender for SQL protect?', '[{"key":"A","text":"sql1 and sql2 only"},{"key":"B","text":"sql1, sql2, and sql3 only"},{"key":"C","text":"sql1, sql2, and sql4 only"},{"key":"D","text":"sql1, sql2, sql3, and sql4"}]'::jsonb, '["C"]'::jsonb, 'Microsoft Defender cho SQL bảo vệ Azure SQL Managed Instance và hỗ trợ các phiên bản SQL Server trên máy Windows, bao gồm SQL Server trên Azure virtual machines và các máy chủ Windows tại chỗ được hỗ trợ khi chúng được tích hợp theo yêu cầu. SQL Server chạy trên RHEL không được bao gồm trong hỗ trợ Windows Server hiện hành dành cho Bộ bảo vệ dành cho Máy chủ SQL trên Máy.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783955730967-u8g53xu8.png', 'published'),
  ('az500-93', 'az-500', 93, 'Your company has an Azure subscription named Sub1 that is associated with an Azure Active Directory (Azure AD) tenant named contoso.com.  
  
The company develops an application named App1, which is registered in Azure AD.  
  
You need to ensure that App1 can access secrets in Azure Key Vault on behalf of the application users.  
  
What should you configure?', '[{"key":"A","text":"an application permission without admin consent"},{"key":"B","text":"a delegated permission without admin consent"},{"key":"C","text":"a delegated permission that requires admin consent"},{"key":"D","text":"an application permission that requires admin consent"}]'::jsonb, '["B"]'::jsonb, 'Quyền được ủy quyền cho phép ứng dụng truy cập tài nguyên thay mặt cho người dùng đã đăng nhập; quyền ứng dụng được sử dụng khi ứng dụng hoạt động mà không có người dùng. Azure Key Vault cung cấp phạm vi `user_impersonation` được ủy quyền và kịch bản này vốn không yêu cầu sự đồng ý của quản trị viên.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-94', 'az-500', 94, 'You plan to deploy Azure container instances.  
  
You have a containerized application composed of two containers: an application container and a validation container. The application container is monitored by the validation container. After every transaction, the validation container performs security checks by sending requests to the application container and waiting for responses.  
  
You need to ensure that the application container and the validation container are scheduled for deployment together. The containers must communicate with one another only on ports that are not externally exposed.  
  
What should you include in the deployment?', '[{"key":"A","text":"application security groups"},{"key":"B","text":"network security groups (NSGs)"},{"key":"C","text":"management groups"},{"key":"D","text":"container groups"}]'::jsonb, '["D"]'::jsonb, 'Nhóm vùng chứa Azure Container Instances triển khai các vùng chứa liên quan cùng nhau trên cùng một máy chủ. Các vùng chứa chia sẻ một không gian tên mạng và có thể giao tiếp qua localhost, cho phép vùng chứa xác thực tiếp cận vùng chứa ứng dụng mà không để lộ các cổng đó ra bên ngoài.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-95', 'az-500', 95, 'You need to configure SQLDB1 to meet the data and application requirements.  
  
Which three actions should you recommend performing in sequence?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"E"},{"id":"step2","text":"Slot 2:","correctAnswer":"B"},{"id":"step3","text":"Slot 3:","correctAnswer":"D"}],"choices":[{"key":"A","text":"From the Azure portal, create a managed identity."},{"key":"B","text":"Connect to SQLDB1 by using Microsoft SQL Server Management Studio (SSMS)."},{"key":"C","text":"In Azure AD, enable authentication method policy."},{"key":"D","text":"In SQLDB1, create contained database users."},{"key":"E","text":"From the Azure portal, create an Azure AD administrator for LitwareSQLServer1."}]}'::jsonb, '["step1=E","step2=B","step3=D"]'::jsonb, 'Quản trị viên Microsoft Entra (Azure AD) là danh tính ban đầu được ủy quyền để kết nối và tạo người dùng Microsoft Entra trong Azure SQL Database. Sau khi kết nối với SQLDB1 trong SSMS với tư cách quản trị viên đó, hãy tạo người dùng cơ sở dữ liệu chứa đựng các danh tính Microsoft Entra cần thiết. managed identity không phải là điều kiện tiên quyết khi quản trị viên thực hiện việc tạo người dùng này và chính sách phương thức xác thực không liên quan đến việc định cấu hình người dùng chứa Azure SQL.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-96', 'az-500', 96, 'You have an Azure Active Directory (Azure AD) tenant called contoso.com.  
  
You need to set up diagnostic settings for contoso.com. The solution must satisfy these requirements:  
  
- Retain logs for two years.  
- Query logs by using the Kusto query language.  
- Minimize administrative effort.  
  
Where should the logs be stored?', '[{"key":"A","text":"an Azure event hub"},{"key":"B","text":"an Azure Log Analytics workspace"},{"key":"C","text":"an Azure Storage account"}]'::jsonb, '["B"]'::jsonb, 'Không gian làm việc Azure Log Analytics là đích đến gốc cho nhật ký chẩn đoán Microsoft Entra ID và hỗ trợ truy vấn các nhật ký đó bằng Ngôn ngữ truy vấn Kusto (KQL). Việc lưu giữ nó có thể được cấu hình trong 730 ngày, đáp ứng yêu cầu lưu giữ trong hai năm mà không cần xây dựng cơ sở hạ tầng truy vấn lưu trữ hoặc truyền phát bổ sung.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-97', 'az-500', 97, 'Solution: Create a policy initiative and an assignment scoped to the **Tenant Root Group** management group.  
  
Does this meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["A"]'::jsonb, 'Sáng kiến ​​Chính sách Azure kết hợp nhiều định nghĩa chính sách vào một nhiệm vụ duy nhất. Việc gán chính sách được thực hiện tại nhóm quản lý gốc sẽ áp dụng trên toàn bộ hệ thống phân cấp thư mục, bao gồm tất cả các nhóm quản lý con và các đăng ký trong đối tượng thuê Microsoft Entra.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-98', 'az-500', 98, 'Solution: You create a policy initiative and assignments scoped to resource groups.  
  
Does this satisfy the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["B"]'::jsonb, 'Sáng kiến ​​Chính sách Azure nhóm các định nghĩa chính sách nhưng mỗi nhiệm vụ chỉ áp dụng cho phạm vi được chỉ định và các tài nguyên con của nó. Do đó, các nhiệm vụ trong phạm vi nhóm tài nguyên không thể triển khai sáng kiến ​​cho cả ba đăng ký Azure; nhiệm vụ phải nằm trong phạm vi từng đăng ký hoặc cho nhóm quản lý có chứa chúng.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-99', 'az-500', 99, 'Solution: You create a policy definition and assignments that are scoped to resource groups.  
  
Does this fulfill the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["B"]'::jsonb, 'Việc gán chính sách nhóm tài nguyên chỉ áp dụng cho nhóm tài nguyên đó và các tài nguyên con của nó, không áp dụng cho các nhóm tài nguyên hoặc đăng ký khác. Để triển khai nhiều định nghĩa chính sách cùng nhau trên ba đăng ký, hãy sử dụng phân công sáng kiến ​​ở phạm vi nhóm quản lý chung (hoặc chỉ định riêng ở từng phạm vi đăng ký).', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-100', 'az-500', 100, 'Solution: You create an initiative and an assignment scoped to a management group.  
  
Does this achieve the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["A"]'::jsonb, 'Sáng kiến ​​Chính sách Azure nhóm nhiều định nghĩa chính sách vào một đơn vị. Việc chỉ định sáng kiến ​​đó ở phạm vi nhóm quản lý sẽ áp dụng sáng kiến ​​đó cho các đăng ký con của nhóm quản lý, cho phép triển khai tập trung trên cả ba đăng ký.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-101', 'az-500', 101, 'Solution: You create a resource graph along with an assignment that is scoped to a management group.  
  
Does this satisfy the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["B"]'::jsonb, 'Sáng kiến ​​Chính sách Azure, còn được gọi là bộ chính sách, là đối tượng nhóm nhiều định nghĩa chính sách để quản lý thông qua một nhiệm vụ duy nhất. Azure Resource Graph là dịch vụ truy vấn tài nguyên và không tạo nhóm chính sách như vậy. Việc phân công nhóm quản lý có thể áp dụng chính sách cho các đăng ký con, nhưng nó phải chỉ định một sáng kiến ​​hoặc định nghĩa chính sách.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-102', 'az-500', 102, 'You are investigating a security issue involving an Azure Storage account.  
  
You enable Azure Storage Analytics logs and archive them to a storage account.  
  
What should you use to retrieve the diagnostic logs?', '[{"key":"A","text":"the Microsoft 365 Defender portal"},{"key":"B","text":"SQL query editor in Azure"},{"key":"C","text":"Azure Monitor"},{"key":"D","text":"Azure Storage Explorer"}]'::jsonb, '["D"]'::jsonb, 'Nhật ký chẩn đoán Azure Storage Analytics được lưu trữ trong vùng chứa blob `$logs` của tài khoản lưu trữ. Microsoft Azure Storage Explorer có thể truy cập và xem các đốm nhật ký được lưu trữ này.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-103', 'az-500', 103, 'You have an Azure subscription named Sub1.  
  
In Microsoft Defender for Cloud, you have a workflow automation named WF1. WF1 is configured to send an email message to a user named User1.  
  
You need to change WF1 so that it sends email messages to a distribution group named Alerts.  
  
What should you use to modify WF1?', '[{"key":"A","text":"Azure Logic Apps Designer"},{"key":"B","text":"Azure Application Insights"},{"key":"C","text":"Azure DevOps"},{"key":"D","text":"Azure Monitor"}]'::jsonb, '["A"]'::jsonb, 'Tự động hóa quy trình làm việc Microsoft Defender for Cloud kích hoạt Ứng dụng Logic tiêu thụ và hành động email—bao gồm cả người nhận—được định cấu hình trong Ứng dụng Logic đó. Do đó, Azure Logic Apps Designer được sử dụng để thay đổi người nhận thành nhóm phân phối Cảnh báo.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-104', 'az-500', 104, 'You have an Azure subscription containing the virtual machines shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783966882920-a4dv3hs9.png)  
  
You are configuring Microsoft Defender for Servers.  
  
You plan to enable adaptive application controls to create an allowlist of known-safe applications on the virtual machines.  
  
Which virtual machines support using adaptive application controls?', '[{"key":"A","text":"VM1 and VM2 only"},{"key":"B","text":"VM2 and VM4 only"},{"key":"C","text":"VM2 and VM3 only"},{"key":"D","text":"VM1, VM2, VM3, and VM4"}]'::jsonb, '["A"]'::jsonb, 'Các điều khiển ứng dụng thích ứng dựa trên AppLocker. AppLocker không được hỗ trợ trên các bản cài đặt Server Core, ngoại trừ VM3. Các điều khiển ứng dụng thích ứng cũng không hỗ trợ các máy Windows đã bật chính sách AppLocker, ngoại trừ VM4. Vì vậy, các máy được hỗ trợ là bản cài đặt đầy đủ của Windows Server 2019 và Windows Server 2022: VM1 và VM2.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783966882920-a4dv3hs9.png', 'published'),
  ('az500-105', 'az-500', 105, 'Your organization has an Azure subscription named Sub1.  
  
You plan to create multiple security alerts by using Azure Monitor.  
  
You need to prepare Sub1 for these alerts.  
  
What should you create first?', '[{"key":"A","text":"an Azure Automation account"},{"key":"B","text":"an Azure event hub"},{"key":"C","text":"an Azure Log Analytics workspace"},{"key":"D","text":"an Azure Storage account"}]'::jsonb, '["C"]'::jsonb, 'Không gian làm việc Log Analytics là kho lưu trữ dữ liệu Azure Monitor dành cho dữ liệu nhật ký được thu thập. Cảnh báo bảo mật dựa trên nhật ký truy vấn không gian làm việc đó, do đó, không gian làm việc đó phải tồn tại trước khi có thể tạo quy tắc cảnh báo.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-106', 'az-500', 106, 'Your company has an Azure subscription named Sub1. Sub1 contains an Azure web app named WebApp1 that uses Azure Application Insights. WebApp1 requires users to authenticate by using OAuth 2.0 client secrets.  
  
Developers at the company plan to create a multi-step web test app that performs synthetic transactions emulating user traffic to WebApp1.  
  
You need to ensure that the web tests can run unattended. What should you do first?', '[{"key":"A","text":"In Microsoft Visual Studio, modify the .webtest file."},{"key":"B","text":"Upload the .webtest file to Application Insights."},{"key":"C","text":"Register the web test app in Azure AD."},{"key":"D","text":"Add a plug-in to the web test app."}]'::jsonb, '["C"]'::jsonb, 'Xác thực bí mật ứng dụng khách OAuth 2.0 để thực thi không cần giám sát yêu cầu ứng dụng khách bí mật có ID ứng dụng (ứng dụng khách) và bí mật ứng dụng khách. Đăng ký ứng dụng kiểm tra web trong Microsoft Entra ID sẽ tạo ra danh tính khách hàng đó; sau đó nó có thể lấy mã thông báo truy cập mà không cần xác thực người dùng tương tác.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-107', 'az-500', 107, 'You have an Azure subscription.  
  
You plan to map online infrastructure and carry out vulnerability scanning for the following:  
  
- ASNs  
- Hostnames  
- IP addresses  
- SSL certificates  
  
What should you use?', '[{"key":"A","text":"Microsoft Defender for Cloud"},{"key":"B","text":"Microsoft Defender External Attack Surface Management (Defender EASM)"},{"key":"C","text":"Microsoft Defender for Identity"},{"key":"D","text":"Microsoft Defender for Endpoint"}]'::jsonb, '["B"]'::jsonb, 'Quản lý bề mặt tấn công bên ngoài của Bộ bảo vệ Microsoft (Defender EASM) liên tục phát hiện và lập bản đồ cơ sở hạ tầng tiếp xúc với Internet. Nó hỗ trợ khám phá ASN, máy chủ, địa chỉ IP và chứng chỉ SSL, đồng thời cung cấp thông tin chi tiết về lỗ hổng và mức độ phơi nhiễm cho bề mặt tấn công bên ngoài.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-108', 'az-500', 108, 'You have the Azure resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783955545059-0gh34rg4.jpg)  
  
You must meet the following requirements:  
  
- Internet-facing virtual machines must be protected by using network security groups (NSGs).  
- Disk encryption must be enabled on all the virtual machines.  
  
What is the minimum number of security policies that you need to create in Microsoft Defender for Cloud?', '[{"key":"A","text":"1"},{"key":"B","text":"2"},{"key":"C","text":"3"},{"key":"D","text":"4"}]'::jsonb, '["A"]'::jsonb, 'Một chính sách bảo mật duy nhất được chỉ định ở phạm vi Subscription1 có thể chứa các điều khiển mã hóa ổ đĩa và NSG cần thiết. Việc gán chính sách ở phạm vi đó bao gồm cả RG1 và RG2 cũng như các máy ảo của chúng, do đó, một chính sách có thể chi phối cả hai yêu cầu trên tất cả các máy ảo.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783955545059-0gh34rg4.jpg', 'published'),
  ('az500-109', 'az-500', 109, 'You have an Azure key vault.  
  
You must delegate administrative access to the key vault to meet these requirements:  
  
- Give a user named User1 the ability to set key-vault access policies.  
- Give a user named User2 the ability to add and delete certificates in the key vault.  
- Follow the principle of least privilege.  
  
What should you use to assign access to each user?', '[]'::jsonb, '[]'::jsonb, 'Cập nhật chính sách truy cập Key Vault là một hành động trên mặt phẳng điều khiển và yêu cầu Azure RBAC. Tạo và xóa chứng chỉ là các hoạt động trên mặt phẳng dữ liệu Key Vault; chính sách truy cập Key Vault chỉ có thể cấp các quyền chứng chỉ cần thiết, do đó, việc gán RBAC bổ sung no là bắt buộc đối với Người dùng2.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-110', 'az-500', 110, 'You have an Azure Active Directory (Azure AD) tenant that includes a group named Group1.  
  
You need to make sure that Group1 members sign in using passwordless authentication.  
  
What should you do?', '[{"key":"A","text":"Configure the sign-in risk policy."},{"key":"B","text":"Create a Conditional Access policy."},{"key":"C","text":"Configure the Microsoft Authenticator authentication method policy."},{"key":"D","text":"Configure the certificate-based authentication (CBA) policy."}]'::jsonb, '["C"]'::jsonb, 'Chính sách phương pháp xác thực Microsoft Authenticator có thể cho phép đăng nhập bằng điện thoại không cần mật khẩu và nhắm mục tiêu phương thức đã bật vào một nhóm cụ thể, chẳng hạn như Group1. Chế độ xác thực của nó có thể được đặt thành chỉ không cần mật khẩu (`deviceBasedPush`) khi được yêu cầu. [Microsoft Learn: Passwordless sign-in with Authenticator](https://learn.microsoft.com/en-us/azure/active-directory/authentication/howto-authentication-passwordless-phone)', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-111', 'az-500', 111, 'You have an Azure subscription that uses Microsoft Defender for Cloud. The subscription includes the Azure Policy definitions shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783960426076-n5o0uhce.png)  
  
Which definitions can be assigned as a security policy in Defender for Cloud?', '[{"key":"A","text":"Policy1 and Policy2 only"},{"key":"B","text":"Initiative1 and Initiative2 only"},{"key":"C","text":"Policy1 and Initiative1 only"},{"key":"D","text":"Policy2 and Initiative2 only"},{"key":"E","text":"Policy1, Policy2, Initiative1, and Initiative2"}]'::jsonb, '["B"]'::jsonb, 'Các chính sách bảo mật của Microsoft Defender for Cloud dựa trên các định nghĩa sáng kiến ​​Chính sách Azure, bao gồm một hoặc nhiều định nghĩa chính sách. Không thể chỉ định các định nghĩa Chính sách Azure riêng lẻ làm chính sách bảo mật của Bộ bảo vệ cho đám mây. Cả hai sáng kiến ​​đều đủ điều kiện: sáng kiến ​​Tuân thủ quy định hỗ trợ đánh giá tuân thủ quy định của Defender for Cloud và sáng kiến ​​Trung tâm bảo mật hỗ trợ đánh giá chính sách bảo mật.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783960426076-n5o0uhce.png', 'published'),
  ('az500-112', 'az-500', 112, 'You have an Azure subscription named Sub1. Sub1 contains an Azure virtual machine named VM1 that runs Windows Server 2016.  
  
You need to encrypt the disks on VM1 by using Azure Disk Encryption.  
  
Which three actions should you carry out in sequence?', '{"statements":[{"id":"slot1","text":"Slot 1:","correctAnswer":"B"},{"id":"slot2","text":"Slot 2:","correctAnswer":"C"},{"id":"slot3","text":"Slot 3:","correctAnswer":"E"}],"choices":[{"key":"A","text":"Run Set-AzStorageAccount."},{"key":"B","text":"Create an Azure key vault."},{"key":"C","text":"Configure access policies for the Azure key vault."},{"key":"D","text":"Configure secrets for the Azure key vault."},{"key":"E","text":"Run Set-AzVMDiskEncryptionExtension."}]}'::jsonb, '["slot1=B","slot2=C","slot3=E"]'::jsonb, 'Azure Disk Encryption yêu cầu Key Vault và chính sách truy cập cho phép vault mã hóa ổ đĩa. Sau khi định cấu hình các điều kiện tiên quyết đó, `Set-AzVMDiskEncryptionExtension` sẽ cài đặt tiện ích mở rộng mã hóa ổ đĩa và kích hoạt mã hóa trên máy ảo IaaS đang chạy. Tiện ích mở rộng tạo và sử dụng tài liệu bí mật mã hóa cần thiết, do đó, việc định cấu hình bí mật theo cách thủ công không phải là điều kiện tiên quyết.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-114', 'az-500', 114, 'You have an Azure subscription named Subscription1 that includes an Azure Active Directory (Azure AD) tenant named contoso.com and a resource group named RG1.  
  
You create a custom role named Role1 for contoso.com.  
  
Where can you use Role1 to delegate permissions?', '[{"key":"A","text":"contoso.com only"},{"key":"B","text":"contoso.com and RG1 only"},{"key":"C","text":"contoso.com and Subscription1 only"},{"key":"D","text":"contoso.com, RG1, and Subscription1"}]'::jsonb, '["A"]'::jsonb, 'Vai trò tùy chỉnh Microsoft Entra ID là vai trò thư mục và chỉ có thể được chỉ định trong đối tượng thuê Microsoft Entra nơi vai trò đó được xác định. Các quyền của đăng ký Azure và nhóm tài nguyên được ủy quyền thông qua các định nghĩa và phân công vai trò Azure RBAC chứ không phải thông qua các vai trò tùy chỉnh trong thư mục Microsoft Entra.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-115', 'az-500', 115, 'You have an Azure AD tenant that includes the users shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783960408953-s9yfec29.png)  
  
Passwordless authentication is enabled for the tenant.  
  
Which passwordless authentication method can each user use? An authentication method may be used once, more than once, or not at all.', '{"statements":[{"id":"user1","text":"User1:","correctAnswer":"B"},{"id":"user2","text":"User2:","correctAnswer":"E"}],"choices":[{"key":"A","text":"FIDO2 security key only"},{"key":"B","text":"Microsoft Authenticator app only"},{"key":"C","text":"Windows Hello for Business only"},{"key":"D","text":"Microsoft Authenticator app and Windows Hello for Business only"},{"key":"E","text":"Windows Hello for Business and FIDO2 security key only"},{"key":"F","text":"Microsoft Authenticator app, Windows Hello for Business, and FIDO2 security key"}]}'::jsonb, '["user1=B","user2=E"]'::jsonb, 'Tính năng đăng nhập qua điện thoại không cần mật khẩu Microsoft Authenticator chạy trên Android hoặc iOS và sử dụng sinh trắc học hoặc mã PIN của điện thoại, do đó, tính năng này khả dụng trên thiết bị Android của User1 có nhận dạng khuôn mặt. Windows Hello for Business là thông tin xác thực sinh trắc học/mã PIN dành cho PC chạy Windows tương thích, do đó, nó có sẵn cho Người dùng2. Đăng nhập bằng khóa bảo mật FIDO2 được hỗ trợ trên Windows và được định cấu hình độc lập với Windows Hello for Business. Thiết bị di động No được liệt kê cho Người dùng2, vì vậy ứng dụng Authenticator không phải là phương pháp khả dụng cho người dùng đó.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783960408953-s9yfec29.png', 'published'),
  ('az500-116', 'az-500', 116, 'Your Azure subscription contains the Azure Active Directory (Azure AD) resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954303199-m5u69ba9.png)  
  
You then create the groups shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954307285-mu2k4e1d.png)  
  
Which resources can be added to Group5 and Group6?', '[]'::jsonb, '[]'::jsonb, 'Một nhóm bảo mật được chỉ định có thể chứa người dùng, các nhóm bảo mật khác và dịch vụ chính. Danh tính được quản lý và ứng dụng doanh nghiệp là các đối tượng chính của dịch vụ, vì vậy User1, Group1, Managed1 và App1 là thành viên hợp lệ của Group5. Nhóm Microsoft 365 chỉ cho phép người dùng làm thành viên, vì vậy chỉ có thể thêm Người dùng1 vào Nhóm6.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783954303199-m5u69ba9.png', 'published'),
  ('az500-117', 'az-500', 117, 'HOTSPOT -  
  
You have an Azure subscription containing an Azure Active Directory (Azure AD) tenant named contoso.com. The tenant includes the users shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953178817-n1db3bf2.png)  
  
You create a resource group named RG1.  
  
Which users can modify RG1 permissions, and which users can create virtual networks in RG1?', '[]'::jsonb, '[]'::jsonb, 'Chủ sở hữu ở phạm vi đăng ký có thể quản lý quyền truy cập và tài nguyên trong RG1. Cộng tác viên có thể tạo và quản lý tài nguyên, bao gồm cả mạng ảo, nhưng không thể chỉ định vai trò Azure RBAC. Quản trị viên bảo mật Azure AD và quản trị viên dịch vụ là các vai trò thư mục chứ không phải vai trò tài nguyên Azure nên họ không cấp quyền cho RG1.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953178817-n1db3bf2.png', 'published'),
  ('az500-118', 'az-500', 118, 'You have an Azure Active Directory (Azure AD) tenant.  
  
You need to stop nonprivileged Azure AD users from creating service principals in Azure AD.  
  
What should you do in the tenant''s Azure Active Directory admin center?', '[{"key":"A","text":"From the User settings blade, set Users can register applications to No."},{"key":"B","text":"From the Properties blade, set Access management for Azure resources to No."},{"key":"C","text":"From the User settings blade, set Restrict access to Azure AD administration portal to Yes."},{"key":"D","text":"From the Properties blade, set Enable Security defaults to Yes."}]'::jsonb, '["A"]'::jsonb, 'Đăng ký ứng dụng sẽ tự động tạo service principal trong đối tượng thuê. Cài đặt **Người dùng có thể đăng ký ứng dụng** thành **No** trong Cài đặt người dùng sẽ ngăn người dùng không có đặc quyền đăng ký ứng dụng và do đó tạo nguyên tắc dịch vụ thông qua đăng ký ứng dụng.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-119', 'az-500', 119, 'Your company has an Azure SQL database with Always Encrypted enabled.  
  
You need to make the relevant information available to application developers so they can access data in the database.  
  
Which two options should be made available?', '{"statements":[{"id":"slot1","text":"Slot 1:","correctAnswer":"D"},{"id":"slot2","text":"Slot 2:","correctAnswer":"E"}],"choices":[{"key":"A","text":"The column encryption key"},{"key":"B","text":"A DLP policy"},{"key":"C","text":"A shared access signature (SAS)"},{"key":"D","text":"A key vault access policy"},{"key":"E","text":"The column master key"}]}'::jsonb, '["slot1=D","slot2=E"]'::jsonb, 'Ứng dụng đọc dữ liệu Luôn được mã hóa ở dạng văn bản gốc phải truy cập vào khóa chính của cột (CMK), khóa này sẽ giải mã khóa mã hóa cột (CEK). Khi CMK được lưu trữ trong Azure Key Vault, danh tính của ứng dụng yêu cầu chính sách truy cập Key Vault thích hợp, chẳng hạn như quyền lấy và mở khóa. CEK được trình điều khiển truy xuất từ ​​siêu dữ liệu cơ sở dữ liệu, trong khi các chính sách DLP và mã thông báo SAS không cung cấp quyền truy cập khóa cần thiết.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-121', 'az-500', 121, 'You have an Azure subscription.  
  
You configure the subscription to use another Azure Active Directory (Azure AD) tenant.  
  
What are two possible effects of this change? Each correct answer presents a complete solution.  
  
> NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Role assignments at the subscription level are lost."},{"key":"B","text":"Virtual machine managed identities are lost."},{"key":"C","text":"Virtual machine disk snapshots are lost."},{"key":"D","text":"Existing Azure resources are deleted."}]'::jsonb, '["A","B"]'::jsonb, 'Việc thay đổi gói đăng ký sang một đối tượng thuê Azure AD khác sẽ xóa vĩnh viễn các hoạt động gán vai trò Azure RBAC khỏi đối tượng thuê nguồn, do đó, các hoạt động gán vai trò ở cấp độ đăng ký phải được tạo lại. Danh tính được quản lý liên kết với các tài nguyên như máy ảo không được chuyển dưới dạng danh tính chức năng; danh tính do hệ thống chỉ định phải được kích hoạt lại và danh tính do người dùng chỉ định phải được tạo lại. Các tài nguyên Azure hiện có và ảnh chụp nhanh ổ đĩa của chúng sẽ được giữ lại.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-122', 'az-500', 122, 'You have an Azure AD tenant.  
  
You need to ensure that users cannot create passwords that include a variation of the word `contoso`.  
  
What should you configure?', '[{"key":"A","text":"Microsoft Entra Verified ID"},{"key":"B","text":"Microsoft Entra Identity Governance"},{"key":"C","text":"Azure AD Privileged Identity Management (PIM)"},{"key":"D","text":"Azure AD Password Protection"},{"key":"E","text":"Azure AD Identity Protection"}]'::jsonb, '["D"]'::jsonb, 'Bảo vệ mật khẩu Azure AD cung cấp danh sách mật khẩu bị cấm tùy chỉnh cho các thuật ngữ dành riêng cho tổ chức, chẳng hạn như tên công ty. Thuật toán đánh giá mật khẩu của nó bình thường hóa các thay thế ký tự phổ biến và đánh giá các biến thể của thuật ngữ bị cấm, do đó, việc thêm `contoso` sẽ bảo vệ chống lại mật khẩu dựa trên từ đó.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-123', 'az-500', 123, 'Solution: You begin by creating a custom sensitive information type.  
  
Does this solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["B"]'::jsonb, 'Loại thông tin nhạy cảm tùy chỉnh được sử dụng để xác định các mẫu nội dung cụ thể. Nó không tạo nhãn nhạy cảm tùy chỉnh; nhãn nhạy cảm phải được tạo riêng trong dịch vụ dán nhãn bảo vệ thông tin liên quan.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-124', 'az-500', 124, 'Solution: You begin by changing the Security Center pricing tier.  
  
Does the solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["B"]'::jsonb, 'Nhãn độ nhạy tùy chỉnh được tạo và định cấu hình trong cổng Microsoft Purview. Việc thay đổi bậc giá của Trung tâm Bảo mật Azure không tạo hoặc đặt cấu hình nhãn nhạy cảm.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-125', 'az-500', 125, 'Solution: Begin by integrating Security Center with Microsoft Cloud App Security.  
  
Does this solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["B"]'::jsonb, 'Nhãn độ nhạy tùy chỉnh được tạo và định cấu hình trong cổng Microsoft Purview. Việc tích hợp giữa Ứng dụng Microsoft Defender for Cloud và Microsoft Defender for Cloud không tạo nhãn độ nhạy tùy chỉnh.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-126', 'az-500', 126, 'You have an Azure subscription.  
  
You plan to create two custom roles, named Role1 and Role2.  
  
The custom roles will be used for these tasks:  
  
- Members of Role1 will manage application security groups.  
- Members of Role2 will manage Azure Bastion.  
  
You must add permissions to the custom roles.  
  
Which resource provider should be used for each role? Each resource provider may be used more than once or not at all.', '{"statements":[{"id":"role1","text":"Role1:","correctAnswer":"B"},{"id":"role2","text":"Role2:","correctAnswer":"B"}],"choices":[{"key":"A","text":"Microsoft.Compute"},{"key":"B","text":"Microsoft.Network"},{"key":"C","text":"Microsoft.Security"},{"key":"D","text":"Microsoft.Solutions"}]}'::jsonb, '["role1=B","role2=B"]'::jsonb, 'Các nhóm bảo mật ứng dụng là tài nguyên Microsoft.Network và Azure Bastion được quản lý thông qua Microsoft.Network/bastionHosts. Do đó, cả hai vai trò tùy chỉnh đều cần có quyền từ nhà cung cấp tài nguyên Microsoft.Network.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-127', 'az-500', 127, 'You have an Azure subscription that uses Azure AD Privileged Identity Management (PIM).  
  
A user named User1 is eligible for the Billing administrator role.  
  
You need to ensure that the role can be used for no more than two hours.  
  
What should you do?', '[{"key":"A","text":"Create a new access review."},{"key":"B","text":"Edit the role assignment settings."},{"key":"C","text":"Update the end date of the user assignment."},{"key":"D","text":"Edit the role activation settings."}]'::jsonb, '["D"]'::jsonb, 'Cài đặt kích hoạt vai trò PIM chứa cài đặt Thời lượng tối đa kích hoạt, kiểm soát số giờ tối đa mà kích hoạt vai trò của người dùng đủ điều kiện vẫn hoạt động. Đặt khoảng thời gian đó thành hai giờ cho vai trò Quản trị viên thanh toán.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-128', 'az-500', 128, 'HOTSPOT –  
  
You are assessing the security of VM1, VM2, and VM3 in Sub2.  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"From the Internet, you can connect to the web server on VM1 by using HTTP.","correctAnswer":"Yes"},{"id":"2","text":"From the Internet, you can connect to the web server on VM2 by using HTTP.","correctAnswer":"No"},{"id":"3","text":"From the Internet, you can connect to the web server on VM3 by using HTTP.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:Yes","2:No","3:Yes"]'::jsonb, 'VM1 được cho phép vì mạng con NSG cho phép cổng Internet TCP 80. VM2 bị chặn vì lưu lượng truy cập cũng phải vượt qua NIC NSG, có quy tắc gửi đến không cho phép HTTP từ Internet và do đó đạt đến quy tắc từ chối mặc định. VM3 có no NSG được liên kết với mạng con hoặc NIC của nó; với IP công cộng và truy cập web IIS/tường lửa được kích hoạt, HTTP được cho phép. Các quy tắc NSG được đánh giá theo mức độ ưu tiên và NSG có thể lọc lưu lượng truy cập gửi đến ở cả phạm vi mạng con và NIC.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-129', 'az-500', 129, 'You need to evaluate the underlined segment to determine whether it is correct.  
  
You have configured an Azure Kubernetes Service (AKS) cluster in your testing environment. You are now preparing to deploy the cluster to the production environment.  
  
After disabling HTTP application routing, you want to replace it with an application-routing solution that provides reverse proxy and TLS termination for AKS services through a single IP address. You must create an AKS Ingress controller.  
  
Select `No adjustment required` if the underlined segment is accurate. If it is inaccurate, select the correct option.', '[{"key":"A","text":"No adjustment required."},{"key":"B","text":"a network security group"},{"key":"C","text":"an application security group"},{"key":"D","text":"an Azure Basic Load Balancer"}]'::jsonb, '["A"]'::jsonb, 'Bộ điều khiển xâm nhập AKS cung cấp định tuyến proxy ngược và chấm dứt TLS lớp 7, đồng thời nó có thể hiển thị nhiều dịch vụ AKS thông qua một địa chỉ IP. Các nhóm bảo mật mạng và nhóm bảo mật ứng dụng cung cấp tính năng lọc lưu lượng, trong khi Bộ cân bằng tải cơ bản Azure cung cấp khả năng cân bằng tải Lớp 4 thay vì khả năng xâm nhập của lớp ứng dụng.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-130', 'az-500', 130, 'You have an Azure subscription containing a user named Admin1 and an Azure key vault called Vault1.  
  
You plan to implement Microsoft Entra Verified ID.  
  
You need to create an access policy that gives Admin1 the Vault1 permissions needed to support implementation of the Verified ID service. The solution must follow the principle of least privilege.  
  
Which three key permissions should you select?

![Question Image](https://cdn.examcademy.com/images/questions/1785599521933-cfey45me.png)', '[]'::jsonb, '[]'::jsonb, 'ID được xác minh của Microsoft Entra sử dụng khóa Azure Key Vault để ký thông tin xác thực có thể xác minh. Các quyền khóa tối thiểu bắt buộc là Tạo và Xóa để thiết lập dịch vụ có thể quản lý khóa ký và Ký để có thể tạo chữ ký thông tin xác thực. Nhận, Liệt kê, Cập nhật, Nhập, khôi phục/sao lưu/khôi phục, mã hóa/giải mã, gói, xác minh, hoạt động đặc quyền và quyền chính sách xoay vòng là không cần thiết cho mục đích này.

**Tài liệu tham khảo:**
[Advanced Microsoft Entra Verified ID setup](https://learn.microsoft.com/en-us/entra/verified-id/verifiable-credentials-configure-tenant)', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1785599521933-cfey45me.png', 'published'),
  ('az500-131', 'az-500', 131, 'You have an Azure subscription containing two virtual machines, named VM1 and VM2, that run Windows Server 2019.  
  
You are implementing Update Management in Azure Automation and plan to create a new update deployment named Update1.  
  
You must ensure that Update1 meets these requirements:  
  
- Automatically apply updates to VM1 and VM2.  
- Automatically add any new Windows Server 2019 virtual machines to Update1.  
  
What should you include in Update1?', '[{"key":"A","text":"a security group that has a Membership type of Assigned"},{"key":"B","text":"a security group that has a Membership type of Dynamic Device"},{"key":"C","text":"a dynamic group query"},{"key":"D","text":"a Kusto query language query"}]'::jsonb, '["C"]'::jsonb, 'Truy vấn nhóm động Quản lý Cập nhật tự động giải quyết các máy ảo được nhắm mục tiêu khi triển khai bản cập nhật. Nó có thể khớp VM1 và VM2, đồng thời tự động bao gồm các máy ảo Windows Server 2019 mới được phát hiện đáp ứng tiêu chí truy vấn tại thời điểm triển khai.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-133', 'az-500', 133, 'You have an Azure subscription that includes an Azure key vault named Vault1 and a virtual machine named VM1.  
  
VM1 is connected to a virtual network named VNet1.  
  
You need to permit access to Vault1 only from VM1.  
  
What should you do in Vault1''s Networking settings?', '[{"key":"A","text":"From the Firewalls and virtual networks tab, add the IP address of VM1."},{"key":"B","text":"From the Private endpoint connections tab, create a private endpoint for VM1."},{"key":"C","text":"From the Firewalls and virtual networks tab, add VNet1."},{"key":"D","text":"From the Firewalls and virtual networks tab, set Allow trusted Microsoft services to bypass this firewall to Yes for Vault1."}]'::jsonb, '["C"]'::jsonb, 'Các quy tắc tường lửa Azure Key Vault có thể cho phép truy cập từ các mạng ảo và mạng con đã chọn. Việc thêm VNet1 vào tường lửa của vault và các quy tắc mạng ảo sẽ cho phép lưu lượng truy cập mạng ảo của VM đồng thời từ chối lưu lượng truy cập từ các mạng không được phép. Các quy tắc mạng Key Vault IP không chấp nhận dải địa chỉ IP riêng tư, do đó địa chỉ riêng của VM không phải là quy tắc thích hợp.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-134', 'az-500', 134, 'You have an Azure subscription that contains a virtual machine named VM1.  
  
NSG1 is associated with VM1''s network interface and is configured as shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783966699511-vhbrcmwn.png)  
  
Just-in-time (JIT) VM access is enabled on VM1 with these configurations:  
  
- Management ports: 3389, 22  
- Maximum time range: 3 hours  
- Allowed source IP addresses: Any  
  
You activate the JIT rule and connect to VM1 by using SSH.  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"The RDP rule has priority over the NSG rule created by JIT.","correctAnswer":"Yes"},{"id":"2","text":"If you disconnect from VM1 within the three-hour time range, you must reactivate the JIT rule to reconnect to VM1.","correctAnswer":"No"},{"id":"3","text":"The SSH connection to VM1 disconnects automatically after three hours.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:Yes","2:No","3:No"]'::jsonb, 'Các quy tắc NSG hiện tại cho cổng được JIT bảo vệ được ưu tiên hơn quy tắc từ chối tất cả do JIT tạo ra; do đó, quy tắc cho phép RDP gửi đến ở mức ưu tiên 300 được ưu tiên. Phê duyệt JIT sẽ mở cổng SSH được yêu cầu trong khoảng thời gian truy cập được phê duyệt, do đó, kết nối mới có thể được thực hiện trong khoảng thời gian ba giờ đó mà không cần kích hoạt lại JIT. Hết hạn sẽ khôi phục trạng thái NSG trước đó, trong khi các kết nối đã thiết lập không bị gián đoạn.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783966699511-vhbrcmwn.png', 'published'),
  ('az500-135', 'az-500', 135, 'You need to deploy AKS1 so that it meets the platform protection requirements.  
  
Which four actions should you perform in sequence?  
  
More than one ordering is correct; any correct ordering receives credit.', '{"statements":[{"id":"slot1","text":"Slot 1:","correctAnswer":"C"},{"id":"slot2","text":"Slot 2:","correctAnswer":"B"},{"id":"slot3","text":"Slot 3:","correctAnswer":"A"},{"id":"slot4","text":"Slot 4:","correctAnswer":"D"}],"choices":[{"key":"A","text":"Deploy an AKS cluster."},{"key":"B","text":"Create a client application."},{"key":"C","text":"Create a server application."},{"key":"D","text":"Create an RBAC binding."},{"key":"E","text":"Create a custom RBAC role."}]}'::jsonb, '["slot1=C","slot2=B","slot3=A","slot4=D"]'::jsonb, 'Tích hợp Microsoft Entra ID kế thừa cho AKS sử dụng ứng dụng máy chủ và ứng dụng khách. Ứng dụng khách được định cấu hình để yêu cầu quyền truy cập vào ứng dụng máy chủ, vì vậy những đăng ký đó trước khi triển khai AKS. Sau khi cụm tồn tại, liên kết Kubernetes RBAC sẽ gán các quyền thích hợp. Vai trò RBAC tùy chỉnh là không cần thiết khi có sẵn vai trò phù hợp.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-136', 'az-500', 136, 'You have an Azure subscription containing an Azure SQL database named SQL1 and an Azure key vault named KeyVault1. KeyVault1 stores the keys shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954842474-nct697fa.png)  
  
You need to configure Transparent Data Encryption (TDE). TDE will use a customer-managed key for SQL1.  
  
Which keys can you use?', '[{"key":"A","text":"Key2 only"},{"key":"B","text":"Key1 only"},{"key":"C","text":"Key2 and Key3 only"},{"key":"D","text":"Key1, Key2, Key3, and Key4"},{"key":"E","text":"Key1 and Key2 only"}]'::jsonb, '["E"]'::jsonb, 'Mã hóa dữ liệu trong suốt Azure SQL Database với khóa do khách hàng quản lý hỗ trợ các khóa bảo vệ RSA hoặc RSA-HSM TDE không đối xứng có kích thước 2048 hoặc 3072 bit. Do đó, các khóa đủ điều kiện là khóa RSA 2048 bit và khóa RSA 3072 bit; khóa RSA 4096 bit và khóa đường cong elip không được hỗ trợ.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783954842474-nct697fa.png', 'published'),
  ('az500-137', 'az-500', 137, 'You have an Azure subscription named Sub1 that uses Microsoft Defender for Cloud.  
  
You have the management group hierarchy shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783960426168-nwq76duh.png)  
  
You create the definitions shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783960429014-taba3qha.png)  
  
You need to use Defender for Cloud to add a security policy.  
  
Which definitions can be used as a security policy?', '[{"key":"A","text":"Policy1 only"},{"key":"B","text":"Policy1 and Initiative1 only"},{"key":"C","text":"Initiative1 and Initiative2 only"},{"key":"D","text":"Initiative1, Initiative2, and Initiative3 only"},{"key":"E","text":"Policy1, Initiative1, Initiative2, and Initiative3"}]'::jsonb, '["C"]'::jsonb, 'Chính sách bảo mật Microsoft Defender for Cloud sử dụng các định nghĩa sáng kiến ​​Chính sách Azure. Sáng kiến1 được xác định tại Nhóm gốc đối tượng thuê, do đó, sáng kiến ​​này có sẵn để gán cho đăng ký con cháu Sub1. Sáng kiến2 được xác định trực tiếp trong Sub1 và cũng có sẵn ở đó. Chính sách1 là một định nghĩa chính sách riêng lẻ chứ không phải là một sáng kiến, và Sáng kiến3 được định nghĩa trong MG1, đây không phải là tiền thân của Sub1. Các định nghĩa Chính sách Azure chỉ có thể được chỉ định tại hoặc bên dưới vị trí định nghĩa của chúng trong hệ thống phân cấp tài nguyên.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783960426168-nwq76duh.png', 'published'),
  ('az500-138', 'az-500', 138, 'HOTSPOT —  
  
You have an Azure Active Directory (Azure AD) tenant that contains the users shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953048080-vz9iwb4p.jpg)  
  
From Azure AD Privileged Identity Management (PIM), you configure the settings for the Security Administrator role as shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953050866-gbay67ra.jpg)  
  
From PIM, you assign the Security Administrator role to the following groups:  
  
- Group1: Active assignment type, permanently assigned  
- Group2: Eligible assignment type, permanently eligible  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"User1 can only activate the Security Administrator role in five hours.","correctAnswer":"No"},{"id":"2","text":"If User2 activates the Security Administrator role, the user will be assigned the role immediately.","correctAnswer":"Yes"},{"id":"3","text":"User3 can activate the Security Administrator role.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:Yes","3:Yes"]'::jsonb, 'Nhiệm vụ đang hoạt động sẽ cấp vai trò mà không cần yêu cầu kích hoạt, do đó giới hạn thời lượng kích hoạt không áp dụng cho nhiệm vụ hoạt động vĩnh viễn của Người dùng1. Các nhiệm vụ đủ điều kiện yêu cầu kích hoạt và việc kích hoạt của Người dùng2 là ngay lập tức vì phê duyệt và tất cả các yêu cầu kích hoạt được liệt kê đều bị vô hiệu hóa. Người dùng3 là thành viên của Nhóm2 và do đó có nhiệm vụ đủ điều kiện vĩnh viễn của nhóm đó và có thể được kích hoạt.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953048080-vz9iwb4p.jpg', 'published'),
  ('az500-139', 'az-500', 139, 'You are setting up just-in-time (JIT) VM access for a Windows Server 2019 Azure virtual machine.  
  
You must give users PowerShell access to the virtual machine through JIT VM access. What should you configure?', '[]'::jsonb, '[]'::jsonb, 'Điều khiển từ xa PowerShell tới máy ảo Windows sử dụng WinRM. Trình nghe HTTPS của nó sử dụng TCP 5986. Người dùng yêu cầu quyền truy cập đúng lúc cần có quyền để bắt đầu chính sách truy cập mạng JIT; điều này có sẵn thông qua vai trò Trình đọc bảo mật, tương ứng với lựa chọn Đọc.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-140', 'az-500', 140, 'You have an Azure subscription containing the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783965522635-5ds2m1jq.png)  
  
You create an Azure DDoS Protection plan named DDoS1 in the West US Azure region.  
  
Which resources can be added to DDoS1?', '[{"key":"A","text":"VNetl1only"},{"key":"B","text":"WebApp1 only"},{"key":"C","text":"VNet1 and VNet2 only"},{"key":"D","text":"VNet1 and WebApp1 only"},{"key":"E","text":"VNet1, VNet2, and WebApp1"}]'::jsonb, '["C"]'::jsonb, 'Gói Bảo vệ Mạng Azure DDoS bảo vệ các mạng ảo và có thể được liên kết với các mạng ảo ở các vùng Azure khác nhau. Nó không thể thêm ứng dụng web Dịch vụ ứng dụng làm tài nguyên được bảo vệ. Do đó, VNet1 và VNet2 có thể được liên kết với kế hoạch.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783965522635-5ds2m1jq.png', 'published'),
  ('az500-141', 'az-500', 141, 'You have an Azure subscription and plan to create a storage account. You must use customer-managed keys to encrypt the tables in that storage account.  
  
From Azure Cloud Shell, which three cmdlets should be run in sequence?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"C"},{"id":"step2","text":"Slot 2:","correctAnswer":"E"},{"id":"step3","text":"Slot 3:","correctAnswer":"D"}],"choices":[{"key":"A","text":"New-AzStorageAccountKey"},{"key":"B","text":"New-AzStorageTable"},{"key":"C","text":"Register-AzProviderFeature"},{"key":"D","text":"New-AzStorageAccount"},{"key":"E","text":"Register-AzResourceProvider"}]}'::jsonb, '["step1=C","step2=E","step3=D"]'::jsonb, 'Khóa do khách hàng quản lý cho Azure Table storage yêu cầu đăng ký tính năng nhà cung cấp Microsoft.Storage hiện hành, sau đó đăng ký nhà cung cấp tài nguyên Microsoft.Storage. Tài khoản lưu trữ được tạo sau đó bằng `New-AzStorageAccount`. `New-AzStorageAccountKey` tạo lại khóa tài khoản, trong khi `New-AzStorageTable` tạo bảng nên cả hai đều không kích hoạt tính năng này.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-143', 'az-500', 143, 'You have an on-premises network and an Azure subscription containing the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783966700379-dhsvhh0d.png)  
  
You plan to deploy a Site-to-Site (S2S) VPN between the on-premises network and VNet1.  
  
You need to recommend an Azure VPN Gateway SKU that meets these requirements:  
  
- Supports 1-Gbps throughput  
- Minimizes costs  
  
What should you recommend?', '[{"key":"A","text":"VpnGw1"},{"key":"B","text":"VpnGw2"},{"key":"C","text":"VpnGw1AZ"},{"key":"D","text":"VpnGw2AZ"}]'::jsonb, '["B"]'::jsonb, 'VpnGw2 hỗ trợ điểm chuẩn thông lượng tổng hợp là 1 Gbps. VpnGw1 chỉ hỗ trợ 650 Mbps, trong khi VpnGw2AZ cũng hỗ trợ 1 Gbps nhưng bao gồm dự phòng vùng, điều này không cần thiết đối với các yêu cầu đã nêu và không giảm thiểu chi phí.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783966700379-dhsvhh0d.png', 'published'),
  ('az500-144', 'az-500', 144, 'You have an Azure subscription containing the storage accounts shown in the table below.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784167335470-0c5bqgfw.png)  
  
You enable Azure Defender for Storage (Microsoft Defender for Storage).  
  
Determine which storage services of storage5 are monitored by Azure Defender for Storage, and which storage accounts overall are protected by Azure Defender for Storage.', '[]'::jsonb, '[]'::jsonb, 'Bộ bảo vệ Microsoft dành cho lưu trữ phân tích phép đo từ xa Azure Blob Storage, Azure Files và Azure Data Lake Storage; Lưu trữ bảng không phải là một dịch vụ được giám sát. Trong mô hình sẵn có cũ được trình bày ở đây, biện pháp bảo vệ áp dụng cho các tài khoản BlobStorage, BlockBlobStorage cao cấp và tài khoản v2 đa năng. Do đó, tài khoản v2 có mục đích chung với không gian tên phân cấp được bật sẽ có phạm vi bao phủ của Dịch vụ tệp và Bộ lưu trữ hồ dữ liệu, đồng thời các tài khoản được bảo vệ là storage1, storage2 và storage5. Tài liệu hiện tại của Microsoft cũng lưu ý rằng gói cổ điển đã được thay thế và không áp dụng cho các gói đăng ký mới.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1784167335470-0c5bqgfw.png', 'published'),
  ('az500-145', 'az-500', 145, '$36', '{"statements":[{"id":"1","text":"Users with devices that have a compliant device claim from fabrikam.com will be granted access to the cloud apps in contoso.com.","correctAnswer":"No"},{"id":"2","text":"To minimize the number of MFA authentication prompts for the users in fabrikam.com, you must configure the Trust settings.","correctAnswer":"Yes"},{"id":"3","text":"Users with devices that have a compliant device claim from fabrikam.com can review the user properties of the users in contoso.com.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:Yes","3:Yes"]'::jsonb, 'Cần phải tin cậy các thiết bị tuân thủ từ một đối tượng thuê bên ngoài trước khi yêu cầu tuân thủ thiết bị của đối tượng thuê đó có thể đáp ứng kiểm soát cấp thiết bị tuân thủ Truy cập có điều kiện. Việc tin cậy MFA từ đối tượng thuê bên ngoài cho phép đối tượng thuê tài nguyên chấp nhận yêu cầu MFA bên ngoài và tránh những lời nhắc bổ sung không cần thiết. Cài đặt quyền truy cập toàn diện nhất của khách-người dùng cung cấp cho khách B2B quyền truy cập tương tự vào tài nguyên Microsoft Entra và dữ liệu thư mục như người dùng thành viên, cho phép họ xem xét các thuộc tính của người dùng.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-146', 'az-500', 146, 'You have an Azure subscription.  
  
You plan to create a workflow automation in Azure Security Center that automatically remediates a security vulnerability.  
  
What should you create first?', '[{"key":"A","text":"an automation account"},{"key":"B","text":"a managed identity"},{"key":"C","text":"an Azure logic app"},{"key":"D","text":"an Azure function app"},{"key":"E","text":"an alert rule"}]'::jsonb, '["C"]'::jsonb, 'Tự động hóa quy trình làm việc Microsoft Defender for Cloud chạy Ứng dụng Logic tiêu thụ khi các điều kiện kích hoạt của nó được đáp ứng. Ứng dụng Logic xác định các hành động khắc phục tự động, do đó, nó phải được tạo trước khi có thể liên kết với quá trình tự động hóa quy trình làm việc. [Workflow automation — Microsoft Learn](https://learn.microsoft.com/en-us/azure/defender-for-cloud/workflow-automations)', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-147', 'az-500', 147, 'You have an Azure virtual machine running Ubuntu 16.04-DAILY-LTS.  
  
You plan to deploy and configure an Azure Key Vault and enable Azure Disk Encryption for the virtual machine.  
  
Which of the following is **TRUE** regarding Azure Disk Encryption for a Linux VM?', '[{"key":"A","text":"It is NOT supported for basic tier VMs."},{"key":"B","text":"It is NOT supported for standard tier VMs."},{"key":"C","text":"OS drive encryption for Linux virtual machine scale sets is supported."},{"key":"D","text":"Custom image encryption is supported."}]'::jsonb, '["A"]'::jsonb, 'Azure Disk Encryption không khả dụng cho các máy ảo Linux cấp cơ bản. Nó hỗ trợ các máy ảo cấp tiêu chuẩn đủ điều kiện, nhưng không hỗ trợ mã hóa ổ đĩa hệ điều hành cho các bộ quy mô máy ảo Linux hoặc mã hóa hình ảnh tùy chỉnh trên máy ảo Linux.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-148', 'az-500', 148, 'You have an Azure subscription.  
  
You need to create and deploy an Azure Policy that meets these requirements:  
  
- When a new virtual machine is deployed, automatically install a custom security extension.  
- Trigger an autogenerated remediation task for non-compliant virtual machines to install the extension.  
  
What should the policy include?', '[]'::jsonb, '[]'::jsonb, 'DeployIfNotExists đánh giá xem tài nguyên liên quan được chỉ định có tồn tại hay không và triển khai nó khi không có, hỗ trợ triển khai tiện ích mở rộng máy ảo. Nhiệm vụ khắc phục các chính sách DeployIfNotExists sử dụng managed identity của nhiệm vụ chính sách; chỉ định nó Người đóng góp cung cấp cho nó các quyền quản lý tài nguyên cần thiết để triển khai tiện ích mở rộng.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-149', 'az-500', 149, 'You have an Azure subscription that includes a user named User1 and an Azure Container Registry named ContReg1.  
  
You enable content trust for ContReg1.  
  
You need to ensure that User1 can create trusted images in ContReg1. The solution must follow the principle of least privilege.  
  
Which two roles should you assign to User1? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"AcrQuarantineReader"},{"key":"B","text":"Contributor"},{"key":"C","text":"AcrPush"},{"key":"D","text":"AcrImageSigner"},{"key":"E","text":"AcrQuarantineWriter"}]'::jsonb, '["C","D"]'::jsonb, 'AcrPush cấp quyền mặt phẳng dữ liệu để đẩy hình ảnh vùng chứa vào sổ đăng ký. AcrImageSigner cấp các quyền Docker Content Trust cần thiết để ký hình ảnh và tạo siêu dữ liệu hình ảnh đáng tin cậy. Cùng với nhau, các vai trò này cho phép tạo hình ảnh đáng tin cậy mà không cần có quyền quản lý rộng hơn do Contributor cấp.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-150', 'az-500', 150, 'You have an Azure Sentinel workspace containing an Azure Active Directory (Azure AD) connector, an Azure Log Analytics query named Query1, and a playbook named Playbook1.  
  
Query1 returns a subset of security events generated by Azure AD.  
  
You plan to create an Azure Sentinel analytics rule based on Query1 that triggers Playbook1. You need to ensure that Playbook1 can be added to the new rule.  
  
What should you do?', '[]'::jsonb, '[]'::jsonb, 'Quy tắc phân tích Microsoft Sentinel dựa trên truy vấn là quy tắc truy vấn được lên lịch. Playbook chỉ có thể được liên kết với tự động hóa Sentinel khi quy trình làm việc của nó bao gồm trình kích hoạt Microsoft Sentinel hiện hành, cho phép nó bắt đầu từ cảnh báo hoặc sự cố do quy tắc tạo ra.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-151', 'az-500', 151, 'You have an Azure subscription that contains the virtual networks shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783966878344-qrqqpr2c.png)  
  
NSG1 rules limit internet access from Subnet3.  
  
The subscription includes the function apps shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783966881144-gpvnkenv.png)  
  
Virtual network integration uses its default settings.  
  
You need to configure network access for App1 and App2 to meet these requirements:  
  
- Deny inbound access to App1 from Subnet1 and permit inbound access from Subnet2.  
- Deny outbound access from App2 to the internet.  
  
What should you do for each requirement?', '[]'::jsonb, '[]'::jsonb, 'Hạn chế truy cập Dịch vụ ứng dụng là các quy tắc tường lửa gửi đến và có thể hạn chế quyền truy cập của các mạng con mạng ảo đã chọn, cho phép Subnet2 trong khi từ chối Subnet1. Tích hợp mạng ảo kiểm soát kết nối ra bên ngoài; nó không làm cho ứng dụng có thể truy cập được ở chế độ riêng tư. Route All gửi lưu lượng truy cập internet của App2 thông qua VNet2 thay vì trực tiếp từ Dịch vụ ứng dụng, do đó quy tắc NSG1 hiện có trên Subnet3 có thể chặn lưu lượng đó.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783966878344-qrqqpr2c.png', 'published'),
  ('az500-152', 'az-500', 152, 'You have an Azure subscription named Sub1 that contains two resource groups named RGnet and NET.  
  
You have the Azure Policy definition shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783965701982-g5zaqyrl.png)  
  
You assign the policy definition to Sub1 and NET.  
  
You plan to deploy the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783965705765-hp6vaswg.png)  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"You can deploy VNet1 to RGnet.","correctAnswer":"Yes"},{"id":"2","text":"You can deploy ASG1 to NET.","correctAnswer":"Yes"},{"id":"3","text":"You can deploy storage1 to RGnet.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:Yes","2:Yes","3:No"]'::jsonb, 'Hiệu ứng từ chối chỉ được kích hoạt đối với các nhóm tài nguyên có tên chứa "net" và các loại tài nguyên bên ngoài không gian tên Microsoft.Network. VNet1 và ASG1 là tài nguyên của Microsoft.Network nên được phép. storage1 là tài nguyên Microsoft.Storage được triển khai cho RGnet nên chính sách sẽ từ chối tài nguyên đó.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783965701982-g5zaqyrl.png', 'published'),
  ('az500-153', 'az-500', 153, 'You are testing an Azure Kubernetes Service (AKS) cluster. The cluster configuration is shown in the exhibit. (Click the Exhibit tab.)  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783966702319-vga1h7yy.png)  
  
You plan to deploy the cluster to production and disable HTTP application routing.  
  
You need to implement application routing that provides reverse proxying and TLS termination for AKS services by using a single IP address.  
  
What should you do?', '[{"key":"A","text":"Create an AKS Ingress controller."},{"key":"B","text":"Create an Azure Standard Load Balancer."},{"key":"C","text":"Install the container network interface (CNI) plug-in."},{"key":"D","text":"Create an Azure Basic Load Balancer."}]'::jsonb, '["A"]'::jsonb, 'Bộ điều khiển xâm nhập AKS cung cấp tính năng định tuyến proxy ngược Lớp 7 và chấm dứt TLS cho các dịch vụ Kubernetes. Quy tắc xâm nhập cho phép nhiều dịch vụ được hiển thị thông qua một địa chỉ IP duy nhất. Azure Load Balancer là dịch vụ Lớp 4 và không cung cấp khả năng định tuyến HTTP/S hoặc kết thúc TLS.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783966702319-vga1h7yy.png', 'published'),
  ('az500-154', 'az-500', 154, 'You have an Azure subscription that contains the users shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953084084-pis1p5wd.png)  
  
Which user can enable Azure AD Privileged Identity Management (PIM)?', '[{"key":"A","text":"User2 and User3 only"},{"key":"B","text":"User1 and User2 only"},{"key":"C","text":"User2 only"},{"key":"D","text":"User1 only"}]'::jsonb, '["C"]'::jsonb, 'Quản trị viên toàn cầu có thể bật Quản trị viên danh tính đặc quyền Azure AD và quản trị viên kích hoạt phải sử dụng xác thực đa yếu tố. Vai trò Chủ sở hữu đăng ký và vai trò Quản trị viên xác thực không cấp khả năng cấp thư mục này; Quản trị viên toàn cầu không bật MFA sẽ không đáp ứng yêu cầu MFA.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953084084-pis1p5wd.png', 'published'),
  ('az500-155', 'az-500', 155, 'You have an Azure Active Directory (Azure AD) tenant containing the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954561646-6l2rbb8f.png)  
  
User2 owns Group2. The user and group settings for App1 are configured as shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954564195-bwckptqo.jpg)  
  
You enable self-service application access for App1 as shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954567808-plzkh4si.jpg)  
  
User3 is configured to approve access to App1.  
  
After self-service application access is enabled for App1, identify who is configured as the Group2 owner and who is configured as the App1 users.', '[]'::jsonb, '[]'::jsonb, 'Việc gán ứng dụng tự phục vụ sẽ thêm những người yêu cầu được phê duyệt vào nhóm đã chọn và gán nhóm đó cho ứng dụng doanh nghiệp. Người phê duyệt được chọn sẽ trở thành chủ sở hữu của nhóm tự phục vụ đó, vì vậy Group2 có Người dùng2 và Người dùng3 làm chủ sở hữu. Nhiệm vụ App1 hiện tại của Group1 vẫn được giữ nguyên và Group2 được thêm vào; Cả Người dùng1 và Người dùng3 đều không nhận được sự phân bổ App1 trực tiếp chỉ từ các cài đặt này.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783954561646-6l2rbb8f.png', 'published'),
  ('az500-156', 'az-500', 156, 'Consider a Microsoft Entra ID (Azure AD) tenant with dynamic security groups, Group1 and Group2, whose membership rules are based on each user''s City attribute. Select the membership that results for each group.', '[]'::jsonb, '[]'::jsonb, 'Quy tắc thành viên động của Group1 sử dụng toán tử -contains (ví dụ: user.city -contains "ON"), thực hiện tìm kiếm chuỗi con không phân biệt chữ hoa chữ thường. Bởi vì chuỗi con "bật" xuất hiện ở đâu đó ở mỗi thành phố Montreal, MONTREAL, London và Ontario bất kể chữ cái viết hoa chữ cái nào, cả bốn người dùng đều đáp ứng quy tắc và trở thành thành viên của Nhóm1. Quy tắc của Group2 sử dụng toán tử -match với biểu thức chính quy yêu cầu giá trị thành phố kết thúc bằng chuỗi chữ thường "on" (ví dụ: user.city -match "on$"). Các kết quả khớp biểu thức chính quy trong quy tắc thành viên động phân biệt chữ hoa chữ thường đối với mẫu đã cho và chỉ "London" kết thúc bằng các ký tự chính xác "on"; Montreal kết thúc bằng "eal", MONTREAL kết thúc bằng "AL" và Ontario kết thúc bằng "io". Do đó, chỉ Người dùng3 (London) đủ điều kiện tham gia Nhóm2. Điều này minh họa sự khác biệt giữa toán tử -contains không phân biệt chữ hoa chữ thường và hành vi biểu thức chính quy phân biệt chữ hoa chữ thường của -match trong quy tắc nhóm động Microsoft Entra ID.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-157', 'az-500', 157, 'You have an Azure subscription named Sub1 associated with an Azure Active Directory (Azure AD) tenant named contoso.com.  
  
You plan to implement an application consisting of the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783952067140-5wk3wzhw.png)  
  
Users will authenticate by using their Azure AD user accounts and will access the Cosmos DB account by using resource tokens.  
  
Identify the task to implement in each resource.', '[]'::jsonb, '[]'::jsonb, 'Mã thông báo tài nguyên Azure Cosmos DB được cấp cho các quyền liên quan đến người dùng cơ sở dữ liệu Cosmos DB. Ứng dụng web xác thực người dùng thông qua Azure AD và chuyển tiếp mã thông báo tài nguyên thích hợp để cho phép người dùng truy cập trong phạm vi giới hạn vào Cosmos DB.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783952067140-5wk3wzhw.png', 'published'),
  ('az500-158', 'az-500', 158, 'HOTSPOT –  
  
You have an Azure subscription containing a storage account named storage1 and several virtual machines. The storage account and the virtual machines are in the same Azure region. The virtual-machine network configurations are shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953185398-pk2q99ne.png)  
  
The virtual-network subnets have the service endpoints shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953187554-hzvewvvn.png)  
  
You configure these Firewall and virtual network settings for storage1:  
  
- Allow access from: Selected networks  
- Virtual networks: VNET3\Subnet3  
- Firewall IP address range: 52.233.129.0/24  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"VM1 can connect to storage1.","correctAnswer":"No"},{"id":"2","text":"VM2 can connect to storage1.","correctAnswer":"No"},{"id":"3","text":"VM3 can connect to storage1.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:No","3:Yes"]'::jsonb, 'Quy tắc mạng ảo lưu trữ Azure yêu cầu Azure Storage service endpoint và việc thêm mạng con làm quy tắc mạng ảo lưu trữ sẽ kích hoạt điểm cuối đó. Do đó, VNET3/Subnet3 được phép có thể truy cập vào storage1. Điểm cuối Microsoft.Storage của VM1 khiến lưu lượng truy cập trong cùng khu vực sử dụng danh tính mạng con, nhưng mạng con của nó không được phép. VM2 không thể dựa vào quy tắc mạng IP vì quy tắc IP không áp dụng cho các dịch vụ Azure cùng khu vực.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953185398-pk2q99ne.png', 'published'),
  ('az500-159', 'az-500', 159, 'HOTSPOT –  
  
You have the Azure virtual networks listed in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953186807-3zu09up8.png)  
  
You have the Azure virtual machines listed in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953189117-ux6xqt5a.png)  
  
The firewalls on every virtual machine permit ping traffic. NSG1 is configured as shown in the following exhibits.  
  
Inbound security rules –  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953191556-jkbdt2ve.png)  
  
Outbound security rules –  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953194652-wjdr4vak.png)  
  
For each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"VM1 can ping VM3 successfully.","correctAnswer":"No"},{"id":"2","text":"VM2 can ping VM4 successfully.","correctAnswer":"No"},{"id":"3","text":"VM3 can be accessed by using Remote Desktop from the internet.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:No","3:Yes"]'::jsonb, 'Tham chiếu nhóm bảo mật ứng dụng trong quy tắc NSG chỉ áp dụng cho các địa chỉ IP riêng trong cùng một mạng ảo; chúng không khớp với máy ảo trên mạng ngang hàng ảo. Do đó, lưu lượng VM1 đến VM3 bị từ chối theo quy tắc gửi đến từ chối tất cả mức độ ưu tiên 160. VM2 không thể truy cập VM4 vì VNET2 và VNET4 không được kết nối. VM3 có địa chỉ IP công cộng và quy tắc ưu tiên 110 cho phép RDP trên cổng 3389 từ bất kỳ nguồn nào.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953186807-3zu09up8.png', 'published'),
  ('az500-160', 'az-500', 160, 'You have an Azure subscription named Sub1 that is associated with an Azure Active Directory (Azure AD) tenant named contoso.com.  
  
You are assigned the Global administrator role for the tenant and are responsible for managing Azure Security Center settings.  
  
You need to create a custom sensitivity label.  
  
What should you do?', '[{"key":"A","text":"Create a custom sensitive information type."},{"key":"B","text":"Elevate access for global administrators in Azure AD."},{"key":"C","text":"Upgrade the pricing tier of the Security Center to Standard."},{"key":"D","text":"Enable integration with Microsoft Cloud App Security."}]'::jsonb, '["A"]'::jsonb, 'Loại thông tin nhạy cảm tùy chỉnh cung cấp quy tắc phân loại dành riêng cho tổ chức được sử dụng với nhãn nhạy cảm. Các loại thông tin nhạy cảm tích hợp không thể chỉnh sửa được; các loại tùy chỉnh có thể được tạo hoặc sao chép từ các loại tích hợp sẵn và được điều chỉnh theo tiêu chí phát hiện được yêu cầu. Độ cao của Azure RBAC, giá của Bộ bảo vệ cho đám mây và tích hợp Bảo mật ứng dụng đám mây không phải là điều kiện tiên quyết để xác định quy tắc phân loại đó.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-161', 'az-500', 161, 'You need to make sure that the security operations requirements can be met. What should you do first?', '[{"key":"A","text":"Turn on Auto Provisioning in Security Center."},{"key":"B","text":"Integrate Security Center and Microsoft Cloud App Security."},{"key":"C","text":"Upgrade the pricing tier of Security Center to Standard."},{"key":"D","text":"Modify the Security Center workspace configuration."}]'::jsonb, '["C"]'::jsonb, 'Cấp tiêu chuẩn của Microsoft Defender for Cloud (trước đây là Trung tâm bảo mật Azure) cung cấp các khả năng bảo mật nâng cao, trong khi cấp miễn phí chỉ cung cấp các tính năng bảo mật cơ bản. Do đó, việc kích hoạt bậc Tiêu chuẩn là điều kiện tiên quyết trước khi định cấu hình các hoạt động tích hợp nâng cao, thu thập dữ liệu hoặc cung cấp tác nhân tự động.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-162', 'az-500', 162, 'You have an Azure Active Directory (Azure AD) tenant containing a user named Admin1. Admin1 has the Application developer role.  
  
You buy a cloud app named App1 and register App1 in Azure AD.  
  
Admin1 reports that the option to enable token encryption for App1 is not available.  
  
You need to make sure that Admin1 can enable token encryption for App1 in the Azure portal.  
  
What should you do?', '[{"key":"A","text":"Upload a certificate for App1."},{"key":"B","text":"Modify the API permissions of App1."},{"key":"C","text":"Add App1 as an enterprise application."},{"key":"D","text":"Assign Admin1 the Cloud application administrator role."}]'::jsonb, '["A"]'::jsonb, 'Microsoft Entra ID mã hóa mã thông báo bằng cách sử dụng khóa chung từ chứng chỉ đã đăng ký với ứng dụng. Việc tải lên chứng chỉ App1 sẽ cung cấp khóa mã hóa để có thể bật mã hóa mã thông báo.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-163', 'az-500', 163, 'You need to deploy Microsoft Antimalware to meet the platform-protection requirements. What should you do?', '[]'::jsonb, '[]'::jsonb, 'Hiệu ứng DeployIfNotExists có thể triển khai một tài nguyên cần thiết khi nó bị thiếu, chẳng hạn như phần mở rộng Microsoft Antimalware VM. Việc gán chính sách bằng cách sử dụng DeployIfNotExists yêu cầu managed identity với các quyền được chỉ định bởi các nhiệm vụ vai trò của định nghĩa chính sách để Chính sách Azure có thể thực hiện việc triển khai.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-164', 'az-500', 164, 'You have an Azure subscription that contains an Azure key vault and an Azure Storage account. The key vault contains customer-managed keys, and the storage account is configured to use the customer-managed keys stored in the key vault.  
  
You plan to store data in Azure by using the following services:  
  
- Azure Files  
- Azure Blob storage  
- Azure Table storage  
- Azure Queue storage  
  
Which two services support data encryption by using the keys stored in the key vault? Each correct answer presents a complete solution.  
  
**NOTE:** Each correct selection is worth one point.', '[{"key":"A","text":"Table storage"},{"key":"B","text":"Azure Files"},{"key":"C","text":"Blob storage"},{"key":"D","text":"Queue storage"}]'::jsonb, '["B","C"]'::jsonb, 'Khi các khóa do khách hàng quản lý được đặt cấu hình cho tài khoản Azure Storage, bộ nhớ Blob và dữ liệu Azure Files sẽ tự động được mã hóa bằng các khóa đó. Việc lưu trữ bảng và hàng đợi không được tự động bao gồm trừ khi tài khoản lưu trữ được tạo với sự hỗ trợ khóa mã hóa trong phạm vi tài khoản cho các dịch vụ đó.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-165', 'az-500', 165, 'You have an Azure subscription containing the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954795275-m7gifpox.png)  
  
Transparent Data Encryption (TDE) is disabled on SQL1. You assign policies to the resource groups as shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954801418-1ereu2hd.png)  
  
You plan to deploy Azure SQL databases by using an Azure Resource Manager (ARM) template. The databases will be configured as shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954805078-3979e7tt.png)  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"SQL1 will have TDE enabled automatically.","correctAnswer":"No"},{"id":"2","text":"The deployment of SQL2 will fail.","correctAnswer":"Yes"},{"id":"3","text":"SQL3 will be deployed and marked as noncompliant.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:Yes","3:No"]'::jsonb, 'DeployIfNotExists đánh dấu các tài nguyên không tuân thủ hiện có là không tuân thủ; việc khắc phục yêu cầu một tác vụ khắc phục nên nó không tự động kích hoạt TDE trên SQL1. Chính sách Từ chối ngăn chặn việc tạo hoặc cập nhật tài nguyên vi phạm chính sách, do đó việc triển khai SQL2 TDE bị vô hiệu hóa trong RG2 không thành công. Chính sách Từ chối tương tự chặn SQL3 trong RG1 trước khi chính sách Kiểm tra chỉ có thể ghi lại sự không tuân thủ.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783954795275-m7gifpox.png', 'published'),
  ('az500-166', 'az-500', 166, 'You have an Azure subscription that includes a user named Admin1 and a virtual machine named VM1. VM1 runs Windows Server 2019 and was deployed using an Azure Resource Manager template. VM1 is a member of the backend pool of a public Azure Basic Load Balancer.  
  
Admin1 reports that VM1 appears as **Unsupported** on the Just in time VM access blade of Azure Security Center.  
  
You need to ensure that Admin1 can enable just in time (JIT) VM access for VM1.  
  
What should you do?', '[{"key":"A","text":"Create and configure a network security group (NSG)."},{"key":"B","text":"Create and configure an additional public IP address for VM1."},{"key":"C","text":"Replace the Basic Load Balancer with an Azure Standard Load Balancer."},{"key":"D","text":"Assign an Azure Active Directory Premium Plan 1 license to Admin1."}]'::jsonb, '["A"]'::jsonb, 'Quyền truy cập VM đúng lúc trong Microsoft Defender for Cloud (Trung tâm bảo mật Azure) hoạt động bằng cách tự động tạo NSG cho phép các quy tắc mở cổng quản lý trong một thời gian giới hạn. Máy ảo hiển thị là Không được hỗ trợ trong lưỡi JIT khi nó thiếu nhóm bảo mật mạng liên quan trên NIC hoặc mạng con của nó, vì không có gì để JIT sửa đổi. Việc tạo và định cấu hình NSG cho VM1 giúp nó đủ điều kiện truy cập JIT VM. SKU Cân bằng tải, các địa chỉ IP công cộng bổ sung và giấy phép Azure AD Premium không ảnh hưởng đến khả năng đủ điều kiện JIT cho máy ảo.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-167', 'az-500', 167, 'You have three on-premises servers—Server1, Server2, and Server3—running Windows Server 2019. Server1 and Server2 are on the internal network, while Server3 is on the perimeter network. All of the servers can access Azure.  
  
From Azure Sentinel, you install a Windows firewall data connector.  
  
You need to collect Microsoft Defender Firewall data from the servers for Azure Sentinel.  
  
What should you do?', '[{"key":"A","text":"Create an event subscription from Server1, Server2, and Server3."},{"key":"B","text":"Install the On-premises data gateway on each server."},{"key":"C","text":"Install the Microsoft Monitoring Agent on each server."},{"key":"D","text":"Install the Microsoft Monitoring Agent on Server1 and Server2. Install the On-premises data gateway on Server3."}]'::jsonb, '["C"]'::jsonb, 'Trình kết nối dữ liệu Tường lửa Windows cũ sẽ thu thập dữ liệu Tường lửa của Bộ bảo vệ Microsoft cục bộ của mỗi máy chủ thông qua Tác nhân Giám sát Microsoft. Vì mọi máy chủ đều có kết nối Azure nên tác nhân phải được cài đặt trên Server1, Server2 và Server3; không cần có cổng dữ liệu tại chỗ và đăng ký sự kiện Windows.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-168', 'az-500', 168, 'You have an Azure subscription that uses Microsoft Defender for Cloud.  
  
You need to add a custom security recommendation to Defender for Cloud. The recommendation must receive the subscription’s custom severity rating.  
  
What should you create?', '[{"key":"A","text":"an exemption"},{"key":"B","text":"an initiative definition"},{"key":"C","text":"a policy definition"},{"key":"D","text":"an assignment"}]'::jsonb, '["C"]'::jsonb, 'Định nghĩa Chính sách Azure tùy chỉnh sẽ tạo logic đề xuất và giữ các thuộc tính Defender for Cloud `metadata.securityCenter`, bao gồm giá trị `Severity` tùy chỉnh. Một sáng kiến ​​có thể nhóm định nghĩa chính sách đó thành một tiêu chuẩn tùy chỉnh, nhưng mức độ nghiêm trọng thuộc về định nghĩa chính sách.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-169', 'az-500', 169, 'You have a Microsoft Entra tenant containing the users shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783965524731-leqkehv0.png)  
  
You configure the Temporary Access Pass settings as shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783965528468-5ffi9f8c.png)  
  
You add the Temporary Access Pass authentication method to Admin2.  
  
For each statement, select **Yes** if it is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"Admin1 can view the Temporary Access Pass of Admin2.","correctAnswer":"Yes"},{"id":"2","text":"Admin2 can add the Temporary Access Pass authentication method to User1.","correctAnswer":"Yes"},{"id":"3","text":"Admin2 can add the Temporary Access Pass authentication method to Admin1.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:Yes","2:Yes","3:Yes"]'::jsonb, 'Quản trị viên toàn cầu có thể quản lý tất cả các khía cạnh của Microsoft Entra ID, vì vậy Quản trị viên1 có thể xem Thẻ truy cập tạm thời của Quản trị viên2. Quản trị viên xác thực đặc quyền có thể tạo, xóa và xem Thẻ truy cập tạm thời cho cả quản trị viên và thành viên, ngoại trừ chính họ. Thẻ truy cập tạm thời có thể được tạo cho bất kỳ người dùng nào; Tư cách thành viên trong chính sách phương thức xác thực được nhắm mục tiêu sẽ kiểm soát xem người dùng đó có thể sử dụng thẻ để đăng nhập hay không. Do đó, Admin2 có thể thêm thẻ cho cả Người dùng1 và Quản trị viên1, trong khi Người dùng1 sẽ không thể sử dụng thẻ đó vì Người dùng1 nằm ngoài Nhóm1.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783965524731-leqkehv0.png', 'published'),
  ('az500-171', 'az-500', 171, 'You have an Azure resource group that includes 100 virtual machines.  
  
You have an initiative named Initiative1 that contains multiple policy definitions. Initiative1 is assigned to the resource group.  
  
You need to determine which resources do **not** comply with the policy definitions.  
  
What should you do?', '[{"key":"A","text":"From Azure Security Center, view the Regulatory compliance assessment."},{"key":"B","text":"From the Policy blade of the Azure Active Directory admin center, select Compliance."},{"key":"C","text":"From Azure Security Center, view the Secure Score."},{"key":"D","text":"From the Policy blade of the Azure Active Directory admin center, select Assignments."}]'::jsonb, '["B"]'::jsonb, 'Chế độ xem Tuân thủ của Chính sách Azure hiển thị kết quả tuân thủ cho các nhiệm vụ chính sách và sáng kiến, bao gồm cả các tài nguyên không tuân thủ được đánh giá theo sáng kiến ​​được giao. Chế độ xem Bài tập quản lý các bài tập thay vì báo cáo việc tuân thủ theo từng nguồn lực.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-172', 'az-500', 172, 'You have an Azure subscription.  
  
You create an Azure Firewall policy with the rules shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783964135786-u21bvey7.png)  
  
In what order should the rules be processed?', '{"statements":[{"id":"1","text":"1","correctAnswer":"B"},{"id":"2","text":"2","correctAnswer":"D"},{"id":"3","text":"3","correctAnswer":"C"},{"id":"4","text":"4","correctAnswer":"E"},{"id":"5","text":"5","correctAnswer":"A"}],"choices":[{"key":"A","text":"Rule1"},{"key":"B","text":"Rule2"},{"key":"C","text":"Rule3"},{"key":"D","text":"Rule4"},{"key":"E","text":"Rule5"}]}'::jsonb, '["1=B","2=D","3=C","4=E","5=A"]'::jsonb, 'Chính sách Azure Firewall đánh giá các loại bộ sưu tập quy tắc theo thứ tự cố định sau: DNAT (NAT), mạng, sau đó là ứng dụng. Bộ sưu tập quy tắc cùng loại được đánh giá theo giá trị ưu tiên tăng dần. Do đó, các quy tắc NAT Rule2 (200) và Rule4 (400) đặt trước các quy tắc mạng Rule3 (300) và Rule5 (500), tiếp theo là quy tắc ứng dụng Rule1 (100).', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783964135786-u21bvey7.png', 'published'),
  ('az500-173', 'az-500', 173, 'You have an Azure subscription linked to an Azure AD tenant that contains the resources displayed in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783960435780-ovj2jxwb.png)  
  
Which resources can be assigned the Contributor role for VM1?', '[{"key":"A","text":"Managed1 and App1 only"},{"key":"B","text":"Group1 and Managed1 only"},{"key":"C","text":"Group1, Managed1, and VM2 only"},{"key":"D","text":"Group1, Managed1, VM1, and App1 only"}]'::jsonb, '["D"]'::jsonb, 'Vai trò Azure RBAC có thể được chỉ định ở phạm vi tài nguyên cho các nhóm, nguyên tắc dịch vụ (bao gồm cả ứng dụng doanh nghiệp) và danh tính được quản lý. system-assigned managed identity là nguyên tắc bảo mật nên VM1 có thể nhận nhiệm vụ thông qua danh tính của nó. Group1, Managed1, VM1 và App1 là các nguyên tắc hợp lệ; VM2 có no managed identity được chỉ định và chỉ là tài nguyên máy ảo.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783960435780-ovj2jxwb.png', 'published'),
  ('az500-174', 'az-500', 174, 'You have an Azure subscription that includes an Azure key vault.  
  
You create a storage account named storage1.  
  
You plan to store data in the following storage1 services:  
  
- Azure Files  
- Azure Blob storage  
- Azure Table storage  
- Azure Queue storage  
  
For which two services can you configure data encryption by using keys stored in the key vault? Each correct answer presents a complete solution.  
  
**NOTE:** Each correct selection is worth one point.', '[{"key":"A","text":"Blob storage"},{"key":"B","text":"Table storage"},{"key":"C","text":"Queue storage"},{"key":"D","text":"Azure Files"}]'::jsonb, '["A","D"]'::jsonb, 'Các khóa do khách hàng quản lý của Azure Storage được lưu trữ trong Azure Key Vault sẽ bảo vệ bộ nhớ Blob và Azure Files khi được định cấu hình cho tài khoản lưu trữ. Lưu trữ bảng và hàng đợi yêu cầu tài khoản lưu trữ phải được tạo bằng khóa mã hóa trong phạm vi tài khoản trước khi chúng có thể sử dụng khóa do khách hàng quản lý.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-175', 'az-500', 175, 'You have an Azure subscription containing the virtual machines shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783960410820-jcjqts0t.png)  
  
Which computers support file integrity monitoring?', '[{"key":"A","text":"Computer2 only"},{"key":"B","text":"Computer1 and Computer2 only"},{"key":"C","text":"Computer2 and Computer3 only"},{"key":"D","text":"Computer1, Computer2, and Computer3"}]'::jsonb, '["C"]'::jsonb, 'Giám sát tính toàn vẹn tệp Microsoft Defender for Cloud hỗ trợ khối lượng công việc của Windows Server và các bản phân phối máy chủ Linux được hỗ trợ, bao gồm Windows Server 2022 và SUSE Linux Enterprise Server. Windows 10 không được đưa vào làm khối lượng công việc máy chủ được hỗ trợ cho trường hợp này.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783960410820-jcjqts0t.png', 'published'),
  ('az500-176', 'az-500', 176, 'You collect events from Azure virtual machines in an Azure Log Analytics workspace.  
  
You plan to create alerts based on those collected events. You need to determine which Azure services can be used to create the alerts.  
  
Which two services should you identify? Each correct answer provides a complete solution.  
  
**NOTE:** Each correct selection is worth one point.', '[{"key":"A","text":"Azure Monitor"},{"key":"B","text":"Azure Security Center"},{"key":"C","text":"Azure Analysis Services"},{"key":"D","text":"Azure Sentinel"},{"key":"E","text":"Azure Advisor"}]'::jsonb, '["A","D"]'::jsonb, 'Azure Monitor tạo quy tắc cảnh báo nhật ký từ các truy vấn Log Analytics và kích hoạt cảnh báo khi kết quả truy vấn đáp ứng điều kiện đã định cấu hình. Azure Sentinel, hiện được gọi là Microsoft Sentinel, sử dụng các quy tắc phân tích để giám sát dữ liệu nhật ký và tạo cảnh báo cho các sự kiện bảo mật được phát hiện.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-177', 'az-500', 177, 'You have an Azure subscription linked to an Azure Active Directory (Azure AD) tenant.  
  
From the Azure portal, you register an enterprise application. Which additional resource is created in Azure AD?', '[{"key":"A","text":"a service principal"},{"key":"B","text":"an X.509 certificate"},{"key":"C","text":"a managed identity"},{"key":"D","text":"a user account"}]'::jsonb, '["A"]'::jsonb, 'Ứng dụng doanh nghiệp là đại diện cho đối tượng thuê cục bộ của một ứng dụng và được triển khai dưới dạng service principal. service principal cung cấp danh tính của ứng dụng và xác định quyền truy cập của ứng dụng đó trong đối tượng thuê Azure AD.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-178', 'az-500', 178, 'You have an Azure subscription containing a virtual network named VNet1. VNet1 includes the subnets shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783966886001-98nrv2ws.png)  
  
The subscription contains the virtual machines shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783966890286-43q5e053.png)  
  
VM3 hosts a service that listens for connections on port 8080.  
  
For VM1, you configure just-in-time (JIT) VM access as shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783966893932-rfi5fdeg.png)  
  
For each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"You can establish a Remote Desktop connection from VM1 to VM3 for a maximum of three hours.","correctAnswer":"No"},{"id":"2","text":"You can establish a Remote Desktop connection from VM2 to VM1 after requesting access.","correctAnswer":"No"},{"id":"3","text":"You can establish a Remote Desktop connection from VM3 to VM1 without requesting access.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:No","3:No"]'::jsonb, 'JIT bảo vệ các cổng vào đã được định cấu hình trên VM1 và chỉ mở chúng sau khi có yêu cầu truy cập trong khoảng thời gian được định cấu hình. Giới hạn RDP ba giờ không hạn chế kết nối ra ngoài của VM1 với VM3. Mạng con 172.16.0.0/24 của VM2 không phải là phạm vi nguồn RDP được phép và VM3 vẫn phải yêu cầu quyền truy cập mặc dù 192.168.10.0/24 được cho phép.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783966886001-98nrv2ws.png', 'published'),
  ('az500-180', 'az-500', 180, 'You intend to configure Azure Disk Encryption for VM4.  
  
Which key vault can store the encryption key?', '[{"key":"A","text":"KeyVault1"},{"key":"B","text":"KeyVault2"},{"key":"C","text":"KeyVault3"}]'::jsonb, '["A"]'::jsonb, 'Azure Disk Encryption yêu cầu kho khóa quản lý các khóa mã hóa và bí mật của nó phải nằm trong cùng khu vực Azure và đăng ký với máy ảo. KeyVault1 là vault đủ điều kiện cho VM4. [Microsoft Learn](https://learn.microsoft.com/en-us/azure/virtual-machines/linux/disk-encryption-overview)', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-181', 'az-500', 181, 'You have an Azure subscription that includes 100 virtual machines and has Azure Defender enabled.  
  
You plan to run a vulnerability scan on every virtual machine.  
  
You need to deploy the vulnerability scanner extension to the virtual machines by using an Azure Resource Manager template.  
  
Which two values should you specify in the code to automate deployment of the extension to the virtual machines? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"the user-assigned managed identity"},{"key":"B","text":"the workspace ID"},{"key":"C","text":"the Azure Active Directory (Azure AD) ID"},{"key":"D","text":"the Key Vault managed storage account key"},{"key":"E","text":"the system-assigned managed identity"},{"key":"F","text":"the primary shared key"}]'::jsonb, '["B","F"]'::jsonb, 'Tiện ích mở rộng trình quét lỗ hổng Qualys tích hợp sử dụng ID không gian làm việc Log Analytics để xác định không gian làm việc của nó và khóa chia sẻ chính của không gian làm việc làm cài đặt xác thực được bảo vệ. Các giá trị này cho phép tiện ích mở rộng đăng ký và hoạt động cho các máy ảo.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-182', 'az-500', 182, 'You have an Azure subscription.  
  
You plan to create a custom role-based access control (RBAC) role that grants permission to read the Azure Storage account.  
  
Which RBAC role-definition property should you configure?', '[{"key":"A","text":"NotActions []"},{"key":"B","text":"DataActions []"},{"key":"C","text":"AssignableScopes []"},{"key":"D","text":"Actions []"}]'::jsonb, '["D"]'::jsonb, 'Quyền truy cập đọc tài khoản Azure Storage là một quyền trên mặt phẳng điều khiển, thuộc mảng `Actions` của định nghĩa vai trò Azure RBAC tùy chỉnh. `DataActions` dành cho các hoạt động trên mặt phẳng dữ liệu trên dữ liệu trong một tài nguyên và `AssignableScopes` chỉ xác định nơi có thể chỉ định vai trò.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-185', 'az-500', 185, 'You have 10 virtual machines on one subnet that uses a single network security group (NSG).  
  
You need to log network traffic to an Azure Storage account.  
  
What should you do?', '[{"key":"A","text":"Install the Network Performance Monitor solution."},{"key":"B","text":"Create an Azure Log Analytics workspace."},{"key":"C","text":"Enable diagnostic logging for the NSG."},{"key":"D","text":"Enable NSG flow logs."}]'::jsonb, '["D"]'::jsonb, 'Nhật ký luồng NSG nắm bắt thông tin về lưu lượng IP truyền qua nhóm bảo mật mạng, bao gồm các luồng vào và ra cũng như quyết định quy tắc được áp dụng, đồng thời gửi dữ liệu luồng đến tài khoản Azure Storage.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-186', 'az-500', 186, 'You have an Azure Container Registry named Registry1. You add the following role assignments for Registry1.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953714627-fn6b3e1d.png)  
  
Which users can upload images to Registry1, and which users can download images from Registry1?', '[]'::jsonb, '[]'::jsonb, 'AcrPush cho phép đẩy và kéo hình ảnh vùng chứa, trong khi AcrPull chỉ cho phép kéo. AcrImageSigner cho phép các thao tác đẩy và kéo đối với các hình ảnh đáng tin cậy khi tính năng tin cậy nội dung của Sổ đăng ký vùng chứa Azure được bật. Vai trò Cộng tác viên bao gồm các quyền đăng ký cần thiết để tải lên và tải xuống hình ảnh. Do đó, User1, User3 và User4 có thể tải hình ảnh lên; cả bốn người dùng đều có thể tải xuống hình ảnh.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953714627-fn6b3e1d.png', 'published'),
  ('az500-187', 'az-500', 187, 'You have a Microsoft Sentinel deployment.  
  
You need to connect a third-party security solution that will send Common Event Format (CEF)-formatted messages.  
  
What should the solution include?', '[]'::jsonb, '[]'::jsonb, 'Thông báo CEF là các bản ghi có định dạng Syslog. Do đó, trình kết nối Microsoft Sentinel CEF/Syslog sử dụng trình chuyển tiếp Syslog dựa trên Linux, gửi các sự kiện đã thu thập đến không gian làm việc Log Analytics thông qua Tác nhân Azure Monitor. Trong từ ngữ của trình kết nối cũ được thể hiện bằng các lựa chọn này, đây là tác nhân Azure Log Analytics; tác nhân Phụ thuộc và tác nhân Máy được kết nối không thu thập và chuyển tiếp nhật ký CEF.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-188', 'az-500', 188, 'You have a network security group (NSG) associated with an Azure subnet. You run `Get-AzNetworkSecurityRuleConfig` and receive the output in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783951830285-uaxr9622.jpg)  
  
Use the drop-down menus to choose the answer that completes each statement based on the information shown.', '[]'::jsonb, '[]'::jsonb, 'Các quy tắc NSG được đánh giá theo thứ tự ưu tiên tăng dần và quá trình xử lý dừng ở quy tắc khớp đầu tiên. Quy tắc gửi đi ưu tiên-104 cho phép lưu lượng truy cập TCP 443 đến thẻ dịch vụ `Storage.EastUS2` trước khi quy tắc ưu tiên-105 từ chối tất cả lưu lượng truy cập khác đến thẻ `Storage` rộng hơn. Quy tắc FTP gửi đến cho phép rõ ràng cổng TCP 21 từ `1.2.3.4/32` đến `10.0.0.10/32`.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783951830285-uaxr9622.jpg', 'published'),
  ('az500-189', 'az-500', 189, 'You have an Azure Active Directory (Azure AD) tenant named Contoso.com and an Azure Kubernetes Service (AKS) cluster named AKS1.  
  
You find that AKS1 cannot be accessed by using accounts from Contoso.com.  
  
You need to ensure that accounts from Contoso.com can access AKS1. The solution must minimize administrative effort.  
  
What should you do first?', '[{"key":"A","text":"From Azure, recreate AKS1."},{"key":"B","text":"From AKS1, upgrade the version of Kubernetes."},{"key":"C","text":"From Azure AD, implement Azure AD Premium P2"},{"key":"D","text":"From Azure AD, configure the User settings."}]'::jsonb, '["D"]'::jsonb, 'Microsoft Entra ID Cài đặt người dùng kiểm soát xem người dùng có thể đăng ký ứng dụng hay không. Việc kích hoạt hoặc đặt cấu hình khả năng ở cấp độ đối tượng thuê cho phép đăng ký ứng dụng cần thiết để truy cập AKS tích hợp Azure AD mà không yêu cầu nâng cấp Kubernetes, giải trí cụm hoặc giấy phép Premium P2.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-190', 'az-500', 190, 'You have an Azure subscription and plan to implement Azure DDoS Protection. The solution must meet these requirements:  
  
- Provide access to DDoS rapid-response support during active attacks.  
- Protect Basic SKU public IP addresses.  
  
Recommend the DDoS Protection type for each requirement. A protection type may be used once, more than once, or not at all.', '{"statements":[{"id":"rapid_response","text":"Provide access to DDoS rapid response support during active attacks:","correctAnswer":"C"},{"id":"basic_sku","text":"Protect Basic SKU public IP addresses:","correctAnswer":"C"}],"choices":[{"key":"A","text":"DDoS infrastructure protection"},{"key":"B","text":"DDoS IP Protection"},{"key":"C","text":"DDoS Network Protection"}]}'::jsonb, '["rapid_response=C","basic_sku=C"]'::jsonb, 'Bảo vệ mạng DDoS bao gồm quyền truy cập vào Phản hồi nhanh DDoS trong các cuộc tấn công và hỗ trợ các địa chỉ IP công cộng cấp Cơ bản. Bảo vệ IP DDoS không cung cấp hỗ trợ Phản hồi nhanh hoặc bảo vệ IP công cộng cấp Cơ bản; bảo vệ cơ sở hạ tầng là dịch vụ cơ bản được bao gồm chứ không phải là gói nâng cao cung cấp các khả năng này.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-191', 'az-500', 191, 'You have an Azure subscription containing three storage accounts, an Azure SQL managed instance named SQL1, and three Azure SQL databases. The storage accounts are configured as follows.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954282351-af5eibth.png)  
  
SQL1 has these settings:  
  
- Auditing: On  
- Audit log destination: storage1  
  
The Azure SQL databases are configured as follows.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954286477-3937lfhb.png)  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"Audit events for DB1 are written to storage1.","correctAnswer":"Yes"},{"id":"2","text":"Audit events for DB2 are written to storage1 and storage2.","correctAnswer":"Yes"},{"id":"3","text":"Storage3 can be used as an audit log destination for DB3.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:Yes","2:Yes","3:No"]'::jsonb, 'Kiểm tra phiên bản được quản lý SQL hoạt động ở cấp phiên bản/máy chủ và kiểm tra cơ sở dữ liệu của nó đến đích Azure Blob storage đã định cấu hình. Một chính sách kiểm tra cấp cơ sở dữ liệu riêng biệt có thể chạy cùng với việc kiểm tra cấp độ máy chủ, do đó DB2 ghi vào cả hai đích được cấu hình. Premium StorageV2 không được hỗ trợ làm đích lưu trữ nhật ký kiểm tra trong trường hợp này.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783954282351-af5eibth.png', 'published'),
  ('az500-192', 'az-500', 192, 'You have an Azure subscription that includes the virtual machines shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953372224-jicx334j.png)  
  
In Azure Security Center, you enable Auto Provisioning.  
  
You deploy the virtual machines shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953375851-ex5xb70g.png)  
  
On which virtual machines is the Log Analytics Agent installed?', '[{"key":"A","text":"VM3 only"},{"key":"B","text":"VM1 and VM3 only"},{"key":"C","text":"VM3 and VM4 only"},{"key":"D","text":"VM1, VM2, VM3, and VM4"}]'::jsonb, '["D"]'::jsonb, 'Tính năng tự động cung cấp kế thừa của Trung tâm Bảo mật Azure triển khai tác nhân Log Analytics cho tất cả Azure virtual machines được hỗ trợ trong đăng ký, bao gồm cả các máy hiện có và máy được tạo sau đó. Cả Windows Server 2016 và Ubuntu Server 18.04 LTS đều được hỗ trợ, do đó tác nhân được cài đặt trên cả bốn máy ảo.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953372224-jicx334j.png', 'published'),
  ('az500-193', 'az-500', 193, 'Your company has an Azure Active Directory (Azure AD) tenant named contoso.com.  
  
The company is developing an application named App1. App1 will run as a service on a server running Windows Server 2016. App1 will authenticate to contoso.com and use Microsoft Graph to read directory data.  
  
You must delegate the minimum required permissions to App1.  
  
Which three actions should you perform, in order, from the Azure portal?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"E"},{"id":"step2","text":"Slot 2:","correctAnswer":"D"},{"id":"step3","text":"Slot 3:","correctAnswer":"A"}],"choices":[{"key":"A","text":"Grant permissions"},{"key":"B","text":"Add a delegated permission."},{"key":"C","text":"Configure Azure AD Application Proxy."},{"key":"D","text":"Add an application permission."},{"key":"E","text":"Create an app registration."}]}'::jsonb, '["step1=E","step2=D","step3=A"]'::jsonb, 'Quyền của ứng dụng chỉ dành cho quyền truy cập của ứng dụng mà không cần người dùng đăng nhập. Do đó, dịch vụ đọc dữ liệu thư mục thông qua Microsoft Graph cần có ứng dụng đã đăng ký, quyền ứng dụng có đặc quyền tối thiểu bắt buộc và sự đồng ý của quản trị viên để cấp quyền đó cho đối tượng thuê. [Get access without a user](https://learn.microsoft.com/en-us/graph/auth-v2-service)', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-194', 'az-500', 194, 'HOTSPOT -  
  
You have an Azure subscription named Subscription1 that contains a resource group named RG1 and a user named User1. User1 has the Owner role assigned for RG1.  
  
You create an Azure Blueprints definition named Blueprint1 that includes a resource group named RG2, as shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954305753-uew5gama.jpg)  
  
You assign Blueprint1 to Subscription1 using these settings:  
  
- Lock assignment: Read Only  
- Managed Identity: System assigned  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"A locking mode of Read Only will be assigned to RG1.","correctAnswer":"No"},{"id":"2","text":"User1 can add tags to RG2.","correctAnswer":"Yes"},{"id":"3","text":"You can remove User1 from the Tag Contributor role for RG2.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:Yes","3:No"]'::jsonb, 'Khóa Blueprint chỉ áp dụng cho các tài nguyên được triển khai bởi các tạo phẩm Blueprint, vì vậy RG1 không bị khóa. Khóa Chỉ đọc trên cấu phần phần mềm nhóm tài nguyên cho phép thay đổi thẻ và Người dùng1 có vai trò Người đóng góp thẻ trên RG2. Người đóng góp thẻ không cấp quyền xóa các phân công vai trò và việc phân công từ chối chỉ đọc bản thiết kế chi tiết cũng bảo vệ cấu hình tạo phẩm được chỉ định.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783954305753-uew5gama.jpg', 'published'),
  ('az500-196', 'az-500', 196, 'You have an Azure subscription containing the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783957447255-ktwqm9li.png)  
  
VM1 and VM2 both connect to VNET1 and are configured to use NSG1.  
  
You need to ensure that DB1 can be accessed only by VM1 and VM2.  
  
What should you do?', '[{"key":"A","text":"For NSG1, configure a rule that has a service tag."},{"key":"B","text":"Add the IP address range of VNET1 to the Firewall settings of DB1."},{"key":"C","text":"Create an application security group."},{"key":"D","text":"Configure DB1 to allow access from only VNET1."}]'::jsonb, '["D"]'::jsonb, 'Azure Cosmos DB hỗ trợ các quy tắc truy cập mạng ảo hạn chế quyền truy cập tài khoản vào các mạng con mạng ảo đã chọn bằng cách sử dụng Azure Cosmos DB service endpoint. Việc định cấu hình DB1 để chỉ cho phép truy cập từ VNET1 sẽ hạn chế các nguồn mạng được phép đối với mạng ảo đó, trong khi NSG và cài đặt nhóm bảo mật ứng dụng không kiểm soát quyền truy cập vào chính tài khoản Cosmos DB. Quy tắc tường lửa Cosmos DB IP không được chứa địa chỉ IP riêng tư từ dải địa chỉ mạng ảo.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783957447255-ktwqm9li.png', 'published'),
  ('az500-198', 'az-500', 198, 'You are assessing how application security groups affect network communication between the virtual machines in Sub2.  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"From VM1, you can successfully ping the private IP address of VM4.","correctAnswer":"No"},{"id":"2","text":"From VM2, you can successfully ping the private IP address of VM4.","correctAnswer":"Yes"},{"id":"3","text":"From VM1, you can connect to the web server on VM4.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:Yes","3:Yes"]'::jsonb, 'Các quy tắc NSG đánh giá giao thức cũng như nguồn và đích. Quy tắc chỉ cho phép TCP đối với ASG1 cho phép VM1 truy cập dịch vụ web của VM4 nhưng không cho phép ping ICMP. Quy tắc cho phép ASG2 áp dụng cho mọi giao thức, vì vậy VM2 có thể ping VM4.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-199', 'az-500', 199, 'You need to set up an access review. It must be assigned to a new collection of reviews and be reviewed by the resource owners.  
  
Which three actions should you perform, in order?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"A"},{"id":"step2","text":"Slot 2:","correctAnswer":"D"},{"id":"step3","text":"Slot 3:","correctAnswer":"E"}],"choices":[{"key":"A","text":"Create an access review program."},{"key":"B","text":"Set Reviewers to Selected users."},{"key":"C","text":"Create an access review audit."},{"key":"D","text":"Create an access review control."},{"key":"E","text":"Set Reviewers to Group owners."},{"key":"F","text":"Set Reviewers to Members."}]}'::jsonb, '["step1=A","step2=D","step3=E"]'::jsonb, 'Chương trình đánh giá quyền truy cập là bộ sưu tập chứa các đánh giá quyền truy cập. Sau đó, kiểm soát xem xét quyền truy cập sẽ được tạo trong chương trình đó. Đối với tài nguyên nhóm, chủ sở hữu tài nguyên là chủ sở hữu nhóm, vì vậy chủ sở hữu nhóm phải được chọn làm người đánh giá.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-200', 'az-500', 200, 'You need to make sure that User2 can implement PIM.  
  
What should you do first?', '[{"key":"A","text":"Assign User2 the Global administrator role."},{"key":"B","text":"Configure authentication methods for contoso.com."},{"key":"C","text":"Configure the identity secure score for contoso.com."},{"key":"D","text":"Enable multi-factor authentication (MFA) for User2."}]'::jsonb, '["A"]'::jsonb, 'Quản trị viên toàn cầu có quyền cấp thư mục để bắt đầu thiết lập PIM và chỉ định vai trò quản trị PIM. Các phương thức xác thực, điểm bảo mật danh tính và cấu hình MFA không cấp các quyền cần thiết để triển khai PIM.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-202', 'az-500', 202, 'You are implementing an Azure Application Gateway web application firewall (WAF) named WAF1.  
  
You have the following Bicep code snippet.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783964135510-6i0bfyf0.png)  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"A request to the backend pool from IP address 10.1.1.5 is allowed.","correctAnswer":"Yes"},{"id":"2","text":"Incoming requests attempting file path attacks are blocked.","correctAnswer":"No"},{"id":"3","text":"WAF1 allows a 50-MB file to be uploaded.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:Yes","2:No","3:Yes"]'::jsonb, 'Điều kiện khớp IP bị phủ định kích hoạt cho 10.1.1.5 vì nó nằm ngoài 10.1.10.0/24. Chính sách WAF Chế độ phát hiện ghi lại quy tắc Chặn tùy chỉnh được kích hoạt thay vì chặn yêu cầu, do đó, điều này được cho phép. Chế độ phát hiện cũng ghi nhật ký thay vì chặn các hoạt động phát hiện quy tắc được quản lý, do đó các cuộc tấn công vào đường dẫn tệp không bị chặn. Giới hạn kiểm tra nội dung yêu cầu và giới hạn tải tệp lên là các cài đặt riêng biệt; Giới hạn tải lên tệp hạn chế no được định cấu hình và chế độ Phát hiện không chặn tải lên.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783964135510-6i0bfyf0.png', 'published'),
  ('az500-203', 'az-500', 203, 'You suspect that users are trying to sign in to resources for which they lack access.  
  
Create an Azure Log Analytics query that identifies failed user sign-in attempts during the last three days. The results must show only users with more than five failed sign-in attempts.  
  
How should you configure the query?', '[]'::jsonb, '[]'::jsonb, 'ID sự kiện bảo mật Windows 4625 ghi lại lần đăng nhập không thành công. Việc lọc AccountType thành User giới hạn kết quả đối với tài khoản người dùng, trong khi count() tổng hợp các bản ghi đăng nhập không thành công cho mỗi tài khoản để truy vấn chỉ có thể giữ lại số lượng lớn hơn năm.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-205', 'az-500', 205, 'You have an Azure subscription containing the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783961073408-pe726vbf.png)  
  
VNet1 is connected to a remote site by a Site-to-Site (S2S) VPN that uses forced tunneling.  
  
VNet1 includes the subnets shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783961077936-1os8sges.png)  
  
The SQL subnet hosts SQL1.  
  
For each statement, select **Yes** when it is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"To restrict inbound traffic to SQL1, you must modify an access rule in NSG1.","correctAnswer":"Yes"},{"id":"2","text":"To enable VM1 to access storage1 by using the Microsoft backbone network, you must enable a service endpoint on the Default subnet.","correctAnswer":"Yes"},{"id":"3","text":"You can deploy an App Service Environment to the Default subnet.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:Yes","2:Yes","3:No"]'::jsonb, 'NSG1 được áp dụng cho mạng con SQL, do đó các quy tắc gửi đến của nó sẽ chi phối quyền truy cập vào SQL1. Microsoft.Storage service endpoint được định cấu hình trên mạng con nguồn và cung cấp tuyến đường trục Azure trực tiếp ghi đè các tuyến đường hầm bắt buộc cho tiền tố dịch vụ. Môi trường dịch vụ ứng dụng yêu cầu một mạng con trống, chuyên dụng, trong khi mạng con mặc định đã chứa VM1.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783961073408-pe726vbf.png', 'published'),
  ('az500-207', 'az-500', 207, 'You have an Azure subscription that contains an Azure Firewall Standard instance named AzFW1.  
  
You need to determine whether AzFW1 can use these features:  
  
- TLS inspection  
- Threat intelligence  
- The network intrusion detection and prevention systems (IDPS)  
  
What can you use?', '[{"key":"A","text":"TLS inspection only"},{"key":"B","text":"threat intelligence only"},{"key":"C","text":"TLS inspection and the IDPS only"},{"key":"D","text":"threat intelligence and the IDPS only"},{"key":"E","text":"TLS inspection, threat intelligence, and the IDPS"}]'::jsonb, '["B"]'::jsonb, 'Azure Firewall Standard hỗ trợ lọc thông tin về mối đe dọa, bao gồm các chế độ cảnh báo và từ chối. Kiểm tra TLS và IDPS mạng chỉ khả dụng với SKU cao cấp.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-208', 'az-500', 208, 'An Azure subscription contains an Azure Data Lake Storage Gen2 account named `storage1`.  
  
You deploy an Azure Synapse Analytics workspace named `synapsews1` to a managed virtual network.  
  
You need to enable `synapsews1` to access `storage1`.  
  
What should you configure?', '[{"key":"A","text":"peering"},{"key":"B","text":"a private endpoint"},{"key":"C","text":"a network security group (NSG)"},{"key":"D","text":"a virtual network gateway"}]'::jsonb, '["B"]'::jsonb, 'Không gian làm việc Azure Synapse sử dụng mạng ảo được quản lý sẽ truy cập riêng tư vào tài khoản Azure Data Lake Storage Gen2 bằng cách sử dụng private endpoint được quản lý. Kết nối điểm cuối phải được phê duyệt trên tài khoản lưu trữ để thiết lập private link.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-209', 'az-500', 209, 'You have an Azure AD tenant containing the users shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783964525299-qhv4dja6.png)  
  
You must ensure that the users are unable to create app passwords. The solution must allow User1 to continue using the Mail and Calendar app.  
  
What should you do?', '[{"key":"A","text":"Assign User1 the Authentication Policy Administrator role."},{"key":"B","text":"Enable Azure AD Password Protection."},{"key":"C","text":"Configure a multi-factor authentication (MFA) registration policy."},{"key":"D","text":"Create a new app registration."},{"key":"E","text":"From multi-factor authentication, configure the service settings."}]'::jsonb, '["E"]'::jsonb, 'Cài đặt dịch vụ MFA bao gồm tùy chọn toàn bộ đối tượng thuê cho phép người dùng tạo mật khẩu ứng dụng cho các ứng dụng không có trình duyệt. Việc tắt tùy chọn đó sẽ ngăn việc tạo mật khẩu ứng dụng mới trong khi mật khẩu ứng dụng hiện có tiếp tục hoạt động, cho phép truy cập liên tục vào ứng dụng đã được định cấu hình bằng mật khẩu đó.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783964525299-qhv4dja6.png', 'published'),
  ('az500-211', 'az-500', 211, 'You have an Azure subscription containing 100 virtual machines, with Azure Diagnostics enabled on every virtual machine. You are planning how to monitor Azure services in the subscription.  
  
You need to retrieve these details:  
  
- Identify the user who deleted a virtual machine three weeks ago.  
- Query the security events for a virtual machine running Windows Server 2016.  
  
What should you use in Azure Monitor? Each configuration setting may be used once, more than once, or not at all.', '{"statements":[{"id":"vm-deletion-user","text":"Identify the user who deleted a virtual machine three weeks ago:","correctAnswer":"A"},{"id":"vm-security-events","text":"Query the security events of a virtual machine that runs Windows Server 2016:","correctAnswer":"B"}],"choices":[{"key":"A","text":"Activity log"},{"key":"B","text":"Logs"},{"key":"C","text":"Metrics"},{"key":"D","text":"Service Health"}]}'::jsonb, '["vm-deletion-user=A","vm-security-events=B"]'::jsonb, 'Nhật ký hoạt động Azure ghi lại các hoạt động tạo, cập nhật và xóa trên mặt phẳng điều khiển Azure và lưu giữ các sự kiện trong 90 ngày, cho phép xác định người dùng xóa ba tuần sau đó. Các sự kiện bảo mật của Windows được thu thập dưới dạng dữ liệu sự kiện Windows trong không gian làm việc Log Analytics và được truy vấn bằng cách sử dụng Nhật ký Azure Monitor.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-212', 'az-500', 212, 'You have an Azure Active Directory (Azure AD) tenant that includes a user named User1.  
  
You plan to enable passwordless authentication for the tenant.  
  
You need to ensure that User1 can enable the combined registration experience. The solution must follow the principle of least privilege.  
  
Which role should you assign to User1?', '[{"key":"A","text":"Security administrator"},{"key":"B","text":"Privileged role administrator"},{"key":"C","text":"Authentication administrator"},{"key":"D","text":"Global administrator"}]'::jsonb, '["D"]'::jsonb, 'Kích hoạt đăng ký kết hợp là cấu hình tính năng người dùng trên toàn đối tượng thuê, không chỉ đơn thuần là thao tác để quản lý các phương thức xác thực của người dùng. Quản trị viên xác thực có thể xem, đặt và đặt lại các phương thức xác thực cho người dùng không phải quản trị viên, trong khi Quản trị viên có vai trò đặc quyền quản lý việc phân công vai trò. Trong số các vai trò có sẵn, Quản trị viên toàn cầu có các quyền quản trị bắt buộc đối với toàn bộ đối tượng thuê. Tham chiếu vai trò hiện tại của Microsoft Entra cũng phân biệt phạm vi phương thức xác thực có giới hạn của Quản trị viên xác thực với quyền quản lý tất cả các khía cạnh của Microsoft Entra ID của Quản trị viên toàn cầu.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-215', 'az-500', 215, 'Solution: Create an AKS Ingress controller.  
  
Does this solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["B"]'::jsonb, 'Bộ điều khiển xâm nhập AKS định tuyến lưu lượng truy cập web đến các dịch vụ trong cụm AKS; nó không gắn các bộ chứa Docker độc lập trên máy ảo vào mạng ảo. Plug-in Azure CNI được sử dụng để cung cấp kết nối mạng ảo cho các bộ chứa trên máy chủ Linux Docker độc lập, cho phép lưu lượng truy cập của chúng bắt nguồn thông qua mạng con nơi các điểm cuối dịch vụ Azure Storage và Azure SQL được định cấu hình.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-216', 'az-500', 216, 'Solution: Install the container network interface (CNI) plug-in.  
  
Does this solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["A"]'::jsonb, 'Plug-in Azure Virtual Network CNI cung cấp các bộ chứa Docker với tệp đính kèm mạng ảo trực tiếp và kết nối IP mạng ảo. Do đó, các bộ chứa có thể truy cập Azure Storage và Azure SQL Database được bảo vệ bởi các điểm cuối dịch vụ được định cấu hình trên mạng con.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-217', 'az-500', 217, 'Solution: You create an application security group.  
  
Does the solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["B"]'::jsonb, 'Nhóm bảo mật ứng dụng chỉ cung cấp một nhóm logic các giao diện mạng có thể được tham chiếu bởi các quy tắc của nhóm bảo mật mạng. Nó không định cấu hình mạng bộ chứa Docker hoặc cho phép bộ chứa truy cập vào Azure Storage và Azure SQL thông qua mạng ảo service endpoint.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-218', 'az-500', 218, 'You have been assigned to ensure that you can modify operating system security configurations through Azure Security Center.  
  
To accomplish this goal, you must have the appropriate Azure Security Center pricing tier in place. Which of the following pricing tiers is required?', '[{"key":"A","text":"Advanced"},{"key":"B","text":"Premium"},{"key":"C","text":"Standard"},{"key":"D","text":"Free"}]'::jsonb, '["C"]'::jsonb, 'Bậc Tiêu chuẩn của Trung tâm Bảo mật Azure cung cấp các khả năng bảo mật nâng cao, trong khi Bậc Miễn phí chỉ cung cấp các tính năng bảo mật cơ bản. Do đó, việc sửa đổi cấu hình bảo mật của hệ điều hành yêu cầu tầng Tiêu chuẩn.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-219', 'az-500', 219, 'You are investigating a security issue involving an Azure Storage account.  
  
You enable Azure Storage Analytics logs and archive them to a storage account.  
  
What should you use to retrieve the diagnostic logs?', '[{"key":"A","text":"Azure Monitor"},{"key":"B","text":"SQL query editor in Azure"},{"key":"C","text":"File Explorer in Windows"},{"key":"D","text":"Azure Storage Explorer"}]'::jsonb, '["D"]'::jsonb, 'Nhật ký chẩn đoán Azure Storage Analytics được lưu dưới dạng các đốm màu trong vùng chứa `$logs` của tài khoản lưu trữ. Azure Storage Explorer có thể duyệt tài khoản lưu trữ và truy xuất hoặc xem các đốm màu nhật ký đó.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-220', 'az-500', 220, 'You have an Azure subscription containing the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783957573066-7xqh3nsl.png)  
  
You perform these tasks:  
  
- Create a managed identity named Managed1.  
- Create a Microsoft 365 group named Group1.  
- Register an enterprise application named App1.  
- Enable a system-assigned managed identity for VM1.  
  
You need to determine which service principals were created and which identities can be assigned the Reader role for RG1.  
  
What should you identify?', '[]'::jsonb, '[]'::jsonb, 'Mỗi user-assigned managed identity, system-assigned managed identity và đăng ký ứng dụng đều có Microsoft Entra service principal. Nhóm Microsoft 365 không tạo một nhóm. Các vai trò Azure RBAC như Trình đọc có thể được chỉ định ở phạm vi nhóm tài nguyên cho một nhóm, service principal hoặc managed identity; do đó cả bốn danh tính được đặt tên đều có thể nhận Reader trên RG1.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783957573066-7xqh3nsl.png', 'published'),
  ('az500-221', 'az-500', 221, 'You have an Azure AD tenant containing the identities shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783957442710-mvlgfxlv.png)  
  
You plan to deploy Azure AD Identity Protection.  
  
What is the maximum number of user risk policies that you can configure?', '[{"key":"A","text":"1"},{"key":"B","text":"90"},{"key":"C","text":"200"},{"key":"D","text":"265"},{"key":"E","text":"1000"}]'::jsonb, '["A"]'::jsonb, 'Azure AD Identity Protection hỗ trợ một chính sách rủi ro người dùng kế thừa trên toàn bộ đối tượng thuê. Nó có thể nhắm mục tiêu người dùng và nhóm, nhưng số lượng danh tính của đối tượng thuê không thay đổi giới hạn chính sách đó. Hướng dẫn hiện tại của Microsoft xác định chính sách rủi ro Người dùng cũ dưới dạng một loại chính sách duy nhất và khuyến nghị di chuyển chính sách đó sang Truy cập có điều kiện trước khi ngừng hoạt động.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783957442710-mvlgfxlv.png', 'published'),
  ('az500-223', 'az-500', 223, 'You have a file named File1.yaml with the following contents.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953179778-8wkj8oft.png)  
  
You create an Azure container instance named container1 by using File1.yaml.  
  
You need to determine where you can access the values of Variable1 and Variable2.  
  
What should you identify?', '[]'::jsonb, '[]'::jsonb, '`value` tạo một biến môi trường tiêu chuẩn có sẵn trong vùng chứa và hiển thị trong thuộc tính vùng chứa cổng thông tin Azure. `secureValue` tạo một biến môi trường an toàn có giá trị chỉ khả dụng trong vùng chứa; cổng hiển thị tên của nó nhưng không hiển thị giá trị của nó.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953179778-8wkj8oft.png', 'published'),
  ('az500-224', 'az-500', 224, 'You have an Azure AD tenant containing the groups shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783964134043-5azpw2hj.png)  
  
You assign licenses to the groups as shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783964137019-wphny84e.png)  
  
On May 1, you delete Group1, Group2, and Group3.  
  
For each statement, select **Yes** if it is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"On May 3, you can restore Group1.","correctAnswer":"Yes"},{"id":"2","text":"On May 15, you can restore Group2.","correctAnswer":"Yes"},{"id":"3","text":"On June 3, you can restore Group3.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:Yes","2:Yes","3:No"]'::jsonb, 'Microsoft Entra giữ lại các nhóm Microsoft 365 và nhóm bảo mật đám mây đã xóa trong 30 ngày, sau đó chúng không thể khôi phục được. Do đó, Group1 có thể phục hồi vào ngày 3 tháng 5 và Group2 vào ngày 15 tháng 5; Ngày 3 tháng 6 nằm ngoài thời hạn 30 ngày nên Nhóm 3 không thể phục hồi được. Việc chuyển nhượng giấy phép không làm thay đổi khoảng thời gian lưu giữ này.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783964134043-5azpw2hj.png', 'published'),
  ('az500-225', 'az-500', 225, 'You have an Azure SQL Database server called SQL1.  
  
For SQL1, you enable Azure Defender for SQL to detect every threat-detection type.  
  
Which action will Azure Defender for SQL identify as a threat?', '[{"key":"A","text":"A user updates more than 50 percent of the records in a table."},{"key":"B","text":"A user attempts to sign in as SELECT * FROM table1."},{"key":"C","text":"A user is added to the db_owner database role."},{"key":"D","text":"A user deletes more than 100 records from the same table."}]'::jsonb, '["B"]'::jsonb, 'Bộ bảo vệ Microsoft dành cho Cơ sở dữ liệu SQL Azure phát hiện các cuộc tấn công tiêm nhiễm SQL tiềm ẩn, bao gồm các câu lệnh SQL không đúng định dạng hoặc độc hại được tạo thông qua đầu vào ứng dụng. Việc sử dụng `SELECT * FROM table1` làm nỗ lực đăng nhập là biểu hiện của tải trọng chèn SQL.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-226', 'az-500', 226, 'HOTSPOT -  
  
You have an Azure subscription containing an Azure key vault named Vault1. On January 1, 2019, Vault1 contains the following secrets. All dates use the mm/dd/yy format.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954345513-y2zd6cmm.png)  
  
When is each secret available for an application to use?', '[]'::jsonb, '[]'::jsonb, 'Azure Key Vault chỉ cho phép truy xuất bí mật khi nó được bật và hoạt động xảy ra trong cửa sổ chưa hết hạn và chưa được định cấu hình của nó. Mật khẩu1 bị vô hiệu hóa nên không bao giờ sử dụng được. Mật khẩu2 được kích hoạt và có hiệu lực từ ngày 1 tháng 3 năm 2019 cho đến khi hết hạn vào ngày 1 tháng 5 năm 2019.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783954345513-y2zd6cmm.png', 'published'),
  ('az500-227', 'az-500', 227, 'You have an Azure subscription that includes several Azure SQL databases and an Azure Sentinel workspace.  
  
You need to create a saved query in the workspace to identify events reported by Azure Defender for SQL.  
  
What should you do?', '[{"key":"A","text":"From Azure CLI, run the Get-AzOperationalInsightsWorkspace cmdlet."},{"key":"B","text":"From the Azure SQL Database query editor, create a Transact-SQL query."},{"key":"C","text":"From the Azure Sentinel workspace, create a Kusto query language query."},{"key":"D","text":"From Microsoft SQL Server Management Studio (SSMS), create a Transact-SQL query."}]'::jsonb, '["C"]'::jsonb, 'Microsoft Sentinel sử dụng Ngôn ngữ truy vấn Kusto (KQL) để truy vấn và phân tích dữ liệu trong không gian làm việc Log Analytics của nó. Các sự kiện được Azure Defender cho SQL báo cáo được truy vấn từ không gian làm việc đó bằng truy vấn KQL đã lưu.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-228', 'az-500', 228, 'You have an Azure subscription called Sub1. Sub1 includes a virtual network named VNet1, which has one subnet called Subnet1.  
  
Subnet1 hosts an Azure virtual machine named VM1 that runs Ubuntu Server 18.04.  
  
You create a Microsoft.Storage service endpoint in Subnet1.  
  
You need to ensure that, when Docker containers are deployed to VM1, the containers can access Azure Storage resources through the service endpoint.  
  
What should you do on VM1 before deploying the container?', '[{"key":"A","text":"Create an application security group and a network security group (NSG)."},{"key":"B","text":"Edit the docker-compose.yml file."},{"key":"C","text":"Install the container network interface (CNI) plug-in."}]'::jsonb, '["C"]'::jsonb, 'Trình cắm Azure CNI gắn các bộ chứa Docker vào Azure virtual network và gán cho chúng địa chỉ IP mạng ảo. Điều này cho phép lưu lượng vùng chứa sử dụng các khả năng mạng có sẵn cho mạng con, bao gồm cả Microsoft.Storage service endpoint của nó.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-229', 'az-500', 229, 'You have an on-premises datacenter.  
  
You have an Azure subscription that contains a virtual machine named VM1. VM1 connects to a virtual network named VNet1. VNet1 connects to the on-premises datacenter by using a Site-to-Site (S2S) VPN.  
  
You plan to create an Azure storage account named storage1 and deploy an Azure web app named App1.  
  
You must ensure that network communication to each resource meets these requirements:  
  
- Connections to App1 are allowed only from corporate network NAT addresses.  
- Connections from VNet1 to storage1 use the Microsoft backbone network.  
- The solution minimizes costs.  
  
What should you configure for each resource? Each component may be used once, more than once, or not at all.', '{"statements":[{"id":"storage1","text":"storage1:","correctAnswer":"B"},{"id":"app1","text":"App1:","correctAnswer":"C"}],"choices":[{"key":"A","text":"A private endpoint"},{"key":"B","text":"A service endpoint"},{"key":"C","text":"An access restriction rule"},{"key":"D","text":"Azure Private Link"}]}'::jsonb, '["storage1=B","app1=C"]'::jsonb, 'Quy tắc hạn chế quyền truy cập Dịch vụ ứng dụng chỉ có thể cho phép App1 từ dải địa chỉ IP công cộng NAT của công ty. Mạng ảo service endpoint dành cho Bộ lưu trữ Azure duy trì lưu lượng truy cập VNet1-to-storage1 trên đường trục của Microsoft và tránh chi phí bổ sung cho điểm cuối riêng tư/Private Link.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-230', 'az-500', 230, 'You create a new Azure subscription.  
  
You need to ensure that you can create custom alert rules in Azure Security Center.  
  
Which two actions should you take? Each correct answer is part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Onboard Azure Active Directory (Azure AD) Identity Protection."},{"key":"B","text":"Create an Azure Storage account."},{"key":"C","text":"Implement Azure Advisor recommendations."},{"key":"D","text":"Create an Azure Log Analytics workspace."},{"key":"E","text":"Upgrade the pricing tier of Security Center to Standard."}]'::jsonb, '["D","E"]'::jsonb, 'Quy tắc cảnh báo tùy chỉnh của Trung tâm bảo mật sử dụng các truy vấn về dữ liệu trong không gian làm việc Azure Log Analytics, do đó cần có không gian làm việc. Tính năng này yêu cầu cấp Tiêu chuẩn của Trung tâm Bảo mật phải trả phí; bậc miễn phí không cung cấp khả năng cần thiết.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-232', 'az-500', 232, 'You have 10 on-premises servers running Windows Server 2019.  
  
You plan to implement Azure Security Center vulnerability scanning for these servers.  
  
What should you install on the servers first?', '[{"key":"A","text":"the Azure Arc enabled servers Connected Machine agent"},{"key":"B","text":"the Microsoft Defender for Endpoint agent"},{"key":"C","text":"the Security Events data connector in Azure Sentinel"},{"key":"D","text":"the Microsoft Endpoint Configuration Manager client"}]'::jsonb, '["A"]'::jsonb, 'Đối với các máy chủ tại chỗ, quá trình quét lỗ hổng của Trung tâm Bảo mật Azure yêu cầu các máy trước tiên phải được tích hợp vào Azure Arc. Cài đặt máy chủ hỗ trợ Azure Arc Tác nhân Máy được kết nối đăng ký mỗi máy chủ dưới dạng máy hỗ trợ Azure Arc, cho phép triển khai và quản lý tiện ích mở rộng đánh giá lỗ hổng từ Azure.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-234', 'az-500', 234, 'You have an Azure subscription linked to an Azure AD tenant that contains the virtual machines in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783960421157-809hvioa.png)  
  
The virtual-network subnets have the service endpoints shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783960424411-6merymzm.png)  
  
You create the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783960427268-ol0qgai7.png)  
  
For each statement below, select **Yes** if it is true; otherwise, select **No**.', '{"statements":[{"id":"1","text":"Connections from VM1 to storage1 always use IP address 10.1.1.5.","correctAnswer":"Yes"},{"id":"2","text":"Connections from VM2 to Vault1 always use IP address 20.224.219.230.","correctAnswer":"No"},{"id":"3","text":"Authentication from VM3 to the tenant uses either IP address 10.11.1.5 or 40.122.155.212.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:Yes","2:No","3:No"]'::jsonb, 'service endpoint thay đổi địa chỉ nguồn mà dịch vụ Azure được hỗ trợ nhìn thấy từ địa chỉ IPv4 công cộng của VM thành địa chỉ IPv4 riêng tư của VM. Do đó, VM1 đạt tới Azure Storage dưới dạng 10.1.1.5 và VM2 đạt tới Key Vault dưới dạng 10.1.2.5 thay vì 20.224.219.230. VM3 chỉ có điểm cuối cho Bộ lưu trữ và Vault khóa; Microsoft Entra ID (Azure AD) vốn không hỗ trợ các điểm cuối dịch vụ, do đó, xác thực đối tượng thuê sử dụng địa chỉ công cộng của VM3 chứ không phải địa chỉ riêng tư hay công cộng.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783960421157-809hvioa.png', 'published'),
  ('az500-236', 'az-500', 236, 'You strongly suspect that some users are attempting to sign in to resources they cannot access.  
  
You decide to create an Azure Log Analytics query to validate this suspicion. The query will identify unsuccessful user sign-in attempts from the past few days.  
  
You want to ensure the results show only users who have failed to sign in more than five times. Which of the following should be included in your query?', '[{"key":"A","text":"The EventID and CountIf() parameters."},{"key":"B","text":"The ActivityID and CountIf() parameters."},{"key":"C","text":"The EventID and Count() parameters."},{"key":"D","text":"The ActivityID and Count() parameters."}]'::jsonb, '["C"]'::jsonb, 'Các lần đăng nhập Windows không thành công được biểu thị bằng SecurityEvent EventID 4625. Một truy vấn sẽ lọc trên EventID đó, tổng hợp các sự kiện trùng khớp trên mỗi người dùng với `count()` và giữ lại số lượng lớn hơn năm. Các ví dụ về truy vấn SecurityEvent của Microsoft sử dụng `EventID == 4625` với `summarize count()` để đếm số lần đăng nhập thất bại theo tài khoản.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-237', 'az-500', 237, 'You have an Azure Active Directory (Azure AD) tenant named contoso.com that contains three security groups named Group1, Group2, and Group3 and the users shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954281400-jes9wy3y.png)  
  
Group3 is a member of Group2.  
  
In contoso.com, you register an enterprise application named App1 that has these settings:  
  
- Owners: User1  
- Users and groups: Group2  
  
You configure the properties of App1 as shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954284015-vas8fwi2.png)  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"User1 has App1 listed on his My Apps portal.","correctAnswer":"No"},{"id":"2","text":"User2 has App1 listed on her My Apps portal.","correctAnswer":"Yes"},{"id":"3","text":"User3 has App1 listed on her My Apps portal.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:Yes","3:No"]'::jsonb, 'App1 hiển thị với người dùng nhưng chỉ những người dùng được chỉ định mới có thể nhìn thấy nó trong Ứng dụng của tôi. Người dùng2 nhận được sự phân công của Group2. Vai trò chủ sở hữu của User1 quản lý ứng dụng doanh nghiệp nhưng không gán ứng dụng cho người dùng đó. Các bài tập ứng dụng doanh nghiệp dựa trên nhóm không xếp tầng qua các nhóm lồng nhau, do đó Người dùng3 không nhận được bài tập của Group2 thông qua Group3.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783954281400-jes9wy3y.png', 'published'),
  ('az500-238', 'az-500', 238, 'You have an Azure subscription that includes an Azure SQL database named `sql1`.  
  
You plan to audit `sql1`.  
  
You need to configure the destination for the audit logs. The solution must meet the following requirements:  
  
- Support querying events by using the Kusto query language.  
- Minimize administrative effort.  
  
What should you configure?', '[{"key":"A","text":"an event hub"},{"key":"B","text":"a storage account"},{"key":"C","text":"a Log Analytics workspace"}]'::jsonb, '["C"]'::jsonb, 'Không gian làm việc Log Analytics lưu trữ các sự kiện kiểm tra Azure SQL trong Nhật ký Azure Monitor, nơi chúng có thể được truy vấn trực tiếp bằng cách sử dụng Ngôn ngữ truy vấn Kusto (KQL). Nó cung cấp khả năng thu thập và phân tích nhật ký được quản lý mà không cần một đường dẫn xử lý hoặc tiêu dùng sự kiện riêng biệt.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-239', 'az-500', 239, 'Which virtual networks in Sub1 can User9 modify and delete in their current state?', '[]'::jsonb, '[]'::jsonb, 'Khóa tài nguyên Azure được ưu tiên hơn các quyền RBAC. Khóa CanNotDelete cho phép người dùng được ủy quyền đọc và sửa đổi tài nguyên nhưng ngăn chặn việc xóa tài nguyên đó, trong khi khóa ReadOnly ngăn chặn cả sửa đổi và xóa (chỉ còn lại quyền truy cập đọc). Trong trường hợp này, VNET1 nằm trong nhóm tài nguyên được bảo vệ bởi khóa CanNotDelete, vì vậy Người dùng9 (người có đủ quyền RBAC) vẫn có thể sửa đổi nhưng không thể xóa nó. VNET2 và VNET3 nằm trong các nhóm tài nguyên được bảo vệ bởi khóa ReadOnly, vì vậy User9 không thể sửa đổi hay xóa chúng. VNET4 đã áp dụng khóa no nên User9 có thể sửa đổi và xóa nó. Do đó, bộ có thể sửa đổi chỉ là VNET4 và VNET1 và bộ có thể xóa chỉ là VNET4.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-240', 'az-500', 240, 'You have an Azure AD tenant and an application named App1.  
  
You must ensure that App1 can use Microsoft Entra Verified ID to verify credentials.  
  
Which three actions should you carry out, in order?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"C"},{"id":"step2","text":"Slot 2:","correctAnswer":"A"},{"id":"step3","text":"Slot 3:","correctAnswer":"B"}],"choices":[{"key":"A","text":"Configure the Verified ID service."},{"key":"B","text":"Register App1 in Azure AD and grant permissions."},{"key":"C","text":"Create an Azure key vault."},{"key":"D","text":"Configure an authentication methods policy."},{"key":"E","text":"Add an identity provider."}]}'::jsonb, '["step1=C","step2=A","step3=B"]'::jsonb, 'ID được xác minh của Microsoft Entra lưu trữ các khóa được sử dụng để ký và xác minh thông tin xác thực trong Azure Key Vault, do đó vault phải tồn tại trước khi thiết lập dịch vụ. Sau đó, dịch vụ ID đã xác minh sẽ được định cấu hình để sử dụng kho lưu trữ đó. Cuối cùng, App1 phải được đăng ký và cấp quyền API dịch vụ yêu cầu ID đã xác minh để có thể nhận mã thông báo và gọi dịch vụ để xác minh thông tin xác thực.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-241', 'az-500', 241, 'HOTSPOT —  
  
You have an Azure subscription containing a blob container named cont1. Cont1 has the access policies shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783956458293-7klujkvt.jpg)  
  
Use the drop-down menus to select the choice that completes each statement based on the graphic.', '[]'::jsonb, '[]'::jsonb, 'Một thùng chứa blob có thể có tối đa năm chính sách truy cập được lưu trữ; với Chính sách1 đã được định cấu hình, vẫn còn bốn chính sách bổ sung. Bộ nhớ Blob bất biến có thể sử dụng cả chính sách lưu giữ theo thời gian và chính sách lưu giữ pháp lý. Vì cont1 đã có chính sách lưu giữ theo thời gian nên một chính sách lưu giữ pháp lý cũng có thể được thêm vào.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783956458293-7klujkvt.jpg', 'published'),
  ('az500-242', 'az-500', 242, 'You have an Azure subscription containing a web app named App1 and an Azure Key Vault named Vault1.  
  
You need to configure App1 to store and access the secrets in Vault1. How should you configure App1?', '[]'::jsonb, '[]'::jsonb, 'managed identity cho phép Dịch vụ ứng dụng xác thực với Key Vault mà không lưu trữ khóa, chứng chỉ hoặc cụm mật khẩu. Sau khi cấp quyền nhận dạng đó để đọc bí mật, hãy định cấu hình từng tham chiếu Key Vault dưới dạng cài đặt ứng dụng Dịch vụ ứng dụng.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-243', 'az-500', 243, 'You have an Azure subscription containing an Azure Active Directory (Azure AD) tenant and a user named User1.  
  
The tenant''s **App registrations** settings are configured as shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953193151-ww4if3rm.jpg)  
  
You plan to deploy an app named App1.  
  
You need to ensure that User1 can register App1 in Azure AD. The solution must follow the principle of least privilege.  
  
Which role should you assign to User1?', '[{"key":"A","text":"App Configuration Data Owner for the subscription"},{"key":"B","text":"Managed Application Contributor for the subscription"},{"key":"C","text":"Cloud application administrator in Azure AD"},{"key":"D","text":"Application developer in Azure AD"}]'::jsonb, '["D"]'::jsonb, 'Khi cài đặt **Người dùng có thể đăng ký ứng dụng** được đặt thành **No**, việc chỉ định vai trò Microsoft Entra **Nhà phát triển ứng dụng** sẽ khôi phục khả năng tạo đăng ký ứng dụng cho người dùng đó. Nó chỉ cấp khả năng đăng ký ứng dụng cần thiết, trong khi Quản trị viên ứng dụng đám mây cấp các quyền quản lý ứng dụng rộng hơn; vai trò cấp đăng ký không cung cấp quyền thư mục Microsoft Entra này.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953193151-ww4if3rm.jpg', 'published'),
  ('az500-244', 'az-500', 244, 'You have the Azure virtual machines shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783951828671-6k38ejyi.png)  
  
You create an Azure Log Analytics workspace named Analytics1 in RG1 in the East US region.  
  
Which virtual machines can be enrolled in Analytics1?', '[{"key":"A","text":"VM1 only"},{"key":"B","text":"VM1, VM2, and VM3 only"},{"key":"C","text":"VM1, VM2, VM3, and VM4"},{"key":"D","text":"VM1 and VM4 only"}]'::jsonb, '["C"]'::jsonb, 'Azure virtual machines có thể gửi dữ liệu giám sát đến không gian làm việc Log Analytics bất kể nhóm tài nguyên của họ có khớp với nhóm tài nguyên của không gian làm việc hay không. Một không gian làm việc có thể thu thập dữ liệu từ các tài nguyên và ứng dụng Azure, đồng thời các máy ảo Windows Server và Red Hat Enterprise Linux được liệt kê có thể được kết nối với nó; các nhóm nguồn lực khác nhau cũng như vị trí Tây Âu đều không ngăn cản việc đăng ký.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783951828671-6k38ejyi.png', 'published'),
  ('az500-245', 'az-500', 245, 'You have an Azure subscription named Sub1 that contains the storage accounts shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783964134642-0hnjyzoq.png)  
  
The storage3 storage account is encrypted by using customer-managed keys.  
  
You need to enable Microsoft Defender for Storage to meet these requirements:  
  
- The storage1 and storage2 accounts must be included in Defender for Storage protections.  
- The storage3 account must be excluded from Defender for Storage protections.  
  
Which three actions should you perform in sequence?', '{"statements":[{"id":"slot1","text":"Slot 1:","correctAnswer":"C"},{"id":"slot2","text":"Slot 2:","correctAnswer":"D"},{"id":"slot3","text":"Slot 3:","correctAnswer":"B"}],"choices":[{"key":"A","text":"For storage3, disable the customer-managed keys."},{"key":"B","text":"Disable Defender for Storage for storage3."},{"key":"C","text":"Enable the Defender for Storage plan for Sub1."},{"key":"D","text":"For storage3, assign the AzDefenderPlanAutoEnable tag and set the value to off."},{"key":"E","text":"Enable the Defender for Storage plan for RG1."}]}'::jsonb, '["slot1=C","slot2=D","slot3=B"]'::jsonb, 'Bộ bảo vệ lưu trữ cấp đăng ký bao gồm storage1 và storage2. Để loại trừ một tài khoản, hãy áp dụng `AzDefenderPlanAutoEnable=off` để chính sách đăng ký không bật lại dịch vụ, sau đó tắt Defender for Storage trên tài khoản đó. Không cần phải tắt mã hóa khóa do khách hàng quản lý.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783964134642-0hnjyzoq.png', 'published'),
  ('az500-246', 'az-500', 246, 'You have an Azure subscription containing the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783960413110-cmbjodn1.png)  
  
VNet1 includes the subnets shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783960416184-ifqfxi0i.png)  
  
You plan to deploy an Azure firewall named AzFW1 to VNet1 by using the Azure portal.  
  
Which resource group and subnet can be used to deploy AzFW1?', '[]'::jsonb, '[]'::jsonb, 'Azure Firewall phải được triển khai trong cùng nhóm tài nguyên với mạng ảo của nó. Nó cũng yêu cầu một mạng con chuyên dụng có tên `AzureFirewallSubnet`; mạng con không được chứa các tài nguyên khác. VNet1 nằm trong RG2 và AzureFirewallSubnet trống.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783960413110-cmbjodn1.png', 'published'),
  ('az500-247', 'az-500', 247, 'You have an Azure subscription that contains an Azure key vault. The role assignments for the key vault are shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1785751601608-l0u48l47.jpg)', '[]'::jsonb, '[]'::jsonb, 'Azure Key Vault sử dụng hành động dữ liệu Azure RBAC cho các hoạt động chính và bí mật. Nhân viên bí mật của Key Vault có thể tạo và quản lý khóa, trong khi Nhân viên bí mật của Key Vault có thể tạo và quản lý bí mật. Vai trò Chủ sở hữu là vai trò trên mặt phẳng quản lý và không cấp quyền truy cập vào mặt phẳng dữ liệu Key Vault. Nhiệm vụ của Quản trị viên Key Vault chỉ trong phạm vi khóa hiện có sẽ áp dụng cho khóa đó và không thể tạo khóa hoặc bí mật cấp vault mới.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1785751601608-l0u48l47.jpg', 'published'),
  ('az500-248', 'az-500', 248, 'You have an Azure subscription containing the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954294394-p45tb20b.png)  
  
You need to ensure that ServerAdmins can perform the following tasks:  
  
- Create virtual machines in RG1 only.  
- Connect the virtual machines to the existing virtual networks in RG2 only.  
  
The solution must follow the principle of least privilege.  
  
Which two role-based access control (RBAC) roles should you assign to ServerAdmins? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"a custom RBAC role for RG2"},{"key":"B","text":"the Network Contributor role for RG2"},{"key":"C","text":"the Contributor role for the subscription"},{"key":"D","text":"a custom RBAC role for the subscription"},{"key":"E","text":"the Network Contributor role for RG1"},{"key":"F","text":"the Virtual Machine Contributor role for RG1"}]'::jsonb, '["A","F"]'::jsonb, 'Chỉ định Người đóng góp máy ảo ở phạm vi RG1 để chỉ cho phép tạo và quản lý máy ảo trong nhóm tài nguyên đó. Gán một vai trò tùy chỉnh ở phạm vi RG2 chỉ cấp các hành động đọc/tham gia mạng ảo và mạng con cần thiết, chẳng hạn như `Microsoft.Network/virtualNetworks/read`, `Microsoft.Network/virtualNetworks/subnets/read` và `Microsoft.Network/virtualNetworks/subnets/join/action`. Network Contributor không phải là đặc quyền tối thiểu vì nó cấp `Microsoft.Network/*`, cho phép quản lý mạng rộng rãi.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783954294394-p45tb20b.png', 'published'),
  ('az500-249', 'az-500', 249, 'You have an Azure subscription named Subscription1.  
  
You deploy a Linux virtual machine named VM1 in Subscription1.  
  
You need to monitor VM1''s metrics and logs.  
  
What should you use?', '[{"key":"A","text":"the AzurePerformanceDiagnostics extension"},{"key":"B","text":"Azure HDInsight"},{"key":"C","text":"Linux Diagnostic Extension (LAD) 3.0"},{"key":"D","text":"Azure Analysis Services"}]'::jsonb, '["C"]'::jsonb, 'Linux Diagnostic Extension (LAD) 3.0 thu thập số liệu hiệu suất hệ thống và nhật ký hệ thống hoặc các sự kiện tệp nhật ký được chỉ định từ máy ảo Azure Linux, cho phép giám sát cả hai loại dữ liệu cần thiết.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-250', 'az-500', 250, 'You have an Azure subscription named Sub1.  
  
You have an Azure Active Directory (Azure AD) group named Group1 that includes every member of your IT team.  
  
You must ensure that Group1 members can stop, start, and restart the Azure virtual machines in Sub1. The solution must follow the principle of least privilege.  
  
Which three actions should you carry out, in sequence?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"A"},{"id":"step2","text":"Slot 2:","correctAnswer":"D"},{"id":"step3","text":"Slot 3:","correctAnswer":"E"}],"choices":[{"key":"A","text":"Create a JSON file."},{"key":"B","text":"Run the Update-AzManagementGroup cmdlet."},{"key":"C","text":"Create an XML file."},{"key":"D","text":"Run the New-AzRoleDefinition cmdlet."},{"key":"E","text":"Run the New-AzRoleAssignment cmdlet."}]}'::jsonb, '["step1=A","step2=D","step3=E"]'::jsonb, 'Các vai trò RBAC tùy chỉnh của Azure được xác định trong JSON và được tạo bằng New-AzRoleDefinition. Vai trò chỉ chứa các hành động khởi động, khởi động lại và dừng/giải phóng VM (và các hành động đọc cần thiết) tuân theo đặc quyền tối thiểu. Sau đó, New-AzRoleAssignment cấp vai trò tùy chỉnh đó cho Group1 ở phạm vi Sub1.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-251', 'az-500', 251, 'You have a Microsoft Entra tenant named contoso.com.  
  
A partner company has a Microsoft Entra tenant named fabrikam.com.  
  
You need to ensure that, when a user in fabrikam.com tries to access resources in contoso.com, the user receives only one Microsoft Entra Multi-Factor Authentication (MFA) prompt. The solution must minimize administrative effort.  
  
What should you do?', '[{"key":"A","text":"From the Azure portal of contoso.com, configure the inbound access default settings."},{"key":"B","text":"From the Azure portal of contoso.com, configure the External collaboration settings."},{"key":"C","text":"From the Azure portal of contoso.com, configure the outbound access default settings."},{"key":"D","text":"From the Azure portal of fabrikam.com, configure the outbound access default settings."}]'::jsonb, '["A"]'::jsonb, 'Sự tin cậy MFA của nhiều bên thuê được định cấu hình trong cài đặt quyền truy cập vào của nhiều bên thuê tài nguyên. Khi contoso tin cậy các yêu cầu MFA từ đối tượng thuê Microsoft Entra bên ngoài, nó có thể chấp nhận MFA được thực hiện trong fabrikam thay vì yêu cầu một thử thách MFA khác. Việc định cấu hình cài đặt mặc định gửi đến sẽ cung cấp hành vi này với mức quản trị tối thiểu.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-252', 'az-500', 252, 'You need to configure WebApp1 to satisfy the data and application requirements.  
  
Which two actions should you take? Each correct answer forms part of the solution.  
  
**NOTE:** Each correct selection is worth one point.', '[{"key":"A","text":"Upload a public certificate."},{"key":"B","text":"Turn on the HTTPS Only protocol setting."},{"key":"C","text":"Set the Minimum TLS Version protocol setting to 1.2."},{"key":"D","text":"Change the pricing tier of the App Service plan."},{"key":"E","text":"Turn on the Incoming client certificates protocol setting."}]'::jsonb, '["B","E"]'::jsonb, 'Cài đặt Chỉ HTTPS của Dịch vụ ứng dụng sẽ chuyển hướng tất cả lưu lượng HTTP sang HTTPS, bảo vệ lưu lượng truy cập từ máy khách đến ứng dụng trong quá trình truyền tải. Chứng chỉ ứng dụng khách đến sẽ kích hoạt TLS chung, cho phép ứng dụng yêu cầu và nhận chứng chỉ ứng dụng khách để xác thực ứng dụng khách.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-253', 'az-500', 253, 'You have a Microsoft Entra tenant containing the users shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783965526309-48pa0m02.png)  
  
In Microsoft Entra Privileged Identity Management (PIM), you configure the settings for the Security Administrator role as shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783965528677-038kz0ub.png)  
  
From PIM, you assign the Security Administrator role to the following groups:  
  
- Group1: Active assignment type, permanently assigned  
- Group2: Eligible assignment type, permanently eligible  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"User1 has five hours to activate the Security Administrator role.","correctAnswer":"No"},{"id":"2","text":"If User2 activates the Security Administrator role, the user will be assigned the role immediately.","correctAnswer":"Yes"},{"id":"3","text":"User3 can activate the Security Administrator role.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:Yes","3:Yes"]'::jsonb, 'Việc gán vai trò Microsoft Entra hoạt động vĩnh viễn sẽ cấp các đặc quyền của vai trò mà không yêu cầu kích hoạt. Giá trị năm giờ được định cấu hình giới hạn thời gian duy trì hoạt động của một vai trò đủ điều kiện đã kích hoạt; nó không áp dụng cho một bài tập đã hoạt động. Các nhiệm vụ đủ điều kiện yêu cầu kích hoạt và khi không cần phê duyệt, PIM sẽ tạo nhiệm vụ hoạt động ngay lập tức. Người dùng là thành viên của một nhóm đủ điều kiện cho một vai trò có thể kích hoạt sự phân công vai trò đủ điều kiện đó, ngay cả khi người dùng đó cũng nhận được sự phân công hiện hoạt thông qua một nhóm khác. [Assign Microsoft Entra roles in PIM](https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-how-to-add-role-to-user) [Activate Microsoft Entra roles in PIM](https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-how-to-activate-role)', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783965526309-48pa0m02.png', 'published'),
  ('az500-254', 'az-500', 254, 'You have an Azure subscription containing a Microsoft Defender External Attack Surface Management (Defender EASM) resource named EASM1. EASM1 has discovery enabled and includes several inventory assets.  
  
You need to determine which inventory assets are vulnerable to the most critical web application security risks.  
  
Which Defender EASM dashboard should you use?', '[{"key":"A","text":"Security Posture"},{"key":"B","text":"OWASP Top 10"},{"key":"C","text":"Attack Surface Summary"},{"key":"D","text":"GDPR Compliance"}]'::jsonb, '["B"]'::jsonb, 'Bảng điều khiển Top 10 của OWASP xác định các nội dung có nguy cơ gặp rủi ro bảo mật ứng dụng web nghiêm trọng nhất của OWASP và cung cấp thông tin khắc phục những rủi ro đó.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-255', 'az-500', 255, 'You have an Azure subscription named Sub1 with Security defaults disabled. The subscription includes the following users:  
  
- Five users who have owner permissions for Sub1.  
- Ten users who have owner permissions for Azure resources.  
  
None of the users have multi-factor authentication (MFA) enabled.  
  
Sub1 has the secure score shown in the Secure Score exhibit. (Click the Secure Score tab.)  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783964139001-mkii0828.png)  
  
You plan to enable MFA for the following users:  
  
- Five users who have owner permission for Sub1.  
- Five users who have owner permissions for Azure resources.  
  
By how many points will the secure score increase after you make the planned changes?', '[{"key":"A","text":"0"},{"key":"B","text":"5"},{"key":"C","text":"7.5"},{"key":"D","text":"10"},{"key":"E","text":"14"}]'::jsonb, '["C"]'::jsonb, 'Kiểm soát bảo mật Enable MFA có điểm tối đa là 10 điểm. Bảo vệ tất cả năm Chủ sở hữu đăng ký bằng MFA kiếm được 5 điểm và bảo vệ năm trong số mười Chủ sở hữu tài nguyên Azure kiếm được một nửa trong số 5 điểm còn lại hoặc 2,5 điểm. Do đó, tổng mức tăng Điểm an toàn là 7,5 điểm. Microsoft ghi lại rằng điểm của kiểm soát dựa trên điểm trên mỗi tài nguyên nhân với số lượng tài nguyên lành mạnh và Bật MFA có điểm tối đa là 10.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783964139001-mkii0828.png', 'published'),
  ('az500-256', 'az-500', 256, 'You plan to deploy an Azure function named Function1 that will create new storage accounts for containerized application instances.  
  
You need to give Function1 the least privileges necessary to create the storage accounts while minimizing administrative effort.  
  
What should you do?', '[]'::jsonb, '[]'::jsonb, 'system-assigned managed identity được quản lý vòng đời bằng chức năng này và loại bỏ việc quản lý thông tin xác thực. Chỉ định vai trò Người đóng góp tài khoản lưu trữ tích hợp ở phạm vi được yêu cầu; nó cho phép tạo mặt phẳng quản lý và quản lý tài khoản lưu trữ mà không cần sử dụng mô hình quản trị viên cổ điển rộng hơn hoặc duy trì vai trò tùy chỉnh.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-257', 'az-500', 257, 'You have an Azure subscription associated with an Azure AD tenant named contoso.com. Contoso.com includes a user named User1 and an Azure web app named App1.  
  
You plan to allow User1 to perform these tasks:  
  
- Configure contoso.com to use Microsoft Entra Verified ID.  
- Register App1 in contoso.com.  
  
You need to determine which roles to assign to User1. The solution must follow the principle of least privilege.  
  
Which two roles should you identify? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Authentication Policy Administrator"},{"key":"B","text":"Authentication Administrator"},{"key":"C","text":"Cloud App Security Administrator"},{"key":"D","text":"Application Administrator"},{"key":"E","text":"User Administrator"}]'::jsonb, '["A","D"]'::jsonb, 'Cần có vai trò Quản trị viên chính sách xác thực để đặt cấu hình thư mục cho ID được xác minh của Microsoft Entra. Vai trò Quản trị viên ứng dụng có thể tạo và quản lý đăng ký ứng dụng, bao gồm đăng ký App1. Cùng với nhau, các vai trò này cấp các khả năng cần thiết mà không cần sử dụng các đặc quyền quản trị thư mục rộng hơn.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-258', 'az-500', 258, 'HOTSPOT -  
  
You have an Azure subscription named Subscription1 that contains the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954774425-0jzrfpi8.png)  
  
You create a custom RBAC role in Subscription1 by using the following JSON file.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954777033-tj3wrmld.png)  
  
You assign Role1 to User1 on RG1.  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"User1 can add VM1 to VNET1.","correctAnswer":"No"},{"id":"2","text":"User1 can start and stop App1.","correctAnswer":"No"},{"id":"3","text":"User1 can start and stop cont1.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:No","3:No"]'::jsonb, 'Việc phân công vai trò áp dụng trong RG1, nhưng Role1 chỉ cấp quyền truy cập đọc trên các nhà cung cấp cộng với tất cả các hành động Microsoft.Compute. Việc thêm máy ảo vào mạng ảo yêu cầu các quyền của Microsoft.Network, chẳng hạn như quyền ghi/nối giao diện mạng. Các hoạt động bắt đầu/dừng Dịch vụ ứng dụng sử dụng nhà cung cấp Microsoft.Web và các hoạt động bắt đầu/dừng Phiên bản vùng chứa sử dụng nhà cung cấp Microsoft.ContainerInstance. Không được phép thực hiện bất kỳ hành động quản lý không phải Máy tính nào.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783954774425-0jzrfpi8.png', 'published'),
  ('az500-259', 'az-500', 259, 'You must fulfill the identity and access requirements for Group1.  
  
What should you do?', '[{"key":"A","text":"Add a membership rule to Group1."},{"key":"B","text":"Delete Group1. Create a new group named Group1 that has a group type of Microsoft 365. Add users and devices to the group."},{"key":"C","text":"Modify the membership rule of Group1."},{"key":"D","text":"Change the membership type of Group1 to Assigned. Create two groups that have dynamic memberships. Add the new groups to Group1."}]'::jsonb, '["D"]'::jsonb, 'Nhóm thành viên động được định cấu hình cho người dùng hoặc thiết bị. Một nhóm bảo mật với tư cách thành viên được chỉ định có thể chứa các nhóm thiết bị động và người dùng động riêng biệt, cung cấp cho Group1 tư cách thành viên kết hợp cần thiết mà không cần tạo lại nhóm.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-260', 'az-500', 260, 'You have a Microsoft Entra tenant.  
  
On January 1, configure a multi-factor authentication (MFA) registration policy with these settings:  
  
- Assignments: All users  
- Require Microsoft Entra ID multifactor authentication registration: Enabled  
- Enforce policy: On  
  
On January 3, create two new users named User1 and User2.  
  
On January 5, User1 first authenticates to Microsoft Entra ID. On January 7, User2 first authenticates to Microsoft Entra ID.  
  
On what dates will User1 and User2 be required to register for MFA? Each date can be used once, more than once, or not at all.', '{"statements":[{"id":"user1","text":"User1:","correctAnswer":"B"},{"id":"user2","text":"User2:","correctAnswer":"C"}],"choices":[{"key":"A","text":"January 15"},{"key":"B","text":"January 19"},{"key":"C","text":"January 21"},{"key":"D","text":"February 1"},{"key":"E","text":"February 5"},{"key":"F","text":"February 7"}]}'::jsonb, '["user1=B","user2=C"]'::jsonb, 'Chính sách đăng ký Microsoft Entra MFA được kích hoạt sẽ cung cấp cho người dùng bị ảnh hưởng thời gian gia hạn 14 ngày bắt đầu từ lần đăng nhập đầu tiên của họ. Do đó, User1 bắt buộc phải đăng ký vào ngày 19 tháng 1 và User2 vào ngày 21 tháng 1.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-261', 'az-500', 261, 'Your network includes an on-premises Active Directory domain named adatum.com that synchronizes with Azure Active Directory (Azure AD). The Azure AD tenant has the users shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954284264-ek4ylklo.png)  
  
You configure the Password Protection settings under Authentication methods for adatum.com as shown below.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954286618-c8i98atq.jpg)  
  
For each statement, select **Yes** if it is true; otherwise, select **No**.', '{"statements":[{"id":"1","text":"User1 will be prompted to change the password on the next sign-in.","correctAnswer":"No"},{"id":"2","text":"User2 can change the password to @@tum_C0mpleX123.","correctAnswer":"Yes"},{"id":"3","text":"User3 can change the password to Adatum123!.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:Yes","3:Yes"]'::jsonb, 'Bảo vệ mật khẩu được đánh giá trong quá trình thay đổi và đặt lại mật khẩu, không phải trong quá trình đăng nhập thông thường bằng mật khẩu hiện có. Thuật toán danh sách tùy chỉnh sử dụng phương pháp chuẩn hóa và đối sánh mờ, sau đó chấp nhận mật khẩu có điểm cuối cùng ít nhất là 5 ngay cả khi mật khẩu đó bao gồm cụm từ bị cấm. Đối với AD DS tại chỗ, chế độ Kiểm tra sẽ đánh giá và ghi lại các mật khẩu không an toàn nhưng vẫn xử lý cập nhật mật khẩu; chỉ có chế độ Thực thi mới từ chối nó.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783954284264-ek4ylklo.png', 'published'),
  ('az500-262', 'az-500', 262, 'You have an Azure subscription containing the virtual networks shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783964136003-8q0zz6yw.png)  
  
NSG1 and NSG2 have only their default rules.  
  
The subscription includes the virtual machines shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783964138443-ipfrir3o.png)  
  
The subscription also includes the web apps shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783964141102-0knp2i7k.png)  
  
For each statement, select **Yes** when it is true; otherwise, select **No**.', '{"statements":[{"id":"1","text":"WebApp1 can connect to VM2.","correctAnswer":"Yes"},{"id":"2","text":"NSG1 controls inbound traffic to WebApp1.","correctAnswer":"No"},{"id":"3","text":"WebApp2 can connect to VM1.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:Yes","2:No","3:Yes"]'::jsonb, 'Tích hợp VNet dịch vụ ứng dụng khu vực cho phép ứng dụng tạo kết nối ra bên ngoài tới các tài nguyên trong VNet tích hợp và trong các VNet ngang hàng, do đó WebApp1 có thể tiếp cận VM2. Nó không cung cấp quyền truy cập vào ứng dụng, vì vậy NSG1 trên mạng con tích hợp không chi phối lưu lượng truy cập vào WebApp1. Môi trường dịch vụ ứng dụng cấp biệt lập được triển khai trong VNet của nó; WebApp2 có thể tiếp cận VM1 qua VNet peering. Các quy tắc Mạng ảo NSG mặc định bao gồm các không gian địa chỉ VNet ngang hàng và cho phép lưu lượng truy cập.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783964136003-8q0zz6yw.png', 'published'),
  ('az500-263', 'az-500', 263, 'You have an Azure subscription containing a virtual network named VNet1. VNet1 includes the subnets shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783966701021-1m5t8ejp.png)  
  
You create the virtual machines shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783966704479-aziwd3zl.png)  
  
You plan to configure just-in-time (JIT) VM access for the virtual machines. The solution must minimize administrative effort.  
  
For which virtual machines can JIT VM access be configured?', '[{"key":"A","text":"VM1 only"},{"key":"B","text":"VM1 and VM2 only"},{"key":"C","text":"VM1 and VM3 only"},{"key":"D","text":"VM1, VM2, and VM3 only"},{"key":"E","text":"VM1, VM2, VM3, and VM4"}]'::jsonb, '["D"]'::jsonb, 'Truy cập VM đúng lúc yêu cầu nhóm bảo mật mạng (NSG) hoặc cấu hình Azure Firewall. NSG có thể được liên kết với mạng con của VM hoặc giao diện mạng của nó. Do đó, VM1, VM2 và VM3 đủ điều kiện vì mỗi máy đều được NSG bảo vệ ở một hoặc cả hai phạm vi đó; VM4 có no NSG ở cả hai phạm vi.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783966701021-1m5t8ejp.png', 'published'),
  ('az500-264', 'az-500', 264, 'HOTSPOT -  
  
You have an Azure key vault named KeyVault1 that contains the items listed in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954290003-f64v3az5.png)  
  
In KeyVault1, these events occur in sequence:  
  
- Item1 is deleted.  
- Item2 and Policy1 are deleted.  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"You can recover Policy1.","correctAnswer":"No"},{"id":"2","text":"You can add a new key named Item1.","correctAnswer":"No"},{"id":"3","text":"You can recover Item2.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:No","3:Yes"]'::jsonb, 'Tính năng xóa mềm Azure Key Vault cho phép khôi phục các khóa và bí mật đã xóa, do đó có thể khôi phục Item2. Chính sách truy cập không thể khôi phục được các đối tượng đã xóa, vì vậy Chính sách 1 không thể khôi phục được. Khóa bị xóa mềm vẫn được giữ nguyên theo tên cho đến khi nó được khôi phục hoặc bị xóa, ngăn chặn việc tạo khóa khác có tên Item1.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783954290003-f64v3az5.png', 'published'),
  ('az500-265', 'az-500', 265, 'You have an Azure subscription and the computers displayed in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783960423143-7rizyqba.png)  
  
You need to run a vulnerability scan of the computers by using Microsoft Defender for Cloud.  
  
Which computers can you scan?', '[{"key":"A","text":"VM1 only"},{"key":"B","text":"VM1 and VM2 only"},{"key":"C","text":"Server1 and VMSS1_0 only"},{"key":"D","text":"VM1, VM2, and Server1 only"},{"key":"E","text":"VM1, VM2, Server 1, and VMSS1_0"}]'::jsonb, '["D"]'::jsonb, 'Đánh giá lỗ hổng tích hợp của Microsoft Defender for Cloud hỗ trợ Azure virtual machines đủ điều kiện và các máy kết hợp được kết nối, bao gồm các máy Windows Server và RHEL được liệt kê. Trong phạm vi hỗ trợ máy quét được sử dụng ở đây, không thể quét phiên bản quy mô máy ảo thông qua quá trình triển khai đánh giá lỗ hổng này, do đó VMSS1_0 bị loại trừ.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783960423143-7rizyqba.png', 'published'),
  ('az500-267', 'az-500', 267, 'You have an Azure subscription named Sub1 that contains the virtual machines shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783952090205-noazmvh1.png)  
  
You need to ensure that the virtual machines in RG1 keep the Remote Desktop port closed until an authorized user requests access.  
  
What should you configure?', '[{"key":"A","text":"Azure Active Directory (Azure AD) Privileged Identity Management (PIM)"},{"key":"B","text":"an application security group"},{"key":"C","text":"Azure Active Directory (Azure AD) conditional access"},{"key":"D","text":"just in time (JIT) VM access"}]'::jsonb, '["D"]'::jsonb, 'Theo mặc định, quyền truy cập VM đúng lúc trong Microsoft Defender for Cloud chặn lưu lượng truy cập đến các cổng quản lý VM đã chọn, bao gồm cả RDP. Khi người dùng được ủy quyền yêu cầu quyền truy cập, nó sẽ tạm thời cho phép cổng được định cấu hình từ địa chỉ IP nguồn được yêu cầu trong một khoảng thời gian giới hạn, sau đó khôi phục khối.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783952090205-noazmvh1.png', 'published'),
  ('az500-268', 'az-500', 268, 'You have an Azure subscription that uses Microsoft Defender for Cloud.  
  
An Amazon Web Services (AWS) account named AWS1 is connected to Defender for Cloud.  
  
You need to ensure that AWS1 uses AWS Foundational Security Best Practices while minimizing administrative effort.  
  
What should you do in Defender for Cloud?', '[{"key":"A","text":"Assign a built-in compliance standard."},{"key":"B","text":"Create a new custom standard."},{"key":"C","text":"Assign a built-in assessment."},{"key":"D","text":"Create a new custom assessment."}]'::jsonb, '["A"]'::jsonb, 'Các biện pháp thực hành tốt nhất về bảo mật nền tảng của AWS là tiêu chuẩn tuân thủ Defender for Cloud được tích hợp sẵn cho AWS. Việc chỉ định tiêu chuẩn đó sẽ áp dụng tập hợp các biện pháp kiểm soát và đánh giá cho tài khoản AWS, tránh công việc quản trị trong việc xác định tiêu chuẩn tùy chỉnh hoặc đánh giá tùy chỉnh riêng lẻ.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-269', 'az-500', 269, 'HOTSPOT -  
  
You have an Azure subscription containing the storage accounts shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954772675-rnppy1av.png)  
  
You need to configure authorization access.  
  
Which authorization types can you use for each storage account?', '[]'::jsonb, '[]'::jsonb, 'Các dịch vụ Azure Blob và Table hỗ trợ ủy quyền Khóa chia sẻ, SAS và Microsoft Entra ID (Azure AD). Azure Files được truy cập qua SMB hỗ trợ ủy quyền Khóa chia sẻ, nhưng SAS không được hỗ trợ để truy cập SMB; các tùy chọn SMB dựa trên danh tính của nó sử dụng Dịch vụ miền Entra hoặc Entra Kerberos thay vì lựa chọn Azure AD chung được liệt kê.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783954772675-rnppy1av.png', 'published'),
  ('az500-271', 'az-500', 271, 'You have an Azure subscription that includes a user named User1 and a storage account that hosts a blob container named blob1.  
  
You must grant User1 access to blob1. The solution must ensure that the access expires after six days.  
  
What should you use?', '[{"key":"A","text":"a shared access signature (SAS)"},{"key":"B","text":"role-based access control (RBAC)"},{"key":"C","text":"a shared access policy"},{"key":"D","text":"a managed identity"}]'::jsonb, '["A"]'::jsonb, 'Chữ ký truy cập chung (SAS) ủy quyền quyền truy cập hạn chế vào tài nguyên Bộ lưu trữ Azure trong một khoảng thời gian được chỉ định. Do đó, SAS cho vùng chứa blob có thể cấp các quyền cần thiết và được ấn định thời gian hết hạn sáu ngày sau khi được cấp.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-272', 'az-500', 272, 'Your network has an on-premises Active Directory domain synchronized with an Azure Active Directory (Azure AD) tenant. The tenant includes the users shown in this table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953082454-33gmgdui.png)  
  
The tenant also includes the groups shown in this table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953086346-cy1867ll.png)  
  
You configure a multi-factor authentication (MFA) registration policy with these settings:  
  
- Assignments:  
  - Include: Group1  
  - Exclude: Group2  
- Controls: Require Azure MFA registration  
- Enforce Policy: On  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"User1 will be prompted to configure MFA registration during the user’s next Azure AD authentication.","correctAnswer":"Yes"},{"id":"2","text":"User2 must configure MFA during the user’s next Azure AD authentication.","correctAnswer":"No"},{"id":"3","text":"User3 will be prompted to configure MFA registration during the user’s next Azure AD authentication.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:Yes","2:No","3:Yes"]'::jsonb, 'Chính sách đăng ký MFA được bật sẽ nhắc những người dùng đã chọn trong lần đăng nhập Azure AD tương tác tiếp theo của họ. Người dùng1 và Người dùng3 là thành viên của Nhóm1 được bao gồm và không bị loại trừ. Người dùng2 cũng thuộc Nhóm2 và việc loại trừ sẽ ngăn chính sách áp dụng cho người dùng đó. Chính sách đăng ký Azure AD MFA có thể nhắm mục tiêu tài khoản Active Directory tại chỗ được đồng bộ hóa.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953082454-33gmgdui.png', 'published'),
  ('az500-273', 'az-500', 273, 'You have an Azure Active Directory (Azure AD) tenant containing the users in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953054925-m5woc4cu.png)  
  
You create and enforce an Azure AD Identity Protection sign-in risk policy with these settings:  
  
- Assignments: Include Group1; exclude Group2  
- Conditions: Sign-in risk level: Medium and above  
- Access: Allow access; require multi-factor authentication  
  
Identify what happens when the users sign in to Azure AD.', '[]'::jsonb, '[]'::jsonb, 'Chính sách rủi ro đăng nhập Microsoft Entra ID yêu cầu MFA ở mức Trung bình trở lên yêu cầu đăng nhập rủi ro trong phạm vi để hoàn thành MFA. Người dùng không đăng ký MFA khi cần khắc phục sẽ bị chặn. Địa chỉ IP ẩn danh, thuộc tính đăng nhập không quen thuộc và các lần đăng nhập liên quan đến thiết bị bị nhiễm độc là các tình huống có rủi ro đăng nhập ở mức trung bình hoặc cao hơn trong mô hình chính sách này. Loại trừ dựa trên nhóm loại bỏ yêu cầu của chính sách rủi ro đối với Người dùng1, nhưng Người dùng1 vẫn bật MFA cho mỗi người dùng và được nhắc về MFA.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953054925-m5woc4cu.png', 'published'),
  ('az500-274', 'az-500', 274, 'You are implementing conditional access policies.  
  
You must assess the existing Azure Active Directory (Azure AD) risk events and risk levels to configure and implement the policies.  
  
Identify the risk level for these risk events:  
  
- Users with leaked credentials  
- Impossible travel to atypical locations  
- Sign-ins from IP addresses with suspicious activity  
  
Each level may be used once, more than once, or not at all.', '{"statements":[{"id":"impossible_travel","text":"Impossible travel to atypical locations:","correctAnswer":"C"},{"id":"leaked_credentials","text":"Users with leaked credentials:","correctAnswer":"A"},{"id":"suspicious_ip","text":"Sign-ins from IP addresses with suspicious activity:","correctAnswer":"B"}],"choices":[{"key":"A","text":"High"},{"key":"B","text":"Low"},{"key":"C","text":"Medium"}]}'::jsonb, '["impossible_travel=C","leaked_credentials=A","suspicious_ip=B"]'::jsonb, 'Microsoft Entra ID Protection phân loại thông tin xác thực bị rò rỉ là phát hiện người dùng có rủi ro cao. Việc di chuyển bất khả thi là phát hiện đăng nhập có rủi ro trung bình, trong khi đăng nhập từ địa chỉ IP có hoạt động đáng ngờ là phát hiện đăng nhập có rủi ro thấp.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-275', 'az-500', 275, 'You have a management group named MG1 that contains an Azure subscription and a resource group named RG1. RG1 contains a virtual machine named VM1.  
  
You have the custom Azure roles shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783957437568-biph62gk.png)  
  
The permissions for Role1 appear in the following role definition file.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783957442303-nuq35zb6.png)  
  
The permissions for Role2 appear in the following role definition file.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783957445386-scloo7ff.png)  
  
You assign the roles to the users shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783957448613-ti3esb9k.png)  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"User1 can delete VM1.","correctAnswer":"No"},{"id":"2","text":"User2 can delete VM1.","correctAnswer":"Yes"},{"id":"3","text":"User3 can delete VM1.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:Yes","3:Yes"]'::jsonb, 'Vai trò1 cấp cho no các hành động trên mặt phẳng điều khiển vì mảng `Actions` của nó trống. Quyền `Microsoft.Compute/virtualMachines/*` của Role2 bao gồm việc xóa máy ảo và được gán tại RG1, chứa VM1. Các quyền của vai trò được chỉ định ở phạm vi cha sẽ được kế thừa bởi phạm vi con. Các quyền của Azure RBAC là các quyền bổ sung và `NotActions` chỉ loại trừ một hành động khỏi các hành động được phép của vai trò đó; nó không phải là một nhiệm vụ từ chối, vì vậy nó không ghi đè lên sự cấp phép Vai trò2 của Người dùng2.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783957437568-biph62gk.png', 'published'),
  ('az500-276', 'az-500', 276, 'You have an Azure subscription containing the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783957454059-uusgqubp.png)  
  
You plan to take these actions:  
  
- Deploy a new app named App1 that requires access to Vault1.  
- Configure a shared identity for VM1 and VM2 to access st1.  
  
You need to configure an identity for each requirement while minimizing administrative effort. Each identity type may be used once, more than once, or not at all.', '{"statements":[{"id":"vm-access-st1","text":"VM1 and VM2 access to st1:","correctAnswer":"D"},{"id":"app1-access-vault1","text":"App1 access to Vault1:","correctAnswer":"B"}],"choices":[{"key":"A","text":"Security group"},{"key":"B","text":"System-assigned managed identity"},{"key":"C","text":"User account"},{"key":"D","text":"User-assigned managed identity"}]}'::jsonb, '["vm-access-st1=D","app1-access-vault1=B"]'::jsonb, 'system-assigned managed identity được liên kết với một tài nguyên Azure duy nhất và được quản lý tự động bằng tài nguyên đó, giúp nó phù hợp với App1. user-assigned managed identity có vòng đời độc lập và có thể được gán cho nhiều tài nguyên Azure, cho phép VM1 và VM2 chia sẻ một danh tính khi truy cập st1.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783957454059-uusgqubp.png', 'published'),
  ('az500-277', 'az-500', 277, 'HOTSPOT -  
  
You have an Azure subscription containing Azure virtual machines that run Windows Server 2016.  
  
You need to implement a policy that ensures every virtual machine has a custom antimalware virtual machine extension installed.  
  
How should you complete the policy?', '[]'::jsonb, '[]'::jsonb, '`DeployIfNotExists` đánh giá tài nguyên liên quan được chỉ định và triển khai nó khi không có tài nguyên đó. `details.deployment.properties` của nó sử dụng thuộc tính `template` triển khai ARM để xác định các tài nguyên cần tạo. `existenceCondition` được sử dụng để đánh giá sự tồn tại chứ không phải để giữ định nghĩa triển khai.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-278', 'az-500', 278, 'You have an Azure subscription that includes a web app named App1.  
  
Users must be able to choose either a Google identity or a Microsoft identity when they authenticate to App1.  
  
You need to add Google as an identity provider in Azure AD.  
  
Which two pieces of information should you configure? Each correct answer is part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"a client ID"},{"key":"B","text":"a tenant name"},{"key":"C","text":"the endpoint URL of an application"},{"key":"D","text":"a tenant ID"},{"key":"E","text":"a client secret"}]'::jsonb, '["A","E"]'::jsonb, 'Liên kết Google trong Microsoft Entra ID yêu cầu ID ứng dụng khách OAuth và bí mật ứng dụng khách có được khi đăng ký ứng dụng Google. Những thông tin xác thực này xác định và xác thực đối tượng thuê Entra với Google.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-279', 'az-500', 279, 'You have an Azure Active Directory (Azure AD) tenant containing two administrative units, named AU1 and AU2.  
  
Users are assigned to the administrative units shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783957443371-lx1z7qde.png)  
  
Users have the roles shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783957447384-evwx0dpg.png)  
  
For each statement, select **Yes** if it is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"Admin1 can reset the password of User1.","correctAnswer":"Yes"},{"id":"2","text":"Admin2 can reset the password of User3.","correctAnswer":"No"},{"id":"3","text":"Admin3 can reset the password of Admin4.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:Yes","2:No","3:No"]'::jsonb, 'Quản trị viên bộ phận trợ giúp trong phạm vi đơn vị quản trị chỉ có thể đặt lại mật khẩu cho những người không phải quản trị viên trong đơn vị hành chính được chỉ định của họ, vì vậy, Quản trị viên1 có thể đặt lại mật khẩu của Người dùng1 trong AU1. Quản trị viên nhóm cấp quyền quản lý nhóm chứ không cấp quyền đặt lại mật khẩu nên Admin2 không thể đặt lại mật khẩu của User3. Quản trị viên mật khẩu cũng bị giới hạn ở những người không phải quản trị viên trong đơn vị hành chính được chỉ định của họ; do đó Admin3 không thể đặt lại mật khẩu của Admin4 vì Admin4 là Quản trị viên người dùng.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783957443371-lx1z7qde.png', 'published'),
  ('az500-280', 'az-500', 280, 'You are configuring connectivity for two Azure virtual networks, VNET1 and VNET2.  
  
Implement VPN gateways that meet these requirements:  
  
- VNET1 must support six site-to-site connections using BGP.  
- VNET2 must support 12 site-to-site connections using BGP.  
- Costs must be minimized.  
  
Which VPN gateway SKU should be used for each virtual network? Each SKU may be used once, more than once, or not at all.', '{"statements":[{"id":"vnet1","text":"VNET1:","correctAnswer":"B"},{"id":"vnet2","text":"VNET2:","correctAnswer":"B"}],"choices":[{"key":"A","text":"Basic"},{"key":"B","text":"VpnGw1"},{"key":"C","text":"VpnGw2"},{"key":"D","text":"VpnGw3"}]}'::jsonb, '["vnet1=B","vnet2=B"]'::jsonb, 'Cơ bản không hỗ trợ BGP. VpnGw1 hỗ trợ BGP và tối đa 30 đường hầm site-to-site/VNet-to-VNet, bao gồm cả 6 và 12 kết nối; đây là SKU có chi phí thấp nhất trong số các tùy chọn có khả năng BGP được liệt kê.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-281', 'az-500', 281, 'You have an Azure subscription that includes a virtual machine named VM1.  
  
You create an Azure key vault with the following configuration:  
  
- Name: Vault5  
- Region: West US  
- Resource group: RG1  
  
You need to use Vault5 to enable Azure Disk Encryption on VM1. The solution must support backing up VM1 by using Azure Backup.  
  
Which key vault setting should you configure?', '[{"key":"A","text":"Access policies"},{"key":"B","text":"Secrets"},{"key":"C","text":"Keys"},{"key":"D","text":"Locks"}]'::jsonb, '["A"]'::jsonb, 'Mã hóa đĩa Azure phải được bật trong cài đặt chính sách truy cập của kho khóa và Azure Backup yêu cầu chính sách truy cập cấp cho nó quyền truy cập vào các khóa và bí mật có liên quan cho máy ảo được mã hóa ADE. [Microsoft Learn: Configure a key vault for Azure Disk Encryption](https://learn.microsoft.com/en-us/azure/virtual-machines/windows/disk-encryption-key-vault) [Microsoft Learn: Back up and restore encrypted Azure VMs](https://learn.microsoft.com/en-us/azure/backup/backup-azure-vms-encryption)', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-282', 'az-500', 282, 'You have an Azure subscription containing an Azure Firewall named AzFW1. AzFW1 uses a firewall policy named FWPolicy1.  
  
Add rule collections to FWPolicy1 that meet these requirements:  
  
- Allow traffic according to the destination FQDN.  
- Allow TCP traffic.  
  
Which rule-collection types should you add for each requirement?', '[]'::jsonb, '[]'::jsonb, 'Azure Firewall có thể lọc FQDN đích trong Quy tắc mạng thông qua độ phân giải DNS (đã bật proxy DNS) hoặc trong Quy tắc ứng dụng. Các quy tắc mạng hỗ trợ lọc giao thức TCP, trong khi các quy tắc Ứng dụng đánh giá lưu lượng truy cập ứng dụng HTTP, HTTPS và MSSQL. DNAT được sử dụng để dịch và xuất bản địa chỉ đích thay vì cung cấp các yêu cầu lọc gửi đi này.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-284', 'az-500', 284, 'You have an Azure subscription containing a Microsoft Defender External Attack Surface Management (Defender EASM) resource named EASM1. EAMS1 contains the inventory assets shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783960940494-dm4282de.png)  
  
Which assets are scanned each day, and which assets appear in the default dashboard charts?', '[]'::jsonb, '[]'::jsonb, 'Nội dung Hàng tồn kho, Phụ thuộc và Chỉ giám sát đã được phê duyệt được quét hàng ngày. Tài sản ứng viên chỉ được quét trong quá trình khám phá. Biểu đồ bảng điều khiển EASM của Bộ bảo vệ mặc định thể hiện nội dung Khoảng không quảng cáo được phê duyệt, do đó chỉ bao gồm VM1.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783960940494-dm4282de.png', 'published'),
  ('az500-285', 'az-500', 285, 'You have an Azure Active Directory (Azure AD) tenant.  
  
The deleted objects are shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953192683-l62ldv3r.png)  
  
On May 4, 2020, you try to restore the deleted objects by using the Azure Active Directory admin center.  
  
Which two objects can you restore? Each correct answer presents a complete solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Group1"},{"key":"B","text":"Group2"},{"key":"C","text":"User2"},{"key":"D","text":"User1"}]'::jsonb, '["B","C"]'::jsonb, 'Tài khoản người dùng Azure AD đã xóa vẫn có thể khôi phục được trong 30 ngày; do đó, Người dùng2, bị xóa vào ngày 30 tháng 4 năm 2020, có thể được khôi phục, trong khi Người dùng1 thì không. Nhóm Office 365 đã xóa cũng có thể được khôi phục trong thời gian lưu giữ 30 ngày, do đó, Nhóm2, bị xóa vào ngày 5 tháng 4 năm 2020, có thể được khôi phục. Theo hành vi khôi phục Azure AD áp dụng ở đây, nhóm bảo mật không được khôi phục thông qua quy trình làm việc này.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953192683-l62ldv3r.png', 'published'),
  ('az500-286', 'az-500', 286, 'You have Azure virtual machines with Update Management enabled. The virtual machines are configured as shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783952242250-j9cctvq8.png)  
  
You schedule two update deployments named Update1 and Update2. Update1 updates VM3. Update2 updates VM6.  
  
Which additional virtual machines can be updated by using Update1 and Update2?', '[]'::jsonb, '[]'::jsonb, 'Việc triển khai Windows có thể bao gồm các máy ảo Windows khác, VM1 và VM2. Việc triển khai Linux có thể bao gồm các máy ảo Linux khác, VM4 và VM5. Tư cách thành viên khu vực và nhóm tài nguyên không hạn chế những lựa chọn đó. Azure Update Manager sử dụng các cơ chế cập nhật Windows và Linux riêng biệt.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783952242250-j9cctvq8.png', 'published'),
  ('az500-287', 'az-500', 287, 'You have an Azure subscription containing a user named User1. User1 has the Reader role for the subscription.  
  
You plan to create a custom role named Role1 and assign it to User1.  
  
You must ensure that User1 can create and manage application security groups by using Azure portal.  
  
Which two permissions should you add to Role1?

![Question Image](https://cdn.examcademy.com/images/questions/1785598770567-hmwye13w.png)', '[]'::jsonb, '[]'::jsonb, 'Các nhóm bảo mật ứng dụng là tài nguyên của Microsoft.Network, do đó, các hoạt động quản lý tài nguyên bắt buộc đều có trong nhà cung cấp Microsoft.Network. Quyền của Microsoft.Portal cho phép trải nghiệm cổng thông tin Azure được sử dụng để quản lý tài nguyên Azure. Trình đọc đã cung cấp quyền truy cập đọc cần thiết để xem đăng ký và các tài nguyên hiện có.

**Tài liệu tham khảo:**
[Azure resource provider operations - Microsoft.Network](https://learn.microsoft.com/en-us/azure/role-based-access-control/permissions/networking) · [Azure resource provider operations - Microsoft.Portal](https://learn.microsoft.com/en-us/azure/role-based-access-control/permissions/management-and-governance)', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1785598770567-hmwye13w.png', 'published'),
  ('az500-288', 'az-500', 288, 'You have an Azure subscription containing a virtual network named VNet1. VNet1 has a single subnet. The subscription also contains a virtual machine named VM1 that is connected to VNet1.  
  
You plan to deploy an Azure SQL Managed Instance named SQL1.  
  
You need to ensure that VM1 can access SQL1.  
  
Which three components must you create? Each correct answer represents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"a subnet"},{"key":"B","text":"a network security perimeter"},{"key":"C","text":"a virtual network gateway"},{"key":"D","text":"a network security group (NSG)"},{"key":"E","text":"a route table"}]'::jsonb, '["A","D","E"]'::jsonb, 'Azure SQL Managed Instance phải sử dụng mạng con chuyên dụng chứa các tài nguyên khác của no, do đó VM1 không thể chia sẻ mạng con hiện có của nó với SQL1. Mạng con phiên bản được quản lý cũng phải có nhóm bảo mật mạng và bảng lộ trình liên quan. Vì VM1 và SQL1 nằm trong cùng một mạng ảo nên cổng mạng ảo không cần thiết cho kết nối riêng tư của chúng.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-289', 'az-500', 289, 'You have an Azure subscription containing four Azure SQL Managed Instances.  
  
You need to assess the managed instances for vulnerability to SQL injection attacks.  
  
What should you do first?', '[{"key":"A","text":"Create an Azure Sentinel workspace."},{"key":"B","text":"Enable Advanced Data Security."},{"key":"C","text":"Add the SQL Health Check solution to Azure Monitor."},{"key":"D","text":"Create an Azure Advanced Threat Protection (ATP) instance."}]'::jsonb, '["B"]'::jsonb, 'Bảo mật dữ liệu nâng cao cho Azure SQL Managed Instance bao gồm tính năng Bảo vệ mối đe dọa nâng cao, giúp phát hiện hoạt động bất thường và có khả năng gây hại, chẳng hạn như các cuộc tấn công tiêm nhiễm SQL tiềm ẩn. Khả năng này hiện là một phần của Microsoft Defender cho SQL.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-290', 'az-500', 290, 'You have an Azure subscription that contains the key vaults in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783957453065-5wmqh9qt.png)  
  
The subscription has the users shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783957456826-n0tl7zle.png)  
  
On June 1, you take these actions:  
  
- Delete a key named key1 from KeyVault1.  
- Delete a secret named secret1 from KeyVault2.  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"Admin1 can recover key1 on June 5.","correctAnswer":"No"},{"id":"2","text":"Admin2 can purge secret1 on June 12.","correctAnswer":"Yes"},{"id":"3","text":"Admin3 can recover key1 on June 17.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:Yes","3:No"]'::jsonb, 'Đối tượng Key Vault đã xóa chỉ có thể phục hồi được trong khoảng thời gian lưu giữ đã được định cấu hình của nó. Người đóng góp Key Vault là một vai trò trong mặt phẳng quản lý và không cấp quyền truy cập vào các hoạt động chính của mặt phẳng dữ liệu, vì vậy Admin1 không thể khôi phục key1. Nhân viên bí mật của Key Vault có thể xóa bí mật; vì tính năng bảo vệ thanh lọc bị vô hiệu hóa đối với KeyVault2 nên Admin2 có thể thanh lọc secret1 trong thời gian lưu giữ 15 ngày. Mặc dù Quản trị viên Key Vault có thể thực hiện các hoạt động quan trọng trên mặt phẳng dữ liệu nhưng thời gian lưu giữ 10 ngày của KeyVault1 đã trôi qua trước ngày 17 tháng 6.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783957453065-5wmqh9qt.png', 'published'),
  ('az500-291', 'az-500', 291, 'You have an Azure subscription containing an Azure Key Vault Standard key vault named Vault1. Vault1 contains a 2048-bit RSA key named key1.  
  
You need to ensure that key1 rotates every 90 days.  
  
What should you do first?', '[{"key":"A","text":"Create a key rotation policy."},{"key":"B","text":"Modify the Access policies settings of Vault1."},{"key":"C","text":"Upgrade Vault1 to Key Vault Premium."},{"key":"D","text":"Recreate key1 as an EC key."}]'::jsonb, '["A"]'::jsonb, 'Tự động xoay khóa Azure Key Vault được định cấu hình cho mỗi khóa bằng cách tạo hoặc đặt chính sách xoay vòng khóa. Chính sách có thể chỉ định khoảng thời gian luân chuyển là 90 ngày để tạo ra phiên bản mới của khóa RSA hiện có. Key Vault Standard hỗ trợ khả năng này; không cần phải nâng cấp Premium cũng như không cần thay đổi loại khóa. Việc quản lý chính sách yêu cầu các quyền thích hợp nhưng chỉ sửa đổi chính sách truy cập sẽ không định cấu hình xoay vòng.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-292', 'az-500', 292, 'You are securing access to resources in an Azure subscription.  
  
A new company policy requires that every Azure virtual machine in the subscription use managed disks.  
  
You need to stop users from creating virtual machines that use unmanaged disks.  
  
What should you use?', '[{"key":"A","text":"Azure Monitor"},{"key":"B","text":"Azure Policy"},{"key":"C","text":"Azure Security Center"},{"key":"D","text":"Azure Service Health"}]'::jsonb, '["B"]'::jsonb, 'Chính sách Azure thực thi các tiêu chuẩn tổ chức ở phạm vi đăng ký. Việc gán chính sách có hiệu ứng Từ chối có thể từ chối việc triển khai máy ảo không đáp ứng yêu cầu về đĩa được quản lý, ngăn không cho tạo máy ảo trên đĩa không được quản lý.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-293', 'az-500', 293, 'Your company uses cloud-based resources from the following platforms:  
  
- Azure  
- Amazon Web Services (AWS)  
- Google Cloud Platform (GCP)  
  
You plan to implement Microsoft Defender for Cloud.  
  
On which platforms can Defender for Cloud protect containers and storage?', '[]'::jsonb, '[]'::jsonb, 'Defender for Containers hỗ trợ Azure Kubernetes Service, Amazon Elastic Kubernetes Service và Google Kubernetes Engine. Bộ bảo vệ cho Bộ lưu trữ có nguồn gốc từ Azure và bảo vệ Azure Blob Storage, Azure Files và Azure Data Lake Storage; nó không hỗ trợ trực tiếp các nhóm AWS S3.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-294', 'az-500', 294, 'You have an Azure subscription containing an Azure web app named App1.  
  
You plan to configure a Conditional Access policy for App1. The solution must meet these requirements:  
  
- Only permit access to App1 from Windows devices.  
- Only permit devices marked as compliant to access App1.  
  
Which Conditional Access policy settings should you configure? Each setting may be used once, more than once, or not at all.', '{"statements":[{"id":"windows_devices","text":"Only allow access to App1 from Windows devices:","correctAnswer":"B"},{"id":"compliant_devices","text":"Only allow devices that are marked as compliant to access App1:","correctAnswer":"C"}],"choices":[{"key":"A","text":"Cloud apps or actions"},{"key":"B","text":"Conditions"},{"key":"C","text":"Grant"},{"key":"D","text":"Session"},{"key":"E","text":"Users or workload identities"}]}'::jsonb, '["windows_devices=B","compliant_devices=C"]'::jsonb, 'Nhắm mục tiêu nền tảng thiết bị được định cấu hình trong Điều kiện truy cập có điều kiện. Việc yêu cầu đánh dấu thiết bị là tuân thủ là một biện pháp kiểm soát quyền truy cập được cấp, vì vậy quyền truy cập chỉ được cấp khi thiết bị đáp ứng yêu cầu tuân thủ.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-295', 'az-500', 295, 'You have an Azure subscription containing the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783966876960-5vkijlq3.png)  
  
You intend to use service endpoints and service endpoint policies.  
  
Identify which resources can be accessed by using a service endpoint and which resources support service endpoint policies.', '[]'::jsonb, '[]'::jsonb, 'Điểm cuối dịch vụ Mạng ảo hỗ trợ Microsoft.Storage và Microsoft.Web, do đó, tài khoản lưu trữ và ứng dụng web Azure App Service có thể được truy cập thông qua các điểm cuối dịch vụ tương ứng của chúng; máy ảo Microsoft.Compute không thể. Chính sách Service endpoint cung cấp tính năng lọc danh sách cho phép đối với lưu lượng truy cập đến tài khoản Azure Storage qua điểm cuối dịch vụ, do đó chỉ tài khoản lưu trữ mới hỗ trợ chúng.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783966876960-5vkijlq3.png', 'published'),
  ('az500-296', 'az-500', 296, 'You have an Azure subscription that includes an Azure key vault.  
  
You need to set the maximum number of days that newly created keys can remain valid. The solution must minimize administrative effort.  
  
What should you use?', '[{"key":"A","text":"Azure Purview"},{"key":"B","text":"Key Vault properties"},{"key":"C","text":"Azure Blueprints"},{"key":"D","text":"Azure Policy"}]'::jsonb, '["D"]'::jsonb, 'Chính sách Azure cung cấp chính sách **Khóa tích hợp phải có thời hạn hiệu lực tối đa được chỉ định**. Việc chỉ định số ngày tối đa bắt buộc sẽ quản lý các khóa Key Vault ở phạm vi đã chọn và có thể kiểm tra hoặc từ chối các khóa không tuân thủ, tránh việc quản lý thủ công theo từng khóa.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-297', 'az-500', 297, 'You have an Azure subscription containing a virtual network. The virtual network includes the subnets shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953194781-x9lkjfp7.png)  
  
The subscription includes the virtual machines shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953197068-v97b2g9v.png)  
  
You enable just-in-time (JIT) VM access for every virtual machine.  
  
You need to determine which virtual machines are protected by JIT.  
  
Which virtual machines should you identify?', '[{"key":"A","text":"VM4 only"},{"key":"B","text":"VM1 and VM3 only"},{"key":"C","text":"VM1, VM3 and VM4 only"},{"key":"D","text":"VM1, VM2, VM3, and VM4"}]'::jsonb, '["C"]'::jsonb, 'Quyền truy cập VM đúng lúc yêu cầu cấu hình NSG hoặc Azure Firewall vì cấu hình này kiểm soát quyền truy cập quản lý gửi đến bằng cách quản lý các quy tắc mạng. NSG có thể áp dụng ở cấp độ mạng con hoặc cấp độ giao diện mạng. VM1 và VM3 được bao phủ bởi NSG được liên kết với Subnet1 và VM4 được bao phủ bởi NSG được liên kết với bộ điều hợp mạng của nó. VM2 không có NSG cấp mạng con cũng như cấp bộ điều hợp mạng, do đó nó không được JIT bảo vệ.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953194781-x9lkjfp7.png', 'published'),
  ('az500-298', 'az-500', 298, 'You use Azure Resource Manager templates to deploy Azure virtual machines.  
  
You have been tasked with ensuring that unused Windows features are automatically disabled when virtual-machine instances are provisioned.  
  
Which of the following actions should you take?', '[{"key":"A","text":"You should make use of Azure DevOps."},{"key":"B","text":"You should make use of Azure Automation State Configuration."},{"key":"C","text":"You should make use of network security groups (NSG)."},{"key":"D","text":"You should make use of Azure Blueprints."}]'::jsonb, '["B"]'::jsonb, 'Cấu hình trạng thái tự động hóa Azure áp dụng Cấu hình trạng thái mong muốn PowerShell (DSC) cho máy ảo Azure và duy trì cấu hình được chỉ định theo thời gian. Tài nguyên DSC `WindowsFeature` có thể đặt một tính năng Windows không được sử dụng thành `Ensure = ''Absent''`, tự động thực thi trạng thái vô hiệu hóa của tính năng đó.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-299', 'az-500', 299, 'You have an Azure Active Directory (Azure AD) tenant and a root management group. You created 10 Azure subscriptions and added them to the root management group.  
  
You need to create an Azure Blueprints definition that will be stored in the root management group.  
  
What should you do first?', '[{"key":"A","text":"Modify the role-based access control (RBAC) role assignments for the root management group."},{"key":"B","text":"Add an Azure Policy definition to the root management group."},{"key":"C","text":"Create a user-assigned identity."},{"key":"D","text":"Create a service principal."}]'::jsonb, '["A"]'::jsonb, 'Các quyền của Azure RBAC tách biệt với vai trò thư mục Azure AD, do đó, việc có quyền Quản trị viên toàn cầu trong Azure AD không tự động cấp quyền quản lý tài nguyên, chẳng hạn như định nghĩa Blueprint, ở phạm vi nhóm quản lý. Để tạo và lưu định nghĩa Blueprint trong nhóm quản lý gốc, trước tiên, tài khoản phải được cấp vai trò RBAC thích hợp (chẳng hạn như Chủ sở hữu hoặc Người đóng góp Blueprint) ở phạm vi nhóm quản lý đó. Do đó, bước đầu tiên cần thiết là sửa đổi các phân công vai trò RBAC trên nhóm quản lý gốc để có sẵn các quyền cần thiết trước khi có thể tạo định nghĩa Blueprint ở đó.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-300', 'az-500', 300, 'HOTSPOT –  
  
You have an Azure Active Directory (Azure AD) tenant containing the users shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954554394-jwm0luor.png)  
  
The tenant includes the named locations shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954557459-ldh45gzi.png)  
  
You create Conditional Access policies for a cloud app named App1, as shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954559655-78xwdahd.png)  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"User1 can access App1 from an IP address of 154.12.18.10.","correctAnswer":"Yes"},{"id":"2","text":"User2 can access App1 from an IP address of 193.77.10.15.","correctAnswer":"Yes"},{"id":"3","text":"User2 can access App1 from an IP address of 154.12.18.34.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:Yes","2:Yes","3:No"]'::jsonb, 'Quyền truy cập có điều kiện đánh giá tất cả các chính sách hiện hành. Người dùng1 bị loại khỏi Chính sách1 thông qua tư cách thành viên Nhóm2, vì vậy chỉ Chính sách2 yêu cầu MFA và quyền truy cập có thể được cấp sau MFA. Người dùng2 tuân theo Chính sách4, do đó, quyền đăng nhập vào Seattle có thể được cấp sau MFA. Tại địa chỉ Boston, Chính sách 3 áp dụng cho Người dùng 2 và chặn quyền truy cập; kiểm soát truy cập khối được ưu tiên hơn các kiểm soát cấp. Việc tắt MFA cho mỗi người dùng không ngăn cản Truy cập có điều kiện yêu cầu MFA.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783954554394-jwm0luor.png', 'published'),
  ('az500-302', 'az-500', 302, 'You have an Azure subscription containing an Azure SQL database named DB1 in the East US Azure region.  
  
You create the storage accounts shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783955194915-9tyy5pfo.jpg)  
  
You plan to enable auditing for DB1. Which storage accounts can be used as the auditing destination for DB1?', '[{"key":"A","text":"storage1 and storage4 only"},{"key":"B","text":"storage1 only"},{"key":"C","text":"storage1, storage2, storage3, and storage4"},{"key":"D","text":"storage1, storage2, and storage3 only"},{"key":"E","text":"storage2 and storage3 only"}]'::jsonb, '["B"]'::jsonb, 'Đối với cấu hình này, quá trình kiểm tra Azure SQL Database yêu cầu tài khoản lưu trữ Tiêu chuẩn trong cùng vùng Azure với cơ sở dữ liệu. storage1 là tài khoản duy nhất vừa Tiêu chuẩn vừa nằm ở Đông Hoa Kỳ; storage4 nằm ở East US 2, còn storage2 và storage3 sử dụng hiệu suất Cao cấp.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783955194915-9tyy5pfo.jpg', 'published'),
  ('az500-303', 'az-500', 303, 'You have an Azure subscription containing the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953067493-nwgugdtr.png)  
  
The IP address `10.1.0.4` is assigned to VM5. VM5 has no public IP address.  
  
VM5 has just-in-time (JIT) VM access configured as shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953070076-oivsxllq.jpg)  
  
You enable JIT VM access for VM5. NSG1 has the inbound rules displayed in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953073733-2jo4vdhp.png)  
  
For each statement below, select **Yes** if it is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"Deleting the security rule that has a priority of 100 will revoke the approved JIT access request.","correctAnswer":"Yes"},{"id":"2","text":"Remote Desktop access to VM5 is blocked.","correctAnswer":"No"},{"id":"3","text":"An Azure Bastion host will enable Remote Desktop access to VM5 from the internet.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:Yes","2:No","3:Yes"]'::jsonb, 'JIT tạo quy tắc cho phép NSG tạm thời cho yêu cầu được phê duyệt; việc xóa quy tắc cho phép ưu tiên-100 đó sẽ xóa quyền truy cập đã được phê duyệt. Các quy tắc NSG được đánh giá theo thứ tự ưu tiên tăng dần, do đó, quy tắc ưu tiên-100 cho phép cổng 3389 được ưu tiên hơn quy tắc từ chối ưu tiên-1000 JIT. Azure Bastion cung cấp kết nối RDP thông qua dịch vụ Bastion tới địa chỉ IP riêng của VM mà không yêu cầu địa chỉ IP công cộng trên VM.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953067493-nwgugdtr.png', 'published'),
  ('az500-304', 'az-500', 304, 'You have a web app hosted on an on-premises server and accessed by using the URL `https://www.contoso.com`.  
  
You plan to migrate the web app to Azure and will continue using `https://www.contoso.com`.  
  
You need to enable HTTPS for the Azure web app.  
  
What should you do first?', '[{"key":"A","text":"Export the public key from the on-premises server and save the key as a P7b file."},{"key":"B","text":"Export the private key from the on-premises server and save the key as a PFX file that is encrypted by using TripleDES."},{"key":"C","text":"Export the public key from the on-premises server and save the key as a CER file."},{"key":"D","text":"Export the private key from the on-premises server and save the key as a PFX file that is encrypted by using AES256."}]'::jsonb, '["B"]'::jsonb, 'Liên kết TLS/SSL Azure App Service yêu cầu chứng chỉ PFX bao gồm khóa riêng; Các tệp CER và P7B chỉ có khóa công khai không thể thiết lập danh tính HTTPS của máy chủ. Để có khả năng tương thích PFX cần thiết, hãy xuất chứng chỉ bằng khóa riêng của nó bằng mã hóa TripleDES. Tài liệu Dịch vụ ứng dụng của Microsoft lưu ý rằng các tệp PFX sử dụng AES256 có thể yêu cầu ghi đè mật mã để sử dụng 3DES để hỗ trợ Dịch vụ ứng dụng.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-305', 'az-500', 305, '$35', '{"statements":[{"id":"1","text":"User1 is required to use number matching during sign-in.","correctAnswer":"No"},{"id":"2","text":"User2 is required to use number matching during sign-in.","correctAnswer":"Yes"},{"id":"3","text":"User3 is required to use number matching during sign-in.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:Yes","3:No"]'::jsonb, 'CAPolicy1 chỉ yêu cầu MFA cho các thành viên Group1. Việc khớp số chỉ được bật cho mục tiêu Group2 và cấu hình chỉ áp dụng cho những người dùng cũng nằm trong nhóm mục tiêu Microsoft Authenticator (Group1). Do đó, Người dùng2, thuộc cả hai nhóm, phải sử dụng phương pháp khớp số; Người dùng1 thiếu tư cách thành viên Nhóm2 và Người dùng3 thiếu tư cách thành viên Nhóm1 và không tuân theo chính sách Truy cập có điều kiện MFA.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-306', 'az-500', 306, 'You are investigating a security problem with an Azure Storage account.  
  
You enable diagnostic logging for the storage account. What should you use to retrieve the diagnostic logs?', '[{"key":"A","text":"Azure Storage Explorer"},{"key":"B","text":"SQL query editor in Azure"},{"key":"C","text":"File Explorer in Windows"},{"key":"D","text":"Azure Security Center"}]'::jsonb, '["A"]'::jsonb, 'Nhật ký chẩn đoán Bộ nhớ Azure được lưu trữ trong vùng chứa blob `$logs` của tài khoản và có thể được xem hoặc truy xuất bằng cách sử dụng Microsoft Azure Storage Explorer.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-307', 'az-500', 307, 'You have an Azure AD tenant that contains users assigned Azure AD Premium P2 licenses.  
  
A partner company has a domain named fabrikam.com. The fabrikam.com domain includes a user named User1, whose email address is [email protected].  
  
You need to give User1 access to the resources in the tenant. The solution must meet these requirements:  
  
- User1 must be able to sign in using the [email protected] credentials.  
- You must be able to grant User1 access to resources in the tenant.  
- Administrative effort must be minimized.  
  
What should you do?', '[{"key":"A","text":"Create a user account for User1."},{"key":"B","text":"To the tenant, add fabrikam.com as a custom domain."},{"key":"C","text":"Create an invite for User1."},{"key":"D","text":"Set Enable guest self-service sign up via user flows to Yes for the tenant."}]'::jsonb, '["C"]'::jsonb, 'Lời mời Microsoft Entra B2B tạo người dùng khách trong đối tượng thuê. Khách đăng nhập bằng thông tin đăng nhập bên ngoài hiện có của họ và có thể được chỉ định quyền truy cập vào các ứng dụng, nhóm và các tài nguyên được chia sẻ khác, tránh việc tạo và duy trì một tài khoản đối tượng thuê riêng.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-308', 'az-500', 308, 'You have an Azure subscription containing an Azure Files share named share1 and a user named User1. Identity-based authentication is configured for share1.  
  
User1 tries to access share1 from a Windows 10 device by using SMB.  
  
Which type of token does Azure Files use to authorize the request?', '[{"key":"A","text":"OAuth 2.0"},{"key":"B","text":"JSON Web Token (JWT)"},{"key":"C","text":"SAML"},{"key":"D","text":"Kerberos"}]'::jsonb, '["D"]'::jsonb, 'Azure Files sử dụng Kerberos để xác thực dựa trên danh tính qua SMB. Máy khách SMB xuất trình một vé dịch vụ Kerberos mà Azure Files sử dụng để cấp quyền truy cập theo các quyền cấp chia sẻ đã được định cấu hình và Windows ACL.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-309', 'az-500', 309, 'You have an Azure Active Directory (Azure AD) tenant containing 500 users and an administrative unit named AU1.  
  
From the Azure Active Directory admin center, you plan to add the users to AU1 by using **Bulk add members**.  
  
You need to create and upload a file for the bulk addition.  
  
What should the file include?', '[{"key":"A","text":"only the display name of each user"},{"key":"B","text":"only the user principal name (UPN) of each user"},{"key":"C","text":"only the user principal name (UPN) and display name of each user"},{"key":"D","text":"only the user principal name (UPN) and object identifier of each user"},{"key":"E","text":"only the object identifier of each user"}]'::jsonb, '["B"]'::jsonb, 'Để thêm hàng loạt người dùng vào đơn vị quản trị Azure AD, mẫu CSV sẽ xác định từng người dùng theo tên chính của người dùng (UPN), với một UPN được nhập trên mỗi hàng. Tên hiển thị không phải là số nhận dạng cho thao tác này và tệp không yêu cầu số nhận dạng đối tượng được ghép nối.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-310', 'az-500', 310, 'You have an Azure subscription containing the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783957438882-zv3chxej.png)  
  
You need to configure **storage1** so that its keys are regenerated automatically every 90 days.  
  
Which cmdlet should you run?', '[{"key":"A","text":"Add-AzKeyVaultflanagedStorageAccount"},{"key":"B","text":"Set-AzStorageAccountManagementPolicy"},{"key":"C","text":"Set-AzStorageAccount"},{"key":"D","text":"Add-AzStorageAccountManagementPolicyAction"}]'::jsonb, '["A"]'::jsonb, '`Add-AzKeyVaultManagedStorageAccount` thêm tài khoản lưu trữ hiện có vào Azure Key Vault cho các khóa lưu trữ do Key Vault quản lý. Tham số `-RegenerationPeriod` của nó đặt khoảng thời gian sau đó khóa không hoạt động được tạo lại và kích hoạt; `TimeSpan` 90 ngày định cấu hình xoay vòng 90 ngày tự động. Chính sách quản lý tài khoản lưu trữ áp dụng cho việc quản lý vòng đời dữ liệu thay vì tái tạo khóa truy cập.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783957438882-zv3chxej.png', 'published'),
  ('az500-311', 'az-500', 311, 'You have an Azure subscription containing the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783960421054-snkmny38.png)  
  
SQL1 has these configurations:  
  
- Auditing: Enabled  
- Audit log destination: storage1, Workspace1  
  
DB1 has these configurations:  
  
- Auditing: Enabled  
- Audit log destination: storage2  
  
DB2 has auditing disabled.  
  
Where are the audit logs for DB1 and DB2 stored?', '[]'::jsonb, '[]'::jsonb, 'Chính sách kiểm tra máy chủ logic Azure SQL áp dụng cho tất cả các cơ sở dữ liệu của nó bất kể cài đặt kiểm tra cơ sở dữ liệu riêng lẻ của chúng. Kiểm tra cấp cơ sở dữ liệu chạy song song, thay vì thay thế, kiểm tra cấp máy chủ. Do đó, DB1 ghi thông qua chính sách máy chủ vào storage1 và Workspace1 và thông qua chính sách cơ sở dữ liệu của nó vào storage2; DB2 ghi thông qua chính sách máy chủ vào storage1 và Workspace1.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783960421054-snkmny38.png', 'published'),
  ('az500-312', 'az-500', 312, 'You have an Azure subscription that contains the Azure virtual machines shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953180164-dztntk5j.png)  
  
You create an MDM Security Baseline profile named Profile1.  
  
You need to identify the virtual machines to which Profile1 can be applied.  
  
Which virtual machines should you identify?', '[{"key":"A","text":"VM1 only"},{"key":"B","text":"VM1, VM2, and VM3 only"},{"key":"C","text":"VM1 and VM3 only"},{"key":"D","text":"VM1, VM2, VM3, and VM4"}]'::jsonb, '["A"]'::jsonb, 'Cơ sở bảo mật MDM của Microsoft được thiết kế cho các thiết bị khách Windows, bao gồm Windows 10 trở lên. Windows Server 2016, Windows Server 2019 và Ubuntu Server 18.04 LTS không phải là mục tiêu cho đường cơ sở này, vì vậy chỉ có máy ảo Windows 10 mới đủ điều kiện.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953180164-dztntk5j.png', 'published'),
  ('az500-313', 'az-500', 313, 'You have an Azure subscription named Sub1 that contains the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953053739-3seza5on.png)  
  
You need to ensure that VM1 can securely access a database on SQL1 by using a contained database user.  
  
What should you do?', '[{"key":"A","text":"Enable a managed identity on VM1."},{"key":"B","text":"Create a secret in KV1."},{"key":"C","text":"Configure a service endpoint on SQL1."},{"key":"D","text":"Create a key in KV1."}]'::jsonb, '["A"]'::jsonb, 'managed identity cung cấp cho VM1 danh tính Microsoft Entra có thể xác thực với Azure SQL mà không cần thông tin xác thực do ứng dụng quản lý. Azure SQL hỗ trợ tạo người dùng cơ sở dữ liệu chứa cho managed identity bằng cách sử dụng `CREATE USER. FROM EXTERNAL PROVIDER`, sau đó có thể cấp các quyền cơ sở dữ liệu cần thiết.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953053739-3seza5on.png', 'published'),
  ('az500-314', 'az-500', 314, 'You have an Azure subscription containing a web app named App1. App1 delivers product images and videos to users. Users reach App1 by using the URL `HTTPS://app1.contoso.com`.  
  
You deploy two server pools named Pool1 and Pool2. Pool1 hosts product images, and Pool2 hosts product videos.  
  
You need to optimize App1 performance. The solution must meet these requirements:  
  
- Minimize the performance effect of TLS connections on Pool1 and Pool2.  
- Route user requests to the server pools according to the requested URL path.  
  
What should you include in the solution?', '[{"key":"A","text":"Azure Bastion"},{"key":"B","text":"Azure Front Door"},{"key":"C","text":"Azure Traffic Manager"},{"key":"D","text":"Azure Application Gateway"}]'::jsonb, '["B"]'::jsonb, 'Azure Front Door giảm tải các kết nối TLS của máy khách tại các điểm hiện diện ở biên và áp dụng các quy tắc định tuyến phù hợp với đường dẫn URL, chuyển tiếp từng yêu cầu đến nhóm gốc thích hợp. Điều này làm giảm công việc xử lý TLS trên nhóm máy chủ hình ảnh và video trong khi vẫn cho phép định tuyến dựa trên đường dẫn.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-315', 'az-500', 315, 'You have the Azure key vaults shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953206719-1aecw9ce.png)  
  
KV1 contains a secret named Secret1 and a key for a managed storage account named Key1. You back up Secret1 and Key1.  
  
Identify the key vaults to which you can restore each backup.', '[]'::jsonb, '[]'::jsonb, 'Bản sao lưu Key Vault phải được khôi phục vào vault trong cùng một đăng ký và địa lý Azure làm nguồn của nó. Đông Hoa Kỳ và Tây Hoa Kỳ nằm trong khu vực địa lý của Hoa Kỳ, vì vậy các kho lưu trữ Subscription1 KV1, KV2 và KV3 là các điểm đến hợp lệ. KV4 và KV5 nằm trong Subscription2 nên chúng không hợp lệ để sao lưu.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953206719-1aecw9ce.png', 'published'),
  ('az500-316', 'az-500', 316, 'You have an Azure subscription named Subscription1 that contains the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953217583-6769vock.png)  
  
You need to determine which initiatives and policies can be added to Subscription1 by using Azure Security Center.  
  
What should you identify?', '[{"key":"A","text":"Policy1 and Policy2 only"},{"key":"B","text":"Initiative1 only"},{"key":"C","text":"Initiative1 and Initiative2 only"},{"key":"D","text":"Initiative1, Initiative2, Policy1, and Policy2"}]'::jsonb, '["C"]'::jsonb, 'Trung tâm Bảo mật Azure hỗ trợ đưa vào các định nghĩa sáng kiến ​​Chính sách Azure tùy chỉnh, là tập hợp các định nghĩa chính sách. Không thể thêm trực tiếp các định nghĩa chính sách độc lập thông qua trải nghiệm sáng kiến ​​tùy chỉnh và danh mục sáng kiến ​​là siêu dữ liệu chứ không phải là hạn chế về tính đủ điều kiện. Vì vậy, cả hai định nghĩa sáng kiến ​​đều có thể được thêm vào.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953217583-6769vock.png', 'published'),
  ('az500-317', 'az-500', 317, 'You have been tasked with enabling Advanced Threat Protection for an Azure SQL Database server.  
  
Advanced Threat Protection must be configured to identify all threat-detection types.  
  
Which of the following occurs when an application generates a faulty SQL statement in the database?', '[{"key":"A","text":"A Potential SQL injection alert is triggered."},{"key":"B","text":"A Vulnerability to SQL injection alert is triggered."},{"key":"C","text":"An Access from a potentially harmful application alert is triggered."},{"key":"D","text":"A Brute force SQL credentials alert is triggered."}]'::jsonb, '["B"]'::jsonb, 'Câu lệnh SQL bị lỗi do ứng dụng tạo ra cho biết có thể có lỗ hổng chèn SQL, thường do cấu trúc truy vấn bị lỗi hoặc đầu vào không được chuẩn hóa. Bộ bảo vệ Microsoft dành cho SQL phân loại tình trạng này dưới dạng cảnh báo lỗ hổng bảo mật SQL; Thay vào đó, một cảnh báo tiềm ẩn về việc tiêm SQL cho biết nỗ lực đang hoạt động nhằm khai thác một ứng dụng dễ bị tấn công đã được xác định.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-318', 'az-500', 318, 'You have 20 Azure subscriptions and a security group named Group1. The subscriptions are child resources of the root management group.  
  
Every subscription contains a resource group named RG1.  
  
Ensure that RG1 in every subscription meets these requirements:  
  
- Members of Group1 receive the Owner role.  
- Changes to permissions for RG1 are prevented.  
  
What should you do?', '[]'::jsonb, '[]'::jsonb, 'Bản thiết kế Azure có thể bao gồm cấu phần phần mềm gán vai trò RBAC cho một nhóm tài nguyên và có thể được sử dụng nhất quán trên các đăng ký. Nhiệm vụ Blueprint được định cấu hình với chế độ khóa sẽ tạo ra nhiệm vụ từ chối Azure RBAC, ngăn chặn các hành động được bảo vệ—bao gồm cả thay đổi quyền—được thực hiện ngay cả bởi một hiệu trưởng được ủy quyền khác. Bản thiết kế Azure sắp ngừng hoạt động nhưng đây là chức năng chính xác trong số các lựa chọn được liệt kê.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-319', 'az-500', 319, 'HOTSPOT -  
  
You have the Azure Information Protection labels shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783952070839-x5gcfqpi.png)  
  
You have the Azure Information Protection policies shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783952073037-4cdyvul4.png)  
  
You need to determine how Azure Information Protection will label files. Identify the appropriate results.', '[]'::jsonb, '[]'::jsonb, 'Các điều kiện phân loại tự động trong Azure Information Protection/Microsoft Purview so sánh chuỗi điều kiện với nội dung tài liệu bằng cách sử dụng cài đặt phân biệt chữ hoa chữ thường được định cấu hình của nhãn: Nhãn1 yêu cầu khớp chính xác với chữ "Trắng" và Nhãn2 khớp với "Đen" bất kể chữ hoa chữ thường. Tự động ghi nhãn chỉ đánh giá nội dung bên trong các ứng dụng Office được hỗ trợ (Word, Excel, PowerPoint, Outlook); các tệp văn bản thuần túy được tạo trong Notepad hoàn toàn không được xử lý bởi công cụ phân loại, do đó nhãn no luôn tự động được áp dụng cho chúng ngay cả khi văn bản phù hợp với một điều kiện.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783952070839-x5gcfqpi.png', 'published'),
  ('az500-320', 'az-500', 320, 'You have an Azure subscription containing a resource group named RG1 and the identities shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783957573460-apvxf41m.png)  
  
You assign the Contributor role for RG1 to Group4.  
  
Which identities can be added as members of Group4?', '[{"key":"A","text":"User1 only"},{"key":"B","text":"User1 and Group3 only"},{"key":"C","text":"User1, Group1, and Group3 only"},{"key":"D","text":"User1, Group2, and Group3 only"},{"key":"E","text":"User1, Group1, Group2, and Group3"}]'::jsonb, '["A"]'::jsonb, 'Group4 là nhóm bảo mật Microsoft Entra có thể gán vai trò vì các vai trò Azure AD có thể được gán cho nhóm đó. Việc lồng nhóm không được hỗ trợ cho các nhóm được gán vai trò, do đó không thể thêm Group1, Group2 và Group3 vào Group4. Người dùng có thể là thành viên của nhóm; do đó, chỉ có thể thêm Người dùng1.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783957573460-apvxf41m.png', 'published'),
  ('az500-321', 'az-500', 321, 'You have an Azure subscription that uses Microsoft Defender for Cloud.  
  
You have an Amazon Web Services (AWS) account.  
  
You need to ensure that, when you deploy a new AWS Elastic Compute Cloud (EC2) instance, the Microsoft Defender for Servers agent is installed automatically.  
  
What should you configure first?', '[{"key":"A","text":"the classic cloud connector"},{"key":"B","text":"the Azure Monitor agent"},{"key":"C","text":"the Log Analytics agent"},{"key":"D","text":"the native cloud connector"}]'::jsonb, '["D"]'::jsonb, 'Trình kết nối đám mây AWS gốc là kết nối bắt buộc giữa tài khoản AWS và Microsoft Defender for Cloud. Cấu hình Defender for Servers của nó hỗ trợ tự động triển khai các phiên bản EC2, bao gồm cả việc cung cấp tác nhân Azure Arc, cho phép bảo vệ Defender for Servers. Tác nhân Azure Monitor và tác nhân Log Analytics không được sử dụng để thiết lập tích hợp AWS này; tác nhân Log Analytics đã ngừng hoạt động đối với Defender for Servers.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-322', 'az-500', 322, 'You have an Azure subscription containing a resource group named RG1 and the network security groups (NSGs) shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783960399249-lc0pn5d7.png)  
  
You create and assign the Azure Policy shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783960407345-azkrhi4i.png)  
  
What will the flow log status be for NSG1 and NSG2 after the Azure Policy is assigned?', '[{"key":"A","text":"Flow logs will be enabled for NSG1 only."},{"key":"B","text":"Flow logs will be enabled for NSG2 only."},{"key":"C","text":"Flow logs will be enabled for NSG1 and NSG2."},{"key":"D","text":"Flow logs will be disabled for NSG1 and NSG2."}]'::jsonb, '["D"]'::jsonb, 'NSG1 bị loại trừ khỏi phạm vi chuyển nhượng và không được chính sách đánh giá. NSG2 được đánh giá, nhưng hiệu ứng Kiểm tra chỉ ghi lại sự không tuân thủ và không làm thay đổi cấu hình tài nguyên hoặc tạo ra hoạt động triển khai khắc phục. Do đó, cả NSG đều không bật nhật ký luồng và cả hai vẫn bị tắt.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783960399249-lc0pn5d7.png', 'published'),
  ('az500-323', 'az-500', 323, 'Your company''s Azure subscription contains an Azure Log Analytics workspace.  
  
Your company has one hundred on-premises servers running either Windows Server 2012 R2 or Windows Server 2016 that are connected to the Azure Log Analytics workspace. The workspace is configured to collect security-related performance counters from these connected servers.  
  
You are responsible for configuring alerts based on the information collected by the Azure Log Analytics workspace.  
  
You must ensure that alert rules support dimensions and that alert-creation time is minimized. In addition, a single alert notification must be generated when the alert is created and when it is resolved.  
  
You need to use the required signal type when creating the alert rules.  
  
Which of the following options should you use?', '[{"key":"A","text":"You should make use of the Activity log signal type."},{"key":"B","text":"You should make use of the Application Log signal type."},{"key":"C","text":"You should make use of the Metric signal type."},{"key":"D","text":"You should make use of the Audit Log signal type."}]'::jsonb, '["C"]'::jsonb, 'Quy tắc cảnh báo số liệu Azure Monitor hỗ trợ thứ nguyên, cho phép giám sát chuỗi thời gian số liệu cụ thể thay vì chỉ các giá trị tổng hợp. Cảnh báo số liệu có thể có trạng thái, do đó chúng sẽ gửi thông báo khi điều kiện kích hoạt và thông báo đã giải quyết khi điều kiện đó được xóa. Điều này làm cho loại tín hiệu Số liệu phù hợp để cảnh báo bộ đếm hiệu suất với các yêu cầu về thông báo kích thước và độ phân giải.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-324', 'az-500', 324, 'You have an Azure subscription named Sub1 that contains an Azure Storage account named contosostorage1 and an Azure key vault named Contosokeyvault1.  
  
You plan to create an Azure Automation runbook that will rotate the keys of contosostorage1 and store them in Contosokeyvault1.  
  
You need to implement prerequisites to ensure that you can implement the runbook.  
  
Which three actions should you perform in sequence?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"B"},{"id":"step2","text":"Slot 2:","correctAnswer":"C"},{"id":"step3","text":"Slot 3:","correctAnswer":"A"}],"choices":[{"key":"A","text":"Run Set-AzKeyVaultAccessPolicy."},{"key":"B","text":"Create an Azure Automation account."},{"key":"C","text":"Import PowerShell modules to the Azure Automation account."},{"key":"D","text":"Create a user-assigned managed identity."},{"key":"E","text":"Create a connection resource in the Azure Automation account."}]}'::jsonb, '["step1=B","step2=C","step3=A"]'::jsonb, 'Tài khoản Tự động hóa phải được tạo trước khi có thể nhập mô-đun vào đó. Mô-đun PowerShell cung cấp các lệnh ghép ngắn Storage và Key Vault mà runbook cần. Set-AzKeyVaultAccessPolicy cấp cho danh tính Run As của tài khoản Tự động hóa quyền truy cập cần thiết vào kho khóa. Tài nguyên kết nối hoặc danh tính do người dùng chỉ định riêng biệt là không cần thiết cho thiết kế này.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-325', 'az-500', 325, 'You need to implement the planned changes for OU2 and User1. Which tools should you use?  
  
Each tool can be used once, more than once, or not at all.', '{"statements":[{"id":"ou2","text":"OU2:","correctAnswer":"B"},{"id":"user1","text":"User1:","correctAnswer":"A"}],"choices":[{"key":"A","text":"The Azure portal"},{"key":"B","text":"Azure AD Connect"},{"key":"C","text":"The Active Directory admin center"},{"key":"D","text":"Active Directory Sites and Services"},{"key":"E","text":"Active Directory Users and Computers"}]}'::jsonb, '["ou2=B","user1=A"]'::jsonb, 'Azure AD Connect định cấu hình phạm vi đồng bộ hóa, bao gồm lọc dựa trên OU, giữa Active Directory và Microsoft Entra ID tại chỗ. Tư cách thành viên nhóm đám mây có thể được quản lý trong trung tâm quản trị Microsoft Entra thông qua cổng Azure.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-326', 'az-500', 326, 'You have an Azure subscription containing the virtual machines shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783957473757-uvtbz55z.png)  
  
VNET1, VNET2, and VNET3 are peered with one another.  
  
You perform these actions:  
  
- Create two application security groups named ASG1 and ASG2 in the West US region.  
- Add VM1’s network interface to ASG1.  
  
The network interfaces of which virtual machines can be added to ASG1 and ASG2?', '[]'::jsonb, '[]'::jsonb, 'Tất cả các giao diện mạng trong nhóm bảo mật ứng dụng phải nằm trong cùng một mạng ảo và ASG phải ở cùng khu vực với các giao diện. ASG1 đã có VM1 trong VNET1 ở Tây Hoa Kỳ, vì vậy chỉ có thể thêm VM2, cũng có trong VNET1 và Tây Hoa Kỳ. ASG2 trống nên nó có thể chứa các giao diện Tây Mỹ của VM1, VM2 và VM4; VM3 bị loại trừ vì nó nằm ở miền Trung Hoa Kỳ. VNet peering không làm cho các VNet riêng biệt đủ điều kiện cùng tồn tại trong cùng một ASG.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783957473757-uvtbz55z.png', 'published'),
  ('az500-327', 'az-500', 327, 'You have a Microsoft 365 tenant that uses an Azure Active Directory (Azure AD) tenant. The Azure AD tenant synchronizes with an on-premises Active Directory domain by using an Azure AD Connect instance.  
  
You create a new Azure subscription.  
  
You discover that the synchronized on-premises user accounts cannot be assigned roles in the new subscription.  
  
You need to ensure that you can assign Azure and Microsoft 365 roles to the synchronized Azure AD user accounts.  
  
What should you do first?', '[{"key":"A","text":"Configure the Azure AD tenant used by the new subscription to use pass-through authentication."},{"key":"B","text":"Configure the Azure AD tenant used by the new subscription to use federated authentication."},{"key":"C","text":"Change the Azure AD tenant used by the new subscription."},{"key":"D","text":"Configure a second instance of Azure AD Connect."}]'::jsonb, '["C"]'::jsonb, 'Đăng ký Azure tin tưởng một đối tượng thuê Microsoft Entra ID để xác thực, ủy quyền và nhận dạng Azure RBAC. Việc liên kết gói đăng ký với đối tượng thuê Azure AD được đồng bộ hóa với miền Active Directory tại chỗ giúp các tài khoản người dùng được đồng bộ hóa sẵn sàng cho các nhiệm vụ gán vai trò Azure trong khi vẫn giữ lại danh tính thư mục Microsoft 365 của họ. Xác thực chuyển tiếp, liên kết và máy chủ Azure AD Connect khác không thay đổi đối tượng thuê được liên kết với đăng ký.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-329', 'az-500', 329, 'You have an Azure AD tenant named contoso.com that contains the users shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783957573990-y8w0h7vt.png)  
  
You add enterprise applications to contoso.com as shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783957575991-bwgs93m2.png)  
  
You need to identify which users can grant admin consent for App1 and App2.', '[]'::jsonb, '[]'::jsonb, 'Quản trị viên ứng dụng có thể cấp sự đồng ý cho các ứng dụng doanh nghiệp. Chủ sở hữu ứng dụng doanh nghiệp có cùng quyền đối với ứng dụng đó. Do đó, Người dùng1 và Người dùng3 có thể cấp sự đồng ý cho Ứng dụng1, trong khi Người dùng1 và Người dùng4 có thể cấp sự đồng ý cho Ứng dụng2. Việc gán ứng dụng và các vai trò được liệt kê khác không cấp quyền này.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783957573990-y8w0h7vt.png', 'published'),
  ('az500-330', 'az-500', 330, 'You have an Azure Storage account containing a blob container named container1 and a client application named App1.  
  
You need to allow App1 to access container1 by using Azure Active Directory (Azure AD) authentication.  
  
What should you do?', '[]'::jsonb, '[]'::jsonb, 'Việc đăng ký ứng dụng sẽ tạo ra ứng dụng/service principal mà Microsoft Entra ID có thể xác thực. Sau đó, Azure Storage ủy quyền cho nguyên tắc bảo mật đó thông qua vai trò truy cập dữ liệu Azure RBAC, chẳng hạn như Trình đọc dữ liệu Storage Blob hoặc Người đóng góp dữ liệu Storage Blob, được chỉ định ở phạm vi vùng chứa hoặc tài khoản lưu trữ thông qua Kiểm soát truy cập (IAM).', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-331', 'az-500', 331, 'You have an Azure subscription that uses Microsoft Defender for Cloud. The subscription includes an Azure Database for PostgreSQL instance.  
  
You need to make sure an email alert is triggered when a suspected brute-force attack against the database is detected. The solution must minimize administrative effort.  
  
What should you configure?', '[{"key":"A","text":"the Azure Monitor activity log"},{"key":"B","text":"an Azure Monitor alert rule"},{"key":"C","text":"Microsoft Defender for open-source relational databases"},{"key":"D","text":"the PostgreSQL Audit extension (pgAudit)"}]'::jsonb, '["C"]'::jsonb, 'Bộ bảo vệ Microsoft dành cho cơ sở dữ liệu quan hệ nguồn mở cung cấp khả năng phát hiện mối đe dọa tích hợp cho Cơ sở dữ liệu Azure cho PostgreSQL, bao gồm các cuộc tấn công bạo lực bị nghi ngờ và đưa ra cảnh báo của Bộ bảo vệ cho đám mây bằng thông báo qua email. Điều này tránh việc tạo và duy trì logic giám sát tùy chỉnh hoặc cảnh báo dựa trên kiểm tra.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-333', 'az-500', 333, 'You have a hybrid Azure Active Directory (Azure AD) configuration with Single Sign-On (SSO) enabled. An Azure SQL Database instance is configured to support Azure AD authentication.  
  
Database developers must connect to the database instance from a domain-joined device and authenticate by using their on-premises Active Directory account.  
  
You need to ensure that developers can connect to the instance by using Microsoft SQL Server Management Studio. The solution must minimize authentication prompts.  
  
Which authentication method should you recommend?', '[{"key":"A","text":"Active Directory - Password"},{"key":"B","text":"Active Directory - Universal with MFA support"},{"key":"C","text":"SQL Server Authentication"},{"key":"D","text":"Active Directory - Integrated"}]'::jsonb, '["D"]'::jsonb, 'Xác thực Microsoft Entra Integrated (trước đây là Active Directory - Integrated) sử dụng thông tin xác thực miền của người dùng Windows đã đăng nhập trong môi trường nhận dạng kết hợp. Nó hỗ trợ đăng nhập một lần vào Azure SQL Database từ một thiết bị đã tham gia miền, tránh việc nhập tên người dùng/mật khẩu riêng biệt và giảm thiểu các lời nhắc xác thực tương tác.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-334', 'az-500', 334, 'You have an Azure Storage account named storage1 and an Azure virtual machine named VM1. VM1 has a premium SSD managed disk.  
  
You need to enable Azure Disk Encryption for VM1.  
  
Which three actions should you perform, in sequence?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"E"},{"id":"step2","text":"Slot 2:","correctAnswer":"C"},{"id":"step3","text":"Slot 3:","correctAnswer":"A"}],"choices":[{"key":"A","text":"Run the Set-AzVMDiskEncryptionExtension cmdlet."},{"key":"B","text":"Set the Key Vault access policy to Enable access to Azure Virtual Machines for deployment."},{"key":"C","text":"Set the Key Vault access policy to Enable access to Azure Disk Encryption for volume encryption."},{"key":"D","text":"Generate a key vault certificate."},{"key":"E","text":"Create an Azure key vault."},{"key":"F","text":"Configure storage1 to use a customer-managed key."}]}'::jsonb, '["step1=E","step2=C","step3=A"]'::jsonb, 'Azure Disk Encryption lưu trữ các bí mật mã hóa của nó trong Azure Key Vault. Tạo vault, kích hoạt tính năng mã hóa ổ đĩa, sau đó sử dụng Set-AzVMDiskEncryptionExtension để kích hoạt tính năng mã hóa trên ổ đĩa được quản lý gắn với VM1.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-335', 'az-500', 335, 'You have an Azure subscription that includes a managed identity named Identity1 and the Azure key vaults shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783957436149-g05p4wbh.png)  
  
KeyVault1 has an access policy that grants Identity1 these key permissions:  
  
- Get  
- List  
- Wrap  
- Unwrap  
  
You need to grant Identity1 the same permissions for KeyVault2. The solution must follow the principle of least privilege.  
  
Which role should you assign to Identity1?', '[{"key":"A","text":"Key Vault Crypto Service Encryption User"},{"key":"B","text":"Key Vault Crypto User"},{"key":"C","text":"Key Vault Reader"},{"key":"D","text":"Key Vault Crypto Officer"}]'::jsonb, '["A"]'::jsonb, 'Vai trò **Người dùng mã hóa dịch vụ tiền điện tử Key Vault** cho phép đọc siêu dữ liệu khóa và thực hiện các thao tác bọc và mở khóa trong vault sử dụng Azure RBAC. Điều này tương ứng với các quyền khóa Nhận, Liệt kê, Gói và Mở gói trong khi tránh các khả năng quản lý khóa và mật mã bổ sung được cấp bởi các vai trò rộng hơn. Ánh xạ chính sách truy cập tới RBAC của Microsoft ánh xạ cụ thể các quyền này tới vai trò này.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783957436149-g05p4wbh.png', 'published'),
  ('az500-336', 'az-500', 336, 'Solution: You recommend using federation with Active Directory Federation Services (AD FS).  
  
Does this solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["B"]'::jsonb, 'Liên kết AD FS xác thực người dùng thông qua cơ sở hạ tầng nhận dạng tại chỗ, cho phép thực thi các hạn chế đăng nhập và mật khẩu Active Directory. Tuy nhiên, liên kết yêu cầu cơ sở hạ tầng AD FS bổ sung và cơ sở hạ tầng proxy truy cập bên ngoài thông thường, do đó, việc liên kết này không làm giảm số lượng máy chủ cần thiết.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-337', 'az-500', 337, 'Solution: You recommend using pass-through authentication and seamless SSO together with password hash synchronization.  
  
Does this solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["A"]'::jsonb, 'Xác thực chuyển tiếp thực thi các chính sách tài khoản Active Directory tại chỗ khi đăng nhập, bao gồm các tài khoản bị vô hiệu hóa hoặc bị khóa, hết hạn mật khẩu và số giờ đăng nhập được phép. Nó có thể được kết hợp với SSO liền mạch và đồng bộ hóa băm mật khẩu có thể được bật để sao lưu hoặc hỗ trợ các tính năng trong khi xác thực chuyển tiếp vẫn là phương thức đăng nhập chính. Điều này tránh việc triển khai cơ sở hạ tầng liên kết AD FS riêng biệt.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-338', 'az-500', 338, 'Solution: You recommend using password hash synchronization and seamless SSO.  
  
Does this solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["B"]'::jsonb, 'Đồng bộ hóa băm mật khẩu thực hiện xác thực trong Microsoft Entra ID thay vì dựa trên Active Directory tại chỗ. SSO liền mạch chỉ cung cấp tính năng đăng nhập tự động cho các thiết bị công ty đủ điều kiện; nó không khiến các giới hạn đăng nhập của người dùng Active Directory được đánh giá để xác thực đám mây. Do đó, cấu hình này không thể đảm bảo rằng cả chính sách mật khẩu và giới hạn đăng nhập của người dùng đều ảnh hưởng đến tài khoản được đồng bộ hóa.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-340', 'az-500', 340, 'You have an Azure subscription containing the following resources:  
  
- A virtual network named VNET1 with two subnets, Subnet1 and Subnet2.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783954793749-29h7eacz.png)  
  
- A virtual machine named VM1 that has only a private IP address and is connected to Subnet1.  
  
You need to make sure Remote Desktop connections to VM1 can be established from the internet.  
  
Which three actions should you carry out, in sequence?', '{"statements":[{"id":"slot1","text":"Slot 1:","correctAnswer":"D"},{"id":"slot2","text":"Slot 2:","correctAnswer":"F"},{"id":"slot3","text":"Slot 3:","correctAnswer":"C"}],"choices":[{"key":"A","text":"Configure a network security group (NSG)."},{"key":"B","text":"Create a network rule collection."},{"key":"C","text":"Create a NAT rule collection."},{"key":"D","text":"Create a new subnet."},{"key":"E","text":"Deploy Azure Application Gateway."},{"key":"F","text":"Deploy Azure Firewall."}]}'::jsonb, '["slot1=D","slot2=F","slot3=C"]'::jsonb, 'Azure Firewall yêu cầu mạng con chuyên dụng có tên AzureFirewallSubnet, do đó mạng con đó được tạo trước khi tường lửa được triển khai. Sau đó, bộ sưu tập quy tắc NAT Azure Firewall chứa quy tắc DNAT chuyển IP công cộng của tường lửa và cổng TCP 3389 sang IP riêng của VM1, cho phép RDP gửi đến. Bộ sưu tập quy tắc mạng không cung cấp ánh xạ DNAT gửi đến.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783954793749-29h7eacz.png', 'published'),
  ('az500-341', 'az-500', 341, 'You have a management group named Group1 that contains an Azure subscription named sub1. Sub1 has a subscription ID of 11111111-1234-1234-1234-1111111111.  
  
You need to create a custom Azure role-based access control (RBAC) role that delegates permissions to manage tags on every object in Group1.  
  
What should be included in the Role1 role definition?', '[]'::jsonb, '[]'::jsonb, 'Hoạt động thẻ thuộc về nhà cung cấp Microsoft.Resources. Vai trò tùy chỉnh có thể được chỉ định ở phạm vi nhóm quản lý Group1 có thể được chỉ định cho các tài nguyên trong nhóm quản lý đó và đăng ký con cháu của nó, trong khi phạm vi sub1 sẽ không bao gồm toàn bộ hệ thống phân cấp của nhóm quản lý.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-342', 'az-500', 342, 'You must ensure that the Azure AD application-registration and consent configurations meet the identity and access requirements.  
  
What should you use in the Azure portal?', '[]'::jsonb, '[]'::jsonb, 'Microsoft Entra ID Cài đặt người dùng bao gồm kiểm soát xem người dùng có thể đăng ký ứng dụng hay không. Cấu hình sự đồng ý của người dùng được quản lý trong ứng dụng Doanh nghiệp trong Cài đặt người dùng, nơi quản trị viên định cấu hình khả năng đồng ý của người dùng đối với ứng dụng.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-344', 'az-500', 344, 'You have a Microsoft Entra tenant that uses Microsoft Entra Permissions Management and includes the accounts shown in the following table:  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783966710640-we6mo6zs.png)  
  
Which accounts are listed as assigned to highly privileged roles on the Azure AD insights tab in the Entra Permissions Management portal?', '[{"key":"A","text":"Admin1 only"},{"key":"B","text":"Admin2 and Admin3 only"},{"key":"C","text":"Admin2 and Admin4 only"},{"key":"D","text":"Admin1, Admin2, and Admin3 only"},{"key":"E","text":"Admin2, Admin3, and Admin4 only"},{"key":"F","text":"Admin1, Admin2, Admin3, and Admin4"}]'::jsonb, '["C"]'::jsonb, 'Tab Microsoft Entra Insights xem xét riêng các nhiệm vụ của Quản trị viên toàn cầu. Quá trình đánh giá vai trò có đặc quyền cao của nó bao gồm các vai trò Quản trị viên vai trò đặc quyền và Quản trị viên Exchange, do đó bao gồm cả Admin2 và Admin4. Quản trị viên xác thực đặc quyền không có trong danh sách vai trò có đặc quyền cao được tuyển chọn đó.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783966710640-we6mo6zs.png', 'published'),
  ('az500-345', 'az-500', 345, 'You have an Azure subscription containing a resource group named RG1 and the network security groups (NSGs) shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783957437267-ae13jak7.png)  
  
You create the Azure Policy shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783957443479-876fskan.png)  
  
You assign the policy to RG1.  
  
What happens to NSG1 and NSG2 when the policy is assigned?', '[{"key":"A","text":"Flow logs will be enabled for NSG2 only."},{"key":"B","text":"Flow logs will be disabled for NSG1 and NSG2."},{"key":"C","text":"Flow logs will be enabled for NSG1 and NSG2."},{"key":"D","text":"Flow logs will be enabled for NSG1 only."}]'::jsonb, '["B"]'::jsonb, 'NSG1 được loại trừ khỏi việc chuyển nhượng chính sách. NSG2 được đánh giá, nhưng hiệu ứng **Kiểm tra** Chính sách Azure chỉ ghi lại sự không tuân thủ và không thay đổi cấu hình tài nguyên. Do đó, nó không thể kích hoạt nhật ký luồng. Vì nhật ký luồng ban đầu bị tắt đối với cả hai NSG nên chúng vẫn bị tắt.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783957437267-ae13jak7.png', 'published'),
  ('az500-346', 'az-500', 346, 'Your company uses Azure DevOps.  
  
You need to recommend a way to validate that code satisfies the company''s quality and code-review standards.  
  
What should you recommend implementing in Azure DevOps?', '[{"key":"A","text":"branch folders"},{"key":"B","text":"branch permissions"},{"key":"C","text":"branch policies"},{"key":"D","text":"branch locking"}]'::jsonb, '["C"]'::jsonb, 'Chính sách chi nhánh Azure DevOps thực thi các tiêu chuẩn quản lý thay đổi và chất lượng mã đối với các yêu cầu kéo. Họ có thể yêu cầu xác thực bản dựng và số lượng phê duyệt tối thiểu của người đánh giá trước khi mã có thể hợp nhất vào một nhánh được bảo vệ.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-347', 'az-500', 347, 'Your company’s Azure subscription contains Windows Server 2016 Azure virtual machines.  
  
You are told that every virtual machine must have a custom antimalware virtual-machine extension installed. You are writing the required code for a policy to help accomplish this.  
  
Which of the following effects must be included in your code?', '[{"key":"A","text":"Disabled"},{"key":"B","text":"Modify"},{"key":"C","text":"AuditIfNotExists"},{"key":"D","text":"DeployIfNotExists"}]'::jsonb, '["D"]'::jsonb, 'Hiệu ứng Chính sách Azure `DeployIfNotExists` triển khai một mẫu khi tài nguyên liên quan được yêu cầu không tồn tại, cho phép cài đặt tiện ích mở rộng VM chống phần mềm độc hại trên các máy ảo thiếu nó. Chính sách tích hợp của Microsoft triển khai tiện ích mở rộng IaaSAntimalware mặc định cho Windows Server cũng sử dụng `deployIfNotExists`.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-348', 'az-500', 348, 'You have an Azure subscription that includes the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953372594-w9biztw5.png)  
  
You plan to enable Azure Defender for the subscription. Which resources can Azure Defender protect?', '[{"key":"A","text":"VM1, VNET1, storage1, and Vault1"},{"key":"B","text":"VM1, VNET1, and storage1 only"},{"key":"C","text":"VM1, storage1, and Vault1 only"},{"key":"D","text":"VM1 and VNET1 only"},{"key":"E","text":"VM1 and storage1 only"}]'::jsonb, '["C"]'::jsonb, 'Microsoft Defender for Cloud cung cấp các gói bảo vệ khối lượng công việc cho máy ảo (Defender for Servers), tài khoản lưu trữ (Defender for Storage) và Azure Key Vault (Defender for Key Vault). Nó không cung cấp gói Azure Defender bảo vệ mạng ảo dưới dạng tài nguyên.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953372594-w9biztw5.png', 'published'),
  ('az500-349', 'az-500', 349, 'Your network has an on-premises Active Directory domain named corp.contoso.com.  
  
You have an Azure subscription named Sub1 that is associated with an Azure Active Directory (Azure AD) tenant named contoso.com. You synchronize all on-premises identities to Azure AD.  
  
You need to stop users whose `givenName` attribute begins with TEST from being synchronized to Azure AD. The solution must minimize administrative effort.  
  
What should you use?', '[{"key":"A","text":"Synchronization Rules Editor"},{"key":"B","text":"Web Service Configuration Tool"},{"key":"C","text":"the Azure AD Connect wizard"},{"key":"D","text":"Active Directory Users and Computers"}]'::jsonb, '["A"]'::jsonb, 'Trình chỉnh sửa quy tắc đồng bộ hóa cho phép Azure AD Connect áp dụng các bộ lọc phạm vi dựa trên thuộc tính, bao gồm các điều kiện tiền tố chuỗi và loại trừ các đối tượng người dùng phù hợp khỏi quá trình đồng bộ hóa bằng cách đặt `cloudFiltered`. Điều này lọc tập trung tất cả người dùng có `givenName` bắt đầu bằng TEST mà không quản lý riêng tài khoản AD của họ.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-350', 'az-500', 350, 'You have an Azure subscription named Sub1 that contains the Azure key vaults shown in the following table:  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783952082479-ns67f5qh.png)  
  
In Sub1, you create a virtual machine with the following configuration:  
  
- Name: VM1  
- Size: DS2v2  
- Resource group: RG1  
- Region: West Europe  
- Operating system: Windows Server 2016  
  
You plan to enable Azure Disk Encryption on VM1.  
  
In which key vaults can you store VM1''s encryption key?', '[{"key":"A","text":"Vault1 or Vault3 only"},{"key":"B","text":"Vault1, Vault2, Vault3, or Vault4"},{"key":"C","text":"Vault1 only"},{"key":"D","text":"Vault1 or Vault2 only"}]'::jsonb, '["A"]'::jsonb, 'Mã hóa đĩa Azure yêu cầu kho khóa và máy ảo phải nằm trong cùng khu vực và đăng ký Azure. VM1 nằm ở Tây Âu trong Sub1, vì vậy Vault1 và Vault3 đủ điều kiện. Kho khóa có thể nằm trong một nhóm tài nguyên khác; Vault2 và Vault4 ở miền Đông Hoa Kỳ và không đủ điều kiện.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783952082479-ns67f5qh.png', 'published'),
  ('az500-351', 'az-500', 351, 'You create a new Azure subscription associated with a new Azure Active Directory (Azure AD) tenant.  
  
You create an active conditional access policy named Portal Policy to provide access to the Microsoft Azure Management cloud app. The Conditions and Grant settings are configured as shown.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953706758-7n3ojkfq.png)  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953709399-wsy30app.jpg)  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"Users from the Contoso named location must use multi-factor authentication (MFA) to access the Azure portal.","correctAnswer":"Yes"},{"id":"2","text":"Users from the Contoso named location must use multi-factor authentication (MFA) to access the web services hosted in the Azure subscription.","correctAnswer":"No"},{"id":"3","text":"Users external to the Contoso named location must use multi-factor authentication (MFA) to access the Azure portal.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:Yes","2:No","3:No"]'::jsonb, 'Điều kiện vị trí được đặt tên chỉ bao gồm Contoso và kiểm soát cấp quyền yêu cầu MFA. Quản lý Microsoft Azure bao gồm các tài nguyên quản lý Azure như cổng Azure, vì vậy người dùng trong Contoso phải thực hiện MFA ở đó. Chính sách này không nhắm mục tiêu đến các dịch vụ web tùy ý được lưu trữ trong đăng ký cũng như không khớp với những người dùng bên ngoài vị trí Contoso được bao gồm.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953706758-7n3ojkfq.png', 'published'),
  ('az500-352', 'az-500', 352, 'You have an Azure subscription named Sub1 that contains an Azure Policy definition called Policy1. Policy1 has these settings:  
  
- Definition location: Tenant Root Group  
- Category: Monitoring  
  
You need to ensure that resources noncompliant with Policy1 are displayed in the Azure Security Center dashboard.  
  
What should you do first?', '[{"key":"A","text":"Change the Category of Policy1 to Security Center."},{"key":"B","text":"Add Policy1 to a custom initiative."},{"key":"C","text":"Change the Definition location of Policy1 to Sub1."},{"key":"D","text":"Assign Policy1 to Sub1."}]'::jsonb, '["B"]'::jsonb, 'Microsoft Defender for Cloud/Trung tâm bảo mật Azure sử dụng các sáng kiến ​​Chính sách Azure làm tiêu chuẩn bảo mật để đánh giá và trình bày sự tuân thủ. Định nghĩa chính sách tùy chỉnh phải được thêm vào sáng kiến ​​tùy chỉnh trước khi sáng kiến ​​đó có thể được đưa vào và chỉ định cho đăng ký để các tài nguyên không tuân thủ của sáng kiến ​​đó có thể xuất hiện trong bảng điều khiển bảo mật.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-353', 'az-500', 353, 'HOTSPOT  
  
You have an Azure subscription containing the following Azure firewall:  
  
- Name: Fw1  
- Azure region: UK West  
- Private IP address: 10.1.3.4  
- Public IP address: 23.236.62.147  
  
The subscription includes the virtual networks in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783957460149-ssndketk.png)  
  
The subscription includes the subnets in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783957464298-d2nay9x1.png)  
  
The subscription includes the routes in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783957469782-gartlgx4.png)  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"Traffic from Subnet1-1 to Subnet1-2 is routed through Fw1.","correctAnswer":"No"},{"id":"2","text":"Traffic from Subnet2-1 to Subnet1-1 is routed through Fw1.","correctAnswer":"No"},{"id":"3","text":"Traffic from Subnet3-1 to the internet is routed through Fw1.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:No","3:No"]'::jsonb, 'Azure chọn các tuyến từ mạng con nguồn bằng cách sử dụng kết hợp tiền tố dài nhất. Tuyến Vnet1-local cụ thể hơn tuyến 0.0.0.0/0 của Rt1, do đó lưu lượng giữa Subnet1-1 và Subnet1-2 vẫn nằm trong Vnet1. Lưu lượng Vnet2-to-Vnet1 sử dụng tuyến hệ thống VNet peering; Rt2 được liên kết với Subnet1-2 và không thể ảnh hưởng đến lưu lượng truy cập bắt nguồn từ Subnet2-1. Rt4 chỉ áp dụng cho 10.2.1.0/24, do đó, nó không bắt buộc lưu lượng truy cập Internet từ Subnet3-1 đến Fw1.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783957460149-ssndketk.png', 'published'),
  ('az500-354', 'az-500', 354, 'You have a web app named WebApp1.  
  
You create a web application firewall (WAF) policy named WAF1.  
  
You need to use WAF1 to protect WebApp1.  
  
What should you do first?', '[{"key":"A","text":"Deploy an Azure Front Door."},{"key":"B","text":"Add an extension to WebApp1."},{"key":"C","text":"Deploy Azure Firewall."}]'::jsonb, '["A"]'::jsonb, 'Chính sách Azure WAF có hiệu lực khi được liên kết với nền tảng phân phối ứng dụng như Azure Front Door. Triển khai Azure Front Door cung cấp liên kết tài nguyên và miền mà qua đó WAF1 có thể bảo vệ WebApp1; Azure Firewall và tiện ích mở rộng ứng dụng không đáp ứng liên kết chính sách WAF đó.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-356', 'az-500', 356, 'You have the Azure virtual machines listed in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953059031-kx5212q4.png)  
  
For which virtual machines can Update Management be enabled?', '[{"key":"A","text":"VM2 and VM3 only"},{"key":"B","text":"VM2, VM3, and VM4 only"},{"key":"C","text":"VM1, VM2, and VM4 only"},{"key":"D","text":"VM1, VM2, VM3, and VM4"},{"key":"E","text":"VM1, VM2, and VM3 only"}]'::jsonb, '["D"]'::jsonb, 'Quản lý cập nhật hỗ trợ Windows Server 2012, Windows Server 2012 R2, Windows Server 2016 và Ubuntu Server 18.04 LTS. Một VM đã dừng có thể được kích hoạt để quản lý, mặc dù việc đánh giá và triển khai cập nhật yêu cầu VM phải chạy.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953059031-kx5212q4.png', 'published'),
  ('az500-357', 'az-500', 357, 'You have an Azure Storage account named `storage1` that contains a container named `container1`.  
  
You need to stop the blobs in `container1` from being modified.  
  
What should you do?', '[{"key":"A","text":"From container1, change the access level."},{"key":"B","text":"From container1, add an access policy."},{"key":"C","text":"From container1, modify the Access Control (IAM) settings."},{"key":"D","text":"From storage1, enable soft delete for blobs."}]'::jsonb, '["B"]'::jsonb, 'Chính sách bất biến Azure Blob Storage thực thi bảo vệ ghi một lần, đọc nhiều (WORM): trong khi nó có hiệu lực, các đốm màu có thể được đọc nhưng không thể sửa đổi hoặc xóa. Chính sách bất biến ở cấp vùng chứa được thêm vào thông qua ngăn chính sách Truy cập của vùng chứa.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-358', 'az-500', 358, 'You plan to use Azure Sentinel to create an analytic rule that detects suspicious threats and automates responses. Which components are required for the rule?', '[]'::jsonb, '[]'::jsonb, 'Quy tắc phân tích Microsoft Sentinel sử dụng truy vấn Ngôn ngữ truy vấn Kusto (KQL) để đánh giá dữ liệu Log Analytics và tạo ra các phát hiện. Sách hướng dẫn Microsoft Sentinel, được xây dựng trên Ứng dụng Azure Logic, tự động hóa và điều phối các phản hồi đối với các cảnh báo và sự cố.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-359', 'az-500', 359, 'You intend to implement JIT VM access.  
  
Which virtual machines are supported?', '[{"key":"A","text":"VM2, VM3, and VM4 only"},{"key":"B","text":"VM1, VM2, VM3, and VM4"},{"key":"C","text":"VM1 and VM3 only"},{"key":"D","text":"VM1 only"}]'::jsonb, '["C"]'::jsonb, 'Đối với khả năng truy cập máy ảo JIT lịch sử được thử nghiệm ở đây, các máy được hỗ trợ là máy ảo Windows Server: VM1 và VM3. Các máy ảo Linux, VM2 và VM4, nằm ngoài phạm vi hệ điều hành được hỗ trợ của mục đó.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-360', 'az-500', 360, 'You have an Azure subscription that contains the virtual machines shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953179423-jj393i6v.png)  
  
All of the virtual networks are peered.  
  
You deploy Azure Bastion to VNET2. Which virtual machines can the bastion host protect?', '[{"key":"A","text":"VM1, VM2, VM3, and VM4"},{"key":"B","text":"VM1, VM2, and VM3 only"},{"key":"C","text":"VM2 and VM4 only"},{"key":"D","text":"VM2 only"}]'::jsonb, '["A"]'::jsonb, 'Azure Bastion có thể kết nối an toàn với các máy ảo trong mạng ảo nơi nó được triển khai và với các máy ảo trong mạng ảo ngang hàng. Hỗ trợ này bao gồm cả virtual network peering cùng khu vực và virtual network peering toàn cầu trên các khu vực Azure. Do đó, máy chủ trong VNET2 có thể bảo vệ VM2 cục bộ, VM1 và VM3 trong VNET1 và VM4 trong VNET3.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953179423-jj393i6v.png', 'published'),
  ('az500-361', 'az-500', 361, 'Your company uses Azure DevOps and has configured branch policies.  
  
Which statements about branch policies are **TRUE**? (Choose all that apply.)', '[{"key":"A","text":"It enforces your team''s change management standards."},{"key":"B","text":"It controls who can read and update the code in a branch."},{"key":"C","text":"It enforces your team''s code quality."},{"key":"D","text":"It places a branch into a read-only state."}]'::jsonb, '["A","C"]'::jsonb, 'Chính sách chi nhánh Azure DevOps thực thi các tiêu chuẩn quản lý thay đổi và yêu cầu về chất lượng mã của nhóm bằng cách yêu cầu các điều kiện như đánh giá yêu cầu kéo, bản dựng thành công và kiểm tra trạng thái trước khi các thay đổi có thể hợp nhất. Quyền của chi nhánh—không phải chính sách—kiểm soát ai có thể đọc hoặc cập nhật mã chi nhánh. [Git branch policies and settings - Azure Repos](https://learn.microsoft.com/en-us/azure/devops/repos/git/branch-policies?view=azure-devops)', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-363', 'az-500', 363, 'You must recommend the virtual machines to host App1. The solution has to satisfy the technical requirements for KeyVault1.  
  
Which virtual machines should you recommend?', '[{"key":"A","text":"VM1 only"},{"key":"B","text":"VM1, VM2, VM3, and VM4"},{"key":"C","text":"VM1 and VM2 only"},{"key":"D","text":"VM1, VM2, and VM4 only"}]'::jsonb, '["B"]'::jsonb, 'Có thể truy cập Azure Key Vault private endpoint từ cùng một mạng ảo và từ các mạng ảo ngang hàng trong khu vực hoặc toàn cầu. Lưu lượng giữa các mạng ảo ngang hàng vẫn nằm trên đường trục của Microsoft thay vì truyền qua Internet công cộng, do đó VM1, VM2, VM3 và VM4 đáp ứng yêu cầu về lưu lượng riêng tư.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-364', 'az-500', 364, 'You have an Azure subscription associated with an Azure Active Directory (Azure AD) tenant.  
  
When a developer tries to register an app named App1 in the tenant, the developer receives the error message shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953200078-5u4lwqjx.png)  
  
You need to make sure that the developer can register App1 in the tenant.  
  
What should you do for the tenant?', '[{"key":"A","text":"Modify the Directory properties."},{"key":"B","text":"Set Enable Security defaults to Yes."},{"key":"C","text":"Configure the Consent and permissions settings for enterprise applications."},{"key":"D","text":"Modify the User settings."}]'::jsonb, '["D"]'::jsonb, 'Việc đăng ký ứng dụng của người dùng không có quyền quản trị được kiểm soát bởi **Cài đặt người dùng** của đối tượng thuê, cụ thể là cài đặt **Người dùng có thể đăng ký ứng dụng**. Việc cho phép người dùng đăng ký ứng dụng sẽ cho phép nhà phát triển tạo đăng ký App1.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953200078-5u4lwqjx.png', 'published'),
  ('az500-365', 'az-500', 365, 'You have an Azure Sentinel deployment.  
  
You need to create a scheduled query rule called Rule1.  
  
What should you use to define the query-rule logic for Rule1?', '[{"key":"A","text":"a Transact-SQL statement"},{"key":"B","text":"a JSON definition"},{"key":"C","text":"GraphQL"},{"key":"D","text":"a Kusto query"}]'::jsonb, '["D"]'::jsonb, 'Các quy tắc phân tích theo lịch trình của Microsoft Sentinel chạy các truy vấn Ngôn ngữ truy vấn Kusto (KQL) đối với dữ liệu trong không gian làm việc Log Analytics. Truy vấn quy tắc chứa logic phát hiện được đánh giá theo lịch trình đã định cấu hình.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-366', 'az-500', 366, 'You have an Azure subscription containing these resources:  
  
- A network virtual appliance (NVA) running non-Microsoft firewall software that routes all outbound virtual-machine traffic to the internet  
- An Azure function containing a script that manages the NVA firewall rules  
- Azure Security Center Standard tier enabled for every virtual machine  
- An Azure Sentinel workspace  
- 30 virtual machines  
  
You must ensure that a high-priority Security Center alert for a virtual machine creates an incident in Azure Sentinel and then starts a script to configure an NVA firewall rule.  
  
Configure Azure Sentinel to meet these requirements. Each component can be used once, more than once, or not at all.', '{"statements":[{"id":"enable_alert_notifications","text":"Enable alert notifications from Security Center:","correctAnswer":"A"},{"id":"create_incident","text":"Create an incident:","correctAnswer":"D"},{"id":"initiate_firewall_script","text":"Initiate a script to configure the firewall rule:","correctAnswer":"C"}],"choices":[{"key":"A","text":"A data connector for Security Center"},{"key":"B","text":"A data connector for the firewall software"},{"key":"C","text":"A playbook"},{"key":"D","text":"A rule"},{"key":"E","text":"A Security Events connector"},{"key":"F","text":"A workbook"}]}'::jsonb, '["enable_alert_notifications=A","create_incident=D","initiate_firewall_script=C"]'::jsonb, 'Trình kết nối dữ liệu của Trung tâm bảo mật nhập cảnh báo của Trung tâm bảo mật vào Microsoft Sentinel. Một quy tắc phân tích sẽ tạo ra sự cố Sentinel khi đáp ứng các tiêu chí cảnh báo của nó, bao gồm cả mức độ ưu tiên cao. Playbook là một quy trình làm việc của Ứng dụng Azure Logic có thể chạy tự động khi xảy ra sự cố và gọi Hàm Azure để đặt cấu hình quy tắc tường lửa NVA.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-367', 'az-500', 367, 'You work for a company named Contoso, Ltd. that has the offices shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953056584-zqkjsomb.png)  
  
Contoso has an Azure Active Directory (Azure AD) tenant named contoso.com. All contoso.com users have Azure Multi-Factor Authentication (MFA) enabled. The tenant includes the users shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953059211-mprpwva5.png)  
  
The multi-factor authentication settings for contoso.com are configured as shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953061927-vn8zsy92.jpg)  
  
For each statement below, select **Yes** if it is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"When User1 signs in to Device1 from the Seattle office on June 10, the user will be prompted for MFA.","correctAnswer":"No"},{"id":"2","text":"When User2 signs in to Device2 from the Boston office on June 5, the user will be prompted for MFA.","correctAnswer":"No"},{"id":"3","text":"When User1 signs in to a new device from the Seattle office on June 7, the user will be prompted for MFA.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:No","3:Yes"]'::jsonb, 'Dải IP đáng tin cậy được định cấu hình sẽ bỏ qua lời nhắc MFA, vì vậy việc đăng nhập từ Boston không yêu cầu MFA. Việc chọn tùy chọn đã ghi nhớ-MFA sẽ chặn các lời nhắc trong khoảng thời gian 14 ngày được định cấu hình trong trình duyệt/thiết bị đó; Đăng nhập vào Device1 của Người dùng1 vào ngày 10 tháng 6 vẫn trong khoảng thời gian đó. Một thiết bị mới ở Seattle không được ghi nhớ cũng như không nằm trong phạm vi IP đáng tin cậy của Boston, do đó cần có MFA.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953056584-zqkjsomb.png', 'published'),
  ('az500-368', 'az-500', 368, 'You have an Azure subscription containing an Azure SQL Database logical server named SQL1 and an Azure virtual machine named VM1. VM1 uses only a private IP address.  
  
The Firewall and virtual networks settings for SQL1 are shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783957448570-80ga64em.png)  
  
You need to ensure that VM1 can connect to SQL1. The solution must follow the principle of least privilege.  
  
What should you do?', '[{"key":"A","text":"Set Connection Policy to Proxy."},{"key":"B","text":"Set Allow Azure services and resources to access this server to Yes."},{"key":"C","text":"Add an existing virtual network."},{"key":"D","text":"Create a new firewall rule."}]'::jsonb, '["C"]'::jsonb, 'Quy tắc mạng ảo cho phép kết nối với máy chủ logic Azure SQL từ mạng con mạng ảo cụ thể. Việc thêm mạng/mạng con ảo hiện có của VM1 sẽ cung cấp quyền truy cập được yêu cầu trong phạm vi hẹp, thường sử dụng Microsoft.Sql service endpoint. Quy tắc tường lửa IP yêu cầu IP nguồn công cộng, đồng thời cho phép dịch vụ Azure cho phép rộng rãi các tài nguyên Azure ngoài VM1.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783957448570-80ga64em.png', 'published'),
  ('az500-369', 'az-500', 369, 'HOTSPOT -  
  
You have an Azure subscription containing a user named Admin1 and a resource group named RG1. In Azure Monitor, you create the alert rules shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783953049896-wsujeetf.png)  
  
Admin1 takes the following actions in RG1:  
  
- Adds a virtual network named VNET1.  
- Adds a Delete lock named Lock1.  
  
Which rules trigger an alert because of Admin1''s actions?', '[]'::jsonb, '[]'::jsonb, 'Các hoạt động tạo và ghi của Azure Resource Manager được ghi lại trong danh mục nhật ký hoạt động Quản trị. Cả hai hoạt động đều xảy ra trong RG1 và được khởi tạo bởi Quản trị viên1, do đó, mỗi hoạt động đều khớp với điều kiện Quản trị RG1 của Quy tắc 2 và điều kiện Quản trị do Quản trị viên1 thực hiện trên toàn đăng ký của Quy tắc4. Chúng không phù hợp với quy tắc bảo mật.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783953049896-wsujeetf.png', 'published'),
  ('az500-370', 'az-500', 370, 'You need to create an Azure key vault. The solution must ensure that any object deleted from the key vault is retained for 90 days.  
  
How should you complete the command?', '[]'::jsonb, '[]'::jsonb, 'Xóa mềm sẽ giữ lại các đối tượng Key Vault đã xóa trong khoảng thời gian lưu giữ được định cấu hình, mặc định là 90 ngày. Tính năng bảo vệ thanh lọc sẽ ngăn không cho vault hoặc đối tượng đã xóa bị xóa vĩnh viễn cho đến khi hết thời gian lưu giữ.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-371', 'az-500', 371, 'You have been tasked with delegating administrative access to your company''s Azure key vault.  
  
You need to ensure that:  
  
- A specific user can set advanced access policies for the key vault.  
- Access is assigned based on the principle of least privilege.  
  
Which of the following options should you use to achieve your goal?', '[{"key":"A","text":"Azure Information Protection B. RBAC"},{"key":"C","text":"Azure AD Privileged Identity Management (PIM)"},{"key":"D","text":"Azure DevOps"}]'::jsonb, '["B"]'::jsonb, 'Các hoạt động trên mặt phẳng quản lý Azure Key Vault, bao gồm cả việc đặt cấu hình các chính sách truy cập nâng cao, được quản lý bởi Azure RBAC. Bằng cách chỉ định cho người dùng vai trò RBAC thích hợp (chẳng hạn như vai trò Người đóng góp Key Vault tích hợp sẵn) chỉ trong phạm vi kho khóa đó, bạn chỉ cấp các quyền cần thiết để quản lý chính sách truy cập, đáp ứng nguyên tắc đặc quyền tối thiểu. Azure Information Protection xử lý việc phân loại và ghi nhãn dữ liệu chứ không phải ủy quyền truy cập Key Vault; Azure AD PIM quản lý việc kích hoạt các vai trò đã được cấp theo thời gian thay vì tự xác định quyền chính sách truy cập; và Azure DevOps không liên quan đến quản lý quyền Key Vault.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-372', 'az-500', 372, 'You have an Azure subscription containing an Azure SQL database named SQL1. You plan to deploy a web app named App1.  
  
You must give App1 read and write access to SQL1 while meeting these requirements:  
  
- Give App1 access to SQL1 without storing a password.  
- Follow the principle of least privilege.  
- Minimize administrative effort.  
  
Which account type should App1 use to access SQL1, and which database roles should you assign to App1?', '[]'::jsonb, '[]'::jsonb, 'managed identity cho phép ứng dụng được lưu trữ trên Azure xác thực với Azure SQL thông qua Microsoft Entra ID mà không cần lưu trữ mật khẩu hoặc quản lý bí mật chính của dịch vụ. Các vai trò db_datareader và db_datawriter cấp các quyền đọc và ghi cần thiết mà không cần các quyền quản trị rộng hơn có trong db_owner.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-373', 'az-500', 373, 'You have an Azure subscription containing an Azure SQL server named SQL1. SQL1 contains an Azure SQL database named DB1.  
  
You need to use Microsoft Defender for Cloud to perform a vulnerability assessment for DB1.  
  
What should you do first?', '[{"key":"A","text":"From Advanced Threat Protection types, select SQL injection vulnerability."},{"key":"B","text":"Configure the Send scan report to setting."},{"key":"C","text":"Set Periodic recurring scans to ON."},{"key":"D","text":"Enable the Microsoft Defender for SQL plan."}]'::jsonb, '["D"]'::jsonb, 'Microsoft Defender cho Azure SQL phải được bật trước khi quá trình quét đánh giá lỗ hổng có thể chạy trên cơ sở dữ liệu Azure SQL. Việc kích hoạt gói Defender for SQL sẽ kích hoạt khả năng bảo vệ và đánh giá lỗ hổng bảo mật cần thiết; quét định kỳ và cài đặt báo cáo quét có thể được cấu hình sau đó.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-374', 'az-500', 374, 'You have an Azure AD tenant.  
  
You plan to deploy an authentication solution that meets the following requirements:  
  
- Require number matching.  
- Show the geographic location during sign-in.  
  
Which authentication method should you include in the solution?', '[{"key":"A","text":"Microsoft Authenticator"},{"key":"B","text":"FIDO2 security key"},{"key":"C","text":"SMS"},{"key":"D","text":"Temporary Access Pass"}]'::jsonb, '["A"]'::jsonb, 'Microsoft Authenticator hỗ trợ khớp số cho thông báo đẩy. Cài đặt ngữ cảnh bổ sung của nó cũng có thể hiển thị vị trí địa lý của thông báo đăng nhập trong Authenticator và thông báo không cần mật khẩu.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-375', 'az-500', 375, 'In Microsoft Defender for Cloud, you need to deploy SecPol1.  
  
What should you do first?', '[{"key":"A","text":"Enable Microsoft Defender for Cloud."},{"key":"B","text":"Create an Azure Management group."},{"key":"C","text":"Create an initiative."},{"key":"D","text":"Configure continuous export."}]'::jsonb, '["C"]'::jsonb, 'Chính sách bảo mật của Defender for Cloud dựa trên sáng kiến ​​Chính sách Azure, bao gồm các định nghĩa và biện pháp kiểm soát chính sách sẽ được áp dụng. Sáng kiến ​​phải tồn tại trước khi có thể đưa vào sử dụng hoặc chỉ định làm tiêu chuẩn bảo mật.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-376', 'az-500', 376, 'You are configuring an Azure Policy through the Azure portal.  
  
Your policy will include an effect that requires a managed identity in order to be assigned.  
  
Which of the following is that effect?', '[{"key":"A","text":"AuditIfNotExist"},{"key":"B","text":"Disabled"},{"key":"C","text":"DeployIfNotExist"},{"key":"D","text":"EnforceOPAConstraint"}]'::jsonb, '["C"]'::jsonb, 'Hiệu ứng `DeployIfNotExists` triển khai một mẫu để khắc phục các tài nguyên không tuân thủ. Chính sách Azure sử dụng managed identity được liên kết với việc chỉ định chính sách để thực hiện việc triển khai đó, do đó, hiệu ứng này yêu cầu managed identity.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-377', 'az-500', 377, 'Your company has an Azure subscription containing two virtual machines, VirMac1 and VirMac2, both in the **Stopped (Deallocated)** state.  
  
The virtual machines are in separate resource groups: ResGroup1 and ResGroup2.  
  
Two Azure policies have also been created, both configured for the `virtualMachines` resource type:  
  
- The policy for ResGroup1 uses the **Not allowed resource types** policy definition.  
- The policy for ResGroup2 uses the **Allowed resource types** policy definition.  
  
You then create a **Read-only** resource lock on VirMac1 and a **Read-only** resource lock on ResGroup2.  
  
Which statements are TRUE for this scenario? (Choose all that apply.)', '[{"key":"A","text":"You will be able to start VirMac1."},{"key":"B","text":"You will NOT be able to start VirMac1."},{"key":"C","text":"You will be able to create a virtual machine in ResGroup2."},{"key":"D","text":"You will NOT be able to create a virtual machine in ResGroup2."}]'::jsonb, '["B","D"]'::jsonb, 'Khóa tài nguyên Azure chỉ đọc chỉ cho phép các thao tác đọc và chặn sửa đổi. Khởi động hoặc khởi động lại máy ảo là thao tác POST trên mặt phẳng điều khiển, do đó, khóa Chỉ đọc trên VirMac1 sẽ ngăn không cho máy khởi động. Khóa chỉ đọc ở phạm vi nhóm tài nguyên sẽ ngăn việc tạo tài nguyên trong nhóm đó; do đó, máy ảo no có thể được tạo trong ResGroup2. Chính sách loại tài nguyên được phép cho phép loại được chỉ định nhưng không ghi đè khóa tài nguyên.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-378', 'az-500', 378, 'You have a Microsoft Entra tenant containing the groups shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783966711150-gbqv0jej.png)  
  
From the Azure portal, you configure a group expiration policy with a lifetime of 180 days.  
  
Which groups are deleted after 180 days of inactivity, and what is the maximum time available to restore a deleted group?', '[]'::jsonb, '[]'::jsonb, 'Chính sách hết hạn của nhóm Microsoft Entra áp dụng cho các nhóm Microsoft 365, không áp dụng cho các nhóm bảo mật hoặc nhóm bảo mật hỗ trợ thư. Nhóm Microsoft 365 đã hết hạn sẽ bị xóa và vẫn có thể khôi phục trong 30 ngày.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783966711150-gbqv0jej.png', 'published'),
  ('az500-379', 'az-500', 379, 'You have an Azure AD tenant that includes a user named User1.  
  
You purchase an app named App1.  
  
User1 must publish App1 by using Azure AD Application Proxy.  
  
Which role should be assigned to User1?', '[{"key":"A","text":"Cloud application administrator"},{"key":"B","text":"Application administrator"},{"key":"C","text":"Hybrid identity administrator"},{"key":"D","text":"Cloud App Security Administrator"}]'::jsonb, '["B"]'::jsonb, 'Vai trò Quản trị viên ứng dụng có thể tạo và quản lý các ứng dụng doanh nghiệp, đăng ký ứng dụng và cài đặt Proxy ứng dụng, bao gồm cả việc xuất bản ứng dụng thông qua Proxy ứng dụng. Vai trò Quản trị viên ứng dụng đám mây không bao gồm quản lý Proxy ứng dụng.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-380', 'az-500', 380, 'You have been assigned to apply Conditional Access policies for your company''s existing Azure Active Directory (Azure AD).  
  
The process includes evaluating risk events and risk levels.  
  
Which risk level should be configured for sign-ins that originate from IP addresses showing suspicious activity?', '[{"key":"A","text":"None"},{"key":"B","text":"Low"},{"key":"C","text":"Medium"},{"key":"D","text":"High"}]'::jsonb, '["C"]'::jsonb, 'Trong ánh xạ sự kiện rủi ro Bảo vệ danh tính Azure AD được sử dụng cho cấu hình chính sách này, các lần đăng nhập từ địa chỉ IP có hoạt động đáng ngờ được phân loại là rủi ro **Trung bình**. Rủi ro trung bình thể hiện hoạt động đăng nhập bất thường đáng ngờ hoặc nghiêm trọng ở mức độ vừa phải cần được đánh giá Truy cập có điều kiện.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-381', 'az-500', 381, 'You have an Azure subscription that contains a virtual network named VNet1. VNet1 contains the subnets shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783966881733-m4zbf7c5.png)  
  
The subscription contains the function apps shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783966886097-0k9kba4k.png)  
  
For which app is outbound traffic controlled by using NSG1?', '[{"key":"A","text":"App4 only"},{"key":"B","text":"App3 and App4 only"},{"key":"C","text":"App2, App3, and App4 only"},{"key":"D","text":"App1, App2, App3, and App4"}]'::jsonb, '["D"]'::jsonb, 'Tích hợp mạng ảo gửi lưu lượng truy cập đi có thể áp dụng của ứng dụng thông qua mạng con tích hợp của ứng dụng đó, nơi áp dụng các quy tắc nhóm bảo mật mạng. App1, App2 và App3 lần lượt được tích hợp với Subnet1, Subnet2 và Subnet3; App4 được triển khai lên Subnet4 ở tầng bị cô lập. Vì NSG1 được liên kết với từng mạng con đó nên nó kiểm soát lưu lượng truy cập ra bên ngoài hiện hành của cả bốn ứng dụng.', 'General', '["AZ-500","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783966881733-m4zbf7c5.png', 'published'),
  ('az500-382', 'az-500', 382, 'Your network has an on-premises Active Directory domain named contoso.com, which includes a user named User1.  
  
You have an Azure subscription linked to an Azure Active Directory (Azure AD) tenant named contoso.com. The tenant includes an Azure Storage account named storage1, and storage1 has an Azure file share named share1.  
  
At present, the domain and tenant are not integrated.  
  
You must ensure that User1 can access share1 by using domain credentials.  
  
Which three actions should you take, in sequence?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"C"},{"id":"step2","text":"Slot 2:","correctAnswer":"B"},{"id":"step3","text":"Slot 3:","correctAnswer":"E"}],"choices":[{"key":"A","text":"Create a private link to storage1."},{"key":"B","text":"Enable Active Directory Domain Services (AD DS) authentication on storage1."},{"key":"C","text":"Implement Azure AD Connect."},{"key":"D","text":"Create a service endpoint to storage1."},{"key":"E","text":"Assign share-level permissions for share1."}]}'::jsonb, '["step1=C","step2=B","step3=E"]'::jsonb, 'Azure AD Connect đồng bộ hóa danh tính AD DS tại chỗ với Azure AD. Azure Files sau đó có thể xác thực quyền truy cập SMB bằng cách sử dụng thông tin xác thực AD DS tại chỗ sau khi xác thực AD DS được bật trên tài khoản lưu trữ. Các quyền Azure RBAC ở cấp độ chia sẻ phải được chỉ định sau khi nguồn nhận dạng được bật để cấp quyền truy cập vào chia sẻ tệp.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published'),
  ('az500-383', 'az-500', 383, 'You are investigating a security issue for an Azure Storage account.  
  
You enable Azure Storage Analytics logs and archive them to a storage account.  
  
What should you use to retrieve the diagnostic logs?', '[{"key":"A","text":"Azure Cosmos DB explorer"},{"key":"B","text":"Azure Monitor"},{"key":"C","text":"AzCopy"},{"key":"D","text":"Microsoft Defender for Cloud"}]'::jsonb, '["C"]'::jsonb, 'Dữ liệu nhật ký Azure Storage Analytics được lưu trữ dưới dạng các đốm màu. AzCopy có thể tải xuống các đốm nhật ký có liên quan từ tài khoản lưu trữ để truy xuất chúng nhằm phân tích.', 'General', '["AZ-500","General"]'::jsonb, NULL, 'published')
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