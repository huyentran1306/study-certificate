-- =========================================================================
-- STANDALONE SQL IMPORT FOR DP-600: Implementing Analytics Solutions Using Microsoft Fabric
-- Total questions: 220 questions
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
  'dp-600',
  'Implementing Analytics Solutions Using Microsoft Fabric',
  'DP-600',
  'Chinh phục chứng chỉ Microsoft Certified: Fabric Analytics Engineer Associate (DP-600). Lập kế hoạch, triển khai và quản lý giải pháp phân tích dữ liệu toàn diện với Microsoft Fabric, Lakehouse, Data Warehouse và Direct Lake.',
  'Nâng cao',
  '18-24 Giờ',
  'bg-gradient-to-br from-teal-600 via-cyan-800 to-slate-950 text-white',
  'Database',
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
  ('dp600-1', 'dp-600', 1, 'You have an Azure Data Lake Storage Gen2 account named storage1 that contains a Parquet file named sales.parquet.  
  
You have a Fabric tenant containing a workspace named Workspace1.  
  
Using a notebook in Workspace1, you need to load the file’s content into the default lakehouse. The solution must ensure the content automatically appears as a table named Sales in Lakehouse explorer.  
  
How should you complete the code?', '[]'::jsonb, ARRAY[]::text[], 'Các bảng được quản lý lakehouse của Fabric là các bảng Delta. Viết DataFrame ở định dạng Delta bằng `saveAsTable("sales")` sẽ đăng ký nó dưới dạng bảng trong lakehouse mặc định, để nó xuất hiện trong Lakehouse explorer.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-2', 'dp-600', 2, 'You have a Fabric tenant that contains a data warehouse.  
  
You need to load rows into a large Type 2 slowly changing dimension (SCD). The solution must minimize resource usage.  
  
Which T-SQL statement should you use?', '[{"key":"A","text":"UPDATE AND INSERT"},{"key":"B","text":"MERGE"},{"key":"C","text":"TRUNCATE TABLE and INSERT"},{"key":"D","text":"CREATE TABLE AS SELECT"}]'::jsonb, ARRAY['B']::text[], 'MERGE cho phép bạn chèn các hàng thứ nguyên mới và cập nhật/hết hạn các hàng đã thay đổi trong một câu lệnh dựa trên tập hợp duy nhất, đây chính xác là mẫu mà tải SCD Loại 2 cần và tránh việc quét bảng bổ sung cũng như chi phí ghi nhật ký khi chạy các câu lệnh CẬP NHẬT và CHÈN riêng biệt. BẢNG TRUNCATE VÀ CHÈN sẽ hủy các hàng lịch sử mà SCD Loại 2 được thiết kế để bảo tồn và TẠO BẢNG NHƯ CHỌN sẽ xây dựng lại toàn bộ bảng thay vì hợp nhất dần dần các thay đổi vào đó.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-3', 'dp-600', 3, 'You have a KQL database containing a table named Readings.  
  
You need to query Readings and return the results shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784206734677-i0lqs4di.png)  
  
How should you complete the query?', '[]'::jsonb, ARRAY[]::text[], 'Sau khi sắp xếp, `prev()` trả về một giá trị từ hàng trước trong tập kết quả được tuần tự hóa. `extend` tạo các cột đọc trước và cột ngày giờ trước đó và `project` trả về các cột được chỉ định theo thứ tự được yêu cầu.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784206734677-i0lqs4di.png', 'published'),
  ('dp600-4', 'dp-600', 4, 'HOTSPOT  
  
You have a Fabric tenant containing a workspace named Enterprise. Enterprise contains a semantic model named Model1, which has a Power Query date parameter named Date1.  
  
You build a deployment pipeline named Enterprise Data with two stages: Development and Test. You assign the Enterprise workspace to Development.  
  
You need to perform these actions:  
  
- Create a workspace named Enterprise [Test] and assign it to the Test stage.  
- Configure a rule that modifies Date1’s value when changes deploy to the Test stage.  
  
Which two settings should you use?

![Question Image](https://cdn.examcademy.com/images/questions/1785601675376-cdz3ctlm.png)', '[]'::jsonb, ARRAY[]::text[], 'Sử dụng **Chỉ định không gian làm việc** trong giai đoạn Thử nghiệm để tạo hoặc liên kết Doanh nghiệp [Thử nghiệm] với giai đoạn đó. Sử dụng **Quy tắc triển khai** trong giai đoạn Thử nghiệm để tạo quy tắc tham số cho Date1 và đặt giá trị có hiệu lực sau mỗi lần triển khai.

**Tài liệu tham khảo:**
[Assign a workspace to a Microsoft Fabric deployment pipeline](https://learn.microsoft.com/en-us/fabric/cicd/deployment-pipelines/assign-pipeline) · [Create deployment rules for Fabric''s ALM](https://learn.microsoft.com/en-us/fabric/cicd/deployment-pipelines/create-rules)', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1785601675376-cdz3ctlm.png', 'published'),
  ('dp600-5', 'dp-600', 5, 'You have a Fabric tenant that includes a semantic model named Model1. Model1 includes a fact table named FactSales. FactSales has a relationship with a dimension table named DimDate through a column named OrderDate.  
  
You add a second relationship to FactSales between FactSales and DimDate, based on a column named ShippedDate.  
  
You need to filter by using ShippedDate in a new report. The solution must **not** affect how existing reports function.  
  
Which two actions should you take? Each correct answer presents part of the solution.  
  
**NOTE:** Each correct answer is worth one point.', '[{"key":"A","text":"Enable the ShippedDate relationship."},{"key":"B","text":"Use a RELATEDTABLE DAX function."},{"key":"C","text":"Use a CROSSFILTER DAX function."},{"key":"D","text":"Use a USERELATIONSHIP DAX function."},{"key":"E","text":"Disable the ShippedDate relationship between the tables."}]'::jsonb, ARRAY['D', 'E']::text[], 'Giữ mối quan hệ Ngày đặt hàng ở trạng thái hoạt động để duy trì hoạt động của báo cáo hiện có và giữ mối quan hệ Ngày giao hàng ở trạng thái không hoạt động. Một biện pháp có thể sử dụng `USERELATIONSHIP` trong chức năng lấy bộ lọc, chẳng hạn như `CALCULATE` để chỉ kích hoạt mối quan hệ ShippedDate cho phép tính đó mà không thay đổi mối quan hệ hoạt động mặc định của mô hình.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-6', 'dp-600', 6, 'You have a Fabric tenant containing four workspaces named Development, Test, QA, and Production. All the workspaces use Premium Per User (PPU) license mode.  
  
You plan to use a release pipeline to support the development lifecycle from Development to Production.  
  
Which three actions should you perform, in sequence?', '{"statements":[{"id":"slot1","text":"Slot 1:","correctAnswer":"B"},{"id":"slot2","text":"Slot 2:","correctAnswer":"E"},{"id":"slot3","text":"Slot 3:","correctAnswer":"D"}],"choices":[{"key":"A","text":"Move each workspace to Pro license mode."},{"key":"B","text":"Create a deployment pipeline."},{"key":"C","text":"Create a deployment rule."},{"key":"D","text":"Assign workspaces."},{"key":"E","text":"Create the QA stage."}]}'::jsonb, ARRAY['slot1=B', 'slot2=E', 'slot3=D']::text[], 'Premium Per User hỗ trợ quy trình triển khai. Đầu tiên, quy trình triển khai được tạo, sau đó cấu trúc giai đoạn của nó được xác định; cần có giai đoạn QA để thể hiện bốn môi trường: Phát triển, Thử nghiệm, QA và Sản xuất. Sau khi quy trình và các giai đoạn của nó tồn tại, mỗi không gian làm việc được chỉ định cho giai đoạn quy trình phù hợp. Quy tắc triển khai chỉ ghi đè cấu hình theo mục cụ thể trong quá trình triển khai và không bắt buộc đối với việc tạo quy trình hoặc phân công không gian làm việc.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-7', 'dp-600', 7, 'You have a Fabric tenant that includes a complex semantic model. The model uses a star schema and includes many tables, including a fact table named Sales.  
  
You need to display a diagram of the model. The diagram must include only the Sales table and its related tables.  
  
What should you use in Microsoft Power BI Desktop?', '[{"key":"A","text":"data categories"},{"key":"B","text":"Data view"},{"key":"C","text":"Model view"},{"key":"D","text":"DAX query view"}]'::jsonb, ARRAY['C']::text[], 'Chế độ xem Mô hình máy tính để bàn Power BI có thể tạo một sơ đồ riêng chỉ chứa một tập hợp con các bảng của mô hình ngữ nghĩa. Sơ đồ có thể bắt đầu bằng bảng Bán hàng và sử dụng **Thêm bảng liên quan** để bao gồm các bảng liên quan đến bảng đó.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-8', 'dp-600', 8, 'You have a Fabric workspace named Workspace1.  
  
Workspace1 contains multiple semantic models, including a model named Model1. Model1 is updated by using an XMLA endpoint.  
  
You need to increase the speed of the write operations of the XMLA endpoint.  
  
What should you do?', '[{"key":"A","text":"Delete any unused semantic models from Workspace1."},{"key":"B","text":"Select Large semantic model storage format for Workspace1."},{"key":"C","text":"Configure Model 1 to use the Direct Lake storage format."},{"key":"D","text":"Delete any unused columns from Model1."}]'::jsonb, ARRAY['B']::text[], 'Việc chọn định dạng lưu trữ mô hình ngữ nghĩa lớn sẽ tối ưu hóa cụ thể các hoạt động ghi để triển khai điểm cuối XMLA. Định dạng này cho phép cải thiện hiệu suất và khả năng nén cao hơn cho các hoạt động ghi siêu dữ liệu. Việc xóa các mô hình hoặc cột có thể giải phóng tài nguyên nhưng không trực tiếp nâng cao hiệu suất ghi XMLA và bộ lưu trữ Direct Lake giải quyết hiệu suất truy vấn chứ không phải tối ưu hóa ghi.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-9', 'dp-600', 9, 'You have a Fabric tenant that contains the workspaces shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783712966688-w8j1we3g.png)  
  
You have a deployment pipeline named Pipeline1 that deploys items from Workspace_DEV to Workspace_TEST. In Pipeline1, all items that have matching names are paired.  
  
You deploy the contents of Workspace_DEV to Workspace_TEST by using Pipeline1.  
  
What will the contents of Workspace_TEST be once the deployment is complete?', '[{"key":"A","text":"Lakehouse2 -Notebook2 -SemanticModel1 -"},{"key":"B","text":"Lakehouse1 -Notebook1 -Pipeline1 -SemanticModel1 -"},{"key":"C","text":"Lakehouse1 -Lakehouse2 -Notebook1 -Notebook2 -Pipeline1 -SemanticModel1 -"},{"key":"D","text":"Lakehouse2 -Notebook2 -Pipeline1 -SemanticModel1"}]'::jsonb, ARRAY['C']::text[], 'Khi quy trình triển khai triển khai từ Workspace_DEV đến Workspace_TEST có tên mục trùng khớp, tất cả các mục nhà phát triển có tên trùng khớp trong không gian làm việc mục tiêu sẽ được thay thế hoặc ghép nối. Kết quả bao gồm tất cả các mục từ cả hai không gian làm việc phù hợp với tiêu chí ghép nối.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783712966688-w8j1we3g.png', 'published'),
  ('dp600-10', 'dp-600', 10, '$35', '[{"key":"A","text":"Microsoft Power BI Desktop"},{"key":"B","text":"the Power BI service"},{"key":"C","text":"DAX Studio"},{"key":"D","text":"Tabular Editor"}]'::jsonb, ARRAY['D']::text[], 'Các nhóm tính toán không thể được thiết kế nguyên bản trong giao diện người dùng của Máy tính để bàn Power BI dành cho Direct Lake, mô hình ngữ nghĩa lakehouse được hỗ trợ bởi XMLA; phương pháp được hỗ trợ là kết nối một công cụ bên ngoài như Trình soạn thảo dạng bảng (2 hoặc 3) qua điểm cuối XMLA và thêm nhóm tính toán vào đó. Điều này cũng đáp ứng yêu cầu giảm thiểu nỗ lực triển khai và bảo trì, vì Tabular Editor được xây dựng nhằm mục đích tạo và triển khai các đối tượng mô hình dạng bảng này.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-11', 'dp-600', 11, 'You have a Fabric warehouse containing a table named `Sales.Products`. `Sales.Products` contains the following columns.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784205236522-pvj49rmm.png)  
  
You need to write a T-SQL query that returns the following columns.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784205240602-5tsfh6bq.png)  
  
How should you complete the code?', '[]'::jsonb, ARRAY[]::text[], '`GREATEST` trả về giá trị vô hướng được cung cấp lớn nhất. `COALESCE` là hàm T-SQL dùng để trả về giá trị không NULL đầu tiên cho logic dự phòng được ưu tiên. Để thực sự triển khai mức ưu tiên hàng đầu của AgentPrice, các đối số của nó phải được sắp xếp theo thứ tự `AgentPrice, WholesalePrice, ListPrice`; thứ tự đối số được hiển thị sẽ luôn chọn ListPrice khác null.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784205236522-pvj49rmm.png', 'published'),
  ('dp600-12', 'dp-600', 12, 'You have a Fabric tenant.  
  
You are creating a Fabric Data Factory pipeline.  
  
You have a stored procedure that returns the number of active customers and their average sales for the current month.  
  
You need to add an activity that will execute the stored procedure in a warehouse. The returned values must be available to the downstream activities of the pipeline.  
  
Which type of activity should you add?', '[{"key":"A","text":"Append variable"},{"key":"B","text":"Script"},{"key":"C","text":"Stored procedure"},{"key":"D","text":"Get metadata"}]'::jsonb, ARRAY['B']::text[], 'Hoạt động Quy trình được lưu trữ trong đường dẫn Fabric Data Factory không hỗ trợ hiển thị các giá trị tham số đầu ra cho các hoạt động xuôi dòng. Để chạy một quy trình và cung cấp các giá trị trả về của quy trình đó cho các bước sau trong quy trình, bạn sử dụng hoạt động Tập lệnh, hoạt động này có thể thực thi quy trình và hiển thị tập kết quả/đầu ra của quy trình đó để sử dụng tiếp theo.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-13', 'dp-600', 13, 'You have a Fabric tenant that contains a data pipeline.  

You need to ensure that the pipeline runs every four hours on Mondays and Fridays.  

To what should you set Repeat for the schedule?', '[{"key":"A","text":"Daily"},{"key":"B","text":"By the minute"},{"key":"C","text":"Weekly"},{"key":"D","text":"Hourly"}]'::jsonb, ARRAY['C']::text[], 'Trong Microsoft Fabric, để lên lịch quy trình vào các ngày trong tuần cụ thể với nhiều lần mỗi ngày, cần phải có loại lịch trình Hàng tuần. Đây là tùy chọn lịch trình duy nhất cho phép chỉ định từng ngày riêng lẻ (Thứ Hai và Thứ Sáu) và thêm nhiều khoảng thời gian (6 khoảng thời gian, mỗi khoảng 4 giờ). Lịch trình hàng ngày chạy một lần mỗi ngày, Lịch hàng giờ thiếu lựa chọn ngày và Lịch theo phút dành cho tần suất ở mức phút.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-14', 'dp-600', 14, 'You have a Fabric tenant that contains 30 CSV files in OneLake. The files are updated daily.  

You create a Microsoft Power BI semantic model named Model1 that uses the CSV files as a data source. You configure incremental refresh for Model1 and publish the model to a Premium capacity in the Fabric tenant.  

When you initiate a refresh of Model1, the refresh fails after running out of resources.  

What is a possible cause of the failure?', '[{"key":"A","text":"Query folding is occurring."},{"key":"B","text":"Only refresh complete days is selected."},{"key":"C","text":"XMLA Endpoint is set to Read Only."},{"key":"D","text":"Query folding is NOT occurring."},{"key":"E","text":"The delta type of the column used to partition the data has changed."}]'::jsonb, ARRAY['D']::text[], 'Làm mới tăng dần dựa vào việc gấp truy vấn để Power Query có thể đẩy bộ lọc phạm vi ngày trở lại nguồn; các tệp phẳng như CSV thường không hỗ trợ gập, do đó, mọi dữ liệu của phân vùng phải được lấy đầy đủ và xử lý trong bộ nhớ bằng công cụ Power BI. Với 30 tệp được làm mới theo cách này, dung lượng sẽ cạn kiệt tài nguyên bộ nhớ/CPU rất lâu trước khi quá trình làm mới kết thúc, đây là triệu chứng kinh điển của quá trình làm mới gia tăng không gấp.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-15', 'dp-600', 15, 'HOTSPOT  
  
You have a data warehouse containing the following tables:  
  
- DimCustomer  
- DimEmployee  
- DimGeography  
- FactInternetSales  
  
Every table has a primary key and these relationships:  
  
- CustomerKey = FactInternetSales.CustomerKey  
- EmployeeKey = FactInternetSales.EmployeeKey  
- Geography = DimCustomer.GeographyKey  
  
You have a T-SQL query named Query1 that contains the following statements.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784226207388-5wadcf1g.png)  
  
For each statement below, select Yes when the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"Query1 will return multiple rows for a single customer if the customer has placed more than one online sales order.","correctAnswer":"Yes"},{"id":"2","text":"If a customer record in DimCustomer has a GeographyKey value that does NOT exist in DimGeography, the customer’s sales data will still appear in the Query1 results.","correctAnswer":"No"},{"id":"3","text":"Adding the clause GROUP BY g.EnglishCountryRegionName to Query1 will calculate the total sales amount by country.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:Yes', '2:No', '3:No']::text[], 'Mỗi hàng FactInternetSales khớp với một khách hàng sẽ được trả về, do đó, nhiều đơn đặt hàng trực tuyến cho một khách hàng sẽ tạo ra nhiều hàng. Việc tham gia DimGeography là INNER JOIN, do đó, khách hàng có GeographyKey có địa lý phù hợp với no sẽ bị loại trừ. Tổng số quốc gia yêu cầu tổng hợp, chẳng hạn như SUM(f.SalesAmount) và SQL Server cũng yêu cầu các cột đã chọn không được tổng hợp phải được đưa vào danh sách GROUP BY.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784226207388-5wadcf1g.png', 'published'),
  ('dp600-16', 'dp-600', 16, 'You have a Fabric workspace containing a large warehouse.  
  
You plan to create a lakehouse named Lakehouse1 for a sales dataset. Lakehouse1 will contain these tables:  
  
- Sales: Contains sales transactions  
- Stores: Contains a unique list of store names and locations  
- Loyalty: Contains a list of customers and their preferred stores  
- Customers: Contains a unique list of customer names and addresses  
- Products: Contains a unique list of available products and their descriptions  
  
You need to configure a star schema for Lakehouse1.  
  
Which table should be defined as the fact table, and which relationship type should be configured from the Sales table to the Customers table?', '[]'::jsonb, ARRAY[]::text[], 'Bảng sự kiện ghi lại các sự kiện kinh doanh mang tính giao dịch, vì vậy Bán hàng là bảng sự kiện. Khách hàng là một thứ nguyên có một hàng khách hàng duy nhất; nhiều bản ghi Bán hàng có thể tham chiếu một bản ghi Khách hàng, yêu cầu mối quan hệ nhiều-một từ Bán hàng đến Khách hàng.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-17', 'dp-600', 17, 'You have a Fabric tenant that contains a workspace named Workspace1. Workspace1 is assigned to a Fabric capacity.  

You need to recommend a solution to provide users with the ability to create and publish custom Direct Lake semantic models by using external tools. The solution must follow the principle of least privilege.  

Which three actions in the Fabric Admin portal should you include in the recommendation? Each correct answer presents part of the solution.  

NOTE: Each correct answer is worth one point.', '[{"key":"A","text":"From the Tenant settings, set Allow XMLA Endpoints and Analyze in Excel with on-premises datasets to Enabled."},{"key":"B","text":"From the Tenant settings, set Allow Azure Active Directory guest users to access Microsoft Fabric to Enabled."},{"key":"C","text":"From the Tenant settings, select Users can edit data model in the Power BI service."},{"key":"D","text":"From the Capacity settings, set XMLA Endpoint to Read Write."},{"key":"E","text":"From the Tenant settings, set Users can create Fabric items to Enabled."},{"key":"F","text":"From the Tenant settings, enable Publish to Web."}]'::jsonb, ARRAY['A', 'D', 'E']::text[], 'Cần có ba cài đặt để tạo Direct Lake cho công cụ bên ngoài: Bật điểm cuối XMLA ở cấp độ đối tượng thuê (A) để cho phép các công cụ bên ngoài kết nối, đặt Điểm cuối XMLA thành Đọc ghi ở cấp độ dung lượng (D) để cho phép các mô hình xuất bản và kích hoạt Người dùng có thể tạo các mục Fabric ở cấp độ đối tượng thuê (E) để cấp quyền. Quyền truy cập của người dùng khách (B), chỉnh sửa mô hình dịch vụ (C) và Xuất bản lên Web (F) là không cần thiết cho yêu cầu này.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-18', 'dp-600', 18, 'You have the following KQL query.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784206607019-6vqhr3nd.png)  
  
For each statement, select **Yes** if it is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"The query excludes sales that have a Status of Cancelled.","correctAnswer":"Yes"},{"id":"2","text":"The query calculates the total sales of each product category for the last 30 days.","correctAnswer":"Yes"},{"id":"3","text":"The query includes product categories that have had zero sales during the last 30 days.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:Yes', '2:Yes', '3:No']::text[], 'Toán tử `where` đầu tiên loại trừ các bản ghi có `Status == "Cancelled"`. Bộ lọc ngày giới hạn các bản ghi đầu vào trong 30 ngày trước đó và `summarize sum(SalesAmount) by ProductCategory` tính toán tổng danh mục. `where TotalSales > 0` cuối cùng sẽ loại bỏ các danh mục có tổng số được tính bằng 0.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784206607019-6vqhr3nd.png', 'published'),
  ('dp600-19', 'dp-600', 19, 'You have a Fabric tenant named Tenant1 that contains a workspace named WS1. WS1 uses a capacity named C1 and contains a dataset named DS1.  

You need to ensure read-write access to DS1 is available by using XMLA endpoint.  

What should be modified first?', '[{"key":"A","text":"the DS1 settings"},{"key":"B","text":"the WS1 settings"},{"key":"C","text":"the C1 settings"},{"key":"D","text":"the Tenant1 settings"}]'::jsonb, ARRAY['C']::text[], 'Cài đặt Dung lượng chứa tùy chọn cấu hình Điểm cuối XMLA để thay đổi từ chế độ chỉ đọc sang chế độ đọc-ghi. Mặc dù việc hỗ trợ XMLA ở cấp độ đối tượng thuê cũng có thể được yêu cầu làm điều kiện tiên quyết, nhưng cài đặt dung lượng cụ thể là nơi chuyển đổi quyền truy cập đọc-ghi. Cài đặt tập dữ liệu và không gian làm việc không chứa cấu hình điểm cuối XMLA.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-20', 'dp-600', 20, 'You have a semantic model named Model1 that contains data that relates to customers and their bank account balances.  
  
Model1 has the following tables and columns.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783713076063-5lup1f2o.png)  
  
A customer can have one or more accounts. Each account can be associated to multiple customers.  
  
You need to ensure that users can query Model1 to identify the total transaction amounts by customer.  
  
What should you add to Model1?', '[{"key":"A","text":"a many-to-many relationship between FactTransaction and Dim Customer"},{"key":"B","text":"a bridge table with relationships to DimCustomer and DimAccount"},{"key":"C","text":"a bridge table with relationships to FactTransaction and DimCustomer"},{"key":"D","text":"the CustomerKey column in FactTransaction and a relationship to DimCustomer"}]'::jsonb, ARRAY['B']::text[], 'Mối quan hệ nhiều-nhiều giữa khách hàng và tài khoản yêu cầu bảng cầu nối kết nối cả hai bảng thứ nguyên (DimCustomer và DimAccount). Điều này cho phép các hàng FactTransaction được khách hàng tổng hợp chính xác thông qua ánh xạ cầu nối.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783713076063-5lup1f2o.png', 'published'),
  ('dp600-21', 'dp-600', 21, 'You have a Fabric workspace named Workspace1 that contains a data flow named Dataflow1 contains a query that returns the data shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783709960197-qvh8l0xl.png)  
  
You need to transform the data columns into attribute-value pairs, where columns become rows.  

You select the VendorID column.  

Which transformation should you select from the context menu of the VendorID column?', '[{"key":"A","text":"Group by"},{"key":"B","text":"Unpivot columns"},{"key":"C","text":"Unpivot other columns"},{"key":"D","text":"Split column"},{"key":"E","text":"Remove other columns"}]'::jsonb, ARRAY['C']::text[], 'Khi bạn chọn cột VendorID và cần bỏ xoay các cột khác để chuyển đổi chúng thành các cặp thuộc tính-giá trị, bạn sử dụng ''Bỏ xoay các cột khác.'' Phép chuyển đổi này giữ cột đã chọn (VendorID) làm khóa trong khi chuyển đổi tất cả các cột khác thành hàng. ''Bỏ xoay cột'' sẽ chỉ hủy xoay các cột đã chọn, điều này trái ngược với những gì cần thiết.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783709960197-qvh8l0xl.png', 'published'),
  ('dp600-22', 'dp-600', 22, 'You need to create a DAX measure that calculates the average overall satisfaction score.  
  
How should you complete the DAX code?', '[]'::jsonb, ARRAY[]::text[], 'Việc lọc theo câu hỏi Mức độ hài lòng chung sẽ để lại các giá trị phản hồi khảo sát đại diện cho điểm số, do đó AVERAGE tính điểm trung bình được yêu cầu. DATESINPERIOD tạo bảng ngày tháng 12 kết thúc vào ngày đã chọn; chuyển bảng Chu kỳ sang TÍNH TOÁN sẽ áp dụng bộ lọc ngày cuộn đó.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-23', 'dp-600', 23, 'You need to resolve the pricing-group classification issue.  
  
How should you complete the T-SQL statement?', '[]'::jsonb, ARRAY[]::text[], 'Một khung nhìn tập trung vào việc tính toán nhóm giá, có thể được truy vấn thông qua T-SQL và có thể đóng vai trò là nguồn mô hình ngữ nghĩa. CASE đánh giá các dải giá theo thứ tự. Vì điều kiện trước phân loại các giá trị nhỏ hơn hoặc bằng 50 là thấp, nên điều kiện GIỮA cung cấp dải trung bình cho đến 1.000; giá trên 1.000 là cao.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-24', 'dp-600', 24, 'You need to assign permissions for the data store in the AnalyticsPOC workspace. The solution must meet the security requirements.  
  
Which additional permissions should you assign when you share the data store?', '[]'::jsonb, ARRAY[]::text[], 'Đọc tất cả Apache Spark cấp quyền Lakehouse ReadAll cần thiết để truy cập dữ liệu của nó thông qua Spark, hỗ trợ quyền truy cập dữ liệu dựa trên máy tính xách tay của các kỹ sư và nhà khoa học dữ liệu. Xây dựng Báo cáo trên tập dữ liệu mặc định cấp quyền Xây dựng trên mô hình ngữ nghĩa mặc định, cho phép các nhà phân tích dữ liệu tạo báo cáo Power BI. Điểm cuối phân tích SQL ReadData cấp quyền truy cập vào tất cả dữ liệu điểm cuối, trong khi các quyền SQL cấp đối tượng có thể hạn chế các nhà phân tích đối với các đối tượng mô hình thứ nguyên.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-25', 'dp-600', 25, 'You need to design a semantic model for the customer satisfaction report.  
  
Which data-source authentication method and mode should you use?', '[]'::jsonb, ARRAY[]::text[], 'Direct Lake truy cập các bảng Delta trong OneLake mà không cần nhập bản sao dữ liệu riêng và hỗ trợ cập nhật tự động, giảm độ trễ đồng thời mang lại hiệu suất truy vấn cao. SSO sử dụng danh tính của từng người dùng báo cáo khi truy cập vào nguồn dữ liệu Fabric, cho phép thực thi các quyền của nguồn.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-26', 'dp-600', 26, 'You need to implement the date dimension in the data store. The solution must satisfy the technical requirements.  
  
Which two methods can achieve the goal? Each correct answer provides a complete solution.  
  
**NOTE:** Each correct selection is worth one point.', '[{"key":"A","text":"Populate the date dimension table by using a dataflow."},{"key":"B","text":"Populate the date dimension table by using a Copy activity in a pipeline."},{"key":"C","text":"Populate the date dimension view by using T-SQL."},{"key":"D","text":"Populate the date dimension table by using a Stored procedure activity in a pipeline."}]'::jsonb, ARRAY['A', 'D']::text[], 'Dataflow Gen2 có thể tạo truy vấn ngày dạng bảng và tải nó vào bảng Fabric Warehouse. Ngoài ra, một quy trình được lưu trữ có thể tạo hoặc chèn các hàng ngày được yêu cầu và một hoạt động quy trình được lưu trữ trong quy trình có thể chạy quy trình đó. Fabric Warehouse hỗ trợ các bảng có thể ghi và các thủ tục được lưu trữ, trong khi chế độ xem là ảo chứ không phải bảng được điền và Copy activity chỉ di chuyển dữ liệu từ nguồn được định cấu hình.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-27', 'dp-600', 27, 'You need to recommend a solution for preparing the tenant for the PoC.  
  
Which two actions should you recommend performing in the Fabric Admin portal? Each correct answer represents part of the solution.  
  
NOTE: Each correct answer is worth one point.', '[{"key":"A","text":"Enable the Users can try Microsoft Fabric paid features option for the entire organization."},{"key":"B","text":"Enable the Users can try Microsoft Fabric paid features option for specific security groups."},{"key":"C","text":"Enable the Allow Azure Active Directory guest users to access Microsoft Fabric option for specific security groups."},{"key":"D","text":"Enable the Users can create Fabric items option and exclude specific security groups."},{"key":"E","text":"Enable the Users can create Fabric items option for specific security groups."}]'::jsonb, ARRAY['B', 'E']::text[], 'Chỉ có thể bắt đầu khả năng dùng thử Fabric khi **Người dùng có thể dùng thử các tính năng trả phí của Microsoft Fabric** được bật và người dùng cần kích hoạt **Người dùng có thể tạo các mục Fabric** để tạo và làm việc với các mục Fabric. Việc đưa cả hai cài đặt đối tượng thuê vào các nhóm bảo mật thích hợp sẽ giới hạn PoC ở những người dùng được ủy quyền thay vì bật Fabric rộng rãi trên toàn bộ đối tượng thuê.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-28', 'dp-600', 28, 'You need to ensure that the data-loading activities in the AnalyticsPOC workspace run in the required sequence. The solution must satisfy the technical requirements.  
  
What should you do?', '[{"key":"A","text":"Create a dataflow that has multiple steps and schedule the dataflow."},{"key":"B","text":"Create and schedule a Spark notebook."},{"key":"C","text":"Create and schedule a Spark job definition."},{"key":"D","text":"Create a pipeline that has dependencies between activities and schedule the pipeline."}]'::jsonb, ARRAY['D']::text[], 'Đường dẫn dữ liệu Microsoft Fabric điều phối nhiều hoạt động chuyển đổi và di chuyển dữ liệu. Các phần phụ thuộc thành công đảm bảo rằng các bước tải và làm sạch dữ liệu thô hoàn tất trước khi mô hình thứ nguyên được điền và bản thân quy trình có thể được lên lịch để thực hiện định kỳ.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-29', 'dp-600', 29, 'You have a Fabric tenant.  
  
You plan to create a data pipeline named Pipeline1. Pipeline1 will include two activities that will execute in sequence.  
  
You need to ensure that a failure of the first activity will NOT block the second activity.  
  
Which conditional path should you configure between the first activity and the second activity?', '[{"key":"A","text":"Upon Failure"},{"key":"B","text":"Upon Completion"},{"key":"C","text":"Upon Skip"},{"key":"D","text":"Upon Skip"}]'::jsonb, ARRAY['B']::text[], 'Đường dẫn có điều kiện ''Sau khi hoàn thành'' cho phép hoạt động thứ hai thực thi bất kể hoạt động đầu tiên thành công hay thất bại. Đây là lựa chọn chính xác khi bạn cần đảm bảo lỗi không cản trở các hoạt động tiếp theo. ''Khi bị lỗi'' chỉ thực thi nếu hoạt động đầu tiên không thành công, trong khi ''Khi bỏ qua'' áp dụng cho các hoạt động bị bỏ qua chứ không phải lỗi.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-30', 'dp-600', 30, 'You have a Microsoft Power BI semantic model that contains a measure named TotalSalesAmount. TotalSalesAmount returns a sales revenue amount that is translated into a selected currency.  
  
You need to ensure that the value returned by TotalSalesAmount is formatted to use the correct currency symbol.  
  
What should you include in the solution?', '[{"key":"A","text":"a field parameter"},{"key":"B","text":"a linguistic schema"},{"key":"C","text":"a dynamic format string"},{"key":"D","text":"the WINDOW DAX function"}]'::jsonb, ARRAY['C']::text[], 'Chuỗi định dạng động trong Power BI cho phép các thước đo được định dạng có điều kiện dựa trên ngữ cảnh hoặc lựa chọn của người dùng. Tính năng này cho phép một biểu thức đo duy nhất hiển thị các giá trị với các ký hiệu tiền tệ, định dạng số hoặc quy tắc định dạng khác dựa trên ngữ cảnh đánh giá. Đây là cách tiếp cận tiêu chuẩn cho định dạng đa tiền tệ hoặc theo ngữ cảnh trong các mô hình ngữ nghĩa.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-31', 'dp-600', 31, 'You have a Fabric tenant.  
  
You need to create a semantic model that provides fast report rendering, minimizes query latency, and maximizes flexibility for DAX calculations.  
  
Which storage mode should you choose?', '[{"key":"A","text":"Import"},{"key":"B","text":"Direct Lake"},{"key":"C","text":"Composite Mode"},{"key":"D","text":"DirectQuery"}]'::jsonb, ARRAY['B']::text[], 'Direct Lake tải dữ liệu trực tiếp từ các bảng Delta OneLake và xử lý các truy vấn DAX bằng công cụ VertiPaq, mang lại hiệu suất báo cáo tương tác giống như Nhập mà không có độ trễ truy vấn nguồn của DirectQuery. Đây là chế độ lưu trữ Fabric dành cho truy vấn mô hình ngữ nghĩa nhanh, độ trễ thấp.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-32', 'dp-600', 32, 'You have a Fabric tenant that contains a lakehouse named Lakehouse1. Lakehouse1 contains a Delta table that has one million Parquet files.  
  
You need to remove files that were NOT referenced by the table during the past 30 days. The solution must ensure that the transaction log remains consistent, and the ACID properties of the table are maintained.  
  
What should you do?', '[{"key":"A","text":"From OneLake file explorer, delete the files."},{"key":"B","text":"Run the OPTIMIZE command and specify the Z-order parameter."},{"key":"C","text":"Run the OPTIMIZE command and specify the V-order parameter."},{"key":"D","text":"Run the VACUUM command."}]'::jsonb, ARRAY['D']::text[], 'Lệnh VACUUM là thao tác chính xác để loại bỏ các tệp Parquet không được tham chiếu khỏi bảng Delta trong khi vẫn duy trì tính nhất quán của nhật ký giao dịch và các thuộc tính ACID. Nó xóa các tệp no còn được bảng tham chiếu một cách an toàn mà không ảnh hưởng đến tính toàn vẹn dữ liệu. Việc xóa trình khám phá tệp sẽ bỏ qua các bước kiểm tra an toàn và TỐI ƯU HÓA với thứ tự Z hoặc thứ tự V được sử dụng để điều chỉnh hiệu suất chứ không phải để dọn dẹp tệp.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-33', 'dp-600', 33, 'You have a semantic model named Model1. Model1 contains five tables that all use Import mode. Model1 contains a dynamic row-level security (RLS) role named HR. The HR role filters employee data so that HR managers only see the data of the department to which they are assigned.  
  
You publish Model1 to a Fabric tenant and configure RLS role membership. You share the model and related reports to users.  
  
An HR manager reports that the data they see in a report is incomplete.  
  
What should you do to validate the data seen by the HR Manager?', '[{"key":"A","text":"Select Test as role to view the data as the HR role."},{"key":"B","text":"Filter the data in the report to match the intended logic of the filter for the HR department."},{"key":"C","text":"Select Test as role to view the report as the HR manager."},{"key":"D","text":"Ask the HR manager to open the report in Microsoft Power BI Desktop."}]'::jsonb, ARRAY['C']::text[], 'Vì vai trò RLS là động nên nó lọc dữ liệu bằng cách sử dụng danh tính của người dùng đã đăng nhập (thông qua tra cứu USERPRINCIPALNAME()), không chỉ là tư cách thành viên của vai trò, nên việc chỉ kích hoạt vai trò nhân sự một cách riêng biệt sẽ không tái tạo những gì một người quản lý cụ thể nhìn thấy. Việc xác thực sự cố yêu cầu sử dụng "Kiểm tra với vai trò" cùng với việc nhập người dùng/UPN của chính người quản lý nhân sự đó, xem báo cáo một cách hiệu quả với tư cách là người cụ thể đó để logic bộ lọc động được đánh giá chính xác như đối với phiên thực sự của họ.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-34', 'dp-600', 34, 'You have a Fabric tenant containing a workspace named Workspace1. Workspace1 uses Pro license mode and includes a semantic model named Model1.  
  
You also have an Azure DevOps organization.  
  
You need to enable version control for Workspace1 while ensuring that Model1 is added to the repository.  
  
Which three actions should you perform, in order?', '{"statements":[{"id":"slot1","text":"Slot 1:","correctAnswer":"E"},{"id":"slot2","text":"Slot 2:","correctAnswer":"A"},{"id":"slot3","text":"Slot 3:","correctAnswer":"B"}],"choices":[{"key":"A","text":"Connect Workspace1 to a Git provider."},{"key":"B","text":"Sync Workspace1 with the repository."},{"key":"C","text":"Configure branch policies in Azure DevOps."},{"key":"D","text":"Create a deployment pipeline."},{"key":"E","text":"Assign Workspace1 to a Fabric capacity."}]}'::jsonb, ARRAY['slot1=E', 'slot2=A', 'slot3=B']::text[], 'Việc chỉ định không gian làm việc cho dung lượng Fabric sẽ kích hoạt các khả năng cần thiết của không gian làm việc Fabric. Sau khi quản trị viên kết nối không gian làm việc với kho lưu trữ Azure DevOps, quá trình đồng bộ hóa sẽ xuất nội dung không gian làm việc được hỗ trợ sang Git; do đó, Model1 được thêm vào kho lưu trữ. Quy trình triển khai và chính sách chi nhánh Azure DevOps là các tính năng quản trị phát hành riêng biệt, không phải là điều kiện tiên quyết để kiểm soát nguồn.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-35', 'dp-600', 35, 'You have a Fabric tenant that contains two workspaces named Workspace1 and Workspace2. Workspace1 contains a lakehouse named Lakehouse1. Workspace2 contains a lakehouse named Lakehouse2. Lakehouse1 contains a table named dbo.Sales. Lakehouse2 contains a table named dbo.Customers.  
  
You need to ensure that you can write queries that reference both dbo.Sales and dbo.Customers in the same SQL query without making additional copies of the tables.  
  
What should you use?', '[{"key":"A","text":"a shortcut"},{"key":"B","text":"a dataflow"},{"key":"C","text":"a view"},{"key":"D","text":"a managed table"}]'::jsonb, ARRAY['A']::text[], 'Các phím tắt là tính năng được xây dựng có mục đích của Fabric để truy cập dữ liệu trên nhiều không gian làm việc và giữa nhiều lakehouse mà không cần sao chép bảng. Chúng tạo các tham chiếu ảo tới dữ liệu trong các không gian làm việc khác nhau, cho phép bạn viết một truy vấn SQL duy nhất tham chiếu các bảng từ nhiều kho dữ liệu. Tất cả các luồng dữ liệu, dạng xem và bảng được quản lý đều yêu cầu bản sao dữ liệu thực tế hoặc các cách giải quyết phức tạp.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-36', 'dp-600', 36, 'You have a Fabric tenant that contains a workspace named Workspace1.  
  
You plan to deploy a semantic model named Model1 by using the XMLA endpoint.  
  
You need to optimize the deployment of Model1. The solution must minimize how long it takes to deploy Model1.  
  
What should you do in Workspace1?', '[{"key":"A","text":"Select Small semantic model storage format."},{"key":"B","text":"Select Users can edit data models in the Power BI service."},{"key":"C","text":"Set Enable Cache for Shortcuts to On."},{"key":"D","text":"Select Large semantic model storage format."}]'::jsonb, ARRAY['D']::text[], 'Tài liệu của Microsoft nêu rõ rằng việc bật định dạng lưu trữ mô hình ngữ nghĩa lớn sẽ cải thiện hiệu suất hoạt động ghi XMLA. Định dạng này bao gồm khả năng nén cao hơn và tối ưu hóa được thiết kế đặc biệt để nâng cao hiệu suất cho các hoạt động ghi nặng như triển khai điểm cuối XMLA. Định dạng nhỏ hoặc các cài đặt khác không mang lại lợi ích tối ưu hóa việc ghi này.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-37', 'dp-600', 37, 'You have a Fabric workspace that contains a DirectQuery semantic model. The model queries a data source that has 500 million rows.  

You have a Microsoft Power Bi report named Report1 that uses the model. Report1 contains visuals on multiple pages.  

You need to reduce the query execution time for the visuals on all the pages.  

What are two features that you can use? Each correct answer presents a complete solution,  

NOTE: Each correct answer is worth one point.', '[{"key":"A","text":"user-defined aggregations"},{"key":"B","text":"automatic aggregation"},{"key":"C","text":"query caching"},{"key":"D","text":"OneLake integration"}]'::jsonb, ARRAY['A', 'B']::text[], 'Các tập hợp do người dùng xác định và các tập hợp tự động đều là dữ liệu tổng hợp trước để giảm số lượt quét truy vấn trên 500 triệu hàng. Bộ nhớ đệm truy vấn không hoạt động với chế độ DirectQuery (nó chỉ áp dụng cho dữ liệu đã nhập khi tải trang đầu tiên). Tích hợp OneLake không phải là cách tối ưu hóa hiệu suất cho thời gian thực hiện truy vấn trên các nguồn dữ liệu bên ngoài. Cả A và B đều là giải pháp kiến ​​trúc hợp lệ để giảm thời gian thực hiện.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-38', 'dp-600', 38, 'You have a Fabric lakehouse named Lakehouse1.  
  
You have the data sources shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784213065700-x65gp379.png)  
  
You need to ingest data from both data sources into Lakehouse1 while minimizing maintenance and development time.  
  
What should you use to ingest the data from each source?  
  
An option may be used once, more than once, or not at all.', '{"statements":[{"id":"datasource1","text":"Datasource1:","correctAnswer":"D"},{"id":"datasource2","text":"Datasource2:","correctAnswer":"E"}],"choices":[{"key":"A","text":"A Dataflow Gen1"},{"key":"B","text":"A Dataflow Gen2"},{"key":"C","text":"A notebook"},{"key":"D","text":"A pipeline with a Copy activity"},{"key":"E","text":"An eventstream"}]}'::jsonb, ARRAY['datasource1=D', 'datasource2=E']::text[], 'Một quy trình có Copy activity hỗ trợ Azure SQL Managed Instance làm nguồn và sử dụng bản sao song song được phân vùng tích hợp sẵn, giúp nó phù hợp với tải lớn hàng ngày. CDC giảm thiểu dữ liệu được sao chép để thay đổi; Đầu nối Azure SQL Managed Instance của Fabric hỗ trợ các khả năng Copy activity và CDC. Luồng sự kiện là lựa chọn gốc Fabric cho dữ liệu Azure Event Hubs thời gian thực và có thể ghi luồng sự kiện vào các bảng Delta Lakehouse.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784213065700-x65gp379.png', 'published'),
  ('dp600-39', 'dp-600', 39, 'You are building a solution by using a Fabric notebook.  
  
You have a Spark DataFrame assigned to a variable named `df`. The DataFrame returns four columns.  
  
You need to convert the data type of a string column named `Age` to integer. The solution must return a DataFrame that includes all columns.  
  
How should you complete the code? Each value can be used once, more than once, or not at all.', '{"statements":[{"id":"method","text":"Slot 1:","correctAnswer":"G"},{"id":"column","text":"Slot 2:","correctAnswer":"B"},{"id":"conversion","text":"Slot 3:","correctAnswer":"A"}],"choices":[{"key":"A","text":"cast"},{"key":"B","text":"col"},{"key":"C","text":"get"},{"key":"D","text":"select"},{"key":"E","text":"selectExpr"},{"key":"F","text":"transform"},{"key":"G","text":"withColumn"}]}'::jsonb, ARRAY['method=G', 'column=B', 'conversion=A']::text[], '`withColumn` thêm một cột mới hoặc thay thế cột hiện có trong khi vẫn giữ lại các cột khác. `col("age")` tham chiếu cột hiện có và `cast("int")` thay đổi kiểu dữ liệu của nó thành số nguyên.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-40', 'dp-600', 40, 'You have a Fabric tenant containing a semantic model with data about retail stores.  
  
You need to write a DAX query that will run through the XMLA endpoint. The query must return the total sales amount for the same period last year.  
  
How should you complete the DAX expression?', '[]'::jsonb, ARRAY[]::text[], 'TÍNH TOÁN sửa đổi ngữ cảnh bộ lọc của [Tổng doanh số] bằng cách sử dụng SAMEPERIODLASTYEAR, trả về ngày được dịch chuyển về một năm. _LYSales là vô hướng; ĐÁNH GIÁ yêu cầu biểu thức bảng và {_LYSales} là hàm tạo bảng một hàng chứa đại lượng vô hướng đó.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-41', 'dp-600', 41, 'You have a Fabric workspace named Workspace1 that contains a lakehouse named Lakehouse1. Lakehouse1 contains a table named Table1. Table1 contains the following data.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783711380492-giytac6d.png)  
  
You need to perform the following actions:  
  
• Load the data from Table1 into a star schema.  

• Create a product dimension table named DimProduct and a fact table named FactSales.  
  
Which three columns should you include in DimProduct?', '[{"key":"A","text":"ProductColor, ProductID, and ProductName."},{"key":"B","text":"ProductName, SalesAmount, and TransactionlD."},{"key":"C","text":"Date, ProductID, and TransactionlD."},{"key":"D","text":"ProductID, ProductName, and SalesAmount"}]'::jsonb, ARRAY['A']::text[], 'Trong lược đồ hình sao, bảng thứ nguyên chứa các thuộc tính và đặc điểm mô tả của thực thể nghiệp vụ. ProductColor, ProductID và ProductName đều là các thuộc tính vốn có của sản phẩm. Số lượng bán hàng và Ngày thường được giữ trong các bảng thực tế dưới dạng số đo và thứ nguyên thời gian tương ứng, không phải trong thứ nguyên sản phẩm.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783711380492-giytac6d.png', 'published'),
  ('dp600-42', 'dp-600', 42, 'You have a Fabric tenant that includes a PySpark notebook named Notebook1.  
  
You define `sas_token` as a variable in the first cell of Notebook1 and store a shared access signature (SAS) token in it. In the second cell, you run the following code.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784206725797-bbj3odfv.png)  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"customers is a pandas DataFrame.","correctAnswer":"No"},{"id":"2","text":"If a delta table named Customers does NOT exist, an error will be generated.","correctAnswer":"No"},{"id":"3","text":"The source data is located in the customers folder in a container named contacts.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:No', '2:No', '3:Yes']::text[], '`spark.read.parquet` trả về Khung dữ liệu PySpark. `saveAsTable` ở chế độ ghi đè sẽ tạo một bảng bị thiếu và ghi đè lên bảng hiện có. Trong địa chỉ Azure Blob Storage, `contacts` xác định vùng chứa và `customers` là đường dẫn bên trong nó.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784206725797-bbj3odfv.png', 'published'),
  ('dp600-43', 'dp-600', 43, 'You have a query in Microsoft Power BI Desktop that contains two columns named Order_Date and Shipping_Date.  
  
You need to create a column that will calculate the number of days between Order_Date and Shipping_Date for each row.  
  
Which Power Query function should you use?', '[{"key":"A","text":"DateTime.LocalNow"},{"key":"B","text":"Duration.Days"},{"key":"C","text":"Duration.From"},{"key":"D","text":"Date.AddDays"}]'::jsonb, ARRAY['B']::text[], 'Trong Power Query, Duration.Days() trích xuất số ngày từ giá trị thời lượng. Để tính số ngày giữa hai cột ngày, hãy trừ chúng (tạo ra khoảng thời gian), sau đó chuyển kết quả cho Duration.Days(). Mẫu là: Duration.Days([Ngày_vận_chuyển] - [Ngày_đặt_hàng]). Các hàm khác xử lý số học ngày hoặc thời gian hệ thống nhưng không trích xuất số ngày từ khoảng thời gian.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-44', 'dp-600', 44, 'You have a Fabric tenant that contains a semantic model named Model1.  
  
Model1 includes the following tables.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784226204449-arjeo5fx.png)  
  
Product and Store can participate in multiple campaigns, and multiple campaigns can be active simultaneously.  
  
You plan to create a report named Report1 that displays sales made after a campaign for a given store.  
  
You need to add a table to Model1 and configure the cardinality for the table''s relationships.  
  
What should you configure?', '[]'::jsonb, ARRAY[]::text[], 'Chiến dịch là một bảng bắc cầu (sự thật không có thực tế) vì nó lưu trữ các mối liên kết giữa Sản phẩm và Cửa hàng cho các chiến dịch. Mỗi hàng Sản phẩm hoặc Cửa hàng có thể liên quan đến nhiều hàng Chiến dịch, do đó, cầu nối sử dụng mối quan hệ một-nhiều từ Sản phẩm và Cửa hàng thay vì mối quan hệ trực tiếp nhiều-nhiều.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784226204449-arjeo5fx.png', 'published'),
  ('dp600-45', 'dp-600', 45, 'You have a Microsoft Power BI semantic model.  
  
You need to find any surrogate-key columns in the model for which the **Summarize By** property is set to a value other than **None**. The solution must minimize effort.  
  
What should you use?', '[{"key":"A","text":"Performance Analyzer in Power BI Desktop"},{"key":"B","text":"Model explorer in Microsoft Power BI Desktop"},{"key":"C","text":"Model view in Microsoft Power BI Desktop"},{"key":"D","text":"DAX Formatter in DAX Studio"}]'::jsonb, ARRAY['B']::text[], '**Tóm tắt theo** là thuộc tính cột kiểm soát tập hợp mặc định được khách hàng báo cáo sử dụng. Trình khám phá mô hình trình bày các mục mô hình ngữ nghĩa theo một hệ thống phân cấp có thể tìm kiếm duy nhất, cho phép tìm thấy các cột và các thuộc tính của chúng được xem xét một cách hiệu quả trên một mô hình phức tạp. [Microsoft Learn: Work with Model explorer](https://learn.microsoft.com/en-us/power-bi/transform-model/model-explorer) [Microsoft Learn: Column properties](https://learn.microsoft.com/en-us/analysis-services/tabular-models/column-properties-ssas-tabular?view=sql-analysis-services-2025)', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-46', 'dp-600', 46, 'You have a Fabric tenant that contains a warehouse.  

You use a dataflow to load a new dataset from OneLake to the warehouse.  

You need to add a PowerQuery step to identify the maximum values for the numeric columns.  

Which function should you include in the step?', '[{"key":"A","text":"Table.MaxN"},{"key":"B","text":"Table.Max"},{"key":"C","text":"Table.Range"},{"key":"D","text":"Table.Profile"}]'::jsonb, ARRAY['D']::text[], 'Table.Profile tạo các bản tóm tắt thống kê (tối thiểu, tối đa, trung bình, số lượng, độ lệch chuẩn) cho tất cả các cột trong một thao tác, khiến nó trở nên lý tưởng để xác định các giá trị tối đa trên nhiều cột số cùng một lúc. Table.Max hoạt động trên các cột riêng lẻ và trả về một hàng duy nhất. Table.Range chọn phạm vi hàng và Table.MaxN truy xuất các hàng trên cùng—không cung cấp số liệu thống kê tổng hợp cần thiết.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-47', 'dp-600', 47, 'You need to ensure that Contoso can use version control to satisfy the data analytics requirements and the general requirements.  
  
What should you do?', '[{"key":"A","text":"Store at the semantic models and reports in Data Lake Gen2 storage."},{"key":"B","text":"Modify the settings of the Research workspaces to use a GitHub repository."},{"key":"C","text":"Modify the settings of the Research division workspaces to use an Azure Repos repository."},{"key":"D","text":"Store all the semantic models and reports in Microsoft OneDrive."}]'::jsonb, ARRAY['C']::text[], 'Tích hợp Microsoft Fabric Git kết nối không gian làm việc với kho lưu trữ Azure Repos để các mục không gian làm việc, bao gồm các mô hình và báo cáo ngữ nghĩa, có thể được tạo phiên bản và quản lý thông qua các nhánh Git. Do đó, việc định cấu hình không gian làm việc của bộ phận Nghiên cứu để sử dụng Azure Repos sẽ cung cấp khả năng kiểm soát phiên bản dựa trên phân nhánh cần thiết với nỗ lực quản trị thấp.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-48', 'dp-600', 48, 'You need to refresh the Online Sales department''s **Orders** table. The solution must satisfy the semantic model requirements.  
  
What should you include in the solution?', '[{"key":"A","text":"an Azure Data Factory pipeline that executes a Stored procedure activity to retrieve the maximum value of the OrderID column in the destination lakehouse"},{"key":"B","text":"an Azure Data Factory pipeline that executes a Stored procedure activity to retrieve the minimum value of the OrderID column in the destination lakehouse"},{"key":"C","text":"an Azure Data Factory pipeline that executes a dataflow to retrieve the minimum value of the OrderID column in the destination lakehouse"},{"key":"D","text":"an Azure Data Factory pipeline that executes a dataflow to retrieve the maximum value of the OrderID column in the destination lakehouse"}]'::jsonb, ARRAY['D']::text[], 'Vì `OrderID` phản ánh trình tự tạo đơn hàng nên `OrderID` tối đa đã có ở đích là mốc nước cao thích hợp cho tải tăng dần. Việc sử dụng giá trị đó cho phép quá trình làm mới chỉ truy xuất các đơn hàng mới được tạo, giảm thiểu các hàng được thêm vào trong quá trình làm mới. Hướng dẫn tải tăng dần của Microsoft sử dụng giá trị hình mờ tối đa để xác định ranh giới mới và hoạt động Luồng dữ liệu có thể chạy luồng dữ liệu từ một đường dẫn.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-49', 'dp-600', 49, 'You need to recommend a solution for grouping the Research division workspaces.  
  
What should the recommendation include?', '[]'::jsonb, ARRAY[]::text[], 'Miền Fabric nhóm một cách hợp lý các không gian làm việc và dữ liệu có liên quan theo khu vực tổ chức, chẳng hạn như bộ phận và hỗ trợ lọc trong trung tâm dữ liệu OneLake. Quản trị viên Fabric tạo và quản lý miền trong cổng quản trị Fabric.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-50', 'dp-600', 50, 'You need to migrate the Research division data for Productline1 while meeting the data-preparation requirements.  
  
Complete the code.', '[]'::jsonb, ARRAY[]::text[], 'Productline1 được lưu trữ dưới dạng dữ liệu Delta, do đó người đọc phải sử dụng định dạng Delta. Fabric Lakehouse Explorer nhận dạng các bảng Delta được quản lý trong khu vực `Tables` cấp cao nhất; việc lưu đầu ra Delta vào `Tables/productline1` sẽ làm cho nó có sẵn ở đó dưới dạng bảng Productline1.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-52', 'dp-600', 52, 'You need to migrate the Research division data for Productline2. The solution must meet the data-preparation requirements.  
  
How should you complete the code?', '[]'::jsonb, ARRAY[]::text[], 'Bảng được quản lý Fabric lakehouse là bảng Delta được lưu trữ trong khu vực Bảng của nó. Việc ghi DataFrame có nguồn gốc từ CSV ở định dạng Delta vào `Tables/productline2` sẽ làm cho nó có sẵn dưới dạng bảng được quản lý trong Lakehouse explorer.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-53', 'dp-600', 53, 'You have a Fabric notebook that has the Python code and output shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783710377663-v2ew0kg7.png)  
  
Which type of analytics are you performing?', '[{"key":"A","text":"descriptive"},{"key":"B","text":"diagnostic"},{"key":"C","text":"prescriptive"},{"key":"D","text":"predictive"}]'::jsonb, ARRAY['A']::text[], 'Phân tích mô tả trả lời câu hỏi ''Chuyện gì đang xảy ra?'' bằng cách sử dụng số liệu thống kê tóm tắt, tổng hợp và trực quan hóa để mô tả dữ liệu hiện tại hoặc lịch sử. Dựa trên sự đồng thuận nhất trí và bản chất của đầu ra phân tích Python điển hình được hiển thị trong các câu hỏi như vậy, mã có thể hiển thị số liệu thống kê tóm tắt hoặc phân tích phân phối điển hình của phân tích mô tả.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783710377663-v2ew0kg7.png', 'published'),
  ('dp600-54', 'dp-600', 54, 'You need to create a Microsoft Power BI file that will be used to create multiple reports. The solution must meet the following requirements:  
  
• The file must include predefined data source connections.  

• The file must include the report structure and formatting.  

• The file must NOT contain any data.  
  
Which file format should you use?', '[{"key":"A","text":"PBIT"},{"key":"B","text":"PBIDS"},{"key":"C","text":"PBIX"},{"key":"D","text":"PBIP"}]'::jsonb, ARRAY['A']::text[], 'Tệp PBIT (Mẫu Power BI) được thiết kế riêng cho trường hợp sử dụng này: nó bao gồm các kết nối nguồn dữ liệu được xác định trước, cấu trúc báo cáo, định dạng và bố cục trực quan nhưng chứa dữ liệu thực tế no. PBIX bao gồm dữ liệu (báo cáo đầy đủ), PBIDS là tệp định nghĩa nguồn dữ liệu và PBIP là định dạng dự án. PBIT là định dạng mẫu chuẩn để chia sẻ cấu trúc báo cáo có thể sử dụng lại.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-55', 'dp-600', 55, 'You have a Fabric tenant that contains customer churn data stored as Parquet files in OneLake. The data contains details about customer demographics and product usage.  
  
You create a Fabric notebook to read the data into a Spark DataFrame. You then create column charts in the notebook that show the distribution of retained customers as compared to lost customers based on geography, the number of products purchased, age, and customer tenure.  
  
Which type of analytics are you performing?', '[{"key":"A","text":"diagnostic"},{"key":"B","text":"descriptive"},{"key":"C","text":"prescriptive"},{"key":"D","text":"predictive"}]'::jsonb, ARRAY['B']::text[], 'Phân tích mô tả mô tả dữ liệu lịch sử thông qua các con số và hình ảnh trực quan mà không giải thích nguyên nhân hoặc đưa ra dự đoán. Việc tạo biểu đồ hiển thị sự phân bổ khách hàng được giữ lại và khách hàng bị mất theo địa lý, số lần mua sản phẩm, độ tuổi và nhiệm kỳ là mô tả những gì đã xảy ra trong quá khứ. Phân tích chẩn đoán sẽ giải thích lý do xảy ra hiện tượng gián đoạn; dự đoán sẽ dự báo kết quả trong tương lai; quy định sẽ khuyến nghị hành động. Kịch bản này hoàn toàn mang tính mô tả.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-56', 'dp-600', 56, 'You have a Fabric tenant that contains a workspace named Workspace1 and a user named User1. User1 is assigned the Contributor role for Workspace1.  
  
You plan to configure Workspace1 to use an Azure DevOps repository for version control.  
  
You need to ensure that User1 can commit items to the repository.  
  
Which two settings should you enable for User1? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Users can sync workspace items with GitHub repositories"},{"key":"B","text":"Users can create and use Data workflows"},{"key":"C","text":"Users can create Fabric items"},{"key":"D","text":"Users can synchronize workspace items with their Git repositories"}]'::jsonb, ARRAY['C', 'D']::text[], 'Để cam kết các mục vào kho lưu trữ Azure DevOps, Người dùng1 phải có cả: (C) quyền tạo các mục Fabric—các đối tượng được cam kết—và (D) quyền đồng bộ hóa các mục trong không gian làm việc với kho Git—cho phép đồng bộ hóa và quy trình làm việc cam kết. Option A đề cập cụ thể đến GitHub, không phải Azure DevOps và B liên quan đến quy trình làm việc dữ liệu chứ không phải kiểm soát phiên bản.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-57', 'dp-600', 57, 'You have a Fabric tenant containing a semantic model with retail-store data. You need to write a DAX query to run by using the XMLA endpoint. The query must return stores that opened since December 1, 2023. Complete the DAX expression. Values may be used once, more than once, or not at all.', '{"statements":[{"id":"blank1","text":"Slot 1:","correctAnswer":"A"},{"id":"blank2","text":"Slot 2:","correctAnswer":"B"},{"id":"blank3","text":"Slot 3:","correctAnswer":"D"}],"choices":[{"key":"A","text":"DEFINE"},{"key":"B","text":"EVALUATE"},{"key":"C","text":"FILTER"},{"key":"D","text":"SUMMARIZE"},{"key":"E","text":"TABLE"}]}'::jsonb, ARRAY['blank1=A', 'blank2=B', 'blank3=D']::text[], 'Truy vấn DAX sử dụng DEFINE cho các định nghĩa trong phạm vi truy vấn và EVALUATE để trả về biểu thức bảng. TÓM TẮT xây dựng bảng cửa hàng được chỉ định, sau đó LỌC sẽ giới hạn ở các cửa hàng có Ngày mở vào hoặc sau ngày 1 tháng 12 năm 2023.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-58', 'dp-600', 58, 'You have a Fabric tenant that contains two workspaces named Workspace1 and Workspace2 and a user named User1.  
  
You need to ensure that User1 can perform the following tasks:  
  
• Create a new domain.  

• Create two subdomains named subdomain1 and subdomain2.  

• Assign Workspace1 to subdomain1.  

• Assign Workspace2 to subdomain2.  
  
The solution must follow the principle of least privilege.  
  
Which role should you assign to User1?', '[{"key":"A","text":"domain admin"},{"key":"B","text":"domain contributor"},{"key":"C","text":"Fabric admin"},{"key":"D","text":"workspace Admin"}]'::jsonb, ARRAY['C']::text[], 'Tạo miền mới trong Microsoft Fabric yêu cầu vai trò quản trị viên Fabric, có quyền cấp độ đối tượng thuê. Mặc dù quản trị viên miền có thể quản lý các miền hiện có nhưng chỉ quản trị viên Fabric mới có thể tạo miền mới ở cấp độ đối tượng thuê. Mặc dù điều này cấp các đặc quyền rộng hơn mức cần thiết lý tưởng theo nguyên tắc đặc quyền tối thiểu, nhưng đó là khả năng tiên quyết cho yêu cầu tạo miền.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-59', 'dp-600', 59, 'You have a Fabric workspace named Workspace1 and a warehouse named Warehouse1. Workspace1 includes a user named User1. User1 has the Viewer role for Workspace1.  
  
You need to ensure that User1 can share Warehouse1 with other users. The solution must adhere to the principle of least privilege.  
  
Which role should be assigned to User1?', '[{"key":"A","text":"Member for Workspace1"},{"key":"B","text":"db_owner for Warehouse1"},{"key":"C","text":"Contributor for Workspace1"},{"key":"D","text":"Admin for Workspace1"}]'::jsonb, ARRAY['A']::text[], 'Microsoft Fabric yêu cầu người dùng giữ vai trò không gian làm việc của Quản trị viên hoặc Thành viên để chia sẻ mục Warehouse. Thành viên có thể chia sẻ nội dung không gian làm việc, trong khi Cộng tác viên có thể sửa đổi nội dung nhưng không thể chia sẻ nội dung đó; Do đó, thành viên là vai trò có ít đặc quyền nhất đáp ứng được yêu cầu.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-60', 'dp-600', 60, 'You have a Fabric tenant that contains a semantic model.  

You need to prevent report creators from populating visuals by using implicit measures.  

What are two tools that you can use to achieve the goal? Each correct answer presents a complete solution.  

NOTE: Each correct answer is worth one point.', '[{"key":"A","text":"Microsoft Power BI Desktop"},{"key":"B","text":"Tabular Editor"},{"key":"C","text":"Microsoft SQL Server Management Studio (SSMS)"},{"key":"D","text":"DAX Studio"}]'::jsonb, ARRAY['A', 'B']::text[], 'Cả Microsoft Power BI Desktop và Tabular Editor đều có thể được sử dụng để vô hiệu hóa các biện pháp ngầm bằng cách chuyển đổi thuộc tính ''DiscourageImplicitMeasures'' trên mô hình ngữ nghĩa. Cài đặt này ngăn người tạo báo cáo sử dụng các biện pháp ngầm trong hình ảnh, thay vào đó yêu cầu họ sử dụng các biện pháp được xác định rõ ràng. SQL Server Management Studio và DAX Studio không cung cấp khả năng chỉnh sửa mô hình cho mục đích này.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-61', 'dp-600', 61, 'You have a Fabric warehouse containing a table named `Sales.Orders`. `Sales.Orders` contains the following columns.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784205245088-uly4gi5j.png)  
  
You must write a T-SQL query that returns the following columns.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784205247375-hfw8yc3t.png)  
  
How should you complete the code?', '[]'::jsonb, ARRAY[]::text[], '`COALESCE(Weight, Quantity, 1)` trả về giá trị không NULL đầu tiên theo thứ tự đó. `LEAST(ListPrice, SalePrice)` trả về giá không phải NULL thấp hơn; do đó, khi `SalePrice` là NULL, nó trả về `ListPrice`.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784205245088-uly4gi5j.png', 'published'),
  ('dp600-62', 'dp-600', 62, 'You have a Microsoft Power BI semantic model.  
  
You need to identify any surrogate key columns in the model that have the Summarize By property set to a value other than to None. The solution must minimize effort.  
  
What should you use?', '[{"key":"A","text":"DAX Formatter in DAX Studio"},{"key":"B","text":"Model explorer in Microsoft Power BI Desktop"},{"key":"C","text":"Model view in Microsoft Power BI Desktop"},{"key":"D","text":"Best Practice Analyzer in Tabular Editor"}]'::jsonb, ARRAY['D']::text[], 'Trình phân tích thực hành tốt nhất (BPA) trong Trình soạn thảo dạng bảng là công cụ hiệu quả nhất để xác định các cột khóa thay thế có thuộc tính Tóm tắt theo không chính xác trên toàn bộ mô hình ngữ nghĩa. BPA có thể tự động quét mô hình và gắn cờ các vấn đề về cấu hình, giảm thiểu nỗ lực thủ công so với việc kiểm tra các cột theo cách thủ công trong chế độ xem Model hoặc Model Explorer.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-63', 'dp-600', 63, 'You have a Fabric tenant that contains a warehouse.  

A user discovers that a report that usually takes two minutes to render has been running for 45 minutes and has still not rendered.  

You need to identify what is preventing the report query from completing.  

Which dynamic management view (DMV) should you use?', '[{"key":"A","text":"sys.dm_exec_requests"},{"key":"B","text":"sys.dm_exec_sessions"},{"key":"C","text":"sys.dm_exec_connections"},{"key":"D","text":"sys.dm_pdw_exec_requests"}]'::jsonb, ARRAY['A']::text[], 'Hướng dẫn giám sát của Fabric Warehouse hướng đến sys.dm_exec_requests DMV tương thích với SQL Server tiêu chuẩn để kiểm tra các yêu cầu hiện đang thực thi, trạng thái của chúng, loại chờ và thông tin chặn. Đây là những gì bạn cần tìm hiểu lý do tại sao một truy vấn bị kẹt trong 45 phút. sys.dm_pdw_exec_requests dành riêng cho kiến ​​trúc nút tính toán/điều khiển MPP của nhóm SQL chuyên dụng Azure Synapse Analytics và không phải là DMV hiển thị để giám sát Fabric Warehouse.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-64', 'dp-600', 64, 'You have a Fabric tenant that contains a lakehouse named LH1.  
  
You create new tables in LH1.  
  
You need to ensure that the tables are added automatically to the default semantic model.  
  
What should you do?', '[{"key":"A","text":"Disable Query Caching for the default semantic model."},{"key":"B","text":"From the settings pane of LH1, enable Sync the default Power BI semantic model."},{"key":"C","text":"Enable Refresh for the default semantic model."},{"key":"D","text":"From the Endorsement and discovery settings of LH1, select Make discoverable."}]'::jsonb, ARRAY['B']::text[], 'Cài đặt ''Đồng bộ hóa mô hình ngữ nghĩa Power BI mặc định'' trong ngăn cài đặt lakehouse cho phép tự động thêm các bảng mới vào mô hình ngữ nghĩa mặc định. Việc tắt Bộ nhớ đệm truy vấn không thêm bảng vào mô hình; bật Làm mới duy trì các kết nối hiện có nhưng không tự động thêm bảng mới; cài đặt có thể khám phá sẽ kiểm soát khả năng hiển thị mục nhưng không kiểm soát việc đồng bộ hóa mô hình ngữ nghĩa. B là cài đặt chính xác để bật đồng bộ hóa tự động.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-65', 'dp-600', 65, 'You need to create a data loading pattern for a Type 1 slowly changing dimension (SCD).  

Which two actions should you include in the process? Each correct answer presents part of the solution.  

NOTE: Each correct answer is worth one point.', '[{"key":"A","text":"Update rows when the non-key attributes have changed."},{"key":"B","text":"Insert new rows when the natural key exists in the dimension table, and the non-key attribute values have changed."},{"key":"C","text":"Update the effective end date of rows when the non-key attribute values have changed."},{"key":"D","text":"Insert new records when the natural key is a new value in the table."}]'::jsonb, ARRAY['A', 'D']::text[], 'SCD Loại 1 (Kích thước thay đổi chậm) không lưu giữ lịch sử; nó ghi đè dữ liệu. Hai hành động bắt buộc là cập nhật các hàng hiện có khi thuộc tính không khóa thay đổi (A) và chèn bản ghi mới cho các giá trị khóa tự nhiên mới (D). Tùy chọn B và C liên quan đến việc theo dõi ngày tháng và lưu giữ lịch sử hiệu quả, đó là các đặc điểm của SCD Loại 2. Kích thước loại 1 chỉ duy trì trạng thái hiện tại.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-66', 'dp-600', 66, 'You have a Fabric tenant that contains a warehouse.  
  
You are designing a star schema model that will contain a customer dimension. The customer dimension table will be a Type 2 slowly changing dimension (SCD).  
  
You need to recommend which columns to add to the table. The columns must NOT already exist in the source.  
  
Which three types of columns should you recommend? Each correct answer presents part of the solution.  
  
NOTE: Each correct answer is worth one point.', '[{"key":"A","text":"a foreign key"},{"key":"B","text":"a natural key"},{"key":"C","text":"an effective end date and time"},{"key":"D","text":"a surrogate key"},{"key":"E","text":"an effective start date and time"}]'::jsonb, ARRAY['C', 'D', 'E']::text[], 'Thứ nguyên thay đổi chậm của Loại 2 yêu cầu ba cột mới không có trong nguồn: khóa thay thế (D) để nhận dạng duy nhất từng phiên bản hàng do khóa doanh nghiệp bị trùng lặp, ngày bắt đầu có hiệu lực (E) cho biết thời điểm hàng trở nên hợp lệ và ngày kết thúc có hiệu lực (C) cho biết thời điểm hàng hết hạn. Khóa ngoại và khóa tự nhiên đã tồn tại trong dữ liệu nguồn nên đây không phải là các cột mới được thêm vào. Ba cột này là bắt buộc để triển khai logic SCD Loại 2.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-67', 'dp-600', 67, '$35', '[{"key":"A","text":"spark.read.format(“delta”).load(“Tables/productline1/ResearchProduct”)"},{"key":"B","text":"spark.sql(“SELECT * FROM Lakehouse1.ResearchProduct ”)"},{"key":"C","text":"external_table(‘Tables/ResearchProduct)"},{"key":"D","text":"external_table(ResearchProduct)"}]'::jsonb, ARRAY['B']::text[], 'Để truy cập dữ liệu từ phím tắt lakehouse có tên ResearchProduct bằng SQL, hãy sử dụng spark.sql("SELECT * FROM Lakehouse1.ResearchProduct"). Phím tắt được tạo trực tiếp trong thư mục Bảng, không được lồng trong thư mục con Productline1. Đường dẫn spark.read.format("delta").load() trong option A không chính xác vì có thư mục no Productline1 được tạo trong thiết kế. Các hàm external_table() không áp dụng cho các phím tắt lakehouse.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-68', 'dp-600', 68, 'You have a Microsoft Power BI report and a semantic model that uses Direct Lake mode. In Power BI Desktop, you open Performance analyzer as shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784205114480-3s9h9oem.png)  
  
Use the drop-down menus to complete each statement based on the information shown.', '[]'::jsonb, ARRAY[]::text[], 'Tự động cung cấp dự phòng DirectQuery thích ứng cho Direct Lake trên các điểm cuối SQL. DirectLakeOnly vô hiệu hóa dự phòng, trong khi DirectQueryOnly sử dụng DirectQuery vô điều kiện. Thời lượng truy vấn Trực tiếp được ghi lại cho thấy hình ảnh này đang sử dụng DirectQuery; mục trực quan khác không có truy vấn Trực tiếp sẽ thiết lập hành vi đó không phải là DirectQueryOnly.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784205114480-3s9h9oem.png', 'published'),
  ('dp600-69', 'dp-600', 69, 'You have a Fabric tenant.  
  
You are creating a Fabric Data Factory pipeline.  
  
You have a stored procedure that returns the number of active customers and their average sales for the current month.  
  
You need to add an activity that will execute the stored procedure in a warehouse. The returned values must be available to the downstream activities of the pipeline.  
  
Which type of activity should you add?', '[{"key":"A","text":"Get metadata"},{"key":"B","text":"Switch"},{"key":"C","text":"Lookup"},{"key":"D","text":"Append variable"}]'::jsonb, ARRAY['C']::text[], 'Hoạt động Tra cứu trong Fabric Data Factory được thiết kế đặc biệt để thực hiện các quy trình hoặc truy vấn được lưu trữ và thu thập kết quả của chúng để sử dụng cho các hoạt động tiếp theo. Nó truy xuất một tập hợp nhỏ các giá trị (chẳng hạn như số lượng và giá trị trung bình từ thủ tục được lưu trữ của bạn) và cung cấp chúng dưới dạng các biến đầu ra của hoạt động mà các hoạt động tiếp theo có thể tham chiếu và hành động theo.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-70', 'dp-600', 70, 'You have a Fabric tenant that contains a warehouse named Warehouse1. Warehouse1 contains two schemas name schema1 and schema2 and a table named schema1.city.  
  
You need to make a copy of schema1.city in schema2. The solution must minimize the copying of data.  
  
Which T-SQL statement should you run?', '[{"key":"A","text":"INSERT INTO schema2.city SELECT * FROM schema1.city;"},{"key":"B","text":"SELECT * INTO schema2.city FROM schema1.city;"},{"key":"C","text":"CREATE TABLE schema2.city AS CLONE OF schema1.city;"},{"key":"D","text":"CREATE TABLE schema2.city AS SELECT * FROM schema1.city;"}]'::jsonb, ARRAY['C']::text[], 'TẠO BẢNG. NHƯ CLONE OF tạo một bản sao gần như tức thời, chỉ siêu dữ liệu của bảng Fabric Warehouse chia sẻ bộ nhớ cơ bản cho đến khi một trong hai bản sao được sửa đổi, do đó, về cơ bản, dữ liệu no được sao chép vật lý. CHÈN VÀO. CHỌN và CHỌN VÀO đều thực hiện sao chép dữ liệu theo từng hàng đầy đủ và TẠO BẢNG NHƯ CHỌN (CTAS) cũng tạo ra một bản sao hoàn toàn mới, tất cả đều tiêu tốn nhiều điện toán và lưu trữ hơn so với bản sao.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-71', 'dp-600', 71, 'HOTSPOT  
  
You have a Fabric workspace that uses the default Spark starter pool and runtime version 1.2.  
  
You plan to read a CSV file named Sales_raw.csv in a lakehouse, select columns, and save the data as a Delta table to the managed area of the lakehouse. Sales_raw.csv contains 12 columns.  
  
You have the following code.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784206203910-mmdk8lmi.png)  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"The Spark engine will read only the ''SalesOrderNumber'', ''OrderDate'',''CustomerName'', ''UnitPrice'' columns from Sales_raw.csv.","correctAnswer":"Yes"},{"id":"2","text":"The Year column replaces the OrderDate column in the table.","correctAnswer":"No"},{"id":"3","text":"Adding inferSchema=''true'' to the options will increase the execution time of the query.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:Yes', '2:No', '3:Yes']::text[], 'Spark có thể áp dụng tính năng cắt bớt cột để quét CSV khi chỉ chiếu một tập hợp con các trường. `withColumn("Year", year("OrderDate"))` thêm `Year` và giữ nguyên `OrderDate`. Suy luận lược đồ CSV yêu cầu kiểm tra bổ sung dữ liệu để xác định loại, tăng cường công việc được thực hiện.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784206203910-mmdk8lmi.png', 'published'),
  ('dp600-73', 'dp-600', 73, 'You have a Fabric lakehouse named Lakehouse1 that contains the following data.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784206720032-o8h1dd29.png)  
  
Build a T-SQL statement that returns the total sales amount by OrderDate only for dates that are holidays in Australia. The total sales amount must add the quantity multiplied by the price for every row in the dbo.sales table.  
  
How should you complete the statement?', '[]'::jsonb, ARRAY[]::text[], '`SUM(s.Quantity * s.UnitPrice)` trước tiên tính toán số tiền của từng hàng bán hàng rồi tổng hợp số tiền đó cho mỗi Ngày đặt hàng. `INNER JOIN` chỉ giữ lại các ngày bán hàng có bản ghi ngày nghỉ lễ phù hợp; việc lọc bản ghi đó thành `countryOrRegion = ''Australia''` sẽ giới hạn kết quả ở các ngày lễ của Úc.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784206720032-o8h1dd29.png', 'published'),
  ('dp600-74', 'dp-600', 74, 'You have a Fabric eventhouse that contains a KQL database. The database contains a table named TaxiData that stores the following data.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784213061866-vb6hebxu.png)  
  
You need to create a column named FirstPickupDateTime that contains the first value of each hour from tpep_pickup_datetime, partitioned by payment_type.  
  
How should you complete the query?', '[]'::jsonb, ARRAY[]::text[], '`row_window_session` gán giá trị bắt đầu phiên cho các hàng trong cùng một phiên. Khoảng cách tối đa `1h` tính từ dấu thời gian đầu tiên làm cho giá trị phiên trở thành thời gian lấy hàng đầu tiên trong giờ đó. Biểu thức khởi động lại `payment_type!= prev(payment_type)` bắt đầu một phiên mới khi loại thanh toán thay đổi, phân chia phép tính theo loại thanh toán sau khi sắp xếp.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784213061866-vb6hebxu.png', 'published'),
  ('dp600-75', 'dp-600', 75, 'HOTSPOT -  
  
You have a Fabric tenant that contains a lakehouse named Lakehouse1. Lakehouse1 contains a table named Nyctaxi_raw. Nyctaxi_row contains the following table:  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784205109162-3p3b4url.png)  
  
You create a Fabric notebook and attach it to Lakehouse1.  
  
You need to use PySpark code to transform the data. The solution must meet the following requirements:  
  
- Add a column named pickupDate that contains only the date portion of pickupDateTime.  
- Filter the DataFrame to include only rows where fareAmount is positive and less than 100.  
  
How should you complete the code?', '[]'::jsonb, ARRAY[]::text[], '`withColumn` tạo cột `pickupDate` và truyền giá trị dấu thời gian tới `date` tạo ra thành phần ngày của nó. Vị từ `fareAmount > 0 AND fareAmount < 100` giữ lại chính xác giá vé dương dưới 100.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784205109162-3p3b4url.png', 'published'),
  ('dp600-76', 'dp-600', 76, 'You have a Fabric tenant that contains a semantic model.  
  
You need to modify object-level security (OLS) for the model.  
  
What should you use?', '[{"key":"A","text":"the Fabric service"},{"key":"B","text":"Microsoft Power BI Desktop"},{"key":"C","text":"ALM Toolkit"},{"key":"D","text":"Tabular Editor"}]'::jsonb, ARRAY['D']::text[], 'Không thể tạo bảo mật cấp đối tượng (OLS) nguyên bản trong Máy tính để bàn Power BI. Tài liệu của Microsoft khuyến nghị rõ ràng việc sử dụng các công cụ bên ngoài như Trình soạn thảo dạng bảng để xác định các quy tắc OLS trên các mô hình ngữ nghĩa. Các công cụ này kết nối thông qua các điểm cuối XMLA để sửa đổi các định nghĩa vai trò và chỉ định các hạn chế ở cấp độ cột hoặc bảng để bảo mật ở cấp độ đối tượng.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-77', 'dp-600', 77, 'You are implementing two dimension tables named Customers and Products in a Fabric warehouse.  
  
You need to use slowly changing dimensions (SCDs) to manage data versioning. The solution must meet the requirements in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784205237231-m41mchv7.png)  
  
Which SCD type should be used for each table? Each SCD type can be used once, more than once, or not at all.', '{"statements":[{"id":"customers","text":"Customers:","correctAnswer":"C"},{"id":"products","text":"Products:","correctAnswer":"B"}],"choices":[{"key":"A","text":"Type 0"},{"key":"B","text":"Type 1"},{"key":"C","text":"Type 2"},{"key":"D","text":"Type 3"}]}'::jsonb, ARRAY['customers=C', 'products=B']::text[], 'SCD Loại 2 lưu giữ lịch sử bằng cách thêm phiên bản mới khi giá trị thứ nguyên thay đổi, đáp ứng yêu cầu của Khách hàng. SCD Loại 1 ghi đè bản ghi hiện có và chỉ giữ lại giá trị hiện tại đáp ứng yêu cầu của Sản phẩm.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784205237231-m41mchv7.png', 'published'),
  ('dp600-78', 'dp-600', 78, 'You have a Fabric workspace named Workspace1 that includes these items:  
  
- A warehouse named Warehouse1  
- A semantic model named Model1  
- An interactive report named Report1  
  
You need to grant a user named User1 access to one table in Warehouse1. The solution must adhere to the principle of least privilege.  
  
What should you do first?', '[{"key":"A","text":"Assign the Viewer role to User1 for Workspace1."},{"key":"B","text":"Share Warehouse1 with User1."},{"key":"C","text":"Assign object-level permissions to User1 for Warehouse1."},{"key":"D","text":"Assign the db_datareader role to User1 for Warehouse1."}]'::jsonb, ARRAY['C']::text[], 'Fabric Warehouse sử dụng các quyền T-SQL cấp đối tượng như GRANT để hạn chế quyền truy cập vào một bảng cụ thể. Để truy cập chi tiết, trước tiên hãy xác định quyền SQL; sau đó cấp cho người dùng quyền Đọc cấp mục tối thiểu cần thiết để kết nối. Quyền tương đương với db_datareader cho phép đọc tất cả các bảng và dạng xem, do đó nó không đáp ứng đặc quyền tối thiểu.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-79', 'dp-600', 79, 'You have an Azure Repos repository named Repo1 and a Fabric-enabled Microsoft Power BI Premium capacity. The capacity contains two workspaces named Workspace1 and Workspace2. Git integration is enabled at the workspace level.  
  
You plan to use Microsoft Power BI Desktop and Workspace1 to make version-controlled changes to a semantic model stored in Repo1. The changes will be built and deployed to Workspace2 by using Azure Pipelines.  
  
You need to ensure that report and semantic model definitions are saved as individual text files in a folder hierarchy. The solution must minimize development and maintenance effort.  
  
In which file format should you save the changes?', '[{"key":"A","text":"PBIP"},{"key":"B","text":"PBIDS"},{"key":"C","text":"PBIT"},{"key":"D","text":"PBIX"}]'::jsonb, ARRAY['A']::text[], 'PBIP (Dự án Power BI) là định dạng tệp hiện đại được thiết kế để tích hợp kiểm soát phiên bản. Nó lưu các định nghĩa báo cáo và mô hình ngữ nghĩa dưới dạng các tệp văn bản đơn giản riêng lẻ trong hệ thống phân cấp thư mục, cho phép các hoạt động git hiệu quả như tìm khác biệt và hợp nhất. PBIX là định dạng nhị phân không phù hợp để kiểm soát phiên bản, trong khi PBIDS là mẫu nguồn dữ liệu và PBIT là mẫu báo cáo.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-80', 'dp-600', 80, 'You have two Microsoft Power BI queries named Employee and Retired Roles.  
  
Merge the Employee query with the Retired Roles query while ensuring that duplicate rows in each query are removed.  
  
Which column and Join Kind should be used in Power Query Editor?', '[]'::jsonb, ARRAY[]::text[], 'Trong truy vấn Vai trò đã loại bỏ, Vai trò xác định duy nhất từng bản ghi, trong khi Phân vùng chứa cùng một giá trị cho mỗi hàng. Do đó, việc hợp nhất theo Vai trò khớp mỗi nhân viên với tối đa một bản ghi vai trò đã nghỉ hưu, do đó việc hợp nhất không thể nhân các hàng; riêng việc hợp nhất trên Division sẽ khớp mọi nhân viên trong một bộ phận với mọi mục nhập vai trò đã nghỉ hưu của bộ phận đó và tạo ra các hàng trùng lặp. Loại kết nối bên trong chỉ giữ lại các hàng có giá trị Vai trò tồn tại trong cả hai truy vấn, do đó, các hàng không có đối tượng ở phía bên kia sẽ bị loại trừ khỏi kết quả đã hợp nhất.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-81', 'dp-600', 81, 'You have a Fabric tenant that contains a warehouse.  

Several times a day, the performance of all warehouse queries degrades. You suspect that Fabric is throttling the compute used by the warehouse.  

What should you use to identify whether throttling is occurring?', '[{"key":"A","text":"the Capacity settings"},{"key":"B","text":"the Monitoring hub"},{"key":"C","text":"dynamic management views (DMVs)"},{"key":"D","text":"the Microsoft Fabric Capacity Metrics app"}]'::jsonb, ARRAY['D']::text[], 'Ứng dụng Chỉ số công suất Microsoft Fabric là công cụ chuyên dụng để theo dõi tình trạng công suất và xác định các sự kiện điều chỉnh. Khi công suất bị hạn chế, DMV không thể được truy vấn, khiến ứng dụng Chỉ số công suất trở thành tài nguyên thiết yếu để theo dõi các hoạt động bị từ chối và hiểu nguyên nhân sâu xa dẫn đến suy giảm hiệu suất truy vấn.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-82', 'dp-600', 82, 'You have a Microsoft Power BI semantic model containing one table named Orders. Orders includes the following columns:  
  
- Product Name  
- Order Date  
- Quantity  
  
You have a Power BI report with a page named Inventory. Inventory includes a slicer for the Product Name column and a clustered column chart that displays Quantity by Order Date.  
  
You need to ensure that users can choose whether the chart displays Quantity by Product Name or Quantity by Order Date. The solution must minimize development effort.  
  
What should you create?', '[{"key":"A","text":"a measure"},{"key":"B","text":"a dynamic format sting"},{"key":"C","text":"a field parameter"},{"key":"D","text":"a calculation group"}]'::jsonb, ARRAY['C']::text[], 'Tham số trường có thể chứa cả Tên sản phẩm và Ngày đặt hàng và được đặt trong trường trục của biểu đồ. Bộ cắt tham số của nó cho phép người dùng báo cáo tự động thay đổi thứ nguyên được phân tích bằng hình ảnh, trong khi Số lượng vẫn giữ nguyên giá trị.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-83', 'dp-600', 83, 'You have a Fabric tenant that contains a warehouse.  
  
You use a dataflow to load a new dataset from OneLake to the warehouse.  
  
You need to add a Power Query step to identify the maximum values for the numeric columns.  
  
Which function should you include in the step?', '[{"key":"A","text":"Table.Range"},{"key":"B","text":"Table.MaxN"},{"key":"C","text":"Table.Profile"}]'::jsonb, ARRAY['C']::text[], 'Table.Profile() trả về số liệu thống kê lược tả cho từng cột trong bảng, bao gồm số lượng tối thiểu, tối đa, số lượng khác biệt, số lượng null và loại dữ liệu. Table.Range và Table.MaxN không cung cấp chức năng lập hồ sơ toàn diện này.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-84', 'dp-600', 84, 'You have a Fabric warehouse named Warehouse1 that contains a table named TaxiTrips.  
  
TaxiTrips contains the following columns.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784212789541-kfozk6wx.png)  
  
You need to create a query that shows the top three taxi companies based on the total miles traveled.  
  
How should you complete the T-SQL statement?', '[]'::jsonb, ARRAY[]::text[], 'TOP (3) giới hạn kết quả ở ba hàng. Công ty phải là biểu thức GROUP BY vì đây là cột được chọn không tổng hợp; SUM(tripDistance) tính tổng số dặm cho mỗi công ty. Việc sắp xếp tổng hợp đó theo thứ tự giảm dần sẽ đặt các công ty có tổng số dặm lớn nhất lên đầu tiên.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784212789541-kfozk6wx.png', 'published'),
  ('dp600-85', 'dp-600', 85, 'You have a Fabric tenant.  
  
You are creating a Fabric Data Factory pipeline.  
  
You have a stored procedure that returns the number of active customers and their average sales for the current month.  
  
You need to add an activity that will execute the stored procedure in a warehouse. The returned values must be available to the downstream activities of the pipeline.  
  
Which type of activity should you add?', '[{"key":"A","text":"Append variable"},{"key":"B","text":"Lookup"},{"key":"C","text":"Copy data"},{"key":"D","text":"KQL"}]'::jsonb, ARRAY['B']::text[], 'Hoạt động Tra cứu là lựa chọn chính xác để thực thi quy trình được lưu trữ trong warehouse và hiển thị các giá trị được trả về cho các hoạt động xuôi dòng. Biến nối thêm sửa đổi các biến đường dẫn thay vì thực hiện truy vấn; Sao chép dữ liệu truyền dữ liệu giữa các nguồn; KQL dành cho truy vấn dữ liệu nhưng không cung cấp cơ chế chuyển đầu ra tương tự. Tra cứu là hoạt động tiêu chuẩn cho trường hợp sử dụng này trong Fabric Data Factory.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-86', 'dp-600', 86, 'You have a Fabric warehouse containing a table named Sales.Orders. Sales.Orders has the following columns.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784205241043-fvml5mv3.png)  
  
You need to write a T-SQL query that returns the following columns.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784205243993-5adfopu6.png)  
  
How should you complete the code?', '[]'::jsonb, ARRAY[]::text[], 'DATETRUNC với phần ngày của tháng trả về ngày đầu vào bị cắt bớt về đầu tháng của nó. DATENAME với phần ngày trong tuần trả về tên văn bản ngày trong tuần cho ngày đó.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784205241043-fvml5mv3.png', 'published'),
  ('dp600-87', 'dp-600', 87, 'You are implementing a medallion architecture in one Fabric workspace.  
  
A lakehouse contains the Bronze and Silver layers, and a warehouse contains the Gold layer.  
  
You create the items needed to populate the layers as shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784205244970-vddi70zt.png)  
  
You need the layers to be populated daily and in sequence: populate Silver only after Bronze completes, and populate Gold only after Silver completes. The solution must minimize development effort and complexity.  
  
What should you use to execute each set of items?  
  
Each option may be used once, more than once, or not at all.', '{"statements":[{"id":"orchestration_pipeline","text":"Orchestration pipeline:","correctAnswer":"D"},{"id":"bronze_layer","text":"Bronze layer:","correctAnswer":"F"},{"id":"silver_layer","text":"Silver layer:","correctAnswer":"B"},{"id":"gold_layer","text":"Gold layer:","correctAnswer":"C"}],"choices":[{"key":"A","text":"A pipeline Copy activity"},{"key":"B","text":"A pipeline Dataflow activity"},{"key":"C","text":"A pipeline Stored procedure activity"},{"key":"D","text":"A schedule"},{"key":"E","text":"A Spark job definition"},{"key":"F","text":"An Invoke pipeline activity"}]}'::jsonb, ARRAY['orchestration_pipeline=D', 'bronze_layer=F', 'silver_layer=B', 'gold_layer=C']::text[], 'Một quy trình Fabric được lên lịch cung cấp trình kích hoạt hàng ngày. Hoạt động quy trình Gọi sẽ điều phối các quy trình Đồng hiện có, trong khi các hoạt động phụ thuộc thành công có thể sắp xếp các bước Đồng, Bạc và Vàng. Hoạt động Dataflow chạy Dataflow Gen2 cho Silver layer và hoạt động Thủ tục được lưu trữ thực thi các thủ tục được lưu trữ warehouse cho Gold layer.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784205244970-vddi70zt.png', 'published'),
  ('dp600-88', 'dp-600', 88, 'You have a Microsoft Power BI report named Report1 that uses a Fabric semantic model.  
  
Users discover that Report1 renders slowly.  
  
You open Performance analyzer and identify that a visual named Orders By Date is the slowest to render. The duration breakdown for Orders By Date is shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783710382179-zzfuzs5b.png)  
  
What will provide the greatest reduction in the rendering duration of Report1?', '[{"key":"A","text":"Enable automatic page refresh."},{"key":"B","text":"Optimize the DAX query of Orders By Date by using DAX Studio."},{"key":"C","text":"Change the visual type of Orders By Date."},{"key":"D","text":"Reduce the number of visuals in Report1."}]'::jsonb, ARRAY['D']::text[], 'Việc giảm số lượng hình ảnh trong báo cáo mang lại sự cải thiện hiệu suất lớn nhất vì thời lượng ''Khác'' (1047 mili giây) cao hơn đáng kể so với truy vấn DAX (27 mili giây) và hiển thị (39 mili giây) cộng lại. Thời gian ''Khác'' bao gồm việc chờ các hình ảnh khác hoàn tất và xử lý nền. Ít hình ảnh hơn làm giảm tải hiển thị tổng thể và sự phụ thuộc giữa các hình ảnh, trực tiếp giải quyết nút thắt cổ chai.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783710382179-zzfuzs5b.png', 'published'),
  ('dp600-89', 'dp-600', 89, 'You have a Fabric tenant containing a lakehouse. You use a Fabric notebook to save a large DataFrame with the specified code.  
  
For each statement, select **Yes** if it is true; otherwise, select **No**.', '{"statements":[{"id":"1","text":"The results will form a hierarchy of folders for each partition key.","correctAnswer":"Yes"},{"id":"2","text":"The resulting file partitions can be read in parallel across multiple nodes.","correctAnswer":"Yes"},{"id":"3","text":"The resulting file partitions will use file compression.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:Yes', '2:Yes', '3:Yes']::text[], 'Việc ghi Parquet được phân vùng sẽ tạo các cấp thư mục cho các giá trị phân vùng `year`, `month` và `day`. Spark lưu trữ kết quả đầu ra dưới dạng tệp phần Parquet, cho phép đọc song song phân tán. Tính năng nén sàn được bật theo mặc định trong Spark (thường là Snappy trừ khi bị ghi đè).', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-90', 'dp-600', 90, 'HOTSPOT  
  
You have a Fabric warehouse containing the following data.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784206730866-wwwh4x2r.png)  
  
The data has these characteristics:  
  
- Each customer has a unique `CustomerID` value.  
- Each customer is linked to one `SalesRegion` value.  
- Each customer is linked to one `CustomerAddress` value.  
- The Customer table has 5 million rows.  
- All foreign-key values are non-null.  
  
You need to create a view that denormalizes the data into a customer dimension with one row for each distinct `CustomerID` value. The solution must minimize query-processing time and resource use.  
  
How should you complete the T-SQL statement?', '[]'::jsonb, ARRAY[]::text[], 'Phép nối bên trong là đủ vì mọi khách hàng đều có mối quan hệ khóa ngoại không rỗng với chính xác một khu vực bán hàng, do đó, phép nối bên ngoài không thể thêm các hàng khách hàng bắt buộc và thực hiện công việc nối ngoài không cần thiết. Bảng `CustomerAddress` liên kết khách hàng với một địa chỉ thông qua `CustomerID` và khóa ngoại `AddressID` của nó phải khớp với `Address.AddressID`. Việc lọc theo `Main Office` sẽ để lại một địa chỉ bắt buộc cho mỗi khách hàng. Các phép nối SQL Server/Fabric sử dụng một biến vị ngữ nối để liên kết khóa ngoại với khóa liên kết của nó.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784206730866-wwwh4x2r.png', 'published'),
  ('dp600-91', 'dp-600', 91, 'You are creating a data flow in Fabric to ingest data from an Azure SQL database by using a T-SQL statement.  
  
You need to make sure that any foldable Power Query transformation steps are processed by the Microsoft SQL Server engine.  
  
How should you complete the code? Each value may be used once, more than once, or not at all.', '{"statements":[{"id":"function_namespace","text":"Slot 1:","correctAnswer":"G"},{"id":"function_name","text":"Slot 2:","correctAnswer":"B"},{"id":"enable_folding_option","text":"Slot 3:","correctAnswer":"A"}],"choices":[{"key":"A","text":"EnableFolding"},{"key":"B","text":"NativeQuery"},{"key":"C","text":"Optimize"},{"key":"D","text":"Record"},{"key":"E","text":"StopFolding"},{"key":"F","text":"Table"},{"key":"G","text":"Value"}]}'::jsonb, ARRAY['function_namespace=G', 'function_name=B', 'enable_folding_option=A']::text[], 'Value.NativeQuery thực thi câu lệnh SQL được cung cấp dựa trên cơ sở dữ liệu. Việc chuyển một bản ghi tùy chọn có EnableFolding được đặt thành true cho phép các phép biến đổi có thể gập tiếp theo được đưa trở lại cơ sở dữ liệu nguồn, do đó SQL Server sẽ xử lý chúng.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-92', 'dp-600', 92, 'You have a Fabric tenant that contains the workspaces shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783711794218-t1jj4zws.png)  
  
You have a deployment pipeline named Pipeline1 that deploys items from Workspace_DEV to Workspace_TEST. In Pipeline1, all items that have matching names are paired.  
  
You deploy the contents of Workspace_DEV to Workspace_TEST by using Pipeline1.  
  
What will the contents of Workspace_TEST be once the deployment is complete?', '[{"key":"A","text":"Lakehouse1 -Lakehouse2 -Notebook1 -Notebook2 -Pipeline1 -SemanticModel1"},{"key":"B","text":"Lakehouse1 -Notebook1 -Pipeline1 -SemanticModel1"},{"key":"C","text":"Lakehouse2 -Notebook2 -SemanticModel1"},{"key":"D","text":"Lakehouse2 -Notebook2 -Pipeline1 -SemanticModel1"}]'::jsonb, ARRAY['A']::text[], 'Quy trình triển khai kết hợp các mục hiện có trong không gian làm việc đích với các mục mới được triển khai từ không gian làm việc nguồn. Các mục có tên trùng khớp sẽ được ghép nối (cập nhật), trong khi các mục không khớp trong mục tiêu sẽ được giữ lại. Kết quả bao gồm tất cả các mục từ DEV cộng với tất cả các mục đã có trong TEST, được hợp nhất theo tên phù hợp. Điều này cung cấp hành vi triển khai tích lũy.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783711794218-t1jj4zws.png', 'published'),
  ('dp600-93', 'dp-600', 93, 'You have a Fabric workspace named Workspace1 that includes a warehouse named Warehouse1 and a lakehouse named Lakehouse1. Warehouse1 has a table named Table1. Lakehouse1 has a Delta table named Table2.  
  
You need to persist data from Table1 into Table2. The solution must use a low-code interface.  
  
What should you do?', '[{"key":"A","text":"Use a notebook to read the data from Table2 and insert the data into Table1."},{"key":"B","text":"Use a notebook to read the data from Table1 and insert the data into Table2."},{"key":"C","text":"Use a Dataflow Gen2 to read the data from Table1 and insert the data into Table2."},{"key":"D","text":"Use stored procedure to read the data from Table2 and insert the data into Table1."}]'::jsonb, ARRAY['C']::text[], 'Dataflow Gen2 là giao diện nhập và chuyển đổi dữ liệu mã thấp, có thể sử dụng dữ liệu Fabric Warehouse làm nguồn và ghi vào Bảng Fabric Lakehouse làm đích. Các bảng Lakehouse sử dụng Delta Lake theo mặc định, do đó, nó hỗ trợ lưu giữ dữ liệu Table1 vào Table2.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-94', 'dp-600', 94, 'You have a Fabric workspace named Workspace1.  
  
You need to create a semantic model named Model1 and publish Model1 to Workspace1. The solution must meet the following requirements:  
  
• Can revert to previous versions of Model1 as required.  

• Identifies differences between saved versions of Model1.  

• Uses Microsoft Power Bl=I Desktop to publish to Workspace1.  

• Can edit item definition files by using Microsoft Visual Studio Code.  
  
Which two actions should you perform? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Enable Git integration for Workspace1."},{"key":"B","text":"Save Model1 in Power BI Desktop as a PBIT file."},{"key":"C","text":"Enable users to edit data models in the Power BI service."},{"key":"D","text":"Save Model1 in Power BI Desktop as a PBIP file."}]'::jsonb, ARRAY['A', 'D']::text[], 'Tích hợp Git (A) cho phép kiểm soát phiên bản, cho phép đảo ngược về các phiên bản trước và nhận dạng khác biệt. Định dạng PBIP (D) lưu trữ định nghĩa mô hình dưới dạng tệp JSON có thể chỉnh sửa, tương thích với Visual Studio Code. Các tệp PBIT là các mẫu; Chỉnh sửa dịch vụ Power BI không sử dụng VS Code.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-95', 'dp-600', 95, 'You are creating a report and a semantic model in Microsoft Power BI Desktop.  
  
The Value measure has the expression shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784206738796-xnmy8mvl.png)  
  
Use the drop-down menus to choose the answer that completes each statement using the information in the graphic.', '[]'::jsonb, ARRAY[]::text[], 'Chuỗi định dạng động kiểm soát có điều kiện cách hiển thị số đo mô hình trong khi vẫn giữ nguyên kiểu dữ liệu số của nó. Chuỗi định dạng phần trăm áp dụng cho Tỷ suất lợi nhuận gộp % và chuỗi định dạng `#,##` áp dụng cho # Khách hàng và nhánh mặc định, tạo ra định dạng số nguyên trong những trường hợp đó.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784206738796-xnmy8mvl.png', 'published'),
  ('dp600-96', 'dp-600', 96, '![Question Image](https://cdn.examcademy.com/images/questions/1784206606477-45cujf5e.png)  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"definition.pbir is in the PBIR-Legacy format.","correctAnswer":"Yes"},{"id":"2","text":"The semantic model referenced by definition.pbir is located in the Power BI service.","correctAnswer":"No"},{"id":"3","text":"When the related report is opened, Power BI Desktop will open the semantic model in full edit mode.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:Yes', '2:No', '3:Yes']::text[], 'Phiên bản 1.0 yêu cầu PBIR-Legacy. Tham chiếu tập dữ liệu `byPath` xác định thư mục mô hình ngữ nghĩa cục bộ tương đối, không phải kết nối dịch vụ Power BI; Power BI Desktop mở mô hình ngữ nghĩa được tham chiếu bởi `byPath` ở chế độ chỉnh sửa đầy đủ.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784206606477-45cujf5e.png', 'published'),
  ('dp600-97', 'dp-600', 97, 'You have a Fabric workspace that uses the default Spark starter pool and runtime version 1.2.  
  
You plan to read a CSV file named Sales_raw.csv in a lakehouse, select columns, and save the data as a Delta table to the managed area of the lakehouse. Sales_raw.csv contains 12 columns.  
  
You have the following code.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784205116247-oy1igppz.png)  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"The Spark engine will read only the ‘SalesOrderNumber’, ‘OrderDate’, ‘CustomerName’, ‘UnitPrice’ columns from Sales_raw.csv.","correctAnswer":"Yes"},{"id":"2","text":"Removing the partition will reduce the execution time of the query.","correctAnswer":"No"},{"id":"3","text":"Adding inferSchema= ‘true’ to the options will increase the execution time of the query.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:Yes', '2:No', '3:Yes']::text[], 'Tính năng cắt bớt cột của Spark chỉ đọc các cột theo yêu cầu của phép chiếu và biểu thức Năm: SalesOrderNumber, OrderDate, CustomerName và UnitPrice. Phân vùng theo năm có thể kích hoạt tính năng cắt bớt phân vùng cho các bộ lọc trong Năm, do đó việc xóa nó không làm giảm thời gian thực hiện. Suy luận lược đồ CSV thêm bước quét/kiểm tra để xác định loại dữ liệu cột, tăng thời gian xử lý.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784205116247-oy1igppz.png', 'published'),
  ('dp600-98', 'dp-600', 98, 'You have this T-SQL statement.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784206615208-zyrfv3jk.png)  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"The statement returns Region values when a Sales item has a RefundStatus of Refunded.","correctAnswer":"Yes"},{"id":"2","text":"The statement only returns TransactionDate values that occurred during the current year.","correctAnswer":"Yes"},{"id":"3","text":"The TotalRevenue calculation aggregates SalesAmount values that have a RefundStatus of Refunded.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:Yes', '2:Yes', '3:No']::text[], '`Region` được chọn và nhóm, trong khi mệnh đề WHERE chỉ lọc cho năm hiện tại chứ không lọc theo trạng thái hoàn tiền. Vị từ năm hạn chế các hàng được xử lý trong năm hiện tại. Biểu thức CASE chỉ cung cấp `SalesAmount` cho các hàng có `RefundStatus` không phải là `Refunded`; các hàng được hoàn lại thêm số 0 vào `SUM`.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784206615208-zyrfv3jk.png', 'published'),
  ('dp600-99', 'dp-600', 99, '$35', '[{"key":"A","text":"a stored procedure"},{"key":"B","text":"a pipeline that contains a KQL activity"},{"key":"C","text":"a Spark notebook"},{"key":"D","text":"a dataflow"}]'::jsonb, ARRAY['D']::text[], 'Yêu cầu nêu rõ ''bất cứ khi nào có thể, các kỹ sư dữ liệu sẽ sử dụng các công cụ mã thấp để nhập dữ liệu.'' Luồng dữ liệu là giải pháp mã nguồn ngắn cho phép tải dữ liệu mà không cần chuyển đổi vào kho lưu trữ dữ liệu. Mặc dù máy tính xách tay Spark cung cấp nhiều quyền kiểm soát hơn nhưng chúng yêu cầu phát triển mã. Luồng dữ liệu trực tiếp đáp ứng cả yêu cầu mã thấp và khả năng tải dữ liệu mà không cần chuyển đổi.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-100', 'dp-600', 100, 'You have a Fabric workspace containing a warehouse named Warehouse1. Warehouse1 contains the following data.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784206742797-m7obkwte.png)  
  
Create a T-SQL statement that denormalizes the tables and includes the ContractType and StartDate attributes in the results. The solution must:  
  
- Include attributes from matching Contract-table rows.  
- Preserve every row from the Employee table.  
- Return the total employee count per contract type for all contract types with more than two employees.  
  
How should you complete the statement?', '[]'::jsonb, ARRAY[]::text[], 'LEFT OUTER JOIN từ Nhân viên đến Hợp đồng sẽ bảo toàn mọi hàng Nhân viên và cung cấp các giá trị Hợp đồng ở bất cứ nơi nào ID nhân viên khớp. HAVING lọc các nhóm sau khi tổng hợp COUNT(DISTINCT MemberID) đã được đánh giá; WHERE lọc các hàng trước khi nhóm và không thể thực hiện điều kiện nhóm tổng hợp này.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784206742797-m7obkwte.png', 'published'),
  ('dp600-101', 'dp-600', 101, 'You have a Fabric tenant that contains a workspace named Workspace1 and a user named User1. Workspace1 contains a warehouse named DW1.  
  
You share DW1 with User1 and assign User1 the default permissions for DW1.  
  
What can User1 do?', '[{"key":"A","text":"Build reports by using the default dataset."},{"key":"B","text":"Read data from the tables in DW1."},{"key":"C","text":"Connect to DW1 via the Azure SQL Analytics endpoint."},{"key":"D","text":"Read the underlying Parquet files from OneLake."}]'::jsonb, ARRAY['C']::text[], 'Khi warehouse được chia sẻ với các quyền bổ sung no được chọn, người nhận chỉ nhận được quyền Đọc mặc định, tương đương với CONNECT trong SQL Server và cho phép họ kết nối với điểm cuối phân tích SQL — quyền này không cho phép họ truy vấn các bảng/chế độ xem, xây dựng báo cáo trên mô hình ngữ nghĩa mặc định hoặc đọc các tệp OneLake cơ bản, vì những tệp đó yêu cầu ReadData, Quyền Xây dựng hoặc Đọc tất cả phải được cấp rõ ràng.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-102', 'dp-600', 102, 'You have a custom Direct Lake semantic model named Model1 that has one billion rows of data.  

You use Tabular Editor to connect to Model1 by using the XMLA endpoint.  
  
You need to ensure that when users interact with reports based on Model1, their queries always use Direct Lake mode.  
  
What should you do?', '[{"key":"A","text":"From Model, configure the Default Mode option."},{"key":"B","text":"From Partitions, configure the Mode option."},{"key":"C","text":"From Model, configure the Storage Location option."},{"key":"D","text":"From Model, configure the Direct Lake Behavior option."}]'::jsonb, ARRAY['D']::text[], 'Thuộc tính DirectLakeBehavior (được định cấu hình thành ''DirectLakeOnly'') đảm bảo tất cả các truy vấn sử dụng chế độ Direct Lake mà không chuyển sang DirectQuery. Điều này rất quan trọng đối với mô hình ngữ nghĩa một tỷ hàng để duy trì hiệu suất tối ưu. Thuộc tính được định cấu hình thông qua Trình chỉnh sửa dạng bảng bằng TOM hoặc TMSL, không phải thông qua cài đặt Chế độ mặc định, Chế độ phân vùng hoặc Vị trí lưu trữ.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-103', 'dp-600', 103, 'You have a Fabric workspace named Workspace1 that is assigned to a newly created Fabric capacity named Capacity1.  
  
You create a semantic model named Model1 and deploy Model1 to Workspace1.  
  
You need to publish changes to Model1 directly from Tabular Editor.  
  
What should you do?', '[{"key":"A","text":"For Workspace1, enable Git integration."},{"key":"B","text":"For Model1, enable external sharing."},{"key":"C","text":"For Workspace1, create a managed private endpoint."},{"key":"D","text":"For Capacity1, set XMLA Endpoint to Read Write."}]'::jsonb, ARRAY['D']::text[], 'Trình soạn thảo dạng bảng yêu cầu quyền truy cập đọc-ghi XMLA để xuất bản các thay đổi siêu dữ liệu đối với mô hình ngữ nghĩa. Việc đặt Điểm cuối XMLA thành Đọc, ghi trên Dung lượng1 sẽ cho phép Trình soạn thảo dạng bảng và các công cụ bên ngoài khác thực hiện các thao tác ghi như triển khai các thay đổi lược đồ, tạo vai trò hoặc xuất bản các định nghĩa mô hình. Tích hợp Git trực giao với các yêu cầu về công cụ XMLA.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-104', 'dp-600', 104, 'You have a data warehouse containing a table named `Stage.Customers`. It stores every customer-record update from a customer relationship management (CRM) system, and a customer can have multiple updates.  
  
You need a T-SQL query that returns the customer ID, name, postal code, and last-updated time from the most recent row for each customer ID.  
  
How should you complete the code?', '[]'::jsonb, ARRAY[]::text[], '`ROW_NUMBER()` đánh số hàng riêng biệt cho mỗi `CustomerID`. Với `LastUpdated DESC`, hàng được cập nhật gần đây nhất nhận được hàng số 1; `WHERE X = 1` giữ hàng đó cho mọi khách hàng.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-105', 'dp-600', 105, 'You have a Fabric tenant that contains a lakehouse.  

You plan to query sales data files by using the SQL endpoint. The files will be in an Amazon Simple Storage Service (Amazon S3) storage bucket.  

You need to recommend which file format to use and where to create a shortcut.  

Which two actions should you include in the recommendation? Each correct answer presents part of the solution.  

NOTE: Each correct answer is worth one point.', '[{"key":"A","text":"Create a shortcut in the Files section."},{"key":"B","text":"Use the Parquet format"},{"key":"C","text":"Use the CSV format."},{"key":"D","text":"Create a shortcut in the Tables section."},{"key":"E","text":"Use the delta format."}]'::jsonb, ARRAY['D', 'E']::text[], 'Phải tạo các phím tắt OneLake cho dữ liệu Delta Lake bên ngoài trong phần Bảng của lakehouse, cho phép Fabric tự động đồng bộ hóa siêu dữ liệu của thư mục và hiển thị dưới dạng bảng được quản lý có thể truy vấn thông qua điểm cuối SQL. Việc sử dụng định dạng Delta (chứ không phải CSV hoặc Parquet đơn giản) là điều giúp khả năng nhận dạng bảng tự động và đồng bộ hóa siêu dữ liệu này có thể thực hiện được đối với một phím tắt trỏ vào nhóm S3.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-106', 'dp-600', 106, 'You plan to use Fabric to store data.  
  
You need to create a data store that supports the following:  
  
• Writing data by using T-SQL  

• Multi-table transactions  

• Dynamic data masking  
  
Which type of data store should you create?', '[{"key":"A","text":"KQL database"},{"key":"B","text":"lakehouse"},{"key":"C","text":"warehouse"},{"key":"D","text":"semantic model"}]'::jsonb, ARRAY['C']::text[], 'Microsoft Fabric warehouse là loại lưu trữ dữ liệu hỗ trợ nguyên bản các truy vấn T-SQL, hoạt động giao dịch nhiều bảng và che giấu dữ liệu động. Lakehouse hỗ trợ Spark và SQL hạn chế; Cơ sở dữ liệu KQL chỉ có truy vấn; mô hình ngữ nghĩa chỉ dành cho phân tích/báo cáo.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-107', 'dp-600', 107, 'You have a Fabric tenant.  
  
You are creating a Fabric Data Factory pipeline.  
  
You have a stored procedure that returns the number of active customers and their average sales for the current month.  
  
You need to add an activity that will execute the stored procedure in a warehouse. The returned values must be available to the downstream activities of the pipeline.  
  
Which type of activity should you add?', '[{"key":"A","text":"Get metadata"},{"key":"B","text":"Copy data"},{"key":"C","text":"Lookup"},{"key":"D","text":"Append variable"}]'::jsonb, ARRAY['C']::text[], 'Hoạt động Tra cứu là lựa chọn thích hợp để thực thi quy trình được lưu trữ trong warehouse và cung cấp các giá trị trả về cho các hoạt động quy trình xuôi dòng. Nhận siêu dữ liệu lấy thuộc tính đối tượng; Sao chép dữ liệu chuyển dữ liệu giữa các nguồn nhưng không dễ dàng hiển thị đầu ra; Biến nối thêm sửa đổi các biến đường ống. Chỉ Tra cứu được thiết kế để thực hiện các truy vấn/thủ tục và hiển thị kết quả cho các hoạt động tiếp theo.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-108', 'dp-600', 108, 'You have a Fabric tenant that includes two workspaces, named Workspace1 and Workspace2.  
  
Workspace1 serves as the development environment, and Workspace2 serves as the production environment. Each environment uses a separate storage account.  
  
Workspace1 contains a Dataflow Gen2 named Dataflow1. Dataflow1 uses a CSV file in blob storage as its data source.  
  
You plan to implement a deployment pipeline that deploys items from Workspace1 to Workspace2.  
  
You need to ensure that the data source points to the correct location in the production environment.  
  
What should you do?', '[{"key":"A","text":"Create a data source rule only."},{"key":"B","text":"Create a parameter rule only."},{"key":"C","text":"Create a data source rule and a parameter rule."},{"key":"D","text":"After implementing the deployment pipeline, manually change the data source"}]'::jsonb, ARRAY['D']::text[], 'Quy tắc triển khai Dataflow Gen2 không hỗ trợ thay đổi kết nối nguồn dữ liệu hoặc logic kết hợp. Ngoài ra, tham số hóa Dataflow Gen2 không hỗ trợ các tham số thay đổi đường dẫn tài nguyên nguồn. Vì CSV sản xuất nằm trong tài khoản Blob Storage khác nên luồng dữ liệu đã triển khai phải được cập nhật thủ công để sử dụng vị trí nguồn sản xuất.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-109', 'dp-600', 109, 'You have a Fabric tenant that contains a workspace named Workspace1. Workspace1 contains a single semantic model that has two Microsoft Power BI reports.  
  
You have a Microsoft 365 subscription that contains a data loss prevention (DLP) policy named DLP1.  
  
You need to apply DLP1 to the items in Workspace1.  
  
What should you do?', '[{"key":"A","text":"Create a workspace identity."},{"key":"B","text":"Apply a certified endorsement to the semantic model."},{"key":"C","text":"Apply sensitivity labels to the semantic model and reports."},{"key":"D","text":"Apply a master data endorsement to the semantic model."}]'::jsonb, ARRAY['C']::text[], 'Chính sách ngăn chặn mất dữ liệu (DLP) trong Microsoft 365 được thực thi thông qua nhãn nhạy cảm. Bạn xác định chính sách DLP bằng cách chỉ định các điều kiện dựa trên nhãn nhạy cảm và loại thông tin nhạy cảm. Việc áp dụng nhãn nhạy cảm cho các mô hình và báo cáo ngữ nghĩa cho phép đánh giá và thực thi chính sách DLP đối với các mục đó. Xác nhận và danh tính không gian làm việc giải quyết các mối quan tâm quản trị khác nhau.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-110', 'dp-600', 110, 'You have a Fabric tenant containing a Microsoft Power BI report named Report1.  
  
Report1 is slow to render, and you suspect an inefficient DAX query is being run.  
  
Identify the slowest DAX query and review the time it spends in the formula engine compared with the storage engine.  
  
Which five actions should you take, in sequence?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"B"},{"id":"step2","text":"Slot 2:","correctAnswer":"E"},{"id":"step3","text":"Slot 3:","correctAnswer":"F"},{"id":"step4","text":"Slot 4:","correctAnswer":"D"},{"id":"step5","text":"Slot 5:","correctAnswer":"G"}],"choices":[{"key":"A","text":"View the Query Timings tab."},{"key":"B","text":"From Performance analyzer, capture a recording."},{"key":"C","text":"Sort the Duration (ms) column in descending order."},{"key":"D","text":"Enable Query Timings and Server Timings. Run the query."},{"key":"E","text":"Sort the Duration (ms) column in descending order by DAX query time."},{"key":"F","text":"Copy the first query to DAX Studio."},{"key":"G","text":"View the Server Timings tab."}]}'::jsonb, ARRAY['step1=B', 'step2=E', 'step3=F', 'step4=D', 'step5=G']::text[], 'Trình phân tích hiệu suất Power BI ghi lại các hoạt động tải hình ảnh và bao gồm thời lượng truy vấn DAX cho mỗi hình ảnh; sắp xếp theo khoảng thời gian đó sẽ xác định truy vấn DAX chậm nhất. Thời gian máy chủ DAX Studio báo cáo tổng thời gian xử lý của máy chủ và chia thành thời gian Công cụ công thức (FE) và Công cụ lưu trữ (SE), cho phép so sánh công cụ cần thiết.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-111', 'dp-600', 111, 'You have a Microsoft Power BI project that contains a semantic model.  
  
You plan to use Azure DevOps for version control.  
  
You need to modify the .gitignore file to prevent the data values from the data sources from being pushed to the repository.  
  
Which file should you reference?', '[{"key":"A","text":"unappliedChanges.json"},{"key":"B","text":"cache.abf"},{"key":"C","text":"localSettings.json"},{"key":"D","text":"model.bim"}]'::jsonb, ARRAY['B']::text[], 'Tệp cache.abf là bộ đệm nhị phân chứa các giá trị dữ liệu thực tế được lưu trong bộ đệm từ mô hình ngữ nghĩa. Nó có thể rất lớn và chứa các ảnh chụp nhanh dữ liệu không được lưu trữ trong kiểm soát phiên bản. Các tùy chọn khác (unappliedChanges.json, localSettings.json, model.bim) chứa siêu dữ liệu hoặc tệp cấu hình cần thiết cho cấu trúc dự án và phải được giữ nguyên trong kho lưu trữ.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-112', 'dp-600', 112, 'You are designing a Fabric semantic model called Model1 for a financial analytics workspace. Model1 contains a DAX measure named Measure1 that returns total sales.  
  
You have a table named Currency that includes a column named Format. The Format column specifies currency format strings for each record as follows: $#, ##0.00, €#, ##0.00, OR ¥#,##0.00.  
  
You have a report that uses the Currency column to determine which symbol and format string to show. In the report, Measure1 must display two decimal places and the applicable currency symbol based on the value selected in the Currency column.  
  
You create the following DAX formula.  
  
`FORMAT = SELECTEDVALUE( ‘Currency’ [Format])`  
  
You need to ensure that Measure displays correctly in visuals. The solution must minimize duplicated logic.  
  
What should you do?', '[{"key":"A","text":"Create a dynamic format string for Measure1 that references the FORMAT measure."},{"key":"B","text":"For Model1, set the data category of Measure1 to Country/Region."},{"key":"C","text":"For Model1, set the format type of Measure1 to Currency."},{"key":"D","text":"Copy the DAX expression from the Format column and paste the expression into the format string expression of Measure1."}]'::jsonb, ARRAY['A']::text[], 'Chuỗi định dạng động cho phép thước đo mô hình vẫn ở dạng số trong khi định dạng được hiển thị của nó thay đổi theo ngữ cảnh bộ lọc. Việc đặt chuỗi định dạng động của Số đo1 để tham chiếu số đo `FORMAT` sử dụng giá trị `Currency[Format]` đã chọn, tạo ra ký hiệu tiền tệ thích hợp và định dạng hai thập phân mà không trùng lặp biểu thức `SELECTEDVALUE`. [Create dynamic format strings for measures](https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-dynamic-format-strings)', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-113', 'dp-600', 113, 'You have a Fabric warehouse named Warehouse1 that contains a table named Table1. Table1 contains customer data.  
  
You need to implement row-level security (RLS) for Table1. The solution must ensure that users can see only their respective data.  
  
Which two objects should you create? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"DATABASE ROLE"},{"key":"B","text":"STORED PROCEDURE"},{"key":"C","text":"CONSTRAINT"},{"key":"D","text":"FUNCTION"},{"key":"E","text":"SECURITY POLICY"}]'::jsonb, ARRAY['D', 'E']::text[], 'Bảo mật cấp hàng trong Fabric warehouse tuân theo mô hình tương tự như SQL Server và Synapse: CHỨC NĂNG có giá trị trong bảng nội tuyến xác định vị từ xác định hàng nào mà người dùng nhất định được phép xem và CHÍNH SÁCH BẢO MẬT liên kết chức năng đó với bảng mục tiêu để vị từ được áp dụng một cách minh bạch cho mọi truy vấn. Vai trò cơ sở dữ liệu có thể giúp quản lý người dùng nào thuộc nhóm nào, nhưng bản thân nó không thực thi được gì nếu không có chính sách bảo mật ràng buộc.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-114', 'dp-600', 114, 'You are analyzing the data in a Fabric notebook.  

You have a Spark DataFrame assigned to a variable named df.  

You need to use the Chart view in the notebook to explore the data manually.  

Which function should you run to make the data available in the Chart view?', '[{"key":"A","text":"displayHTML"},{"key":"B","text":"show"},{"key":"C","text":"write"},{"key":"D","text":"display"}]'::jsonb, ARRAY['D']::text[], 'Hàm display() trong sổ ghi chép Fabric cho phép cả chế độ xem trực quan hóa bảng và biểu đồ cho Spark DataFrames. displayHTML() chỉ hiển thị nội dung HTML, show() là phương thức PySpark hiển thị dữ liệu nhưng không cung cấp chức năng xem biểu đồ và write() được sử dụng cho các hoạt động I/O. Chỉ display() mới kích hoạt tính năng xem biểu đồ để khám phá tương tác.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-115', 'dp-600', 115, '$35', '[{"key":"A","text":"spark.sql(\"SELECT * FROM Lakehouse1.Tables.ResearchProduct\")"},{"key":"B","text":"spark.read.format(\"delta\").load(\"Tables/productline1/ResearchProduct\")"},{"key":"C","text":"external_table(ResearchProduct)"},{"key":"D","text":"spark.read.format(\"delta\").load(\"Tables/ResearchProduct\")"}]'::jsonb, ARRAY['D']::text[], 'Phím tắt ResearchProduct được tạo trực tiếp bên trong Lakehouse1 và phải xuất hiện dưới dạng bảng được quản lý, vì vậy đường dẫn Spark vật lý của nó là Tables/ResearchProduct; việc đọc đường dẫn đó bằng trình đọc định dạng Delta sẽ trả về dữ liệu storage1 cơ bản với việc lồng thêm no cần thiết. "Tables/productline1/ResearchProduct" giới thiệu một thư mục con chưa bao giờ là một phần của bố cục phím tắt được mô tả và các tùy chọn kiểu SQL/danh mục trong bộ tùy chọn này sử dụng cú pháp không hợp lệ (Bảng không phải là bộ hạn định lược đồ hợp lệ).', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-116', 'dp-600', 116, 'You are implementing two dimension tables named Customers and Products in a Fabric warehouse.  
  
You need to create two slowly changing dimensions that meet the requirements shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784212439031-hd7usks1.png)  
  
Which SCD type should you use for each table? Each SCD type can be used once, more than once, or not at all.', '{"statements":[{"id":"customers","text":"Customers:","correctAnswer":"C"},{"id":"products","text":"Products:","correctAnswer":"B"}],"choices":[{"key":"A","text":"Type 0"},{"key":"B","text":"Type 1"},{"key":"C","text":"Type 2"},{"key":"D","text":"Type 3"}]}'::jsonb, ARRAY['customers=C', 'products=B']::text[], 'Thứ nguyên thay đổi chậm Loại 2 sẽ giữ lại các giá trị lịch sử bằng cách tạo phiên bản mới của bản ghi thứ nguyên. Thứ nguyên thay đổi chậm Loại 1 sẽ ghi đè giá trị thuộc tính hiện có và không giữ lại lịch sử.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784212439031-hd7usks1.png', 'published'),
  ('dp600-117', 'dp-600', 117, 'A semantic model contains the following tables:  
  
- Sales  
- Product  
- Location  
  
You are creating a DAX measure named Measure1 to calculate the percentage of all sales for a selected product. Measure1 uses the following DAX formula.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784226204305-tz2xln9f.png)  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"Measure1 will return an error if there are no sales for all products.","correctAnswer":"No"},{"id":"2","text":"Measure1 will return a decimal value that represents the ratio of the current product’s total sales to the total sales across all products.","correctAnswer":"Yes"},{"id":"3","text":"The denominator of Measure1 will be calculated by using the modified filter context created by the REMOVEFILTERS ( ''Product'' ) DAX function.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:No', '2:Yes', '3:Yes']::text[], 'DIVIDE xử lý mẫu số 0 hoặc BLANK bằng cách trả về BLANK khi kết quả thay thế no được chỉ định, do đó nó không trả về lỗi. Tử số giữ lại bộ lọc sản phẩm hiện tại, trong khi CALCULATE đánh giá mẫu số sau khi REMOVEFILTERS xóa các bộ lọc khỏi bảng Sản phẩm; điều này tạo ra doanh số bán hàng của sản phẩm đã chọn dưới dạng tỷ lệ doanh số bán hàng trên các sản phẩm.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784226204305-tz2xln9f.png', 'published'),
  ('dp600-118', 'dp-600', 118, 'You have a Fabric tenant.  
  
You are creating a Fabric Data Factory pipeline.  
  
You have a stored procedure that returns the number of active customers and their average sales for the current month.  
  
You need to add an activity that will execute the stored procedure in a warehouse. The returned values must be available to the downstream activities of the pipeline.  
  
Which type of activity should you add?', '[{"key":"A","text":"Switch"},{"key":"B","text":"KQL"},{"key":"C","text":"Append variable"},{"key":"D","text":"Lookup"}]'::jsonb, ARRAY['D']::text[], 'Hoạt động Tra cứu được thiết kế đặc biệt để thực hiện các truy vấn hoặc thủ tục được lưu trữ dựa trên nguồn dữ liệu và truy xuất kết quả cho các hoạt động tiếp theo để sử dụng. Công tắc được sử dụng để phân nhánh logic, KQL truy xuất dữ liệu nhưng không dễ dàng hiển thị đầu ra cho các hoạt động xuôi dòng và Biến nối thêm sửa đổi các biến đường ống. Tra cứu là hoạt động tiêu chuẩn để thực thi các thủ tục được lưu trữ và cung cấp đầu ra cho các hoạt động tiếp theo trong một đường ống.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-119', 'dp-600', 119, 'You have a Fabric workspace containing a Dataflow Gen2 query. The query returns the following data.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784206725512-opu2xanu.png)  
  
You need to filter the results so that only the latest version of each customer record is retained. The solution must ensure that no new columns are loaded to the semantic model.  
  
Which four actions should you perform, in order, in Power Query Editor?', '{"statements":[{"id":"slot1","text":"Slot 1:","correctAnswer":"F"},{"id":"slot2","text":"Slot 2:","correctAnswer":"C"},{"id":"slot3","text":"Slot 3:","correctAnswer":"A"},{"id":"slot4","text":"Slot 4:","correctAnswer":"B"}],"choices":[{"key":"A","text":"Filter the query where the version date value equals the max version date value."},{"key":"B","text":"Remove the max version date column."},{"key":"C","text":"Expand the All Rows detail column."},{"key":"D","text":"Group by CustomerID and calculate the max version date per customer ID."},{"key":"E","text":"Remove duplicates based on CustomerID."},{"key":"F","text":"Group by CustomerID, use the All Rows operation, and calculate the max version date per customer ID."}]}'::jsonb, ARRAY['slot1=F', 'slot2=C', 'slot3=A', 'slot4=B']::text[], 'Việc nhóm theo ID khách hàng với cả Tất cả các hàng và Ngày phiên bản tối đa sẽ bảo toàn từng bản ghi gốc và tạo giá trị so sánh cho mỗi khách hàng. Việc mở rộng Tất cả các hàng sẽ khôi phục các hàng chi tiết, sau đó việc lọc VersionDate đến mức tối đa của nhóm chỉ giữ lại bản ghi mới nhất. Việc xóa cột ngày tối đa của trình trợ giúp sẽ ngăn không cho nó được tải vào mô hình ngữ nghĩa.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784206725512-opu2xanu.png', 'published'),
  ('dp600-120', 'dp-600', 120, 'You have a Fabric tenant that contains a Microsoft Power BI report.  
  
You are exploring a new semantic model.  
  
You need to display the following column statistics:  
  
• Count  

• Average  

• Null count  

• Distinct count  

• Standard deviation  
  
Which Power Query function should you run?', '[{"key":"A","text":"Table.schema"},{"key":"B","text":"Table.view"},{"key":"C","text":"Table.FuzzyGroup"},{"key":"D","text":"Table.Profile"}]'::jsonb, ARRAY['D']::text[], 'Hàm Table.Profile trong Power Query trả về số liệu thống kê cột toàn diện bao gồm số lượng, số trung bình, số null, số lượng khác biệt, độ lệch chuẩn, giá trị tối thiểu và tối đa. Đây là hàm M tiêu chuẩn được thiết kế để phân tích các cột trong bảng. Table.schema chỉ trả về siêu dữ liệu, Table.view không phải là một hàm tiêu chuẩn và Table.FuzzyGroup dành cho các hoạt động nhóm mờ.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-121', 'dp-600', 121, 'You have a Fabric workspace named Workspace1 and a user named User1.  
  
You need to ensure that User1 can perform the following tasks in Workspace1:  
  
- Create dashboards.  
- Publish semantic models.  
- Create and publish reports.  
  
The solution must adhere to the principle of least privilege.  
  
Which workspace role should you assign to User1?', '[{"key":"A","text":"Contributor"},{"key":"B","text":"Member"},{"key":"C","text":"Viewer"},{"key":"D","text":"Admin"}]'::jsonb, ARRAY['A']::text[], 'Vai trò Cộng tác viên có thể tạo và sửa đổi nội dung trong không gian làm việc Fabric, bao gồm bảng thông tin, mô hình ngữ nghĩa và báo cáo. Nó cấp các khả năng soạn thảo và xuất bản cần thiết mà không cần có quyền chia sẻ bổ sung của Thành viên hoặc quyền quản lý không gian làm việc của Quản trị viên.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-122', 'dp-600', 122, 'You have a Fabric tenant that includes a semantic model named Model1. Model1 has a fact table containing millions of rows of shipment data.  
  
You need to enable partitioning to improve Model1 query performance and manageability.  
  
Which two tools can you use to accomplish this goal? Each correct answer provides a complete solution.  
  
NOTE: Each correct answer is worth one point.', '[{"key":"A","text":"Tabular Editor"},{"key":"B","text":"DAX Studio"},{"key":"C","text":"Microsoft Power BI Desktop"},{"key":"D","text":"the Microsoft Power BI service"},{"key":"E","text":"Microsoft SQL Server Management Studio (SSMS)"}]'::jsonb, ARRAY['A', 'E']::text[], 'Các phân vùng bảng mô hình ngữ nghĩa có thể được quản lý thông qua điểm cuối XMLA bằng các công cụ hỗ trợ siêu dữ liệu mô hình dạng bảng và tập lệnh TMSL. Tabular Editor và SQL Server Management Studio (SSMS) hỗ trợ việc quản lý phân vùng này; Power BI Desktop và dịch vụ Power BI không trực tiếp hiển thị hoặc quản lý các phân vùng bảng mô hình ngữ nghĩa.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-123', 'dp-600', 123, 'HOTSPOT  
  
You have a Fabric tenant that contains a warehouse named WH1.  
  
You run the following T-SQL query against WH1.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784206195203-qhqiwmhu.png)  
  
For each statement below, select **Yes** when it is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"Dimension.GetDirectReports is a scalar T-SQL function.","correctAnswer":"No"},{"id":"2","text":"The Dimension.GetDirectReports function will run only once when the query runs.","correctAnswer":"No"},{"id":"3","text":"The output rows will include at least one row for each row in the Dimension.Employee table.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:No', '2:No', '3:Yes']::text[], 'Dimension.GetDirectReports được sử dụng làm nguồn hàng với APPLY, do đó, đây là hàm có giá trị bảng chứ không phải hàm vô hướng. Đối số của nó xuất phát từ mỗi hàng nhân viên hiện tại, tạo ra mối tương quan ỨNG DỤNG trên mỗi hàng bên ngoài thay vì thực thi một hàm trên toàn truy vấn. OUTER APPLY giữ lại mọi hàng nhân viên bên trái; khi các hàng báo cáo trực tiếp no được trả về, các cột gdr là NULL, giữ lại ít nhất một hàng đầu ra cho nhân viên đó.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784206195203-qhqiwmhu.png', 'published'),
  ('dp600-124', 'dp-600', 124, 'You have an Azure SQL database named DB1 and a Fabric workspace named Workspace1. Workspace1 contains a lakehouse named LH1 and a Dataflow Gen2 named Dataflow1. Dataflow1 has a query named Query1 that loads data from DB1, transforms the data, and then filters it.  
  
You discover that Query1 loads all data before it applies the transformations.  
  
You need to make sure that Query1 uses query folding.  
  
What should you do?', '[{"key":"A","text":"Remove unused columns from Query1."},{"key":"B","text":"Enable incremental refresh for Query1."},{"key":"C","text":"Replace DB1 with a Microsoft SQL Server database."},{"key":"D","text":"Move the filter steps before the transformation steps in Query1."}]'::jsonb, ARRAY['D']::text[], 'Việc gấp truy vấn sẽ đẩy các hoạt động Power Query được hỗ trợ vào hệ thống nguồn. Việc áp dụng sớm các bộ lọc sẽ cho phép dịch bộ lọc sang truy vấn Azure SQL, do đó, chỉ những hàng bắt buộc mới được truy xuất trước các lần chuyển đổi tiếp theo. Microsoft khuyên bạn nên lọc sớm và thường xuyên để tối ưu hóa việc gấp truy vấn Dataflow Gen2.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-125', 'dp-600', 125, 'HOTSPOT -  
  
You have a Fabric tenant containing a warehouse named Warehouse1. Warehouse1 has a fact table named FactSales with one billion rows.  
  
You run this T-SQL statement:  
  
`CREATE TABLE test.FactSales AS CLONE OF dbo.FactSales;`  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"A replica of dbo.FactSales is created in the test schema by copying the metadata only.","correctAnswer":"Yes"},{"id":"2","text":"Additional schema changes to dbo.FactSales will also apply to test.FactSales.","correctAnswer":"No"},{"id":"3","text":"Additional data changes to dbo.FactSales will also apply to test.FactSales.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:Yes', '2:No', '3:No']::text[], 'Bản sao bảng Fabric Warehouse là bản sao không sao chép: chỉ siêu dữ liệu được sao chép, trong khi bản sao tham chiếu các tệp dữ liệu cơ bản hiện có. Bản sao độc lập với nguồn của nó, do đó các thay đổi lược đồ DDL sau này và các thay đổi dữ liệu DML đối với nguồn sẽ không truyền tới bảng được sao chép.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-126', 'dp-600', 126, 'You have a Fabric tenant that contains a semantic model named Model1. Model1 uses Import mode. Model1 contains a table named Orders. Orders has 100 million rows and the following fields.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783709928530-rmypyify.png)  
  
You need to reduce the memory used by Model1 and the time it takes to refresh the model.  

Which two actions should you perform? Each correct answer presents part of the solution.  

NOTE: Each correct answer is worth one point.', '[{"key":"A","text":"Split OrderDateTime into separate date and time columns."},{"key":"B","text":"Replace TotalQuantity with a calculated column."},{"key":"C","text":"Convert Quantity into the Text data type."},{"key":"D","text":"Replace TotalSalesAmount with a measure."}]'::jsonb, ARRAY['A', 'D']::text[], 'Việc chia OrderDateTime thành các cột ngày và giờ riêng biệt sẽ cải thiện khả năng nén bộ nhớ thông qua việc tăng mức độ dư thừa trong bộ nhớ theo cột. Việc thay thế TotalSalesAmount bằng một thước đo sẽ loại bỏ chi phí lưu trữ vì các thước đo được tính toán tại thời điểm truy vấn thay vì được lưu trữ. Cột được tính toán (option B) sẽ tăng mức sử dụng bộ nhớ. Chuyển đổi sang Văn bản (option C) làm tăng mức tiêu thụ bộ nhớ hơn là giảm.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783709928530-rmypyify.png', 'published'),
  ('dp600-127', 'dp-600', 127, 'You have a Microsoft Power BI semantic model.  
  
You plan to implement calculation groups.  
  
You need to create a calculation item that changes the context from the selected date to month-to-date (MTD).  
  
How should you complete the DAX expression?', '[]'::jsonb, ARRAY[]::text[], 'CALCULATE thay đổi bối cảnh bộ lọc, trong khi SELECTEDMEASURE() là trình giữ chỗ nhóm tính toán cho bất kỳ thước đo nào hiện được đánh giá. DATESMTD trả về ngày từ đầu tháng hiện tại đến ngày đã chọn, tạo ra kết quả MTD.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-128', 'dp-600', 128, 'You have a Fabric tenant containing a semantic model named Model1. Model1 contains the following tables.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784276480341-9tffk480.png)  
  
You are designing a Microsoft Power BI report named Report1 that will deliver near-real-time (NRT) shipping data. Report1 will contain data about many shipped packages.  
  
You need to ensure that each table uses the appropriate storage mode to support Report1. The solution must support near-real-time data delivery while maintaining high query performance.  
  
Which storage mode should you select for each table? Each mode may be used once, more than once, or not at all.', '{"statements":[{"id":"fact_package_events","text":"FactPackageEvents:","correctAnswer":"C"},{"id":"dim_package","text":"DimPackage:","correctAnswer":"B"},{"id":"dim_carrier","text":"DimCarrier:","correctAnswer":"B"}],"choices":[{"key":"A","text":"DirectQuery"},{"key":"B","text":"Dual"},{"key":"C","text":"Hybrid"},{"key":"D","text":"Import"}]}'::jsonb, ARRAY['fact_package_events=C', 'dim_package=B', 'dim_carrier=B']::text[], 'Để cung cấp dữ liệu gần như thời gian thực trong khi vẫn duy trì hiệu suất truy vấn cao, bảng dữ kiện (FactPackageEvents) nên sử dụng chính sách làm mới tăng dần với tùy chọn "lấy dữ liệu mới nhất trong thời gian thực khi bật tùy chọn DirectQuery", mà Power BI/Fabric báo cáo nội bộ dưới dạng chế độ lưu trữ Kết hợp: các phân vùng cũ hơn vẫn Nhập để tăng tốc trong khi phân vùng gần đây nhất được cung cấp qua DirectQuery để làm mới. Vì bảng Thực tế kết hợp trộn lẫn các phân vùng Nhập và DirectQuery nên các bảng thứ nguyên liên quan của nó (DimPackage và DimCarrier) phải được đặt thành Chế độ lưu trữ kép để mỗi thứ nguyên có thể hoạt động như Nhập khi được nối với Nhập phân vùng và dưới dạng DirectQuery khi được nối với phân vùng DirectQuery, đây là mẫu tài liệu của Microsoft dành cho các mô hình tổng hợp/kết hợp để tránh các mối quan hệ hạn chế và duy trì hiệu suất truy vấn.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784276480341-9tffk480.png', 'published'),
  ('dp600-129', 'dp-600', 129, 'Solution: You modify the measure to use the `USEROBJECTID()` function.  
  
Does this achieve the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], '`USEROBJECTID()` trả về ID đối tượng Microsoft Entra của người dùng hiện tại thay vì tên chính của người dùng (UPN). `USERPRINCIPALNAME()` là hàm DAX trả về UPN của người dùng.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-130', 'dp-600', 130, 'Solution: You modify the measure to use the `USERPRINCIPALNAME()` function.  
  
Does this achieve the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[], 'Hàm DAX `USERPRINCIPALNAME()` trả về tên chính của người dùng (UPN) tại thời điểm kết nối, do đó thước đo sử dụng nó sẽ trả về UPN của người dùng.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-131', 'dp-600', 131, 'Solution: Create a role in the model.  
  
Does this achieve the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[], 'Vai trò mô hình ngữ nghĩa cung cấp bối cảnh bảo mật cấp hàng cần thiết để đánh giá RLS động. Trong dịch vụ Fabric, `USERNAME()` trả về tên chính của người dùng đã đăng nhập (UPN) trong ngữ cảnh đó.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-132', 'dp-600', 132, 'Solution: Add user objects to the list of objects synchronized by Microsoft Entra Connect.  
  
Does this accomplish the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], '`USERPRINCIPALNAME()` trả về UPN của người dùng đã đăng nhập tại thời điểm kết nối và là hàm DAX rõ ràng để lấy giá trị đó. Việc thay đổi tập hợp đối tượng người dùng được đồng bộ hóa bởi Microsoft Entra Connect không làm thay đổi đánh giá chức năng nhận dạng của mô hình ngữ nghĩa, do đó, nó không đảm bảo rằng thước đo trả về UPN.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-133', 'dp-600', 133, 'HOTSPOT -  
  
You have a Fabric tenant.  
  
You plan to create a Fabric notebook that uses Spark DataFrames to generate Microsoft Power BI visuals. You run the following code.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784205113551-fwn8cwgl.png)  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"The code embeds an existing Power BI report.","correctAnswer":"No"},{"id":"2","text":"The code creates a Power BI report.","correctAnswer":"Yes"},{"id":"3","text":"The code displays a summary of the DateFrame.","correctAnswer":"Yes"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:No', '2:Yes', '3:Yes']::text[], '`QuickVisualize` tạo và hiển thị báo cáo nhanh Power BI mới từ cấu hình DataFrame được cung cấp. Việc nhúng báo cáo hiện có yêu cầu mã định danh báo cáo và lớp `Report`. Hình ảnh được tạo sẽ hiển thị bản tóm tắt dữ liệu DataFrame trong sổ ghi chép.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784205113551-fwn8cwgl.png', 'published'),
  ('dp600-134', 'dp-600', 134, 'You have source data in a folder on a local computer.  

You need to create a solution that will use Fabric to populate a data store. The solution must meet the following requirements:  

Support the use of dataflows to load and append data to the data store.  

Ensure that Delta tables are V-Order optimized and compacted automatically.  

Which type of data store should you use?', '[{"key":"A","text":"a lakehouse"},{"key":"B","text":"an Azure SQL database"},{"key":"C","text":"a warehouse"},{"key":"D","text":"a KQL database"}]'::jsonb, ARRAY['A']::text[], 'Fabric lakehouse chấp nhận Dataflow Gen2 làm đích tải/chắp thêm và mọi công cụ điện toán Fabric ghi vào lakehouse (sổ tay Spark, đường dẫn, luồng dữ liệu) theo mặc định áp dụng tối ưu hóa ghi V-Order, trong khi dịch vụ bảo trì bảng nền của Fabric tự động nén các tệp Delta nhỏ mà không yêu cầu lệnh TỐI ƯU thủ công. warehouse cũng V-Order đầu ra của nó, nhưng nó không phải là mục tiêu tự nhiên cho các kịch bản tải và nối thêm dựa trên luồng dữ liệu được mô tả ở đây, làm cho lakehouse phù hợp tổng thể tốt hơn.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-135', 'dp-600', 135, '$35', '[{"key":"A","text":"spark.read.format(“delta”).load(“Files/ResearchProduct”)"},{"key":"B","text":"spark.sql(“SELECT * FROM Lakehouse1.ResearchProduct ”)"},{"key":"C","text":"spark.sql(“SELECT * FROM Lakehouse1.Tables.ResearchProduct ”)"},{"key":"D","text":"external_table(ResearchProduct)"}]'::jsonb, ARRAY['B']::text[], 'Vì yêu cầu là dữ liệu nghiên cứu phải được trình bày dưới dạng bảng được quản lý trong Lakehouse explorer, nên phím tắt ResearchProduct nằm trong khu vực Bảng của lakehouse và Spark hiển thị lakehouse đính kèm dưới dạng danh mục bằng cách sử dụng tên gồm hai phần đơn giản <LakehouseName>.<TableName>. "Lakehouse1.Tables.ResearchProduct" không phải là cú pháp danh mục hợp lệ (Bảng không phải là bộ định tính lược đồ) và Đường dẫn Tệp/chỉ thích hợp cho dữ liệu thô không được quản lý thay vì lối tắt được đăng ký dưới dạng bảng.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-136', 'dp-600', 136, 'You have a Fabric warehouse containing a table named `SalesOrderDetail`. `SalesOrderDetail` has three columns named `OrderQty`, `ProductID`, and `SalesOrderlD`. `SalesOrderDetail` has one row for every combination of `SalesOrderlD` and `ProductID`.  
  
You need to calculate the proportion of each sales order’s total quantity that each product represents within that sales order.  
  
Which T-SQL statement should you run?', '[{"key":"A","text":"![](https://cdn.examcademy.com/images/questions/1785601571652-jexzdjm6.png)"},{"key":"B","text":"![](https://cdn.examcademy.com/images/questions/1785601573845-zy23fp5y.png)"},{"key":"C","text":"![](https://cdn.examcademy.com/images/questions/1785601576061-nf610zmp.png)"},{"key":"D","text":"![](https://cdn.examcademy.com/images/questions/1785601578177-vjngn35o.png)"}]'::jsonb, ARRAY['D']::text[], '`SUM(OrderQty) OVER (PARTITION BY SalesOrderID)` tính toán tổng số lượng riêng cho từng đơn đặt hàng và no `ORDER BY` có nghĩa là cửa sổ bao gồm mọi hàng theo thứ tự đó. Chia `OrderQty` của mỗi hàng sản phẩm cho tổng số mỗi đơn hàng và nhân với 100 sẽ trả về phần trăm của đơn đặt hàng.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-137', 'dp-600', 137, 'You have a Fabric warehouse that contains a table named Table1. Table1 contains the following data.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784206734055-0axejhue.png)  
  
You need to create a T-SQL statement that meets the following requirements:  
  
- Outputs the item name of each item and returns a null value if the item name is longer than 20 characters.  
- Outputs the PurchaseDate value in the format of МММ dd, yy.  
  
How should you complete the statement?', '[]'::jsonb, ARRAY[]::text[], '`TRY_CAST(item_name AS varchar(20))` là lựa chọn chuyển đổi dung sai được sử dụng để trả về NULL khi tên mục không thể được trình bày trong loại kết quả được yêu cầu. `CONVERT(varchar, purchase_date, 7)` sử dụng kiểu ngày 7, định dạng ngày là `Mon dd, yy`; kiểu 109 và 112 sử dụng các định dạng khác nhau.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784206734055-0axejhue.png', 'published'),
  ('dp600-138', 'dp-600', 138, 'You have the source data model shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784205106828-vzcqt8it.png)  
  
The primary keys for the tables are identified by a key symbol next to the key columns.  
  
You need to create a dimensional data model that enables analysis of order items by date, product, and customer.  
  
What should the solution include?', '[]'::jsonb, ARRAY[]::text[], 'Mối quan hệ thực tế với thứ nguyên phải sử dụng khóa xác định duy nhất từng hàng thứ nguyên. Vì sản phẩm được xác định bằng khóa kinh doanh tổng hợp CompanyID cộng với ProductID, nên hãy tạo khóa kết hợp cho mối quan hệ giữa OrderItem và Sản phẩm. Trong lược đồ hình sao, các thuộc tính gốc mà lẽ ra sẽ tạo thành các nhánh bông tuyết thường không được chuẩn hóa thành các thứ nguyên liên quan; do đó, thuộc tính Công ty thuộc cả thứ nguyên Sản phẩm và Khách hàng. [Microsoft Learn: Understand star schema and the importance for Power BI](https://learn.microsoft.com/en-ie/power-bi/guidance/star-schema)', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784205106828-vzcqt8it.png', 'published'),
  ('dp600-139', 'dp-600', 139, 'You have a Microsoft Entra tenant named contoso.com and an external user named [email protected].  
  
You have a Fabric workspace named Workspace1 that contains a semantic model named Model1 and a report named Report1.  
  
[email protected] has access to Report1.  
  
You enable read-write access on the XML for Analysis (XMLA) endpoint to provide advanced semantic modeling by using DAX Studio.  
  
You need to give [email protected] a URL that enables connectivity by using DAX Studio.  
  
How should you complete the URL?', '[]'::jsonb, ARRAY[]::text[], 'Máy khách điểm cuối XMLA kết nối với không gian làm việc bằng URL ở định dạng đối tượng thuê/không gian làm việc. Khách B2B truy cập vào không gian làm việc trong một đối tượng thuê khác phải chỉ định tên của đối tượng thuê tài nguyên đó trong URL. Do đó, điểm cuối sử dụng `contoso.com` và `Workspace1`; tên báo cáo hoặc mô hình ngữ nghĩa không phải là một phần của URL này.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-140', 'dp-600', 140, 'You have a Fabric workspace containing a warehouse named DW1. DW1 includes the following tables and columns.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784206736566-rpn6toz2.png)  
  
You need to summarize order quantities by year and product. The solution must include the yearly total of order quantities for all products on each row.  
  
How should you complete the T-SQL statement?', '[]'::jsonb, ARRAY[]::text[], 'YEAR trích xuất năm nhóm từ ModifiedDate. ROLLUP với năm đầu tiên và tên sản phẩm thứ hai trả về các hàng chi tiết năm/sản phẩm cộng với một hàng tổng phụ mỗi năm trong đó Tên sản phẩm là NULL và SUM(OrderQty) bao gồm mọi sản phẩm trong năm đó.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784206736566-rpn6toz2.png', 'published'),
  ('dp600-141', 'dp-600', 141, 'You have a Microsoft Power BI semantic model that includes a table named Date. Date contains the following data.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784226204860-822k3ov1.png)  
  
You need to ensure that visuals using the Date table display in chronological order while minimizing administrative effort.  
  
What should you do?', '[{"key":"A","text":"Sort the Month Number column by Column."},{"key":"B","text":"Sort the visuals by using the Sort ascending option on Fiscal Month."},{"key":"C","text":"Sort the Fiscal Month column by Column."},{"key":"D","text":"Sort the Date table by Column."}]'::jsonb, ARRAY['C']::text[], 'Đặt cột Tháng tài chính để sắp xếp theo cột Số tháng. Các giá trị tháng bằng số cung cấp thứ tự thời gian cho tên tháng văn bản và cài đặt sắp xếp ở cấp độ mô hình áp dụng cho mọi hình ảnh sử dụng Tháng tài chính. Tài liệu Microsoft Learn sử dụng cột số tháng để sắp xếp tên tháng theo trình tự thời gian.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784226204860-822k3ov1.png', 'published'),
  ('dp600-142', 'dp-600', 142, 'You have a Fabric tenant that contains two lakehouses. You are building a dataflow that combines data from the lakehouses. The applied steps for one query in the dataflow are shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1785752056168-fhto1y2c.png)', '[]'::jsonb, ARRAY[]::text[], 'Bước không gấp làm cho các phép biến đổi phụ thuộc còn lại được đánh giá bên ngoài nguồn dữ liệu. Viết hoa mỗi từ là một phép chuyển đổi không gấp, do đó, chỉ phần trước được gấp và bước tùy chỉnh Đã thêm sau mới thực thi trong công cụ Microsoft Power Query.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1785752056168-fhto1y2c.png', 'published'),
  ('dp600-143', 'dp-600', 143, 'You have a Fabric tenant that contains a lakehouse named Lakehouse1. Lakehouse1 contains a subfolder named Subfolder1 that contains CSV files.  

You need to convert the CSV files into the delta format that has V-Order optimization enabled.  

What should you do from Lakehouse explorer?', '[{"key":"A","text":"Use the Load to Tables feature."},{"key":"B","text":"Create a new shortcut in the Files section."},{"key":"C","text":"Create a new shortcut in the Tables section."},{"key":"D","text":"Use the Optimize feature."}]'::jsonb, ARRAY['A']::text[], 'Tính năng ''Tải vào bảng'' trong Lakehouse explorer tự động chuyển đổi tệp CSV sang định dạng Delta Lake với tính năng tối ưu hóa V-Order được bật theo mặc định. Khi sử dụng Tải vào bảng, hệ thống sẽ tạo các bảng Delta được tối ưu hóa với V-Order, giúp cải thiện hiệu suất truy vấn. Tính năng Tối ưu hóa áp dụng cho các bảng hiện có và các phím tắt không thực hiện chuyển đổi định dạng mong muốn.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-144', 'dp-600', 144, 'You have a Fabric tenant.  
  
You are creating an Azure Data Factory pipeline.  
  
You have a stored procedure that returns the number of active customers and their average sales for the current month.  
  
You need to add an activity that will execute the stored procedure in a warehouse. The returned values must be available to the downstream activities of the pipeline.  
  
Which type of activity should you add?', '[{"key":"A","text":"Switch"},{"key":"B","text":"Copy data"},{"key":"C","text":"Append variable"},{"key":"D","text":"Lookup"}]'::jsonb, ARRAY['D']::text[], 'Hoạt động Tra cứu là lựa chọn thích hợp để thực thi một quy trình được lưu trữ và cung cấp kết quả của nó cho các hoạt động xuôi dòng trong quy trình Data Factory. Nó có thể thực thi các truy vấn hoặc thủ tục được lưu trữ và trả về kết quả (giá trị đơn hoặc mảng) mà các hoạt động xuôi dòng như Sao chép, ForEach hoặc các hoạt động luồng điều khiển khác có thể sử dụng. Biến chuyển đổi và nối thêm phục vụ các mục đích luồng điều khiển khác nhau.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-145', 'dp-600', 145, 'You have a Fabric tenant that contains a workspace named Workspace1. Workspace1 contains a lakehouse named Lakehouse1 and a warehouse named Warehouse1.  
  
You need to create a new table in Warehouse1 named POSCustomers by querying the customer table in Lakehouse1.  
  
How should you complete the T-SQL statement?', '[]'::jsonb, ARRAY[]::text[], 'Fabric Warehouse sử dụng TẠO BẢNG NHƯ CHỌN (CTAS) để tạo và điền vào bảng từ truy vấn CHỌN. Warehouse có thể truy vấn bảng Lakehouse trong cùng một không gian làm việc bằng cách sử dụng tên ba phần của nó, `lakehouse1.dbo.customer`; `dbo.Customer` sẽ phân giải trong Warehouse hiện tại.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-146', 'dp-600', 146, 'You have a Fabric tenant that uses a Microsoft Power BI Premium capacity.  

You need to enable scale-out for a semantic model.  

What should you do first?', '[{"key":"A","text":"At the semantic model level, set Large dataset storage format to Off."},{"key":"B","text":"At the tenant level, set Create and use Metrics to Enabled."},{"key":"C","text":"At the semantic model level, set Large dataset storage format to On."},{"key":"D","text":"At the tenant level, set Data Activator to Enabled."}]'::jsonb, ARRAY['C']::text[], 'Kích hoạt định dạng lưu trữ tập dữ liệu lớn ở cấp mô hình ngữ nghĩa là bước tiên quyết đầu tiên để mở rộng quy mô trong Power BI Premium. Định dạng lưu trữ này cho phép mô hình sử dụng các tính năng dung lượng cao cấp bao gồm các bản sao cho các tình huống có tính tương tranh cao. Các tùy chọn khác (tắt định dạng lưu trữ, số liệu và Trình kích hoạt dữ liệu) sẽ tắt chức năng hoặc giải quyết các khả năng không liên quan.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-147', 'dp-600', 147, '$35', '[{"key":"A","text":"spark.read.format(“delta”).load(“Tables/ResearchProduct”)"},{"key":"B","text":"spark.read.format(“delta”).load(“Files/ResearchProduct”)"},{"key":"C","text":"external_table(‘Tables/ResearchProduct)"},{"key":"D","text":"external_table(ResearchProduct)"}]'::jsonb, ARRAY['A']::text[], 'Khi một lối tắt được tạo trong phần Bảng của lakehouse và trỏ đến dữ liệu có định dạng Delta, nó có thể được truy cập thông qua các điểm cuối SQL và Spark bằng cách sử dụng đường dẫn Tables/shortcut_name. Có thể truy cập phím tắt tới storage1 có tên ResearchProduct, được tạo trong Lakehouse1 thông qua spark.read.format(''delta'').load(''Tables/ResearchProduct''). Cú pháp này là bắt buộc để truy cập điểm cuối SQL theo tài liệu về phím tắt và bảo mật Fabric.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-148', 'dp-600', 148, 'You have a Fabric tenant that contains a complex semantic model. The model is based on a star schema and contains many tables, including a fact table named Sales.  

You need to create a diagram of the model. The diagram must contain only the Sales table and related tables.  

What should you use from Microsoft Power BI Desktop?', '[{"key":"A","text":"data categories"},{"key":"B","text":"Data view"},{"key":"C","text":"Model view"},{"key":"D","text":"DAX query view"}]'::jsonb, ARRAY['C']::text[], 'Chế độ xem Mô hình trong Máy tính để bàn Power BI được sử dụng để tạo sơ đồ của các mô hình ngữ nghĩa, trực quan hóa các mối quan hệ bảng và phân tích các lược đồ sao phức tạp. Nó cho phép bạn xem và sửa đổi cấu trúc mô hình, bao gồm lọc để chỉ hiển thị bảng Bán hàng và các bảng thứ nguyên liên quan của nó. Chế độ xem dữ liệu và chế độ xem truy vấn DAX phục vụ các mục đích khác nhau (kiểm tra dữ liệu và viết truy vấn), trong khi danh mục dữ liệu là thuộc tính cột chứ không phải công cụ trực quan hóa.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-149', 'dp-600', 149, 'You have a Fabric tenant that contains a semantic model. The model contains 15 tables.  
  
You need to programmatically change each column that ends in the word Key to meet the following requirements:  
  
• Hide the column.  

• Set Nullable to False  

• Set Summarize By to None.  

• Set Available in MDX to False.  

• Mark the column as a key column.  
  
What should you use?', '[{"key":"A","text":"Microsoft Power BI Desktop"},{"key":"B","text":"ALM Toolkit"},{"key":"C","text":"Tabular Editor"},{"key":"D","text":"DAX Studio"}]'::jsonb, ARRAY['C']::text[], 'Tabular Editor là công cụ duy nhất cho phép sửa đổi hàng loạt các thuộc tính mô hình ngữ nghĩa theo chương trình trên nhiều cột bằng cách sử dụng tập lệnh C#. Máy tính để bàn Power BI thiếu khả năng tự động hóa hàng loạt; Bộ công cụ ALM được thiết kế để kiểm soát phiên bản thay vì sửa đổi cấu trúc; DAX Studio tập trung vào tối ưu hóa truy vấn. Tabular Editor cung cấp quyền truy cập trực tiếp vào các thuộc tính siêu dữ liệu nâng cao và có thể lưu các thay đổi trực tiếp vào mô hình.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-150', 'dp-600', 150, 'You have a Microsoft Power BI Premium Per User (PPU) workspace that contains a semantic model.  
  
You have an Azure App Service app named App1 that modifies row-level security (RLS) for the model by using the XMLA endpoint.  
  
App1 requires users to sign in by using their Microsoft Entra credentials to access the XMLA endpoint.  
  
You need to configure App1 to use a service account to access the model.  
  
What should you do first?', '[{"key":"A","text":"Add a managed identity to the workspace."},{"key":"B","text":"Modify the XMLA Endpoint setting."},{"key":"C","text":"Upgrade the workspace to Premium capacity."},{"key":"D","text":"Add a managed identity to App1."}]'::jsonb, ARRAY['C']::text[], 'Xác thực Service principal (tài khoản dịch vụ) đối với điểm cuối XMLA yêu cầu không gian làm việc phải nằm trong dung lượng Premium (P SKU) hoặc Fabric (F SKU) — Không gian làm việc Premium Per User chỉ hỗ trợ đăng nhập Microsoft Entra tương tác, cho mỗi người dùng qua XMLA. Vì App1 phải ngừng yêu cầu mỗi người dùng đăng nhập và thay vào đó sử dụng tài khoản dịch vụ nên không gian làm việc phải được chuyển từ PPU sang dung lượng Premium trước khi có thể thêm và sử dụng managed identity để kết nối.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-151', 'dp-600', 151, 'You are analyzing customer purchases in a Fabric notebook by using PySpark.  

You have the following DataFrames:  

transactions: Contains five columns named transaction_id, customer_id, product_id, amount, and date and has 10 million rows, with each row representing a transaction. customers: Contains customer details in 1,000 rows and three columns named customer_id, name, and country.  

You need to join the DataFrames on the customer_id column. The solution must minimize data shuffling.  

You write the following code.  

from pyspark.sql import functions as F  

results =  

Which code should you run to populate the results DataFrame?', '[{"key":"A","text":"transactions.join(F.broadcast(customers), transactions.customer_id == customers.customer_id)"},{"key":"B","text":"transactions.join(customers, transactions.customer_id == customers.customer_id).distinct()"},{"key":"C","text":"transactions.join(customers, transactions.customer_id == customers.customer_id)"},{"key":"D","text":"transactions.crossJoin(customers).where(transactions.customer_id == customers.customer_id)"}]'::jsonb, ARRAY['A']::text[], 'Sử dụng F.broadcast(customers) với DataFrame khách hàng 1.000 hàng nhỏ hơn là giải pháp tối ưu để giảm thiểu xáo trộn dữ liệu. Việc phát sóng sẽ sao chép bảng nhỏ hơn trên tất cả các nút cụm, cho phép mỗi nút thực hiện kết nối cục bộ trên phân vùng giao dịch của nó mà không cần di chuyển dữ liệu mạng. Tham gia chéo (D) sẽ tạo ra 10 tỷ hàng không hiệu quả. Một phép nối đơn giản (C) sẽ kích hoạt xáo trộn dữ liệu đầy đủ và.distinct() (B) sẽ thêm chi phí không cần thiết.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-152', 'dp-600', 152, 'Solution: You use the following PySpark expression:  
  
```python  
df.explain()  
```  
  
Does this satisfy the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], '`DataFrame.explain()` in các kế hoạch truy vấn logic và vật lý để gỡ lỗi thay vì tính toán thống kê dữ liệu. `DataFrame.describe()` tính toán số lượng, giá trị trung bình, độ lệch chuẩn, mức tối thiểu và tối đa cho tất cả các cột số và chuỗi khi các cột no được chỉ định.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-153', 'dp-600', 153, 'Solution: You use the following PySpark expression:  
  
```python  
df.show()  
```  
  
Does this achieve the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], '`DataFrame.show()` in các hàng đầu tiên của DataFrame để kiểm tra; nó không tính toán độ lệch tối thiểu, tối đa, trung bình hoặc tiêu chuẩn cho các cột của nó. Cần phải tổng hợp thống kê hoặc một thao tác tóm tắt để tạo ra các giá trị đó.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-154', 'dp-600', 154, 'Solution: You use this PySpark expression:  
  
```python  
df.summary()  
```  
  
Does this achieve the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[], 'PySpark `DataFrame.summary()` tính toán số liệu thống kê cho tất cả các cột số và chuỗi theo mặc định. Đầu ra mặc định của nó bao gồm giá trị trung bình, độ lệch chuẩn, giá trị tối thiểu và tối đa, do đó nó đáp ứng yêu cầu. Đối với các cột chuỗi, số liệu thống kê không áp dụng được, chẳng hạn như giá trị trung bình và độ lệch chuẩn, sẽ được trả về là null.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-155', 'dp-600', 155, 'Solution: Use the following PySpark expression:  
  
```python  
df.explain().show()  
```  
  
Does this satisfy the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], '`DataFrame.explain()` đưa ra các kế hoạch thực thi vật lý và logic của DataFrame để gỡ lỗi; nó không tính toán số liệu thống kê cột. PySpark `DataFrame.describe()` tính toán số lượng, giá trị trung bình, độ lệch chuẩn, mức tối thiểu và tối đa cho tất cả các cột số và chuỗi khi các cột no được chỉ định.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-156', 'dp-600', 156, 'Solution: You use the following PySpark expression:  
  
```python  
df.describe().show()  
```  
  
Does this achieve the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[], 'PySpark `DataFrame.describe()` tạo ra số liệu thống kê về số lượng, giá trị trung bình, độ lệch chuẩn, tối thiểu và tối đa. Khi các cột no được chỉ định, nó sẽ tính toán các thống kê mô tả này cho mọi cột số hoặc chuỗi trong DataFrame.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-157', 'dp-600', 157, 'You have a Fabric tenant that contains a warehouse named DW1 and a lakehouse named LH1. DW1 contains a table named Sales.Product. LH1 contains a table named Sales.Orders.  
  
You plan to schedule an automated process that will create a new point-in-time (PIT) table named Sales.ProductOrder in DW1. Sales.ProductOrder will be built by using the results of a query that will join Sales.Product and Sales.Orders.  
  
You need to ensure that the types of columns in Sales.ProductOrder match the column types in the source tables. The solution must minimize the number of operations required to create the new table.  
  
Which operation should you use?', '[{"key":"A","text":"INSERT INTO"},{"key":"B","text":"CREATE TABLE AS SELECT (CTAS)"},{"key":"C","text":"CREATE TABLE AS CLONE OF"},{"key":"D","text":"CREATE MATERIALIZED VIEW AS SELECT"}]'::jsonb, ARRAY['B']::text[], 'TẠO BẢNG NHƯ CHỌN (CTAS) là hoạt động tối ưu cho kịch bản này. Nó tạo một bảng mới trực tiếp từ kết quả truy vấn—bao gồm cả các phép nối—và tự động suy ra các loại cột từ bảng nguồn, đảm bảo khớp loại mà không cần các bước bổ sung. CTAS giảm thiểu các hoạt động bằng cách kết hợp việc tạo bảng, tải dữ liệu và định nghĩa lược đồ trong một câu lệnh duy nhất.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-158', 'dp-600', 158, 'You plan to deploy Microsoft Power BI items by using Fabric deployment pipelines. You have a deployment pipeline that contains three stages named Development, Test, and Production. A workspace is assigned to each stage.  

You need to provide Power BI developers with access to the pipeline. The solution must meet the following requirements:  

Ensure that the developers can deploy items to the workspaces for Development and Test.  

Prevent the developers from deploying items to the workspace for Production.  

Follow the principle of least privilege.  

Which three levels of access should you assign to the developers? Each correct answer presents part of the solution.  

NOTE: Each correct answer is worth one point.', '[{"key":"A","text":"Build permission to the production semantic models"},{"key":"B","text":"Admin access to the deployment pipeline"},{"key":"C","text":"Viewer access to the Development and Test workspaces"},{"key":"D","text":"Viewer access to the Production workspace"},{"key":"E","text":"Contributor access to the Development and Test workspaces"},{"key":"F","text":"Contributor access to the Production workspace"}]'::jsonb, ARRAY['B', 'D', 'E']::text[], 'Ba cấp độ truy cập triển khai các yêu cầu về quy trình triển khai: Quyền truy cập của quản trị viên vào quy trình triển khai (B) cho phép nhà phát triển quản lý và thực hiện triển khai qua các giai đoạn, quyền truy cập của Người xem vào không gian làm việc Sản xuất (D) hạn chế nhà phát triển ở chế độ chỉ đọc, ngăn chặn hoạt động triển khai và quyền truy cập của Người đóng góp vào không gian làm việc Phát triển và Thử nghiệm (E) cho phép khả năng triển khai đầy đủ. Quyền xây dựng (A), quyền truy cập của Người xem vào Dev/Test (C) và Người đóng góp cho sản xuất (F) mâu thuẫn với các nguyên tắc đặc quyền tối thiểu.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-159', 'dp-600', 159, 'You have a Fabric workspace named Workspace1 that contains a semantic model and a report named Report1. Workspace1 is connected to a Git repository named Git1.  
  
You have a deployment pipeline with three stages named Development, Test, and Production.  
  
You need to publish Report1 to the Production stage.  
  
What should you do?', '[{"key":"A","text":"Run a Git commit."},{"key":"B","text":"Run a full deployment."},{"key":"C","text":"Sync Workspace1 with Git1."},{"key":"D","text":"Run a backward deployment."}]'::jsonb, ARRAY['B']::text[], 'Quy trình triển khai kết cấu thúc đẩy nội dung không gian làm việc qua các giai đoạn phát triển, thử nghiệm và sản xuất. Triển khai đầy đủ sẽ triển khai nội dung đến giai đoạn mục tiêu. Các hoạt động đồng bộ hóa và cam kết Git quản lý việc kiểm soát phiên bản thay vì quảng bá quy trình và việc triển khai ngược sẽ chuyển nội dung từ giai đoạn sau sang giai đoạn trước đó.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-160', 'dp-600', 160, 'You have a Fabric workspace named Workspace1 that includes a lakehouse named Lakehouse1 and a user named User1.  
  
You need to ensure that User1 can read all data in Lakehouse1. The solution must adhere to the principle of least privilege.  
  
Which two actions should you take? Each correct answer represents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Assign the Contributor role to User1."},{"key":"B","text":"Select Read all Apache Spark."},{"key":"C","text":"Assign the Viewer role to User1."},{"key":"D","text":"Share Lakehouse1 by using item permissions."},{"key":"E","text":"Assign the Member role to User1."}]'::jsonb, ARRAY['B', 'D']::text[], 'Chia sẻ lakehouse thông qua quyền đối với vật phẩm sẽ cấp quyền Đọc cơ sở cần thiết cho mục cụ thể đó. Việc chọn **Đọc tất cả bằng Apache Spark** còn cho phép đọc tất cả dữ liệu lakehouse thông qua Apache Spark, API OneLake và trình thám hiểm Lakehouse. Điều này tránh việc cấp quyền truy cập không gian làm việc rộng rãi hoặc quyền ghi.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-161', 'dp-600', 161, 'You have a Fabric tenant that contains a lakehouse named LH1.  
  
You need to deploy a new semantic model. The solution must meet these requirements:  
  
- Support complex calculated columns that include aggregate functions, calculated tables, and Multidimensional Expressions (MDX) user hierarchies.  
- Minimize page rendering times.  
  
How should you configure the model?', '[]'::jsonb, ARRAY[]::text[], 'Import mode hỗ trợ bộ tính năng mô hình ngữ nghĩa đầy đủ cần thiết cho các cột được tính toán phức tạp, bảng được tính toán và phân cấp người dùng MDX. Việc bật bộ nhớ đệm truy vấn có thể giảm thời gian hiển thị trang báo cáo bằng cách cung cấp các kết quả truy vấn lặp lại từ bộ nhớ đệm.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-162', 'dp-600', 162, 'You have a Fabric tenant that contains a lakehouse named Lakehouse’. Lakehouse1 contains a table named Tablet.  

You are creating a new data pipeline.  

You plan to copy external data to Table’. The schema of the external data changes regularly.  

You need the copy operation to meet the following requirements:  

Replace Table1 with the schema of the external data.  

Replace all the data in Table1 with the rows in the external data.  

You add a Copy data activity to the pipeline.  

What should you do for the Copy data activity?', '[{"key":"A","text":"From the Source tab, add additional columns."},{"key":"B","text":"From the Destination tab, set Table action to Overwrite."},{"key":"C","text":"From the Settings tab, select Enable staging."},{"key":"D","text":"From the Source tab, select Enable partition discovery."},{"key":"E","text":"From the Source tab, select Recursively."}]'::jsonb, ARRAY['B']::text[], 'Đặt tác vụ Bảng thành ''Ghi đè'' trong tab Đích của hoạt động Sao chép dữ liệu sẽ thay thế cả lược đồ và tất cả dữ liệu trong bảng. Tùy chọn Ghi đè loại bỏ cấu trúc bảng và dữ liệu hiện có, sau đó tạo một bảng mới khớp với lược đồ nguồn và điền dữ liệu bên ngoài vào bảng đó. Đây là cách tiếp cận duy nhất đạt được cả việc thay thế lược đồ và thay thế dữ liệu hoàn chỉnh.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-163', 'dp-600', 163, 'You have a Fabric tenant that contains a warehouse. The warehouse uses row-level security (RLS).  

You create a Direct Lake semantic model that uses the Delta tables and RLS of the warehouse.  

When users interact with a report built from the model, which mode will be used by the DAX queries?', '[{"key":"A","text":"DirectQuery"},{"key":"B","text":"Dual"},{"key":"C","text":"Direct Lake"},{"key":"D","text":"Import"}]'::jsonb, ARRAY['A']::text[], 'Bảo mật cấp hàng được xác định trên Warehouse chỉ có thể được thực thi bằng công cụ SQL. Công cụ này Direct Lake bỏ qua khi đọc các tệp sàn gỗ Delta trực tiếp từ OneLake. Để đảm bảo các quy tắc RLS được tôn trọng, Fabric sẽ tự động chuyển các truy vấn DAX của mô hình ngữ nghĩa về chế độ DirectQuery dựa trên điểm cuối phân tích SQL bất cứ khi nào warehouse cơ bản được định cấu hình RLS.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-164', 'dp-600', 164, 'You have a Fabric tenant that contains the semantic model shown in this exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1785752210280-o4beerhf.png)', '[]'::jsonb, ARRAY[]::text[], '**Hành vi Direct Lake** của mô hình được đặt thành Chỉ Direct Lake, vô hiệu hóa hoàn toàn dự phòng thành DirectQuery: mọi truy vấn đều được trả lời ở chế độ Direct Lake và dữ liệu không thể tải sẽ trả về lỗi thay vì chuyển đổi âm thầm. **Vai trò (0)** nghĩa là tồn tại các vai trò mô hình ngữ nghĩa no, do đó, cả bảo mật cấp hàng và cấp đối tượng đều không được xác định.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1785752210280-o4beerhf.png', 'published'),
  ('dp600-165', 'dp-600', 165, 'You have a Fabric tenant containing a data warehouse named DW1. DW1 includes a table named DimCustomer, with the fields shown here.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784206194971-cthlihyn.png)  
  
You need to identify duplicate email addresses in DimCustomer, returning no more than 1,000 records.  
  
Which four T-SQL statements should be run in sequence?', '{"statements":[{"id":"1","text":"1","correctAnswer":"A"},{"id":"2","text":"2","correctAnswer":"C"},{"id":"3","text":"3","correctAnswer":"B"},{"id":"4","text":"4","correctAnswer":"F"}],"choices":[{"key":"A","text":"SELECT TOP(1000) CustomerAltKey, COUNT(*)"},{"key":"B","text":"GROUP BY CustomerAltKey"},{"key":"C","text":"FROM DimCustomer"},{"key":"D","text":"SELECT CustomerAltKey, COUNT(*)"},{"key":"E","text":"LIMIT 1000"},{"key":"F","text":"HAVING COUNT(*) > 1"},{"key":"G","text":"WHERE COUNT(*) > 1"}]}'::jsonb, ARRAY['1=A', '2=C', '3=B', '4=F']::text[], 'Các giá trị email trùng lặp được xác định bằng cách nhóm trên CustomerAltKey và chỉ giữ lại các nhóm có số lượng vượt quá một. T-SQL sử dụng mệnh đề HAVING cho các bộ lọc tổng hợp và TOP (1000) giới hạn kết quả ở tối đa 1.000 hàng.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784206194971-cthlihyn.png', 'published'),
  ('dp600-166', 'dp-600', 166, 'You have a Fabric tenant containing a workspace named Workspace_DEV. Workspace_DEV contains the semantic models shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784206613106-fdcjpa2y.png)  
  
Workspace_DEV contains the dataflows shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784206617035-v2sy13xf.png)  
  
You create a workspace named Workspace_TEST.  
  
You create a deployment pipeline named Pipeline1 to move items from Workspace_DEV to Workspace_TEST.  
  
You run Pipeline1.  
  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.', '{"statements":[{"id":"1","text":"DF1 will be deployed to Workspace_TEST.","correctAnswer":"Yes"},{"id":"2","text":"Data from Model1 will be deployed to Workspace_TEST.","correctAnswer":"No"},{"id":"3","text":"The scheduled refresh policy for Model1 will be deployed to Workspace_TEST.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:Yes', '2:No', '3:No']::text[], 'Quy trình triển khai triển khai các mục Dataflow Gen1 được hỗ trợ, do đó DF1 được sao chép vào không gian làm việc đích. Quá trình triển khai sao chép siêu dữ liệu thay vì dữ liệu mục, do đó dữ liệu của Model1 không được sao chép. Lịch làm mới của mô hình ngữ nghĩa là một thuộc tính mục mà quy trình triển khai không sao chép.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784206613106-fdcjpa2y.png', 'published'),
  ('dp600-167', 'dp-600', 167, '$35', '[{"key":"A","text":"a data lake"},{"key":"B","text":"a warehouse"},{"key":"C","text":"a lakehouse"},{"key":"D","text":"an external Hive metastore"}]'::jsonb, ARRAY['C']::text[], 'lakehouse là kho lưu trữ dữ liệu thích hợp cho trường hợp này vì nó hỗ trợ cả lưu trữ dữ liệu bán cấu trúc và không cấu trúc cùng với các bảng Delta có cấu trúc. Các yêu cầu kỹ thuật rõ ràng yêu cầu hỗ trợ cho dữ liệu bán cấu trúc và phi cấu trúc, vốn là điểm mạnh cốt lõi của lakehouse. warehouse không thể xử lý dữ liệu bán cấu trúc, hồ dữ liệu thiếu khả năng truy vấn quan hệ và kho dữ liệu Hive không phải là tùy chọn lưu trữ dữ liệu Fabric.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-168', 'dp-600', 168, 'You have a Fabric tenant that contains a workspace named Workspace1. Workspace1 includes a lakehouse named LH1 and a warehouse named DW1. LH1 has a table named signindata in the dbo schema.  
  
You need to create a stored procedure in DW1 that deduplicates the data in the signindata table.  
  
How should you complete the T-SQL statement?', '[]'::jsonb, ARRAY[]::text[], 'BEGIN và END phân định nội dung thủ tục được lưu trữ. DISTINCT chỉ trả về các kết hợp duy nhất của PersonID, FirstName và LastName, do đó loại bỏ các hàng kết quả trùng lặp. GROUP BY sẽ yêu cầu một danh sách nhóm, trong khi TOP (100) PERCENT WITH TIES không loại bỏ các hàng trùng lặp.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-169', 'dp-600', 169, 'You have a Microsoft Power BI semantic model that contains measures. The measures use multiple CALCULATE functions and a FILTER function.  
  
You are evaluating the performance of the measures.  
  
In which use case will replacing the FILTER function with the KEEPFILTERS function reduce execution time?', '[{"key":"A","text":"when the FILTER function uses a nested calculate function"},{"key":"B","text":"when the FILTER function references a measure"},{"key":"C","text":"when the FILTER function references columns from multiple tables"},{"key":"D","text":"when the FILTER function references a column from a single table that uses Import mode"}]'::jsonb, ARRAY['D']::text[], 'Biểu thức Boolean (được KEEPFILTERS bao bọc) chỉ có thể thay thế hàm LỌC khi nó tham chiếu đến một cột từ một bảng duy nhất, không tham chiếu một thước đo và không yêu cầu TÍNH TOÁN lồng nhau — các hạn chế loại trừ các tùy chọn A, B và C. Khi các điều kiện đó được đáp ứng trên một cột từ bảng Chế độ nhập, công cụ có thể lọc trực tiếp kho lưu trữ cột trong bộ nhớ thay vì cụ thể hóa bảng trung gian, đây là nơi mang lại hiệu suất.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-170', 'dp-600', 170, 'You have a Fabric workspace named Workspace1.  
  
You have a GitHub repository named Repo1.  
  
You need to connect Workspace1 to Repo1''s `main` branch.  
  
Which information must you provide?', '[{"key":"A","text":"a shared access signature (SAS) token and the branch name of Repo1"},{"key":"B","text":"a personal access token (PAT) and the URL of Repo1"},{"key":"C","text":"an access key and the branch name of Repo1"},{"key":"D","text":"an access key and the URL of Repo1"}]'::jsonb, ARRAY['B']::text[], 'Fabric kết nối với GitHub bằng cách sử dụng mã thông báo truy cập cá nhân GitHub (PAT) để xác thực và URL kho lưu trữ để xác định kho lưu trữ. Mã thông báo SAS và khóa truy cập không phải là phương thức xác thực GitHub.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-171', 'dp-600', 171, 'You have a Fabric tenant containing a warehouse named Warehouse1. Warehouse1 contains three schemas named schemaA, schemaB, and schemaC.  
  
You need to ensure that a user named User1 can truncate tables in schemaA only. How should you complete the T-SQL statement?', '[]'::jsonb, ARRAY[]::text[], 'BẢNG TRUNCATE yêu cầu quyền THAY ĐỔI trên bảng. Việc cấp ALTER trên SCHEMA::schemaA sẽ áp dụng quyền đó cho các bảng trong lược đồA, trong khi lược đồB và lược đồC nhận được sự cấp phép đó của no.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-172', 'dp-600', 172, 'You have a Fabric tenant that contains a lakehouse named Lakehouse1.  
  
Readings from 100 IoT devices are appended to a Delta table in Lakehouse1. Each reading set is approximately 25 KB, and approximately 10 GB of data is received daily. All table and SparkSession settings use their defaults.  
  
Queries are slow to execute, and the lakehouse storage contains data and log files that are no longer used.  
  
You need to remove files that are no longer used and combine small files into larger files with a target size of 1 GB per file.  
  
What should you do? Each action may be used once, more than once, or not at all.', '{"statements":[{"id":"remove_files","text":"Remove the files:","correctAnswer":"C"},{"id":"combine_files","text":"Combine the files:","correctAnswer":"E"}],"choices":[{"key":"A","text":"Set the autoCompact table setting."},{"key":"B","text":"Set the optimizeWrite table setting."},{"key":"C","text":"Run the VACUUM command on a schedule."},{"key":"D","text":"Set the autoCompact SparkSession setting."},{"key":"E","text":"Run the OPTIMIZE command on a schedule."},{"key":"F","text":"Set the parallelDelete SparkSession setting."}]}'::jsonb, ARRAY['remove_files=C', 'combine_files=E']::text[], 'VACUUM xóa vĩnh viễn các tệp dữ liệu Delta được tham chiếu no lâu hơn và đã vượt qua ngưỡng lưu giữ. OPTIMIZE nén các tệp nhỏ thành các tệp lớn hơn để giảm phân mảnh và cải thiện hiệu suất đọc; việc nhập định kỳ đảm bảo chạy cả hai lệnh bảo trì theo lịch trình.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-173', 'dp-600', 173, 'You have a Fabric tenant with three users named User1, User2, and User3. The tenant has a security group named Group1, and User1 and User3 belong to Group1.  
  
The tenant contains the workspaces shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784206719923-5gu4js35.png)  
  
The tenant contains the domains shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784206722190-tw0hd5t9.png)  
  
User1 creates a new workspace named Workspace3.  
  
You set Domain1 as Group1’s default domain.  
  
For each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.', '{"statements":[{"id":"1","text":"User2 is assigned the Contributor role for Workspace3.","correctAnswer":"No"},{"id":"2","text":"User3 is assigned the Viewer role for Workspace3.","correctAnswer":"No"},{"id":"3","text":"User3 is assigned the Contributor role for Workspace1.","correctAnswer":"No"}],"choices":[{"key":"Yes","text":"Yes"},{"key":"No","text":"No"}]}'::jsonb, ARRAY['1:No', '2:No', '3:No']::text[], 'Miền mặc định chỉ định các không gian làm việc đủ điều kiện cho miền Fabric; nó không gán vai trò không gian làm việc. Mặc dù các thành viên nhóm được chỉ định có thể trở thành người đóng góp miền cho các không gian làm việc được chỉ định thông qua cơ chế miền mặc định, nhưng người đóng góp miền không giống như vai trò Người đóng góp hoặc Người xem của không gian làm việc. Do đó, cả User2 và User3 đều không nhận được vai trò không gian làm việc trong Workspace3 và User3 đều không nhận được vai trò Người đóng góp no trong Workspace1.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784206719923-5gu4js35.png', 'published'),
  ('dp600-174', 'dp-600', 174, 'Solution: Run the following Spark SQL statement:  
  
```sql  
DESCRIBE HISTORY customer -  
```  
  
Does this achieve the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[], '`DESCRIBE HISTORY` hiển thị lịch sử giao dịch của bảng Delta. Hồ sơ hoạt động của nó có thể hiển thị các hoạt động bảo trì, chẳng hạn như `OPTIMIZE` và `VACUUM`, cho phép xác định hoạt động bảo trì trên bảng. [Delta table maintenance in Microsoft Fabric](https://learn.microsoft.com/en-us/fabric/data-engineering/delta-lake-table-maintenance)', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-175', 'dp-600', 175, 'Solution: You run the following Spark SQL statement:  
  
```sql  
REFRESH TABLE customer  
```  
  
Does this satisfy the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], '`REFRESH TABLE` vô hiệu hóa dữ liệu và siêu dữ liệu được lưu trong bộ nhớ đệm để các truy vấn tiếp theo sử dụng trạng thái bảng hiện tại. Nó không cung cấp lịch sử nhiệm vụ bảo trì hoặc cho biết liệu các hoạt động bảo trì có được thực hiện trên bảng Delta hay không.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-176', 'dp-600', 176, 'Solution: Run the following Spark SQL statement:  
  
```sql  
EXPLAIN TABLE customer -  
```  
  
Does this achieve the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], 'Lịch sử bảo trì bảng Delta có sẵn từ nhật ký giao dịch Delta thông qua `DESCRIBE HISTORY table_name`, ghi lại các hoạt động như `OPTIMIZE` và `VACUUM`. `EXPLAIN` hiển thị kế hoạch thực hiện truy vấn và không báo cáo liệu các hoạt động bảo trì đó có được thực hiện hay không. [Delta table maintenance in Microsoft Fabric](https://learn.microsoft.com/en-us/fabric/data-engineering/delta-lake-table-maintenance)', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-177', 'dp-600', 177, 'Solution: You execute the following Spark SQL statement:  
  
```sql  
DESCRIBE DETAIL customer -  
```  
  
Does this achieve the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], '`DESCRIBE DETAIL` trả về thông tin lưu trữ và siêu dữ liệu Delta cấp bảng hiện tại, chứ không phải lịch sử hoạt động và bảo trì-giao dịch của bảng. Cần có `DESCRIBE HISTORY` để xác định xem các hoạt động bảo trì, chẳng hạn như `OPTIMIZE` hoặc `VACUUM`, có được thực hiện hay không.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-178', 'dp-600', 178, 'You have a Fabric tenant that contains 30 CSV files in OneLake. The files are updated daily.  
  
You create a Microsoft Power BI semantic model named Model1 that uses the CSV files as a data source. You configure incremental refresh for Model1 and publish the model to an F64 capacity in the Fabric tenant.  
  
When you initiate a refresh of Model1, the refresh fails after running out of resources.  
  
What is a possible cause of the failure?', '[{"key":"A","text":"XMLA Endpoint is set to Read Only."},{"key":"B","text":"Query folding is occurring."},{"key":"C","text":"The data type of the column used to partition the data has changed."},{"key":"D","text":"Only refresh complete days is selected."},{"key":"E","text":"Query folding is NOT occurring."}]'::jsonb, ARRAY['E']::text[], 'Việc làm mới tăng dần phụ thuộc vào việc gấp truy vấn để đẩy các bộ lọc phân vùng trở lại nguồn để chỉ truy xuất các phạm vi ngày cần thiết. Khi việc gấp không xảy ra, công cụ mashup phải kéo toàn bộ bảng vào bộ nhớ và lọc chúng cục bộ, điều này làm tăng mức tiêu thụ CPU và bộ nhớ, đồng thời có thể làm cạn kiệt giới hạn tài nguyên của dung lượng F64 trong quá trình làm mới, đặc biệt là với 30 tệp đang được xử lý.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-179', 'dp-600', 179, 'You have a Fabric tenant that contains JSON files in OneLake. The files have one billion items.  
  
You plan to perform time series analysis of the items.  
  
You need to transform the data, visualize the data to find insights, perform anomaly detection, and share the insights with other business users. The solution must meet the following requirements:  
  
• Use parallel processing.  

• Minimize the duplication of data.  

• Minimize how long it takes to load the data.  
  
What should you use to transform and visualize the data?', '[{"key":"A","text":"the PySpark library in a Fabric notebook"},{"key":"B","text":"the pandas library in a Fabric notebook"},{"key":"C","text":"a Microsoft Power BI report that uses core visuals"}]'::jsonb, ARRAY['A']::text[], 'PySpark là lựa chọn tối ưu để chuyển đổi và phân tích một tỷ mục JSON có yêu cầu xử lý song song và giảm thiểu trùng lặp dữ liệu. PySpark cung cấp khả năng tính toán phân tán trên các tài nguyên điện toán Fabric, cho phép phân tích chuỗi thời gian hiệu quả và phát hiện sự bất thường. Pandas không được phân phối và không thể xử lý song song một cách hiệu quả, trong khi Power BI được thiết kế để trực quan hóa chứ không phải để chuyển đổi dữ liệu quy mô lớn.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-180', 'dp-600', 180, 'You have a Fabric tenant containing a workspace named Workspace1. Workspace1 includes a warehouse named DW1, which contains two tables: Employees and Sales. All users have read access to DW1.  
  
You need to implement access controls that meet these requirements:  
  
- For the Sales table, ensure users can view only sales data from their own region.  
- For the Employees table, restrict all Personally Identifiable Information (PII).  
- Preserve access to unrestricted data for all users.  
  
What should you use for each table?', '[]'::jsonb, ARRAY[]::text[], 'Bảo mật cấp hàng lọc các hàng trong bảng theo khu vực được phép của người dùng truy vấn, do đó, nó giới hạn các bản ghi Bán hàng theo khu vực. Bảo mật cấp cột hạn chế quyền truy cập vào các cột PII được chỉ định trong khi vẫn giữ quyền truy cập vào các cột không bị hạn chế của bảng Nhân viên. Các quyền về mục và không gian làm việc kiểm soát quyền truy cập rộng hơn và không thể cung cấp các hạn chế dành riêng cho hàng và cột này.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-181', 'dp-600', 181, 'You are the administrator of a Fabric workspace that contains a lakehouse named Lakehouse1. Lakehouse1 contains the following tables:  

Table1: A Delta table created by using a shortcut  

Table2: An external table created by using Spark  
  
Table3: A managed table -  

You plan to connect to Lakehouse1 by using its SQL endpoint.  

What will you be able to do after connecting to Lakehouse1?', '[{"key":"A","text":"Read Table3."},{"key":"B","text":"Update the data Table3."},{"key":"C","text":"Read Table2."},{"key":"D","text":"Update the data in Table1."}]'::jsonb, ARRAY['A']::text[], 'Điểm cuối phân tích SQL của lakehouse hoạt động ở chế độ chỉ đọc và chỉ có thể truy cập các bảng được quản lý. Bảng1 (Bảng Delta qua phím tắt) và Bảng2 (bảng bên ngoài qua Spark) không hiển thị hoặc không thể đọc được thông qua điểm cuối SQL. Table3, là một bảng được quản lý, có thể được đọc qua điểm cuối SQL. Không được phép cập nhật, chèn và ghi qua SQL.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-182', 'dp-600', 182, 'You have an Amazon Web Services (AWS) subscription that contains an Amazon Simple Storage Service (Amazon S3) bucket named bucket1.  
  
You have a Fabric tenant that contains a lakehouse named LH1.  
  
In LH1, you plan to create a OneLake shortcut to bucket1.  
  
You need to configure authentication for the connection.  
  
Which two values should you provide? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"the shared access signature (SAS) token"},{"key":"B","text":"the secret access key"},{"key":"C","text":"the access ID"},{"key":"D","text":"the access key ID"},{"key":"E","text":"the certificate thumbprint"}]'::jsonb, ARRAY['B', 'D']::text[], 'Xác thực AWS S3 cho phím tắt OneLake yêu cầu ID khóa truy cập (D) và Khóa truy cập bí mật (B). Mã thông báo SAS được sử dụng để xác thực lưu trữ Azure; ''ID truy cập'' không phải là thuật ngữ thông tin xác thực AWS tiêu chuẩn; dấu vân tay chứng chỉ được sử dụng cho các phương pháp xác thực khác. Hai giá trị này tạo thành bộ thông tin xác thực hoàn chỉnh cần thiết để xác thực với bộ chứa S3.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-183', 'dp-600', 183, 'You have a Fabric tenant containing a lakehouse named LH1 and a notebook.  
  
A Parquet file named invoice1 includes an `InvoiceDateKey` column with the timestamp data type.  
  
Create a PySpark script that imports invoice1 and creates a table named fact_sale in LH1. The solution must meet these requirements:  
  
- Add a new column named Year to fact_sale.  
- Populate Year using the InvoiceDateKey column.  
  
How should you complete the script?', '[]'::jsonb, ARRAY[]::text[], '`withColumn` thêm cột `Year` và `year(col("InvoiceDateKey"))` lấy giá trị năm của nó từ mỗi dấu thời gian trong `InvoiceDateKey`.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-184', 'dp-600', 184, 'You have a Fabric tenant containing a warehouse named WH1.  
  
A source CSV file contains these fields:  
  
- SalesTransactionID  
- SaleDate  
- CustomerCode  
- CustomerName  
- CustomerAddress  
- ProductCode  
- ProductName  
- Quantity  
- UnitPrice  
  
You plan to implement a star schema for the tables in WH1. The dimension tables in WH1 will use Type 2 slowly changing dimension (SCD) logic.  
  
You need to design the tables for sales-transaction analysis and load the source data.  
  
Which target-table type should you specify for the CustomerName, CustomerCode, and SaleDate fields?', '[]'::jsonb, ARRAY[]::text[], 'Bảng dữ kiện bán hàng lưu trữ sự kiện giao dịch, số đo và khóa ngoại. Mã khách hàng xác định khách hàng và Tên khách hàng mô tả khách hàng đó, vì vậy cả hai đều thuộc chiều Khách hàng; SCD loại 2 duy trì các phiên bản lịch sử của các bản ghi kích thước đã thay đổi. Ngày bán hàng thuộc về thứ nguyên Ngày, thứ nguyên lược đồ sao tiêu chuẩn được sử dụng để lọc và nhóm các sự kiện bán hàng theo thời gian.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-185', 'dp-600', 185, 'You have a Fabric workspace named Workspace1 that contains an eventstream named Eventstream1.  
  
Eventstream1 reads data from an Azure event hub named Eventhub1.  
  
Eventhub1 contains the following columns.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783713072188-9swfoyew.png)  
  
You need to add a continuous percentile calculation to the Payload column. The solution must minimize development effort.  
  
What should you do?', '[{"key":"A","text":"Add a KQL queryset to Workspace1."},{"key":"B","text":"Add a Group by transformation to Eventstream1."},{"key":"C","text":"Add a Manage fields transformation to Eventstream1."},{"key":"D","text":"Add an Aggregate transformation to Eventstream1."}]'::jsonb, ARRAY['D']::text[], 'Chuyển đổi tổng hợp trong luồng sự kiện Fabric cung cấp các hàm phân vị tích hợp để truyền dữ liệu với cấu hình tối thiểu. Bộ truy vấn KQL yêu cầu mã tùy chỉnh; Nhóm theo không tính phần trăm; Quản lý các trường chỉ xử lý việc lựa chọn cột.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783713072188-9swfoyew.png', 'published'),
  ('dp600-186', 'dp-600', 186, 'You have a Fabric tenant that contains a Microsoft Power BI report named Report1. Report1 includes a Python visual.  

Data displayed by the visual is grouped automatically and duplicate rows are NOT displayed.  

You need all rows to appear in the visual.  

What should you do?', '[{"key":"A","text":"Reference the columns in the Python code by index."},{"key":"B","text":"Modify the Sort Column By property for all columns."},{"key":"C","text":"Add a unique field to each row."},{"key":"D","text":"Modify the Summarize By property for all columns."}]'::jsonb, ARRAY['C']::text[], 'Hình ảnh Python và R trong Power BI tự động tóm tắt tập dữ liệu cơ bản và thu gọn các hàng trông giống hệt nhau trên các trường được cung cấp cho hình ảnh. Việc thêm một trường duy nhất, chẳng hạn như cột chỉ mục, vào mỗi hàng sẽ làm cho mỗi hàng trở nên khác biệt, điều này ngăn Power BI nhóm/loại bỏ trùng lặp dữ liệu trước khi đến tập lệnh, để tất cả các hàng xuất hiện trong hình ảnh. Tham chiếu các cột theo chỉ mục bên trong mã Python hoặc thay đổi thuộc tính Tóm tắt theo, không ảnh hưởng đến hành vi nhóm hàng tự động này.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-187', 'dp-600', 187, 'You have a Fabric warehouse named Warehouse1 containing a table named dbo.Product.  
  
dbo.Product has the following columns.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784211720871-2y1e8juc.png)  
  
You must use a T-SQL query to add a column named PriceRange to dbo.Product. The column must classify every product according to UnitPrice. The solution must meet these requirements:  
  
- If UnitPrice equals 0, PriceRange is "Not for resale".  
- If UnitPrice is below 50, PriceRange is "Under $50".  
- If UnitPrice is from 50 to 250, PriceRange is "Under $250“.  
- In every other case, PriceRange is "$250+".  
  
Complete the query using the appropriate values. Each value can be used once, more than once, or not at all.', '{"statements":[{"id":"blank1","text":"Slot 1:","correctAnswer":"B"},{"id":"blank2","text":"Slot 2:","correctAnswer":"C"},{"id":"blank3","text":"Slot 3:","correctAnswer":"D"}],"choices":[{"key":"A","text":"BEGIN"},{"key":"B","text":"CASE"},{"key":"C","text":"ELSE"},{"key":"D","text":"END"},{"key":"E","text":"IF"},{"key":"F","text":"WHILE"}]}'::jsonb, ARRAY['blank1=B', 'blank2=C', 'blank3=D']::text[], 'Biểu thức CASE được tìm kiếm sẽ đánh giá các mệnh đề WHEN của nó theo thứ tự, trả về kết quả được liên kết với điều kiện đúng đầu tiên, sử dụng ELSE khi không khớp và kết thúc bằng END. Do đó, điều kiện giá bằng 0 được xử lý trước điều kiện dưới 50; giá từ 50 đến 249.999. nhận kết quả Dưới $250; và 250 trở lên nhận được $250+.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784211720871-2y1e8juc.png', 'published'),
  ('dp600-188', 'dp-600', 188, '$35', '[]'::jsonb, ARRAY[]::text[], 'Viewer là vai trò không gian làm việc có ít đặc quyền nhất, cấp quyền truy cập đọc thông qua kho và điểm cuối phân tích SQL, đáp ứng yêu cầu điểm cuối SQL cho bảng, kho và dữ liệu hiển thị lối tắt lakehouse. Quyền truy cập Lakehouse Explorer yêu cầu vai trò có thể truy cập trực tiếp vào dữ liệu lakehouse; Contributor cung cấp khả năng đó, trong khi Viewer bị giới hạn ở khả năng đọc bảng thông qua điểm cuối phân tích SQL.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-189', 'dp-600', 189, 'You have a Fabric tenant that contains a lakehouse.  
  
You plan to use a visual query to merge two tables.  
  
You need to ensure that the query returns all the rows in both tables.  
  
Which type of join should you use?', '[{"key":"A","text":"inner"},{"key":"B","text":"full outer"},{"key":"C","text":"left outer"},{"key":"D","text":"right anti"},{"key":"E","text":"right outer"},{"key":"F","text":"left anti"}]'::jsonb, ARRAY['B']::text[], 'FULL OUTER JOIN trả về tất cả các hàng từ cả hai bảng, các hàng khớp với điều kiện nối được đáp ứng và bao gồm các hàng chưa khớp từ cả hai phía. Các phép nối bên trong chỉ trả về các hàng khớp; các phép nối ngoài bên trái và bên phải bao gồm tất cả các hàng từ một bảng và khớp với bảng kia; chống tham gia loại trừ các trận đấu. Toàn bộ bên ngoài là loại kết nối duy nhất đáp ứng được yêu cầu.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-190', 'dp-600', 190, 'You have a Fabric warehouse containing two tables named DimDate and Trips.  
  
DimDate contains the following fields.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784206733007-7z8d44km.png)  
  
Trips contains the following fields.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784206735023-7opttrmu.png)  
  
You need to compare the average miles per trip for statutory holidays with non-statutory holidays.  
  
How should you complete the T-SQL statement?', '[]'::jsonb, ARRAY[]::text[], 'Số dặm trung bình mỗi chuyến đi được tính bằng tổng khoảng cách chuyến đi chia cho số lượng định danh chuyến đi. Vì `d.IsHoliday` được chọn tổng hợp nên nó phải được bao gồm trong mệnh đề `GROUP BY`, tạo ra một mức trung bình cho các ngày nghỉ theo luật định và một cho các ngày nghỉ không theo luật định.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784206733007-7z8d44km.png', 'published'),
  ('dp600-191', 'dp-600', 191, 'You have a Fabric workspace named Workspace1 and an Azure SQL database.  
  
You plan to create a dataflow that will read data from the database, and then transform the data by performing an inner join.  
  
You need to ignore spaces in the values when performing the inner join. The solution must minimize development effort.  
  
What should you do?', '[{"key":"A","text":"Append the queries by using fuzzy matching."},{"key":"B","text":"Merge the queries by using fuzzy matching."},{"key":"C","text":"Append the queries by using a lookup table."},{"key":"D","text":"Merge the queries by using a lookup table."}]'::jsonb, ARRAY['B']::text[], 'Việc hợp nhất các truy vấn bằng cách sử dụng kết hợp mờ là cách tiếp cận chính xác để thực hiện phép nối bên trong trong khi bỏ qua khoảng trắng trong các giá trị. Kết hợp mờ xử lý những khác biệt nhỏ như khoảng trắng thừa mà không yêu cầu xử lý trước dữ liệu thủ công. ''Hợp nhất'' là thao tác nối (không giống như ''Nối'' là thao tác kết hợp) và việc so khớp mờ giảm thiểu nỗ lực phát triển bằng cách loại bỏ nhu cầu chuyển đổi cắt xén/dọn dẹp riêng biệt.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-192', 'dp-600', 192, 'You have a Fabric tenant containing a semantic model named model1. The two largest columns in model1 are shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784206194372-183zusox.png)  
  
You need to optimize model1. The solution must meet these requirements:  
  
- Reduce the model size.  
- Improve refresh performance when using Import mode.  
- Ensure the datetime value for every sales transaction remains available in the model.  
  
What should you do for each column?', '[]'::jsonb, ARRAY[]::text[], 'Việc xóa khóa thay thế tăng số lượng số cao khỏi bảng thực tế sẽ loại bỏ việc lưu trữ từ điển và cột của nó khi không cần khóa để lập mô hình hoặc phân tích. Việc chia ngày giờ cấp hai thành các giá trị ngày và giờ sẽ giảm lượng số được mỗi cột xử lý trong khi vẫn giữ nguyên thông tin dấu thời gian hoàn chỉnh cho mỗi giao dịch. Việc cắt bớt sẽ loại bỏ thành phần thời gian.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784206194372-183zusox.png', 'published'),
  ('dp600-193', 'dp-600', 193, 'You have a Fabric semantic model named Model1 that includes a table named Sales.  
  
You need to enable incremental refresh for the Sales table.  
  
What should you do first?', '[{"key":"A","text":"Move Model1 to Premium Per User (PPU) workspace."},{"key":"B","text":"Create parameters in Power Query."},{"key":"C","text":"From Settings, set Large semantic model storage format to On."},{"key":"D","text":"Automate the data preparation by using Dataflow Gen2."}]'::jsonb, ARRAY['B']::text[], 'Làm mới tăng dần yêu cầu các tham số Ngày/Giờ Power Query có tên `RangeStart` và `RangeEnd` để xác định cửa sổ làm mới. Truy vấn Bán hàng phải sử dụng các tham số này trong bộ lọc dựa trên ngày trước khi có thể đặt cấu hình chính sách làm mới gia tăng.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-194', 'dp-600', 194, 'You have a Fabric tenant that contains a workspace named Workspace1 and a user named User1. Workspace1 contains a warehouse named DW1.  
  
You share DW1 with User1 and assign User1 the default permissions for DW1.  
  
What can User1 do?', '[{"key":"A","text":"Read data from the tables in DW1."},{"key":"B","text":"Build reports by using the default dataset."},{"key":"C","text":"Read the underlying Parquet files from OneLake."},{"key":"D","text":"Connect to DW1 via the TDS (Tabular Data Stream) endpoint."}]'::jsonb, ARRAY['D']::text[], 'Theo mặc định, việc chia sẻ warehouse chỉ cấp quyền Đọc cơ sở, cho phép kết nối thông qua chuỗi kết nối dựa trên TDS của điểm cuối phân tích SQL nhưng không truy vấn bảng (ReadData), xây dựng báo cáo trên mô hình ngữ nghĩa mặc định hoặc đọc tệp Parquet OneLake thô — tất cả đều yêu cầu chọn rõ ràng quyền bổ sung tương ứng khi chia sẻ.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-195', 'dp-600', 195, 'You have a Microsoft Fabric tenant that contains a dataflow.  
  
You are exploring a new semantic model.  
  
From Power Query, you need to view column information as shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783710207904-v21tzwh3.png)  
  
Which three Data view options should you select? Each correct answer presents part of the solution.', '[{"key":"A","text":"Show column value distribution"},{"key":"B","text":"Enable details pane"},{"key":"C","text":"Enable column profile"},{"key":"D","text":"Show column quality details"},{"key":"E","text":"Show column profile in details pane"}]'::jsonb, ARRAY['A', 'C', 'D']::text[], 'Để xem thông tin cột toàn diện bao gồm phân phối giá trị, thống kê hồ sơ và số liệu chất lượng, bạn phải bật: (A) Hiển thị phân phối giá trị cột để xem biểu đồ phân phối, (C) Bật hồ sơ cột để hiển thị số liệu thống kê chi tiết và (D) Hiển thị chi tiết chất lượng cột để hiển thị số lượng giá trị hợp lệ/lỗi/trống. Các tùy chọn này cùng nhau cung cấp hiển thị thông tin cột hoàn chỉnh.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783710207904-v21tzwh3.png', 'published'),
  ('dp600-196', 'dp-600', 196, 'You have three Fabric workspaces: Workspace1, Workspace2, and Workspace3. Workspace1 contains a report named Report1 and a semantic model named Model1 that uses Import mode.  
  
You perform these actions:  
  
- Create a deployment pipeline named Pipeline1 with three stages: development, test, and production.  
- Assign Workspace1 to Pipeline1''s development stage.  
- Assign Workspace2 to Pipeline1''s test stage.  
- Assign Workspace3 to Pipeline1''s production stage.  
- Modify Model1.  
  
You need to make the changes to Model1 available in the production stage as quickly as possible. The solution must not affect the availability of Report1.  
  
Which three actions should you perform, in sequence?', '{"statements":[{"id":"slot1","text":"1","correctAnswer":"B"},{"id":"slot2","text":"2","correctAnswer":"D"},{"id":"slot3","text":"3","correctAnswer":"E"}],"choices":[{"key":"A","text":"Refresh Model1 in the test stage."},{"key":"B","text":"Run Pipeline1 from the development stage to the test stage."},{"key":"C","text":"Refresh Model1 in the development stage."},{"key":"D","text":"Run Pipeline1 from the test stage to the production stage."},{"key":"E","text":"Refresh Model1 in the production stage."}]}'::jsonb, ARRAY['slot1=B', 'slot2=D', 'slot3=E']::text[], 'Quy trình triển khai vải chỉ triển khai nội dung giữa các giai đoạn liền kề, do đó, mô hình ngữ nghĩa đã sửa đổi phải được thúc đẩy từ giai đoạn phát triển sang thử nghiệm, sau đó từ thử nghiệm sang sản xuất. Việc triển khai sao chép siêu dữ liệu của mô hình ngữ nghĩa thay vì dữ liệu ở chế độ Nhập; làm mới dữ liệu tải mô hình ngữ nghĩa sản xuất cho mô hình đã triển khai. Việc làm mới quá trình phát triển hoặc thử nghiệm sẽ không làm thay đổi có sẵn trong quá trình sản xuất.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-197', 'dp-600', 197, 'Your company has a finance department.  
  
You have a Fabric tenant, an Azure Storage account named storage1, and a Microsoft Entra group named Group1. Group1 contains the users in the finance department.  
  
You need to create a new workspace named Workspace1 in the tenant. The solution must meet the following requirements:  
  
• Ensure that the finance department users can create and edit items in Workspace1.  

• Ensure that Workspace1 can securely access storage1 to read and write data.  

• Ensure that you are the only admin of Workspace1.  

• Minimize administrative effort.  
  
You create Workspace1.  
  
Which two actions should you perform next? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"Assign the Contributor role to Group1."},{"key":"B","text":"Create a workspace identity."},{"key":"C","text":"Assign the Admin role to yourself."},{"key":"D","text":"Assign the Contributor role to each finance department user."}]'::jsonb, ARRAY['A', 'B']::text[], 'Để đáp ứng các yêu cầu, hãy thực hiện hai hành động: (A) Chỉ định vai trò Cộng tác viên cho Nhóm1 để cấp cho tất cả người dùng bộ phận tài chính quyền tạo và chỉnh sửa một cách hiệu quả—tư cách thành viên nhóm giảm thiểu chi phí quản trị. (B) Tạo danh tính không gian làm việc để thiết lập managed identity cho Workspace1, cho phép xác thực an toàn đối với storage1 mà không cần lưu trữ thông tin xác thực. Bạn tự động trở thành quản trị viên không gian làm việc khi tạo, vì vậy option C là không cần thiết.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-198', 'dp-600', 198, 'Solution: You replace line 4 with the following code:  
  
```DAX  
NOT ISEMPTY ( CALCULATETABLE ( ''Order Item '' ) )  
```  
  
Does this achieve the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['A']::text[], '`CALCULATETABLE` đánh giá `''Order Item ''` trong ngữ cảnh bộ lọc hiện tại và `ISEMPTY` kiểm tra xem bảng kết quả có các hàng no hay không. Do đó, `NOT ISEMPTY(.)` đúng chính xác khi khách hàng hiện tại có ít nhất một hàng mục đơn hàng—cùng điều kiện với `COUNTROWS(.) > 0`. Bởi vì điều này chỉ yêu cầu kiểm tra sự tồn tại thay vì tính toán số hàng đầy đủ nên nó có thể giảm thời gian thực hiện truy vấn.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-199', 'dp-600', 199, 'Solution: You replace line 4 with the following code:  
  
```DAX  
CALCULATE ( COUNTROWS ( ''Order Item'' ) ) >= 0  
```  
  
Does this achieve the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], '`FILTER` đánh giá điều kiện Boolean của nó cho mỗi hàng trong bảng đầu vào. Vì `COUNTROWS(''Order Item'')` không thể âm nên điều kiện `>= 0` bao gồm mọi khách hàng, kể cả những khách hàng không có mặt hàng đặt hàng, trong khi vẫn giữ lại đánh giá `CALCULATE`/`COUNTROWS` cho mỗi khách hàng. Vì vậy, nó không loại bỏ được mẫu vòng lặp đắt tiền hoặc mang lại sự cải thiện hiệu suất cần thiết. Microsoft khuyến nghị các đối số bộ lọc Boolean nếu có thể vì các biểu thức bảng được trả về bởi `FILTER` được đánh giá theo từng hàng.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-200', 'dp-600', 200, 'Solution: Replace line 4 with the following code:  
  
```DAX  
ISEMPTY ( RELATEDTABLE ( ''Order Item'' ) )  
```  
  
Does this satisfy the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], '`COUNTROWS(''Order Item'') > 0` giữ lại những khách hàng có ít nhất một hàng mục đơn hàng liên quan. `RELATEDTABLE(''Order Item'')` trả về các hàng liên quan trong ngữ cảnh hiện tại, trong khi `ISEMPTY` chỉ trả về `TRUE` khi bảng đó có các hàng no. Do đó, việc thay thế sẽ đảo ngược kết quả lọc và không duy trì hành vi truy vấn được yêu cầu; một bài kiểm tra tương đương về mặt ngữ nghĩa sẽ cần `NOT ISEMPTY(.)`.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-201', 'dp-600', 201, 'Solution: Replace line 4 with the following code:  
  
```DAX  
NOT ( CALCULATE ( COUNTROWS ( ''Order Item'' ) ) < 0)  
```  
  
Does this achieve the goal?', '[{"key":"A","text":"Yes"},{"key":"B","text":"No"}]'::jsonb, ARRAY['B']::text[], '`COUNTROWS` trả về số hàng không âm (hoặc BLANK khi tồn tại các hàng no). Do đó, `CALCULATE(COUNTROWS(''Order Item'')) < 0` không bao giờ đúng và sự phủ định của nó thừa nhận mọi khách hàng thay vì hạn chế kết quả đối với những khách hàng có một hoặc nhiều mặt hàng đặt hàng. Việc thay thế không tương đương với bộ lọc được yêu cầu và không đáp ứng được mục tiêu.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-202', 'dp-600', 202, 'You have a Fabric tenant that contains a workspace named Workspace1. Workspace1 uses Pro license mode and contains a semantic model named Model1.  
  
You need to ensure that Model1 supports XMLA connections.  
  
Which setting should modify?', '[{"key":"A","text":"Users can edit data models in the Power BI service"},{"key":"B","text":"Enforce strict access control for all data connection types"},{"key":"C","text":"Enable Cache for Shortcuts"},{"key":"D","text":"License mode"}]'::jsonb, ARRAY['D']::text[], 'Điểm cuối XMLA chỉ được hỗ trợ trên giấy phép Premium, Premium Per User và Embedded, không phải giấy phép Pro. Cài đặt Chế độ cấp phép kiểm soát mức dung lượng. Nâng cấp từ Pro lên Premium (hoặc Premium Per User) sẽ hỗ trợ điểm cuối XMLA. Đây là cài đặt cấp độ năng lực tiên quyết, không phải là cấu hình cấp độ mô hình hoặc không gian làm việc.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-203', 'dp-600', 203, 'You have a Fabric tenant that contains a lakehouse named Lakehouse1.  
  
You need to prevent new tables added to Lakehouse1 from being added automatically to the default semantic model of the lakehouse.  
  
What should you configure?', '[{"key":"A","text":"the SQL analytics endpoint settings"},{"key":"B","text":"the semantic model settings"},{"key":"C","text":"the workspace settings"},{"key":"D","text":"the Lakehouse1 settings"}]'::jsonb, ARRAY['A']::text[], 'Mô hình ngữ nghĩa Power BI mặc định mà Fabric tạo cho lakehouse được giữ đồng bộ hóa thông qua cài đặt hiển thị trên điểm cuối phân tích SQL (Cài đặt > Mô hình ngữ nghĩa Power BI mặc định > "Đồng bộ hóa mô hình ngữ nghĩa Power BI mặc định"); việc tắt tính năng này sẽ ngăn các bảng lakehouse mới được thêm tự động vào mô hình mặc định đó. Cài đặt riêng của mô hình ngữ nghĩa không kiểm soát hành vi tự động đồng bộ hóa của bảng này.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-204', 'dp-600', 204, '$35', '[{"key":"A","text":"spark.read.format(“delta”).load(“Tables/ResearchProduct”)"},{"key":"B","text":"spark.read.format(“delta”).load(“Files/ResearchProduct”)"},{"key":"C","text":"spark.sql(“SELECT * FROM Lakehouse1.productline1.ResearchProduct”)"},{"key":"D","text":"spark.read.format(“delta”).load(“Tables/productline1/ResearchProduct”)"}]'::jsonb, ARRAY['A']::text[], 'Các phím tắt trong Fabric lakehouse xuất hiện dưới dạng bảng được quản lý trong thư mục Bảng khi chúng tham chiếu dữ liệu định dạng delta. Cú pháp Apache Spark chính xác để đọc lối tắt delta là `spark.read.format("delta").load("Tables/ResearchProduct")`, trong đó ResearchProduct là tên lối tắt. Đường dẫn dựa trên tệp áp dụng cho các phím tắt không phải delta hoặc tệp bên ngoài; đường dẫn thư mục con không được sử dụng để tham khảo phím tắt.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-205', 'dp-600', 205, 'You are creating a semantic model in Microsoft Power BI Desktop.  

You plan to make bulk changes to the model by using the Tabular Model Definition Language (TMDL) extension for Microsoft Visual Studio Code.  

You need to save the semantic model to a file.  

Which file format should you use?', '[{"key":"A","text":"PBIP"},{"key":"B","text":"PBIX"},{"key":"C","text":"PBIT"},{"key":"D","text":"PBIDS"}]'::jsonb, ARRAY['A']::text[], 'Định dạng PBIP (Dự án Power BI) được thiết kế đặc biệt để quản lý các dự án Power BI có hỗ trợ TMDL (Ngôn ngữ định nghĩa mô hình dạng bảng) trong Visual Studio Code. PBIP tạo cấu trúc thư mục chứa các tệp TMDL trong thư mục.Dataset/Definition, cho phép chỉnh sửa hàng loạt và kiểm soát phiên bản. Các định dạng PBIX, PBIT và PBIDS không hỗ trợ chỉnh sửa dựa trên TMDL.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-206', 'dp-600', 206, 'You have a Fabric workspace named Workspace1 that contains a lakehouse named Lakehouse1.  
  
In Workspace1, you create a data pipeline named Pipeline1.  
  
You have CSV files stored in an Azure Storage account.  
  
You need to add an activity to Pipeline1 that will copy data from the CSV files to Lakehouse1. The activity must support Power Query M formula language expressions.  
  
Which type of activity should you add?', '[{"key":"A","text":"Dataflow"},{"key":"B","text":"Notebook"},{"key":"C","text":"Script"},{"key":"D","text":"Copy data"}]'::jsonb, ARRAY['A']::text[], 'Luồng dữ liệu là loại hoạt động chính xác vì nó được xây dựng trên Power Query, vốn hỗ trợ các biểu thức ngôn ngữ công thức M. Mặc dù hoạt động Sao chép dữ liệu có thể di chuyển dữ liệu giữa các nguồn nhưng nó không hỗ trợ biểu thức Power Query M. Notebook và Tập lệnh cung cấp chương trình có mục đích chung nhưng không dành riêng cho Power Query. Yêu cầu hỗ trợ công thức M là yếu tố quyết định ở đây.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-207', 'dp-600', 207, 'You have a Fabric tenant containing a workspace named Workspace1. Workspace1 includes a data pipeline named Pipeline1 and a lakehouse named Lakehouse1.  
  
You take the following actions:  
  
- Create a workspace named Workspace2.  
- Create a deployment pipeline named DeployPipeline1 to deploy items from Workspace1 to Workspace2.  
- Add a folder named Folder1 to Workspace1.  
- Move Lakehouse1 into Folder1.  
- Run DeployPipeline1.  
  
What structure will Workspace2 have after DeployPipeline1 completes?', '[{"key":"A","text":"\\Folder1\\Pipeline1\\Folder1\\Lakehouse1"},{"key":"B","text":"\\Pipeline1\\Lakehouse1"},{"key":"C","text":"\\Pipeline1\\Folder1\\Lakehouse1"},{"key":"D","text":"\\Folder1\\Lakehouse1"}]'::jsonb, ARRAY['C']::text[], 'Quy trình triển khai Microsoft Fabric sao chép các mục nguồn đã chọn vào giai đoạn đích và tự động áp dụng hệ thống phân cấp thư mục của các mục đã triển khai. Do đó, Pipeline1 vẫn ở gốc không gian làm việc và Lakehouse1 được tạo trong Thư mục1.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-208', 'dp-600', 208, 'You have a Fabric workspace named Workspace1 and an Azure Data Lake Storage Gen2 account named storage1. Workspace1 contains a lakehouse named Lakehouse1.  
  
You need to create a shortcut to storage1 in Lakehouse1.  
  
Which connection and endpoint should you specify?', '[]'::jsonb, ARRAY[]::text[], 'Phím tắt ADLS Gen2 trong Fabric lakehouse phải sử dụng điểm cuối DFS của tài khoản lưu trữ. Do đó, điểm cuối bắt buộc là `dfs` và URL điểm cuối sử dụng giao thức `https`.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-209', 'dp-600', 209, 'You have a Fabric tenant that contains a machine learning model registered in a Fabric workspace.  

You need to use the model to generate predictions by using the PREDICT function in a Fabric notebook.  

Which two languages can you use to perform model scoring? Each correct answer presents a complete solution.  

NOTE: Each correct answer is worth one point.', '[{"key":"A","text":"T-SQL"},{"key":"B","text":"DAX"},{"key":"C","text":"Spark SQL"},{"key":"D","text":"PySpark"}]'::jsonb, ARRAY['C', 'D']::text[], 'Sổ ghi chép vải hỗ trợ Spark SQL và PySpark để chấm điểm mô hình bằng chức năng PREDICT, vì đây là các ngôn ngữ Spark gốc. T-SQL và DAX không có sẵn trong môi trường sổ ghi chép Fabric—T-SQL dành cho Azure SQL và DAX dành cho các mô hình ngữ nghĩa Power BI. Cả Spark SQL và PySpark đều cung cấp các giải pháp hoàn chỉnh để chấm điểm hàng loạt.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-210', 'dp-600', 210, 'You create a semantic model by using Microsoft Power BI Desktop. The model contains one security role named SalesRegionManager and the following tables:  
  
- Sales  
- SalesRegion  
- SalesAddress  
  
You need to modify the model so that users assigned to the SalesRegionManager role cannot view the column named Address in SalesAddress.  
  
Which three actions should you perform, in sequence?', '{"statements":[{"id":"step1","text":"Slot 1:","correctAnswer":"B"},{"id":"step2","text":"Slot 2:","correctAnswer":"C"},{"id":"step3","text":"Slot 3:","correctAnswer":"F"}],"choices":[{"key":"A","text":"Open the model in Power BI Desktop."},{"key":"B","text":"Open the model in Tabular Editor."},{"key":"C","text":"Select the Address column in SalesAddress."},{"key":"D","text":"Set the Hidden property to True."},{"key":"E","text":"Set Object Level Security to Default for SalesRegionManager."},{"key":"F","text":"Set Object Level Security to None for SalesRegionManager."}]}'::jsonb, ARRAY['step1=B', 'step2=C', 'step3=F']::text[], 'Bảo mật cấp đối tượng có vai trò cụ thể và phải từ chối cột dành cho SalesRegionManager. Trong Trình soạn thảo dạng bảng, việc gán Bảo mật cấp đối tượng thành Không cho SalesAddress[Địa chỉ] sẽ ngăn các thành viên của vai trò đó nhìn thấy hoặc truy vấn cột. Thuộc tính Ẩn là cài đặt bản trình bày, không phải là ranh giới bảo mật.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-211', 'dp-600', 211, 'You have a Fabric tenant that contains a lakehouse named Lakehouse1. Lakehouse1 includes a Delta table with eight columns.  
  
You receive new data containing those same eight columns plus two additional columns.  
  
You create a Spark DataFrame, assign it to the variable `df`, and it contains the new data.  
  
You need to add the new data to the Delta table while meeting these requirements:  
  
- Keep every existing row.  
- Ensure all new data is added to the table.  
  
How should you complete the code?', '[]'::jsonb, ARRAY[]::text[], '`append` bảo toàn các hàng trong bảng Delta hiện có trong khi chèn các hàng DataFrame. Vì dữ liệu đến giới thiệu hai cột mới nên việc bật `mergeSchema` sẽ phát triển lược đồ bảng Delta để có thể ghi các cột đó. `overwriteSchema` áp dụng cho các thao tác thay thế/ghi đè, không áp dụng cho thao tác nối thêm này.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-212', 'dp-600', 212, 'You have a Fabric warehouse containing a table named `Staging.Sales`. `Staging.Sales` has the following columns.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1785600500184-c3wdqmcp.png)  
  
You need to write a T-SQL query that returns data for the year 2023, displays `ProductID` and `ProductName`, and includes a summarized `Amount` greater than 10,000.  
  
Which query should you use?', '[{"key":"A","text":"![](https://cdn.examcademy.com/images/questions/1785600502354-we8rwnn2.png)"},{"key":"B","text":"![](https://cdn.examcademy.com/images/questions/1785600504790-zuhy9hef.png)"},{"key":"C","text":"![](https://cdn.examcademy.com/images/questions/1785600506845-9xgrvz0n.png)"},{"key":"D","text":"![](https://cdn.examcademy.com/images/questions/1785600508873-fdcvtyww.png)"}]'::jsonb, ARRAY['A']::text[], 'Vị từ ngày cấp hàng thuộc về `WHERE`, do đó, chỉ doanh số năm 2023 mới được đưa vào trước khi tổng hợp. `ProductID` và `ProductName` phải được nhóm lại và tổng số được nhóm phải được lọc bằng `HAVING SUM(Amount) > 10000`. Microsoft ghi lại `HAVING` dưới dạng mệnh đề cho các điều kiện trên nhóm hoặc tập hợp và hiển thị cùng mẫu `GROUP BY` cộng với mẫu `HAVING SUM(.)` này.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1785600500184-c3wdqmcp.png', 'published'),
  ('dp600-213', 'dp-600', 213, 'You have a Fabric tenant named Tenant1 that contains a lakehouse named Lakehouse1.  
  
You need to add data to Lakehouse1 from a CSV file in an Azure Storage account outside of Fabric. The solution must minimize development effort.  
  
What should you use to add the data?', '[{"key":"A","text":"copy job"},{"key":"B","text":"shortcut"},{"key":"C","text":"pipeline"},{"key":"D","text":"Dataflow Gen2"}]'::jsonb, ARRAY['A']::text[], 'Một lối tắt chỉ tạo một tham chiếu ảo đến tệp CSV bên ngoài tại chỗ — nó không bao giờ đưa dữ liệu vào Lakehouse1 về mặt vật lý, do đó, nó không đáp ứng yêu cầu thêm dữ liệu. Công việc sao chép là mục nhập mã ngắn, được xây dựng có mục đích của Fabric để trỏ đến một nguồn như tài khoản Azure Storage và đưa dữ liệu vào lakehouse chỉ với một vài bước cấu hình, khiến đây trở thành cách tốn ít công sức nhất để thực sự sao chép dữ liệu vào.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-214', 'dp-600', 214, 'You have a Fabric workspace named Workspace1 that uses the Premium Per User (PPU) license mode and contains a semantic model named Model1.  
  
Large semantic model storage format is selected for Model1.  
  
You need to make sure that tables imported into Model1 are automatically written as Delta tables in OneLake.  
  
What should you do for Model1 and Workspace1?', '[]'::jsonb, ARRAY[]::text[], 'Tích hợp OneLake xuất các bảng mô hình ngữ nghĩa đã nhập sang các bảng Delta trong OneLake và được bật trong cài đặt mô hình ngữ nghĩa. Nó yêu cầu không gian làm việc sử dụng dung lượng Power BI Premium hoặc Microsoft Fabric được hỗ trợ; Premium Per User rõ ràng không được hỗ trợ. Bộ nhớ đệm truy vấn, mở rộng quy mô truy vấn, nhận dạng không gian làm việc và mã thông báo SAS do người dùng ủy quyền không cho phép khả năng xuất mô hình ngữ nghĩa này.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-215', 'dp-600', 215, 'You have a Fabric tenant containing a workspace named Workspace1 and a user named DBUser. Workspace1 includes a lakehouse named Lakehouse1. DBUser does **not** have tenant access.  
  
You grant DBUser access to Lakehouse1 as shown.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1785752444674-4rn349u9.png)', '[]'::jsonb, ARRAY[]::text[], 'Quyền Đọc tất cả Apache Spark cấp quyền truy cập vào dữ liệu lakehouse thông qua API Apache Spark và OneLake. Trình thám hiểm tệp OneLake sử dụng quyền truy cập OneLake. Quyền truy cập điểm cuối phân tích SQL thông qua các công cụ T-SQL như SSMS yêu cầu quyền Đọc tất cả dữ liệu điểm cuối SQL riêng biệt, quyền này không được cấp.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1785752444674-4rn349u9.png', 'published'),
  ('dp600-216', 'dp-600', 216, 'You have a Fabric workspace named Workspace1 that contains a dataflow named Dataflow1. Dataflow1 has a query that returns 2,000 rows.  

You view the query in Power Query as shown in the following exhibit.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1783709764899-y683qi9b.png)  
  
What can you identify about the pickupLongitude column?', '[{"key":"A","text":"The column has duplicate values."},{"key":"B","text":"All the table rows are profiled."},{"key":"C","text":"The column has missing values."},{"key":"D","text":"There are 935 values that occur only once."}]'::jsonb, ARRAY['A']::text[], 'Cấu hình Power Query hiển thị Số lượng riêng biệt (935) nhỏ hơn tổng kích cỡ mẫu (1000), biểu thị các giá trị trùng lặp tồn tại trong cột pickupLongitude. Số lượng riêng biệt khác với số lượng duy nhất—khác biệt đề cập đến tất cả các giá trị khác nhau hiện diện, trong khi số lượng duy nhất chỉ đề cập đến các giá trị xuất hiện chính xác một lần. Cấu hình chỉ hiển thị 1000 hàng (không phải tất cả 2000), hiển thị chỉ báo giá trị thiếu no và 935 ≠ lần xuất hiện của các giá trị đơn lẻ.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1783709764899-y683qi9b.png', 'published'),
  ('dp600-217', 'dp-600', 217, 'You have a Fabric workspace named Workspace1.  
  
You have three groups named Group1, Group2, and Group3.  
  
Assign a workspace role to each group. The solution must follow the principle of least privilege and meet these requirements:  
  
- Group1 must be able to write data to Workspace1 but cannot add members to Workspace1.  
- Group2 must be able to configure and maintain the settings of Workspace1.  
- Group3 must be able to write data and add members to Workspace1 but cannot delete Workspace1.  
  
Each role may be used once, more than once, or not at all.', '{"statements":[{"id":"group1","text":"Group1:","correctAnswer":"B"},{"id":"group2","text":"Group2:","correctAnswer":"A"},{"id":"group3","text":"Group3:","correctAnswer":"C"}],"choices":[{"key":"A","text":"Admin"},{"key":"B","text":"Contributor"},{"key":"C","text":"Member"},{"key":"D","text":"Viewer"}]}'::jsonb, ARRAY['group1=B', 'group2=A', 'group3=C']::text[], 'Người đóng góp cho phép tạo và sửa đổi nội dung và dữ liệu của không gian làm việc mà không được phép thêm thành viên. Quản trị viên là vai trò quản lý cài đặt không gian làm việc. Thành viên cho phép ghi dữ liệu và thêm thành viên hoặc người dùng có quyền thấp hơn nhưng không cho phép cập nhật hoặc xóa không gian làm việc.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-218', 'dp-600', 218, 'You have a Fabric warehouse that contains a table named Table1. Table1 contains three columns named SalesAmount, ProductCategory, and TransactionDate.  
  
You need to create a Microsoft Power BI query that will calculate the total sales amount of each product category for transactions that occurred during the last quarter.  
  
Which two actions should you perform in the visual query editor? Each correct answer presents part of the solution.  
  
NOTE: Each correct selection is worth one point.', '[{"key":"A","text":"For the TransactionDate column, select Remove duplicates."},{"key":"B","text":"For the TransactionDate column, select Keep top rows and set Number of rows to 90."},{"key":"C","text":"For the TransactionDate column, select Filter rows and set the value to last quarter."},{"key":"D","text":"For the ProductCategory column, select Group by and sum the SalesAmount column."},{"key":"E","text":"For the SalesAmount column, select Transformation number column - Standard, select Add, and then set the value to 90."}]'::jsonb, ARRAY['C', 'D']::text[], 'Việc lọc đến quý cuối cùng (C) giới hạn tập dữ liệu ở các giao dịch có liên quan. Nhóm theo Danh mục sản phẩm và tính tổng Số tiền bán hàng (D) tổng hợp tổng số cho mỗi danh mục. Option B (90 hàng trên cùng) không đáng tin cậy vì các quý có ngày thay đổi và số lượng hàng không đảm bảo ranh giới các quý.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-219', 'dp-600', 219, 'You have a Fabric workspace named Workspace1 that contains a dataflow named Dataflow1. Dataflow1 returns 500 rows of data.  
  
You need to identify the min and max values for each column in the query results.  
  
Which three Data view options should you select? Each correct answer presents part of the solution.  
  
NOTE: Each correct answer is worth one point.', '[{"key":"A","text":"Show column value distribution"},{"key":"B","text":"Enable column profile"},{"key":"C","text":"Show column profile in details pane"},{"key":"D","text":"Show column quality details"},{"key":"E","text":"Enable details pane"}]'::jsonb, ARRAY['B', 'C', 'E']::text[], 'Để xác định giá trị tối thiểu và tối đa cho mỗi cột trong tập hợp kết quả 500 hàng, bạn phải: (B) Bật cấu hình cột để kích hoạt thống kê cột chi tiết, (E) Bật ngăn chi tiết để xem bảng thống kê và (C) Hiển thị cấu hình cột trong ngăn chi tiết để hiển thị số liệu thống kê tối thiểu/tối đa và các thống kê khác trong ngăn đó. Ba tùy chọn này phối hợp với nhau để hiển thị số liệu thống kê được yêu cầu.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-220', 'dp-600', 220, 'You have a Fabric tenant that contains a lakehouse named Lakehouse1. Lakehouse1 contains an unpartitioned table named Table1.  

You plan to copy data to Table1 and partition the table based on a date column in the source data.  

You create a Copy activity to copy the data to Table1.  

You need to specify the partition column in the Destination settings of the Copy activity.  

What should you do first?', '[{"key":"A","text":"From the Destination tab, set Mode to Append."},{"key":"B","text":"From the Destination tab, select the partition column."},{"key":"C","text":"From the Source tab, select Enable partition discovery."},{"key":"D","text":"From the Destination tabs, set Mode to Overwrite."}]'::jsonb, ARRAY['D']::text[], 'Tùy chọn cột phân vùng trong tab Đích của Copy activity chỉ xuất hiện khi tác vụ Bảng được đặt thành Ghi đè; ở chế độ Nối thêm Fabric không hiển thị khả năng xác định các cột phân vùng cho bảng Delta đích. Do đó, việc đặt Chế độ thành Ghi đè trước là bước tiên quyết cần thiết trước khi có thể chỉ định cột phân vùng.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-221', 'dp-600', 221, 'You have a Fabric tenant that contains a semantic model. The model uses Direct Lake mode.  

You suspect that some DAX queries load unnecessary columns into memory.  

You need to identify the frequently used columns that are loaded into memory.  

What are two ways to achieve the goal? Each correct answer presents a complete solution.  

NOTE: Each correct answer is worth one point.', '[{"key":"A","text":"Use the Analyze in Excel feature."},{"key":"B","text":"Use the Vertipaq Analyzer tool."},{"key":"C","text":"Query the $System.DISCOVER_STORAGE_TABLE_COLUMN_SEGMENTS dynamic management view (DMV)."},{"key":"D","text":"Query the DISCOVER_MEMORYGRANT dynamic management view (DMV)."}]'::jsonb, ARRAY['B', 'C']::text[], 'Trình phân tích Vertipaq (B) cung cấp phân tích chi tiết về mức sử dụng bộ nhớ và lưu trữ ở cấp độ cột, cho biết cột nào tiêu thụ nhiều tài nguyên nhất. $System.DISCOVER_STORAGE_TABLE_COLUMN_SEGMENTS DMV (C) trả về siêu dữ liệu phân đoạn cột tiết lộ các mẫu lưu trữ và các cột được truy cập thường xuyên. Phân tích trong Excel chỉ cung cấp khả năng khám phá dữ liệu tương tác và DISCOVER_MEMORYGRANT theo dõi việc cấp bộ nhớ truy vấn chứ không theo dõi mức sử dụng bộ nhớ ở cấp độ cột.', 'General', ARRAY['DP-600', 'General']::text[], NULL, 'published'),
  ('dp600-222', 'dp-600', 222, 'You have a Fabric tenant.  
  
You need to configure OneLake security for the users shown in the following table.  
  
![Question Image](https://cdn.examcademy.com/images/questions/1784205232538-dbb5gvgl.png)  
  
The solution must adhere to the principle of least privilege.  
  
Which permission should you assign to each user?', '[]'::jsonb, ARRAY[]::text[], 'ReadAll cấp quyền truy cập dữ liệu trong OneLake thông qua vai trò DefaultReader, cho phép truy cập dữ liệu Spark. ReadData cấp quyền truy cập thông qua điểm cuối phân tích SQL mà không cấp quyền truy cập dữ liệu OneLake/Spark. Do đó, ReadAll là bắt buộc đối với tất cả dữ liệu Spark, trong khi ReadData là quyền có đặc quyền thấp nhất đối với quyền truy cập chỉ dành cho điểm cuối SQL.', 'General', ARRAY['DP-600', 'General']::text[], 'https://cdn.examcademy.com/images/questions/1784205232538-dbb5gvgl.png', 'published')
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