import { Question } from '../types';

export const pl300Questions: Question[] = [
  {
    "id": "pl300-1",
    "questionNumber": 1,
    "text": "You need to create a Power BI theme for use across multiple reports. The theme must incorporate corporate branding for font size, color, and bar chart formatting.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From Power BI Desktop, customize the current theme."
      },
      {
        "key": "B",
        "text": "From Power BI Desktop, use a built-in report theme."
      },
      {
        "key": "C",
        "text": "Create a theme as a PBIVIZ file and import the theme into Power BI Desktop."
      },
      {
        "key": "D",
        "text": "Create a theme as a JSON file and import the theme into Power BI Desktop."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Chủ đề báo cáo tùy chỉnh Power BI sử dụng tệp JSON. Định dạng chủ đề JSON hỗ trợ màu sắc, cài đặt văn bản bao gồm kích thước phông chữ và cài đặt định dạng hình ảnh; việc nhập tệp vào Máy tính để bàn Power BI giúp chủ đề được tiêu chuẩn hóa có thể sử dụng lại được trên các báo cáo.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 1",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/1-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.455Z"
  },
  {
    "id": "pl300-2",
    "questionNumber": 2,
    "text": "You have a Power BI workspace called Workspace1 that contains a dataset named DS1 and a report named RPT1.  \n  \nA user wants to create a report using the data in DS1 and publish that report to a different workspace.  \n  \nYou need to give the user the appropriate access while minimizing the number of permissions granted.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Add the user as a Viewer of Workspace1."
      },
      {
        "key": "B",
        "text": "Grant the Build permission for DS1 to the user."
      },
      {
        "key": "C",
        "text": "Share RPT1 with the user."
      },
      {
        "key": "D",
        "text": "Add the user as a member of Workspace1."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Quyền xây dựng trên mô hình ngữ nghĩa Power BI cho phép người dùng tạo báo cáo mới và nội dung khác từ mô hình đó. Bạn phải tạo báo cáo trong một không gian làm việc dựa trên mô hình ngữ nghĩa nằm trong không gian làm việc khác mà không cần cấp quyền thành viên Workspace1 rộng hơn hoặc quyền truy cập vào báo cáo hiện có không liên quan.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 2",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/2-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-3",
    "questionNumber": 3,
    "text": "You have a Power BI dashboard that monitors manufacturing-process quality. The dashboard includes the following elements:  \n  \n- A line chart showing the number of defective products manufactured each day  \n- A KPI visual showing the current daily percentage of defective products manufactured  \n  \nYou need to receive a notification when the daily percentage of defective products manufactured exceeds 3%.  \n  \nWhat should you create?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a subscription"
      },
      {
        "key": "B",
        "text": "an alert"
      },
      {
        "key": "C",
        "text": "a smart narrative visual"
      },
      {
        "key": "D",
        "text": "a Q&A visual"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Cảnh báo dữ liệu Power BI thông báo cho người dùng khi dữ liệu trang tổng quan được làm mới vượt qua ngưỡng được định cấu hình. Cảnh báo được hỗ trợ cho các ô KPI, do đó, cảnh báo có thể được định cấu hình để kích hoạt khi tỷ lệ phần trăm sản phẩm bị lỗi hàng ngày lớn hơn 3%.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 3",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/3-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-4",
    "questionNumber": 4,
    "text": "You have two CSV files named Products and Categories.  \n  \nThe Products file has these columns:  \n  \n- ProductID  \n- ProductName  \n- SupplierID  \n- CategoryID  \n  \nThe Categories file has these columns:  \n  \n- CategoryID  \n- CategoryName  \n- CategoryDescription  \n  \nFrom Power BI Desktop, import both files into Power Query Editor.  \n  \nYou need to create a Power BI dataset containing one table named Product. The Product table must include these columns:  \n  \n- ProductID  \n- ProductName  \n- SupplierID  \n- CategoryID  \n- CategoryName  \n- CategoryDescription  \n  \nHow should the queries be combined, and what action should be taken on the Categories query?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Hợp nhất các Sản phẩm với Danh mục trên CategoryID, cho phép mở rộng CategoryName và CategoryDescription vào bảng sản phẩm. Vô hiệu hóa tải trên Danh mục để nó vẫn có sẵn dưới dạng truy vấn Power Query hỗ trợ mà không được tải dưới dạng bảng tập dữ liệu thứ hai.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 4",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/4-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-5",
    "questionNumber": 5,
    "text": "You have a Power BI semantic model named Model1 that uses Import storage mode.  \n  \nYou need to decrease the size of Model1. The solution must **NOT** increase report query response times.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Remove unnecessary columns."
      },
      {
        "key": "B",
        "text": "Unpivot unnecessary columns."
      },
      {
        "key": "C",
        "text": "Rename unnecessary columns."
      },
      {
        "key": "D",
        "text": "Change Model1 to DirectQuery storage mode."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Việc xóa các cột không cần thiết sẽ giảm lượng dữ liệu được lưu trữ trong mô hình ngữ nghĩa Nhập trong khi vẫn giữ được hiệu suất truy vấn trong bộ nhớ của Import mode. Việc hủy xoay vòng có thể làm tăng số lượng hàng, việc đổi tên các cột không làm giảm dữ liệu được lưu trữ và DirectQuery có thể tăng thêm độ trễ truy vấn nguồn.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 5",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/5-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-6",
    "questionNumber": 6,
    "text": "You have a report containing four pages. Each page has slicers for the same four fields.  \n  \nUsers report that when they choose values in a slicer on one page, those selections do not persist on the other pages.  \n  \nYou need to recommend a solution that lets users select a value once and filter results across all pages. What are two possible recommendations to meet this goal? Each correct answer provides a complete solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create a bookmark for each slicer value."
      },
      {
        "key": "B",
        "text": "Replace the slicers with report-level filters."
      },
      {
        "key": "C",
        "text": "Sync the slicers across the pages."
      },
      {
        "key": "D",
        "text": "Replace the slicers with page-level filters."
      },
      {
        "key": "E",
        "text": "Replace the slicers with visual-level filters."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Bộ cắt đồng bộ Power BI có thể đồng bộ hóa các lựa chọn bộ lọc bộ cắt trên các trang báo cáo, do đó, lựa chọn được thực hiện trên một trang sẽ ảnh hưởng đến hình ảnh trên các trang được đồng bộ hóa. Bộ lọc cấp báo cáo áp dụng cho tất cả các trang trong báo cáo, cung cấp một phạm vi lọc toàn báo cáo. Bộ lọc cấp độ trang và cấp độ hình ảnh được giới hạn ở trang hoặc hình ảnh tương ứng của chúng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 6",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/6-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-7",
    "questionNumber": 7,
    "text": "You have a PBIX file that imports data from a Microsoft Excel data source located on a file share in a local network.  \n  \nYou are informed that the Excel data source has been moved to a different location.  \n  \nYou need to update the PBIX file so that it uses the new location.  \n  \nWhat are three ways to accomplish this goal? Each correct answer provides a complete solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From the Datasets settings of the Power BI service, configure the data source credentials."
      },
      {
        "key": "B",
        "text": "From the Data source settings in Power BI Desktop, configure the file path."
      },
      {
        "key": "C",
        "text": "From Current File in Power BI Desktop, configure the Data Load settings."
      },
      {
        "key": "D",
        "text": "From Power Query Editor, use the formula bar to configure the file path for the applied step."
      },
      {
        "key": "E",
        "text": "From Advanced Editor in Power Query Editor, configure the file path in the M code."
      }
    ],
    "correctAnswers": [
      "B",
      "D",
      "E"
    ],
    "explanation": "Vị trí nguồn của trình kết nối Excel là một phần của định nghĩa nguồn của truy vấn. Power BI Desktop có thể cập nhật vị trí đó thông qua cài đặt Nguồn dữ liệu, trong khi Power Query có thể cập nhật đường dẫn trong bước Nguồn được áp dụng thông qua thanh công thức hoặc trực tiếp trong mã M của truy vấn thông qua Trình chỉnh sửa nâng cao. Cài đặt thông tin xác thực dịch vụ kiểm soát xác thực và cài đặt Tải dữ liệu kiểm soát hành vi tải thay vì vị trí tệp.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 7",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/7-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-8",
    "questionNumber": 8,
    "text": "You have a Power BI semantic model containing a table named Table1. Table1 uses Import storage mode.  \n  \nYou need to update the model so that Table1 uses DirectQuery storage mode.  \n  \nWhat action should you take?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Delete Table1, and then add the table to the model again in DirectQuery storage mode."
      },
      {
        "key": "B",
        "text": "From Power Query Editor, duplicate the query for Table1."
      },
      {
        "key": "C",
        "text": "From Model view, change the storage mode of Table1 to DirectQuery."
      },
      {
        "key": "D",
        "text": "Add an aggregation table to the model."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Đối với hầu hết các bảng Power BI, chế độ lưu trữ được đặt khi bảng được thêm. Không thể thay đổi bảng Nhập trực tiếp thành DirectQuery; nó phải được tạo lại bằng cách thêm lại nó với DirectQuery đã chọn. [Microsoft Learn: Table storage mode in Power BI semantic models](https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-storage-mode)",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 8",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/8-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-9",
    "questionNumber": 9,
    "text": "Case study: Litware, Inc. is an online retailer that uses Power BI. Its data model includes a Sales fact table with sales_date_id and sales_ship_date_id key columns, a Date table, and a Weekly_Returns table. The customer service department requires reports that can be filtered by sales date and ship date independently.\n\nYou need to establish relationships that satisfy the customer service department's reporting requirements.\n\nWhat should you create?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a one-to-many relationship from Date[date_id] to Sales[sales_date_id] and another one-to-many relationship from Date[date_id] to Weekly_Returns[week_id]"
      },
      {
        "key": "B",
        "text": "a one-to-many relationship from Sales[sales_date_id] to Date[date_id] and a one-to-many relationship from Sales[sales_ship_date_id] to Date[date_id]"
      },
      {
        "key": "C",
        "text": "an additional date table named ShipDate, a many-to-many relationship from Sales[sales_date_id] to Date[date_id], and a many-to-many relationship from Sales[sales_ship_date_id] to ShipDate[date_id]"
      },
      {
        "key": "D",
        "text": "an additional date table named ShipDate, a one-to-many relationship from Date[date_id] to Sales[sales_date_id], and a one-to-many relationship from ShipDate[date_id] to Sales[sales_ship_date_id]"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Đây là một kịch bản thứ nguyên đóng vai: bảng dữ kiện Bán hàng có hai vai trò ngày độc lập (ngày bán hàng và ngày giao hàng) mà bộ phận dịch vụ khách hàng phải có khả năng lọc đồng thời và độc lập. Theo hướng dẫn lập mô hình Power BI của Microsoft, khi các báo cáo phải lọc hoặc nhóm theo nhiều vai trò ngày cùng lúc, thì một bảng Ngày duy nhất với một mối quan hệ đang hoạt động và một mối quan hệ không hoạt động (option B) là không đủ — chỉ có thể kích hoạt một mối quan hệ không hoạt động trong một thước đo duy nhất thông qua USERELATIONSHIP(), vốn không hỗ trợ cắt/nhóm đồng thời, độc lập trên một hình ảnh và ví dụ \"Bán hàng\" của chính Microsoft cho mẫu đó giả định rõ ràng 'Yêu cầu no để lọc đồng thời khoảng thời gian đặt hàng và ngày vận chuyển.' Giải pháp được hỗ trợ để lọc đồng thời, độc lập là sao chép thứ nguyên nhập vai: thêm bảng ngày thứ hai (ở đây là ShipDate) và cung cấp cho mỗi cột ngày trong bảng thực tế mối quan hệ một-nhiều đang hoạt động của riêng nó — Ngày[date_id] → Doanh số[ngày_bán_id] và ShipDate[ngày_id] → Doanh số[ngày_hàng_ngày_id] bán hàng. Mối quan hệ nhiều-nhiều (option C) là không cần thiết vì cả hai cột chính là duy nhất trên mỗi hàng và Ngày liên quan đến bảng Weekly_Returns không liên quan (option A) hoàn toàn không giải quyết được yêu cầu ngày bán hàng/ngày giao hàng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 9",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/9-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-10",
    "questionNumber": 10,
    "text": "You have a Power BI report named Orders that supports the following analysis:  \n  \n- Total sales over time  \n- The count of orders over time  \n- New and repeat customer counts  \n  \nThe data model size is nearing the limit for a dataset in shared capacity. The model view for the dataset is shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730502414-ee54xl52.jpg)  \n  \nThe data view for the Orders table is shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730505063-dqqxzblr.png)  \n  \nThe Orders table is related to the Customers table by using the CustomerID column. The Orders table is related to the Date table by using the OrderDate column.  \n  \nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "Summarizing Orders by the CustomerID, OrderID, and OrderDate columns will reduce the model size while still supporting the current analysis.",
        "correctAnswer": "Yes"
      },
      {
        "id": "2",
        "text": "Removing the CustomerID column from Orders will reduce the model size while still supporting the current analysis.",
        "correctAnswer": "No"
      },
      {
        "id": "3",
        "text": "Removing the UnitPrice and Discount columns from Orders will reduce the model size while still supporting the current analysis.",
        "correctAnswer": "Yes"
      }
    ],
    "options": [
      {
        "key": "Yes",
        "text": "Yes"
      },
      {
        "key": "No",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "1:Yes",
      "2:No",
      "3:Yes"
    ],
    "explanation": "Việc tóm tắt trước bảng dữ kiện dòng đơn hàng ở phần CustomerID, OrderID và OrderDate sẽ giảm số hàng trong khi vẫn giữ lại đơn hàng, ngày, khách hàng và thông tin bán hàng tổng hợp cần thiết cho phân tích. ID khách hàng phải được giữ nguyên vì nó hỗ trợ mối quan hệ với Khách hàng và phân biệt khách hàng mới với khách hàng thường xuyên. Đơn giá và Chiết khấu là không cần thiết khi Tổng doanh số được giữ lại để tính toán tổng doanh số. Microsoft khuyên bạn nên tải dữ liệu thực tế được tóm tắt trước trong đó dữ liệu kết quả vẫn hỗ trợ các yêu cầu báo cáo và xóa các cột không phục vụ mục đích báo cáo cũng như cấu trúc mô hình.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783730502414-ee54xl52.jpg",
    "sourceTitle": "Examcademy PL-300 Question 10",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/10-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-11",
    "questionNumber": 11,
    "text": "You have a Power BI report with one page. That page includes two line charts and one bar chart.  \n  \nYou need to ensure that users can perform the following actions for all three visuals:  \n  \n- Switch the measures used in the visuals.  \n- Change the visualization type.  \n- Add a legend.  \n  \nThe solution must minimize development effort.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create a bookmark for each acceptable combination of visualization type, measure, and legend in the bar chart."
      },
      {
        "key": "B",
        "text": "Edit the interactions between the three visuals."
      },
      {
        "key": "C",
        "text": "Enable personalization for the report."
      },
      {
        "key": "D",
        "text": "Enable personalization for each visual."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Tính năng Cá nhân hóa hình ảnh của Power BI cho phép người dùng báo cáo hoán đổi các thước đo, thay đổi loại trực quan hóa và thêm hoặc xóa chú giải. Việc bật tính năng cá nhân hóa cho báo cáo sẽ giúp tất cả hình ảnh trong báo cáo đó đủ điều kiện để cá nhân hóa, giảm thiểu nỗ lực cấu hình.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 11",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/11-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-12",
    "questionNumber": 12,
    "text": "You are creating a quick measure as shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783732310292-q3uy0nml.png)  \n  \nYou need to create a monthly rolling average measure for Sales over time.  \n  \nHow should you configure the quick-measure calculation?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Số đo nhanh trung bình luân phiên tính trung bình số đo cơ sở bằng số trong một khoảng thời gian dựa trên ngày. Tổng doanh số là thước đo doanh số bán hàng bằng số, Ngày cung cấp trục thời gian và Tháng đặt đơn vị của cửa sổ cuộn thành tháng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783732310292-q3uy0nml.png",
    "sourceTitle": "Examcademy PL-300 Question 12",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/12-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-13",
    "questionNumber": 13,
    "text": "You have a Power BI report that includes a bar chart. The bar chart shows sales by country.  \n  \nYou need to ensure that a screen reader can access a summary of the data displayed on the bar chart.  \n  \nWhat should you configure on the bar chart?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "conditional formatting"
      },
      {
        "key": "B",
        "text": "alt text"
      },
      {
        "key": "C",
        "text": "the tab order"
      },
      {
        "key": "D",
        "text": "the layer order"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Văn bản thay thế cung cấp mô tả văn bản hoặc tóm tắt về hình ảnh Power BI cho người dùng trình đọc màn hình, giúp thông tin được hiển thị của biểu đồ có thể truy cập được.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 13",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/13-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-14",
    "questionNumber": 14,
    "text": "You have a Power BI semantic model.  \n  \nYou need to configure row-level security (RLS) to limit data access for users with Viewer permissions.  \n  \nWhich three actions should you take, in sequence?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "1",
        "text": "1.",
        "correctAnswer": "E"
      },
      {
        "id": "2",
        "text": "2.",
        "correctAnswer": "B"
      },
      {
        "id": "3",
        "text": "3.",
        "correctAnswer": "D"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Assign the users the Contributor role for the Power BI workspace."
      },
      {
        "key": "B",
        "text": "Publish the semantic model."
      },
      {
        "key": "C",
        "text": "Assign the users the Member role for the Power BI workspace."
      },
      {
        "key": "D",
        "text": "From the Power BI service, assign the new RLS role to the users."
      },
      {
        "key": "E",
        "text": "From Microsoft Power BI Desktop, create a new RLS role by using a DAX filter."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Assign the users the Contributor role for the Power BI workspace."
      },
      {
        "key": "B",
        "text": "Publish the semantic model."
      },
      {
        "key": "C",
        "text": "Assign the users the Member role for the Power BI workspace."
      },
      {
        "key": "D",
        "text": "From the Power BI service, assign the new RLS role to the users."
      },
      {
        "key": "E",
        "text": "From Microsoft Power BI Desktop, create a new RLS role by using a DAX filter."
      }
    ],
    "correctAnswers": [
      "1=E",
      "2=B",
      "3=D"
    ],
    "explanation": "Xác định vai trò RLS và bộ lọc bảng DAX của nó trong Máy tính để bàn Power BI, xuất bản mô hình ngữ nghĩa, sau đó chỉ định người dùng hoặc nhóm bảo mật cho vai trò đó trong dịch vụ Power BI. RLS hạn chế Người xem, trong khi Thành viên và Người đóng góp trong không gian làm việc có quyền chỉnh sửa và RLS không áp dụng cho họ.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 14",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/14-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-15",
    "questionNumber": 15,
    "text": "You are reviewing a Power BI data model.  \n  \nYou have a calculated table with the following definition:  \n  \n```DAX  \nProductList = INTERSECT ( ProductsGroupA, ProductsGroupB )  \n```  \n  \nYou need to determine the result of the DAX expression.  \n  \nWhich rows are returned in `ProductList`?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "all the rows in ProductsGroupB that have a matching row in ProductsGroupA"
      },
      {
        "key": "B",
        "text": "all the rows in both tables"
      },
      {
        "key": "C",
        "text": "all the rows in ProductsGroupA that have a matching row in ProductsGroupB"
      },
      {
        "key": "D",
        "text": "all the rows in ProductsGroupA that have no matching row in ProductsGroupB."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "DAX `INTERSECT` trả về các hàng từ biểu thức bảng đầu tiên cũng có trong biểu thức bảng thứ hai. Do đó, các hàng được trả về bắt nguồn từ `ProductsGroupA` và phải có hàng khớp trong `ProductsGroupB`.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 15",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/15-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-16",
    "questionNumber": 16,
    "text": "You have a Power BI dataset containing quarterly sales performance data.  \n  \nYou need to allow managers to review the data in a format that meets these requirements:  \n  \n- Is optimized for printing.  \n- Renders data in Microsoft Excel, Word, PowerPoint, and PDF formats.  \n  \nWhat should you create?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a template app"
      },
      {
        "key": "B",
        "text": "a dashboard"
      },
      {
        "key": "C",
        "text": "a paginated report"
      },
      {
        "key": "D",
        "text": "an interactive report"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Báo cáo phân trang Power BI được tối ưu hóa cho bố cục hướng trang, sẵn sàng in và có thể hiển thị ở các định dạng Microsoft Excel, Word, PowerPoint và PDF.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 16",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/16-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-17",
    "questionNumber": 17,
    "text": "You have a Power BI workspace.  \n  \nYou need to create two reports that meet these requirements:  \n  \n- Report1: Optimized for printing and can be delivered to users through a scheduled email subscription  \n- Report2: Optimized for dynamic user interactivity  \n  \nWhich format should you use for each report?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Báo cáo phân trang Power BI (.rdl) được thiết kế cho đầu ra cố định, có định dạng cao, sẵn sàng in và có thể được phân phối thông qua đăng ký email theo lịch trình. Báo cáo Power BI tiêu chuẩn (.pbix) cung cấp các tính năng khám phá và trực quan hóa tương tác, chẳng hạn như lọc chéo và truy sâu.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 17",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/17-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-18",
    "questionNumber": 18,
    "text": "$35",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Tên giáo viên là thuộc tính mô tả của giáo viên và thuộc thứ nguyên Giáo viên. Số Kỳ mô tả lần xuất hiện của lớp theo lịch trình được xác định bởi ID Lớp, do đó nó thuộc thứ nguyên Lớp; nó hỗ trợ đếm lớp và phân tích điểm danh theo tiết. Các số đo về sự tham dự vẫn còn trong bảng dữ kiện về sự tham dự.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 18",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/18-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-19",
    "questionNumber": 19,
    "text": "You have four sales regions, each with multiple sales managers.  \n  \nYou implement row-level security (RLS) in a data model and assign the applicable mail-enabled security group to each role.  \n  \nYou have sales reports that allow analysis by region. Sales managers can view sales records for their own region, but are prevented from viewing records for other regions.  \n  \nA sales manager moves to another region.  \n  \nYou need to ensure that the sales manager can view the correct sales data.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Change the Microsoft Power BI license type of the sales manager."
      },
      {
        "key": "B",
        "text": "From Microsoft Power BI Desktop, edit the Row-Level Security setting for the reports."
      },
      {
        "key": "C",
        "text": "Manage the permissions of the underlying dataset."
      },
      {
        "key": "D",
        "text": "Request that the sales manager be added to the correct Azure Active Directory group."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Power BI RLS hỗ trợ các nhóm kích hoạt thư với tư cách là thành viên vai trò. Khi quyền truy cập khu vực được quản lý bởi các nhóm đó, việc thay đổi tư cách thành viên nhóm Microsoft Entra ID của người quản lý sẽ chuyển người quản lý vào vai trò có bộ lọc hàng cho phép các bản ghi của khu vực mới.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 19",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/19-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-20",
    "questionNumber": 20,
    "text": "You need to create a dataset.  \n  \nWhich dataset mode should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Import"
      },
      {
        "key": "B",
        "text": "DirectQuery"
      },
      {
        "key": "C",
        "text": "Composite"
      },
      {
        "key": "D",
        "text": "live connection"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Import mode tải bản sao của dữ liệu nguồn vào tập dữ liệu Power BI mới được tạo (mô hình ngữ nghĩa), cho phép mô hình lưu trữ và truy vấn trực tiếp dữ liệu đó.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 20",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/20-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-21",
    "questionNumber": 21,
    "text": "A Power Query Editor query contains customer data, as shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783742680808-eanksodz.png)",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Tên khách hàng là cột được liệt kê duy nhất có ít giá trị riêng biệt (18.400) hơn tổng giá trị (18.484), biểu thị các giá trị trùng lặp. 12 ký tự cuối cùng giữ nguyên số điện thoại địa phương đã định dạng, chứa 10 chữ số, đồng thời loại bỏ mọi phần mã gọi quốc gia đứng đầu.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783742680808-eanksodz.png",
    "sourceTitle": "Examcademy PL-300 Question 21",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/21-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-22",
    "questionNumber": 22,
    "text": "You have a Power BI semantic model containing a table named Table1. Table1 has the following columns:  \n  \n- WebsiteName  \n- URL  \n  \nYou need to create a report named Report1 that includes a table visual. The solution must meet these requirements:  \n  \n- Display the website name.  \n- Allow users to navigate to the website's URL by selecting the website name.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "data categories"
      },
      {
        "key": "B",
        "text": "Conditional Formatting"
      },
      {
        "key": "C",
        "text": "inline hierarchy labels"
      },
      {
        "key": "D",
        "text": "URL icons"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Định dạng có điều kiện của URL Web có thể định dạng cột Tên trang web dưới dạng siêu liên kết hiện hoạt và sử dụng cột URL làm trường cung cấp từng đích liên kết. Điều này hiển thị tên trang web thay vì URL thô trong khi cho phép chọn tên để điều hướng đến URL đó.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 22",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/22-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-23",
    "questionNumber": 23,
    "text": "You have a Power BI report for the procurement department. The report includes data from the following tables.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730282838-xd3nrs6m.jpg)  \n  \nA one-to-many relationship exists from Suppliers to LineItems, using the ID and Supplier ID columns. The report includes the visuals shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730285446-qr4dmzmi.png)  \n  \nYou need to reduce the dataset size without affecting the visuals. What should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Merge Suppliers and LineItems."
      },
      {
        "key": "B",
        "text": "Remove the LineItems[Description] column."
      },
      {
        "key": "C",
        "text": "Remove the rows from LineItems where LineItems[Invoice Date] is before the beginning of last month."
      },
      {
        "key": "D",
        "text": "Group LineItems by LineItems[Invoice ID] and LineItems[Invoice Date] with a sum of LineItems[Price]."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Một cột mô hình có thể bị xóa khi nó không hỗ trợ báo cáo cũng như cấu trúc mô hình. LineItems[Description] không được sử dụng bởi hình ảnh được liệt kê và không được yêu cầu bởi mối quan hệ, vì vậy, việc xóa nó sẽ làm giảm tập dữ liệu trong khi vẫn giữ được tất cả kết quả trực quan.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783730282838-xd3nrs6m.jpg",
    "sourceTitle": "Examcademy PL-300 Question 23",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/23-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-24",
    "questionNumber": 24,
    "text": "You import a Microsoft Excel spreadsheet into Power Query Editor and name the query Sales_Spreadsheet.  \n  \nSales_Spreadsheet contains these columns:  \n  \n- Customer ID  \n- Customer Name  \n- Date  \n- Total Sales Amount  \n  \nYou plan to use the Sales_Spreadsheet query to load two tables, named Customer and Sales, into the associated semantic model. The tables are related by the Customer ID column in each query. The solution must satisfy these requirements:  \n  \n- The Customer query must include the Customer ID and Customer Name columns.  \n- The Sales query must include the Customer ID, Date, and Total Sales Amount columns.  \n- Power Query logic must be consolidated to prevent duplicated logic across the queries and ensure that updates occur in one location.  \n  \nIdentify how to create the Sales query and what to do with the Sales_Spreadsheet query before loading the model.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Truy vấn Power Query được tham chiếu sử dụng các bước của truy vấn nguồn mà không trùng lặp chúng và các thay đổi tiếp theo đối với luồng nguồn tới truy vấn được tham chiếu. Do đó, việc giữ Sales_Spreadsheet làm truy vấn dàn dựng được chia sẻ sẽ tập trung logic nhập và chuyển đổi cho các truy vấn Khách hàng và Bán hàng. Việc tắt tải truy vấn theo giai đoạn sẽ ngăn không cho bảng thứ ba không cần thiết được tải vào mô hình ngữ nghĩa trong khi vẫn cho phép tải các truy vấn đầu ra được tham chiếu.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 24",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/24-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-25",
    "questionNumber": 25,
    "text": "You have a Power BI semantic model containing a table named Opportunity.  \n  \nThe Opportunity table has a Qualification column whose values range from 0 to 1.  \n  \nYou need to create a measure that scores opportunities as low, medium, or high.  \n  \nHow should you complete the DAX formula?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "DAX IF lồng nhau chỉ áp dụng ngưỡng thứ hai sau khi loại trừ các giá trị dưới 0,5. Điều này tạo ra Thấp cho các giá trị dưới 0,5, Cao cho các giá trị trên 0,7 và Trung bình cho tất cả các giá trị còn lại.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 25",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/25-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-26",
    "questionNumber": 26,
    "text": "You have a Power BI model containing a table named Sales. The Sales table has these columns:  \n  \n- Order Line ID  \n- Product ID  \n- Unit Price  \n- Order ID  \n- Quantity  \n  \nOrders are uniquely identified by Order ID and can include multiple order lines. Each order line in an order has a different Product ID.  \n  \nYou need to create a DAX measure that counts the number of orders.  \n  \nWhich formula should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Count('Sales'[Order ID])"
      },
      {
        "key": "B",
        "text": "CountA('Sales' [Order ID])"
      },
      {
        "key": "C",
        "text": "CountRows('Sales')"
      },
      {
        "key": "D",
        "text": "DistinctCount('Sales' [Order ID])"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Vì một đơn hàng có thể trải rộng trên nhiều hàng bán hàng nên thước đo phải tính các giá trị ID đơn hàng duy nhất thay vì các hàng hoặc số lần xuất hiện ID không trống. `DISTINCTCOUNT` trả về một số đếm cho mỗi mã định danh đơn hàng riêng biệt.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 26",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/26-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-27",
    "questionNumber": 27,
    "text": "You are creating a financial report in Power BI. The `financials` table includes `Date` and `Sales` columns. Create a measure that calculates the relative sales change compared with the preceding quarter.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "`CALCULATE` đánh giá biểu thức bán hàng trong ngữ cảnh bộ lọc đã sửa đổi. `DATEADD` chuyển bối cảnh ngày hiện tại lùi lại một quý, tạo ra giá trị doanh số của quý trước. `DIVIDE` sau đó trả về thay đổi tương đối dưới dạng (doanh số hiện tại - doanh số quý trước) chia cho doanh số quý trước, đồng thời xử lý mẫu số 0 một cách an toàn.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 27",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/27-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-28",
    "questionNumber": 28,
    "text": "You have a Power BI dataset and an associated report.  \n  \nYou need to ensure that users can analyze data in Microsoft Excel only by connecting directly to the dataset.  \n  \nYou grant the users Build permission on the dataset.  \n  \nWhat should you do next?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Certify the dataset used by the report."
      },
      {
        "key": "B",
        "text": "Change the default visual interaction for the report."
      },
      {
        "key": "C",
        "text": "For the report, change the Export data setting to None."
      },
      {
        "key": "D",
        "text": "For the report, change the Export data setting to Summarized data, data with current layout and underlying data."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Quyền xây dựng cho phép người dùng sử dụng Phân tích trong Excel với kết nối trực tiếp với mô hình ngữ nghĩa Power BI. Việc đặt tùy chọn Xuất dữ liệu của báo cáo thành Không có sẽ vô hiệu hóa việc xuất dữ liệu báo cáo-hình ảnh, do đó, phân tích Excel bị giới hạn ở các kết nối trực tiếp đến tập dữ liệu.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 28",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/28-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-29",
    "questionNumber": 29,
    "text": "You are profiling data by using Power Query Editor.  \n  \nYou have a table named Reports that contains a column named State. The distribution and quality metrics for the data in State are shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1785695720148-gskxitdq.jpg)  \n  \nUse the drop-down menus to complete each statement based on the information in the graphic.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Power Query xác định khác biệt là tổng số giá trị khác nhau trong một cột và duy nhất là các giá trị chỉ có một phiên bản. Do đó, cấu hình hiển thị 69 giá trị khác nhau bao gồm giá trị rỗng và 4 giá trị không rỗng chỉ xuất hiện một lần.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1785695720148-gskxitdq.jpg",
    "sourceTitle": "Examcademy PL-300 Question 29",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/29-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-30",
    "questionNumber": 30,
    "text": "You have a report that includes a bar chart and a column chart. The bar chart displays customer count by customer segment. The column chart displays sales by month.  \n  \nYou need to ensure that, when a segment is selected in the bar chart, you can see which portion of the total monthly sales belongs to that customer segment.  \n  \nHow should the visual interactions be configured on the column chart when the bar chart is selected?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "highlight"
      },
      {
        "key": "B",
        "text": "filter"
      },
      {
        "key": "C",
        "text": "no impact"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Việc làm nổi bật chéo sẽ duy trì cột tổng doanh thu mỗi tháng và nhấn mạnh phần liên quan đến phân khúc khách hàng đã chọn. Thay vào đó, việc lọc chéo sẽ loại bỏ các phân đoạn không được chọn, do đó, tổng số hàng tháng đầy đủ sẽ hiển thị no lâu hơn. Các tài liệu của Microsoft đánh dấu chéo sẽ nhấn mạnh dữ liệu liên quan mà không ẩn dữ liệu khác.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 30",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/30-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-31",
    "questionNumber": 31,
    "text": "HOTSPOT -  \n  \nYou have a Power BI report with the following tables.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783729811107-i07pp5zf.png)  \n  \nYou have the following DAX measure.  \n  \n```DAX  \nAccounts :=  \nCALCULATE (  \nDISTINCTCOUNT (Balances[AccountID]),  \nLASTDATE ('Date'[Date])  \n```  \n  \nFor each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "A table visual that displays the date hierarchy at the year level and the [Accounts] measure will show the total number of accounts that were live throughout the year.",
        "correctAnswer": "No"
      },
      {
        "id": "2",
        "text": "A table visual that displays the date hierarchy at the month level and the [Accounts] measure will show the total number of accounts that were live throughout the month.",
        "correctAnswer": "No"
      },
      {
        "id": "3",
        "text": "A table visual that displays the date hierarchy at the day level and the [Accounts] measure will show the total number of accounts that were live that day.",
        "correctAnswer": "Yes"
      }
    ],
    "options": [
      {
        "key": "Yes",
        "text": "Yes"
      },
      {
        "key": "No",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "1:No",
      "2:No",
      "3:Yes"
    ],
    "explanation": "LASTDATE trả về ngày cuối cùng trong ngữ cảnh hiện tại, trong khi CALCULATE đánh giá biểu thức của nó trong ngữ cảnh bộ lọc được sửa đổi kết quả. Do đó, hàng năm và tháng chỉ biểu thị ngày cuối cùng của khoảng thời gian tương ứng chứ không phải tất cả các ngày trong đó. Hàng ngày có một ngày trong ngữ cảnh, vì vậy số lượng riêng biệt thể hiện các tài khoản hoạt động vào ngày đó.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783729811107-i07pp5zf.png",
    "sourceTitle": "Examcademy PL-300 Question 31",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/31-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-32",
    "questionNumber": 32,
    "text": "You have a semantic model whose relationships are shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1785752443249-iajpj8s8.png)",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "DimDate đóng ba vai trò đối với bảng dữ kiện: ngày đặt hàng, ngày vận chuyển và ngày yêu cầu. Mối quan hệ tích cực của nó là với OrderDate, do đó, bộ lọc DimDate sẽ truyền tới FactOrderDetails thông qua OrderDate theo mặc định. Mối quan hệ Ngày vận chuyển và Ngày bắt buộc không hoạt động và yêu cầu kích hoạt rõ ràng trong phép tính để truyền bộ lọc.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1785752443249-iajpj8s8.png",
    "sourceTitle": "Examcademy PL-300 Question 32",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/32-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-33",
    "questionNumber": 33,
    "text": "You have a Power BI report that uses row-level security (RLS).  \n  \nYou need to delegate RLS membership maintenance to an Azure network security team. The solution must **NOT** give the Azure network security team the ability to manage reports, datasets, or dashboards.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Grant the Read and Build permissions for the Power BI datasets to the Azure network security team."
      },
      {
        "key": "B",
        "text": "Configure custom instructions for the Request access feature that instructs users to contact the Azure network security team."
      },
      {
        "key": "C",
        "text": "Instruct the Azure network security team to create security groups. Configure RLS to use the groups."
      },
      {
        "key": "D",
        "text": "Add the Azure network security team as members of the RLS role."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Các vai trò Power BI RLS hỗ trợ các nhóm bảo mật Microsoft Entra với tư cách là thành viên vai trò. Việc chỉ định các nhóm đó cho các vai trò RLS cho phép nhóm bảo mật mạng Azure duy trì tư cách thành viên nhóm trong Microsoft Entra ID, trong khi các quyền quản lý nội dung Power BI vẫn chưa được chỉ định. Hướng dẫn của Microsoft đặc biệt khuyến nghị ánh xạ các nhóm bảo mật tới các vai trò mô hình ngữ nghĩa vì tư cách thành viên nhóm có thể được quản lý trong Microsoft Entra ID và được ủy quyền cho quản trị viên mạng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 33",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/33-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-34",
    "questionNumber": 34,
    "text": "You have a Power BI report containing four pages.  \n  \nEach page includes a slicer for a field named **Country**.  \n  \nYou need to ensure that when a user selects a country on page 1, that selection is retained on page 2 and page 3. The solution must ensure that page 4 is not affected by selections on the other pages.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Remove the Country slicer from page 1, page 2, and page 3. Add the Country field to the page-level filters."
      },
      {
        "key": "B",
        "text": "Remove the Country slicer from page 1, page 2, and page 3. Add the Country field to the report-level filters."
      },
      {
        "key": "C",
        "text": "Move the Country slicer from page 2 and page 3 to page 1."
      },
      {
        "key": "D",
        "text": "Sync the Country slicer on page 1, page 2, and page 3."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Bộ cắt đồng bộ Power BI có thể đồng bộ hóa bộ cắt Quốc gia trên các trang báo cáo đã chọn. Chỉ đồng bộ hóa các trang 1, 2 và 3 mang lựa chọn của người dùng trong số các trang đó đồng thời loại trừ trang 4 khỏi hiệu ứng bộ lọc.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 34",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/34-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-35",
    "questionNumber": 35,
    "text": "How should the reports be distributed to the board?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Ứng dụng Power BI phân phối nội dung báo cáo được tuyển chọn cho đối tượng người tiêu dùng mà không cần thêm những người dùng đó làm thành viên không gian làm việc. Nhóm bảo mật hỗ trợ thư Azure Active Directory tập trung quản lý quyền truy cập bảng; danh sách phân phối động không phải là nhóm kiểm soát truy cập.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 35",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/35-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-36",
    "questionNumber": 36,
    "text": "You have a Power BI model containing a table named Employee. The table includes the following data.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783732319420-zhn7bfsg.png)  \n  \nEach employee has one manager, as indicated by the ParentEmployeeID column.  \n  \nAll reporting paths lead to the CEO at the top of the organizational hierarchy.  \n  \nYou need to create a calculated column that returns the number of levels from each employee to the CEO.  \n  \nWhich DAX expression should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "PATHLENGTH(PATH(Employee[EmployeeID],Employee[ParentEmployeeID]))"
      },
      {
        "key": "B",
        "text": "PATHITEM(PATH(Employee[EmployeeID],Employee[ParentEmployeeID]),1,INTEGER)"
      },
      {
        "key": "C",
        "text": "PATHCONTAINS(PATH(Employee[EmployeeID],Employee[ParentEmployeeID]),1)"
      },
      {
        "key": "D",
        "text": "PATH(Employee[EmployeeID],Employee[ParentEmployeeID])"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "`PATH` trả về đường dẫn cha-con cho một nhân viên và `PATHLENGTH` trả về số mục trong đường dẫn đó, bao gồm cả nhân viên. Do đó, `PATHLENGTH(PATH(Employee[EmployeeID],Employee[ParentEmployeeID]))` trả về số cấp bậc phân cấp của nhân viên cho Giám đốc điều hành.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783732319420-zhn7bfsg.png",
    "sourceTitle": "Examcademy PL-300 Question 36",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/36-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-37",
    "questionNumber": 37,
    "text": "You create a report by using Microsoft Power BI Desktop.  \n  \nThe report uses data from a Microsoft SQL Server Analysis Services (SSAS) tabular model located on your company's internal network.  \n  \nYou plan to publish the report to the Power BI Service.  \n  \nWhat should you implement to ensure that users who consume the report from the Power BI Service have the most up-to-date data from the tabular model?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a scheduled refresh of the semantic model"
      },
      {
        "key": "B",
        "text": "an OData feed"
      },
      {
        "key": "C",
        "text": "an On-premises data gateway"
      },
      {
        "key": "D",
        "text": "a subscription"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Các mô hình dạng bảng SSAS yêu cầu kết nối trực tiếp để thực hiện các truy vấn trong thời gian thực. Khi xuất bản lên Dịch vụ Power BI, cổng dữ liệu tại chỗ cho phép Dịch vụ truy cập vào mạng nội bộ của bạn và làm mới dữ liệu trực tiếp từ mô hình SSAS.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 37",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/37-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-38",
    "questionNumber": 38,
    "text": "You publish the dataset to Power BI.  \n  \nFor each statement, select **Yes** when it is true. Otherwise, select **No**.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "You need an on-premises data gateway to refresh the dataset.",
        "correctAnswer": "No"
      },
      {
        "id": "2",
        "text": "You need to configure a scheduled refresh of the dataset.",
        "correctAnswer": "Yes"
      },
      {
        "id": "3",
        "text": "You can use Basic authentication on the dataset to connect to the data.",
        "correctAnswer": "Yes"
      }
    ],
    "options": [
      {
        "key": "Yes",
        "text": "Yes"
      },
      {
        "key": "No",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "1:No",
      "2:Yes",
      "3:Yes"
    ],
    "explanation": "Chỉ cần có cổng khi Power BI không thể truy cập trực tiếp vào nguồn dữ liệu, chẳng hạn như đối với các nguồn tại chỗ hoặc mạng riêng. Mô hình ngữ nghĩa đã nhập cần được làm mới theo lịch trình để tải dữ liệu nguồn hiện tại. Trình kết nối Nguồn cấp OData Power Query hỗ trợ xác thực Cơ bản.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 38",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/38-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-39",
    "questionNumber": 39,
    "text": "You have a Microsoft SharePoint Online site that includes several document libraries.  \n  \nOne document library contains manufacturing reports stored as Microsoft Excel files. All of the manufacturing reports use the same data structure.  \n  \nYou need to use Power BI Desktop to load only the manufacturing reports into a table for analysis.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Get data from a SharePoint folder and enter the site URL Select Transform, then filter by the folder path to the manufacturing reports library."
      },
      {
        "key": "B",
        "text": "Get data from a SharePoint list and enter the site URL. Select Combine & Transform, then filter by the folder path to the manufacturing reports library."
      },
      {
        "key": "C",
        "text": "Get data from a SharePoint folder, enter the site URL, and then select Combine & Load."
      },
      {
        "key": "D",
        "text": "Get data from a SharePoint list, enter the site URL, and then select Combine & Load."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Trình kết nối thư mục SharePoint được sử dụng để truy cập các tệp trong thư viện tài liệu SharePoint. Việc chuyển đổi danh sách tệp được trả về cho phép nó được lọc theo **Đường dẫn thư mục** để chỉ giữ lại thư viện báo cáo sản xuất trước khi các tệp Excel được kết hợp thành một bảng. Cấu trúc dữ liệu được chia sẻ làm cho các tập tin phù hợp để kết hợp.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 39",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/39-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-40",
    "questionNumber": 40,
    "text": "You create a Power BI report named RPT1 that includes sales data. The data has 10 million rows, and RPT1 contains 15 different visuals.  \n  \nUsers report that RPT1 loads slowly.  \n  \nYou need to investigate the cause of the issue.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Power Query Editor"
      },
      {
        "key": "B",
        "text": "Query Diagnostics"
      },
      {
        "key": "C",
        "text": "DAX query view"
      },
      {
        "key": "D",
        "text": "Performance analyzer"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Trình phân tích hiệu suất ghi lại thời gian tải của mọi hình ảnh báo cáo và chia nhỏ thành các thành phần như thực thi truy vấn DAX, thời gian DirectQuery và hiển thị hình ảnh. Nó xác định các hoạt động trực quan hoặc báo cáo chịu trách nhiệm cho việc tải chậm.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 40",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/40-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-41",
    "questionNumber": 41,
    "text": "You have a Power BI model that contains two tables named Sales and Date. The Sales table relates to the Date table by using a many-to-one relationship. The Sales table contains the following columns:  \n  \n• Date  \n\n• Product  \n\n• SalesAmount  \n  \nYou need to create a DAX measure for a rolling 31-day sales total that will return the total sales amount for a selected date and the previous 30 days.  \n  \nWhich DAX expression should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "CALCULATE(SUM(Sales[SalesAmount]), DATEADD(Date[Date], -30, DAY))"
      },
      {
        "key": "B",
        "text": "CALCULATE(SUM(Sales[SalesAmount]), DATESBETWEEN(Date[Date], Max('Date'[Date])-30, Max('Date'[Date])))"
      },
      {
        "key": "C",
        "text": "CALCULATE(SUM(Sales[SalesAmount]), DATESMTD(Date[Date]))"
      },
      {
        "key": "D",
        "text": "CALCULATE(SUM(Sales[SalesAmount]), DISTINCTCOUNT(Date[Date]) = 31)"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "DATESBETWEEN tạo phạm vi ngày liên tục từ 30 ngày trước ngày tối đa cho đến ngày tối đa, tính toán chính xác tổng 31 ngày luân phiên. Riêng DATEADD sẽ dịch chuyển không chính xác bối cảnh bộ lọc trong lựa chọn hiện tại thay vì tạo phạm vi ngày bao gồm.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 41",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/41-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-42",
    "questionNumber": 42,
    "text": "You create a report to help the sales team understand its performance and the factors driving sales.  \n  \nThe team needs a single visualization to identify the factors that affect success. Which visualization type should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Key influencers"
      },
      {
        "key": "B",
        "text": "Line and clustered column chart"
      },
      {
        "key": "C",
        "text": "Q&A"
      },
      {
        "key": "D",
        "text": "Funnel chart"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Hình ảnh trực quan của Người có ảnh hưởng chính xác định và xếp hạng các yếu tố chính ảnh hưởng đến chỉ số hoặc kết quả đã chọn, giúp nó phù hợp để phân tích các yếu tố thúc đẩy thành công trong bán hàng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 42",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/42-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-43",
    "questionNumber": 43,
    "text": "You have a Power BI dashboard named DashboardA that includes a tile named TileA. TileA contains a treemap visual from a report named ReportA.  \n  \nYou must give DashboardA users additional tiles related to the content of TileA.  \n  \nWhich three actions should you take, in order?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "step1",
        "text": "Slot 1:",
        "correctAnswer": "C"
      },
      {
        "id": "step2",
        "text": "Slot 2:",
        "correctAnswer": "B"
      },
      {
        "id": "step3",
        "text": "Slot 3:",
        "correctAnswer": "A"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "From Focus mode, pin the relevant visuals to DashboardA."
      },
      {
        "key": "B",
        "text": "From Focus mode, review the generated visuals."
      },
      {
        "key": "C",
        "text": "From DashboardA, select the TileA options, and then select View insights."
      },
      {
        "key": "D",
        "text": "From ReportA, select the treemap visual options, and then select Spotlight."
      },
      {
        "key": "E",
        "text": "From ReportA, select Get Insights."
      },
      {
        "key": "F",
        "text": "From DashboardA, select TileA to open ReportA."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "From Focus mode, pin the relevant visuals to DashboardA."
      },
      {
        "key": "B",
        "text": "From Focus mode, review the generated visuals."
      },
      {
        "key": "C",
        "text": "From DashboardA, select the TileA options, and then select View insights."
      },
      {
        "key": "D",
        "text": "From ReportA, select the treemap visual options, and then select Spotlight."
      },
      {
        "key": "E",
        "text": "From ReportA, select Get Insights."
      },
      {
        "key": "F",
        "text": "From DashboardA, select TileA to open ReportA."
      }
    ],
    "correctAnswers": [
      "step1=C",
      "step2=B",
      "step3=A"
    ],
    "explanation": "Thông tin chi tiết về ngăn xếp trên trang tổng quan được bắt đầu từ menu Tùy chọn khác của ngăn xếp bằng cách chọn Xem thông tin chi tiết. Power BI mở ô ở chế độ Tiêu điểm và hiển thị thẻ thông tin chuyên sâu; Sau đó, các thẻ thông tin chuyên sâu có liên quan có thể được ghim vào trang tổng quan dưới dạng các ô xếp mới.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 43",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/43-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-44",
    "questionNumber": 44,
    "text": "You have a Power BI visual that uses indicators to show out-of-range values, as shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783731093513-6iq73eio.jpg)  \n  \nUse the drop-down menus to complete each statement based on the graphic.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Biểu đồ đường Power BI hiển thị số đo trên trục ngày liên tục. Tính năng phát hiện bất thường của nó xác định các quan sát nằm ngoài phạm vi dự kiến ​​và hiển thị các chỉ báo bất thường.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783731093513-6iq73eio.jpg",
    "sourceTitle": "Examcademy PL-300 Question 44",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/44-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-45",
    "questionNumber": 45,
    "text": "You have a Power BI workspace containing a single-page report named Sales.  \n  \nYou must add every visual from Sales to a dashboard while ensuring that visuals added to the page later are automatically added to the dashboard.  \n  \nWhich three actions should you complete, in order?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "step1",
        "text": "Slot 1:",
        "correctAnswer": "D"
      },
      {
        "id": "step2",
        "text": "Slot 2:",
        "correctAnswer": "E"
      },
      {
        "id": "step3",
        "text": "Slot 3:",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Open Power BI Desktop."
      },
      {
        "key": "B",
        "text": "Pin the page."
      },
      {
        "key": "C",
        "text": "Pin each visual."
      },
      {
        "key": "D",
        "text": "Open powerbi.com."
      },
      {
        "key": "E",
        "text": "Open the Sales report."
      },
      {
        "key": "F",
        "text": "Create a new report."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Open Power BI Desktop."
      },
      {
        "key": "B",
        "text": "Pin the page."
      },
      {
        "key": "C",
        "text": "Pin each visual."
      },
      {
        "key": "D",
        "text": "Open powerbi.com."
      },
      {
        "key": "E",
        "text": "Open the Sales report."
      },
      {
        "key": "F",
        "text": "Create a new report."
      }
    ],
    "correctAnswers": [
      "step1=D",
      "step2=E",
      "step3=B"
    ],
    "explanation": "Việc ghim toàn bộ trang báo cáo dưới dạng ô xếp trực tiếp được thực hiện trong dịch vụ Power BI. Ô trang trực tiếp phản ánh những thay đổi của trang báo cáo, bao gồm cả hình ảnh mới được thêm vào, trong khi hình ảnh được ghim riêng lẻ không cung cấp hành vi đó.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 45",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/45-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-46",
    "questionNumber": 46,
    "text": "You have a Power BI report that contains a visual displaying gross sales by date. Anomaly detection is enabled for the visual.  \n  \nNo anomalies are being detected. You need to make anomaly detection more likely to identify anomalies in the report.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Increase the Expected range transparency setting."
      },
      {
        "key": "B",
        "text": "Add a data field to the Legend field well."
      },
      {
        "key": "C",
        "text": "Increase the Sensitivity setting."
      },
      {
        "key": "D",
        "text": "Add a data field to the Secondary values field well."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Cài đặt Độ nhạy cao hơn làm cho thuật toán phát hiện bất thường đánh dấu nhiều sai lệch hơn, bao gồm cả những sai lệch nhỏ hơn so với phạm vi dự kiến. Độ trong suốt trong phạm vi dự kiến ​​chỉ thay đổi cách trình bày và việc thêm trường vào giếng trực quan không làm tăng độ nhạy của thuật toán phát hiện.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 46",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/46-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-47",
    "questionNumber": 47,
    "text": "You must use AI insights to add an enhanced-data column based on customer feedback. The solution must identify:  \n  \n- What customers most frequently provide feedback about  \n- Whether customers like your company’s product  \n- The feedback language  \n  \nWhich AI insights service should be used for each output? Each service may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "feedback_topic",
        "text": "What the customers most often provide feedback about:",
        "correctAnswer": "B"
      },
      {
        "id": "product_liking",
        "text": "Whether the customers like your company's product:",
        "correctAnswer": "D"
      },
      {
        "id": "feedback_language",
        "text": "The language of the feedback:",
        "correctAnswer": "C"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Image Tagging"
      },
      {
        "key": "B",
        "text": "Key Phrase Extraction"
      },
      {
        "key": "C",
        "text": "Language Detection"
      },
      {
        "key": "D",
        "text": "Sentiment Analysis"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Image Tagging"
      },
      {
        "key": "B",
        "text": "Key Phrase Extraction"
      },
      {
        "key": "C",
        "text": "Language Detection"
      },
      {
        "key": "D",
        "text": "Sentiment Analysis"
      }
    ],
    "correctAnswers": [
      "feedback_topic=B",
      "product_liking=D",
      "feedback_language=C"
    ],
    "explanation": "Trích xuất cụm từ khóa xác định các khái niệm và chủ đề quan trọng trong văn bản, phân tích cảm tính đánh giá xem phản hồi là tích cực, tiêu cực hay trung tính và tính năng phát hiện ngôn ngữ xác định ngôn ngữ của văn bản. Gắn thẻ hình ảnh áp dụng cho nội dung hình ảnh, không phải phản hồi bằng văn bản của khách hàng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 47",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/47-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-48",
    "questionNumber": 48,
    "text": "HOTSPOT -  \n  \nYou create a Power BI dataset that contains the table shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730258541-h70rmjl1.jpg)  \n  \nYou need to make the table available as an organizational data type in Microsoft Excel.  \n  \nHow should you configure the table properties?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Bảng nổi bật giúp bảng Power BI có sẵn dưới dạng kiểu dữ liệu tổ chức trong Excel. Cột khóa phải xác định duy nhất mỗi hàng, vì vậy ID là khóa. Nhãn hàng là giá trị thân thiện với người dùng được hiển thị cho các bản ghi, vì vậy Tên là phù hợp.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783730258541-h70rmjl1.jpg",
    "sourceTitle": "Examcademy PL-300 Question 48",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/48-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-49",
    "questionNumber": 49,
    "text": "You have a Power BI data model containing two tables named Products and Sales.  \n  \nA one-to-many relationship exists between the tables.  \n  \nA report includes a report-level filter for Products.  \n  \nYou need a measure that returns the percentage of total sales for each product and respects the report-level filter when calculating that total.  \n  \nComplete the DAX measure. Each function can be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "function1",
        "text": "Slot 1:",
        "correctAnswer": "C"
      },
      {
        "id": "function2",
        "text": "Slot 2:",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "ALL"
      },
      {
        "key": "B",
        "text": "ALLSELECTED"
      },
      {
        "key": "C",
        "text": "CALCULATE"
      },
      {
        "key": "D",
        "text": "FILTER"
      },
      {
        "key": "E",
        "text": "SELECTEDVALUE"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "ALL"
      },
      {
        "key": "B",
        "text": "ALLSELECTED"
      },
      {
        "key": "C",
        "text": "CALCULATE"
      },
      {
        "key": "D",
        "text": "FILTER"
      },
      {
        "key": "E",
        "text": "SELECTEDVALUE"
      }
    ],
    "correctAnswers": [
      "function1=C",
      "function2=B"
    ],
    "explanation": "CALCULATE sửa đổi ngữ cảnh bộ lọc cho mẫu số. ALLSELECTED trên Sản phẩm[Sản phẩm] loại bỏ bộ lọc hàng sản phẩm hiện tại trong khi vẫn giữ nguyên các bộ lọc bên ngoài, bao gồm bộ lọc Sản phẩm ở cấp báo cáo, do đó mẫu số là doanh số bán hàng cho tất cả các sản phẩm được chọn trong báo cáo.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 49",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/49-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-50",
    "questionNumber": 50,
    "text": "You intend to use Power BI Desktop to build a bug-tracking dashboard that retrieves data from Analytics in Azure DevOps.  \n  \nFrom Power BI Desktop, you must configure a data connector to authenticate to Azure DevOps. The solution must meet these requirements:  \n  \n- Use Analytics views.  \n- Filter cloud data.  \n  \nWhich connector should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "OData queries"
      },
      {
        "key": "B",
        "text": "Azure DevOps (Boards only)"
      },
      {
        "key": "C",
        "text": "Azure DevOps Server (Boards only)"
      },
      {
        "key": "D",
        "text": "OData Feed"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Trình kết nối Azure DevOps (chỉ dành cho Bảng) là Trình kết nối dữ liệu Power BI dành cho các dịch vụ đám mây Azure DevOps và hỗ trợ nhập chế độ xem Analytics. Chế độ xem phân tích xác định các bộ lọc mục công việc có thể áp dụng, trong khi Máy chủ Azure DevOps (chỉ dành cho Bảng) dành cho triển khai tại chỗ và các tùy chọn dựa trên OData là các phương thức kết nối riêng biệt.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 50",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/50-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-51",
    "questionNumber": 51,
    "text": "You have the CSV file shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783738924078-q6nr4rwz.png)  \n  \nYou use Power Query Editor to preview the file’s data.  \n  \nYou need to transform the data to meet these requirements:  \n  \n- The first column must contain the month.  \n- The second column must contain the year.  \n- The third column must contain the order amount for the month and year.  \n  \nWhich transformation should you use first?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "remove"
      },
      {
        "key": "B",
        "text": "unpivot"
      },
      {
        "key": "C",
        "text": "transpose"
      },
      {
        "key": "D",
        "text": "pivot"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Việc hủy xoay vòng sẽ chuyển đổi các cột năm riêng biệt thành các hàng, giữ lại tháng và tạo một cột cho năm và một cột cho số tiền đặt hàng tương ứng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783738924078-q6nr4rwz.png",
    "sourceTitle": "Examcademy PL-300 Question 51",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/51-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-52",
    "questionNumber": 52,
    "text": "You have a Power BI report containing the visuals listed in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783738916220-72gbixhh.png)  \n  \nYou need to change the location of every visual.  \n  \nWhat should you modify for each visual?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "the layer order"
      },
      {
        "key": "B",
        "text": "the padding"
      },
      {
        "key": "C",
        "text": "the position"
      },
      {
        "key": "D",
        "text": "the tab order"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Trong Power BI, thuộc tính Vị trí đặt vị trí Ngang và Dọc của hình ảnh tính bằng pixel so với góc trên cùng bên trái của khung vẽ. Do đó, các giá trị tọa độ được liệt kê yêu cầu sửa đổi Vị trí.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783738916220-72gbixhh.png",
    "sourceTitle": "Examcademy PL-300 Question 52",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/52-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-53",
    "questionNumber": 53,
    "text": "You are modifying a Power BI model by using Power BI Desktop. You have a table named Sales that contains the following fields.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730098130-h6u9bppw.jpg)  \n  \nYou also have a table named Transaction Size that contains the following data.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730101011-zwjdah08.jpg)  \n  \nYou need to create a calculated column that classifies each transaction as small, medium, or large according to its Sales Amount value. Complete the code. Each value may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "blank1",
        "text": "Slot 1:",
        "correctAnswer": "D"
      },
      {
        "id": "blank2",
        "text": "Slot 2:",
        "correctAnswer": "A"
      },
      {
        "id": "blank3",
        "text": "Slot 3:",
        "correctAnswer": "B"
      },
      {
        "id": "blank4",
        "text": "Slot 4:",
        "correctAnswer": "C"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "ALL"
      },
      {
        "key": "B",
        "text": "AND"
      },
      {
        "key": "C",
        "text": "CALCULATE"
      },
      {
        "key": "D",
        "text": "FILTER"
      },
      {
        "key": "E",
        "text": "OR"
      },
      {
        "key": "F",
        "text": "SUM"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "ALL"
      },
      {
        "key": "B",
        "text": "AND"
      },
      {
        "key": "C",
        "text": "CALCULATE"
      },
      {
        "key": "D",
        "text": "FILTER"
      },
      {
        "key": "E",
        "text": "OR"
      },
      {
        "key": "F",
        "text": "SUM"
      }
    ],
    "correctAnswers": [
      "blank1=D",
      "blank2=A",
      "blank3=B",
      "blank4=C"
    ],
    "explanation": "LỌC trả về hàng quy mô giao dịch khớp với Số tiền bán hàng của giao dịch hiện tại. ALL cung cấp bảng Kích thước giao dịch đầy đủ để tra cứu phạm vi VÀ thực thi cả ranh giới phạm vi bao gồm và CALCULATE đánh giá nhãn kích thước riêng biệt theo bộ lọc phù hợp đó.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783730098130-h6u9bppw.jpg",
    "sourceTitle": "Examcademy PL-300 Question 53",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/53-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-54",
    "questionNumber": 54,
    "text": "You are developing a Power BI sales report for your company’s NorthWest region sales territory. The data will be sourced from a view in a Microsoft SQL Server database. A sample of the data is shown in the following table:  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730127565-ob46oice.png)  \n  \nThe report will support the following analysis:  \n  \n- The number of orders and the total sales amount by Order Date  \n- The number of customers who placed an order  \n- The average quantity per order  \n  \nYou need to minimize data refresh times and report query times.  \n  \nWhich two actions should you take? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Set the data type for SalesOrderNumber to Decimal Number."
      },
      {
        "key": "B",
        "text": "Remove the CustomerKey and ProductKey columns."
      },
      {
        "key": "C",
        "text": "Remove the TaxAmt and Freight columns."
      },
      {
        "key": "D",
        "text": "Filter the data to only the NorthWest region sales territory."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Việc xóa các cột không sử dụng sẽ giảm lượng dữ liệu mà Power BI phải tải và xử lý; TaxAmt và Freight không bắt buộc đối với bất kỳ phân tích cụ thể nào. Việc lọc dữ liệu đến lãnh thổ bán hàng NorthWest sẽ loại bỏ các hàng nằm ngoài phạm vi báo cáo, giảm khối lượng công việc làm mới và truy vấn. CustomerKey phải được giữ lại để đếm số lượng khách hàng đã đặt hàng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783730127565-ob46oice.png",
    "sourceTitle": "Examcademy PL-300 Question 54",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/54-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-55",
    "questionNumber": 55,
    "text": "You need to create a measure that returns the percentage of late orders.  \n  \nHow should you complete the DAX expression?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "function",
        "text": "Slot 1:",
        "correctAnswer": "C"
      },
      {
        "id": "filter_function",
        "text": "Slot 2:",
        "correctAnswer": "E"
      },
      {
        "id": "late_condition",
        "text": "Slot 3:",
        "correctAnswer": "K"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "SUM"
      },
      {
        "key": "B",
        "text": "COUNTX"
      },
      {
        "key": "C",
        "text": "CALCULATE"
      },
      {
        "key": "D",
        "text": "CALCULATETABLE"
      },
      {
        "key": "E",
        "text": "FILTER"
      },
      {
        "key": "F",
        "text": "ALLEXCEPT"
      },
      {
        "key": "G",
        "text": "DATESBETWEEN"
      },
      {
        "key": "H",
        "text": "Orders[OrderDate] > Orders[RequiredDate]"
      },
      {
        "key": "I",
        "text": "Orders[ShippedDate] >= Orders[OrderDate]"
      },
      {
        "key": "J",
        "text": "Orders[ShippedDate] < Orders[RequiredDate]"
      },
      {
        "key": "K",
        "text": "Orders[ShippedDate] > Orders[RequiredDate]"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "SUM"
      },
      {
        "key": "B",
        "text": "COUNTX"
      },
      {
        "key": "C",
        "text": "CALCULATE"
      },
      {
        "key": "D",
        "text": "CALCULATETABLE"
      },
      {
        "key": "E",
        "text": "FILTER"
      },
      {
        "key": "F",
        "text": "ALLEXCEPT"
      },
      {
        "key": "G",
        "text": "DATESBETWEEN"
      },
      {
        "key": "H",
        "text": "Orders[OrderDate] > Orders[RequiredDate]"
      },
      {
        "key": "I",
        "text": "Orders[ShippedDate] >= Orders[OrderDate]"
      },
      {
        "key": "J",
        "text": "Orders[ShippedDate] < Orders[RequiredDate]"
      },
      {
        "key": "K",
        "text": "Orders[ShippedDate] > Orders[RequiredDate]"
      }
    ],
    "correctAnswers": [
      "function=C",
      "filter_function=E",
      "late_condition=K"
    ],
    "explanation": "`COUNTROWS` đếm các hàng thứ tự. `CALCULATE` sửa đổi bối cảnh bộ lọc cho số lượng đó và `FILTER` cung cấp vị từ cấp hàng. Một đơn hàng chỉ bị trễ khi ngày vận chuyển của nó muộn hơn ngày yêu cầu, vì vậy vị từ là `Orders[ShippedDate] > Orders[RequiredDate]`.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 55",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/55-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-56",
    "questionNumber": 56,
    "text": "You have a Power BI semantic model that contains the following data.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783742187610-kdf1clbj.png)  \n  \nYou need to create a solution that satisfies these requirements:  \n  \n- Presents transaction amount totals for every month for the current and prior year  \n- Uses the star schema modeling approach  \n- Minimizes the size of the data model  \n  \nWhich three actions should you take? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create one-to-many relationships between the tables."
      },
      {
        "key": "B",
        "text": "In the Transactions query, delete the TransactionID column."
      },
      {
        "key": "C",
        "text": "In the Date query, group by MonthNumber."
      },
      {
        "key": "D",
        "text": "In the Transactions query, group by AccountID and MonthStartDate for TransactionDate. Aggregate by summing the TransAmt column."
      },
      {
        "key": "E",
        "text": "In the Transactions query, add a column that contains the MonthStartDate value for TransactionDate."
      },
      {
        "key": "F",
        "text": "Create many-to-many relationships between the tables."
      }
    ],
    "correctAnswers": [
      "A",
      "D",
      "E"
    ],
    "explanation": "Lược đồ hình sao sử dụng mối quan hệ một-nhiều từ bảng thứ nguyên đến bảng thực tế giao dịch. Để giảm thiểu việc lưu trữ trong khi vẫn duy trì tổng số hàng tháng được yêu cầu, dữ liệu giao dịch phải được giảm xuống thành phần tháng của AccountID và tổng TransAmt. Bảng thực tế phải chứa Thángbắt đầuDate bắt nguồn từ Ngày giao dịch để nó có thể liên quan đến thứ nguyên Ngày ở cùng mức hàng tháng và giữ lại các tháng riêng biệt trong nhiều năm.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783742187610-kdf1clbj.png",
    "sourceTitle": "Examcademy PL-300 Question 56",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/56-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-57",
    "questionNumber": 57,
    "text": "You need to create a Power BI report whose first page contains these two views:  \n  \n- Sales By Postal Code  \n- Sales by Month  \n  \nBoth views must display a slicer that selects a value for a field named Chain. The Sales By Postal Code view must use the map visual shown here:  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730798878-ud1ws9g9.jpg)  \n  \nThe Sales By Month view must use the column chart shown here:  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730801947-8xt498qx.jpg)  \n  \nUsers must be able to switch between the views by using buttons on the report page, while retaining the selected Chain value. What is the minimum number of bookmarks required, and which property should be applied to each bookmark?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Cần có hai dấu trang để thể hiện hai trạng thái hiển thị trực quan. Định cấu hình từng dấu trang bằng Hiển thị để lưu trữ hình ảnh nào được hiển thị hoặc ẩn. Không thu thập dữ liệu: cài đặt đó lưu trữ trạng thái bộ cắt/bộ lọc và sẽ thay thế lựa chọn Chuỗi thay vì giữ lại lựa chọn hiện tại của người dùng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783730798878-ud1ws9g9.jpg",
    "sourceTitle": "Examcademy PL-300 Question 57",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/57-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-58",
    "questionNumber": 58,
    "text": "You have a Power BI report containing a measure named Total Sales.  \n  \nCreate a new measure that returns the sum of Total Sales for a year through the selected date. Complete the DAX expression.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "`TOTALYTD` đánh giá một biểu thức tích lũy từ đầu năm đến bối cảnh ngày hiện tại. Cột `'Date'[Date]` cung cấp các ngày theo lịch để tính toán từ đầu năm đến nay.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 58",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/58-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-59",
    "questionNumber": 59,
    "text": "You have a Power BI report that includes a page containing the following:  \n  \n- A shape named Shape1  \n- A card named Sales Summary  \n- A clustered bar chart named Sales by Region  \n  \nYou need to ensure that Sales Summary is rendered above Shape1.  \n  \nWhat should you modify?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Tab order in the Selection pane"
      },
      {
        "key": "B",
        "text": "Layer order in the Selection pane"
      },
      {
        "key": "C",
        "text": "Maintain layer order in the General visual settings"
      },
      {
        "key": "D",
        "text": "Vertical alignment in the Canvas settings"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Power BI sử dụng thứ tự z của đối tượng để xác định hình ảnh hoặc hình dạng chồng chéo nào xuất hiện ở phía trước. Danh sách **Thứ tự lớp** của ngăn Lựa chọn cho phép bạn đặt thứ tự từ trước ra sau, do đó, Tóm tắt bán hàng có thể được đặt phía trên Shape1.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 59",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/59-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-60",
    "questionNumber": 60,
    "text": "You have a Power BI workspace named BI Data that contains a dataset named BI Finance.  \n  \nYou have Build permission for the BI Finance dataset, but you do **not** have permissions to the workspace.  \n  \nYou need to connect to BI Finance and create a report.  \n  \nWhich two actions should you take? Each correct answer provides a complete solution.  \n  \n> NOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From the Power BI service, create a dataflow to the dataset by using DirectQuery."
      },
      {
        "key": "B",
        "text": "From Power BI Desktop, connect to a Dataverse data source."
      },
      {
        "key": "C",
        "text": "From the Power BI service, create a new report and select a published dataset."
      },
      {
        "key": "D",
        "text": "From Power BI Desktop, connect to a shared dataset."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Quyền xây dựng cho phép người dùng tạo báo cáo mới dựa trên mô hình/tập dữ liệu ngữ nghĩa Power BI được chia sẻ mà không phải là thành viên của không gian làm việc chứa nó. Có thể tạo báo cáo trong dịch vụ Power BI bằng cách chọn tập dữ liệu đã xuất bản hoặc trong Power BI Desktop bằng cách kết nối với tập dữ liệu được chia sẻ.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 60",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/60-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-61",
    "questionNumber": 61,
    "text": "You need to update the Power BI model so that analysts can quickly create visual drill-downs from business unit to product.  \n  \nWhat should you create?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a group"
      },
      {
        "key": "B",
        "text": "a calculated table"
      },
      {
        "key": "C",
        "text": "a hierarchy"
      },
      {
        "key": "D",
        "text": "a calculated column"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Hệ thống phân cấp Power BI sắp xếp các trường liên quan thành các cấp độ được sắp xếp, cho phép hình ảnh đi sâu vào từ đơn vị kinh doanh đến sản phẩm.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 61",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/61-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-62",
    "questionNumber": 62,
    "text": "You have the visual displayed in the exhibit. (Click the **Exhibit** tab.)  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730136158-dt06ybuw.jpg)  \n  \nYou need to show the relationship between Total Cost and Total Sales over time.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Add a play axis."
      },
      {
        "key": "B",
        "text": "From the Analytics pane, add an Average line."
      },
      {
        "key": "C",
        "text": "Add a slicer for the year."
      },
      {
        "key": "D",
        "text": "Create a DAX measure that calculates year-over-year growth."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Trục phát thêm thứ nguyên thời gian vào biểu đồ phân tán và tạo hoạt ảnh cho các điểm dữ liệu trên các giá trị thời gian liên tiếp, cho thấy mối quan hệ giữa Tổng chi phí và Tổng doanh thu thay đổi như thế nào theo thời gian.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783730136158-dt06ybuw.jpg",
    "sourceTitle": "Examcademy PL-300 Question 62",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/62-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-63",
    "questionNumber": 63,
    "text": "What action should you take to address the data concerns in the existing environment?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a calculated column that uses the following formula: ABS(Sales[sales_amount])"
      },
      {
        "key": "B",
        "text": "a measure that uses the following formula: SUMX(FILTER('Sales', 'Sales'[sales_amount] > 0)),[sales_amount])"
      },
      {
        "key": "C",
        "text": "a measure that uses the following formula: SUM(Sales[sales_amount])"
      },
      {
        "key": "D",
        "text": "a calculated column that uses the following formula: IF(ISBLANK(Sales[sales_amount]),0, (Sales[sales_amount]))"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Hàm SUMX kết hợp với FILTER('Sales', 'Sales'[sale_amount] > 0) đảm bảo chỉ bao gồm các giá trị dương trong tổng. Điều kiện lớn hơn 0 sẽ tự động loại trừ cả giá trị âm và ô trống, đáp ứng cả yêu cầu về chất lượng dữ liệu.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 63",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/63-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-64",
    "questionNumber": 64,
    "text": "You have a semantic model named Model1 that contains the following tables.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783742682979-dp5xcypx.png)  \n  \nAn active relationship exists between SaleDate and Date.  \n  \nAn inactive relationship exists between ShippingDate and Date.  \n  \nYou need to create a measure that displays the total sales amount and supports slicing by ShippingDate.  \n  \nHow should you complete the DAX expression?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "TÍNH TOÁN sửa đổi ngữ cảnh bộ lọc, trong khi USERELATIONSHIP kích hoạt mối quan hệ không hoạt động hiện có giữa Doanh số [Ngày vận chuyển] và Ngày giờ [Ngày] trong suốt thời gian tính toán. Điều này cho phép bộ cắt DateTime lọc doanh số bán hàng theo ngày vận chuyển thay vì mối quan hệ ngày bán hàng hiện hoạt.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783742682979-dp5xcypx.png",
    "sourceTitle": "Examcademy PL-300 Question 64",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/64-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-65",
    "questionNumber": 65,
    "text": "You have a Power BI semantic model that contains values displayed as errors.  \n  \nYou need to use Power Query data-profiling features to preview the data and identify the issues.  \n  \nWhat should you select to gain insight into the number of errors in the model, and what should you select to resolve the errors?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Chất lượng cột hiển thị tỷ lệ và số lượng giá trị hợp lệ, lỗi và trống cho mỗi cột. Thay thế Lỗi chuyển đổi các giá trị lỗi thành giá trị bạn chỉ định, giải quyết chúng trong đầu ra truy vấn.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 65",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/65-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-66",
    "questionNumber": 66,
    "text": "You have a Power BI report containing a page with these visuals:  \n  \n- A card  \n- A matrix  \n- A bar chart  \n  \nConfigure the page so that the card and bar chart are unaffected when a user drills down in the matrix, but both change when a user selects a matrix cell.  \n  \nWhat should you configure?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Đặt ma trận để chỉ áp dụng các bộ lọc chi tiết cho hình ảnh đã chọn. Điều này giữ cho biểu đồ thẻ và thanh không thay đổi trong quá trình khoan, trong khi các tương tác chọn ô thông thường của ma trận tiếp tục lọc các hình ảnh khác.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 66",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/66-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-67",
    "questionNumber": 67,
    "text": "You have a Power BI semantic model with the tables and relationships displayed in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783742684842-i4u8j76z.png)  \n  \nWhat type of dimension does **Dim Address** represent?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Type 2 slowly changing dimension (SCD)"
      },
      {
        "key": "B",
        "text": "junk dimension"
      },
      {
        "key": "C",
        "text": "role-playing dimension"
      },
      {
        "key": "D",
        "text": "degenerate dimension"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Thứ nguyên đóng vai là một thứ nguyên duy nhất được sử dụng để lọc các bản ghi liên quan ở các vai trò khác nhau. Thứ nguyên địa chỉ được liên kết thông qua cả khóa địa chỉ thanh toán và địa chỉ gửi thư đóng hai vai trò riêng biệt đó đối với các bản ghi đăng ký. Power BI hỗ trợ mẫu này với nhiều mối quan hệ giữa các bảng giống nhau, mỗi lần chỉ có một mối quan hệ hoạt động.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783742684842-i4u8j76z.png",
    "sourceTitle": "Examcademy PL-300 Question 67",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/67-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-68",
    "questionNumber": 68,
    "text": "What should be created to satisfy the sales department’s reporting requirements?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a measure that uses a formula of COUNTROWS(Sales)"
      },
      {
        "key": "B",
        "text": "a calculated column that use a formula of COUNTA(Sales[sales_id])"
      },
      {
        "key": "C",
        "text": "a calculated column that uses a formula of SUM(Sales[sales_id])"
      },
      {
        "key": "D",
        "text": "a measure that uses a formula of SUM(Sales[sales_id])"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Biện pháp sử dụng `COUNTROWS(Sales)` trả về số lượng bản ghi bán hàng và tính toán lại một cách thích hợp cho bối cảnh bộ lọc hiện tại của báo cáo. Cột được tính toán được đánh giá trên mỗi hàng chứ không phải dưới dạng tổng hợp báo cáo động và tính tổng `sales_id` không tính các bản ghi bán hàng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 68",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/68-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-69",
    "questionNumber": 69,
    "text": "You create a report to analyze customer transactions from a database containing the tables shown below.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730125400-rfc787dr.jpg)  \n  \nYou import the tables. Which relationship should be used to link them?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "one-to-many from Transaction to Customer"
      },
      {
        "key": "B",
        "text": "one-to-one between Customer and Transaction"
      },
      {
        "key": "C",
        "text": "many-to-many between Customer and Transaction"
      },
      {
        "key": "D",
        "text": "one-to-many from Customer to Transaction"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "`Customer.CustomerID` xác định duy nhất từng khách hàng và `Transaction.CustomerID` là khóa ngoại có thể xuất hiện trong nhiều hàng giao dịch. Vì vậy, một khách hàng có thể được liên kết với nhiều giao dịch.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783730125400-rfc787dr.jpg",
    "sourceTitle": "Examcademy PL-300 Question 69",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/69-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-70",
    "questionNumber": 70,
    "text": "You have a Power BI workspace named Inventory that includes a dataset, a report, and a dashboard.  \n  \nYou need to add another tile to the dashboard. The tile must display inventory by location. This information is **not** visualized in the report. The solution must minimize the impact on the report.  \n  \nWhich two actions should you take? Each correct answer represents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Ask a question by using Q&A."
      },
      {
        "key": "B",
        "text": "Hide the report page."
      },
      {
        "key": "C",
        "text": "Pin the visual to the dashboard."
      },
      {
        "key": "D",
        "text": "Use quick insights on the dashboard."
      },
      {
        "key": "E",
        "text": "Add the visual to the report."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Power BI Q&A có thể sử dụng truy vấn ngôn ngữ tự nhiên để tạo hình ảnh trực quan từ mô hình ngữ nghĩa được liên kết với trang tổng quan. Việc ghim hình ảnh thu được sẽ thêm hình ảnh đó dưới dạng ô bảng thông tin mà không yêu cầu thêm hình ảnh mới vào báo cáo.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 70",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/70-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-71",
    "questionNumber": 71,
    "text": "You need to establish the relationship between the product list and the revenue results. The solution must minimize the time required to render visuals.  \n  \nWhat relationship cardinality should you set?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "One to one"
      },
      {
        "key": "B",
        "text": "Many to many"
      },
      {
        "key": "C",
        "text": "Many to one"
      },
      {
        "key": "D",
        "text": "One to many"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Thứ nguyên sản phẩm phải ở một bên, với khóa sản phẩm duy nhất lọc nhiều hàng kết quả doanh thu cho sản phẩm đó. Mối quan hệ lược đồ sao một-nhiều này hỗ trợ các truy vấn trực quan và lọc hiệu quả; Mối quan hệ nhiều-nhiều sẽ làm tăng thêm độ phức tạp và không phải là thiết kế phù hợp cho mối quan hệ thứ nguyên với thực tế tiêu chuẩn.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 71",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/71-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-72",
    "questionNumber": 72,
    "text": "You have a Power BI model containing a table named Date. The Date table has these columns:  \n  \n- Date  \n- Fiscal Year  \n- Fiscal Quarter  \n- Month Name  \n- Calendar Year  \n- Week Number  \n- Month Number  \n- Calendar Quarter  \n  \nYou need to create a calculated table from the Date table. The calculated table must include only unique combinations of values for Calendar Year, Calendar Quarter, and Calendar Month.  \n  \nWhich DAX function should be included in the table definition?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "ADDCOLUMNS"
      },
      {
        "key": "B",
        "text": "CALCULATE"
      },
      {
        "key": "C",
        "text": "SUMMARIZE"
      },
      {
        "key": "D",
        "text": "DATATABLE"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "TÓM TẮT nhóm các hàng từ một bảng theo các cột được chỉ định và trả về một hàng cho mỗi nhóm, tạo ra các kết hợp duy nhất cần thiết cho các giá trị năm dương lịch, quý dương lịch và tháng dương lịch.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 72",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/72-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-73",
    "questionNumber": 73,
    "text": "In Power BI Desktop, you are creating a sales report that includes two tables. Row-level security (RLS) is configured on both tables.  \n  \nYou need to create a relationship between the tables. The solution must ensure bidirectional cross-filtering respects the RLS settings.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create an inactive relationship between the tables and select Apply security filter in both directions."
      },
      {
        "key": "B",
        "text": "Create an active relationship between the tables and select Apply security filter in both directions."
      },
      {
        "key": "C",
        "text": "Create an inactive relationship between the tables and select Assume referential integrity."
      },
      {
        "key": "D",
        "text": "Create an active relationship between the tables and select Assume referential integrity."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Bộ lọc RLS chỉ lan truyền thông qua các mối quan hệ đang hoạt động. Việc bật **Áp dụng bộ lọc bảo mật theo cả hai hướng** trên mối quan hệ đang hoạt động sẽ cho phép bộ lọc bảo mật lan truyền hai chiều; **Giả sử tính toàn vẹn tham chiếu** liên quan đến hành vi tham gia DirectQuery và không cho phép truyền RLS.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 73",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/73-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-74",
    "questionNumber": 74,
    "text": "You have a report page containing the visuals shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1785751600568-ryr4rxe1.jpg)",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Phần trình bày hiển thị tương tác **Không** được chọn cho biểu đồ cột được nhóm, vì vậy việc chọn một phần tư trên biểu đồ đường sẽ không ảnh hưởng đến tương tác đó. Tương tác **Filter** được chọn cho bản đồ, do đó, việc chọn điểm dữ liệu trên biểu đồ dạng đường sẽ lọc chéo bản đồ.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1785751600568-ryr4rxe1.jpg",
    "sourceTitle": "Examcademy PL-300 Question 74",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/74-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-75",
    "questionNumber": 75,
    "text": "For your company’s sales department, you publish a Power BI report that imports data from a Microsoft Excel file stored in a Microsoft SharePoint folder.  \n  \nThe data model includes several measures.  \n  \nYou need to create a Power BI report by using the existing data. The solution must minimize development effort.  \n  \nWhich type of data source should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Power BI dataset"
      },
      {
        "key": "B",
        "text": "a SharePoint folder"
      },
      {
        "key": "C",
        "text": "Power BI dataflows"
      },
      {
        "key": "D",
        "text": "an Excel workbook"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Tập dữ liệu Power BI cung cấp kết nối trực tiếp với mô hình dữ liệu đã xuất bản hiện có, bao gồm các bảng và thước đo của nó, do đó, báo cáo mới có thể sử dụng lại mô hình đó mà không cần tạo lại quy trình nhập hoặc thước đo DAX. Power BI hiện gọi các mô hình ngữ nghĩa của bộ dữ liệu.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 75",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/75-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-76",
    "questionNumber": 76,
    "text": "Case study context: All of the data sources are cloud-based — an Azure SQL database and Dynamics 365 Business Central (online) — and reports must always reflect current data.\n\nYou need to make sure that the data is updated to satisfy the report requirements. The solution must require minimal configuration effort.\n\nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From each report in powerbi.com, select Refresh visuals."
      },
      {
        "key": "B",
        "text": "From Power BI Desktop, download the PBIX file and refresh the data."
      },
      {
        "key": "C",
        "text": "Configure a scheduled refresh without using an on-premises data gateway."
      },
      {
        "key": "D",
        "text": "Configure a scheduled refresh by using an on-premises data gateway."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Cả hai nguồn dữ liệu — Azure SQL database và Dynamics 365 Business Central — đều dựa trên đám mây, do đó Power BI có thể làm mới mô hình ngữ nghĩa trực tiếp từ đám mây mà không cần định tuyến qua cổng dữ liệu tại chỗ. Định cấu hình làm mới theo lịch trình (không có cổng) sẽ tự động cập nhật báo cáo với thiết lập tối thiểu. Làm mới hình ảnh (A) không tải lại dữ liệu cơ bản, tải xuống lại và làm mới PBIX (B) theo cách thủ công là một bước thủ công phải được lặp lại và việc thêm cổng dữ liệu tại chỗ (D) là cấu hình bổ sung không cần thiết vì nguồn dữ liệu no được đặt tại chỗ.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 76",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/76-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-77",
    "questionNumber": 77,
    "text": "You try to open a PBIX file in Microsoft Power BI Desktop and receive the following error message in Power Query Editor:  \n  \n`DataSource.Error: Could not find file D:\\Data.txt.`  \n  \nHow should you fix the issue?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Update the Microsoft OLE DB Provider client libraries on your client computer."
      },
      {
        "key": "B",
        "text": "Change the file path of Data.txt."
      },
      {
        "key": "C",
        "text": "Change the file format to CSV."
      },
      {
        "key": "D",
        "text": "Use an on-premises data gateway."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Lỗi `DataSource.NotFound` cho `D:\\Data.txt` có nghĩa là Power Query không thể truy cập tệp tại đường dẫn được lưu trữ trong truy vấn. Cập nhật đường dẫn tệp đến đúng vị trí, đảm bảo rằng tệp tồn tại ở đó và có thể truy cập được. [Dealing with errors – Power Query](https://learn.microsoft.com/en-us/power-query/dealing-with-errors)",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 77",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/77-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-78",
    "questionNumber": 78,
    "text": "You have a Microsoft Excel file stored in a Microsoft OneDrive folder.  \n  \nThe file must be imported into a Power BI dataset. You need to ensure that the dataset can be refreshed in powerbi.com.  \n  \nWhich two connectors can you use to connect to the file? Each correct answer presents a complete solution.  \n  \n> **NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Excel Workbook"
      },
      {
        "key": "B",
        "text": "Text/CSV"
      },
      {
        "key": "C",
        "text": "Folder"
      },
      {
        "key": "D",
        "text": "SharePoint folder"
      },
      {
        "key": "E",
        "text": "Web"
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "Tệp OneDrive được lưu trữ trong SharePoint Online. Trình kết nối thư mục SharePoint có thể truy cập sổ làm việc dưới dạng nguồn SharePoint dựa trên đám mây và trình kết nối Web có thể truy cập sổ làm việc đó thông qua URL trực tuyến OneDrive của nó. Cả hai đều tránh dựa vào đường dẫn tệp được đồng bộ hóa cục bộ và có thể được định cấu hình để làm mới dịch vụ Power BI bằng cách sử dụng xác thực tổ chức/OAuth.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 78",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/78-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-79",
    "questionNumber": 79,
    "text": "You publish a dataset that contains data from an on-premises Microsoft SQL Server database.  \n  \nThe dataset needs to refresh daily.  \n  \nYou must ensure that the Power BI service can connect to the database and refresh the dataset.  \n  \nWhich four actions should you perform, in order?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "1",
        "text": "1",
        "correctAnswer": "B"
      },
      {
        "id": "2",
        "text": "2",
        "correctAnswer": "D"
      },
      {
        "id": "3",
        "text": "3",
        "correctAnswer": "A"
      },
      {
        "id": "4",
        "text": "4",
        "correctAnswer": "E"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Add the dataset owner to the data source."
      },
      {
        "key": "B",
        "text": "Configure an on-premises data gateway."
      },
      {
        "key": "C",
        "text": "Configure a virtual network data gateway."
      },
      {
        "key": "D",
        "text": "Add a data source."
      },
      {
        "key": "E",
        "text": "Configure a scheduled refresh."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Add the dataset owner to the data source."
      },
      {
        "key": "B",
        "text": "Configure an on-premises data gateway."
      },
      {
        "key": "C",
        "text": "Configure a virtual network data gateway."
      },
      {
        "key": "D",
        "text": "Add a data source."
      },
      {
        "key": "E",
        "text": "Configure a scheduled refresh."
      }
    ],
    "correctAnswers": [
      "1=B",
      "2=D",
      "3=A",
      "4=E"
    ],
    "explanation": "Cổng dữ liệu tại chỗ cung cấp kết nối dịch vụ Power BI với nguồn SQL Server tại chỗ. Tạo nguồn dữ liệu SQL Server trên cổng đó, sau đó thêm chủ sở hữu tập dữ liệu làm người dùng nguồn dữ liệu; với tên máy chủ và cơ sở dữ liệu phù hợp, tập dữ liệu có thể sử dụng cổng để làm mới theo lịch trình. Cấu hình lịch làm mới hàng ngày lần cuối. Cổng dữ liệu mạng ảo dành cho các tình huống Azure virtual network được hỗ trợ, không dành cho thiết lập SQL Server tại chỗ này.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 79",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/79-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-80",
    "questionNumber": 80,
    "text": "You use Microsoft Power BI Desktop to review the data shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1785752211397-z26ad9al.png)",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Ngày/giờ tự động tạo các bảng ngày ẩn và hệ thống phân cấp ngày tích hợp của chúng cho các cột ngày đủ điều kiện. Việc đánh dấu bảng là bảng ngày sẽ loại bỏ bảng ngày được tạo tự động tích hợp sẵn và hệ thống phân cấp của nó, trong khi các cột ngày nguồn vẫn còn trong mô hình.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1785752211397-z26ad9al.png",
    "sourceTitle": "Examcademy PL-300 Question 80",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/80-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-81",
    "questionNumber": 81,
    "text": "You have the Azure SQL databases shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783733381060-wtol8qfq.png)  \n  \nYou plan to build a single PBIX file that meets these requirements:  \n  \n- Data must be consumed from the database corresponding to each development-lifecycle stage.  \n- Power BI deployment pipelines must **not** be used.  \n- The solution must minimize administrative effort.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Một tham số Văn bản duy nhất có thể xác định giai đoạn vòng đời và điều khiển logic Power Query để chọn cơ sở dữ liệu và Azure SQL server tương ứng. Điều này hỗ trợ một tệp PBIX trong quá trình phát triển, thử nghiệm và sản xuất mà không cần quy trình triển khai đồng thời tránh các tham số riêng biệt cho từng giá trị nguồn.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783733381060-wtol8qfq.png",
    "sourceTitle": "Examcademy PL-300 Question 81",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/81-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-82",
    "questionNumber": 82,
    "text": "You have a Power BI semantic model containing a table named Item. The Item table has a column named Quantity.  \n  \nCreate a DAX query that meets these requirements:  \n  \n- Calculate item rank based on Quantity values.  \n- Do **not** skip ranks when two or more items have the same Quantity value.  \n- Display a blank Quantity total when an item is not filtered.  \n  \nHow should you complete the DAX formula?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "HASONEVALUE chỉ trả về true khi bối cảnh bộ lọc Mục chứa một mục riêng biệt; khi không, IF trả về BLANK(). RANKX đánh giá Số lượng trên TẤT CẢ('Item'[Item]) nên thứ hạng được so sánh với tất cả các mục. Tùy chọn quan hệ DENSE cung cấp cho các giá trị được gắn cùng một thứ hạng và gán thứ hạng liên tiếp tiếp theo cho giá trị riêng biệt sau.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 82",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/82-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-83",
    "questionNumber": 83,
    "text": "You are using Microsoft Power BI Desktop to profile data in Power Query Editor.  \n  \nThe table data is shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1785752212189-heskifks.png)  \n  \nUse the drop-down menus to choose the answer that completes each statement using the information shown.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Power Query cung cấp các phép biến đổi theo ngày cụ thể cho các cột có loại Ngày. Số lượng menu số được nhập không chính xác là Ngày được hiển thị dưới dạng ngày dựa trên năm 1900 và có thể không chuyển đổi được các giá trị không tương thích; việc thay đổi nó thành loại số thích hợp sẽ giải quyết được vấn đề.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1785752212189-heskifks.png",
    "sourceTitle": "Examcademy PL-300 Question 83",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/83-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-84",
    "questionNumber": 84,
    "text": "You plan to create a Power BI semantic model named Model1 that will contain data from an Azure SQL database.  \n  \nModel1 will include the following tables.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783745252018-drd68vqj.png)  \n  \nYou create DimDate and DimProduct by using Import storage mode.  \n  \nConfigure the storage mode for each remaining table so that:  \n  \n- FactSales data is available within five minutes after it becomes available in the source data.  \n- Report query response time for connections to the model is minimized.  \n  \nWhich storage mode should you configure for each table?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "DirectQuery giữ bảng FactSales lớn, mỗi phút một lần tại nguồn và hỗ trợ các kết quả gần như thời gian thực. Dual phù hợp với thứ nguyên DimCustomer vì nó có thể phục vụ các truy vấn thứ nguyên được lưu trong bộ nhớ đệm một cách hiệu quả và tham gia vào các truy vấn nguồn hiệu quả với bảng thực tế DirectQuery. Quá trình nhập diễn ra nhanh nhất đối với bảng FactMarketingEmail nhỏ, những thay đổi hàng ngày của bảng này không yêu cầu báo cáo gần như theo thời gian thực.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783745252018-drd68vqj.png",
    "sourceTitle": "Examcademy PL-300 Question 84",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/84-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-85",
    "questionNumber": 85,
    "text": "You have a Power BI workspace containing a dataset, a report, and a dashboard. The following groups have access:  \n  \n- External users can access the dashboard.  \n- Managers can access the dashboard and a manager-specific report.  \n- Employees can access the dashboard and a report constrained by row-level security (RLS).  \n  \nYou need every user, including external users, to be able to tag workspace administrators when they identify an issue with the dashboard. The solution must ensure that other users can see the issues that were raised.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "comments"
      },
      {
        "key": "B",
        "text": "chat in Microsoft Teams"
      },
      {
        "key": "C",
        "text": "alerts"
      },
      {
        "key": "D",
        "text": "subscriptions"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Nhận xét trên bảng điều khiển Power BI tạo các chủ đề thảo luận được chia sẻ, hiển thị và hỗ trợ @đề cập để thông báo cho đồng nghiệp, cho phép người dùng báo cáo sự cố và gắn thẻ quản trị viên không gian làm việc trong khi những người dùng khác có thể xem cuộc thảo luận.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 85",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/85-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-86",
    "questionNumber": 86,
    "text": "You have the Power BI data model shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783732310477-1h19ogum.png)  \n  \nThe Sales table contains daily sales records for the last five years, through today’s date.  \n  \nYou plan to create a measure that returns total sales for March 2021 when March 2022 is selected.  \n  \nWhich DAX expression should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Calculate (Sum(Sales[Sales]), PREVIOUSYEAR( dimDate[Date])"
      },
      {
        "key": "B",
        "text": "TOTALYTD (SUM(Sales[Sales]), dimDate[Date] )"
      },
      {
        "key": "C",
        "text": "Calculate (SUM(Sales[Sales]), SAMEPERIODLASTYEAR(dimDate[Date] ))"
      },
      {
        "key": "D",
        "text": "SUM(Sales[Sales])"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "`SAMEPERIODLASTYEAR(dimDate[Date])` trả về ngày trong bối cảnh bộ lọc hiện tại được dịch chuyển trở lại một năm. Được sử dụng làm đối số bộ lọc cho `CALCULATE`, nó thay đổi lựa chọn tháng 3 năm 2022 thành tháng 3 năm 2021 trong khi `SUM(Sales[Sales])` tổng hợp các hàng bán hàng có liên quan.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783732310477-1h19ogum.png",
    "sourceTitle": "Examcademy PL-300 Question 86",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/86-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-87",
    "questionNumber": 87,
    "text": "You have a Microsoft Power BI report. The PBIX file size is 550 MB. The report is accessed through an App workspace in the shared capacity of powerbi.com.  \n  \nThe report uses an imported dataset containing one fact table. The fact table contains 12 million rows. The dataset is scheduled to refresh twice daily, at 08:00 and 17:00.  \n  \nThe report has a single page containing 15 AppSource visuals and 10 default visuals. Users report that visuals load slowly when they access and interact with the report.  \n  \nYou need to recommend a solution to improve report performance. What should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Change any DAX measures to use iterator functions."
      },
      {
        "key": "B",
        "text": "Enable visual interactions."
      },
      {
        "key": "C",
        "text": "Replace the default visuals with AppSource visuals."
      },
      {
        "key": "D",
        "text": "Split the visuals onto multiple pages."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Việc giảm số lượng hình ảnh trên trang báo cáo sẽ giảm số lượng hình ảnh phải tải ban đầu và các truy vấn hoặc công việc hiển thị được kích hoạt bởi các tương tác. Một trang có 25 hình ảnh, đặc biệt là nhiều hình ảnh AppSource tùy chỉnh, có thể có chi phí truy vấn trực quan và phía máy khách đáng kể. Do đó, việc chia hình ảnh trên nhiều trang sẽ cải thiện hiệu suất tải và tương tác.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 87",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/87-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-88",
    "questionNumber": 88,
    "text": "You use Power BI Desktop to create a report named RPT1 that imports data from a Microsoft Excel file named File1. File1 is stored on a network share.  \n  \nFile1 is moved to another folder.  \n  \nWhen you open RPT1 in Power BI Desktop, you find that the report shows outdated data.  \n  \nYou need to ensure that the data in File1 refreshes correctly.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Change the data source."
      },
      {
        "key": "B",
        "text": "Clear the permissions of File1."
      },
      {
        "key": "C",
        "text": "Export a PBIDS file."
      },
      {
        "key": "D",
        "text": "Modify the permissions for File1."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Power BI Desktop làm mới dữ liệu đã nhập bằng cách kết nối với nguồn dữ liệu cơ bản đã được định cấu hình. Khi tệp Excel được di chuyển, đường dẫn tệp mạng đã lưu no trỏ đến sổ làm việc lâu hơn, do đó, nguồn dữ liệu của báo cáo phải được thay đổi thành vị trí mới của tệp trước khi dữ liệu hiện tại có thể làm mới.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 88",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/88-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-89",
    "questionNumber": 89,
    "text": "You have the visual displayed in the Original exhibit. (Click the Original tab.)  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730797350-96urfhvk.jpg)  \n  \nYou need to configure the visual as displayed in the Modified exhibit. (Click the Modified tab.)  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730800591-qh04kc05.jpg)  \n  \nWhat should you add to the visual?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a measure"
      },
      {
        "key": "B",
        "text": "an Average line"
      },
      {
        "key": "C",
        "text": "a trendline"
      },
      {
        "key": "D",
        "text": "a forecast"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Dự báo Power BI dự đoán các giá trị trong tương lai từ dữ liệu chuỗi thời gian lịch sử và hiển thị các giá trị dự kiến ​​​​với khoảng tin cậy. Điều này tạo ra phần mở rộng vượt quá phạm vi ngày hiện tại và dải dự đoán được tô bóng trên biểu đồ đường.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783730797350-96urfhvk.jpg",
    "sourceTitle": "Examcademy PL-300 Question 89",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/89-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-90",
    "questionNumber": 90,
    "text": "You have a Power BI report.  \n  \nYou plan to use the Analyze feature to explain unusual distributions in visuals.  \n  \nYou need to identify data insights.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Right-click a data point on a visual, and then select Analyze."
      },
      {
        "key": "B",
        "text": "Select the visual, and then select Get insights in the action bar."
      },
      {
        "key": "C",
        "text": "Create a scatter chart, and then add a trend line to the chart."
      },
      {
        "key": "D",
        "text": "Create a forecast by using the Analytics pane."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Tính năng Phân tích của Power BI tạo ra thông tin chi tiết tự động cho các phân phối trực quan bất thường khi bạn nhấp chuột phải vào một điểm dữ liệu và chọn **Phân tích**, sau đó chọn tùy chọn phân phối áp dụng. Điều này bắt đầu quá trình phân tích dựa trên máy học về các yếu tố và danh mục liên quan đến sự phân bổ khác nhau.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 90",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/90-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-91",
    "questionNumber": 91,
    "text": "You use Power BI Desktop to open a PBIX file that contains a Microsoft Excel data source.  \n  \nYou try to refresh the data and receive this error message:  \n  \n`Expression.Error: The column ‘Cost’ of the table wasn't found.`  \n  \nWhat could be causing the error?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "The Cost column was renamed in the data source."
      },
      {
        "key": "B",
        "text": "The privacy level of the data source does not allow combining the data with other data sources."
      },
      {
        "key": "C",
        "text": "The data in the Cost column cannot be converted into the target data type."
      },
      {
        "key": "D",
        "text": "The source file was moved to a new location."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Bước Power Query đang tham chiếu trực tiếp đến cột `Cost` nhưng tên cột no đó vẫn tồn tại trong nguồn được làm mới. Việc đổi tên cột trong nguồn dữ liệu Excel khiến bước truy vấn không thể xác định được cột đó, gây ra lỗi biểu thức này.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 91",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/91-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-92",
    "questionNumber": 92,
    "text": "You have a Power BI semantic model that contains four queries named Query 1, Query2. Query3, and Query4.  \n  \nQuery1 loads customer data into the model and is referenced by the other three queries.  \n  \nYou discover that data refresh for the model is slow.  \n  \nYou need to improve the data refresh time. The solution must minimize costs.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Run the Table.buffer function in Query1."
      },
      {
        "key": "B",
        "text": "Duplicate Query1 to all the other queries."
      },
      {
        "key": "C",
        "text": "Reconfigure Query1 as a dataflow entity."
      },
      {
        "key": "D",
        "text": "From the Power BI Admin portal, increase the Capacity settings."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Hướng dẫn riêng của Microsoft về các truy vấn được tham chiếu nêu rõ rằng khi một số truy vấn tham chiếu đến một truy vấn được chia sẻ như Query1, thì mỗi truy vấn tham chiếu sẽ thực hiện lại các bước của Query1 một cách độc lập và cảnh báo rõ ràng rằng việc gói Query1 trong Table.Buffer không loại bỏ việc truy xuất trùng lặp này và thậm chí có thể làm giảm hiệu suất do mỗi truy vấn tham chiếu sẽ lưu đệm truy vấn đó một cách riêng biệt. Cách khắc phục được đề xuất là thiết kế lại Query1 dưới dạng thực thể luồng dữ liệu để dữ liệu của nó được duy trì và đánh giá một lần, sau đó các truy vấn khác sẽ sử dụng lại — cải thiện thời gian làm mới mà không phải trả thêm chi phí tăng công suất.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 92",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/92-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-93",
    "questionNumber": 93,
    "text": "You have a semantic model containing two tables named Table1 and Table2.  \n  \nCreate a new aggregated date table that meets these requirements:  \n  \n- Its start date is the earliest value in Table1.  \n- Its end date is the latest value from either Table1 or Table2.  \n  \nComplete the DAX statement.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "MINX trả về giá trị tối thiểu được tạo ra bằng cách đánh giá biểu thức cho mỗi hàng của biểu thức bảng, đưa ra ngày sớm nhất trong Bảng 1. SELECTCOLUMNS tạo một cột Ngày chung cho mỗi nguồn, UNION kết hợp cả hai bộ ngày và MAXX trả về giá trị Ngày lớn nhất trong bảng kết hợp đó.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 93",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/93-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-94",
    "questionNumber": 94,
    "text": "You have a Power BI data model that imports data from a Microsoft Excel spreadsheet.  \n  \nYou use Power Query to load a query containing both renamed and custom columns.  \n  \nLater, you try to reload the query and receive this error message:  \n  \n`Expression.Error: The column 'Category' of the table wasn't found.`  \n  \nWhat are two possible causes of the error? Each correct answer presents a complete solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "The column was removed from the source file."
      },
      {
        "key": "B",
        "text": "The column was renamed in the source file."
      },
      {
        "key": "C",
        "text": "The file is no longer in the specified location."
      },
      {
        "key": "D",
        "text": "The data type of the column was changed."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Power Query phát sinh lỗi này khi một bước được áp dụng tham chiếu trực tiếp đến tên cột no còn tồn tại trong bảng đầu vào. Việc xóa `Category` khỏi nguồn hoặc đổi tên nó trong nguồn sẽ ngăn việc đổi tên, cột tùy chỉnh hoặc bước phụ thuộc khác tìm thấy cột đó. Thay vào đó, một tệp bị thiếu hoặc bị di chuyển sẽ tạo ra lỗi truy cập nguồn, trong khi việc thay đổi loại dữ liệu của cột không làm cho tên của cột đó không có sẵn.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 94",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/94-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-95",
    "questionNumber": 95,
    "text": "You have a query in Power Query Editor that includes the following data.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783742684177-727v0tlj.png)  \n  \nYou need to transform the data so that it appears as shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783742687090-kn69ip84.png)  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Split the Classes column into rows by using a delimiter."
      },
      {
        "key": "B",
        "text": "Unpivot the Classes column."
      },
      {
        "key": "C",
        "text": "Extract the text between delimiters in the Classes column."
      },
      {
        "key": "D",
        "text": "Convert the Classes column into a list."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Việc chia cột **Lớp** bằng dấu phân cách bằng dấu phẩy thành các hàng sẽ tạo ra một bản ghi cho mỗi khóa học và lặp lại các giá trị ID sinh viên và Sinh viên liên quan. Power Query hỗ trợ chia tách một cột được phân tách thành các hàng để có được kết quả một giá trị mỗi hàng chính xác như vậy.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783742684177-727v0tlj.png",
    "sourceTitle": "Examcademy PL-300 Question 95",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/95-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-96",
    "questionNumber": 96,
    "text": "You need to create a measure that returns the percentage of revenue by product category. How should you complete the measure?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "CALCULATE sửa đổi bối cảnh bộ lọc cho biểu thức tổng doanh thu. ALL trên ProductList[ProductCategory] chỉ xóa bộ lọc danh mục sản phẩm hiện tại, do đó AllCategoryRev là tổng số trên các danh mục trong mọi bộ lọc báo cáo còn lại. Sau đó, DIVIDE trả về doanh thu của danh mục hiện tại chia cho tổng số đó.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 96",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/96-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-97",
    "questionNumber": 97,
    "text": "You have a Power BI report that contains a table visual. The visual contains a column.  \n  \nThe column contains whole numbers ranging from of 1 to 20.  \n  \nYou need to use conditional formatting to meet the following requirements:  \n  \n• Visually compare the values without having to read the text containing the number.  \n\n• Show a different format for each distinct value.  \n\n• Hide the numeric value of ColumnA.  \n\n• Minimize development effort.  \n  \nWhich formatting should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "font color"
      },
      {
        "key": "B",
        "text": "icons"
      },
      {
        "key": "C",
        "text": "data bars"
      },
      {
        "key": "D",
        "text": "background color"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Các thanh dữ liệu cung cấp khả năng so sánh cường độ trực quan cho tất cả 20 giá trị riêng biệt ở một định dạng duy nhất, dễ hiểu. Không giống như màu nền hoặc biểu tượng (cần quản lý 20 thành phần hình ảnh riêng biệt), thanh dữ liệu ẩn các giá trị số một cách tự nhiên trong khi cho phép so sánh giá trị trực quan thông qua chiều rộng và chiều dài thanh.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 97",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/97-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-98",
    "questionNumber": 98,
    "text": "You have a Power BI semantic model.  \n  \nYou need to create a column that contains year-over-year (YOY) revenue. The column must contain a ratio of the change factor compared to the previous year's monthly revenue.  \n  \nHow should you complete the DAX formula?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "SAMEPERIODLASTYEAR chuyển bối cảnh ngày hiện tại lùi lại một năm trong khi vẫn giữ nguyên khoảng thời gian hàng tháng tương ứng. DIVIDE tính toán tỷ lệ thay đổi so với cùng kỳ năm trước bằng cách chia chênh lệch doanh thu cho doanh thu năm trước và xử lý mẫu số bằng 0 một cách an toàn.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 98",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/98-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-99",
    "questionNumber": 99,
    "text": "You use Power BI Desktop to load data from a Microsoft SQL Server database.  \n  \nWhile you wait for the data to load, the following error appears.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783732328654-a5dojjw9.png)  \n  \nYou need to fix the error.  \n  \nWhich two actions can achieve this goal? Each correct answer is a complete solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Reduce the number of rows and columns returned by each query."
      },
      {
        "key": "B",
        "text": "Split log running queries into subsets of columns and use Power Query to merge the queries."
      },
      {
        "key": "C",
        "text": "Use Power Query to combine log running queries into one query."
      },
      {
        "key": "D",
        "text": "Disable query folding on long running queries."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Việc giảm các hàng và cột được trả về sẽ làm giảm khối lượng dữ liệu mà SQL Server và Power BI phải xử lý và chuyển, giúp truy vấn hoàn thành trước khi hết thời gian chờ. Việc chia một truy vấn dài hạn thành các tập hợp con cột hẹp hơn và hợp nhất các kết quả trong Power Query cũng có thể giảm khối lượng công việc và tải trọng của từng truy vấn riêng lẻ. Việc gấp truy vấn thường được giữ nguyên cho các nguồn quan hệ vì nó đẩy các phép biến đổi đủ điều kiện sang nguồn dữ liệu và cải thiện hiệu suất làm mới.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783732328654-a5dojjw9.png",
    "sourceTitle": "Examcademy PL-300 Question 99",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/99-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-100",
    "questionNumber": 100,
    "text": "You have a semantic model, as shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783745255157-0koy4l20.png)  \n  \nUse the drop-down menus to choose the answer that completes each statement using the information in the graphic.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Tại một thời điểm, chỉ có thể hoạt động một mối quan hệ giữa một cặp bảng Power BI. Việc lọc Ngày đặt hàng và Ngày thanh toán độc lập yêu cầu các bảng thứ nguyên ngày riêng biệt, mỗi bảng có mối quan hệ hoạt động liên quan. Bảng ngày được sử dụng lại cho các vai trò khác nhau, chẳng hạn như ngày đặt hàng và ngày thanh toán, là một thứ nguyên nhập vai.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783745255157-0koy4l20.png",
    "sourceTitle": "Examcademy PL-300 Question 100",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/100-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-101",
    "questionNumber": 101,
    "text": "You have a Power BI model containing a table named Expenses. The table includes the following columns:  \n  \n- Date  \n- Amount  \n- Category  \n- Expense ID  \n- Employee ID  \n  \nEmployees record expenses, and every expense has a unique expense ID.  \n  \nYou need to create a DAX measure to calculate the total expense amount.  \n  \nWhich DAX expression should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Sum(‘Expenses’[Amount])"
      },
      {
        "key": "B",
        "text": "Max(‘Expenses’[Amount])"
      },
      {
        "key": "C",
        "text": "Sum(‘Expenses’[Expense ID])"
      },
      {
        "key": "D",
        "text": "Count(‘Expenses’[Amount])"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "`SUM('Expenses'[Amount])` thêm các giá trị trong cột Số tiền bằng số, tạo ra tổng số tiền chi phí trong ngữ cảnh bộ lọc hiện tại.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 101",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/101-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-102",
    "questionNumber": 102,
    "text": "In Power Query Editor, you have a query named **Sales Data** that contains the following columns.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783735454275-benqf7er.png)  \n  \nYou need to create two queries named **Product Dimension** and **Sales Fact** from the **Sales Data** query. The solution must minimize maintenance effort and dataset size.  \n  \nWhich two actions should you take? Each correct answer presents part of the solution.  \n  \n> NOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Reference the Sales Data query to create the new queries."
      },
      {
        "key": "B",
        "text": "Disable the load for the Sales Fact query."
      },
      {
        "key": "C",
        "text": "Duplicate the Sales Data query to create the new queries."
      },
      {
        "key": "D",
        "text": "Clear Include in report refresh for the Sales Data query."
      },
      {
        "key": "E",
        "text": "Disable the load for the Sales Data query."
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "Truy vấn được tham chiếu sử dụng lại các bước của truy vấn ban đầu và thay đổi luồng ban đầu cho đến truy vấn được tham chiếu, tránh logic chuyển đổi trùng lặp. Truy vấn Dữ liệu bán hàng là nguồn trung gian cho Thứ nguyên sản phẩm và Thực tế bán hàng, do đó, việc vô hiệu hóa tải sẽ giúp truy vấn có sẵn cho các truy vấn đó đồng thời ngăn không cho bảng trung gian được tải vào mô hình dữ liệu và tăng kích thước tập dữ liệu.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783735454275-benqf7er.png",
    "sourceTitle": "Examcademy PL-300 Question 102",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/102-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-103",
    "questionNumber": 103,
    "text": "You have a Power BI report that contains one report page and uses the default theme.  \n  \nYou need to configure the report page so that it matches the formatting shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783742666106-z0irq6hx.png)  \n  \nWhat should you modify on the report page?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "the wallpaper color only"
      },
      {
        "key": "B",
        "text": "the canvas background color only"
      },
      {
        "key": "C",
        "text": "the wallpaper color and the canvas background color only"
      },
      {
        "key": "D",
        "text": "the canvas background image only"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Hình nền kiểm soát khu vực bên ngoài trang báo cáo, trong khi nền canvas kiểm soát trang báo cáo phía sau hình ảnh của nó. Việc kết hợp các màu riêng biệt ở cả hai vùng yêu cầu thay đổi màu nền và màu nền canvas; hình nền canvas là không cần thiết.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783742666106-z0irq6hx.png",
    "sourceTitle": "Examcademy PL-300 Question 103",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/103-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-104",
    "questionNumber": 104,
    "text": "You have a Power BI report containing a table visual with a measure called Revenue. The Revenue measure returns values from 0 through 5.  \n  \nYou need to format the visual so the Revenue column uses the specified background color for each value range in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783732326727-rsxllcj0.png)  \n  \nWhich three actions should you carry out, in sequence, in Power BI Desktop?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "step1",
        "text": "Slot 1:",
        "correctAnswer": "D"
      },
      {
        "id": "step2",
        "text": "Slot 2:",
        "correctAnswer": "A"
      },
      {
        "id": "step3",
        "text": "Slot 3:",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Set Format style to Rules."
      },
      {
        "key": "B",
        "text": "Add and configure a new rule for each value range."
      },
      {
        "key": "C",
        "text": "Set Format style to Field value."
      },
      {
        "key": "D",
        "text": "Open the Background color dialog for the Revenue column."
      },
      {
        "key": "E",
        "text": "Open the Font color dialog for the Revenue column."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Set Format style to Rules."
      },
      {
        "key": "B",
        "text": "Add and configure a new rule for each value range."
      },
      {
        "key": "C",
        "text": "Set Format style to Field value."
      },
      {
        "key": "D",
        "text": "Open the Background color dialog for the Revenue column."
      },
      {
        "key": "E",
        "text": "Open the Font color dialog for the Revenue column."
      }
    ],
    "correctAnswers": [
      "step1=D",
      "step2=A",
      "step3=B"
    ],
    "explanation": "Định dạng có điều kiện dựa trên quy tắc áp dụng các màu nền khác nhau cho phạm vi giá trị số. Đối với trường bảng, hãy mở hộp thoại định dạng có điều kiện Màu nền của trường Doanh thu, chọn Quy tắc làm kiểu định dạng và xác định một quy tắc cho từng phạm vi và màu được yêu cầu.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783732326727-rsxllcj0.png",
    "sourceTitle": "Examcademy PL-300 Question 104",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/104-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-105",
    "questionNumber": 105,
    "text": "You have a Microsoft Power BI Desktop report named Report1 that uses an Azure SQL database as its data source.  \n  \nA user named User1 plans to create a report using the same data source as Report1.  \n  \nYou need to simplify User1's connection to the data source.  \n  \nWhich type of file should you create?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "PBIDS"
      },
      {
        "key": "B",
        "text": "XLSX"
      },
      {
        "key": "C",
        "text": "PBIT"
      },
      {
        "key": "D",
        "text": "PBIX"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Tệp PBIDS lưu trữ chi tiết kết nối Máy tính để bàn Power BI cho một nguồn dữ liệu duy nhất. Nó có thể được xuất từ ​​báo cáo hiện có và chia sẻ để hợp lý hóa việc tạo báo cáo mới sử dụng cùng nguồn dữ liệu Azure SQL; tác giả mới cung cấp thông tin xác thực của riêng họ.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 105",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/105-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-106",
    "questionNumber": 106,
    "text": "You use Power Query Editor to preview a query containing sales-order data in the following columns:  \n  \n- Tax Amount  \n- Sales Order ID  \n- Freight Amount  \n- Subtotal Amount  \n- Total Item Quantity  \n  \nThe Sales Order ID column uniquely identifies every sales order. The Subtotal Amount and Total Item Quantity columns are always populated, whereas the Tax Amount and Freight Amount columns can be null when an order has no associated amount.  \n  \nYou need to query the data to identify these metrics by month:  \n  \n- The average item quantity per order  \n- The average freight amount per order  \n- The maximum item quantity per order  \n  \nHow should you modify the query?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "In the Total Item Quantity column, replace the null values with 0."
      },
      {
        "key": "B",
        "text": "In the Tax Amount column, remove rows that contain null values."
      },
      {
        "key": "C",
        "text": "In the Freight Amount column, remove rows that contain null values."
      },
      {
        "key": "D",
        "text": "In the Freight Amount column, replace the null values with 0."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Các đơn đặt hàng có số tiền vận chuyển liên quan đến no phải được bao gồm khi tính số tiền vận chuyển trung bình cho mỗi đơn hàng. Việc thay thế các giá trị Số lượng vận chuyển bằng 0 sẽ ghi lại mức vận chuyển bằng 0 thực tế của chúng trong khi vẫn giữ nguyên mọi đơn đặt hàng ở mẫu số trung bình. Các giá trị số lượng mặt hàng đã được điền sẵn và Số tiền thuế không ảnh hưởng đến bất kỳ chỉ số được yêu cầu nào.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 106",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/106-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-107",
    "questionNumber": 107,
    "text": "You need to create a KPI visualization that meets the reporting requirements of the sales managers.  \n  \nHow should you create the visualization?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "KPI Power BI sử dụng thước đo cơ sở làm chỉ báo, trường theo trình tự thời gian để hiển thị xu hướng và thước đo mục tiêu hoặc giá trị cho mục tiêu. Số tiền bán hàng là số liệu đang được đánh giá, tháng cung cấp xu hướng thời gian và mục tiêu bán hàng cung cấp mục tiêu.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 107",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/107-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-108",
    "questionNumber": 108,
    "text": "You are creating a line chart in a Power BI report, as shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1785751606303-mqrkl07p.png)",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Đường tham chiếu trung bình Power BI hiển thị giá trị ngang không đổi được tính toán từ dữ liệu được vẽ. Việc xem chi tiết yêu cầu đặt các cấp độ phân cấp ngày, chẳng hạn như Tuần và Ngày, trên Trục của hình ảnh.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1785751606303-mqrkl07p.png",
    "sourceTitle": "Examcademy PL-300 Question 108",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/108-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-109",
    "questionNumber": 109,
    "text": "You have a Power BI data model containing a table named Stores with these columns:  \n  \n- Store Name  \n- Open Date  \n- Status  \n- State  \n- City  \n  \nCreate a calculated column named Active Store Name that meets these requirements:  \n  \n- If Status is “A”, return the Store Name value.  \n- If Status is not “A”, return Store Name prefixed with \"Inactive - \".  \n  \nComplete the DAX expression.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "DAX IF đánh giá điều kiện Trạng thái và trả về biểu thức tương ứng. Toán tử & nối tiền tố không hoạt động và tên cửa hàng; && là logic AND, trong khi + là toán tử số học.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 109",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/109-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-110",
    "questionNumber": 110,
    "text": "You have two Azure SQL databases containing identical tables and columns. For each database, you create a query that retrieves data from a table named **Customer**.  \n  \nYou need to combine the Customer tables into one table while minimizing the data-model size and supporting scheduled refresh in powerbi.com. What should you do?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Việc nối thêm sẽ kết hợp các hàng từ các bảng có cấu trúc cột phù hợp, trong khi việc hợp nhất thực hiện phép nối thêm các cột dựa trên các giá trị khớp. Việc tạo kết quả được nối thêm dưới dạng truy vấn mới sẽ giữ nguyên hai truy vấn nguồn dưới dạng truy vấn theo giai đoạn. Việc vô hiệu hóa tải đối với các truy vấn dàn dựng đó sẽ ngăn không cho các bảng riêng lẻ của chúng được lưu trữ trong mô hình ngữ nghĩa, làm giảm kích thước mô hình; truy vấn được nối thêm phụ thuộc vẫn có thể làm mới trong dịch vụ Power BI.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 110",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/110-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-111",
    "questionNumber": 111,
    "text": "You have a Microsoft Power BI report. The PBIX file size is 550 MB. The report is accessed by using an App workspace in shared capacity of powerbi.com.  \n  \nThe report uses an imported dataset that contains one fact table. The fact table has 12 million rows. The dataset is scheduled to refresh twice daily at 08:00 and 17:00.  \n  \nThe report consists of a single page containing 15 AppSource visuals and 10 default visuals.  \n  \nUsers report that the visuals load slowly when they access and interact with the report.  \n  \nYou need to recommend a solution to improve the report's performance.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Replace the default visuals with AppSource visuals."
      },
      {
        "key": "B",
        "text": "Remove unused columns from tables in the data model."
      },
      {
        "key": "C",
        "text": "Change the imported dataset to DirectQuery"
      },
      {
        "key": "D",
        "text": "Increase the number of times that the dataset is refreshed."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Việc xóa các cột không sử dụng sẽ giảm kích thước và mức tiêu thụ bộ nhớ của mô hình Power BI đã nhập và có thể cải thiện hiệu suất truy vấn về hình ảnh. Các cột mô hình chỉ nên được giữ lại khi được yêu cầu cho báo cáo hoặc cấu trúc mô hình; các cột không cần thiết sẽ thêm chi phí lưu trữ và xử lý. DirectQuery có thể gây ra độ trễ truy vấn nguồn và việc làm mới thường xuyên hơn sẽ cải thiện độ mới thay vì hiển thị báo cáo tương tác.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 111",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/111-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-112",
    "questionNumber": 112,
    "text": "You are profiling data by using Power Query Editor. A table contains a column named column1. The column statistics and value distribution for column1 are shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1785751616381-pwfnyur5.jpg)",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Trong cấu hình cột Power Query, Duy nhất là số giá trị xuất hiện chính xác một lần; do đó giá trị 20 có nghĩa là 20 giá trị chỉ xuất hiện một lần. Lê, Hoa có tần suất xuất hiện cao hơn Elm, Mỹ trong phân bố hiển thị.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1785751616381-pwfnyur5.jpg",
    "sourceTitle": "Examcademy PL-300 Question 112",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/112-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-113",
    "questionNumber": 113,
    "text": "You have the dashboard displayed in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783732307910-4g8z0lf9.png)  \n  \nYou need to change the dashboard so that it appears as shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783732311235-nmuzgvxm.png)  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create and apply a custom dashboard theme."
      },
      {
        "key": "B",
        "text": "Change the colors of the visuals in the report."
      },
      {
        "key": "C",
        "text": "Apply the Dark dashboard theme."
      },
      {
        "key": "D",
        "text": "Upload a snapshot image of the dashboard."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Chủ đề trang tổng quan Power BI áp dụng kiểu dáng màu sắc trên hình ảnh trực quan của trang tổng quan. Chủ đề bảng điều khiển Tối được tích hợp sẵn sẽ tạo ra bảng màu trực quan tối trên toàn bộ bảng điều khiển cần thiết mà không cần định dạng thủ công từng hình ảnh hoặc tạo chủ đề tùy chỉnh.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783732307910-4g8z0lf9.png",
    "sourceTitle": "Examcademy PL-300 Question 113",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/113-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-114",
    "questionNumber": 114,
    "text": "You have a Power BI report hosted on powerbi.com that shows expenses by department for department managers.  \n  \nThe report includes a line chart displaying expenses by month.  \n  \nYou need to allow users to choose whether to view the report as a line chart or a column chart. The solution must minimize development and maintenance effort.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Enable report readers to personalize visuals."
      },
      {
        "key": "B",
        "text": "Create a separate report page for users to view the column chart."
      },
      {
        "key": "C",
        "text": "Add a column chart, a bookmark, and a button for users to choose a visual."
      },
      {
        "key": "D",
        "text": "Create a mobile report that contains a column chart."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Trình đọc báo cáo Power BI có thể sử dụng Cá nhân hóa hình ảnh để thay đổi loại trực quan hóa của hình ảnh khi ở chế độ đọc mà không cần quyền chỉnh sửa. Việc kích hoạt khả năng này trên hình ảnh hiện có sẽ tránh việc duy trì các trang báo cáo riêng biệt hoặc hình ảnh trùng lặp và logic dấu trang.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 114",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/114-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-115",
    "questionNumber": 115,
    "text": "You have a dataset with the permissions shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1785751612607-1ui6hler.jpg)",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Quyền xây dựng đối với mô hình ngữ nghĩa Power BI cho phép tạo nội dung từ mô hình đó và sử dụng Phân tích trong Excel. Quyền chia sẻ lại cho phép chia sẻ mô hình ngữ nghĩa và cấp quyền truy cập cho người dùng khác, bao gồm cả quyền Đọc. Các quyền này không cho phép xóa mô hình ngữ nghĩa, xóa một trong các bảng của nó hoặc gán nhãn nhạy cảm.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1785751612607-1ui6hler.jpg",
    "sourceTitle": "Examcademy PL-300 Question 115",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/115-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-116",
    "questionNumber": 116,
    "text": "A user creates a Power BI report called ReportA that uses a custom theme.  \n  \nYou create a dashboard called DashboardA.  \n  \nYou need to ensure that DashboardA uses the custom theme while minimizing development effort.  \n  \nWhich two actions should you perform? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Publish ReportA to Power BI."
      },
      {
        "key": "B",
        "text": "From ReportA save the current theme."
      },
      {
        "key": "C",
        "text": "Publish ReportA to the Microsoft Power BI Community theme gallery."
      },
      {
        "key": "D",
        "text": "From DashboardA, create a custom theme."
      },
      {
        "key": "E",
        "text": "From DashboardA, upload a JSON theme."
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "Power BI có thể xuất chủ đề tùy chỉnh hiện được áp dụng của báo cáo dưới dạng tệp JSON. Trang tổng quan có cấu hình chủ đề riêng và việc tải chủ đề JSON đó lên sẽ áp dụng kiểu tùy chỉnh tương tự cho trang tổng quan mà không cần tạo lại theo cách thủ công.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 116",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/116-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-117",
    "questionNumber": 117,
    "text": "You intend to use Power BI to generate sales invoices for customers. The solution must satisfy these requirements:  \n  \n- Sales invoices must be exportable in PDF format.  \n- The exported PDFs must clearly display every column and row.  \n  \nWhat should you create?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a paginated report that contains a tablix"
      },
      {
        "key": "B",
        "text": "a dashboard that contains a table"
      },
      {
        "key": "C",
        "text": "an interactive report that contains a table"
      },
      {
        "key": "D",
        "text": "an interactive report that contains a matrix"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Báo cáo phân trang Power BI được tối ưu hóa cho các tài liệu vận hành và đầu ra PDF sẵn sàng in như hóa đơn bán hàng. Vùng dữ liệu tablix hiển thị dữ liệu chi tiết ở dạng bảng hoặc ma trận và hỗ trợ bố cục nhiều trang được kiểm soát để tất cả các hàng và cột hóa đơn có thể được hiển thị rõ ràng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 117",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/117-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-118",
    "questionNumber": 118,
    "text": "You need to create a visual that compares profit across 10 product categories for a chosen quarter.  \n  \nWhat is the best visual to use to accomplish this goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "an area chart"
      },
      {
        "key": "B",
        "text": "a funnel chart"
      },
      {
        "key": "C",
        "text": "a clustered bar chart"
      },
      {
        "key": "D",
        "text": "a line chart"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Biểu đồ thanh nhóm so sánh rõ ràng một thước đo lợi nhuận duy nhất trên nhiều danh mục sản phẩm riêng biệt, giúp dễ dàng nhận thấy sự khác biệt giữa 10 danh mục trong quý đã chọn.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 118",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/118-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-119",
    "questionNumber": 119,
    "text": "You use Power Query Editor to create a query named Products.  \n  \nProducts returns the results displayed in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783745251723-9q294ohp.png)  \n  \nYou need to shape the data so that each row displays one ProductCategory and ProductID combination.  \n  \nHow should you configure the ProductIDList column?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Dấu phẩy là dấu phân cách giữa các giá trị ProductID. Việc chia cột theo dấu phân cách đó thành các hàng sẽ tạo ra một ProductID trên mỗi hàng trong khi vẫn giữ lại ProductCategory tương ứng trên mỗi hàng kết quả.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783745251723-9q294ohp.png",
    "sourceTitle": "Examcademy PL-300 Question 119",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/119-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-120",
    "questionNumber": 120,
    "text": "You have the Power BI data model shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783733381848-8ooh4ri8.png)  \n  \nThe Country table includes the following data.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783733384420-v9z0zi6r.png)  \n  \nYou create two row-level security (RLS) roles named Manager and CFO.  \n  \nYou intend to publish the dataset to the Power BI service.  \n  \nYou must create DAX expressions for the RLS filters. The solution must satisfy these requirements:  \n  \n- Each manager can view only the Sales and Human Resources data for that manager's own country.  \n- The CFO must not be able to view data in the Human Resources table.  \n- The CFO must be able to view Sales data for every country.  \n  \nHow should you complete the DAX expressions to satisfy the requirements? Each expression can be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "human_resources",
        "text": "Human Resources:",
        "correctAnswer": "D"
      },
      {
        "id": "country",
        "text": "Country:",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "[Country] = \"USA\""
      },
      {
        "key": "B",
        "text": "[Email] = userprincipalname()"
      },
      {
        "key": "C",
        "text": "[Manager] = \"CFO\""
      },
      {
        "key": "D",
        "text": "False()"
      },
      {
        "key": "E",
        "text": "True()"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "[Country] = \"USA\""
      },
      {
        "key": "B",
        "text": "[Email] = userprincipalname()"
      },
      {
        "key": "C",
        "text": "[Manager] = \"CFO\""
      },
      {
        "key": "D",
        "text": "False()"
      },
      {
        "key": "E",
        "text": "True()"
      }
    ],
    "correctAnswers": [
      "human_resources=D",
      "country=B"
    ],
    "explanation": "`[Email] = userprincipalname()` triển khai RLS động bằng cách giữ lại hàng Quốc gia khớp với UPN của người dùng đã đăng nhập. Sau đó, mối quan hệ giữa Quốc gia với Bộ phận bán hàng và Quốc gia với Nhân sự sẽ giới hạn cả hai bảng dữ kiện ở quốc gia đó đối với vai trò Người quản lý. `False()` cho phép các hàng Nhân sự no cho vai trò CFO, đồng thời không lọc Quốc gia trong vai trò đó cho phép Bán hàng cho tất cả các quốc gia. Bộ lọc bảng Power BI RLS là các biểu thức DAX đánh giá là TRUE hoặc FALSE.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783733381848-8ooh4ri8.png",
    "sourceTitle": "Examcademy PL-300 Question 120",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/120-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-121",
    "questionNumber": 121,
    "text": "You have a report containing a donut chart and a clustered column chart. Visual interactions use the default settings.  \n  \nYou need to change the report so that selecting a column in the column chart causes the donut chart to redraw using data from the selected column.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Select the donut chart and set the column chart interaction to Filter."
      },
      {
        "key": "B",
        "text": "Select the column chart and set the donut chart interaction to Filter."
      },
      {
        "key": "C",
        "text": "Select the donut chart and set the column chart interaction to None."
      },
      {
        "key": "D",
        "text": "Select the column chart and set the donut chart interaction to None."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Power BI định cấu hình các tương tác từ hình ảnh nguồn đã chọn sang các hình ảnh khác. Việc chọn biểu đồ cột và đặt tương tác với biểu đồ vành khuyên thành **Bộ lọc** sẽ làm cho cột được chọn lọc biểu đồ vành khuyên, khiến cột đó phải vẽ lại cho lựa chọn đó. [Change how visuals interact in a report](https://learn.microsoft.com/en-us/power-bi/create-reports/service-reports-visual-interactions)",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 121",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/121-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-122",
    "questionNumber": 122,
    "text": "You have a Power BI data model containing a table named Employees. The table includes these columns:  \n  \n- Employee Name  \n- Email Address  \n- Start Date  \n- Job Title  \n  \nYou are implementing dynamic row-level security (RLS).  \n  \nYou need to create a table filter that meets the following requirements:  \n  \n- Users must view only their own employee data.  \n- The DAX expression must function in both Power BI Desktop and the Power BI service.  \n  \nWhich expression should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "[Email Address] - USERNAME()"
      },
      {
        "key": "B",
        "text": "[Employee Name] - USERPRINCIPALNAME()"
      },
      {
        "key": "C",
        "text": "[Employee Name] = USERNAME()"
      },
      {
        "key": "D",
        "text": "[Email Address] = USERPRINCIPALNAME()"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "`USERPRINCIPALNAME()` trả về UPN của người dùng đã đăng nhập ở định dạng kiểu email trong cả Power BI Desktop và dịch vụ Power BI. So sánh nó với cột địa chỉ email của nhân viên sẽ tạo ra bộ lọc Boolean cấp hàng cho phép mỗi người dùng chỉ xem hàng phù hợp với danh tính của họ. `USERNAME()` có thể trả về `DOMAIN\\User` trong Máy tính để bàn Power BI, do đó, nó không nhất quán trên cả hai môi trường.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 122",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/122-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-123",
    "questionNumber": 123,
    "text": "HOTSPOT -  \n  \nYou have the Power BI dashboard shown in the Dashboard exhibit. (Click the Dashboard tab.)  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730116305-u2jjgkqn.jpg)  \n  \nYou need to ensure that when users view the dashboard on a mobile device, it appears as shown in the Mobile exhibit. (Click the Mobile tab.)  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730118879-u0iwz9sp.jpg)  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Bảng điều khiển Power BI có bố cục di động riêng để xem trên điện thoại. Trong bố cục đó, các ô có thể được thay đổi kích thước và sắp xếp lại. Việc thay đổi kích thước và di chuyển các ô Tổng doanh số và Tổng số lượng sẽ tạo ra hàng KPI bắt buộc cạnh nhau, trong khi các ô khác vẫn ở bên dưới hàng đó.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783730116305-u2jjgkqn.jpg",
    "sourceTitle": "Examcademy PL-300 Question 123",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/123-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-124",
    "questionNumber": 124,
    "text": "You intend to create a Power BI semantic model named Model1 that will contain data from an Azure SQL database named DB1.  \n  \nModel1 must display updated data within two minutes after the data is updated in DB1.  \n  \nYou need to choose a connectivity mode for the connection to DB1.  \n  \nWhat should you choose?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "DirectQuery"
      },
      {
        "key": "B",
        "text": "live connection"
      },
      {
        "key": "C",
        "text": "import"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "DirectQuery không nhập dữ liệu Azure SQL Database vào mô hình ngữ nghĩa. Thay vào đó, Power BI truy vấn nguồn cơ bản khi tải hình ảnh báo cáo, cho phép trả về các bản cập nhật nguồn mà không cần chờ chu kỳ làm mới mô hình nhập.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 124",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/124-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-125",
    "questionNumber": 125,
    "text": "You have a semantic model containing a table named Sales. The table includes these columns:  \n  \n- Order ID  \n- Product ID  \n- Sales Date  \n- Sales Amount  \n  \nYou need to create a DAX measure that returns the total sales amount for the corresponding dates in the prior year. Complete the measure by selecting the appropriate options.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "TÍNH TOÁN thay đổi ngữ cảnh bộ lọc cho TỔNG Doanh số [Số tiền bán hàng]. SAMEPERIODLASTYEAR cung cấp ngày được đặt tương ứng với ngày hiện tại được lùi lại một năm.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 125",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/125-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-126",
    "questionNumber": 126,
    "text": "HOTSPOT -  \n  \nYou are creating a Microsoft Power BI data model that includes the tables shown below.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730662709-17ua0ufh.png)  \n  \nThe Products table relates to the ProductCategory table by the ProductCategoryID column. Each product belongs to one product category.  \n  \nYou need to make it possible to analyze sales by product category.  \n  \nHow should the relationship from ProductCategory to Products be configured?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "ProductCategory là một bên vì mỗi danh mục có thể chứa nhiều sản phẩm, trong khi mỗi sản phẩm có một ProductCategoryID. Bộ lọc một hướng từ Danh mục sản phẩm đến Sản phẩm hỗ trợ lọc danh mục và truyền bá thông qua thứ nguyên sản phẩm tới các hàng Bán hàng có liên quan.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783730662709-17ua0ufh.png",
    "sourceTitle": "Examcademy PL-300 Question 126",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/126-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-127",
    "questionNumber": 127,
    "text": "You use Power Query Editor to import three tables named Customers, Address, and Country.  \n  \nIn the source system, not every customer has a related address, but every address has a related country.  \n  \nYou must merge all tables into one query while optimizing query-refresh performance.  \n  \nWhich join type should be used for each merge operation? Each join type may be used once, multiple times, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "customers_address",
        "text": "Join Customers with Address:",
        "correctAnswer": "E"
      },
      {
        "id": "address_country",
        "text": "Join Address with Country:",
        "correctAnswer": "A"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Inner"
      },
      {
        "key": "B",
        "text": "Left anti"
      },
      {
        "key": "C",
        "text": "Left outer"
      },
      {
        "key": "D",
        "text": "Right anti"
      },
      {
        "key": "E",
        "text": "Right outer"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Inner"
      },
      {
        "key": "B",
        "text": "Left anti"
      },
      {
        "key": "C",
        "text": "Left outer"
      },
      {
        "key": "D",
        "text": "Right anti"
      },
      {
        "key": "E",
        "text": "Right outer"
      }
    ],
    "correctAnswers": [
      "customers_address=E",
      "address_country=A"
    ],
    "explanation": "Phép nối bên ngoài bên phải của Khách hàng với Địa chỉ sẽ giữ mọi hàng Địa chỉ và thêm dữ liệu Khách hàng phù hợp; nó không giữ chân những khách hàng có địa chỉ no. Vì mỗi hàng Địa chỉ có một hàng Quốc gia liên quan nên phép nối bên trong giữa Địa chỉ và Quốc gia sẽ giữ lại mọi kết hợp địa chỉ-quốc gia được yêu cầu đồng thời tránh việc xử lý hàng không khớp.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 127",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/127-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-128",
    "questionNumber": 128,
    "text": "You have a Power BI report containing a clustered bar chart. The chart has an X-axis named Sales and a Y-axis named Year. It displays sales data for the years 2020 through 2024.  \n  \nYou need to create a visual calculation that shows a cumulative sales total equal to the current year's sales plus all sales from the previous years.  \n  \nWhich DAX expression should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "MOVINGAVERAGE([Sales], 4)"
      },
      {
        "key": "B",
        "text": "RUNNINGSUM([Year])"
      },
      {
        "key": "C",
        "text": "CALCULATE ( [Sales], 'Date' [Year] <= MAX ( 'Date'[Year] ) )"
      },
      {
        "key": "D",
        "text": "RUNNINGSUM([Sales])"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "`RUNNINGSUM([Sales])` trả về tổng hiện hành của các giá trị Doanh số dọc theo trục trực quan, bao gồm năm hiện tại và mọi năm trước đó. Điều này tạo ra tổng doanh thu tích lũy cần thiết.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 128",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/128-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-129",
    "questionNumber": 129,
    "text": "You have a Power BI report that contains the table visual shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1784205966603-8a6wqve7.png)  \n  \nYou need to modify the visual so that it displays as shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1784205968738-nzuh7dny.png)  \n  \nHow should you configure the visual?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Ma trận hỗ trợ hiển thị nhiều thước đo dưới dạng tiêu đề hàng. Việc bật Chuyển giá trị sang hàng sẽ thay đổi giá trị từ cột sang hàng, trong khi trường ngày vẫn nằm trên các cột; điều này tạo ra các hàng Tổng chi phí và Tổng doanh thu riêng biệt với tổng số của chúng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1784205966603-8a6wqve7.png",
    "sourceTitle": "Examcademy PL-300 Question 129",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/129-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-130",
    "questionNumber": 130,
    "text": "You have a Power BI semantic model that includes two tables, as shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1785752192737-jroq4gtv.png)  \n  \nUse the drop-down menus to choose the answer that completes each statement from the information in the graphic.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Mối quan hệ nhiều-một trong triển lãm sử dụng tính năng lọc chéo một hướng. Power BI chỉ cho phép một mối quan hệ hiện hoạt giữa cùng một cặp bảng, do đó, mối quan hệ nhiều-nhiều không hoạt động không thể được kích hoạt đơn giản trong khi mối quan hệ nhiều-một vẫn tồn tại — trước tiên, mối quan hệ nhiều-một phải được xóa, sau đó, mối quan hệ còn lại có thể được kích hoạt và định cấu hình để lọc hai chiều và RLS.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1785752192737-jroq4gtv.png",
    "sourceTitle": "Examcademy PL-300 Question 130",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/130-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-131",
    "questionNumber": 131,
    "text": "You have a line chart displaying the number of employees in a department over time.  \n  \nYou need to view the employees’ total salary costs when hovering over a data point. What should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Add salary to the drillthrough fields."
      },
      {
        "key": "B",
        "text": "Add salary to the visual filters."
      },
      {
        "key": "C",
        "text": "Add salary to the tooltips."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Việc thêm mức lương vào trường Chú giải công cụ của biểu đồ đường sẽ giúp giá trị lương có sẵn khi di chuột cho từng điểm dữ liệu. Khi được tóm tắt dưới dạng tổng, nó hiển thị tổng chi phí tiền lương cho thời điểm tương ứng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 131",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/131-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-132",
    "questionNumber": 132,
    "text": "You have several dashboards.  \n  \nYou must ensure that, when users browse the available dashboards on powerbi.com, they can identify which dashboards contain Personally Identifiable Information (PII). The solution must minimize configuration effort and impact on dashboard design.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Information Protection sensitivity labels"
      },
      {
        "key": "B",
        "text": "tiles"
      },
      {
        "key": "C",
        "text": "comments"
      },
      {
        "key": "D",
        "text": "Active Directory groups"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Nhãn nhạy cảm của Bảo vệ Thông tin của Microsoft có thể được áp dụng cho bảng thông tin Power BI để phân loại PII. Khi bật tính năng bảo vệ dữ liệu, dịch vụ Power BI sẽ hiển thị các nhãn đó trong cột Độ nhạy của chế độ xem danh sách trang tổng quan mà không yêu cầu thay đổi thiết kế trang tổng quan.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 132",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/132-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-133",
    "questionNumber": 133,
    "text": "You have a Power BI semantic model named Model1 that contains tables named Sales and Products. Sales includes the following columns.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783746018865-hrracnps.png)  \n  \nYou need to ensure that Model1 supports a visual showing the total quantity sold for every distinct ProductID value. The solution must minimize the model size.  \n  \nWhat should you add to Model1?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a calculated column"
      },
      {
        "key": "B",
        "text": "a measure"
      },
      {
        "key": "C",
        "text": "a hierarchy"
      },
      {
        "key": "D",
        "text": "a calculated table"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Một thước đo như `SUM(Sales[Quantity])` tính toán tổng số lượng trong ngữ cảnh bộ lọc của từng ProductID được hiển thị bằng hình ảnh. Các phép đo được tính toán khi cần thiết và kết quả của chúng không được tính toán trước hoặc lưu trữ trên đĩa, trong khi các cột được tính toán và bảng được tính toán sẽ thêm dữ liệu mô hình ổn định và có thể tăng kích thước mô hình.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783746018865-hrracnps.png",
    "sourceTitle": "Examcademy PL-300 Question 133",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/133-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-134",
    "questionNumber": 134,
    "text": "You have a Microsoft Power BI workspace.  \n  \nYou need to grant users the capabilities shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783731106119-yf2awx7m.jpg)  \n  \nThe solution must use the principle of least privilege. Which user role should you assign to each user? Each role may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "user1",
        "text": "User1:",
        "correctAnswer": "C"
      },
      {
        "id": "user2",
        "text": "User2:",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Admin"
      },
      {
        "key": "B",
        "text": "Contributor"
      },
      {
        "key": "C",
        "text": "Member"
      },
      {
        "key": "D",
        "text": "Viewer"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Admin"
      },
      {
        "key": "B",
        "text": "Contributor"
      },
      {
        "key": "C",
        "text": "Member"
      },
      {
        "key": "D",
        "text": "Viewer"
      }
    ],
    "correctAnswers": [
      "user1=C",
      "user2=B"
    ],
    "explanation": "Quản trị viên và Thành viên được phép xuất bản ứng dụng không gian làm việc Power BI mới, vì vậy Thành viên là vai trò ít đặc quyền nhất đối với Người dùng1. Người đóng góp có thể tạo, chỉnh sửa và xóa nội dung không gian làm việc, bao gồm báo cáo và trang tổng quan, vì vậy Người đóng góp là vai trò có ít đặc quyền nhất đối với Người dùng2.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783731106119-yf2awx7m.jpg",
    "sourceTitle": "Examcademy PL-300 Question 134",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/134-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-135",
    "questionNumber": 135,
    "text": "You have a Microsoft Excel spreadsheet named Excel1 that contains survey results.  \n  \nYou have a Power BI dashboard named DashboardA with Q&A enabled.  \n  \nEnsure that users who can access DashboardA can ask questions based on the contents of Excel1 and pin visuals based on their queries to DashboardA. The solution must minimize development time.  \n  \nWhich three actions should you perform in sequence?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "step1",
        "text": "Slot 1:",
        "correctAnswer": "B"
      },
      {
        "id": "step2",
        "text": "Slot 2:",
        "correctAnswer": "C"
      },
      {
        "id": "step3",
        "text": "Slot 3:",
        "correctAnswer": "D"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "From powerbi.com, pin a range from Excel1 to DashboardA."
      },
      {
        "key": "B",
        "text": "From Excel, format the data in Excel1 as a table."
      },
      {
        "key": "C",
        "text": "From powerbi.com, import Excel1 as a dataset."
      },
      {
        "key": "D",
        "text": "From powerbi.com, add a tile for the Excel1 dataset to DashboardA."
      },
      {
        "key": "E",
        "text": "From Excel, create a named range by using the data in Excel1."
      },
      {
        "key": "F",
        "text": "From powerbi.com, upload Excel1."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "From powerbi.com, pin a range from Excel1 to DashboardA."
      },
      {
        "key": "B",
        "text": "From Excel, format the data in Excel1 as a table."
      },
      {
        "key": "C",
        "text": "From powerbi.com, import Excel1 as a dataset."
      },
      {
        "key": "D",
        "text": "From powerbi.com, add a tile for the Excel1 dataset to DashboardA."
      },
      {
        "key": "E",
        "text": "From Excel, create a named range by using the data in Excel1."
      },
      {
        "key": "F",
        "text": "From powerbi.com, upload Excel1."
      }
    ],
    "correctAnswers": [
      "step1=B",
      "step2=C",
      "step3=D"
    ],
    "explanation": "Power BI Q&A hoạt động dựa trên tập dữ liệu (mô hình ngữ nghĩa) và nó chỉ xuất hiện trên bảng thông tin khi bảng thông tin đó có một ô được ghim từ tập dữ liệu, vì vậy bạn phải hiển thị Excel1 dưới dạng tập dữ liệu và cung cấp cho bảng thông tin một ô từ đó. Trước tiên, bạn định dạng phạm vi trong Excel dưới dạng bảng để dữ liệu thân thiện với phần Hỏi & Đáp và có thể nhập được, sau đó từ powerbi.com, bạn nhập Excel1 làm tập dữ liệu và cuối cùng, bạn thêm ô cho tập dữ liệu đó vào DashboardA, phần này sẽ hiển thị phần Hỏi & Đáp cho người dùng bảng thông tin. \"Tải lên Excel1\" là thừa với \"nhập dưới dạng tập dữ liệu\" và bản thân nó không đính kèm dữ liệu vào bảng điều khiển cho phần Hỏi đáp, đó là lý do tại sao trình tự của khóa tự động bị sai.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 135",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/135-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-136",
    "questionNumber": 136,
    "text": "You need to create a date table in Power BI that contains 10 complete calendar years, including the current year.  \n  \nHow should you complete the DAX expression?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "fn_year",
        "text": "Slot 1:",
        "correctAnswer": "F"
      },
      {
        "id": "fn_today",
        "text": "Slot 2:",
        "correctAnswer": "E"
      },
      {
        "id": "fn_calendar",
        "text": "Slot 3:",
        "correctAnswer": "A"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "CALENDAR"
      },
      {
        "key": "B",
        "text": "CALENDARAUTO"
      },
      {
        "key": "C",
        "text": "DATE"
      },
      {
        "key": "D",
        "text": "EOMONTH"
      },
      {
        "key": "E",
        "text": "TODAY"
      },
      {
        "key": "F",
        "text": "YEAR"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "CALENDAR"
      },
      {
        "key": "B",
        "text": "CALENDARAUTO"
      },
      {
        "key": "C",
        "text": "DATE"
      },
      {
        "key": "D",
        "text": "EOMONTH"
      },
      {
        "key": "E",
        "text": "TODAY"
      },
      {
        "key": "F",
        "text": "YEAR"
      }
    ],
    "correctAnswers": [
      "fn_year=F",
      "fn_today=E",
      "fn_calendar=A"
    ],
    "explanation": "`YEAR(TODAY())` lấy năm hiện tại. `CALENDAR` trả về phạm vi ngày bao gồm từ ngày 1 tháng 1 chín năm trước năm đó đến ngày 31 tháng 12 của năm hiện tại, mang lại 10 năm dương lịch hoàn chỉnh.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 136",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/136-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-137",
    "questionNumber": 137,
    "text": "You need to create the semantic model.  \n  \nWhich storage mode should you use for the tables in the semantic model?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "DirectQuery"
      },
      {
        "key": "B",
        "text": "Dual"
      },
      {
        "key": "C",
        "text": "Import"
      },
      {
        "key": "D",
        "text": "live connection"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Vì dữ liệu nguồn chỉ cần được làm mới mỗi ngày một lần vào một thời điểm cố định vào sáng sớm và các báo cáo phải phản hồi nhanh chóng trong khi thực thi bảo mật cấp hàng, nên việc nhập tất cả các bảng vào mô hình trong bộ nhớ sẽ mang lại hiệu suất truy vấn tốt nhất và hỗ trợ RLS đầy đủ. DirectQuery sẽ truy vấn nguồn trên mọi tương tác (không cần thiết với lịch làm mới cố định) và không hỗ trợ bảo mật cấp hàng như cách Nhập thực hiện, vì vậy Nhập là chế độ lưu trữ thích hợp cho mọi bảng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 137",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/137-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-138",
    "questionNumber": 138,
    "text": "You have a Microsoft Fabric eventhouse named Eventhouse1 that contains high-velocity, high-volume data from IoT devices.  \n  \nEventhouse1 can be queried to provide data to reports in near-real-time (NRT).  \n  \nYou plan to use Power BI Desktop to create a report that will include both historical and live data.  \n  \nYou need to connect to Eventhouse1. The solution must minimize development effort.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Build a composite model."
      },
      {
        "key": "B",
        "text": "Use DirectQuery connectivity mode."
      },
      {
        "key": "C",
        "text": "Use Import connectivity mode."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Power BI DirectQuery truy vấn trực tiếp cơ sở dữ liệu KQL của Eventhouse và là chế độ kết nối được đề xuất cho các tập dữ liệu lớn hoặc khi cần dữ liệu gần thời gian thực. Nó cung cấp quyền truy cập vào dữ liệu lịch sử được giữ lại và dữ liệu trực tiếp mới được nhập mà không cần thiết kế mô hình bổ sung cần thiết cho mô hình tổng hợp.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 138",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/138-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-139",
    "questionNumber": 139,
    "text": "You have a Power BI workspace that contains multiple reports.  \n  \nYou need to enable a user to create a dashboard that uses visuals from those reports.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create a row-level security (RLS) role and add the user to the role."
      },
      {
        "key": "B",
        "text": "Share the reports with the user."
      },
      {
        "key": "C",
        "text": "Grant the Read permission for the datasets to the user."
      },
      {
        "key": "D",
        "text": "Add the user as a member of the workspace."
      },
      {
        "key": "E",
        "text": "Add the user as a Viewer of the workspace."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Không gian làm việc Power BI Thành viên có thể tạo, chỉnh sửa và xóa nội dung trong không gian làm việc, bao gồm các trang tổng quan ghim hình ảnh từ báo cáo. Quyền truy cập của người xem ở chế độ chỉ đọc và việc chia sẻ báo cáo không cấp quyền tạo nội dung cho không gian làm việc.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 139",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/139-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-140",
    "questionNumber": 140,
    "text": "You are developing a Power BI report that uses data from an Azure SQL database named `erp1`.  \n  \nYou import the following tables.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730275212-4fcvg83r.jpg)  \n  \nYou need to perform these analyses:  \n  \n- Orders sold over time that include a measure of total order value  \n- Orders by attributes of the products sold  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730277310-9pbw6stx.png)  \n  \nThe solution must minimize visual-interaction update times in the report.  \n  \nWhat should you do first?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From Power Query, merge the Order Line Items query and the Products query."
      },
      {
        "key": "B",
        "text": "Create a calculated column that adds a list of product categories to the Orders table by using a DAX function."
      },
      {
        "key": "C",
        "text": "Calculate the count of orders per product by using a DAX function."
      },
      {
        "key": "D",
        "text": "From Power Query, merge the Orders query and the Order Line Items query."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Bảng dữ kiện phải lưu trữ dữ liệu ở mức độ giao dịch nhất quán và chứa các giá trị có thể được tổng hợp, trong khi bảng thứ nguyên cung cấp các thuộc tính để lọc và nhóm. Việc hợp nhất Đơn đặt hàng vào Mục hàng đơn hàng sẽ thêm thuộc tính thời gian ở cấp đơn đặt hàng vào dữ liệu giá và số lượng ở cấp đơn hàng, tạo bảng thực tế bán hàng phù hợp với các thước đo tổng giá trị đơn hàng và phân tích thời gian. Việc tách riêng các Sản phẩm cho phép các thuộc tính sản phẩm lọc bảng thực tế đó thông qua mối quan hệ một-nhiều hiệu quả, nhất quán với lược đồ sao.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783730275212-4fcvg83r.jpg",
    "sourceTitle": "Examcademy PL-300 Question 140",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/140-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-141",
    "questionNumber": 141,
    "text": "You have a PBIX file that imports several tables from an Azure SQL database.  \n  \nThe data will be migrated to a different Azure SQL database. You need to update the connections in the PBIX file while minimizing administrative effort.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From Power Query Editor, create new queries."
      },
      {
        "key": "B",
        "text": "From Power Query Editor, modify the source of each query."
      },
      {
        "key": "C",
        "text": "Create a PBIT file, open the file, and change the data sources when prompted."
      },
      {
        "key": "D",
        "text": "Modify the Data source settings."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Cài đặt nguồn dữ liệu trên máy tính để bàn Power BI cho phép tác giả chọn nguồn dữ liệu hiện có và sử dụng **Thay đổi nguồn** để chỉ định máy chủ và cơ sở dữ liệu thay thế. Cập nhật kết nối Azure SQL được chia sẻ một cách tập trung sẽ tránh sửa đổi bước nguồn của từng truy vấn riêng lẻ.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 141",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/141-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-142",
    "questionNumber": 142,
    "text": "You are configuring a Power BI report for accessibility as shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783740441843-byok8bck.png)  \n  \nYou need to change the default colors of all three visuals to make the report more accessible to users who have color vision deficiency.  \n  \nWhich two settings should you configure in the Customize theme window? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "First-level elements colors"
      },
      {
        "key": "B",
        "text": "Theme colors"
      },
      {
        "key": "C",
        "text": "Divergent colors"
      },
      {
        "key": "D",
        "text": "Sentiment colors"
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Cả thẻ KPI và biểu đồ thác nước của báo cáo đều vẽ màu trạng thái xanh lục/đỏ/xanh lam từ cài đặt Màu cảm tính của chủ đề (tốt/xấu/trung tính và tăng/giảm/tổng), trong khi thang màu nền của bảng trên cột Số tiền thực tế đến từ cài đặt Màu khác nhau được sử dụng cho chuyển màu định dạng có điều kiện. Chỉ cập nhật hai bảng màu này thành màu sắc an toàn cho người mù màu sẽ sửa các màu mặc định trên cả ba hình ảnh; Màu chủ đề chi phối các chuỗi phân loại, không có hình ảnh nào trong số này dựa vào màu mặc định của chúng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783740441843-byok8bck.png",
    "sourceTitle": "Examcademy PL-300 Question 142",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/142-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-143",
    "questionNumber": 143,
    "text": "What should be created to satisfy the sales department's reporting requirements?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a measure column that uses the following formula: SUMX(FILTER('Sales', 'Sales'[sales_amount] > 0)),[sales_amount])"
      },
      {
        "key": "B",
        "text": "a calculated column that uses the following formula: ABS(Sales[sales_amount])"
      },
      {
        "key": "C",
        "text": "a calculated column that uses the following formula: IF(ISBLANK(Sales[sales_amount]),0, (Sales[sales_amount]))"
      },
      {
        "key": "D",
        "text": "a measure that uses the following formula: SUM(Sales[sales_amount])"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Một thước đo tính toán tổng hợp một cách linh hoạt trong ngữ cảnh bộ lọc báo cáo hiện tại. `SUM(Sales[sales_amount])` cung cấp tổng doanh số cho dữ liệu đã chọn.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 143",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/143-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-144",
    "questionNumber": 144,
    "text": "You have an organization dimension named DimOrganizations.  \n  \nYou have four related tables, as shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1785752192416-aqvnt9wz.png)",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Thứ nguyên bông tuyết chuẩn hóa một thứ nguyên thành nhiều bảng có liên quan cho các cấp độ phân cấp của nó. DimOrgSubVertical liên kết trực tiếp từng ngành dọc với danh mục ngành dọc phụ của nó, do đó, đây là bảng hỗ trợ hệ thống phân cấp DimOrgVertical.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1785752192416-aqvnt9wz.png",
    "sourceTitle": "Examcademy PL-300 Question 144",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/144-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-145",
    "questionNumber": 145,
    "text": "You have a Power BI semantic model that includes a table.  \n  \nYou must create a Power BI report page containing two visuals that meet these requirements:  \n  \n- Visual 1: Display the distribution of hierarchical data.  \n- Visual 2: Search for and then filter by values.  \n  \nChoose the visual type for each visual. Each visual type may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "visual1",
        "text": "Visual 1:",
        "correctAnswer": "E"
      },
      {
        "id": "visual2",
        "text": "Visual 2:",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Gauge"
      },
      {
        "key": "B",
        "text": "Slicer"
      },
      {
        "key": "C",
        "text": "Smart narrative"
      },
      {
        "key": "D",
        "text": "Table"
      },
      {
        "key": "E",
        "text": "Treemap"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Gauge"
      },
      {
        "key": "B",
        "text": "Slicer"
      },
      {
        "key": "C",
        "text": "Smart narrative"
      },
      {
        "key": "D",
        "text": "Table"
      },
      {
        "key": "E",
        "text": "Treemap"
      }
    ],
    "correctAnswers": [
      "visual1=E",
      "visual2=B"
    ],
    "explanation": "Sơ đồ dạng cây thể hiện dữ liệu có thứ bậc bằng các hình chữ nhật lồng nhau, giúp nó phù hợp để hiển thị sự phân bổ của nó. Bộ cắt cung cấp các điều khiển tìm kiếm và lựa chọn để lọc dữ liệu báo cáo theo các giá trị đã chọn.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 145",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/145-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-146",
    "questionNumber": 146,
    "text": "You have a semantic model named Model1.  \n  \nYou need to ensure that users can confirm the data in Model1 meets corporate standards.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create an image of Model1."
      },
      {
        "key": "B",
        "text": "Promote Model1."
      },
      {
        "key": "C",
        "text": "Certify Model1."
      },
      {
        "key": "D",
        "text": "Apply a sensitivity label to Model1."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Chứng nhận đánh dấu một mô hình ngữ nghĩa là đáp ứng các tiêu chuẩn chất lượng của tổ chức và là nội dung đáng tin cậy, có căn cứ phù hợp để sử dụng trong toàn tổ chức. Người đánh giá được ủy quyền áp dụng xác nhận này sau khi xem xét.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 146",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/146-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-147",
    "questionNumber": 147,
    "text": "You have a Power BI query named `Expenses` that imports the following data.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783742188888-wn0tjh0x.png)  \n  \nUsers use only the date portion of the `TransactionDate` value when performing data analysis.  \n  \nYou need to minimize the model size without affecting the analysis.  \n  \nWhich two actions should you take? Each correct answer represents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Change the data type of the TransactionDate column to Date."
      },
      {
        "key": "B",
        "text": "Change the data type of the PostDate column to Date."
      },
      {
        "key": "C",
        "text": "Remove the PostDate column."
      },
      {
        "key": "D",
        "text": "Remove the TransactionID column."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Việc thay đổi `TransactionDate` thành loại Ngày sẽ loại bỏ thành phần thời gian không cần thiết trong khi vẫn duy trì phân tích dựa trên ngày. Việc xóa cột `PostDate` không sử dụng sẽ loại bỏ việc lưu trữ cột đó khỏi mô hình đã nhập. Việc tối ưu hóa các loại dữ liệu cột và loại bỏ các cột không cần thiết sẽ làm giảm kích thước của mô hình Nhập.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783742188888-wn0tjh0x.png",
    "sourceTitle": "Examcademy PL-300 Question 147",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/147-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-148",
    "questionNumber": 148,
    "text": "You have a Power BI semantic model named Model1.  \n  \nYou have a Power BI report named Report1 that includes a single imported table named Sales. Sales has a column named SalesAmount and a column named OrderDate. The Sales table has 1.5 billion rows.  \n  \nYou determine that Model1 is too large and cannot refresh within the defined time.  \n  \nYou need to decrease the size of Model1. The solution must ensure that you can create visuals showing the sum of SalesAmount over time.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From Power Query, remove the SalesAmount column from the Sales table."
      },
      {
        "key": "B",
        "text": "From Power Query, remove the OrderDate column from the Sales table."
      },
      {
        "key": "C",
        "text": "In Report1, filter the Sales table to include only rows from the current year."
      },
      {
        "key": "D",
        "text": "From Power Query, group the Sales table by OrderDate and aggregate SalesAmount."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Tóm tắt trước dữ liệu thực tế là một cách hiệu quả để giảm kích thước của mô hình Nhập. Việc nhóm Doanh số theo Ngày đặt hàng và tổng hợp Số lượng bán hàng sẽ duy trì tổng số cấp ngày cần thiết cho hình ảnh tổng hợp dựa trên thời gian trong khi loại bỏ các hàng giao dịch chi tiết, giảm đáng kể số lượng hàng và khối lượng công việc làm mới.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 148",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/148-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-149",
    "questionNumber": 149,
    "text": "You have a Power BI report containing a line chart that shows sales data for several regions.  \n  \nYou need to add an element to the report that enables users to filter the sales data so it includes only a selected region.  \n  \nWhich two elements meet the goal? Each correct answer provides a complete solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a slicer visual"
      },
      {
        "key": "B",
        "text": "a drillthrough filter"
      },
      {
        "key": "C",
        "text": "a table visual"
      },
      {
        "key": "D",
        "text": "a card visual"
      },
      {
        "key": "E",
        "text": "a Key Performance Indicator (KPI) visual"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Bộ cắt cho phép người dùng chọn một vùng và lọc biểu đồ đường cho phù hợp. Hình ảnh bảng có thể liệt kê các vùng và thông qua tương tác trực quan, việc chọn một vùng sẽ lọc chéo biểu đồ đường tới vùng đó.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 149",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/149-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-150",
    "questionNumber": 150,
    "text": "You have a query called All Sales that imports sales data into a Power BI model.  \n  \nYou plan to build a star schema by splitting columns into separate queries and applying additional transformations. The solution must satisfy these requirements:  \n  \n- Use All Sales as the source for three other queries named Sales Fact, Product Dimension, and Customer Dimension.  \n- Minimize maintenance effort.  \n  \nWhat should you do to create the Sales Fact query, and for which query should you clear **Enable load**?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Tham chiếu sẽ tạo một truy vấn mới sử dụng các bước của truy vấn ban đầu và thay đổi luồng ban đầu cho truy vấn được tham chiếu. Do đó, việc tham chiếu Tất cả doanh số bán hàng sẽ tránh được logic trùng lặp cho các truy vấn thực tế và thứ nguyên. Vô hiệu hóa tải trên truy vấn Tất cả doanh số trung gian để truy vấn này vẫn có sẵn cho các truy vấn xuôi dòng mà không cần thêm bảng không cần thiết vào mô hình dữ liệu.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 150",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/150-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-151",
    "questionNumber": 151,
    "text": "You have a semantic model with the permissions shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1784205965645-83yajtcl.png)  \n  \nUse the drop-down menus to choose the answer that completes each statement using the information in the graphic.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Quyền xây dựng cho phép tạo nội dung từ mô hình ngữ nghĩa, bao gồm Phân tích trong Excel. Quyền chia sẻ lại cho phép cấp quyền truy cập mô hình ngữ nghĩa, bao gồm cả quyền Đọc. Việc xóa hoặc sửa đổi mô hình yêu cầu quyền ghi không gian làm việc phù hợp và việc gán nhãn độ nhạy được điều chỉnh bởi các quyền nhãn Purview thay vì các quyền Đọc, Xây dựng và Chia sẻ lại mô hình ngữ nghĩa.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1784205965645-83yajtcl.png",
    "sourceTitle": "Examcademy PL-300 Question 151",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/151-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-152",
    "questionNumber": 152,
    "text": "You have a Power BI semantic model named Model1.  \n  \nYou need to create a measure that displays the sales result for all blue units. The solution must preserve the existing filter context.  \n  \nHow should you complete the DAX expression?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "CALCULATE đánh giá số đo bằng đối số bộ lọc. KEEPFILTERS thêm điều kiện màu xanh lam bằng cách giao nó với bất kỳ bộ lọc hiện có nào trên cùng một cột, thay vì thay thế bối cảnh bộ lọc đó.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 152",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/152-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.456Z"
  },
  {
    "id": "pl300-153",
    "questionNumber": 153,
    "text": "You are improving a Power BI model that contains DAX calculations.  \n  \nCreate a measure that returns year-to-date total sales for the equivalent date in the preceding calendar year.  \n  \nWhich DAX functions should you use?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "fn1",
        "text": "Slot 1:",
        "correctAnswer": "A"
      },
      {
        "id": "fn2",
        "text": "Slot 2:",
        "correctAnswer": "D"
      },
      {
        "id": "fn3",
        "text": "Slot 3:",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "CALCULATE ("
      },
      {
        "key": "B",
        "text": "DATESBETWEEN ("
      },
      {
        "key": "C",
        "text": "SAMEPERIODLASTYEAR ("
      },
      {
        "key": "D",
        "text": "SUM ("
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "CALCULATE ("
      },
      {
        "key": "B",
        "text": "DATESBETWEEN ("
      },
      {
        "key": "C",
        "text": "SAMEPERIODLASTYEAR ("
      },
      {
        "key": "D",
        "text": "SUM ("
      }
    ],
    "correctAnswers": [
      "fn1=A",
      "fn2=D",
      "fn3=B"
    ],
    "explanation": "CALCULATE đánh giá biểu thức trong ngữ cảnh bộ lọc đã sửa đổi. SUM tổng hợp Doanh số bán hàng[doanh số], trong khi DATESBETWEEN lọc 'Lịch' [Ngày] toàn bộ từ thời điểm bắt đầu tính toán của năm dương lịch trước đến ngày kết thúc năm trước được tính toán.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 153",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/153-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-154",
    "questionNumber": 154,
    "text": "You have a Power BI semantic model that imports data from a Microsoft SQL Server database and an Oracle database. The semantic model is deployed to the Power BI service. Parameters are already in use for the SQL Server data source.  \n  \nYou plan to make a change to the semantic model to ensure consistent behavior across all data sources.  \n  \nYou need to enable parameterization for the Oracle data source. The solution must minimize changes to the existing model.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From Power BI Desktop, modify the Oracle data source to use a parameter, and then republish the model to the Power BI service."
      },
      {
        "key": "B",
        "text": "From the Power BI service, modify the parameters of the SQL Server data source."
      },
      {
        "key": "C",
        "text": "From the Power BI service, create a new semantic model that uses the existing model as a data source, and then parameterize the new model."
      },
      {
        "key": "D",
        "text": "From the Power BI service, set a parameter value for the model."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Người tạo báo cáo Power BI xác định các tham số truy vấn trong Máy tính để bàn Power BI. Sau khi xuất bản, dịch vụ Power BI có thể xem lại và thay đổi cài đặt tham số hiện có nhưng không thể tạo tham số mới. Việc thêm tham số vào kết nối Oracle trong mô hình Máy tính để bàn hiện có và xuất bản lại sẽ cung cấp khả năng tham số hóa nhất quán đồng thời tránh tạo ra một mô hình ngữ nghĩa khác.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 154",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/154-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-155",
    "questionNumber": 155,
    "text": "You have a Power BI semantic model that contains item, price, and country data. The data is displayed in a report that uses filters.  \n  \nYou need to calculate the average item price for a given country. The solution must support the existing filters.  \n  \nWhich type of quick measure should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Total for category (filters applied)"
      },
      {
        "key": "B",
        "text": "Average per category"
      },
      {
        "key": "C",
        "text": "Rolling average"
      },
      {
        "key": "D",
        "text": "Weighted average per category"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Biện pháp nhanh **Trung bình trên mỗi danh mục** tính toán giá mặt hàng trung bình trong bối cảnh của từng quốc gia, tự động tuân theo các bộ lọc và bộ cắt báo cáo hiện có mà không yêu cầu ghi đè TÍNH TOÁN rõ ràng hoặc cú pháp DAX phức tạp.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 155",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/155-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-156",
    "questionNumber": 156,
    "text": "You have data in a Microsoft Excel worksheet, as shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783735454433-uarwp1bj.png)  \n  \nYou need to use Power Query to clean and transform the dataset. The solution must meet the following requirements:  \n  \n- If the discount column returns an error, a discount of 0.05 must be used.  \n- All data rows must be retained.  \n- Administrative effort must be minimized.  \n  \nWhat should you do in Power Query Editor?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Select Replace Errors."
      },
      {
        "key": "B",
        "text": "Edit the query in the Query Errors group."
      },
      {
        "key": "C",
        "text": "Select Remove Errors."
      },
      {
        "key": "D",
        "text": "Select Keep Errors."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Thao tác **Thay thế lỗi** của Power Query thay thế từng lỗi cấp ô trong cột giảm giá đã chọn bằng một giá trị cố định được chỉ định, chẳng hạn như 0,05 mà không xóa bất kỳ hàng nào. Điều này đáp ứng cả yêu cầu thay thế và yêu cầu giữ lại tất cả các hàng dữ liệu.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783735454433-uarwp1bj.png",
    "sourceTitle": "Examcademy PL-300 Question 156",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/156-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-157",
    "questionNumber": 157,
    "text": "You are creating a Power BI model and report.  \n  \nYou have one table in the data model, named Product. Product contains these fields:  \n  \n- ID  \n- Name  \n- Color  \n- Category  \n- Total Sales  \n  \nYou need to create a calculated table that displays only the top eight products by the highest Total Sales value.  \n  \nHow should you complete the DAX expression? Each value may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "function",
        "text": "Slot 1:",
        "correctAnswer": "F"
      },
      {
        "id": "sort_order",
        "text": "Slot 2:",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "ASC"
      },
      {
        "key": "B",
        "text": "DESC"
      },
      {
        "key": "C",
        "text": "RELATEDTABLE"
      },
      {
        "key": "D",
        "text": "CALCULATETABLE"
      },
      {
        "key": "E",
        "text": "MAXX"
      },
      {
        "key": "F",
        "text": "TOPN"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "ASC"
      },
      {
        "key": "B",
        "text": "DESC"
      },
      {
        "key": "C",
        "text": "RELATEDTABLE"
      },
      {
        "key": "D",
        "text": "CALCULATETABLE"
      },
      {
        "key": "E",
        "text": "MAXX"
      },
      {
        "key": "F",
        "text": "TOPN"
      }
    ],
    "correctAnswers": [
      "function=F",
      "sort_order=B"
    ],
    "explanation": "TOPN trả về số hàng được chỉ định từ một bảng theo biểu thức sắp xếp. Đặt hàng Sản phẩm [Tổng doanh số] với DESC sẽ chọn những sản phẩm có giá trị doanh số cao nhất.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 157",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/157-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-158",
    "questionNumber": 158,
    "text": "You plan to create a report that displays sales data from the previous year for several regions.  \n  \nYou need to use roles to limit access to individual data rows for each region. Which four actions should you perform, in sequence?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "step1",
        "text": "Slot 1:",
        "correctAnswer": "E"
      },
      {
        "id": "step2",
        "text": "Slot 2:",
        "correctAnswer": "D"
      },
      {
        "id": "step3",
        "text": "Slot 3:",
        "correctAnswer": "A"
      },
      {
        "id": "step4",
        "text": "Slot 4:",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Publish the report."
      },
      {
        "key": "B",
        "text": "Assign users to the role."
      },
      {
        "key": "C",
        "text": "Add a filter to the report."
      },
      {
        "key": "D",
        "text": "Create a role definition."
      },
      {
        "key": "E",
        "text": "Import the data to Power BI Desktop."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Publish the report."
      },
      {
        "key": "B",
        "text": "Assign users to the role."
      },
      {
        "key": "C",
        "text": "Add a filter to the report."
      },
      {
        "key": "D",
        "text": "Create a role definition."
      },
      {
        "key": "E",
        "text": "Import the data to Power BI Desktop."
      }
    ],
    "correctAnswers": [
      "step1=E",
      "step2=D",
      "step3=A",
      "step4=B"
    ],
    "explanation": "Các vai trò RLS của Power BI và quy tắc lọc dữ liệu của chúng được xác định trong Máy tính để bàn Power BI. Việc xuất bản sẽ chuyển các định nghĩa vai trò đó sang dịch vụ Power BI, nơi người dùng hoặc nhóm được hỗ trợ có thể được chỉ định cho các vai trò. Bộ lọc báo cáo thông thường không thực thi bảo mật cấp hàng cho mỗi người dùng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 158",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/158-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-159",
    "questionNumber": 159,
    "text": "You have a Power BI semantic model containing two tables named DimCustomer and FactOrderDetails.  \n  \nThe primary key for DimCustomer is CustomerID.  \n  \nFactOrderDetails includes a CustomerID column that can relate it to DimCustomer. Multiple FactOrderDetails rows can potentially share the same CustomerID value.  \n  \nYou need to create a relationship from FactOrderDetails to DimCustomer. The solution must optimize query performance.  \n  \nWhat should you create?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "an active, single-direction, many-to-one relationship"
      },
      {
        "key": "B",
        "text": "an inactive, single-direction, one-to-many relationship"
      },
      {
        "key": "C",
        "text": "an active, single-direction, one-to-many relationship"
      },
      {
        "key": "D",
        "text": "an active, bi-directional, many-to-one relationship"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Bảng dữ kiện có các giá trị khóa ngoại lặp lại liên quan đến bảng chiều có các giá trị khóa duy nhất bằng cách sử dụng mối quan hệ nhiều-một khi được chỉ định từ bảng dữ kiện đến bảng chiều. Mối quan hệ hoạt động, một hướng hỗ trợ lọc thứ nguyên theo thực tế tiêu chuẩn và tránh chi phí xử lý truy vấn bổ sung của lọc hai chiều.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 159",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/159-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-160",
    "questionNumber": 160,
    "text": "You have a Power BI report called Report1.  \n  \nYou add a bookmark to Report1 using the default bookmark options.  \n  \nWhich element does the bookmark save?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "default summarization"
      },
      {
        "key": "B",
        "text": "data sources"
      },
      {
        "key": "C",
        "text": "Report settings"
      },
      {
        "key": "D",
        "text": "filters"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Với các tùy chọn dấu trang mặc định, cài đặt Dữ liệu được bật và ghi lại trạng thái bộ lọc và bộ cắt đang hoạt động. Do đó, dấu trang Power BI lưu các bộ lọc thay vì nguồn dữ liệu, cài đặt báo cáo hoặc tóm tắt mặc định.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 160",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/160-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-161",
    "questionNumber": 161,
    "text": "You have a Power BI report that includes a visual containing a measure.  \n  \nYou must ensure that the report meets these requirements:  \n  \n- All values are shown to two decimal places.  \n- All negative values appear in red font and in parentheses.  \n  \nWhich two actions should you take? Each correct answer provides part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "For the visual, apply conditional formatting to the background color."
      },
      {
        "key": "B",
        "text": "Configure the measure to use a custom format."
      },
      {
        "key": "C",
        "text": "For the visual, apply conditional formatting to the font color."
      },
      {
        "key": "D",
        "text": "For the visual, set Value decimal places to 2."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Chuỗi định dạng tùy chỉnh thước đo có thể chỉ định hai vị trí thập phân và định dạng số âm riêng biệt bằng dấu ngoặc đơn, chẳng hạn như `#,##0.00;(#,##0.00)`. Định dạng có điều kiện của màu phông chữ có thể áp dụng màu đỏ khi giá trị đo nhỏ hơn 0. Power BI hỗ trợ các chuỗi định dạng tùy chỉnh cho các thước đo và quy tắc màu phông chữ có điều kiện cho các giá trị hình ảnh.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 161",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/161-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-162",
    "questionNumber": 162,
    "text": "You have a Power BI semantic model named Model1 that includes two fields named Sales and Quarter. Model1 includes a DAX measure that sums the Sales column.  \n  \nYou need to create a report containing the visual shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783741898388-82ph1g1u.png)  \n  \nThe solution must **not** require any additional DAX measures.  \n  \nWhich visual type should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "ribbon chart"
      },
      {
        "key": "B",
        "text": "line chart"
      },
      {
        "key": "C",
        "text": "100% stacked area chart"
      },
      {
        "key": "D",
        "text": "area chart"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Biểu đồ vùng xếp chồng 100% xếp chồng doanh số của từng danh mục theo quý và tự động chuẩn hóa tổng chiều cao của mỗi quý thành 100%. Do đó, nó cho thấy sự đóng góp theo tỷ lệ của từng danh mục theo thời gian bằng cách sử dụng thước đo Doanh số bán hàng hiện có.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783741898388-82ph1g1u.png",
    "sourceTitle": "Examcademy PL-300 Question 162",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/162-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-163",
    "questionNumber": 163,
    "text": "HOTSPOT  \n  \nYou use Power Query Editor to preview the data shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1784205956260-yl3rvzot.png)  \n  \nYou confirm that the data will always begin on row 3, and that row 3 will always contain the column names.  \n  \nHow should you shape the query?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Việc loại bỏ hai hàng trên cùng sẽ làm cho hàng thứ ba ban đầu trở thành hàng đầu tiên trong truy vấn. Lệnh Sử dụng hàng đầu tiên làm tiêu đề của Power Query sau đó thăng cấp các giá trị số liệu_order, số liệu, thực tế và mục tiêu của hàng đầu tiên đó thành tên cột.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1784205956260-yl3rvzot.png",
    "sourceTitle": "Examcademy PL-300 Question 163",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/163-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-164",
    "questionNumber": 164,
    "text": "You have a Microsoft Excel spreadsheet containing the data in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730257814-d81abzj6.png)  \n  \nYou plan to build a data model for a Power BI report.  \n  \nPrepare the data so that it is available to the model in the format shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730260377-lpnu6uei.png)  \n  \nWhich three actions should you perform, in sequence, in Power Query Editor?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "step1",
        "text": "Slot 1:",
        "correctAnswer": "A"
      },
      {
        "id": "step2",
        "text": "Slot 2:",
        "correctAnswer": "D"
      },
      {
        "id": "step3",
        "text": "Slot 3:",
        "correctAnswer": "C"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Select the [Department] and [Stage] columns and unpivot the other columns."
      },
      {
        "key": "B",
        "text": "Select and unpivot the [Department] and [Stage] columns."
      },
      {
        "key": "C",
        "text": "Group by [Department] and [School] and create a new column named [Avg Score] that uses the AVERAGE function on the [Score] column."
      },
      {
        "key": "D",
        "text": "Rename the [Attribute] column as [School] and the [Value] column as [Score]."
      },
      {
        "key": "E",
        "text": "Group by [Department],[School1],[School2],[School3],[School4] and create a new column named [Avg Score] that uses the AVERAGE function on the [Stage] column."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Select the [Department] and [Stage] columns and unpivot the other columns."
      },
      {
        "key": "B",
        "text": "Select and unpivot the [Department] and [Stage] columns."
      },
      {
        "key": "C",
        "text": "Group by [Department] and [School] and create a new column named [Avg Score] that uses the AVERAGE function on the [Score] column."
      },
      {
        "key": "D",
        "text": "Rename the [Attribute] column as [School] and the [Value] column as [Score]."
      },
      {
        "key": "E",
        "text": "Group by [Department],[School1],[School2],[School3],[School4] and create a new column named [Avg Score] that uses the AVERAGE function on the [Stage] column."
      }
    ],
    "correctAnswers": [
      "step1=A",
      "step2=D",
      "step3=C"
    ],
    "explanation": "Việc bỏ xoay các cột trường học không có khóa sẽ chuyển đổi các trường School1–School4 rộng thành các hàng Thuộc tính/Giá trị trong khi vẫn giữ nguyên Bộ phận và Giai đoạn. Việc đổi tên các trường đã tạo đó thành Trường học và Điểm số sẽ tạo ra lược đồ bắt buộc. Phân nhóm theo Khoa và Trường và tính điểm trung bình kết hợp điểm của hai giai đoạn; đối với Trường1, kết quả này tạo ra 77,5 cho môn Toán và 87,5 cho môn Địa lý.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783730257814-d81abzj6.png",
    "sourceTitle": "Examcademy PL-300 Question 164",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/164-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-165",
    "questionNumber": 165,
    "text": "Solution: You configure incremental refresh.  \n  \nDoes this meet the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Làm mới tăng dần sẽ giảm lượng dữ liệu được gửi qua cổng bằng cách chỉ tải dữ liệu mới hoặc đã sửa đổi thay vì làm mới toàn bộ tập dữ liệu. Tối ưu hóa này làm giảm đáng kể lưu lượng cổng và cải thiện hiệu suất làm mới cho các bộ dữ liệu lớn.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 165",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/165-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-166",
    "questionNumber": 166,
    "text": "Solution: You increase Automatic page refresh intervals.  \n  \nDoes this meet the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Việc tăng khoảng thời gian làm mới trang tự động sẽ tăng chứ không giảm lượng lưu lượng dữ liệu qua cổng. Ngoài ra, tính năng làm mới trang tự động chỉ khả dụng ở chế độ DirectQuery chứ không phải Import mode. Cấu hình này sẽ làm tình hình trở nên tồi tệ hơn thay vì đáp ứng mục tiêu giảm lưu lượng cổng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 166",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/166-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-167",
    "questionNumber": 167,
    "text": "Solution: You create aggregations that summarize results.  \n  \nDoes this achieve the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Các tập hợp tóm tắt các hàng nguồn chi tiết thành ít hàng kết quả hơn. Khi mô hình ngữ nghĩa Nhập làm mới thông qua cổng dữ liệu tại chỗ, việc nhập các kết quả tóm tắt đó sẽ giảm khối lượng dữ liệu được truyền qua cổng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 167",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/167-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-168",
    "questionNumber": 168,
    "text": "Solution: You reduce the dashboard cache update frequency.  \n  \nDoes this accomplish the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Nhập mô hình ngữ nghĩa để truy xuất và tải dữ liệu nguồn trong quá trình làm mới mô hình ngữ nghĩa, đây là khối lượng công việc cổng truyền dữ liệu. Giảm tần suất cập nhật bộ nhớ đệm của trang tổng quan là một biện pháp tối ưu hóa DirectQuery và không làm giảm dữ liệu được truyền cho các lần làm mới mô hình ngữ nghĩa Nhập.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 168",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/168-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-169",
    "questionNumber": 169,
    "text": "You import two Microsoft Excel tables, **Customer** and **Address**, into Power Query. **Customer** contains these columns:  \n  \n- Customer ID  \n- Customer Name  \n- Phone  \n- Email Address  \n- Address ID  \n  \n**Address** contains these columns:  \n  \n- Address ID  \n- Address Line 1  \n- Address Line 2  \n- City  \n- State/Region  \n- Country  \n- Postal Code  \n  \nEach Customer ID identifies a unique customer in the Customer table. Each Address ID identifies a unique address in the Address table.  \n  \nYou need to create a query with one row for each customer. Every row must include City, State/Region, and Country for that customer.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Merge the Customer and Address tables."
      },
      {
        "key": "B",
        "text": "Group the Customer and Address tables by the Address ID column."
      },
      {
        "key": "C",
        "text": "Transpose the Customer and Address tables."
      },
      {
        "key": "D",
        "text": "Append the Customer and Address tables."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Phối Power Query nối hai bảng bằng cách sử dụng các giá trị cột khóa phù hợp. Việc hợp nhất Khách hàng với Địa chỉ trên ID Địa chỉ và mở rộng Thành phố, Tiểu bang/Khu vực và Quốc gia sẽ đưa các thuộc tính địa chỉ vào các hàng khách hàng duy nhất, duy trì một hàng cho mỗi khách hàng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 169",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/169-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-170",
    "questionNumber": 170,
    "text": "You have a Power BI semantic model that includes the following tables.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783742671306-95x1tghj.png)  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783742674795-m3x2e68z.png)  \n  \nYou need to create a relationship from FactSales to DimProduct. The solution must provide the fastest DAX query performance.  \n  \nWhich cardinality should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "one-to-many"
      },
      {
        "key": "B",
        "text": "one-to-one"
      },
      {
        "key": "C",
        "text": "many-to-many"
      },
      {
        "key": "D",
        "text": "many-to-one"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "FactSales có thể chứa nhiều hàng bán hàng cho cùng một ID sản phẩm, trong khi DimProduct chứa một hàng duy nhất cho mỗi ID sản phẩm. Do đó, mối quan hệ nhiều-một đặt FactSales ở nhiều bên và DimProduct ở một bên (tra cứu/thứ nguyên), đây là mối quan hệ lược đồ sao hiệu quả tiêu chuẩn.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783742671306-95x1tghj.png",
    "sourceTitle": "Examcademy PL-300 Question 170",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/170-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-171",
    "questionNumber": 171,
    "text": "You use the key influencers visual to determine which factors affect the quantity of items sold per order.  \n  \nYou add the following fields to **Explain By**:  \n  \n- Customer Country  \n- Product Category  \n- Supplier Country  \n- Sales Employee  \n- Supplier Name  \n- Product Name  \n- Customer City  \n  \nThe key influencers visual produces the results shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730787243-7pr6wjxx.jpg)  \n  \nWhat can be identified from the visual?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Customers in Austria order 18.8 more units than the average order quantity."
      },
      {
        "key": "B",
        "text": "Customers in Boise order 20.37 percent more than the average order quantity."
      },
      {
        "key": "C",
        "text": "Product Category positively influences the quantity per order."
      },
      {
        "key": "D",
        "text": "Customers in Cork order lower quantities than average."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Quốc gia của khách hàng = Áo được xác định là quốc gia có ảnh hưởng với Số lượng trung bình trên mỗi đơn hàng tăng 18,8. Những người có ảnh hưởng chính đối với các mục tiêu số báo cáo mức độ tăng hoặc giảm giá trị mục tiêu trung bình; mức trung bình so sánh được tính toán linh hoạt từ các giá trị khác. Do đó, 20,37 của Boise không phải là một tỷ lệ phần trăm.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783730787243-7pr6wjxx.jpg",
    "sourceTitle": "Examcademy PL-300 Question 171",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/171-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-172",
    "questionNumber": 172,
    "text": "Which DAX expression should be used to obtain the ending balances in balance sheet reports?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "CALCULATE ( SUM( BalanceSheet[BalanceAmount] ), LASTDATE ( 'Date'[Date] ) )"
      },
      {
        "key": "B",
        "text": "CALCULATE ( SUM( BalanceSheet[BalanceAmount] ), DATESQTD('Date'[Date]) )"
      },
      {
        "key": "C",
        "text": "FIRSTNONBLANK ('Date'[Date] SUM( BalanceSheet[BalanceAmount] ) )"
      },
      {
        "key": "D",
        "text": "CALCULATE ( MAX( BalanceSheet[BalanceAmount] ), LASTDATE ('Date'[Date] ))"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "`LASTDATE('Date'[Date])` trả về ngày cuối cùng trong ngữ cảnh ngày hiện tại và có thể được `CALCULATE` áp dụng làm bộ lọc bảng. Tính tổng `BalanceSheet[BalanceAmount]` theo bộ lọc đó mang lại số dư được ghi vào ngày kết thúc, thay vì tổng số từ đầu quý đến nay hoặc số dư lớn nhất về số. [Microsoft Learn: LASTDATE function (DAX)](https://learn.microsoft.com/en-us/dax/lastdate-function-dax)",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 172",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/172-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-173",
    "questionNumber": 173,
    "text": "You have a Power BI tenant containing a workspace. The workspace contains a dataset named datasetA.  \n  \nYou need to create a pivot-table report in Microsoft Excel that uses datasetA as its data source. The solution must meet these requirements:  \n  \n- Ensure the report can be refreshed to retrieve the latest available data from the Power BI service.  \n- Ensure all visible data in datasetA is available for use in Excel.  \n  \nWhat should you do to connect Excel to datasetA, and which element in datasetA is incompatible with the Excel connection?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Phân tích trong Excel tạo kết nối trực tiếp tới mô hình ngữ nghĩa Power BI cho PivotTable Excel, cho phép làm mới và truy cập vào các trường mô hình hiển thị. Tham số trường là tính năng chỉ dành cho Power BI và không hoạt động trong Phân tích trong Excel. Bảo mật cấp đối tượng xác định đối tượng nào được hiển thị và các biện pháp báo cáo vẫn có thể sử dụng được trong Excel PivotTable.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 173",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/173-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-174",
    "questionNumber": 174,
    "text": "You create a Power BI report that shows IoT temperature data streaming from a refrigerator.  \n  \nYou publish the report to the Power BI service.  \n  \nYou need to receive a notification when the temperature exceeds four degrees Celsius.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Set an alert on a KPI visual in the report."
      },
      {
        "key": "B",
        "text": "Pin a card visual to a dashboard and create a subscription."
      },
      {
        "key": "C",
        "text": "Pin a card visual to a dashboard and set an alert on the tile."
      },
      {
        "key": "D",
        "text": "Pin a report page to a dashboard and set an alert on the page."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Cảnh báo dữ liệu Power BI được định cấu hình trên các ô bảng thông tin được hỗ trợ, bao gồm cả các ô thẻ. Đối với các tập dữ liệu phát trực tuyến, hình ảnh báo cáo thẻ có thể được ghim vào trang tổng quan và đưa ra quy tắc cảnh báo có ngưỡng trên 4°C, quy tắc này sẽ kích hoạt thông báo khi dữ liệu đạt đến giá trị đó.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 174",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/174-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-175",
    "questionNumber": 175,
    "text": "The tables are shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730623951-85kgw6ca.png)  \n  \nThe Impressions table contains approximately 30 million records each month.  \n  \nYou need to create an ad analytics system that meets the following requirements:  \n  \n- Present ad-impression counts by day, campaign, and site_name. Analytics for the last year are required.  \n- Minimize the size of the data model.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730626983-en40cm14.png)  \n  \nWhich two actions should you perform? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create one-to-many relationships between the tables."
      },
      {
        "key": "B",
        "text": "Group the Impressions query in Power Query by Ad_id, Site_name, and Impression_date. Aggregate by using the CountRows function."
      },
      {
        "key": "C",
        "text": "Create a calculated table that contains Ad_id, Site_name, and Impression_date."
      },
      {
        "key": "D",
        "text": "Create a calculated measure that aggregates by using the COUNTROWS function."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Tóm tắt trước dữ liệu thực tế ở mức độ báo cáo cần thiết là một cách hiệu quả để giảm quy mô của mô hình Nhập. Việc nhóm số lần hiển thị theo Ad_id, Site_name và Impression_date và đếm các hàng sẽ giữ lại số lần hiển thị cấp trang web hàng ngày đồng thời loại bỏ chi tiết cấp độ hiển thị không cần thiết. Mối quan hệ một-nhiều từ Chiến dịch đến Quảng cáo và từ Quảng cáo đến bảng số lần hiển thị tóm tắt cho phép các bộ lọc và thuộc tính chiến dịch truyền đến dữ liệu thực tế tổng hợp.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783730623951-85kgw6ca.png",
    "sourceTitle": "Examcademy PL-300 Question 175",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/175-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-176",
    "questionNumber": 176,
    "text": "You have a Power BI model that contains a table named Sales and a related date table. Sales contains a measure named Total Sales.  \n  \nYou need to create a measure that calculates total sales for the equivalent month in the preceding year. How should you complete the calculation?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "CALCULATE đánh giá thước đo trong bối cảnh bộ lọc đã sửa đổi. SAMEPERIODLASTYEAR cung cấp những ngày được lùi lại một năm so với ngữ cảnh ngày hiện tại, do đó, nó lọc [Tổng doanh số] bằng cách sử dụng cột bảng ngày liên quan: CALCULATE([Tổng doanh số], SAMEPERIODLASTYEAR('Date'[Date])).",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 176",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/176-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-177",
    "questionNumber": 177,
    "text": "You plan to use Power BI to create a quarterly profit report that meets these requirements:  \n  \n- Emphasize the percentage of total profits contributed by each product category, in dollars and as a percentage.  \n- Compare profit margins across sales regions.  \n  \nWhich visual type should you use for each requirement? Each visual may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "profit_percentage",
        "text": "Emphasizes the percentage of total profits contributed by each product category:",
        "correctAnswer": "D"
      },
      {
        "id": "regional_margins",
        "text": "- Compares profit margins across sales regions:",
        "correctAnswer": "E"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Area chart"
      },
      {
        "key": "B",
        "text": "Funnel chart"
      },
      {
        "key": "C",
        "text": "Multi-row card"
      },
      {
        "key": "D",
        "text": "Pie chart"
      },
      {
        "key": "E",
        "text": "Stacked bar chart"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Area chart"
      },
      {
        "key": "B",
        "text": "Funnel chart"
      },
      {
        "key": "C",
        "text": "Multi-row card"
      },
      {
        "key": "D",
        "text": "Pie chart"
      },
      {
        "key": "E",
        "text": "Stacked bar chart"
      }
    ],
    "correctAnswers": [
      "profit_percentage=D",
      "regional_margins=E"
    ],
    "explanation": "Biểu đồ hình tròn hiển thị từng danh mục sản phẩm theo tỷ lệ trên tổng số, giúp biểu đồ này phù hợp để hiển thị tổng đóng góp lợi nhuận cả về số lượng và tỷ lệ phần trăm. Biểu đồ thanh xếp chồng hỗ trợ so sánh giữa các khu vực bán hàng và có thể hiển thị các thành phần của tỷ suất lợi nhuận trong từng khu vực.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 177",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/177-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-178",
    "questionNumber": 178,
    "text": "HOTSPOT -  \n  \nYou are creating an analytics report that will use data from the tables shown below.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730526816-btlt12z1.png)  \n  \nThe tables have a relationship. There are no reporting requirements for `employee_id` or `employee_photo`.  \n  \nYou need to optimize the data model. What should you configure for `employee_id` and `employee_photo`?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Giữ `employee_id` vì đây là khóa mối quan hệ nhưng ẩn nó khỏi tác giả báo cáo vì nó không cần thiết để báo cáo. Xóa `employee_photo` vì đây là cột nhị phân không được sử dụng; việc loại bỏ các cột không sử dụng sẽ làm giảm dữ liệu được giữ lại trong mô hình.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783730526816-btlt12z1.png",
    "sourceTitle": "Examcademy PL-300 Question 178",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/178-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-179",
    "questionNumber": 179,
    "text": "You have a project management app that is entirely hosted in Microsoft Teams. The app was developed by using Microsoft Power Apps.  \n  \nYou need to create a Power BI report that connects to the project management app.  \n  \nWhich connector should you choose?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Teams Personal Analytics"
      },
      {
        "key": "B",
        "text": "SQL Server database"
      },
      {
        "key": "C",
        "text": "Dataverse"
      },
      {
        "key": "D",
        "text": "Dataflows"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Power Apps được tạo trong Microsoft Teams lưu trữ và quản lý dữ liệu dành riêng cho nhóm của họ trong môi trường Dataverse for Teams. Power BI có thể kết nối trực tiếp với dữ liệu này bằng cách sử dụng trình kết nối Dataverse để tạo báo cáo.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 179",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/179-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-180",
    "questionNumber": 180,
    "text": "You are building a new semantic model in Microsoft Power BI Desktop.  \n  \nYou connect to a recently used data source and receive an error indicating that the password has expired.  \n  \nYou need to update the credentials for the data source.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From Data Source settings, select the data source, and then select Edit Permissions."
      },
      {
        "key": "B",
        "text": "From Options, select Data Load, and then select Clear Cache."
      },
      {
        "key": "C",
        "text": "From Power Query Editor, select Refresh Preview."
      },
      {
        "key": "D",
        "text": "From the Modeling tab, select Manage Roles, and then add a role."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Power BI Desktop quản lý cài đặt xác thực được lưu trữ của nguồn dữ liệu trong Cài đặt nguồn dữ liệu. Việc chọn nguồn có liên quan và chọn Chỉnh sửa quyền cho phép bạn chỉnh sửa thông tin xác thực của nguồn đó, bao gồm cả mật khẩu đã cập nhật.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 180",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/180-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-181",
    "questionNumber": 181,
    "text": "You are building a visual in a Power BI report. The related semantic model includes sales for three products over the past four years.  \n  \nYou need to show total sales by quarter, grouped by product. The visual must show trends for both overall sales and sales for each individual product.  \n  \nWhich visual type should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "area chart"
      },
      {
        "key": "B",
        "text": "clustered column chart"
      },
      {
        "key": "C",
        "text": "stacked area chart"
      },
      {
        "key": "D",
        "text": "line chart"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Biểu đồ vùng xếp chồng hiển thị xu hướng dựa trên thời gian cho nhiều chuỗi sản phẩm trong khi xếp chồng các giá trị của chúng. Các phân khúc xếp chồng lên nhau cho thấy xu hướng bán hàng và đóng góp của từng sản phẩm, đồng thời chiều cao xếp chồng kết hợp cho thấy tổng xu hướng bán hàng trong mỗi quý. Các tài liệu của Microsoft có biểu đồ vùng xếp chồng có thể hiển thị tổng số tích lũy và chúng phù hợp để hiển thị tổng số cho tất cả các chuỗi cùng với phần đóng góp của từng chuỗi.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 181",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/181-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-182",
    "questionNumber": 182,
    "text": "You need to provide a solution that gives the sales managers the required access.  \n  \nWhat should you include in the solution?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create a security role that has a table filter on the Sales Manager table where username = UserName()."
      },
      {
        "key": "B",
        "text": "Create a security role that has a table filter on the Sales Manager table where username = sales_manager_id."
      },
      {
        "key": "C",
        "text": "Create a security role that has a table filter on the Region Manager table where sales_manager_id = UserPrincipalName()."
      },
      {
        "key": "D",
        "text": "Create a security role that has a table filter on the Sales_Manager table where name = UserName()."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Bảo mật cấp hàng động sẽ lọc bảng ánh xạ Trình quản lý bán hàng để chỉ hiển thị hàng có `username` khớp với người dùng hiện tại được `USERNAME()` trả về. Sau đó, các mối quan hệ mô hình có thể truyền bộ lọc đó tới dữ liệu bán hàng. Power BI hỗ trợ các quy tắc RLS động sử dụng `USERNAME()` hoặc `USERPRINCIPALNAME()`.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 182",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/182-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-183",
    "questionNumber": 183,
    "text": "You are building a Power BI report using Power BI Desktop.  \n  \nYou need to add a visual that automatically displays trends and other useful information. The visual must update according to selections made in other visuals.  \n  \nWhich visual type should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Q&A"
      },
      {
        "key": "B",
        "text": "smart narrative"
      },
      {
        "key": "C",
        "text": "key influencers"
      },
      {
        "key": "D",
        "text": "decomposition tree"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Hình ảnh tường thuật thông minh tự động tạo văn bản làm nổi bật xu hướng, nội dung chính và bối cảnh. Văn bản được tạo và các giá trị động sẽ cập nhật khi các lựa chọn trong các hình ảnh trực quan khác lọc chéo báo cáo.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 183",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/183-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-184",
    "questionNumber": 184,
    "text": "You have the Power BI model shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730011033-a8saguv8.jpg)  \n  \nA manager can represent only one country. You need to use row-level security (RLS) to meet these requirements:  \n  \n- Managers must see data only for their respective country.  \n- The number of RLS roles must be minimized.  \n  \nWhich two actions should you perform? Each correct answer presents a complete solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create a single role that filters Country[Manager_Email] by using the USERNAME DAX function."
      },
      {
        "key": "B",
        "text": "Create a single role that filters Country[Manager_Email] by using the USEROBJECTID DAX function."
      },
      {
        "key": "C",
        "text": "For the relationship between Purchase Detail and Purchase, select Apply security filter in both directions."
      },
      {
        "key": "D",
        "text": "Create one role for each country."
      },
      {
        "key": "E",
        "text": "For the relationship between Purchase and Purchase Detail, change the Cross filter direction to Single."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Một vai trò RLS động duy nhất lọc `Country[Manager_Email]` bằng `USERNAME()` hạn chế mỗi người quản lý ở hàng Quốc gia được liên kết với danh tính đăng nhập của họ, giảm thiểu số lượng vai trò. Bộ lọc RLS sử dụng tính năng lọc một hướng theo mặc định; việc chọn **Áp dụng bộ lọc bảo mật theo cả hai hướng** trên Chi tiết mua hàng – Mối quan hệ mua hàng sẽ cho phép bộ lọc bảo mật lan truyền theo yêu cầu. Trong dịch vụ Power BI, `USERNAME()` trả về UPN của người dùng, giống như email và có thể khớp với cột email của người quản lý.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783730011033-a8saguv8.jpg",
    "sourceTitle": "Examcademy PL-300 Question 184",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/184-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-185",
    "questionNumber": 185,
    "text": "You use Power BI Desktop to import two tables named **Customer** and **Contacts**.  \n  \nThe **Customer** table includes these columns:  \n  \n- Customer_Name  \n- Customer ID  \n- Website  \n  \nThe **Contacts** table includes these columns:  \n  \n- Contact ID  \n- Contact Email  \n- Contact Name  \n- Customer Name  \n  \nA web-based contact form populates the **Contacts** table. Its data is not sanitized.  \n  \nYou need to create a merge between the **Customer** and **Contacts** tables.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Disable fuzzy matching."
      },
      {
        "key": "B",
        "text": "Enable fuzzy matching."
      },
      {
        "key": "C",
        "text": "Set Join Kind to Left Outer."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "So khớp mờ áp dụng thuật toán so sánh gần đúng cho các cột văn bản trong quá trình phối Power Query. Điều này phù hợp khi các giá trị biểu mẫu liên hệ ở dạng tự do, chưa được dọn dẹp có thể không khớp chính xác với các giá trị tên khách hàng tương ứng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 185",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/185-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-186",
    "questionNumber": 186,
    "text": "You use Power Query Editor to retrieve data from a Microsoft SharePoint Online list.  \n  \nYou plan to use Advanced Editor to create a Power Query M formula language query.  \n  \nYou need to create a query that loads the data, expands a column named `Location`, and hides a column named `CountryOrRegion` from the dataset.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "`Table.ExpandRecordColumn` mở rộng các trường từ cột có giá trị bản ghi thành các cột trong bảng; các đối số tên trường và tên cột mới của nó khớp với phần mở rộng `DisplayName`. `Table.RemoveColumns` loại bỏ cột `CountryOrRegion` được chỉ định, do đó, cột no hiện diện lâu hơn trong tập dữ liệu đầu ra.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 186",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/186-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-187",
    "questionNumber": 187,
    "text": "You have a table containing the following three columns:  \n  \nCity -  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730766375-zj3j8a97.png)  \n  \n✑ Total Sales  \n\n✑ Occupation  \n  \nYou need to create a Key influencers visualization as shown in the exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730768826-uin4x1p8.jpg)  \n  \nHow should you configure the visualization?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Hình ảnh trực quan của Người có ảnh hưởng chính đặt chỉ số kết quả vào Phân tích và các trường có thể thúc đẩy chỉ số đó vào Giải thích bởi. Tổng Doanh thu là kết quả đang được phân tích, trong khi Nghề nghiệp là yếu tố giải thích mức tăng quan sát được.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783730766375-zj3j8a97.png",
    "sourceTitle": "Examcademy PL-300 Question 187",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/187-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-188",
    "questionNumber": 188,
    "text": "Solution: You create a constant line and set its value to .5.  \n  \nDoes this satisfy the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Một dòng không đổi sử dụng giá trị cố định được chỉ định, do đó,.5 biểu thị giá trị lương là 0,50 USD thay vì giá trị Lương trung bình. Đường trung tuyến tính toán và hiển thị mức trung bình của một thước đo, cần thiết để xác định những nhân viên có mức lương cao hơn mức trung bình đó.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 188",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/188-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-189",
    "questionNumber": 189,
    "text": "Solution: You create an average line using the **Salary** measure.  \n  \nDoes this fulfill the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Một dòng trung bình hiển thị giá trị trung bình của các giá trị Lương, trong khi yêu cầu là xác định những nhân viên có mức lương vượt quá mức trung bình. Giá trị trung bình và trung vị có thể khác nhau, đặc biệt khi mức lương bị sai lệch.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 189",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/189-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-190",
    "questionNumber": 190,
    "text": "Solution: Create a percentile line using the Salary measure, and set the percentile value to 50%.  \n  \nDoes this satisfy the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Phân vị thứ 50 là mức lương trung bình. Đường phân vị ở mức 50% cung cấp đường tham chiếu trung bình, do đó nhân viên có các thanh trên đường đó có mức lương cao hơn mức trung bình.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 190",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/190-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-191",
    "questionNumber": 191,
    "text": "Solution: You create a median line using the **Salary** measure.  \n  \nDoes this achieve the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Trong biểu đồ thanh được nhóm, đường trung tuyến biểu thị giá trị trung bình của thước đo đã chọn. Việc sử dụng thước đo Lương sẽ tạo ra một đường tham chiếu ở mức lương trung bình, cho phép những nhân viên có thanh lương vượt ra ngoài đường đó được xác định là ở trên mức lương trung bình.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 191",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/191-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-192",
    "questionNumber": 192,
    "text": "You are creating a Power BI single-page report.  \n  \nSome users will navigate the report by using a keyboard, and some users will navigate the report by using a screen reader.  \n  \nYou need to ensure that the users can consume content on a report page in a logical order.  \n  \nWhat should you configure on the report page?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "the layer order"
      },
      {
        "key": "B",
        "text": "the X position"
      },
      {
        "key": "C",
        "text": "the bookmark order"
      },
      {
        "key": "D",
        "text": "the tab order"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Cài đặt thứ tự tab kiểm soát trình tự trong đó người dùng bàn phím và trình đọc màn hình điều hướng qua các thành phần trang báo cáo, đảm bảo nội dung được sử dụng theo thứ tự hợp lý, dự kiến, độc lập với vị trí trực quan.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 192",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/192-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-193",
    "questionNumber": 193,
    "text": "You use Power BI Desktop to import two tables named Customer and Contacts.  \n  \nThe Customer table includes these columns:  \n  \n- Customer_Name  \n- Customer ID  \n- Website  \n  \nThe Contacts table includes these columns:  \n  \n- Contact ID  \n- Contact Email  \n- Contact Name  \n- Customer Name  \n  \nA web-based contact form populates the Contacts table. Its data is not sanitized.  \n  \nYou need to create a merge between the Customer and Contacts tables.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Set Join Kind to Full Outer."
      },
      {
        "key": "B",
        "text": "Disable fuzzy matching."
      },
      {
        "key": "C",
        "text": "Set Join Kind to Left Outer."
      },
      {
        "key": "D",
        "text": "Enable fuzzy matching."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "So khớp mờ áp dụng thuật toán so khớp gần đúng cho các cột văn bản trong quá trình phối Power Query. Nó phù hợp với dữ liệu biểu mẫu liên hệ dạng tự do chưa được dọn dẹp, trong đó các giá trị tên khách hàng có thể không khớp chính xác với các giá trị Customer_Name tương ứng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 193",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/193-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-194",
    "questionNumber": 194,
    "text": "You have a Power BI report that contains the fields shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783738921698-45l4lug2.png)",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Số lượng bán hàng và Giá thành sản phẩm đều được tóm tắt trực tiếp bằng hình ảnh, khiến chúng trở thành thước đo ngầm riêng biệt; do đó, cần có hai biện pháp rõ ràng. Tập hợp mặc định của trường số trong hình ảnh trong tương lai được xác định bằng cài đặt tóm tắt của nó.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783738921698-45l4lug2.png",
    "sourceTitle": "Examcademy PL-300 Question 194",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/194-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-195",
    "questionNumber": 195,
    "text": "You have a Power BI report containing a stacked bar chart.  \n  \nYou need to add a new field to the legend. The field must combine information from distinct columns.  \n  \nWhat should you create?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a calculated column"
      },
      {
        "key": "B",
        "text": "a dynamic format string"
      },
      {
        "key": "C",
        "text": "a measure"
      },
      {
        "key": "D",
        "text": "a calculation group"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Cột được tính toán sử dụng biểu thức DAX để tạo trường cấp hàng từ các cột hiện có, bao gồm các giá trị nối từ các cột riêng biệt. Các cột được tính toán có thể được sử dụng làm trường trong chú giải của hình ảnh trực quan, trong khi các thước đo thường được sử dụng cho các giá trị tổng hợp.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 195",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/195-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-196",
    "questionNumber": 196,
    "text": "You have a Power BI semantic model called Model1 that uses Import storage mode.  \n  \nYou need to decrease the size of Model1.  \n  \nWhich two actions should you take? Each correct answer provides a complete solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Summarize the detail data."
      },
      {
        "key": "B",
        "text": "Upgrade to Power BI premium."
      },
      {
        "key": "C",
        "text": "Implement row-level security (RLS)."
      },
      {
        "key": "D",
        "text": "Optimize the column data types."
      },
      {
        "key": "E",
        "text": "Change the active relationships between tables to inactive relationships."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Dữ liệu chi tiết tóm tắt trước làm giảm số lượng hàng của bảng dữ kiện được giữ lại trong mô hình Nhập, điều này có thể giảm đáng kể kích thước của nó. Việc tối ưu hóa các kiểu dữ liệu cột có thể cải thiện hiệu quả lưu trữ của VertiPaq; dữ liệu số có thể sử dụng mã hóa giá trị hiệu quả hơn dữ liệu văn bản trong các trường hợp thích hợp.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 196",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/196-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-197",
    "questionNumber": 197,
    "text": "You are creating a Power BI model that includes a table named Store. Store has the following fields.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730128307-b04phki6.png)  \n  \nYou plan to create a map visual that displays store locations and lets users drill down from Country to State/Province to City. What should you do to ensure the locations are mapped correctly?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Change the data type of City, State/Province, and Country."
      },
      {
        "key": "B",
        "text": "Set Summarization for City, State/Province, and Country to Don't summarize."
      },
      {
        "key": "C",
        "text": "Set the data category of City, State/Province, and Country."
      },
      {
        "key": "D",
        "text": "Create a calculated column that concatenates the values in City, State/Province, and Country."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Việc chỉ định danh mục dữ liệu địa lý thích hợp cho từng cột vị trí sẽ cho Power BI biết cách diễn giải các giá trị cho mã hóa địa lý. Việc phân loại các trường theo Thành phố, Tiểu bang hoặc Tỉnh và Quốc gia hoặc Khu vực cho phép lập bản đồ vị trí chính xác và hỗ trợ hệ thống phân cấp địa lý.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783730128307-b04phki6.png",
    "sourceTitle": "Examcademy PL-300 Question 197",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/197-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-198",
    "questionNumber": 198,
    "text": "You try to create a custom column in Power Query Editor and receive the error shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1785751829880-7nzmsm02.png)",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Power Query M không thể ghép trực tiếp giá trị Văn bản và giá trị Số với `&`. Việc chuyển đổi số thành văn bản (ví dụ: với `Number.ToText`) cho phép `A` theo sau là `1` để tạo ra `A1`.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1785751829880-7nzmsm02.png",
    "sourceTitle": "Examcademy PL-300 Question 198",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/198-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-199",
    "questionNumber": 199,
    "text": "You intend to create a line chart to display and compare sales data from the past six months for two departments.  \n  \nYou need to improve the accessibility of the visual.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Configure a unique marker for each series."
      },
      {
        "key": "B",
        "text": "Configure a distinct color for each series."
      },
      {
        "key": "C",
        "text": "Replace long text with abbreviations and acronyms."
      },
      {
        "key": "D",
        "text": "Move important information to a tooltip."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Đối với các biểu đồ đường nhiều chuỗi có thể truy cập được, mỗi chuỗi phải sử dụng hình dạng điểm đánh dấu riêng biệt để các đường vẫn có thể phân biệt được mà không chỉ phụ thuộc vào màu sắc. Microsoft khuyên bạn nên bật điểm đánh dấu và sử dụng hình dạng điểm đánh dấu khác nhau cho từng dòng hoặc chuỗi khu vực.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 199",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/199-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-200",
    "questionNumber": 200,
    "text": "You have two Power BI reports, ReportA and ReportB, each of which uses a distinct color palette.  \n  \nYou are creating a Power BI dashboard that will contain two visuals from each report.  \n  \nYou need to apply a consistent dark theme to the dashboard. The solution must preserve the reports' original colors.  \n  \nWhich two actions should you take? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Upload a snapshot."
      },
      {
        "key": "B",
        "text": "For the browser, set the color preference to dark mode."
      },
      {
        "key": "C",
        "text": "When pinning visuals to the dashboard, select Use destination theme."
      },
      {
        "key": "D",
        "text": "Select the dark dashboard theme."
      },
      {
        "key": "E",
        "text": "Turn on tile flow."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Chủ đề trang tổng quan có thể áp dụng chủ đề màu tối trên trang tổng quan. Khi ngăn xếp báo cáo được ghim bằng chủ đề trang tổng quan đích, ngăn xếp đó sẽ sử dụng chủ đề trang tổng quan đó, trong khi báo cáo nguồn liên quan và bảng màu ban đầu của nó vẫn không thay đổi.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 200",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/200-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-201",
    "questionNumber": 201,
    "text": "You have a Power BI report named ReportA.  \n  \nYour Power BI tenant allows users to export data.  \n  \nYou need to make sure that consumers of ReportA cannot export any data from its visuals.  \n  \nWhich two actions should you take? Each correct answer provides a complete solution.  \n  \n> **NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From Power BI Desktop, modify the Report settings."
      },
      {
        "key": "B",
        "text": "From Power BI Desktop, modify the Data Load settings."
      },
      {
        "key": "C",
        "text": "From the Power BI service, modify the dataset permissions."
      },
      {
        "key": "D",
        "text": "From the Power BI service, modify the Report settings."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Cài đặt **Xuất dữ liệu** cấp báo cáo của Power BI có thể được đặt để ngăn người dùng cuối xuất bất kỳ dữ liệu nào từ hình ảnh báo cáo. Điều khiển này khả dụng trong cả Máy tính để bàn Power BI trong **Tệp hiện tại > Cài đặt báo cáo** và trong cài đặt báo cáo dịch vụ Power BI. Quyền tập dữ liệu và cài đặt Tải dữ liệu không định cấu hình hành vi xuất dữ liệu trực quan ở cấp báo cáo này.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 201",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/201-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-202",
    "questionNumber": 202,
    "text": "You have a Power BI semantic model named Model1 that contains two tables named DimDate and FactSales. An active relationship exists between DimDate and FactSales. DimDate is marked as the date table. FactSales contains the following data.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783742181585-xpdd8975.png)  \n  \nModel1 includes the following measure.  \n  \n```DAX  \nPrevious Year Sales = CALCULATE([Sales Amount], PREVIOUSYEAR('Date'[Date]))  \n```  \n  \nYou have a report that uses Model1. The report contains a single page with a page-level filter set to May 9, 2024. The result of the Previous Year Sales measure is shown in a card visual.  \n  \nWhich value will be displayed in the card visual?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "10"
      },
      {
        "key": "B",
        "text": "15"
      },
      {
        "key": "C",
        "text": "35"
      },
      {
        "key": "D",
        "text": "60"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "`PREVIOUSYEAR` cung cấp tất cả các ngày từ năm dương lịch trước đó cho bối cảnh ngày hiện tại. Đối với bộ lọc ngày 9 tháng 5 năm 2024, phép tính đánh giá doanh số năm 2023: 15 + 20 + 25 = 60.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783742181585-xpdd8975.png",
    "sourceTitle": "Examcademy PL-300 Question 202",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/202-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-203",
    "questionNumber": 203,
    "text": "Solution: Split the **IoT DateTime** column into columns named **Date** and **Time**.  \n  \nDoes this meet the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Việc tách ngày và giờ làm giảm số lượng hiệu quả của dấu thời gian kết hợp và duy trì các thành phần cần thiết để nhóm các sự kiện IoT theo ngày trong năm và giờ. Việc phân chia ngày và giờ được bao gồm trong các quy tắc thực hành tốt nhất về hiệu suất mô hình của Microsoft Power BI.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 203",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/203-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-204",
    "questionNumber": 204,
    "text": "Solution: Remove the **IoT GUID** column while retaining the **IoT ID** column.  \n  \nDoes this satisfy the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Việc xóa cột GUID IoT dư thừa (trường văn bản lớn) sẽ giảm kích thước của mô hình ngữ nghĩa và cải thiện hiệu suất nhập. Do cột ID IoT xác định độc lập từng hàng và cho phép phân tích theo giờ và ngày trong năm nên giải pháp này đáp ứng mục tiêu đã nêu là cân bằng giữa tối ưu hóa hiệu suất với khả năng phân tích.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 204",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/204-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-205",
    "questionNumber": 205,
    "text": "Solution: You change the **IoT DateTime** column to the **Date** data type.  \n  \nDoes this solution meet the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Loại Power Query **Date** chỉ chứa ngày và phần thời gian no. Việc chuyển đổi giá trị ngày giờ sang loại này sẽ loại bỏ thông tin về giờ, ngăn cản việc phân tích các sự kiện IoT theo giờ; do đó, nó không đáp ứng được yêu cầu phân tích.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 205",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/205-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-206",
    "questionNumber": 206,
    "text": "Solution: Create a custom column that concatenates the **IoT GUID** column with the **IoT ID** column, and then remove the **IoT GUID** and **IoT ID** columns.  \n  \nDoes this achieve the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Việc ghép hai mã định danh duy nhất của hàng sẽ tạo ra một cột văn bản có số lượng số cao, duy nhất cho hàng khác. Các giá trị văn bản có số lượng cao yêu cầu công việc lưu trữ và tra cứu, trong khi mã định danh này không cần thiết để phân tích theo giờ và ngày trong năm. Việc xóa các cột mã định danh không cần thiết mà không giữ lại mã định danh kết hợp sẽ giúp giảm dấu chân mô hình và cải thiện hiệu suất tốt hơn.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 206",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/206-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-207",
    "questionNumber": 207,
    "text": "You have a Power BI data model that analyzes product sales over time. The data model includes the following tables.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783732318552-069dmo85.png)  \n  \nA one-to-many relationship exists between the tables.  \n  \nThe **auto date/time** option is enabled for the data model.  \n  \nYou need to reduce the data model size while retaining the ability to analyze product sales by month and quarter.  \n  \nWhich two actions should you take? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct answer is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create a relationship between the Date table and the Sales table."
      },
      {
        "key": "B",
        "text": "Disable the auto date/time option."
      },
      {
        "key": "C",
        "text": "Create a Date table and select Mark as Date Table."
      },
      {
        "key": "D",
        "text": "Disable the load on the Date table."
      },
      {
        "key": "E",
        "text": "Remove the relationship between the Product table and the Sales table."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Ngày/giờ tự động tạo các bảng ngày ẩn giúp tăng kích thước mô hình. Việc tắt tùy chọn sẽ loại bỏ chi phí đó. Một bảng Ngày riêng biệt được đánh dấu là bảng ngày cung cấp các thuộc tính lịch và thứ nguyên ngày, chẳng hạn như tháng và quý, cần thiết cho phân tích bán hàng dựa trên thời gian.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783732318552-069dmo85.png",
    "sourceTitle": "Examcademy PL-300 Question 207",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/207-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-208",
    "questionNumber": 208,
    "text": "You have a set of reports for your company’s HR department. The datasets use row-level security (RLS), and the company has multiple sales regions.  \n  \nEach sales region has an HR manager.  \n  \nYou must ensure that HR managers can interact only with data from their own region. HR managers must not be able to change the report layouts.  \n  \nHow should you provision report access for the HR managers?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Publish the reports in an app and grant the HR managers access permission."
      },
      {
        "key": "B",
        "text": "Create a new workspace, copy the datasets and reports, and add the HR managers as members of the workspace."
      },
      {
        "key": "C",
        "text": "Publish the reports to a different workspace other than the one hosting the datasets."
      },
      {
        "key": "D",
        "text": "Add the HR managers as members of the existing workspace that hosts the reports and the datasets."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Ứng dụng Power BI cung cấp quyền truy cập chỉ đọc cho người tiêu dùng: người dùng có thể tương tác với dữ liệu báo cáo nhưng không thể sửa đổi nội dung hoặc bố cục báo cáo của ứng dụng. RLS áp dụng cho những người tiêu dùng như vậy, hạn chế dữ liệu hiển thị của từng người quản lý nhân sự ở các hàng được phép cho khu vực bán hàng của người quản lý đó. Các vai trò Thành viên, Cộng tác viên và Quản trị viên trong Workspace cung cấp khả năng chỉnh sửa và bỏ qua RLS.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 208",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/208-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-209",
    "questionNumber": 209,
    "text": "You have a Fabric workspace that contains the items shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783742666168-t3rfbuam.png)  \n  \nYou need to make content available to the management department and the accounting department at your company. The solution must meet the following requirements:  \n  \n- The management department must have view access to the Headcount and Department Expenses reports.  \n- The management department must **not** be able to view any other current or future reports.  \n- The management department must not be able to create new reports by using the semantic models.  \n- The accounting department must be able to view only the Company Expenses report.  \n- The accounting department must be able to create new reports by using the Expenses semantic model.  \n  \nThe solution must follow the principle of least privilege and minimize administrative effort.  \n  \nHow should you make the content available to the users in each department?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Ứng dụng Fabric/Power BI có thể sử dụng các đối tượng riêng biệt để chỉ cung cấp cho từng bộ phận nội dung báo cáo được chỉ định. Nội dung được thêm vào không gian làm việc sau này sẽ không tự động hiển thị trừ khi được đưa vào đối tượng ứng dụng có liên quan. Chỉ cấp quyền Xây dựng trên mô hình ngữ nghĩa Chi phí cho đối tượng kế toán và không cấp quyền đó cho ban quản lý. Workspace Viewer sẽ hiển thị tất cả nội dung của không gian làm việc, trong khi Xuất bản lên web là công khai.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783742666168-t3rfbuam.png",
    "sourceTitle": "Examcademy PL-300 Question 209",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/209-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-210",
    "questionNumber": 210,
    "text": "You have a Power BI report containing a table named Data1 with 10 million rows.  \n  \nData1 is used by the following visuals:  \n  \n- A card displaying the record count  \n- A bar chart displaying total transaction amount by territory  \n- A scatter plot with transaction amount and profit amount on the axes, with points colored by territory  \n  \nYou need to change the scatter plot so users can more easily recognize meaningful patterns. The solution must not affect the accuracy of the other visuals.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Add a count field of the transaction amount to the size bucket of the scatter plot."
      },
      {
        "key": "B",
        "text": "Add a trend line to the scatter plot."
      },
      {
        "key": "C",
        "text": "Enable high-density sampling on the scatter plot."
      },
      {
        "key": "D",
        "text": "Apply a row filter to the Data1 query in Power Query Editor."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Lấy mẫu mật độ cao được thiết kế cho biểu đồ phân tán Power BI với số lượng điểm dữ liệu lớn. Nó thể hiện dữ liệu cơ bản dày đặc hiệu quả hơn và giảm các điểm chồng chéo, giúp dễ nhìn thấy xu hướng và mô hình hơn. Cài đặt này áp dụng cho hình ảnh phân tán thay vì lọc bảng Data1, do đó, nó không thay đổi dữ liệu hoặc tập hợp được sử dụng bởi biểu đồ thẻ và biểu đồ thanh.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 210",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/210-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-211",
    "questionNumber": 211,
    "text": "You are designing the data model for a Power BI semantic model.  \n  \nYou have the following tables in the star schema.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1784206194488-wby7ck4b.png)  \n  \nWhich table is the fact table in the star schema, and which column in the Patient table is the surrogate key?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Bảng sự kiện ghi lại các sự kiện kinh doanh theo mức độ xác định của nó và bao gồm các khóa ngoại cho các thứ nguyên cộng với các giá trị có thể đo lường được. Kết quả Xét nghiệm có một hàng cho mỗi xét nghiệm được thực hiện, với các khóa ngày, xét nghiệm và bệnh nhân cũng như giá trị kết quả. Bệnh nhân là một thứ nguyên và khóa Bệnh nhân của nó là mã định danh hàng duy nhất được gán cho mô hình (khóa thay thế); ID nguồn bệnh nhân là mã định danh doanh nghiệp của hệ thống nguồn.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1784206194488-wby7ck4b.png",
    "sourceTitle": "Examcademy PL-300 Question 211",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/211-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-212",
    "questionNumber": 212,
    "text": "You have a table containing sales data with approximately 1,000 rows.  \n  \nYou need to identify outliers in the table. Which type of visualization should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "area chart"
      },
      {
        "key": "B",
        "text": "scatter plot"
      },
      {
        "key": "C",
        "text": "pie chart"
      },
      {
        "key": "D",
        "text": "donut chart"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Biểu đồ phân tán hiển thị các bản ghi bán hàng riêng lẻ dưới dạng các điểm riêng biệt, giúp cho các quan sát nằm xa cụm chính hoặc xu hướng dự kiến ​​dễ dàng được phát hiện dưới dạng các điểm ngoại lệ.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 212",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/212-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-213",
    "questionNumber": 213,
    "text": "You are creating a data model for a Power BI report.  \n  \nYou have data formatted as shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730630446-86jvkwyo.jpg)  \n  \nYou need to create a clustered bar chart as shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730632918-2nc8h5r5.jpg)  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From Power Query Editor, split the Machine-User column by using a delimiter."
      },
      {
        "key": "B",
        "text": "From Power Query Editor, create a column that contains the last three digits of the Machine-User column."
      },
      {
        "key": "C",
        "text": "In a DAX function, create two calculated columns named Machine and User by using the SUBSTITUTE function."
      },
      {
        "key": "D",
        "text": "In a DAX function, create two measures named Machine and User by using the SUBSTITUTE function."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Biểu đồ thanh được nhóm cần có các trường phân loại riêng biệt cho Máy và Người dùng, với giá trị DownloadMB. Việc tách cột Người dùng máy được phân tách bằng dấu gạch nối trong Power Query sẽ tạo ra các cột Máy và Người dùng riêng biệt có thể được gán cho trục biểu đồ và chú giải. Power Query hỗ trợ tách cột đã chọn thành các cột bằng dấu phân cách.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783730630446-86jvkwyo.jpg",
    "sourceTitle": "Examcademy PL-300 Question 213",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/213-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-214",
    "questionNumber": 214,
    "text": "You plan to create a Power BI report that connects to multiple data sources. One of those sources contains tax records.  \n  \nYou need to ensure that other queries cannot access the tax-record information.  \n  \nTo what should you set the data source's Privacy Level?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "None"
      },
      {
        "key": "B",
        "text": "Organizational"
      },
      {
        "key": "C",
        "text": "Private"
      },
      {
        "key": "D",
        "text": "Public"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Mức độ riêng tư **Riêng tư** dành cho dữ liệu nhạy cảm hoặc bí mật và cung cấp sự cách ly nghiêm ngặt nhất. Dữ liệu từ nguồn riêng tư không thể được chia sẻ với các nguồn dữ liệu khác, ngăn cản việc truy cập thông tin hồ sơ thuế thông qua các truy vấn khác.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 214",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/214-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-215",
    "questionNumber": 215,
    "text": "You have a report containing a card visualization.  \n  \nYou need to apply the following conditional formatting to the card while minimizing design effort:  \n  \n- For values greater than or equal to 100, the data-label font must be dark red.  \n- For values less than 100, the data-label font must be dark gray.  \n  \nWhich format type should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Color scale"
      },
      {
        "key": "B",
        "text": "Rules"
      },
      {
        "key": "C",
        "text": "Field value"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Định dạng có điều kiện dựa trên quy tắc sẽ gán các màu cụ thể cho các phạm vi giá trị riêng biệt. Hai quy tắc có thể đặt phông chữ nhãn dữ liệu thành màu đỏ đậm cho các giá trị lớn hơn hoặc bằng 100 và màu xám đậm cho các giá trị dưới 100 mà không cần tạo trường riêng biệt trả về giá trị màu.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 215",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/215-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-216",
    "questionNumber": 216,
    "text": "You import a Power BI dataset containing these tables:  \n  \n- Date  \n- Product  \n- Product Inventory  \n  \nThe Product Inventory table has 25 million rows. A sample of the data is shown below.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783729790649-fallvvg5.png)  \n  \nThe Product Inventory table is related to the Date table by the DateKey column. The Product Inventory table is related to the Product table by the ProductKey column.  \n  \nYou need to reduce the data model size without losing information.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Change Summarization for DateKey to Don't Summarize."
      },
      {
        "key": "B",
        "text": "Remove the relationship between Date and Product Inventory"
      },
      {
        "key": "C",
        "text": "Change the data type of UnitCost to Integer."
      },
      {
        "key": "D",
        "text": "Remove MovementDate."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "MovementDate trùng lặp ngày được đại diện bởi DateKey. Vì DateKey vẫn còn trong bảng dữ kiện và liên kết nó với bảng Date nên ngày đầy đủ vẫn có sẵn thông qua thứ nguyên đó. Loại bỏ cột MovementDate dư thừa giúp giảm dung lượng lưu trữ mô hình mà không làm mất thông tin; việc xóa cột phục vụ mục đích báo cáo hoặc cấu trúc mô hình no là một kỹ thuật giảm dữ liệu được đề xuất.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783729790649-fallvvg5.png",
    "sourceTitle": "Examcademy PL-300 Question 216",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/216-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-217",
    "questionNumber": 217,
    "text": "You have the Performance analyzer results shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783742667210-eiffgcwl.png)  \n  \nBased on the information in the graphic, use the drop-down menus to complete each statement.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Tổng thời lượng xác định hình ảnh chậm nhất: % người dùng hoạt động tháng 8 năm 2024 mất 474 mili giây, tổng thời lượng lớn nhất được hiển thị. 286 ms Thời gian khác của nó cũng là lớn nhất nên nó dành thời gian chờ đợi các hình ảnh khác lâu nhất.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783742667210-eiffgcwl.png",
    "sourceTitle": "Examcademy PL-300 Question 217",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/217-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-218",
    "questionNumber": 218,
    "text": "You have a Microsoft Power BI report. The PBIX file is 550 MB, and the report is accessed through an App workspace in the shared capacity of powerbi.com.  \n  \nThe report uses an imported dataset containing one fact table. The fact table has 12 million rows. The dataset is scheduled to refresh twice daily, at 08:00 and 17:00.  \n  \nThe report has a single page containing 15 AppSource visuals and 10 default visuals.  \n  \nUsers report that the visuals load slowly when they access and interact with the report.  \n  \nYou need to recommend a solution that improves report performance.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Implement row-level security (RLS)."
      },
      {
        "key": "B",
        "text": "Remove unused columns from tables in the data model."
      },
      {
        "key": "C",
        "text": "Replace the default visuals with AppSource visuals."
      },
      {
        "key": "D",
        "text": "Enable visual interactions."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Việc xóa các cột không sử dụng sẽ giảm kích thước và dung lượng bộ nhớ của mô hình đã nhập, giúp cải thiện hiệu quả truy vấn và hiển thị trực quan cho một bảng dữ kiện lớn. Microsoft khuyên bạn chỉ nên giữ lại các cột cần thiết cho cấu trúc mô hình hoặc báo cáo trong mô hình nhập.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 218",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/218-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-219",
    "questionNumber": 219,
    "text": "You have a Power BI model containing several tables, each with multiple columns.  \n  \nYou determine that some columns are redundant and **not** needed for reporting.  \n  \nYou need to remove the redundant columns. The solution must meet these requirements:  \n  \n- Ensure the model remains usable for reporting.  \n- Minimize administrative effort.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From the Data pane, select the redundant columns, and then select Delete from model."
      },
      {
        "key": "B",
        "text": "From the Model pane, right-click the tables that contain the redundant columns, and then select Hide in report view."
      },
      {
        "key": "C",
        "text": "From Power Query Editor, remove the redundant columns."
      },
      {
        "key": "D",
        "text": "From the Data pane, select the redundant columns, and then select Hide in report view."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Việc xóa các trường thừa trực tiếp khỏi mô hình sẽ loại bỏ các cột không cần thiết trong khi vẫn duy trì khả năng sử dụng của báo cáo khi các trường đó không được báo cáo hoặc các phần phụ thuộc mô hình khác sử dụng. Đây là hành động dọn dẹp mô hình tốn ít công sức hơn so với việc mở và sửa đổi chuyển đổi Power Query của mỗi bảng. Việc ẩn các trường không loại bỏ chúng khỏi mô hình.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 219",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/219-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-220",
    "questionNumber": 220,
    "text": "Solution: In Power Query Editor, you rename the date query to **Due Date**. You reference the **Due Date** query twice to create the queries for **Order Date** and **Delivery Date**.  \n  \nDoes this satisfy the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Các bảng ngày riêng biệt cho từng thứ nguyên ngày nhập vai cho phép bảng bán hàng có mối quan hệ tích cực cho Ngày đến hạn, Ngày đặt hàng và Ngày giao hàng. Điều này hỗ trợ phân tích theo thời gian bằng cách sử dụng khóa ngoại theo từng ngày mà không dựa vào các mối quan hệ không hoạt động và các biện pháp chuyên biệt.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 220",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/220-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-221",
    "questionNumber": 221,
    "text": "Solution: Create measures that use the `USERELATIONSHIP` DAX function to filter sales through the active relationship between the sales table and the date table.  \n  \nDoes this meet the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Một mô hình có nhiều khóa ngoại ngày yêu cầu một mối quan hệ ngày hoạt động và các mối quan hệ không hoạt động cho các cột ngày khác. Các biện pháp phải sử dụng `USERELATIONSHIP` để áp dụng mối quan hệ không hoạt động có liên quan trong quá trình tính toán; chỉ sử dụng mối quan hệ hiện hoạt sẽ không cung cấp khả năng phân tích thời gian theo tất cả các khóa ngày.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 221",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/221-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-222",
    "questionNumber": 222,
    "text": "Solution: For every date foreign key, add an inactive relationship between the sales table and the date table.  \n  \nDoes this achieve the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Theo mặc định, các mối quan hệ Power BI không hoạt động không truyền bá các bộ lọc. Họ chỉ có thể hỗ trợ vai trò ngày khi phép tính DAX có liên quan kích hoạt rõ ràng mối quan hệ với `USERELATIONSHIP`; việc chỉ tạo các mối quan hệ không hoạt động cho cả ba khóa ngoại ngày không cho phép thực hiện phân tích cần thiết. Microsoft khuyên bạn nên sao chép các bảng thứ nguyên nhập vai khi cần có mối quan hệ tích cực.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 222",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/222-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-223",
    "questionNumber": 223,
    "text": "Solution: In the Fields pane, rename the date table to **Due Date**. Use a DAX expression to create **Order Date** and **Delivery Date** as calculated tables.  \n  \nDoes this satisfy the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Các bản sao của bảng được tính toán có thể được sử dụng cho các thứ nguyên ngày nhập vai, nhưng mỗi bản sao cũng phải có mối quan hệ tích cực với khóa ngoại Ngày bán hàng tương ứng của nó. Chỉ tạo và đổi tên các bảng không thiết lập được các mối quan hệ đó, do đó doanh số bán hàng không thể được phân tích theo cả ba vai trò ngày.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 223",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/223-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-224",
    "questionNumber": 224,
    "text": "Solution: In the Fields pane, rename the date table to **Due Date**. Use a DAX expression to create **Order Date** and **Delivery Date** as calculated tables. Create active relationships between the sales table and each date table.  \n  \nDoes this satisfy the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Các bảng thứ nguyên ngày nhập vai riêng biệt cho phép mỗi khóa ngoại Ngày bán hàng có mối quan hệ hoạt động riêng. Điều này hỗ trợ lọc và phân tích đồng thời theo ngày đến hạn, ngày đặt hàng và ngày giao hàng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 224",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/224-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-225",
    "questionNumber": 225,
    "text": "Solution: You create measures that use the USERELATIONSHIP DAX function to filter sales on the inactive relationship between the sales table and the date table.  \n  \nDoes this meet the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Hàm USERELATIONSHIP kích hoạt mối quan hệ không hoạt động trong phạm vi của thước đo DAX, cho phép thước đo đó sử dụng các đường dẫn mối quan hệ khác nhau mà không thay đổi cấu trúc mối quan hệ đang hoạt động của mô hình. Đây là giải pháp tiêu chuẩn cho kích thước nhập vai.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 225",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/225-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-226",
    "questionNumber": 226,
    "text": "Solution: From the Fields pane, you rename the date table as Due Date. You use a DAX expression to create Order Date and Delivery Date as calculated tables. You create active relationships between the sales table and each date table.  \n  \nDoes this meet the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Giới hạn mối quan hệ hoạt động đơn lẻ của Power BI áp dụng cho một cặp bảng nhất định, không áp dụng cho toàn bộ bảng thực tế. Bằng cách đổi tên bảng ngày ban đầu thành Ngày đến hạn và sử dụng DAX để tạo hai bản sao bảng được tính toán bổ sung cho Ngày đặt hàng và Ngày giao hàng, bảng doanh số hiện liên quan đến ba bảng riêng biệt, do đó mối quan hệ hiện hoạt với mỗi bảng là hoàn toàn hợp lệ. Mẫu bảng ngày trùng lặp này là cách tiêu chuẩn để cho phép lọc đồng thời, độc lập theo cả ba vai trò ngày mà không cần QUYỀN SỬ DỤNG, nhờ đó giải pháp đáp ứng được mục tiêu.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 226",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/226-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-227",
    "questionNumber": 227,
    "text": "You create a data model in Power BI. Report developers and users say that the data model is too complex. The model contains the following tables.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730145100-sjla017q.png)  \n  \nThe model has these relationships:  \n  \n- There is a one-to-one relationship between Sales_Region and Region_Manager.  \n- Manager has more records than Region_Manager, but every Region_Manager record has a corresponding Manager record.  \n- Sales_Manager has more records than Sales_Region, but every Sales_Region record has a corresponding Sales_Manager record.  \n  \nYou need to denormalize the model into a single table. Only managers associated with a sales region must be included in reports.  \n  \nWhich three actions should you perform in sequence? Arrange the appropriate actions in the correct order.  \n  \nMore than one order of answer choices is correct; any correct order receives credit.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "step1",
        "text": "Step 1",
        "correctAnswer": "A"
      },
      {
        "id": "step2",
        "text": "Step 2",
        "correctAnswer": "C"
      },
      {
        "id": "step3",
        "text": "Step 3",
        "correctAnswer": "F"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Merge [Region_Manager] and [Manager] by using an inner join."
      },
      {
        "key": "B",
        "text": "Merge [Sales_Manager] and [Sales_Region] by using a left join."
      },
      {
        "key": "C",
        "text": "Merge [Sales_Region] and [Sales_Manager] by using an inner join."
      },
      {
        "key": "D",
        "text": "Merge [Sales_Region] and [Sales_Manager] by using an inner join as a new query named [Sales_Region_and_Manager]."
      },
      {
        "key": "E",
        "text": "Merge [Sales_Region] and [Region_Manager] by using a right join as a new query named [Sales_Region_and_Region_Manager]."
      },
      {
        "key": "F",
        "text": "Merge [Sales_Region] and [Region_Manager] by using an inner join."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Merge [Region_Manager] and [Manager] by using an inner join."
      },
      {
        "key": "B",
        "text": "Merge [Sales_Manager] and [Sales_Region] by using a left join."
      },
      {
        "key": "C",
        "text": "Merge [Sales_Region] and [Sales_Manager] by using an inner join."
      },
      {
        "key": "D",
        "text": "Merge [Sales_Region] and [Sales_Manager] by using an inner join as a new query named [Sales_Region_and_Manager]."
      },
      {
        "key": "E",
        "text": "Merge [Sales_Region] and [Region_Manager] by using a right join as a new query named [Sales_Region_and_Region_Manager]."
      },
      {
        "key": "F",
        "text": "Merge [Sales_Region] and [Region_Manager] by using an inner join."
      }
    ],
    "correctAnswers": [
      "step1=A",
      "step2=C",
      "step3=F"
    ],
    "explanation": "Phép nối bên trong chỉ giữ lại các hàng trùng khớp trong cả hai bảng. Việc kết hợp Region_Manager với Người quản lý sẽ loại trừ các bản ghi chỉ dành cho Người quản lý, việc kết nối Sales_Region với Sales_Manager không bao gồm các bản ghi chỉ dành cho Sales_Manager và việc kết nối Sales_Region với Region_Manager chỉ giữ lại các bản ghi liên quan của người quản lý khu vực. Việc mở rộng các cột đã hợp nhất sẽ tạo ra một bảng báo cáo phẳng chỉ chứa những người quản lý được liên kết với một khu vực bán hàng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783730145100-sjla017q.png",
    "sourceTitle": "Examcademy PL-300 Question 227",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/227-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.457Z"
  },
  {
    "id": "pl300-228",
    "questionNumber": 228,
    "text": "You have a CSV file containing user complaints. It includes a column named `Logged`. `Logged` contains the date and time when each complaint occurred. The data in `Logged` uses the following format: `2018-12-31 at 08:59`.  \n  \nYou need to analyze complaints by their logged date and use a built-in date hierarchy.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Apply a transformation to extract the last 11 characters of the Logged column and set the data type of the new column to Date."
      },
      {
        "key": "B",
        "text": "Change the data type of the Logged column to Date."
      },
      {
        "key": "C",
        "text": "Split the Logged column by using at as the delimiter."
      },
      {
        "key": "D",
        "text": "Apply a transformation to extract the first 11 characters of the Logged column."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Việc tách cột Đã ghi theo 'tại' làm dấu phân cách sẽ tách ngày ('31-12-2018') với thời gian ('08:59') thành các cột riêng biệt. Sau khi phân tách, bạn có thể đặt kiểu dữ liệu của cột ngày thành Ngày, điều này cho phép phân cấp ngày tự động tích hợp sẵn của Power BI. Cách tiếp cận này xử lý rõ ràng định dạng ngày không chuẩn.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 228",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/228-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-229",
    "questionNumber": 229,
    "text": "You have two Power BI workspaces, WorkspaceA and WorkspaceB. WorkspaceA includes two datasets: Sales and HR.  \n  \nYou must give User1 access that meets these requirements:  \n  \n- Create reports using the HR dataset.  \n- Publish those reports to WorkspaceB.  \n- Do not allow modification of the HR dataset.  \n- Do not allow adding users to workspaces.  \n  \nWhat actions should you take?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Quyền xây dựng cho phép người dùng tạo báo cáo mới dựa trên mô hình/tập dữ liệu ngữ nghĩa nhân sự mà không cần cấp quyền ghi để sửa đổi nó. Vai trò không gian làm việc của Người đóng góp cho phép người dùng tạo và xuất bản nội dung trong WorkspaceB, nhưng không cho phép người dùng thêm người dùng không gian làm việc; quản lý quyền truy cập không gian làm việc yêu cầu Quản trị viên, trong khi Thành viên có thể thêm người dùng có quyền thấp hơn.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 229",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/229-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-230",
    "questionNumber": 230,
    "text": "You are building a Power BI report to analyze consumer purchasing patterns from a table named `Transactions`. The `Transactions` table includes a numeric field named `Spend`.  \n  \nYou need to add a visual that identifies the fields with the greatest influence on `Spend`.  \n  \nWhich visual type should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Q&A"
      },
      {
        "key": "B",
        "text": "smart narrative"
      },
      {
        "key": "C",
        "text": "decomposition tree"
      },
      {
        "key": "D",
        "text": "key influencers"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Hình ảnh trực quan của Người có ảnh hưởng chính sẽ phân tích một kết quả đã chọn và xác định các trường có tác động mạnh nhất đến kết quả đó. Nó phù hợp để xác định yếu tố nào ảnh hưởng nhiều nhất đến giá trị số `Spend`.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 230",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/230-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-231",
    "questionNumber": 231,
    "text": "You are creating a Power BI report that will show the number of current employees over time. The report will use Import storage mode for all tables.  \n  \nEmployment data will be imported monthly from Azure SQL Database and stored in a table named `Headcount`. The table will contain:  \n  \n- One row per employee for every month that the employee is employed.  \n- In each row, a date key showing the first day of the month for each snapshot.  \n  \nYou have a related date table containing dates for the years 2020 through 2030.  \n  \nYou need to create a semi-additive DAX measure that returns the employee count for the last available date in a year, quarter, or month. Complete the measure.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "`COUNTROWS('Headcount')` đếm từng hàng cho mỗi nhân viên trong ảnh chụp nhanh hàng tháng đã chọn. `LASTDATE('Headcount'[DateKey])` chọn ngày gần đây nhất với dữ liệu ảnh chụp nhanh trong giai đoạn hiện tại; ngày cuối cùng trong bảng Ngày có thể là một ngày với các hàng ảnh chụp nhanh no.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 231",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/231-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-232",
    "questionNumber": 232,
    "text": "You need to design the data model and relationships for the **Customer Details** worksheet and the **Orders** table in Power BI so the solution meets the report requirements.  \n  \nFor each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "A relationship must be created between the CustomerID column in the Customer Details worksheet and the CustomerID column in the Orders table.",
        "correctAnswer": "No"
      },
      {
        "id": "2",
        "text": "The Data Type of the columns in the relationship between the Customer Details worksheet and the Orders table must be set to Text.",
        "correctAnswer": "Yes"
      },
      {
        "id": "3",
        "text": "The Region field used to filter the Top Customers report must come from the Orders table.",
        "correctAnswer": "No"
      }
    ],
    "options": [
      {
        "key": "Yes",
        "text": "Yes"
      },
      {
        "key": "No",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "1:No",
      "2:Yes",
      "3:No"
    ],
    "explanation": "Chi tiết khách hàng chứa thông tin thanh toán của khách hàng, được xác định bằng ID khách hàng dạng số cùng với cột CustomerCRMID dựa trên văn bản riêng biệt, trong khi Đơn đặt hàng chứa thông tin vận chuyển được khóa bởi ID khách hàng dựa trên văn bản (ví dụ: \"VINET\"). Vì hai cột CustomerID sử dụng các loại dữ liệu khác nhau và thể hiện các mã định danh khác nhau nên mọi mối quan hệ giữa các bảng đều phải được xây dựng trên các cột văn bản trùng khớp (CustomerCRMID và Order.CustomerID), do đó, cả hai bên của mối quan hệ đó phải được đặt thành loại dữ liệu Văn bản — không phải là mối quan hệ trực tiếp trên hai cột CustomerID như hiện tại. Vì Khu vực cần cho báo cáo Khách hàng hàng đầu đã tồn tại trong bảng tính Chi tiết khách hàng nên khu vực này không cần phải đến từ bảng Đơn hàng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 232",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/232-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-233",
    "questionNumber": 233,
    "text": "You have a Power BI report containing the visual shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783742370262-r48m00xv.png)  \n  \nYou plan to modify the visual by changing the column spacing and adding percent-change labels, as shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783742376408-kumutnlq.png)  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Cài đặt chồng chéo của Power BI đặt các cột được nhóm lên nhau thay vì cạnh nhau. Việc áp dụng nhãn dữ liệu cho chuỗi Plan sẽ chỉ thêm nhãn cho chuỗi đó, tránh gắn nhãn trên cả hai chuỗi.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783742370262-r48m00xv.png",
    "sourceTitle": "Examcademy PL-300 Question 233",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/233-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-234",
    "questionNumber": 234,
    "text": "You have a Microsoft Power BI data model containing three tables named Orders, Date, and City. There is a one-to-many relationship from Date to Orders and from City to Orders.  \n  \nThe model has two row-level security (RLS) roles named Role1 and Role2. Role1 contains this filter:  \n  \n`City[State Province] = \"Kentucky\"`  \n  \nRole2 contains this filter:  \n  \n`Date[Calendar Year] = 2020 -`  \n  \nIf a user belongs to both Role1 and Role2, which data will they see in a report that uses the model?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "The user will see data for which the State Province value is Kentucky or where the Calendar Year is 2020."
      },
      {
        "key": "B",
        "text": "The user will receive an error and will not be able to see the data in the report."
      },
      {
        "key": "C",
        "text": "The user will only see data for which the State Province value is Kentucky."
      },
      {
        "key": "D",
        "text": "The user will only see data for which the State Province value is Kentucky and the Calendar Year is 2020."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Bộ lọc RLS Power BI là phần bổ sung dành cho người dùng được gán cho nhiều vai trò. Khả năng hiển thị kết quả là sự kết hợp của các hàng được mỗi vai trò cho phép, do đó người dùng có thể xem dữ liệu trong đó Tỉnh bang là Kentucky hoặc Năm dương lịch là 2020.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 234",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/234-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-235",
    "questionNumber": 235,
    "text": "You receive revenue data that must be included in Microsoft Power BI reports.  \n  \nYou preview data from a Microsoft Excel source in Power Query as shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783729995230-up0pi6oy.jpg)  \n  \nYou plan to create several visuals from the data, including one that displays revenue split by year and product.  \n  \nYou need to transform the data so that you can build the visuals. The solution must ensure that column names are appropriate for the data they contain.  \n  \nWhich three actions should you perform, in sequence?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "step1",
        "text": "Slot 1:",
        "correctAnswer": "B"
      },
      {
        "id": "step2",
        "text": "Slot 2:",
        "correctAnswer": "C"
      },
      {
        "id": "step3",
        "text": "Slot 3:",
        "correctAnswer": "D"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Select Department and Product and Unpivot Columns."
      },
      {
        "key": "B",
        "text": "Select Use First Row as Headers."
      },
      {
        "key": "C",
        "text": "Select Department and Product and Unpivot Other Columns."
      },
      {
        "key": "D",
        "text": "Rename the Attribute column to Year and the Value column to Revenue."
      },
      {
        "key": "E",
        "text": "Select Use Header as First Row."
      },
      {
        "key": "F",
        "text": "Rename the Attribute column to Revenue and the Value column to Year."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Select Department and Product and Unpivot Columns."
      },
      {
        "key": "B",
        "text": "Select Use First Row as Headers."
      },
      {
        "key": "C",
        "text": "Select Department and Product and Unpivot Other Columns."
      },
      {
        "key": "D",
        "text": "Rename the Attribute column to Year and the Value column to Revenue."
      },
      {
        "key": "E",
        "text": "Select Use Header as First Row."
      },
      {
        "key": "F",
        "text": "Rename the Attribute column to Revenue and the Value column to Year."
      }
    ],
    "correctAnswers": [
      "step1=B",
      "step2=C",
      "step3=D"
    ],
    "explanation": "Việc thăng cấp hàng đầu tiên làm cho Bộ phận, Sản phẩm và năm trở thành giá trị của các tiêu đề cột. Việc hủy xoay vòng tất cả các cột ngoại trừ Bộ phận và Sản phẩm sẽ chuyển đổi các cột năm rộng thành Thuộc tính (năm) và Giá trị (doanh thu); việc đổi tên các trường đó thành Năm và Doanh thu sẽ làm cho kết quả phù hợp với báo cáo năm và sản phẩm.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783729995230-up0pi6oy.jpg",
    "sourceTitle": "Examcademy PL-300 Question 235",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/235-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-236",
    "questionNumber": 236,
    "text": "In Power BI Desktop, you publish a new dataset and report to a Power BI workspace. The dataset includes a row-level security (RLS) role named HR.  \n  \nYou need to make sure RLS is applied to HR team members when they view reports that use the dataset.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From powerbi.com, add users to the HR role for the dataset."
      },
      {
        "key": "B",
        "text": "From powerbi.com, share the dataset to the HR team members."
      },
      {
        "key": "C",
        "text": "From Power BI Desktop, change the Row-Level Security settings."
      },
      {
        "key": "D",
        "text": "From Power BI Desktop, import a table that contains the HR team members."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Power BI Desktop xuất bản vai trò RLS đã xác định cùng với tập dữ liệu, trong khi dịch vụ Power BI được sử dụng để gán người dùng hoặc nhóm được hỗ trợ cho vai trò đó. Việc chỉ định các thành viên nhóm nhân sự cho vai trò nhân sự sẽ thực thi các bộ lọc hàng của vai trò đó đối với người xem báo cáo đủ điều kiện.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 236",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/236-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-237",
    "questionNumber": 237,
    "text": "What is the minimum number of Power BI datasets required to support the reports?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a single imported dataset"
      },
      {
        "key": "B",
        "text": "two imported datasets"
      },
      {
        "key": "C",
        "text": "two DirectQuery datasets"
      },
      {
        "key": "D",
        "text": "a single DirectQuery dataset"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Hai mô hình ngữ nghĩa đã nhập cho phép áp dụng có chọn lọc Quyền xây dựng—cấp quyền đó cho tập dữ liệu lãi lỗ trong khi từ chối quyền đó cho dữ liệu bảng cân đối kế toán. Làm mới theo lịch trình hỗ trợ yêu cầu cập nhật hàng ngày, do đó không cần phải có DirectQuery.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 237",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/237-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-238",
    "questionNumber": 238,
    "text": "You have a Fabric workspace named Workspace1 that contains two Power BI reports, Report1 and Report2.  \n  \nYou create a workspace app that includes both reports.  \n  \nYou need to ensure that the app meets these requirements:  \n  \n- Report1 must be visible to every user in your organization.  \n- Report2 must be visible only to a security group named Group1.  \n  \nWhat should you do next?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Assign Group1 the Viewer role for Workspace1."
      },
      {
        "key": "B",
        "text": "Create an audience and assign Group1 to the audience."
      },
      {
        "key": "C",
        "text": "Allow access to the hidden content of the app."
      },
      {
        "key": "D",
        "text": "Share Report1 with the built-in All users security group."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Đối tượng ứng dụng Power BI cho phép khả năng hiển thị và quyền truy cập nội dung được định cấu hình độc lập cho những người dùng hoặc nhóm khác nhau. Đối tượng được chỉ định cho Nhóm1 có thể được đặt cấu hình để chỉ hiển thị Báo cáo 2 cho nhóm đó, trong khi đối tượng trên toàn tổ chức hiển thị Báo cáo1. Quyền truy cập của Workspace Viewer sẽ cấp cho Group1 quyền truy cập vào nội dung của không gian làm việc thay vì thực thi khả năng hiển thị nội dung của ứng dụng cho mỗi đối tượng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 238",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/238-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-239",
    "questionNumber": 239,
    "text": "You have a dashboard containing tiles pinned from one report, as displayed in the Original Dashboard exhibit. (Click the Original Dashboard tab.)  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783731104592-r9ir3pje.jpg)  \n  \nYou need to change the dashboard so that it appears as shown in the Modified Dashboard exhibit. (Click the Modified Dashboard tab.)  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783731108473-wzrncnw2.jpg)  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Change the report theme."
      },
      {
        "key": "B",
        "text": "Change the dashboard theme."
      },
      {
        "key": "C",
        "text": "Edit the details of each tile."
      },
      {
        "key": "D",
        "text": "Create a custom CSS file."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Chủ đề trang tổng quan Power BI áp dụng chủ đề màu nhất quán cho toàn bộ trang tổng quan, bao gồm cả các ô và hình ảnh trực quan của nó. Nó có thể thay đổi trang tổng quan từ kiểu sáng mặc định sang kiểu tối mà không cần sửa đổi từng ô hoặc thay đổi chủ đề báo cáo nguồn.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783731104592-r9ir3pje.jpg",
    "sourceTitle": "Examcademy PL-300 Question 239",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/239-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-240",
    "questionNumber": 240,
    "text": "You have a dataset that is rarely used and refreshes every hour.  \n  \nYou receive a notification that its refresh was disabled because of inactivity.  \n  \nWhich two actions will cause the scheduled refresh schedule to resume? Each correct answer provides a complete solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Enable query caching for the dataset."
      },
      {
        "key": "B",
        "text": "Import the dataset to Microsoft Excel."
      },
      {
        "key": "C",
        "text": "From the Power BI service, open a dashboard that uses the dataset."
      },
      {
        "key": "D",
        "text": "From the Power BI service, open a report that uses the dataset."
      },
      {
        "key": "E",
        "text": "From PowerShell, run the get-powerbireport cmdlet."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Power BI coi mô hình ngữ nghĩa là không hoạt động khi người dùng no đã truy cập trang tổng quan hoặc báo cáo được xây dựng trên đó. Việc xem bất kỳ trang tổng quan hoặc báo cáo nào sử dụng mô hình ngữ nghĩa sẽ đặt lại bộ đếm không hoạt động và cho phép tiếp tục làm mới theo lịch đã tạm dừng; lịch trình cũng có thể cần được kích hoạt lại nếu cần.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 240",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/240-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-241",
    "questionNumber": 241,
    "text": "You have a Power BI report that will be displayed on a vertical screen.  \n  \nYou need to maximize the portion of the screen area that the report uses.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From the Canvas background setting of Power BI Desktop, configure the Image fit setting."
      },
      {
        "key": "B",
        "text": "From the Canvas settings of Power BI Desktop, set a custom width and height."
      },
      {
        "key": "C",
        "text": "From Power BI Desktop, select Personalize visuals."
      },
      {
        "key": "D",
        "text": "From the Power BI service, enable the Pages pane."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Cài đặt Canvas Power BI kiểm soát tỷ lệ khung hình và kích thước pixel của khung vẽ báo cáo. Việc đặt chiều rộng và chiều cao tùy chỉnh cho phép canvas sử dụng kích thước hướng dọc phù hợp với màn hình dọc, giảm diện tích màn hình không sử dụng. [Microsoft Learn: Apply page display settings in a Power BI report](https://learn.microsoft.com/en-us/power-bi/create-reports/power-bi-report-display-settings)",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 241",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/241-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-242",
    "questionNumber": 242,
    "text": "In Power Query Editor, you try to run a query and receive the following error:  \n  \n`Datasource.Error: Could not find file.`  \n  \nWhich two conditions could cause this error? Each correct answer provides a complete solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "You do not have permissions to the file."
      },
      {
        "key": "B",
        "text": "An incorrect privacy level was used for the data source."
      },
      {
        "key": "C",
        "text": "The file is locked."
      },
      {
        "key": "D",
        "text": "The referenced file was moved to a new location."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Power Query xác định nguồn dữ liệu tệp bằng đường dẫn được cấu hình và yêu cầu thông tin xác thực hoặc quyền cho phép truy cập vào nguồn đó. Nếu quyền truy cập bị từ chối hoặc tệp no còn tồn tại ở đường dẫn được tham chiếu vì nó đã bị di chuyển, thì truy vấn không thể truy xuất tệp. Sự không tương thích ở cấp độ quyền riêng tư được Tường lửa bảo mật dữ liệu xử lý và khác với tình trạng không tìm thấy tệp.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 242",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/242-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-243",
    "questionNumber": 243,
    "text": "You have two Microsoft Excel workbooks stored in a Microsoft OneDrive folder.  \n  \nEach workbook includes a table named `Sales`, and both tables share the same data structure.  \n  \nYou plan to use Power BI to combine the two `Sales` tables into one table and build visuals from that table. The solution must allow you to publish the report and dataset separately.  \n  \nWhich storage mode should be used for the report file and the dataset file? Each mode may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "report_file",
        "text": "Report file:",
        "correctAnswer": "C"
      },
      {
        "id": "dataset_file",
        "text": "Dataset file:",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "DirectQuery"
      },
      {
        "key": "B",
        "text": "Import"
      },
      {
        "key": "C",
        "text": "LiveConnect"
      },
      {
        "key": "D",
        "text": "Push"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "DirectQuery"
      },
      {
        "key": "B",
        "text": "Import"
      },
      {
        "key": "C",
        "text": "LiveConnect"
      },
      {
        "key": "D",
        "text": "Push"
      }
    ],
    "correctAnswers": [
      "report_file=C",
      "dataset_file=B"
    ],
    "explanation": "Tập dữ liệu nên sử dụng Import mode để kết hợp và tải các bảng Bán hàng Excel vào mô hình ngữ nghĩa Power BI. Một báo cáo mỏng được xuất bản riêng biệt sử dụng kết nối trực tiếp với mô hình ngữ nghĩa được xuất bản đó, vì vậy nó sử dụng LiveConnect.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 243",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/243-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-244",
    "questionNumber": 244,
    "text": "You have a Power BI report with three pages named Page1, Page2, and Page3. Each page contains the same slicers.  \n  \nYou need to ensure that every filter applied on Page1 is applied to Page1 and Page3 only.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "On each page, modify the interactions of the slicer."
      },
      {
        "key": "B",
        "text": "Enable visibility of the slicers on Page1 and Page3. Disable visibility of the slicer on Page2."
      },
      {
        "key": "C",
        "text": "Sync the slicers on Page1 and Page3."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Việc đồng bộ hóa các bộ cắt trên Trang 1 và Trang 3 chỉ chia sẻ trạng thái bộ lọc của chúng giữa các trang báo cáo đã chọn. Trang2 bị loại trừ khỏi quá trình đồng bộ hóa nên không nhận được các bộ lọc bộ cắt đó.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 244",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/244-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-245",
    "questionNumber": 245,
    "text": "You have a table named Dim_Date with the following columns.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783745254247-l0na5ya4.png)  \n  \nThe Date column uses the Date data type.  \n  \nYou also have tables named Fact_Sales and Date with the following relationships.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783745257777-wze3pu2m.png)  \n  \nThe Fact_Sales table has a DateKey column that uses the Whole Number data type.  \n  \nYou create a measure named Sales that sums a column named Sales Amount in the Fact_Sales table.  \n  \nYou create a visual named Sales by Date that includes the Dim_Date Date field and the Sales measure.  \n  \nFor each statement, select **Yes** when it is true. Otherwise, select **No**.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "To use DAX time-intelligence functions in the Sales measure, the Dim_Date table must be a date table.",
        "correctAnswer": "Yes"
      },
      {
        "id": "2",
        "text": "To enable the use of the DateKey field in a time hierarchy, the Dim_Date table must be a date table.",
        "correctAnswer": "No"
      },
      {
        "id": "3",
        "text": "If you use the OrderDateKey column to relate the Fact_Sales and Dim_Date tables, the Dim_Date table must be a date table.",
        "correctAnswer": "No"
      }
    ],
    "options": [
      {
        "key": "Yes",
        "text": "Yes"
      },
      {
        "key": "No",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "1:Yes",
      "2:No",
      "3:No"
    ],
    "explanation": "Vì Fact_Sales liên quan đến bảng ngày thông qua các khóa thay thế số nguyên (DateKey) thay vì thông qua cột Ngày/DateTime, nên bạn phải đánh dấu Dim_Date làm bảng ngày để các hàm thông minh về thời gian DAX đánh giá chính xác (Yes). Việc đánh dấu bảng là bảng ngày không cho phép sử dụng trường DateKey số nguyên trong hệ thống phân cấp ngày/giờ — hệ thống phân cấp thời gian tự động chỉ được tạo cho các cột Ngày/Ngày giờ và việc đánh dấu bảng ngày thực sự loại bỏ hệ thống phân cấp ngày/giờ tự động tích hợp sẵn (No). Tạo mối quan hệ trên OrderDateKey không yêu cầu Dim_Date phải được đánh dấu là bảng ngày; mối quan hệ có thể được xây dựng trên bất kỳ cột tương thích nào bất kể trạng thái bảng ngày (No).",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783745254247-l0na5ya4.png",
    "sourceTitle": "Examcademy PL-300 Question 245",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/245-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-246",
    "questionNumber": 246,
    "text": "You publish a dataset to the Power BI service that contains a connection to an on-premises Microsoft SQL Server database.  \n  \nYou try to configure a scheduled refresh but cannot select the appropriate on-premises data gateway.  \n  \nYou confirm the following with the gateway administrator:  \n  \n- You have the appropriate permissions to use the gateway.  \n- The data source was created on the gateway.  \n- The gateway status is **Running**.  \n  \nWhat is the most likely reason that the gateway is unavailable?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "The type of data source is not supported by the on-premises data gateway."
      },
      {
        "key": "B",
        "text": "The server name in the PBIX file does not match the data source name in the gateway."
      },
      {
        "key": "C",
        "text": "The credentials for the data source are invalid."
      },
      {
        "key": "D",
        "text": "The data source is configured to use single sign-on (SSO)."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Đối với nguồn SQL Server tại chỗ, Power BI liên kết mô hình ngữ nghĩa đã xuất bản với nguồn dữ liệu cổng theo tên máy chủ và cơ sở dữ liệu của nó. Các mã định danh này phải khớp giữa tệp PBIX và cấu hình cổng; nếu không, cổng sẽ không được hiển thị là có sẵn để làm mới theo lịch trình, ngay cả khi người dùng được ủy quyền và cổng đang chạy.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 246",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/246-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-247",
    "questionNumber": 247,
    "text": "You have a Power BI dataset named Finance that is hosted in a Power BI workspace.  \n  \nThe finance team at your company is **not** currently assigned to any Power BI workspace roles.  \n  \nYou need to allow the finance team to use Microsoft Excel to analyze the Finance dataset.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Grant the finance team build permissions to the Finance dataset."
      },
      {
        "key": "B",
        "text": "Provide an Excel workbook that is connected to the Finance dataset."
      },
      {
        "key": "C",
        "text": "Create a row-level security (RLS) role and add the finance team to the role as members."
      },
      {
        "key": "D",
        "text": "Grant the finance team write permissions to the Finance dataset."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Quyền xây dựng cho phép người dùng tạo nội dung từ mô hình ngữ nghĩa Power BI, bao gồm cả việc phân tích nội dung đó trong Excel. Vì nhóm tài chính có vai trò không gian làm việc no sẽ cung cấp khả năng này nên hãy cấp quyền Xây dựng trực tiếp trên tập dữ liệu Tài chính. Không cần có quyền ghi và RLS kiểm soát quyền truy cập hàng thay vì cấp khả năng phân tích Excel.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 247",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/247-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-248",
    "questionNumber": 248,
    "text": "You are creating a Power BI report.  \n  \nUsers will access the report on their mobile devices. You need to configure the report so that it displays data according to each user's location.  \n  \nWhich two actions should you take? Each correct answer represents part of the solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From Power Query Editor, detect the data types of the relevant columns."
      },
      {
        "key": "B",
        "text": "In Data Category, set the geographic data category for the relevant columns."
      },
      {
        "key": "C",
        "text": "Create a hierarchy for columns of the geography data type."
      },
      {
        "key": "D",
        "text": "Use the columns of the geography data type in all visuals."
      },
      {
        "key": "E",
        "text": "For the relevant columns, set synonyms to match common geographical terms."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "Tính năng lọc địa lý trên thiết bị di động Power BI hoạt động khi các cột có liên quan được đánh dấu bằng danh mục dữ liệu địa lý thích hợp và hình ảnh trong báo cáo sử dụng các trường địa lý đó. Sau đó, ứng dụng dành cho thiết bị di động có thể khớp vị trí thiết bị với các giá trị trong cột địa lý được phân loại và lọc báo cáo.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 248",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/248-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-249",
    "questionNumber": 249,
    "text": "You use Power Query Editor to ingest data into Power BI Desktop.  \n  \nThe complete dataset contains 250,000 rows, all matching the format shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783742672295-8d7kpmhw.png)  \n  \nYou need to optimize the table's data-model size.  \n  \nWhich data type should you use for the **Value** column and the **Datetime** column?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Số nguyên phù hợp với các giá trị có thành phần phân số no. Ngày thích hợp khi mọi giá trị ngày/giờ đều có phần thời gian nửa đêm, vì chỉ ngày dương lịch mới có ý nghĩa. Tài liệu của Microsoft cho thấy toàn bộ số phù hợp để lưu trữ số nguyên và loại Ngày biểu thị ngày không có thành phần thời gian.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783742672295-8d7kpmhw.png",
    "sourceTitle": "Examcademy PL-300 Question 249",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/249-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-250",
    "questionNumber": 250,
    "text": "Your company employs people in 10 states.  \n  \nThe company recently chose to associate every state with one of the following three regions: East, West, and North.  \n  \nYou have a data model containing employee information by state. The model does **NOT** contain region information.  \n  \nYou have a report that displays employees by state.  \n  \nYou need to view employees by region as quickly as possible.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create a new aggregation that summarizes by state."
      },
      {
        "key": "B",
        "text": "Create a new aggregation that summarizes by employee."
      },
      {
        "key": "C",
        "text": "Create a new group on the state column and set the Group type to List."
      },
      {
        "key": "D",
        "text": "Create a new group on the state column and set the Group type to Bin."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Nhóm Danh sách cho phép kết hợp các giá trị trạng thái phân loại đã chọn thành các nhóm được đặt tên như Đông, Tây và Bắc, cho phép báo cáo hiển thị nhân viên theo nhóm khu vực mới mà không cần thêm dữ liệu khu vực vào mô hình. Việc tạo nhóm dành cho các trường số hoặc thời gian và không cung cấp ánh xạ thủ công giữa các trạng thái.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 250",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/250-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-251",
    "questionNumber": 251,
    "text": "You plan to create the Power BI model shown in the exhibit. ![Question Image](https://cdn.examcademy.com/images/questions/1783729791256-jw3c5tqy.jpg)  \n  \nThe data has these refresh requirements:  \n  \n- Customer must refresh daily.  \n- Date must refresh once every three years.  \n- Sales must refresh in near real time.  \n- SalesAggregate must refresh weekly.  \n  \nSelect storage modes for the tables that minimize visual load times and ensure model data is loaded according to the refresh requirements.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Bộ phận bán hàng sử dụng DirectQuery để cung cấp kết quả gần như thời gian thực. SalesAggregate được nhập và làm mới hàng tuần để các truy vấn tổng hợp có thể được cung cấp nhanh chóng từ bộ nhớ. Khách hàng và Ngày là các thứ nguyên được chia sẻ; Dual mode cho phép Power BI sử dụng dữ liệu đã nhập cho các truy vấn tổng hợp hoặc DirectQuery cho các truy vấn chi tiết, cải thiện hiệu suất hình ảnh đồng thời hỗ trợ lịch làm mới cần thiết.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783729791256-jw3c5tqy.jpg",
    "sourceTitle": "Examcademy PL-300 Question 251",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/251-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-252",
    "questionNumber": 252,
    "text": "You have a Power BI semantic model containing the two tables **Dim Location** and **Fact Deliveries**. Their relationships are configured as shown.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783742671040-8i7ec5om.png)  \n  \nThe model includes the following measure:  \n  \n`Deliveries = COUNTROWS(‘Fact Deliveries’)`  \n  \nCreate a new measure that counts deliveries by destination location.  \n  \nEach function can be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "function",
        "text": "Slot 1:",
        "correctAnswer": "B"
      },
      {
        "id": "relationship",
        "text": "Slot 2:",
        "correctAnswer": "C"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "ALLSELECTED"
      },
      {
        "key": "B",
        "text": "CALCULATE"
      },
      {
        "key": "C",
        "text": "USERELATIONSHIP"
      },
      {
        "key": "D",
        "text": "CALCULATETABLE"
      },
      {
        "key": "E",
        "text": "CROSSFILTER"
      },
      {
        "key": "F",
        "text": "KEEPFILTERS"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "ALLSELECTED"
      },
      {
        "key": "B",
        "text": "CALCULATE"
      },
      {
        "key": "C",
        "text": "USERELATIONSHIP"
      },
      {
        "key": "D",
        "text": "CALCULATETABLE"
      },
      {
        "key": "E",
        "text": "CROSSFILTER"
      },
      {
        "key": "F",
        "text": "KEEPFILTERS"
      }
    ],
    "correctAnswers": [
      "function=B",
      "relationship=C"
    ],
    "explanation": "CALCULATE đánh giá [Giao hàng] với bối cảnh bộ lọc được sửa đổi. QUYỀN NGƯỜI DÙNG kích hoạt mối quan hệ không hoạt động giữa Vị trí Dim[ID vị trí] và Phân phối thực tế[ID vị trí đích] cho phép tính đó, do đó, bộ lọc vị trí áp dụng cho các vị trí đích thay vì mối quan hệ vị trí ban đầu đang hoạt động.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783742671040-8i7ec5om.png",
    "sourceTitle": "Examcademy PL-300 Question 252",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/252-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-253",
    "questionNumber": 253,
    "text": "You must design the data model so that it satisfies the reporting requirements.  \n  \nWhat should you do in Power BI Desktop?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From Power Query, add a date table. Create an active relationship to the OrderDate column in the Orders table and an inactive relationship to the ShippedDate column in the Orders table."
      },
      {
        "key": "B",
        "text": "From Power Query, add columns to the Orders table to calculate the calendar quarter and the calendar month of the OrderDate column."
      },
      {
        "key": "C",
        "text": "From Power BI Desktop, use the Auto date/time option when creating the reports."
      },
      {
        "key": "D",
        "text": "From Power Query, use a DAX expression to add columns to the Orders table to calculate the calendar quarter of the OrderDate column, the calendar month of the OrderDate column, the calendar quarter of the ShippedDate column, and the calendar month of the ShippedDate column."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Bảng ngày chuyên dụng có thể liên quan đến bảng thực tế Đơn hàng theo vai trò ngày. Mối quan hệ OrderDate có thể hoạt động để lọc ngày mặc định, trong khi mối quan hệ ShippedDate có thể không hoạt động và được kích hoạt theo các biện pháp liên quan bằng cách sử dụng `USERELATIONSHIP`. Điều này hỗ trợ báo cáo dựa trên lịch cho cả ngày đặt hàng và ngày giao hàng mà không cần thêm các thuộc tính lịch lặp lại vào bảng dữ kiện.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 253",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/253-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-254",
    "questionNumber": 254,
    "text": "You use Power Query Editor to import and preview sales data for the years 2020 and 2021 from a Microsoft Excel file, as shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783735458084-bur46zb6.png)  \n  \nYou need to shape the query so that it displays these three columns:  \n  \n- Month  \n- Sales  \n- Year  \n  \nWhat should you select in Power Query Editor?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Merge columns"
      },
      {
        "key": "B",
        "text": "Transpose"
      },
      {
        "key": "C",
        "text": "Unpivot columns"
      },
      {
        "key": "D",
        "text": "Pivot column"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Việc không xoay vòng sẽ chuyển đổi các cột riêng biệt 2020 và 2021 thành các cặp giá trị thuộc tính trong khi vẫn giữ lại Tháng. Các giá trị thuộc tính trở thành cột Năm và các giá trị tương ứng trở thành cột Doanh số. [Microsoft Learn: Unpivot columns](https://learn.microsoft.com/en-us/power-query/unpivot-column)",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783735458084-bur46zb6.png",
    "sourceTitle": "Examcademy PL-300 Question 254",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/254-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-255",
    "questionNumber": 255,
    "text": "You need to create a relationship in the dataset for RLS.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Bảng Nhân viên Bán hàng đóng vai trò là bảng bảo mật/kích thước, trong khi Đơn hàng là bảng thực tế chứa các đơn hàng liên quan đến nhân viên. Một nhân viên bán hàng có thể có nhiều đơn hàng, vì vậy mối quan hệ bắt buộc là một-nhiều từ Nhân viên bán hàng đến Đơn hàng; sau đó bộ lọc RLS trên nhân viên bán hàng sẽ truyền tới đơn đặt hàng của nhân viên đó.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 255",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/255-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-256",
    "questionNumber": 256,
    "text": "You use Microsoft Power BI Desktop to preview a query in Power Query Editor. The query includes a column named Location Name.  \n  \nYou need to determine the maximum length of each value in the Location Name column without modifying the data.  \n  \nWhich actions should you perform in sequence? Each action may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "step1",
        "text": "Step 1:",
        "correctAnswer": "E"
      },
      {
        "id": "step3",
        "text": "Step 3:",
        "correctAnswer": "C"
      },
      {
        "id": "step4",
        "text": "Step 4:",
        "correctAnswer": "D"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "From the Transform tab, select Extract, and then select Length."
      },
      {
        "key": "B",
        "text": "From the View tab, select Column distribution."
      },
      {
        "key": "C",
        "text": "From the View tab, select Column profile."
      },
      {
        "key": "D",
        "text": "Group the value distribution by text length."
      },
      {
        "key": "E",
        "text": "Select the Location Name column."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "From the Transform tab, select Extract, and then select Length."
      },
      {
        "key": "B",
        "text": "From the View tab, select Column distribution."
      },
      {
        "key": "C",
        "text": "From the View tab, select Column profile."
      },
      {
        "key": "D",
        "text": "Group the value distribution by text length."
      },
      {
        "key": "E",
        "text": "Select the Location Name column."
      }
    ],
    "correctAnswers": [
      "step1=E",
      "step3=C",
      "step4=D"
    ],
    "explanation": "Việc chọn cột Tên vị trí trước tiên sẽ xác định phạm vi thống kê định hình cho cột đó. Sau khi định cấu hình được đặt thành toàn bộ tập dữ liệu (bước 2), hãy bật cấu hình Cột của tab Xem -- thay vì chỉ phân phối Cột -- sẽ hiển thị biểu đồ phân phối giá trị chi tiết và menu ngữ cảnh của nó cho phép bạn nhóm phân phối đó theo độ dài văn bản, hiển thị độ dài của giá trị dài nhất mà không cần thêm cột hoặc sửa đổi truy vấn, thao tác Trích xuất > Độ dài sẽ thực hiện.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 256",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/256-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-257",
    "questionNumber": 257,
    "text": "In Power BI Desktop, you are building visualizations in a report from an imported dataset.  \n  \nYou need to let Power BI users export the summarized data used to build the visualizations, while preventing them from exporting the underlying data.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From the Power BI service, configure the dataset permissions."
      },
      {
        "key": "B",
        "text": "From Power BI Desktop, configure the Data Load settings for the current file."
      },
      {
        "key": "C",
        "text": "From Power BI Desktop, modify the data source permissions."
      },
      {
        "key": "D",
        "text": "From Power BI Desktop, configure the Report settings for the current file."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Cài đặt Báo cáo trên máy tính để bàn Power BI bao gồm kiểm soát Xuất dữ liệu có thể cho phép người dùng chỉ xuất dữ liệu tóm tắt, đồng thời chặn xuất dữ liệu cơ bản từ hình ảnh báo cáo.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 257",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/257-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-258",
    "questionNumber": 258,
    "text": "You have a Power BI semantic model named Model1 that contains a single table named Sales. Sales contains the following columns.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783746018807-iioeyodm.png)  \n  \nYou need to let users select a customer and limit Model1 data to only that customer. The solution must meet these requirements:  \n  \n- The customer selection must affect all reports that connect to Model1.  \n- All valid customer names in the sales data must be available for users to select.  \n- Model1 will be refreshed on an ad-hoc basis and must show the latest sales data after every refresh completes.  \n  \nWhich three actions should you perform in sequence?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "1",
        "text": "Slot 1:",
        "correctAnswer": "C"
      },
      {
        "id": "2",
        "text": "Slot 2:",
        "correctAnswer": "D"
      },
      {
        "id": "3",
        "text": "Slot 3:",
        "correctAnswer": "E"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Create a parameter that uses a manually entered list of customers."
      },
      {
        "key": "B",
        "text": "Duplicate the query and create a distinct list."
      },
      {
        "key": "C",
        "text": "Create a query that outputs a list of unique customer names."
      },
      {
        "key": "D",
        "text": "Create a parameter that uses a list of unique customer names as an input query."
      },
      {
        "key": "E",
        "text": "In the query, apply a text filter to the Customer_Name column and make the filter equal to the value of the parameter."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Create a parameter that uses a manually entered list of customers."
      },
      {
        "key": "B",
        "text": "Duplicate the query and create a distinct list."
      },
      {
        "key": "C",
        "text": "Create a query that outputs a list of unique customer names."
      },
      {
        "key": "D",
        "text": "Create a parameter that uses a list of unique customer names as an input query."
      },
      {
        "key": "E",
        "text": "In the query, apply a text filter to the Customer_Name column and make the filter equal to the value of the parameter."
      }
    ],
    "correctAnswers": [
      "1=C",
      "2=D",
      "3=E"
    ],
    "explanation": "Truy vấn danh sách có thể cung cấp các giá trị được đề xuất cho tham số Power Query, giữ cho danh sách khách hàng có sẵn được căn chỉnh với dữ liệu bán hàng được làm mới. Việc lọc Doanh số trong đó Customer_Name bằng tham số đó sẽ hạn chế dữ liệu được tải vào mô hình ngữ nghĩa, do đó tất cả các báo cáo được kết nối với mô hình đều sử dụng cùng một dữ liệu đã lọc.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783746018807-iioeyodm.png",
    "sourceTitle": "Examcademy PL-300 Question 258",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/258-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-259",
    "questionNumber": 259,
    "text": "You have a Power BI report that contains the table shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783740526797-x0ldc4nn.png)  \n  \nThe table contains conditional formatting that shows which stores are above, near, or below the monthly quota for returns.  \n  \nYou need to ensure that the table is accessible to consumers of reports who have color vision deficiency.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Move the conditional formatting icons to a tooltip report."
      },
      {
        "key": "B",
        "text": "Add alt text that lists the values in the table."
      },
      {
        "key": "C",
        "text": "Change the icons to use a different shape for each color."
      },
      {
        "key": "D",
        "text": "Remove the icons and use red, yellow, and green background colors instead."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Đối với người dùng bị suy giảm thị lực màu sắc, việc chỉ dựa vào màu sắc để truyền tải thông tin là không hiệu quả. Các phương pháp hay nhất về khả năng truy cập yêu cầu tín hiệu trực quan không màu, chẳng hạn như hình dạng hoặc biểu tượng riêng biệt để thể hiện các trạng thái khác nhau. Việc thay đổi các biểu tượng để sử dụng các hình dạng khác nhau cho phép người dùng mù màu phân biệt giữa các cửa hàng trên, gần hoặc dưới hạn ngạch. Việc chuyển sang chú giải công cụ (A) hoặc thêm văn bản thay thế (B) không làm cho hình ảnh có thể truy cập được và màu cam thay vì màu đỏ (D) vẫn dựa vào khả năng phân biệt màu sắc.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783740526797-x0ldc4nn.png",
    "sourceTitle": "Examcademy PL-300 Question 259",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/259-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-260",
    "questionNumber": 260,
    "text": "You have five sales regions, with one salesperson assigned to each region.  \n  \nYou have an imported dataset with a dynamic row-level security (RLS) role named Sales. The Sales role filters sales transaction data by salesperson.  \n  \nSalespeople must be able to see only data for their own region.  \n  \nYou publish the dataset to powerbi.com, configure RLS role membership, and distribute the dataset and its related reports to the salespeople.  \n  \nA salesperson says that she believes she should be able to see more data.  \n  \nYou need to verify which data the salesperson currently sees.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Use the Test as role option to view data as the salesperson's user account."
      },
      {
        "key": "B",
        "text": "Use the Test as role option to view data as the Sales role."
      },
      {
        "key": "C",
        "text": "Instruct the salesperson to open the report in Microsoft Power BI Desktop."
      },
      {
        "key": "D",
        "text": "Filter the data in the reports to match the intended logic in the filter on the sales transaction table."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "RLS động đánh giá quyền truy cập đối với danh tính cá nhân, do đó việc xác minh phải sử dụng tài khoản người dùng của nhân viên bán hàng thay vì chỉ sử dụng vai trò Bán hàng chung. Thử nghiệm dịch vụ Power BI với tư cách là trải nghiệm vai trò có thể kiểm tra một người cụ thể để kiểm tra dữ liệu được lọc theo bối cảnh RLS hiệu quả của người đó.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 260",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/260-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-261",
    "questionNumber": 261,
    "text": "You have a Microsoft Excel file in a Microsoft OneDrive folder.  \n  \nThe file must be imported to a Power BI semantic model.  \n  \nYou need to ensure that the semantic model can be refreshed in PowerBi.com.  \n  \nWhich two connectors can you use to connect to the file? Each correct answer presents a complete solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Web"
      },
      {
        "key": "B",
        "text": "Excel Workbook"
      },
      {
        "key": "C",
        "text": "Folder"
      },
      {
        "key": "D",
        "text": "Text/CSV"
      },
      {
        "key": "E",
        "text": "SharePoint folder"
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "Trình kết nối Sổ làm việc Excel đọc tệp trực tiếp từ vị trí OneDrive của nó và vì tệp nằm trên đám mây nên Power BI có thể làm mới tệp trong dịch vụ theo lịch mà không cần cổng tại chỗ. Trình kết nối Thư mục SharePoint cũng tiếp cận các tệp được lưu trữ trên OneDrive/SharePoint và tương tự như vậy, hỗ trợ làm mới đám mây theo lịch trình. Trình kết nối Web dành cho nội dung trang web chứ không phải một tệp đám mây cụ thể và Thư mục/Văn bản-CSV không khớp với một sổ làm việc Excel được lưu trữ trên đám mây.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 261",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/261-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-262",
    "questionNumber": 262,
    "text": "You intend to create the chart shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730649086-k1ww97nb.jpg)  \n  \nHow should you create the dashed horizontal line that represents the 40th percentile of daily sales for the displayed period?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Add a measure to the visual that uses the following DAX expression. Measure1 = PERCENTILEX.INC (Sales,sales[Total Sales],0.40)"
      },
      {
        "key": "B",
        "text": "Add a measure to the visual that uses the following DAX expression. Measure1 = PERCENTILEX.EXC (Sales,sales[Total Sales],0.40)"
      },
      {
        "key": "C",
        "text": "Add a new percentile line that uses Total Sales as the measure and 40% as the percentile."
      },
      {
        "key": "D",
        "text": "Create a horizontal line that has a fixed value of 24,000."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Đường phân vị Power BI tạo ra một đường tham chiếu động ở phân vị đã chọn của thước đo. Việc định cấu hình nó cho thước đo Tổng doanh thu ở mức 40% sẽ tạo ra dòng doanh thu hàng ngày ở phần trăm thứ 40 cần thiết cho hình ảnh.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783730649086-k1ww97nb.jpg",
    "sourceTitle": "Examcademy PL-300 Question 262",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/262-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-263",
    "questionNumber": 263,
    "text": "You have a Power BI app that contains a report named Report1.  \n  \nYou add a new page to Report1.  \n  \nYou need to ensure that users can view the new page. The solution must minimize administrative effort.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Update the audience in the app."
      },
      {
        "key": "B",
        "text": "Update the app."
      },
      {
        "key": "C",
        "text": "Update the contact information in the app."
      },
      {
        "key": "D",
        "text": "Unpublish and create a new app."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Khi một trang mới được thêm vào báo cáo đã được xuất bản trong ứng dụng Power BI, ứng dụng phải được cập nhật (xuất bản lại) để bao gồm trang mới trong gói ứng dụng. Việc cập nhật đối tượng hoặc thông tin liên hệ không làm thay đổi nội dung đã xuất bản của ứng dụng. Việc tạo một ứng dụng mới sẽ không cần thiết và sẽ không giảm thiểu nỗ lực quản trị.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 263",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/263-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-264",
    "questionNumber": 264,
    "text": "You have a Power BI model that includes a table named Employees. The table has the following columns:  \n  \n- Employee ID  \n- First Name  \n- Last Name  \n- Department  \n- Salary  \n  \nEach employee is uniquely identified by Employee ID.  \n  \nYou need to create a DAX measure that calculates the average salary of all employees in the sales department.  \n  \nWhich DAX expression should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "DISTINCTCOUNT(‘Employees’[Salary])"
      },
      {
        "key": "B",
        "text": "CALCULATE(DISTINCTCOUNT(‘Employees’[Salary]), ‘Employees’[Department] = “Sales”)"
      },
      {
        "key": "C",
        "text": "CALCULATE(AVERAGE(‘Employees’[Salary]), ‘Employees’[Department] = “Sales”)"
      },
      {
        "key": "D",
        "text": "AVERAGE(‘Employees’[Salary])"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "`AVERAGE('Employees'[Salary])` tính mức lương trung bình và `CALCULATE` áp dụng bộ lọc `'Employees'[Department] = \"Sales\"` để chỉ bao gồm những nhân viên trong bộ phận Bán hàng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 264",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/264-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-265",
    "questionNumber": 265,
    "text": "You create a Power BI report named Summary1.  \n  \nYou discover that Summary1 is slow.  \n  \nYou run Performance analyzer to identify performance metrics for Summary1.  \n  \nWhich two metrics display the execution duration in Performance analyzer? Each correct answer present part of the solution.  \n  \nNOTE: Each correct answer is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Top Operations"
      },
      {
        "key": "B",
        "text": "DAX query"
      },
      {
        "key": "C",
        "text": "Server requests"
      },
      {
        "key": "D",
        "text": "Dependencies"
      },
      {
        "key": "E",
        "text": "Visual display"
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "Trình phân tích hiệu suất của Power BI hiển thị thời lượng thực hiện thông qua hai số liệu chính: **truy vấn DAX** thời gian (thời gian để Dịch vụ phân tích trả về kết quả) và **thời gian hiển thị trực quan** (thời gian để hình ảnh hiển thị trên màn hình, bao gồm truy xuất hình ảnh web và mã hóa địa lý).",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 265",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/265-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-266",
    "questionNumber": 266,
    "text": "You have a report containing three pages. One page includes a KPI visualization.  \n  \nYou need to filter every visualization in the report except the KPI visualization.  \n  \nWhich two actions should you take? Each correct answer is part of the solution.  \n  \n> **NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Edit the interactions of the KPI visualization."
      },
      {
        "key": "B",
        "text": "Add the same slicer to each page and configure Sync slicers."
      },
      {
        "key": "C",
        "text": "Edit the interactions of the slicer that is on the same page as the KPI visualization."
      },
      {
        "key": "D",
        "text": "Configure a page-level filter."
      },
      {
        "key": "E",
        "text": "Configure a report-level filter."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Bộ cắt được đồng bộ hóa áp dụng lựa chọn bộ cắt để trực quan hóa trên các trang báo cáo đã chọn. Bộ cắt thường lọc các hình ảnh khác trên trang của nó nhưng tương tác của nó với một hình ảnh cụ thể có thể được đặt thành **Không**. Do đó, hãy đồng bộ hóa các bộ cắt tương đương trên các trang và đặt bộ cắt trên trang KPI không lọc KPI. Thay vào đó, bộ lọc cấp báo cáo sẽ áp dụng cho tất cả hình ảnh, bao gồm cả KPI.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 266",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/266-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-267",
    "questionNumber": 267,
    "text": "You have a CSV file containing user complaints. It has a column named Logged, which records the date and time when each complaint occurred. The Logged data uses this format: `2018-12-31 at 08:59`.  \n  \nYou need to analyze complaints by their logged date and use a built-in date hierarchy.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Apply the Parse function from the Data transformations options to the Logged column."
      },
      {
        "key": "B",
        "text": "Change the data type of the Logged column to Date."
      },
      {
        "key": "C",
        "text": "Split the Logged column by using at as the delimiter."
      },
      {
        "key": "D",
        "text": "Create a column by example that starts with 2018-12-31."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Việc tách giá trị văn bản tại `at` sẽ tách ngày có định dạng ISO khỏi thời gian. Trường ngày kết quả có thể được nhận dạng là loại Ngày, đáp ứng yêu cầu của Power BI đối với hệ thống phân cấp ngày được tạo tự động. Ngày/giờ tự động Power BI áp dụng cho các cột có kiểu dữ liệu là Ngày hoặc Ngày/Giờ.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 267",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/267-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-268",
    "questionNumber": 268,
    "text": "You create a dashboard in the Microsoft Power BI service. The dashboard includes a card visual that displays total sales for the current year.  \n  \nYou provide users access to the dashboard by assigning the Viewer role in the workspace.  \n  \nA user wants daily notifications of the value shown in the card visual.  \n  \nYou need to automate these notifications.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create a subscription."
      },
      {
        "key": "B",
        "text": "Create a data alert."
      },
      {
        "key": "C",
        "text": "Share the dashboard to the user."
      },
      {
        "key": "D",
        "text": "Tag the user in a comment."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Đăng ký trang tổng quan Power BI có thể được lên lịch hàng ngày và gửi cho người nhận một email có chứa ảnh chụp nhanh trang tổng quan, bao gồm giá trị được hiển thị của thẻ. Cảnh báo dữ liệu chỉ thông báo khi một giá trị vượt qua ngưỡng được định cấu hình thay vì theo lịch trình cố định hàng ngày.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 268",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/268-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-269",
    "questionNumber": 269,
    "text": "You have a Power BI report named Report1.  \n  \nYou plan to share Report1 with multiple users.  \n  \nYou need to add the users to a group.  \n  \nWhich two group types can you use? Each correct answer provides a complete solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "security group"
      },
      {
        "key": "B",
        "text": "distribution group"
      },
      {
        "key": "C",
        "text": "Microsoft Teams team"
      },
      {
        "key": "D",
        "text": "Microsoft 365 group"
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Power BI hỗ trợ chia sẻ báo cáo trực tiếp với các nhóm bảo mật và nhóm phân phối. Nhóm Microsoft 365 (Hợp nhất) không được hỗ trợ để chia sẻ trực tiếp và nhóm Microsoft Teams không phải là loại nhóm chia sẻ trực tiếp được hỗ trợ.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 269",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/269-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-270",
    "questionNumber": 270,
    "text": "You have a Power BI semantic model containing three tables named Products, OrderHistory, and Date.  \n  \nProducts is a dimension table with these columns:  \n  \n- ProductID  \n- ProductName  \n  \nOrderHistory is a fact table with these columns:  \n  \n- OrderID  \n- ProductID  \n- OrderDate  \n  \nDate is a dimension table with these columns:  \n  \n- Year  \n- Date  \n- Week  \n- Month  \n  \nYou must define relationships between Products and OrderHistory, and between OrderHistory and Date.  \n  \nWhich cardinality should you configure?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Một sản phẩm có thể xuất hiện trong nhiều hàng lịch sử đặt hàng, nhưng mỗi hàng lịch sử đặt hàng xác định một sản phẩm. Tương tự, một ngày có thể được liên kết với nhiều hàng lịch sử đơn hàng, trong khi mỗi hàng lịch sử đơn hàng có một ngày đặt hàng. Do đó, cả hai mối quan hệ đều là một-nhiều giữa bảng thứ nguyên và bảng dữ kiện.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 270",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/270-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-271",
    "questionNumber": 271,
    "text": "You have a Power BI semantic model containing the data sources shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1784205958444-mf9tjjqe.png)  \n  \nConfigure the privacy levels for the data sources.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Mức độ riêng tư riêng tư ngăn không cho dữ liệu đánh giá nhạy cảm của nhân viên bị lộ hoặc bị đưa vào các nguồn dữ liệu khác. Cấp độ bảo mật của Tổ chức chỉ cho phép chia sẻ nguồn cơ hội bán hàng với các nguồn đáng tin cậy trong tổ chức.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1784205958444-mf9tjjqe.png",
    "sourceTitle": "Examcademy PL-300 Question 271",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/271-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-272",
    "questionNumber": 272,
    "text": "You merge data from Sales_Region, Region_Manager, Sales_Manager, and Manager into one table named Region.  \n  \nWhat should you do next to satisfy the executives’ reporting requirements?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create a DAX calculated column that retrieves the region manager from the Weekly_Returns table based on the sales_region_id column."
      },
      {
        "key": "B",
        "text": "Apply row-level security (RLS) to the Region table based on the sales manager username."
      },
      {
        "key": "C",
        "text": "Configure a bi-directional relationship between Region and Sales_Region."
      },
      {
        "key": "D",
        "text": "In the Region table, create a hierarchy that has the manager name, and then the sales manager name."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Hệ thống phân cấp nhóm các cột liên quan vào các cấp báo cáo theo thứ tự, cho phép người dùng điều hướng và truy sâu từ người quản lý cấp cao hơn đến người quản lý bán hàng bên dưới người quản lý đó. Bảng Khu vực chứa các trường tổ chức hợp nhất cần thiết cho hệ thống phân cấp này.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 272",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/272-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-273",
    "questionNumber": 273,
    "text": "You use Power Query to import two tables, named Order Header and Order Details, from an Azure SQL database. The Order Header table is related to the Order Details table by a column named Order ID in each table.  \n  \nYou need to combine the tables into one query that includes the unique columns from each table.  \n  \nWhat should you select in Power Query Editor?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Merge queries"
      },
      {
        "key": "B",
        "text": "Combine files"
      },
      {
        "key": "C",
        "text": "Append queries"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Thao tác truy vấn Hợp nhất của Power Query nối hai bảng bằng cách sử dụng các giá trị trùng khớp trong một hoặc nhiều cột, chẳng hạn như ID đơn hàng và cho phép đưa các cột từ bảng liên quan vào kết quả. [Microsoft Learn: Merge queries overview](https://learn.microsoft.com/en-us/power-query/merge-queries-overview)",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 273",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/273-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-274",
    "questionNumber": 274,
    "text": "You have a Power BI semantic model named Model1 that contains a table named Sales.  \n  \nSales has 10 million records and contains the following data.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783742180022-942hzgqe.png)  \n  \nThe related report shows weekly sales for each region.  \n  \nYou need to reduce the size of Model1. How should you modify the CustomerID column and the PurchaseDateTime column?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Việc xóa ID khách hàng sẽ loại bỏ cột số lượng số cao không được sử dụng vì doanh số bán hàng hàng tuần theo khu vực không yêu cầu dữ liệu cấp độ khách hàng. Ngày mua hàng phải được giữ lại để nhóm doanh số bán hàng theo tuần; việc chia giá trị ngày giờ kết hợp thành các cột ngày và giờ sẽ làm giảm lượng số trong mỗi cột và có thể cải thiện khả năng nén VertiPaq.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783742180022-942hzgqe.png",
    "sourceTitle": "Examcademy PL-300 Question 274",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/274-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-275",
    "questionNumber": 275,
    "text": "You are creating an imported Microsoft Power BI data model for basket analysis. The analysis aims to identify products that are commonly purchased together in the same transaction, both across and within sales territories.  \n  \nYou import a fact table named Sales as shown in the exhibit. The related dimension tables are also imported into the model. Sales contains the data in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783729806834-dero17cq.jpg)  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783729815678-k8imv0ta.png)  \n  \nYou are assessing how to optimize the model.  \n  \nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "The SalesRowID and AuditID columns can be removed from the model without impeding the analysis goals.",
        "correctAnswer": "Yes"
      },
      {
        "id": "2",
        "text": "Both the OrderDateKey and OrderDate columns are necessary to perform the basket analysis.",
        "correctAnswer": "No"
      },
      {
        "id": "3",
        "text": "The TaxAmt column must retain the current number of decimal places to perform the basket analysis.",
        "correctAnswer": "No"
      }
    ],
    "options": [
      {
        "key": "Yes",
        "text": "Yes"
      },
      {
        "key": "No",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "1:Yes",
      "2:No",
      "3:No"
    ],
    "explanation": "SalesRowID và AuditID là các mã nhận dạng dòng/tải kỹ thuật chứ không phải là các trường cần thiết để nhóm các mục thành đơn đặt hàng hoặc phân tích lãnh thổ. Phân tích giỏ hàng cần có mã nhận dạng đơn hàng và sản phẩm; ngày không bắt buộc đối với phân tích đã nêu và trường ngày no chỉ được yêu cầu để tìm các sản phẩm được mua cùng nhau. TaxAmt không ảnh hưởng đến sự xuất hiện đồng thời của sản phẩm, vì vậy độ chính xác thập phân hiện tại của nó không cần phải được giữ lại.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783729806834-dero17cq.jpg",
    "sourceTitle": "Examcademy PL-300 Question 275",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/275-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-276",
    "questionNumber": 276,
    "text": "You need to create a visualization that compares revenue and cost over time.  \n  \nWhich visualization type should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "waterfall chart"
      },
      {
        "key": "B",
        "text": "stacked area chart"
      },
      {
        "key": "C",
        "text": "line chart"
      },
      {
        "key": "D",
        "text": "donut chart"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Biểu đồ đường biểu thị doanh thu và chi phí dưới dạng các chuỗi riêng biệt theo thời gian, giúp dễ dàng so sánh các thay đổi, xu hướng và sự khác biệt giữa hai thước đo.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 276",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/276-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-277",
    "questionNumber": 277,
    "text": "You have a Power BI Desktop semantic model containing a table named Sales. Sales includes these columns:  \n  \n- OrderDate  \n- OrderID  \n- ProductID  \n- SalesAmount  \n  \nYou create a visual that displays the SalesAmount field over time.  \n  \nYou identify an outlier in the SalesAmount column.  \n  \nYou need to make sure the outlier has as little influence on the visual as possible. The solution must still allow the visual to show overall data trends.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create a new column that divides SalesAmount by the highest SalesAmount value."
      },
      {
        "key": "B",
        "text": "For the SalesAmount field, set the aggregate type to Median."
      },
      {
        "key": "C",
        "text": "Enable anomaly detection for the visual."
      },
      {
        "key": "D",
        "text": "For the SalesAmount field, set the aggregate type to Average."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Trung vị là giá trị ở giữa trong một tập hợp có thứ tự và ít bị ảnh hưởng bởi SalesAmount cực trị hơn nhiều so với trung bình hoặc tổng số học. Do đó, việc sử dụng Median làm tổng hợp Số tiền bán hàng sẽ duy trì các xu hướng đại diện dựa trên thời gian đồng thời giảm ảnh hưởng của giá trị ngoại lệ.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 277",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/277-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-278",
    "questionNumber": 278,
    "text": "You must create the relationship required for the executive's visual.  \n  \nWhat should you do before creating the relationship?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Change the data type of Sales[region_id] to Whole Number."
      },
      {
        "key": "B",
        "text": "Change the data type of Sales[region_id] to Decimal Number."
      },
      {
        "key": "C",
        "text": "In the Sales table, add a measure for Sum(sales_amount)."
      },
      {
        "key": "D",
        "text": "Change the data type of Sales[sales_id] to Text."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Các cột được sử dụng trong mối quan hệ Power BI phải có cùng loại dữ liệu. Mã định danh khu vực là một khóa số nguyên, vì vậy `Sales[region_id]` phải là Số nguyên để khớp với khóa khu vực liên quan và cho phép tạo mối quan hệ chính xác.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 278",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/278-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-279",
    "questionNumber": 279,
    "text": "You have a semantic model that uses a live connection to a semantic model in the Power BI service.  \n  \nYou need to create a Power BI report named RPT1 that uses only the live connection.  \n  \nWhich three components can you add to RPT1? Each correct answer represents a complete solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a report measure"
      },
      {
        "key": "B",
        "text": "a calculated column"
      },
      {
        "key": "C",
        "text": "a calculated table"
      },
      {
        "key": "D",
        "text": "a new column"
      },
      {
        "key": "E",
        "text": "a new table"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Kết nối trực tiếp với mô hình ngữ nghĩa dịch vụ Power BI không cho phép sửa đổi mô hình dữ liệu cơ bản bằng cách thêm các cột hoặc bảng mới. Nó cho phép tạo các thước đo báo cáo, cột được tính toán và bảng được tính toán cho báo cáo được kết nối trực tiếp.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 279",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/279-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-280",
    "questionNumber": 280,
    "text": "You have the Power BI data model shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783733347198-dftredx2.png)  \n  \nThe Sales table contains the following columns.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783733360563-t9l051ew.png)  \n  \nThe data model must support this analysis:  \n  \n- Total sales by product, by the month in which the order was placed  \n- Quantities sold by product, by the day on which the order was placed  \n- Number of sales transactions by the quarter in which the order was placed  \n  \nFor each statement, select **Yes** when it is true. Otherwise, select **No**.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "Removing the LastUpdated column from the Sales table reduces the model size while still supporting the required analysis.",
        "correctAnswer": "Yes"
      },
      {
        "id": "2",
        "text": "Removing the ProductID column from the Sales table reduces the model size while still supporting the required analysis.",
        "correctAnswer": "No"
      },
      {
        "id": "3",
        "text": "Removing the ShipDate column from the Sales table reduces the model size while still supporting the required analysis.",
        "correctAnswer": "Yes"
      }
    ],
    "options": [
      {
        "key": "Yes",
        "text": "Yes"
      },
      {
        "key": "No",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "1:Yes",
      "2:No",
      "3:Yes"
    ],
    "explanation": "LastUpdated là một trường kiểm tra và không cần thiết cho việc phân tích doanh số, số lượng, giao dịch, sản phẩm hoặc ngày đặt hàng được yêu cầu. Cần có ProductID làm khóa ngoại của bảng Bán hàng cho mối quan hệ Sản phẩm với Doanh số, cho phép phân tích theo sản phẩm. ShipDate không cần thiết vì mọi nhóm thời gian được yêu cầu đều dựa trên OrderDate.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783733347198-dftredx2.png",
    "sourceTitle": "Examcademy PL-300 Question 280",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/280-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-281",
    "questionNumber": 281,
    "text": "You have a Power BI report named Report that includes the following tables.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783742682191-vl6fsrgu.png)  \n  \nFor the past three days, refresh in Power BI has failed with this error message: “You have reached the maximum allowable memory allocation for your tier. Consider upgrading to a tier with more available memory.”  \n  \nYou need to resolve the error while ensuring query response times are minimized for end users.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Merge the Sales person and invoice tables based on the SalesPersonId column."
      },
      {
        "key": "B",
        "text": "Change the invoice table to a DirectQuery table and read the data live from the source, retaining only the dimension tables as import tables."
      },
      {
        "key": "C",
        "text": "Reduce the size of the invoice table by summarizing sales by Product, Sales person, Calendar, and Customer."
      },
      {
        "key": "D",
        "text": "Change the invoice table to a composite table that contains historical data as a DirectQuery table and hot data as an import table, and then partition the table."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Việc tóm tắt bảng thực tế Hóa đơn gồm 12 triệu hàng theo Sản phẩm, Người bán hàng, Lịch và Khách hàng sẽ giảm dung lượng bộ nhớ của mô hình đã nhập, cho phép làm mới để vừa với phân bổ cấp. Vì dữ liệu kết quả vẫn ở trong mô hình nhập trong bộ nhớ nên nó cũng cung cấp các truy vấn báo cáo nhanh hơn so với việc dựa vào DirectQuery để lấy dữ liệu thực tế.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783742682191-vl6fsrgu.png",
    "sourceTitle": "Examcademy PL-300 Question 281",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/281-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-282",
    "questionNumber": 282,
    "text": "You need to configure access for users in the sales department. The solution must meet the security requirements.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Share each report to the Azure Active Directory group of the sales department."
      },
      {
        "key": "B",
        "text": "Add the Azure Active Directory group of the sales department as an Admin of the reports workspace."
      },
      {
        "key": "C",
        "text": "Distribute an app to the users in the Azure Active Directory group of the sales department."
      },
      {
        "key": "D",
        "text": "Add the sales department as a member of the reports workspace."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Ứng dụng Power BI là cơ chế thích hợp để phân phối nội dung báo cáo được tuyển chọn cho nhiều đối tượng người tiêu dùng và đối tượng của nó có thể là nhóm Azure Active Directory. Vai trò Quản trị viên và Thành viên của Workspace cấp các quyền quản lý nội dung nâng cao không phù hợp với người dùng báo cáo. Microsoft khuyên bạn nên sử dụng đối tượng ứng dụng để kiểm soát nội dung hiển thị cho người dùng hoặc nhóm.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 282",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/282-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-283",
    "questionNumber": 283,
    "text": "You need to use Power BI to create a visual that will allow users to compare the sales performance of five sales regions for the current month.  \n  \nWhich visual should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a line chart"
      },
      {
        "key": "B",
        "text": "a stacked bar chart"
      },
      {
        "key": "C",
        "text": "a 100% stacked bar chart"
      },
      {
        "key": "D",
        "text": "a waterfall chart"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Biểu đồ thanh xếp chồng so sánh hiệu quả hiệu suất bán hàng trên nhiều danh mục (khu vực) trong một tháng, cho phép người xem nhanh chóng đánh giá hiệu suất tương đối và phân biệt trực quan sự khác biệt về mức độ giữa năm khu vực.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 283",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/283-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-284",
    "questionNumber": 284,
    "text": "Solution: You change the semantic model mode.  \n  \nDoes this meet the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Chỉ thay đổi chế độ mô hình ngữ nghĩa không giải quyết được các vấn đề về phân biệt chữ hoa chữ thường hoặc chất lượng dữ liệu. Cần phải chuyển đổi hoặc làm sạch dữ liệu (sử dụng các chức năng như UPPER/LOWER) bên cạnh các thay đổi về chế độ để giải quyết đầy đủ các vấn đề về dữ liệu cơ bản.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 284",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/284-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-285",
    "questionNumber": 285,
    "text": "Solution: You implicitly convert the values into the required type.  \n  \nDoes this meet the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Chuyển đổi loại ngầm định không giải quyết được các vấn đề về phân biệt chữ hoa chữ thường hoặc tính toàn vẹn dữ liệu. Những vấn đề này yêu cầu chuyển đổi dữ liệu rõ ràng bằng cách sử dụng các hàm như UPPER() hoặc LOWER() hoặc hiệu chỉnh ở cấp nguồn dữ liệu trước khi nhập.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 285",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/285-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-286",
    "questionNumber": 286,
    "text": "Solution: You add an index key and normalize casing in the data source.  \n  \nDoes this meet the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Công cụ của Power BI không phân biệt chữ hoa chữ thường, do đó, khi nguồn DirectQuery phân biệt chữ hoa chữ thường, các giá trị chỉ khác nhau theo kiểu chữ cái được nguồn xử lý dưới dạng các hàng riêng biệt nhưng bởi Power BI là trùng lặp, tạo ra các giá trị và lỗi không xác định. Việc chuẩn hóa cách viết hoa tại nguồn dữ liệu sẽ loại bỏ sự không khớp này và việc thêm khóa chỉ mục sẽ mang lại cho mỗi hàng một mã định danh duy nhất ổn định, cùng nhau giải quyết vấn đề được báo cáo.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 286",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/286-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-287",
    "questionNumber": 287,
    "text": "Solution: You normalize casing in the source query or Power Query Editor.  \n  \nDoes this meet the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Chuẩn hóa cách viết hoa văn bản bằng cách sử dụng các hàm như UPPER() hoặc LOWER() trong Power Query sẽ chuẩn hóa dữ liệu và giải quyết sự khác biệt về phân biệt chữ hoa chữ thường. Cách tiếp cận này được ghi lại trong hướng dẫn của Microsoft và ngăn chặn các giá trị không xác định hoặc lỗi so sánh trong mô hình.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 287",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/287-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-288",
    "questionNumber": 288,
    "text": "You try to connect Power BI Desktop to a Cassandra database.  \n  \nIn the **Get Data** connector list, you find that no connector is specifically available for the Cassandra database.  \n  \nYou need to choose an alternative data connector that can connect to the database.  \n  \nWhich connector type should you select?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft SQL Server database"
      },
      {
        "key": "B",
        "text": "ODBC"
      },
      {
        "key": "C",
        "text": "OLE DB"
      },
      {
        "key": "D",
        "text": "OData"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "ODBC là một giao diện kết nối cơ sở dữ liệu chung. Máy tính để bàn Power BI có thể kết nối với nguồn dữ liệu ODBC đã định cấu hình bằng cách sử dụng chuỗi kết nối trình điều khiển hoặc DSN của nó, do đó, trình điều khiển Cassandra ODBC cho phép truy cập khi có sẵn đầu nối Cassandra chuyên dụng no.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 288",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/288-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-289",
    "questionNumber": 289,
    "text": "You have a folder containing 50 JSON files.  \n  \nYou need to use Power BI Desktop to make the files’ metadata available as one dataset. The solution must **not** store the JSON files’ data.  \n  \nWhich data source type should you use, and which transformation should you perform?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Trình kết nối Thư mục Power Query trả về một hàng cho mỗi tệp có siêu dữ liệu tệp và cột Nội dung nhị phân. Việc xóa Nội dung sẽ ngăn không cho giữ lại tải trọng JSON trong khi vẫn để siêu dữ liệu có sẵn trong một bảng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 289",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/289-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-290",
    "questionNumber": 290,
    "text": "You have a folder containing 100 CSV files.  \n  \nYou need to expose the file metadata as one dataset by using Power BI. The solution must **not** store the data from the CSV files.  \n  \nWhich three actions should you carry out, in order?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "step1",
        "text": "Slot 1:",
        "correctAnswer": "A"
      },
      {
        "id": "step2",
        "text": "Slot 2:",
        "correctAnswer": "C"
      },
      {
        "id": "step3",
        "text": "Slot 3:",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "From Power BI Desktop, select Get Data, and then select Folder."
      },
      {
        "key": "B",
        "text": "From Power Query Editor, expand the Attributes column."
      },
      {
        "key": "C",
        "text": "From Power Query Editor, remove the Content column."
      },
      {
        "key": "D",
        "text": "From Power Query Editor, remove the Attributes column."
      },
      {
        "key": "E",
        "text": "From Power BI Desktop, select Get Data, and then select Text/CSV."
      },
      {
        "key": "F",
        "text": "From Power Query Editor, combine the Content column."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "From Power BI Desktop, select Get Data, and then select Folder."
      },
      {
        "key": "B",
        "text": "From Power Query Editor, expand the Attributes column."
      },
      {
        "key": "C",
        "text": "From Power Query Editor, remove the Content column."
      },
      {
        "key": "D",
        "text": "From Power Query Editor, remove the Attributes column."
      },
      {
        "key": "E",
        "text": "From Power BI Desktop, select Get Data, and then select Text/CSV."
      },
      {
        "key": "F",
        "text": "From Power Query Editor, combine the Content column."
      }
    ],
    "correctAnswers": [
      "step1=A",
      "step2=C",
      "step3=B"
    ],
    "explanation": "Trình kết nối Thư mục liệt kê các tệp và trả về một bảng thuộc tính tệp. Cột Nội dung của nó chứa nội dung nhị phân của mỗi CSV, do đó, việc xóa cột này sẽ giúp dữ liệu CSV không được đưa vào mô hình. Việc mở rộng Thuộc tính sẽ hiển thị bản ghi thuộc tính tệp dưới dạng cột siêu dữ liệu.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 290",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/290-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-291",
    "questionNumber": 291,
    "text": "You are using Power BI Desktop to profile data in Power Query Editor.  \n  \nYou need to review the percentage of errors and the maximum value for each column.  \n  \nWhich Power Query Editor options should you use? Each option may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "percentage_errors",
        "text": "Review the percentage of errors:",
        "correctAnswer": "B"
      },
      {
        "id": "maximum_value",
        "text": "Review the maximum value:",
        "correctAnswer": "D"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Column distribution"
      },
      {
        "key": "B",
        "text": "Column quality"
      },
      {
        "key": "C",
        "text": "Monospaced"
      },
      {
        "key": "D",
        "text": "Column profile"
      },
      {
        "key": "E",
        "text": "Formula Bar"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Column distribution"
      },
      {
        "key": "B",
        "text": "Column quality"
      },
      {
        "key": "C",
        "text": "Monospaced"
      },
      {
        "key": "D",
        "text": "Column profile"
      },
      {
        "key": "E",
        "text": "Formula Bar"
      }
    ],
    "correctAnswers": [
      "percentage_errors=B",
      "maximum_value=D"
    ],
    "explanation": "Chất lượng cột hiển thị tỷ lệ giá trị hợp lệ, lỗi và trống trong mỗi cột. Cấu hình cột cung cấp số liệu thống kê chi tiết cho cột được chọn, bao gồm giá trị tối đa của cột đó.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 291",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/291-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-292",
    "questionNumber": 292,
    "text": "You have a Power BI model containing two tables named Population and Date.  \n  \nThe Population table has two columns named PopulationAmount and DateKey.  \n  \nDateKey holds date values representing the first day of a year and is used to create a many-to-one relationship to the Date table.  \n  \nThe Power BI model includes two measures defined as follows:  \n  \n```DAX  \nTotal Population = Sum(‘Population’[PopulationAmount])  \n2023 Population = CALCULATE([Total Population], ‘Date'[Year] = 2023)  \n```  \n  \nYou create a table visual that shows Date[Year] and [2023 Population].  \n  \nWhat will the table visual display?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "one row per year that contains blank values for every year except 2023"
      },
      {
        "key": "B",
        "text": "one row per date that contains the population value for the corresponding year repeated in each row"
      },
      {
        "key": "C",
        "text": "a single row for the year 2023 that contains the related population value"
      },
      {
        "key": "D",
        "text": "one row per year that contains the same value repeated for each year"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "`CALCULATE` thay thế bộ lọc hiện có trên `Date[Year]` bằng bộ lọc `Date[Year] = 2023`. Do đó, mỗi hàng năm sẽ đánh giá thước đo bằng bộ lọc ngày 2023 và hiển thị tổng giá trị dân số tương tự cho năm 2023.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 292",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/292-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-293",
    "questionNumber": 293,
    "text": "You publish a semantic model to the Power BI service. The semantic model contains data from the following data sources:  \n  \n• Source1: A Microsoft Excel file stored in Microsoft OneDrive for Business  \n\n• Source2: An Azure SQL database on a virtual network  \n\n• Source3: A public website  \n  \nWhich data sources require an on-premises data gateway?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Source1 only"
      },
      {
        "key": "B",
        "text": "Source2 only"
      },
      {
        "key": "C",
        "text": "Source3 only"
      },
      {
        "key": "D",
        "text": "Source1 and Source2 only"
      },
      {
        "key": "E",
        "text": "Source2 and Source3 only"
      },
      {
        "key": "F",
        "text": "Source1, Source2, and Source3"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Các nguồn dữ liệu bên trong mạng ảo (VNet) được bảo vệ bằng cách ly mạng và không thể truy cập trực tiếp qua internet. Cần có cổng dữ liệu tại chỗ (hoặc mạng ảo) để thiết lập cầu nối an toàn giữa Power BI và cơ sở dữ liệu được bảo vệ. Các tệp Excel trong OneDrive for Business và các trang web công cộng có thể truy nhập được trên đám mây và không yêu cầu cổng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 293",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/293-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-294",
    "questionNumber": 294,
    "text": "HOTSPOT  \n  \nYou use Power Query Editor to review the query shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783742176380-9nbqzuzc.png)  \n  \nEach **Region** value appears only in the row where it first occurs, and every later occurrence of that Region value is blank.  \n  \nYou need to make sure every row has the appropriate non-blank value while minimizing development effort.  \n  \nWhich column should you choose, and which action should you apply to that column?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Điền xuống thay thế các ô trống bằng giá trị không trống gần đây nhất phía trên chúng. Việc áp dụng nó cho Vùng sẽ lấp đầy mỗi hàng trạng thái với giá trị vùng tương ứng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783742176380-9nbqzuzc.png",
    "sourceTitle": "Examcademy PL-300 Question 294",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/294-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-295",
    "questionNumber": 295,
    "text": "HOTSPOT  \n  \nYou have a Power BI model containing the following data.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783735458837-brsajxxo.png)  \n  \nThe Date table is related to the Sales table through their Date columns.  \n  \nYou need to create a calculated table containing:  \n  \n- One row for every year  \n- A column containing total sales for each year  \n  \nHow should you complete the DAX calculation?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "TÓM TẮT tạo bảng tóm tắt bằng cách nhóm Doanh số bán hàng trên cột Ngày [Năm] có liên quan. Biểu thức được đặt tên là \"Doanh số\", SUM(Sales[Sale]) cộng tổng doanh số bán hàng cho mỗi hàng kết quả của năm.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783735458837-brsajxxo.png",
    "sourceTitle": "Examcademy PL-300 Question 295",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/295-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-296",
    "questionNumber": 296,
    "text": "You have a Power BI model containing the following data.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783736224667-ksq3jp7z.png)  \n  \nThe Date table is related to the Sales table through their Date columns.  \n  \nThe model includes the following DAX measure:  \n  \n`Total Sales = SUM(Sales[Sale])`  \n  \nYou need to create another measure named **Previous Quarter** that displays sales for the quarter preceding the selected period.  \n  \nWhich DAX calculation should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "CALCULATE ( [Total Sales], DATEADD (Date[Date], -1, QUARTER ) )"
      },
      {
        "key": "B",
        "text": "CALCULATE ( [Total Sales], DATESQTD (Date[Date] ) )"
      },
      {
        "key": "C",
        "text": "TOTALQTD ( [Total Sales], Date[Date] )"
      },
      {
        "key": "D",
        "text": "CALCULATE ( [Total Sales], PARALLELPERIOD (Date[Date], 1, QUARTER ) )"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "`DATEADD(Date[Date], -1, QUARTER)` trả về ngữ cảnh ngày được dịch chuyển lùi lại một phần tư. `CALCULATE` áp dụng bối cảnh đã thay đổi đó khi đánh giá `[Total Sales]`, tạo ra doanh số bán hàng cho quý trước.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783736224667-ksq3jp7z.png",
    "sourceTitle": "Examcademy PL-300 Question 296",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/296-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-297",
    "questionNumber": 297,
    "text": "You have a semantic model named Model1 that contains a table named Table1.  \n  \nTable1 has three columns: CustomerID, Age, and LoyaltyStatus.  \n  \nAn order system tracks each customer's order history.  \n  \nImport the order-system data into Model1 and create one table that combines LoyaltyStatus with the number of orders. Ensure that the dataset stores only customers who have orders.  \n  \nHow should you create the table, and which join kind should you use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Hợp nhất Power Query kết hợp các truy vấn liên quan bằng cách sử dụng các giá trị khóa phù hợp, chẳng hạn như ID khách hàng. Kết nối bên trong chỉ trả về các hàng khớp từ cả hai bảng, ngoại trừ các khách hàng có bản ghi đơn hàng no.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 297",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/297-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-298",
    "questionNumber": 298,
    "text": "You must create a calculated column that displays the month according to the reporting requirements.  \n  \nWhich DAX expression should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "FORMAT('Date'[date],\"MMM YYYY\")"
      },
      {
        "key": "B",
        "text": "FORMAT('Date'[date_id],\"MMM\") & \" \" & FORMAT('Date'[year], \"#\")"
      },
      {
        "key": "C",
        "text": "FORMAT('Date'[date_id],\"MMM YYYY\")"
      },
      {
        "key": "D",
        "text": "FORMAT('Date'[date],\"M YY\")"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "DAX `FORMAT` chuyển đổi giá trị ngày thành văn bản bằng chuỗi định dạng ngày/giờ tùy chỉnh. `MMM` hiển thị tên tháng viết tắt và `YYYY` hiển thị năm có bốn chữ số, do đó định dạng cột `Date[date]` có giá trị ngày là `MMM YYYY` tạo ra các giá trị như `Jan 2024`.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 298",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/298-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-299",
    "questionNumber": 299,
    "text": "You have a Power BI workspace that contains a semantic model and a report named Sales report.  \n  \nAll users in the sales department have the Viewer workspace role.  \n  \nThe Sales report is configured as shown in the Sales report exhibit. ![Question Image](https://cdn.examcademy.com/images/questions/1784205971481-ybd27r0w.png)  \n  \nFrom Power BI Desktop, you configure the Report settings as shown in the Report settings exhibit. ![Question Image](https://cdn.examcademy.com/images/questions/1784205975629-vx6s292p.png)  \n  \nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "A user can change a bar chart to a pie chart in the Sales report.",
        "correctAnswer": "Yes"
      },
      {
        "id": "2",
        "text": "A user can reshare their modified visuals with users outside of the sales department.",
        "correctAnswer": "No"
      },
      {
        "id": "3",
        "text": "A user can create a new quick measure and add it to a visual.",
        "correctAnswer": "No"
      }
    ],
    "options": [
      {
        "key": "Yes",
        "text": "Yes"
      },
      {
        "key": "No",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "1:Yes",
      "2:No",
      "3:No"
    ],
    "explanation": "Khi bật tính năng cá nhân hóa trực quan, người đọc báo cáo có thể thay đổi loại trực quan hóa, bao gồm thay đổi biểu đồ thanh thành biểu đồ hình tròn. Việc chia sẻ các thay đổi được cá nhân hóa yêu cầu cả quyền Đọc và Chia sẻ lại; vai trò không gian làm việc của Người xem không cung cấp quyền chia sẻ lại. Các thước đo nhanh được tạo ra dưới dạng các thước đo mẫu trong quá trình soạn thảo, thay vì thông qua cá nhân hóa hình ảnh dạng xem đọc.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1784205971481-ybd27r0w.png",
    "sourceTitle": "Examcademy PL-300 Question 299",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/299-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-300",
    "questionNumber": 300,
    "text": "You have a set of reports for your company’s HR department.  \n  \nYou need to create an HR visualization that displays historical employee counts and forecasts trends for the next six months.  \n  \nWhich visualization type should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "ribbon chart"
      },
      {
        "key": "B",
        "text": "scatter chart"
      },
      {
        "key": "C",
        "text": "line chart"
      },
      {
        "key": "D",
        "text": "key influencers"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Biểu đồ đường hiển thị số lượng nhân viên theo thời gian và hỗ trợ dự báo các giá trị trong tương lai từ các xu hướng lịch sử, bao gồm cả dự báo sáu tháng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 300",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/300-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-301",
    "questionNumber": 301,
    "text": "You need to provide access to the business-unit analysts.  \n  \nWhat should you configure?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Đối tượng ứng dụng Power BI cấp cho người tiêu dùng quyền truy cập vào ứng dụng mà không cần biến họ thành thành viên hoặc người xem của không gian làm việc. Quyền Xây dựng trên mô hình ngữ nghĩa (tập dữ liệu) cho phép người dùng tạo báo cáo và nội dung khác từ mô hình đó; Xóa và Chia sẻ lại không liên quan đến việc bật phân tích.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 301",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/301-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-302",
    "questionNumber": 302,
    "text": "You have a Power BI semantic model containing the following tables.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783742685542-9kyw1xwc.png)  \n  \nAll tables use the same data source.  \n  \nYou need to reduce the number of limited relationships in the model by changing the storage mode of certain tables. The solution must not affect data latency.  \n  \nWhich storage mode should you select for the Customer and Geography tables?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Chế độ lưu trữ kép cho phép các bảng thứ nguyên hoạt động dưới dạng Nhập hoặc DirectQuery cho mỗi truy vấn. Điều này tránh các mối quan hệ hạn chế với bảng Phản hồi khảo sát đã nhập trong khi vẫn duy trì quyền truy cập DirectQuery khi cần thiết, do đó độ trễ dữ liệu không thay đổi.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783742685542-9kyw1xwc.png",
    "sourceTitle": "Examcademy PL-300 Question 302",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/302-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-303",
    "questionNumber": 303,
    "text": "You have a Power BI report with the **Edit relationship** page open as shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1785752649707-nufbf56t.png)",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Với mối quan hệ một-nhiều và lọc một hướng, các bộ lọc chỉ di chuyển từ một phía (Bảng 1) sang nhiều phía (Bảng 2); bộ lọc Table2 không lọc Table1. Một hàng Table1 có khóa Table2 phù hợp với no sẽ tạo ra một giá trị Table2 trống có liên quan trong hình ảnh trực quan.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1785752649707-nufbf56t.png",
    "sourceTitle": "Examcademy PL-300 Question 303",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/303-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-304",
    "questionNumber": 304,
    "text": "HOTSPOT -  \n  \nYou need to create a visual like the one shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730526856-v0r3i568.jpg)  \n  \nThe indicator color for **Total Sales** will be based on **% Growth to Last Year**. The solution must use only the existing calculations. How should you configure the visual?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Áp dụng định dạng có điều kiện Màu nền cho trường Tổng doanh số và dựa trên các quy tắc sử dụng thước đo % tăng trưởng so với năm ngoái. Các quy tắc hỗ trợ các phạm vi giá trị riêng biệt và các màu được chỉ định, trong khi thang màu sử dụng dải màu và giá trị Trường yêu cầu trường có giá trị màu.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783730526856-v0r3i568.jpg",
    "sourceTitle": "Examcademy PL-300 Question 304",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/304-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-305",
    "questionNumber": 305,
    "text": "You plan to use Power Query Editor to retrieve data from an API.  \n  \nThe API returns a JSON response.  \n  \nYou have a username and password for the API.  \n  \nWhich data source and authentication method should you use to connect to the API?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Sử dụng trình kết nối Web để truy cập API HTTP; JSON là định dạng được điểm cuối đó trả về và được phân tích cú pháp từ phản hồi trên web. Xác thực cơ bản cung cấp tên người dùng và mật khẩu cùng với yêu cầu.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 305",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/305-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-306",
    "questionNumber": 306,
    "text": "You have the Power BI data model shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783732323058-ynfq07w4.png)  \n  \nCreate a measure that counts product categories with products sold during a selected period.  \n  \nHow should you complete the DAX expression?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "DISTINCTCOUNT đếm các giá trị duy nhất trong cột ProductCategory. TÍNH TOÁN chấp nhận biểu thức bảng làm bộ lọc; việc sử dụng Doanh số sẽ giới hạn số lượng danh mục ở các hàng Sản phẩm được liên kết với doanh số bán hàng trong ngữ cảnh bộ lọc ngày hiện tại. [CALCULATE function (DAX)](https://learn.microsoft.com/en-us/dax/calculate-function-dax) và [DISTINCTCOUNT function (DAX)](https://learn.microsoft.com/en-au/dax/distinctcount-function-dax) ghi lại các chức năng này.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783732323058-ynfq07w4.png",
    "sourceTitle": "Examcademy PL-300 Question 306",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/306-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-307",
    "questionNumber": 307,
    "text": "You have a Power BI data model containing two tables named Sales and Date. The Sales table has three measures named Order Quantity, Product Cost, and Sales Amount.  \n  \nYou need to create the visual shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783738918737-9d56lul2.png)  \n  \nIn which section of the Fields well should you add the measures?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Columns"
      },
      {
        "key": "B",
        "text": "Rows"
      },
      {
        "key": "C",
        "text": "Values"
      },
      {
        "key": "D",
        "text": "Drill through"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Các số đo ma trận được đặt trong trường **Giá trị**. Ma trận có thể hiển thị các giá trị đó dưới dạng hàng, trong khi trường Ngày cung cấp các cột năm; Power BI cung cấp cài đặt “Chuyển giá trị sang hàng” cho bố cục đó.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783738918737-9d56lul2.png",
    "sourceTitle": "Examcademy PL-300 Question 307",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/307-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-308",
    "questionNumber": 308,
    "text": "You use a custom connector that returns **ID**, **From**, **To**, **Subject**, **Body**, and **Has Attachments** for every email sent in the past year. More than 10 million records are returned.  \n  \nYou build a report that analyzes employees’ internal networks based on the people to whom they send emails.  \n  \nYou need to stop report recipients from reading the analyzed emails. The solution must minimize the model size.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From Model view, set the Subject and Body columns to Hidden."
      },
      {
        "key": "B",
        "text": "Remove the Subject and Body columns during the import."
      },
      {
        "key": "C",
        "text": "Implement row-level security (RLS) so that the report recipients can only see results based on the emails they sent."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Phân tích mạng email yêu cầu dữ liệu người gửi và người nhận chứ không phải nội dung Chủ đề hoặc Nội dung. Việc xóa các cột không cần thiết đó trong quá trình nhập sẽ loại trừ văn bản email nhạy cảm khỏi mô hình ngữ nghĩa và giảm kích thước của nó. Các trường ẩn vẫn còn trong mô hình và không phải là cơ chế bảo mật; Bảo mật cấp hàng giới hạn khả năng hiển thị của hàng nhưng không xóa các cột nội dung email. Microsoft khuyên bạn nên xóa các cột không phục vụ các yêu cầu về báo cáo hoặc cấu trúc mô hình.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 308",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/308-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-309",
    "questionNumber": 309,
    "text": "You have a Power BI semantic model named ModelA that contains the following columns:  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1784206198695-uqdosgtv.png)  \n  \nAll columns use the Text data type.  \n  \nBased on the model, you create a report named ReportA that contains these columns:  \n  \n- OrderID  \n- OrderDate  \n- CustomerID  \n- ShippingAddress  \n  \nReportA is the only report connected to ModelA.  \n  \nYou find that ReportA has performance issues caused by the size of ModelA.  \n  \nWhat should you do to optimize and reduce the size of ModelA?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Việc sử dụng Số nguyên cho mã định danh thứ tự số sẽ tránh lưu trữ ID dưới dạng văn bản và hỗ trợ mã hóa cột hiệu quả hơn. Việc xóa các cột mà báo cáo được kết nối no sử dụng sẽ làm giảm dung lượng bộ nhớ và dữ liệu được lưu trữ của mô hình ngữ nghĩa. Việc ẩn các cột chỉ thay đổi khả năng hiển thị của chúng đối với tác giả báo cáo; nó không xóa dữ liệu của họ khỏi mô hình.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1784206198695-uqdosgtv.png",
    "sourceTitle": "Examcademy PL-300 Question 309",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/309-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-310",
    "questionNumber": 310,
    "text": "You are using existing reports to create a dashboard that will be viewed frequently in portrait mode on mobile phones.  \n  \nYou need to build the dashboard.  \n  \nWhich four actions should you carry out, in sequence?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "step1",
        "text": "Slot 1:",
        "correctAnswer": "A"
      },
      {
        "id": "step2",
        "text": "Slot 2:",
        "correctAnswer": "B"
      },
      {
        "id": "step3",
        "text": "Slot 3:",
        "correctAnswer": "D"
      },
      {
        "id": "step4",
        "text": "Slot 4:",
        "correctAnswer": "E"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Pin items from the reports to the dashboard."
      },
      {
        "key": "B",
        "text": "Open the dashboard."
      },
      {
        "key": "C",
        "text": "Create a phone layout for the existing reports."
      },
      {
        "key": "D",
        "text": "Edit the Dashboard mobile view."
      },
      {
        "key": "E",
        "text": "Rearrange, resize, or remove items from the mobile layout."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Pin items from the reports to the dashboard."
      },
      {
        "key": "B",
        "text": "Open the dashboard."
      },
      {
        "key": "C",
        "text": "Create a phone layout for the existing reports."
      },
      {
        "key": "D",
        "text": "Edit the Dashboard mobile view."
      },
      {
        "key": "E",
        "text": "Rearrange, resize, or remove items from the mobile layout."
      }
    ],
    "correctAnswers": [
      "step1=A",
      "step2=B",
      "step3=D",
      "step4=E"
    ],
    "explanation": "Trang tổng quan Power BI bao gồm các ô được ghim từ hình ảnh báo cáo. Trải nghiệm di động dọc của nó được định cấu hình sau khi mở trang tổng quan và chọn trình chỉnh sửa chế độ xem trang tổng quan trên thiết bị di động, nơi các ô có thể được định vị lại, thay đổi kích thước hoặc xóa. Bố cục điện thoại báo cáo là một tính năng cấp báo cáo riêng biệt và không định cấu hình bố cục di động của trang tổng quan.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 310",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/310-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-311",
    "questionNumber": 311,
    "text": "You have a dataset containing revenue data from the previous year.  \n  \nYou need to use anomaly detection in Power BI to display anomalies in the dataset. What should you configure?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Tính năng phát hiện bất thường Power BI có sẵn cho hình ảnh biểu đồ đường chứa dữ liệu chuỗi thời gian trong trường Trục. Việc thêm trường ngày vào trục sẽ cung cấp thứ nguyên chuỗi thời gian cần thiết để phát hiện các giá trị doanh thu bất thường.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 311",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/311-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-312",
    "questionNumber": 312,
    "text": "You have a report in Power BI Desktop. You add a key influencers visual as shown in the exhibit. ![Question Image](https://cdn.examcademy.com/images/questions/1785751611781-mbaqwx0g.jpg)",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Một người có ảnh hưởng chính sẽ đánh giá trực quan các trường được đặt trong Giải thích theo các yếu tố ứng cử viên cho giá trị được đặt trong Phân tích, do đó, việc thêm các trường vào đó sẽ cho phép khám phá thêm những người có ảnh hưởng. Trong so sánh được hiển thị, mức tiêu hao trung bình là khoảng 0,30 đối với Làm thêm giờ = Yes và 0,10 đối với Làm thêm giờ = No; tỷ lệ là 3.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1785751611781-mbaqwx0g.jpg",
    "sourceTitle": "Examcademy PL-300 Question 312",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/312-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-313",
    "questionNumber": 313,
    "text": "In Power Query Editor, you have three queries named ProductCategory, ProductSubCategory, and Product.  \n  \nEvery Product has a ProductSubCategory. However, not every ProductsubCategory has a parent ProductCategory.  \n  \nYou must merge the three queries into one query while ensuring the best performance in Power Query. Each merge type may be used once, more than once, or not at all.  \n  \nHow should you merge the tables?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "slot1",
        "text": "Product → ProductSubCategory",
        "correctAnswer": "B"
      },
      {
        "id": "slot2",
        "text": "ProductSubCategory → ProductCategory",
        "correctAnswer": "D"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Full outer"
      },
      {
        "key": "B",
        "text": "Inner"
      },
      {
        "key": "C",
        "text": "Left anti"
      },
      {
        "key": "D",
        "text": "Left outer"
      },
      {
        "key": "E",
        "text": "Right anti"
      },
      {
        "key": "F",
        "text": "Right outer"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Full outer"
      },
      {
        "key": "B",
        "text": "Inner"
      },
      {
        "key": "C",
        "text": "Left anti"
      },
      {
        "key": "D",
        "text": "Left outer"
      },
      {
        "key": "E",
        "text": "Right anti"
      },
      {
        "key": "F",
        "text": "Right outer"
      }
    ],
    "correctAnswers": [
      "slot1=B",
      "slot2=D"
    ],
    "explanation": "Liên kết bên trong giữa Sản phẩm và ProductSubCategory giữ lại tất cả các hàng Sản phẩm vì mỗi Sản phẩm có một danh mục con phù hợp. Phép nối ngoài bên trái từ ProductSubCategory đến ProductCategory sẽ bảo toàn các danh mục con không có danh mục chính, đồng thời bao gồm các giá trị danh mục cho các kết quả trùng khớp.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 313",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/313-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-314",
    "questionNumber": 314,
    "text": "You have a Power BI report that contains a card. The card displays the value for year-to-date revenue.  \n  \nYou need to ensure that screen reader users can read the value when initially interacting with the card. The value must stay updated as the dataset is refreshed.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Convert the card into a text box."
      },
      {
        "key": "B",
        "text": "Add the value to the chart title text."
      },
      {
        "key": "C",
        "text": "Populate the alt text with a static value."
      },
      {
        "key": "D",
        "text": "Populate the alt text by using conditional formatting with a DAX measure."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Trình đọc màn hình truy cập văn bản thay thế để mô tả hình ảnh. Việc sử dụng định dạng có điều kiện với thước đo DAX sẽ đảm bảo văn bản thay thế cập nhật động với mỗi lần làm mới tập dữ liệu, cung cấp thông tin doanh thu hiện tại hàng năm cho người dùng có khả năng truy cập không có nội dung tĩnh.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 314",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/314-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-315",
    "questionNumber": 315,
    "text": "You have a Power BI tenant containing a workspace named WS1. WS1 includes the following items:  \n  \n- A semantic model named SM1.  \n- A report named RPT1 connected to SM1.  \n- A report named RPT2 connected to SM1.  \n- A report named RPT3 connected to SM1.  \n- A dashboard named DB1 containing content from RPT1 and RPT2.  \n  \nYou need to grant workspace access to a group named Group1. The solution must meet the following requirements:  \n  \n- Group1 must be able to view RPT1, RPT2, and DB1.  \n- Group1 must be prevented from viewing RPT3.  \n- Group1 must be prevented from creating new reports and dashboards by using SM1.  \n- Group1 must be prevented from sharing the reports and dashboards to other users.  \n- Administrative effort must be minimized.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Publish an app."
      },
      {
        "key": "B",
        "text": "Assign Group1 the Viewer role for WS1."
      },
      {
        "key": "C",
        "text": "Store PBIX files in a shared folder in Microsoft OneDrive."
      },
      {
        "key": "D",
        "text": "Share each item individually."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Ứng dụng Power BI có thể cấp quyền truy cập Group1 cho đối tượng đã chọn chứa RPT1, RPT2 và DB1 trong khi bỏ qua RPT3. Cài đặt đối tượng ứng dụng có thể từ chối quyền chia sẻ mô hình ngữ nghĩa cơ bản và xây dựng nội dung từ mô hình đó, mang lại cho Group1 trải nghiệm chỉ đọc mà không cần là thành viên không gian làm việc. Vai trò Người xem không gian làm việc sẽ hiển thị tất cả các mục không gian làm việc và ngầm cấp quyền Xây dựng trên các mô hình ngữ nghĩa.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 315",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/315-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-316",
    "questionNumber": 316,
    "text": "You have a Power BI report that contains one visual.  \n  \nYou need to provide users with the ability to change the visual type without affecting the view for other users.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From the Bookmarks pane, select Focus mode, and then select Add."
      },
      {
        "key": "B",
        "text": "From Report settings, select Personalize visuals."
      },
      {
        "key": "C",
        "text": "From Visual options in Report settings, select Use the modern visual header with updated styling options."
      },
      {
        "key": "D",
        "text": "From Tabular Editor, create a new perspective."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Tính năng **Cá nhân hóa hình ảnh** của cài đặt báo cáo cho phép mỗi người dùng tùy chỉnh chế độ xem báo cáo riêng của họ—bao gồm thay đổi loại hình ảnh—mà không ảnh hưởng đến trải nghiệm của người dùng khác. Việc cá nhân hóa của mỗi người dùng được lưu riêng tư vào phiên của họ.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 316",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/316-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-317",
    "questionNumber": 317,
    "text": "You have a Power BI tenant with reports that use financial datasets and are exported as PDF files.  \n  \nYou need to make sure that the reports are encrypted.  \n  \nWhat should you implement?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Intune policies"
      },
      {
        "key": "B",
        "text": "row-level security (RLS)"
      },
      {
        "key": "C",
        "text": "sensitivity labels"
      },
      {
        "key": "D",
        "text": "dataset certifications"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Nhãn nhạy cảm được định cấu hình với tính năng bảo vệ mã hóa tệp sẽ áp dụng biện pháp bảo vệ đó cho nội dung Power BI khi nội dung đó được xuất sang các định dạng được hỗ trợ, bao gồm cả PDF. Nhãn và cài đặt mã hóa của nó sẽ được chuyển sang tệp PDF đã xuất.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 317",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/317-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-318",
    "questionNumber": 318,
    "text": "Solution: In Power Query Editor, import the table and then add a filter step to the query.  \n  \nDoes this meet the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Đối với nguồn SQL Server quan hệ, Power Query có thể kết hợp bước lọc sớm vào truy vấn nguồn. Do đó, việc lọc được SQL Server thực hiện trước khi dữ liệu được nhập, chỉ cho phép tải một mẫu của bảng lớn.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 318",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/318-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-319",
    "questionNumber": 319,
    "text": "Solution: You create a DAX expression that uses the `FILTER` function.  \n  \nDoes this meet the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "DAX `FILTER` trả về một tập hợp con của bảng mô hình hoặc biểu thức hiện có để sử dụng trong tính toán; nó không giới hạn các hàng được nhập từ nguồn SQL Server. Để chỉ nhập một mẫu trong quá trình phát triển, hãy lọc hoặc giới hạn tập hợp hàng nguồn trong Power Query hoặc truy vấn nguồn trước khi tải bảng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 319",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/319-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-320",
    "questionNumber": 320,
    "text": "Solution: Add a `WHERE` clause to the SQL statement.  \n  \nDoes this achieve the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Mệnh đề SQL `WHERE` hạn chế các hàng được truy vấn nguồn trả về, do đó Power BI chỉ nhập tập hợp con đủ điều kiện của bảng `Order` thay vì tất cả các bản ghi. Truy vấn SQL gốc có thể được sử dụng để chỉ định nhập dữ liệu.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 320",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/320-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-321",
    "questionNumber": 321,
    "text": "Solution: You add a report-level filter based on the order date.  \n  \nDoes this meet the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Bộ lọc cấp báo cáo áp dụng cho tất cả các trang báo cáo và thay đổi dữ liệu được hiển thị bằng hình ảnh nhưng không làm giảm số hàng được tải trong quá trình nhập. Cần có bộ lọc nguồn hoặc cấp truy vấn để chỉ nhập một mẫu của bảng SQL Server.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 321",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/321-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-322",
    "questionNumber": 322,
    "text": "You use Performance analyzer to evaluate the performance of a visual in a Power BI report.  \n  \nIdentify the following log information:",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Trong Trình phân tích hiệu suất, **Truy vấn DAX** đo khoảng thời gian từ khi gửi truy vấn trực quan cho đến khi mô hình ngữ nghĩa hoặc mô hình Dịch vụ phân tích trả về kết quả. **Khác** bao gồm thời gian dành cho việc chuẩn bị truy vấn, chờ các hình ảnh khác hoàn tất và các hoạt động xử lý khác trong nền.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 322",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/322-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-323",
    "questionNumber": 323,
    "text": "You have a Power BI query named `Sales` that imports the columns shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783729985790-lmkqgzl7.jpg)  \n  \nUsers use only the date portion of the `Sales_Date` field. Only rows whose `Status` is `Finished` are used for analysis.  \n  \nYou need to reduce the query load times without affecting the analysis.  \n  \nWhich two actions achieve this goal? Each correct answer presents a complete solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Remove the rows in which Sales[Status] has a value of Canceled."
      },
      {
        "key": "B",
        "text": "Remove Sales[Sales_Date]."
      },
      {
        "key": "C",
        "text": "Change the data type of Sale[Delivery_Time] to Integer."
      },
      {
        "key": "D",
        "text": "Split Sales[Sale_Date] into separate date and time columns."
      },
      {
        "key": "E",
        "text": "Remove Sales[Canceled Date]."
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "Việc lọc các hàng bằng `Status` của `Canceled` sẽ giảm số lượng hàng đã nhập mà không xóa bất kỳ dữ liệu nào được sử dụng trong phân tích. Việc xóa `Canceled_Date` cũng làm giảm kích thước mô hình vì nó không cần thiết cho phân tích Chỉ hoàn thành. Hướng dẫn Power BI khuyến nghị chỉ tải các hàng và cột cần thiết để giảm kích thước mô hình nhập và cải thiện hiệu quả tải.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783729985790-lmkqgzl7.jpg",
    "sourceTitle": "Examcademy PL-300 Question 323",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/323-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-324",
    "questionNumber": 324,
    "text": "You are building a query for use as a Country dimension in a star schema.  \n  \nA snapshot of the source data appears in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783733370242-oasel2kz.png)  \n  \nYou need to create the dimension, which must include a list of unique countries.  \n  \nWhich two actions should you take? Each correct answer represents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Delete the Country column."
      },
      {
        "key": "B",
        "text": "Remove duplicates from the table."
      },
      {
        "key": "C",
        "text": "Remove duplicates from the City column."
      },
      {
        "key": "D",
        "text": "Delete the City column."
      },
      {
        "key": "E",
        "text": "Remove duplicates from the Country column."
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "Bảng thứ nguyên Quốc gia phải chứa chính xác một hàng cho mỗi quốc gia riêng biệt. Việc xóa cột Thành phố sẽ xóa thuộc tính tạo nhiều hàng cho mỗi quốc gia và xóa các bản sao khỏi cột Quốc gia để đảm bảo mỗi quốc gia xuất hiện chính xác một lần trong thứ nguyên.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783733370242-oasel2kz.png",
    "sourceTitle": "Examcademy PL-300 Question 324",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/324-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-325",
    "questionNumber": 325,
    "text": "You have a Microsoft 365 subscription that contains the resources shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783740420532-egd6ym7h.png)  \n  \nYou create a new dashboard that uses row-level security (RLS) filters. You define a new role named Consultants.  \n  \nTo which resource can you assign the Consultants role?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Group2"
      },
      {
        "key": "B",
        "text": "Team1"
      },
      {
        "key": "C",
        "text": "Sales reports"
      },
      {
        "key": "D",
        "text": "Group1"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Vai trò bảo mật cấp hàng trong Power BI chỉ có thể được chỉ định cho nhóm phân phối, nhóm bảo mật hỗ trợ thư hoặc nhóm bảo mật Microsoft Entra (hoặc người dùng cá nhân) — Nhóm và nhóm Microsoft 365 rõ ràng không được hỗ trợ và không gian làm việc như báo cáo Bán hàng không phải là nguyên tắc bảo mật mà vai trò RLS được gán cho. Trong số các tài nguyên được liệt kê, chỉ Group2 (nhóm hỗ trợ thư) đủ điều kiện làm mục tiêu gán vai trò RLS hợp lệ.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783740420532-egd6ym7h.png",
    "sourceTitle": "Examcademy PL-300 Question 325",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/325-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-326",
    "questionNumber": 326,
    "text": "You have a PBIX file containing sensitive information.  \n  \nYou must secure the information to meet these requirements:  \n  \n- Only internal users can open the file when it is shared by email.  \n- After the file is published, only internal users can open the semantic model and the report downloaded from the Power BI service.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From Microsoft Power BI Desktop, apply a sensitivity label."
      },
      {
        "key": "B",
        "text": "Certify the semantic model and the report."
      },
      {
        "key": "C",
        "text": "Use a live connection for the file."
      },
      {
        "key": "D",
        "text": "From the Power BI service, apply a sensitivity label."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Nhãn nhạy cảm được áp dụng trong Power BI Desktop có thể mã hóa tệp PBIX để chỉ những người dùng có quyền nội bộ được chỉ định của nhãn mới có thể mở tệp, kể cả khi tệp được gửi qua email. Khi tệp PBIX được gắn nhãn được xuất bản, nhãn của nó sẽ được áp dụng cho báo cáo kết quả và mô hình ngữ nghĩa, đồng thời khả năng bảo vệ đó vẫn tiếp tục khi nội dung được hỗ trợ được tải xuống từ dịch vụ Power BI.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 326",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/326-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-327",
    "questionNumber": 327,
    "text": "You are creating a Power BI report to analyze customer segments.  \n  \nYou need to dynamically identify customer segments based on Bounce Rate across dimensions such as source, geography, and demographics. The solution must minimize the analysis effort.  \n  \nWhich visualization type should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "decomposition tree"
      },
      {
        "key": "B",
        "text": "funnel chart"
      },
      {
        "key": "C",
        "text": "Q&A"
      },
      {
        "key": "D",
        "text": "key influencers"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Power BI Phân tích trực quan những yếu tố ảnh hưởng đến một chỉ số đã chọn và chế độ xem Phân đoạn hàng đầu của nó sẽ tự động phát hiện các phân đoạn được hình thành từ sự kết hợp của các thứ nguyên giải thích. Do đó, nó có thể xác định các phân khúc khách hàng được liên kết với Tỷ lệ thoát trên các trường nguồn, địa lý và nhân khẩu học đồng thời giảm phân tích thủ công.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 327",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/327-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-328",
    "questionNumber": 328,
    "text": "You use Power Query Editor to preview data in a column named Resource Location.  \n  \nThe column statistics and value distribution for Resource Location are shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1785752195518-74x29psp.png)",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Trong cấu hình cột Power Query, các giá trị đếm duy nhất chỉ xuất hiện một lần; Thống kê duy nhất của cột là 0. Miền Đông Hoa Kỳ có thanh phân phối giá trị lớn nhất, khiến nó trở thành giá trị Vị trí Nguồn lực thường xuyên nhất.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1785752195518-74x29psp.png",
    "sourceTitle": "Examcademy PL-300 Question 328",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/328-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-329",
    "questionNumber": 329,
    "text": "You use Power Query Editor to load two queries named Query1 and Query2.  \n  \nQuery1 produces the following error.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1784205957899-0kpn3077.png)  \n  \nQuery2 produces the following error.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1784205960394-74ewhlrj.png)  \n  \nWhich error type occurred for each query? Each error type may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "query1",
        "text": "Query1:",
        "correctAnswer": "D"
      },
      {
        "id": "query2",
        "text": "Query2:",
        "correctAnswer": "A"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Cell-level"
      },
      {
        "key": "B",
        "text": "OLAP cube"
      },
      {
        "key": "C",
        "text": "Provider"
      },
      {
        "key": "D",
        "text": "Step-level"
      },
      {
        "key": "E",
        "text": "WebView2"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Cell-level"
      },
      {
        "key": "B",
        "text": "OLAP cube"
      },
      {
        "key": "C",
        "text": "Provider"
      },
      {
        "key": "D",
        "text": "Step-level"
      },
      {
        "key": "E",
        "text": "WebView2"
      }
    ],
    "correctAnswers": [
      "query1=D",
      "query2=A"
    ],
    "explanation": "Cột bị thiếu là lỗi cấp độ vì phép biến đổi tham chiếu đến cột đó không thể đánh giá được. Chuyển đổi số không thành công cho giá trị riêng `NA` là lỗi cấp ô vì nó ảnh hưởng đến giá trị đó thay vì toàn bộ bước truy vấn.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1784205957899-0kpn3077.png",
    "sourceTitle": "Examcademy PL-300 Question 329",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/329-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-330",
    "questionNumber": 330,
    "text": "You have a table named DIMCountries that includes a column named Country, as shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783742678117-ykt3h634.png)  \n  \nYou plan to use DIMCountries as a dimension in a report.  \n  \nYou need to make sure that the Country column in DIMCountries contains each country only once.  \n  \nWhich two actions should you take on the Country column? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct answer is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Change Data category to Country."
      },
      {
        "key": "B",
        "text": "Remove duplicate values."
      },
      {
        "key": "C",
        "text": "Apply a clean transform."
      },
      {
        "key": "D",
        "text": "Replace the empty fields."
      },
      {
        "key": "E",
        "text": "Apply a Capitalize Each Word transform."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Biến đổi Sạch sẽ loại bỏ các ký tự không in được có thể tạo ra các giá trị quốc gia không hợp lệ hoặc dường như trống. Việc xóa các giá trị trùng lặp sẽ để lại một hàng duy nhất cho mỗi quốc gia; So sánh trùng lặp của Power Query không phân biệt chữ hoa chữ thường nên các biến thể viết hoa như Afghanistan và Afghanistan được coi là trùng lặp.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783742678117-ykt3h634.png",
    "sourceTitle": "Examcademy PL-300 Question 330",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/330-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-331",
    "questionNumber": 331,
    "text": "You use Power Query Editor to load data into Power BI Desktop from two Microsoft SharePoint Online lists named Customers and Locations.  \n  \nEach list has over 25,000 rows. Locations is referenced in Customers to create qualified values in a drop-down list.  \n  \nYou create the following query in Power Query Editor.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783745253594-372xvdjg.png)  \n  \nYou notice long load times and find that Power Query Editor calls the URL for every row in the final dataset.  \n  \nYou need to optimize the query while minimizing development effort.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Read the lists separately, and then merge the lists."
      },
      {
        "key": "B",
        "text": "Read the lists separately, and then append the lists."
      },
      {
        "key": "C",
        "text": "Create a custom function to read the referenced SharePoint list."
      },
      {
        "key": "D",
        "text": "Expand the referenced column of the query."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Việc mở rộng cột tra cứu/điều hướng SharePoint có thể khiến Power Query truy xuất bản ghi liên quan riêng biệt cho từng hàng Khách hàng. Việc đọc Khách hàng và Địa điểm một cách độc lập và hợp nhất chúng bằng mã định danh tra cứu sẽ truy xuất từng danh sách một lần và thực hiện thao tác mối quan hệ trong truy vấn, tránh các lệnh gọi mỗi hàng tới URL Địa điểm.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783745253594-372xvdjg.png",
    "sourceTitle": "Examcademy PL-300 Question 331",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/331-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-332",
    "questionNumber": 332,
    "text": "You use Power Query Editor to examine a query that includes a column named `Country`.  \n  \nYou need to see the following information for the `Country` column in Data preview:  \n  \n- The percentage of values that contain errors.  \n- The number of empty values.  \n  \nWhat should you enable?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Chất lượng cột hiển thị phần trăm giá trị hợp lệ, lỗi và trống. Cấu hình cột hiển thị số liệu thống kê chi tiết cho cột đã chọn, bao gồm cả số lượng giá trị trống.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 332",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/332-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-333",
    "questionNumber": 333,
    "text": "You have the Power BI model shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730769804-7kj2g7wx.jpg)  \n  \nThere are four departments in the Departments table.  \n  \nYou must ensure that users can view data only for their respective department. What should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create a slicer that filters Departments based on DepartmentID."
      },
      {
        "key": "B",
        "text": "Create a row-level security (RLS) role for each department, and then define the membership of the role."
      },
      {
        "key": "C",
        "text": "Create a DepartmentID parameter to filter the Departments table."
      },
      {
        "key": "D",
        "text": "To the ConfidentialData table, add a calculated measure that uses the CURRENTGROUP DAX function."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Bảo mật cấp hàng (RLS) hạn chế quyền truy cập dữ liệu bằng cách áp dụng bộ lọc hàng cho người dùng được chỉ định vai trò. Việc lọc từng bộ phận thông qua một vai trò RLS riêng biệt, với những người dùng thích hợp được gán cho vai trò đó, sẽ giới hạn các hàng Phòng ban hiển thị và truyền bá bộ lọc thông qua mối quan hệ một-nhiều DepartmentID với các hàng Dữ liệu bí mật có liên quan.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783730769804-7kj2g7wx.jpg",
    "sourceTitle": "Examcademy PL-300 Question 333",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/333-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-334",
    "questionNumber": 334,
    "text": "You have an Azure SQL database containing sales transactions. The database is updated frequently.  \n  \nYou need to create reports from the data to identify fraudulent transactions. The data must be visible within five minutes after an update.  \n  \nHow should you configure the data connection?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Add a SQL statement."
      },
      {
        "key": "B",
        "text": "Set the Command timeout in minutes setting."
      },
      {
        "key": "C",
        "text": "Set Data Connectivity mode to Import."
      },
      {
        "key": "D",
        "text": "Set Data Connectivity mode to DirectQuery."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "DirectQuery không nhập bản sao dữ liệu nguồn được lưu trong bộ nhớ cache. Báo cáo hình ảnh truy vấn Azure SQL database cơ bản, cho phép báo cáo sử dụng dữ liệu hiện tại và hỗ trợ khả năng hiển thị gần như thời gian thực. Import mode chỉ phản ánh các thay đổi nguồn sau khi mô hình ngữ nghĩa được làm mới. [Use DirectQuery in Power BI Desktop — Microsoft Learn](https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-use-directquery)",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 334",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/334-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-335",
    "questionNumber": 335,
    "text": "A business intelligence (BI) developer creates a Power BI dataflow that uses DirectQuery to access tables on an on-premises Microsoft SQL Server. The Enhanced Dataflows Compute Engine is enabled for the dataflow.  \n  \nYou need to use the dataflow in a report. The solution must meet these requirements:  \n  \n- Minimize online processing operations.  \n- Minimize calculation and visual-rendering times.  \n- Include current-year data through, and including, the prior day.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create a dataflows connection that has DirectQuery mode selected."
      },
      {
        "key": "B",
        "text": "Create a dataflows connection that has DirectQuery mode selected and configure a gateway connection for the dataset."
      },
      {
        "key": "C",
        "text": "Create a dataflows connection that has Import mode selected and schedule a daily refresh."
      },
      {
        "key": "D",
        "text": "Create a dataflows connection that has Import mode selected and create a Microsoft Power Automate solution to refresh the data hourly."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Import mode tải dữ liệu luồng dữ liệu vào bộ nhớ trong của mô hình ngữ nghĩa, do đó, hình ảnh báo cáo sẽ truy vấn mô hình đã nhập thay vì thực hiện các thao tác DirectQuery trực tuyến tại thời điểm tương tác. Điều này mang lại hiệu suất hình ảnh nhanh hơn. Làm mới theo lịch hàng ngày sẽ cập nhật dữ liệu đã nhập để bao gồm dữ liệu của ngày hôm trước. Microsoft lưu ý rằng DirectQuery trao đổi dữ liệu cập nhật để có hiệu suất báo cáo chậm hơn, trong khi Import mode trả về các truy vấn báo cáo từ các bảng và cột đã nhập.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 335",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/335-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-336",
    "questionNumber": 336,
    "text": "You have a Power BI semantic model containing a table named Employees.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783742757857-rajun772.png)  \n  \nAn employee is active when that employee's TermDate column has no value.  \n  \nYou need to create a DAX measure that counts active employees.  \n  \nHow should you complete the DAX expression?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "CALCULATE đánh giá một biểu thức trong ngữ cảnh bộ lọc đã sửa đổi. ISBLANK áp dụng cho Nhân viên[TermDate] chỉ giữ lại những nhân viên có ngày chấm dứt no và sau đó COUNTROWS tính các hàng nhân viên đang hoạt động đó.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783742757857-rajun772.png",
    "sourceTitle": "Examcademy PL-300 Question 336",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/336-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-337",
    "questionNumber": 337,
    "text": "You receive annual sales data that must be included in Power BI reports.  \n  \nFrom Power Query Editor, you connect to the Microsoft Excel source shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783732301781-y400r9er.png)  \n  \nYou need to create a report that meets these requirements:  \n  \n- Visualizes the Sales value over a period of years and months  \n- Adds a slicer for the month  \n- Adds a slicer for the year  \n  \nWhich three actions should you perform, in sequence?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "1",
        "text": "1",
        "correctAnswer": "A"
      },
      {
        "id": "2",
        "text": "2",
        "correctAnswer": "B"
      },
      {
        "id": "3",
        "text": "3",
        "correctAnswer": "C"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Select the Month and MonthNumber columns."
      },
      {
        "key": "B",
        "text": "Select Unpivot other columns."
      },
      {
        "key": "C",
        "text": "Rename the Attribute column as Year and the Value column as Sales."
      },
      {
        "key": "D",
        "text": "Select the 2019, 2020, and 2021 columns."
      },
      {
        "key": "E",
        "text": "Select Transpose."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Select the Month and MonthNumber columns."
      },
      {
        "key": "B",
        "text": "Select Unpivot other columns."
      },
      {
        "key": "C",
        "text": "Rename the Attribute column as Year and the Value column as Sales."
      },
      {
        "key": "D",
        "text": "Select the 2019, 2020, and 2021 columns."
      },
      {
        "key": "E",
        "text": "Select Transpose."
      }
    ],
    "correctAnswers": [
      "1=A",
      "2=B",
      "3=C"
    ],
    "explanation": "Bỏ xoay các cột khác giữ Tháng và Số Tháng làm trường định danh và thay đổi các cột năm thành cặp Thuộc tính/Giá trị. Việc đổi tên các trường đã tạo đó thành Năm và Doanh số sẽ tạo ra một bảng dữ kiện được chuẩn hóa hỗ trợ các bộ cắt Tháng và Năm riêng biệt cũng như xu hướng Bán hàng trên cả hai thứ nguyên.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783732301781-y400r9er.png",
    "sourceTitle": "Examcademy PL-300 Question 337",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/337-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-338",
    "questionNumber": 338,
    "text": "You create a Power BI workspace called Workspace1.  \n  \nYou publish a semantic model and a report to Workspace1.  \n  \nYou need to configure Workspace1 to meet these requirements:  \n  \n- Provide access to a group named Sales.  \n- Ensure that Sales can invite additional users to Workspace1.  \n- Apply the principle of least privilege.  \n  \nWhich role should you assign to Sales?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Contributor"
      },
      {
        "key": "B",
        "text": "Member"
      },
      {
        "key": "C",
        "text": "Admin"
      },
      {
        "key": "D",
        "text": "Viewer"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Vai trò Thành viên Power BI có thể thêm người dùng vào không gian làm việc với các quyền thấp hơn, điều này cho phép Bộ phận bán hàng mời người dùng. Nó cung cấp khả năng này mà không cần có quyền quản trị rộng hơn do vai trò Quản trị viên cấp.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 338",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/338-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-339",
    "questionNumber": 339,
    "text": "You have a Power BI report that contains the visual shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783740962331-cpz85y1z.png)  \n  \nYou need to make the visual more accessible to users who have color vision deficiency.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Change the font color of values in the Sales column to white."
      },
      {
        "key": "B",
        "text": "Change the red background color to orange."
      },
      {
        "key": "C",
        "text": "Add additional measures to the table values."
      },
      {
        "key": "D",
        "text": "Add icons to represent the sales status of each product."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Các biểu tượng cung cấp các chỉ báo trực quan không phải màu sắc mà người dùng bị suy giảm thị lực màu sắc có thể phân biệt. Nguyên tắc tiếp cận cấm chỉ dựa vào màu sắc để truyền đạt ý nghĩa. Sự thay đổi màu chữ (A) và thay đổi màu nền (B) vẫn phụ thuộc vào khả năng phân biệt màu sắc. Các biện pháp bổ sung (C) không giải quyết được vấn đề cơ bản về khả năng tiếp cận.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783740962331-cpz85y1z.png",
    "sourceTitle": "Examcademy PL-300 Question 339",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/339-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-340",
    "questionNumber": 340,
    "text": "You have more than 100 published datasets.  \n  \nTen datasets have been verified as meeting your corporate quality standards.  \n  \nYou need to ensure that the 10 verified datasets appear at the top of the published-dataset list whenever users search for existing datasets.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Promote the datasets."
      },
      {
        "key": "B",
        "text": "Certify the datasets."
      },
      {
        "key": "C",
        "text": "Feature the dataset on the home page."
      },
      {
        "key": "D",
        "text": "Publish the datasets in an app."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Chứng nhận cho thấy rằng người đánh giá được tổ chức ủy quyền đã xác định rằng nội dung đáp ứng các tiêu chuẩn chất lượng của tổ chức cũng như đáng tin cậy và có thẩm quyền. Bộ dữ liệu được chứng nhận là nội dung được chứng thực, được ưu tiên trong tìm kiếm.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 340",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/340-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-341",
    "questionNumber": 341,
    "text": "You have a Power BI semantic model named Model1 that contains sales data.  \n  \nYou need to make sure that Model1 refreshes on the first day of every month to include the previous month’s sales data.  \n  \nWhat should you configure?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a scheduled refresh"
      },
      {
        "key": "B",
        "text": "an incremental refresh"
      },
      {
        "key": "C",
        "text": "a Microsoft Power Automate flow"
      },
      {
        "key": "D",
        "text": "an on-premises data gateway"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Làm mới theo lịch trình xác định tần suất định kỳ và các khoảng thời gian để làm mới mô hình ngữ nghĩa Power BI, do đó, mô hình này có thể được định cấu hình để làm mới vào ngày đầu tiên của mỗi tháng và tải dữ liệu bán hàng của tháng trước.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 341",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/341-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-342",
    "questionNumber": 342,
    "text": "You have a dataset named Pens with these columns:  \n  \n- Item  \n- Unit Price  \n- Quantity Ordered  \n  \nYou need a visualization that displays the relationship between Unit Price and Quantity Ordered. The solution must highlight orders with similar unit prices and ordered quantities.  \n  \nWhich visualization type and feature should you use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Biểu đồ phân tán được thiết kế để hiển thị mối quan hệ giữa hai giá trị số, ở đây là Số lượng đặt hàng và Đơn giá, với Mục xác định các đơn hàng được vẽ. Khả năng phân cụm của nó tự động tìm các nhóm điểm dữ liệu có giá trị tương tự, làm nổi bật các đơn hàng có giá và số lượng tương tự.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 342",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/342-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-343",
    "questionNumber": 343,
    "text": "HOTSPOT -  \n  \nYou have a Power BI tenant that contains the datasets shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730621822-hl3ks5ut.png)  \n  \nYou have these requirements:  \n  \n- Exporting reports that contain Personally Identifiable Information (PII) must be prevented.  \n- Data used to make financial decisions must be reviewed and approved before it is used.  \n  \nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "The Sales dataset requires a sensitivity label.",
        "correctAnswer": "Yes"
      },
      {
        "id": "2",
        "text": "The Operations dataset requires a sensitivity label and must be certified.",
        "correctAnswer": "No"
      },
      {
        "id": "3",
        "text": "The Finance dataset requires a sensitivity label and must be certified.",
        "correctAnswer": "No"
      }
    ],
    "options": [
      {
        "key": "Yes",
        "text": "Yes"
      },
      {
        "key": "No",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "1:Yes",
      "2:No",
      "3:No"
    ],
    "explanation": "Nhãn nhạy cảm bảo vệ nội dung Power BI nhạy cảm khi nội dung đó rời khỏi dịch vụ thông qua các đường dẫn xuất được hỗ trợ, do đó, tập dữ liệu chứa PII lương nhân viên cần có nhãn. Chứng nhận là sự chứng thực cho nội dung đáng tin cậy đã được xem xét và phê duyệt, do đó, nó áp dụng cho tập dữ liệu Tài chính được sử dụng để lập kế hoạch ngân sách và báo cáo hội đồng quản trị. Bộ dữ liệu Hoạt động không nêu PII cũng như trường hợp sử dụng quyết định tài chính. Tài chính yêu cầu chứng nhận chứ không phải nhãn nhạy cảm vì no PII được nêu.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783730621822-hl3ks5ut.png",
    "sourceTitle": "Examcademy PL-300 Question 343",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/343-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-344",
    "questionNumber": 344,
    "text": "You have a Microsoft Excel workbook with two sheets named Sheet1 and Sheet2. Sheet1 contains the table named Table1.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783729766549-51h89m7t.png)  \n  \nSheet2 contains the table named Table2.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783729769680-vzwdqlvs.png)  \n  \nUse Power Query Editor to combine the products from Table1 and Table2 into the following single-column table with no duplicate values.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783729772702-s0ls4amx.png)  \n  \nWhich three actions should you perform, in sequence?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "step1",
        "text": "Slot 1:",
        "correctAnswer": "D"
      },
      {
        "id": "step2",
        "text": "Slot 2:",
        "correctAnswer": "E"
      },
      {
        "id": "step3",
        "text": "Slot 3:",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "From Power Query Editor, remove errors from the table."
      },
      {
        "key": "B",
        "text": "From Power Query Editor, select Table1, and then select Remove duplicates."
      },
      {
        "key": "C",
        "text": "From Power Query Editor, merge Table1 and Table2."
      },
      {
        "key": "D",
        "text": "From Power BI Desktop, import the data from Excel, and select Table1 and Table2."
      },
      {
        "key": "E",
        "text": "From Power Query Editor, append Table2 to Table1."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "From Power Query Editor, remove errors from the table."
      },
      {
        "key": "B",
        "text": "From Power Query Editor, select Table1, and then select Remove duplicates."
      },
      {
        "key": "C",
        "text": "From Power Query Editor, merge Table1 and Table2."
      },
      {
        "key": "D",
        "text": "From Power BI Desktop, import the data from Excel, and select Table1 and Table2."
      },
      {
        "key": "E",
        "text": "From Power Query Editor, append Table2 to Table1."
      }
    ],
    "correctAnswers": [
      "step1=D",
      "step2=E",
      "step3=B"
    ],
    "explanation": "Tải cả hai bảng Excel, nối Bảng2 vào Bảng1 để hợp nhất các hàng của chúng, sau đó xóa các bản sao khỏi cột sản phẩm Bảng1 kết quả. Việc bổ sung sẽ bảo toàn tất cả các giá trị từ cả hai bảng; thay vào đó, việc hợp nhất sẽ thực hiện một phép nối.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783729766549-51h89m7t.png",
    "sourceTitle": "Examcademy PL-300 Question 344",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/344-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-345",
    "questionNumber": 345,
    "text": "HOTSPOT  \n  \nYou are using Power Query Editor to preview data in a column named Max Temp. The column statistics and value distribution appear in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1785695719842-cfk3s9oh.png)  \n  \nUse the drop-down menus to choose the answer that completes each statement based on the graphic.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Chế độ là 45 vì nó có tần số cao nhất trong phân phối giá trị. Thống kê cột tối thiểu là 24, là giá trị không NULL nhỏ nhất.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1785695719842-cfk3s9oh.png",
    "sourceTitle": "Examcademy PL-300 Question 345",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/345-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-346",
    "questionNumber": 346,
    "text": "In Power BI Desktop, you are building a report that will have three pages.  \n  \nYou need to create a custom tooltip page and get the page ready for use.  \n  \nWhich three actions should you take? Each correct answer represents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "For the tooltip page, set Allow use as tooltip to On."
      },
      {
        "key": "B",
        "text": "For the target page, set Allow use as tooltip to On."
      },
      {
        "key": "C",
        "text": "Configure filters on the target visual."
      },
      {
        "key": "D",
        "text": "For the tooltip page, configure filters."
      },
      {
        "key": "E",
        "text": "Add and configure visuals on the tooltip page."
      }
    ],
    "correctAnswers": [
      "A",
      "D",
      "E"
    ],
    "explanation": "Việc tạo chú giải công cụ trang báo cáo tùy chỉnh yêu cầu bật cài đặt **Cho phép sử dụng làm chú giải công cụ** trên chính trang chú giải công cụ, thêm hình ảnh để hiển thị nội dung của nó và định cấu hình các bộ lọc để kiểm soát ngữ cảnh và dữ liệu được hiển thị khi chú giải công cụ được kích hoạt bằng cách di chuột lên hình ảnh mục tiêu.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 346",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/346-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-347",
    "questionNumber": 347,
    "text": "You use Power BI Desktop to build a Power BI data model and a blank report.  \n  \nYou need to add the Word Cloud visual shown in the following exhibit to the report.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783733330655-kysvd89b.png)  \n  \nThe solution must require the least development effort.  \n  \nWhich three actions should you perform, in order?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "step1",
        "text": "Slot 1:",
        "correctAnswer": "C"
      },
      {
        "id": "step2",
        "text": "Slot 2:",
        "correctAnswer": "E"
      },
      {
        "id": "step3",
        "text": "Slot 3:",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "From a web browser, download the PBIVIZ file for the Word Cloud visual from Microsoft AppSource."
      },
      {
        "key": "B",
        "text": "Format the data colors and title."
      },
      {
        "key": "C",
        "text": "From Power BI Desktop, get the Word Cloud visual from Microsoft AppSource."
      },
      {
        "key": "D",
        "text": "Populate the drillthrough fields."
      },
      {
        "key": "E",
        "text": "Populate the Category, Value, and Excludes fields."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "From a web browser, download the PBIVIZ file for the Word Cloud visual from Microsoft AppSource."
      },
      {
        "key": "B",
        "text": "Format the data colors and title."
      },
      {
        "key": "C",
        "text": "From Power BI Desktop, get the Word Cloud visual from Microsoft AppSource."
      },
      {
        "key": "D",
        "text": "Populate the drillthrough fields."
      },
      {
        "key": "E",
        "text": "Populate the Category, Value, and Excludes fields."
      }
    ],
    "correctAnswers": [
      "step1=C",
      "step2=E",
      "step3=B"
    ],
    "explanation": "Power BI Desktop có thể thêm hình ảnh tùy chỉnh trực tiếp từ AppSource. Sau đó, hình ảnh Word Cloud được định cấu hình bằng cách cung cấp các trường Danh mục, Giá trị và Loại trừ, đồng thời bản trình bày của nó—bao gồm màu sắc và tiêu đề—được điều chỉnh trong khung Định dạng. Việc tải xuống và nhập tệp PBIVIZ là không cần thiết và các trường thông tin chi tiết không định cấu hình hình ảnh.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783733330655-kysvd89b.png",
    "sourceTitle": "Examcademy PL-300 Question 347",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/347-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-348",
    "questionNumber": 348,
    "text": "You must create a semantic model in Power BI Desktop. The solution must meet these requirements:  \n  \n- The model must include a table named Orders with one row for each order. Every row must contain the total amount for that order.  \n- Orders must be filtered by the selected CustomerID value.  \n- Users must choose the CustomerID value from a list.  \n- The customer list must be sourced from OData.  \n  \nWhich three objects should you create in Power Query Editor? Each correct answer represents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "an Orders query that has a filter on CustomerID"
      },
      {
        "key": "B",
        "text": "a Customers query that has a filter on CustomerID"
      },
      {
        "key": "C",
        "text": "an Orders query that has a single column containing a list of customers"
      },
      {
        "key": "D",
        "text": "a Customers query that has a single column containing a list of customer IDs"
      },
      {
        "key": "E",
        "text": "a parameter for CustomerID that uses a query to populate the suggested values"
      },
      {
        "key": "F",
        "text": "a parameter for CustomerID that uses manually entered values to populate the suggested values"
      }
    ],
    "correctAnswers": [
      "A",
      "D",
      "E"
    ],
    "explanation": "Tham số Power Query có thể lấy các giá trị được đề xuất từ ​​truy vấn danh sách. Truy vấn Khách hàng tạo ra danh sách CustomerID từ nguồn OData sẽ cung cấp các giá trị đó, trong khi tham số CustomerID hiển thị chúng để lựa chọn. Truy vấn Đơn hàng sử dụng tham số đó để lọc đơn hàng cho khách hàng đã chọn.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 348",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/348-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-349",
    "questionNumber": 349,
    "text": "You have a Power BI report named report1 that uses a shared dataset.  \n  \nYou need to minimize the risk of data exfiltration from the report. The solution must not affect other reports.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Clear Allow recipients to share your dashboard and Allow users to build new content using the underlying datasets for the dataset."
      },
      {
        "key": "B",
        "text": "Apply row-level security (RLS) to the shared dataset."
      },
      {
        "key": "C",
        "text": "Select the Allow end users to export both summarized and underlying data from the service or Report Server Export data option for the report."
      },
      {
        "key": "D",
        "text": "Select the Don't allow end users to export any data from the service or Report Server Export data option for the report."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Cài đặt cấp báo cáo **Không cho phép người dùng cuối xuất bất kỳ dữ liệu nào từ dịch vụ hoặc Máy chủ báo cáo** sẽ ngăn chặn việc xuất dữ liệu hình ảnh cơ bản và tóm tắt từ báo cáo đó, giảm rủi ro bị đánh cắp mà không thay đổi quyền hoặc quy tắc bảo mật trên tập dữ liệu được chia sẻ mà các báo cáo khác sử dụng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 349",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/349-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-350",
    "questionNumber": 350,
    "text": "You need to reduce the dataset size. The solution must satisfy the report requirements.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Group the Categories table by the CategoryID column."
      },
      {
        "key": "B",
        "text": "Remove the QuantityPerUnit column from the Products table."
      },
      {
        "key": "C",
        "text": "Filter out discontinued products while importing the Products table."
      },
      {
        "key": "D",
        "text": "Change the OrderID column in the Orders table to the Text data type."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Việc xóa cột Số lượngPerUnit khỏi bảng Sản phẩm sẽ giảm kích thước mô hình bằng cách loại trừ trường không cần thiết trong khi vẫn giữ lại dữ liệu sản phẩm cần thiết để báo cáo.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 350",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/350-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-351",
    "questionNumber": 351,
    "text": "Solution: Remove the **Salesperson** table.  \n  \nDoes the solution achieve the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Một bảng dữ kiện chứa các cột khóa thứ nguyên thiết lập thứ nguyên của nó. Vì Bộ phận bán hàng giữ lại cả ID nhân viên bán hàng và ID thành phố nên doanh số bán hàng có thể được tổng hợp và nhóm theo ID nhân viên bán hàng và thành phố sau khi xóa bảng Nhân viên bán hàng. Bảng đã xóa có các thuộc tính no ngoài ID nhân viên bán hàng, do đó, bảng này cung cấp trường bổ sung no cần thiết cho phân tích đó. [Microsoft Learn: Understand star schema and the importance for Power BI](https://learn.microsoft.com/en-us/power-bi/guidance/star-schema)",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 351",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/351-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-352",
    "questionNumber": 352,
    "text": "Solution: Remove the `ProductID` column from the `Sales` table.  \n  \nDoes this achieve the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Việc đếm doanh số bán hàng theo nhân viên bán hàng và thành phố yêu cầu các hàng Doanh số cộng với các khóa mối quan hệ `SalespersonID` và `CityID`. `ProductID` không bắt buộc đối với nhóm đó hoặc cho cả mối quan hệ đang hoạt động, do đó, nó có thể bị xóa để giảm kích thước mô hình nhập. Microsoft khuyên bạn nên xóa các cột mô hình không phục vụ mục đích báo cáo cũng như cấu trúc mô hình.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 352",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/352-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-353",
    "questionNumber": 353,
    "text": "Solution: You remove the `CityID` column from the `Sales` table.  \n  \nDoes this satisfy the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Một bảng dữ kiện yêu cầu các cột khóa thứ nguyên của nó để thiết lập mối quan hệ và xác định thứ nguyên của nó. Việc xóa `Sales[CityID]` sẽ loại bỏ mối quan hệ hiện hoạt với `CityData`, do đó, không thể áp dụng bộ lọc thành phố cho các giá trị Bán hàng. Do đó, tổng doanh số bán hàng không thể được phân tích bởi nhân viên bán hàng ở mỗi thành phố.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 353",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/353-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-354",
    "questionNumber": 354,
    "text": "Solution: You aggregate the data in the Sales table by SalesPersonID.  \n  \nDoes this achieve the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Bảng tổng hợp phải giữ lại các khóa nhóm cần thiết cho việc phân tích cần thiết. Chỉ tổng hợp theo `SalesPersonID` kết hợp doanh số bán hàng của từng nhân viên bán hàng trên tất cả các thành phố và xóa dữ liệu thực tế cấp thành phố cần thiết để tính toán doanh số bán hàng cho mỗi nhân viên bán hàng ở mỗi thành phố. [Microsoft Learn: Grouping or summarizing rows](https://learn.microsoft.com/en-us/power-query/group-by)",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 354",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/354-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-355",
    "questionNumber": 355,
    "text": "You need to create a visual that supports ad hoc exploration of data, as shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730797958-eifcy2q5.jpg)  \n  \nWhich type of visual should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "smart narrative"
      },
      {
        "key": "B",
        "text": "decomposition tree"
      },
      {
        "key": "C",
        "text": "Q&A"
      },
      {
        "key": "D",
        "text": "key influencers"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Hình ảnh cây phân rã chia nhỏ thước đo tổng hợp trên nhiều thứ nguyên và cho phép người dùng đi sâu vào các thứ nguyên đó theo bất kỳ thứ tự nào. Nó được thiết kế để thăm dò đặc biệt và phân tích nguyên nhân gốc rễ.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783730797958-eifcy2q5.jpg",
    "sourceTitle": "Examcademy PL-300 Question 355",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/355-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-356",
    "questionNumber": 356,
    "text": "You have a Microsoft Power BI report. The PBIX file size is 550 MB. The report is accessed through an App workspace in the shared capacity of powerbi.com.  \n  \nThe report uses an imported dataset that includes one fact table. The fact table has 12 million rows. The dataset is scheduled to refresh twice daily, at 08:00 and 17:00.  \n  \nThe report has a single page containing 15 AppSource visuals and 10 default visuals.  \n  \nUsers report that visuals load slowly when they access and interact with the report.  \n  \nYou need to recommend a solution to improve report performance.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Change any DAX measures to use iterator functions."
      },
      {
        "key": "B",
        "text": "Remove unused columns from tables in the data model."
      },
      {
        "key": "C",
        "text": "Replace the default visuals with AppSource visuals."
      },
      {
        "key": "D",
        "text": "Increase the number of times that the dataset is refreshed."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Việc xóa các cột không cần thiết cho báo cáo hoặc cấu trúc mô hình sẽ giảm kích thước mô hình đã nhập và mức tiêu thụ tài nguyên. Một mô hình nhỏ hơn, gọn gàng hơn có thể cải thiện hiệu suất truy vấn mô hình ngữ nghĩa cũng như hiệu suất tải và tương tác của hình ảnh.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 356",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/356-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-357",
    "questionNumber": 357,
    "text": "You have a Power BI table named Customer with a field named Email Address. Multiple records have the same email address.  \n  \nCreate a calculated column that identifies records with duplicate email addresses. Each value may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "function",
        "text": "Slot 1:",
        "correctAnswer": "B"
      },
      {
        "id": "expression",
        "text": "Slot 2:",
        "correctAnswer": "C"
      },
      {
        "id": "filter",
        "text": "Slot 3:",
        "correctAnswer": "A"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "ALL"
      },
      {
        "key": "B",
        "text": "CALCULATE"
      },
      {
        "key": "C",
        "text": "COUNTROWS"
      },
      {
        "key": "D",
        "text": "EVALUATE"
      },
      {
        "key": "E",
        "text": "SUM"
      },
      {
        "key": "F",
        "text": "SUMX"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "ALL"
      },
      {
        "key": "B",
        "text": "CALCULATE"
      },
      {
        "key": "C",
        "text": "COUNTROWS"
      },
      {
        "key": "D",
        "text": "EVALUATE"
      },
      {
        "key": "E",
        "text": "SUM"
      },
      {
        "key": "F",
        "text": "SUMX"
      }
    ],
    "correctAnswers": [
      "function=B",
      "expression=C",
      "filter=A"
    ],
    "explanation": "TÍNH TOÁN đánh giá lại COUNTROWS(Khách hàng) trong bối cảnh bộ lọc đã sửa đổi được xây dựng từ hai đối số bộ lọc: ALL(Khách hàng) xóa các bộ lọc hiện có của bảng và điều kiện Khách hàng[Địa chỉ email] = Email hạn chế số lượng các hàng chia sẻ địa chỉ email của hàng hiện tại. COUNTROWS(Khách hàng) sau đó trả về số lượng bản ghi có địa chỉ email đó, do đó, kết quả lớn hơn một sẽ xác định bản sao.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 357",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/357-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-358",
    "questionNumber": 358,
    "text": "You create a report using Microsoft Power BI Desktop.  \n  \nThe report uses data from a Microsoft SQL Server Analysis Services (SSAS) cube on your company's internal network. You plan to publish the report to the Power BI Service.  \n  \nWhat should you implement to ensure that users who consume the report through the Power BI Service have the most current data from the cube?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "an OData feed"
      },
      {
        "key": "B",
        "text": "an On-premises data gateway"
      },
      {
        "key": "C",
        "text": "a subscription"
      },
      {
        "key": "D",
        "text": "a scheduled refresh of the dataset"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Cổng dữ liệu tại chỗ cung cấp kết nối an toàn giữa dịch vụ Power BI và phiên bản SSAS tại chỗ. Nó hỗ trợ các kết nối trực tiếp SSAS, cho phép người tiêu dùng báo cáo truy cập dữ liệu khối hiện tại.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 358",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/358-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-359",
    "questionNumber": 359,
    "text": "You have a Power BI semantic model called Model1 that includes a table named Sales. Sales has a column named SalesAmount. Model1 includes a measure named Total Sales that sums the SalesAmount column.  \n  \nYou need to create a measure that reports year-to-date sales revenue for the previous year.  \n  \nWhich DAX formula should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "PYTD Sales = CALCULATE([Total Sales], DATEADD(‘Date’[Date], -1, YEAR))"
      },
      {
        "key": "B",
        "text": "PYTD Sales = CALCULATE([Total Sales], DATEADD(DATESYTD(‘Date’[Date]), -1, YEAR))"
      },
      {
        "key": "C",
        "text": "PYTD Sales = TOTALYTD([Total Sales], ‘Date’[Date], FILTER(‘Date’, ‘Date’[Date] < TODAY()))"
      },
      {
        "key": "D",
        "text": "PYTD Sales = CALCULATE([Total Sales], DATESYTD(‘Date’[Date]))"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "`DATESYTD` trả về ngày tính từ đầu năm trong ngữ cảnh hiện tại. `DATEADD(., -1, YEAR)` chuyển toàn bộ phạm vi ngày đó trở lại một năm và `CALCULATE` đánh giá `Total Sales` theo phạm vi đã thay đổi, tạo ra doanh thu từ đầu năm đến nay.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 359",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/359-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-360",
    "questionNumber": 360,
    "text": "You have a Power BI report containing five bookmarks.  \n  \nYou need to add an object to the report that lets users navigate among three specific bookmarks.  \n  \nComplete the task by dragging the appropriate actions to the correct steps. An action may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "second_step",
        "text": "Second step:",
        "correctAnswer": "D"
      },
      {
        "id": "third_step",
        "text": "Third step:",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Add a Bookmark button."
      },
      {
        "key": "B",
        "text": "Change the Bookmark property for the button."
      },
      {
        "key": "C",
        "text": "Group the other two bookmarks."
      },
      {
        "key": "D",
        "text": "Group the three bookmarks."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Add a Bookmark button."
      },
      {
        "key": "B",
        "text": "Change the Bookmark property for the button."
      },
      {
        "key": "C",
        "text": "Group the other two bookmarks."
      },
      {
        "key": "D",
        "text": "Group the three bookmarks."
      }
    ],
    "correctAnswers": [
      "second_step=D",
      "third_step=B"
    ],
    "explanation": "Trình điều hướng Dấu trang có thể được giới hạn trong một nhóm dấu trang cụ thể. Nhóm ba dấu trang mà người dùng nên truy cập, sau đó định cấu hình thuộc tính Dấu trang của trình điều hướng để sử dụng nhóm đó; nhóm hai cái còn lại sẽ làm lộ ra các dấu trang sai.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 360",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/360-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-361",
    "questionNumber": 361,
    "text": "You need to retrieve data from Microsoft SQL Server tables.  \n  \nWhat should you use to configure the connection?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Import that uses a Microsoft account"
      },
      {
        "key": "B",
        "text": "Import that uses a database credential"
      },
      {
        "key": "C",
        "text": "DirectQuery that uses a database credential"
      },
      {
        "key": "D",
        "text": "DirectQuery that uses the end-user's credentials"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Quá trình nhập thích hợp để tải dữ liệu bảng SQL Server khi yêu cầu truy vấn nguồn hoặc thời gian thực no được chỉ định. Trình kết nối SQL Server hỗ trợ xác thực cơ sở dữ liệu bằng tên người dùng và mật khẩu; thông tin đăng nhập của người dùng cuối chỉ có liên quan khi đăng nhập một lần được định cấu hình cụ thể.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 361",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/361-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-362",
    "questionNumber": 362,
    "text": "You are creating a Power BI model in Power BI Desktop.  \n  \nYou need to create a calculated table named Numbers that contains all integers from -100 to 100.  \n  \nHow should you complete the DAX calculation?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "GENERATESERIES trả về một bảng một cột chứa dãy số học. Bắt đầu từ -100, kết thúc ở 100 và tăng dần 1 sẽ trả về mọi số nguyên trong phạm vi bao gồm được yêu cầu.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 362",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/362-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-363",
    "questionNumber": 363,
    "text": "You have a Power BI semantic model that connects to a streaming data source. The data source is updated frequently.  \n  \nYou need to create a Power BI report that meets the following requirements:  \n  \n• Supports real-time analytics  \n\n• Minimizes performance impact on the data source  \n\n• Displays the most recent data without performing a data refresh  \n  \nWhich connectivity mode should you use for the dataset?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "DirectQuery mode"
      },
      {
        "key": "B",
        "text": "import mode"
      },
      {
        "key": "C",
        "text": "LiveConnect mode"
      },
      {
        "key": "D",
        "text": "push mode"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Bộ dữ liệu đẩy nhận dữ liệu được ứng dụng nguồn đẩy trực tiếp vào Power BI thông qua API REST, do đó, báo cáo luôn hiển thị các giá trị mới nhất ngay lập tức với tính năng làm mới theo lịch trình no và no lặp lại truy vấn nguồn, giảm thiểu tải trên đó. Ngược lại, DirectQuery phải truy vấn nguồn mỗi khi hình ảnh được hiển thị, điều này sẽ làm tăng tải trên nguồn phát trực tuyến cập nhật thường xuyên thay vì giảm thiểu nó.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 363",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/363-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-364",
    "questionNumber": 364,
    "text": "You have a Power BI workspace named Workspace1 and a group named Group1.  \n  \nYou need to ensure that Group1 members receive notifications when issues occur in Workspace1. The solution must adhere to the principle of least privilege.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Assign Group1 the Admin role."
      },
      {
        "key": "B",
        "text": "Update the contact list to include Group1."
      },
      {
        "key": "C",
        "text": "Assign Group1 the Contributor role for Workspace1."
      },
      {
        "key": "D",
        "text": "Assign Group1 the Member role for Workspace1."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Danh sách liên hệ trong không gian làm việc có thể bao gồm một nhóm có thành viên nhận được thông báo về các sự cố xảy ra trong không gian làm việc. Điều này cung cấp khả năng thông báo cần thiết mà không cần cấp các vai trò không gian làm việc nhóm hoặc quyền truy cập.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 364",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/364-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-365",
    "questionNumber": 365,
    "text": "You have a Power BI imported dataset that contains the data model shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730013799-ml376y85.jpg)  \n  \nUse the drop-down menus to choose the answer choice that completes each statement based on the information shown.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Lọc chéo hai chiều yêu cầu xử lý bổ sung và có thể làm giảm hiệu suất truy vấn báo cáo, do đó, lọc theo một hướng được ưu tiên trừ khi việc truyền bá hai chiều được yêu cầu cụ thể. Một bảng giống thực tế trung tâm được kết nối trực tiếp với các bảng nhiều chiều là một lược đồ hình sao.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783730013799-ml376y85.jpg",
    "sourceTitle": "Examcademy PL-300 Question 365",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/365-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-366",
    "questionNumber": 366,
    "text": "You need to create a solution that meets the warehouse shipping department’s notification requirements.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Thẻ Power BI có thể được ghim vào trang tổng quan dưới dạng ô xếp. Cảnh báo dữ liệu được định cấu hình trên các ô bảng thông tin được hỗ trợ, bao gồm cả ô thẻ và thông báo cho người dùng khi giá trị của ô vượt qua ngưỡng được định cấu hình. Chế độ xem điện thoại thay đổi cách trình bày trên thiết bị di động, trong khi đăng ký là việc phân phối theo lịch trình thay vì cảnh báo được kích hoạt theo giá trị.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 366",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/366-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-367",
    "questionNumber": 367,
    "text": "You are building a report in Power BI Desktop.  \n  \nYou load a data extract that contains a free-text field named `coll`.  \n  \nYou need to analyze the frequency distribution of string lengths in `col1`. The solution must not affect the model size.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "In the report, add a DAX calculated column that calculates the length of col1"
      },
      {
        "key": "B",
        "text": "In the report, add a DAX function that calculates the average length of col1"
      },
      {
        "key": "C",
        "text": "From Power Query Editor, add a column that calculates the length of col1"
      },
      {
        "key": "D",
        "text": "From Power Query Editor, change the distribution for the Column profile to group by length for col1"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Biểu đồ phân phối giá trị cấu hình cột của Power Query Editor có thể nhóm các giá trị văn bản theo độ dài văn bản, tạo ra mức phân bổ tần suất bắt buộc mà không cần thêm cột vào mô hình dữ liệu. Microsoft ghi lại tùy chọn Nhóm theo và hiển thị cụ thể các giá trị văn bản được nhóm theo độ dài văn bản.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 367",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/367-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-368",
    "questionNumber": 368,
    "text": "You are building a Power BI report that will include multiple visuals.  \n  \nYou need to ensure the report is accessible for users who rely on a screen reader.  \n  \nWhich two configurations should you perform? Each correct answer represents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "consistent fonts for each visual"
      },
      {
        "key": "B",
        "text": "alt text for each visual"
      },
      {
        "key": "C",
        "text": "the tab order for each page"
      },
      {
        "key": "D",
        "text": "consistent colors for each visual"
      },
      {
        "key": "E",
        "text": "Play Axis for each page"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Văn bản thay thế cung cấp giải pháp thay thế mang tính mô tả cho từng hình ảnh có ý nghĩa mà trình đọc màn hình thông báo khi hình ảnh nhận được tiêu điểm. Việc định cấu hình thứ tự tab trên mỗi trang báo cáo sẽ cung cấp trình tự điều hướng hợp lý cho người dùng bàn phím và trình đọc màn hình.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 368",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/368-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-369",
    "questionNumber": 369,
    "text": "You have a Microsoft Power BI dashboard. The report used to create the dashboard uses an imported dataset from a Microsoft SQL Server data source.  \n  \nThe dashboard appears in the exhibit. (Click the Exhibit tab.)  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1786827795875-k47v7cou.png)  \n  \nWhat happened at 12:03:06 PM?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "A new transaction was added to the data source."
      },
      {
        "key": "B",
        "text": "The dashboard tile cache refreshed."
      },
      {
        "key": "C",
        "text": "A user added a comment to a tile."
      },
      {
        "key": "D",
        "text": "A user pressed F5."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Dấu thời gian làm mới trang tổng quan cho biết Power BI đã làm mới dữ liệu được lưu trong bộ nhớ đệm mà các ô của nó sử dụng. Làm mới ô bảng thông tin là một phần của quá trình xử lý làm mới Power BI; bản thân nó không chứng minh một giao dịch nguồn mới hoặc một hành động của người dùng như thêm nhận xét hoặc nhấn F5. Đối với Nhập mô hình ngữ nghĩa, các ngăn xếp sẽ tự động cập nhật trong quá trình làm mới dữ liệu theo lịch trình hoặc theo yêu cầu.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1786827795875-k47v7cou.png",
    "sourceTitle": "Examcademy PL-300 Question 369",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/369-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-370",
    "questionNumber": 370,
    "text": "You have a Power BI report with three pages that analyze sales across various countries.  \n  \nA slicer named Country has been added to each report page.  \n  \nConfigure the report to meet the following requirements. Each task may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "requirement1",
        "text": "When a user selects a country on the first page, the report must filter the other pages:",
        "correctAnswer": "B"
      },
      {
        "id": "requirement2",
        "text": "The second and third pages must display only the filtered results:",
        "correctAnswer": "D"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Add the Country field to the filters on all the pages"
      },
      {
        "key": "B",
        "text": "Configure the Country slicer to sync across all the pages"
      },
      {
        "key": "C",
        "text": "Configure the Country slicer to sync only on the second and third pages"
      },
      {
        "key": "D",
        "text": "Hide the Country slicer on the second and third pages"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Add the Country field to the filters on all the pages"
      },
      {
        "key": "B",
        "text": "Configure the Country slicer to sync across all the pages"
      },
      {
        "key": "C",
        "text": "Configure the Country slicer to sync only on the second and third pages"
      },
      {
        "key": "D",
        "text": "Hide the Country slicer on the second and third pages"
      }
    ],
    "correctAnswers": [
      "requirement1=B",
      "requirement2=D"
    ],
    "explanation": "Đồng bộ hóa bộ cắt Quốc gia trên tất cả các trang sẽ tạo ra lựa chọn trên hình ảnh bộ lọc trang đầu tiên trên trang thứ hai và thứ ba. Bộ cắt được đồng bộ hóa có thể vẫn hoạt động trên một trang khi bị ẩn, do đó, việc ẩn nó trên trang thứ hai và thứ ba sẽ đảm bảo các trang đó hiển thị kết quả đã lọc mà không hiển thị bộ cắt.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 370",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/370-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-371",
    "questionNumber": 371,
    "text": "Solution: You assign every user the Viewer role for the workspace.  \n  \nDoes this achieve the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Vai trò Người xem cấp quyền truy cập chỉ đọc vào tất cả nội dung trong không gian làm việc, thay vì chỉ truy cập vào các bảng thông tin và báo cáo đã chọn. Điều này cũng sẽ cấp quyền truy cập vào bảng điều khiển và báo cáo còn lại.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 371",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/371-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-372",
    "questionNumber": 372,
    "text": "Solution: Create an Azure Active Directory group that includes all users. Share each selected report and the one dashboard with the group.  \n  \nDoes this meet the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Power BI hỗ trợ chia sẻ trực tiếp các báo cáo và trang tổng quan với các nhóm bảo mật và nội dung được chia sẻ cấp cho người nhận quyền truy cập đọc. Do đó, một nhóm bảo mật chứa tất cả người dùng tổ chức có thể được sử dụng để cấp cho những người dùng đó quyền truy cập vào ba báo cáo đã chọn và một trang tổng quan.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 372",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/372-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-373",
    "questionNumber": 373,
    "text": "Solution: You publish an app to the entire organization.  \n  \nDoes this achieve the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Gói ứng dụng Power BI có các bảng thông tin và báo cáo được chọn lọc dành cho đối tượng người tiêu dùng. Đối tượng ứng dụng có thể được đặt cho toàn bộ tổ chức, cấp cho người dùng tổ chức quyền truy cập vào nội dung được đưa vào. [Microsoft Learn: Publish an app in Power BI](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-create-distribute-apps)",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 373",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/373-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-374",
    "questionNumber": 374,
    "text": "Solution: Enable **Included in app** for every asset.  \n  \nDoes this achieve the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Yes"
      },
      {
        "key": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Ứng dụng Power BI có thể được xuất bản cho toàn bộ tổ chức và nội dung của nó được chọn từ không gian làm việc. Việc bao gồm mọi nội dung sẽ hiển thị cả trang tổng quan và tất cả năm báo cáo, không chỉ một trang tổng quan và ba báo cáo mà người dùng tổ chức phải có khả năng đọc. Nội dung ứng dụng phải được giới hạn ở nội dung dự định.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 374",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/374-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-375",
    "questionNumber": 375,
    "text": "You have a Power BI report with five pages.  \n  \nPages 1 through 4 are visible, while page 5 is hidden.  \n  \nYou need to create a solution that lets users quickly navigate from the first page to every other visible page. The solution must minimize development and maintenance effort as pages are added to the report.  \n  \nWhat should you do first?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Add a blank button to page 1."
      },
      {
        "key": "B",
        "text": "Add a page navigation button to page 1."
      },
      {
        "key": "C",
        "text": "Create a bookmark for each page."
      },
      {
        "key": "D",
        "text": "Add a bookmark navigation button to page 1."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Trình điều hướng trang Power BI tự động tạo các nút điều hướng cho các trang báo cáo và luôn được đồng bộ hóa khi các trang được thêm, xóa hoặc đổi tên. Cài đặt trang của nó có thể loại trừ các trang ẩn, khiến nó trở thành tùy chọn có mức bảo trì thấp nhất để chỉ điều hướng đến các trang hiển thị.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 375",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/375-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-376",
    "questionNumber": 376,
    "text": "You use Power BI Desktop to connect to an Azure SQL database. The connection is configured as shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783732072678-xk1mhr7u.png)  \n  \nUse the drop-down menus to choose the answer that completes each statement based on the information in the graphic.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Trình kết nối Azure SQL Database sử dụng thời gian chờ lệnh mặc định là 10 phút khi nhập giá trị no. Xóa Điều hướng bằng cách sử dụng giới hạn phân cấp đầy đủ Điều hướng đến các bảng có cột và hàng chứa dữ liệu.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783732072678-xk1mhr7u.png",
    "sourceTitle": "Examcademy PL-300 Question 376",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/376-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-377",
    "questionNumber": 377,
    "text": "You are building a dashboard by using the Power BI service.  \n  \nYou have an existing report page that includes three charts.  \n  \nYou need to add the charts to the dashboard while preserving the interactivity between them.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Edit interactions in the report and set all interactions to Filter."
      },
      {
        "key": "B",
        "text": "Pin each chart as a tile."
      },
      {
        "key": "C",
        "text": "Edit the dashboard theme and pin each chart as a tile."
      },
      {
        "key": "D",
        "text": "Pin the report page as a live tile."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Ô trực tiếp được tạo bằng cách ghim toàn bộ trang báo cáo sẽ giữ lại hoạt động tương tác của trang báo cáo, bao gồm lọc chéo và đánh dấu chéo giữa các hình ảnh trực quan của nó. Các ô biểu đồ được ghim riêng lẻ là ảnh chụp nhanh trang tổng quan riêng biệt và không duy trì các tương tác đó.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 377",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/377-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-378",
    "questionNumber": 378,
    "text": "Model1 supports reports viewed in the Power BI service and contains data from the following sources:  \n  \n- An Azure SQL database accessible only through a private endpoint  \n- A Microsoft Excel file stored in Microsoft SharePoint Online  \n- A Microsoft SQL Server database in a private datacenter  \n  \nYou must publish Model1 and schedule its refresh 12 times per day. How many data sources need a data gateway, and which workspace license mode supports the scheduled refresh?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Cần có một cổng cho điểm cuối riêng tư Azure SQL Database và trung tâm dữ liệu riêng tư SQL Server vì dịch vụ Power BI không thể truy cập trực tiếp vào các mạng riêng tư đó. SharePoint Online là nguồn đám mây và không yêu cầu cổng. Power BI Pro cho phép tối đa tám lần làm mới theo lịch trình mỗi ngày, trong khi Premium Per User cho phép tối đa 48 lần, do đó, 12 lần làm mới hàng ngày cần có PPU.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 378",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/378-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-379",
    "questionNumber": 379,
    "text": "You have a Power BI semantic model named Model1 that includes data from an on-premises Microsoft SQL Server database.  \n  \nYou need to ensure that Model1 refreshes every morning at 06:00 AM. The solution must minimize administrative effort.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From Power BI Desktop, refresh Model1 and republish the model daily."
      },
      {
        "key": "B",
        "text": "From the Power BI service, configure a scheduled refresh of Model1."
      },
      {
        "key": "C",
        "text": "Use a SQL Server Agent job to call the Power BI REST API and trigger a refresh."
      },
      {
        "key": "D",
        "text": "From Power BI Desktop, enable a background data refresh of Model1."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Làm mới theo lịch trình dịch vụ Power BI cho phép làm mới mô hình ngữ nghĩa tại các khe thời gian đã định cấu hình. Đối với nguồn SQL Server tại chỗ, mô hình ngữ nghĩa phải được kết nối thông qua cổng dữ liệu tại chỗ được cài đặt và đang chạy; sau khi được định cấu hình, lịch trình dịch vụ sẽ cung cấp tính năng làm mới hàng ngày mà không cần xuất bản lại theo cách thủ công hoặc tự động hóa tùy chỉnh.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 379",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/379-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-380",
    "questionNumber": 380,
    "text": "You use Power Query Editor to preview a column named Date as shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783740962635-go45cgg8.png)  \n  \nYou need to change the Date column to contain only the year. The solution must minimize administrative effort.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Split the column by delimiter."
      },
      {
        "key": "B",
        "text": "Split the column by number of characters."
      },
      {
        "key": "C",
        "text": "Extract the text after the delimiter."
      },
      {
        "key": "D",
        "text": "Transform the column to contain only the year."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Power Query Editor cung cấp menu Chuyển đổi tích hợp sẵn với các hàm Ngày trích xuất trực tiếp thành phần năm từ cột ngày. Đây là cách trực tiếp nhất và yêu cầu nỗ lực quản trị tối thiểu so với chia theo dấu phân cách (A), chia theo số ký tự (B) hoặc trích xuất văn bản (C), đòi hỏi nhiều bước thủ công hơn.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783740962635-go45cgg8.png",
    "sourceTitle": "Examcademy PL-300 Question 380",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/380-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-381",
    "questionNumber": 381,
    "text": "You are building a Power BI model to analyze inventory.  \n  \nYou load data into three tables named Date, Product, and Inventory. The Inventory table is related to the Date and Product tables by one-to-many relationships.  \n  \nInventory data is captured every day without exception. The correct inventory quantity for a product in a month is its final recorded value for that month.  \n  \nYou need to create a DAX measure that displays the correct inventory value when users analyze inventory by year, month, or date.  \n  \nHow should you complete the measure?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "`CALCULATE` đánh giá lại số lượng hàng tồn kho bằng bộ lọc ngày được thay thế bằng ngày được `LASTDATE` trả về. `LASTDATE('Date'[Date])` trả về ngày cuối cùng trong ngữ cảnh năm, tháng hoặc ngày hiện tại; Vì hàng tồn kho được ghi chép hàng ngày nên số lượng của nó là giá trị tồn kho cuối kỳ được yêu cầu.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 381",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/381-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-382",
    "questionNumber": 382,
    "text": "You have a CSV file containing user complaints. It includes a column named `Logged`, which contains the date and time when each complaint occurred. The `Logged` data uses the following format: `2018-12-31 at 08:59`.  \n  \nYou need to analyze complaints by their logged date and use a built-in date hierarchy.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Apply a transformation to extract the first 11 characters of the logged column."
      },
      {
        "key": "B",
        "text": "Add a conditional column that outputs 2018 if the Logged column starts with 2018 and set the data type of the new column to Whole Number."
      },
      {
        "key": "C",
        "text": "Create a column by example that starts with 2018-12-31 and set the data type of the new column to Date."
      },
      {
        "key": "D",
        "text": "Apply a transformation to extract the last 11 characters of the Logged column and set the data type of the new column to Date."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Power BI tạo Hệ thống phân cấp ngày tự động cho các cột đủ điều kiện có loại dữ liệu Ngày hoặc Ngày/Giờ. Một cột có nguồn gốc là `2018-12-31` và được gán loại Ngày cung cấp trường chỉ ngày hợp lệ, cho phép phân tích theo ngày và phân cấp Năm, Quý, Tháng và Ngày tích hợp sẵn.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 382",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/382-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-383",
    "questionNumber": 383,
    "text": "You have a Power BI semantic model that contains two queries.  \n  \nYou discover that a report based on the model has performance issues.  \n  \nYou plan to use Power Query to reduce the data loaded to the model.  \n  \nWhich two actions should you perform? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct answer is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Apply group by and summarize techniques."
      },
      {
        "key": "B",
        "text": "Combine the queries by using Append."
      },
      {
        "key": "C",
        "text": "Remove unnecessary columns and rows."
      },
      {
        "key": "D",
        "text": "Combine the queries by using Merge."
      },
      {
        "key": "E",
        "text": "Create a new query group."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Việc áp dụng các kỹ thuật nhóm và tóm tắt (A) sẽ giảm dữ liệu bằng cách tổng hợp dữ liệu và loại bỏ các cột và hàng không cần thiết (C) trực tiếp làm giảm kích thước tập dữ liệu. Cả hai hành động đều giảm khối lượng dữ liệu được tải vào mô hình, cải thiện hiệu suất. Việc thêm và hợp nhất các truy vấn sẽ kết hợp dữ liệu mà không làm giảm kích thước. Nhóm truy vấn chỉ là công cụ tổ chức và không ảnh hưởng đến hiệu suất.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 383",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/383-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-384",
    "questionNumber": 384,
    "text": "You need to create the Top Customers report.  \n  \nWhich filter type should you use, and at which level should you apply it?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Bộ lọc Top N xếp hạng khách hàng theo thước đo và giữ các mục có thứ hạng cao nhất. Bộ lọc Top N được hỗ trợ ở cấp độ trực quan, cho phép giới hạn hình ảnh của Khách hàng hàng đầu mà không cần lọc mọi hình ảnh trên trang hoặc báo cáo.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 384",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/384-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-385",
    "questionNumber": 385,
    "text": "You need to create the On-Time Shipping report. The report must contain a visualization that displays the percentage of late orders.  \n  \nWhich visualization type should you create?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "pie chart"
      },
      {
        "key": "B",
        "text": "scatterplot"
      },
      {
        "key": "C",
        "text": "bar chart"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Biểu đồ hình tròn hiển thị tỷ trọng của từng danh mục trong tổng thể, giúp biểu đồ này phù hợp để hiển thị tỷ lệ phần trăm đơn hàng bị trễ so với tất cả các đơn hàng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 385",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/385-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-386",
    "questionNumber": 386,
    "text": "You use Power Query Editor to preview the data in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783733796287-xqxv6vxu.png)  \n  \nYou need to clean and transform the query so that every data row is retained and error values in the **discount** column are replaced with a discount of 0.05. The solution must minimize administrative effort.  \n  \nWhich three actions should you perform, in sequence?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "step1",
        "text": "Slot 1:",
        "correctAnswer": "A"
      },
      {
        "id": "step2",
        "text": "Slot 2:",
        "correctAnswer": "C"
      },
      {
        "id": "step3",
        "text": "Slot 3:",
        "correctAnswer": "E"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Select the discount column."
      },
      {
        "key": "B",
        "text": "Select the price column."
      },
      {
        "key": "C",
        "text": "For the discount column, change Data Type to Decimal Number."
      },
      {
        "key": "D",
        "text": "For the discount column, change Data Type to Whole Number."
      },
      {
        "key": "E",
        "text": "Select Replace Errors to replace each error value with 0.05."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Select the discount column."
      },
      {
        "key": "B",
        "text": "Select the price column."
      },
      {
        "key": "C",
        "text": "For the discount column, change Data Type to Decimal Number."
      },
      {
        "key": "D",
        "text": "For the discount column, change Data Type to Whole Number."
      },
      {
        "key": "E",
        "text": "Select Replace Errors to replace each error value with 0.05."
      }
    ],
    "correctAnswers": [
      "step1=A",
      "step2=C",
      "step3=E"
    ],
    "explanation": "Giá trị chiết khấu là giá trị phân số, do đó Số thập phân giữ nguyên các giá trị như 0,08 và 0,03. Việc thay thế các lỗi trong cột đã chọn bằng 0,05 sẽ giữ lại các hàng; lọc hoặc loại bỏ lỗi sẽ không.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783733796287-xqxv6vxu.png",
    "sourceTitle": "Examcademy PL-300 Question 386",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/386-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-387",
    "questionNumber": 387,
    "text": "You have a Microsoft Excel file stored on a file server.  \n  \nYou create a Power BI report and import a table from that Excel file. You then publish the report.  \n  \nYou need to make sure the data refreshes every four hours.  \n  \nWhat should you do first?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Upload the Excel file to a Power BI workspace."
      },
      {
        "key": "B",
        "text": "Create a subscription to the report."
      },
      {
        "key": "C",
        "text": "Deploy an on-premises data gateway."
      },
      {
        "key": "D",
        "text": "Edit the data source credentials."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Cổng dữ liệu tại chỗ phải được cài đặt và chạy trước khi dịch vụ Power BI có thể kết nối với máy chủ tệp tại chỗ và thực hiện làm mới dữ liệu đã nhập theo lịch trình. Sau khi cổng được triển khai và định cấu hình, mô hình ngữ nghĩa có thể được liên kết với nguồn dữ liệu của nó và được lên lịch làm mới bốn giờ một lần.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 387",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/387-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-388",
    "questionNumber": 388,
    "text": "You have a Power BI report named Report1 and a dashboard named Dashboard1. Report1 includes a line chart named **Sales by month**.  \n  \nYou pin the **Sales by month** visual to Dashboard1.  \n  \nIn Report1, you change the **Sales by month** visual to a bar chart.  \n  \nYou need to make sure that the bar chart appears on Dashboard1.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Refresh the dataset used by Report1 and Dashboard1."
      },
      {
        "key": "B",
        "text": "Pin the Sales by month bar chart to Dashboard1."
      },
      {
        "key": "C",
        "text": "Select Refresh visuals for Dashboard1."
      },
      {
        "key": "D",
        "text": "Edit the details for the dashboard tile of Dashboard1."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Ô bảng điều khiển được ghim sẽ giữ lại loại hình ảnh đã được ghim. Việc thay đổi hình ảnh báo cáo từ biểu đồ đường thành biểu đồ thanh sẽ không cập nhật loại biểu đồ của ô hiện có, do đó, biểu đồ thanh đã cập nhật phải được ghim vào trang tổng quan.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 388",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/388-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-389",
    "questionNumber": 389,
    "text": "In Power BI Desktop, you have a dataset that contains a table.  \n  \nYou create a table visual on a Power BI report page, as shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730294938-j9m1g1ea.jpg)  \n  \nYou need to configure the visual to display the referenced image instead of the URL in the Plant Image column.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From the Formatting tab, select Values, and then set URL icons to On for the table."
      },
      {
        "key": "B",
        "text": "Set the Data category of the Plant Image field to Web URL."
      },
      {
        "key": "C",
        "text": "Set the Data type of the Plant Image field to Binary."
      },
      {
        "key": "D",
        "text": "Set the Data category of the Plant Image field to Image URL."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Power BI hiển thị cột có giá trị URL dưới dạng hình ảnh trong hình ảnh bảng khi danh mục Dữ liệu của cột được đặt thành **URL hình ảnh**. Danh mục URL Web xử lý các giá trị dưới dạng liên kết thay vì nguồn hình ảnh.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783730294938-j9m1g1ea.jpg",
    "sourceTitle": "Examcademy PL-300 Question 389",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/389-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-390",
    "questionNumber": 390,
    "text": "After creating the profit and loss dataset, which four actions should be completed, in sequence, so business-unit analysts see the appropriate profit and loss data?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "step1",
        "text": "Slot 1:",
        "correctAnswer": "D"
      },
      {
        "id": "step2",
        "text": "Slot 2:",
        "correctAnswer": "B"
      },
      {
        "id": "step3",
        "text": "Slot 3:",
        "correctAnswer": "E"
      },
      {
        "id": "step4",
        "text": "Slot 4:",
        "correctAnswer": "C"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "From powerbi.com, assign the analysts the Contributor role to the workspace."
      },
      {
        "key": "B",
        "text": "From Power BI Desktop, add a Table Filter DAX Expression to the roles."
      },
      {
        "key": "C",
        "text": "From powerbi.com, add role members to the roles."
      },
      {
        "key": "D",
        "text": "From Power BI Desktop, create four roles."
      },
      {
        "key": "E",
        "text": "From Power BI Desktop, publish the dataset to powerbi.com."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "From powerbi.com, assign the analysts the Contributor role to the workspace."
      },
      {
        "key": "B",
        "text": "From Power BI Desktop, add a Table Filter DAX Expression to the roles."
      },
      {
        "key": "C",
        "text": "From powerbi.com, add role members to the roles."
      },
      {
        "key": "D",
        "text": "From Power BI Desktop, create four roles."
      },
      {
        "key": "E",
        "text": "From Power BI Desktop, publish the dataset to powerbi.com."
      }
    ],
    "correctAnswers": [
      "step1=D",
      "step2=B",
      "step3=E",
      "step4=C"
    ],
    "explanation": "Xác định các vai trò RLS và bộ lọc bảng DAX của chúng trong Máy tính để bàn Power BI, sau đó xuất bản mô hình ngữ nghĩa. Chỉ định người dùng cho các vai trò đó trong dịch vụ Power BI sau khi xuất bản. RLS hạn chế không gian làm việc Người xem; nó không hạn chế Quản trị viên, Thành viên hoặc Người đóng góp trong không gian làm việc, vì vậy Người đóng góp không phù hợp với những nhà phân tích chỉ phải xem dữ liệu đã lọc.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 390",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/390-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-391",
    "questionNumber": 391,
    "text": "You must enable a user to add members to a workspace while following the principle of least privilege.  \n  \nWhich role should be assigned to the user?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Viewer"
      },
      {
        "key": "B",
        "text": "Admin"
      },
      {
        "key": "C",
        "text": "Contributor"
      },
      {
        "key": "D",
        "text": "Member"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Vai trò Thành viên cho phép thêm thành viên không gian làm việc và người dùng có quyền thấp hơn mà không cần cấp toàn bộ khả năng quản trị của vai trò Quản trị viên. Vai trò Cộng tác viên và Người xem không cung cấp khả năng quản lý thành viên này.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 391",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/391-manage-and-secure-power-bi",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-392",
    "questionNumber": 392,
    "text": "You have a column named `UnitsInStock`, as shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1785751600479-gr3znv17.jpg)  \n  \n`UnitsInStock` has 75 non-null values, of which 51 are unique.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Cột không được tóm tắt là trường nhóm trong hình ảnh bảng, do đó, đầu ra chứa 51 giá trị `UnitsInStock` không rỗng riêng biệt. Việc đặt cột thành một tập hợp sẽ tạo ra một tập hợp thay vì một nhóm giá trị riêng biệt; không có cột nhóm khác, điều này làm giảm số lượng hàng.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1785751600479-gr3znv17.jpg",
    "sourceTitle": "Examcademy PL-300 Question 392",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/392-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-393",
    "questionNumber": 393,
    "text": "You have a Power BI semantic model containing two tables named Sales and Forecast. Both tables have a date column.  \n  \nYou need to create a calculated table that covers the date range in both tables.  \n  \nHow should you complete the DAX expression?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "CALENDAR trả về một bảng ngày liền kề giữa ngày bắt đầu và ngày kết thúc. MINX trả về ngày Bán hàng sớm nhất và MAXX trả về ngày Dự báo mới nhất, tạo ra bảng ngày bao gồm phạm vi Bán hàng và Dự báo.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "sourceTitle": "Examcademy PL-300 Question 393",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/393-model-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-394",
    "questionNumber": 394,
    "text": "You are preparing a financial report in Power BI. You connect to data in a Microsoft Excel spreadsheet by using Power Query Editor, as shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730095796-mu1dgrk5.jpg)  \n  \nYou must prepare the data to support the following:  \n  \n- Visualizations that include every measure over time  \n- Year-over-year calculations for all measures  \n  \nWhich four actions should you perform, in sequence?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "step1",
        "text": "Slot 1:",
        "correctAnswer": "D"
      },
      {
        "id": "step2",
        "text": "Slot 2:",
        "correctAnswer": "F"
      },
      {
        "id": "step3",
        "text": "Slot 3:",
        "correctAnswer": "C"
      },
      {
        "id": "step4",
        "text": "Slot 4:",
        "correctAnswer": "G"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Use headers as the first row."
      },
      {
        "key": "B",
        "text": "Rename the Measure column as Year."
      },
      {
        "key": "C",
        "text": "Rename the Attribute column as Year."
      },
      {
        "key": "D",
        "text": "Use the first row as headers."
      },
      {
        "key": "E",
        "text": "Transpose the table."
      },
      {
        "key": "F",
        "text": "Unpivot all the columns other than Measure."
      },
      {
        "key": "G",
        "text": "Change the data type of the Year column to Date."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Use headers as the first row."
      },
      {
        "key": "B",
        "text": "Rename the Measure column as Year."
      },
      {
        "key": "C",
        "text": "Rename the Attribute column as Year."
      },
      {
        "key": "D",
        "text": "Use the first row as headers."
      },
      {
        "key": "E",
        "text": "Transpose the table."
      },
      {
        "key": "F",
        "text": "Unpivot all the columns other than Measure."
      },
      {
        "key": "G",
        "text": "Change the data type of the Year column to Date."
      }
    ],
    "correctAnswers": [
      "step1=D",
      "step2=F",
      "step3=C",
      "step4=G"
    ],
    "explanation": "Thúc đẩy hàng đầu tiên thiết lập Số đo và từng năm riêng lẻ dưới dạng tên cột. Việc bỏ xoay các cột năm sẽ tạo ra một hàng cho mỗi giá trị năm đo, hỗ trợ các phép tính và hình ảnh dựa trên thời gian. Trường Thuộc tính được tạo chứa các giá trị năm, do đó, nó được đổi tên thành Năm và được chuyển đổi thành Ngày để biết thông tin về thời gian.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783730095796-mu1dgrk5.jpg",
    "sourceTitle": "Examcademy PL-300 Question 394",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/394-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-395",
    "questionNumber": 395,
    "text": "You have a Power BI dataset that includes a table named Goal. Goal has the following columns.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783745255864-geuu9k3g.png)  \n  \nYou need to use the Q&A feature to create a visual that answers: \"How many goals were scored last month?\"  \n  \nWhat type of visual will the Q&A feature generate?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "table"
      },
      {
        "key": "B",
        "text": "smart narrative"
      },
      {
        "key": "C",
        "text": "card"
      },
      {
        "key": "D",
        "text": "gauge chart"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Thẻ hiển thị một số liệu tổng hợp duy nhất. Yêu cầu trả về tổng cộng một giá trị Mục tiêu được lọc vào tháng trước, với danh mục hoặc chuỗi no để hiển thị, do đó, Power BI Q&A sẽ tạo một thẻ.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783745255864-geuu9k3g.png",
    "sourceTitle": "Examcademy PL-300 Question 395",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/395-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-396",
    "questionNumber": 396,
    "text": "You have a Power BI report for the marketing department that reports on web traffic to a blog and includes data from the following tables.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730096957-8d3agih4.jpg)  \n  \nThere is a one-to-many relationship from **Posts** to **Traffic** using the **URL** and **URL Visited** columns. The report includes the visuals shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783730099858-aod421d7.png)  \n  \nThe dataset requires a long time to refresh.  \n  \nYou need to modify the **Posts** and **Traffic** queries to reduce load times.  \n  \nWhich two actions will reduce the load times? Each correct answer presents part of the solution.  \n  \n**NOTE:**  \n  \nEach correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Remove the rows in Posts in which Posts[Publish Date] is in the last seven days."
      },
      {
        "key": "B",
        "text": "Remove the rows in Traffic in which Traffic[URL Visited] does not contain ג€blogג€."
      },
      {
        "key": "C",
        "text": "Remove Traffic[IP Address], Traffic[Browser Agent], and Traffic[Referring URL]."
      },
      {
        "key": "D",
        "text": "Remove Posts[Full Text] and Posts[Summary]."
      },
      {
        "key": "E",
        "text": "Remove the rows in Traffic in which Traffic[Referring URL] does not start with ג€/ג€."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "Tất cả hình ảnh báo cáo đều bị giới hạn đối với số lượt truy cập blog, do đó, các hàng Lưu lượng truy cập có URL Đã truy cập không chứa \"blog\" là không cần thiết. Bài viết[Toàn văn] và Bài viết[Tóm tắt] không được sử dụng để báo cáo, lọc hoặc mối quan hệ và có thể bị xóa. Việc giảm các hàng và cột không cần thiết sẽ làm giảm khối lượng công việc được nhập và làm mới mô hình, trong khi vẫn giữ lại Lưu lượng truy cập [URL giới thiệu] là cần thiết cho hình ảnh giới thiệu bên ngoài.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783730096957-8d3agih4.jpg",
    "sourceTitle": "Examcademy PL-300 Question 396",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/396-prepare-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  },
  {
    "id": "pl300-397",
    "questionNumber": 397,
    "text": "You manage a Power BI workspace containing a supplier quality dashboard. The dashboard includes 10 card visuals, two map visuals, and five bar chart visuals.  \n  \nThe dashboard's mobile layout is shown in the exhibit. (Click the Exhibit tab.)  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783731094230-3besg23s.jpg)  \n  \nYou need to change the dashboard mobile layout to meet these requirements:  \n  \n- Show only single-value visuals.  \n- Minimize scrolling.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Decrease the size of the card visuals. Remove the map and bar chart visuals."
      },
      {
        "key": "B",
        "text": "Decrease the size of the map and bar chart visuals. Move all the card visuals to the top of the layout."
      },
      {
        "key": "C",
        "text": "Remove the card visuals. Increase the size of the map and bar chart visuals."
      },
      {
        "key": "D",
        "text": "Move the bar chart visuals to the top of the layout. Remove the map visuals. Decrease the size of the card visuals."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Hình ảnh thẻ hiển thị các giá trị riêng lẻ, trong khi hình ảnh bản đồ và biểu đồ thanh hiển thị nhiều điểm dữ liệu. Việc xóa hình ảnh bản đồ và biểu đồ thanh đảm bảo chỉ còn lại hình ảnh một giá trị; việc giảm kích thước của các thẻ còn lại sẽ làm giảm bố cục dọc trên thiết bị di động và do đó giảm khả năng cuộn. Bố cục điện thoại trên trang tổng quan Power BI hỗ trợ thay đổi kích thước và bỏ ghim các ô.",
    "category": "General",
    "tags": [
      "PL-300",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783731094230-3besg23s.jpg",
    "sourceTitle": "Examcademy PL-300 Question 397",
    "sourceUrl": "https://examcademy.com/exams/microsoft/pl-300/q/397-visualize-and-analyze-the-data",
    "lastVerifiedAt": "2026-09-15T09:30:52.458Z"
  }
];
