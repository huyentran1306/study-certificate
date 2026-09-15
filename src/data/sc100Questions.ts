import { Question } from '../types';

export const sc100Questions: Question[] = [
  {
    "id": "sc100-1",
    "questionNumber": 1,
    "text": "You are designing a privileged-access strategy for Contoso, Ltd. and its partner, Fabrikam, Inc. Contoso has an Azure AD tenant named contoso.com, and Fabrikam has an Azure AD tenant named fabrikam.com. Fabrikam users must access resources in contoso.com.  \n  \nYou need to give Fabrikam users access to Contoso resources by using access packages. What should you use for each requirement?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Một tổ chức được kết nối sẽ xác định Fabrikam là thư mục Microsoft Entra bên ngoài để quản lý quyền, cho phép người dùng yêu cầu các gói quyền truy cập bằng danh tính tổ chức hiện có của họ; danh tính khách được tạo khi quyền truy cập được cấp khi cần thiết. Ủy quyền danh mục hỗ trợ những người tạo danh mục phi quản trị, những người có thể tạo các gói và chính sách truy cập.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 1",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/1-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-2",
    "questionNumber": 2,
    "text": "You have an Azure subscription that includes a Microsoft Sentinel workspace.  \n  \nYour on-premises network includes firewalls that can forward event logs in the Common Event Format (CEF). No built-in Microsoft Sentinel connector exists for the firewalls.  \n  \nYou need to recommend a solution to ingest firewall events into Microsoft Sentinel.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "an Azure logic app"
      },
      {
        "key": "B",
        "text": "an on-premises Syslog server"
      },
      {
        "key": "C",
        "text": "an on-premises data gateway"
      },
      {
        "key": "D",
        "text": "Azure Data Factory"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Microsoft Sentinel tiếp nhận các sự kiện CEF từ các thiết bị mạng và bảo mật bằng cách sử dụng CEF thông qua trình kết nối Tác nhân Azure Monitor với máy Linux hoạt động như một công cụ chuyển tiếp nhật ký Syslog. Máy chủ Syslog tại chỗ nhận các thông báo CEF của tường lửa và chuyển tiếp chúng để đưa vào không gian làm việc Sentinel.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 2",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/2-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-3",
    "questionNumber": 3,
    "text": "You need to recommend a SIEM and SOAR strategy that meets the hybrid requirements, the Microsoft Sentinel requirements, and the regulatory compliance requirements.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Không gian làm việc Microsoft Sentinel được gắn với các vùng Azure, do đó, các không gian làm việc riêng biệt hỗ trợ các yêu cầu quy định và nơi lưu trữ dữ liệu địa lý; ranh giới của người thuê nhà cũng yêu cầu sự tách biệt thích hợp. Azure Lighthouse tích hợp đăng ký để quản lý nhiều người thuê được ủy quyền. Luồng đăng ký tự phục vụ Azure AD B2B và B2C là các tính năng nhận dạng chứ không phải cơ chế tích hợp đăng ký.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 3",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/3-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-4",
    "questionNumber": 4,
    "text": "You have several on-premises Hyper-V hosts containing virtual machines that run Windows Server 2022, along with an Azure subscription.  \n  \nRecommend a solution for collecting Security event logs from the virtual machines by using Microsoft Sentinel. The solution must:  \n  \n- Use the Windows Security Events via AMA data connector.  \n- Collect only specified events.  \n- Minimize costs.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Sự kiện bảo mật Windows qua AMA sử dụng quy tắc thu thập dữ liệu Azure Monitor để xác định nhóm sự kiện hoặc bộ lọc XPath tùy chỉnh. Việc lọc tại tác nhân để chỉ nhập các sự kiện bắt buộc giúp giảm chi phí nhập dữ liệu. Các máy ảo Windows Server tại chỗ phải được kích hoạt Azure Arc trước khi trình kết nối Sentinel dựa trên AMA có thể thu thập các sự kiện của chúng; tác nhân Azure Connected Machine kích hoạt Azure Arc. Tác nhân Log Analytics cũ không phải là tác nhân được trình kết nối này sử dụng.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 4",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/4-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-5",
    "questionNumber": 5,
    "text": "Your company intends to provision blob storage by using an Azure Storage account. The blob storage will be available to 20 application servers on the internet.  \n  \nYou need to recommend a solution that ensures only the application servers can access the storage account.  \n  \nWhat should you recommend to secure the blob storage?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "managed rule sets in Azure Web Application Firewall (WAF) policies"
      },
      {
        "key": "B",
        "text": "inbound rules in network security groups (NSGs)"
      },
      {
        "key": "C",
        "text": "firewall rules for the storage account"
      },
      {
        "key": "D",
        "text": "inbound rules in Azure Firewall"
      },
      {
        "key": "E",
        "text": "service tags in network security groups (NSGs)"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Quy tắc tường lửa của tài khoản Azure Storage hạn chế quyền truy cập vào điểm cuối công khai của tài khoản lưu trữ theo địa chỉ IP nguồn hoặc dải IP được phép. Việc định cấu hình quy tắc cho địa chỉ IP công cộng của 20 máy chủ ứng dụng cho phép chúng truy cập và từ chối các nguồn internet khác.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 5",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/5-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-6",
    "questionNumber": 6,
    "text": "You must recommend a solution to protect the `MedicalHistory` data in the `ClaimsDetail` table. The solution must satisfy the Contoso developer requirements.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "row-level security (RLS)"
      },
      {
        "key": "B",
        "text": "Transparent Data Encryption (TDE)"
      },
      {
        "key": "C",
        "text": "Always Encrypted"
      },
      {
        "key": "D",
        "text": "data classification"
      },
      {
        "key": "E",
        "text": "dynamic data masking"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Luôn được mã hóa bảo vệ dữ liệu cột nhạy cảm bằng cách mã hóa dữ liệu đó ở phía máy khách và giữ các khóa mã hóa văn bản gốc bên ngoài SQL Server hoặc Azure SQL Database. Người dùng có quyền truy cập cơ sở dữ liệu nhưng thiếu quyền truy cập vào khóa chính của cột không thể xem các giá trị văn bản gốc. Việc che giấu dữ liệu động là không đủ đối với các vai trò cơ sở dữ liệu đặc quyền, bao gồm `db_owner`, vì chúng có thể xem dữ liệu không được che giấu.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 6",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/6-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-7",
    "questionNumber": 7,
    "text": "You have a Microsoft 365 E5 subscription.  \n  \nYou are designing a solution to protect confidential data in Microsoft SharePoint Online sites containing more than one million documents.  \n  \nYou need to recommend a solution that prevents Personally Identifiable Information (PII) from being shared.  \n  \nWhich two components should you include in the recommendation? Each correct answer represents part of the solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "data loss prevention (DLP) policies"
      },
      {
        "key": "B",
        "text": "retention label policies"
      },
      {
        "key": "C",
        "text": "eDiscovery cases"
      },
      {
        "key": "D",
        "text": "sensitivity label policies"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Chính sách DLP Microsoft Purview phát hiện PII thông qua các loại thông tin nhạy cảm trong nội dung SharePoint Online và có thể chặn chia sẻ ra bên ngoài khi quy tắc phù hợp. Chính sách nhãn nhạy cảm xuất bản các nhãn phân loại nội dung bí mật và áp dụng các cài đặt bảo vệ như mã hóa và kiểm soát quyền truy cập. Khả năng lưu giữ và khám phá điện tử giải quyết vấn đề quản lý và điều tra hồ sơ thay vì ngăn chặn việc chia sẻ dữ liệu.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 7",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/7-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-8",
    "questionNumber": 8,
    "text": "Your company has a Microsoft 365 subscription and uses Microsoft Defender for Identity.  \n  \nYou receive information about incidents related to compromised identities. You need to recommend a solution that exposes several accounts for attackers to exploit. When attackers try to exploit these accounts, an alert must be triggered.  \n  \nWhich Defender for Identity feature should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "sensitivity labels"
      },
      {
        "key": "B",
        "text": "custom user tags"
      },
      {
        "key": "C",
        "text": "standalone sensors"
      },
      {
        "key": "D",
        "text": "honeytoken entity tags"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Thẻ thực thể Honeytoken chỉ định các tài khoản mồi nhử dùng làm bẫy cho các tác nhân độc hại. Vì các tài khoản mã thông báo mật ong thường không hoạt động nên việc xác thực được liên kết với một tài khoản sẽ kích hoạt cảnh báo trong Bộ bảo vệ danh tính Microsoft.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 8",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/8-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-9",
    "questionNumber": 9,
    "text": "You have an Azure subscription containing a Microsoft Sentinel workspace named MWS1 and an Azure Data Lake Storage account named lake1. Firewall log data is ingested into MWS1.  \n  \nYou plan to export historical firewall log data from MWS1 to lake1.  \n  \nYou need to make sure that security analysts can perform threat hunting from MWS1, including the firewall logs stored in lake1 in threat-hunting queries.  \n  \nWhat should you configure?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Sổ ghi chép Microsoft Sentinel hỗ trợ điều tra theo chương trình và tìm kiếm mối đe dọa. Sổ ghi chép xuất dữ liệu lịch sử sử dụng Azure Synapse để xử lý nhật ký được xuất trên quy mô lớn, cho phép phân tích dữ liệu được lưu trữ trong Azure Data Lake Storage. Trình kết nối Playbooks và Ứng dụng Logic tự động hóa quy trình phản hồi, trong khi trình kết nối Nền tảng thông tin về mối đe dọa sẽ nhập các chỉ báo về mối đe dọa thay vì truy vấn nhật ký tường lửa được lưu trữ.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 9",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/9-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-10",
    "questionNumber": 10,
    "text": "You have an Azure subscription.  \n  \nYou plan to deploy a storage account named storage1 to hold confidential data, and you will apply tags to that confidential data.  \n  \nYou must ensure that access to storage1 can be defined by using the assigned tags.  \n  \nWhich authorization mechanism should you enable, and which resource type should store the data?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Azure ABAC bổ sung các điều kiện cho việc phân công vai trò Azure và có thể đánh giá các thuộc tính tài nguyên như thẻ chỉ mục blob. Azure Storage hỗ trợ ủy quyền dựa trên thẻ này cho Blob Storage, vì vậy dữ liệu bí mật yêu cầu điều kiện truy cập dựa trên thẻ phải được lưu trữ dưới dạng blob.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 10",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/10-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-11",
    "questionNumber": 11,
    "text": "You design cloud-based software-as-a-service (SaaS) solutions.  \n  \nYou need to recommend a recovery solution for ransomware attacks. The solution must adhere to Microsoft Security Best Practices.  \n  \nWhat should you recommend doing first?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Develop a privileged identity strategy."
      },
      {
        "key": "B",
        "text": "Implement data protection."
      },
      {
        "key": "C",
        "text": "Develop a privileged access strategy."
      },
      {
        "key": "D",
        "text": "Prepare a recovery plan."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Hướng dẫn về ransomware của Microsoft bắt đầu bằng việc chuẩn bị kế hoạch khôi phục ransomware để tổ chức có giải pháp thay thế xác định cho việc thanh toán tiền chuộc và có thể khôi phục quyền truy cập vào hệ thống và dữ liệu. Bảo vệ dữ liệu hỗ trợ kế hoạch đó, trong khi các chiến lược truy cập và nhận dạng đặc quyền là các biện pháp tiếp theo để hạn chế tác động của cuộc tấn công.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 11",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/11-design-solutions-that-align-with-security-best-practices-and",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-12",
    "questionNumber": 12,
    "text": "You have a Microsoft 365 tenant.  \n  \nRecommend a Microsoft 365 Defender solution that improves tenant security and meets these requirements:  \n  \n- Identify users downloading an unusually large number of files from Microsoft SharePoint Online sites who could be attempting data exfiltration.  \n- Block Microsoft Teams messages containing potentially malicious content by using zero-hour auto purge (ZAP).  \n  \nWhat should you recommend for each requirement?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Ứng dụng Microsoft Defender for Cloud sử dụng tính năng phát hiện bất thường cũng như phân tích hành vi của người dùng và thực thể để xác định hoạt động tải xuống nhiều tệp bất thường trong SharePoint Online, hoạt động này có thể chỉ ra việc lọc dữ liệu. Bộ bảo vệ Microsoft dành cho Office 365 cung cấp ZAP cho Teams, tính năng này sẽ cách ly các thông báo nội bộ của Team sau đó được xác định là phần mềm độc hại hoặc lừa đảo có độ tin cậy cao.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 12",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/12-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-13",
    "questionNumber": 13,
    "text": "You plan to implement an Azure environment based on Microsoft Cloud Adoption Framework enterprise-scale landing zone architecture principles. The environment will host three apps with these characteristics:  \n  \n- Each app will have development, test, and production environments.  \n- A separate team will manage each environment.  \n- Each app will store its secrets in Azure Key Vault.  \n  \nRecommend the number of Azure subscriptions and key vaults to deploy to the application landing zones.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Sử dụng một đăng ký cho mỗi môi trường ứng dụng để tách biệt môi trường phát triển, thử nghiệm và sản xuất, đồng thời để các nhóm riêng biệt quản lý phạm vi riêng của họ: 3 ứng dụng × 3 môi trường = 9 đăng ký. Sử dụng một Key Vault cho mỗi ứng dụng và môi trường để duy trì sự cách ly bí mật: 3 × 3 = 9 kho khóa.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 13",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/13-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-14",
    "questionNumber": 14,
    "text": "You are developing a ransomware response plan that adheres to Microsoft Security Best Practices.  \n  \nYou need to recommend a solution that minimizes the risk that a ransomware attack will encrypt local user files.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Windows Defender Device Guard"
      },
      {
        "key": "B",
        "text": "Microsoft Defender for Endpoint"
      },
      {
        "key": "C",
        "text": "Azure Files"
      },
      {
        "key": "D",
        "text": "BitLocker Drive Encryption (BitLocker)"
      },
      {
        "key": "E",
        "text": "protected folders"
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "Các thư mục được bảo vệ, được sử dụng với Quyền truy cập thư mục được kiểm soát của Bộ bảo vệ Microsoft, ngăn các ứng dụng không đáng tin cậy thay đổi tệp trong các thư mục đó. Điều này trực tiếp chặn ransomware mã hóa các tệp người dùng cục bộ được bảo vệ.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 14",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/14-design-solutions-that-align-with-security-best-practices-and",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-15",
    "questionNumber": 15,
    "text": "Your company uses an Azure App Service plan to deploy containerized web apps.  \n  \nYou are designing a secure DevOps approach for deploying the web apps to that App Service plan. Recommend how to integrate code-scanning tools into a secure software development lifecycle. Scan the code during these two phases:  \n  \n- Uploading code to repositories  \n- Building containers  \n  \nWhere should code scanning be integrated for each phase?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Quá trình quét mã GitHub Enterprise có thể chạy khi mã được đẩy vào kho lưu trữ, xác định các lỗ hổng tại thời điểm tải mã lên. Azure Pipelines là môi trường xây dựng CI nên các công cụ quét vùng chứa và bảo mật có thể được tích hợp vào quy trình xây dựng vùng chứa trước khi triển khai.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 15",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/15-design-solutions-that-align-with-security-best-practices-and",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-16",
    "questionNumber": 16,
    "text": "You have two Azure subscriptions, **Sub1** and **Sub2**, that contain the vaults shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783896803445-0dt0srdc.png)  \n  \nYou need to design a multi-user authorization (MUA) solution for security operations on the vaults. The solution must meet these requirements:  \n  \n- RSVault1 and RSVault2 must require MUA to disable soft delete, remove MUA protection, and disable immutability.  \n- BackupVault1 and BackupVault2 must require MUA to disable soft delete and remove MUA protection.  \n  \nWhat is the minimum number of Resource Guard resources required?",
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
      "B"
    ],
    "explanation": "Bộ bảo vệ tài nguyên phải ở cùng vùng Azure với Recovery Services vault hoặc Kho dự phòng mà nó bảo vệ. Do đó, một Bộ bảo vệ Tài nguyên có thể bảo vệ cả hai kho tiền ở Đông Hoa Kỳ và một bộ phận thứ hai có thể bảo vệ cả hai kho tiền ở Tây Hoa Kỳ. Resource Guard hỗ trợ các biện pháp bảo vệ bắt buộc cần thiết để vô hiệu hóa tính năng xóa mềm và loại bỏ bảo vệ MUA, đồng thời có thể bảo vệ hoạt động vô hiệu hóa tính năng bất biến tùy chọn cho các kho Dịch vụ Khôi phục.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783896803445-0dt0srdc.png",
    "sourceTitle": "Examcademy SC-100 Question 16",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/16-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-17",
    "questionNumber": 17,
    "text": "You have a Microsoft 365 E5 subscription and an Azure subscription.  \n  \nYou need to assess the existing environment to improve the overall security posture of these components:  \n  \n- Windows 11 devices managed by Microsoft Intune  \n- Azure Storage accounts  \n- Azure virtual machines  \n  \nWhat should you use to evaluate the components?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Bộ bảo vệ Microsoft 365 (bao gồm Bộ bảo vệ dành cho Điểm cuối) cung cấp đánh giá mức độ phơi nhiễm và trạng thái bảo mật thiết bị cho các điểm cuối Windows được quản lý. Microsoft Defender for Cloud liên tục đánh giá tài nguyên Azure và đưa ra các đề xuất bảo mật cho cả máy ảo và tài khoản lưu trữ.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 17",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/17-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-18",
    "questionNumber": 18,
    "text": "You have an Azure subscription that includes multiple Azure Data Lake Storage accounts.  \n  \nYou need to recommend a solution that encrypts the accounts’ content by using service-side encryption and customer-managed keys. The solution must ensure that individual encryption keys are applied at the finest-grained level.  \n  \nAt what level should you recommend applying the encryption?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "file"
      },
      {
        "key": "B",
        "text": "container"
      },
      {
        "key": "C",
        "text": "folder"
      },
      {
        "key": "D",
        "text": "account"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Phạm vi mã hóa Bộ lưu trữ Azure có thể được bảo vệ bằng khóa do khách hàng quản lý và áp dụng cho từng blob riêng lẻ. Vì tệp Azure Data Lake Storage được lưu trữ dưới dạng blob nên việc áp dụng phạm vi mã hóa cho mỗi tệp sẽ cung cấp phép gán khóa chi tiết nhất. Phạm vi vùng chứa và tài khoản áp dụng một khóa cho các tập hợp dữ liệu rộng hơn và các thư mục không phải là cấp phạm vi mã hóa.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 18",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/18-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-19",
    "questionNumber": 19,
    "text": "Solution: For Azure SQL databases, recommend Transparent Data Encryption (TDE) that uses customer-managed keys (CMKs).  \n  \nDoes this satisfy the goal?",
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
    "explanation": "Mã hóa dữ liệu trong suốt Azure SQL sử dụng khóa mã hóa cơ sở dữ liệu AES-256 để mã hóa ở trạng thái lưu trữ. Khóa do khách hàng quản lý cung cấp cho khách hàng quyền kiểm soát vòng đời của bộ bảo vệ TDE, bao gồm cả việc xoay vòng và Azure SQL có thể tự động xoay sang phiên bản khóa mới được kích hoạt từ Azure Key Vault hoặc HSM được quản lý. Điều này hỗ trợ lịch trình luân chuyển khóa hàng tháng.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 19",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/19-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-20",
    "questionNumber": 20,
    "text": "Solution: For blob containers in Azure Storage, you recommend encryption that uses Microsoft-managed keys in an encryption scope.  \n  \nDoes this meet the goal?",
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
    "explanation": "Bộ lưu trữ Azure sử dụng mã hóa AES 256 bit ở trạng thái lưu trữ và phạm vi mã hóa hỗ trợ các khóa do Microsoft quản lý cho vùng chứa và đốm màu. Tuy nhiên, các khóa do Microsoft quản lý sẽ được Microsoft luân chuyển theo lịch trình dựa trên sự tuân thủ của riêng mình; họ không hỗ trợ lịch trình luân chuyển hàng tháng do khách hàng chỉ định. Các yêu cầu xoay vòng cụ thể yêu cầu khóa do khách hàng quản lý.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 20",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/20-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-21",
    "questionNumber": 21,
    "text": "Solution: For Azure SQL databases, recommend Transparent Data Encryption (TDE) using Microsoft-managed keys.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Mã hóa dữ liệu trong suốt do dịch vụ Azure SQL quản lý sử dụng AES-256, nhưng Microsoft luân chuyển chứng chỉ TDE tích hợp mỗi năm một lần. Nó không cung cấp lịch xoay vòng hàng tháng có thể định cấu hình, vì vậy nó không thể đáp ứng yêu cầu xoay khóa mã hóa hàng tháng.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 21",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/21-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-22",
    "questionNumber": 22,
    "text": "Solution: For Azure Storage blob containers, recommend encryption using customer-managed keys (CMKs).  \n  \nDoes this satisfy the goal?",
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
    "explanation": "Mã hóa Azure Storage sử dụng AES 256 bit và các khóa do khách hàng quản lý có thể được lưu trữ trong Azure Key Vault hoặc HSM được quản lý. Chính sách xoay vòng Key Vault có thể tạo phiên bản khóa mới hàng tháng; khi cập nhật phiên bản khóa tự động được đặt cấu hình, Bộ lưu trữ Azure sẽ phát hiện và sử dụng phiên bản mới nhất. [Customer-managed keys for account encryption - Azure Storage](https://learn.microsoft.com/en-us/azure/storage/common/customer-managed-keys-overview)",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 22",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/22-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-23",
    "questionNumber": 23,
    "text": "Your company has an office in Seattle.  \n  \nThe company has two Azure virtual machine scale sets hosted on separate virtual networks. The company plans to hire contract developers in India.  \n  \nYou need to recommend a solution that gives the developers the ability to connect to the virtual machines over SSL from the Azure portal. The solution must meet the following requirements:  \n  \n- Prevent the virtual machines’ public IP addresses from being exposed.  \n- Provide the ability to connect without using a VPN.  \n- Minimize costs.  \n  \nWhich two actions should you perform? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create a hub and spoke network by using virtual network peering."
      },
      {
        "key": "B",
        "text": "Deploy Azure Bastion to each virtual network."
      },
      {
        "key": "C",
        "text": "Deploy Azure Bastion to one virtual network."
      },
      {
        "key": "D",
        "text": "Create NAT rules and network rules in Azure Firewall."
      },
      {
        "key": "E",
        "text": "Enable just-in-time VM access on the virtual machines."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Azure Bastion cung cấp kết nối RDP/SSH dựa trên trình duyệt thông qua cổng Azure trong khi kết nối với các máy ảo mục tiêu bằng địa chỉ IP riêng, do đó VM không yêu cầu địa chỉ IP công cộng hoặc VPN. Với virtual network peering, một máy chủ Bastion có thể kết nối với máy ảo trong cả VNet của chính nó và VNet ngang hàng; hợp nhất việc triển khai vào một VNet giúp giảm thiểu chi phí Bastion.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 23",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/23-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-24",
    "questionNumber": 24,
    "text": "Your company has a main office and 10 branch offices. Each branch office has an on-premises file server running Windows Server and multiple devices running either Windows 11 or macOS. The devices are enrolled in Microsoft Intune.  \n  \nYou have a Microsoft Entra tenant.  \n  \nYou need to deploy Global Secure Access to provide web filtering for device traffic to the internet. The solution must ensure that all web traffic from devices in the branch offices is controlled by using Global Secure Access.  \n  \nWhat should you do first at each branch office?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Configure an Intune policy to onboard Microsoft Defender for Endpoint to each device."
      },
      {
        "key": "B",
        "text": "Configure an IPsec tunnel on the router."
      },
      {
        "key": "C",
        "text": "Install the Microsoft Entra private network connector on the file server."
      },
      {
        "key": "D",
        "text": "Configure an Intune policy to deploy the Global Secure Access client to each device."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Kết nối mạng từ xa Truy cập An toàn Toàn cầu kiểm soát lưu lượng truy cập cho toàn bộ chi nhánh bằng cách thiết lập đường hầm IPsec từ bộ định tuyến nhánh hoặc thiết bị mạng tại chỗ khác đến điểm cuối Truy cập An toàn Toàn cầu. Đường hầm có thể định tuyến tất cả lưu lượng truy cập chi nhánh trên internet thông qua Truy cập an toàn toàn cầu để lọc nội dung web mà không yêu cầu ứng dụng khách trên mọi thiết bị.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 24",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/24-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-25",
    "questionNumber": 25,
    "text": "You have a Microsoft Entra tenant containing 10 Windows 11 devices and two groups named Group1 and Group2. The Windows 11 devices are joined to the Microsoft Entra tenant and managed by using Microsoft Intune.  \n  \nYou are designing a privileged-access strategy based on the rapid modernization plan (RaMP). The strategy will include these configurations:  \n  \n- Each user in Group1 will be assigned a Windows 11 device configured as a privileged access device.  \n- The Security Administrator role will be mapped to the privileged access security level.  \n- Users in Group1 will be assigned the Security Administrator role.  \n- Users in Group2 will manage the privileged access devices.  \n  \nYou need to configure the local Administrators group on each privileged access device. The solution must adhere to the principle of least privilege.  \n  \nWhat should you include in the solution?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Only add Group2 to the local Administrators group."
      },
      {
        "key": "B",
        "text": "Configure Windows Local Administrator Password Solution (Windows LAPS) in legacy Microsoft LAPS emulation mode."
      },
      {
        "key": "C",
        "text": "Add Group2 to the local Administrators group. Add the user that is assigned the Security Administrator role to the local Administrators group of the user's assigned privileged access device."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Trên thiết bị truy cập đặc quyền, đặc quyền tối thiểu yêu cầu người sử dụng thiết bị KHÔNG phải là quản trị viên cục bộ, do đó họ không thể làm suy yếu cấu hình cứng. Hướng dẫn triển khai quyền truy cập đặc quyền/RaMP của Microsoft nêu rõ rằng người dùng máy trạm đặc quyền phải có quyền quản trị viên no trên máy của họ và đặt \"Quản trị viên cục bộ bổ sung trên các thiết bị đã tham gia Microsoft Entra\" thành Không có. Chỉ nhóm quản lý thiết bị - Group2 - mới thuộc nhóm Quản trị viên cục bộ. Option C thêm Quản trị viên bảo mật (người dùng thiết bị từ Nhóm1) vào quản trị viên cục bộ trên thiết bị của họ, điều này vi phạm đặc quyền tối thiểu nên sai.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 25",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/25-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-26",
    "questionNumber": 26,
    "text": "You have an Azure subscription.  \n  \nYou plan to implement Azure Synapse Analytics SQL dedicated pools and SQL serverless pools.  \n  \nYou need to recommend an additional encryption-at-rest security solution for each pool type. Use customer-managed keys whenever possible.  \n  \nWhat should you recommend for each pool type?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Nhóm SQL không có máy chủ có bộ lưu trữ SQL cố định no và dựa vào mã hóa Bộ lưu trữ Azure; Mã hóa cơ sở hạ tầng bổ sung lớp mã hóa lưu trữ bằng các khóa do Microsoft quản lý. Nhóm SQL chuyên dụng hỗ trợ TDE với trình bảo vệ TDE do khách hàng quản lý trong Azure Key Vault, vì vậy đây là lựa chọn thích hợp khi có sẵn khóa do khách hàng quản lý.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 26",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/26-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-27",
    "questionNumber": 27,
    "text": "To satisfy the application security requirements, which two authentication methods must the applications support? Each correct answer provides a complete solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Security Assertion Markup Language (SAML)"
      },
      {
        "key": "B",
        "text": "NTLMv2"
      },
      {
        "key": "C",
        "text": "certificate-based authentication"
      },
      {
        "key": "D",
        "text": "Kerberos"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Proxy ứng dụng Microsoft Entra hỗ trợ đăng nhập một lần SAML cho các ứng dụng tại chỗ sử dụng mã thông báo SAML do Microsoft Entra phát hành. Nó cũng hỗ trợ xác thực Windows tích hợp bằng cách sử dụng Ủy quyền ràng buộc Kerberos, vì những ứng dụng đó yêu cầu phiếu Kerberos. Không thể sử dụng NTLM làm phương thức xác thực trước Proxy ứng dụng hoặc SSO và các ứng dụng yêu cầu xác thực chứng chỉ ứng dụng khách không được hỗ trợ vì Proxy ứng dụng chấm dứt TLS.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 27",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/27-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-28",
    "questionNumber": 28,
    "text": "You have an Azure subscription containing an Azure Bastion host and 100 Windows Server 2022 virtual machines. Microsoft Defender for Servers Plan 2 is enabled on the virtual machines.  \n  \nRecommend a virtual-machine security solution that meets these requirements:  \n  \n- Administrators must request RDP access to the virtual machines through the Azure portal.  \n- Remote Desktop sessions must be restricted to a maximum of three hours.  \n- Agentless scanning must be scheduled for every virtual machine.  \n  \nWhat should you recommend using?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Quyền truy cập VM đúng lúc (JIT) là tính năng Defender for Cloud giúp đóng các cổng quản lý và yêu cầu quản trị viên yêu cầu quyền truy cập RDP thông qua cổng Azure, cấp quyền truy cập có giới hạn thời gian với thời lượng tối đa có thể định cấu hình (mặc định là ba giờ), đáp ứng cả yêu cầu về yêu cầu thông qua cổng thông tin và giới hạn ba giờ. Để quét không cần tác nhân, công cụ phù hợp là Quản lý lỗ hổng bảo vệ của Microsoft: quét máy không cần tác nhân trong Bộ bảo vệ dành cho máy chủ Gói 2 sẽ chụp ảnh nhanh đĩa và phân tích chúng bằng Quản lý lỗ hổng bảo vệ tích hợp, có cài đặt tác nhân no. Máy quét Qualys và Rapid7 là các giải pháp dựa trên tác nhân/tiện ích mở rộng (BYOL) và máy quét Qualys tích hợp không được dùng nữa nên chúng không đáp ứng yêu cầu không cần tác nhân.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 28",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/28-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-29",
    "questionNumber": 29,
    "text": "You have an Azure subscription.  \n  \nYou also have a subscription with a third-party cloud provider. That subscription contains 100 virtual machines.  \n  \nYou manage cloud security for both subscriptions from the Azure subscription.  \n  \nYou need to recommend a solution for validating the security posture of the virtual machines.  \n  \nWhich two services should you include in the recommendation? Each correct answer presents part of the solution.  \n  \n> NOTE: Each correct answer is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Sentinel"
      },
      {
        "key": "B",
        "text": "Azure Arc"
      },
      {
        "key": "C",
        "text": "Microsoft Defender for Cloud"
      },
      {
        "key": "D",
        "text": "Azure Lighthouse"
      },
      {
        "key": "E",
        "text": "Microsoft Defender for Endpoint"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Azure Arc kết nối và quản lý không phải Azure virtual machines từ Azure, mở rộng khả năng quản trị Azure sang các máy chủ đám mây của bên thứ ba. Microsoft Defender for Cloud cung cấp khả năng quản lý trạng thái bảo mật đám mây, liên tục đánh giá các tài nguyên kết hợp và đa đám mây cũng như đưa ra các đề xuất bảo mật. Cùng nhau, chúng kích hoạt xác thực tư thế cho các máy ảo của bên thứ ba từ đăng ký Azure.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 29",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/29-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-30",
    "questionNumber": 30,
    "text": "You have a Microsoft 365 tenant that uses Microsoft SharePoint Online and Microsoft Purview. Microsoft Purview has a sensitivity label named Label1 that is applied to files stored on SharePoint Online sites.  \n  \nYou need to recommend a Microsoft Purview Data Loss Prevention (DLP) policy that meets these requirements:  \n  \n- Prevent users from uploading the files to third-party external websites.  \n- Allow users to upload the files to Microsoft OneDrive for Business.  \n  \nTo which location should the DLP policy be applied?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Devices"
      },
      {
        "key": "B",
        "text": "OneDrive accounts"
      },
      {
        "key": "C",
        "text": "SharePoint sites"
      },
      {
        "key": "D",
        "text": "Microsoft Defender for Cloud Apps"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Các chính sách DLP điểm cuối trong phạm vi **Thiết bị** có thể hạn chế tải lên các tệp được gắn nhãn nhạy cảm lên các miền dịch vụ đám mây đã định cấu hình. Điều này cho phép hạn chế các miền trang web bên ngoài của bên thứ ba trong khi Microsoft OneDrive for Business vẫn là đích đến được phép.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 30",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/30-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-31",
    "questionNumber": 31,
    "text": "You have an Azure subscription and a Microsoft 365 subscription. Every user has a Microsoft 365 E5 license. All computers run Windows 11 and are Microsoft Entra joined.  \n  \nYou need to recommend a solution that prevents computers running early Windows 11 builds from connecting to Microsoft 365 services.  \n  \nWhich two policy types should the recommendation include? Each correct answer represents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Defender for Endpoint endpoint security policy"
      },
      {
        "key": "B",
        "text": "Microsoft Defender for Cloud regulatory compliance policy"
      },
      {
        "key": "C",
        "text": "Microsoft Intune compliance policy"
      },
      {
        "key": "D",
        "text": "Microsoft Entra ID Protection sign-in risk policy"
      },
      {
        "key": "E",
        "text": "Microsoft Entra Conditional Access policy"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "Chính sách tuân thủ của Microsoft Intune có thể yêu cầu phiên bản hệ điều hành Windows tối thiểu và đánh dấu các thiết bị chạy bản dựng cũ hơn là không tuân thủ. Truy cập có điều kiện của Microsoft Entra có thể yêu cầu các thiết bị truy cập dịch vụ Microsoft 365 phải được đánh dấu là tuân thủ, điều này sẽ chặn quyền truy cập của các thiết bị không tuân thủ đó.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 31",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/31-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-32",
    "questionNumber": 32,
    "text": "You have a Microsoft 365 E5 subscription containing 1,000 Windows 11 Pro devices enrolled in Microsoft Intune.  \n  \nRecommend a Microsoft Defender for Cloud Apps solution that meets these requirements. Select the appropriate policy type for each requirement.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Chính sách Phiên cung cấp khả năng kiểm soát tải xuống tệp ở cấp phiên, theo thời gian thực bằng tính năng kiểm tra nội dung và có thể áp dụng nhãn độ nhạy Microsoft Purview cho tệp đã tải xuống. Chính sách Access có thể sử dụng trạng thái thiết bị tuân thủ Intune được chuyển từ Microsoft Entra Conditional Access để cho phép hoặc chặn quyền truy cập vào Dropbox.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 32",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/32-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-33",
    "questionNumber": 33,
    "text": "You need to recommend a multi-tenant and hybrid security solution that meets the business and hybrid requirements. What should you recommend?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Azure Lighthouse cho phép quản lý tập trung, nhiều người thuê đối với các tài nguyên và đăng ký Azure được ủy quyền. Azure Arc mở rộng các dịch vụ quản lý và quản trị Azure cho cơ sở hạ tầng tại chỗ và các tài nguyên không phải của Azure khác.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 33",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/33-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-34",
    "questionNumber": 34,
    "text": "Your company has an Azure subscription that uses Azure Storage.  \n  \nThe company plans to share particular blobs with vendors. You need to recommend a solution that gives vendors secure access to those specific blobs without making the blobs public. Access must be time-limited.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Configure private link connections."
      },
      {
        "key": "B",
        "text": "Configure encryption by using customer-managed keys (CMKs)."
      },
      {
        "key": "C",
        "text": "Share the connection string of the access key."
      },
      {
        "key": "D",
        "text": "Create shared access signatures (SAS)."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Chữ ký truy cập được chia sẻ (SAS) cung cấp quyền truy cập được ủy quyền an toàn vào các tài nguyên Bộ lưu trữ Azure được chỉ định. Nó có thể hạn chế các quyền và xác định khoảng thời gian hiệu lực, cho phép các nhà cung cấp chỉ truy cập vào các đốm màu dự định trong một thời gian giới hạn mà không bị công khai hoặc tiết lộ khóa tài khoản lưu trữ.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 34",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/34-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-35",
    "questionNumber": 35,
    "text": "You have a Microsoft 365 subscription protected by Microsoft 365 Defender.  \n  \nYou are designing a security operations strategy that uses Microsoft Sentinel to monitor events from Microsoft 365 and Microsoft 365 Defender.  \n  \nRecommend a solution that meets these requirements:  \n  \n- Integrate Microsoft Sentinel with a third-party security vendor to access information about known malware.  \n- Automatically create incidents when events detect the IP address of a command-and-control server.  \n  \nWhat should you configure in Microsoft Sentinel for each requirement?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Trình kết nối thông tin về mối đe dọa tích hợp Microsoft Sentinel với các nguồn thông tin về mối đe dọa bên ngoài được hỗ trợ và sử dụng các chỉ báo của chúng, bao gồm các địa chỉ IP độc hại đã biết và thông tin liên quan đến phần mềm độc hại. Quy tắc truy vấn phân tích được lên lịch có thể chạy dựa trên các sự kiện đã được nhập và tạo ra sự cố khi truy vấn của quy tắc đó xác định địa chỉ IP lệnh và kiểm soát.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 35",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/35-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-36",
    "questionNumber": 36,
    "text": "You must recommend a strategy to secure the litware.com forest that meets the identity requirements.  \n  \nWhat should be included in the recommendation?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Azure AD Identity Protection xác định và phản hồi những người dùng rủi ro cũng như những lần đăng nhập rủi ro trong Azure AD/Entra ID. Bộ bảo vệ danh tính Microsoft phân tích tín hiệu từ Active Directory tại chỗ để phát hiện, điều tra và ứng phó với các cuộc tấn công danh tính chống lại AD DS.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 36",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/36-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-37",
    "questionNumber": 37,
    "text": "You have an Active Directory Domain Services (AD DS) domain that includes a virtual desktop infrastructure (VDI). The VDI uses non-persistent images and cloned virtual-machine templates, and VDI devices belong to the domain.  \n  \nYou have an Azure subscription containing an Azure Virtual Desktop environment. The environment has host pools that use a custom golden image. Every Azure Virtual Desktop deployment belongs to one Microsoft Entra Domain Services domain.  \n  \nRecommend a way to deploy Microsoft Defender for Endpoint to the hosts that meets these requirements:  \n  \n- Hosts are onboarded to Defender for Endpoint during their first startup sequence.  \n- The Microsoft Defender portal has one entry for every deployed VDI host.  \n- Administrative effort is minimized.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Đối với các bản sao VDI không liên tục, mẫu phải không được đưa vào bảng vì các bản sao sẽ kế thừa danh tính Defender for Endpoint của nó. Các tập lệnh tích hợp VDI được đặt trong mẫu và chạy dưới dạng tập lệnh khởi động sau khi bản sao nhận được tên máy chủ cuối cùng, hỗ trợ một mục nhập thiết bị duy nhất. Đối với Azure Virtual Desktop, Microsoft khuyên bạn nên thêm và định cấu hình tập lệnh tích hợp ở hình ảnh màu vàng để mỗi máy chủ được cấp phép chạy tập lệnh đó ở lần khởi động đầu tiên; bản thân hình ảnh vàng không được đưa lên.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 37",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/37-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-38",
    "questionNumber": 38,
    "text": "You plan to deploy an Azure API Management solution that will allow different groups of developers to access different API sets at varying times and rates.  \n  \nRecommend the pricing tier to purchase and the scope at which rate-limit policies should be applied. The solution must meet these requirements:  \n  \n- Ensure each developer group can access only specific API sets.  \n- Ensure each API set can be configured with specific rate limits.  \n- Minimize development and administrative effort and costs.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Gói sản phẩm Quản lý API API và đăng ký kiểm soát nhóm nhà phát triển nào có thể sử dụng từng gói. Chính sách giới hạn tỷ lệ ở phạm vi sản phẩm áp dụng giới hạn cho các API trong sản phẩm đó, cho phép giới hạn riêng cho mỗi bộ API với cấu hình ít trùng lặp hơn so với các chính sách ở phạm vi API. Tiêu chuẩn V2 dành cho khối lượng công việc sản xuất và hỗ trợ mô hình chính sách và sản phẩm được yêu cầu; Tiêu thụ không hỗ trợ chính sách giới hạn tỷ lệ linh hoạt theo khóa.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 38",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/38-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-39",
    "questionNumber": 39,
    "text": "You have an Azure subscription containing 15 custom apps. The apps’ source files are kept in Git repositories, and the apps are deployed by using Azure DevOps.  \n  \nYou need to recommend a DevSecOps solution that implements static application security testing (SAST) of the app code to detect hard-coded secrets.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "GitHub Advanced Security"
      },
      {
        "key": "B",
        "text": "Microsoft Defender for Key Vault"
      },
      {
        "key": "C",
        "text": "Microsoft Dev Box"
      },
      {
        "key": "D",
        "text": "Microsoft Defender for Cloud DevOps security"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "GitHub Advanced Security dành cho Azure DevOps thực hiện quét bí mật trên các kho lưu trữ mã, bao gồm cả lịch sử Git của chúng, để phát hiện các bí mật bị lộ như mã thông báo, mật khẩu, khóa và thông tin xác thực. Microsoft Defender for Cloud có thể hiển thị và ưu tiên những phát hiện này, nhưng quá trình quét bí mật kho lưu trữ mã của nó phụ thuộc vào GitHub Advanced Security.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 39",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/39-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-40",
    "questionNumber": 40,
    "text": "You have a Microsoft 365 subscription.  \n  \nMicrosoft Purview is configured to protect data only in Microsoft Exchange Online and SharePoint Online. Custom sensitive information types (SITs) have been created to identify confidential data.  \n  \nYou find that users access third-party generative AI websites from their Windows devices. You must recommend a solution that blocks AI prompts containing confidential data and scans prompts submitted to the third-party websites.  \n  \nWhat should you recommend for each requirement?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Ngăn chặn mất dữ liệu điểm cuối Microsoft Purview có thể sử dụng các loại thông tin nhạy cảm trong chính sách DLP để phát hiện và chặn dữ liệu nhạy cảm được chia sẻ thông qua hoạt động trình duyệt được hỗ trợ, bao gồm cả nội dung gửi tới các trang web AI tổng hợp của bên thứ ba. Các thiết bị phải được tích hợp Microsoft Purview trước khi DLP điểm cuối có thể kiểm tra và thực thi chính sách đối với hoạt động trên các thiết bị Windows đó.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 40",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/40-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-41",
    "questionNumber": 41,
    "text": "A customer deploys Docker images to 10 Azure Kubernetes Service (AKS) resources across four Azure subscriptions.  \n  \nYou are assessing the customer's security posture. You find that the AKS resources are excluded from the secure score recommendations.  \n  \nYou need to generate accurate recommendations and update the secure score.  \n  \nWhich two actions should you recommend in Microsoft Defender for Cloud? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Enable Defender plans."
      },
      {
        "key": "B",
        "text": "Configure auto provisioning."
      },
      {
        "key": "C",
        "text": "Add a workflow automation."
      },
      {
        "key": "D",
        "text": "Assign regulatory compliance policies."
      },
      {
        "key": "E",
        "text": "Review the inventory."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Bộ bảo vệ Microsoft dành cho Bộ chứa phải được bật để cung cấp các đề xuất và khả năng bảo mật của Kubernetes. Với tính năng cung cấp tự động được bật cho gói đó, Defender for Cloud triển khai cảm biến Defender cho các cụm AKS được hỗ trợ, cho phép giám sát và đánh giá cần thiết cho những đề xuất đó.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 41",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/41-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-42",
    "questionNumber": 42,
    "text": "A customer has a Microsoft 365 E5 subscription and an Azure subscription.  \n  \nThe customer wants to centrally manage security incidents, analyze logs, audit activities, and search for potential threats across every deployed service.  \n  \nYou need to recommend a solution for the customer.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Defender for Cloud"
      },
      {
        "key": "B",
        "text": "Microsoft Defender for Cloud Apps"
      },
      {
        "key": "C",
        "text": "Microsoft 365 Defender"
      },
      {
        "key": "D",
        "text": "Microsoft Sentinel"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Microsoft Sentinel là nền tảng SIEM dựa trên đám mây, tập trung điều tra và quản lý sự cố bảo mật, phân tích dữ liệu nhật ký được thu thập, hỗ trợ kiểm tra các hoạt động và truy vấn, đồng thời cung cấp các công cụ săn lùng mối đe dọa trên các nguồn dữ liệu của tổ chức.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 42",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/42-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-43",
    "questionNumber": 43,
    "text": "You have a Microsoft 365 E5 subscription.  \n  \nYou need to mitigate ransomware attacks against messages posted to Microsoft Teams channels and files stored in Teams channels.  \n  \nWhat should the solution include for each content type?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Thông báo trên kênh của Nhóm được lưu trữ trong các hộp thư Exchange Online ẩn và các tệp kênh của Nhóm được lưu trữ trong SharePoint/OneDrive, do đó, mỗi loại nội dung đều được bảo vệ bằng các điều khiển gốc của dịch vụ sao lưu tương ứng. Đối với thư, Exchange Online Protection (EOP) quét nội dung và tệp đính kèm trong thời gian thực, đồng thời xóa các mục có chứa phần mềm độc hại/phần mềm tống tiền đã biết hoặc bị nghi ngờ, đây là biện pháp giảm thiểu phần mềm tống tiền mà các tài liệu của Microsoft dành cho dữ liệu được Exchange hỗ trợ; thư viện Preservation Hold là một cấu trúc tệp SharePoint và không áp dụng cho thư, đồng thời Single Item Recovery chỉ khôi phục các mục thư đã xóa thay vì giảm nhẹ phần mềm tống tiền. Đối với các tệp, Khôi phục tệp cho phép bạn khôi phục thư viện SharePoint/OneDrive về một thời điểm đã biết trong vòng 30 ngày qua, khôi phục trực tiếp từ một sự kiện mã hóa, trong khi đó Litigation Hold và thư viện Preservation Hold là các cơ chế lưu giữ/eDiscovery chứ không phải các công cụ khôi phục tại thời điểm.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 43",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/43-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-44",
    "questionNumber": 44,
    "text": "Your company is migrating a big data solution to Azure.  \n  \nThe company intends to use the following storage workloads:  \n  \n- Azure Storage blob containers  \n- Azure Data Lake Storage Gen2  \n- Azure Storage file shares -  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783809452975-tkqsmrdu.png)  \n  \n- Azure Disk Storage  \n  \nWhich two storage workloads support authentication by using Azure Active Directory (Azure AD)? Each correct answer presents a complete solution.  \n  \n> NOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Storage file shares"
      },
      {
        "key": "B",
        "text": "Azure Disk Storage"
      },
      {
        "key": "C",
        "text": "Azure Storage blob containers"
      },
      {
        "key": "D",
        "text": "Azure Data Lake Storage Gen2"
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Azure Blob Storage hỗ trợ xác thực Microsoft Entra ID thông qua mã thông báo OAuth và Azure RBAC. Azure Data Lake Storage Gen2 hỗ trợ nhận dạng Microsoft Entra ID cho RBAC và ủy quyền dựa trên ACL vì nó được triển khai trên Azure Blob Storage. Azure Disk Storage không cung cấp mô hình xác thực truy cập dữ liệu này.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783809452975-tkqsmrdu.png",
    "sourceTitle": "Examcademy SC-100 Question 44",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/44-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-45",
    "questionNumber": 45,
    "text": "Your company plans to migrate all on-premises virtual machines to Azure.  \n  \nA network engineer proposes the Azure virtual network design shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783809805078-7i9zsyy7.jpg)  \n  \nYou need to recommend an Azure Bastion deployment that provides secure remote access to all virtual machines.  \n  \nBased on the virtual network design, how many Azure Bastion subnets are required?",
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
      },
      {
        "key": "E",
        "text": "5"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Máy chủ Azure Bastion cung cấp quyền truy cập RDP/SSH vào các máy ảo trong mạng ảo của chính nó và trong các mạng ảo ngang hàng trực tiếp. Việc triển khai Bastion trong Hub VNet có thể phục vụ Hub VNet, VNet1 và VNet2; lần triển khai thứ hai trong VNet3 hoặc VNet4 có thể phục vụ cả hai mạng ảo ngang hàng đó. Vì hai nhóm ngang hàng bị ngắt kết nối nên cần có hai mạng con AzureBastionSubnet chuyên dụng.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783809805078-7i9zsyy7.jpg",
    "sourceTitle": "Examcademy SC-100 Question 45",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/45-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-46",
    "questionNumber": 46,
    "text": "You have a Microsoft Entra tenant called contoso.onmicrosoft.com and an Azure subscription called Sub1.  \n  \nYou need to implement Microsoft Entra Verified ID by using Quick Verified ID setup.  \n  \nWhat should you create first?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a security principal in contoso.onmicrosoft.com"
      },
      {
        "key": "B",
        "text": "a custom domain in contoso.onmicrosoft.com"
      },
      {
        "key": "C",
        "text": "a user-assigned managed identity in Sub1"
      },
      {
        "key": "D",
        "text": "an Azure key vault in Sub1"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Thiết lập ID được xác minh nhanh yêu cầu miền tùy chỉnh được đăng ký trong đối tượng thuê Microsoft Entra; nếu không có thì Thiết lập nhanh sẽ không khả dụng và đối tượng thuê sẽ sử dụng trải nghiệm thiết lập nâng cao theo mặc định. Thiết lập nhanh sử dụng khóa ký chung do Microsoft quản lý nên không yêu cầu Azure Key Vault hoặc user-assigned managed identity.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 46",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/46-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-47",
    "questionNumber": 47,
    "text": "Your company intends to apply the Zero Trust Rapid Modernization Plan (RaMP) to its IT environment.  \n  \nYou need to recommend the three highest-priority modernization areas to focus on as part of the plan.  \n  \nWhich three areas should you recommend according to RaMP? Each correct answer represents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "data, compliance, and governance"
      },
      {
        "key": "B",
        "text": "infrastructure and development"
      },
      {
        "key": "C",
        "text": "user access and productivity"
      },
      {
        "key": "D",
        "text": "operational technology (OT) and IoT"
      },
      {
        "key": "E",
        "text": "modern security operations"
      }
    ],
    "correctAnswers": [
      "A",
      "C",
      "E"
    ],
    "explanation": "Các sáng kiến ​​​​ưu tiên hàng đầu của RaMP nhằm giải quyết quyền truy cập và năng suất an toàn của người dùng, bảo vệ và quản trị dữ liệu cũng như hiện đại hóa các hoạt động bảo mật. Những điều này thiết lập xác thực truy cập rõ ràng, bảo vệ dữ liệu và kiểm soát tuân thủ cũng như khả năng phát hiện, điều tra và phản hồi theo yêu cầu của Zero Trust. OT/IoT và các sáng kiến ​​cơ sở hạ tầng/phát triển được áp dụng khi cần thiết thay vì trở thành ba ưu tiên hàng đầu.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 47",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/47-design-solutions-that-align-with-security-best-practices-and",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-48",
    "questionNumber": 48,
    "text": "You have a Microsoft Entra tenant containing a security group named Group1. Group1 includes your company's IT support team members.  \n  \nYour Azure subscription has 800 Microsoft Entra joined Windows devices and 200 Microsoft Entra registered Windows devices. You also have 200 standalone macOS devices.  \n  \nYou deploy 10 Microsoft Entra joined Windows devices and set Microsoft Entra ExtensionAttribute1 to `SecureWorkstation`.  \n  \nRecommend a Conditional Access solution that meets these requirements:  \n  \n- Allow access to Microsoft Entra resources only from devices that run Windows 10 or Windows 11.  \n- Restrict Windows Azure Service Management API access for Group1 members to users who authenticate with multifactor authentication (MFA) and connect from a device with the `SecureWorkstation` ExtensionAttribute1.  \n  \nThe solution must minimize the number of required policies while maximizing security.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Sử dụng chính sách chặn với bộ lọc loại trừ thiết bị để thực thi các hạn chế về thiết bị. Việc loại trừ bộ lọc Windows 10/11 khỏi chính sách chặn rộng sẽ cho phép các thiết bị phù hợp đó và chặn các thiết bị không phù hợp. Loại trừ bộ lọc `SecureWorkstation` khỏi chính sách chặn cho Group1 và API quản lý dịch vụ Windows Azure sẽ chặn API khỏi tất cả các thiết bị khác. MFA yêu cầu chính sách Truy cập có điều kiện riêng với kiểm soát cấp phép MFA, vì không thể kết hợp kiểm soát khối để tạo ngoại lệ MFA. Điều này yêu cầu ba chính sách và hai bộ lọc thiết bị loại trừ.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 48",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/48-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-49",
    "questionNumber": 49,
    "text": "Your company hosts Microsoft SQL Server databases on-premises.  \n  \nThe company intends to migrate the databases to Azure.  \n  \nYou need to recommend a secure database architecture that minimizes patching operations and protects sensitive data by using dynamic data masking. The solution must also minimize costs.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "SQL Server on Azure Virtual Machines"
      },
      {
        "key": "B",
        "text": "Azure Synapse Analytics dedicated SQL pools"
      },
      {
        "key": "C",
        "text": "Azure SQL Database"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Azure SQL Database là dịch vụ cơ sở dữ liệu PaaS được quản lý hoàn toàn, xử lý việc vá lỗi và bảo trì nền tảng khác mà không cần sự tham gia của khách hàng, giảm chi phí vận hành. Nó hỗ trợ che giấu dữ liệu động để hạn chế việc hiển thị các giá trị nhạy cảm cho người dùng không có đặc quyền. Điều này làm cho nó trở thành một lựa chọn phù hợp về chi phí, quản lý thấp hơn để di chuyển cơ sở dữ liệu SQL Server thông thường so với việc chạy SQL Server trên máy ảo hoặc sử dụng nhóm phân tích chuyên dụng.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 49",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/49-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-50",
    "questionNumber": 50,
    "text": "You have an on-premises server named Server1. Server1 is an FTP server that only users at your company can access.  \n  \nYou have an Azure subscription.  \n  \nYou need to recommend a Zero Trust Network Access (ZTNA) solution that enforces Conditional Access policies when users access Server1 from the internet.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Entra application proxy"
      },
      {
        "key": "B",
        "text": "Microsoft Entra Internet Access"
      },
      {
        "key": "C",
        "text": "Microsoft Entra Private Access"
      },
      {
        "key": "D",
        "text": "Azure Application Gateway"
      },
      {
        "key": "E",
        "text": "Azure Bastion"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Microsoft Entra Private Access cung cấp ZTNA tập trung vào danh tính cho các tài nguyên riêng tư tại chỗ, cho phép truy cập chi tiết mà không làm lộ mạng rộng hơn. Các chính sách Truy cập có điều kiện có thể được áp dụng cho các ứng dụng Truy cập Riêng tư, giúp nó thích hợp cho việc truy cập từ xa vào máy chủ FTP nội bộ.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 50",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/50-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-51",
    "questionNumber": 51,
    "text": "Your company completes its adoption of Azure and is implementing Microsoft Defender for Cloud.  \n  \nYou receive the following recommendations from Defender for Cloud:  \n  \n- Access to storage accounts with firewall and virtual network configurations should be restricted.  \n- Storage accounts should restrict network access using virtual network rules.  \n- Storage account should use a private link connection.  \n- Storage account public access should be disallowed.  \n  \nYou need to recommend a service to mitigate the identified risks related to these recommendations.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Policy"
      },
      {
        "key": "B",
        "text": "Azure Network Watcher"
      },
      {
        "key": "C",
        "text": "Azure Storage Analytics"
      },
      {
        "key": "D",
        "text": "Microsoft Sentinel"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Chính sách Azure cung cấp các định nghĩa chính sách tích hợp để đánh giá và có thể thực thi các cấu hình tài khoản lưu trữ như quyền truy cập mạng bị hạn chế, quy tắc mạng ảo, private link và không cho phép truy cập công khai. Những biện pháp kiểm soát này trực tiếp giảm thiểu rủi ro phơi nhiễm được xác định bởi các khuyến nghị.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 51",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/51-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-52",
    "questionNumber": 52,
    "text": "Your company is designing an application architecture for Azure App Service Environment (ASE) web apps, as shown in the exhibit. (Click the Exhibit tab.)  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783809457165-3qfyxrzx.jpg)  \n  \nCommunication between the on-premises network and Azure uses an ExpressRoute connection.  \n  \nYou need to recommend a solution that ensures the web apps can communicate with the on-premises application server. The solution must minimize the number of public IP addresses permitted to access the on-premises network.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Traffic Manager with priority traffic-routing methods"
      },
      {
        "key": "B",
        "text": "Azure Firewall with policy rule sets"
      },
      {
        "key": "C",
        "text": "Azure Front Door with Azure Web Application Firewall (WAF)"
      },
      {
        "key": "D",
        "text": "Azure Application Gateway v2 with user-defined routes (UDRs)"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Azure Firewall cung cấp khả năng thực thi chính sách mạng tập trung và đầu ra được kiểm soát cho mạng con ASE. Khi lưu lượng truy cập được gửi đến đích công cộng, Azure Firewall áp dụng NAT nguồn bằng cách sử dụng địa chỉ IP công cộng của nó, do đó, tường lửa tại chỗ có thể cho phép đặt địa chỉ IP công cộng có giới hạn của tường lửa thay vì cho phép nhiều địa chỉ gửi đi của ứng dụng web. Azure Firewall cũng có thể áp dụng các quy tắc ứng dụng và mạng cần thiết thông qua chính sách tường lửa.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783809457165-3qfyxrzx.jpg",
    "sourceTitle": "Examcademy SC-100 Question 52",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/52-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-53",
    "questionNumber": 53,
    "text": "Your company is getting ready for cloud adoption.  \n  \nYou are designing security for Azure landing zones.  \n  \nWhich two preventive controls can you implement to increase the secure score? Each correct answer provides a complete solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Web Application Firewall (WAF)"
      },
      {
        "key": "B",
        "text": "Azure Active Directory (Azure AD) Privileged Identity Management (PIM)"
      },
      {
        "key": "C",
        "text": "Microsoft Sentinel"
      },
      {
        "key": "D",
        "text": "Azure Firewall"
      },
      {
        "key": "E",
        "text": "Microsoft Defender for Cloud alerts"
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Các biện pháp kiểm soát phòng ngừa ngăn chặn các cuộc tấn công trước khi chúng xảy ra và cả hai biện pháp này đều nâng cao điểm bảo mật của Defender for Cloud. Tường lửa ứng dụng web Azure (A) chặn các cuộc tấn công lớp web và ánh xạ tới các biện pháp kiểm soát điểm số an toàn, chẳng hạn như \"Bảo vệ ứng dụng chống lại các cuộc tấn công DDoS\". Quản lý danh tính đặc quyền (B) thực thi quyền truy cập đặc quyền và đặc quyền tối thiểu đúng lúc, có giới hạn thời gian, cung cấp các đề xuất về danh tính/\"Quản lý quyền truy cập và quyền\". Microsoft Sentinel (C) là SIEM và cảnh báo Microsoft Defender for Cloud (E) là các biện pháp kiểm soát thăm dò/phản hồi, không phải phòng ngừa nên bị loại trừ. Azure Firewall cũng có tính năng phòng ngừa, nhưng cặp đôi mà mục này kiểm tra là giải pháp phòng ngừa hoàn chỉnh là WAF cộng với PIM.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 53",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/53-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-54",
    "questionNumber": 54,
    "text": "You have the resources shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783896792240-b7r354rm.png)  \n  \nYou need to configure multi-user authorization (MUA) for Azure Backup to protect the Recovery Services vaults. The solution must maximize the security of the MUA configuration.  \n  \nTo which location should you deploy Resource Guard, and which role-based access control (RBAC) role should you assign to the team responsible for managing the backup of Resource Guard?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Để cách ly tối đa, Resource Guard được đặt trong một đối tượng thuê tách biệt với đối tượng thuê có chứa các kho Dịch vụ Khôi phục, trong khi vẫn ở cùng khu vực Azure với các kho đó. Sub2 nằm trong đối tượng thuê fabrikam.com riêng biệt và East US đáp ứng yêu cầu của khu vực. Quản trị viên dự phòng cần có vai trò Reader trên Resource Guard để kích hoạt MUA; Người đóng góp và Chủ sở hữu cấp các quyền quản lý rộng hơn nhằm làm suy yếu đặc quyền tối thiểu và sự phân chia nhiệm vụ.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783896792240-b7r354rm.png",
    "sourceTitle": "Examcademy SC-100 Question 54",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/54-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-55",
    "questionNumber": 55,
    "text": "You have a multicloud environment containing an Azure subscription, an Amazon Web Services (AWS) subscription, and a Google Cloud Platform (GCP) subscription.  \n  \nYou plan to evaluate data security and compliance.  \n  \nYou need to design a Compliance Manager solution that meets the following requirements:  \n  \n- Provides recommended improvement actions that include detailed implementation guidance  \n- Automatically monitors regulatory compliance  \n- Minimizes administrative effort  \n  \nWhat should you include in the solution?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Defender for Cloud"
      },
      {
        "key": "B",
        "text": "Compliance Manager connectors"
      },
      {
        "key": "C",
        "text": "Microsoft Defender for Cloud Apps"
      },
      {
        "key": "D",
        "text": "Microsoft Sentinel"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Microsoft Defender for Cloud tích hợp với Trình quản lý tuân thủ Microsoft Purview để đánh giá sự tuân thủ trên Azure, AWS và GCP. Nó cung cấp các tín hiệu ở cấp độ tài nguyên cho phép Trình quản lý tuân thủ tự động xác định trạng thái và kết quả kiểm tra hành động cải tiến, trong khi Trình quản lý tuân thủ cung cấp hướng dẫn triển khai dành riêng cho đám mây.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 55",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/55-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-56",
    "questionNumber": 56,
    "text": "Your company has offices in New York City and London. The London office hosts an on-premises application named App1.  \n  \nYou have a Microsoft Entra tenant named contoso.com that is hosted in North America.  \n  \nYou plan to manage London users’ access to App1 by using Microsoft Entra Private Access. In the London office, you will deploy Private Access by doing the following:  \n  \n- Deploy Microsoft Entra application proxy connectors.  \n- Provision an ExpressRoute circuit at the nearest peering location.  \n  \nYou need to optimize the network for this deployment. The solution must meet these requirements:  \n  \n- Maximize connectivity redundancy for App1.  \n- Minimize latency when App1 is accessed.  \n- Maximize security.  \n- Minimize costs.  \n  \nWhat should the solution include?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Đối với App1, bạn nên tạo một nhóm trình kết nối chuyên dụng (mới) trong văn phòng Luân Đôn và đặt ít nhất hai trình kết nối trong đó: nhóm chuyên dụng cho phép bạn ghim ứng dụng vào các trình kết nối vật lý gần nó (giảm thiểu độ trễ) trong khi hai trình kết nối cung cấp độ dự phòng cần thiết, việc sử dụng lại nhóm mặc định sẽ không đảm bảo. Các trình kết nối tiếp cận dịch vụ đám mây Proxy ứng dụng qua các điểm cuối công cộng của Microsoft, do đó, cần phải có tính năng ngang hàng của Microsoft (ngang hàng riêng tư chỉ dành cho IP riêng của Azure VNet và không mang lưu lượng truy cập dịch vụ Proxy/Entra của ứng dụng). Vì mạch ExpressRoute được cung cấp tại vị trí tiên phong (Châu Âu) gần nhất trong khi đối tượng thuê contoso.com và các phiên bản dịch vụ Proxy ứng dụng của nó sống ở Bắc Mỹ nên lưu lượng đi qua các khu vực địa chính trị; ExpressRoute tiêu chuẩn Microsoft ngang hàng chỉ tiếp cận các tài nguyên của Microsoft trong khu vực riêng của mạch, vì vậy cần có tiện ích bổ sung cao cấp để kết nối xuyên khu vực toàn cầu đó.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 56",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/56-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-57",
    "questionNumber": 57,
    "text": "Your company is migrating all on-premises workloads to Azure and Microsoft 365.  \n  \nYou need to design a security orchestration, automation, and response (SOAR) strategy in Microsoft Sentinel that meets these requirements:  \n  \n- Minimizes manual intervention by security operations analysts  \n- Supports alert triage within Microsoft Teams channels  \n  \nWhat should be included in the strategy?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "KQL"
      },
      {
        "key": "B",
        "text": "playbooks"
      },
      {
        "key": "C",
        "text": "data connectors"
      },
      {
        "key": "D",
        "text": "workbooks"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Sách hướng dẫn Microsoft Sentinel tự động hóa và điều phối các hành động phản hồi đối với các cảnh báo và sự cố. Được xây dựng trên Ứng dụng Azure Logic, chúng có thể chạy tự động để giảm bớt nỗ lực phân tích thủ công và có thể tích hợp với các kênh Microsoft Teams để thông báo sự cố và phân loại quy trình làm việc.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 57",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/57-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-58",
    "questionNumber": 58,
    "text": "You have a Microsoft 365 subscription containing a Microsoft SharePoint Online site named Site1.  \n  \nA Conditional Access policy named Policy1 allows only workload identities from trusted locations to access SharePoint Online.  \n  \nYou plan to move all business-sensitive information to Site1. You need to ensure that CAPolicy1 applies only to Site1.  \n  \nWhich three actions should you perform, in sequence?  \n  \nMore than one ordering of the answer choices is valid; any correct ordering receives credit.",
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
        "correctAnswer": "E"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Modify the target resources of Policy1."
      },
      {
        "key": "B",
        "text": "Modify the conditions of Policy1."
      },
      {
        "key": "C",
        "text": "For the Microsoft Entra tenant, create an authentication strength."
      },
      {
        "key": "D",
        "text": "For the Microsoft Entra tenant, create an authentication context."
      },
      {
        "key": "E",
        "text": "Configure a sensitivity label for Site1."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Modify the target resources of Policy1."
      },
      {
        "key": "B",
        "text": "Modify the conditions of Policy1."
      },
      {
        "key": "C",
        "text": "For the Microsoft Entra tenant, create an authentication strength."
      },
      {
        "key": "D",
        "text": "For the Microsoft Entra tenant, create an authentication context."
      },
      {
        "key": "E",
        "text": "Configure a sensitivity label for Site1."
      }
    ],
    "correctAnswers": [
      "step1=D",
      "step2=A",
      "step3=E"
    ],
    "explanation": "Ngữ cảnh xác thực cho phép áp dụng Truy cập có điều kiện của Microsoft Entra ở cấp độ trang SharePoint. Chính sách1 phải nhắm mục tiêu bối cảnh xác thực đó chứ không phải ứng dụng đám mây SharePoint Online và nhãn nhạy cảm được gán cho Site1 sẽ áp dụng bối cảnh xác thực cho trang web đó. Sức mạnh xác thực không liên quan đến việc giới hạn chính sách ở một trang web.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 58",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/58-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-59",
    "questionNumber": 59,
    "text": "You have a Microsoft 365 subscription.  \n  \nYou configure Microsoft Purview Information Protection to automatically apply sensitivity labels.  \n  \nYou need to recommend a solution that prevents users from uploading unlabeled files to Microsoft SharePoint Online when the files contain content that Microsoft Purview classifiers define as sensitive.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Chính sách phiên kiểm soát ứng dụng của Ứng dụng Microsoft Defender for Cloud có thể kiểm tra việc tải tệp lên trong thời gian thực. Chính sách có thể sử dụng điều kiện nhãn nhạy cảm cùng với kiểm tra nội dung DLP dựa trên các loại thông tin nhạy cảm và chặn các tệp không được gắn nhãn hoặc không có nhãn được phê duyệt tải lên SharePoint Online.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 59",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/59-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-60",
    "questionNumber": 60,
    "text": "Your network includes an Active Directory Domain Services (AD DS) domain named Domain1.  \n  \nYou have a Microsoft Entra tenant.  \n  \nDomain1 synchronizes with the tenant by using Microsoft Entra Connect.  \n  \nYou need to assess Microsoft Entra smart lockout by testing these account-lockout considerations:  \n  \n- The number of unsuccessful sign-in attempts that cause a lockout  \n- The lockout duration  \n  \nWhat should you use to test each consideration?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Trong môi trường nhận dạng kết hợp, khóa thông minh Microsoft Entra phải được phối hợp với chính sách khóa tài khoản AD DS tại chỗ. Ngưỡng khóa Microsoft Entra phải thấp hơn ngưỡng AD DS, trong khi thời lượng khóa Microsoft Entra phải dài hơn thời lượng AD DS. Kiểm tra cả hai dịch vụ sẽ xác minh các mối quan hệ cần thiết này.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 60",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/60-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-61",
    "questionNumber": 61,
    "text": "Your company has 10 branch offices. Each office has a local internet connection that uses a static IP address.  \n  \nYou have an Azure subscription. The subscription contains a storage account named `storage1` that stores blobs.  \n  \nUsers in the branch offices access the blobs through the internet.  \n  \nYou need to recommend a solution that ensures data in `storage1` is accessible only from the branch-office static IP addresses. The solution must minimize costs.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Private Link"
      },
      {
        "key": "B",
        "text": "an Azure Firewall policy"
      },
      {
        "key": "C",
        "text": "Azure Storage firewall rules"
      },
      {
        "key": "D",
        "text": "a network security group (NSG)"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Quy tắc tường lửa Azure Storage hỗ trợ quy tắc mạng IP cho các dải địa chỉ IP công cộng cụ thể. Việc định cấu hình quy tắc cho 10 địa chỉ IP công cộng tĩnh của văn phòng chi nhánh và từ chối quyền truy cập mạng khác sẽ giới hạn điểm cuối công khai của tài khoản lưu trữ đối với các văn phòng đó với chi phí thấp nhất trong số các tùy chọn.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 61",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/61-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-62",
    "questionNumber": 62,
    "text": "You have a Microsoft Entra tenant called contoso.com.  \n  \nA partner company has a multitenant application named App1. App1 is registered in a Microsoft Entra tenant called fabrikam.com.  \n  \nYou need to make sure that users in contoso.com can authenticate to App1.  \n  \nWhat should you recommend creating in contoso.com?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a service principal"
      },
      {
        "key": "B",
        "text": "a system-assigned managed identity"
      },
      {
        "key": "C",
        "text": "an application object"
      },
      {
        "key": "D",
        "text": "a user-assigned managed identity"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Một ứng dụng nhiều đối tượng thuê có đối tượng ứng dụng trong đối tượng thuê chính của nó và yêu cầu service principal trong mỗi đối tượng thuê nơi nó được sử dụng. service principal là phiên bản ứng dụng doanh nghiệp của đối tượng thuê cục bộ đại diện cho App1 trong contoso.com và cho phép người dùng của đối tượng thuê đó đăng nhập sau khi được cấp sự đồng ý thích hợp.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 62",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/62-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-63",
    "questionNumber": 63,
    "text": "You have an Azure subscription that contains the Azure Virtual Machine Scale Sets shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783899508132-uc0tbq64.png)  \n  \nYou are assessing Azure Update Manager and automatic virtual machine guest patching.  \n  \nWhich virtual machine scale sets are supported by automatic guest patching?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "VMSS1 only"
      },
      {
        "key": "B",
        "text": "VMSS2 only"
      },
      {
        "key": "C",
        "text": "VMSS1 and VMSS3 only"
      },
      {
        "key": "D",
        "text": "VMSS2 and VMSS4 only"
      },
      {
        "key": "E",
        "text": "VMSS1, VMSS2, VMSS3, and VMSS4"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Bản vá lỗi khách VM tự động hỗ trợ các máy ảo Windows và Linux được tạo từ các hình ảnh nền tảng được hỗ trợ và Bộ quy mô máy ảo sử dụng cách phối hợp linh hoạt. Do đó, các bộ thang đo được hỗ trợ là VMSS1 và VMSS3; Bộ tỷ lệ thống nhất và hình ảnh tùy chỉnh không đáp ứng các yêu cầu hỗ trợ này.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783899508132-uc0tbq64.png",
    "sourceTitle": "Examcademy SC-100 Question 63",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/63-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-64",
    "questionNumber": 64,
    "text": "You have a hybrid Azure AD tenant with pass-through authentication enabled.  \n  \nYou are designing an identity security strategy.  \n  \nYou need to reduce the impact of brute-force password attacks and leaked credentials affecting hybrid identities.  \n  \nEach feature can be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "brute_force",
        "text": "Slot 1:",
        "correctAnswer": "B"
      },
      {
        "id": "leaked_credentials",
        "text": "Slot 2:",
        "correctAnswer": "C"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Azure AD Password Protection"
      },
      {
        "key": "B",
        "text": "Extranet Smart Lockout (ESL)"
      },
      {
        "key": "C",
        "text": "Password hash synchronization"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Azure AD Password Protection"
      },
      {
        "key": "B",
        "text": "Extranet Smart Lockout (ESL)"
      },
      {
        "key": "C",
        "text": "Password hash synchronization"
      }
    ],
    "correctAnswers": [
      "brute_force=B",
      "leaked_credentials=C"
    ],
    "explanation": "Khóa thông minh / Extranet Khóa thông minh theo dõi những lần đăng nhập không thành công và khóa những kẻ tấn công sau một ngưỡng đồng thời phân biệt người dùng chính hãng, điều này trực tiếp làm giảm tác động của các cuộc tấn công bạo lực và phun mật khẩu; nó được hỗ trợ với xác thực chuyển tiếp và bảo vệ các tài khoản AD tại chỗ. Việc phát hiện thông tin xác thực bị rò rỉ đối với danh tính kết hợp trong Microsoft Entra ID Protection yêu cầu phải bật đồng bộ hóa băm mật khẩu vì Microsoft so sánh các hàm băm mật khẩu đã đồng bộ hóa với các bộ thông tin xác thực đã bị vi phạm. Tính năng Bảo vệ mật khẩu Azure AD chỉ cấm các mật khẩu yếu/phổ biến, do đó, tính năng này không giải quyết vấn đề khóa tài khoản do hành vi bạo lực cũng như phát hiện thông tin xác thực bị rò rỉ và không được sử dụng. Do đó, lực lượng vũ phu sẽ ánh xạ tới Smart Lockout và rò rỉ thông tin xác thực để đồng bộ hóa hàm băm mật khẩu.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 64",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/64-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-65",
    "questionNumber": 65,
    "text": "You need to recommend a solution that meets the AWS requirements.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Microsoft Defender for Cloud đánh giá các tài nguyên được kết nối với AWS và đưa ra các đề xuất về điểm bảo mật AWS, cho phép quản trị viên bảo mật được thông báo về trường hợp không tuân thủ. Trình kết nối AWS của Microsoft Sentinel nhập nhật ký dịch vụ AWS vào không gian làm việc Sentinel để truy vấn và phân tích.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 65",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/65-design-solutions-that-align-with-security-best-practices-and",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-66",
    "questionNumber": 66,
    "text": "Recommend a solution that meets the compliance requirements.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Tự động hóa quy trình làm việc của Defender cho Đám mây có thể gọi Ứng dụng Logic khi có những thay đổi trong đánh giá tuân thủ quy định, cho phép thực hiện các hành động khắc phục tự động. Defender for Cloud triển khai các tiêu chuẩn quy định thông qua các sáng kiến ​​Chính sách Azure; các loại trừ như nhóm tài nguyên thử nghiệm thuộc về cấu hình phạm vi của nhiệm vụ chính sách, do đó TestRG bị loại trừ bằng cách cập nhật nhiệm vụ đó.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 66",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/66-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-67",
    "questionNumber": 67,
    "text": "You have on-premises Windows 11 devices with the Global Secure Access client deployed.  \n  \nYou have a Microsoft 365 subscription that uses Microsoft SharePoint Online and Exchange Online.  \n  \nYou deploy Microsoft Entra Internet Access from the on-premises network to Microsoft 365. The deployment has the Microsoft 365 profile enabled and includes the following:  \n  \n- Default traffic policies for Microsoft 365 services  \n- A linked Conditional Access policy that performs compliant network checks with continuous access evaluation and applies to all users  \n- An assignment to all devices  \n- An assignment to a remote network associated with the on-premises network  \n  \nWhich Microsoft 365 resources are protected by continuous access evaluation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "SharePoint Online only"
      },
      {
        "key": "B",
        "text": "Exchange Online only"
      },
      {
        "key": "C",
        "text": "both SharePoint Online and Exchange Online"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Đánh giá quyền truy cập liên tục hỗ trợ đánh giá chính sách Truy cập có điều kiện cho cả Exchange Online và SharePoint Online. Cấu hình lưu lượng truy cập được kích hoạt của Microsoft sẽ định tuyến cả hai dịch vụ thông qua Truy cập an toàn toàn cầu, cho phép chính sách mạng tuân thủ được thực thi liên tục cho từng dịch vụ.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 67",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/67-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-68",
    "questionNumber": 68,
    "text": "You have a Microsoft Entra tenant that contains 500 Windows devices with the Global Secure Access client deployed.  \n  \nYou have a third-party software as a service (SaaS) app named App1.  \n  \nYou plan to implement Global Secure Access to manage access to App1.  \n  \nYou need to recommend a solution for managing connections to App1. The solution must ensure that users authenticate by using their Microsoft Entra credentials before they connect to App1.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a Global Secure Access app"
      },
      {
        "key": "B",
        "text": "a private access traffic forwarding profile"
      },
      {
        "key": "C",
        "text": "an internet access traffic forwarding profile"
      },
      {
        "key": "D",
        "text": "a Quick Access app"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Microsoft Entra Internet Access bảo vệ quyền truy cập vào Internet và các ứng dụng SaaS. Việc bật cấu hình chuyển tiếp lưu lượng truy cập Internet sẽ khiến ứng dụng khách Truy cập An toàn Toàn cầu định tuyến lưu lượng SaaS có liên quan thông qua dịch vụ nhận dạng danh tính, trong đó các biện pháp kiểm soát Truy nhập Có điều kiện dựa trên Microsoft Entra có thể yêu cầu xác thực người dùng.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 68",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/68-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-69",
    "questionNumber": 69,
    "text": "You have a Microsoft 365 subscription protected by Microsoft 365 Defender.  \n  \nYou are designing a security operations strategy that uses Microsoft Sentinel to monitor events from Microsoft 365 and Microsoft 365 Defender.  \n  \nYou need to recommend a solution that meets these requirements:  \n  \n- Integrate Microsoft Sentinel with a third-party security vendor to access information about known malware.  \n- Automatically generate incidents when the IP address of a command-and-control server is detected in the events.  \n  \nWhat should you configure in Microsoft Sentinel for each requirement?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Trình kết nối Thông tin về mối đe dọa thu thập các chỉ báo từ nền tảng thông tin về mối đe dọa của bên thứ ba. Quy tắc phát hiện mối đe dọa phân tích có thể khớp chỉ báo IP với dữ liệu sự kiện đã nhập; khi khớp, nó sẽ tạo ra cảnh báo và sự cố tương ứng.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 69",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/69-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-70",
    "questionNumber": 70,
    "text": "You have an Azure Storage account named storage1.  \n  \nYou intend to secure storage1 with a Bring Your Own Key (BYOK) approach.  \n  \nYou create an Azure key vault named AKV1 and upload a compatible key.  \n  \nYou need to configure storage1 to use the key stored in AKV1 for encryption.  \n  \nWhich three actions should you perform, in sequence?",
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
        "correctAnswer": "F"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Assign storage1 the Key Vault Reader role to access the key."
      },
      {
        "key": "B",
        "text": "Create and assign an access policy for storage1."
      },
      {
        "key": "C",
        "text": "Create a managed identity and assign it to AKV1."
      },
      {
        "key": "D",
        "text": "Create a managed identity and assign it to storage1."
      },
      {
        "key": "E",
        "text": "Create and assign a Key Vault access policy."
      },
      {
        "key": "F",
        "text": "Configure Azure Storage encryption with customer-managed keys."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Assign storage1 the Key Vault Reader role to access the key."
      },
      {
        "key": "B",
        "text": "Create and assign an access policy for storage1."
      },
      {
        "key": "C",
        "text": "Create a managed identity and assign it to AKV1."
      },
      {
        "key": "D",
        "text": "Create a managed identity and assign it to storage1."
      },
      {
        "key": "E",
        "text": "Create and assign a Key Vault access policy."
      },
      {
        "key": "F",
        "text": "Configure Azure Storage encryption with customer-managed keys."
      }
    ],
    "correctAnswers": [
      "step1=D",
      "step2=E",
      "step3=F"
    ],
    "explanation": "Azure Storage sử dụng managed identity để xác thực với Azure Key Vault khi sử dụng khóa do khách hàng quản lý. Danh tính đó phải được gán cho tài khoản lưu trữ và được cấp chính sách truy cập Key Vault với các quyền khóa bắt buộc trước khi có thể định cấu hình tài khoản lưu trữ để sử dụng khóa vault. Vai trò Key Vault Reader cung cấp quyền truy cập đọc trên mặt phẳng quản lý và không cấp các hoạt động khóa mật mã.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 70",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/70-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-71",
    "questionNumber": 71,
    "text": "You have an Azure subscription containing an Azure Application Gateway that uses Azure Web Application Firewall (WAF).  \n  \nYou deploy new Azure App Service web apps. Each app is automatically registered in your company DNS domain and is accessible from the internet.  \n  \nRecommend a security solution that meets these requirements:  \n  \n- Detect vulnerability scans of the apps.  \n- Detect whether newly deployed apps are vulnerable to attack.  \n  \nWhat should you recommend using?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Bộ bảo vệ Microsoft dành cho Dịch vụ ứng dụng phát hiện các mối đe dọa đối với tài nguyên Dịch vụ ứng dụng, bao gồm hoạt động web-shell và các nỗ lực quét lỗ hổng. Bộ bảo vệ EASM phát hiện và kiểm kê các tài sản bị lộ bên ngoài trên dấu vết DNS của tổ chức và nêu bật các điểm lộ lộ để có thể xác định các ứng dụng công khai mới được triển khai có thể dễ bị tấn công.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 71",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/71-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-72",
    "questionNumber": 72,
    "text": "You have a Microsoft 365 subscription and an Azure subscription. Microsoft 365 Defender and Microsoft Defender for Cloud are enabled.  \n  \nThe Azure subscription contains 50 virtual machines. Each virtual machine runs distinct applications on Windows Server 2019.  \n  \nYou need to recommend a solution that ensures only authorized applications can run on the virtual machines. If an unauthorized application tries to run or be installed, it must be blocked automatically until an administrator authorizes it.  \n  \nWhich security control should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "adaptive application controls in Defender for Cloud"
      },
      {
        "key": "B",
        "text": "app protection policies in Microsoft Endpoint Manager"
      },
      {
        "key": "C",
        "text": "app discovery anomaly detection policies in Microsoft Defender for Cloud Apps"
      },
      {
        "key": "D",
        "text": "Azure Security Benchmark compliance controls in Defender for Cloud"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Các điều khiển ứng dụng thích ứng Microsoft Defender for Cloud phân tích các ứng dụng chạy trên máy ảo, tạo danh sách cho phép các ứng dụng đã biết là an toàn và có thể thực thi các chính sách kiểm soát ứng dụng để ngăn phần mềm không được phê duyệt thực thi. Chính sách bảo vệ ứng dụng bảo vệ dữ liệu trong các ứng dụng di động được quản lý; Chính sách khám phá của Defender dành cho ứng dụng đám mây giải quyết việc sử dụng dịch vụ đám mây; và các biện pháp kiểm soát Điểm chuẩn bảo mật Azure đánh giá trạng thái bảo mật thay vì thực thi danh sách cho phép ứng dụng VM.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 72",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/72-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-73",
    "questionNumber": 73,
    "text": "A customer uses the Zero Trust model and explicitly verifies every attempt to access its corporate applications.  \n  \nThe customer identifies malware infections on several endpoints and suspends access attempts from those infected endpoints. The malware is subsequently removed from the endpoints.  \n  \nWhich two conditions must be satisfied before endpoint users can again access the corporate applications? Each correct answer is part of the solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "The client access tokens are refreshed."
      },
      {
        "key": "B",
        "text": "Microsoft Intune reports the endpoints as compliant."
      },
      {
        "key": "C",
        "text": "A new Azure Active Directory (Azure AD) Conditional Access policy is enforced."
      },
      {
        "key": "D",
        "text": "Microsoft Defender for Endpoint reports the endpoints as compliant."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "Bộ bảo vệ Microsoft dành cho Điểm cuối phải chứng minh rằng các điểm cuối đã được khắc phục no còn gặp rủi ro về thiết bị và Microsoft Intune phải đánh giá lại chúng là tuân thủ. Intune truyền đạt sự tuân thủ của thiết bị với Truy cập có điều kiện của Microsoft Entra, cho phép truy cập sau khi mối đe dọa được loại bỏ và thiết bị tuân thủ.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 73",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/73-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-74",
    "questionNumber": 74,
    "text": "You need to design a strategy to secure the SharePoint Online and Exchange Online data. The solution must satisfy the application security requirements.  \n  \nWhich two services should be leveraged in the strategy? Each correct answer represents part of the solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure AD Conditional Access"
      },
      {
        "key": "B",
        "text": "access reviews in Azure AD"
      },
      {
        "key": "C",
        "text": "Microsoft Defender for Cloud"
      },
      {
        "key": "D",
        "text": "Microsoft Defender for Cloud Apps"
      },
      {
        "key": "E",
        "text": "Microsoft Defender for Endpoint"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Truy cập có điều kiện Microsoft Entra ID có thể thực thi các biện pháp kiểm soát truy cập cho các ứng dụng đám mây, bao gồm Exchange Online và SharePoint Online, dựa trên các điều kiện như người dùng, ứng dụng, vị trí, thiết bị và rủi ro. Ứng dụng Microsoft Defender for Cloud tích hợp với Quyền truy cập có điều kiện để cung cấp khả năng giám sát và kiểm soát phiên theo thời gian thực, bao gồm các kiểm soát đối với việc tải xuống và truy cập tệp nhạy cảm trong ứng dụng đám mây.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 74",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/74-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-75",
    "questionNumber": 75,
    "text": "You are developing a security operations strategy based on the Zero Trust framework.  \n  \nYou need to improve the operational efficiency of the Microsoft Security Operations Center (SOC).  \n  \nBased on the Zero Trust framework, which three deployment objectives should you prioritize, in order?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "slot1",
        "text": "Slot 1:",
        "correctAnswer": "C"
      },
      {
        "id": "slot2",
        "text": "Slot 2:",
        "correctAnswer": "E"
      },
      {
        "id": "slot3",
        "text": "Slot 3:",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Establish ransomware recovery readiness."
      },
      {
        "key": "B",
        "text": "Enable additional protection and detection controls."
      },
      {
        "key": "C",
        "text": "Establish visibility."
      },
      {
        "key": "D",
        "text": "Implement disaster recovery."
      },
      {
        "key": "E",
        "text": "Enable automation."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Establish ransomware recovery readiness."
      },
      {
        "key": "B",
        "text": "Enable additional protection and detection controls."
      },
      {
        "key": "C",
        "text": "Establish visibility."
      },
      {
        "key": "D",
        "text": "Implement disaster recovery."
      },
      {
        "key": "E",
        "text": "Enable automation."
      }
    ],
    "correctAnswers": [
      "slot1=C",
      "slot2=E",
      "slot3=B"
    ],
    "explanation": "Hướng dẫn triển khai khả năng hiển thị, tự động hóa và điều phối Zero Trust ưu tiên thiết lập khả năng hiển thị bảo mật trước tiên, sau đó là tự động hóa và điều phối phản hồi, cuối cùng là bật các biện pháp kiểm soát phát hiện và bảo vệ bổ sung để liên tục cải tiến.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 75",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/75-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-76",
    "questionNumber": 76,
    "text": "Your company is migrating data to Azure. The data contains personally identifiable information (PII).  \n  \nThe company plans to use Microsoft Information Protection for the Azure PII data store. You need to recommend a solution for discovering PII data at risk in Azure resources.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Azure Purview kết nối với nguồn dữ liệu Azure và quét chúng để khám phá và phân loại dữ liệu nhạy cảm. Microsoft Defender for Cloud sử dụng nhãn và phân loại độ nhạy Microsoft Purview trong các cảnh báo và đề xuất, cho phép các nhóm bảo mật lọc và ưu tiên cảnh báo cho các tài nguyên chứa dữ liệu nhạy cảm.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 76",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/76-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-77",
    "questionNumber": 77,
    "text": "You have a Microsoft Entra tenant that synchronizes with an Active Directory Domain Services (AD DS) domain.  \n  \nYou have an on-premises datacenter containing 100 servers. The servers run Windows Server and are backed up by using Microsoft Azure Backup Server (MABS).  \n  \nYou are designing a recovery solution for ransomware attacks. The solution adheres to Microsoft Security Best Practices.  \n  \nYou need to ensure that a compromised local administrator account cannot be used to stop scheduled backups.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From Azure Backup, configure multi-user authorization by using Resource Guard."
      },
      {
        "key": "B",
        "text": "From Microsoft Entra Privileged Identity Management (PIM), create a role assignment for the Backup Contributor role."
      },
      {
        "key": "C",
        "text": "From Microsoft Azure Backup Setup, register MABS with a Recovery Services vault."
      },
      {
        "key": "D",
        "text": "From a Recovery Services vault, generate a security PIN for critical operations."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Ủy quyền nhiều người dùng Azure Backup sử dụng Bộ bảo vệ tài nguyên để yêu cầu ủy quyền riêng cho các hoạt động sao lưu quan trọng, có tác động cao. Ranh giới phê duyệt bổ sung này giúp ngăn chặn một tài khoản quản trị viên bị xâm nhập dừng hoặc thay đổi các bản sao lưu được bảo vệ, đây là biện pháp kiểm soát khả năng phục hồi ransomware quan trọng đối với các bản sao lưu kết hợp MABS.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 77",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/77-design-solutions-that-align-with-security-best-practices-and",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-78",
    "questionNumber": 78,
    "text": "You have a Microsoft 365 E5 subscription that contains 500 devices running Windows 11 Pro and enrolled in Microsoft Intune.  \n  \nYou need to evaluate Microsoft Defender Vulnerability Management to provide recommended configuration changes for the devices.  \n  \nWhich Endpoint security setting should you use to review the recommended changes?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Security tasks"
      },
      {
        "key": "B",
        "text": "Attack surface reduction"
      },
      {
        "key": "C",
        "text": "End point detection and response"
      },
      {
        "key": "D",
        "text": "Device compliance"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Các tác vụ bảo mật tích hợp tính năng Quản lý lỗ hổng bảo vệ của Microsoft với Intune. Chúng trình bày các lỗ hổng đã được xác định, thiết bị bị ảnh hưởng và hướng dẫn khắc phục, cho phép quản trị viên Intune xem xét và hành động theo các thay đổi cấu hình được đề xuất.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 78",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/78-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-79",
    "questionNumber": 79,
    "text": "Your company is developing a serverless application in Azure with the architecture shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783809478690-ycj6w0n5.jpg)  \n  \nYou need to recommend a solution that isolates the compute components on an Azure virtual network. What should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Active Directory (Azure AD) enterprise applications"
      },
      {
        "key": "B",
        "text": "an Azure App Service Environment (ASE)"
      },
      {
        "key": "C",
        "text": "Azure service endpoints"
      },
      {
        "key": "D",
        "text": "an Azure Active Directory (Azure AD) application proxy"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Môi trường Azure App Service (ASE) là một triển khai Azure App Service dành riêng cho một đối tượng thuê, được cài đặt vào mạng ảo và có thể lưu trữ Azure Functions. Nó cung cấp tính toán riêng biệt và duy trì lưu lượng ứng dụng trong mạng ảo đã chọn.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783809478690-ycj6w0n5.jpg",
    "sourceTitle": "Examcademy SC-100 Question 79",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/79-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-80",
    "questionNumber": 80,
    "text": "You have an Azure AD tenant synchronized with an Active Directory Domain Services (AD DS) domain. Client computers run Windows and are hybrid-joined to Azure AD.  \n  \nYou are designing an endpoint-protection strategy against ransomware that follows Microsoft Security Best Practices.  \n  \nYou plan to remove every domain account from the Administrators groups on the Windows computers.  \n  \nYou need to recommend a solution that gives users administrative access to the Windows computers only when it is needed. The solution must minimize ransomware lateral movement if an administrator account on a computer is compromised.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Local Administrator Password Solution (LAPS)"
      },
      {
        "key": "B",
        "text": "Azure AD Identity Protection"
      },
      {
        "key": "C",
        "text": "Azure AD Privileged Identity Management (PIM)"
      },
      {
        "key": "D",
        "text": "Privileged Access Workstations (PAWs)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Windows LAPS quản lý và thường xuyên luân chuyển mật khẩu quản trị viên cục bộ, cho phép nhân viên được ủy quyền chỉ truy xuất thông tin xác thực cục bộ dành riêng cho thiết bị cho các tác vụ quản trị được yêu cầu. Mật khẩu quản trị viên cục bộ dành riêng cho thiết bị ngăn không cho hàm băm mật khẩu hoặc thông tin xác thực bị xâm phạm được sử dụng lại cho các điểm cuối khác, giảm rủi ro truyền qua hàm băm và truyền ngang. Windows LAPS hỗ trợ các thiết bị kết hợp.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 80",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/80-design-solutions-that-align-with-security-best-practices-and",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-81",
    "questionNumber": 81,
    "text": "Your company has an on-premises network in Seattle and an Azure subscription. The on-premises network includes a Remote Desktop server.  \n  \nThe company contracts a third-party development firm in France to develop and deploy resources to the virtual machines hosted in the Azure subscription.  \n  \nCurrently, the firm connects by RDP to the Remote Desktop server. From that Remote Desktop connection, the firm accesses the virtual machines hosted in Azure by using custom administrative tools installed on the Remote Desktop server. All traffic to the Remote Desktop server is captured by a firewall, which allows only specific connections from France to the server.  \n  \nYou need to recommend a modern security solution based on the Zero Trust model. The solution must minimize latency for developers.  \n  \nWhich three actions should you recommend? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Configure network security groups (NSGs) to allow access from only specific logical groupings of IP address ranges."
      },
      {
        "key": "B",
        "text": "Deploy a Remote Desktop server to an Azure region located in France."
      },
      {
        "key": "C",
        "text": "Migrate from the Remote Desktop server to Azure Virtual Desktop."
      },
      {
        "key": "D",
        "text": "Implement Azure Firewall to restrict host pool outbound access."
      },
      {
        "key": "E",
        "text": "Configure Azure Active Directory (Azure AD) Conditional Access with multi-factor authentication (MFA) and named locations."
      }
    ],
    "correctAnswers": [
      "C",
      "D",
      "E"
    ],
    "explanation": "Azure Virtual Desktop cung cấp mô hình truy cập máy tính để bàn dựa trên Azure được quản lý, trong khi Truy cập có điều kiện của Microsoft Entra có thể yêu cầu MFA và áp dụng các biện pháp kiểm soát quyền truy cập nhận biết vị trí để xác minh rõ ràng người dùng bên ngoài. Azure Firewall có thể kiểm soát và hạn chế lưu lượng truy cập đi từ máy chủ phiên Azure Virtual Desktop, hỗ trợ phân đoạn và tình trạng giả định vi phạm. Các biện pháp kiểm soát này cung cấp quyền truy cập dựa trên danh tính và khối lượng công việc đi ra bị hạn chế mà không giữ lại máy chủ Máy tính Từ xa tại chỗ làm đường dẫn truy cập của nhà phát triển.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 81",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/81-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-82",
    "questionNumber": 82,
    "text": "Your company is building an invoicing application that will use Azure AD B2C. The application will be deployed as an App Service web app.  \n  \nYou need to recommend a solution to the application development team to protect the application against identity-related attacks.  \n  \nWhich two configurations should you recommend? Each correct answer presents part of the solution.  \n  \n> **NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure AD Conditional Access integration with user flows and custom policies"
      },
      {
        "key": "B",
        "text": "smart account lockout in Azure AD B2C"
      },
      {
        "key": "C",
        "text": "access packages in Identity Governance"
      },
      {
        "key": "D",
        "text": "custom resource owner password credentials (ROPC) flows in Azure AD B2C"
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Quyền truy cập có điều kiện của Azure AD B2C có thể tích hợp với luồng người dùng và chính sách tùy chỉnh để đánh giá các lần đăng nhập rủi ro và chặn quyền truy cập hoặc yêu cầu biện pháp khắc phục, chẳng hạn như xác thực đa yếu tố. Khóa tài khoản thông minh giúp giảm thiểu các cuộc tấn công vào thông tin xác thực bằng cách khóa tài khoản sau nhiều lần đăng nhập thất bại, giúp bảo vệ khỏi các nỗ lực tấn công bạo lực và phun mật khẩu.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 82",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/82-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-83",
    "questionNumber": 83,
    "text": "You have a Microsoft 365 tenant that includes two groups named Group1 and Group2.  \n  \nYou use Microsoft Defender XDR to manage your company’s customers’ tenants.  \n  \nYou need to ensure that users in Group1 can perform security tasks in every customer tenant. The solution must satisfy the following requirements:  \n  \n- Group1 users must be assigned only the Security Operator role in the customer tenants.  \n- Group2 users must be able to assign the Security Operator role to Group1 users in the customer tenants.  \n- The use of quest accounts must be minimized.  \n- Administrative effort must be minimized.  \n  \nWhat should you include in the solution?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "multi-user authorization (MUA)"
      },
      {
        "key": "B",
        "text": "Azure Lighthouse"
      },
      {
        "key": "C",
        "text": "Privileged Identity Management (PIM)"
      },
      {
        "key": "D",
        "text": "Microsoft Entra B2B collaboration"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Sự cộng tác của Microsoft Entra B2B cung cấp xác thực nhiều bên thuê để truy cập XDR của Bộ bảo vệ Microsoft. Đối tượng thuê của khách hàng có thể cấp các quyền cần thiết, Người vận hành bảo mật có ít đặc quyền nhất cho người dùng xác thực từ đối tượng thuê quản lý, trong khi các nhóm có thể được sử dụng để đơn giản hóa việc quản lý thành viên và vai trò. Các đại biểu của Azure Lighthouse chỉ truy cập vào các đăng ký Azure hoặc nhóm tài nguyên thông qua các vai trò tích hợp sẵn của Azure; nó không ủy quyền quyền truy cập của Người vận hành Microsoft Entra Security cho Defender XDR.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 83",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/83-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-84",
    "questionNumber": 84,
    "text": "You have an Azure subscription containing multiple apps, managed by continuous integration and continuous deployment (CI/CD) pipelines in Azure DevOps.  \n  \nYou need to recommend DevSecOps controls for the **Commit the code** and **Build and test** CI/CD stages, based on the Microsoft Cloud Adoption Framework for Azure.  \n  \nWhich testing method should you recommend for each stage?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "SAST phân tích mã nguồn mà không cần chạy ứng dụng, cho phép xác định các lỗ hổng khi mã được cam kết. DAST kiểm tra một ứng dụng đang chạy từ bên ngoài, do đó nó được thực hiện sau khi ứng dụng đã được xây dựng và sẵn sàng để thử nghiệm. Hướng dẫn Khung áp dụng đám mây khuyến nghị sớm tích hợp phân tích mã tĩnh trong quy trình CI/CD.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 84",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/84-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-85",
    "questionNumber": 85,
    "text": "You intend to deploy 20 Azure Kubernetes Service (AKS) clusters. The cluster configuration will be managed declaratively by using Kubernetes manifest files kept in Azure Repos.  \n  \nYou need to recommend a solution that ensures the configuration of every cluster stays consistent by using the manifest files in Azure Repos.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Gatekeeper"
      },
      {
        "key": "B",
        "text": "Dependency Tracker"
      },
      {
        "key": "C",
        "text": "Dependabot"
      },
      {
        "key": "D",
        "text": "Flux"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Flux cung cấp GitOps cho AKS: nó đồng bộ hóa các bảng kê khai Kubernetes từ kho lưu trữ Git và liên tục điều chỉnh từng cụm với trạng thái mong muốn đã khai báo của kho lưu trữ. Điều này duy trì cấu hình nhất quán trên các cụm.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 85",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/85-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-86",
    "questionNumber": 86,
    "text": "You have a Microsoft Entra tenant named contoso.com that synchronizes with an Active Directory Domain Services (AD DS) domain named corp.contoso.com. The domain has 100 devices configured as follows:  \n  \n- Hybrid joined  \n- Enrolled in Microsoft Intune  \n- Built-in local administrator account disabled  \n- A local user account named User1 that belongs to the local Administrators group  \n  \nYou need to recommend a solution that meets these requirements:  \n  \n- Ensures that each domain controller’s Directory Services Restore Mode (DSRM) credentials are backed up to the AD DS database  \n- Ensures that User1’s password changes automatically every 60 days  \n- Ensures that User1’s credentials are held in an encrypted store  \n- Prevents manual changes to the User1 password  \n- Stores all credentials in contoso.com whenever possible  \n- Minimizes administrative effort  \n  \nWhat should be included in the recommendation?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Windows LAPS quản lý và tự động xoay vòng mật khẩu tài khoản quản trị viên cục bộ, có thể sao lưu mật khẩu thiết bị vào Microsoft Entra ID và có thể quản lý mật khẩu DSRM của bộ điều khiển miền bằng bản sao lưu được mã hóa vào Active Directory. Định cấu hình Người dùng1 với thời hạn mật khẩu là 60 ngày và bản sao lưu Microsoft Entra ID; cấu hình sao lưu DSRM thành AD DS. Các sản phẩm bảo vệ mật khẩu chỉ đánh giá chất lượng mật khẩu và không cung cấp khả năng sao lưu và xoay vòng thông tin xác thực này.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 86",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/86-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-87",
    "questionNumber": 87,
    "text": "You have a Microsoft 365 subscription.  \n  \nYou need to design a solution that blocks authenticated users on unmanaged devices from downloading files from Microsoft SharePoint Online.  \n  \nWhich two services should be included in the solution? Each correct answer represents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure AD Conditional Access"
      },
      {
        "key": "B",
        "text": "Azure Data Catalog"
      },
      {
        "key": "C",
        "text": "Microsoft Purview Information Protection"
      },
      {
        "key": "D",
        "text": "Azure AD Application Proxy"
      },
      {
        "key": "E",
        "text": "Microsoft Defender for Cloud Apps"
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "Truy cập có điều kiện Microsoft Entra ID (Azure AD) có thể nhắm mục tiêu các điều kiện của SharePoint Online và thiết bị không được quản lý, sau đó gọi Kiểm soát ứng dụng truy cập có điều kiện. Ứng dụng Microsoft Defender for Cloud sử dụng sự tích hợp đó để áp dụng các chính sách phiên thời gian thực, bao gồm chặn tải xuống tệp từ các phiên trình duyệt trên các thiết bị không được quản lý.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 87",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/87-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-88",
    "questionNumber": 88,
    "text": "You have an Azure subscription containing 100 virtual machines that run Linux on Windows Server. The subscription uses Microsoft Defender for Servers Plan 1.  \n  \nYou need to recommend a solution that identifies and remediates virtual machines with these characteristics:  \n  \n- Are **not** onboarded to Defender for Servers  \n- Are missing critical updates  \n- Have risky apps installed  \n  \nThe solution must minimize administrative effort.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Defender External Attack Surface Management (Defender EASM)"
      },
      {
        "key": "B",
        "text": "Microsoft Defender Vulnerability Management"
      },
      {
        "key": "C",
        "text": "Microsoft Defender Threat Intelligence (Defender TI)"
      },
      {
        "key": "D",
        "text": "Microsoft Intune Advanced Analytics"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Quản lý lỗ hổng bảo vệ của Microsoft cung cấp đánh giá lỗ hổng, kiểm kê phần mềm, ưu tiên dựa trên rủi ro và theo dõi biện pháp khắc phục. Trong Bộ bảo vệ dành cho Máy chủ Gói 1, hỗ trợ quét lỗ hổng dựa trên tác nhân, cho phép nhận dạng tập trung các máy thiếu phạm vi bảo vệ, lỗ hổng cập nhật quan trọng và phần mềm được cài đặt có rủi ro với chi phí quản trị tối thiểu.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 88",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/88-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-89",
    "questionNumber": 89,
    "text": "You are planning security for a runbook in an Azure Automation account. The runbook will copy data to Azure Data Lake Storage Gen2.  \n  \nYou need to recommend a solution that secures each component of the copy process.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Azure Key Vault bảo vệ các bí mật nhạy cảm như khóa truy cập tài khoản lưu trữ để chúng không cần phải nhúng vào mã runbook. Azure Private Link cung cấp kết nối dựa trên IP riêng tư từ mạng ảo và hỗ trợ cả điểm cuối Azure Automation và Azure Storage DFS. Trình đóng góp tự động hóa là vai trò quản lý RBAC, trong khi tường lửa ứng dụng web bảo vệ các ứng dụng web HTTP(S) thay vì đường dẫn sao chép Azure Storage. Thẻ dịch vụ được duy trì bởi các nhóm tiền tố IP dịch vụ Azure được sử dụng trong các quy tắc bảo mật mạng.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 89",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/89-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-90",
    "questionNumber": 90,
    "text": "You have an Azure subscription and an on-premises datacenter. The datacenter has 100 servers running Windows Server. Every server is backed up to a Recovery Services vault by using Azure Backup and the Microsoft Azure Recovery Services (MARS) agent.  \n  \nYou must design a recovery solution for ransomware attacks that encrypt the on-premises servers. The solution must follow Microsoft Security Best Practices and protect against these risks:  \n  \n- A compromised administrator account deleting Azure Backup backups before encrypting the servers  \n- A compromised administrator account disabling backups on the MARS agent before encrypting the servers  \n  \nWhat should you use for each risk?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Xóa mềm sẽ giữ lại dữ liệu Azure Backup đã xóa trong thời gian khôi phục, bảo vệ dữ liệu khỏi bị xóa do vô tình hoặc cố ý. MARS yêu cầu mã PIN bảo mật được tạo trong vault, có giới hạn thời gian cho các hoạt động quan trọng, bao gồm dừng bảo vệ bằng cách xóa dữ liệu và các hoạt động làm suy yếu bản sao lưu khác; điều này bảo vệ cấu hình sao lưu MARS khỏi quản trị viên cục bộ bị xâm phạm.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 90",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/90-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-91",
    "questionNumber": 91,
    "text": "You have Windows 11 devices and Microsoft 365 E5 licenses.  \n  \nYou need to recommend a solution that prevents users from accessing websites containing adult content, such as gambling sites.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Compliance Manager"
      },
      {
        "key": "B",
        "text": "Microsoft Defender for Cloud Apps"
      },
      {
        "key": "C",
        "text": "Microsoft Endpoint Manager"
      },
      {
        "key": "D",
        "text": "Microsoft Defender for Endpoint"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Bộ bảo vệ Microsoft dành cho Điểm cuối bao gồm tính năng lọc nội dung web cho phép các tổ chức chặn các danh mục trang web trên các nhóm thiết bị. Danh mục **Nội dung người lớn** bao gồm các trang web cờ bạc, do đó, danh mục này có thể ngăn quyền truy cập vào nội dung được chỉ định.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 91",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/91-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-92",
    "questionNumber": 92,
    "text": "An on-premises network has an Active Directory Domain Services (AD DS) domain. The domain includes a server named Server1 that runs Windows Server 2022.  \n  \nAn Azure subscription is linked to a hybrid Microsoft Entra tenant and includes a user named User1. User1 works remotely.  \n  \nYou need to ensure that User1 can establish RDP connections to Server1 over the internet. The solution must ensure that User1 authenticates by using multifactor authentication (MFA).  \n  \nWhat should the solution include?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Windows Admin Center"
      },
      {
        "key": "B",
        "text": "Microsoft Entra Internet Access"
      },
      {
        "key": "C",
        "text": "Azure Bastion"
      },
      {
        "key": "D",
        "text": "Microsoft Entra Private Access"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Microsoft Entra Private Access cung cấp quyền truy cập an toàn, nhận dạng vào các tài nguyên riêng tư tại chỗ, bao gồm cả mục tiêu RDP. Nó đánh giá các chính sách Truy cập có điều kiện của Microsoft Entra cho kết nối, cho phép yêu cầu MFA đối với Người dùng1 trước khi cấp quyền truy cập vào Server1.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 92",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/92-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-93",
    "questionNumber": 93,
    "text": "You receive a Microsoft Defender for Cloud security alert, as shown in the exhibit. (Click the Exhibit tab.)  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783809499193-iyj61xpt.png)  \n  \nAfter remediating the threat, which policy definition should you assign to prevent it from happening again?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Storage account public access should be disallowed"
      },
      {
        "key": "B",
        "text": "Azure Key Vault Managed HSM should have purge protection enabled"
      },
      {
        "key": "C",
        "text": "Storage accounts should prevent shared key access"
      },
      {
        "key": "D",
        "text": "Storage account keys should not be expired"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Chính sách **Tài khoản lưu trữ sẽ ngăn chặn quyền truy cập khóa chung** thực thi ủy quyền Microsoft Entra thay vì ủy quyền Khóa chia sẻ. When Shared Key access is disallowed, requests authenticated with storage account access keys are rejected, preventing extracted storage keys from being used to access the account.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783809499193-iyj61xpt.png",
    "sourceTitle": "Examcademy SC-100 Question 93",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/93-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-94",
    "questionNumber": 94,
    "text": "You have an Azure subscription containing multiple network security groups (NSGs), multiple virtual machines, and an Azure Bastion host named bastion1.  \n  \nSeveral NSGs have rules that permit direct RDP access to the virtual machines, bypassing bastion1.  \n  \nYou need to ensure the virtual machines can be accessed only through bastion1. The solution must prevent NSG rules from being used to bypass bastion1.  \n  \nWhat should you include in the solution?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Virtual Network Manager security admin rules"
      },
      {
        "key": "B",
        "text": "Azure Virtual Network Manager connectivity configurations"
      },
      {
        "key": "C",
        "text": "Azure Firewall application rules"
      },
      {
        "key": "D",
        "text": "Azure Firewall network rules"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Quy tắc quản trị viên bảo mật Azure Virtual Network Manager có mức độ ưu tiên cao hơn quy tắc NSG và được đánh giá trước chúng. Quy tắc quản trị viên bảo mật có thể từ chối lưu lượng RDP gửi trực tiếp đến các máy ảo, ngăn các quy tắc NSG có mức độ ưu tiên thấp hơn cho phép đường dẫn bỏ qua Azure Bastion.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 94",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/94-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-95",
    "questionNumber": 95,
    "text": "You have an Azure subscription containing multiple storage accounts. The accounts include Azure Files shares and Azure Blob Storage containers, with encryption scopes and infrastructure encryption enabled.  \n  \nYou need to implement customer-managed key-based encryption for the shares and containers, ensuring the keys are applied at the most granular level.  \n  \nAt what level should you apply the encryption keys?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "For Blob Storage, an encryption scope can be applied when writing an individual blob, enabling customer-managed key selection at blob granularity. Đối với Azure Files, khóa do khách hàng quản lý được định cấu hình ở cấp tài khoản lưu trữ, do đó tất cả các chia sẻ tệp trong tài khoản đó đều sử dụng khóa được định cấu hình.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 95",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/95-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-96",
    "questionNumber": 96,
    "text": "You have an Azure subscription containing 100 virtual machines, a virtual network named VNet1, and 20 users. The virtual machines run Windows Server and connect to VNet1. The users work remotely and access Azure resources from Linux workstations.  \n  \nYou need to ensure that users can connect from the workstations to the virtual machines by using Secure Shell (SSH). The solution must satisfy these requirements:  \n  \n- Ensure that users authenticate by using their Microsoft Entra credentials.  \n- Prevent users from transferring files from the virtual machines by using SSH.  \n- Prevent users from accessing the virtual machines directly through the virtual machines' public IP addresses.  \n  \nWhat should you include in the solution?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure NAT Gateway"
      },
      {
        "key": "B",
        "text": "just-in-time (JIT) VM access"
      },
      {
        "key": "C",
        "text": "Azure Bastion"
      },
      {
        "key": "D",
        "text": "Point-to-Site (P2S) VPN"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Azure Bastion cung cấp kết nối SSH cho các máy ảo trong mạng ảo mà không để lộ cổng SSH ra internet công cộng. Phương thức kết nối SSH gốc của nó hỗ trợ xác thực Microsoft Entra cho các nền tảng VM được hỗ trợ và không hỗ trợ truyền tệp. Tài liệu hiện tại của Microsoft chỉ định một hạn chế: Xác thực Microsoft Entra không được hỗ trợ cho các kết nối SSH tới máy ảo Windows, do đó, xác thực Entra SSH cấp độ VM nghiêm ngặt cho Windows Server sẽ yêu cầu một giải pháp không có trong các tùy chọn được liệt kê.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 96",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/96-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-97",
    "questionNumber": 97,
    "text": "You are planning security for an Azure landing zone.  \n  \nYour company has identified these compliance and privacy requirements:  \n  \n- Encrypt cardholder data using encryption keys managed by the company.  \n- Encrypt insurance claim files using encryption keys hosted on-premises.  \n  \nWhich two configurations satisfy the compliance and privacy requirements? Each correct answer represents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Store the cardholder data in an Azure SQL database that is encrypted by using Microsoft-managed keys."
      },
      {
        "key": "B",
        "text": "Store the insurance claim data in Azure Blob storage encrypted by using customer-provided keys."
      },
      {
        "key": "C",
        "text": "Store the cardholder data in an Azure SQL database that is encrypted by using keys stored in Azure Key Vault Managed HSM."
      },
      {
        "key": "D",
        "text": "Store the insurance claim data in Azure Files encrypted by using Azure Key Vault Managed HSM."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Mã hóa dữ liệu minh bạch Azure SQL Database hỗ trợ các khóa do khách hàng quản lý được lưu trữ trong Azure Key Vault Managed HSM, cho phép công ty kiểm soát vòng đời của khóa. Blob Storage hỗ trợ các khóa mã hóa do khách hàng cung cấp theo yêu cầu; Azure Storage không lưu giữ các khóa đó, cho phép công ty giữ chúng trong kho lưu trữ khóa tại chỗ.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 97",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/97-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-98",
    "questionNumber": 98,
    "text": "You have an Azure subscription.  \n  \nYou have an on-premises datacenter that hosts Microsoft SQL Server instances. Each instance contains multiple databases.  \n  \nYou also have a Microsoft 365 subscription.  \n  \nYou plan to implement a solution that scans the databases for vulnerabilities that could compromise data security.  \n  \nYou need to recommend what to configure before the databases can be scanned.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Purview data loss prevention (DLP)"
      },
      {
        "key": "B",
        "text": "Microsoft Purview data governance"
      },
      {
        "key": "C",
        "text": "Microsoft Defender for Cloud"
      },
      {
        "key": "D",
        "text": "Microsoft Defender Vulnerability Management"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Microsoft Defender for Cloud có thể kích hoạt Microsoft Defender để bảo vệ SQL và đánh giá lỗ hổng cho khối lượng công việc SQL Server, bao gồm các phiên bản SQL Server tại chỗ được hỗ trợ được kết nối với Azure. Nó đánh giá cấu hình bảo mật cơ sở dữ liệu và xác định các lỗ hổng có thể ảnh hưởng đến bảo mật dữ liệu.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 98",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/98-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-99",
    "questionNumber": 99,
    "text": "You have an Azure subscription containing SQL Server on Azure virtual machines in the West US Azure region. The virtual machines can be accessed only by private IP addresses.  \n  \nYou plan to deploy Windows-based Azure App Service web apps in the East US Azure region.  \n  \nYou need to recommend a solution that gives the web apps access to the SQL Server databases.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "an Azure VPN gateway"
      },
      {
        "key": "B",
        "text": "a private endpoint"
      },
      {
        "key": "C",
        "text": "a service endpoint"
      },
      {
        "key": "D",
        "text": "an Azure Bastion host"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Tích hợp VNet Azure App Service theo yêu cầu của cổng hỗ trợ các ứng dụng Windows kết nối với mạng ảo ở một vùng Azure khác và yêu cầu Azure VPN gateway dựa trên tuyến đường được định cấu hình cho VPN điểm-trang. Điều này cung cấp cho các ứng dụng web một đường dẫn mạng để tiếp cận các máy ảo SQL Server thông qua địa chỉ IP riêng của chúng.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 99",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/99-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-100",
    "questionNumber": 100,
    "text": "You have a Microsoft 365 tenant containing 5,000 users and 5,000 Windows 11 devices. Every user has a Microsoft 365 E5 license and the Microsoft Defender Vulnerability Management add-on. Microsoft Intune and Microsoft Defender for Endpoint manage the Windows 11 devices. During deployment, the Windows 11 devices are configured to comply with Center for Internet Security (CIS) benchmarks for Windows 11.  \n  \nYou need to recommend a compliance solution for the Windows 11 devices. The solution must identify devices that have been changed and no longer comply with the CIS benchmarks.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Authenticated scan for Windows in Microsoft Defender Vulnerability Management"
      },
      {
        "key": "B",
        "text": "Microsoft Secure Score for Devices in Defender for Endpoint"
      },
      {
        "key": "C",
        "text": "attack surface reduction (ASR) rules in Defender for Endpoint"
      },
      {
        "key": "D",
        "text": "security baselines assessments in Microsoft Defender Vulnerability Management"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Các đánh giá cơ sở bảo mật về Quản lý lỗ hổng của Bộ bảo vệ Microsoft liên tục giám sát cấu hình thiết bị dựa trên hồ sơ điểm chuẩn được chỉ định, hiển thị trạng thái tuân thủ của từng thiết bị và hỗ trợ điểm chuẩn CIS cho Windows 11. Do đó, chúng phát hiện sự sai lệch cấu hình khiến thiết bị không tuân thủ đường cơ sở CIS.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 100",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/100-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-101",
    "questionNumber": 101,
    "text": "You have a Microsoft 365 E5 subscription.  \n  \nYou plan to deploy Global Secure Access universal tenant restrictions v2.  \n  \nWhich authentication-plane resources and data-plane resources will be protected?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Hạn chế đối tượng thuê v2 cung cấp khả năng bảo vệ mặt phẳng xác thực cho mọi ứng dụng xác thực bằng Microsoft Entra ID, bao gồm tất cả các ứng dụng của Microsoft và bên thứ ba (đối tác) sử dụng Entra ID để đăng nhập, vì vậy, khoảng trống đầu tiên là tùy chọn ứng dụng tích hợp Entra ID. Đối với mặt phẳng dữ liệu, phạm vi bao phủ của Microsoft 365 được ghi lại là SharePoint Online và Exchange Online (được thực thi thông qua đường dẫn mặt phẳng dữ liệu v2 hạn chế đối tượng thuê), hẹp hơn nhiều so với \"tất cả các ứng dụng Microsoft 365\"; tùy chọn tất cả các ứng dụng M365 vượt quá mức độ phù hợp (ví dụ: quyền truy cập ẩn danh và nhiều dịch vụ không bị chặn). Lưu ý rằng tín hiệu Truy cập an toàn toàn cầu tự nó bao gồm Microsoft Graph ở mặt phẳng dữ liệu, nhưng trong số các lựa chọn được cung cấp, tùy chọn SharePoint Online/Exchange Online là câu trả lời ở mặt phẳng dữ liệu dự kiến ​​và tùy chọn chỉ-ứng dụng M365 là một yếu tố gây phân tâm quá mức.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 101",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/101-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.923Z"
  },
  {
    "id": "sc100-102",
    "questionNumber": 102,
    "text": "You have a Microsoft 365 subscription containing a Microsoft SharePoint Online site named Site1. Site1 stores documents based on a predefined form that include confidential employee information.  \n  \nYou monitor access to Site1 by using a Microsoft Defender for Cloud Apps session policy.  \n  \nYou need to ensure that step-up authentication is triggered when a user downloads documents based on the predefined form. The solution must minimize administrative effort.  \n  \nWhich Microsoft Data Classification Service inspection method should you use, and which Conditional Access option should you add to the session policy?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Dấu vân tay tài liệu tạo ra một loại thông tin nhạy cảm từ một biểu mẫu tiêu chuẩn và phát hiện các tài liệu có nguồn gốc từ biểu mẫu đó, làm cho nó phù hợp với các biểu mẫu thông tin nhân viên được xác định trước. Hành động xác thực nâng cao của Bộ bảo vệ dành cho ứng dụng đám mây sẽ chuyển hướng phiên để đánh giá lại Quyền truy cập có điều kiện dựa trên ngữ cảnh xác thực.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 102",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/102-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-103",
    "questionNumber": 103,
    "text": "An on-premises network has an Active Directory Domain Services (AD DS) domain containing 500 Windows 11 devices.  \n  \nYou have a Microsoft 365 subscription and an Azure subscription.  \n  \nA Microsoft Entra tenant synchronizes with the domain and is connected to the subscriptions. The devices are Microsoft Entra hybrid joined.  \n  \nYou plan to deploy a solution that mitigates attacks against privileged accounts. The solution will include Microsoft Sentinel rules to detect attempts to use fake cached credentials.  \n  \nYou need to recommend a solution that creates the fake cached credentials on client computers.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "User and Entity Behavior Analytics (UEBA) in Microsoft Sentinel"
      },
      {
        "key": "B",
        "text": "a deception rule in Microsoft Defender for Endpoint"
      },
      {
        "key": "C",
        "text": "a user risk policy in Microsoft Entra ID Protection"
      },
      {
        "key": "D",
        "text": "a Honeytoken tag in Microsoft Defender for Identity"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Các quy tắc lừa đảo của Bộ bảo vệ Microsoft dành cho Điểm cuối có thể triển khai các tạo phẩm điểm cuối lừa đảo, bao gồm thông tin xác thực giả mạo, để thu hút hoạt động truy cập thông tin xác thực. Việc cố gắng sử dụng các thông tin xác thực đã được cài đặt đó sẽ tạo ra tín hiệu phát hiện có thể được sử dụng bởi các quy tắc Microsoft Sentinel.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 103",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/103-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-104",
    "questionNumber": 104,
    "text": "HOTSPOT -  \n  \nYou have a Microsoft Entra tenant linked to a Microsoft 365 subscription and an Azure subscription. The tenant includes service principals used to access applications in the Azure subscription.  \n  \nYou need to recommend a solution that detects risky sign-ins and other risky activities performed by the tenant’s service principals while minimizing costs.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Microsoft Entra ID Protection phát hiện và báo cáo rủi ro về nhận dạng khối lượng công việc, bao gồm cả nguyên tắc dịch vụ. Microsoft Entra Workload ID Premium là giấy phép độc lập để bảo vệ danh tính khối lượng công việc và cung cấp đầy đủ thông tin chi tiết về rủi ro cũng như các biện pháp kiểm soát đối với những danh tính đó, tránh việc cấp phép P2 ​​dựa trên người dùng rộng hơn.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 104",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/104-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-105",
    "questionNumber": 105,
    "text": "You have a Microsoft 365 subscription and an Azure subscription. Microsoft 365 Defender and Microsoft Defender for Cloud are enabled.  \n  \nThe Azure subscription includes a Microsoft Sentinel workspace. Microsoft Sentinel data connectors are configured for Microsoft 365, Microsoft 365 Defender, Defender for Cloud, and Azure.  \n  \nYou plan to deploy Azure virtual machines that run Windows Server.  \n  \nYou need to enable extended detection and response (EDR) and security orchestration, automation, and response (SOAR) capabilities for Microsoft Sentinel.  \n  \nHow should you recommend enabling each capability?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Bộ bảo vệ dành cho Máy chủ trong Microsoft Defender for Cloud tích hợp với Bộ bảo vệ dành cho Điểm cuối để cung cấp khả năng EDR cho máy ảo Windows Server. Cẩm nang Microsoft Sentinel là các quy trình làm việc của Ứng dụng Azure Logic tự động hóa và điều phối các phản hồi đối với các sự cố và cảnh báo.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 105",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/105-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-106",
    "questionNumber": 106,
    "text": "You have a multi-cloud environment containing an Azure subscription and an Amazon Web Services (AWS) account.  \n  \nImplement Azure security services to manage resources across both subscriptions. The solution must:  \n  \n- Automatically identify threats found in AWS CloudTrail events.  \n- Enforce security settings on AWS virtual machines by using Azure policies.  \n  \nWhat should be included for each requirement?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Microsoft Defender for Cloud bảo vệ các tài khoản AWS được kết nối và cung cấp khả năng phát hiện mối đe dọa dựa trên hoạt động của AWS CloudTrail. Azure Arc chiếu các máy AWS vào Azure để quản lý và quản trị, cho phép các nhiệm vụ Chính sách Azure thực thi cài đặt cấu hình và bảo mật.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 106",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/106-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-107",
    "questionNumber": 107,
    "text": "You have a Microsoft Entra tenant and an Azure subscription.  \n  \nYou are evaluating a risk-based Conditional Access policy to control workload identities' access to resources.  \n  \nTo which identity type should you apply the policy, and which signal source can be used as part of that policy?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Quyền truy cập có điều kiện để nhận dạng khối lượng công việc nhắm vào các nguyên tắc dịch vụ. Microsoft Entra ID Protection cung cấp tín hiệu rủi ro cho các chính sách nhận dạng khối lượng công việc dựa trên rủi ro; danh tính được quản lý không đủ điều kiện cho các chính sách rủi ro về Truy cập có điều kiện hoặc Bảo vệ ID.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 107",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/107-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-108",
    "questionNumber": 108,
    "text": "Your company has Microsoft SQL Server databases hosted on-premises.  \n  \nThe company plans to migrate these databases to Azure. You need to recommend a secure database architecture that minimizes patching operations, protects sensitive data by using dynamic data masking, and minimizes cost.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure SQL Managed Instance"
      },
      {
        "key": "B",
        "text": "Azure Synapse Analytics dedicated SQL pools"
      },
      {
        "key": "C",
        "text": "Azure SQL Database"
      },
      {
        "key": "D",
        "text": "SQL Server on Azure Virtual Machines"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Azure SQL Database là dịch vụ cơ sở dữ liệu nền tảng dưới dạng dịch vụ được quản lý hoàn toàn với tính năng vá lỗi, sao lưu và phục hồi tích hợp, giúp giảm bớt việc quản trị vận hành. Nó hỗ trợ tính năng che giấu dữ liệu động, giúp che giấu dữ liệu nhạy cảm được chỉ định trong kết quả truy vấn đối với người dùng không có đặc quyền mà không làm thay đổi dữ liệu được lưu trữ. Không có yêu cầu về khả năng SQL Server ở phạm vi phiên bản, đây là lựa chọn phù hợp hơn về mặt chi phí so với Azure SQL Managed Instance.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 108",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/108-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-109",
    "questionNumber": 109,
    "text": "You have a Microsoft 365 tenant. Your company uses a third-party software-as-a-service (SaaS) app named App1. App1 supports user authentication by using Microsoft Entra credentials.  \n  \nYou need to recommend a solution that enables users to authenticate to App1 with their Microsoft Entra credentials.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a relying party trust in Active Directory Federation Services (AD FS)"
      },
      {
        "key": "B",
        "text": "a Microsoft Entra enterprise application"
      },
      {
        "key": "C",
        "text": "Microsoft Entra Application Proxy"
      },
      {
        "key": "D",
        "text": "Microsoft Entra External ID"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Ứng dụng doanh nghiệp Microsoft Entra là đại diện phía đối tượng thuê được sử dụng để tích hợp ứng dụng SaaS và đặt cấu hình đăng nhập một lần. Nó cho phép Microsoft Entra ID xác thực người dùng được chỉ định và cung cấp cho ứng dụng xác nhận hoặc mã thông báo liên kết phù hợp.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 109",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/109-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-110",
    "questionNumber": 110,
    "text": "You need to recommend a solution that meets the AWS requirements.  \n  \nWhat should the recommendation include?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "ec2_instances",
        "text": "For the AWS EC2 instances:",
        "correctAnswer": "D"
      },
      {
        "id": "aws_service_logs",
        "text": "For the AWS service logs:",
        "correctAnswer": "F"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Azure Blueprints"
      },
      {
        "key": "B",
        "text": "Defender for Cloud"
      },
      {
        "key": "C",
        "text": "Microsoft Defender for Cloud Apps"
      },
      {
        "key": "D",
        "text": "Microsoft Defender for servers"
      },
      {
        "key": "E",
        "text": "Microsoft Endpoint Manager"
      },
      {
        "key": "F",
        "text": "Microsoft Sentinel"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Azure Blueprints"
      },
      {
        "key": "B",
        "text": "Defender for Cloud"
      },
      {
        "key": "C",
        "text": "Microsoft Defender for Cloud Apps"
      },
      {
        "key": "D",
        "text": "Microsoft Defender for servers"
      },
      {
        "key": "E",
        "text": "Microsoft Endpoint Manager"
      },
      {
        "key": "F",
        "text": "Microsoft Sentinel"
      }
    ],
    "correctAnswers": [
      "ec2_instances=D",
      "aws_service_logs=F"
    ],
    "explanation": "Bộ bảo vệ Microsoft dành cho máy chủ bảo vệ các máy Windows và Linux, đồng thời hỗ trợ các phiên bản AWS EC2 thông qua trình kết nối AWS của Bộ bảo vệ dành cho đám mây. Trình kết nối AWS của Microsoft Sentinel sử dụng nhật ký dịch vụ AWS, bao gồm CloudTrail, Nhật ký luồng VPC, kết quả của GuardDuty và nhật ký CloudWatch.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 110",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/110-design-solutions-that-align-with-security-best-practices-and",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-111",
    "questionNumber": 111,
    "text": "You have an Azure subscription.  \n  \nYour company has a governance requirement that resources be created only in the West Europe or North Europe Azure regions.  \n  \nWhat should you recommend to enforce this governance requirement?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure management groups"
      },
      {
        "key": "B",
        "text": "custom Azure roles"
      },
      {
        "key": "C",
        "text": "Azure Policy assignments"
      },
      {
        "key": "D",
        "text": "regulatory compliance standards in Microsoft Defender for Cloud"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Việc gán Chính sách Azure sử dụng chính sách **Vị trí được phép** tích hợp sẵn, được định cấu hình cho Tây Âu và Bắc Âu với hiệu ứng Từ chối, sẽ hạn chế việc triển khai tài nguyên ở những khu vực được phép đó. [Azure Policy overview](https://learn.microsoft.com/en-us/azure/governance/policy/overview)",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 111",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/111-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-112",
    "questionNumber": 112,
    "text": "You have an Azure subscription containing multiple Azure Storage blobs and Azure Files shares.  \n  \nRecommend a security solution to authorize access to the blobs and shares that meets these requirements:  \n  \n- Support access to the shares by using SMB.  \n- Restrict blob access to specified time periods.  \n- Include authentication support whenever possible.  \n  \nWhat should you recommend for each resource?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Dịch vụ miền Microsoft Entra hỗ trợ xác thực dựa trên danh tính cho Azure Files qua SMB. Ủy quyền người dùng SAS cho Blob Storage được ủy quyền bằng thông tin xác thực Microsoft Entra và có thể chỉ định thời gian bắt đầu và hết hạn của SAS, giới hạn quyền truy cập blob trong một khoảng thời gian xác định.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 112",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/112-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-113",
    "questionNumber": 113,
    "text": "Your company has a multicloud environment containing a Microsoft 365 subscription, an Azure subscription, and an Amazon Web Services (AWS) implementation.  \n  \nYou need to recommend a security posture management solution for these components:  \n  \n- Azure IoT Edge devices  \n- AWS EC2 instances  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783809487853-b17euu5t.png)  \n  \nWhich services should be included in the recommendation?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Bộ bảo vệ Microsoft dành cho IoT được thiết kế để xác định các thiết bị IoT/OT, lỗ hổng và mối đe dọa. Microsoft Defender for Cloud cung cấp tính năng Quản lý tư thế bảo mật đám mây không cần tác nhân cho khối lượng công việc AWS tích hợp, bao gồm cả phiên bản EC2. Cần có Azure Arc cho các kịch bản triển khai tác nhân/tiện ích mở rộng và bảo vệ cấp máy chủ, thay vì đánh giá AWS CSPM cơ bản.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783809487853-b17euu5t.png",
    "sourceTitle": "Examcademy SC-100 Question 113",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/113-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-114",
    "questionNumber": 114,
    "text": "You are planning the security levels for a security access strategy.  \n  \nIdentify the security level to configure for each job role. The solution must follow the security best practices in the Microsoft Cybersecurity Reference Architectures (MCRA).  \n  \nWhich security level should you configure for each job role?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "MCRA phân đoạn bảo mật theo độ nhạy vai trò và đặc quyền. Người dùng tiêu chuẩn sử dụng bảo mật Doanh nghiệp; các nhà phát triển truy cập mã và tài nguyên phát triển sử dụng Bảo mật chuyên dụng; và quản trị viên CNTT có quyền nâng cao sử dụng Bảo mật đặc quyền.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 114",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/114-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-115",
    "questionNumber": 115,
    "text": "An Azure subscription contains a web app named App1. App1 uses a Microsoft Entra user account named SRV1 as a service account to authenticate to an Azure SQL database named DB1.  \n  \nYou discover that a developer directly accessed DB1 by using SRV1.  \n  \nYou need to recommend a secure authentication method that prevents credential misuse outside App1 while minimizing administrative effort.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a managed identity"
      },
      {
        "key": "B",
        "text": "a group managed service account (gMSA)"
      },
      {
        "key": "C",
        "text": "a delegated managed service account (dMSA)"
      },
      {
        "key": "D",
        "text": "a federated identity credential"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "managed identity cung cấp cho App1 danh tính Microsoft Entra được quản lý tự động để có thể nhận mã thông báo cho Azure SQL Database mà không cần lưu trữ hoặc chia sẻ thông tin xác thực của người dùng. Việc cấp quyền DB1 cho danh tính đó sẽ hạn chế quyền truy cập cơ sở dữ liệu vào khối lượng công việc của ứng dụng và loại bỏ việc sử dụng lại thông tin xác thực do nhà phát triển quản lý.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 115",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/115-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-116",
    "questionNumber": 116,
    "text": "You have an Azure subscription that includes virtual machines, storage accounts, and Azure SQL databases.  \n  \nAll resources are backed up several times per day by using Azure Backup.  \n  \nYou are developing a strategy to protect against ransomware attacks.  \n  \nYou need to recommend the controls that must be enabled to ensure Azure Backup can restore the resources following a successful ransomware attack.  \n  \nWhich two controls should you include in the recommendation? Each correct answer presents a complete solution.  \n  \n> NOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Enable soft delete for backups."
      },
      {
        "key": "B",
        "text": "Require PINs for critical operations."
      },
      {
        "key": "C",
        "text": "Encrypt backups by using customer-managed keys (CMKs)."
      },
      {
        "key": "D",
        "text": "Perform offline backups to Azure Data Box."
      },
      {
        "key": "E",
        "text": "Use Azure Monitor notifications when backup configurations change."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Xóa mềm sẽ bảo tồn dữ liệu sao lưu đã xóa trong một khoảng thời gian lưu giữ, cho phép khôi phục sau khi vô tình hoặc cố ý xóa. Việc yêu cầu mã PIN bảo mật cho các hoạt động quan trọng sẽ bổ sung thêm biện pháp kiểm soát xác thực trước khi có những thay đổi mang tính hủy hoại đối với các bản sao lưu trực tuyến, giúp ngăn chặn kẻ tấn công xóa hoặc làm suy yếu các bản sao lưu cần thiết để khôi phục.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 116",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/116-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-117",
    "questionNumber": 117,
    "text": "Your company has an on-premises network and an Azure subscription.  \n  \nThe company does **not** have a Site-to-Site VPN or an ExpressRoute connection to Azure.  \n  \nYou are designing security standards for Azure App Service web apps. The web apps will access Microsoft SQL Server databases on the network.  \n  \nYou need to recommend security standards that enable the web apps to access the databases. The solution must minimize the number of internet-accessible endpoints open to the on-premises network.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "virtual network NAT gateway integration"
      },
      {
        "key": "B",
        "text": "hybrid connections"
      },
      {
        "key": "C",
        "text": "virtual network integration"
      },
      {
        "key": "D",
        "text": "a private endpoint"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Kết nối kết hợp Azure App Service cung cấp quyền truy cập TCP gửi đi an toàn từ ứng dụng web đến máy chủ và cổng tại chỗ cụ thể, chẳng hạn như điểm cuối SQL Server. Trình quản lý kết nối kết hợp tại chỗ thiết lập kết nối gửi đi tới Azure Relay qua cổng 443, do đó cơ sở dữ liệu không cần điểm cuối gửi đến có thể truy cập internet. [Microsoft Learn: Hybrid Connections in Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/app-service-hybrid-connections)",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 117",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/117-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-118",
    "questionNumber": 118,
    "text": "You have a multicloud environment containing Azure, Amazon Web Services (AWS), and Google Cloud Platform (GCP) subscriptions.  \n  \nYou need to discover and review role assignments across the subscriptions.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Lighthouse"
      },
      {
        "key": "B",
        "text": "Microsoft Defender for Identity"
      },
      {
        "key": "C",
        "text": "Microsoft Entra ID Governance"
      },
      {
        "key": "D",
        "text": "Microsoft Entra Permissions Management"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Quản lý quyền Microsoft Entra cung cấp khả năng hiển thị tập trung vào các quyền được gán cho danh tính trên Azure, AWS và GCP, cho phép khám phá và xem xét các nhiệm vụ vai trò trên nhiều đám mây. Kể từ đó, Microsoft đã ngừng sản phẩm độc lập này và các khả năng CIEM hiện có sẵn trong Microsoft Defender for Cloud.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 118",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/118-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-119",
    "questionNumber": 119,
    "text": "Your on-premises network has an Active Directory Domain Services (AD DS) domain and a hybrid deployment between a Microsoft Exchange Server 2019 organization and an Exchange Online tenant. The AD DS domain includes a group named Group1. Group1 belongs to the Organization Management role group for the Exchange deployment.  \n  \nYou have a Microsoft 365 E5 subscription that uses Microsoft Defender.  \n  \nYou have an Azure subscription that uses Microsoft Sentinel.  \n  \nYou need to recommend a solution that marks Group1 as a sensitive group and raises an alert in Microsoft Sentinel for any changes to Group1. The solution must minimize administrative effort.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Defender for Identity"
      },
      {
        "key": "B",
        "text": "Microsoft Entra ID Protection"
      },
      {
        "key": "C",
        "text": "Microsoft Entra Privileged Identity Management (PIM)"
      },
      {
        "key": "D",
        "text": "Microsoft Defender for Office 365"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Bộ bảo vệ danh tính Microsoft có thể áp dụng thẻ nhạy cảm theo cách thủ công cho các nhóm Active Directory, cho phép phát hiện sửa đổi nhóm nhạy cảm. Cảnh báo của Bộ bảo vệ danh tính có sẵn trong Microsoft Sentinel thông qua trình kết nối XDR của Bộ bảo vệ Microsoft, cung cấp cảnh báo về các thay đổi đối với nhóm được gắn thẻ với mức quản trị bổ sung tối thiểu.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 119",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/119-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-120",
    "questionNumber": 120,
    "text": "You have an Azure subscription that contains an Azure Kubernetes Service (AKS) cluster named AKS1. AKS1 hosts a Windows node pool named Pool1 and a Linux node pool named Pool2.  \n  \nYou are designing a pool update strategy for AKS1.  \n  \nYou need to recommend how often to replace the operating system images deployed to the nodes. The solution must meet these requirements:  \n  \n- Minimize the time required to apply operating system updates once the updates are released.  \n- Minimize administrative effort.  \n  \nWhat should you recommend for each pool?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "AKS phát hành hình ảnh nút Linux hàng tuần và hình ảnh nút Windows hàng tháng. Việc điều chỉnh tần suất thay thế của mỗi nhóm theo nhịp phát hành hình ảnh sẽ áp dụng các bản cập nhật kịp thời với nỗ lực quản trị tối thiểu: hàng tháng cho Windows và hàng tuần cho Linux.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 120",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/120-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-121",
    "questionNumber": 121,
    "text": "You need to recommend a solution that meets the compliance requirements.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Một kế hoạch chi tiết bao gồm các tạo phẩm quản trị có thể tái sử dụng, bao gồm cả các nhiệm vụ chính sách, để triển khai các tiêu chuẩn và duy trì sự tuân thủ. Việc gán chính sách hỗ trợ các phạm vi bị loại trừ thông qua thuộc tính notScopes của nó, do đó, việc loại trừ một nhóm tài nguyên được thực hiện bằng cách cập nhật nhiệm vụ thay vì sửa đổi định nghĩa chính sách.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 121",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/121-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-122",
    "questionNumber": 122,
    "text": "You have a Microsoft 365 E5 subscription that uses Microsoft Teams.  \n  \nYour company has an investment department and a research department. Each department includes a compliance team.  \n  \nYou are designing a Microsoft Purview Information Barriers (IBs) solution to restrict communication between the departments. The solution must meet these requirements:  \n  \n- Employees in each department must be able to communicate only with employees in their own department.  \n- Compliance-team employees in each department must be able to communicate with compliance-team employees in the other department.  \n  \nWhat is the minimum number of segments and IB policies required?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Bốn phân đoạn tách biệt nhân viên bình thường và nhân viên tuân thủ của hai bộ phận. Các chính sách Rào cản thông tin của Microsoft Purview mang tính định hướng và một phân khúc chỉ có thể có một chính sách. Cần có một chính sách cho mỗi phân đoạn để duy trì hoạt động liên lạc nội bộ của từng bộ phận trong khi chỉ cho phép hai phân đoạn tuân thủ liên lạc giữa các phòng ban.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 122",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/122-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-123",
    "questionNumber": 123,
    "text": "Your company is building an invoicing application that will use Azure Active Directory (Azure AD) B2C. The application will be deployed as an App Service web app.  \n  \nYou need to recommend a solution to the application development team to protect the application from identity-related attacks.  \n  \nWhich two configurations should you recommend? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure AD workbooks to monitor risk detections"
      },
      {
        "key": "B",
        "text": "Azure AD Conditional Access integration with user flows and custom policies"
      },
      {
        "key": "C",
        "text": "smart account lockout in Azure AD B2C"
      },
      {
        "key": "D",
        "text": "access packages in Identity Governance"
      },
      {
        "key": "E",
        "text": "custom resource owner password credentials (ROPC) flows in Azure AD B2C"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Quyền truy cập có điều kiện của Azure AD B2C có thể sử dụng tín hiệu Bảo vệ danh tính để xác định những lần đăng nhập rủi ro và chặn quyền truy cập hoặc yêu cầu biện pháp khắc phục, chẳng hạn như xác thực đa yếu tố. Khóa tài khoản thông minh giảm thiểu các cuộc tấn công bạo lực và thông tin xác thực từ điển bằng cách khóa tài khoản dựa trên hành vi đăng nhập không thành công.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 123",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/123-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-124",
    "questionNumber": 124,
    "text": "Your company wants to optimize its use of Microsoft Defender for Endpoint to protect resources against ransomware, in line with Microsoft Security Best Practices.  \n  \nYou need to create a post-breach response plan for compromised computers based on the Microsoft Detection and Response Team (DART) approach in Microsoft Security Best Practices.  \n  \nWhat should the response plan include?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "controlled folder access"
      },
      {
        "key": "B",
        "text": "application isolation"
      },
      {
        "key": "C",
        "text": "memory scanning"
      },
      {
        "key": "D",
        "text": "machine isolation"
      },
      {
        "key": "E",
        "text": "user isolation"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Hướng dẫn Ứng phó sự cố của Microsoft để ngăn chặn phần mềm tống tiền yêu cầu cách ly các hệ thống bị xâm nhập khỏi mạng để ngăn chặn chuyển động ngang và lây lan thêm trong khi vẫn duy trì các hệ thống để điều tra và khắc phục. Bộ bảo vệ Microsoft dành cho Điểm cuối cung cấp tính năng này dưới dạng cách ly máy.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 124",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/124-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-125",
    "questionNumber": 125,
    "text": "You plan to automate development and deployment of a Node.js-based app by using GitHub.  \n  \nRecommend a DevSecOps solution that meets these requirements:  \n  \n- Automatically generate pull requests that remediate identified vulnerabilities.  \n- Automate vulnerability code scanning for public and private repositories.  \n- Minimize administrative effort.  \n- Minimize costs.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "GitHub Enterprise Cloud có thể sử dụng GitHub Advanced Security để quét mã trong các kho lưu trữ riêng tư trong khi vẫn duy trì quyền quản lý được lưu trữ trên máy chủ GitHub; quét mã cho các kho lưu trữ công cộng có sẵn trên GitHub.com. Dependabot phát hiện các phần phụ thuộc dễ bị tấn công và tạo các yêu cầu kéo để cập nhật chúng lên phiên bản bảo mật.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 125",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/125-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-126",
    "questionNumber": 126,
    "text": "You intend to deploy a dynamically scaling, Linux-based Azure Virtual Machine Scale Set to host jump servers. Support staff will use these jump servers from personal and kiosk devices over the internet, and the jump-server subnet will have a network security group (NSG) associated with it.  \n  \nDesign an access solution for the Azure Virtual Machine Scale Set that meets these requirements:  \n  \n- Each time support staff connect to a jump server, they must request access.  \n- Only authorized support staff can start SSH connections to the jump servers.  \n- Protection from brute-force attacks from internal networks and the internet must be maximized.  \n- Users must be able to connect to the jump servers only from the internet.  \n- Administrative effort must be minimized.  \n  \nWhat should the solution include?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Quyền truy cập VM đúng lúc (JIT) giữ cổng SSH (22) đóng trên mạng con NSG theo mặc định và chỉ mở quy tắc cho phép tạm thời, có mức độ ưu tiên cao khi người dùng được ủy quyền yêu cầu quyền truy cập qua RBAC, sau đó tự động hoàn nguyên quy tắc đó. Điều này đáp ứng các yêu cầu về yêu cầu trên mỗi kết nối, chỉ được ủy quyền, bảo vệ bạo lực tối đa và yêu cầu nỗ lực tối thiểu tốt hơn nhiều so với Azure Automation (viết lệnh thủ công) hoặc Bastion (sẽ không bắt buộc quy trình phê duyệt theo yêu cầu và sẽ tạo nguồn NSG AzureBastionSubnet chứ không phải internet). Vì nhân viên hỗ trợ kết nối từ các thiết bị cá nhân và ki-ốt với IP Internet không thể đoán trước nên quy tắc cho phép JIT được áp dụng cho IP công cộng của khách hàng yêu cầu được cung cấp tại thời điểm yêu cầu, trước khi kết nối được thiết lập. AzureBastionSubnet và GatewaySubnet là các nguồn Azure nội bộ và mâu thuẫn với yêu cầu người dùng chỉ kết nối từ internet.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 126",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/126-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-127",
    "questionNumber": 127,
    "text": "You are preparing security recommendations for an Azure App Service web app named App1. App1 has these specifications:  \n  \n- Users will request access to App1 through the My Apps portal, and a human resources manager will approve those requests.  \n- Users will authenticate by using Azure Active Directory (Azure AD) user accounts.  \n  \nYou need to recommend an access-security architecture for App1. What should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Đăng ký ứng dụng Azure AD là cấu hình nhận dạng Entra được sử dụng khi bật xác thực Azure App Service. Các gói quyền truy cập Quản trị danh tính cho phép người dùng yêu cầu quyền truy cập và có thể yêu cầu người phê duyệt được chỉ định, chẳng hạn như người quản lý nhân sự, phê duyệt yêu cầu. Đánh giá quyền truy cập xác nhận lại quyền truy cập hiện có và không cung cấp quy trình làm việc yêu cầu quyền truy cập.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 127",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/127-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-128",
    "questionNumber": 128,
    "text": "Your on-premises network contains an Active Directory Domain Services (AD DS) domain with Group1 and five Windows Server computers. Each server hosts a standalone app that Group1 members use.  \n  \nA Microsoft Entra tenant synchronizes with the domain.  \n  \nYou plan to manage access to the apps by deploying Global Secure Access. A Conditional Access policy will enforce security controls for every connection to the apps.  \n  \nRecommend a Global Secure Access app and Microsoft Entra private network connector configuration that minimizes administrative effort and is highly available.  \n  \nWhat is the minimum number of Global Secure Access apps and private network connectors to recommend?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Truy cập nhanh cho phép một ứng dụng truy cập riêng tư chứa nhiều FQDN hoặc địa chỉ IP riêng tư và cho phép chính sách Truy cập có điều kiện bảo vệ ứng dụng đó. Đây là cách tiếp cận có mức quản trị thấp nhất khi áp dụng cùng một người dùng và các biện pháp kiểm soát cho cả năm ứng dụng. Một nhóm trình kết nối cần ít nhất hai trình kết nối mạng riêng để có tính sẵn sàng cao.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 128",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/128-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-129",
    "questionNumber": 129,
    "text": "You are developing a security operations strategy based on the Zero Trust framework.  \n  \nYou need to reduce the operational burden on Tier 1 Microsoft Security Operations Center (SOC) analysts.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Enable built-in compliance policies in Azure Policy."
      },
      {
        "key": "B",
        "text": "Enable self-healing in Microsoft 365 Defender."
      },
      {
        "key": "C",
        "text": "Automate data classification."
      },
      {
        "key": "D",
        "text": "Create hunting queries in Microsoft 365 Defender."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Tính năng điều tra và phản hồi tự động của Microsoft Defender XDR bao gồm khả năng tự phục hồi giúp tự động điều tra các cảnh báo và khắc phục các mối đe dọa trên các thiết bị, email, nội dung cũng như danh tính. Chức năng tự động hóa này giống như năng lực SOC Cấp 1 bổ sung và giảm khối lượng công việc điều tra và khắc phục thủ công cho các nhà phân tích Cấp 1.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 129",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/129-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-130",
    "questionNumber": 130,
    "text": "Your company has a hybrid cloud infrastructure that includes an on-premises Active Directory Domain Services (AD DS) forest, a Microsoft 365 subscription, and an Azure subscription.  \n  \nThe company’s on-premises network hosts internal web apps that use Kerberos authentication. At present, the web apps can be accessed only from the network.  \n  \nYou have remote users with personal devices running Windows 11.  \n  \nYou need to recommend a solution that enables the remote users to access the web apps. The solution must meet the following requirements:  \n  \n- Prevent remote users from accessing any other network resources.  \n- Support Azure Active Directory (Azure AD) Conditional Access.  \n- Simplify the end-user experience.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure AD Application Proxy"
      },
      {
        "key": "B",
        "text": "web content filtering in Microsoft Defender for Endpoint"
      },
      {
        "key": "C",
        "text": "Microsoft Tunnel"
      },
      {
        "key": "D",
        "text": "Azure Virtual WAN"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Proxy ứng dụng Azure AD xuất bản một cách an toàn các ứng dụng web tại chỗ đã chọn cho người dùng từ xa mà không cấp quyền truy cập mạng rộng. Xác thực trước Azure AD hỗ trợ Truy cập có điều kiện trước khi lưu lượng truy cập đến ứng dụng tại chỗ và Ủy quyền ràng buộc Kerberos cung cấp đăng nhập một lần cho các ứng dụng web sử dụng xác thực Windows tích hợp.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 130",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/130-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-131",
    "questionNumber": 131,
    "text": "You need to recommend a solution that resolves the virtual machine issue.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Enable the Qualys scanner in Defender for Cloud."
      },
      {
        "key": "B",
        "text": "Onboard the virtual machines to Microsoft Defender for Endpoint."
      },
      {
        "key": "C",
        "text": "Create a device compliance policy in Microsoft Endpoint Manager."
      },
      {
        "key": "D",
        "text": "Onboard the virtual machines to Azure Arc."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Vấn đề về máy ảo là khuyến nghị của Defender for Cloud \"Máy nên có giải pháp đánh giá lỗ hổng\" và môi trường sử dụng Qualys làm máy quét tiêu chuẩn. Vì các máy ảo đã xuất hiện trong Defender for Cloud (đề xuất được tạo ra cho chúng), nên chúng đã được kết nối và không cần tích hợp Azure Arc; bạn chỉ cần kích hoạt trình quét lỗ hổng Qualys tích hợp trong Defender for Cloud để khắc phục đề xuất và đưa máy về trạng thái tuân thủ. Azure Arc (D) chỉ cần thiết cho các máy chủ không phải Azure/tại chỗ chưa hiển thị trong Defender for Cloud. (Trình quét Qualys tích hợp đã được thay thế bằng Quản lý lỗ hổng của Bộ bảo vệ Microsoft, nhưng khái niệm kích hoạt giải pháp VA tích hợp sẵn vẫn không thay đổi.)",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 131",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/131-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-132",
    "questionNumber": 132,
    "text": "You have an on-premises network containing several legacy applications. The applications run LDAP queries against an existing directory service.  \n  \nYou are migrating the on-premises infrastructure to a cloud-only infrastructure.  \n  \nYou need to recommend an identity solution for the infrastructure that supports the legacy applications. The solution must minimize the administrative effort required to maintain the infrastructure.  \n  \nWhich identity service should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Entra External ID"
      },
      {
        "key": "B",
        "text": "Microsoft Entra Domain Services"
      },
      {
        "key": "C",
        "text": "Microsoft Entra ID"
      },
      {
        "key": "D",
        "text": "Active Directory Domain Services (AD DS)"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Dịch vụ miền Microsoft Entra cung cấp các dịch vụ miền được quản lý, bao gồm LDAP, cho các ứng dụng cũ phụ thuộc vào giao thức Dịch vụ miền Active Directory. Nó chỉ hỗ trợ những người thuê trên nền tảng đám mây và loại bỏ nhu cầu triển khai, vá lỗi, giám sát và duy trì bộ điều khiển miền, giảm thiểu nỗ lực quản trị.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 132",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/132-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-133",
    "questionNumber": 133,
    "text": "You have a Microsoft 365 subscription that uses Microsoft Purview.  \n  \nYou need to recommend a solution that provides guidance for ensuring that Personally Identifiable Information (PII) in the subscription complies with local privacy regulations. The solution must minimize administrative effort.  \n  \nWhich Microsoft Purview solution should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Data Loss Prevention"
      },
      {
        "key": "B",
        "text": "Information Protection"
      },
      {
        "key": "C",
        "text": "Insider Risk Management"
      },
      {
        "key": "D",
        "text": "Compliance Manager"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Trình quản lý tuân thủ Microsoft Purview cung cấp các đánh giá theo quy định và các hành động cải tiến được đề xuất cùng với hướng dẫn triển khai chi tiết để giúp các tổ chức tuân thủ các quy định và tiêu chuẩn bảo vệ dữ liệu. Các đánh giá tích hợp cũng như kiểm tra và giám sát tự động của nó giúp giảm bớt nỗ lực hành chính.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 133",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/133-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-134",
    "questionNumber": 134,
    "text": "Your company uses a third-party security information and event management (SIEM) solution that includes Splunk and Microsoft Sentinel.  \n  \nYou plan to integrate Microsoft Sentinel with Splunk.  \n  \nYou need to recommend a solution for sending security events from Microsoft Sentinel to Splunk.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a Microsoft Sentinel data connector"
      },
      {
        "key": "B",
        "text": "Azure Event Hubs"
      },
      {
        "key": "C",
        "text": "a Microsoft Sentinel workbook"
      },
      {
        "key": "D",
        "text": "Azure Data Factory"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Azure Event Hubs cung cấp lớp phát trực tuyến để xuất các sự kiện bảo mật Microsoft Sentinel sang SIEM bên ngoài. Splunk có thể sử dụng các sự kiện từ một trung tâm sự kiện thông qua tích hợp Azure hoặc giải pháp chuyển tiếp do Trung tâm sự kiện kích hoạt. Trình kết nối dữ liệu Microsoft Sentinel đưa dữ liệu vào Sentinel; sổ làm việc trực quan hóa dữ liệu; và Azure Data Factory không phải là cơ chế tích hợp phát trực tiếp sự kiện.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 134",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/134-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-135",
    "questionNumber": 135,
    "text": "You have a Microsoft 365 E5 subscription that uses Microsoft Purview, SharePoint Online, and OneDrive for Business.  \n  \nRecommend ransomware protection that meets these requirements:  \n  \n- Mitigate attacks that copy files, encrypt the copies, and then delete the original files.  \n- Mitigate attacks that encrypt files in place.  \n- Minimize administrative effort.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Thùng rác giữ lại các tệp SharePoint và OneDrive đã xóa để có thể khôi phục các tệp gốc sau khi xóa. Việc lập phiên bản sẽ giữ lại các phiên bản tệp trước đó, cho phép khôi phục phiên bản trước khi mã hóa tại chỗ. Chính sách DLP quản lý việc xử lý nội dung nhạy cảm và không cung cấp khả năng khôi phục tệp ransomware.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 135",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/135-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-136",
    "questionNumber": 136,
    "text": "You have an Azure subscription with Microsoft Defender for Cloud enabled.  \n  \nYou need to enforce ISO 27001:2013 standards for newly deployed resources in the subscription. The solution must ensure that noncompliant resources are detected automatically.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Blueprints"
      },
      {
        "key": "B",
        "text": "the regulatory compliance dashboard in Defender for Cloud"
      },
      {
        "key": "C",
        "text": "Azure Policy"
      },
      {
        "key": "D",
        "text": "Azure role-based access control (Azure RBAC)"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Chính sách Azure thực thi các yêu cầu quản trị và quy định ở phạm vi đăng ký, đồng thời liên tục đánh giá các cấu hình tài nguyên, xác định các tài nguyên không tuân thủ. Trong Defender for Cloud, các tiêu chuẩn tuân thủ quy định được triển khai thông qua các sáng kiến ​​Chính sách Azure; bảng thông tin tuân thủ quy định hiển thị các đánh giá kết quả thay vì thực thi các tiêu chuẩn.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 136",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/136-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-137",
    "questionNumber": 137,
    "text": "You have an Azure subscription containing virtual machines. Ports 3389 and 22 are disabled for external access.  \n  \nYou need to design a solution that gives administrators secure remote access to the virtual machines. The solution must satisfy these requirements:  \n  \n- Avoid needing to enable ports 3389 and 22 from the internet.  \n- Grant permission to connect to the virtual machines only when it is needed.  \n- Ensure administrators connect to the virtual machines by using the Azure portal.  \n  \nWhich two actions should you include in the solution? Each correct answer presents part of the solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Configure Azure VPN Gateway."
      },
      {
        "key": "B",
        "text": "Enable Just Enough Administration (JEA)."
      },
      {
        "key": "C",
        "text": "Configure Azure Bastion."
      },
      {
        "key": "D",
        "text": "Enable just-in-time (JIT) VM access."
      },
      {
        "key": "E",
        "text": "Enable Azure Active Directory (Azure AD) Privileged Identity Management (PIM) roles as virtual machine contributors."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Azure Bastion kích hoạt các phiên RDP và SSH trực tiếp thông qua cổng Azure trong khi vẫn giữ các cổng 3389 và 22 khỏi Internet công cộng. Truy cập VM đúng lúc chỉ cho phép truy cập vào các cổng quản lý khi được yêu cầu, chỉ trong khoảng thời gian được định cấu hình, sau đó khôi phục các hạn chế mạng trước đó.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 137",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/137-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-138",
    "questionNumber": 138,
    "text": "You have a Microsoft 365 subscription that contains a group named Group1. The subscription is connected to a Microsoft Entra ID P1 tenant.  \n  \nYou have an external software as a service (SaaS) application named App1. App1 is administered through a web-based admin portal and supports using Microsoft Entra ID credentials.  \n  \nYou need to ensure that only members of Group1 who sign in from Microsoft Entra joined devices can access App1's admin portal.  \n  \nWhat should you create first in Microsoft Entra?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "an enterprise application"
      },
      {
        "key": "B",
        "text": "a Microsoft Entra application proxy connector group"
      },
      {
        "key": "C",
        "text": "a Conditional Access policy"
      },
      {
        "key": "D",
        "text": "an access package"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Ứng dụng SaaS bên ngoài phải được thêm dưới dạng ứng dụng doanh nghiệp để service principal của nó tồn tại trong đối tượng thuê và Microsoft Entra ID có thể cung cấp tích hợp đăng nhập cho ứng dụng đó. Sau đó, ứng dụng doanh nghiệp đó có thể được nhắm mục tiêu theo chính sách Truy cập có điều kiện chỉ định Nhóm1 và yêu cầu điều kiện thiết bị tham gia Microsoft Entra thích hợp.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 138",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/138-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-139",
    "questionNumber": 139,
    "text": "You have a Microsoft 365 subscription containing Windows 11 devices protected by Microsoft Defender XDR.  \n  \nYou must block device access to file-sharing sites while meeting these requirements:  \n  \n- Identify file-sharing sites that users connected to during the last 90 days.  \n- Stop users from connecting to the identified file-sharing sites.  \n- Minimize administrative effort.  \n  \nChoose the service to identify the file-sharing sites and the service to prevent users from connecting to them.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Microsoft Defender for Cloud Apps Cloud Discovery xác định các ứng dụng đám mây được truy cập từ Defender tích hợp cho các thiết bị Endpoint. Việc đánh dấu các ứng dụng chia sẻ tệp được phát hiện là Không được phê duyệt sẽ tự động đồng bộ hóa miền của chúng với các chỉ báo URL tùy chỉnh của Bộ bảo vệ Microsoft dành cho Điểm cuối. Sau đó, bộ bảo vệ mạng dành cho Điểm cuối sẽ chặn quyền truy cập, tránh việc tạo và duy trì thủ công các quy tắc chặn riêng lẻ.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 139",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/139-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-140",
    "questionNumber": 140,
    "text": "You use Azure Pipelines together with Azure Repos to implement continuous integration and continuous deployment (CI/CD) workflows for deploying applications to Azure.  \n  \nYou need to recommend what to include in dynamic application security testing (DAST) according to the principles of the Microsoft Cloud Adoption Framework for Azure.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "unit testing"
      },
      {
        "key": "B",
        "text": "penetration testing"
      },
      {
        "key": "C",
        "text": "dependency checks"
      },
      {
        "key": "D",
        "text": "threat modeling"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Kiểm tra bảo mật ứng dụng động đánh giá một ứng dụng trong khi nó đang chạy để xác định các lỗ hổng bảo mật. Microsoft khuyên bạn nên thực hiện DAST với sự hỗ trợ từ chuyên gia bảo mật, chẳng hạn như người kiểm tra thâm nhập hoặc người đánh giá lỗ hổng.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 140",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/140-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-141",
    "questionNumber": 141,
    "text": "A customer has a Microsoft 365 subscription and uses the Free edition of Azure Active Directory (Azure AD).  \n  \nThe customer plans to acquire an Azure subscription and deploy several Azure resources. You need to assess the customer's security environment.  \n  \nWhat will require an upgrade from Azure AD Free to the Premium edition?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure AD Privileged Identity Management (PIM)"
      },
      {
        "key": "B",
        "text": "role-based authorization"
      },
      {
        "key": "C",
        "text": "resource-based authorization"
      },
      {
        "key": "D",
        "text": "Azure AD Multi-Factor Authentication"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Quản lý danh tính đặc quyền Azure AD (PIM) yêu cầu giấy phép Quản trị Microsoft Entra ID P2 (trước đây là Azure AD Premium P2) hoặc Microsoft Entra ID. Bản thân Azure role-based access control dành cho tài nguyên Azure không yêu cầu nâng cấp Premium và Xác thực đa yếu tố Azure AD cơ bản có sẵn với phiên bản Miễn phí.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 141",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/141-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-142",
    "questionNumber": 142,
    "text": "You are creating a ransomware response plan that adheres to Microsoft Security Best Practices.  \n  \nYou need to recommend a solution that limits the damage scope of ransomware attacks without causing an administrative lockout.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "device compliance policies"
      },
      {
        "key": "B",
        "text": "Privileged Access Workstations (PAWs)"
      },
      {
        "key": "C",
        "text": "Customer Lockbox for Microsoft Azure"
      },
      {
        "key": "D",
        "text": "emergency access accounts"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Tài khoản truy cập khẩn cấp là các tài khoản kính vỡ có đặc quyền cao, chỉ dành cho đám mây được sử dụng khi tài khoản quản trị thông thường không khả dụng hoặc bị xâm phạm. Việc duy trì chúng sẽ duy trì quyền truy cập quản trị để ngăn chặn và phục hồi trong khi xảy ra sự cố, ngăn chặn tình trạng khóa đối tượng thuê trong khi các biện pháp bảo vệ quyền truy cập đặc quyền hạn chế tác động của phần mềm tống tiền.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 142",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/142-design-solutions-that-align-with-security-best-practices-and",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-143",
    "questionNumber": 143,
    "text": "Your company intends to assess the security of its Azure environment according to the principles of the Microsoft Cloud Adoption Framework for Azure.  \n  \nYou need to recommend a cloud-based service that evaluates whether Azure resources comply with the National Institute of Standards and Technology (NIST) Cybersecurity Framework (CSF).  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Compliance Manager in Microsoft Purview"
      },
      {
        "key": "B",
        "text": "Microsoft Defender for Cloud"
      },
      {
        "key": "C",
        "text": "Microsoft Sentinel"
      },
      {
        "key": "D",
        "text": "Microsoft Defender for Cloud Apps"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Microsoft Defender for Cloud thể hiện các khung quy định dưới dạng tiêu chuẩn bảo mật và liên tục đánh giá các tài nguyên Azure trong phạm vi dựa trên các biện pháp kiểm soát tuân thủ hiện hành thông qua bảng thông tin tuân thủ Quy định. NIST CSF v2.0 là một tiêu chuẩn được hỗ trợ, cho phép đề xuất trạng thái tuân thủ và biện pháp khắc phục cho các tài nguyên Azure.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 143",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/143-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-144",
    "questionNumber": 144,
    "text": "You have an Azure subscription that contains 50 virtual machines running Windows Server and 50 virtual machines running Linux.  \n  \nYou need to conduct vulnerability assessments on the virtual machines. The solution must satisfy these requirements:  \n  \n- Identify missing updates and insecure configurations.  \n- Use the Qualys engine.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Defender for Servers"
      },
      {
        "key": "B",
        "text": "Microsoft Defender Threat Intelligence (Defender TI)"
      },
      {
        "key": "C",
        "text": "Microsoft Defender for Endpoint"
      },
      {
        "key": "D",
        "text": "Microsoft Defender External Attack Surface Management (Defender EASM)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Bộ bảo vệ Microsoft dành cho Máy chủ cung cấp đánh giá lỗ hổng bảo mật cho các máy ảo của máy chủ được bảo vệ, bao gồm Windows Server và Linux. Nó hỗ trợ đánh giá các bản vá hệ điều hành bị thiếu và các cấu hình sai về bảo mật, đồng thời Microsoft ghi lại Qualys như một giải pháp đánh giá lỗ hổng được hỗ trợ cho Defender for Servers.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 144",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/144-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-145",
    "questionNumber": 145,
    "text": "You have a Microsoft 365 subscription.  \n  \nYou must recommend a security solution to monitor these activities:  \n  \n- User accounts that might be compromised  \n- Users carrying out bulk file downloads from Microsoft SharePoint Online  \n  \nWhat should the recommendation include for each activity? Each component may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "potentially_compromised_accounts",
        "text": "User accounts that were potentially compromised:",
        "correctAnswer": "B"
      },
      {
        "id": "bulk_sharepoint_downloads",
        "text": "Users performing bulk file downloads from SharePoint Online:",
        "correctAnswer": "D"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "A data loss prevention (DLP) policy"
      },
      {
        "key": "B",
        "text": "Azure AD Identity Protection"
      },
      {
        "key": "C",
        "text": "Microsoft Defender for Cloud"
      },
      {
        "key": "D",
        "text": "Microsoft Defender for Cloud Apps"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "A data loss prevention (DLP) policy"
      },
      {
        "key": "B",
        "text": "Azure AD Identity Protection"
      },
      {
        "key": "C",
        "text": "Microsoft Defender for Cloud"
      },
      {
        "key": "D",
        "text": "Microsoft Defender for Cloud Apps"
      }
    ],
    "correctAnswers": [
      "potentially_compromised_accounts=B",
      "bulk_sharepoint_downloads=D"
    ],
    "explanation": "Azure AD Identity Protection phát hiện rủi ro danh tính và tiết lộ thông tin người dùng rủi ro đối với các tài khoản có thể bị xâm phạm. Ứng dụng Microsoft Defender for Cloud giám sát hoạt động của Microsoft 365 và bao gồm các phát hiện tải xuống hàng loạt và tải xuống nhiều tệp bất thường, có thể xác định khả năng đánh cắp dữ liệu SharePoint Online.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 145",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/145-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-146",
    "questionNumber": 146,
    "text": "Your company is developing a modern application that will run as an Azure App Service web app.  \n  \nYou plan to perform threat modeling to identify potential security issues by using the Microsoft Threat Modeling Tool.  \n  \nWhich type of diagram should you create?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "system flow"
      },
      {
        "key": "B",
        "text": "data flow"
      },
      {
        "key": "C",
        "text": "process flow"
      },
      {
        "key": "D",
        "text": "network flow"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Công cụ tạo mô hình mối đe dọa của Microsoft sử dụng sơ đồ luồng dữ liệu (DFD) để thể hiện các thành phần hệ thống, sự tương tác, chuyển động dữ liệu và ranh giới tin cậy của chúng. Phần trình bày này hỗ trợ xác định các mối đe dọa tiềm ẩn và các biện pháp giảm nhẹ có thể áp dụng được.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 146",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/146-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-147",
    "questionNumber": 147,
    "text": "Microsoft Defender for Cloud is assigned to Azure management groups, and you have a Microsoft Sentinel deployment.  \n  \nWhile triaging alerts, you need extra information about security events, including remediation recommendations.  \n  \nWhich two components can you use to meet this goal? Each correct answer provides a complete solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Sentinel threat intelligence workbooks"
      },
      {
        "key": "B",
        "text": "Microsoft Sentinel notebooks"
      },
      {
        "key": "C",
        "text": "threat intelligence reports in Defender for Cloud"
      },
      {
        "key": "D",
        "text": "workload protections in Defender for Cloud"
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Các báo cáo thông tin về mối đe dọa của Defender for Cloud sẽ làm phong phú thêm cuộc điều tra cảnh báo với thông tin về mối đe dọa được phát hiện, bao gồm hoạt động của kẻ tấn công, các chỉ báo về sự xâm phạm cũng như thông tin giảm thiểu và khắc phục. Bảng thông tin bảo vệ Khối lượng công việc hiển thị các cảnh báo bảo mật cùng với thông tin chi tiết về tài nguyên bị ảnh hưởng và các bước khắc phục được đề xuất.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 147",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/147-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-148",
    "questionNumber": 148,
    "text": "You have 500 Windows 11 devices and 200 macOS devices. The devices are managed by using Microsoft Intune and are subject to compliance policies.  \n  \nYou plan to deploy the following Intune features:  \n  \n- Security baselines  \n- Remote lock of noncompliant devices  \n  \nWhich feature is supported by each platform?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Cấu hình cơ sở bảo mật Intune áp dụng cho các thiết bị Windows, bao gồm Windows 11; macOS không phải là nền tảng được hỗ trợ cho những đường cơ sở này. Hành động khóa thiết bị Intune Remote hỗ trợ macOS, trong khi Windows không được liệt kê là nền tảng được hỗ trợ cho hành động đó.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 148",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/148-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-149",
    "questionNumber": 149,
    "text": "You have an Azure Kubernetes Service (AKS) cluster that hosts Linux nodes.  \n  \nYou need to recommend a solution that ensures deployed worker nodes have the most recent kernel updates while minimizing administrative effort.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "The nodes must restart after the updates are applied."
      },
      {
        "key": "B",
        "text": "The updates must first be applied to the image used to provision the nodes."
      },
      {
        "key": "C",
        "text": "The AKS cluster version must be upgraded."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Các bản cập nhật nhân Linux chỉ có hiệu lực sau khi nút được khởi động lại. Các nút Linux AKS tự động kiểm tra và cài đặt các bản cập nhật hệ điều hành và kernel, nhưng AKS không tự động khởi động lại các nút Linux để hoàn thành các bản cập nhật yêu cầu khởi động lại. [Handle Linux node reboots with kured — Azure Kubernetes Service](https://learn.microsoft.com/en-us/azure/aks/upgrade-node-image-kured)",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 149",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/149-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-150",
    "questionNumber": 150,
    "text": "Solution: You recommend that adaptive network hardening be enabled.  \n  \nDoes this achieve the goal?",
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
    "explanation": "Tăng cường mạng thích ứng đề xuất các quy tắc NSG hạn chế hơn đối với các máy ảo truy cập internet dựa trên phân tích lưu lượng truy cập và thông tin về mối đe dọa; nó góp phần kiểm soát bảo mật **Hạn chế truy cập mạng trái phép**. Kiểm soát **Cổng quản lý an toàn** được cải thiện bằng cách khắc phục các đề xuất cổng quản lý, chẳng hạn như bảo vệ các cổng quản lý bằng quyền truy cập VM đúng lúc hoặc đóng chúng.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 150",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/150-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-151",
    "questionNumber": 151,
    "text": "Solution: You recommend enabling just-in-time (JIT) VM access for all virtual machines.  \n  \nDoes this meet the goal?",
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
    "explanation": "Kiểm soát cổng quản lý an toàn bao gồm đề xuất để bảo vệ các cổng quản lý máy ảo bằng kiểm soát truy cập mạng kịp thời. JIT hạn chế quyền truy cập vào các cổng quản lý và chỉ mở chúng khi có yêu cầu truy cập, do đó, việc bật quyền truy cập trên tất cả các máy ảo sẽ khắc phục được đề xuất hiện hành và cải thiện điểm bảo mật của kiểm soát này.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 151",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/151-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-152",
    "questionNumber": 152,
    "text": "Solution: You recommend enrolling all virtual machines in Microsoft Defender for Endpoint.  \n  \nDoes this meet the goal?",
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
    "explanation": "Tích hợp Bộ bảo vệ Microsoft cho Điểm cuối cung cấp khả năng phản hồi và phát hiện điểm cuối. Kiểm soát cổng quản lý an toàn được cải thiện bằng cách khắc phục các khuyến nghị hiển thị cổng quản lý, chẳng hạn như sử dụng quyền truy cập VM đúng lúc hoặc hạn chế nhóm bảo mật mạng; việc tích hợp điểm cuối không khắc phục được những đề xuất đó.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 152",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/152-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-153",
    "questionNumber": 153,
    "text": "Solution: You recommend enabling the VMAccess extension on every virtual machine.  \n  \nDoes this meet the goal?",
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
    "explanation": "Các cổng quản lý an toàn được cải thiện bằng cách hạn chế tiếp xúc với các cổng quản lý từ xa thông qua các biện pháp như truy cập VM đúng lúc và các nhóm bảo mật mạng. Việc bật tiện ích mở rộng VMAccess không đóng hoặc hạn chế các cổng đó.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 153",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/153-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-154",
    "questionNumber": 154,
    "text": "You are designing the security architecture for a cloud-only environment.  \n  \nYou are reviewing the integration between Microsoft 365 Defender and other Microsoft cloud services according to Microsoft Cybersecurity Reference Architectures (MCRA).  \n  \nRecommend the Microsoft cloud services that integrate directly with Microsoft 365 Defender and meet these requirements:  \n  \n- Enforce data loss prevention (DLP) policies managed directly from the Microsoft 365 Defender portal.  \n- Detect and respond to security threats using User and Entity Behavior Analytics (UEBA) with unified alerting.  \n  \nWhat should be included in the recommendation for each requirement?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Microsoft Purview là dịch vụ của Microsoft để tạo và quản lý các chính sách DLP, bao gồm các trải nghiệm chính sách có sẵn thông qua cổng thông tin Hợp nhất của Bộ bảo vệ Microsoft 365. Azure AD Identity Protection áp dụng phân tích hành vi để xác định rủi ro danh tính và đưa ra các phát hiện thông qua trải nghiệm cảnh báo hợp nhất của Bộ bảo vệ Microsoft 365.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 154",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/154-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-155",
    "questionNumber": 155,
    "text": "You have an Azure subscription containing Azure App Service apps. The apps have these characteristics:  \n  \n- They are deployed through continuous integration and continuous deployment (CI/CD) pipelines in Azure DevOps.  \n- They deploy to a test environment first and then to a production environment.  \n- Their source code is stored in Azure Repos.  \n  \nYou plan to implement DevSecOps controls based on the Microsoft Cloud Adoption Framework for Azure.  \n  \nRecommend testing controls that meet these requirements:  \n  \n- All source code must be tested for security vulnerabilities in Azure Repos before the apps are deployed.  \n- After the apps are deployed to the test environment, they must be tested for security vulnerabilities.  \n  \nWhich testing method should be recommended for each stage?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "SAST phân tích mã nguồn hoặc mã được biên dịch mà không thực thi mã đó, do đó nó xác định các lỗ hổng cấp mã trước khi triển khai. DAST đánh giá một ứng dụng đang chạy, được triển khai và do đó phù hợp trong môi trường thử nghiệm tiền sản xuất, nơi nó có thể tìm thấy các lỗ hổng thời gian chạy, cấu hình và tích hợp mà phân tích tĩnh không thể phát hiện.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 155",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/155-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-156",
    "questionNumber": 156,
    "text": "You have legacy operational technology (OT) and IoT devices.  \n  \nYou need to recommend best practices, based on the Microsoft Cybersecurity Reference Architectures (MCRA), for applying Zero Trust principles to the OT and IoT devices. The solution must minimize the risk of business-operation disruption.  \n  \nWhich two security methodologies should you recommend? Each correct answer represents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "active scanning"
      },
      {
        "key": "B",
        "text": "threat monitoring"
      },
      {
        "key": "C",
        "text": "software patching"
      },
      {
        "key": "D",
        "text": "passive traffic monitoring"
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "Đối với môi trường OT và IoT cũ, giám sát lưu lượng thụ động cung cấp khả năng hiển thị thiết bị và thông tin liên lạc mà không cần tương tác trực tiếp với các hệ thống mỏng manh, trong khi giám sát mối đe dọa sẽ phát hiện hoạt động bất thường hoặc độc hại. Hướng dẫn của MCRA ưu tiên giám sát thụ động vì quá trình quét lỗ hổng chủ động có thể làm hỏng một số hệ thống từ xa, gây gián đoạn hoạt động.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 156",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/156-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-157",
    "questionNumber": 157,
    "text": "You have an Azure subscription that contains multiple apps. The apps are deployed by using continuous integration and continuous delivery (CI/CD) pipelines in Azure DevOps.  \n  \nYou need to integrate static application security testing (SAST) and security smoke testing into the pipelines based on Microsoft Cloud Adoption Framework for Azure principles.  \n  \nAt which stage of the CI/CD process should each test type be integrated?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "SAST quét mã nguồn để tìm lỗ hổng khi mã được cam kết, cung cấp phản hồi sớm trước giai đoạn xây dựng và triển khai. Kiểm tra khói bảo mật chạy ở giai đoạn phát hành sản phẩm để xác nhận rằng các chức năng và cấu hình bảo mật thiết yếu của ứng dụng đã triển khai hoạt động chính xác.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 157",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/157-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-158",
    "questionNumber": 158,
    "text": "You have an Azure subscription containing the resources shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783886757662-9wtvadnk.png)  \n  \nYou need to recommend a network-security solution for App1 that meets these requirements:  \n  \n- Only virtual machines connected to Subnet1 can connect to DB1.  \n- DB1 must not be accessible from the internet.  \n- Minimize costs.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "private endpoint cung cấp kết nối Azure SQL Database thông qua địa chỉ IP riêng trong mạng ảo, tránh đường dẫn internet cho App1 trên VM1. Quy tắc mạng ảo Azure SQL giới hạn kết nối với các mạng con được chỉ định, chẳng hạn như Subnet1. NSG không trực tiếp bảo mật điểm cuối Azure SQL Database PaaS và Azure Firewall sẽ tăng thêm chi phí không cần thiết.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783886757662-9wtvadnk.png",
    "sourceTitle": "Examcademy SC-100 Question 158",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/158-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-159",
    "questionNumber": 159,
    "text": "You need to recommend a strategy to route internet-bound traffic from the landing zones. The solution must satisfy the landing-zone requirements.  \n  \nWhat should you recommend as part of the landing-zone deployment?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "local network gateways"
      },
      {
        "key": "B",
        "text": "forced tunneling"
      },
      {
        "key": "C",
        "text": "service chaining"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Đường hầm bắt buộc định tuyến lưu lượng truy cập trên Internet thông qua bước nhảy tiếp theo được chỉ định, chẳng hạn như mạng tại chỗ hoặc thiết bị ảo mạng, thay vì trực tiếp tới Internet. Điều này hỗ trợ việc kiểm tra, kiểm toán tập trung và kiểm soát việc ra vào khu vực hạ cánh.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 159",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/159-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-160",
    "questionNumber": 160,
    "text": "For a Microsoft cloud environment, you are designing a security architecture that is based on the Microsoft Cloud Security Benchmark.  \n  \nWhich three identity-management best practices are based on the Azure Security Benchmark? Each correct answer provides a complete solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Manage application identities securely and automatically."
      },
      {
        "key": "B",
        "text": "Manage the lifecycle of identities and entitlements."
      },
      {
        "key": "C",
        "text": "Protect identity and authentication systems."
      },
      {
        "key": "D",
        "text": "Enable threat detection for identity and access management."
      },
      {
        "key": "E",
        "text": "Use a centralized identity and authentication system."
      }
    ],
    "correctAnswers": [
      "A",
      "C",
      "E"
    ],
    "explanation": "Các biện pháp kiểm soát quản lý danh tính theo Điểm chuẩn bảo mật của Microsoft Cloud chỉ định việc sử dụng hệ thống xác thực và nhận dạng tập trung, coi hệ thống nhận dạng và xác thực là hệ thống bảo mật có mức độ ưu tiên cao để bảo vệ cũng như quản lý danh tính ứng dụng một cách an toàn và tự động. Quản lý vòng đời danh tính là biện pháp kiểm soát Quyền truy cập đặc quyền và phát hiện mối đe dọa danh tính là biện pháp kiểm soát Ghi nhật ký và Phát hiện mối đe dọa.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 160",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/160-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-161",
    "questionNumber": 161,
    "text": "Your company develops several applications that users access as custom enterprise applications in Azure Active Directory (Azure AD).  \n  \nYou need to recommend a solution that prevents users connecting to the applications from a specified list of countries.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "activity policies in Microsoft Defender for Cloud Apps"
      },
      {
        "key": "B",
        "text": "sign-in risk policies in Azure AD Identity Protection"
      },
      {
        "key": "C",
        "text": "Azure AD Conditional Access policies"
      },
      {
        "key": "D",
        "text": "device compliance policies in Microsoft Endpoint Manager"
      },
      {
        "key": "E",
        "text": "user risk poticies in Azure AD Identity Protection"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Chính sách Truy cập có điều kiện của Azure AD có thể nhắm mục tiêu các ứng dụng doanh nghiệp đã chọn và thực thi điều kiện vị trí dựa trên các vị trí được đặt tên có chứa các quốc gia hoặc khu vực được chỉ định. Chính sách này có thể sử dụng quyền kiểm soát **Chặn quyền truy cập** đối với hoạt động đăng nhập từ các vị trí đó.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 161",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/161-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-162",
    "questionNumber": 162,
    "text": "Your company has an Azure subscription with enhanced security enabled for Microsoft Defender for Cloud.  \n  \nThe company signs a contract with the United States government.  \n  \nYou need to assess the current subscription for NIST 800-53 compliance.  \n  \nWhat should you do first?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From Azure Policy, assign a built-in initiative that has a scope of the subscription."
      },
      {
        "key": "B",
        "text": "From Azure Policy, assign a built-in policy definition that has a scope of the subscription."
      },
      {
        "key": "C",
        "text": "From Defender for Cloud, review the Azure security baseline for audit report."
      },
      {
        "key": "D",
        "text": "From Microsoft Defender for Cloud Apps, create an access policy for cloud applications."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Việc tuân thủ quy định của NIST SP 800-53 được cung cấp dưới dạng sáng kiến ​​Chính sách Azure tích hợp chứa các định nghĩa chính sách được ánh xạ tới các biện pháp kiểm soát của tiêu chuẩn. Việc chỉ định sáng kiến ​​đó ở phạm vi đăng ký cho phép Microsoft Defender for Cloud đánh giá việc tuân thủ đăng ký và báo cáo; việc chỉ định một định nghĩa chính sách sẽ chỉ đánh giá một yêu cầu riêng lẻ.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 162",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/162-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-163",
    "questionNumber": 163,
    "text": "Your company, Contoso, Ltd., has a Microsoft Entra tenant called contoso.com. Contoso has a partner company, Fabrikam, Inc., with a Microsoft Entra tenant called fabrikam.com.  \n  \nYou must ensure that Fabrikam helpdesk users can reset passwords for specific Contoso users. The solution must meet these requirements:  \n  \n- Follow the principle of least privilege.  \n- Minimize administrative effort.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Người dùng khách cần có quyền đọc thư mục trong phạm vi đối tượng thuê để sử dụng vai trò trong phạm vi đơn vị quản trị. Đơn vị quản trị giới hạn việc gán vai trò cho những người dùng Contoso đã chọn. Quản trị viên mật khẩu có thể đặt lại mật khẩu cho những người không phải quản trị viên trong đơn vị quản trị đó, trong khi Quản trị viên bộ phận trợ giúp cũng cho phép quản lý yêu cầu dịch vụ và theo dõi tình trạng dịch vụ.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 163",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/163-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-164",
    "questionNumber": 164,
    "text": "You need to recommend a solution to secure the landing zones. The solution must satisfy the landing zone and business requirements.  \n  \nWhat should be configured for each landing zone?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "an ExpressRoute gateway"
      },
      {
        "key": "B",
        "text": "Microsoft Defender for Cloud"
      },
      {
        "key": "C",
        "text": "an Azure Private DNS zone"
      },
      {
        "key": "D",
        "text": "Azure DDoS Protection Standard"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Microsoft Defender for Cloud là dịch vụ bảo mật Azure dùng để đánh giá và cải thiện tình trạng bảo mật, áp dụng các đề xuất bảo mật và cung cấp khả năng bảo vệ khối lượng công việc trên các đăng ký vùng đích. Hướng dẫn về vùng đích của Azure khuyên bạn nên bật Bộ bảo vệ cho đám mây cho tất cả các gói đăng ký và sử dụng Chính sách Azure để đảm bảo tuân thủ.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 164",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/164-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-165",
    "questionNumber": 165,
    "text": "You must recommend a solution that meets the security requirements for the InfraSec group.  \n  \nWhat should you use to delegate access?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a subscription"
      },
      {
        "key": "B",
        "text": "a custom role-based access control (RBAC) role"
      },
      {
        "key": "C",
        "text": "a resource group"
      },
      {
        "key": "D",
        "text": "a management group"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Các vai trò role-based access control (RBAC) tùy chỉnh của Azure xác định một nhóm quyền có đặc quyền tối thiểu và có thể được chỉ định cho người dùng hoặc nhóm ở phạm vi nhóm quản lý, đăng ký hoặc nhóm tài nguyên. Đăng ký, nhóm tài nguyên và nhóm quản lý là các phạm vi để tổ chức tài nguyên và áp dụng các nhiệm vụ chứ không phải là các định nghĩa về quyền.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 165",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/165-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-166",
    "questionNumber": 166,
    "text": "You have a Microsoft 365 E5 subscription and an Azure subscription.  \n  \nYou need to recommend a solution that enforces the Zero Trust principle of explicit verification for the subscriptions. The solution must follow Zero Trust guidance in the Microsoft Cybersecurity Reference Architectures (MCRA).  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Conditional Access"
      },
      {
        "key": "B",
        "text": "Microsoft Defender for Identity"
      },
      {
        "key": "C",
        "text": "Microsoft Defender for Cloud"
      },
      {
        "key": "D",
        "text": "Microsoft Entra ID Identity Governance"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Truy cập có điều kiện của Microsoft Entra thực thi các quyết định truy cập bằng cách đánh giá các tín hiệu như người dùng, thiết bị, vị trí và rủi ro, đồng thời bằng cách yêu cầu các biện pháp kiểm soát như xác thực đa yếu tố trước khi cấp quyền truy cập. Đây là công cụ chính sách Zero Trust của Microsoft và do đó triển khai xác minh rõ ràng. [Plan a Conditional Access deployment](https://learn.microsoft.com/en-us/entra/identity/conditional-access/plan-conditional-access)",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 166",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/166-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-167",
    "questionNumber": 167,
    "text": "You have an Azure subscription.  \n  \nYou need to create an Azure Policy that ensures all resources in the subscription have tags assigned. The solution must allow the policy to automatically remediate noncompliant resources.  \n  \nHow should you configure the policy?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Hiệu ứng `modify` có thể thêm hoặc cập nhật thẻ và hỗ trợ các tác vụ khắc phục đối với các tài nguyên không tuân thủ hiện có. Khối `details` của nó yêu cầu `roleDefinitionIds`, chỉ định các quyền RBAC được cấp cho managed identity của nhiệm vụ chính sách để khắc phục. `existenceCondition` thuộc hiệu ứng `deployIfNotExists`, trong khi `conflictEffect` chỉ là cài đặt xử lý xung đột tùy chọn.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 167",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/167-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-168",
    "questionNumber": 168,
    "text": "You need to design a solution that accelerates a Zero Trust security implementation. The solution must use the Zero Trust Rapid Modernization Plan (RaMP).  \n  \nWhich three initiatives should be included in the solution, and in what order should they be implemented? Each correct answer presents part of the solution.",
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
        "correctAnswer": "E"
      },
      {
        "id": "3",
        "text": "Slot 3:",
        "correctAnswer": "D"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Discover and protect IoT devices."
      },
      {
        "key": "B",
        "text": "Implement DevOps integration."
      },
      {
        "key": "C",
        "text": "Explicitly validate trust for all access requests."
      },
      {
        "key": "D",
        "text": "Classify and protect data."
      },
      {
        "key": "E",
        "text": "Apply provisions for ransomware recovery readiness."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Discover and protect IoT devices."
      },
      {
        "key": "B",
        "text": "Implement DevOps integration."
      },
      {
        "key": "C",
        "text": "Explicitly validate trust for all access requests."
      },
      {
        "key": "D",
        "text": "Classify and protect data."
      },
      {
        "key": "E",
        "text": "Apply provisions for ransomware recovery readiness."
      }
    ],
    "correctAnswers": [
      "1=C",
      "2=E",
      "3=D"
    ],
    "explanation": "Trình tự Zero Trust được tăng tốc bắt đầu bằng cách xác minh mọi yêu cầu truy cập, sau đó thiết lập mức độ sẵn sàng phục hồi phù hợp với nguyên tắc giả định vi phạm, sau đó áp dụng phân loại và bảo vệ dữ liệu. Xác thực rõ ràng cung cấp nền tảng kiểm soát truy cập; sự sẵn sàng của ransomware xây dựng khả năng phục hồi; và phân loại cho phép bảo vệ dữ liệu dựa trên độ nhạy cảm.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 168",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/168-design-solutions-that-align-with-security-best-practices-and",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-169",
    "questionNumber": 169,
    "text": "You have an Azure subscription and a Microsoft 365 subscription.  \n  \nYou need to assess the subscriptions’ regulatory compliance. The solution must meet these requirements:  \n  \n- Determine whether data stored in Azure and Microsoft 365 complies with General Data Protection Regulation (GDPR) regulations.  \n- Determine whether Azure resources comply with National Institute of Standards and Technology (NIST) standards.  \n- Provide recommendations for controls that improve compliance.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Microsoft Defender for Cloud đánh giá các tài nguyên Azure theo các tiêu chuẩn tuân thủ quy định, bao gồm NIST và đưa ra các đề xuất để khắc phục các lỗ hổng kiểm soát. Trình quản lý tuân thủ Microsoft Purview cung cấp các đánh giá tuân thủ và hành động cải tiến cho các quy định như GDPR trên Microsoft 365 và các dịch vụ Azure được hỗ trợ.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 169",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/169-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-170",
    "questionNumber": 170,
    "text": "You have an Azure subscription containing two virtual machines, VM1 and VM2, and an Azure App Service Standard app named App1. VM1 uploads data to App1, and App1 stores data on VM2.  \n  \nYou need to secure connectivity between the virtual machines and App1 while minimizing the risk of data exfiltration.  \n  \nWhat should you use to manage connectivity for App1?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Điểm cuối riêng tư Azure App Service cung cấp kết nối gửi đến riêng tư cho App1 thông qua địa chỉ IP riêng tư trong mạng ảo, giảm khả năng tiếp xúc với Internet công cộng. Tích hợp mạng ảo cung cấp quyền truy cập bên ngoài của App1 vào các tài nguyên trong mạng ảo, chẳng hạn như VM2; đó là tính năng Dịch vụ ứng dụng dành cho lưu lượng truy cập đi.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 170",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/170-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-171",
    "questionNumber": 171,
    "text": "You are assessing the security of ClaimsApp.  \n  \nFor each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "FD1 can be used to protect all the instances of ClaimsApp.",
        "correctAnswer": "Yes"
      },
      {
        "id": "2",
        "text": "FD1 must be configured to have a certificate for claims.fabrikam.com.",
        "correctAnswer": "Yes"
      },
      {
        "id": "3",
        "text": "To block connections from North Korea to ClaimsApp, you require a custom rule in FD1.",
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
    "explanation": "Azure Front Door có thể cung cấp tính năng định tuyến tập trung và bảo vệ WAF cho các phiên bản ứng dụng. TLS cho miền tùy chỉnh phải sử dụng chứng chỉ có CN hoặc SAN khớp với Claims.fabrikam.com. Chặn theo quốc gia trong Azure Front Door WAF sử dụng điều kiện GeoMatch trong quy tắc tùy chỉnh.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 171",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/171-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-172",
    "questionNumber": 172,
    "text": "You have an Azure subscription.  \n  \nYou enable the Defender Cloud Security Posture Management (CSPM) plan.  \n  \nYou need to optimize the subscription’s security posture by implementing Microsoft Defender for Cloud secure-score recommendations.  \n  \nWhich security policy should you enable, and which factors directly affect the secure score?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Điểm chuẩn bảo mật đám mây của Microsoft (MCSB) là chính sách bảo mật mặc định do Microsoft soạn thảo mà Defender for Cloud chỉ định và có các đề xuất tích hợp giúp nâng cao điểm số bảo mật; CIS Microsoft Azure Foundations Benchmark và \"Azure CSPM\" là các sáng kiến ​​tuân thủ/quy định, không phải là chính sách điểm số bảo mật mặc định. Khi bật gói Defender CSPM, điểm an toàn không chỉ bị ảnh hưởng bởi các đề xuất chính sách bảo mật tích hợp mà còn bởi thứ hạng mức độ ưu tiên rủi ro (đường dẫn tấn công/rủi ro) và bởi phân loại tài sản quan trọng (mức độ quan trọng trong kinh doanh), mà kế hoạch CSPM bổ sung bên cạnh các đề xuất cơ bản. Do đó, tập hợp đầy đủ các yếu tố là sự lựa chọn đúng đắn thay vì chỉ khuyến nghị hoặc chỉ khuyến nghị cộng với ưu tiên rủi ro.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 172",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/172-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-173",
    "questionNumber": 173,
    "text": "You have a Microsoft 365 tenant called contoso.com.  \n  \nYou need to ensure that users can authenticate only to contoso.com. The solution must meet these requirements:  \n  \n- Prevent users from authenticating to other Microsoft 365 tenants.  \n- Minimize administrative effort.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Entra Private Access"
      },
      {
        "key": "B",
        "text": "Microsoft Defender for Endpoint"
      },
      {
        "key": "C",
        "text": "Microsoft Entra Internet Access"
      },
      {
        "key": "D",
        "text": "Microsoft Defender for Cloud Apps"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Microsoft Entra Internet Access hỗ trợ các hạn chế đối tượng thuê phổ biến Global Secure Access, thực thi các hạn chế đối tượng thuê v2 đối với lưu lượng xác thực và chặn quyền truy cập vào những đối tượng thuê bên ngoài không được phép. Cách tiếp cận này loại bỏ nhu cầu duy trì máy chủ proxy hoặc cấu hình mạng phức tạp theo yêu cầu của các hạn chế đối tượng thuê truyền thống.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 173",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/173-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-174",
    "questionNumber": 174,
    "text": "You have 10 Azure subscriptions that contain 100 role-based access control (RBAC) role assignments.  \n  \nYou plan to consolidate the role assignments.  \n  \nYou need to recommend a solution that identifies which role assignments were **not** used during the last 90 days. The solution must minimize administrative effort.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Defender for Cloud"
      },
      {
        "key": "B",
        "text": "Microsoft Entra access reviews"
      },
      {
        "key": "C",
        "text": "Microsoft Entra Privileged Identity Management (PIM)"
      },
      {
        "key": "D",
        "text": "Microsoft Entra Permissions Management"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Quản lý quyền Microsoft Entra cung cấp các phân tích sử dụng quyền tập trung trên các đăng ký Azure và xác định các danh tính không hoạt động có quyền được cấp chưa được sử dụng trong 90 ngày trước đó, cho phép xác định các phân công vai trò để hợp nhất với việc xem xét thủ công tối thiểu.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 174",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/174-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-175",
    "questionNumber": 175,
    "text": "You have three on-premises Windows Server servers containing shared folders with 10,000 files.  \n  \nYou have a Microsoft 365 tenant that uses Microsoft Purview and includes custom sensitive information types (SITs).  \n  \nYour Azure subscription contains five Azure Blob Storage accounts and multiple web apps. The Blob Storage accounts hold data for the web apps.  \n  \nRecommend a Microsoft Purview solution that scans both the storage blobs and shared folders, using the custom SITs to identify files containing specific data.  \n  \nWhat should be used for each storage type?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Bản đồ dữ liệu Microsoft Purview quét và lập danh mục các nguồn dữ liệu Azure được hỗ trợ như Azure Blob Storage và có thể phân loại dữ liệu. Trình quét Bảo vệ Thông tin Microsoft Purview được triển khai để quét các lượt chia sẻ tệp tại chỗ và có thể xác định nội dung nhạy cảm bằng cách sử dụng các loại thông tin nhạy cảm, bao gồm cả SIT tùy chỉnh.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 175",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/175-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-176",
    "questionNumber": 176,
    "text": "You have an on-premises datacenter containing Server1, which runs Windows Server 2022, and a firewall that prevents Server1 from connecting to the internet.  \n  \nYou have an Azure subscription named Sub1.  \n  \nYou need to recommend a resiliency strategy for Server1 that includes a backup plan to transfer Server1 data to Sub1.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Máy chủ Microsoft Azure Backup (MABS) có thể bảo vệ khối lượng công việc Windows Server tại chỗ và gửi dữ liệu sao lưu của chúng tới Azure Recovery Services vault. Tác nhân Dịch vụ khôi phục Microsoft Azure (MARS) chạy trên máy chủ được bảo vệ và yêu cầu máy đó giao tiếp với Azure, điều này không tương thích với hạn chế internet của Server1. Kho tiền Azure Backup được sử dụng cho các nguồn dữ liệu Azure Backup mới hơn thay vì các bản sao lưu MABS.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 176",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/176-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-177",
    "questionNumber": 177,
    "text": "Your company intends to deploy several Azure App Service web apps in the West Europe Azure region. The web apps will be accessed only by customers in Europe and the United States.  \n  \nYou need to recommend a solution that prevents malicious bots from scanning the web apps for vulnerabilities. The solution must minimize the attack surface.  \n  \nWhat should be included in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Firewall Premium"
      },
      {
        "key": "B",
        "text": "Azure Traffic Manager and application security groups"
      },
      {
        "key": "C",
        "text": "Azure Application Gateway Web Application Firewall (WAF)"
      },
      {
        "key": "D",
        "text": "network security groups (NSGs)"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Tường lửa ứng dụng web Azure Application Gateway (WAF) cung cấp khả năng bảo vệ tập trung chống lại các lỗ hổng và khai thác web phổ biến, đồng thời hỗ trợ bộ quy tắc bảo vệ bot được quản lý. Nó có thể ngăn chặn các bot độc hại quét các ứng dụng web để tìm lỗ hổng bảo mật trước khi yêu cầu của chúng đến được phần phụ trợ của Dịch vụ ứng dụng, cho phép các phần phụ trợ đó được bảo vệ khỏi bị lộ trực tiếp ra công chúng.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 177",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/177-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-178",
    "questionNumber": 178,
    "text": "Your company has offices in 10 countries.  \n  \nYou have a Microsoft 365 subscription containing 1,000 users. Each user has a Microsoft 365 E5 license.  \n  \nYou plan to deploy a compliance assessment solution that must meet the following requirements:  \n  \n- Ensure compliance is assessed against the regulations for the country of each office.  \n- Provide improvement-action guidance to ensure subscription compliance.  \n  \nYou need to recommend the service to perform the assessments and identify the additional costs that will be incurred.  \n  \nWhat should you recommend and identify?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Trình quản lý tuân thủ Microsoft Purview cung cấp các đánh giá theo quy định và các hành động cải tiến được đề xuất. Microsoft 365 E5 chỉ bao gồm ba mẫu quy định cao cấp; việc đánh giá các quy định trên 10 quốc gia yêu cầu giấy phép mẫu quy định cao cấp bổ sung.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 178",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/178-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-179",
    "questionNumber": 179,
    "text": "You have a Microsoft Entra tenant named contoso.com and 30 Azure subscriptions linked to contoso.com. The tenant contains the management groups shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783896799119-7qd4p4kx.png)  \n  \nYou need to design a governance solution to manage access to all Azure Storage accounts across the subscriptions. The solution must meet these requirements:  \n  \n- Use custom role-based access control (RBAC) to provide granular access to control-plane and data-plane operations.  \n- Minimize administrative effort.  \n  \nAt which scope should the roles be assigned, and what is the minimum number of assignments per role?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Vai trò tùy chỉnh phải bao gồm các hoạt động trên mặt phẳng dữ liệu, do đó, nó bao gồm DataActions. Microsoft nêu rõ hai quy tắc cứng: Không thể đặt các Phạm vi có thể gán của vai trò tùy chỉnh thành phạm vi gốc '/' và không thể chỉ định vai trò tùy chỉnh với DataActions ở phạm vi nhóm quản lý. Điều đó loại bỏ hoàn toàn tùy chọn '/' và điều đó có nghĩa là không thể chỉ định vai trò một lần tại Mgmt1/Mgmt2 (vì vậy '2' là không thể). Để giảm thiểu nỗ lực quản trị, bạn xác định một vai trò duy nhất mà một nhóm quản lý được phép trong TransferableScopes là nhóm quản lý gốc đối tượng thuê (ID của nó bằng GUID đối tượng thuê Entra), bao gồm Mgmt1, Mgmt2 và tất cả 30 đăng ký. Vì vai trò DataActions thực sự phải được chỉ định ở phạm vi đăng ký hoặc thấp hơn nên bạn thực hiện một nhiệm vụ cho mỗi đăng ký, đưa ra tối thiểu 30 nhiệm vụ.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783896799119-7qd4p4kx.png",
    "sourceTitle": "Examcademy SC-100 Question 179",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/179-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-180",
    "questionNumber": 180,
    "text": "You have an Azure SQL database named DB1 that contains customer information.  \n  \nA team of database administrators has full access to DB1.  \n  \nTo handle customer inquiries, customer-service operators use a custom web app named App1 to view the customer information.  \n  \nYou need to design a security strategy for DB1 that meets these requirements:  \n  \n- When database administrators access DB1 by using SQL management tools, they must not be able to view the contents of the CreditCard attribute in each customer record.  \n- When operators view customer records in App1, they must see only the last four digits of the CreditCard attribute.  \n  \nWhat should the design include?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Luôn được mã hóa bảo vệ dữ liệu nhạy cảm khỏi những người dùng cơ sở dữ liệu có đặc quyền cao, bao gồm cả quản trị viên cơ sở dữ liệu, bằng cách giữ các khóa giải mã bên ngoài cơ sở dữ liệu. Mặt nạ dữ liệu động có thể áp dụng mặt nạ thẻ tín dụng chỉ hiển thị bốn chữ số cuối cùng cho người dùng ứng dụng không có đặc quyền. Bảo mật cấp hàng kiểm soát những hàng nào được trả về và TDE mã hóa dữ liệu ở phần còn lại; không đáp ứng các yêu cầu hiển thị này.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 180",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/180-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-181",
    "questionNumber": 181,
    "text": "$37",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Rule1"
      },
      {
        "key": "B",
        "text": "Rule2"
      },
      {
        "key": "C",
        "text": "Rule3"
      },
      {
        "key": "D",
        "text": "Rule4"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Trình kết nối mạng riêng của Microsoft Entra khởi tạo các kết nối chỉ gửi đi tới các dịch vụ proxy ứng dụng và Truy cập Riêng tư, đồng thời lưu lượng truy cập theo hướng ngược lại sẽ di chuyển qua các phiên đã thiết lập đó. Do đó, TCP 443 gửi đến là không cần thiết. Cần có TCP 443 gửi đi để liên lạc dịch vụ, TCP 80 gửi đi hỗ trợ xác thực danh sách thu hồi chứng chỉ và quyền truy cập của trình kết nối vào bộ điều khiển miền hỗ trợ ủy quyền bị ràng buộc Kerberos.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 181",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/181-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-182",
    "questionNumber": 182,
    "text": "You need to recommend a solution that meets the connection requirements for ClaimsDB.  \n  \nWhat should you recommend for each requirement?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "private endpoint đặt địa chỉ IP riêng cho dịch vụ Azure trong mạng ảo, cho phép truy cập chỉ riêng tư khi quyền truy cập mạng công cộng bị vô hiệu hóa. managed identity cung cấp cho ClaimsApp danh tính Microsoft Entra có thể được cấp quyền truy cập ClaimsDB mà không cần quản lý thông tin xác thực.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 182",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/182-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-183",
    "questionNumber": 183,
    "text": "For a Microsoft cloud environment, recommend a security architecture that follows the Zero Trust principles in the Microsoft Cybersecurity Reference Architectures (MCRA).  \n  \nWhich security methodologies should be included in the recommendation? Each methodology may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "assume_breach",
        "text": "Assume breach",
        "correctAnswer": "D"
      },
      {
        "id": "verify_explicitly",
        "text": "Verify explicitly",
        "correctAnswer": "B"
      },
      {
        "id": "least_privilege",
        "text": "Use least privilege access",
        "correctAnswer": "C"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Business continuity"
      },
      {
        "key": "B",
        "text": "Data classification"
      },
      {
        "key": "C",
        "text": "Just-in-time (JIT) access"
      },
      {
        "key": "D",
        "text": "Segmenting access"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Business continuity"
      },
      {
        "key": "B",
        "text": "Data classification"
      },
      {
        "key": "C",
        "text": "Just-in-time (JIT) access"
      },
      {
        "key": "D",
        "text": "Segmenting access"
      }
    ],
    "correctAnswers": [
      "assume_breach=D",
      "verify_explicitly=B",
      "least_privilege=C"
    ],
    "explanation": "Microsoft Zero Trust ánh xạ phân loại dữ liệu tới xác minh rõ ràng vì ủy quyền sử dụng tất cả các tín hiệu dữ liệu có sẵn. Nó ánh xạ quyền truy cập JIT vào đặc quyền tối thiểu vì các đặc quyền chỉ được cấp khi cần thiết và nó ánh xạ quyền truy cập phân đoạn tới giả định vi phạm vì phân đoạn giới hạn bán kính vụ nổ của sự cố.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 183",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/183-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-184",
    "questionNumber": 184,
    "text": "Your company has a Microsoft 365 E5 subscription.  \n  \nThe company intends to deploy 45 mobile self-service kiosks that will run Windows 10. You need to recommend how to secure the kiosks. The solution must meet these requirements:  \n  \n- Ensure that only authorized applications can run on the kiosks.  \n- Regularly harden the kiosks against new threats.  \n  \nWhich two actions should you include in the recommendations? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Implement Automated investigation and Remediation (AIR) in Microsoft Defender for Endpoint."
      },
      {
        "key": "B",
        "text": "Onboard the kiosks to Microsoft intune and Microsoft Defender for Endpoint."
      },
      {
        "key": "C",
        "text": "Implement threat and vulnerability management in Microsoft Defender for Endpoint."
      },
      {
        "key": "D",
        "text": "Onboard the kiosks to Azure Monitor."
      },
      {
        "key": "E",
        "text": "Implement Privileged Access Workstation (PAW) for the kiosks."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Microsoft Intune có thể quản lý các thiết bị Windows và triển khai các chính sách Kiểm soát ứng dụng dành cho doanh nghiệp để chỉ cho phép chạy các ứng dụng đã được phê duyệt. Việc tích hợp các ki-ốt vào Bộ bảo vệ Microsoft dành cho Điểm cuối giúp phát hiện mối đe dọa điểm cuối và tích hợp các thiết bị với Intune. Quản lý lỗ hổng của Defender trong Defender for Endpoint liên tục đánh giá các lỗ hổng, ưu tiên các mối đe dọa mới nổi và cung cấp các đề xuất bảo mật cũng như quy trình khắc phục để giảm mức độ phơi nhiễm của thiết bị.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 184",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/184-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-185",
    "questionNumber": 185,
    "text": "Your company intends to follow the DevSecOps best practices in the Microsoft Cloud Adoption Framework for Azure.  \n  \nYou need to perform threat modeling by using a top-down approach based on the Microsoft Cloud Adoption Framework for Azure.  \n  \nWhat should you use to begin the threat-modeling process?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "the STRIDE model"
      },
      {
        "key": "B",
        "text": "the DREAD model"
      },
      {
        "key": "C",
        "text": "OWASP threat modeling"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "STRIDE là mô hình lập mô hình mối đe dọa của riêng Microsoft (Giả mạo, Giả mạo, Từ chối, Tiết lộ thông tin, Từ chối dịch vụ, Nâng cao đặc quyền) và được Microsoft mô tả là từ đồng nghĩa với quy trình lập mô hình mối đe dọa của Microsoft — khuôn khổ mà bạn sử dụng để xác định và phân loại các mối đe dọa một cách có hệ thống khi bắt đầu lập mô hình. DREAD (B) là mô hình xếp hạng rủi ro/ưu tiên được áp dụng sau khi các mối đe dọa đã được xác định và mô hình mối đe dọa OWASP (C) không phải là cách tiếp cận Khung áp dụng đám mây/Microsoft. Vì vậy, bạn bắt đầu quá trình với STRIDE.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 185",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/185-design-solutions-that-align-with-security-best-practices-and",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-186",
    "questionNumber": 186,
    "text": "Your company has an on-premises network, an Azure subscription, and a Microsoft 365 E5 subscription.  \n  \nThe company uses the following devices:  \n  \n- Computers running either Windows 10 or Windows 11  \n- Tablets and phones running either Android or iOS  \n  \nYou need to recommend a solution that classifies and encrypts sensitive Microsoft Office 365 data, regardless of where the data is stored.  \n  \nWhat should be included in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "eDiscovery"
      },
      {
        "key": "B",
        "text": "Microsoft Information Protection"
      },
      {
        "key": "C",
        "text": "Compliance Manager"
      },
      {
        "key": "D",
        "text": "retention policies"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Bảo vệ Thông tin của Microsoft, hiện được phân phối thông qua Bảo vệ Thông tin Microsoft Purview, sử dụng nhãn nhạy cảm để phân loại nội dung nhạy cảm của Microsoft 365 và áp dụng mã hóa với các hạn chế truy cập. Việc bảo vệ vẫn được duy trì với nội dung bất kể vị trí lưu trữ hoặc đường truyền của nó.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 186",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/186-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-187",
    "questionNumber": 187,
    "text": "You have an Azure subscription and an Azure DevOps organization.  \n  \nYou need to recommend a solution that connects Azure DevOps pipelines to resources in the subscription by using Azure Resource Manager (ARM) service connections. The solution must follow Microsoft Cloud Adoption Framework for Azure best practices, including the principle of least privilege.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "service principals and secrets"
      },
      {
        "key": "B",
        "text": "workload identity federation and service principals"
      },
      {
        "key": "C",
        "text": "workload identity federation and user-assigned managed identities"
      },
      {
        "key": "D",
        "text": "workload identity federation and system-assigned managed identities"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Hướng dẫn Khung áp dụng đám mây của Microsoft khuyến nghị liên kết nhận dạng khối lượng công việc OpenID Connect cho các kết nối dịch vụ Azure DevOps và đưa ra lời khuyên về các bí mật hoặc chứng chỉ của máy khách. Nó hỗ trợ danh tính được quản lý do người dùng chỉ định, có thể được tạo riêng cho từng ứng dụng và môi trường, đồng thời chỉ cấp các vai trò và phạm vi Azure bắt buộc, cho phép truy cập với ít đặc quyền nhất.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 187",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/187-design-solutions-that-align-with-security-best-practices-and",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-188",
    "questionNumber": 188,
    "text": "Your company has a Microsoft 365 ES subscription.  \n  \nThe Chief Compliance Officer intends to improve privacy management in the work environment. You need to recommend a solution that improves privacy management and meets these requirements:  \n  \n- Identify unused personal data and enable users to make smart data-handling decisions.  \n- Give users notifications and guidance when a user sends personal data in Microsoft Teams.  \n- Give users recommendations to reduce privacy risks.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "communication compliance in insider risk management"
      },
      {
        "key": "B",
        "text": "Microsoft Viva Insights"
      },
      {
        "key": "C",
        "text": "Privacy Risk Management in Microsoft Priva"
      },
      {
        "key": "D",
        "text": "Advanced eDiscovery"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Quản lý rủi ro về quyền riêng tư của Microsoft Priva bao gồm các chính sách giảm thiểu dữ liệu để xác định dữ liệu cá nhân được lưu giữ trong nội dung không được sử dụng, các chính sách truyền dữ liệu có thể cung cấp mẹo cho Nhóm khi dữ liệu cá nhân được gửi và các đề xuất khắc phục để giảm thiểu rủi ro về quyền riêng tư.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 188",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/188-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-189",
    "questionNumber": 189,
    "text": "Your company wants to optimize its use of Azure to protect resources from ransomware.  \n  \nRecommend the Azure Backup and Azure Storage capabilities that provide the strongest protection against ransomware attacks. The solution must follow Microsoft Security Best Practices.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Azure Backup có thể yêu cầu mã PIN bảo mật cho các hoạt động quan trọng, thêm tính năng bảo vệ xác thực chống lại các thay đổi độc hại hoặc xóa dữ liệu khôi phục. Bộ lưu trữ bất biến của Azure Blob áp dụng lưu giữ WORM hoặc lưu giữ pháp lý, do đó, dữ liệu blob được bảo vệ không thể sửa đổi hoặc xóa trong thời gian được bảo vệ.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 189",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/189-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-190",
    "questionNumber": 190,
    "text": "You have an Azure subscription with Microsoft Defender for Cloud enabled.  \n  \nYou need to enforce ISO 27001:2013 standards for the subscription. The solution must automatically remediate noncompliant resources.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Policy"
      },
      {
        "key": "B",
        "text": "Azure Blueprints"
      },
      {
        "key": "C",
        "text": "the regulatory compliance dashboard in Defender for Cloud"
      },
      {
        "key": "D",
        "text": "Azure role-based access control (Azure RBAC)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Chính sách Azure thực thi các tiêu chuẩn quy định thông qua các sáng kiến ​​chính sách và hỗ trợ khắc phục các tài nguyên không tuân thủ khi các chính sách được giao sử dụng hiệu ứng `deployIfNotExists` hoặc `modify` với managed identity và nhiệm vụ khắc phục. Bảng thông tin tuân thủ quy định cung cấp khả năng hiển thị về việc tuân thủ nhưng bản thân nó không khắc phục được các tài nguyên.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 190",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/190-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-191",
    "questionNumber": 191,
    "text": "You have an Azure subscription that serves as an Azure landing zone for an application.  \n  \nYou need to assess the security posture of every workload in the landing zone.  \n  \nWhat should you do first?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Configure Continuous Integration/Continuous Deployment (CI/CD) vulnerability scanning."
      },
      {
        "key": "B",
        "text": "Obtain Azure AD Premium Plan 2 licenses."
      },
      {
        "key": "C",
        "text": "Add Microsoft Sentinel data connectors."
      },
      {
        "key": "D",
        "text": "Enable the Defender plan for all resource types in Microsoft Defender for Cloud."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Microsoft Defender for Cloud cung cấp khả năng quản lý trạng thái bảo mật đám mây cho các tài nguyên Azure và các kế hoạch bảo vệ dành riêng cho khối lượng công việc. Việc kích hoạt các gói Defender cho tất cả các loại tài nguyên hiện hành sẽ thiết lập phạm vi phủ sóng trên toàn vùng đích để khối lượng công việc của nó có thể được đánh giá và các đề xuất bảo mật của chúng được xem xét.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 191",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/191-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-192",
    "questionNumber": 192,
    "text": "You have a hybrid cloud infrastructure.  \n  \nYou plan to deploy the Azure applications shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783826152202-gd9090nw.png)  \n  \nWhat should you use to meet each app’s requirement?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Chính sách WAF của Azure Application Gateway bảo vệ các ứng dụng web khỏi các cách khai thác phổ biến, bao gồm cả tập lệnh chéo trang (XSS). Azure AD B2C hỗ trợ LinkedIn với tư cách là nhà cung cấp danh tính xã hội và Truy cập có điều kiện có thể được tích hợp vào các chính sách tùy chỉnh B2C.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783826152202-gd9090nw.png",
    "sourceTitle": "Examcademy SC-100 Question 192",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/192-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-193",
    "questionNumber": 193,
    "text": "You have an Azure subscription linked to a Microsoft Entra tenant.  \n  \nYou plan to deploy an enterprise application named App1. App1 requires LDAP to look up attributes associated with Microsoft Entra users.  \n  \nYou need to recommend a solution that supports the LDAP requirement.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Configure a Conditional Access policy that has a trusted network location."
      },
      {
        "key": "B",
        "text": "Deploy Microsoft Entra Private Access."
      },
      {
        "key": "C",
        "text": "Deploy Microsoft Entra Domain Services."
      },
      {
        "key": "D",
        "text": "Implement pass-through authentication."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Dịch vụ miền Microsoft Entra cung cấp miền được quản lý được tích hợp với Microsoft Entra ID, đồng thời hỗ trợ LDAP và LDAP bảo mật (LDAP), bao gồm quyền truy cập liên kết và đọc LDAP cho các ứng dụng yêu cầu tra cứu thư mục thuộc tính người dùng.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 193",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/193-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-194",
    "questionNumber": 194,
    "text": "You have a Microsoft 365 tenant.  \n  \nYour company uses a third-party software as a service (SaaS) application named App1 that is integrated with an Azure AD tenant.  \n  \nYou need to design a security strategy that meets these requirements:  \n  \n- Users must be able to request access to App1 through a self-service request.  \n- When users request access to App1, they must be prompted to supply additional information about the request.  \n- Every three months, managers must confirm that users still need access to App1.  \n  \nWhat should you include in the design?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Entra Identity Governance"
      },
      {
        "key": "B",
        "text": "connected apps in Microsoft Defender for Cloud Apps"
      },
      {
        "key": "C",
        "text": "access policies in Microsoft Defender for Cloud Apps"
      },
      {
        "key": "D",
        "text": "Azure AD Application Proxy"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Quản trị danh tính Microsoft Entra cung cấp các gói quyền truy cập quản lý quyền cho các yêu cầu truy cập ứng dụng tự phục vụ và các câu hỏi yêu cầu tùy chỉnh. Nó cũng cung cấp các đánh giá quyền truy cập có thể được lên lịch hàng quý và được giao cho người quản lý của từng người dùng, cho phép người quản lý chứng thực các yêu cầu truy cập liên tục.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 194",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/194-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-195",
    "questionNumber": 195,
    "text": "You have a Microsoft 365 subscription that includes 1,000 users and a group named Group1. All users have Windows 11 devices. The users sign in to their devices using their Microsoft Entra accounts. The users do **not** have administrative rights on their devices.  \n  \nMembers of Group1 remotely assist users by taking control of user sessions. The remote-control sessions run in the security context of the users they assist.  \n  \nYou need to recommend a solution that enables Group1 members to run apps that require administrative rights on users' devices. The solution must ensure that the apps run in the context of each signed-in standard user.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Windows Local Administrator Password Solution (Windows LAPS)"
      },
      {
        "key": "B",
        "text": "Microsoft Entra Permissions Management"
      },
      {
        "key": "C",
        "text": "Microsoft Intune Endpoint Privilege Management"
      },
      {
        "key": "D",
        "text": "Privileged Identity Management (PIM) in Microsoft Entra ID"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Quản lý đặc quyền điểm cuối Microsoft Intune cho phép người dùng tiêu chuẩn chạy các ứng dụng đã được phê duyệt yêu cầu đặc quyền nâng cao mà không cần cấp quyền quản trị viên cục bộ vĩnh viễn. Loại độ cao **Elevate as current user** của nó chạy quy trình nâng cao trong tài khoản của người dùng đã đăng nhập, duy trì bối cảnh người dùng cần thiết cho phiên hỗ trợ từ xa.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 195",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/195-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-196",
    "questionNumber": 196,
    "text": "You need to recommend an identity-security solution for Litware’s Azure AD tenant that meets the identity and regulatory-compliance requirements. What should you recommend?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Các đơn vị quản trị cho phép xác định phạm vi vai trò Microsoft Entra ID để quản lý được ủy quyền cho những người dùng và nhóm được chọn. Tính năng phát hiện thông tin xác thực bị rò rỉ của Microsoft Entra ID Protection yêu cầu đồng bộ hóa hàm băm mật khẩu; nó có thể được kích hoạt cùng với xác thực chuyển tiếp.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 196",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/196-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-197",
    "questionNumber": 197,
    "text": "You have a Microsoft 365 tenant. Your company uses a third-party software-as-a-service (SaaS) app named App1. App1 supports user authentication by using Azure AD credentials.  \n  \nYou need to recommend a solution that enables users to authenticate to App1 by using their Azure AD credentials.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure AD Application Proxy"
      },
      {
        "key": "B",
        "text": "Azure AD B2C"
      },
      {
        "key": "C",
        "text": "an Azure AD enterprise application"
      },
      {
        "key": "D",
        "text": "a relying party trust in Active Directory Federation Services (AD FS)"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Ứng dụng doanh nghiệp Azure AD là đại diện phía đối tượng thuê dùng để tích hợp và quản lý ứng dụng SaaS của bên thứ ba, bao gồm cả việc đặt cấu hình đăng nhập một lần bằng thông tin xác thực Azure AD. Proxy ứng dụng Azure AD xuất bản các ứng dụng tại chỗ, Azure AD B2C dành cho danh tính khách hàng và không cần sự tin cậy của bên tin cậy AD FS đối với ứng dụng hỗ trợ trực tiếp xác thực Azure AD.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 197",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/197-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-198",
    "questionNumber": 198,
    "text": "You have a Microsoft 365 E5 subscription and an Azure subscription.  \n  \nYou are designing a Microsoft deployment.  \n  \nYou need to recommend a solution for the security operations team. The solution must provide custom views and a dashboard for analyzing security events.  \n  \nWhat should you recommend using in Microsoft Sentinel?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "notebooks"
      },
      {
        "key": "B",
        "text": "playbooks"
      },
      {
        "key": "C",
        "text": "workbooks"
      },
      {
        "key": "D",
        "text": "threat intelligence"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Sổ làm việc Microsoft Sentinel cung cấp các báo cáo trực quan tương tác có thể tùy chỉnh, bao gồm các bảng và biểu đồ, để trực quan hóa và giám sát dữ liệu bảo mật. Chúng có thể được tạo từ các truy vấn tùy chỉnh và được sử dụng làm bảng thông tin để phân tích các sự kiện bảo mật.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 198",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/198-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-199",
    "questionNumber": 199,
    "text": "You have a Microsoft 365 subscription.  \n  \nYou are designing a user-access solution that follows the Zero Trust principles in the Microsoft Cybersecurity Reference Architectures (MCRA).  \n  \nYou need to recommend a solution that automatically restricts access to Microsoft Exchange Online, SharePoint Online, and Teams in near-real-time (NRT) when the following Azure AD events occur:  \n  \n- A user account is disabled or deleted.  \n- A user's password is changed or reset.  \n- All refresh tokens for a user are revoked.  \n- Multi-factor authentication (MFA) is enabled for a user.  \n  \nWhich two features should be included in the recommendation? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "continuous access evaluation"
      },
      {
        "key": "B",
        "text": "Azure AD Application Proxy"
      },
      {
        "key": "C",
        "text": "a sign-in risk policy"
      },
      {
        "key": "D",
        "text": "Azure AD Privileged Identity Management (PIM)"
      },
      {
        "key": "E",
        "text": "Conditional Access"
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "Đánh giá quyền truy cập liên tục cho phép Exchange Online, SharePoint Online và Teams nhận và thực thi các tín hiệu sự kiện quan trọng của Microsoft Entra trong thời gian gần như thực, bao gồm việc xóa hoặc vô hiệu hóa người dùng, thay đổi hoặc đặt lại mật khẩu, hỗ trợ MFA và thu hồi rõ ràng tất cả các mã thông báo làm mới. Truy cập có điều kiện cung cấp các chính sách kiểm soát truy cập mà các dịch vụ đó có thể đánh giá và thực thi như một phần của giải pháp truy cập Zero Trust.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 199",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/199-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-200",
    "questionNumber": 200,
    "text": "$36",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Microsoft Entra ID Đánh giá Access cho phép chủ sở hữu nhóm dự án đánh giá tư cách thành viên và có thể tự động xóa những người dùng bị từ chối hoặc không phản hồi khi quá trình đánh giá kết thúc. Nhóm bảo mật được tạo trong Azure AD/Microsoft Entra ID được quản lý trên nền tảng đám mây cho SharePoint Online và có thể được ghi lại vào AD DS cho thư mục dùng chung của Windows Server. Điều này cho phép một nhóm được quản lý phục vụ cả hai tài nguyên và cho phép biện pháp khắc phục xem xét quyền truy cập kiểm soát tư cách thành viên của nhóm đó.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 200",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/200-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-201",
    "questionNumber": 201,
    "text": "You have a Microsoft 365 E5 subscription that uses Microsoft Defender XDR and Microsoft Purview.  \n  \nYou need to recommend a data-protection solution that lets you identify users who download atypical amounts of data from Microsoft SharePoint Online.  \n  \nWhich service should be included in the recommendation, and which policy should be configured?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Chính sách phát hiện bất thường của Ứng dụng Microsoft Defender for Cloud sử dụng các đường cơ sở hành vi đã học để phát hiện nhiều hoạt động tải xuống tệp bất thường của người dùng. Điều này xác định hành vi tải xuống SharePoint Online không điển hình, trong khi các chính sách DLP và tệp tập trung vào việc bảo vệ hoặc đánh giá nội dung thay vì phát hiện hoạt động bất thường của người dùng.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 201",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/201-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-202",
    "questionNumber": 202,
    "text": "You have a Microsoft 365 subscription synchronized with Active Directory Domain Services (AD DS).  \n  \nYou must define recovery steps for a ransomware attack that encrypted data in the subscription. The solution must comply with Microsoft Security Best Practices.  \n  \nWhat should be the first step in the recovery plan?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From Microsoft Defender for Endpoint, perform a security scan."
      },
      {
        "key": "B",
        "text": "Recover files to a cleaned computer or device."
      },
      {
        "key": "C",
        "text": "Contact law enforcement."
      },
      {
        "key": "D",
        "text": "Disable Microsoft OneDrive sync and Exchange ActiveSync."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Phản ứng của ransomware bắt đầu bằng việc ngăn chặn. Việc tắt đồng bộ hóa OneDrive sẽ ngăn các thiết bị có khả năng bị lây nhiễm cập nhật dữ liệu đám mây và việc tắt Exchange ActiveSync sẽ dừng đồng bộ hóa thiết bị di động. Sách hướng dẫn về ransomware của Microsoft liệt kê hành động này vào mục ngăn chặn cuộc tấn công lan rộng, trước khi loại bỏ phần mềm độc hại, quét bảo mật và khôi phục tệp.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 202",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/202-design-solutions-that-align-with-security-best-practices-and",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-203",
    "questionNumber": 203,
    "text": "Your company plans to follow Microsoft Cloud Adoption Framework for Azure DevSecOps best practices to integrate DevSecOps processes into continuous integration and continuous deployment (CI/CD) DevOps pipelines.  \n  \nYou need to recommend the DevOps pipeline stage in which to integrate each security-related task.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Quét cơ sở hạ tầng xác thực cấu hình cơ sở hạ tầng dưới dạng mã và triển khai trong giai đoạn xây dựng và thử nghiệm trước khi phát hành. SAST phân tích mã nguồn khi nó được cam kết, do đó nó thuộc giai đoạn cam kết mã.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 203",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/203-design-solutions-that-align-with-security-best-practices-and",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-204",
    "questionNumber": 204,
    "text": "You have an Azure subscription containing several storage accounts. Legacy applications access the storage accounts by authenticating with access keys.  \n  \nYou need to recommend a solution that prevents new applications from obtaining the storage-account access keys. The solution must minimize the effect on the legacy applications.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Set the AllowSharedKeyAccess property to false."
      },
      {
        "key": "B",
        "text": "Apply read-only locks on the storage accounts."
      },
      {
        "key": "C",
        "text": "Set the AllowBlobPublicAccess property to false."
      },
      {
        "key": "D",
        "text": "Configure automated key rotation."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Khóa ReadOnly của Trình quản lý tài nguyên Azure sẽ chặn hoạt động Khóa danh sách của tài khoản lưu trữ, trả về các khóa truy cập tài khoản. Các ứng dụng đã sở hữu khóa truy cập có thể tiếp tục sử dụng chúng để truy cập dữ liệu, giảm thiểu tác động đến các ứng dụng được xác thực bằng khóa cũ. [Lock resources to protect your infrastructure](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources)",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 204",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/204-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-205",
    "questionNumber": 205,
    "text": "You are defining security standards for containerized applications being onboarded to Azure.  \n  \nYou are assessing the use of Microsoft Defender for Containers.  \n  \nIn which two environments can Defender for Containers scan for known vulnerabilities? Each correct answer provides a complete solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Linux containers deployed to Azure Container Instances"
      },
      {
        "key": "B",
        "text": "Windows containers deployed to Azure Kubernetes Service (AKS)"
      },
      {
        "key": "C",
        "text": "Windows containers deployed to Azure Container Registry"
      },
      {
        "key": "D",
        "text": "Linux containers deployed to Azure Container Registry"
      },
      {
        "key": "E",
        "text": "Linux containers deployed to Azure Kubernetes Service (AKS)"
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Bộ bảo vệ cho Bộ chứa thực hiện đánh giá lỗ hổng đăng ký vùng chứa cho hình ảnh trong Azure Container Register (ACR) và các hệ điều hành được hỗ trợ bao gồm các bản phân phối Linux và hình ảnh vùng chứa Windows Server. Do đó, cả hình ảnh vùng chứa Linux và Windows được lưu trữ trong ACR đều có thể được quét để tìm các lỗ hổng đã biết.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 205",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/205-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-206",
    "questionNumber": 206,
    "text": "Solution: You recommend access restrictions that allow traffic from the backend IP address of the Front Door instance.  \n  \nDoes this achieve the goal?",
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
    "explanation": "Lưu lượng truy cập gốc Azure Front Door sử dụng một tập hợp các dải IP thay đổi được biểu thị bằng thẻ dịch vụ `AzureFrontDoor.Backend`, thay vì một địa chỉ IP phụ trợ. Việc hạn chế Dịch vụ ứng dụng đối với một phiên bản Cửa trước cụ thể cũng yêu cầu lọc tiêu đề `X-Azure-FDID` cho mã định danh của phiên bản đó.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 206",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/206-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-207",
    "questionNumber": 207,
    "text": "Solution: You recommend access restrictions that permit traffic from the Front Door service tags.  \n  \nDoes this satisfy the goal?",
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
    "explanation": "Thẻ dịch vụ `AzureFrontDoor.Backend` cho phép lưu lượng truy cập từ dải IP phụ trợ được sử dụng bởi tất cả các phiên bản Azure Front Door, không chỉ một phiên bản cụ thể. Việc hạn chế nguồn gốc Dịch vụ ứng dụng đối với một phiên bản Azure Front Door cụ thể cũng yêu cầu lọc tiêu đề `X-Azure-FDID` duy nhất mà Cửa trước gửi.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 207",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/207-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-208",
    "questionNumber": 208,
    "text": "Solution: You recommend access restrictions that are based on HTTP headers containing the Front Door ID.  \n  \nDoes this satisfy the goal?",
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
    "explanation": "Hạn chế truy cập Dịch vụ ứng dụng chỉ dựa trên tiêu đề `X-Azure-FDID` có thể được bỏ qua bằng một yêu cầu trực tiếp cung cấp cùng một tiêu đề. Việc hạn chế quyền truy cập vào một phiên bản Azure Front Door cụ thể yêu cầu cả quy tắc cho phép đối với thẻ dịch vụ `AzureFrontDoor.Backend` và hạn chế tiêu đề `X-Azure-FDID`.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 208",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/208-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-209",
    "questionNumber": 209,
    "text": "Solution: Recommend access restrictions that permit traffic from the Front Door service tags.  \n  \nDoes this satisfy the goal?",
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
    "explanation": "Các hạn chế truy cập Azure App Service có thể sử dụng thẻ dịch vụ `AzureFrontDoor.Backend` để cho phép lưu lượng truy cập bắt nguồn từ Azure Front Door và chặn lưu lượng truy cập công cộng gửi đến khác. Filtering additionally on `X-Azure-FDID` is required only when access must be limited to a specific Front Door instance.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 209",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/209-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-210",
    "questionNumber": 210,
    "text": "Solution: You recommend configuring gateway-required virtual network integration.  \n  \nDoes this satisfy the goal?",
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
    "explanation": "Tích hợp mạng ảo cần có cổng cung cấp kết nối ra bên ngoài từ ứng dụng Azure App Service tới các tài nguyên trong mạng ảo. Nó không cung cấp quyền truy cập vào riêng tư hoặc hạn chế điểm cuối công khai của ứng dụng đối với lưu lượng truy cập Azure Front Door, do đó, nó không thể đảm bảo rằng các ứng dụng web chỉ có thể truy cập được thông qua phiên bản Cửa trước.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 210",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/210-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-211",
    "questionNumber": 211,
    "text": "Solution: You recommend access restrictions that are based on HTTP headers containing the Front Door ID.  \n  \nDoes this meet the goal?",
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
    "explanation": "Bộ lọc tiêu đề HTTP của Dịch vụ ứng dụng chỉ được đánh giá bên cạnh điều kiện nguồn của quy tắc hạn chế quyền truy cập. Để đảm bảo rằng chỉ có thể truy cập ứng dụng thông qua một phiên bản Azure Front Door cụ thể, hãy cho phép thẻ dịch vụ `AzureFrontDoor.Backend` và yêu cầu tiêu đề `X-Azure-FDID` phù hợp; hạn chế chỉ có tiêu đề không ngăn chặn các yêu cầu giả mạo trực tiếp.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 211",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/211-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-212",
    "questionNumber": 212,
    "text": "Your company has a Microsoft 365 E5 subscription.  \n  \nThe company wants to identify and classify data in Microsoft Teams, SharePoint Online, and Exchange Online.  \n  \nYou need to recommend a solution for identifying documents that contain sensitive information.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "content explorer"
      },
      {
        "key": "B",
        "text": "data loss prevention (DLP)"
      },
      {
        "key": "C",
        "text": "eDiscovery"
      },
      {
        "key": "D",
        "text": "data lifecycle management"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Microsoft Purview Content Explorer hiển thị ảnh chụp nhanh hiện tại của các mục được phân loại theo loại thông tin nhạy cảm, nhãn nhạy cảm hoặc nhãn lưu giữ. Nó có thể được sử dụng để đi sâu vào các vị trí Exchange, Teams và SharePoint để xác định nội dung đã được phân loại. [Get started with Content Explorer](https://learn.microsoft.com/en-my/purview/data-classification-content-explorer)",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 212",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/212-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-213",
    "questionNumber": 213,
    "text": "You have a Microsoft 365 subscription and an Azure subscription. Microsoft 365 Defender and Microsoft Defender for Cloud are enabled.  \n  \nThe Azure subscription includes 50 virtual machines. Every virtual machine runs different applications on Windows Server 2019.  \n  \nYou need to recommend a solution that ensures only authorized applications can run on the virtual machines. If an unauthorized application tries to run or be installed, it must be blocked automatically until an administrator authorizes it.  \n  \nWhich security control should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "app discovery anomaly detection policies in Microsoft Defender for Cloud Apps"
      },
      {
        "key": "B",
        "text": "Azure Security Benchmark compliance controls in Defender for Cloud"
      },
      {
        "key": "C",
        "text": "app registrations in Azure AD"
      },
      {
        "key": "D",
        "text": "application control policies in Microsoft Defender for Endpoint"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Chính sách kiểm soát ứng dụng thực thi danh sách cho phép mã đáng tin cậy trên Windows Server 2019, ngăn các ứng dụng và trình cài đặt không được phê duyệt thực thi cho đến khi chúng đáp ứng quy tắc được ủy quyền. Microsoft ghi lại Kiểm soát ứng dụng dành cho doanh nghiệp (WDAC) là hạn chế những ứng dụng và mã nào có thể chạy, bao gồm cả hỗ trợ cho Windows Server 2019.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 213",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/213-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-214",
    "questionNumber": 214,
    "text": "You need to recommend a solution for evaluating regulatory compliance throughout the managed environment. The solution must satisfy the regulatory-compliance and business requirements.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Sáng kiến ​​Chính sách Azure nhóm các định nghĩa chính sách cho mục tiêu tuân thủ và có thể được chỉ định cho một nhóm quản lý để áp dụng sáng kiến ​​trên toàn bộ hệ thống phân cấp nhóm quản lý và các đăng ký của nhóm đó. Azure Arc cho phép đánh giá tuân thủ Chính sách Azure đối với các tài nguyên tại chỗ được kết nối.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 214",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/214-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-215",
    "questionNumber": 215,
    "text": "Your company has an Azure subscription with enhanced security enabled in Microsoft Defender for Cloud.  \n  \nThe company signs a contract with the United States government.  \n  \nYou need to review the current subscription for compliance with NIST 800-53.  \n  \nWhat should you do first?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From Defender for Cloud, review the secure score recommendations."
      },
      {
        "key": "B",
        "text": "From Microsoft Sentinel, configure the Microsoft Defender for Cloud data connector."
      },
      {
        "key": "C",
        "text": "From Defender for Cloud, review the Azure security baseline for audit report."
      },
      {
        "key": "D",
        "text": "From Defender for Cloud, add a regulatory compliance standard."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Microsoft Defender for Cloud chỉ đánh giá đăng ký theo khung quy định sau khi khung đó được chỉ định làm tiêu chuẩn tuân thủ quy định. NIST SP 800-53 có sẵn dưới dạng tiêu chuẩn nhưng không được bật theo mặc định cho đăng ký Azure; cho phép nó cho phép bảng điều khiển tuân thủ quy định đánh giá các tài nguyên trong phạm vi và báo cáo trạng thái tuân thủ cũng như các đề xuất khắc phục.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 215",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/215-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-216",
    "questionNumber": 216,
    "text": "You have an Azure subscription that contains 100 virtual machines running Windows Server. The virtual machines are managed by using Azure Policy and Microsoft Defender for Servers.  \n  \nYou need to improve security on the virtual machines. The solution must meet these requirements:  \n  \n- Ensure that only applications on an allowlist can run.  \n- Require administrators to confirm every app added to the allowlist.  \n- Automatically place unauthorized apps on a blocklist when an attempt is made to launch an app.  \n- Require administrator approval before an app can be moved from the blocklist to the allowlist.  \n  \nWhat should you include in the solution?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a compute policy in Azure Policy"
      },
      {
        "key": "B",
        "text": "app governance in Microsoft Defender for Cloud Apps"
      },
      {
        "key": "C",
        "text": "admin consent settings for enterprise applications in Microsoft Entra ID"
      },
      {
        "key": "D",
        "text": "adaptive application controls in Defender for Servers"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Các biện pháp kiểm soát ứng dụng thích ứng trong Bộ bảo vệ dành cho Máy chủ cung cấp khả năng kiểm soát ứng dụng VM bằng cách tìm hiểu các ứng dụng đã biết là an toàn, tạo quy tắc danh sách cho phép và phát hiện các ứng dụng nằm ngoài các quy tắc đó để xem xét và thực thi quản trị. Điều này trực tiếp giải quyết việc đưa ứng dụng thực thi vào danh sách cho phép và xử lý có kiểm soát các ứng dụng không được phê duyệt trên máy ảo Windows Server. Microsoft hiện liệt kê các điều khiển ứng dụng Thích ứng là không được dùng nữa nhưng đó là khả năng được mô tả trong mục kiểm tra này.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 216",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/216-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-217",
    "questionNumber": 217,
    "text": "You have a Microsoft 365 subscription.  \n  \nYou also have an Azure subscription.  \n  \nYou need to deploy a Microsoft Purview communication compliance solution for Microsoft Teams and Yammer. The solution must meet these requirements:  \n  \n- Assign compliance policies to Microsoft 365 groups based on custom Microsoft Exchange Online attributes.  \n- Minimize the number of compliance policies.  \n- Minimize administrative effort.  \n  \nWhat should the solution include?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "adaptive scopes"
      },
      {
        "key": "B",
        "text": "Microsoft 365 Defender user tags"
      },
      {
        "key": "C",
        "text": "administrative units"
      },
      {
        "key": "D",
        "text": "Microsoft Purview sensitivity labels"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Phạm vi thích ứng sử dụng truy vấn động để xác định các nhóm Microsoft 365 được nhắm mục tiêu theo chính sách tuân thủ. Chúng hỗ trợ các thuộc tính tùy chỉnh của Exchange và có thể được sử dụng cùng với các chính sách Tuân thủ Truyền thông; một chính sách có thể bao gồm một hoặc nhiều phạm vi thích ứng, giúp giảm số lượng chính sách và quản trị thủ công liên tục.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 217",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/217-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-218",
    "questionNumber": 218,
    "text": "A customer uses Azure to develop a mobile app that external users will consume, as shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783809593706-xxek3fwy.jpg)  \n  \nYou need to design an identity strategy for the app. The solution must meet these requirements:  \n  \n- Enable the use of external IDs such as Google, Facebook, and Microsoft accounts.  \n- Use a customer identity store.  \n- Support fully customizable branding for the app.  \n  \nWhich service should you recommend to complete the design?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Active Directory (Azure AD) B2B"
      },
      {
        "key": "B",
        "text": "Azure Active Directory Domain Services (Azure AD DS)"
      },
      {
        "key": "C",
        "text": "Azure Active Directory (Azure AD) B2C"
      },
      {
        "key": "D",
        "text": "Azure AD Connect"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Azure Active Directory (Azure AD) B2C hỗ trợ danh tính khách hàng được lưu trữ trong đối tượng thuê và liên kết B2C với các nhà cung cấp danh tính xã hội bao gồm tài khoản Google, Facebook và Microsoft. Luồng người dùng và chính sách tùy chỉnh của nó cung cấp trải nghiệm đăng nhập có thể tùy chỉnh và các trải nghiệm nhận dạng khác để phù hợp với thương hiệu của ứng dụng.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783809593706-xxek3fwy.jpg",
    "sourceTitle": "Examcademy SC-100 Question 218",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/218-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-219",
    "questionNumber": 219,
    "text": "Solution: In the Microsoft Defender portal, you turn on Web content filtering and create a web content filtering policy.  \n  \nDoes this meet the goal?",
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
    "explanation": "Lọc nội dung web kiểm soát quyền truy cập vào trang web theo danh mục nội dung chứ không phải theo điểm rủi ro của Ứng dụng Microsoft Defender for Cloud đối với các ứng dụng SaaS. Điểm rủi ro của ứng dụng đám mây và các chính sách xác định và quản lý các ứng dụng có rủi ro cao là bắt buộc để cho phép các ứng dụng SaaS có rủi ro thấp đồng thời chặn các ứng dụng SaaS có rủi ro cao.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 219",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/219-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-220",
    "questionNumber": 220,
    "text": "Solution: Configure app protection policies in Intune and create a Conditional Access policy.  \n  \nDoes this satisfy the goal?",
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
    "explanation": "Chính sách bảo vệ ứng dụng Intune bảo vệ dữ liệu tổ chức trong các ứng dụng được quản lý được hỗ trợ và Truy cập có điều kiện có thể hạn chế quyền truy cập vào tài nguyên tổ chức thông qua các ứng dụng khách được phê duyệt hoặc được bảo vệ. Họ không cung cấp khả năng kiểm soát cho phép/chặn dựa trên điểm rủi ro đối với các ứng dụng SaaS được Microsoft phát hiện và xếp hạng. Microsoft Defender for Cloud Cần có khả năng phát hiện và quản trị Ứng dụng để xác định các ứng dụng SaaS rủi ro và chặn các ứng dụng không được phê duyệt.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 220",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/220-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-221",
    "questionNumber": 221,
    "text": "Solution: In Microsoft Defender for Cloud Apps, configure a cloud discovery policy and unsanction risky apps.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Chính sách Cloud Discovery có thể phát hiện các ứng dụng theo điểm rủi ro và gắn thẻ các ứng dụng có rủi ro cao là Không được phê duyệt. Với tích hợp Defender for Endpoint, các ứng dụng Không được phê duyệt sẽ được đồng bộ hóa để chặn, trong khi các ứng dụng có mức độ rủi ro thấp không được gắn thẻ vẫn khả dụng.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 221",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/221-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-222",
    "questionNumber": 222,
    "text": "Solution: In Microsoft Defender for Cloud Apps, you configure SaaS security posture management (SSPM) and create an access policy.  \n  \nDoes this satisfy the goal?",
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
    "explanation": "SSPM cung cấp khả năng hiển thị trạng thái bảo mật cho các ứng dụng SaaS được kết nối được hỗ trợ, trong khi các chính sách truy cập kiểm soát hoạt động đăng nhập vào các ứng dụng trong phạm vi Kiểm soát ứng dụng truy cập có điều kiện. Chúng không quản lý quyền truy cập chung của người dùng vào các ứng dụng SaaS được phát hiện theo xếp hạng rủi ro ứng dụng đám mây của Microsoft. Defender for Cloud Apps đánh giá các ứng dụng được phát hiện bằng cách sử dụng các chỉ báo rủi ro; các ứng dụng có rủi ro cao có thể được đánh dấu **Không được phê duyệt** và với sự tích hợp của Microsoft Defender for Endpoint, bị chặn thông qua bảo vệ mạng. [Cloud app catalog and risk scores](https://learn.microsoft.com/en-us/defender-cloud-apps/risk-score), [Govern discovered apps using Microsoft Defender for Endpoint](https://learn.microsoft.com/en-us/defender-cloud-apps/mde-govern)",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 222",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/222-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-223",
    "questionNumber": 223,
    "text": "You have a Microsoft Entra tenant named contoso.com that is connected to an Azure subscription named Sub1 and to a Microsoft 365 subscription. Sub1 includes a publicly accessible Azure App Service web app named App1.  \n  \nAn external partner has a Microsoft Entra tenant named fabrikam.com.  \n  \nRecommend a solution that meets these requirements:  \n  \n- Ensure that fabrikam.com users can receive permissions for specific Microsoft Teams channels in contoso.com.  \n- Ensure that App1 users can authenticate by using social media accounts.  \n- Minimize administrative effort.  \n  \nWhich authentication method should be recommended for each requirement?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Kết nối trực tiếp B2B hỗ trợ các kênh chia sẻ Microsoft Teams giữa các tổ chức Microsoft Entra. Người dùng bên ngoài giữ lại thông tin đăng nhập của người thuê nhà và có thể được thêm vào một kênh chia sẻ cụ thể mà không cần quản lý tài khoản khách. ID bên ngoài Microsoft Entra dành cho khách hàng dành cho các ứng dụng hướng tới khách hàng và hỗ trợ đăng nhập thông qua nhà cung cấp danh tính xã hội.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 223",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/223-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-224",
    "questionNumber": 224,
    "text": "You have a Microsoft 365 subscription and an Azure subscription. Microsoft 365 Defender and Microsoft Defender for Cloud are enabled.  \n  \nThe Azure subscription includes 50 virtual machines. Every virtual machine runs distinct applications on Windows Server 2019.  \n  \nYou need to recommend a solution that ensures only authorized applications can run on the virtual machines. If an unauthorized application tries to run or be installed, it must be automatically blocked until an administrator authorizes it.  \n  \nWhich security control should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "app registrations in Azure Active Directory (Azure AD)"
      },
      {
        "key": "B",
        "text": "OAuth app policies in Microsoft Defender for Cloud Apps"
      },
      {
        "key": "C",
        "text": "Azure Security Benchmark compliance controls in Defender for Cloud"
      },
      {
        "key": "D",
        "text": "application control policies in Microsoft Defender for Endpoint"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Các chính sách kiểm soát ứng dụng trong Bộ bảo vệ Microsoft dành cho Điểm cuối sử dụng khả năng kiểm soát ứng dụng của Windows để thực thi danh sách cho phép gồm các ứng dụng và mã đáng tin cậy trên Windows Server 2019. Các chính sách này có thể ngăn các tệp thực thi, tập lệnh và trình cài đặt trái phép chạy cho đến khi quản trị viên cập nhật chính sách để cấp phép cho chúng.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 224",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/224-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-225",
    "questionNumber": 225,
    "text": "HOTSPOT  \n  \nYou have an Azure subscription containing a Microsoft Sentinel workspace named WS1.  \n  \nYou must configure WS1 to meet these requirements:  \n  \n- Create custom dashboards that visualize the workload of security analysts who use Microsoft Sentinel.  \n- Enable automated responses for security alerts generated by Microsoft Sentinel analytics rules.  \n  \nWhat should you use for each requirement?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Sổ làm việc Microsoft Sentinel cung cấp bảng chỉ số và báo cáo trực quan có tính tương tác, có thể tùy chỉnh. Playbook Microsoft Sentinel là các quy trình làm việc của Ứng dụng Azure Logic được sử dụng để tự động hóa các hành động phản hồi đối với các cảnh báo hoặc sự cố.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 225",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/225-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-226",
    "questionNumber": 226,
    "text": "Your company has an Azure subscription with enhanced security enabled for Microsoft Defender for Cloud.  \n  \nThe company enters into a contract with the United States government.  \n  \nYou need to review the current subscription for compliance with NIST 800-53.  \n  \nWhat should you do first?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From Azure Policy, assign a built-in initiative that has a scope of the subscription."
      },
      {
        "key": "B",
        "text": "From Microsoft Sentinel, configure the Microsoft Defender for Cloud data connector."
      },
      {
        "key": "C",
        "text": "From Defender for Cloud, review the Azure security baseline for audit report."
      },
      {
        "key": "D",
        "text": "From Microsoft Defender for Cloud Apps, create an access policy for cloud applications."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Microsoft Defender for Cloud triển khai các tiêu chuẩn tuân thủ quy định thông qua các sáng kiến ​​Chính sách Azure và đánh giá chúng trong phạm vi được chỉ định. Việc chỉ định sáng kiến ​​NIST 800-53 tích hợp sẵn cho đăng ký sẽ cho phép thực hiện đánh giá tuân thủ cần thiết để xem xét đăng ký đó.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 226",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/226-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-227",
    "questionNumber": 227,
    "text": "You have an Azure subscription that contains an Azure Synapse Analytics workspace named workspace1. workspace1 has a built-in serverless SQL pool and a dedicated SQL pool named Pool1.  \n  \nYou need to recommend a second layer of data encryption for workspace1.  \n  \nWhat should the recommendation include for each pool?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Mã hóa dữ liệu trong suốt (TDE) cung cấp lớp mã hóa bổ sung cho các nhóm SQL chuyên dụng. Nhóm SQL không có máy chủ có bộ lưu trữ vĩnh viễn no của riêng chúng và dựa vào mã hóa phía máy chủ Azure Storage; Mã hóa cơ sở hạ tầng thêm lớp mã hóa thứ hai riêng biệt ở cấp cơ sở hạ tầng Lưu trữ Azure.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 227",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/227-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-228",
    "questionNumber": 228,
    "text": "You are defining security standards for a new Azure environment.  \n  \nYou need to create a privileged-identity strategy founded on the Zero Trust model.  \n  \nWhich framework should you use to develop the design?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Security Development Lifecycle (SDL)"
      },
      {
        "key": "B",
        "text": "Enhanced Security Admin Environment (ESAE)"
      },
      {
        "key": "C",
        "text": "Rapid Modernization Plan (RaMP)"
      },
      {
        "key": "D",
        "text": "Microsoft Operational Security Assurance (OSA)"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Chiến lược truy cập đặc quyền hiện đại của Microsoft được xây dựng dựa trên các nguyên tắc Zero Trust, bao gồm xác thực rõ ràng, đặc quyền tối thiểu và giả định vi phạm. Microsoft xác định hướng dẫn về Kế hoạch hiện đại hóa nhanh (RaMP) là phương pháp mặc định được đề xuất để bảo vệ người dùng có đặc quyền, thay thế cho phương pháp Môi trường quản trị bảo mật nâng cao (ESAE) cũ.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 228",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/228-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-229",
    "questionNumber": 229,
    "text": "You have an Azure subscription.  \n  \nYou need to use a federated model in Azure API Management to control access to your organization’s APIs. The solution must meet these requirements:  \n  \n- Support the use of role-based access control (RBAC) to manage the APIs.  \n- Support the use of keys to control API consumption.  \n  \nTo which scope should you associate each control method?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Không gian làm việc Quản lý API Azure hỗ trợ quản lý API liên kết, với vai trò Azure RBAC được chỉ định ở phạm vi không gian làm việc để kiểm soát quyền truy cập của cộng tác viên vào tài nguyên không gian làm việc. Đăng ký Quản lý API chứa khóa đăng ký mà người tiêu dùng cung cấp khi gọi API.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 229",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/229-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-230",
    "questionNumber": 230,
    "text": "You have the following on-premises servers running Windows Server:  \n  \n- Two domain controllers in an Active Directory Domain Services (AD DS) domain  \n- Two application servers named Server1 and Server2 that run ASP.NET web apps  \n- A VPN server named Served that authenticates by using RADIUS and AD DS  \n  \nEnd users use a VPN to access the web apps through the internet.  \n  \nYou need to redesign the user-access solution to increase the security of connections to the web apps. The solution must minimize the attack surface and follow the Zero Trust principles of the Microsoft Cybersecurity Reference Architectures (MCRA).  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Publish the web apps by using Azure AD Application Proxy."
      },
      {
        "key": "B",
        "text": "Configure the VPN to use Azure AD authentication."
      },
      {
        "key": "C",
        "text": "Configure connectors and rules in Microsoft Defender for Cloud Apps."
      },
      {
        "key": "D",
        "text": "Configure web protection in Microsoft Defender for Endpoint."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Proxy ứng dụng Azure AD xuất bản các ứng dụng web tại chỗ thông qua dịch vụ truy cập nhận dạng. Nó hỗ trợ xác thực trước Microsoft Entra và Truy cập có điều kiện, có thể áp dụng MFA và sử dụng các kết nối đầu nối gửi đi nên cần có kết nối tường lửa gửi đến no với ứng dụng nội bộ. Điều này giới hạn người dùng ở các ứng dụng đã xuất bản thay vì cấp quyền truy cập mạng cấp VPN, giảm bề mặt tấn công và hỗ trợ Zero Trust.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 230",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/230-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-231",
    "questionNumber": 231,
    "text": "You are planning the security requirements for Azure Cosmos DB Core (SQL) API accounts.  \n  \nYou need to recommend a solution that audits every user who accesses data in the Azure Cosmos DB accounts.  \n  \nWhich two configurations should you include in the recommendation? Each correct answer presents part of the solution.  \n  \n> **NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Send the Azure Active Directory (Azure AD) sign-in logs to a Log Analytics workspace."
      },
      {
        "key": "B",
        "text": "Enable Microsoft Defender for Identity."
      },
      {
        "key": "C",
        "text": "Send the Azure Cosmos DB logs to a Log Analytics workspace."
      },
      {
        "key": "D",
        "text": "Disable local authentication for Azure Cosmos DB."
      },
      {
        "key": "E",
        "text": "Enable Microsoft Defender for Cosmos DB."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Nhật ký chẩn đoán mặt phẳng dữ liệu Azure Cosmos DB được gửi tới không gian làm việc Log Analytics ghi lại mọi hoạt động dữ liệu và bao gồm ID chính Microsoft Entra của người gọi. Việc tắt xác thực cục bộ sẽ ngăn chặn quyền truy cập khóa chung và yêu cầu danh tính Microsoft Entra, cho phép quyền truy cập được phân bổ cho từng người dùng.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 231",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/231-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-232",
    "questionNumber": 232,
    "text": "You have an Azure subscription and a Microsoft 365 subscription.  \n  \nYour company uses several software-as-a-service (SaaS) applications.  \n  \nTo align with the Microsoft cloud security benchmark (MCSB) and Microsoft Cybersecurity Reference Architectures (MCRA), you plan to design a solution that provides visibility into user activity across the applications and detects potentially risky behavior in real time.  \n  \nWhich service should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Defender for Cloud Apps"
      },
      {
        "key": "B",
        "text": "Microsoft Purview Information Protection"
      },
      {
        "key": "C",
        "text": "Microsoft Sentinel"
      },
      {
        "key": "D",
        "text": "Microsoft Defender for Endpoint"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Ứng dụng Microsoft Defender for Cloud cung cấp khả năng hiển thị hoạt động của quản trị viên và người dùng ứng dụng đám mây, phát hiện hành vi bất thường hoặc rủi ro bằng cách sử dụng tính năng phát hiện mối đe dọa và phân tích hành vi, đồng thời hỗ trợ giám sát và kiểm soát thời gian thực thông qua các chính sách phiên.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 232",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/232-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-233",
    "questionNumber": 233,
    "text": "You have an Azure subscription containing a Microsoft Sentinel workspace named MSW1. MSW11 has 50 scheduled analytics rules.  \n  \nYou need to design a security orchestration automated response (SOAR) solution by using Microsoft Sentinel playbooks. The solution must meet these requirements:  \n  \n- Ensure that expiration dates can be configured when a playbook runs.  \n- Minimize the administrative effort needed to configure individual analytics rules.  \n  \nWhat should you use to invoke the playbooks, and which Microsoft Sentinel trigger type should you use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Quy tắc tự động hóa tập trung lệnh gọi playbook trên nhiều quy tắc phân tích và cho phép đặt ngày hết hạn trên quy tắc tự động hóa. Các quy tắc phân tích theo lịch trình tạo ra các cảnh báo có thể tạo ra sự cố, do đó, cẩm nang kích hoạt sự cố là loại cẩm nang thích hợp cho quy tắc tự động hóa dựa trên sự cố.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 233",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/233-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-234",
    "questionNumber": 234,
    "text": "What should you create in Azure AD to meet the Contoso developer requirements?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Đồng bộ hóa thư mục tạo ra danh tính kết hợp để người dùng có thể sử dụng một bộ thông tin xác thực hiện có cho tài nguyên đám mây. Đánh giá quyền truy cập Microsoft Entra quản lý tư cách thành viên nhóm và có thể lặp lại hàng tháng, đáp ứng yêu cầu xác minh hàng tháng bắt buộc của nhóm ContosoDevelopers.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 234",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/234-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-235",
    "questionNumber": 235,
    "text": "You have a Microsoft 365 E5 subscription.  \n  \nRecommend a security solution that satisfies these requirements:  \n  \n- Automatically detect and stop external brute-force attacks against accounts in the subscription.  \n- Automatically detect and stop external attacks that use an internal account to exfiltrate data from Microsoft SharePoint Online sites in the subscription.  \n  \nWhat should the recommendation include for each requirement?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Microsoft Entra ID Protection phát hiện các rủi ro danh tính, bao gồm các cuộc tấn công phun mật khẩu và hỗ trợ các phản hồi Truy cập có điều kiện dựa trên rủi ro tự động. Ứng dụng Microsoft Defender for Cloud phát hiện hoạt động bất thường trong các dịch vụ đám mây của Microsoft 365, bao gồm hành vi tải xuống tệp bất thường của SharePoint hoặc OneDrive và có thể áp dụng các biện pháp kiểm soát hoạt động để hạn chế việc trích xuất.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 235",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/235-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-236",
    "questionNumber": 236,
    "text": "For a Microsoft cloud environment, you are designing a security architecture that follows the Microsoft Cybersecurity Reference Architectures (MCRA).  \n  \nYou need protection against these external threats in an attack chain:  \n  \n- An attacker attempts to exfiltrate data to external websites.  \n- An attacker attempts lateral movement across domain-joined computers.  \n  \nWhat should be included in the recommendation for each threat?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Ứng dụng Microsoft Defender for Cloud cung cấp khả năng hiển thị và kiểm soát việc sử dụng ứng dụng đám mây, đồng thời có thể phát hiện hoặc ngăn chặn rò rỉ và đánh cắp dữ liệu nhạy cảm. Bộ bảo vệ danh tính Microsoft thu thập tín hiệu nhận dạng Active Directory và phát hiện các mối đe dọa như chuyển động ngang có nguy cơ cao. Bộ bảo vệ Microsoft dành cho Office 365 chủ yếu dành cho các mối đe dọa về email và cộng tác.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 236",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/236-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-237",
    "questionNumber": 237,
    "text": "You have an Azure subscription.  \n  \nYou have a DNS domain named `contoso.com` hosted by a third-party DNS registrar.  \n  \nDevelopers use Azure DevOps to deploy web apps to App Service Environments. Whenever a new app is deployed, a CNAME record for that app is registered in `contoso.com`.  \n  \nYou need to recommend a solution that secures the DNS record for every web app. The solution must meet these requirements:  \n  \n- Ensure that when an app is deleted, its CNAME record is also removed.  \n- Minimize administrative effort.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Defender for Cloud Apps"
      },
      {
        "key": "B",
        "text": "Microsoft Defender for DevOps"
      },
      {
        "key": "C",
        "text": "Microsoft Defender for App Service"
      },
      {
        "key": "D",
        "text": "Microsoft Defender for DNS"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Bộ bảo vệ Microsoft dành cho Dịch vụ Ứng dụng phát hiện các mục nhập DNS lơ lửng khi một trang web Dịch vụ Ứng dụng ngừng hoạt động nhưng mục nhập DNS miền tùy chỉnh của trang web đó vẫn còn ở cơ quan đăng ký. Biện pháp bảo vệ này áp dụng khi miền được quản lý bởi nhà đăng ký DNS bên ngoài và nó xác định tình trạng CNAME cần được khắc phục để ngăn chặn việc tiếp quản miền phụ. Việc xóa bản ghi DNS phải được thực hiện thông qua cơ quan đăng ký hoặc tự động hóa vòng đời triển khai.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 237",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/237-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-238",
    "questionNumber": 238,
    "text": "Your company uses Microsoft Defender for Cloud and Microsoft Sentinel.  \n  \nThe company is planning an application with the architecture shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783896794557-z8udkzym.png)  \n  \nYou are designing a logging and auditing solution for the proposed architecture. The solution must meet these requirements:  \n  \n- Integrate Azure Web Application Firewall (WAF) logs with Microsoft Sentinel.  \n- Use Defender for Cloud to review alerts from the virtual machines.  \n  \nWhat should be included in the solution?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Microsoft Sentinel sử dụng trình kết nối dữ liệu Tường lửa ứng dụng web Azure để tích hợp và phân tích nhật ký WAF. Defender for Servers là gói Microsoft Defender for Cloud giúp bảo vệ máy ảo và tạo cảnh báo bảo mật cho các khối lượng công việc đó.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783896794557-z8udkzym.png",
    "sourceTitle": "Examcademy SC-100 Question 238",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/238-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-239",
    "questionNumber": 239,
    "text": "Your network has an Active Directory Domain Services (AD DS) domain named Domain1.  \n  \nYou have a Microsoft Entra tenant.  \n  \nDomain1 is synchronized with the tenant by using Microsoft Entra Connect.  \n  \nYou need to monitor Domain1 for privilege-escalation attacks.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Entra ID Protection"
      },
      {
        "key": "B",
        "text": "Microsoft Defender for Servers"
      },
      {
        "key": "C",
        "text": "Microsoft Defender for Identity"
      },
      {
        "key": "D",
        "text": "Privileged Identity Management (PIM)"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Bộ bảo vệ danh tính Microsoft phát hiện, điều tra và ứng phó với các cuộc tấn công dựa trên danh tính trên các môi trường tại chỗ, đám mây và kết hợp. Nó giám sát các tín hiệu Active Directory và có thể phát hiện sự leo thang đặc quyền cũng như những thay đổi đáng ngờ về vai trò hoặc thành viên nhóm.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 239",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/239-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-240",
    "questionNumber": 240,
    "text": "Your company has an Azure subscription that uses Microsoft Defender for Cloud.  \n  \nThe company enters into a contract with the United States government.  \n  \nYou need to assess the current subscription for compliance with NIST 800-53.  \n  \nWhat should you do first?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From Defender for Cloud, review the Azure security baseline for audit report."
      },
      {
        "key": "B",
        "text": "From Microsoft Defender for Cloud Apps, create an access policy for cloud applications."
      },
      {
        "key": "C",
        "text": "From Defender for Cloud, enable Defender for Cloud plans."
      },
      {
        "key": "D",
        "text": "From Azure Policy, assign a built-in initiative that has a scope of the subscription."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Việc tuân thủ quy định NIST SP 800-53 được triển khai thông qua sáng kiến ​​tích hợp Chính sách Azure. Việc chỉ định sáng kiến ​​đó cho gói đăng ký sẽ thiết lập phạm vi mà Defender for Cloud đánh giá và báo cáo về mức độ tuân thủ.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 240",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/240-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-241",
    "questionNumber": 241,
    "text": "You have three Microsoft Entra tenants named Tenant1, Tenant2, and Tenant3.  \n  \nYou have three Azure subscriptions named Sub1, Sub2, and Sub3. Each tenant is associated with multiple Azure subscriptions.  \n  \nEach subscription has one Microsoft Sentinel workspace, as shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783886028916-oz9g6qs6.png)  \n  \nYou need to recommend a solution that meets these requirements:  \n  \n- Ensure that users in Tenant1 can manage resources in Sub2 and Sub3 without switching subscriptions or signing in to another tenant.  \n- Implement multiple-workspace view for Sentinel2 and Sentinel3.  \n  \nWhat should you use to delegate permissions, and which Microsoft Sentinel feature can users manage in multiple-workspace view?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Azure Lighthouse cho phép người thuê quản lý truy cập và quản lý tài nguyên Azure được ủy quyền trong những người thuê khác mà không cần thay đổi thư mục. Chế độ xem nhiều không gian làm việc Microsoft Sentinel cung cấp khả năng quản lý sự cố tập trung trên các không gian làm việc, bao gồm xem và xử lý các sự cố từ các không gian làm việc đã chọn.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783886028916-oz9g6qs6.png",
    "sourceTitle": "Examcademy SC-100 Question 241",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/241-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-242",
    "questionNumber": 242,
    "text": "You have a Microsoft 365 subscription and an Azure subscription. Microsoft 365 Defender and Microsoft Defender for Cloud are enabled.  \n  \nThe Azure subscription has 50 virtual machines. Each virtual machine runs different applications on Windows Server 2019.  \n  \nYou need to recommend a solution that ensures only authorized applications can run on the virtual machines. If an unauthorized application tries to run or be installed, it must be automatically blocked until an administrator authorizes it.  \n  \nWhich security control should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "app registrations in Azure AD"
      },
      {
        "key": "B",
        "text": "Azure AD Conditional Access App Control policies"
      },
      {
        "key": "C",
        "text": "app discovery anomaly detection policies in Microsoft Defender for Cloud Apps"
      },
      {
        "key": "D",
        "text": "adaptive application controls in Defender for Cloud"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Các điều khiển ứng dụng thích ứng trong Microsoft Defender for Cloud sử dụng công nghệ máy học để xác định các ứng dụng đã biết là an toàn và tạo danh sách ứng dụng cho phép cho máy ảo. Danh sách cho phép có thể yêu cầu chỉ những ứng dụng được phê duyệt mới chạy, ngăn phần mềm không được phê duyệt thực thi cho đến khi được cấp phép.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 242",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/242-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-243",
    "questionNumber": 243,
    "text": "You have an on-premises network and a Microsoft 365 subscription.  \n  \nYou are designing a Zero Trust security strategy.  \n  \nWhich two security controls should you incorporate into the Zero Trust solution? Each correct answer represents part of the solution.  \n  \n**NOTE:** Each correct answer is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Always allow connections from the on-premises network."
      },
      {
        "key": "B",
        "text": "Disable passwordless sign-in for sensitive accounts."
      },
      {
        "key": "C",
        "text": "Block sign-in attempts from unknown locations."
      },
      {
        "key": "D",
        "text": "Block sign-in attempts from noncompliant devices."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Zero Trust yêu cầu xác thực và ủy quyền rõ ràng bằng cách sử dụng tất cả các tín hiệu có sẵn, bao gồm cả tình trạng vị trí và thiết bị. Quyền truy cập có điều kiện chặn hoạt động đăng nhập từ các vị trí không xác định và các thiết bị không tuân thủ sẽ thực thi các tín hiệu đó; tự động tin cậy các mạng tại chỗ xung đột với Zero Trust và đăng nhập không cần mật khẩu là một phương pháp xác thực tăng cường bảo mật.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 243",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/243-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-244",
    "questionNumber": 244,
    "text": "You need to recommend a solution for scanning the application code. The solution must satisfy the application development requirements.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "GitHub Advanced Security"
      },
      {
        "key": "B",
        "text": "Azure Key Vault"
      },
      {
        "key": "C",
        "text": "Azure DevTest Labs"
      },
      {
        "key": "D",
        "text": "Application Insights in Azure Monitor"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "GitHub Advanced Security bao gồm quét mã, phân tích mã kho lưu trữ để tìm các lỗ hổng bảo mật tiềm ẩn và lỗi mã hóa bằng CodeQL hoặc các công cụ được hỗ trợ của bên thứ ba.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 244",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/244-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-245",
    "questionNumber": 245,
    "text": "You have an Azure subscription containing three Azure App Service web apps.  \n  \nYou need to protect the apps by using Azure Web Application Firewall (WAF) on Azure Front Door. The solution must meet these requirements:  \n  \n- Block attempts by malicious bots to access the apps.  \n- Rate-limit incoming connections to the apps.  \n- Minimize administrative effort.  \n  \nWhat should you configure for each requirement?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Giới hạn tốc độ WAF Azure Front Door được triển khai với các quy tắc giới hạn tốc độ tùy chỉnh. Bộ quy tắc Trình quản lý Bot được quản lý xác định và bảo vệ khỏi các bot xấu, đồng thời Microsoft duy trì bộ quy tắc đó, giảm thiểu nỗ lực quản trị.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 245",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/245-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-246",
    "questionNumber": 246,
    "text": "Your company has devices running Windows 10, Windows 11, or Windows Server.  \n  \nYou are working to improve the devices' security posture.  \n  \nYou plan to use security baselines from the Microsoft Security Compliance Toolkit.  \n  \nWhat should you recommend to compare the baselines with the devices' current configurations?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Intune"
      },
      {
        "key": "B",
        "text": "Local Group Policy Object (LGPO)"
      },
      {
        "key": "C",
        "text": "Windows Autopilot"
      },
      {
        "key": "D",
        "text": "Policy Analyzer"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Trình phân tích chính sách là tiện ích của Bộ công cụ tuân thủ bảo mật của Microsoft để phân tích và so sánh các Đối tượng chính sách nhóm. Nó có thể so sánh GPO với chính sách cục bộ hiện tại và cài đặt đăng ký cục bộ, cho phép đánh giá đường cơ sở bảo mật đối với cấu hình thiết bị hiện có.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 246",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/246-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-247",
    "questionNumber": 247,
    "text": "You have an Azure subscription that uses Microsoft Defender for Cloud.  \n  \nYou also have subscriptions for Amazon Web Services (AWS), Google Cloud Platform (GCP), and Oracle Cloud Infrastructure (OCI).  \n  \nYou create a custom security standard in Defender for Cloud.  \n  \nTo which subscriptions can the Defender for Cloud standard be applied?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure and AWS only"
      },
      {
        "key": "B",
        "text": "Azure and GCP only"
      },
      {
        "key": "C",
        "text": "Azure, AWS, and GCP only"
      },
      {
        "key": "D",
        "text": "Azure, AWS, and OCI only"
      },
      {
        "key": "E",
        "text": "Azure, AWS, GCP, and OCI"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Các tiêu chuẩn bảo mật tùy chỉnh Microsoft Defender for Cloud có thể được chỉ định cho đăng ký Azure, tài khoản AWS và dự án GCP. Cơ sở hạ tầng đám mây của Oracle không được hỗ trợ làm phạm vi mục tiêu cho các tiêu chuẩn tùy chỉnh.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 247",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/247-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-248",
    "questionNumber": 248,
    "text": "You are developing an application lifecycle management process based on the Microsoft Security Development Lifecycle (SDL).  \n  \nYou need to recommend a security standard for onboarding applications to Azure. The standard will contain recommendations for application design, development, and deployment.  \n  \nWhat should be included during the application design phase?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "software decomposition by using Microsoft Visual Studio Enterprise"
      },
      {
        "key": "B",
        "text": "dynamic application security testing (DAST) by using Veracode"
      },
      {
        "key": "C",
        "text": "threat modeling by using the Microsoft Threat Modeling Tool"
      },
      {
        "key": "D",
        "text": "static application security testing (SAST) by using SonarQube"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Microsoft SDL yêu cầu lập mô hình mối đe dọa trong giai đoạn thiết kế để xác định, phân loại, đánh giá và giảm thiểu các mối đe dọa bảo mật trước khi chúng được nhúng vào kiến ​​trúc ứng dụng. Công cụ tạo mô hình mối đe dọa của Microsoft hỗ trợ hoạt động phân tích thiết kế SDL này.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 248",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/248-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-249",
    "questionNumber": 249,
    "text": "Your company has the virtual-machine infrastructure shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783810115742-sdr7pjb0.jpg)  \n  \nThe company intends to use Microsoft Azure Backup Server (MABS) to back up the virtual machines to Azure.  \n  \nYou need to recommend ways to increase backup-strategy resiliency and mitigate attacks such as ransomware.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Use geo-redundant storage (GRS)."
      },
      {
        "key": "B",
        "text": "Maintain multiple copies of the virtual machines."
      },
      {
        "key": "C",
        "text": "Encrypt the backups by using customer-managed keys (CMKS)."
      },
      {
        "key": "D",
        "text": "Require PINs to disable backups."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "MABS sử dụng mã PIN bảo mật làm lớp xác thực bổ sung cho các hoạt động quan trọng như dừng bảo vệ và xóa dữ liệu sao lưu. Yêu cầu mã PIN giúp ngăn chặn việc vô hiệu hóa hoặc xóa trái phép các bản sao lưu trong cuộc tấn công bằng ransomware.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783810115742-sdr7pjb0.jpg",
    "sourceTitle": "Examcademy SC-100 Question 249",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/249-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-250",
    "questionNumber": 250,
    "text": "You need to recommend a security methodology for a DevOps development process based on the Microsoft Cloud Adoption Framework for Azure.  \n  \nDuring which phase of a CI/CD DevOps process should each security-related task take place?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Mô hình hóa mối đe dọa xác định các rủi ro thiết kế và biện pháp giảm thiểu trước khi triển khai, vì vậy nó thuộc khâu lập kế hoạch và phát triển. DAST kiểm tra các lỗ hổng bảo mật trên ứng dụng đang chạy như một phần của quá trình xây dựng và thử nghiệm. Thông tin tình báo có thể hành động—chẳng hạn như giám sát, phát hiện mối đe dọa và phản hồi hoạt động—thuộc giai đoạn vận hành.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 250",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/250-design-solutions-that-align-with-security-best-practices-and",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-251",
    "questionNumber": 251,
    "text": "You have two on-premises Windows Server servers named Server1 and Server2. Server1 hosts an app named App1 and is isolated from the internet.  \n  \nYou have a Microsoft Entra tenant.  \n  \nYou plan to deploy Global Secure Access to provide remote access to App1.  \n  \nYou need to configure the tenant and Server2 for the planned deployment. The solution must require users who try to access App1 to authenticate with their Microsoft Entra credentials.  \n  \nWhat should you create in the tenant, and what should you install on Server2?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Ứng dụng doanh nghiệp Truy cập an toàn toàn cầu cung cấp vùng chứa tài nguyên riêng tư, phân công người dùng và nhóm cũng như Truy cập có điều kiện. Trình kết nối mạng riêng Microsoft Entra chạy trên Máy chủ Windows có quyền truy cập vào ứng dụng nội bộ và môi giới kết nối của nó với Truy cập an toàn toàn cầu.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 251",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/251-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-252",
    "questionNumber": 252,
    "text": "Your company has a hybrid cloud infrastructure in which data and applications are regularly moved between cloud environments. The company’s on-premises network is managed as shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783809592947-aug2rkr2.jpg)  \n  \nYou are designing security operations to support the hybrid cloud infrastructure. The solution must meet these requirements:  \n  \n- Govern virtual machines and servers across multiple environments.  \n- Enforce standards for all resources across all environments by using Azure Policy.  \n  \nWhich two components should you recommend for the on-premises network? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "on-premises data gateway"
      },
      {
        "key": "B",
        "text": "Azure VPN Gateway"
      },
      {
        "key": "C",
        "text": "guest configuration in Azure Policy"
      },
      {
        "key": "D",
        "text": "Azure Arc"
      },
      {
        "key": "E",
        "text": "Azure Bastion"
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Azure Arc kết nối các máy chủ tại chỗ và nhiều đám mây với Azure để chúng có thể được quản lý và quản lý dưới dạng tài nguyên Azure. Cấu hình khách của Chính sách Azure (nay là Cấu hình máy Azure) mở rộng Chính sách Azure vào hệ điều hành của máy chủ hỗ trợ Arc, cho phép đánh giá tuân thủ và thực thi các tiêu chuẩn cấu hình máy trên các môi trường kết hợp.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783809592947-aug2rkr2.jpg",
    "sourceTitle": "Examcademy SC-100 Question 252",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/252-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-253",
    "questionNumber": 253,
    "text": "The following table shows the Azure subscriptions.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783886187392-k7sd5ny5.png)  \n  \nThe tenants contain the groups shown in the following table.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783886190810-l8q9bl4o.png)  \n  \nYou perform the following actions:  \n  \n- Configure multi-user authorization (MUA) for Vault1 by using a resource guard deployed to Sub2.  \n- Enable all available MUA controls for Vault1.  \n- In contoso.com, create a Privileged Identity Management (PIM) assignment named Assignment1.  \n- Configure Assignment1 to allow Group1 to activate the Contributor role for Vault1.  \n  \nFor each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "To enable MUA for Vault1, a resource guard must be deployed to Sub1.",
        "correctAnswer": "No"
      },
      {
        "id": "2",
        "text": "A user in Group2 must approve changes made by a user in Group1 to the backup policies of Vault1.",
        "correctAnswer": "Yes"
      },
      {
        "id": "3",
        "text": "A user in Group1 that activates Assignment1 can disable soft delete for the backups of Vault1, without the approval of a user in Group2.",
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
    "explanation": "Bộ bảo vệ tài nguyên có thể được đặt trong một thuê bao khác hoặc đối tượng thuê Microsoft Entra từ kho tiền; nó chỉ cần đáp ứng các điều kiện tiên quyết về khu vực và khả năng tiếp cận. Khi bật tất cả các điều khiển MUA có sẵn, việc sửa đổi chính sách sao lưu sẽ được bảo vệ và yêu cầu ủy quyền trên Resource Guard, nằm dưới sự kiểm soát của quản trị viên bảo mật. Vô hiệu hóa tính năng xóa mềm là một thao tác được bảo vệ bắt buộc, do đó, chỉ riêng việc kích hoạt Vault1 Contributor không thể thực hiện thao tác này nếu không có sự cho phép bắt buộc của Bộ bảo vệ tài nguyên.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783886187392-k7sd5ny5.png",
    "sourceTitle": "Examcademy SC-100 Question 253",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/253-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-254",
    "questionNumber": 254,
    "text": "You have on-premises servers and virtual machines that run Windows Server, Red Hat Enterprise Linux (RHEL) 7, or RHEL 8.  \n  \nYou have an Azure subscription that contains virtual machines running Windows Server Datacenter: Azure Edition.  \n  \nYou need to recommend a solution for managing operating-system updates for the on-premises servers and virtual machines. The solution must meet these requirements:  \n  \n- Enable hotpatching for the Azure virtual machines.  \n- Enable on-demand inventory and deployment of updates.  \n- Enable deployment of Extended Security Update (ESU) patches to the on-premises servers.  \n  \nWhat should be included in the recommendation?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Trình quản lý cập nhật Azure cung cấp khả năng đánh giá và triển khai cập nhật theo yêu cầu, đồng thời hỗ trợ vá lỗi nóng cho các máy ảo Windows Server Datacenter: Azure Edition đủ điều kiện. Nó cũng hỗ trợ vá lỗi ESU cho các máy chủ hỗ trợ Azure Arc. Tác nhân Azure Connected Machine cho phép quản lý Azure Arc các máy chủ tại chỗ, cho phép Azure Update Manager quản lý chúng và triển khai các bản vá ESU.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 254",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/254-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-255",
    "questionNumber": 255,
    "text": "You have an Azure AD tenant synchronized with an Active Directory Domain Services (AD DS) domain.  \n  \nYou are designing an Azure DevOps solution that deploys applications to an Azure subscription by using continuous integration and continuous deployment (CI/CD) pipelines.  \n  \nYou need to recommend the identity types to use as deployment credentials for the service connection. The solution must adhere to DevSecOps best practices from the Microsoft Cloud Adoption Framework for Azure.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a managed identity in Azure"
      },
      {
        "key": "B",
        "text": "an Azure AD user account that has role assignments in Azure AD Privileged Identity Management (PIM)"
      },
      {
        "key": "C",
        "text": "a group managed service account (gMSA)"
      },
      {
        "key": "D",
        "text": "an Azure AD user account that has a password stored in Azure Key Vault"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Các kết nối dịch vụ triển khai Azure phải sử dụng danh tính khối lượng công việc an toàn, có phạm vi thay vì tài khoản người dùng hoặc mật khẩu được lưu trữ. Hướng dẫn Khung áp dụng đám mây của Microsoft cho phép danh tính được quản lý do người dùng chỉ định với liên kết danh tính khối lượng công việc, tránh các bí mật được quản lý và cho phép gán vai trò Azure có đặc quyền ít nhất.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 255",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/255-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-256",
    "questionNumber": 256,
    "text": "You have a Microsoft 365 subscription and an Azure subscription. Microsoft 365 Defender and Microsoft Defender for Cloud are enabled.  \n  \nThe Azure subscription includes 50 virtual machines. Every virtual machine runs different applications on Windows Server 2019.  \n  \nYou need to recommend a solution that ensures only authorized applications can run on the virtual machines. If an unauthorized application tries to run or be installed, it must be blocked automatically until an administrator authorizes the application.  \n  \nWhich security control should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "app registrations in the Microsoft Entra tenant"
      },
      {
        "key": "B",
        "text": "OAuth app policies in Microsoft Defender for Cloud Apps"
      },
      {
        "key": "C",
        "text": "app protection policies in Microsoft Endpoint Manager"
      },
      {
        "key": "D",
        "text": "application control policies in Microsoft Defender for Endpoint"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Chính sách kiểm soát ứng dụng thực thi danh sách cho phép rõ ràng của phần mềm được phép chạy. Trên Windows Server 2019, chính sách Kiểm soát ứng dụng có thể chặn các tập lệnh và tệp thực thi không được phê duyệt cho đến khi quản trị viên cập nhật chính sách để ủy quyền cho chúng; Defender for Endpoint có thể hỗ trợ tập trung việc giám sát và quản lý chính sách.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 256",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/256-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-257",
    "questionNumber": 257,
    "text": "Your company uses Azure Pipelines and Azure Repos to implement continuous integration and continuous deployment (CI/CD) workflows for deploying applications to Azure.  \n  \nYou are updating the deployment process to align it with the DevSecOps controls guidance in the Microsoft Cloud Adoption Framework for Azure.  \n  \nYou need to recommend a solution that ensures all code changes are submitted by using pull requests before the CI/CD workflow deploys them.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "custom roles in Azure Pipelines"
      },
      {
        "key": "B",
        "text": "branch policies in Azure Repos"
      },
      {
        "key": "C",
        "text": "Azure policies"
      },
      {
        "key": "D",
        "text": "custom Azure roles"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Các chính sách của nhánh Azure Repos có thể bảo vệ nhánh triển khai bằng cách yêu cầu các yêu cầu kéo đối với tất cả các thay đổi và từ chối các lần đẩy trực tiếp. Điều này thực thi quy trình làm việc yêu cầu kéo trước khi các thay đổi có thể đến nhánh được triển khai CI/CD sử dụng.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 257",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/257-design-solutions-that-align-with-security-best-practices-and",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-258",
    "questionNumber": 258,
    "text": "You have four Azure subscriptions named Sub1, Sub2, Sub3, and Sub4. Each subscription has a unique Microsoft Entra tenant linked to a Microsoft 365 subscription. Sub1 includes a user named User1.  \n  \nYou plan to implement Microsoft Sentinel.  \n  \nYou need User1 to monitor Microsoft Entra ID events and Microsoft 365 events for Sub2, Sub3, and Sub4 by using Microsoft Sentinel. The solution must minimize administrative effort.  \n  \nWhat is the minimum number of Microsoft Sentinel workspaces you should create, and which Azure service should you use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Microsoft Sentinel chỉ hỗ trợ thu thập dữ liệu Microsoft và Azure SaaS trong cùng ranh giới đối tượng thuê Microsoft Entra. Do đó, mỗi đối tượng thuê nguồn đều yêu cầu không gian làm việc Log Analytics hỗ trợ Sentinel riêng cho dữ liệu Microsoft Entra ID và Microsoft 365. Azure Lighthouse cho phép ủy quyền quản lý không gian làm việc của Sentinel giữa các đối tượng thuê, cho phép giám sát tập trung với chi phí quản trị tối thiểu.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 258",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/258-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-259",
    "questionNumber": 259,
    "text": "You have an Azure subscription named Sub1 that is connected to a Microsoft Entra tenant named contoso.com. Sub1 contains 20 virtual networks named Sub1_VNet1 through Sub1_VNet20.  \n  \nYou have an Azure subscription named Sub2 that is connected to a Microsoft Entra tenant named fabrikam.com. Sub2 contains 20 virtual networks named Sub2_VNet1 through Sub2_VNet20.  \n  \nYou need to deploy an Azure Virtual Network Manager solution that meets these requirements:  \n  \n- Blocks SSH traffic on Sub1_VNet20 and Sub2_VNet20 by using network security groups (NSGs)  \n- Blocks SSH traffic on Sub1_VNet1 through Sub1_VNet19 and Sub2_VNet1 through Sub2_VNet19  \n- Allows SSH traffic on Sub1_VNet20 and Sub2_VNet20  \n- Blocks FTP traffic on all the virtual networks  \n- Minimizes administrative effort  \n  \nWhat is the minimum number of components required for the deployment?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "• 1 Virtual Network Manager instance• 1 rule collection• 2 NSGs"
      },
      {
        "key": "B",
        "text": "• 2 Virtual Network Manager instances that each contains:o 1 NSGo 1 rule collection"
      },
      {
        "key": "C",
        "text": "• 2 Virtual Network Manager instances that each contains:o 2 NSGso 2 rule collections"
      },
      {
        "key": "D",
        "text": "• 1 Virtual Network Manager instance• 2 rule collections• 2 NSGs"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Trình quản lý Azure Virtual Network hỗ trợ kết nối nhiều đối tượng thuê, cho phép một người quản lý mạng quản lý mạng ảo ở cả hai đối tượng thuê. Cần có các bộ sưu tập quy tắc riêng biệt cho chính sách từ chối VNet1–VNet19 và chính sách ngoại lệ VNet20. Quy tắc quản trị viên bảo mật `Always Allow` dành cho SSH trên nhóm VNet20 được ưu tiên hơn và dừng đánh giá thêm bằng quy tắc từ chối SSH của NSG, trong khi FTP có thể vẫn bị từ chối. Cần có hai NSG cho các tài nguyên VNet20 riêng biệt trong hai đăng ký. [Cross-tenant support in Azure Virtual Network Manager](https://learn.microsoft.com/en-us/azure/virtual-network-manager/concept-cross-tenant) và [Security admin rules in Azure Virtual Network Manager](https://learn.microsoft.com/en-us/azure/virtual-network-manager/concept-security-admins) ghi lại hành vi đánh giá quy tắc và quản lý nhiều đối tượng thuê.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 259",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/259-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-260",
    "questionNumber": 260,
    "text": "You have an Azure subscription.  \n  \nYou plan to implement enterprise-scale landing zones based on the Microsoft Cloud Adoption Framework for Azure. The deployment will include one platform landing zone for all shared services and three application landing zones, each of which will host a different Azure application.  \n  \nYou need to recommend which resource to deploy to each landing zone. The solution must meet the Cloud Adoption Framework best-practice recommendations for enterprise-scale landing zones.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "an Azure firewall"
      },
      {
        "key": "B",
        "text": "an Azure virtual network gateway"
      },
      {
        "key": "C",
        "text": "an Azure Private DNS zone"
      },
      {
        "key": "D",
        "text": "an Azure key vault"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Vùng đích ứng dụng lưu trữ tài nguyên cho một khối lượng công việc hoặc ứng dụng. Việc triển khai Azure Key Vault với mỗi vùng đích ứng dụng sẽ giữ cho các khóa, bí mật và chứng chỉ của khối lượng công việc đó được tách biệt trong vòng đời và ranh giới bảo mật của chính nó. Azure Firewall, cổng mạng ảo và DNS chia sẻ thường là các dịch vụ kết nối nền tảng tập trung thay vì trùng lặp cho từng khối lượng công việc của ứng dụng.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 260",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/260-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-261",
    "questionNumber": 261,
    "text": "Your company operates a hybrid cloud infrastructure.  \n  \nThe company intends to hire several temporary employees over a short time. These employees must access applications and data on the company’s on-premises network.  \n  \nThe company’s security policy prohibits using personal devices to access company data and applications.  \n  \nYou need to recommend a solution that gives the temporary employee access to company resources. The solution must scale on demand.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Deploy Azure Virtual Desktop, Azure Active Directory (Azure AD) Conditional Access, and Microsoft Defender for Cloud Apps."
      },
      {
        "key": "B",
        "text": "Redesign the VPN infrastructure by adopting a split tunnel configuration."
      },
      {
        "key": "C",
        "text": "Deploy Microsoft Endpoint Manager and Azure Active Directory (Azure AD) Conditional Access."
      },
      {
        "key": "D",
        "text": "Migrate the on-premises applications to cloud-based applications."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Azure Virtual Desktop cung cấp các ứng dụng hoặc máy tính để bàn ảo được quản lý tập trung, cho phép nhân viên tạm thời truy cập tài nguyên của công ty thông qua phiên từ xa được kiểm soát thay vì sử dụng trực tiếp các thiết bị cá nhân cho dữ liệu và ứng dụng của công ty. Tổng hợp tài nguyên nhiều phiên và khả năng mở rộng quy mô hỗ trợ tự động khi nhu cầu thay đổi. Quyền truy cập có điều kiện của Azure AD và Ứng dụng Microsoft Defender for Cloud cung cấp các biện pháp kiểm soát quyền truy cập và bảo mật phiên cần thiết cho mô hình truy cập từ xa này.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 261",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/261-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-262",
    "questionNumber": 262,
    "text": "Your company operates on-premises datacenters in Seattle, Chicago, and New York City.  \n  \nYou plan to migrate the on-premises workloads to the East US Azure region.  \n  \nYou need to design a governance solution for the management group hierarchy. The solution must follow Microsoft Cloud Adoption Framework for Azure principles and ensure that the hierarchy aligns with the Azure landing conceptual architecture.  \n  \nWhat should you use to determine which archetype-aligned management groups to create under the landing zones management group?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "geographical locations"
      },
      {
        "key": "B",
        "text": "the internal billing chargeback structure"
      },
      {
        "key": "C",
        "text": "the hybrid connectivity requirements"
      },
      {
        "key": "D",
        "text": "software development lifecycle (SDLC) environments"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Trong kiến ​​trúc khái niệm vùng đích Azure, nguyên mẫu khối lượng công việc chính được xác định bởi các yêu cầu kết nối. Nhóm quản lý Corp dành cho các khối lượng công việc cần kết nối hoặc kết nối kết hợp với mạng công ty, trong khi Nhóm Quản lý trực tuyến dành cho các khối lượng công việc cần kết nối Internet trực tiếp hoặc mạng ảo no. Do đó, những nhu cầu kết nối này sẽ xác định các nhóm quản lý phù hợp với nguyên mẫu bên dưới Vùng đích.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 262",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/262-design-solutions-that-align-with-security-best-practices-and",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-263",
    "questionNumber": 263,
    "text": "You have an Azure subscription containing App Service apps in four Azure regions, which users access from the internet.  \n  \nYou plan to block requests to the apps when those requests contain security threats specified by the Open Web Application Security Project (OWASP) Core Rule Set (CRS).  \n  \nDesign a solution that blocks the requests and meets these requirements:  \n  \n- Maintain access to the apps during a regional outage.  \n- Minimize the number of required resources.  \n  \nWhat should the design include?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Azure Front Door cung cấp điểm truy cập toàn cầu và có thể định tuyến lưu lượng truy cập đến nguồn gốc Dịch vụ ứng dụng ở nhiều vùng, cho phép dịch vụ tiếp tục khi khu vực gốc không khả dụng. Việc bật Tường lửa ứng dụng web Azure (WAF) trên Cửa trước sẽ áp dụng các biện pháp bảo vệ Bộ quy tắc cốt lõi OWASP được quản lý và có thể chặn các yêu cầu web độc hại. Điều này sử dụng một triển khai Cửa trước/WAF toàn cầu thay vì tài nguyên Cổng ứng dụng khu vực.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 263",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/263-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-264",
    "questionNumber": 264,
    "text": "You have an Azure subscription.  \n  \nYou plan to deploy Azure Kubernetes Service (AKS) clusters that will host web services.  \n  \nYou need to recommend an ingress controller solution to protect the hosted web services.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Load Balancer"
      },
      {
        "key": "B",
        "text": "Azure Application Gateway"
      },
      {
        "key": "C",
        "text": "Azure Front Door"
      },
      {
        "key": "D",
        "text": "Azure Firewall"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Azure Application Gateway tích hợp với AKS thông qua Bộ điều khiển xâm nhập cổng ứng dụng (AGIC) và cung cấp khả năng xâm nhập lớp 7. Cổng ứng dụng cũng có thể sử dụng chức năng Tường lửa ứng dụng web (WAF) và các chính sách TLS để bảo vệ các dịch vụ web được lưu trữ trên máy chủ AKS khỏi các cuộc tấn công web thông thường.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 264",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/264-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-265",
    "questionNumber": 265,
    "text": "You have 1,000 on-premises servers running Windows Server 2022 and 500 on-premises servers running Linux.  \n  \nYour Azure subscription contains:  \n  \n- A Log Analytics workspace  \n- A Microsoft Defender Cloud Security Posture Management (CSPM) plan  \n  \nYou need to deploy Update Management for the servers. What should you configure?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Quản lý cập nhật tự động hóa Azure cổ điển được kích hoạt thông qua tài khoản Azure Automation được kết nối với không gian làm việc Log Analytics. Máy chủ Windows và Linux tại chỗ sử dụng tác nhân Log Analytics để đánh giá và triển khai bản cập nhật. Tác nhân Azure Connected Machine dùng để tích hợp Azure Arc và Tác nhân Azure Monitor không phải là tác nhân bắt buộc cho giải pháp cổ điển này.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 265",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/265-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-266",
    "questionNumber": 266,
    "text": "You have an Azure subscription that contains 20 App Service web apps providing services to external customers. Every web app has a unique certificate and key.  \n  \nRecommend a solution to manage the web apps' keys and certificates. The solution must:  \n  \n- Provide a single tenancy for key and certificate storage.  \n- Maintain FIPS 140-2 Level 3 compliance.  \n- Follow the principle of least privilege.  \n- Minimize costs.  \n- Minimize administrative effort.  \n  \nWhat should be included in the recommendation?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Azure Key Vault Managed HSM cung cấp giải pháp HSM cho một đối tượng thuê đáp ứng các yêu cầu FIPS 140-2 Cấp 3. Một phiên bản duy nhất giảm thiểu số lượng tài nguyên cần quản lý và Azure RBAC hỗ trợ phân công vai trò trong phạm vi hẹp để thực thi đặc quyền tối thiểu. Key Vault RBAC và các chính sách truy cập là các mô hình ủy quyền mặt phẳng dữ liệu thay thế; RBAC là mẫu được khuyên dùng.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 266",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/266-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-267",
    "questionNumber": 267,
    "text": "You have a Microsoft 365 subscription.  \n  \nYou must recommend a security solution to monitor the following activities:  \n  \n- User accounts that might have been compromised  \n- Users performing bulk file downloads from Microsoft SharePoint Online  \n  \nWhat should be included in the recommendation for each activity? Components may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "potentially_compromised_accounts",
        "text": "User accounts that were potentially compromised:",
        "correctAnswer": "C"
      },
      {
        "id": "sharepoint_bulk_downloads",
        "text": "Users performing bulk file downloads from SharePoint Online:",
        "correctAnswer": "E"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "A data loss prevention (DLP) policy"
      },
      {
        "key": "B",
        "text": "Azure Active Directory (Azure AD) Conditional Access"
      },
      {
        "key": "C",
        "text": "Azure Active Directory (Azure AD) Identity Protection"
      },
      {
        "key": "D",
        "text": "Microsoft Defender for Cloud"
      },
      {
        "key": "E",
        "text": "Microsoft Defender for Cloud Apps"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "A data loss prevention (DLP) policy"
      },
      {
        "key": "B",
        "text": "Azure Active Directory (Azure AD) Conditional Access"
      },
      {
        "key": "C",
        "text": "Azure Active Directory (Azure AD) Identity Protection"
      },
      {
        "key": "D",
        "text": "Microsoft Defender for Cloud"
      },
      {
        "key": "E",
        "text": "Microsoft Defender for Cloud Apps"
      }
    ],
    "correctAnswers": [
      "potentially_compromised_accounts=C",
      "sharepoint_bulk_downloads=E"
    ],
    "explanation": "Azure AD Identity Protection phát hiện rủi ro danh tính và xác định những người dùng hoặc lượt đăng nhập rủi ro có thể chỉ ra các tài khoản bị xâm phạm. Ứng dụng Microsoft Defender for Cloud giám sát hoạt động của ứng dụng đám mây và phát hiện hoạt động tải xuống nhiều tệp bất thường, bao gồm cả trong SharePoint Online.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 267",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/267-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-268",
    "questionNumber": 268,
    "text": "You have a Microsoft 365 tenant.  \n  \nYou have an Azure subscription containing Azure App Service web apps. The apps have these characteristics:  \n  \n- The apps use third-party and open-source components.  \n- The apps were developed using C#, Python, and Java.  \n- The app deployment process is managed by using Azure DevOps.  \n- The app source code is stored in GitHub Enterprise Cloud repositories and is protected by using GitHub Advanced Security.  \n  \nYou need to reduce the risk of supply-chain attacks throughout the application lifecycle.  \n  \nWhat should you implement?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "secret scanning"
      },
      {
        "key": "B",
        "text": "Dependabot alerts"
      },
      {
        "key": "C",
        "text": "app governance in Microsoft Defender for Cloud Apps"
      },
      {
        "key": "D",
        "text": "NuGet Audit"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Cảnh báo Dependabot xác định các phần phụ thuộc có lỗ hổng đã biết bằng cách so sánh biểu đồ phụ thuộc của kho lưu trữ với các tư vấn bảo mật. Điều này giúp các nhóm khắc phục các thành phần nguồn mở và bên thứ ba dễ bị tổn thương trên các hệ sinh thái được hỗ trợ trước khi những kẻ tấn công có thể khai thác chúng.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 268",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/268-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-269",
    "questionNumber": 269,
    "text": "You have 50 Azure subscriptions.  \n  \nYou need to monitor resources in the subscriptions for compliance with the ISO 27001:2013 standards. The solution must minimize the effort needed to modify the list of policy definitions monitored for the subscriptions.  \n  \nWhat are two ways to accomplish this goal? Each correct answer provides a complete solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Assign an initiative to a management group."
      },
      {
        "key": "B",
        "text": "Assign a policy to each subscription."
      },
      {
        "key": "C",
        "text": "Assign a policy to a management group."
      },
      {
        "key": "D",
        "text": "Assign an initiative to each subscription."
      },
      {
        "key": "E",
        "text": "Assign a blueprint to each subscription."
      },
      {
        "key": "F",
        "text": "Assign a blueprint to a management group."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Các sáng kiến ​​Chính sách Azure nhóm các định nghĩa chính sách liên quan vào một bộ tuân thủ được quản lý. Các định nghĩa được thêm vào sáng kiến ​​được chỉ định sẽ tự động trở thành một phần của các nhiệm vụ hiện có. Một sáng kiến ​​có thể được chỉ định ở phạm vi nhóm quản lý, áp dụng cho đăng ký con hoặc được chỉ định trực tiếp cho đăng ký. Do đó, cả hai cách tiếp cận đều cho phép bộ chính sách ISO 27001:2013 được thay đổi tập trung mà không cần sửa đổi việc phân công chính sách riêng cho từng định nghĩa. Thay vào đó, Azure Blueprint yêu cầu các bài tập phải được cập nhật để sử dụng phiên bản đã xuất bản mới hơn.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 269",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/269-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-270",
    "questionNumber": 270,
    "text": "You have a Microsoft 365 subscription containing 500 users. Each user has a Microsoft 365 E5 license and uses a Windows device.  \n  \nMicrosoft Purview data loss prevention (DLP) policies apply to Microsoft Exchange Online email and SharePoint Online sites.  \n  \nYou plan to monitor use of third-party generative AI apps by using Microsoft Purview Data Security Posture Management for AI (DSPM for AI).  \n  \nWhat should you do first?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Enable Microsoft Purview insider risk management for all the users."
      },
      {
        "key": "B",
        "text": "Onboard all endpoint devices to Microsoft Purview."
      },
      {
        "key": "C",
        "text": "Configure Microsoft Purview data connectors for the generative AI apps."
      },
      {
        "key": "D",
        "text": "License all the users for Microsoft 365 Copilot."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Microsoft Purview yêu cầu các thiết bị Windows phải được tích hợp Microsoft Purview để hiển thị thông tin nhạy cảm được chia sẻ với các trang web AI tổng hợp của bên thứ ba cũng như để giám sát hoặc thực thi DLP điểm cuối. Do đó, việc tích hợp điểm cuối là điều kiện tiên quyết để giám sát việc sử dụng này với DSPM dành cho AI.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 270",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/270-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-271",
    "questionNumber": 271,
    "text": "You have a Microsoft 365 E5 subscription that uses Microsoft Exchange Online.  \n  \nRecommend a solution that prevents malicious actors from impersonating internal senders’ email addresses.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Bộ bảo vệ Microsoft dành cho Office 365 bao gồm tính năng bảo vệ chống mạo danh người dùng và miền. Nó được định cấu hình thông qua các chính sách chống lừa đảo, nơi người dùng và miền nội bộ có thể được bảo vệ khỏi các nỗ lực mạo danh.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 271",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/271-design-solutions-that-align-with-security-best-practices-and",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-272",
    "questionNumber": 272,
    "text": "You have an Azure subscription.  \n  \nYou plan to deploy an Azure App Service app named App1 that will access an external web service by using a username and password.  \n  \nYou need to recommend a password-storage solution for App1 that satisfies these requirements:  \n  \n- The password is stored securely.  \n- App1 can authenticate to the service that stores the password.  \n  \nWhich service should store the password, and which authentication method should App1 use to access that service?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Azure Key Vault lưu trữ an toàn các bí mật như mật khẩu. Dịch vụ ứng dụng có thể sử dụng managed identity để xác thực Key Vault thông qua Microsoft Entra ID, tránh thông tin xác thực do ứng dụng quản lý.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 272",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/272-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-273",
    "questionNumber": 273,
    "text": "Your organization has a main office and a branch office.  \n  \nThe main office has 20 on-premises servers running Windows Server that host applications published by using Microsoft Entra application proxy. The main office has 500 on-premises computers running Windows 11. The branch office has 100 on-premises computers running Windows 11.  \n  \nAll computers in the main office are enrolled in Microsoft Intune. The branch office computers are **not** enrolled in Intune.  \n  \nYou have a Microsoft 365 ES subscription.  \n  \nYou have a Microsoft Entra tenant. A third-party software as a service (SaaS) app is registered in the Microsoft Entra tenant.  \n  \nYou plan to implement Global Secure Access.  \n  \nYou are evaluating compliant network check together with Conditional Access.  \n  \nWhich two scenarios are supported by compliant network check? Each correct answer provides a complete solution.  \n  \n> NOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "connections to the third-party SaaS app"
      },
      {
        "key": "B",
        "text": "connections from the branch office computers"
      },
      {
        "key": "C",
        "text": "Continuous Access Evaluation for Microsoft Exchange Online"
      },
      {
        "key": "D",
        "text": "connections to the on-premises apps"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Kiểm tra mạng tuân thủ Truy cập an toàn toàn cầu tích hợp với Truy cập có điều kiện để bảo vệ đăng nhập vào tài nguyên tích hợp Microsoft Entra ID, bao gồm rõ ràng các ứng dụng của Microsoft, ứng dụng SaaS của bên thứ ba và ứng dụng dòng kinh doanh riêng tư, do đó cả ứng dụng SaaS của bên thứ ba và các ứng dụng tại chỗ được xuất bản thông qua proxy ứng dụng Microsoft Entra đều nằm trong phạm vi được hỗ trợ, miễn là người dùng kết nối thông qua ứng dụng khách Truy cập an toàn toàn cầu.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 273",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/273-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-274",
    "questionNumber": 274,
    "text": "You have an Azure AD tenant that synchronizes with an Active Directory Domain Services (AD DS) domain.  \n  \nYour on-premises datacenter contains 100 servers. The servers run Windows Server and are backed up by using Microsoft Azure Backup Server (MABS).  \n  \nYou are designing a recovery solution for ransomware attacks. The solution adheres to Microsoft Security Best Practices.  \n  \nYou need to ensure that a compromised administrator account cannot be used to delete the backups.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From Azure Backup, configure multi-user authorization by using Resource Guard."
      },
      {
        "key": "B",
        "text": "From Microsoft Azure Backup Setup, register MABS with a Recovery Services vault."
      },
      {
        "key": "C",
        "text": "From a Recovery Services vault, generate a security PIN for critical operations."
      },
      {
        "key": "D",
        "text": "From Azure AD Privileged Identity Management (PIM), create a role assignment for the Backup Contributor role."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Ủy quyền nhiều người dùng Azure Backup sử dụng Bộ bảo vệ tài nguyên để bảo vệ các hoạt động quan trọng. Nó yêu cầu ủy quyền hiện hành trên Bộ bảo vệ tài nguyên riêng biệt, do đó, tài khoản quản trị viên dự phòng không có các quyền đó không thể thực hiện độc lập các hoạt động liên quan đến xóa được bảo vệ.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 274",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/274-design-solutions-that-align-with-security-best-practices-and",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-275",
    "questionNumber": 275,
    "text": "You have an Azure subscription with Microsoft Defender for Cloud enabled.  \n  \nYou are reviewing the Azure Security Benchmark V3 report shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783809479753-7i4jat2y.jpg)  \n  \nYou need to confirm whether Microsoft Defender for Servers is installed on every virtual machine running Windows.  \n  \nWhich compliance control should you evaluate?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Asset Management"
      },
      {
        "key": "B",
        "text": "Posture and Vulnerability Management"
      },
      {
        "key": "C",
        "text": "Data Protection"
      },
      {
        "key": "D",
        "text": "Endpoint Security"
      },
      {
        "key": "E",
        "text": "Incident Response"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Bảo mật điểm cuối bao gồm việc phát hiện và phản hồi điểm cuối cũng như kiểm soát chống phần mềm độc hại cho các điểm cuối Azure. Bộ bảo vệ Microsoft dành cho Máy chủ, được tích hợp với Bộ bảo vệ Microsoft dành cho Điểm cuối, cung cấp khả năng EDR cho máy ảo; do đó, việc triển khai nó được đánh giá trong miền kiểm soát Bảo mật điểm cuối.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783809479753-7i4jat2y.jpg",
    "sourceTitle": "Examcademy SC-100 Question 275",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/275-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-276",
    "questionNumber": 276,
    "text": "You have an Azure subscription.  \n  \nYou plan to deploy Azure App Service apps by using Azure DevOps.  \n  \nYou need to recommend a solution that ensures deployed apps remain compliant with Microsoft cloud security benchmark (MCSB) recommendations.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "DevOps security in Microsoft Defender for Cloud"
      },
      {
        "key": "B",
        "text": "Microsoft Defender for App Service"
      },
      {
        "key": "C",
        "text": "Azure Policy"
      },
      {
        "key": "D",
        "text": "a branch policy in Azure DevOps"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Điểm chuẩn bảo mật đám mây của Microsoft được áp dụng thông qua Defender for Cloud dưới dạng các đề xuất bảo mật được hỗ trợ bởi Chính sách Azure và Chính sách Azure (sử dụng các hiệu ứng kiểm tra, từ chối và DeployIfNotExists/Enforce) giúp các tài nguyên Dịch vụ ứng dụng được triển khai tuân thủ các đề xuất MCSB — bất kể chúng có được triển khai thông qua Azure DevOps hay không. \"Bảo mật DevOps trong Microsoft Defender for Cloud\" (A) đánh giá trạng thái đường ống/kho lưu trữ chẳng hạn như quét bí mật và IaC, đồng thời Bộ bảo vệ Microsoft cho Dịch vụ Ứng dụng (B) cung cấp khả năng bảo vệ khỏi mối đe dọa trong thời gian chạy; không thực thi tuân thủ MCSB cấp tài nguyên. Chính sách chi nhánh (D) chi phối việc kiểm soát nguồn chứ không phải việc tuân thủ tài nguyên Azure. Vì vậy, Chính sách Azure là đề xuất.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 276",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/276-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-277",
    "questionNumber": 277,
    "text": "Your company has two offices, named Office1 and Office2. The offices have 1,000 on-premises Windows 11 devices that are Microsoft Entra joined.  \n  \nYou have a Microsoft 365 subscription and use Microsoft Intune.  \n  \nYou plan to deploy Microsoft Entra Internet Access from the offices to Microsoft 365.  \n  \nYou enable the Microsoft 365 profile and configure the following:  \n  \n- A traffic policy for all Microsoft 365 traffic  \n- A linked Conditional Access policy configured as follows:  \n  - Applies to all users  \n  - Performs compliant-network checks  \n  - Permits Microsoft 365 traffic from compliant devices  \n- An assignment to all devices  \n- An assignment to the remote network associated with Office1  \n  \nYou deploy the Global Secure Access client to every device in Office2 and establish connections.  \n  \nIdentify which users can access Microsoft 365 services from compliant devices and which users are blocked from accessing Microsoft 365 services when they use noncompliant devices.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Cấu hình lưu lượng truy cập của Microsoft có thể chuyển tiếp lưu lượng truy cập thông qua ứng dụng khách Truy cập Bảo mật Toàn cầu hoặc mạng từ xa được chỉ định. Kiểm tra Truy cập có điều kiện của mạng tuân thủ được đáp ứng bởi những người dùng được kết nối thông qua dịch vụ Truy cập an toàn toàn cầu, bao gồm cả những người dùng sử dụng mạng từ xa Office1 đã định cấu hình. Do đó, các thiết bị tuân thủ được kết nối với máy khách trong Office2 và các thiết bị trong Office1 có thể truy cập Microsoft 365. Một thiết bị không tuân thủ trong Office2 không nằm trong mạng từ xa được chỉ định và không thể đáp ứng kiểm tra mạng tuân thủ, trong khi một thiết bị trong Office1 có thể làm như vậy thông qua mạng từ xa.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 277",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/277-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-278",
    "questionNumber": 278,
    "text": "You have a Microsoft 365 subscription that uses Microsoft Defender XDR and Microsoft Purview.  \n  \nA Microsoft SharePoint Online site contains a file named File1 with a sensitivity label applied.  \n  \nYou need to recommend a solution to reevaluate Conditional Access policies when a user downloads Filel from the SharePoint site.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Defender for Cloud Apps"
      },
      {
        "key": "B",
        "text": "Microsoft Defender for Cloud"
      },
      {
        "key": "C",
        "text": "Microsoft Defender for Office 365"
      },
      {
        "key": "D",
        "text": "Microsoft Entra application proxy"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Kiểm soát ứng dụng Truy cập có điều kiện của Ứng dụng Microsoft Defender for Cloud cung cấp các điều khiển phiên theo thời gian thực cho SharePoint Online. Khả năng bối cảnh xác thực của nó có thể đánh giá lại các chính sách Truy nhập có điều kiện của Microsoft Entra khi xảy ra một hành động nhạy cảm trong phiên, chẳng hạn như tải xuống tệp có gắn nhãn nhạy cảm.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 278",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/278-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-279",
    "questionNumber": 279,
    "text": "You have a multicloud environment containing an Azure subscription, an Amazon Web Services (AWS) subscription, and a Google Cloud Platform (GCP) subscription.  \n  \nYou plan to implement Cloud Security Posture Management (CSPM) using Microsoft Defender for Cloud.  \n  \nYou need to design a solution that provides attack path analysis functionality for each subscription.  \n  \nWhat should the solution include?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "regulatory compliance"
      },
      {
        "key": "B",
        "text": "Microsoft Defender External Attack Surface Management (Defender EASM)"
      },
      {
        "key": "C",
        "text": "agentless scanning"
      },
      {
        "key": "D",
        "text": "Microsoft Cloud Security Benchmark (MCSB)"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Phân tích đường dẫn tấn công Microsoft Defender for Cloud phụ thuộc vào dữ liệu bảo mật theo ngữ cảnh bao gồm thông tin về lỗ hổng bảo mật. Việc kích hoạt chức năng quét không cần tác nhân sẽ cung cấp dữ liệu đánh giá lỗ hổng cho máy ảo Azure, phiên bản AWS EC2 và phiên bản điện toán GCP, hỗ trợ phân tích đường dẫn tấn công trên môi trường nhiều đám mây được kết nối.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 279",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/279-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-280",
    "questionNumber": 280,
    "text": "You need to recommend a connectivity strategy for App Service web apps. The solution must satisfy the landing-zone requirements.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Tích hợp mạng ảo cung cấp cho ứng dụng web Dịch vụ ứng dụng quyền truy cập từ bên ngoài vào các tài nguyên trong mạng ảo, bao gồm cả máy ảo. Private Endpoint cung cấp quyền truy cập nội bộ, riêng tư vào ứng dụng Dịch vụ ứng dụng từ các tài nguyên trong mạng ảo. Điểm cuối dịch vụ có quyền truy cập an toàn từ VNet đến các dịch vụ Azure PaaS được hỗ trợ nhưng không cung cấp tích hợp bên ngoài Dịch vụ ứng dụng được yêu cầu ở đây.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 280",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/280-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-281",
    "questionNumber": 281,
    "text": "You have a Microsoft 365 subscription.  \n  \nYou have a Conditional Access policy configured with these settings:  \n  \n- **Name:** Policy 1  \n- **Assignments**  \n  - **Users:**  \n    - **Include:** All users  \n  - **Target resources:**  \n    - **Include:** Select apps; Office 365  \n  - **Network:**  \n    - **Include:** Any network or location  \n    - **Exclude:** Selected networks and locations; Site1  \n  - **Access controls:**  \n    - **Grant:** Require multifactor authentication, Require Hybrid Microsoft Entra joined device  \n  \nYou plan to implement the Zero Trust Rapid Modernization Plan (RaMP).  \n  \nYou need to make sure that Policy1 aligns with RaMP best-practice recommendations.  \n  \nWhich setting should you change?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Include: Any network or location"
      },
      {
        "key": "B",
        "text": "Exclude: Selected networks and locations; Site1"
      },
      {
        "key": "C",
        "text": "Grant Require Hybrid Microsoft Entra joined device"
      },
      {
        "key": "D",
        "text": "Grant: Require multifactor authentication"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "RaMP yêu cầu xác thực rõ ràng độ tin cậy của người dùng và thiết bị trước khi truy cập trên cả mạng công cộng và mạng riêng. Một loại trừ cho Site1 ngăn chặn việc đánh giá các yêu cầu Truy cập có điều kiện cho các kết nối từ vị trí đó, tạo ra sự tin cậy ngầm dựa trên vị trí mạng. Việc loại trừ Site1 phải được loại bỏ hoặc thay đổi để các biện pháp kiểm soát cũng được áp dụng ở đó.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 281",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/281-design-solutions-that-align-with-security-best-practices-and",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-282",
    "questionNumber": 282,
    "text": "You have an Azure subscription.  \n  \nYou have an on-premises datacenter that contains 20 servers running Windows Server. Every server is onboarded to Azure Arc and protected by using Microsoft Defender for Servers Plan 1.  \n  \nYou have a Microsoft 365 subscription.  \n  \nYou need to recommend a solution for identifying the servers that have outdated hardware drivers or firmware.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Change all the servers to Microsoft Defender for Servers Plan 2."
      },
      {
        "key": "B",
        "text": "Add the Microsoft Intune Suite add-on."
      },
      {
        "key": "C",
        "text": "Onboard all the servers to Azure Update Manager."
      },
      {
        "key": "D",
        "text": "Add Microsoft Defender Vulnerability Management add-ons."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Đánh giá phần cứng và chương trình cơ sở của Microsoft Defender Vulnerability Management kiểm kê phần cứng máy chủ, bộ xử lý và BIOS, xác định các điểm yếu liên quan và có thể đưa ra các đề xuất cập nhật chương trình cơ sở. Đánh giá này là một chức năng cao cấp có sẵn trong Bộ bảo vệ Microsoft dành cho Máy chủ Gói 2, không phải Gói 1.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 282",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/282-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-283",
    "questionNumber": 283,
    "text": "Your company uses Microsoft Defender for Cloud and Microsoft Sentinel. The company is planning an application with the architecture shown in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783809474841-f6t7jow2.jpg)  \n  \nYou are designing logging and auditing for the proposed architecture. The solution must meet these requirements:  \n  \n- Integrate Azure Web Application Firewall (WAF) logs with Microsoft Sentinel.  \n- Use Defender for Cloud to review alerts from the virtual machines.  \n  \nWhat should the solution include?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Microsoft Sentinel sử dụng trình kết nối dữ liệu Tường lửa ứng dụng web Azure để nhập và phân tích dữ liệu nhật ký WAF. Tác nhân Log Analytics thu thập các sự kiện bảo mật VM cho mô hình giám sát Defender for Cloud cũ, cho phép Defender for Cloud phân tích dữ liệu và đưa ra cảnh báo bảo mật. Mặc dù tác nhân đó đã ngừng hoạt động để triển khai mới nhưng đây vẫn là tùy chọn có thể áp dụng trong số những tác nhân được cung cấp.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783809474841-f6t7jow2.jpg",
    "sourceTitle": "Examcademy SC-100 Question 283",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/283-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-284",
    "questionNumber": 284,
    "text": "You have an Azure subscription containing 200 virtual machines running Windows Server 2022 that are protected by Microsoft Defender for Servers Plan 1. You also have an Amazon Web Services (AWS) subscription.  \n  \nYou plan to deploy 100 Windows Server 2022 virtual machines to the AWS subscription.  \n  \nYou need to recommend an agent to deploy on the virtual machines in the AWS subscription. The solution must meet these requirements:  \n  \n- Provide consistent workload protection across all cloud platforms.  \n- Minimize the number of agents deployed on each virtual machine.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "the log Analytics agent"
      },
      {
        "key": "B",
        "text": "the Azure Connected Machine agent"
      },
      {
        "key": "C",
        "text": "the Microsoft Defender for Endpoint agent"
      },
      {
        "key": "D",
        "text": "the Azure Monitor Agent"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Bộ bảo vệ Microsoft dành cho Máy chủ Gói 1 tập trung vào khả năng phản hồi và phát hiện điểm cuối được cung cấp thông qua Bộ bảo vệ Microsoft dành cho Điểm cuối. Máy ảo AWS có thể được tích hợp trực tiếp vào Defender for Servers Plan 1 bằng cách sử dụng tác nhân Microsoft Defender for Endpoint, cung cấp khả năng bảo vệ nhất quán với một tác nhân duy nhất trên mỗi máy chủ.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 284",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/284-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-285",
    "questionNumber": 285,
    "text": "You have a Microsoft Entra tenant named contoso.com.  \n  \nAn external partner has a Microsoft Entra tenant named fabnkam.com.  \n  \nYou need to recommend an identity-governance solution for contoso.com that meets these requirements:  \n  \n- Enables users in contoso.com and fabrikam.com to communicate by using shared Microsoft Teams channels  \n- Manages access to shared Teams channels in contoso.com by using groups in fabrikam.com  \n- Supports single sign-on (SSO)  \n- Minimizes administrative effort  \n- Maximizes security  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Cross-tenant synchronization"
      },
      {
        "key": "B",
        "text": "Microsoft Entra B2B collaboration"
      },
      {
        "key": "C",
        "text": "B2B direct connect"
      },
      {
        "key": "D",
        "text": "Microsoft Entra Connect Sync"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Kết nối trực tiếp Microsoft Entra B2B được thiết kế để cộng tác thông qua các kênh Microsoft Teams được chia sẻ giữa các đối tượng thuê. Nó cho phép người dùng bên ngoài xác thực bằng danh tính người thuê nhà của họ, hỗ trợ SSO và kiểm soát quyền truy cập của nhiều người thuê, đồng thời tránh việc tạo và quản lý tài khoản khách trong đối tượng thuê tài nguyên.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 285",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/285-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-286",
    "questionNumber": 286,
    "text": "You have an Azure subscription containing an Azure key vault named Vault1.  \n  \nYou plan to deploy multiple virtual machines to host a custom app named App1. App1 will use secrets stored in Vault1, and the virtual machines will be redeployed regularly according to App1 usage demands.  \n  \nRecommend a solution that enables App1 to access the secrets in Vault1 while meeting these requirements:  \n  \n- Minimize the number of security principals that can access Vault1.  \n- Minimize sensitive-data storage on the virtual machines.  \n- Minimize administrative effort.  \n  \nWhich endpoint type and identity type should App1 use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "user-assigned managed identity có thể được chia sẻ bởi nhiều máy ảo và có vòng đời độc lập, do đó, một danh tính có thể được cấp quyền truy cập Key Vault ngay cả khi máy ảo được triển khai lại. Danh tính được quản lý sẽ loại bỏ thông tin xác thực do ứng dụng quản lý. Mã trên máy ảo Azure yêu cầu mã thông báo nhận dạng được quản lý từ điểm cuối Dịch vụ siêu dữ liệu phiên bản Azure (IMDS) cục bộ.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 286",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/286-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-287",
    "questionNumber": 287,
    "text": "Your company wants to optimize investigations of ransomware incidents.  \n  \nYou need to recommend a ransomware-incident investigation plan based on the Microsoft Detection and Response Team (DART) approach.  \n  \nWhich three actions should the plan perform in sequence?",
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
        "text": "Identify which line-of-business (LOB) apps are unavailable due to a ransomware incident."
      },
      {
        "key": "B",
        "text": "Identify the compromise recovery process."
      },
      {
        "key": "C",
        "text": "Implement a comprehensive strategy to reduce the risk of privileged access compromise."
      },
      {
        "key": "D",
        "text": "Assess the current situation and identify the scope."
      },
      {
        "key": "E",
        "text": "Update organizational processes to manage major ransomware events and streamline outsourcing to avoid friction."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Identify which line-of-business (LOB) apps are unavailable due to a ransomware incident."
      },
      {
        "key": "B",
        "text": "Identify the compromise recovery process."
      },
      {
        "key": "C",
        "text": "Implement a comprehensive strategy to reduce the risk of privileged access compromise."
      },
      {
        "key": "D",
        "text": "Assess the current situation and identify the scope."
      },
      {
        "key": "E",
        "text": "Update organizational processes to manage major ransomware events and streamline outsourcing to avoid friction."
      }
    ],
    "correctAnswers": [
      "step1=D",
      "step2=A",
      "step3=B"
    ],
    "explanation": "Phương pháp tiếp cận ransomware DART của Microsoft Incident Response trước tiên sẽ đánh giá tình hình hiện tại để hiểu phạm vi. Tiếp theo, nó xác định các ứng dụng trong ngành kinh doanh bị ảnh hưởng để hệ thống có thể được đưa trở lại trực tuyến. Cuối cùng, nó xác định quy trình khôi phục thỏa hiệp để loại bỏ tác nhân đe dọa khỏi môi trường. Tăng cường quyền truy cập đặc quyền và cập nhật quy trình tổ chức là các biện pháp phục hồi rộng hơn thay vì ba bước điều tra này.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 287",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/287-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-288",
    "questionNumber": 288,
    "text": "You have an Azure subscription.  \n  \nYou plan to deploy several containerized, microservice-based applications to Azure Kubernetes Service (AKS).  \n  \nYou need to recommend a solution that meets these requirements:  \n  \n- Manages secrets  \n- Provides encryption  \n- Secures service-to-service communication by using mTLS encryption  \n- Minimizes administrative effort  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Flux"
      },
      {
        "key": "B",
        "text": "Envoy"
      },
      {
        "key": "C",
        "text": "Dapr"
      },
      {
        "key": "D",
        "text": "Istio"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Tiện ích mở rộng Dapr được quản lý cho AKS cung cấp API để quản lý và mã hóa bí mật, bảo mật liên lạc giữa các dịch vụ với mTLS và giảm bớt việc quản trị bằng cách loại bỏ việc cài đặt và quản lý thủ công thời gian chạy Dapr. [Dapr Extension for AKS](https://learn.microsoft.com/en-us/azure/aks/dapr-overview)",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 288",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/288-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-289",
    "questionNumber": 289,
    "text": "You have an Azure subscription containing a resource group named RG1. RG1 includes multiple Azure Files shares.  \n  \nYou need to recommend a backup solution for the shares that meets these requirements:  \n  \n- Prevent deletion of backups and of the vault that stores them.  \n- Prevent privilege-escalation attacks against the backup solution.  \n- Prevent changes to the backup retention period.  \n  \nWhich three actions should be performed, in sequence?",
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
        "text": "Lock immutability for the vault."
      },
      {
        "key": "B",
        "text": "Enable vault immutability."
      },
      {
        "key": "C",
        "text": "Create a Recovery Services vault."
      },
      {
        "key": "D",
        "text": "From RG1, create a resource lock."
      },
      {
        "key": "E",
        "text": "Create an Azure Backup vault."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Lock immutability for the vault."
      },
      {
        "key": "B",
        "text": "Enable vault immutability."
      },
      {
        "key": "C",
        "text": "Create a Recovery Services vault."
      },
      {
        "key": "D",
        "text": "From RG1, create a resource lock."
      },
      {
        "key": "E",
        "text": "Create an Azure Backup vault."
      }
    ],
    "correctAnswers": [
      "step1=C",
      "step2=B",
      "step3=A"
    ],
    "explanation": "Bản sao lưu Azure Files sử dụng Recovery Services vault. Việc kích hoạt tính bất biến của vault sẽ ngăn chặn các hoạt động mất mát dự phòng và giảm lưu giữ; việc khóa nó làm cho cài đặt không thể đảo ngược và bảo vệ khỏi các tác nhân độc hại có đặc quyền vô hiệu hóa tính bất biến để xóa hoặc sửa đổi bản sao lưu. Khóa tài nguyên trên RG1 không thể thay thế cho tính năng bảo vệ kho tiền bất biến.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 289",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/289-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-290",
    "questionNumber": 290,
    "text": "A customer has both a Microsoft 365 subscription and an Azure subscription. The customer’s devices run Windows, iOS, Android, or macOS. The Windows devices are deployed both on-premises and in Azure.  \n  \nYou need to design a security solution that assesses whether every device complies with the customer’s compliance rules. What should the solution include?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Defender for Endpoint"
      },
      {
        "key": "B",
        "text": "Microsoft Endpoint Manager"
      },
      {
        "key": "C",
        "text": "Microsoft Information Protection"
      },
      {
        "key": "D",
        "text": "Microsoft Sentinel"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Microsoft Endpoint Manager, thông qua các chức năng Intune, cung cấp các chính sách tuân thủ thiết bị và quản lý thiết bị đa nền tảng cho Windows, iOS, Android và macOS. Các chính sách này đánh giá xem thiết bị có đáp ứng các yêu cầu đã xác định của tổ chức hay không và báo cáo trạng thái tuân thủ của chúng.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 290",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/290-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-291",
    "questionNumber": 291,
    "text": "You are designing a new Azure environment that follows the security best practices in the Microsoft Cloud Adoption Framework for Azure. The environment will have one subscription for shared infrastructure components and three distinct subscriptions for applications.  \n  \nYou need to recommend a deployment solution that includes network security groups (NSGs), Azure Firewall, Azure Key Vault, and Azure Bastion. The solution must reduce deployment effort and adhere to Microsoft Cloud Adoption Framework for Azure security best practices.  \n  \nWhat should be included in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "the Azure landing zone accelerator"
      },
      {
        "key": "B",
        "text": "the Azure Well-Architected Framework"
      },
      {
        "key": "C",
        "text": "Azure Security Benchmark v3"
      },
      {
        "key": "D",
        "text": "Azure Advisor"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Bộ tăng tốc vùng đích Azure cung cấp cách triển khai có thể triển khai và có ý kiến ​​của kiến ​​trúc tham chiếu vùng đích Azure. Nó thiết lập các dịch vụ nền tảng tập trung cho cơ sở hạ tầng dùng chung và vùng đích ứng dụng được quản lý, giúp triển khai các biện pháp kiểm soát mạng và bảo mật một cách nhất quán trên các gói đăng ký với ít nỗ lực triển khai hơn.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 291",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/291-design-solutions-that-align-with-security-best-practices-and",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-292",
    "questionNumber": 292,
    "text": "You have an operational model based on the Microsoft Cloud Adoption Framework for Azure.  \n  \nYou need to recommend a solution that concentrates on cloud-centric control areas for protecting resources such as endpoints, databases, files, and storage accounts.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "business resilience"
      },
      {
        "key": "B",
        "text": "modem access control"
      },
      {
        "key": "C",
        "text": "network isolation"
      },
      {
        "key": "D",
        "text": "security baselines in the Microsoft Cloud Security Benchmark"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Đường cơ sở bảo mật của Microsoft Cloud Security Benchmark là hướng dẫn được tiêu chuẩn hóa, dành riêng cho từng dịch vụ, mô tả các chức năng bảo mật sẵn có và cấu hình được đề xuất. Chúng tập trung vào các khu vực kiểm soát tập trung vào đám mây và hỗ trợ bảo vệ khối lượng công việc, dữ liệu và dịch vụ của Azure, bao gồm các điểm cuối và tài nguyên liên quan đến lưu trữ.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 292",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/292-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-293",
    "questionNumber": 293,
    "text": "You have several Azure subscriptions, each containing multiple resource groups.  \n  \nYou need to identify the privileged role assignments in every subscription and the related security risks. The solution must minimize administrative effort.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "access reviews in Privileged Identity Management (PIM)"
      },
      {
        "key": "B",
        "text": "access reviews in Microsoft Entra ID Identity Governance"
      },
      {
        "key": "C",
        "text": "Microsoft Defender External Attack Surface Management (Defender EASM) discovery"
      },
      {
        "key": "D",
        "text": "the Analytics dashboard in Microsoft Entra Permissions Management"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Quản lý quyền Microsoft Entra là giải pháp CIEM tập trung phân tích các quyền lợi trên đám mây và nêu bật các quyền quá mức hoặc có rủi ro cao cũng như quyền truy cập đặc quyền trên các môi trường đám mây. Bảng điều khiển Analytics của nó cung cấp khả năng hiển thị này trên các đăng ký Azure với ít nỗ lực thủ công hơn so với việc định cấu hình và vận hành các đánh giá quyền truy cập riêng biệt cho từng đăng ký.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 293",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/293-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-294",
    "questionNumber": 294,
    "text": "The network contains an Active Directory Domain Services (AD DS) domain.  \n  \nYou need to ensure that the domain’s built-in Administrator account can be used only for interactive sign-ins to domain controllers.  \n  \nWhat should you configure?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "the Protected Users group"
      },
      {
        "key": "B",
        "text": "authentication policies"
      },
      {
        "key": "C",
        "text": "the User Rights Assignment security policy settings"
      },
      {
        "key": "D",
        "text": "an authentication policy silo"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Cài đặt Gán quyền người dùng trong Đối tượng chính sách nhóm được liên kết với OU của bộ điều khiển miền có thể từ chối đăng nhập mạng, lô, dịch vụ và Remote Desktop của tài khoản Quản trị viên tích hợp trong khi vẫn duy trì khả năng đăng nhập tương tác cục bộ trên bộ điều khiển miền.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 294",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/294-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-295",
    "questionNumber": 295,
    "text": "You have a multicloud environment containing an Azure subscription and an Amazon Web Services (AWS) subscription.  \n  \nYou need to design a solution that meets these requirements:  \n  \n- Dynamically discover the permissions granted to and used by each user.  \n- Generate an aggregated metric that evaluates the risk level associated with unused or excessive permissions.  \n- Automatically revoke permissions unused for 90 days.  \n- Support granting on-demand permissions for limited periods.  \n- Minimize administrative effort.  \n  \nWhich cloud service should you use for each subscription?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Quản lý quyền Microsoft Entra là giải pháp CIEM cung cấp khả năng hiển thị thống nhất trên Azure, AWS và GCP, do đó, một dịch vụ duy nhất sẽ đáp ứng cả đăng ký và giảm thiểu nỗ lực quản trị. Nó phát hiện các quyền được cấp và thực sự được sử dụng bởi mỗi danh tính, tạo ra Chỉ số cấp phép (một thước đo tổng hợp về rủi ro từ các quyền không được sử dụng hoặc quá mức), có thể tự động xóa các quyền không được sử dụng trong 90 ngày và cung cấp các quyền theo yêu cầu trong thời gian giới hạn. Quản lý danh tính đặc quyền (PIM) chỉ dành cho Azure/Entra và mặc dù nó cấp các vai trò đúng lúc nhưng nó không phát hiện các quyền đã sử dụng, không tính toán thước đo rủi ro về quyền và không thể tự động thu hồi các quyền không sử dụng trong 90 ngày, do đó, nó không đáp ứng các yêu cầu đối với khoảng trống Azure. Bộ bảo vệ cho Đám mây (bảo mật tư thế/khối lượng công việc) và ID bên ngoài Entra (danh tính B2B/B2C) không giải quyết được nhu cầu quản lý quyền nào trong số này.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 295",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/295-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-296",
    "questionNumber": 296,
    "text": "Your company has a Microsoft 365 ES subscription, an Azure subscription, on-premises applications, and Active Directory Domain Services (AD DS).  \n  \nRecommend an identity-security strategy that meets these requirements:  \n  \n- Customers must be able to use Facebook credentials to authenticate to an Azure App Service website.  \n- Partner companies must be able to access the Microsoft SharePoint Online sites for the projects to which they are assigned.  \n  \nThe solution must minimize deployment of additional infrastructure components.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Azure AD B2C hỗ trợ người tiêu dùng đăng nhập thông qua các nhà cung cấp danh tính xã hội, bao gồm cả Facebook. Các gói quyền truy cập quản lý quyền và cộng tác Azure AD B2B quản lý quyền truy cập của đối tác bên ngoài vào các trang dự án SharePoint Online đã chọn. Các lựa chọn Azure AD Connect và AD FS giải quyết vấn đề xác thực lực lượng lao động bằng AD DS tại chỗ và yêu cầu kết nối hoặc cơ sở hạ tầng bổ sung; họ không đáp ứng yêu cầu đăng nhập của người tiêu dùng trên mạng xã hội.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 296",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/296-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-297",
    "questionNumber": 297,
    "text": "You need to recommend a multitenant and hybrid security solution that meets the business and hybrid requirements.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Azure Lighthouse cho phép đối tượng thuê quản lý quản lý các đăng ký và tài nguyên Azure được ủy quyền trên khắp các ranh giới của đối tượng thuê bằng cách sử dụng Azure RBAC, tránh chi phí quản trị cho tài khoản khách. Azure Arc dự án các máy chủ tại chỗ và cơ sở hạ tầng khác vào Azure để có thể áp dụng Chính sách Azure, theo dõi hàng tồn kho/thay đổi và quản lý cập nhật.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 297",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/297-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-298",
    "questionNumber": 298,
    "text": "Your company has an Azure subscription that uses Microsoft Defender for Cloud.  \n  \nThe company enters into a contract with the United States government.  \n  \nYou need to review the existing subscription for NIST 800-53 compliance.  \n  \nWhat should you do first?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From Azure Policy, assign a built-in initiative that has a scope of the subscription."
      },
      {
        "key": "B",
        "text": "From Azure Policy, assign a built-in policy definition that has a scope of the subscription."
      },
      {
        "key": "C",
        "text": "From Defender for Cloud, review the Azure security baseline for audit report."
      },
      {
        "key": "D",
        "text": "From Defender for Cloud, enable Defender for Cloud plans."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Microsoft Defender for Cloud triển khai các tiêu chuẩn tuân thủ quy định, bao gồm NIST SP 800-53, thông qua các sáng kiến ​​Chính sách Azure. Việc chỉ định sáng kiến ​​tích hợp có thể áp dụng cho gói đăng ký sẽ liên tục đánh giá mức độ tuân thủ đối với gói đăng ký đó, sau đó trạng thái của gói đăng ký đó có thể được xem xét trong bảng thông tin tuân thủ Quy định.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 298",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/298-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-299",
    "questionNumber": 299,
    "text": "Your company has a Microsoft 365 E5 subscription.  \n  \nUsers rely on Microsoft Teams, Exchange Online, SharePoint Online, and OneDrive to share and collaborate.  \n  \nThe company identifies protected health information (PHI) in stored documents and communications.  \n  \nWhat should you recommend to prevent PHI from being shared outside the company?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "sensitivity label policies"
      },
      {
        "key": "B",
        "text": "data loss prevention (DLP) policies"
      },
      {
        "key": "C",
        "text": "insider risk management policies"
      },
      {
        "key": "D",
        "text": "retention policies"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Chính sách ngăn ngừa mất dữ liệu (DLP) của Microsoft Purview có thể phát hiện PHI thông qua các loại thông tin nhạy cảm và thực thi các hành động chặn chia sẻ nội dung với những người bên ngoài tổ chức. DLP hỗ trợ các vị trí Microsoft 365 có liên quan, bao gồm Exchange, SharePoint, OneDrive và Teams.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 299",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/299-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-300",
    "questionNumber": 300,
    "text": "Your organization has Microsoft 365 E5 licenses and Azure subscriptions.  \n  \nIt plans to automatically label sensitive data stored in the following locations:  \n  \n- Microsoft SharePoint Online  \n- Microsoft Exchange Online  \n- Microsoft Teams  \n  \nYou need to recommend a strategy to identify and protect sensitive data. Which scope should be recommended for the sensitivity-label policies?  \n  \nEach scope can be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "sharepoint_online",
        "text": "SharePoint Online:",
        "correctAnswer": "A"
      },
      {
        "id": "microsoft_teams",
        "text": "Microsoft Teams:",
        "correctAnswer": "B"
      },
      {
        "id": "exchange_online",
        "text": "Exchange Online:",
        "correctAnswer": "A"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Files and emails"
      },
      {
        "key": "B",
        "text": "Groups and sites"
      },
      {
        "key": "C",
        "text": "Schematized data assets"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Files and emails"
      },
      {
        "key": "B",
        "text": "Groups and sites"
      },
      {
        "key": "C",
        "text": "Schematized data assets"
      }
    ],
    "correctAnswers": [
      "sharepoint_online=A",
      "microsoft_teams=B",
      "exchange_online=A"
    ],
    "explanation": "Phạm vi Tệp và email hỗ trợ tự động áp dụng nhãn nhạy cảm cho tài liệu trong SharePoint Online và email Exchange Online. Phạm vi Nhóm và site được dùng để bảo vệ các vùng chứa cộng tác, bao gồm Microsoft Teams, nhóm Microsoft 365 và site SharePoint. Nội dung dữ liệu được sơ đồ hóa áp dụng cho nội dung dữ liệu có cấu trúc được hỗ trợ thay vì các khối lượng công việc Microsoft 365 này.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 300",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/300-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-301",
    "questionNumber": 301,
    "text": "You open Microsoft Defender for Cloud as displayed in the following exhibit.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783809496615-jc1m1tz0.jpg)  \n  \nUse the drop-down menus to choose the answer that completes each statement according to the information in the graphic.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Các nhóm bảo mật mạng hạn chế lưu lượng truy cập vào và ra được phép đến các máy ảo và mạng con, giải quyết các truy cập mạng trái phép. Bộ bảo vệ dành cho Máy chủ bao gồm các khả năng tích hợp của Bộ bảo vệ cho điểm cuối và bảo vệ điểm cuối, nhằm giải quyết vấn đề kiểm soát bảo vệ điểm cuối.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783809496615-jc1m1tz0.jpg",
    "sourceTitle": "Examcademy SC-100 Question 301",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/301-design-solutions-that-align-with-security-best-practices-and",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-302",
    "questionNumber": 302,
    "text": "You have an Azure subscription with 100 virtual machines, accessed by using Azure Bastion.  \n  \nYou need to recommend a solution that ensures only particular users in particular locations can access the virtual machines. The solution must meet these requirements:  \n  \n- Restrict virtual-machine access by originating IP address or connection request by using just-in-time (JIT) VM access network-based controls.  \n- Restrict virtual-machine access through role-based access control (RBAC) role assignments by using JIT VM access authorization controls.  \n  \nWhich Microsoft cloud services should be included in the recommendation?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Microsoft Defender for Cloud cung cấp quyền truy cập JIT VM và có thể giới hạn quyền truy cập tạm thời vào các địa chỉ IP nguồn được chỉ định. Microsoft Entra PIM cung cấp các bài tập Azure RBAC đủ điều kiện, có giới hạn thời gian mà người dùng kích hoạt đúng lúc.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 302",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/302-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-303",
    "questionNumber": 303,
    "text": "You have a Microsoft 365 subscription that includes a group named Group1. The subscription has 1,000 Windows devices joined to a Microsoft Entra tenant and managed by Microsoft Intune. All users sign in to the devices using standard user accounts.  \n  \nYou plan to deploy a new app named App1 to the members of Group1. Group1 members must have administrative rights to install new versions of App1.  \n  \nYou need to ensure that Group1 members can install new versions of App1. The solution must adhere to Zero Trust principles.  \n  \nWhat should you implement?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Entra Privileged Identity Management (PIM)"
      },
      {
        "key": "B",
        "text": "Microsoft Intune Endpoint Privilege Management (EPM)"
      },
      {
        "key": "C",
        "text": "Microsoft Local Administrator Password Solution (Microsoft LAPS)"
      },
      {
        "key": "D",
        "text": "Microsoft Entra entitlement management"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Quản lý đặc quyền điểm cuối Microsoft Intune (EPM) cho phép người dùng vẫn là người dùng tiêu chuẩn trong khi cấp mức nâng cấp tạm thời cho các ứng dụng và trình cài đặt được CNTT phê duyệt, bao gồm cả các bản cài đặt ứng dụng. Quy tắc nâng cao có thể đưa ra phạm vi phê duyệt cho App1, tránh quyền quản trị viên cục bộ vĩnh viễn và thực thi đặc quyền tối thiểu phù hợp với Zero Trust.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 303",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/303-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-304",
    "questionNumber": 304,
    "text": "You have an Azure subscription containing a virtual network named VNet1. VNet1 includes a 10-node virtual machine scale set hosting a web search app named App1. Customers access App1 from the internet, and the nodes make outbound HTTP and HTTPS connections to the internet.  \n  \nYou need to recommend a network security solution for App1 that meets these requirements:  \n  \n- Block inbound connections to App1 that contain security threats defined by the Open Web Application Security Project (OWASP) Core Rule Set (CRS).  \n- Block outbound HTTP and HTTPS connections from the virtual machine scale set that contain security threats identified by the Microsoft Defender Threat Intelligence (Defender TI) feed.  \n  \nWhat should the recommendation include?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Tường lửa ứng dụng web Azure (WAF) bảo vệ các yêu cầu web HTTP/S gửi đến bằng các quy tắc được quản lý dựa trên Bộ quy tắc cốt lõi của OWASP. Azure Firewall có thể áp dụng tính năng lọc Thông tin về mối đe dọa của Microsoft ở chế độ cảnh báo và từ chối để chặn lưu lượng truy cập đến và đi từ các địa chỉ IP, miền và URL độc hại đã biết.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 304",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/304-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-305",
    "questionNumber": 305,
    "text": "You have an on-premises app named App1.  \n  \nRemote users access App1 by using VPN connections.  \n  \nYou have a third-party software as a service (SaaS) app named App2.  \n  \nYou need to deploy Global Secure Access to manage access to App1 and App2.  \n  \nWhat should you use for each app?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Entra Private Access for App2 and Microsoft Entra Internet Access for App1"
      },
      {
        "key": "B",
        "text": "Microsoft Entra Private Access for App1 and Microsoft Entra Internet Access for App2"
      },
      {
        "key": "C",
        "text": "Microsoft Entra Internet Access for App1 and App2"
      },
      {
        "key": "D",
        "text": "Microsoft Entra Private Access for App1 and App2"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Microsoft Entra Private Access cung cấp quyền truy cập Zero Trust vào các tài nguyên riêng tư của công ty, bao gồm các ứng dụng tại chỗ mà không yêu cầu VPN kế thừa. Microsoft Entra Internet Access đảm bảo quyền truy cập vào Internet và các ứng dụng SaaS thông qua cổng web bảo mật dựa trên danh tính.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 305",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/305-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-306",
    "questionNumber": 306,
    "text": "You are designing new Azure applications using Microsoft Cloud Adoption Framework for Azure security best practices. Each application will be deployed into a dedicated, secure environment containing isolated instances of:  \n  \n- Azure Key Vault  \n- Virtual networks  \n- An Azure subscription  \n- Azure Policy assignments  \n- Network security groups (NSGs)  \n- Role-based access control (RBAC) assignments  \n  \nRecommend the environment type and deployment module. The solution must use infrastructure as code (IaC) to deploy every application environment.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Vùng đích Azure là môi trường Azure được quản lý và tiêu chuẩn hóa, cung cấp tổ chức đăng ký, quản lý danh tính và quyền truy cập, cấu trúc liên kết và kết nối mạng, bảo mật và quản trị. Bicept và Terraform là các tùy chọn IaC được đề xuất để triển khai vùng hạ cánh Azure theo mô-đun; họ có thể triển khai các đăng ký cần thiết, chính sách/bài tập RBAC, mạng, NSG và tài nguyên Key Vault.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 306",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/306-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-307",
    "questionNumber": 307,
    "text": "Your company has offices in New York City and Los Angeles.  \n  \nThe New York City office hosts an on-premises app named App1.  \n  \nYou have an Azure subscription linked to a Microsoft Entra tenant hosted in North America.  \n  \nYou plan to manage access to App1 for Los Angeles office users by using Microsoft Entra Private Access. You will deploy Private Access by taking these actions:  \n  \n- Provision an ExpressRoute circuit from the New York City office to the nearest peering location.  \n- Create an Azure virtual network named VNet1 in the East US Azure region.  \n- Deploy a Microsoft Entra application proxy connector to VNet1.  \n  \nYou need to optimize the network for this planned deployment. The solution must:  \n  \n- Maximize redundancy for connectivity to App1.  \n- Minimize network latency when accessing App1.  \n- Minimize complexity.  \n- Minimize costs.  \n  \nWhat should the solution include?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Các trình kết nối trong cùng một nhóm trình kết nối hoạt động như một đơn vị cân bằng tải và có tính sẵn sàng cao; Microsoft khuyến nghị ít nhất hai trình kết nối trong mỗi nhóm để có tính sẵn sàng cao. Tính năng ngang hàng riêng tư của Azure kết nối mạng tại chỗ với các tài nguyên trong Azure virtual network, do đó, nó cung cấp đường dẫn riêng tư cần thiết giữa trình kết nối của VNet1 và App1. ExpressRoute Premium chỉ cần thiết cho kết nối giữa các khu vực địa chính trị và không bắt buộc ở đây.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 307",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/307-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-308",
    "questionNumber": 308,
    "text": "You have a Microsoft 365 subscription containing 1,000 Microsoft Exchange Online mailboxes.  \n  \nInbound internet email is scanned for security threats by a third-party cloud service.  \n  \nYou are assessing whether to replace the third-party service with Microsoft Defender for Office 365.  \n  \nWhat should you change to ensure that all incoming email is scanned only by Defender for Office 365?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "the accepted domains in Exchange Online"
      },
      {
        "key": "B",
        "text": "the DNS records"
      },
      {
        "key": "C",
        "text": "the Exchange Online transport rule"
      },
      {
        "key": "D",
        "text": "the Exchange Online connectors"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Để ngừng sử dụng dịch vụ bảo vệ email không phải của Microsoft và đưa thư Internet trực tiếp vào Microsoft 365 dành cho bảo vệ của Bộ bảo vệ dành cho Office 365, bản ghi MX của miền email phải trỏ tới Microsoft 365. Bản ghi MX được đặt cấu hình trong DNS công cộng.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 308",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/308-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-309",
    "questionNumber": 309,
    "text": "You have an Azure environment containing multiple workloads deployed across multiple subscriptions.  \n  \nRecommend a solution to assess and improve the workloads’ security posture. The solution must meet these requirements:  \n  \n- Use the Microsoft Cloud Adoption Framework for Azure to evaluate compliance with cloud governance policies.  \n- Use the Azure Well-Architected Framework to secure individual workloads.  \n  \nEach recommendation may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "caf_governance",
        "text": "Use the Microsoft Cloud Adoption Framework for Azure to evaluate compliance with cloud governance policies:",
        "correctAnswer": "C"
      },
      {
        "id": "waf_workloads",
        "text": "Use the Azure Well-Architected Framework to secure individual workloads:",
        "correctAnswer": "A"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Azure Advisor"
      },
      {
        "key": "B",
        "text": "Microsoft cloud security benchmark (MCSB)"
      },
      {
        "key": "C",
        "text": "Microsoft Defender for Cloud"
      },
      {
        "key": "D",
        "text": "Microsoft Defender Vulnerability"
      },
      {
        "key": "E",
        "text": "Microsoft Intune"
      },
      {
        "key": "F",
        "text": "Microsoft Sentinel"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Azure Advisor"
      },
      {
        "key": "B",
        "text": "Microsoft cloud security benchmark (MCSB)"
      },
      {
        "key": "C",
        "text": "Microsoft Defender for Cloud"
      },
      {
        "key": "D",
        "text": "Microsoft Defender Vulnerability"
      },
      {
        "key": "E",
        "text": "Microsoft Intune"
      },
      {
        "key": "F",
        "text": "Microsoft Sentinel"
      }
    ],
    "correctAnswers": [
      "caf_governance=C",
      "waf_workloads=A"
    ],
    "explanation": "Microsoft Defender for Cloud cung cấp khả năng quản lý trạng thái bảo mật đám mây tập trung và đánh giá tuân thủ quy định trên các đăng ký Azure. Nó đánh giá các tài nguyên theo các tiêu chuẩn bảo mật, xác định sự không tuân thủ và đưa ra các đề xuất khắc phục, giúp nó phù hợp với việc tuân thủ chính sách quản trị. Azure Advisor tích hợp các trụ cột Azure Well-Architected Framework khi phân tích cấu hình tài nguyên và đo lường mức sử dụng từ xa, đưa ra các đề xuất để cải thiện trạng thái bảo mật của khối lượng công việc riêng lẻ.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 309",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/309-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-310",
    "questionNumber": 310,
    "text": "You have an on-premises server running Windows Server that hosts a Microsoft SQL Server database named DB1.  \n  \nYou plan to migrate DB1 to Azure.  \n  \nYou need to recommend an encrypted Azure database solution that satisfies these requirements:  \n  \n- Minimizes the risk of malware using elevated privileges to access sensitive data  \n- Prevents database administrators from accessing sensitive data  \n- Enables pattern matching for server-side database operations  \n- Supports Microsoft Azure Attestation  \n- Uses hardware-based encryption  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "SQL Server on Azure Virtual Machines with virtualization-based security (VBS) enclaves"
      },
      {
        "key": "B",
        "text": "Azure SQL Database with virtualization-based security (VBS) enclaves"
      },
      {
        "key": "C",
        "text": "Azure SQL Managed Instance that has Always Encrypted configured"
      },
      {
        "key": "D",
        "text": "Azure SQL Database with Intel Software Guard Extensions (Intel SGX) enclaves"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Azure SQL Database với các vùng bao bọc Intel SGX hỗ trợ Luôn mã hóa với các vùng bảo mật, cho phép các truy vấn bí mật phong phú hơn như khớp mẫu trong khi vẫn giữ cho văn bản gốc không khả dụng đối với những quản trị viên cơ sở dữ liệu không nắm giữ khóa mã hóa. Intel SGX là môi trường thực thi đáng tin cậy dựa trên phần cứng và Azure SQL Database sử dụng Chứng thực Microsoft Azure để chứng thực vùng SGX. SGX với Chứng thực Azure cung cấp khả năng bảo vệ mạnh mẽ hơn trước các cuộc tấn công của các tác nhân có quyền truy cập quản trị cấp hệ điều hành so với các vùng VBS; Các vùng VBS trong Azure SQL Database không hỗ trợ chứng thực.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 310",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/310-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-311",
    "questionNumber": 311,
    "text": "You are creating a ransomware-mitigation strategy.  \n  \nYou conduct a ransomware risk assessment and identify business-critical assets.  \n  \nYou need to recommend a solution for mitigating ransomware threats. The solution must align with Microsoft security best practices.  \n  \nWhich two actions should you include in the recommendation? Each correct answer presents a complete solution.  \n  \n**NOTE:** Each correct answer is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Enable firewall logging for auditing, without restricting inbound or outbound traffic."
      },
      {
        "key": "B",
        "text": "Use extended patching cycles to reduce the risk of update-related service disruptions."
      },
      {
        "key": "C",
        "text": "Implement immutable, offline backups that have restricted access and test restore procedures regularly."
      },
      {
        "key": "D",
        "text": "Deploy Privileged Identity Management (PIM) that uses just-in-time (JIT) access and approval workflows."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Các bản sao lưu ngoại tuyến và bất biến với quyền truy cập hạn chế bảo vệ dữ liệu khôi phục khỏi bị mã hóa hoặc xóa do ransomware điều khiển; thường xuyên kiểm tra quá trình khôi phục để xác minh rằng các hệ thống quan trọng thực sự có thể được khôi phục. Quản lý danh tính đặc quyền làm giảm khả năng hiển thị của các tài khoản đặc quyền thông qua quyền truy cập đúng lúc, có giới hạn thời gian và kích hoạt được kiểm soát phê duyệt, hạn chế cơ hội cho kẻ tấn công lạm dụng các đặc quyền quản trị thường trực.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 311",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/311-design-solutions-that-align-with-security-best-practices-and",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-312",
    "questionNumber": 312,
    "text": "Your company is building a new Azure App Service web app.  \n  \nYou are assisting with the design to validate the web app's security.  \n  \nYou need to recommend a solution for testing the web app for vulnerabilities such as insecure server configurations, cross-site scripting (XSS), and SQL injection.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "dynamic application security testing (DAST)"
      },
      {
        "key": "B",
        "text": "static application security testing (SAST)"
      },
      {
        "key": "C",
        "text": "interactive application security testing (IAST)"
      },
      {
        "key": "D",
        "text": "runtime application self-protection (RASP)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Kiểm tra bảo mật ứng dụng động (DAST) kiểm tra một ứng dụng trong khi nó đang hoạt động và có thể xác định cấu hình máy chủ không an toàn, tập lệnh chéo trang (XSS), chèn SQL và các lỗ hổng web có thể quan sát được trong thời gian chạy khác.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 312",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/312-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-313",
    "questionNumber": 313,
    "text": "You have an Azure subscription that contains an Azure SQL database named DB1, which stores customer data.  \n  \nYou have a Microsoft 365 subscription that uses Microsoft SharePoint Online, OneDrive, and Teams.  \n  \nUsers regularly create Microsoft Office documents containing data from DB1.  \n  \nRecommend a Microsoft Purview solution that meets these requirements:  \n  \n- Identify Office documents that contain customer addresses and phone numbers originating from DB1.  \n- Generate an alert when a user downloads an above-average number of files containing DB1 data.  \n- Minimize false positives.  \n  \nWhat should the solution include for each requirement?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Loại thông tin nhạy cảm tùy chỉnh dựa trên EDM so sánh nội dung tài liệu với dữ liệu tham chiếu của tổ chức, cho phép phát hiện chính xác địa chỉ và số điện thoại của khách hàng từ DB1 đồng thời giảm các kết quả dương tính giả. Microsoft Purview Quản lý rủi ro nội bộ phân tích hoạt động rủi ro và bất thường của người dùng, bao gồm tải xuống tệp SharePoint và OneDrive, đồng thời tạo cảnh báo để xem xét.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 313",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/313-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-314",
    "questionNumber": 314,
    "text": "A customer has a hybrid-cloud infrastructure that includes a Microsoft 365 E5 subscription and an Azure subscription.  \n  \nAll on-premises servers in the perimeter network are blocked from connecting directly to the internet. The customer recently recovered from a ransomware attack and plans to deploy Microsoft Sentinel.  \n  \nYou need to recommend solutions that meet these requirements:  \n  \n- Ensure that the security operations team can access the security logs and the operations logs.  \n- Ensure that the IT operations team can access only the operations logs, including event logs from the servers in the perimeter network.  \n  \nWhich two solutions should you include in the recommendation? Each correct answer presents a complete solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a custom collector that uses the Log Analytics agent"
      },
      {
        "key": "B",
        "text": "the Azure Monitor agent"
      },
      {
        "key": "C",
        "text": "resource-based role-based access control (RBAC)"
      },
      {
        "key": "D",
        "text": "Azure Active Directory (Azure AD) Conditional Access policies"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Trình thu thập tùy chỉnh sử dụng tác nhân Log Analytics có thể thu thập dữ liệu sự kiện từ các máy chủ mạng ngoại vi mà không yêu cầu mỗi máy chủ kết nối trực tiếp với Internet và chuyển tiếp dữ liệu đến không gian làm việc Log Analytics được Microsoft Sentinel sử dụng. Azure RBAC dựa trên tài nguyên có phạm vi truy cập nhật ký vào các tài nguyên được giám sát cụ thể, cho phép nhân viên vận hành CNTT chỉ xem nhật ký tài nguyên vận hành trong khi nhân viên vận hành bảo mật nhận được quyền truy cập rộng hơn. Quyền truy cập có điều kiện chi phối các điều kiện xác thực và đăng nhập; nó không cấp hoặc hạn chế quyền truy cập vào dữ liệu nhật ký.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 314",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/314-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-315",
    "questionNumber": 315,
    "text": "You need to recommend a solution that meets the security requirements for the virtual machines.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "just-in-time (JIT) VM access"
      },
      {
        "key": "B",
        "text": "an Azure Bastion host"
      },
      {
        "key": "C",
        "text": "Azure Virtual Desktop"
      },
      {
        "key": "D",
        "text": "a network security group (NSG)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Quyền truy cập VM đúng lúc (JIT) giảm thiểu rủi ro từ các cổng quản lý mở bằng cách khóa quyền truy cập vào và chỉ cấp quyền truy cập được ủy quyền khi cần, đối với các cổng được yêu cầu và trong khoảng thời gian được chỉ định. Nó cung cấp quyền truy cập quản trị có kiểm soát, có thể kiểm tra được vào các máy ảo.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 315",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/315-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-316",
    "questionNumber": 316,
    "text": "You have a Microsoft 365 subscription containing 1,000 users. Every user has a Microsoft 365 E5 license assigned.  \n  \nThe subscription uses sensitivity labels to classify corporate documents. All users have Windows 11 devices that are onboarded to Microsoft Defender for Endpoint and configured to synchronize files with Microsoft OneDrive.  \n  \nYou need to stop users from uploading the documents from OneDrive to external websites.  \n  \nWhat should the solution include?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Purview Information Protection"
      },
      {
        "key": "B",
        "text": "Microsoft Purview data loss prevention (DLP)"
      },
      {
        "key": "C",
        "text": "web content filtering in Defender for Endpoint"
      },
      {
        "key": "D",
        "text": "an endpoint security policy"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Ngăn chặn mất dữ liệu (DLP) Microsoft Purview, cụ thể là DLP điểm cuối, có thể áp dụng các quy tắc cho các thiết bị Windows tích hợp dựa trên nhãn nhạy cảm và chặn tải lên các tệp phù hợp lên các miền dịch vụ đám mây bị hạn chế đã định cấu hình. Điều này trực tiếp kiểm soát việc tải lên từ các tệp được đồng bộ hóa OneDrive tới các trang web bên ngoài.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 316",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/316-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-317",
    "questionNumber": 317,
    "text": "A Microsoft 365 subscription has 1,000 users and two groups, Group1 and Group2. Every user has devices onboarded to Microsoft Intune and Microsoft Defender for Endpoint. Group1 manages Microsoft Entra and Microsoft 365 services, while Group2 manages Intune and Defender for Endpoint.  \n  \nRecommend a solution that prevents users from connecting to Microsoft 365 services from devices with encryption disabled.  \n  \nWhat should be implemented for each group?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Chính sách tuân thủ Intune đánh giá mã hóa thiết bị và đánh dấu các thiết bị không đáp ứng yêu cầu là không tuân thủ. Chính sách Truy cập có điều kiện của Microsoft Entra nhắm mục tiêu các dịch vụ Microsoft 365 có thể yêu cầu thiết bị phải được đánh dấu là tuân thủ, do đó chặn quyền truy cập từ các thiết bị bị vô hiệu hóa mã hóa.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 317",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/317-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-318",
    "questionNumber": 318,
    "text": "You have an Azure subscription with Microsoft Defender for Cloud enabled.  \n  \nYou have an Amazon Web Services (AWS) implementation. You plan to extend the Azure security strategy to the AWS implementation, but the solution will **not** use Azure Arc.  \n  \nWhich three services can you use to secure the AWS resources? Each correct answer presents a complete solution.  \n  \n> NOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Defender for Containers"
      },
      {
        "key": "B",
        "text": "Microsoft Defender for servers"
      },
      {
        "key": "C",
        "text": "Azure Active Directory (Azure AD) Conditional Access"
      },
      {
        "key": "D",
        "text": "Azure Active Directory (Azure AD) Privileged Identity Management (PIM)"
      },
      {
        "key": "E",
        "text": "Azure Policy"
      }
    ],
    "correctAnswers": [
      "A",
      "C",
      "D"
    ],
    "explanation": "Bộ bảo vệ Microsoft dành cho Bộ chứa hỗ trợ môi trường bộ chứa AWS thông qua trình kết nối AWS, bao gồm cả khả năng bảo vệ không cần tác nhân. Truy cập có điều kiện của Microsoft Entra có thể xác thực và cấp quyền truy cập vào Bảng điều khiển quản lý AWS và tài nguyên AWS, đồng thời Quản lý danh tính đặc quyền của Microsoft Entra có thể bảo vệ các tài khoản AWS nhạy cảm thông qua tích hợp Entra-AWS. Bộ bảo vệ dành cho máy chủ yêu cầu Azure Arc cho các phiên bản AWS EC2 và Chính sách Azure mở rộng khả năng quản trị trên các nhà cung cấp đám mây thông qua Azure Arc.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 318",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/318-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-319",
    "questionNumber": 319,
    "text": "You use Azure Policy with Azure Repos to implement continuous integration and continuous deployment (CI/CD) workflows.  \n  \nYou need to recommend practices for securing the CI/CD workflow stages according to the Microsoft Cloud Adoption Framework for Azure.  \n  \nWhat should the recommendation include for each stage?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Các nhánh được bảo vệ bảo mật quy trình làm việc Git bằng cách hạn chế các thay đổi trực tiếp và thực thi các chính sách của nhánh. Azure Key Vault cung cấp một kho lưu trữ bí mật để truy xuất các khóa, bí mật và chứng chỉ triển khai một cách an toàn từ một đường dẫn.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 319",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/319-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-320",
    "questionNumber": 320,
    "text": "You have an Azure DevOps organization used to manage the development and deployment of internal apps across multiple Azure subscriptions.  \n  \nYou are developing a DevSecOps strategy.  \n  \nYou need to implement DevSecOps controls for the secure code stage and the secure operations stage. The solution must follow Microsoft Cloud Adoption Framework for Azure principles.  \n  \nWhat should you apply to each stage?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Quản lý chuỗi cung ứng/phụ thuộc bảo vệ giai đoạn mã bảo mật bằng cách kiểm kê, quét và khắc phục các thành phần phần mềm nội bộ và bên thứ ba trước khi chúng được tích hợp hoặc triển khai. Kiểm soát quyền truy cập ứng dụng bảo vệ ứng dụng đang vận hành bằng cách thực thi xác thực, ủy quyền phù hợp và quyền truy cập có ít đặc quyền nhất trong thời gian chạy.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 320",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/320-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-321",
    "questionNumber": 321,
    "text": "You are assessing an Azure environment for compliance.  \n  \nYou need to design an Azure Policy implementation that can evaluate compliance without modifying any resources.  \n  \nWhich Azure Policy effect should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Deny"
      },
      {
        "key": "B",
        "text": "Modify"
      },
      {
        "key": "C",
        "text": "Append"
      },
      {
        "key": "D",
        "text": "Disabled"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Hiệu ứng Từ chối của Chính sách Azure đánh giá các tài nguyên hiện có theo quy tắc chính sách và đánh dấu các kết quả khớp không tuân thủ là không tuân thủ mà không thay đổi bất kỳ thuộc tính tài nguyên nào; nó chỉ ngăn các yêu cầu mới hoặc cập nhật không phù hợp với tiêu chuẩn được tạo, trả về 403 thay vì thay đổi tài nguyên. Hiệu ứng Sửa đổi và Nối thêm chủ động thêm hoặc thay đổi thuộc tính/thẻ tài nguyên và Hiệu ứng bị vô hiệu hóa bỏ qua đánh giá thực sự (tài nguyên mặc định là Tuân thủ), do đó Từ chối là hiệu ứng đánh giá sự tuân thủ trong khi không sửa đổi tài nguyên.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 321",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/321-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-322",
    "questionNumber": 322,
    "text": "$36",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Traffic to https://www.fabrikam.com will be allowed from all the devices."
      },
      {
        "key": "B",
        "text": "Traffic to https://www.adatum.com:8433 will be blocked from all the devices."
      },
      {
        "key": "C",
        "text": "Traffic to https://www.adatum.com:8433 will be allowed from all the devices."
      },
      {
        "key": "D",
        "text": "Traffic to https://www.fabrikam.com will be allowed from compliant devices only."
      },
      {
        "key": "E",
        "text": "Traffic to https://www.adatum.com:8433 will be allowed from compliant devices only."
      },
      {
        "key": "F",
        "text": "Traffic to https://www.fabrikam.com will be blocked from noncompliant devices only."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Cấu hình chuyển tiếp lưu lượng truy cập Internet Access chỉ thu thập lưu lượng truy cập Internet TCP trên các cổng 80 và 443. Do đó, lưu lượng truy cập tới `www.adatum.com` trên cổng TCP 8433 không được Global Secure Access xử lý, do đó cả quy tắc lọc nội dung web cũng như chính sách Truy cập có điều kiện được liên kết đều không hạn chế điều đó. Lưu lượng HTTPS tới `www.fabrikam.com` sử dụng cổng TCP 443 và được thu thập; CAPolicy1 chỉ cho phép lưu lượng truy cập đó khi thiết bị tuân thủ.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 322",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/322-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-323",
    "questionNumber": 323,
    "text": "You have a Microsoft 365 subscription.  \n  \nYou have an Azure subscription.  \n  \nYou need to deploy a Microsoft Purview communication compliance solution for Microsoft Teams and Yammer. The solution must satisfy these requirements:  \n  \n- Assign compliance policies to Microsoft 365 groups according to custom Microsoft Exchange Online attributes.  \n- Minimize the number of compliance policies.  \n- Minimize administrative effort.  \n  \nWhat should the solution include?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Purview Information Protection"
      },
      {
        "key": "B",
        "text": "Microsoft 365 Defender user tags"
      },
      {
        "key": "C",
        "text": "adaptive scopes"
      },
      {
        "key": "D",
        "text": "administrative units"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Phạm vi thích ứng sử dụng truy vấn dựa trên thuộc tính để xác định động các nhóm Microsoft 365 được nhắm mục tiêu theo chính sách tuân thủ giao tiếp Microsoft Purview. Chúng hỗ trợ các thuộc tính tùy chỉnh của Exchange và cho phép một chính sách sử dụng một hoặc nhiều phạm vi, giảm cả số lượng chính sách và nỗ lực liên tục trong việc duy trì các nhiệm vụ nhóm tĩnh.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 323",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/323-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-324",
    "questionNumber": 324,
    "text": "You have an Azure DevOps organization used to manage the development and deployment of internal apps across multiple Azure subscriptions.  \n  \nYou need to implement a DevSecOps strategy based on Microsoft Cloud Adoption Framework for Azure principles. The solution must meet these requirements:  \n  \n- All pull requests must be enforced.  \n- All deployments to production must be approved.  \n  \nWhat should the solution include for each requirement?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Chính sách chi nhánh Azure DevOps trên các nhánh được bảo vệ có thể yêu cầu kéo yêu cầu và xác thực trước khi hợp nhất. Phê duyệt triển khai được đặt cấu hình dưới dạng phê duyệt và kiểm tra trên môi trường Azure DevOps, chẳng hạn như môi trường sản xuất; đường ống chờ cho đến khi được phê duyệt.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 324",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/324-design-solutions-that-align-with-security-best-practices-and",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-325",
    "questionNumber": 325,
    "text": "You have an Azure subscription that includes multiple Azure Blob Storage accounts.  \n  \nYou need to recommend a solution that detects threats in files after they are uploaded to a blob container.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "sensitive data threat detection in Microsoft Defender for Storage"
      },
      {
        "key": "B",
        "text": "runtime threat protection in Microsoft Defender for Containers"
      },
      {
        "key": "C",
        "text": "vulnerability assessment in Microsoft Defender for Containers"
      },
      {
        "key": "D",
        "text": "malware scanning in Microsoft Defender for Storage"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Tính năng quét phần mềm độc hại của Bộ bảo vệ Microsoft dành cho Bộ lưu trữ thực hiện quét các đốm màu khi chúng được tải lên hoặc sửa đổi, phát hiện nội dung độc hại trong Blob Storage.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 325",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/325-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-326",
    "questionNumber": 326,
    "text": "For an Azure deployment, you are designing a security architecture that is based on the Microsoft Cloud Security Benchmark.  \n  \nYou need to recommend a best practice for implementing service accounts for Azure API Management.  \n  \nWhat should be included in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "application registrations in Azure AD"
      },
      {
        "key": "B",
        "text": "managed identities in Azure"
      },
      {
        "key": "C",
        "text": "Azure service principals with usernames and passwords"
      },
      {
        "key": "D",
        "text": "device registrations in Azure AD"
      },
      {
        "key": "E",
        "text": "Azure service principals with certificate credentials"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Quản lý API Azure hỗ trợ danh tính được quản lý và Điểm chuẩn bảo mật đám mây của Microsoft đề xuất danh tính được quản lý cho các dịch vụ Azure vì thông tin xác thực của chúng được quản lý, bảo vệ và xoay vòng tự động trên nền tảng. Điều này giúp loại bỏ nhu cầu lưu trữ mật khẩu, chứng chỉ hoặc bí mật khách hàng lâu dài trong cấu hình hoặc mã ứng dụng.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 326",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/326-design-solutions-that-align-with-security-best-practices-and",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-327",
    "questionNumber": 327,
    "text": "Solution: You recommend creating private endpoints for the web app and the database layer.  \n  \nDoes this meet the goal?",
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
    "explanation": "Azure App Service private endpoint chỉ đảm bảo quyền truy cập vào ứng dụng; nó không được sử dụng cho các kết nối gửi đi từ ứng dụng. Quyền truy cập riêng tư từ ứng dụng web vào Azure Cosmos DB yêu cầu tích hợp mạng ảo Dịch vụ ứng dụng, độ phân giải DNS riêng và Cosmos DB private endpoint. Do đó, việc tạo các điểm cuối riêng tư không cung cấp kết nối cơ sở dữ liệu riêng tư cần thiết.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 327",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/327-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-328",
    "questionNumber": 328,
    "text": "Solution: You recommend using Azure Key Vault to store the credentials.  \n  \nDoes this achieve the goal?",
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
    "explanation": "Azure Key Vault bảo vệ thông tin đăng nhập Azure Cosmos DB khỏi bị lưu trữ trong mã ứng dụng hoặc cấu hình văn bản rõ ràng. Azure App Service có thể truy xuất các bí mật của Key Vault bằng cách sử dụng managed identity, hạn chế quyền truy cập bí mật vào khối lượng công việc và cho phép sử dụng thông tin xác thực an toàn cho kết nối cơ sở dữ liệu.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 328",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/328-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-329",
    "questionNumber": 329,
    "text": "Solution: You recommend deploying Azure Application Gateway with Azure Web Application Firewall (WAF).  \n  \nDoes this satisfy the goal?",
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
    "explanation": "Azure Application Gateway với WAF bảo vệ các ứng dụng web khỏi các lỗ hổng và khai thác phổ biến dựa trên HTTP, chủ yếu ở lối vào của ứng dụng web. Nó không bảo mật kết nối Azure App Service-to-Azure Cosmos DB với quyền truy cập mạng riêng tư, được ủy quyền rõ ràng. Azure Cosmos DB có thể bị hạn chế ở các điểm cuối riêng tư và vô hiệu hóa quyền truy cập mạng công cộng để hỗ trợ yêu cầu Zero Trust này.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 329",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/329-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-330",
    "questionNumber": 330,
    "text": "Solution: You recommend deploying Azure Front Door with Azure Web Application Firewall (WAF).  \n  \nDoes this fulfill the goal?",
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
    "explanation": "Azure Front Door WAF bảo vệ các yêu cầu ứng dụng web đến ở biên mạng khỏi các hoạt động khai thác web thông thường; nó không phải là điều khiển cho kết nối ứng dụng với Azure Cosmos DB. Việc bảo mật kết nối đó theo Zero Trust yêu cầu quyền truy cập mạng riêng và ủy quyền dựa trên danh tính rõ ràng cho khối lượng công việc.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 330",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/330-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-331",
    "questionNumber": 331,
    "text": "You have a Microsoft 365 E5 subscription.  \n  \nYou need to recommend a solution for adding a watermark to email attachments that contain sensitive data.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Defender for Cloud Apps"
      },
      {
        "key": "B",
        "text": "Microsoft Information Protection"
      },
      {
        "key": "C",
        "text": "insider risk management"
      },
      {
        "key": "D",
        "text": "Azure Purview"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Bảo vệ Thông tin của Microsoft sử dụng nhãn nhạy cảm để phân loại và bảo vệ nội dung nhạy cảm. Nhãn nhạy cảm có thể áp dụng đánh dấu nội dung, bao gồm cả hình mờ, cho các tệp được hỗ trợ, chẳng hạn như tệp đính kèm email có chứa dữ liệu nhạy cảm.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 331",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/331-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-332",
    "questionNumber": 332,
    "text": "You have an on-premises datacenter named Site1.  \n  \nYour Azure subscription contains a virtual network named VNet1 and multiple Azure App Service apps. Site1 connects to VNet1 by using a Site-to-Site (P2S) VPN connection. The apps are accessed by public internet connections.  \n  \nRecommend a solution that provides secure access to the apps and meets these requirements:  \n  \n- Servers on Site1 must use a VPN connection to access the apps.  \n- Access to the apps must be restricted to specific Site1 servers.  \n- VNet1 security administrators must be able to control which servers can access the apps.  \n- Costs must be minimized.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "private endpoint cung cấp cho ứng dụng Dịch vụ ứng dụng một địa chỉ IP riêng trong mạng ảo. Các máy khách tại chỗ được kết nối với mạng ảo đó bằng VPN có thể truy cập ứng dụng thông qua Azure Private Link thay vì điểm cuối công khai của nó. Các hạn chế truy cập Dịch vụ ứng dụng không đánh giá lưu lượng truy cập đi qua private endpoint; khi chính sách mạng điểm cuối riêng tư được bật, NSG trên mạng con điểm cuối riêng tư sẽ kiểm soát máy chủ nguồn nào có thể truy cập nó. NSG tránh được chi phí bổ sung của Azure Firewall hoặc WAF.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 332",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/332-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-333",
    "questionNumber": 333,
    "text": "Your company has a Microsoft 365 E5 subscription.  \n  \nThe company wants to identify and classify data in Microsoft Teams, SharePoint Online, and Exchange Online.  \n  \nYou need to recommend a solution for identifying documents that contain sensitive information.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "data classification content explorer"
      },
      {
        "key": "B",
        "text": "data loss prevention (DLP)"
      },
      {
        "key": "C",
        "text": "eDiscovery"
      },
      {
        "key": "D",
        "text": "Information Governance"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Phân loại dữ liệu Microsoft Purview sử dụng các loại thông tin nhạy cảm và bộ phân loại để phân loại nội dung nhạy cảm. Trình khám phá nội dung cung cấp chế độ xem hiện tại về các mục được phân loại bằng loại thông tin nhạy cảm, nhãn nhạy cảm hoặc nhãn lưu giữ, bao gồm nội dung trong các vị trí Exchange, Teams và SharePoint. DLP sử dụng các phân loại này để bảo vệ dữ liệu thay vì đóng vai trò là giải pháp khám phá phân loại chính.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 333",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/333-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-334",
    "questionNumber": 334,
    "text": "You have 1,000 on-premises Linux servers and an Azure subscription containing a Microsoft Sentinel workspace named WS1 and 1,000 Linux virtual machines. All on-premises Linux servers are onboarded to Azure Arc.  \n  \nYou plan to collect Common Event Format (CEF) logs by using the Azure Monitor Agent connector in Microsoft Sentinel.  \n  \nDesign a solution to collect specific log events that meets these requirements:  \n  \n- Minimize the Microsoft Entra ID identities required.  \n- Minimize events delivered to WS1.  \n- Ensure all required events are ingested.  \n- Minimize administrative effort.  \n  \nWhat should the solution include?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Trình kết nối Syslog và CEF dựa trên AMA sử dụng DCR để chỉ định các thông báo cần thu thập và lọc để áp dụng trước khi nhập, do đó DCR có thể loại trừ các sự kiện không bắt buộc mà không gặp rủi ro mất các sự kiện bắt buộc. Chính sách triển khai Tác nhân Azure Monitor sử dụng danh tính được quản lý do người dùng chỉ định cho máy ảo Azure vì chúng có khả năng mở rộng và linh hoạt, trong khi các máy chủ hỗ trợ Azure Arc sử dụng danh tính được quản lý do hệ thống chỉ định làm tùy chọn được hỗ trợ. Do đó, danh tính chung do người dùng chỉ định cho máy ảo Azure sẽ giảm thiểu danh tính trong các ràng buộc hỗ trợ đó.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 334",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/334-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-335",
    "questionNumber": 335,
    "text": "You have an Azure subscription containing multiple Azure App Service web apps distributed across multiple Azure regions and accessed from the internet.  \n  \nYou need to ensure that every incoming request to the apps is inspected for threats by using the Open Web Application Security Project (OWASP) Core Rule Set (CRS). The solution must meet these requirements:  \n  \n- Support Microsoft-managed X.509 certificates.  \n- Direct users to the geographically nearest app.  \n- Minimize administrative effort.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Firewall Premium"
      },
      {
        "key": "B",
        "text": "Azure Front Door with a web application firewall (WAF)"
      },
      {
        "key": "C",
        "text": "Azure Firewall Standard"
      },
      {
        "key": "D",
        "text": "Azure Application Gateway with a web application firewall (WAF)"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Azure Front Door với WAF cung cấp các quy tắc được quản lý Bộ quy tắc cốt lõi của OWASP để kiểm tra các yêu cầu HTTP(S), hỗ trợ chứng chỉ TLS do Microsoft quản lý và thực hiện định tuyến dựa trên độ trễ để đưa người dùng đến chương trình phụ trợ lành mạnh gần nhất. Kiến trúc được quản lý toàn cầu của nó giảm thiểu việc quản trị cho các ứng dụng Dịch vụ ứng dụng đa khu vực.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 335",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/335-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-336",
    "questionNumber": 336,
    "text": "You have an Azure subscription with Microsoft Defender for Cloud enabled.  \n  \nSuspicious authentication-activity alerts are appearing in the Workload protections dashboard.  \n  \nYou need to recommend a workflow-automation solution to evaluate and remediate the alerts. The solution must minimize development effort.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Monitor webhooks"
      },
      {
        "key": "B",
        "text": "Azure Event Hubs"
      },
      {
        "key": "C",
        "text": "Azure Functions apps"
      },
      {
        "key": "D",
        "text": "Azure Logics Apps"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Tự động hóa quy trình làm việc Microsoft Defender for Cloud kích hoạt Ứng dụng Azure Logic để đưa ra cảnh báo bảo mật. Ứng dụng Logic cung cấp trình thiết kế mã ngắn, trình kích hoạt, trình kết nối và mẫu Defender for Cloud tích hợp sẵn để tự động hóa các bước đánh giá và khắc phục cảnh báo với nỗ lực phát triển tối thiểu.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 336",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/336-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-337",
    "questionNumber": 337,
    "text": "Your network has an on-premises Active Directory Domain Services (AD DS) domain named Domain1. Domain1 has 10 domain controllers.  \n  \nYou have an Azure subscription named Sub1 that includes a Microsoft Sentinel workspace named WS1.  \n  \nYou have a Microsoft 365 subscription with 5,000 users. Every user has a Microsoft 365 E3 license.  \n  \nYou need to recommend a solution to ingest security logs from every domain controller into WS1. The solution must meet these requirements:  \n  \n- The cost of ingesting data into WS1 must be minimized.  \n- WS1 must ingest all Windows Security event logs generated by the domain controllers.  \n- The solution must support approximately 350 MB of logs generated daily by each domain controller.  \n  \nWhat should you recommend?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Upgrade the user licenses to Microsoft 365 E5."
      },
      {
        "key": "B",
        "text": "Onboard each domain controller to Microsoft Defender for Servers Plan 2."
      },
      {
        "key": "C",
        "text": "Configure Auxiliary logs in WS1."
      },
      {
        "key": "D",
        "text": "Configure a volume cap for WS1."
      },
      {
        "key": "E",
        "text": "Only ingest data from one domain controller into WS1."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Bộ bảo vệ Microsoft dành cho Máy chủ Gói 2 bao gồm 500 MB dung lượng nhập miễn phí hàng ngày cho mỗi nút được bảo vệ đối với dữ liệu bảo mật đủ điều kiện. Các sự kiện Bảo mật Windows được gửi qua luồng Microsoft-SecurityEvent tới bảng SecurityEvent đủ điều kiện. Với 10 bộ điều khiển miền, dung lượng cho phép kết hợp là 5 GB mỗi ngày, vượt quá khoảng 3,5 GB mỗi ngày do bộ điều khiển tạo ra trong khi vẫn cho phép nhập tất cả các sự kiện Bảo mật Windows của chúng.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 337",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/337-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-338",
    "questionNumber": 338,
    "text": "You have a Microsoft 365 E5 subscription.  \n  \nYou plan to implement Microsoft Priva Subject Rights Requests for Microsoft 365 data.  \n  \nYou need to simplify the creation and processing of subject rights requests while minimizing development effort.  \n  \nWhat should the solution include?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "API yêu cầu quyền chủ thể của Microsoft Graph có thể tạo và quản lý các yêu cầu về quyền chủ thể Priva. Các mẫu Microsoft Power Automate tích hợp mở rộng khả năng tự động hóa xử lý yêu cầu cho các tác vụ thông thường, tránh việc phát triển tùy chỉnh theo yêu cầu của Azure Automation hoặc Logic Apps.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 338",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/338-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-339",
    "questionNumber": 339,
    "text": "You have an on-premises datacenter and an Azure Kubernetes Service (AKS) cluster called AKS1.  \n  \nYou need to limit Internet access to AKS1’s public endpoint. The solution must ensure that AKS1 is accessible only from the public IP addresses associated with the on-premises datacenter.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a private endpoint"
      },
      {
        "key": "B",
        "text": "a network security group (NSG)"
      },
      {
        "key": "C",
        "text": "a service endpoint"
      },
      {
        "key": "D",
        "text": "an authorized IP range"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Dải IP được ủy quyền của máy chủ API AKS cung cấp danh sách cho phép các địa chỉ IP công cộng hoặc phạm vi CIDR có thể tiếp cận điểm cuối của mặt phẳng điều khiển công cộng. Việc định cấu hình địa chỉ IP công cộng của trung tâm dữ liệu tại chỗ sẽ hạn chế quyền truy cập vào các địa chỉ đó.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 339",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/339-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-340",
    "questionNumber": 340,
    "text": "Your Microsoft Entra tenant contains 800 Microsoft Entra joined devices and 700 users. Each user is assigned a single device. All the devices are onboarded to Global Secure Access.  \n  \nYou use a software as a service (SaaS) application named App1 that is hosted by a third party. Users access App1 over the internet.  \n  \nYou need to ensure that all the devices access App1 through the Global Secure Access client.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a Conditional Access policy"
      },
      {
        "key": "B",
        "text": "a Quick Access app"
      },
      {
        "key": "C",
        "text": "a traffic forwarding profile"
      },
      {
        "key": "D",
        "text": "a security profile"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Truy cập an toàn toàn cầu sử dụng hồ sơ chuyển tiếp lưu lượng truy cập (lưu lượng truy cập Microsoft, quyền truy cập riêng tư và truy cập Internet) để xác định lưu lượng truy cập mạng nào được định tuyến thông qua ứng dụng khách Truy cập an toàn toàn cầu. Vì App1 là một ứng dụng SaaS được lưu trữ trên Internet nên bạn phải kích hoạt và đặt cấu hình cấu hình chuyển tiếp lưu lượng truy cập Internet Access để lưu lượng dành cho App1 được chuyển qua ứng dụng khách Global Secure Access thay vì truy cập trực tiếp vào Internet. Các chính sách Truy cập có điều kiện có thể yêu cầu ứng dụng khách Truy cập an toàn toàn cầu hoặc mạng tuân thủ làm điều kiện đăng nhập nhưng chúng không kiểm soát lưu lượng truy cập nào thực sự được chuyển tiếp qua ứng dụng khách; hành vi chuyển tiếp đó được điều chỉnh bởi cấu hình hồ sơ chuyển tiếp lưu lượng.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 340",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/340-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-341",
    "questionNumber": 341,
    "text": "Your organization has a Microsoft Entra tenant configured with Microsoft Entra Private Access.  \n  \nYou are planning to publish a set of internal web applications using a Global Secure Access application.  \n  \nYou need to make sure users can reach these web apps by connecting through the Global Secure Access application.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a Conditional Access policy that grants access from only compliant devices"
      },
      {
        "key": "B",
        "text": "a forwarding profile that directs all outbound internet traffic through the Microsoft backbone network"
      },
      {
        "key": "C",
        "text": "a connector group that contains the connectors used to access the web apps and a single endpoint for the internal fully qualified domain names (FQDNs)"
      },
      {
        "key": "D",
        "text": "an access policy that limits connections based on user groups"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Để xuất bản tài nguyên nội bộ thông qua ứng dụng Doanh nghiệp Truy cập Bảo mật Toàn cầu (Truy cập Riêng tư), bạn phải đặt cấu hình nhóm trình kết nối mạng riêng chứa các trình kết nối có thể tiếp cận tài nguyên đích, sau đó thêm phân đoạn ứng dụng chỉ định tên miền nội bộ đủ điều kiện (hoặc địa chỉ/phạm vi IP) và cổng cho ứng dụng web. Nhóm trình kết nối này và định nghĩa điểm cuối FQDN là những gì cho phép ứng dụng khách Truy cập an toàn toàn cầu chặn lưu lượng truy cập dành cho FQDN đó, định tuyến lưu lượng đó qua dịch vụ và yêu cầu trình kết nối chuyển tiếp lưu lượng đó đến ứng dụng web nội bộ. Nếu không có cấu hình này, sẽ có ánh xạ no giữa ứng dụng đã xuất bản và tài nguyên nội bộ, do đó lưu lượng truy cập no có thể được định tuyến ngay cả khi có chính sách truy cập hoặc kiểm soát Truy cập có điều kiện.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 341",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/341-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-342",
    "questionNumber": 342,
    "text": "Your company has an Azure subscription that uses Microsoft Defender for Cloud.  \n  \nThe company has just signed a contract with the United States government.  \n  \nYou need to review the current subscription for NIST 800-53 compliance.  \n  \nWhat should you do first?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From Azure Policy, assign a built-in policy definition that has a scope of the subscription."
      },
      {
        "key": "B",
        "text": "From Microsoft Defender for Cloud Apps, create an access policy for cloud applications."
      },
      {
        "key": "C",
        "text": "From Microsoft Defender for Cloud, turn on a security standard."
      },
      {
        "key": "D",
        "text": "From Microsoft Defender for Cloud, review the secure score recommendations."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Bảng điều khiển Tuân thủ quy định của Microsoft Defender for Cloud đánh giá đăng ký theo các tiêu chuẩn ngành, quy định và tiêu chuẩn nhưng chỉ dựa trên các tiêu chuẩn đã được chỉ định cho phạm vi đó. NIST SP 800-53 không được bật theo mặc định, vì vậy để xem xét việc tuân thủ, trước tiên bạn phải bật nó: điều hướng đến Defender for Cloud > Tuân thủ quy định > Quản lý chính sách tuân thủ, chọn đăng ký, mở Chính sách bảo mật và chuyển tiêu chuẩn NIST SP 800-53 thành Bật. Sau khi được bật, Defender for Cloud sẽ ánh xạ các đánh giá liên tục của nó tới các biện pháp kiểm soát NIST 800-53 và hiển thị trạng thái tuân thủ/không tuân thủ trong bảng thông tin Tuân thủ quy định.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 342",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/342-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-343",
    "questionNumber": 343,
    "text": "Your network contains an on-premises Active Directory Domain Services (AD DS) domain.  \n  \nYou have a Microsoft 365 subscription.  \n  \nYou need to recommend a solution to evaluate the security and governance of the domains. The solution must meet the following requirements:  \n  \n- Identify configuration issues and administrative vulnerabilities.  \n- Minimize effort.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Entra ID Protection"
      },
      {
        "key": "B",
        "text": "Microsoft Defender for Servers"
      },
      {
        "key": "C",
        "text": "Microsoft Defender for Identity"
      },
      {
        "key": "D",
        "text": "Microsoft Sentinel"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Bộ bảo vệ danh tính của Microsoft bao gồm các đánh giá trạng thái bảo mật danh tính chủ động quét Active Directory tại chỗ (thông qua các cảm biến hiện có của nó) để tìm các cấu hình sai đã biết, cách sử dụng giao thức cũ/không an toàn, cài đặt Chính sách nhóm rủi ro và các lỗ hổng tài khoản quản trị. Các đánh giá này được tự động hiển thị trong Microsoft Secure Score kèm theo hướng dẫn khắc phục, đòi hỏi nỗ lực thiết lập thêm của no ngoài các cảm biến đã được triển khai — đáp ứng trực tiếp yêu cầu xác định các sự cố cấu hình và lỗ hổng quản trị đồng thời giảm thiểu nỗ lực. Microsoft Entra ID Protection giải quyết rủi ro đăng nhập/người dùng trên đám mây thay vì cấu hình sai AD tại chỗ, Bộ bảo vệ Microsoft dành cho Máy chủ nhắm mục tiêu bảo vệ mối đe dọa khối lượng công việc của máy chủ và Microsoft Sentinel sẽ yêu cầu kỹ thuật tùy chỉnh quan trọng để đạt được thông tin chuyên sâu về quản trị danh tính tương đương.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 343",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/343-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-344",
    "questionNumber": 344,
    "text": "You manage a Microsoft Entra tenant containing two users, User1 and User2.  \n  \nAn audit found that User1 has been permanently assigned the User Administrator role, despite the account belonging to a former contractor.  \n  \nThe security team requires that:  \n  \n- All privileged role assignments are periodically validated.  \n- Privileged Identity Management (PIM) is used to automate and enforce this validation process.  \n  \nYou need to configure User2 so that the security requirements can be met, while following the principle of least privilege.  \n  \nWhich role should be assigned to User2, and which tool should User2 use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Quản trị viên vai trò đặc quyền là vai trò tích hợp có ít đặc quyền nhất, có thể quản lý cài đặt Quản lý danh tính đặc quyền và quản lý phân công vai trò cho các vai trò Microsoft Entra, bao gồm đặt cấu hình PIM và truy cập đánh giá cho các vai trò đặc quyền — Quản trị viên toàn cầu sẽ cấp nhiều quyền hơn mức cần thiết và Quản trị viên bảo mật thiếu quyền quản lý phân công vai trò PIM. Truy cập các bài đánh giá, chạy trong PIM, cho phép quản trị viên lên lịch chứng thực định kỳ để người đánh giá (hoặc tự đánh giá) xác nhận việc phân công vai trò đặc quyền, chẳng hạn như vai trò Quản trị viên người dùng do nhà thầu cũ nắm giữ, vẫn được yêu cầu; các nhiệm vụ chưa được xác nhận hoặc bị từ chối có thể được tự động xóa, đáp ứng yêu cầu xác thực định kỳ được thực thi thông qua PIM. Các gói truy cập và quy trình làm việc trong Vòng đời lần lượt giải quyết vấn đề quản lý quyền và tự động hóa người tham gia/người di chuyển/người rời bỏ, chứ không phải xác thực định kỳ các nhiệm vụ vai trò đặc quyền hiện có.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 344",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/344-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-345",
    "questionNumber": 345,
    "text": "Your organization has a Microsoft 365 subscription that includes a Microsoft SharePoint Online site named Site1. All users hold a Microsoft 365 E5 license.  \n  \nMicrosoft Intune is used to manage corporate devices.  \n  \nYou are planning to create a Conditional Access policy that will permit access to Site1 only from devices that have been onboarded to Microsoft Defender for Endpoint.  \n  \nYou need to ensure that the devices can be evaluated for compliance by using Intune before the policy is enforced.  \n  \nWhat should you create first?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a Windows Autopilot deployment profile"
      },
      {
        "key": "B",
        "text": "a compliance policy"
      },
      {
        "key": "C",
        "text": "an app protection policy"
      },
      {
        "key": "D",
        "text": "an app configuration policy"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Các chính sách Truy cập có điều kiện yêu cầu tuân thủ thiết bị dựa vào chính sách tuân thủ Intune để đánh giá xem thiết bị có đáp ứng các tiêu chí cụ thể hay không—chẳng hạn như được tích hợp vào Bộ bảo vệ Microsoft cho Điểm cuối và có điểm rủi ro máy ở mức chấp nhận được—trước khi thiết bị được đánh dấu là tuân thủ. Chỉ sau khi chính sách tuân thủ được tạo và các thiết bị được đánh giá theo chính sách đó, chính sách Truy cập có điều kiện mới có thể sử dụng quyền kiểm soát cấp phép 'yêu cầu thiết bị được đánh dấu là tuân thủ' để thực thi các hạn chế truy cập đối với các tài nguyên như trang SharePoint Online. Hồ sơ triển khai Windows Autopilot xử lý việc cung cấp thiết bị chứ không phải đánh giá tuân thủ; Chính sách bảo vệ ứng dụng và cấu hình ứng dụng áp dụng cho các tình huống quản lý ứng dụng di động thay vì tuân thủ ở cấp thiết bị gắn với các tín hiệu rủi ro của Bộ bảo vệ cho Điểm cuối.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 345",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/345-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-346",
    "questionNumber": 346,
    "text": "Your network includes an on-premises Active Directory Domain Services (AD DS) domain that is synchronized with a Microsoft Entra tenant.  \n  \nYou need to evaluate the domain to identify potential credential exposure risks. Your solution must meet the following requirements:  \n  \n- Provide actionable recommendations to help mitigate the risks.  \n- Minimize the amount of administrative effort required.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Defender for Cloud Apps"
      },
      {
        "key": "B",
        "text": "Microsoft Secure Score"
      },
      {
        "key": "C",
        "text": "Microsoft Assessment and Planning (MAP) Toolkit"
      },
      {
        "key": "D",
        "text": "Microsoft Defender for Identity"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Bộ bảo vệ danh tính Microsoft liên tục giám sát AD DS tại chỗ (và cơ sở hạ tầng nhận dạng kết hợp) và tạo ra các đánh giá tình trạng bảo mật danh tính, bao gồm phát hiện thông tin xác thực bị lộ hoặc bị rò rỉ (chẳng hạn như mật khẩu văn bản gốc được lưu trữ trong thuộc tính AD) và các cấu hình sai khác liên quan đến danh tính. Mỗi đánh giá đều cung cấp hướng dẫn khắc phục theo thứ tự ưu tiên, có thể thực hiện được và do việc giám sát được tự động hóa và liên tục sau khi các cảm biến được triển khai nên nó đáp ứng yêu cầu giảm thiểu nỗ lực hành chính. Microsoft Secure Score tổng hợp các đề xuất trên các sản phẩm nhưng bản thân nó không thực hiện phân tích mức độ hiển thị thông tin xác thực AD sâu; Ứng dụng Microsoft Defender for Cloud nhắm mục tiêu sử dụng ứng dụng đám mây/SaaS và CNTT theo dõi thay vì AD tại chỗ; và Bộ công cụ Đánh giá và Lập kế hoạch (MAP) của Microsoft là công cụ kiểm kê kế thừa để lập kế hoạch di chuyển chứ không phải đánh giá rủi ro bảo mật.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 346",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/346-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-347",
    "questionNumber": 347,
    "text": "You have 500 on-premises Windows devices enrolled in Microsoft Intune.  \n  \nYou have a Microsoft 365 subscription.  \n  \nYou need to ensure that all outbound HTTP and HTTPS traffic from the devices is inspected using Microsoft Entra Internet Access. The solution must minimize infrastructure and operational costs.  \n  \nWhat should you include in the solution?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Install private network connectors."
      },
      {
        "key": "B",
        "text": "Deploy Network Policy Server (NPS) as a RADIUS proxy."
      },
      {
        "key": "C",
        "text": "Deploy Network Policy Server (NPS) as a RADIUS server."
      },
      {
        "key": "D",
        "text": "Onboard the Global Secure Access client to the devices."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Microsoft Entra Internet Access (một phần của Global Secure Access) kiểm tra lưu lượng HTTP/HTTPS trên internet bằng cách yêu cầu các thiết bị định tuyến lưu lượng đó thông qua dịch vụ đám mây Global Secure Access. Điều này yêu cầu cài đặt/tích hợp ứng dụng khách Truy cập Bảo mật Toàn cầu trên các điểm cuối để có thể chuyển tiếp lưu lượng theo cấu hình chuyển tiếp lưu lượng truy cập của Microsoft đã định cấu hình mà không cần triển khai bất kỳ cơ sở hạ tầng tại chỗ bổ sung nào như máy chủ proxy hoặc thành phần RADIUS/NPS. Thay vào đó, các trình kết nối mạng riêng cho phép Microsoft Entra Private Access tiếp cận các ứng dụng riêng tư tại chỗ và không liên quan đến việc kiểm tra lưu lượng truy cập Internet chung.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 347",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/347-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-348",
    "questionNumber": 348,
    "text": "Your Azure subscription contains 1,000 virtual machines.  \n  \nYou are planning to enforce a corporate standard requiring that all virtual machines have just-in-time (JIT) VM access enabled.  \n  \nYou need to recommend a solution that will identify which of the virtual machines support JIT VM access.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Bastion"
      },
      {
        "key": "B",
        "text": "Microsoft Defender for Cloud"
      },
      {
        "key": "C",
        "text": "Microsoft Defender for Cloud Apps"
      },
      {
        "key": "D",
        "text": "Microsoft Intune"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Truy cập VM đúng lúc là một khả năng của Microsoft Defender for Cloud (một phần của Bộ bảo vệ dành cho Máy chủ). Defender for Cloud đánh giá từng VM theo các yêu cầu về tính đủ điều kiện của JIT—chẳng hạn như có Nhóm bảo mật mạng liên kết và được triển khai thông qua Azure Resource Manager—và báo cáo, thông qua các đề xuất và bảng thông tin bảo vệ khối lượng công việc, máy ảo nào được hỗ trợ cho JIT và máy ảo nào không, cho phép tổ chức xác định và khắc phục các máy chưa đáp ứng tiêu chuẩn. Azure Bastion cung cấp kết nối RDP/SSH dựa trên trình duyệt nhưng không đánh giá hoặc báo cáo tính đủ điều kiện của JIT; Ứng dụng Microsoft Defender for Cloud là nhà môi giới bảo mật truy cập đám mây cho các ứng dụng SaaS; Microsoft Intune quản lý thiết bị/điểm cuối và không liên quan đến tình hình bảo mật mạng Azure VM.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 348",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/348-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-349",
    "questionNumber": 349,
    "text": "You have 500 on-premises Windows devices that are joined to a Microsoft Entra tenant named Tenant1 and enrolled in Microsoft Intune.  \n  \nYou have an Azure subscription named Sub1 that is linked to Tenant1.  \n  \nYou have a partner company that has an Azure subscription named Sub2. Sub2 contains a virtual network named VNet2 and a storage account named storage1. storage1 is secured by using an Azure Private Link endpoint on VNet2.  \n  \nYou need to recommend a solution that ensures all the users at your company can access storage1. The solution must meet the following requirements:  \n  \n- The users must sign in from a compliant device before accessing storage1.  \n- Access must NOT expose or provide connectivity to any other resources in Sub2.  \n  \nWhat should you include in the recommendation, and what should you recommend creating in Tenant1?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Quyền truy cập riêng tư của Microsoft Entra (khả năng Truy cập an toàn toàn cầu) được xây dựng có mục đích để mở rộng Zero Trust, quyền truy cập không cần VPN vào các tài nguyên riêng tư như tài khoản Azure Storage được bảo mật đằng sau Azure Private Link private endpoint. Bạn xuất bản tài nguyên bằng cách tạo ứng dụng Truy cập an toàn toàn cầu (mỗi ứng dụng / ứng dụng doanh nghiệp) với phân đoạn ứng dụng cho FQDN của tài khoản lưu trữ (ví dụ: storage1.blob.core.windows.net) trên cổng 443, được định tuyến qua trình kết nối mạng riêng Microsoft Entra được triển khai với khả năng tiếp cận mạng tới private endpoint. Hướng dẫn của Microsoft nêu rõ rằng lưu lượng truy cập được định tuyến đến một phân đoạn ứng dụng sẽ được phân phối tới tài nguyên nội bộ đó 'mà không có khả năng kết nối với các tài nguyên khác trên mạng của bạn', đáp ứng yêu cầu tránh làm lộ các tài nguyên Sub2 khác — điều mà VPN Site-to-Site hoặc VNet peering không thể đảm bảo, vì cả hai đều cấp kết nối mạng cấp mạng con rộng cho VNet2. Microsoft Entra Internet Access không phù hợp vì đây là Cổng Web An toàn cho lưu lượng truy cập internet/SaaS, không dành cho các tài nguyên PaaS được liên kết riêng trên VNet của đối tác. Sau khi ứng dụng Truy cập an toàn toàn cầu được tạo, chính sách Truy cập có điều kiện sẽ được áp dụng ở cấp ứng dụng yêu cầu thiết bị phải được đánh dấu là tuân thủ (thông qua Intune), thực thi rằng chỉ những thiết bị tuân thủ mới có thể đăng nhập trước khi tiếp cận bộ lưu trữ1. Gói truy cập chỉ xử lý quy trình công việc về quyền/phân công, hồ sơ bảo mật Truy cập an toàn toàn cầu chỉ liên kết Quyền truy cập có điều kiện với hồ sơ chuyển tiếp lưu lượng thay vì xác định phân đoạn theo tài nguyên và trình kết nối proxy ứng dụng có phạm vi xuất bản các ứng dụng web HTTP/HTTPS thay vì môi giới quyền truy cập lưu trữ dựa trên Private Link.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 349",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/349-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-350",
    "questionNumber": 350,
    "text": "You manage a Microsoft 365 subscription that includes 1,000 Microsoft Exchange Online mailboxes.  \n  \nYou need to determine which users are vulnerable to phishing attacks.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "spoof intelligence insight in Exchange Online Protection (EOP)"
      },
      {
        "key": "B",
        "text": "Attack path analysis in Microsoft Defender for Cloud"
      },
      {
        "key": "C",
        "text": "Attack simulation training in Microsoft Defender for Office 365"
      },
      {
        "key": "D",
        "text": "user activity reports in Microsoft Purview insider risk management"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Đào tạo mô phỏng tấn công, một phần của Microsoft Defender dành cho Office 365, cho phép quản trị viên khởi chạy các cuộc tấn công lừa đảo mô phỏng thực tế (và kỹ thuật xã hội khác) chống lại người dùng trong tổ chức của họ. Kết quả cho thấy người dùng nào đã nhấp vào liên kết độc hại, mở tệp đính kèm hoặc gửi thông tin xác thực, trực tiếp xác định người dùng nào dễ bị lừa đảo. Điều này khác với thông tin giả mạo (phân tích người gửi giả mạo), phân tích đường dẫn tấn công (ánh xạ các đường dẫn có thể khai thác tới tài nguyên đám mây) và báo cáo hoạt động quản lý rủi ro nội bộ (theo dõi các hành vi nội bộ tiềm ẩn rủi ro như rò rỉ dữ liệu chứ không phải khả năng lừa đảo).",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 350",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/350-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-351",
    "questionNumber": 351,
    "text": "You have an Azure subscription that includes virtual machines, storage accounts, and Azure SQL databases.  \n  \nAll resources are backed up multiple times per day using Azure Backup.  \n  \nYou are developing a strategy to protect against ransomware attacks.  \n  \nYou need to recommend which control must be enabled so that Azure Backup can be used to restore the resources if a ransomware attack succeeds.  \n  \nWhich control should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Perform offline backups to Azure Data Box."
      },
      {
        "key": "B",
        "text": "Use Azure Monitor notifications when backup configurations change."
      },
      {
        "key": "C",
        "text": "Encrypt backups by using customer-managed keys (CMKs)."
      },
      {
        "key": "D",
        "text": "Require PINs for critical operations."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Azure Backup cung cấp tính năng bảo mật yêu cầu lớp xác thực bổ sung—mã PIN bảo mật được tạo từ cổng Azure—trước khi có thể thực hiện các hoạt động quan trọng, chẳng hạn như tắt tính năng xóa mềm, thay đổi chính sách sao lưu để giảm thời gian lưu giữ hoặc xóa các mục sao lưu và điểm khôi phục. Kiểm soát này ngăn kẻ tấn công (hoặc tài khoản bị xâm nhập), người đã giành được quyền kiểm soát đăng ký trong cuộc tấn công bằng ransomware, không thể xóa hoặc giả mạo các bản sao lưu hiện có, từ đó đảm bảo rằng dữ liệu sao lưu sạch, có thể phục hồi vẫn có sẵn để khôi phục sau cuộc tấn công. Đây là một phần trong tài liệu hướng dẫn bảo vệ phần mềm tống tiền của Microsoft dành cho Azure Backup (\"Các tính năng bảo mật giúp bảo vệ Azure Backup và khôi phục dữ liệu khỏi các cuộc tấn công của phần mềm tống tiền\").",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 351",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/351-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-352",
    "questionNumber": 352,
    "text": "You have an Azure subscription.  \n  \nYou need to enforce ISO 27002:2022 standards for new resources deployed to the subscription. The solution must ensure that noncompliant resources are automatically detected.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "the regulatory compliance dashboard in Microsoft Defender for Cloud"
      },
      {
        "key": "B",
        "text": "Azure role-based access control (Azure RBAC)"
      },
      {
        "key": "C",
        "text": "Azure initiative"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Các sáng kiến ​​Chính sách Azure cho phép bạn chỉ định sáng kiến ​​tuân thủ quy định tích hợp (chẳng hạn như sáng kiến ​​ISO 27001/27002) ở phạm vi đăng ký. Sau khi được chỉ định, sáng kiến ​​này sẽ tự động đánh giá tất cả các tài nguyên mới và hiện có theo các biện pháp kiểm soát của tiêu chuẩn và gắn cờ bất kỳ tài nguyên nào không tuân thủ, thực thi tiêu chuẩn bắt buộc. Azure RBAC chỉ quản lý những người có thể thực hiện hành động trên tài nguyên và có vai trò no trong việc đánh giá việc tuân thủ cấu hình theo tiêu chuẩn. Bảng thông tin tuân thủ quy định trong Microsoft Defender for Cloud chỉ hiển thị trạng thái tuân thủ cho các tiêu chuẩn đã được chỉ định thông qua các sáng kiến ​​Chính sách Azure - đây là chế độ xem báo cáo chứ không phải cơ chế thực thi tiêu chuẩn hoặc kích hoạt việc phát hiện các tài nguyên không tuân thủ.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 352",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/352-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-353",
    "questionNumber": 353,
    "text": "Your organization has a Microsoft Entra tenant that uses Microsoft Entra ID Governance. For each department, a dedicated catalog and set of access packages have been created to manage access to applications and data resources.  \n  \nYou need to enable team leaders in each department to:  \n  \n- Add or remove access package assignments for the users in their department.  \n- Ensure that the access packages do not appear in each user's My Access portal.  \n  \nThe solution must adhere to the principle of least privilege.  \n  \nWhich role should you assign to the team leaders?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Access Package Manager"
      },
      {
        "key": "B",
        "text": "Identity Governance Administrator"
      },
      {
        "key": "C",
        "text": "Catalog Owner"
      },
      {
        "key": "D",
        "text": "Access Package Assignment Manager"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Vai trò Trình quản lý phân công gói truy cập là vai trò Quản trị Microsoft Entra ID được tích hợp sẵn, có đặc quyền thấp nhất, cho phép người dùng được ủy quyền xem, thêm và xóa các nhiệm vụ cho các gói truy cập mà họ được phép quản lý mà không cần cấp quyền quản lý gói truy cập hoặc danh mục rộng hơn. Vì các nhiệm vụ được thực hiện thông qua vai trò này được thực hiện trực tiếp bởi người quản lý được ủy quyền thay vì thông qua yêu cầu do người dùng khởi tạo nên các gói truy cập không xuất hiện dưới dạng các mục có thể yêu cầu trong cổng My Access của người dùng bị ảnh hưởng. Điều này đáp ứng cả hai yêu cầu—quản lý các nhiệm vụ và giữ các gói ẩn khỏi Quyền truy cập của tôi—trong khi chỉ cấp các quyền tối thiểu cần thiết, không giống như Quản trị viên quản trị danh tính (quá rộng), Chủ sở hữu danh mục (quản lý danh mục và các tài nguyên/gói của nó chứ không chỉ các nhiệm vụ) hoặc Trình quản lý gói truy cập (quản lý các chính sách/cấu hình gói truy cập thay vì chỉ các nhiệm vụ).",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 353",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/353-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-354",
    "questionNumber": 354,
    "text": "Your organization has a Microsoft 365 subscription with 1,000 users and a group named Group1. All users have Windows 11 devices and sign in using their Microsoft Entra accounts. The users do not have administrative rights on their devices.  \n  \nMembers of Group1 remotely assist the users by taking control of their sessions. These remote control sessions run in the security context of the user being assisted.  \n  \nYou need to recommend a solution that will:  \n  \n- Enable Group1 members to run apps that require administrative rights on the users' devices  \n- Ensure the apps run in the context of each signed-in standard user  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Entra Privileged Identity Management"
      },
      {
        "key": "B",
        "text": "Microsoft Intune Endpoint Privilege Management"
      },
      {
        "key": "C",
        "text": "Microsoft Entra entitlement management"
      },
      {
        "key": "D",
        "text": "Windows Local Administrator Password Solution (Windows LAPS)"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Quản lý đặc quyền điểm cuối Microsoft Intune (EPM) cho phép quản trị viên xác định quy tắc nâng cao cho các ứng dụng cụ thể để người dùng tiêu chuẩn (không phải quản trị viên) có thể chạy các ứng dụng đó với quyền quản trị nâng cao, trong khi việc nâng cao nằm trong phạm vi ứng dụng đó và thực thi trong bối cảnh người dùng chuẩn đã đăng nhập thay vì yêu cầu một tài khoản quản trị viên riêng. Điều này phù hợp với yêu cầu ứng dụng chạy trong bối cảnh của từng người dùng tiêu chuẩn đã đăng nhập trong các phiên hỗ trợ từ xa hoạt động trong bối cảnh bảo mật của chính người dùng. Entra PIM cung cấp khả năng nâng cao kịp thời cho các vai trò thư mục Entra/Azure, quản lý quyền tự động hóa các yêu cầu/phê duyệt gói truy cập đối với tài nguyên và Windows LAPS quản lý mật khẩu tài khoản quản trị viên cục bộ — không tính năng nào trong số này cho phép nâng cao từng ứng dụng cho phiên riêng của người dùng tiêu chuẩn.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 354",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/354-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-355",
    "questionNumber": 355,
    "text": "You have a Microsoft Sentinel deployment.  \n  \nYou are developing a solution to ensure that compliance with the MITRE ATT&CK framework is maintained as the framework evolves.  \n  \nYou need to recommend a solution to identify which MITRE ATT&CK techniques are currently NOT addressed by the Microsoft Sentinel deployment.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "the Microsoft Sentinel Health Summary dashboard"
      },
      {
        "key": "B",
        "text": "the MITRE analytics explorer"
      },
      {
        "key": "C",
        "text": "the MITRE coverage matrix"
      },
      {
        "key": "D",
        "text": "the Microsoft Sentinel Analytics blade"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Microsoft Sentinel cung cấp chế độ xem phạm vi MITER ATT&CK chuyên dụng (Quản lý mối đe dọa > MITER ATT&CK) ánh xạ mọi quy tắc phân tích tới các chiến thuật và kỹ thuật của khung MITER ATT&CK, trình bày bản đồ nhiệt/ma trận trong đó mỗi ô hiển thị số lượng quy tắc hoạt động ánh xạ tới một kỹ thuật nhất định. Các kỹ thuật có quy tắc hoạt động no được đánh dấu rõ ràng là chưa được phát hiện, cho phép bạn tìm kiếm theo tên hoặc ID kỹ thuật và đi sâu vào các truy vấn tìm kiếm liên quan để thu hẹp khoảng cách. Ma trận này được giữ phù hợp với phiên bản hiện tại của khung MITER ATT&CK, cho phép theo dõi tuân thủ liên tục khi khung phát triển — đó chính xác là yêu cầu xác định các kỹ thuật không được giải quyết trong quá trình triển khai.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 355",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/355-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-356",
    "questionNumber": 356,
    "text": "You have an Azure subscription that includes five Azure App Service instances hosting public web apps. Each instance is deployed across three Azure regions.  \n  \nThe web apps process sensitive customer data and must be protected against common web exploits and malicious bots.  \n  \nYou need to recommend a security solution that satisfies the following requirements:  \n  \n- Provides centralized management and updates for protection rules  \n- Protects all the web apps without requiring changes to the application code  \n- Minimizes costs  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Firewall"
      },
      {
        "key": "B",
        "text": "Azure DDoS Protection"
      },
      {
        "key": "C",
        "text": "Azure Front Door"
      },
      {
        "key": "D",
        "text": "Azure Application Gateway"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Azure Front Door cung cấp điểm truy cập toàn cầu với Tường lửa ứng dụng web (WAF) tích hợp có thể được định cấu hình một lần dưới dạng chính sách tập trung và áp dụng trên tất cả các ứng dụng web phụ trợ ở mọi khu vực, sử dụng bộ quy tắc do Microsoft quản lý cho các mối đe dọa OWASP và bảo vệ bot được cập nhật tự động mà không cần thay đổi mã ứng dụng. Vì các phiên bản Dịch vụ ứng dụng trải rộng trên ba khu vực nên việc sử dụng giải pháp khu vực như Cổng ứng dụng sẽ yêu cầu triển khai và duy trì các phiên bản WAF riêng biệt cho mỗi khu vực, làm tăng chi phí và chi phí quản lý — trong khi chính sách WAF toàn cầu duy nhất của Front Door đáp ứng các yêu cầu quản lý tập trung và giảm thiểu chi phí. Azure Firewall (lớp mạng) và Azure DDoS Protection (giảm thiểu tấn công số lượng lớn) không cung cấp khả năng khai thác lớp ứng dụng web và bảo vệ bot.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 356",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/356-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-357",
    "questionNumber": 357,
    "text": "You have an Azure subscription containing 100 virtual machines. The virtual machines run either Linux or Windows Server.  \n  \nYou need to recommend a solution to discover which of the virtual machines are internet-facing.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Defender for Cloud Apps"
      },
      {
        "key": "B",
        "text": "Microsoft Sentinel"
      },
      {
        "key": "C",
        "text": "Azure Network Watcher"
      },
      {
        "key": "D",
        "text": "Microsoft Defender for Cloud"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Microsoft Defender for Cloud bao gồm khả năng kiểm kê tài sản và phân tích bề mặt tấn công/đường dẫn tấn công để xác định các máy ảo truy cập internet (ví dụ: VM có địa chỉ IP công cộng hoặc cổng quản lý bị lộ) và tạo ra các đề xuất như 'Các máy ảo truy cập Internet phải được bảo vệ bằng các nhóm bảo mật mạng.' Điều này khiến nó trở thành công cụ thích hợp để khám phá những máy ảo nào được tiếp xúc với Internet, không giống như Defender for Cloud Apps (khám phá ứng dụng SaaS), Microsoft Sentinel (SIEM/SOAR log analytics) hoặc Azure Network Watcher (chẩn đoán mạng không có phân loại tiếp xúc với Internet tự động).",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 357",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/357-design-security-solutions-for-infrastructure",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-358",
    "questionNumber": 358,
    "text": "You have an on-premises application that processes Personally Identifiable Information (PII) and sends the data to Azure. The application includes the following components:  \n  \n- APIs that receive and send the PII  \n- A data ingestion pipeline that stores the PII in an Azure Data Lake Storage Gen2 account  \n  \nA compliance policy requires that all the PII data be encrypted by using encryption keys that are regularly rotated and stored in a central repository.  \n  \nYou need to recommend a solution that adheres to the compliance policy. The solution must minimize administrative effort.  \n  \nWhich two components should you include in the recommendation? Each correct answer presents part of the solution.  \n  \n(Choose two. Each correct selection is worth one point.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Cloud HSM"
      },
      {
        "key": "B",
        "text": "Microsoft Cloud PKI"
      },
      {
        "key": "C",
        "text": "Azure Key Vault"
      },
      {
        "key": "D",
        "text": "service-side encryption (SSE)"
      },
      {
        "key": "E",
        "text": "Transparent Data Encryption (TDE)"
      },
      {
        "key": "F",
        "text": "Azure Disk Encryption"
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Azure Data Lake Storage Gen2 tự động mã hóa dữ liệu ở trạng thái nghỉ thông qua mã hóa phía dịch vụ (SSE). Để đáp ứng yêu cầu tuân thủ đối với các khóa mã hóa được lưu trữ tập trung, được luân chuyển thường xuyên với nỗ lực quản trị tối thiểu, bạn định cấu hình SSE để sử dụng các khóa do khách hàng quản lý, đồng thời lưu trữ và quản lý các khóa đó trong Azure Key Vault, cung cấp khả năng lưu trữ tập trung, kiểm soát truy cập và xoay khóa tự động. TDE, Azure Disk Encryption, Cloud HSM và Cloud PKI xử lý các dịch vụ khác nhau (cơ sở dữ liệu, đĩa VM, bảo vệ khóa phần cứng và chứng chỉ tương ứng) và không phải là cơ chế thích hợp để mã hóa dữ liệu Data Lake Storage Gen2 ở trạng thái lưu trữ.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 358",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/358-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-359",
    "questionNumber": 359,
    "text": "You have an Azure subscription containing 20 App Service web apps that provide services to external customers. Each web app has its own unique certificate and key.  \n  \nYou need to recommend a solution for managing the keys and certificates of these web apps. The solution must meet the following requirements:  \n  \n- Provide a single tenancy to store the keys and certificates.  \n- Maintain FIPS 140-2 Level 3 compliance.  \n- Follow the principle of least privilege.  \n- Minimize costs.  \n- Minimize administrative effort.  \n  \nWhat should you include in the recommendation?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Azure Key Vault Managed HSM là dịch vụ HSM dành cho một đối tượng thuê, được quản lý toàn phần, có tính sẵn sàng cao — mỗi phiên bản HSM được quản lý được dành riêng cho một khách hàng, đáp ứng yêu cầu một đối tượng thuê, không giống như SKU Premium hoặc Standard Key Vault nhiều đối tượng thuê. HSM được quản lý sử dụng phần cứng HSM đã được xác thực FIPS 140 Cấp 3, đáp ứng mức tuân thủ bắt buộc, trong khi các khóa hỗ trợ HSM của Key Vault Premium chỉ được xác thực ở Cấp 2. Một phiên bản HSM được quản lý duy nhất có thể lưu trữ tất cả 20 khóa và chứng chỉ duy nhất của ứng dụng web, giúp giảm thiểu cả chi phí (một nhóm HSM thay vì 20) và chi phí quản trị (một tài nguyên để quản lý thay vì 20). Mặt phẳng dữ liệu của HSM được quản lý chỉ sử dụng RBAC cục bộ được quản lý HSM (nó không hỗ trợ mô hình chính sách truy cập cũ), cho phép gán vai trò chi tiết, theo từng khóa/mỗi hiệu trưởng đáp ứng nguyên tắc đặc quyền tối thiểu.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "sourceTitle": "Examcademy SC-100 Question 359",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/359-design-security-solutions-for-applications-and-data",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  },
  {
    "id": "sc100-360",
    "questionNumber": 360,
    "text": "You manage several on-premises Hyper-V hosts running Windows Server virtual machines, and you also have an Azure subscription.  \n  \nYou need to recommend a solution that uses Microsoft Sentinel to collect Security event logs from the virtual machines. The solution must:  \n  \n- Use the Windows Security Events via AMA data connector.  \n- Collect only specific events.  \n- Minimize costs.  \n  \nWhat should you recommend?  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1785478469753-1lrmq5hy.png)",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Quy tắc thu thập dữ liệu (DCR) trong Azure Monitor cho phép bạn chỉ định chính xác loại sự kiện Bảo mật Windows nào (ví dụ: lọc Chung, Tối thiểu hoặc Tùy chỉnh) được thu thập thông qua Sự kiện bảo mật Windows thông qua trình kết nối AMA, cho phép bạn giới hạn việc nhập vào chỉ các sự kiện bắt buộc và từ đó kiểm soát/giảm thiểu chi phí. Vì các máy ảo Hyper-V được cài đặt tại chỗ (không phải máy ảo Azure gốc), nên trước tiên chúng phải được tích hợp vào Azure Arc bằng cách cài đặt tác nhân Azure Connected Machine; việc này đăng ký chúng dưới dạng máy chủ hỗ trợ Arc để tiện ích mở rộng Azure Monitor Agent (AMA) và DCR liên quan sau đó có thể được áp dụng cho chúng để thu thập nhật ký vào Microsoft Sentinel.",
    "category": "General",
    "tags": [
      "SC-100",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1785478469753-1lrmq5hy.png",
    "sourceTitle": "Examcademy SC-100 Question 360",
    "sourceUrl": "https://examcademy.com/exams/microsoft/sc-100/q/360-design-security-operations-identity-and-compliance-capabilit",
    "lastVerifiedAt": "2026-09-15T08:26:42.924Z"
  }
];
