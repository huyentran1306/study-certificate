import { Question } from '../types';

export const az900Questions: Question[] = [
  {
    id: "az1",
    questionNumber: 1,
    text: "Which of the following support plans provide 24/7 access to technical support engineers via phone and email? (Choose three.)",
    options: [
      { key: "A", text: "Basic" },
      { key: "B", text: "Developer" },
      { key: "C", text: "Standard" },
      { key: "D", text: "Professional Direct" },
      { key: "E", text: "Premier / Unified" }
    ],
    correctAnswers: ["C", "D", "E"],
    category: "Pricing & Support",
    explanation: "Basic hỗ trợ 24/7 cho các vấn đề thanh toán (billing) và đăng ký chứ không có hỗ trợ kỹ thuật (technical support). Developer chỉ hỗ trợ kỹ thuật qua email trong giờ hành chính. Standard, Professional Direct và Premier/Unified đều cung cấp hỗ trợ kỹ thuật 24/7 qua cả điện thoại và email.",
    tags: ["AZ-900", "Support Plans"]
  },
  {
    id: "az2",
    questionNumber: 2,
    text: "Your company has datacenters in Los Angeles and New York. You need to configure a storage redundancy option that replication-synchronously stores data on multiple nodes, ensures geographic disaster recovery, and allows reading data from the secondary region. Which redundancy should you choose?",
    options: [
      { key: "A", text: "Locally-redundant storage (LRS)" },
      { key: "B", text: "Zone-redundant storage (ZRS)" },
      { key: "C", text: "Geo-redundant storage (GRS)" },
      { key: "D", text: "Read-access geo-redundant storage (RA-GRS)" }
    ],
    correctAnswers: ["D"],
    category: "Azure Services",
    explanation: "RA-GRS (Read-access geo-redundant storage) sao chép dữ liệu của bạn sang một vùng địa lý thứ hai cách xa vùng chính hàng trăm dặm, đồng thời mở quyền truy cập 'chỉ đọc' (Read-access) vào vùng thứ hai này ngay cả khi không xảy ra sự cố sập vùng chính.",
    tags: ["AZ-900", "Storage Redundancy"]
  },
  {
    id: "az3",
    questionNumber: 3,
    text: "A company wants to request an assessment of their Azure environment's design from Microsoft at the minimum cost. Solution: You recommend that the company subscribes to the Standard support plan. Does this meet the goal?",
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    correctAnswers: ["A"],
    category: "Pricing & Support",
    explanation: "Đúng (Yes). Gói Standard hỗ trợ hướng dẫn kiến trúc chung bám sát các tài liệu thiết kế. Nhưng lưu ý: Khác với gói Professional Direct cung cấp các buổi đánh giá thiết kế kiến trúc sâu (design assessments) chuyên sâu hơn nhờ Delivery Manager riêng, gói Standard vẫn được Microsoft chấp nhận cho các tư vấn kiến trúc chung với chi phí tối ưu nhất.",
    tags: ["AZ-900", "Support Plans"]
  },
  {
    id: "az4",
    questionNumber: 4,
    text: "You are tasked with deploying Azure Virtual Machines for your development team. Under which cloud service category does this solution fall?",
    options: [
      { key: "A", text: "Software as a Service (SaaS)" },
      { key: "B", text: "Platform as a Service (PaaS)" },
      { key: "C", text: "Infrastructure as a Service (IaaS)" },
      { key: "D", text: "Serverless Computing" }
    ],
    correctAnswers: ["C"],
    category: "Cloud Concepts",
    explanation: "Máy ảo (Virtual Machines) và tài khoản lưu trữ cơ sở (Storage space) thuộc nhóm IaaS (Cơ sở hạ tầng dưới dạng dịch vụ). Bạn tự cài hệ điều hành, cấu hình mạng và tự quản lý phần mềm, còn hạ tầng vật lý do Microsoft quản lý.",
    tags: ["AZ-900", "IaaS"]
  },
  {
    id: "az5",
    questionNumber: 5,
    text: "An organization wants to segment Azure resources across multiple business units with dedicated administrators for each division, keeping administrative overhead to an absolute minimum. What should they implement?",
    options: [
      { key: "A", text: "Create multiple Azure Active Directory (Azure AD) directories" },
      { key: "B", text: "Create multiple Azure Subscriptions and assign division admins" },
      { key: "C", text: "Deploy several Virtual Private Network (VPN) Gateways" },
      { key: "D", text: "Deploy a single Azure Policy across resource groups" }
    ],
    correctAnswers: ["B"],
    category: "Azure Architecture",
    explanation: "Tạo nhiều Đăng ký sử dụng (Subscriptions) là ranh giới quản lý thanh toán và quyền truy cập tốt nhất để phân chia trách nhiệm sử dụng tài nguyên giữa các phòng ban. Việc tạo nhiều thư mục Azure AD (Microsoft Entra ID) sẽ gây quá tải quản trị vì chúng hoạt động độc lập và không đồng bộ dễ dàng.",
    tags: ["AZ-900", "Subscriptions"]
  },
  {
    id: "az6",
    questionNumber: 6,
    text: "Your company is migrating all physical operations to Microsoft Azure under a pay-as-you-go model. Which expenditure type does this represent?",
    options: [
      { key: "A", text: "Capital Expenditure (CapEx)" },
      { key: "B", text: "Operational Expenditure (OpEx)" },
      { key: "C", text: "Elastic Expenditure" },
      { key: "D", text: "Static Capital" }
    ],
    correctAnswers: ["B"],
    category: "Cloud Concepts",
    explanation: "Mô hình Pay-as-you-go (dùng bao nhiêu trả bấy nhiêu) của điện toán đám mây chuyển dịch chi phí đầu tư ban đầu sang chi phí vận hành (Operational Expenditure - OpEx), giúp loại bỏ việc đầu tư mua sắm phần cứng trước (CapEx).",
    tags: ["AZ-900", "CapEx vs OpEx"]
  },
  {
    id: "az7",
    questionNumber: 7,
    text: "You are required to deploy an Artificial Intelligence (AI) solution in Azure to build, test, and deploy predictive analytics models using a drag-and-drop toolkit. What service should you use?",
    options: [
      { key: "A", text: "Azure Cosmos DB" },
      { key: "B", text: "Azure Synapse Analytics" },
      { key: "C", text: "Azure Machine Learning Studio / Designer" },
      { key: "D", text: "Azure Active Directory" }
    ],
    correctAnswers: ["C"],
    category: "Azure Services",
    explanation: "Azure Machine Learning Studio (hay ML Designer) cung cấp môi trường trực quan dạng kéo thả (drag-and-drop) để lập mô hình, kiểm thử và triển khai các thuật toán phân tích dự báo (predictive analytics) một cách nhanh chóng.",
    tags: ["AZ-900", "AI Services"]
  },
  {
    id: "az8",
    questionNumber: 8,
    text: "What Azure capability should you use to automate deployment and ensure repeatable, reliable infrastructure declarations using code?",
    options: [
      { key: "A", text: "Azure API Management" },
      { key: "B", text: "Azure Resource Manager (ARM) templates" },
      { key: "C", text: "Management Groups" },
      { key: "D", text: "Azure Front Door" }
    ],
    correctAnswers: ["B"],
    category: "Azure Governance",
    explanation: "ARM Templates (Mẫu giao diện quản lý tài nguyên Azure) cho phép triển khai tài nguyên tự động và đồng bộ theo dạng khai báo Infrastructure as Code (IaC), đảm bảo tính nhất quán trên mọi môi trường.",
    tags: ["AZ-900", "ARM Templates"]
  },
  {
    id: "az9",
    questionNumber: 9,
    text: "You are tasked with deploying a critical line-of-business (LOB) application on virtual machines with a guaranteed uptime service-level agreement (SLA) of 99.99 percent. What is the minimum configuration required?",
    options: [
      { key: "A", text: "One virtual machine with Standard HDD storage" },
      { key: "B", text: "Two virtual machines deployed in the same Availability Set" },
      { key: "C", text: "Two virtual machines deployed across two or more Availability Zones" },
      { key: "D", text: "One virtual machine with Standard SSD storage" }
    ],
    correctAnswers: ["C"],
    category: "Azure Architecture",
    explanation: "Để đạt được SLA cam kết 99.99% của Azure dành cho Máy ảo, bạn phải triển khai tối thiểu 2 thực thể máy ảo (VM) phân bổ đều giữa 2 hoặc nhiều Vùng Sẵn sàng (Availability Zones) khác nhau trong cùng một khu vực (Region) của Azure.",
    tags: ["AZ-900", "Availability Zones"]
  },
  {
    id: "az10",
    questionNumber: 10,
    text: "You have several virtual machines deployed in an Azure Virtual Network (VNet). You need to grant remote workers secure access to these VMs from their individual laptops. What should you configure?",
    options: [
      { key: "A", text: "Point-to-Site (P2S) VPN" },
      { key: "B", text: "Site-to-Site (S2S) VPN" },
      { key: "C", text: "Azure ExpressRoute" },
      { key: "D", text: "VNet Peering" }
    ],
    correctAnswers: ["A"],
    category: "Azure Services",
    explanation: "Kết nối Point-to-Site (P2S) VPN thiết lập luồng truyền mạng ảo mã hóa an toàn từ các thiết bị khách riêng lẻ của nhân viên truy cập thẳng vào VNet mà không cần thiết bị phần cứng mạng phức tạp giống kết nối S2S.",
    tags: ["AZ-900", "VPN"]
  },
  {
    id: "az11",
    questionNumber: 11,
    text: "Which Azure service should you use to encrypt and securely manage administrative credentials, API keys, and connection strings during automated deployments?",
    options: [
      { key: "A", text: "Azure Information Protection (AIP)" },
      { key: "B", text: "Azure AD Identity Protection" },
      { key: "C", text: "Azure Key Vault" },
      { key: "D", text: "Azure Security Center" }
    ],
    correctAnswers: ["C"],
    category: "Azure Security",
    explanation: "Azure Key Vault là công cụ chuyên biệt để lưu trữ, mã hóa và kiểm soát truy cập đối với các bí mật nhạy cảm (secrets) như mật khẩu, khóa API, chứng chỉ bảo mật SSL/TLS.",
    tags: ["AZ-900", "Key Vault"]
  },
  {
    id: "az12",
    questionNumber: 12,
    text: "You want a service that automatically detects login attempts coming from unidentified/risky IP addresses and prompts those users to perform password reset or MFA verification. What should you deploy?",
    options: [
      { key: "A", text: "Azure AD Identity Protection" },
      { key: "B", text: "Azure AD Privileged Identity Management (PIM)" },
      { key: "C", text: "Azure Service Health" },
      { key: "D", text: "Azure Sentinel" }
    ],
    correctAnswers: ["A"],
    category: "Azure Security",
    explanation: "Azure AD Identity Protection (nay thuộc Microsoft Entra) có tính năng phân tích hành vi và chấm điểm rủi ro phiên đăng nhập (như đăng nhập từ ip lạ, đi lại bất thường) để tự động thực thi các biện pháp phòng vệ.",
    tags: ["AZ-900", "Identity Protection"]
  },
  {
    id: "az13",
    questionNumber: 13,
    text: "You plan to deploy 50 web servers and 50 database servers to Azure. Which mechanism should you use to filter and limit network traffic types allowed to communicate between the web and database segments?",
    options: [
      { key: "A", text: "Azure ExpressRoute" },
      { key: "B", text: "Network Security Groups (NSGs)" },
      { key: "C", text: "Azure Route Filters" },
      { key: "D", text: "Local Network Gateways" }
    ],
    correctAnswers: ["B"],
    category: "Azure Security",
    explanation: "Network Security Group (NSG) hoạt động như một tường lửa lọc gói tin ở cấp độ mạng, cho phép bạn quy định các quy tắc lọc lưu lượng ra/vào (Inbound/Outbound rules) bám sát các thông số nguồn, đích, cổng và giao thức.",
    tags: ["AZ-900", "NSG"]
  },
  {
    id: "az14",
    questionNumber: 14,
    text: "When an Azure virtual machine is stopped and set to a 'deallocated' state, which costs do you continue to incur?",
    options: [
      { key: "A", text: "Both compute and storage costs" },
      { key: "B", text: "Neither compute nor storage costs" },
      { key: "C", text: "Storage costs associated with the virtual disks only" },
      { key: "D", text: "Compute costs for allocated vCPUs only" }
    ],
    correctAnswers: ["C"],
    category: "Pricing & Support",
    explanation: "Khi máy ảo ở trạng thái Deallocated, Azure giải phóng tài nguyên CPU/RAM nên bạn không phải trả tiền điện toán (compute). Tuy nhiên, bạn vẫn phải trả chi phí lưu trữ (storage) dành cho các ổ đĩa ảo (OS, Data disks) đang gắn vào máy ảo đó.",
    tags: ["AZ-900", "Billing"]
  },
  {
    id: "az15",
    questionNumber: 15,
    text: "What term describes the ability of an Azure-based architecture to absorb localized hardware degradation, recover from failures, and continue functioning with no downtime?",
    options: [
      { key: "A", text: "High Availability" },
      { key: "B", text: "Scalability" },
      { key: "C", text: "Fault Tolerance / Resilience" },
      { key: "D", text: "Elasticity" }
    ],
    correctAnswers: ["C"],
    category: "Cloud Concepts",
    explanation: "Resilience (độ bền bỉ/đàn hồi hoạt động) hay Fault Tolerance (khả năng chịu lỗi) khẳng định hệ thống duy trì được hoạt động ổn định và có tiến trình tự chữa lành sau khi các phân đoạn chịu sự cố trục trặc vật lý.",
    tags: ["AZ-900", "Cloud Traits"]
  },
  {
    id: "az16",
    questionNumber: 16,
    text: "When implementing a Software as a Service (SaaS) cloud model, such as Microsoft 365, what is the prime responsibility of the customer?",
    options: [
      { key: "A", text: "Maintaining the physical servers and network infrastructure" },
      { key: "B", text: "Updating the underlying operating systems" },
      { key: "C", text: "Configuring the specific application settings and managing data" },
      { key: "D", text: "Installing deployment agents on physical hardware" }
    ],
    correctAnswers: ["C"],
    category: "Cloud Concepts",
    explanation: "Trong mô hình SaaS, nhà cung cấp lo trọn vẹn hạ tầng, hệ điều hành và cập nhật phần mềm. Người dùng cuối chỉ chịu trách nhiệm tải lên/quản lý dữ liệu và cấu hình phân quyền sử dụng ứng dụng phù hợp.",
    tags: ["AZ-900", "Shared Responsibility"]
  },
  {
    id: "az17",
    questionNumber: 17,
    text: "Which of the following are characteristics of the public cloud model? (Choose two.)",
    options: [
      { key: "A", text: "Highly customized hardware dedicated to a single company" },
      { key: "B", text: "Metered pricing (pay for what you consume)" },
      { key: "C", text: "Lack of secure connections" },
      { key: "D", text: "Self-service management via a web interface" }
    ],
    correctAnswers: ["B", "D"],
    category: "Cloud Concepts",
    explanation: "Đám mây công cộng (Public cloud) sở hữu hai đặc tính nổi trội: Tính tự phục vụ (Self-service management) nhanh chóng qua cổng thông tin trực tuyến và Cơ chế tính phí theo mức tiêu dùng thực tế (Metered pricing).",
    tags: ["AZ-900", "Cloud Types"]
  },
  {
    id: "az18",
    questionNumber: 18,
    text: "You plan to migrate an existing on-premises application to Azure App Service to reduce administrative overhead. Which cloud service model does Azure App Service represent?",
    options: [
      { key: "A", text: "Infrastructure as a Service (IaaS)" },
      { key: "B", text: "Platform as a Service (PaaS)" },
      { key: "C", text: "Software as a Service (SaaS)" },
      { key: "D", text: "Database as a Service (DaaS)" }
    ],
    correctAnswers: ["B"],
    category: "Cloud Concepts",
    explanation: "Azure App Service là giải pháp PaaS (Nền tảng dưới dạng dịch vụ). Microsoft quản lý toàn bộ hệ điều hành, máy chủ web và hạ tầng chạy code, giúp lập trình viên tập trung 100% vào việc phát triển mã nguồn ứng dụng.",
    tags: ["AZ-900", "PaaS"]
  },
  {
    id: "az19",
    questionNumber: 19,
    text: "Which database service in Azure allows you to store semi-structured JSON documents and scale throughput globally to write data concurrently across multiple regions?",
    options: [
      { key: "A", text: "Azure SQL Database" },
      { key: "B", text: "Azure Cache for Redis" },
      { key: "C", text: "Azure Cosmos DB" },
      { key: "D", text: "Azure Database for PostgreSQL" }
    ],
    correctAnswers: ["C"],
    category: "Azure Services",
    explanation: "Azure Cosmos DB là dịch vụ cơ sở dữ liệu phân tán toàn cầu (NoSQL), cho phép đọc/ghi dữ liệu đồng thời ở nhiều vùng khác nhau với độ trễ cực thấp (<10ms) và tối ưu cho dữ liệu phi cấu trúc JSON.",
    tags: ["AZ-900", "Database"]
  },
  {
    id: "az20",
    questionNumber: 20,
    text: "You need to map a network drive from multiple on-premises Windows 10 computers to an Azure cloud storage share using SMB protocol. Which solution should you deploy?",
    options: [
      { key: "A", text: "A Blob service in a storage account" },
      { key: "B", text: "A File service in a storage account (Azure Files)" },
      { key: "C", text: "An Azure SQL Database" },
      { key: "D", text: "Azure Queue Storage" }
    ],
    correctAnswers: ["B"],
    category: "Azure Services",
    explanation: "Azure Files hỗ trợ lưu trữ tệp tin đám mây có thể truy cập qua giao thức SMB tiêu chuẩn ngành, truyền tải chia sẻ dữ liệu mượt mà như một ổ đĩa mạng nội bộ cho các máy tính Windows, macOS hoặc Linux.",
    tags: ["AZ-900", "Storage"]
  },
  {
    id: "az21",
    questionNumber: 21,
    text: "To read data stored in the Archive access tier of an Azure Storage account, what operation must be performed first?",
    options: [
      { key: "A", text: "The data must be rehydrated to an online tier (Hot or Cool)" },
      { key: "B", text: "The storage account must be upgraded to Premium" },
      { key: "C", text: "The network connection must use ExpressRoute" },
      { key: "D", text: "The archive tier must be configured at the account level" }
    ],
    correctAnswers: ["A"],
    category: "Azure Services",
    explanation: "Lớp lưu trữ Archive là offline để tiết kiệm chi phí tối đa. Để đọc dữ liệu này, bạn phải thực hiện quy trình 'rã đông' (rehydrate) để sao chép dữ liệu về lớp Hot hoặc Cool trực tuyến. Quy trình này có thể mất vài giờ.",
    tags: ["AZ-900", "Storage"]
  },
  {
    id: "az22",
    questionNumber: 22,
    text: "Where can you purchase certified third-party virtual security appliances (such as custom firewalls or network tools) next to default Azure resources?",
    options: [
      { key: "A", text: "Microsoft Store" },
      { key: "B", text: "Azure Service Health Portal" },
      { key: "C", text: "Azure Marketplace" },
      { key: "D", text: "Azure Resource Graph" }
    ],
    correctAnswers: ["C"],
    category: "Azure Architecture",
    explanation: "Azure Marketplace là cổng đăng tải và phân phối các ứng dụng, giải pháp phần mềm, máy ảo và dịch vụ đám mây từ bên thứ ba đã được kiểm duyệt và chứng nhận tương thích hoàn hảo với Microsoft Azure.",
    tags: ["AZ-900", "Azure Assets"]
  },
  {
    id: "az23",
    questionNumber: 23,
    text: "An organization wants to restrict which virtual machine sizes (unapproved costly SKUs) can be deployed within their subscription. Which service should they use?",
    options: [
      { key: "A", text: "Azure Blueprints" },
      { key: "B", text: "Azure Policies" },
      { key: "C", text: "Azure Role-Based Access Control (RBAC)" },
      { key: "D", text: "Azure Resource Locks" }
    ],
    correctAnswers: ["B"],
    category: "Azure Governance",
    explanation: "Azure Policy đánh giá, kiểm soát và áp đặt các ranh giới quy tắc lên tài nguyên hệ thống đám mây. Bạn có thể gán chính sách 'Allowed virtual machine size SKUs' để chặn lập trình viên khởi tạo các loại máy ảo đắt tiền.",
    tags: ["AZ-900", "Governance"]
  },
  {
    id: "az24",
    questionNumber: 24,
    text: "What metadata tool allows you to associate custom key-value pairs with Azure resources to identify which cost center or department owns them for billing reports?",
    options: [
      { key: "A", text: "Resource Locks" },
      { key: "B", text: "Azure Tags" },
      { key: "C", text: "Azure Budgets" },
      { key: "D", text: "Azure Blueprints" }
    ],
    correctAnswers: ["B"],
    category: "Azure Governance",
    explanation: "Azure Tags (Thẻ tài nguyên) là các khóa-giá trị đính kèm trực tiếp vào tài nguyên hoặc nhóm tài nguyên. Công cụ này cực kỳ đắc lực trong việc tách biệt báo cáo chi phí (billing reports) theo dự án, phòng ban.",
    tags: ["AZ-900", "Governance"]
  },
  {
    id: "az25",
    questionNumber: 25,
    text: "What feature should you enable to prevent traffic from an Azure Virtual Network (VNet) to an Azure Storage account from traveling over the public internet?",
    options: [
      { key: "A", text: "A service endpoint" },
      { key: "B", text: "Azure Front Door" },
      { key: "C", text: "A local network gateway" },
      { key: "D", text: "An ExpressRoute circuit" }
    ],
    correctAnswers: ["A"],
    category: "Azure Services",
    explanation: "Virtual Network (VNet) Service Endpoint cung cấp kết nối mạng trực tiếp bảo mật tối đa tới dịch vụ Azure (như Storage, SQL) thông qua sợi cáp quang đường trục xương sống của Microsoft mà không lộ dữ liệu ra Internet công cộng.",
    tags: ["AZ-900", "Networking"]
  },
  {
    id: "az26",
    questionNumber: 26,
    text: "Where does Azure Monitor store and consolidate all log and state events gathered from multiple cloud resources?",
    options: [
      { key: "A", text: "An Azure Blob Storage account" },
      { key: "B", text: "A Log Analytics workspace" },
      { key: "C", text: "An Azure SQL Database" },
      { key: "D", text: "Azure Resource Locks" }
    ],
    correctAnswers: ["B"],
    category: "Azure Governance",
    explanation: "Log Analytics Workspace là môi trường trung tâm lưu trữ toàn bộ sự kiện của Azure Monitor. Tại đây, giám sát viên có thể viết các câu truy vấn Kusto (KQL) để phân tích lỗi hệ thống và hiệu năng ứng dụng tức thời.",
    tags: ["AZ-900", "Azure Monitor"]
  },
  {
    id: "az27",
    questionNumber: 27,
    text: "Which service allows a cloud architect to deploy a complete repeatable environment including Resource Groups, Role Assignments, and Policies, and automatically restore resource locks if deleted?",
    options: [
      { key: "A", text: "Azure Blueprints" },
      { key: "B", text: "Azure Advisor" },
      { key: "C", text: "Azure Resource Graph" },
      { key: "D", text: "Azure Monitor" }
    ],
    correctAnswers: ["A"],
    category: "Azure Governance",
    explanation: "Azure Blueprints đóng gói cấu trúc định dạng chuẩn bao gồm tài nguyên, phân quyền RBAC và chính sách. Ưu thế lớn của Blueprint là khả năng thực thi ranh giới khóa tài nguyên (Resource locking) cực chặt không thể ghi đè bởi cả Subscription Owner.",
    tags: ["AZ-900", "Governance"]
  },
  {
    id: "az28",
    questionNumber: 28,
    text: "In which file format are Azure Resource Manager (ARM) templates authored?",
    options: [
      { key: "A", text: "XML format" },
      { key: "B", text: "YAML format" },
      { key: "C", text: "JSON format" },
      { key: "D", text: "CSV format" }
    ],
    correctAnswers: ["C"],
    category: "Azure Governance",
    explanation: "ARM Templates có cấu trúc viết bằng định dạng mô tả chuỗi đối tượng JavaScript Object Notation (JSON) tiêu chuẩn dạng text tĩnh, biểu diễn rõ ràng tài nguyên cần được thiết lập tự động.",
    tags: ["AZ-900", "ARM Templates"]
  },
  {
    id: "az29",
    questionNumber: 29,
    text: "In the IaaS model, which of the following is completely the responsibility of the cloud service provider?",
    options: [
      { key: "A", text: "Installation and configuration of the operating system" },
      { key: "B", text: "Maintaining the physical host server hardware and datacenter security" },
      { key: "C", text: "Configuring Network Security Group inbound rules" },
      { key: "D", text: "Updating application middleware dependencies" }
    ],
    correctAnswers: ["B"],
    category: "Cloud Concepts",
    explanation: "Điểm phân định IaaS là nhà cung cấp đám mây chịu mọi trách nhiệm liên quan đến phần cứng vật lý bên dưới (physical servers, virtualization, hypervisor, physical cabling, power, security of datacenters). Phần hệ điều hành và dữ liệu trở lên là của khách hàng.",
    tags: ["AZ-900", "IaaS"]
  },
  {
    id: "az30",
    questionNumber: 30,
    text: "You have an on-premises local Active Directory forest containing 5,000 users. Which tool should you use to synchronize these identities with Azure Active Directory (Microsoft Entra ID)?",
    options: [
      { key: "A", text: "Azure Application Gateway" },
      { key: "B", text: "Azure AD Connect" },
      { key: "C", text: "Azure ExpressRoute" },
      { key: "D", text: "Azure Portal import tool" }
    ],
    correctAnswers: ["B"],
    category: "Azure Security",
    explanation: "Azure AD Connect (hay Entra Connect) là tiện ích đồng bộ danh tính hàng đầu giúp nhập toàn bộ tài khoản, nhóm và băm mật khẩu từ máy chủ Windows Server Active Directory cục bộ lên mây Azure AD để hỗ trợ đăng nhập một lần (SSO).",
    tags: ["AZ-900", "Entra / AD"]
  },
  {
    id: "az31",
    questionNumber: 31,
    text: "An Azure free account has which of the following spending limits and duration characteristics? (Choose two.)",
    options: [
      { key: "A", text: "The spending limit is fixed (e.g., $200 USD) and cannot be increased or decreased" },
      { key: "B", text: "The free trial trial subscription expires after 12 months" },
      { key: "C", text: "You can create up to 10 Azure free accounts by using the same Microsoft account" },
      { key: "D", text: "You can stop an Azure SQL Database instance to decrease costs" }
    ],
    correctAnswers: ["A", "B"],
    category: "Pricing & Support",
    explanation: "Tài khoản Azure miễn phí mới khởi tạo có hạn mức chi tiêu dùng thử là $200 USD cố định (không thể nâng hay hạ hạn mức này mà chỉ có tùy chọn gỡ bỏ hạn mức để chuyển sang Pay-As-You-Go). Các quyền lợi miễn phí dùng thử sẽ hết hạn sau chính xác 12 tháng.",
    tags: ["AZ-900", "Free Account"]
  },
  {
    id: "az32",
    questionNumber: 32,
    text: "Your application is composed of an Azure App Service web app (with an SLA of 99.95%) and an Azure SQL Database instance (with an SLA of 99.99%). How is the composite SLA for the entire application calculated?",
    options: [
      { key: "A", text: "The composite SLA is the product of both SLAs (0.9995 * 0.9999 = 99.94%)" },
      { key: "B", text: "The composite SLA matches the highest individual SLA (99.99%)" },
      { key: "C", text: "The composite SLA matches the lowest individual SLA (99.95%)" },
      { key: "D", text: "The composite SLA is the average of both SLAs (99.97%)" }
    ],
    correctAnswers: ["A"],
    category: "Pricing & Support",
    explanation: "SLA tích hợp (Composite SLA) của các dịch vụ phụ thuộc song song được tính bằng tích xác suất hoạt động của các thành phần độc lập (99.95% * 99.99% = 99.94%). Kết quả này luôn thấp hơn các SLA đơn lẻ vì tăng số lượng linh kiện cấu thành sẽ tăng nguy cơ có điểm lỗi đơn lẻ (SPOF).",
    tags: ["AZ-900", "SLA Calculation"]
  },
  {
    id: "az33",
    questionNumber: 33,
    text: "Which Azure service should you use to utilize unused compute capacity in Azure datacenters at deep discounts, with the understanding that these resources can be evicted at any time?",
    options: [
      { key: "A", text: "Azure Reserved Virtual Machine Instances" },
      { key: "B", text: "Azure Spot Virtual Machine Instances" },
      { key: "C", text: "Azure Container Instances" },
      { key: "D", text: "Azure Virtual Machine Scale Sets" }
    ],
    correctAnswers: ["B"],
    category: "Pricing & Support",
    explanation: "Azure Spot VMs cho phép tận dụng năng lực tính toán dự phòng dư thừa (unused capacity) của Microsoft với giá chiết khấu cực sâu (lên đến 90%). Tuy nhiên, Azure có quyền đòi lại tài nguyên và tắt máy ảo này bất cứ khi nào hạ tầng cần sử dụng.",
    tags: ["AZ-900", "Spot VMs"]
  },
  {
    id: "az34",
    questionNumber: 34,
    text: "What Service Level Agreement (SLA) or support guarantee applies to Azure services when they are in Public Preview?",
    options: [
      { key: "A", text: "They are covered by a default 99.9% uptime SLA" },
      { key: "B", text: "They are excluded from the Service Level Agreements (SLAs)" },
      { key: "C", text: "They carry a proration-reduced SLA rate of 95%" },
      { key: "D", text: "They are only configurable and supported via the Azure CLI" }
    ],
    correctAnswers: ["B"],
    category: "Pricing & Support",
    explanation: "Các dịch vụ hoặc tính năng đang trong giai đoạn thử nghiệm công khai (Public Preview) được cung cấp với điều khoản 'AS-IS' (như hiện trạng) và hoàn toàn MIỄN TRỪ khỏi các cam kết dịch vụ SLA chính thức. Do đó, khuyến cáo không chạy tải sản xuất (production workloads) trên các tài nguyên này.",
    tags: ["AZ-900", "Public Preview"]
  },
  {
    id: "az35",
    questionNumber: 35,
    text: "According to the Modern Lifecycle Policy for Azure services, what is the minimum notification period Microsoft must provide before retiring a service without a replacement?",
    options: [
      { key: "A", text: "30 days" },
      { key: "B", text: "90 days" },
      { key: "C", text: "6 months" },
      { key: "D", text: "12 months" }
    ],
    correctAnswers: ["D"],
    category: "Pricing & Support",
    explanation: "Chính sách Vòng đời Hiện đại (Modern Lifecycle Policy) quy định Microsoft cam kết sẽ gửi thông báo tối thiểu trước 12 tháng (1 năm) cho khách hàng trước khi chính thức chấm dứt hỗ trợ (retire) một dịch vụ Azure nếu không có dịch vụ thay thế tương đương.",
    tags: ["AZ-900", "Lifecycle"]
  },
  {
    id: "az36",
    questionNumber: 36,
    text: "Which of the following factors directly affect the ongoing billing costs of an Azure resource? (Choose three.)",
    options: [
      { key: "A", text: "The volume of outbound data transfer (data egress)" },
      { key: "B", text: "The volume of inbound data transfer (data ingress)" },
      { key: "C", text: "The selected service tier or sizing of the resource" },
      { key: "D", text: "The Azure region where the resource is deployed" },
      { key: "E", text: "The specific type of data processed" }
    ],
    correctAnswers: ["A", "C", "D"],
    category: "Pricing & Support",
    explanation: "Các yếu tố cấu thành chi hóa đơn Azure bao gồm: 1) Lưu lượng dữ liệu gửi đi (Outbound data transfer/egress) - trong khi nhận dữ liệu vào (ingress) là miễn phí. 2) Cấp độ cấu hình hoặc kích cỡ tài nguyên (Service tier/size). 3) Vị trí đặt hạ tầng (Azure region/Vùng địa lý) vì đơn giá tài nguyên khác nhau tùy vùng.",
    tags: ["AZ-900", "Cost Factors"]
  },
  {
    id: "az37",
    questionNumber: 37,
    text: "Which statement accurately describes the difference between Authentication and Authorization in cloud security?",
    options: [
      { key: "A", text: "Authentication is verifying a user's credentials; Authorization is defining what resources they can access" },
      { key: "B", text: "Authorization is verifying a identity; Authentication is the audit logging process" },
      { key: "C", text: "Both terms represent identical security layers implemented within Azure Policies" },
      { key: "D", text: "Authentication is only used for server applications; Authorization is for human users only" }
    ],
    correctAnswers: ["A"],
    category: "Azure Security",
    explanation: "Xác thực (Authentication) là quá trình nhận diện danh tính thực sự của đối tượng (bằng mật khẩu, OTP, sinh trắc học để chứng minh bạn là ai). Phân quyền (Authorization) diễn ra sau đó để xác định đối tượng có quyền làm gì hoặc truy cập tài nguyên nào.",
    tags: ["AZ-900", "Identities"]
  },
  {
    id: "az38",
    questionNumber: 38,
    text: "Your organization wants to synchronize folders on local on-premises Windows Servers directly into cloud-hosted Azure File shares. Which native tool should you deploy?",
    options: [
      { key: "A", text: "AzCopy command-line utility" },
      { key: "B", text: "Azure File Sync" },
      { key: "C", text: "Azure Storage Explorer" },
      { key: "D", text: "Azure Data Box" }
    ],
    correctAnswers: ["B"],
    category: "Azure Services",
    explanation: "Azure File Sync là giải pháp hoàn hảo để lưu tệp thông minh dạng cache tốc độ cao cục bộ tại máy chủ Windows Server on-premises của bạn, đồng thời đồng bộ hóa hai chiều tự động lên một Azure File Share tập trung trên mây.",
    tags: ["AZ-900", "Storage Sync"]
  },
  {
    id: "az39",
    questionNumber: 39,
    text: "Which service in Azure is a fast, easy, and collaborative Apache Spark-based big data analytics and machine learning platform?",
    options: [
      { key: "A", text: "Azure Synapse Analytics" },
      { key: "B", text: "Azure Databricks" },
      { key: "C", text: "Azure DevTest Labs" },
      { key: "D", text: "Azure HDInsight" }
    ],
    correctAnswers: ["B"],
    category: "Azure Services",
    explanation: "Azure Databricks là một nền tảng phân tích dữ liệu lớn và học máy chuyên nghiệp tối ưu hóa cao dựa trên nền Apache Spark, giúp các nhà khoa học dữ liệu (data scientists) cộng tác làm việc cực kỳ mạnh mẽ.",
    tags: ["AZ-900", "Databricks"]
  },
  {
    id: "az40",
    questionNumber: 40,
    text: "You applied a 'ReadOnly' lock to an Azure Resource Group. Which of the following activities is now permitted on resources within that group?",
    options: [
      { key: "A", text: "Authorized users can read the resource configuration, but cannot delete or modify it" },
      { key: "B", text: "Users can modify resource parameters, but cannot delete them" },
      { key: "C", text: "The resource group is automatically deallocated to prevent charge accrual" },
      { key: "D", text: "Only members of the Global Administrators group can modify resources" }
    ],
    correctAnswers: ["A"],
    category: "Azure Governance",
    explanation: "Khóa ReadOnly (Chỉ đọc) ngăn cản người dùng sửa đổi cấu hình hoặc xóa bỏ tài nguyên (ReadOnly chặn cả Write và Delete), trong khi khóa CanNotDelete (Không được xóa) vẫn cho phép sửa đổi hoạt động bình thường nhưng cấm hành vi hủy hoại xóa bỏ.",
    tags: ["AZ-900", "Locks"]
  },
  {
    id: "az41",
    questionNumber: 41,
    text: "How many copies of your data are maintained and stored when using Geo-Zone-Redundant Storage (GZRS) under Azure Storage?",
    options: [
      { key: "A", text: "3 copies" },
      { key: "B", text: "4 copies" },
      { key: "C", text: "6 copies" },
      { key: "D", text: "12 copies" }
    ],
    correctAnswers: ["C"],
    category: "Azure Services",
    explanation: "GZRS kết hợp tính sẵn sàng cao của ZRS (sao chép đồng bộ 3 bản tại 3 vùng sẵn sàng Availability Zones ở khu vực chính) cộng với sao chép bất đồng bộ sang một khu vực địa lý dự phòng thứ hai (thêm 3 bản dạng LRS tại đó), nâng tổng số bản sao lưu dữ liệu lên là 6 bản sao.",
    tags: ["AZ-900", "Storage Replication"]
  },
  {
    id: "az42",
    questionNumber: 42,
    text: "Which native Azure service serves as your personalized cloud consultant, providing actionable recommendations to optimize costs, efficiency, security, and high availability?",
    options: [
      { key: "A", text: "Azure Sentinel" },
      { key: "B", text: "Azure Service Health" },
      { key: "C", text: "Azure Advisor" },
      { key: "D", text: "Azure Log Analytics" }
    ],
    correctAnswers: ["C"],
    category: "Azure Governance",
    explanation: "Azure Advisor quét sâu kiến trúc hạ tầng đám mây của bạn và đưa ra những khuyến nghị thực thi hữu ích chia theo 5 trụ cột chính: Độ tin cậy (Reliability), Bảo mật (Security), Hiệu năng (Performance), Vận hành xuất sắc (Operational Excellence) và Tối ưu hóa chi phí (Cost).",
    tags: ["AZ-900", "Advisor"]
  },
  {
    id: "az43",
    questionNumber: 43,
    text: "Which cloud service category minimizes the administrative and setup responsibilities of a customer to the highest possible extent?",
    options: [
      { key: "A", text: "Infrastructure as a Service (IaaS)" },
      { key: "B", text: "Platform as a Service (PaaS)" },
      { key: "C", text: "Software as a Service (SaaS)" },
      { key: "D", text: "Database as a Service (DaaS)" }
    ],
    correctAnswers: ["C"],
    category: "Cloud Concepts",
    explanation: "Mô hình SaaS (Phần mềm dưới dạng dịch vụ) giải phóng tối đa áp lực quản trị cho khách hàng. Nhà cung cấp đám mây chịu mọi trọng trách từ hệ điều hành, viết mã nguồn ứng dụng, cập nhật bảo mật cho đến phân phối, khách hàng chỉ việc đăng nhập và sử dụng ứng dụng.",
    tags: ["AZ-900", "Cloud Types"]
  },
  {
    id: "az44",
    questionNumber: 44,
    text: "When you link an Azure DNS Private Zone to an Azure Virtual Network (VNet), which feature allows virtual machines to automatically register their DNS hostnames?",
    options: [
      { key: "A", text: "Auto-registration" },
      { key: "B", text: "Zone Delegation" },
      { key: "C", text: "DNS Peering" },
      { key: "D", text: "ExpressRoute Routing" }
    ],
    correctAnswers: ["A"],
    category: "Azure Services",
    explanation: "Khi bật tính năng Tự động đăng ký (Auto-registration) trên một liên kết mạng ảo trong Azure DNS Private Zone, hệ thống sẽ tự động tạo bản ghi DNS định danh 'A Record' trỏ đúng hostname của VM mới khởi tạo về địa chỉ IP nội bộ của nó mà không cần can thiệp thủ công.",
    tags: ["AZ-900", "Azure DNS"]
  },
  {
    id: "az45",
    questionNumber: 45,
    text: "You want to be notified when Microsoft plans to perform critical maintenance tasks that can temporarily degrade the availability of your active cloud Virtual Machines. Which service should you configure?",
    options: [
      { key: "A", text: "Azure Service Health" },
      { key: "B", text: "Azure Monitor Metrics" },
      { key: "C", text: "Azure Advisor recommendations" },
      { key: "D", text: "Azure Sentinel playbooks" }
    ],
    correctAnswers: ["A"],
    category: "Azure Governance",
    explanation: "Azure Service Health cung cấp một lăng kính cá nhân hóa thể hiện chính xác trạng thái sức khỏe của các dịch vụ bạn đang dùng, đồng thời hiển thị toàn bộ cảnh báo lịch bảo trì định kỳ (Planned Maintenance) trực tiếp từ Microsoft.",
    tags: ["AZ-900", "Service Health"]
  },
  {
    id: "az46",
    questionNumber: 46,
    text: "Which specialized technological solution extends Azure governance, resources monitoring, and policy enforcement to servers and Kubernetes clusters hosted on-premises or in other clouds (AWS, GCP)?",
    options: [
      { key: "A", text: "Azure Active Directory (Microsoft Entra ID)" },
      { key: "B", text: "Azure Arc" },
      { key: "C", text: "Azure Front Door" },
      { key: "D", text: "Azure Pipelines agent" }
    ],
    correctAnswers: ["B"],
    category: "Azure Services",
    explanation: "Azure Arc đóng vai trò là cây cầu nối chiếu tất cả các tài nguyên hạ tầng phi-Azure (không chạy trên đám mây Azure như máy chủ on-premise, máy ảo trên AWS/GCP, cụm Kubernetes ngoại vi) về dạng một đối tượng tài nguyên trên Azure Portal để giám sát và cài đặt chính sách tập trung.",
    tags: ["AZ-900", "Azure Arc"]
  },
  {
    id: "az47",
    questionNumber: 47,
    text: "Your company has terabytes of database backups currently on-premises. You need to migrate this data over to Azure in a highly secure, offline, inexpensive, and reliable manner. Which physical migration appliance should you request?",
    options: [
      { key: "A", text: "Azure Data Box" },
      { key: "B", text: "AzCopy command-line utility" },
      { key: "C", text: "Azure Storage Explorer" },
      { key: "D", text: "Azure ExpressRoute" }
    ],
    correctAnswers: ["A"],
    category: "Azure Services",
    explanation: "Azure Data Box là thiết bị lưu trữ vật lý siêu bền chắc chuyên dụng do Microsoft gửi trực tiếp tới văn phòng của bạn. Bạn copy dữ liệu ngoại tuyến (offline) vào đó rồi gửi trả lại về trung tâm dữ liệu của Azure để đưa lên đám mây một cách nhanh chóng và an toàn.",
    tags: ["AZ-900", "Migration Hardware"]
  },
  {
    id: "az48",
    questionNumber: 48,
    text: "What is a concrete example of Vertical Scaling (scaling up/down) in Microsoft Azure cloud environment?",
    options: [
      { key: "A", text: "Adding an additional CPU, RAM, or storage disk to an existing virtual machine" },
      { key: "B", text: "Adding 10 more identical virtual machines behind a load balancer" },
      { key: "C", text: "Deploying the same virtual machine into multiple global regions" },
      { key: "D", text: "Automatically scaling the instance count of an active cluster" }
    ],
    correctAnswers: ["A"],
    category: "Cloud Concepts",
    explanation: "Tăng trưởng theo chiều dọc (Vertical Scaling/Scale up) là hành vi nâng cao sức mạnh phần cứng của một thực thể duy nhất (như nâng cấp cấu hình VM từ 2 vCPUs lên 8 vCPUs, bổ sung thêm RAM). Trái lại, Scale out (chiều ngang) là bổ sung thêm số lượng thực thể song song.",
    tags: ["AZ-900", "Scalability"]
  },
  {
    id: "az49",
    questionNumber: 49,
    text: "Which tool in Azure should you configure as a native governance feature to send automated email alerts to system administrators when spending exceeds a pre-set threshold within a billing period?",
    options: [
      { key: "A", text: "Azure Budgets (Budget alerts)" },
      { key: "B", text: "Azure Advisor recommendations" },
      { key: "C", text: "Network Security Groups (NSGs)" },
      { key: "D", text: "Azure Cost Matrix" }
    ],
    correctAnswers: ["A"],
    category: "Pricing & Support",
    explanation: "Budget Alerts (Cảnh báo ngân sách) nằm trong bộ giải pháp Cost Management của Azure, hỗ trợ tự động gửi thông báo qua email hoặc kích hoạt mã lệnh tự động (Webhooks) ngay khi chi tiêu thực tế hoặc ước tính chạm hạn mức bạn quy định.",
    tags: ["AZ-900", "Budgets"]
  },
  {
    id: "az50",
    questionNumber: 50,
    text: "Which of the following cloud infrastructure traits ensures continuous access to applications without any noticeable degradation or downtime in the event of an underlying physical rack failure?",
    options: [
      { key: "A", text: "Elasticity" },
      { key: "B", text: "High Availability (HA)" },
      { key: "C", text: "Predictability" },
      { key: "D", text: "Agility" }
    ],
    correctAnswers: ["B"],
    category: "Cloud Concepts",
    explanation: "Tính sẵn sàng cao (High Availability) là khả năng bảo đảm cấu trúc hệ thống hoạt động liên tục trong thời gian dài mà không bị gián đoạn dịch vụ đáng kể ngay cả khi có sự sụp đổ vật lý một phần của tủ rack máy chủ, nhờ có sẵn các bản sao lưu nóng và hệ thống cân bằng tải tự động.",
    tags: ["AZ-900", "High Availability"]
  },
  {
    id: "az51",
    questionNumber: 51,
    text: "In which type of cloud model are all hardware resources owned by a third-party and shared between multiple tenants who pay for resource consumption?",
    options: [
      { key: "A", text: "Private Cloud" },
      { key: "B", text: "Hybrid Cloud" },
      { key: "C", text: "Public Cloud" },
      { key: "D", text: "Federal Cloud" }
    ],
    correctAnswers: ["C"],
    category: "Cloud Concepts",
    explanation: "Đám mây công cộng (Public Cloud - ví dụ: Microsoft Azure) là mô hình trong đó toàn bộ máy móc vật lý nằm ở thuộc sở hữu của nhà phát triển bên thứ ba (Microsoft), chia sẻ đa bên thuê (multi-tenant) và tính tiền bám sát dung lượng thực tế.",
    tags: ["AZ-900", "Cloud Types"]
  },
  {
    id: "az52",
    questionNumber: 52,
    text: "An Azure web application queries an on-premises Microsoft SQL database hosted directly inside your local office server room. What type of cloud hosting is this?",
    options: [
      { key: "A", text: "Public Cloud only" },
      { key: "B", text: "Private Cloud only" },
      { key: "C", text: "Hybrid Cloud" },
      { key: "D", text: "Multi-vendor multi-cloud" }
    ],
    correctAnswers: ["C"],
    category: "Cloud Concepts",
    explanation: "Mô hình đám mây lai (Hybrid Cloud) kết hợp hạ tầng đám mây công cộng (Azure App Service) kết hợp với các cơ sở hạ tầng lưu trữ cục bộ tại máy chủ on-premises của doanh nghiệp để trao đổi thông tin cục bộ riêng tư.",
    tags: ["AZ-900", "Cloud Types"]
  },
  {
    id: "az53",
    questionNumber: 53,
    text: "If Microsoft fails to meet the guaranteed Service Level Agreement (SLA) uptime percentage for an active paid Azure service, how does you get compensated?",
    options: [
      { key: "A", text: "Microsoft refunds cash directly to your bank account" },
      { key: "B", text: "Microsoft applies a service credit to your Azure active billing account" },
      { key: "C", text: "Microsoft automatically migrates your VMs to a different region" },
      { key: "D", text: "Microsoft provides discount coupons redeemable for Microsoft Store items" }
    ],
    correctAnswers: ["B"],
    category: "Pricing & Support",
    explanation: "Đền bù vi phạm cam kết dịch vụ SLA của Azure không hoàn bằng tiền mặt. Thay vào đó, Microsoft bồi hoàn dưới dạng 'Service Credit' (tín dụng dịch vụ) trừ trực tiếp vào hóa đơn thanh toán kỳ kế tiếp của bạn.",
    tags: ["AZ-900", "SLAs"]
  },
  {
    id: "az54",
    questionNumber: 54,
    text: "Which of the following describes the core functionality of Azure Site Recovery?",
    options: [
      { key: "A", text: "It prevents unauthorized intrusion over the network" },
      { key: "B", text: "It provides a central repository for application security guidelines" },
      { key: "C", text: "It acts as a disaster recovery service by orchestrating replication of virtual machines" },
      { key: "D", text: "It scales active server components based on CPU metrics" }
    ],
    correctAnswers: ["C"],
    category: "Azure Services",
    explanation: "Azure Site Recovery là giải pháp Khắc phục thảm họa (Disaster Recovery). Công cụ này liên tục nhân bản (replicate) hoạt động của máy ảo từ khu vực chính sang khu vực địa lý dự phòng để chuẩn bị kịch bản khôi phục nóng (failover) tức thời nếu xảy ra sự cố sập toàn vùng.",
    tags: ["AZ-900", "Site Recovery"]
  },
  {
    id: "az55",
    questionNumber: 55,
    text: "You want to prevent authorized administrators from accidentally deleting resources within a critical Resource Group, while still permitting them to create new resources and modify existing ones. Which Resource Lock model should you assign?",
    options: [
      { key: "A", text: "ReadOnly lock" },
      { key: "B", text: "CanNotDelete (Delete) lock" },
      { key: "C", text: "Implicit deny lock" },
      { key: "D", text: "Administrative block lock" }
    ],
    correctAnswers: ["B"],
    category: "Azure Governance",
    explanation: "Khóa CanNotDelete (Hay Delete lock) ngăn chặn hoàn toàn hành vi xóa bỏ (Delete) tài nguyên nhưng cho phép người dùng đọc và cập nhật tham số cấu hình (Write/Read). Khóa ReadOnly chặn cả việc ghi nên không thể dùng cho trường hợp này.",
    tags: ["AZ-900", "Locks"]
  },
  {
    id: "az56",
    questionNumber: 56,
    text: "True or False: Azure DNS supports private domain name resolution for internal networks without exposing trade metrics to the public internet.",
    options: [
      { key: "A", text: "True" },
      { key: "B", text: "False" }
    ],
    correctAnswers: ["A"],
    category: "Azure Services",
    explanation: "Đúng (True). Azure DNS hỗ trợ cả giải quyết tên miền công cộng lẫn 'Azure DNS Private Zones' cho mạng nội bộ VNet giúp ẩn toàn bộ thông số phân giải DNS hữu ích khỏi không gian mạng internet công cộng.",
    tags: ["AZ-900", "Azure DNS"]
  },
  {
    id: "az57",
    questionNumber: 57,
    text: "Does Azure Active Directory (Microsoft Entra ID) require you to deploy and manage virtualized Active Directory domain controller (DC) servers over virtual machines?",
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    correctAnswers: ["B"],
    category: "Azure Security",
    explanation: "Không (No). Entra ID (Azure AD) là hệ thống danh tính mây gốc hoàn toàn kiểu dịch vụ (Identity-as-a-Service), không yêu cầu quản trị viên tự dựng các máy chủ Domain Controllers (DCs) hay cài hệ điều hành Windows Server để vận hành cấu trúc thư mục.",
    tags: ["AZ-900", "Entra / AD"]
  },
  {
    id: "az58",
    questionNumber: 58,
    text: "Where is the absolute central repository to access detailed compliance standards, independent auditor certifications, and regulatory assessments for Microsoft Cloud services?",
    options: [
      { key: "A", text: "Azure Security Center dashboard" },
      { key: "B", text: "Microsoft Service Trust Portal" },
      { key: "C", text: "Azure Cost Vault" },
      { key: "D", text: "Microsoft Advisor portal" }
    ],
    correctAnswers: ["B"],
    category: "Azure Governance",
    explanation: "Service Trust Portal (Cổng thông tin tin cậy dịch vụ) lưu trữ toàn hệ thống báo cáo kiểm toán độc lập chi tiết, chứng nhận quốc tế (như ISO, SOC, HIPAA, GDPR) liên quan bám sát tính tuân thủ pháp lý của cơ sở hạ tầng Microsoft.",
    tags: ["AZ-900", "Service Trust Portal"]
  },
  {
    id: "az59",
    questionNumber: 59,
    text: "True or False: Microsoft provides a lifetime free tier subscription with unmetered access to all premium virtual machine size configurations.",
    options: [
      { key: "A", text: "True" },
      { key: "B", text: "False" }
    ],
    correctAnswers: ["B"],
    category: "Pricing & Support",
    explanation: "Sai (False). Chương trình Azure Free Account chỉ cho dùng thử các hạn mức tài nguyên nhỏ (bị giới hạn về nhóm cấu hình cơ bản) trong vòng 12 tháng đầu, chứ không cung cấp truy cập không giới hạn cho các máy ảo đắt tiền.",
    tags: ["AZ-900", "Free Account"]
  },
  {
    id: "az60",
    questionNumber: 60,
    text: "Can a single Azure Resource Group contain resources deployed across multiple different Azure regions/locations?",
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    correctAnswers: ["A"],
    category: "Azure Architecture",
    explanation: "Đúng (Yes). Rất nhiều người học nhầm lẫn vì Resource Group có một thuộc tính Location khi khởi tạo. Tuy nhiên, thuộc tính đó chỉ là nơi lưu trữ siêu dữ liệu (metadata) của nhóm. Bản thân các tài nguyên bên trong nhóm hoàn toàn có thể chạy ở bất kỳ vùng nào trên thế giới.",
    tags: ["AZ-900", "Resource Groups"]
  },
  {
    id: "az61",
    questionNumber: 61,
    text: "When you apply a lock to an Azure Resource Group, do child resources within that group automatically inherit the lock restrictions?",
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    correctAnswers: ["A"],
    category: "Azure Governance",
    explanation: "Đúng (Yes). Các cơ chế khóa (ReadOnly, CanNotDelete) tuân thủ mô hình thừa kế từ trên xuống dưới (top-down inheritance). Mọi tài nguyên con đặt trong Resource Group bị khóa sẽ lập tức thừa hưởng đầy đủ các hạn chế của khóa đó.",
    tags: ["AZ-900", "Locks"]
  },
  {
    id: "az62",
    questionNumber: 62,
    text: "Which cost estimation tool is specifically designed to evaluate and demonstrate cost savings of migrating physical server workloads to Azure over a detailed multi-year horizon?",
    options: [
      { key: "A", text: "Azure Pricing Calculator" },
      { key: "B", text: "Total Cost of Ownership (TCO) Calculator" },
      { key: "C", text: "Azure Cost Advisor" },
      { key: "D", text: "Compliance Manager" }
    ],
    correctAnswers: ["B"],
    category: "Pricing & Support",
    explanation: "TCO Calculator giúp bạn so sánh tổng chi phí sở hữu khi duy trì hạ tầng vận hành máy chủ vật lý on-premise của bạn (gồm cả tiền nhân sự, điện tiêu thụ, làm mát) so với chi phí dự kiến khi dịch chuyển toàn bộ lên nền mây Microsoft Azure.",
    tags: ["AZ-900", "TCO"]
  },
  {
    id: "az63",
    questionNumber: 63,
    text: "What software must you install locally on your desktop workstation computer before you can use the Azure Cloud Shell?",
    options: [
      { key: "A", text: "Azure CLI binaries" },
      { key: "B", text: "PowerShell Core 7.x" },
      { key: "C", text: "No software is required; it is accessible directly via an HTML5 web browser" },
      { key: "D", text: "Azure Storage Explorer app" }
    ],
    correctAnswers: ["C"],
    category: "Azure Services",
    explanation: "Azure Cloud Shell chạy hoàn toàn trên đám mây dưới dạng một giao diện container tạm thời. Bạn chỉ cần mở một trình duyệt Web hỗ trợ tiêu chuẩn HTML5 thông thường là đã có thể gõ lệnh Bash/PowerShell đầy đủ mà không cần cài đặt bất kỳ thành phần nào khác.",
    tags: ["AZ-900", "Cloud Shell"]
  },
  {
    id: "az64",
    questionNumber: 64,
    text: "Which of the following security services ensures volumetric website protection, preventing application-level server exhaust attacks from compromising service availability?",
    options: [
      { key: "A", text: "Azure Key Vault protection" },
      { key: "B", text: "Azure Information Protection" },
      { key: "C", text: "Azure DDoS Protection (Standard/Network Protection)" },
      { key: "D", text: "Network Security Groups only" }
    ],
    correctAnswers: ["C"],
    category: "Azure Security",
    explanation: "Azure DDoS Protection được thiết kế với thuật toán phân tích lưu lượng thông minh, tự động ngăn chặn các cuộc tấn công từ chối dịch vụ phân tán quy mô lớn (volumetric attacks) nhằm bảo toàn tối đa tính sẵn sàng hoạt động của ứng dụng.",
    tags: ["AZ-900", "DDoS Protection"]
  },
  {
    id: "az65",
    questionNumber: 65,
    text: "You intend to deploy a customized invoicing website in Azure. The site requires several supporting legacy system services to run concurrently within the server hosting environment. What deployment model is recommended?",
    options: [
      { key: "A", text: "Software as a Service (SaaS)" },
      { key: "B", text: "Infrastructure as a Service (IaaS)" },
      { key: "C", text: "Platform as a Service (PaaS)" },
      { key: "D", text: "Function as a Service (FaaS)" }
    ],
    correctAnswers: ["B"],
    category: "Cloud Concepts",
    explanation: "Do ứng dụng yêu cầu quá nhiều thành phần tiền đề cũ chạy ngầm (legacy system services) liên quan sâu đến hệ điều hành nền, bạn phải chọn IaaS (Máy ảo VM) để nắm toàn bộ quyền quản trị Windows/Linux nhằm tùy biến cài đặt.",
    tags: ["AZ-900", "IaaS"]
  },
  {
    id: "az66",
    questionNumber: 66,
    text: "Choose the term that correctly represents Microsoft Sentinel's categorization as a cloud-native cybersecurity solution:",
    options: [
      { key: "A", text: "A specialized virtualization layer" },
      { key: "B", text: "A Security Information and Event Management (SIEM) and Security Orchestration Automated Response (SOAR) solution" },
      { key: "C", text: "An identity federation conduit" },
      { key: "D", text: "A hardware security module (HSM) broker" }
    ],
    correctAnswers: ["B"],
    category: "Azure Security",
    explanation: "Microsoft Sentinel thu thập toàn bộ dữ liệu nhật ký bảo mật (SIEM) từ tất cả các đầu thiết bị trên mây và on-premise, liên kết phân tích AI để phát hiện hiểm họa và kích hoạt các kịch bản phản ứng xử lý thông tin tự động (SOAR).",
    tags: ["AZ-900", "Sentinel"]
  },
  {
    id: "az67",
    questionNumber: 67,
    text: "What represents an Azure Policy 'Initiative definition'?",
    options: [
      { key: "A", text: "A grouping or collection of multiple policy definitions managed together towards a single overarching goal" },
      { key: "B", text: "A blueprint container for Role-Based appointments" },
      { key: "C", text: "An automated billing audit checklist tool" },
      { key: "D", text: "A resource group configuration file written in JSON" }
    ],
    correctAnswers: ["A"],
    category: "Azure Governance",
    explanation: "Một định nghĩa Initiative (Sáng kiến) thực chất là tập hợp gom nhóm nhiều quy tắc chính sách (Policy definitions) riêng lẻ lại thành một mục tiêu duy nhất (ví dụ: Initiative tuân thủ tiêu chuẩn bảo mật PCI-DSS gồm hàng trăm policy con) để tiện gán và quản lý.",
    tags: ["AZ-900", "Azure Policy"]
  },
  {
    id: "az68",
    questionNumber: 68,
    text: "Which service in Azure should you employ to configure Just-In-Time (JIT) VM access, locking down management ports (like RDP 3389 or SSH 22) by default?",
    options: [
      { key: "A", text: "Azure Bastion only" },
      { key: "B", text: "Microsoft Defender for Cloud (formerly Security Center)" },
      { key: "C", text: "Azure Active Directory admin portal" },
      { key: "D", text: "Azure Front Door" }
    ],
    correctAnswers: ["B"],
    category: "Azure Security",
    explanation: "Microsoft Defender for Cloud cung cấp tính năng JIT VM Access. Các cổng truy cập SSH/RDP trên VM luôn bị chặn bọc tường lửa và chỉ mở ra trong một khoảng thời gian giới hạn sau khi được phê duyệt quyền yêu cầu truy cập từ quản lý.",
    tags: ["AZ-900", "Security Management"]
  },
  {
    id: "az69",
    questionNumber: 69,
    text: "True or False: Enabling single sign-on (SSO) within Azure Active Directory prevents users from registering personal mobile iOS and Android devices with the corporate directory.",
    options: [
      { key: "A", text: "True" },
      { key: "B", text: "False" }
    ],
    correctAnswers: ["B"],
    category: "Azure Security",
    explanation: "Sai (False). Việc bật SSO giúp người dùng đăng nhập nhanh một tài khoản sử dụng nhiều app. Quá trình này không hề xung đột hay ngăn cấm việc người dùng thực hiện hoạt động đăng ký/quản lý thiết bị cầm tay iOS/Android vào danh bạ Entra ID.",
    tags: ["AZ-900", "Identities"]
  },
  {
    id: "az70",
    questionNumber: 70,
    text: "Can a Network Security Group (NSG) be directly associated and bound to an entire Azure subscription or Management Group?",
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    correctAnswers: ["B"],
    category: "Azure Security",
    explanation: "Không (No). NSG chỉ có thể được gán bám sát vào 2 thực thể cụ thể: 1) Cấp độ mạng con (Subnet) của một Virtual Network. 2) Cấp độ card mạng vật lý ảo (NIC - Network Interface) của một máy ảo cụ thể.",
    tags: ["AZ-900", "NSG"]
  },
  {
    id: "az71",
    questionNumber: 71,
    text: "Which Azure resource allows you to group virtual machines based on their application roles (e.g., 'WebServers') and use that group as a target source/destination directly inside your NSG rules?",
    options: [
      { key: "A", text: "Management Groups" },
      { key: "B", text: "Application Security Groups (ASGs)" },
      { key: "C", text: "Local Network Gateways" },
      { key: "D", text: "Resource group tags" }
    ],
    correctAnswers: ["B"],
    category: "Azure Security",
    explanation: "Application Security Group (ASG) là tấm khiên phân loại máy ảo theo lớp nghiệp vụ. Nhờ gán VM vào ASG, bạn có thể viết quy tắc NSG ngắn gọn như 'Cho phép lưu thông từ ASG_Web sang ASG_Database' mà không cần điền thủ công hàng loạt dải IP động dễ sai sót.",
    tags: ["AZ-900", "NSG"]
  },
  {
    id: "az72",
    questionNumber: 72,
    text: "True or False: An Azure Storage account is classified as a classic example of an Azure Resource Manager (ARM) resource deployment.",
    options: [
      { key: "A", text: "True" },
      { key: "B", text: "False" }
    ],
    correctAnswers: ["A"],
    category: "Azure Services",
    explanation: "Đúng (True). Toàn bộ thực thể quản lý trong Azure (gồm máy chủ ảo, cơ sở dữ liệu SQL, tài khoản lưu trữ Storage Account) đều là các đối tượng được đăng ký, quản lý cấu trúc và phân đoạn quyền bởi trình điều khiển Azure Resource Manager (ARM).",
    tags: ["AZ-900", "Storage"]
  },
  {
    id: "az73",
    questionNumber: 73,
    text: "Who is eligible to purchase subscriptions and use Microsoft Azure Germany specialized sovereign cloud services?",
    options: [
      { key: "A", text: "Legal residents of Germany only" },
      { key: "B", text: "German governmental agency heads only" },
      { key: "C", text: "Any customer or enterprise worldwide that requires their data to reside strictly inside isolated German datacenters" },
      { key: "D", text: "Customers using Microsoft Dynamics 365 services only" }
    ],
    correctAnswers: ["C"],
    category: "Cloud Concepts",
    explanation: "Azure Germany mở rộng cơ hội cho mọi tổ chức, cá nhân toàn cầu có nhu cầu pháp lý bắt buộc lưu trữ cấu trúc dữ liệu khép kín vật lý hoàn toàn bên trong ranh giới địa lý nước Đức dưới sự giám sát độc lập của người bảo quản ủy thác dữ liệu đức (Data Trustee).",
    tags: ["AZ-900", "Sovereign Clouds"]
  },
  {
    id: "az74",
    questionNumber: 74,
    text: "True or False: Outbound data transfers from any Azure active region to any on-premises localized server network are always free of charge.",
    options: [
      { key: "A", text: "True" },
      { key: "B", text: "False" }
    ],
    correctAnswers: ["B"],
    category: "Pricing & Support",
    explanation: "Sai (False). Việc nhận dữ liệu gửi vào đám mây (data ingress/inbound) luôn luôn được miễn phí. Tuy nhiên, dữ liệu tải ra ngoài đám mây Azure gửi về on-premise (data egress/outbound) sẽ bị tính phí bám sát từng Gigabyte tiêu dùng vượt hạn mức miễn phí ban đầu tùy vùng.",
    tags: ["AZ-900", "Billing"]
  },
  {
    id: "az75",
    questionNumber: 75,
    text: "Under the hybrid and Platform as a Service (PaaS) models, who is responsible for managing the installations of base operating system patches and platform framework updates?",
    options: [
      { key: "A", text: "The cloud customer only" },
      { key: "B", text: "The cloud service provider (Microsoft) only" },
      { key: "C", text: "It is shared between on-premise system administrators and DBAs" },
      { key: "D", text: "The local internet service provider" }
    ],
    correctAnswers: ["B"],
    category: "Cloud Concepts",
    explanation: "Ở mô hình dịch vụ PaaS, Microsoft lo toàn vẹn khâu bảo trì máy chủ và vá lỗi hệ điều hành bọc lót bên dưới (OS patching, firmware upgrades). Trách nhiệm này hoàn toàn thuộc về nhà cung cấp đám mây.",
    tags: ["AZ-900", "Shared Responsibility"]
  },
  {
    id: "az76",
    questionNumber: 76,
    text: "What automated mechanisms does Microsoft Sentinel employ to trigger threat alerts responses and execute target corrective procedures?",
    options: [
      { key: "A", text: "Azure policies initiative" },
      { key: "B", text: "Playbooks containing orchestrated sequences of automation" },
      { key: "C", text: "Resource group tags" },
      { key: "D", text: "Log Analytics workspaces queries" }
    ],
    correctAnswers: ["B"],
    category: "Azure Security",
    explanation: "Microsoft Sentinel sử dụng các 'Playbooks' (Kịch bản phản ứng) chạy bằng nền tảng Logic Apps. Khi rà quét phát hiện hiểm họa bảo mật, Playbook sẽ thực thi quy trình đóng chặn cổng mạng hoặc chặn tài khoản nghi vấn tức thì không cần đợi quản trị viên bấm nút.",
    tags: ["AZ-900", "Sentinel"]
  },
  {
    id: "az77",
    questionNumber: 77,
    text: "Which of the following represents the initial and foundational phase in the Microsoft Cloud Adoption Framework (CAF) for Azure?",
    options: [
      { key: "A", text: "Ready your organization" },
      { key: "B", text: "Define your strategy" },
      { key: "C", text: "Adopt the cloud" },
      { key: "D", text: "Make a deployment plan" }
    ],
    correctAnswers: ["B"],
    category: "Cloud Concepts",
    explanation: "Khung dịch chuyển mây Microsoft Cloud Adoption Framework (CAF) bắt đầu tiên quyết với giai đoạn 'Define your strategy' (Xác định chiến lược - hiểu động lực thúc đẩy và bài toán tài chính tối ưu kinh doanh), sau đó mới tới Plan, Ready và Adopt.",
    tags: ["AZ-900", "CAF"]
  },
  {
    id: "az78",
    questionNumber: 78,
    text: "When communicating over an active ExpressRoute circuit, what represents the pricing structure of data transfer?",
    options: [
      { key: "A", text: "Both inbound and outbound data transfers are free of charge" },
      { key: "B", text: "Inbound data transfer is free of charge, but outbound transfer is charged based on usage metrics" },
      { key: "C", text: "Outbound data transfer is free, but inbound transfer carries high rates" },
      { key: "D", text: "Both inbound and outbound transfers are charged identical flat costs" }
    ],
    correctAnswers: ["B"],
    category: "Pricing & Support",
    explanation: "Đối với kết nối mạng riêng cao cấp ExpressRoute: Luồng tải dữ liệu đi vào (Inbound) mây luôn luôn là miễn phí. Tuy nhiên, luồng dữ liệu trích xuất đi ra (Outbound) sẽ được tính tiền dựa trên lượng GB tiêu hao thực tế (nếu dùng gói Metered Port) hoặc phẳng theo gói không giới hạn.",
    tags: ["AZ-900", "Billing"]
  },
  {
    id: "az79",
    questionNumber: 79,
    text: "Which of the following statements is true regarding Microsoft Defender for Cloud pricing tiers and features?",
    options: [
      { key: "A", text: "All advanced cloud security features are free of charge" },
      { key: "B", text: "Only foundational Cloud Security Posture Management (CSPM) features are free of charge" },
      { key: "C", text: "The service requires you to purchase separate Windows Server licenses" },
      { key: "D", text: "It cannot monitor non-Azure cloud resources" }
    ],
    correctAnswers: ["B"],
    category: "Pricing & Support",
    explanation: "Microsoft Defender for Cloud cung cấp miễn phí các khuyến nghị kiểm tra tư thế an ninh cơ sở (Foundational CSPM - bao gồm chấm điểm Secure Score). Còn các tính năng bảo vệ máy chủ nâng cao (Defender plans / CWPP) sẽ có tính phí dịch vụ.",
    tags: ["AZ-900", "Security Management"]
  },
  {
    id: "az80",
    questionNumber: 80,
    text: "Who has access permission to utilize the Microsoft Azure Pricing Calculator and Azure TCO Calculator pages?",
    options: [
      { key: "A", text: "System owners with an active Enterprise Agreement (EA) subscription only" },
      { key: "B", text: "Anyone with an internet browser and target connection" },
      { key: "C", text: "Only validated members of the Azure Security Center team" },
      { key: "D", text: "Billing administrators with an active subscription only" }
    ],
    correctAnswers: ["B"],
    category: "Pricing & Support",
    explanation: "Các bộ công cụ tính toán mô phỏng giá (Pricing Calculator & TCO Calculator) của Azure được Microsoft phát hành công khai hoàn toàn trên trang web công cộng. Bất kỳ ai cũng có thể truy cập để tự ước lượng chi phí mà không bắt buộc phải có tài khoản hay đăng ký Azure active.",
    tags: ["AZ-900", "Pricing tools"]
  }
];

export const getQuestionsByCategory = (category: string): Question[] => {
  return az900Questions.filter(q => q.category === category);
};

export const getQuestionsByTag = (tag: string): Question[] => {
  return az900Questions.filter(q => q.tags?.includes(tag));
};
