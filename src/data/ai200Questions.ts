import { Question } from '../types';

export const ai200Questions: Question[] = [
  {
    "id": "ai200-1",
    "questionNumber": 1,
    "text": "You manage several versions of a container image in Azure Container Registry.  \n  \nThe production deployment must consistently run the identical image build, even if tags change later.  \n  \nYou need to guarantee predictable, immutable image selection during deployment. What should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Tag the image as production and deploy it by using the production tag."
      },
      {
        "key": "B",
        "text": "Schedule nightly rebuilds of the image."
      },
      {
        "key": "C",
        "text": "Configure deployment to use the latest tag."
      },
      {
        "key": "D",
        "text": "Identify the image by using its SHA digest."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Hình ảnh vùng chứa manifest digest là mã nhận dạng nội dung SHA-256 duy nhất cho bản dựng hình ảnh chính xác đó. Việc triển khai bằng thông báo sẽ ghim việc triển khai vào hình ảnh đó ngay cả khi một thẻ như `production` hoặc `latest` sau đó được chuyển sang một bản dựng khác. [About Registries, Repositories, Images, and Artifacts – Azure Container Registry](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-concepts)\n\n**Tài liệu tham khảo:**\n[About Registries, Repositories, Images, and Artifacts – Azure Container Registry](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-concepts)",
    "category": "Develop Containerized Solutions On Azure",
    "tags": [
      "AI-200",
      "Develop Containerized Solutions On Azure"
    ],
    "sourceTitle": "Examcademy AI-200 Question 1",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/1-develop-containerized-solutions-on-azure",
    "lastVerifiedAt": "2026-09-13T09:34:16.120Z"
  },
  {
    "id": "ai200-2",
    "questionNumber": 2,
    "text": "A container in an AKS cluster is restarting repeatedly.  \n  \nPod events indicate probe failures, while node-level CPU and memory metrics are normal.  \n  \nYou need to identify the cause of the recurring restarts. What should you do first?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Scale the deployment to more replicas."
      },
      {
        "key": "B",
        "text": "Decrease the initialDelaySeconds for the container liveness probe."
      },
      {
        "key": "C",
        "text": "Drain and reboot the node hosting the pod."
      },
      {
        "key": "D",
        "text": "Inspect the pod events and container logs."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Lỗi Liveness hoặc readiness probe có thể khiến vùng chứa khởi động lại định kỳ ngay cả khi tài nguyên nút vẫn hoạt động bình thường. Các sự kiện nhóm cung cấp thông tin chi tiết về lỗi thăm dò và nhật ký vùng chứa—đặc biệt là nhật ký từ phiên bản vùng chứa trước đó—cho thấy các lỗi khởi động, điểm cuối và chấm dứt ứng dụng cần thiết để xác định nguyên nhân gốc.\n\n**Tài liệu tham khảo:**\n[Troubleshoot pod workload restarts in AKS](https://learn.microsoft.com/en-us/troubleshoot/azure/azure-kubernetes/availability-performance/troubleshoot-pod-workload-restart) · [Troubleshoot app connection issues in an AKS cluster](https://learn.microsoft.com/en-us/troubleshoot/azure/azure-kubernetes/connectivity/connection-issues-application-hosted-aks-cluster)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 2",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/2-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-3",
    "questionNumber": 3,
    "text": "You develop a message-processing service that is deployed to Azure Container Apps. The service reads messages from an Azure Service Bus queue.  \n  \nThe solution must minimize costs by ensuring that **no compute resources** are consumed when the queue is empty.  \n  \nYou need to configure scaling for the service.  \n  \nWhich two actions should you take? Each correct answer presents part of the solution.  \n  \n> NOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Increase the scaling rule to allow for the maximum running replica count."
      },
      {
        "key": "B",
        "text": "Configure the scaling rule to allow for the termination of all active replicas."
      },
      {
        "key": "C",
        "text": "Configure a Kubernetes Event-driven Autoscaler rule that monitors queue length."
      },
      {
        "key": "D",
        "text": "Enable HTTP ingress concurrency scaling."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Azure Container Apps sử dụng quy tắc chia tỷ lệ tùy chỉnh dựa trên KEDA để chia tỷ lệ trên các thông báo hàng đợi Azure Service Bus. Việc định cấu hình quy tắc KEDA để theo dõi độ dài hàng đợi sẽ bắt đầu các bản sao khi tin nhắn đang chờ xử lý và cho phép tất cả các bản sao chấm dứt cho phép ứng dụng có tỷ lệ về 0 khi hàng đợi trống, loại bỏ mức tiêu thụ điện toán nhàn rỗi.\n\n**Tài liệu tham khảo:**\n[Scaling in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/scale-app)",
    "category": "Develop Containerized Solutions On Azure",
    "tags": [
      "AI-200",
      "Develop Containerized Solutions On Azure"
    ],
    "sourceTitle": "Examcademy AI-200 Question 3",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/3-develop-containerized-solutions-on-azure",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-4",
    "questionNumber": 4,
    "text": "You configure ACR Tasks to automate container image builds.  \n  \nContainer images must be rebuilt when:  \n  \n- Application updates occur.  \n- Base image updates occur, such as when the underlying OS image is updated.  \n- Regular scheduled rebuilds are needed.  \n  \nYou need to configure ACR Tasks to support automated image rebuilds.  \n  \nWhich three triggers should you configure? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Timer trigger"
      },
      {
        "key": "B",
        "text": "Source code commit trigger"
      },
      {
        "key": "C",
        "text": "Registry event trigger"
      },
      {
        "key": "D",
        "text": "Base image update trigger"
      },
      {
        "key": "E",
        "text": "Webhook notification trigger"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "D"
    ],
    "explanation": "Nhiệm vụ đăng ký vùng chứa Azure có thể tự động chạy các bản dựng dựa trên các cam kết mã nguồn, cập nhật hình ảnh cơ sở và lịch hẹn giờ. Các trình kích hoạt này lần lượt xử lý các thay đổi của ứng dụng, hình ảnh gốc được cập nhật chẳng hạn như hình ảnh hệ điều hành và các bản dựng lại định kỳ.\n\n**Tài liệu tham khảo:**\n[Automate container image builds and maintenance with Azure Container Registry tasks](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview) · [Schedule Azure Container Registry (ACR) Tasks](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-scheduled)",
    "category": "Develop Containerized Solutions On Azure",
    "tags": [
      "AI-200",
      "Develop Containerized Solutions On Azure"
    ],
    "sourceTitle": "Examcademy AI-200 Question 4",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/4-develop-containerized-solutions-on-azure",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-5",
    "questionNumber": 5,
    "text": "You are developing several microservices to run on Azure Container Apps.  \n  \nThe microservices must permit HTTPS access by using a custom domain.  \n  \nYou need to configure the custom domain in Azure Container Apps.  \n  \nIn which order should you perform the actions?",
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
        "correctAnswer": "A"
      },
      {
        "id": "3",
        "text": "Slot 3:",
        "correctAnswer": "E"
      },
      {
        "id": "4",
        "text": "Slot 4:",
        "correctAnswer": "D"
      },
      {
        "id": "5",
        "text": "Slot 5:",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Add the custom domain name."
      },
      {
        "key": "B",
        "text": "Bind the certificate."
      },
      {
        "key": "C",
        "text": "Enable ingress."
      },
      {
        "key": "D",
        "text": "Validate the custom domain name."
      },
      {
        "key": "E",
        "text": "Add DNS records to the domain provider."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Add the custom domain name."
      },
      {
        "key": "B",
        "text": "Bind the certificate."
      },
      {
        "key": "C",
        "text": "Enable ingress."
      },
      {
        "key": "D",
        "text": "Validate the custom domain name."
      },
      {
        "key": "E",
        "text": "Add DNS records to the domain provider."
      }
    ],
    "correctAnswers": [
      "1=C",
      "2=A",
      "3=E",
      "4=D",
      "5=B"
    ],
    "explanation": "Azure Container Apps yêu cầu xâm nhập vào điểm cuối miền tùy chỉnh. Việc thêm miền sẽ cung cấp các giá trị được sử dụng để tạo bản ghi định tuyến và quyền sở hữu DNS cần thiết. Azure chỉ có thể xác thực miền sau khi các bản ghi đó được giải quyết và chứng chỉ TLS bị ràng buộc sau khi xác thực thành công để bật HTTPS.\n\n**Tài liệu tham khảo:**\n[Custom domain names and free managed certificates in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/custom-domains-managed-certificates)",
    "category": "Develop Containerized Solutions On Azure",
    "tags": [
      "AI-200",
      "Develop Containerized Solutions On Azure"
    ],
    "sourceTitle": "Examcademy AI-200 Question 5",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/5-develop-containerized-solutions-on-azure",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-6",
    "questionNumber": 6,
    "text": "You need to increase throughput for simultaneous application requests to PostgreSQL.  \n  \nWhat should you implement?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Implement connection pooling."
      },
      {
        "key": "B",
        "text": "Increase shared_buffers."
      },
      {
        "key": "C",
        "text": "Enable read replicas."
      },
      {
        "key": "D",
        "text": "Increase max_connections."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Nhóm kết nối duy trì và tái sử dụng một tập hợp các kết nối PostgreSQL được kiểm soát, giảm chi phí tạo kết nối nhiều lần và hỗ trợ lưu lượng ứng dụng đồng thời cao với độ trễ thấp hơn. Tài liệu Cơ sở dữ liệu Azure cho PostgreSQL đề xuất một trình tổng hợp kết nối như PgBouncer để quản lý kết nối một cách hiệu quả.\n\n**Tài liệu tham khảo:**\n[Azure Database for PostgreSQL flexible server - Connection pooling concepts](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/concepts-connection-pooling)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 6",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/6-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-7",
    "questionNumber": 7,
    "text": "You need to optimize vector-search queries according to the technical requirements.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create a B-tree index on metadata filter columns."
      },
      {
        "key": "B",
        "text": "Increase the max_connections parameter."
      },
      {
        "key": "C",
        "text": "Increase the shared_buffers setting."
      },
      {
        "key": "D",
        "text": "Create an IVFFlat index on the embedding column."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Chỉ mục IVFFlat trên cột nhúng cho phép pgvector tìm kiếm lân cận gần nhất, phân vùng vectơ thành danh sách để tìm kiếm đánh giá các ứng cử viên có khả năng thay vì thực hiện so sánh chính xác với mỗi lần nhúng. Điều này cải thiện độ trễ tìm kiếm vectơ và nên được tạo sau khi nhập hàng loạt để xây dựng chỉ mục nhanh hơn, tối ưu hơn. [Optimize Performance when Using pgvector in Azure Database for PostgreSQL Flexible Server](https://learn.microsoft.com/sk-sk/azure/postgresql/extensions/how-to-optimize-performance-pgvector)\n\n**Tài liệu tham khảo:**\n[Optimize Performance when Using pgvector in Azure Database for PostgreSQL Flexible Server](https://learn.microsoft.com/sk-sk/azure/postgresql/extensions/how-to-optimize-performance-pgvector)",
    "category": "Develop AI Solutions By Using Azure Data Management Services",
    "tags": [
      "AI-200",
      "Develop AI Solutions By Using Azure Data Management Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 7",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/7-develop-ai-solutions-by-using-azure-data-management-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-8",
    "questionNumber": 8,
    "text": "You need to implement the recommendation engine’s semantic-retrieval workflow so that it meets Fabrikam Inc.’s technical and performance requirements.  \n  \nWhich four actions should you take, in sequence?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "1",
        "text": "1.",
        "correctAnswer": "C"
      },
      {
        "id": "2",
        "text": "2.",
        "correctAnswer": "E"
      },
      {
        "id": "3",
        "text": "3.",
        "correctAnswer": "F"
      },
      {
        "id": "4",
        "text": "4.",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Increase the Redis memory allocation for the caching layer."
      },
      {
        "key": "B",
        "text": "Perform a similarity search using a WHERE clause and the <=> operator."
      },
      {
        "key": "C",
        "text": "Define a table schema with vector and metadata columns."
      },
      {
        "key": "D",
        "text": "Create a B-tree index on the embedding vector columns."
      },
      {
        "key": "E",
        "text": "Load embedding vectors and associated product metadata."
      },
      {
        "key": "F",
        "text": "Configure a Hierarchical Navigable Small World (HNSW) index on the embedding vector columns."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Increase the Redis memory allocation for the caching layer."
      },
      {
        "key": "B",
        "text": "Perform a similarity search using a WHERE clause and the <=> operator."
      },
      {
        "key": "C",
        "text": "Define a table schema with vector and metadata columns."
      },
      {
        "key": "D",
        "text": "Create a B-tree index on the embedding vector columns."
      },
      {
        "key": "E",
        "text": "Load embedding vectors and associated product metadata."
      },
      {
        "key": "F",
        "text": "Configure a Hierarchical Navigable Small World (HNSW) index on the embedding vector columns."
      }
    ],
    "correctAnswers": [
      "1=C",
      "2=E",
      "3=F",
      "4=B"
    ],
    "explanation": "Lược đồ vectơ và siêu dữ liệu phải tồn tại trước khi có thể tải nội dung nhúng. Việc tải dữ liệu ban đầu trước khi tạo chỉ mục phụ sẽ tối đa hóa thông lượng nhập. Chỉ mục HNSW là chỉ mục lân cận gần nhất pgvector cho vector search có độ trễ thấp; chỉ mục cây B không phải là chỉ mục tương tự vectơ. Truy vấn cuối cùng áp dụng vị từ siêu dữ liệu bắt buộc trong WHERE và sử dụng <=> để sắp xếp độ tương tự khoảng cách cosine.\n\n**Tài liệu tham khảo:**\n[pgvector documentation](https://github.com/pgvector/pgvector)",
    "category": "Develop AI Solutions By Using Azure Data Management Services",
    "tags": [
      "AI-200",
      "Develop AI Solutions By Using Azure Data Management Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 8",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/8-develop-ai-solutions-by-using-azure-data-management-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-9",
    "questionNumber": 9,
    "text": "You need to optimize secure database connectivity from the containerized Recommendation API.  \n  \nHow should you configure the application?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "authentication",
        "text": "Comply with the authentication policy for database access.",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "concurrency",
        "text": "Support high-concurrency requests with minimal latency.",
        "correctAnswer": "E",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      },
      {
        "id": "stability",
        "text": "Protect database stability during traffic spikes.",
        "correctAnswer": "G",
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
        "text": "Use connection pooling library."
      },
      {
        "key": "B",
        "text": "Use managed identity authentication."
      },
      {
        "key": "C",
        "text": "Store credentials in environment variables."
      },
      {
        "key": "D",
        "text": "Use unlimited pool size."
      },
      {
        "key": "E",
        "text": "Use a connection pooling library."
      },
      {
        "key": "F",
        "text": "Increase the database max_connections parameter."
      },
      {
        "key": "G",
        "text": "Configure maximum pool size."
      },
      {
        "key": "H",
        "text": "Enable asynchronous query execution."
      },
      {
        "key": "I",
        "text": "Implement a retry policy with exponential backoff."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Use connection pooling library."
      },
      {
        "key": "B",
        "text": "Use managed identity authentication."
      },
      {
        "key": "C",
        "text": "Store credentials in environment variables."
      },
      {
        "key": "D",
        "text": "Use unlimited pool size."
      },
      {
        "key": "E",
        "text": "Use a connection pooling library."
      },
      {
        "key": "F",
        "text": "Increase the database max_connections parameter."
      },
      {
        "key": "G",
        "text": "Configure maximum pool size."
      },
      {
        "key": "H",
        "text": "Enable asynchronous query execution."
      },
      {
        "key": "I",
        "text": "Implement a retry policy with exponential backoff."
      }
    ],
    "correctAnswers": [
      "authentication=B",
      "concurrency=E",
      "stability=G"
    ],
    "explanation": "Managed identity loại bỏ thông tin xác thực cơ sở dữ liệu tồn tại lâu dài và đáp ứng yêu cầu Zero Trust. Nhóm kết nối tái sử dụng các kết nối cơ sở dữ liệu đã thiết lập, giảm chi phí thiết lập kết nối theo nhu cầu đồng thời. Kích thước nhóm tối đa giới hạn áp lực kết nối ứng dụng, giúp ngăn chặn lưu lượng truy cập tăng đột biến làm cạn kiệt tài nguyên cơ sở dữ liệu.",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 9",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/9-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-10",
    "questionNumber": 10,
    "text": "You need to set up the Redis integration for the Recommendation API. Choose the appropriate configurations for each requirement. A configuration may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "slot1",
        "text": "Comply with the defined expiration policy for recommendation results.",
        "correctAnswer": "B"
      },
      {
        "id": "slot2",
        "text": "Support the data integrity and freshness requirement for catalog updates.",
        "correctAnswer": "C"
      },
      {
        "id": "slot3",
        "text": "Meet the search latency target for recurring product requests.",
        "correctAnswer": "D"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Enable Redis RDB persistence."
      },
      {
        "key": "B",
        "text": "Configure Time to Live on each cache key."
      },
      {
        "key": "C",
        "text": "Publish invalidation events to a Redis channel."
      },
      {
        "key": "D",
        "text": "Implement cache-aside pattern with lazy loading."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Enable Redis RDB persistence."
      },
      {
        "key": "B",
        "text": "Configure Time to Live on each cache key."
      },
      {
        "key": "C",
        "text": "Publish invalidation events to a Redis channel."
      },
      {
        "key": "D",
        "text": "Implement cache-aside pattern with lazy loading."
      }
    ],
    "correctAnswers": [
      "slot1=B",
      "slot2=C",
      "slot3=D"
    ],
    "explanation": "TTL tự động hết hạn các kết quả đề xuất được lưu trong bộ nhớ đệm sau khoảng thời gian được yêu cầu. Việc xuất bản các sự kiện không hợp lệ cho phép loại bỏ kịp thời các mục nhập trong bộ nhớ đệm bị ảnh hưởng bởi siêu dữ liệu danh mục hoặc cập nhật giá, ngăn chặn các đề xuất cũ. Bỏ bộ nhớ đệm bằng tính năng tải chậm cung cấp phản hồi có độ trễ thấp cho các yêu cầu lặp lại thông qua các lần truy cập bộ đệm trong khi chỉ tải dữ liệu bị thiếu từ cửa hàng có thẩm quyền. Tính bền vững của RDB là để phục hồi và duy trì độ bền sau các lỗi Redis, chứ không phải để hết hạn, làm mới hoặc độ trễ yêu cầu định kỳ.\n\n**Tài liệu tham khảo:**\n[Cache-Aside Pattern - Azure Architecture Center](https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside) · [What is Azure Managed Redis?](https://learn.microsoft.com/en-us/azure/redis/overview)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 10",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/10-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-11",
    "questionNumber": 11,
    "text": "You deploy multiple instances of a change feed processor to manage a high ingestion rate in Azure Cosmos DB for NoSQL.  \n  \nEach processor instance must handle a distinct subset of partitions. You need to make sure the workload is load-balanced across all processor instances.  \n  \nWhat should you configure?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "indexing precision"
      },
      {
        "key": "B",
        "text": "strong consistency"
      },
      {
        "key": "C",
        "text": "lease container"
      },
      {
        "key": "D",
        "text": "autoscale throughput"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Bộ chứa cho thuê lưu trữ trạng thái cho thuê và điều phối quyền sở hữu phạm vi phân vùng giữa các phiên bản bộ xử lý nguồn cấp dữ liệu thay đổi. Khi các phiên bản sử dụng cùng một cấu hình container cho thuê, bộ xử lý sẽ phân phối các hợp đồng thuê trên chúng và tự động cân bằng lại khối lượng công việc khi các phiên bản thay đổi.\n\n**Tài liệu tham khảo:**\n[Change Feed Processor - Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/change-feed-processor)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 11",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/11-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-12",
    "questionNumber": 12,
    "text": "An application runs similarity searches across 5 million embeddings kept in Azure Database for PostgreSQL with pgvector. Queries frequently filter by department before they rank results by cosine distance.  \n  \nP95 latency for vector similarity queries is above the SLA target. Monitoring indicates sustained high CPU utilization during query execution.  \n  \nYou need to lower P95 latency for filtered vector similarity queries.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create B-tree indexes on frequently filtered metadata columns."
      },
      {
        "key": "B",
        "text": "Store embeddings as JSON."
      },
      {
        "key": "C",
        "text": "Increase embedding dimensionality."
      },
      {
        "key": "D",
        "text": "Increase statement timeout."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Chỉ mục cây B trên cột siêu dữ liệu vô hướng được lọc thường xuyên như `department` có thể thu hẹp các hàng ứng cử viên một cách hiệu quả trước khi xếp hạng khoảng cách cosine. Việc giảm các hàng phải được xem xét sẽ làm giảm công việc của CPU và cải thiện độ trễ cho mẫu bộ lọc này. Hướng dẫn của Azure cũng khuyến nghị lập chỉ mục và tối ưu hóa kế hoạch truy vấn để cải thiện hiệu suất tìm kiếm pgvector.\n\n**Tài liệu tham khảo:**\n[Optimize performance when using pgvector in Azure Database for PostgreSQL flexible server](https://learn.microsoft.com/sk-sk/azure/postgresql/extensions/how-to-optimize-performance-pgvector)",
    "category": "Develop AI Solutions By Using Azure Data Management Services",
    "tags": [
      "AI-200",
      "Develop AI Solutions By Using Azure Data Management Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 12",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/12-develop-ai-solutions-by-using-azure-data-management-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-13",
    "questionNumber": 13,
    "text": "You store embeddings in a property called `embedding` within an Azure Cosmos DB for NoSQL container.  \n  \nYou must retrieve the five documents most similar to an input embedding.  \n  \nYou need to build the similarity query. What should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Use offset pagination."
      },
      {
        "key": "B",
        "text": "Enforce strong consistency."
      },
      {
        "key": "C",
        "text": "Group by embedding value."
      },
      {
        "key": "D",
        "text": "Limit the number of results."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Azure Cosmos DB dành cho truy vấn vectơ NoSQL sắp xếp các mục theo `VectorDistance` và sử dụng `TOP N` để trả về số lượng kết quả khớp gần nhất được yêu cầu. Mệnh đề `TOP 5` giới hạn tập kết quả ở năm tài liệu giống nhau nhất; Microsoft khuyên bạn nên sử dụng `TOP N` cho tìm kiếm vectơ để tránh trả về các kết quả không cần thiết.\n\n**Tài liệu tham khảo:**\n[Integrated Vector Store - Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search)",
    "category": "Develop AI Solutions By Using Azure Data Management Services",
    "tags": [
      "AI-200",
      "Develop AI Solutions By Using Azure Data Management Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 13",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/13-develop-ai-solutions-by-using-azure-data-management-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-14",
    "questionNumber": 14,
    "text": "You are building a Java application that will be deployed in Azure. The application stores sensitive data in Azure Cosmos DB.  \n  \nYou need to configure Always Encrypted so that the sensitive data is encrypted within the application.  \n  \nWhat should you do first?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create a customer-managed key (CMK) and store the key in a new Azure Key Vault instance."
      },
      {
        "key": "B",
        "text": "Create a data encryption key (DEK) by using the Azure Cosmos DB SDK and store the key in Azure Cosmos DB."
      },
      {
        "key": "C",
        "text": "Create a Microsoft Entra ID managed identity and assign the identity to a new Azure Key Vault instance."
      },
      {
        "key": "D",
        "text": "Create a new container to include an encryption policy with the JSON properties to be encrypted."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Azure Cosmos DB Luôn được mã hóa mã hóa dữ liệu bằng DEK được tạo phía máy khách và được lưu trữ trong Cosmos DB. Trước khi DEK đó có thể được lưu trữ, nó phải được bọc bằng CMK; việc triển khai CMK mặc định sử dụng Azure Key Vault. Chính sách mã hóa vùng chứa chỉ được tạo sau khi DEK được yêu cầu tồn tại.\n\n**Tài liệu tham khảo:**\n[Use client-side encryption with Always Encrypted for Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/how-to-always-encrypted)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 14",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/14-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-15",
    "questionNumber": 15,
    "text": "You are building an AI search API that stores semantic-search results in Redis.  \n  \nSearch results must stay cached for 10 minutes. If the underlying data is modified, cached entries must **not** be returned.  \n  \nYou need to implement a cache-aside strategy that maintains data consistency.  \n  \nWhich two actions should you take? Each correct answer represents part of the solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Configure a cache notification for key space events."
      },
      {
        "key": "B",
        "text": "Delete related cache keys when the source data changes."
      },
      {
        "key": "C",
        "text": "Implement sliding expiration based on key access."
      },
      {
        "key": "D",
        "text": "Configure a 10-minute Time to Live on each key."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "Bộ đệm ẩn lưu trữ các mục có TTL để giới hạn thời gian tồn tại của chúng và vô hiệu hóa rõ ràng các khóa bộ đệm bị ảnh hưởng khi dữ liệu nguồn được cập nhật. TTL 10 phút đáp ứng thời lượng bộ đệm cần thiết và việc xóa các khóa liên quan khi thay đổi dữ liệu sẽ buộc lần đọc tiếp theo truy xuất và lưu vào bộ đệm dữ liệu hiện tại thay vì trả về giá trị cũ. Làm lại tài liệu sang một bên trong bộ đệm bằng cách sử dụng TTL cho mỗi khóa cùng với việc xóa khi ghi để vô hiệu hóa rõ ràng.\n\n**Tài liệu tham khảo:**\n[Redis cache-aside documentation](https://redis.io/docs/latest/develop/use-cases/cache-aside/)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 15",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/15-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-16",
    "questionNumber": 16,
    "text": "Embeddings are stored in Redis with keys formatted as `doc:(id)`. Some embeddings are accessed frequently, while others are rarely used.  \n  \nYou need to implement a caching strategy that retains only frequently accessed embeddings in memory.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "volatile-ttl"
      },
      {
        "key": "B",
        "text": "allkeys-lru"
      },
      {
        "key": "C",
        "text": "EXPIRE command"
      },
      {
        "key": "D",
        "text": "time-window expiration"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Chính sách trục xuất `allkeys-lru` của Redis áp dụng cho tất cả các khóa và trục xuất những khóa ít được sử dụng gần đây nhất khi đạt đến giới hạn bộ nhớ được định cấu hình. Điều này giữ cho các phần nhúng được truy cập thường xuyên trong bộ nhớ đồng thời cho phép loại bỏ các phần nhúng hiếm khi được sử dụng.\n\n**Tài liệu tham khảo:**\n[Redis key eviction documentation](https://redis.io/docs/latest/develop/reference/eviction/)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 16",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/16-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-17",
    "questionNumber": 17,
    "text": "You deploy an AI application in multiple Azure regions.  \n  \nThe application must be able to see writes across every region within a predictable time window.  \n  \nYou need to identify the appropriate consistency level.  \n  \nWhich two consistency levels can you use to meet the goal? Each correct answer provides a complete solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Session"
      },
      {
        "key": "B",
        "text": "Strong"
      },
      {
        "key": "C",
        "text": "Bounded staleness"
      },
      {
        "key": "D",
        "text": "Eventual"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Tính nhất quán mạnh mẽ đảm bảo rằng các lần đọc sẽ trả về phiên bản đã cam kết gần đây nhất trên khắp các khu vực, mang lại độ ổn định cho bản sao no. Độ ổn định giới hạn đảm bảo rằng độ trễ đọc do no ghi nhiều hơn khoảng thời gian hoặc số lượng phiên bản tối đa đã được định cấu hình, cung cấp khoảng thời gian làm mới giữa các khu vực có thể dự đoán được.\n\n**Tài liệu tham khảo:**\n[Consistency level choices - Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels)",
    "category": "Develop AI Solutions By Using Azure Data Management Services",
    "tags": [
      "AI-200",
      "Develop AI Solutions By Using Azure Data Management Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 17",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/17-develop-ai-solutions-by-using-azure-data-management-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-18",
    "questionNumber": 18,
    "text": "You are building an event-driven system that responds to new or updated documents in Azure Cosmos DB for NoSQL.  \n  \nThe application must process documents as they are created or updated in a container by using a change feed processor, and it must preserve processor state across runs.  \n  \nConfigure the components required for stateful change feed processing.",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "source",
        "text": "Read changes from the source container.",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "state",
        "text": "Store continuation state and partition ownership.",
        "correctAnswer": "A",
        "choiceKeys": [
          "D",
          "A",
          "B"
        ]
      },
      {
        "id": "mode",
        "text": "Process new or updated items in the default change feed mode.",
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
        "text": "Lease container"
      },
      {
        "key": "B",
        "text": "Monitored container"
      },
      {
        "key": "C",
        "text": "Vector container"
      },
      {
        "key": "D",
        "text": "Indexing container"
      },
      {
        "key": "E",
        "text": "Full scan mode"
      },
      {
        "key": "F",
        "text": "Latest version mode"
      },
      {
        "key": "G",
        "text": "Strong consistency mode"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Lease container"
      },
      {
        "key": "B",
        "text": "Monitored container"
      },
      {
        "key": "C",
        "text": "Vector container"
      },
      {
        "key": "D",
        "text": "Indexing container"
      },
      {
        "key": "E",
        "text": "Full scan mode"
      },
      {
        "key": "F",
        "text": "Latest version mode"
      },
      {
        "key": "G",
        "text": "Strong consistency mode"
      }
    ],
    "correctAnswers": [
      "source=B",
      "state=A",
      "mode=F"
    ],
    "explanation": "Bộ xử lý nguồn cấp dữ liệu thay đổi sẽ đọc từ vùng chứa được giám sát. Vùng chứa cho thuê của nó lưu trữ các mã thông báo tiếp tục và điều phối quyền sở hữu phân vùng vật lý giữa các phiên bản bộ xử lý. Chế độ nguồn cấp dữ liệu thay đổi mặc định là chế độ phiên bản mới nhất, cung cấp phiên bản mới nhất của các mặt hàng đã được tạo hoặc cập nhật.\n\n**Tài liệu tham khảo:**\n[Azure Cosmos DB change feed processor](https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/change-feed-processor) · [Change feed in Azure Cosmos DB for NoSQL](https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/change-feed)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 18",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/18-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-19",
    "questionNumber": 19,
    "text": "You are developing an application that uses a Python API to run similarity queries against Azure Database for PostgreSQL. The application opens a new database connection for every request.  \n  \nAt peak traffic, the application sometimes cannot open new database sessions, and logs show that the maximum connection count has been reached.  \n  \nConfigure a connection-pooling strategy that reduces connection-establishment overhead and maximizes reuse for this high-concurrency workload.",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "connection_pooling_technology",
        "text": "Connection pooling technology",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      },
      {
        "id": "pooling_mode",
        "text": "Pooling mode",
        "correctAnswer": "H",
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
        "text": "PgBouncer"
      },
      {
        "key": "B",
        "text": "Compute tier scaling"
      },
      {
        "key": "C",
        "text": "Automatic vacuum"
      },
      {
        "key": "D",
        "text": "Connection timeout extension"
      },
      {
        "key": "E",
        "text": "Session pooling mode"
      },
      {
        "key": "F",
        "text": "Direct connection mode"
      },
      {
        "key": "G",
        "text": "Statement pooling mode"
      },
      {
        "key": "H",
        "text": "Transaction pooling mode"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "PgBouncer"
      },
      {
        "key": "B",
        "text": "Compute tier scaling"
      },
      {
        "key": "C",
        "text": "Automatic vacuum"
      },
      {
        "key": "D",
        "text": "Connection timeout extension"
      },
      {
        "key": "E",
        "text": "Session pooling mode"
      },
      {
        "key": "F",
        "text": "Direct connection mode"
      },
      {
        "key": "G",
        "text": "Statement pooling mode"
      },
      {
        "key": "H",
        "text": "Transaction pooling mode"
      }
    ],
    "correctAnswers": [
      "connection_pooling_technology=A",
      "pooling_mode=H"
    ],
    "explanation": "PGBouncer cung cấp tính năng tổng hợp kết nối PostgreSQL. Chế độ gộp giao dịch của nó trả về một kết nối máy chủ đến nhóm khi giao dịch hoàn tất, do đó, khối lượng công việc ở cấp yêu cầu đồng thời có thể sử dụng lại một nhóm kết nối phụ trợ nhỏ hơn. Điều này tránh việc giữ một kết nối phụ trợ chuyên dụng cho toàn bộ phiên máy khách, giống như việc gộp phiên.\n\n**Tài liệu tham khảo:**\n[PgBouncer in Azure Database for PostgreSQL flexible server](https://learn.microsoft.com/en-us/azure/postgresql/connectivity/concepts-pgbouncer)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 19",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/19-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-20",
    "questionNumber": 20,
    "text": "You are developing a Retrieval-Augmented Generation (RAG) solution for a company. AI responses and embedding vectors are cached in Redis. Configure Redis to meet these requirements:  \n  \n- AI responses must expire exactly 24 hours after they are cached.  \n- Cached embeddings must always reflect the current source data.",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "responses",
        "text": "AI responses must expire exactly 24 hours after they are cached.",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "embeddings",
        "text": "Cached embeddings must always reflect the current source data.",
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
        "text": "Configure allkeys-lru eviction."
      },
      {
        "key": "B",
        "text": "Reset expiration on every read."
      },
      {
        "key": "C",
        "text": "Set a Time to Live (TTL) on each key."
      },
      {
        "key": "D",
        "text": "Configure volatile-lru eviction."
      },
      {
        "key": "E",
        "text": "Delete related keys when the document changes."
      },
      {
        "key": "F",
        "text": "Increase maximum memory allocation."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Configure allkeys-lru eviction."
      },
      {
        "key": "B",
        "text": "Reset expiration on every read."
      },
      {
        "key": "C",
        "text": "Set a Time to Live (TTL) on each key."
      },
      {
        "key": "D",
        "text": "Configure volatile-lru eviction."
      },
      {
        "key": "E",
        "text": "Delete related keys when the document changes."
      },
      {
        "key": "F",
        "text": "Increase maximum memory allocation."
      }
    ],
    "correctAnswers": [
      "responses=C",
      "embeddings=E"
    ],
    "explanation": "Redis TTL tự động xóa khóa sau khi hết thời gian chờ được định cấu hình, do đó, TTL 24 giờ sẽ thực thi thời gian tồn tại của bộ đệm phản hồi. Phần nhúng có nguồn gốc từ nội dung tài liệu; việc vô hiệu hóa các khóa liên quan khi tài liệu đó thay đổi sẽ ngăn việc cung cấp các vectơ cũ và tạo ra các phần nhúng được làm mới. Việc trục xuất LRU dựa trên áp lực bộ nhớ và không thể đảm bảo độ mới hoặc thời gian hết hạn cố định.\n\n**Tài liệu tham khảo:**\n[Redis EXPIRE command](https://redis.io/docs/latest/commands/expire/) · [Redis cache-aside pattern](https://redis.io/docs/latest/develop/use-cases/cache-aside/)",
    "category": "Develop AI Solutions By Using Azure Data Management Services",
    "tags": [
      "AI-200",
      "Develop AI Solutions By Using Azure Data Management Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 20",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/20-develop-ai-solutions-by-using-azure-data-management-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-21",
    "questionNumber": 21,
    "text": "You are implementing semantic retrieval in Redis. The solution must provide low-latency, approximate nearest-neighbor (ANN) vector similarity search for large-scale AI retrieval workloads.  \n  \nChoose the appropriate vector schema configuration values.",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "field_type",
        "text": "Field type for embedding",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "index_configuration",
        "text": "Index configuration",
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
        "text": "Numeric"
      },
      {
        "key": "B",
        "text": "Tag"
      },
      {
        "key": "C",
        "text": "Vector"
      },
      {
        "key": "D",
        "text": "Flat index"
      },
      {
        "key": "E",
        "text": "HNSW index"
      },
      {
        "key": "F",
        "text": "Metadata index"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Numeric"
      },
      {
        "key": "B",
        "text": "Tag"
      },
      {
        "key": "C",
        "text": "Vector"
      },
      {
        "key": "D",
        "text": "Flat index"
      },
      {
        "key": "E",
        "text": "HNSW index"
      },
      {
        "key": "F",
        "text": "Metadata index"
      }
    ],
    "correctAnswers": [
      "field_type=C",
      "index_configuration=E"
    ],
    "explanation": "Các phần nhúng phải được lập chỉ mục dưới dạng trường Vector. HNSW thực hiện tìm kiếm lân cận gần nhất và phù hợp khi khả năng mở rộng và hiệu suất tìm kiếm quan trọng đối với các tập dữ liệu lớn; thay vào đó, chỉ mục FLAT thực hiện tìm kiếm toàn diện và chính xác.\n\n**Tài liệu tham khảo:**\n[Redis vector search concepts](https://redis.io/docs/latest/develop/ai/search-and-query/vectors/)",
    "category": "Develop AI Solutions By Using Azure Data Management Services",
    "tags": [
      "AI-200",
      "Develop AI Solutions By Using Azure Data Management Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 21",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/21-develop-ai-solutions-by-using-azure-data-management-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-22",
    "questionNumber": 22,
    "text": "You are developing a .NET application that uses Azure Cosmos DB for NoSQL to store application data.  \n  \nThe application uses the Azure Cosmos DB for NoSQL SDK to interact with the database account.  \n  \nThe application must perform the following tasks:  \n  \n- Initialize the connection by using the account endpoint and key.  \n- Define shared throughput.  \n- Perform create, read, update, and delete (CRUD) operations on items stored in a container.  \n  \nYou need to implement the SDK components required for the application to access and manage data in Azure Cosmos DB for NoSQL. Which SDK components should you use?  \n  \nEach component may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "initialize_connection",
        "text": "Initialize the connection by using the account endpoint and key.",
        "correctAnswer": "B"
      },
      {
        "id": "define_shared_throughput",
        "text": "Define shared throughput.",
        "correctAnswer": "A"
      },
      {
        "id": "perform_item_crud",
        "text": "Perform item CRUD operations.",
        "correctAnswer": "C"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Database"
      },
      {
        "key": "B",
        "text": "CosmosClient"
      },
      {
        "key": "C",
        "text": "Container"
      },
      {
        "key": "D",
        "text": "Indexing policy"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Database"
      },
      {
        "key": "B",
        "text": "CosmosClient"
      },
      {
        "key": "C",
        "text": "Container"
      },
      {
        "key": "D",
        "text": "Indexing policy"
      }
    ],
    "correctAnswers": [
      "initialize_connection=B",
      "define_shared_throughput=A",
      "perform_item_crud=C"
    ],
    "explanation": "CosmosClient là điểm vào SDK được tạo bằng điểm cuối tài khoản và thông tin xác thực/khóa. Thông lượng được chia sẻ được cung cấp trên cơ sở dữ liệu và được chia sẻ giữa các vùng chứa của nó. Vùng chứa cung cấp các thao tác mục bao gồm tạo, đọc, cập nhật và xóa. Chính sách lập chỉ mục kiểm soát hành vi lập chỉ mục thay vì phục vụ bất kỳ vai trò nào trong số này.\n\n**Tài liệu tham khảo:**\n[Get started with Azure Cosmos DB for NoSQL using .NET](https://learn.microsoft.com/en-us/azure/cosmos-db/how-to-dotnet-get-started) · [Set throughput in Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/set-throughput)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 22",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/22-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-23",
    "questionNumber": 23,
    "text": "An ACA app handles messages from an Azure Storage queue.  \n  \nThe app must automatically scale according to messages in a particular Azure Storage queue by using a Kubernetes Event-driven Autoscaler (KEDA) custom scale rule.  \n  \nYou need to configure the required scale-rule values.  \n  \nWhich two values should you configure? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Queue name"
      },
      {
        "key": "B",
        "text": "Polling interval"
      },
      {
        "key": "C",
        "text": "Trigger type"
      },
      {
        "key": "D",
        "text": "Maximum replicas"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Quy tắc tỷ lệ Azure Container Apps tùy chỉnh phải chỉ định loại trình chia tỷ lệ KEDA và siêu dữ liệu mà trình chia tỷ lệ đó yêu cầu. Bộ chia tỷ lệ Hàng đợi lưu trữ Azure sử dụng loại trình kích hoạt `azure-queue` và yêu cầu `queueName` đích làm siêu dữ liệu. `pollingInterval` và `maxReplicas` là các cài đặt trên cấu hình thang đo tổng thể của Ứng dụng vùng chứa thay vì các giá trị được yêu cầu trong quy tắc tùy chỉnh.\n\n**Tài liệu tham khảo:**\n[Scaling in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/scale-app)",
    "category": "Develop Containerized Solutions On Azure",
    "tags": [
      "AI-200",
      "Develop Containerized Solutions On Azure"
    ],
    "sourceTitle": "Examcademy AI-200 Question 23",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/23-develop-containerized-solutions-on-azure",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-24",
    "questionNumber": 24,
    "text": "An Event Grid subscription triggers an Azure Function.  \n  \nYou need to avoid losing events when the endpoint returns an HTTP 400 response.  \n  \nWhich action should you take?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Implement optimistic batching."
      },
      {
        "key": "B",
        "text": "Implement asynchronous handshake validation."
      },
      {
        "key": "C",
        "text": "Configure a dead-letter destination."
      },
      {
        "key": "D",
        "text": "Configure a retry policy."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Azure Event Grid không thử lại lỗi phân phối HTTP 400 (Yêu cầu Không hợp lệ). Khi đích đến của thư chết được định cấu hình, Lưới sự kiện sẽ gửi sự kiện không thể gửi đến đó thay vì loại bỏ nó, cho phép nó được giữ lại và xử lý sau đó.\n\n**Tài liệu tham khảo:**\n[Azure Event Grid message delivery and retry](https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 24",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/24-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-25",
    "questionNumber": 25,
    "text": "You need to configure Azure Functions to generate vector embeddings in accordance with the planned application architecture.  \n  \nWhich trigger type should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Event Grid"
      },
      {
        "key": "B",
        "text": "Azure Cosmos DB"
      },
      {
        "key": "C",
        "text": "HTTP"
      },
      {
        "key": "D",
        "text": "Service Bus"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Trình kích hoạt Azure Cosmos DB sử dụng nguồn cấp dữ liệu thay đổi Azure Cosmos DB để phát hiện các tài liệu được chèn và cập nhật cũng như gọi hàm. Điều này hỗ trợ việc tạo hoặc cập nhật các phần nhúng tự động khi Cosmos DB cho các tài liệu được lưu trữ trên máy chủ NoSQL được tạo hoặc cập nhật.\n\n**Tài liệu tham khảo:**\n[Azure Cosmos DB trigger for Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-trigger) · [Serverless event-based architectures with Azure Cosmos DB and Azure Functions](https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/change-feed-functions)",
    "category": "Develop AI Solutions By Using Azure Data Management Services",
    "tags": [
      "AI-200",
      "Develop AI Solutions By Using Azure Data Management Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 25",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/25-develop-ai-solutions-by-using-azure-data-management-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-26",
    "questionNumber": 26,
    "text": "You need to configure image build automation in accordance with the technical requirements.  \n  \nWhich settings should you configure?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "trigger",
        "text": "Trigger for container images build",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "implementation",
        "text": "Implementation of image builds",
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
        "text": "Commit"
      },
      {
        "key": "B",
        "text": "Scheduled"
      },
      {
        "key": "C",
        "text": "Base image update"
      },
      {
        "key": "D",
        "text": "ACR Task"
      },
      {
        "key": "E",
        "text": "GitHub workflow"
      },
      {
        "key": "F",
        "text": "Docker Compose configuration"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Commit"
      },
      {
        "key": "B",
        "text": "Scheduled"
      },
      {
        "key": "C",
        "text": "Base image update"
      },
      {
        "key": "D",
        "text": "ACR Task"
      },
      {
        "key": "E",
        "text": "GitHub workflow"
      },
      {
        "key": "F",
        "text": "Docker Compose configuration"
      }
    ],
    "correctAnswers": [
      "trigger=C",
      "implementation=D"
    ],
    "explanation": "Nhiệm vụ ACR thực thi các bản dựng hình ảnh vùng chứa trong Azure Container Register và tự động xây dựng lại các hình ảnh ứng dụng phụ thuộc khi hình ảnh cơ sở được theo dõi, bao gồm hình ảnh cơ sở trong Docker Hub, được cập nhật. Điều này đáp ứng cả các yêu cầu về tự động hóa phía đăng ký và xây dựng lại hình ảnh cơ sở.\n\n**Tài liệu tham khảo:**\n[Automate Container Builds with Azure Container Registry Tasks](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview) · [Azure CLI: az acr task](https://learn.microsoft.com/en-us/cli/azure/acr/task?view=azure-cli-latest)",
    "category": "Develop Containerized Solutions On Azure",
    "tags": [
      "AI-200",
      "Develop Containerized Solutions On Azure"
    ],
    "sourceTitle": "Examcademy AI-200 Question 26",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/26-develop-containerized-solutions-on-azure",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-27",
    "questionNumber": 27,
    "text": "You need to deploy a batch embedding workload in accordance with the planned application architecture.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "YAML-formatted files"
      },
      {
        "key": "B",
        "text": "kubectl run and create commands"
      },
      {
        "key": "C",
        "text": "XML-formatted files"
      },
      {
        "key": "D",
        "text": "az aks commands"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AKS chạy khối lượng công việc Kubernetes được xác định theo cách khai báo trong tệp kê khai YAML. Tệp kê khai YAML có thể chỉ định tài nguyên khối lượng công việc hàng loạt cần thiết, chẳng hạn như Công việc Kubernetes và được áp dụng cho cụm. Tài liệu Microsoft Learn triển khai các ứng dụng AKS bằng cách chỉ định tệp kê khai YAML với `kubectl apply`.\n\n**Tài liệu tham khảo:**\n[Deploy an application to Azure Kubernetes Service (AKS)](https://learn.microsoft.com/en-us/azure/aks/tutorial-kubernetes-deploy-application)",
    "category": "Develop AI Solutions By Using Azure Data Management Services",
    "tags": [
      "AI-200",
      "Develop AI Solutions By Using Azure Data Management Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 27",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/27-develop-ai-solutions-by-using-azure-data-management-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-28",
    "questionNumber": 28,
    "text": "You are designing an Azure Function to process orders from a new Azure Service Bus queue.  \n  \nYou need to ensure that messages are not processed more than once and that failed messages are retained for investigation.  \n  \nWhich two actions should you implement? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Include a dead-letter handling process."
      },
      {
        "key": "B",
        "text": "Process orders by using an HTTP trigger."
      },
      {
        "key": "C",
        "text": "Enable duplicate detection on the queue."
      },
      {
        "key": "D",
        "text": "Enable sessions on Service Bus."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Azure Service Bus phát hiện trùng lặp ghi lại ID thông báo cho một cửa sổ được định cấu hình và loại bỏ các lần gửi trùng lặp, hỗ trợ hiệu quả việc phân phối một lần duy nhất cho cửa sổ đó. Quy trình xử lý thư chết sẽ bảo tồn các thư không thể xử lý được trong hàng đợi thư chết để chúng có thể được điều tra.\n\n**Tài liệu tham khảo:**\n[Duplicate detection in Azure Service Bus](https://learn.microsoft.com/en-us/azure/service-bus-messaging/duplicate-detection) · [Enable dead lettering for Azure Service Bus queues and subscriptions](https://learn.microsoft.com/en-us/azure/service-bus-messaging/enable-dead-letter)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 28",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/28-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-29",
    "questionNumber": 29,
    "text": "You are designing an Azure Function app that exposes a public API.  \n  \nThe solution must:  \n  \n- Validate incoming request data and return results immediately to the caller.  \n- Support Microsoft Entra ID authentication.  \n- Guarantee idempotent processing when the same request is retried.  \n- Scale automatically under variable load.  \n- Avoid duplicate processing.  \n  \nYou need to implement a trigger. Which trigger should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Service Bus topic"
      },
      {
        "key": "B",
        "text": "HTTP"
      },
      {
        "key": "C",
        "text": "Azure Event Grid"
      },
      {
        "key": "D",
        "text": "Azure Queue storage"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Trình kích hoạt HTTP Azure Functions được thiết kế để xây dựng các API không có máy chủ: nó nhận được yêu cầu HTTP và có thể trả về phản hồi HTTP ngay lập tức. Xác thực Azure Functions có thể bảo vệ điểm cuối đó bằng Microsoft Entra ID. Tự động chia tỷ lệ được cung cấp bởi gói lưu trữ Hàm đã chọn, trong khi tính tạm thời và ngăn chặn trùng lặp phải được triển khai trong logic xử lý của API bằng cách ghi lại và nhận dạng một mã định danh yêu cầu ổn định.\n\n**Tài liệu tham khảo:**\n[Azure Functions HTTP trigger](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger) · [Azure Functions error handling and retry guidance](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-error-pages)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 29",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/29-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-30",
    "questionNumber": 30,
    "text": "A large retail company runs online and physical stores. The company monitors inventory levels in real time to manage stock efficiently across every location. You develop an Azure Event Grid solution to process events produced by the inventory management system deployed in Azure.  \n  \nYou need to implement a subscription filter that can dynamically adapt to seasonal changes in product demand.  \n  \nWhich event filter should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "An advanced filter using a Boolean condition that evaluates multiple data fields, including a season field within the event data"
      },
      {
        "key": "B",
        "text": "A prefix filter on the event type field that matches the current season's name"
      },
      {
        "key": "C",
        "text": "A subscription filter that uses a label filter to include events tagged with seasonal promotional codes"
      },
      {
        "key": "D",
        "text": "A static subject filter that targets events with a subject ending in \"/seasonal/inventory\""
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Tính năng lọc nâng cao Azure Event Grid có thể đánh giá các giá trị trong các trường dữ liệu sự kiện, bao gồm các trường Boolean và có thể áp dụng nhiều bộ lọc nâng cao cho đăng ký sự kiện. Điều này hỗ trợ lọc các sự kiện kiểm kê theo mùa dựa trên trường dữ liệu liên quan đến mùa cùng với dữ liệu sự kiện có liên quan khác. Kết hợp tiền tố chủ đề và loại sự kiện là các bộ lọc dựa trên chuỗi tĩnh và Lưới sự kiện không cung cấp bộ lọc đăng ký nhãn.\n\n**Tài liệu tham khảo:**\n[Understand event filtering for Event Grid subscriptions](https://learn.microsoft.com/en-us/azure/event-grid/event-filtering)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 30",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/30-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-31",
    "questionNumber": 31,
    "text": "You are creating an Azure Function that calls external APIs by supplying an access token for the API. The access token is stored in a secret named `token` in an Azure Key Vault named `mykeyvault`.  \n  \nYou need to make sure that the Azure Function can access the token. Which value should you store in the Azure Functions app configuration?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "KeyVault:mykeyvault;Secret:token"
      },
      {
        "key": "B",
        "text": "App:Settings:Secret:mykeyvault:token"
      },
      {
        "key": "C",
        "text": "@Microsoft.KeyVault(SecretUri=https://mykeyvault.vault.azure.net/secrets/token/)"
      },
      {
        "key": "D",
        "text": "AZUREKVCONNSTR_ https://mykeyvault.vault.azure.net/secrets/token/"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Cài đặt ứng dụng Azure Functions có thể sử dụng tham chiếu Azure Key Vault ở dạng `@Microsoft.KeyVault(SecretUri=<secretUri>)`. URI mặt phẳng dữ liệu đầy đủ cho bí mật `token` trong `mykeyvault` là `https://mykeyvault.vault.azure.net/secrets/token/`; danh tính được định cấu hình của ứng dụng chức năng cũng phải có quyền đọc bí mật đó.\n\n**Tài liệu tham khảo:**\n[Use Key Vault references as app settings in Azure App Service, Azure Functions, and Azure Logic Apps (Standard)](https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 31",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/31-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-32",
    "questionNumber": 32,
    "text": "You process Azure Service Bus messages that require a dependent call to an external API.  \n  \nIf the API is temporarily unavailable, you must postpone processing the message without increasing its delivery count. You need a way to process the message once the API is available while keeping the message accessible.  \n  \nWhich message action should you take?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Dead-letter"
      },
      {
        "key": "B",
        "text": "Defer"
      },
      {
        "key": "C",
        "text": "Abandon"
      },
      {
        "key": "D",
        "text": "Complete"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Trì hoãn đặt tin nhắn sang một bên trong hàng đợi chính để truy xuất sau, thường theo số thứ tự của nó, khi việc xử lý tạm thời không thể thực hiện được. Nó tránh được hành vi gửi lại là bỏ qua một tin nhắn bị khóa, làm tăng số lượng gửi; việc hoàn thành sẽ loại bỏ thông báo và việc gửi ký tự chết sẽ chuyển nó sang hàng đợi con có ký tự chết.\n\n**Tài liệu tham khảo:**\n[Azure Service Bus message deferral](https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-deferral) · [Azure Service Bus dead-letter queues](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-dead-letter-queues)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 32",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/32-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-33",
    "questionNumber": 33,
    "text": "You configure an Event Grid event subscription that routes AI file-upload events to an Azure Function endpoint.  \n  \nEvents must be delivered only under these conditions:  \n  \n- The event path begins with `/uploads/ai/`.  \n- The payload property `data.fileType` is `\"pdf\"`.  \n- Undelivered events must be stored for later investigation and reprocessing when the subscriber endpoint cannot accept an event after multiple retries.  \n  \nYou need to configure the filtering and reliability settings. Which configurations should you use?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "path_prefix_condition",
        "text": "Path prefix condition",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "payload_property_condition",
        "text": "Payload property condition",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "D"
        ]
      },
      {
        "id": "undelivered_events",
        "text": "Undelivered events",
        "correctAnswer": "F",
        "choiceKeys": [
          "A",
          "E",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Subject filter"
      },
      {
        "key": "B",
        "text": "Advanced filter"
      },
      {
        "key": "C",
        "text": "Message session"
      },
      {
        "key": "D",
        "text": "Event type filter"
      },
      {
        "key": "E",
        "text": "Duplicate detection"
      },
      {
        "key": "F",
        "text": "Dead-letter destination"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Subject filter"
      },
      {
        "key": "B",
        "text": "Advanced filter"
      },
      {
        "key": "C",
        "text": "Message session"
      },
      {
        "key": "D",
        "text": "Event type filter"
      },
      {
        "key": "E",
        "text": "Duplicate detection"
      },
      {
        "key": "F",
        "text": "Dead-letter destination"
      }
    ],
    "correctAnswers": [
      "path_prefix_condition=A",
      "payload_property_condition=B",
      "undelivered_events=F"
    ],
    "explanation": "Tính năng lọc chủ đề của Lưới sự kiện hỗ trợ khớp chủ đề bắt đầu bằng tiền tố được chỉ định, phù hợp với yêu cầu đường dẫn `/uploads/ai/`. Tính năng lọc nâng cao đánh giá các trường dữ liệu sự kiện như `data.fileType` bằng cách sử dụng các toán tử bao gồm cả đẳng thức chuỗi. Đích thư chết lưu trữ các sự kiện không thể gửi được sau khi hết chính sách thử lại đã định cấu hình, cho phép điều tra và xử lý lại sau này.\n\n**Tài liệu tham khảo:**\n[Azure Event Grid event filtering](https://learn.microsoft.com/en-us/azure/event-grid/event-filtering) · [Azure Event Grid dead-letter and retry policy](https://learn.microsoft.com/en-us/azure/event-grid/manage-event-delivery)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 33",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/33-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-34",
    "questionNumber": 34,
    "text": "HOTSPOT -  \n  \nYou are creating an app that uses Event Grid to connect with other services. Your app’s event data will be sent to a serverless function that performs compliance checks and is maintained by your company.  \n  \nYou create a new event subscription at the scope of your resource. The event must be invalidated after a specific period of time.  \n  \nYou need to configure Event Grid. What should you do?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "webhook_event_delivery",
        "text": "WebHook event delivery",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "topic_publishing",
        "text": "Topic publishing",
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
        "text": "SAS tokens"
      },
      {
        "key": "B",
        "text": "Key authentication"
      },
      {
        "key": "C",
        "text": "Management Access Control"
      },
      {
        "key": "D",
        "text": "ValidationCode handshake"
      },
      {
        "key": "E",
        "text": "ValidationURL handshake"
      },
      {
        "key": "F",
        "text": "JWT token"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "SAS tokens"
      },
      {
        "key": "B",
        "text": "Key authentication"
      },
      {
        "key": "C",
        "text": "Management Access Control"
      },
      {
        "key": "D",
        "text": "ValidationCode handshake"
      },
      {
        "key": "E",
        "text": "ValidationURL handshake"
      },
      {
        "key": "F",
        "text": "JWT token"
      }
    ],
    "correctAnswers": [
      "webhook_event_delivery=A",
      "topic_publishing=D"
    ],
    "explanation": "Mã thông báo chữ ký truy cập chia sẻ (SAS) Azure Event Grid bị giới hạn thời gian: mỗi mã thông báo nhúng một tham số hết hạn và tự động trở thành không hợp lệ khi thời gian đó trôi qua, đó là lý do tại sao mã thông báo SAS (chứ không phải khóa truy cập, vẫn có hiệu lực vô thời hạn cho đến khi được tạo lại theo cách thủ công) được sử dụng để bảo mật việc phân phối sự kiện WebHook khi quyền truy cập phải hết hạn sau một khoảng thời gian đã đặt. Riêng biệt, trước khi Lưới sự kiện phân phối các sự kiện đến điểm cuối của người đăng ký mới, nó phải xác thực quyền sở hữu điểm cuối đó; đối với điểm cuối có mã được tổ chức của chính người đăng ký duy trì, việc này được thực hiện bằng cách bắt tay Mã xác thực đồng bộ, trong đó Lưới sự kiện gửi giá trị Mã xác thực trong sự kiện xác thực đăng ký và mã riêng của điểm cuối sẽ phản hồi mã đó trong phản hồi của nó, trong khi bắt tay URL xác thực không đồng bộ được dành riêng cho các điểm cuối không thể trả về mã theo chương trình, chẳng hạn như các dịch vụ tích hợp mã no của bên thứ ba.\n\n**Tài liệu tham khảo:**\n- [Authenticate Azure Event Grid clients using access keys or shared access signatures](https://learn.microsoft.com/en-us/azure/event-grid/authenticate-with-access-keys-shared-access-signatures)\n- [Validate webhook endpoints with the Event Grid event schema](https://learn.microsoft.com/en-us/azure/event-grid/end-point-validation-event-grid-events-schema)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 34",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/34-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-35",
    "questionNumber": 35,
    "text": "You have an Azure Service Bus namespace containing a topic named Topic1.  \n  \nYou plan to create a subscription named Sub1 for Topic1. In Sub1, you plan to filter Topic1 messages by their system properties and apply an action that annotates each filtered message.  \n  \nHow should you configure the filtering?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "filter_type",
        "text": "Filter type",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "filtering_action",
        "text": "Filtering action",
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
        "text": "Use the SQL type."
      },
      {
        "key": "B",
        "text": "Use the Boolean type."
      },
      {
        "key": "C",
        "text": "Use the Correlation type."
      },
      {
        "key": "D",
        "text": "Copy a message and update its body."
      },
      {
        "key": "E",
        "text": "Copy a message and annotate its metadata."
      },
      {
        "key": "F",
        "text": "Annotate the metadata of the original message."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Use the SQL type."
      },
      {
        "key": "B",
        "text": "Use the Boolean type."
      },
      {
        "key": "C",
        "text": "Use the Correlation type."
      },
      {
        "key": "D",
        "text": "Copy a message and update its body."
      },
      {
        "key": "E",
        "text": "Copy a message and annotate its metadata."
      },
      {
        "key": "F",
        "text": "Annotate the metadata of the original message."
      }
    ],
    "correctAnswers": [
      "filter_type=A",
      "filtering_action=E"
    ],
    "explanation": "Bộ lọc SQL Azure Service Bus có thể đánh giá các thuộc tính hệ thống cũng như các thuộc tính ứng dụng. Một hành động quy tắc sẽ thực thi trên bản sao của thông báo trùng khớp và có thể sửa đổi các thuộc tính của bản sao đó, do đó, việc sao chép thông báo và chú thích siêu dữ liệu của nó sẽ áp dụng hành động bắt buộc mà không làm thay đổi thông báo được xuất bản ban đầu.\n\n**Tài liệu tham khảo:**\n[Azure Service Bus topic filters and actions](https://learn.microsoft.com/en-us/azure/service-bus-messaging/topic-filters)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 35",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/35-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-36",
    "questionNumber": 36,
    "text": "You plan to develop an Azure Functions app with an HTTP trigger. The app must support the following functionality:  \n  \n- Event-driven scaling  \n- Ability to use custom Linux images for function execution  \n  \nYou need to identify the app's hosting plan and the maximum time the app function can take to respond to incoming requests.",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "hosting_plan",
        "text": "Hosting plan",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "timeout_value",
        "text": "Timeout value",
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
        "text": "Consumption"
      },
      {
        "key": "B",
        "text": "Dedicated"
      },
      {
        "key": "C",
        "text": "Premium"
      },
      {
        "key": "D",
        "text": "230 seconds"
      },
      {
        "key": "E",
        "text": "10 minutes"
      },
      {
        "key": "F",
        "text": "unlimited"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Consumption"
      },
      {
        "key": "B",
        "text": "Dedicated"
      },
      {
        "key": "C",
        "text": "Premium"
      },
      {
        "key": "D",
        "text": "230 seconds"
      },
      {
        "key": "E",
        "text": "10 minutes"
      },
      {
        "key": "F",
        "text": "unlimited"
      }
    ],
    "correctAnswers": [
      "hosting_plan=C",
      "timeout_value=D"
    ],
    "explanation": "Azure Functions Premium hỗ trợ mở rộng quy mô theo sự kiện và hình ảnh vùng chứa Linux tùy chỉnh. Bất kể thời gian chờ thực thi hàm đã định cấu hình là bao nhiêu, hàm được kích hoạt HTTP có thời gian phản hồi tối đa 230 giây do hết thời gian chờ của Azure Load Balancer.\n\n**Tài liệu tham khảo:**\n[Azure Functions scale and hosting](https://learn.microsoft.com/en-us/azure/azure-functions/functions-scale) · [Azure Functions Premium plan](https://learn.microsoft.com/en-us/azure/azure-functions/functions-premium-plan)",
    "category": "Develop Containerized Solutions On Azure",
    "tags": [
      "AI-200",
      "Develop Containerized Solutions On Azure"
    ],
    "sourceTitle": "Examcademy AI-200 Question 36",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/36-develop-containerized-solutions-on-azure",
    "lastVerifiedAt": "2026-09-13T09:34:16.121Z"
  },
  {
    "id": "ai200-37",
    "questionNumber": 37,
    "text": "You are provisioning and configuring a Service Bus processor for AI batch jobs.  \n  \nThe processor must connect to an existing queue, register handlers for message and error processing, and then start receiving messages.  \n  \nYou need to provision and configure the Service Bus processor for message and error handling.  \n  \nWhich four actions should you perform, in sequence?",
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
        "correctAnswer": "A"
      },
      {
        "id": "4",
        "text": "Slot 4:",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Register message and error handlers."
      },
      {
        "key": "B",
        "text": "Start the message processor."
      },
      {
        "key": "C",
        "text": "Create the Service Bus client."
      },
      {
        "key": "D",
        "text": "Create the Service Bus processor for the queue."
      },
      {
        "key": "E",
        "text": "Dead-letter failed messages."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Register message and error handlers."
      },
      {
        "key": "B",
        "text": "Start the message processor."
      },
      {
        "key": "C",
        "text": "Create the Service Bus client."
      },
      {
        "key": "D",
        "text": "Create the Service Bus processor for the queue."
      },
      {
        "key": "E",
        "text": "Dead-letter failed messages."
      }
    ],
    "correctAnswers": [
      "1=C",
      "2=D",
      "3=A",
      "4=B"
    ],
    "explanation": "ServiceBusProcessor được tạo từ ServiceBusClient cho hàng đợi mục tiêu. Trình xử lý ProcessMessageAsync và ProcessErrorAsync của nó phải được định cấu hình trước khi bắt đầu xử lý; khởi động bộ xử lý sẽ bắt đầu nhận tin nhắn. Việc viết chữ chết được thực hiện trong khi xử lý một thông báo lỗi riêng lẻ thay vì trong quá trình khởi tạo bộ xử lý.\n\n**Tài liệu tham khảo:**\n[ServiceBusProcessor Class (Azure.Messaging.ServiceBus)](https://learn.microsoft.com/en-us/dotnet/api/azure.messaging.servicebus.servicebusprocessor?view=azure-dotnet) · [ServiceBusProcessor.StartProcessingAsync Method](https://learn.microsoft.com/en-us/dotnet/api/azure.messaging.servicebus.servicebusprocessor.startprocessingasync?view=azure-dotnet)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 37",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/37-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-38",
    "questionNumber": 38,
    "text": "You need to implement a secret-management solution for the Recommendation API that meets Fabrikam Inc.'s security and identity requirements.  \n  \nWhich service should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Container environment variables"
      },
      {
        "key": "B",
        "text": "Azure App Configuration"
      },
      {
        "key": "C",
        "text": "Kubernetes secrets"
      },
      {
        "key": "D",
        "text": "Azure Key Vault"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Azure Key Vault lưu trữ và kiểm soát tập trung quyền truy cập vào các bí mật. API đề xuất có thể xác thực bằng cách sử dụng managed identity, loại bỏ thông tin xác thực được mã hóa cứng hoặc văn bản thuần túy và Key Vault hỗ trợ các mẫu xoay vòng bí mật tự động.\n\n**Tài liệu tham khảo:**\n[Secure your Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/secure-key-vault) · [Understanding autorotation in Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/autorotation)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 38",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/38-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-39",
    "questionNumber": 39,
    "text": "You need to troubleshoot connectivity failures between microservices running in AKS.  \n  \nWhich troubleshooting actions should you perform? Each action may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "service_communication",
        "text": "Service fails to communicate with another service.",
        "correctAnswer": "D"
      },
      {
        "id": "pod_restarts",
        "text": "Pod restarts repeatedly.",
        "correctAnswer": "A"
      },
      {
        "id": "readiness_probe",
        "text": "Readiness probe failures are observed.",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Inspect container logs."
      },
      {
        "key": "B",
        "text": "Inspect Pod descriptions."
      },
      {
        "key": "C",
        "text": "Inspect Kubernetes events."
      },
      {
        "key": "D",
        "text": "Inspect Kubernetes service endpoints."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Inspect container logs."
      },
      {
        "key": "B",
        "text": "Inspect Pod descriptions."
      },
      {
        "key": "C",
        "text": "Inspect Kubernetes events."
      },
      {
        "key": "D",
        "text": "Inspect Kubernetes service endpoints."
      }
    ],
    "correctAnswers": [
      "service_communication=D",
      "pod_restarts=A",
      "readiness_probe=B"
    ],
    "explanation": "Điểm cuối dịch vụ cho biết Dịch vụ đã đăng ký các cổng và địa chỉ IP Pod sẵn sàng dự kiến ​​hay chưa. Nhật ký vùng chứa, bao gồm nhật ký từ phiên bản vùng chứa trước đó, cho biết lỗi thoát sau nhiều lần khởi động lại. Mô tả Pod bao gồm thông tin chi tiết về tình trạng và sự kiện của các thăm dò mức độ sẵn sàng không thành công, giúp xác định cấu hình đầu dò hoặc lỗi phản hồi.\n\n**Tài liệu tham khảo:**\n[Troubleshoot connections to pods and services within an AKS cluster](https://learn.microsoft.com/en-us/troubleshoot/azure/azure-kubernetes/connectivity/troubleshoot-connection-pods-services-same-cluster) · [Troubleshoot pod workload restarts in AKS](https://learn.microsoft.com/en-us/troubleshoot/azure/azure-kubernetes/availability-performance/troubleshoot-pod-workload-restart)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 39",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/39-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-40",
    "questionNumber": 40,
    "text": "You need to implement trace correlation in accordance with the business requirements.  \n  \nWhich three actions should you perform, in sequence?  \n  \nMore than one ordering of the answer choices is correct; any correct ordering receives credit.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "1",
        "text": "Slot 1:",
        "correctAnswer": "E"
      },
      {
        "id": "2",
        "text": "Slot 2:",
        "correctAnswer": "B"
      },
      {
        "id": "3",
        "text": "Slot 3:",
        "correctAnswer": "A"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Redeploy the instrumented services."
      },
      {
        "key": "B",
        "text": "Configure a trace exporter in the OpenTelemetry SDK."
      },
      {
        "key": "C",
        "text": "Call TelemetryClient.TrackEvent() within service methods."
      },
      {
        "key": "D",
        "text": "Implement a view in the OpenTelemetry SDK."
      },
      {
        "key": "E",
        "text": "Instrument the application code by using the OpenTelemetry SDK."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Redeploy the instrumented services."
      },
      {
        "key": "B",
        "text": "Configure a trace exporter in the OpenTelemetry SDK."
      },
      {
        "key": "C",
        "text": "Call TelemetryClient.TrackEvent() within service methods."
      },
      {
        "key": "D",
        "text": "Implement a view in the OpenTelemetry SDK."
      },
      {
        "key": "E",
        "text": "Instrument the application code by using the OpenTelemetry SDK."
      }
    ],
    "correctAnswers": [
      "1=E",
      "2=B",
      "3=A"
    ],
    "explanation": "Công cụ OpenTelemetry tạo ra các dấu vết phân tán và truyền bá bối cảnh theo dõi giữa các dịch vụ. Trình xuất dấu vết sẽ gửi những dấu vết đó đến chương trình phụ trợ giám sát và việc triển khai lại sẽ áp dụng cấu hình và thiết bị đo đạc mới. Chế độ xem OpenTelemetry áp dụng cho các luồng số liệu, trong khi TelemetryClient.TrackEvent() tạo ra phép đo từ xa sự kiện tùy chỉnh thay vì theo dõi phân tán OpenTelemetry được yêu cầu.\n\n**Tài liệu tham khảo:**\n[Enable OpenTelemetry in Application Insights](https://learn.microsoft.com/en-us/azure/azure-monitor/app/opentelemetry-enable) · [Microsoft OpenTelemetry exporter for Azure Monitor](https://learn.microsoft.com/en-us/python/api/overview/azure/monitor-opentelemetry-exporter-readme?view=azure-python-preview)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 40",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/40-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-41",
    "questionNumber": 41,
    "text": "You need to configure event-driven scaling for the backend API services to meet the technical requirements.  \n  \nWhich settings should you use for each element? Each setting may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "scaler",
        "text": "Scaler",
        "correctAnswer": "E"
      },
      {
        "id": "trigger_metadata",
        "text": "Trigger metadata",
        "correctAnswer": "D"
      },
      {
        "id": "min_replicas",
        "text": "min-replicas",
        "correctAnswer": "B"
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
        "text": "queueLength"
      },
      {
        "key": "D",
        "text": "messageCount"
      },
      {
        "key": "E",
        "text": "Azure Service Bus"
      },
      {
        "key": "F",
        "text": "Azure Container Apps"
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
        "text": "queueLength"
      },
      {
        "key": "D",
        "text": "messageCount"
      },
      {
        "key": "E",
        "text": "Azure Service Bus"
      },
      {
        "key": "F",
        "text": "Azure Container Apps"
      }
    ],
    "correctAnswers": [
      "scaler=E",
      "trigger_metadata=D",
      "min_replicas=B"
    ],
    "explanation": "Azure Container Apps hỗ trợ quy tắc tỷ lệ `azure-servicebus` cho hàng đợi Bus dịch vụ, với `messageCount` làm siêu dữ liệu ngưỡng thông báo. Số lượng bản sao tối thiểu là 1 giúp phiên bản API phụ trợ luôn chạy, giảm thiểu độ trễ khi khởi động nguội.\n\n**Tài liệu tham khảo:**\n[Scaling in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/scale-app)",
    "category": "Develop Containerized Solutions On Azure",
    "tags": [
      "AI-200",
      "Develop Containerized Solutions On Azure"
    ],
    "sourceTitle": "Examcademy AI-200 Question 41",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/41-develop-containerized-solutions-on-azure",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-42",
    "questionNumber": 42,
    "text": "A production Azure Function app connects to an Azure SQL Database. The solution must provide the following functionality:  \n  \n- Prevent secrets from being exposed in source control.  \n- Support secret rotation without redeploying the function app.  \n- Avoid downtime during credential updates.  \n  \nYou need to configure secure, maintainable secret management. What should you configure?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Application settings with Key Vault references"
      },
      {
        "key": "B",
        "text": "Environment variables in local.settings.json"
      },
      {
        "key": "C",
        "text": "Hard-coded connection string in the startup class"
      },
      {
        "key": "D",
        "text": "Parameter file stored in source control"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Tham chiếu Azure Key Vault trong cài đặt ứng dụng lưu trữ thông tin xác thực Azure SQL tập trung thay vì trong các tệp hoặc mã ứng dụng được kiểm soát nguồn. Tham chiếu không có phiên bản sử dụng phiên bản bí mật Key Vault mới nhất sau khi xoay, cho phép ứng dụng Chức năng sử dụng thông tin xác thực đã xoay mà không cần triển khai lại; phiên bản thông tin xác thực có thể vẫn hợp lệ trong quá trình chuyển đổi để tránh bị gián đoạn.\n\n**Tài liệu tham khảo:**\n[Use Key Vault references as app settings in Azure App Service, Azure Functions, and Azure Logic Apps (Standard)](https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 42",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/42-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-43",
    "questionNumber": 43,
    "text": "An AI platform uses App Configuration for feature flags and endpoint routing.  \n  \nThe platform keeps secrets together with configuration data and does **NOT** support dynamic refresh. The solution must enable dynamic configuration refresh while ensuring secrets are **NOT** stored in App Configuration.  \n  \nYou need to enable secure dynamic configuration management for the platform.  \n  \nWhich three actions should you take? Each correct answer is part of the solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Allow configuration updates with a polling interval."
      },
      {
        "key": "B",
        "text": "Use managed identity for both App Configuration and Key Vault access."
      },
      {
        "key": "C",
        "text": "Store API keys in Key Vault."
      },
      {
        "key": "D",
        "text": "Use a service principal secret for both App Configuration and Key Vault access."
      },
      {
        "key": "E",
        "text": "Store configuration values in environment variables."
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Cấu hình ứng dụng Azure hỗ trợ làm mới động thông qua các lần kiểm tra làm mới được điều chỉnh theo khoảng thời gian đã định cấu hình. Các bí mật như khóa API phải nằm trong Azure Key Vault và được truy cập thông qua tham chiếu Key Vault hoặc tích hợp Key Vault trực tiếp, thay vì được lưu trữ dưới dạng giá trị Cấu hình ứng dụng. managed identity cung cấp xác thực không cần mật khẩu cho cả Cấu hình ứng dụng và Key Vault, tránh bí mật chính của dịch vụ được lưu trữ.\n\n**Tài liệu tham khảo:**\n[Azure App Configuration .NET Configuration Provider reference](https://learn.microsoft.com/en-us/azure/azure-app-configuration/reference-dotnet-provider) · [Reload Secrets and Certificates Automatically - Azure App Configuration](https://learn.microsoft.com/en-us/azure/azure-app-configuration/reload-key-vault-secrets-dotnet)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 43",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/43-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-44",
    "questionNumber": 44,
    "text": "You are developing an AI application. Its configuration will depend on a dynamically retrieved value for a designated key stored in an Azure App Configuration resource.  \n  \nYou must deploy the application to the test, staging, and production environments, and you need to set a different value in each environment.  \n  \nWhich Azure App Configuration resource feature should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Labels"
      },
      {
        "key": "B",
        "text": "Resource tags"
      },
      {
        "key": "C",
        "text": "Content types"
      },
      {
        "key": "D",
        "text": "Key prefixes"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Nhãn Cấu hình ứng dụng Azure cho phép nhiều khóa-giá trị có cùng khóa và các giá trị khác nhau. Việc chỉ định các nhãn như Kiểm tra, Dàn dựng và Sản xuất cho phép ứng dụng tải động giá trị tương ứng với môi trường hiện tại của nó.\n\n**Tài liệu tham khảo:**\n[Understand Azure App Configuration key-value store](https://learn.microsoft.com/en-us/azure/azure-app-configuration/concept-key-value) · [Use labels to provide per-environment configuration values](https://learn.microsoft.com/en-us/azure/azure-app-configuration/howto-labels-aspnet-core)",
    "category": "Develop AI Solutions By Using Azure Data Management Services",
    "tags": [
      "AI-200",
      "Develop AI Solutions By Using Azure Data Management Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 44",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/44-develop-ai-solutions-by-using-azure-data-management-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-45",
    "questionNumber": 45,
    "text": "You are building an AI-powered API that retrieves connection strings and API keys from Azure Key Vault.  \n  \nYou must configure a solution that provides the following security capabilities:  \n  \n- The API must authenticate to Key Vault without storing credentials in any application configuration files.  \n- The API identity must have only the minimum permissions required to read secrets.  \n- The configuration must limit the blast radius if an identity or credential is compromised.  \n  \nYou need to implement a secure access strategy for the API.  \n  \nWhich two actions should you take? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Assign the Key Vault Administrator role at subscription scope."
      },
      {
        "key": "B",
        "text": "Grant the Key Vault Secrets User role at vault scope."
      },
      {
        "key": "C",
        "text": "Use system-assigned managed identity."
      },
      {
        "key": "D",
        "text": "Store a secret value in Azure App Configuration."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "system-assigned managed identity cung cấp danh tính ứng dụng có thể xác thực với Azure Key Vault mà không cần thông tin xác thực do ứng dụng quản lý. Vai trò Người dùng Bí mật Key Vault cấp quyền đọc nội dung bí mật; việc chỉ định nó ở phạm vi vault sẽ giới hạn quyền truy cập vào vault đó và tuân theo đặc quyền tối thiểu. Quản trị viên Key Vault ở phạm vi đăng ký cấp quyền truy cập quản trị quá mức.\n\n**Tài liệu tham khảo:**\n[Authenticate to Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/authentication) · [Grant permission to applications to access an Azure key vault using Azure RBAC](https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 45",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/45-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-46",
    "questionNumber": 46,
    "text": "You are developing an AI API that is deployed to ACA. The API needs database credentials stored in Key Vault. Key Vault is configured to use Azure RBAC for access control.  \n  \nThe security team rotates the database credentials periodically. The application must always use the newest version of every credential without redeployment and without exposing secrets in code or configuration.  \n  \nYou need to implement a secure secret-access strategy that prevents credential exposure and retrieves the latest version of each secret at runtime without redeploying the container.  \n  \nWhich three actions should you perform? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Configure a Key Vault RBAC role assignment."
      },
      {
        "key": "B",
        "text": "Configure a Key Vault access policy."
      },
      {
        "key": "C",
        "text": "Export the secret during deployment."
      },
      {
        "key": "D",
        "text": "Assign a system-assigned managed identity."
      },
      {
        "key": "E",
        "text": "Retrieve the secret at runtime by using the SDK."
      }
    ],
    "correctAnswers": [
      "A",
      "D",
      "E"
    ],
    "explanation": "Ủy quyền Azure RBAC yêu cầu gán vai trò Key Vault RBAC, chẳng hạn như Người dùng bí mật Key Vault, để nhận dạng khối lượng công việc; chính sách truy cập Key Vault không phải là mô hình ủy quyền trong cấu hình này. system-assigned managed identity cho phép ứng dụng trong vùng chứa xác thực với Key Vault mà không cần lưu trữ thông tin xác thực. Việc truy xuất URI bí mật chưa được phiên bản thông qua SDK Key Vault trong thời gian chạy sẽ nhận được phiên bản bí mật hiện tại, do đó việc xoay vòng thông tin xác thực không yêu cầu triển khai lại vùng chứa.\n\n**Tài liệu tham khảo:**\n[Manage secrets in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/manage-secrets) · [Managed identities in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/managed-identity)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 46",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/46-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-47",
    "questionNumber": 47,
    "text": "Solution: Hardcode the API key as an environment variable in the Dockerfile.  \n  \nDoes this solution achieve the goal?",
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
    "explanation": "Mã hóa cứng khóa API trong Dockerfile sẽ hiển thị nó thông qua kho lưu trữ nguồn và lịch sử cam kết Git, đồng thời có thể nhúng nó vào hình ảnh vùng chứa. Đối với vùng chứa tùy chỉnh Azure App Service, cài đặt ứng dụng được định cấu hình bên ngoài sẽ được đưa vào vùng chứa dưới dạng các biến môi trường thời gian chạy, cho phép bí mật vẫn ở bên ngoài kho lưu trữ.\n\n**Tài liệu tham khảo:**\n[Configure a Custom Container - Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/configure-custom-container)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 47",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/47-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-48",
    "questionNumber": 48,
    "text": "Solution: Save the API key as a GitHub repository secret.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Các bí mật của kho lưu trữ GitHub được thiết kế để sử dụng cho quy trình công việc của GitHub Actions và không được đưa vào vùng chứa Azure App Service khi chạy. Cần có kho lưu trữ bí mật có thể truy cập trong thời gian chạy hoặc cơ chế cấu hình Dịch vụ ứng dụng.",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 48",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/48-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-49",
    "questionNumber": 49,
    "text": "Solution: Store the API key in Azure Key Vault and reference it through an App Service application setting.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Azure App Service có thể giải quyết tham chiếu Azure Key Vault được sử dụng làm cài đặt ứng dụng, cho phép vùng chứa sử dụng khóa API khi chạy. Bí mật được lưu trữ trong Key Vault thay vì trong mã nguồn hoặc lịch sử cam kết Git.\n\n**Tài liệu tham khảo:**\n[Use Key Vault references as app settings in Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 49",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/49-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-50",
    "questionNumber": 50,
    "text": "Solution: Store environment-specific settings and secrets by using App Configuration with Key Vault references, and access them from the function app through a managed identity.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Cấu hình ứng dụng Azure hỗ trợ cấu hình dành riêng cho môi trường, được quản lý tập trung, trong khi các tham chiếu Key Vault giữ các giá trị bí mật trong Azure Key Vault thay vì kiểm soát nguồn. Ứng dụng chức năng managed identity có thể xác thực với Cấu hình ứng dụng và được cấp quyền đọc các bí mật Key Vault được tham chiếu mà không lưu trữ thông tin xác thực trong mã hoặc tệp cấu hình.\n\n**Tài liệu tham khảo:**\n[Use App Configuration references for Azure App Service and Azure Functions](https://learn.microsoft.com/en-us/azure/app-service/app-service-configuration-references) · [Azure App Configuration FAQ](https://learn.microsoft.com/en-us/azure/azure-app-configuration/faq)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 50",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/50-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-51",
    "questionNumber": 51,
    "text": "Solution: Save production secrets in environment variables defined by the Dockerfile.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Các biến môi trường do Dockerfile xác định đưa các giá trị bí mật vào hình ảnh vùng chứa hoặc siêu dữ liệu bản dựng của nó, vì vậy chúng không phải là cơ chế an toàn để giữ bí mật ngoài tầm kiểm soát nguồn hoặc để cung cấp các giá trị riêng biệt cho mỗi môi trường. Azure Functions hỗ trợ cấu hình thông qua cài đặt ứng dụng, được hiển thị cho ứng dụng dưới dạng các biến môi trường; bí mật phải được cung cấp thông qua cài đặt ứng dụng dành riêng cho môi trường hoặc kho lưu trữ bí mật được quản lý khi triển khai/thời gian chạy.\n\n**Tài liệu tham khảo:**\n[App settings reference for Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-app-settings) · [Configure function app settings in Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-how-to-use-azure-function-app-settings)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 51",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/51-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-52",
    "questionNumber": 52,
    "text": "Solution: Save connection strings in the Function app application settings configured through the Azure portal.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Các chuỗi kết nối ứng dụng Azure Function và cài đặt ứng dụng được định cấu hình riêng cho từng ứng dụng chức năng và hiển thị với ứng dụng dưới dạng các biến môi trường. Việc giữ các chuỗi kết nối trong cấu hình cổng thông tin Azure hỗ trợ các giá trị trên mỗi môi trường mà không đảm bảo bí mật về kiểm soát nguồn; cài đặt ứng dụng được mã hóa ở phần còn lại.\n\n**Tài liệu tham khảo:**\n[Configure function app settings in Azure Functions](https://learn.microsoft.com/en-ie/azure/azure-functions/functions-how-to-use-azure-function-app-settings) · [Develop Azure Functions using Visual Studio](https://learn.microsoft.com/en-us/azure/azure-functions/functions-develop-vs)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 52",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/52-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-53",
    "questionNumber": 53,
    "text": "HOTSPOT -  \n  \nYou are reviewing message-processing code in a backend worker service.  \n  \nReview the following Python code that initializes and starts a Service Bus processor.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1785139237009-aa72xv4x.png)  \n  \nFor each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "Messages are removed from the queue as soon as they are received by the processor.",
        "correctAnswer": "No"
      },
      {
        "id": "2",
        "text": "If message processing fails due to a transient service error, the message can be retried by another consumer.",
        "correctAnswer": "Yes"
      },
      {
        "id": "3",
        "text": "Messages with invalid JSON payloads are retried until the maximum delivery count is reached.",
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
    "explanation": "Peek-Lock giữ lại tin nhắn cho đến khi nó được giải quyết rõ ràng khi hoàn thành, do đó, chỉ việc nhận sẽ không xóa nó. Việc bỏ tin nhắn bị khóa sẽ giải phóng nó để gửi lại cho người nhận. Việc gửi ký tự chết cho một tải trọng không đúng định dạng sẽ chuyển nó trực tiếp đến hàng đợi con có ký tự chết thay vì dựa vào các lần thử gửi lặp lại và số lần gửi tối đa.\n\n**Tài liệu tham khảo:**\n[Azure Service Bus client library for Python](https://learn.microsoft.com/en-us/python/api/overview/azure/servicebus-readme?view=azure-python) · [Message Transfers, Locks, and Settlement - Azure Service Bus](https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-transfers-locks-settlement)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1785139237009-aa72xv4x.png",
    "sourceTitle": "Examcademy AI-200 Question 53",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/53-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-54",
    "questionNumber": 54,
    "text": "You are developing several microservices to run on Azure Container Apps, with external HTTP ingress enabled.  \n  \nA deployed microservice must be updated so that users can test new features. The requirements are:  \n  \n- Enable and retain a single URL for the updated microservice to give test users.  \n- Update the microservice that corresponds to the current microservice version.  \n  \nYou need to configure Azure Container Apps. Which features should you configure?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "single_url_test_users",
        "text": "Single URL for test users",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      },
      {
        "id": "current_microservice_activation",
        "text": "Current microservice activation",
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
        "text": "Revision label"
      },
      {
        "key": "B",
        "text": "Revision mode"
      },
      {
        "key": "C",
        "text": "Container image"
      },
      {
        "key": "D",
        "text": "Container registry"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Revision label"
      },
      {
        "key": "B",
        "text": "Revision mode"
      },
      {
        "key": "C",
        "text": "Container image"
      },
      {
        "key": "D",
        "text": "Container registry"
      }
    ],
    "correctAnswers": [
      "single_url_test_users=A",
      "current_microservice_activation=B"
    ],
    "explanation": "Nhãn sửa đổi cung cấp URL riêng cho bản sửa đổi Azure Container Apps, cho phép người kiểm tra sử dụng điểm cuối nhất quán cho bản sửa đổi đó. Chế độ sửa đổi kiểm soát kích hoạt sửa đổi; ở chế độ Bản sửa đổi đơn, việc tạo bản sửa đổi mới sẽ hủy kích hoạt bản sửa đổi đang hoạt động trước đó, vì vậy phiên bản hiện tại là phiên bản vi dịch vụ đang hoạt động.\n\n**Tài liệu tham khảo:**\n[Azure Container Apps revisions](https://learn.microsoft.com/en-us/azure/container-apps/revisions) · [Azure Container Apps traffic splitting](https://learn.microsoft.com/en-us/azure/container-apps/traffic-splitting)",
    "category": "Develop Containerized Solutions On Azure",
    "tags": [
      "AI-200",
      "Develop Containerized Solutions On Azure"
    ],
    "sourceTitle": "Examcademy AI-200 Question 54",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/54-develop-containerized-solutions-on-azure",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-55",
    "questionNumber": 55,
    "text": "You deploy a Linux container image to App Service. The container requires these environment variables at runtime:  \n  \n- A non-sensitive configuration value named `MODEL_VERSION`  \n- A database password that must remain secure  \n  \nYou need to configure App Service to provide these environment variables at runtime. Which configurations should you use?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "model_version",
        "text": "MODEL_VERSION",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "database_password",
        "text": "Database password",
        "correctAnswer": "E",
        "choiceKeys": [
          "A",
          "D",
          "E"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "App setting with plain text value"
      },
      {
        "key": "B",
        "text": "Connection string"
      },
      {
        "key": "C",
        "text": "Dockerfile ENV instruction"
      },
      {
        "key": "D",
        "text": "Connection string with embedded password"
      },
      {
        "key": "E",
        "text": "Key Vault reference syntax"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "App setting with plain text value"
      },
      {
        "key": "B",
        "text": "Connection string"
      },
      {
        "key": "C",
        "text": "Dockerfile ENV instruction"
      },
      {
        "key": "D",
        "text": "Connection string with embedded password"
      },
      {
        "key": "E",
        "text": "Key Vault reference syntax"
      }
    ],
    "correctAnswers": [
      "model_version=A",
      "database_password=E"
    ],
    "explanation": "Cài đặt ứng dụng Dịch vụ ứng dụng được đưa vào bộ chứa Linux dưới dạng các biến môi trường, điều này làm cho cài đặt ứng dụng văn bản thuần túy phù hợp với giá trị MODEL_VERSION không nhạy cảm. Tham chiếu Key Vault giữ mật khẩu cơ sở dữ liệu trong Azure Key Vault và cho phép Dịch vụ ứng dụng giải quyết mật khẩu đó một cách an toàn trong thời gian chạy, tránh mật khẩu được nhúng.\n\n**Tài liệu tham khảo:**\n[Configure app settings - Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/configure-common) · [Use Key Vault references as app settings - Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references)",
    "category": "Develop Containerized Solutions On Azure",
    "tags": [
      "AI-200",
      "Develop Containerized Solutions On Azure"
    ],
    "sourceTitle": "Examcademy AI-200 Question 55",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/55-develop-containerized-solutions-on-azure",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-56",
    "questionNumber": 56,
    "text": "You deploy a private container image from Azure Container Registry (ACR) to App Service.  \n  \nApp Service must authenticate to ACR to pull the image. The solution must not store static registry credentials.  \n  \nYou need to configure secure authentication for the image pull. Which configurations should you use?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "authenticate_acr",
        "text": "Authenticate App Service to ACR.",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "avoid_static_credentials",
        "text": "Avoid storing static credentials.",
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
        "text": "Assign the Container Registry Repository Reader role to a managed identity."
      },
      {
        "key": "B",
        "text": "Configure a webhook on ACR."
      },
      {
        "key": "C",
        "text": "Enable the admin user."
      },
      {
        "key": "D",
        "text": "Embed credentials in Dockerfile."
      },
      {
        "key": "E",
        "text": "Store the registry password in application settings."
      },
      {
        "key": "F",
        "text": "Use managed identity with role assignment."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Assign the Container Registry Repository Reader role to a managed identity."
      },
      {
        "key": "B",
        "text": "Configure a webhook on ACR."
      },
      {
        "key": "C",
        "text": "Enable the admin user."
      },
      {
        "key": "D",
        "text": "Embed credentials in Dockerfile."
      },
      {
        "key": "E",
        "text": "Store the registry password in application settings."
      },
      {
        "key": "F",
        "text": "Use managed identity with role assignment."
      }
    ],
    "correctAnswers": [
      "authenticate_acr=A",
      "avoid_static_credentials=F"
    ],
    "explanation": "managed identity cho phép Dịch vụ ứng dụng lấy mã thông báo Microsoft Entra mà không cần lưu trữ tên người dùng hoặc mật khẩu đăng ký. Việc cấp danh tính đó cho vai trò Trình đọc kho lưu trữ sổ đăng ký vùng chứa sẽ cung cấp quyền truy cập kéo cho ACR hỗ trợ ABAC; Do đó, managed identity với sự phân công vai trò sẽ đáp ứng cả yêu cầu xác thực và thông tin xác thực no.\n\n**Tài liệu tham khảo:**\n[Configure a custom container for Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/configure-custom-container) · [Use a managed identity to authenticate to an Azure container registry](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-authentication-managed-identity)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 56",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/56-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-57",
    "questionNumber": 57,
    "text": "You plan to deploy a web app to App Service on Linux. You create an App Service plan and create and push a custom Docker image that contains the web app to Azure Container Registry.  \n  \nYou need to view console logs generated inside the container in real time.  \n  \nHow should you complete the Azure CLI command?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "command1",
        "text": "Option 1:",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      },
      {
        "id": "logging_type",
        "text": "Option 2:",
        "correctAnswer": "F",
        "choiceKeys": [
          "E",
          "F",
          "G"
        ]
      },
      {
        "id": "service",
        "text": "Option 3:",
        "correctAnswer": "H",
        "choiceKeys": [
          "H",
          "I",
          "J"
        ]
      },
      {
        "id": "command2",
        "text": "Option 4:",
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
        "text": "config"
      },
      {
        "key": "B",
        "text": "download"
      },
      {
        "key": "C",
        "text": "show"
      },
      {
        "key": "D",
        "text": "tail"
      },
      {
        "key": "E",
        "text": "--web-server-logging"
      },
      {
        "key": "F",
        "text": "--docker-container-logging"
      },
      {
        "key": "G",
        "text": "--application-logging"
      },
      {
        "key": "H",
        "text": "webapp"
      },
      {
        "key": "I",
        "text": "acr"
      },
      {
        "key": "J",
        "text": "aks"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "config"
      },
      {
        "key": "B",
        "text": "download"
      },
      {
        "key": "C",
        "text": "show"
      },
      {
        "key": "D",
        "text": "tail"
      },
      {
        "key": "E",
        "text": "--web-server-logging"
      },
      {
        "key": "F",
        "text": "--docker-container-logging"
      },
      {
        "key": "G",
        "text": "--application-logging"
      },
      {
        "key": "H",
        "text": "webapp"
      },
      {
        "key": "I",
        "text": "acr"
      },
      {
        "key": "J",
        "text": "aks"
      }
    ],
    "correctAnswers": [
      "command1=A",
      "logging_type=F",
      "service=H",
      "command2=D"
    ],
    "explanation": "`--docker-container-logging filesystem` định cấu hình bộ sưu tập đầu ra STDOUT và STDERR của vùng chứa. `az webapp log tail` sau đó bắt đầu theo dõi nhật ký trực tiếp cho ứng dụng web được chỉ định.\n\n**Tài liệu tham khảo:**\n[az webapp log — Azure CLI reference](https://learn.microsoft.com/en-us/cli/azure/webapp/log?view=azure-cli-latest)",
    "category": "Develop Containerized Solutions On Azure",
    "tags": [
      "AI-200",
      "Develop Containerized Solutions On Azure"
    ],
    "sourceTitle": "Examcademy AI-200 Question 57",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/57-develop-containerized-solutions-on-azure",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-58",
    "questionNumber": 58,
    "text": "You are developing a containerized AI application with the Python SDK to retrieve a runtime-setting value from Azure App Configuration. The application runs in Azure using a managed identity and must also work in a local development environment without code changes.  \n  \nComplete the code that performs the retrieval.",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "credential",
        "text": "Option 1:",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "method",
        "text": "Option 2:",
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
        "text": "ClientSecretCredential"
      },
      {
        "key": "B",
        "text": "DefaultAzureCredential"
      },
      {
        "key": "C",
        "text": "ManagedIdentityCredential"
      },
      {
        "key": "D",
        "text": "list_labels"
      },
      {
        "key": "E",
        "text": "get_configuration_setting"
      },
      {
        "key": "F",
        "text": "list_configuration_settings"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "ClientSecretCredential"
      },
      {
        "key": "B",
        "text": "DefaultAzureCredential"
      },
      {
        "key": "C",
        "text": "ManagedIdentityCredential"
      },
      {
        "key": "D",
        "text": "list_labels"
      },
      {
        "key": "E",
        "text": "get_configuration_setting"
      },
      {
        "key": "F",
        "text": "list_configuration_settings"
      }
    ],
    "correctAnswers": [
      "credential=B",
      "method=E"
    ],
    "explanation": "DefaultAzureCredential sử dụng chuỗi thông tin xác thực: nó có thể xác thực thông qua managed identity của khối lượng công việc trong Azure và thông qua thông tin xác thực có sẵn của nhà phát triển cục bộ. Phương thức get_configuration_setting của Cấu hình ứng dụng Azure truy xuất khóa-giá trị duy nhất được xác định bởi khóa và nhãn; ở đây, khóa là \"FeatureX\" và nhãn là \"sản xuất\".\n\n**Tài liệu tham khảo:**\n[Using Azure App Configuration in Python apps with the Azure SDK for Python](https://learn.microsoft.com/en-us/azure/azure-app-configuration/quickstart-python) · [Access Azure App Configuration using Microsoft Entra ID](https://learn.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 58",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/58-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-59",
    "questionNumber": 59,
    "text": "A company uses Azure Monitor Application Insights to monitor application behavior, including incoming requests and dependencies.  \n  \nIdentify failed requests from the last hour and calculate the average duration of failed-request dependency calls, grouped by operation name.  \n  \nWhich operators should you use?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "op1",
        "text": "Option 1:",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "op2",
        "text": "Option 2:",
        "correctAnswer": "C",
        "choiceKeys": [
          "D",
          "E",
          "C"
        ]
      },
      {
        "id": "op3",
        "text": "Option 3:",
        "correctAnswer": "F",
        "choiceKeys": [
          "A",
          "B",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "extend"
      },
      {
        "key": "B",
        "text": "project"
      },
      {
        "key": "C",
        "text": "where"
      },
      {
        "key": "D",
        "text": "distinct"
      },
      {
        "key": "E",
        "text": "render"
      },
      {
        "key": "F",
        "text": "summarize"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "extend"
      },
      {
        "key": "B",
        "text": "project"
      },
      {
        "key": "C",
        "text": "where"
      },
      {
        "key": "D",
        "text": "distinct"
      },
      {
        "key": "E",
        "text": "render"
      },
      {
        "key": "F",
        "text": "summarize"
      }
    ],
    "correctAnswers": [
      "op1=C",
      "op2=C",
      "op3=F"
    ],
    "explanation": "`where` lọc các hàng bằng điều kiện Boolean, do đó, nó hạn chế cả yêu cầu và phần phụ thuộc trong phạm vi thời gian bắt buộc và điều kiện lỗi. `project` giữ lại khóa tham gia và gán bí danh thời lượng phụ thuộc. `summarize` thực hiện tổng hợp `avg()` và nhóm kết quả của nó theo `operation_Name`.",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 59",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/59-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-60",
    "questionNumber": 60,
    "text": "You are developing a new website page that uses Azure Cosmos DB for data storage. The feature uses documents in the following format:  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1785139233565-mnl3iunj.png)  \n  \nYou must show data for the new page in a specified order. You create the following query for the page:  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1785139238284-6b45e0f7.png)  \n  \nYou need to configure an Azure Cosmos DB policy that supports the query. Each JSON segment may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "indexProperty",
        "text": "Slot 1:",
        "correctAnswer": "E"
      },
      {
        "id": "cityOrder",
        "text": "Slot 2:",
        "correctAnswer": "D"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "or der By"
      },
      {
        "key": "B",
        "text": "sortOrder"
      },
      {
        "key": "C",
        "text": "ascending"
      },
      {
        "key": "D",
        "text": "descending"
      },
      {
        "key": "E",
        "text": "compositeIndexes"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "or der By"
      },
      {
        "key": "B",
        "text": "sortOrder"
      },
      {
        "key": "C",
        "text": "ascending"
      },
      {
        "key": "D",
        "text": "descending"
      },
      {
        "key": "E",
        "text": "compositeIndexes"
      }
    ],
    "correctAnswers": [
      "indexProperty=E",
      "cityOrder=D"
    ],
    "explanation": "Azure Cosmos DB sử dụng chỉ mục tổng hợp để hỗ trợ các truy vấn sắp xếp theo nhiều thuộc tính. Chỉ mục tổng hợp phải liệt kê các thuộc tính theo trình tự ORDER BY và sử dụng các hướng sắp xếp phù hợp: /name tăng dần theo mặc định và /city giảm dần.",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1785139233565-mnl3iunj.png",
    "sourceTitle": "Examcademy AI-200 Question 60",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/60-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-61",
    "questionNumber": 61,
    "text": "A Python API uses a SQL statement to retrieve a document from Azure Database for PostgreSQL. The API receives the document ID from user input, and the current implementation inserts that ID directly into the SQL statement.  \n  \nYou need to secure execution of the SQL statement while minimizing the chance of SQL injection. How should the current implementation be modified?  \n  \nEach configuration may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "modify_sql",
        "text": "Modify the SQL statement structure.",
        "correctAnswer": "A"
      },
      {
        "id": "bind_input",
        "text": "Bind user input.",
        "correctAnswer": "B"
      },
      {
        "id": "execute",
        "text": "Execute the statement.",
        "correctAnswer": "D"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Use a parameterized query."
      },
      {
        "key": "B",
        "text": "Pass the ID as an argument."
      },
      {
        "key": "C",
        "text": "Escape quotation marks in the ID."
      },
      {
        "key": "D",
        "text": "Supply the parameter tuple to the SDK method."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Use a parameterized query."
      },
      {
        "key": "B",
        "text": "Pass the ID as an argument."
      },
      {
        "key": "C",
        "text": "Escape quotation marks in the ID."
      },
      {
        "key": "D",
        "text": "Supply the parameter tuple to the SDK method."
      }
    ],
    "correctAnswers": [
      "modify_sql=A",
      "bind_input=B",
      "execute=D"
    ],
    "explanation": "Các truy vấn được tham số hóa giữ cú pháp SQL tách biệt khỏi giá trị ID tài liệu. ID được liên kết dưới dạng đối số và được chuyển trong một bộ tham số tới phương thức thực thi của SDK cơ sở dữ liệu, do đó, ID được coi là dữ liệu thay vì SQL thực thi. Việc thoát khỏi dấu ngoặc kép không phải là sự thay thế đáng tin cậy cho việc liên kết tham số.\n\n**Tài liệu tham khảo:**\n[Psycopg documentation: Passing parameters to SQL queries](https://www.psycopg.org/psycopg3/docs/basic/params.html)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 61",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/61-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-62",
    "questionNumber": 62,
    "text": "You are deploying an Azure Function app that uses a managed identity to retrieve secrets from Key Vault.  \n  \nThe deployment must ensure that the identity and secret configuration are ready before the function code is deployed.  \n  \nIn which sequence should you perform the actions?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "1",
        "text": "1.",
        "correctAnswer": "D"
      },
      {
        "id": "2",
        "text": "2.",
        "correctAnswer": "C"
      },
      {
        "id": "3",
        "text": "3.",
        "correctAnswer": "A"
      },
      {
        "id": "4",
        "text": "4.",
        "correctAnswer": "B"
      },
      {
        "id": "5",
        "text": "5.",
        "correctAnswer": "E"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Grant the managed identity access to Key Vault."
      },
      {
        "key": "B",
        "text": "Add Key Vault references to application settings."
      },
      {
        "key": "C",
        "text": "Assign a managed identity to the function app."
      },
      {
        "key": "D",
        "text": "Create the function app."
      },
      {
        "key": "E",
        "text": "Deploy the function code."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Grant the managed identity access to Key Vault."
      },
      {
        "key": "B",
        "text": "Add Key Vault references to application settings."
      },
      {
        "key": "C",
        "text": "Assign a managed identity to the function app."
      },
      {
        "key": "D",
        "text": "Create the function app."
      },
      {
        "key": "E",
        "text": "Deploy the function code."
      }
    ],
    "correctAnswers": [
      "1=D",
      "2=C",
      "3=A",
      "4=B",
      "5=E"
    ],
    "explanation": "system-assigned managed identity được tạo cho ứng dụng Chức năng hiện có, vì vậy ứng dụng này phải được tạo trước tiên. Sau đó, danh tính phải nhận được quyền đọc các bí mật từ Key Vault trước khi cài đặt ứng dụng sử dụng tham chiếu Key Vault. Với cài đặt danh tính và bí mật được định cấu hình, việc triển khai mã chức năng lần cuối sẽ đảm bảo ứng dụng có thể truy xuất các bí mật cần thiết khi khởi động.",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 62",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/62-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-63",
    "questionNumber": 63,
    "text": "You are developing a serverless Java application on Azure and create a new Azure Key Vault to use secrets from a new Azure Functions application.  \n  \nThe application must meet these requirements:  \n  \n- Reference Azure Key Vault without requiring changes to the Java code.  \n- Dynamically add and remove Azure Functions host instances according to the number of incoming application events.  \n- Keep instances perpetually warm to prevent cold starts.  \n- Connect to a VNet.  \n- Remove authentication to the Azure Key Vault instance if the Azure Functions application is deleted.  \n  \nYou need to grant the Azure Functions application access to the Azure Key Vault.  \n  \nWhich three actions should you take, in sequence?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "1",
        "text": "Slot 1:",
        "correctAnswer": "D"
      },
      {
        "id": "2",
        "text": "Slot 2:",
        "correctAnswer": "F"
      },
      {
        "id": "3",
        "text": "Slot 3:",
        "correctAnswer": "A"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Create an access policy in Azure Key Vault for the application identity."
      },
      {
        "key": "B",
        "text": "Create the Azure Functions app with a Consumption plan type."
      },
      {
        "key": "C",
        "text": "Create a user-assigned managed identity for the application."
      },
      {
        "key": "D",
        "text": "Create the Azure Functions app with a Premium plan type."
      },
      {
        "key": "E",
        "text": "Create an SSL certification in Azure Key Vault for the application identity."
      },
      {
        "key": "F",
        "text": "Create a system-assigned managed identity for the application."
      },
      {
        "key": "G",
        "text": "Create the Azure Functions app with an App Service plan type."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Create an access policy in Azure Key Vault for the application identity."
      },
      {
        "key": "B",
        "text": "Create the Azure Functions app with a Consumption plan type."
      },
      {
        "key": "C",
        "text": "Create a user-assigned managed identity for the application."
      },
      {
        "key": "D",
        "text": "Create the Azure Functions app with a Premium plan type."
      },
      {
        "key": "E",
        "text": "Create an SSL certification in Azure Key Vault for the application identity."
      },
      {
        "key": "F",
        "text": "Create a system-assigned managed identity for the application."
      },
      {
        "key": "G",
        "text": "Create the Azure Functions app with an App Service plan type."
      }
    ],
    "correctAnswers": [
      "1=D",
      "2=F",
      "3=A"
    ],
    "explanation": "Azure Functions Premium hỗ trợ mở rộng quy mô theo sự kiện, tích hợp VNet và các phiên bản được làm ấm trước để tránh khởi động nguội. system-assigned managed identity được tạo và gắn liền với vòng đời của Ứng dụng chức năng, vì vậy việc xóa ứng dụng sẽ xóa danh tính đó. Việc cấp quyền truy cập danh tính thông qua chính sách truy cập Key Vault cho phép ứng dụng xác thực với Key Vault mà không cần nhúng thông tin xác thực hoặc thay đổi mã Java.\n\n**Tài liệu tham khảo:**\n[Azure Functions hosting options](https://learn.microsoft.com/en-us/azure/azure-functions/functions-scale) · [Azure Functions managed identities](https://learn.microsoft.com/en-us/azure/azure-functions/functions-identity-based-connections-tutorial)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 63",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/63-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-64",
    "questionNumber": 64,
    "text": "A Python API running in ACA must send distributed traces to Azure Monitor. The API creates spans, but no traces appear in Azure Monitor. Configure the OpenTelemetry SDK pipeline so that traces are exported to Azure Monitor.  \n  \nEach action may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "register-global-tracer-provider",
        "text": "Register a global tracer provider.",
        "correctAnswer": "C"
      },
      {
        "id": "export-traces-azure-monitor",
        "text": "Export traces to Azure Monitor.",
        "correctAnswer": "E"
      },
      {
        "id": "connect-exporter-provider",
        "text": "Connect the exporter to the provider.",
        "correctAnswer": "D"
      },
      {
        "id": "generate-spans-app-code",
        "text": "Generate spans in the application code.",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Enable log sampling."
      },
      {
        "key": "B",
        "text": "Call tracer.start_as_current_span()."
      },
      {
        "key": "C",
        "text": "Initialize the application’s TracerProvider for tracing."
      },
      {
        "key": "D",
        "text": "Configure a span processor to send spans to the exporter."
      },
      {
        "key": "E",
        "text": "Create the Azure Monitor component that sends trace data."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Enable log sampling."
      },
      {
        "key": "B",
        "text": "Call tracer.start_as_current_span()."
      },
      {
        "key": "C",
        "text": "Initialize the application’s TracerProvider for tracing."
      },
      {
        "key": "D",
        "text": "Configure a span processor to send spans to the exporter."
      },
      {
        "key": "E",
        "text": "Create the Azure Monitor component that sends trace data."
      }
    ],
    "correctAnswers": [
      "register-global-tracer-provider=C",
      "export-traces-azure-monitor=E",
      "connect-exporter-provider=D",
      "generate-spans-app-code=B"
    ],
    "explanation": "Thiết lập theo dõi Python Azure Monitor OpenTelemetry tạo và đăng ký TracerProvider, tạo AzureMonitorTraceExporter, gói nó trong bộ xử lý span được thêm vào nhà cung cấp và tạo các trải rộng ứng dụng thông qua tracer.start_as_current_span(). Lấy mẫu nhật ký không kết nối hoặc xuất các khoảng theo dõi.\n\n**Tài liệu tham khảo:**\n[Microsoft OpenTelemetry exporter for Azure Monitor](https://learn.microsoft.com/en-us/python/api/overview/azure/monitor-opentelemetry-exporter-readme?view=azure-python-preview)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 64",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/64-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-65",
    "questionNumber": 65,
    "text": "A Python web API uses OpenTelemetry for tracing. The `call_downstream_service` function sends an outbound HTTP request using the `requests` library. The following code is the application's only OpenTelemetry configuration:  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1785139245446-f7l968q9.png)  \n  \nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "The code creates a span for each request.",
        "correctAnswer": "Yes"
      },
      {
        "id": "2",
        "text": "The code automatically propagates trace context to downstream HTTP services.",
        "correctAnswer": "No"
      },
      {
        "id": "3",
        "text": "The solution requires additional instrumentation for end-to-end trace correlation.",
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
    "explanation": "`tracer.start_as_current_span(\"process_request\")` tạo và kích hoạt một khoảng thời gian trong quá trình cho mỗi lần thực thi `process_request()`. Chỉ riêng API OpenTelemetry không cung cấp thư viện `requests` hoặc đưa các tiêu đề truyền vào yêu cầu HTTP gửi đi. Cần phải cài đặt `requests` (hoặc chèn thủ công ngữ cảnh của bộ truyền đã định cấu hình) cho các dịch vụ hạ nguồn để tương quan yêu cầu với cùng một dấu vết được phân phối.\n\n**Tài liệu tham khảo:**\n[OpenTelemetry Python Requests Instrumentation](https://opentelemetry-python-contrib.readthedocs.io/en/latest/instrumentation/requests/requests.html) · [OpenTelemetry Python Context Propagation](https://opentelemetry-python.readthedocs.io/en/latest/api/propagate.html)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1785139245446-f7l968q9.png",
    "sourceTitle": "Examcademy AI-200 Question 65",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/65-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-66",
    "questionNumber": 66,
    "text": "You are reviewing the Python tracing configuration for an application that must send distributed traces to Azure Monitor.  \n  \nThe following code configures OpenTelemetry tracing:  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1785139245387-hyyq3lgh.png)  \n  \nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "The code configures the tracer provider before any spans are created.",
        "correctAnswer": "Yes"
      },
      {
        "id": "2",
        "text": "The configuration exports traces synchronously.",
        "correctAnswer": "No"
      },
      {
        "id": "3",
        "text": "The configuration enables export to Azure Monitor.",
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
    "explanation": "Nhà cung cấp công cụ theo dõi toàn cầu được định cấu hình trước khi lấy được công cụ theo dõi và trước khi bất kỳ khoảng thời gian nào được tạo. `BatchSpanProcessor` thực hiện xuất nền theo đợt thay vì xuất đồng bộ. Đăng ký `AzureMonitorTraceExporter` với bộ xử lý đó sẽ gửi dữ liệu theo dõi OpenTelemetry tới Azure Monitor.\n\n**Tài liệu tham khảo:**\n[Microsoft OpenTelemetry exporter for Azure Monitor](https://learn.microsoft.com/en-us/python/api/overview/azure/monitor-opentelemetry-exporter-readme?view=azure-python-preview)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1785139245387-hyyq3lgh.png",
    "sourceTitle": "Examcademy AI-200 Question 66",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/66-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-67",
    "questionNumber": 67,
    "text": "You have an existing AKS cluster and a container image in Azure Container Registry.  \n  \nYou must deploy a new version without interrupting traffic.  \n  \nYou need to use a manifest file to perform a rolling update.  \n  \nWhich three actions should you take, in sequence?",
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
        "correctAnswer": "A"
      },
      {
        "id": "slot3",
        "text": "Slot 3:",
        "correctAnswer": "C"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Apply the updated manifest."
      },
      {
        "key": "B",
        "text": "Update the image tag in the deployment manifest."
      },
      {
        "key": "C",
        "text": "Verify rollout status."
      },
      {
        "key": "D",
        "text": "Delete the existing deployment and recreate it."
      },
      {
        "key": "E",
        "text": "Scale deployment to zero before updating."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Apply the updated manifest."
      },
      {
        "key": "B",
        "text": "Update the image tag in the deployment manifest."
      },
      {
        "key": "C",
        "text": "Verify rollout status."
      },
      {
        "key": "D",
        "text": "Delete the existing deployment and recreate it."
      },
      {
        "key": "E",
        "text": "Scale deployment to zero before updating."
      }
    ],
    "correctAnswers": [
      "slot1=B",
      "slot2=A",
      "slot3=C"
    ],
    "explanation": "Việc cập nhật mẫu nhóm của Triển khai bằng thẻ hình ảnh mới và áp dụng tệp kê khai đã sửa đổi sẽ kích hoạt quy trình cập nhật luân phiên Triển khai. Kubernetes thay thế dần các Pod cũ trong khi vẫn giữ nguyên ứng dụng theo chiến lược Triển khai. Chỉ xác minh việc triển khai sau khi áp dụng thay đổi. Việc mở rộng quy mô về 0 hoặc xóa Triển khai sẽ làm gián đoạn lưu lượng truy cập.\n\n**Tài liệu tham khảo:**\n[Kubernetes Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) · [Update an application in Azure Kubernetes Service (AKS)](https://learn.microsoft.com/en-us/azure/aks/tutorial-kubernetes-app-update)",
    "category": "Develop Containerized Solutions On Azure",
    "tags": [
      "AI-200",
      "Develop Containerized Solutions On Azure"
    ],
    "sourceTitle": "Examcademy AI-200 Question 67",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/67-develop-containerized-solutions-on-azure",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-68",
    "questionNumber": 68,
    "text": "An HTTP-triggered Azure Function needs to read a JSON configuration file that is stored in Azure Blob Storage.  \n  \nYou need to obtain the contents of the configuration file.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Output binding"
      },
      {
        "key": "B",
        "text": "Input binding"
      },
      {
        "key": "C",
        "text": "Timer trigger"
      },
      {
        "key": "D",
        "text": "HTTP trigger"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Liên kết đầu vào Azure Blob Storage đọc nội dung của một blob hiện có và cung cấp những nội dung đó cho Hàm Azure. Trình kích hoạt HTTP gọi hàm, trong khi liên kết đầu ra ghi dữ liệu vào đích. Microsoft Learn phân loại việc đọc dữ liệu Blob Storage trong một hàm dưới dạng hành động liên kết đầu vào.\n\n**Tài liệu tham khảo:**\n[Azure Blob storage trigger and bindings for Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-blob)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 68",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/68-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-69",
    "questionNumber": 69,
    "text": "An Azure Storage Blob upload must initiate backend processing.  \n  \nThe solution must:  \n  \n- Avoid polling.  \n- Minimize latency.  \n- Trigger automatically when the upload occurs.  \n  \nYou need to make sure processing begins as soon as a file is uploaded.  \n  \nWhich trigger should you implement?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Timer"
      },
      {
        "key": "B",
        "text": "Event Grid"
      },
      {
        "key": "C",
        "text": "Queue storage"
      },
      {
        "key": "D",
        "text": "HTTP"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Azure Event Grid xuất bản các sự kiện Lưu trữ Blob khi các đốm màu được tạo và phân phối chúng đến những người xử lý đã đăng ký với độ trễ thấp. Cách tiếp cận theo hướng sự kiện này tránh việc thăm dò được sử dụng bởi trình kích hoạt blob quét vùng chứa tiêu chuẩn.\n\n**Tài liệu tham khảo:**\n[Azure Blob storage trigger for Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-blob-trigger)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 69",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/69-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-70",
    "questionNumber": 70,
    "text": "A recommendation system stores 3 million embeddings in Azure Database for PostgreSQL.  \n  \nDuring peak hours, P95 similarity-query latency rises and the cache hit ratio drops significantly.  \n  \nYou suspect the vector-index working set no longer fits in memory, causing additional disk reads.  \n  \nYou must scale server resources and validate the result.  \n  \nWhich four actions should you take, in order?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "slot1",
        "text": "Slot 1:",
        "correctAnswer": "E"
      },
      {
        "id": "slot2",
        "text": "Slot 2:",
        "correctAnswer": "A"
      },
      {
        "id": "slot3",
        "text": "Slot 3:",
        "correctAnswer": "B"
      },
      {
        "id": "slot4",
        "text": "Slot 4:",
        "correctAnswer": "F"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Scale to a tier with more memory per vCore."
      },
      {
        "key": "B",
        "text": "Review memory pressure and cache hit ratio during peak hours and compare them to the baseline."
      },
      {
        "key": "C",
        "text": "Increase embedding dimensionality."
      },
      {
        "key": "D",
        "text": "Disable autovacuum."
      },
      {
        "key": "E",
        "text": "Before peak hours, run a fixed workload to capture baseline P95 latency and capture EXPLAIN ANALYZE for the vector query."
      },
      {
        "key": "F",
        "text": "Re-run the same benchmark and compare P95 and P99 latency."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Scale to a tier with more memory per vCore."
      },
      {
        "key": "B",
        "text": "Review memory pressure and cache hit ratio during peak hours and compare them to the baseline."
      },
      {
        "key": "C",
        "text": "Increase embedding dimensionality."
      },
      {
        "key": "D",
        "text": "Disable autovacuum."
      },
      {
        "key": "E",
        "text": "Before peak hours, run a fixed workload to capture baseline P95 latency and capture EXPLAIN ANALYZE for the vector query."
      },
      {
        "key": "F",
        "text": "Re-run the same benchmark and compare P95 and P99 latency."
      }
    ],
    "correctAnswers": [
      "slot1=E",
      "slot2=A",
      "slot3=B",
      "slot4=F"
    ],
    "explanation": "Tỷ lệ truy cập bộ đệm thấp cùng với độ trễ truy vấn tương tự tăng lên cho thấy nhiều lượt đọc đang được phân phát từ bộ lưu trữ hơn là bộ nhớ. Việc thiết lập một tiêu chuẩn và kế hoạch trước khi thay đổi sẽ cung cấp một điểm so sánh; tăng bộ nhớ trên mỗi vCore sẽ giải quyết tình trạng thiếu hụt bộ làm việc; quan sát áp lực bộ nhớ và hoạt động của bộ nhớ đệm trong thời gian tải cao điểm sẽ xác nhận cơ chế bị nghi ngờ; và việc lặp lại điểm chuẩn tương tự sẽ xác minh kết quả độ trễ P95/P99. Chiều nhúng cao hơn làm tăng yêu cầu về chỉ mục và bộ nhớ, đồng thời cài đặt tự động chân không không khắc phục được tình trạng thiếu bộ nhớ của bộ làm việc chỉ mục vectơ.",
    "category": "Develop AI Solutions By Using Azure Data Management Services",
    "tags": [
      "AI-200",
      "Develop AI Solutions By Using Azure Data Management Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 70",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/70-develop-ai-solutions-by-using-azure-data-management-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-71",
    "questionNumber": 71,
    "text": "A semantic-search application queries Azure Database for PostgreSQL and stores document embeddings and metadata in a table with these columns:  \n  \n- `embedding` (`pgvector`)  \n- `department`  \n- `created_at`  \n  \nThe application must return the five documents most similar to a supplied query embedding, limited to the finance department.  \n  \nImplement semantic retrieval with metadata filtering. Select the query components that meet each requirement. Each component may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "filter_finance",
        "text": "Filter rows to finance.",
        "correctAnswer": "A"
      },
      {
        "id": "rank_similarity",
        "text": "Rank by similarity and return the top five.",
        "correctAnswer": "D"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "WHERE department = 'Finance'"
      },
      {
        "key": "B",
        "text": "WHERE department ILIKE 'fin%'"
      },
      {
        "key": "C",
        "text": "ORDER BY created_at DESC LIMIT 5"
      },
      {
        "key": "D",
        "text": "ORDER BY embedding <=> :query_embedding LIMIT 5"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "WHERE department = 'Finance'"
      },
      {
        "key": "B",
        "text": "WHERE department ILIKE 'fin%'"
      },
      {
        "key": "C",
        "text": "ORDER BY created_at DESC LIMIT 5"
      },
      {
        "key": "D",
        "text": "ORDER BY embedding <=> :query_embedding LIMIT 5"
      }
    ],
    "correctAnswers": [
      "filter_finance=A",
      "rank_similarity=D"
    ],
    "explanation": "Bộ lọc đẳng thức trên `department` hạn chế tập kết quả ở giá trị siêu dữ liệu Tài chính. Trong pgvector, `<=>` tính khoảng cách cosin, do đó, `ORDER BY embedding <=>:query_embedding` xếp các vectơ gần nhất (tương tự nhất) tăng dần trước tiên; `LIMIT 5` trả về năm kết quả. `created_at DESC` xếp hạng theo mức độ gần đây thay vì mức độ tương tự.\n\n**Tài liệu tham khảo:**\n[Vector Search in Azure Database for PostgreSQL Flexible Server](https://learn.microsoft.com/en-us/azure/postgresql/extensions/how-to-use-pgvector)",
    "category": "Develop AI Solutions By Using Azure Data Management Services",
    "tags": [
      "AI-200",
      "Develop AI Solutions By Using Azure Data Management Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 71",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/71-develop-ai-solutions-by-using-azure-data-management-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-72",
    "questionNumber": 72,
    "text": "You are implementing the expiry requirement for AI-generated summaries in the Redis cache.  \n  \nYou must remove the AI summaries five minutes after they are created, no matter how frequently they are accessed.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Set the maxmemory-policy to allkeys-lru."
      },
      {
        "key": "B",
        "text": "Configure absolute expiration on each cache key."
      },
      {
        "key": "C",
        "text": "Use the PERSIST command after each successful read operation."
      },
      {
        "key": "D",
        "text": "Implement sliding expiration on each cache key."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Khóa Redis có thời hạn hết hạn khi tạo sẽ có thời gian tồn tại cố định và bị xóa khi TTL đó trôi qua trừ khi thời hạn sử dụng của nó bị thay đổi rõ ràng. Điều này đáp ứng thời lượng năm phút không phụ thuộc vào hoạt động đọc; thay vào đó, việc trượt hết hạn sẽ kéo dài thời gian tồn tại sau khi truy cập.\n\n**Tài liệu tham khảo:**\n[Redis EXPIRE command documentation](https://redis.io/docs/latest/commands/expire/) · [Redis SET command documentation](https://redis.io/docs/latest/commands/set/)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 72",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/72-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-73",
    "questionNumber": 73,
    "text": "You are developing a solution that uses several Azure Service Bus queues. You create an Azure Event Grid subscription for the Azure Service Bus namespace, using Azure Functions as subscribers to process messages.  \n  \nYou need the queues to emit events to Azure Event Grid while following least privilege and minimizing costs.  \n  \nWhich Azure Service Bus values should you use?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "tier",
        "text": "Tier",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "iam_level",
        "text": "Access control (IAM) level",
        "correctAnswer": "D",
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
        "text": "Basic"
      },
      {
        "key": "B",
        "text": "Standard"
      },
      {
        "key": "C",
        "text": "Premium"
      },
      {
        "key": "D",
        "text": "Contributor"
      },
      {
        "key": "E",
        "text": "Data Receiver"
      },
      {
        "key": "F",
        "text": "Data Sender"
      },
      {
        "key": "G",
        "text": "Data Owner"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Basic"
      },
      {
        "key": "B",
        "text": "Standard"
      },
      {
        "key": "C",
        "text": "Premium"
      },
      {
        "key": "D",
        "text": "Contributor"
      },
      {
        "key": "E",
        "text": "Data Receiver"
      },
      {
        "key": "F",
        "text": "Data Sender"
      },
      {
        "key": "G",
        "text": "Data Owner"
      }
    ],
    "correctAnswers": [
      "tier=C",
      "iam_level=D"
    ],
    "explanation": "Tích hợp Azure Service Bus với Lưới sự kiện chỉ khả dụng cho các không gian tên Cao cấp. Microsoft chỉ định quyền truy cập của Người đóng góp vào không gian tên Service Bus làm điều kiện tiên quyết để định cấu hình tích hợp này; các vai trò Người nhận dữ liệu, Người gửi dữ liệu và Chủ sở hữu dữ liệu là các vai trò trên mặt phẳng dữ liệu và không cấp quyền quản lý vùng tên cần thiết.\n\n**Tài liệu tham khảo:**\n[Azure Service Bus as an Event Grid source](https://learn.microsoft.com/en-us/azure/event-grid/event-schema-service-bus) · [Azure Service Bus to Event Grid integration overview](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-to-event-grid-integration-concept)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 73",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/73-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-74",
    "questionNumber": 74,
    "text": "You deploy an API to Azure Container Apps.  \n  \nThe solution must provide the following functionality:  \n  \n- Support concurrent activation of multiple application versions.  \n- Allocate a specific percentage of incoming requests to a secondary version.  \n  \nYou need to configure revision behavior.  \n  \nWhich configurations should you use? Move the appropriate configurations to the correct requirements. Each configuration may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "slot1",
        "text": "Test a new revision without affecting production traffic.",
        "correctAnswer": "D"
      },
      {
        "id": "slot2",
        "text": "Route 20 percent of traffic to a new revision.",
        "correctAnswer": "A"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Traffic splitting"
      },
      {
        "key": "B",
        "text": "Single revision mode"
      },
      {
        "key": "C",
        "text": "Traffic isolation"
      },
      {
        "key": "D",
        "text": "Multiple revision mode"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Traffic splitting"
      },
      {
        "key": "B",
        "text": "Single revision mode"
      },
      {
        "key": "C",
        "text": "Traffic isolation"
      },
      {
        "key": "D",
        "text": "Multiple revision mode"
      }
    ],
    "correctAnswers": [
      "slot1=D",
      "slot2=A"
    ],
    "explanation": "Chế độ nhiều bản sửa đổi cho phép nhiều bản sửa đổi hoạt động, cho phép bản sửa đổi mới được hoạt động và thử nghiệm trong khi bản sửa đổi sản xuất vẫn hoạt động. Việc phân chia lưu lượng chỉ định trọng số phần trăm cho các bản sửa đổi đang hoạt động, do đó, nó có thể hướng 20% ​​yêu cầu đến bản sửa đổi mới.\n\n**Tài liệu tham khảo:**\n[Update and deploy changes in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/revisions) · [Traffic splitting in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/traffic-splitting)",
    "category": "Develop Containerized Solutions On Azure",
    "tags": [
      "AI-200",
      "Develop Containerized Solutions On Azure"
    ],
    "sourceTitle": "Examcademy AI-200 Question 74",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/74-develop-containerized-solutions-on-azure",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-75",
    "questionNumber": 75,
    "text": "You are designing Azure Functions for three distinct backend workloads.  \n  \nEach workload needs one of these dispatch models:  \n  \n- Return an immediate response to a client.  \n- Process background work from a queue.  \n- Run code on a fixed schedule.  \n  \nSelect the trigger for each requirement. Each trigger may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "immediate_response",
        "text": "Return an immediate response to a client.",
        "correctAnswer": "A"
      },
      {
        "id": "queue_background",
        "text": "Process background work from a queue.",
        "correctAnswer": "E"
      },
      {
        "id": "fixed_schedule",
        "text": "Run code on a fixed schedule.",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "HTTP trigger"
      },
      {
        "key": "B",
        "text": "Timer trigger"
      },
      {
        "key": "C",
        "text": "Event Grid trigger"
      },
      {
        "key": "D",
        "text": "Blob Storage trigger"
      },
      {
        "key": "E",
        "text": "Queue Storage trigger"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "HTTP trigger"
      },
      {
        "key": "B",
        "text": "Timer trigger"
      },
      {
        "key": "C",
        "text": "Event Grid trigger"
      },
      {
        "key": "D",
        "text": "Blob Storage trigger"
      },
      {
        "key": "E",
        "text": "Queue Storage trigger"
      }
    ],
    "correctAnswers": [
      "immediate_response=A",
      "queue_background=E",
      "fixed_schedule=B"
    ],
    "explanation": "Trình kích hoạt HTTP gọi một hàm cho yêu cầu HTTP và hỗ trợ trả về phản hồi HTTP. Trình kích hoạt Lưu trữ hàng đợi sẽ gọi một chức năng khi một tin nhắn được thêm vào hàng đợi Lưu trữ Azure, giúp nó phù hợp với việc xử lý nền trong hàng đợi. Trình kích hoạt Bộ hẹn giờ gọi một hàm theo lịch trình đã xác định.\n\n**Tài liệu tham khảo:**\n[Azure Functions HTTP trigger](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger) · [Azure Functions Azure Queue Storage trigger](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-queue-trigger)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 75",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/75-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-76",
    "questionNumber": 76,
    "text": "You are preparing a container image for deployment to production.  \n  \nThe container image build and deployment process must ensure:  \n  \n- The image is uniquely versioned.  \n- Secure authentication is used when pushing the image to Azure Container Registry (ACR).  \n- The image is stored in ACR for deployment.  \n  \nYou need to ensure that the container image build-and-push process meets these requirements.  \n  \nWhich action should you perform for each requirement? Each action may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "versioned",
        "text": "Ensure that the image is versioned.",
        "correctAnswer": "C"
      },
      {
        "id": "secure_push",
        "text": "Allow secure push to ACR.",
        "correctAnswer": "D"
      },
      {
        "id": "store_for_deployment",
        "text": "Store the image in the registry for deployment.",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Build the image locally."
      },
      {
        "key": "B",
        "text": "Push the image to ACR."
      },
      {
        "key": "C",
        "text": "Use a unique tag for the image."
      },
      {
        "key": "D",
        "text": "Authenticate to ACR by using Microsoft Entra ID."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Build the image locally."
      },
      {
        "key": "B",
        "text": "Push the image to ACR."
      },
      {
        "key": "C",
        "text": "Use a unique tag for the image."
      },
      {
        "key": "D",
        "text": "Authenticate to ACR by using Microsoft Entra ID."
      }
    ],
    "correctAnswers": [
      "versioned=C",
      "secure_push=D",
      "store_for_deployment=B"
    ],
    "explanation": "Một thẻ duy nhất, không thể thay đổi sẽ phân biệt một phiên bản hình ảnh cụ thể. Microsoft Entra ID có thể xác thực danh tính được ủy quyền với Azure Container Register để thực hiện các hoạt động đăng ký an toàn. Đẩy hình ảnh được gắn thẻ lên máy chủ đăng nhập ACR sẽ tải lên và lưu trữ hình ảnh trong sổ đăng ký đó để triển khai sau này.\n\n**Tài liệu tham khảo:**\n[Authenticate with an Azure container registry](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-authentication) · [Push and pull images to an Azure container registry](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-get-started-docker-cli)",
    "category": "Develop Containerized Solutions On Azure",
    "tags": [
      "AI-200",
      "Develop Containerized Solutions On Azure"
    ],
    "sourceTitle": "Examcademy AI-200 Question 76",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/76-develop-containerized-solutions-on-azure",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-77",
    "questionNumber": 77,
    "text": "You have a web service used to pay for food deliveries. It uses Azure Cosmos DB as its data store.  \n  \nYou plan to add a feature that lets users set a tip amount. The feature requires a `tip` property on the Azure Cosmos DB document that is present and has a numeric value.  \n  \nMany existing websites and mobile apps that use the web service will not be updated to set the `tip` property for some time.  \n  \nHow should you complete the trigger?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "context",
        "text": "Option 1:",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      },
      {
        "id": "condition",
        "text": "Option 2:",
        "correctAnswer": "E",
        "choiceKeys": [
          "E",
          "F",
          "G",
          "H"
        ]
      },
      {
        "id": "setbody",
        "text": "Option 3:",
        "correctAnswer": "I",
        "choiceKeys": [
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
        "text": "__.value();"
      },
      {
        "key": "B",
        "text": "__.readDocument('item');"
      },
      {
        "key": "C",
        "text": "getContext().getRequest();"
      },
      {
        "key": "D",
        "text": "getContext().getResponse();"
      },
      {
        "key": "E",
        "text": "if (!(\"tip\" in i)) {"
      },
      {
        "key": "F",
        "text": "if (request.getValue(\"tip\") === null) {"
      },
      {
        "key": "G",
        "text": "if (isNaN(i[\"tip\"] || i[\"tip\"] === null) {"
      },
      {
        "key": "H",
        "text": "if (typeof __.pluck(\"tip\") == 'number') {"
      },
      {
        "key": "I",
        "text": "r.setBody(i);"
      },
      {
        "key": "J",
        "text": "r.setValue(i);"
      },
      {
        "key": "K",
        "text": "__.upsertDocument(i);"
      },
      {
        "key": "L",
        "text": "__.replaceDocument(i);"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "__.value();"
      },
      {
        "key": "B",
        "text": "__.readDocument('item');"
      },
      {
        "key": "C",
        "text": "getContext().getRequest();"
      },
      {
        "key": "D",
        "text": "getContext().getResponse();"
      },
      {
        "key": "E",
        "text": "if (!(\"tip\" in i)) {"
      },
      {
        "key": "F",
        "text": "if (request.getValue(\"tip\") === null) {"
      },
      {
        "key": "G",
        "text": "if (isNaN(i[\"tip\"] || i[\"tip\"] === null) {"
      },
      {
        "key": "H",
        "text": "if (typeof __.pluck(\"tip\") == 'number') {"
      },
      {
        "key": "I",
        "text": "r.setBody(i);"
      },
      {
        "key": "J",
        "text": "r.setValue(i);"
      },
      {
        "key": "K",
        "text": "__.upsertDocument(i);"
      },
      {
        "key": "L",
        "text": "__.replaceDocument(i);"
      }
    ],
    "correctAnswers": [
      "context=C",
      "condition=E",
      "setbody=I"
    ],
    "explanation": "Trình kích hoạt trước Cosmos DB truy cập mục đang được tạo hoặc sửa đổi thông qua `getContext().getRequest()`. Khi `tip` vắng mặt, việc gán `0` sẽ cung cấp mặc định số cho các máy khách cũ hơn. Gọi `setBody(i)` theo yêu cầu đó sẽ thay thế nội dung yêu cầu đang chờ xử lý để mục được lưu trữ với thuộc tính mới.\n\n**Tài liệu tham khảo:**\n[Write stored procedures, triggers, and UDFs in Azure Cosmos DB for NoSQL](https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/how-to-write-stored-procedures-triggers-udfs)",
    "category": "Develop AI Solutions By Using Azure Data Management Services",
    "tags": [
      "AI-200",
      "Develop AI Solutions By Using Azure Data Management Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 77",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/77-develop-ai-solutions-by-using-azure-data-management-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-78",
    "questionNumber": 78,
    "text": "You are configuring sampling for a distributed application that sends traces to Azure Monitor.  \n  \nThe solution must:  \n  \n- Preserve upstream sampling decisions across distributed traces.  \n- Capture all spans during local testing.  \n- Sample 10 percent of traces in production.  \n  \nApply the appropriate sampling configuration to each requirement. Each configuration may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "preserve-upstream",
        "text": "Maintain parent sampling decisions.",
        "correctAnswer": "C"
      },
      {
        "id": "testing",
        "text": "Record all spans during testing.",
        "correctAnswer": "A"
      },
      {
        "id": "production",
        "text": "Sample 10 percent of traces in production.",
        "correctAnswer": "E"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "AlwaysOnSampler"
      },
      {
        "key": "B",
        "text": "BatchSpanProcessor"
      },
      {
        "key": "C",
        "text": "ParentBasedSampler"
      },
      {
        "key": "D",
        "text": "AzureMonitorTraceExporter"
      },
      {
        "key": "E",
        "text": "TraceIdRatioBasedSampler(0.1)"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "AlwaysOnSampler"
      },
      {
        "key": "B",
        "text": "BatchSpanProcessor"
      },
      {
        "key": "C",
        "text": "ParentBasedSampler"
      },
      {
        "key": "D",
        "text": "AzureMonitorTraceExporter"
      },
      {
        "key": "E",
        "text": "TraceIdRatioBasedSampler(0.1)"
      }
    ],
    "correctAnswers": [
      "preserve-upstream=C",
      "testing=A",
      "production=E"
    ],
    "explanation": "ParentBasedSampler tôn trọng quyết định lấy mẫu của khoảng gốc, duy trì việc lấy mẫu nhất quán trên một dấu vết phân tán. AlwaysOnSampler lấy mẫu ở mọi nhịp, cung cấp khả năng đo từ xa hoàn chỉnh trong quá trình thử nghiệm. TraceIdRatioBasedSampler được định cấu hình với 0,1 mẫu, chiếm khoảng 10% dấu vết. Bộ xử lý hàng loạt và nhà xuất khẩu Azure Monitor xử lý việc xử lý và xuất chứ không phải lựa chọn lấy mẫu.\n\n**Tài liệu tham khảo:**\n[Sampling | OpenTelemetry .NET](https://opentelemetry.io/docs/languages/dotnet/sampling/)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 78",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/78-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-79",
    "questionNumber": 79,
    "text": "An AI application retrieves configuration values from App Configuration and currently uses static configuration.  \n  \nYou need to implement a solution that supports dynamic configuration updates while minimizing latency for application requests.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Inject configuration values in environment variables."
      },
      {
        "key": "B",
        "text": "Cache configuration values with a refresh interval."
      },
      {
        "key": "C",
        "text": "Retrieve configuration values from App Configuration on each request."
      },
      {
        "key": "D",
        "text": "Store configuration values in Key Vault"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Các giá trị cấu hình lưu vào bộ đệm với khoảng thời gian làm mới cho phép cập nhật Cấu hình ứng dụng động mà không cần truy xuất các giá trị từ xa theo mọi yêu cầu. Việc kiểm tra làm mới chỉ diễn ra sau khoảng thời gian đã định cấu hình và việc làm mới theo yêu cầu có thể chạy không đồng bộ trong khi ứng dụng tiếp tục sử dụng các giá trị được lưu trong bộ nhớ đệm, giảm thiểu độ trễ của yêu cầu.\n\n**Tài liệu tham khảo:**\n[Tutorial: Use dynamic configuration in an ASP.NET Core app](https://learn.microsoft.com/en-us/azure/azure-app-configuration/enable-dynamic-configuration-aspnet-core) · [Azure App Configuration best practices](https://learn.microsoft.com/en-us/azure/azure-app-configuration/howto-best-practices)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 79",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/79-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-80",
    "questionNumber": 80,
    "text": "You are troubleshooting a production Azure OpenAI service with intermittent connectivity problems. All telemetry is sent to a Log Analytics workspace.  \n  \nYou must create a KQL query that analyzes the `AppRequests` table. The query must filter for requests that occurred during the last 30 minutes and that have a failed status.  \n  \nThe final output must show the total number of failures for every unique operation.  \n  \nYou need to select the KQL operators needed to filter the time range and aggregate the failure counts.  \n  \nWhich two operators should you use? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "summarize"
      },
      {
        "key": "B",
        "text": "project"
      },
      {
        "key": "C",
        "text": "distinct"
      },
      {
        "key": "D",
        "text": "where"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Toán tử `where` lọc các hàng theo vị từ, do đó, nó có thể hạn chế các yêu cầu theo cả dấu thời gian và trạng thái không thành công. Toán tử `summarize` thực hiện tổng hợp và hỗ trợ nhóm, cho phép `count()` chứa các yêu cầu không thành công được nhóm theo hoạt động.\n\n**Tài liệu tham khảo:**\n[where operator - Kusto | Microsoft Learn](https://learn.microsoft.com/en-us/kusto/query/where-operator?view=microsoft-fabric) · [summarize operator - Kusto | Microsoft Learn](https://learn.microsoft.com/en-us/kusto/query/summarize-operator?view=azure-monitor)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 80",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/80-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-81",
    "questionNumber": 81,
    "text": "You are building several microservices that will run on Azure Container Apps.  \n  \nYou need to monitor and diagnose the microservices.  \n  \nWhich features should you use?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "logs",
        "text": "View console logs from a container in near real-time.",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C",
          "D"
        ]
      },
      {
        "id": "debug",
        "text": "Debug the microservice from inside the container.",
        "correctAnswer": "B",
        "choiceKeys": [
          "B",
          "C",
          "E",
          "D"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Log streaming"
      },
      {
        "key": "B",
        "text": "Container console"
      },
      {
        "key": "C",
        "text": "Azure Monitor metrics"
      },
      {
        "key": "D",
        "text": "Azure Monitor Log Analytics"
      },
      {
        "key": "E",
        "text": "Azure Container Registry"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Log streaming"
      },
      {
        "key": "B",
        "text": "Container console"
      },
      {
        "key": "C",
        "text": "Azure Monitor metrics"
      },
      {
        "key": "D",
        "text": "Azure Monitor Log Analytics"
      },
      {
        "key": "E",
        "text": "Azure Container Registry"
      }
    ],
    "correctAnswers": [
      "logs=A",
      "debug=B"
    ],
    "explanation": "Truyền phát nhật ký hiển thị bảng điều khiển vùng chứa và nhật ký hệ thống gần như theo thời gian thực. Bảng điều khiển vùng chứa kết nối với bảng điều khiển Linux trong vùng chứa đang chạy, cho phép gỡ lỗi trong vùng chứa.\n\n**Tài liệu tham khảo:**\n[Observability in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/observability) · [Connect to a container console in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/container-console)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 81",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/81-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-82",
    "questionNumber": 82,
    "text": "An application deployed to AKS relies on an internal API that is hosted in the same cluster. All pods are healthy and show a Ready status, but requests between the services time out.  \n  \nYou need to determine whether the problem relates to Kubernetes Service configuration or application code.  \n  \nWhat should you do first?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Restart the failing deployment."
      },
      {
        "key": "B",
        "text": "Inspect Service and Endpoints objects."
      },
      {
        "key": "C",
        "text": "Increase replica count for both services."
      },
      {
        "key": "D",
        "text": "Test DNS resolution from your workstation."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Dịch vụ Kubernetes phải chọn chính xác các nhóm dự định và ánh xạ cổng Dịch vụ của nó tới cổng nghe của nhóm. Việc kiểm tra Dịch vụ và các bản ghi điểm cuối của nó sẽ xác minh rằng các phần phụ trợ đã được chọn và phát hiện các lỗi về bộ chọn, điểm cuối và ánh xạ cổng. Chỉ riêng trạng thái nhóm sẵn sàng không xác minh được định tuyến Dịch vụ; Việc triển khai Kubernetes hiện tại đại diện cho các chương trình phụ trợ đã chọn dưới dạng EndpointSlices.\n\n**Tài liệu tham khảo:**\n[Kubernetes: Debug Services](https://kubernetes.io/docs/tasks/debug/debug-application/debug-service/)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 82",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/82-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-83",
    "questionNumber": 83,
    "text": "You are investigating high latency in an AI search application that handles millions of requests each day. Telemetry is stored in Azure Monitor Logs.  \n  \nCreate a KQL query that correlates information from the AppRequests table and the AppDependencies table. It must meet these requirements:  \n  \n- Include only data from the last 24 hours.  \n- Filter for failed requests only.  \n- Calculate the average duration of dependencies, grouped by operation.  \n  \nThe query must be optimized for performance by minimizing the initial data scan.  \n  \nYou need to create the query.  \n  \nWhich five actions should you perform in sequence?",
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
        "correctAnswer": "C"
      },
      {
        "id": "step3",
        "text": "Slot 3:",
        "correctAnswer": "B"
      },
      {
        "id": "step4",
        "text": "Slot 4:",
        "correctAnswer": "D"
      },
      {
        "id": "step5",
        "text": "Slot 5:",
        "correctAnswer": "A"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Summarize average dependency duration by operation."
      },
      {
        "key": "B",
        "text": "Filter the failed requests."
      },
      {
        "key": "C",
        "text": "Apply a time filter."
      },
      {
        "key": "D",
        "text": "Join the dependencies table."
      },
      {
        "key": "E",
        "text": "Select the requests table."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Summarize average dependency duration by operation."
      },
      {
        "key": "B",
        "text": "Filter the failed requests."
      },
      {
        "key": "C",
        "text": "Apply a time filter."
      },
      {
        "key": "D",
        "text": "Join the dependencies table."
      },
      {
        "key": "E",
        "text": "Select the requests table."
      }
    ],
    "correctAnswers": [
      "step1=E",
      "step2=C",
      "step3=B",
      "step4=D",
      "step5=A"
    ],
    "explanation": "Bắt đầu với AppRequests, áp dụng biến vị ngữ thời gian 24 giờ càng sớm càng tốt và lọc các yêu cầu không thành công trước khi tham gia để quá trình tham gia xử lý ít hàng yêu cầu hơn. Kết hợp các yêu cầu kết quả với AppDependency theo trường tương quan hoạt động, sau đó sử dụng tóm tắt với avg() được nhóm theo trường hoạt động để tính thời lượng phụ thuộc trung bình cho mỗi hoạt động.\n\n**Tài liệu tham khảo:**\n[Optimize log queries in Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/query-optimization) · [summarize operator - Kusto](https://learn.microsoft.com/en-us/kusto/query/summarize-operator?view=azure-monitor)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 83",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/83-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-84",
    "questionNumber": 84,
    "text": "You are reviewing the secret-access patterns used by an AI application that retrieves credentials from Key Vault.  \n  \nEvaluate the security effect of each implementation approach. Each outcome may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "retrieve_without_version",
        "text": "Retrieve secret without specifying version.",
        "correctAnswer": "B"
      },
      {
        "id": "retrieve_with_version",
        "text": "Retrieve secret with version identifier.",
        "correctAnswer": "D"
      },
      {
        "id": "managed_identity",
        "text": "Use managed identity for authentication.",
        "correctAnswer": "A"
      },
      {
        "id": "client_secret_env",
        "text": "Use client secret stored in environment variables.",
        "correctAnswer": "C"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Prevents credential storage"
      },
      {
        "key": "B",
        "text": "Supports automatic rotation"
      },
      {
        "key": "C",
        "text": "Introduces credential exposure"
      },
      {
        "key": "D",
        "text": "Requires manual update after rotation"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Prevents credential storage"
      },
      {
        "key": "B",
        "text": "Supports automatic rotation"
      },
      {
        "key": "C",
        "text": "Introduces credential exposure"
      },
      {
        "key": "D",
        "text": "Requires manual update after rotation"
      }
    ],
    "correctAnswers": [
      "retrieve_without_version=B",
      "retrieve_with_version=D",
      "managed_identity=A",
      "client_secret_env=C"
    ],
    "explanation": "Yêu cầu Key Vault không có phiên bản sẽ được giải quyết thành phiên bản bí mật hiện tại, do đó, vòng xoay bí mật sẽ tự động được chọn. Yêu cầu dành riêng cho phiên bản vẫn được ghim vào phiên bản đó và phải được thay đổi sau khi xoay. Danh tính được quản lý nhận được mã thông báo mà không cần thông tin xác thực do ứng dụng quản lý. Bí mật của máy khách trong các biến môi trường là thông tin xác thực được lưu trữ và có thể bị lộ thông qua việc truy cập hoặc ghi nhật ký môi trường/cấu hình.\n\n**Tài liệu tham khảo:**\n[Get-AzKeyVaultSecret](https://learn.microsoft.com/en-us/powershell/module/az.keyvault/get-azkeyvaultsecret?view=azps-16.1.0)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 84",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/84-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-85",
    "questionNumber": 85,
    "text": "Solution: The query produces one row for every distinct `resultCode` value, showing the number of requests in each group.  \n  \nDoes this solution achieve the goal?",
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
    "explanation": "Toán tử Kusto `summarize` nhóm các hàng đầu vào theo `resultCode` và áp dụng `count()` cho mỗi nhóm, tạo ra một hàng kết quả cho mỗi giá trị mã kết quả riêng biệt. `order by request_count desc` tiếp theo sắp xếp các hàng đó từ số lượng yêu cầu cao nhất đến mức thấp nhất.\n\n**Tài liệu tham khảo:**\n[summarize operator - Kusto | Microsoft Learn](https://learn.microsoft.com/en-us/kusto/query/summarize-operator?view=azure-monitor) · [KQL Quick Reference - Kusto | Microsoft Learn](https://learn.microsoft.com/en-us/kusto/query/kql-quick-reference?view=microsoft-fabric)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 85",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/85-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-86",
    "questionNumber": 86,
    "text": "You need to configure a connection string for the partner-facing service in accordance with the technical requirements.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "GitHub secrets"
      },
      {
        "key": "B",
        "text": "Dockerfile ENV instructions"
      },
      {
        "key": "C",
        "text": "Azure Container Registry Helm chart package"
      },
      {
        "key": "D",
        "text": "App Service environment variables"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Các chuỗi kết nối và cài đặt ứng dụng Azure App Service được hiển thị cho ứng dụng dưới dạng các biến môi trường. Cài đặt Dịch vụ ứng dụng có thể sử dụng tham chiếu Azure Key Vault, cho phép Dịch vụ ứng dụng truy xuất bí mật được lưu trữ tập trung trong thời gian chạy thông qua managed identity mà không nhúng bí mật vào hình ảnh, kiểm soát nguồn hoặc cấu hình ứng dụng.\n\n**Tài liệu tham khảo:**\n[Use Key Vault references as app settings in Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references) · [Securely connect to Azure resources from Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/tutorial-connect-overview)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 86",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/86-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-87",
    "questionNumber": 87,
    "text": "Solution: The query displays each individual request together with its result code.  \n  \nDoes the solution meet the goal?",
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
    "explanation": "Toán tử Kusto `summarize` nhóm các hàng đầu vào theo `resultCode` và tính toán `count()` cho mỗi nhóm, tạo ra một hàng tổng hợp cho mỗi mã kết quả riêng biệt thay vì một hàng cho mỗi yêu cầu riêng lẻ. Sắp xếp `request_count` theo thứ tự giảm dần các số lượng được nhóm từ cao nhất đến thấp nhất.\n\n**Tài liệu tham khảo:**\n[summarize operator - Kusto | Microsoft Learn](https://learn.microsoft.com/en-us/kusto/query/summarize-operator?view=azure-monitor) · [KQL Quick Reference - Kusto | Microsoft Learn](https://learn.microsoft.com/en-us/kusto/query/kql-quick-reference?view=microsoft-fabric)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 87",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/87-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-88",
    "questionNumber": 88,
    "text": "Solution: Save the API key as an App Service application setting by using the Azure portal.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Azure App Service có thể lưu trữ các khóa API một cách an toàn trong cài đặt ứng dụng, mã hóa các cài đặt đó khi lưu trữ và đưa chúng vào mã ứng dụng dưới dạng các biến môi trường khi khởi động ứng dụng. Việc lưu trữ khóa trong cổng Azure giúp khóa này tách biệt khỏi kho lưu trữ Git và lịch sử cam kết của nó trong khi vẫn cung cấp khóa cho vùng chứa đang chạy.\n\n**Tài liệu tham khảo:**\n[Securely Connect to Azure Resources - Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/tutorial-connect-overview)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 88",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/88-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-89",
    "questionNumber": 89,
    "text": "You need to conduct a one-time analysis of logs gathered from AKS, ACA, and Azure Function apps, in accordance with the business requirements.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "KQL query"
      },
      {
        "key": "B",
        "text": "Azure activity log"
      },
      {
        "key": "C",
        "text": "Python function"
      },
      {
        "key": "D",
        "text": "Azure Monitor workbook"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Ngôn ngữ truy vấn Kusto (KQL) được sử dụng để thực hiện phân tích đặc biệt về dữ liệu nhật ký được thu thập trong Log Analytics, bao gồm nhật ký từ AKS, Azure Container Apps và Azure Functions. Truy vấn KQL có thể lọc, tương quan, tổng hợp và điều tra dữ liệu đo từ xa được thu thập để phân tích một lần.",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 89",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/89-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-90",
    "questionNumber": 90,
    "text": "You are using Application Insights in Azure Monitor to gather dependency data.  \n  \nYou must be able to:  \n  \n- Correlate failed requests with dependency calls from the last hour.  \n- Calculate the average dependency duration for each operation.  \n  \nYou need to build the KOL query by using the fewest statements.  \n  \nWhich three operators should you use? Each correct answer represents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "extend"
      },
      {
        "key": "B",
        "text": "summarize"
      },
      {
        "key": "C",
        "text": "join"
      },
      {
        "key": "D",
        "text": "where"
      },
      {
        "key": "E",
        "text": "distinct"
      }
    ],
    "correctAnswers": [
      "B",
      "C",
      "D"
    ],
    "explanation": "`where` lọc phép đo từ xa theo các yêu cầu không thành công và khoảng thời gian bắt buộc là một giờ. `join` tương quan các cuộc gọi phụ thuộc với các bản ghi yêu cầu thông qua mã định danh hoạt động chung. `summarize` thực hiện tổng hợp thời lượng trung bình và nhóm các kết quả theo thao tác. Ví dụ về truy vấn phụ thuộc Application Insights của Microsoft sử dụng `where` và `join` để liên kết các phụ thuộc với yêu cầu.\n\n**Tài liệu tham khảo:**\n[Dependency tracking in Application Insights](https://learn.microsoft.com/en-us/azure/azure-monitor/app/dependencies)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 90",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/90-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-91",
    "questionNumber": 91,
    "text": "You are building a Java application that uses Apache Cassandra to store key-value data. You plan to use a new Azure Cosmos DB resource and the Azure Cosmos DB for Apache Cassandra API in the application. You create a Microsoft Entra ID group named **Azure Cosmos DB Creators** to allow provisioning of Azure Cosmos DB accounts, databases, and containers.  \n  \nThe Microsoft Entra ID group must not be able to access the keys required to access the data.  \n  \nYou need to limit access for the Microsoft Entra ID group.  \n  \nWhich role-based access control should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Cosmos DB Operator"
      },
      {
        "key": "B",
        "text": "Cosmos DB Account Reader"
      },
      {
        "key": "C",
        "text": "Document DB Accounts Contributor"
      },
      {
        "key": "D",
        "text": "Cosmos Backup Operator"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Vai trò Người vận hành Cosmos DB cho phép quản lý tài khoản Azure Cosmos DB đồng thời ngăn chặn quyền truy cập vào khóa tài khoản và chuỗi kết nối, do đó nhóm có thể thực hiện cấp phép mà không cần lấy thông tin xác thực để truy cập dữ liệu.\n\n**Tài liệu tham khảo:**\n[Azure built-in roles - Azure RBAC](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles) · [Connect using role-based access control and Microsoft Entra ID - Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/how-to-connect-role-based-access-control)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 91",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/91-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-92",
    "questionNumber": 92,
    "text": "Solution: The result codes are ordered alphabetically.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Mệnh đề `order by request_count desc` sắp xếp các hàng được nhóm theo số lượng yêu cầu theo thứ tự giảm dần. Nó không sắp xếp các giá trị `resultCode` theo thứ tự bảng chữ cái, do đó việc sắp xếp theo thứ tự bảng chữ cái không đáp ứng yêu cầu liệt kê các mã kết quả từ thường xuyên nhất đến ít thường xuyên nhất.\n\n**Tài liệu tham khảo:**\n[sort operator - Kusto](https://learn.microsoft.com/en-us/kusto/query/sort-operator?view=microsoft-fabric)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 92",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/92-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-93",
    "questionNumber": 93,
    "text": "You are configuring an Azure-hosted AI application that uses Azure App Configuration to manage runtime settings.  \n  \nThe application must provide the following functionality:  \n  \n- Support percentage-based, targeted rollouts.  \n- Maximize token limits per request.  \n- Store a key that is retrieved securely at runtime.  \n- Reference a list of supported deployment regions.  \n  \nYou need to configure the App Configuration features for the application. Each feature may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "slot1",
        "text": "Support percentage-based, targeted rollouts.",
        "correctAnswer": "B"
      },
      {
        "id": "slot2",
        "text": "Maximize token limits per request.",
        "correctAnswer": "A"
      },
      {
        "id": "slot3",
        "text": "Store a key that is retrieved securely at runtime.",
        "correctAnswer": "C"
      },
      {
        "id": "slot4",
        "text": "Reference a list of supported deployment regions.",
        "correctAnswer": "A"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Key-value"
      },
      {
        "key": "B",
        "text": "Feature flag"
      },
      {
        "key": "C",
        "text": "Key Vault reference"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Key-value"
      },
      {
        "key": "B",
        "text": "Feature flag"
      },
      {
        "key": "C",
        "text": "Key Vault reference"
      }
    ],
    "correctAnswers": [
      "slot1=B",
      "slot2=A",
      "slot3=C",
      "slot4=A"
    ],
    "explanation": "Cờ tính năng cung cấp khả năng kích hoạt có điều kiện và triển khai theo mục tiêu hoặc dựa trên tỷ lệ phần trăm. Khóa-giá trị tiêu chuẩn chứa các cài đặt ứng dụng thông thường như giới hạn mã thông báo và danh sách khu vực. Tham chiếu Key Vault lưu trữ con trỏ tới một bí mật trong Azure Key Vault để ứng dụng có thể giải quyết bí mật đó một cách an toàn trong thời gian chạy.\n\n**Tài liệu tham khảo:**\n[Azure App Configuration documentation](https://learn.microsoft.com/en-us/azure/azure-app-configuration/) · [Understand Azure App Configuration key-value store](https://learn.microsoft.com/en-us/azure/azure-app-configuration/concept-key-value)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 93",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/93-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-94",
    "questionNumber": 94,
    "text": "An AI application uses a database, and its database credential rotates every 30 days.  \n  \nThe application currently needs a manual update whenever the credential is rotated.  \n  \nYou need to ensure that the application always uses the newest secret version without manual updates.  \n  \nWhich two actions should you take? Each correct answer is part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Retrieve secrets without specifying a version identifier."
      },
      {
        "key": "B",
        "text": "Retrieve secrets by specifying a version identifier."
      },
      {
        "key": "C",
        "text": "Cache the secret for 30 days."
      },
      {
        "key": "D",
        "text": "Configure a Key Vault rotation policy."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Việc truy xuất bí mật mà không có số nhận dạng phiên bản sẽ chuyển sang phiên bản mới nhất của nó, do đó ứng dụng không được ghim vào giá trị được xoay trước đó. Cấu hình xoay vòng cung cấp khả năng tạo định kỳ các phiên bản mới; cùng nhau, việc xoay vòng và truy xuất không phiên bản cho phép ứng dụng sử dụng giá trị hiện tại mà không cần cập nhật phiên bản thủ công. API chính sách xoay vòng gốc của Azure Key Vault dành riêng cho khóa mật mã; thông tin xác thực cơ sở dữ liệu được lưu trữ dưới dạng bí mật yêu cầu quy trình luân chuyển bí mật thích hợp để cập nhật cả thông tin xác thực cơ sở dữ liệu và bí mật Key Vault.\n\n**Tài liệu tham khảo:**\n[Get Secret - Azure Key Vault REST API](https://learn.microsoft.com/en-us/rest/api/keyvault/secrets/get-secret/get-secret?view=rest-keyvault-secrets-2025-07-01) · [Understanding autorotation in Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/autorotation)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 94",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/94-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-95",
    "questionNumber": 95,
    "text": "You are troubleshooting latency by using the requests table in Azure Monitor.  \n  \nYou need to calculate the average request duration grouped by cloud role name while limiting results to the previous 30 minutes.  \n  \nWhich code elements should you select?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "filter",
        "text": "Option 1:",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "aggregate",
        "text": "Option 2:",
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
        "text": "distinct"
      },
      {
        "key": "B",
        "text": "render"
      },
      {
        "key": "C",
        "text": "where"
      },
      {
        "key": "D",
        "text": "extend"
      },
      {
        "key": "E",
        "text": "project"
      },
      {
        "key": "F",
        "text": "summarize"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "distinct"
      },
      {
        "key": "B",
        "text": "render"
      },
      {
        "key": "C",
        "text": "where"
      },
      {
        "key": "D",
        "text": "extend"
      },
      {
        "key": "E",
        "text": "project"
      },
      {
        "key": "F",
        "text": "summarize"
      }
    ],
    "correctAnswers": [
      "filter=C",
      "aggregate=F"
    ],
    "explanation": "`where` lọc các bản ghi yêu cầu theo phạm vi thời gian đã chỉ định. `summarize` thực hiện tổng hợp `avg(duration)` và tạo ra một nhóm kết quả riêng cho mỗi `cloud_RoleName`.\n\n**Tài liệu tham khảo:**\n[summarize operator - Kusto](https://learn.microsoft.com/en-us/kusto/query/summarize-operator?view=azure-monitor) · [Get started with log queries in Azure Monitor Logs](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/get-started-queries)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 95",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/95-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-96",
    "questionNumber": 96,
    "text": "You are reviewing an Azure Function app that handles incoming order requests for a company.  \n  \nThe function must:  \n  \n- Accept order submissions from an external client application.  \n- Require controlled access for security.  \n- Return a response containing the processed request payload.  \n  \nReview the following code segment:  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1787286010124-8uv39bbd.png)  \n  \nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "The function requires a key for invocation.",
        "correctAnswer": "Yes"
      },
      {
        "id": "2",
        "text": "The function supports HTTP GET requests.",
        "correctAnswer": "No"
      },
      {
        "id": "3",
        "text": "The response returns the request body.",
        "correctAnswer": "Yes"
      },
      {
        "id": "4",
        "text": "The function validates the request body before returning a response.",
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
      "3:Yes",
      "4:No"
    ],
    "explanation": "`AuthorizationLevel.Function` yêu cầu phím chức năng. Trình kích hoạt chỉ cho phép phương thức POST một cách rõ ràng, do đó GET không được hỗ trợ. `ReadToEndAsync()` đọc nội dung yêu cầu và `OkObjectResult(result)` trả về nội dung yêu cầu đó với phản hồi thành công. Logic xác thực No xảy ra trước khi phản hồi được trả về.\n\n**Tài liệu tham khảo:**\n[Azure Functions HTTP triggers and bindings](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1787286010124-8uv39bbd.png",
    "sourceTitle": "Examcademy AI-200 Question 96",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/96-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-97",
    "questionNumber": 97,
    "text": "HOTSPOT  \n  \nYou have an Azure Functions app on the Consumption hosting plan for a company. The app includes the following functions:  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1787286009288-y712ih7j.png)  \n  \nYou plan to enable dynamic concurrency on the app. The company requires that each function’s concurrency level be managed separately.  \n  \nYou need to configure the app for dynamic concurrency.  \n  \nWhich file and function names should you use?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "file_name",
        "text": "File name",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "function_name",
        "text": "Function name",
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
        "text": "function.json"
      },
      {
        "key": "B",
        "text": "host.json"
      },
      {
        "key": "C",
        "text": "local.settings.json"
      },
      {
        "key": "D",
        "text": "f1"
      },
      {
        "key": "E",
        "text": "f2"
      },
      {
        "key": "F",
        "text": "f3"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "function.json"
      },
      {
        "key": "B",
        "text": "host.json"
      },
      {
        "key": "C",
        "text": "local.settings.json"
      },
      {
        "key": "D",
        "text": "f1"
      },
      {
        "key": "E",
        "text": "f2"
      },
      {
        "key": "F",
        "text": "f3"
      }
    ],
    "correctAnswers": [
      "file_name=B",
      "function_name=F"
    ],
    "explanation": "Tính đồng thời động được bật thông qua cấu hình `concurrency` trong Host.json. Trình kích hoạt Azure Queue Storage hỗ trợ đồng thời động và thời gian chạy điều chỉnh đồng thời một cách độc lập cho từng chức năng áp dụng, vì vậy f3 là chức năng áp dụng.\n\n**Tài liệu tham khảo:**\n[Concurrency in Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-concurrency) · [host.json reference for Azure Functions 2.x and later](https://learn.microsoft.com/en-us/azure/azure-functions/functions-host-json)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1787286009288-y712ih7j.png",
    "sourceTitle": "Examcademy AI-200 Question 97",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/97-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-98",
    "questionNumber": 98,
    "text": "HOTSPOT  \n  \nYou are developing an AI application that retrieves database credentials from Key Vault by using the Azure SDK for Python.  \n  \nThe application must authenticate by using managed identity.  \n  \nReview the following code segment that retrieves a secret from Key Vault.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1787286011593-8eo6y920.png)  \n  \nFor each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "The code retrieves the latest version of dbPassword.",
        "correctAnswer": "No"
      },
      {
        "id": "2",
        "text": "The code authenticates to Key Vault without storing client secrets in the application when deployed to an Azure-hosted environment that has a managed identity enabled.",
        "correctAnswer": "Yes"
      },
      {
        "id": "3",
        "text": "If dbPassword is rotated and a new version is created, subsequent calls to this code will retrieve the new version.",
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
    "explanation": "Yêu cầu bí mật Key Vault với một phiên bản cụ thể sẽ truy xuất phiên bản bất biến đó; bỏ qua phiên bản sẽ lấy phiên bản mới nhất. `DefaultAzureCredential` hỗ trợ managed identity trong môi trường được lưu trữ trên Azure, cho phép xác thực mà không cần bí mật ứng dụng khách được lưu trữ. Vì yêu cầu sử dụng rõ ràng phiên bản `\"123\"` nên việc xoay vòng bí mật để tạo phiên bản mới hơn không ảnh hưởng đến các yêu cầu sau này đối với phiên bản đó.\n\n**Tài liệu tham khảo:**\n[Azure Key Vault Secrets client library for Python](https://learn.microsoft.com/en-us/python/api/overview/azure/keyvault-secrets-readme?view=azure-python) · [Azure Identity client library for Python](https://learn.microsoft.com/en-us/python/api/overview/azure/identity-readme?view=azure-python)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1787286011593-8eo6y920.png",
    "sourceTitle": "Examcademy AI-200 Question 98",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/98-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-99",
    "questionNumber": 99,
    "text": "You are deploying an AI service to ACA.  \n  \nThe service must securely retrieve secrets from Key Vault by using managed identity.  \n  \nYou need to configure secure access.  \n  \nWhich three actions should you perform, in sequence?",
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
        "correctAnswer": "C"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Grant the Key Vault Secrets User role to the managed identity."
      },
      {
        "key": "B",
        "text": "Configure an access policy with the recover permission."
      },
      {
        "key": "C",
        "text": "Retrieve the secret by using the SDK."
      },
      {
        "key": "D",
        "text": "Assign a system-assigned managed identity."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Grant the Key Vault Secrets User role to the managed identity."
      },
      {
        "key": "B",
        "text": "Configure an access policy with the recover permission."
      },
      {
        "key": "C",
        "text": "Retrieve the secret by using the SDK."
      },
      {
        "key": "D",
        "text": "Assign a system-assigned managed identity."
      }
    ],
    "correctAnswers": [
      "step1=D",
      "step2=A",
      "step3=C"
    ],
    "explanation": "Kích hoạt system-assigned managed identity trước khi gán quyền cho nó. Vai trò Key Vault Secrets của người dùng Azure RBAC cho phép managed identity đọc nội dung bí mật, cho phép ứng dụng truy xuất bí mật bằng thông tin xác thực SDK dựa trên danh tính đó. Quyền khôi phục chỉ liên quan đến việc khôi phục các đối tượng Key Vault đã xóa.\n\n**Tài liệu tham khảo:**\n[Manage secrets in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/manage-secrets)",
    "category": "Develop Containerized Solutions On Azure",
    "tags": [
      "AI-200",
      "Develop Containerized Solutions On Azure"
    ],
    "sourceTitle": "Examcademy AI-200 Question 99",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/99-develop-containerized-solutions-on-azure",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-100",
    "questionNumber": 100,
    "text": "You are designing an Azure Function app that handles large image uploads submitted by users through an HTTP endpoint.  \n  \nThe solution must:  \n  \n- Prevent client timeouts by separating image processing from the initial upload request.  \n- Support automatic retry behavior for unsuccessful processing attempts.  \n- Scale background processing independently from the rate of incoming HTTP uploads.  \n  \nYou need to design a scalable, reliable asynchronous processing solution.  \n  \nWhich two actions should you implement? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Implement a queue-triggered function for image processing."
      },
      {
        "key": "B",
        "text": "Configure retry policies on a storage queue."
      },
      {
        "key": "C",
        "text": "Process the image inside the HTTP-triggered function."
      },
      {
        "key": "D",
        "text": "Persist upload metadata to Azure Storage."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Chức năng Azure được kích hoạt hàng đợi sẽ xử lý các thông báo sau khi yêu cầu HTTP hoàn thành, tách công việc hình ảnh chạy dài khỏi độ trễ tải lên. Các hàm kích hoạt hàng đợi lưu trữ mở rộng quy mô theo các sự kiện hàng đợi và cung cấp khả năng xử lý thử lại tích hợp cho các tin nhắn không thành công thông qua cài đặt tiện ích mở rộng hàng đợi như thời gian chờ hiển thị và số lượng hàng đợi tối đa.\n\n**Tài liệu tham khảo:**\n[Azure Queue storage trigger for Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-queue-trigger) · [Azure Functions Scale and Hosting](https://learn.microsoft.com/en-us/azure/azure-functions/functions-scale)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 100",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/100-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-101",
    "questionNumber": 101,
    "text": "You build an AI application that stores telemetry documents in Azure Cosmos DB for NoSQL.  \n  \nEach document has 30 properties. Queries filter only by `deviceId` and `timestamp`.  \n  \nWrite operations consume more RUs than anticipated.  \n  \nYou need to lower RU consumption for write operations while preserving query performance.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Exclude unused properties from indexing."
      },
      {
        "key": "B",
        "text": "Configure selective indexing on queried properties."
      },
      {
        "key": "C",
        "text": "Migrate to a different partition key."
      },
      {
        "key": "D",
        "text": "Enable strong consistency for all requests."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Azure Cosmos DB dành cho NoSQL lập chỉ mục mọi thuộc tính theo mặc định và việc bảo trì chỉ mục góp phần tính phí ghi cho RU. Việc loại trừ các thuộc tính không bao giờ được truy vấn sẽ làm giảm các đường dẫn được lập chỉ mục và do đó ghi mức tiêu thụ RU, trong khi vẫn giữ lại các chỉ mục cho `deviceId` và `timestamp` sẽ duy trì hiệu suất truy vấn. Microsoft khuyến nghị phương pháp lập chỉ mục chọn không tham gia này để loại trừ có chọn lọc các đường dẫn không cần thiết.\n\n**Tài liệu tham khảo:**\n[Indexing policies in Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/index-policy) · [Manage indexing policies in Azure Cosmos DB for NoSQL](https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/how-to-manage-indexing-policy)",
    "category": "Develop AI Solutions By Using Azure Data Management Services",
    "tags": [
      "AI-200",
      "Develop AI Solutions By Using Azure Data Management Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 101",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/101-develop-ai-solutions-by-using-azure-data-management-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-102",
    "questionNumber": 102,
    "text": "You are building a Python application that uses the `azure-cosmos` SDK to read data from Azure Cosmos DB for NoSQL.  \n  \nYou must connect to an existing account and execute a SQL query against an existing container.  \n  \nWhich four actions should you carry out in sequence?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "slot1",
        "text": "Slot 1:",
        "correctAnswer": "E"
      },
      {
        "id": "slot2",
        "text": "Slot 2:",
        "correctAnswer": "C"
      },
      {
        "id": "slot3",
        "text": "Slot 3:",
        "correctAnswer": "D"
      },
      {
        "id": "slot4",
        "text": "Slot 4:",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Initialize DatabaseProxy."
      },
      {
        "key": "B",
        "text": "Run the query."
      },
      {
        "key": "C",
        "text": "Specify the database name."
      },
      {
        "key": "D",
        "text": "Obtain the container reference."
      },
      {
        "key": "E",
        "text": "Initialize CosmosClient."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Initialize DatabaseProxy."
      },
      {
        "key": "B",
        "text": "Run the query."
      },
      {
        "key": "C",
        "text": "Specify the database name."
      },
      {
        "key": "D",
        "text": "Obtain the container reference."
      },
      {
        "key": "E",
        "text": "Initialize CosmosClient."
      }
    ],
    "correctAnswers": [
      "slot1=E",
      "slot2=C",
      "slot3=D",
      "slot4=B"
    ],
    "explanation": "`CosmosClient` là ứng dụng khách SDK cấp tài khoản. Sử dụng nó để truy xuất cơ sở dữ liệu hiện có theo tên, sau đó sử dụng proxy cơ sở dữ liệu kết quả để truy xuất vùng chứa hiện có. SQL được thực thi thông qua phương thức `query_items` của vùng chứa, do đó truy vấn tuân theo việc truy xuất vùng chứa.\n\n**Tài liệu tham khảo:**\n[Quickstart - Azure SDK for Python - Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/quickstart-python) · [Azure Cosmos DB SQL API client library for Python](https://learn.microsoft.com/en-us/python/api/overview/azure/cosmos-readme?view=azure-python)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 102",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/102-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-103",
    "questionNumber": 103,
    "text": "You need to resolve the known issue caused by vector similarity queries.  \n  \nWhich two actions should you take? Each correct answer provides part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Add a composite index on the vector fields and metadata properties of the container."
      },
      {
        "key": "B",
        "text": "Modify the indexing precision of the vector fields."
      },
      {
        "key": "C",
        "text": "Set the account consistency level to Strong."
      },
      {
        "key": "D",
        "text": "Change the vector index type from Oat to quantizedFlat or diskANN."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "Việc giảm độ chính xác của chỉ mục vectơ sẽ làm giảm dung lượng lưu trữ và xử lý cần thiết cho vector search, đánh đổi một số mức thu hồi/độ chính xác để lấy hiệu quả. `quantizedFlat` nén vectơ và cung cấp chi phí RU thấp hơn so với chỉ mục phẳng, trong khi `diskANN` được tối ưu hóa để tìm kiếm lân cận gần nhất gần đúng hiệu quả với mức tiêu thụ RU thấp trên quy mô lớn. Các chỉ mục tổng hợp không tối ưu hóa tìm kiếm theo khoảng cách vectơ và tính nhất quán cao sẽ làm tăng chi phí đọc.\n\n**Tài liệu tham khảo:**\n[Integrated Vector Store - Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search) · [Manage Indexing Policies - Azure Cosmos DB for NoSQL](https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/how-to-manage-indexing-policy)",
    "category": "Develop AI Solutions By Using Azure Data Management Services",
    "tags": [
      "AI-200",
      "Develop AI Solutions By Using Azure Data Management Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 103",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/103-develop-ai-solutions-by-using-azure-data-management-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-104",
    "questionNumber": 104,
    "text": "You are deploying semantic retrieval for a chatbot.  \n  \nEmbeddings are already saved in Redis; however, vector-similarity queries return no matches.  \n  \nYou need to fix the vector similarity search issue.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Configure a metadata-only secondary index."
      },
      {
        "key": "B",
        "text": "Enable geo-replication."
      },
      {
        "key": "C",
        "text": "Create a FLAT vector index on the embedding field."
      },
      {
        "key": "D",
        "text": "Set a 24-hour Time to Live (TTL) on embedding keys."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Các truy vấn tương tự vectơ Redis yêu cầu chỉ mục tìm kiếm với trường nhúng được xác định là trường vectơ. Chỉ mục vectơ `FLAT` cung cấp tìm kiếm lân cận gần nhất chính xác trên trường đó; chỉ lưu trữ các phần nhúng không làm cho chúng có thể tìm kiếm được bằng độ tương tự của vectơ. Các cài đặt chỉ mục siêu dữ liệu, sao chép địa lý và TTL không cung cấp chỉ mục vectơ.\n\n**Tài liệu tham khảo:**\n[Redis vector search concepts](https://redis.io/docs/latest/develop/ai/search-and-query/vectors/)",
    "category": "Develop AI Solutions By Using Azure Data Management Services",
    "tags": [
      "AI-200",
      "Develop AI Solutions By Using Azure Data Management Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 104",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/104-develop-ai-solutions-by-using-azure-data-management-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-105",
    "questionNumber": 105,
    "text": "You need to configure database resources for the Azure Database for PostgreSQL instance.  \n  \nHow should you complete the configuration to satisfy the business and technical requirements?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "latency",
        "text": "Meet the 200ms semantic search latency requirement.",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "residency",
        "text": "Optimize the environment for high-dimensional pgvector index residency.",
        "correctAnswer": "C",
        "choiceKeys": [
          "D",
          "B",
          "C"
        ]
      },
      {
        "id": "ingestion",
        "text": "Support the continuous ingestion of transaction-based embeddings.",
        "correctAnswer": "E",
        "choiceKeys": [
          "E",
          "A",
          "F"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Increase compute vCores."
      },
      {
        "key": "B",
        "text": "Increase max_connections."
      },
      {
        "key": "C",
        "text": "Increase memory allocation."
      },
      {
        "key": "D",
        "text": "Enable read replica."
      },
      {
        "key": "E",
        "text": "Enable storage autoscale."
      },
      {
        "key": "F",
        "text": "Increase backup retention."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Increase compute vCores."
      },
      {
        "key": "B",
        "text": "Increase max_connections."
      },
      {
        "key": "C",
        "text": "Increase memory allocation."
      },
      {
        "key": "D",
        "text": "Enable read replica."
      },
      {
        "key": "E",
        "text": "Enable storage autoscale."
      },
      {
        "key": "F",
        "text": "Increase backup retention."
      }
    ],
    "correctAnswers": [
      "latency=A",
      "residency=C",
      "ingestion=E"
    ],
    "explanation": "Các vCore bổ sung cung cấp thông lượng toán học cần thiết để duy trì các tìm kiếm tương tự vectơ ở dưới mục tiêu độ trễ tải tối đa. Việc tăng bộ nhớ hỗ trợ duy trì các chỉ mục pgvector chiều cao trong RAM, tránh việc đọc đĩa chậm hơn. Tính năng tự động điều chỉnh lưu trữ sẽ tự động tăng dung lượng khi quá trình nhập nhúng liên tục tiêu tốn dung lượng lưu trữ, giúp cơ sở dữ liệu không bị hết dung lượng mà không làm gián đoạn khối lượng công việc.\n\n**Tài liệu tham khảo:**\n[Compute Options - Azure Database for PostgreSQL](https://learn.microsoft.com/en-us/azure/postgresql/compute-storage/concepts-compute) · [Configure storage autogrow in Azure Database for PostgreSQL flexible server](https://learn.microsoft.com/en-us/azure/postgresql/scale/how-to-auto-grow-storage)",
    "category": "Develop AI Solutions By Using Azure Data Management Services",
    "tags": [
      "AI-200",
      "Develop AI Solutions By Using Azure Data Management Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 105",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/105-develop-ai-solutions-by-using-azure-data-management-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-106",
    "questionNumber": 106,
    "text": "You need to deploy a batch retraining workload.  \n  \nHow should you complete the scaling configuration?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "scaler",
        "text": "Trigger scaling based on queue depth.",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "minimum",
        "text": "Deallocate instances when the message queue is empty.",
        "correctAnswer": "D",
        "choiceKeys": [
          "D",
          "E"
        ]
      },
      {
        "id": "maximum",
        "text": "Prevent uncontrolled burst scaling.",
        "correctAnswer": "F",
        "choiceKeys": [
          "F",
          "G"
        ]
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "CPU utilization scaler"
      },
      {
        "key": "B",
        "text": "Azure Service Bus scaler"
      },
      {
        "key": "C",
        "text": "HTTP concurrency scaler"
      },
      {
        "key": "D",
        "text": "Minimum replicas = 0"
      },
      {
        "key": "E",
        "text": "Minimum replicas = 1"
      },
      {
        "key": "F",
        "text": "Maximum replicas = 10"
      },
      {
        "key": "G",
        "text": "Allow the system to determine the maximum replicas"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "CPU utilization scaler"
      },
      {
        "key": "B",
        "text": "Azure Service Bus scaler"
      },
      {
        "key": "C",
        "text": "HTTP concurrency scaler"
      },
      {
        "key": "D",
        "text": "Minimum replicas = 0"
      },
      {
        "key": "E",
        "text": "Minimum replicas = 1"
      },
      {
        "key": "F",
        "text": "Maximum replicas = 10"
      },
      {
        "key": "G",
        "text": "Allow the system to determine the maximum replicas"
      }
    ],
    "correctAnswers": [
      "scaler=B",
      "minimum=D",
      "maximum=F"
    ],
    "explanation": "Bộ chia tỷ lệ Azure Service Bus KEDA chia tỷ lệ khối lượng công việc theo nhu cầu tin nhắn hàng đợi. Số lượng bản sao tối thiểu là 0 cho phép chuyển tỷ lệ thành 0 khi các tin nhắn no đang chờ xử lý, giảm chi phí nhàn rỗi. Cấu hình tối đa là 10 sẽ giới hạn số lượng bản sao mà KEDA có thể tạo, ngăn chặn việc mở rộng quy mô quá mức.\n\n**Tài liệu tham khảo:**\n[Kubernetes Event-Driven Autoscaling (KEDA) in Azure Kubernetes Service (AKS)](https://learn.microsoft.com/en-us/azure/aks/keda-about) · [Scaling in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/scale-app)",
    "category": "Develop Containerized Solutions On Azure",
    "tags": [
      "AI-200",
      "Develop Containerized Solutions On Azure"
    ],
    "sourceTitle": "Examcademy AI-200 Question 106",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/106-develop-containerized-solutions-on-azure",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-107",
    "questionNumber": 107,
    "text": "You are creating an Azure Functions app project in your local development environment by using Azure Functions Core Tools.  \n  \nYou must create the project in either Python or C# without using a template.  \n  \nSpecify the command and parameter required to create the Azure Functions app project.",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "command",
        "text": "Command",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "parameter",
        "text": "Parameter",
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
        "text": "func new"
      },
      {
        "key": "B",
        "text": "func init"
      },
      {
        "key": "C",
        "text": "func azure"
      },
      {
        "key": "D",
        "text": "--language"
      },
      {
        "key": "E",
        "text": "--worker-runtime"
      },
      {
        "key": "F",
        "text": "--target-framework"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "func new"
      },
      {
        "key": "B",
        "text": "func init"
      },
      {
        "key": "C",
        "text": "func azure"
      },
      {
        "key": "D",
        "text": "--language"
      },
      {
        "key": "E",
        "text": "--worker-runtime"
      },
      {
        "key": "F",
        "text": "--target-framework"
      }
    ],
    "correctAnswers": [
      "command=B",
      "parameter=E"
    ],
    "explanation": "`func init` khởi tạo dự án Azure Functions mới. Tùy chọn `--worker-runtime` chọn thời gian chạy ngôn ngữ của nó, bao gồm các tùy chọn Python và C#. Thay vào đó, `func new` tạo một hàm từ mẫu trong dự án hiện có.\n\n**Tài liệu tham khảo:**\n[Azure Functions local runtime and tools reference](https://learn.microsoft.com/en-us/azure/azure-functions/functions-core-tools-reference#func-init)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 107",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/107-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-108",
    "questionNumber": 108,
    "text": "You have a newly provisioned Azure subscription and are designing a custom Event Grid workflow for AI inference events.  \n  \nYou need to implement the Event Grid components that route high-confidence events to a downstream processor.  \n  \nWhich three actions should you perform, in sequence?",
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
        "correctAnswer": "D"
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
        "text": "Create a domain."
      },
      {
        "key": "B",
        "text": "Register the provider."
      },
      {
        "key": "C",
        "text": "Create a partner topic."
      },
      {
        "key": "D",
        "text": "Create a custom topic."
      },
      {
        "key": "E",
        "text": "Create an event subscription."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Create a domain."
      },
      {
        "key": "B",
        "text": "Register the provider."
      },
      {
        "key": "C",
        "text": "Create a partner topic."
      },
      {
        "key": "D",
        "text": "Create a custom topic."
      },
      {
        "key": "E",
        "text": "Create an event subscription."
      }
    ],
    "correctAnswers": [
      "step1=B",
      "step2=D",
      "step3=E"
    ],
    "explanation": "Đăng ký mới có thể yêu cầu đăng ký nhà cung cấp tài nguyên Microsoft.EventGrid trước khi có thể triển khai tài nguyên Lưới sự kiện. Chủ đề tùy chỉnh là tài nguyên Lưới sự kiện để xuất bản các sự kiện do ứng dụng xác định và đăng ký sự kiện trên chủ đề đó cung cấp khả năng định tuyến và lọc cho trình xử lý sự kiện xuôi dòng. Các miền Lưới sự kiện và chủ đề đối tác giải quyết các mô hình xuất bản khác và không cần thiết cho quy trình làm việc theo chủ đề tùy chỉnh này.\n\n**Tài liệu tham khảo:**\n[Quickstart: Route custom events to web endpoint with Azure CLI and Event Grid](https://learn.microsoft.com/en-us/azure/event-grid/custom-event-quickstart) · [Create a custom topic or a domain in Azure Event Grid](https://learn.microsoft.com/en-us/azure/event-grid/create-custom-topic)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 108",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/108-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-109",
    "questionNumber": 109,
    "text": "A new revision of an app is deployed in ACA.  \n  \nYou must progressively shift production traffic to that revision while monitoring its performance. You also need to be able to roll back quickly.  \n  \nWhich two actions should you take? Each correct answer is part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Use single revision mode."
      },
      {
        "key": "B",
        "text": "Restart the revision."
      },
      {
        "key": "C",
        "text": "Enable multiple revision mode."
      },
      {
        "key": "D",
        "text": "Increase replica count."
      },
      {
        "key": "E",
        "text": "Use traffic splitting."
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "Chế độ nhiều bản sửa đổi giữ cho nhiều bản sửa đổi hoạt động, cho phép bản sửa đổi sản xuất trước đó vẫn có sẵn để khôi phục. Phân chia lưu lượng truy cập phân phối trọng số phần trăm có thể định cấu hình trên các bản sửa đổi đang hoạt động, cho phép triển khai dần dần trong khi hiệu suất được theo dõi.\n\n**Tài liệu tham khảo:**\n[Update and deploy changes in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/revisions) · [Traffic splitting in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/traffic-splitting)",
    "category": "Develop Containerized Solutions On Azure",
    "tags": [
      "AI-200",
      "Develop Containerized Solutions On Azure"
    ],
    "sourceTitle": "Examcademy AI-200 Question 109",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/109-develop-containerized-solutions-on-azure",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-110",
    "questionNumber": 110,
    "text": "You are optimizing an AI inference API that uses Redis caching.  \n  \nYou must lower the risk of returning outdated data while keeping cache-management overhead to a minimum.  \n  \nYou need to implement the caching strategy that meets these requirements.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Trigger invalidation when source data changes."
      },
      {
        "key": "B",
        "text": "Set eviction policy to allkeys-lru."
      },
      {
        "key": "C",
        "text": "Increase memory allocation."
      },
      {
        "key": "D",
        "text": "Reset expiration on each read."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Việc vô hiệu hóa bộ đệm được kích hoạt bởi các thay đổi dữ liệu nguồn sẽ xóa hoặc làm mới các giá trị được lưu trong bộ nhớ đệm bị ảnh hưởng ngay khi chúng trở nên lỗi thời. Điều này trực tiếp hạn chế các phản hồi cũ đồng thời tránh tình trạng xáo trộn bộ đệm không cần thiết khi đặt lại hết hạn hoặc trục xuất bừa bãi.",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 110",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/110-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-111",
    "questionNumber": 111,
    "text": "You plan to deploy a web application to AKS.  \n  \nThe solution must:  \n  \n- Scale out the application by adding more pods during periods of peak CPU usage.  \n- Expose the application only internally within the cluster.  \n  \nYou need to configure a Kubernetes resource for each requirement. You may use each resource once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "scale-out-application",
        "text": "Scale out the application.",
        "correctAnswer": "E"
      },
      {
        "id": "internal-only-exposure",
        "text": "Expose the application internally only.",
        "correctAnswer": "C"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Ingress"
      },
      {
        "key": "B",
        "text": "Deployment"
      },
      {
        "key": "C",
        "text": "ClusterIP service"
      },
      {
        "key": "D",
        "text": "VerticalPodAutoscaler"
      },
      {
        "key": "E",
        "text": "HorizontalPodAutoscaler"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Ingress"
      },
      {
        "key": "B",
        "text": "Deployment"
      },
      {
        "key": "C",
        "text": "ClusterIP service"
      },
      {
        "key": "D",
        "text": "VerticalPodAutoscaler"
      },
      {
        "key": "E",
        "text": "HorizontalPodAutoscaler"
      }
    ],
    "correctAnswers": [
      "scale-out-application=E",
      "internal-only-exposure=C"
    ],
    "explanation": "HorizontalPodAutoscaler chia tỷ lệ khối lượng công việc bằng cách thay đổi số lượng bản sao của nó để đáp ứng với các số liệu được quan sát, bao gồm cả việc sử dụng CPU. Dịch vụ ClusterIP chỉ có thể truy cập được trong cụm Kubernetes, khiến nó trở thành cơ chế tiếp xúc chỉ dành cho nội bộ thích hợp.\n\n**Tài liệu tham khảo:**\n[Kubernetes Horizontal Pod Autoscaling](https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/) · [Kubernetes Service types](https://kubernetes.io/docs/concepts/services-networking/service/#type-clusterip)",
    "category": "Develop Containerized Solutions On Azure",
    "tags": [
      "AI-200",
      "Develop Containerized Solutions On Azure"
    ],
    "sourceTitle": "Examcademy AI-200 Question 111",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/111-develop-containerized-solutions-on-azure",
    "lastVerifiedAt": "2026-09-13T09:34:16.122Z"
  },
  {
    "id": "ai200-112",
    "questionNumber": 112,
    "text": "You have container source code in a Git repository.  \n  \nThe container registry must automatically build and store a new container image whenever a developer commits code to the Git repository.  \n  \nYou must minimize reliance on external build infrastructure.  \n  \nYou need to configure Azure Container Registry (ACR) to natively and automatically manage the build process.  \n  \nWhich two ACR components should you use? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Webhook"
      },
      {
        "key": "B",
        "text": "Quick task"
      },
      {
        "key": "C",
        "text": "Artifact Cache rule"
      },
      {
        "key": "D",
        "text": "Source-triggered task"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Tác vụ do nguồn ACR kích hoạt thực hiện quá trình xây dựng hình ảnh vùng chứa tự động khi mã nguồn được cam kết với kho lưu trữ Git được hỗ trợ. Tác vụ ACR sử dụng webhook trong kho lưu trữ để nhận sự kiện cập nhật nguồn kích hoạt tác vụ. Các tác vụ nhanh được bắt đầu theo cách thủ công, trong khi Artifact Cache quy tắc lưu trữ các tạo phẩm ngược dòng và không xây dựng mã nguồn.\n\n**Tài liệu tham khảo:**\n[Automate container builds with Azure Container Registry Tasks](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview)",
    "category": "Develop Containerized Solutions On Azure",
    "tags": [
      "AI-200",
      "Develop Containerized Solutions On Azure"
    ],
    "sourceTitle": "Examcademy AI-200 Question 112",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/112-develop-containerized-solutions-on-azure",
    "lastVerifiedAt": "2026-09-13T09:34:16.123Z"
  },
  {
    "id": "ai200-113",
    "questionNumber": 113,
    "text": "You develop an application that sells AI-generated images from user input. A recent marketing campaign displays unique ads every second day.  \n  \nSales data is stored in Azure Cosmos DB, and each sale date is in a property named `whenFinished`.  \n  \nThe marketing department requires a view showing the number of sales for each unique ad.  \n  \nComplete the query for the view.",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "select_aggregate",
        "text": "Option 1:",
        "correctAnswer": "C",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "select_bin",
        "text": "Option 2:",
        "correctAnswer": "D",
        "choiceKeys": [
          "D",
          "E",
          "F",
          "G"
        ]
      },
      {
        "id": "group_bin",
        "text": "Option 3:",
        "correctAnswer": "D",
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
        "text": "max(c.whenFinished)"
      },
      {
        "key": "B",
        "text": "sum(c.whenFinished)"
      },
      {
        "key": "C",
        "text": "count(c.whenFinished)"
      },
      {
        "key": "D",
        "text": "DateTimeBin(c.whenFinished, 'day', 2)"
      },
      {
        "key": "E",
        "text": "DateTimePart(c.whenFinished, 'day', 2)"
      },
      {
        "key": "F",
        "text": "DateTimeBin(c.whenFinished, 'hour', 12)"
      },
      {
        "key": "G",
        "text": "DateTimePart(c.whenFinished, 'hour', 12)"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "max(c.whenFinished)"
      },
      {
        "key": "B",
        "text": "sum(c.whenFinished)"
      },
      {
        "key": "C",
        "text": "count(c.whenFinished)"
      },
      {
        "key": "D",
        "text": "DateTimeBin(c.whenFinished, 'day', 2)"
      },
      {
        "key": "E",
        "text": "DateTimePart(c.whenFinished, 'day', 2)"
      },
      {
        "key": "F",
        "text": "DateTimeBin(c.whenFinished, 'hour', 12)"
      },
      {
        "key": "G",
        "text": "DateTimePart(c.whenFinished, 'hour', 12)"
      }
    ],
    "correctAnswers": [
      "select_aggregate=C",
      "select_bin=D",
      "group_bin=D"
    ],
    "explanation": "`COUNT` tạo ra tổng doanh số. `DateTimeBin` làm tròn mỗi dấu thời gian bán hàng thành một khoảng thời gian cố định; thùng hai ngày (`'day', 2`) tương ứng với nhịp quảng cáo duy nhất của chiến dịch. Biểu thức nhóm phải khớp với thùng đã chọn để mỗi hàng trả về là tổng số cho một khoảng thời gian quảng cáo hai ngày.\n\n**Tài liệu tham khảo:**\n[DATETIMEBIN - Query Language for Cosmos DB](https://learn.microsoft.com/en-us/cosmos-db/query/datetimebin) · [COUNT - Query Language for Cosmos DB](https://learn.microsoft.com/en-us/cosmos-db/query/count)",
    "category": "Develop AI Solutions By Using Azure Data Management Services",
    "tags": [
      "AI-200",
      "Develop AI Solutions By Using Azure Data Management Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 113",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/113-develop-ai-solutions-by-using-azure-data-management-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.123Z"
  },
  {
    "id": "ai200-114",
    "questionNumber": 114,
    "text": "You are building a back-end pipeline that receives AI inference requests.  \n  \nThe pipeline must perform these actions:  \n  \n- Publish a message so that multiple independent consumers receive it.  \n- Process messages in first-in, first-out (FIFO) order.  \n- Isolate any failed messages.  \n  \nYou need to configure the appropriate Service Bus entities.  \n  \nHow should you configure the Service Bus entities?  \n  \nEach configuration may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "slot1",
        "text": "Publish a message for multiple consumers to receive.",
        "correctAnswer": "A"
      },
      {
        "id": "slot2",
        "text": "Process messages in FIFO order.",
        "correctAnswer": "B"
      },
      {
        "id": "slot3",
        "text": "Isolate any failed messages.",
        "correctAnswer": "E"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "topic"
      },
      {
        "key": "B",
        "text": "queue"
      },
      {
        "key": "C",
        "text": "subscription rule"
      },
      {
        "key": "D",
        "text": "subscription filter"
      },
      {
        "key": "E",
        "text": "dead-letter queue"
      },
      {
        "key": "F",
        "text": "auto-forward destination"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "topic"
      },
      {
        "key": "B",
        "text": "queue"
      },
      {
        "key": "C",
        "text": "subscription rule"
      },
      {
        "key": "D",
        "text": "subscription filter"
      },
      {
        "key": "E",
        "text": "dead-letter queue"
      },
      {
        "key": "F",
        "text": "auto-forward destination"
      }
    ],
    "correctAnswers": [
      "slot1=A",
      "slot2=B",
      "slot3=E"
    ],
    "explanation": "Chủ đề Bus dịch vụ triển khai mẫu xuất bản/đăng ký một-nhiều: mỗi đăng ký có thể nhận được một bản sao của thư đã xuất bản. Hàng đợi là thực thể Service Bus để gửi tin nhắn FIFO; phiên được yêu cầu khi cần đảm bảo xử lý FIFO nghiêm ngặt. Hàng đợi thư chết là hàng đợi phụ chứa các tin nhắn không thể gửi hoặc xử lý thành công, cách ly các lỗi.\n\n**Tài liệu tham khảo:**\n[Azure Service Bus queues, topics, and subscriptions](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions) · [Azure Service Bus message sessions](https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-sessions)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 114",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/114-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.123Z"
  },
  {
    "id": "ai200-115",
    "questionNumber": 115,
    "text": "You are designing a messaging solution that uses Service Bus for AI document processing.  \n  \nYou must ensure that a published message is delivered to multiple independent consumers. Every consumer must receive its own copy of the message.  \n  \nWhich two Service Bus entities should you use? Each correct answer represents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "topic"
      },
      {
        "key": "B",
        "text": "subscription"
      },
      {
        "key": "C",
        "text": "queue"
      },
      {
        "key": "D",
        "text": "dead-letter queue"
      },
      {
        "key": "E",
        "text": "message session"
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Các chủ đề và đăng ký Azure Service Bus triển khai tin nhắn xuất bản/đăng ký một-nhiều. Nhà sản xuất gửi đến một chủ đề và mỗi người đăng ký đăng ký chủ đề đó sẽ nhận được một bản sao riêng để xử lý độc lập. Thay vào đó, hàng đợi sẽ gửi một thông điệp đến một người tiêu dùng.\n\n**Tài liệu tham khảo:**\n[Azure Service Bus queues, topics, and subscriptions](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 115",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/115-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.123Z"
  },
  {
    "id": "ai200-116",
    "questionNumber": 116,
    "text": "You plan to deploy an Azure Container Apps app named App1. App1 will use an access key to connect to a backend API.  \n  \nThe solution must store the key outside the App1 environment and minimize maintenance effort.  \n  \nYou need to configure secure key storage for App1.  \n  \nWhich configurations should you use?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "key_storage",
        "text": "Provide the key storage for App1.",
        "correctAnswer": "B",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "access",
        "text": "Secure App1 access to the key storage.",
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
        "text": "Azure Key Vault key"
      },
      {
        "key": "B",
        "text": "Azure Key Vault secret"
      },
      {
        "key": "C",
        "text": "Azure Container Apps secret"
      },
      {
        "key": "D",
        "text": "Service principal"
      },
      {
        "key": "E",
        "text": "Managed identity"
      },
      {
        "key": "F",
        "text": "Workload identity"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Azure Key Vault key"
      },
      {
        "key": "B",
        "text": "Azure Key Vault secret"
      },
      {
        "key": "C",
        "text": "Azure Container Apps secret"
      },
      {
        "key": "D",
        "text": "Service principal"
      },
      {
        "key": "E",
        "text": "Managed identity"
      },
      {
        "key": "F",
        "text": "Workload identity"
      }
    ],
    "correctAnswers": [
      "key_storage=B",
      "access=E"
    ],
    "explanation": "Khóa truy cập API được lưu trữ dưới dạng bí mật Azure Key Vault. Ứng dụng vùng chứa managed identity xác thực với Key Vault mà không có thông tin xác thực được quản lý riêng; cấp quyền nhận dạng đó để đọc bí mật (ví dụ: vai trò Người dùng bí mật Key Vault).\n\n**Tài liệu tham khảo:**\n[Manage secrets in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/manage-secrets) · [Security overview in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/security)",
    "category": "Secure Monitor Troubleshoot Azure Solutions",
    "tags": [
      "AI-200",
      "Secure Monitor Troubleshoot Azure Solutions"
    ],
    "sourceTitle": "Examcademy AI-200 Question 116",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/116-secure-monitor-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-13T09:34:16.123Z"
  },
  {
    "id": "ai200-117",
    "questionNumber": 117,
    "text": "You plan to create a Docker image that runs an ASP.NET Core application named ContosoApp. You have a setup script named setupScript.ps1 and a set of application files that includes ContosoApp.dll.  \n  \nYou need to create a Dockerfile that meets these requirements:  \n  \n- Call setupScript.ps1 while the container is built.  \n- Run ContosoApp.dll when the container starts.  \n  \nThe Dockerfile must be created in the same folder that stores ContosoApp.dll and setupScript.ps1.  \n  \nWhich five commands should you use to develop the solution, arranged in the correct order?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "line1",
        "text": "Slot 1:",
        "correctAnswer": "C"
      },
      {
        "id": "line2",
        "text": "Slot 2:",
        "correctAnswer": "E"
      },
      {
        "id": "line3",
        "text": "Slot 3:",
        "correctAnswer": "B"
      },
      {
        "id": "line4",
        "text": "Slot 4:",
        "correctAnswer": "D"
      },
      {
        "id": "line5",
        "text": "Slot 5:",
        "correctAnswer": "A"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "CMD [\"dotnet\", \"ContosoApp.dll\"]"
      },
      {
        "key": "B",
        "text": "COPY ./ ."
      },
      {
        "key": "C",
        "text": "FROM microsoft/aspnetcore:latest"
      },
      {
        "key": "D",
        "text": "RUN powershell ./setupScript.ps1"
      },
      {
        "key": "E",
        "text": "WORKDIR /apps/ContosoApp"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "CMD [\"dotnet\", \"ContosoApp.dll\"]"
      },
      {
        "key": "B",
        "text": "COPY ./ ."
      },
      {
        "key": "C",
        "text": "FROM microsoft/aspnetcore:latest"
      },
      {
        "key": "D",
        "text": "RUN powershell ./setupScript.ps1"
      },
      {
        "key": "E",
        "text": "WORKDIR /apps/ContosoApp"
      }
    ],
    "correctAnswers": [
      "line1=C",
      "line2=E",
      "line3=B",
      "line4=D",
      "line5=A"
    ],
    "explanation": "`FROM` chọn hình ảnh cơ sở ASP.NET Core. `WORKDIR` đặt thư mục cho các hướng dẫn tiếp theo; `COPY./.` sao chép nội dung bối cảnh xây dựng Docker vào đó. `RUN` thực thi trong quá trình xây dựng hình ảnh, do đó, nó gọi setupScript.ps1 vào thời điểm cần thiết. `CMD` xác định lệnh mặc định chạy khi vùng chứa khởi động, gọi ứng dụng thông qua `dotnet`.\n\n**Tài liệu tham khảo:**\n[Dockerfile reference](https://docs.docker.com/reference/dockerfile/)",
    "category": "Develop Containerized Solutions On Azure",
    "tags": [
      "AI-200",
      "Develop Containerized Solutions On Azure"
    ],
    "sourceTitle": "Examcademy AI-200 Question 117",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/117-develop-containerized-solutions-on-azure",
    "lastVerifiedAt": "2026-09-13T09:34:16.123Z"
  },
  {
    "id": "ai200-118",
    "questionNumber": 118,
    "text": "An Azure Service Bus queue handles AI enrichment jobs.  \n  \nSome messages repeatedly fail because their payload is malformed.  \n  \nYou need to ensure repeatedly failing messages do **not** block valid messages and that they can be inspected separately.  \n  \nWhich message action should you take?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "complete"
      },
      {
        "key": "B",
        "text": "defer"
      },
      {
        "key": "C",
        "text": "dead-letter"
      },
      {
        "key": "D",
        "text": "abandon"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Hành động **dead-letter** di chuyển một thông báo không thể xử lý đến hàng đợi con chứa các thông báo chết của hàng đợi, tách biệt nó khỏi các thông báo hợp lệ trong khi vẫn lưu giữ nó để kiểm tra và có thể sửa chữa. Azure Service Bus xác định cụ thể các tải trọng không đúng định dạng là các thông báo mà ứng dụng có thể gửi thư chết một cách rõ ràng.\n\n**Tài liệu tham khảo:**\n[Service Bus dead-letter queues — Azure Service Bus](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-dead-letter-queues)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 118",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/118-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.123Z"
  },
  {
    "id": "ai200-119",
    "questionNumber": 119,
    "text": "You are building a Retrieval-Augmented Generation (RAG) system using native vector search in Azure Cosmos DB for NoSQL API.  \n  \nA container named Documents stores technical articles, and every article has an `embedding` property.  \n  \nEnsure the system can efficiently run similarity searches between user queries and stored articles. Configure the database resources to support semantic retrieval.  \n  \nEach configuration may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "distance_calculations",
        "text": "Facilitate mathematical distance calculations between data points.",
        "correctAnswer": "A"
      },
      {
        "id": "document_schema",
        "text": "Define the document schema for high-dimensional data.",
        "correctAnswer": "C"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Configure a vector index."
      },
      {
        "key": "B",
        "text": "Configure a composite index."
      },
      {
        "key": "C",
        "text": "Store data as a numeric array."
      },
      {
        "key": "D",
        "text": "Store data as a Base64 encoded string."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Configure a vector index."
      },
      {
        "key": "B",
        "text": "Configure a composite index."
      },
      {
        "key": "C",
        "text": "Store data as a numeric array."
      },
      {
        "key": "D",
        "text": "Store data as a Base64 encoded string."
      }
    ],
    "correctAnswers": [
      "distance_calculations=A",
      "document_schema=C"
    ],
    "explanation": "Chỉ mục vectơ giúp tìm kiếm độ tương tự vectơ Azure Cosmos DB bằng `VectorDistance` hiệu quả hơn. Các phần nhúng vectơ được lưu trữ dưới dạng mảng JSON chứa các giá trị số. Các chỉ mục tổng hợp hỗ trợ các truy vấn vô hướng đa thuộc tính, trong khi các chuỗi Base64 không phải là biểu diễn vectơ gốc.\n\n**Tài liệu tham khảo:**\n[Vector search in Azure Cosmos DB for NoSQL](https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search) · [Quickstart: Azure Cosmos DB vector search with Go](https://learn.microsoft.com/en-us/azure/cosmos-db/quickstart-vector-store-go)",
    "category": "Develop AI Solutions By Using Azure Data Management Services",
    "tags": [
      "AI-200",
      "Develop AI Solutions By Using Azure Data Management Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 119",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/119-develop-ai-solutions-by-using-azure-data-management-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.123Z"
  },
  {
    "id": "ai200-120",
    "questionNumber": 120,
    "text": "You are developing a hospital solution using Azure Cosmos DB for NoSQL. The database account’s default consistency level is **Strong**, and its Indexing Mode is set to **Consistent**.  \n  \nOverride consistency at the query level to meet the stated consistency guarantees while minimizing latency and availability impact. Each consistency level may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "patient_status",
        "text": "Return the most recent patient status.",
        "correctAnswer": "A"
      },
      {
        "id": "health_monitoring",
        "text": "Return health monitoring data that is no less than one version behind.",
        "correctAnswer": "C"
      },
      {
        "id": "billing_data",
        "text": "After patient is discharged and all charges are assessed, retrieve the correct billing data with the final charges.",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Strong"
      },
      {
        "key": "B",
        "text": "Eventual"
      },
      {
        "key": "C",
        "text": "Bounded Staleness"
      },
      {
        "key": "D",
        "text": "Consistent Prefix"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Strong"
      },
      {
        "key": "B",
        "text": "Eventual"
      },
      {
        "key": "C",
        "text": "Bounded Staleness"
      },
      {
        "key": "D",
        "text": "Consistent Prefix"
      }
    ],
    "correctAnswers": [
      "patient_status=A",
      "health_monitoring=C",
      "billing_data=B"
    ],
    "explanation": "Tính nhất quán mạnh mẽ đảm bảo các lần đọc sẽ trả về phiên bản mục đã cam kết mới nhất. Mức độ ổn định bị giới hạn giới hạn độ trễ sao chép theo số lượng phiên bản hoặc thời gian của mục đã được định cấu hình, do đó, giới hạn một phiên bản sẽ đáp ứng yêu cầu giám sát. Sau khi các khoản phí thanh toán là cuối cùng và no dự kiến ​​sẽ có những thay đổi tiếp theo, tính nhất quán cuối cùng sẽ hội tụ đến bản ghi cuối cùng đó đồng thời tránh được độ trễ và chi phí sẵn có để có tính nhất quán cao hơn.\n\n**Tài liệu tham khảo:**\n[Consistency level choices - Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels) · [Manage consistency in Azure Cosmos DB for NoSQL](https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/how-to-manage-consistency)",
    "category": "Develop AI Solutions By Using Azure Data Management Services",
    "tags": [
      "AI-200",
      "Develop AI Solutions By Using Azure Data Management Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 120",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/120-develop-ai-solutions-by-using-azure-data-management-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.123Z"
  },
  {
    "id": "ai200-121",
    "questionNumber": 121,
    "text": "You need to deploy Azure Function resources and applications in order to satisfy the business and technical requirements.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "GitHub Actions"
      },
      {
        "key": "B",
        "text": "Azure Functions Core Tools"
      },
      {
        "key": "C",
        "text": "Azure CLI"
      },
      {
        "key": "D",
        "text": "Local Git deployment"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "GitHub Actions cung cấp quy trình làm việc CI/CD được kiểm soát theo phiên bản có thể tự động triển khai các tài nguyên Azure do Bicept xác định và mã ứng dụng Chức năng Azure từ kho lưu trữ GitHub. Điều này đáp ứng yêu cầu triển khai Bicept tự động, có thể lặp lại, có thể kiểm tra trong khi loại bỏ việc triển khai cục bộ và dòng lệnh.\n\n**Tài liệu tham khảo:**\n[Deploy Bicep files by using GitHub Actions](https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/deploy-github-actions) · [Deploy to Azure Functions by using GitHub Actions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-how-to-github-actions)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 121",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/121-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.123Z"
  },
  {
    "id": "ai200-122",
    "questionNumber": 122,
    "text": "You plan to deploy an Azure Container App.  \n  \nYou need to configure the container app to provide session affinity.  \n  \nWhich ingress type and revision mode should you assign to the container app?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "TCP ingress type and single revision mode"
      },
      {
        "key": "B",
        "text": "TCP ingress type and multiple revision mode"
      },
      {
        "key": "C",
        "text": "HTTP ingress type and multiple revision mode"
      },
      {
        "key": "D",
        "text": "HTTP ingress type and single revision mode"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Mối quan hệ phiên Azure Container Apps sử dụng cookie HTTP và chỉ được hỗ trợ khi bật tính năng nhập HTTP và ứng dụng sử dụng chế độ sửa đổi duy nhất.\n\n**Tài liệu tham khảo:**\n[Session Affinity in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/sticky-sessions)",
    "category": "Develop Containerized Solutions On Azure",
    "tags": [
      "AI-200",
      "Develop Containerized Solutions On Azure"
    ],
    "sourceTitle": "Examcademy AI-200 Question 122",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/122-develop-containerized-solutions-on-azure",
    "lastVerifiedAt": "2026-09-13T09:34:16.123Z"
  },
  {
    "id": "ai200-123",
    "questionNumber": 123,
    "text": "You publish custom AI inference events to an Event Grid topic.  \n  \nDownstream services must receive events only when the `confidenceScore` value exceeds `0.80`.  \n  \nYou need to filter events by a numeric value in the event payload.  \n  \nWhich filter should you configure?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "event type"
      },
      {
        "key": "B",
        "text": "subject"
      },
      {
        "key": "C",
        "text": "advanced"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Tính năng lọc nâng cao Azure Event Grid hỗ trợ so sánh trên các trường trong dữ liệu sự kiện, bao gồm toán tử `NumberGreaterThan`. Bộ lọc nâng cao trên `confidenceScore` có ngưỡng `0.80` chỉ phân phối các sự kiện có giá trị tải trọng số lớn hơn ngưỡng đó.\n\n**Tài liệu tham khảo:**\n[Understand event filtering for Event Grid subscriptions](https://learn.microsoft.com/en-us/azure/event-grid/event-filtering)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 123",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/123-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.123Z"
  },
  {
    "id": "ai200-124",
    "questionNumber": 124,
    "text": "You plan to configure an Event Grid subscription for AI inference events.  \n  \nThe solution must:  \n  \n- Filter events by payload data.  \n- Retain undelivered events.  \n- Limit retry attempts.  \n  \nYou need to configure Event Grid. Which configurations should you use?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "filter_payload",
        "text": "Filter events by payload data.",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "retain_undelivered",
        "text": "Retain undelivered events.",
        "correctAnswer": "D",
        "choiceKeys": [
          "D",
          "E",
          "F"
        ]
      },
      {
        "id": "limit_retries",
        "text": "Limit retry behavior.",
        "correctAnswer": "G",
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
        "text": "Advanced filter"
      },
      {
        "key": "B",
        "text": "Subject filter"
      },
      {
        "key": "C",
        "text": "Service Bus session"
      },
      {
        "key": "D",
        "text": "Dead-letter destination"
      },
      {
        "key": "E",
        "text": "Endpoint validation"
      },
      {
        "key": "F",
        "text": "Duplicate detection"
      },
      {
        "key": "G",
        "text": "Maximum delivery attempts"
      },
      {
        "key": "H",
        "text": "Message sessions"
      },
      {
        "key": "I",
        "text": "Auto-complete"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Advanced filter"
      },
      {
        "key": "B",
        "text": "Subject filter"
      },
      {
        "key": "C",
        "text": "Service Bus session"
      },
      {
        "key": "D",
        "text": "Dead-letter destination"
      },
      {
        "key": "E",
        "text": "Endpoint validation"
      },
      {
        "key": "F",
        "text": "Duplicate detection"
      },
      {
        "key": "G",
        "text": "Maximum delivery attempts"
      },
      {
        "key": "H",
        "text": "Message sessions"
      },
      {
        "key": "I",
        "text": "Auto-complete"
      }
    ],
    "correctAnswers": [
      "filter_payload=A",
      "retain_undelivered=D",
      "limit_retries=G"
    ],
    "explanation": "Tính năng lọc nâng cao của Lưới sự kiện hỗ trợ lọc trên các thuộc tính sự kiện, bao gồm các thuộc tính trong tải trọng `data`. Đích gửi thư chết sẽ giữ lại các sự kiện không thể gửi được và cài đặt Số lần gửi tối đa của chính sách thử lại sẽ giới hạn số lần thử gửi.\n\n**Tài liệu tham khảo:**\n[Event Filtering in Azure Event Grid](https://learn.microsoft.com/en-us/azure/event-grid/event-filtering) · [Azure Event Grid delivery and retry](https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry)",
    "category": "Connect To And Consume Azure Services",
    "tags": [
      "AI-200",
      "Connect To And Consume Azure Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 124",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/124-connect-to-and-consume-azure-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.123Z"
  },
  {
    "id": "ai200-125",
    "questionNumber": 125,
    "text": "You are designing an Azure Database for PostgreSQL table for semantic search. Queries often filter on the `created_at` column.  \n  \nThe schema must support vector similarity search and dependable date filtering.  \n  \nYou need to ensure that the table satisfies these requirements.  \n  \nWhich two actions should you take? Each correct answer represents part of the solution.  \n  \n> NOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Store created_at as a free-form string."
      },
      {
        "key": "B",
        "text": "Store embeddings in a pg vector column."
      },
      {
        "key": "C",
        "text": "Store embeddings in a varchar column."
      },
      {
        "key": "D",
        "text": "Use a typed timestamp column for created_at."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "Tiện ích mở rộng `pgvector` cung cấp các hoạt động tương tự vectơ cho các phần nhúng được lưu trữ trong cột `vector`. Cột `timestamp` gốc biểu thị ngày và giờ dưới dạng giá trị tạm thời, cho phép so sánh và lọc theo trình tự thời gian đáng tin cậy; Các chuỗi dạng tự do và các phần nhúng `varchar` không cung cấp vectơ hoặc ngữ nghĩa thời gian cần thiết.\n\n**Tài liệu tham khảo:**\n[Enable and use pgvector in Azure Database for PostgreSQL flexible server](https://learn.microsoft.com/en-us/azure/postgresql/extensions/how-to-use-pgvector) · [PostgreSQL documentation: Date/Time Types](https://www.postgresql.org/docs/current/datatype-datetime.html)",
    "category": "Develop AI Solutions By Using Azure Data Management Services",
    "tags": [
      "AI-200",
      "Develop AI Solutions By Using Azure Data Management Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 125",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/125-develop-ai-solutions-by-using-azure-data-management-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.123Z"
  },
  {
    "id": "ai200-126",
    "questionNumber": 126,
    "text": "HOTSPOT  \n  \nYou are developing a semantic search capability for a chatbot and storing document embeddings in Redis.  \n  \nReview the following Python code that connects to Redis and stores an embedding value:  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1787531765848-eheiyetj.png)  \n  \nFor each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "The embedding is stored as a hash field.",
        "correctAnswer": "Yes"
      },
      {
        "id": "2",
        "text": "The code enables similarity search on the embedding field.",
        "correctAnswer": "No"
      },
      {
        "id": "3",
        "text": "The key will expire after 10 minutes.",
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
    "explanation": "`HSET` ghi phần nhúng dưới dạng trường của hàm băm Redis. Chỉ lưu trữ biểu diễn byte không tạo ra chỉ mục vectơ hoặc thực hiện truy vấn tìm kiếm tương tự. `EXPIRE` chấp nhận TTL tính bằng giây, vì vậy 600 giây là 10 phút.\n\n**Tài liệu tham khảo:**\n[Redis-py guide](https://redis.io/docs/latest/develop/clients/redis-py/) · [EXPIRE command](https://redis.io/docs/latest/commands/expire/)",
    "category": "Develop AI Solutions By Using Azure Data Management Services",
    "tags": [
      "AI-200",
      "Develop AI Solutions By Using Azure Data Management Services"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1787531765848-eheiyetj.png",
    "sourceTitle": "Examcademy AI-200 Question 126",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/126-develop-ai-solutions-by-using-azure-data-management-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.123Z"
  },
  {
    "id": "ai200-127",
    "questionNumber": 127,
    "text": "You need to set up image builds for a new service to satisfy the technical requirements.  \n  \nWhich two actions should you take? Each correct answer represents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Deploy the container image to Azure Kubernetes Service."
      },
      {
        "key": "B",
        "text": "Create a GitHub Action to rebuild the application on every push."
      },
      {
        "key": "C",
        "text": "Configure a base image update trigger for the ACR Task."
      },
      {
        "key": "D",
        "text": "Create and configure an ACR Task with a source repository context."
      },
      {
        "key": "E",
        "text": "Create an Azure DevOps pipeline with a source repository context."
      },
      {
        "key": "F",
        "text": "Push updated code to the source repository."
      }
    ],
    "correctAnswers": [
      "D",
      "F"
    ],
    "explanation": "Nhiệm vụ đăng ký vùng chứa Azure có thể sử dụng kho lưu trữ Git làm ngữ cảnh tác vụ và tự động xây dựng hình ảnh vùng chứa khi mã được cam kết vào kho lưu trữ đó. Việc tạo Tác vụ ACR bằng ngữ cảnh kho lưu trữ sẽ thiết lập cấu hình bản dựng và việc đẩy mã cập nhật sẽ kích hoạt bản dựng dựa trên cam kết thông qua webhook Tác vụ ACR. Trình kích hoạt cập nhật hình ảnh cơ sở là tùy chọn và phục vụ một điều kiện kích hoạt khác.\n\n**Tài liệu tham khảo:**\n[Automate Container Builds with Azure Container Registry Tasks](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview) · [Tutorial: Automate container image builds in the cloud when you commit source code](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tutorial-build-task)",
    "category": "Develop Containerized Solutions On Azure",
    "tags": [
      "AI-200",
      "Develop Containerized Solutions On Azure"
    ],
    "sourceTitle": "Examcademy AI-200 Question 127",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/127-develop-containerized-solutions-on-azure",
    "lastVerifiedAt": "2026-09-13T09:34:16.123Z"
  },
  {
    "id": "ai200-128",
    "questionNumber": 128,
    "text": "You need to configure vector embedding updates in accordance with the business and technical requirements.  \n  \nWhich configurations should you use?",
    "questionType": "matching_dropdown",
    "statements": [
      {
        "id": "identify_changes",
        "text": "Identify document changes that should trigger vectorization.",
        "correctAnswer": "A",
        "choiceKeys": [
          "A",
          "B",
          "C"
        ]
      },
      {
        "id": "scale_vectorization",
        "text": "Scale out the vectorization processing.",
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
        "text": "Change feed processor"
      },
      {
        "key": "B",
        "text": "Periodic full container scan"
      },
      {
        "key": "C",
        "text": "Cross-partition SELECT query"
      },
      {
        "key": "D",
        "text": "Lease container"
      },
      {
        "key": "E",
        "text": "Strong consistency level"
      },
      {
        "key": "F",
        "text": "RU throughput on the container"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Change feed processor"
      },
      {
        "key": "B",
        "text": "Periodic full container scan"
      },
      {
        "key": "C",
        "text": "Cross-partition SELECT query"
      },
      {
        "key": "D",
        "text": "Lease container"
      },
      {
        "key": "E",
        "text": "Strong consistency level"
      },
      {
        "key": "F",
        "text": "RU throughput on the container"
      }
    ],
    "correctAnswers": [
      "identify_changes=A",
      "scale_vectorization=D"
    ],
    "explanation": "Bộ xử lý nguồn cấp dữ liệu thay đổi Azure Cosmos DB tự động xử lý các phần chèn và cập nhật, do đó, nó có thể kích hoạt việc tạo nhúng mà không cần quét toàn bộ vùng chứa. Bộ chứa cho thuê của nó lưu trữ và điều phối trạng thái cho thuê trên các phiên bản bộ xử lý, cho phép công việc được phân phối và mở rộng quy mô. Điều này tránh việc tiêu thụ RU không cần thiết khi quét toàn bộ định kỳ hoặc truy vấn nhiều phân vùng.\n\n**Tài liệu tham khảo:**\n[Change feed processor in Azure Cosmos DB](https://learn.microsoft.com/azure/cosmos-db/nosql/change-feed-processor) · [Azure Cosmos DB change feed overview](https://learn.microsoft.com/azure/cosmos-db/nosql/change-feed-design-patterns)",
    "category": "Develop AI Solutions By Using Azure Data Management Services",
    "tags": [
      "AI-200",
      "Develop AI Solutions By Using Azure Data Management Services"
    ],
    "sourceTitle": "Examcademy AI-200 Question 128",
    "sourceUrl": "https://examcademy.com/exams/microsoft/ai-200/q/128-develop-ai-solutions-by-using-azure-data-management-services",
    "lastVerifiedAt": "2026-09-13T09:34:16.123Z"
  }
];
