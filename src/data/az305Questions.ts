import { Question } from '../types';

export const az305Questions: Question[] = [
  {
    "id": "az305-1",
    "questionNumber": 1,
    "text": "You have an Azure subscription.  \n  \nYou plan to deploy a monitoring solution that will include the following:  \n  \n- Azure Monitor Network Insights  \n- Application Insights  \n- Microsoft Sentinel  \n- VM insights  \n  \nA single team will manage the monitoring solution.  \n  \nWhat is the minimum number of Azure Monitor workspaces that are required?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "4"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Một không gian làm việc Log Analytics duy nhất có thể thu thập dữ liệu Azure Monitor và cũng hỗ trợ Microsoft Sentinel. Application Insights dựa trên không gian làm việc lưu trữ dữ liệu đo từ xa của nó trong không gian làm việc Log Analytics và thông tin chi tiết về VM yêu cầu một không gian làm việc; các dịch vụ này có thể chia sẻ cùng một không gian làm việc khi cách ly no hoặc ràng buộc thiết kế khác yêu cầu các không gian làm việc riêng biệt.\n\n**Tài liệu tham khảo:**\n[Design a Log Analytics workspace architecture](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/workspace-design) · [Create and configure Application Insights resources](https://learn.microsoft.com/en-us/azure/azure-monitor/app/create-workspace-resource)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 1",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/1-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.133Z"
  },
  {
    "id": "az305-2",
    "questionNumber": 2,
    "text": "Your on-premises network contains a file server named Server1 that stores 500 GB of data.  \n  \nYou need to use Azure Data Factory to copy the data from Server1 to Azure Storage. You add a new data factory.  \n  \nWhat should you do next?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "server1",
        "text": "From Server1:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "data_factory",
        "text": "From the data factory:",
        "correctAnswer": "D",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Install an Azure File Sync agent."
      },
      {
        "key": "B",
        "text": "Install a self-hosted integration runtime."
      },
      {
        "key": "C",
        "text": "Install the File Server Resource Manager role service."
      },
      {
        "key": "D",
        "text": "Create a pipeline."
      },
      {
        "key": "E",
        "text": "Create an Azure Import/Export job."
      },
      {
        "key": "F",
        "text": "Provision an Azure-SQL Server Integration Services (SSIS) integration runtime."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Install an Azure File Sync agent."
      },
      {
        "key": "B",
        "text": "Install a self-hosted integration runtime."
      },
      {
        "key": "C",
        "text": "Install the File Server Resource Manager role service."
      },
      {
        "key": "D",
        "text": "Create a pipeline."
      },
      {
        "key": "E",
        "text": "Create an Azure Import/Export job."
      },
      {
        "key": "F",
        "text": "Provision an Azure-SQL Server Integration Services (SSIS) integration runtime."
      }
    ],
    "correctAnswers": [
      "server1=B",
      "data_factory=D"
    ],
    "explanation": "self-hosted integration runtime cho phép Azure Data Factory kết nối với hệ thống tệp tại chỗ và truyền dữ liệu sang bộ lưu trữ đám mây. Sau đó, một đường dẫn chứa Copy activity sẽ điều phối quá trình truyền. Đồng bộ hóa tệp Azure, Trình quản lý tài nguyên máy chủ tệp, Nhập/xuất Azure và Azure-SSIS integration runtime không cung cấp đường dẫn sao chép Data Factory bắt buộc.\n\n**Tài liệu tham khảo:**\n[Create and configure a self-hosted integration runtime](https://learn.microsoft.com/en-us/azure/data-factory/create-self-hosted-integration-runtime) · [Copy activity in Azure Data Factory](https://learn.microsoft.com/en-us/azure/data-factory/copy-activity-overview)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 2",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/2-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.133Z"
  },
  {
    "id": "az305-3",
    "questionNumber": 3,
    "text": "You have an Azure subscription. The subscription contains a tiered app named App1 that is distributed across multiple containers hosted in Azure Container Instances.  \n  \nYou need to deploy an Azure Monitor monitoring solution for App. The solution must meet the following requirements:  \n  \n- Support synthetic transaction monitoring for traffic between the App1 components.  \n- Minimize development effort.  \n  \nWhat should you include in the solution?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Network insights"
      },
      {
        "key": "B",
        "text": "Application Insights"
      },
      {
        "key": "C",
        "text": "Container insights"
      },
      {
        "key": "D",
        "text": "Log Analytics Workspace insights"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Application Insights cung cấp các bài kiểm tra tính khả dụng để giám sát tổng hợp. Các thử nghiệm này đưa ra các yêu cầu web định kỳ tới các điểm cuối của ứng dụng để xác minh tính khả dụng và khả năng phản hồi, đồng thời chúng không yêu cầu sửa đổi đối với ứng dụng hoặc trang web được thử nghiệm. Điều này hỗ trợ giám sát các tương tác thành phần đồng thời giảm thiểu nỗ lực phát triển.\n\n**Tài liệu tham khảo:**\n[Application Insights availability tests - Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/app/availability)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 3",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/3-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.133Z"
  },
  {
    "id": "az305-4",
    "questionNumber": 4,
    "text": "You deploy several Azure SQL Database instances. You plan to configure the Diagnostics settings on the databases as shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1785751601509-xbztjf2u.jpg)",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "blob_retention",
        "text": "Option 1:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      },
      {
        "id": "log_analytics_max",
        "text": "Option 2:",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "30 days"
      },
      {
        "key": "B",
        "text": "90 days"
      },
      {
        "key": "C",
        "text": "730 days"
      },
      {
        "key": "D",
        "text": "indefinite"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "30 days"
      },
      {
        "key": "B",
        "text": "90 days"
      },
      {
        "key": "C",
        "text": "730 days"
      },
      {
        "key": "D",
        "text": "indefinite"
      }
    ],
    "correctAnswers": [
      "blob_retention=B",
      "log_analytics_max=C"
    ],
    "explanation": "Danh mục nhật ký SQLInsights đã bật có chính sách lưu giữ trong 90 ngày và được lưu trữ vào tài khoản lưu trữ. Có thể định cấu hình lưu giữ phân tích không gian làm việc Log Analytics trong tối đa 730 ngày.\n\n**Tài liệu tham khảo:**\n[Configure data retention for a Log Analytics workspace in Microsoft Azure](https://learn.microsoft.com/en-us/troubleshoot/azure/azure-monitor/log-analytics/billing/configure-data-retention) · [Set up diagnostic logs via the Azure Monitor REST API](https://learn.microsoft.com/en-us/azure/data-factory/monitor-logs-rest)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1785751601509-xbztjf2u.jpg",
    "sourceTitle": "Examcademy AZ-305 Question 4",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/4-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-5",
    "questionNumber": 5,
    "text": "You have an Azure subscription that includes an Azure Blob Storage account named store1.  \n  \nYou have an on-premises file server named Server1 that runs Windows Server 2016. Server1 stores 500 GB of company files.  \n  \nYou need to store a copy of the company files from Server1 in store1.  \n  \nWhich two Azure services could accomplish this goal? Each correct answer provides a complete solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "an Azure Logic Apps integration account"
      },
      {
        "key": "B",
        "text": "an Azure Import/Export job"
      },
      {
        "key": "C",
        "text": "Azure Data Factory"
      },
      {
        "key": "D",
        "text": "an Azure Analysis services On-premises data gateway"
      },
      {
        "key": "E",
        "text": "an Azure Batch account"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Azure Import/Export hỗ trợ nhập dữ liệu vào Azure Blob Storage bằng cách chuyển các ổ đĩa đã chuẩn bị sang trung tâm dữ liệu Azure. Azure Data Factory Copy activity hỗ trợ sao chép tệp từ hệ thống tệp tại chỗ sang Azure Blob Storage khi self-hosted integration runtime cung cấp quyền truy cập vào nguồn tại chỗ.\n\n**Tài liệu tham khảo:**\n[Azure Import/Export service overview](https://learn.microsoft.com/en-us/azure/import-export/storage-import-export-service) · [Copy activity in Azure Data Factory and Azure Synapse Analytics](https://learn.microsoft.com/en-us/azure/data-factory/copy-activity-overview)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 5",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/5-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-6",
    "questionNumber": 6,
    "text": "You need to design an architecture that captures user creation and role assignments. The captured data must be stored in Azure Cosmos DB.  \n  \nWhich services should be included in the design?  \n  \nEach service may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "slot1",
        "text": "Slot 1:",
        "correctAnswer": "B"
      },
      {
        "id": "slot2",
        "text": "Slot 2:",
        "correctAnswer": "C"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Azure Event Grid"
      },
      {
        "key": "B",
        "text": "Azure Event Hubs"
      },
      {
        "key": "C",
        "text": "Azure Functions"
      },
      {
        "key": "D",
        "text": "Azure Monitor Logs"
      },
      {
        "key": "E",
        "text": "Azure Notification Hubs"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Azure Event Grid"
      },
      {
        "key": "B",
        "text": "Azure Event Hubs"
      },
      {
        "key": "C",
        "text": "Azure Functions"
      },
      {
        "key": "D",
        "text": "Azure Monitor Logs"
      },
      {
        "key": "E",
        "text": "Azure Notification Hubs"
      }
    ],
    "correctAnswers": [
      "slot1=B",
      "slot2=C"
    ],
    "explanation": "Nhật ký kiểm tra Microsoft Entra ID có thể được truyền trực tuyến tới Azure Event Hubs thông qua cài đặt chẩn đoán. Chức năng Azure được kích hoạt bởi Trung tâm sự kiện có thể xử lý từng sự kiện kiểm tra và ghi nó vào Azure Cosmos DB bằng cách sử dụng SDK hoặc liên kết đầu ra Cosmos DB.\n\n**Tài liệu tham khảo:**\n[How to stream activity logs to an event hub](https://learn.microsoft.com/en-us/entra/identity/monitoring-health/howto-stream-logs-to-event-hub) · [Azure Event Hubs trigger for Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-event-hubs-trigger)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 6",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/6-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-7",
    "questionNumber": 7,
    "text": "You have an application used by 6,000 users to validate their vacation requests. The application maintains its own credential store.  \n  \nUsers must provide a username and password to access the application. The application does **NOT** support identity providers.  \n  \nYou plan to upgrade the application to use single sign-on (SSO) authentication by using an Azure Active Directory (Azure AD) application registration.  \n  \nWhich SSO method should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "header-based"
      },
      {
        "key": "B",
        "text": "SAML"
      },
      {
        "key": "C",
        "text": "password-based"
      },
      {
        "key": "D",
        "text": "OpenID Connect"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "SSO dựa trên mật khẩu sử dụng quy trình xác thực tên người dùng và mật khẩu hiện có của ứng dụng. Microsoft Entra ID lưu trữ thông tin xác thực ứng dụng một cách an toàn và cung cấp chúng trong quá trình đăng nhập, giúp ứng dụng này phù hợp với ứng dụng không hỗ trợ liên kết SAML hoặc OpenID Connect với nhà cung cấp danh tính.\n\n**Tài liệu tham khảo:**\n[Add password-based single sign-on to an application](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/configure-password-single-sign-on-non-gallery-applications)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 7",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/7-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-8",
    "questionNumber": 8,
    "text": "You need to recommend a solution for generating a monthly report of all new Azure Resource Manager (ARM) resource deployments in your Azure subscription.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Activity Log"
      },
      {
        "key": "B",
        "text": "Azure Advisor"
      },
      {
        "key": "C",
        "text": "Azure Analysis Services"
      },
      {
        "key": "D",
        "text": "Azure Monitor action groups"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Nhật ký hoạt động Azure ghi lại các hoạt động trên mặt phẳng điều khiển cấp đăng ký được thực hiện thông qua Trình quản lý tài nguyên Azure, bao gồm các hoạt động tạo, cập nhật, xóa và liên quan đến triển khai tài nguyên. Do đó, nó có thể được lọc để xác định các hoạt động triển khai mới trong mỗi tháng và được sử dụng làm nguồn cho báo cáo.\n\n**Tài liệu tham khảo:**\n[Activity log in Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/platform/activity-log) · [Azure Activity Log event schema](https://learn.microsoft.com/en-us/azure/azure-monitor/platform/activity-log-schema)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 8",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/8-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-9",
    "questionNumber": 9,
    "text": "You have an on-premises Microsoft SQL Server named SQL1 that hosts 50 databases.  \n  \nYou plan to migrate SQL1 to Azure SQL Managed Instance.  \n  \nYou need to carry out an offline migration of SQL1. The solution must minimize administrative effort.  \n  \nWhat should you include in the solution?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Migrate"
      },
      {
        "key": "B",
        "text": "Azure Database Migration Service"
      },
      {
        "key": "C",
        "text": "SQL Server Migration Assistant (SSMA)"
      },
      {
        "key": "D",
        "text": "Data Migration Assistant (DMA)"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Dịch vụ di chuyển cơ sở dữ liệu Azure hỗ trợ di chuyển ngoại tuyến từ SQL Server sang Azure SQL Managed Instance và điều phối tập trung quá trình di chuyển, giảm công việc quản trị cần thiết để di chuyển nhiều cơ sở dữ liệu.\n\n**Tài liệu tham khảo:**\n[Migration overview: SQL Server to Azure SQL Managed Instance](https://learn.microsoft.com/en-us/data-migration/sql-server/managed-instance/overview) · [What is Azure Database Migration Service?](https://learn.microsoft.com/en-us/azure/dms/dms-overview)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 9",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/9-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-10",
    "questionNumber": 10,
    "text": "You are designing a data pipeline to integrate large amounts of data from multiple on-premises Microsoft SQL Server databases into an Azure analytics platform. The pipeline will include these actions:  \n  \n- Database updates will be exported periodically to a staging area in Azure Blob storage.  \n- Data from blob storage will be cleansed and transformed by a highly parallelized load process.  \n- The transformed data will be loaded into a data warehouse.  \n- Each update batch will refresh an online analytical processing (OLAP) model in a managed serving layer.  \n- The managed serving layer will serve thousands of end users.  \n  \nYou need to implement the data warehouse and serving layers. What should you use?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "data_warehouse",
        "text": "To implement the data warehouse:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "serving_layer",
        "text": "To implement the serving layer:",
        "correctAnswer": "D",
        "choiceKeys": [
          "D",
          "E",
          "B"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "An Apache Spark pool in Azure Synapse Analytics"
      },
      {
        "key": "B",
        "text": "An Azure Synapse Analytics dedicated SQL pool"
      },
      {
        "key": "C",
        "text": "Azure Data Lake Analytics"
      },
      {
        "key": "D",
        "text": "Azure Analysis Services"
      },
      {
        "key": "E",
        "text": "An Apache Spark pool Azure Synapse Analytics"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "An Apache Spark pool in Azure Synapse Analytics"
      },
      {
        "key": "B",
        "text": "An Azure Synapse Analytics dedicated SQL pool"
      },
      {
        "key": "C",
        "text": "Azure Data Lake Analytics"
      },
      {
        "key": "D",
        "text": "Azure Analysis Services"
      },
      {
        "key": "E",
        "text": "An Apache Spark pool Azure Synapse Analytics"
      }
    ],
    "correctAnswers": [
      "data_warehouse=B",
      "serving_layer=D"
    ],
    "explanation": "Nhóm SQL chuyên dụng Azure Synapse Analytics cung cấp khả năng tính toán SQL phân tán, dành riêng cho dữ liệu được lưu trữ trong các bảng SQL và dành cho khối lượng công việc lưu trữ dữ liệu của doanh nghiệp. Dịch vụ phân tích Azure là một dịch vụ được quản lý hoàn toàn dành cho các mô hình dữ liệu ngữ nghĩa dạng bảng và hỗ trợ đồng thời người dùng linh hoạt, giúp dịch vụ này phù hợp với lớp phân phối OLAP được hàng nghìn người dùng sử dụng.\n\n**Tài liệu tham khảo:**\n[What is Azure Synapse Analytics?](https://learn.microsoft.com/en-us/azure/synapse-analytics/overview-what-is) · [What is Azure Analysis Services?](https://learn.microsoft.com/en-us/analysis-services/azure-analysis-services/analysis-services-overview?view=sql-analysis-services-2025)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 10",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/10-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-11",
    "questionNumber": 11,
    "text": "You have 12 on-premises data sources containing customer information, consisting of Microsoft SQL Server, MySQL, and Oracle databases.  \n  \nYou have an Azure subscription.  \n  \nYou plan to create an Azure Data Lake Storage account to consolidate the customer information for analysis and reporting.  \n  \nYou need to recommend a solution that automatically copies new information from the data sources to the Data Lake Storage account by using extract, transform, and load (ETL). The solution must minimize administrative effort.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Data Factory"
      },
      {
        "key": "B",
        "text": "Azure Data Explorer"
      },
      {
        "key": "C",
        "text": "Azure Data Share"
      },
      {
        "key": "D",
        "text": "Azure Data Studio"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Azure Data Factory là dịch vụ tích hợp dữ liệu đám mây được quản lý để điều phối các đường dẫn ETL theo lịch trình. Copy activity của nó có thể di chuyển dữ liệu từ các nguồn cơ sở dữ liệu tại chỗ được hỗ trợ thông qua self-hosted integration runtime đến Azure Data Lake Storage, đồng thời các đường dẫn của nó có thể áp dụng các phép biến đổi và logic tải tăng dần với khả năng quản trị cơ sở hạ tầng tối thiểu.\n\n**Tài liệu tham khảo:**\n[Copy activity in Azure Data Factory](https://learn.microsoft.com/en-us/azure/data-factory/copy-activity-overview) · [Copy and transform data to and from SQL Server using Azure Data Factory](https://learn.microsoft.com/en-us/azure/data-factory/connector-sql-server)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 11",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/11-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-12",
    "questionNumber": 12,
    "text": "You need to recommend a solution that generates a monthly report of every new Azure Resource Manager (ARM) resource deployment in your Azure subscription.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Log Analytics"
      },
      {
        "key": "B",
        "text": "Azure Analysis Services"
      },
      {
        "key": "C",
        "text": "Azure Monitor metrics"
      },
      {
        "key": "D",
        "text": "Azure Monitor action groups"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Azure Log Analytics có thể lưu trữ dữ liệu nhật ký hoạt động Azure đã xuất trong bảng `AzureActivity` và truy vấn nó bằng KQL. Nhật ký hoạt động ghi lại các hoạt động trên mặt phẳng điều khiển Azure Resource Manager, bao gồm các hoạt động liên quan đến việc tạo tài nguyên và triển khai, cho phép lập báo cáo triển khai hàng tháng.\n\n**Tài liệu tham khảo:**\n[Activity log in Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/platform/activity-log) · [Monitor Azure Resource Manager](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/monitor-resource-manager)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 12",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/12-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-13",
    "questionNumber": 13,
    "text": "You have 100 Microsoft SQL Server Integration Services (SSIS) packages configured to use 10 on-premises SQL Server databases as their destinations.  \n  \nYou plan to migrate the 10 on-premises databases to Azure SQL Database.  \n  \nYou need to recommend a solution to create Azure-SQL Server Integration Services (SSIS) packages. The solution must ensure that the packages can target the SQL Database instances as their destinations.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Data Migration Assistant (DMA)"
      },
      {
        "key": "B",
        "text": "Azure Data Factory"
      },
      {
        "key": "C",
        "text": "Azure Data Catalog"
      },
      {
        "key": "D",
        "text": "SQL Server Migration Assistant (SSMA)"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Azure Data Factory cung cấp Azure-SSIS Integration Runtime để triển khai và chạy các gói SSIS trong Azure. Nó hỗ trợ SSISDB được lưu trữ trên Azure SQL Database và kết nối với điểm cuối máy chủ Azure SQL Database, cho phép các gói sử dụng phiên bản Azure SQL Database làm đích đến.\n\n**Tài liệu tham khảo:**\n[Create an Azure-SSIS integration runtime in Azure Data Factory](https://learn.microsoft.com/en-us/azure/data-factory/create-azure-ssis-integration-runtime) · [Deploy SSIS packages in Azure Data Factory](https://learn.microsoft.com/en-us/azure/data-factory/create-azure-ssis-integration-runtime-deploy-packages)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 13",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/13-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-14",
    "questionNumber": 14,
    "text": "You are designing an app that will use Azure Cosmos DB to aggregate sales from multiple countries.  \n  \nYou need to recommend an API for the app. The solution must meet these requirements:  \n  \n- Support SQL queries.  \n- Support geo-replication.  \n- Store and access data relationally.  \n  \nWhich API should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Apache Cassandra"
      },
      {
        "key": "B",
        "text": "PostgreSQL"
      },
      {
        "key": "C",
        "text": "MongoDB"
      },
      {
        "key": "D",
        "text": "NoSQL"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Azure Cosmos DB dành cho PostgreSQL là cơ sở dữ liệu SQL phân tán, được quản lý dựa trên PostgreSQL. Nó lưu trữ dữ liệu trong các bảng quan hệ và hỗ trợ các truy vấn SQL, trong khi kiến ​​trúc phân tán của nó hỗ trợ triển khai phân tán theo địa lý. Các API được liệt kê khác sử dụng mô hình dữ liệu không quan hệ.\n\n**Tài liệu tham khảo:**\n[Azure Cosmos DB for PostgreSQL documentation](https://learn.microsoft.com/en-us/azure/cosmos-db/postgresql/)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 14",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/14-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-15",
    "questionNumber": 15,
    "text": "You plan to deploy an application named App1 that will run in containers on Azure Kubernetes Service (AKS) clusters. The AKS clusters will be located across four Azure regions.  \n  \nYou need to recommend a storage solution that ensures updated container images are automatically replicated to every Azure region that hosts the AKS clusters.  \n  \nWhich storage solution should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "geo-redundant storage (GRS) accounts"
      },
      {
        "key": "B",
        "text": "Premium SKU Azure Container Registry"
      },
      {
        "key": "C",
        "text": "Azure Content Delivery Network (CDN)"
      },
      {
        "key": "D",
        "text": "Azure Cache for Redis"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Bản sao địa lý của Sổ đăng ký vùng chứa Azure tự động đồng bộ hóa nội dung hình ảnh vùng chứa được đẩy sang các bản sao trong vùng Azure đã chọn. Bản sao địa lý có sẵn trên SKU đăng ký vùng chứa Azure cao cấp, cho phép triển khai AKS trong khu vực để lấy hình ảnh từ bản sao đăng ký gần đó.\n\n**Tài liệu tham khảo:**\n[Geo-replication in Azure Container Registry](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-geo-replication)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 15",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/15-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-16",
    "questionNumber": 16,
    "text": "You must recommend a solution that satisfies App1's data requirements.  \n  \nWhat should be deployed to every availability zone that hosts an App1 instance?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "an Azure Cosmos DB that uses multi-region writes"
      },
      {
        "key": "B",
        "text": "an Azure Data Lake store that uses geo-zone-redundant storage (GZRS)"
      },
      {
        "key": "C",
        "text": "an Azure Storage account that uses geo-zone-redundant storage (GZRS)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Tính năng ghi đa vùng của Azure Cosmos DB cung cấp khả năng ghi và đọc tích cực trên các vùng được định cấu hình, do đó, các phiên bản ứng dụng có thể sử dụng điểm cuối cơ sở dữ liệu có thể ghi cục bộ trong khi Cosmos DB sao chép dữ liệu trên toàn cầu. GZRS là cài đặt sao chép cho một tài khoản Azure Storage, không phải là dịch vụ dữ liệu riêng biệt được triển khai trong mỗi availability zone.\n\n**Tài liệu tham khảo:**\n[Distribute Data Globally - Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/distribute-data-globally) · [Data redundancy - Azure Storage](https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 16",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/16-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-17",
    "questionNumber": 17,
    "text": "You are building a multi-tier application named App1 to run on Azure virtual machines. App1 reaches peak utilization from 8 AM to 9 AM and from 4 PM to 5 PM on weekdays.  \n  \nDeploy infrastructure for App1 that meets these requirements:  \n  \n- Support virtual machines deployed across four availability zones in two Azure regions.  \n- Reduce costs by accumulating CPU credits during low-utilization periods.  \n  \nWhat is the minimum number of virtual networks to deploy, and which virtual machine size should be used?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "virtual_networks",
        "text": "Number of virtual networks:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      },
      {
        "id": "virtual_machine_size",
        "text": "Virtual machine size:",
        "correctAnswer": "F",
        "choiceKeys": [
          "E",
          "F",
          "G",
          "H"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "4"
      },
      {
        "key": "E",
        "text": "A-Series"
      },
      {
        "key": "F",
        "text": "B-Series"
      },
      {
        "key": "G",
        "text": "D-Series"
      },
      {
        "key": "H",
        "text": "M-Series"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "4"
      },
      {
        "key": "E",
        "text": "A-Series"
      },
      {
        "key": "F",
        "text": "B-Series"
      },
      {
        "key": "G",
        "text": "D-Series"
      },
      {
        "key": "H",
        "text": "M-Series"
      }
    ],
    "correctAnswers": [
      "virtual_networks=B",
      "virtual_machine_size=F"
    ],
    "explanation": "Mạng ảo và các mạng con của nó trải rộng availability zones trong một vùng Azure, do đó, việc triển khai ở hai vùng cần có ít nhất hai mạng ảo. Máy ảo dòng Azure B tích lũy tín dụng CPU dưới ngưỡng hiệu suất CPU cơ bản và sử dụng chúng cho nhu cầu CPU cao hơn, khiến chúng phù hợp với các thời điểm cao điểm không liên tục.\n\n**Tài liệu tham khảo:**\n[Azure virtual network overview](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview) · [B family VM size series](https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/b-family)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 17",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/17-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-18",
    "questionNumber": 18,
    "text": "You have an Azure web app named App1 and an Azure key vault named KV1. App1 stores database connection strings in KV1.  \n  \nApp1 performs these request types against KV1:  \n  \n- Get  \n- List  \n- Wrap  \n- Delete  \n- Unwrap  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783707853768-wvkhqvnf.png)  \n  \n- Backup  \n- Decrypt  \n- Encrypt  \n  \nYou are evaluating service continuity for App1. If the Azure region hosting KV1 becomes unavailable, identify:  \n  \n- Where KV1 will fail over  \n- Which request type will be unavailable during the failover",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "failover_destination",
        "text": "To where will KV1 fail over?",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      },
      {
        "id": "unavailable_request",
        "text": "During the failover, which request type will be unavailable?",
        "correctAnswer": "H",
        "choiceKeys": [
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "A server in the same availability set"
      },
      {
        "key": "B",
        "text": "A server in the same fault domain"
      },
      {
        "key": "C",
        "text": "A server in the paired region"
      },
      {
        "key": "D",
        "text": "A virtual machine in a scale set"
      },
      {
        "key": "E",
        "text": "Get"
      },
      {
        "key": "F",
        "text": "List"
      },
      {
        "key": "G",
        "text": "Wrap"
      },
      {
        "key": "H",
        "text": "Delete"
      },
      {
        "key": "I",
        "text": "Unwrap"
      },
      {
        "key": "J",
        "text": "Backup"
      },
      {
        "key": "K",
        "text": "Decrypt"
      },
      {
        "key": "L",
        "text": "Encrypt"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "A server in the same availability set"
      },
      {
        "key": "B",
        "text": "A server in the same fault domain"
      },
      {
        "key": "C",
        "text": "A server in the paired region"
      },
      {
        "key": "D",
        "text": "A virtual machine in a scale set"
      },
      {
        "key": "E",
        "text": "Get"
      },
      {
        "key": "F",
        "text": "List"
      },
      {
        "key": "G",
        "text": "Wrap"
      },
      {
        "key": "H",
        "text": "Delete"
      },
      {
        "key": "I",
        "text": "Unwrap"
      },
      {
        "key": "J",
        "text": "Backup"
      },
      {
        "key": "K",
        "text": "Decrypt"
      },
      {
        "key": "L",
        "text": "Encrypt"
      }
    ],
    "correctAnswers": [
      "failover_destination=C",
      "unavailable_request=H"
    ],
    "explanation": "Azure Key Vault sao chép các vault được hỗ trợ sang vùng được ghép nối Azure và Microsoft có thể bắt đầu chuyển đổi dự phòng khu vực. Sau khi chuyển đổi dự phòng, vault ở chế độ chỉ đọc. Các hoạt động được hỗ trợ bao gồm Nhận, Liệt kê, Gói, Mở gói, Sao lưu, Giải mã và Mã hóa; Xóa không có sẵn.\n\n**Tài liệu tham khảo:**\n[Reliability in Azure Key Vault](https://learn.microsoft.com/en-us/azure/reliability/reliability-key-vault)",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783707853768-wvkhqvnf.png",
    "sourceTitle": "Examcademy AZ-305 Question 18",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/18-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-19",
    "questionNumber": 19,
    "text": "You are designing an application that aggregates content for users.  \n  \nYou need to recommend a database solution for the application. The solution must satisfy these requirements:  \n  \n- Support SQL commands.  \n- Support multi-master writes.  \n- Guarantee low-latency read operations.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Cosmos DB SQL API"
      },
      {
        "key": "B",
        "text": "Azure SQL Database that uses active geo-replication"
      },
      {
        "key": "C",
        "text": "Azure SQL Database Hyperscale"
      },
      {
        "key": "D",
        "text": "Azure Database for PostgreSQL"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "API SQL Azure Cosmos DB cung cấp khả năng truy vấn giống như SQL cho dữ liệu JSON, hỗ trợ ghi hoạt động tích cực đa vùng và sao chép dữ liệu giữa các vùng để các lần đọc có thể được phục vụ với độ trễ thấp ở gần người dùng.\n\n**Tài liệu tham khảo:**\n[Azure Cosmos DB overview](https://learn.microsoft.com/en-us/cosmos-db/overview) · [Configure multi-region writes in applications that use Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/how-to-multi-master)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 19",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/19-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-20",
    "questionNumber": 20,
    "text": "You have an Azure Active Directory (Azure AD) tenant that is synchronized with an on-premises Active Directory domain.  \n  \nYou have an internal web app named WebApp1 that is hosted on-premises. WebApp1 uses Integrated Windows authentication.  \n  \nSome users work remotely and do **NOT** have VPN access to the on-premises network.  \n  \nYou need to give the remote users single sign-on (SSO) access to WebApp1.  \n  \nWhich two features should you include in the solution? Each correct answer presents part of the solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure AD Application Proxy"
      },
      {
        "key": "B",
        "text": "Azure AD Privileged Identity Management (PIM)"
      },
      {
        "key": "C",
        "text": "Conditional Access policies"
      },
      {
        "key": "D",
        "text": "Azure Arc"
      },
      {
        "key": "E",
        "text": "Azure AD enterprise applications"
      },
      {
        "key": "F",
        "text": "Azure Application Gateway"
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "Proxy ứng dụng Azure AD xuất bản một cách an toàn ứng dụng web tại chỗ để truy cập từ xa mà không cần VPN. Đối với các ứng dụng sử dụng Xác thực Windows tích hợp, Proxy ứng dụng hỗ trợ SSO thông qua Ủy quyền ràng buộc Kerberos. Ứng dụng đã xuất bản được tạo, đặt cấu hình và gán cho người dùng dưới dạng ứng dụng doanh nghiệp Azure AD.\n\n**Tài liệu tham khảo:**\n[Microsoft Entra application proxy](https://learn.microsoft.com/en-us/entra/identity/app-proxy/overview-what-is-app-proxy) · [Kerberos Constrained Delegation for SSO to apps with Application Proxy](https://learn.microsoft.com/en-us/entra/identity/app-proxy/how-to-configure-sso-with-kcd)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 20",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/20-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-21",
    "questionNumber": 21,
    "text": "You are designing an app hosted on Azure virtual machines that run Ubuntu. The app will use a third-party email service to send email messages to users. The email service requires the app to authenticate by using an API key.  \n  \nYou need to recommend an Azure Key Vault solution for storing and accessing the API key while minimizing administrative effort.  \n  \nWhat should you recommend using to store and access the key?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "storage",
        "text": "Storage:",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "access",
        "text": "Access:",
        "correctAnswer": "E",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Certificate"
      },
      {
        "key": "B",
        "text": "Key"
      },
      {
        "key": "C",
        "text": "Secret"
      },
      {
        "key": "D",
        "text": "An API token"
      },
      {
        "key": "E",
        "text": "A managed service identity (MSI)"
      },
      {
        "key": "F",
        "text": "A service principal"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Certificate"
      },
      {
        "key": "B",
        "text": "Key"
      },
      {
        "key": "C",
        "text": "Secret"
      },
      {
        "key": "D",
        "text": "An API token"
      },
      {
        "key": "E",
        "text": "A managed service identity (MSI)"
      },
      {
        "key": "F",
        "text": "A service principal"
      }
    ],
    "correctAnswers": [
      "storage=C",
      "access=E"
    ],
    "explanation": "Bí mật Azure Key Vault dành cho các giá trị chuỗi nhạy cảm như khóa API. managed identity được gán cho máy ảo Azure có thể lấy mã thông báo Microsoft Entra mà không cần thông tin xác thực quản lý ứng dụng; cấp cho nó quyền đọc bí mật Key Vault.\n\n**Tài liệu tham khảo:**\n[About Azure Key Vault secrets](https://learn.microsoft.com/en-us/azure/key-vault/secrets/about-secrets) · [What is managed identities for Azure resources?](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 21",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/21-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-22",
    "questionNumber": 22,
    "text": "You have an Azure subscription containing a virtual network named VNET1 and 10 virtual machines connected to VNET1.  \n  \nDesign a solution to manage the virtual machines from the internet that meets these requirements:  \n  \n- Authenticate incoming connections with Azure Multi-Factor Authentication (MFA) before network connectivity is permitted.  \n- Use TLS for incoming connections and TCP port 443.  \n- Support both RDP and SSH.  \n  \nWhat should the solution include?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "vm_access",
        "text": "To provide access to virtual machines on VNET1, use:",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "mfa",
        "text": "To enforce Azure MFA, use:",
        "correctAnswer": "F",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Azure Bastion"
      },
      {
        "key": "B",
        "text": "Just-in-time (JIT) VM access"
      },
      {
        "key": "C",
        "text": "Azure Web Application Firewall (WAF) in Azure Front Door"
      },
      {
        "key": "D",
        "text": "An Azure Identity Governance access package"
      },
      {
        "key": "E",
        "text": "A Conditional Access policy that has the Cloud apps assignment set to Azure Windows VM Sign-In"
      },
      {
        "key": "F",
        "text": "A Conditional Access policy that has the Cloud apps assignment set to Microsoft Azure Management"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Azure Bastion"
      },
      {
        "key": "B",
        "text": "Just-in-time (JIT) VM access"
      },
      {
        "key": "C",
        "text": "Azure Web Application Firewall (WAF) in Azure Front Door"
      },
      {
        "key": "D",
        "text": "An Azure Identity Governance access package"
      },
      {
        "key": "E",
        "text": "A Conditional Access policy that has the Cloud apps assignment set to Azure Windows VM Sign-In"
      },
      {
        "key": "F",
        "text": "A Conditional Access policy that has the Cloud apps assignment set to Microsoft Azure Management"
      }
    ],
    "correctAnswers": [
      "vm_access=A",
      "mfa=F"
    ],
    "explanation": "Azure Bastion cung cấp quyền truy cập RDP và SSH vào máy ảo thông qua TLS qua TCP 443 đồng thời tránh tiếp xúc trực tiếp với công chúng các cổng RDP và SSH. Chính sách Truy cập có điều kiện nhắm mục tiêu Quản lý Microsoft Azure có thể yêu cầu MFA để truy cập quản lý Azure, bao gồm cả việc khởi tạo các phiên Bastion. Ứng dụng Đăng nhập Azure Windows VM dành riêng cho xác thực Microsoft Entra cho máy ảo Windows, do đó, ứng dụng này không đáp ứng giải pháp cũng phải hỗ trợ SSH.\n\n**Tài liệu tham khảo:**\n[Azure Bastion RDP connections](https://learn.microsoft.com/en-us/azure/bastion/bastion-connect-vm-rdp-windows) · [Require MFA for Azure management with Conditional Access](https://learn.microsoft.com/en-us/entra/identity/conditional-access/policy-old-require-mfa-azure-mgmt)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 22",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/22-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-23",
    "questionNumber": 23,
    "text": "You are designing an Azure order-processing system that will contain the Azure resources shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783707864292-x5ydxlmp.png)  \n  \nThe order-processing system will use the following transaction flow:  \n  \n- A customer will place an order by using App1.  \n- When the order is received, App1 will generate a message to check product availability at vendor 1 and vendor 2.  \n- An integration component will process the message and then trigger either Function1 or Function2, depending on the order type.  \n- When a vendor confirms product availability, Function1 or Function2 will generate a status message for App1.  \n- All transaction steps will be logged to storage1.  \n  \nWhich resource type should you recommend for the integration component?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "an Azure Service Bus queue"
      },
      {
        "key": "B",
        "text": "an Azure Data Factory pipeline"
      },
      {
        "key": "C",
        "text": "an Azure Event Grid domain"
      },
      {
        "key": "D",
        "text": "an Azure Event Hubs capture"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Quy trình Azure Data Factory là một nhóm hoạt động logic có thể triển khai logic phân nhánh mà kịch bản yêu cầu: quy trình này có thể kiểm tra loại đơn đặt hàng và sử dụng hoạt động có điều kiện (Nếu Điều kiện/Chuyển đổi) để gọi Chức năng1 hoặc Chức năng2 thông qua hoạt động Chức năng Azure và quy trình này có thể ghi lại kết quả của từng bước giao dịch như một phần của quy trình được sắp xếp giống nhau. Azure Service Bus, Event Grid và Event Hubs Capture đều là các cơ chế nhắn tin hoặc nhập, nhưng không có cơ chế nào trong số chúng thực sự thực hiện phân nhánh theo loại và điều phối nhiều bước mà một thành phần tích hợp thực hiện logic gọi và định tuyến này cần.\n\n**Tài liệu tham khảo:**\n[Pipelines and activities in Azure Data Factory](https://learn.microsoft.com/en-us/azure/data-factory/concepts-pipelines-activities) · [Azure Function activity in Azure Data Factory](https://learn.microsoft.com/en-us/azure/data-factory/control-flow-azure-function-activity)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783707864292-x5ydxlmp.png",
    "sourceTitle": "Examcademy AZ-305 Question 23",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/23-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-24",
    "questionNumber": 24,
    "text": "Your company develops a web service deployed to an Azure virtual machine named VM1. The web service enables an API to access real-time data from VM1. The current virtual-machine deployment is shown in the Deployment exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783706907793-618v3p1r.png)  \n  \nThe chief technology officer (CTO) sends this email message: “Our developers have deployed the web service to a virtual machine named VM1. Testing has confirmed that the API is accessible from VM1 and VM2. Our partners must be able to connect to the API over the Internet. Partners will use this data in applications that they develop.”  \n  \nYou deploy an Azure API Management (APIM) service. The relevant API Management configuration is shown in the API exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783706912996-v8wzw484.jpg)  \n  \nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "The API is available to partners over the internet.",
        "correctAnswer": "Yes"
      },
      {
        "id": "2",
        "text": "The APIM instance can access real-time data from VM1.",
        "correctAnswer": "Yes"
      },
      {
        "id": "3",
        "text": "A VPN gateway is required for partner access.",
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
      "2:Yes",
      "3:No"
    ],
    "explanation": "Ở chế độ mạng ảo bên ngoài, các điểm cuối Quản lý API có thể truy cập được từ Internet công cộng và cổng có thể truy cập các tài nguyên trong mạng ảo. Azure định tuyến lưu lượng truy cập giữa các mạng con trong cùng một mạng ảo theo mặc định. Do đó, APIM có thể tiếp cận VM1 và các đối tác có thể sử dụng điểm cuối công khai của APIM mà không cần VPN gateway.\n\n**Tài liệu tham khảo:**\n[Use a virtual network to secure inbound or outbound traffic for Azure API Management](https://learn.microsoft.com/en-us/azure/api-management/virtual-network-concepts) · [Tutorial: Route network traffic with a route table](https://learn.microsoft.com/en-us/azure/virtual-network/tutorial-create-route-table)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783706907793-618v3p1r.png",
    "sourceTitle": "Examcademy AZ-305 Question 24",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/24-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-25",
    "questionNumber": 25,
    "text": "You are developing a sales application that will include several Azure cloud services and manage different transaction components. Different cloud services will process customer orders, billing, payment, inventory, and shipping.  \n  \nYou need to recommend a solution that lets the cloud services asynchronously exchange transaction information by using XML messages.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Service Fabric"
      },
      {
        "key": "B",
        "text": "Azure Data Lake"
      },
      {
        "key": "C",
        "text": "Azure Service Bus"
      },
      {
        "key": "D",
        "text": "Azure Application Gateway"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Azure Service Bus là một nhà môi giới tin nhắn doanh nghiệp được quản lý, tách riêng các dịch vụ đám mây thông qua các hàng đợi lâu bền và xuất bản/đăng ký các chủ đề, cho phép xử lý giao dịch không đồng bộ. Thông báo Service Bus có thể chứa dữ liệu có cấu trúc được mã hóa dưới dạng XML.\n\n**Tài liệu tham khảo:**\n[What is Azure Service Bus?](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview) · [Service Bus queues, topics, and subscriptions](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 25",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/25-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-26",
    "questionNumber": 26,
    "text": "You have an Azure subscription.  \n  \nYou need to deploy an Azure Kubernetes Service (AKS) solution that uses Windows Server 2019 nodes. The solution must meet these requirements:  \n  \n- Minimize the time required to provision compute resources during scale-out operations.  \n- Support autoscaling for Windows Server containers.  \n  \nWhich scaling option should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "horizontal pod autoscaler"
      },
      {
        "key": "B",
        "text": "Virtual nodes"
      },
      {
        "key": "C",
        "text": "Kubernetes version 1.20.2 or newer"
      },
      {
        "key": "D",
        "text": "cluster autoscaler"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Các nút ảo cung cấp khả năng cung cấp nhóm nhanh chóng thông qua Azure Container Instances, tránh phải chờ bộ chia tỷ lệ tự động của cụm Kubernetes triển khai các nút điện toán VM. Đối với các bộ chứa Windows Server, Kubernetes phiên bản 1.20.2 trở lên là điều kiện tiên quyết cho khả năng này; bản thân nó không phải là một lựa chọn mở rộng quy mô.\n\n**Tài liệu tham khảo:**\n[Use virtual nodes with Azure Kubernetes Service (AKS)](https://learn.microsoft.com/en-us/azure/aks/virtual-nodes) · [Create Windows Server node pools with containerd in Azure Kubernetes Service (AKS)](https://learn.microsoft.com/en-us/azure/aks/windows-containerd)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 26",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/26-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-27",
    "questionNumber": 27,
    "text": "You are planning to migrate App1 to Azure.  \n  \nYou need to recommend a network-connectivity solution for the Azure Storage account that will store the App1 data. The solution must satisfy the security and compliance requirements.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft peering for an ExpressRoute circuit"
      },
      {
        "key": "B",
        "text": "Azure public peering for an ExpressRoute circuit"
      },
      {
        "key": "C",
        "text": "a service endpoint that has a service endpoint policy"
      },
      {
        "key": "D",
        "text": "a private endpoint"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Azure private endpoint ánh xạ dịch vụ Lưu trữ Azure tới địa chỉ IP riêng trong mạng ảo, cho phép lưu lượng truy cập tiếp cận tài nguyên lưu trữ cụ thể thông qua Azure Private Link thay vì điểm cuối công khai của nó. Điều này mang lại khả năng cách ly mạng tối đa và bảo vệ mạnh mẽ chống lại việc đánh cắp dữ liệu, khiến nó phù hợp với các yêu cầu về bảo mật và tuân thủ.\n\n**Tài liệu tham khảo:**\n[Private access to Azure PaaS services](https://learn.microsoft.com/en-us/azure/networking/design-guide/private-platform-as-a-service) · [What is a private endpoint? - Azure Private Link](https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-overview)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 27",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/27-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-28",
    "questionNumber": 28,
    "text": "Solution: You use Azure Front Door to enable access to the app.  \n  \nDoes this achieve the goal?",
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
    "explanation": "Azure Front Door cung cấp tính năng cân bằng tải toàn cầu trên các nguồn gốc ổn định và có thể định tuyến lưu lượng truy cập đến một nguồn gốc thay thế khi một nguồn gốc không khả dụng, hỗ trợ khả năng phục hồi khi mất điện trong khu vực. Azure Front Door WAF cũng hỗ trợ các quy tắc giới hạn tốc độ để hạn chế yêu cầu từ khách hàng.\n\n**Tài liệu tham khảo:**\n[Accelerate and Secure Your Web Application with Azure Front Door](https://learn.microsoft.com/en-us/azure/frontdoor/scenarios) · [WAF Rate Limiting for Azure Front Door](https://learn.microsoft.com/en-us/azure/web-application-firewall/afds/waf-front-door-rate-limit)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 28",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/28-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-29",
    "questionNumber": 29,
    "text": "Solution: You use Azure Traffic Manager to provide access to the app.  \n  \nDoes this achieve the goal?",
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
    "explanation": "Azure Traffic Manager có thể phân phối lưu lượng truy cập trên các điểm cuối và định tuyến người dùng đến các điểm cuối hoạt động tốt khi điểm cuối khu vực không khả dụng, nhưng nó không thực thi các giới hạn tốc độ yêu cầu. Do đó, nó không thể đáp ứng các yêu cầu bắt buộc về giới hạn tốc độ, cân bằng tải và ngừng hoạt động khu vực như một giải pháp hoàn chỉnh.\n\n**Tài liệu tham khảo:**\n[Traffic Manager routing methods](https://learn.microsoft.com/en-us/azure/traffic-manager/traffic-manager-routing-methods) · [Control Azure App Service traffic with Azure Traffic Manager](https://learn.microsoft.com/en-us/azure/app-service/web-sites-traffic-manager)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 29",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/29-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-30",
    "questionNumber": 30,
    "text": "Solution: Use Azure Load Balancer to provide access to the app.  \n  \nDoes this satisfy the goal?",
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
    "explanation": "Azure Load Balancer hoạt động ở Lớp 4 cho lưu lượng TCP và UDP và không cung cấp giới hạn tốc độ lớp ứng dụng. Cân bằng tải toàn cầu có thể cân bằng lưu lượng giữa các khu vực và hỗ trợ chuyển đổi dự phòng trong khu vực, nhưng bản thân nó không thể đáp ứng khả năng giới hạn tốc độ cần thiết.\n\n**Tài liệu tham khảo:**\n[Troubleshoot Azure Load Balancer limitations](https://learn.microsoft.com/en-us/troubleshoot/azure/load-balancer/troubleshoot-load-balancer-platform-limitations) · [Global load balancer - Azure Load Balancer](https://learn.microsoft.com/en-us/azure/load-balancer/cross-region-overview)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 30",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/30-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-31",
    "questionNumber": 31,
    "text": "Solution: You use Azure Application Gateway to provide access to the app.  \n  \nDoes this achieve the goal?",
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
    "explanation": "Azure Application Gateway v2 là dịch vụ dành cho một vùng, do đó, dịch vụ này sẽ không khả dụng nếu vùng của nó bị ngừng hoạt động. Khả năng phục hồi đa khu vực yêu cầu các cổng khu vực riêng biệt và dịch vụ cân bằng tải toàn cầu để định tuyến và xử lý sự cố lưu lượng giữa chúng. Cổng ứng dụng WAF v2 có thể hỗ trợ giới hạn tốc độ nhưng bản thân điều đó không đáp ứng được yêu cầu ngừng hoạt động trong khu vực.\n\n**Tài liệu tham khảo:**\n[Reliability in Azure Application Gateway v2](https://learn.microsoft.com/en-us/azure/reliability/reliability-application-gateway-v2) · [Create rate limiting custom rules for Application Gateway WAF v2](https://learn.microsoft.com/en-us/azure/web-application-firewall/ag/rate-limiting-configure)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 31",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/31-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-32",
    "questionNumber": 32,
    "text": "You have an Azure web app that uses an Azure key vault named KeyVault1 in the West US Azure region.  \n  \nYou are designing a disaster recovery plan for KeyVault1 and plan to back up its keys.  \n  \nYou need to determine where the backup can be restored.  \n  \nWhat should you identify?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "any region worldwide"
      },
      {
        "key": "B",
        "text": "the same region only"
      },
      {
        "key": "C",
        "text": "KeyVault1 only"
      },
      {
        "key": "D",
        "text": "the same geography only"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Khóa Azure Key Vault được sao lưu có thể được khôi phục vào một kho khóa khác, miễn là kho khóa đích nằm trong cùng một đăng ký Azure và trong một khu vực Azure trong cùng một khu vực địa lý. Bản sao lưu từ khu vực địa lý Hoa Kỳ không thể được khôi phục vào một vault ở khu vực địa lý khác.\n\n**Tài liệu tham khảo:**\n[Azure Key Vault security worlds and geographic boundaries](https://learn.microsoft.com/en-us/azure/key-vault/general/overview-security-worlds) · [Restore-AzKeyVaultKey](https://learn.microsoft.com/en-us/powershell/module/az.keyvault/restore-azkeyvaultkey?view=azps-15.5.0)",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 32",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/32-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-33",
    "questionNumber": 33,
    "text": "Each role may be used once, more than once, or not at all.",
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
        "correctAnswer": "A"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Helpdesk Administrator for MarketingAU"
      },
      {
        "key": "B",
        "text": "Helpdesk Administrator for the tenant"
      },
      {
        "key": "C",
        "text": "User Administrator for MarketingAU"
      },
      {
        "key": "D",
        "text": "User Administrator for the tenant"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Helpdesk Administrator for MarketingAU"
      },
      {
        "key": "B",
        "text": "Helpdesk Administrator for the tenant"
      },
      {
        "key": "C",
        "text": "User Administrator for MarketingAU"
      },
      {
        "key": "D",
        "text": "User Administrator for the tenant"
      }
    ],
    "correctAnswers": [
      "user1=C",
      "user2=A"
    ],
    "explanation": "Quản trị viên người dùng trong phạm vi MarketingAU có thể quản lý tài khoản người dùng trong đơn vị quản trị đó, bao gồm cả việc tạo chúng. Quản trị viên bộ phận trợ giúp trong phạm vi MarketingAU có thể đặt lại mật khẩu cho người dùng không phải quản trị viên trong đơn vị đó. Việc chỉ định vai trò ở cấp độ đối tượng thuê sẽ cung cấp nhiều quyền hơn mức cần thiết.\n\n**Tài liệu tham khảo:**\n[Assign Microsoft Entra roles](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/manage-roles-portal) · [How to create or delete users in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/fundamentals/how-to-create-delete-users)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 33",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/33-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-34",
    "questionNumber": 34,
    "text": "You must ensure that users who manage the production environment are registered for Azure MFA and must use Azure MFA when signing in to the Azure portal. The solution must meet the authentication and authorization requirements.  \n  \nWhat should you do?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "registration",
        "text": "To register the users for Azure MFA, use:",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "enforcement",
        "text": "To enforce Azure MFA authentication, configure:",
        "correctAnswer": "D",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Azure AD Identity Protection"
      },
      {
        "key": "B",
        "text": "Security defaults in Azure AD"
      },
      {
        "key": "C",
        "text": "Azure AD authentication methods policy"
      },
      {
        "key": "D",
        "text": "Grant control in capolicy1"
      },
      {
        "key": "E",
        "text": "Session control in capolicy1"
      },
      {
        "key": "F",
        "text": "Sign-in risk policy in Azure AD Identity Protection for the Litware.com.tenant"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Azure AD Identity Protection"
      },
      {
        "key": "B",
        "text": "Security defaults in Azure AD"
      },
      {
        "key": "C",
        "text": "Azure AD authentication methods policy"
      },
      {
        "key": "D",
        "text": "Grant control in capolicy1"
      },
      {
        "key": "E",
        "text": "Session control in capolicy1"
      },
      {
        "key": "F",
        "text": "Sign-in risk policy in Azure AD Identity Protection for the Litware.com.tenant"
      }
    ],
    "correctAnswers": [
      "registration=A",
      "enforcement=D"
    ],
    "explanation": "Chính sách đăng ký MFA của Azure AD Identity Protection yêu cầu những người dùng được chọn phải đăng ký Azure MFA. Chính sách Truy cập có điều kiện thực thi MFA thông qua các biện pháp kiểm soát cấp phép bằng cách yêu cầu xác thực đa yếu tố; kiểm soát phiên và chính sách rủi ro đăng nhập không cung cấp yêu cầu MFA cổng thông tin Azure chung đó.\n\n**Tài liệu tham khảo:**\n[Configure the multifactor authentication registration policy](https://learn.microsoft.com/en-us/entra/id-protection/howto-identity-protection-configure-mfa-policy) · [How to Configure Grant Controls in Microsoft Entra](https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-conditional-access-grant)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 34",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/34-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-35",
    "questionNumber": 35,
    "text": "You intend to use an Azure Storage account to store data assets.  \n  \nYou need to recommend a solution that satisfies these requirements:  \n  \n- Supports immutable storage  \n- Prevents anonymous access to the storage account  \n- Supports access control list (ACL)-based Azure AD permissions  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Files"
      },
      {
        "key": "B",
        "text": "Azure Data Lake Storage"
      },
      {
        "key": "C",
        "text": "Azure NetApp Files"
      },
      {
        "key": "D",
        "text": "Azure Blob Storage"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Azure Data Lake Storage cung cấp ACL dựa trên không gian tên phân cấp cho người dùng, nhóm, hiệu trưởng dịch vụ và danh tính được quản lý Microsoft Entra ID. Nó cũng hỗ trợ các chính sách WORM bất biến ở cấp vùng chứa, trong khi quyền truy cập blob ẩn danh có thể bị vô hiệu hóa ở cấp tài khoản lưu trữ cơ bản.\n\n**Tài liệu tham khảo:**\n[Access control model in Azure Data Lake Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-access-control-model) · [Overview of immutable storage for blob data](https://learn.microsoft.com/en-us/azure/storage/blobs/immutable-storage-overview)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 35",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/35-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-36",
    "questionNumber": 36,
    "text": "You plan to deploy an infrastructure solution with the following configurations:  \n  \n- External users will access the infrastructure by using Azure Front Door.  \n- Azure API Management will control external-user access to the backend APIs hosted in Azure Kubernetes Service (AKS).  \n- External users will authenticate through an Azure AD B2C tenant that uses OpenID Connect-based federation with a third-party identity provider.  \n  \nWhich function does each service provide? Each function may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "front_door",
        "text": "Front Door:",
        "correctAnswer": "A"
      },
      {
        "id": "api_management",
        "text": "API Management:",
        "correctAnswer": "C"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Protection against Open Web Application Security Project (OWASP) vulnerabilities"
      },
      {
        "key": "B",
        "text": "IP filtering on a per-API level"
      },
      {
        "key": "C",
        "text": "Validation of Azure B2C JSON Web Tokens (JWTs)"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Protection against Open Web Application Security Project (OWASP) vulnerabilities"
      },
      {
        "key": "B",
        "text": "IP filtering on a per-API level"
      },
      {
        "key": "C",
        "text": "Validation of Azure B2C JSON Web Tokens (JWTs)"
      }
    ],
    "correctAnswers": [
      "front_door=A",
      "api_management=C"
    ],
    "explanation": "Azure Front Door WAF cung cấp khả năng bảo vệ được quản lý chống lại các lỗ hổng API và web phổ biến, bao gồm các quy tắc OWASP. Quản lý API Azure có thể sử dụng chính sách `validate-jwt` để thực thi sự tồn tại và tính hợp lệ của JWT do Azure AD B2C phát hành trước khi yêu cầu đến các API phụ trợ được lưu trữ trên máy chủ AKS.\n\n**Tài liệu tham khảo:**\n[Web Application Firewall (WAF) on Azure Front Door](https://learn.microsoft.com/en-us/azure/frontdoor/web-application-firewall) · [Azure API Management policy reference - validate-jwt](https://learn.microsoft.com/en-us/azure/api-management/validate-jwt-policy)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 36",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/36-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-37",
    "questionNumber": 37,
    "text": "You are designing a solution that computes 3D geometry from height-map data.  \n  \nYou need to recommend a solution that meets these requirements:  \n  \n- Performs calculations in Azure.  \n- Ensures each node can communicate data with every other node.  \n- Maximizes the number of nodes calculating multiple scenes as quickly as possible.  \n- Minimizes implementation effort.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783708076038-t2wxlutj.png)  \n  \nWhich two actions should be included in the recommendation? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Enable parallel file systems on Azure."
      },
      {
        "key": "B",
        "text": "Create a render farm that uses virtual machines."
      },
      {
        "key": "C",
        "text": "Create a render farm that uses virtual machine scale sets."
      },
      {
        "key": "D",
        "text": "Create a render farm that uses Azure Batch."
      },
      {
        "key": "E",
        "text": "Enable parallel task execution on compute nodes."
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "Azure Batch cung cấp các nhóm nút điện toán được quản lý cho khối lượng công việc song song và hỗ trợ liên lạc giữa các nút trong một nhóm. Việc kích hoạt thực thi tác vụ song song cho phép nhiều tác vụ chạy đồng thời trên mỗi nút điện toán; Microsoft đặc biệt xác định đây là một cách để giảm thiểu giới hạn nút áp dụng khi cần giao tiếp giữa các nút, tăng số lượng tác vụ có thể chạy đồng thời đồng thời tránh nỗ lực xây dựng và quản lý nhóm kết xuất tùy chỉnh.\n\n**Tài liệu tham khảo:**\n[Run tasks concurrently to maximize usage of Batch compute nodes](https://learn.microsoft.com/en-us/azure/batch/batch-parallel-node-tasks) · [Nodes and pools in Azure Batch](https://learn.microsoft.com/en-us/azure/batch/nodes-and-pools)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783708076038-t2wxlutj.png",
    "sourceTitle": "Examcademy AZ-305 Question 37",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/37-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-38",
    "questionNumber": 38,
    "text": "You plan to deploy the backup policy shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1785751117837-08jk3zan.png)  \n  \nUse the drop-down menus to choose the answer that completes each statement based on the information in the graphic.",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "retention",
        "text": "Virtual machines that are backed up by using the policy can be recovered for up to a maximum of [answer choice]:",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      },
      {
        "id": "rpo",
        "text": "The minimum recovery point objective (RPO) for virtual machines that are backed up by using the policy is [answer choice]:",
        "correctAnswer": "F",
        "choiceKeys": [
          "E",
          "F",
          "G",
          "H",
          "I"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "90 days"
      },
      {
        "key": "B",
        "text": "26 weeks"
      },
      {
        "key": "C",
        "text": "36 months"
      },
      {
        "key": "D",
        "text": "45 months"
      },
      {
        "key": "E",
        "text": "1 hour"
      },
      {
        "key": "F",
        "text": "1 day"
      },
      {
        "key": "G",
        "text": "1 week"
      },
      {
        "key": "H",
        "text": "1 month"
      },
      {
        "key": "I",
        "text": "1 year"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "90 days"
      },
      {
        "key": "B",
        "text": "26 weeks"
      },
      {
        "key": "C",
        "text": "36 months"
      },
      {
        "key": "D",
        "text": "45 months"
      },
      {
        "key": "E",
        "text": "1 hour"
      },
      {
        "key": "F",
        "text": "1 day"
      },
      {
        "key": "G",
        "text": "1 week"
      },
      {
        "key": "H",
        "text": "1 month"
      },
      {
        "key": "I",
        "text": "1 year"
      }
    ],
    "correctAnswers": [
      "retention=C",
      "rpo=F"
    ],
    "explanation": "Chính sách sao lưu Azure VM xác định điểm lưu giữ hàng ngày, hàng tuần, hàng tháng và hàng năm. Khoảng thời gian lưu giữ hàng tháng được kích hoạt là 36 tháng, đây là khoảng thời gian khôi phục dài nhất được định cấu hình. Lịch trình sao lưu tiêu chuẩn hàng ngày sẽ tạo ra một điểm khôi phục theo lịch trình mỗi ngày, do đó RPO tối thiểu là một ngày.\n\n**Tài liệu tham khảo:**\n[Quickstart - Back up a VM with the Azure portal by using Azure Backup](https://learn.microsoft.com/en-us/azure/backup/quick-backup-vm-portal) · [FAQ - Backing up Azure VMs](https://learn.microsoft.com/en-us/azure/backup/backup-azure-vm-backup-faq)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1785751117837-08jk3zan.png",
    "sourceTitle": "Examcademy AZ-305 Question 38",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/38-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-39",
    "questionNumber": 39,
    "text": "You are designing an application that aggregates content for users.  \n  \nYou need to recommend a database solution for the application. The solution must meet these requirements:  \n  \n- Support SQL commands.  \n- Support multi-master writes.  \n- Guarantee low-latency read operations.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Cosmos DB for NoSQL"
      },
      {
        "key": "B",
        "text": "Azure SQL Database that uses active geo-replication"
      },
      {
        "key": "C",
        "text": "Azure SQL Database Hyperscale"
      },
      {
        "key": "D",
        "text": "Azure Cosmos DB for PostgreSQL"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Azure Cosmos DB dành cho NoSQL cung cấp ngôn ngữ truy vấn giống SQL cho dữ liệu JSON, hỗ trợ ghi trên nhiều vùng Azure và cung cấp đảm bảo độ trễ một chữ số mili giây được SLA hỗ trợ cho các lần đọc ở phân vị thứ 99.\n\n**Tài liệu tham khảo:**\n[Azure Cosmos DB for NoSQL overview](https://learn.microsoft.com/en-us/azure/cosmos-db/overview) · [Multi-region writes in Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/multi-region-writes)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 39",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/39-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-40",
    "questionNumber": 40,
    "text": "You are designing a microservices architecture to be hosted in an Azure Kubernetes Service (AKS) cluster. Applications that consume the microservices will run on Azure virtual machines. The virtual machines and the AKS cluster will be located in the same virtual network.  \n  \nYou need to design a solution that exposes the microservices to the consumer applications. The solution must meet these requirements:  \n  \n- Ingress access to the microservices must be limited to one private IP address and secured by using mutual TLS authentication.  \n- The number of incoming microservice calls must be rate-limited.  \n- Costs must be minimized.  \n  \nWhat should you include in the solution?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure App Gateway with Azure Web Application Firewall (WAF)"
      },
      {
        "key": "B",
        "text": "Azure API Management Standard tier with a service endpoint"
      },
      {
        "key": "C",
        "text": "Azure Front Door with Azure Web Application Firewall (WAF)"
      },
      {
        "key": "D",
        "text": "Azure API Management Premium tier with virtual network connection"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Tầng Azure API Management Premium có thể được kết nối với mạng ảo ở chế độ nội bộ để có thể truy cập cổng của nó thông qua địa chỉ IP riêng. Quản lý API hỗ trợ các chính sách xác thực chứng chỉ ứng dụng khách TLS và giới hạn tốc độ lẫn nhau, cho phép cổng thực thi cả xác thực và điều chỉnh cuộc gọi. Khả năng kết nối điểm cuối dịch vụ của tầng Tiêu chuẩn không cung cấp khả năng hiển thị cổng vào riêng tư cần thiết; Do đó, việc triển khai mạng ảo Premium là tùy chọn đáp ứng mọi yêu cầu.\n\n**Tài liệu tham khảo:**\n[Azure API Management with an Azure virtual network](https://learn.microsoft.com/en-us/azure/api-management/virtual-network-concepts?tabs=stv2) · [Secure APIs using client certificate authentication in API Management](https://learn.microsoft.com/en-us/azure/api-management/api-management-howto-mutual-certificates-for-clients)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 40",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/40-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-41",
    "questionNumber": 41,
    "text": "HOTSPOT -  \n  \nYou have an Azure subscription containing the storage accounts shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783706874506-pj4vnm6b.png)  \n  \nYou plan to implement two new apps with the requirements in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783706876779-vkp0d27r.png)  \n  \nWhich storage accounts should you recommend for each app?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "app1",
        "text": "App1:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      },
      {
        "id": "app2",
        "text": "App2:",
        "correctAnswer": "G",
        "choiceKeys": [
          "E",
          "F",
          "G",
          "D"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Storage1 and storage2 only"
      },
      {
        "key": "B",
        "text": "Storage1 and storage3 only"
      },
      {
        "key": "C",
        "text": "Storage1, storage2, and storage3 only"
      },
      {
        "key": "D",
        "text": "Storage1, storage2, storage3, and storage4"
      },
      {
        "key": "E",
        "text": "Storage4 only"
      },
      {
        "key": "F",
        "text": "Storage1 and storage4 only"
      },
      {
        "key": "G",
        "text": "Storage1, storage2, and storage4 only"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Storage1 and storage2 only"
      },
      {
        "key": "B",
        "text": "Storage1 and storage3 only"
      },
      {
        "key": "C",
        "text": "Storage1, storage2, and storage3 only"
      },
      {
        "key": "D",
        "text": "Storage1, storage2, storage3, and storage4"
      },
      {
        "key": "E",
        "text": "Storage4 only"
      },
      {
        "key": "F",
        "text": "Storage1 and storage4 only"
      },
      {
        "key": "G",
        "text": "Storage1, storage2, and storage4 only"
      }
    ],
    "correctAnswers": [
      "app1=B",
      "app2=G"
    ],
    "explanation": "Quản lý vòng đời Blob có thể xếp các khối blob trong tài khoản v2 và BlobStorage đa năng tiêu chuẩn, điều này làm cho storage1 và storage3 phù hợp với App1. Azure Files có sẵn trong các tài khoản v2 và FileStorage đa năng, do đó, storage1, storage2 và storage4 đáp ứng yêu cầu chia sẻ tệp Azure của App2.\n\n**Tài liệu tham khảo:**\n[Azure Blob Storage lifecycle management overview](https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview) · [Azure Files deployment planning](https://learn.microsoft.com/en-us/azure/storage/files/storage-files-planning)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783706874506-pj4vnm6b.png",
    "sourceTitle": "Examcademy AZ-305 Question 41",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/41-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-42",
    "questionNumber": 42,
    "text": "You are building a sales application that will include several Azure cloud services and manage different parts of a transaction. Separate cloud services will process customer orders, billing, payment, inventory, and shipping.  \n  \nYou need to recommend a solution that lets the cloud services asynchronously exchange transaction information by using XML messages.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Notification Hubs"
      },
      {
        "key": "B",
        "text": "Azure Data Lake"
      },
      {
        "key": "C",
        "text": "Azure Service Bus"
      },
      {
        "key": "D",
        "text": "Azure Blob Storage"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Azure Service Bus là một nhà môi giới tin nhắn doanh nghiệp được quản lý nhằm tách riêng các ứng dụng và dịch vụ thông qua hàng đợi lâu bền và xuất bản/đăng ký chủ đề. Nó hỗ trợ giao tiếp không đồng bộ và có thể mang dữ liệu có cấu trúc được mã hóa dưới dạng XML, khiến nó phù hợp để trao đổi dữ liệu giao dịch giữa các dịch vụ hoạt động độc lập.\n\n**Tài liệu tham khảo:**\n[What is Azure Service Bus?](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview) · [Asynchronous messaging patterns and high availability](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-async-messaging)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 42",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/42-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-43",
    "questionNumber": 43,
    "text": "You have an app called App1 that uses an Azure Blob Storage container named app1data.  \n  \nApp1 uploads a cumulative transaction-log file named File1.txt to a block blob in app1data every hour. File1.txt contains transaction data only for the current day.  \n  \nYou must ensure that the final uploaded version of File1.txt from any day can be restored for up to 30 days after it is overwritten. The solution must use the least possible storage space.  \n  \nWhat should the solution include?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "container soft delete"
      },
      {
        "key": "B",
        "text": "blob snapshots"
      },
      {
        "key": "C",
        "text": "blob soft delete"
      },
      {
        "key": "D",
        "text": "blob versioning"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Ảnh chụp nhanh blob có thể được chụp một lần mỗi ngày để duy trì trạng thái cuối cùng của ngày hôm đó và được lưu giữ trong 30 ngày. Ảnh chụp nhanh được tính phí cho các khối duy nhất, do đó chúng cung cấp các điểm khôi phục cần thiết hàng ngày mà không giữ lại mỗi lần ghi đè hàng giờ. Xóa mềm Blob và lập phiên bản blob tự động giữ lại dữ liệu cho mỗi lần ghi đè, tạo ra trạng thái khôi phục hàng giờ không cần thiết và sử dụng nhiều bộ nhớ hơn.\n\n**Tài liệu tham khảo:**\n[Blob snapshots - Azure Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/snapshots-overview) · [Choosing between blob soft delete and blob versioning](https://learn.microsoft.com/en-us/azure/storage/blobs/soft-delete-vs-versioning-options)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 43",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/43-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-44",
    "questionNumber": 44,
    "text": "What should the identity-management strategy contain to support the intended changes?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Deploy domain controllers for corp.fabrikam.com to virtual networks in Azure."
      },
      {
        "key": "B",
        "text": "Move all the domain controllers from corp.fabrikam.com to virtual networks in Azure."
      },
      {
        "key": "C",
        "text": "Deploy a new Azure AD tenant for the authentication of new R&D projects."
      },
      {
        "key": "D",
        "text": "Deploy domain controllers for the rd.fabrikam.com forest to virtual networks in Azure."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Miền Dịch vụ miền Active Directory hiện có có thể được mở rộng sang Azure bằng cách triển khai các bộ điều khiển miền bổ sung dưới dạng Azure virtual machines trong Azure virtual network. Điều này bảo tồn miền `corp.fabrikam.com` hiện có trong khi cung cấp dịch vụ thư mục và xác thực cho các tài nguyên dựa trên Azure; nó không yêu cầu di chuyển tất cả các bộ điều khiển miền hiện có hoặc tạo một đối tượng thuê Microsoft Entra riêng biệt.\n\n**Tài liệu tham khảo:**\n[Install Active Directory Domain Services on an Azure virtual machine](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/deploy/virtual-dc/adds-on-azure-vm) · [Deploy and manage Azure IaaS Active Directory domain controllers in Azure](https://learn.microsoft.com/en-us/training/modules/deploy-manage-azure-iaas-active-directory-domain-controllers-azure/)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 44",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/44-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-45",
    "questionNumber": 45,
    "text": "You need to recommend a solution to integrate Azure Cosmos DB and Azure Synapse. The solution must meet these requirements:  \n  \n- Traffic from an Azure Synapse workspace to the Azure Cosmos DB account must use the Microsoft backbone network.  \n- Traffic from the Azure Synapse workspace to the Azure Cosmos DB account must not be routed across the internet.  \n- Implementation effort must be minimized.  \n  \nWhat should you include in the recommendation?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "synapse_workspace",
        "text": "When provisioning the Azure Synapse workspace:",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "cosmos_account",
        "text": "When configuring the Azure Cosmos DB account, enable:",
        "correctAnswer": "D",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Configure a dedicated managed virtual network."
      },
      {
        "key": "B",
        "text": "Disable public network access to the workspace endpoints."
      },
      {
        "key": "C",
        "text": "Enable the use of the Azure AD authentication."
      },
      {
        "key": "D",
        "text": "Managed private endpoints"
      },
      {
        "key": "E",
        "text": "Server-level firewall rules"
      },
      {
        "key": "F",
        "text": "Service endpoint policies"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Configure a dedicated managed virtual network."
      },
      {
        "key": "B",
        "text": "Disable public network access to the workspace endpoints."
      },
      {
        "key": "C",
        "text": "Enable the use of the Azure AD authentication."
      },
      {
        "key": "D",
        "text": "Managed private endpoints"
      },
      {
        "key": "E",
        "text": "Server-level firewall rules"
      },
      {
        "key": "F",
        "text": "Service endpoint policies"
      }
    ],
    "correctAnswers": [
      "synapse_workspace=A",
      "cosmos_account=D"
    ],
    "explanation": "Mạng ảo được quản lý Synapse được quản lý bởi Azure Synapse, giúp giảm nhu cầu triển khai và duy trì cơ sở hạ tầng mạng. private endpoint được quản lý kết nối riêng tư các tài nguyên Synapse với Azure Cosmos DB thông qua Azure Private Link, thay vì hiển thị đường dẫn dữ liệu để truy cập internet công cộng. Các quy tắc tường lửa và chính sách service endpoint không tạo kết nối private endpoint được quản lý này.\n\n**Tài liệu tham khảo:**\n[Analytics with Azure Synapse Link - Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/synapse-link) · [Create a Managed private endpoint to your data source - Azure Synapse Analytics](https://learn.microsoft.com/en-us/azure/synapse-analytics/security/how-to-create-managed-private-endpoints)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 45",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/45-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-46",
    "questionNumber": 46,
    "text": "You must design a highly available Azure SQL database that meets these requirements:  \n  \n- Failover between database replicas must take place with no data loss.  \n- The database must stay available if an availability zone goes down.  \n- Costs must be kept to a minimum.  \n  \nWhich deployment option should you choose?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure SQL Database Serverless"
      },
      {
        "key": "B",
        "text": "Azure SQL Managed Instance General Purpose"
      },
      {
        "key": "C",
        "text": "Azure SQL Database Basic"
      },
      {
        "key": "D",
        "text": "Azure SQL Database Business Critical"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Tầng quan trọng trong kinh doanh của Azure SQL Database sử dụng nhiều bản sao đồng bộ có tính sẵn sàng cao dựa trên các nhóm khả dụng. Khi bật dự phòng vùng, các bản sao sẽ được phân phối trên availability zones, cung cấp mục tiêu điểm khôi phục (RPO) bằng 0 cho dữ liệu đã cam kết trong các lỗi một vùng và chuyển đổi dự phòng đồng bộ với mất dữ liệu no. Cấp này trực tiếp đáp ứng cả ba yêu cầu (mất dữ liệu no, tính khả dụng của vùng, hiệu quả về chi phí) mà không cần cơ sở hạ tầng sao chép bổ sung.",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 46",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/46-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-47",
    "questionNumber": 47,
    "text": "You must design a highly available Azure SQL database that satisfies these requirements:  \n  \n- Failover between database replicas must take place without data loss.  \n- The database must stay available if an availability zone experiences an outage.  \n- Costs must be kept to a minimum.  \n  \nWhich deployment option should you choose?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure SQL Database Hyperscale"
      },
      {
        "key": "B",
        "text": "Azure SQL Database Premium"
      },
      {
        "key": "C",
        "text": "Azure SQL Database Basic"
      },
      {
        "key": "D",
        "text": "Azure SQL Managed Instance General Purpose"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Triển khai Azure SQL Database Premium dự phòng theo vùng sẽ phân phối các bản sao được đồng bộ hóa trên availability zones. Sao chép đồng bộ giúp không làm mất dữ liệu đã cam kết trong quá trình chuyển đổi dự phòng vùng và Premium không phải trả thêm phí khi bật dự phòng vùng. Cơ bản không hỗ trợ dự phòng vùng; Hyperscale có thể yêu cầu các bản sao bổ sung có tính sẵn sàng cao và không phải là lựa chọn có chi phí thấp nhất cho các yêu cầu này.\n\n**Tài liệu tham khảo:**\n[Reliability in Azure SQL Database](https://learn.microsoft.com/en-us/azure/reliability/reliability-sql-database)",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 47",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/47-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-48",
    "questionNumber": 48,
    "text": "You are building a sales application that will contain several Azure cloud services and manage different parts of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.  \n  \nYou need to recommend a solution that lets the cloud services communicate transaction information asynchronously by using XML messages.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Notification Hubs"
      },
      {
        "key": "B",
        "text": "Azure Queue Storage"
      },
      {
        "key": "C",
        "text": "Azure Blob Storage"
      },
      {
        "key": "D",
        "text": "Azure Application Gateway"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Azure Queue Storage cung cấp hàng đợi tin nhắn tách riêng các thành phần ứng dụng phân tán, cho phép một dịch vụ đặt tin nhắn giao dịch vào hàng đợi để dịch vụ khác xử lý không đồng bộ. Tin nhắn hàng đợi phải tương thích với các yêu cầu XML UTF-8; Đánh dấu XML được mang dưới dạng nội dung thư phải được mã hóa Base64.\n\n**Tài liệu tham khảo:**\n[Introduction to Azure Queue Storage](https://learn.microsoft.com/en-us/azure/storage/queues/storage-queues-introduction) · [Put Message (Azure Queue Storage REST API)](https://learn.microsoft.com/en-us/rest/api/storageservices/put-message)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 48",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/48-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-49",
    "questionNumber": 49,
    "text": "You have an app that generates 50,000 events each day.  \n  \nYou plan to stream the events to an Azure event hub and use Event Hubs Capture to implement cold-path processing. A reporting system will consume the Event Hubs Capture output.  \n  \nIdentify the Azure storage type that must be provisioned and the inbound data format the reporting system must support.",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "storage_type",
        "text": "Storage type:",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "data_format",
        "text": "Data format:",
        "correctAnswer": "E",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Azure Data Lake Storage Gen2"
      },
      {
        "key": "B",
        "text": "Premium block blobs"
      },
      {
        "key": "C",
        "text": "Premium file shares"
      },
      {
        "key": "D",
        "text": "Apache Parquet"
      },
      {
        "key": "E",
        "text": "Avro"
      },
      {
        "key": "F",
        "text": "JSON"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Azure Data Lake Storage Gen2"
      },
      {
        "key": "B",
        "text": "Premium block blobs"
      },
      {
        "key": "C",
        "text": "Premium file shares"
      },
      {
        "key": "D",
        "text": "Apache Parquet"
      },
      {
        "key": "E",
        "text": "Avro"
      },
      {
        "key": "F",
        "text": "JSON"
      }
    ],
    "correctAnswers": [
      "storage_type=A",
      "data_format=E"
    ],
    "explanation": "Azure Event Hubs Capture hỗ trợ Azure Data Lake Storage Gen2 làm đích chụp. Capture ghi dữ liệu sự kiện dưới dạng tệp Avro, do đó hệ thống báo cáo xuôi dòng phải hỗ trợ Avro.\n\n**Tài liệu tham khảo:**\n[Capture events through Azure Event Hubs in Azure Blob Storage or Azure Data Lake Storage](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-capture-overview)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 49",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/49-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-50",
    "questionNumber": 50,
    "text": "Which blade should be used to modify each app registration? Each blade can be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "app1",
        "text": "App1:",
        "correctAnswer": "B"
      },
      {
        "id": "app2",
        "text": "App2:",
        "correctAnswer": "A"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "API permissions"
      },
      {
        "key": "B",
        "text": "App roles"
      },
      {
        "key": "C",
        "text": "Token configuration"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "API permissions"
      },
      {
        "key": "B",
        "text": "App roles"
      },
      {
        "key": "C",
        "text": "Token configuration"
      }
    ],
    "correctAnswers": [
      "app1=B",
      "app2=A"
    ],
    "explanation": "App1 hiển thị vai trò ứng dụng Nhà văn thông qua vai trò Ứng dụng. App2, với tư cách là ứng dụng khách gọi App1, yêu cầu và nhận quyền của ứng dụng đó thông qua quyền API. Các vai trò ứng dụng được chỉ định sẽ được đưa ra trong yêu cầu `roles` của mã thông báo truy cập.\n\n**Tài liệu tham khảo:**\n[appRole resource type](https://learn.microsoft.com/en-us/graph/api/resources/approle?view=graph-rest-1.0) · [Expose scopes in a protected web API](https://learn.microsoft.com/en-us/entra/identity-platform/scenario-protected-web-api-expose-scopes)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 50",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/50-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-51",
    "questionNumber": 51,
    "text": "You intend to use Azure Storage for data assets.  \n  \nYou need to determine the procedure for failing over a general-purpose v2 account as part of a disaster-recovery plan. The solution must satisfy these requirements:  \n  \n- Apps must be able to access the storage account following a failover.  \n- You must be able to fail the storage account back to its original location.  \n- Downtime must be minimized.  \n  \nWhich three actions should you take, in sequence?",
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
        "correctAnswer": "A"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "After a failover, configure geo-redundant storage (GRS) replication for the storage account."
      },
      {
        "key": "B",
        "text": "Initiate a failover."
      },
      {
        "key": "C",
        "text": "Before a failover, configure zone-redundant storage (ZRS) replication for the storage account."
      },
      {
        "key": "D",
        "text": "Before a failover, configure geo-redundant storage (GRS) replication for the storage account."
      },
      {
        "key": "E",
        "text": "After a failover, configure zone-redundant storage (ZRS) replication for the storage account."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "After a failover, configure geo-redundant storage (GRS) replication for the storage account."
      },
      {
        "key": "B",
        "text": "Initiate a failover."
      },
      {
        "key": "C",
        "text": "Before a failover, configure zone-redundant storage (ZRS) replication for the storage account."
      },
      {
        "key": "D",
        "text": "Before a failover, configure geo-redundant storage (GRS) replication for the storage account."
      },
      {
        "key": "E",
        "text": "After a failover, configure zone-redundant storage (ZRS) replication for the storage account."
      }
    ],
    "correctAnswers": [
      "step1=D",
      "step2=B",
      "step3=A"
    ],
    "explanation": "GRS sao chép dữ liệu sang khu vực địa lý thứ cấp và được yêu cầu để chuyển đổi dự phòng tài khoản. Azure cập nhật các điểm cuối dịch vụ lưu trữ trong quá trình chuyển đổi dự phòng để chúng trỏ đến khu vực chính mới. Sau khi chuyển đổi dự phòng ngoài kế hoạch, tài khoản trở thành LRS và mất tính dự phòng địa lý; định cấu hình GRS một lần nữa sao chép dữ liệu sang vùng ban đầu và cho phép thực hiện dự phòng sau này. ZRS không cung cấp tính năng sao chép giữa các vùng.\n\n**Tài liệu tham khảo:**\n[Initiate a storage account failover](https://learn.microsoft.com/en-us/azure/storage/common/storage-initiate-account-failover) · [Azure Storage failover FAQ: scenarios, limitations, and best practices](https://learn.microsoft.com/en-us/azure/storage/common/storage-failover-faq)",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 51",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/51-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-52",
    "questionNumber": 52,
    "text": "Contoso, Ltd. has an Azure subscription containing:  \n  \n- An Azure Synapse Analytics workspace named `contosoworkspace1`  \n- An Azure Data Lake Storage account named `contosolake1`  \n- An Azure SQL database named `contososql1`  \n  \nContoso product data is copied from `contososql1` to `contosolake1`.  \n  \nIts partner, Fabrikam Inc., has an Azure subscription containing:  \n  \n- A virtual machine named `FabrikamVM1` that runs Microsoft SQL Server 2019  \n- An Azure Storage account named `fabrikamsa1`  \n  \nContoso plans to upload research data from `FabrikamVM1` to `contosolake1`. During upload, the research data must be transformed into the formats used by Contoso. The data in `contosolake1` will be analyzed by using `contosoworkspace1`.  \n  \nRecommend a solution that meets these requirements:  \n  \n- Upload and transform the research data from `FabrikamVM1`.  \n- Provide Fabrikam restricted access to snapshots of the data in `contosoworkspace1`.  \n  \nWhat should you recommend for each requirement?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "upload_transform",
        "text": "Upload and transform the data:",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "restricted_access",
        "text": "Provide restricted access:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Azure Data Box Gateway"
      },
      {
        "key": "B",
        "text": "Azure Data Share"
      },
      {
        "key": "C",
        "text": "Azure Synapse pipelines"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Azure Data Box Gateway"
      },
      {
        "key": "B",
        "text": "Azure Data Share"
      },
      {
        "key": "C",
        "text": "Azure Synapse pipelines"
      }
    ],
    "correctAnswers": [
      "upload_transform=C",
      "restricted_access=B"
    ],
    "explanation": "Đường dẫn Azure Synapse có thể sao chép dữ liệu từ SQL Server và sử dụng các luồng dữ liệu ánh xạ để chuyển đổi dữ liệu trước khi được ghi vào Azure Data Lake Storage. Azure Data Share hỗ trợ chia sẻ ảnh chụp nhanh dữ liệu một cách an toàn với các tổ chức bên ngoài và đăng ký Azure.\n\n**Tài liệu tham khảo:**\n[Copy and transform data to and from SQL Server by using Azure Data Factory or Azure Synapse Analytics](https://learn.microsoft.com/en-us/azure/data-factory/connector-sql-server) · [Share and receive data from Azure Blob Storage and Azure Data Lake Storage](https://learn.microsoft.com/en-us/azure/data-share/how-to-share-from-storage)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 52",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/52-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-53",
    "questionNumber": 53,
    "text": "You plan to automate the deployment of resources to Azure subscriptions.  \n  \nWhat is one difference between using Azure Blueprints and Azure Resource Manager (ARM) templates?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "ARM templates remain connected to the deployed resources."
      },
      {
        "key": "B",
        "text": "Only blueprints can contain policy definitions."
      },
      {
        "key": "C",
        "text": "Only ARM templates can contain policy definitions."
      },
      {
        "key": "D",
        "text": "Blueprints remain connected to the deployed resources."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Azure Blueprint duy trì mối quan hệ giữa định nghĩa kế hoạch chi tiết và nhiệm vụ được triển khai của nó, hỗ trợ việc theo dõi và kiểm tra liên tục. Các mẫu ARM không còn được kết nối tích cực với tài nguyên sau khi triển khai.\n\n**Tài liệu tham khảo:**\n[What is Azure Blueprints (Preview)?](https://learn.microsoft.com/en-us/azure/governance/blueprints/overview)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 53",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/53-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-54",
    "questionNumber": 54,
    "text": "You need to recommend a solution for generating a monthly report of all new Azure Resource Manager (ARM) resource deployments in your Azure subscription.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Activity Log"
      },
      {
        "key": "B",
        "text": "Azure Arc"
      },
      {
        "key": "C",
        "text": "Azure Analysis Services"
      },
      {
        "key": "D",
        "text": "Azure Monitor metrics"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Nhật ký hoạt động Azure ghi lại các sự kiện trên mặt phẳng điều khiển cấp đăng ký, bao gồm việc tạo tài nguyên và các hoạt động triển khai Trình quản lý tài nguyên Azure. Nó cung cấp dữ liệu kiểm tra cần thiết để xác định và báo cáo các hoạt động triển khai mới trong khoảng thời gian hàng tháng.\n\n**Tài liệu tham khảo:**\n[Activity log in Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/platform/activity-log)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 54",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/54-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-55",
    "questionNumber": 55,
    "text": "You must design a highly available Azure SQL database that satisfies these requirements:  \n  \n- Failover between database replicas must happen with no data loss.  \n- The database must stay available if an availability zone fails.  \n- Costs must be kept to a minimum.  \n  \nWhich deployment option should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure SQL Database Serverless"
      },
      {
        "key": "B",
        "text": "Azure SQL Database Business Critical"
      },
      {
        "key": "C",
        "text": "Azure SQL Database Basic"
      },
      {
        "key": "D",
        "text": "Azure SQL Database Standard"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Tầng dịch vụ quan trọng trong kinh doanh duy trì nhiều bản sao cơ sở dữ liệu đồng bộ và hỗ trợ dự phòng vùng, phân phối các bản sao trên availability zones. Một bản sao được đồng bộ hóa có thể trở thành bản sao chính sau lỗi vùng, với dự kiến ​​no sẽ mất dữ liệu đã cam kết. Cơ bản và Tiêu chuẩn không hỗ trợ dự phòng vùng; Business Critical cũng tính thêm phí no để cho phép dự phòng vùng vì nó đã cung cấp nhiều bản sao.\n\n**Tài liệu tham khảo:**\n[Reliability in Azure SQL Database](https://learn.microsoft.com/en-us/azure/reliability/reliability-sql-database)",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 55",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/55-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-56",
    "questionNumber": 56,
    "text": "You are planning a storage solution. The solution must satisfy these requirements:  \n  \n- Support at least 500 requests per second.  \n- Support large image, video, and audio streams.  \n  \nWhich type of Azure Storage account should you provision?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "standard general-purpose v2"
      },
      {
        "key": "B",
        "text": "premium block blobs"
      },
      {
        "key": "C",
        "text": "premium page blobs"
      },
      {
        "key": "D",
        "text": "premium file shares"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Tài khoản v2 đa năng tiêu chuẩn hỗ trợ Azure Blob Storage, được thiết kế để truyền phát video và âm thanh. Các khối khối của nó hỗ trợ các đối tượng lên tới khoảng 190,7 TiB và có tốc độ mục tiêu lên tới 3.000 yêu cầu mỗi giây trên mỗi blob, đáp ứng cả yêu cầu về luồng lớn và 500 yêu cầu mỗi giây. Tài khoản blob khối cao cấp chủ yếu được đề xuất khi tỷ lệ giao dịch cao, đối tượng nhỏ hơn hoặc độ trễ thấp liên tục yêu cầu hiệu suất cao cấp.\n\n**Tài liệu tham khảo:**\n[Introduction to Azure Blob Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction) · [Scalability and performance targets for Blob storage](https://learn.microsoft.com/en-us/azure/storage/blobs/scalability-targets)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 56",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/56-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-57",
    "questionNumber": 57,
    "text": "You are developing a sales application that will include several Azure cloud services and process different parts of a transaction. Different cloud services will handle customer orders, billing, payment, inventory, and shipping.  \n  \nYou need to recommend a solution that enables the cloud services to communicate transaction information asynchronously by using XML messages.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Service Bus"
      },
      {
        "key": "B",
        "text": "Azure Blob Storage"
      },
      {
        "key": "C",
        "text": "Azure Notification Hubs"
      },
      {
        "key": "D",
        "text": "Azure Application Gateway"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Azure Service Bus cung cấp các hàng đợi bền bỉ và các chủ đề đăng ký xuất bản để liên lạc không đồng bộ đáng tin cậy giữa các dịch vụ được tách rời. Tải trọng tin nhắn của nó có thể chứa dữ liệu có cấu trúc như XML, giúp nó phù hợp để trao đổi thông tin giao dịch giữa các dịch vụ đặt hàng, thanh toán, thanh toán, hàng tồn kho và vận chuyển.\n\n**Tài liệu tham khảo:**\n[What is Azure Service Bus?](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview) · [Asynchronous messaging patterns and high availability](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-async-messaging)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 57",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/57-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-58",
    "questionNumber": 58,
    "text": "HOTSPOT  \n  \nYou intend to use Azure SQL as a database platform.  \n  \nYou must recommend an Azure SQL product and service tier that meet these requirements:  \n  \n- Automatically scale compute resources according to workload demand  \n- Offer per-second billing  \n  \nWhat should you recommend?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "azure_sql_product",
        "text": "Azure SQL product:",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "service_tier",
        "text": "Service tier:",
        "correctAnswer": "F",
        "choiceKeys": [
          "D",
          "E",
          "F",
          "G",
          "H"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "A single Azure SQL database"
      },
      {
        "key": "B",
        "text": "An Azure SQL Database elastic pool"
      },
      {
        "key": "C",
        "text": "Azure SQL Managed Instance"
      },
      {
        "key": "D",
        "text": "Basic"
      },
      {
        "key": "E",
        "text": "Business Critical"
      },
      {
        "key": "F",
        "text": "General Purpose"
      },
      {
        "key": "G",
        "text": "Hyperscale"
      },
      {
        "key": "H",
        "text": "Standard"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "A single Azure SQL database"
      },
      {
        "key": "B",
        "text": "An Azure SQL Database elastic pool"
      },
      {
        "key": "C",
        "text": "Azure SQL Managed Instance"
      },
      {
        "key": "D",
        "text": "Basic"
      },
      {
        "key": "E",
        "text": "Business Critical"
      },
      {
        "key": "F",
        "text": "General Purpose"
      },
      {
        "key": "G",
        "text": "Hyperscale"
      },
      {
        "key": "H",
        "text": "Standard"
      }
    ],
    "correctAnswers": [
      "azure_sql_product=A",
      "service_tier=F"
    ],
    "explanation": "Azure SQL Database serverless tự động điều chỉnh quy mô điện toán dựa trên nhu cầu khối lượng công việc và mức sử dụng điện toán tính theo giây. Nó có sẵn ở tầng dịch vụ Mục đích chung, do đó, một Azure SQL database duy nhất có Mục đích chung đáp ứng cả hai yêu cầu.\n\n**Tài liệu tham khảo:**\n[Serverless compute tier - Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/serverless-tier-overview?view=azuresql)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 58",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/58-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-59",
    "questionNumber": 59,
    "text": "You are designing an Azure IoT Hub solution that will contain 50,000 IoT devices.  \n  \nEach device will stream data that includes temperature, device ID, and time data. About 50,000 records will be written per second. The data must be visualized in near real time.  \n  \nYou need to recommend a service for storing and querying the data.  \n  \nWhich two services can you recommend? Each correct answer presents a complete solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Table Storage"
      },
      {
        "key": "B",
        "text": "Azure Event Grid"
      },
      {
        "key": "C",
        "text": "Azure Cosmos DB SQL API"
      },
      {
        "key": "D",
        "text": "Azure Time Series Insights"
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Đối với 50.000 thiết bị IoT truyền phát 50.000 bản ghi mỗi giây với khả năng trực quan hóa gần như thời gian thực, hai dịch vụ đáp ứng tất cả các yêu cầu: API SQL Azure Cosmos DB cung cấp khả năng lưu trữ có thể mở rộng theo chiều ngang và truy vấn dựa trên SQL để đo từ xa khối lượng lớn, trong khi Azure Time Series Insights được xây dựng có mục đích để thu nạp, lưu trữ, truy vấn và trực quan hóa dữ liệu IoT chuỗi thời gian trong thời gian gần như thời gian thực. Azure Table Storage (A) không thể xử lý thông lượng và Azure Event Grid (B) chỉ là một nhà môi giới không có khả năng lưu trữ hoặc truy vấn.",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 59",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/59-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-60",
    "questionNumber": 60,
    "text": "You have an Azure subscription.  \n  \nYou need to recommend a solution that enables developers to provision Azure virtual machines. The solution must meet these requirements:  \n  \n- Allow virtual machines to be created only in specified regions.  \n- Allow only specified virtual machine sizes to be created.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Attribute-based access control (ABAC)"
      },
      {
        "key": "B",
        "text": "Azure Policy"
      },
      {
        "key": "C",
        "text": "Conditional Access policies"
      },
      {
        "key": "D",
        "text": "role-based access control (RBAC)"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Chính sách Azure cung cấp các biện pháp kiểm soát quản trị dựa trên việc từ chối để triển khai tài nguyên. Chính sách Vị trí được phép tích hợp hạn chế triển khai ở các vùng được chỉ định và chính sách SKU kích thước máy ảo được phép hạn chế SKU VM có thể được triển khai.\n\n**Tài liệu tham khảo:**\n[Azure Policy overview](https://learn.microsoft.com/en-us/azure/governance/policy/overview) · [Built-in policy definitions for Azure Virtual Machines](https://learn.microsoft.com/en-us/azure/virtual-machines/policy-reference)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 60",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/60-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-61",
    "questionNumber": 61,
    "text": "Your company hosts 300 virtual machines in a VMware environment. The virtual machines differ in size and have varying utilization levels.  \n  \nYou plan to migrate all the virtual machines to Azure.  \n  \nYou need to recommend the number and sizes of Azure virtual machines required to migrate the existing workloads to Azure. The solution must minimize administrative effort.  \n  \nWhat should you use to make the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Pricing calculator"
      },
      {
        "key": "B",
        "text": "Azure Advisor"
      },
      {
        "key": "C",
        "text": "Azure Migrate"
      },
      {
        "key": "D",
        "text": "Azure Cost Management"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Khám phá và đánh giá di chuyển Azure đánh giá khối lượng công việc của VMware và có thể sử dụng dữ liệu hiệu suất CPU, bộ nhớ, ổ đĩa và mạng đã thu thập để tạo ra các đề xuất Azure VM có kích thước phù hợp. Điều này hỗ trợ xác định quy mô bất động sản di cư theo mức sử dụng thực tế đồng thời giảm thiểu công việc đánh giá thủ công.\n\n**Tài liệu tham khảo:**\n[Overview of Azure Migrate assessment types](https://learn.microsoft.com/en-us/azure/migrate/concepts-assessment-overview?view=migrate) · [Performance vs. as-is on-premises assessments](https://learn.microsoft.com/en-us/azure/migrate/target-right-sizing?view=migrate)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 61",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/61-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-62",
    "questionNumber": 62,
    "text": "You have an Azure Active Directory (Azure AD) tenant synchronized with an on-premises Active Directory domain.  \n  \nYour company has an internally developed line-of-business (LOB) application.  \n  \nYou need to implement SAML single sign-on (SSO) and require multi-factor authentication (MFA) when users try to access the application from an unknown location.  \n  \nWhich two features should be included in the solution? Each correct answer represents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure AD Privileged Identity Management (PIM)"
      },
      {
        "key": "B",
        "text": "Azure Application Gateway"
      },
      {
        "key": "C",
        "text": "Azure AD enterprise applications"
      },
      {
        "key": "D",
        "text": "Azure AD Identity Protection"
      },
      {
        "key": "E",
        "text": "Conditional Access policies"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "Các ứng dụng doanh nghiệp Azure AD cung cấp cấu hình SSO SAML cho ứng dụng được tích hợp với Azure AD. Các chính sách Truy cập có điều kiện có thể nhắm mục tiêu ứng dụng, đánh giá các điều kiện mạng/vị trí và yêu cầu MFA để truy cập bên ngoài các vị trí đáng tin cậy hoặc được đặt tên.\n\n**Tài liệu tham khảo:**\n[Enable SAML single sign-on for an enterprise application](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/add-application-portal-setup-sso) · [Require MFA for all users with Conditional Access](https://learn.microsoft.com/en-us/entra/identity/conditional-access/policy-all-users-mfa-strength)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 62",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/62-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-63",
    "questionNumber": 63,
    "text": "You are designing a data-storage solution to support reporting.  \n  \nThe solution will ingest high volumes of JSON data by using Azure Event Hubs. As data arrives, Event Hubs will write it to storage. The solution must meet these requirements:  \n  \n- Organize data into directories by date and time.  \n- Allow stored data to be queried directly, transformed into summarized tables, and then saved in a data warehouse.  \n- Ensure that the data warehouse can store 50 TB of relational data and support between 200 and 300 concurrent read operations.  \n  \nWhich service should you recommend for each type of data store?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "ingested_data",
        "text": "Data store for the ingested data:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      },
      {
        "id": "data_warehouse",
        "text": "Data store for the data warehouse:",
        "correctAnswer": "G",
        "choiceKeys": [
          "E",
          "F",
          "G",
          "H"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Azure Blob Storage"
      },
      {
        "key": "B",
        "text": "Azure Data Lake Storage Gen2"
      },
      {
        "key": "C",
        "text": "Azure Files"
      },
      {
        "key": "D",
        "text": "Azure NetApp Files"
      },
      {
        "key": "E",
        "text": "Azure Cosmos DB Cassandra API"
      },
      {
        "key": "F",
        "text": "Azure Cosmos DB SQL API"
      },
      {
        "key": "G",
        "text": "Azure SQL Database Hyperscale"
      },
      {
        "key": "H",
        "text": "Azure Synapse Analytics dedicated SQL pools"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Azure Blob Storage"
      },
      {
        "key": "B",
        "text": "Azure Data Lake Storage Gen2"
      },
      {
        "key": "C",
        "text": "Azure Files"
      },
      {
        "key": "D",
        "text": "Azure NetApp Files"
      },
      {
        "key": "E",
        "text": "Azure Cosmos DB Cassandra API"
      },
      {
        "key": "F",
        "text": "Azure Cosmos DB SQL API"
      },
      {
        "key": "G",
        "text": "Azure SQL Database Hyperscale"
      },
      {
        "key": "H",
        "text": "Azure Synapse Analytics dedicated SQL pools"
      }
    ],
    "correctAnswers": [
      "ingested_data=B",
      "data_warehouse=G"
    ],
    "explanation": "Azure Data Lake Storage Gen2 cung cấp không gian tên phân cấp cho lưu trữ dựa trên thư mục và được hỗ trợ dưới dạng đích Chụp Azure Event Hubs. Azure SQL Database Hyperscale hỗ trợ cơ sở dữ liệu lên tới 128 TB, lên tới 30.000 phiên đồng thời và mở rộng quy mô đọc thông qua các bản sao thứ cấp, đáp ứng các yêu cầu về dung lượng quan hệ và đọc đồng thời.\n\n**Tài liệu tham khảo:**\n[Configure Event Hubs Capture to Azure Data Lake Storage Gen2](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-capture-enable-through-portal) · [Azure SQL Database single-database vCore resource limits](https://learn.microsoft.com/en-us/azure/azure-sql/database/resource-limits-vcore-single-databases?view=azuresql)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 63",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/63-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-64",
    "questionNumber": 64,
    "text": "You intend to deploy a containerized web app across five Azure Kubernetes Service (AKS) clusters, with each cluster located in a separate Azure region.  \n  \nInternet access to the app must meet these requirements:  \n  \n- Route incoming HTTPS requests to the cluster with the lowest network latency.  \n- Route HTTPS traffic to individual pods through an ingress controller.  \n- Minimize failover time if an AKS cluster becomes unavailable.  \n  \nWhat should be included in the solution?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "global_load_balancing",
        "text": "For global load balancing:",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      },
      {
        "id": "ingress_controller",
        "text": "As the ingress controller:",
        "correctAnswer": "E",
        "choiceKeys": [
          "E",
          "F",
          "G"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Azure Front Door"
      },
      {
        "key": "B",
        "text": "Azure Traffic Manager"
      },
      {
        "key": "C",
        "text": "Cross-region load balancing in Azure"
      },
      {
        "key": "D",
        "text": "Standard Load Balancer"
      },
      {
        "key": "E",
        "text": "Azure Application Gateway"
      },
      {
        "key": "F",
        "text": "Azure Standard Load Balancer"
      },
      {
        "key": "G",
        "text": "Basic Azure Load Balancer"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Azure Front Door"
      },
      {
        "key": "B",
        "text": "Azure Traffic Manager"
      },
      {
        "key": "C",
        "text": "Cross-region load balancing in Azure"
      },
      {
        "key": "D",
        "text": "Standard Load Balancer"
      },
      {
        "key": "E",
        "text": "Azure Application Gateway"
      },
      {
        "key": "F",
        "text": "Azure Standard Load Balancer"
      },
      {
        "key": "G",
        "text": "Basic Azure Load Balancer"
      }
    ],
    "correctAnswers": [
      "global_load_balancing=A",
      "ingress_controller=E"
    ],
    "explanation": "Azure Front Door thực hiện định tuyến HTTP/HTTPS Lớp 7 toàn cầu bằng cách sử dụng các thăm dò tình trạng và lựa chọn nguồn gốc dựa trên độ trễ, chuyển các yêu cầu đến nguồn gốc khu vực lành mạnh có độ trễ thấp nhất và không chuyển đổi được khi nguồn gốc không lành mạnh. Azure Application Gateway, được tích hợp với AKS thông qua Bộ điều khiển xâm nhập cổng ứng dụng (AGIC), cung cấp định tuyến xâm nhập HTTP/HTTPS cho khối lượng công việc AKS và nhóm của chúng.\n\n**Tài liệu tham khảo:**\n[Traffic routing methods to origin - Azure Front Door](https://learn.microsoft.com/en-us/azure/frontdoor/routing-methods) · [Add health probes to your AKS pods](https://learn.microsoft.com/en-us/azure/application-gateway/ingress-controller-add-health-probes)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 64",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/64-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-65",
    "questionNumber": 65,
    "text": "After migrating App1 to Azure, you must enforce the data-modification requirements to satisfy the security and compliance requirements.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create an access policy for the blob service."
      },
      {
        "key": "B",
        "text": "Implement Azure resource locks."
      },
      {
        "key": "C",
        "text": "Create Azure RBAC assignments."
      },
      {
        "key": "D",
        "text": "Modify the access level of the blob service."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Chính sách bất biến Azure Blob Storage cung cấp tính năng bảo vệ ghi một lần, đọc nhiều (WORM), ngăn không cho dữ liệu blob được bảo vệ bị sửa đổi hoặc xóa trong khoảng thời gian lưu giữ đã định cấu hình hoặc trong khi áp dụng lệnh lưu giữ pháp lý. Nó được định cấu hình thông qua cài đặt chính sách truy cập blob/container và dành cho các yêu cầu duy trì tuân thủ và quy định.\n\n**Tài liệu tham khảo:**\n[Overview of immutable storage for blob data - Azure Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/immutable-storage-overview) · [Configure immutability policies for blob versions - Azure Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/immutable-policy-configure-version-scope)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 65",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/65-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-66",
    "questionNumber": 66,
    "text": "You need to recommend a data-storage strategy for WebApp1.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "an Azure virtual machine that runs SQL Server"
      },
      {
        "key": "B",
        "text": "a fixed-size DTU Azure SQL database"
      },
      {
        "key": "C",
        "text": "an Azure SQL Database elastic pool"
      },
      {
        "key": "D",
        "text": "a vCore-based Azure SQL database"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Azure SQL Database dựa trên vCore cung cấp dịch vụ cơ sở dữ liệu PaaS và hỗ trợ Azure Hybrid Benefit cho SQL Server, cho phép các giấy phép SQL Server hiện có đủ điều kiện để giảm chi phí cơ sở dữ liệu. Mô hình vCore cũng cung cấp sự lựa chọn độc lập về tài nguyên tính toán và lưu trữ.\n\n**Tài liệu tham khảo:**\n[Purchasing models and service tiers - Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/purchasing-models?view=azuresql)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 66",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/66-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-67",
    "questionNumber": 67,
    "text": "You need to recommend an App Service architecture that fulfills the requirements for App1. The solution must minimize costs.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "one App Service Environment (ASE) per availability zone"
      },
      {
        "key": "B",
        "text": "one App Service Environment (ASE) per region"
      },
      {
        "key": "C",
        "text": "one App Service plan per region"
      },
      {
        "key": "D",
        "text": "one App Service plan per availability zone"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Gói Dịch vụ ứng dụng được tạo trong một khu vực và nhiều ứng dụng trong cùng một gói sẽ chia sẻ tài nguyên điện toán của gói. Môi trường dịch vụ ứng dụng cung cấp khả năng cách ly chuyên dụng và yêu cầu tầng biệt lập v2, khiến chúng đắt hơn so với dịch vụ Dịch vụ ứng dụng có nhiều đối tượng thuê. Khả năng phục hồi của vùng sẵn sàng được định cấu hình bằng cách phân phối các phiên bản kế hoạch giữa các vùng trong một khu vực, thay vì tạo kế hoạch cho từng vùng.\n\n**Tài liệu tham khảo:**\n[Azure App Service plans](https://learn.microsoft.com/en-us/azure/app-service/overview-hosting-plans) · [App Service Environment v3 and multitenant comparison](https://learn.microsoft.com/en-us/azure/app-service/environment/ase-multi-tenant-comparison)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 67",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/67-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-68",
    "questionNumber": 68,
    "text": "You have an Azure subscription containing 1,000 resources.  \n  \nYou need to produce compliance reports for the subscription. The solution must allow the resources to be grouped by department.  \n  \nWhat should you use to organize the resources?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "application groups and quotas"
      },
      {
        "key": "B",
        "text": "Azure Policy and tags"
      },
      {
        "key": "C",
        "text": "administrative units and Azure Lighthouse"
      },
      {
        "key": "D",
        "text": "resource groups and role assignments"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Chính sách Azure đánh giá việc tuân thủ tài nguyên và cung cấp dữ liệu tuân thủ cũng như báo cáo cho đăng ký. Thẻ là siêu dữ liệu khóa-giá trị giúp phân loại tài nguyên theo thuộc tính của tổ chức, chẳng hạn như bộ phận và Chính sách Azure có thể thực thi việc sử dụng thẻ nhất quán trên quy mô lớn.\n\n**Tài liệu tham khảo:**\n[Overview of Azure Policy](https://learn.microsoft.com/en-us/azure/governance/policy/overview) · [Use tags to organize your Azure resources and management hierarchy](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 68",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/68-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-69",
    "questionNumber": 69,
    "text": "Your company has offices in New York City, Sydney, Paris, and Johannesburg.  \n  \nThe company has an Azure subscription.  \n  \nYou plan to deploy a new Azure networking solution that meets these requirements:  \n  \n- Connect to ExpressRoute circuits in the Azure regions of East US, Southeast Asia, North Europe, and South Africa  \n- Minimize latency by supporting connections in three regions  \n- Support site-to-site VPN connections  \n- Minimize costs  \n  \nYou need to determine the minimum number of Azure Virtual WAN hubs to deploy and the virtual WAN SKU to use.",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "number_of_virtual_wan_hubs",
        "text": "Number of Virtual WAN hubs:",
        "correctAnswer": "D",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      },
      {
        "id": "virtual_wan_sku",
        "text": "Virtual WAN SKU:",
        "correctAnswer": "F",
        "choiceKeys": [
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "4"
      },
      {
        "key": "E",
        "text": "Basic"
      },
      {
        "key": "F",
        "text": "Standard"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "4"
      },
      {
        "key": "E",
        "text": "Basic"
      },
      {
        "key": "F",
        "text": "Standard"
      }
    ],
    "correctAnswers": [
      "number_of_virtual_wan_hubs=D",
      "virtual_wan_sku=F"
    ],
    "explanation": "Một trung tâm WAN ảo kết nối với mạch ExpressRoute trong cùng khu vực Azure, do đó cần có bốn trung tâm cho các mạch ở Đông Hoa Kỳ, Đông Nam Á, Bắc Âu và Nam Phi. SKU WAN ảo tiêu chuẩn hỗ trợ cả ExpressRoute và VPN site-to-site; SKU cơ bản hỗ trợ VPN site-to-site nhưng không hỗ trợ ExpressRoute.\n\n**Tài liệu tham khảo:**\n[Azure Virtual WAN FAQ](https://learn.microsoft.com/en-us/azure/virtual-wan/virtual-wan-faq) · [Virtual WAN settings](https://learn.microsoft.com/en-us/azure/virtual-wan/virtual-wan-about#virtual-wan-types)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 69",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/69-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-70",
    "questionNumber": 70,
    "text": "You have SQL Server running on an Azure virtual machine. The databases receive writes nightly as part of a batch process.  \n  \nYou need to recommend a disaster recovery solution for the data. The solution must meet these requirements:  \n  \n- Provide the ability to recover from a regional outage.  \n- Support a recovery time objective (RTO) of 15 minutes.  \n- Support a recovery point objective (RPO) of 24 hours.  \n- Support automated recovery.  \n- Minimize costs.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure virtual machine availability sets"
      },
      {
        "key": "B",
        "text": "Azure Disk Backup"
      },
      {
        "key": "C",
        "text": "an Always On availability group"
      },
      {
        "key": "D",
        "text": "Azure Site Recovery"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Azure Site Recovery sao chép Azure virtual machines sang vùng mục tiêu để khắc phục thảm họa trong khu vực và có thể điều phối chuyển đổi dự phòng thông qua các kế hoạch khôi phục. Đối với khối lượng công việc SQL Server, Microsoft ghi lại RTO khôi phục trang dự kiến ​​thường dưới 15 phút; bản sao không đồng bộ của nó có thể đáp ứng RPO 24 giờ trong khi tránh được chi phí triển khai SQL Server thứ cấp hoạt động liên tục.\n\n**Tài liệu tham khảo:**\n[Set up disaster recovery for SQL Server with Azure Site Recovery](https://learn.microsoft.com/en-us/azure/site-recovery/site-recovery-sql) · [Reliability in Azure Site Recovery](https://learn.microsoft.com/en-us/azure/reliability/reliability-site-recovery)",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 70",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/70-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-71",
    "questionNumber": 71,
    "text": "You are designing a data analytics solution using Azure Synapse and Azure Data Lake Storage Gen2.  \n  \nRecommend Azure Synapse pools that meet these requirements:",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "ingest_hash",
        "text": "Ingest data from Data Lake Storage into hash-distributed tables:",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "delta_update",
        "text": "Implement, query, and update data in Delta Lake:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "A dedicated SQL pool"
      },
      {
        "key": "B",
        "text": "A serverless Apache Spark pool"
      },
      {
        "key": "C",
        "text": "A serverless SQL pool"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "A dedicated SQL pool"
      },
      {
        "key": "B",
        "text": "A serverless Apache Spark pool"
      },
      {
        "key": "C",
        "text": "A serverless SQL pool"
      }
    ],
    "correctAnswers": [
      "ingest_hash=A",
      "delta_update=B"
    ],
    "explanation": "Nhóm SQL chuyên dụng hỗ trợ các bảng phân phối băm và nhập từ hồ dữ liệu. Nhóm Apache Spark hỗ trợ tạo, truy vấn và sửa đổi các bảng Delta Lake; Nhóm SQL không có máy chủ có thể truy vấn dữ liệu Delta nhưng không thể sửa đổi các bảng hồ được đồng bộ hóa.\n\n**Tài liệu tham khảo:**\n[Synapse SQL architecture](https://learn.microsoft.com/en-us/azure/synapse-analytics/sql/overview-architecture) · [Access lake databases using serverless SQL pool](https://learn.microsoft.com/en-us/azure/synapse-analytics/metadata/database)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 71",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/71-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-72",
    "questionNumber": 72,
    "text": "You are developing a sales application that will include several Azure cloud services and handle different parts of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.  \n  \nYou need to recommend a solution that enables the cloud services to communicate transaction information asynchronously by using XML messages.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Service Bus"
      },
      {
        "key": "B",
        "text": "Azure Data Lake"
      },
      {
        "key": "C",
        "text": "Azure Application Gateway"
      },
      {
        "key": "D",
        "text": "Azure Notification Hubs"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Azure Service Bus là một nhà môi giới tin nhắn doanh nghiệp được quản lý hoàn toàn, tách riêng các ứng dụng và dịch vụ thông qua hàng đợi và các chủ đề đăng ký xuất bản. Nó hỗ trợ giao tiếp không đồng bộ, lưu trữ và chuyển tiếp và tải trọng tin nhắn của nó có thể mang dữ liệu có cấu trúc như XML.\n\n**Tài liệu tham khảo:**\n[What is Azure Service Bus?](https://learn.microsoft.com/en-gb/azure/service-bus-messaging/service-bus-messaging-overview) · [Asynchronous messaging patterns and high availability](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-async-messaging)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 72",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/72-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-73",
    "questionNumber": 73,
    "text": "You intend to deploy 10 applications to Azure. The applications will be deployed across two Azure Kubernetes Service (AKS) clusters, with each cluster located in a separate Azure region.  \n  \nThe application deployment must satisfy the following requirements:  \n  \n- Ensure that the applications stay available if one AKS cluster fails.  \n- Ensure that internet connection traffic is encrypted by using SSL, without needing to configure SSL on every container.  \n  \nWhich service should be included in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Front Door"
      },
      {
        "key": "B",
        "text": "Azure Traffic Manager"
      },
      {
        "key": "C",
        "text": "AKS ingress controller"
      },
      {
        "key": "D",
        "text": "Azure Load Balancer"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Azure Front Door là bộ cân bằng tải Lớp 7 toàn cầu giúp theo dõi tình trạng nguồn gốc và có thể chuyển đổi dự phòng lưu lượng truy cập từ cụm AKS không có sẵn sang cụm khu vực thay thế. Nó cũng hỗ trợ chấm dứt TLS/SSL (giảm tải SSL) ở biên, tránh cấu hình SSL trên mỗi vùng chứa ứng dụng.\n\n**Tài liệu tham khảo:**\n[Accelerate and secure your web application with Azure Front Door](https://learn.microsoft.com/en-us/azure/frontdoor/scenarios) · [Azure Front Door best practices](https://learn.microsoft.com/en-us/azure/frontdoor/best-practices)",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 73",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/73-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-74",
    "questionNumber": 74,
    "text": "You have an Azure subscription containing a Basic Azure virtual WAN named VirtualWAN1 and the virtual hubs shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783706725971-2qots6h6.png)  \n  \nYou have an ExpressRoute circuit in the US East Azure region.  \n  \nYou need to create an ExpressRoute association with VirtualWAN1.  \n  \nWhat should you do first?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Upgrade VirtualWAN1 to Standard."
      },
      {
        "key": "B",
        "text": "Create a gateway on Hub1."
      },
      {
        "key": "C",
        "text": "Enable the ExpressRoute premium add-on."
      },
      {
        "key": "D",
        "text": "Create a hub virtual network in US East."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Mạng WAN ảo Azure cơ bản chỉ hỗ trợ VPN site-to-site. Việc nâng cấp nó lên Tiêu chuẩn sẽ nâng cấp các trung tâm của nó lên các trung tâm Tiêu chuẩn, hỗ trợ ExpressRoute và cho phép triển khai cổng ExpressRoute cho liên kết mạch. Tiện ích bổ sung cao cấp ExpressRoute vốn không bắt buộc phải có và trung tâm Miền Đông Hoa Kỳ hiện tại là trung tâm khu vực thích hợp.\n\n**Tài liệu tham khảo:**\n[Azure Virtual WAN overview](https://learn.microsoft.com/en-us/azure/virtual-wan/virtual-wan-about) · [Upgrade a virtual WAN from Basic to Standard](https://learn.microsoft.com/en-us/azure/virtual-wan/upgrade-virtual-wan)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783706725971-2qots6h6.png",
    "sourceTitle": "Examcademy AZ-305 Question 74",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/74-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-75",
    "questionNumber": 75,
    "text": "You are planning a large Azure environment that will include many subscriptions.  \n  \nYou intend to use Azure Policy as part of a governance solution.  \n  \nTo which three scopes can Azure Policy definitions be assigned? Each correct answer provides a complete solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Active Directory (Azure AD) administrative units"
      },
      {
        "key": "B",
        "text": "Azure Active Directory (Azure AD) tenants"
      },
      {
        "key": "C",
        "text": "subscriptions"
      },
      {
        "key": "D",
        "text": "compute resources"
      },
      {
        "key": "E",
        "text": "resource groups"
      },
      {
        "key": "F",
        "text": "management groups"
      }
    ],
    "correctAnswers": [
      "C",
      "E",
      "F"
    ],
    "explanation": "Việc gán Chính sách Azure có thể được áp dụng ở phạm vi nhóm quản lý, đăng ký và nhóm tài nguyên, với tính kế thừa đối với các tài nguyên được chứa. Các nhóm quản lý đặc biệt phù hợp để quản lý nhiều gói đăng ký một cách nhất quán.\n\n**Tài liệu tham khảo:**\n[Overview of Azure Policy](https://learn.microsoft.com/en-us/azure/governance/policy/overview)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 75",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/75-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-76",
    "questionNumber": 76,
    "text": "You have an Azure subscription containing 10 web apps. The apps are integrated with Azure AD and are accessed by users from different project teams.  \n  \nUsers frequently move between projects.  \n  \nYou need to recommend an access-management solution for the web apps. The solution must meet these requirements:  \n  \n- Users must have access only to the app for the project to which they are currently assigned.  \n- Project managers must verify which users can access their project’s app and remove users who are no longer assigned to that project.  \n- Every 30 days, project managers must automatically be prompted to verify which users are assigned to their projects.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure AD Identity Protection"
      },
      {
        "key": "B",
        "text": "Microsoft Defender for Identity"
      },
      {
        "key": "C",
        "text": "Microsoft Entra Permissions Management"
      },
      {
        "key": "D",
        "text": "Azure AD Identity Governance"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Quản trị Microsoft Entra ID cung cấp các đánh giá quyền truy cập cho các ứng dụng. Những người đánh giá được chỉ định, chẳng hạn như người quản lý dự án, có thể xem xét định kỳ các bài tập ứng dụng và chứng nhận lại hoặc từ chối quyền truy cập liên tục của người dùng; kết quả đánh giá có thể tự động xóa những người dùng no còn yêu cầu quyền truy cập. Đánh giá định kỳ có thể được lên lịch 30 ngày một lần.\n\n**Tài liệu tham khảo:**\n[Plan a Microsoft Entra access reviews deployment](https://learn.microsoft.com/en-us/entra/id-governance/deploy-access-reviews) · [Manage user and guest user access with access reviews](https://learn.microsoft.com/en-us/entra/id-governance/manage-access-review)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 76",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/76-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-77",
    "questionNumber": 77,
    "text": "You have an on-premises file server that contains 2 TB of data files. You plan to move the data files to Azure Blob Storage in the West Europe Azure region.  \n  \nYou need to recommend a storage account type for the data files and a replication solution for the storage account. The solution must meet these requirements:  \n  \n- Remain available if a single Azure datacenter fails.  \n- Support storage tiers.  \n- Minimize cost.  \n  \nWhat should you recommend?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "storage_account_type",
        "text": "Storage Account type:",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "redundancy",
        "text": "Redundancy:",
        "correctAnswer": "E",
        "choiceKeys": [
          "D",
          "E",
          "F",
          "G"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Premium block blobs"
      },
      {
        "key": "B",
        "text": "Standard general-purpose v1"
      },
      {
        "key": "C",
        "text": "Standard general-purpose v2"
      },
      {
        "key": "D",
        "text": "Geo-redundant storage (GRS)"
      },
      {
        "key": "E",
        "text": "Zone-redundant storage (ZRS)"
      },
      {
        "key": "F",
        "text": "Locally-redundant storage (LRS)"
      },
      {
        "key": "G",
        "text": "Read-access geo-redundant storage (RA-GRS)"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Premium block blobs"
      },
      {
        "key": "B",
        "text": "Standard general-purpose v1"
      },
      {
        "key": "C",
        "text": "Standard general-purpose v2"
      },
      {
        "key": "D",
        "text": "Geo-redundant storage (GRS)"
      },
      {
        "key": "E",
        "text": "Zone-redundant storage (ZRS)"
      },
      {
        "key": "F",
        "text": "Locally-redundant storage (LRS)"
      },
      {
        "key": "G",
        "text": "Read-access geo-redundant storage (RA-GRS)"
      }
    ],
    "correctAnswers": [
      "storage_account_type=C",
      "redundancy=E"
    ],
    "explanation": "Tài khoản v2 đa năng tiêu chuẩn hỗ trợ các tầng truy cập Azure Blob Storage. ZRS sao chép dữ liệu một cách đồng bộ trên ba Azure availability zones trong khu vực chính, do đó, một trung tâm dữ liệu hoặc một vùng bị lỗi sẽ không khiến dữ liệu không khả dụng. Nó đáp ứng yêu cầu đó mà không phải trả thêm chi phí sao chép giữa các khu vực như GRS hoặc RA-GRS; LRS không bảo vệ khỏi lỗi trung tâm dữ liệu.\n\n**Tài liệu tham khảo:**\n[Azure storage account overview](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-overview) · [Azure Storage redundancy](https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 77",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/77-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-78",
    "questionNumber": 78,
    "text": "You intend to deploy an app that will use an Azure Storage account.  \n  \nYou must deploy the storage account. It must meet these requirements:  \n  \n- Store data for multiple users.  \n- Encrypt each user's data with a separate key.  \n- Encrypt all data in the storage account by using customer-managed keys.  \n  \nWhat should you deploy?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "files in a premium file share storage account"
      },
      {
        "key": "B",
        "text": "blobs in a general purpose v2 storage account"
      },
      {
        "key": "C",
        "text": "blobs in an Azure Data Lake Storage Gen2 account"
      },
      {
        "key": "D",
        "text": "files in a general purpose v2 storage account"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Phạm vi mã hóa Blob Storage tạo ranh giới mã hóa riêng cho dữ liệu thuộc về các khách hàng hoặc người dùng khác nhau. Mỗi phạm vi có thể sử dụng khóa do khách hàng quản lý từ Azure Key Vault hoặc HSM được quản lý và có thể áp dụng cho một vùng chứa hoặc blob riêng lẻ. Tài khoản lưu trữ v2 đa năng hỗ trợ Blob Storage và các khóa do khách hàng quản lý để mã hóa tài khoản.\n\n**Tài liệu tham khảo:**\n[Encryption scopes for Blob storage - Azure Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/encryption-scope-overview) · [Azure Storage encryption for data at rest](https://learn.microsoft.com/en-us/azure/storage/common/storage-service-encryption)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 78",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/78-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-79",
    "questionNumber": 79,
    "text": "You need to recommend an Azure Storage solution that meets these requirements:  \n  \n- The storage must support 1 PB of data.  \n- Data must be stored in blob storage.  \n- The storage must support three levels of subfolders.  \n- The storage must support access control lists (ACLs).  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a premium storage account that is configured for block blobs"
      },
      {
        "key": "B",
        "text": "a general purpose v2 storage account that has hierarchical namespace enabled"
      },
      {
        "key": "C",
        "text": "a premium storage account that is configured for page blobs"
      },
      {
        "key": "D",
        "text": "a premium storage account that is configured for file shares and supports large file shares"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Tài khoản lưu trữ v2 có mục đích chung với không gian tên phân cấp được bật cung cấp các khả năng của Azure Data Lake Storage: các thư mục lồng nhau thực sự và ACL tuân thủ POSIX cho dữ liệu blob. Hỗ trợ không gian tên phân cấp duy trì khả năng mở rộng lưu trữ đối tượng, do đó nó đáp ứng yêu cầu 1 PB.\n\n**Tài liệu tham khảo:**\n[Azure Data Lake Storage hierarchical namespace](https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-namespace) · [Use the Azure portal to manage ACLs in Azure Data Lake Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-acl-azure-portal)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 79",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/79-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-80",
    "questionNumber": 80,
    "text": "You are designing a software as a service (SaaS) application that enables Azure Active Directory (Azure AD) users to create and publish online surveys. The SaaS application has a front-end web app and a back-end web API. The web app relies on the web API to process updates to customer surveys.  \n  \nDesign an authorization flow that meets these requirements:  \n  \n- To access the back-end web API, the web app must authenticate by using OAuth 2 bearer tokens.  \n- The web app must authenticate by using the identities of individual users.  \n  \nWhat should the solution include?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "token_generator",
        "text": "The access tokens will be generated by:",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "authorization_decisions",
        "text": "Authorization decisions will be performed by:",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Azure AD"
      },
      {
        "key": "B",
        "text": "A web app"
      },
      {
        "key": "C",
        "text": "A web API"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Azure AD"
      },
      {
        "key": "B",
        "text": "A web app"
      },
      {
        "key": "C",
        "text": "A web API"
      }
    ],
    "correctAnswers": [
      "token_generator=A",
      "authorization_decisions=C"
    ],
    "explanation": "Azure AD hoạt động như máy chủ ủy quyền và cấp mã thông báo truy cập sau khi xác thực người dùng cá nhân. API web là tài nguyên được bảo vệ; nó xác thực mã thông báo và kiểm tra phạm vi hoặc vai trò được ủy quyền để cho phép hoạt động được yêu cầu.\n\n**Tài liệu tham khảo:**\n[Access tokens in the Microsoft identity platform](https://learn.microsoft.com/en-us/entra/identity-platform/access-tokens) · [Implement authorization in web APIs with Microsoft.Identity.Web](https://learn.microsoft.com/en-us/entra/msidweb/authentication/authorization)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 80",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/80-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-81",
    "questionNumber": 81,
    "text": "What should be implemented to satisfy the identity requirements?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "service",
        "text": "Service:",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      },
      {
        "id": "feature",
        "text": "Feature:",
        "correctAnswer": "F",
        "choiceKeys": [
          "E",
          "F",
          "G",
          "H"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Azure AD Identity Governance"
      },
      {
        "key": "B",
        "text": "Azure AD Identity Protection"
      },
      {
        "key": "C",
        "text": "Azure AD Privilege Access Management (PIM)"
      },
      {
        "key": "D",
        "text": "Azure Automation"
      },
      {
        "key": "E",
        "text": "Access packages"
      },
      {
        "key": "F",
        "text": "Access reviews"
      },
      {
        "key": "G",
        "text": "Approvals"
      },
      {
        "key": "H",
        "text": "Runbooks"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Azure AD Identity Governance"
      },
      {
        "key": "B",
        "text": "Azure AD Identity Protection"
      },
      {
        "key": "C",
        "text": "Azure AD Privilege Access Management (PIM)"
      },
      {
        "key": "D",
        "text": "Azure Automation"
      },
      {
        "key": "E",
        "text": "Access packages"
      },
      {
        "key": "F",
        "text": "Access reviews"
      },
      {
        "key": "G",
        "text": "Approvals"
      },
      {
        "key": "H",
        "text": "Runbooks"
      }
    ],
    "correctAnswers": [
      "service=A",
      "feature=F"
    ],
    "explanation": "Quản trị Microsoft Entra ID (trước đây là Quản trị danh tính Azure AD) bao gồm các đánh giá quyền truy cập, hỗ trợ đánh giá định kỳ và chứng nhận lại quyền truy cập vào các nhóm, ứng dụng doanh nghiệp và vai trò đặc quyền.\n\n**Tài liệu tham khảo:**\n[Microsoft Entra ID Governance documentation](https://learn.microsoft.com/en-us/entra/id-governance/identity-governance-overview) · [Access reviews overview](https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-overview)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 81",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/81-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-82",
    "questionNumber": 82,
    "text": "You must recommend a solution for generating a monthly report of every new Azure Resource Manager (ARM) resource deployment in your Azure subscription.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Application Insights"
      },
      {
        "key": "B",
        "text": "Azure Analysis Services"
      },
      {
        "key": "C",
        "text": "Azure Advisor"
      },
      {
        "key": "D",
        "text": "Azure Activity Log"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Nhật ký hoạt động Azure ghi lại các hoạt động trên mặt phẳng điều khiển Azure Resource Manager ở cấp đăng ký, bao gồm các sự kiện liên quan đến việc tạo và triển khai tài nguyên. Các sự kiện quản trị của nó có thể được xem xét hoặc lọc để xác định việc triển khai tài nguyên mới trong khoảng thời gian báo cáo hàng tháng.\n\n**Tài liệu tham khảo:**\n[Activity log in Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/platform/activity-log) · [Azure Activity Log event schema](https://learn.microsoft.com/en-us/azure/azure-monitor/platform/activity-log-schema)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 82",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/82-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-83",
    "questionNumber": 83,
    "text": "You need to design a storage solution for an app that will store large quantities of frequently accessed data. The solution must meet these requirements:  \n  \n- Maximize data throughput.  \n- Prevent data modifications for one year.  \n- Minimize read and write latency.  \n  \nWhich Azure Storage account type and storage service should you recommend?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "storage_account_type",
        "text": "Storage account type:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D",
          "E"
        ]
      },
      {
        "id": "storage_service",
        "text": "Storage service:",
        "correctAnswer": "F",
        "choiceKeys": [
          "F",
          "G",
          "H"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "BlobStorage"
      },
      {
        "key": "B",
        "text": "BlockBlobStorage"
      },
      {
        "key": "C",
        "text": "FileStorage"
      },
      {
        "key": "D",
        "text": "StorageV2 with Premium performance"
      },
      {
        "key": "E",
        "text": "StorageV2 with Standard performance"
      },
      {
        "key": "F",
        "text": "Blob"
      },
      {
        "key": "G",
        "text": "File"
      },
      {
        "key": "H",
        "text": "Table"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "BlobStorage"
      },
      {
        "key": "B",
        "text": "BlockBlobStorage"
      },
      {
        "key": "C",
        "text": "FileStorage"
      },
      {
        "key": "D",
        "text": "StorageV2 with Premium performance"
      },
      {
        "key": "E",
        "text": "StorageV2 with Standard performance"
      },
      {
        "key": "F",
        "text": "Blob"
      },
      {
        "key": "G",
        "text": "File"
      },
      {
        "key": "H",
        "text": "Table"
      }
    ],
    "correctAnswers": [
      "storage_account_type=B",
      "storage_service=F"
    ],
    "explanation": "Tài khoản BlockBlobStorage cao cấp được tối ưu hóa cho khối lượng công việc blob khối có độ trễ thấp, thông lượng cao. Azure Blob Storage hỗ trợ các chính sách bất biến (WORM) ngăn chặn việc sửa đổi hoặc xóa trong khoảng thời gian lưu giữ đã định cấu hình, chẳng hạn như một năm.\n\n**Tài liệu tham khảo:**\n[Azure Blob Storage immutable storage for legal hold and time-based retention policies](https://learn.microsoft.com/en-us/azure/storage/blobs/immutable-storage-overview) · [Azure premium block blob storage](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-block-blob-premium)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 83",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/83-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-84",
    "questionNumber": 84,
    "text": "You have an on-premises storage solution.  \n  \nYou need to migrate the solution to Azure. The solution must support the Hadoop Distributed File System (HDFS).  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Data Lake Storage Gen2"
      },
      {
        "key": "B",
        "text": "Azure NetApp Files"
      },
      {
        "key": "C",
        "text": "Azure Data Share"
      },
      {
        "key": "D",
        "text": "Azure Table storage"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Azure Data Lake Storage Gen2 cung cấp không gian tên phân cấp và quyền truy cập hệ thống tệp tương thích với Hadoop, cho phép quản lý dữ liệu thông qua giao diện tương thích HDFS và trình điều khiển ABFS.\n\n**Tài liệu tham khảo:**\n[Azure Data Lake Storage Gen2 overview in HDInsight](https://learn.microsoft.com/en-us/azure/hdinsight/overview-data-lake-storage-gen2) · [Using the HDFS CLI with Azure Data Lake Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-use-hdfs-data-lake-storage)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 84",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/84-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-85",
    "questionNumber": 85,
    "text": "You have an Azure Functions microservice app named App1, hosted in the Consumption plan. App1 uses an Azure Queue Storage trigger.  \n  \nYou plan to migrate App1 to an Azure Kubernetes Service (AKS) cluster.  \n  \nYou need to ready the AKS cluster to support App1. The solution must meet these requirements:  \n  \n- Use the same scaling mechanism as the existing deployment.  \n- Support kubenet and Azure Container Networking Interface (CNI) networking.  \n  \nWhich two actions should you perform? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct answer is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Configure the horizontal pod autoscaler."
      },
      {
        "key": "B",
        "text": "Install Virtual Kubelet."
      },
      {
        "key": "C",
        "text": "Configure the AKS cluster autoscaler."
      },
      {
        "key": "D",
        "text": "Configure the virtual node add-on."
      },
      {
        "key": "E",
        "text": "Install Kubernetes-based Event Driven Autoscaling (KEDA)."
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "KEDA cung cấp khả năng tự động điều chỉnh quy mô theo sự kiện cho các bộ chứa Azure Functions trên Kubernetes và hỗ trợ trình kích hoạt Hàng đợi lưu trữ Azure. Nó cung cấp các số liệu sự kiện bên ngoài cho Kubernetes Horizontal Pod Autoscaler (HPA), giúp chia tỷ lệ cho các nhóm chức năng. Điều này duy trì mô hình mở rộng quy mô theo hàng đợi, theo kiểu kế hoạch tiêu thụ và không phụ thuộc vào các nút ảo không được kubenet hỗ trợ.\n\n**Tài liệu tham khảo:**\n[Azure Functions on Kubernetes with KEDA](https://learn.microsoft.com/en-us/azure/azure-functions/functions-kubernetes-keda) · [Kubernetes Event-driven Autoscaling (KEDA) on AKS](https://learn.microsoft.com/en-us/azure/aks/keda-about)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 85",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/85-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-86",
    "questionNumber": 86,
    "text": "You must design a highly available Azure SQL database that satisfies these requirements:  \n  \n- Failover between database replicas must take place without data loss.  \n- The database must stay available if a zone outage occurs.  \n- Costs must be kept to a minimum.  \n  \nWhich deployment option should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure SQL Managed Instance Business Critical"
      },
      {
        "key": "B",
        "text": "Azure SQL Database Premium"
      },
      {
        "key": "C",
        "text": "Azure SQL Database Basic"
      },
      {
        "key": "D",
        "text": "Azure SQL Managed Instance General Purpose"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Azure SQL Database Premium hỗ trợ dự phòng vùng, phân phối các bản sao đồng bộ trên availability zones. Điều này mang lại khả năng phục hồi khi xảy ra sự cố ngừng hoạt động ở vùng sẵn có với dự kiến ​​mất dữ liệu đã cam kết của no. Cấp Cơ bản không hỗ trợ dự phòng vùng và Azure SQL Managed Instance Business Critical là một lựa chọn tốn kém hơn cho các yêu cầu này.\n\n**Tài liệu tham khảo:**\n[Reliability in Azure SQL Database](https://learn.microsoft.com/en-us/azure/reliability/reliability-sql-database) · [Enable zone redundancy for Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/enable-zone-redundancy?view=azuresql)",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 86",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/86-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-87",
    "questionNumber": 87,
    "text": "Web access-log data is stored in Azure Blob Storage.  \n  \nYou plan to create monthly reports from the access logs.  \n  \nYou need to recommend an automated process that uploads the data to Azure SQL Database each month.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft SQL Server Migration Assistant (SSMA)"
      },
      {
        "key": "B",
        "text": "Data Migration Assistant (DMA)"
      },
      {
        "key": "C",
        "text": "AzCopy"
      },
      {
        "key": "D",
        "text": "Azure Data Factory"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Azure Data Factory có thể sắp xếp quy trình hàng tháng theo lịch trình và sử dụng Copy activity để tải dữ liệu từ Azure Blob Storage vào Azure SQL Database. Microsoft Learn ghi lại mẫu đường dẫn Blob Storage-to-Azure SQL Database này.\n\n**Tài liệu tham khảo:**\n[Copy data from Azure Blob to Azure SQL Database using Azure Data Factory](https://learn.microsoft.com/en-us/azure/data-factory/tutorial-copy-data-dot-net)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 87",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/87-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-88",
    "questionNumber": 88,
    "text": "HOTSPOT -  \n  \nYou have an Azure subscription containing the resources shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783707674258-dkea0ktc.png)  \n  \nYou create an Azure SQL database named DB1 that is hosted in the East US Azure region.  \n  \nYou add a diagnostic setting named Settings1 to DB1. Settings1 archives SQLInsights to storage1 and sends SQLInsights to Workspace1.  \n  \nFor each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "You can add a new diagnostic setting that archives SQLInsights logs to storage2.",
        "correctAnswer": "Yes"
      },
      {
        "id": "2",
        "text": "You can add a new diagnostic setting that sends SQLInsights logs to Workspace2.",
        "correctAnswer": "Yes"
      },
      {
        "id": "3",
        "text": "You can add a new diagnostic setting that sends SQLInsights logs to Hub1.",
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
      "2:Yes",
      "3:Yes"
    ],
    "explanation": "Phép đo từ xa chẩn đoán Azure SQL Database có thể được gửi tới Azure Storage, Azure Event Hubs hoặc không gian làm việc Log Analytics. Nhiều cài đặt chẩn đoán song song được hỗ trợ. Storage2 là tài khoản v2 có mục đích chung được hỗ trợ và các đích đến của trung tâm sự kiện và lưu trữ khu vực nằm trong cùng khu vực Đông Hoa Kỳ với DB1. Do đó, mỗi đích đến được đề xuất có thể được sử dụng bởi cài đặt chẩn đoán bổ sung.\n\n**Tài liệu tham khảo:**\n[Configure streaming export of metrics and resource logs for Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/metrics-diagnostic-telemetry-logging-streaming-export-configure?view=azuresql) · [Diagnostic settings in Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/diagnostic-settings)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783707674258-dkea0ktc.png",
    "sourceTitle": "Examcademy AZ-305 Question 88",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/88-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-89",
    "questionNumber": 89,
    "text": "You need to recommend a solution that generates a monthly report of all new Azure Resource Manager (ARM) resource deployments in your Azure subscription.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Application Insights"
      },
      {
        "key": "B",
        "text": "Azure Arc"
      },
      {
        "key": "C",
        "text": "Azure Log Analytics"
      },
      {
        "key": "D",
        "text": "Azure Monitor metrics"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Nhật ký hoạt động Azure ghi lại các hoạt động trên mặt phẳng điều khiển Azure Resource Manager, bao gồm các sự kiện liên quan đến việc tạo và triển khai tài nguyên. Việc gửi nhật ký hoạt động đến không gian làm việc Log Analytics cho phép truy vấn các sự kiện bằng KQL để tạo báo cáo hàng tháng.\n\n**Tài liệu tham khảo:**\n[Azure Monitor activity log](https://learn.microsoft.com/en-us/azure/azure-monitor/platform/activity-log) · [Monitor Azure Resource Manager](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/monitor-resource-manager)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 89",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/89-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.134Z"
  },
  {
    "id": "az305-90",
    "questionNumber": 90,
    "text": "What should you recommend to satisfy the monitoring requirements for App2?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "VM insights"
      },
      {
        "key": "B",
        "text": "Azure Application Insights"
      },
      {
        "key": "C",
        "text": "Microsoft Sentinel"
      },
      {
        "key": "D",
        "text": "Container insights"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Azure Application Insights cung cấp khả năng giám sát hiệu suất ứng dụng bằng cách thu thập và phân tích dữ liệu đo từ xa của ứng dụng, bao gồm tính khả dụng, lỗi, sự phụ thuộc và dữ liệu hiệu suất.\n\n**Tài liệu tham khảo:**\n[Application Insights OpenTelemetry observability overview - Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 90",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/90-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-91",
    "questionNumber": 91,
    "text": "Your company operates offices in North America and Europe.  \n  \nYou plan to migrate to Azure.  \n  \nYou need to recommend a networking solution for the new Azure infrastructure. The solution must meet these requirements:  \n  \n- Point-to-Site (P2S) VPN connections for mobile users must automatically connect to the nearest Azure region.  \n- Offices in each region must connect to their local Azure region by using an ExpressRoute circuit.  \n- Transitive routing between virtual networks and on-premises networks must be supported.  \n- Network traffic between virtual networks must be filtered by using FQDNs.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Virtual WAN with a secured virtual hub"
      },
      {
        "key": "B",
        "text": "virtual network peering and application security groups"
      },
      {
        "key": "C",
        "text": "virtual network gateways and network security groups (NSGs)"
      },
      {
        "key": "D",
        "text": "Azure Route Server and Azure Network Function Manager"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Azure Virtual WAN cung cấp cho các trung tâm ảo khu vực khả năng kết nối cổng P2S và ExpressRoute cũng như định tuyến bắc cầu được quản lý giữa các mạng ảo được kết nối và mạng tại chỗ. Cấu hình VPN người dùng toàn cầu của nó hướng người dùng đến trung tâm WAN ảo gần nhất. Một trung tâm ảo bảo mật tích hợp Azure Firewall để kiểm tra lưu lượng giữa các mạng ảo; Quy tắc ứng dụng Azure Firewall hỗ trợ lọc dựa trên FQDN.\n\n**Tài liệu tham khảo:**\n[Download global and hub VPN profiles for User VPN clients](https://learn.microsoft.com/en-us/azure/virtual-wan/global-hub-profile) · [Azure Virtual WAN overview](https://learn.microsoft.com/en-us/azure/virtual-wan/virtual-wan-about)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 91",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/91-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-92",
    "questionNumber": 92,
    "text": "You are assessing the components of an Azure migration that require provisioning an Azure Storage account. For each statement, select Yes when it is true; otherwise, select No.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "You must provision an Azure Storage account for the SQL Server database migration.",
        "correctAnswer": "Yes"
      },
      {
        "id": "2",
        "text": "You must provision an Azure Storage account for the Web site content storage.",
        "correctAnswer": "Yes"
      },
      {
        "id": "3",
        "text": "You must provision an Azure Storage account for the Database metric monitoring.",
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
      "2:Yes",
      "3:No"
    ],
    "explanation": "Quá trình di chuyển SQL Server dựa trên bản sao lưu sử dụng tài khoản Azure Blob Storage làm bộ lưu trữ trung gian cho các tệp sao lưu cơ sở dữ liệu. Azure Storage hỗ trợ lưu trữ nội dung trang web tĩnh. Số liệu cơ sở dữ liệu được Azure Monitor thu thập và giám sát, do đó, không cần phải có tài khoản Lưu trữ chỉ để theo dõi số liệu.\n\n**Tài liệu tham khảo:**\n[Prepare environment for a SQL VM migration](https://learn.microsoft.com/en-us/sql/sql-server/azure-arc/migration-sql-vm-prepare?view=sql-server-ver17) · [Static website hosting in Azure Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 92",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/92-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-93",
    "questionNumber": 93,
    "text": "You are developing an Azure web app that will store employees’ Personally Identifiable Information (PII).  \n  \nYou need to recommend an Azure SQL Database solution for the web app. The solution must satisfy these requirements:  \n  \n- Preserve availability if a single datacenter fails.  \n- Enable encryption for particular columns containing PII.  \n- Scale up automatically during payroll processing.  \n- Keep costs to a minimum.  \n  \nWhat should the recommendations include?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "service_tier",
        "text": "Service tier and computer tier:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "encryption",
        "text": "Encryption method:",
        "correctAnswer": "D",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Business Critical service tier and Serverless computer tier"
      },
      {
        "key": "B",
        "text": "General Purpose service tier and Serverless computer tier"
      },
      {
        "key": "C",
        "text": "Hyperscale service tier and Provisioned compute tier"
      },
      {
        "key": "D",
        "text": "Always Encrypted"
      },
      {
        "key": "E",
        "text": "Microsoft SQL Server and database encryption keys"
      },
      {
        "key": "F",
        "text": "Transparent Data Encryption (TDE)"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Business Critical service tier and Serverless computer tier"
      },
      {
        "key": "B",
        "text": "General Purpose service tier and Serverless computer tier"
      },
      {
        "key": "C",
        "text": "Hyperscale service tier and Provisioned compute tier"
      },
      {
        "key": "D",
        "text": "Always Encrypted"
      },
      {
        "key": "E",
        "text": "Microsoft SQL Server and database encryption keys"
      },
      {
        "key": "F",
        "text": "Transparent Data Encryption (TDE)"
      }
    ],
    "correctAnswers": [
      "service_tier=B",
      "encryption=D"
    ],
    "explanation": "Azure SQL Database mục đích chung dự phòng theo vùng có khả năng phục hồi khi ngừng hoạt động ở vùng sẵn sàng/trung tâm dữ liệu. Điện toán serverless tự động thay đổi quy mô dựa trên nhu cầu khối lượng công việc và có thể tự động tạm dừng khi không hoạt động, giúp giảm chi phí. Luôn được mã hóa bảo vệ các cột nhạy cảm đã chọn, trong khi TDE mã hóa cơ sở dữ liệu ở phần còn lại.\n\n**Tài liệu tham khảo:**\n[Serverless compute tier - Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/serverless-tier-overview?view=azuresql) · [Reliability in Azure SQL Database](https://learn.microsoft.com/en-us/azure/reliability/reliability-sql-database)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 93",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/93-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-94",
    "questionNumber": 94,
    "text": "You have an Azure virtual machine named VM1 that runs Windows Server 2019 and stores 500 GB of data files.  \n  \nYou are designing a solution that will use Azure Data Factory to transform the data files and then load them into Azure Data Lake Storage.  \n  \nWhat should you deploy on VM1 to support this design?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "the On-premises data gateway"
      },
      {
        "key": "B",
        "text": "the Azure Pipelines agent"
      },
      {
        "key": "C",
        "text": "the self-hosted integration runtime"
      },
      {
        "key": "D",
        "text": "the Azure File Sync agent"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "self-hosted integration runtime cung cấp cho Azure Data Factory khả năng tính toán và kết nối để lưu trữ dữ liệu trong mạng riêng, bao gồm cả máy ảo Azure IaaS. Việc cài đặt nó trên VM1 cho phép Data Factory truy cập và xử lý các tệp trước khi tải chúng vào Azure Data Lake Storage.\n\n**Tài liệu tham khảo:**\n[Integration runtime in Azure Data Factory](https://learn.microsoft.com/en-us/azure/data-factory/concepts-integration-runtime) · [Create and configure a self-hosted integration runtime](https://learn.microsoft.com/en-us/azure/data-factory/create-self-hosted-integration-runtime)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 94",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/94-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-95",
    "questionNumber": 95,
    "text": "You have two Azure AD tenants, contoso.com and fabrikam.com. Each tenant is associated with 50 Azure subscriptions. Contoso.com has two users, User1 and User2.  \n  \nYou must meet these requirements:  \n  \n- Ensure User1 can change the Azure AD tenant associated with particular Azure subscriptions.  \n- When an Azure subscription is associated with a new Azure AD tenant and no available Azure AD accounts have full subscription-level permissions, elevate User2's access to that subscription.  \n  \nThe solution must follow the principle of least privilege.  \n  \nWhich role should be assigned to each user?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "user1",
        "text": "User1:",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "user2",
        "text": "User2:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Co-administrator"
      },
      {
        "key": "B",
        "text": "Owner"
      },
      {
        "key": "C",
        "text": "Service administrator"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Co-administrator"
      },
      {
        "key": "B",
        "text": "Owner"
      },
      {
        "key": "C",
        "text": "Service administrator"
      }
    ],
    "correctAnswers": [
      "user1=C",
      "user2=B"
    ],
    "explanation": "Quản trị viên dịch vụ có thể thay đổi liên kết thư mục của gói đăng ký, trong khi Đồng quản trị viên thì không thể. Chủ sở hữu có toàn quyền truy cập ở phạm vi đăng ký và có đủ khả năng để khôi phục toàn bộ quyền ở cấp đăng ký sau khi chuyển đăng ký; nó tránh cấp cho User2 quyền liên kết thư mục bổ sung của vai trò Quản trị viên dịch vụ.\n\n**Tài liệu tham khảo:**\n[Azure roles, Microsoft Entra roles, and classic subscription administrator roles](https://learn.microsoft.com/en-us/azure/role-based-access-control/rbac-and-directory-admin-roles) · [Associate or add an Azure subscription to your Microsoft Entra tenant](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/how-subscriptions-associated-directory)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 95",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/95-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-96",
    "questionNumber": 96,
    "text": "You must recommend a storage solution for the records of a mission-critical application. The solution must provide a Service Level Agreement (SLA) for write-operation latency and throughput.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Data Lake Storage Gen2"
      },
      {
        "key": "B",
        "text": "Azure Blob Storage"
      },
      {
        "key": "C",
        "text": "Azure SQL"
      },
      {
        "key": "D",
        "text": "Azure Cosmos DB"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Azure Cosmos DB cung cấp độ trễ ghi được hỗ trợ bởi SLA và thông lượng được cung cấp được đảm bảo, giúp nó phù hợp với khối lượng công việc quan trọng đòi hỏi hiệu suất có thể dự đoán được. SLA của nó bao gồm độ trễ, thông lượng, tính nhất quán và tính khả dụng.\n\n**Tài liệu tham khảo:**\n[Reliability in Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/reliability/reliability-cosmos-db) · [Optimize provisioned throughput cost in Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/optimize-cost-throughput)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 96",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/96-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-97",
    "questionNumber": 97,
    "text": "You are designing a virtual machine that will run Microsoft SQL Server and include two data disks. The first data disk will store log files, and the second will store data. Both disks are P40 managed disks.  \n  \nYou need to recommend a host caching method for each disk. The method must provide the best overall virtual-machine performance while preserving the integrity of the SQL data and logs.  \n  \nWhich host caching method should you recommend for each disk?  \n  \nEach method may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "log",
        "text": "Log:",
        "correctAnswer": "A"
      },
      {
        "id": "data",
        "text": "Data:",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "None"
      },
      {
        "key": "B",
        "text": "ReadOnly"
      },
      {
        "key": "C",
        "text": "ReadWrite"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "None"
      },
      {
        "key": "B",
        "text": "ReadOnly"
      },
      {
        "key": "C",
        "text": "ReadWrite"
      }
    ],
    "correctAnswers": [
      "log=A",
      "data=B"
    ],
    "explanation": "Sử dụng Không có cho đĩa nhật ký giao dịch SQL Server vì I/O nhật ký là tuần tự và ghi nhiều, do đó, bộ nhớ đệm ReadOnly mang lại lợi ích cho no. Sử dụng ReadOnly cho đĩa dữ liệu SQL Server để cải thiện độ trễ đọc, IOPS và thông lượng. Không sử dụng bộ nhớ đệm ReadWrite cho dữ liệu SQL Server hoặc đĩa nhật ký.\n\n**Tài liệu tham khảo:**\n[Storage performance best practices for SQL Server on Azure VMs](https://learn.microsoft.com/en-us/azure/azure-sql/virtual-machines/windows/performance-guidelines-best-practices-storage?view=azuresql)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 97",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/97-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-98",
    "questionNumber": 98,
    "text": "You have an on-premises datacenter named Site1. Site1 includes a VMware vSphere cluster named Cluster1, which hosts 100 virtual machines. Cluster1 is managed by VMware vCenter.  \n  \nYou have an Azure subscription named Sub1.  \n  \nYou plan to migrate the virtual machines from Cluster1 to Sub1.  \n  \nYou need to identify the resources required to run the virtual machines in Azure while minimizing administrative effort.  \n  \nWhat should you configure?  \n  \nEach resource may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "sub1",
        "text": "Sub1:",
        "correctAnswer": "C"
      },
      {
        "id": "cluster1",
        "text": "Cluster1:",
        "correctAnswer": "D"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "An Azure Migrate appliance"
      },
      {
        "key": "B",
        "text": "An Azure Migrate project"
      },
      {
        "key": "C",
        "text": "An Azure VMware Solution private cloud"
      },
      {
        "key": "D",
        "text": "An Azure VMware Solution host"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "An Azure Migrate appliance"
      },
      {
        "key": "B",
        "text": "An Azure Migrate project"
      },
      {
        "key": "C",
        "text": "An Azure VMware Solution private cloud"
      },
      {
        "key": "D",
        "text": "An Azure VMware Solution host"
      }
    ],
    "correctAnswers": [
      "sub1=C",
      "cluster1=D"
    ],
    "explanation": "Azure VMware Solution triển khai đám mây riêng VMware trong gói đăng ký Azure và cung cấp dung lượng máy chủ VMware mà trên đó các cụm vSphere của nó chạy khối lượng công việc. Các thành phần Azure Migrate hỗ trợ khám phá, đánh giá và di chuyển thay vì cung cấp môi trường điện toán VMware sau di chuyển.\n\n**Tài liệu tham khảo:**\n[Azure VMware Solution private cloud and cluster concepts](https://learn.microsoft.com/en-us/azure/azure-vmware/architecture-private-clouds) · [What is Azure VMware Solution?](https://learn.microsoft.com/en-us/azure/azure-vmware/introduction)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 98",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/98-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-99",
    "questionNumber": 99,
    "text": "You have the resources shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783709421550-kgxixp0f.png)  \n  \nCDB1 contains a container that stores operational data updated continuously.  \n  \nYou are designing a solution that uses AS1 to analyze the operational data each day.  \n  \nYou need to recommend a solution that analyzes the data without affecting the performance of the operational data store.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Data Factory with Azure Cosmos DB and Azure Synapse Analytics connectors"
      },
      {
        "key": "B",
        "text": "Azure Synapse Analytics with PolyBase data loading"
      },
      {
        "key": "C",
        "text": "Azure Synapse Link for Azure Cosmos DB"
      },
      {
        "key": "D",
        "text": "Azure Cosmos DB change feed"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Liên kết Azure Synapse cho Azure Cosmos DB cho phép Azure Synapse Analytics truy vấn kho phân tích Cosmos DB, một kho lưu trữ cột biệt lập, được duy trì riêng biệt. Điều này hỗ trợ phân tích dữ liệu vận hành được cập nhật liên tục mà không tiêu tốn thông lượng được cung cấp của khối lượng công việc giao dịch hoặc ảnh hưởng đến hiệu suất của nó.\n\n**Tài liệu tham khảo:**\n[What is Azure Synapse Link for Azure Cosmos DB?](https://learn.microsoft.com/en-us/azure/cosmos-db/synapse-link) · [What is Azure Cosmos DB analytical store?](https://learn.microsoft.com/en-us/azure/cosmos-db/analytical-store-introduction)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783709421550-kgxixp0f.png",
    "sourceTitle": "Examcademy AZ-305 Question 99",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/99-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-100",
    "questionNumber": 100,
    "text": "You plan to build an Azure environment containing a root management group and 10 child management groups. Each child management group will contain five Azure subscriptions, and each subscription will have between 10 and 30 resource groups.  \n  \nYou need to design an Azure governance solution that meets these requirements:  \n  \n- Use Azure Blueprints to control governance across every subscription and resource group.  \n- Ensure Blueprint-based configurations remain consistent across all subscriptions and resource groups.  \n- Minimize the number of blueprint definitions and assignments.  \n  \nWhat should the solution include?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "definitions",
        "text": "Level at which to define the blueprints:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "assignments",
        "text": "Level at which to create the blueprint assignments:",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "The child management groups"
      },
      {
        "key": "B",
        "text": "The root management group"
      },
      {
        "key": "C",
        "text": "The subscriptions"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "The child management groups"
      },
      {
        "key": "B",
        "text": "The root management group"
      },
      {
        "key": "C",
        "text": "The subscriptions"
      }
    ],
    "correctAnswers": [
      "definitions=B",
      "assignments=C"
    ],
    "explanation": "Một định nghĩa kế hoạch chi tiết được lưu tại nhóm quản lý gốc có thể được sử dụng bởi các đăng ký trong toàn bộ hệ thống phân cấp nhóm quản lý của nó, do đó, một định nghĩa duy nhất sẽ duy trì một cấu hình chung. Đăng ký mục tiêu nhiệm vụ kế hoạch chi tiết; việc chỉ định tại một nhóm quản lý không tự động triển khai kế hoạch chi tiết cho tất cả các đăng ký con cháu. Tạo một bài tập cho mỗi đăng ký.\n\n**Tài liệu tham khảo:**\n[Overview of Azure Blueprints](https://learn.microsoft.com/en-us/azure/governance/blueprints/overview) · [Quickstart: Define and assign a blueprint in the portal](https://learn.microsoft.com/en-us/azure/governance/blueprints/create-blueprint-portal)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 100",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/100-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-101",
    "questionNumber": 101,
    "text": "You have an Azure subscription.  \n  \nYou plan to deploy five storage accounts for block blobs and five storage accounts for file shares. The file shares will be accessed by using the SMB protocol.  \n  \nYou need to recommend an access-authorization solution for the storage accounts. The solution must meet these requirements:  \n  \n- Maximize security.  \n- Prevent use of shared keys.  \n- Whenever possible, support time-limited access.  \n  \nWhat should the solution include?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "blobs",
        "text": "For the blobs:",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "file_shares",
        "text": "For the file shares:",
        "correctAnswer": "D",
        "choiceKeys": [
          "D",
          "A",
          "C"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "A user delegation shared access signature (SAS) only"
      },
      {
        "key": "B",
        "text": "A shared access signature (SAS) and a stored access policy"
      },
      {
        "key": "C",
        "text": "A user delegation shared access signature (SAS) and a stored access policy"
      },
      {
        "key": "D",
        "text": "Azure AD credentials"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "A user delegation shared access signature (SAS) only"
      },
      {
        "key": "B",
        "text": "A shared access signature (SAS) and a stored access policy"
      },
      {
        "key": "C",
        "text": "A user delegation shared access signature (SAS) and a stored access policy"
      },
      {
        "key": "D",
        "text": "Azure AD credentials"
      }
    ],
    "correctAnswers": [
      "blobs=A",
      "file_shares=D"
    ],
    "explanation": "Ủy quyền người dùng SAS cho Blob Storage được ký bằng khóa ủy quyền người dùng có được thông qua Microsoft Entra ID, tránh ủy quyền khóa chung trong khi cho phép khoảng thời gian hiệu lực được xác định. Chính sách truy cập được lưu trữ không được hỗ trợ cho mã thông báo SAS ủy quyền của người dùng. Azure Files được truy cập thông qua SMB sử dụng xác thực và ủy quyền dựa trên danh tính bằng thông tin xác thực Azure AD thay vì khóa chung.\n\n**Tài liệu tham khảo:**\n[Create a user delegation SAS](https://learn.microsoft.com/fil-ph/rest/api/storageservices/create-user-delegation-sas) · [Overview of Azure Files authorization and access control](https://learn.microsoft.com/en-us/azure/storage/files/storage-files-authorization-overview)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 101",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/101-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-102",
    "questionNumber": 102,
    "text": "You have an Azure Active Directory (Azure AD) tenant.  \n  \nYou intend to deploy Azure Cosmos DB databases that use the SQL API.  \n  \nYou need to recommend a solution that gives specified Azure AD user accounts read access to the Cosmos DB databases.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "shared access signatures (SAS) and Conditional Access policies"
      },
      {
        "key": "B",
        "text": "certificates and Azure Key Vault"
      },
      {
        "key": "C",
        "text": "master keys and Azure Information Protection policies"
      },
      {
        "key": "D",
        "text": "a resource token and an Access control (IAM) role assignment"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Mã thông báo tài nguyên API SQL Azure Cosmos DB được tạo từ các tài nguyên được cấp phép và có thể bị hạn chế ở quyền truy cập chỉ đọc đối với một tài nguyên và khoảng thời gian cụ thể. Việc gán vai trò Kiểm soát truy cập (IAM) được sử dụng để gán quyền quản lý tài nguyên Azure cho các nguyên tắc Microsoft Entra ID được chỉ định. Sự kết hợp này hỗ trợ quyền truy cập Cosmos DB trong phạm vi cho những người dùng thư mục đã chọn.\n\n**Tài liệu tham khảo:**\n[Access control in the Azure Cosmos DB SQL API](https://learn.microsoft.com/en-us/rest/api/cosmos-db/access-control-on-cosmosdb-resources) · [Add and assign user roles for Azure Cosmos DB for NoSQL](https://learn.microsoft.com/en-us/azure/cosmos-db/how-to-add-assign-user-roles)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 102",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/102-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-103",
    "questionNumber": 103,
    "text": "You need to design a highly available Azure SQL database that meets these requirements:  \n  \n- Failover between database replicas must occur with no data loss.  \n- The database must stay available during an availability-zone outage.  \n- Costs must be minimized.  \n  \nWhich deployment option should you choose?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure SQL Managed Instance Business Critical"
      },
      {
        "key": "B",
        "text": "Azure SQL Managed Instance General Purpose"
      },
      {
        "key": "C",
        "text": "Azure SQL Database Business Critical"
      },
      {
        "key": "D",
        "text": "Azure SQL Database Serverless"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Azure SQL Database Business Critical sử dụng các bản sao có tính sẵn sàng cao được sao chép đồng bộ. Khi được định cấu hình để dự phòng vùng, các bản sao được phân phối trên availability zones, không làm mất dữ liệu đã cam kết khi chuyển đổi dự phòng và khả năng phục hồi khi mất điện ở một vùng. Nó đáp ứng các yêu cầu này mà không phải trả thêm chi phí triển khai phiên bản được quản lý.\n\n**Tài liệu tham khảo:**\n[Reliability in Azure SQL Database](https://learn.microsoft.com/en-us/azure/reliability/reliability-sql-database) · [vCore purchasing model - Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/service-tiers-sql-database-vcore?view=azuresql)",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 103",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/103-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-104",
    "questionNumber": 104,
    "text": "You need to recommend a solution for generating a monthly report of all new Azure Resource Manager (ARM) resource deployments in your Azure subscription.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Activity Log"
      },
      {
        "key": "B",
        "text": "Azure Arc"
      },
      {
        "key": "C",
        "text": "Azure Analysis Services"
      },
      {
        "key": "D",
        "text": "Azure Monitor action groups"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Nhật ký hoạt động Azure ghi lại các sự kiện trên mặt phẳng điều khiển Azure Resource Manager ở cấp đăng ký, bao gồm việc tạo tài nguyên và các hoạt động quản trị khác. Những sự kiện đó cung cấp dữ liệu cần thiết để xác định các hoạt động triển khai mới trong khoảng thời gian báo cáo hàng tháng.\n\n**Tài liệu tham khảo:**\n[Activity log in Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/platform/activity-log) · [Azure Activity Log event schema](https://learn.microsoft.com/en-us/azure/azure-monitor/platform/activity-log-schema)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 104",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/104-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-105",
    "questionNumber": 105,
    "text": "You are building a sales application that will include several Azure cloud services and manage different transaction components. Separate cloud services will process customer orders, billing, payment, inventory, and shipping.  \n  \nYou need to recommend a solution that lets the cloud services asynchronously exchange transaction information by using XML messages.  \n  \nWhat should be included in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Notification Hubs"
      },
      {
        "key": "B",
        "text": "Azure Application Gateway"
      },
      {
        "key": "C",
        "text": "Azure Service Bus"
      },
      {
        "key": "D",
        "text": "Azure Traffic Manager"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Azure Service Bus cung cấp tính năng nhắn tin không đồng bộ bền bỉ giúp tách riêng các dịch vụ đám mây thông qua hàng đợi hoặc chủ đề và đăng ký. Các thông điệp của nó có thể mang dữ liệu có cấu trúc được mã hóa dưới dạng XML, khiến nó phù hợp để trao đổi thông tin về đơn hàng giao dịch, thanh toán, thanh toán, hàng tồn kho và vận chuyển.\n\n**Tài liệu tham khảo:**\n[What is Azure Service Bus?](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview) · [Asynchronous messaging patterns and high availability](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-async-messaging)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 105",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/105-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-106",
    "questionNumber": 106,
    "text": "You have five Azure subscriptions. Each subscription is linked to a separate Azure AD tenant and contains virtual machines running Windows Server 2022.  \n  \nYou plan to gather Windows security events from the virtual machines and send them to one Log Analytics workspace.  \n  \nRecommend a solution that meets these requirements:  \n  \n- Collect event logs from multiple subscriptions.  \n- Support data collection rules (DCRs) that define the events to collect.  \n  \nWhat should you recommend for each requirement?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "collect_event_logs",
        "text": "To collect the event logs:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "support_dcrs",
        "text": "To support the DCRs:",
        "correctAnswer": "E",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Azure Event Grid"
      },
      {
        "key": "B",
        "text": "Azure Lighthouse"
      },
      {
        "key": "C",
        "text": "Azure Purview"
      },
      {
        "key": "D",
        "text": "The Log Analytics agent"
      },
      {
        "key": "E",
        "text": "The Azure Monitor agent"
      },
      {
        "key": "F",
        "text": "The Azure Connected Machine agent"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Azure Event Grid"
      },
      {
        "key": "B",
        "text": "Azure Lighthouse"
      },
      {
        "key": "C",
        "text": "Azure Purview"
      },
      {
        "key": "D",
        "text": "The Log Analytics agent"
      },
      {
        "key": "E",
        "text": "The Azure Monitor agent"
      },
      {
        "key": "F",
        "text": "The Azure Connected Machine agent"
      }
    ],
    "correctAnswers": [
      "collect_event_logs=B",
      "support_dcrs=E"
    ],
    "explanation": "Azure Lighthouse cho phép quản lý ủy quyền các đăng ký và tài nguyên trên các đối tượng thuê Microsoft Entra riêng biệt. Tác nhân Azure Monitor thu thập nhật ký sự kiện Windows từ máy ảo thông qua các quy tắc thu thập dữ liệu, xác định các sự kiện Windows cần thu thập và đích Log Analytics của chúng.\n\n**Tài liệu tham khảo:**\n[Onboard a customer to Azure Lighthouse](https://learn.microsoft.com/en-us/azure/lighthouse/how-to/onboard-customer) · [Collect Windows events from virtual machines with Azure Monitor Agent](https://learn.microsoft.com/en-us/azure/azure-monitor/vm/data-collection-windows-events)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 106",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/106-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-107",
    "questionNumber": 107,
    "text": "HOTSPOT –  \n  \nYou plan to migrate DB1 and DB2 to Azure.  \n  \nYou must ensure that the Azure database and service tier satisfy the resiliency and business requirements.  \n  \nWhat should you configure?\n\n![Question Image](https://cdn.examcademy.com/images/questions/1788032507104-g9b53ivu.jpg)",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "1",
        "text": "Database:",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "2",
        "text": "Service tier:",
        "correctAnswer": "D",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "An Azure SQL Database elastic pool"
      },
      {
        "key": "B",
        "text": "An Azure SQL Database single database"
      },
      {
        "key": "C",
        "text": "Azure SQL Managed Instance"
      },
      {
        "key": "D",
        "text": "Business Critical"
      },
      {
        "key": "E",
        "text": "General Purpose"
      },
      {
        "key": "F",
        "text": "Hyperscale"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "An Azure SQL Database elastic pool"
      },
      {
        "key": "B",
        "text": "An Azure SQL Database single database"
      },
      {
        "key": "C",
        "text": "Azure SQL Managed Instance"
      },
      {
        "key": "D",
        "text": "Business Critical"
      },
      {
        "key": "E",
        "text": "General Purpose"
      },
      {
        "key": "F",
        "text": "Hyperscale"
      }
    ],
    "correctAnswers": [
      "1=A",
      "2=D"
    ],
    "explanation": "DB1 và ​​DB2 là hai cơ sở dữ liệu ứng dụng riêng biệt được đưa vào nền tảng Azure SQL Database PaaS và các yêu cầu kinh doanh yêu cầu giảm thiểu chi phí và nỗ lực quản trị. Một nhóm linh hoạt cho phép DB1 và ​​DB2 chia sẻ một nhóm tài nguyên điện toán/lưu trữ với một mức giá duy nhất cho mỗi nhóm thay vì cung cấp và quản lý hai phiên bản độc lập, đây là cách rẻ nhất, tốn ít công sức nhất để lưu trữ hai cơ sở dữ liệu với các kiểu sử dụng liên quan. Đối với yêu cầu về khả năng phục hồi — vẫn khả dụng nếu hai availability zones trong khu vực bị lỗi, tự động chuyển đổi dự phòng và giảm thiểu độ trễ I/O — tầng dịch vụ phải hỗ trợ dự phòng vùng bằng kiến ​​trúc lưu trữ cục bộ (không phải lưu trữ từ xa). Business Critical sử dụng mô hình nhóm lưu trữ cục bộ/Luôn sẵn sàng: một bản sao chính cộng với tối đa ba bản sao phụ được cập nhật đồng bộ với dữ liệu trên ổ SSD được gắn trực tiếp. **Đáp án chính xác:**\n- **Cơ sở dữ liệu:** Bể đàn hồi Azure SQL Database\n- **Cấp dịch vụ:** Kinh doanh quan trọng",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1788032507104-g9b53ivu.jpg",
    "sourceTitle": "Examcademy AZ-305 Question 107",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/107-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-108",
    "questionNumber": 108,
    "text": "You are building a sales application that will include several Azure cloud services and manage different parts of a transaction. Separate cloud services will process customer orders, billing, payment, inventory, and shipping.  \n  \nYou need to recommend a solution that lets the cloud services communicate transaction information asynchronously by using XML messages.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Service Bus"
      },
      {
        "key": "B",
        "text": "Azure Data Lake"
      },
      {
        "key": "C",
        "text": "Azure Traffic Manager"
      },
      {
        "key": "D",
        "text": "Azure Notification Hubs"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Azure Service Bus cung cấp hàng đợi bền bỉ và xuất bản/đăng ký các chủ đề để liên lạc không đồng bộ giữa các dịch vụ đám mây được tách rời. Thông báo của nó có thể chứa các tải trọng có cấu trúc như XML, giúp nó phù hợp để truyền dữ liệu giao dịch một cách đáng tin cậy giữa các thành phần đơn hàng, thanh toán, thanh toán, hàng tồn kho và vận chuyển.\n\n**Tài liệu tham khảo:**\n[What is Azure Service Bus?](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview) · [Asynchronous messaging patterns and high availability](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-async-messaging)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 108",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/108-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-109",
    "questionNumber": 109,
    "text": "You have an app named App1 that uses an on-premises Microsoft SQL Server database named DB1.  \n  \nYou plan to migrate DB1 to an Azure SQL managed instance.  \n  \nYou need to enable customer-managed Transparent Data Encryption (TDE) for the instance. The solution must maximize encryption strength.  \n  \nWhich encryption-algorithm type and key length should you use for the TDE protector?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "RSA 3072"
      },
      {
        "key": "B",
        "text": "AES 256"
      },
      {
        "key": "C",
        "text": "RSA 4096"
      },
      {
        "key": "D",
        "text": "RSA 2048"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Đối với TDE do khách hàng quản lý Azure SQL Managed Instance, trình bảo vệ phải là khóa RSA hoặc RSA-HSM không đối xứng. Độ dài khóa RSA được hỗ trợ là 2.048 và 3.072 bit, do đó RSA 3072 cung cấp tùy chọn được hỗ trợ mạnh nhất. AES 256 có tính đối xứng và không thể đóng vai trò là bộ bảo vệ TDE; RSA 4096 không được hỗ trợ.\n\n**Tài liệu tham khảo:**\n[Azure SQL transparent data encryption with customer-managed key](https://learn.microsoft.com/en-us/azure/azure-sql/database/transparent-data-encryption-byok-overview?view=azuresql)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 109",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/109-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-110",
    "questionNumber": 110,
    "text": "You plan to deploy Azure Databricks to support a machine learning application. Data engineers will mount an Azure Data Lake Storage account to the Databricks file system. Folder permissions are assigned directly to the data engineers.  \n  \nYou need to recommend a design for the planned Databricks deployment. The solution must:  \n  \n- Ensure that data engineers can access only the folders for which they have permissions.  \n- Minimize development effort.  \n- Minimize costs.  \n  \nWhat should the recommendation include?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "databricks_sku",
        "text": "Databricks SKU:",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B"
        ]
      },
      {
        "id": "cluster_configuration",
        "text": "Cluster configuration:",
        "correctAnswer": "C",
        "choiceKeys": [
          "C",
          "D",
          "E",
          "F",
          "G"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Premium"
      },
      {
        "key": "B",
        "text": "Standard"
      },
      {
        "key": "C",
        "text": "Credential passthrough"
      },
      {
        "key": "D",
        "text": "Managed identities"
      },
      {
        "key": "E",
        "text": "MLflow"
      },
      {
        "key": "F",
        "text": "A runtime that contains Photon"
      },
      {
        "key": "G",
        "text": "Secret scope"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Premium"
      },
      {
        "key": "B",
        "text": "Standard"
      },
      {
        "key": "C",
        "text": "Credential passthrough"
      },
      {
        "key": "D",
        "text": "Managed identities"
      },
      {
        "key": "E",
        "text": "MLflow"
      },
      {
        "key": "F",
        "text": "A runtime that contains Photon"
      },
      {
        "key": "G",
        "text": "Secret scope"
      }
    ],
    "correctAnswers": [
      "databricks_sku=A",
      "cluster_configuration=C"
    ],
    "explanation": "Thông qua thông tin xác thực Microsoft Entra ID sử dụng danh tính của kỹ sư đã đăng nhập khi truy cập Azure Data Lake Storage. Điều này khiến tài khoản lưu trữ áp dụng ACL thư mục hiện có của kỹ sư đó, tránh việc xử lý thông tin xác thực tùy chỉnh. Chuyển qua thông tin xác thực yêu cầu không gian làm việc Azure Databricks Premium.\n\n**Tài liệu tham khảo:**\n[Integrate OneLake with Azure Databricks](https://learn.microsoft.com/en-us/fabric/onelake/onelake-azure-databricks) · [Architecture best practices for Azure Databricks](https://learn.microsoft.com/en-us/azure/well-architected/service-guides/azure-databricks)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 110",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/110-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-111",
    "questionNumber": 111,
    "text": "You must implement Azure RBAC role assignments for the **Network Contributor** role. The solution must satisfy the authentication and authorization requirements.  \n  \nWhat is the minimum number of assignments you must use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "5"
      },
      {
        "key": "D",
        "text": "10"
      },
      {
        "key": "E",
        "text": "15"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Các quyền Azure RBAC được chỉ định ở phạm vi nhóm quản lý sẽ được kế thừa bởi các đăng ký bên dưới nhóm quản lý đó. Vì các đối tượng thuê Microsoft Entra riêng biệt có hệ thống phân cấp nhóm quản lý riêng biệt nên quyền truy cập của Người đóng góp mạng trên hai hệ thống phân cấp đối tượng thuê yêu cầu một nhiệm vụ trong phạm vi nhóm quản lý trong mỗi đối tượng thuê, tổng cộng là hai nhiệm vụ.\n\n**Tài liệu tham khảo:**\n[Understand scope for Azure RBAC](https://learn.microsoft.com/en-us/azure/role-based-access-control/scope-overview) · [Steps to assign an Azure role - Azure RBAC](https://learn.microsoft.com/en-us/azure/role-based-access-control/role-assignments-steps)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 111",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/111-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-112",
    "questionNumber": 112,
    "text": "You plan to import data from your on-premises environment into Azure. The data is listed in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783707658998-0wygkeft.png)  \n  \nWhat should you recommend to migrate the data? Each tool can be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "sql2012_to_azuresql",
        "text": "From the SQL Server 2012 database:",
        "correctAnswer": "D"
      },
      {
        "id": "sql2014table_to_cosmos",
        "text": "From the table in the SQL Server 2014 database:",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "AzCopy"
      },
      {
        "key": "B",
        "text": "Azure Cosmos DB Data Migration Tool"
      },
      {
        "key": "C",
        "text": "Data Management Gateway"
      },
      {
        "key": "D",
        "text": "Data Migration Assistant"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "AzCopy"
      },
      {
        "key": "B",
        "text": "Azure Cosmos DB Data Migration Tool"
      },
      {
        "key": "C",
        "text": "Data Management Gateway"
      },
      {
        "key": "D",
        "text": "Data Migration Assistant"
      }
    ],
    "correctAnswers": [
      "sql2012_to_azuresql=D",
      "sql2014table_to_cosmos=B"
    ],
    "explanation": "Trợ lý di chuyển dữ liệu hỗ trợ đánh giá và di chuyển khối lượng công việc SQL Server cho các mục tiêu Azure SQL. Công cụ di chuyển dữ liệu Azure Cosmos DB hỗ trợ SQL Server làm nguồn di chuyển cho Azure Cosmos DB.\n\n**Tài liệu tham khảo:**\n[Migrate SQL Server to Azure SQL Database](https://learn.microsoft.com/en-us/data-migration/sql-server/database/guide) · [Migrate data using the Data Migration Tool](https://learn.microsoft.com/en-ca/azure/cosmos-db/how-to-migrate-desktop-tool)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783707658998-0wygkeft.png",
    "sourceTitle": "Examcademy AZ-305 Question 112",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/112-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-113",
    "questionNumber": 113,
    "text": "HOTSPOT —  \n  \nDesign an Azure Policy solution that provides the following functionality:  \n  \n- For new resources, assign tags and values that correspond to the tags and values of the resource group where the resources are deployed.  \n- For existing resources, determine whether the tags and values correspond to those of the resource group containing the resources.  \n- For noncompliant resources, start automatically generated remediation tasks to add missing tags and values.  \n  \nThe solution must follow the principle of least privilege.  \n  \nWhat should the design include?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "policy_effect",
        "text": "Azure Policy effect to use:",
        "correctAnswer": "D",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      },
      {
        "id": "remediation_identity",
        "text": "Azure Active Directory (Azure AD) object and role-based access control (RBAC) role to use for the remediation tasks:",
        "correctAnswer": "E",
        "choiceKeys": [
          "E",
          "F",
          "G",
          "H"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Append"
      },
      {
        "key": "B",
        "text": "EnforceOPAConstraint"
      },
      {
        "key": "C",
        "text": "EnforceRegoPolicy"
      },
      {
        "key": "D",
        "text": "Modify"
      },
      {
        "key": "E",
        "text": "A managed identity with the Contributor role"
      },
      {
        "key": "F",
        "text": "A managed identity with the User Access Administrator role"
      },
      {
        "key": "G",
        "text": "A service principal with the Contributor role"
      },
      {
        "key": "H",
        "text": "A service principal with the User Access Administrator role"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Append"
      },
      {
        "key": "B",
        "text": "EnforceOPAConstraint"
      },
      {
        "key": "C",
        "text": "EnforceRegoPolicy"
      },
      {
        "key": "D",
        "text": "Modify"
      },
      {
        "key": "E",
        "text": "A managed identity with the Contributor role"
      },
      {
        "key": "F",
        "text": "A managed identity with the User Access Administrator role"
      },
      {
        "key": "G",
        "text": "A service principal with the Contributor role"
      },
      {
        "key": "H",
        "text": "A service principal with the User Access Administrator role"
      }
    ],
    "correctAnswers": [
      "policy_effect=D",
      "remediation_identity=E"
    ],
    "explanation": "Hiệu ứng Sửa đổi có thể thêm hoặc thay thế các thẻ khi tạo hoặc cập nhật tài nguyên, báo cáo các tài nguyên hiện có không đáp ứng quy tắc là không tuân thủ và hỗ trợ các tác vụ khắc phục để sửa chúng. Khắc phục Chính sách Azure sử dụng managed identity của nhiệm vụ chính sách. Người đóng góp có thể sửa đổi các tài nguyên bị ảnh hưởng, trong khi Quản trị viên truy cập người dùng cấp các quyền quản lý quyền truy cập không cần thiết.\n\n**Tài liệu tham khảo:**\n[Azure Policy definition structure - Modify effect](https://learn.microsoft.com/en-us/azure/governance/policy/concepts/effect-modify) · [Remediate non-compliant resources with Azure Policy](https://learn.microsoft.com/en-us/azure/governance/policy/how-to/remediate-resources)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 113",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/113-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-114",
    "questionNumber": 114,
    "text": "You need to recommend a notification solution for the IT Support distribution group.  \n  \nWhat should be included in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a SendGrid account with advanced reporting"
      },
      {
        "key": "B",
        "text": "an action group"
      },
      {
        "key": "C",
        "text": "Azure Network Watcher"
      },
      {
        "key": "D",
        "text": "Azure AD Connect Health"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Nhóm hành động Azure Monitor chỉ định người nhận thông báo và phương thức gửi thông báo, bao gồm thông báo qua email được gửi đến nhóm phân phối.",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 114",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/114-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-115",
    "questionNumber": 115,
    "text": "You plan to deploy an Azure web app named App1 that will use Azure Active Directory (Azure AD) authentication.  \n  \nApp1 will be accessed from the internet by users at your company. All users have Windows 10 computers that are joined to Azure AD.  \n  \nYou need to recommend a solution that ensures users can connect to App1 without an authentication prompt and can access App1 only from company-owned computers.  \n  \nWhat should you recommend for each requirement?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "sso",
        "text": "The users can connect to App1 without being prompted for authentication:",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "company_devices",
        "text": "The users can access App1 only from company-owned computers:",
        "correctAnswer": "D",
        "choiceKeys": [
          "D",
          "E",
          "F",
          "G",
          "H"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "An Azure AD app registration"
      },
      {
        "key": "B",
        "text": "An Azure AD managed identity"
      },
      {
        "key": "C",
        "text": "Azure AD Application Proxy"
      },
      {
        "key": "D",
        "text": "A Conditional Access policy"
      },
      {
        "key": "E",
        "text": "An Azure AD administrative unit"
      },
      {
        "key": "F",
        "text": "Azure Application Gateway"
      },
      {
        "key": "G",
        "text": "Azure Blueprints"
      },
      {
        "key": "H",
        "text": "Azure Policy"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "An Azure AD app registration"
      },
      {
        "key": "B",
        "text": "An Azure AD managed identity"
      },
      {
        "key": "C",
        "text": "Azure AD Application Proxy"
      },
      {
        "key": "D",
        "text": "A Conditional Access policy"
      },
      {
        "key": "E",
        "text": "An Azure AD administrative unit"
      },
      {
        "key": "F",
        "text": "Azure Application Gateway"
      },
      {
        "key": "G",
        "text": "Azure Blueprints"
      },
      {
        "key": "H",
        "text": "Azure Policy"
      }
    ],
    "correctAnswers": [
      "sso=A",
      "company_devices=D"
    ],
    "explanation": "Đăng ký ứng dụng Azure AD tích hợp App1 với Microsoft Entra ID để xác thực người dùng và đăng nhập một lần. Quyền truy cập có điều kiện đánh giá trạng thái thiết bị khi đăng nhập và có thể yêu cầu thiết bị tuân thủ hoặc đã tham gia Azure AD trước khi cấp quyền truy cập vào App1, hạn chế ứng dụng đối với các máy tính do tổ chức quản lý.\n\n**Tài liệu tham khảo:**\n[App sign-in flow with the Microsoft identity platform](https://learn.microsoft.com/en-us/entra/identity-platform/app-sign-in-flow) · [Require a compliant device, Microsoft Entra hybrid joined device, or multifactor authentication for all users](https://learn.microsoft.com/en-us/entra/identity/conditional-access/policy-alt-all-users-compliant-hybrid-or-mfa)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 115",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/115-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-116",
    "questionNumber": 116,
    "text": "You have 12 Azure subscriptions and three projects. Each project uses resources in multiple subscriptions.  \n  \nYou need to use Microsoft Cost Management to monitor costs for each project. The solution must minimize administrative effort.  \n  \nWhich two components should be included in the solution? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "budgets"
      },
      {
        "key": "B",
        "text": "resource tags"
      },
      {
        "key": "C",
        "text": "custom role-based access control (RBAC) roles"
      },
      {
        "key": "D",
        "text": "management groups"
      },
      {
        "key": "E",
        "text": "Azure boards"
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Thẻ tài nguyên đính kèm mã nhận dạng dự án vào việc sử dụng tài nguyên, cho phép Quản lý chi phí nhóm hoặc lọc chi phí theo dự án trên các đăng ký. Ngân sách theo dõi chi tiêu theo thời gian và gửi thông báo khi vượt quá ngưỡng chi phí hoặc dự báo đã định cấu hình, mang lại khả năng giám sát chi phí dự án một cách chủ động.\n\n**Tài liệu tham khảo:**\n[Group and filter options in Cost Analysis and Budgets](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/group-filter) · [What is Microsoft Cost Management](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/overview-cost-management)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 116",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/116-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-117",
    "questionNumber": 117,
    "text": "HOTSPOT –  \n  \nYou manage the database environment for Contoso, Ltd., a Microsoft Volume Licensing customer that uses License Mobility through Software Assurance.  \n  \nYou must deploy 50 databases. The solution must:  \n  \n- Support automatic scaling.  \n- Minimize Microsoft SQL Server licensing costs.  \n  \nWhat should the solution include?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "purchase_model",
        "text": "Purchase model:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "deployment_option",
        "text": "Deployment option:",
        "correctAnswer": "E",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "DTU"
      },
      {
        "key": "B",
        "text": "vCore"
      },
      {
        "key": "C",
        "text": "Azure reserved virtual machine instances"
      },
      {
        "key": "D",
        "text": "An Azure SQL managed instance"
      },
      {
        "key": "E",
        "text": "An Azure SQL Database elastic pool"
      },
      {
        "key": "F",
        "text": "A SQL Server Always On availability group"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "DTU"
      },
      {
        "key": "B",
        "text": "vCore"
      },
      {
        "key": "C",
        "text": "Azure reserved virtual machine instances"
      },
      {
        "key": "D",
        "text": "An Azure SQL managed instance"
      },
      {
        "key": "E",
        "text": "An Azure SQL Database elastic pool"
      },
      {
        "key": "F",
        "text": "A SQL Server Always On availability group"
      }
    ],
    "correctAnswers": [
      "purchase_model=B",
      "deployment_option=E"
    ],
    "explanation": "Mô hình mua vCore hỗ trợ Azure Hybrid Benefit, cho phép áp dụng các giấy phép SQL Server đủ điều kiện có Bảo hiểm phần mềm đang hoạt động cho Azure SQL Database. Nhóm đàn hồi Azure SQL Database dành cho nhiều cơ sở dữ liệu với cách sử dụng khác nhau và không thể đoán trước, chia sẻ nhóm tài nguyên theo tỷ lệ để giảm chi phí trong khi đáp ứng nhu cầu thay đổi.\n\n**Tài liệu tham khảo:**\n[Azure Hybrid Benefit for Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/azure-hybrid-benefit?view=azuresql) · [What is an Azure SQL Database elastic pool?](https://learn.microsoft.com/en-us/azure/azure-sql/database/elastic-pool-overview?view=azuresql)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 117",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/117-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-118",
    "questionNumber": 118,
    "text": "You plan to migrate App1 to Azure.  \n  \nYou need to recommend a high-availability solution for App1 that meets the resiliency requirements.  \n  \nWhat should you include in the recommendation?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "host_groups",
        "text": "Number of host groups:",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      },
      {
        "id": "virtual_machine_scale_sets",
        "text": "Number of virtual machine scale sets:",
        "correctAnswer": "C",
        "choiceKeys": [
          "E",
          "A",
          "C"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "6"
      },
      {
        "key": "E",
        "text": "0"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "6"
      },
      {
        "key": "E",
        "text": "0"
      }
    ],
    "correctAnswers": [
      "host_groups=C",
      "virtual_machine_scale_sets=C"
    ],
    "explanation": "Khối lượng công việc phải tồn tại khi mất hai availability zones cần triển khai ở cả ba vùng. Mỗi nhóm Máy chủ chuyên dụng Azure thuộc về một availability zone duy nhất, do đó, ba vùng cần có ba nhóm máy chủ. Khi một bộ tỷ lệ sử dụng các máy chủ chuyên dụng, nó phải sử dụng cấu hình vùng và nhóm máy chủ phù hợp; Triển khai Máy chủ chuyên dụng Azure không hỗ trợ bộ quy mô mở rộng vùng. Do đó, một bộ thang đo VM tự động chia tỷ lệ được triển khai ở mỗi vùng, yêu cầu ba bộ tỷ lệ.\n\n**Tài liệu tham khảo:**\n[Deploy Azure dedicated hosts](https://learn.microsoft.com/en-us/azure/virtual-machines/dedicated-hosts-how-to) · [Reliability in Azure Virtual Machine Scale Sets](https://learn.microsoft.com/en-au/azure/reliability/reliability-virtual-machine-scale-sets)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 118",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/118-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-119",
    "questionNumber": 119,
    "text": "You are designing a point-of-sale (POS) solution that will be deployed to multiple locations and will use an Azure Databricks workspace in the Standard tier. The solution will contain multiple apps deployed to the on-premises network at each location.  \n  \nYou need to configure the authentication method that the app will use to access the workspace. The solution must minimize administrative effort related to staff turnover and credential management.  \n  \nWhat should you configure?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a managed identity"
      },
      {
        "key": "B",
        "text": "a service principal"
      },
      {
        "key": "C",
        "text": "a personal access token"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "service principal là danh tính không phải của người dùng dành cho các công cụ và ứng dụng tự động cung cấp quyền truy cập theo chương trình vào Azure Databricks mà không phụ thuộc vào thông tin xác thực của từng nhân viên. Các quyền của nó có thể được quản lý độc lập với người dùng, do đó việc nhân viên rời đi không làm gián đoạn ứng dụng. Xác thực Azure managed identity được hỗ trợ giữa Azure Databricks và các tài nguyên Azure được định cấu hình phù hợp, chẳng hạn như máy ảo Azure, thay vì các ứng dụng được triển khai tại chỗ. Mã thông báo truy cập cá nhân là thông tin xác thực cũ và yêu cầu quản lý vòng đời mã thông báo. Nguyên tắc dịch vụ — Azure Databricks, Xác thực bằng danh tính được quản lý Azure — Azure Databricks\n\n**Tài liệu tham khảo:**\n- [Service principals — Azure Databricks](https://learn.microsoft.com/en-us/azure/databricks/admin/users-groups/service-principals)\n- [Authenticate with Azure managed identities — Azure Databricks](https://learn.microsoft.com/en-us/azure/databricks/dev-tools/auth/azure-mi)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 119",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/119-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-120",
    "questionNumber": 120,
    "text": "You need to design a highly available Azure SQL database that satisfies these requirements:  \n  \n- Failover between database replicas must occur with no data loss.  \n- The database must stay available during a zone outage.  \n- Costs must be minimized.  \n  \nWhich deployment option should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure SQL Database Basic"
      },
      {
        "key": "B",
        "text": "Azure SQL Managed Instance General Purpose"
      },
      {
        "key": "C",
        "text": "Azure SQL Database Business Critical"
      },
      {
        "key": "D",
        "text": "Azure SQL Managed Instance Business Critical"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Azure SQL Database Business Critical hỗ trợ các bản sao dự phòng vùng trên Azure availability zones. Trong trường hợp xảy ra lỗi vùng khả dụng, Azure SQL Database có thể chuyển sang bản sao được đồng bộ hóa với no dự kiến ​​sẽ mất dữ liệu đã cam kết. Azure SQL Database là lựa chọn triển khai có mục tiêu hơn và thường có chi phí thấp hơn Azure SQL Managed Instance khi không yêu cầu các chức năng của Phiên bản được quản lý.\n\n**Tài liệu tham khảo:**\n[Reliability in Azure SQL Database](https://learn.microsoft.com/en-us/azure/reliability/reliability-sql-database) · [Availability Through Local and Zone Redundancy - Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/high-availability-sla-local-zone-redundancy?view=azuresql-db)",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 120",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/120-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-121",
    "questionNumber": 121,
    "text": "You have an Azure subscription that includes 50 Azure SQL databases.  \n  \nYou create an Azure Resource Manager (ARM) template named Template1 that enables Transparent Data Encryption (TDE).  \n  \nYou need to create an Azure Policy definition named Policy1 that uses Template1 to enable TDE for all noncompliant Azure SQL databases.  \n  \nHow should you configure Policy1?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "effect",
        "text": "Set available effects to:",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "definition",
        "text": "Include in the definition:",
        "correctAnswer": "F",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "DeployIfNotExists"
      },
      {
        "key": "B",
        "text": "EnforceRegoPolicy"
      },
      {
        "key": "C",
        "text": "Modify"
      },
      {
        "key": "D",
        "text": "The identity required to perform the remediation task"
      },
      {
        "key": "E",
        "text": "The scopes of the policy assignments"
      },
      {
        "key": "F",
        "text": "The role-based access control (RBAC) roles required to perform the remediation task"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "DeployIfNotExists"
      },
      {
        "key": "B",
        "text": "EnforceRegoPolicy"
      },
      {
        "key": "C",
        "text": "Modify"
      },
      {
        "key": "D",
        "text": "The identity required to perform the remediation task"
      },
      {
        "key": "E",
        "text": "The scopes of the policy assignments"
      },
      {
        "key": "F",
        "text": "The role-based access control (RBAC) roles required to perform the remediation task"
      }
    ],
    "correctAnswers": [
      "effect=A",
      "definition=F"
    ],
    "explanation": "DeployIfNotExists đánh giá sự tuân thủ và triển khai mẫu ARM khi không có cấu hình được yêu cầu. Định nghĩa chính sách DeployIfNotExists phải bao gồm ID vai trò RBAC bắt buộc trong roleDefinitionIds. managed identity thực hiện việc khắc phục thuộc về việc phân công chính sách và nhận các vai trò đó trong phạm vi được phân công.\n\n**Tài liệu tham khảo:**\n[Azure Policy deployIfNotExists effect](https://learn.microsoft.com/en-us/azure/governance/policy/concepts/effect-deploy-if-not-exists)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 121",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/121-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-122",
    "questionNumber": 122,
    "text": "You need to recommend a solution for generating a monthly report of all new Azure Resource Manager (ARM) resource deployments in your Azure subscription.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Arc"
      },
      {
        "key": "B",
        "text": "Azure Log Analytics"
      },
      {
        "key": "C",
        "text": "Application insights"
      },
      {
        "key": "D",
        "text": "Azure Monitor action groups"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Azure Log Analytics có thể lưu trữ các bản ghi Nhật ký hoạt động Azure đã xuất trong bảng `AzureActivity` và truy vấn chúng bằng KQL. Nhật ký hoạt động Azure ghi lại các hoạt động trên mặt phẳng điều khiển ARM và `Microsoft.Resources/deployments/write` có thể được lọc để báo cáo các hoạt động triển khai mới trong mỗi tháng.\n\n**Tài liệu tham khảo:**\n[Activity log in Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/platform/activity-log) · [Queries for the AzureActivity table](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/queries/azureactivity)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 122",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/122-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-123",
    "questionNumber": 123,
    "text": "How should the migrated databases DB1 and DB2 be implemented in Azure?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "database",
        "text": "Database:",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "service_tier",
        "text": "Service tier:",
        "correctAnswer": "E",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "A single Azure SQL database"
      },
      {
        "key": "B",
        "text": "Azure SQL Managed Instance"
      },
      {
        "key": "C",
        "text": "An Azure SQL Database elastic pool"
      },
      {
        "key": "D",
        "text": "Hyperscale"
      },
      {
        "key": "E",
        "text": "Business Critical"
      },
      {
        "key": "F",
        "text": "General Purpose"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "A single Azure SQL database"
      },
      {
        "key": "B",
        "text": "Azure SQL Managed Instance"
      },
      {
        "key": "C",
        "text": "An Azure SQL Database elastic pool"
      },
      {
        "key": "D",
        "text": "Hyperscale"
      },
      {
        "key": "E",
        "text": "Business Critical"
      },
      {
        "key": "F",
        "text": "General Purpose"
      }
    ],
    "correctAnswers": [
      "database=C",
      "service_tier=E"
    ],
    "explanation": "Nhóm đàn hồi Azure SQL Database cho phép nhiều cơ sở dữ liệu chia sẻ tài nguyên được cung cấp, giảm chi phí và chi phí quản lý. Nhóm đàn hồi quan trọng trong kinh doanh dự phòng theo vùng đặt các bản sao trên availability zones, hỗ trợ chuyển đổi dự phòng tự động và sử dụng bộ lưu trữ SSD cục bộ để có độ trễ I/O thấp.\n\n**Tài liệu tham khảo:**\n[Reliability in Azure SQL Database](https://learn.microsoft.com/en-us/azure/reliability/reliability-sql-database) · [Design disaster recovery solutions - Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/disaster-recovery-strategies-for-applications-with-elastic-pool)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 123",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/123-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-124",
    "questionNumber": 124,
    "text": "You have an Azure subscription containing the resources in the following table:  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783709612044-cqxxzg70.png)  \n  \nLog files from App1 are registered to App1Logs. An average of 120 GB of log data is ingested each day.  \n  \nAn Azure Monitor alert is configured to trigger when the App1 logs contain error messages.  \n  \nYou need to minimize the Log Analytics costs associated with App1. The solution must meet these requirements:  \n  \n- Ensure that all log files from App1 are ingested into App1Logs.  \n- Minimize the impact on the Azure Monitor alert.  \n  \nWhich resource should be modified, and which modification should be made?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "resource",
        "text": "Resource:",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "modification",
        "text": "Modification:",
        "correctAnswer": "D",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "App1"
      },
      {
        "key": "B",
        "text": "App1Logs"
      },
      {
        "key": "C",
        "text": "Workspace1"
      },
      {
        "key": "D",
        "text": "Change to a commitment pricing tier"
      },
      {
        "key": "E",
        "text": "Change to the Basic Logs data plan."
      },
      {
        "key": "F",
        "text": "Set a daily cap."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "App1"
      },
      {
        "key": "B",
        "text": "App1Logs"
      },
      {
        "key": "C",
        "text": "Workspace1"
      },
      {
        "key": "D",
        "text": "Change to a commitment pricing tier"
      },
      {
        "key": "E",
        "text": "Change to the Basic Logs data plan."
      },
      {
        "key": "F",
        "text": "Set a daily cap."
      }
    ],
    "correctAnswers": [
      "resource=C",
      "modification=D"
    ],
    "explanation": "Cấp cam kết không gian làm việc Log Analytics cung cấp mức giá nhập chiết khấu với số lượng hàng ngày đã thỏa thuận trong khi vẫn duy trì các khả năng của Nhật ký phân tích, bao gồm cả hỗ trợ truy vấn cảnh báo. Việc chuyển App1Logs sang Nhật ký cơ bản có thể hạn chế khả năng cảnh báo và giới hạn hàng ngày có thể tạm dừng việc nhập thêm dữ liệu sau khi đạt đến giới hạn; hoặc mâu thuẫn với các yêu cầu đã nêu.\n\n**Tài liệu tham khảo:**\n[Azure Monitor Logs cost calculations and options](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/cost-logs) · [Configure table plans in Azure Monitor Logs](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/data-platform-logs#table-plans)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783709612044-cqxxzg70.png",
    "sourceTitle": "Examcademy AZ-305 Question 124",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/124-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-125",
    "questionNumber": 125,
    "text": "You need to recommend a solution for generating a monthly report of every new Azure Resource Manager (ARM) resource deployment in your Azure subscription.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Log Analytics"
      },
      {
        "key": "B",
        "text": "Azure Arc"
      },
      {
        "key": "C",
        "text": "Azure Analysis Services"
      },
      {
        "key": "D",
        "text": "Application Insights"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Azure Log Analytics có thể lưu trữ dữ liệu Nhật ký hoạt động Azure trong bảng `AzureActivity` và truy vấn nó bằng KQL. Nhật ký hoạt động Azure ghi lại các hoạt động trên mặt phẳng điều khiển Azure Resource Manager, bao gồm cả hoạt động triển khai, do đó, nhật ký hoạt động này có thể được lọc để báo cáo các hoạt động triển khai mới trong mỗi khoảng thời gian hàng tháng.\n\n**Tài liệu tham khảo:**\n[Activity log in Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/platform/activity-log) · [Example log table queries for AzureActivity](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/queries/azureactivity)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 125",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/125-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-126",
    "questionNumber": 126,
    "text": "You are designing an app that will have two components. The components will communicate by sending messages through a queue.  \n  \nYou need to recommend a solution that processes the messages by using a First in, First out (FIFO) pattern.  \n  \nWhat should be included in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "storage queues with a custom metadata setting"
      },
      {
        "key": "B",
        "text": "Azure Service Bus queues with partitioning enabled"
      },
      {
        "key": "C",
        "text": "Azure Service Bus queues with sessions enabled"
      },
      {
        "key": "D",
        "text": "storage queues with a stored access policy"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Phiên Azure Service Bus cung cấp khả năng xử lý theo thứ tự cho một chuỗi các thông báo liên quan và là cơ chế bắt buộc để xử lý FIFO được đảm bảo. Đặt cùng một ID phiên cho các tin nhắn có cùng thứ tự. Hàng đợi Bộ lưu trữ Azure đôi khi có thể gửi tin nhắn không theo thứ tự và bản thân việc phân vùng Bus dịch vụ không cung cấp đảm bảo xử lý FIFO.\n\n**Tài liệu tham khảo:**\n[Azure Service Bus message sessions](https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-sessions) · [Compare Azure Storage queues and Service Bus queues](https://learn.microsoft.com/en-in/azure/service-bus-messaging/service-bus-azure-and-service-bus-queues-compared-contrasted)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 126",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/126-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-127",
    "questionNumber": 127,
    "text": "HOTSPOT -  \n  \nYou are assessing whether Azure Traffic Manager and Azure Application Gateway can meet the connection requirements for App1.  \n  \nWhat is the minimum number of instances needed for each service?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "traffic_manager",
        "text": "Azure Traffic Manager:",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      },
      {
        "id": "application_gateway",
        "text": "Azure Application Gateway:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "6"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "6"
      }
    ],
    "correctAnswers": [
      "traffic_manager=A",
      "application_gateway=B"
    ],
    "explanation": "Một cấu hình Azure Traffic Manager cung cấp định tuyến dựa trên DNS cho các điểm cuối được định cấu hình. Hai phiên bản Azure Application Gateway cung cấp điểm cuối cổng ở hai vị trí bắt buộc.",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 127",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/127-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-128",
    "questionNumber": 128,
    "text": "Your company identifies these business-continuity and disaster-recovery objectives for virtual machines that host sales, finance, and reporting applications in the on-premises data center:  \n  \n- The sales application must be able to fail over to a second on-premises data center.  \n- The reporting application must be able to recover point-in-time data at daily granularity. The RTO is eight hours.  \n- The finance application requires data retention for seven years. If a disaster occurs, the application must be able to run from Azure. The recovery time objective (RTO) is 10 minutes.  \n  \nYou need to recommend services that meet the business-continuity and disaster-recovery objectives while minimizing costs.  \n  \nWhat should you recommend for each application?  \n  \nEach service may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "sales",
        "text": "Sales:",
        "correctAnswer": "C"
      },
      {
        "id": "finance",
        "text": "Finance:",
        "correctAnswer": "B"
      },
      {
        "id": "reporting",
        "text": "Reporting:",
        "correctAnswer": "A"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Azure Backup only"
      },
      {
        "key": "B",
        "text": "Azure Site Recovery and Azure Backup"
      },
      {
        "key": "C",
        "text": "Azure Site Recovery only"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Azure Backup only"
      },
      {
        "key": "B",
        "text": "Azure Site Recovery and Azure Backup"
      },
      {
        "key": "C",
        "text": "Azure Site Recovery only"
      }
    ],
    "correctAnswers": [
      "sales=C",
      "finance=B",
      "reporting=A"
    ],
    "explanation": "Azure Site Recovery sao chép khối lượng công việc và điều phối chuyển đổi dự phòng, do đó, chỉ riêng nó là giải pháp phù hợp với chi phí thấp nhất để bán hàng. Azure Backup tạo các điểm khôi phục và hỗ trợ lưu giữ theo lịch trình, đáp ứng nhu cầu khôi phục tại thời điểm hàng ngày của báo cáo. Tài chính yêu cầu cả việc duy trì bản sao lưu trong bảy năm và chuyển đổi dự phòng sau thảm họa sang Azure, do đó, nó cần Azure Backup cùng với Azure Site Recovery.\n\n**Tài liệu tham khảo:**\n[Azure Site Recovery documentation](https://learn.microsoft.com/en-us/azure/site-recovery/) · [Azure Backup service documentation](https://learn.microsoft.com/en-us/azure/backup/)",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 128",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/129-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-129",
    "questionNumber": 129,
    "text": "You have an Azure subscription.  \n  \nYou must deploy a solution that provides point-in-time restore for blobs in storage accounts with blob versioning and blob soft delete enabled.  \n  \nWhich blob type should you create, and what should you enable for the accounts?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "blob_type",
        "text": "Blob type:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "enable",
        "text": "Enable:",
        "correctAnswer": "G",
        "choiceKeys": [
          "D",
          "E",
          "F",
          "G"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Append"
      },
      {
        "key": "B",
        "text": "Block"
      },
      {
        "key": "C",
        "text": "Page"
      },
      {
        "key": "D",
        "text": "A stored access policy"
      },
      {
        "key": "E",
        "text": "Immutable blob storage"
      },
      {
        "key": "F",
        "text": "Object replication"
      },
      {
        "key": "G",
        "text": "The change feed"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Append"
      },
      {
        "key": "B",
        "text": "Block"
      },
      {
        "key": "C",
        "text": "Page"
      },
      {
        "key": "D",
        "text": "A stored access policy"
      },
      {
        "key": "E",
        "text": "Immutable blob storage"
      },
      {
        "key": "F",
        "text": "Object replication"
      },
      {
        "key": "G",
        "text": "The change feed"
      }
    ],
    "correctAnswers": [
      "blob_type=B",
      "enable=G"
    ],
    "explanation": "Khôi phục tại thời điểm chỉ hỗ trợ các đốm màu khối. Nó yêu cầu xóa mềm, tạo phiên bản blob và thay đổi nguồn cấp dữ liệu; với hai cái đầu tiên đã được bật, hãy bật nguồn cấp dữ liệu thay đổi.\n\n**Tài liệu tham khảo:**\n[Point-in-time restore for block blobs - Azure Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/point-in-time-restore-overview) · [Change feed in Blob Storage - Azure Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-change-feed)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 129",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/130-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-130",
    "questionNumber": 130,
    "text": "You have an Azure subscription containing an Azure SQL Managed Instance that stores employee details, including social security numbers and phone numbers.  \n  \nYou must configure the managed instance to meet these requirements:  \n  \n- The helpdesk team can view only the final four digits of an employee’s phone number.  \n- Cloud administrators are unable to view employees’ social security numbers.  \n  \nWhat should you enable for each column in the managed instance?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "phone_numbers",
        "text": "Phone numbers:",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      },
      {
        "id": "social_security_numbers",
        "text": "Social security numbers:",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Always Encrypted"
      },
      {
        "key": "B",
        "text": "Column encryption"
      },
      {
        "key": "C",
        "text": "Dynamic data masking"
      },
      {
        "key": "D",
        "text": "Transparent Data Encryption (TDE)"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Always Encrypted"
      },
      {
        "key": "B",
        "text": "Column encryption"
      },
      {
        "key": "C",
        "text": "Dynamic data masking"
      },
      {
        "key": "D",
        "text": "Transparent Data Encryption (TDE)"
      }
    ],
    "correctAnswers": [
      "phone_numbers=C",
      "social_security_numbers=A"
    ],
    "explanation": "Mặt nạ dữ liệu động hỗ trợ mặt nạ một phần chỉ hiển thị bốn ký tự cuối cùng cho người dùng mà không có quyền vạch mặt. Luôn được mã hóa bảo vệ các giá trị cột nhạy cảm khỏi quản trị viên cơ sở dữ liệu và đám mây trừ khi họ có quyền truy cập vào khóa chính của cột; mã hóa và giải mã xảy ra trong trình điều khiển máy khách. TDE bảo vệ dữ liệu ở trạng thái lưu trữ chứ không phải khỏi việc quản trị viên truy vấn dữ liệu được giải mã.\n\n**Tài liệu tham khảo:**\n[Dynamic Data Masking - Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/dynamic-data-masking-overview?view=azuresql) · [Always Encrypted - Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/always-encrypted-overview?view=azuresql)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 130",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/131-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-131",
    "questionNumber": 131,
    "text": "You have an on-premises network and an Azure subscription. The on-premises network includes several branch offices.  \n  \nA Toronto branch office contains a virtual machine named VM1 that is configured as a file server. Users in all offices access the shared files on VM1.  \n  \nYou need to recommend a solution that ensures users can access the shared files as quickly as possible if the Toronto branch office becomes inaccessible.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a Recovery Services vault and Windows Server Backup"
      },
      {
        "key": "B",
        "text": "Azure blob containers and Azure File Sync"
      },
      {
        "key": "C",
        "text": "a Recovery Services vault and Azure Backup"
      },
      {
        "key": "D",
        "text": "an Azure file share and Azure File Sync"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Azure File Sync đồng bộ hóa dữ liệu Windows Server với chia sẻ tệp Azure, đây là điểm cuối đám mây cho nhóm đồng bộ hóa. Chia sẻ tệp Azure cung cấp bản sao đám mây có sẵn của dữ liệu được chia sẻ khi không thể truy cập máy chủ tệp Toronto, trong khi Azure File Sync cũng có thể cung cấp các điểm cuối máy chủ cục bộ được đồng bộ hóa để truy cập văn phòng chi nhánh.\n\n**Tài liệu tham khảo:**\n[Extend Windows File Servers with Azure File Sync](https://learn.microsoft.com/en-us/azure/storage/file-sync/file-sync-extend-servers) · [Manage Registered Servers with Azure File Sync](https://learn.microsoft.com/en-us/azure/storage/file-sync/file-sync-server-registration)",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 131",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/132-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-132",
    "questionNumber": 132,
    "text": "You must recommend a data storage solution that satisfies these requirements:  \n  \n- Ensures applications can access the data through a REST connection  \n- Hosts 20 independent tables with different sizes and usage patterns  \n- Automatically replicates data to a second Azure region  \n- Minimizes costs  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "an Azure SQL Database elastic pool that uses active geo-replication"
      },
      {
        "key": "B",
        "text": "tables in an Azure Storage account that use geo-redundant storage (GRS)"
      },
      {
        "key": "C",
        "text": "tables in an Azure Storage account that use read-access geo-redundant storage (RA-GRS)"
      },
      {
        "key": "D",
        "text": "an Azure SQL database that uses active geo-replication"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Azure Table Storage cung cấp API REST cho dữ liệu bảng và hỗ trợ geo-redundant storage (GRS), sao chép không đồng bộ dữ liệu của tài khoản lưu trữ sang vùng Azure phụ. GRS đáp ứng yêu cầu sao chép với chi phí thấp hơn RA-GRS vì nó không thêm quyền truy cập đọc vào khu vực thứ cấp.\n\n**Tài liệu tham khảo:**\n[Table Storage REST API](https://learn.microsoft.com/en-us/rest/api/storageservices/table-service-rest-api) · [Data redundancy - Azure Storage](https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 132",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/133-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-133",
    "questionNumber": 133,
    "text": "You are developing a sales application that will include several Azure cloud services and manage distinct parts of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.  \n  \nYou need to recommend a solution that lets the cloud services asynchronously exchange transaction information by using XML messages.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Application Gateway"
      },
      {
        "key": "B",
        "text": "Azure Queue Storage"
      },
      {
        "key": "C",
        "text": "Azure Data Lake"
      },
      {
        "key": "D",
        "text": "Azure Traffic Manager"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Azure Queue Storage cung cấp hàng đợi bền bỉ cho phép các thành phần dịch vụ đám mây phân tán giao tiếp không đồng bộ và xử lý thông báo giao dịch một cách độc lập. Tin nhắn hàng đợi hỗ trợ nội dung UTF-8 tương thích với các yêu cầu XML, làm cho nó phù hợp với thông tin giao dịch dựa trên XML.\n\n**Tài liệu tham khảo:**\n[Introduction to Azure Queue Storage](https://learn.microsoft.com/en-us/azure/storage/queues/storage-queues-introduction) · [Azure Queue Storage .NET quickstart](https://learn.microsoft.com/en-us/azure/storage/queues/storage-quickstart-queues-dotnet)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 133",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/134-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-134",
    "questionNumber": 134,
    "text": "You have an on-premises database that you intend to migrate to Azure.  \n  \nDesign the database architecture to meet these requirements:  \n  \n- Support scaling up and down.  \n- Support geo-redundant backups.  \n- Support a database up to 75 TB.  \n- Be optimized for online transaction processing (OLTP).  \n  \nWhat should the design include?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "service",
        "text": "Service:",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      },
      {
        "id": "service_tier",
        "text": "Service tier:",
        "correctAnswer": "H",
        "choiceKeys": [
          "E",
          "F",
          "G",
          "H",
          "I",
          "J"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Azure SQL Database"
      },
      {
        "key": "B",
        "text": "Azure SQL Managed Instance"
      },
      {
        "key": "C",
        "text": "Azure Synapse Analytics"
      },
      {
        "key": "D",
        "text": "SQL Server on Azure Virtual Machines"
      },
      {
        "key": "E",
        "text": "Basic"
      },
      {
        "key": "F",
        "text": "Business Critical"
      },
      {
        "key": "G",
        "text": "General Purpose"
      },
      {
        "key": "H",
        "text": "Hyperscale"
      },
      {
        "key": "I",
        "text": "Premium"
      },
      {
        "key": "J",
        "text": "Standard"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Azure SQL Database"
      },
      {
        "key": "B",
        "text": "Azure SQL Managed Instance"
      },
      {
        "key": "C",
        "text": "Azure Synapse Analytics"
      },
      {
        "key": "D",
        "text": "SQL Server on Azure Virtual Machines"
      },
      {
        "key": "E",
        "text": "Basic"
      },
      {
        "key": "F",
        "text": "Business Critical"
      },
      {
        "key": "G",
        "text": "General Purpose"
      },
      {
        "key": "H",
        "text": "Hyperscale"
      },
      {
        "key": "I",
        "text": "Premium"
      },
      {
        "key": "J",
        "text": "Standard"
      }
    ],
    "correctAnswers": [
      "service=A",
      "service_tier=H"
    ],
    "explanation": "Azure SQL Database Hyperscale hỗ trợ khối lượng công việc từ OLTP đến phân tích, có thể mở rộng quy mô tính toán độc lập và hỗ trợ cơ sở dữ liệu lên tới 128 TB. Khôi phục địa lý khả dụng khi geo-redundant storage được chọn, đáp ứng yêu cầu sao lưu dự phòng địa lý.\n\n**Tài liệu tham khảo:**\n[What is the Hyperscale service tier?](https://learn.microsoft.com/en-us/azure/azure-sql/database/service-tier-hyperscale?view=azuresql) · [Create a Hyperscale Database - Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/hyperscale-database-create-quickstart?view=azuresql)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 134",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/135-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-135",
    "questionNumber": 135,
    "text": "Your company has the divisions shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783708623350-sxniuf19.png)  \n  \nSub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com can authenticate to App1.  \n  \nYou need to recommend a solution that enables users in the fabrikam.com tenant to authenticate to App1.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Configure Azure AD join."
      },
      {
        "key": "B",
        "text": "Configure Azure AD Identity Protection."
      },
      {
        "key": "C",
        "text": "Use Azure AD entitlement management to govern external users."
      },
      {
        "key": "D",
        "text": "Configure assignments for the fabrikam.com users by using Azure AD Privileged Identity Management (PIM)."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Quản lý quyền lợi Microsoft Entra sử dụng cộng tác B2B để cấp cho người dùng bên ngoài quyền truy cập vào tài nguyên trong một đối tượng thuê khác. Người dùng Fabrikam có thể xác thực bằng danh tính người thuê nhà của họ trong khi được đại diện là người dùng khách trong đối tượng thuê Contoso và được chỉ định quyền truy cập vào App1.\n\n**Tài liệu tham khảo:**\n[Govern access for external users in entitlement management](https://learn.microsoft.com/en-us/entra/id-governance/entitlement-management-external-users)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783708623350-sxniuf19.png",
    "sourceTitle": "Examcademy AZ-305 Question 135",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/136-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-136",
    "questionNumber": 136,
    "text": "You have 100 devices that write performance data to Azure Blob Storage.  \n  \nYou plan to store and analyze the performance data in an Azure SQL database.  \n  \nYou need to recommend a solution that continually copies the performance data to the Azure SQL database.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Data Factory"
      },
      {
        "key": "B",
        "text": "Data Migration Assistant (DMA)"
      },
      {
        "key": "C",
        "text": "Azure Data Box"
      },
      {
        "key": "D",
        "text": "Azure Database Migration Service"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Azure Data Factory hỗ trợ các quy trình tích hợp dữ liệu được lên lịch hoặc kích hoạt với Copy activity, bao gồm sao chép dữ liệu từ Azure Blob Storage sang Azure SQL Database. Điều này làm cho nó phù hợp để liên tục nhập dữ liệu hiệu suất khi nó đến.\n\n**Tài liệu tham khảo:**\n[Copy data from Azure Blob to Azure SQL Database using Azure Data Factory](https://learn.microsoft.com/en-us/azure/data-factory/tutorial-copy-data-dot-net) · [Copy activity in Azure Data Factory](https://learn.microsoft.com/en-us/azure/data-factory/copy-activity-overview)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 136",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/137-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-137",
    "questionNumber": 137,
    "text": "You need to design a highly available Azure SQL database that fulfills these requirements:  \n  \n- Failover between database replicas must take place with no data loss.  \n- The database must stay available if a zone outage occurs.  \n- Costs must be kept to a minimum.  \n  \nWhich deployment option should be used?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure SQL Database Business Critical"
      },
      {
        "key": "B",
        "text": "Azure SQL Database Basic"
      },
      {
        "key": "C",
        "text": "Azure SQL Managed Instance General Purpose"
      },
      {
        "key": "D",
        "text": "Azure SQL Database Hyperscale"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Tầng quan trọng trong kinh doanh cung cấp một số bản sao có tính sẵn sàng cao đồng bộ. Khi bật dự phòng vùng, các bản sao đó sẽ được phân phối trên availability zones, do đó, bản sao còn sót lại có thể trở thành bản sao chính sau lỗi vùng mà không mất dữ liệu đã cam kết. Vì Business Critical đã bao gồm các bản sao dùng cho cấu hình này nên việc bật tính năng dự phòng vùng sẽ không tính thêm một khoản phí riêng, không giống như Mục đích chung của phiên bản được quản lý dự phòng theo vùng. [Reliability in Azure SQL Database](https://learn.microsoft.com/en-us/azure/reliability/reliability-sql-database)\n\n**Tài liệu tham khảo:**\n[Reliability in Azure SQL Database](https://learn.microsoft.com/en-us/azure/reliability/reliability-sql-database) · [Azure SQL Database vCore service tiers](https://learn.microsoft.com/en-us/azure/azure-sql/database/service-tiers-sql-database-vcore?view=azuresql)",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 137",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/138-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-138",
    "questionNumber": 138,
    "text": "Your company has the infrastructure shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783706713371-e9isvnso.png)  \n  \nThe on-premises Active Directory domain is synchronized with Azure Active Directory (Azure AD).    \n\nServer1 runs an application named App1 that uses LDAP queries to validate user identities in the on-premises Active Directory domain.  \n  \nYou plan to migrate Server1 to a virtual machine in Subscription1.  \n  \nA company security policy requires that virtual machines and services deployed to Subscription1 be prevented from accessing the on-premises network.  \n  \nYou need to recommend a solution that ensures App1 continues to function after the migration. The solution must comply with the security policy.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure AD Application Proxy"
      },
      {
        "key": "B",
        "text": "the Active Directory Domain Services role on a virtual machine"
      },
      {
        "key": "C",
        "text": "an Azure VPN gateway"
      },
      {
        "key": "D",
        "text": "Azure AD Domain Services (Azure AD DS)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Dịch vụ miền Azure AD (nay là Dịch vụ miền Microsoft Entra) cung cấp các dịch vụ miền được quản lý, bao gồm LDAP, cho khối lượng công việc Azure. Trong môi trường kết hợp, danh tính AD DS tại chỗ sẽ đồng bộ hóa với Microsoft Entra ID và sau đó được tự động đồng bộ hóa vào miền được quản lý, cho phép App1 thực hiện các truy vấn LDAP cục bộ trong Azure mà không cần truy cập vào mạng tại chỗ.\n\n**Tài liệu tham khảo:**\n[LDAP authentication with Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/architecture/auth-ldap) · [How objects and credentials are synchronized in Microsoft Entra Domain Services](https://learn.microsoft.com/en-us/entra/identity/domain-services/synchronization)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783706713371-e9isvnso.png",
    "sourceTitle": "Examcademy AZ-305 Question 138",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/139-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-139",
    "questionNumber": 139,
    "text": "You plan to deploy an application named App1 that will run on five Azure virtual machines. Additional virtual machines will be deployed later to run App1.  \n  \nYou need to recommend a solution that meets the following requirements for the virtual machines running App1:  \n  \n- Ensure that the virtual machines can authenticate to Azure Active Directory (Azure AD) to access an Azure key vault, Azure Logic Apps instances, and an Azure SQL database.  \n- Avoid assigning new roles and permissions for Azure services when additional virtual machines are deployed.  \n- Avoid storing secrets and certificates on the virtual machines.  \n- Minimize administrative effort for identity management.  \n  \nWhich type of identity should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a system-assigned managed identity"
      },
      {
        "key": "B",
        "text": "a service principal that is configured to use a certificate"
      },
      {
        "key": "C",
        "text": "a service principal that is configured to use a client secret"
      },
      {
        "key": "D",
        "text": "a user-assigned managed identity"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "user-assigned managed identity có vòng đời độc lập và có thể được gán cho nhiều tài nguyên Azure, bao gồm tất cả các máy ảo App1. Việc cấp cho danh tính quyền truy cập cần thiết sau khi duy trì các quyền tương tự như các máy ảo bổ sung được gán cho nó. Mã thông báo Azure-managed identity loại bỏ nhu cầu lưu trữ hoặc quản lý bí mật và chứng chỉ của khách hàng trên máy ảo.\n\n**Tài liệu tham khảo:**\n[Managed identities for Azure resources overview](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 139",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/140-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-140",
    "questionNumber": 140,
    "text": "You must design a highly available Azure SQL database that satisfies these requirements:  \n  \n- Failover between database replicas must happen with no data loss.  \n- The database must stay available if an availability zone experiences an outage.  \n- Costs must be kept to a minimum.  \n  \nWhich deployment option should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure SQL Database Business Critical"
      },
      {
        "key": "B",
        "text": "Azure SQL Managed Instance Business Critical"
      },
      {
        "key": "C",
        "text": "Azure SQL Database Standard"
      },
      {
        "key": "D",
        "text": "Azure SQL Managed Instance General Purpose"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Azure SQL Database Business Critical hỗ trợ triển khai dự phòng theo vùng để phân phối bản sao trên availability zones và giữ sẵn bản sao được đồng bộ hóa để chuyển đổi dự phòng. Tiêu chuẩn Azure SQL Database không hỗ trợ dự phòng vùng. Đối với khối lượng công việc chỉ dành cho cơ sở dữ liệu, Business Critical sẽ tránh được chi phí và chi phí triển khai phiên bản được quản lý bổ sung trong khi vẫn đáp ứng được yêu cầu về độ khả dụng không mất dữ liệu, có khả năng phục hồi theo vùng.\n\n**Tài liệu tham khảo:**\n[Reliability in Azure SQL Database](https://learn.microsoft.com/en-us/azure/reliability/reliability-sql-database) · [Availability Through Local and Zone Redundancy - Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/high-availability-sla-local-zone-redundancy?view=azuresql-db)",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 140",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/141-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-141",
    "questionNumber": 141,
    "text": "You plan to develop a new app that will store business-critical data. The app must meet these requirements:  \n  \n- Prevent newly stored data from being modified for one year.  \n- Maximize data resiliency.  \n- Minimize read latency.  \n  \nWhich storage solution should you recommend for the app?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "storage_account_type",
        "text": "Storage Account type:",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "redundancy",
        "text": "Redundancy:",
        "correctAnswer": "D",
        "choiceKeys": [
          "D",
          "E"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Premium block blobs"
      },
      {
        "key": "B",
        "text": "Standard general-purpose v1"
      },
      {
        "key": "C",
        "text": "Standard general-purpose v2"
      },
      {
        "key": "D",
        "text": "Zone-redundant storage (ZRS)"
      },
      {
        "key": "E",
        "text": "Locally-redundant storage (LRS)"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Premium block blobs"
      },
      {
        "key": "B",
        "text": "Standard general-purpose v1"
      },
      {
        "key": "C",
        "text": "Standard general-purpose v2"
      },
      {
        "key": "D",
        "text": "Zone-redundant storage (ZRS)"
      },
      {
        "key": "E",
        "text": "Locally-redundant storage (LRS)"
      }
    ],
    "correctAnswers": [
      "storage_account_type=A",
      "redundancy=D"
    ],
    "explanation": "Bộ lưu trữ blob không thể thay đổi (lưu giữ theo thời gian) được hỗ trợ ở cả cấp hiệu suất tiêu chuẩn và cao cấp, do đó, nó không phân biệt giữa các tùy chọn loại tài khoản ở đây; yêu cầu quyết định là giảm thiểu độ trễ đọc. Tài khoản lưu trữ blob khối cao cấp được hỗ trợ bởi phần cứng dựa trên SSD được tối ưu hóa cho thông lượng cao và độ trễ ổn định, thấp, khiến khối blob cao cấp trở thành loại tài khoản lưu trữ chính xác thay vì cấp mục đích chung tiêu chuẩn. Zone-redundant storage (ZRS) sao chép đồng bộ dữ liệu trên ba availability zones ở khu vực chính, tối đa hóa khả năng phục hồi mà không phải trả thêm chi phí và độ trễ của các tùy chọn sao chép địa lý, đồng thời được hỗ trợ cùng với bộ lưu trữ bất biến trên các tài khoản blob khối cao cấp.\n\n**Tài liệu tham khảo:**\n[Store business-critical data with immutable storage](https://learn.microsoft.com/en-us/azure/storage/blobs/immutable-storage-overview) · [Azure Storage redundancy](https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 141",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/142-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-142",
    "questionNumber": 142,
    "text": "You need to deploy an instance of SQL Server on Azure Virtual Machines. The solution must meet these requirements:  \n  \n- Support 15,000 disk IOPS.  \n- Support SR-IOV.  \n- Minimize costs.  \n  \nWhat should you include in the solution?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "virtual_machine_series",
        "text": "Virtual machine series:",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "disk_type",
        "text": "Disk type:",
        "correctAnswer": "E",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "DS"
      },
      {
        "key": "B",
        "text": "NC"
      },
      {
        "key": "C",
        "text": "NV"
      },
      {
        "key": "D",
        "text": "Standard SSD"
      },
      {
        "key": "E",
        "text": "Premium SSD"
      },
      {
        "key": "F",
        "text": "Ultra Disk"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "DS"
      },
      {
        "key": "B",
        "text": "NC"
      },
      {
        "key": "C",
        "text": "NV"
      },
      {
        "key": "D",
        "text": "Standard SSD"
      },
      {
        "key": "E",
        "text": "Premium SSD"
      },
      {
        "key": "F",
        "text": "Ultra Disk"
      }
    ],
    "correctAnswers": [
      "virtual_machine_series=A",
      "disk_type=E"
    ],
    "explanation": "Máy ảo dòng DS là sự lựa chọn có mục đích chung tiết kiệm chi phí và hỗ trợ Mạng tăng tốc, cho phép SR-IOV. SSD cao cấp có thể cung cấp IOPS đĩa cần thiết, trong khi SSD tiêu chuẩn bị giới hạn ở 6.000 IOPS mỗi đĩa; Ultra Disk là không cần thiết và chi phí nhiều hơn.\n\n**Tài liệu tham khảo:**\n[Azure Accelerated Networking overview](https://learn.microsoft.com/en-us/azure/virtual-network/accelerated-networking-overview) · [Select a disk type for Azure IaaS VMs](https://learn.microsoft.com/en-us/azure/virtual-machines/disks-types)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 142",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/143-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-143",
    "questionNumber": 143,
    "text": "Your company has the divisions shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783707484570-jeb2v6ng.jpg)  \n  \nSub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com can authenticate to App1.  \n  \nYou need to recommend a solution that enables users in the fabrikam.com tenant to authenticate to App1. What should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Configure the Azure AD provisioning service."
      },
      {
        "key": "B",
        "text": "Configure assignments for the fabrikam.com users by using Azure AD Privileged Identity Management (PIM)."
      },
      {
        "key": "C",
        "text": "Use Azure AD entitlement management to govern external users."
      },
      {
        "key": "D",
        "text": "Configure Azure AD Identity Protection."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Quản lý quyền lợi Azure AD sử dụng Microsoft Entra B2B để cung cấp cho người dùng bên ngoài đại diện khách trong đối tượng thuê tài nguyên và có thể chỉ định quyền truy cập được quản lý vào các ứng dụng doanh nghiệp thông qua các gói truy cập. Điều này cho phép người dùng fabrikam.com xác thực bằng danh tính người thuê nhà của họ trong khi nhận được quyền truy cập vào App1 trong đối tượng thuê contoso.com.\n\n**Tài liệu tham khảo:**\n[Govern access for external users in entitlement management](https://learn.microsoft.com/en-us/entra/id-governance/entitlement-management-external-users) · [Create an access package in entitlement management](https://learn.microsoft.com/en-us/entra/id-governance/entitlement-management-access-package-create)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783707484570-jeb2v6ng.jpg",
    "sourceTitle": "Examcademy AZ-305 Question 143",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/144-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-144",
    "questionNumber": 144,
    "text": "Your company has an app named App1 that uses data from the on-premises Microsoft SQL Server databases shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783707859616-brfw04sf.png)  \n  \nApp1 and its data are used only on the first day of each month. The data is not expected to grow by more than 3 percent annually.  \n  \nThe company is rewriting App1 as an Azure web app and plans to migrate all data to Azure.  \n  \nYou need to migrate the data to Azure SQL Database and ensure that the database is available only on the first day of every month.  \n  \nWhich service tier should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "vCore-based General Purpose"
      },
      {
        "key": "B",
        "text": "DTU-based Standard"
      },
      {
        "key": "C",
        "text": "vCore-based Business Critical"
      },
      {
        "key": "D",
        "text": "DTU-based Basic"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Cơ sở dữ liệu không có máy chủ Azure SQL Database có thể tự động tạm dừng trong thời gian không hoạt động, chỉ để lại hóa đơn lưu trữ và tiếp tục khi hoạt động trở lại. Tính năng tự động tạm dừng và tự động tiếp tục chỉ được hỗ trợ ở tầng dịch vụ Mục đích chung dựa trên vCore, giúp dịch vụ này phù hợp với khối lượng công việc chỉ được sử dụng một ngày mỗi tháng.\n\n**Tài liệu tham khảo:**\n[Serverless compute tier - Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/serverless-tier-overview?view=azuresql)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783707859616-brfw04sf.png",
    "sourceTitle": "Examcademy AZ-305 Question 144",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/145-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-145",
    "questionNumber": 145,
    "text": "You have an Azure App Service web app named Webapp1 that connects to an Azure SQL database named DB1. Webapp1 and DB1 are deployed in the East US Azure region.  \n  \nEnsure that all traffic between Webapp1 and DB1 travels over a private connection.  \n  \nWhat should you do?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "subnets",
        "text": "Create a virtual network that contains at least:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "dns",
        "text": "From the virtual network, configure name resolution to use:",
        "correctAnswer": "D",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "1 subnet"
      },
      {
        "key": "B",
        "text": "2 subnets"
      },
      {
        "key": "C",
        "text": "3 subnets"
      },
      {
        "key": "D",
        "text": "A private DNS zone"
      },
      {
        "key": "E",
        "text": "A public DNS zone"
      },
      {
        "key": "F",
        "text": "The Azure DNS Private Resolver"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "1 subnet"
      },
      {
        "key": "B",
        "text": "2 subnets"
      },
      {
        "key": "C",
        "text": "3 subnets"
      },
      {
        "key": "D",
        "text": "A private DNS zone"
      },
      {
        "key": "E",
        "text": "A public DNS zone"
      },
      {
        "key": "F",
        "text": "The Azure DNS Private Resolver"
      }
    ],
    "correctAnswers": [
      "subnets=B",
      "dns=D"
    ],
    "explanation": "Tích hợp VNet dịch vụ ứng dụng cần một mạng con được ủy quyền chuyên dụng và Azure SQL private endpoint sử dụng một mạng con khác. Vùng DNS riêng được liên kết với mạng ảo sẽ phân giải tên máy chủ liên kết riêng Azure SQL thành địa chỉ IP private endpoint, do đó lưu lượng cơ sở dữ liệu vẫn ở chế độ riêng tư.\n\n**Tài liệu tham khảo:**\n[Integrate your app with an Azure virtual network](https://learn.microsoft.com/en-us/azure/app-service/overview-vnet-integration) · [Azure Private Endpoint private DNS zone values](https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-dns)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 145",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/146-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-146",
    "questionNumber": 146,
    "text": "You plan to create an Azure Storage account that will host file shares. The shares will be accessed from transaction-intensive on-premises applications.  \n  \nYou need to recommend a solution that minimizes latency when accessing the file shares and provides the highest level of resiliency for the selected storage tier.",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "storage_tier",
        "text": "Storage tier:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "redundancy",
        "text": "Redundancy:",
        "correctAnswer": "E",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Hot"
      },
      {
        "key": "B",
        "text": "Premium"
      },
      {
        "key": "C",
        "text": "Transaction optimized"
      },
      {
        "key": "D",
        "text": "Geo-redundant storage (GRS)"
      },
      {
        "key": "E",
        "text": "Zone-redundant storage (ZRS)"
      },
      {
        "key": "F",
        "text": "Locally-redundant storage (LRS)"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Hot"
      },
      {
        "key": "B",
        "text": "Premium"
      },
      {
        "key": "C",
        "text": "Transaction optimized"
      },
      {
        "key": "D",
        "text": "Geo-redundant storage (GRS)"
      },
      {
        "key": "E",
        "text": "Zone-redundant storage (ZRS)"
      },
      {
        "key": "F",
        "text": "Locally-redundant storage (LRS)"
      }
    ],
    "correctAnswers": [
      "storage_tier=B",
      "redundancy=E"
    ],
    "explanation": "Azure Files cao cấp sử dụng phương tiện SSD và được khuyên dùng cho khối lượng công việc đòi hỏi nhiều IO yêu cầu độ trễ thấp. Chia sẻ tệp cao cấp hỗ trợ LRS hoặc ZRS, không phải GRS; ZRS lưu trữ đồng bộ các bản sao trên ba availability zones, mang lại khả năng phục hồi cao hơn LRS.\n\n**Tài liệu tham khảo:**\n[Reliability in Azure Files](https://learn.microsoft.com/en-us/azure/reliability/reliability-storage-files) · [Plan for an Azure Files deployment](https://learn.microsoft.com/en-us/azure/storage/files/storage-files-planning)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 146",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/147-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-147",
    "questionNumber": 147,
    "text": "You need to design a solution that executes custom C# code in response to an event routed through Azure Event Grid. The solution must meet the following requirements:  \n  \n- The executed code must be able to access the private IP address of a Microsoft SQL Server instance running on an Azure virtual machine.  \n- Costs must be minimized.  \n  \nWhat should you include in the solution?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Logic Apps in the Consumption plan"
      },
      {
        "key": "B",
        "text": "Azure Functions in the Premium plan"
      },
      {
        "key": "C",
        "text": "Azure Functions in the Consumption plan"
      },
      {
        "key": "D",
        "text": "Azure Logic Apps in the integrated service environment"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Azure Functions có thể thực thi mã C# tùy chỉnh để phản hồi các sự kiện Azure Event Grid. Một ứng dụng chức năng được lưu trữ trên gói Premium hỗ trợ tích hợp mạng ảo, cho phép giao tiếp ra bên ngoài với các tài nguyên trong mạng ảo, bao gồm SQL Server chạy trên máy ảo Azure theo địa chỉ IP riêng của nó. Điều này đáp ứng yêu cầu kết nối riêng tư mà không phải trả chi phí cao hơn cho môi trường dịch vụ tích hợp Ứng dụng Logic chuyên dụng.\n\n**Tài liệu tham khảo:**\n[Azure Functions Premium plan](https://learn.microsoft.com/en-us/azure/azure-functions/functions-premium-plan) · [Azure Event Grid trigger for Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-event-grid-trigger)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 147",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/148-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-148",
    "questionNumber": 148,
    "text": "You are developing a sales application that will include several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.  \n  \nYou need to recommend a solution that enables the cloud services to asynchronously exchange transaction information by using XML messages.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Service Fabric"
      },
      {
        "key": "B",
        "text": "Azure Notification Hubs"
      },
      {
        "key": "C",
        "text": "Azure Service Bus"
      },
      {
        "key": "D",
        "text": "Azure Traffic Manager"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Azure Service Bus cung cấp tính năng nhắn tin không đồng bộ đáng tin cậy giữa các ứng dụng và dịch vụ được tách riêng thông qua hàng đợi và chủ đề. Thông báo của nó mang tải trọng do ứng dụng xác định, do đó dữ liệu giao dịch XML có thể được gửi giữa các dịch vụ đặt hàng, thanh toán, thanh toán, kiểm kê và vận chuyển.\n\n**Tài liệu tham khảo:**\n[Azure Service Bus asynchronous messaging](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-async-messaging) · [Azure Service Bus messages, payloads, and serialization](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messages-payloads)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 148",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/149-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-149",
    "questionNumber": 149,
    "text": "You plan to deploy an Azure App Service web app with multiple instances in multiple Azure regions.  \n  \nYou need to recommend a load-balancing service for the planned deployment. The solution must meet these requirements:  \n  \n- Maintain access to the app if a regional outage occurs.  \n- Support Azure Web Application Firewall (WAF).  \n- Support cookie-based affinity.  \n- Support URL routing.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Front Door"
      },
      {
        "key": "B",
        "text": "Azure Traffic Manager"
      },
      {
        "key": "C",
        "text": "Azure Application Gateway"
      },
      {
        "key": "D",
        "text": "Azure Load Balancer"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Azure Front Door cung cấp phân phối lưu lượng HTTP(S) toàn cầu trên nhiều nguồn gốc lành mạnh, bao gồm cả chuyển đổi dự phòng tự động khi nguồn gốc không khả dụng. Nó hỗ trợ mối quan hệ phiên dựa trên cookie và kết hợp tuyến đường URL; Azure Front Door Premium cung cấp hỗ trợ Tường lửa ứng dụng web.\n\n**Tài liệu tham khảo:**\n[Traffic routing methods to origin - Azure Front Door](https://learn.microsoft.com/en-us/azure/frontdoor/routing-methods) · [Routing architecture - Azure Front Door](https://learn.microsoft.com/en-us/azure/frontdoor/front-door-routing-architecture)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 149",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/150-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-150",
    "questionNumber": 150,
    "text": "You need to design a highly available Azure SQL database that fulfills these requirements:  \n  \n- Failover between database replicas must occur with no data loss.  \n- The database must stay available if an availability zone fails.  \n- Costs must be kept to a minimum.  \n  \nWhich deployment option should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure SQL Database Business Critical"
      },
      {
        "key": "B",
        "text": "Azure SQL Database Hyperscale"
      },
      {
        "key": "C",
        "text": "Azure SQL Managed Instance Business Critical"
      },
      {
        "key": "D",
        "text": "Azure SQL Database Standard"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Azure SQL Database Business Critical hỗ trợ triển khai dự phòng theo vùng, với các bản sao được đặt trong availability zones riêng biệt và bản sao đồng bộ giúp bảo toàn dữ liệu đã cam kết trong quá trình chuyển đổi dự phòng. Nhiều bản sao của nó được bao gồm, do đó việc phân phối chúng trên các vùng sẽ phải trả thêm phí dự phòng vùng no. Tiêu chuẩn Azure SQL Database không hỗ trợ dự phòng vùng; Hyperscale yêu cầu ít nhất một bản sao thứ cấp HA để dự phòng vùng.\n\n**Tài liệu tham khảo:**\n[Reliability in Azure SQL Database](https://learn.microsoft.com/en-us/azure/reliability/reliability-sql-database) · [Availability Through Local and Zone Redundancy - Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/high-availability-sla-local-zone-redundancy?view=azuresql)",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 150",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/151-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-151",
    "questionNumber": 151,
    "text": "You have two on-premises Microsoft SQL Server 2017 instances that host an Always On availability group named AG1. AG1 contains one database, DB1.  \n  \nYour Azure subscription includes a virtual machine named VM1. VM1 runs Linux and hosts a SQL Server 2019 instance.  \n  \nYou need to migrate DB1 to VM1 while minimizing downtime on DB1. What should you do?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "prepare",
        "text": "Prepare for the migration by:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "migrate",
        "text": "Perform the migration by using:",
        "correctAnswer": "D",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Adding a secondary replica to AG1"
      },
      {
        "key": "B",
        "text": "Creating an Always On availability group on VM1"
      },
      {
        "key": "C",
        "text": "Upgrading the on-premises SQL Server instances"
      },
      {
        "key": "D",
        "text": "A distributed availability group"
      },
      {
        "key": "E",
        "text": "Azure Migrate"
      },
      {
        "key": "F",
        "text": "Log shipping"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Adding a secondary replica to AG1"
      },
      {
        "key": "B",
        "text": "Creating an Always On availability group on VM1"
      },
      {
        "key": "C",
        "text": "Upgrading the on-premises SQL Server instances"
      },
      {
        "key": "D",
        "text": "A distributed availability group"
      },
      {
        "key": "E",
        "text": "Azure Migrate"
      },
      {
        "key": "F",
        "text": "Log shipping"
      }
    ],
    "correctAnswers": [
      "prepare=B",
      "migrate=D"
    ],
    "explanation": "Nhóm khả dụng được phân phối liên kết các nhóm khả dụng riêng biệt và hỗ trợ di chuyển thời gian ngừng hoạt động thấp từ nhóm khả dụng hiện có sang SQL Server trên máy ảo Azure. Việc tạo nhóm khả dụng mục tiêu trên VM1 cho phép nhóm này tham gia với tư cách là AG mục tiêu; AG phân tán sau đó sẽ đồng bộ hóa cơ sở dữ liệu cho đến khi chuyển đổi. Cách tiếp cận này hỗ trợ di chuyển trên các phiên bản SQL Server khác nhau và các nền tảng cơ bản, bao gồm các kịch bản di chuyển từ Windows sang Linux.\n\n**Tài liệu tham khảo:**\n[Use distributed AG to migrate availability group](https://learn.microsoft.com/en-us/data-migration/sql-server/virtual-machines/distributed-availability-group-migrate-availability-group) · [Business Continuity and Database Recovery - SQL Server on Linux](https://learn.microsoft.com/en-us/sql/linux/sql-server-linux-business-continuity-dr?view=sql-server-ver17)",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 151",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/152-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-152",
    "questionNumber": 152,
    "text": "You are developing a sales application that will include several Azure cloud services and handle different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.  \n  \nYou need to recommend a solution that enables the cloud services to communicate transaction information asynchronously by using XML messages.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Notification Hubs"
      },
      {
        "key": "B",
        "text": "Azure Application Gateway"
      },
      {
        "key": "C",
        "text": "Azure Queue Storage"
      },
      {
        "key": "D",
        "text": "Azure Traffic Manager"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Azure Queue Storage cung cấp hàng đợi tin nhắn không đồng bộ, đáng tin cậy để liên lạc giữa các thành phần được liên kết lỏng lẻo của các ứng dụng phân tán. Các dịch vụ có thể xếp các tin nhắn giao dịch vào hàng đợi để các dịch vụ khác truy xuất và xử lý sau; tin nhắn hàng đợi là văn bản UTF-8 tương thích với các yêu cầu XML.\n\n**Tài liệu tham khảo:**\n[Tutorial: Work with Azure Queue Storage queues in .NET](https://learn.microsoft.com/en-us/azure/storage/queues/storage-tutorial-queues) · [Reliability in Azure Queue Storage](https://learn.microsoft.com/en-us/azure/reliability/reliability-storage-queue)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 152",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/153-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-153",
    "questionNumber": 153,
    "text": "You must design a highly available Azure SQL database that meets these requirements:  \n  \n- Failover between database replicas must take place with no data loss.  \n- The database must stay available if an availability zone experiences an outage.  \n- Costs must be kept to a minimum.  \n  \nWhich deployment option should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure SQL Database Standard"
      },
      {
        "key": "B",
        "text": "Azure SQL Managed Instance General Purpose"
      },
      {
        "key": "C",
        "text": "Azure SQL Database Serverless"
      },
      {
        "key": "D",
        "text": "Azure SQL Database Premium"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Triển khai Azure SQL Database Premium dự phòng theo vùng đặt các bản sao đồng bộ trong các availability zones khác nhau. Một giao dịch chỉ được thực hiện sau khi nó được duy trì trên đủ bản sao thứ cấp, do đó, một bản sao được đồng bộ hóa hoàn toàn có sẵn để chuyển đổi dự phòng khi no bị mất dữ liệu đã cam kết. Premium cũng hỗ trợ dự phòng vùng mà không phải trả thêm phí dự phòng vùng vì nó sử dụng các bản sao hiện có.\n\n**Tài liệu tham khảo:**\n[Reliability in Azure SQL Database](https://learn.microsoft.com/en-us/azure/reliability/reliability-sql-database)",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 153",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/154-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-154",
    "questionNumber": 154,
    "text": "You need to recommend a solution that fulfills the file-storage requirements for App2.  \n  \nWhat should be deployed to the Azure subscription and to the on-premises network? Each service can be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "azure_subscription",
        "text": "Azure subscription:",
        "correctAnswer": "F"
      },
      {
        "id": "on_premises_network",
        "text": "On-premises network:",
        "correctAnswer": "E"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Azure Blob Storage"
      },
      {
        "key": "B",
        "text": "Azure Data Box"
      },
      {
        "key": "C",
        "text": "Azure Data Box Gateway"
      },
      {
        "key": "D",
        "text": "Azure Data Lake Storage"
      },
      {
        "key": "E",
        "text": "Azure File Sync"
      },
      {
        "key": "F",
        "text": "Azure Files"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Azure Blob Storage"
      },
      {
        "key": "B",
        "text": "Azure Data Box"
      },
      {
        "key": "C",
        "text": "Azure Data Box Gateway"
      },
      {
        "key": "D",
        "text": "Azure Data Lake Storage"
      },
      {
        "key": "E",
        "text": "Azure File Sync"
      },
      {
        "key": "F",
        "text": "Azure Files"
      }
    ],
    "correctAnswers": [
      "azure_subscription=F",
      "on_premises_network=E"
    ],
    "explanation": "Azure Files cung cấp tính năng chia sẻ tệp được lưu trữ trên đám mây trong đăng ký Azure. Đồng bộ hóa tệp Azure sử dụng điểm cuối Windows Server tại cơ sở để đồng bộ hóa và lưu vào bộ nhớ đệm cục bộ mà tệp Azure chia sẻ.\n\n**Tài liệu tham khảo:**\n[Introduction to Azure File Sync](https://learn.microsoft.com/en-us/azure/storage/file-sync/file-sync-introduction) · [Extend Windows file servers with Azure File Sync](https://learn.microsoft.com/en-us/azure/storage/file-sync/file-sync-extend-servers)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 154",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/155-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-155",
    "questionNumber": 155,
    "text": "You have the Azure resources shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783707871059-kga3vpj0.png)  \n  \nYou need to design a solution that provides on-premises network connectivity to SQLDB1 through PE1.  \n  \nHow should name resolution be configured?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "azure_configuration",
        "text": "Azure configuration",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "on_premises_dns_configuration",
        "text": "On-premises DNS configuration",
        "correctAnswer": "D",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Configure VM1 to forward contoso.com to the public DNS zone"
      },
      {
        "key": "B",
        "text": "Configure VM1 to forward contoso.com to the Azure-provided DNS at 168.63.129.16"
      },
      {
        "key": "C",
        "text": "In VNet1, configure a custom DNS server set to the Azure-provided DNS at 168.63.129.16"
      },
      {
        "key": "D",
        "text": "Forward contoso.com to VM1"
      },
      {
        "key": "E",
        "text": "Forward contoso.com to the public DNS zone"
      },
      {
        "key": "F",
        "text": "Forward contoso.com to the Azure-provisioned DNS at 168.63.129.16"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Configure VM1 to forward contoso.com to the public DNS zone"
      },
      {
        "key": "B",
        "text": "Configure VM1 to forward contoso.com to the Azure-provided DNS at 168.63.129.16"
      },
      {
        "key": "C",
        "text": "In VNet1, configure a custom DNS server set to the Azure-provided DNS at 168.63.129.16"
      },
      {
        "key": "D",
        "text": "Forward contoso.com to VM1"
      },
      {
        "key": "E",
        "text": "Forward contoso.com to the public DNS zone"
      },
      {
        "key": "F",
        "text": "Forward contoso.com to the Azure-provisioned DNS at 168.63.129.16"
      }
    ],
    "correctAnswers": [
      "azure_configuration=B",
      "on_premises_dns_configuration=D"
    ],
    "explanation": "DNS do Azure cung cấp sẽ phân giải bản ghi A riêng tư trong vùng contoso.com riêng tư khi truy vấn bắt nguồn từ VNET1. VM1 có thể hoạt động như bộ chuyển tiếp DNS bên trong VNET1 và chuyển tiếp contoso.com tới 168.63.129.16. DNS tại chỗ phải chuyển tiếp vùng đó tới VM1 vì DNS do Azure cung cấp không thể truy cập trực tiếp từ cơ sở; cái này trả về địa chỉ private endpoint của PE1 cho SQLDB1.\n\n**Tài liệu tham khảo:**\n[Azure Private Endpoint DNS Integration Scenarios](https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-dns-integration) · [Troubleshoot private endpoint DNS resolution failure in Azure Private Link](https://learn.microsoft.com/en-us/troubleshoot/azure/private-link/troubleshoot-private-endpoint-dns-resolution)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783707871059-kga3vpj0.png",
    "sourceTitle": "Examcademy AZ-305 Question 155",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/156-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-156",
    "questionNumber": 156,
    "text": "You have an Azure subscription containing two applications named App1 and App2. App1 is a sales-processing application. When an App1 transaction requires shipping, a message is added to an Azure Storage account queue, and App2 then listens to the queue for relevant transactions.  \n  \nIn the future, additional applications will be added to process some shipping requests based on the specific transaction details.  \n  \nYou need to recommend a replacement for the storage account queue so that each additional application can read the relevant transactions.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "one Azure Data Factory pipeline"
      },
      {
        "key": "B",
        "text": "multiple storage account queues"
      },
      {
        "key": "C",
        "text": "one Azure Service Bus queue"
      },
      {
        "key": "D",
        "text": "one Azure Service Bus topic"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Các chủ đề Azure Service Bus triển khai tính năng nhắn tin xuất bản/đăng ký. Mỗi ứng dụng có thể có một đăng ký riêng nhận bản sao của các tin nhắn đã xuất bản và các bộ lọc đăng ký chỉ có thể định tuyến các giao dịch liên quan đến ứng dụng đó. Thay vào đó, hàng đợi Service Bus sẽ gửi từng tin nhắn đến một người tiêu dùng.\n\n**Tài liệu tham khảo:**\n[Azure Service Bus queues, topics, and subscriptions](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 156",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/157-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-157",
    "questionNumber": 157,
    "text": "You are building a sales application that will include several Azure cloud services and manage different parts of a transaction. Separate cloud services will process customer orders, billing, payment, inventory, and shipping.  \n  \nYou need to recommend a solution that lets the cloud services asynchronously exchange transaction information by using XML messages.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Notification Hubs"
      },
      {
        "key": "B",
        "text": "Azure Service Bus"
      },
      {
        "key": "C",
        "text": "Azure Blob Storage"
      },
      {
        "key": "D",
        "text": "Azure Service Fabric"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Azure Service Bus cung cấp hàng đợi bền bỉ và xuất bản/đăng ký các chủ đề giúp tách rời các dịch vụ đám mây để nhắn tin không đồng bộ. Tải trọng tin nhắn của nó có thể chứa dữ liệu có cấu trúc được mã hóa dưới dạng XML, giúp nó phù hợp để trao đổi dữ liệu giao dịch giữa các thành phần đặt hàng, thanh toán, thanh toán, hàng tồn kho và vận chuyển.\n\n**Tài liệu tham khảo:**\n[What is Azure Service Bus?](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview) · [Asynchronous messaging patterns and high availability](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-async-messaging)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 157",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/158-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-158",
    "questionNumber": 158,
    "text": "You have the Azure subscriptions shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783709624644-7j67b19l.png)  \n  \nContoso.onmicrosft.com contains a user named User1.  \n  \nYou need to deploy a solution to protect against ransomware attacks. The solution must meet these requirements:  \n  \n- Ensure that all resources in Sub1 are backed up by using Azure Backup.  \n- Require User1 to first be assigned a role for Sub2 before the user can make major changes to the backup configuration.  \n  \nWhat should you create in each subscription?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "sub1",
        "text": "Sub1:",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D",
          "E"
        ]
      },
      {
        "id": "sub2",
        "text": "Sub2:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D",
          "E"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "A Recovery Services vault"
      },
      {
        "key": "B",
        "text": "A Resource Guard"
      },
      {
        "key": "C",
        "text": "An Azure Site Recovery job"
      },
      {
        "key": "D",
        "text": "Microsoft Azure Backup Server (MABS)"
      },
      {
        "key": "E",
        "text": "The Microsoft Azure Recovery Services (MARS) agent"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "A Recovery Services vault"
      },
      {
        "key": "B",
        "text": "A Resource Guard"
      },
      {
        "key": "C",
        "text": "An Azure Site Recovery job"
      },
      {
        "key": "D",
        "text": "Microsoft Azure Backup Server (MABS)"
      },
      {
        "key": "E",
        "text": "The Microsoft Azure Recovery Services (MARS) agent"
      }
    ],
    "correctAnswers": [
      "sub1=A",
      "sub2=B"
    ],
    "explanation": "Recovery Services vault cung cấp chính sách sao lưu và quản lý điểm khôi phục Azure Backup cho khối lượng công việc Azure được hỗ trợ. Bộ bảo vệ tài nguyên cho phép ủy quyền nhiều người dùng Azure Backup cho các hoạt động sao lưu quan trọng. Việc đặt nó vào đối tượng thuê Sub2 riêng biệt có nghĩa là Người dùng1 cần được gán vai trò thích hợp ở đó trước khi thực hiện các thay đổi cấu hình sao lưu được bảo vệ.\n\n**Tài liệu tham khảo:**\n[Multiuser Authorization Using Resource Guard - Azure Backup](https://learn.microsoft.com/en-us/azure/backup/multi-user-authorization-concept) · [Create and configure a Recovery Services vault](https://learn.microsoft.com/en-us/azure/backup/backup-create-recovery-services-vault)",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783709624644-7j67b19l.png",
    "sourceTitle": "Examcademy AZ-305 Question 158",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/159-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-159",
    "questionNumber": 159,
    "text": "You must design a highly available Azure SQL database that satisfies these requirements:  \n  \n- Failover between database replicas must take place with no data loss.  \n- The database must stay available if a zone outage occurs.  \n- Costs must be kept to a minimum.  \n  \nWhich deployment option should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure SQL Managed Instance Business Critical"
      },
      {
        "key": "B",
        "text": "Azure SQL Database Premium"
      },
      {
        "key": "C",
        "text": "Azure SQL Database Basic"
      },
      {
        "key": "D",
        "text": "Azure SQL Database Hyperscale"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Triển khai Azure SQL Database Premium dự phòng theo vùng đặt các bản sao được đồng bộ hóa trong availability zones riêng biệt. Điều này cung cấp khả năng chuyển đổi dự phòng tự động trong thời gian mất điện vùng với dự kiến ​​no sẽ mất dữ liệu đã cam kết. Cơ bản không hỗ trợ dự phòng vùng, trong khi các tùy chọn Phiên bản được quản lý quan trọng trong kinh doanh và Siêu quy mô cung cấp các khả năng cao cấp hơn không cần thiết cho những hạn chế này.\n\n**Tài liệu tham khảo:**\n[Reliability in Azure SQL Database](https://learn.microsoft.com/en-us/azure/reliability/reliability-sql-database)",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 159",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/160-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-160",
    "questionNumber": 160,
    "text": "HOTSPOT -  \n  \nYou have an Azure subscription that contains the resources shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783710339237-6vl2qijy.png)  \n  \nVNet1, VNet2, and VNet3 each have multiple virtual machines connected. The virtual machines use the Azure DNS service for name resolution.  \n  \nYou need to recommend an Azure Monitor log-routing solution that meets the following requirements:  \n  \n- Ensures that logs collected from the virtual machines and sent to Workspace1 are routed over the Microsoft backbone network  \n- Minimizes administrative effort  \n  \nWhat should you include in the recommendation?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "ampls",
        "text": "Minimum number of Azure Monitor Private Link Scope (AMPLS) objects:",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "private_endpoints",
        "text": "Minimum number of private endpoints:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      }
    ],
    "correctAnswers": [
      "ampls=A",
      "private_endpoints=B"
    ],
    "explanation": "Microsoft khuyến nghị rõ ràng việc sử dụng Phạm vi SINGLE Azure Monitor Private Link cho tất cả các mạng chia sẻ DNS vì việc tạo nhiều đối tượng AMPLS khiến các vùng DNS liên kết riêng tư Azure Monitor ghi đè lên nhau và phá vỡ độ phân giải; một AMPLS cũng giảm thiểu nỗ lực quản trị nên câu trả lời là 1 AMPLS. private endpoint cung cấp kết nối từ VNet nơi nó tồn tại và có thể được truy cập bởi các VNet ngang hàng. VNet1 và VNet2 được kết nối ngang hàng và chia sẻ DNS contoso.com, do đó, một private endpoint duy nhất được đặt trong cặp đó sẽ phục vụ cả hai, trong khi VNet3 được tách biệt khỏi VNet1/VNet2 và do đó cần có private endpoint riêng - tối thiểu 2 điểm cuối riêng tư. Tất cả đều kết nối với một AMPLS được chia sẻ.\n\n**Tài liệu tham khảo:**\n[Design Azure Monitor Private Link configuration](https://learn.microsoft.com/en-us/azure/azure-monitor/fundamentals/private-link-design) · [Use Azure Private Link to connect networks to Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/fundamentals/private-link-security)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783710339237-6vl2qijy.png",
    "sourceTitle": "Examcademy AZ-305 Question 160",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/161-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-161",
    "questionNumber": 161,
    "text": "You have an on-premises network that uses an IP address space of 172.16.0.0/16.  \n  \nYou plan to deploy 30 virtual machines to a new Azure subscription.  \n  \nYou identify the following technical requirements:  \n  \n- All Azure virtual machines must be placed on the same subnet named Subnet1.  \n- All Azure virtual machines must be able to communicate with all on-premises servers.  \n- The servers must be able to communicate between the on-premises network and Azure by using a site-to-site VPN.  \n  \nYou need to recommend a subnet design that meets the technical requirements.  \n  \nWhat should you include in the recommendation? Each network address may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "subnet1",
        "text": "Subnet1:",
        "correctAnswer": "C"
      },
      {
        "id": "gateway_subnet",
        "text": "Gateway subnet:",
        "correctAnswer": "D"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "172.16.0.0/16"
      },
      {
        "key": "B",
        "text": "172.16.1.0/27"
      },
      {
        "key": "C",
        "text": "192.168.0.0/24"
      },
      {
        "key": "D",
        "text": "192.168.1.0/27"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "172.16.0.0/16"
      },
      {
        "key": "B",
        "text": "172.16.1.0/27"
      },
      {
        "key": "C",
        "text": "192.168.0.0/24"
      },
      {
        "key": "D",
        "text": "192.168.1.0/27"
      }
    ],
    "correctAnswers": [
      "subnet1=C",
      "gateway_subnet=D"
    ],
    "explanation": "Mạng A /27 chỉ cung cấp 32 địa chỉ, trong đó Azure dự trữ 5 địa chỉ, còn lại 27 địa chỉ có thể sử dụng được - quá ít cho 30 máy ảo được lên kế hoạch - vì vậy Subnet1 phải sử dụng phạm vi 192.168.0.0/24 lớn hơn. Phạm vi 192.168.1.0/27 còn lại có kích thước tối thiểu được Azure đề xuất cho mạng con cổng và được sử dụng cho VPN gateway. Cả hai phạm vi đều tránh chồng chéo không gian địa chỉ 172.16.0.0/16 tại chỗ mà kết nối VPN site-to-site yêu cầu.\n\n**Tài liệu tham khảo:**\n[Azure VPN Gateway FAQ](https://learn.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-vpn-faq#what-are-the-address-range-requirements-for-vpns)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 161",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/162-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-162",
    "questionNumber": 162,
    "text": "You have a multi-tier application named App1 and an Azure SQL database named SQL1. App1's backend service writes data to SQL1. Users use the App1 client to read data from SQL1.  \n  \nDuring times of high utilization, users experience delays when retrieving the data.  \n  \nYou need to minimize the time required for data requests.  \n  \nWhat should you include in the solution?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Cache for Redis"
      },
      {
        "key": "B",
        "text": "Azure Content Delivery Network (CDN)"
      },
      {
        "key": "C",
        "text": "Azure Data Factory"
      },
      {
        "key": "D",
        "text": "Azure Synapse Analytics"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Azure Cache for Redis cung cấp bộ đệm dữ liệu trong bộ nhớ được phân phối cho dữ liệu ứng dụng được truy cập thường xuyên. Việc cung cấp các yêu cầu đọc nhiều từ bộ đệm làm giảm CPU Azure SQL Database và tải I/O đọc, đồng thời cung cấp khả năng truy xuất có độ trễ thấp hơn trong thời gian sử dụng cao.\n\n**Tài liệu tham khảo:**\n[What is Azure Cache for Redis?](https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/cache-overview) · [Performance Tuning Guidance for Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/performance-guidance?view=azuresql)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 162",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/163-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-163",
    "questionNumber": 163,
    "text": "You need to recommend an Azure Storage account configuration for two applications named Application1 and Application2. The configuration must meet these requirements:  \n  \n- Storage for Application1 must provide the highest possible transaction rates and the lowest possible latency.  \n- Storage for Application2 must provide the lowest possible storage costs per GB.  \n- Storage for both applications must remain available if a datacenter fails.  \n- Storage for both applications must be optimized for uploads and downloads.  \n  \nWhat should you recommend?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "application1",
        "text": "Application1:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      },
      {
        "id": "application2",
        "text": "Application2:",
        "correctAnswer": "E",
        "choiceKeys": [
          "E",
          "B",
          "F",
          "G"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "BlobStorage with Standard performance, Hot access tier, and Read-access geo-redundant storage (RA-GRS) replication"
      },
      {
        "key": "B",
        "text": "BlockBlobStorage with Premium performance and Zone-redundant storage (ZRS) replication"
      },
      {
        "key": "C",
        "text": "General purpose v1 with Premium performance and Locally-redundant storage (LRS) replication"
      },
      {
        "key": "D",
        "text": "General purpose v2 with Standard performance, Hot access tier, and Locally-redundant storage (LRS) replication"
      },
      {
        "key": "E",
        "text": "BlobStorage with Standard performance, Cool access tier, and Geo-redundant storage (GRS) replication"
      },
      {
        "key": "F",
        "text": "General purpose v1 with Standard performance and Read-access geo-redundant storage (RA-GRS) replication"
      },
      {
        "key": "G",
        "text": "General purpose v2 with Standard performance, Cool access tier, and Read-access geo-redundant storage (RA-GRS) replication"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "BlobStorage with Standard performance, Hot access tier, and Read-access geo-redundant storage (RA-GRS) replication"
      },
      {
        "key": "B",
        "text": "BlockBlobStorage with Premium performance and Zone-redundant storage (ZRS) replication"
      },
      {
        "key": "C",
        "text": "General purpose v1 with Premium performance and Locally-redundant storage (LRS) replication"
      },
      {
        "key": "D",
        "text": "General purpose v2 with Standard performance, Hot access tier, and Locally-redundant storage (LRS) replication"
      },
      {
        "key": "E",
        "text": "BlobStorage with Standard performance, Cool access tier, and Geo-redundant storage (GRS) replication"
      },
      {
        "key": "F",
        "text": "General purpose v1 with Standard performance and Read-access geo-redundant storage (RA-GRS) replication"
      },
      {
        "key": "G",
        "text": "General purpose v2 with Standard performance, Cool access tier, and Read-access geo-redundant storage (RA-GRS) replication"
      }
    ],
    "correctAnswers": [
      "application1=B",
      "application2=E"
    ],
    "explanation": "Bộ lưu trữ blob khối cao cấp sử dụng SSD và nhằm mục đích mang lại độ trễ thấp nhất quán và tốc độ giao dịch cao; ZRS sao chép dữ liệu trên availability zones để xử lý lỗi trung tâm dữ liệu. Cool tier giảm thiểu chi phí lưu trữ trên mỗi GB đối với dữ liệu blob được truy cập không thường xuyên và GRS sao chép sang khu vực phụ mà không phải trả tiền cho quyền truy cập đọc vào khu vực phụ đó. Bộ lưu trữ Blob được thiết kế để tải lên và tải xuống dữ liệu đối tượng.\n\n**Tài liệu tham khảo:**\n[Azure Storage account overview](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-overview) · [Azure Storage redundancy](https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 163",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/164-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-164",
    "questionNumber": 164,
    "text": "You plan to provision a High Performance Computing (HPC) cluster in Azure that will use a third-party scheduler.  \n  \nYou need to recommend a solution for provisioning and managing the HPC cluster nodes.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Automation"
      },
      {
        "key": "B",
        "text": "Azure CycleCloud"
      },
      {
        "key": "C",
        "text": "Azure Purview"
      },
      {
        "key": "D",
        "text": "Azure Lighthouse"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Azure CycleCloud điều phối và quản lý môi trường HPC trong Azure, cung cấp các máy ảo hình thành các nút cụm và hỗ trợ triển khai hoặc tích hợp bộ lập lịch HPC của bên thứ ba.\n\n**Tài liệu tham khảo:**\n[Overview - Azure CycleCloud](https://learn.microsoft.com/en-us/azure/cyclecloud/overview?view=cyclecloud-8) · [CycleCloud scheduling and autoscaling concepts](https://learn.microsoft.com/en-us/azure/cyclecloud/concepts/scheduling?view=cyclecloud-8)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 164",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/165-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-165",
    "questionNumber": 165,
    "text": "Your company has the divisions shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783709179904-hvd4270r.png)  \n  \nSub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com can authenticate to App1.  \n  \nYou need to recommend a solution that enables users in the fabrikam.com tenant to authenticate to App1.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Configure Azure AD Identity Protection."
      },
      {
        "key": "B",
        "text": "Configure assignments for the fabrikam.com users by using Azure AD Privileged Identity Management (PIM)."
      },
      {
        "key": "C",
        "text": "Configure Supported account types in the application registration and update the sign-in endpoint."
      },
      {
        "key": "D",
        "text": "Configure a Conditional Access policy."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Ứng dụng Microsoft Entra dành cho một đối tượng thuê chỉ chấp nhận người dùng từ đối tượng thuê chính của nó. Để cho phép người dùng từ fabrikam.com xác thực bằng danh tính đối tượng thuê gốc của họ, hãy định cấu hình loại tài khoản được hỗ trợ của đăng ký ứng dụng cho các tài khoản trong bất kỳ thư mục tổ chức nào (đa đối tượng thuê) và sử dụng điểm cuối đăng nhập nhiều đối tượng thuê, chẳng hạn như `/common` hoặc `/organizations`.\n\n**Tài liệu tham khảo:**\n[Convert single-tenant app to multitenant on Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity-platform/howto-convert-app-to-be-multi-tenant)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783709179904-hvd4270r.png",
    "sourceTitle": "Examcademy AZ-305 Question 165",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/166-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-166",
    "questionNumber": 166,
    "text": "Your company has the divisions shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783707483644-8eyrvf8c.png)  \n  \nYou plan to deploy a custom application to every subscription. The application will include:  \n  \n- A resource group  \n- An Azure web app  \n- Custom role assignments  \n- An Azure Cosmos DB account  \n  \nYou need to use Azure Blueprints to deploy the application to each subscription.  \n  \nWhat is the minimum number of objects required to deploy the application?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "management_groups",
        "text": "Management groups:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      },
      {
        "id": "blueprint_definitions",
        "text": "Blueprint definitions:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      },
      {
        "id": "blueprint_assignments",
        "text": "Blueprint assignments:",
        "correctAnswer": "D",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "4"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "4"
      }
    ],
    "correctAnswers": [
      "management_groups=B",
      "blueprint_definitions=B",
      "blueprint_assignments=D"
    ],
    "explanation": "Các nhóm quản lý nằm trong phạm vi một đối tượng thuê Azure AD, do đó, hai đối tượng thuê cần có hai nhóm quản lý. Định nghĩa kế hoạch chi tiết nhóm quản lý có sẵn cho các đăng ký bên dưới nhóm quản lý đó, yêu cầu một định nghĩa trong mỗi đối tượng thuê. Bài tập kế hoạch chi tiết được tạo trên các đăng ký, yêu cầu một bài tập cho mỗi trong số bốn đăng ký.\n\n**Tài liệu tham khảo:**\n[Overview of Azure Blueprints](https://learn.microsoft.com/en-us/azure/governance/blueprints/overview) · [Azure management groups overview](https://learn.microsoft.com/en-us/azure/governance/management-groups/overview)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783707483644-8eyrvf8c.png",
    "sourceTitle": "Examcademy AZ-305 Question 166",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/167-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-167",
    "questionNumber": 167,
    "text": "You must design a highly available Azure SQL database that satisfies these requirements:  \n  \n- Failover between database replicas must occur with no data loss.  \n- The database must stay available during an availability-zone outage.  \n- Costs must be minimized.  \n  \nWhich deployment option should you choose?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure SQL Database Hyperscale"
      },
      {
        "key": "B",
        "text": "Azure SQL Database Premium"
      },
      {
        "key": "C",
        "text": "Azure SQL Database Basic"
      },
      {
        "key": "D",
        "text": "Azure SQL Database Serverless"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Azure SQL Database Premium hỗ trợ dự phòng vùng bằng cách đặt các bản sao có tính sẵn sàng cao hiện có trong availability zones riêng biệt. Các giao dịch chỉ được thực hiện sau khi đã đồng bộ hóa đủ số lượng bản sao, do đó, một bản sao được đồng bộ hóa sẽ có sẵn để chuyển đổi dự phòng mà không làm mất dữ liệu đã cam kết. no trả phí bổ sung để cho phép dự phòng vùng vì nó sử dụng các bản sao hiện có; Basic không hỗ trợ dự phòng vùng và Hyperscale không cần thiết cho những yêu cầu này.\n\n**Tài liệu tham khảo:**\n[Reliability in Azure SQL Database](https://learn.microsoft.com/en-us/azure/reliability/reliability-sql-database)",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 167",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/168-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-168",
    "questionNumber": 168,
    "text": "You have data files stored in Azure Blob Storage.  \n  \nYou plan to transform the files and move them to Azure Data Lake Storage.  \n  \nYou need to use mapping data flow to transform the data.  \n  \nWhich service should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Databricks"
      },
      {
        "key": "B",
        "text": "Azure Storage Sync"
      },
      {
        "key": "C",
        "text": "Azure Data Factory"
      },
      {
        "key": "D",
        "text": "Azure Data Box Gateway"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Azure Data Factory cung cấp các luồng dữ liệu ánh xạ để chuyển đổi dữ liệu không có mã được thiết kế trực quan. Các đường dẫn của nó có thể sử dụng Blob Storage làm nguồn và Azure Data Lake Storage làm đích.\n\n**Tài liệu tham khảo:**\n[Mapping data flows in Azure Data Factory](https://learn.microsoft.com/en-us/azure/data-factory/concepts-data-flow-overview)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 168",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/169-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-169",
    "questionNumber": 169,
    "text": "You have the resources shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783708071335-15np9yqc.png)  \n  \nYou create a new Azure resource group named RG2.  \n  \nYou need to move the virtual machines to RG2. What should you use for each virtual machine?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "vm1",
        "text": "VM1",
        "correctAnswer": "D",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D",
          "E"
        ]
      },
      {
        "id": "vm2",
        "text": "VM2",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D",
          "E"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Azure Arc"
      },
      {
        "key": "B",
        "text": "Azure Lighthouse"
      },
      {
        "key": "C",
        "text": "Azure Migrate"
      },
      {
        "key": "D",
        "text": "Azure Resource Mover"
      },
      {
        "key": "E",
        "text": "The Data Migration Assistant (DMA)"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Azure Arc"
      },
      {
        "key": "B",
        "text": "Azure Lighthouse"
      },
      {
        "key": "C",
        "text": "Azure Migrate"
      },
      {
        "key": "D",
        "text": "Azure Resource Mover"
      },
      {
        "key": "E",
        "text": "The Data Migration Assistant (DMA)"
      }
    ],
    "correctAnswers": [
      "vm1=D",
      "vm2=C"
    ],
    "explanation": "Hoạt động di chuyển tài nguyên Azure sẽ di chuyển máy ảo Azure hiện có giữa các nhóm tài nguyên; Azure Resource Mover là dịch vụ di dời được liệt kê có thể áp dụng cho VM1. Azure Migrate được thiết kế để khám phá, đánh giá và di chuyển các máy tại chỗ sang Azure, cho phép tạo VM2 trong RG2. Azure Arc quản lý các máy chủ tại chỗ dưới dạng tài nguyên được kết nối với Azure nhưng không di chuyển khối lượng công việc VM sang Azure.\n\n**Tài liệu tham khảo:**\n[Move Azure resources to a new resource group or subscription](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/move-resource-group-and-subscription) · [Migrate on-premises machines to Azure with Azure Migrate](https://learn.microsoft.com/en-us/azure/site-recovery/migrate-tutorial-on-premises-azure)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783708071335-15np9yqc.png",
    "sourceTitle": "Examcademy AZ-305 Question 169",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/170-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-170",
    "questionNumber": 170,
    "text": "Your company has the divisions shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783709015917-3isgry20.png)  \n  \nSub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com can authenticate to App1.  \n  \nYou need to recommend a solution that enables users in the fabrikam.com tenant to authenticate to App1.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Configure the Azure AD provisioning service."
      },
      {
        "key": "B",
        "text": "Enable Azure AD pass-through authentication and update the sign-in endpoint."
      },
      {
        "key": "C",
        "text": "Configure Supported account types in the application registration and update the sign-in endpoint."
      },
      {
        "key": "D",
        "text": "Configure Azure AD join."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Ứng dụng Microsoft Entra ID dành cho một đối tượng thuê chỉ chấp nhận danh tính từ đối tượng thuê chính của nó. Việc thay đổi các loại tài khoản được hỗ trợ của đăng ký ứng dụng thành đối tượng nhiều đối tượng thuê trong tổ chức sẽ cho phép người dùng từ những đối tượng thuê Microsoft Entra khác, bao gồm cả fabrikam.com, đăng nhập. Ứng dụng phải sử dụng thẩm quyền của nhiều đối tượng thuê, chẳng hạn như điểm cuối đăng nhập `/common` để Microsoft Entra ID có thể khám phá và xác thực đối tượng thuê nhà của người dùng. [Convert single-tenant app to multitenant on Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity-platform/howto-convert-app-to-be-multi-tenant)\n\n**Tài liệu tham khảo:**\n[Convert single-tenant app to multitenant on Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity-platform/howto-convert-app-to-be-multi-tenant)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783709015917-3isgry20.png",
    "sourceTitle": "Examcademy AZ-305 Question 170",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/171-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-171",
    "questionNumber": 171,
    "text": "You must design a highly available Azure SQL database that satisfies these requirements:  \n  \n- Failover between database replicas must take place with no data loss.  \n- The database must stay available if an availability zone has an outage.  \n- Costs must be minimized.  \n  \nWhich deployment option should you choose?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure SQL Database Standard"
      },
      {
        "key": "B",
        "text": "Azure SQL Managed Instance Business Critical"
      },
      {
        "key": "C",
        "text": "Azure SQL Database Serverless"
      },
      {
        "key": "D",
        "text": "Azure SQL Database Premium"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Azure SQL Database Premium hỗ trợ dự phòng vùng, phân phối bản sao cơ sở dữ liệu trên availability zones. Các bản sao có tính sẵn sàng cao của nó được đồng bộ hóa, cho phép chuyển đổi dự phòng mà không làm mất dữ liệu đã cam kết. Tiêu chuẩn không hỗ trợ dự phòng vùng, trong khi phiên bản được quản lý quan trọng trong doanh nghiệp là mô hình triển khai đắt tiền hơn tùy chọn cơ sở dữ liệu đơn Premium cho các yêu cầu này. [Reliability in Azure SQL Database](https://learn.microsoft.com/en-us/azure/reliability/reliability-sql-database)\n\n**Tài liệu tham khảo:**\n[Reliability in Azure SQL Database](https://learn.microsoft.com/en-us/azure/reliability/reliability-sql-database)",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 171",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/172-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-172",
    "questionNumber": 172,
    "text": "You have an Azure subscription containing the resources shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783708890226-vo5ctawj.png)  \n  \nYou create peering between VNet1 and VNet2, and between VNet1 and VNet3.  \n  \nThe virtual machines host an HTTPS-based client/server application and are reachable only through each virtual machine's private IP address.  \n  \nYou need to implement a load-balancing solution for VM2 and VM3. The solution must ensure that if VM2 fails, requests are automatically routed to VM3, and if VM3 fails, requests are automatically routed to VM2.  \n  \nWhat should you include in the solution?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Firewall Premium"
      },
      {
        "key": "B",
        "text": "Azure Application Gateway v2"
      },
      {
        "key": "C",
        "text": "a cross-region load balancer"
      },
      {
        "key": "D",
        "text": "Azure Front Door Premium"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Azure Application Gateway v2 cung cấp định tuyến yêu cầu HTTP/HTTPS và lựa chọn phụ trợ dựa trên sức khỏe. Nhóm phụ trợ của nó có thể chứa các địa chỉ IP riêng và IP giao diện người dùng riêng có thể phục vụ máy khách trong VNet1. VNet peering cho phép cổng tiếp cận VM2 và VM3, do đó, các phiên bản phụ trợ không lành mạnh sẽ bị xóa khỏi định tuyến yêu cầu.\n\n**Tài liệu tham khảo:**\n[How an application gateway works](https://learn.microsoft.com/en-us/azure/application-gateway/how-application-gateway-works) · [Azure Application Gateway frontend IP address configuration](https://learn.microsoft.com/en-us/azure/application-gateway/configuration-frontend-ip)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783708890226-vo5ctawj.png",
    "sourceTitle": "Examcademy AZ-305 Question 172",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/173-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-173",
    "questionNumber": 173,
    "text": "You have an Azure subscription that includes the resources shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783709613159-0zt2qmpl.png)  \n  \nYou need to recommend a load-balancing solution that distributes incoming traffic for VMSS1 across NVA1 and NVA2. The solution must minimize administrative effort.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Gateway Load Balancer"
      },
      {
        "key": "B",
        "text": "Azure Front Door"
      },
      {
        "key": "C",
        "text": "Azure Application Gateway"
      },
      {
        "key": "D",
        "text": "Azure Traffic Manager"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Gateway Load Balancer chèn các thiết bị ảo mạng vào đường dẫn dữ liệu một cách minh bạch và phân phối lưu lượng trên các phiên bản NVA trong vùng phụ trợ của nó. Nó có thể được liên kết với một giao diện Cân bằng tải tiêu chuẩn được hỗ trợ, cung cấp các luồng lưu lượng truy cập đối xứng mà không yêu cầu các tuyến đường do người dùng xác định thủ công hoặc cấu hình định tuyến bổ sung khác. [Gateway Load Balancer — Microsoft Learn](https://learn.microsoft.com/en-us/azure/load-balancer/gateway-overview)\n\n**Tài liệu tham khảo:**\n[Gateway Load Balancer — Microsoft Learn](https://learn.microsoft.com/en-us/azure/load-balancer/gateway-overview)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783709613159-0zt2qmpl.png",
    "sourceTitle": "Examcademy AZ-305 Question 173",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/174-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-174",
    "questionNumber": 174,
    "text": "You need to recommend a solution for producing a monthly report of all new Azure Resource Manager (ARM) resource deployments in your Azure subscription.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Arc"
      },
      {
        "key": "B",
        "text": "Azure Monitor metrics"
      },
      {
        "key": "C",
        "text": "Azure Advisor"
      },
      {
        "key": "D",
        "text": "Azure Log Analytics"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Nhật ký hoạt động Azure Bản ghi sự kiện quản trị Trình quản lý tài nguyên tạo, cập nhật, xóa và thực hiện các thao tác hành động. Việc xuất các sự kiện này sang không gian làm việc Log Analytics giúp chúng có thể truy vấn được trong bảng `AzureActivity`, cho phép báo cáo hàng tháng về việc triển khai và lưu giữ tài nguyên ARM mới ngoài khoảng thời gian Nhật ký hoạt động mặc định.\n\n**Tài liệu tham khảo:**\n[Azure Monitor activity log](https://learn.microsoft.com/en-us/azure/azure-monitor/platform/activity-log) · [Azure Activity Log event schema](https://learn.microsoft.com/en-us/azure/azure-monitor/platform/activity-log-schema)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 174",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/175-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-175",
    "questionNumber": 175,
    "text": "You are building an app that will use Azure Functions to read activity logs for an Azure subscription.  \n  \nYou need to recommend an authentication solution for Azure Functions. The solution must minimize administrative effort.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "an enterprise application in Azure AD"
      },
      {
        "key": "B",
        "text": "system-assigned managed identities"
      },
      {
        "key": "C",
        "text": "shared access signatures (SAS)"
      },
      {
        "key": "D",
        "text": "application registration in Azure AD"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "system-assigned managed identity được Azure quản lý và gắn liền với vòng đời của Ứng dụng Chức năng Azure. Nó có thể được cấp các quyền Azure RBAC cần thiết để đọc nhật ký hoạt động đăng ký mà không cần tạo, lưu trữ, xoay hoặc quản lý bí mật hoặc chứng chỉ ứng dụng.\n\n**Tài liệu tham khảo:**\n[Use managed identities for App Service and Azure Functions](https://learn.microsoft.com/en-us/azure/app-service/overview-managed-identity) · [Managed identities for Azure resources](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 175",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/176-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-176",
    "questionNumber": 176,
    "text": "Contoso, Ltd. has an Azure Active Directory (Azure AD) tenant integrated with Microsoft 365 and an Azure subscription.  \n  \nContoso has an on-premises identity infrastructure that includes servers running Active Directory Domain Services (AD DS) and Azure AD Connect.  \n  \nContoso has a partnership with Fabrikam, Inc. Fabrikam has an Active Directory forest and a Microsoft 365 tenant. Fabrikam has the same on-premises identity infrastructure components as Contoso.  \n  \nA team of 10 Fabrikam developers will work on an Azure solution hosted in Contoso's Azure subscription. The developers must be added to the Contributor role for a resource group in the Contoso subscription.  \n  \nYou need to recommend a solution that enables Contoso to assign the role to the 10 Fabrikam developers. The solution must ensure that the Fabrikam developers use their existing credentials to access resources.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "In the Azure AD tenant of Contoso. create cloud-only user accounts for the Fabrikam developers."
      },
      {
        "key": "B",
        "text": "Configure a forest trust between the on-premises Active Directory forests of Contoso and Fabrikam."
      },
      {
        "key": "C",
        "text": "Configure an organization relationship between the Microsoft 365 tenants of Fabrikam and Contoso."
      },
      {
        "key": "D",
        "text": "In the Azure AD tenant of Contoso, create guest accounts for the Fabnkam developers."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Sự cộng tác của Microsoft Entra B2B cho phép Contoso tạo tài khoản khách cho người dùng Fabrikam trong đối tượng thuê Contoso. Người dùng khách tiếp tục xác thực bằng thông tin đăng nhập Fabrikam hiện có của họ và Azure RBAC chỉ có thể chỉ định cho họ các quyền của Người đóng góp cần thiết ở phạm vi nhóm tài nguyên.\n\n**Tài liệu tham khảo:**\n[Assign Azure roles to external users using the Azure portal](https://learn.microsoft.com/en-us/azure/role-based-access-control/role-assignments-external-users) · [Quickstart: Add a guest user and send an invitation](https://learn.microsoft.com/en-us/entra/external-id/b2b-quickstart-add-guest-users-portal)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 176",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/177-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-177",
    "questionNumber": 177,
    "text": "You have a .NET web service called Service1 that performs the following tasks:  \n  \n- Reads and writes temporary files on the local file system.  \n- Writes to the Application event log.  \n  \nYou need to recommend an Azure hosting solution for Service1. The solution must meet these requirements:  \n  \n- Minimize maintenance overhead.  \n- Minimize costs.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "an Azure App Service web app"
      },
      {
        "key": "B",
        "text": "an Azure virtual machine scale set"
      },
      {
        "key": "C",
        "text": "an App Service Environment (ASE)"
      },
      {
        "key": "D",
        "text": "an Azure Functions app"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Các phiên bản bộ quy mô Windows Azure virtual machine cung cấp các ổ đĩa tạm thời cục bộ và có thể sử dụng nhật ký sự kiện Ứng dụng Windows. Azure App Service chặn mã ứng dụng truy cập vào nhật ký sự kiện phổ biến của Windows, bao gồm nhật ký Ứng dụng; giới hạn này cũng loại trừ Môi trường dịch vụ ứng dụng và ứng dụng Azure Functions. Bộ quy mô VM có thể tự động hóa việc quản lý và thay đổi quy mô phiên bản đồng thời đáp ứng các khả năng cần thiết của hệ điều hành.\n\n**Tài liệu tham khảo:**\n[Operating System Functionality in Azure App Service](https://learn.microsoft.com/en-ca/azure/app-service/operating-system-functionality) · [FAQ for Azure Virtual Machine Scale Sets](https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-faq)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 177",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/178-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-178",
    "questionNumber": 178,
    "text": "You are designing a storage solution to ingest, store, and analyze petabytes (PBs) of structured, semi-structured, and unstructured text data. The analyzed data will be offloaded to Azure Data Lake Storage Gen2 for long-term retention.  \n  \nYou need to recommend a storage and analytics solution that:  \n  \n- Stores the processed data  \n- Provides interactive analytics  \n- Supports manual scaling, built-in autoscaling, and custom autoscaling  \n  \nWhat should the recommendation include?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "storage_analytics",
        "text": "For storage and interactive analytics:",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "query_language",
        "text": "Query language:",
        "correctAnswer": "D",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Azure Data Explorer"
      },
      {
        "key": "B",
        "text": "Azure Data Lake Analytics"
      },
      {
        "key": "C",
        "text": "Log Analytics"
      },
      {
        "key": "D",
        "text": "KQL"
      },
      {
        "key": "E",
        "text": "Transact-SQL"
      },
      {
        "key": "F",
        "text": "U-SQL"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Azure Data Explorer"
      },
      {
        "key": "B",
        "text": "Azure Data Lake Analytics"
      },
      {
        "key": "C",
        "text": "Log Analytics"
      },
      {
        "key": "D",
        "text": "KQL"
      },
      {
        "key": "E",
        "text": "Transact-SQL"
      },
      {
        "key": "F",
        "text": "U-SQL"
      }
    ],
    "correctAnswers": [
      "storage_analytics=A",
      "query_language=D"
    ],
    "explanation": "Azure Data Explorer được thiết kế để phân tích nhanh chóng, mang tính tương tác với khối lượng lớn dữ liệu có cấu trúc, bán cấu trúc và không cấu trúc. Nó hỗ trợ Chia tỷ lệ thủ công, Tự động chia tỷ lệ được tối ưu hóa và Tự động chia tỷ lệ tùy chỉnh cho các cụm và ngôn ngữ truy vấn của nó là Ngôn ngữ truy vấn Kusto (KQL).\n\n**Tài liệu tham khảo:**\n[Manage cluster horizontal scaling in Azure Data Explorer](https://learn.microsoft.com/en-us/azure/data-explorer/manage-cluster-horizontal-scaling) · [Write Kusto Query Language queries in the Azure Data Explorer web UI](https://learn.microsoft.com/en-us/azure/data-explorer/web-ui-kql)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 178",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/179-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-179",
    "questionNumber": 179,
    "text": "You must recommend a solution that fulfills the application development requirements.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "the Azure App Configuration service"
      },
      {
        "key": "B",
        "text": "an Azure Container Registry instance"
      },
      {
        "key": "C",
        "text": "deployment slots"
      },
      {
        "key": "D",
        "text": "Continuous Integration/Continuous Deployment (CI/CD) sources"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Các khe triển khai Azure App Service cung cấp một môi trường dàn dựng trực tiếp riêng biệt, nơi các thay đổi ứng dụng có thể được xác thực trước khi được hoán đổi vào sản xuất. Hoán đổi vị trí sẽ làm ấm các phiên bản mục tiêu và hỗ trợ triển khai liền mạch mà không làm rơi yêu cầu hoặc ngừng triển khai. [Set up staging environments in Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots)\n\n**Tài liệu tham khảo:**\n[Set up staging environments in Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 179",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/180-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-180",
    "questionNumber": 180,
    "text": "You are developing a sales application that will include several Azure cloud services and manage different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.  \n  \nYou need to recommend a solution that enables the cloud services to communicate transaction information asynchronously by using XML messages.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Service Fabric"
      },
      {
        "key": "B",
        "text": "Azure Data Lake"
      },
      {
        "key": "C",
        "text": "Azure Service Bus"
      },
      {
        "key": "D",
        "text": "Azure Traffic Manager"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Azure Service Bus là một nhà môi giới tin nhắn doanh nghiệp được quản lý, tách riêng các dịch vụ thông qua hàng đợi và các chủ đề đăng ký xuất bản, cho phép xử lý không đồng bộ đáng tin cậy. Các thông báo Bus dịch vụ có thể mang tải trọng có cấu trúc bằng XML, khiến nó phù hợp để trao đổi thông tin giao dịch giữa các dịch vụ hoạt động độc lập.\n\n**Tài liệu tham khảo:**\n[What is Azure Service Bus?](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview) · [Asynchronous messaging patterns and high availability](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-async-messaging)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 180",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/181-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-181",
    "questionNumber": 181,
    "text": "You need to recommend a solution that ensures App1 can access the third-party credentials and access strings while meeting the security requirements. What should the recommendation include?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "authenticate",
        "text": "Authenticate App1 by using:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "authorize",
        "text": "Authorize App1 to retrieve Key Vault secrets by using:",
        "correctAnswer": "G",
        "choiceKeys": [
          "D",
          "E",
          "F",
          "G"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "A certificate"
      },
      {
        "key": "B",
        "text": "A system-assigned managed identity"
      },
      {
        "key": "C",
        "text": "A user-assigned managed identity"
      },
      {
        "key": "D",
        "text": "An access policy"
      },
      {
        "key": "E",
        "text": "A connected service"
      },
      {
        "key": "F",
        "text": "A private link"
      },
      {
        "key": "G",
        "text": "A role assignment"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "A certificate"
      },
      {
        "key": "B",
        "text": "A system-assigned managed identity"
      },
      {
        "key": "C",
        "text": "A user-assigned managed identity"
      },
      {
        "key": "D",
        "text": "An access policy"
      },
      {
        "key": "E",
        "text": "A connected service"
      },
      {
        "key": "F",
        "text": "A private link"
      },
      {
        "key": "G",
        "text": "A role assignment"
      }
    ],
    "correctAnswers": [
      "authenticate=B",
      "authorize=G"
    ],
    "explanation": "system-assigned managed identity được liên kết riêng với tài nguyên Dịch vụ ứng dụng, do đó, nó tránh chia sẻ thông tin xác thực ứng dụng với dịch vụ khác. Gán cho managed identity vai trò mặt phẳng dữ liệu Azure Key Vault, chẳng hạn như Người dùng bí mật Key Vault, cho phép nó truy xuất các bí mật thông qua Azure RBAC.\n\n**Tài liệu tham khảo:**\n[Use managed identities for App Service and Azure Functions](https://learn.microsoft.com/en-us/azure/app-service/overview-managed-identity) · [Provide access to Key Vault keys, certificates, and secrets with Azure RBAC](https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 181",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/182-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-182",
    "questionNumber": 182,
    "text": "Your company has the divisions shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783707656398-lxde47n9.jpg)  \n  \nSub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com can authenticate to App1.  \n  \nYou need to recommend a solution that enables users in the fabrikam.com tenant to authenticate to App1.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Configure the Azure AD provisioning service."
      },
      {
        "key": "B",
        "text": "Enable Azure AD pass-through authentication and update the sign-in endpoint."
      },
      {
        "key": "C",
        "text": "Use Azure AD entitlement management to govern external users."
      },
      {
        "key": "D",
        "text": "Configure Azure AD join."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Người dùng khách trong đối tượng thuê chính có thể truy cập ứng dụng Microsoft Entra của một đối tượng thuê. Quản lý quyền của Microsoft Entra quản lý quyền truy cập của người dùng bên ngoài thông qua các gói truy cập và có thể mời người dùng từ một tổ chức khác làm khách B2B, cho phép người dùng Fabrikam xác thực ứng dụng trong đối tượng thuê Contoso.\n\n**Tài liệu tham khảo:**\n[Single and multitenant apps in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity-platform/single-and-multi-tenant-apps) · [What is entitlement management?](https://learn.microsoft.com/en-us/entra/id-governance/entitlement-management-overview)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783707656398-lxde47n9.jpg",
    "sourceTitle": "Examcademy AZ-305 Question 182",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/183-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-183",
    "questionNumber": 183,
    "text": "You are designing a cost-optimized Azure Batch solution to run two types of jobs on Linux nodes. The first job type consists of short-running tasks for a development environment. The second job type consists of long-running Message Passing Interface (MPI) applications for a production environment that requires timely job completion.  \n  \nRecommend the pool type and node type for each job type. The solution must minimize compute charges and use Azure Hybrid Benefit whenever possible.  \n  \nWhat should you recommend?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "first_job",
        "text": "First job:",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "second_job",
        "text": "Second job:",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Batch service and dedicated virtual machines"
      },
      {
        "key": "B",
        "text": "User subscription and dedicated virtual machines"
      },
      {
        "key": "C",
        "text": "User subscription and low-priority virtual machines"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Batch service and dedicated virtual machines"
      },
      {
        "key": "B",
        "text": "User subscription and dedicated virtual machines"
      },
      {
        "key": "C",
        "text": "User subscription and low-priority virtual machines"
      }
    ],
    "correctAnswers": [
      "first_job=C",
      "second_job=A"
    ],
    "explanation": "Các nút có mức độ ưu tiên thấp giảm thiểu chi phí điện toán cho các tác vụ phát triển ngắn, không bị gián đoạn và việc ghép nối chúng với chế độ phân bổ nhóm đăng ký người dùng cho phép áp dụng Lợi ích kết hợp Azure. Công việc MPI sản xuất cần tính toán được đảm bảo, không bị gián đoạn để có thể hoàn thành kịp thời, do đó, nó phải sử dụng các nút chuyên dụng thay vì các nút có mức độ ưu tiên thấp được ưu tiên trước; Hướng dẫn của Microsoft cung cấp các nút chuyên dụng này thông qua chế độ phân bổ dịch vụ hàng loạt cho việc ghép nối này.\n\n**Tài liệu tham khảo:**\n[Nodes and pools in Azure Batch](https://learn.microsoft.com/en-us/azure/batch/nodes-and-pools)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 183",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/184-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-184",
    "questionNumber": 184,
    "text": "Your company has the divisions shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783709177179-qcnmj7h7.png)  \n  \nSub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com can authenticate to App1.  \n  \nYou need to recommend a solution that enables users in the fabrikam.com tenant to authenticate to App1.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Use Azure AD entitlement management to govern external users."
      },
      {
        "key": "B",
        "text": "Enable Azure AD pass-through authentication and update the sign-in endpoint."
      },
      {
        "key": "C",
        "text": "Configure a Conditional Access policy."
      },
      {
        "key": "D",
        "text": "Configure assignments for the fabrikam.com users by using Azure AD Privileged Identity Management (PIM)."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Quản lý quyền lợi Azure AD sử dụng cộng tác Microsoft Entra B2B để cho phép người dùng bên ngoài xác thực thông qua thư mục chính của họ trong khi tạo đại diện khách trong đối tượng thuê tài nguyên. Danh tính khách đó có thể được chỉ định quyền truy cập vào App1 trong đối tượng thuê contoso.com, cho phép người dùng fabrikam.com đăng nhập vào ứng dụng một đối tượng thuê.\n\n**Tài liệu tham khảo:**\n[Govern access for external users in entitlement management](https://learn.microsoft.com/en-us/entra/id-governance/entitlement-management-external-users) · [Add and manage B2B collaboration users in the Microsoft Entra admin center](https://learn.microsoft.com/en-us/entra/external-id/add-users-administrator)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783709177179-qcnmj7h7.png",
    "sourceTitle": "Examcademy AZ-305 Question 184",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/185-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-185",
    "questionNumber": 185,
    "text": "You are building a sales application that will include several Azure cloud services and manage different transaction components. Different cloud services will process customer orders, billing, payment, inventory, and shipping.  \n  \nYou need to recommend a solution that allows the cloud services to asynchronously exchange transaction information by using XML messages.  \n  \nWhat should be included in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Service Fabric"
      },
      {
        "key": "B",
        "text": "Azure Traffic Manager"
      },
      {
        "key": "C",
        "text": "Azure Queue Storage"
      },
      {
        "key": "D",
        "text": "Azure Notification Hubs"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Azure Queue Storage cung cấp hàng đợi bền bỉ để liên lạc không đồng bộ giữa các thành phần được liên kết lỏng lẻo của ứng dụng phân tán. Thông báo hàng đợi phải tương thích với các yêu cầu XML UTF-8, làm cho nó phù hợp để trao đổi thông tin giao dịch XML.\n\n**Tài liệu tham khảo:**\n[What is Azure Queue Storage?](https://learn.microsoft.com/en-us/azure/storage/queues/storage-queues-introduction) · [Quickstart: Azure Queue Storage client library for .NET](https://learn.microsoft.com/en-us/azure/storage/queues/storage-quickstart-queues-dotnet)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 185",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/186-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-186",
    "questionNumber": 186,
    "text": "You have 10 on-premises servers that run Windows Server.  \n  \nYou need to back up the servers daily to a Recovery Services vault. The solution must meet these requirements:  \n  \n- Back up every file and folder on the servers.  \n- Keep three backup copies in Azure.  \n- Minimize cost.  \n  \nWhat should you configure?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "servers",
        "text": "On the servers:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "storage",
        "text": "For the storage:",
        "correctAnswer": "E",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "The Azure Site Recovery Mobility service"
      },
      {
        "key": "B",
        "text": "The Microsoft Azure Recovery Services (MARS) agent"
      },
      {
        "key": "C",
        "text": "Volume Shadow Copy Service (VSS)"
      },
      {
        "key": "D",
        "text": "Geo-redundant storage (GRS)"
      },
      {
        "key": "E",
        "text": "Locally-redundant storage (LRS)"
      },
      {
        "key": "F",
        "text": "Zone-redundant storage (ZRS)"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "The Azure Site Recovery Mobility service"
      },
      {
        "key": "B",
        "text": "The Microsoft Azure Recovery Services (MARS) agent"
      },
      {
        "key": "C",
        "text": "Volume Shadow Copy Service (VSS)"
      },
      {
        "key": "D",
        "text": "Geo-redundant storage (GRS)"
      },
      {
        "key": "E",
        "text": "Locally-redundant storage (LRS)"
      },
      {
        "key": "F",
        "text": "Zone-redundant storage (ZRS)"
      }
    ],
    "correctAnswers": [
      "servers=B",
      "storage=E"
    ],
    "explanation": "Tác nhân MARS sao lưu trực tiếp các tệp và thư mục từ Windows Server tại chỗ vào Azure Recovery Services vault. LRS lưu trữ ba bản sao đồng bộ trong một trung tâm dữ liệu Azure và rẻ hơn ZRS hoặc GRS, đáp ứng các yêu cầu về ba bản sao và giảm thiểu chi phí.\n\n**Tài liệu tham khảo:**\n[Back up files and folders by using the Azure Backup agent](https://learn.microsoft.com/en-us/azure/backup/backup-windows-with-mars-agent) · [Azure Storage redundancy](https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy)",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 186",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/187-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-187",
    "questionNumber": 187,
    "text": "You have 100 servers running Windows Server 2012 R2 that host Microsoft SQL Server 2014 instances. The instances contain databases with these characteristics:  \n  \n- Stored procedures are implemented by using CLR.  \n- The largest database is currently 3 TB, and no database will ever be larger than 4 TB.  \n  \nYou plan to migrate all data from SQL Server to Azure.  \n  \nYou need to recommend a service to host the databases. The solution must meet these requirements:  \n  \n- Whenever possible, minimize management overhead for the migrated databases.  \n- Ensure users can authenticate by using Azure Active Directory (Azure AD) credentials.  \n- Minimize the number of database changes needed to facilitate the migration.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure SQL Database elastic pools"
      },
      {
        "key": "B",
        "text": "Azure SQL Managed Instance"
      },
      {
        "key": "C",
        "text": "Azure SQL Database single databases"
      },
      {
        "key": "D",
        "text": "SQL Server 2016 on Azure virtual machines"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Azure SQL Managed Instance là dịch vụ PaaS được quản lý hoàn toàn được thiết kế để di chuyển SQL Server với những thay đổi tối thiểu về ứng dụng hoặc cơ sở dữ liệu. Nó hỗ trợ chức năng CLR, xác thực Microsoft Entra ID (Azure AD) và cấu hình lưu trữ đủ cho cơ sở dữ liệu 4 TB, đồng thời loại bỏ hệ điều hành và quản lý phiên bản SQL Server cần thiết cho SQL Server trên Azure virtual machines.\n\n**Tài liệu tham khảo:**\n[SQL Server to Azure SQL Managed Instance: Migration Overview](https://learn.microsoft.com/en-us/data-migration/sql-server/managed-instance/overview) · [T-SQL differences between SQL Server and Azure SQL Managed Instance](https://learn.microsoft.com/en-us/azure/azure-sql/managed-instance/transact-sql-tsql-differences-sql-server?view=azuresql)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 187",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/188-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-188",
    "questionNumber": 188,
    "text": "HOTSPOT –  \n  \nYou plan to migrate on-premises Microsoft SQL Server databases to Azure.  \n  \nYou need to recommend a deployment and resiliency solution that meets these requirements:  \n  \n- Supports user-initiated backups  \n- Supports multiple automatically replicated instances across Azure regions  \n- Minimizes the administrative effort required to implement and maintain business continuity  \n  \nWhat should you recommend?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "deployment_solution",
        "text": "Deployment solution:",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "resiliency_solution",
        "text": "Resiliency solution:",
        "correctAnswer": "D",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Azure SQL Managed Instance"
      },
      {
        "key": "B",
        "text": "SQL Server on Azure Virtual Machines"
      },
      {
        "key": "C",
        "text": "An Azure SQL Database single database"
      },
      {
        "key": "D",
        "text": "Auto-failover group"
      },
      {
        "key": "E",
        "text": "Active geo-replication"
      },
      {
        "key": "F",
        "text": "Zone-redundant deployment"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Azure SQL Managed Instance"
      },
      {
        "key": "B",
        "text": "SQL Server on Azure Virtual Machines"
      },
      {
        "key": "C",
        "text": "An Azure SQL Database single database"
      },
      {
        "key": "D",
        "text": "Auto-failover group"
      },
      {
        "key": "E",
        "text": "Active geo-replication"
      },
      {
        "key": "F",
        "text": "Zone-redundant deployment"
      }
    ],
    "correctAnswers": [
      "deployment_solution=A",
      "resiliency_solution=D"
    ],
    "explanation": "Azure SQL Managed Instance hỗ trợ sao lưu chỉ sao chép do người dùng khởi tạo cho cơ sở dữ liệu người dùng. Các nhóm chuyển đổi dự phòng của nó tự động sao chép tất cả cơ sở dữ liệu người dùng sang một phiên bản được quản lý thứ cấp ở một khu vực Azure khác và hỗ trợ chuyển đổi dự phòng được quản lý, mang lại sự liên tục trong kinh doanh giữa các khu vực với ít quản trị hơn so với việc duy trì các máy ảo SQL Server và cơ sở hạ tầng sao chép của chúng. Dự phòng vùng chỉ bảo vệ trong một vùng.\n\n**Tài liệu tham khảo:**\n[Reliability in Azure SQL Managed Instance](https://learn.microsoft.com/en-us/azure/reliability/reliability-sql-managed-instance) · [Failover groups overview and best practices - Azure SQL Managed Instance](https://learn.microsoft.com/en-us/azure/azure-sql/managed-instance/failover-group-sql-mi?view=azuresql)",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 188",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/189-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-189",
    "questionNumber": 189,
    "text": "You plan to deploy an Azure Database for MySQL flexible server named Server1 in the East US Azure region.  \n  \nYou need to implement a business-continuity solution for Server1. The solution must minimize downtime if a failover to a paired region occurs.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create a read replica."
      },
      {
        "key": "B",
        "text": "Store the database files in Azure premium file shares."
      },
      {
        "key": "C",
        "text": "Implement Geo-redundant backup."
      },
      {
        "key": "D",
        "text": "Configure native MySQL replication."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Bản sao đọc liên khu vực cung cấp bản sao được tạo trước của máy chủ. Bản sao này có thể được nâng cấp lên máy chủ đọc-ghi độc lập và nhận lưu lượng truy cập ứng dụng được chuyển hướng khi xảy ra lỗi khu vực. Điều này tránh được thời gian phục hồi thay đổi cần thiết để tạo và khôi phục máy chủ mới từ các bản sao lưu dự phòng địa lý. Các tài liệu của Microsoft đọc các bản sao dưới dạng tùy chọn khôi phục sau thảm họa và mô tả quá trình khôi phục bản sao lưu dự phòng theo vị trí địa lý khi triển khai một máy chủ mới có RTO thay đổi.\n\n**Tài liệu tham khảo:**\n[Overview of business continuity with Azure Database for MySQL - Flexible Server](https://learn.microsoft.com/en-us/azure/mysql/flexible-server/concepts-business-continuity) · [Backup and restore in Azure Database for MySQL](https://learn.microsoft.com/en-us/azure/mysql/flexible-server/concepts-backup-restore)",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 189",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/190-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-190",
    "questionNumber": 190,
    "text": "Your company operates two on-premises sites in New York and Los Angeles, plus Azure virtual networks in the East US and West US Azure regions. Each on-premises site has ExpressRoute Global Reach circuits to both regions.  \n  \nRecommend a solution that meets these requirements:  \n  \n- Outbound internet traffic from workloads in the virtual networks must be routed through the nearest available on-premises site.  \n- If an on-premises site fails, internet-bound traffic from the virtual-network workloads must automatically reroute through the other site.  \n  \nWhat should the recommendation include?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "routing",
        "text": "Routing from the virtual networks to the on-premises locations must be configured by using:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "failover",
        "text": "The automatic routing configuration following a failover must be handled by using:",
        "correctAnswer": "B",
        "choiceKeys": [
          "B",
          "D",
          "E"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Azure default routes"
      },
      {
        "key": "B",
        "text": "Border Gateway Protocol (BGP)"
      },
      {
        "key": "C",
        "text": "User-defined routes"
      },
      {
        "key": "D",
        "text": "Hot Standby Routing Protocol (HSRP)"
      },
      {
        "key": "E",
        "text": "Virtual Router Redundancy Protocol (VRRP)"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Azure default routes"
      },
      {
        "key": "B",
        "text": "Border Gateway Protocol (BGP)"
      },
      {
        "key": "C",
        "text": "User-defined routes"
      },
      {
        "key": "D",
        "text": "Hot Standby Routing Protocol (HSRP)"
      },
      {
        "key": "E",
        "text": "Virtual Router Redundancy Protocol (VRRP)"
      }
    ],
    "correctAnswers": [
      "routing=B",
      "failover=B"
    ],
    "explanation": "Việc buộc lưu lượng truy cập internet đi từ VNet thông qua tại chỗ qua ExpressRoute đạt được bằng cách yêu cầu các trang web tại chỗ quảng cáo một tuyến mặc định (0.0.0.0/0) vào Azure qua các phiên ngang hàng ExpressRoute BGP - Không thể thực hiện tạo đường hầm bắt buộc ExpressRoute với các tuyến do người dùng xác định, vì vậy BGP là cách định cấu hình định tuyến đến các vị trí tại chỗ. Vì BGP là giao thức định tuyến động, Azure tự động chọn đường dẫn được quảng cáo gần nhất và khi một trang web bị lỗi và ngừng quảng cáo tuyến đường của nó, BGP sẽ hội tụ lại và định tuyến lại lưu lượng truy cập qua trang web còn sót lại bằng thay đổi thủ công no. HSRP và VRRP là các giao thức dự phòng cổng bước nhảy đầu tiên được sử dụng bên trong mạng LAN tại chỗ, không dành cho việc chọn đường dẫn Azure/ExpressRoute, vì vậy, chúng không phù hợp với khoảng trống chuyển đổi dự phòng. Do đó, cả hai khoảng trống đều là BGP.\n\n**Tài liệu tham khảo:**\n[ExpressRoute with VPN failover reference architecture](https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/hybrid-networking/expressroute-vpn-failover)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 190",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/191-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-191",
    "questionNumber": 191,
    "text": "You have an Azure subscription that includes a storage account.  \n  \nAn application occasionally writes duplicate files to the storage account. You have a PowerShell script that detects and deletes duplicate files in the storage account. At present, the script is run manually only after the operations manager grants approval.  \n  \nYou need to recommend a serverless solution that performs these actions:  \n  \n- Runs the script every hour to determine whether duplicate files exist.  \n- Sends the operations manager an email notification requesting approval to delete the duplicate files.  \n- Processes an email reply from the operations manager indicating whether deletion is approved.  \n- Runs the script when deletion is approved.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Logic Apps and Azure Event Grid"
      },
      {
        "key": "B",
        "text": "Azure Logic Apps and Azure Functions"
      },
      {
        "key": "C",
        "text": "Azure Pipelines and Azure Service Fabric"
      },
      {
        "key": "D",
        "text": "Azure Functions and Azure Batch"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Ứng dụng Azure Logic có thể chạy quy trình làm việc định kỳ, gửi và nhận email thông qua trình kết nối cũng như điều phối phản hồi phê duyệt. Azure Functions cung cấp khả năng thực thi phi máy chủ cho tập lệnh PowerShell, cho phép quy trình công việc chỉ gọi tập lệnh đó sau khi nhận được phê duyệt.\n\n**Tài liệu tham khảo:**\n[Schedule and run recurring workflows with the Recurrence trigger in Azure Logic Apps](https://learn.microsoft.com/en-us/azure/connectors/connectors-native-recurrence) · [Create a function in Azure that runs on a schedule](https://learn.microsoft.com/en-us/azure/azure-functions/functions-create-scheduled-function)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 191",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/192-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-192",
    "questionNumber": 192,
    "text": "You are designing a microservices architecture to support a web application.  \n  \nThe solution must satisfy the following requirements:  \n  \n- Deploy the solution both on-premises and in Azure.  \n- Support low-latency and hyper-scale operations.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783708073129-oaflmmou.png)  \n  \n- Permit independent upgrades for every microservice.  \n- Define policies that perform automatic microservice repairs.  \n  \nYou need to recommend a technology. What should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Container Instance"
      },
      {
        "key": "B",
        "text": "Azure Logic App"
      },
      {
        "key": "C",
        "text": "Azure Service Fabric"
      },
      {
        "key": "D",
        "text": "Azure virtual machine scale set"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Azure Service Fabric là một nền tảng hệ thống phân tán dành cho các dịch vụ vi mô đáng tin cậy, có thể mở rộng, có thể chạy cả trong Azure và trong các cụm tại chỗ độc lập. Nó hỗ trợ các dịch vụ được phiên bản, triển khai, nâng cấp và mở rộng quy mô độc lập, đồng thời cung cấp khả năng theo dõi tình trạng cũng như phát hiện và khởi động lại các dịch vụ bị lỗi. Các dịch vụ có trạng thái của nó dành cho khối lượng công việc có thông lượng cao, độ trễ thấp ở quy mô lớn.\n\n**Tài liệu tham khảo:**\n[Overview of Azure Service Fabric](https://learn.microsoft.com/en-us/azure/service-fabric/service-fabric-overview) · [Introduction to microservices on Azure](https://learn.microsoft.com/en-us/azure/service-fabric/service-fabric-overview-microservices)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783708073129-oaflmmou.png",
    "sourceTitle": "Examcademy AZ-305 Question 192",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/193-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-193",
    "questionNumber": 193,
    "text": "You have an Azure subscription containing an Azure Kubernetes Service (AKS) instance named AKS1. AKS1 hosts microservice-based APIs configured to listen on nondefault HTTP ports.  \n  \nYou plan to deploy a Standard-tier Azure API Management instance named APIM1 to make the APIs available to external users.  \n  \nYou need to ensure that the AKS1 APIs can be accessed by APIM1. The solution must meet these requirements:  \n  \n- Implement mTLS authentication between APIM1 and AKS1.  \n- Minimize development effort.  \n- Minimize costs.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Implement an external load balancer on AKS1."
      },
      {
        "key": "B",
        "text": "Redeploy APIM1 to the virtual network that contains AKS1."
      },
      {
        "key": "C",
        "text": "Implement an ExternalName service on AKS1."
      },
      {
        "key": "D",
        "text": "Deploy an ingress controller to AKS1."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Bộ điều khiển xâm nhập cung cấp điểm vào Lớp 7 tập trung cho các API HTTP, định tuyến các yêu cầu đến dịch vụ Kubernetes trên các cổng được định cấu hình của chúng và có thể thực thi mTLS ở rìa cụm. Quản lý API Azure vốn hỗ trợ mTLS và hướng dẫn Quản lý AKS/API của Microsoft nêu rõ rằng Kubernetes có thể kích hoạt mẫu này bằng cách cài đặt bộ điều khiển xâm nhập. Điều này tập trung xác thực và định tuyến thay vì yêu cầu mọi vi dịch vụ triển khai chúng hoặc hiển thị các bộ cân bằng tải riêng biệt.\n\n**Tài liệu tham khảo:**\n[Use Azure API Management with microservices deployed in Azure Kubernetes Service](https://learn.microsoft.com/en-us/azure/api-management/api-management-kubernetes) · [Best practices for network resources in Azure Kubernetes Service](https://learn.microsoft.com/en-us/azure/aks/operator-best-practices-network)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 193",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/194-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-194",
    "questionNumber": 194,
    "text": "HOTSPOT -  \n  \nYour company has 20 web APIs developed in-house. It is developing 10 web apps that will use those APIs. Both the web apps and APIs are registered in the company’s Azure Active Directory (Azure AD) tenant, and the web APIs are published through Azure API Management.  \n  \nRecommend a solution that blocks unauthorized requests originating from the web apps before they reach the web APIs. The solution must:  \n  \n- Use Azure AD-generated claims.  \n- Minimize configuration and management effort.  \n  \nWhat should be included in the recommendation?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "grant_permissions",
        "text": "Grant permissions to allow the web apps to access the web APIs by using:",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "jwt_validation_policy",
        "text": "Configure a JSON Web Token (JWT) validation policy by using:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Azure AD"
      },
      {
        "key": "B",
        "text": "Azure API Management"
      },
      {
        "key": "C",
        "text": "The web APIs"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Azure AD"
      },
      {
        "key": "B",
        "text": "Azure API Management"
      },
      {
        "key": "C",
        "text": "The web APIs"
      }
    ],
    "correctAnswers": [
      "grant_permissions=A",
      "jwt_validation_policy=B"
    ],
    "explanation": "Đăng ký ứng dụng Azure AD sẽ cung cấp quyền API và cấp mã thông báo truy cập kèm theo xác nhận quyền sở hữu cho các ứng dụng khách được ủy quyền. Chính sách xác thực-jwt của Azure API Management xác thực các mã thông báo Azure AD đó tại cổng, do đó các yêu cầu trái phép sẽ bị từ chối trước khi chúng tiếp cận các API web phụ trợ. Điều này tập trung việc thực thi trên các API và giảm thiểu cấu hình trên mỗi API.\n\n**Tài liệu tham khảo:**\n[Azure API Management validate-jwt policy](https://learn.microsoft.com/en-us/azure/api-management/validate-jwt-policy) · [Configure an application to expose a web API](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-configure-app-expose-web-apis)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 194",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/195-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-195",
    "questionNumber": 195,
    "text": "You are designing an Azure Storage solution for sensitive data. The data will be accessed daily, and the dataset is under 10 GB.  \n  \nRecommend a storage solution that meets these requirements:  \n  \n- Retain all data written to storage for five years.  \n- After it is written, data must be read-only; modifications and deletion must be prevented.  \n- After five years, data may be deleted but must never be modified.  \n- Minimize data-access charges.  \n  \nWhat should you recommend?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "storage_account_type",
        "text": "Storage account type:",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "configuration",
        "text": "Configuration to prevent modifications and deletions:",
        "correctAnswer": "E",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "General purpose v2 with Archive access tier for blobs"
      },
      {
        "key": "B",
        "text": "General purpose v2 with Cool access tier for blobs"
      },
      {
        "key": "C",
        "text": "General purpose v2 with Hot access tier for blobs"
      },
      {
        "key": "D",
        "text": "Container access level"
      },
      {
        "key": "E",
        "text": "Container access policy"
      },
      {
        "key": "F",
        "text": "Storage account resource lock"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "General purpose v2 with Archive access tier for blobs"
      },
      {
        "key": "B",
        "text": "General purpose v2 with Cool access tier for blobs"
      },
      {
        "key": "C",
        "text": "General purpose v2 with Hot access tier for blobs"
      },
      {
        "key": "D",
        "text": "Container access level"
      },
      {
        "key": "E",
        "text": "Container access policy"
      },
      {
        "key": "F",
        "text": "Storage account resource lock"
      }
    ],
    "correctAnswers": [
      "storage_account_type=C",
      "configuration=E"
    ],
    "explanation": "Hot tier dành cho dữ liệu được truy cập thường xuyên và có chi phí truy cập thấp nhất. Chính sách bất biến về lưu giữ theo thời gian ở cấp độ vùng chứa cung cấp khả năng bảo vệ ghi một lần, đọc nhiều: các đốm màu không thể được sửa đổi hoặc xóa trong khoảng thời gian lưu giữ 5 năm; khi hết hạn, chúng có thể bị xóa nhưng không bị ghi đè.\n\n**Tài liệu tham khảo:**\n[Access tiers for blob data - Azure Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview) · [Overview of immutable storage for blob data - Azure Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/immutable-storage-overview)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 195",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/196-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-196",
    "questionNumber": 196,
    "text": "You must design a highly available Azure SQL database that fulfills these requirements:  \n  \n- Failover between database replicas must take place with no data loss.  \n- The database must stay available if an availability zone fails.  \n- Costs must be kept to a minimum.  \n  \nWhich deployment option should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure SQL Database Hyperscale"
      },
      {
        "key": "B",
        "text": "Azure SQL Database Premium"
      },
      {
        "key": "C",
        "text": "Azure SQL Database Standard"
      },
      {
        "key": "D",
        "text": "Azure SQL Managed Instance General Purpose"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Triển khai Azure SQL Database Premium dự phòng theo vùng sẽ phân phối các bản sao được đồng bộ hóa hoàn toàn trên availability zones. Một bản sao được đồng bộ hóa có thể trở thành bản chính khi xảy ra lỗi vùng mà không làm mất dữ liệu đã cam kết. Premium hỗ trợ dự phòng vùng, trong khi tầng Standard thì không; Premium cũng tính phí bổ sung no để cho phép dự phòng vùng vì nó đã sử dụng nhiều bản sao cơ sở dữ liệu.\n\n**Tài liệu tham khảo:**\n[Reliability in Azure SQL Database](https://learn.microsoft.com/en-us/azure/reliability/reliability-sql-database) · [Availability through local and zone redundancy for Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/high-availability-sla-local-zone-redundancy)",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 196",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/197-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-197",
    "questionNumber": 197,
    "text": "You design a solution for the web tier of WebApp1, as shown in the exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783708086417-fa0j5pk3.jpg)  \n  \nFor each statement, select **Yes** when it is true. Otherwise, select **No**.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "The design supports the technical requirements for redundancy.",
        "correctAnswer": "Yes"
      },
      {
        "id": "2",
        "text": "The design supports autoscaling.",
        "correctAnswer": "Yes"
      },
      {
        "id": "3",
        "text": "The design requires a manual configuration if an Azure region fails.",
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
      "2:Yes",
      "3:No"
    ],
    "explanation": "Azure Traffic Manager liên tục giám sát các điểm cuối công cộng và tự động thực hiện phản hồi DNS không thành công đối với điểm cuối khu vực lành mạnh. Do đó, hai ứng dụng web Azure App Service ở các vùng riêng biệt cung cấp khả năng dự phòng theo vùng mà không cần cấu hình chuyển đổi dự phòng thủ công. Dịch vụ ứng dụng hỗ trợ mở rộng quy mô/tự động chia tỷ lệ khi được định cấu hình trên gói Dịch vụ ứng dụng được hỗ trợ.\n\n**Tài liệu tham khảo:**\n[How Azure Traffic Manager Works](https://learn.microsoft.com/en-us/azure/traffic-manager/traffic-manager-how-it-works) · [Automatic scaling in Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/manage-automatic-scaling)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783708086417-fa0j5pk3.jpg",
    "sourceTitle": "Examcademy AZ-305 Question 197",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/198-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-198",
    "questionNumber": 198,
    "text": "You have an Azure subscription.  \n  \nYou need to deploy an Azure Kubernetes Service (AKS) solution that uses Windows Server 2019 nodes. The solution must meet these requirements:  \n  \n- Minimize the time required to provision compute resources during scale-out operations.  \n- Support autoscaling for Windows Server containers.  \n  \nWhich scaling option should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Kubernetes version 1.20.2 or newer"
      },
      {
        "key": "B",
        "text": "Virtual nodes with Virtual Kubelet ACI"
      },
      {
        "key": "C",
        "text": "cluster autoscaler"
      },
      {
        "key": "D",
        "text": "horizontal pod autoscaler"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Các nút ảo với Virtual Kubelet và Azure Container Instances (ACI) cung cấp khả năng cung cấp nhóm nhanh chóng, tránh phải chờ bộ chia tỷ lệ tự động của cụm triển khai các nút điện toán VM. Các bộ chứa Windows Server có thể được lên lịch thành ACI bằng cách cài đặt thủ công nhà cung cấp Virtual Kubelet ACI nguồn mở. [Microsoft Learn: Use virtual nodes with AKS](https://learn.microsoft.com/en-us/azure/aks/virtual-nodes)\n\n**Tài liệu tham khảo:**\n[Use virtual nodes with Azure Kubernetes Service (AKS)](https://learn.microsoft.com/en-us/azure/aks/virtual-nodes)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 198",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/199-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-199",
    "questionNumber": 199,
    "text": "You are building an app that will use Azure Functions to process events from Azure Event Hubs. Request processing is expected to take between five and 20 minutes.  \n  \nYou need to recommend a hosting solution that meets these requirements:  \n  \n- Supports the estimated request-processing runtimes  \n- Supports event-driven autoscaling for the app  \n  \nWhich hosting plan should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Dedicated"
      },
      {
        "key": "B",
        "text": "Consumption"
      },
      {
        "key": "C",
        "text": "App Service"
      },
      {
        "key": "D",
        "text": "Premium"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Azure Functions Premium hỗ trợ mở rộng quy mô theo sự kiện và cho phép định cấu hình thời gian chờ của chức năng mà không cần thời lượng thực thi tối đa. Mức tiêu thụ được giới hạn ở 10 phút cho mỗi lần thực hiện, trong khi các gói Dịch vụ ứng dụng/dành riêng không sử dụng quy mô theo sự kiện Azure Functions.\n\n**Tài liệu tham khảo:**\n[Azure Functions scale and hosting](https://learn.microsoft.com/en-us/azure/azure-functions/functions-scale) · [Event-driven scaling in Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/event-driven-scaling)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 199",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/200-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-200",
    "questionNumber": 200,
    "text": "You are designing an Azure App Service web app.  \n  \nYou plan to deploy the web app to the North Europe Azure region and the West Europe Azure region.  \n  \nYou need to recommend a solution for the web app. The solution must meet these requirements:  \n  \n- Users must always access the web app from the North Europe region, unless that region fails.  \n- The web app must remain available to users if an Azure region is unavailable.  \n- Deployment costs must be minimized.  \n  \nWhat should you include in the recommendation?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "request_routing_method",
        "text": "Request routing method:",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "request_routing_configuration",
        "text": "Request routing configuration:",
        "correctAnswer": "F",
        "choiceKeys": [
          "D",
          "E",
          "F",
          "G"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "A Traffic Manager profile"
      },
      {
        "key": "B",
        "text": "Azure Application Gateway"
      },
      {
        "key": "C",
        "text": "Azure Load Balancer"
      },
      {
        "key": "D",
        "text": "Cookie-based session affinity"
      },
      {
        "key": "E",
        "text": "Performance traffic routing"
      },
      {
        "key": "F",
        "text": "Priority traffic routing"
      },
      {
        "key": "G",
        "text": "Weighted traffic routing"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "A Traffic Manager profile"
      },
      {
        "key": "B",
        "text": "Azure Application Gateway"
      },
      {
        "key": "C",
        "text": "Azure Load Balancer"
      },
      {
        "key": "D",
        "text": "Cookie-based session affinity"
      },
      {
        "key": "E",
        "text": "Performance traffic routing"
      },
      {
        "key": "F",
        "text": "Priority traffic routing"
      },
      {
        "key": "G",
        "text": "Weighted traffic routing"
      }
    ],
    "correctAnswers": [
      "request_routing_method=A",
      "request_routing_configuration=F"
    ],
    "explanation": "Azure Traffic Manager cung cấp tính năng định tuyến dựa trên DNS, theo dõi tình trạng điểm cuối và chuyển đổi dự phòng trên các vùng Azure. Với phương pháp định tuyến Ưu tiên, Bắc Âu là điểm cuối chính và Tây Âu chỉ nhận được lưu lượng truy cập khi điểm cuối chính không tốt, đáp ứng các yêu cầu về tính khả dụng và khu vực chính với cơ sở hạ tầng triển khai được bổ sung ở mức tối thiểu.\n\n**Tài liệu tham khảo:**\n[Traffic Manager routing methods](https://learn.microsoft.com/en-us/azure/traffic-manager/traffic-manager-routing-methods) · [Azure Traffic Manager overview](https://learn.microsoft.com/en-us/azure/traffic-manager/traffic-manager-overview)",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 200",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/201-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-201",
    "questionNumber": 201,
    "text": "Your on-premises datacenter has a server running Linux that hosts a Java app named App1. App1 has the following characteristics:  \n  \n- App1 is an interactive application that users access through HTTPS connections.  \n- The number of connections to App1 varies significantly during the day.  \n- App1 runs multiple concurrent instances.  \n- App1 requires major changes to run in a container.  \n  \nYou plan to migrate App1 to Azure.  \n  \nYou need to recommend a compute solution for App1. The solution must meet these requirements:  \n  \n- The solution must run multiple App1 instances.  \n- The instance count must be managed automatically based on load.  \n- Administrative effort must be minimized.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Batch"
      },
      {
        "key": "B",
        "text": "Azure App Service"
      },
      {
        "key": "C",
        "text": "Azure Kubernetes Service (AKS)"
      },
      {
        "key": "D",
        "text": "Azure Virtual Machine Scale Sets"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Azure App Service là dịch vụ lưu trữ dựa trên HTTP được quản lý hoàn toàn dành cho các ứng dụng web Java. Nó hỗ trợ cân bằng tải tích hợp và tự động mở rộng quy mô cho nhiều phiên bản dựa trên lưu lượng HTTP đến, đồng thời cho phép triển khai các ứng dụng Java dưới dạng mã hoặc gói JAR/WAR thay vì yêu cầu đóng gói trong vùng chứa. Điều này đáp ứng nhu cầu HTTPS đa dạng với khả năng quản lý hành chính tối thiểu.\n\n**Tài liệu tham khảo:**\n[Deploy and configure a Java SE, Tomcat, or JBoss EAP app in Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/configure-language-java-deploy-run) · [Automatic scaling in Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/manage-automatic-scaling)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 201",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/202-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-202",
    "questionNumber": 202,
    "text": "You have an on-premises application that consumes data from multiple databases. The application code refers to database tables by using a combination of the server, database, and table names.  \n  \nYou need to migrate the application data to Azure.  \n  \nTo which two services can you migrate the application data to meet the goal? Each correct answer provides a complete solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "SQL Server Stretch Database"
      },
      {
        "key": "B",
        "text": "SQL Server on an Azure virtual machine"
      },
      {
        "key": "C",
        "text": "Azure SQL Database"
      },
      {
        "key": "D",
        "text": "Azure SQL Managed Instance"
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "SQL Server trên Azure virtual machine bảo toàn mô hình phiên bản SQL Server đầy đủ, bao gồm các tham chiếu đối tượng đa cơ sở dữ liệu và máy chủ đủ điều kiện. Azure SQL Managed Instance được thiết kế để di chuyển các ứng dụng SQL Server tại chỗ với những thay đổi tối thiểu về ứng dụng hoặc cơ sở dữ liệu và hỗ trợ các khả năng SQL Server cấp phiên bản. Azure SQL Database không bảo toàn mô hình tham chiếu đủ điều kiện cho máy chủ, đa cơ sở dữ liệu này mà không có thay đổi ứng dụng và Cơ sở dữ liệu Stretch không phải là mục tiêu di chuyển hoàn chỉnh.\n\n**Tài liệu tham khảo:**\n[Migration overview: SQL Server to SQL Server on Azure VMs](https://learn.microsoft.com/en-us/data-migration/sql-server/virtual-machines/overview) · [Migration overview: SQL Server to Azure SQL Managed Instance](https://learn.microsoft.com/en-us/data-migration/sql-server/managed-instance/overview)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 202",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/203-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-203",
    "questionNumber": 203,
    "text": "You have an Azure subscription containing an Azure key vault named KV1 and a virtual machine named VM1. VM1 runs Windows Server 2022: Azure Edition.  \n  \nYou plan to deploy an ASP.NET Core-based application named App1 to VM1.  \n  \nYou must configure App1 to use a system-assigned managed identity to retrieve secrets from KV1 while minimizing development effort.  \n  \nWhat should you do?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "oauth_flow",
        "text": "Configure App1 to use OAuth 2.0:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "token_endpoint",
        "text": "Configure App1 to use a REST API call to retrieve an authentication token from the:",
        "correctAnswer": "D",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Authorization code grant flows"
      },
      {
        "key": "B",
        "text": "Client credentials grant flows"
      },
      {
        "key": "C",
        "text": "Implicit grant flows"
      },
      {
        "key": "D",
        "text": "Azure Instance Metadata Service (IMDS) endpoint"
      },
      {
        "key": "E",
        "text": "OAuth 2.0 access token endpoint of Azure AD"
      },
      {
        "key": "F",
        "text": "OAuth 2.0 access token endpoint of Microsoft Identity Platform"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Authorization code grant flows"
      },
      {
        "key": "B",
        "text": "Client credentials grant flows"
      },
      {
        "key": "C",
        "text": "Implicit grant flows"
      },
      {
        "key": "D",
        "text": "Azure Instance Metadata Service (IMDS) endpoint"
      },
      {
        "key": "E",
        "text": "OAuth 2.0 access token endpoint of Azure AD"
      },
      {
        "key": "F",
        "text": "OAuth 2.0 access token endpoint of Microsoft Identity Platform"
      }
    ],
    "correctAnswers": [
      "oauth_flow=B",
      "token_endpoint=D"
    ],
    "explanation": "system-assigned managed identity chạy trên máy ảo Azure nhận được mã thông báo truy cập Microsoft Entra thông qua Siêu dữ liệu phiên bản Azure Service endpoint của máy ảo. Nó đại diện cho luồng thông tin xác thực khách hàng không tương tác; mã ủy quyền và các luồng ngầm yêu cầu đăng nhập của người dùng tương tác và không phù hợp với nhận dạng khối lượng công việc này.\n\n**Tài liệu tham khảo:**\n[Use managed identities on a virtual machine to acquire access tokens](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/how-to-use-vm-token) · [OAuth 2.0 client credentials grant flow](https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-client-creds-grant-flow)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 203",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/204-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-204",
    "questionNumber": 204,
    "text": "You must design a highly available Azure SQL database that satisfies these requirements:  \n  \n- Failover between database replicas must happen with no data loss.  \n- The database must stay available if an availability zone has an outage.  \n- Costs must be kept to a minimum.  \n  \nWhich deployment option should you choose?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure SQL Database Hyperscale"
      },
      {
        "key": "B",
        "text": "Azure SQL Database Premium"
      },
      {
        "key": "C",
        "text": "Azure SQL Database Basic"
      },
      {
        "key": "D",
        "text": "Azure SQL Database Standard"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Azure SQL Database Premium hỗ trợ dự phòng vùng, phân phối các bản sao cơ sở dữ liệu trên availability zones và cung cấp mục tiêu điểm khôi phục không mất mát khi xảy ra lỗi vùng. Cơ bản và Tiêu chuẩn không hỗ trợ dự phòng vùng. Premium đáp ứng các mục tiêu về tính khả dụng và mất dữ liệu cần thiết mà không cần yêu cầu bổ sung về bản sao có tính sẵn sàng cao khi triển khai Hyperscale dự phòng theo vùng, khiến nó trở thành tùy chọn phù hợp giảm thiểu chi phí.\n\n**Tài liệu tham khảo:**\n[Reliability in Azure SQL Database](https://learn.microsoft.com/en-us/azure/reliability/reliability-sql-database) · [Availability Through Local and Zone Redundancy - Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/high-availability-sla-local-zone-redundancy?view=azuresql-db)",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 204",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/205-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-205",
    "questionNumber": 205,
    "text": "HOTSPOT -  \n  \nYou have an Azure subscription containing the Azure SQL servers shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783706727700-ws75vqcv.png)  \n  \nThe subscription has the storage accounts shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783706730589-axaakm83.png)  \n  \nYou create the Azure SQL databases shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783706733105-6e2yg1ic.png)  \n  \nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "When you enable auditing for SQLdb1, you can store the audit information to storage1.",
        "correctAnswer": "Yes"
      },
      {
        "id": "2",
        "text": "When you enable auditing for SQLdb2, you can store the audit information to storage2.",
        "correctAnswer": "No"
      },
      {
        "id": "3",
        "text": "When you enable auditing for SQLdb3, you can store the audit information to storage2.",
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
    "explanation": "Kiểm tra Azure SQL Database có thể ghi nhật ký kiểm tra vào tài khoản Azure Storage. Khi định cấu hình kiểm tra trong cổng Azure, tài khoản lưu trữ phải ở cùng khu vực với cơ sở dữ liệu và máy chủ logic. SQLdb1 và storage1 đều ở Đông Hoa Kỳ, do đó việc ghép nối là hợp lệ. SQLdb2 nằm trên máy chủ Đông Hoa Kỳ và SQLdb3 nằm trên máy chủ Tây Hoa Kỳ, trong khi storage2 nằm ở miền Trung Hoa Kỳ, vì vậy cả hai đều không thể sử dụng storage2 thông qua cổng.\n\n**Tài liệu tham khảo:**\n[Set up Auditing - Azure SQL Database & Azure Synapse Analytics](https://learn.microsoft.com/en-us/azure/azure-sql/database/auditing-setup?view=azuresql)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783706727700-ws75vqcv.png",
    "sourceTitle": "Examcademy AZ-305 Question 205",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/206-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-206",
    "questionNumber": 206,
    "text": "You must recommend a solution for generating a monthly report of all new Azure Resource Manager (ARM) resource deployments in your Azure subscription.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Monitor action groups"
      },
      {
        "key": "B",
        "text": "Azure Arc"
      },
      {
        "key": "C",
        "text": "Azure Monitor metrics"
      },
      {
        "key": "D",
        "text": "Azure Activity Log"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Nhật ký hoạt động Azure ghi lại các sự kiện trên mặt phẳng điều khiển cấp đăng ký. Danh mục Quản trị của nó ghi lại các hoạt động tạo, cập nhật, xóa và hành động của Azure Resource Manager, cung cấp dữ liệu kiểm tra cần thiết để xác định việc triển khai tài nguyên mới trong mỗi tháng.\n\n**Tài liệu tham khảo:**\n[Azure Activity Log event schema](https://learn.microsoft.com/en-us/azure/azure-monitor/platform/activity-log-schema) · [Activity log in Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/platform/activity-log)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 206",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/207-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-207",
    "questionNumber": 207,
    "text": "You have an Azure App Service web app that uses a system-assigned managed identity.  \n  \nYou need to recommend a solution for storing the web app’s settings as secrets in an Azure Key Vault. The solution must meet these requirements:  \n  \n- Minimize changes to the app code.  \n- Apply the principle of least privilege.  \n  \nWhat should the recommendation include?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "key_vault_integration_method",
        "text": "Key Vault integration method:",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      },
      {
        "id": "key_vault_permissions_for_managed_identity",
        "text": "Key Vault permissions for the managed identity:",
        "correctAnswer": "G",
        "choiceKeys": [
          "E",
          "F",
          "G",
          "H"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Key Vault references in Application settings"
      },
      {
        "key": "B",
        "text": "Key Vault references in Appsettings.json"
      },
      {
        "key": "C",
        "text": "Key Vault references in Web.config"
      },
      {
        "key": "D",
        "text": "Key Vault SDK"
      },
      {
        "key": "E",
        "text": "Keys: Get"
      },
      {
        "key": "F",
        "text": "Keys: List and Get"
      },
      {
        "key": "G",
        "text": "Secrets: Get"
      },
      {
        "key": "H",
        "text": "Secrets: List and Get"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Key Vault references in Application settings"
      },
      {
        "key": "B",
        "text": "Key Vault references in Appsettings.json"
      },
      {
        "key": "C",
        "text": "Key Vault references in Web.config"
      },
      {
        "key": "D",
        "text": "Key Vault SDK"
      },
      {
        "key": "E",
        "text": "Keys: Get"
      },
      {
        "key": "F",
        "text": "Keys: List and Get"
      },
      {
        "key": "G",
        "text": "Secrets: Get"
      },
      {
        "key": "H",
        "text": "Secrets: List and Get"
      }
    ],
    "correctAnswers": [
      "key_vault_integration_method=A",
      "key_vault_permissions_for_managed_identity=G"
    ],
    "explanation": "Tham chiếu Key Vault của Azure App Service được định cấu hình trong cài đặt ứng dụng và giải quyết các giá trị bí mật thông qua managed identity của ứng dụng, do đó mã ứng dụng không cần gọi Key Vault. Danh tính chỉ cần quyền truy cập đọc bí mật (`secrets/get`), tương ứng với quyền `Secrets: Get`; cấp quyền truy cập danh sách là không cần thiết khi tham chiếu chỉ định tên bí mật.\n\n**Tài liệu tham khảo:**\n[Use Key Vault references as app settings in Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references) · [Azure Key Vault built-in RBAC roles](https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide?tabs=azure-cli)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 207",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/208-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-208",
    "questionNumber": 208,
    "text": "You have an Azure subscription named Subscription1 that is connected to a hybrid Azure Active Directory (Azure AD) tenant.  \n  \nAn on-premises datacenter has no VPN connection to Subscription1. The datacenter includes a computer named Server1 with Microsoft SQL Server 2016 installed. Server1 is blocked from accessing the internet.  \n  \nAn Azure logic app resource named LogicApp1 needs write access to a database on Server1.  \n  \nYou need to recommend a solution that enables LogicApp1 to access Server1.  \n  \nWhat should you recommend deploying on-premises and in Azure?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "on_premises",
        "text": "On-premises:",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      },
      {
        "id": "azure",
        "text": "Azure:",
        "correctAnswer": "E",
        "choiceKeys": [
          "E",
          "F",
          "G",
          "H"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "A Web Application Proxy for Windows Server"
      },
      {
        "key": "B",
        "text": "An Azure AD Application Proxy connector"
      },
      {
        "key": "C",
        "text": "An On-premises data gateway"
      },
      {
        "key": "D",
        "text": "Hybrid Connection Manager"
      },
      {
        "key": "E",
        "text": "A connection gateway resource"
      },
      {
        "key": "F",
        "text": "An Azure Application Gateway"
      },
      {
        "key": "G",
        "text": "An Azure Event Grid domain"
      },
      {
        "key": "H",
        "text": "An enterprise application"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "A Web Application Proxy for Windows Server"
      },
      {
        "key": "B",
        "text": "An Azure AD Application Proxy connector"
      },
      {
        "key": "C",
        "text": "An On-premises data gateway"
      },
      {
        "key": "D",
        "text": "Hybrid Connection Manager"
      },
      {
        "key": "E",
        "text": "A connection gateway resource"
      },
      {
        "key": "F",
        "text": "An Azure Application Gateway"
      },
      {
        "key": "G",
        "text": "An Azure Event Grid domain"
      },
      {
        "key": "H",
        "text": "An enterprise application"
      }
    ],
    "correctAnswers": [
      "on_premises=C",
      "azure=E"
    ],
    "explanation": "Cổng dữ liệu tại chỗ cho phép Ứng dụng Logic tiếp cận SQL Server tại chỗ thông qua kết nối gửi đi từ máy chủ cổng, do đó cần có no VPN hoặc quyền truy cập internet gửi đến Server1. Cổng được đăng ký trong Azure dưới dạng tài nguyên cổng kết nối và được sử dụng bởi kết nối SQL của Ứng dụng Logic.",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 208",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/209-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-209",
    "questionNumber": 209,
    "text": "You need to design a highly available Azure SQL database that satisfies these requirements:  \n  \n- Failover between database replicas must occur with no data loss.  \n- The database must stay available during a zone outage.  \n- Costs must be kept to a minimum.  \n  \nWhich deployment option should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure SQL Database Business Critical"
      },
      {
        "key": "B",
        "text": "Azure SQL Database Premium"
      },
      {
        "key": "C",
        "text": "Azure SQL Database Basic"
      },
      {
        "key": "D",
        "text": "Azure SQL Database Hyperscale"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Azure SQL Database dự phòng vùng cung cấp các bản sao trên availability zones và mục tiêu điểm khôi phục không mất dữ liệu cho dữ liệu đã cam kết khi một vùng bị lỗi. Cấp Premium hỗ trợ dự phòng vùng, trong khi Cấp cơ bản thì không. Premium cung cấp độ sẵn sàng cao theo vùng theo yêu cầu với chi phí thấp hơn so với các tùy chọn Kinh doanh quan trọng và Siêu quy mô.\n\n**Tài liệu tham khảo:**\n[Reliability in Azure SQL Database](https://learn.microsoft.com/en-us/azure/reliability/reliability-sql-database)",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 209",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/210-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-210",
    "questionNumber": 210,
    "text": "You are building a sales application that will include several Azure cloud services and manage different parts of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.  \n  \nYou need to recommend a solution that enables the cloud services to communicate transaction information asynchronously by using XML messages.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Service Fabric"
      },
      {
        "key": "B",
        "text": "Azure Queue Storage"
      },
      {
        "key": "C",
        "text": "Azure Traffic Manager"
      },
      {
        "key": "D",
        "text": "Azure Application Gateway"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Azure Queue Storage cung cấp khả năng gửi tin nhắn không đồng bộ, đáng tin cậy giữa các thành phần được liên kết lỏng lẻo của một ứng dụng phân tán. Thông báo hàng đợi là văn bản UTF-8 tương thích với các yêu cầu XML, cho phép các dịch vụ xử lý giao dịch trao đổi nội dung thông báo XML mà không cần phụ thuộc đồng bộ.\n\n**Tài liệu tham khảo:**\n[Introduction to Azure Queue Storage](https://learn.microsoft.com/en-us/azure/storage/queues/storage-queues-introduction) · [Quickstart: Azure Queue Storage client library for .NET](https://learn.microsoft.com/en-us/azure/storage/queues/storage-quickstart-queues-dotnet)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 210",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/211-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-211",
    "questionNumber": 211,
    "text": "You are developing a sales application that will include several Azure cloud services and process different parts of a transaction. Various cloud services will handle customer orders, billing, payment, inventory, and shipping.  \n  \nYou need to recommend a solution that enables the cloud services to asynchronously exchange transaction information by using XML messages.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Notification Hubs"
      },
      {
        "key": "B",
        "text": "Azure Service Fabric"
      },
      {
        "key": "C",
        "text": "Azure Queue Storage"
      },
      {
        "key": "D",
        "text": "Azure Application Gateway"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Azure Queue Storage cho phép các thành phần được ghép nối lỏng lẻo của ứng dụng phân tán để trao đổi tin nhắn để xử lý không đồng bộ sau này. Tin nhắn hàng đợi hỗ trợ nội dung tương thích UTF-8/XML, giúp dịch vụ phù hợp để truyền thông tin giao dịch giữa các dịch vụ đặt hàng, lập hóa đơn, thanh toán, kiểm kê và vận chuyển.\n\n**Tài liệu tham khảo:**\n[Introduction to Azure Queue Storage](https://learn.microsoft.com/en-sg/azure/storage/queues/storage-queues-introduction) · [Tutorial: Work with Azure Queue Storage queues in .NET](https://learn.microsoft.com/en-us/azure/storage/queues/storage-tutorial-queues)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 211",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/212-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-212",
    "questionNumber": 212,
    "text": "You are designing an Azure IoT Hub solution that will contain 50,000 IoT devices.  \n  \nEach device will stream data that includes temperature, device ID, and time data. About 50,000 records will be written per second, and the data will be visualized in near real time.  \n  \nYou need to recommend a service for storing and querying the data.  \n  \nWhich two services can you recommend? Each correct answer provides a complete solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Table Storage"
      },
      {
        "key": "B",
        "text": "Azure Event Grid"
      },
      {
        "key": "C",
        "text": "Azure Cosmos DB for NoSQL"
      },
      {
        "key": "D",
        "text": "Azure Time Series Insights"
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Đối với cùng một kịch bản IoT (50.000 thiết bị, 50.000 bản ghi/giây, truy vấn và trực quan hóa gần như theo thời gian thực), Azure Cosmos DB dành cho NoSQL cung cấp bộ lưu trữ thông lượng cao, phân tán trên toàn cầu với khả năng truy vấn và Azure Time Series Insights được thiết kế đặc biệt cho việc nhập, lưu trữ, truy vấn và trực quan hóa dữ liệu chuỗi thời gian. Cả hai dịch vụ đều cung cấp các giải pháp hoàn chỉnh một cách độc lập để lưu trữ và truy vấn dữ liệu đo từ xa.",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 212",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/213-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-213",
    "questionNumber": 213,
    "text": "You have an Azure subscription.  \n  \nYou need to recommend a solution that lets developers provision Azure virtual machines. The solution must satisfy these requirements:  \n  \n- Allow virtual machines to be created only in specified regions.  \n- Allow virtual machines to be created only in specified sizes.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Resource Manager (ARM) templates"
      },
      {
        "key": "B",
        "text": "Azure Policy"
      },
      {
        "key": "C",
        "text": "Conditional Access policies"
      },
      {
        "key": "D",
        "text": "role-based access control (RBAC)"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Chính sách Azure có thể từ chối triển khai bên ngoài danh sách khu vực được phép và từ chối các máy ảo có SKU kích thước không nằm trong danh sách được phê duyệt. Các chính sách tích hợp của nó bao gồm **Vị trí được phép** và **SKU kích thước máy ảo được phép**, do đó, việc gán chính sách có thể thực thi cả hai hạn chế trên phạm vi áp dụng.\n\n**Tài liệu tham khảo:**\n[Overview of Azure Policy](https://learn.microsoft.com/en-us/azure/governance/policy/overview) · [Built-in policy definitions for Azure Virtual Machines](https://learn.microsoft.com/en-us/azure/virtual-machines/policy-reference)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 213",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/214-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-214",
    "questionNumber": 214,
    "text": "You have an Azure subscription containing a custom application named Application1. Application1 was developed by an external company, Fabrikam, Ltd. Fabrikam developers were assigned role-based access control (RBAC) permissions to the Application1 components. All users have Microsoft 365 E5 licenses.  \n  \nYou need to recommend a solution to verify whether the Fabrikam developers still need permissions to Application1. The solution must meet these requirements:  \n  \n- Send the developers’ manager a monthly email message listing the access permissions to Application1.  \n- Automatically revoke an access permission if the manager does not verify it.  \n- Minimize development effort.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "In Azure Active Directory (Azure AD), create an access review of Application1."
      },
      {
        "key": "B",
        "text": "Create an Azure Automation runbook that runs the Get-AzRoleAssignment cmdlet."
      },
      {
        "key": "C",
        "text": "In Azure Active Directory (Azure AD) Privileged Identity Management, create a custom role assignment for the Application1 resources."
      },
      {
        "key": "D",
        "text": "Create an Azure Automation runbook that runs the Get-AzureADUserAppRoleAssignment cmdlet."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Đánh giá quyền truy cập Microsoft Entra cung cấp quy trình đánh giá tích hợp cho các nhiệm vụ vai trò tài nguyên Azure. Quá trình xem xét có thể diễn ra hàng tháng, chỉ định người quản lý của mỗi người dùng làm người đánh giá, gửi thông báo đánh giá và tự động áp dụng kết quả để xóa các nhiệm vụ vai trò chưa được xem xét hoặc bị từ chối. Điều này đáp ứng các yêu cầu quản trị truy cập mà không cần tự động hóa tùy chỉnh.\n\n**Tài liệu tham khảo:**\n[Create an access review of Azure resource and Microsoft Entra roles in PIM](https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-create-roles-and-resource-roles-review) · [Plan a Microsoft Entra access reviews deployment](https://learn.microsoft.com/en-us/entra/id-governance/deploy-access-reviews)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 214",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/215-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-215",
    "questionNumber": 215,
    "text": "You need to recommend a solution for the App1 maintenance task. The solution must minimize costs.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "an Azure logic app"
      },
      {
        "key": "B",
        "text": "an Azure function"
      },
      {
        "key": "C",
        "text": "an Azure virtual machine"
      },
      {
        "key": "D",
        "text": "an App Service WebJob"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Azure App Service WebJobs chạy các chương trình hoặc tập lệnh nền cùng với ứng dụng Dịch vụ ứng dụng, sử dụng cùng một môi trường Dịch vụ ứng dụng. WebJob được hỗ trợ bởi tất cả các gói Dịch vụ ứng dụng với mức phí bổ sung no, khiến chúng phù hợp cho nhiệm vụ bảo trì khi cần giảm thiểu chi phí bổ sung.\n\n**Tài liệu tham khảo:**\n[Run background tasks with WebJobs - Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/webjobs-create)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 215",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/216-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-216",
    "questionNumber": 216,
    "text": "You are developing a sales application that will include several Azure cloud services and manage different components of a transaction. Different cloud services will process customer orders, billing, payment, inventory, and shipping.  \n  \nYou need to recommend a solution that enables the cloud services to asynchronously communicate transaction information by using XML messages.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Application Gateway"
      },
      {
        "key": "B",
        "text": "Azure Data Lake"
      },
      {
        "key": "C",
        "text": "Azure Queue Storage"
      },
      {
        "key": "D",
        "text": "Azure Blob Storage"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Azure Queue Storage cung cấp hàng đợi bền vững cho các tin nhắn được trao đổi giữa các thành phần ứng dụng phân tán, cho phép các dịch vụ xử lý thông tin giao dịch một cách không đồng bộ và độc lập. Tin nhắn xếp hàng có thể chứa tải trọng XML.\n\n**Tài liệu tham khảo:**\n[Introduction to Azure Queue Storage](https://learn.microsoft.com/en-us/azure/storage/queues/storage-queues-introduction) · [Reliability in Azure Queue Storage](https://learn.microsoft.com/en-us/azure/reliability/reliability-storage-queue)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 216",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/217-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-217",
    "questionNumber": 217,
    "text": "You have the Azure resources shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783706735069-tn1invw3.png)  \n  \nYou need to deploy a new Azure Firewall policy that contains mandatory rules for every Azure Firewall deployment. The new policy will be configured as a parent policy for the existing policies.  \n  \nWhat is the minimum number of additional Azure Firewall policies that you should create?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "1"
      },
      {
        "key": "C",
        "text": "2"
      },
      {
        "key": "D",
        "text": "3"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Azure Firewall Hệ thống phân cấp chính sách yêu cầu chính sách gốc và chính sách con của nó phải ở cùng một khu vực. Vì các chính sách dành cho trẻ em hiện có ở Trung Hoa Kỳ, Đông Hoa Kỳ và Tây Âu nên cần có chính sách dành cho cha mẹ riêng biệt cho từng khu vực trong số ba khu vực đó. [What is Azure Firewall Manager? | Microsoft Learn](https://learn.microsoft.com/en-us/azure/firewall/central-management)\n\n**Tài liệu tham khảo:**\n[What is Azure Firewall Manager? | Microsoft Learn](https://learn.microsoft.com/en-us/azure/firewall/central-management) · [Use Azure Firewall policy to define a rule hierarchy | Microsoft Learn](https://learn.microsoft.com/en-us/azure/firewall-manager/rule-hierarchy)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783706735069-tn1invw3.png",
    "sourceTitle": "Examcademy AZ-305 Question 217",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/218-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-218",
    "questionNumber": 218,
    "text": "You plan to move App1 to Azure.  \n  \nYou need to recommend a storage solution for App1 that meets the security and compliance requirements.  \n  \nWhich storage type should you recommend, and how should you configure the storage?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "storage_account_type",
        "text": "Storage account type:",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "configuration",
        "text": "Configuration:",
        "correctAnswer": "F",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Premium page blobs"
      },
      {
        "key": "B",
        "text": "Premium file shares"
      },
      {
        "key": "C",
        "text": "Standard general-purpose v2"
      },
      {
        "key": "D",
        "text": "NFSv3"
      },
      {
        "key": "E",
        "text": "Large file shares"
      },
      {
        "key": "F",
        "text": "Hierarchical namespace"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Premium page blobs"
      },
      {
        "key": "B",
        "text": "Premium file shares"
      },
      {
        "key": "C",
        "text": "Standard general-purpose v2"
      },
      {
        "key": "D",
        "text": "NFSv3"
      },
      {
        "key": "E",
        "text": "Large file shares"
      },
      {
        "key": "F",
        "text": "Hierarchical namespace"
      }
    ],
    "correctAnswers": [
      "storage_account_type=C",
      "configuration=F"
    ],
    "explanation": "Tiêu chuẩn đa năng v2 hỗ trợ các chính sách lưu trữ bất biến Azure Blob Storage, giúp giữ dữ liệu ở trạng thái ghi một lần, đọc nhiều lần để không thể sửa đổi hoặc xóa dữ liệu trong khoảng thời gian lưu giữ đã định cấu hình. Việc kích hoạt không gian tên phân cấp cung cấp các khả năng của Azure Data Lake Storage, bao gồm phân cấp tệp và thư mục cũng như kiểm soát truy cập dựa trên ACL. NFSv3 không phù hợp vì các chính sách lưu trữ bất biến không được hỗ trợ trên các tài khoản đã bật NFSv3.\n\n**Tài liệu tham khảo:**\n[Create a storage account for Azure Data Lake Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/create-data-lake-storage-account) · [Azure Data Lake Storage hierarchical namespace](https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-namespace)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 218",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/219-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-219",
    "questionNumber": 219,
    "text": "You are designing a SQL database solution. The solution will contain 20 databases, each 20 GB, with varying usage patterns.  \n  \nYou need to recommend a database platform to host the databases. The solution must satisfy the following requirements:  \n  \n- Meet a Service Level Agreement (SLA) of 99.99% uptime.  \n- Dynamically scale the compute resources assigned to the databases.  \n- Include reserved capacity.  \n  \nCompute charges must be minimized.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783706737032-wf280om4.png)  \n  \nWhat should be included in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "an elastic pool that contains 20 Azure SQL databases"
      },
      {
        "key": "B",
        "text": "20 databases on a Microsoft SQL server that runs on an Azure virtual machine in an availability set"
      },
      {
        "key": "C",
        "text": "20 databases on a Microsoft SQL server that runs on an Azure virtual machine"
      },
      {
        "key": "D",
        "text": "20 instances of Azure SQL Database serverless"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Nhóm đàn hồi Azure SQL Database cho phép các cơ sở dữ liệu có mô hình sử dụng khác nhau và không thể đoán trước chia sẻ nhóm tài nguyên điện toán được cung cấp, tránh chi phí định cỡ độc lập tất cả 20 cơ sở dữ liệu cho nhu cầu cao nhất. Điện toán nhóm có thể được mở rộng khi nhu cầu khối lượng công việc thay đổi và điện toán Azure SQL Database được cung cấp có thể được giảm giá theo công suất dự trữ. Azure SQL Database serverless tự động mở rộng quy mô điện toán nhưng không đủ điều kiện để nhận chiết khấu đặt trước.\n\n**Tài liệu tham khảo:**\n[Resource Management in Dense Elastic Pools - Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/elastic-pool-resource-management?view=azuresql) · [How a reservation discount is applied to Azure SQL Database](https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/understand-reservation-charges)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783706737032-wf280om4.png",
    "sourceTitle": "Examcademy AZ-305 Question 219",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/220-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-220",
    "questionNumber": 220,
    "text": "You have an Azure subscription containing 300 virtual machines that run Windows Server 2019.  \n  \nYou need to centrally monitor all warning events in the virtual machines' System logs.  \n  \nWhat should the solution include?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "resource",
        "text": "Resource to create in Azure:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      },
      {
        "id": "vm_configuration",
        "text": "Configuration to perform on the virtual machines:",
        "correctAnswer": "G",
        "choiceKeys": [
          "E",
          "F",
          "G",
          "H"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "An event hub"
      },
      {
        "key": "B",
        "text": "A log analytics workspace"
      },
      {
        "key": "C",
        "text": "A search service"
      },
      {
        "key": "D",
        "text": "A storage account"
      },
      {
        "key": "E",
        "text": "Create event subscriptions"
      },
      {
        "key": "F",
        "text": "Configure Continuous delivery"
      },
      {
        "key": "G",
        "text": "Install the Azure Monitor agent"
      },
      {
        "key": "H",
        "text": "Modify the membership of the Event Log Readers group"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "An event hub"
      },
      {
        "key": "B",
        "text": "A log analytics workspace"
      },
      {
        "key": "C",
        "text": "A search service"
      },
      {
        "key": "D",
        "text": "A storage account"
      },
      {
        "key": "E",
        "text": "Create event subscriptions"
      },
      {
        "key": "F",
        "text": "Configure Continuous delivery"
      },
      {
        "key": "G",
        "text": "Install the Azure Monitor agent"
      },
      {
        "key": "H",
        "text": "Modify the membership of the Event Log Readers group"
      }
    ],
    "correctAnswers": [
      "resource=B",
      "vm_configuration=G"
    ],
    "explanation": "Không gian làm việc Log Analytics là kho lưu trữ dữ liệu Nhật ký Azure Monitor được sử dụng để truy vấn và giám sát tập trung. Tác nhân Azure Monitor thu thập dữ liệu nhật ký sự kiện của Hệ thống Windows từ mỗi máy ảo khi được định cấu hình thông qua quy tắc thu thập dữ liệu, cho phép giám sát tập trung các sự kiện cảnh báo.\n\n**Tài liệu tham khảo:**\n[Azure Monitor Agent overview](https://learn.microsoft.com/en-us/azure/azure-monitor/agents/azure-monitor-agent-overview) · [Collect Windows event log data sources with Azure Monitor Agent](https://learn.microsoft.com/en-us/azure/azure-monitor/vm/data-collection-windows-events)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 220",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/221-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-221",
    "questionNumber": 221,
    "text": "You plan to migrate a web app named App1 from an on-premises datacenter to Azure.  \n  \nApp1 relies on a custom COM component installed on the host server.  \n  \nYou need to recommend a solution to host App1 in Azure. The solution must meet the following requirements:  \n  \n- App1 must remain available to users if an Azure datacenter becomes unavailable.  \n- Costs must be minimized.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "In two Azure regions, deploy a load balancer and a web app."
      },
      {
        "key": "B",
        "text": "In two Azure regions, deploy a load balancer and a virtual machine scale set."
      },
      {
        "key": "C",
        "text": "Deploy a load balancer and a virtual machine scale set across two availability zones."
      },
      {
        "key": "D",
        "text": "In two Azure regions, deploy an Azure Traffic Manager profile and a web app."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Một bộ quy mô máy ảo cung cấp các máy chủ có thể cài đặt thành phần COM tùy chỉnh và Azure Load Balancer phân phối lưu lượng giữa các phiên bản. Availability zones là các nhóm trung tâm dữ liệu riêng biệt về mặt vật lý trong khu vực Azure với nguồn điện, khả năng làm mát và kết nối mạng độc lập; phân phối bộ thang đo trên hai vùng sẽ bảo vệ ứng dụng khỏi sự cố ngừng hoạt động của trung tâm dữ liệu/khu vực. Điều này đáp ứng phạm vi sẵn có đã nêu mà không phải trả thêm chi phí cho việc sao chép giải pháp ở khu vực thứ hai.\n\n**Tài liệu tham khảo:**\n[What are Azure availability zones?](https://learn.microsoft.com/en-ie/azure/reliability/availability-zones-overview) · [Azure Virtual Machine Scale Sets overview](https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/overview)",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 221",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/222-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-222",
    "questionNumber": 222,
    "text": "Your company has the divisions displayed in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783709017229-ebflhgly.png)  \n  \nSub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com can authenticate to App1.  \n  \nYou need to recommend a solution that enables users in the fabrikam.com tenant to authenticate to App1.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Enable Azure AD pass-through authentication and update the sign-in endpoint."
      },
      {
        "key": "B",
        "text": "Use Azure AD entitlement management to govern external users."
      },
      {
        "key": "C",
        "text": "Configure assignments for the fabrikam.com users by using Azure AD Privileged Identity Management (PIM)."
      },
      {
        "key": "D",
        "text": "Configure Azure AD Identity Protection."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Quản lý quyền lợi Azure AD sử dụng Microsoft Entra B2B để quản lý quyền truy cập của người dùng từ các tổ chức bên ngoài. Người dùng fabrikam.com có ​​thể xác thực thông qua đối tượng thuê chính của họ trong khi được đại diện với tư cách là người dùng bên ngoài trong đối tượng thuê tài nguyên contoso.com và được chỉ định quyền truy cập vào ứng dụng thông qua gói truy cập. Xác thực chuyển tiếp, Quản lý danh tính đặc quyền và Bảo vệ danh tính không cung cấp khả năng quản lý quyền truy cập ứng dụng và quản lý quyền truy cập ứng dụng của người dùng bên ngoài.\n\n**Tài liệu tham khảo:**\n[Govern access for external users in entitlement management](https://learn.microsoft.com/en-us/entra/id-governance/entitlement-management-external-users) · [Onboard external users to line of business applications using Microsoft Entra B2B](https://learn.microsoft.com/en-us/entra/architecture/11-onboard-external-user)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783709017229-ebflhgly.png",
    "sourceTitle": "Examcademy AZ-305 Question 222",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/223-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-223",
    "questionNumber": 223,
    "text": "You have an Azure subscription.  \n  \nYour on-premises network includes a file server named Server1. Server1 holds 5 ׀¢׀’ of company files that are rarely accessed.  \n  \nYou plan to copy the files to Azure Storage.  \n  \nYou need to implement a storage solution for these files that meets the following requirements:  \n  \n- The files must be available within 24 hours after they are requested.  \n- Storage costs must be minimized.  \n  \nWhich two possible storage solutions meet this goal? Each correct answer provides a complete solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create an Azure Blob Storage account that is configured for the Cool default access tier. Create a blob container, copy the files to the blob container, and set each file to the Archive access tier."
      },
      {
        "key": "B",
        "text": "Create a general-purpose v1 storage account. Create a blob container and copy the files to the blob container."
      },
      {
        "key": "C",
        "text": "Create a general-purpose v2 storage account that is configured for the Cool default access tier. Create a file share in the storage account and copy the files to the file share."
      },
      {
        "key": "D",
        "text": "Create a general-purpose v2 storage account that is configured for the Hot default access tier. Create a blob container, copy the files to the blob container, and set each file to the Archive access tier."
      },
      {
        "key": "E",
        "text": "Create a general-purpose v1 storage account. Create a fie share in the storage account and copy the files to the file share."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Bậc truy cập Lưu trữ là bậc có chi phí thấp nhất dành cho dữ liệu blob hiếm khi được truy cập. Một blob đã lưu trữ có thể được bù nước lên cấp trực tuyến trong tối đa 15 giờ, đáp ứng yêu cầu về tính khả dụng trong 24 giờ. Cả tài khoản Blob Storage và tài khoản v2 đa năng đều hỗ trợ cài đặt rõ ràng các đốm màu đủ điều kiện cho Archive tier; Cấp mặc định Nóng hoặc Thú vị của tài khoản chỉ áp dụng khi một blob không có cấp được chỉ định rõ ràng.\n\n**Tài liệu tham khảo:**\n[Access tiers for blob data - Azure Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview) · [Archive a blob - Azure Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/archive-blob)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 223",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/224-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-224",
    "questionNumber": 224,
    "text": "You need to design a highly available Azure SQL database that satisfies these requirements:  \n  \n- Failover between database replicas must take place with no data loss.  \n- The database must stay available if a zone outage occurs.  \n- Costs must be minimized.  \n  \nWhich deployment option should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure SQL Database Basic"
      },
      {
        "key": "B",
        "text": "Azure SQL Database Business Critical"
      },
      {
        "key": "C",
        "text": "Azure SQL Database Standard"
      },
      {
        "key": "D",
        "text": "Azure SQL Managed Instance General Purpose"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Azure SQL Database Business Critical hỗ trợ dự phòng vùng, phân phối các bản sao đồng bộ hiện có trên availability zones. Điều này mang lại khả năng mất dữ liệu đã cam kết bằng không khi xảy ra lỗi vùng và giữ cho cơ sở dữ liệu luôn sẵn sàng thông qua chuyển đổi dự phòng tự động. Không giống như dự phòng vùng Mục đích chung, việc cho phép dự phòng vùng ở cấp Quan trọng trong Kinh doanh phải trả thêm phí no; Các bậc Cơ bản và Tiêu chuẩn không hỗ trợ dự phòng vùng.\n\n**Tài liệu tham khảo:**\n[Reliability in Azure SQL Database](https://learn.microsoft.com/en-us/azure/reliability/reliability-sql-database)",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 224",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/225-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-225",
    "questionNumber": 225,
    "text": "You need to design a highly available Azure SQL database that satisfies these requirements:  \n  \n- Failover between database replicas must occur with no data loss.  \n- The database must stay available if a zone outage occurs.  \n- Costs must be minimized.  \n  \nWhich deployment option should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure SQL Managed Instance Business Critical"
      },
      {
        "key": "B",
        "text": "Azure SQL Database Business Critical"
      },
      {
        "key": "C",
        "text": "Azure SQL Database Basic"
      },
      {
        "key": "D",
        "text": "Azure SQL Database Standard"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Azure SQL Database Business Critical hỗ trợ các bản sao dự phòng theo vùng trên availability zones. Lỗi vùng có thể chuyển sang bản sao được đồng bộ hóa hoàn toàn khiến no mất dữ liệu đã cam kết. Ở cấp Quan trọng trong Kinh doanh, tính năng dự phòng vùng sử dụng các bản sao hiện có và phát sinh phí bổ sung no để kích hoạt tính năng này, giúp nó tiết kiệm chi phí hơn so với một phiên bản được quản lý Quan trọng trong Kinh doanh cho những yêu cầu này.\n\n**Tài liệu tham khảo:**\n[Reliability in Azure SQL Database](https://learn.microsoft.com/en-us/azure/reliability/reliability-sql-database) · [Availability through local and zone redundancy - Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/high-availability-sla-local-zone-redundancy?view=azuresql-db)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 225",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/226-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-226",
    "questionNumber": 226,
    "text": "Contoso, Ltd. implements several Azure logic apps with HTTP triggers. The logic apps provide access to an on-premises web service.  \n  \nContoso establishes a partnership with Fabrikam, Inc. Fabrikam has no existing Azure Active Directory (Azure AD) tenant and uses third-party OAuth 2.0 identity management to authenticate its users.  \n  \nFabrikam developers plan to use a subset of the logic apps to build applications that integrate with Contoso's on-premises web service.  \n  \nYou need to design a solution that gives the Fabrikam developers access to the logic apps. The solution must meet these requirements:  \n  \n- Requests to the logic apps from the developers must be limited to lower rates than requests from Contoso users.  \n- The developers must be able to use their existing OAuth 2.0 provider to access the logic apps.  \n- The solution must **NOT** require changes to the logic apps.  \n- The solution must **NOT** use Azure AD guest accounts.  \n  \nWhat should you include in the solution?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Front Door"
      },
      {
        "key": "B",
        "text": "Azure AD Application Proxy"
      },
      {
        "key": "C",
        "text": "Azure AD business-to-business (B2B)"
      },
      {
        "key": "D",
        "text": "Azure API Management"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Quản lý API Azure có thể chạy trước các ứng dụng logic được kích hoạt HTTP mà không thay đổi cách triển khai của chúng. Chính sách giới hạn tỷ lệ của nó có thể thực thi tỷ lệ yêu cầu thấp hơn đối với người gọi Fabrikam và chính sách `validate-jwt` của nó có thể xác thực JWT từ nhà cung cấp nhận dạng OAuth 2.0/OpenID Connect bên thứ ba được hỗ trợ. Điều này tránh yêu cầu tài khoản khách Microsoft Entra ID.\n\n**Tài liệu tham khảo:**\n[Azure API Management rate-limit policy](https://learn.microsoft.com/en-us/azure/api-management/rate-limit-policy) · [Azure API Management validate-jwt policy](https://learn.microsoft.com/en-us/azure/api-management/validate-jwt-policy)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 226",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/227-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-227",
    "questionNumber": 227,
    "text": "You have an Azure subscription that includes an Azure Cosmos DB for NoSQL account named account1 and an Azure Synapse Analytics workspace named Workspace1. The account1 account has a container named Contained with the analytical store enabled.  \n  \nYou need to recommend a solution that processes the data stored in Contained in near-real-time (NRT) and writes the results to a data warehouse in Workspace1 by using a runtime engine in the workspace. The solution must minimize data movement.  \n  \nWhich pool in Workspace1 should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Apache Spark"
      },
      {
        "key": "B",
        "text": "serverless SQL"
      },
      {
        "key": "C",
        "text": "dedicated SQL"
      },
      {
        "key": "D",
        "text": "Data Explorer"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Apache Spark đọc trực tiếp kho phân tích Azure Cosmos DB để phân tích gần thời gian thực, thực hiện các phép biến đổi và tổng hợp trong Spark, đồng thời tải dữ liệu kết quả vào nhóm dữ liệu SQL chuyên dụng warehouse. Điều này sử dụng tích hợp cửa hàng phân tích thay vì sao chép dữ liệu nguồn trước tiên thông qua cửa hàng trung gian.\n\n**Tài liệu tham khảo:**\n[Copy data from Azure Cosmos DB into a dedicated SQL pool using Apache Spark](https://learn.microsoft.com/en-us/azure/synapse-analytics/synapse-link/how-to-copy-to-sql-pool) · [Interact with Azure Cosmos DB using Apache Spark 3 in Azure Synapse Link](https://learn.microsoft.com/en-us/azure/synapse-analytics/synapse-link/how-to-query-analytical-store-spark-3)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 227",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/228-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-228",
    "questionNumber": 228,
    "text": "Your company has an existing web app running on Azure virtual machines.  \n  \nYou must ensure that the app is protected from SQL injection attempts and uses a Layer 7 load balancer. The solution must minimize disruptions to the app's code.  \n  \nWhat should you recommend? Each service may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "azure_service",
        "text": "Azure service:",
        "correctAnswer": "B"
      },
      {
        "id": "feature",
        "text": "Feature:",
        "correctAnswer": "A"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Web Application Firewall (WAF)"
      },
      {
        "key": "B",
        "text": "Azure Application Gateway"
      },
      {
        "key": "C",
        "text": "Azure Load Balancer"
      },
      {
        "key": "D",
        "text": "Azure Traffic Manager"
      },
      {
        "key": "E",
        "text": "SSL offloading"
      },
      {
        "key": "F",
        "text": "URL-based content routing"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Web Application Firewall (WAF)"
      },
      {
        "key": "B",
        "text": "Azure Application Gateway"
      },
      {
        "key": "C",
        "text": "Azure Load Balancer"
      },
      {
        "key": "D",
        "text": "Azure Traffic Manager"
      },
      {
        "key": "E",
        "text": "SSL offloading"
      },
      {
        "key": "F",
        "text": "URL-based content routing"
      }
    ],
    "correctAnswers": [
      "azure_service=B",
      "feature=A"
    ],
    "explanation": "Azure Application Gateway là bộ cân bằng tải Lớp 7. Tính năng Tường lửa ứng dụng web (WAF) của nó cung cấp khả năng bảo vệ tập trung chống lại các hoạt động khai thác web phổ biến, bao gồm cả việc chèn SQL mà không yêu cầu thay đổi mã ứng dụng.\n\n**Tài liệu tham khảo:**\n[Azure Application Gateway overview](https://learn.microsoft.com/en-us/azure/application-gateway/overview) · [What is Azure Web Application Firewall on Azure Application Gateway?](https://learn.microsoft.com/en-us/azure/web-application-firewall/ag/ag-overview)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 228",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/229-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-229",
    "questionNumber": 229,
    "text": "You have an Azure subscription.  \n  \nYou are designing a solution for containerized apps. The solution must meet these requirements:  \n  \n- Automatically scale the apps by creating additional instances.  \n- Minimize administrative effort required to maintain nodes and clusters.  \n- Ensure that containerized apps are highly available across multiple availability zones.  \n- Provide a central location for lifecycle management and storage of container images.  \n  \nWhat should the solution include?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "run_apps",
        "text": "To run the containerized apps:",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      },
      {
        "id": "image_lifecycle",
        "text": "For the lifecycle management and storage of container images:",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "E"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Azure Container Apps"
      },
      {
        "key": "B",
        "text": "Azure Container Instances"
      },
      {
        "key": "C",
        "text": "Azure Container Registry"
      },
      {
        "key": "D",
        "text": "Azure Kubernetes Service (AKS)"
      },
      {
        "key": "E",
        "text": "Azure Service Fabric"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Azure Container Apps"
      },
      {
        "key": "B",
        "text": "Azure Container Instances"
      },
      {
        "key": "C",
        "text": "Azure Container Registry"
      },
      {
        "key": "D",
        "text": "Azure Kubernetes Service (AKS)"
      },
      {
        "key": "E",
        "text": "Azure Service Fabric"
      }
    ],
    "correctAnswers": [
      "run_apps=A",
      "image_lifecycle=C"
    ],
    "explanation": "Azure Container Apps là một nền tảng được quản lý hoàn toàn dành cho các ứng dụng được đóng gói hỗ trợ tự động mở rộng quy mô đồng thời tránh quản lý cụm và nút trực tiếp; nó có thể được triển khai với tính năng dự phòng vùng để có tính sẵn sàng cao. Azure Container Register lưu trữ tập trung các hình ảnh vùng chứa và cung cấp các khả năng về vòng đời của hình ảnh.\n\n**Tài liệu tham khảo:**\n[Azure Container Apps overview](https://learn.microsoft.com/en-us/azure/container-apps/overview) · [Azure Container Registry documentation](https://learn.microsoft.com/en-us/azure/container-registry/)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 229",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/230-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-230",
    "questionNumber": 230,
    "text": "You have an on-premises Microsoft SQL Server 2008 instance that hosts a 50-GB database.  \n  \nYou need to migrate the database to an Azure SQL Managed Instance. The solution must minimize downtime.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Migrate"
      },
      {
        "key": "B",
        "text": "Azure Data Studio"
      },
      {
        "key": "C",
        "text": "WANdisco LiveData Platform for Azure"
      },
      {
        "key": "D",
        "text": "SQL Server Management Studio (SSMS)"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Azure Data Studio hỗ trợ quy trình di chuyển Azure SQL để di chuyển cơ sở dữ liệu SQL Server sang Azure SQL Managed Instance. Khả năng di chuyển trực tuyến của nó sử dụng đồng bộ hóa dữ liệu liên tục trong quá trình di chuyển, do đó thời gian ngừng hoạt động được giới hạn ở lần chuyển đổi cuối cùng thay vì chuyển toàn bộ cơ sở dữ liệu 50 GB.\n\n**Tài liệu tham khảo:**\n[Migration overview: SQL Server to Azure SQL Managed Instance](https://learn.microsoft.com/en-us/data-migration/sql-server/managed-instance/overview)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 230",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/231-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-231",
    "questionNumber": 231,
    "text": "Your on-premises network contains an Active Directory Domain Services (AD DS) domain. The domain includes Server1, which hosts App1 using AD DS authentication. Remote users access App1 through a VPN connection to the on-premises network.  \n  \nYou have an Azure AD tenant that synchronizes with the AD DS domain by using Azure AD Connect.  \n  \nYou need to enable remote users to access App1 without using a VPN. The solution must meet the following requirements:  \n  \n- Ensure users authenticate by using Azure Multi-Factor Authentication (MFA).  \n- Minimize administrative effort.  \n  \nWhat should you include in the solution?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "azure_ad",
        "text": "In Azure AD:",
        "correctAnswer": "D",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      },
      {
        "id": "on_premises",
        "text": "On-premises:",
        "correctAnswer": "E",
        "choiceKeys": [
          "E",
          "F",
          "G"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "A managed identity"
      },
      {
        "key": "B",
        "text": "An access package"
      },
      {
        "key": "C",
        "text": "An app registration"
      },
      {
        "key": "D",
        "text": "An enterprise application"
      },
      {
        "key": "E",
        "text": "A server that runs Windows Server and has the Azure AD Application Proxy connector installed"
      },
      {
        "key": "F",
        "text": "A server that runs Windows Server and has the on-premises data gateway (standard mode) installed"
      },
      {
        "key": "G",
        "text": "A server that runs Windows Server and has the Web Application Proxy role service installed"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "A managed identity"
      },
      {
        "key": "B",
        "text": "An access package"
      },
      {
        "key": "C",
        "text": "An app registration"
      },
      {
        "key": "D",
        "text": "An enterprise application"
      },
      {
        "key": "E",
        "text": "A server that runs Windows Server and has the Azure AD Application Proxy connector installed"
      },
      {
        "key": "F",
        "text": "A server that runs Windows Server and has the on-premises data gateway (standard mode) installed"
      },
      {
        "key": "G",
        "text": "A server that runs Windows Server and has the Web Application Proxy role service installed"
      }
    ],
    "correctAnswers": [
      "azure_ad=D",
      "on_premises=E"
    ],
    "explanation": "Proxy ứng dụng Microsoft Entra xuất bản một cách an toàn các ứng dụng web tại chỗ để truy cập từ xa. Ứng dụng đã xuất bản là một ứng dụng doanh nghiệp và trình kết nối của nó là một tác nhân nhẹ được cài đặt trên Windows Server trong mạng riêng. Xác thực trước Azure AD hỗ trợ Truy cập có điều kiện và MFA trước khi yêu cầu đến ứng dụng tại chỗ, tránh truy cập VPN và giảm thiểu quản trị cơ sở hạ tầng.\n\n**Tài liệu tham khảo:**\n[Microsoft Entra application proxy](https://learn.microsoft.com/en-us/entra/identity/app-proxy/overview-what-is-app-proxy) · [Microsoft Entra Private Network Connectors](https://learn.microsoft.com/en-us/entra/global-secure-access/concept-connectors)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 231",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/232-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-232",
    "questionNumber": 232,
    "text": "Your on-premises network has a server named Server1 that hosts an ASP.NET application named App1.  \n  \nYou use a hybrid Azure Active Directory (Azure AD) deployment.  \n  \nRecommend a solution that ensures users authenticate with their Azure AD account and Azure Multi-Factor Authentication (MFA) when connecting to App1 from the internet.  \n  \nWhich three features should be deployed and configured, in order?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "step1",
        "text": "Slot 1:",
        "correctAnswer": "F"
      },
      {
        "id": "step2",
        "text": "Slot 2:",
        "correctAnswer": "G"
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
        "text": "a public Azure Load Balancer"
      },
      {
        "key": "B",
        "text": "a managed identity"
      },
      {
        "key": "C",
        "text": "an internal Azure Load Balancer"
      },
      {
        "key": "D",
        "text": "a Conditional Access policy"
      },
      {
        "key": "E",
        "text": "an Azure App Service plan"
      },
      {
        "key": "F",
        "text": "Azure AD Application Proxy"
      },
      {
        "key": "G",
        "text": "an Azure AD enterprise application"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "a public Azure Load Balancer"
      },
      {
        "key": "B",
        "text": "a managed identity"
      },
      {
        "key": "C",
        "text": "an internal Azure Load Balancer"
      },
      {
        "key": "D",
        "text": "a Conditional Access policy"
      },
      {
        "key": "E",
        "text": "an Azure App Service plan"
      },
      {
        "key": "F",
        "text": "Azure AD Application Proxy"
      },
      {
        "key": "G",
        "text": "an Azure AD enterprise application"
      }
    ],
    "correctAnswers": [
      "step1=F",
      "step2=G",
      "step3=D"
    ],
    "explanation": "Proxy ứng dụng Azure AD phát hành ứng dụng web tại chỗ một cách an toàn và hỗ trợ xác thực trước Azure AD. Việc xuất bản sẽ tạo/đặt cấu hình ứng dụng doanh nghiệp của ứng dụng (service principal), đây là mục tiêu cho Truy cập có điều kiện. Khi đó, chính sách Truy cập có điều kiện có thể yêu cầu Azure MFA đối với người dùng truy cập vào ứng dụng doanh nghiệp đó.\n\n**Tài liệu tham khảo:**\n[Microsoft Entra application proxy overview](https://learn.microsoft.com/en-us/entra/identity/app-proxy/overview-what-is-app-proxy) · [Microsoft Entra Conditional Access: Cloud apps, actions, and authentication context](https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-conditional-access-cloud-apps)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 232",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/233-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-233",
    "questionNumber": 233,
    "text": "You have an Azure Active Directory (Azure AD) tenant named contoso.com that contains a security group named Group1. Group1 is configured for assigned membership. Group1 has 50 members, including 20 guest users.  \n  \nYou need to recommend a solution to evaluate Group1 membership. The solution must meet these requirements:  \n  \n- The evaluation must automatically recur every three months.  \n- Every member must be able to state whether they need to remain in Group1.  \n- Users who state that they do not need to be in Group1 must be removed from Group1 automatically.  \n- Users who do not state whether they need to be in Group1 must be removed from Group1 automatically.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Implement Azure AD Identity Protection."
      },
      {
        "key": "B",
        "text": "Change the Membership type of Group1 to Dynamic User."
      },
      {
        "key": "C",
        "text": "Create an access review."
      },
      {
        "key": "D",
        "text": "Implement Azure AD Privileged Identity Management (PIM)."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Đánh giá truy cập Microsoft Entra hỗ trợ đánh giá định kỳ về tư cách thành viên nhóm, tự đánh giá của thành viên nhóm, tự động áp dụng các quyết định bị từ chối và tự động loại bỏ quyền truy cập đối với những người đánh giá không phản hồi khi kết quả đó được đặt cấu hình.\n\n**Tài liệu tham khảo:**\n[Create an access review of groups and applications](https://learn.microsoft.com/en-us/entra/id-governance/create-access-review) · [Plan a Microsoft Entra access reviews deployment](https://learn.microsoft.com/en-us/entra/id-governance/deploy-access-reviews)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 233",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/234-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-234",
    "questionNumber": 234,
    "text": "To meet Fabrikam's authentication requirements, what should you include in the solution?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "azure_ad_tenants",
        "text": "Minimum number of Azure AD tenants:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D",
          "E"
        ]
      },
      {
        "id": "custom_domains",
        "text": "Minimum number of custom domains to add:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D",
          "E"
        ]
      },
      {
        "id": "conditional_access_policies",
        "text": "Minimum number of conditional access policies to create:",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D",
          "E"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "1"
      },
      {
        "key": "C",
        "text": "2"
      },
      {
        "key": "D",
        "text": "3"
      },
      {
        "key": "E",
        "text": "4"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "1"
      },
      {
        "key": "C",
        "text": "2"
      },
      {
        "key": "D",
        "text": "3"
      },
      {
        "key": "E",
        "text": "4"
      }
    ],
    "correctAnswers": [
      "azure_ad_tenants=B",
      "custom_domains=B",
      "conditional_access_policies=C"
    ],
    "explanation": "Một đối tượng thuê Entra có thể lưu trữ các danh tính kết hợp cần thiết và corp.fabrikam.com phải được thêm và xác minh để sử dụng hậu tố UPN đó. Một chính sách Truy cập có điều kiện yêu cầu MFA để truy cập quản trị cổng thông tin Azure; một chính sách riêng sẽ chặn quyền truy cập từ bên ngoài công ty vì không thể kết hợp kiểm soát chặn với yêu cầu cấp MFA trong cùng một chính sách.\n\n**Tài liệu tham khảo:**\n[Manage custom domain names in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/users/domains-manage) · [Conditional Access policy components](https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-conditional-access-policies)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 234",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/235-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-235",
    "questionNumber": 235,
    "text": "You have an Azure AD tenant named contoso.com that contains a security group named Group1. Group1 is configured with assigned memberships and has 50 members, including 20 guest users.  \n  \nYou need to recommend a solution to evaluate Group1 membership. The solution must meet these requirements:  \n  \n- The evaluation must recur automatically every three months.  \n- Each member must be able to indicate whether they still need to belong to Group1.  \n- Members who indicate that they no longer need to be in Group1 must be removed automatically.  \n- Members who do not indicate whether they still need to be in Group1 must be removed automatically.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Implement Azure AD Identity Protection."
      },
      {
        "key": "B",
        "text": "Change the Membership type of Group1 to Dynamic User."
      },
      {
        "key": "C",
        "text": "Create an access review."
      },
      {
        "key": "D",
        "text": "Implement Azure AD Privileged Identity Management (PIM)."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Đánh giá truy cập Microsoft Entra hỗ trợ đánh giá định kỳ hàng quý của các thành viên nhóm bảo mật và tự đánh giá của từng thành viên. Khi bật ứng dụng tự động kết quả, tư cách thành viên bị từ chối sẽ tự động bị xóa; cài đặt không phản hồi để xóa quyền truy cập cũng sẽ xóa các thành viên không phản hồi.\n\n**Tài liệu tham khảo:**\n[What are access reviews? - Microsoft Entra](https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-overview) · [Create an access review of groups and applications](https://learn.microsoft.com/en-us/entra/id-governance/create-access-review)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 235",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/236-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-236",
    "questionNumber": 236,
    "text": "You have an app named App1 that uses two on-premises Microsoft SQL Server databases named DB1 and DB2.  \n  \nYou plan to migrate DB1 and DB2 to Azure.  \n  \nYou need to recommend an Azure solution to host DB1 and DB2. The solution must meet these requirements:  \n  \n- Support server-side transactions across DB1 and DB2.  \n- Minimize the administrative effort required to update the solution.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "two Azure SQL databases in an elastic pool"
      },
      {
        "key": "B",
        "text": "two databases on the same Azure SQL managed instance"
      },
      {
        "key": "C",
        "text": "two databases on the same SQL Server instance on an Azure virtual machine"
      },
      {
        "key": "D",
        "text": "two Azure SQL databases on different Azure SQL Database servers"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Azure SQL Managed Instance hỗ trợ các giao dịch phân tán phía máy chủ được viết bằng Transact-SQL trên cơ sở dữ liệu. Là một dịch vụ PaaS được quản lý, dịch vụ này cũng giảm thiểu việc quản trị cập nhật hệ điều hành và SQL Server so với SQL Server được lưu trữ trên Azure virtual machine.\n\n**Tài liệu tham khảo:**\n[Distributed transactions across cloud databases](https://learn.microsoft.com/en-us/azure/azure-sql/database/elastic-transactions-overview?view=azuresql) · [Distributed Transaction Coordinator (DTC) for Azure SQL Managed Instance](https://learn.microsoft.com/en-us/azure/azure-sql/managed-instance/distributed-transaction-coordinator-dtc?view=azuresql)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 236",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/237-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-237",
    "questionNumber": 237,
    "text": "Your on-premises datacenter contains Server1, which runs Microsoft SQL Server 2022. Server1 hosts a 30-TB customer-data database named DB1. It also runs App1, a custom application that validates DB1 record compliance. App1 must run on the same server as DB1.  \n  \nYou have an Azure subscription.  \n  \nYou need to migrate DB1 to Azure while minimizing administrative effort.  \n  \nChoose the service for DB1 and the migration tool.",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "migrate_to",
        "text": "Migrate to:",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "by_using",
        "text": "By using:",
        "correctAnswer": "D",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Azure SQL Database"
      },
      {
        "key": "B",
        "text": "Azure SQL Managed Instance"
      },
      {
        "key": "C",
        "text": "SQL Server on Azure Virtual Machines"
      },
      {
        "key": "D",
        "text": "Azure Database Migration Service"
      },
      {
        "key": "E",
        "text": "Azure Migrate"
      },
      {
        "key": "F",
        "text": "The Azure SQL Migration extension for Azure Data Studio"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Azure SQL Database"
      },
      {
        "key": "B",
        "text": "Azure SQL Managed Instance"
      },
      {
        "key": "C",
        "text": "SQL Server on Azure Virtual Machines"
      },
      {
        "key": "D",
        "text": "Azure Database Migration Service"
      },
      {
        "key": "E",
        "text": "Azure Migrate"
      },
      {
        "key": "F",
        "text": "The Azure SQL Migration extension for Azure Data Studio"
      }
    ],
    "correctAnswers": [
      "migrate_to=C",
      "by_using=D"
    ],
    "explanation": "SQL Server trên Azure Virtual Machines cho phép ứng dụng tùy chỉnh và cơ sở dữ liệu SQL Server được đồng lưu trữ trên cùng một máy chủ. Dịch vụ di chuyển cơ sở dữ liệu Azure cung cấp quy trình làm việc được quản lý để di chuyển cơ sở dữ liệu SQL Server tại chỗ sang SQL Server trên Azure virtual machines.\n\n**Tài liệu tham khảo:**\n[Tutorial: Migrate SQL Server to SQL Server on an Azure Virtual Machine with Azure DMS (online)](https://learn.microsoft.com/en-us/data-migration/sql-server/virtual-machines/database-migration-service-online) · [Azure Database Migration Service documentation](https://learn.microsoft.com/en-us/azure/dms/)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 237",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/238-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-238",
    "questionNumber": 238,
    "text": "Solution: An Azure virtual machine scale set that uses autoscaling is deployed.  \n  \nDoes this satisfy the goal?",
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
    "explanation": "Tự động thay đổi quy mô Bộ quy mô máy ảo điều chỉnh công suất phiên bản trong khu vực triển khai của nó; nó không tạo ra triển khai khu vực thứ hai hoặc đặt cấu hình chuyển đổi dự phòng giữa các khu vực. Do đó, giải pháp không cung cấp khả năng dự phòng khi vùng Azure bị lỗi, mặc dù máy ảo cho phép quản trị hệ điều hành và có thể chạy.NET Framework đầy đủ.\n\n**Tài liệu tham khảo:**\n[Reliability in Azure Virtual Machine Scale Sets](https://learn.microsoft.com/en-us/azure/reliability/reliability-virtual-machine-scale-sets) · [Azure Virtual Machine Scale Sets overview](https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/overview)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 238",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/239-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-239",
    "questionNumber": 239,
    "text": "Solution: You deploy two Azure virtual machines across two Azure regions and deploy an Azure Application Gateway.  \n  \nDoes this satisfy the goal?",
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
    "explanation": "Azure Application Gateway v2 là dịch vụ một vùng và sẽ không khả dụng nếu vùng của nó bị lỗi. Khả năng phục hồi đa vùng yêu cầu các cổng riêng biệt ở các vùng mục tiêu và dịch vụ cân bằng tải toàn cầu, chẳng hạn như Azure Traffic Manager hoặc Azure Front Door, để định tuyến và xử lý sự cố lưu lượng giữa chúng.\n\n**Tài liệu tham khảo:**\n[Reliability in Azure Application Gateway v2](https://learn.microsoft.com/en-us/azure/reliability/reliability-application-gateway-v2)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 239",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/240-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-240",
    "questionNumber": 240,
    "text": "Solution: Deploy two Azure virtual machines in two Azure regions and create an Azure Traffic Manager profile.  \n  \nDoes this satisfy the goal?",
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
    "explanation": "Azure virtual machines cung cấp khả năng kiểm soát hệ điều hành khách và có thể lưu trữ các ứng dụng yêu cầu.NET Framework đầy đủ. Với một VM ở mỗi trong hai khu vực, Azure Traffic Manager có thể giám sát các điểm cuối và định tuyến lưu lượng truy cập đến phiên bản khu vực hoạt động tốt trong thời gian mất điện khu vực, cung cấp khả năng dự phòng khu vực cần thiết.\n\n**Tài liệu tham khảo:**\n[Azure Traffic Manager FAQ](https://learn.microsoft.com/en-us/azure/traffic-manager/traffic-manager-faqs) · [Quickstart: Create a Traffic Manager profile using the Azure portal](https://learn.microsoft.com/en-us/azure/traffic-manager/quickstart-create-traffic-manager-profile)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 240",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/241-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-241",
    "questionNumber": 241,
    "text": "Solution: You deploy a web app by using an Isolated App Service plan.  \n  \nDoes this satisfy the goal?",
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
    "explanation": "Gói Dịch vụ ứng dụng biệt lập vẫn là nền tảng Azure App Service được quản lý, thay vì cơ sở hạ tầng hệ điều hành do quản trị viên kiểm soát. Do đó, nó không cung cấp cho quản trị viên quyền truy cập hệ điều hành để cài đặt các phần phụ thuộc ứng dụng tùy chỉnh và việc triển khai theo khu vực duy nhất không cung cấp khả năng dự phòng khi xảy ra lỗi ở khu vực Azure. Cần có một thiết kế đa vùng về cơ sở hạ tầng với khả năng kiểm soát hệ điều hành cần thiết.\n\n**Tài liệu tham khảo:**\n[What are Azure App Service plans?](https://learn.microsoft.com/en-us/azure/app-service/overview-hosting-plans) · [Reliability in Azure App Service Environment](https://learn.microsoft.com/en-us/azure/reliability/reliability-app-service-environment)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 241",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/242-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-242",
    "questionNumber": 242,
    "text": "You must design a highly available Azure SQL database that meets these requirements:  \n  \n- Failover between database replicas must take place with no data loss.  \n- The database must stay available if a zone outage occurs.  \n- Costs must be kept to a minimum.  \n  \nWhich deployment option should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure SQL Managed Instance Business Critical"
      },
      {
        "key": "B",
        "text": "Azure SQL Managed Instance General Purpose"
      },
      {
        "key": "C",
        "text": "Azure SQL Database Standard"
      },
      {
        "key": "D",
        "text": "Azure SQL Database Premium"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Azure SQL Database Premium hỗ trợ dự phòng vùng, phân phối bản sao cơ sở dữ liệu đồng bộ trên availability zones. Tính năng sao chép đồng bộ sẽ bảo toàn dữ liệu đã cam kết trong quá trình chuyển đổi dự phòng và tính năng dự phòng vùng giúp cơ sở dữ liệu có khả năng phục hồi khi vùng sẵn sàng ngừng hoạt động. Tiêu chuẩn Azure SQL Database không hỗ trợ dự phòng vùng, trong khi phiên bản được quản lý quan trọng trong kinh doanh cung cấp các khả năng vượt xa những khả năng được yêu cầu với chi phí cao hơn.\n\n**Tài liệu tham khảo:**\n[Reliability in Azure SQL Database](https://learn.microsoft.com/en-us/azure/reliability/reliability-sql-database)",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 242",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/243-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-243",
    "questionNumber": 243,
    "text": "Solution: You recommend using an Azure Policy initiative to enforce the location restriction.  \n  \nDoes this meet the goal?",
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
    "explanation": "Sáng kiến ​​Chính sách Azure có thể bao gồm chính sách **Vị trí được phép** tích hợp sẵn và chỉ định các giá trị vùng được phép. Chính sách đó sử dụng hiệu ứng từ chối để ngăn chặn việc triển khai tài nguyên bên ngoài các vị trí được phê duyệt, thực thi các yêu cầu tuân thủ địa lý đối với các phiên bản Dịch vụ ứng dụng.\n\n**Tài liệu tham khảo:**\n[Azure Policy overview](https://learn.microsoft.com/en-us/azure/governance/policy/overview) · [Tutorial: Create and manage policies to enforce compliance](https://learn.microsoft.com/en-us/azure/governance/policy/tutorials/create-and-manage)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 243",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/244-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-244",
    "questionNumber": 244,
    "text": "Solution: You recommend creating resource groups based on location and applying resource locks to those resource groups.  \n  \nDoes this meet the goal?",
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
    "explanation": "Khóa tài nguyên Azure bảo vệ tài nguyên khỏi bị xóa hoặc sửa đổi; chúng không giới hạn các vùng Azure nơi tài nguyên có thể được tạo. Chỉ thực thi triển khai ở các khu vực được phê duyệt yêu cầu gán Chính sách Azure nhằm hạn chế các vị trí được phép.\n\n**Tài liệu tham khảo:**\n[Lock your Azure resources to protect your infrastructure](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources) · [Tutorial: Disallow resource types in your cloud environment](https://learn.microsoft.com/en-us/azure/governance/policy/tutorials/disallowed-resources)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 244",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/245-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-245",
    "questionNumber": 245,
    "text": "Solution: You recommend using the Regulatory compliance dashboard in Microsoft Defender for Cloud.  \n  \nDoes this satisfy the goal?",
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
    "explanation": "Bảng thông tin tuân thủ quy định liên tục đánh giá các tài nguyên dựa trên các biện pháp kiểm soát tuân thủ và báo cáo trạng thái tuân thủ của chúng nhưng không ngăn cản việc triển khai bên ngoài các khu vực được chỉ định. Chính sách Azure có thể thực thi rằng tài nguyên Azure chỉ được triển khai ở các khu vực được phép.\n\n**Tài liệu tham khảo:**\n[Regulatory compliance standards in Microsoft Defender for Cloud](https://learn.microsoft.com/en-ie/azure/defender-for-cloud/concept-regulatory-compliance-standards) · [What is Azure Policy?](https://learn.microsoft.com/en-us/azure/governance/policy/overview)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 245",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/246-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-246",
    "questionNumber": 246,
    "text": "Solution: You recommend using an Azure Policy initiative that enforces the location of resource groups.  \n  \nDoes this meet the goal?",
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
    "explanation": "Việc thực thi vị trí nhóm tài nguyên không kiểm soát vị trí triển khai của các tài nguyên có trong các nhóm đó. Chính sách Azure phải tự đánh giá và hạn chế vị trí của các tài nguyên Dịch vụ ứng dụng để thực thi các khu vực đã được phê duyệt và cùng vị trí khu vực. Các tài liệu của Microsoft có chính sách thực thi vị trí trên các nhóm tài nguyên nhắm mục tiêu cụ thể đến loại tài nguyên `Microsoft.Resources/subscriptions/resourceGroups`, trong khi chính sách **Vị trí được phép** tích hợp hạn chế vị trí cho các tài nguyên mới.\n\n**Tài liệu tham khảo:**\n[Azure Policy definition structure basics](https://learn.microsoft.com/en-us/azure/governance/policy/concepts/definition-structure-basics) · [Azure Policy overview](https://learn.microsoft.com/en-us/azure/governance/policy/overview)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 246",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/247-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-247",
    "questionNumber": 247,
    "text": "You have the resources shown in the following table:  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783707860428-t3uny355.png)  \n  \nCDB1 hosts a container that stores operational data that is continuously updated.  \n  \nYou are designing a solution that will use AS1 to analyze the operational data each day.  \n  \nYou need to recommend a solution that analyzes the data without affecting the performance of the operational data store.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Cosmos DB change feed"
      },
      {
        "key": "B",
        "text": "Azure Data Factory with Azure Cosmos DB and Azure Synapse Analytics connectors"
      },
      {
        "key": "C",
        "text": "Azure Synapse Link for Azure Cosmos DB"
      },
      {
        "key": "D",
        "text": "Azure Synapse Analytics with PolyBase data loading"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Liên kết Azure Synapse cho Azure Cosmos DB hiển thị một kho phân tích riêng biệt cho Azure Synapse Analytics. Các truy vấn phân tích chạy độc lập với khối lượng công việc giao dịch của Cosmos DB và không tiêu tốn thông lượng được cung cấp cho kho dữ liệu vận hành.\n\n**Tài liệu tham khảo:**\n[What is Azure Synapse Link for Azure Cosmos DB?](https://learn.microsoft.com/en-us/azure/cosmos-db/synapse-link) · [What is Azure Cosmos DB analytical store?](https://learn.microsoft.com/en-us/azure/cosmos-db/analytical-store-introduction)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783707860428-t3uny355.png",
    "sourceTitle": "Examcademy AZ-305 Question 247",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/248-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-248",
    "questionNumber": 248,
    "text": "You are planning an Azure Storage solution for sensitive data. The data will be accessed daily, and the dataset is less than 10 GB.  \n  \nRecommend a storage solution that meets these requirements:  \n  \n- All data written to storage must be retained for five years.  \n- Once written, data can only be read; modifications and deletions must be prevented.  \n- After five years, data may be deleted but must never be modified.  \n- Data-access charges must be minimized.",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "storage_account_type",
        "text": "Storage account type:",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "configuration_to_prevent_modifications_and_deletions",
        "text": "Configuration to prevent modifications and deletions:",
        "correctAnswer": "E",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Premium block blobs"
      },
      {
        "key": "B",
        "text": "General purpose v2 with Cool access tier for blobs"
      },
      {
        "key": "C",
        "text": "General purpose v2 with Hot access tier for blobs"
      },
      {
        "key": "D",
        "text": "Container access level"
      },
      {
        "key": "E",
        "text": "Container access policy"
      },
      {
        "key": "F",
        "text": "Storage account resource lock"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Premium block blobs"
      },
      {
        "key": "B",
        "text": "General purpose v2 with Cool access tier for blobs"
      },
      {
        "key": "C",
        "text": "General purpose v2 with Hot access tier for blobs"
      },
      {
        "key": "D",
        "text": "Container access level"
      },
      {
        "key": "E",
        "text": "Container access policy"
      },
      {
        "key": "F",
        "text": "Storage account resource lock"
      }
    ],
    "correctAnswers": [
      "storage_account_type=C",
      "configuration_to_prevent_modifications_and_deletions=E"
    ],
    "explanation": "Hot tier được tối ưu hóa cho dữ liệu được truy cập thường xuyên và có phí truy cập và giao dịch thấp hơn Cool tier. Chính sách bất biến dựa trên thời gian ở cấp vùng chứa cung cấp khả năng bảo vệ WORM: không thể sửa đổi hoặc xóa các đốm màu trong quá trình lưu giữ, sau đó có thể xóa nhưng không được ghi đè sau khi hết thời gian lưu giữ. Khóa Trình quản lý tài nguyên Azure không bảo vệ các đốm màu khỏi các hoạt động xóa hoặc ghi đè mặt phẳng dữ liệu.\n\n**Tài liệu tham khảo:**\n[Access tiers for blob data - Azure Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview) · [Store business-critical blob data with immutable storage in a write once, read many (WORM) state](https://learn.microsoft.com/en-us/azure/storage/blobs/immutable-storage-overview)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 248",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/249-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-249",
    "questionNumber": 249,
    "text": "You must design a highly available Azure SQL database that satisfies these requirements:  \n  \n- Failover between database replicas must take place with no data loss.  \n- The database must stay available if a zone outage occurs.  \n- Costs must be kept to a minimum.  \n  \nWhich deployment option should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure SQL Managed Instance General Purpose"
      },
      {
        "key": "B",
        "text": "Azure SQL Database Hyperscale"
      },
      {
        "key": "C",
        "text": "Azure SQL Database Premium"
      },
      {
        "key": "D",
        "text": "Azure SQL Managed Instance Business Critical"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Azure SQL Database Premium có thể được cấu hình để dự phòng vùng, đặt các bản sao trong availability zones riêng biệt. Bản sao chính của nó vẫn duy trì các thay đổi đối với các bản sao phụ đã được đồng bộ hóa trước khi thực hiện giao dịch, đảm bảo có sẵn bản sao được đồng bộ hóa hoàn toàn để chuyển đổi dự phòng; Tài liệu Azure no dự kiến ​​sẽ mất dữ liệu trong quá trình chuyển đổi dự phòng vùng. Premium đã cung cấp nhiều bản sao, do đó việc phân phối chúng trên các vùng sẽ phát sinh thêm phí dự phòng vùng no.\n\n**Tài liệu tham khảo:**\n[Reliability in Azure SQL Database](https://learn.microsoft.com/en-us/azure/reliability/reliability-sql-database)",
    "category": "Design Business Continuity Solutions",
    "tags": [
      "AZ-305",
      "Design Business Continuity Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 249",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/250-design-business-continuity-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-250",
    "questionNumber": 250,
    "text": "You need to configure an Azure Policy that ensures Azure SQL databases have Transparent Data Encryption (TDE) enabled and meets the security and compliance requirements.  \n  \nWhich three actions should you perform, in order?",
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
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Create an Azure policy definition that uses the deployIfNotExists effect."
      },
      {
        "key": "B",
        "text": "Invoke a remediation task."
      },
      {
        "key": "C",
        "text": "Create an Azure policy definition that uses the Modify effect"
      },
      {
        "key": "D",
        "text": "Create an Azure policy assignment."
      },
      {
        "key": "E",
        "text": "Create a user-assigned managed identity."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Create an Azure policy definition that uses the deployIfNotExists effect."
      },
      {
        "key": "B",
        "text": "Invoke a remediation task."
      },
      {
        "key": "C",
        "text": "Create an Azure policy definition that uses the Modify effect"
      },
      {
        "key": "D",
        "text": "Create an Azure policy assignment."
      },
      {
        "key": "E",
        "text": "Create a user-assigned managed identity."
      }
    ],
    "correctAnswers": [
      "step1=A",
      "step2=D",
      "step3=B"
    ],
    "explanation": "TDE được thực thi bằng cách triển khai cấu hình TransparentDataEncryption Azure SQL Database khi cấu hình này bị thiếu hoặc không tuân thủ, đây là mục đích của chính sách triển khaiIfNotExists. Việc khắc phục các tài nguyên hiện có yêu cầu managed identity của chính sách; việc chỉ định có thể sử dụng danh tính do hệ thống chỉ định, do đó, danh tính riêng do người dùng chỉ định là không cần thiết. Sau đó, tác vụ khắc phục sẽ triển khai cấu hình của chính sách tới cơ sở dữ liệu không tuân thủ hiện có.\n\n**Tài liệu tham khảo:**\n[Remediate non-compliant resources - Azure Policy](https://learn.microsoft.com/en-us/azure/governance/policy/how-to/remediate-resources) · [Azure Policy deployIfNotExists effect](https://learn.microsoft.com/en-us/azure/governance/policy/concepts/effect-deploy-if-not-exists)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 250",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/251-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-251",
    "questionNumber": 251,
    "text": "You have an Azure subscription named Sub1 linked to an Azure AD tenant named contoso.com.  \n  \nYou plan to deploy two ASP.NET Core apps, App1 and App2, to 100 virtual machines in Sub1. Users will sign in to both apps by using their contoso.com credentials.  \n  \nApp1 needs read permission to access the signed-in user's calendar. App2 needs write permission to access the signed-in user's calendar.  \n  \nRecommend an authentication and authorization solution that uses least privilege and minimizes administrative effort.",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "authentication",
        "text": "Authentication:",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "authorization",
        "text": "Authorization:",
        "correctAnswer": "F",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Application registration in Azure AD"
      },
      {
        "key": "B",
        "text": "A system-assigned managed identity"
      },
      {
        "key": "C",
        "text": "A user-assigned managed identity"
      },
      {
        "key": "D",
        "text": "Application permissions"
      },
      {
        "key": "E",
        "text": "Azure role-based access control (Azure RBAC)"
      },
      {
        "key": "F",
        "text": "Delegated permissions"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Application registration in Azure AD"
      },
      {
        "key": "B",
        "text": "A system-assigned managed identity"
      },
      {
        "key": "C",
        "text": "A user-assigned managed identity"
      },
      {
        "key": "D",
        "text": "Application permissions"
      },
      {
        "key": "E",
        "text": "Azure role-based access control (Azure RBAC)"
      },
      {
        "key": "F",
        "text": "Delegated permissions"
      }
    ],
    "correctAnswers": [
      "authentication=A",
      "authorization=F"
    ],
    "explanation": "Đăng ký ứng dụng Azure AD sẽ đặt cấu hình ứng dụng ASP.NET Core để đăng nhập vào người dùng Microsoft Entra và nhận mã thông báo. Các quyền Microsoft Graph được ủy quyền cho phép mỗi ứng dụng thay mặt người dùng đó truy cập vào lịch của người dùng đã đăng nhập. Chúng có thể có phạm vi đặc quyền tối thiểu, chẳng hạn như Calendars.Read cho App1 và Calendars.ReadWrite cho App2; quyền của ứng dụng là quyền truy cập chỉ dành cho ứng dụng và Azure RBAC không cấp quyền truy cập lịch Microsoft Graph.\n\n**Tài liệu tham khảo:**\n[Overview of Microsoft Graph permissions](https://learn.microsoft.com/en-us/graph/permissions-overview) · [How to register an app in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 251",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/252-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-252",
    "questionNumber": 252,
    "text": "You have an Azure subscription that contains 100 virtual machines running Windows Server 2022 with the Azure Monitor Agent installed.  \n  \nRecommend a solution that meets these requirements:  \n  \n- Forward JSON-formatted logs from the virtual machines to a Log Analytics workspace.  \n- Transform the logs and store the data in a table in the Log Analytics workspace.  \n  \nWhat should be included in the recommendation?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "forward_logs",
        "text": "To forward the logs:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "transform_store",
        "text": "To transform the logs and store the data:",
        "correctAnswer": "D",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "A linked storage account for the Log Analytics workspace"
      },
      {
        "key": "B",
        "text": "An Azure Monitor data collection endpoint"
      },
      {
        "key": "C",
        "text": "A service endpoint"
      },
      {
        "key": "D",
        "text": "A KQL query"
      },
      {
        "key": "E",
        "text": "A WQL query"
      },
      {
        "key": "F",
        "text": "An XPath query"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "A linked storage account for the Log Analytics workspace"
      },
      {
        "key": "B",
        "text": "An Azure Monitor data collection endpoint"
      },
      {
        "key": "C",
        "text": "A service endpoint"
      },
      {
        "key": "D",
        "text": "A KQL query"
      },
      {
        "key": "E",
        "text": "A WQL query"
      },
      {
        "key": "F",
        "text": "An XPath query"
      }
    ],
    "correctAnswers": [
      "forward_logs=B",
      "transform_store=D"
    ],
    "explanation": "Điểm cuối thu thập dữ liệu Azure Monitor cung cấp điểm cuối để nhập nhật ký và cấu hình Tác nhân Azure Monitor. Chuyển đổi là các câu lệnh KQL trong quy tắc thu thập dữ liệu sửa đổi các bản ghi đến trước khi Azure Monitor gửi chúng đến không gian làm việc và bảng Log Analytics đích.\n\n**Tài liệu tham khảo:**\n[Data collection endpoints in Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/data-collection/data-collection-endpoint-overview) · [Transformations in Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/data-collection/data-collection-transformations)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 252",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/253-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-253",
    "questionNumber": 253,
    "text": "You plan to deploy an Azure SQL database that will store Personally Identifiable Information (PII).  \n  \nYou need to ensure that only privileged users are able to view the PII. What should you include in the solution?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "dynamic data masking"
      },
      {
        "key": "B",
        "text": "role-based access control (RBAC)"
      },
      {
        "key": "C",
        "text": "Data Discovery & Classification"
      },
      {
        "key": "D",
        "text": "Transparent Data Encryption (TDE)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Tính năng che giấu dữ liệu động hạn chế việc hiển thị các cột nhạy cảm bằng cách trả về các giá trị bị che giấu cho người dùng không có đặc quyền trong khi người dùng có đặc quyền có thể được cấp quyền xem dữ liệu được che giấu. Mã hóa dữ liệu minh bạch bảo vệ dữ liệu ở trạng thái lưu trữ, Khám phá & phân loại dữ liệu xác định và gắn nhãn dữ liệu nhạy cảm và Azure RBAC không cung cấp tính năng che giấu kết quả truy vấn ở cấp độ cột. [Microsoft Learn: Dynamic data masking](https://learn.microsoft.com/en-us/azure/azure-sql/database/dynamic-data-masking-overview?view=azuresql)\n\n**Tài liệu tham khảo:**\n[Microsoft Learn — Dynamic data masking](https://learn.microsoft.com/en-us/azure/azure-sql/database/dynamic-data-masking-overview?view=azuresql)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 253",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/254-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-254",
    "questionNumber": 254,
    "text": "You have several Azure App Service web apps that use Azure Key Vault to hold data-encryption keys. Several departments have the following requests to support the web apps:  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783707502059-t2mym6qv.png)  \n  \nWhich service should be recommended for each department’s request?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "security",
        "text": "Security:",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      },
      {
        "id": "development",
        "text": "Development:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      },
      {
        "id": "quality_assurance",
        "text": "Quality Assurance:",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Azure AD Privileged Identity Management"
      },
      {
        "key": "B",
        "text": "Azure Managed Identity"
      },
      {
        "key": "C",
        "text": "Azure AD Connect"
      },
      {
        "key": "D",
        "text": "Azure AD Identity Protection"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Azure AD Privileged Identity Management"
      },
      {
        "key": "B",
        "text": "Azure Managed Identity"
      },
      {
        "key": "C",
        "text": "Azure AD Connect"
      },
      {
        "key": "D",
        "text": "Azure AD Identity Protection"
      }
    ],
    "correctAnswers": [
      "security=A",
      "development=B",
      "quality_assurance=A"
    ],
    "explanation": "Quản lý danh tính đặc quyền Azure AD hỗ trợ kích hoạt vai trò đặc quyền đúng lúc và dựa trên phê duyệt, biện minh kích hoạt, cảnh báo phân công vai trò, đánh giá quyền truy cập và lịch sử kiểm tra. Azure Managed Identity cho phép ứng dụng Dịch vụ ứng dụng nhận được mã thông báo Microsoft Entra cho Azure Key Vault; cấp cho danh tính đó một vai trò Key Vault thích hợp để lấy chìa khóa. Azure AD Connect đồng bộ hóa danh tính, trong khi Azure AD Identity Protection phát hiện và khắc phục rủi ro danh tính, do đó không đáp ứng được các chức năng quản lý quyền truy cập được yêu cầu này.\n\n**Tài liệu tham khảo:**\n[What is Microsoft Entra Privileged Identity Management?](https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure) · [Use managed identities for App Service and Azure Functions](https://learn.microsoft.com/en-us/azure/app-service/overview-managed-identity)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783707502059-t2mym6qv.png",
    "sourceTitle": "Examcademy AZ-305 Question 254",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/255-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-255",
    "questionNumber": 255,
    "text": "You are designing a governance solution for Azure.  \n  \nAll Azure resources must be readily identifiable by the following operational information: environment, owner, department, and cost center.  \n  \nYou need to ensure that the operational information can be used when generating reports for the Azure resources.  \n  \nWhat should you include in the solution?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "an Azure data catalog that uses the Azure REST API as a data source"
      },
      {
        "key": "B",
        "text": "an Azure management group that uses parent groups to create a hierarchy"
      },
      {
        "key": "C",
        "text": "an Azure policy that enforces tagging rules"
      },
      {
        "key": "D",
        "text": "Azure Active Directory (Azure AD) administrative units"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Thẻ Azure cung cấp siêu dữ liệu tài nguyên để phân loại và báo cáo hoạt động, bao gồm các giá trị như môi trường, chủ sở hữu, bộ phận và trung tâm chi phí. Chính sách Azure có thể thực thi các quy tắc thẻ nhất quán, bao gồm yêu cầu hoặc thêm thẻ vào tài nguyên trên quy mô lớn.\n\n**Tài liệu tham khảo:**\n[Overview of Azure Policy](https://learn.microsoft.com/en-us/azure/governance/policy/overview) · [Tutorial: Manage tag governance with Azure Policy](https://learn.microsoft.com/en-us/azure/governance/policy/tutorials/govern-tags)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 255",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/256-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-256",
    "questionNumber": 256,
    "text": "You have an on-premises line-of-business (LOB) application that uses a Microsoft SQL Server instance for its backend.  \n  \nYou plan to migrate the on-premises SQL Server instance to Azure virtual machines.  \n  \nYou need to recommend a highly available SQL Server deployment that meets these requirements:  \n  \n- Minimizes costs  \n- Minimizes failover time if a single server fails  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783708094177-s6nxdupd.png)  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "an Always On availability group that has premium storage disks and a virtual network name (VNN)"
      },
      {
        "key": "B",
        "text": "an Always On Failover Cluster Instance that has a virtual network name (VNN) and a standard file share"
      },
      {
        "key": "C",
        "text": "an Always On availability group that has premium storage disks and a distributed network name (DNN)"
      },
      {
        "key": "D",
        "text": "an Always On Failover Cluster Instance that has a virtual network name (VNN) and a premium file share"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Nhóm sẵn sàng Luôn bật với trình nghe tên mạng phân tán (DNN) sẽ tránh được Azure Load Balancer mà trình nghe tên mạng ảo (VNN) yêu cầu trong quá trình triển khai một mạng con. Việc loại bỏ phần phụ thuộc đó sẽ làm giảm chi phí triển khai và quản lý, đồng thời tránh tình trạng chậm trễ trong thăm dò tình trạng của bộ cân bằng tải, giúp chuyển đổi dự phòng nhanh hơn. Các nhóm khả dụng bảo vệ ở cấp cơ sở dữ liệu mà không cần dung lượng lưu trữ dùng chung cho phiên bản cụm chuyển đổi dự phòng. Định cấu hình trình nghe DNN cho nhóm khả dụng\n\n**Tài liệu tham khảo:**\n- [Configure a DNN listener for an availability group](https://learn.microsoft.com/en-us/azure/azure-sql/virtual-machines/windows/availability-group-distributed-network-name-dnn-listener-configure?view=azuresql)\n- [Always On availability groups on SQL Server on Azure VMs](https://learn.microsoft.com/en-us/azure/azure-sql/virtual-machines/windows/availability-group-overview?view=azuresql-vm)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783708094177-s6nxdupd.png",
    "sourceTitle": "Examcademy AZ-305 Question 256",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/257-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-257",
    "questionNumber": 257,
    "text": "Solution: Use Azure Advisor for network-traffic analysis.  \n  \nDoes this satisfy the goal?",
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
    "explanation": "Azure Advisor không xác định liệu các gói cụ thể đến hoặc từ máy ảo được cho phép hay bị từ chối. Xác minh luồng IP của Azure Network Watcher thực hiện chẩn đoán đó bằng cách đánh giá các quy tắc quản trị và bảo mật đã định cấu hình, đồng thời trả về kết quả được phép hoặc bị từ chối.\n\n**Tài liệu tham khảo:**\n[IP flow verify overview — Azure Network Watcher](https://learn.microsoft.com/en-us/azure/network-watcher/ip-flow-verify-overview)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 257",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/258-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-258",
    "questionNumber": 258,
    "text": "Solution: Use Azure Traffic Analytics in Azure Network Watcher to analyze network traffic.  \n  \nDoes this satisfy the goal?",
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
    "explanation": "Azure Traffic Analytics phân tích nhật ký luồng của Azure Network Watcher và cung cấp khả năng hiển thị về lưu lượng được phép và bị chặn, bao gồm các quy tắc chặn luồng. Do đó, nó có thể xác định xem lưu lượng truy cập đến Azure virtual machines được cho phép hay bị từ chối.\n\n**Tài liệu tham khảo:**\n[Traffic Analytics Overview - Azure Network Watcher](https://learn.microsoft.com/en-us/azure/network-watcher/traffic-analytics)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 258",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/259-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-259",
    "questionNumber": 259,
    "text": "Solution: Use Azure Network Watcher to run IP flow verify for network-traffic analysis.  \n  \nDoes this satisfy the goal?",
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
    "explanation": "Xác minh luồng IP của Azure Network Watcher kiểm tra luồng TCP hoặc UDP được chỉ định đến hoặc từ Azure virtual machine dựa trên các quy tắc quản trị và bảo mật hiện hành. Nó trả về việc quyền truy cập được cho phép hay bị từ chối và xác định quy tắc chịu trách nhiệm, cho phép chẩn đoán các vấn đề về lọc lưu lượng máy ảo.\n\n**Tài liệu tham khảo:**\n[IP Flow Verify Overview - Azure Network Watcher](https://learn.microsoft.com/en-us/azure/network-watcher/ip-flow-verify-overview) · [Diagnose a virtual machine network traffic filter problem](https://learn.microsoft.com/en-us/azure/virtual-network/diagnose-network-traffic-filter-problem)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 259",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/260-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-260",
    "questionNumber": 260,
    "text": "Solution: Install and configure the Azure Monitor Agent and the Dependency Agent on every virtual machine. Use VM insights in Azure Monitor to analyze network traffic.  \n  \nDoes this satisfy the goal?",
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
    "explanation": "Thông tin chuyên sâu về VM sử dụng Tác nhân phụ thuộc cho dữ liệu phụ thuộc vào kết nối và quy trình; nó không xác định liệu một gói tin có được phép hay bị chặn bởi các quy tắc bảo mật mạng hay không. Xác minh luồng IP của Azure Network Watcher đánh giá các quy tắc quản trị và bảo mật hiện hành cho máy ảo và báo cáo xem lưu lượng đã chỉ định có được phép hay bị từ chối hay không.\n\n**Tài liệu tham khảo:**\n[IP flow verify overview - Azure Network Watcher](https://learn.microsoft.com/en-us/azure/network-watcher/ip-flow-verify-overview) · [Dependency Agent in Azure Monitor VM insights](https://learn.microsoft.com/en-us/azure/azure-monitor/vm/vminsights-dependency-agent)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 260",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/261-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-261",
    "questionNumber": 261,
    "text": "You have 100 Azure Storage accounts.  \n  \nAccess to the accounts is restricted by using Azure role-based access control (Azure RBAC) assignments.  \n  \nYou need to recommend a solution that uses role-assignment conditions based on the tags assigned to individual resources within the storage accounts.  \n  \nWhat should the recommendation include?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "condition_method",
        "text": "Implement role assignment conditions by using:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "resource_type",
        "text": "Assign permissions to:",
        "correctAnswer": "D",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Access control lists (ACLs)"
      },
      {
        "key": "B",
        "text": "Attribute-based access control (ABAC)"
      },
      {
        "key": "C",
        "text": "Shared access signatures (SAS)"
      },
      {
        "key": "D",
        "text": "Blobs"
      },
      {
        "key": "E",
        "text": "Files"
      },
      {
        "key": "F",
        "text": "Tables"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Access control lists (ACLs)"
      },
      {
        "key": "B",
        "text": "Attribute-based access control (ABAC)"
      },
      {
        "key": "C",
        "text": "Shared access signatures (SAS)"
      },
      {
        "key": "D",
        "text": "Blobs"
      },
      {
        "key": "E",
        "text": "Files"
      },
      {
        "key": "F",
        "text": "Tables"
      }
    ],
    "correctAnswers": [
      "condition_method=B",
      "resource_type=D"
    ],
    "explanation": "Điều kiện Azure RBAC là điều kiện kiểm soát truy cập dựa trên thuộc tính Azure (ABAC). Đối với Azure Storage, các điều kiện ủy quyền blob có thể đánh giá các thuộc tính tài nguyên blob, bao gồm thẻ chỉ mục blob, do đó, các quyền có thể được giới hạn trong các blob có thẻ cụ thể.\n\n**Tài liệu tham khảo:**\n[Azure role assignment conditions for Azure Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-auth-abac) · [What is Azure attribute-based access control (Azure ABAC)?](https://learn.microsoft.com/en-us/azure/role-based-access-control/conditions-overview)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 261",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/262-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-262",
    "questionNumber": 262,
    "text": "Your company has the divisions shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783708622840-yqxe1eay.png)  \n  \nSub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com can authenticate to App1.  \n  \nYou need to recommend a solution that enables users in the fabrikam.com tenant to authenticate to App1.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Configure a Conditional Access policy."
      },
      {
        "key": "B",
        "text": "Use Azure AD entitlement management to govern external users."
      },
      {
        "key": "C",
        "text": "Configure the Azure AD provisioning service."
      },
      {
        "key": "D",
        "text": "Configure Azure AD Identity Protection."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Quản lý quyền của Microsoft Entra có thể quản lý người dùng bên ngoài thông qua các gói truy cập cấp quyền truy cập vào ứng dụng và quản lý vòng đời người dùng-khách B2B có liên quan. Điều này cho phép người dùng Fabrikam được thể hiện là người dùng bên ngoài trong đối tượng thuê Contoso và truy cập vào ứng dụng một đối tượng thuê. Truy cập có điều kiện và Bảo vệ danh tính kiểm soát các điều kiện hoặc rủi ro đăng nhập, đồng thời cung cấp đồng bộ hóa danh tính; không ai cấp quyền truy cập cho người dùng bên ngoài được quản lý.\n\n**Tài liệu tham khảo:**\n[Govern access for external users in entitlement management](https://learn.microsoft.com/en-us/entra/id-governance/entitlement-management-external-users) · [What is Microsoft Entra B2B collaboration?](https://learn.microsoft.com/en-us/entra/external-id/what-is-b2b?azure-portal=true)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783708622840-yqxe1eay.png",
    "sourceTitle": "Examcademy AZ-305 Question 262",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/263-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-263",
    "questionNumber": 263,
    "text": "You are developing a sales application that will include several Azure cloud services and handle different transaction components. Various cloud services will process customer orders, billing, payment, inventory, and shipping.  \n  \nYou need to recommend a solution that lets the cloud services asynchronously exchange transaction information by using XML messages.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Notification Hubs"
      },
      {
        "key": "B",
        "text": "Azure Service Fabric"
      },
      {
        "key": "C",
        "text": "Azure Queue Storage"
      },
      {
        "key": "D",
        "text": "Azure Data Lake"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Azure Queue Storage cung cấp hàng đợi bền bỉ để liên lạc không đồng bộ giữa các thành phần ứng dụng phân tán, cho phép tách rời các dịch vụ xử lý giao dịch. Thông báo hàng đợi phải tương thích với các yêu cầu XML UTF-8, đáp ứng yêu cầu về thông báo XML.\n\n**Tài liệu tham khảo:**\n[What is Azure Queue Storage?](https://learn.microsoft.com/en-us/azure/storage/queues/storage-queues-introduction) · [Quickstart: Azure Queue Storage client library for .NET](https://learn.microsoft.com/en-us/azure/storage/queues/storage-quickstart-queues-dotnet)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 263",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/264-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-264",
    "questionNumber": 264,
    "text": "You have an on-premises application named App1 that customers use to manage digital images. You plan to migrate App1 to Azure.  \n  \nRecommend a data-storage solution that meets these image-storage requirements:  \n  \n- Encrypt images at rest.  \n- Allow files up to 50 MB.  \n- Manage image access by using Azure Web Application Firewall (WAF) on Azure Front Door.  \n  \nThe solution must also meet these customer-account requirements:  \n  \n- Support automatic storage scale-out.  \n- Keep App1 available if a datacenter fails.  \n- Support reading and writing data from multiple Azure regions.  \n  \nWhich service should be included for each data type? Each service can be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "image_storage",
        "text": "Image storage:",
        "correctAnswer": "A"
      },
      {
        "id": "customer_accounts",
        "text": "Customer accounts:",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Azure Blob storage"
      },
      {
        "key": "B",
        "text": "Azure Cosmos DB"
      },
      {
        "key": "C",
        "text": "Azure SQL Database"
      },
      {
        "key": "D",
        "text": "Azure Table storage"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Azure Blob storage"
      },
      {
        "key": "B",
        "text": "Azure Cosmos DB"
      },
      {
        "key": "C",
        "text": "Azure SQL Database"
      },
      {
        "key": "D",
        "text": "Azure Table storage"
      }
    ],
    "correctAnswers": [
      "image_storage=A",
      "customer_accounts=B"
    ],
    "explanation": "Azure Blob storage phù hợp với các đối tượng hình ảnh: Azure Storage mã hóa dữ liệu ở trạng thái nghỉ theo mặc định và Blob Storage có thể đóng vai trò là nguồn gốc Azure Front Door được WAF bảo vệ. Azure Cosmos DB cung cấp thông lượng tự động chia tỷ lệ và hỗ trợ khối lượng công việc đọc và ghi đa khu vực được phân bổ theo địa lý với tính sẵn sàng cao.\n\n**Tài liệu tham khảo:**\n[Azure Storage encryption for data at rest](https://learn.microsoft.com/en-us/azure/storage/common/storage-service-encryption) · [Azure Front Door frequently asked questions](https://learn.microsoft.com/en-us/azure/frontdoor/front-door-faq)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 264",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/265-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-265",
    "questionNumber": 265,
    "text": "You are designing an application that will use Azure Linux virtual machines to analyze video files. The files will be uploaded from corporate offices that connect to Azure by using ExpressRoute.  \n  \nYou plan to provision an Azure Storage account to host the files. You must ensure that the storage account meets these requirements:  \n  \n- Supports video files of up to 7 TB  \n- Provides the highest possible availability  \n- Optimizes storage for the large video files  \n- Ensures files from the on-premises network are uploaded by using ExpressRoute  \n  \nHow should you configure the storage account?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "storage_account_type",
        "text": "Storage account type:",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "data_redundancy",
        "text": "Data redundancy:",
        "correctAnswer": "F",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      },
      {
        "id": "networking",
        "text": "Networking:",
        "correctAnswer": "H",
        "choiceKeys": [
          "G",
          "H",
          "I"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Premium files shares"
      },
      {
        "key": "B",
        "text": "Premium page blobs"
      },
      {
        "key": "C",
        "text": "Standard general-purpose v2"
      },
      {
        "key": "D",
        "text": "Zone-redundant storage (ZRS)"
      },
      {
        "key": "E",
        "text": "Locally-redundant storage (LRS)"
      },
      {
        "key": "F",
        "text": "Geo-redundant storage (GRS)"
      },
      {
        "key": "G",
        "text": "Azure Route Server"
      },
      {
        "key": "H",
        "text": "A private endpoint"
      },
      {
        "key": "I",
        "text": "A service endpoint"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Premium files shares"
      },
      {
        "key": "B",
        "text": "Premium page blobs"
      },
      {
        "key": "C",
        "text": "Standard general-purpose v2"
      },
      {
        "key": "D",
        "text": "Zone-redundant storage (ZRS)"
      },
      {
        "key": "E",
        "text": "Locally-redundant storage (LRS)"
      },
      {
        "key": "F",
        "text": "Geo-redundant storage (GRS)"
      },
      {
        "key": "G",
        "text": "Azure Route Server"
      },
      {
        "key": "H",
        "text": "A private endpoint"
      },
      {
        "key": "I",
        "text": "A service endpoint"
      }
    ],
    "correctAnswers": [
      "storage_account_type=C",
      "data_redundancy=F",
      "networking=H"
    ],
    "explanation": "Tài khoản v2 đa năng tiêu chuẩn hỗ trợ lưu trữ Blob, bao gồm các khối blob có thể vượt quá 7 TB và phù hợp với các đối tượng video lớn. GRS sao chép dữ liệu sang một khu vực thứ cấp tách biệt về mặt địa lý, cung cấp tính khả dụng và khả năng phục hồi sau thảm họa cao hơn LRS hoặc ZRS trong số các lựa chọn được liệt kê. private endpoint cho phép truy cập riêng tư vào tài khoản lưu trữ từ các mạng tại chỗ được kết nối với mạng ảo thông qua tính năng ngang hàng riêng tư ExpressRoute.\n\n**Tài liệu tham khảo:**\n[Scalability and performance targets for Blob storage](https://learn.microsoft.com/en-us/azure/storage/blobs/scalability-targets) · [Data redundancy - Azure Storage](https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 265",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/266-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-266",
    "questionNumber": 266,
    "text": "You need to recommend a solution for producing a monthly report of every new Azure Resource Manager (ARM) resource deployment in your Azure subscription.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Log Analytics"
      },
      {
        "key": "B",
        "text": "Azure Arc"
      },
      {
        "key": "C",
        "text": "Azure Analysis Services"
      },
      {
        "key": "D",
        "text": "Azure Monitor action groups"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Nhật ký hoạt động Azure ghi lại các hoạt động trên mặt phẳng điều khiển Azure Resource Manager, bao gồm các sự kiện tạo và triển khai tài nguyên. Xuất nhật ký hoạt động sang không gian làm việc Azure Log Analytics sẽ lưu trữ các sự kiện trong bảng `AzureActivity`, nơi KQL có thể lọc các hoạt động triển khai mới qua mỗi kỳ báo cáo hàng tháng. [Activity log in Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/platform/activity-log)\n\n**Tài liệu tham khảo:**\n[Activity log in Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/platform/activity-log)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 266",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/267-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-267",
    "questionNumber": 267,
    "text": "You are developing a sales application that will include several Azure cloud services and manage different parts of a transaction. Separate cloud services will process customer orders, billing, payment, inventory, and shipping.  \n  \nYou need to recommend a solution that lets the cloud services asynchronously exchange transaction information by using XML messages.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Blob Storage"
      },
      {
        "key": "B",
        "text": "Azure Data Lake"
      },
      {
        "key": "C",
        "text": "Azure Queue Storage"
      },
      {
        "key": "D",
        "text": "Azure Service Fabric"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Azure Queue Storage cung cấp các hàng đợi bền bỉ giúp tách rời các thành phần ứng dụng phân tán: các dịch vụ có thể đặt các thông báo giao dịch trên hàng đợi để các dịch vụ khác truy xuất và xử lý sau này. Tin nhắn hàng đợi phải tương thích với yêu cầu XML sử dụng mã hóa UTF-8, hỗ trợ nhắn tin giao dịch dựa trên XML.\n\n**Tài liệu tham khảo:**\n[Tutorial: Work with Azure Queue Storage queues in .NET](https://learn.microsoft.com/en-us/azure/storage/queues/storage-tutorial-queues)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 267",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/268-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-268",
    "questionNumber": 268,
    "text": "You have an Azure subscription containing Azure virtual machines running Windows Server 2016 and Linux.  \n  \nYou need to use Azure Monitor to create an alerting strategy for security-related events. Identify the Azure Monitor Logs tables to query for each log type.  \n  \nEach table can be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "windows_event_logs",
        "text": "Events from Windows event logs:",
        "correctAnswer": "C"
      },
      {
        "id": "linux_system_logging",
        "text": "Events from Linux system logging:",
        "correctAnswer": "D"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "AzureActivity"
      },
      {
        "key": "B",
        "text": "AzureDiagnostics"
      },
      {
        "key": "C",
        "text": "Event"
      },
      {
        "key": "D",
        "text": "Syslog"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "AzureActivity"
      },
      {
        "key": "B",
        "text": "AzureDiagnostics"
      },
      {
        "key": "C",
        "text": "Event"
      },
      {
        "key": "D",
        "text": "Syslog"
      }
    ],
    "correctAnswers": [
      "windows_event_logs=C",
      "linux_system_logging=D"
    ],
    "explanation": "Bảng Sự kiện chứa các bản ghi được thu thập từ Nhật ký Sự kiện Windows trên máy tính Windows. Các bản ghi nhật ký hệ thống Linux được thu thập vào bảng Syslog, bảng này có thể được truy vấn về các sự kiện nhật ký hệ thống liên quan đến bảo mật.\n\n**Tài liệu tham khảo:**\n[Azure Monitor Logs reference - Event](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/event) · [Azure Monitor Logs reference - Syslog](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/syslog)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 268",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/269-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-269",
    "questionNumber": 269,
    "text": "Your company has the divisions shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783708886651-c7csf8is.png)  \n  \nSub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com can authenticate to App1.  \n  \nYou need to recommend a solution that enables users in the fabrikam.com tenant to authenticate to App1.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Configure Azure AD join."
      },
      {
        "key": "B",
        "text": "Configure Azure AD Identity Protection."
      },
      {
        "key": "C",
        "text": "Configure a Conditional Access policy."
      },
      {
        "key": "D",
        "text": "Configure Supported account types in the application registration and update the sign-in endpoint."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Ứng dụng Microsoft Entra nhiều đối tượng thuê cho phép người dùng tổ chức từ những đối tượng thuê khác đăng nhập. Việc thay đổi loại tài khoản được hỗ trợ của đăng ký ứng dụng để cho phép các tài khoản trong bất kỳ thư mục tổ chức nào và việc sử dụng điểm cuối thẩm quyền đăng nhập nhiều đối tượng thuê sẽ cho phép người dùng fabrikam.com xác thực với ứng dụng.\n\n**Tài liệu tham khảo:**\n[Convert single-tenant app to multitenant on Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity-platform/howto-convert-app-to-be-multi-tenant) · [Identity and account types for single- and multitenant apps](https://learn.microsoft.com/en-us/security/zero-trust/develop/identity-supported-account-types)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783708886651-c7csf8is.png",
    "sourceTitle": "Examcademy AZ-305 Question 269",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/270-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-270",
    "questionNumber": 270,
    "text": "Your company has the divisions shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783708621309-ingiz9db.png)  \n  \nSub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com can authenticate to App1.  \n  \nYou need to recommend a solution that enables users in the fabrikam.com tenant to authenticate to App1.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Configure Azure AD join."
      },
      {
        "key": "B",
        "text": "Use Azure AD entitlement management to govern external users."
      },
      {
        "key": "C",
        "text": "Enable Azure AD pass-through authentication and update the sign-in endpoint."
      },
      {
        "key": "D",
        "text": "Configure assignments for the fabrikam.com users by using Azure AD Privileged Identity Management (PIM)."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Quản lý quyền lợi Microsoft Entra sử dụng cộng tác B2B để cung cấp cho người dùng bên ngoài các đại diện của khách trong thư mục tài nguyên và chỉ định cho họ quyền truy cập vào tài nguyên. Gói truy cập có thể quản lý quyền truy cập vào ứng dụng và vòng đời của người dùng Fabrikam trong khi họ xác thực thông qua người thuê nhà của họ.\n\n**Tài liệu tham khảo:**\n[Govern access for external users in entitlement management](https://learn.microsoft.com/en-us/entra/id-governance/entitlement-management-external-users) · [Manage connected organizations in entitlement management](https://learn.microsoft.com/en-us/entra/id-governance/entitlement-management-organization)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783708621309-ingiz9db.png",
    "sourceTitle": "Examcademy AZ-305 Question 270",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/271-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-271",
    "questionNumber": 271,
    "text": "You have an Azure subscription containing multiple storage accounts, and Azure Policy definitions are assigned to those storage accounts.  \n  \nRecommend a solution that meets these requirements:  \n  \n- Trigger Azure Policy compliance scans on demand.  \n- Generate Azure Monitor alerts for non-compliance by querying logs collected in Log Analytics.  \n  \nWhat should you recommend for each requirement?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "compliance_scans",
        "text": "To trigger the compliance scans, use:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "noncompliance_alerts",
        "text": "To generate the non-compliance alerts, configure diagnostic settings for the:",
        "correctAnswer": "D",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "An Azure template"
      },
      {
        "key": "B",
        "text": "The Azure Command-Line Interface (CLI)"
      },
      {
        "key": "C",
        "text": "The Azure portal"
      },
      {
        "key": "D",
        "text": "Azure activity logs"
      },
      {
        "key": "E",
        "text": "Log Analytics workspace"
      },
      {
        "key": "F",
        "text": "Storage accounts"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "An Azure template"
      },
      {
        "key": "B",
        "text": "The Azure Command-Line Interface (CLI)"
      },
      {
        "key": "C",
        "text": "The Azure portal"
      },
      {
        "key": "D",
        "text": "Azure activity logs"
      },
      {
        "key": "E",
        "text": "Log Analytics workspace"
      },
      {
        "key": "F",
        "text": "Storage accounts"
      }
    ],
    "correctAnswers": [
      "compliance_scans=B",
      "noncompliance_alerts=D"
    ],
    "explanation": "`az policy state trigger-scan` bắt đầu đánh giá tuân thủ Chính sách Azure theo yêu cầu. Nhật ký hoạt động Azure có thể được xuất thông qua cài đặt chẩn đoán sang không gian làm việc Log Analytics, nơi các truy vấn nhật ký có thể đưa ra cảnh báo nhật ký Azure Monitor cho các sự kiện không tuân thủ chính sách.\n\n**Tài liệu tham khảo:**\n[Get policy compliance data - Azure Policy](https://learn.microsoft.com/en-us/azure/governance/policy/how-to/get-compliance-data) · [Azure Monitor activity log](https://learn.microsoft.com/en-us/azure/azure-monitor/platform/activity-log)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 271",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/272-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-272",
    "questionNumber": 272,
    "text": "You plan to migrate on-premises MySQL databases to Azure Database for MySQL Flexible Server.  \n  \nYou need to recommend a configuration solution for Azure Database for MySQL Flexible Server. The solution must meet the following requirements:  \n  \n- The databases must remain accessible if a datacenter fails.  \n- Costs must be minimized.  \n  \nWhich compute tier should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Burstable"
      },
      {
        "key": "B",
        "text": "General Purpose"
      },
      {
        "key": "C",
        "text": "Memory Optimized"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Tính sẵn sàng cao của vùng dự phòng cung cấp khả năng phục hồi đối với lỗi vùng sẵn sàng/trung tâm dữ liệu bằng cách sử dụng máy chủ dự phòng ở vùng khác. Cấp độ Burstable không hỗ trợ tính sẵn sàng cao. Mục đích chung hỗ trợ khối lượng công việc sản xuất và tính sẵn sàng cao mà không cần thêm dung lượng tập trung vào bộ nhớ và chi phí của bậc Tối ưu hóa bộ nhớ.\n\n**Tài liệu tham khảo:**\n[High availability concepts in Azure Database for MySQL - Flexible Server](https://learn.microsoft.com/en-us/azure/mysql/flexible-server/concepts-high-availability) · [Azure Database for MySQL - Flexible Server service tiers](https://learn.microsoft.com/en-us/azure/mysql/flexible-server/concepts-service-tiers-storage)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 272",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/273-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-273",
    "questionNumber": 273,
    "text": "You need to recommend a solution that produces a monthly report of all new Azure Resource Manager (ARM) resource deployments in your Azure subscription.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Application Insights"
      },
      {
        "key": "B",
        "text": "Azure Analysis Services"
      },
      {
        "key": "C",
        "text": "Azure Advisor"
      },
      {
        "key": "D",
        "text": "Azure Log Analytics"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Nhật ký hoạt động Azure ghi lại các hoạt động triển khai mặt phẳng điều khiển Azure Resource Manager. Việc gửi nhật ký hoạt động đến không gian làm việc Log Analytics sẽ lưu trữ các sự kiện trong bảng `AzureActivity`, nơi chúng có thể được truy vấn và sử dụng để tạo báo cáo triển khai hàng tháng.\n\n**Tài liệu tham khảo:**\n[Azure Monitor activity log](https://learn.microsoft.com/en-us/azure/azure-monitor/platform/activity-log)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 273",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/274-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-274",
    "questionNumber": 274,
    "text": "You must recommend a solution that fulfills the database retention requirements.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Configure a long-term retention policy for the database."
      },
      {
        "key": "B",
        "text": "Configure Azure Site Recovery."
      },
      {
        "key": "C",
        "text": "Use automatic Azure SQL Database backups."
      },
      {
        "key": "D",
        "text": "Configure geo-replication of the database."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Chính sách lưu giữ dài hạn (LTR) của Azure SQL Database tự động giữ lại các bản sao lưu cơ sở dữ liệu trong Azure Blob storage riêng biệt trong khoảng thời gian hàng tuần, hàng tháng và hàng năm được định cấu hình, trong tối đa 10 năm. Điều này trực tiếp đáp ứng các yêu cầu lưu giữ cơ sở dữ liệu lâu dài.\n\n**Tài liệu tham khảo:**\n[Manage Azure SQL Database long-term backup retention](https://learn.microsoft.com/en-us/azure/azure-sql/database/long-term-backup-retention-configure?view=azuresql)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 274",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/275-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-275",
    "questionNumber": 275,
    "text": "You are building a sales application that will include several Azure cloud services and manage different parts of a transaction. Separate cloud services will process customer orders, billing, payment, inventory, and shipping.  \n  \nYou need to recommend a solution that lets the cloud services asynchronously exchange transaction information by using XML messages.  \n  \nWhat should be included in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Service Bus"
      },
      {
        "key": "B",
        "text": "Azure Data Lake"
      },
      {
        "key": "C",
        "text": "Azure Traffic Manager"
      },
      {
        "key": "D",
        "text": "Azure Blob Storage"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Azure Service Bus là một nhà môi giới tin nhắn doanh nghiệp được quản lý, tách riêng các dịch vụ thông qua hàng đợi và các chủ đề đăng ký xuất bản. Nó hỗ trợ giao tiếp không đồng bộ, lưu trữ và chuyển tiếp và tải trọng tin nhắn của nó có thể chứa dữ liệu có cấu trúc được mã hóa dưới dạng XML.\n\n**Tài liệu tham khảo:**\n[What is Azure Service Bus?](https://learn.microsoft.com/en-gb/azure/service-bus-messaging/service-bus-messaging-overview) · [Asynchronous messaging patterns and high availability](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-async-messaging)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 275",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/276-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-276",
    "questionNumber": 276,
    "text": "You have an Azure subscription.  \n  \nYou need to recommend an Azure Kubernetes Service (AKS) solution that uses Linux nodes. The solution must meet the following requirements:  \n  \n- Minimize the time required to provision compute resources during scale-out operations.  \n- Support autoscaling for Linux containers.  \n- Minimize administrative effort.  \n  \nWhich scaling option should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "horizontal pod autoscaler"
      },
      {
        "key": "B",
        "text": "cluster autoscaler"
      },
      {
        "key": "C",
        "text": "virtual nodes"
      },
      {
        "key": "D",
        "text": "Virtual Kubelet"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Các nút ảo AKS sử dụng Azure Container Instances để cung cấp các nhóm nhanh chóng mà không cần chờ bộ chia tỷ lệ tự động của cụm triển khai các nút điện toán VM. Chúng được hỗ trợ cho các nhóm và nút Linux, đồng thời cơ sở hạ tầng vùng chứa không có máy chủ giúp giảm chi phí quản trị nút.\n\n**Tài liệu tham khảo:**\n[Use virtual nodes with Azure Kubernetes Service (AKS)](https://learn.microsoft.com/en-us/azure/aks/virtual-nodes)",
    "category": "Design Infrastructure Solutions",
    "tags": [
      "AZ-305",
      "Design Infrastructure Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 276",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/277-design-infrastructure-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-277",
    "questionNumber": 277,
    "text": "A company plans to implement an HTTP-based API for a web app that enables customers to check their order status.  \n  \nThe API must:  \n  \n- Use Azure Functions.  \n- Offer public, read-only operations.  \n- Block write operations.  \n  \nRecommend the HTTP methods and authorization level to configure.",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "http_methods",
        "text": "HTTP methods:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      },
      {
        "id": "authorization_level",
        "text": "Authorization level:",
        "correctAnswer": "F",
        "choiceKeys": [
          "E",
          "F",
          "G"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "API methods"
      },
      {
        "key": "B",
        "text": "GET only"
      },
      {
        "key": "C",
        "text": "GET and POST only"
      },
      {
        "key": "D",
        "text": "GET, POST, and OPTIONS only"
      },
      {
        "key": "E",
        "text": "Function"
      },
      {
        "key": "F",
        "text": "Anonymous"
      },
      {
        "key": "G",
        "text": "Admin"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "API methods"
      },
      {
        "key": "B",
        "text": "GET only"
      },
      {
        "key": "C",
        "text": "GET and POST only"
      },
      {
        "key": "D",
        "text": "GET, POST, and OPTIONS only"
      },
      {
        "key": "E",
        "text": "Function"
      },
      {
        "key": "F",
        "text": "Anonymous"
      },
      {
        "key": "G",
        "text": "Admin"
      }
    ],
    "correctAnswers": [
      "http_methods=B",
      "authorization_level=F"
    ],
    "explanation": "Trình kích hoạt HTTP Azure Functions có thể hạn chế các phương thức GET, cho phép các yêu cầu chỉ đọc trong khi loại trừ các thao tác ghi. Cấp độ ủy quyền ẩn danh yêu cầu khóa truy cập no, giúp điểm cuối có thể truy cập công khai.\n\n**Tài liệu tham khảo:**\n[Azure Functions HTTP trigger](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 277",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/278-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-278",
    "questionNumber": 278,
    "text": "You have an Azure subscription that contains a blob container with multiple blobs.  \n  \nTen users in your company's finance department plan to access the blobs during April.  \n  \nYou need to recommend a solution that enables access to the blobs only for the month of April.  \n  \nWhich security solution should be included in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "shared access signatures (SAS)"
      },
      {
        "key": "B",
        "text": "Conditional Access policies"
      },
      {
        "key": "C",
        "text": "certificates"
      },
      {
        "key": "D",
        "text": "access keys"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Chữ ký truy cập được chia sẻ (SAS) cung cấp quyền truy cập chi tiết, được ủy quyền vào các tài nguyên Lưu trữ Azure, bao gồm các vùng chứa blob và blob. Quyền và khoảng thời gian hiệu lực của nó có thể được đặt để quyền truy cập bắt đầu và hết hạn chỉ trong tháng Tư.\n\n**Tài liệu tham khảo:**\n[Grant limited access to Azure Storage resources using shared access signatures (SAS)](https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 278",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/279-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-279",
    "questionNumber": 279,
    "text": "You have an Azure subscription.  \n  \nYou need to deploy a relational database that meets these requirements:  \n  \n- Support multiple read-only replicas.  \n- Automatically load-balance read-only requests across all read-only replicas.  \n- Minimize administrative effort.  \n  \nWhat should you use?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "service",
        "text": "Service",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "service_tier",
        "text": "Service tier",
        "correctAnswer": "E",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "A single Azure SQL database"
      },
      {
        "key": "B",
        "text": "An Azure SQL Database elastic pool"
      },
      {
        "key": "C",
        "text": "Azure SQL Managed Instances"
      },
      {
        "key": "D",
        "text": "Business Critical"
      },
      {
        "key": "E",
        "text": "Hyperscale"
      },
      {
        "key": "F",
        "text": "Premium"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "A single Azure SQL database"
      },
      {
        "key": "B",
        "text": "An Azure SQL Database elastic pool"
      },
      {
        "key": "C",
        "text": "Azure SQL Managed Instances"
      },
      {
        "key": "D",
        "text": "Business Critical"
      },
      {
        "key": "E",
        "text": "Hyperscale"
      },
      {
        "key": "F",
        "text": "Premium"
      }
    ],
    "correctAnswers": [
      "service=A",
      "service_tier=E"
    ],
    "explanation": "Azure SQL Database Hyperscale hỗ trợ nhiều bản sao được đặt tên để mở rộng quy mô đọc và có thể phân phối khối lượng công việc chỉ đọc trên chúng. Do đó, một Azure SQL database duy nhất trong tầng dịch vụ Hyperscale là tùy chọn quản trị thấp, được quản lý, đáp ứng các yêu cầu cân bằng tải bản sao và chỉ đọc.\n\n**Tài liệu tham khảo:**\n[Azure SQL Database Hyperscale service tier overview](https://learn.microsoft.com/en-us/azure/azure-sql/database/service-tier-hyperscale?view=azuresql) · [Scale out with read-only replicas - Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/read-scale-out?view=azuresql)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 279",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/280-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-280",
    "questionNumber": 280,
    "text": "You are designing an application that will be hosted in Azure.  \n  \nThe application will store video files ranging from 50 MB to 12 GB. It will use certificate-based authentication and be available to users on the internet.  \n  \nYou need to recommend a storage option for the video files. The solution must deliver the fastest read performance while minimizing storage costs.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Files"
      },
      {
        "key": "B",
        "text": "Azure Data Lake Storage Gen2"
      },
      {
        "key": "C",
        "text": "Azure Blob Storage"
      },
      {
        "key": "D",
        "text": "Azure SQL Database"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Azure Blob Storage được tối ưu hóa cho lượng lớn dữ liệu phi cấu trúc và được thiết kế để truy cập tệp phân tán cũng như truyền phát video và âm thanh qua HTTP/HTTPS. Khối blob hỗ trợ các cấp truy cập, cho phép tối ưu hóa chi phí lưu trữ cho kiểu truy cập của tệp trong khi các cấp trực tuyến cung cấp khả năng truy xuất ngay lập tức.\n\n**Tài liệu tham khảo:**\n[Introduction to Azure Blob Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction) · [Access tiers for blob data](https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 280",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/281-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-281",
    "questionNumber": 281,
    "text": "Fabrikam, Inc. is an engineering company with a main office in London and branch offices in Amsterdam, Berlin, and Rome. The network has two Active Directory forests: corp.fabrikam.com , a production forest for internal user and computer authentication, and rd.fabrikam.com , which is used only by R&D and is restricted to on-premises resources. No trust relationship exists between the forests. Fabrikam plans to move most production workloads to Azure and establish a hybrid identity model for a forthcoming Microsoft 365 deployment. R&D operations will remain on-premises. The technical requirements state that users must always authenticate with their corp.fabrikam.com UPN identity. Directory synchronization between Azure AD and corp.fabrikam.com must continue despite a failed link between Azure and the on-premises network. Security requirements state that company information, including policies, templates, and data, must be inaccessible to people outside the company. Administrators must be able to authenticate to the Azure portal using their corp.fabrikam.com credentials, and every administrative Azure portal access must use multi-factor authentication (MFA). To meet Fabrikam’s authentication requirements, include the following in the solution:",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "azure_ad_tenants",
        "text": "Minimum number of Azure AD tenants:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D",
          "E"
        ]
      },
      {
        "id": "conditional_access_policies",
        "text": "Minimum number of conditional access policies to create:",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D",
          "E"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "1"
      },
      {
        "key": "C",
        "text": "2"
      },
      {
        "key": "D",
        "text": "3"
      },
      {
        "key": "E",
        "text": "4"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "1"
      },
      {
        "key": "C",
        "text": "2"
      },
      {
        "key": "D",
        "text": "3"
      },
      {
        "key": "E",
        "text": "4"
      }
    ],
    "correctAnswers": [
      "azure_ad_tenants=B",
      "conditional_access_policies=C"
    ],
    "explanation": "Một đối tượng thuê Microsoft Entra ID có thể cung cấp danh tính kết hợp cho nhóm sản xuất `corp.fabrikam.com` và Microsoft 365. Nhóm R&D vẫn được duy trì tại chỗ nên không cần có đối tượng thuê. Một chính sách Truy cập có điều kiện có thể yêu cầu MFA cho các vai trò quản trị truy cập vào quản lý Azure, trong khi một chính sách riêng biệt hạn chế quyền truy cập vào thông tin đám mây của công ty từ bên ngoài công ty.\n\n**Tài liệu tham khảo:**\n[Hybrid identity documentation](https://learn.microsoft.com/en-us/entra/identity/hybrid/) · [Require MFA for administrators with Conditional Access](https://learn.microsoft.com/en-us/entra/identity/conditional-access/policy-old-require-mfa-admin)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 281",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/282-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-282",
    "questionNumber": 282,
    "text": "You have an Azure AD tenant that includes a management group named MG1. You have the Azure subscriptions shown in the following table. The subscriptions contain the resource groups shown in the following table. The subscription contains the Azure AD security groups shown in the following table. The subscription contains the user accounts shown in the following table. You perform these actions: - Assign User3 the Contributor role for Sub1. - Assign Group1 the Virtual Machine Contributor role for MG1. - Assign Group3 the Contributor role for the Tenant Root Group. For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "User1 can create a new virtual machine in RG1.",
        "correctAnswer": "Yes"
      },
      {
        "id": "2",
        "text": "User2 can grant permissions to Group2.",
        "correctAnswer": "No"
      },
      {
        "id": "3",
        "text": "User3 can create a storage account in RG2.",
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
    "explanation": "Các quyền Azure RBAC được chỉ định tại một nhóm quản lý hoặc Nhóm gốc đối tượng thuê được kế thừa bởi phạm vi con và việc phân công vai trò thông qua các nhóm lồng nhau có tính chất bắc cầu. User1 kế thừa quyền truy cập của Virtual Machine Contributor thông qua Group1 tại MG1, do đó có thể tạo một máy ảo trong RG1. User2 kế thừa Contributor thông qua tư cách thành viên của Group2 trong Group3, nhưng Contributor không thể tạo các bài tập vai trò Azure RBAC. User3 cũng kế thừa Contributor thông qua Group3 tại Tenant Root Group nên có thể tạo tài khoản lưu trữ trong RG2.\n\n**Tài liệu tham khảo:**\n[What is Azure role-based access control (Azure RBAC)?](https://learn.microsoft.com/en-us/azure/role-based-access-control/overview) · [Understand scope for Azure RBAC](https://learn.microsoft.com/en-us/azure/role-based-access-control/scope-overview)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 282",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/283-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-283",
    "questionNumber": 283,
    "text": "You need to recommend a solution that generates a monthly report covering all new Azure Resource Manager (ARM) resource deployments in your Azure subscription.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Log Analytics"
      },
      {
        "key": "B",
        "text": "Azure Arc"
      },
      {
        "key": "C",
        "text": "Azure Monitor metrics"
      },
      {
        "key": "D",
        "text": "Azure Monitor action groups"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Nhật ký hoạt động Azure ghi lại các hoạt động trên mặt phẳng điều khiển Azure Resource Manager, bao gồm các sự kiện liên quan đến việc tạo và triển khai tài nguyên. Việc định tuyến dữ liệu đó đến không gian làm việc Azure Log Analytics cho phép truy vấn dữ liệu đó trong khoảng thời gian hàng tháng để tạo báo cáo về các hoạt động triển khai mới.\n\n**Tài liệu tham khảo:**\n[Activity log in Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/platform/activity-log) · [Monitor Azure Resource Manager](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/monitor-resource-manager)",
    "category": "Design Identity Governance And Monitoring Solutions",
    "tags": [
      "AZ-305",
      "Design Identity Governance And Monitoring Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 283",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/284-design-identity-governance-and-monitoring-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-284",
    "questionNumber": 284,
    "text": "You have an on-premises application named App1 that uses an Oracle database.  \n  \nYou plan to use Azure Databricks to transform and load data from App1 into an Azure Synapse Analytics instance.  \n  \nYou need to ensure that App1 data is available to Databricks.  \n  \nWhich two Azure services should you include in the solution? Each correct answer represents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Data Box Gateway"
      },
      {
        "key": "B",
        "text": "Azure Import/Export service"
      },
      {
        "key": "C",
        "text": "Azure Data Lake Storage"
      },
      {
        "key": "D",
        "text": "Azure Data Box Edge"
      },
      {
        "key": "E",
        "text": "Azure Data Factory"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "Azure Data Factory có thể sao chép dữ liệu từ cơ sở dữ liệu Oracle; đối với kho lưu trữ dữ liệu tại chỗ, nó sử dụng self-hosted integration runtime để thiết lập kết nối. Azure Data Lake Storage cung cấp lớp lưu trữ có thể mở rộng mà từ đó Azure Databricks có thể truy cập và chuyển đổi dữ liệu đã sao chép trước khi tải vào Azure Synapse Analytics.\n\n**Tài liệu tham khảo:**\n[Copy data from and to Oracle by using Azure Data Factory or Azure Synapse Analytics](https://learn.microsoft.com/en-us/azure/data-factory/connector-oracle) · [Connect to Azure Data Lake Storage and Blob Storage](https://learn.microsoft.com/en-us/azure/databricks/connect/storage/azure-storage)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 284",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/285-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  },
  {
    "id": "az305-285",
    "questionNumber": 285,
    "text": "You have an on-premises Microsoft SQL Server database named SQL1.  \n  \nYou plan to migrate SQL1 to Azure.  \n  \nRecommend a hosting solution for SQL1 that meets these requirements:  \n  \n- Supports deployment of multiple secondary, read-only replicas.  \n- Supports automatic replication between primary and secondary replicas.  \n- Supports failover between primary and secondary replicas within a 15-minute recovery time objective (RTO).  \n  \nWhat should the solution include?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "azure_service_or_service_tier",
        "text": "Azure service or service tier:",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "replication_mechanism",
        "text": "Replication mechanism:",
        "correctAnswer": "D",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Azure SQL Database"
      },
      {
        "key": "B",
        "text": "Azure SQL managed Instance"
      },
      {
        "key": "C",
        "text": "The Hyperscale service tier"
      },
      {
        "key": "D",
        "text": "Active geo-replication"
      },
      {
        "key": "E",
        "text": "Auto-failover groups"
      },
      {
        "key": "F",
        "text": "Standard geo-replication"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Azure SQL Database"
      },
      {
        "key": "B",
        "text": "Azure SQL managed Instance"
      },
      {
        "key": "C",
        "text": "The Hyperscale service tier"
      },
      {
        "key": "D",
        "text": "Active geo-replication"
      },
      {
        "key": "E",
        "text": "Auto-failover groups"
      },
      {
        "key": "F",
        "text": "Standard geo-replication"
      }
    ],
    "correctAnswers": [
      "azure_service_or_service_tier=C",
      "replication_mechanism=D"
    ],
    "explanation": "Hyperscale cung cấp bản sao thứ cấp chỉ đọc. Sao chép địa lý tích cực sao chép liên tục và không đồng bộ cơ sở dữ liệu chính thành các bản sao địa lý thứ cấp có thể đọc được, hỗ trợ tối đa bốn bản sao địa lý thứ hai và cho phép chuyển đổi dự phòng sang bản sao thứ cấp.\n\n**Tài liệu tham khảo:**\n[Active geo-replication - Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/active-geo-replication-overview?view=azuresql) · [Hyperscale secondary replicas - Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/service-tier-hyperscale-replicas?view=azuresql)",
    "category": "Design Data Storage Solutions",
    "tags": [
      "AZ-305",
      "Design Data Storage Solutions"
    ],
    "sourceTitle": "Examcademy AZ-305 Question 285",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-305/q/286-design-data-storage-solutions",
    "lastVerifiedAt": "2026-09-14T13:35:51.135Z"
  }
];
