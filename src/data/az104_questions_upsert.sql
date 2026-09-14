-- =========================================================================
-- STANDALONE SQL IMPORT FOR AZ-104: Microsoft Azure Administrator
-- Total questions: 188 questions
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
  'az-104',
  'Microsoft Azure Administrator',
  'AZ-104',
  'Chinh phục chứng chỉ Microsoft Azure Administrator (AZ-104). Bộ câu hỏi toàn diện về Quản lý danh tính và quản trị Azure, Triển khai và quản lý lưu trữ, Triển khai tài nguyên điện toán Azure, Cấu hình và quản lý mạng ảo, Giám sát và sao lưu tài nguyên Azure.',
  'Trung cấp',
  '16-20 Giờ',
  'bg-gradient-to-br from-blue-700 via-sky-800 to-slate-950 text-white',
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
  ('az104-1', 'az-104', 1, 'You create a Recovery Services vault backup policy named **Policy1** as shown in the following exhibit:  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783646350845-vajeq9le.png)  
  
Use the drop-down menus to choose the answer that completes each statement based on the graphic.', '[]'::jsonb, '[]'::jsonb, 'Azure Backup có thể chỉ định mức lưu giữ hàng ngày, hàng tuần, hàng tháng và hàng năm cho cùng một điểm khôi phục khi điểm đó khớp với quy tắc đã định cấu hình và điểm được lưu giữ theo thời gian lưu giữ khớp lâu nhất. Tại đây, việc sao lưu diễn ra hàng ngày lúc 11:00 tối. Lưu giữ hàng tuần áp dụng cho các bản sao lưu vào Chủ nhật trong 10 tuần, lưu giữ hàng tháng áp dụng cho các bản sao lưu được thực hiện vào ngày đầu tiên của tháng trong 36 tháng và lưu giữ hàng năm áp dụng cho các bản sao lưu được thực hiện vào ngày 1 tháng 3 trong 10 năm. Vì vậy, bản sao lưu vào Chủ Nhật, ngày 1 tháng 3 là điểm lưu giữ hàng năm và được lưu giữ trong 10 năm. Bản sao lưu vào Chủ Nhật, ngày 1 tháng 11 không phải là điểm hàng năm, nhưng nó vừa là điểm hàng tuần vừa là điểm hàng tháng; mức giữ hàng tháng là 36 tháng thì dài hơn nên số điểm đó được giữ là 36 tháng.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783646350845-vajeq9le.png', 'published'),
  ('az104-2', 'az-104', 2, 'You have an Azure subscription that contains a Recovery Services vault named Vault1. The subscription includes the virtual machines shown in the following table:  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783631013861-jsnbsz7c.png)  
  
You plan to schedule backups to run every night at 23:00.  
  
Which virtual machines can you back up by using Azure Backup?', '[{"key":"A","text":"VM1 and VM3 only"},{"key":"B","text":"VM1, VM2, VM3 and VM4"},{"key":"C","text":"VM1 and VM2 only"},{"key":"D","text":"VM1 only"}]'::jsonb, '["B"]'::jsonb, 'Azure Backup dành cho Azure virtual machines hỗ trợ các hệ điều hành máy chủ được liệt kê và các bản phân phối Linux được hỗ trợ, bao gồm Windows Server 2012 R2, Windows Server 2016 và Ubuntu Server 18.04 LTS. Ma trận hỗ trợ hiện tại của Microsoft Learn cũng bao gồm máy khách Windows 10 để sao lưu Azure VM. Ngoài ra, bản sao lưu Azure VM là một hoạt động sao lưu cấp nền tảng và một máy ảo được đặt cấu hình để tự động tắt sớm hơn vào buổi tối sẽ không khiến nó bị loại khỏi khả năng bảo vệ. Do đó VM1, VM2, VM3 và VM4 đều có thể được sao lưu bởi Azure Backup.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783631013861-jsnbsz7c.png', 'published'),
  ('az104-3', 'az-104', 3, 'Your company has three offices located in Miami, Los Angeles, and New York. Each office contains a datacenter.  
  
You have an Azure subscription that includes resources in the East US and West US Azure regions. Each region contains a virtual network, and the virtual networks are peered.  
  
You need to connect the datacenters to the subscription. The solution must minimize network latency between the datacenters.  
  
What should you create?', '[{"key":"A","text":"three Azure Application Gateways and one On-premises data gateway"},{"key":"B","text":"three virtual hubs and one virtual WAN"},{"key":"C","text":"three virtual WANs and one virtual hub"},{"key":"D","text":"three On-premises data gateways and one Azure Application Gateway"}]'::jsonb, '["B"]'::jsonb, 'Azure Virtual WAN là dịch vụ Azure nhằm kết nối các văn phòng chi nhánh và trung tâm dữ liệu tại chỗ với Azure thông qua các trung tâm ảo khu vực. Để giảm thiểu độ trễ, mỗi trang web vật lý phải kết nối với vùng Azure gần nhất bằng cách sử dụng trung tâm ảo riêng và nhiều trung tâm trong cùng một mạng WAN ảo sẽ được tự động kết nối với nhau qua đường trục của Microsoft. Do đó, một mạng WAN ảo duy nhất có ba trung tâm ảo cung cấp quyền truy cập khu vực có độ trễ thấp cho ba trung tâm dữ liệu trong khi vẫn duy trì kết nối trên toàn môi trường. Các mạng WAN ảo riêng biệt sẽ cách ly các trung tâm với nhau và Cổng ứng dụng hoặc cổng dữ liệu tại chỗ không cung cấp cấu trúc liên kết mạng từ nhánh tới Azure này.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-4', 'az-104', 4, 'You have an Azure subscription that contains a virtual machine named VM1 and an Azure function named App1.  
  
You need to create an alert rule that will run App1 if VM1 stops.  
  
What should you create for the alert rule?', '[{"key":"A","text":"an application security group"},{"key":"B","text":"a security group that has dynamic device membership"},{"key":"C","text":"an action group"},{"key":"D","text":"an application group"}]'::jsonb, '["C"]'::jsonb, 'Trong Azure Monitor, quy tắc cảnh báo sẽ kích hoạt một nhóm hành động khi điều kiện của nó được đáp ứng. Các nhóm hành động có thể thực hiện các hành động tự động như gọi Hàm Azure, đây là cách App1 có thể chạy khi có cảnh báo phát hiện thấy VM1 đã dừng. Microsoft Learn tuyên bố rằng các cảnh báo sẽ khởi tạo nhóm hành động liên quan và các nhóm hành động đó có thể bao gồm Azure functions.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-5', 'az-104', 5, 'You have an Azure virtual network named VNet1 that is connected to your on-premises network by using a site-to-site VPN. VNet1 contains one subnet named Subnet1.  
  
Subnet1 is associated with a network security group (NSG) named NSG1. Subnet1 contains a basic internal load balancer named ILB1. ILB1 has three Azure virtual machines in the backend pool.  
  
You need to collect data about the IP addresses that connect to ILB1. You must be able to run interactive queries from the Azure portal against the collected data.  
  
What should you do?', '[]'::jsonb, '[]'::jsonb, 'Để xác định các địa chỉ IP kết nối thông qua bộ cân bằng tải nội bộ, phép đo từ xa có liên quan là dữ liệu luồng mạng, dữ liệu này được thu thập từ nhóm bảo mật mạng bằng cách sử dụng tính năng ghi nhật ký luồng NSG thay vì từ chính tài nguyên của bộ cân bằng tải. Gửi dữ liệu đó tới Azure Monitor Đăng nhập vào không gian làm việc Log Analytics cho phép truy vấn KQL tương tác trực tiếp trong cổng Azure. Việc bật chẩn đoán trên ILB1 sẽ cung cấp dữ liệu giám sát cân bằng tải chứ không cung cấp khả năng hiển thị luồng máy khách cần thiết; việc bật chẩn đoán trên máy ảo cũng không phải là nguồn xác thực ở cấp độ mạng cho tất cả các kết nối đi qua mạng con và NSG.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-6', 'az-104', 6, 'You have an Azure Active Directory (Azure AD) tenant that contains 5,000 user accounts.  
  
You create a new user account named AdminUser1.  
  
You need to assign the **User administrator** administrative role to AdminUser1.  
  
What should you do from the user account properties?', '[{"key":"A","text":"From the Licenses blade, assign a new license"},{"key":"B","text":"From the Directory role blade, modify the directory role"},{"key":"C","text":"From the Groups blade, invite the user account to a new group"}]'::jsonb, '["B"]'::jsonb, 'Quyền **Quản trị viên người dùng** là vai trò quản trị Azure AD tích hợp sẵn, do đó, nó được chỉ định từ **Vai trò thư mục** hoặc cài đặt vai trò được chỉ định của người dùng. Việc chuyển nhượng giấy phép chỉ cấp quyền sử dụng sản phẩm/dịch vụ và việc thêm hoặc mời người dùng vào nhóm không chỉ định vai trò quản trị tích hợp này trong quy trình làm việc thuộc tính người dùng. Tài liệu của Microsoft về việc gán vai trò Microsoft Entra cho thấy việc gán vai trò được thực hiện bằng cách chọn người dùng và gán vai trò thư mục.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-7', 'az-104', 7, 'You have an Azure Storage account named storage1 that stores images.  
  
You need to create a new storage account and replicate the images in storage1 to the new account by using object replication.  
  
How should you configure the new account?', '[]'::jsonb, '[]'::jsonb, 'Bản sao đối tượng Azure Storage sao chép các khối khối không đồng bộ giữa vùng chứa nguồn và vùng chứa đích. Tính năng này được hỗ trợ trên các tài khoản lưu trữ v2 đa năng và tài khoản khối blob cao cấp, không phải tài khoản FileStorage. Vì chính sách sao chép được xác định giữa các vùng chứa nên đối tượng đích phải tồn tại trong tài khoản mới là vùng chứa blob.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-8', 'az-104', 8, 'Your company has an Azure Active Directory (Azure AD) tenant configured for hybrid coexistence with the on-premises Active Directory domain.  
  
You plan to deploy several new virtual machines (VMs) in Azure. The VMs will have the same operating system and custom software requirements.  
  
You configure a reference VM in the on-premises virtual environment and then generalize the VM to create an image.  
  
You need to upload the image to Azure so that it is available for selection when you create the new Azure VMs.  
  
Which PowerShell cmdlets should you use?', '[{"key":"A","text":"Add-AzVM"},{"key":"B","text":"Add-AzVhd"},{"key":"C","text":"Add-AzImage"},{"key":"D","text":"Add-AzImageDataDisk"}]'::jsonb, '["B"]'::jsonb, '`Add-AzVhd` là lệnh ghép ngắn Azure PowerShell được sử dụng để tải ổ cứng ảo từ máy tại chỗ lên Azure. Đó là bước bắt buộc để đặt hình ảnh tổng quát vào Azure để nó có thể được sử dụng làm cơ sở cho các máy ảo mới. `Add-AzVM` dành cho cấu hình/triển khai VM và `Add-AzImageDataDisk` chỉ dành cho việc xây dựng định nghĩa hình ảnh bằng các đĩa dữ liệu thay vì tải lên hình ảnh hệ điều hành nguồn. Microsoft Learn ghi lại `Add-AzVhd` khi tải ổ cứng ảo từ máy tại chỗ lên Azure, phù hợp với yêu cầu này.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-9', 'az-104', 9, 'You have an Azure subscription named Subscription1.  
  
You have 5 TB of data that must be transferred to Subscription1.  
  
You plan to use an Azure Import/Export job.  
  
What can you use as the destination for the imported data?', '[{"key":"A","text":"Azure Data Lake Store"},{"key":"B","text":"Azure File Storage"},{"key":"C","text":"Azure SQL Database"},{"key":"D","text":"the Azure File Sync Storage Sync Service"}]'::jsonb, '["B"]'::jsonb, 'Nhập/Xuất Azure hỗ trợ nhập dữ liệu bằng cách vận chuyển ổ đĩa đến trung tâm dữ liệu Azure và các mục tiêu được hỗ trợ là Azure Blob storage và Azure Files. Trong số các lựa chọn được liệt kê, chỉ Bộ lưu trữ tệp Azure tương ứng với Azure Files, vì vậy đây là đích đến hợp lệ cho dữ liệu đã nhập.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-10', 'az-104', 10, 'You have two Azure subscriptions named **Sub1** and **Sub2**.  
  
An administrator creates a custom role that has an assignable scope set to a resource group named **RG1** in **Sub1**.  
  
You need to ensure that you can apply the custom role to any resource group in **Sub1** and **Sub2**. The solution must minimize administrative effort.  
  
What should you do?', '[{"key":"A","text":"Select the custom role and add Sub1 and Sub2 to the assignable scopes. Remove RG1 from the assignable scopes."},{"key":"B","text":"Create a new custom role for Sub1. Create a new custom role for Sub2. Remove the role from RG1."},{"key":"C","text":"Create a new custom role for Sub1 and add Sub2 to the assignable scopes. Remove the role from RG1."},{"key":"D","text":"Select the custom role and add Sub1 to the assignable scopes. Remove RG1 from the assignable scopes. Create a new custom role for Sub2."}]'::jsonb, '["A"]'::jsonb, 'Trong Azure RBAC, vai trò tùy chỉnh chỉ có thể được gán trong `AssignableScopes` được xác định. Nếu phạm vi là một nhóm tài nguyên thì chỉ có thể chỉ định vai trò ở nhóm tài nguyên đó hoặc thấp hơn. Để sử dụng cùng một vai trò tùy chỉnh cho bất kỳ nhóm tài nguyên nào trong cả hai đăng ký, định nghĩa vai trò phải bao gồm **Sub1** và **Sub2** trong `AssignableScopes`. Ở phạm vi đăng ký, vai trò này sẽ có sẵn để gán cho bất kỳ nhóm tài nguyên nào trong đăng ký đó. Việc sử dụng một định nghĩa vai trò được cập nhật sẽ ít tốn công sức quản trị hơn so với việc tạo các vai trò tùy chỉnh riêng biệt cho mỗi đăng ký.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-11', 'az-104', 11, 'You have an Azure Storage account named `storage1`.  
  
For `storage1`, you create an encryption scope named `Scope1`.  
  
Which storage types can you encrypt by using `Scope1`?', '[{"key":"A","text":"file shares only"},{"key":"B","text":"containers only"},{"key":"C","text":"file shares and containers only"},{"key":"D","text":"containers and tables only"},{"key":"E","text":"file shares, containers, and tables only"},{"key":"F","text":"file shares, containers, tables, and queues"}]'::jsonb, '["B"]'::jsonb, 'Phạm vi mã hóa của Bộ lưu trữ Azure chỉ áp dụng cho bộ lưu trữ Blob. Phạm vi mã hóa có thể được chỉ định ở cấp vùng chứa làm mặc định và được sử dụng cho các đốm màu trong vùng chứa đó, nhưng nó không áp dụng cho Azure Files, Lưu trữ bảng hoặc Lưu trữ hàng đợi. Do đó, loại lưu trữ duy nhất trong các tùy chọn có thể được mã hóa bằng cách sử dụng phạm vi là vùng chứa.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-12', 'az-104', 12, 'You have an Azure web app named App1. App1 has the deployment slots shown in the following table:  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783630248313-kneeyq1l.png)  
  
In webapp1-test, you validate several changes to App1.  
  
You back up App1.  
  
You swap webapp1-test with webapp1-prod and discover that App1 is having performance issues.  
  
You need to return to the previous version of App1 as quickly as possible.  
  
What should you do?', '[{"key":"A","text":"Redeploy App1"},{"key":"B","text":"Swap the slots"},{"key":"C","text":"Clone App1"},{"key":"D","text":"Restore the backup of App1"}]'::jsonb, '["B"]'::jsonb, 'Hoán đổi vị trí triển khai Azure App Service có thể đảo ngược bằng cách thực hiện một hoán đổi khác giữa các vị trí tương tự. Vì phiên bản sản xuất trước đó vẫn còn ở vị trí khác sau lần hoán đổi đầu tiên nên việc hoán đổi lại các vị trí là cách nhanh nhất để khôi phục quá trình triển khai sản xuất trước đó. Khôi phục sao lưu chậm hơn và không phải là phương pháp khôi phục nhanh nhất đối với việc hoán đổi vị trí không thành công.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783630248313-kneeyq1l.png', 'published'),
  ('az104-13', 'az-104', 13, 'You have an Azure subscription named Subscription1.  
  
You need to transfer 5 TB of data to Subscription1.  
  
You plan to use an Azure Import/Export job.  
  
What can you use as the destination for the imported data?', '[{"key":"A","text":"an Azure Cosmos DB database"},{"key":"B","text":"Azure Blob storage"},{"key":"C","text":"Azure Data Lake Store"},{"key":"D","text":"the Azure File Sync Storage Sync Service"}]'::jsonb, '["B"]'::jsonb, 'Nhập/Xuất Azure được thiết kế để nhập dữ liệu vào Bộ lưu trữ Azure chứ không phải vào cơ sở dữ liệu cấp cao hơn hoặc các dịch vụ đồng bộ hóa. Microsoft Learn tuyên bố rằng lệnh nhập có thể nhập dữ liệu vào Azure Blobs hoặc Azure Files. Trong số các tùy chọn được cung cấp, chỉ Azure Blob storage là một trong những đích được hỗ trợ. Azure Cosmos DB, Azure Data Lake Store và Dịch vụ đồng bộ hóa lưu trữ đồng bộ hóa tệp Azure không phải là đích đến hợp lệ cho công việc Nhập/Xuất Azure.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-14', 'az-104', 14, 'You have an Azure subscription that contains the resources in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783632894252-5uq86e0t.png)  
  
You install the Web Server server role (IIS) on VM1 and VM2, and then add VM1 and VM2 to LB1.  
  
LB1 is configured as shown in the LB1 exhibit. (Click the **LB1** tab.)  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783632897089-7csnjrmg.png)  
  
Rule1 is configured as shown in the Rule1 exhibit. (Click the **Rule1** tab.)  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783632903950-59vjdr3l.jpg)  
  
For each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"VM1 is in the same availability set as VM2.","correctAnswer":"Yes"},{"id":"2","text":"If Probe1.htm is present on VM1 and VM2, LB1 will balance TCP port 80 between VM1 and VM2.","correctAnswer":"Yes"},{"id":"3","text":"If you delete Rule1, LB1 will balance all the requests between VM1 and VM2 for all the ports.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:Yes","2:Yes","3:No"]'::jsonb, 'Bộ cân bằng tải Azure cơ bản chỉ có thể cân bằng tải lưu lượng truy cập đến các máy ảo phụ trợ khi các máy ảo đó được nhóm tương thích cho nhóm phụ trợ; với tư cách thành viên VM dựa trên NIC, các máy ảo phụ trợ phải nằm trong cùng một bộ availability set hoặc tỷ lệ. Quy tắc được định cấu hình chỉ cân bằng rõ ràng cổng TCP 80 và đầu dò tình trạng HTTP được liên kết trên `/Probe1.htm` sẽ xác định xem mỗi phiên bản phụ trợ có đủ điều kiện nhận luồng mới hay không. Nếu cả hai máy ảo đều trả về phản hồi tốt cho thăm dò đó thì cả hai đều có thể nhận được lưu lượng TCP/80. Việc xóa Quy tắc 1 sẽ xóa ánh xạ phân phối lưu lượng truy cập vào và Azure Load Balancer không tự động cân bằng tất cả các cổng trừ khi tồn tại quy tắc cổng HA chuyên dụng bằng giao thức `All` và cổng `0`, trường hợp này không xảy ra ở đây.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783632894252-5uq86e0t.png', 'published'),
  ('az104-15', 'az-104', 15, 'You have an Azure subscription.  
  
You plan to deploy the Azure container instances shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783643029016-f4qq0ux7.png)  
  
Which instances can you deploy to a container group?', '[{"key":"A","text":"Instance1 only"},{"key":"B","text":"Instance2 only"},{"key":"C","text":"Instance1 and Instance2 only"},{"key":"D","text":"Instance3 and Instance4 only"}]'::jsonb, '["D"]'::jsonb, 'Các nhóm vùng chứa Azure Container Instances chỉ hỗ trợ một loại hệ điều hành duy nhất (Windows hoặc Linux) trên tất cả các vùng chứa trong nhóm. Nhiều vùng chứa cho mỗi nhóm hiện là tính năng chỉ dành cho Linux. Do đó, chỉ các bộ chứa Linux mới có thể được triển khai cùng nhau trong một nhóm bộ chứa duy nhất, khiến phiên bản 3 và 4 (các bộ chứa Linux) trở thành sự kết hợp hợp lệ.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783643029016-f4qq0ux7.png', 'published'),
  ('az104-16', 'az-104', 16, 'You have an Azure subscription named **Subscription1**.  
  
You create an Azure Storage account named **contosostorage**, and then you create a file share named **data**.  
  
Which UNC path should you include in a script that references files from the **data** file share?  
  
Each value may be used once, more than once, or not at all.', '{"statements":[{"id":"s1","text":"Slot 1:","correctAnswer":"B"},{"id":"s2","text":"Slot 2:","correctAnswer":"G"},{"id":"s3","text":"Slot 3:","correctAnswer":"F"}],"choices":[{"key":"A","text":"blob"},{"key":"B","text":"contosostorage"},{"key":"C","text":"file"},{"key":"D","text":"portal.azure.com"},{"key":"E","text":"blob.core.windows.net"},{"key":"F","text":"data"},{"key":"G","text":"file.core.windows.net"},{"key":"H","text":"subscription1"}]}'::jsonb, '["s1=B","s2=G","s3=F"]'::jsonb, 'Azure Files sử dụng định dạng đặt tên UNC `\\<storage-account-name>.file.core.windows.net\<file-share-name>` để truy cập SMB. Với tài khoản lưu trữ **contosostorage** và chia sẻ tệp **dữ liệu**, đường dẫn chính xác là `\\contosostorage.file.core.windows.net\data`. Điểm cuối blob không được sử dụng để chia sẻ tệp.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-17', 'az-104', 17, 'You have an Azure subscription.  
  
You plan to deploy the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783646372348-40msfbvi.png)  
  
You need to create a single Azure Resource Manager (ARM) template that will be used to deploy the resources.  
  
Which resource should be included in the `dependsOn` section for VM1?', '[{"key":"A","text":"VNET1"},{"key":"B","text":"NIC1"},{"key":"C","text":"IP1"},{"key":"D","text":"NSG1"}]'::jsonb, '["B"]'::jsonb, 'Trong mẫu ARM, Azure virtual machine phải phụ thuộc vào giao diện mạng được gắn vào nó, vì VM tham chiếu NIC đó trong `networkProfile` của nó và không thể được cung cấp cho đến khi NIC tồn tại. Các tài nguyên liên quan như mạng ảo, địa chỉ IP công cộng và nhóm bảo mật mạng thường phụ thuộc vào tài nguyên NIC thay vì phụ thuộc trực tiếp vào máy ảo.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783646372348-40msfbvi.png', 'published'),
  ('az104-18', 'az-104', 18, 'You have an Azure subscription that is used by four departments in your company. The subscription contains 10 resource groups. Each department uses resources in several resource groups.  
  
You need to send a report to the finance department. The report must detail the costs for each department.  
  
Which three actions should you perform in sequence?', '{"statements":[{"id":"slot1","text":"Slot 1:","correctAnswer":"B"},{"id":"slot2","text":"Slot 2:","correctAnswer":"D"},{"id":"slot3","text":"Slot 3:","correctAnswer":"C"}],"choices":[{"key":"A","text":"Assign a tag to each resource group."},{"key":"B","text":"Assign a tag to each resource."},{"key":"C","text":"Download the usage report."},{"key":"D","text":"From the Cost analysis blade, filter the view by tag."},{"key":"E","text":"Open the Resource costs blade of each resource group."}]}'::jsonb, '["slot1=B","slot2=D","slot3=C"]'::jsonb, 'Để phân bổ chi phí Azure cho các bộ phận chia sẻ nhiều nhóm tài nguyên, hãy áp dụng thẻ bộ phận ở cấp độ tài nguyên vì Quản lý chi phí có thể phân tích chi phí theo thẻ tài nguyên và thẻ nhóm tài nguyên không được sử dụng cho mục đích này trong Phân tích chi phí. Sau khi gắn thẻ, hãy sử dụng Phân tích chi phí để lọc hoặc nhóm chi phí theo thẻ bộ phận, sau đó tải xuống báo cáo chi tiết sử dụng để cung cấp tài chính với bảng phân tích chi phí chi tiết của bộ phận.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-19', 'az-104', 19, 'You plan to deploy route-based Site-to-Site VPN connections between several on-premises locations and an Azure virtual network.  
  
Which tunneling protocol should you use?', '[{"key":"A","text":"IKEv1"},{"key":"B","text":"PPTP"},{"key":"C","text":"IKEv2"},{"key":"D","text":"L2TP"}]'::jsonb, '["C"]'::jsonb, 'Cổng VPN Site-to-Site dựa trên tuyến đường Azure sử dụng IPsec/IKE với IKEv2 cho các kết nối này. Microsoft Learn tuyên bố rằng khi kết nối với các cổng VPN dựa trên tuyến đường Azure, các thiết bị VPN tại chỗ phải hỗ trợ IKEv2. PPTP và L2TP là các giao thức truy cập từ xa chứ không phải giao thức được sử dụng cho các cổng S2S VPN dựa trên tuyến đường Azure và IKEv1 không phải là lựa chọn chính xác cho thiết kế nhiều trang web dựa trên tuyến đường này.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-20', 'az-104', 20, 'Your company has a main office in London that contains 100 client computers.  
  
Three years ago, you migrated to Azure Active Directory (Azure AD).  
  
The company''s security policy states that all personal devices and corporate-owned devices must be registered or joined to Azure AD.  
  
A remote user named User1 is unable to join a personal device to Azure AD from a home network.  
  
You verify that User1 was able to join devices to Azure AD in the past.  
  
You need to ensure that User1 can join the device to Azure AD.  
  
What should you do?', '[{"key":"A","text":"Assign the User administrator role to User1."},{"key":"B","text":"From the Device settings blade, modify the Maximum number of devices per user setting."},{"key":"C","text":"Create a point-to-site VPN from the home network of User1 to Azure."},{"key":"D","text":"From the Device settings blade, modify the Users may join devices to Azure AD setting."}]'::jsonb, '["B"]'::jsonb, 'Cài đặt thiết bị Microsoft Entra phân biệt giữa việc người dùng có được phép tham gia thiết bị hay không và mỗi người dùng có thể tham gia hoặc đăng ký bao nhiêu thiết bị. Vì User1 đã có thể kết nối các thiết bị trước đó nên vấn đề khó có thể là quyền chung để kết nối các thiết bị. Trình chặn phổ biến là người dùng đã đạt đến giới hạn thiết bị được định cấu hình của đối tượng thuê. Việc sửa đổi **Số lượng thiết bị tối đa cho mỗi người dùng** cho phép người dùng tham gia thêm một thiết bị cá nhân.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-21', 'az-104', 21, 'You have an Azure subscription that contains the virtual networks shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783646350689-xnj3jy2e.png)  
  
The subscription contains the subnets shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783646353486-th3o9cxh.png)  
  
The subscription contains the storage accounts shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783646356422-8c4r4njq.png)  
  
You create a service endpoint policy named **Policy1** in the **South Central US** Azure region to allow connectivity to all the storage accounts in the subscription.  
  
For each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"Policy1 can be applied to Subnet3.","correctAnswer":"Yes"},{"id":"2","text":"Only storage1 and storage2 can be accessed from VNet2.","correctAnswer":"No"},{"id":"3","text":"Only storage2 can be accessed from VNet3.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:Yes","2:No","3:No"]'::jsonb, 'Chính sách service endpoint cho Azure Storage chỉ có thể được liên kết với các mạng con đã bật Microsoft.Storage service endpoint và chính sách này phải ở cùng khu vực với mạng ảo của mạng con. Subnet3 nằm trong VNet3, nằm ở miền Trung Nam Hoa Kỳ nên Policy1 có thể được áp dụng ở đó. Subnet2 nằm ở Đông Nam Á nên không thể áp dụng chính sách Nam Trung Bộ của Hoa Kỳ cho nó. Ngoài ra, khi áp dụng chính sách lưu trữ service endpoint, phạm vi điểm cuối Lưu trữ Azure sẽ trở thành toàn cầu và có thể cho phép các tài khoản lưu trữ được chỉ định trên khắp các khu vực. Vì Policy1 cho phép tất cả các tài khoản lưu trữ trong thuê bao nên VNet3 có thể truy cập vào storage1, storage2, storage3 thông qua chính sách nên không chỉ giới hạn ở storage2. VNet2 không chịu sự điều chỉnh của Chính sách 1 nên cũng không bị giới hạn ở chỉ storage1 và storage2.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783646350689-xnj3jy2e.png', 'published'),
  ('az104-22', 'az-104', 22, 'You have an Azure Active Directory (Azure AD) tenant named **contoso.onmicrosoft.com** that contains the users shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783630973776-yynwc5l1.png)  
  
You enable password reset for **contoso.onmicrosoft.com** as shown in the **Password Reset** exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783630976234-hkmfc1vh.png)  
  
You configure the authentication methods for password reset as shown in the **Authentication Methods** exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783630979396-zgfgd8fa.png)  
  
For each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"After User2 answers three security questions correctly, he can reset his password immediately.","correctAnswer":"No"},{"id":"2","text":"If User1 forgets her password, she can reset the password by using the mobile phone app.","correctAnswer":"No"},{"id":"3","text":"User3 can add security questions to the password reset process","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:No","3:No"]'::jsonb, 'Tính năng đặt lại mật khẩu tự phục vụ chỉ được bật cho nhóm đã chọn, đó là Nhóm2, do đó chỉ người dùng Group2 mới được bảo vệ trừ khi họ giữ vai trò quản trị viên. Người dùng2 được bảo vệ nhưng chính sách này yêu cầu hai phương thức xác thực để đặt lại mật khẩu; các câu hỏi bảo mật được tính là một phương thức và ba câu trả lời đúng chỉ đáp ứng yêu cầu câu hỏi được định cấu hình cho phương thức duy nhất đó chứ không phải yêu cầu đặt lại hai phương thức đầy đủ. Người dùng1 không thuộc Nhóm2 và có vai trò quản trị viên no, vì vậy cô ấy không được kích hoạt SSPR trong cấu hình này. Người dùng3 có vai trò Quản trị viên người dùng và tài khoản quản trị viên luôn được bật cho SSPR theo chính sách hai cổng mạnh mẽ riêng biệt; quản trị viên phải sử dụng hai phương pháp và không thể sử dụng câu hỏi bảo mật để đặt lại mật khẩu.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783630973776-yynwc5l1.png', 'published'),
  ('az104-23', 'az-104', 23, 'Your network has an on-premises Active Directory Domain Services (AD DS) domain.  
  
The domain includes the identities in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784205611594-9w0ng0dt.png)  
  
You have an Azure subscription containing a storage account named storage1. The file shares in storage1 use AD DS as the identity source, and the default share-level permissions are set to **Enable permissions for all authenticated users and groups**.  
  
You create an Azure Files share named share1 with the roles shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784205614462-er71gqad.png)  
  
Your Microsoft Entra tenant contains a cloud-only user named User3.  
  
You use Microsoft Entra Connect to synchronize OU1 from the AD DS domain to the Microsoft Entra tenant.  
  
For each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"User1 can access content in share1.","correctAnswer":"Yes"},{"id":"2","text":"User2 can access content in share1.","correctAnswer":"Yes"},{"id":"3","text":"User3 can access content in share1.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:Yes","2:Yes","3:No"]'::jsonb, 'Cài đặt cấp độ chia sẻ Azure Files mặc định cho tất cả người dùng và nhóm được xác thực cấp quyền truy cập cấp độ chia sẻ vào danh tính được xác thực trong thư mục AD DS được định cấu hình. Do đó, cả User1 và User2 đều có thể xác thực bằng AD DS và truy cập share1; các nhiệm vụ rõ ràng của Người đọc và Người đóng góp sẽ không xóa quyền truy cập mặc định đó. User3 chỉ hoạt động trên nền tảng đám mây và không có danh tính AD DS để xác thực Kerberos cho chia sẻ Azure Files có nguồn nhận dạng là AD DS, vì vậy User3 không thể truy cập nó.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1784205611594-9w0ng0dt.png', 'published'),
  ('az104-24', 'az-104', 24, 'You create an Azure VM named VM1 that runs Windows Server 2019.  
  
VM1 is configured as shown in the exhibit. (Click the Exhibit tab.)  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783645773627-0no3cyp0.png)  
  
You need to enable Desired State Configuration for VM1.  
  
What should you do first?', '[{"key":"A","text":"Connect to VM1."},{"key":"B","text":"Start VM1."},{"key":"C","text":"Capture a snapshot of VM1."},{"key":"D","text":"Configure a DNS name for VM1."}]'::jsonb, '["B"]'::jsonb, 'Cấu hình trạng thái mong muốn Azure được bật trên Azure virtual machine bằng cách cài đặt và sử dụng tiện ích mở rộng VM. Tiện ích mở rộng VM chỉ có thể được cung cấp khi VM đang chạy và Tác nhân Azure VM bên trong máy khách có thể giao tiếp với Azure. Vì VM1 được hiển thị là **Đã dừng (đã hủy phân bổ)** nên bước đầu tiên bắt buộc là khởi động máy ảo trước khi bật DSC. Tài liệu Microsoft Learn về Cấu hình trạng thái tự động hóa Azure và các tiện ích mở rộng Azure VM hỗ trợ việc triển khai/cài đặt tiện ích mở rộng DSC tùy thuộc vào việc VM được bật nguồn và có thể truy cập được bởi tác nhân VM.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783645773627-0no3cyp0.png', 'published'),
  ('az104-25', 'az-104', 25, 'You deploy an Azure Kubernetes Service (AKS) cluster named Cluster1 that uses the IP addresses shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783630954898-40gd6ctc.png)  
  
You need to enable internet users to access the applications running in Cluster1.  
  
Which IP address should you include in the DNS record for Cluster1?', '[{"key":"A","text":"131.107.2.1"},{"key":"B","text":"10.0.10.11"},{"key":"C","text":"172.17.7.1"},{"key":"D","text":"192.168.10.2"}]'::jsonb, '["A"]'::jsonb, 'Để có quyền truy cập công khai vào các ứng dụng chạy trong AKS, bản ghi DNS phải phân giải thành địa chỉ IP công cộng trên giao diện người dùng cân bằng tải hiển thị dịch vụ ra bên ngoài. Các địa chỉ được liệt kê khác là các địa chỉ mạng chỉ dành cho nội bộ được thời gian chạy cụm, nút hoặc vùng chứa sử dụng và không phù hợp để phân giải tên truy cập internet.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783630954898-40gd6ctc.png', 'published'),
  ('az104-26', 'az-104', 26, 'You have an Azure App Service app named WebApp1 that contains two folders named Folder1 and Folder2.  
  
You need to configure a daily backup of WebApp1. The solution must ensure that Folder2 is excluded from the backup.  
  
What should you create first, and what should you use to exclude Folder2?', '[]'::jsonb, '[]'::jsonb, 'Bản sao lưu Azure App Service lưu trữ các bản sao lưu trong vùng chứa blob trong tài khoản Bộ nhớ Azure, do đó, tài khoản lưu trữ đó phải được tạo trước khi định cấu hình các bản sao lưu theo lịch trình. Dịch vụ ứng dụng cũng hỗ trợ loại trừ các tệp và thư mục khỏi các bản sao lưu trong tương lai bằng cách đặt tệp `_backup.filter` vào thư mục `%HOME%/site/wwwroot` của ứng dụng và liệt kê các đường dẫn cần bỏ qua, đó là cách loại trừ Folder2.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-27', 'az-104', 27, 'You have an Azure subscription that contains the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783645822831-bq7ygocb.png)  
  
You need to assign Workspace1 a role that allows read, write, and delete operations for the data stored in the containers of storage1.  
  
Which role should you assign?', '[{"key":"A","text":"Storage Account Contributor"},{"key":"B","text":"Contributor"},{"key":"C","text":"Storage Blob Data Contributor"},{"key":"D","text":"Reader and Data Access"}]'::jsonb, '["C"]'::jsonb, 'Đối với dữ liệu Bộ lưu trữ Azure trong vùng chứa blob, quyền bắt buộc phải là vai trò RBAC trên mặt phẳng dữ liệu. **Người đóng góp dữ liệu Blob lưu trữ** là vai trò tích hợp cấp quyền truy cập đọc, ghi và xóa vào vùng chứa blob và blob. Các vai trò như **Cộng tác viên** và **Cộng tác viên tài khoản lưu trữ** tự quản lý tài nguyên tài khoản lưu trữ nhưng không cấp quyền truy cập trực tiếp vào dữ liệu trong vùng chứa của tài khoản và **Quyền truy cập của người đọc và dữ liệu** không cung cấp quyền ghi hoặc xóa.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783645822831-bq7ygocb.png', 'published'),
  ('az104-29', 'az-104', 29, 'You have an Azure subscription that contains a resource group named **RG1**.  
  
You plan to use an Azure Resource Manager (ARM) template named **template1** to deploy resources. The solution must meet the following requirements:  
  
- Deploy new resources to **RG1**.  
- Remove all existing resources from **RG1** before deploying the new resources.  
  
How should you complete the command?', '[]'::jsonb, '[]'::jsonb, '`New-AzResourceGroupDeployment` sử dụng `-ResourceGroupName` để chỉ định nhóm tài nguyên đích. Để xóa các tài nguyên đã tồn tại trong nhóm tài nguyên nhưng không được xác định trong mẫu, chế độ triển khai phải là `Complete`. `Incremental` sẽ giữ lại các tài nguyên hiện có không xác định, do đó sẽ không đáp ứng yêu cầu dọn dẹp.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-30', 'az-104', 30, 'You have three Azure subscriptions named **Sub1**, **Sub2**, and **Sub3** that are linked to an Azure AD tenant.  
  
The tenant contains:  
  
- a user named **User1**  
- a security group named **Group1**  
- a management group named **MG1**  
  
**User1** is a member of **Group1**.  
  
**Sub1** and **Sub2** are members of **MG1**. **Sub1** contains a resource group named **RG1**. **RG1** contains five Azure functions.  
  
You create the following role assignments for **MG1**:  
  
- **Group1**: **Reader**  
- **User1**: **User Access Administrator**  
  
You assign **User1** the **Virtual Machine Contributor** role for **Sub1** and **Sub2**.  
  
For each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"The Group1 members can view the configurations of the Azure functions.","correctAnswer":"Yes"},{"id":"2","text":"User1 can assign the Owner role for RG1.","correctAnswer":"Yes"},{"id":"3","text":"User1 can create a new resource group and deploy a virtual machine to the new group.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:Yes","2:Yes","3:No"]'::jsonb, 'Các bài tập Azure RBAC kế thừa từ nhóm quản lý đến phạm vi đăng ký, nhóm tài nguyên và phạm vi tài nguyên. Vì Group1 có vai trò Reader tại MG1 nên các thành viên của nhóm có thể xem các tài nguyên và cài đặt của chúng trong Sub1, bao gồm Azure Functions trong RG1. User1 có Quản trị viên truy cập người dùng tại MG1, bao gồm quyền quản lý quyền truy cập bằng cách tạo các phân công vai trò ở các phạm vi con như RG1, do đó, việc chỉ định Chủ sở hữu trên RG1 được cho phép. Virtual Machine Contributor bị giới hạn trong việc quản lý máy ảo và các tài nguyên điện toán liên quan; nó không bao gồm quyền tạo nhóm tài nguyên, vì vậy Người dùng1 không thể tạo nhóm tài nguyên mới mặc dù họ chỉ có thể triển khai VM nếu đã tồn tại một nhóm tài nguyên phù hợp.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-31', 'az-104', 31, 'You have an Azure subscription named **Subscription1** that contains a virtual network named **VNet1**. **VNet1** is in a resource group named **RG1**.  
  
A user named **User1** has the following roles for **Subscription1**:  
  
- **Reader**  
- **Security Admin**  
- **Security Reader**  
  
You need to ensure that **User1** can assign the **Reader** role for **VNet1** to other users.  
  
What should you do?', '[{"key":"A","text":"Remove User1 from the Security Reader and Reader roles for Subscription1. Assign User1 the Contributor role for Subscription1."},{"key":"B","text":"Assign User1 the Contributor role for VNet1."},{"key":"C","text":"Assign User1 the Owner role for VNet1."},{"key":"D","text":"Assign User1 the Network Contributor role for RG1."}]'::jsonb, '["C"]'::jsonb, 'Trong Azure RBAC, việc chỉ định vai trò cho những người dùng khác cần có quyền tạo các nhiệm vụ vai trò ở phạm vi mục tiêu, đó là hành động `Microsoft.Authorization/roleAssignments/write`. Vai trò **Chủ sở hữu** tích hợp bao gồm ủy quyền truy cập và có thể tạo các phân công vai trò, trong khi **Cộng tác viên**, **Cộng tác viên mạng**, **Người đọc**, **Quản trị viên bảo mật** và **Người đọc bảo mật** không cấp quyền gán vai trò. Việc chỉ định **Chủ sở hữu** ở phạm vi **VNet1** mang lại cho Người dùng1 khả năng chỉ định vai trò **Người đọc** cho mạng ảo đó mà không cần cấp quyền sở hữu rộng hơn đối với toàn bộ đăng ký.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-32', 'az-104', 32, 'You have an Azure subscription that contains a virtual machine named VM1.  
  
You plan to deploy an Azure Monitor alert rule that will trigger an alert when CPU usage on VM1 exceeds 80 percent.  
  
You need to ensure that the alert rule sends an email message to two users named User1 and User2.  
  
What should you create for Azure Monitor?', '[{"key":"A","text":"an action group"},{"key":"B","text":"a mail-enabled security group"},{"key":"C","text":"a distribution group"},{"key":"D","text":"a Microsoft 365 group"}]'::jsonb, '["A"]'::jsonb, 'Trong Azure Monitor, thông báo cho quy tắc cảnh báo được xác định bởi một nhóm hành động. Một nhóm hành động có thể bao gồm người nhận email, do đó, việc định cấu hình User1 và User2 trong nhóm hành động sẽ cho phép cảnh báo CPU để VM1 gửi email khi vượt quá ngưỡng. Các nhóm bảo mật hỗ trợ thư, nhóm phân phối và nhóm Microsoft 365 là các đối tượng thư mục hoặc nhắn tin, không phải tài nguyên thông báo cảnh báo Azure Monitor.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-33', 'az-104', 33, 'You have an Azure subscription named Subscription1 that contains the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783630975874-6rybx91y.png)  
  
You create virtual machines in Subscription1 as shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783630979602-7n01klf5.png)  
  
You plan to use Vault1 to back up as many virtual machines as possible.  
  
Which virtual machines can be backed up to Vault1?', '[{"key":"A","text":"VM1 only"},{"key":"B","text":"VM3 and VMC only"},{"key":"C","text":"VM1, VM2, VM3, VMA, VMB, and VMC"},{"key":"D","text":"VM1, VM3, VMA, and VMC only"},{"key":"E","text":"VM1 and VM3 only"}]'::jsonb, '["D"]'::jsonb, 'Azure Backup chỉ có thể bảo vệ Azure virtual machines khi VM nằm trong cùng một đăng ký và cùng vùng Azure với Recovery Services vault; VM có thể nằm trong một nhóm tài nguyên khác với vault. Vì Vault1 nằm ở **Tây Âu** nên các máy ảo ở **Tây Âu** đủ điều kiện: **VM1, VM3, VMA và VMC**. Máy ảo **Bắc Âu** (**VM2** và **VMB**) không đủ điều kiện để sao lưu vào Vault1.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783630975874-6rybx91y.png', 'published'),
  ('az104-34', 'az-104', 34, 'You have an Azure subscription that contains an Azure Active Directory (Azure AD) tenant named `contoso.com` and an Azure Kubernetes Service (AKS) cluster named `AKS1`.  
  
An administrator reports that she can''t grant access to `AKS1` to the users in `contoso.com`.  
  
You need to ensure that access to `AKS1` can be granted to the `contoso.com` users.  
  
What should you do first?', '[{"key":"A","text":"From contoso.com, modify the Organization relationships settings."},{"key":"B","text":"From contoso.com, create an OAuth 2.0 authorization endpoint."},{"key":"C","text":"Recreate AKS1."},{"key":"D","text":"From AKS1, create a namespace."}]'::jsonb, '["C"]'::jsonb, 'Trong trường hợp này, AKS1 rõ ràng đã được tạo mà không được định cấu hình tích hợp Azure AD (Microsoft Entra ID) và tích hợp AKS-to-Azure-AD cũ chỉ có thể được thiết lập khi cụm được tạo chứ không được trang bị thêm vào cụm đang chạy. Tùy chọn được liệt kê duy nhất thực sự thiết lập xác thực dựa trên đối tượng thuê cho cụm là tạo lại AKS1 khi bật tích hợp Azure AD; sửa đổi mối quan hệ của tổ chức, tạo điểm cuối OAuth 2.0 (Azure AD đã tự động hiển thị điểm cuối OAuth2) hoặc việc thêm vùng tên sẽ không cấp quyền truy cập vào cụm người dùng contoso.com.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-35', 'az-104', 35, 'Solution: You use the Azure portal to modify the **grant control** of the Azure AD conditional access policy.  
  
Does the solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["A"]'::jsonb, 'Yes, giải pháp đạt được mục tiêu. Trong chính sách Truy cập có điều kiện của Microsoft Entra (Azure AD), phần điều khiển Grant là nơi quản trị viên kết hợp điều khiển "Yêu cầu xác thực đa yếu tố" với điều khiển dựa trên thiết bị — "Yêu cầu thiết bị phải được đánh dấu là tuân thủ" hoặc "Yêu cầu thiết bị kết hợp Microsoft Entra" — và có thể yêu cầu tất cả các điều khiển đã chọn cùng nhau (VÀ logic) trước khi cấp quyền truy cập. Sửa đổi quyền kiểm soát cấp của chính sách hiện có, vốn đã nằm trong phạm vi nhóm Quản trị viên toàn cầu và đăng nhập từ các vị trí không đáng tin cậy, chính xác là nơi yêu cầu MFA và yêu cầu kết nối thiết bị được thêm vào cùng nhau, để hành động này đáp ứng mục tiêu đã nêu. Ngược lại, các điều khiển phiên Truy cập có điều kiện (hạn chế do ứng dụng thực thi, tần suất đăng nhập, phiên trình duyệt liên tục, Kiểm soát ứng dụng truy cập có điều kiện) chỉ định hình trải nghiệm sau khi quyền truy cập đã được cấp — chúng không thể yêu cầu MFA hoặc thiết bị tuân thủ/đã tham gia, do đó, các điều khiển phiên chỉnh sửa sẽ không đáp ứng được mục tiêu này. Tương tự, trang cài đặt người dùng xác thực đa yếu tố chỉ quản lý các phương thức xác thực đã đăng ký của người dùng; nó không định cấu hình các điều kiện Truy cập có điều kiện như vị trí không đáng tin cậy hoặc cấp các yêu cầu như kết nối thiết bị. Do đó, các biện pháp kiểm soát cấp phép là nơi chính xác và đầy đủ để định cấu hình yêu cầu này.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-36', 'az-104', 36, 'Solution: You go to the multi-factor authentication page to change the user settings.  
  
Does this solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["B"]'::jsonb, 'Việc thay đổi cài đặt trên trang xác thực đa yếu tố không cấu hình chính sách Truy nhập có điều kiện của Azure AD. Cần có Quyền truy cập có điều kiện để kết hợp nhiều điều kiện và điều khiển truy cập, chẳng hạn như nhắm mục tiêu Quản trị viên toàn cầu, giới hạn yêu cầu đối với các vị trí không đáng tin cậy, yêu cầu xác thực đa yếu tố và yêu cầu thiết bị phải được kết nối Microsoft Entra ID. Chỉ riêng cài đặt MFA cấp người dùng không thể đáp ứng các yêu cầu Truy cập có điều kiện và dựa trên thiết bị đó.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-37', 'az-104', 37, 'Solution: You use the Azure portal to modify the **session control** of the Azure AD conditional access policy.  
  
Does the solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["B"]'::jsonb, 'Yêu cầu xác thực đa yếu tố và thiết bị tương thích/đã tham gia Microsoft Entra hoặc được tham gia kết hợp được đặt cấu hình với Truy cập có điều kiện **cấp điều khiển**. Kiểm soát phiên chi phối các hạn chế và giám sát phiên sau xác thực, chứ không phải các yêu cầu truy cập xác định xem đăng nhập có được phép hay không. Vì yêu cầu là thực thi MFA và trạng thái thiết bị cho quản trị viên từ các vị trí không đáng tin cậy nên việc thay đổi kiểm soát phiên không đạt được kết quả chính sách đó.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-38', 'az-104', 38, 'You have an Azure subscription that uses Azure Container Instances.  
  
A computer has Azure Command-Line Interface (CLI) and Docker installed. You create a container image named image1.  
  
You need to provision a new Azure container registry and add image1 to that registry.  
  
Which command should you run for each requirement?', '[]'::jsonb, '[]'::jsonb, '`az acr create` tạo tài nguyên Đăng ký vùng chứa Azure. Để đặt hình ảnh Docker cục bộ hiện có vào sổ đăng ký đó, hãy gắn thẻ nó với tên máy chủ đăng nhập sổ đăng ký và sử dụng `docker push`; `docker pull` thực hiện thao tác ngược lại.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-39', 'az-104', 39, 'You have a Microsoft Entra tenant that contains the groups shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783646933682-yx0lxygd.png)  
  
The tenant contains the users shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783646936913-s6zw57ln.png)  
  
Which users and groups can you delete?', '[]'::jsonb, '[]'::jsonb, 'Cho phép xóa tài khoản người dùng ngay cả khi người dùng có giấy phép được cấp trực tiếp hoặc nhận giấy phép thông qua cấp phép theo nhóm; giấy phép chỉ được giải phóng khi người dùng bị xóa. Ngược lại, cấp phép dựa trên nhóm Microsoft Entra ngăn chặn việc xóa nhóm vẫn có giấy phép hoạt động được gán cho nhóm đó. Do đó, cả bốn người dùng đều có thể bị xóa, nhưng chỉ có thể xóa các nhóm không được cấp phép: Group2 và Group4.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783646933682-yx0lxygd.png', 'published'),
  ('az104-40', 'az-104', 40, 'You create an Azure Storage account named `contosostorage`.  
  
You plan to create a file share named `data`.  
  
Users need to map a drive to the `data` file share from home computers that run Windows 10.  
  
Which outbound port should be opened between the home computers and the `data` file share?', '[{"key":"A","text":"80"},{"key":"B","text":"443"},{"key":"C","text":"445"},{"key":"D","text":"3389"}]'::jsonb, '["C"]'::jsonb, 'Chia sẻ tệp Azure được ánh xạ từ máy khách Windows bằng cách sử dụng SMB và lưu lượng SMB tới Azure Files sử dụng cổng TCP 445. Do đó, các máy tính gia đình cần ánh xạ chia sẻ `data` phải được phép truy cập ra bên ngoài trên cổng 445.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-41', 'az-104', 41, 'You have several Azure virtual machines on a virtual network named **VNet1**.  
  
You configure an Azure Storage account as shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783630276702-gi15vysa.jpg)  
  
Use the drop-down menus to choose the answer that completes each statement based on the information shown.', '[]'::jsonb, '[]'::jsonb, 'Quy tắc tường lửa của Bộ lưu trữ Azure với **Các mạng được chọn** chỉ cho phép truy cập từ các mạng con mạng ảo được cho phép rõ ràng. Triển lãm cho thấy chỉ cho phép mạng con **10.2.0.0/24 (Prod)** trong **VNet1** và đã bật Bộ lưu trữ service endpoint, vì vậy các máy ảo trong **10.2.9.0/24** không được phép truy cập vào tài khoản lưu trữ và do đó có kết nối no với các chia sẻ tệp của nó. Đối với **đĩa không được quản lý**, Azure Backup phải truy cập vào các đốm màu VHD được lưu trữ trong tài khoản lưu trữ. Với tường lửa bị giới hạn ở mạng con đã chọn và ngoại lệ bỏ qua no được hiển thị cho các dịch vụ Azure đáng tin cậy, Azure Backup không thể truy cập vào các đốm màu đó, do đó không thể sao lưu các đĩa không được quản lý đó.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783630276702-gi15vysa.jpg', 'published'),
  ('az104-42', 'az-104', 42, 'You have an on-premises file server named Server1 that runs Windows Server 2016.  
  
You have an Azure subscription that contains an Azure file share.  
  
You deploy an Azure File Sync Storage Sync Service, and you create a sync group.  
  
You need to synchronize files from Server1 to Azure.  
  
Which three actions should you perform in sequence? Arrange the appropriate actions in the correct order.', '{"statements":[{"id":"slot1","text":"Slot 1:","correctAnswer":"A"},{"id":"slot2","text":"Slot 2:","correctAnswer":"D"},{"id":"slot3","text":"Slot 3:","correctAnswer":"E"}],"choices":[{"key":"A","text":"Install the Azure File Sync agent on Server1"},{"key":"B","text":"Create an Azure on-premises data gateway"},{"key":"C","text":"Create a Recovery Services vault"},{"key":"D","text":"Register Server1"},{"key":"E","text":"Add a server endpoint"},{"key":"F","text":"Install the DFS Replication server role on Server1"}]}'::jsonb, '["slot1=A","slot2=D","slot3=E"]'::jsonb, 'Thiết lập Đồng bộ hóa tệp Azure trên Máy chủ Windows yêu cầu cài đặt tác nhân Đồng bộ hóa tệp Azure, sau đó đăng ký máy chủ với Dịch vụ đồng bộ hóa lưu trữ, sau đó tạo điểm cuối máy chủ trong nhóm đồng bộ hóa để ánh xạ đường dẫn máy chủ cục bộ tới chia sẻ tệp Azure. Không cần phải có cổng dữ liệu Azure tại chỗ, Recovery Services vault và Bản sao DFS để bật Đồng bộ hóa tệp Azure cho trường hợp này.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-43', 'az-104', 43, 'You have an Azure virtual machine named **VM1**.  
  
You use Azure Backup to create a backup of **VM1** named **Backup1**.  
  
After creating **Backup1**, you make the following changes to **VM1**:  
  
- Modify the size of **VM1**.  
- Copy a file named **Budget.xls** to a folder named **Data**.  
- Reset the password for the built-in administrator account.  
- Add a data disk to **VM1**.  
  
An administrator uses the **Replace existing** option to restore **VM1** from **Backup1**.  
  
You need to ensure that all the changes to **VM1** are restored.  
  
Which change should you perform again?', '[{"key":"A","text":"Modify the size of VM1."},{"key":"B","text":"Reset the password for the built-in administrator account."},{"key":"C","text":"Add a data disk."},{"key":"D","text":"Copy Budget.xls to Data."}]'::jsonb, '["C"]'::jsonb, 'Khi ''Thay thế hiện có'' được sử dụng để khôi phục máy ảo Azure, Azure Backup sẽ thay thế các ổ đĩa hiện tại của VM bằng các ổ đĩa từ điểm khôi phục đã chọn và theo hành vi được ghi lại của Microsoft, số lượng ổ đĩa của VM thu được chỉ phản ánh cấu hình của điểm khôi phục; Do đó, đĩa dữ liệu đã được thêm vào VM sau khi lấy Backup1 không phải là một phần của điểm khôi phục và không xuất hiện sau khi khôi phục, do đó, nó phải được thêm lại.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-44', 'az-104', 44, 'You have an Azure subscription named **Subscription1**.  
  
You have **5 TB** of data that you need to transfer to **Subscription1**.  
  
You plan to use an **Azure Import/Export** job.  
  
What can you use as the destination for the imported data?', '[{"key":"A","text":"Azure File Storage"},{"key":"B","text":"an Azure Cosmos DB database"},{"key":"C","text":"Azure Data Factory"},{"key":"D","text":"Azure SQL Database"}]'::jsonb, '["A"]'::jsonb, 'Nhập/Xuất Azure hỗ trợ nhập dữ liệu bằng cách vận chuyển ổ đĩa đến trung tâm dữ liệu Azure và các đích đến được hỗ trợ là Azure Blob storage và Azure Files. Trong số các tùy chọn được liệt kê, chỉ Azure File Storage là đích đến hợp lệ cho dữ liệu đã nhập.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-45', 'az-104', 45, 'You have an Azure subscription.  
  
You need to deploy a virtual machine by using an Azure Resource Manager (ARM) template.  
  
How should you complete the template?', '[]'::jsonb, '[]'::jsonb, 'Các mẫu ARM sử dụng hàm ResourceId trong dependencyOn để xác định tài nguyên phải tồn tại trước khi VM được triển khai, chẳng hạn như giao diện mạng. Trong storageProfile của máy ảo, nhà xuất bản, ưu đãi, sku và phiên bản của trường siêu dữ liệu hình ảnh thị trường đều thuộc imageReference. Đó là lược đồ tiêu chuẩn để triển khai VM từ hình ảnh nền tảng.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-46', 'az-104', 46, 'Your company has an Azure subscription.  
  
You need to deploy several Azure virtual machines (VMs) by using Azure Resource Manager (ARM) templates. You have been told that the VMs will be part of a single availability set.  
  
You must ensure that the ARM template you configure allows as many VMs as possible to remain accessible if fabric failure or maintenance occurs.  
  
Which value should you configure for the `platformUpdateDomainCount` property?', '[{"key":"A","text":"10"},{"key":"B","text":"20"},{"key":"C","text":"30"},{"key":"D","text":"40"}]'::jsonb, '["B"]'::jsonb, 'Trong Azure availability set, các miền cập nhật xác định các nhóm máy ảo và tài nguyên vật lý cơ bản có thể được khởi động lại cùng nhau trong quá trình bảo trì theo kế hoạch. Việc tăng số lượng miền cập nhật sẽ trải đều các máy ảo trên nhiều nhóm hơn, do đó sẽ có ít máy ảo bị ảnh hưởng cùng một lúc. Azure hỗ trợ tối đa 20 miền cập nhật cho availability set, do đó, việc định cấu hình `platformUpdateDomainCount` thành 20 cho phép duy trì số lượng máy ảo lớn nhất.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-47', 'az-104', 47, 'You have an Azure subscription named **Subscription1** that contains an Azure Log Analytics workspace named **Workspace1**.  
  
You need to view the error events from a table named **Event**.  
  
Which query should you run in **Workspace1**?', '[{"key":"A","text":"select * from Event where EventType == \"error\""},{"key":"B","text":"Event | search \"error\""},{"key":"C","text":"Event | where EventType is \"error\""},{"key":"D","text":"Get-Event Event | where {$_.EventType == \"error\"}"}]'::jsonb, '["B"]'::jsonb, 'Các truy vấn Azure Log Analytics sử dụng Ngôn ngữ truy vấn Kusto (KQL), bắt đầu bằng tên bảng, theo sau là các toán tử dẫn để lọc và tìm kiếm. Cú pháp `Event | search "error"` truy vấn chính xác bảng Sự kiện để tìm các bản ghi chứa "lỗi". Cú pháp SQL (option A) không hợp lệ đối với KQL, toán tử `is` (option C) không phải là cú pháp đẳng thức hợp lệ trong KQL (phải là `==`) và lệnh ghép ngắn PowerShell (option D) không được sử dụng trong truy vấn Log Analytics.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-48', 'az-104', 48, 'You have an Azure subscription that contains the storage accounts shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783638176734-3g5wn4q1.png)  
  
You plan to use AzCopy to copy a blob from `container1` directly to `share1`.  
  
You need to identify which authentication method to use when you use AzCopy.  
  
What should you identify for each account?  
  
Each method may be used once, more than once, or not at all.', '{"statements":[{"id":"storage1","text":"storage1:","correctAnswer":"D"},{"id":"storage2","text":"storage2:","correctAnswer":"D"}],"choices":[{"key":"A","text":"OAuth"},{"key":"B","text":"Anonymous"},{"key":"C","text":"A storage account access key"},{"key":"D","text":"A shared access signature (SAS) token"}]}'::jsonb, '["storage1=D","storage2=D"]'::jsonb, 'Azure Files không hỗ trợ ủy quyền Microsoft Entra ID (OAuth) cho các hoạt động trên mặt phẳng dữ liệu AzCopy qua REST — chỉ có khóa tài khoản lưu trữ hoặc chữ ký truy cập chung (SAS) — trong khi Blob Storage hỗ trợ cả Entra ID và SAS. Vì một bản sao dịch vụ đến dịch vụ AzCopy cần một phương thức ủy quyền hoạt động trên cả hai điểm cuối và cấp truy cập công khai của container1 được đặt thành quyền truy cập công khai No (loại trừ Ẩn danh), mã thông báo SAS là phương thức duy nhất hoạt động cho cả storage1 (bộ chứa blob nguồn) và storage2 (chia sẻ tệp đích).', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783638176734-3g5wn4q1.png', 'published'),
  ('az104-49', 'az-104', 49, 'You have an Azure subscription that contains a storage account named `account1`.  
  
You plan to upload the disk files of a virtual machine to `account1` from your on-premises network. The on-premises network uses a public IP address space of `131.107.1.0/24`.  
  
You plan to use the disk files to provision an Azure virtual machine named `VM1`. `VM1` will be attached to a virtual network named `VNet1`. `VNet1` uses an IP address space of `192.168.0.0/24`.  
  
You need to configure `account1` to meet the following requirements:  
  
- Ensure that you can upload the disk files to `account1`.  
- Ensure that you can attach the disks to `VM1`.  
- Prevent all other access to `account1`.  
  
Which two actions should you perform? Each correct answer presents part of the solution.  
  
**NOTE:** Each correct selection is worth one point.', '[{"key":"A","text":"From the Networking blade of account1, select Selected networks."},{"key":"B","text":"From the Networking blade of account1, select Allow trusted Microsoft services to access this storage account."},{"key":"C","text":"From the Networking blade of account1, add the 131.107.1.0/24 IP address range."},{"key":"D","text":"From the Networking blade of account1, add VNet1."},{"key":"E","text":"From the Service endpoints blade of VNet1, add a service endpoint."}]'::jsonb, '["A","C"]'::jsonb, 'Microsoft Learn tuyên bố rằng các quy tắc mạng tường lửa của Bộ lưu trữ Azure chỉ áp dụng cho quyền truy cập REST của mặt phẳng dữ liệu vào các đốm màu và không ảnh hưởng đến lưu lượng truy cập ổ đĩa máy ảo, bao gồm các hoạt động gắn và đính kèm ổ đĩa. Việc hạn chế kết nối mạng của tài khoản1 đối với các mạng đã chọn và thêm phạm vi tại chỗ 131.107.1.0/24 làm quy tắc IP được phép cho phép tải tệp đĩa lên từ tại chỗ trong khi chặn tất cả các quyền truy cập khác; VM1 vẫn có thể đính kèm đĩa kết quả mà không cần bất kỳ quy tắc mạng ảo bổ sung nào hoặc service endpoint, vì lưu lượng đó hoàn toàn không bị kiểm soát bởi tường lửa lưu trữ.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-50', 'az-104', 50, 'Solution: You create a packet capture from Azure Network Watcher.  
  
Does this satisfy the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["A"]'::jsonb, 'Tính năng chụp gói Azure Network Watcher có thể chụp từ xa lưu lượng truy cập cấp gói đến và đi từ Azure virtual machine, cho phép kiểm tra lưu lượng truy cập từ VM1 đến VM2. Hỗ trợ chụp ba giờ vì phiên chụp gói có thể chạy trong khoảng thời gian do người dùng xác định lên đến vài ngày. Điều đó làm cho đây trở thành một cách thích hợp để kiểm tra lưu lượng truy cập cần thiết.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-52', 'az-104', 52, 'Solution: From Performance Monitor, you create a Data Collector Set (DCS).  
  
Does this satisfy the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["B"]'::jsonb, 'Bộ thu thập dữ liệu giám sát hiệu suất thu thập dữ liệu hiệu suất hệ thống như bộ đếm, dấu vết và nhật ký từ Windows, nhưng đây không phải là giải pháp kiểm tra gói để nắm bắt tất cả lưu lượng trao đổi giữa hai máy ảo. Việc kiểm tra tất cả lưu lượng mạng từ VM1 đến VM2 trong một khoảng thời gian xác định yêu cầu chức năng chụp gói, chẳng hạn như chụp gói Azure Network Watcher hoặc một công cụ đánh hơi gói khác trên máy ảo. Vì vậy, việc tạo DCS không đáp ứng được yêu cầu đã nêu.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-53', 'az-104', 53, 'Solution: In Azure Monitor, you create a metric for **Network In** and **Network Out**.  
  
Does this meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["B"]'::jsonb, 'Số liệu Network In và Network Out trong Azure Monitor hiển thị các phép đo lưu lượng tổng hợp, không hiển thị nội dung hoặc chi tiết đầy đủ ở cấp gói của giao tiếp giữa VM1 và VM2. Việc kiểm tra tất cả lưu lượng truy cập trong khoảng thời gian ba giờ yêu cầu chụp gói Azure Network Watcher, được thiết kế đặc biệt để thu thập và phân tích lưu lượng truy cập đến và đi từ Azure virtual machines, đồng thời có thể giới hạn thời gian và lọc khi cần.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-54', 'az-104', 54, 'You have the Azure resources shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783637490654-32c0022x.jpg)  
  
You plan to track resource usage and prevent the deletion of resources.  

To answer, select the appropriate options in the answer area.', '[]'::jsonb, '[]'::jsonb, 'Khóa quản lý Azure được hỗ trợ ở phạm vi đăng ký, nhóm tài nguyên và phạm vi tài nguyên, đồng thời các tài nguyên con kế thừa các khóa từ phạm vi chính. Nhóm quản lý, bao gồm nhóm gốc đối tượng thuê, không hỗ trợ khóa quản lý Azure. Thẻ Azure được hỗ trợ trên các đăng ký, nhóm tài nguyên và tài nguyên riêng lẻ nhưng không được hỗ trợ trên các nhóm quản lý. Do đó, phạm vi áp dụng trong cả hai trường hợp chỉ là Sub1, RG1 và VM1.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783637490654-32c0022x.jpg', 'published'),
  ('az104-55', 'az-104', 55, 'You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers.  
  
You have an Azure load balancer named LB1 that provides load-balancing services for the virtual machines.  
  
You need to ensure that visitors are served by the same web server for each request.  
  
What should you configure?', '[{"key":"A","text":"Session persistence to Client IP and protocol"},{"key":"B","text":"Idle Time-out (minutes) to 20"},{"key":"C","text":"Session persistence to None"},{"key":"D","text":"Floating IP (direct server return) to Enabled"}]'::jsonb, '["A"]'::jsonb, 'Azure Load Balancer sử dụng tính bền vững của phiên để giữ cho các yêu cầu từ cùng một máy khách được chuyển hướng đến cùng một phiên bản phụ trợ. Microsoft Learn tuyên bố rằng **IP và giao thức máy khách** có nghĩa là các yêu cầu liên tiếp từ cùng một tổ hợp giao thức và địa chỉ IP máy khách sẽ được xử lý bởi cùng một máy ảo. Ngược lại, **Không** sử dụng phân phối dựa trên hàm băm mặc định, **Hết thời gian không hoạt động** chỉ ảnh hưởng đến các kết nối không hoạt động và **IP nổi** không liên quan đến sở thích phiên.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-56', 'az-104', 56, 'You have an Azure Active Directory (Azure AD) tenant named contoso.com that contains the users shown in the following table:  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783637620785-rr3q15ig.png)  
  
User3 is the owner of Group1.  
  
Group2 is a member of Group1.  
  
You configure an access review named Review1 as shown in the following exhibit:  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783637626601-vscc5rh6.jpg)  
  
For each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"User3 can perform an access review of User1","correctAnswer":"No"},{"id":"2","text":"User3 can perform an access review of UserA","correctAnswer":"No"},{"id":"3","text":"User3 can perform an access review of UserB","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:No","3:Yes"]'::jsonb, 'Review1 được định cấu hình để đánh giá **thành viên của Nhóm1** nhưng với phạm vi giới hạn ở **Chỉ người dùng khách**. Người đánh giá là **Chủ sở hữu nhóm**, vì vậy Người dùng3 chỉ có thể đánh giá những người dùng khách nằm trong phạm vi của Nhóm1. User1 và UserA đều là người dùng loại thành viên, vì vậy họ bị loại trừ trong phạm vi chỉ dành cho khách. UserB là người dùng khách trong Group2 và vì Group2 là thành viên của Group1 nên UserB được đưa vào thông qua tư cách thành viên nhóm lồng nhau và có thể được chủ sở hữu của Group1 xem xét.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783637620785-rr3q15ig.png', 'published'),
  ('az104-57', 'az-104', 57, 'Your company has an Azure Active Directory (Azure AD) tenant configured for hybrid coexistence with the on-premises Active Directory domain.  
  
The on-premises virtual environment contains virtual machines (VMs) that run on Windows Server 2012 R2 Hyper-V host servers.  
  
You created PowerShell scripts to automate the configuration of newly created VMs, and you plan to create several additional VMs.  
  
You need a solution that ensures the scripts run on the new VMs.  
  
Which of the following is the best solution?', '[{"key":"A","text":"Configure a SetupComplete.cmd batch file in the %windir%\\setup\\scripts directory."},{"key":"B","text":"Configure a Group Policy Object (GPO) to run the scripts as logon scripts."},{"key":"C","text":"Configure a Group Policy Object (GPO) to run the scripts as startup scripts."},{"key":"D","text":"Place the scripts in a new virtual hard disk (VHD)."}]'::jsonb, '["C"]'::jsonb, 'Tập lệnh khởi động máy tính được triển khai thông qua Chính sách nhóm là phù hợp nhất vì nó tự động chạy khi máy ảo tham gia miền khởi động mà không yêu cầu người dùng đăng nhập. Điều đó khiến tập lệnh này trở thành cơ chế tập trung thích hợp để đảm bảo tập lệnh cấu hình thực thi trên các máy ảo mới được tạo trong môi trường Active Directory tại chỗ. Các tập lệnh đăng nhập phụ thuộc vào hoạt động đăng nhập của người dùng, SetupComplete.cmd được gắn với thiết lập Windows trên một máy riêng lẻ thay vì quản lý miền liên tục và việc đặt các tập lệnh vào VHD không khiến chúng chạy.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-58', 'az-104', 58, 'You have an Azure subscription that contains the resources in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783631011637-33r20i35.png)  
  
VM1 and VM2 are deployed from the same template and host line-of-business applications.  
  
You configure the network security group (NSG) shown in the exhibit. (Click the Exhibit tab.)  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783631014571-3dj4j6sc.jpg)  
  
You need to prevent users of VM1 and VM2 from accessing websites on the Internet over TCP port 80.  
  
What should you do?', '[{"key":"A","text":"Disassociate the NSG from a network interface"},{"key":"B","text":"Change the Port_80 inbound security rule."},{"key":"C","text":"Associate the NSG to Subnet1."},{"key":"D","text":"Change the DenyWebSites outbound security rule."}]'::jsonb, '["C"]'::jsonb, 'Trong Azure, việc chặn người dùng trên máy ảo truy cập các trang web qua cổng TCP 80 yêu cầu quy tắc NSG **outbound** từ chối đích **Internet** trên cổng **80** và NSG đó phải được liên kết với mạng con hoặc giao diện mạng của VM để quy tắc có hiệu lực. Quy tắc gửi đi **DenyWebSites** được định cấu hình đã phù hợp với yêu cầu đó, nhưng vì NSG không được liên kết với bất kỳ mạng con hoặc NIC nào nên quy tắc này không được áp dụng. Việc liên kết NSG với **Subnet1** sẽ áp dụng quy tắc từ chối cho cả VM1 và VM2 vì cả hai máy ảo đều được triển khai trong mạng con đó. Tài liệu chính thức của Microsoft nêu rõ rằng các quy tắc NSG chỉ lọc lưu lượng truy cập vào và ra cho các mạng con hoặc giao diện mạng được liên kết.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783631011637-33r20i35.png', 'published'),
  ('az104-59', 'az-104', 59, 'You have an Azure subscription that contains a storage account named `storage1` in the North Europe Azure region.  
  
You need to ensure that when blob data is added to `storage1`, a secondary copy is created in the East US region. The solution must minimize administrative effort.  
  
What should you configure?', '[{"key":"A","text":"operational backup"},{"key":"B","text":"object replication"},{"key":"C","text":"geo-redundant storage (GRS)"},{"key":"D","text":"a lifecycle management rule"}]'::jsonb, '["B"]'::jsonb, 'Sao chép đối tượng Azure Blob sao chép không đồng bộ các khối blob từ tài khoản lưu trữ nguồn sang tài khoản lưu trữ đích, bao gồm cả các khu vực, do đó, đây là tính năng nhằm tạo bản sao phụ ở một khu vực mục tiêu cụ thể như Đông Hoa Kỳ. Geo-redundant storage sao chép sang một khu vực khác, nhưng Azure chọn khu vực thứ cấp được ghép nối và khu vực đó không thể thay đổi, do đó, nó không đáp ứng yêu cầu cụ thể đối với Đông Hoa Kỳ. Sao lưu hoạt động và quản lý vòng đời không cung cấp khả năng sao chép blob giữa các khu vực.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-60', 'az-104', 60, 'You have an Azure virtual machine (VM) with a single data disk attached. You have been assigned to attach this data disk to another Azure VM.  
  
You need to ensure that your approach keeps the virtual machines offline for the minimum possible amount of time.  
  
Which action should you take **FIRST**?', '[{"key":"A","text":"Stop the VM that includes the data disk."},{"key":"B","text":"Stop the VM that the data disk must be attached to."},{"key":"C","text":"Detach the data disk."},{"key":"D","text":"Delete the VM that includes the data disk."}]'::jsonb, '["C"]'::jsonb, 'Đĩa dữ liệu được quản lý Azure phải được tách khỏi máy ảo hiện tại trước khi có thể gắn vào máy ảo khác và Azure hỗ trợ tách nóng cho đĩa dữ liệu, giúp giảm thiểu thời gian ngừng hoạt động. Dừng hoặc xóa VM không phải là bước bắt buộc đầu tiên để di chuyển đĩa dữ liệu giữa các VM và VM đích không cần phải dừng trước chỉ để nhận đĩa.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-61', 'az-104', 61, 'You have an Azure subscription that contains the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783640485356-1jhe6ck1.png)  
  
You need to manage outbound traffic from VNET1 by using Firewall1.  
  
What should you do first?', '[{"key":"A","text":"Configure the Hybrid Connection Manager."},{"key":"B","text":"Upgrade ASP1 to the Premium SKU."},{"key":"C","text":"Create a route table."},{"key":"D","text":"Create an Azure Network Watcher."}]'::jsonb, '["C"]'::jsonb, 'Quản lý lưu lượng đi thông qua Azure Firewall yêu cầu định tuyến lưu lượng đến tường lửa. Trong Azure, điều đó được thực hiện bằng cách tạo tuyến do người dùng xác định trong bảng tuyến và liên kết nó với mạng con có liên quan để các gói gửi đi sử dụng tường lửa làm bước nhảy tiếp theo. Các tùy chọn khác không thiết lập điều khiển giao thông thông qua Azure Firewall.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783640485356-1jhe6ck1.png', 'published'),
  ('az104-62', 'az-104', 62, 'You need to recommend a solution for App1 that meets the technical requirements. What should the recommendation include?

![Question Image](https://cdn.examcademy.com/images/questions/1785597213281-ki6kzdtv.jpg)', '[]'::jsonb, '[]'::jsonb, 'Sử dụng một mạng ảo và ba mạng con để phân chia khối lượng công việc hoặc tầng cần thiết trong một ranh giới mạng ảo duy nhất.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1785597213281-ki6kzdtv.jpg', 'published'),
  ('az104-63', 'az-104', 63, 'You have an Azure subscription named Subscription1 that contains a virtual network named VNet1.  
  
You add the users shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783637466741-rakuvmeh.png)  
  
Which user can perform each configuration?', '[]'::jsonb, '[]'::jsonb, 'Vai trò Chủ sở hữu bao gồm quản lý toàn bộ tài nguyên Azure và khả năng chỉ định vai trò Azure RBAC. Vai trò Người đóng góp mạng bao gồm các quyền quản lý tài nguyên mạng như mạng ảo và mạng con, do đó, vai trò này có thể thêm mạng con nhưng không thể tạo các phân công vai trò. Quản trị viên bảo mật không phải là vai trò tài nguyên Azure để quản lý cấu hình VNet hoặc gán vai trò Azure RBAC trên VNet đó. Do đó, việc thêm mạng con có thể được thực hiện bởi User1 và User3, trong khi việc gán vai trò Reader trên VNet1 chỉ có thể được thực hiện bởi User1.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783637466741-rakuvmeh.png', 'published'),
  ('az104-64', 'az-104', 64, 'You have Azure subscriptions named **Subscription1** and **Subscription2**.  
  
Subscription1 has the following resource groups:  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783630289538-7rgl02ws.png)  
  
RG1 contains a web app named **App1** in the **West Europe** location.  
  
Subscription2 contains the following resource groups:  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783630292183-1ocda3yb.png)  
  
For each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"App1 can be moved to RG2","correctAnswer":"No"},{"id":"2","text":"App1 can be moved to RG3","correctAnswer":"Yes"},{"id":"3","text":"App1 can be moved to RG4","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:Yes","3:Yes"]'::jsonb, 'Các ứng dụng web Azure App Service có thể được di chuyển giữa các nhóm tài nguyên và giữa các đăng ký. Việc di chuyển tài nguyên bị chặn khi tồn tại khóa Chỉ đọc trên nhóm tài nguyên hoặc đăng ký nguồn hoặc đích. Vì RG2 có khóa Chỉ đọc nên không thể di chuyển App1 đến đó. RG3 có khóa Xóa, khóa này không chặn thao tác di chuyển trong trường hợp này, do đó việc di chuyển App1 sang RG3 được hỗ trợ. RG4 có khóa no nên việc chuyển App1 sang RG4 cũng được hỗ trợ. Ứng dụng web vẫn ở vị trí tài nguyên ban đầu; thay đổi nhóm tài nguyên hoặc đăng ký là một động thái trong mặt phẳng quản lý, không phải là di dời theo khu vực.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783630289538-7rgl02ws.png', 'published'),
  ('az104-65', 'az-104', 65, 'You downloaded an Azure Resource Manager (ARM) template to deploy multiple virtual machines (VMs). The template is based on an existing VM, but it must be modified to reference an administrative password.  
  
You need to ensure that the password is not stored in plain text.  
  
You are preparing to create the required components to meet this goal.', '{"statements":[{"id":"slot1","text":"Slot 1:","correctAnswer":"A"},{"id":"slot2","text":"Slot 2:","correctAnswer":"D"}],"choices":[{"key":"A","text":"An Azure Key Vault"},{"key":"B","text":"An Azure Storage account"},{"key":"C","text":"Azure Active Directory (AD) Identity Protection"},{"key":"D","text":"An access policy"},{"key":"E","text":"An Azure policy"},{"key":"F","text":"A backup policy"}]}'::jsonb, '["slot1=A","slot2=D"]'::jsonb, 'Azure Key Vault là dịch vụ Azure được thiết kế để lưu trữ các bí mật như mật khẩu một cách an toàn và việc triển khai ARM có thể tham chiếu bí mật Key Vault để mật khẩu không được lưu ở dạng văn bản thuần túy. Việc triển khai cũng phải được cấp quyền để đọc bí mật; trong mô hình ủy quyền Key Vault cổ điển thường được phản ánh trong các câu hỏi về mẫu ARM, được thực hiện bằng cách định cấu hình chính sách truy cập. Các dịch vụ được liệt kê khác không lưu trữ và hiển thị mật khẩu quản trị viên VM một cách an toàn để triển khai mẫu ARM.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-66', 'az-104', 66, 'Your network contains an on-premises Active Directory Domain Services (AD DS) domain named contoso.com. The domain contains the servers shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783640522754-qzhdx9t5.png)  
  
You plan to migrate contoso.com to Azure.  
  
You create an Azure virtual network named VNET1 that has the following settings:  
  
- Address space: 10.0.0.0/16  
- Subnet:  
  - Name: Subnet1  
  - IPv4: 10.0.1.0/24  
  
You need to move DC1 to VNET1. The solution must ensure that the member servers in contoso.com can resolve AD DS DNS names.  
  
How should you configure DC1?', '[]'::jsonb, '[]'::jsonb, 'Bộ điều khiển miền AD DS cũng lưu trữ DNS phải có địa chỉ IP riêng ổn định trong mạng con Azure, vì vậy DC1 nên sử dụng 10.0.1.3. Để cho phép các máy chủ thành viên miền phân giải các bản ghi DNS Active Directory, mạng ảo phải trỏ đến máy chủ DNS AD DS làm máy chủ DNS tùy chỉnh. DNS do Azure cung cấp không thay thế DNS tích hợp AD DS cho miền Windows và các vùng DNS riêng/DNS công cộng của Azure là các dịch vụ khác nhau không cung cấp chức năng DNS của bộ điều khiển miền AD DS bắt buộc.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783640522754-qzhdx9t5.png', 'published'),
  ('az104-67', 'az-104', 67, 'You have two Azure virtual networks named VNet1 and VNet2. VNet1 contains an Azure virtual machine named VM1. VNet2 contains an Azure virtual machine named VM2.  
  
VM1 hosts a frontend application that connects to VM2 to retrieve data.  
  
Users report that the frontend application is performing more slowly than usual.  
  
You need to view the average round-trip time (RTT) of packets from VM1 to VM2.  
  
Which Azure Network Watcher feature should you use?', '[{"key":"A","text":"IP flow verify"},{"key":"B","text":"Connection troubleshoot"},{"key":"C","text":"Connection monitor"},{"key":"D","text":"NSG flow logs"}]'::jsonb, '["C"]'::jsonb, 'Giám sát kết nối là tính năng Azure Network Watcher để giám sát kết nối giữa các điểm cuối và báo cáo số liệu về độ trễ, bao gồm cả thời gian khứ hồi (RTT). Các tài liệu của Microsoft Learn mà Trình giám sát kết nối cung cấp dữ liệu thời gian khứ hồi và số liệu Azure Monitor chẳng hạn như RoundTripTimeMs và AverageRoundtripMs cho các thăm dò được gửi giữa nguồn và đích. Xác minh luồng IP chỉ xác định xem gói được cho phép hay bị từ chối. Khắc phục sự cố kết nối chủ yếu là kiểm tra chẩn đoán tại thời điểm và luồng NSG ghi lại hoạt động của luồng thay vì số liệu RTT.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-68', 'az-104', 68, 'You have an Azure subscription. The subscription contains a storage account named storage1 that has the lifecycle management rules shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783646422114-g3aebk0z.png)  
  
On June 1, you store two blobs in storage1 as shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783646424372-u39hdve2.png)  
  
For each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"On June 6, File1 will be stored in the Cool access tier.","correctAnswer":"No"},{"id":"2","text":"On June 7, File2 will be stored in the Cool access tier.","correctAnswer":"Yes"},{"id":"3","text":"On June 16, File2 will be stored in the Archive access tier.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:Yes","3:No"]'::jsonb, 'Các hành động quản lý vòng đời được đánh giá từ lần sửa đổi gần đây nhất của blob. File1 thuộc `container1` nên sau hơn 3 ngày sẽ được chuyển sang Archive theo quy tắc dành riêng cho tiền tố; do đó vào ngày 6 tháng 6 nó không có trong Cool. File2 nằm dưới `container2`, do đó, quy tắc chung sẽ chuyển nó sang chế độ Cool sau hơn 5 ngày tuổi, khiến ngày 7 tháng 6 trở thành sự thật. Đối với `container2`, quá trình xóa xảy ra khi blob đã tồn tại hơn 10 ngày, do đó, trước ngày 16 tháng 6, File2 sẽ bị xóa thay vì được lưu trữ. Ngoài ra, quy tắc lưu trữ cho `container2` yêu cầu hơn 15 ngày chứ không phải chính xác là 15 ngày.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783646422114-g3aebk0z.png', 'published'),
  ('az104-69', 'az-104', 69, 'You have a deployment template named **Template1** that is used to deploy **10 Azure web apps**.  
  
You need to identify what must be deployed before you deploy **Template1**. The solution must **minimize Azure costs**.  
  
What should you identify?', '[{"key":"A","text":"five Azure Application Gateways"},{"key":"B","text":"one App Service plan"},{"key":"C","text":"10 App Service plans"},{"key":"D","text":"one Azure Traffic Manager"},{"key":"E","text":"one Azure Application Gateway"}]'::jsonb, '["B"]'::jsonb, 'Các ứng dụng web Azure được triển khai trong gói Dịch vụ ứng dụng, gói này cung cấp các tài nguyên điện toán mà chúng chạy trên đó. Nhiều ứng dụng web có thể chia sẻ cùng một gói Dịch vụ ứng dụng, do đó, việc sử dụng một gói duy nhất cho tất cả 10 ứng dụng sẽ giảm thiểu chi phí so với việc tạo nhiều gói. Azure Application Gateway và Azure Traffic Manager là các dịch vụ phân phối lưu lượng truy cập và không bắt buộc chỉ để lưu trữ các ứng dụng web.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-70', 'az-104', 70, 'Solution: From the **Subscriptions** blade, you select the subscription, and then click **Programmatic deployment**.  
  
Does this meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["B"]'::jsonb, 'Tùy chọn **Triển khai có lập trình** ở cấp đăng ký được sử dụng để truy cập thông tin triển khai mẫu và tự động hóa, chứ không phải để xem ngày và giờ tạo tài nguyên trong một nhóm tài nguyên cụ thể, chẳng hạn như RG1. Để xác định thời điểm tài nguyên trong RG1 được tạo, bạn cần có lịch sử triển khai theo nhóm tài nguyên cụ thể, chi tiết nhật ký hoạt động hoặc siêu dữ liệu tài nguyên thay vì mục nhập Triển khai có lập trình của đăng ký.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-71', 'az-104', 71, 'Solution: From the **RG1** blade, you select **Deployments**.  
  
Does this satisfy the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["B"]'::jsonb, 'Chế độ xem **Triển khai** trong nhóm tài nguyên Azure hiển thị lịch sử triển khai mẫu ARM và dấu thời gian của chúng, chứ không phải ngày và giờ tạo cho từng tài nguyên trong nhóm tài nguyên. Thời gian triển khai không giống với dấu thời gian tạo tài nguyên riêng lẻ, vì vậy việc sử dụng **Triển khai** không đáp ứng trực tiếp yêu cầu xem thời điểm tài nguyên được tạo.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-72', 'az-104', 72, 'Solution: From the **RG1** blade, you select **Automation script**.  
  
Does this satisfy the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["B"]'::jsonb, 'Việc chọn **Tập lệnh tự động hóa** không hiển thị khi tài nguyên trong nhóm tài nguyên được tạo. Trong Azure Resource Manager, vị trí thích hợp để xác định thời gian tạo tài nguyên được triển khai theo mẫu là lịch sử **Triển khai** của nhóm tài nguyên, lịch sử này ghi lại các hoạt động triển khai và dấu thời gian của chúng. **Tập lệnh tự động hóa** dùng để tạo mẫu/tập lệnh tự động hóa cho các tài nguyên hiện có, không phải để xem ngày và giờ tạo chúng.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-73', 'az-104', 73, 'Solution: From the **Subscriptions** blade, you select the subscription, and then click **Resource providers**.  
  
Does this satisfy the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["B"]'::jsonb, 'Trang **Nhà cung cấp tài nguyên** hiển thị loại và nhà cung cấp tài nguyên Azure nào có sẵn hoặc đã đăng ký đăng ký; nó không hiển thị dấu thời gian tạo tài nguyên. Để xác định thời điểm tài nguyên trong **RG1** được tạo, bạn sử dụng **Nhật ký hoạt động Azure** để ghi lại các sự kiện quản lý cấp nhóm tài nguyên và cấp đăng ký chẳng hạn như tạo tài nguyên và bao gồm cả thời gian sự kiện.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-74', 'az-104', 74, 'You have an Azure subscription that contains the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783630269235-kl1nr5ge.png)  
  
You need to configure a proximity placement group for VMSS1.  

Which proximity placement groups should you use?', '[{"key":"A","text":"Proximity2 only"},{"key":"B","text":"Proximity1, Proximity2, and Proximity3"},{"key":"C","text":"Proximity1 only"},{"key":"D","text":"Proximity1 and Proximity3 only"}]'::jsonb, '["A"]'::jsonb, 'Nhóm vị trí lân cận chỉ có thể được liên kết với các tài nguyên điện toán được triển khai trong cùng một khu vực Azure. Vì VMSS1 nằm ở **Tây Hoa Kỳ** nên nhóm vị trí lân cận đủ điều kiện duy nhất là **Gần2**, cũng ở **Tây Hoa Kỳ**. Proximity1 và Proximity3 nằm ở **Miền Trung Hoa Kỳ** nên không thể gán chúng cho VMSS1.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783630269235-kl1nr5ge.png', 'published'),
  ('az104-76', 'az-104', 76, 'HOTSPOT -  
  
You have an Azure subscription that contains a virtual network named VNET1 in the **East US 2** region. A network interface named **VM1-NI** is connected to **VNET1**.  
  
You successfully deploy the following Azure Resource Manager template.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783637464114-a1zu07t8.jpg)  
  
For each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"VM1 and VM2 can connect to VNET1","correctAnswer":"Yes"},{"id":"2","text":"If an Azure datacenter becomes unavailable, VM1 or VM2 will be available.","correctAnswer":"Yes"},{"id":"3","text":"If the East US 2 region becomes unavailable, VM1 or VM2 will be available.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:Yes","2:Yes","3:No"]'::jsonb, 'Cả hai máy ảo đều được triển khai ở khu vực Đông Hoa Kỳ 2 và mỗi VM gắn vào một NIC trong hồ sơ mạng của nó. Vì mạng ảo là tài nguyên khu vực nên các NIC trong khu vực đó có thể kết nối các máy ảo với cùng một VNet, do đó cả hai máy ảo đều có thể sử dụng VNET1. Mẫu đặt VM1 trong availability zone 1 và VM2 trong availability zone 2. Azure Availability Zones là các trung tâm dữ liệu riêng biệt trong cùng một khu vực, do đó, một trung tâm dữ liệu hoặc một vùng bị lỗi có thể khiến VM ở vùng khác có sẵn. Tuy nhiên, cả hai máy ảo vẫn nằm trong cùng một khu vực và Availability Zones không cung cấp khả năng bảo vệ khỏi sự cố ngừng hoạt động toàn khu vực, do đó, sự cố ở khu vực Đông Hoa Kỳ 2 sẽ ảnh hưởng đến cả hai.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783637464114-a1zu07t8.jpg', 'published'),
  ('az104-77', 'az-104', 77, 'You have Azure Storage accounts as shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783630964268-l21ge7w6.jpg)  
  
Use the drop-down menus to choose the answer that completes each statement based on the information shown.', '[]'::jsonb, '[]'::jsonb, 'Azure Table storage có sẵn trong các tài khoản lưu trữ đa năng, bao gồm GPv1 (Storage) và GPv2 (StorageV2), nhưng không có trong tài khoản BlobStorage, vốn chỉ dành riêng cho các đốm màu. Bộ lưu trữ Blob được hỗ trợ bởi các tài khoản GPv1, GPv2 và BlobStorage, vì vậy cả ba tài khoản đều có thể được sử dụng cho các blob trong khi chỉ có thể sử dụng storageaccount1 và storageaccount2 cho các bảng.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783630964268-l21ge7w6.jpg', 'published'),
  ('az104-78', 'az-104', 78, 'You have an Azure subscription that contains 10 virtual machines and the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783643044523-bpncoqt6.png)  
  
You need to ensure that Bastion1 can support 100 concurrent SSH users. The solution must minimize administrative effort.  
  
What should you do first?', '[{"key":"A","text":"Resize the subnet of Bastion1"},{"key":"B","text":"Configure host scaling."},{"key":"C","text":"Create a network security group (NSG)"},{"key":"D","text":"Upgrade Bastion1 to the Standard SKU"}]'::jsonb, '["D"]'::jsonb, 'Azure Bastion tăng dung lượng SSH đồng thời bằng cách sử dụng tỷ lệ máy chủ, nhưng tỷ lệ máy chủ chỉ khả dụng trên SKU tiêu chuẩn trở lên. Bastion1 hiện nằm trong SKU Cơ bản, vì vậy bước đầu tiên tiên quyết là nâng cấp nó lên Tiêu chuẩn. Mạng con đã có kích thước /26, đáp ứng kích thước mạng con cần thiết cho việc mở rộng quy mô máy chủ, vì vậy việc thay đổi kích thước mạng con không phải là hành động đầu tiên.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783643044523-bpncoqt6.png', 'published'),
  ('az104-79', 'az-104', 79, '$34', '[]'::jsonb, '[]'::jsonb, 'Một vùng chứa Blob hỗ trợ tối đa năm chính sách truy cập được lưu trữ, do đó, ba chính sách hiện tại chỉ dành cho hai chính sách. Bộ nhớ bất biến có thể có cả chính sách lưu giữ hợp pháp và chính sách lưu giữ theo thời gian ở phạm vi vùng chứa; do đó, lệnh lưu giữ pháp lý hiện tại để lại một chính sách bổ sung không thể thay đổi.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-80', 'az-104', 80, 'You recently created a new Azure subscription that includes a user named Admin1.  
  
Admin1 tries to deploy an Azure Marketplace resource by using an Azure Resource Manager template. Admin1 deploys the template by using Azure PowerShell and receives the following error message:  
  
`User failed validation to purchase resources. Error message: Legal terms have not been accepted for this item on this subscription. To accept legal terms, please go to the Azure portal (http://go.microsoft.com/fwlink/?LinkId=534873) and configure programmatic deployment for the Marketplace item or create it there for the first time.`  
  
You need to ensure that Admin1 can deploy the Marketplace resource successfully.  
  
What should you do?', '[{"key":"A","text":"From Azure PowerShell, run the Set-AzApiManagementSubscription cmdlet"},{"key":"B","text":"From the Azure portal, register the Microsoft.Marketplace resource provider"},{"key":"C","text":"From Azure PowerShell, run the Set-AzMarketplaceTerms cmdlet"},{"key":"D","text":"From the Azure portal, assign the Billing administrator role to Admin1"}]'::jsonb, '["C"]'::jsonb, 'Các ưu đãi của Azure Marketplace yêu cầu xác thực giao dịch mua phải được chấp nhận các điều khoản pháp lý một lần cho mỗi lần đăng ký trước khi chúng có thể được triển khai theo chương trình với các mẫu ARM hoặc PowerShell. Lệnh ghép ngắn Az.MarketplaceOrdering `Set-AzMarketplaceTerms` được sử dụng riêng để chấp nhận các điều khoản đó dành cho nhà xuất bản, sản phẩm và gói, giúp giải quyết lỗi xác thực và cho phép tiếp tục triển khai.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-81', 'az-104', 81, 'You have an Azure subscription that contains a storage account. The account stores website data.  
  
You need to ensure that inbound user traffic uses the Microsoft point-of-presence (POP) closest to the user''s location.  
  
What should you configure?', '[{"key":"A","text":"private endpoints"},{"key":"B","text":"Azure Firewall rules"},{"key":"C","text":"Routing preference"},{"key":"D","text":"load balancing"}]'::jsonb, '["C"]'::jsonb, 'Tùy chọn định tuyến Bộ lưu trữ Azure kiểm soát cách định tuyến lưu lượng truy cập của máy khách đến điểm cuối công khai. Việc chọn tùy chọn mạng toàn cầu của Microsoft sẽ khiến lưu lượng truy cập vào mạng Microsoft thông qua POP gần người dùng nhất, đây là yêu cầu cụ thể ở đây. Điểm cuối riêng tư hạn chế quyền truy cập riêng tư, quy tắc Azure Firewall lọc lưu lượng truy cập và cân bằng tải không cung cấp hành vi định tuyến lưu trữ này.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-82', 'az-104', 82, 'You have an Azure subscription that contains a virtual machine named VM1 and an Azure key vault named KV1.  
  
You need to configure encryption for VM1. The solution must meet the following requirements:  
  
- Store and use the encryption key in KV1.  
- Maintain encryption if VM1 is downloaded from Azure.  
- Encrypt both the operating system disk and the data disks.  
  
Which encryption method should you use?', '[{"key":"A","text":"customer-managed keys"},{"key":"B","text":"Confidential disk encryption"},{"key":"C","text":"Azure Disk Encryption"},{"key":"D","text":"encryption at host"}]'::jsonb, '["A"]'::jsonb, 'Khóa do khách hàng quản lý là lựa chọn chính xác vì các ổ đĩa do Azure quản lý có thể sử dụng khóa do khách hàng quản lý được lưu trữ trong Azure Key Vault thông qua Bộ mã hóa ổ đĩa và biện pháp bảo vệ đó áp dụng cho cả ổ đĩa hệ điều hành và ổ đĩa dữ liệu. Vì mã hóa được áp dụng cho chính các ổ đĩa được quản lý nên các ổ đĩa vẫn được mã hóa ở phần còn lại thay vì chỉ khi chạy trên máy chủ. Mã hóa ổ đĩa bí mật không đáp ứng yêu cầu vì nó bị giới hạn trong ổ đĩa hệ điều hành và mã hóa trên máy chủ chủ yếu mở rộng khả năng bảo vệ cho bộ nhớ đệm phía máy chủ và bộ lưu trữ tạm thời thay vì tự mình đóng vai trò là phương thức mã hóa ổ đĩa ổn định chính. Azure Disk Encryption sử dụng BitLocker hoặc DM-Crypt bên trong máy khách và tích hợp với Key Vault, nhưng đối với yêu cầu này, mô hình khóa do khách hàng quản lý đĩa được quản lý là phù hợp nhất.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-83', 'az-104', 83, 'You have an Azure virtual machine named VM1.  
  
The network interface for VM1 is configured as shown in the exhibit. (Click the Exhibit tab.)  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783632898550-wbdq8y0z.jpg)  
  
You deploy a web server on VM1, and then create a secure website that is accessible by using the HTTPS protocol. VM1 is used as a web server only.  
  
You need to make sure that users can connect to the website from the Internet.  
  
What should you do?', '[{"key":"A","text":"Modify the protocol of Rule4"},{"key":"B","text":"Delete Rule1"},{"key":"C","text":"For Rule5, change the Action to Allow and change the priority to 401"},{"key":"D","text":"Create a new inbound rule that allows TCP protocol 443 and configure the rule to have a priority of 501."}]'::jsonb, '["C"]'::jsonb, 'Quy tắc gửi đến của nhóm bảo mật mạng Azure được xử lý theo thứ tự ưu tiên tăng dần và quy tắc khớp đầu tiên sẽ được áp dụng. HTTPS yêu cầu cổng TCP 443 gửi đến mới được phép truy cập Internet. Trong các quy tắc được hiển thị, TCP 443 bị Rule2 từ chối rõ ràng ở mức ưu tiên 500, vì vậy mọi quy tắc có mức ưu tiên thấp hơn đều không thể ghi đè lên nó. Việc thay đổi Quy tắc5 thành Cho phép với mức độ ưu tiên 401 sẽ đặt quy tắc cho phép phù hợp cho cổng 443 trước từ chối, cho phép khách hàng Internet truy cập trang web an toàn.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783632898550-wbdq8y0z.jpg', 'published'),
  ('az104-84', 'az-104', 84, 'You need to add VM1 and VM2 to the backend pool of LB1.  
  
What should you do first?', '[{"key":"A","text":"Connect VM2 to VNET1/Subnet1."},{"key":"B","text":"Redeploy VM1 and VM2 to the same availability zone."},{"key":"C","text":"Redeploy VM1 and VM2 to the same availability set."},{"key":"D","text":"Create a new NSG and associate the NSG to VNET1/Subnet1."}]'::jsonb, '["A"]'::jsonb, 'Các thành viên nhóm phụ trợ Azure Load Balancer phải có thể truy cập được thông qua các NIC được gắn vào mạng ảo thích hợp cho bộ cân bằng tải. Không cần đặt các máy ảo trong cùng một availability zone hay cùng một availability set để thêm chúng vào nhóm phụ trợ và việc tạo NSG không làm cho VM đủ điều kiện trở thành thành viên của nhóm phụ trợ. Bước đầu tiên cần thiết là kết nối VM2 với VNET1/Subnet1 để nó có thể được liên kết với nhóm phụ trợ của LB1.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-85', 'az-104', 85, 'You have an Azure App Services web app named App1.  
  
You are planning to deploy App1 by using Web Deploy.  
  
You need to make sure that the developers of App1 can use their Azure AD credentials to deploy content to App1. The solution must follow the principle of least privilege.  
  
What should you do?', '[{"key":"A","text":"Assign the Owner role to the developers"},{"key":"B","text":"Configure app-level credentials for FTPS"},{"key":"C","text":"Assign the Website Contributor role to the developers"},{"key":"D","text":"Configure user-level credentials for FTPS"}]'::jsonb, '["C"]'::jsonb, 'Quyền truy cập xuất bản Azure App Service được kiểm soát thông qua thông tin xác thực triển khai cùng với Azure RBAC. Microsoft Learn chỉ định rằng người dùng phải có ít nhất các quyền ở cấp độ Cộng tác viên trên ứng dụng để xuất bản và bao gồm rõ ràng vai trò **Cộng tác viên trang web** tích hợp sẵn. Vai trò đó cấp các quyền xuất bản cần thiết mà không cần có sự cho phép rộng hơn của **Chủ sở hữu**, vì vậy đây là tùy chọn có ít đặc quyền nhất cho phép các nhà phát triển triển khai.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-86', 'az-104', 86, 'You have an Azure Storage account named `storage1`.  
  
You plan to use AzCopy to copy data to `storage1`.  
  
You need to determine which storage services in `storage1` can be targets for the copied data.  
  
Which storage services should you identify?', '[{"key":"A","text":"blob, file, table, and queue"},{"key":"B","text":"blob and file only"},{"key":"C","text":"file and table only"},{"key":"D","text":"file only"},{"key":"E","text":"blob, table, and queue only"}]'::jsonb, '["B"]'::jsonb, 'AzCopy hỗ trợ truyền dữ liệu bằng Azure Blob storage và Azure Files. Azure Table storage và lưu trữ Hàng đợi không được hỗ trợ dưới dạng đích sao chép chung của AzCopy, vì vậy các dịch vụ lưu trữ hiện hành trong tài khoản chỉ ở dạng blob và tệp.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-87', 'az-104', 87, 'You have an Azure Active Directory tenant named Contoso.com that includes the following users:  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783637620466-d8l72r7z.png)  
  
Contoso.com includes the following Windows 10 devices:  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783637622877-wpmkg3gu.png)  
  
You create the following security groups in Contoso.com:  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783637625167-qq128qwk.png)  
  
For each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"User1 can add Device2 to Group1","correctAnswer":"No"},{"id":"2","text":"User2 can add Device1 to Group1","correctAnswer":"Yes"},{"id":"3","text":"User2 can add Device2 to Group2","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:Yes","3:No"]'::jsonb, 'Nhóm bảo mật Azure AD được chỉ định cho phép thay đổi tư cách thành viên theo cách thủ công và chủ sở hữu nhóm có thể quản lý tư cách thành viên đó, do đó, Người dùng2 có thể thêm Thiết bị1 vào Nhóm1. Nhóm thiết bị động không cho phép cập nhật thành viên thủ công trực tiếp vì các thiết bị chỉ được bao gồm khi chúng phù hợp với quy tắc thành viên động, do đó Người dùng2 không thể thêm Thiết bị2 vào Nhóm2 theo cách thủ công. Vai trò Quản trị viên thiết bị đám mây quản lý các cài đặt và hoạt động liên quan đến thiết bị chứ không phải thành viên của nhóm bảo mật được chỉ định, vì vậy Người dùng1 không thể thêm Thiết bị2 vào Nhóm1 mà không có quyền quản lý nhóm riêng.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783637620466-d8l72r7z.png', 'published'),
  ('az104-88', 'az-104', 88, 'You have an Azure subscription named Subscription1 that contains the following resource group:  
  
- Name: RG1  
- Region: West US  
- Tag: `tag1`: `value1`  
  
You assign an Azure Policy named Policy1 to Subscription1 by using the following settings:  
  
- Exclusions: None  
- Policy definition: Append a tag and its value to resources  
- Assignment name: Policy1  
- Parameters:  
  - Tag name: `tag2`  
  - Tag value: `value2`  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783637578298-btm6x38b.png)  
  
After Policy1 is assigned, you create a storage account that has the following settings:  
  
- Name: storage1  
- Location: West US  
- Resource group: RG1  
- Tags: `tag3`: `value3`  
  
You need to identify which tags are assigned to each resource.  
  
What should you identify?', '[]'::jsonb, '[]'::jsonb, 'Hiệu ứng Nối thêm sẽ thêm trường được chỉ định trong yêu cầu tạo hoặc cập nhật khi tài nguyên phù hợp với chính sách nhưng không sửa đổi các tài nguyên hiện có trong quá trình đánh giá tuân thủ sau này. Bởi vì RG1 đã tồn tại trước khi chuyển nhượng nên nó chỉ giữ lại `tag1=value1`. Chính sách tích hợp được sử dụng ở đây sẽ gắn thêm một thẻ cố định vào tài nguyên; nó không sao chép thẻ từ nhóm tài nguyên. Khi `storage1` được tạo sau khi gán, yêu cầu đã chứa `tag3=value3` và Chính sách Azure sẽ thêm `tag2=value2`, do đó tài khoản lưu trữ có `tag2=value2` và `tag3=value3`.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783637578298-btm6x38b.png', 'published'),
  ('az104-89', 'az-104', 89, 'You have an app named App1 that runs on an Azure web app named webapp1.  
  
The developers at your company upload an update of App1 to a Git repository named Git1.  
  
Webapp1 has the deployment slots shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783637460509-avw5ivaf.png)  
  
You need to ensure that the App1 update is tested before the update is made available to users.  
  
Which two actions should you perform? Each correct answer presents part of the solution.  
  
**NOTE:** Each correct selection is worth one point.', '[{"key":"A","text":"Swap the slots"},{"key":"B","text":"Deploy the App1 update to webapp1-prod, and then test the update"},{"key":"C","text":"Stop webapp1-prod"},{"key":"D","text":"Deploy the App1 update to webapp1-test, and then test the update"},{"key":"E","text":"Stop webapp1-test"}]'::jsonb, '["A","D"]'::jsonb, 'Các vị trí triển khai Azure App Service dành cho mẫu phát hành chính xác này: triển khai phiên bản mới đến một vị trí không sản xuất như **Staging**, kiểm tra phiên bản đó ở đó và sau đó **hoán đổi** vị trí dàn dựng với vị trí sản xuất để quảng bá phiên bản đã thử nghiệm tới người dùng với thời gian ngừng hoạt động tối thiểu. Vì **webapp1-test** là vị trí chạy thử và **webapp1-prod** là vị trí sản xuất nên bản cập nhật phải được triển khai và xác thực trong **webapp1-test**, sau đó các vị trí đó sẽ được hoán đổi.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783637460509-avw5ivaf.png', 'published'),
  ('az104-90', 'az-104', 90, 'You have an Azure subscription that contains the public IP addresses shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783643045355-mkw847zo.png)  
  
You plan to deploy an instance of Azure Firewall Premium named FW1.  
  
Which IP addresses can you use?', '[{"key":"A","text":"IP2 only"},{"key":"B","text":"IP1 and IP2 only"},{"key":"C","text":"IP1, IP2, and IP5 only"},{"key":"D","text":"IP1, IP2, IP4, and IP5 only"}]'::jsonb, '["B"]'::jsonb, 'Azure Firewall Premium chỉ có thể sử dụng địa chỉ IP công cộng SKU tiêu chuẩn và giao diện Azure Firewall hỗ trợ IP công cộng IPv4 tĩnh, không phải địa chỉ SKU cơ bản, IPv4 động hoặc IPv6. Trong bảng, chỉ IP1 và IP2 đáp ứng các yêu cầu đó vì cả hai đều là Tiêu chuẩn, IPv4 và Tĩnh.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783643045355-mkw847zo.png', 'published'),
  ('az104-91', 'az-104', 91, 'Solution: Assign the Storage Account Encryption Scope Contributor role to User1.  
  
Does this satisfy the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["B"]'::jsonb, 'Việc liệt kê và tạo lại các khóa tài khoản Azure Storage yêu cầu quyền `Microsoft.Storage/storageAccounts/listkeys/action` và `Microsoft.Storage/storageAccounts/regeneratekey/action` tương ứng. Vai trò Người đóng góp phạm vi mã hóa tài khoản lưu trữ quản lý phạm vi mã hóa và không cấp các quyền khóa tài khoản lưu trữ đó.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-92', 'az-104', 92, 'Solution: Assign the **Reader and Data Access** role to User1.  
  
Does this satisfy the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["B"]'::jsonb, 'Vai trò Người đọc và Truy cập Dữ liệu cho phép liệt kê các khóa tài khoản lưu trữ nhưng việc tạo lại khóa cần có quyền `Microsoft.Storage/storageAccounts/regeneratekey/action`. Quyền đó không được bao gồm trong vai trò này nên không thể đáp ứng yêu cầu vừa liệt kê vừa tạo lại khóa tài khoản lưu trữ.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-93', 'az-104', 93, 'Solution: Assign the **Storage Account Key Operator Service Role** to User1.  
  
Does this accomplish the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["A"]'::jsonb, 'Vai trò dịch vụ người vận hành khóa tài khoản lưu trữ cho phép liệt kê và tạo lại các khóa truy cập tài khoản lưu trữ, cung cấp các quyền quản lý khóa cần thiết cho việc lưu trữ1.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-94', 'az-104', 94, 'You have an Azure web app named **webapp1**.  
  
You have a virtual network named **VNET1** and an Azure virtual machine named **VM1** that hosts a **MySQL** database. **VM1** is connected to **VNET1**.  
  
You need to make sure that **webapp1** can access the data hosted on **VM1**.  
  
What should you do?', '[{"key":"A","text":"Deploy an internal load balancer"},{"key":"B","text":"Peer VNET1 to another virtual network"},{"key":"C","text":"Connect webapp1 to VNET1"},{"key":"D","text":"Deploy an Azure Application Gateway"}]'::jsonb, '["C"]'::jsonb, 'Azure App Service truy cập tài nguyên trong mạng ảo bằng cách sử dụng Tích hợp mạng ảo. Tính năng đó cho phép ứng dụng web tạo kết nối gửi đi tới các tài nguyên trong hoặc thông qua VNet, bao gồm cả VM trong mạng đó. Vì VM1 đã có trong VNET1 nên việc kết nối webapp1 với VNET1 là cấu hình bắt buộc.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-95', 'az-104', 95, 'You have an Azure subscription that contains the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783638191946-9eh0rp4l.png)  
  
You plan to create a data collection rule named **DCR1** in Azure Monitor.  
  
Which resources can you configure as data sources in **DCR1**, and which resources can you configure as destinations in **DCR1**?', '[]'::jsonb, '[]'::jsonb, 'Quy tắc thu thập dữ liệu Azure Monitor cho Tác nhân Azure Monitor thu thập dữ liệu từ các máy được giám sát như Azure virtual machines. Trong bộ tài nguyên này, VM1 là nguồn dữ liệu hợp lệ duy nhất. Đối với trường hợp này, DCR gửi dữ liệu đã thu thập đến không gian làm việc Log Analytics, vì vậy Workspace1 là đích hợp lệ. Tài khoản lưu trữ và Azure SQL database không được sử dụng ở đây làm tài nguyên nguồn của DCR và DB1 không phải là đích đến hợp lệ cho DCR1.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783638191946-9eh0rp4l.png', 'published'),
  ('az104-96', 'az-104', 96, 'You have an Azure virtual machine named VM1.  
  
Azure collects events from VM1.  
  
You are creating an alert rule in Azure Monitor to notify an administrator when an error is recorded in the **System** event log of VM1.  
  
Which target resource should you monitor in the alert rule?', '[{"key":"A","text":"virtual machine extension"},{"key":"B","text":"virtual machine"},{"key":"C","text":"metric alert"},{"key":"D","text":"Azure Log Analytics workspace"}]'::jsonb, '["D"]'::jsonb, 'Các mục nhật ký sự kiện Windows từ máy ảo được truy vấn dưới dạng dữ liệu nhật ký trong Nhật ký Azure Monitor sau khi chúng được thu thập vào không gian làm việc Log Analytics. Do đó, cảnh báo về lỗi trong nhật ký sự kiện Hệ thống là cảnh báo tìm kiếm nhật ký nhắm mục tiêu không gian làm việc Log Analytics chứa dữ liệu đó. Tài nguyên máy ảo được sử dụng cho các số liệu tài nguyên, trong khi tiện ích mở rộng VM không phải là mục tiêu cảnh báo và cảnh báo số liệu là loại cảnh báo chứ không phải là tài nguyên đích.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-97', 'az-104', 97, 'You have an Azure subscription.  
  
You plan to deploy a new storage account.  
  
You need to configure encryption for the account. The solution must meet the following requirements:  
  
- Use a customer-managed key stored in a key vault.  
- Use the maximum supported bit length.  
  
Which type of key and which bit length should you use?', '[]'::jsonb, '[]'::jsonb, 'Khóa mã hóa do khách hàng quản lý của Azure Storage trong Azure Key Vault sử dụng khóa nhóm RSA, không phải khóa AES hoặc 3DES đối xứng cho cài đặt này. Tài liệu Microsoft hỗ trợ kích thước khóa RSA/RSA-HSM là 2048, 3072 và 4096 bit. Vì yêu cầu là sử dụng độ dài bit được hỗ trợ tối đa và các lựa chọn có sẵn bao gồm 4096, nên kết hợp đúng là RSA với 4096 bit.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-98', 'az-104', 98, 'You have a Recovery Services vault named RSV1. RSV1 has a backup policy that retains instant snapshots for five days and daily backup for 14 days.  
  
RSV1 performs daily backups of VM1. VM1 hosts a static website that was updated eight days ago.  
  
You need to recover VM1 to a point eight days ago. The solution must minimize downtime.  
  
What should you do first?', '[{"key":"A","text":"Deallocate VM1."},{"key":"B","text":"Restore VM1 by using the Replace existing restore configuration option."},{"key":"C","text":"Delete VM1."},{"key":"D","text":"Restore VM1 by using the Create new restore configuration option."}]'::jsonb, '["D"]'::jsonb, 'Điểm khôi phục tám ngày tuổi nằm ngoài khoảng thời gian lưu giữ ảnh chụp nhanh tức thời trong 5 ngày, do đó quá trình khôi phục phải sử dụng điểm khôi phục vault từ các bản sao lưu hàng ngày. Để giảm thiểu thời gian ngừng hoạt động, trước tiên hãy khôi phục bản sao lưu dưới dạng máy ảo mới thay vì thay thế máy ảo hiện có tại chỗ. Tính năng thay thế tại chỗ sẽ sửa đổi VM sản xuất và được sử dụng để ghi đè lên các ổ đĩa hiện có, trong khi việc tạo VM mới sẽ hiển thị một bản sao đã được khôi phục mà không cần tắt VM hiện tại trước tiên.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-99', 'az-104', 99, 'You have a Microsoft Entra tenant configured as shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784205778864-magz837e.png)  
  
The tenant includes the identities shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784205782261-m239pgd8.png)  
  
You purchase a Microsoft Fabric license.  
  
To which identities can the license be assigned?', '[{"key":"A","text":"User1 only"},{"key":"B","text":"User1 and Group1 only"},{"key":"C","text":"User1 and Group2 only"},{"key":"D","text":"User1, Group1, and Group2"}]'::jsonb, '["A"]'::jsonb, 'Giấy phép Microsoft Fabric có thể được gán trực tiếp cho tài khoản người dùng. Việc gán giấy phép thông qua nhóm bảo mật hoặc nhóm Microsoft 365 sử dụng cấp phép dựa trên nhóm, yêu cầu Microsoft Entra ID P1 hoặc đăng ký cấp cao hơn đủ điều kiện. Người thuê có Microsoft Entra ID Free không đáp ứng yêu cầu đó.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1784205778864-magz837e.png', 'published'),
  ('az104-100', 'az-104', 100, 'You have an Azure subscription named Sub1.  
  
You plan to deploy a multi-tiered application that will contain the tiers shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783630989588-m1hbbz4k.png)  
  
You need to recommend a networking solution to meet the following requirements:  
  
- Ensure that communication between the web servers and the business logic tier spreads equally across the virtual machines.  
- Protect the web servers from SQL injection attacks.  
  
Which Azure resource should you recommend for each requirement?', '[]'::jsonb, '[]'::jsonb, 'Bộ cân bằng tải nội bộ phân phối lưu lượng truy cập đến các máy ảo phụ trợ bên trong mạng ảo, phù hợp với hoạt động giao tiếp từ tầng web có kết nối Internet với tầng logic kinh doanh không có kết nối Internet. Azure Application Gateway với cấp WAF cung cấp khả năng bảo vệ tường lửa ứng dụng web chống lại các hoạt động khai thác web phổ biến, bao gồm cả việc chèn SQL. Cấp tiêu chuẩn của Cổng ứng dụng thiếu tính năng bảo vệ WAF và NSG hoặc Azure Load Balancer không kiểm tra các yêu cầu HTTP đối với tải trọng chèn SQL.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783630989588-m1hbbz4k.png', 'published'),
  ('az104-101', 'az-104', 101, 'You have an Azure App Service web app named App1.  
  
You need to gather performance traces for App1.  
  
What should you use?', '[{"key":"A","text":"Azure Application Insights Profiler"},{"key":"B","text":"the Activity log"},{"key":"C","text":"the Deployment center"},{"key":"D","text":"the Diagnose and solve problems settings"}]'::jsonb, '["A"]'::jsonb, 'Azure Application Insights Profiler là tính năng Dịch vụ ứng dụng được thiết kế để ghi lại dấu vết hiệu suất chi tiết và xác định các đường dẫn mã chậm. Microsoft Learn nói rõ ràng rằng bạn có thể kích hoạt Application Insights Profiler để bắt đầu ghi lại dấu vết hiệu suất chi tiết cho các ứng dụng Azure App Service. Nhật ký hoạt động dành cho các sự kiện tài nguyên Azure, Trung tâm triển khai dành cho quy trình triển khai và Chẩn đoán và giải quyết sự cố là điểm truy cập khắc phục sự cố chứ không phải là tính năng thu thập dấu vết.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-102', 'az-104', 102, 'You download an Azure Resource Manager template based on an existing virtual machine. The template will be used to deploy **100 virtual machines**.  
  
You need to modify the template so that it references an administrative password. You must prevent the password from being stored in plain text.  
  
What should you create to store the password?', '[{"key":"A","text":"an Azure Key Vault and an access policy"},{"key":"B","text":"an Azure Storage account and an access policy"},{"key":"C","text":"a Recovery Services vault and a backup policy"},{"key":"D","text":"Azure Active Directory (AD) Identity Protection and an Azure policy"}]'::jsonb, '["A"]'::jsonb, 'Azure Key Vault là dịch vụ Azure để lưu trữ các bí mật như mật khẩu và các mẫu ARM có thể tham chiếu một bí mật từ Key Vault thay vì đặt mật khẩu quản trị viên VM trực tiếp vào mẫu hoặc tệp tham số. Việc cấp quyền truy cập triển khai vào vault cho phép truy xuất bí mật một cách an toàn trong quá trình triển khai, đáp ứng yêu cầu tránh lưu trữ mật khẩu văn bản thuần túy.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-103', 'az-104', 103, 'You have an Azure Active Directory (Azure AD) tenant linked to 10 Azure subscriptions.  
  
You need to monitor user activity centrally across all the subscriptions.  
  
What should you use?', '[{"key":"A","text":"Azure Application Insights Profiler"},{"key":"B","text":"access reviews"},{"key":"C","text":"Activity log filters"},{"key":"D","text":"a Log Analytics workspace"}]'::jsonb, '["D"]'::jsonb, 'Không gian làm việc Log Analytics được sử dụng để thu thập và phân tích dữ liệu Azure Monitor từ nhiều đăng ký ở một vị trí trung tâm. Nhật ký hoạt động Azure bao gồm thông tin về người dùng hoặc dịch vụ nào đã thực hiện hành động trong đăng ký và việc xuất các nhật ký đó sang một không gian làm việc Log Analytics duy nhất cho phép giám sát tập trung trên tất cả các đăng ký. Đánh giá quyền truy cập dành cho chứng nhận quyền truy cập định kỳ, Bộ lọc nhật ký hoạt động chỉ thu hẹp những gì bạn xem thay vì tập trung vào bộ sưu tập và Trình tạo hồ sơ Application Insights dành cho chẩn đoán hiệu suất ứng dụng.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-104', 'az-104', 104, 'You create the following resources in an Azure subscription:  
  
- An Azure Container Registry instance named Registry1  
- An Azure Kubernetes Service (AKS) cluster named Cluster1  
  
You create a container image named App1 on your administrative workstation.  
  
You need to deploy App1 to Cluster1.  
  
What should you do first?', '[{"key":"A","text":"Run the docker push command."},{"key":"B","text":"Create an App Service plan."},{"key":"C","text":"Run the az acr build command."},{"key":"D","text":"Run the az aks create command."}]'::jsonb, '["A"]'::jsonb, 'AKS triển khai hình ảnh vùng chứa bằng cách kéo chúng từ sổ đăng ký vùng chứa chẳng hạn như Azure Container Register. Vì cụm AKS và phiên bản ACR đã tồn tại và App1 được xây dựng trên máy trạm cục bộ nên bước bắt buộc đầu tiên là đẩy hình ảnh hiện có đó vào Sổ đăng ký1 để Cluster1 có thể kéo hình ảnh đó. Microsoft Learn tuyên bố rằng để đẩy một hình ảnh lên Azure Container Register, trước tiên bạn phải có một hình ảnh, sau đó gắn thẻ và đẩy hình ảnh đó bằng các lệnh Docker tiêu chuẩn; Các hướng dẫn về AKS cũng mô tả việc xây dựng hoặc chuẩn bị hình ảnh và đưa chúng vào ACR trước khi triển khai chúng vào cụm.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-105', 'az-104', 105, 'You need to implement a backup solution for App1 after the application is moved.  
  
What should you create first?', '[{"key":"A","text":"a recovery plan"},{"key":"B","text":"an Azure Backup Server"},{"key":"C","text":"a backup policy"},{"key":"D","text":"a Recovery Services vault"}]'::jsonb, '["D"]'::jsonb, 'Để định cấu hình Azure Backup, tài nguyên ban đầu là **Recovery Services vault**. Vault cung cấp ranh giới quản lý sao lưu cho các mục, chính sách và điểm khôi phục được bảo vệ. Chính sách sao lưu được tạo sau khi vault tồn tại, Máy chủ Azure Backup được sử dụng cho các tình huống sao lưu kết hợp/tại chỗ cụ thể thay vì là bước đầu tiên cho Azure Backup tiêu chuẩn và kế hoạch khôi phục là cấu trúc khắc phục thảm họa Azure Site Recovery chứ không phải là điều kiện tiên quyết để sao lưu.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-106', 'az-104', 106, 'You have an Azure subscription.  
  
You create the following file named **Deploy.json**.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783640491822-r0iuxa45.png)  
  
You connect to the subscription and run the following commands.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783640496568-ycxoa7bs.png)  
  
For each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"The commands will create four new resources.","correctAnswer":"No"},{"id":"2","text":"The commands will create storage accounts in the West US Azure region.","correctAnswer":"No"},{"id":"3","text":"The first storage account that is created will have a prefix of 0.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:No","3:Yes"]'::jsonb, 'Mẫu chỉ triển khai tài nguyên tài khoản lưu trữ và khối sao chép đặt số lượng thành 3, do đó quá trình triển khai sẽ tạo ra ba tài khoản lưu trữ. Bản thân nhóm tài nguyên được tạo riêng bởi New-AzResourceGroup, do đó, các câu lệnh về triển khai mẫu liên quan đến 3 tài nguyên lưu trữ chứ không phải 4. Vị trí tài khoản lưu trữ được đặt thành ResourceGroup().location, phân giải thành vị trí của RG1: centralus. Tham số vị trí có giá trị mặc định là westus không được định nghĩa tài nguyên sử dụng. Trong vòng lặp sao chép mẫu ARM, copyIndex() bắt đầu từ 0 trừ khi chỉ mục bắt đầu khác được cung cấp, do đó tên tài khoản lưu trữ được tạo đầu tiên bắt đầu bằng 0.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783640491822-r0iuxa45.png', 'published'),
  ('az104-107', 'az-104', 107, 'You have a hybrid deployment of Azure Active Directory (Azure AD) that contains the users shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783630315068-a4ieh0pr.png)  
  
You need to modify the **JobTitle** and **UsageLocation** attributes for the users.  
  
For which users can you modify the attributes from Azure AD?', '[]'::jsonb, '[]'::jsonb, 'Người dùng thành viên chỉ sử dụng trên đám mây được thành thạo trong Microsoft Entra ID, do đó, cả JobTitle và UsageLocation đều có thể được chỉnh sửa ở đó. Người dùng được đồng bộ hóa từ Windows Server Active Directory vẫn được quản lý tại chỗ về thông tin nhận dạng, liên hệ và công việc, do đó, JobTitle phải được thay đổi trong AD tại chỗ; tuy nhiên, Microsoft Learn lưu ý cụ thể rằng Vị trí sử dụng là thuộc tính Entra ID có thể được cập nhật trực tiếp trong trung tâm quản trị Microsoft Entra ngay cả đối với người dùng được quản lý tại chỗ. Đối tượng người dùng khách trong đối tượng thuê có thể có các trường hồ sơ do quản trị viên quản lý, chẳng hạn như thông tin và vị trí liên quan đến công việc, do đó, cả hai thuộc tính đều có thể được chỉnh sửa từ Azure AD cho khách đó.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783630315068-a4ieh0pr.png', 'published'),
  ('az104-109', 'az-104', 109, 'You have an Azure subscription that contains the storage accounts shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783640477518-ldk1vg1b.png)  
  
You deploy a web app named App1 to the West US Azure region.  
  
You need to back up App1. The solution must minimize costs.  
  
Which storage account should you use as the backup target?', '[{"key":"A","text":"storage1"},{"key":"B","text":"storage2"},{"key":"C","text":"storage3"},{"key":"D","text":"storage4"}]'::jsonb, '["B"]'::jsonb, 'Để sao lưu Dịch vụ ứng dụng với chi phí tối thiểu, tài khoản lưu trữ phải ở cùng khu vực với ứng dụng để tránh chi phí truyền dữ liệu giữa các khu vực. Hình ảnh hiển thị storage2 (BlobStorage) ở Tây Hoa Kỳ và storage3 (BlockBlobStorage) cũng ở Tây Hoa Kỳ. Storage2 là sự lựa chọn tiêu chuẩn, tiết kiệm chi phí cho việc lưu trữ sao lưu dựa trên blob. Trong khi BlockBlobStorage cung cấp tính chuyên môn hóa thì BlobStorage tiêu chuẩn là tùy chọn có chi phí thấp nhất đáp ứng yêu cầu của khu vực.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783640477518-ldk1vg1b.png', 'published'),
  ('az104-110', 'az-104', 110, 'You have an Azure subscription that contains a virtual machine named VM1.  
  
VM1 has an operating system disk named Disk1 and a data disk named Disk2.  
  
You need to back up Disk2 by using Azure Backup.  
  
Which three actions should you perform in sequence?', '{"statements":[{"id":"slot1","text":"Slot 1:","correctAnswer":"B"},{"id":"slot2","text":"Slot 2:","correctAnswer":"E"},{"id":"slot3","text":"Slot 3:","correctAnswer":"A"}],"choices":[{"key":"A","text":"Configure a managed identity"},{"key":"B","text":"Create an Azure Backup vault"},{"key":"C","text":"Create a Recovery Services vault"},{"key":"D","text":"Delegate permissions for the vault"},{"key":"E","text":"Create a backup policy and configure the backup"}]}'::jsonb, '["slot1=B","slot2=E","slot3=A"]'::jsonb, 'Azure Disk Backup bảo vệ các ổ đĩa được quản lý thông qua Kho lưu trữ dự phòng thay vì Recovery Services vault, vì vậy trước tiên bạn hãy tạo kho lưu trữ Azure Backup. Trong vault, sau đó bạn tạo chính sách sao lưu và định cấu hình sao lưu cho Disk2, chọn đĩa và nhóm tài nguyên ảnh chụp nhanh của nó. Việc hoàn tất cấu hình đó yêu cầu managed identity của Backup vault có vai trò Disk Backup Reader và Disk Snapshot Contributor, vì vậy hành động cuối cùng là định cấu hình các quyền của managed identity để nó có thể tạo và quản lý các ảnh chụp nhanh gia tăng của đĩa.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-111', 'az-104', 111, 'You have an Azure subscription that contains 10 virtual machines, a key vault named Vault1, and a network security group (NSG) named NSG1. All the resources are deployed to the **East US** Azure region.  
  
The virtual machines are protected by using NSG1. NSG1 is configured to block all outbound traffic to the internet.  
  
You need to ensure that the virtual machines can access Vault1. The solution must use the principle of least privilege and minimize administrative effort.  
  
What should you configure as the **destination** of the outbound security rule for NSG1?', '[{"key":"A","text":"an application security group"},{"key":"B","text":"a service tag"},{"key":"C","text":"an IP address range"}]'::jsonb, '["B"]'::jsonb, 'Trong quy tắc NSG, **thẻ dịch vụ** là đích đến chính xác để cho phép truy cập từ máy ảo vào Azure Key Vault với ít đặc quyền nhất và quản trị tối thiểu. Thẻ dịch vụ cho phép các quy tắc NSG nhắm mục tiêu các dịch vụ Azure như **Key Vault** mà không cần mã hóa dải IP công cộng và Microsoft tự động duy trì các tiền tố địa chỉ cơ bản. Nhóm bảo mật ứng dụng dùng để nhóm các giao diện mạng VM chứ không phải điểm cuối dịch vụ Azure và việc sử dụng dải địa chỉ IP là không lý tưởng vì địa chỉ Key Vault service endpoint không nhằm mục đích được khách hàng quản lý dưới dạng một dải cố định.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-112', 'az-104', 112, 'You have a Microsoft Entra tenant linked to the subscriptions shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784205776763-nbpkn6s9.png)  
  
You have the resource groups shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784205779875-k1ztz76i.png)  
  
You assign roles to users as shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784205782866-64hxjomd.png)  
  
For each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"User1 can resize VM1.","correctAnswer":"Yes"},{"id":"2","text":"User2 can create a new storage account in RG1.","correctAnswer":"No"},{"id":"3","text":"User3 can assign User1 the Owner role for RG3.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:Yes","2:No","3:Yes"]'::jsonb, 'Các bài tập Azure RBAC ở phạm vi nhóm quản lý được kế thừa bởi các nhóm đăng ký và nhóm tài nguyên bên dưới nhóm đó. Người đóng góp có thể quản lý tài nguyên, bao gồm thay đổi kích thước máy ảo, do đó Người dùng1 có thể thay đổi kích thước VM1 đến MG2. Người đóng góp tài khoản lưu trữ trong phạm vi storage1 chỉ áp dụng cho tài khoản lưu trữ đó và không thể tạo tài khoản lưu trữ mới trong RG1. Quản trị viên truy cập người dùng cho phép quản lý việc phân công vai trò; được chỉ định tại Nhóm gốc của đối tượng thuê, nó được RG3 kế thừa, cho phép User3 gán cho User1 vai trò Chủ sở hữu ở đó.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1784205776763-nbpkn6s9.png', 'published'),
  ('az104-113', 'az-104', 113, 'You have an Azure subscription containing two peered virtual networks named VNet1 and VNet2. VNet1 has a VPN gateway that uses static routing.  
  
The on-premises network has a VPN connection that uses VNet1''s VPN gateway.  
  
You need to configure access so that users on the on-premises network can connect to a virtual machine in VNet2. The solution must minimize costs.  
  
Which type of connectivity should you use?', '[{"key":"A","text":"Azure Firewall with a private IP address"},{"key":"B","text":"service chaining and user-defined routes (UDRs)"},{"key":"C","text":"Azure Application Gateway"},{"key":"D","text":"ExpressRoute circuits to VNet2"}]'::jsonb, '["B"]'::jsonb, 'Chuỗi dịch vụ và các tuyến do người dùng xác định (UDR) cho phép lưu lượng truy cập được định tuyến qua VPN gateway trong mạng ảo ngang hàng. Điều này sử dụng lại VPN gateway hiện có của VNet1 để cung cấp đường dẫn tại chỗ đến VNet2 cần thiết, tránh chi phí bổ sung khi triển khai ExpressRoute hoặc các dịch vụ tường lửa và phân phối ứng dụng.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-114', 'az-104', 114, 'You have an Azure subscription that contains the virtual networks shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783640510875-0omq5xbw.png)  
  
You need to deploy an Azure firewall named AF1 to RG1 in the West US Azure region.  
  
To which virtual networks can AF1 be deployed?', '[{"key":"A","text":"VNET1, VNET2, VNET3, and VNET4"},{"key":"B","text":"VNET1 and VNET2 only"},{"key":"C","text":"VNET1 only"},{"key":"D","text":"VNET1, VNET2, and VNET4 only"},{"key":"E","text":"VNET1 and VNET4 only"}]'::jsonb, '["E"]'::jsonb, 'Phiên bản Azure Firewall phải được tạo trong mạng ảo nằm trong cùng vùng Azure với tường lửa. Mạng ảo không nhất thiết phải nằm trong cùng nhóm tài nguyên với tài nguyên tường lửa, do đó, VNet của Tây Hoa Kỳ trong RG1 hoặc RG2 là hợp lệ. Từ bảng, chỉ có VNET1 và VNET4 ở Tây Hoa Kỳ; VNET2 và VNET3 nằm ở miền Trung Hoa Kỳ nên không thể lưu trữ AF1. Hướng dẫn triển khai Microsoft Learn Azure Firewall nêu rõ rằng tường lửa được triển khai trong mạng ảo của chính nó và các tài nguyên liên quan trong quá trình triển khai phải nằm trong cùng một khu vực.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783640510875-0omq5xbw.png', 'published'),
  ('az104-115', 'az-104', 115, 'You have a Standard-tier Azure App Service plan named Plan1.  
  
You need to ensure that Plan1 scales automatically when the web app’s CPU usage exceeds 80 percent.  
  
What should you select for Plan1?', '[{"key":"A","text":"Automatic in the Scale out method settings"},{"key":"B","text":"Rules Based in the Scale out method settings"},{"key":"C","text":"Premium P1 in the Scale up (App Service plan) settings"},{"key":"D","text":"Standard S1 in the Scale up (App Service plan) settings"},{"key":"E","text":"Manual in the Scale out method settings"}]'::jsonb, '["B"]'::jsonb, 'Tính năng mở rộng quy mô dựa trên quy tắc hỗ trợ các quy tắc tự động chia tỷ lệ của Azure sử dụng các số liệu như tỷ lệ phần trăm CPU. Cấp Tiêu chuẩn hỗ trợ tính năng tự động chia tỷ lệ; Phương pháp mở rộng quy mô tự động dựa trên lưu lượng truy cập thay vì dựa trên ngưỡng CPU.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-116', 'az-104', 116, 'You have an on-premises network.  
  
You have an Azure subscription that contains three virtual networks named VNET1, VNET2, and VNET3. The virtual networks are peered and connected to the on-premises network. The subscription contains the virtual machines shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783640511027-22jhs68p.png)  
  
You need to monitor connectivity between the virtual machines and the on-premises network by using Connection Monitor.  
  
What is the minimum number of connection monitors you should deploy?', '[{"key":"A","text":"1"},{"key":"B","text":"2"},{"key":"C","text":"3"},{"key":"D","text":"4"}]'::jsonb, '["B"]'::jsonb, 'Azure Connection Monitor là tài nguyên Network Watcher dành riêng cho khu vực, nhưng mỗi màn hình có thể bao gồm nhiều điểm cuối và nhóm thử nghiệm, bao gồm máy ảo Azure và máy tại chỗ. Vì các máy ảo được đặt ở hai khu vực—Tây Hoa Kỳ và Trung Hoa Kỳ—nên cần một trình giám sát kết nối cho mỗi khu vực nguồn để bao quát tất cả các đường dẫn kết nối VM đến tại chỗ. Điều đó làm cho số lượng màn hình kết nối tối thiểu là 2.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783640511027-22jhs68p.png', 'published'),
  ('az104-117', 'az-104', 117, 'You need to make sure that **Group4** can be granted **Azure RBAC read-only** permissions for **all the Azure file shares**.  
  
What should you do?', '[{"key":"A","text":"On storage2, enable identity-based access for the file shares."},{"key":"B","text":"Recreate storage2 and set Hierarchical namespace to Enabled."},{"key":"C","text":"On storage1 and storage4, change the Account kind type to StorageV2 (general purpose v2)."},{"key":"D","text":"Create a shared access signature (SAS) for storage1, storage2, and storage4."}]'::jsonb, '["A"]'::jsonb, 'Chia sẻ tệp Azure hỗ trợ quyền truy cập chỉ đọc thông qua Azure RBAC khi quyền truy cập dựa trên danh tính được bật cho Azure Files trên tài khoản lưu trữ. Điều này cho phép gán vai trò truy cập dữ liệu Azure Files tích hợp cho nhóm Microsoft Entra chẳng hạn như Group4. Việc bật không gian tên phân cấp không liên quan đến Azure Files RBAC, mã thông báo SAS là một cơ chế ủy quyền khác và không cấp quyền cho Azure RBAC, đồng thời việc chỉ thay đổi tài khoản thành StorageV2 bản thân nó không cho phép ủy quyền Azure Files dựa trên danh tính cần thiết.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-118', 'az-104', 118, 'You have an Azure subscription.  
  
You create the Azure Storage account shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783637497016-smra2xmp.jpg)  
  
Use the drop-down menus to choose the answer that completes each statement based on the information shown.', '[]'::jsonb, '[]'::jsonb, 'Bộ lưu trữ dự phòng cục bộ (LRS) duy trì ba bản sao dữ liệu trong một trung tâm dữ liệu ở khu vực chính, do đó số lượng bản sao tối thiểu là 3. Tài khoản StorageV2 hỗ trợ các bậc truy cập blob và việc giảm chi phí dữ liệu được truy cập không thường xuyên được thực hiện bằng cách thay đổi bậc truy cập mặc định của tài khoản từ Nóng sang cấp mát hơn như Mát hoặc Lạnh. Việc thay đổi hiệu suất, loại tài khoản hoặc bản sao không trực tiếp cung cấp mức tối ưu hóa chi phí nóng/cool tier dự định cho dữ liệu blob được truy cập không thường xuyên.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783637497016-smra2xmp.jpg', 'published'),
  ('az104-119', 'az-104', 119, 'You have an Azure Linux virtual machine that is protected by Azure Backup.  
  
One week ago, two files were deleted from the virtual machine.  
  
You need to restore the deleted files to an on-premises Windows Server 2016 computer as quickly as possible.  
  
Which four actions should you perform in sequence?', '{"statements":[{"id":"slot1","text":"Slot 1:","correctAnswer":"D"},{"id":"slot2","text":"Slot 2:","correctAnswer":"B"},{"id":"slot3","text":"Slot 3:","correctAnswer":"A"},{"id":"slot4","text":"Slot 4:","correctAnswer":"G"}],"choices":[{"key":"A","text":"Download and run the script to mount a drive on the local computer"},{"key":"B","text":"Select a restore point that contains the deleted files"},{"key":"C","text":"From the Azure portal, click Restore VM from the vault"},{"key":"D","text":"From the Azure portal, click File Recovery from the vault"},{"key":"E","text":"Mount a VHD"},{"key":"F","text":"Copy the files by using AZCopy"},{"key":"G","text":"Copy the files by using File Explorer"}]}'::jsonb, '["slot1=D","slot2=B","slot3=A","slot4=G"]'::jsonb, 'Azure Backup khôi phục các tệp riêng lẻ từ máy ảo Azure bằng cách sử dụng tính năng **Phục hồi tệp** trong Recovery Services vault. Bạn chọn một điểm khôi phục, tải xuống tập lệnh khôi phục đã tạo và chạy nó trên một máy tương thích để gắn điểm khôi phục dưới dạng ổ đĩa cục bộ. Sau khi các ổ đĩa được gắn vào, bạn duyệt chúng và sao chép các tệp cần thiết vào hệ thống đích. **Khôi phục VM** dùng để khôi phục toàn bộ máy ảo chứ không chỉ một vài tệp đã xóa và **AZCopy** không phải là công cụ thông thường để sao chép tệp từ ổ đĩa khôi phục được gắn vào đích Windows Server.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-120', 'az-104', 120, 'You have an Azure subscription that contains the file shares shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783632875465-f2x65izh.png)  
  
You have the on-premises file shares shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783632878750-diqbj1pk.png)  
  
You create an Azure file sync group named **Sync1** and perform the following actions:  
  
- Add **share1** as the cloud endpoint for **Sync1**.  
- Add **data1** as a server endpoint for **Sync1**.  
- Register **Server1** and **Server2** to **Sync1**.  
  
For each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"You can add share3 as an additional cloud endpoint for Sync1.","correctAnswer":"No"},{"id":"2","text":"You can add data2 as an additional server endpoint for Sync1.","correctAnswer":"Yes"},{"id":"3","text":"You can add data3 as an additional server endpoint for Sync1.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:Yes","3:No"]'::jsonb, 'Azure File Sync cho phép chính xác một điểm cuối đám mây cho mỗi nhóm đồng bộ hóa, do đó Sync1 không thể thêm share3 làm điểm cuối đám mây khác. Điểm cuối máy chủ phải là đường dẫn trên máy chủ đã đăng ký và nhóm đồng bộ hóa có thể có một điểm cuối máy chủ cho mỗi máy chủ đã đăng ký. Vì Server2 đã được đăng ký nên dữ liệu2 trên Server2 có thể được thêm vào. Không thể thêm Data3 vì nó nằm trên Server3, chưa được đăng ký.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783632875465-f2x65izh.png', 'published'),
  ('az104-121', 'az-104', 121, 'You have an Azure subscription.  
  
You deploy a virtual machine scale set that is configured as shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783637531713-owv4dz4y.png)  
  
At 9:00 AM, the scale set starts and CPU utilization is 90 percent for 15 minutes. How many virtual machine instances will be running at 9:15 AM?  
  
At 10:00 AM, the scale set has five virtual machine instances running and CPU utilization falls to less than 15 percent for 60 minutes. How many virtual machine instances will be running at 11:00 AM?', '[]'::jsonb, '[]'::jsonb, 'Bộ tỷ lệ được định cấu hình với số lượng ban đầu là 2, tối thiểu là 1 và tối đa là 10 phiên bản, quy tắc mở rộng quy mô sẽ thêm 1 phiên bản khi CPU trung bình vượt quá 75% trong 10 phút (thời gian hồi chiêu 5 phút) và quy tắc tăng tỷ lệ giúp loại bỏ 1 phiên bản khi CPU trung bình giảm xuống dưới 25% (thời gian hồi chiêu 5 phút). Bắt đầu từ 2 phiên bản với CPU được ghim ở mức 90%, khoảng thời gian đánh giá 10 phút lần đầu tiên được đáp ứng vào lúc 9:10 sáng, kích hoạt mở rộng quy mô thành 3 phiên bản; thời gian hồi chiêu 5 phút tiếp theo có nghĩa là quá trình mở rộng quy mô tiếp theo của no sẽ hoàn tất trước 9:15 sáng, tức là có 3 phiên bản đang chạy vào thời điểm đó. Bắt đầu ở 5 phiên bản có CPU dưới 25% trong toàn bộ 60 phút bắt đầu lúc 10:00 sáng, quy tắc mở rộng quy mô liên tục loại bỏ 1 phiên bản trong mỗi chu kỳ đánh giá/thời gian hồi chiêu (5 → 4 → 3 → 2 → 1) cho đến khi đạt đến mức tối thiểu đã định cấu hình là 1 phiên bản, do đó, chỉ còn 1 phiên bản vẫn chạy lúc 11:00 sáng.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783637531713-owv4dz4y.png', 'published'),
  ('az104-122', 'az-104', 122, 'You have an Azure subscription that contains two Log Analytics workspaces named Workspace1 and Workspace2 and 100 virtual machines that run Windows Server.  
  
You need to collect performance data and events from the virtual machines. The solution must meet the following requirements:  
  
- Logs must be sent to Workspace1 and Workspace2.  
- All Windows events must be captured.  
- All security events must be captured.  
  
What should you install and configure on each virtual machine?', '[{"key":"A","text":"the Azure Monitor agent"},{"key":"B","text":"the Windows Azure diagnostics extension (WAD)"},{"key":"C","text":"the Windows VM agent"}]'::jsonb, '["A"]'::jsonb, 'Tác nhân Azure Monitor hỗ trợ thu thập nhật ký sự kiện Windows và bộ đếm hiệu suất từ ​​máy ảo Windows bằng cách sử dụng các quy tắc thu thập dữ liệu. Microsoft Learn cũng tuyên bố rằng dữ liệu sự kiện và dữ liệu bộ đếm hiệu suất của Windows có thể được gửi đến nhiều không gian làm việc Log Analytics, đáp ứng yêu cầu gửi cùng một dữ liệu đến Workspace1 và Workspace2. Các sự kiện bảo mật được đưa vào bằng cách thu thập Nhật ký bảo mật thông qua nguồn dữ liệu sự kiện Windows. Tác nhân Windows VM chỉ là tác nhân khách được sử dụng để quản lý tiện ích mở rộng và tiện ích mở rộng Chẩn đoán Azure là một giải pháp cũ chứ không phải là tác nhân giám sát hiện tại chính xác cho yêu cầu này.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-123', 'az-104', 123, 'Solution: enable **Floating IP**.  
  
Does this solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["A"]'::jsonb, 'Bộ cân bằng tải nội bộ Azure được sử dụng làm điểm cuối trình nghe cho nhóm sẵn có SQL Server Luôn bật trên Azure virtual machines yêu cầu quy tắc cân bằng tải phải bật IP nổi để trả về máy chủ trực tiếp. Hướng dẫn cấu hình Microsoft Learn dành cho trình nghe nhóm khả dụng bao gồm việc bật IP nổi trên quy tắc cân bằng tải, do đó hành động này đáp ứng yêu cầu.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-124', 'az-104', 124, 'Solution: You create an HTTP health probe on port 1433.  
  
Does this solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["B"]'::jsonb, 'Bộ cân bằng tải nội bộ Azure cho trình nghe nhóm khả dụng SQL Server Luôn bật phải sử dụng cấu hình thăm dò tình trạng cân bằng tải được hỗ trợ bởi Thiết lập trình nghe và Cụm chuyển đổi dự phòng của Windows Server. Hướng dẫn của Microsoft dành cho trình nghe nhóm khả dụng SQL Server trên Azure virtual machines sử dụng đầu dò tình trạng **TCP** trên cổng thăm dò chuyên dụng, với các tham số cụm tương ứng được định cấu hình cho trình nghe. Đầu dò **HTTP** trên cổng **1433** không phải là cấu hình đầu dò người nghe bắt buộc, do đó, nó không đáp ứng được mục tiêu.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-125', 'az-104', 125, 'Solution: You configure **Session persistence** to **Client IP**.  
  
Does the solution meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["B"]'::jsonb, 'Đối với bộ cân bằng tải nội bộ Azure được sử dụng làm trình nghe nhóm sẵn sàng SQL Server Luôn bật, Microsoft Learn chỉ định quy tắc cân bằng tải của trình nghe với **Tính liên tục của phiên = Không** và **IP nổi (trả về máy chủ trực tiếp) = Đã bật**. Vì cài đặt bắt buộc là **Không** nên việc định cấu hình **IP máy khách** không đáp ứng yêu cầu về cấu hình trình nghe.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-126', 'az-104', 126, 'You need to deploy an Azure virtual machine scale set that contains five instances as quickly as possible.  
  
What should you do?', '[{"key":"A","text":"Deploy five virtual machines. Modify the Availability Zones settings for each virtual machine."},{"key":"B","text":"Deploy five virtual machines. Modify the Size setting for each virtual machine."},{"key":"C","text":"Deploy one virtual machine scale set that is set to VM (virtual machines) orchestration mode."},{"key":"D","text":"Deploy one virtual machine scale set that is set to ScaleSetVM orchestration mode."}]'::jsonb, '["D"]'::jsonb, 'Bộ tỷ lệ Azure Virtual Machine được thiết kế để tạo và quản lý nhiều phiên bản VM giống hệt nhau dưới dạng một tài nguyên. Để triển khai nhanh nhất năm phiên bản tương tự, mô hình tập hợp tỷ lệ thống nhất là phù hợp nhất vì các phiên bản được quản lý dưới dạng máy ảo tập hợp tỷ lệ thay vì được quản lý riêng lẻ Azure virtual machines. Tài liệu Azure phân biệt Điều phối linh hoạt, hỗ trợ các phiên bản Azure VM tiêu chuẩn và tính linh hoạt cao hơn trên mỗi VM, với Điều phối thống nhất, sử dụng các phiên bản VM được thiết lập theo quy mô cho khối lượng công việc giống hệt nhau trên quy mô lớn và cung cấp nhanh chóng đơn giản hơn.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-127', 'az-104', 127, 'You have an Azure subscription connected to a hybrid Microsoft Entra tenant. The tenant includes the users shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784205787981-0uitr74n.png)  
  
You create the Azure Files shares shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784205790800-9vwkamau.png)  
  
You configure identity-based access for contoso2024 as shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784205793023-ok05chb0.png)  
  
For each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"User1 can access the content in share1.","correctAnswer":"No"},{"id":"2","text":"User2 can access the content in share2.","correctAnswer":"Yes"},{"id":"3","text":"User2 can access the content in share3.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:Yes","3:No"]'::jsonb, 'Xác thực AD DS tại chỗ cho Azure Files có thể xác thực danh tính kết hợp được hỗ trợ bởi môi trường AD DS đó; danh tính chỉ trên đám mây không thể sử dụng nguồn đó. Quyền Người đóng góp chia sẻ SMB dữ liệu tệp lưu trữ mặc định áp dụng cho tất cả người dùng và nhóm được xác thực trên mọi chia sẻ tệp trong contoso2024, vì vậy User2 có thể truy cập vào share2. Quyền truy cập dựa trên danh tính và quyền mặc định của nó được định cấu hình cho mỗi tài khoản lưu trữ, vì vậy cài đặt trên contoso2024 không cấp quyền truy cập vào share3 trong contoso2025.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1784205787981-0uitr74n.png', 'published'),
  ('az104-128', 'az-104', 128, 'You plan to deploy an Ubuntu Server virtual machine to your company''s Azure subscription.  
  
You must implement a custom deployment that includes adding a specific trusted root certification authority (CA).  
  
Which of the following should you use to create the virtual machine?', '[{"key":"A","text":"The New-AzureRmVm cmdlet."},{"key":"B","text":"The New-AzVM cmdlet."},{"key":"C","text":"The Create-AzVM cmdlet."},{"key":"D","text":"The az vm create command."}]'::jsonb, '["D"]'::jsonb, 'Đối với Ubuntu và các máy ảo Linux khác trong Azure, các tác vụ triển khai tùy chỉnh như thêm CA gốc đáng tin cậy thường được thực hiện tại thời điểm cung cấp bằng cách chuyển dữ liệu đám mây-init hoặc dữ liệu tùy chỉnh khác. Tài liệu Microsoft Learn sử dụng `az vm create` với `--custom-data` cho mục đích này khi tạo máy ảo Linux. `New-AzureRmVm` thuộc mô-đun AzureRM đã ngừng hoạt động và `Create-AzVM` không phải là lệnh ghép ngắn tạo VM tiêu chuẩn.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-129', 'az-104', 129, 'You have a public load balancer that distributes ports 80 and 443 across three virtual machines named VM1, VM2, and VM3.  
  
You need to send all Remote Desktop Protocol (RDP) connections to VM3 only.  
  
What should you configure?', '[{"key":"A","text":"an inbound NAT rule"},{"key":"B","text":"a new public load balancer for VM3"},{"key":"C","text":"a frontend IP configuration"},{"key":"D","text":"a load balancing rule"}]'::jsonb, '["A"]'::jsonb, 'Quy tắc NAT gửi đến là tính năng Azure Load Balancer dùng để chuyển tiếp lưu lượng truy cập từ cổng và IP giao diện người dùng đến một máy ảo phụ trợ cụ thể. Đó là cấu hình chính xác để chỉ hướng lưu lượng RDP tới VM3, trong khi quy tắc cân bằng tải sẽ phân phối lưu lượng trên nhiều máy ảo phụ trợ thay vì nhắm mục tiêu vào một máy ảo duy nhất. Microsoft Learn xác định các quy tắc NAT gửi đến làm cơ chế chuyển tiếp cổng tới máy ảo được chỉ định và đặc biệt ghi chú RDP là một tình huống điển hình.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-130', 'az-104', 130, 'You have an Azure subscription that contains an Azure virtual machine named VM1. VM1 runs a financial reporting app named App1 that does not support multiple active instances.  
  
At the end of each month, CPU usage for VM1 peaks when App1 runs.  
  
You need to create a scheduled runbook to increase the processor performance of VM1 at the end of each month.  
  
What task should you include in the runbook?', '[{"key":"A","text":"Add the Azure Performance Diagnostics agent to VM1."},{"key":"B","text":"Modify the VM size property of VM1."},{"key":"C","text":"Add VM1 to a scale set."},{"key":"D","text":"Increase the vCPU quota for the subscription."},{"key":"E","text":"Add a Desired State Configuration (DSC) extension to VM1."}]'::jsonb, '["B"]'::jsonb, 'Để tăng hiệu suất CPU cho một máy ảo Azure, bạn thay đổi kích thước máy ảo thành kích thước/SKU lớn hơn bằng cách thay đổi thuộc tính kích thước máy ảo của nó. Điều đó mở rộng VM hiện tại thay vì giảm bớt, phù hợp với một ứng dụng không thể chạy trên nhiều phiên bản đang hoạt động. Tài liệu Azure về thay đổi kích thước máy ảo nêu rõ rằng bạn có thể mở rộng quy mô VM lên hoặc xuống bằng cách thay đổi kích thước của nó và Azure CLI hiển thị điều này trực tiếp thông qua `az vm resize`.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-131', 'az-104', 131, 'HOTSPOT  

-  
  
You have an Azure subscription that contains the vaults shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783646352939-rltyjr0o.png)  
  
You deploy the virtual machines shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783646355667-chera825.png)  
  
You have the backup policies shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783646358188-wqwqg5ej.png)  
  
For each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"VM1 can be backed up by using Policy1.","correctAnswer":"Yes"},{"id":"2","text":"VM2 can be backed up by using Policy3.","correctAnswer":"No"},{"id":"3","text":"VM2 can be backed up by using Policy2.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:Yes","2:No","3:No"]'::jsonb, 'Bản sao lưu Azure VM trong Recovery Services vault hỗ trợ các máy ảo được mã hóa ADE, vì vậy VM1 có thể sử dụng chính sách Tiêu chuẩn trong Recovery1. Kho tiền Azure Backup không cung cấp chính sách sao lưu Azure VM có thể sử dụng được ở đây, đó là lý do tại sao Chính sách3 không áp dụng cho VM2. Các máy ảo khởi chạy đáng tin cậy yêu cầu hỗ trợ chính sách nâng cao để sao lưu Azure VM, nhưng Chính sách2 được xác định trong Recovery2 và kho lưu trữ đó không có trong các tài nguyên đăng ký được liệt kê, do đó không thể sao lưu VM2 bằng cách sử dụng Chính sách2 như đã cho.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783646352939-rltyjr0o.png', 'published'),
  ('az104-132', 'az-104', 132, 'You have an Azure subscription named Subscription1.  
  
You have 5 TB of data that you need to transfer to Subscription1.  
  
You plan to use an Azure Import/Export job.  
  
What can you use as the destination for the imported data?', '[{"key":"A","text":"an Azure Cosmos DB database"},{"key":"B","text":"Azure Data Lake Store"},{"key":"C","text":"Azure Blob storage"},{"key":"D","text":"Azure Data Factory"}]'::jsonb, '["C"]'::jsonb, 'Nhập/Xuất Azure hỗ trợ nhập dữ liệu bằng cách vận chuyển ổ đĩa đến trung tâm dữ liệu Azure và các mục tiêu nhập được hỗ trợ là Azure Blob storage và Azure Files. Trong số các lựa chọn có sẵn, chỉ Azure Blob storage là đích được hỗ trợ cho dữ liệu đã nhập.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-133', 'az-104', 133, 'You have an Azure subscription named Subscription1.  
  
You have 5 TB of data that you need to transfer to Subscription1.  
  
You plan to use an Azure Import/Export job.  
  
What can you use as the destination for the imported data?', '[{"key":"A","text":"Azure Blob Storage"},{"key":"B","text":"Azure Data Lake Store"},{"key":"C","text":"Azure SQL Database"},{"key":"D","text":"a virtual machine"}]'::jsonb, '["A"]'::jsonb, 'Azure Import/Export hỗ trợ nhập dữ liệu bằng cách chuyển ổ đĩa tới Azure để sao chép vào Azure Storage. Các đích nhập được hỗ trợ là Azure Blob Storage và Azure Files. Trong số các tùy chọn có sẵn, chỉ hỗ trợ Azure Blob Storage nên đây là đích đến chính xác.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-134', 'az-104', 134, 'You have an Azure virtual machine named VM1 that connects to a virtual network named VNet1. VM1 has the following configurations:  
  
- **Subnet:** 10.0.0.0/24  
- **Availability set:** AVSet  
- **Network security group (NSG):** None  
- **Private IP address:** 10.0.0.4 (dynamic)  
- **Public IP address:** 40.90.219.6 (dynamic)  
  
You deploy a standard, Internet-facing load balancer named slb1.  
  
You need to configure slb1 to allow connectivity to VM1.  
  
Which changes should you apply to VM1 as you configure slb1?', '[]'::jsonb, '[]'::jsonb, 'Bộ cân bằng tải công khai SKU tiêu chuẩn không thể thêm VM vào nhóm phụ trợ của nó trong khi VM đó vẫn có địa chỉ IP công cộng riêng, vì vậy trước khi tạo nhóm phụ trợ trên slb1, bạn phải xóa địa chỉ IP công khai khỏi VM1. Riêng biệt, Cân bằng tải tiêu chuẩn được bảo mật theo mặc định và chặn tất cả các luồng gửi đến trừ khi nhóm bảo mật mạng cho phép chúng một cách rõ ràng, vì vậy trước khi slb1 thực sự có thể kết nối với VM1, bạn phải tạo và đặt cấu hình NSG cho phép lưu lượng truy cập cần thiết trên NIC hoặc mạng con của VM1. Địa chỉ IP riêng của VM1 không cần phải thay đổi thành tĩnh để bộ cân bằng tải hoạt động.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-135', 'az-104', 135, 'You have an Azure Active Directory (Azure AD) tenant named **adatum.com**. Adatum.com contains the groups in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783637464181-jsa3mqcr.jpg)  
  
You create two user accounts configured as shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783637467315-585is5bj.png)  
  
Identify which groups User1 and User2 are members of.', '[]'::jsonb, '[]'::jsonb, 'Nhóm người dùng động đánh giá thuộc tính người dùng theo quy tắc thành viên. Nhóm1 bao gồm những người dùng có thành phố bắt đầu bằng "m", vì vậy cả Montreal và Melbourne đều đủ điều kiện. Nhóm2 bao gồm những người dùng mà bộ phận của họ không phải là "nhân sự", do đó Người dùng1 bị loại trừ và Người dùng2 được bao gồm. Group3 sử dụng tư cách thành viên được chỉ định, yêu cầu bổ sung thủ công và không thể suy ra từ các thuộc tính nhất định, do đó, cả người dùng đều không được tính là thành viên của Group3.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783637464181-jsa3mqcr.jpg', 'published'),
  ('az104-136', 'az-104', 136, 'You have an Azure subscription.  
  
In the Azure portal, you plan to create a storage account named `storage1` with the following settings:  
  
- **Performance:** Standard  
- **Replication:** Zone-redundant storage (ZRS)  
- **Access tier (default):** Cool  
- **Hierarchical namespace:** Disabled  
  
You need to make sure that you can set **Account kind** for `storage1` to **BlockBlobStorage**.  
  
Which setting should you change first?', '[{"key":"A","text":"Performance"},{"key":"B","text":"Replication"},{"key":"C","text":"Access tier (default)"},{"key":"D","text":"Hierarchical namespace"}]'::jsonb, '["A"]'::jsonb, 'Tài khoản BlockBlobStorage là loại tài khoản lưu trữ khối blob cao cấp nên yêu cầu hiệu suất **Cao cấp**. Với hiệu suất **Tiêu chuẩn** được chọn, loại tài khoản BlockBlobStorage sẽ không khả dụng. ZRS có thể được hỗ trợ cho các tài khoản khối blob cao cấp, trong khi cài đặt không gian tên phân cấp được liệt kê không ngăn cản việc chọn loại tài khoản đó. Cấp truy cập được hiển thị là Cool cũng không tương thích với các tài khoản khối blob cao cấp, nhưng điều kiện tiên quyết để kích hoạt loại tài khoản BlockBlobStorage trong cổng là thay đổi cấp hiệu suất thành Premium.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-137', 'az-104', 137, 'You have a Microsoft Entra tenant called contoso.com.  
  
You collaborate with an external partner called fabrikam.com.  
  
You plan to invite fabrikam.com users to the contoso.com tenant.  
  
You need to ensure that invitations can be sent only to fabrikam.com users.  
  
What should you configure in the Microsoft Entra admin center?', '[{"key":"A","text":"From Cross-tenant access settings, configure the Tenant restrictions settings."},{"key":"B","text":"From Cross-tenant access settings, configure the Microsoft cloud settings."},{"key":"C","text":"From External collaboration settings, configure the Guest user access restrictions settings."},{"key":"D","text":"From External collaboration settings, configure the Collaboration restrictions settings."}]'::jsonb, '["D"]'::jsonb, 'Cài đặt cộng tác bên ngoài của Microsoft Entra bao gồm các hạn chế Cộng tác, có thể sử dụng danh sách cho phép để chỉ cho phép lời mời B2B tới các miền email được chỉ định. Việc thêm `fabrikam.com` làm miền được phép sẽ ngăn lời mời tới người dùng từ tất cả các miền khác.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-138', 'az-104', 138, 'You plan to back up an Azure virtual machine named VM1.  
  
You discover that the **Backup Pre-Check** status shows **Warning**.  
  
What is one possible cause of the **Warning** status?', '[{"key":"A","text":"VM1 is stopped."},{"key":"B","text":"VM1 does not have the latest version of the Azure VM Agent (WaAppAgent.exe) installed."},{"key":"C","text":"VM1 has an unmanaged disk."},{"key":"D","text":"A Recovery Services vault is unavailable."}]'::jsonb, '["B"]'::jsonb, 'Kiểm tra trước bản sao lưu **Cảnh báo** cho Azure virtual machine có thể xảy ra khi Tác nhân Azure VM bị thiếu hoặc không được cập nhật lên phiên bản hiện tại. Azure Backup sử dụng tác nhân VM để điều phối dựa trên tiện ích mở rộng và hành vi sao lưu nhất quán với ứng dụng; nếu tác nhân đã lỗi thời thì vẫn có thể sao lưu nhưng nó có thể đưa ra cảnh báo vì chức năng sao lưu được đề xuất có thể không có sẵn đầy đủ.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-139', 'az-104', 139, 'You have an Azure subscription that contains a storage account.  
  
You have an on-premises server named Server1 that runs Windows Server 2016. Server1 has 2 TB of data.  
  
You need to transfer the data to the storage account by using the Azure Import/Export service.  
  
In which order should you perform the actions?  
  
More than one order may be correct.', '{"statements":[{"id":"s1","text":"Slot 1:","correctAnswer":"C"},{"id":"s2","text":"Slot 2:","correctAnswer":"B"},{"id":"s3","text":"Slot 3:","correctAnswer":"D"},{"id":"s4","text":"Slot 4:","correctAnswer":"A"}],"choices":[{"key":"A","text":"From the Azure portal, update the import job"},{"key":"B","text":"From the Azure portal, create an import job"},{"key":"C","text":"Attach an external disk to Server1 and then run waimportexport.exe"},{"key":"D","text":"Detach the external disks from Server1 and ship the disks to an Azure data center"}]}'::jsonb, '["s1=C","s2=B","s3=D","s4=A"]'::jsonb, 'Nhập/Xuất Azure sử dụng công cụ WAImportExport để chuẩn bị và sao chép dữ liệu vào ổ đĩa bạn cung cấp để nhập. Sau đó, một công việc nhập sẽ được tạo cho tài khoản lưu trữ đích, các đĩa đã chuẩn bị sẽ được chuyển đến trung tâm dữ liệu của Microsoft và công việc đó sẽ được cập nhật với các chi tiết theo dõi lô hàng sau khi gói hàng được gửi đi. Sự phụ thuộc chính là việc cập nhật công việc diễn ra sau khi vận chuyển vì bản cập nhật đó thông báo cho Azure về thông tin lô hàng/theo dõi.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-140', 'az-104', 140, 'You have Azure virtual machines running Windows Server 2019 configured as shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783632862831-v2lpdrys.png)  
  
You create a public Azure DNS zone named adatum.com and a private Azure DNS zone named contoso.com.  
  
For contoso.com, you create a virtual network link named link1 as shown in the exhibit. (Click the Exhibit tab.)  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783632865773-ung9va72.jpg)  
  
You discover that VM1 can resolve names in contoso.com but cannot resolve names in adatum.com. VM1 can resolve other hosts on the Internet.  
  
You need to ensure that VM1 can resolve host names in adatum.com.  
  
What should you do?', '[{"key":"A","text":"Update the DNS suffix on VM1 to be adatum.com"},{"key":"B","text":"Configure the name servers for adatum.com at the domain registrar"},{"key":"C","text":"Create an SRV record in the contoso.com zone"},{"key":"D","text":"Modify the Access control (IAM) settings for link1"}]'::jsonb, '["B"]'::jsonb, 'Vùng DNS Azure công khai chỉ trả lời các truy vấn cho miền của nó sau khi miền được ủy quyền cho Azure DNS bằng cách cập nhật công ty đăng ký tên miền với máy chủ định danh do Azure chỉ định. Liên kết vùng riêng tư cho contoso.com chỉ kích hoạt chính xác độ phân giải từ VNET1 cho không gian tên riêng tư đó. Việc thay đổi hậu tố VM DNS, thêm bản ghi SRV ở một vùng khác hoặc sửa đổi IAM trên liên kết mạng ảo sẽ không làm cho tên trong vùng adatum.com công khai có thể phân giải được.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783632862831-v2lpdrys.png', 'published'),
  ('az104-141', 'az-104', 141, 'You have an on-premises network that contains a database server named **dbserver1**.  
  
You have an Azure subscription.  
  
You plan to deploy three Azure virtual machines. Each virtual machine will be deployed to a separate availability zone.  
  
You need to configure an Azure VPN gateway for a site-to-site VPN. The solution must ensure that the virtual machines can connect to **dbserver1**.  
  
Which type of public IP address SKU and assignment should you use for the gateway?', '[{"key":"A","text":"a basic SKU and a static IP address assignment"},{"key":"B","text":"a standard SKU and a static IP address assignment"},{"key":"C","text":"a basic SKU and a dynamic IP address assignment"}]'::jsonb, '["B"]'::jsonb, 'Các cổng Azure VPN được triển khai cho các kịch bản vùng sẵn sàng sử dụng IP công cộng **Tiêu chuẩn** và địa chỉ IP công cộng Azure **SKU tiêu chuẩn** cho các cổng VPN sử dụng phân bổ **tĩnh**. Đây là cấu hình được hỗ trợ cho việc triển khai VPN gateway dự phòng theo vùng hoặc vùng được sử dụng để cung cấp kết nối site-to-site từ Azure virtual machines đến máy chủ tại chỗ như dbserver1.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-142', 'az-104', 142, 'You have five Azure virtual machines running Windows Server 2016, and those virtual machines are configured as web servers.  
  
You also have an Azure load balancer named **LB1** that provides load-balancing services for the virtual machines.  
  
You need to make sure that visitors are served by the same web server for each request.  
  
What should you configure?', '[{"key":"A","text":"Floating IP (direct server return) to Enabled"},{"key":"B","text":"Session persistence to Client IP"},{"key":"C","text":"Protocol to UDP"},{"key":"D","text":"Idle Time-out (minutes) to 20"}]'::jsonb, '["B"]'::jsonb, 'Azure Load Balancer đạt được sự gắn kết giữa máy khách với máy chủ bằng cách sử dụng tính năng duy trì phiên**. Việc đặt **Tính liên tục của phiên** thành **IP máy khách** sử dụng mối quan hệ giữa IP nguồn để các yêu cầu liên tiếp từ cùng một địa chỉ IP máy khách được gửi đến cùng một máy ảo phụ trợ. Các cài đặt khác không cung cấp hành vi này: IP nổi dành cho các trường hợp trả về máy chủ trực tiếp, Loại truyền tải kiểm soát giao thức và Thời gian chờ không hoạt động chỉ thay đổi thời gian lưu giữ các luồng không hoạt động.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-143', 'az-104', 143, 'You have an Azure subscription named **Sub1** that contains the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783646420243-q303h0xo.png)  
  
You create a user named **Admin1**.  
  
To what can you add **Admin1** as a co-administrator?', '[{"key":"A","text":"RG1"},{"key":"B","text":"MG1"},{"key":"C","text":"Sub1"},{"key":"D","text":"VM1"}]'::jsonb, '["C"]'::jsonb, 'Trong Azure, **Người đồng quản trị** là vai trò quản trị viên cổ điển tồn tại ở cấp độ **đăng ký**. Nó cung cấp các quyền tương đương với Chủ sở hữu ở phạm vi đăng ký nhưng không được chỉ định cho các nhóm quản lý, nhóm tài nguyên hoặc tài nguyên riêng lẻ. Do đó, mục tiêu hợp lệ duy nhất là **Sub1**. Microsoft Learn ghi lại quản trị viên đăng ký cổ điển dưới dạng vai trò trong phạm vi đăng ký.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783646420243-q303h0xo.png', 'published'),
  ('az104-144', 'az-104', 144, 'You have a Microsoft Entra tenant.  
  
You plan to bulk import users.  
  
You need to ensure that imported user objects are automatically added as members of a specific group according to each user''s department. The solution must minimize administrative effort.  
  
Which two actions should you take? Each correct answer presents part of the solution.  
  
> **NOTE:** Each correct selection is worth one point.', '[{"key":"A","text":"Create groups that use the Assigned membership type."},{"key":"B","text":"Create an Azure Resource Manager (ARM) template."},{"key":"C","text":"Create groups that use the Dynamic User membership type."},{"key":"D","text":"Write a PowerShell script that parses an import file."},{"key":"E","text":"Create an XML file that contains user information and the appropriate attributes."},{"key":"F","text":"Create a CSV file that contains user information and the appropriate attributes."}]'::jsonb, '["C","F"]'::jsonb, 'Nhóm thành viên Người dùng động tự động đánh giá quy tắc thành viên bằng cách sử dụng thuộc tính người dùng, bao gồm các quy tắc như `user.department -eq "Sales"`. Tạo người dùng hàng loạt sử dụng mẫu CSV bao gồm thuộc tính `Department [department]`. Việc cung cấp từng bộ phận của người dùng đã nhập trong CSV đó sẽ cho phép quy tắc nhóm động tự động thêm những người dùng thích hợp.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-145', 'az-104', 145, 'You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers.  
  
You have an Azure load balancer named LB1 that provides load-balancing services for the virtual machines.  
  
You need to ensure that visitors are served by the same web server for each request.  
  
What should you configure?', '[{"key":"A","text":"Floating IP (direct server return) to Disabled"},{"key":"B","text":"Session persistence to None"},{"key":"C","text":"Floating IP (direct server return) to Enabled"},{"key":"D","text":"Session persistence to Client IP"}]'::jsonb, '["D"]'::jsonb, 'Azure Load Balancer mang lại sự ổn định bằng cách sử dụng ** tính bền bỉ của phiên** trên quy tắc cân bằng tải. Việc đặt tính duy trì phiên thành **IP máy khách** sẽ kích hoạt mối quan hệ giữa IP nguồn, khiến các yêu cầu liên tiếp từ cùng một địa chỉ IP máy khách được gửi đến cùng một máy ảo phụ trợ. IP nổi (trả về máy chủ trực tiếp) không kiểm soát mối quan hệ phiên.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-146', 'az-104', 146, 'You have the Azure virtual machines shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783637473008-10yu77yy.png)  
  
VNET1 is linked to a private DNS zone named contoso.com that contains the records shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783637476009-tyo44g0d.png)  
  
You need to ping VM2 from VM1.  
  
Which DNS names can you use to ping VM2?', '[{"key":"A","text":"comp2.contoso.com and comp4.contoso.com only"},{"key":"B","text":"comp1.contoso.com, comp2.contoso.com, comp3.contoso.com, and comp4.contoso.com"},{"key":"C","text":"comp2.contoso.com only"},{"key":"D","text":"comp1.contoso.com and comp2.contoso.com only"},{"key":"E","text":"comp1.contoso.com, comp2.contoso.com, and comp4.contoso.com only"}]'::jsonb, '["C"]'::jsonb, 'Chỉ có thể sử dụng bản ghi địa chỉ hỗ trợ độ phân giải tên chuyển tiếp tới 10.0.0.5 để tiếp cận VM2 theo tên. Trong Azure Private DNS, bản ghi **A** ánh xạ tên tới địa chỉ IPv4, do đó **comp2.contoso.com** phân giải thành VM2. Bản ghi **TXT** không cung cấp địa chỉ IP, **CNAME** chỉ có thể sử dụng được nếu cuối cùng nó trỏ đến một bản ghi địa chỉ có thể phân giải và bản ghi **PTR** dùng để tra cứu ngược thay vì phân giải tên máy chủ thành địa chỉ IP. Bởi vì **comp3** trỏ đến **comp1**, là bản ghi TXT và **comp4** chỉ là PTR, nên cả hai đều không thể được sử dụng để ping VM2.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783637473008-10yu77yy.png', 'published'),
  ('az104-147', 'az-104', 147, 'You configure the custom role shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783637655592-mtlh9hu8.png)  
  
Use the drop-down menus to choose the answer that completes each statement based on the information in the graphic.', '[]'::jsonb, '[]'::jsonb, 'Các vai trò đăng nhập Azure VM như Đăng nhập người dùng máy ảo và Đăng nhập quản trị viên máy ảo dựa vào **DataActions**, do đó, vai trò tùy chỉnh nhằm cấp khả năng đăng nhập VM phải được điều chỉnh trong phần `dataActions` thay vì `actions` thông thường. Phạm vi có thể chỉ định vai trò tùy chỉnh được kiểm soát bởi `assignableScopes`; giới hạn thuộc tính đó trong phạm vi nhóm tài nguyên RG1 đảm bảo vai trò chỉ có thể được chỉ định ở đó.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783637655592-mtlh9hu8.png', 'published'),
  ('az104-148', 'az-104', 148, 'You have an Azure subscription.  
  
You plan to create a role definition that must meet these requirements:  
  
- Users must be able to view the configuration data of a storage account.  
- Users must be able to perform all actions on a virtual network.  
- The solution must follow the principle of least privilege.  
  
What should you include in the role definition for each requirement?', '[]'::jsonb, '[]'::jsonb, 'Trong vai trò tùy chỉnh Azure RBAC, `Microsoft.Network/virtualNetworks/*` cấp tất cả hành động trên mặt phẳng quản lý cho mạng ảo, đây là tùy chọn duy nhất đáp ứng việc thực hiện tất cả hành động trên mạng ảo. Đối với tài khoản lưu trữ, `Microsoft.Storage/storageAccounts/read` là quyền đọc mặt phẳng quản lý cho phép xem các thuộc tính và cấu hình của tài khoản lưu trữ. Việc sử dụng `*` trên tài khoản lưu trữ sẽ vượt quá đặc quyền tối thiểu và đọc blob là quyền trên mặt phẳng dữ liệu đối với nội dung blob thay vì cấu hình tài khoản lưu trữ.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-149', 'az-104', 149, 'You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers.  
  
You have an Azure load balancer named LB1 that provides load-balancing services for the virtual machines.  
  
You need to ensure that visitors are served by the same web server for each request.  
  
What should you configure?', '[{"key":"A","text":"Floating IP (direct server return) to Disabled"},{"key":"B","text":"Idle Time-out (minutes) to 20"},{"key":"C","text":"a health probe"},{"key":"D","text":"Session persistence to Client IP"}]'::jsonb, '["D"]'::jsonb, 'Azure Load Balancer phải được đặt cấu hình cho mối quan hệ phiên để giữ máy khách trên cùng một phiên bản phụ trợ. Việc đặt **Tính liên tục của phiên** thành **IP máy khách** sử dụng mối quan hệ giữa IP nguồn để các yêu cầu liên tiếp từ cùng một địa chỉ IP máy khách được định tuyến đến cùng một máy ảo. Công cụ thăm dò tình trạng chỉ kiểm tra tính khả dụng của chương trình phụ trợ, Thời gian chờ không hoạt động kiểm soát thời gian lưu giữ các luồng không hoạt động và IP nổi không liên quan đến mối quan hệ của khách hàng. Hành vi này được ghi lại trong cấu hình và chế độ phân phối Microsoft Learn for Azure Load Balancer.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-150', 'az-104', 150, 'Solution: You change the Azure Active Directory (Azure AD) authentication policies.  
  
Does this satisfy the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["B"]'::jsonb, 'VPN điểm tới trang được định cấu hình để sử dụng chứng chỉ tự ký dựa vào xác thực chứng chỉ, do đó mỗi máy khách phải cài đặt chứng chỉ ứng dụng khách hợp lệ. Microsoft Learn tuyên bố rằng khi bạn muốn cài đặt chứng chỉ ứng dụng khách trên một máy khách khác, bạn phải xuất chứng chỉ đó dưới dạng.pfx và cài đặt nó ở đó. Sửa đổi chính sách xác thực Azure AD không cho phép Computer2 xác thực kết nối P2S dựa trên chứng chỉ.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-151', 'az-104', 151, 'Solution: You join Computer2 to Azure Active Directory (Azure AD).  
  
Does this meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["B"]'::jsonb, 'VPN point-to-site Azure được xác thực bằng chứng chỉ yêu cầu thiết bị kết nối phải có chứng chỉ ứng dụng khách hợp lệ, được liên kết với chứng chỉ gốc được tải lên Azure VPN gateway. Việc tham gia Azure AD không đáp ứng xác thực điểm-tới-trang dựa trên chứng chỉ và không cung cấp chứng chỉ ứng dụng khách tự ký cần thiết cho Computer2. Để kết nối thành công từ Computer2, chứng chỉ ứng dụng khách và khóa riêng phù hợp phải được cài đặt trên máy tính đó.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-152', 'az-104', 152, 'Solution: You export the client certificate from Computer1 and install the certificate on Computer2.  
  
Does this satisfy the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["A"]'::jsonb, 'Đối với các VPN điểm-tới-trang Azure sử dụng xác thực chứng chỉ tự ký, mọi máy khách phải có chứng chỉ ứng dụng khách hợp lệ được cài đặt cục bộ. Microsoft Learn tuyên bố rằng nếu bạn muốn sử dụng chứng chỉ trên một máy khách khác, bạn có thể xuất chứng chỉ ứng dụng khách từ máy tính ban đầu dưới dạng tệp.pfx, bao gồm chuỗi chứng chỉ và cài đặt nó trên máy tính kia. Điều đó cho phép Computer2 xác thực với P2S VPN.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-153', 'az-104', 153, 'Solution: On Computer2, you configure the **IPSec Policy Agent** service **Startup type** to **Automatic**.  
  
Does this satisfy the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["B"]'::jsonb, 'Đối với VPN điểm tới trang Azure sử dụng xác thực chứng chỉ, máy khách kết nối phải cài đặt chứng chỉ máy khách hợp lệ, bao gồm quyền truy cập vào khóa riêng của nó để có thể xác thực với cổng mạng ảo. Việc đặt dịch vụ Tác nhân chính sách IPSec để tự động khởi động không cung cấp xác thực dựa trên chứng chỉ bắt buộc và không phải là bước bắt buộc để cho phép Computer2 kết nối. Hành động cần thiết là cung cấp chứng chỉ ứng dụng khách phù hợp trên Máy tính2.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-154', 'az-104', 154, 'You have an Azure subscription that includes eight virtual machines and the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783640482450-7xjsln43.png)  
  
You need to configure access for VNET1. The solution must meet the following requirements:  
  
- The virtual machines connected to VNET1 must be able to communicate with the virtual machines connected to VNET2 by using the Microsoft backbone.  
- The virtual machines connected to VNET1 must be able to access storage1, storage2, and Azure AD by using the Microsoft backbone.  
  
What is the minimum number of service endpoints that you should add to VNET1?', '[{"key":"A","text":"1"},{"key":"B","text":"2"},{"key":"C","text":"3"},{"key":"D","text":"5"}]'::jsonb, '["A"]'::jsonb, 'Virtual network peering cung cấp kết nối riêng giữa VNET1 và VNET2 qua đường trục của Microsoft, vì vậy no service endpoint là cần thiết cho giao tiếp VNet-to-VNet. Điểm cuối dịch vụ được định cấu hình theo loại dịch vụ Azure trên mạng con chứ không phải theo phiên bản tài nguyên, do đó, một `Microsoft.Storage` service endpoint trên VNET1 bao gồm quyền truy cập vào cả storage1 và storage2 qua đường trục của Microsoft. Do đó chỉ cần một service endpoint.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783640482450-7xjsln43.png', 'published'),
  ('az104-155', 'az-104', 155, 'You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers.  
  
You have an Azure load balancer named LB1 that provides load-balancing services for the virtual machines.  
  
You need to ensure that visitors are served by the same web server for each request.  
  
What should you configure?', '[{"key":"A","text":"Floating IP (direct server return) to Enabled"},{"key":"B","text":"Idle Time-out (minutes) to 20"},{"key":"C","text":"a health probe"},{"key":"D","text":"Session persistence to Client IP"}]'::jsonb, '["D"]'::jsonb, 'Azure Load Balancer sử dụng tính bền vững của phiên để giữ các yêu cầu từ cùng một máy khách được ánh xạ tới cùng một phiên bản phụ trợ. Việc đặt **Tính liên tục của phiên** thành **IP máy khách** sẽ kích hoạt mối quan hệ giữa IP nguồn, do đó, các yêu cầu liên tiếp từ cùng một địa chỉ IP máy khách sẽ được xử lý bởi cùng một máy ảo. Công cụ thăm dò tình trạng chỉ kiểm tra xem phần phụ trợ có hoạt động tốt hay không, thời gian chờ không hoạt động sẽ kiểm soát thời gian lưu giữ các luồng không hoạt động và IP nổi dành cho hành vi trả về trực tiếp của máy chủ thay vì mối quan hệ của máy khách.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-156', 'az-104', 156, 'You have an Azure subscription that contains the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783638226542-bommpude.png)  
  
NSG1 is configured as shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783638230488-yfjyggqj.jpg)  
  
For each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"VM1 can access storage1.","correctAnswer":"Yes"},{"id":"2","text":"VM2 can access VM1 by using the HTTPS protocol.","correctAnswer":"Yes"},{"id":"3","text":"The security rules for NSG1 apply to any virtual machine on VNET1.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:Yes","2:Yes","3:No"]'::jsonb, 'NSG liên kết với một mạng con sẽ áp dụng cho các tài nguyên trong mạng con đó chứ không phải tự động áp dụng cho mọi tài nguyên trong mạng ảo. Vì NSG1 được liên kết với một mạng con và giao diện mạng no nên các quy tắc của nó chỉ nằm trong phạm vi mạng con đó. Quy tắc gửi đi với mức độ ưu tiên 145 cho phép TCP 443 từ VirtualNetwork đến thẻ dịch vụ Lưu trữ, do đó VM1 có thể tiếp cận tài khoản lưu trữ. Quy tắc từ chối gửi đến cho HTTPS nhắm mục tiêu Internet nguồn và đích 10.3.0.15, do đó, nó chỉ chặn HTTPS có nguồn gốc từ Internet đối với VM1; lưu lượng truy cập từ VM2 là lưu lượng truy cập nội bộ VNet và được cho phép theo quy tắc AllowVnetInBound mặc định.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783638226542-bommpude.png', 'published'),
  ('az104-157', 'az-104', 157, 'You have an Azure subscription that contains a resource group named **RG1**.  
  
You plan to create a storage account named **storage1**.  
  
You have a Bicep file named **File1**.  
  
You need to modify **File1** so that it can be used to automate the deployment of **storage1** to **RG1**.  
  
Which property should you change?', '[{"key":"A","text":"kind"},{"key":"B","text":"scope"},{"key":"C","text":"sku"},{"key":"D","text":"location"}]'::jsonb, '["B"]'::jsonb, 'Trong Bicept, thuộc tính `scope` xác định mục tiêu triển khai (nhóm tài nguyên, đăng ký hoặc nhóm quản lý). Để triển khai storage1 cho nhóm tài nguyên RG1, thuộc tính phạm vi của tệp Bicept phải tham chiếu RG1. Các thuộc tính khác—`kind`, `sku` và `location`—là các tùy chọn cấu hình tài nguyên tài khoản lưu trữ, không phải cài đặt nhắm mục tiêu triển khai.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-158', 'az-104', 158, 'You administer a solution in Azure that is currently experiencing performance issues.  
  
You need to identify the cause of the performance issues related to metrics on the Azure infrastructure.  
  
Which of the following tools should you use?', '[{"key":"A","text":"Azure Traffic Analytics"},{"key":"B","text":"Azure Monitor"},{"key":"C","text":"Azure Activity Log"},{"key":"D","text":"Azure Advisor"}]'::jsonb, '["B"]'::jsonb, 'Azure Monitor là công cụ phù hợp vì nó thu thập và phân tích các số liệu cũng như nhật ký Azure cho tài nguyên cơ sở hạ tầng, cho phép bạn điều tra các vấn đề về hiệu suất bằng cách xem xét các số liệu nền tảng, cảnh báo và dữ liệu chẩn đoán. Nhật ký hoạt động Azure hiển thị các sự kiện trên mặt phẳng điều khiển, Azure Advisor cung cấp các đề xuất tối ưu hóa và Azure Traffic Analytics được giới hạn ở phân tích lưu lượng truy cập mạng thay vì các số liệu hiệu suất cơ sở hạ tầng Azure rộng.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-159', 'az-104', 159, 'HOTSPOT  

-  
  
You have an Azure subscription that contains a storage account named `storage1`. The `storage1` account contains a container named `container1`.  
  
You create a blob lifecycle rule named `rule1`.  
  
You need to configure `rule1` to automatically move blobs that were **not updated for 45 days** from `container1` to the Cool access tier.  
  
How should you complete the rule?', '[]'::jsonb, '[]'::jsonb, 'Quản lý vòng đời Azure Blob Storage sử dụng `daysAfterModificationGreaterThan` khi một hành động sẽ xảy ra dựa trên khoảng thời gian đã trôi qua kể từ khi một blob được sửa đổi lần cuối. Do đó, việc di chuyển dữ liệu sang Cool tier sau 45 ngày cập nhật no dựa trên thời gian sửa đổi, không phải thời gian tạo hoặc thời gian truy cập cuối cùng. Đối với bộ lọc `blobTypes`, các hành động phân cấp thành Làm mát được sử dụng với các đốm màu khối; các đốm màu trang không hỗ trợ Cool tier, vì vậy `Blockblob` là lựa chọn chính xác ở đây.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-160', 'az-104', 160, 'You have an Azure subscription that includes an Azure Storage account named **storageaccount1**.  
  
You export **storageaccount1** as an Azure Resource Manager template. The template contains the following sections.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783637541760-v3y69rz5.jpg)  
  
For each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"A server that has a public IP address of 131.107.103.10 can access storageaccount1","correctAnswer":"Yes"},{"id":"2","text":"Individual blobs in storageaccount1 can be set to use the archive tier","correctAnswer":"Yes"},{"id":"3","text":"Global administrations in Azure Active Directory (Azure AD) can access a file share hosted in storageaccount1 by using their Azure AD credentials","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:Yes","2:Yes","3:No"]'::jsonb, 'Vì cấu hình tường lửa của tài khoản lưu trữ có `defaultAction` được đặt thành `Allow` và no `ipRules` hoặc `virtualNetworkRules` nên tài khoản lưu trữ chấp nhận lưu lượng truy cập từ mạng công cộng. Tài khoản `StorageV2` hỗ trợ các tầng blob, bao gồm Lưu trữ, ở cấp độ blob riêng lẻ. Tuy nhiên, quyền truy cập Azure Files bằng thông tin xác thực Azure AD/Microsoft Entra yêu cầu xác thực dựa trên danh tính để đặt cấu hình cho Azure Files và chỉ định các quyền chia sẻ/dữ liệu thích hợp; chỉ là Quản trị viên toàn cầu không cung cấp quyền truy cập chia sẻ tệp.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783637541760-v3y69rz5.jpg', 'published'),
  ('az104-161', 'az-104', 161, 'You have an Azure subscription that contains a virtual machine named VM1.  
  
On VM1, you plan to add a 1-TB data disk that must meet these requirements:  
  
- Provide data resiliency if a datacenter outage occurs.  
- Deliver the lowest latency and the highest performance.  
- Ensure that no data is lost if a host fails.  
  
You need to recommend the storage type and host caching setting for the new data disk.', '[]'::jsonb, '[]'::jsonb, 'Cần có Zone-redundant storage (ZRS) để tồn tại khi ngừng hoạt động ở trung tâm dữ liệu hoặc vùng sẵn sàng vì nó sao chép đồng bộ ổ đĩa được quản lý trên nhiều availability zones trong khu vực; LRS chỉ bảo vệ trong một trung tâm dữ liệu. Trong số các SKU ổ đĩa được liệt kê, SSD cao cấp mang lại hiệu suất cao hơn và độ trễ thấp hơn so với SSD tiêu chuẩn. Đối với bộ nhớ đệm máy chủ trên đĩa dữ liệu, Chế độ chỉ đọc cải thiện độ trễ và thông lượng đọc đồng thời tránh rủi ro về độ bền ghi của bộ nhớ đệm Đọc/Ghi. Bộ nhớ đệm Đọc/Ghi có thể khiến việc ghi vào bộ nhớ đệm bị mất khi xảy ra sự cố trừ khi ứng dụng được thiết kế để quản lý tính bền vững, do đó, nó không đáp ứng tốt nhất yêu cầu mất dữ liệu no.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-162', 'az-104', 162, 'Solution: You assign the Network Contributor role at the subscription level to Admin1.  
  
Does this satisfy the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["B"]'::jsonb, 'Các quyền RBAC của Network Watcher được ghi lại trong tài liệu của Microsoft nêu rõ rằng vai trò Người đóng góp mạng tích hợp không bao gồm các hành động Microsoft.OperationalInsights/workspaces/*, Microsoft.Insights/dataCollectionRules/* hoặc Microsoft.Insights/dataCollectionEndpoints/* mà Phân tích lưu lượng truy cập yêu cầu. Vì Phân tích lưu lượng truy cập ghi và đọc từ không gian làm việc Log Analytics ngoài tài nguyên của Trình theo dõi mạng, nên chỉ chỉ định Người đóng góp mạng ở phạm vi đăng ký là không đủ, do đó giải pháp không đáp ứng được mục tiêu.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-163', 'az-104', 163, 'Solution: You assign the **Owner** role at the subscription level to Admin1.  
  
Does this satisfy the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["A"]'::jsonb, 'Việc chỉ định vai trò **Chủ sở hữu** ở phạm vi **đăng ký** sẽ mang lại cho Admin1 toàn quyền quản lý các tài nguyên trong đăng ký đó. Đối với Phân tích lưu lượng truy cập của Azure Network Watcher, Microsoft tuyên bố rằng việc bật tính năng này yêu cầu các quyền có sẵn thông qua các vai trò tích hợp như **Chủ sở hữu**, **Cộng tác viên** hoặc **Cộng tác viên mạng** ở phạm vi thích hợp. Do đó, việc chỉ định **Chủ sở hữu** ở cấp đăng ký là đủ để bật Phân tích lưu lượng truy cập.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-164', 'az-104', 164, 'Solution: You assign the **Reader** role at the subscription scope to Admin1.  
  
Does this satisfy the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["B"]'::jsonb, 'Việc bật Phân tích lưu lượng truy cập là một thao tác ghi, do đó việc chỉ định Trình đọc ở cấp độ đăng ký chỉ đọc là không đủ. Để bật hoặc tắt Phân tích lưu lượng truy cập, người dùng cần có các quyền rộng hơn như Chủ sở hữu, Người đóng góp hoặc Người đóng góp mạng hoặc vai trò tùy chỉnh bao gồm các hành động bắt buộc liên quan đến Người theo dõi mạng.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-165', 'az-104', 165, 'Solution: You assign the **Traffic Manager Contributor** role at the subscription level to Admin1.  
  
Does this meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["B"]'::jsonb, 'Việc bật Phân tích lưu lượng truy cập yêu cầu quyền Azure RBAC cho các hoạt động Phân tích lưu lượng truy cập/Người theo dõi mạng Azure, thường thông qua vai trò Chủ sở hữu, Người đóng góp hoặc Người đóng góp mạng hoặc vai trò tùy chỉnh tương đương với các hành động được yêu cầu. Vai trò Người đóng góp Trình quản lý lưu lượng truy cập chỉ cấp quyền để quản lý cấu hình Azure Traffic Manager và không cung cấp các quyền của Người theo dõi mạng cần thiết để bật Phân tích lưu lượng truy cập.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-166', 'az-104', 166, 'You have an Azure subscription.  
  
You create a routing table named RT1.  
  
You need to add a route to RT1 that specifies a next-hop IP address.  
  
Which next-hop type should you choose?', '[{"key":"A","text":"Internet"},{"key":"B","text":"Virtual network gateway"},{"key":"C","text":"Virtual network"},{"key":"D","text":"Virtual appliance"}]'::jsonb, '["D"]'::jsonb, 'Các tuyến trong bảng định tuyến Azure chỉ cho phép địa chỉ IP bước nhảy tiếp theo khi loại bước nhảy tiếp theo là **Thiết bị ảo**. Địa chỉ này xác định thiết bị ảo mà các gói phù hợp sẽ được chuyển tiếp.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-167', 'az-104', 167, 'You have an Azure subscription that contains offices in the East US and West US Azure regions.  
  
You plan to create the storage account shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783644159577-2ucd6pkn.png)  
  
Use the drop-down menus to choose the answer that completes each statement based on the information shown in the exhibit.', '[]'::jsonb, '[]'::jsonb, 'Đối với Bộ lưu trữ Azure, tùy chọn định tuyến sẽ xác định xem lưu lượng truy cập điểm cuối công cộng sử dụng mạng toàn cầu của Microsoft hay định tuyến Internet. Định tuyến Internet là tùy chọn có chi phí thấp hơn nên cài đặt cần thay đổi là **Bậc định tuyến mặc định**. Sau khi triển khai, tài khoản lưu trữ có thể được chuyển đổi giữa **khóa do Microsoft quản lý** và **khóa do khách hàng quản lý**, vì vậy **Loại mã hóa** có thể thay đổi được. Ngược lại, **mã hóa cơ sở hạ tầng** phải được chọn tại thời điểm tạo và không thể thay đổi sau này.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783644159577-2ucd6pkn.png', 'published'),
  ('az104-168', 'az-104', 168, 'You have an Azure web app named **webapp1**.  
  
Users report that they frequently encounter **HTTP 500** errors when connecting to **webapp1**.  
  
You need to give the developers of **webapp1** real-time access to the connection errors. The solution must include **all connection error details**.  
  
What should you do first?', '[{"key":"A","text":"From webapp1, enable Web server logging"},{"key":"B","text":"From Azure Monitor, create a workbook"},{"key":"C","text":"From Azure Monitor, create a Service Health alert"},{"key":"D","text":"From webapp1, turn on Application Logging"}]'::jsonb, '["A"]'::jsonb, 'Ghi nhật ký máy chủ web ghi lại dữ liệu yêu cầu HTTP thô ở định dạng nhật ký mở rộng W3C, bao gồm IP máy khách, phương thức HTTP, URI tài nguyên và mã phản hồi, đồng thời có thể được xem trực tiếp thông qua ngăn Luồng nhật ký, giúp nhà phát triển có khả năng hiển thị theo thời gian thực về mọi chi tiết cấp độ kết nối đằng sau các phản hồi HTTP 500. Thay vào đó, tính năng Ghi nhật ký ứng dụng chỉ ghi lại những gì mã ứng dụng chọn rõ ràng để ghi nhật ký, do đó, tính năng này không thể đảm bảo rằng tất cả chi tiết lỗi kết nối đều được ghi lại. Sổ làm việc hoặc cảnh báo Tình trạng dịch vụ hoàn toàn không cung cấp dữ liệu chẩn đoán cấp yêu cầu thô này.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-169', 'az-104', 169, 'You have the Azure virtual networks shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783646931691-epbd4t7k.png)  
  
Which virtual networks can be peered with VNet1?', '[{"key":"A","text":"VNet2, VNet3, and VNet4"},{"key":"B","text":"VNet2 only"},{"key":"C","text":"VNet3 and VNet4 only"},{"key":"D","text":"VNet2 and VNet3 only"}]'::jsonb, '["C"]'::jsonb, 'Azure virtual network peering chỉ được phép khi hai VNet có **không gian địa chỉ IP không chồng chéo**. Không thể ngang hàng VNet2 với VNet1 vì `10.11.0.0/17` trùng lặp với `10.11.0.0/16` của VNet1. VNet3 (`10.10.0.0/22`) và VNet4 (`192.168.16.0/22`) không trùng lặp với VNet1, vì vậy cả hai đều đủ điều kiện. Việc họ ở các vùng Azure khác nhau không chặn việc ngang hàng vì Azure hỗ trợ các VNet ngang hàng trong cùng một khu vực hoặc các khu vực khác nhau.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783646931691-epbd4t7k.png', 'published'),
  ('az104-170', 'az-104', 170, 'You have an Azure subscription named Subscription1.  
  
You deploy a Linux virtual machine named VM1 to Subscription1.  
  
You need to monitor the metrics and the logs of VM1.  
  
What should you use?', '[{"key":"A","text":"Azure HDInsight"},{"key":"B","text":"Linux Diagnostic Extension (LAD) 3.0"},{"key":"C","text":"the AzurePerformanceDiagnostics extension"},{"key":"D","text":"Azure Analysis Services"}]'::jsonb, '["B"]'::jsonb, 'Linux Diagnostic Extension (LAD) 3.0 là thành phần Azure được thiết kế để thu thập chẩn đoán từ các máy ảo Linux, bao gồm số liệu hiệu suất và dữ liệu nhật ký như nhật ký hệ thống, vì vậy đây là công cụ thích hợp để giám sát cả số liệu và nhật ký trên VM1.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-171', 'az-104', 171, 'You have an Azure subscription named Subscription1.  
  
You have 5 TB of data that must be transferred to Subscription1.  
  
You plan to use an Azure Import/Export job.  
  
What can you use as the destination for the imported data?', '[{"key":"A","text":"an Azure Cosmos DB database"},{"key":"B","text":"Azure File Storage"},{"key":"C","text":"Azure SQL Database"},{"key":"D","text":"a virtual machine"}]'::jsonb, '["B"]'::jsonb, 'Nhập/Xuất Azure hỗ trợ nhập dữ liệu bằng cách vận chuyển ổ đĩa đến trung tâm dữ liệu Azure và các mục tiêu nhập được hỗ trợ là Azure Blob storage và Azure Files trong tài khoản lưu trữ. Nó không nhập trực tiếp vào Azure Cosmos DB, Azure SQL Database hoặc máy ảo. Do đó, trong số các tùy chọn được liệt kê, Azure File Storage là đích đến hợp lệ.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-172', 'az-104', 172, 'Solution: You add an inbound security rule to **NSG-Subnet1** that allows connections from the **Any** source to the `*` destination on port range **3389** by using the **TCP** protocol. You remove **NSG-VM1** from the network interface of **VM1**.  
  
Does this satisfy the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["A"]'::jsonb, 'Quyền truy cập Remote Desktop vào máy ảo Azure từ internet yêu cầu phải cho phép **TCP 3389** gửi đến. Khi NSG được liên kết với cả mạng con và NIC, lưu lượng truy cập vào phải được cả hai cho phép; nếu NIC NSG bị loại bỏ thì chỉ NSG mạng con được đánh giá cho đường dẫn đó. Việc thêm quy tắc cho phép cấp mạng con cho TCP 3389 và xóa NSG cấp NIC sẽ loại bỏ bộ quy tắc NIC hiện có chỉ cho phép UDP 3389, do đó VM có thể nhận lưu lượng RDP từ internet.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-173', 'az-104', 173, 'Solution: You add an inbound security rule to **NSG-Subnet1** that allows connections from the **Internet** source to the **VirtualNetwork** destination on port range **3389** and uses the **UDP** protocol.  
  
Does this satisfy the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["B"]'::jsonb, 'Giao thức máy tính từ xa (RDP) sử dụng cổng TCP 3389 theo mặc định, không phải UDP. Mặc dù quy tắc được đề xuất nhắm mục tiêu chính xác vào cổng 3389 và đường dẫn Internet-to-VirtualNetwork nhưng nó chỉ định giao thức UDP thay vì TCP. Vì UDP 3389 không phải là giao thức RDP tiêu chuẩn nên kết nối sẽ không thành công. Ngoài ra, các quy tắc NSG được đánh giá theo 5 bộ dữ liệu (nguồn, cổng nguồn, đích, cổng đích, giao thức), do đó UDP và TCP là các quy tắc hoàn toàn khác biệt.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-174', 'az-104', 174, 'Solution: You add an inbound security rule to **NSG-Subnet1** and **NSG-VM1** that allows connections from the **Internet** source to the **VirtualNetwork** destination for port range **3389** and uses the **TCP** protocol.  
  
Does this meet the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, '["A"]'::jsonb, 'Việc thêm các quy tắc bảo mật gửi đến cho cả NSG-Subnet1 và NSG-VM1 cho phép nguồn Internet đến đích VirtualNetwork trên cổng TCP 3389 đáp ứng yêu cầu kết nối RDP. Trước tiên, Azure đánh giá lưu lượng truy cập vào dựa trên mạng con NSG, sau đó là giao diện mạng NSG—cả hai đều phải cho phép lưu lượng truy cập. Vì quy tắc tùy chỉnh hiện tại cho phép UDP 3389 và quy tắc mới bổ sung TCP 3389 nên giao thức RDP dựa trên TCP sẽ được phép thông qua cả hai lớp NSG.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-175', 'az-104', 175, 'You have an Azure subscription named Sub1 that contains two users named User1 and User2.  
  
You need to assign role-based access control (RBAC) roles to User1 and User2. The users must be able to perform the following tasks in Sub1:  
  
- User1 must view the data in any storage account.  
- User2 must assign users the Contributor role for storage accounts.  
  
The solution must use the principle of least privilege.  
  
Which RBAC role should you assign to each user?  
  
Each role may be used once, more than once, or not at all.', '{"statements":[{"id":"user1","text":"User1:","correctAnswer":"C"},{"id":"user2","text":"User2:","correctAnswer":"A"}],"choices":[{"key":"A","text":"Owner"},{"key":"B","text":"Contributor"},{"key":"C","text":"Reader and Data Access"},{"key":"D","text":"Storage Account Contributor"}]}'::jsonb, '["user1=C","user2=A"]'::jsonb, 'Người đọc và quyền truy cập dữ liệu là vai trò được liệt kê có ít đặc quyền nhất, cho phép xem tài nguyên Azure và truy cập dữ liệu trong tài khoản lưu trữ. Người đóng góp và tài khoản lưu trữ Người đóng góp quản lý tài nguyên lưu trữ nhưng không cấp khả năng gán vai trò cho Azure RBAC. Chủ sở hữu là tùy chọn có ít đặc quyền nhất được hiển thị có thể chỉ định các vai trò RBAC, bao gồm cả việc chỉ định vai trò Người đóng góp trên các tài khoản lưu trữ.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-176', 'az-104', 176, 'You have an Azure subscription.  
  
You plan to migrate **50 virtual machines** from **VMware vSphere** to the subscription.  
  
You create a **Recovery Services vault**.  
  
What should you do next?', '[{"key":"A","text":"Configure an extended network."},{"key":"B","text":"Create a recovery plan."},{"key":"C","text":"Deploy an Open Virtualization Application (OVA) template to vSphere."},{"key":"D","text":"Configure a virtual network."}]'::jsonb, '["C"]'::jsonb, 'Đối với các máy VMware vSphere sẽ được chuyển sang Azure bằng cách sử dụng Azure Site Recovery, bước bắt buộc tiếp theo sau khi tạo Recovery Services vault là triển khai máy chủ cấu hình Site Recovery hoặc thiết bị sao chép trong môi trường VMware từ mẫu OVA/OVF được cung cấp. Công cụ đó đăng ký với vault, khám phá môi trường vSphere và cho phép thiết lập sao chép. Các kế hoạch khôi phục được tạo sau khi cấu hình bảo vệ và mạng mở rộng không nằm trong quy trình làm việc ban đầu được yêu cầu. Microsoft Learn ghi lại quá trình thiết lập VMware này dưới dạng tải xuống và triển khai mẫu OVA cho máy chủ/thiết bị cấu hình từ quy trình làm việc của vault.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-177', 'az-104', 177, 'You have an Azure subscription named Subscription1 that contains an Azure virtual machine named VM1. VM1 is in a resource group named RG1.  
  
VM1 runs services that will be used to deploy resources to RG1.  
  
You need to ensure that a service running on VM1 can manage the resources in RG1 by using the identity of VM1.  
  
What should you do first?', '[{"key":"A","text":"From the Azure portal, modify the Managed Identity settings of VM1"},{"key":"B","text":"From the Azure portal, modify the Access control (IAM) settings of RG1"},{"key":"C","text":"From the Azure portal, modify the Access control (IAM) settings of VM1"},{"key":"D","text":"From the Azure portal, modify the Policies settings of RG1"}]'::jsonb, '["A"]'::jsonb, 'Máy ảo phải được bật user-assigned managed identity do hệ thống chỉ định hoặc kích hoạt trước khi danh tính đó có thể được cấp quyền truy cập Azure RBAC vào một nhóm tài nguyên. Microsoft Learn tuyên bố rằng sau khi bạn kích hoạt system-assigned managed identity trên máy ảo, bạn có thể cấp cho nó một vai trò trên phạm vi mục tiêu, chẳng hạn như nhóm tài nguyên. Vì yêu cầu là sử dụng danh tính của chính VM1 nên bước đầu tiên là bật hoặc sửa đổi cài đặt managed identity trên VM1; việc gán IAM trên RG1 sẽ diễn ra sau đó.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-178', 'az-104', 178, 'You intend to create an Azure virtual machine named VM1 that will be configured as shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783630216241-48n7xksm.png)  
  
The planned disk configurations for VM1 are shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783630219048-i5txoxxi.jpg)  
  
You need to make sure that VM1 can be created in an Availability Zone.  
  
Which two settings should you change? Each correct answer presents part of the solution.  
  
**NOTE:** Each correct selection is worth one point.', '[{"key":"A","text":"Use managed disks"},{"key":"B","text":"OS disk type"},{"key":"C","text":"Availability options"},{"key":"D","text":"Size"},{"key":"E","text":"Image"}]'::jsonb, '["A","C"]'::jsonb, 'Azure Availability Zones dành cho máy ảo yêu cầu phải chọn triển khai vùng trong cài đặt khả dụng của VM và ổ đĩa được quản lý Azure là mẫu ổ đĩa hỗ trợ Availability Zones. Ổ đĩa không được quản lý không được hỗ trợ cho trường hợp này, do đó, VM phải được thay đổi để sử dụng ổ đĩa được quản lý và cài đặt khả dụng phải được thay đổi từ dự phòng no thành tùy chọn Availability Zone. Hình ảnh, kích thước hiện tại và loại đĩa hệ điều hành HDD tiêu chuẩn không tự mình chặn việc tạo vùng trong cấu hình này.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783630216241-48n7xksm.png', 'published'),
  ('az104-179', 'az-104', 179, 'You have an Azure subscription that contains the users shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783643016553-bqipu0hk.png)  
  
The groups are configured as shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783643019319-pdzdf8fe.png)  
  
You have a resource group named RG1 as shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783643022423-uphx4czy.png)  
  
For each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"You can assign User2 the Owner role for RG1 by adding Group2 as a member of Group1.","correctAnswer":"No"},{"id":"2","text":"You can assign User3 the Owner role for RG1 by adding Group3 as a member of Group1.","correctAnswer":"No"},{"id":"3","text":"You can assign User3 the Owner role for RG1 by assigning the Owner role to Group3 for RG1.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, '["1:No","2:No","3:Yes"]'::jsonb, 'Group1 đã giữ vai trò Chủ sở hữu trên RG1 và bảng nhóm hiển thị Group1 đã bật "Các vai trò Microsoft Entra có thể được gán cho nhóm", điều này làm cho nhóm này trở thành nhóm có thể gán vai trò. Các nhóm có thể gán vai trò không hỗ trợ lồng nhau - không thể thêm nhóm làm thành viên của nhóm có thể gán vai trò - vì vậy, việc thêm Group2 hoặc Group3 làm thành viên của Group1 sẽ không mở rộng quyền truy cập của Chủ sở hữu vào Người dùng2 hoặc Người dùng3, bất kể nhóm được thêm là nhóm bảo mật hay nhóm Microsoft 365. Tuy nhiên, việc gán vai trò Azure RBAC ở phạm vi tài nguyên hoặc nhóm tài nguyên (chẳng hạn như Chủ sở hữu trên RG1) có thể được thực hiện trực tiếp cho bất kỳ đối tượng nhóm Microsoft Entra nào, bao gồm các nhóm Microsoft 365, do đó, việc gán vai trò Chủ sở hữu trực tiếp cho Group3 trên RG1 sẽ thành công và cấp cho Người dùng3, với tư cách là thành viên của Group3, vai trò Chủ sở hữu.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783643016553-bqipu0hk.png', 'published'),
  ('az104-180', 'az-104', 180, 'You have an Azure subscription named Subscription1 that contains the resources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783630301593-nuz6vkf8.png)  
  
In storage1, you create a blob container named blob1 and a file share named share1.  
  
Which resources can be backed up to Vault1 and Vault2?', '[]'::jsonb, '[]'::jsonb, 'Azure Backup với Recovery Services vault bị giới hạn theo khu vực đối với các khối lượng công việc này. Máy ảo Azure chỉ có thể được sao lưu vào Recovery Services vault ở cùng khu vực với VM, vì vậy VM1 ở miền Trung Hoa Kỳ có thể sử dụng Vault1 ở miền Trung Hoa Kỳ. Bản sao lưu Azure Files cũng sử dụng Recovery Services vault trong cùng khu vực với tài khoản lưu trữ, vì vậy share1 trong storage1 ở Tây Hoa Kỳ có thể sử dụng Vault2 ở Tây Hoa Kỳ. Vùng chứa Blob không được Recovery Services vault bảo vệ dưới dạng bản sao lưu Azure Blob trong trường hợp này và Azure SQL Database không sử dụng Recovery Services vault để sao lưu; thay vào đó nó dựa vào các tính năng sao lưu cơ sở dữ liệu SQL.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1783630301593-nuz6vkf8.png', 'published'),
  ('az104-181', 'az-104', 181, 'You have an Azure subscription named Subscription1 and an on-premises deployment of Microsoft System Center Service Manager.  
  
Subscription1 contains a virtual machine named VM1.  
  
You need to make sure that an alert is created in Service Manager when the available memory on VM1 falls below 10 percent.  
  
What should you do first?', '[{"key":"A","text":"Create an automation runbook"},{"key":"B","text":"Deploy a function app"},{"key":"C","text":"Deploy the IT Service Management Connector (ITSM)"},{"key":"D","text":"Create a notification"}]'::jsonb, '["C"]'::jsonb, 'Azure Monitor gửi cảnh báo đến hệ thống ITSM thông qua Trình kết nối quản lý dịch vụ CNTT (ITSMC). Microsoft Learn tuyên bố rằng trước khi bạn có thể tạo các mục công việc ITSM từ cảnh báo Azure, trước tiên bạn phải cài đặt hoặc triển khai ITSMC, sau đó tạo kết nối với sản phẩm ITSM. Vì yêu cầu là phải tạo mục công việc/cảnh báo của Trình quản lý dịch vụ từ điều kiện bộ nhớ Azure VM nên bước tiên quyết đầu tiên là triển khai Trình kết nối quản lý dịch vụ CNTT.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-182', 'az-104', 182, 'You have an Azure virtual network named VNet1 that includes a subnet named Subnet1. Subnet1 contains three Azure virtual machines, and each virtual machine has a public IP address.  
  
The virtual machines host several applications that are available to users on the Internet over port 443.  
  
Your on-premises network has a site-to-site VPN connection to VNet1.  
  
You discover that the virtual machines are accessible by using Remote Desktop Protocol (RDP) from both the Internet and the on-premises network.  
  
You need to prevent RDP access to the virtual machines from the Internet, unless the RDP connection is established from the on-premises network. The solution must ensure that all the applications remain accessible to Internet users.  
  
What should you do?', '[{"key":"A","text":"Modify the address space of the local network gateway"},{"key":"B","text":"Create a deny rule in a network security group (NSG) that is linked to Subnet1"},{"key":"C","text":"Remove the public IP addresses from the virtual machines"},{"key":"D","text":"Modify the address space of Subnet1"}]'::jsonb, '["B"]'::jsonb, 'Nhóm bảo mật mạng được liên kết với Subnet1 có thể lọc lưu lượng truy cập gửi đến theo giao thức, cổng và nguồn. Việc tạo quy tắc từ chối gửi đến cho cổng TCP 3389 từ các nguồn Internet sẽ chặn RDP trực tiếp từ Internet công cộng, trong khi các quy tắc cho phép có mức ưu tiên cao hơn có thể cho phép RDP từ dải địa chỉ tại chỗ trên VPN site-to-site. NSG cũng có thể tiếp tục cho phép lưu lượng HTTPS trên cổng 443, do đó các ứng dụng truy cập Internet vẫn có thể truy cập được. Các quy tắc Azure NSG được thiết kế chính xác cho loại kiểm soát truy cập cấp mạng con này.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-183', 'az-104', 183, 'Your company has an Azure subscription named **Subscription1**.  
  
The company also has two on-premises servers named **Server1** and **Server2** that run **Windows Server 2016**. **Server1** is configured as a DNS server that has a primary DNS zone named **adatum.com**. **adatum.com** contains **1,000 DNS records**.  
  
You manage **Server1** and **Subscription1** from **Server2**. **Server2** has the following tools installed:  
  
- The **DNS Manager** console  
- **Azure PowerShell**  
- **Azure CLI 2.0**  
  
You need to move the **adatum.com** zone to an Azure DNS zone in **Subscription1**. The solution must minimize administrative effort.  
  
What should you use?', '[{"key":"A","text":"Azure CLI"},{"key":"B","text":"Azure PowerShell"},{"key":"C","text":"the Azure portal"},{"key":"D","text":"the DNS Manager console"}]'::jsonb, '["A"]'::jsonb, 'Azure DNS hỗ trợ nhập trực tiếp tệp vùng DNS hiện có bằng cách sử dụng Azure CLI với `az network dns zone import`. Đối với vùng được lưu trữ trên DNS của Windows, bạn có thể lấy tệp vùng từ máy chủ DNS của Windows và việc nhập tệp đó sẽ tạo vùng DNS Azure và tải hàng loạt bản ghi, đây là công việc ít quản trị nhất đối với một vùng có 1.000 bản ghi. Trình quản lý DNS dùng để quản lý DNS của Windows, không di chuyển vùng sang Azure DNS và Azure PowerShell không phải là đường dẫn nhập hàng loạt được ghi lại được sử dụng cho trường hợp này.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-184', 'az-104', 184, 'You have an Azure subscription. The subscription contains virtual machines that run Windows Server.  
  
You have a data collection rule (DCR) named Rule1.  
  
You plan to use the Azure Monitor Agent to collect events from Windows **System** event logs.  
  
You only need to collect system events that have an ID of **1001**.  
  
Which type of query should you use for the data source in Rule1?', '[{"key":"A","text":"SQL"},{"key":"B","text":"XPath"},{"key":"C","text":"KQL"}]'::jsonb, '["B"]'::jsonb, 'Đối với Tác nhân Azure Monitor, nguồn dữ liệu Nhật ký sự kiện Windows DCR lọc các sự kiện Windows được thu thập bằng cách sử dụng truy vấn **XPath**. Microsoft Learn chỉ định rằng tính năng lọc sự kiện Windows tùy chỉnh trong DCR sử dụng các mục nhập có dạng `LogName!XPathQuery` và đưa ra các ví dụ như lọc Nhật ký hệ thống theo `EventID`. Do đó, để chỉ thu thập các sự kiện Hệ thống có ID 1001, loại truy vấn bắt buộc là XPath.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-185', 'az-104', 185, 'You have an existing Azure subscription that contains 10 virtual machines.  
  
You need to monitor the latency between your on-premises network and the virtual machines.  
  
What should you use?', '[{"key":"A","text":"Service Map"},{"key":"B","text":"Connection troubleshoot"},{"key":"C","text":"Network Performance Monitor"},{"key":"D","text":"Effective routes"}]'::jsonb, '["C"]'::jsonb, 'Giám sát hiệu suất mạng (một phần của Azure Monitor/Network Watcher) được thiết kế đặc biệt để giám sát độ trễ và số liệu hiệu suất mạng trên các môi trường kết hợp, bao gồm các đường dẫn từ mạng tại chỗ đến Azure virtual machines theo thời gian. Bản đồ dịch vụ trực quan hóa các phần phụ thuộc của ứng dụng, Khắc phục sự cố kết nối thực hiện chẩn đoán tại thời điểm và Các tuyến hiệu quả hiển thị cấu hình định tuyến—không có tuyến nào trong số đó cung cấp khả năng giám sát độ trễ liên tục cần thiết cho kịch bản kết hợp này.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-186', 'az-104', 186, 'You have an on-premises server that contains a folder named `D:\Folder1`.  
  
You need to copy the contents of `D:\Folder1` to the public container in an Azure Storage account named `contosodata`.  
  
Which command should you run?', '[{"key":"A","text":"az storage blob copy start D:\\Folder1 https://contosodata.blob.core.windows.net/public"},{"key":"B","text":"azcopy sync D:\\folder1 https://contosodata.blob.core.windows.net/public --snapshot"},{"key":"C","text":"azcopy copy D:\\folder1 https://contosodata.blob.core.windows.net/public --recursive"},{"key":"D","text":"az storage blob copy start-batch D:\\Folder1 https://contosodata.blob.core.windows.net/public"}]'::jsonb, '["C"]'::jsonb, 'Để tải nội dung của thư mục cục bộ lên Azure Blob Storage, AzCopy sử dụng lệnh `azcopy copy` với thư mục cục bộ làm nguồn, URL vùng chứa làm đích và `--recursive` để bao gồm tất cả các tệp và thư mục con. Tài liệu Microsoft Learn `azcopy copy ''<local-directory-path>'' ''https://<storage-account-name>.blob.core.windows.net/<container-name>'' --recursive` để tải lên toàn bộ thư mục. Ngược lại, `az storage blob copy start` và `start-batch` là các hoạt động sao chép blob-to-blob, không phải tải lên thư mục cục bộ. ([learn.microsoft.com](https://learn.microsoft.com/da-dk/azure/storage/common/storage-use-azcopy-blobs-upload?utm_source=openai))', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-187', 'az-104', 187, 'You have an Azure subscription that contains a Recovery Services vault named Vault1.  
  
You need to enable multi-user authorization (MAU) for Vault1.  
  
Which resource should you create first?', '[{"key":"A","text":"an administrative unit"},{"key":"B","text":"a managed identity"},{"key":"C","text":"a resource guard"},{"key":"D","text":"a custom Azure role"}]'::jsonb, '["C"]'::jsonb, 'Ủy quyền nhiều người dùng cho Azure Backup trên Recovery Services vault được cung cấp thông qua **Resource Guard**. Luồng thiết lập trước tiên là tạo Bộ bảo vệ tài nguyên, chỉ định quyền truy cập cần thiết như Reader trên đó cho quản trị viên dự phòng nếu cần, sau đó kích hoạt MAU trên vault bằng cách liên kết vault với Bộ bảo vệ tài nguyên đó. Đơn vị quản trị, danh tính được quản lý và vai trò Azure tùy chỉnh không phải là tài nguyên tiên quyết kích hoạt MAU cho Recovery Services vault.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-188', 'az-104', 188, 'You need to configure the Device settings to satisfy the technical and user requirements.  
  
Which two settings should you modify?

![Question Image](https://cdn.examcademy.com/images/questions/1788032485590-mhz8timx.png)', '[]'::jsonb, '[]'::jsonb, '$38', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1788032485590-mhz8timx.png', 'published'),
  ('az104-189', 'az-104', 189, 'You have an Azure AD tenant named `contoso.com`.  
  
You have an Azure subscription that contains an Azure App Service web app named `App1` and an Azure key vault named `KV1`. `KV1` contains a wildcard certificate for `contoso.com`.  
  
You have a user named `[email protected]` that is assigned the **Owner** role for `App1` and `KV1`.  
  
You need to configure `App1` to use the wildcard certificate of `KV1`.  
  
What should you do first?', '[{"key":"A","text":"Create an access policy for KV1 and assign the Microsoft Azure App Service principal to the policy."},{"key":"B","text":"Assign a managed user identity to App1."},{"key":"C","text":"Configure KV1 to use the role-based access control (RBAC) authorization system."},{"key":"D","text":"Create an access policy for KV1 and assign the policy to User1."}]'::jsonb, '["A"]'::jsonb, 'Để Azure App Service nhập và sử dụng chứng chỉ từ Azure Key Vault, vault phải cấp cho nhà cung cấp tài nguyên Dịch vụ ứng dụng/máy bay dữ liệu service principal quyền đọc chứng chỉ và bí mật của nó. Điều này được thực hiện bằng cách tạo chính sách truy cập Key Vault cho hiệu trưởng Microsoft Azure App Service. managed identity trên ứng dụng web dành cho ứng dụng truy cập vào Key Vault từ mã chứ không phải để nhập và ràng buộc chứng chỉ nền tảng Dịch vụ ứng dụng.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-190', 'az-104', 190, 'You have an Azure subscription that contains the Microsoft Entra identities shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784205777048-gn9ivjfr.png)  
  
You need to enable self-service password reset (SSPR).  
  
For which identities can SSPR be enabled in the Azure portal?', '[{"key":"A","text":"User1 only"},{"key":"B","text":"Group1 only"},{"key":"C","text":"User1 and Group1 only"},{"key":"D","text":"Group1 and Group2 only"},{"key":"E","text":"User1, Group1, and Group2"}]'::jsonb, '["D"]'::jsonb, 'SSPR có thể được kích hoạt cho tất cả người dùng hoặc cho một nhóm Microsoft Entra đã chọn; nó không được kích hoạt bằng cách chọn trực tiếp một người dùng cá nhân. Cả nhóm bảo mật và nhóm Microsoft 365 đều là loại nhóm Microsoft Entra, vì vậy Group1 và Group2 có thể được nhắm mục tiêu.', 'General', '["AZ-104","General"]'::jsonb, 'https://cdn.examcademy.com/images/questions/1784205777048-gn9ivjfr.png', 'published'),
  ('az104-191', 'az-104', 191, 'You are planning the migration of App1 to Azure.  
  
You create a network security group (NSG).  
  
You need to recommend a solution that provides users with access to App1.  
  
What should you recommend?', '[{"key":"A","text":"Create an incoming security rule for port 443 from the Internet. Associate the NSG to the subnet that contains the web servers."},{"key":"B","text":"Create an outgoing security rule for port 443 from the Internet. Associate the NSG to the subnet that contains the web servers."},{"key":"C","text":"Create an incoming security rule for port 443 from the Internet. Associate the NSG to all the subnets."},{"key":"D","text":"Create an outgoing security rule for port 443 from the Internet. Associate the NSG to all the subnets."}]'::jsonb, '["A"]'::jsonb, 'Để cho phép người dùng truy cập App1 qua HTTPS, nhóm bảo mật mạng phải cho phép lưu lượng truy cập **vào** từ Internet trên cổng TCP 443 tới mạng con hoặc NIC lưu trữ các máy chủ web. Quy tắc gửi đi sẽ không cho phép người dùng bên ngoài bắt đầu kết nối với ứng dụng và việc áp dụng NSG cho tất cả các mạng con sẽ rộng hơn mức yêu cầu để chỉ hiển thị tầng web.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published'),
  ('az104-192', 'az-104', 192, 'You have an Azure Active Directory (Azure AD) tenant named `contoso.onmicrosoft.com` that contains 100 user accounts.  
  
You purchase 10 Azure AD Premium P2 licenses for the tenant.  
  
You need to ensure that 10 users can use all the Azure AD Premium features.  
  
What should you do?', '[{"key":"A","text":"From the Licenses blade of Azure AD, assign a license"},{"key":"B","text":"From the Groups blade of each user, invite the users to a group"},{"key":"C","text":"From the Azure AD domain, add an enterprise application"},{"key":"D","text":"From the Directory role blade of each user, modify the directory role"}]'::jsonb, '["A"]'::jsonb, 'Các khả năng của Microsoft Entra ID Premium P2 được cấp phép cho mỗi người dùng, vì vậy những người dùng được yêu cầu phải được chỉ định các giấy phép đã mua đó. Việc chỉ đặt người dùng vào một nhóm, thêm ứng dụng doanh nghiệp hoặc thay đổi vai trò thư mục sẽ không cấp quyền sử dụng các tính năng Premium P2. Hành động đúng là gán giấy phép Azure AD Premium P2 cho 10 người dùng.', 'General', '["AZ-104","General"]'::jsonb, NULL, 'published')
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