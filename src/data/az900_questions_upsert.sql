-- AZ-900 normalized question bank generated from AZ900_Questions.csv and its answer-area images.
-- Total: 323
-- Types: {"matching_drag_drop":23,"multiple_choice":204,"statement_matrix":30,"matching_dropdown":59,"image_hotspot":7}
-- Safe to run repeatedly. Stale AZ-900 rows are removed after the upsert.

BEGIN;

ALTER TABLE questions ADD COLUMN IF NOT EXISTS image_url TEXT;

INSERT INTO questions (
  id, cert_id, question_number, text, options,
  correct_answers, explanation, category, tags, image_url
) VALUES
(
  'az-900-question-001', 'az-900', 1, 'Your company intends to subscribe to an Azure support plan. The support plan must allow for new support requests to be opened. Which of the following are support plans that will allow this? Answer by dragging the correct option from the list to the answer area.',
  '{"type":"matching_drag_drop","statements":[{"id":"1","text":"Eligible technical support plan — 1 of 4","correctAnswer":"B"},{"id":"2","text":"Eligible technical support plan — 2 of 4","correctAnswer":"C"},{"id":"3","text":"Eligible technical support plan — 3 of 4","correctAnswer":"D"},{"id":"4","text":"Eligible technical support plan — 4 of 4","correctAnswer":"E"}],"choices":[{"key":"A","text":"Basic"},{"key":"B","text":"Developer"},{"key":"C","text":"Standard"},{"key":"D","text":"Professional Direct"},{"key":"E","text":"Premier"}]}'::jsonb, ARRAY['1=B', '2=C', '3=D', '4=E']::text[],
  'Developer, Standard, Professional Direct và Premier bao gồm hỗ trợ kỹ thuật và cho phép các yêu cầu hỗ trợ kỹ thuật. Basic bao gồm hỗ trợ thanh toán và đăng ký nhưng không bao gồm các trường hợp hỗ trợ kỹ thuật.', 'Azure Management and Governance', ARRAY['AZ-900', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-002', 'az-900', 2, 'Your company has datacenters in Los Angeles and New York. The company has a Microsoft Azure subscription. You are configuring the two datacenters as geo-clustered sites for site resiliency. You need to recommend an Azure storage redundancy option. You have the following data storage requirements: ✑ Data must be stored on multiple nodes. ✑ Data must be stored on nodes in separate geographic locations. ✑ Data can be read from the secondary location as well as from the primary location Which of the following Azure stored redundancy options should you recommend?',
  '[{"key":"A","text":"Geo-redundant storage"},{"key":"B","text":"Read-only geo-redundant storage"},{"key":"C","text":"Zone-redundant storage"},{"key":"D","text":"Locally redundant storage"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Bộ nhớ dự phòng địa lý chỉ đọc. RA-GRS cho phép bạn có khả năng đọc cao hơn cho tài khoản lưu trữ của mình bằng cách cung cấp quyền truy cập chỉ đọc vào dữ liệu được sao chép sang vị trí phụ. Sau khi bạn bật tính năng này, vị trí phụ có thể được sử dụng để đạt được mức độ sẵn sàng cao hơn trong trường hợp dữ liệu không có sẵn ở khu vực chính. Đây là tính năng chọn tham gia yêu cầu tài khoản lưu trữ phải được sao chép theo địa lý.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Storage', 'Architecture']::text[],
  ''
),
(
  'az-900-question-003', 'az-900', 3, 'Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. Your company''s Azure subscription includes a Basic support plan. They would like to request an assessment of an Azure environment''s design from Microsoft. This is, however, not supported by the existing plan. You want to make sure that the company subscribes to a support plan that allows this functionality, while keeping expenses to a minimum. Solution: You recommend that the company subscribes to the Professional Direct support plan. Does the solution meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Không. B. Không. Gói hỗ trợ Standard sẽ là lựa chọn tiết kiệm chi phí hơn so với gói Professional Direct cho yêu cầu cụ thể này. Gói Standard bao gồm hỗ trợ đánh giá thiết kế và thường rẻ hơn gói Professional Direct.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Architecture', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-004', 'az-900', 4, 'Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. You are tasked with deploying Azure virtual machines for your company. You need to make use of the appropriate cloud deployment solution. Solution: You should make use of Software as a Service (SaaS). Does the solution meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Đáp án đúng: B — Không. Từ khóa (Máy ảo), thì nên dùng IaaS', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Service Models', 'Compute']::text[],
  ''
),
(
  'az-900-question-005', 'az-900', 5, 'Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. You are tasked with deploying Azure virtual machines for your company. You need to make use of the appropriate cloud deployment solution. Solution: You should make use of Platform as a Service (PaaS). Does the solution meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Không. B. Không - Máy ảo được triển khai trong IaaS. Tham khảo: Dịch vụ Văn bản tham khảo trong IaaS: "Máy ảo Azure là các thiết bị điện toán ảo hoạt động đầy đủ chạy trong trung tâm dữ liệu của Microsoft.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Service Models', 'Compute', 'Architecture']::text[],
  ''
),
(
  'az-900-question-006', 'az-900', 6, 'Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. You are tasked with deploying Azure virtual machines for your company. You need to make use of the appropriate cloud deployment solution. Solution: You should make use of Infrastructure as a Service (IaaS). Does the solution meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A – Có. Máy ảo và tài khoản lưu trữ Azure là IaaS', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Service Models', 'Compute', 'Storage']::text[],
  ''
),
(
  'az-900-question-007', 'az-900', 7, 'Your developers have created 10 web applications that must be host on Azure. You need to determine which Azure web tier plan to host the web apps. The web tier plan must meet the following requirements: ✑ The web apps will use custom domains. ✑ The web apps each require 10 GB of storage. ✑ The web apps must each run in dedicated compute instances. ✑ Load balancing between instances must be included. ✑ Costs must be minimized. Which web tier plan should you use?',
  '[{"key":"A","text":"Standard"},{"key":"B","text":"Basic"},{"key":"C","text":"Free"},{"key":"D","text":"Shared"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A — Standard. Vui lòng đọc các yêu cầu: Xin lưu ý ở đây thực tế cân bằng tải: Các ứng dụng web sẽ sử dụng miền tùy chỉnh. (Basic, Miền tùy chỉnh hỗ trợ tiêu chuẩn và chia sẻ) Mỗi ​​ứng dụng web yêu cầu 10 GB dung lượng lưu trữ. (hỗ trợ cơ bản và tiêu chuẩn này) Mỗi ​​ứng dụng web phải chạy trong các phiên bản điện toán chuyên dụng. (hỗ trợ cơ bản tối đa 3 phiên bản trong đó hỗ trợ tiêu chuẩn 10max) Phải bao gồm cân bằng tải giữa các phiên bản. (miễn phí, dùng chung và cơ bản không hỗ trợ cân bằng tải. Cấp tiêu chuẩn trở lên chỉ hỗ trợ cân bằng tải/tự động điều chỉnh quy mô) Chi phí phải được giảm thiểu. Standard rẻ hơn so với phiên bản cao cấp và biệt lập. Tôi hy vọng điều này rõ ràng để chọn câu trả lời đúng là STANDARD.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Storage', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-008', 'az-900', 8, 'Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. You are planning to migrate a company to Azure. Each of the company''s numerous divisions will have an administrator in place to manage the Azure resources used by their respective division. You want to make sure that the Azure deployment you employ allows for Azure to be segmented for the divisions, while keeping administrative effort to a minimum. Solution: You plan to make use of several Azure Active Directory (Azure AD) directories. Does the solution meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Không. Giải pháp được đề xuất là: Bạn dự định sử dụng một số thư mục Microsoft Entra ID (trước đây là Microsoft Entra ID). Tôi nghĩ từ khóa là SEVERAL. Tại sao một công ty lại tạo ra các AAD SEVERAL khi công ty đó có thể tạo một AAD duy nhất và tổ chức các bộ phận của mình ngay tại đó? Đây là lý do tại sao tôi coi câu trả lời đúng là B (Không).', 'Azure Architecture and Services', ARRAY['AZ-900', 'Identity and Security']::text[],
  ''
),
(
  'az-900-question-009', 'az-900', 9, 'Your developers have created a portal web app for users in the Miami branch office. The web app will be publicly accessible and used by the Miami users to retrieve customer and product information. The web app is currently running in an on-premises test environment. You plan to host the web app on Azure. You need to determine which Azure web tier plan to host the web app. The web tier plan must meet the following requirements: ✑ The website will use the miami.weyland.com URL. ✑ The website will be deployed to two instances. ✑ SSL support must be included. ✑ The website requires 12 GB of storage. ✑ Costs must be minimized. Which web tier plan should you use?',
  '[{"key":"A","text":"Standard"},{"key":"B","text":"Basic"},{"key":"C","text":"Free"},{"key":"D","text":"Shared"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A — Standard. từ khóa 12 GB miễn phí = 1 GB chia sẻ = 1 GB Basic = 10 GB Standard = 50 GB Premium = 250 GB biệt lập = 1 TB', 'Azure Architecture and Services', ARRAY['AZ-900', 'Storage', 'Cost Management', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-010', 'az-900', 10, 'Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. Your company is planning to migrate all their virtual machines to an Azure pay-as-you-go subscription. The virtual machines are currently hosted on the Hyper-V hosts in a data center. You are required make sure that the intended Azure solution uses the correct expenditure model. Solution: You should recommend the use of the elastic expenditure model. Does the solution meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Không. Độ co giãn không phải là một mô hình chi tiêu mà là một trong những đặc điểm của máy tính có thể. Ưu điểm cơ bản của điện toán đám mây là chuyển các yêu cầu Chi tiêu vốn cao (CAPEX) của bạn sang mô hình Trả tiền theo mức sử dụng tối ưu là Chi tiêu hoạt động (OPEX)', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Benefits', 'Compute', 'Architecture']::text[],
  ''
),
(
  'az-900-question-011', 'az-900', 11, 'Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. Your company is planning to migrate all their virtual machines to an Azure pay-as-you-go subscription. The virtual machines are currently hosted on the Hyper-V hosts in a data center. You are required make sure that the intended Azure solution uses the correct expenditure model. Solution: You should recommend the use of the scalable expenditure model. Does the solution meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Không. Câu trả lời là KHÔNG. Bởi vì chúng tôi có hai mô hình chi tiêu. Một là Cap-Ex, một là Op-Ex. Vì vậy, Chi tiêu có thể mở rộng không phải là câu trả lời đúng.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Benefits', 'Compute', 'Architecture']::text[],
  ''
),
(
  'az-900-question-012', 'az-900', 12, 'Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. Your company is planning to migrate all their virtual machines to an Azure pay-as-you-go subscription. The virtual machines are currently hosted on the Hyper-V hosts in a data center. You are required make sure that the intended Azure solution uses the correct expenditure model. Solution: You should recommend the use of the operational expenditure model. Does the solution meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A – Có. Câu trả lời là Có. Chi phí hoạt động là chi phí liên tục của hoạt động kinh doanh. Việc sử dụng các dịch vụ đám mây theo mô hình trả tiền theo nhu cầu sử dụng có thể được coi là một khoản chi phí hoạt động.', 'Cloud Concepts', ARRAY['AZ-900', 'Compute', 'Architecture', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-013', 'az-900', 13, 'Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. You are required to deploy an Artificial Intelligence (AI) solution in Azure. You want to make sure that you are able to build, test, and deploy predictive analytics for the solution. Solution: You should make use of Azure Cosmos DB. Does the solution meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Không. Machine Learning Studio (cổ điển) là công cụ kéo và thả mà bạn có thể sử dụng để xây dựng, thử nghiệm và triển khai các giải pháp phân tích dự đoán Azure Cosmos DB là cơ sở dữ liệu NoSQL được quản lý hoàn toàn để phát triển ứng dụng hiện đại.', 'Azure Architecture and Services', ARRAY['AZ-900']::text[],
  ''
),
(
  'az-900-question-014', 'az-900', 14, 'Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. Your company''s Active Directory forest includes thousands of user accounts. You have been informed that all network resources will be migrated to Azure. Thereafter, the on-premises data center will be retired. You are required to employ a strategy that reduces the effect on users, once the planned migration has been completed. Solution: You plan to sync all the Active Directory user accounts to Azure Active Directory (Azure AD). Does the solution meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A – Có. Sử dụng Microsoft Entra ID Connect để thực hiện việc này.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Identity and Security']::text[],
  ''
),
(
  'az-900-question-015', 'az-900', 15, 'Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. You are required to deploy an Artificial Intelligence (AI) solution in Azure. You want to make sure that you are able to build, test, and deploy predictive analytics for the solution. Solution: You should make use of Azure Machine Learning Studio. Does the solution meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A – Có. Machine Learning Studio (cổ điển) là công cụ kéo và thả mà bạn có thể sử dụng để xây dựng, thử nghiệm và triển khai các giải pháp phân tích dự đoán.', 'Azure Architecture and Services', ARRAY['AZ-900']::text[],
  ''
),
(
  'az-900-question-016', 'az-900', 16, 'Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. Your company''s infrastructure includes a number of business units that each need a large number of various Azure resources for everyday operation. The resources required by each business unit are identical. You are required to sanction a strategy to create Azure resources automatically. Solution: You recommend that the Azure API Management service be included in the strategy. Does the solution meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Không. Dịch vụ quản lý Azure API i( APIM ) là một cách để tạo và quản lý API khách hàng cho các dịch vụ phụ trợ hiện có. Câu hỏi hỏi về cách tạo tài nguyên Azure tự động (một cách nhanh chóng). ARM (Azure Resource Manager) là một công cụ tự động hóa việc triển khai trên đám mây AZ.', 'Azure Management and Governance', ARRAY['AZ-900', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-017', 'az-900', 17, 'Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. Your company''s infrastructure includes a number of business units that each need a large number of various Azure resources for everyday operation. The resources required by each business unit are identical. You are required to sanction a strategy to create Azure resources automatically. Solution: You recommend that management groups be included in the strategy. Does the solution meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Số B đúng. Nó phải là mẫu ARM. Để đáp ứng những thách thức này, bạn có thể tự động hóa việc triển khai và sử dụng hoạt động thực tiễn của cơ sở hạ tầng dưới dạng mã. Trong mã, bạn xác định cơ sở hạ tầng cần được triển khai. Mã cơ sở hạ tầng trở thành một phần của dự án của bạn. Cũng giống như mã ứng dụng, bạn lưu trữ mã cơ sở hạ tầng trong kho lưu trữ nguồn và phiên bản mã đó. Bất kỳ ai trong nhóm của bạn đều có thể chạy mã và triển khai các môi trường tương tự.', 'Azure Management and Governance', ARRAY['AZ-900', 'Architecture', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-018', 'az-900', 18, 'Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. Your company''s infrastructure includes a number of business units that each need a large number of various Azure resources for everyday operation. The resources required by each business unit are identical. You are required to sanction a strategy to create Azure resources automatically. Solution: You recommend that the Azure Resource Manager templates be included in the strategy. Does the solution meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A – Có. Để đáp ứng những thách thức này, bạn có thể tự động hóa việc triển khai và sử dụng thực tiễn cơ sở hạ tầng dưới dạng mã. Trong mã, bạn xác định cơ sở hạ tầng cần được triển khai. Mã cơ sở hạ tầng trở thành một phần của dự án của bạn. Cũng giống như mã ứng dụng, bạn lưu trữ mã cơ sở hạ tầng trong kho lưu trữ nguồn và phiên bản mã đó. Bất kỳ ai trong nhóm của bạn đều có thể chạy mã và triển khai các môi trường tương tự.', 'Azure Management and Governance', ARRAY['AZ-900', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-019', 'az-900', 19, 'Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. You are tasked with deploying a critical LOB application, which will be installed on a virtual machine, to Azure. You are informed that the application deployment strategy should allow for a guaranteed availability of 99.99 percent. You need to make sure that the strategy requires as little virtual machines and availability zones as possible. Solution: You include two virtual machines and one availability zone in your strategy. Does the solution meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Không. Câu trả lời là KHÔNG Đối với tất cả các Máy ảo có hai phiên bản trở lên được triển khai trên hai Vùng sẵn sàng trở lên trong cùng một khu vực Azure, chúng tôi đảm bảo bạn sẽ có Kết nối Máy ảo với ít nhất một phiên bản trong ít nhất 99,99% thời gian. Đối với tất cả các Máy ảo có hai phiên bản trở lên được triển khai trong cùng một Bộ khả dụng hoặc trong cùng một Nhóm máy chủ chuyên dụng, chúng tôi đảm bảo bạn sẽ có Kết nối Máy ảo với ít nhất một phiên bản trong ít nhất 99,95% thời gian.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Architecture']::text[],
  ''
),
(
  'az-900-question-020', 'az-900', 20, 'Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. You are tasked with deploying a critical LOB application, which will be installed on a virtual machine, to Azure. You are informed that the application deployment strategy should allow for a guaranteed availability of 99.99 percent. You need to make sure that the strategy requires as little virtual machines and availability zones as possible. Solution: You include one virtual machine and two availability zones in your strategy. Does the solution meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Không. Câu trả lời là KHÔNG. máy/hoạt động xuất sắc 95% SLA dành cho các máy ảo phiên bản đơn sử dụng Standard HDD-Quản lý đĩa dành cho đĩa dữ liệu và hệ điều hành. 99,5% SLA dành cho các máy ảo phiên bản đơn sử dụng Standard SSD-Quản lý đĩa dành cho đĩa dữ liệu và hệ điều hành. 99,9% SLA dành cho các máy ảo phiên bản đơn sử dụng Premium SSD hoặc Ultra Disk cho tất cả các đĩa Hệ điều hành và Dữ liệu. 99,95% SLA cho tất cả các máy ảo có hai hoặc nhiều phiên bản trong cùng một Bộ khả dụng hoặc Nhóm máy chủ chuyên dụng. 99,99% SLA cho tất cả các máy ảo có hai phiên bản trở lên được triển khai trên hai Vùng sẵn sàng trở lên trong cùng một khu vực.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Architecture']::text[],
  ''
),
(
  'az-900-question-021', 'az-900', 21, 'Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. You are tasked with deploying a critical LOB application, which will be installed on a virtual machine, to Azure. You are informed that the application deployment strategy should allow for a guaranteed availability of 99.99 percent. You need to make sure that the strategy requires as little virtual machines and availability zones as possible. Solution: You include two virtual machines and two availability zones in your strategy. Does the solution meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A – Có. 2VM + 2 Vùng có tỷ lệ thất bại lớn như nhau và thời gian hoạt động là 99,9%. Đối với tất cả các Máy ảo có hai phiên bản trở lên được triển khai trên hai Vùng sẵn sàng trở lên trong cùng một khu vực Azure, chúng tôi đảm bảo bạn sẽ có Kết nối Máy ảo với ít nhất một phiên bản trong ít nhất 99,99% thời gian. Đối với tất cả các Máy ảo có hai phiên bản trở lên được triển khai trong cùng một Bộ khả dụng hoặc trong cùng một Nhóm máy chủ chuyên dụng, chúng tôi đảm bảo bạn sẽ có Kết nối Máy ảo với ít nhất một phiên bản trong ít nhất 99,95% thời gian.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Architecture']::text[],
  ''
),
(
  'az-900-question-022', 'az-900', 22, 'Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. Your company''s developers intend to deploy a large number of custom virtual machines on a weekly basis. They will also be removing these virtual machines during the same week it was deployed. Sixty percent of the virtual machines have Windows Server 2016 installed, while the other forty percent has Ubuntu Linux installed. You are required to make sure that the administrative effort, needed for this process, is reduced by employing a suitable Azure service. Solution: You recommend the use of Microsoft Managed Desktop. Does the solution meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Không. Trả lời đúng. Đây không phải là Máy tính để bàn được quản lý của Microsoft. Câu trả lời đúng phải là Azure DevTest Labs. Chào mừng bạn đến với Máy tính để bàn được quản lý của Microsoft Máy tính để bàn được quản lý của Microsoft kết hợp Microsoft 365 Enterprise, tính năng quản lý thiết bị dựa trên đám mây của Microsoft và giám sát bảo mật, cho phép bạn giải phóng đội ngũ CNTT của mình để tập trung vào các nhu cầu kinh doanh cốt lõi. Hiện tại, dịch vụ Máy tính để bàn được quản lý của Microsoft chỉ được cung cấp theo lời mời. Tìm hiểu thêm về tài liệu của Microsoft hoặc liên hệ với người quản lý tài khoản Microsoft của bạn. Nếu bạn chưa quen với Máy tính để bàn được quản lý của Microsoft, hãy tìm hiểu thêm về dịch vụ này.', 'Azure Management and Governance', ARRAY['AZ-900', 'Compute', 'Monitoring']::text[],
  ''
),
(
  'az-900-question-023', 'az-900', 23, 'Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. Your company''s developers intend to deploy a large number of custom virtual machines on a weekly basis. They will also be removing these virtual machines during the same week it was deployed. Sixty percent of the virtual machines have Windows Server 2016 installed, while the other forty percent has Ubuntu Linux installed. You are required to make sure that the administrative effort, needed for this process, is reduced by employing a suitable Azure service. Solution: You recommend the use of Azure Reserved Virtual Machines (VM) Instances. Does the solution meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Không. Câu trả lời đúng là B. Azure DevTest Labs cho phép bạn nhanh chóng tạo môi trường bằng cách sử dụng các mẫu và tạo phẩm có thể tái sử dụng.', 'Azure Management and Governance', ARRAY['AZ-900', 'Compute', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-024', 'az-900', 24, 'Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. Your company''s developers intend to deploy a large number of custom virtual machines on a weekly basis. They will also be removing these virtual machines during the same week it was deployed. Sixty percent of the virtual machines have Windows Server 2016 installed, while the other forty percent has Ubuntu Linux installed. You are required to make sure that the administrative effort, needed for this process, is reduced by employing a suitable Azure service. Solution: You recommend the use of Azure DevTest Labs. Does the solution meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A – Có. Sử dụng DevTest Labs miễn phí* Cung cấp nhanh chóng môi trường thử nghiệm và phát triển Giảm thiểu lãng phí bằng hạn ngạch và chính sách Đặt chế độ tắt máy tự động để giảm thiểu chi phí Xây dựng môi trường Windows và Linux', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-025', 'az-900', 25, 'Your company has virtual machines (VMs) hosted in Microsoft Azure. The VMs are located in a single Azure virtual network named VNet1. The company has users that work remotely. The remote workers require access to the VMs on VNet1. You need to provide access for the remote workers. What should you do?',
  '[{"key":"A","text":"Configure a Site-to-Site (S2S) VPN."},{"key":"B","text":"Configure a VNet-toVNet VPN."},{"key":"C","text":"Configure a Point-to-Site (P2S) VPN."},{"key":"D","text":"Configure DirectAccess on a Windows Server 2012 server VM."},{"key":"E","text":"Configure a Multi-Site VPN"}]'::jsonb, ARRAY['C']::text[],
  'Câu trả lời đúng: C — Định cấu hình kết nối cổng Point-to-Site (P2S) VPN. Kết nối cổng VPN điểm-đến-Site (P2S) cho phép bạn tạo kết nối an toàn đến mạng ảo của mình từ một máy khách riêng lẻ.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Networking']::text[],
  ''
),
(
  'az-900-question-026', 'az-900', 26, 'Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. You have been informed by your superiors of the company''s intentions to automate server deployment to Azure. There is, however, some concern that administrative credentials could be uncovered during this process. You are required to make sure that during the deployment, the administrative credentials are encrypted using a suitable Azure solution. Solution: You recommend the use of Azure Information Protection. Does the solution meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Không. B. Không, trả lời -> Phải là Key Vault Azure Information Protection (AIP) là giải pháp dựa trên đám mây cho phép các tổ chức khám phá, phân loại và bảo vệ tài liệu cũng như email bằng cách dán nhãn cho nội dung.', 'Azure Architecture and Services', ARRAY['AZ-900']::text[],
  ''
),
(
  'az-900-question-027', 'az-900', 27, 'Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. You have been informed by your superiors of the company''s intentions to automate server deployment to Azure. There is, however, some concern that administrative credentials could be uncovered during this process. You are required to make sure that during the deployment, the administrative credentials are encrypted using a suitable Azure solution. Solution: You recommend the use of Azure Multi-Factor Authentication (MFA). Does the solution meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Không. B. Không - không đạt mục tiêu do MFA được sử dụng để thêm lớp xác thực để người dùng truy cập chứ không phải để mã hóa thông tin xác thực. Giải pháp đúng là Azure Key Vault.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Identity and Security']::text[],
  ''
),
(
  'az-900-question-028', 'az-900', 28, 'Which customer types are eligible to use Azure Government?',
  '[{"key":"A","text":"A United States government entity"},{"key":"B","text":"A United States government contractor or eligible partner"},{"key":"C","text":"A government entity from any country"},{"key":"D","text":"A European government contractor"}]'::jsonb, ARRAY['A', 'B']::text[],
  'Azure Government dành cho các tổ chức chính phủ liên bang, tiểu bang, địa phương và bộ lạc đủ điều kiện của Hoa Kỳ cũng như các đối tác được phê duyệt xử lý dữ liệu do chính phủ kiểm soát. Tính đủ điều kiện được xác nhận bởi Microsoft.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Architecture']::text[],
  'az900/images/28.png'
),
(
  'az-900-question-029', 'az-900', 29, 'Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. Your company has an Azure Active Directory (Azure AD) environment. Users occasionally connect to Azure AD via the Internet. You have been tasked with making sure that users who connect to Azure AD via the internet from an unidentified IP address, are automatically encouraged to change passwords. Solution: You configure the use of Azure AD Identity Protection. Does the solution meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A – Có. Phát hiện và khắc phục rủi ro Bảo vệ danh tính xác định nhiều loại rủi ro, bao gồm: Sử dụng địa chỉ IP ẩn danh Du lịch không điển hình Địa chỉ IP được liên kết với phần mềm độc hại Thuộc tính đăng nhập không quen thuộc Thông tin xác thực bị rò rỉ Xịt mật khẩu', 'Azure Architecture and Services', ARRAY['AZ-900', 'Identity and Security']::text[],
  ''
),
(
  'az-900-question-030', 'az-900', 30, 'Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. Your company has an Azure Active Directory (Azure AD) environment. Users occasionally connect to Azure AD via the Internet. You have been tasked with making sure that users who connect to Azure AD via the internet from an unidentified IP address, are automatically encouraged to change passwords. Solution: You configure the use of Azure AD Privileged Identity Management. Does the solution meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Không. Câu trả lời là Không Azure Information Protection (AIP) là giải pháp dựa trên đám mây cho phép các tổ chức khám phá, phân loại và bảo vệ tài liệu cũng như email bằng cách áp dụng nhãn cho nội dung. Giải pháp: Quản lý danh tính đặc quyền Azure Key Vault cung cấp kích hoạt vai trò dựa trên thời gian và phê duyệt để giảm thiểu rủi ro về quyền truy cập quá mức, không cần thiết hoặc lạm dụng đối với các tài nguyên mà bạn quan tâm.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Identity and Security']::text[],
  ''
),
(
  'az-900-question-031', 'az-900', 31, 'Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. You are planning a strategy to deploy numerous web servers and database servers to Azure. This strategy should allow for connection types between the web servers and database servers to be controlled. Solution: You include network security groups (NSGs) in your strategy. Does the solution meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A – Có. Bạn có thể sử dụng nhóm bảo mật mạng Azure để lọc lưu lượng truy cập mạng đến và đi từ tài nguyên Azure trong mạng ảo Azure. Nhóm bảo mật mạng chứa các quy tắc bảo mật cho phép hoặc từ chối lưu lượng truy cập mạng gửi đến hoặc lưu lượng truy cập mạng gửi đi từ một số loại tài nguyên Azure. Đối với mỗi quy tắc, bạn có thể chỉ định nguồn và đích, cổng và giao thức.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Networking']::text[],
  ''
),
(
  'az-900-question-032', 'az-900', 32, 'Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. You are planning a strategy to deploy numerous web servers and database servers to Azure. This strategy should allow for connection types between the web servers and database servers to be controlled. Solution: You include a local network gateway in your strategy. Does the solution meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Không. B. Không - NG cục bộ là kết nối giữa mạng cục bộ và mạng ảo (hoặc VPN để truy cập riêng tư). Nhóm An ninh Mạng sẽ đạt được mục tiêu.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Networking']::text[],
  ''
),
(
  'az-900-question-033', 'az-900', 33, 'Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements. Your company''s Active Directory forest includes thousands of user accounts. You have been informed that all network resources will be migrated to Azure. Thereafter, the on-premises data center will be retired. You are required to employ a strategy that reduces the effect on users, once the planned migration has been completed. Solution: You plan to require Azure Multi-Factor Authentication (MFA). Does the solution meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Không. MFA sẽ không giúp giảm bớt các vấn đề với người dùng. Nó sẽ thắt chặt bảo mật nhưng điều bạn thực sự cần ở đây là Azure Sync to AAD "Bạn được yêu cầu sử dụng chiến lược giúp giảm ảnh hưởng đến người dùng sau khi hoàn tất quá trình di chuyển theo kế hoạch.". Xác thực đa yếu tố không làm giảm tác động hoặc có bất kỳ loại ảnh hưởng nào đến vấn đề này.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Identity and Security']::text[],
  ''
),
(
  'az-900-question-034', 'az-900', 34, 'For each statement, select Yes if it is true. Otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"Azure provides flexibility between capital expenditure (CapEx) and operational expenditure (OpEx).","correctAnswer":"Yes"},{"id":"2","text":"If you create two Azure virtual machines that use the B2S size, each virtual machine will always generate the same monthly costs.","correctAnswer":"No"},{"id":"3","text":"When an Azure virtual machine is stopped, you continue to pay storage costs associated to the virtual machine.","correctAnswer":"Yes"}],"choices":[]}'::jsonb, ARRAY['1:Yes', '2:No', '3:Yes']::text[],
  'Hộp 1: Có - Theo truyền thống, chi phí CNTT được coi là Chi phí vốn (CapEx). Ngày nay, với việc chuyển sang đám mây và mô hình thanh toán theo mức sử dụng, các tổ chức có khả năng kéo dài ngân sách của mình và thay vào đó đang chuyển chi phí IT CapEx sang Chi phí hoạt động (OpEx). Tính linh hoạt này, về mặt kế toán, hiện là một tùy chọn do mô hình Dịch vụ mua phần mềm, lưu trữ đám mây và các tài nguyên liên quan đến CNTT khác. Hộp 2: Không - Hai máy ảo sử dụng cùng kích thước có thể có cấu hình đĩa khác nhau. Do đó, chi phí hàng tháng có thể khác nhau. Ô 3: Có - Khi máy ảo Azure bị dừng, bạn không phải trả tiền cho máy ảo. Câu trả lời đúng: 1: Có; 2: Không; 3: Vâng.', 'Cloud Concepts', ARRAY['AZ-900', 'Compute', 'Storage', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-035', 'az-900', 35, 'You have an on-premises network that contains several servers. You plan to migrate all the servers to Azure. You need to recommend a solution to ensure that some of the servers are available if a single Azure data center goes offline for an extended period. What should you include in the recommendation?',
  '[{"key":"A","text":"fault tolerance"},{"key":"B","text":"elasticity"},{"key":"C","text":"scalability"},{"key":"D","text":"low latency"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A - khả năng chịu lỗi. Khả năng chịu lỗi là khả năng hệ thống tiếp tục hoạt động trong trường hợp một số thành phần của nó bị lỗi. Trong câu hỏi này, bạn có thể có các máy chủ được sao chép trên các trung tâm dữ liệu. Vùng sẵn sàng mở rộng mức độ kiểm soát mà bạn có để duy trì tính khả dụng của các ứng dụng và dữ liệu trên máy ảo của mình. Vùng sẵn sàng là các vị trí thực tế duy nhất trong khu vực Azure. Mỗi vùng được tạo thành từ một hoặc nhiều trung tâm dữ liệu được trang bị nguồn điện, làm mát và kết nối mạng độc lập. Để đảm bảo khả năng phục hồi, có tối thiểu ba vùng riêng biệt trong tất cả các vùng được kích hoạt.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Benefits', 'Compute', 'Architecture']::text[],
  ''
),
(
  'az-900-question-036', 'az-900', 36, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"An organization that hosts its infrastructure ''W no longer requires a data center.","correctAnswer":"C"}],"choices":[{"key":"A","text":"lin a private cloud"},{"key":"B","text":"ina hybrid cloud"},{"key":"C","text":"in the public cloud"},{"key":"D","text":"on a Hyper-V host"}]}'::jsonb, ARRAY['1=C']::text[],
  'Một đám mây riêng được lưu trữ trong trung tâm dữ liệu của bạn. Do đó, bạn không thể đóng trung tâm dữ liệu nếu đang sử dụng đám mây riêng. Một đám mây công cộng được lưu trữ bên ngoài, ví dụ: trong Microsoft Azure. Một tổ chức lưu trữ cơ sở hạ tầng của mình trên đám mây công cộng có thể đóng cửa trung tâm dữ liệu của mình. Đám mây công cộng là mô hình triển khai phổ biến nhất. Trong trường hợp này, bạn không có phần cứng cục bộ để quản lý hoặc cập nhật " mọi thứ đều chạy trên phần cứng của nhà cung cấp đám mây của bạn. Microsoft Azure là một ví dụ về nhà cung cấp đám mây công cộng. Trong đám mây riêng, bạn tạo môi trường đám mây trong trung tâm dữ liệu của riêng mình và cung cấp quyền truy cập tự phục vụ để tính toán tài nguyên cho người dùng trong tổ chức của bạn. Hoàn thành đúng: trong đám mây công cộng.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Models', 'Architecture']::text[],
  ''
),
(
  'az-900-question-037', 'az-900', 37, 'What are two characteristics of the public cloud? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.',
  '[{"key":"A","text":"dedicated hardware"},{"key":"B","text":"unsecured connections"},{"key":"C","text":"limited storage"},{"key":"D","text":"metered pricing"},{"key":"E","text":"self-service management"}]'::jsonb, ARRAY['D', 'E']::text[],
  'Câu trả lời đúng: D — định giá theo đồng hồ đo; E - quản lý tự phục vụ. Với đám mây công cộng, bạn nhận được mức giá thanh toán theo mức sử dụng " bạn chỉ trả tiền cho những gì bạn sử dụng, không có chi phí CapEx. Với đám mây công cộng, bạn có quyền quản lý tự phục vụ. Bạn chịu trách nhiệm triển khai và định cấu hình tài nguyên đám mây như máy ảo hoặc trang web. Phần cứng cơ bản lưu trữ tài nguyên đám mây được quản lý bởi nhà cung cấp đám mây.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Models', 'Compute', 'Storage']::text[],
  ''
),
(
  'az-900-question-038', 'az-900', 38, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"When planning to migrate a public website to Azure you must plan to","correctAnswer":"B"}],"choices":[{"key":"A","text":"deploy a VPN."},{"key":"B","text":"pay monthly usage costs."},{"key":"C","text":"pay to transfer all the website data to Azure."},{"key":"D","text":"reduce the number of connections to the website."}]}'::jsonb, ARRAY['1=B']::text[],
  'Khi dự định di chuyển một trang web công cộng sang Azure, bạn phải lên kế hoạch trả chi phí sử dụng hàng tháng. Điều này là do Azure sử dụng mô hình trả tiền theo mức sử dụng. Hoàn thành đúng: thanh toán chi phí sử dụng hàng tháng.', 'Cloud Concepts', ARRAY['AZ-900', 'Networking', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-039', 'az-900', 39, 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. Your company plans to migrate all its data and resources to Azure. The company''s migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure. You need to deploy an Azure environment that meets the company migration plan. Solution: You create an Azure App Service and Azure SQL databases. Does this meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A – Có. Cơ sở dữ liệu Azure App Service và Azure SQL là ví dụ về giải pháp Azure PaaS. Vì vậy, giải pháp này đáp ứng được mục tiêu.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Service Models', 'Compute']::text[],
  ''
),
(
  'az-900-question-040', 'az-900', 40, 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. Your company plans to migrate all its data and resources to Azure. The company''s migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure. You need to deploy an Azure environment that meets the company migration plan. Solution: You create an Azure App Service and Azure virtual machines that have Microsoft SQL Server installed. D',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Không. 1. Azure Disk Storge là IaaS và Azure Blob Storage là PaaS. Vì vậy, nó chưa đề cập chính xác dịch vụ mà nhà phát triển đã sử dụng nên câu trả lời là không 2. VM = IaaS trong đó Dịch vụ ứng dụng mà tôi nhớ là một cái gì đó giống như Docker là PlatformNo sẽ là câu trả lời chính xác ở đây vì VM.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Service Models', 'Compute', 'Storage']::text[],
  ''
),
(
  'az-900-question-041', 'az-900', 41, 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. Your company plans to migrate all its data and resources to Azure. The company''s migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure. You need to deploy an Azure environment that meets the company migration plan. Solution: You create an Azure App Service and Azure Storage accounts. Does this meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Không. Azure Storage là PaaS Azure Storage ACCOUNTS thì không. Do đó B, Không. ​Tài khoản Azure Storage không phải là IaaS hoặc PaaS vì đây không phải là một "dịch vụ". Tài khoản Azure Storage là nơi chứa một trong các giải pháp lưu trữ Azure; Đĩa Azure Storage(IaaS), Azure Blob Storage(PaaS) và Tệp Azure Storage(SaaS).', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Service Models', 'Compute', 'Storage']::text[],
  ''
),
(
  'az-900-question-042', 'az-900', 42, 'Your company hosts an accounting application named App1 that is used by all the customers of the company. App1 has low usage during the first three weeks of each month and very high usage during the last week of each month. Which benefit of Azure Cloud Services supports cost management for this type of usage pattern?',
  '[{"key":"A","text":"high availability"},{"key":"B","text":"high latency"},{"key":"C","text":"elasticity"},{"key":"D","text":"load balancing"}]'::jsonb, ARRAY['C']::text[],
  'Đáp án đúng: C - độ co giãn. Độ co giãn trong trường hợp này là khả năng cung cấp tài nguyên tính toán bổ sung khi cần thiết và giảm tài nguyên tính toán khi không cần thiết để giảm chi phí. Tự động chia tỷ lệ là một ví dụ về tính đàn hồi. Điện toán đàn hồi là khả năng nhanh chóng mở rộng hoặc giảm bớt tài nguyên xử lý, bộ nhớ và lưu trữ của máy tính để đáp ứng nhu cầu thay đổi mà không phải lo lắng về việc lập kế hoạch công suất và kỹ thuật để sử dụng vào lúc cao điểm. Thường được kiểm soát bởi các công cụ giám sát hệ thống, điện toán đàn hồi phù hợp với lượng tài nguyên được phân bổ cho lượng tài nguyên thực sự cần thiết mà không làm gián đoạn hoạt động.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Benefits', 'Storage', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-043', 'az-900', 43, 'You plan to migrate a web application to Azure. The web application is accessed by external users. You need to recommend a cloud deployment solution to minimize the amount of administrative effort used to manage the web application. What should you include in the recommendation?',
  '[{"key":"A","text":"Software as a Service (SaaS)"},{"key":"B","text":"Platform as a Service (PaaS)"},{"key":"C","text":"Infrastructure as a Service (IaaS)"},{"key":"D","text":"Database as a Service (DaaS)"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Platform as a Service (PaaS). Từ khóa là "di chuyển" và "quản trị" Azure App Service là sản phẩm nền tảng dưới dạng dịch vụ (PaaS) cho phép bạn tạo ứng dụng web và thiết bị di động cho mọi nền tảng hoặc thiết bị và kết nối với dữ liệu ở mọi nơi, trên đám mây hoặc tại chỗ. Dịch vụ ứng dụng bao gồm các tính năng web và di động trước đây được phân phối riêng biệt dưới dạng Trang web Azure và Dịch vụ di động Azure.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Service Models', 'Compute']::text[],
  ''
),
(
  'az-900-question-044', 'az-900', 44, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Azure virtual machines: Y","correctAnswer":"A"}],"choices":[{"key":"A","text":"Infrastructure as a service (IaaS)"},{"key":"B","text":"Platform as a service (PaaS)"},{"key":"C","text":"Software as a service (SaaS)"}]}'::jsonb, ARRAY['1=A']::text[],
  'Hộp 1: Máy ảo Azure là Infrastructure as a Service (IaaS). Infrastructure as a Service là loại dịch vụ đám mây linh hoạt nhất. Nó nhằm mục đích cung cấp cho bạn toàn quyền kiểm soát phần cứng chạy ứng dụng của bạn (máy chủ cơ sở hạ tầng CNTT và máy ảo (VM), bộ lưu trữ, mạng và hệ điều hành). Thay vì mua phần cứng, với IaaS, bạn thuê nó. Hộp 2: Cơ sở dữ liệu Azure SQL là Platform as a Service (Paas). Cơ sở dữ liệu Azure SQL là Công cụ cơ sở dữ liệu Platform as a Service (PaaS) được quản lý hoàn toàn, xử lý hầu hết các chức năng quản lý cơ sở dữ liệu như nâng cấp, vá lỗi, sao lưu và giám sát mà không cần sự tham gia của người dùng. Hoàn thành đúng: Infrastructure as a service (IaaS).', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Service Models', 'Compute', 'Storage']::text[],
  ''
),
(
  'az-900-question-045', 'az-900', 45, 'You have an on-premises network that contains 100 servers. You need to recommend a solution that provides additional resources to your users. The solution must minimize capital and operational expenditure costs. What should you include in the recommendation?',
  '[{"key":"A","text":"a complete migration to the public cloud"},{"key":"B","text":"an additional data center"},{"key":"C","text":"a private cloud"},{"key":"D","text":"a hybrid cloud"}]'::jsonb, ARRAY['D']::text[],
  'Câu trả lời đúng: D — đám mây lai. Đáp án đúng là D – Đám mây lai. Tận dụng các tài nguyên hiện tại và tự động mở rộng quy mô trong đám mây công cộng nếu và khi cần. Đám mây lai là sự kết hợp giữa đám mây riêng và đám mây công cộng. Chi phí vốn là việc chi tiền trả trước cho cơ sở hạ tầng như máy chủ mới. Với đám mây lai, bạn có thể tiếp tục sử dụng máy chủ tại chỗ trong khi thêm máy chủ mới vào đám mây công cộng (ví dụ như Azure). Việc thêm máy chủ mới vào Azure sẽ giảm thiểu chi phí vốn vì bạn không phải trả tiền cho máy chủ mới như khi triển khai máy chủ mới tại chỗ.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Models', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-046', 'az-900', 46, 'For each statement, select Yes if it is true. Otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"To implement a hybrid cloud model, a company must have an oO internal network","correctAnswer":"No"},{"id":"2","text":"A company can extend the computing resources of its internal network [@) le) by using a hybrid cloud.","correctAnswer":"Yes"},{"id":"3","text":"In a public cloud model, only guest users at your company can access oO the resources in the cloud.","correctAnswer":"No"}],"choices":[]}'::jsonb, ARRAY['1:No', '2:Yes', '3:No']::text[],
  'Hộp 1: Không - Việc công ty phải luôn chuyển từ mô hình đám mây riêng sang triển khai đám mây lai là không đúng. Bạn có thể bắt đầu với đám mây công cộng và sau đó kết hợp nó với cơ sở hạ tầng tại chỗ để triển khai đám mây lai. Hộp 2: Có - Một công ty có thể mở rộng dung lượng của mạng nội bộ bằng cách sử dụng đám mây công cộng. Điều này rất phổ biến. Khi bạn cần thêm dung lượng, thay vì trả tiền cho cơ sở hạ tầng tại chỗ mới, bạn có thể định cấu hình môi trường đám mây và kết nối mạng tại chỗ của mình với môi trường đám mây bằng cách sử dụng VPN. Hộp 3: Không - Việc chỉ người dùng khách mới có thể truy cập tài nguyên đám mây là không đúng. Câu trả lời đúng: 1: Không; 2: Có; 3: Không.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Models', 'Networking', 'Identity and Security']::text[],
  ''
),
(
  'az-900-question-047', 'az-900', 47, 'You plan to migrate several servers from an on-premises network to Azure. What is an advantage of using a public cloud service for the servers over an on-premises network?',
  '[{"key":"A","text":"The public cloud is owned by the public, NOT a private corporation"},{"key":"B","text":"The public cloud is a crowd-sourcing solution that provides corporations with the ability to enhance the cloud"},{"key":"C","text":"All public cloud resources can be freely accessed by every member of the public"},{"key":"D","text":"The public cloud is a shared entity whereby multiple corporations each use a portion of the resources in the cloud"}]'::jsonb, ARRAY['D']::text[],
  'Câu trả lời đúng: D — Đám mây công cộng là một thực thể dùng chung, trong đó nhiều tập đoàn sử dụng một phần tài nguyên trên đám mây. Đám mây công cộng là một thực thể được chia sẻ, trong đó nhiều tập đoàn sử dụng một phần tài nguyên trên đám mây. Tài nguyên phần cứng (máy chủ, cơ sở hạ tầng, v.v.) được quản lý bởi nhà cung cấp đám mây. Nhiều công ty tạo ra các tài nguyên như máy ảo và mạng ảo trên tài nguyên phần cứng.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Models', 'Compute', 'Networking']::text[],
  ''
),
(
  'az-900-question-048', 'az-900', 48, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Azure Site Recovery provides wr for virtual machines","correctAnswer":"B"}],"choices":[{"key":"A","text":"fault tolerance"},{"key":"B","text":"disaster recovery"},{"key":"C","text":"elasticity"},{"key":"D","text":"high availability"}]}'::jsonb, ARRAY['1=B']::text[],
  'Câu trả lời là Khắc phục thảm họa. Azure Site Recovery là dịch vụ khắc phục thảm họa được cung cấp bởi Microsoft Azure, có thể được sử dụng để bảo vệ và khôi phục các máy ảo. Bạn có thể tìm thêm thông tin về dịch vụ này trên trang web Azure:. Hoàn thành đúng: khắc phục thảm họa.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Benefits', 'Compute']::text[],
  ''
),
(
  'az-900-question-049', 'az-900', 49, 'In which type of cloud model are all the hardware resources owned by a third-party and shared between multiple tenants?',
  '[{"key":"A","text":"private"},{"key":"B","text":"hybrid"},{"key":"C","text":"public"}]'::jsonb, ARRAY['C']::text[],
  'Câu trả lời đúng: C - công khai. Đám mây riêng do tổ chức nội bộ chứa nó quản lý Đám mây công cộng được bên thứ 3 chăm sóc hoàn toàn như Azure, AWS, GCP Đám mây lai kết hợp tại chỗ (riêng tư) cũng như public(3rd party)', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Models']::text[],
  ''
),
(
  'az-900-question-050', 'az-900', 50, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"An Azure web app that queries an on-premises Microsoft SQL Server is an example of a ____ cloud.","correctAnswer":"A"}],"choices":[{"key":"A","text":"hybrid"},{"key":"B","text":"multi-vendor"},{"key":"C","text":"private"},{"key":"D","text":"public"}]}'::jsonb, ARRAY['1=A']::text[],
  'Ứng dụng này trải rộng trên Azure và hệ thống tại chỗ, do đó môi trường là đám mây lai.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Models']::text[],
  ''
),
(
  'az-900-question-051', 'az-900', 51, 'You have 1,000 virtual machines hosted on the Hyper-V hosts in a data center. You plan to migrate all the virtual machines to an Azure pay-as-you-go subscription. You need to identify which expenditure model to use for the planned Azure solution. Which expenditure model should you identify?',
  '[{"key":"A","text":"operational"},{"key":"B","text":"elastic"},{"key":"C","text":"capital"},{"key":"D","text":"scalable"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A - đang hoạt động. Một trong những thay đổi lớn mà bạn sẽ phải đối mặt khi chuyển từ đám mây tại chỗ sang đám mây công cộng là việc chuyển từ chi tiêu vốn (mua phần cứng) sang chi phí vận hành (trả tiền cho dịch vụ khi bạn sử dụng). Việc chuyển đổi này cũng yêu cầu quản lý chi phí của bạn cẩn thận hơn. Lợi ích của đám mây là bạn có thể tác động cơ bản và tích cực đến chi phí của dịch vụ bạn sử dụng chỉ bằng cách tắt hoặc thay đổi kích thước dịch vụ khi không cần thiết. Các mô hình chi tiêu là CapEx hoặc OpEx (Vốn hoặc Hoạt động). CapEx là số tiền bạn trả trước, trả trước, cho máy chủ, giá đỡ, làm mát, bảo mật, cho chính Trung tâm dữ liệu.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Models', 'Cloud Benefits', 'Compute']::text[],
  ''
),
(
  'az-900-question-052', 'az-900', 52, 'Your company has an on-premises network that contains multiple servers. The company plans to reduce the following administrative responsibilities: ✑ Backing up application data ✑ Replacing failed server hardware ✑ Managing physical server security ✑ Updating server operating systems ✑ Managing permissions to shared documents The company plans to migrate servers to Azure virtual machines. You need to identify which administrative responsibilities will be eliminated after the planned migration. Which two responsibilities should you identify? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.',
  '[{"key":"A","text":"Replacing failed server hardware"},{"key":"B","text":"Backing up application data"},{"key":"C","text":"Managing physical server security"},{"key":"D","text":"Updating server operating systems"},{"key":"E","text":"Managing permissions to shared documents"}]'::jsonb, ARRAY['A', 'C']::text[],
  'Câu trả lời đúng: A — Thay thế phần cứng máy chủ bị lỗi; C – Quản lý bảo mật máy chủ vật lý. Máy ảo Azure chạy trên máy chủ vật lý Hyper-V. Các máy chủ vật lý được sở hữu và quản lý bởi Microsoft. Là khách hàng Azure, bạn không có quyền truy cập vào máy chủ vật lý. Microsoft quản lý việc thay thế phần cứng máy chủ bị lỗi và tính bảo mật của máy chủ vật lý nên bạn không cần phải làm vậy.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute']::text[],
  ''
),
(
  'az-900-question-053', 'az-900', 53, 'You plan to provision Infrastructure as a Service (IaaS) resources in Azure. Which resource is an example of IaaS?',
  '[{"key":"A","text":"an Azure web app"},{"key":"B","text":"an Azure virtual machine"},{"key":"C","text":"an Azure logic app"},{"key":"D","text":"an Azure SQL database"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — máy ảo Azure. Máy ảo Azure là một ví dụ về Infrastructure as a Service (IaaS). Ứng dụng web Azure, ứng dụng logic Azure và cơ sở dữ liệu Azure SQL đều là ví dụ về Platform as a Service (Paas).', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Service Models', 'Compute']::text[],
  ''
),
(
  'az-900-question-054', 'az-900', 54, 'To which cloud models can you deploy physical servers?',
  '[{"key":"A","text":"private cloud and hybrid cloud only"},{"key":"B","text":"private cloud only"},{"key":"C","text":"private cloud, hybrid cloud and public cloud"},{"key":"D","text":"hybrid cloud only"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A - chỉ đám mây riêng và đám mây lai. Đám mây riêng được đặt tại chỗ để bạn có thể triển khai các máy chủ vật lý. Đám mây lai là sự kết hợp giữa tài nguyên đám mây tại chỗ và đám mây công cộng. Bạn có thể triển khai các máy chủ vật lý tại chỗ.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Models']::text[],
  ''
),
(
  'az-900-question-055', 'az-900', 55, 'For each statement, select Yes if it is true. Otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"A company can extend a private cloud by adding its own physical servers to the public cloud.","correctAnswer":"No"},{"id":"2","text":"To build a hybrid cloud, an organization deploys resources across private or on-premises infrastructure and a public cloud.","correctAnswer":"Yes"},{"id":"3","text":"A private cloud must be disconnected from the internet.","correctAnswer":"No"}],"choices":[]}'::jsonb, ARRAY['1:No', '2:Yes', '3:No']::text[],
  'Đám mây công cộng không chấp nhận máy chủ vật lý do khách hàng sở hữu. Đám mây lai kết hợp các tài nguyên riêng tư/tại chỗ và đám mây công cộng, trong khi đám mây riêng vẫn có thể kiểm soát kết nối internet.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Models']::text[],
  ''
),
(
  'az-900-question-056', 'az-900', 56, 'You have 50 virtual machines hosted on-premises and 50 virtual machines hosted in Azure. The on-premises virtual machines and the Azure virtual machines connect to each other. Which type of cloud model is this?',
  '[{"key":"A","text":"hybrid"},{"key":"B","text":"private"},{"key":"C","text":"public"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A - lai. Câu trả lời đúng là A. lai. Mô hình đám mây lai kết hợp cơ sở hạ tầng nội bộ của tổ chức (đám mây riêng hoặc trung tâm dữ liệu tại chỗ) với cơ sở hạ tầng của nhà cung cấp đám mây công cộng (như Microsoft Azure, AWS hoặc Google Cloud), cho phép chia sẻ và liên lạc dữ liệu và ứng dụng giữa chúng.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Models', 'Compute']::text[],
  ''
),
(
  'az-900-question-057', 'az-900', 57, 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. Your company plans to migrate all its data and resources to Azure. The company''s migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure. You need to deploy an Azure environment that meets the company migration plan. Solution: You create Azure virtual machines, Azure SQL databases, and Azure Storage accounts. Does this meet the',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Số Platform as a service (PaaS) là môi trường triển khai và phát triển hoàn chỉnh trên đám mây. PaaS bao gồm cơ sở hạ tầng " máy chủ, lưu trữ và kết nối mạng " cũng như phần mềm trung gian, công cụ phát triển, dịch vụ thông minh kinh doanh (BI), hệ thống quản lý cơ sở dữ liệu, v.v. PaaS được thiết kế để hỗ trợ vòng đời ứng dụng web hoàn chỉnh: xây dựng, thử nghiệm, triển khai, quản lý và cập nhật. Tuy nhiên, máy ảo là ví dụ của Infrastructure as a service (IaaS). IaaS là cơ sở hạ tầng điện toán tức thời, được cung cấp và quản lý qua internet.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Service Models', 'Compute', 'Storage']::text[],
  ''
),
(
  'az-900-question-058', 'az-900', 58, 'Your company plans to deploy several custom applications to Azure. The applications will provide invoicing services to the customers of the company. Each application will have several prerequisite applications and services installed. You need to recommend a cloud deployment solution for all the applications. What should you recommend?',
  '[{"key":"A","text":"Software as a Service (SaaS)"},{"key":"B","text":"Platform as a Service (PaaS)"},{"key":"C","text":"Infrastructure as a Service (IaaS)"}]'::jsonb, ARRAY['C']::text[],
  'Câu trả lời đúng: C — Infrastructure as a Service (IaaS). Infrastructure as a service (IaaS) là cơ sở hạ tầng điện toán tức thời, được cung cấp và quản lý qua internet.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Service Models', 'Storage']::text[],
  ''
),
(
  'az-900-question-059', 'az-900', 59, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Azure Cosmos DB is an example of a ____ offering.","correctAnswer":"A"}],"choices":[{"key":"A","text":"platform as a service (PaaS)"},{"key":"B","text":"infrastructure as a service (IaaS)"},{"key":"C","text":"serverless computing only"},{"key":"D","text":"software as a service (SaaS)"}]}'::jsonb, ARRAY['1=A']::text[],
  'Azure Cosmos DB là nền tảng cơ sở dữ liệu được quản lý: Microsoft quản lý cơ sở hạ tầng và dịch vụ cơ sở dữ liệu trong khi khách hàng quản lý việc sử dụng dữ liệu và ứng dụng của họ.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Service Models', 'Storage']::text[],
  ''
),
(
  'az-900-question-060', 'az-900', 60, 'Your company plans to migrate all its data and resources to Azure. The company''s migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure. You need to deploy an Azure environment that meets the company''s migration plan. What should you create?',
  '[{"key":"A","text":"Azure virtual machines, Azure SQL databases, and Azure Storage accounts."},{"key":"B","text":"an Azure App Service and Azure virtual machines that have Microsoft SQL Server installed."},{"key":"C","text":"an Azure App Service and Azure SQL databases."},{"key":"D","text":"Azure storage accounts and web server in Azure virtual machines."}]'::jsonb, ARRAY['C']::text[],
  'Câu trả lời đúng: C — cơ sở dữ liệu Azure App Service và Azure SQL. Cơ sở dữ liệu Azure App Service và Azure SQL là ví dụ về giải pháp Azure PaaS. Vì vậy, giải pháp này đáp ứng được mục tiêu.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Service Models', 'Compute', 'Storage']::text[],
  ''
),
(
  'az-900-question-061', 'az-900', 61, 'What does a customer provide in a software as a service (SaaS) model?',
  '[{"key":"A","text":"application data"},{"key":"B","text":"data storage"},{"key":"C","text":"compute resources"},{"key":"D","text":"application software"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A — dữ liệu ứng dụng. SaaS cung cấp giải pháp phần mềm hoàn chỉnh mà bạn mua trên cơ sở trả tiền khi sử dụng từ nhà cung cấp dịch vụ đám mây. Bạn thuê quyền sử dụng ứng dụng cho tổ chức của mình và người dùng của bạn kết nối với ứng dụng đó qua Internet, thường bằng trình duyệt web. Tất cả cơ sở hạ tầng cơ bản, phần mềm trung gian, phần mềm ứng dụng và dữ liệu ứng dụng đều được đặt tại trung tâm dữ liệu của nhà cung cấp dịch vụ. Nhà cung cấp dịch vụ quản lý phần cứng và phần mềm và với thỏa thuận dịch vụ phù hợp, sẽ đảm bảo tính khả dụng cũng như tính bảo mật của ứng dụng cũng như dữ liệu của bạn.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Service Models', 'Storage', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-062', 'az-900', 62, 'For each statement, select Yes if it is true. Otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"Azure Files is an example of infrastructure as a service","correctAnswer":"No"},{"id":"2","text":"A DNS server that runs on an Azure virtual machine is an example of platform as a service (PaaS).","correctAnswer":"No"},{"id":"3","text":"Microsoft Intune is an example of software as a service SaaS).","correctAnswer":"Yes"}],"choices":[]}'::jsonb, ARRAY['1:No', '2:No', '3:Yes']::text[],
  '1.) Azure Files là một ví dụ về cơ sở hạ tầng dưới dạng dịch vụ (IaaS). Trả lời: Không. Azure Files thực chất là một dịch vụ lưu trữ file được quản lý, được coi là một phần của Platform as a Service (PaaS). 2.) Máy chủ DNS chạy trên máy ảo Azure là một ví dụ về nền tảng dưới dạng dịch vụ (PaaS). Trả lời: Không. Máy chủ DNS chạy trên máy ảo Azure sẽ được coi là Infrastructure as a Service (IaaS) vì nó liên quan đến việc quản lý cơ sở hạ tầng cơ bản. 3.) Microsoft Intune là một ví dụ về phần mềm dưới dạng dịch vụ (SaaS). Trả lời: Có. Microsoft Intune thực sự là Software as a Service (SaaS) vì nó cung cấp phần mềm qua internet mà không cần cài đặt cục bộ. Câu trả lời đúng: 1: Không; 2: Không; 3: Vâng.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Service Models', 'Compute', 'Networking']::text[],
  ''
),
(
  'az-900-question-063', 'az-900', 63, 'What is the first stage in the Microsoft Cloud Adoption Framework for Azure?',
  '[{"key":"A","text":"Adopt the cloud."},{"key":"B","text":"Make a plan."},{"key":"C","text":"Ready your organization."},{"key":"D","text":"Define your strategy."}]'::jsonb, ARRAY['D']::text[],
  'Câu trả lời đúng: D — Xác định chiến lược của bạn.', 'Azure Architecture and Services', ARRAY['AZ-900']::text[],
  ''
),
(
  'az-900-question-064', 'az-900', 64, 'For each statement, select Yes if it is true. Otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"You must own physical servers to use cloud computing.","correctAnswer":"No"},{"id":"2","text":"Internet or private network connectivity is required to access cloud computing services.","correctAnswer":"Yes"},{"id":"3","text":"Increasing cloud capacity is generally less capital-intensive than expanding an on-premises datacenter.","correctAnswer":"Yes"}],"choices":[]}'::jsonb, ARRAY['1:No', '2:Yes', '3:Yes']::text[],
  'Người tiêu dùng đám mây không cần sở hữu phần cứng của nhà cung cấp nhưng họ cần kết nối mạng. Việc mở rộng quy mô đám mây dựa trên mức tiêu thụ giúp tránh việc mua và cài đặt phần cứng bổ sung của trung tâm dữ liệu.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Benefits', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-065', 'az-900', 65, 'Match the cloud computing benefits to the appropriate descriptions.',
  '{"type":"matching_drag_drop","statements":[{"id":"1","text":"Resources can be provisioned dynamically to meet changing demands.","correctAnswer":"B"},{"id":"2","text":"Applications and data can be deployed to multiple regions.","correctAnswer":"C"},{"id":"3","text":"Applications can be developed, tested, and launched rapidly.","correctAnswer":"A"}],"choices":[{"key":"A","text":"Agility"},{"key":"B","text":"Scalability"},{"key":"C","text":"Geo-distribution"}]}'::jsonb, ARRAY['1=B', '2=C', '3=A']::text[],
  'Khả năng mở rộng hỗ trợ nhu cầu tài nguyên thay đổi, phân phối địa lý đặt khối lượng công việc ở nhiều khu vực và tính linh hoạt cho phép phát triển và triển khai nhanh chóng.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Benefits']::text[],
  ''
),
(
  'az-900-question-066', 'az-900', 66, 'Select the appropriate cloud service model for each application.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"App1: You must be able to modify its code while minimizing operating-system administration.","correctAnswer":"B"},{"id":"2","text":"App2: The application must interact directly with the server operating system.","correctAnswer":"A"}],"choices":[{"key":"A","text":"Infrastructure as a Service (IaaS)"},{"key":"B","text":"Platform as a Service (PaaS)"},{"key":"C","text":"Software as a Service (SaaS)"}]}'::jsonb, ARRAY['1=B', '2=A']::text[],
  'PaaS cho phép các nhà phát triển sửa đổi mã ứng dụng trong khi Microsoft quản lý hệ điều hành. Tương tác trực tiếp với hệ điều hành yêu cầu sự kiểm soát do IaaS cung cấp.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Service Models']::text[],
  ''
),
(
  'az-900-question-067', 'az-900', 67, 'You have an accounting application named App1 that uses a legacy database. You plan to move App1 to the cloud. Which service model should you use?',
  '[{"key":"A","text":"platform as a service (PaaS)"},{"key":"B","text":"infrastructure as a service (IaaS)"},{"key":"C","text":"software as a service (SaaS)"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — cơ sở hạ tầng dưới dạng dịch vụ (IaaS). IaaS khi bạn cần cài đặt phần mềm cũ. Ứng dụng dựa trên cơ sở hạ tầng đám mây " Nó di chuyển các ứng dụng tại chỗ hiện có của bạn sang nền tảng Infrastructure as a Service (IaaS) hoặc lưu trữ lại chúng. Lift & Shift là thuật ngữ phổ biến cho kiểu di chuyển này. Các chương trình sẽ gần giống với những gì trước đây nhưng giờ đây chúng sẽ có thể chạy trên máy ảo đám mây.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Service Models']::text[],
  ''
),
(
  'az-900-question-068', 'az-900', 68, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"A Microsoft SQL Server database that is hosted in the cloud and has software updates managed by Azure is an example of ____.","correctAnswer":"C"}],"choices":[{"key":"A","text":"disaster recovery as a service (DRaaS)"},{"key":"B","text":"infrastructure as a service (IaaS)"},{"key":"C","text":"platform as a service (PaaS)"},{"key":"D","text":"software as a service (SaaS)"}]}'::jsonb, ARRAY['1=C']::text[],
  'Dịch vụ cơ sở dữ liệu được quản lý tóm tắt việc bảo trì phần mềm cơ sở dữ liệu và hệ điều hành trong khi khách hàng quản lý việc sử dụng dữ liệu và ứng dụng, đó là mô hình PaaS.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Service Models']::text[],
  ''
),
(
  'az-900-question-069', 'az-900', 69, 'Which cloud computing model includes on-premises and cloud-based resources?',
  '[{"key":"A","text":"hybrid"},{"key":"B","text":"public"},{"key":"C","text":"private"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A - lai. Đám mây lai " đôi khi được gọi là đám mây lai " là môi trường điện toán kết hợp trung tâm dữ liệu tại chỗ (còn gọi là đám mây riêng) với đám mây công cộng, cho phép chia sẻ dữ liệu và ứng dụng giữa chúng. Một số người định nghĩa đám mây lai để bao gồm các cấu hình đa đám mây trong đó một tổ chức sử dụng nhiều đám mây công cộng ngoài trung tâm dữ liệu tại chỗ của họ.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Models', 'Architecture']::text[],
  ''
),
(
  'az-900-question-070', 'az-900', 70, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Autoscaling is an example of ____.","correctAnswer":"B"}],"choices":[{"key":"A","text":"agility"},{"key":"B","text":"elasticity"},{"key":"C","text":"geo-distribution"},{"key":"D","text":"predictability"}]}'::jsonb, ARRAY['1=B']::text[],
  'Độ co giãn là khả năng tự động thêm hoặc bớt tài nguyên khi nhu cầu thay đổi. Autoscaling thực hiện hành vi đó.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Benefits']::text[],
  ''
),
(
  'az-900-question-071', 'az-900', 71, 'For each statement, select Yes if it is true. Otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"Azure virtual networks deployed to the same Azure region are connected by default. Oo Oo Virtual networks created in the same resource group must have unique names. [eo","correctAnswer":"No"},{"id":"2","text":"The Azure virtual network''s address space must be unique within a subscription.","correctAnswer":"Yes"}],"choices":[]}'::jsonb, ARRAY['1:No', '2:Yes']::text[],
  'Hộp 1: Không - Bạn sẽ cần thiết lập các kết nối VNET, chẳng hạn như với tính năng ngang hàng. Lưu ý: Bạn có thể kết nối các mạng ảo với nhau bằng mạng ảo ngang hàng. Các mạng ảo này có thể nằm trong cùng một khu vực hoặc các khu vực khác nhau (còn được gọi là Global VNet ngang hàng). Khi các mạng ảo được ngang hàng, tài nguyên trong cả hai mạng ảo có thể liên lạc với nhau. Hộp 2: Có - Tất cả các loại tài nguyên Azure đều có phạm vi xác định cấp độ mà tên tài nguyên phải là duy nhất. Một tài nguyên phải có một tên duy nhất trong phạm vi của nó. Ví dụ: mạng ảo có phạm vi nhóm tài nguyên, nghĩa là chỉ có thể có một mạng có tên vnet-prod-westus-001 trong một nhóm tài nguyên nhất định. Câu trả lời đúng: 1: Không; 2: Có.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Networking', 'Architecture']::text[],
  ''
),
(
  'az-900-question-072', 'az-900', 72, 'Which term represents the ability to increase the computing capacity of a virtual machine by adding memory or CPUs?',
  '[{"key":"A","text":"agility"},{"key":"B","text":"vertical scaling"},{"key":"C","text":"horizontal scaling"},{"key":"D","text":"elasticity"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — chia tỷ lệ theo chiều dọc. Chia tỷ lệ theo chiều dọc, còn được gọi là tăng hoặc giảm tỷ lệ, có nghĩa là tăng hoặc giảm kích thước máy ảo (VM) để đáp ứng với khối lượng công việc. So sánh hành vi này với chia tỷ lệ theo chiều ngang, còn được gọi là chia tỷ lệ và chia tỷ lệ, trong đó số lượng máy ảo được thay đổi tùy thuộc vào khối lượng công việc.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Benefits', 'Compute']::text[],
  ''
),
(
  'az-900-question-073', 'az-900', 73, 'What are two benefits of cloud computing? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.',
  '[{"key":"A","text":"enables the rapid provisioning of resources"},{"key":"B","text":"has increased administrative complexity"},{"key":"C","text":"has the same configuration options as on-premises"},{"key":"D","text":"shifts capital expenditures (CAPEX) to operating expenditures (OPEX)"}]'::jsonb, ARRAY['A', 'D']::text[],
  'Câu trả lời đúng: A — cho phép cung cấp tài nguyên nhanh chóng; D — chuyển chi tiêu vốn (CAPEX) sang chi phí hoạt động (OPEX). Azure cho phép bạn xây dựng, triển khai và quản lý ứng dụng nhanh chóng và dễ dàng hơn mà không cần phải mua và/hoặc duy trì cơ sở hạ tầng cơ bản. Azure cung cấp sự linh hoạt giữa chi tiêu của CapEx và OpEx Capital tạo ra lợi ích trong một thời gian dài. Những chi tiêu này thường không thường xuyên và dẫn đến việc mua lại tài sản cố định. Xây dựng một ứng dụng có thể được coi là một khoản chi phí vốn. Ví dụ: Phiên bản dự trữ Azure (Azure RI) giúp những khách hàng tích cực nhất của Azure tiết kiệm trước các máy ảo đặt trước mức sử dụng VM dài hạn với mức giá chiết khấu bằng cách cam kết lợi ích một hoặc ba năm. Chi phí hoạt động là chi phí liên tục của hoạt động kinh doanh.', 'Cloud Concepts', ARRAY['AZ-900', 'Compute', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-074', 'az-900', 74, 'What is a feature of an Azure virtual network?',
  '[{"key":"A","text":"resource cost analysis"},{"key":"B","text":"packet inspection"},{"key":"C","text":"geo-redundancy"},{"key":"D","text":"isolation and segmentation"}]'::jsonb, ARRAY['D']::text[],
  'Câu trả lời đúng: D — cách ly và phân đoạn. các thành phần mạng bị cô lập. Được phân chia thành một hoặc nhiều mạng con. Triển khai các mẫu phân đoạn mạng trên Azure. Chiến lược phân khúc doanh nghiệp thống nhất hướng dẫn các nhóm kỹ thuật phân chia quyền truy cập một cách nhất quán bằng cách sử dụng mạng, ứng dụng, danh tính và bất kỳ biện pháp kiểm soát truy cập nào khác. Tạo phân đoạn trong phạm vi mạng của bạn bằng cách xác định chu vi. Những lý do chính để phân khúc là: Khả năng nhóm các tài sản liên quan là một phần của (hoặc hỗ trợ) hoạt động khối lượng công việc. Cô lập tài nguyên. Chính sách quản trị do tổ chức đặt ra.', 'Azure Management and Governance', ARRAY['AZ-900', 'Networking', 'Storage', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-075', 'az-900', 75, 'Match the cloud computing benefits to the appropriate descriptions.',
  '{"type":"matching_drag_drop","statements":[{"id":"1","text":"Increase the compute capacity of applications in the cloud.","correctAnswer":"D"},{"id":"2","text":"Provide a continuous user experience with no apparent downtime.","correctAnswer":"C"},{"id":"3","text":"Deploy applications to regions close to users so they receive the best experience.","correctAnswer":"B"}],"choices":[{"key":"A","text":"Disaster recovery"},{"key":"B","text":"Geo-distribution"},{"key":"C","text":"High availability"},{"key":"D","text":"Scalability"}]}'::jsonb, ARRAY['1=D', '2=C', '3=B']::text[],
  'Khả năng mở rộng giúp tăng công suất, tính sẵn sàng cao giúp giảm thiểu thời gian ngừng hoạt động và phân phối theo địa lý đặt khối lượng công việc gần người dùng ở nhiều khu vực.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Benefits']::text[],
  ''
),
(
  'az-900-question-076', 'az-900', 76, 'Which cloud computing benefit provides continuous user access to a cloud-based application with minimal downtime?',
  '[{"key":"A","text":"agility"},{"key":"B","text":"scalability"},{"key":"C","text":"elasticity"},{"key":"D","text":"high availability"}]'::jsonb, ARRAY['D']::text[],
  'Câu trả lời đúng: D – tính sẵn sàng cao. Tính sẵn sàng cao là câu trả lời duy nhất liên quan đến việc cung cấp các ứng dụng cho người dùng.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Benefits']::text[],
  ''
),
(
  'az-900-question-077', 'az-900', 77, 'You need to identify the type of failure for which an Azure Availability Zone can be used to protect access to Azure services. What should you identify?',
  '[{"key":"A","text":"a physical server failure"},{"key":"B","text":"an Azure region failure"},{"key":"C","text":"a storage failure"},{"key":"D","text":"an Azure data center failure"}]'::jsonb, ARRAY['D']::text[],
  'Câu trả lời đúng: D — lỗi trung tâm dữ liệu Azure. Vùng sẵn sàng mở rộng mức độ kiểm soát mà bạn có để duy trì tính khả dụng của các ứng dụng và dữ liệu trên máy ảo của mình. Vùng sẵn sàng là một vùng riêng biệt về mặt vật lý, trong vùng Azure. Có ba Vùng sẵn sàng cho mỗi vùng Azure được hỗ trợ. Mỗi Vùng sẵn sàng có một nguồn điện, mạng và hệ thống làm mát riêng biệt. Bằng cách kiến ​​trúc các giải pháp của bạn để sử dụng các máy ảo được sao chép trong các vùng, bạn có thể bảo vệ ứng dụng và dữ liệu của mình khỏi việc mất trung tâm dữ liệu. Nếu một vùng bị xâm phạm thì các ứng dụng và dữ liệu được sao chép sẽ ngay lập tức có sẵn ở vùng khác.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Storage', 'Architecture']::text[],
  ''
),
(
  'az-900-question-078', 'az-900', 78, 'You plan to extend your company''s network to Azure. The network contains a VPN appliance that uses an IP address of 131.107.200.1. You need to create an Azure resource that defines the VPN appliance in Azure. Which Azure resource should you create? To answer, select the appropriate resource in the answer area.',
  '{"type":"image_hotspot","choices":[{"key":"A","text":"NAT gateways","hotspot":{"x":34.9,"y":16.8,"width":62,"height":8.5}},{"key":"B","text":"Application gateways","hotspot":{"x":34.9,"y":27.2,"width":62,"height":8.5}},{"key":"C","text":"Local network gateways","hotspot":{"x":34.9,"y":37.7,"width":62,"height":8.5}},{"key":"D","text":"Virtual network gateways","hotspot":{"x":34.9,"y":48.1,"width":62,"height":8.5}}]}'::jsonb, ARRAY['C']::text[],
  'Cổng mạng cục bộ đại diện cho thiết bị VPN tại chỗ và địa chỉ IP công cộng của thiết bị đó trong Azure. Cổng mạng ảo là điểm cuối VPN phía Azure.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Networking']::text[],
  'az900/images/97.png'
),
(
  'az-900-question-079', 'az-900', 79, 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. Solution: You deploy the virtual machines to two or more resource groups. Does this meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Không. Câu hỏi này lặp lại 3 lần với các giải pháp khác nhau, đừng nhầm lẫn ở đây, tôi đang cung cấp giải thích rõ ràng: giải pháp-1: Bạn triển khai VM cho hai hoặc nhiều nhóm tài nguyên (NO) giải pháp-2: Bạn triển khai VM cho hai hoặc nhiều khu vực khả dụng Giải pháp zones(YES)-3: Bạn triển khai VM đến hoặc nhiều khu vực (N)) Nhóm tài nguyên là nơi chứa logic cho tài nguyên Azure. Khi tạo một nhóm tài nguyên, bạn chỉ định vị trí sẽ tạo nhóm tài nguyên đó. Tuy nhiên, khi bạn tạo một máy ảo và đặt nó vào nhóm tài nguyên, máy ảo vẫn có thể ở một vị trí khác (trung tâm dữ liệu khác).', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Architecture']::text[],
  ''
),
(
  'az-900-question-080', 'az-900', 80, 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. Solution: You deploy the virtual machines to a scale set. Does this meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Không. Câu trả lời này không nêu rõ rằng bộ tỷ lệ sẽ được cấu hình trên nhiều trung tâm dữ liệu nên giải pháp này không đáp ứng được mục tiêu. Bộ quy mô máy ảo Azure cho phép bạn tạo và quản lý một nhóm máy ảo cân bằng tải. Số lượng phiên bản VM có thể tự động tăng hoặc giảm để đáp ứng nhu cầu hoặc lịch trình xác định. Bộ quy mô cung cấp tính khả dụng cao cho ứng dụng của bạn và cho phép bạn quản lý, đặt cấu hình và cập nhật tập trung nhiều máy ảo. Các máy ảo trong một tập hợp quy mô có thể được triển khai trên nhiều miền cập nhật và miền lỗi để tối đa hóa tính khả dụng và khả năng phục hồi khi ngừng hoạt động do ngừng hoạt động của trung tâm dữ liệu cũng như các sự kiện bảo trì theo kế hoạch hoặc ngoài kế hoạch.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Benefits', 'Compute', 'Identity and Security']::text[],
  ''
),
(
  'az-900-question-081', 'az-900', 81, 'This question requires that you evaluate the underlined text to determine if it is correct. Resource groups provide organizations with the ability to manage the compliance of Azure resources across multiple subscriptions. Review the underlined text. If it makes the statement correct, select `No change is needed`. If the statement is incorrect, select the answer choice that makes the statement correct.',
  '[{"key":"A","text":"No change is needed"},{"key":"B","text":"Management groups"},{"key":"C","text":"Azure policies"},{"key":"D","text":"Azure App Service plans"}]'::jsonb, ARRAY['B']::text[],
  'Đáp án đúng: B – Nhóm quản lý. "Nhóm quản lý Azure là nơi quản lý việc tuân thủ trên nhiều gói đăng ký.', 'Azure Management and Governance', ARRAY['AZ-900', 'Compute', 'Architecture', 'Governance']::text[],
  ''
),
(
  'az-900-question-082', 'az-900', 82, 'Your company plans to migrate to Azure. The company has several departments. All the Azure resources used by each department will be managed by a department administrator. What are two possible techniques to segment Azure for the departments? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.',
  '[{"key":"A","text":"multiple subscriptions"},{"key":"B","text":"multiple Azure Active Directory (Azure AD) directories"},{"key":"C","text":"multiple regions"},{"key":"D","text":"multiple resource groups"}]'::jsonb, ARRAY['A', 'D']::text[],
  'Câu trả lời đúng: A — đăng ký nhiều lần; D - nhiều nhóm tài nguyên. Đăng ký Azure là nơi chứa tài nguyên Azure. Nó cũng là ranh giới cho các quyền đối với tài nguyên và thanh toán. Bạn phải trả phí hàng tháng cho tất cả tài nguyên trong gói đăng ký. Một đối tượng thuê Azure (Azure Active Directory) có thể chứa nhiều đăng ký Azure. Nhóm tài nguyên là nơi chứa các tài nguyên liên quan cho giải pháp Azure. Nhóm tài nguyên có thể bao gồm tất cả các tài nguyên cho giải pháp hoặc chỉ những tài nguyên mà bạn muốn quản lý dưới dạng nhóm. Để cho phép mỗi quản trị viên bộ phận quản lý tài nguyên Azure mà bộ phận đó sử dụng, bạn sẽ cần tạo một gói đăng ký riêng cho mỗi bộ phận.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Identity and Security', 'Architecture']::text[],
  ''
),
(
  'az-900-question-083', 'az-900', 83, 'For each statement, select Yes if it is true. Otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"A single Microsoft account can be used to manage multiple Azure subscriptions.","correctAnswer":"Yes"},{"id":"2","text":"Two Azure subscriptions can be merged into a single subscription.","correctAnswer":"No"},{"id":"3","text":"A company can use resources from multiple subscriptions.","correctAnswer":"Yes"}],"choices":[]}'::jsonb, ARRAY['1:Yes', '2:No', '3:Yes']::text[],
  'Ô 1: Có - Bạn có thể sử dụng cùng một tài khoản để quản lý nhiều thuê bao. Bạn có thể tạo đăng ký bổ sung cho tài khoản của mình trong Azure portal. Bạn có thể muốn đăng ký bổ sung để tránh đạt đến giới hạn đăng ký, tạo môi trường riêng biệt để bảo mật hoặc cách ly dữ liệu vì lý do tuân thủ. Ô 2: Không - Bạn không thể hợp nhất hai đăng ký thành một đăng ký duy nhất. Tuy nhiên, bạn có thể di chuyển một số tài nguyên Azure từ đăng ký này sang đăng ký khác. Bạn cũng có thể chuyển quyền sở hữu đăng ký và thay đổi loại thanh toán cho đăng ký. Hộp 3: Có - Một công ty có thể có nhiều đăng ký và lưu trữ tài nguyên trong các đăng ký khác nhau. Câu trả lời đúng: 1: Có; 2: Không; 3: Vâng.', 'Azure Management and Governance', ARRAY['AZ-900', 'Architecture', 'Governance', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-084', 'az-900', 84, 'You have an Azure environment that contains multiple Azure virtual machines. You plan to implement a solution that enables the client computers on your on-premises network to communicate to the Azure virtual machines. You need to recommend which Azure resources must be created for the planned solution. Which two Azure resources should you include in the recommendation? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.',
  '[{"key":"A","text":"a virtual network gateway"},{"key":"B","text":"a load balancer"},{"key":"C","text":"an application gateway"},{"key":"D","text":"a virtual network"},{"key":"E","text":"a gateway subnet"}]'::jsonb, ARRAY['A', 'E']::text[],
  'Câu trả lời đúng: A — cổng mạng ảo; E - một mạng con cổng. Nếu bạn đã có máy ảo Azure, điều này có nghĩa là bạn đã có VNet. Do đó, câu trả lời phải là Gateway Subnet và VNet Gateway Để triển khai giải pháp cho phép các máy khách trên mạng tại chỗ của bạn giao tiếp với các máy ảo Azure, bạn cần định cấu hình VPN (Mạng riêng ảo) để kết nối mạng tại chỗ với mạng ảo Azure. Thiết bị Azure VPN được gọi là Cổng mạng ảo. Cổng mạng ảo cần được đặt trong mạng con chuyên dụng trong mạng ảo Azure. Mạng con chuyên dụng này được gọi là mạng con cổng và phải được đặt tên là ''GatewaySubnet''. Lưu ý: cũng cần có mạng ảo (câu trả lời D).', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Networking']::text[],
  ''
),
(
  'az-900-question-085', 'az-900', 85, 'You attempt to create several managed Microsoft SQL Server instances in an Azure environment and receive a message that you must increase your Azure subscription limits. What should you do to increase the limits?',
  '[{"key":"A","text":"Create a service health alert"},{"key":"B","text":"Upgrade your support plan"},{"key":"C","text":"Modify an Azure policy"},{"key":"D","text":"Create a new support request"}]'::jsonb, ARRAY['D']::text[],
  'Câu trả lời đúng: D — Tạo yêu cầu hỗ trợ mới. Nhiều tài nguyên Azure có giới hạn báo giá. Mục đích của giới hạn hạn ngạch là giúp bạn kiểm soát chi phí Azure của mình. Tuy nhiên, thông thường yêu cầu tăng hạn ngạch mặc định. Bạn có thể yêu cầu tăng giới hạn hạn ngạch bằng cách mở yêu cầu hỗ trợ. Trong yêu cầu hỗ trợ, hãy chọn ''Giới hạn dịch vụ và đăng ký (hạn ngạch)'' cho Loại sự cố, chọn đăng ký của bạn và dịch vụ bạn muốn tăng hạn ngạch. Đối với câu hỏi này, bạn sẽ chọn ''Phiên bản được quản lý cơ sở dữ liệu SQL'' làm loại báo giá.', 'Azure Management and Governance', ARRAY['AZ-900', 'Architecture', 'Cost Management', 'Governance']::text[],
  ''
),
(
  'az-900-question-086', 'az-900', 86, 'You plan to create an Azure virtual machine. You need to identify which storage service must be used to store the unmanaged data disks of the virtual machine. What should you identify? To answer, select the appropriate service in the answer area.',
  '{"type":"image_hotspot","choices":[{"key":"A","text":"Blob containers","hotspot":{"x":8.5,"y":17,"width":44,"height":38}},{"key":"B","text":"Azure file shares","hotspot":{"x":54.2,"y":17,"width":44.2,"height":38}},{"key":"C","text":"Azure Table Storage","hotspot":{"x":8.5,"y":59.3,"width":44,"height":38}},{"key":"D","text":"Azure Queue Storage","hotspot":{"x":54.2,"y":59.3,"width":44.2,"height":38}}]}'::jsonb, ARRAY['A']::text[],
  'Đĩa máy ảo Azure không được quản lý được lưu trữ dưới dạng các đốm màu trang trong vùng chứa blob. Đĩa được quản lý Azure trừu tượng hóa tài khoản lưu trữ từ người dùng.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Storage', 'Compute']::text[],
  'az900/images/109.png'
),
(
  'az-900-question-087', 'az-900', 87, 'Your company plans to move several servers to Azure. The company''s compliance policy states that a server named FinServer must be on a separate network segment. You are evaluating which Azure services can be used to meet the compliance policy requirements. Which Azure solution should you recommend?',
  '[{"key":"A","text":"a resource group for FinServer and another resource group for all the other servers"},{"key":"B","text":"a virtual network for FinServer and another virtual network for all the other servers"},{"key":"C","text":"a VPN for FinServer and a virtual network gateway for each other server"},{"key":"D","text":"one resource group for all the servers and a resource lock for FinServer"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — một mạng ảo cho FinServer và một mạng ảo khác cho tất cả các máy chủ khác. Mạng trong Azure được gọi là mạng ảo. Một mạng ảo có thể có nhiều không gian địa chỉ IP và nhiều mạng con. Azure tự động định tuyến lưu lượng giữa các mạng con khác nhau trong mạng ảo. Câu hỏi nêu rõ rằng FinServer phải nằm trên một phân đoạn mạng riêng biệt. Cách duy nhất để tách FinServer khỏi các máy chủ khác về mặt mạng là đặt máy chủ đó vào một mạng ảo khác với các máy chủ khác.', 'Azure Management and Governance', ARRAY['AZ-900', 'Networking', 'Architecture', 'Governance']::text[],
  ''
),
(
  'az-900-question-088', 'az-900', 88, 'You plan to map a network drive from several computers that run Windows 10 to Azure Storage. You need to create a storage solution in Azure for the planned mapped drive. What should you create?',
  '[{"key":"A","text":"an Azure SQL database"},{"key":"B","text":"a virtual machine data disk"},{"key":"C","text":"a File service in a storage account"},{"key":"D","text":"a Blob service in a storage account"}]'::jsonb, ARRAY['C']::text[],
  'Câu trả lời đúng: C — Dịch vụ tệp trong tài khoản lưu trữ. Azure Files là hệ thống tệp đám mây dễ sử dụng của Microsoft. Chia sẻ tệp Azure có thể được sử dụng liền mạch trong Windows và Windows Server. Để sử dụng tính năng chia sẻ tệp Azure với Windows, bạn phải gắn kết nó, nghĩa là gán cho nó một ký tự ổ đĩa hoặc đường dẫn điểm gắn kết hoặc truy cập nó thông qua đường dẫn UNC của nó. Không giống như các chia sẻ SMB khác mà bạn có thể đã tương tác, chẳng hạn như các chia sẻ được lưu trữ trên Windows Server, máy chủ Linux Samba hoặc thiết bị NAS, chia sẻ tệp Azure hiện không hỗ trợ xác thực Kerberos với danh tính Active Directory (AD) hoặc Azure Active Directory (AAD) của bạn, mặc dù đây là một tính năng chúng tôi đang nghiên cứu.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Storage', 'Identity and Security']::text[],
  ''
),
(
  'az-900-question-089', 'az-900', 89, 'You plan to implement an Azure database solution. You need to implement a database solution that meets the following requirements: ✑ Can add data concurrently from multiple regions ✑ Can store JSON documents Which database service should you deploy? To answer, select the appropriate service in the answer area.',
  '{"type":"image_hotspot","choices":[{"key":"A","text":"Azure SQL Database","hotspot":{"x":51.5,"y":9.7,"width":47.5,"height":9}},{"key":"B","text":"Azure Cosmos DB","hotspot":{"x":1.1,"y":9.7,"width":47.8,"height":9}},{"key":"C","text":"Azure Database for MySQL","hotspot":{"x":1.1,"y":21,"width":47.8,"height":9}},{"key":"D","text":"Azure Cache for Redis","hotspot":{"x":1.1,"y":54.5,"width":47.8,"height":9}}]}'::jsonb, ARRAY['B']::text[],
  'Azure Cosmos DB là cơ sở dữ liệu phân tán toàn cầu hỗ trợ ghi nhiều vùng, truy cập có độ trễ thấp và mở rộng quy mô linh hoạt.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Storage']::text[],
  'az900/images/112.png'
),
(
  'az-900-question-090', 'az-900', 90, 'Your company plans to start using Azure and will migrate all its network resources to Azure. You need to start the planning process by exploring Azure. What should you create first?',
  '[{"key":"A","text":"a subscription"},{"key":"B","text":"a resource group"},{"key":"C","text":"a virtual network"},{"key":"D","text":"a management group"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A - đăng ký. Điều đầu tiên bạn tạo trong Azure là đăng ký. Bạn có thể coi đăng ký Azure là ''tài khoản Azure''. Bạn nhận được hóa đơn cho mỗi đăng ký. Đăng ký là một thỏa thuận với Microsoft để sử dụng một hoặc nhiều nền tảng hoặc dịch vụ đám mây của Microsoft, trong đó phí tích lũy dựa trên phí giấy phép cho mỗi người dùng hoặc mức tiêu thụ tài nguyên dựa trên đám mây. ✑ Các dịch vụ đám mây dựa trên Software as a Service (SaaS) của Microsoft (Office 365, Intune/EMS và Dynamics 365) tính phí giấy phép theo mỗi người dùng. ✑ Dịch vụ đám mây Platform as a Service (PaaS) và Infrastructure as a Service (IaaS) (Azure) của Microsoft tính phí dựa trên mức tiêu thụ tài nguyên đám mây.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Service Models', 'Networking', 'Architecture']::text[],
  ''
),
(
  'az-900-question-091', 'az-900', 91, 'Which Azure service should you use to collect events from multiple resources into a centralized repository?',
  '[{"key":"A","text":"Azure Event Hubs"},{"key":"B","text":"Azure Analysis Services"},{"key":"C","text":"Azure Monitor"},{"key":"D","text":"Azure Stream Analytics"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A — Trung tâm sự kiện Azure. từ khóa là "sự kiện" chứ không phải bất kỳ dữ liệu đo từ xa nào. "Trung tâm sự kiện Azure — Nền tảng truyền dữ liệu lớn và dịch vụ nhập sự kiện"', 'Azure Management and Governance', ARRAY['AZ-900', 'Identity and Security', 'Monitoring']::text[],
  ''
),
(
  'az-900-question-092', 'az-900', 92, 'For each statement, select Yes if it is true. Otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"Data that is stored in an Azure Storage account automatically has at least three copies.","correctAnswer":"Yes"},{"id":"2","text":"All data that is copied to an Azure Storage account is backed up automatically to another Azure data center. An Azure Storage account can contain up to 2 TB of data and up to one million files. (0) (a)","correctAnswer":"No"}],"choices":[]}'::jsonb, ARRAY['1:Yes', '2:No']::text[],
  'Hộp 1: Có - Có nhiều tùy chọn sao chép khác nhau dành cho tài khoản lưu trữ. Tùy chọn sao chép ''tối thiểu'' là Bộ nhớ dự phòng cục bộ (LRS). Với LRS, dữ liệu được sao chép đồng bộ ba lần trong vùng chính. Hộp 2: Không - Dữ liệu không được sao lưu tự động sang Trung tâm dữ liệu Azure khác mặc dù điều này có thể tùy thuộc vào tùy chọn sao chép được định cấu hình cho tài khoản. Bộ lưu trữ dự phòng cục bộ (LRS) là mặc định duy trì ba bản sao dữ liệu trong trung tâm dữ liệu. Bộ lưu trữ dự phòng địa lý (GRS) có khả năng sao chép giữa các khu vực để bảo vệ khỏi tình trạng ngừng hoạt động trong khu vực. Câu trả lời đúng: 1: Có; 2: Không.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Storage', 'Architecture']::text[],
  ''
),
(
  'az-900-question-093', 'az-900', 93, 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. Solution: You deploy the virtual machines to two or more scale sets. Does this meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Không. Tập khả dụng là một nhóm logic các máy ảo trong trung tâm dữ liệu. Bạn sẽ phải sử dụng các vùng sẵn có. Do đó đáp án B. Câu trả lời này không chỉ rõ rằng bộ tỷ lệ sẽ được định cấu hình trên nhiều trung tâm dữ liệu nên giải pháp này không đáp ứng được mục tiêu. Bộ quy mô máy ảo Azure cho phép bạn tạo và quản lý một nhóm máy ảo cân bằng tải. Số lượng phiên bản VM có thể tự động tăng hoặc giảm để đáp ứng nhu cầu hoặc lịch trình xác định. Bộ quy mô cung cấp tính khả dụng cao cho ứng dụng của bạn và cho phép bạn quản lý, đặt cấu hình và cập nhật tập trung nhiều máy ảo.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Benefits', 'Compute', 'Identity and Security']::text[],
  ''
),
(
  'az-900-question-094', 'az-900', 94, 'You need to be notified when Microsoft plans to perform maintenance that can affect the resources deployed to an Azure subscription. What should you use?',
  '[{"key":"A","text":"Azure Monitor"},{"key":"B","text":"Azure Service Health"},{"key":"C","text":"Azure Advisor"},{"key":"D","text":"Microsoft Trust Center"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Azure Service Health. Azure Service Health cung cấp chế độ xem được cá nhân hóa về tình trạng của các dịch vụ Azure và khu vực bạn đang sử dụng. Đây là nơi tốt nhất để tìm kiếm các thông tin liên lạc ảnh hưởng đến dịch vụ về việc ngừng hoạt động, các hoạt động bảo trì theo kế hoạch và các tư vấn về tình trạng khác vì trải nghiệm Tình trạng dịch vụ đã được xác thực sẽ biết bạn hiện đang sử dụng dịch vụ và tài nguyên nào.', 'Azure Management and Governance', ARRAY['AZ-900', 'Architecture', 'Monitoring']::text[],
  ''
),
(
  'az-900-question-095', 'az-900', 95, 'For each statement, select Yes if it is true. Otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"A Windows Virtual Desktop session host can run Windows 10 only.","correctAnswer":"No"},{"id":"2","text":"A Windows Virtual Desktop host pool that includes 20 session hosts supports a maximum of 20 simultaneous user connections.","correctAnswer":"No"},{"id":"3","text":"Windows Virtual Desktop supports desktop and application virtualization.","correctAnswer":"Yes"}],"choices":[]}'::jsonb, ARRAY['1:No', '2:No', '3:Yes']::text[],
  'Nhận định 1 và 2 sai, nhận định 3 đúng. Session host không chỉ giới hạn ở Windows 10 mà có thể chạy các hệ điều hành Windows được hỗ trợ. Một host pool có thể phục vụ nhiều phiên người dùng trên mỗi session host tùy cấu hình và năng lực. Windows Virtual Desktop hỗ trợ cả ảo hóa desktop lẫn ứng dụng.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute']::text[],
  ''
),
(
  'az-900-question-096', 'az-900', 96, 'For each statement, select Yes if it is true. Otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"An Azure subscription can have multiple account administrators.","correctAnswer":"No"},{"id":"2","text":"An Azure subscription can be managed only by using a Microsoft account.","correctAnswer":"No"},{"id":"3","text":"An Azure resource group can contain resources from multiple Azure subscriptions.","correctAnswer":"No"}],"choices":[]}'::jsonb, ARRAY['1:No', '2:No', '3:No']::text[],
  'Cả ba nhận định đều sai. Một subscription chỉ có một Account Administrator, dù có thể cấp thêm vai trò quản trị khác. Subscription có thể được quản lý bằng tài khoản Microsoft hoặc tài khoản tổ chức trong Microsoft Entra ID khi được cấp quyền. Mỗi resource group thuộc duy nhất một subscription và không thể chứa tài nguyên từ subscription khác.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Architecture', 'Identity and Security']::text[],
  ''
),
(
  'az-900-question-097', 'az-900', 97, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"An Azure region v","correctAnswer":"B"}],"choices":[{"key":"A","text":"contains one or more data centers that are connected by"},{"key":"B","text":"using a low-latency network."},{"key":"C","text":"is found in each country where Microsoft has a"},{"key":"D","text":"subsidiary office."},{"key":"E","text":"can be found in every country in Europe and the"},{"key":"F","text":"Americas only."},{"key":"G","text":"using a high-latency network."}]}'::jsonb, ARRAY['1=B']::text[],
  'Vùng là một tập hợp các trung tâm dữ liệu được triển khai trong phạm vi được xác định về độ trễ và được kết nối thông qua mạng có độ trễ thấp dành riêng cho khu vực. Microsoft Azure hiện có 55 khu vực trên toàn thế giới. Các khu vực được chia thành các Vùng sẵn sàng. Vùng sẵn sàng là các vị trí riêng biệt về mặt vật lý trong khu vực Azure. Mỗi Vùng sẵn sàng được tạo thành từ một hoặc nhiều trung tâm dữ liệu được trang bị nguồn điện, hệ thống làm mát và kết nối mạng độc lập. Hoàn thành đúng: sử dụng mạng có độ trễ thấp.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Architecture']::text[],
  ''
),
(
  'az-900-question-098', 'az-900', 98, 'You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines remain available if a single data center fails. What are two possible solutions? Each correct answer presents a complete solution.',
  '[{"key":"A","text":"Deploy the virtual machines to two or more availability zones."},{"key":"B","text":"Deploy the virtual machines to two or more resource groups."},{"key":"C","text":"Deploy the virtual machines to a scale set."},{"key":"D","text":"Deploy the virtual machines to two or more regions."}]'::jsonb, ARRAY['A', 'D']::text[],
  'Câu trả lời đúng: A — Triển khai các máy ảo đến hai hoặc nhiều vùng khả dụng. D — Triển khai các máy ảo đến hai vùng trở lên. A. Triển khai các máy ảo đến hai hoặc nhiều vùng khả dụng (Chính xác): Vùng sẵn sàng Azure là một vị trí thực tế duy nhất trong vùng Azure. Mỗi vùng được tạo thành từ một hoặc nhiều trung tâm dữ liệu được trang bị cơ sở hạ tầng mạng, làm mát và nguồn điện độc lập. Bằng cách phân phối máy ảo của bạn trên nhiều vùng khả dụng (ví dụ: Vùng 1, Vùng 2), nếu một trung tâm dữ liệu hoặc toàn bộ vùng ngừng hoạt động do mất điện hoặc lỗi cơ sở hạ tầng, các máy ảo chạy trong zone(s) khác của bạn vẫn tiếp tục khả dụng. D.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Architecture']::text[],
  ''
),
(
  'az-900-question-099', 'az-900', 99, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"You plan to deploy 20 virtual machines to an Azure environment. To ensure that a virtual machine named VMI cannot connect to the other virtual machines, VM1 must","correctAnswer":"A"}],"choices":[{"key":"A","text":"be deployed to a separate virtual network."},{"key":"B","text":"run a different operating system than the other virtual machines."},{"key":"C","text":"be deployed to a separate resource group."},{"key":"D","text":"have two network interfaces."}]}'::jsonb, ARRAY['1=A']::text[],
  'Azure tự động định tuyến lưu lượng giữa các mạng con trong mạng ảo. Do đó, tất cả các máy ảo trong mạng ảo đều có thể kết nối với các máy ảo khác trong cùng một mạng ảo. Ngay cả khi các máy ảo nằm trên các mạng con riêng biệt trong mạng ảo, chúng vẫn có thể liên lạc với nhau. Để đảm bảo một máy ảo không thể kết nối với các máy ảo khác, máy ảo đó phải được triển khai trên một mạng ảo riêng biệt. Hoàn thành đúng: được triển khai vào một mạng ảo riêng biệt.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Networking', 'Architecture']::text[],
  ''
),
(
  'az-900-question-100', 'az-900', 100, 'For each statement, select Yes if it is true. Otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"The Archive access tier is set at the storage account level. [s)","correctAnswer":"No"},{"id":"2","text":"The Hot access tier is recommended for data that is accessed o and modified frequently.","correctAnswer":"Yes"},{"id":"3","text":"The Cool access tier is recommended for long term backups. o","correctAnswer":"No"}],"choices":[]}'::jsonb, ARRAY['1:No', '2:Yes', '3:No']::text[],
  'Ô 1: KHÔNG. từ tài liệu Azure: "Chỉ có thể đặt các tầng truy cập nóng và thú vị ở cấp tài khoản. Tầng truy cập lưu trữ chỉ có thể được đặt ở cấp blob." Vui lòng xem: Câu trả lời đúng: 1: Không; 2: Có; 3: Không.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Storage']::text[],
  ''
),
(
  'az-900-question-101', 'az-900', 101, 'What is the most severe failure from which an Azure Availability Zone can be used to protect access to Azure service?',
  '[{"key":"A","text":"a physical server failure"},{"key":"B","text":"an Azure region failure"},{"key":"C","text":"a storage failure"},{"key":"D","text":"an Azure data center failure"}]'::jsonb, ARRAY['D']::text[],
  'Câu trả lời đúng: D — lỗi trung tâm dữ liệu Azure. Vùng sẵn sàng mở rộng mức độ kiểm soát mà bạn có để duy trì tính khả dụng của các ứng dụng và dữ liệu trên máy ảo của mình. Vùng sẵn sàng là một vùng riêng biệt về mặt vật lý, trong vùng Azure. Có ba Vùng sẵn sàng cho mỗi vùng Azure được hỗ trợ. Mỗi Vùng sẵn sàng có một nguồn điện, mạng và hệ thống làm mát riêng biệt. Bằng cách kiến ​​trúc các giải pháp của bạn để sử dụng các máy ảo được sao chép trong các vùng, bạn có thể bảo vệ ứng dụng và dữ liệu của mình khỏi việc mất trung tâm dữ liệu. Nếu một vùng bị xâm phạm thì các ứng dụng và dữ liệu được sao chép sẽ ngay lập tức có sẵn ở vùng khác.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Storage', 'Architecture']::text[],
  ''
),
(
  'az-900-question-102', 'az-900', 102, 'You need to purchase a third-party virtual security appliance that you will deploy to an Azure subscription. What should you use?',
  '[{"key":"A","text":"Azure subscriptions"},{"key":"B","text":"Azure Security Center"},{"key":"C","text":"Azure Marketplace"},{"key":"D","text":"Microsoft Store"}]'::jsonb, ARRAY['C']::text[],
  'Câu trả lời đúng: C — Azure Marketplace. Thẩm quyền giải quyết:', 'Azure Architecture and Services', ARRAY['AZ-900', 'Identity and Security', 'Architecture']::text[],
  ''
),
(
  'az-900-question-103', 'az-900', 103, 'Match the Azure governance feature to the correct description.',
  '{"type":"matching_drag_drop","statements":[{"id":"1","text":"Restrict which virtual machine types can be created in a subscription.","correctAnswer":"B"},{"id":"2","text":"Identify Azure resources that are associated with specific cost centers.","correctAnswer":"D"},{"id":"3","text":"Deploy a complete Azure application environment, including resources, configuration, and role assignments.","correctAnswer":"A"}],"choices":[{"key":"A","text":"Azure Blueprints"},{"key":"B","text":"Azure Policy"},{"key":"C","text":"Azure resource locks"},{"key":"D","text":"Azure tags"}]}'::jsonb, ARRAY['1=B', '2=D', '3=A']::text[],
  'Azure Policy thực thi các quy tắc tài nguyên, thẻ đính kèm siêu dữ liệu kinh doanh như trung tâm chi phí và các gói Azure Blueprints có khả năng lặp lại và triển khai quản trị.', 'Azure Management and Governance', ARRAY['AZ-900', 'Governance']::text[],
  ''
),
(
  'az-900-question-104', 'az-900', 104, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"AVAILABILITY","correctAnswer":"A"}],"choices":[{"key":"A","text":"AVAILABILITY dz AVAILABILITY"},{"key":"B","text":"ZONE 1 z ZONE 3"},{"key":"C","text":"One or more One or more"}]}'::jsonb, ARRAY['1=A']::text[],
  'Hộp: trong một vùng Azure duy nhất Các vùng sẵn sàng của Azure là các vị trí riêng biệt về mặt vật lý trong mỗi vùng Azure có khả năng chịu được các lỗi cục bộ. Hoàn thành đúng: AVAILABILITY dz AVAILABILITY.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Architecture']::text[],
  ''
),
(
  'az-900-question-105', 'az-900', 105, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"You have several virtual machines in an Azure subscription and create a new subscription. The virtual machines ____.","correctAnswer":"B"}],"choices":[{"key":"A","text":"cannot be moved to the new subscription"},{"key":"B","text":"can be moved to the new subscription"},{"key":"C","text":"can be moved only when all are in one resource group"},{"key":"D","text":"can be moved only if they run Windows Server"}]}'::jsonb, ARRAY['1=B']::text[],
  'Các tài nguyên Azure được hỗ trợ, bao gồm hầu hết các máy ảo và tài nguyên phụ thuộc của chúng, có thể được di chuyển giữa các đăng ký trong cùng một đối tượng thuê Microsoft Entra khi đáp ứng các yêu cầu di chuyển.', 'Azure Management and Governance', ARRAY['AZ-900', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-106', 'az-900', 106, 'You need to purchase a third-party virtual security appliance that you will deploy to an Azure subscription. What should you use?',
  '[{"key":"A","text":"Azure subscriptions"},{"key":"B","text":"Microsoft Defender for Cloud"},{"key":"C","text":"Azure Marketplace"},{"key":"D","text":"Microsoft Store"}]'::jsonb, ARRAY['C']::text[],
  'Câu trả lời đúng: C — Azure Marketplace. Bạn có thể truy cập các tính năng bảo mật mạng nâng cao này bằng cách sử dụng giải pháp đối tác Azure. Bạn có thể tìm thấy các giải pháp bảo mật mạng đối tác Azure mới nhất bằng cách truy cập Azure Marketplace và tìm kiếm "bảo mật" và "bảo mật mạng". Một số dịch vụ của người bán lại bên thứ ba có sẵn trên Azure Marketplace hiện sử dụng số dư Trả trước Azure trong Thỏa thuận doanh nghiệp (EA) của bạn.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Identity and Security', 'Architecture']::text[],
  ''
),
(
  'az-900-question-107', 'az-900', 107, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"____ is a highly secure IoT solution that includes a microcontroller unit and a customized Linux operating system.","correctAnswer":"D"}],"choices":[{"key":"A","text":"Azure Arc"},{"key":"B","text":"Azure IoT Central"},{"key":"C","text":"Azure IoT Hub"},{"key":"D","text":"Azure Sphere"}]}'::jsonb, ARRAY['1=D']::text[],
  'Azure Sphere kết hợp phần cứng vi điều khiển bảo mật, hệ điều hành Azure Sphere và các dịch vụ bảo mật dựa trên đám mây.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute']::text[],
  ''
),
(
  'az-900-question-108', 'az-900', 108, 'You plan to deploy a service to Azure virtual machines. You need to ensure that the service will be available if a datacenter fails. What should you use as part of the virtual machine deployment?',
  '[{"key":"A","text":"availability sets"},{"key":"B","text":"proximity placement groups"},{"key":"C","text":"host groups"},{"key":"D","text":"availability zones"}]'::jsonb, ARRAY['D']::text[],
  'Câu trả lời đúng: D — vùng sẵn sàng. Vùng sẵn sàng của Azure là các vị trí riêng biệt về mặt vật lý trong mỗi vùng Azure có khả năng chịu được các lỗi cục bộ. Lỗi có thể bao gồm từ lỗi phần mềm và phần cứng cho đến các sự kiện như động đất, lũ lụt và hỏa hoạn. Khả năng chịu lỗi đạt được nhờ tính dự phòng và sự cô lập logic của các dịch vụ Azure. Để đảm bảo khả năng phục hồi, tối thiểu có ba vùng sẵn sàng riêng biệt ở tất cả các vùng hỗ trợ vùng sẵn sàng.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Storage', 'Architecture']::text[],
  ''
),
(
  'az-900-question-109', 'az-900', 109, 'Your company has an Azure subscription that contains resources in several regions. You need to ensure that administrators can only create resources in those regions. What should you use?',
  '[{"key":"A","text":"a read-only lock"},{"key":"B","text":"an Azure policy"},{"key":"C","text":"a management group"},{"key":"D","text":"a reservation"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — chính sách Azure. Chính sách là đúng.', 'Azure Management and Governance', ARRAY['AZ-900', 'Architecture', 'Cost Management', 'Governance']::text[],
  ''
),
(
  'az-900-question-110', 'az-900', 110, 'What is the function of a Site-to-Site VPN?',
  '[{"key":"A","text":"provides a secure connection between a computer on a public network and the corporate network"},{"key":"B","text":"provides a dedicated private connection to Azure that does NOT travel over the internet"},{"key":"C","text":"provides a connection from an on-premises VPN device to an Azure VPN gateway"}]'::jsonb, ARRAY['C']::text[],
  'Câu trả lời đúng: C — cung cấp kết nối từ thiết bị VPN tại chỗ đến cổng Azure VPN. Kết nối cổng Site-to-Site VPN được sử dụng để kết nối mạng tại chỗ của bạn với mạng ảo Azure qua đường hầm IPsec/IKE (IKEv1 hoặc IKEv2) VPN. Loại kết nối này yêu cầu thiết bị VPN đặt tại chỗ có địa chỉ IP công cộng hướng ra bên ngoài được gán cho nó.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Networking']::text[],
  'az900/images/146.png'
),
(
  'az-900-question-111', 'az-900', 111, 'Match the cloud service models to the appropriate offerings.',
  '{"type":"matching_drag_drop","statements":[{"id":"1","text":"Azure App Service","correctAnswer":"B"},{"id":"2","text":"Azure virtual machines","correctAnswer":"A"},{"id":"3","text":"Microsoft Dynamics 365","correctAnswer":"C"}],"choices":[{"key":"A","text":"Infrastructure as a Service (IaaS)"},{"key":"B","text":"Platform as a Service (PaaS)"},{"key":"C","text":"Software as a Service (SaaS)"}]}'::jsonb, ARRAY['1=B', '2=A', '3=C']::text[],
  'Dịch vụ ứng dụng là nền tảng ứng dụng được quản lý (PaaS), máy ảo cung cấp khả năng kiểm soát cơ sở hạ tầng (IaaS) và Dynamics 365 là một ứng dụng được lưu trữ hoàn chỉnh (SaaS).', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Service Models']::text[],
  ''
),
(
  'az-900-question-112', 'az-900', 112, 'Match the cloud service models to the appropriate solutions.',
  '{"type":"matching_drag_drop","statements":[{"id":"1","text":"A cloud-based file server","correctAnswer":"A"},{"id":"2","text":"A cloud-based accounting system","correctAnswer":"C"},{"id":"3","text":"A cloud-based service for custom apps","correctAnswer":"B"}],"choices":[{"key":"A","text":"Infrastructure as a Service (IaaS)"},{"key":"B","text":"Platform as a Service (PaaS)"},{"key":"C","text":"Software as a Service (SaaS)"}]}'::jsonb, ARRAY['1=A', '2=C', '3=B']::text[],
  'Máy chủ tệp thường yêu cầu quyền điều khiển máy ảo (IaaS), ứng dụng kế toán sẵn sàng sử dụng là SaaS và nền tảng lưu trữ ứng dụng được quản lý là PaaS.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Service Models']::text[],
  ''
),
(
  'az-900-question-113', 'az-900', 113, 'You need to manage containers. Which two services can you use? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.',
  '[{"key":"A","text":"Azure Virtual Desktop"},{"key":"B","text":"Azure virtual machines"},{"key":"C","text":"Azure Functions"},{"key":"D","text":"Azure Container Instances"},{"key":"E","text":"Azure Kubernetes Service (AKS)"}]'::jsonb, ARRAY['D', 'E']::text[],
  'Câu trả lời đúng: D — Azure Container Instances; E — Azure Kubernetes Service (AKS). Chạy vùng chứa Docker theo yêu cầu trong môi trường Azure không có máy chủ được quản lý. Azure Container Instances là giải pháp cho mọi tình huống có thể hoạt động trong các vùng chứa biệt lập mà không cần điều phối. Chạy các ứng dụng hướng sự kiện, triển khai nhanh chóng từ quy trình phát triển vùng chứa của bạn và chạy các công việc xây dựng và xử lý dữ liệu. Bạn có thể quản lý vùng chứa trên quy mô lớn bằng dịch vụ điều phối và quản lý vùng chứa Kubernetes được quản lý hoàn toàn tích hợp với Azure Active Directory.', 'Cloud Concepts', ARRAY['AZ-900', 'Compute', 'Identity and Security', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-114', 'az-900', 114, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"When you need to delegate permissions to several Azure virtual machines simultaneously. you must deploy the Azure virtual machines","correctAnswer":"C"}],"choices":[{"key":"A","text":"to the same Azure region."},{"key":"B","text":"by using the same Azure Resource Manager template."},{"key":"C","text":"to the same resource group."},{"key":"D","text":"to the same availability zone."}]}'::jsonb, ARRAY['1=C']::text[],
  'Nhóm tài nguyên là nơi chứa logic cho tài nguyên Azure. Các nhóm tài nguyên giúp việc quản lý tài nguyên Azure dễ dàng hơn. Với nhóm tài nguyên, bạn có thể cho phép người dùng quản lý tất cả tài nguyên trong nhóm tài nguyên, chẳng hạn như máy ảo, trang web và mạng con. Các quyền bạn áp dụng cho nhóm tài nguyên sẽ áp dụng cho tất cả các tài nguyên có trong nhóm tài nguyên. Hoàn thành đúng: vào cùng một nhóm tài nguyên.', 'Azure Management and Governance', ARRAY['AZ-900', 'Compute', 'Networking', 'Architecture']::text[],
  ''
),
(
  'az-900-question-115', 'az-900', 115, 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. Solution: You deploy the virtual machines to two or more availability zones. Does this meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A – Có. Vùng sẵn sàng mở rộng mức độ kiểm soát mà bạn có để duy trì tính khả dụng của các ứng dụng và dữ liệu trên máy ảo của mình. Vùng sẵn sàng là một vùng riêng biệt về mặt vật lý, trong vùng Azure. Có ba Vùng sẵn sàng cho mỗi vùng Azure được hỗ trợ. Mỗi Vùng sẵn sàng có một nguồn điện, mạng và hệ thống làm mát riêng biệt. Bằng cách kiến ​​trúc các giải pháp của bạn để sử dụng các máy ảo được sao chép trong các vùng, bạn có thể bảo vệ ứng dụng và dữ liệu của mình khỏi việc mất trung tâm dữ liệu. Nếu một vùng bị xâm phạm thì các ứng dụng và dữ liệu được sao chép sẽ ngay lập tức có sẵn ở vùng khác.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Architecture']::text[],
  ''
),
(
  'az-900-question-116', 'az-900', 116, 'This question requires that you evaluate the underlined text to determine if it is correct. One of the benefits of Azure SQL Data Warehouse is that high availability is built into the platform. Review the underlined text. If it makes the statement correct, select `No change is needed`. If the statement is incorrect, select the answer choice that makes the statement correct.',
  '[{"key":"A","text":"No change is needed"},{"key":"B","text":"automatic scaling"},{"key":"C","text":"data compression"},{"key":"D","text":"versioning"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A – Không cần thay đổi. Kho dữ liệu Azure (hiện được gọi là Azure Synapse Analytics) là sản phẩm PaaS của Microsoft. Giống như tất cả các dịch vụ PaaS của Microsoft, Kho dữ liệu SQL cung cấp SLA có sẵn ở mức 99,9%. Microsoft có thể cung cấp độ sẵn sàng 99,9% vì nó có các tính năng có tính sẵn sàng cao được tích hợp trong nền tảng.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Service Models', 'Cloud Benefits']::text[],
  ''
),
(
  'az-900-question-117', 'az-900', 117, 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. Solution: You deploy the virtual machines to two or more regions. Does this meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A – Có. Bằng cách triển khai các máy ảo đến hai vùng trở lên, bạn đang triển khai các máy ảo tới nhiều trung tâm dữ liệu. Điều này sẽ đảm bảo rằng các dịch vụ chạy trên máy ảo luôn sẵn sàng nếu một trung tâm dữ liệu bị lỗi. Azure hoạt động ở nhiều trung tâm dữ liệu trên khắp thế giới. Các trung tâm dữ liệu này được nhóm theo các khu vực địa lý, giúp bạn linh hoạt trong việc chọn nơi xây dựng ứng dụng của mình. Bạn tạo tài nguyên Azure ở các khu vực địa lý được xác định như ''Tây Hoa Kỳ'', ''Bắc Âu'' hoặc ''Đông Nam Á''. Bạn có thể xem lại danh sách các khu vực và vị trí của họ. Trong mỗi khu vực, có nhiều trung tâm dữ liệu tồn tại để cung cấp khả năng dự phòng và tính khả dụng.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Storage', 'Architecture']::text[],
  ''
),
(
  'az-900-question-118', 'az-900', 118, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"An Azure container instance is an example of an Azure v","correctAnswer":"A"}],"choices":[{"key":"A","text":"compute service."},{"key":"B","text":"identity service."},{"key":"C","text":"networking service."},{"key":"D","text":"storage service."}]}'::jsonb, ARRAY['1=A']::text[],
  'Thuật ngữ tính toán đề cập đến mô hình lưu trữ cho các tài nguyên tính toán mà ứng dụng của bạn chạy trên đó. Đối với Azure, điều này bao gồm: Azure Container Instances. Cách nhanh nhất và đơn giản nhất để chạy vùng chứa trong Azure mà không cần phải cung cấp bất kỳ máy ảo nào cũng như không cần phải áp dụng dịch vụ cấp cao hơn. Lưu ý và cả những điều sau: Azure App Service. Dịch vụ được quản lý để lưu trữ các ứng dụng web, phần phụ trợ của ứng dụng di động, API RESTful hoặc quy trình kinh doanh tự động. Đám mây mùa xuân Azure. Một dịch vụ được quản lý được thiết kế và tối ưu hóa để lưu trữ các ứng dụng Spring Boot. Azure Kubernetes Service (AKS). Dịch vụ Kubernetes được quản lý để chạy các ứng dụng được đóng gói. Lô Azure. Hoàn thành đúng: dịch vụ tính toán.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Storage']::text[],
  ''
),
(
  'az-900-question-119', 'az-900', 119, 'At which OSI layer does ExpressRoute operate?',
  '[{"key":"A","text":"Layer 2"},{"key":"B","text":"Layer 3"},{"key":"C","text":"Layer 5"},{"key":"D","text":"Layer 7"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Lớp 3. Lớp 3 Kết nối lớp 3 giữa mạng tại chỗ của bạn và Đám mây của Microsoft thông qua nhà cung cấp kết nối. Kết nối có thể từ mạng bất kỳ đến bất kỳ (IPVPN), kết nối Ethernet điểm-điểm hoặc thông qua kết nối chéo ảo thông qua trao đổi Ethernet.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Networking']::text[],
  ''
),
(
  'az-900-question-120', 'az-900', 120, 'For each statement, select Yes if it is true. Otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"Azure resources can only access other resources in the same resource group. [0] oO If you delete a resource group, all the resources in the resource group will be deleted. Oo (6)","correctAnswer":"No"},{"id":"2","text":"A resource group can contain resources from multiple Azure regions.","correctAnswer":"Yes"}],"choices":[]}'::jsonb, ARRAY['1:No', '2:Yes']::text[],
  'Hộp 1: Không - Một tài nguyên có thể tương tác với các tài nguyên trong các nhóm tài nguyên khác. Ô 2: Có - Xóa nhóm tài nguyên sẽ xóa nhóm tài nguyên cũng như tất cả các tài nguyên trong nhóm tài nguyên đó. Điều này có thể hữu ích cho việc quản lý tài nguyên. Ví dụ: một máy ảo có một số thành phần (bản thân VM, ổ đĩa ảo, bộ điều hợp mạng, v.v.). Bằng cách đặt VM vào nhóm tài nguyên riêng, bạn có thể xóa VM cùng với tất cả các thành phần liên quan của nó bằng cách xóa nhóm tài nguyên. Một ví dụ khác là khi tạo môi trường thử nghiệm. Bạn có thể đặt toàn bộ môi trường thử nghiệm (Thành phần mạng, máy ảo, v.v.) vào một nhóm tài nguyên. Câu trả lời đúng: 1: Không; 2: Có.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Architecture']::text[],
  ''
),
(
  'az-900-question-121', 'az-900', 121, 'You plan to store 20 TB of data in Azure. The data will be accessed infrequently and visualized by using Microsoft Power BI. You need to recommend a storage solution for the data. Which two solutions should you recommend? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.',
  '[{"key":"A","text":"Azure Data Lake"},{"key":"B","text":"Azure Cosmos DB"},{"key":"C","text":"Azure SQL Data Warehouse"},{"key":"D","text":"Azure SQL Database"},{"key":"E","text":"Azure Database for PostgreSQL"}]'::jsonb, ARRAY['A', 'C']::text[],
  'Câu trả lời đúng: A — Hồ dữ liệu Azure; C - Kho dữ liệu Azure SQL. Kho dữ liệu Azure SQL hiện là Azure Synapse Analytics. Bạn có thể sử dụng Power BI để phân tích và trực quan hóa dữ liệu được lưu trữ trong Azure Data Lake và Azure SQL Data Warehouse. Azure Data Lake bao gồm tất cả các khả năng cần thiết để giúp nhà phát triển, nhà khoa học dữ liệu và nhà phân tích dễ dàng lưu trữ dữ liệu ở mọi kích thước, hình dạng và ở mọi tốc độ, đồng thời thực hiện tất cả các loại xử lý và phân tích trên các nền tảng và ngôn ngữ. Nó loại bỏ sự phức tạp của việc nhập và lưu trữ tất cả dữ liệu của bạn đồng thời giúp thiết lập và chạy nhanh hơn với các phân tích hàng loạt, phát trực tuyến và tương tác. Nó cũng tích hợp hoàn hảo với các cửa hàng hoạt động và kho dữ liệu để bạn có thể mở rộng các ứng dụng dữ liệu hiện tại.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Storage']::text[],
  ''
),
(
  'az-900-question-122', 'az-900', 122, 'Arrange the storage redundancy options from least redundant to most redundant.',
  '{"type":"matching_drag_drop","statements":[{"id":"1","text":"Position 1 — least redundant","correctAnswer":"A"},{"id":"2","text":"Position 2","correctAnswer":"B"},{"id":"3","text":"Position 3 — most redundant","correctAnswer":"C"}],"choices":[{"key":"A","text":"Locally-redundant storage (LRS)"},{"key":"B","text":"Zone-redundant storage (ZRS)"},{"key":"C","text":"Geo-redundant storage (GRS)"}]}'::jsonb, ARRAY['1=A', '2=B', '3=C']::text[],
  'LRS giữ các bản sao trong một trung tâm dữ liệu, ZRS phân phối các bản sao trên các vùng khả dụng trong một vùng và GRS sao chép dữ liệu sang một vùng thứ cấp.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Storage']::text[],
  ''
),
(
  'az-900-question-123', 'az-900', 123, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Azure Blob Storage is a","correctAnswer":"D"}],"choices":[{"key":"A","text":"data store for queuing and reliably delivering messages between applications."},{"key":"B","text":"file share that can be mapped as a network drive."},{"key":"C","text":"key/attribute store for non-relational, structured data."},{"key":"D","text":"storage service optimized for very large objects, such as video files and bitmaps."}]}'::jsonb, ARRAY['1=D']::text[],
  'Bộ lưu trữ Azure Blob chủ yếu được sử dụng cho các tệp lớn không có cấu trúc như âm thanh, video, hình ảnh, tệp sao lưu, v.v. Hoàn thành đúng: dịch vụ lưu trữ được tối ưu hóa cho các đối tượng rất lớn, chẳng hạn như tệp video và ảnh bitmap.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Storage']::text[],
  ''
),
(
  'az-900-question-124', 'az-900', 124, 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. An Azure administrator plans to run a PowerShell script that creates Azure resources. You need to recommend which computer configuration to use to run the script. Solution: Run the script from a computer that runs Linux and has the Azure CLI tools installed. Does this meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Không. Tập lệnh PowerShell là một tệp chứa mã và lệnh ghép ngắn PowerShell. Tập lệnh PowerShell cần được chạy trong PowerShell. PowerShell hiện có thể được cài đặt trên Linux. Tuy nhiên, câu hỏi nêu rõ rằng máy tính có công cụ Azure CLI, chưa cài đặt PowerShell. Vì vậy, giải pháp này không đạt được mục tiêu.', 'Azure Management and Governance', ARRAY['AZ-900', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-125', 'az-900', 125, 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. An Azure administrator plans to run a PowerShell script that creates Azure resources. You need to recommend which computer configuration to use to run the script. Solution: Run the script from a computer that runs Chrome OS and uses Azure Cloud Shell. Does this meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A – Có. Tập lệnh PowerShell là một tệp chứa mã và lệnh ghép ngắn PowerShell. Tập lệnh PowerShell cần được chạy trong PowerShell. Với Azure Cloud Shell, bạn có thể chạy các lệnh ghép ngắn và tập lệnh PowerShell trong trình duyệt Web. Bạn đăng nhập vào Azure Portal và chọn tùy chọn Azure Cloud Shell. Thao tác này sẽ mở phiên PowerShell trong trình duyệt Web. Azure Cloud Shell đã cài đặt mô-đun Azure PowerShell cần thiết. Lưu ý: để chạy tập lệnh PowerShell trong Azure Cloud Shell, bạn cần thay đổi thư mục lưu trữ tập lệnh PowerShell.', 'Azure Management and Governance', ARRAY['AZ-900', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-126', 'az-900', 126, 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. An Azure administrator plans to run a PowerShell script that creates Azure resources. You need to recommend which computer configuration to use to run the script. Solution: Run the script from a computer that runs macOS and has PowerShell Core 6.0 installed. Does this meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Không. Máy tính có PowerShell Core 6.0 nhưng chưa cài đặt Azure CLI. Không có đề cập đến điều đó trong câu hỏi. Bạn cần có mô-đun Azure PowerShell ngoài PowerShell để chạy các lệnh Azure, chẳng hạn như New-AzVM. Do đó, đáp án = B, Không. PowerShell Core 6.0 sẽ không mang mô-đun Azure Powershell theo mặc định. Do đó, bạn phải cài đặt mô-đun Azure PowerShell sau khi cài đặt PowerShell Core 6.0 vào máy Mac. Điều này có nghĩa là bạn cần PowerShell Core 6.0 trên máy Mac để chạy các lệnh ghép ngắn của mô-đun Azure PowerShell. Mac có Bash và không đi kèm PowerShell dành cho Máy Windows.', 'Azure Management and Governance', ARRAY['AZ-900', 'Compute', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-127', 'az-900', 127, 'Match the Azure service to the correct definition.',
  '{"type":"matching_drag_drop","statements":[{"id":"1","text":"An integrated solution for planning, developing, delivering, and operating code.","correctAnswer":"D"},{"id":"2","text":"A tool that provides guidance and recommendations to improve an Azure environment.","correctAnswer":"A"},{"id":"3","text":"Services and APIs used to build intelligent AI applications.","correctAnswer":"B"},{"id":"4","text":"Monitors the performance and usage of web applications.","correctAnswer":"C"}],"choices":[{"key":"A","text":"Azure Advisor"},{"key":"B","text":"Azure AI services"},{"key":"C","text":"Application Insights"},{"key":"D","text":"Azure DevOps"}]}'::jsonb, ARRAY['1=D', '2=A', '3=B', '4=C']::text[],
  'Azure DevOps hỗ trợ vòng đời phát triển, Advisor đề xuất tối ưu hóa, Azure AI services cung cấp khả năng AI dựng sẵn và Application Insights cung cấp giám sát hiệu suất ứng dụng.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Management Tools', 'Monitoring']::text[],
  ''
),
(
  'az-900-question-128', 'az-900', 128, 'Match each Azure data service to the appropriate description.',
  '{"type":"matching_drag_drop","statements":[{"id":"1","text":"A managed relational cloud database service.","correctAnswer":"D"},{"id":"2","text":"A cloud analytics service that uses massively parallel processing to run complex relational queries across petabytes of data.","correctAnswer":"C"},{"id":"3","text":"Runs massively parallel data-transformation and processing programs across petabytes of data.","correctAnswer":"B"},{"id":"4","text":"An open-source framework service for distributed processing and analysis of big-data sets in clusters.","correctAnswer":"A"}],"choices":[{"key":"A","text":"Azure HDInsight"},{"key":"B","text":"Azure Data Lake Analytics"},{"key":"C","text":"Azure Synapse Analytics"},{"key":"D","text":"Azure SQL Database"}]}'::jsonb, ARRAY['1=D', '2=C', '3=B', '4=A']::text[],
  'Cơ sở dữ liệu SQL là cơ sở dữ liệu quan hệ được quản lý; Synapse cung cấp phân tích MPP; Data Lake Analytics thực hiện các công việc xử lý quy mô lớn; và HDInsight lưu trữ các khung dữ liệu lớn nguồn mở.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Storage']::text[],
  ''
),
(
  'az-900-question-129', 'az-900', 129, 'Select the appropriate Azure portal blade for each task.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Monitor the health of Azure services.","correctAnswer":"A"},{"id":"2","text":"Browse available virtual machine images.","correctAnswer":"C"},{"id":"3","text":"View security and best-practice recommendations.","correctAnswer":"D"}],"choices":[{"key":"A","text":"Monitor"},{"key":"B","text":"Subscriptions"},{"key":"C","text":"Marketplace"},{"key":"D","text":"Advisor"}]}'::jsonb, ARRAY['1=A', '2=C', '3=D']::text[],
  'Azure Monitor thể hiện sức khỏe và đo từ xa, Azure Marketplace chứa các hình ảnh VM có sẵn và Azure Advisor cung cấp các đề xuất được cá nhân hóa.', 'Azure Management and Governance', ARRAY['AZ-900', 'Management Tools', 'Monitoring']::text[],
  ''
),
(
  'az-900-question-130', 'az-900', 130, 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure environment. You need to create a new Azure virtual machine from a tablet that runs the Android operating system. Solution: You use Bash in Azure Cloud Shell. Does this meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A – Có. Với Azure Cloud Shell, bạn có thể tạo máy ảo bằng Bash hoặc PowerShell. Azure Cloud Shell là một trình bao tương tác, được xác thực, có thể truy cập được bằng trình duyệt để quản lý tài nguyên Azure. Nó mang lại sự linh hoạt trong việc lựa chọn trải nghiệm shell phù hợp nhất với cách bạn làm việc, Bash hoặc PowerShell.', 'Azure Management and Governance', ARRAY['AZ-900', 'Compute', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-131', 'az-900', 131, 'You have an on-premises application that sends email notifications automatically based on a rule. You plan to migrate the application to Azure. You need to recommend a serverless computing solution for the application. What should you include in the recommendation?',
  '[{"key":"A","text":"a web app"},{"key":"B","text":"a server image in Azure Marketplace"},{"key":"C","text":"a logic app"},{"key":"D","text":"an API app"}]'::jsonb, ARRAY['C']::text[],
  'Câu trả lời đúng: C — một ứng dụng logic. Ứng dụng Azure Logic là dịch vụ đám mây giúp bạn lên lịch, tự động hóa và điều phối các tác vụ, quy trình kinh doanh và quy trình công việc khi bạn cần tích hợp ứng dụng, dữ liệu, hệ thống và dịch vụ trên toàn doanh nghiệp hoặc tổ chức. Ứng dụng Logic đơn giản hóa cách bạn thiết kế và xây dựng các giải pháp có thể mở rộng để tích hợp ứng dụng, tích hợp dữ liệu, tích hợp hệ thống, tích hợp ứng dụng doanh nghiệp (EAI) và giao tiếp giữa doanh nghiệp với doanh nghiệp (B2B), cho dù trên đám mây, tại cơ sở hay cả hai. Ví dụ: đây chỉ là một số khối lượng công việc bạn có thể tự động hóa bằng ứng dụng logic: ✑ Xử lý và định tuyến đơn hàng trên các hệ thống tại chỗ và dịch vụ đám mây.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Benefits']::text[],
  ''
),
(
  'az-900-question-132', 'az-900', 132, 'You plan to deploy a website to Azure. The website will be accessed by users worldwide and will host large video files. You need to recommend which Azure feature must be used to provide the best video playback experience. What should you recommend?',
  '[{"key":"A","text":"an application gateway"},{"key":"B","text":"an Azure ExpressRoute circuit"},{"key":"C","text":"a content delivery network (CDN)"},{"key":"D","text":"an Azure Traffic Manager profile"}]'::jsonb, ARRAY['C']::text[],
  'Câu trả lời đúng: C — mạng phân phối nội dung (CDN). Câu hỏi nêu rõ rằng người dùng ở khắp nơi trên thế giới và sẽ tải xuống các tệp video lớn. Trải nghiệm phát lại video sẽ được cải thiện nếu họ có thể tải xuống video từ máy chủ trong cùng khu vực với người dùng. Chúng tôi có thể đạt được điều này bằng cách sử dụng mạng phân phối nội dung. Mạng phân phối nội dung (CDN) là mạng phân tán gồm các máy chủ có thể phân phối nội dung web cho người dùng một cách hiệu quả. CDN lưu trữ nội dung được lưu trong bộ nhớ đệm trên các máy chủ biên tại các vị trí điểm hiện diện (POP) gần với người dùng cuối để giảm thiểu độ trễ.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Networking', 'Architecture']::text[],
  ''
),
(
  'az-900-question-133', 'az-900', 133, 'Your company plans to deploy several million sensors that will upload data to Azure. You need to identify which Azure resources must be created to support the planned solution. Which two Azure resources should you identify? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.',
  '[{"key":"A","text":"Azure Data Lake"},{"key":"B","text":"Azure Queue storage"},{"key":"C","text":"Azure File Storage"},{"key":"D","text":"Azure IoT Hub"},{"key":"E","text":"Azure Notification Hubs"}]'::jsonb, ARRAY['A', 'D']::text[],
  'Câu trả lời đúng: A — Hồ dữ liệu Azure; D — Azure IoT Hub. IoT Hub (Internet of Things Hub) cung cấp dữ liệu từ hàng triệu cảm biến. IoT Hub là một dịch vụ được quản lý, được lưu trữ trên đám mây, hoạt động như một trung tâm nhắn tin trung tâm để liên lạc hai chiều giữa ứng dụng IoT của bạn và các thiết bị mà nó quản lý. Bạn có thể sử dụng Azure IoT Hub để xây dựng các giải pháp IoT với khả năng liên lạc đáng tin cậy và an toàn giữa hàng triệu thiết bị IoT và chương trình phụ trợ giải pháp được lưu trữ trên đám mây. Bạn có thể kết nối hầu như mọi thiết bị với IoT Hub. Có hai dịch vụ lưu trữ IoT Hub có thể định tuyến tin nhắn tới -- tài khoản Azure Blob Storage và Azure Data Lake Storage Gen2 (ADLS Gen2).', 'Azure Architecture and Services', ARRAY['AZ-900', 'Storage', 'Identity and Security']::text[],
  ''
),
(
  'az-900-question-134', 'az-900', 134, 'You have an Azure web app. You need to manage the settings of the web app from an iPhone. What are two Azure management tools that you can use? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.',
  '[{"key":"A","text":"Azure CLI"},{"key":"B","text":"the Azure portal"},{"key":"C","text":"Azure Cloud Shell"},{"key":"D","text":"Windows PowerShell"},{"key":"E","text":"Azure Storage Explorer"}]'::jsonb, ARRAY['B', 'C']::text[],
  'Câu trả lời đúng: B — Azure portal; C — Azure Cloud Shell. Azure portal là cổng dựa trên web để quản lý Azure. Dựa trên web, bạn có thể sử dụng Azure portal trên iPhone. Azure Cloud Shell là dòng lệnh dựa trên web để quản lý Azure. Bạn truy cập Azure Cloud Shell từ Azure portal. Dựa trên web, bạn có thể sử dụng Azure Cloud Shell trên iPhone.', 'Azure Management and Governance', ARRAY['AZ-900', 'Storage', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-135', 'az-900', 135, 'Your company plans to deploy an Artificial Intelligence (AI) solution in Azure. What should the company use to build, test, and deploy predictive analytics solutions?',
  '[{"key":"A","text":"Azure Logic Apps"},{"key":"B","text":"Azure Machine Learning Designer"},{"key":"C","text":"Azure Batch"},{"key":"D","text":"Azure Cosmos DB"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Nhà thiết kế Azure Machine Learning. Nhà thiết kế Azure Machine Learning cho phép bạn kết nối trực quan các bộ dữ liệu và mô-đun trên canvas tương tác để tạo các mô hình học máy.', 'Azure Architecture and Services', ARRAY['AZ-900']::text[],
  ''
),
(
  'az-900-question-136', 'az-900', 136, 'What can you use to automatically send an alert if an administrator stops an Azure virtual machine?',
  '[{"key":"A","text":"Azure Advisor"},{"key":"B","text":"Azure Service Health"},{"key":"C","text":"Azure Monitor"},{"key":"D","text":"Azure Network Watcher"}]'::jsonb, ARRAY['C']::text[],
  'Câu trả lời đúng: C — Azure Monitor. Azure Monitor là câu trả lời đúng. Azure Service Health cung cấp tình trạng/trạng thái của dịch vụ Azure.', 'Azure Management and Governance', ARRAY['AZ-900', 'Compute', 'Monitoring']::text[],
  ''
),
(
  'az-900-question-137', 'az-900', 137, 'Match the Azure services to the correct descriptions.',
  '{"type":"matching_drag_drop","statements":[{"id":"1","text":"Provides a cloud-based enterprise data warehouse.","correctAnswer":"B"},{"id":"2","text":"Uses past training data to provide predictions with high probability.","correctAnswer":"A"},{"id":"3","text":"Provides serverless computing functionality.","correctAnswer":"D"},{"id":"4","text":"Processes data from millions of sensors and devices.","correctAnswer":"C"}],"choices":[{"key":"A","text":"Azure Machine Learning"},{"key":"B","text":"Azure Synapse Analytics"},{"key":"C","text":"Azure IoT Hub"},{"key":"D","text":"Azure Functions"}]}'::jsonb, ARRAY['1=B', '2=A', '3=D', '4=C']::text[],
  'Synapse hỗ trợ phân tích doanh nghiệp, Machine Learning đào tạo các mô hình dự đoán, Functions chạy mã serverless theo sự kiện và IoT Hub kết nối và nhập dữ liệu từ nhóm thiết bị lớn.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute']::text[],
  ''
),
(
  'az-900-question-138', 'az-900', 138, 'You have an Azure environment. You need to create a new Azure virtual machine from a tablet that runs the Android operating system. What are three possible solutions? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.',
  '[{"key":"A","text":"Use Bash in Azure Cloud Shell."},{"key":"B","text":"Use PowerShell in Azure Cloud Shell."},{"key":"C","text":"Use the PowerApps portal."},{"key":"D","text":"Use the Security & Compliance admin center."},{"key":"E","text":"Use the Azure portal."}]'::jsonb, ARRAY['A', 'B', 'E']::text[],
  'Câu trả lời đúng: A — Sử dụng Bash trong Azure Cloud Shell. B — Sử dụng PowerShell trong Azure Cloud Shell. E — Sử dụng Azure portal. Thiết bị máy tính bảng Android sẽ có trình duyệt web (Chrome). Thế là đủ để kết nối với Azure portal. Azure portal cung cấp ba cách để tạo VM: ✑ Sử dụng cổng đồ họa. ✑ Sử dụng Azure Cloud Shell bằng Bash. ✑ Sử dụng Azure Cloud Shell bằng PowerShell.', 'Azure Management and Governance', ARRAY['AZ-900', 'Compute', 'Governance', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-139', 'az-900', 139, 'A team of developers at your company plans to deploy, and then remove, 50 virtual machines each week. All the virtual machines are configured by using Azure Resource Manager templates. You need to recommend which Azure service will minimize the administrative effort required to deploy and remove the virtual machines. What should you recommend?',
  '[{"key":"A","text":"Azure Reserved Virtual Machine (VM) Instances"},{"key":"B","text":"Azure DevTest Labs"},{"key":"C","text":"Azure virtual machine scale sets"},{"key":"D","text":"Azure Virtual Desktop"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Phòng thí nghiệm Azure DevTest. DevTest Labs tạo các phòng thí nghiệm bao gồm các cơ sở được cấu hình sẵn hoặc các mẫu Azure Resource Manager. Bằng cách sử dụng DevTest Labs, bạn có thể kiểm tra các phiên bản mới nhất của ứng dụng bằng cách thực hiện các tác vụ sau: ✑ Cung cấp nhanh chóng môi trường Windows và Linux bằng cách sử dụng các mẫu và tạo phẩm có thể tái sử dụng. ✑ Dễ dàng tích hợp quy trình triển khai của bạn với DevTest Labs để cung cấp môi trường theo yêu cầu. ✑ Mở rộng quy mô kiểm tra tải của bạn bằng cách cung cấp nhiều tác nhân kiểm tra và tạo môi trường được cung cấp trước để đào tạo và demo.', 'Azure Management and Governance', ARRAY['AZ-900', 'Compute', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-140', 'az-900', 140, 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription named Subscription1. You sign in to the Azure portal and create a resource group named RG1. From Azure documentation, you have the following command that creates a virtual machine named VM1. az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys You need to create VM1 in Subscription1 by using the command.',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A – Có. Lệnh có thể được chạy trong Azure Cloud Shell. Mặc dù câu hỏi này cho biết bạn chọn PowerShell thay vì Bash nhưng các lệnh Az sẽ hoạt động trong PowerShell. Azure Cloud Shell là một shell tương tác miễn phí. Nó có các công cụ Azure phổ biến được cài đặt sẵn và định cấu hình để sử dụng với tài khoản của bạn. Để mở Cloud Shell, chỉ cần chọn Dùng thử từ góc trên bên phải của khối mã. Bạn cũng có thể khởi chạy Cloud Shell trong một tab trình duyệt riêng bằng cách truy cập', 'Azure Management and Governance', ARRAY['AZ-900', 'Compute', 'Architecture', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-141', 'az-900', 141, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Computers The Azure CLI and the Azure portal Yi","correctAnswer":"A"}],"choices":[{"key":"A","text":"The Azure portal and Azure PowerShell"},{"key":"B","text":"The Azure CLI and Azure PowerShell"},{"key":"C","text":"The Azure CLI, the Azure portal, and Azure PowerShell"}]}'::jsonb, ARRAY['1=A']::text[],
  'Trước đây, Azure CLI (hoặc x-plat CLI) là tùy chọn duy nhất để quản lý đăng ký và tài nguyên Azure từ dòng lệnh trên Linux và macOS. Giờ đây với bản phát hành mã nguồn mở và đa nền tảng của PowerShell, bạn sẽ có thể quản lý tất cả tài nguyên Azure của mình từ Windows, Linux và macOS bằng công cụ bạn chọn, lệnh ghép ngắn Azure CLI hoặc Azure PowerShell. Azure portal chạy trên trình duyệt web nên có thể được sử dụng trong cả hai hệ điều hành. Hoàn thành đúng: Azure portal và Azure PowerShell.', 'Azure Management and Governance', ARRAY['AZ-900', 'Architecture', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-142', 'az-900', 142, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"You can access Compliance Manager from the v","correctAnswer":"C"}],"choices":[{"key":"A","text":"Azure Active Directory admin center"},{"key":"B","text":"Azure portal"},{"key":"C","text":"Microsoft 365 admin center"},{"key":"D","text":"Microsoft Service Trust Portal"}]}'::jsonb, ARRAY['1=C']::text[],
  'Trung tâm quản trị Microsoft 365. "Compliance Manager đã chuyển từ Service Trust Portal sang vị trí mới trong trung tâm tuân thủ Microsoft 365. Tất cả dữ liệu khách hàng đã được chuyển sang vị trí mới, vì vậy, bạn có thể tiếp tục sử dụng Compliance Manager mà không bị gián đoạn. Hãy tham khảo tài liệu Compliance Manager để biết thông tin thiết lập và tìm hiểu về các tính năng mới. Mặc dù đây là phiên bản cổ điển của Compliance Manager vẫn còn trong Service Trust Portal, tất cả người dùng được khuyến khích sử dụng Compliance Manager trong trung tâm tuân thủ Microsoft 365 Hoàn thành chính xác: Trung tâm quản trị Microsoft 365.', 'Azure Management and Governance', ARRAY['AZ-900', 'Identity and Security', 'Governance', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-143', 'az-900', 143, 'Match the Azure service to the correct description.',
  '{"type":"matching_drag_drop","statements":[{"id":"1","text":"Provides a digital online assistant with speech support.","correctAnswer":"C"},{"id":"2","text":"Uses past training data to provide predictions with high probability.","correctAnswer":"A"},{"id":"3","text":"Provides serverless computing functionality.","correctAnswer":"D"},{"id":"4","text":"Processes data from millions of sensors and devices.","correctAnswer":"B"}],"choices":[{"key":"A","text":"Azure Machine Learning"},{"key":"B","text":"Azure IoT Hub"},{"key":"C","text":"Azure Bot Service"},{"key":"D","text":"Azure Functions"}]}'::jsonb, ARRAY['1=C', '2=A', '3=D', '4=B']::text[],
  'Bot Service hỗ trợ trợ lý đàm thoại, Machine Learning tạo ra các mô hình dự đoán, Functions cung cấp khả năng thực thi không cần máy chủ và IoT Hub xử lý việc đo từ xa của thiết bị.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute']::text[],
  ''
),
(
  'az-900-question-144', 'az-900', 144, 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. An Azure administrator plans to run a PowerShell script that creates Azure resources. You need to recommend which computer configuration to use to run the script. Solution: Run the script from a computer that runs Windows 10 and has the Azure PowerShell module installed. Does this meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A – Có. Tập lệnh PowerShell là một tệp chứa mã và lệnh ghép ngắn PowerShell. Tập lệnh PowerShell cần được chạy trong PowerShell. Trong câu hỏi này, máy tính đã cài đặt mô-đun Azure PowerShell. Vì vậy, giải pháp này đáp ứng được mục tiêu.', 'Azure Management and Governance', ARRAY['AZ-900', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-145', 'az-900', 145, 'Match the Azure compute services to the correct descriptions.',
  '{"type":"matching_drag_drop","statements":[{"id":"1","text":"Provides operating-system virtualization.","correctAnswer":"C"},{"id":"2","text":"Provides a portable environment for virtualized applications.","correctAnswer":"D"},{"id":"3","text":"Is used to build, deploy, and scale web apps.","correctAnswer":"B"},{"id":"4","text":"Provides a platform for serverless code.","correctAnswer":"A"}],"choices":[{"key":"A","text":"Azure Functions"},{"key":"B","text":"Azure App Service"},{"key":"C","text":"Azure virtual machines"},{"key":"D","text":"Azure Container Instances"}]}'::jsonb, ARRAY['1=C', '2=D', '3=B', '4=A']::text[],
  'Máy ảo ảo hóa hệ điều hành, đóng gói các ứng dụng di động, Dịch vụ ứng dụng lưu trữ các ứng dụng web và Functions chạy mã phi máy chủ.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute']::text[],
  ''
),
(
  'az-900-question-146', 'az-900', 146, 'Which service provides serverless computing in Azure?',
  '[{"key":"A","text":"Azure Virtual Machines"},{"key":"B","text":"Azure Functions"},{"key":"C","text":"Azure storage account"},{"key":"D","text":"Azure dedicated hosts"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Azure Functions. Azure Functions cung cấp nền tảng cho mã không có máy chủ. Azure Functions là dịch vụ điện toán serverless cho phép bạn chạy mã kích hoạt sự kiện mà không cần phải cung cấp hoặc quản lý cơ sở hạ tầng một cách rõ ràng.', 'Cloud Concepts', ARRAY['AZ-900', 'Compute', 'Storage']::text[],
  ''
),
(
  'az-900-question-147', 'az-900', 147, 'An Azure administrator plans to run a PowerShell script that creates Azure resources. You need to recommend which computer configuration to use to run the script. Which three computers can run the script? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.',
  '[{"key":"A","text":"a computer that runs macOS and has PowerShell Core 6.0 installed."},{"key":"B","text":"a computer that runs Windows 10 and has the Azure PowerShell module installed."},{"key":"C","text":"a computer that runs Linux and has the Azure PowerShell module installed."},{"key":"D","text":"a computer that runs Linux and has the Azure CLI tools installed."},{"key":"E","text":"a computer that runs Chrome OS and uses Azure Cloud Shell."}]'::jsonb, ARRAY['B', 'C', 'E']::text[],
  'Câu trả lời đúng: B — một máy tính chạy Windows 10 và đã cài đặt mô-đun Azure PowerShell. C — một máy tính chạy Linux và đã cài đặt mô-đun Azure PowerShell. E — một máy tính chạy Chrome OS và sử dụng Azure Cloud Shell. A: sai, bạn cần Mô-đun Azure Powershell, chỉ Powershell thôi là không đủ B: đúng, bạn có Powershell và mô-đun để tạo tài nguyên Azure C: đúng, bạn có Powershell và mô-đun để tạo tài nguyên Azure D: sai, với Azure CLI bạn không thực thi tập lệnh Powershell E: đúng, từ trình duyệt bạn có thể kết nối tới Azure Portal và thực thi lệnh Azure Powershell', 'Azure Management and Governance', ARRAY['AZ-900', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-148', 'az-900', 148, 'Your company has several business units. Each business unit requires 20 different Azure resources for daily operation. All the business units require the same type of Azure resources. You need to recommend a solution to automate the creation of the Azure resources. What should you include in the recommendations?',
  '[{"key":"A","text":"Azure Resource Manager templates"},{"key":"B","text":"virtual machine scale sets"},{"key":"C","text":"the Azure API Management service"},{"key":"D","text":"management groups"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A — Mẫu Azure Resource Manager. Bạn có thể sử dụng các mẫu Azure Resource Manager để tự động tạo tài nguyên Azure. Triển khai tài nguyên thông qua các mẫu được gọi là ''Cơ sở hạ tầng dưới dạng mã''. Để triển khai cơ sở hạ tầng dưới dạng mã cho các giải pháp Azure của bạn, hãy sử dụng mẫu Azure Resource Manager. Mẫu này là tệp Ký hiệu đối tượng JavaScript (JSON) xác định cơ sở hạ tầng và cấu hình cho dự án của bạn. Mẫu sử dụng cú pháp khai báo, cho phép bạn nêu những gì bạn dự định triển khai mà không cần phải viết chuỗi lệnh lập trình để tạo ra nó. Trong mẫu, bạn chỉ định các tài nguyên cần triển khai và các thuộc tính cho các tài nguyên đó.', 'Azure Management and Governance', ARRAY['AZ-900', 'Compute', 'Architecture', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-149', 'az-900', 149, 'What can you use to identify underutilized or unused Azure virtual machines?',
  '[{"key":"A","text":"Azure Advisor"},{"key":"B","text":"Azure Cost Management + Billing"},{"key":"C","text":"Azure reservations"},{"key":"D","text":"Azure Policy"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A — Azure Advisor. Azure Advisor giúp bạn tối ưu hóa và giảm chi tiêu Azure tổng thể bằng cách xác định các tài nguyên nhàn rỗi và chưa được sử dụng đúng mức. Bạn có thể nhận đề xuất chi phí từ tab Chi phí trên bảng điều khiển Cố vấn.', 'Azure Management and Governance', ARRAY['AZ-900', 'Compute', 'Cost Management', 'Governance']::text[],
  ''
),
(
  'az-900-question-150', 'az-900', 150, 'Which node in the Azure portal should you use to assign a user the Reader role for a resource group? To answer, select the node in the answer area. NOTE: Each correct selection is worth one point.',
  '{"type":"image_hotspot","choices":[{"key":"A","text":"Overview","hotspot":{"x":0.9,"y":20.4,"width":21.5,"height":5.1}},{"key":"B","text":"Activity log","hotspot":{"x":0.9,"y":25.5,"width":21.5,"height":4.7}},{"key":"C","text":"Access control (IAM)","hotspot":{"x":0.9,"y":30.1,"width":21.5,"height":5.5}},{"key":"D","text":"Tags","hotspot":{"x":0.9,"y":35.6,"width":21.5,"height":4.5}}]}'::jsonb, ARRAY['C']::text[],
  'Việc gán vai trò cho phạm vi nhóm tài nguyên được tạo từ Kiểm soát truy cập (IAM). Vai trò Người đọc cấp quyền truy cập chỉ đọc vào các tài nguyên trong phạm vi đó.', 'Azure Management and Governance', ARRAY['AZ-900', 'Identity and Security', 'Governance']::text[],
  'az900/images/200.png'
),
(
  'az-900-question-151', 'az-900', 151, 'Match the Azure service to the correct definition. To answer, drag the appropriate Azure service from the column on the left to its description on the right. Each service may be used once, more than once, or not at all. NOTE: Each correct selection is worth one point.',
  '{"type":"matching_drag_drop","statements":[{"id":"1","text":"the platform for serverless code. Azure Functions is a serverless compute service that lets you run event-triggered code without having to explicitly provision or manage infrastructure.","correctAnswer":"A"},{"id":"2","text":"a big analysis service for machine learning. Azure Databricks is an Apache Spark-based analytics platform. The platform consists of several components including ''MLib''. Mlib is a Machine Learning library consisting of common learning algorithms and utilities, including classification, regression, clustering, collaborative filtering, dimensionality","correctAnswer":"B"}],"choices":[{"key":"A","text":"Azure Functions"},{"key":"B","text":"Azure Databricks"}]}'::jsonb, ARRAY['1=A', '2=B']::text[],
  'Serverless ---> Chức năng phân tích dữ liệu lớn ---> Các dị thường của Databricks ---> Insights Host ---> Hộp dịch vụ ứng dụng 1: Azure Functions cung cấp nền tảng cho mã serverless. Azure Functions là dịch vụ điện toán serverless cho phép bạn chạy mã kích hoạt sự kiện mà không cần phải cung cấp hoặc quản lý cơ sở hạ tầng một cách rõ ràng. Hộp 2: Azure Databricks là một dịch vụ phân tích lớn dành cho máy học. Azure Databricks là nền tảng phân tích dựa trên Apache Spark. Nền tảng này bao gồm một số thành phần bao gồm ''MLib''. Kết quả khớp chính xác: 1 — Azure Functions; 2 — Azure Databricks.', 'Cloud Concepts', ARRAY['AZ-900', 'Compute']::text[],
  ''
),
(
  'az-900-question-152', 'az-900', 152, 'A team of developers at your company plans to deploy, and then remove, 50 customized virtual machines each week. Thirty of the virtual machines run Windows Server 2016 and 20 of the virtual machines run Ubuntu Linux. You need to recommend which Azure service will minimize the administrative effort required to deploy and remove the virtual machines. What should you recommend?',
  '[{"key":"A","text":"Azure Reserved Virtual Machines (VM) Instances"},{"key":"B","text":"Azure virtual machine scale sets"},{"key":"C","text":"Azure DevTest Labs"},{"key":"D","text":"Microsoft Managed Desktop"}]'::jsonb, ARRAY['C']::text[],
  'Câu trả lời đúng: C — Phòng thí nghiệm Azure DevTest. DevTest Labs tạo các phòng thí nghiệm bao gồm các cơ sở được cấu hình sẵn hoặc các mẫu Azure Resource Manager. Bằng cách sử dụng DevTest Labs, bạn có thể kiểm tra các phiên bản mới nhất của ứng dụng bằng cách thực hiện các tác vụ sau: ✑ Cung cấp nhanh chóng môi trường Windows và Linux bằng cách sử dụng các mẫu và tạo phẩm có thể tái sử dụng. ✑ Dễ dàng tích hợp quy trình triển khai của bạn với DevTest Labs để cung cấp môi trường theo yêu cầu. ✑ Mở rộng quy mô kiểm tra tải của bạn bằng cách cung cấp nhiều tác nhân kiểm tra và tạo môi trường được cung cấp trước để đào tạo và demo.', 'Azure Management and Governance', ARRAY['AZ-900', 'Compute', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-153', 'az-900', 153, 'A support engineer plans to perform several Azure management tasks by using the Azure CLI. You install the CLI on a computer. You need to tell the support engineer which tools to use to run the CLI. Which two tools should you instruct the support engineer to use? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.',
  '[{"key":"A","text":"Command Prompt"},{"key":"B","text":"Azure Resource Explorer"},{"key":"C","text":"Windows PowerShell"},{"key":"D","text":"Windows Defender Firewall"},{"key":"E","text":"Network and Sharing Center"}]'::jsonb, ARRAY['A', 'C']::text[],
  'Câu trả lời đúng: A — Dấu nhắc lệnh; C-Windows PowerShell. Đối với Windows, Azure CLI được cài đặt qua MSI, cho phép bạn truy cập vào CLI thông qua Dấu nhắc lệnh của Windows (CMD) hoặc PowerShell.', 'Azure Management and Governance', ARRAY['AZ-900', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-154', 'az-900', 154, 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure environment. You need to create a new Azure virtual machine from a tablet that runs the Android operating system. Solution: You use PowerShell in Azure Cloud Shell. Does this meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A – Có. Azure Cloud Shell là trải nghiệm shell dựa trên trình duyệt để quản lý và phát triển tài nguyên Azure. Cloud Shell cung cấp trải nghiệm shell được định cấu hình trước, có thể truy cập bằng trình duyệt để quản lý tài nguyên Azure mà không cần phải tự mình cài đặt, lập phiên bản và bảo trì máy. Dựa trên trình duyệt, Azure Cloud Shell có thể chạy trên trình duyệt từ máy tính bảng chạy hệ điều hành Android.', 'Azure Management and Governance', ARRAY['AZ-900', 'Compute', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-155', 'az-900', 155, 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure environment. You need to create a new Azure virtual machine from a tablet that runs the Android operating system. Solution: You use the PowerApps portal. Does this meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Số powerapp:website azure Portal:vm PowerApps cho phép bạn nhanh chóng xây dựng các ứng dụng kinh doanh với ít hoặc không cần mã. Nó không được sử dụng để tạo máy ảo Azure. Vì vậy, giải pháp này không đạt được mục tiêu. Cổng thông tin PowerApps cho phép các tổ chức tạo các trang web có thể được chia sẻ với người dùng bên ngoài tổ chức của họ một cách ẩn danh hoặc thông qua nhà cung cấp thông tin đăng nhập mà họ lựa chọn như LinkedIn, Tài khoản Microsoft, các nhà cung cấp thông tin đăng nhập thương mại khác.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-156', 'az-900', 156, 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure environment. You need to create a new Azure virtual machine from a tablet that runs the Android operating system. Solution: You use the Azure portal. Does this meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A – Có. Azure portal là bảng điều khiển hợp nhất, dựa trên web, cung cấp giải pháp thay thế cho các công cụ dòng lệnh. Với Azure portal, bạn có thể quản lý đăng ký Azure của mình bằng giao diện người dùng đồ họa. Bạn có thể xây dựng, quản lý và giám sát mọi thứ từ ứng dụng web đơn giản đến triển khai đám mây phức tạp. Tạo bảng thông tin tùy chỉnh để có chế độ xem tài nguyên có tổ chức. Định cấu hình các tùy chọn trợ năng để có trải nghiệm tối ưu. Dựa trên web, Azure portal có thể chạy trên trình duyệt từ máy tính bảng chạy hệ điều hành Android.', 'Azure Management and Governance', ARRAY['AZ-900', 'Compute', 'Architecture', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-157', 'az-900', 157, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"You can manage an on-premises Windows server as an Azure resource by using hd","correctAnswer":"A"}],"choices":[{"key":"A","text":"Azure AD Connect."},{"key":"B","text":"Azure Arc."},{"key":"C","text":"an Azure Pipelines agent."},{"key":"D","text":"Azure VPN Gateway."}]}'::jsonb, ARRAY['1=A']::text[],
  'Azure Arc đơn giản hóa việc quản trị và quản lý bằng cách cung cấp nền tảng quản lý tại chỗ và đa đám mây nhất quán. Azure Arc cung cấp một cách thống nhất, tập trung để: Quản lý toàn bộ môi trường của bạn cùng nhau bằng cách chiếu các tài nguyên không phải Azure và/hoặc tại chỗ hiện có của bạn vào Azure Resource Manager. Quản lý máy ảo, cụm Kubernetes và cơ sở dữ liệu như thể chúng đang chạy trong Azure. v.v. Không chính xác: * Tại sao nên sử dụng Microsoft Entra ID Connect? Việc tích hợp các thư mục tại chỗ của bạn với Microsoft Entra ID giúp người dùng của bạn làm việc hiệu quả hơn bằng cách cung cấp danh tính chung để truy cập cả tài nguyên đám mây và tại chỗ. Hoàn thành đúng: Azure AD Connect.', 'Azure Management and Governance', ARRAY['AZ-900', 'Compute', 'Networking', 'Identity and Security']::text[],
  ''
),
(
  'az-900-question-158', 'az-900', 158, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"____ is an Apache Spark-based analytics platform optimized for Azure.","correctAnswer":"A"}],"choices":[{"key":"A","text":"Azure Databricks"},{"key":"B","text":"Azure App Service"},{"key":"C","text":"Azure Advisor"},{"key":"D","text":"Azure Functions"}]}'::jsonb, ARRAY['1=A']::text[],
  'Azure Databricks là nền tảng phân tích dựa trên Apache Spark được quản lý, được sử dụng cho kỹ thuật dữ liệu, phân tích và học máy.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Storage']::text[],
  ''
),
(
  'az-900-question-159', 'az-900', 159, 'Which Azure service provides a set of version control tools to manage code?',
  '[{"key":"A","text":"Azure Repos"},{"key":"B","text":"Azure DevTest Labs"},{"key":"C","text":"Azure Storage"},{"key":"D","text":"Azure Cosmos DB"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A — Azure Repos. A. Kho lưu trữ Azure. Azure Repos là một dịch vụ trong Azure DevOps cung cấp một bộ công cụ kiểm soát phiên bản để quản lý mã. Nó hỗ trợ cả kho lưu trữ Git và Kiểm soát phiên bản Team Foundation (TFVC), cho phép các nhóm cộng tác phát triển mã một cách hiệu quả. Các tùy chọn khác được liệt kê (Azure DevTest Labs, Azure Storage và Azure Cosmos DB) không chủ yếu tập trung vào kiểm soát phiên bản hoặc quản lý mã. Azure Repos là một bộ công cụ kiểm soát phiên bản mà bạn có thể sử dụng để quản lý mã của mình.', 'Azure Management and Governance', ARRAY['AZ-900', 'Storage', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-160', 'az-900', 160, 'You have a virtual machine named VM1 that runs Windows Server 2016. VM1 is in the East US Azure region. Which Azure service should you use from the Azure portal to view service failure notifications that can affect the availability of VM1?',
  '[{"key":"A","text":"Azure Service Fabric"},{"key":"B","text":"Azure Monitor"},{"key":"C","text":"Azure virtual machines"},{"key":"D","text":"Azure Advisor"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Azure Monitor. Azure Monitor tối đa hóa tính khả dụng và hiệu suất của các ứng dụng của bạn bằng cách cung cấp giải pháp toàn diện để thu thập, phân tích và hoạt động dựa trên phép đo từ xa từ môi trường đám mây và tại chỗ của bạn. Nó giúp bạn hiểu các ứng dụng của bạn đang hoạt động như thế nào và chủ động xác định các vấn đề ảnh hưởng đến chúng cũng như các tài nguyên mà chúng phụ thuộc vào. Thông báo tình trạng dịch vụ được cơ sở hạ tầng Azure xuất bản vào nhật ký hoạt động Azure. Thông báo chứa thông tin về các tài nguyên theo đăng ký của bạn. Xem thông báo tình trạng dịch vụ của bạn trong Azure portal Trong Azure portal, chọn Giám sát.', 'Azure Management and Governance', ARRAY['AZ-900', 'Compute', 'Architecture', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-161', 'az-900', 161, 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. Solution: You modify an Azure Traffic Manager profile. Does this meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Không. Azure Traffic Manager là giải pháp cân bằng tải dựa trên DNS. Nó không được sử dụng để đảm bảo rằng máy ảo có tên VM1 có thể truy cập được từ Internet qua HTTP. Để đảm bảo rằng máy ảo có tên VM1 có thể truy cập được từ Internet qua HTTP, bạn cần sửa đổi nhóm bảo mật mạng hoặc Azure Firewall. Trong câu hỏi này, chúng ta cần thêm quy tắc vào nhóm bảo mật mạng hoặc Azure Firewall để cho phép kết nối với máy ảo trên cổng 80 (HTTP).', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Networking']::text[],
  ''
),
(
  'az-900-question-162', 'az-900', 162, 'Your company plans to deploy several web servers and several database servers to Azure. You need to recommend an Azure solution to limit the types of connections from the web servers to the database servers. What should you include in the recommendation?',
  '[{"key":"A","text":"network security groups (NSGs)"},{"key":"B","text":"Azure Service Bus"},{"key":"C","text":"a local network gateway"},{"key":"D","text":"a route filter"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A — nhóm an ninh mạng (NSG). Nhóm bảo mật mạng hoạt động giống như tường lửa. Bạn có thể đính kèm nhóm bảo mật mạng vào mạng ảo và/hoặc các mạng con riêng lẻ trong mạng ảo. Bạn cũng có thể đính kèm nhóm bảo mật mạng vào giao diện mạng được gán cho máy ảo. Bạn có thể sử dụng nhiều nhóm bảo mật mạng trong mạng ảo để hạn chế lưu lượng giữa các tài nguyên như máy ảo và mạng con. Bạn có thể lọc lưu lượng mạng đến và đi từ tài nguyên Azure trong mạng ảo Azure bằng nhóm bảo mật mạng. Nhóm bảo mật mạng chứa các quy tắc bảo mật cho phép hoặc từ chối lưu lượng truy cập mạng gửi đến hoặc lưu lượng truy cập mạng gửi đi từ một số loại tài nguyên Azure.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Networking']::text[],
  ''
),
(
  'az-900-question-163', 'az-900', 163, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"From ____, you can identify which user stopped a specific virtual machine during the last 14 days.","correctAnswer":"C"}],"choices":[{"key":"A","text":"Access control (IAM)"},{"key":"B","text":"Azure Event Hubs"},{"key":"C","text":"Azure Activity Log"},{"key":"D","text":"Azure Service Health"}]}'::jsonb, ARRAY['1=C']::text[],
  'Azure Activity Log ghi lại các sự kiện trên mặt phẳng điều khiển cấp đăng ký, bao gồm ai đã khởi động, dừng hoặc sửa đổi máy ảo. IAM quản lý các quyền thay vì các hoạt động lịch sử.', 'Azure Management and Governance', ARRAY['AZ-900', 'Monitoring', 'Compute']::text[],
  ''
),
(
  'az-900-question-164', 'az-900', 164, 'Which service provides network traffic filtering across multiple Azure subscriptions and virtual networks?',
  '[{"key":"A","text":"Azure Firewall"},{"key":"B","text":"an application security group"},{"key":"C","text":"Azure DDoS protection"},{"key":"D","text":"a network security group (NSG)"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A — Azure Firewall. Bạn có thể hạn chế lưu lượng truy cập vào nhiều mạng ảo trong nhiều đăng ký bằng một tường lửa Azure duy nhất. Azure Firewall là dịch vụ bảo mật mạng dựa trên đám mây được quản lý để bảo vệ tài nguyên Mạng ảo Azure của bạn. Đó là một tường lửa hoàn toàn có trạng thái như một dịch vụ được tích hợp sẵn tính sẵn sàng cao và khả năng mở rộng đám mây không hạn chế. Bạn có thể tạo, thực thi và ghi nhật ký các chính sách kết nối mạng và ứng dụng một cách tập trung trên các gói đăng ký và mạng ảo. Azure Firewall sử dụng địa chỉ IP công cộng tĩnh cho tài nguyên mạng ảo của bạn, cho phép tường lửa bên ngoài xác định lưu lượng truy cập bắt nguồn từ mạng ảo của bạn.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Benefits', 'Networking', 'Identity and Security']::text[],
  ''
),
(
  'az-900-question-165', 'az-900', 165, 'Which Azure service should you use to store certificates?',
  '[{"key":"A","text":"Azure Security Center"},{"key":"B","text":"an Azure Storage account"},{"key":"C","text":"Azure Key Vault"},{"key":"D","text":"Azure Information Protection"}]'::jsonb, ARRAY['C']::text[],
  'Câu trả lời đúng: C — Azure Key Vault. Quản lý chứng chỉ - Azure Key Vault cũng là dịch vụ cho phép bạn dễ dàng cung cấp, quản lý và triển khai các chứng chỉ Lớp cổng bảo mật/lớp truyền tải bảo mật công khai và riêng tư (SSL/TLS) để sử dụng với Azure và các tài nguyên được kết nối nội bộ của bạn Azure Key Vault là một kho lưu trữ an toàn để lưu trữ nhiều loại thông tin nhạy cảm khác nhau bao gồm mật khẩu và chứng chỉ. Azure Key Vault có thể được sử dụng để lưu trữ an toàn và kiểm soát chặt chẽ quyền truy cập vào mã thông báo, mật khẩu, chứng chỉ, khóa API và các bí mật khác. Bí mật và khóa được Azure bảo vệ bằng thuật toán, độ dài khóa và mô-đun bảo mật phần cứng (HSM) tiêu chuẩn ngành.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Storage', 'Identity and Security']::text[],
  ''
),
(
  'az-900-question-166', 'az-900', 166, 'Which Azure service can you use as a security information and event management (SIEM) solution?',
  '[{"key":"A","text":"Azure Analysis Services"},{"key":"B","text":"Azure Sentinel"},{"key":"C","text":"Azure Information Protection"},{"key":"D","text":"Azure Cognitive Services"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Azure Sentinel. Microsoft Azure Sentinel là giải pháp quản lý sự kiện thông tin bảo mật, gốc đám mây, có thể mở rộng (SIEM) và phản hồi tự động điều phối bảo mật (SOAR).', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Benefits']::text[],
  ''
),
(
  'az-900-question-167', 'az-900', 167, 'Match the Azure security service to the correct description.',
  '{"type":"matching_drag_drop","statements":[{"id":"1","text":"Analyzes security log files from Azure virtual machines.","correctAnswer":"E"},{"id":"2","text":"Displays the secure score for an Azure subscription.","correctAnswer":"D"},{"id":"3","text":"Stores passwords and secrets for use by Azure Functions applications.","correctAnswer":"B"}],"choices":[{"key":"A","text":"Microsoft Entra ID"},{"key":"B","text":"Azure Key Vault"},{"key":"C","text":"Azure Lighthouse"},{"key":"D","text":"Microsoft Defender for Cloud"},{"key":"E","text":"Microsoft Sentinel"}]}'::jsonb, ARRAY['1=E', '2=D', '3=B']::text[],
  'Sentinel là SIEM dành cho đám mây dành cho phân tích nhật ký, Defender for Cloud báo cáo điểm bảo mật và đề xuất tư thế, còn Key Vault lưu trữ bí mật ứng dụng.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Identity and Security', 'Monitoring']::text[],
  ''
),
(
  'az-900-question-168', 'az-900', 168, 'Complete the missing layers in the defense-in-depth model.',
  '{"type":"matching_drag_drop","statements":[{"id":"1","text":"Outermost layer, above Identity and access","correctAnswer":"C"},{"id":"2","text":"Layer between Identity and access and Network","correctAnswer":"A"},{"id":"3","text":"Layer between Compute and Data","correctAnswer":"B"}],"choices":[{"key":"A","text":"Perimeter"},{"key":"B","text":"Application"},{"key":"C","text":"Physical security"}]}'::jsonb, ARRAY['1=C', '2=A', '3=B']::text[],
  'Các lớp bảo vệ chuyên sâu từ ngoài cùng đến trong cùng là Bảo mật vật lý, Nhận dạng và truy cập, Chu vi, Mạng, Điện toán, Ứng dụng và Dữ liệu.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Identity and Security']::text[],
  ''
),
(
  'az-900-question-169', 'az-900', 169, 'You have an Azure virtual machine named VM1. You plan to encrypt VM1 by using Azure Disk Encryption. Which Azure resource must you create first?',
  '[{"key":"A","text":"an Azure Storage account"},{"key":"B","text":"an Azure Key Vault"},{"key":"C","text":"an Azure Information Protection policy"},{"key":"D","text":"an Encryption key"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Azure Key Vault. Azure Disk Encryption yêu cầu Azure Key Vault để kiểm soát và quản lý các khóa và bí mật mã hóa ổ đĩa.', 'Azure Management and Governance', ARRAY['AZ-900', 'Compute', 'Storage', 'Governance']::text[],
  ''
),
(
  'az-900-question-170', 'az-900', 170, 'Which resources can be used as a source for a Network security group inbound security rule?',
  '[{"key":"A","text":"Service Tags only"},{"key":"B","text":"IP Addresses, Service tags and Application security groups"},{"key":"C","text":"Application security groups only"},{"key":"D","text":"IP Addresses only"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Địa chỉ IP, Thẻ dịch vụ và Nhóm bảo mật ứng dụng. Nguồn hoặc đích: Bất kỳ hoặc một địa chỉ IP riêng lẻ, khối định tuyến liên miền không phân lớp (CIDR) (ví dụ: 10.0.0.0/24), thẻ dịch vụ hoặc nhóm bảo mật ứng dụng. Các nhóm bảo mật mạng được xử lý sau khi Azure chuyển địa chỉ IP công cộng thành địa chỉ IP riêng cho lưu lượng truy cập vào và trước khi Azure chuyển địa chỉ IP riêng sang địa chỉ IP công cộng cho lưu lượng truy cập đi. Việc chỉ định phạm vi, thẻ dịch vụ hoặc nhóm bảo mật ứng dụng sẽ cho phép bạn tạo ít quy tắc bảo mật hơn.', 'Azure Management and Governance', ARRAY['AZ-900', 'Networking', 'Governance']::text[],
  ''
),
(
  'az-900-question-171', 'az-900', 171, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"vin Azure Firewall enables users on the internet to","correctAnswer":"C"}],"choices":[{"key":"A","text":"Application rules access a server on a virtual network."},{"key":"B","text":"Network Address Translation (NAT) rules"},{"key":"C","text":"Network rules"},{"key":"D","text":"Service tags"}]}'::jsonb, ARRAY['1=C']::text[],
  'Nếu bạn định cấu hình quy tắc mạng và quy tắc ứng dụng thì quy tắc mạng sẽ được áp dụng theo thứ tự ưu tiên trước quy tắc ứng dụng. Các quy tắc NAT được áp dụng ưu tiên trước các quy tắc mạng. Hoàn thành đúng: Quy tắc mạng.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Networking']::text[],
  ''
),
(
  'az-900-question-172', 'az-900', 172, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Azure distributed denial of service (DDoS) protection is an example of protection that is implemented at the v","correctAnswer":"D"}],"choices":[{"key":"A","text":"application layer."},{"key":"B","text":"compute layer."},{"key":"C","text":"networking layer."},{"key":"D","text":"perimeter layer."}]}'::jsonb, ARRAY['1=D']::text[],
  '"Lớp chu vi sử dụng tính năng bảo vệ từ chối dịch vụ phân tán (DDoS) để lọc các cuộc tấn công quy mô lớn trước khi chúng có thể gây ra tình trạng từ chối dịch vụ cho người dùng. Hoàn thành chính xác: lớp chu vi.', 'Azure Architecture and Services', ARRAY['AZ-900']::text[],
  ''
),
(
  'az-900-question-173', 'az-900', 173, 'You have an Azure Sentinel workspace. You need to automate responses to threats detected by Azure Sentinel. What should you use?',
  '[{"key":"A","text":"adaptive network hardening in Azure Security Center"},{"key":"B","text":"Azure Service Health"},{"key":"C","text":"Azure Monitor workbooks"},{"key":"D","text":"adaptive application controls in Azure Security Center"}]'::jsonb, ARRAY['C']::text[],
  'Câu trả lời đúng: C — sách bài tập Azure Monitor. Khi bạn đã kết nối các nguồn dữ liệu của mình với Microsoft Sentinel, bạn có thể trực quan hóa và giám sát dữ liệu bằng cách sử dụng Microsoft Sentinel sử dụng Sổ làm việc Azure Monitor, cung cấp tính linh hoạt trong việc tạo bảng điều khiển tùy chỉnh. Mặc dù Sổ làm việc được hiển thị khác nhau trong Microsoft Sentinel, nhưng có thể hữu ích cho bạn khi xem cách tạo báo cáo tương tác với Sổ làm việc Azure Monitor. Microsoft Sentinel cho phép bạn tạo sổ làm việc tùy chỉnh trên dữ liệu của mình và cũng đi kèm với các mẫu sổ làm việc tích hợp sẵn để cho phép bạn nhanh chóng hiểu rõ hơn về dữ liệu của mình ngay khi bạn kết nối nguồn dữ liệu.', 'Azure Management and Governance', ARRAY['AZ-900', 'Identity and Security', 'Monitoring']::text[],
  ''
),
(
  'az-900-question-174', 'az-900', 174, 'Which Azure service can you use as a security information and event management (SIEM) solution?',
  '[{"key":"A","text":"Azure Analysis Services"},{"key":"B","text":"Microsoft Sentinel"},{"key":"C","text":"Azure Information Protection"},{"key":"D","text":"Azure Cognitive Services"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Microsoft Sentinel. Microsoft Sentinel là giải pháp quản lý sự kiện và thông tin bảo mật, dựa trên nền tảng đám mây, có thể mở rộng (SIEM) và giải pháp điều phối, tự động hóa và phản hồi bảo mật (SOAR). Microsoft Sentinel cung cấp phân tích bảo mật thông minh và thông tin về mối đe dọa trên toàn doanh nghiệp, cung cấp một giải pháp duy nhất để phát hiện cuộc tấn công, hiển thị mối đe dọa, chủ động tìm kiếm và ứng phó với mối đe dọa.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Benefits']::text[],
  ''
),
(
  'az-900-question-175', 'az-900', 175, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"An Azure Policy initiative definition is a v","correctAnswer":"A"}],"choices":[{"key":"A","text":"collection of policy definitions"},{"key":"B","text":"collection of Azure Policy definition assignments."},{"key":"C","text":"aroup of Azure Blueprints definitions"},{"key":"D","text":"group of role-based access control (RBAC) role assignments."}]}'::jsonb, ARRAY['1=A']::text[],
  'Hộp: tập hợp các định nghĩa chính sách Sáng kiến ​​Azure Policy là tập hợp các định nghĩa hoặc quy tắc Azure Policy được nhóm lại với nhau hướng tới một mục tiêu hoặc mục đích cụ thể. Các sáng kiến ​​của Azure đơn giản hóa việc quản lý chính sách của bạn bằng cách nhóm một bộ chính sách lại với nhau một cách hợp lý thành một mục duy nhất. "thu thập các định nghĩa chính sách" là câu trả lời. Định nghĩa sáng kiến ​​là tập hợp các định nghĩa chính sách được điều chỉnh để đạt được mục tiêu tổng thể duy nhất. Các định nghĩa sáng kiến ​​đơn giản hóa việc quản lý và gán các định nghĩa chính sách. Họ đơn giản hóa bằng cách nhóm một bộ chính sách thành một mục duy nhất. Hoàn thành đúng: tập hợp các định nghĩa chính sách.', 'Azure Management and Governance', ARRAY['AZ-900', 'Identity and Security', 'Governance', 'Monitoring']::text[],
  ''
),
(
  'az-900-question-176', 'az-900', 176, 'You have an Azure subscription. You need to review your secure score. What should you use?',
  '[{"key":"A","text":"Azure Monitor"},{"key":"B","text":"Azure Advisor"},{"key":"C","text":"Help + support"},{"key":"D","text":"Microsoft Defender for Cloud"}]'::jsonb, ARRAY['D']::text[],
  'Câu trả lời đúng: D — Microsoft Defender for Cloud. Tính năng trung tâm trong Defender for Cloud cho phép bạn đạt được những mục tiêu đó là điểm số an toàn. Microsoft Defender for Cloud có hai mục tiêu chính: - giúp bạn hiểu tình hình bảo mật hiện tại của mình - giúp bạn cải thiện bảo mật của mình một cách hiệu quả và hiệu quả. Tính năng trung tâm trong Defender for Cloud cho phép bạn đạt được những mục tiêu đó là điểm bảo mật. Defender for Cloud liên tục đánh giá các tài nguyên trên nhiều đám mây của bạn để phát hiện các vấn đề bảo mật. Sau đó, nó tổng hợp tất cả các phát hiện thành một điểm duy nhất để bạn có thể biết nhanh tình hình bảo mật hiện tại của mình: điểm càng cao thì mức độ rủi ro được xác định càng thấp.', 'Azure Management and Governance', ARRAY['AZ-900', 'Identity and Security', 'Architecture', 'Monitoring']::text[],
  ''
),
(
  'az-900-question-177', 'az-900', 177, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"You can view your company’s regulatory compliance report from v","correctAnswer":"D"}],"choices":[{"key":"A","text":"Azure Advisor"},{"key":"B","text":"Azure Analysis Services"},{"key":"C","text":"Azure Monitor"},{"key":"D","text":"Microsoft Defender for Cloud"}]}'::jsonb, ARRAY['1=D']::text[],
  'Box: Microsoft Defender for Cloud Microsoft Defender for Cloud giúp hợp lý hóa quy trình đáp ứng các yêu cầu tuân thủ quy định bằng cách sử dụng bảng thông tin tuân thủ quy định. Bạn có thể tải xuống báo cáo PDF/CSV cũng như báo cáo chứng nhận về trạng thái tuân thủ của bạn. Hoàn thành đúng: Microsoft Defender for Cloud.', 'Azure Management and Governance', ARRAY['AZ-900', 'Identity and Security', 'Governance', 'Monitoring']::text[],
  ''
),
(
  'az-900-question-178', 'az-900', 178, 'You need to collect and automatically analyze security events from Azure Active Directory (Azure AD). What should you use?',
  '[{"key":"A","text":"Microsoft Sentinel"},{"key":"B","text":"Azure Synapse Analytics"},{"key":"C","text":"Azure AD Connect"},{"key":"D","text":"Azure Key Vault"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A — Microsoft Sentinel. Microsoft Sentinel là giải pháp quản lý sự kiện và thông tin bảo mật, dựa trên nền tảng đám mây, có thể mở rộng (SIEM) và giải pháp điều phối, tự động hóa và phản hồi bảo mật (SOAR). Microsoft Sentinel cung cấp phân tích bảo mật thông minh và thông tin về mối đe dọa trên toàn doanh nghiệp, cung cấp một giải pháp duy nhất để phát hiện cuộc tấn công, hiển thị mối đe dọa, chủ động tìm kiếm và ứng phó với mối đe dọa.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Benefits', 'Identity and Security']::text[],
  ''
),
(
  'az-900-question-179', 'az-900', 179, 'For each statement, select Yes if it is true. Otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"A network security group (NSG) will block all network traffic by defaut.","correctAnswer":"No"},{"id":"2","text":"Application security groups can be specified as part of network security group (NSG) rules.","correctAnswer":"Yes"},{"id":"3","text":"Network security groups (NSGs) always include inbound security rues and outbound security rules","correctAnswer":"Yes"}],"choices":[]}'::jsonb, ARRAY['1:No', '2:Yes', '3:Yes']::text[],
  'Hộp 1: Không - Azure tạo các quy tắc mặc định trong mỗi nhóm bảo mật mạng mà bạn tạo. Những quy tắc này cho phép một số lưu lượng truy cập. Ô 2: Có - Nhóm bảo mật mạng không chứa hoặc có nhiều quy tắc tùy thích. Các quy tắc này có thể đề cập đến các nhóm bảo mật ứng dụng. Hộp 3: Có - Azure tạo các quy tắc mặc định Trong và ngoài trong mỗi nhóm bảo mật mạng mà bạn tạo. Câu trả lời đúng: 1: Không; 2: Có; 3: Vâng.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Networking']::text[],
  ''
),
(
  'az-900-question-180', 'az-900', 180, 'Match each identity term to the appropriate description.',
  '{"type":"matching_drag_drop","statements":[{"id":"1","text":"Allows the same credentials to access multiple resources and applications.","correctAnswer":"C"},{"id":"2","text":"Determines the access level of a user or service.","correctAnswer":"A"},{"id":"3","text":"Requires multiple verification factors to identify a user or service.","correctAnswer":"B"}],"choices":[{"key":"A","text":"Authorization"},{"key":"B","text":"Multifactor authentication (MFA)"},{"key":"C","text":"Single sign-on (SSO)"}]}'::jsonb, ARRAY['1=C', '2=A', '3=B']::text[],
  'SSO sử dụng lại một danh tính được xác thực trên các ứng dụng, quyền kiểm soát ủy quyền và MFA yêu cầu nhiều hơn một yếu tố xác minh.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Identity and Security']::text[],
  ''
),
(
  'az-900-question-181', 'az-900', 181, 'Your company plans to automate the deployment of servers to Azure. Your manager is concerned that you may expose administrative credentials during the deployment. You need to recommend an Azure solution that encrypts the administrative credentials during the deployment. What should you include in the recommendation?',
  '[{"key":"A","text":"Azure Key Vault"},{"key":"B","text":"Azure Information Protection"},{"key":"C","text":"Microsoft Defender for Cloud"},{"key":"D","text":"Azure Multi-Factor Authentication (MFA)"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A — Azure Key Vault. Azure Key Vault bảo vệ khóa mật mã, chứng chỉ (và khóa riêng được liên kết với chứng chỉ) cũng như bí mật (chẳng hạn như chuỗi kết nối và mật khẩu) trong đám mây.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Identity and Security']::text[],
  ''
),
(
  'az-900-question-182', 'az-900', 182, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"After you create a virtual machine, you need to modify the v to allow connections to TCP port 8080 on the virtual machine [network security group (NSG)","correctAnswer":"B"}],"choices":[{"key":"A","text":"Virtual network gateway"},{"key":"B","text":"Virtual network"},{"key":"C","text":"route table"}]}'::jsonb, ARRAY['1=B']::text[],
  'Hộp: nhóm bảo mật mạng (NSG) Bạn có thể sử dụng nhóm bảo mật mạng Azure để lọc lưu lượng truy cập mạng đến và đi từ các tài nguyên Azure trong mạng ảo Azure. Nhóm bảo mật mạng chứa các quy tắc bảo mật cho phép hoặc từ chối lưu lượng truy cập mạng gửi đến hoặc lưu lượng truy cập mạng gửi đi từ một số loại tài nguyên Azure. Đối với mỗi quy tắc, bạn có thể chỉ định nguồn và đích, cổng và giao thức. Hoàn thành đúng: Mạng ảo.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Networking']::text[],
  ''
),
(
  'az-900-question-183', 'az-900', 183, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Microsoft Sentinel uses playbooks to v","correctAnswer":"A"}],"choices":[{"key":"A","text":"automatically respond to threats"},{"key":"B","text":"visualize data collected by connectors"},{"key":"C","text":"specify how long data is retained"},{"key":"D","text":"store passwords and certificates"}]}'::jsonb, ARRAY['1=A']::text[],
  'Box: tự động phản hồi các mối đe dọa Playbook là tập hợp các quy trình có thể chạy từ Microsoft Sentinel để phản hồi lại cảnh báo hoặc sự cố. Playbook có thể giúp tự động hóa và sắp xếp phản hồi của bạn, đồng thời có thể được đặt để chạy tự động khi cảnh báo hoặc sự cố cụ thể được tạo bằng cách gắn vào quy tắc phân tích hoặc quy tắc tự động hóa tương ứng. Lưu ý: Quy tắc tự động hóa giúp bạn phân loại sự cố trong Microsoft Sentinel. Bạn có thể sử dụng chúng để tự động phân công sự cố cho đúng nhân viên, xử lý các sự cố gây ồn ào hoặc các thông tin sai lệch đã biết, thay đổi mức độ nghiêm trọng của chúng và thêm thẻ. Chúng cũng là cơ chế giúp bạn có thể chạy các cẩm nang ứng phó với các sự cố. Hoàn thành chính xác: tự động phản hồi các mối đe dọa.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Monitoring']::text[],
  ''
),
(
  'az-900-question-184', 'az-900', 184, 'You need to configure an Azure solution that meets the following requirements: ✑ Secures websites from attacks ✑ Generates reports that contain details of attempted attacks What should you include in the solution?',
  '[{"key":"A","text":"Azure Firewall"},{"key":"B","text":"a network security group (NSG)"},{"key":"C","text":"Azure Information Protection"},{"key":"D","text":"DDoS protection"}]'::jsonb, ARRAY['D']::text[],
  'Câu trả lời đúng: D – Bảo vệ khỏi DDoS. Tấn công là từ khóa cho DDOS. Nội quy là từ khóa cho Tường lửa. Cho phép/Từ chối là Từ khóa cho NSG DDoS là một kiểu tấn công cố gắng làm cạn kiệt tài nguyên ứng dụng. Mục tiêu là ảnh hưởng đến tính khả dụng của ứng dụng và khả năng xử lý các yêu cầu hợp pháp của ứng dụng. Các cuộc tấn công DDoS có thể được nhắm mục tiêu vào bất kỳ điểm cuối nào có thể truy cập công khai thông qua internet. Azure có hai dịch vụ DDoS cung cấp khả năng bảo vệ khỏi các cuộc tấn công mạng: Bảo vệ DDoS Basic và Bảo vệ DDoS Standard. Tính năng bảo vệ DDoS Basic được tích hợp vào nền tảng Azure theo mặc định và không mất thêm phí. Bạn có tùy chọn thanh toán cho DDoS Standard.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Networking', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-185', 'az-900', 185, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Monitor threats by using sensors","correctAnswer":"A"}],"choices":[{"key":"A","text":"Azure Monitor"},{"key":"B","text":"Azure Security Center"},{"key":"C","text":"Azure Active Directory (Azure AD) Identity Protection"},{"key":"D","text":"Azure Advanced Threat Protection (ATP)"}]}'::jsonb, ARRAY['1=A']::text[],
  'Hộp 1: Để giám sát các mối đe dọa bằng cách sử dụng cảm biến, bạn sẽ sử dụng Azure Advanced Threat Protection (ATP). Azure Advanced Threat Protection (ATP) là giải pháp bảo mật dựa trên đám mây tận dụng các tín hiệu Active Directory tại chỗ của bạn để xác định, phát hiện và điều tra các mối đe dọa nâng cao, danh tính bị xâm phạm và các hành động độc hại nội bộ nhắm vào tổ chức của bạn. Cảm biến là gói phần mềm bạn cài đặt trên máy chủ của mình để tải thông tin lên Azure ATP. Hộp 2: Để thực thi MFA dựa trên một điều kiện, bạn sẽ sử dụng Azure Active Directory Identity Protection. Hoàn thành đúng: Azure Monitor.', 'Azure Management and Governance', ARRAY['AZ-900', 'Identity and Security', 'Monitoring']::text[],
  ''
),
(
  'az-900-question-186', 'az-900', 186, 'Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. What are two possible solutions? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.',
  '[{"key":"A","text":"Modify an Azure Traffic Manager profile"},{"key":"B","text":"Modify a network security group (NSG)"},{"key":"C","text":"Modify a DDoS protection plan"},{"key":"D","text":"Modify an Azure firewall"}]'::jsonb, ARRAY['B', 'D']::text[],
  'Câu trả lời đúng: B — Sửa đổi nhóm bảo mật mạng (NSG); D — Sửa đổi tường lửa Azure. Câu hỏi nói rằng nên có 2 câu trả lời, không chỉ một câu trả lời như được đưa ra trong lời giải. B (NSG) và D (Tường lửa) Nhóm bảo mật mạng hoạt động giống như tường lửa. Bạn có thể đính kèm nhóm bảo mật mạng vào mạng ảo và/hoặc các mạng con riêng lẻ trong mạng ảo. Bạn cũng có thể đính kèm nhóm bảo mật mạng vào giao diện mạng được gán cho máy ảo. Bạn có thể sử dụng nhiều nhóm bảo mật mạng trong mạng ảo để hạn chế lưu lượng giữa các tài nguyên như máy ảo và mạng con. Bạn có thể lọc lưu lượng mạng đến và đi từ tài nguyên Azure trong mạng ảo Azure bằng nhóm bảo mật mạng.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Networking']::text[],
  ''
),
(
  'az-900-question-187', 'az-900', 187, 'For each statement, select Yes if it is true. Otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"You can associate a network security group (NSG) to a oO oO virtual network subnet.","correctAnswer":"Yes"},{"id":"2","text":"You can associate a network security group (NSG) to a ole) virtual network. You can associate a network security group (NSG) to a oO network interface.","correctAnswer":"No"}],"choices":[]}'::jsonb, ARRAY['1:Yes', '2:No']::text[],
  'Hộp 1 - Có Hộp 2 - Không "Bạn có thể liên kết 0 hoặc một nhóm bảo mật mạng với mỗi mạng con mạng ảo và giao diện mạng trong một máy ảo. Cùng một nhóm bảo mật mạng có thể được liên kết với bao nhiêu mạng con và giao diện mạng tùy thích. Câu trả lời đúng: 1: Có; 2: Không.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Networking']::text[],
  ''
),
(
  'az-900-question-188', 'az-900', 188, 'You have an Azure environment that contains 10 virtual networks and 100 virtual machines. You need to limit the amount of inbound traffic to all the Azure virtual networks. What should you create?',
  '[{"key":"A","text":"one application security group (ASG)"},{"key":"B","text":"10 virtual network gateways"},{"key":"C","text":"10 Azure ExpressRoute circuits"},{"key":"D","text":"one Azure firewall"}]'::jsonb, ARRAY['D']::text[],
  'Câu trả lời đúng: D — một tường lửa Azure. Bạn có thể hạn chế lưu lượng truy cập vào nhiều mạng ảo bằng một tường lửa Azure duy nhất. Azure Firewall là dịch vụ bảo mật mạng dựa trên đám mây được quản lý để bảo vệ tài nguyên Mạng ảo Azure của bạn. Đó là một tường lửa hoàn toàn có trạng thái như một dịch vụ được tích hợp sẵn tính sẵn sàng cao và khả năng mở rộng đám mây không bị hạn chế. Bạn có thể tạo, thực thi và ghi nhật ký các chính sách kết nối mạng và ứng dụng một cách tập trung trên các gói đăng ký và mạng ảo. Azure Firewall sử dụng địa chỉ IP công cộng tĩnh cho tài nguyên mạng ảo của bạn, cho phép tường lửa bên ngoài xác định lưu lượng truy cập bắt nguồn từ mạng ảo của bạn.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Benefits', 'Compute', 'Networking']::text[],
  ''
),
(
  'az-900-question-189', 'az-900', 189, 'This question requires that you evaluate the underlined text to determine if it is correct. Azure Key Vault is used to store secrets for Azure Active Directory (Azure AD) user accounts. Review the underlined text. If it makes the statement correct, select `No change is needed`. If the statement is incorrect, select the answer choice that makes the statement correct.',
  '[{"key":"A","text":"No change is needed"},{"key":"B","text":"Azure Active Directory (Azure AD) administrative accounts"},{"key":"C","text":"Personally Identifiable Information (PII)"},{"key":"D","text":"server applications"}]'::jsonb, ARRAY['D']::text[],
  'Câu trả lời đúng: D — ứng dụng máy chủ. Việc lưu trữ tập trung các bí mật ứng dụng trong Azure Key Vault cho phép bạn kiểm soát việc phân phối chúng. Key Vault làm giảm đáng kể khả năng bí mật có thể vô tình bị rò rỉ. Khi các nhà phát triển ứng dụng sử dụng Key Vault, họ không cần lưu trữ thông tin bảo mật trong ứng dụng của mình nữa. Việc không phải lưu trữ thông tin bảo mật trong các ứng dụng sẽ loại bỏ nhu cầu biến thông tin này thành một phần của mã. Ví dụ: một ứng dụng có thể cần kết nối với cơ sở dữ liệu. Thay vì lưu trữ chuỗi kết nối trong mã của ứng dụng, bạn có thể lưu trữ chuỗi đó một cách an toàn trong Key Vault.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Storage', 'Identity and Security']::text[],
  ''
),
(
  'az-900-question-190', 'az-900', 190, 'Your company plans to automate the deployment of servers to Azure. Your manager is concerned that you may expose administrative credentials during the deployment. You need to recommend an Azure solution that encrypts the administrative credentials during the deployment. What should you include in the recommendation?',
  '[{"key":"A","text":"Azure Key Vault"},{"key":"B","text":"Azure Information Protection"},{"key":"C","text":"Azure Security Center"},{"key":"D","text":"Azure Multi-Factor Authentication (MFA)"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A — Azure Key Vault. Azure Key Vault là một kho lưu trữ an toàn để lưu trữ nhiều loại thông tin nhạy cảm. Trong câu hỏi này, chúng tôi sẽ lưu trữ thông tin xác thực quản trị trong Key Vault. Với giải pháp này, không cần lưu trữ thông tin xác thực quản trị dưới dạng văn bản thuần túy trong tập lệnh triển khai. Tất cả thông tin được lưu trữ trong Key Vault đều được mã hóa. Azure Key Vault có thể được sử dụng để lưu trữ an toàn và kiểm soát chặt chẽ quyền truy cập vào mã thông báo, mật khẩu, chứng chỉ, khóa API và các bí mật khác. Bí mật và khóa được Azure bảo vệ bằng thuật toán, độ dài khóa và mô-đun bảo mật phần cứng (HSM) tiêu chuẩn ngành. HSM được sử dụng là Tiêu chuẩn xử lý thông tin liên bang (FIPS) 140-2 Cấp 2 đã được xác thực.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Storage', 'Identity and Security']::text[],
  ''
),
(
  'az-900-question-191', 'az-900', 191, 'You plan to deploy several Azure virtual machines. You need to control the ports that devices on the Internet can use to access the virtual machines. What should you use?',
  '[{"key":"A","text":"a network security group (NSG)"},{"key":"B","text":"an Azure Active Directory (Azure AD) role"},{"key":"C","text":"an Azure Active Directory group"},{"key":"D","text":"an Azure key vault"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A — nhóm bảo mật mạng (NSG). Nhóm bảo mật mạng hoạt động giống như tường lửa. Bạn có thể đính kèm nhóm bảo mật mạng vào mạng ảo và/hoặc các mạng con riêng lẻ trong mạng ảo. Bạn cũng có thể đính kèm nhóm bảo mật mạng vào giao diện mạng được gán cho máy ảo. Bạn có thể sử dụng nhiều nhóm bảo mật mạng trong mạng ảo để hạn chế lưu lượng giữa các tài nguyên như máy ảo và mạng con. Bạn có thể lọc lưu lượng mạng đến và đi từ tài nguyên Azure trong mạng ảo Azure bằng nhóm bảo mật mạng. Nhóm bảo mật mạng chứa các quy tắc bảo mật cho phép hoặc từ chối lưu lượng truy cập mạng gửi đến hoặc lưu lượng truy cập mạng gửi đi từ một số loại tài nguyên Azure.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Networking', 'Identity and Security']::text[],
  ''
),
(
  'az-900-question-192', 'az-900', 192, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"After you create a virtual machine, you need to modify the v","correctAnswer":"C"}],"choices":[{"key":"A","text":"network security group (NSG)"},{"key":"B","text":"virtual network gateway"},{"key":"C","text":"virtual network"},{"key":"D","text":"route table"}]}'::jsonb, ARRAY['1=C']::text[],
  'Khi bạn tạo một máy ảo, cài đặt mặc định là tạo Network Security Group gắn với giao diện mạng được gán cho máy ảo. Nhóm bảo mật mạng hoạt động giống như tường lửa. Bạn có thể đính kèm nhóm bảo mật mạng vào mạng ảo và/hoặc các mạng con riêng lẻ trong mạng ảo. Bạn cũng có thể đính kèm nhóm bảo mật mạng vào giao diện mạng được gán cho máy ảo. Bạn có thể sử dụng nhiều nhóm bảo mật mạng trong mạng ảo để hạn chế lưu lượng giữa các tài nguyên như máy ảo và mạng con. Bạn có thể lọc lưu lượng mạng đến và đi từ tài nguyên Azure trong mạng ảo Azure bằng nhóm bảo mật mạng. Hoàn thành đúng: mạng ảo.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Networking']::text[],
  ''
),
(
  'az-900-question-193', 'az-900', 193, 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. Solution: You modify a network security group (NSG). Does this meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A – Có. Nhóm bảo mật mạng hoạt động giống như tường lửa. Bạn có thể đính kèm nhóm bảo mật mạng vào mạng ảo và/hoặc các mạng con riêng lẻ trong mạng ảo. Bạn cũng có thể đính kèm nhóm bảo mật mạng vào giao diện mạng được gán cho máy ảo. Bạn có thể sử dụng nhiều nhóm bảo mật mạng trong mạng ảo để hạn chế lưu lượng giữa các tài nguyên như máy ảo và mạng con. Bạn có thể lọc lưu lượng mạng đến và đi từ tài nguyên Azure trong mạng ảo Azure bằng nhóm bảo mật mạng. Nhóm bảo mật mạng chứa các quy tắc bảo mật cho phép hoặc từ chối lưu lượng truy cập mạng gửi đến hoặc lưu lượng truy cập mạng gửi đi từ một số loại tài nguyên Azure.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Networking']::text[],
  ''
),
(
  'az-900-question-194', 'az-900', 194, 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. Solution: You modify a DDoS protection plan. Does this meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Không. DDoS là một hình thức tấn công vào tài nguyên mạng. Kế hoạch bảo vệ DDoS được sử dụng để bảo vệ khỏi các cuộc tấn công DDoS; nó không cung cấp kết nối với máy ảo. Để đảm bảo rằng máy ảo có tên VM1 có thể truy cập được từ Internet qua HTTP, bạn cần sửa đổi nhóm bảo mật mạng hoặc Azure Firewall.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Networking']::text[],
  ''
),
(
  'az-900-question-195', 'az-900', 195, 'You need to collect and automatically analyze security events from Azure Active Directory (Azure AD). What should you use?',
  '[{"key":"A","text":"Azure Sentinel"},{"key":"B","text":"Azure Synapse Analytics"},{"key":"C","text":"Azure AD Connect"},{"key":"D","text":"Azure Key Vault"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A — Azure Sentinel. Microsoft Azure Sentinel là giải pháp quản lý sự kiện thông tin bảo mật, gốc đám mây, có thể mở rộng (SIEM) và phản hồi tự động điều phối bảo mật (SOAR). Azure Sentinel cung cấp các phân tích bảo mật thông minh và thông tin về mối đe dọa trên toàn doanh nghiệp, cung cấp một giải pháp duy nhất để phát hiện cảnh báo, hiển thị mối đe dọa, chủ động tìm kiếm và ứng phó với mối đe dọa.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Benefits', 'Identity and Security', 'Monitoring']::text[],
  ''
),
(
  'az-900-question-196', 'az-900', 196, 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. Solution: You modify an Azure firewall. Does this meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A – Có. Azure Firewall là dịch vụ bảo mật mạng dựa trên đám mây được quản lý để bảo vệ tài nguyên Mạng ảo Azure của bạn. Đó là một tường lửa hoàn toàn có trạng thái như một dịch vụ được tích hợp sẵn tính sẵn sàng cao và khả năng mở rộng đám mây không hạn chế. Trong câu hỏi này, chúng ta cần thêm quy tắc vào Azure Firewall để cho phép kết nối với máy ảo trên cổng 80 (HTTP).', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Benefits', 'Compute', 'Networking']::text[],
  ''
),
(
  'az-900-question-197', 'az-900', 197, 'This question requires that you evaluate the underlined text to determine if it is correct. Azure Germany can be used by legal residents of Germany only. Review the underlined text. If it makes the statement correct, select `No change is needed`. If the statement is incorrect, select the answer choice that makes the statement correct.',
  '[{"key":"A","text":"no change is needed"},{"key":"B","text":"only enterprises that are registered in Germany"},{"key":"C","text":"only enterprises that purchase their azure licenses from a partner based in Germany"},{"key":"D","text":"any user or enterprise that requires its data to reside in Germany"}]'::jsonb, ARRAY['D']::text[],
  'Câu trả lời đúng: D — bất kỳ người dùng hoặc doanh nghiệp nào yêu cầu dữ liệu của họ cư trú tại Đức. Azure Germany được cung cấp cho các khách hàng và đối tác đủ điều kiện trên toàn cầu có ý định kinh doanh tại EU/EFTA, bao gồm cả Vương quốc Anh. Azure Đức cung cấp một phiên bản dịch vụ Microsoft Azure riêng biệt từ bên trong các trung tâm dữ liệu của Đức. Các trung tâm dữ liệu được đặt tại hai địa điểm, Frankfurt/Main và Magdeburg. Vị trí này đảm bảo rằng dữ liệu khách hàng vẫn ở Đức và các trung tâm dữ liệu kết nối với nhau thông qua mạng riêng. Tất cả dữ liệu khách hàng được lưu trữ độc quyền trong các trung tâm dữ liệu đó. Một công ty được chỉ định của Đức--người được ủy thác dữ liệu của Đức--kiểm soát quyền truy cập vào dữ liệu khách hàng cũng như các hệ thống và cơ sở hạ tầng chứa dữ liệu khách hàng.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Architecture']::text[],
  ''
),
(
  'az-900-question-198', 'az-900', 198, 'What should you use to evaluate whether your company''s Azure environment meets regulatory requirements?',
  '[{"key":"A","text":"Azure Service Health"},{"key":"B","text":"Azure Knowledge Center"},{"key":"C","text":"Azure Security Center"},{"key":"D","text":"Azure Advisor"}]'::jsonb, ARRAY['C']::text[],
  'Câu trả lời đúng: C — Trung tâm bảo mật Azure. Khả năng giám sát nâng cao trong Trung tâm bảo mật cho phép bạn theo dõi và quản lý việc tuân thủ cũng như quản trị theo thời gian. Mức độ tuân thủ tổng thể cung cấp cho bạn thước đo mức độ tuân thủ của các gói đăng ký với các chính sách liên quan đến khối lượng công việc của bạn.', 'Azure Management and Governance', ARRAY['AZ-900', 'Identity and Security', 'Architecture', 'Governance']::text[],
  ''
),
(
  'az-900-question-199', 'az-900', 199, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Your company implements ____ to automatically add a watermark to Microsoft Word documents that contain credit card information.","correctAnswer":"C"}],"choices":[{"key":"A","text":"Azure Policy"},{"key":"B","text":"Azure DDoS Protection"},{"key":"C","text":"Azure Information Protection"},{"key":"D","text":"Microsoft Entra ID Protection"}]}'::jsonb, ARRAY['1=C']::text[],
  'Azure Information Protection có thể khám phá, phân loại, gắn nhãn và bảo vệ các tài liệu nhạy cảm, bao gồm cả việc áp dụng các dấu hiệu trực quan như hình mờ.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Identity and Security', 'Governance']::text[],
  ''
),
(
  'az-900-question-200', 'az-900', 200, 'For each statement, select Yes if it is true. Otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"Azure Active Directory (Azure AD) requires the implementation of domain Oo controllers on Azure virtual machines.","correctAnswer":"No"},{"id":"2","text":"Azure Active Directory (Azure AD) provides authentication services for resources le) oO hosted in Azure and Microsoft 365.","correctAnswer":"Yes"},{"id":"3","text":"Each user account in Azure Active Directory (Azure AD) can be assigned only oO Oo one license.","correctAnswer":"No"}],"choices":[]}'::jsonb, ARRAY['1:No', '2:Yes', '3:No']::text[],
  'Ô 1: Không - Microsoft Entra ID (trước đây là Microsoft Entra ID) là dịch vụ dựa trên đám mây. Nó không yêu cầu bộ điều khiển miền trên máy ảo. Hộp 2: Có - Microsoft Entra ID (trước đây là Microsoft Entra ID) là nhà cung cấp danh tính tập trung trên đám mây. Đây là dịch vụ xác thực và ủy quyền tích hợp chính nhằm cung cấp quyền truy cập an toàn vào tài nguyên Azure và Microsoft 365. Hộp 3: Không - Tài khoản người dùng trong Azure Active Directory có thể được chỉ định nhiều giấy phép cho các dịch vụ Azure hoặc Microsoft 365 khác nhau. Câu trả lời đúng: 1: Không; 2: Có; 3: Không.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Identity and Security']::text[],
  ''
),
(
  'az-900-question-201', 'az-900', 201, 'Which two types of customers are eligible to use Azure Government to develop a cloud solution? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.',
  '[{"key":"A","text":"a Canadian government contractor"},{"key":"B","text":"a European government contractor"},{"key":"C","text":"a United States government entity"},{"key":"D","text":"a United States government contractor"},{"key":"E","text":"a European government entity"}]'::jsonb, ARRAY['C', 'D']::text[],
  'Câu trả lời đúng: C — một cơ quan chính phủ Hoa Kỳ; D - một nhà thầu của chính phủ Hoa Kỳ. Azure Government là môi trường đám mây được xây dựng đặc biệt để đáp ứng các yêu cầu về tuân thủ và bảo mật của chính phủ Hoa Kỳ. Đám mây có vai trò quan trọng này mang lại sự đổi mới mang tính đột phá cho các khách hàng của chính phủ Hoa Kỳ và đối tác của họ. Azure Government áp dụng cho chính quyền ở mọi cấp độ " từ chính quyền tiểu bang và địa phương đến các cơ quan liên bang bao gồm cả các cơ quan của Bộ Quốc phòng. Sự khác biệt chính giữa Microsoft Azure và Microsoft Azure Government là Azure Government là một đám mây có chủ quyền. Đây là một phiên bản Azure riêng biệt về mặt vật lý, chỉ dành riêng cho khối lượng công việc của chính phủ Hoa Kỳ. Nó được xây dựng dành riêng cho các cơ quan chính phủ và nhà cung cấp giải pháp của họ.', 'Azure Management and Governance', ARRAY['AZ-900', 'Governance']::text[],
  ''
),
(
  'az-900-question-202', 'az-900', 202, 'You need to ensure that when Azure Active Directory (Azure AD) users connect to Azure AD from the Internet by using an anonymous IP address, the users are prompted automatically to change their password. Which Azure service should you use?',
  '[{"key":"A","text":"Azure AD Connect Health"},{"key":"B","text":"Azure AD Privileged Identity Management"},{"key":"C","text":"Azure Advanced Threat Protection (ATP)"},{"key":"D","text":"Azure AD Identity Protection"}]'::jsonb, ARRAY['D']::text[],
  'Câu trả lời đúng: D — Bảo vệ danh tính Azure AD. Microsoft Entra ID Identity Protection bao gồm hai chính sách rủi ro: chính sách rủi ro đăng nhập và chính sách rủi ro người dùng. Rủi ro đăng nhập thể hiện khả năng một yêu cầu xác thực nhất định không được chủ sở hữu danh tính cho phép. Có một số loại phát hiện rủi ro. Một trong số đó là Địa chỉ IP ẩn danh. Loại phát hiện rủi ro này cho biết các lần đăng nhập từ một địa chỉ IP ẩn danh (ví dụ: trình duyệt Tor hoặc VPN ẩn danh). Những địa chỉ IP này thường được sử dụng bởi những kẻ muốn ẩn thông tin đo từ xa thông tin đăng nhập của họ (địa chỉ IP, vị trí, thiết bị, v.v.) nhằm mục đích xấu tiềm ẩn. Bạn có thể định cấu hình chính sách rủi ro khi đăng nhập để yêu cầu người dùng thay đổi mật khẩu của họ.', 'Azure Management and Governance', ARRAY['AZ-900', 'Networking', 'Identity and Security', 'Governance']::text[],
  ''
),
(
  'az-900-question-203', 'az-900', 203, 'Match each term to the correct definition.',
  '{"type":"matching_drag_drop","statements":[{"id":"1","text":"An organization that defines international standards across industries.","correctAnswer":"C"},{"id":"2","text":"An organization that defines standards used by the United States government.","correctAnswer":"D"},{"id":"3","text":"A European regulation that governs data privacy and protection.","correctAnswer":"B"},{"id":"4","text":"A dedicated public cloud for federal and state agencies in the United States.","correctAnswer":"A"}],"choices":[{"key":"A","text":"Azure Government"},{"key":"B","text":"GDPR"},{"key":"C","text":"ISO"},{"key":"D","text":"NIST"}]}'::jsonb, ARRAY['1=C', '2=D', '3=B', '4=A']::text[],
  'ISO công bố các tiêu chuẩn quốc tế, NIST phát triển các tiêu chuẩn và hướng dẫn của Hoa Kỳ, GDPR là quy định bảo vệ dữ liệu của EU và Azure Government là đám mây chuyên dụng của chính phủ Hoa Kỳ.', 'Azure Management and Governance', ARRAY['AZ-900', 'Governance']::text[],
  ''
),
(
  'az-900-question-204', 'az-900', 204, 'To what should an application connect to retrieve security tokens?',
  '[{"key":"A","text":"an Azure Storage account"},{"key":"B","text":"Azure Active Directory (Azure AD)"},{"key":"C","text":"a certificate store"},{"key":"D","text":"an Azure key vault"}]'::jsonb, ARRAY['D']::text[],
  'Câu trả lời đúng: D — kho khóa Azure. Key Vault được thiết kế để lưu trữ bí mật cấu hình cho các ứng dụng máy chủ.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Storage', 'Identity and Security']::text[],
  ''
),
(
  'az-900-question-205', 'az-900', 205, 'Your network contains an Active Directory forest. The forest contains 5,000 user accounts. Your company plans to migrate all network resources to Azure and to decommission the on-premises data center. You need to recommend a solution to minimize the impact on users after the planned migration. What should you recommend?',
  '[{"key":"A","text":"Implement Azure Multi-Factor Authentication (MFA)"},{"key":"B","text":"Sync all the Active Directory user accounts to Azure Active Directory (Azure AD)"},{"key":"C","text":"Instruct all users to change their password"},{"key":"D","text":"Create a guest user account in Azure Active Directory (Azure AD) for each user"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Đồng bộ hóa tất cả tài khoản người dùng Active Directory với Azure Active Directory (Azure AD). Để di chuyển sang Azure và ngừng hoạt động trung tâm dữ liệu tại chỗ, bạn cần tạo 5.000 tài khoản người dùng trong Azure Active Directory. Cách dễ dàng để thực hiện việc này là đồng bộ hóa tất cả tài khoản người dùng Active Directory với Microsoft Entra ID (trước đây là Microsoft Entra ID). Bạn thậm chí có thể đồng bộ hóa mật khẩu của họ để giảm thiểu hơn nữa tác động đến người dùng. Công cụ bạn sẽ sử dụng để đồng bộ hóa các tài khoản là Microsoft Entra ID Connect. Dịch vụ đồng bộ hóa Azure Active Directory Connect (đồng bộ hóa Microsoft Entra ID Connect) là thành phần chính của Microsoft Entra ID Connect. Nó đảm nhiệm tất cả các hoạt động liên quan đến đồng bộ hóa dữ liệu nhận dạng giữa môi trường tại chỗ của bạn và Microsoft Entra ID.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Identity and Security']::text[],
  ''
),
(
  'az-900-question-206', 'az-900', 206, 'You create a resource group named RG1 in Azure Resource Manager. You need to prevent the accidental deletion of the resources in RG1. Which setting should you use? To answer, select the appropriate setting in the answer area.',
  '{"type":"image_hotspot","choices":[{"key":"A","text":"Quickstart","hotspot":{"x":18.8,"y":11.7,"width":69.2,"height":10.4}},{"key":"B","text":"Deployments","hotspot":{"x":18.8,"y":37.2,"width":69.2,"height":10.4}},{"key":"C","text":"Policies","hotspot":{"x":18.8,"y":50,"width":69.2,"height":10.4}},{"key":"D","text":"Locks","hotspot":{"x":18.8,"y":75.1,"width":69.2,"height":10.4}}]}'::jsonb, ARRAY['D']::text[],
  'Áp dụng khóa tài nguyên CanNotDelete ở phạm vi nhóm tài nguyên để ngăn chặn việc vô tình xóa nhóm và tài nguyên của nhóm.', 'Azure Management and Governance', ARRAY['AZ-900', 'Governance']::text[],
  'az900/images/276.png'
),
(
  'az-900-question-207', 'az-900', 207, 'You have a resource group named RG1. You need to prevent the creation of virtual machines in RG1. The solution must ensure that other objects can be created in RG1. What should you use?',
  '[{"key":"A","text":"a lock"},{"key":"B","text":"an Azure role"},{"key":"C","text":"a tag"},{"key":"D","text":"an Azure policy"}]'::jsonb, ARRAY['D']::text[],
  'Câu trả lời đúng: D — chính sách Azure. Chính sách Azure có thể được sử dụng để xác định các yêu cầu đối với thuộc tính tài nguyên trong quá trình triển khai và đối với các tài nguyên hiện có. Azure Policy kiểm soát các thuộc tính như loại hoặc vị trí của tài nguyên. Azure Policy là một dịch vụ trong Azure mà bạn sử dụng để tạo, gán và quản lý chính sách. Các chính sách này thực thi các quy tắc và tác động khác nhau đối với tài nguyên của bạn, do đó, những tài nguyên đó luôn tuân thủ các tiêu chuẩn công ty và thỏa thuận cấp độ dịch vụ của bạn. Trong câu hỏi này, chúng tôi sẽ tạo chính sách Azure được gán cho nhóm tài nguyên từ chối việc tạo máy ảo trong nhóm tài nguyên. Bạn có thể đặt khóa chỉ đọc trên nhóm tài nguyên.', 'Azure Management and Governance', ARRAY['AZ-900', 'Compute', 'Architecture', 'Governance']::text[],
  ''
),
(
  'az-900-question-208', 'az-900', 208, 'You have an Azure subscription and 100 Windows 10 devices. You need to ensure that only users whose devices have the latest security patches installed can access Azure Active Directory (Azure AD)-integrated applications. What should you implement?',
  '[{"key":"A","text":"a conditional access policy"},{"key":"B","text":"Azure Bastion"},{"key":"C","text":"Azure Firewall"},{"key":"D","text":"Azure Policy"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A — chính sách truy cập có điều kiện. Chính sách truy cập có điều kiện là một tính năng của Microsoft Entra ID (trước đây là Microsoft Entra ID) cho phép bạn kiểm soát quyền truy cập vào các ứng dụng đám mây dựa trên một tập hợp các điều kiện. Bạn có thể sử dụng chính sách truy cập có điều kiện để hạn chế quyền truy cập vào các ứng dụng tích hợp Microsoft Entra ID chỉ đối với những thiết bị đáp ứng các yêu cầu bảo mật nhất định, chẳng hạn như cài đặt các bản vá bảo mật mới nhất. Bằng cách triển khai chính sách truy cập có điều kiện, bạn có thể đảm bảo rằng chỉ những người dùng có thiết bị có bản vá bảo mật mới nhất mới có thể truy cập các ứng dụng tích hợp Microsoft Entra ID, đồng thời chặn quyền truy cập đối với người dùng có thiết bị không đáp ứng yêu cầu bảo mật.', 'Azure Management and Governance', ARRAY['AZ-900', 'Identity and Security', 'Architecture', 'Governance']::text[],
  ''
),
(
  'az-900-question-209', 'az-900', 209, 'What can Azure Information Protection encrypt?',
  '[{"key":"A","text":"network traffic"},{"key":"B","text":"documents and email messages"},{"key":"C","text":"an Azure Storage account"},{"key":"D","text":"an Azure SQL database"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — tài liệu và email. Azure Information Protection có thể mã hóa tài liệu và email. Azure Information Protection là một giải pháp dựa trên đám mây giúp tổ chức phân loại và tùy ý bảo vệ tài liệu và email của mình bằng cách áp dụng nhãn. Nhãn có thể được áp dụng tự động bởi quản trị viên xác định các quy tắc và điều kiện, bởi người dùng theo cách thủ công hoặc kết hợp trong đó người dùng được đưa ra đề xuất. Công nghệ bảo vệ sử dụng Azure Rights Management (thường được viết tắt là Azure RMS). Công nghệ này được tích hợp với các dịch vụ và ứng dụng đám mây khác của Microsoft, chẳng hạn như Office 365 và Azure Active Directory. Công nghệ bảo vệ này sử dụng các chính sách mã hóa, nhận dạng và ủy quyền.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Storage', 'Identity and Security']::text[],
  ''
),
(
  'az-900-question-210', 'az-900', 210, 'What should you use to evaluate whether your company''s Azure environment meets regulatory requirements?',
  '[{"key":"A","text":"the Knowledge Center website"},{"key":"B","text":"the Advisor blade from the Azure portal"},{"key":"C","text":"Compliance Manager from the Service Trust Portal"},{"key":"D","text":"the Solutions blade from the Azure portal"}]'::jsonb, ARRAY['C']::text[],
  'Câu trả lời đúng: C — Compliance Manager từ Service Trust Portal. Compliance Manager trong Service Trust Portal là công cụ đánh giá rủi ro dựa trên quy trình làm việc giúp bạn theo dõi, chỉ định và xác minh các hoạt động tuân thủ quy định của tổ chức liên quan đến các dịch vụ Đám mây của Microsoft, chẳng hạn như Microsoft 365, Dynamics 365 và Azure.', 'Azure Management and Governance', ARRAY['AZ-900', 'Governance', 'Management Tools', 'Monitoring']::text[],
  ''
),
(
  'az-900-question-211', 'az-900', 211, 'You have an Azure subscription. Where will you find details on the personal data collected by Microsoft, how Microsoft uses the data, and what the data is used for?',
  '[{"key":"A","text":"the Data Protection Addendum"},{"key":"B","text":"the Microsoft Online Services Terms"},{"key":"C","text":"the Microsoft Privacy Statement"},{"key":"D","text":"Azure Security Center"}]'::jsonb, ARRAY['C']::text[],
  'Câu trả lời đúng: C — Microsoft Privacy Statement. Microsoft Privacy Statement giải thích dữ liệu cá nhân mà Microsoft xử lý, cách Microsoft xử lý dữ liệu đó và cho mục đích gì. Thỏa thuận dịch vụ hiện hành của bạn hoặc Điều khoản bổ sung của bản xem trước có thể chỉ định các biện pháp bảo mật khác hoặc ít hơn đối với một số dịch vụ Xem trước.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Identity and Security', 'Architecture']::text[],
  ''
),
(
  'az-900-question-212', 'az-900', 212, 'For each statement, select Yes if it is true. Otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"Microsoft Entra ID can be used to manage access to on-premises applications.","correctAnswer":"Yes"},{"id":"2","text":"Microsoft Entra ID provides single sign-on (SSO).","correctAnswer":"Yes"},{"id":"3","text":"iOS devices can be registered in Microsoft Entra ID.","correctAnswer":"Yes"}],"choices":[]}'::jsonb, ARRAY['1:Yes', '2:Yes', '3:Yes']::text[],
  'Cả ba câu đều đúng. Microsoft Entra ID hỗ trợ quyền truy cập vào các ứng dụng tại chỗ đã xuất bản, đăng nhập một lần và đăng ký thiết bị cho các nền tảng di động được hỗ trợ.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Identity and Security']::text[],
  ''
),
(
  'az-900-question-213', 'az-900', 213, 'Match each Microsoft resource to the appropriate description.',
  '{"type":"matching_drag_drop","statements":[{"id":"1","text":"Describes which personal data is collected, how the data is used, and what the data is used for.","correctAnswer":"B"},{"id":"2","text":"A legal agreement detailing obligations between Microsoft and a customer regarding processing and security of customer and personal data.","correctAnswer":"C"},{"id":"3","text":"Defines data-processing and security terms for online services, including disclosure, transfer, retention, and deletion.","correctAnswer":"A"}],"choices":[{"key":"A","text":"Data Protection Addendum"},{"key":"B","text":"Microsoft Privacy Statement"},{"key":"C","text":"Online Services Terms"}]}'::jsonb, ARRAY['1=B', '2=C', '3=A']::text[],
  'Tuyên bố về quyền riêng tư giải thích các biện pháp xử lý dữ liệu của Microsoft, Online Services Terms xác định nghĩa vụ dịch vụ theo hợp đồng và Data Protection Addendum cung cấp các cam kết bảo mật và xử lý chi tiết.', 'Azure Management and Governance', ARRAY['AZ-900', 'Governance']::text[],
  ''
),
(
  'az-900-question-214', 'az-900', 214, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Azure China","correctAnswer":"A"}],"choices":[{"key":"A","text":"is operated by Microsoft."},{"key":"B","text":"has feature parity with Azure global."},{"key":"C","text":"services can be accessed from China only."}]}'::jsonb, ARRAY['1=A']::text[],
  '“là một phiên bản riêng biệt của Microsoft Azure” Microsoft Azure do 21Vianet (Azure China) vận hành là một phiên bản dịch vụ đám mây tách biệt về mặt vật lý đặt tại Trung Quốc. Hoàn thành đúng: được vận hành bởi Microsoft.', 'Azure Architecture and Services', ARRAY['AZ-900']::text[],
  ''
),
(
  'az-900-question-215', 'az-900', 215, 'What should you use to evaluate whether your company''s Azure environment meets regulatory requirements?',
  '[{"key":"A","text":"Azure Service Health"},{"key":"B","text":"Azure Knowledge Center"},{"key":"C","text":"Microsoft Defender for Cloud"},{"key":"D","text":"Azure Advisor"}]'::jsonb, ARRAY['C']::text[],
  'Câu trả lời đúng: C — Microsoft Defender for Cloud. Microsoft Defender for Cloud giúp hợp lý hóa quy trình đáp ứng các yêu cầu tuân thủ quy định bằng cách sử dụng bảng thông tin tuân thủ quy định.', 'Azure Management and Governance', ARRAY['AZ-900', 'Identity and Security', 'Governance', 'Monitoring']::text[],
  ''
),
(
  'az-900-question-216', 'az-900', 216, 'For each statement, select Yes if it is true. Otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"The Microsoft Service Trust Portal can be accessed by using a Microsoft cloud services account.","correctAnswer":"Yes"},{"id":"2","text":"Compliance Manager can be used to track an organization''s regulatory compliance activities related to Microsoft cloud services.","correctAnswer":"Yes"},{"id":"3","text":"The My Library feature can be used to save Service Trust Portal documents and resources in one location.","correctAnswer":"Yes"}],"choices":[]}'::jsonb, ARRAY['1:Yes', '2:Yes', '3:Yes']::text[],
  'Cả ba câu đều đúng. Service Trust Portal cung cấp quyền truy cập được xác thực vào các tài nguyên tuân thủ, Compliance Manager theo dõi các hành động cải tiến và Thư viện của tôi sắp xếp nội dung đã lưu.', 'Azure Management and Governance', ARRAY['AZ-900', 'Governance']::text[],
  ''
),
(
  'az-900-question-217', 'az-900', 217, 'Your company has an Azure subscription that contains resources in several regions. You need to create the Azure resource that must be used to meet the policy requirement. What should you create?',
  '[{"key":"A","text":"a read-only lock"},{"key":"B","text":"an Azure policy"},{"key":"C","text":"a management group"},{"key":"D","text":"a reservation"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — chính sách Azure. Chính sách Azure có thể được sử dụng để xác định các yêu cầu đối với thuộc tính tài nguyên trong quá trình triển khai và đối với các tài nguyên hiện có. Azure Policy kiểm soát các thuộc tính như loại hoặc vị trí của tài nguyên. Azure Policy là một dịch vụ trong Azure mà bạn sử dụng để tạo, gán và quản lý chính sách. Các chính sách này thực thi các quy tắc và tác động khác nhau đối với tài nguyên của bạn, do đó, những tài nguyên đó luôn tuân thủ các tiêu chuẩn công ty và thỏa thuận cấp độ dịch vụ của bạn. Azure Policy đáp ứng nhu cầu này bằng cách đánh giá tài nguyên của bạn xem có tuân thủ các chính sách được chỉ định hay không. Tất cả dữ liệu được lưu trữ bởi Azure Policy đều được mã hóa ở phần còn lại. Azure Policy cung cấp một số chính sách tích hợp sẵn có theo mặc định.', 'Azure Management and Governance', ARRAY['AZ-900', 'Architecture', 'Cost Management', 'Governance']::text[],
  ''
),
(
  'az-900-question-218', 'az-900', 218, 'This question requires that you evaluate the underlined text to determine if it is correct. From Azure Cloud Shell, you can track your company''s regulatory standards and regulations, such as ISO 27001. Review the underlined text. If it makes the statement correct, select `No change is needed.` If the statement is incorrect, select the answer choice that makes the statement correct.',
  '[{"key":"A","text":"No change is needed."},{"key":"B","text":"the Microsoft Cloud Partner Portal"},{"key":"C","text":"Compliance Manager"},{"key":"D","text":"the Trust Center"}]'::jsonb, ARRAY['C']::text[],
  'Câu trả lời đúng: C — Compliance Manager. Nó từng là "Trung tâm tin cậy", nhưng bây giờ nó được gọi là Microsoft Purview Compliance Manager. Microsoft Compliance Manager (Bản xem trước) là một công cụ đánh giá rủi ro dựa trên quy trình công việc miễn phí cho phép bạn theo dõi, chỉ định và xác minh các hoạt động tuân thủ quy định liên quan đến dịch vụ đám mây của Microsoft. Mặt khác, Azure Cloud Shell là một shell tương tác, được xác thực, có thể truy cập được bằng trình duyệt để quản lý tài nguyên Azure.', 'Azure Management and Governance', ARRAY['AZ-900', 'Governance', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-219', 'az-900', 219, 'For each statement, select Yes if it is true. Otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"You can create Group Policies in Microsoft Entra ID.","correctAnswer":"No"},{"id":"2","text":"You can join Windows 10 devices to Microsoft Entra ID.","correctAnswer":"Yes"},{"id":"3","text":"You can join Android devices to Microsoft Entra ID.","correctAnswer":"No"}],"choices":[]}'::jsonb, ARRAY['1:No', '2:Yes', '3:No']::text[],
  'Chính sách nhóm truyền thống là khả năng Active Directory tại chỗ. Các thiết bị Windows có thể được tham gia Microsoft Entra, trong khi các thiết bị Android được đăng ký và quản lý thay vì tham gia Microsoft Entra.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Identity and Security']::text[],
  ''
),
(
  'az-900-question-220', 'az-900', 220, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"An Azure Policy initiative definition is a v","correctAnswer":"A"}],"choices":[{"key":"A","text":"collection of policy definitions"},{"key":"B","text":"collection of Azure Policy definition assignments"},{"key":"C","text":"group of Azure Blueprints definitions"},{"key":"D","text":"group of role-based access control (RBAC) role assignments"}]}'::jsonb, ARRAY['1=A']::text[],
  '"thu thập các định nghĩa chính sách" là câu trả lời. Định nghĩa sáng kiến ​​là tập hợp các định nghĩa chính sách được điều chỉnh để đạt được mục tiêu tổng thể duy nhất. Các định nghĩa sáng kiến ​​đơn giản hóa việc quản lý và gán các định nghĩa chính sách. Họ đơn giản hóa bằng cách nhóm một bộ chính sách thành một mục duy nhất. Ví dụ: bạn có thể tạo một sáng kiến ​​có tiêu đề Kích hoạt giám sát trong Microsoft Defender for Cloud, với mục tiêu giám sát tất cả các đề xuất bảo mật có sẵn trong phiên bản Microsoft Defender for Cloud của bạn. Hoàn thành đúng: tập hợp các định nghĩa chính sách.', 'Azure Management and Governance', ARRAY['AZ-900', 'Identity and Security', 'Governance', 'Monitoring']::text[],
  ''
),
(
  'az-900-question-221', 'az-900', 221, 'For each statement, select Yes if it is true. Otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"The General Data Protection Regulation (GDPR) defines data protection and privacy rules.","correctAnswer":"Yes"},{"id":"2","text":"The GDPR applies to organizations that offer goods or services to individuals in the European Union.","correctAnswer":"Yes"},{"id":"3","text":"Azure services can be used to build infrastructure that supports GDPR compliance requirements.","correctAnswer":"Yes"}],"choices":[]}'::jsonb, ARRAY['1:Yes', '2:Yes', '3:Yes']::text[],
  'Cả ba câu đều đúng. GDPR thiết lập các yêu cầu về quyền riêng tư, có phạm vi ngoài lãnh thổ dành cho các tổ chức phục vụ người dân ở EU và Azure cung cấp các dịch vụ cũng như khả năng tuân thủ giúp khách hàng đáp ứng nghĩa vụ của họ.', 'Azure Management and Governance', ARRAY['AZ-900', 'Governance']::text[],
  ''
),
(
  'az-900-question-222', 'az-900', 222, 'Your company plans to migrate all on-premises data to Azure. You need to identify whether Azure complies with the company''s regional requirements. What should you use?',
  '[{"key":"A","text":"the Knowledge Center"},{"key":"B","text":"Azure Marketplace"},{"key":"C","text":"the MyApps portal"},{"key":"D","text":"the Trust Center"}]'::jsonb, ARRAY['D']::text[],
  'Câu trả lời đúng: D — Trung tâm tin cậy. Azure có hơn 90 chứng nhận tuân thủ, trong đó có hơn 50 chứng nhận cụ thể cho các khu vực và quốc gia trên toàn cầu, chẳng hạn như Hoa Kỳ, Liên minh Châu Âu, Đức, Nhật Bản, Vương quốc Anh, Ấn Độ và Trung Quốc. Bạn có thể xem danh sách chứng nhận tuân thủ trong Trung tâm tin cậy để xác định xem Azure có đáp ứng các yêu cầu khu vực của bạn hay không.', 'Azure Management and Governance', ARRAY['AZ-900', 'Architecture', 'Governance', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-223', 'az-900', 223, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"____ is the process of establishing the identity of a user or service that wants to access a resource.","correctAnswer":"A"}],"choices":[{"key":"A","text":"Authentication"},{"key":"B","text":"Authorization"},{"key":"C","text":"Conditional Access"},{"key":"D","text":"Synchronization"}]}'::jsonb, ARRAY['1=A']::text[],
  'Xác thực xác minh người dùng hoặc dịch vụ là ai. Ủy quyền xác định danh tính được xác thực nào được phép truy cập.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Identity and Security']::text[],
  ''
),
(
  'az-900-question-224', 'az-900', 224, 'What is guaranteed in an Azure Service Level Agreement (SLA) for virtual machines?',
  '[{"key":"A","text":"uptime"},{"key":"B","text":"feature availability"},{"key":"C","text":"bandwidth"},{"key":"D","text":"performance"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A - thời gian hoạt động. SLA dành cho máy ảo đảm bảo ''thời gian hoạt động''. Lượng thời gian hoạt động được đảm bảo tùy thuộc vào các yếu tố như liệu máy ảo có nằm trong nhóm khả dụng hay vùng khả dụng nếu có nhiều VM, sự phân bổ của máy ảo nếu có nhiều hơn một hoặc loại ổ đĩa nếu đó là một VM. SLA dành cho Máy ảo nêu rõ: ✑ Đối với tất cả các Máy ảo có hai phiên bản trở lên được triển khai trên hai Vùng sẵn sàng trở lên trong cùng một khu vực Azure, chúng tôi đảm bảo bạn sẽ có Kết nối Máy ảo với ít nhất một phiên bản trong ít nhất 99,99% thời gian.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Architecture']::text[],
  ''
),
(
  'az-900-question-225', 'az-900', 225, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"An Azure service is available to all Azure customers when it is in ____.","correctAnswer":"A"}],"choices":[{"key":"A","text":"public preview"},{"key":"B","text":"private preview"},{"key":"C","text":"development"},{"key":"D","text":"an Enterprise Agreement subscription"}]}'::jsonb, ARRAY['1=A']::text[],
  'Các tính năng xem trước công khai có sẵn rộng rãi để khách hàng đánh giá. Quyền truy cập bản xem trước riêng tư bị hạn chế, trong khi tính khả dụng chung là giai đoạn phát hành sẵn sàng sản xuất.', 'Azure Management and Governance', ARRAY['AZ-900', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-226', 'az-900', 226, 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. Your company plans to purchase an Azure subscription. The company''s support policy states that the Azure environment must provide an option to access support engineers by phone or email. You need to recommend which support plan meets the support policy requirement. Solution: Recommend a Basic support plan. Does this meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Không. B. Không Gói hỗ trợ Basic thường cung cấp hỗ trợ hạn chế, chẳng hạn như quyền truy cập vào tài liệu, diễn đàn cộng đồng và tài nguyên tự trợ giúp. Nó không bao gồm hỗ trợ kỹ thuật để khắc phục sự cố, hỗ trợ tư vấn hoặc hỗ trợ cho các thỏa thuận cấp độ dịch vụ (SLA). Nếu yêu cầu về chính sách hỗ trợ bao gồm hỗ trợ kỹ thuật trực tiếp, thời gian phản hồi nhanh hơn hoặc các tính năng hỗ trợ nâng cao khác thì gói cấp cao hơn như Developer, Standard, Professional Direct hoặc Premier sẽ phù hợp hơn. Do đó, đề xuất gói hỗ trợ Basic không đáp ứng được mục tiêu nếu yêu cầu bao gồm các dịch vụ hỗ trợ toàn diện hơn.', 'Azure Management and Governance', ARRAY['AZ-900', 'Architecture', 'Governance', 'Monitoring']::text[],
  ''
),
(
  'az-900-question-227', 'az-900', 227, 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. Your company plans to purchase an Azure subscription. The company''s support policy states that the Azure environment must provide an option to access support engineers by phone or email. You need to recommend which support plan meets the support policy requirement. Solution: Recommend a Standard support plan. Does this meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A – Có. Các gói hỗ trợ Standard, Professional Direct và Premier có hỗ trợ kỹ thuật cho các kỹ sư qua email và điện thoại.', 'Azure Management and Governance', ARRAY['AZ-900', 'Architecture', 'Governance']::text[],
  ''
),
(
  'az-900-question-228', 'az-900', 228, 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. Your company plans to purchase an Azure subscription. The company''s support policy states that the Azure environment must provide an option to access support engineers by phone or email. You need to recommend which support plan meets the support policy requirement. Solution: Recommend a Premier support plan. Does this meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A – Có. Các gói hỗ trợ Standard, Professional Direct và Premier có hỗ trợ kỹ thuật cho các kỹ sư qua email và điện thoại.', 'Azure Management and Governance', ARRAY['AZ-900', 'Architecture', 'Governance']::text[],
  ''
),
(
  'az-900-question-229', 'az-900', 229, 'Your company plans to request an architectural review of an Azure environment from Microsoft. The company currently has a Basic support plan. You need to recommend a new support plan for the company. The solution must minimize costs. Which support plan should you recommend?',
  '[{"key":"A","text":"Premier"},{"key":"B","text":"Developer"},{"key":"C","text":"Professional Direct"},{"key":"D","text":"Standard"}]'::jsonb, ARRAY['C']::text[],
  'Câu trả lời đúng: C — Professional Direct. Professional Direct cung cấp Hướng dẫn từ nhóm người quản lý phân phối ProDirect. Developer và Standard cung cấp hướng dẫn chung.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-230', 'az-900', 230, 'For each statement, select Yes if it is true. Otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"The Azure portal identifies whether a service is generally available or in public preview.","correctAnswer":"Yes"},{"id":"2","text":"A service in general availability is no longer updated with new features.","correctAnswer":"No"},{"id":"3","text":"Resources created with a service in public preview must always be recreated when the service becomes generally available.","correctAnswer":"No"}],"choices":[]}'::jsonb, ARRAY['1:Yes', '2:No', '3:No']::text[],
  'Dịch vụ xem trước nhãn Azure portal. Tính khả dụng rộng rãi không kết thúc việc phát triển tính năng và các tài nguyên xem trước không yêu cầu giải trí một cách phổ biến khi dịch vụ đạt đến tính khả dụng rộng rãi.', 'Azure Management and Governance', ARRAY['AZ-900', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-231', 'az-900', 231, 'What is required to use Azure Cost Management?',
  '[{"key":"A","text":"a Dev/Test subscription"},{"key":"B","text":"Software Assurance"},{"key":"C","text":"an Enterprise Agreement (EA)"},{"key":"D","text":"a pay-as-you-go subscription"}]'::jsonb, ARRAY['D']::text[],
  'Câu trả lời đúng: D — đăng ký trả tiền khi sử dụng. D (trả tiền khi bạn sử dụng). Nó cũng hỗ trợ EA. Sự khác biệt nằm ở loại dữ liệu được quản lý trong công cụ Quản lý chi phí. "Quản lý chi phí bao gồm tất cả việc sử dụng và mua hàng, bao gồm đặt chỗ và dịch vụ của bên thứ ba cho tài khoản Thỏa thuận doanh nghiệp (EA). Tài khoản Thỏa thuận khách hàng của Microsoft và đăng ký cá nhân với mức giá thanh toán theo mức sử dụng chỉ bao gồm việc sử dụng từ các dịch vụ Azure và Marketplace. Hỗ trợ và các chi phí khác không được bao gồm.', 'Cloud Concepts', ARRAY['AZ-900', 'Architecture', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-232', 'az-900', 232, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"After an Azure trial account expires, you are unable to ____.","correctAnswer":"B"}],"choices":[{"key":"A","text":"create additional Microsoft Entra user accounts"},{"key":"B","text":"start an existing Azure virtual machine"},{"key":"C","text":"access data already stored in Azure"},{"key":"D","text":"access the Azure portal"}]}'::jsonb, ARRAY['1=B']::text[],
  'Khi đăng ký dùng thử bị vô hiệu hóa, tài nguyên điện toán không thể khởi động được. Cổng vẫn có thể truy cập được để có thể nâng cấp đăng ký và các đối tượng nhận dạng không bị tính phí khi tính toán VM.', 'Azure Management and Governance', ARRAY['AZ-900', 'Cost Management', 'Compute']::text[],
  ''
),
(
  'az-900-question-233', 'az-900', 233, 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. Your company plans to purchase an Azure subscription. The company''s support policy states that the Azure environment must provide an option to access support engineers by phone or email. You need to recommend which support plan meets the support policy requirement. Solution: Recommend a Professional Direct support plan. Does this meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A – Có. Gói hỗ trợ Basic không có bất kỳ hỗ trợ kỹ thuật nào dành cho kỹ sư. Gói hỗ trợ Developer chỉ hỗ trợ kỹ thuật cho kỹ sư qua email. Các gói hỗ trợ Standard, Professional Direct và Premier có hỗ trợ kỹ thuật cho các kỹ sư qua email và điện thoại.', 'Azure Management and Governance', ARRAY['AZ-900', 'Architecture', 'Governance']::text[],
  ''
),
(
  'az-900-question-234', 'az-900', 234, 'Your company has a Software Assurance agreement that includes Microsoft SQL Server licenses. You plan to deploy SQL Server on Azure virtual machines. What should you do to minimize licensing costs for the deployment?',
  '[{"key":"A","text":"Deallocate the virtual machines during off hours."},{"key":"B","text":"Use Azure Hybrid Benefit."},{"key":"C","text":"Configure Azure Cost Management budgets."},{"key":"D","text":"Use Azure reservations."}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Sử dụng Azure Hybrid Benefit. Azure Hybrid Benefit là một lợi ích cấp phép giúp bạn giảm đáng kể chi phí chạy khối lượng công việc của mình trên đám mây. Nó hoạt động bằng cách cho phép bạn sử dụng giấy phép Windows Server và SQL Server hỗ trợ Bảo hiểm phần mềm tại chỗ trên Azure.', 'Azure Management and Governance', ARRAY['AZ-900', 'Compute', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-235', 'az-900', 235, 'Your company has 10 departments. The company plans to implement an Azure environment. You need to ensure that each department can use a different payment option for the Azure services it consumes. What should you create for each department?',
  '[{"key":"A","text":"a reservation"},{"key":"B","text":"a subscription"},{"key":"C","text":"a resource group"},{"key":"D","text":"a container instance"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — đăng ký. Có các tùy chọn thanh toán khác nhau trong Azure bao gồm tài khoản trả theo mức sử dụng (PAYG), Thỏa thuận doanh nghiệp (EA) và Thỏa thuận khách hàng của Microsoft (MCA). Chi phí Azure của bạn là ''mỗi lần đăng ký''. Bạn phải trả phí hàng tháng cho tất cả tài nguyên trong gói đăng ký. Do đó, để sử dụng các tùy chọn thanh toán khác nhau cho mỗi bộ phận, bạn sẽ cần tạo một gói đăng ký riêng cho mỗi bộ phận. Bạn có thể tạo nhiều đăng ký trong một đối tượng thuê Azure Active Directory.', 'Cloud Concepts', ARRAY['AZ-900', 'Compute', 'Identity and Security', 'Architecture']::text[],
  ''
),
(
  'az-900-question-236', 'az-900', 236, 'For each statement, select Yes if it is true. Otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"The Service Level Agreement (SLA) guaranteed uptime for paid Azure services is at least 99.9 percent.","correctAnswer":"Yes"},{"id":"2","text":"Companies can increase the Service Level Agreement SLA) guaranteed uptime by adding Azure resources to multiple regions.","correctAnswer":"Yes"},{"id":"3","text":"Companies can increase the Service Level Agreement SLA) guaranteed uptime by purchasing multiple subscriptions.","correctAnswer":"No"}],"choices":[]}'::jsonb, ARRAY['1:Yes', '2:Yes', '3:No']::text[],
  'Hộp 1: Có - SLA thay đổi dựa trên loại tài nguyên và phân bổ vị trí của tài nguyên. Tuy nhiên, thời gian hoạt động tối thiểu cho tất cả các dịch vụ Azure là 99,9%. Hộp 2: Có - Thời gian hoạt động được đảm bảo của SLA tăng lên (thường lên tới 99,95%) khi tài nguyên được triển khai trên nhiều khu vực. Ô 3: Không - Số lượng đăng ký không liên quan đến thời gian hoạt động của SLA. Bạn có thể triển khai tài nguyên tới nhiều khu vực trong một đăng ký hoặc bạn có thể có nhiều đăng ký với tài nguyên được triển khai cho cùng một khu vực. Câu trả lời đúng: 1: Có; 2: Có; 3: Không.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Architecture']::text[],
  ''
),
(
  'az-900-question-237', 'az-900', 237, 'Which statement accurately describes the Modern Lifecycle Policy for Azure services?',
  '[{"key":"A","text":"Microsoft provides mainstream support for a service for five years."},{"key":"B","text":"Microsoft provides a minimum of 12 months'' notice before ending support for a service."},{"key":"C","text":"After a service is made generally available, Microsoft provides support for the service for a minimum of four years."},{"key":"D","text":"When a service is retired, you can purchase extended support for the service for up to five years."}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Microsoft cung cấp thông báo tối thiểu 12 tháng trước khi kết thúc hỗ trợ cho một dịch vụ. Đối với các sản phẩm chịu sự điều chỉnh của Chính sách Vòng đời Hiện đại, Microsoft sẽ cung cấp thông báo tối thiểu 12 tháng trước khi kết thúc hỗ trợ nếu không có sản phẩm hoặc dịch vụ kế nhiệm nào được cung cấp " ngoại trừ các dịch vụ miễn phí hoặc bản phát hành xem trước.', 'Azure Management and Governance', ARRAY['AZ-900', 'Governance']::text[],
  ''
),
(
  'az-900-question-238', 'az-900', 238, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"You can use vin Azure to send email alerts when the cost of the current","correctAnswer":"C"}],"choices":[{"key":"A","text":"Advisor recommendations"},{"key":"B","text":"Access control (IAM)"},{"key":"C","text":"Budget alerts"},{"key":"D","text":"Compliance"}]}'::jsonb, ARRAY['1=C']::text[],
  'Cảnh báo ngân sách thông báo cho bạn khi chi tiêu, dựa trên mức sử dụng hoặc chi phí, đạt hoặc vượt quá số tiền được xác định trong điều kiện cảnh báo của ngân sách. Ngân sách Quản lý chi phí được tạo bằng Azure portal hoặc Azure Tiêu dùng API. Hoàn thành đúng: Thông báo ngân sách.', 'Cloud Concepts', ARRAY['AZ-900', 'Architecture', 'Cost Management', 'Governance']::text[],
  ''
),
(
  'az-900-question-239', 'az-900', 239, 'Your company has an Azure subscription that contains the following unused resources: ✑ 20 user accounts in Azure Active Directory (Azure AD) ✑ Five groups in Azure AD ✑ 10 public IP addresses ✑ 10 network interfaces You need to reduce the Azure costs for the company. Which unused resources should you remove?',
  '[{"key":"A","text":"the network interfaces"},{"key":"B","text":"the public IP addresses"},{"key":"C","text":"the groups"},{"key":"D","text":"the user accounts"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — địa chỉ IP công cộng. Bạn bị tính phí cho các địa chỉ IP công cộng. Do đó, việc xóa các địa chỉ IP công cộng không sử dụng sẽ giảm chi phí Azure.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Identity and Security', 'Architecture', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-240', 'az-900', 240, 'For each statement, select Yes if it is true. Otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"Storing 1 TB of data in Azure Blob storage will always cost the same, regardless of the Azure region in which the data is located. Oo","correctAnswer":"No"},{"id":"2","text":"When you use a general-purpose v2 Azure Storage account, you are only charged o for the amount of data that is stored. All read and write operations are free.","correctAnswer":"No"},{"id":"3","text":"Transferring data between Azure Storage accounts in different Azure regions is p free.","correctAnswer":"No"}],"choices":[]}'::jsonb, ARRAY['1:No', '2:No', '3:No']::text[],
  'Trong nước là miễn phí. Gửi đi được trả cho mỗi GB. Tiền thuê lưu trữ được trả theo GB/tháng. Hoạt động đọc/ghi lưu trữ được trả phí. Hộp 1: Không - Giá lưu trữ Azure thay đổi theo khu vực. Nếu sử dụng trang giá lưu trữ Azure, bạn có thể chọn các khu vực khác nhau và xem mức giá thay đổi như thế nào theo khu vực. Ô 2: Không - Bạn bị tính phí cho các hoạt động đọc và ghi trong tài khoản lưu trữ v2 cho mục đích chung. Ô 3: Không - Bạn sẽ bị tính phí cho các hoạt động đọc của tài khoản lưu trữ nguồn và ghi vào tài khoản lưu trữ đích. Câu trả lời đúng: 1: Không; 2: Không; 3: Không.', 'Azure Management and Governance', ARRAY['AZ-900', 'Storage', 'Architecture', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-241', 'az-900', 241, 'Who can use the Azure Total Cost of Ownership (TCO) calculator?',
  '[{"key":"A","text":"billing readers for an Azure subscription only"},{"key":"B","text":"owners for an Azure subscription only"},{"key":"C","text":"anyone"},{"key":"D","text":"all users who have an account in Azure Active Directory (Azure AD) that is linked to an Azure subscription only"}]'::jsonb, ARRAY['C']::text[],
  'Câu trả lời đúng: C - bất cứ ai. Bạn không cần đăng ký Azure để làm việc với Máy tính TCO.', 'Azure Management and Governance', ARRAY['AZ-900', 'Identity and Security', 'Architecture', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-242', 'az-900', 242, 'Which task can you perform by using Azure Advisor?',
  '[{"key":"A","text":"Integrate Active Directory and Azure Active Directory (Azure AD)."},{"key":"B","text":"Estimate the costs of an Azure solution."},{"key":"C","text":"Confirm that Azure subscription security follows best practices."},{"key":"D","text":"Evaluate which on-premises resources can be migrated to Azure."}]'::jsonb, ARRAY['C']::text[],
  'Câu trả lời đúng: C — Xác nhận rằng bảo mật đăng ký Azure tuân theo các phương pháp hay nhất. Ước tính giá được cung cấp bởi công cụ tính giá. Cố vấn cung cấp các phương pháp hay nhất có liên quan để giúp bạn cải thiện độ tin cậy, bảo mật và hiệu suất, đạt được sự xuất sắc trong hoạt động và giảm chi phí. Định cấu hình Cố vấn để nhắm mục tiêu các đăng ký và nhóm tài nguyên cụ thể, nhằm tập trung vào các hoạt động tối ưu hóa quan trọng. Truy cập Advisor thông qua Azure portal, Giao diện dòng lệnh Azure (CLI) hoặc Advisor API. Hoặc định cấu hình cảnh báo để tự động thông báo cho bạn về các đề xuất mới.', 'Azure Management and Governance', ARRAY['AZ-900', 'Cloud Benefits', 'Identity and Security', 'Architecture']::text[],
  ''
),
(
  'az-900-question-243', 'az-900', 243, 'For each statement, select Yes if it is true. Otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"a subset of Azure services.","correctAnswer":"Yes"},{"id":"2","text":"All Azure free accounts expire after a specific period. Oo","correctAnswer":"Yes"},{"id":"3","text":"You can create up to 10 Azure free accounts by using the same Microsoft account. Oo","correctAnswer":"No"}],"choices":[]}'::jsonb, ARRAY['1:Yes', '2:Yes', '3:No']::text[],
  'Ô 1: Có Hộp 2: Có - Tất cả tài khoản miễn phí đều hết hạn sau 12 tháng. Ô 3: Không - Bạn chỉ có thể tạo một tài khoản Azure miễn phí cho mỗi tài khoản Microsoft. Câu trả lời đúng: 1: Có; 2: Có; 3: Không.', 'Azure Architecture and Services', ARRAY['AZ-900']::text[],
  ''
),
(
  'az-900-question-244', 'az-900', 244, 'You have an Azure application that uses the services shown in the following table. How should you calculate the composite SLA for the application?',
  '[{"key":"A","text":"0.999 * 0.9999 = 0.9989001 = 99.89001%"},{"key":"B","text":"0.999 / 0.9999 = 0.9991 = 99.91%"},{"key":"C","text":"Max(0.999, 0.9999) = 0.9999 = 99.99%"},{"key":"D","text":"Min(0.999, 0.9999) = 0.999 = 99.9%"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A — 0,999 * 0,9999 = 0,9989001 = 99,89001%. SLA tổng hợp liên quan đến nhiều dịch vụ hỗ trợ một ứng dụng, mỗi dịch vụ có mức độ sẵn sàng khác nhau. Ví dụ: hãy xem xét một ứng dụng web Dịch vụ ứng dụng ghi vào Cơ sở dữ liệu Azure SQL. Tại thời điểm viết bài này, các dịch vụ Azure này có SLA sau: ✑ Ứng dụng web Dịch vụ ứng dụng = 99,95% ✑ Cơ sở dữ liệu SQL = 99,99% Thời gian ngừng hoạt động tối đa mà bạn mong đợi đối với ứng dụng này là bao nhiêu? Nếu một trong hai dịch vụ bị lỗi thì toàn bộ ứng dụng sẽ bị lỗi. Xác suất xảy ra lỗi của mỗi dịch vụ là độc lập, do đó SLA tổng hợp cho ứng dụng này là 99,95% ֳ— 99,99% = 99,94%.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute']::text[],
  ''
),
(
  'az-900-question-245', 'az-900', 245, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"W provide access to unused Azure compute capacity","correctAnswer":"C"}],"choices":[{"key":"A","text":"Azure Container Instances at deep discounts"},{"key":"B","text":"Azure Reserved Virtual Machine Instances"},{"key":"C","text":"Azure Spot virtual machine instances"},{"key":"D","text":"Azure virtual machine scale sets"}]}'::jsonb, ARRAY['1=C']::text[],
  '"Phiên bản Azure Spot VM" là câu trả lời. Sử dụng Máy ảo Azure Spot cho phép bạn tận dụng dung lượng chưa sử dụng của chúng tôi với mức tiết kiệm chi phí đáng kể. Tại bất kỳ thời điểm nào khi Azure cần lấy lại dung lượng, cơ sở hạ tầng Azure sẽ loại bỏ các Máy ảo Azure Spot. Do đó, Máy ảo Azure Spot rất phù hợp cho khối lượng công việc có thể xử lý các gián đoạn như công việc xử lý hàng loạt, môi trường phát triển/kiểm tra, khối lượng công việc điện toán lớn, v.v. Hoàn thành đúng: Phiên bản máy ảo Azure Spot.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-246', 'az-900', 246, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"To stop compute charges for an unused Azure virtual machine, you should ____.","correctAnswer":"C"}],"choices":[{"key":"A","text":"disconnect the Remote Desktop session"},{"key":"B","text":"put the virtual machine in sleep mode"},{"key":"C","text":"select Stop for the virtual machine in the Azure portal"},{"key":"D","text":"shut down Windows inside the Remote Desktop session"}]}'::jsonb, ARRAY['1=C']::text[],
  'Việc dừng và hủy phân bổ VM khỏi Azure sẽ giải phóng phân bổ tính toán của nó. Chỉ ngắt kết nối hoặc tắt bên trong khách mới có thể khiến VM được phân bổ và tính phí.', 'Azure Management and Governance', ARRAY['AZ-900', 'Cost Management', 'Compute']::text[],
  ''
),
(
  'az-900-question-247', 'az-900', 247, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Select the answer that correctly completes the sentence.","correctAnswer":"A"}],"choices":[{"key":"A","text":"The Ww explains what data Microsoft processes, how Microsoft"},{"key":"B","text":"Microsoft Product Terms"},{"key":"C","text":"Microsoft Online Service Level Agreement"},{"key":"D","text":"Online Subscription Agreement for Microsoft Azure"}]}'::jsonb, ARRAY['1=A']::text[],
  'Hộp: Tuyên bố về quyền riêng tư của Dịch vụ trực tuyến của Microsoft Microsoft Privacy Statement - Quyền riêng tư của bạn rất quan trọng đối với chúng tôi. Tuyên bố về quyền riêng tư này giải thích dữ liệu cá nhân mà Microsoft xử lý, cách Microsoft xử lý dữ liệu đó và cho mục đích gì. Hoàn thành đúng: Ww giải thích dữ liệu nào Microsoft xử lý, cách Microsoft.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Architecture']::text[],
  ''
),
(
  'az-900-question-248', 'az-900', 248, 'You have 1,000 virtual machines hosted on the Hyper-V hosts in a data center. You plan to migrate all the virtual machines to an Azure pay-as-you-go subscription. You need to identify which expenditure model to use for the planned Azure solution. Which expenditure model should you identify?',
  '[{"key":"A","text":"scalable"},{"key":"B","text":"operational"},{"key":"C","text":"elastic"},{"key":"D","text":"capital"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — đang hoạt động. Một trong những thay đổi lớn mà bạn sẽ phải đối mặt khi chuyển từ đám mây tại chỗ sang đám mây công cộng là việc chuyển từ chi tiêu vốn (mua phần cứng) sang chi phí vận hành (trả tiền cho dịch vụ khi bạn sử dụng). Việc chuyển đổi này cũng yêu cầu quản lý chi phí của bạn cẩn thận hơn. Lợi ích của đám mây là bạn có thể tác động cơ bản và tích cực đến chi phí của dịch vụ bạn sử dụng chỉ bằng cách tắt hoặc thay đổi kích thước dịch vụ khi không cần thiết.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Models', 'Cloud Benefits', 'Compute']::text[],
  ''
),
(
  'az-900-question-249', 'az-900', 249, 'For each statement, select Yes if it is true. Otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"A company has complete control of the resources and security for its private cloud.","correctAnswer":"Yes"},{"id":"2","text":"A hybrid cloud solution enables a company to control whether its applications run on-premises or in the cloud.","correctAnswer":"Yes"},{"id":"3","text":"Companies are responsible for capital expenditure when they scale up a virtual machine hosted in a public cloud.","correctAnswer":"No"}],"choices":[]}'::jsonb, ARRAY['1:Yes', '2:Yes', '3:No']::text[],
  'Đám mây riêng cung cấp cho tổ chức quyền kiểm soát môi trường của nó và mô hình kết hợp mang lại sự linh hoạt về vị trí. Việc mở rộng quy mô máy ảo đám mây công cộng thường là chi phí vận hành, dựa trên mức tiêu dùng hơn là mua vốn.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Models', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-250', 'az-900', 250, 'Which Service Level Agreement (SLA) is provided for Azure services in public preview?',
  '[{"key":"A","text":"Each service defines its own SLA"},{"key":"B","text":"The SLA will be 99%"},{"key":"C","text":"The SLA will be 1% less than the general availability (GA) SLA"},{"key":"D","text":"The SLA will be 99.95%"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A — Mỗi dịch vụ xác định SLA của riêng nó. Dịch vụ hỗ trợ khách hàng của Microsoft sẽ cung cấp các dịch vụ hỗ trợ trong giai đoạn này nhưng không áp dụng các thỏa thuận cấp độ dịch vụ thông thường', 'Azure Architecture and Services', ARRAY['AZ-900']::text[],
  ''
),
(
  'az-900-question-251', 'az-900', 251, 'What is the longest term you can purchase for Azure Reserved VM instances?',
  '[{"key":"A","text":"one year"},{"key":"B","text":"five years"},{"key":"C","text":"four years"},{"key":"D","text":"three years"}]'::jsonb, ARRAY['D']::text[],
  'Câu trả lời đúng: D — ba năm. Đặt trước Azure giúp bạn tiết kiệm tiền bằng cách cam kết kế hoạch một năm hoặc ba năm cho nhiều sản phẩm. Cam kết cho phép bạn được giảm giá trên các tài nguyên bạn sử dụng. Việc đặt trước có thể giảm đáng kể chi phí tài nguyên của bạn tới 72% so với mức giá trả theo mức sử dụng.', 'Cloud Concepts', ARRAY['AZ-900', 'Compute', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-252', 'az-900', 252, 'Your company has 10 offices. You plan to generate several billing reports from the Azure portal. Each report will contain the Azure resource utilization of each office. Which Azure Resource Manager feature should you use before you generate the reports?',
  '[{"key":"A","text":"tags"},{"key":"B","text":"templates"},{"key":"C","text":"locks"},{"key":"D","text":"policies"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A - thẻ. Bạn có thể sử dụng thẻ tài nguyên để “gắn nhãn” tài nguyên Azure. Thẻ là các thành phần siêu dữ liệu được gắn vào tài nguyên. Thẻ bao gồm các cặp chuỗi khóa/giá trị. Trong câu hỏi này, chúng tôi sẽ gắn thẻ cho mỗi tài nguyên để xác định từng văn phòng. Ví dụ: Vị trí = Office1. Khi tất cả tài nguyên Azure được gắn thẻ, bạn có thể tạo báo cáo để liệt kê tất cả tài nguyên dựa trên giá trị của thẻ. Ví dụ: Tất cả các tài nguyên được Office1 sử dụng.', 'Azure Management and Governance', ARRAY['AZ-900', 'Governance', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-253', 'az-900', 253, 'This question requires that you evaluate the underlined text to determine if it is correct. If Microsoft plans to end support for an Azure service that does NOT have a successor service, Microsoft will provide notification at least 12 months before. Review the underlined text. If it makes the statement correct, select `No change is needed`. If the statement is incorrect, select the answer choice that makes the statement correct.',
  '[{"key":"A","text":"No change is needed."},{"key":"B","text":"6 months"},{"key":"C","text":"90 days"},{"key":"D","text":"30 days"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A — Không cần thay đổi. Chính sách Vòng đời Hiện đại bao gồm các sản phẩm và dịch vụ được bảo trì và hỗ trợ liên tục. Đối với các sản phẩm chịu sự điều chỉnh của Chính sách Vòng đời Hiện đại, Microsoft sẽ cung cấp thông báo tối thiểu 12 tháng trước khi kết thúc hỗ trợ nếu không có sản phẩm hoặc dịch vụ kế nhiệm nào được cung cấp", ngoại trừ các dịch vụ miễn phí hoặc bản phát hành xem trước.', 'Azure Management and Governance', ARRAY['AZ-900', 'Governance']::text[],
  ''
),
(
  'az-900-question-254', 'az-900', 254, 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. Your company has an Azure subscription that contains the following unused resources: ✑ 20 user accounts in Azure Active Directory (Azure AD) ✑ Five groups in Azure AD ✑ 10 public IP addresses ✑ 10 network interfaces You need to reduce the Azure costs for the company. Solution: You remove the unused network interfaces. Does this meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Không. Bạn không bị tính phí cho các giao diện mạng không sử dụng. Do đó, việc xóa các giao diện mạng không sử dụng sẽ không làm giảm chi phí Azure cho công ty.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Identity and Security', 'Architecture', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-255', 'az-900', 255, 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. Your company has an Azure subscription that contains the following unused resources: ✑ 20 user accounts in Azure Active Directory (Azure AD) Five groups in Azure AD - ✑ 10 public IP addresses ✑ 10 network interfaces You need to reduce the Azure costs for the company. Solution: You remove the unused public IP addresses. Does this meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A – Có. Bạn bị tính phí cho các địa chỉ IP công cộng. Do đó, việc xóa các địa chỉ IP công cộng không sử dụng sẽ giảm chi phí Azure.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Identity and Security', 'Architecture', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-256', 'az-900', 256, 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. Your company has an Azure subscription that contains the following unused resources: ✑ 20 user accounts in Azure Active Directory (Azure AD) ✑ Five groups in Azure AD ✑ 10 public IP addresses ✑ 10 network interfaces You need to reduce the Azure costs for the company. Solution: You remove the unused user accounts. Does this meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Không. Bạn không bị tính phí đối với tài khoản người dùng. Do đó, việc xóa các tài khoản người dùng không sử dụng sẽ không làm giảm chi phí Azure cho công ty.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Identity and Security', 'Architecture', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-257', 'az-900', 257, 'For each statement, select Yes if it is true. Otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"By creating additional resource groups in an Azure subscription, additional &) costs are incurred.","correctAnswer":"No"},{"id":"2","text":"By copying several gigabits of data to Azure from an on-premises network over a VPN, additional data transfer costs are incurred.","correctAnswer":"No"},{"id":"3","text":"By copying several GB of data from Azure to an on-premises network over a VPN, additional data transfer costs are incurred.","correctAnswer":"Yes"}],"choices":[]}'::jsonb, ARRAY['1:No', '2:No', '3:Yes']::text[],
  'Hộp 1: Không - Nhóm tài nguyên là vùng chứa logic cho tài nguyên Azure. Bạn không trả tiền cho các nhóm tài nguyên. Hộp 2: Không - Dữ liệu xâm nhập qua VPN là dữ liệu ''vào'' Azure qua VPN. Bạn không bị tính phí truyền dữ liệu khi nhập dữ liệu. Hộp 3: Có - Dữ liệu đi ra qua VPN là dữ liệu ''đi ra ngoài'' của Azure qua VPN. Bạn bị tính phí cho việc truyền dữ liệu. Câu trả lời đúng: 1: Không; 2: Không; 3: Vâng.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Networking', 'Architecture']::text[],
  ''
),
(
  'az-900-question-258', 'az-900', 258, 'This question requires that you evaluate the underlined text to determine if it is correct. A support plan solution that gives you best practice information, health status and notifications, and 24/7 access to billing information at the lowest possible cost is a Standard support plan. Review the underlined text. If it makes the statement correct, select `No change is needed`. If the statement is incorrect, select the answer choice that makes the statement correct.',
  '[{"key":"A","text":"No change is needed"},{"key":"B","text":"Developer"},{"key":"C","text":"Basic"},{"key":"D","text":"Premier"}]'::jsonb, ARRAY['C']::text[],
  'Câu trả lời đúng: C — Basic. Gói hỗ trợ cơ bản cung cấp: ✑ Quyền truy cập 24x7 vào hỗ trợ thanh toán và đăng ký, tự trợ giúp trực tuyến, tài liệu, sách trắng và diễn đàn hỗ trợ ✑ Các phương pháp hay nhất: Truy cập vào bộ đề xuất Azure Advisor đầy đủ ✑ Tình trạng và Thông báo Tình trạng: Truy cập vào Bảng điều khiển Tình trạng Dịch vụ & Tình trạng API được cá nhân hóa', 'Azure Management and Governance', ARRAY['AZ-900', 'Architecture', 'Cost Management', 'Monitoring']::text[],
  ''
),
(
  'az-900-question-259', 'az-900', 259, 'In which Azure support plans can you open a new support request?',
  '[{"key":"A","text":"Premier and Professional Direct only"},{"key":"B","text":"Premier, Professional Direct, and Standard only"},{"key":"C","text":"Premier, Professional Direct, Standard, and Developer only"},{"key":"D","text":"Premier, Professional Direct, Standard, Developer, and Basic"}]'::jsonb, ARRAY['D']::text[],
  'Câu trả lời đúng: D — Premier, Professional Direct, Standard, Developer và Basic. Bạn có thể gửi phiếu yêu cầu hỗ trợ trong các gói sau: Premier, Professional Direct, Standard, Developer và Basic.', 'Azure Architecture and Services', ARRAY['AZ-900']::text[],
  ''
),
(
  'az-900-question-260', 'az-900', 260, 'This question requires that you evaluate the underlined text to determine if it is correct. You can create an Azure support request from support.microsoft.com. Review the underlined text. If it makes the statement correct, select `No change is needed.` If the statement is incorrect, select the answer choice that makes the statement correct.',
  '[{"key":"A","text":"No change is needed."},{"key":"B","text":"the Azure portal"},{"key":"C","text":"the Knowledge Center"},{"key":"D","text":"the Security & Compliance admin center"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Azure portal. Bạn có thể tạo yêu cầu hỗ trợ Azure từ thanh Trợ giúp và Hỗ trợ trong Azure portal hoặc từ menu ngữ cảnh của tài nguyên Azure trong phần Hỗ trợ + Khắc phục sự cố.', 'Azure Management and Governance', ARRAY['AZ-900', 'Governance', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-261', 'az-900', 261, 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. Your company has an Azure subscription that contains the following unused resources: ✑ 20 user accounts in Azure Active Directory (Azure AD) ✑ Five groups in Azure AD ✑ 10 public IP addresses ✑ 10 network interfaces You need to reduce the Azure costs for the company. Solution: You remove the unused groups. Does this meet the goal?',
  '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Không. Bạn không bị tính phí cho Nhóm Azure Active Directory. Do đó, việc xóa các nhóm không sử dụng sẽ không làm giảm chi phí Azure của bạn.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Identity and Security', 'Architecture', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-262', 'az-900', 262, 'This question requires that you evaluate the underlined text to determine if it is correct. The Azure Standard support plan is the lowest cost option to receive 24x7 access to support engineers by phone. Review the underlined text. If it makes the statement correct, select `No change is needed`. If the statement is incorrect, select the answer choice that makes the statement correct.',
  '[{"key":"A","text":"No change is needed"},{"key":"B","text":"Developer"},{"key":"C","text":"Basic"},{"key":"D","text":"Professional Direct"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A – Không cần thay đổi. Gói hỗ trợ Basic là miễn phí nên rẻ nhất. Gói hỗ trợ Developer là gói hỗ trợ trả phí rẻ nhất. Thứ tự các gói hỗ trợ về mặt chi phí từ rẻ nhất đến đắt nhất là: Basic, Developer, Standard, Professional Direct, Premier. Tuy nhiên, quyền truy cập 24/7 vào hỗ trợ kỹ thuật qua email và điện thoại chỉ khả dụng cho các gói Standard, Professional Direct, Premier.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-263', 'az-900', 263, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"____ can estimate savings from reduced electricity consumption when migrating on-premises Microsoft SQL Server workloads to Azure.","correctAnswer":"B"}],"choices":[{"key":"A","text":"Azure Migrate: Server Assessment"},{"key":"B","text":"Azure Total Cost of Ownership (TCO) calculator"},{"key":"C","text":"Database Migration Assistant"},{"key":"D","text":"Azure pricing calculator"}]}'::jsonb, ARRAY['1=B']::text[],
  'Máy tính TCO so sánh chi phí cơ sở hạ tầng tại chỗ ước tính, bao gồm cả điện năng, với chi phí Azure dự kiến.', 'Azure Management and Governance', ARRAY['AZ-900', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-264', 'az-900', 264, 'You need to compare a company''s cloud usage to industry standard best practices. What should you use?',
  '[{"key":"A","text":"Azure Monitor"},{"key":"B","text":"Azure Service Health"},{"key":"C","text":"Application Insights in Azure Monitor"},{"key":"D","text":"Azure Advisor"}]'::jsonb, ARRAY['D']::text[],
  'Câu trả lời đúng: D — Azure Advisor. D- "Là nhà tư vấn đám mây được cá nhân hóa của bạn, Azure Advisor liên tục đánh giá cấu hình tài nguyên và đo từ xa mức sử dụng của bạn để kiểm tra các phương pháp hay nhất trong ngành."', 'Azure Management and Governance', ARRAY['AZ-900', 'Monitoring']::text[],
  ''
),
(
  'az-900-question-265', 'az-900', 265, 'You need to start Azure Cloud Shell. What should you use?',
  '[{"key":"A","text":"the Azure portal"},{"key":"B","text":"Azure Command-Line Interface (CLI)"},{"key":"C","text":"Azure PowerShell"},{"key":"D","text":"an Azure Resource Manager (ARM) template"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A — Azure portal. Azure Cloud Shell là một trình bao tương tác, được xác thực, có thể truy cập được bằng trình duyệt để quản lý tài nguyên Azure. Nó mang lại sự linh hoạt trong việc lựa chọn trải nghiệm shell phù hợp nhất với cách bạn làm việc, Bash hoặc PowerShell. Bạn có thể truy cập Cloud Shell theo ba cách: - Liên kết trực tiếp: Mở trình duyệt tới', 'Azure Management and Governance', ARRAY['AZ-900', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-266', 'az-900', 266, 'How many copies of data are maintained by an Azure Storage account that uses locally-redundant storage (LRS)?',
  '[{"key":"A","text":"3"},{"key":"B","text":"4"},{"key":"C","text":"6"},{"key":"D","text":"9"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A — 3. Bộ lưu trữ dự phòng cục bộ (LRS) sao chép tài khoản lưu trữ của bạn ba lần trong một trung tâm dữ liệu ở khu vực chính. LRS cung cấp độ bền ít nhất 99,999999999% (11 số chín) của vật thể trong một năm nhất định.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Storage', 'Architecture']::text[],
  ''
),
(
  'az-900-question-267', 'az-900', 267, 'What enables a cloud service to adapt quickly to changing requirements?',
  '[{"key":"A","text":"high availability"},{"key":"B","text":"predictability"},{"key":"C","text":"manageability"},{"key":"D","text":"agility"}]'::jsonb, ARRAY['D']::text[],
  'Câu trả lời đúng: D - sự nhanh nhẹn. D là đúng. Nhanh nhẹn: Khả năng phản ứng nhanh chóng. Dịch vụ đám mây có thể phân bổ và giải phóng tài nguyên một cách nhanh chóng. Chúng được cung cấp theo yêu cầu thông qua dịch vụ tự phục vụ, do đó có thể cung cấp lượng lớn tài nguyên máy tính trong vài phút. Không có sự can thiệp thủ công nào trong việc cung cấp hoặc hủy cung cấp dịch vụ.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Benefits']::text[],
  ''
),
(
  'az-900-question-268', 'az-900', 268, 'What is an example of vertical scaling in a cloud environment?',
  '[{"key":"A","text":"adding an additional CPU to an existing Azure virtual machine"},{"key":"B","text":"adding an additional Azure virtual machine"},{"key":"C","text":"adding an additional Azure Virtual Desktop session host"},{"key":"D","text":"adding an additional Azure App Service instance automatically"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A — thêm CPU bổ sung vào máy ảo Azure hiện có. Chia tỷ lệ theo chiều dọc, còn được gọi là tăng quy mô hoặc thu nhỏ quy mô, là quá trình tăng công suất của một tài nguyên duy nhất, chẳng hạn như máy ảo hoặc cơ sở dữ liệu, để đáp ứng nhu cầu của khối lượng công việc. Điều này có thể được thực hiện bằng cách thêm nhiều tài nguyên hơn vào tài nguyên hiện có, chẳng hạn như CPU, bộ nhớ hoặc bộ lưu trữ bổ sung. Một ví dụ về chia tỷ lệ theo chiều dọc trong môi trường đám mây là thêm CPU bổ sung vào máy ảo Azure hiện có. Điều này có thể được thực hiện bằng cách sửa đổi kích thước hoặc cấu hình của VM để bao gồm nhiều CPU hơn, điều này sẽ cho phép nó xử lý khối lượng công việc lớn hơn hoặc nhiều yêu cầu đồng thời hơn.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Storage']::text[],
  ''
),
(
  'az-900-question-269', 'az-900', 269, 'What additional resource is required by an Azure virtual machine?',
  '[{"key":"A","text":"a virtual network"},{"key":"B","text":"a service endpoint"},{"key":"C","text":"Azure Firewall"},{"key":"D","text":"a public IP address"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A — mạng ảo. A- Mạng ảo là tài nguyên bắt buộc được yêu cầu bởi Azure VM IP công cộng là một tùy chọn bổ sung cho VM.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Networking']::text[],
  ''
),
(
  'az-900-question-270', 'az-900', 270, 'How many copies of data are maintained by an Azure Storage account that uses geo-redundant storage (GRS)?',
  '[{"key":"A","text":"3"},{"key":"B","text":"4"},{"key":"C","text":"6"},{"key":"D","text":"9"}]'::jsonb, ARRAY['C']::text[],
  'Câu trả lời đúng: C — 6. C đúng: Bộ lưu trữ "Bộ lưu trữ dự phòng địa lý (GRS) sao chép dữ liệu của bạn một cách đồng bộ ba lần trong một vị trí vật lý duy nhất trong khu vực chính bằng cách sử dụng LRS. Sau đó, nó sao chép dữ liệu của bạn không đồng bộ đến một vị trí thực tế duy nhất trong một khu vực thứ cấp cách xa khu vực chính hàng trăm dặm.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Storage', 'Architecture']::text[],
  ''
),
(
  'az-900-question-271', 'az-900', 271, 'What is used to grant permission to Azure Virtual Desktop resources?',
  '[{"key":"A","text":"tags"},{"key":"B","text":"role-based access control (RBAC) roles"},{"key":"C","text":"resource groups"},{"key":"D","text":"application security groups"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — vai trò kiểm soát truy cập dựa trên vai trò (RBAC). Trong Azure, bạn có thể sử dụng kiểm soát truy cập dựa trên vai trò (RBAC) để cấp quyền cho tài nguyên Azure Virtual Desktop. RBAC là một hệ thống cho phép bạn quản lý quyền truy cập vào tài nguyên Azure dựa trên vai trò. Trong RBAC, bạn có thể xác định các vai trò đại diện cho một tập hợp quyền, sau đó gán các vai trò đó cho người dùng hoặc nhóm. Ví dụ: bạn có thể tạo một vai trò cho phép người dùng xem và quản lý tài nguyên Azure Virtual Desktop, sau đó gán vai trò đó cho một nhóm người dùng cần truy cập vào các tài nguyên đó.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Identity and Security', 'Architecture']::text[],
  ''
),
(
  'az-900-question-272', 'az-900', 272, 'Match the Azure networking service to the appropriate description.',
  '{"type":"matching_drag_drop","statements":[{"id":"1","text":"Extends on-premises networks to Microsoft cloud services through a private connection.","correctAnswer":"A"},{"id":"2","text":"Connects two or more Azure virtual networks so they communicate as one logical network.","correctAnswer":"B"},{"id":"3","text":"Provides an encrypted connection from an on-premises network to Azure over the public internet.","correctAnswer":"C"}],"choices":[{"key":"A","text":"ExpressRoute"},{"key":"B","text":"Virtual network peering"},{"key":"C","text":"VPN gateway"}]}'::jsonb, ARRAY['1=A', '2=B', '3=C']::text[],
  'ExpressRoute sử dụng kết nối nhà cung cấp riêng, mạng ảo kết nối VNet qua đường trục Azure và Cổng VPN mã hóa lưu lượng được gửi qua internet công cộng.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Networking']::text[],
  ''
),
(
  'az-900-question-273', 'az-900', 273, 'Which cloud service model minimizes the management responsibility of a customer?',
  '[{"key":"A","text":"infrastructure as a service (IaaS)"},{"key":"B","text":"platform as a service (PaaS)"},{"key":"C","text":"software as a service (SaaS)"}]'::jsonb, ARRAY['C']::text[],
  'Câu trả lời đúng: C — phần mềm dưới dạng dịch vụ (SaaS). Software as a service (SaaS) là mô hình dịch vụ đám mây cho phép khách hàng truy cập và sử dụng các ứng dụng phần mềm qua internet. Trong mô hình SaaS, nhà cung cấp chịu trách nhiệm quản lý và duy trì cơ sở hạ tầng, phần mềm và dữ liệu liên quan đến ứng dụng. Khách hàng trả phí đăng ký để sử dụng phần mềm và không cần lo lắng về việc cài đặt, cấu hình hoặc bảo trì phần mềm. SaaS giảm thiểu trách nhiệm quản lý của khách hàng vì nhà cung cấp xử lý hầu hết các nhiệm vụ quản lý, chẳng hạn như cung cấp, mở rộng quy mô, vá lỗi và cập nhật phần mềm.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Service Models', 'Architecture']::text[],
  ''
),
(
  'az-900-question-274', 'az-900', 274, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Select the answer that correctly completes the sentence.","correctAnswer":"A"}],"choices":[{"key":"A","text":"You plan to deploy 20 virtual machines to an Azure I"},{"key":"B","text":"environment. To ensure that a virtual machine be deployed to a separate virtual network."},{"key":"C","text":"machines, VM1 must be deployed to a separate resource group."}]}'::jsonb, ARRAY['1=A']::text[],
  'Bạn dự định triển khai 20 máy ảo vào môi trường Azure. Để đảm bảo rằng máy ảo có tên VM1 không thể kết nối với các máy ảo khác, VM1 phải được triển khai trên một mạng ảo riêng biệt. Hoàn thành đúng: Bạn dự định triển khai 20 máy ảo lên Azure I.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Networking', 'Architecture']::text[],
  ''
),
(
  'az-900-question-275', 'az-900', 275, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"runs application code in Azure without requiring a server.","correctAnswer":"D"}],"choices":[{"key":"A","text":"An Azure DevOps pipeline"},{"key":"B","text":"An Azure Resource Manager template"},{"key":"C","text":"Azure Application Gateway"},{"key":"D","text":"Azure Functions"}]}'::jsonb, ARRAY['1=D']::text[],
  'Azure Functions là giải pháp serverless cho phép bạn viết ít mã hơn, duy trì ít cơ sở hạ tầng hơn và tiết kiệm chi phí. Hoàn thành đúng: Azure Functions.', 'Cloud Concepts', ARRAY['AZ-900', 'Compute', 'Cost Management', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-276', 'az-900', 276, 'Match the Azure storage service to the appropriate description.',
  '{"type":"matching_drag_drop","statements":[{"id":"1","text":"Is used for reliable messaging between application components.","correctAnswer":"D"},{"id":"2","text":"Can be accessed as a network share from a Windows device.","correctAnswer":"C"},{"id":"3","text":"Can be configured to use the Archive access tier.","correctAnswer":"A"}],"choices":[{"key":"A","text":"Azure Blob Storage"},{"key":"B","text":"Azure Disk Storage"},{"key":"C","text":"Azure Files"},{"key":"D","text":"Azure Queue Storage"}]}'::jsonb, ARRAY['1=D', '2=C', '3=A']::text[],
  'Queue Storage tách riêng các ứng dụng bằng tin nhắn, Azure Files hiển thị các chia sẻ SMB/NFS và Blob Storage hỗ trợ các tầng truy cập lưu trữ và trực tuyến.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Storage']::text[],
  ''
),
(
  'az-900-question-277', 'az-900', 277, 'For each statement, select Yes if it is true. Otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"Premium storage accounts can be configured as Azure file shares.","correctAnswer":"Yes"},{"id":"2","text":"Premium storage accounts can be configured as block blob storage.","correctAnswer":"Yes"},{"id":"3","text":"Premium storage accounts can be configured as general-purpose StorageV2 accounts.","correctAnswer":"No"}],"choices":[]}'::jsonb, ARRAY['1:Yes', '2:Yes', '3:No']::text[],
  'Azure Files cao cấp sử dụng tài khoản FileStorage và khối blob cao cấp sử dụng tài khoản BlockBlobStorage. Tài khoản StorageV2 đa năng sử dụng bậc hiệu suất tiêu chuẩn nên chúng không được định cấu hình làm tài khoản cao cấp.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Storage']::text[],
  ''
),
(
  'az-900-question-278', 'az-900', 278, 'You have an Azure web app. You need to manage the settings of the web app from an iPhone. What are two Azure management tools that you can use? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.',
  '[{"key":"A","text":"Windows PowerShell"},{"key":"B","text":"Azure Cloud Shell"},{"key":"C","text":"the Azure portal"},{"key":"D","text":"Azure Storage Explorer"}]'::jsonb, ARRAY['B', 'C']::text[],
  'Câu trả lời đúng: B — Azure Cloud Shell; C — Azure portal.', 'Azure Management and Governance', ARRAY['AZ-900', 'Storage', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-279', 'az-900', 279, 'You need to create a new Azure file share. What should you use? To answer, select the service in the answer area. NOTE: Each correct selection is worth one point. Answer:',
  '{"type":"image_hotspot","choices":[{"key":"A","text":"Resource groups","hotspot":{"x":4.1,"y":1.7,"width":88.2,"height":5.2}},{"key":"B","text":"App Services","hotspot":{"x":4.1,"y":13.9,"width":88.2,"height":5.2}},{"key":"C","text":"Storage accounts","hotspot":{"x":4.1,"y":50.4,"width":88.2,"height":5.2}},{"key":"D","text":"Virtual networks","hotspot":{"x":4.1,"y":56.5,"width":88.2,"height":5.2}}]}'::jsonb, ARRAY['C']::text[],
  'Chia sẻ tệp Azure được tạo và quản lý trong tài khoản lưu trữ Azure.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Storage', 'Management Tools']::text[],
  'az900/images/399.png'
),
(
  'az-900-question-280', 'az-900', 280, 'What should you use to prevent traffic from an Azure virtual network from being routed to an Azure Storage account via the internet?',
  '[{"key":"A","text":"a network security group (NSG)"},{"key":"B","text":"a public endpoint"},{"key":"C","text":"Azure VPN Gateway"},{"key":"D","text":"a service endpoint"}]'::jsonb, ARRAY['D']::text[],
  'Câu trả lời đúng: D — điểm cuối dịch vụ. 1. Tôi sẽ chọn D 2. Tài khoản lưu trữ là tài nguyên Azure Resource Manager.', 'Azure Management and Governance', ARRAY['AZ-900', 'Networking', 'Storage', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-281', 'az-900', 281, 'Which service can replace a resource lock automatically if the lock is removed?',
  '[{"key":"A","text":"Azure Information Protection (AIP)"},{"key":"B","text":"Azure Blueprints"},{"key":"C","text":"Azure Backup"},{"key":"D","text":"Azure Advisor"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Azure Blueprints. Thông thường, người nào đó có quyền kiểm soát truy cập dựa trên vai trò Azure thích hợp (Azure RBAC) trên đăng ký, chẳng hạn như vai trò ''Chủ sở hữu'', có thể được phép thay đổi hoặc xóa bất kỳ tài nguyên nào. Quyền truy cập này không xảy ra khi Azure Blueprints áp dụng khóa như một phần của nhiệm vụ được triển khai. Nếu nhiệm vụ được đặt bằng tùy chọn Chỉ đọc hoặc Không xóa, thì ngay cả chủ sở hữu đăng ký cũng không thể thực hiện hành động bị chặn trên tài nguyên được bảo vệ. Biện pháp bảo mật này bảo vệ tính nhất quán của bản thiết kế đã xác định và môi trường mà nó được thiết kế để tạo ra khỏi việc xóa hoặc thay đổi do vô tình hoặc theo chương trình.', 'Azure Management and Governance', ARRAY['AZ-900', 'Identity and Security', 'Architecture', 'Governance']::text[],
  ''
),
(
  'az-900-question-282', 'az-900', 282, 'You need to create a new user for an Azure subscription. What should you use? To answer, select the service in the answer area. NOTE: Each correct match is worth one point.',
  '{"type":"image_hotspot","choices":[{"key":"A","text":"Create a resource","hotspot":{"x":7,"y":30.2,"width":7.2,"height":25.5}},{"key":"B","text":"Subscriptions","hotspot":{"x":40.6,"y":30.2,"width":9.3,"height":25.5}},{"key":"C","text":"Microsoft Entra ID","hotspot":{"x":51.8,"y":30.2,"width":9.9,"height":25.5}},{"key":"D","text":"Resource groups","hotspot":{"x":7,"y":58.3,"width":7.6,"height":25.7}}]}'::jsonb, ARRAY['C']::text[],
  'Tạo và quản lý danh tính người dùng của đối tượng thuê trong Microsoft Entra ID. Sau khi danh tính tồn tại, kiểm soát truy cập dựa trên vai trò có thể cấp cho nó quyền truy cập vào đăng ký.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Identity and Security']::text[],
  'az900/images/403.png'
),
(
  'az-900-question-283', 'az-900', 283, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Azure Resource Manager (ARM) templates use the ra —r","correctAnswer":"C"}],"choices":[{"key":"A","text":"CSV format."},{"key":"B","text":"HTML format."},{"key":"C","text":"JSON format."},{"key":"D","text":"XML format."}]}'::jsonb, ARRAY['1=C']::text[],
  '"Định dạng JSON" là câu trả lời. Để triển khai cơ sở hạ tầng dưới dạng mã cho các giải pháp Azure của bạn, hãy sử dụng mẫu Azure Resource Manager (mẫu ARM). Mẫu này là tệp Ký hiệu đối tượng JavaScript (JSON) xác định cơ sở hạ tầng và cấu hình cho dự án của bạn. Mẫu sử dụng cú pháp khai báo, cho phép bạn nêu những gì bạn dự định triển khai mà không cần phải viết chuỗi lệnh lập trình để tạo ra nó. Trong mẫu, bạn chỉ định các tài nguyên cần triển khai và các thuộc tính cho các tài nguyên đó. Hoàn thành đúng: định dạng JSON.', 'Azure Management and Governance', ARRAY['AZ-900', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-284', 'az-900', 284, 'You plan to collect and analyze event details for five Azure virtual machines. You need to run queries to compare the event details collected from all the virtual machines. Which two tools should you use? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.',
  '[{"key":"A","text":"Azure Service Health"},{"key":"B","text":"Azure Service Bus"},{"key":"C","text":"Azure Monitor"},{"key":"D","text":"Azure Advisor"},{"key":"E","text":"Log Analytics"}]'::jsonb, ARRAY['C', 'E']::text[],
  'Câu trả lời đúng: C — Azure Monitor; E — Log Analytics. Log Analytics: Sử dụng công cụ chính này trong Azure portal để chỉnh sửa các truy vấn nhật ký và phân tích kết quả của chúng một cách tương tác. Ngay cả khi bạn có ý định sử dụng truy vấn nhật ký ở nơi khác trong Azure Monitor, thông thường bạn sẽ viết và kiểm tra nó trong Log Analytics trước khi sao chép nó vào vị trí cuối cùng.', 'Azure Management and Governance', ARRAY['AZ-900', 'Compute', 'Management Tools', 'Monitoring']::text[],
  ''
),
(
  'az-900-question-285', 'az-900', 285, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"An Azure SLA is a formal agreement between Microsoft and a customer that defines","correctAnswer":"B"}],"choices":[{"key":"A","text":"a commitment to deliver the features on a technology roadmap."},{"key":"B","text":"a commitment to performance standards."},{"key":"C","text":"the maximum scalability limits of an available infrastructure."},{"key":"D","text":"the minimum scalability limits of an available infrastructure."}]}'::jsonb, ARRAY['1=B']::text[],
  '​“cam kết về các tiêu chuẩn thực hiện” chính là câu trả lời. Thỏa thuận cấp độ dịch vụ Azure (SLA) là thỏa thuận chính thức giữa Microsoft và khách hàng nhằm xác định cấp độ dịch vụ và tính khả dụng mà Microsoft sẽ cung cấp cho một dịch vụ Azure cụ thể. SLA thường bao gồm các số liệu như thời gian hoạt động, tính khả dụng và khả năng phản hồi, đồng thời chỉ định các đảm bảo mà Microsoft sẽ đưa ra trong việc đáp ứng các số liệu đó. Chi tiết hơn, Azure SLA phác thảo các mục tiêu cấp độ dịch vụ và hệ thống tín dụng cho dịch vụ Azure, đảm bảo rằng khách hàng sẽ nhận được tín dụng cho hóa đơn của họ nếu họ không đáp ứng cấp độ dịch vụ đã thỏa thuận. Nó đảm bảo một mức độ thời gian hoạt động nhất định (tức là Hoàn thành đúng: cam kết về các tiêu chuẩn hiệu suất.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Benefits']::text[],
  ''
),
(
  'az-900-question-286', 'az-900', 286, 'What should you use to track the costs of Azure resources?',
  '[{"key":"A","text":"Azure Quickstart templates"},{"key":"B","text":"tags"},{"key":"C","text":"budgets"},{"key":"D","text":"usage and quotas"}]'::jsonb, ARRAY['D']::text[],
  'Câu trả lời đúng: D — mức sử dụng và hạn ngạch. Việc sử dụng và hạn ngạch cho phép bạn giám sát và kiểm soát việc sử dụng tài nguyên, đồng thời ngăn chặn các khoản phí không mong muốn. Bạn có thể đặt hạn ngạch cho tài nguyên để giới hạn lượng sử dụng và sử dụng Azure Monitor để theo dõi số liệu hiệu suất và mức sử dụng. Điều này giúp bạn xác định sự thiếu hiệu quả và tối ưu hóa việc sử dụng tài nguyên để tiết kiệm chi phí. Thẻ cho phép bạn phân loại tài nguyên Azure và thêm siêu dữ liệu vào chúng, giúp theo dõi và quản lý chi phí dễ dàng hơn. Bạn có thể sử dụng thẻ để sắp xếp tài nguyên theo phòng ban, dự án, môi trường hoặc bất kỳ danh mục nào khác phù hợp với tổ chức của bạn.', 'Azure Management and Governance', ARRAY['AZ-900', 'Cost Management', 'Governance', 'Monitoring']::text[],
  ''
),
(
  'az-900-question-287', 'az-900', 287, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"When planning to migrate a public website to Azure, I 4 you must plan to deploy a VPN.","correctAnswer":"A"}],"choices":[{"key":"A","text":"pay monthly usage costs."},{"key":"B","text":"pay to transfer all the website data to Azure."},{"key":"C","text":"reduce the number of connections to the website."}]}'::jsonb, ARRAY['1=A']::text[],
  'B. thanh toán chi phí sử dụng hàng tháng: Azure là dịch vụ trả tiền theo nhu cầu sử dụng, nghĩa là bạn sẽ bị tính phí dựa trên mức sử dụng của mình. Bạn phải có kế hoạch thanh toán chi phí sử dụng hàng tháng cho các dịch vụ và tài nguyên Azure mà bạn sử dụng để lưu trữ trang web của mình. Hoàn thành đúng: thanh toán chi phí sử dụng hàng tháng.', 'Cloud Concepts', ARRAY['AZ-900', 'Networking', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-288', 'az-900', 288, 'You plan to reduce ongoing Azure expenditures. You need to identify which factors affect the costs of a resource. Which three factors should you identify? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.',
  '[{"key":"A","text":"the volume of outbound data"},{"key":"B","text":"the volume of inbound data"},{"key":"C","text":"the service tier"},{"key":"D","text":"the Azure region"},{"key":"E","text":"the type of processed data"}]'::jsonb, ARRAY['A', 'C', 'D']::text[],
  'Câu trả lời đúng: A — khối lượng dữ liệu gửi đi; C - tầng dịch vụ; D - vùng Azure. A C D Có một số yếu tố có thể ảnh hưởng đến chi phí của tài nguyên trong Azure. Dưới đây là ba yếu tố bạn nên cân nhắc khi cố gắng xác định yếu tố nào đang ảnh hưởng đến chi phí của tài nguyên: Khối lượng dữ liệu đi: Khối lượng dữ liệu được truyền ra khỏi Azure có thể ảnh hưởng đến chi phí của tài nguyên. Ví dụ: nếu bạn có tài nguyên tạo ra khối lượng lớn dữ liệu gửi đi, chẳng hạn như máy chủ web phục vụ nhiều nội dung cho người dùng, điều này có thể dẫn đến chi phí cao hơn. Cấp dịch vụ: Cấp dịch vụ mà bạn chọn cho một tài nguyên cũng có thể ảnh hưởng đến chi phí của tài nguyên đó.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Architecture', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-289', 'az-900', 289, 'Your company has an Azure subscription that contains several resources. You need to identify which department is responsible for the cost of each resource. What should you use?',
  '[{"key":"A","text":"budgets"},{"key":"B","text":"alerts"},{"key":"C","text":"tags"}]'::jsonb, ARRAY['C']::text[],
  'Câu trả lời đúng: C — thẻ. tabs=json#tags-and-billing Bạn có thể sử dụng thẻ để nhóm dữ liệu thanh toán của mình. Ví dụ: nếu bạn đang chạy nhiều máy ảo cho các tổ chức khác nhau, hãy sử dụng thẻ để nhóm mức sử dụng theo trung tâm chi phí. Bạn cũng có thể sử dụng thẻ để phân loại chi phí theo môi trường thời gian chạy, chẳng hạn như mức sử dụng thanh toán cho máy ảo chạy trong môi trường sản xuất.', 'Azure Management and Governance', ARRAY['AZ-900', 'Architecture', 'Cost Management', 'Governance']::text[],
  ''
),
(
  'az-900-question-290', 'az-900', 290, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Azure Cosmos DB is an example of a v offering.","correctAnswer":"A"}],"choices":[{"key":"A","text":"platform as a service (PaaS)"},{"key":"B","text":"infrastructure as a service (IaaS)"},{"key":"C","text":"content as a service"},{"key":"D","text":"software as a service (SaaS)"}]}'::jsonb, ARRAY['1=A']::text[],
  'nền tảng dưới dạng dịch vụ (Paas) Hoàn thành chính xác: nền tảng dưới dạng dịch vụ (PaaS).', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Service Models']::text[],
  ''
),
(
  'az-900-question-291', 'az-900', 291, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Data that is stored in the Archive access tier of an Azure Storage account","correctAnswer":"D"}],"choices":[{"key":"A","text":"can be accessed at any time by using azcopy.exe."},{"key":"B","text":"can only be read by using Azure Backup."},{"key":"C","text":"must be restored before the data can be accessed."},{"key":"D","text":"must be rehydrated before the data can be accessed."}]}'::jsonb, ARRAY['1=D']::text[],
  'Dữ liệu được lưu trữ trong tầng truy cập Lưu trữ của tài khoản Azure Storage phải được bù nước trước khi có thể truy cập dữ liệu. Hoàn thành chính xác: phải được bù nước trước khi có thể truy cập dữ liệu.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Storage']::text[],
  ''
),
(
  'az-900-question-292', 'az-900', 292, 'For each statement, select Yes if it is true. Otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"An Azure Virtual Desktop session host can run Windows 10 or Windows 11 only. o","correctAnswer":"No"},{"id":"2","text":"An Azure Virtual Desktop host pool that includes 20 session hosts supports o maximum of 20 simuitaneous user connections Azure Virtual Desktop supports desktop and app virtualization. [e","correctAnswer":"No"}],"choices":[]}'::jsonb, ARRAY['1:No', '2:No']::text[],
  'Tuyên bố 1: Máy chủ phiên Azure Virtual Desktop chỉ có thể chạy Windows 10 hoặc Windows 11. Trả lời: Không Mặc dù Windows 10 và Windows 11 (bao gồm cả các phiên bản Nhiều phiên chuyên dụng của chúng) là những lựa chọn triển khai cực kỳ phổ biến, Azure Virtual Desktop về cơ bản cũng hỗ trợ các hệ điều hành dựa trên máy chủ làm máy chủ phiên. Các tổ chức thường xuyên triển khai máy chủ phiên AVD chạy Windows Server 2022, Windows Server 2019 hoặc Windows Server 2016 để chạy phần mềm doanh nghiệp cũ hoặc các ứng dụng ngành nghề kinh doanh chuyên biệt. Tuyên bố 2: Nhóm máy chủ Azure Virtual Desktop bao gồm 20 máy chủ phiên hỗ trợ tối đa 20 kết nối người dùng đồng thời. Câu trả lời đúng: 1: Không; 2: Không.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute']::text[],
  ''
),
(
  'az-900-question-293', 'az-900', 293, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"You have an Azure virtual network named VNET1 in a resource group named RG1. You assign the Azure Policy definition of Not Allowed Resource Type and specify that virtual networks are not an allowed resource type in RG1. VNET1","correctAnswer":"C"}],"choices":[{"key":"A","text":"is deleted automatically."},{"key":"B","text":"is moved automatically to another resource group."},{"key":"C","text":"continues to function normally."},{"key":"D","text":"is now a read-only object."}]}'::jsonb, ARRAY['1=C']::text[],
  'Bạn có mạng ảo Azure có tên VNET1 trong nhóm tài nguyên có tên RG1. Bạn chỉ định định nghĩa Azure Policy của Loại tài nguyên không được phép và chỉ định rằng mạng ảo không phải là loại tài nguyên được phép trong RG1. VNET1 tiếp tục hoạt động bình thường. Hoàn thành đúng: tiếp tục hoạt động bình thường.', 'Azure Management and Governance', ARRAY['AZ-900', 'Compute', 'Networking', 'Architecture']::text[],
  ''
),
(
  'az-900-question-294', 'az-900', 294, 'You have on-premises servers that run Windows Server. What should you implement to manage the servers by using the Azure portal?',
  '[{"key":"A","text":"Azure Kubernetes Service (AKS)"},{"key":"B","text":"Azure Arc"},{"key":"C","text":"Docker"},{"key":"D","text":"role-based access control (RBAC)"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Azure Arc. Trả lời: B Azure Arc Azure Arc cho phép chúng tôi mở rộng khả năng quản lý và quản lý Azure cho môi trường tại chỗ và nhiều đám mây của bạn. Bằng cách triển khai Azure Arc, chúng tôi có thể kết nối các máy Windows Server của bạn với Azure và quản lý chúng một cách tập trung thông qua Azure portal, cùng với các tài nguyên Azure khác của bạn.', 'Azure Management and Governance', ARRAY['AZ-900', 'Identity and Security', 'Governance', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-295', 'az-900', 295, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"If Windows Server or Microsoft SQL Server licenses are covered by ____, you can repurpose the licenses on Azure virtual machines.","correctAnswer":"C"}],"choices":[{"key":"A","text":"an End User License Agreement (EULA)"},{"key":"B","text":"Microsoft Lifecycle Policy"},{"key":"C","text":"Software Assurance"}]}'::jsonb, ARRAY['1=C']::text[],
  'Azure Hybrid Benefit cho phép khách hàng đủ điều kiện sử dụng giấy phép Windows Server và SQL Server hiện có với Bảo hiểm phần mềm đang hoạt động hoặc đăng ký đủ điều kiện trong Azure.', 'Azure Management and Governance', ARRAY['AZ-900', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-296', 'az-900', 296, 'You have a web app that runs in Azure. You need to identify the amount of time it takes for web pages to load in a user''s browser. What should you use?',
  '[{"key":"A","text":"Azure Monitor alerts"},{"key":"B","text":"Application Insights in Azure Monitor"},{"key":"C","text":"Log Analytics"},{"key":"D","text":"Azure Network Watcher"}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Application Insights trong Azure Monitor. Đó là B: Azure Application Insights là một tính năng của Azure Monitor cho phép giám sát các ứng dụng đang chạy, tự động phát hiện các điểm bất thường về hiệu suất và sử dụng các công cụ phân tích tích hợp để xem người dùng làm gì trên ứng dụng.', 'Azure Management and Governance', ARRAY['AZ-900', 'Monitoring']::text[],
  ''
),
(
  'az-900-question-297', 'az-900', 297, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Select the answer that correctly completes the sentence.","correctAnswer":"A"}],"choices":[{"key":"A","text":"Iv ensures access to cloud resources in the event of a service failure."},{"key":"B","text":"High availability"},{"key":"C","text":"Predictability"},{"key":"D","text":"Reliability"},{"key":"E","text":"Scalability"}]}'::jsonb, ARRAY['1=A']::text[],
  'Tính sẵn sàng cao đảm bảo quyền truy cập vào tài nguyên đám mây trong trường hợp dịch vụ bị lỗi. Tính sẵn sàng cao (HA): Khái niệm này đề cập đến khả năng của hệ thống để duy trì hoạt động liên tục và có thể truy cập được, ngay cả khi một thành phần cơ bản hoặc dịch vụ cục bộ gặp lỗi. Trong đám mây, điều này đạt được thông qua các giải pháp dự phòng tích hợp sẵn, chẳng hạn như triển khai ứng dụng trên nhiều Vùng sẵn sàng (AZ) với tính năng cân bằng tải tự động. Nếu một giá phần cứng hoặc toàn bộ trung tâm dữ liệu ngừng hoạt động, lưu lượng sẽ tự động được định tuyến lại đến một phiên bản hoạt động tốt, đảm bảo thời gian ngừng hoạt động bằng 0 hoặc gần như bằng 0 cho người dùng. Hoàn thành đúng: Iv đảm bảo quyền truy cập vào tài nguyên đám mây trong trường hợp dịch vụ bị lỗi.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Benefits', 'Storage', 'Architecture']::text[],
  ''
),
(
  'az-900-question-298', 'az-900', 298, 'What should a desktop application use to interact with Azure and manage resources?',
  '[{"key":"A","text":"APIs"},{"key":"B","text":"Azure Resource Manager (ARM) templates"},{"key":"C","text":"Azure Command-Line Interface (CLI)"},{"key":"D","text":"Azure Cloud Shell"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A - API. ''MỘT. API'' là chính xác. Khóa là Ứng dụng máy tính để bàn cần tương tác với tài nguyên Azure theo cách lập trình, vì vậy API.', 'Azure Management and Governance', ARRAY['AZ-900', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-299', 'az-900', 299, 'Match the cloud computing benefit to the appropriate requirement.',
  '{"type":"matching_drag_drop","statements":[{"id":"1","text":"Dynamically scale the resources available to a cloud application.","correctAnswer":"B"},{"id":"2","text":"Use cloud-based backups to restore resources after an outage.","correctAnswer":"C"},{"id":"3","text":"Quickly deploy and configure cloud resources as application requirements change.","correctAnswer":"A"}],"choices":[{"key":"A","text":"Agility"},{"key":"B","text":"Elasticity"},{"key":"C","text":"Disaster recovery"}]}'::jsonb, ARRAY['1=B', '2=C', '3=A']::text[],
  'Độ co giãn điều chỉnh tài nguyên theo nhu cầu, khả năng khắc phục thảm họa sẽ khôi phục dịch vụ sau sự cố và tính linh hoạt cho phép triển khai và thay đổi nhanh chóng.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Benefits']::text[],
  ''
),
(
  'az-900-question-300', 'az-900', 300, 'Which two features or services can be integrated with Azure Monitor? Each correct answer presents part of the solution. NOTE: Each correct answer is worth one point.',
  '[{"key":"A","text":"Azure status"},{"key":"B","text":"Application Insights"},{"key":"C","text":"Azure Advisor"},{"key":"D","text":"Log Analytics"},{"key":"E","text":"Azure Service Health"}]'::jsonb, ARRAY['B', 'D']::text[],
  'Câu trả lời đúng: B — Application Insights; D — Log Analytics. B. Application Insights: Đây là phần mở rộng của Azure Monitor cung cấp Quản lý hiệu suất ứng dụng sâu (APM). Nó cho phép bạn giám sát các ứng dụng web trực tiếp, tự động phát hiện các điểm bất thường về hiệu suất, ghi nhật ký ngoại lệ và theo dõi phép đo từ xa hành vi của người dùng ngay trong Azure Monitor. D. Log Analytics: Đây là công cụ và kho lưu trữ chính trong Azure Monitor được sử dụng để chỉnh sửa, chạy và phân tích các truy vấn nhật ký đối với dữ liệu được thu thập từ nhiều tài nguyên đám mây khác nhau. Tất cả dữ liệu nhật ký được nhập vào Azure Monitor được lưu trữ và truy vấn trong không gian làm việc Log Analytics.', 'Azure Management and Governance', ARRAY['AZ-900', 'Monitoring']::text[],
  ''
),
(
  'az-900-question-301', 'az-900', 301, 'What provides a unified way to project and manage non-Azure resources in Azure Resource Manager (ARM)?',
  '[{"key":"A","text":"Azure Migrate"},{"key":"B","text":"Azure AD Connect"},{"key":"C","text":"Azure Arc"},{"key":"D","text":"Azure Front Door"}]'::jsonb, ARRAY['C']::text[],
  'Câu trả lời đúng: C — Azure Arc. C. Vòng cung Azure. Azure Arc được thiết kế rõ ràng để mở rộng hoạt động quản lý, quản trị và dịch vụ Azure cho cơ sở hạ tầng bên ngoài Azure. Nó hoạt động bằng cách cài đặt một tác nhân trên các tài nguyên không phải Azure (chẳng hạn như máy chủ vật lý tại chỗ, máy ảo trong AWS hoặc GCP hoặc cụm Kubernetes bên ngoài). Sau khi tác nhân được cài đặt, các tài nguyên bên ngoài này được chiếu dưới dạng đối tượng tài nguyên gốc bên trong Azure Resource Manager (ARM). Điều này cho phép bạn quản lý chúng, áp dụng thẻ và thực thi Chính sách Azure giống như thể chúng đang chạy nguyên bản bên trong Azure.', 'Azure Management and Governance', ARRAY['AZ-900', 'Compute', 'Governance', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-302', 'az-900', 302, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Iv] is a physical migration service used to transfer large amounts of data in a quick, inexpensive, and reliable way.","correctAnswer":"A"}],"choices":[{"key":"A","text":"Azure Data Box"},{"key":"B","text":"Azure Databricks"},{"key":"C","text":"Azure File Sync"},{"key":"D","text":"Azure Migrate"}]}'::jsonb, ARRAY['1=A']::text[],
  'Hộp dữ liệu Azure đúng "Giải pháp đám mây Hộp dữ liệu Microsoft Azure cho phép bạn gửi hàng terabyte dữ liệu vào và ra khỏi Azure một cách nhanh chóng, không tốn kém và đáng tin cậy. Hoàn thành chính xác: Hộp dữ liệu Azure.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Storage']::text[],
  ''
),
(
  'az-900-question-303', 'az-900', 303, 'Your company has an Azure subscription and three business units. You plan to deploy new resources for each business unit. You need to ensure that the new resources are deployed by using a repeatable and reliable method that applies the same configurations to each resource. What should you use?',
  '[{"key":"A","text":"Azure Policy"},{"key":"B","text":"Azure Arc"},{"key":"C","text":"a resource group"},{"key":"D","text":"Azure Resource Manager (ARM) templates"}]'::jsonb, ARRAY['D']::text[],
  'Câu trả lời đúng: D — Mẫu Azure Resource Manager (ARM). Câu trả lời đúng là mẫu D. Azure Resource Manager (ARM). Mẫu ARM là các tệp Ký hiệu đối tượng JavaScript (JSON) xác định cơ sở hạ tầng và cấu hình cho dự án của bạn. Họ sử dụng Cơ sở hạ tầng dưới dạng Mã (IaC), cho phép bạn xác định những gì bạn muốn triển khai theo cách khai báo. Vì cấu hình được xác định trong một tệp nên bạn có thể sử dụng lại cùng mẫu đó để triển khai tài nguyên trên nhiều đơn vị kinh doanh. Điều này trực tiếp đáp ứng yêu cầu về một phương pháp có thể lặp lại và đáng tin cậy nhằm đảm bảo áp dụng các cấu hình chính xác giống nhau mọi lúc.', 'Azure Management and Governance', ARRAY['AZ-900', 'Architecture', 'Governance', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-304', 'az-900', 304, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"Select the answer that correctly completes the sentence.","correctAnswer":"A"}],"choices":[{"key":"A","text":"When you need to delegate permissions to several Azure virtual"},{"key":"B","text":"machines simultaneously, you must deploy the Azure virtual the same Azure region."},{"key":"C","text":"machines using the same Azure Resource Manager template"}]}'::jsonb, ARRAY['1=A']::text[],
  'Nhóm tài nguyên là nơi chứa logic cho tài nguyên Azure. Các nhóm tài nguyên giúp việc quản lý tài nguyên Azure dễ dàng hơn. Với nhóm tài nguyên, bạn có thể cho phép người dùng quản lý tất cả tài nguyên trong nhóm tài nguyên, chẳng hạn như máy ảo, trang web và mạng con. Các quyền bạn áp dụng cho nhóm tài nguyên sẽ áp dụng cho tất cả các tài nguyên có trong nhóm tài nguyên. Hoàn thành đúng: Khi bạn cần ủy quyền cho một số Azure ảo.', 'Azure Management and Governance', ARRAY['AZ-900', 'Compute', 'Networking', 'Architecture']::text[],
  ''
),
(
  'az-900-question-305', 'az-900', 305, 'Where does Azure Monitor store event data?',
  '[{"key":"A","text":"an Azure Blob Storage account"},{"key":"B","text":"Azure Storage Queue"},{"key":"C","text":"Azure SQL Database"},{"key":"D","text":"a Log Analytics workspace"}]'::jsonb, ARRAY['D']::text[],
  'Câu trả lời đúng: D — không gian làm việc Log Analytics. D. không gian làm việc Log Analytics Azure Monitor lưu trữ dữ liệu sự kiện trong không gian làm việc Log Analytics. Đây là môi trường duy nhất dành cho dữ liệu nhật ký Azure Monitor, nơi bạn có thể sử dụng Log Analytics để phân tích dữ liệu được thu thập trên nhiều nguồn. Mỗi không gian làm việc có kho lưu trữ và cấu hình dữ liệu riêng, đồng thời các nguồn dữ liệu và giải pháp được định cấu hình để lưu trữ dữ liệu của chúng trong không gian làm việc.', 'Azure Management and Governance', ARRAY['AZ-900', 'Storage', 'Monitoring']::text[],
  ''
),
(
  'az-900-question-306', 'az-900', 306, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"You deploy an Azure resource. The resource becomes unavailable for an extended period due to a service outage.","correctAnswer":"C"}],"choices":[{"key":"A","text":"refund your bank account."},{"key":"B","text":"migrate the resource to another subscription."},{"key":"C","text":"credit your Azure account."},{"key":"D","text":"send you a coupon code that you can redeem for Azure credits."}]}'::jsonb, ARRAY['1=C']::text[],
  'Bạn triển khai tài nguyên Azure. Tài nguyên sẽ không khả dụng trong một thời gian dài do ngừng hoạt động dịch vụ. Microsoft sẽ ghi có vào tài khoản Azure của bạn. Hoàn thành đúng: ghi có vào tài khoản Azure của bạn.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Architecture']::text[],
  ''
),
(
  'az-900-question-307', 'az-900', 307, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"a common platform for deploying objects to a cloud infrastructure and for implementing consistency across","correctAnswer":"C"}],"choices":[{"key":"A","text":"Azure policies provide the Azure environment."},{"key":"B","text":"Resource groups provide"},{"key":"C","text":"Azure Resource Manager templates provide"},{"key":"D","text":"Management groups provide"}]}'::jsonb, ARRAY['1=C']::text[],
  'Mẫu quản lý tài nguyên Azure cung cấp. Hoàn thành chính xác: Các mẫu Azure Resource Manager cung cấp.', 'Azure Management and Governance', ARRAY['AZ-900', 'Architecture', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-308', 'az-900', 308, 'An Azure administrator plans to run a PowerShell script that creates Azure resources. You need to recommend which computer configuration to use to run the script. Which three computers can run the script? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.',
  '[{"key":"A","text":"a computer that runs Windows 11 and has the Azure CLI tools installed"},{"key":"B","text":"a computer that runs Linux and has the Azure CLI tools installed"},{"key":"C","text":"a computer that runs macOS and has PowerShell Core 6.0 installed"},{"key":"D","text":"a computer that runs Chrome OS and uses Azure Cloud Shell"},{"key":"E","text":"a computer that runs Windows 10 and has the Azure PowerShell module installed"}]'::jsonb, ARRAY['C', 'D', 'E']::text[],
  'Câu trả lời đúng: C — máy tính chạy macOS và được cài đặt PowerShell Core 6.0; D — máy tính chạy Chrome OS và sử dụng Azure Cloud Shell; E — một máy tính chạy Windows 10 và đã cài đặt mô-đun Azure PowerShell. C. Máy tính chạy macOS và được cài đặt PowerShell Core 6.0. PowerShell Core 6.0 là nền tảng đa nền tảng và có thể chạy trên macOS. Nếu mô-đun Azure PowerShell cũng được cài đặt, máy tính này có thể chạy tập lệnh. D. Máy tính chạy Chrome OS và sử dụng Azure Cloud Shell. Azure Cloud Shell hỗ trợ cả Bash và PowerShell. Nếu Cloud Shell được cấu hình để sử dụng PowerShell, nó có thể chạy tập lệnh. E. Máy tính chạy Windows 10 và đã cài đặt mô-đun Azure PowerShell. Windows 10 hỗ trợ PowerShell và với mô-đun Azure PowerShell được cài đặt, nó có thể chạy tập lệnh để tạo tài nguyên Azure.', 'Azure Management and Governance', ARRAY['AZ-900', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-309', 'az-900', 309, 'In the infrastructure as a service (IaaS) cloud service model, which two components are the responsibility of the cloud service provider? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.',
  '[{"key":"A","text":"the configuration and maintenance of storage"},{"key":"B","text":"the installation and configuration of the operating system"},{"key":"C","text":"maintaining the hardware"},{"key":"D","text":"the network configuration"},{"key":"E","text":"physical security of the datacenter infrastructure"}]'::jsonb, ARRAY['C', 'E']::text[],
  'Câu trả lời đúng: C — bảo trì phần cứng; E - bảo mật vật lý của cơ sở hạ tầng trung tâm dữ liệu. C. bảo trì phần cứng (Đúng): Nhà cung cấp chịu trách nhiệm mua, cung cấp năng lượng và sửa chữa các máy chủ vật lý, phiến, mô-đun bộ nhớ và mảng máy chủ lưu trữ vật lý nằm bên trong trung tâm dữ liệu của họ. E. bảo mật vật lý của cơ sở hạ tầng trung tâm dữ liệu (Đúng): Nhà cung cấp sở hữu ranh giới bảo mật vật lý. Điều này bao gồm kiểm soát truy cập sinh trắc học, camera an ninh, hàng rào chu vi, bảo vệ tại chỗ và bảo vệ môi trường (như ngăn chặn hỏa hoạn và làm mát) để đảm bảo nhân viên trái phép không thể truy cập vật lý vào máy chủ đang chạy dữ liệu của bạn.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Service Models', 'Storage', 'Architecture']::text[],
  ''
),
(
  'az-900-question-310', 'az-900', 310, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"The Cool access tier is optimized hd","correctAnswer":"A"}],"choices":[{"key":"A","text":"for data that is accessed infrequently and stored for at least 30 days."},{"key":"B","text":"for data that is accessed rarely, is stored for at least 180 days, and"},{"key":"C","text":"has flexible latency requirements."},{"key":"D","text":"for storing data that is accessed frequently."}]}'::jsonb, ARRAY['1=A']::text[],
  'Đối với dữ liệu được truy cập không thường xuyên và được lưu trữ trong ít nhất 30 ngày. Hoàn thành chính xác: đối với dữ liệu được truy cập không thường xuyên và được lưu trữ trong ít nhất 30 ngày.', 'Azure Architecture and Services', ARRAY['AZ-900']::text[],
  ''
),
(
  'az-900-question-311', 'az-900', 311, 'For each statement, select Yes if it is true. Otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"In Platform as a Service (PaaS), updating the operating system is the customer’s responsibility.","correctAnswer":"No"},{"id":"2","text":"In Infrastructure as a Service (IaaS), controlling the virtual network is Microsoft’s responsibility.","correctAnswer":"No"},{"id":"3","text":"In Software as a Service (SaaS), identity and directory infrastructure management is a shared responsibility.","correctAnswer":"Yes"}],"choices":[]}'::jsonb, ARRAY['1:No', '2:No', '3:Yes']::text[],
  'Trong PaaS, Microsoft duy trì hệ điều hành. Trong IaaS, khách hàng kiểm soát cấu hình mạng ảo của mình. Trách nhiệm nhận dạng và thư mục vẫn được chia sẻ trong SaaS.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Service Models', 'Identity and Security']::text[],
  ''
),
(
  'az-900-question-312', 'az-900', 312, 'You have an Azure Storage account named storage1. You need to ensure that containers can be created in, but not deleted from, storage1. What should you do?',
  '[{"key":"A","text":"Create a ReadOnly lock for storage1."},{"key":"B","text":"Create a delete lock for storage1."},{"key":"C","text":"Enable container soft delete."},{"key":"D","text":"Enable blob soft delete."}]'::jsonb, ARRAY['B']::text[],
  'Câu trả lời đúng: B — Tạo khóa xóa cho bộ nhớ1. Tạo khóa xóa cho bộ nhớ1.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Compute', 'Storage']::text[],
  ''
),
(
  'az-900-question-313', 'az-900', 313, 'You have an Azure subscription. You need to use Azure Cloud Shell to run a deployment script. What should you use to access Cloud Shell?',
  '[{"key":"A","text":"Azure Resource Manager (ARM)"},{"key":"B","text":"Microsoft Visual Studio"},{"key":"C","text":"a Windows command prompt"},{"key":"D","text":"a web browser"}]'::jsonb, ARRAY['D']::text[],
  'Câu trả lời đúng: D — một trình duyệt web. Câu trả lời đúng là D:a trình duyệt web.', 'Azure Management and Governance', ARRAY['AZ-900', 'Architecture', 'Management Tools']::text[],
  ''
),
(
  'az-900-question-314', 'az-900', 314, 'You need to migrate an on-premises server by using a lift-and-shift migration. To which type of cloud service should you migrate?',
  '[{"key":"A","text":"infrastructure as a service (IaaS)"},{"key":"B","text":"software as a service (SaaS)"},{"key":"C","text":"platform as a service (PaaS)"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A — cơ sở hạ tầng như một dịch vụ (IaaS). cơ sở hạ tầng dưới dạng dịch vụ (IaaS)', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Service Models']::text[],
  ''
),
(
  'az-900-question-315', 'az-900', 315, 'For each statement, select Yes if it is true. Otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"Azure Advisor supports alerts. Azure Advisor recommendations can be filtered by Administrative unit.","correctAnswer":"Yes"},{"id":"2","text":"Azure Advisor provides recommendations on improving the performance of resources.","correctAnswer":"No"}],"choices":[]}'::jsonb, ARRAY['1:Yes', '2:No']::text[],
  'Tuyên bố 1: Azure Advisor hỗ trợ cảnh báo. Trả lời: Có Azure Advisor tích hợp nguyên bản với Cảnh báo Azure Monitor. Điều này cho phép bạn định cấu hình ngưỡng thông báo tự động để tại thời điểm tạo ra một đề xuất quan trọng mới—chẳng hạn như lỗ hổng bảo mật nghiêm trọng hoặc cơ hội tiết kiệm chi phí khẩn cấp—cảnh báo sẽ kích hoạt để thông báo cho nhóm kỹ thuật qua email, SMS, thông báo đẩy hoặc webhook. Tuyên bố 2: Các đề xuất Azure Advisor có thể được lọc theo Đơn vị quản trị. Trả lời: Không có Đơn vị quản trị (AU) nào là tính năng chứa logic dành riêng cho Microsoft Entra ID được sử dụng nghiêm ngặt để ủy quyền kiểm soát quản trị đối với tài khoản người dùng, nhóm và đối tượng thiết bị. Câu trả lời đúng: 1: Có; 2: Không.', 'Azure Management and Governance', ARRAY['AZ-900', 'Compute', 'Identity and Security', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-316', 'az-900', 316, 'Microsoft 365 is an example of which cloud service model?',
  '[{"key":"A","text":"infrastructure as a service (IaaS)"},{"key":"B","text":"platform as a service (PaaS)"},{"key":"C","text":"software as a service (SaaS)"}]'::jsonb, ARRAY['C']::text[],
  'Câu trả lời đúng: C — phần mềm dưới dạng dịch vụ (SaaS). C. phần mềm dưới dạng dịch vụ (SaaS). Microsoft 365 (trước đây là Office 365) cung cấp các ứng dụng phần mềm dựa trên đám mây như Word, Excel, Outlook và Teams qua internet. Với mô hình SaaS, Microsoft quản lý tất cả cơ sở hạ tầng, phần mềm trung gian và phần mềm ứng dụng cơ bản; người dùng chỉ cần kết nối và sử dụng các ứng dụng, thường thông qua trình duyệt web hoặc phần mềm được cài đặt cục bộ được quản lý tập trung qua đám mây. Điều này giúp người dùng hoặc tổ chức không cần phải lo lắng về việc cài đặt, bảo trì hoặc quản lý phần mềm hoặc cơ sở hạ tầng mà nó chạy trên đó.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Service Models', 'Identity and Security']::text[],
  ''
),
(
  'az-900-question-317', 'az-900', 317, 'For each statement, select Yes if it is true. Otherwise, select No.',
  '{"type":"statement_matrix","statements":[{"id":"1","text":"The Cold access tier in Azure Storage is optimized for at least 90 days of data storage. The Cool access tier in Azure Storage is optimized for at least 90 days of data storage.","correctAnswer":"No"},{"id":"2","text":"The Archive access tier in Azure Storage is optimized for at least 180 days of data storage.","correctAnswer":"No"}],"choices":[]}'::jsonb, ARRAY['1:No', '2:No']::text[],
  'Tuyên bố 1: Tầng truy cập nguội trong Azure Storage được tối ưu hóa để lưu trữ dữ liệu ít nhất 90 ngày. Trả lời: Không Cấp truy cập nguội là cấp lưu trữ trực tuyến mới hơn được đặt giữa Cool và Archive. Nó được tối ưu hóa rõ ràng để lưu trữ dữ liệu ít được truy cập hoặc sửa đổi, với cam kết lưu giữ tối thiểu là 30 ngày. Việc lưu trữ dữ liệu ở cấp này dưới 30 ngày sẽ phải chịu phí xóa sớm. Tuyên bố 2: Cấp truy cập Cool trong Azure Storage được tối ưu hóa để lưu trữ dữ liệu ít nhất 90 ngày. Trả lời: Không Giống như cấp Lạnh, cấp truy cập Cool được thiết kế để lưu trữ ngắn hạn đến trung hạn các dữ liệu được truy cập không thường xuyên (chẳng hạn như bộ dữ liệu dự phòng hoặc nhật ký đo từ xa). Câu trả lời đúng: 1: Không; 2: Không.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Storage']::text[],
  ''
),
(
  'az-900-question-318', 'az-900', 318, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"You can use ____ to receive recommendations for reducing Azure costs.","correctAnswer":"B"}],"choices":[{"key":"A","text":"Application Insights"},{"key":"B","text":"Azure Advisor"},{"key":"C","text":"Azure resource tags"},{"key":"D","text":"Azure Service Health"}]}'::jsonb, ARRAY['1=B']::text[],
  'Azure Advisor phân tích cấu hình và cách sử dụng tài nguyên, đồng thời đề xuất các cải tiến về chi phí, độ tin cậy, hiệu suất, bảo mật và hoạt động xuất sắc.', 'Azure Management and Governance', ARRAY['AZ-900', 'Cost Management', 'Monitoring']::text[],
  ''
),
(
  'az-900-question-319', 'az-900', 319, 'Match each authentication method to its relative security and convenience level.',
  '{"type":"matching_drag_drop","statements":[{"id":"1","text":"Higher security, less convenient","correctAnswer":"A"},{"id":"2","text":"Higher security, more convenient","correctAnswer":"C"},{"id":"3","text":"Lower security, more convenient","correctAnswer":"B"}],"choices":[{"key":"A","text":"Multifactor authentication (MFA)"},{"key":"B","text":"Password authentication"},{"key":"C","text":"Passwordless authentication"}]}'::jsonb, ARRAY['1=A', '2=C', '3=B']::text[],
  'MFA cải thiện bảo mật nhưng thêm bước xác minh. Các phương pháp không mật khẩu cung cấp khả năng xác thực mạnh mẽ với trải nghiệm hợp lý, trong khi riêng mật khẩu thì tương đối yếu hơn.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Identity and Security']::text[],
  ''
),
(
  'az-900-question-320', 'az-900', 320, 'How many data copies are stored in gee-zone-redundant storage (GZRS)?',
  '[{"key":"A","text":"2"},{"key":"B","text":"3"},{"key":"C","text":"6"},{"key":"D","text":"12"}]'::jsonb, ARRAY['C']::text[],
  'Câu trả lời đúng: C — 6. C. 6. Bộ lưu trữ dự phòng vùng địa lý (GZRS) kết hợp tính sẵn sàng cao của Bộ lưu trữ dự phòng vùng (ZRS) với khả năng bảo vệ khắc phục thảm họa khu vực của Bộ lưu trữ dự phòng địa lý (GRS).', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Benefits', 'Storage', 'Architecture']::text[],
  ''
),
(
  'az-900-question-321', 'az-900', 321, 'Select the answer that correctly completes the sentence.',
  '{"type":"matching_dropdown","statements":[{"id":"1","text":"If you delete data from ____ before 30 days have elapsed, an early deletion charge applies.","correctAnswer":"C"}],"choices":[{"key":"A","text":"Azure Cosmos DB"},{"key":"B","text":"Azure SQL Database"},{"key":"C","text":"the cool access tier of Azure Blob Storage"},{"key":"D","text":"the hot access tier of Azure Blob Storage"}]}'::jsonb, ARRAY['1=C']::text[],
  'Dữ liệu ở cấp mát Blob Storage có thời gian lưu giữ tối thiểu được khuyến nghị. Xóa hoặc di chuyển nó sớm hơn có thể phải chịu phí xóa sớm.', 'Azure Architecture and Services', ARRAY['AZ-900', 'Storage', 'Cost Management']::text[],
  ''
),
(
  'az-900-question-322', 'az-900', 322, 'Match the cloud service model to the appropriate description.',
  '{"type":"matching_drag_drop","statements":[{"id":"1","text":"Provides the most control of a cloud environment.","correctAnswer":"A"},{"id":"2","text":"Provides control of database design without requiring maintenance of the operating system.","correctAnswer":"B"},{"id":"3","text":"Is used to host Azure virtual machines.","correctAnswer":"A"}],"choices":[{"key":"A","text":"Infrastructure as a Service (IaaS)"},{"key":"B","text":"Platform as a Service (PaaS)"},{"key":"C","text":"Software as a Service (SaaS)"}]}'::jsonb, ARRAY['1=A', '2=B', '3=A']::text[],
  'IaaS cung cấp khả năng kiểm soát các máy ảo và hệ điều hành của chúng. Nền tảng cơ sở dữ liệu được quản lý là PaaS vì Microsoft duy trì hệ điều hành cơ bản.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Service Models']::text[],
  ''
),
(
  'az-900-question-323', 'az-900', 323, 'What can you use to make recommendations that will reduce Azure costs?',
  '[{"key":"A","text":"Azure Advisor"},{"key":"B","text":"Log Analytics"},{"key":"C","text":"Azure Service Health"},{"key":"D","text":"the Azure pricing calculator"}]'::jsonb, ARRAY['A']::text[],
  'Câu trả lời đúng: A — Azure Advisor. Azure Advisor: Azure Advisor là nhà tư vấn đám mây được cá nhân hóa giúp bạn thực hiện theo các phương pháp hay nhất để tối ưu hóa việc triển khai Azure của mình. Nó cung cấp các khuyến nghị để giảm chi phí, cải thiện hiệu suất, tăng cường bảo mật và đảm bảo tính sẵn sàng cao. Để giảm chi phí cụ thể, Azure Advisor phân tích cấu hình tài nguyên và kiểu sử dụng của bạn, sau đó xác định các cơ hội để giảm tổng chi tiêu của bạn. Điều này có thể bao gồm các đề xuất như thay đổi kích thước hoặc tắt các tài nguyên không được sử dụng đúng mức, áp dụng các phiên bản dự trữ, v.v.', 'Cloud Concepts', ARRAY['AZ-900', 'Cloud Benefits', 'Cost Management', 'Monitoring']::text[],
  ''
)
ON CONFLICT (id) DO UPDATE SET
  cert_id = EXCLUDED.cert_id,
  question_number = EXCLUDED.question_number,
  text = EXCLUDED.text,
  options = EXCLUDED.options,
  correct_answers = EXCLUDED.correct_answers,
  explanation = EXCLUDED.explanation,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags,
  image_url = EXCLUDED.image_url;

DELETE FROM questions
WHERE cert_id = 'az-900'
  AND id NOT IN ('az-900-question-001', 'az-900-question-002', 'az-900-question-003', 'az-900-question-004', 'az-900-question-005', 'az-900-question-006', 'az-900-question-007', 'az-900-question-008', 'az-900-question-009', 'az-900-question-010', 'az-900-question-011', 'az-900-question-012', 'az-900-question-013', 'az-900-question-014', 'az-900-question-015', 'az-900-question-016', 'az-900-question-017', 'az-900-question-018', 'az-900-question-019', 'az-900-question-020', 'az-900-question-021', 'az-900-question-022', 'az-900-question-023', 'az-900-question-024', 'az-900-question-025', 'az-900-question-026', 'az-900-question-027', 'az-900-question-028', 'az-900-question-029', 'az-900-question-030', 'az-900-question-031', 'az-900-question-032', 'az-900-question-033', 'az-900-question-034', 'az-900-question-035', 'az-900-question-036', 'az-900-question-037', 'az-900-question-038', 'az-900-question-039', 'az-900-question-040', 'az-900-question-041', 'az-900-question-042', 'az-900-question-043', 'az-900-question-044', 'az-900-question-045', 'az-900-question-046', 'az-900-question-047', 'az-900-question-048', 'az-900-question-049', 'az-900-question-050', 'az-900-question-051', 'az-900-question-052', 'az-900-question-053', 'az-900-question-054', 'az-900-question-055', 'az-900-question-056', 'az-900-question-057', 'az-900-question-058', 'az-900-question-059', 'az-900-question-060', 'az-900-question-061', 'az-900-question-062', 'az-900-question-063', 'az-900-question-064', 'az-900-question-065', 'az-900-question-066', 'az-900-question-067', 'az-900-question-068', 'az-900-question-069', 'az-900-question-070', 'az-900-question-071', 'az-900-question-072', 'az-900-question-073', 'az-900-question-074', 'az-900-question-075', 'az-900-question-076', 'az-900-question-077', 'az-900-question-078', 'az-900-question-079', 'az-900-question-080', 'az-900-question-081', 'az-900-question-082', 'az-900-question-083', 'az-900-question-084', 'az-900-question-085', 'az-900-question-086', 'az-900-question-087', 'az-900-question-088', 'az-900-question-089', 'az-900-question-090', 'az-900-question-091', 'az-900-question-092', 'az-900-question-093', 'az-900-question-094', 'az-900-question-095', 'az-900-question-096', 'az-900-question-097', 'az-900-question-098', 'az-900-question-099', 'az-900-question-100', 'az-900-question-101', 'az-900-question-102', 'az-900-question-103', 'az-900-question-104', 'az-900-question-105', 'az-900-question-106', 'az-900-question-107', 'az-900-question-108', 'az-900-question-109', 'az-900-question-110', 'az-900-question-111', 'az-900-question-112', 'az-900-question-113', 'az-900-question-114', 'az-900-question-115', 'az-900-question-116', 'az-900-question-117', 'az-900-question-118', 'az-900-question-119', 'az-900-question-120', 'az-900-question-121', 'az-900-question-122', 'az-900-question-123', 'az-900-question-124', 'az-900-question-125', 'az-900-question-126', 'az-900-question-127', 'az-900-question-128', 'az-900-question-129', 'az-900-question-130', 'az-900-question-131', 'az-900-question-132', 'az-900-question-133', 'az-900-question-134', 'az-900-question-135', 'az-900-question-136', 'az-900-question-137', 'az-900-question-138', 'az-900-question-139', 'az-900-question-140', 'az-900-question-141', 'az-900-question-142', 'az-900-question-143', 'az-900-question-144', 'az-900-question-145', 'az-900-question-146', 'az-900-question-147', 'az-900-question-148', 'az-900-question-149', 'az-900-question-150', 'az-900-question-151', 'az-900-question-152', 'az-900-question-153', 'az-900-question-154', 'az-900-question-155', 'az-900-question-156', 'az-900-question-157', 'az-900-question-158', 'az-900-question-159', 'az-900-question-160', 'az-900-question-161', 'az-900-question-162', 'az-900-question-163', 'az-900-question-164', 'az-900-question-165', 'az-900-question-166', 'az-900-question-167', 'az-900-question-168', 'az-900-question-169', 'az-900-question-170', 'az-900-question-171', 'az-900-question-172', 'az-900-question-173', 'az-900-question-174', 'az-900-question-175', 'az-900-question-176', 'az-900-question-177', 'az-900-question-178', 'az-900-question-179', 'az-900-question-180', 'az-900-question-181', 'az-900-question-182', 'az-900-question-183', 'az-900-question-184', 'az-900-question-185', 'az-900-question-186', 'az-900-question-187', 'az-900-question-188', 'az-900-question-189', 'az-900-question-190', 'az-900-question-191', 'az-900-question-192', 'az-900-question-193', 'az-900-question-194', 'az-900-question-195', 'az-900-question-196', 'az-900-question-197', 'az-900-question-198', 'az-900-question-199', 'az-900-question-200', 'az-900-question-201', 'az-900-question-202', 'az-900-question-203', 'az-900-question-204', 'az-900-question-205', 'az-900-question-206', 'az-900-question-207', 'az-900-question-208', 'az-900-question-209', 'az-900-question-210', 'az-900-question-211', 'az-900-question-212', 'az-900-question-213', 'az-900-question-214', 'az-900-question-215', 'az-900-question-216', 'az-900-question-217', 'az-900-question-218', 'az-900-question-219', 'az-900-question-220', 'az-900-question-221', 'az-900-question-222', 'az-900-question-223', 'az-900-question-224', 'az-900-question-225', 'az-900-question-226', 'az-900-question-227', 'az-900-question-228', 'az-900-question-229', 'az-900-question-230', 'az-900-question-231', 'az-900-question-232', 'az-900-question-233', 'az-900-question-234', 'az-900-question-235', 'az-900-question-236', 'az-900-question-237', 'az-900-question-238', 'az-900-question-239', 'az-900-question-240', 'az-900-question-241', 'az-900-question-242', 'az-900-question-243', 'az-900-question-244', 'az-900-question-245', 'az-900-question-246', 'az-900-question-247', 'az-900-question-248', 'az-900-question-249', 'az-900-question-250', 'az-900-question-251', 'az-900-question-252', 'az-900-question-253', 'az-900-question-254', 'az-900-question-255', 'az-900-question-256', 'az-900-question-257', 'az-900-question-258', 'az-900-question-259', 'az-900-question-260', 'az-900-question-261', 'az-900-question-262', 'az-900-question-263', 'az-900-question-264', 'az-900-question-265', 'az-900-question-266', 'az-900-question-267', 'az-900-question-268', 'az-900-question-269', 'az-900-question-270', 'az-900-question-271', 'az-900-question-272', 'az-900-question-273', 'az-900-question-274', 'az-900-question-275', 'az-900-question-276', 'az-900-question-277', 'az-900-question-278', 'az-900-question-279', 'az-900-question-280', 'az-900-question-281', 'az-900-question-282', 'az-900-question-283', 'az-900-question-284', 'az-900-question-285', 'az-900-question-286', 'az-900-question-287', 'az-900-question-288', 'az-900-question-289', 'az-900-question-290', 'az-900-question-291', 'az-900-question-292', 'az-900-question-293', 'az-900-question-294', 'az-900-question-295', 'az-900-question-296', 'az-900-question-297', 'az-900-question-298', 'az-900-question-299', 'az-900-question-300', 'az-900-question-301', 'az-900-question-302', 'az-900-question-303', 'az-900-question-304', 'az-900-question-305', 'az-900-question-306', 'az-900-question-307', 'az-900-question-308', 'az-900-question-309', 'az-900-question-310', 'az-900-question-311', 'az-900-question-312', 'az-900-question-313', 'az-900-question-314', 'az-900-question-315', 'az-900-question-316', 'az-900-question-317', 'az-900-question-318', 'az-900-question-319', 'az-900-question-320', 'az-900-question-321', 'az-900-question-322', 'az-900-question-323');

COMMIT;

SELECT cert_id, count(*) AS question_count
FROM questions
WHERE cert_id = 'az-900'
GROUP BY cert_id;
