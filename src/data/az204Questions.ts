import { Question } from '../types';

export const az204Questions: Question[] = [
  {
    "id": "az204-1",
    "questionNumber": 1,
    "text": "You need to deploy a new version of the LabelMaker application to ACR.  \n  \nWhich three actions should you perform, in sequence?",
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
        "correctAnswer": "A"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Log in to the registry and push image."
      },
      {
        "key": "B",
        "text": "Create an alias of the image with a new build number."
      },
      {
        "key": "C",
        "text": "Create an alias of the image with the fully qualified path to the registry."
      },
      {
        "key": "D",
        "text": "Download the image to your local computer."
      },
      {
        "key": "E",
        "text": "Build a new application image by using dockerfile."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Log in to the registry and push image."
      },
      {
        "key": "B",
        "text": "Create an alias of the image with a new build number."
      },
      {
        "key": "C",
        "text": "Create an alias of the image with the fully qualified path to the registry."
      },
      {
        "key": "D",
        "text": "Download the image to your local computer."
      },
      {
        "key": "E",
        "text": "Build a new application image by using dockerfile."
      }
    ],
    "correctAnswers": [
      "step1=E",
      "step2=C",
      "step3=A"
    ],
    "explanation": "Dockerfile xây dựng hình ảnh ứng dụng. Trước khi có thể đẩy một hình ảnh lên Azure Container Register, nó phải được gắn thẻ với đường dẫn kho lưu trữ và máy chủ đăng nhập đăng ký; sau khi xác thực, Docker có thể đẩy hình ảnh được gắn thẻ đó. Bí danh số bản dựng riêng biệt là tùy chọn và không cần thiết cho chuỗi này.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 1",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/1-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-2",
    "questionNumber": 2,
    "text": "Solution: Turn on ingress, create a custom scale rule, and apply that rule to the container app.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Azure Container Apps yêu cầu xâm nhập, số lượng bản sao tối thiểu hoặc quy tắc tỷ lệ tùy chỉnh để tránh ứng dụng bị vô hiệu hóa khả năng xâm nhập không thể khởi động sau khi chia tỷ lệ về 0. Việc kích hoạt tính năng xâm nhập cho phép người dùng tiếp cận ứng dụng, trong khi quy tắc tỷ lệ tùy chỉnh cung cấp trình kích hoạt tỷ lệ có thể kích hoạt các bản sao. [Scaling in Azure Container Apps | Microsoft Learn](https://learn.microsoft.com/en-us/azure/container-apps/scale-app)",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 2",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/2-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-3",
    "questionNumber": 3,
    "text": "Solution: Turn on ingress and set the container app's minimum replica count to 1.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Azure Container Apps yêu cầu truy cập để hiển thị ứng dụng cho lưu lượng truy cập đến. Cài đặt bản sao tối thiểu là 1 giúp duy trì ít nhất một bản sao sửa đổi chạy thay vì cho phép ứng dụng mở rộng quy mô về 0, khôi phục tính khả dụng cho người dùng.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 3",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/3-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-4",
    "questionNumber": 4,
    "text": "Solution: Turn on ingress, create an HTTP scale rule, and apply that rule to the container app.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Azure Container Apps bị vô hiệu hóa tính năng xâm nhập có thể mở rộng về 0 và có cách bắt đầu lại dựa trên HTTP no. Việc bật tính năng xâm nhập giúp ứng dụng có thể truy cập được đối với lưu lượng HTTP, trong khi quy tắc tỷ lệ HTTP sử dụng đồng thời yêu cầu đến để mở rộng ứng dụng từ con số 0. [Scaling in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/scale-app)",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 4",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/4-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-5",
    "questionNumber": 5,
    "text": "Solution: Enable ingress, create a TCP scale rule, and apply that rule to the container app.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Việc kích hoạt tính năng xâm nhập sẽ giúp ứng dụng vùng chứa có thể truy cập được và quy tắc chia tỷ lệ TCP có thể kích hoạt các bản sao từ các kết nối TCP đến ngay cả khi bản sửa đổi đã chia tỷ lệ về 0. Azure Container Apps ghi lại tỷ lệ TCP với `minReplicas` được đặt thành `0` và được định cấu hình xâm nhập cho lưu lượng TCP.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 5",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/5-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-6",
    "questionNumber": 6,
    "text": "HOTSPOT –  \n  \nYou need to fix the VM issues. Which tools should you use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Azure Backup tạo các điểm khôi phục cho máy ảo Azure và khôi phục máy ảo, ổ đĩa hoặc tệp từ các bản sao lưu đó. Mạng tăng tốc cải thiện hiệu suất mạng VM thông qua ảo hóa I/O gốc đơn, giảm độ trễ, jitter và mức sử dụng CPU. Azure Network Watcher được sử dụng để giám sát và chẩn đoán mạng thay vì tự cung cấp tính năng nâng cao hiệu suất.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 6",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/6-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-7",
    "questionNumber": 7,
    "text": "You are creating an Azure Functions app project in your local development environment by using Azure Functions Core Tools.  \n  \nYou must create the project in either Python or C# without using a template.  \n  \nYou need to specify the command and its parameter required to create the Azure Functions app project.  \n  \nWhich command and parameter should you specify?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "`func init` tạo dự án Azure Functions mới. Tùy chọn `--worker-runtime` đặt thời gian chạy ngôn ngữ của nó, bao gồm Python và C#; Thay vào đó, `func new` tạo một hàm từ một mẫu.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 7",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/7-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-8",
    "questionNumber": 8,
    "text": "You are building a web application that uses Azure Cache for Redis. You expect the cache to fill frequently and will need to evict keys.  \n  \nYou must configure Azure Cache for Redis for the following predicted usage pattern: a small subset of elements will be accessed much more often than the remaining elements.  \n  \nYou need to configure Azure Cache for Redis to optimize performance for the predicted usage pattern.  \n  \nWhich two eviction policies will meet the goal?  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "noeviction"
      },
      {
        "key": "B",
        "text": "allkeys-lru"
      },
      {
        "key": "C",
        "text": "volatile-lru"
      },
      {
        "key": "D",
        "text": "allkeys-random"
      },
      {
        "key": "E",
        "text": "volatile-ttl"
      },
      {
        "key": "F",
        "text": "volatile-random"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Việc trục xuất LRU sẽ bảo tồn các khóa được truy cập thường xuyên bằng cách loại bỏ các khóa không được sử dụng trong thời gian dài nhất. `allkeys-lru` đánh giá tất cả các khóa, trong khi `volatile-lru` đánh giá các khóa có thời hạn hết hạn. Do đó, cả hai đều ưu tiên tập hợp con được truy cập thường xuyên dưới áp lực bộ nhớ.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 8",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/8-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-9",
    "questionNumber": 9,
    "text": "This question requires you to assess the underlined text to determine whether it is correct.  \n  \nYour company has an on-premises deployment of MongoDB and an Azure Cosmos DB account that uses the MongoDB API.  \n  \nYou need to devise a strategy to migrate MongoDB to the Azure Cosmos DB account.  \n  \nYou include the Data Management Gateway tool in your migration strategy.  \n  \nInstructions: Review the underlined text. If it makes the statement correct, select `No change required.` If the statement is incorrect, select the answer choice that makes the statement correct.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "No change required"
      },
      {
        "key": "B",
        "text": "mongorestore"
      },
      {
        "key": "C",
        "text": "Azure Storage Explorer"
      },
      {
        "key": "D",
        "text": "AzCopy"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "`mongorestore` là một công cụ gốc MongoDB giúp khôi phục dữ liệu BSON vào đích tương thích với MongoDB, bao gồm Azure Cosmos DB cho MongoDB. Nó phù hợp để di chuyển triển khai MongoDB tại chỗ sau khi tạo kết xuất với `mongodump`.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 9",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/9-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-10",
    "questionNumber": 10,
    "text": "You need to resolve the Azure Logic app error message.  \n  \nWhich configuration values should you use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Hàm Azure được gọi thông qua xác thực danh tính được quản lý của Microsoft Entra phải sử dụng ủy quyền cấp chức năng ẩn danh; nếu không thì thời gian chạy Hàm cũng mong đợi một phím chức năng và cuộc gọi không thành công. system-assigned managed identity được liên kết với tài nguyên Ứng dụng Logic riêng lẻ và phù hợp khi Ứng dụng Logic đó là người gọi.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 10",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/10-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-11",
    "questionNumber": 11,
    "text": "You are building an Azure Web App and configure TLS mutual authentication for it.  \n  \nYou need to validate the client certificate in the web app.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Azure App Service chuyển tiếp chứng chỉ ứng dụng khách đến ứng dụng trong tiêu đề yêu cầu HTTP `X-ARR-ClientCert`. Chứng chỉ được chuyển tiếp được mã hóa Base64, vì vậy ứng dụng phải truy xuất tiêu đề đó và giải mã giá trị của nó trước khi xác thực chứng chỉ.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 11",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/11-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-12",
    "questionNumber": 12,
    "text": "You are building an inventory-tracking solution. The solution contains an Azure Function app with multiple functions that are triggered by Azure Cosmos DB. You plan to deploy the solution across multiple Azure regions.  \n  \nThe solution must meet these requirements:  \n  \n- Item results from Azure Cosmos DS must return the latest committed version of an item.  \n- Items written to Azure Cosmos DB must guarantee ordering.  \n  \nYou need to configure the consistency level for the Azure Cosmos DB deployments.  \n  \nWhich consistency level should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "consistent prefix"
      },
      {
        "key": "B",
        "text": "eventual"
      },
      {
        "key": "C",
        "text": "bounded staleness"
      },
      {
        "key": "D",
        "text": "strong"
      },
      {
        "key": "E",
        "text": "session"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Tính nhất quán mạnh mẽ của Azure Cosmos DB mang lại khả năng tuyến tính hóa: các lần đọc luôn trả về phiên bản mục được cam kết gần đây nhất và các lần ghi đã cam kết được sắp xếp trên toàn cầu. Mức độ nhất quán yếu hơn có thể trả về dữ liệu cũ hoặc chỉ cung cấp đảm bảo đặt hàng trong giới hạn hoặc phiên giới hạn hơn.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 12",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/12-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-13",
    "questionNumber": 13,
    "text": "You are developing an Azure App Service-hosted ASP.NET Core web app that delivers video-on-demand streaming media. You enable Azure Content Delivery Network (CDN) Standard for the web endpoint. Customers download videos from the web app by using a URL such as `http://www.contoso.com/content.mp4?quality=1`.  \n  \nAll media content must expire from the cache after one hour. Videos with different quality levels must be delivered from the closest regional point-of-presence (POP) node.  \n  \nYou need to configure Azure CDN caching rules. Which options should you use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Ghi đè thực thi thời gian tồn tại của bộ nhớ đệm CDN đã định cấu hình thay vì tôn trọng giá trị hết hạn do nguồn cung cấp, đảm bảo rằng phương tiện sẽ hết hạn sau một giờ. Bộ nhớ đệm mỗi URL duy nhất làm cho giá trị chuỗi truy vấn `quality` trở thành một phần của khóa bộ đệm, do đó, mỗi biến thể chất lượng video đều được lưu vào bộ nhớ đệm và phân phối chính xác từ các POP cạnh CDN.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 13",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/13-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-14",
    "questionNumber": 14,
    "text": "You are developing a back-end Azure App Service that scales based on the number of messages in a Service Bus queue.  \n  \nAn existing rule scales up the App Service when the average queue length of unprocessed and valid messages exceeds 1000.  \n  \nAdd a rule that continuously scales down the App Service whenever the scale-up condition is not met. How should you configure the Scale rule?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Tin nhắn hoạt động là những tin nhắn hợp lệ, chưa được xử lý trong hàng đợi Service Bus. Sử dụng tổng hợp Trung bình và điều kiện chia tỷ lệ nhỏ hơn hoặc bằng 1.000, là phần bổ sung cho điều kiện chia tỷ lệ hiện có là mức trung bình lớn hơn 1.000.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 14",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/14-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-15",
    "questionNumber": 15,
    "text": "You are developing an ASP.NET Core website that uses Azure FrontDoor. The website builds custom weather data sets for researchers. Users download the data sets as Comma Separated Value (CSV) files, and the data is refreshed every 10 hours.  \n  \nSpecific files must be purged from the FrontDoor cache according to Response Header values.  \n  \nYou need to purge individual assets from the Front Door cache. Which type of cache purge should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "single path"
      },
      {
        "key": "B",
        "text": "wildcard"
      },
      {
        "key": "C",
        "text": "root domain"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Azure Front Door sử dụng tính năng lọc một đường dẫn để xóa nội dung được lưu trong bộ nhớ đệm riêng lẻ bằng cách chỉ định đường dẫn đầy đủ của nội dung đó, bao gồm cả phần mở rộng tệp của nội dung đó. Ký tự đại diện sẽ xóa các nhóm tệp và thư mục mục tiêu, đồng thời việc xóa tên miền gốc sẽ xóa tất cả nội dung cho điểm cuối.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 15",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/15-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-16",
    "questionNumber": 16,
    "text": "You plan to deploy a web app to App Service on Linux. You create an App Service plan, then create and push a custom Docker image containing the web app to Azure Container Registry.  \n  \nYou need to view console logs generated within the container in real time.  \n  \nHow should you complete the Azure CLI command?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Đối với vùng chứa Docker tùy chỉnh trong Azure App Service, ghi nhật ký Docker/vùng chứa phải được bật bằng `--docker-container-logging filesystem`. Sau đó, lệnh `az webapp log tail` truyền trực tuyến đầu ra nhật ký ứng dụng/vùng chứa trong thời gian thực.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 16",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/16-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-17",
    "questionNumber": 17,
    "text": "You are developing an Azure-hosted application that must use a key from an on-premises hardware security module (HSM). The key must be transferred to your existing Azure Key Vault through the Bring Your Own Key (BYOK) process.  \n  \nYou need to securely transfer the key to Azure Key Vault.  \n  \nWhich four actions should you perform in order?",
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
        "correctAnswer": "F"
      },
      {
        "id": "step3",
        "text": "Slot 3:",
        "correctAnswer": "A"
      },
      {
        "id": "step4",
        "text": "Slot 4:",
        "correctAnswer": "D"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Generate a key transfer blob file by using the HSM vendor-provided tool."
      },
      {
        "key": "B",
        "text": "Generate a Key Exchange Key (KEK)."
      },
      {
        "key": "C",
        "text": "Create a custom policy definition in Azure Policy."
      },
      {
        "key": "D",
        "text": "Run the az keyvault key import command."
      },
      {
        "key": "E",
        "text": "Run the az keyvault key restore command."
      },
      {
        "key": "F",
        "text": "Retrieve the Key Exchange Key (KEK) public key."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Generate a key transfer blob file by using the HSM vendor-provided tool."
      },
      {
        "key": "B",
        "text": "Generate a Key Exchange Key (KEK)."
      },
      {
        "key": "C",
        "text": "Create a custom policy definition in Azure Policy."
      },
      {
        "key": "D",
        "text": "Run the az keyvault key import command."
      },
      {
        "key": "E",
        "text": "Run the az keyvault key restore command."
      },
      {
        "key": "F",
        "text": "Retrieve the Key Exchange Key (KEK) public key."
      }
    ],
    "correctAnswers": [
      "step1=B",
      "step2=F",
      "step3=A",
      "step4=D"
    ],
    "explanation": "KEK được tạo trong Key Vault đích sẽ bảo vệ khóa đích trong quá trình truyền. Việc xuất khóa công khai KEK cho phép công cụ BYOK của nhà cung cấp HSM mã hóa và đóng gói khóa tại chỗ dưới dạng blob chuyển; `az keyvault key import` tải blob đó lên, trong đó Key Vault giải mã và nhập nó trong ranh giới HSM của nó.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 17",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/17-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-18",
    "questionNumber": 18,
    "text": "You develop and deploy several APIs in Azure API Management.  \n  \nYou create the following policy fragment named APICounts:  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783832053632-723nhkt4.png)  \n  \nThe policy fragment must be reusable across multiple scopes and APIs. It must apply to every API and execute whenever a calling system invokes an API.  \n  \nYou need to implement the policy fragment.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "section_open",
        "text": "Slot 1:",
        "correctAnswer": "B"
      },
      {
        "id": "policy_name",
        "text": "Slot 2:",
        "correctAnswer": "F"
      },
      {
        "id": "attribute_name",
        "text": "Slot 3:",
        "correctAnswer": "E"
      },
      {
        "id": "section_close",
        "text": "Slot 4:",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "name"
      },
      {
        "key": "B",
        "text": "inbound"
      },
      {
        "key": "C",
        "text": "outbound"
      },
      {
        "key": "D",
        "text": "set-variable"
      },
      {
        "key": "E",
        "text": "fragment-id"
      },
      {
        "key": "F",
        "text": "include-fragment"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "name"
      },
      {
        "key": "B",
        "text": "inbound"
      },
      {
        "key": "C",
        "text": "outbound"
      },
      {
        "key": "D",
        "text": "set-variable"
      },
      {
        "key": "E",
        "text": "fragment-id"
      },
      {
        "key": "F",
        "text": "include-fragment"
      }
    ],
    "correctAnswers": [
      "section_open=B",
      "policy_name=F",
      "attribute_name=E",
      "section_close=B"
    ],
    "explanation": "Tất cả các API đều kế thừa chính sách Quản lý API toàn cầu. Phần gửi đến xử lý các lệnh gọi API đến và chính sách include-fragment sẽ chèn một đoạn có thể sử dụng lại bằng cách sử dụng thuộc tính id đoạn được yêu cầu. Do đó, APICounts được đưa vào dưới dạng <include-fragmentFragment-id=\"APICounts\" /> trong phần gửi đến toàn cầu.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783832053632-723nhkt4.png",
    "sourceTitle": "Examcademy AZ-204 Question 18",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/18-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-19",
    "questionNumber": 19,
    "text": "You need to configure the Account Kind, Replication, and Access tier options for the corporate website's Azure Storage account.  \n  \nHow should you complete the configuration? Select the appropriate options in the dialog box.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "StorageV2 (mục đích chung v2) là loại tài khoản lưu trữ được Microsoft khuyên dùng cho hầu hết các trường hợp và bắt buộc phải sử dụng các bậc truy cập Nóng/Làm mát giúp giảm thiểu chi phí lưu trữ, không giống như loại v1 đa năng cũ. Geo-zone-redundant storage (GZRS) sao chép đồng bộ dữ liệu trên ba availability zones trong khu vực chính (thông qua ZRS) và sao chép không đồng bộ dữ liệu đó sang khu vực phụ, đây chính xác là điều cần thiết khi dữ liệu phải vừa dự phòng theo vùng vừa dự phòng theo địa lý; các biến thể truy cập đọc (RA-GRS/RA-GZRS) thêm chi phí cho quyền truy cập đọc khu vực thứ cấp không bắt buộc ở đây và chỉ riêng LRS/ZRS/GRS không đáp ứng cả yêu cầu dự phòng khu vực và khu vực. Cấp truy cập Cool được tối ưu hóa cho dữ liệu được sửa đổi không thường xuyên và cung cấp chi phí lưu trữ thấp hơn Hot tier (với chi phí truy cập cao hơn một chút), phù hợp với yêu cầu giảm thiểu chi phí lưu trữ dữ liệu cho nội dung trang web của công ty.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 19",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/19-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-20",
    "questionNumber": 20,
    "text": "You need to implement the bindings for the `CheckUserContent` function.  \n  \nHow should you complete the code segment?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Hàm được kích hoạt blob có thể liên kết nội dung blob với `string` và mã thông báo đường dẫn `{name}` có sẵn dưới dạng dữ liệu liên kết. Đầu ra `Stream` được ghi thông qua liên kết đầu ra Blob; `FileAccess.Write` làm cho luồng đó có thể ghi được.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 20",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/20-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-21",
    "questionNumber": 21,
    "text": "Proposed solution: Configure an Azure Monitor Insights workbook.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Sách bài tập Azure Monitor cung cấp các báo cáo trực quan và phân tích tương tác; họ không xác định tự động hóa phản ứng cảnh báo. Các nhóm hành động Azure Monitor có thể gọi Hàm Azure khi cảnh báo kích hoạt, do đó, cần có nhóm hành động có hành động Hàm để thực thi Hàm1.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 21",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/21-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-22",
    "questionNumber": 22,
    "text": "Solution: Configure Application Insights Smart Detection.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Phát hiện thông minh Application Insights xác định các điểm bất thường tiềm ẩn về hiệu suất và lỗi, nhưng bản thân nó không định cấu hình cảnh báo hiện có để thực thi Chức năng Azure. Nhóm hành động Azure Monitor có hành động Chức năng Azure phải được liên kết với quy tắc cảnh báo để gọi Chức năng1 khi cảnh báo kích hoạt.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 22",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/22-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-23",
    "questionNumber": 23,
    "text": "Solution: Set up an Azure Monitor action group.  \n  \nDoes the solution meet the goal?",
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
    "explanation": "Các nhóm hành động Azure Monitor có thể được liên kết với các quy tắc cảnh báo và bao gồm các hành động Chức năng Azure. Do đó, việc kích hoạt cảnh báo có thể gọi Function1 ngoài việc gửi thông báo qua email.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 23",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/23-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-24",
    "questionNumber": 24,
    "text": "Solution: Configure an Application Insights funnel.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Kênh Application Insights là một tính năng phân tích để kiểm tra chuyển đổi thông qua một chuỗi hành động của người dùng; nó không thực thi Chức năng Azure để phản hồi cảnh báo. Các nhóm hành động Azure Monitor hỗ trợ các hành động tự động, bao gồm cả việc gọi Hàm Azure được kích hoạt HTTP hiện có khi có cảnh báo kích hoạt.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 24",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/24-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-25",
    "questionNumber": 25,
    "text": "You must deploy the CheckUserContent Azure Function. The solution needs to satisfy the security and cost requirements.  \n  \nWhich hosting model should you choose?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Premium plan"
      },
      {
        "key": "B",
        "text": "App Service plan"
      },
      {
        "key": "C",
        "text": "Consumption plan"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Azure Functions Premium hỗ trợ kết nối mạng ảo và các điểm cuối riêng tư để truy cập an toàn vào các tài nguyên được bảo vệ, trong khi vẫn duy trì khả năng mở rộng theo sự kiện. Gói Dịch vụ ứng dụng sử dụng dung lượng chuyên dụng và được tính phí ngay cả khi chức năng này không hoạt động; gói Tiêu thụ cũ là trả tiền cho mỗi lần thực thi nhưng không hỗ trợ tích hợp mạng ảo hoặc điểm cuối riêng tư. Do đó, Premium là sự cân bằng phù hợp giữa khả năng bảo mật cần thiết và khả năng mở rộng hiệu quả về mặt chi phí.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 25",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/25-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-26",
    "questionNumber": 26,
    "text": "You develop a REST API and implement a user delegation SAS token to communicate with Azure Blob storage.  \n  \nThe token has been compromised. You need to revoke it.  \n  \nWhat are two possible ways to accomplish this goal? Each correct answer provides a complete solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Revoke the delegation key."
      },
      {
        "key": "B",
        "text": "Delete the stored access policy."
      },
      {
        "key": "C",
        "text": "Regenerate the account key."
      },
      {
        "key": "D",
        "text": "Remove the role assignment for the security principle."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "SAS ủy quyền người dùng có thể bị thu hồi bằng cách thu hồi khóa ủy quyền người dùng của nó, điều này làm vô hiệu hóa mã thông báo SAS được ký bằng khóa đó. Nó cũng có thể bị thu hồi bằng cách thay đổi hoặc xóa việc gán vai trò RBAC cho hiệu trưởng bảo mật được sử dụng để tạo SAS, vì Azure Storage xác minh các quyền cần thiết của hiệu trưởng đó khi sử dụng SAS. Các chính sách truy cập được lưu trữ và việc tạo lại khóa tài khoản lưu trữ không thu hồi SAS ủy quyền của người dùng.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 26",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/26-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-27",
    "questionNumber": 27,
    "text": "You have two Azure Container Registry (ACR) instances: ACR01 and ACR02.  \n  \nYou plan to implement a containerized application named APP1 that will use a base image named BASE1. The APP1 image will be stored in ACR01, while the BASE1 image will be stored in ACR02.  \n  \nYou need to automate the planned implementation by using five Azure CLI commands. The solution must ensure that the APP1 image in ACR01 is automatically updated when the BASE1 image is updated.  \n  \nIn which order should you perform the actions?  \n  \n*Note: More than one ordering of the answer choices is correct. You receive credit for any correct order.*",
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
      },
      {
        "id": "slot4",
        "text": "Slot 4:",
        "correctAnswer": "A"
      },
      {
        "id": "slot5",
        "text": "Slot 5:",
        "correctAnswer": "D"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "az acr task credential add"
      },
      {
        "key": "B",
        "text": "az role assignment create"
      },
      {
        "key": "C",
        "text": "az acr build"
      },
      {
        "key": "D",
        "text": "az acr task run"
      },
      {
        "key": "E",
        "text": "az acr task create"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "az acr task credential add"
      },
      {
        "key": "B",
        "text": "az role assignment create"
      },
      {
        "key": "C",
        "text": "az acr build"
      },
      {
        "key": "D",
        "text": "az acr task run"
      },
      {
        "key": "E",
        "text": "az acr task create"
      }
    ],
    "correctAnswers": [
      "slot1=C",
      "slot2=E",
      "slot3=B",
      "slot4=A",
      "slot5=D"
    ],
    "explanation": "Làm theo hướng dẫn của Microsoft để kích hoạt quá trình xây dựng lại hình ảnh ứng dụng khi hình ảnh cơ sở trong sổ đăng ký khác được cập nhật: trước tiên hãy xây dựng hình ảnh cơ sở thành ACR02 bằng 'az acr build'; sau đó tạo tác vụ theo dõi trong ACR01 với 'az acr task create --sign-identity' (cung cấp managed identity của tác vụ); sau đó cấp quyền kéo danh tính đó trên ACR02 bằng 'tạo phân công vai trò az'; sau đó đính kèm thông tin xác thực đăng ký chéo vào tác vụ với 'thêm thông tin xác thực tác vụ az acr --use-identity [system]'; cuối cùng hãy chạy 'az acr task run' một lần để tác vụ phát hiện ra sự phụ thuộc vào hình ảnh cơ sở của nó. Việc chỉ định vai trò phải diễn ra trước phần thêm thông tin xác thực vì thông tin xác thực tham chiếu đến danh tính mà vai trò cấp quyền truy cập (ghi chú xác nhận rằng nhiều đơn đặt hàng có thể kiếm được tín dụng, nhưng đây là trình tự được ghi lại).",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 27",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/27-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-28",
    "questionNumber": 28,
    "text": "Solution: Include Azure Redis Cache in the design.  \n  \nDoes the solution meet the goal?",
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
    "explanation": "Bộ đệm Azure cho Redis là bộ đệm trong bộ nhớ có dữ liệu nằm trong vùng Azure đã chọn theo mặc định. Mặc dù các tầng được hỗ trợ có thể cung cấp tính sẵn sàng cao và khả năng sao chép địa lý, nhưng ứng dụng phải sử dụng rõ ràng các phiên bản bộ nhớ đệm khu vực và định tuyến máy khách đến điểm cuối thích hợp; Riêng Redis Cache không cung cấp khả năng phân phối nội dung gần nhất về mặt địa lý cho người dùng phát trực tuyến.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 28",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/28-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-29",
    "questionNumber": 29,
    "text": "Solution: You add an Azure Content Delivery Network (CDN) to the design.  \n  \nDoes the solution meet the goal?",
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
    "explanation": "Mạng phân phối nội dung Azure lưu trữ nội dung có sẵn công khai trên các máy chủ biên gần với người dùng cuối, giảm độ trễ và tải ban đầu. Nó hỗ trợ truyền phát video theo yêu cầu và cải thiện hiệu suất phân phối cũng như tính khả dụng cho người dùng phân bố theo địa lý.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 29",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/29-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-30",
    "questionNumber": 30,
    "text": "Solution: You incorporate a Storage Area Network (SAN) into your design.  \n  \nDoes the solution meet the goal?",
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
    "explanation": "SAN cung cấp khả năng lưu trữ cấp khối tập trung nhưng nó không cung cấp nội dung phát trực tuyến từ các vị trí gần người dùng nhất hoặc cung cấp khả năng phân phối và phân phối toàn cầu cần thiết để có trải nghiệm truyền phát video nhất quán, có tính khả dụng cao.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 30",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/30-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-31",
    "questionNumber": 31,
    "text": "You are preparing to deploy a Python website to an Azure Web App by using a container. The solution will use multiple containers in the same container group. The Dockerfile used to build the container is shown below:  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783791928480-maf3guxh.png)  \n  \nBuild the container by using the following command. The Azure Container Registry instance named images is private.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783791932753-3m4ykbpv.png)  \n  \nThe registry user name and password are both `admin`.  \n  \nThe Web App must always run the identical version of the website, despite future builds.  \n  \nCreate an Azure Web App to run the website. Complete the commands.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Cần có gói Dịch vụ ứng dụng Linux (`--is-linux`) cho vùng chứa tùy chỉnh Linux. Việc triển khai `images.azurecr.io/website:v1.0.0` sẽ ghim Ứng dụng web vào thẻ xây dựng rõ ràng thay vì thẻ `latest` đang di chuyển. Cấu hình vùng chứa xác thực với máy chủ đăng nhập ACR, `https://images.azurecr.io`, bằng thông tin xác thực đăng ký; tên kho lưu trữ thuộc về tham chiếu hình ảnh, không phải trong URL máy chủ đăng ký.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783791928480-maf3guxh.png",
    "sourceTitle": "Examcademy AZ-204 Question 31",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/31-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-32",
    "questionNumber": 32,
    "text": "You are building a solution that will use Azure messaging services.  \n  \nYou need to ensure that the solution uses a publish-subscribe model and removes the need for constant polling.  \n  \nWhich two approaches could achieve this goal? Each correct answer provides a complete solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Service Bus"
      },
      {
        "key": "B",
        "text": "Event Hub"
      },
      {
        "key": "C",
        "text": "Event Grid"
      },
      {
        "key": "D",
        "text": "Queue"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Các chủ đề và đăng ký Azure Service Bus cung cấp tin nhắn xuất bản/đăng ký lâu dài từ một đến nhiều người. Azure Event Grid là dịch vụ đăng ký xuất bản được quản lý, có thể đẩy các sự kiện đến người đăng ký khi xảy ra thay đổi trạng thái, tránh việc bỏ phiếu liên tục. Người sử dụng Trung tâm sự kiện sử dụng mô hình kéo, trong khi hàng đợi sử dụng tính năng nhắn tin điểm-điểm.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 32",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/32-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-33",
    "questionNumber": 33,
    "text": "You develop a news and blog content app for Windows devices.  \n  \nA notification must reach a user's device when a new article is available to view.  \n  \nYou need to implement push notifications. How should you complete the code segment?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "`NotificationHubClient.CreateClientFromConnectionString` xây dựng ứng dụng khách Trung tâm thông báo từ chuỗi kết nối và tên trung tâm. `SendWindowsNativeNotificationAsync` gửi tải trọng XML thông báo có nguồn gốc từ Windows thông qua ứng dụng khách đó.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 33",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/33-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-34",
    "questionNumber": 34,
    "text": "You are developing an Azure App Service web app.  \n  \nThe web app must securely store session data in Azure Redis Cache.  \n  \nYou need to connect the web app to Azure Redis Cache.  \n  \nWhich three Azure Redis Cache properties should you use? Each correct answer forms part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Access key"
      },
      {
        "key": "B",
        "text": "SSL port"
      },
      {
        "key": "C",
        "text": "Subscription name"
      },
      {
        "key": "D",
        "text": "Location"
      },
      {
        "key": "E",
        "text": "Host name"
      },
      {
        "key": "F",
        "text": "Subscription id"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "E"
    ],
    "explanation": "Bộ đệm ẩn Azure an toàn cho kết nối máy khách Redis yêu cầu tên máy chủ bộ đệm, cổng TLS/SSL và khóa truy cập để xác thực. Siêu dữ liệu đăng ký và vị trí là thuộc tính quản lý tài nguyên Azure, không phải cài đặt kết nối.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 34",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/34-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-35",
    "questionNumber": 35,
    "text": "You need to implement the Azure Function for retail store locations.  \n  \nHow should you configure the solution?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Trình kích hoạt lưu trữ Blob chạy khi phát hiện thấy blob mới hoặc cập nhật. Hàm phải duy trì dữ liệu lưu trữ đã được xử lý trong Azure Cosmos DB, yêu cầu liên kết đầu ra Azure Cosmos DB; ràng buộc đó ghi tài liệu thông qua API SQL.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 35",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/35-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-36",
    "questionNumber": 36,
    "text": "You develop an ASP. Net Care application by integrating the Application Insights SDK into your solution.  \n  \nThe application sends telemetry at a very high rate over a short interval. You observe fewer events, traces, and metrics being recorded, along with increased telemetry-ingestion error rates. Telemetry data must synchronize client and server information to enable HTTP request and response correlation.  \n  \nYou need to reduce telemetry traffic, data costs, and storage costs while maintaining a statistically accurate analysis of application telemetry data.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Set a daily cap on the Log Analytics workspace. Create an Activity log alert rule."
      },
      {
        "key": "B",
        "text": "Modify the pricing tier for the Log Analytics workspace."
      },
      {
        "key": "C",
        "text": "Update the application code to reduce the number of DiagnosticSource events. Use filtering to exclude these events."
      },
      {
        "key": "D",
        "text": "Disable adaptive sampling. Enable and configure the fixed-rate sampling module."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Lấy mẫu với tốc độ cố định làm giảm khối lượng dữ liệu đo từ xa trước khi nhập trong khi vẫn giữ lại một phần dữ liệu đại diện để phân tích có giá trị thống kê. Quyết định lấy mẫu nhất quán trên toàn bộ phép đo từ xa trong một dấu vết sẽ duy trì yêu cầu, phản hồi và phép đo từ xa có liên quan; Application Insights có thể tính đến tốc độ lấy mẫu khi đếm báo cáo. Lấy mẫu ở cấp nguồn cũng làm giảm chi phí nhập và lưu trữ, không giống như thay đổi cấp không gian làm việc hoặc áp dụng giới hạn hàng ngày.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 36",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/36-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-37",
    "questionNumber": 37,
    "text": "You need to verify the availability of the corporate website.  \n  \nWhich two test types can you use? Each correct answer provides a complete solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Standard"
      },
      {
        "key": "B",
        "text": "URL ping"
      },
      {
        "key": "C",
        "text": "Custom testing using the TrackAvailability API method"
      },
      {
        "key": "D",
        "text": "Multi-step"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Kiểm tra tính khả dụng tiêu chuẩn của Application Insights có thể xác thực tính hợp lệ của chứng chỉ TLS/SSL và gửi tiêu đề HTTP tùy chỉnh. Kiểm tra tính khả dụng tùy chỉnh có thể chạy logic kiểm tra do ứng dụng xác định và gửi kết quả của nó tới Application Insights bằng cách sử dụng `TrackAvailability()`. Kiểm tra ping URL không được dùng nữa và kiểm tra web nhiều bước không phải là loại kiểm tra tính khả dụng được hỗ trợ hiện tại.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 37",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/37-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-38",
    "questionNumber": 38,
    "text": "You need to implement the delivery service telemetry data.  \n  \nHow should you configure the solution?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "API Azure Cosmos DB dành cho NoSQL hỗ trợ ngôn ngữ truy vấn SQL gốc, đáp ứng yêu cầu về truy vấn SQL. Sử dụng biển số xe làm khóa phân vùng sẽ nhóm dữ liệu từ xa của từng phương tiện đồng thời cung cấp khóa số lượng cao giúp phân phối dữ liệu hiệu quả hơn dung lượng gói hoặc tọa độ; ID mục thường sẽ tạo các phân vùng logic một mục.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 38",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/38-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-39",
    "questionNumber": 39,
    "text": "You have a Standard-tier Azure Cache for Redis instance named `redis1` that uses the default configuration.  \n  \nYou need to configure a Maxmemory policy to increase the cache capacity available for read operations.  \n  \nHow should you configure the Maxmemory policy?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Decrease the value of maxmemory-reserved."
      },
      {
        "key": "B",
        "text": "Increase the value of maxmemory-reserved."
      },
      {
        "key": "C",
        "text": "Set the Maxmemory policy to noeviction."
      },
      {
        "key": "D",
        "text": "Set the Maxmemory policy to volatile-lru."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "`maxmemory-reserved` là bộ nhớ dành riêng cho các hoạt động không có bộ đệm, chẳng hạn như sao chép trong quá trình chuyển đổi dự phòng và không khả dụng cho dữ liệu được lưu trong bộ nhớ đệm. Việc giảm phần đặt trước đó sẽ làm tăng bộ nhớ có sẵn để lưu trữ các mục trong bộ đệm. Chính sách loại bỏ bộ nhớ tối đa kiểm soát những khóa nào sẽ bị xóa khi bộ đệm đạt đến giới hạn bộ nhớ; chúng không làm tăng dung lượng bộ nhớ dành cho dữ liệu được lưu trong bộ nhớ đệm.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 39",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/39-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-40",
    "questionNumber": 40,
    "text": "You are using PowerShell to create an Azure key vault. Deleted objects in the key vault must be retained for a specified period of 90 days.  \n  \nWhich two parameters must be used together to satisfy this requirement? (Choose two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "EnabledForDeployment"
      },
      {
        "key": "B",
        "text": "EnablePurgeProtection"
      },
      {
        "key": "C",
        "text": "EnabledForTemplateDeployment"
      },
      {
        "key": "D",
        "text": "EnableSoftDelete"
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "Xóa mềm sẽ giữ lại các đối tượng Azure Key Vault đã xóa trong khoảng thời gian lưu giữ và tính năng bảo vệ thanh lọc sẽ ngăn chặn việc xóa vĩnh viễn chúng trong khoảng thời gian đó. Bảo vệ thanh lọc phụ thuộc vào xóa mềm; cài đặt triển khai và triển khai mẫu không kiểm soát việc lưu giữ đối tượng đã xóa.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 40",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/40-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-41",
    "questionNumber": 41,
    "text": "You provisioned an Azure Cosmos DB for NoSQL account named account1 using the default consistency level.  \n  \nYou plan to set consistency on a per-request basis. For both read and write operations to account1, the requested level is consistent prefix.  \n  \nIdentify the resulting consistency level for read and write operations.  \n  \nWhich levels should you configure?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Azure Cosmos DB dành cho NoSQL sử dụng tính nhất quán của Phiên theo mặc định. Yêu cầu đọc có thể chỉ định mức độ nhất quán yếu hơn, do đó các lần đọc có thể sử dụng tiền tố nhất quán. Việc ghi luôn sử dụng mức nhất quán được định cấu hình cho tài khoản và không hỗ trợ ghi đè theo yêu cầu, do đó việc ghi sử dụng tính nhất quán của Phiên.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 41",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/41-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-42",
    "questionNumber": 42,
    "text": "Solution: Use Blob storage events to trigger photo processing.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Các sự kiện Azure Blob Storage được phân phối thông qua Azure Event Grid để xử lý theo hướng sự kiện gần như theo thời gian thực. Tài khoản lưu trữ v2 đa năng hỗ trợ tích hợp Lưới sự kiện và xử lý hình ảnh là một kịch bản sự kiện Blob Storage được ghi lại.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 42",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/42-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-43",
    "questionNumber": 43,
    "text": "Solution: Change the Azure Storage account to a BlockBlobStorage storage account.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Việc thay đổi tài khoản General-Purpose v2 thành tài khoản BlockBlobStorage không cung cấp cơ chế phát hiện ảnh tải lên và bắt đầu xử lý hình ảnh trong vòng một phút. Các loại tài khoản Azure Storage cũng không thể thay đổi thành loại khác; chuyển sang loại khác yêu cầu tạo tài khoản mới và sao chép dữ liệu. [Azure Storage account overview](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-overview)",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 43",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/43-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-44",
    "questionNumber": 44,
    "text": "Proposed solution: Move the photo-processing workload to an Azure Function that is triggered by the blob upload.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Trình kích hoạt Azure Blob Storage tiêu chuẩn sử dụng tính năng bỏ phiếu và không đảm bảo rằng quá trình xử lý sẽ bắt đầu trong vòng một phút sau khi tải lên blob. Cần có trình kích hoạt dựa trên sự kiện có độ trễ thấp hơn, chẳng hạn như trình kích hoạt Blob dựa trên Lưới sự kiện, để đáp ứng yêu cầu bắt đầu dưới phút.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 44",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/44-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-45",
    "questionNumber": 45,
    "text": "Solution: Create an Azure Function app that uses the Consumption hosting model and is triggered by the blob upload.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Trình kích hoạt Blob Storage dựa trên cuộc bỏ phiếu mặc định trên gói Tiêu thụ Azure Functions có thể trì hoãn việc xử lý blob mới tối đa 10 phút sau khi ứng dụng chức năng không hoạt động. Do đó, nó không thể đảm bảo rằng quá trình xử lý ảnh sẽ bắt đầu trong vòng một phút; trình kích hoạt Blob dựa trên sự kiện sử dụng Lưới sự kiện mang lại độ trễ thấp hơn.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 45",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/45-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-46",
    "questionNumber": 46,
    "text": "Solution: Use the Azure Blob Storage change feed to initiate photo processing.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Bản ghi nguồn cấp dữ liệu thay đổi Azure Blob Storage sẽ có sẵn trong vòng vài phút sau khi thay đổi, thay vì cung cấp trình kích hoạt dưới phút. Do đó, nó không thể đảm bảo quá trình xử lý ảnh bắt đầu trong vòng chưa đầy một phút.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 46",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/46-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-47",
    "questionNumber": 47,
    "text": "You are creating a CLI script that provisions an Azure web app and related Azure App Service services. The web app uses the following variables:  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783790233990-8nrkv27e.png)  \n  \nYou need to automatically deploy code from GitHub to the newly created web app. How should you complete the script?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "`az appservice plan create` tạo gói Dịch vụ ứng dụng MIỄN PHÍ. `az webapp create` tạo ứng dụng web và yêu cầu gói do `--plan $webappname` chỉ định. `az webapp source config` định cấu hình triển khai liên tục từ kho lưu trữ GitHub được cung cấp; `--repo-url`, `--branch master` và `--manual-integration` cung cấp cài đặt triển khai kho lưu trữ.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783790233990-8nrkv27e.png",
    "sourceTitle": "Examcademy AZ-204 Question 47",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/47-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-48",
    "questionNumber": 48,
    "text": "Contoso, Ltd. provides an API to customers by using Azure API Management (APIM). The API authorizes users by using a JWT token.  \n  \nYou must implement response caching for the APIM gateway. The caching mechanism must identify the client user ID that accesses data for a given location and cache the response for that user ID.  \n  \nYou need to add the following policies to the policies file:  \n  \n- a `set-variable` policy to store the detected user identity  \n- a `cache-lookup-value` policy  \n- a `cache-store-value` policy  \n- a `find-and-replace` policy to update the response body with the user profile information  \n  \nTo which policy section should you add the policies? Each section may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "set-variable",
        "text": "Set-variable",
        "correctAnswer": "A"
      },
      {
        "id": "cache-lookup-value",
        "text": "Cache-lookup-value",
        "correctAnswer": "A"
      },
      {
        "id": "cache-store-value",
        "text": "Cache-store-value",
        "correctAnswer": "B"
      },
      {
        "id": "find-and-replace",
        "text": "Find-and-replace",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Inbound"
      },
      {
        "key": "B",
        "text": "Outbound"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Inbound"
      },
      {
        "key": "B",
        "text": "Outbound"
      }
    ],
    "correctAnswers": [
      "set-variable=A",
      "cache-lookup-value=A",
      "cache-store-value=B",
      "find-and-replace=B"
    ],
    "explanation": "`set-variable` trích xuất và lưu danh tính JWT trước khi xử lý phụ trợ và `cache-lookup-value` kiểm tra giá trị được lưu trong bộ nhớ đệm dành riêng cho người dùng theo yêu cầu gửi đến. `cache-store-value` lưu trữ kết quả sau khi có sẵn và `find-and-replace` sửa đổi nội dung phản hồi; cả hai đều thuộc phần outbound.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 48",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/48-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-49",
    "questionNumber": 49,
    "text": "You have a Linux container-based console application that uploads image files from customer sites worldwide. A back-end system running on Azure virtual machines processes the images by using the Azure Blobs API.  \n  \nYou aren't allowed to modify the application.  \n  \nSome customer sites have only phone-based internet connections.  \n  \nYou need to configure the console application to access the images.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure BlobFuse"
      },
      {
        "key": "B",
        "text": "Azure Disks"
      },
      {
        "key": "C",
        "text": "Azure Storage Network File System (NFS) 3.0 support"
      },
      {
        "key": "D",
        "text": "Azure Files"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Azure BlobFuse gắn bộ chứa Azure Blob Storage dưới dạng hệ thống tệp trong Linux và chuyển các hoạt động của hệ thống tệp thành lệnh gọi API Azure Blob REST. Điều này cho phép ứng dụng Linux không thay đổi hoạt động với kho lưu trữ hình ảnh dựa trên blob qua HTTPS mà không yêu cầu kết nối SMB hoặc NFS.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 49",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/49-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-50",
    "questionNumber": 50,
    "text": "You have an application that uses Azure Blob storage.  \n  \nYou need to update the metadata of the blobs.  \n  \nWhich three methods should you use to develop the solution? Arrange the appropriate methods in the correct order.",
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
        "correctAnswer": "A"
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
        "text": "Metadata.Add"
      },
      {
        "key": "B",
        "text": "SetMetadataAsync"
      },
      {
        "key": "C",
        "text": "FetchAttributesAsync"
      },
      {
        "key": "D",
        "text": "UploadFileStream"
      },
      {
        "key": "E",
        "text": "SetPropertiesAsync"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Metadata.Add"
      },
      {
        "key": "B",
        "text": "SetMetadataAsync"
      },
      {
        "key": "C",
        "text": "FetchAttributesAsync"
      },
      {
        "key": "D",
        "text": "UploadFileStream"
      },
      {
        "key": "E",
        "text": "SetPropertiesAsync"
      }
    ],
    "correctAnswers": [
      "slot1=C",
      "slot2=A",
      "slot3=B"
    ],
    "explanation": "Để cập nhật siêu dữ liệu blob hiện có, trước tiên hãy truy xuất các thuộc tính và siêu dữ liệu blob, sau đó thêm mục nhập siêu dữ liệu vào bộ sưu tập Siêu dữ liệu của blob và cuối cùng gọi SetMetadataAsync để lưu siêu dữ liệu đã sửa đổi vào Azure Blob Storage. UploadFileStream thay đổi nội dung blob, trong khi SetPropertiesAsync áp dụng thuộc tính blob thay vì bộ sưu tập siêu dữ liệu.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 50",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/50-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-51",
    "questionNumber": 51,
    "text": "You need to retain the user agreements.  \n  \nWhere should you store an agreement once it has been completed?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Storage queue"
      },
      {
        "key": "B",
        "text": "Azure Event Hub"
      },
      {
        "key": "C",
        "text": "Azure Service Bus topic"
      },
      {
        "key": "D",
        "text": "Azure Event Grid topic"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Hàng đợi Bộ lưu trữ Azure lưu giữ các tin nhắn một cách lâu dài cho đến khi người tiêu dùng truy xuất và xử lý chúng, giúp chúng phù hợp để duy trì một thỏa thuận đã hoàn chỉnh cho việc xử lý xuôi dòng không đồng bộ.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 51",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/51-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-52",
    "questionNumber": 52,
    "text": "You need to address the capacity issue.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Convert the trigger on the Azure Function to an Azure Blob storage trigger"
      },
      {
        "key": "B",
        "text": "Ensure that the consumption plan is configured correctly to allow scaling"
      },
      {
        "key": "C",
        "text": "Move the Azure Function to a dedicated App Service Plan"
      },
      {
        "key": "D",
        "text": "Update the loop starting on line PC09 to process items in parallel"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Xử lý song song cho phép xử lý đồng thời các mục độc lập, tăng thông lượng của Chức năng Azure và giảm bớt tắc nghẽn do thực thi vòng lặp tuần tự gây ra. Azure Functions hỗ trợ xử lý đồng thời và tính đồng thời ảnh hưởng trực tiếp đến thông lượng và hành vi quy mô.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 52",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/52-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-53",
    "questionNumber": 53,
    "text": "You have an existing Azure storage account that holds large volumes of data across multiple containers.  \n  \nYou need to copy all data from the existing storage account to a new storage account. The copy process must meet these requirements:  \n  \n- Automate the data movement.  \n- Minimize the user input needed to perform the operation.  \n- Ensure the data movement process can be recovered.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "AzCopy"
      },
      {
        "key": "B",
        "text": "Azure Storage Explorer"
      },
      {
        "key": "C",
        "text": "Azure portal"
      },
      {
        "key": "D",
        "text": ".NET Storage Client Library"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AzCopy sao chép dữ liệu giữa các tài khoản lưu trữ Azure và có thể được tích hợp vào các tập lệnh tự động. Nó tạo ra một kế hoạch công việc và các tệp nhật ký cho từng công việc; một công việc bị lỗi hoặc bị hủy có thể được tiếp tục bằng cách sử dụng ID công việc của nó, điều này giúp cho quá trình truyền có thể được phục hồi.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 53",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/53-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-54",
    "questionNumber": 54,
    "text": "You develop and deploy a web app to Azure App Service in a production environment. The app is scaled out to four instances, and a staging slot is configured to support changes.  \n  \nYou must monitor the web app in this environment to meet these requirements:  \n  \n- Increase web app availability by rerouting requests away from instances that return error status codes, and automatically replace instances that stay in an error state for one hour.  \n- Send web server logs, application logs, standard output, and standard error messages to an Azure Storage blob account.  \n  \nYou need to configure Azure App Service.  \n  \nWhich values should you use? Each configuration value may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "increase_availability",
        "text": "Increase availability",
        "correctAnswer": "A"
      },
      {
        "id": "send_logs",
        "text": "Send logs",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Health check"
      },
      {
        "key": "B",
        "text": "Diagnostic setting"
      },
      {
        "key": "C",
        "text": "Deployment slot"
      },
      {
        "key": "D",
        "text": "Autoscale rule"
      },
      {
        "key": "E",
        "text": "Zone redundancy"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Health check"
      },
      {
        "key": "B",
        "text": "Diagnostic setting"
      },
      {
        "key": "C",
        "text": "Deployment slot"
      },
      {
        "key": "D",
        "text": "Autoscale rule"
      },
      {
        "key": "E",
        "text": "Zone redundancy"
      }
    ],
    "correctAnswers": [
      "increase_availability=A",
      "send_logs=B"
    ],
    "explanation": "Kiểm tra tình trạng dịch vụ ứng dụng sẽ loại bỏ các phiên bản không tốt khỏi cân bằng tải và thay thế một phiên bản không ổn định trong một giờ. Cài đặt chẩn đoán Azure Monitor xuất ứng dụng Dịch vụ ứng dụng, máy chủ HTTP/máy chủ web và danh mục nhật ký bảng điều khiển sang tài khoản Bộ nhớ đã định cấu hình.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 54",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/54-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-55",
    "questionNumber": 55,
    "text": "You are implementing an order-processing system. A point-of-sale application publishes orders to topics in an Azure Service Bus queue. The topic’s Label property contains the following data:  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783790176226-y2hh0d7b.png)  \n  \nThe system has these subscription requirements:  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783790179604-rtxp8rn2.png)  \n  \nChoose filter types that implement the requirements while maximizing filter-evaluation throughput. Each filter type can be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "future_orders",
        "text": "FutureOrders",
        "correctAnswer": "A"
      },
      {
        "id": "high_priority_orders",
        "text": "HighPriorityOrders",
        "correctAnswer": "A"
      },
      {
        "id": "international_orders",
        "text": "InternationalOrders",
        "correctAnswer": "A"
      },
      {
        "id": "high_quantity_orders",
        "text": "HighQuantityOrders",
        "correctAnswer": "A"
      },
      {
        "id": "all_orders",
        "text": "AllOrders",
        "correctAnswer": "C"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "SQLFilter"
      },
      {
        "key": "B",
        "text": "CorrelationFilter"
      },
      {
        "key": "C",
        "text": "No Filter"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "SQLFilter"
      },
      {
        "key": "B",
        "text": "CorrelationFilter"
      },
      {
        "key": "C",
        "text": "No Filter"
      }
    ],
    "correctAnswers": [
      "future_orders=A",
      "high_priority_orders=A",
      "international_orders=A",
      "high_quantity_orders=A",
      "all_orders=C"
    ],
    "explanation": "Bộ lọc SQL hỗ trợ OR, bất đẳng thức và so sánh số, do đó, chúng có thể chọn các đơn hàng quốc tế hoặc có mức độ ưu tiên cao, các đơn hàng có địa điểm giao hàng bên ngoài Hoa Kỳ và các đơn hàng có số lượng lớn hơn 100. Điều kiện sai SQL sẽ ngăn FutureOrders nhận tin nhắn. Việc không lọc đăng ký sẽ áp dụng quy tắc đúng mặc định và phân phối mọi đơn hàng cho AllOrders. Các bộ lọc tương quan hiệu quả hơn đối với việc so khớp chỉ bằng nhau, nhưng không có yêu cầu điều kiện nào trong số này chỉ là bằng nhau.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783790176226-y2hh0d7b.png",
    "sourceTitle": "Examcademy AZ-204 Question 55",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/55-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-56",
    "questionNumber": 56,
    "text": "You administer an Azure Cosmos DB for NoSQL API account named account1. The account includes a database named db1, which contains a container named container1. You configure account1 to use session consistency.  \n  \nYou plan to develop an application named App1 that accesses container1. Individual App1 instances must perform both reads and writes. App1 must enable multiple nodes to participate in the same session.  \n  \nYou need to configure an object that shares the session token among the nodes.  \n  \nWhich object should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Document response"
      },
      {
        "key": "B",
        "text": "Request options"
      },
      {
        "key": "C",
        "text": "Feed options"
      },
      {
        "key": "D",
        "text": "Connection policy"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Tính nhất quán của phiên sử dụng mã thông báo phiên được tạo bằng cách ghi. Nhiều nút ứng dụng có thể tham gia vào một phiên bằng cách truyền mã thông báo đó và đặt nó cho các yêu cầu tiếp theo thông qua `RequestOptions.SessionToken`; điều này duy trì hành vi đọc của riêng bạn khi một nút khác xử lý yêu cầu sau đó.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 56",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/56-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-57",
    "questionNumber": 57,
    "text": "You are developing a user portal for a company.  \n  \nYou need to create a portal report that lists information about employees who are subject-matter experts on a specific topic. You must ensure that administrators retain full control over, and consent to, the data.  \n  \nWhich technology should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Graph data connect"
      },
      {
        "key": "B",
        "text": "Microsoft Graph API"
      },
      {
        "key": "C",
        "text": "Microsoft Graph connectors"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Microsoft Graph Data Connect cung cấp mô hình chấp thuận và kiểm soát chi tiết cho dữ liệu Microsoft 365. Quản trị viên có thể xem xét và phê duyệt các ứng dụng cũng như các tập dữ liệu, cột, phạm vi và đích đến cụ thể được phép truy cập, sao cho phù hợp với kịch bản báo cáo thông tin nhân viên được quản lý.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 57",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/57-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-58",
    "questionNumber": 58,
    "text": "You have a public-facing, on-premises website named www.contoso.com.  \n  \nYou plan to use Application Insights availability tests to test the availability of www.contoso.com.  \n  \nYou need to configure a test that generates HTTP POST requests with custom headers. The solution must minimize development effort.  \n  \nWhich type of test should you configure?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Multi-step web test"
      },
      {
        "key": "B",
        "text": "Standard test"
      },
      {
        "key": "C",
        "text": "URL ping test"
      },
      {
        "key": "D",
        "text": "Custom TrackAvailability test"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Kiểm tra tính khả dụng tiêu chuẩn hỗ trợ các động từ yêu cầu HTTP bao gồm POST, tiêu đề tùy chỉnh và dữ liệu yêu cầu tùy chỉnh. Nó có thể được cấu hình mà không cần viết và duy trì mã tùy chỉnh cần thiết cho thử nghiệm TrackAvailability tùy chỉnh, giảm thiểu nỗ lực phát triển.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 58",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/58-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-59",
    "questionNumber": 59,
    "text": "You develop and deploy an Azure Logic app that invokes an Azure Function app. The Azure Function app contains an OpenAPI (Swagger) definition and uses an Azure Blob storage account. All resources are secured by using Azure Active Directory (Azure AD).  \n  \nThe Azure Logic app must securely access the Azure Blob storage account. Azure AD resources must remain if the Azure Logic app is deleted.  \n  \nYou need to secure the Azure Logic app.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create a user-assigned managed identity and assign role-based access controls."
      },
      {
        "key": "B",
        "text": "Create an Azure AD custom role and assign the role to the Azure Blob storage account."
      },
      {
        "key": "C",
        "text": "Create an Azure Key Vault and issue a client certificate."
      },
      {
        "key": "D",
        "text": "Create a system-assigned managed identity and issue a client certificate."
      },
      {
        "key": "E",
        "text": "Create an Azure AD custom role and assign role-based access controls."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "user-assigned managed identity độc lập với vòng đời tài nguyên của Ứng dụng Logic, do đó việc xóa Ứng dụng Logic sẽ không tự động xóa danh tính trong Microsoft Entra ID. Việc chỉ định danh tính với vai trò Azure RBAC thích hợp trên tài khoản lưu trữ Blob sẽ cấp quyền truy cập an toàn, không cần thông tin xác thực vào tài nguyên lưu trữ.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 59",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/59-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-60",
    "questionNumber": 60,
    "text": "You are developing an e-Commerce web app.  \n  \nYou want to use Azure Key Vault to make sure that sign-ins to the e-Commerce web app are protected by using Azure App Service authentication and Azure Active Directory (AAD).  \n  \nWhat should you do on the e-Commerce web app?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Run the az keyvault secret command."
      },
      {
        "key": "B",
        "text": "Enable Azure AD Connect."
      },
      {
        "key": "C",
        "text": "Enable Managed Service Identity (MSI)."
      },
      {
        "key": "D",
        "text": "Create an Azure AD service principal."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "managed identity cung cấp cho ứng dụng Azure App Service danh tính Microsoft Entra được quản lý tự động có thể xác thực với Azure Key Vault mà không cần nhúng hoặc xoay thông tin xác thực. Việc cấp cho danh tính đó quyền bí mật Key Vault cần thiết sẽ cho phép ứng dụng truy xuất các bí mật liên quan đến đăng nhập một cách an toàn.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 60",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/60-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-61",
    "questionNumber": 61,
    "text": "You develop applications that integrate with a Microsoft Entra tenant.  \n  \nYou plan to implement a permission classification within the tenant.  \n  \nYou need to choose permissions to include in the classification.  \n  \nWhich permissions should you choose?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "app-only access permissions that require admin consent"
      },
      {
        "key": "B",
        "text": "delegated permissions that require only user consent"
      },
      {
        "key": "C",
        "text": "app-only access permissions that require only user consent"
      },
      {
        "key": "D",
        "text": "delegated permissions that require admin consent"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Phân loại quyền của Microsoft Entra chỉ áp dụng cho các quyền được ủy quyền không yêu cầu sự đồng ý của quản trị viên. Những phân loại này hỗ trợ các chính sách về sự đồng ý của người thuê quản lý những quyền mà người dùng có thể đồng ý.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 61",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/61-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-62",
    "questionNumber": 62,
    "text": "You need to examine the HTTP server log output to resolve the issue with the ContentUploadService.  \n  \nWhich command should you use first?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "az webapp log"
      },
      {
        "key": "B",
        "text": "az ams live-output"
      },
      {
        "key": "C",
        "text": "az monitor activity-log"
      },
      {
        "key": "D",
        "text": "az container attach"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "`az container attach` gắn vào một bộ chứa trong nhóm bộ chứa Azure Container Instances và truyền đầu ra tiêu chuẩn cũng như lỗi tiêu chuẩn của nó tới bảng điều khiển cục bộ, cung cấp đầu ra chẩn đoán cấp ứng dụng cần thiết để điều tra sự cố máy chủ HTTP.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 62",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/62-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-63",
    "questionNumber": 63,
    "text": "You need to configure Azure Service Bus integration with Event Grid.  \n  \nWhich Azure Service Bus settings should you use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Bus dịch vụ chỉ phát ra các sự kiện tới Lưới sự kiện từ không gian tên Premium. Việc định cấu hình tích hợp Lưới dịch vụ với sự kiện này yêu cầu quyền truy cập của Người đóng góp vào không gian tên Bus dịch vụ; Azure Service Bus Chủ sở hữu dữ liệu và Người nhận dữ liệu là các vai trò trên mặt phẳng dữ liệu và không cung cấp quyền truy cập quản lý tài nguyên cần thiết.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 63",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/63-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-64",
    "questionNumber": 64,
    "text": "You are developing a Python application that renders images and uses GPU resources to optimize rendering.  \n  \nThe application must be deployed in a Linux container, stop when image rendering finishes, and minimize cost.  \n  \nYou need to deploy the application to Azure.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Azure Container Instances phù hợp với khối lượng công việc bộ chứa Linux hỗ trợ GPU trong thời gian ngắn và được tính phí trong khi tác vụ thực thi. Chính sách khởi động lại nhóm vùng chứa của `Never` chạy vùng chứa tối đa một lần; khi quá trình của nó hoàn tất, vùng chứa sẽ bị chấm dứt thay vì khởi động lại.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 64",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/64-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-65",
    "questionNumber": 65,
    "text": "You are developing a .NET Core MVC application that lets customers research independent holiday accommodation providers.  \n  \nYou want to implement Azure Search so that the application can search the index with various criteria to find documents relating to accommodation.  \n  \nYou want the application to let customers search the index by using regular expressions.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Configure the SearchMode property of the SearchParameters class."
      },
      {
        "key": "B",
        "text": "Configure the QueryType property of the SearchParameters class."
      },
      {
        "key": "C",
        "text": "Configure the Facets property of the SearchParameters class."
      },
      {
        "key": "D",
        "text": "Configure the Filter property of the SearchParameters class."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Tìm kiếm biểu thức chính quy trong Azure AI Search yêu cầu cú pháp truy vấn Lucene đầy đủ. Đặt thuộc tính `QueryType` để sử dụng trình phân tích cú pháp truy vấn đầy đủ; `SearchMode`, `Facets` và `Filter` không kích hoạt cú pháp biểu thức chính quy.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 65",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/65-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-66",
    "questionNumber": 66,
    "text": "A company is building a gaming platform where users can join teams for online play and view leaderboards containing player statistics. The solution has an entity named `Team`.  \n  \nAn Azure Redis Cache instance is planned to improve the efficiency of data operations for entities that rarely change. The cache must be invalidated when team data changes.  \n  \nHow should the code be completed?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Trong StackExchange.Redis, `ConnectionMultiplexer.GetDatabase()` trả về `IDatabase`. `IDatabase.KeyDelete` xóa khóa Redis được chỉ định, điều này làm mất hiệu lực dữ liệu `Team` được lưu trong bộ nhớ cache sau khi thay đổi.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 66",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/66-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-67",
    "questionNumber": 67,
    "text": "HOTSPOT –  \n  \nYou need to configure Azure Cosmos DB. Which settings should you use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Azure Cosmos DB cung cấp năm mức độ nhất quán; Tính nhất quán mạnh mẽ trả về phiên bản cam kết gần đây nhất của một mục. API SQL, hiện được gọi là API cho NoSQL, là API truy vấn tài liệu gốc của Cosmos DB.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 67",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/67-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-68",
    "questionNumber": 68,
    "text": "You are developing an application and have an Azure user account with access to two subscriptions.  \n  \nYou need to retrieve a storage account key secret from Azure Key Vault.  \n  \nIn what order should you arrange the PowerShell commands to develop the solution?",
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
      },
      {
        "id": "step4",
        "text": "Slot 4:",
        "correctAnswer": "D"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "$$secretvalue = ConvertTo-SecureString\n$storagekey -AsPlainText\n-Force\n    Set-AzKeyVaultSecret -VaultName\n$vaultName -Name $secretName\n-SecretValue $secretvalue"
      },
      {
        "key": "B",
        "text": "Get-AzStorageAccountKey -\nResourceGroupName $resGroup -Name\n$storAcct"
      },
      {
        "key": "C",
        "text": "Set-AzContext -SubscriptionId\n$subscriptionID"
      },
      {
        "key": "D",
        "text": "Get-AzKeyVaultSecret -VaultName\n$vaultName"
      },
      {
        "key": "E",
        "text": "Get-AzSubscription"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "$$secretvalue = ConvertTo-SecureString\n$storagekey -AsPlainText\n-Force\n    Set-AzKeyVaultSecret -VaultName\n$vaultName -Name $secretName\n-SecretValue $secretvalue"
      },
      {
        "key": "B",
        "text": "Get-AzStorageAccountKey -\nResourceGroupName $resGroup -Name\n$storAcct"
      },
      {
        "key": "C",
        "text": "Set-AzContext -SubscriptionId\n$subscriptionID"
      },
      {
        "key": "D",
        "text": "Get-AzKeyVaultSecret -VaultName\n$vaultName"
      },
      {
        "key": "E",
        "text": "Get-AzSubscription"
      }
    ],
    "correctAnswers": [
      "step1=C",
      "step2=B",
      "step3=A",
      "step4=D"
    ],
    "explanation": "Set-AzContext chọn đăng ký trong đó tài khoản lưu trữ và Key Vault được truy cập. Get-AzStorageAccountKey lấy khóa lưu trữ; ConvertTo-SecureString chuyển đổi nó thành loại chuỗi bảo mật theo yêu cầu của Set-AzKeyVaultSecret; và Get-AzKeyVaultSecret truy xuất bí mật Key Vault thu được. Get-AzSubscription chỉ liệt kê các đăng ký có thể truy cập và không bắt buộc trong trình tự này.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 68",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/68-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-69",
    "questionNumber": 69,
    "text": "You develop and deploy an Azure Logic App that calls an Azure Function app. The Azure Function App includes an OpenAPI (Swagger) definition and uses an Azure Blob storage account. All resources are secured by using Azure Active Directory (Azure AD).  \n  \nThe Logic App must use Azure Monitor logs to record and store runtime-data and event information. Store the logs in the Azure Blob storage account.  \n  \nYou need to configure Azure Monitor logs and collect diagnostic data for the Azure Logic App.  \n  \nWhich three actions should you perform, in sequence?",
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
        "correctAnswer": "F"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Create action groups and alert rules."
      },
      {
        "key": "B",
        "text": "Create a Log Analytics workspace."
      },
      {
        "key": "C",
        "text": "Install the Logic Apps Management solution."
      },
      {
        "key": "D",
        "text": "Add a diagnostic setting to the Azure Function App."
      },
      {
        "key": "E",
        "text": "Create an Azure storage account."
      },
      {
        "key": "F",
        "text": "Add a diagnostic setting to the Azure Logic App."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Create action groups and alert rules."
      },
      {
        "key": "B",
        "text": "Create a Log Analytics workspace."
      },
      {
        "key": "C",
        "text": "Install the Logic Apps Management solution."
      },
      {
        "key": "D",
        "text": "Add a diagnostic setting to the Azure Function App."
      },
      {
        "key": "E",
        "text": "Create an Azure storage account."
      },
      {
        "key": "F",
        "text": "Add a diagnostic setting to the Azure Logic App."
      }
    ],
    "correctAnswers": [
      "step1=B",
      "step2=C",
      "step3=F"
    ],
    "explanation": "Không gian làm việc Log Analytics phải tồn tại trước khi có thể cài đặt giải pháp Quản lý ứng dụng logic. Cài đặt chẩn đoán trên Ứng dụng Logic cho phép thu thập dữ liệu chẩn đoán thời gian chạy quy trình công việc và có thể định tuyến dữ liệu đó đến tài khoản Bộ lưu trữ Azure hiện có để lưu trữ. Chẩn đoán Ứng dụng Chức năng và cấu hình nhóm hành động/cảnh báo không liên quan đến việc thu thập chẩn đoán Ứng dụng Logic.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 69",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/69-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-70",
    "questionNumber": 70,
    "text": "You are developing a website by using a web app. The website stores configuration data in Azure App Configuration.  \n  \nAzure App Configuration access is configured to authenticate by using the web app's identity. Security requirements state that no other authentication systems may be used.  \n  \nYou need to load the configuration data from Azure App Configuration. How should you complete the code?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "AddAzureAppConfiguration đăng ký nhà cung cấp cấu hình Cấu hình ứng dụng Azure. ManagedIdentityCredential chỉ xác thực thông qua Azure managed identity, đáp ứng yêu cầu sử dụng danh tính ứng dụng web mà không kích hoạt các cơ chế xác thực khác.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 70",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/70-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-71",
    "questionNumber": 71,
    "text": "You have an Azure subscription named Sub1 that includes a resource group named RG1 and a Service Bus queue named SB1.  \n  \nYou plan to implement an Azure Event Grid push event subscription that delivers an event to SB1 whenever a resource in RG1 is created, modified, or deleted. You must minimize development and configuration effort.  \n  \nYou need to create an Event Grid topic for the planned implementation.  \n  \nWhich event topic type should you create?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "event domain"
      },
      {
        "key": "B",
        "text": "custom"
      },
      {
        "key": "C",
        "text": "system"
      },
      {
        "key": "D",
        "text": "namespace"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Các nhóm tài nguyên Azure được hỗ trợ các nguồn chủ đề hệ thống Azure Event Grid và các sự kiện thay đổi tài nguyên của chúng được Azure xuất bản. Do đó, chủ đề hệ thống cung cấp nguồn cần thiết mà không cần xây dựng nhà xuất bản sự kiện tùy chỉnh, trong khi đăng ký sự kiện Lưới sự kiện có thể phân phối trực tiếp các sự kiện đến hàng đợi Xe buýt dịch vụ.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 71",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/71-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-72",
    "questionNumber": 72,
    "text": "You intend to deploy an Azure Container App.  \n  \nYou need to configure the container app to support session affinity.  \n  \nWhich ingress type and revision mode should you assign to the container app?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "HTTP ingress type and multiple revision mode"
      },
      {
        "key": "B",
        "text": "HTTP ingress type and single revision mode"
      },
      {
        "key": "C",
        "text": "TCP ingress type and multiple revision mode"
      },
      {
        "key": "D",
        "text": "TCP ingress type and single revision mode"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Mối quan hệ phiên Azure Container Apps (phiên cố định) dựa trên cookie và chỉ được hỗ trợ khi bật tính năng nhập HTTP và ứng dụng sử dụng chế độ sửa đổi duy nhất.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 72",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/72-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-73",
    "questionNumber": 73,
    "text": "You need to retrieve the database connection string.  \n  \nWhich values should you use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "URI bí mật Azure Key Vault sử dụng tên vault theo sau là `/secrets/` và tên bí mật. `PostgreSQLConn` xác định bí mật chuỗi kết nối cơ sở dữ liệu trong kho `cpandlkeyvault`. Các ứng dụng sử dụng tham chiếu Key Vault làm giá trị cài đặt môi trường/ứng dụng.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 73",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/73-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-74",
    "questionNumber": 74,
    "text": "You are developing several APIs hosted by Azure API Management (APIM).  \n  \nYou must make several minor, non-breaking changes to one of the APIs. The API changes must meet the following requirements:  \n  \n- Must not disrupt API callers.  \n- Enable rollback if issues are found.  \n- Be documented so developers can understand what is new.  \n- Be tested before publishing.  \n  \nYou need to update the API.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Configure and apply header-based versioning."
      },
      {
        "key": "B",
        "text": "Create and publish a product."
      },
      {
        "key": "C",
        "text": "Configure and apply a custom policy."
      },
      {
        "key": "D",
        "text": "Add a new revision to the API."
      },
      {
        "key": "E",
        "text": "Configure and apply query string-based versioning."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Các bản sửa đổi Quản lý API Azure hỗ trợ các thay đổi được kiểm soát, không vi phạm mà không làm gián đoạn người gọi bản sửa đổi hiện tại. Một bản sửa đổi có thể được chỉnh sửa và kiểm tra trước khi nó trở thành hiện hành, được xuất bản với mục nhập nhật ký thay đổi dành cho nhà phát triển và được khôi phục bằng cách tạo bản sửa đổi trước đó thành hiện hành. [Revisions in Azure API Management](https://learn.microsoft.com/en-us/azure/api-management/api-management-revisions)",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 74",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/74-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-75",
    "questionNumber": 75,
    "text": "You develop and deploy an Azure App Service web app in a production environment. You enable the Always On setting and the Application Insights site extensions.  \n  \nYou deploy a code update and observe multiple failed requests and exceptions in the web app.  \n  \nYou need to validate the web app's performance and failure counts in near real time.  \n  \nWhich Application Insights tool should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Profiler"
      },
      {
        "key": "B",
        "text": "Smart Detection"
      },
      {
        "key": "C",
        "text": "Live Metrics Stream"
      },
      {
        "key": "D",
        "text": "Application Map"
      },
      {
        "key": "E",
        "text": "Snapshot Debugger"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Luồng số liệu trực tiếp Application Insights cung cấp phép đo từ xa gần như theo thời gian thực cho một ứng dụng web đang chạy, bao gồm số liệu hiệu suất, số lượng yêu cầu không thành công và các trường hợp ngoại lệ. Nó đặc biệt phù hợp để xác thực một bản cập nhật đã triển khai đồng thời quan sát hiệu suất và số lượng lỗi.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 75",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/75-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-76",
    "questionNumber": 76,
    "text": "You are developing an application to collect delivery-driver telemetry: first name, last name, package count, item id, and current location coordinates. The application will store the data in Azure Cosmos DB.  \n  \nYou need to configure Azure Cosmos DB to query the data. Which values should you use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Azure Cosmos DB dành cho NoSQL, trước đây gọi là Core (SQL), lưu trữ tài liệu JSON và cung cấp hỗ trợ truy vấn SQL. Khóa phân vùng phải có nhiều giá trị và phân phối dữ liệu cũng như đơn vị yêu cầu một cách đồng đều; `item id` cung cấp lượng số cao hơn nhiều so với tên hoặc số lượng gói.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 76",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/76-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-77",
    "questionNumber": 77,
    "text": "You need to add YAML markup at line CS17 to ensure that the ContentUploadService can access Azure Storage access keys.  \n  \nHow should you complete the YAML markup? Each YAML segment may be used once, more than once, or not at all.",
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
        "correctAnswer": "D"
      },
      {
        "id": "slot3",
        "text": "Slot 3:",
        "correctAnswer": "A"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "secret"
      },
      {
        "key": "B",
        "text": "envVar"
      },
      {
        "key": "C",
        "text": "secretValues"
      },
      {
        "key": "D",
        "text": "volumes"
      },
      {
        "key": "E",
        "text": "volumeMounts"
      },
      {
        "key": "F",
        "text": "environmentVariables"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "secret"
      },
      {
        "key": "B",
        "text": "envVar"
      },
      {
        "key": "C",
        "text": "secretValues"
      },
      {
        "key": "D",
        "text": "volumes"
      },
      {
        "key": "E",
        "text": "volumeMounts"
      },
      {
        "key": "F",
        "text": "environmentVariables"
      }
    ],
    "correctAnswers": [
      "slot1=E",
      "slot2=D",
      "slot3=A"
    ],
    "explanation": "Azure Container Instances sử dụng `volumeMounts` để gắn ổ đĩa được đặt tên vào vùng chứa. Ổ đĩa được đặt tên được khai báo trong `volumes` và các mục nhập tên/giá trị tệp của ổ đĩa bí mật được đặt trong ánh xạ `secret` của nó. Giá trị được mã hóa được cung cấp dưới dạng giá trị cho mục nhập `key`.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 77",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/77-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-78",
    "questionNumber": 78,
    "text": "You manage a data-processing application that receives requests from an Azure Storage queue.  \n  \nYou need to control access to the queue and must meet these requirements:  \n  \n- Provide other applications with access to the Azure queue.  \n- Ensure you can revoke access to the queue without regenerating the storage account keys.  \n- Specify access at the queue level rather than at the storage account level.  \n  \nWhich type of shared access signature (SAS) should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Service SAS with a stored access policy"
      },
      {
        "key": "B",
        "text": "Account SAS"
      },
      {
        "key": "C",
        "text": "User Delegation SAS"
      },
      {
        "key": "D",
        "text": "Service SAS with ad hoc SAS"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "SAS dịch vụ có thể cấp quyền cho hàng đợi Lưu trữ Azure cụ thể. Việc liên kết nó với chính sách truy cập được lưu trữ trên hàng đợi đó cho phép thu hồi hoặc thay đổi quyền truy cập một cách tập trung bằng cách sửa đổi hoặc xóa chính sách mà không cần tạo lại khóa tài khoản lưu trữ. Chính sách truy cập được lưu trữ áp dụng cho mã thông báo SAS cấp dịch vụ và được hỗ trợ cho hàng đợi.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 78",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/78-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-79",
    "questionNumber": 79,
    "text": "$35",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "SaveScore will work with Cosmos DB.",
        "correctAnswer": "Yes"
      },
      {
        "id": "2",
        "text": "SaveScore will update and replace a record if one already exists with the same playerId and gameId.",
        "correctAnswer": "No"
      },
      {
        "id": "3",
        "text": "Leader board data for the game will be automatically partitioned using gameId.",
        "correctAnswer": "No"
      },
      {
        "id": "4",
        "text": "SaveScore will store the values for the gameId and playerId parameters in the database.",
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
      "3:No",
      "4:Yes"
    ],
    "explanation": "Azure Cosmos DB cho Bảng hỗ trợ các ứng dụng được viết cho bề mặt máy khách Azure Table Storage. Một thực thể bảng được xác định duy nhất bởi `PartitionKey` và `RowKey` của nó; `Insert` không thay thế một thực thể hiện có và việc phân vùng tuân theo khóa phân vùng thực thể thay vì tự động tuân theo đối số phương thức, chẳng hạn như `gameId`. Thực thể điểm được xây dựng từ các đối số được cung cấp sẽ lưu trữ mã nhận dạng trò chơi và người chơi.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 79",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/79-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-80",
    "questionNumber": 80,
    "text": "You are building several microservices to run on Azure Container Apps.  \n  \nYou need to monitor and diagnose the microservices.  \n  \nWhich features should you use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Azure Container Apps Nhật ký phát trực tuyến nhật ký bảng điều khiển vùng chứa gần thời gian thực. Bảng điều khiển vùng chứa kết nối với bảng điều khiển Linux bên trong vùng chứa, cho phép khắc phục sự cố và gỡ lỗi trong vùng chứa.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 80",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/80-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-81",
    "questionNumber": 81,
    "text": "You are building a microservices-based application that uses Azure Container Apps. The application includes several containerized services that perform tasks such as processing orders, managing inventory, and generating reports. You deploy two microservices, named serviceA and serviceB, to support inventory management.  \n  \nYou have the following requirements:  \n  \n- serviceA and serviceB must publish events to one Azure Event Hub by using the Event Hubs SDK.  \n- serviceA must publish 1,000 events per second.  \n- serviceB must publish 3,000 events per second.  \n- Costs must be minimized.  \n  \nYou need to support event publishing.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create four partitions. Update serviceA to use one partition and serviceB to use three partitions."
      },
      {
        "key": "B",
        "text": "Enable and configure Azure Event Hubs Capture."
      },
      {
        "key": "C",
        "text": "Create an Azure Event Hubs dedicated cluster. Configure the capacity units to one and the scaling units to two."
      },
      {
        "key": "D",
        "text": "Create and configure an Azure Schema Registry in Event Hubs. Update serviceA and serviceB to validate message schemas."
      },
      {
        "key": "E",
        "text": "Create four consumer groups. Update serviceA to use one consumer group and serviceB to use three consumer groups."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Các phân vùng cung cấp đường dẫn xuất bản song song trong trung tâm sự kiện. Việc phân bổ một phân vùng cho nhà xuất bản 1.000 sự kiện mỗi giây và ba phân vùng cho nhà xuất bản 3.000 sự kiện mỗi giây sẽ cung cấp bốn đường dẫn xuất bản song song đồng thời tránh được chi phí bổ sung và chức năng không liên quan của cụm chuyên dụng, Capture, Schema Register hoặc nhóm người tiêu dùng. Ở cấp Tiêu chuẩn, không gian tên cũng phải có đủ đơn vị thông lượng vì đơn vị thông lượng kiểm soát tổng công suất đầu vào; mỗi cái cung cấp tới 1.000 sự kiện xâm nhập mỗi giây. [Microsoft Learn: Scaling with Event Hubs](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-scalability)",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 81",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/81-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-82",
    "questionNumber": 82,
    "text": "You have 100 Azure virtual machines (VMs) for which the system-assigned managed identity is enabled.  \n  \nYou need to determine the object ID attribute value for each identity.  \n  \nWhich command should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "az ad signed-in-user list-owned-objects"
      },
      {
        "key": "B",
        "text": "az ad sp credential list"
      },
      {
        "key": "C",
        "text": "az ad user show"
      },
      {
        "key": "D",
        "text": "Get-AzResource"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Đối với máy ảo có system-assigned managed identity, ID đối tượng của managed identity là nhận dạng tài nguyên `PrincipalId`. `Get-AzResource` truy xuất tài nguyên VM và hiển thị giá trị này thông qua `Identity.PrincipalId`.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 82",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/82-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-83",
    "questionNumber": 83,
    "text": "You are building several microservices that will run on Azure Container Apps for a company. External TCP ingress traffic from the internet is enabled for the microservices.  \n  \nThe company requires the microservices to scale based on an Azure Event Hub trigger.  \n  \nYou need to scale the microservices by using a custom scaling rule.  \n  \nWhich two Kubernetes Event-driven Autoscaling (KEDA) trigger fields should you use? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "metadata"
      },
      {
        "key": "B",
        "text": "type"
      },
      {
        "key": "C",
        "text": "authenticationRef"
      },
      {
        "key": "D",
        "text": "name"
      },
      {
        "key": "E",
        "text": "metricType"
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Quy tắc chia tỷ lệ tùy chỉnh Azure Container Apps sử dụng bộ chia tỷ lệ KEDA `type` để xác định bộ chia tỷ lệ của Trung tâm sự kiện và `metadata` để cung cấp các cài đặt và ngưỡng chia tỷ lệ cần thiết cho Trung tâm sự kiện của bộ chia tỷ lệ. Tài liệu mở rộng Ứng dụng vùng chứa của Microsoft ánh xạ các trường kích hoạt KEDA này tới các thuộc tính `type` và `metadata` của quy tắc tùy chỉnh.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 83",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/83-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-84",
    "questionNumber": 84,
    "text": "You are building a microservices-based application that uses Azure Container Apps. The application includes several containerized services that perform tasks such as processing orders, managing inventory, and generating reports. You deploy a new revision of the processing orders app.  \n  \nProcessing orders must be triggered by a web request and must always be available in response to incoming web requests.  \n  \nYou need to verify that the replica is ready to handle incoming requests.  \n  \nWhat should you implement?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "HTTP readiness probe"
      },
      {
        "key": "B",
        "text": "TCP readiness probe"
      },
      {
        "key": "C",
        "text": "HTTP startup probe"
      },
      {
        "key": "D",
        "text": "TCP liveness probe"
      },
      {
        "key": "E",
        "text": "HTTP liveness probe"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "HTTP readiness probe kiểm tra xem bản sao có sẵn sàng nhận yêu cầu đến thông qua điểm cuối HTTP hay không. Azure Container Apps sử dụng trạng thái sẵn sàng để xác định xem bản sửa đổi có thể nhận được lưu lượng truy cập hay không, trong khi các thăm dò khởi động và hoạt động phục vụ các mục đích kiểm tra tình trạng khác nhau.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 84",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/84-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-85",
    "questionNumber": 85,
    "text": "You administer an Azure App Service web app named App1 and its associated Azure Application Insights resource, AppInsights1.  \n  \nYou need alerts for any abnormal increase in the rate of failed HTTP requests directed at App1.  \n  \nYou must implement push notifications.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Deploy an Azure Resource Manager template that configures AppInsights1."
      },
      {
        "key": "B",
        "text": "From the Azure portal, modify a smart detection rule of AppInsights1."
      },
      {
        "key": "C",
        "text": "Deploy an Azure Resource Manager template that configures the ProactiveDetectionConfigs child resource of AppInsights1."
      },
      {
        "key": "D",
        "text": "From the Azure portal, modify an action group of Azure Monitor."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Lỗi Application Insights Sự bất thường phát hiện sự gia tăng bất thường về tỷ lệ yêu cầu HTTP không thành công. Các nhóm hành động Azure Monitor xác định các kênh thông báo cảnh báo và hỗ trợ thông báo đẩy ứng dụng Azure, do đó, nhóm hành động được liên kết với cảnh báo phải được sửa đổi để thêm trình nhận thông báo đẩy.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 85",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/85-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-86",
    "questionNumber": 86,
    "text": "You must ensure that network security policies are satisfied.  \n  \nHow should network security be configured?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Chứng chỉ TLS được tin cậy công khai phải liên kết với chứng chỉ gốc đáng tin cậy; theo mặc định, chứng chỉ tự ký không được khách hàng tin cậy. Azure Application Gateway là proxy ngược Lớp 7 được quản lý, hỗ trợ chấm dứt TLS và bảo vệ Tường lửa ứng dụng Web, do đó, nó phù hợp để áp dụng các biện pháp kiểm soát chính sách bảo mật mạng.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 86",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/86-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-87",
    "questionNumber": 87,
    "text": "You have an on-premises, internal-only website named www-contoso.com and an Azure Application Insights instance named AppInsights1.  \n  \nYou need to implement availability testing for www.contoso.com by using AppInsights1. The solution must minimize development effort.  \n  \nHow should you configure the test?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Trang web này chỉ dành cho nội bộ và tại chỗ, vì vậy Application Insights trước tiên cần có khả năng kết nối mạng từ Azure vào mạng riêng đó; VPN Site-to-Site kết nối mạng tại chỗ với Azure VNet, cho phép tác nhân kiểm tra được lưu trữ trên máy chủ VNet tiếp cận trang web nội bộ. Cả kiểm tra ping URL và kiểm tra Tiêu chuẩn đều chạy từ các điểm hiện diện toàn cầu do Microsoft quản lý và không thể tiếp cận điểm cuối riêng tư/nội bộ, do đó, cả hai đều không thể giám sát URL chỉ dành cho nội bộ. Tùy chọn duy nhất hoạt động là kiểm tra tính khả dụng tùy chỉnh bằng API TrackAvailability(), chạy từ mã (ví dụ: Hàm Azure) bên trong VNet có thể truy cập trang web qua VPN và đăng kết quả lên AppInsights1. Do đó, VPN Site-to-Site cộng với kiểm tra Khả năng theo dõi tùy chỉnh.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 87",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/87-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-88",
    "questionNumber": 88,
    "text": "You build a web application that sells access to last-minute vacancies at child camps that operate on weekends. The application uses Azure Application Insights for all monitoring and alerting.  \n  \nThe application must notify operators when a technical problem prevents camp sales.  \n  \nYou need to create an alert that detects technical problems.  \n  \nWhich alert type should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Metric alert using multiple time series"
      },
      {
        "key": "B",
        "text": "Metric alert using dynamic thresholds"
      },
      {
        "key": "C",
        "text": "Log alert using multiple time series"
      },
      {
        "key": "D",
        "text": "Log alert using dynamic thresholds"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Cảnh báo số liệu có ngưỡng động phù hợp với số liệu bán hàng có hành vi bình thường tuân theo mẫu cuối tuần. Ngưỡng động tìm hiểu hành vi của số liệu lịch sử, bao gồm các mẫu hàng giờ, hàng ngày và hàng tuần, đồng thời xác định các sai lệch bất thường, chẳng hạn như doanh số bán hàng giảm bất ngờ có thể cho thấy lỗi kỹ thuật. Chuỗi nhiều thời gian nhằm mục đích giám sát riêng chuỗi nhiều thứ nguyên hoặc tài nguyên, điều này không bắt buộc ở đây.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 88",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/88-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-89",
    "questionNumber": 89,
    "text": "A company uses an Azure Storage static website with a custom domain name.  \n  \nThe company reports that unauthorized users in another country or region are accessing the website. The static website must meet these requirements:  \n  \n- Unauthorized users must be unable to access the website.  \n- Users must be able to access the website over HTTPS.  \n  \nYou need to make the required changes to the static website.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Để chặn người dùng từ các quốc gia/khu vực cụ thể, bạn hạn chế quyền truy cập mạng bằng quy tắc tường lửa của tài khoản lưu trữ (chỉ cho phép các dải/mạng IP được phép); điều này áp dụng cho điểm cuối web của trang web tĩnh. Việc đặt AllowBlobPublicAccess thành Sai sẽ phá vỡ quá trình đọc ẩn danh mà trang web tĩnh phụ thuộc vào và xác thực Entra ID không thể phân phát nội dung web ẩn danh, vì vậy những nội dung đó là sai. Đối với HTTPS, cài đặt 'yêu cầu truyền an toàn' chỉ thực thi HTTPS trên các điểm cuối *.web/*.blob tích hợp sẵn và KHÔNG áp dụng cho tên miền tùy chỉnh; Azure Storage có hỗ trợ HTTPS gốc no cho các miền tùy chỉnh. Để phục vụ trang web tĩnh của miền tùy chỉnh qua HTTPS, bạn phải đặt trước nó bằng Azure CDN (hoặc Azure Front Door), trang này chấm dứt TLS cho miền tùy chỉnh. Điều đó làm cho CDN trở thành sự lựa chọn bắt buộc ở đây.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 89",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/89-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-90",
    "questionNumber": 90,
    "text": "You are building a traffic-monitoring system for six highways that produces time-series-analysis reports for each highway.  \n  \nTraffic-sensor data is stored in Azure Event Hub.  \n  \nFour departments consume the traffic data. Each department has an Azure Web App that displays the time-series reports and includes a WebJob that processes incoming Event Hub data. All Web Apps run on App Service Plans with three instances.  \n  \nData throughput must be maximized and latency minimized.  \n  \nYou need to implement the Azure Event Hub. Which settings should you use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Khóa phân vùng phải là Đường cao tốc để tất cả các sự kiện cho một đường cao tốc nhất định được định tuyến nhất quán đến cùng một phân vùng, duy trì thứ tự trên mỗi đường cao tốc mà việc phân tích chuỗi thời gian yêu cầu. Với Đường cao tốc làm khóa, chỉ có sáu giá trị khóa riêng biệt, do đó, sáu phân vùng là số lượng chính xác: nó cung cấp một kênh chuyên dụng, có thể đọc độc lập trên mỗi đường cao tốc, tối đa hóa thông lượng song song và giảm thiểu độ trễ. Việc chọn 12 phân vùng là sai vì sáu khóa riêng biệt không bao giờ có thể chứa nhiều hơn sáu phân vùng, khiến sáu phân vùng bổ sung bị trống vĩnh viễn; số lượng phòng ban/phiên bản (4 x 3 = 12) thúc đẩy tính song song phía người tiêu dùng, chứ không phải số lượng phân vùng, vì mỗi phòng ban là nhóm người tiêu dùng riêng và có thể đọc tất cả sáu phân vùng.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 90",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/90-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.818Z"
  },
  {
    "id": "az204-91",
    "questionNumber": 91,
    "text": "You are building an Azure solution that collects inventory data from thousands of stores worldwide. Each store sends inventory data hourly to an Azure Blob storage account for processing.  \n  \nThe solution must:  \n  \n- Start processing when data is saved to Azure Blob storage.  \n- Filter data by store-location information.  \n- Trigger an Azure Logic App to process the data for output to Azure Cosmos DB.  \n- Provide high availability and geographic distribution.  \n- Permit 24 hours for retries.  \n- Use exponential-backoff data processing.  \n  \nWhat should you implement?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "event_source",
        "text": "Event Source",
        "correctAnswer": "D"
      },
      {
        "id": "event_receiver",
        "text": "Event Receiver",
        "correctAnswer": "B"
      },
      {
        "id": "event_handler",
        "text": "Event Handler",
        "correctAnswer": "F"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Azure Event Hub"
      },
      {
        "key": "B",
        "text": "Azure Event Grid"
      },
      {
        "key": "C",
        "text": "Azure Service Bus"
      },
      {
        "key": "D",
        "text": "Azure Blob Storage"
      },
      {
        "key": "E",
        "text": "Azure App Service"
      },
      {
        "key": "F",
        "text": "Azure Logic App"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Azure Event Hub"
      },
      {
        "key": "B",
        "text": "Azure Event Grid"
      },
      {
        "key": "C",
        "text": "Azure Service Bus"
      },
      {
        "key": "D",
        "text": "Azure Blob Storage"
      },
      {
        "key": "E",
        "text": "Azure App Service"
      },
      {
        "key": "F",
        "text": "Azure Logic App"
      }
    ],
    "correctAnswers": [
      "event_source=D",
      "event_receiver=B",
      "event_handler=F"
    ],
    "explanation": "Azure Blob Storage tạo ra các sự kiện do blob tạo. Azure Event Grid định tuyến và lọc các sự kiện này với số lần thử lại trong 24 giờ và phân phối chờ theo cấp số nhân. Ứng dụng Azure Logic là trình xử lý Lưới sự kiện được hỗ trợ và có thể xử lý sự kiện trước khi ghi vào Azure Cosmos DB.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 91",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/91-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-92",
    "questionNumber": 92,
    "text": "HOTSPOT –  \n  \nYou are creating a C++ application that compiles into a native application named `process.exe`. The application takes images as input and returns images in one of these formats: GIF, PNG, or JPEG.  \n  \nYou must deploy the application as an Azure Function.  \n  \nYou need to configure the `function.json` and `host.json` files. How should you complete the JSON files?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Trình xử lý tùy chỉnh Azure Functions hỗ trợ các tệp thực thi như ứng dụng C++ gốc. Tệp thực thi được cấu hình bởi `customHandler.description.defaultExecutablePath` trong `host.json`. Liên kết đầu ra HTTP được khai báo với `type` được đặt thành `http`; cho phép chuyển tiếp yêu cầu HTTP sẽ chuyển yêu cầu đến tệp thực thi của trình xử lý tùy chỉnh.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 92",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/92-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-93",
    "questionNumber": 93,
    "text": "You are a developer at your company.  \n  \nYou need to modify the workflows for an existing Logic App.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "the Enterprise Integration Pack (EIP)"
      },
      {
        "key": "B",
        "text": "the Logic App Code View"
      },
      {
        "key": "C",
        "text": "the API Connections"
      },
      {
        "key": "D",
        "text": "the Logic Apps Designer"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Logic Apps Designer là giao diện soạn thảo trực quan để mở quy trình làm việc hiện có và chỉnh sửa các bước của quy trình đó. Microsoft Learn tuyên bố rằng nhà thiết kế sẽ mở quy trình làm việc hiện có để bạn có thể chỉnh sửa các bước; Chế độ xem mã dành riêng cho việc chỉnh sửa định nghĩa quy trình làm việc JSON.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 93",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/93-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-94",
    "questionNumber": 94,
    "text": "You are creating nested Azure Resource Manager templates to deploy multiple Azure resources. The templates must be tested before deployment and must adhere to recommended practices.  \n  \nYou need to validate and test the templates before deployment. Which tools should you use? Each tool can be used once, multiple times, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "recommended_practices",
        "text": "Determine whether the templates follow recommended practices.",
        "correctAnswer": "C"
      },
      {
        "id": "validate_changes",
        "text": "Test and validate changes that templates will make to the environment.",
        "correctAnswer": "E"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Parameter file"
      },
      {
        "key": "B",
        "text": "Template function"
      },
      {
        "key": "C",
        "text": "Azure Resource Manager test toolkit"
      },
      {
        "key": "D",
        "text": "User-defined function"
      },
      {
        "key": "E",
        "text": "What-if operation"
      },
      {
        "key": "F",
        "text": "Azure Deployment Manager"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Parameter file"
      },
      {
        "key": "B",
        "text": "Template function"
      },
      {
        "key": "C",
        "text": "Azure Resource Manager test toolkit"
      },
      {
        "key": "D",
        "text": "User-defined function"
      },
      {
        "key": "E",
        "text": "What-if operation"
      },
      {
        "key": "F",
        "text": "Azure Deployment Manager"
      }
    ],
    "correctAnswers": [
      "recommended_practices=C",
      "validate_changes=E"
    ],
    "explanation": "Bộ công cụ kiểm tra Azure Resource Manager kiểm tra các mẫu ARM dựa trên các phương pháp được đề xuất. Điều gì sẽ xảy ra nếu các hoạt động xem trước các thay đổi tài nguyên mà việc triển khai ARM sẽ thực hiện, cho phép xem xét những thay đổi đó trước khi triển khai.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 94",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/94-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-95",
    "questionNumber": 95,
    "text": "You have an Azure Cosmos DB for NoSQL API account named account1. Multiple instances of an on-premises application named app1 read data from account1.  \n  \nYou plan to implement integrated cache for connections from the instances of app1 to account1.  \n  \nYou need to configure the connection mode and maximum consistency level for app1.  \n  \nWhich values should you use for the configuration settings?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Bộ đệm tích hợp Azure Cosmos DB chạy trên cổng chuyên dụng và yêu cầu kết nối ở chế độ cổng bằng cổng chuyên dụng. Nó hỗ trợ tính nhất quán của phiên và cuối cùng; tính nhất quán mạnh mẽ đọc bỏ qua bộ đệm. Do đó, phiên là mức nhất quán được hỗ trợ cao nhất.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 95",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/95-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-96",
    "questionNumber": 96,
    "text": "A company is building a solution that enables smart refrigerators to send temperature data to a central location.  \n  \nThe solution must receive and retain messages until they can be processed. You create an Azure Service Bus instance by specifying a name, pricing tier, subscription, resource group, and location.  \n  \nYou need to finish the configuration.  \n  \nWhich Azure CLI or PowerShell command should you run?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "![](https://cdn.examcademy.com/images/questions/1785597505591-9fk1uy0v.png)"
      },
      {
        "key": "B",
        "text": "![](https://cdn.examcademy.com/images/questions/1785597509422-9v856rl0.png)"
      },
      {
        "key": "C",
        "text": "![](https://cdn.examcademy.com/images/questions/1785597512561-gt6bos32.png)"
      },
      {
        "key": "D",
        "text": "![](https://cdn.examcademy.com/images/questions/1785597515080-bvs165gj.png)"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Hàng đợi Azure Service Bus cung cấp khả năng lưu trữ tin nhắn lâu bền để nhà sản xuất có thể gửi tin nhắn và người tiêu dùng có thể xử lý chúng sau này. Việc tạo một hàng đợi trong không gian tên Service Bus hiện có sẽ hoàn tất cấu hình nhắn tin được yêu cầu.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 96",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/96-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-97",
    "questionNumber": 97,
    "text": "You are building an ASP.NET Core app with feature flags managed through Azure App Configuration. You create an Azure App Configuration store named AppFeatureflagStore as shown here:  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783807939264-fncriksl.png)  \n  \nYou need the app to use the feature flag with the following markup:  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783807943897-c50pndx0.jpg)  \n  \nUpdate the app so that it can use the feature flag. Which values should you select?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "`FeatureGate` là thuộc tính quản lý tính năng ASP.NET Core giúp điều khiển bộ điều khiển MVC hoặc hành động bằng cờ tính năng được đặt tên. `AddAzureAppConfiguration` thêm Cấu hình ứng dụng Azure vào quy trình cấu hình ứng dụng. Điểm cuối Cấu hình ứng dụng Azure sử dụng mẫu máy chủ có tên cửa hàng `https://<store-name>.azconfig.io`, biến `https://appfeatureflagstore.azconfig.io` thành điểm cuối phù hợp.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783807939264-fncriksl.png",
    "sourceTitle": "Examcademy AZ-204 Question 97",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/97-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-98",
    "questionNumber": 98,
    "text": "You are building a web application that calls the Microsoft Graph API. You register the application in the Azure portal and upload a valid X509 certificate.  \n  \nYou create an `appsettings.json` file containing the certificate name, the application's client identifier, and the Azure Active Directory (Azure AD) tenant identifier. You create a method named `ReadCertificate` to return the X509 certificate by name.  \n  \nYou need to implement code that acquires a token by using the certificate. How should you complete the code segment?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "`ConfidentialClientApplicationBuilder` xây dựng ứng dụng khách bí mật MSAL được định cấu hình bằng chứng chỉ. `AcquireTokenForClient` chấp nhận bộ sưu tập phạm vi được yêu cầu; đối với thông tin xác thực của khách hàng, Microsoft Graph sử dụng phạm vi tài nguyên `.default`.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 98",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/98-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-99",
    "questionNumber": 99,
    "text": "You provision virtual machines (VMs) as development environments.  \n  \nOne VM does not start because it is stuck during a Windows update. You attach the affected VM's OS disk to a recovery VM.  \n  \nYou need to resolve the issue.  \n  \nIn what order should you perform the actions?",
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
        "text": "Run the following command at an elevated command prompt:\n\ndism /image:\\ /get=packages > c:\\temp\\Patch.txt"
      },
      {
        "key": "B",
        "text": "Run the following command at an elevated command prompt:\n\ndism /Image:<Attached OS disks>:\\ /Remove\nPackage /PackageName:<package name to delete>"
      },
      {
        "key": "C",
        "text": "Detach the OS disk and recreate the VM"
      },
      {
        "key": "D",
        "text": "Open C:\\temp\\Patch.txt file and locate the update that is in a\npending state"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Run the following command at an elevated command prompt:\n\ndism /image:\\ /get=packages > c:\\temp\\Patch.txt"
      },
      {
        "key": "B",
        "text": "Run the following command at an elevated command prompt:\n\ndism /Image:<Attached OS disks>:\\ /Remove\nPackage /PackageName:<package name to delete>"
      },
      {
        "key": "C",
        "text": "Detach the OS disk and recreate the VM"
      },
      {
        "key": "D",
        "text": "Open C:\\temp\\Patch.txt file and locate the update that is in a\npending state"
      }
    ],
    "correctAnswers": [
      "step1=A",
      "step2=D",
      "step3=B",
      "step4=C"
    ],
    "explanation": "Đối với hình ảnh Windows ngoại tuyến, trước tiên DISM liệt kê các gói đã cài đặt để có thể xác định gói ở trạng thái chờ xử lý. Sau khi xác định tên gói của nó, DISM sẽ xóa gói đó khỏi ảnh đĩa hệ điều hành đính kèm. Sau đó, đĩa đã sửa chữa có thể được tháo ra và sử dụng khi tạo lại VM.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 99",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/99-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-100",
    "questionNumber": 100,
    "text": "A software as a service (SaaS) company delivers document-management services. The company has a service consisting of several Azure web apps. All Azure web apps run in an Azure App Service plan named `PrimaryASP`.  \n  \nYou are developing a new web service that uses a web app named `ExcelParser`. The web app contains a third-party library for processing Microsoft Excel files. The library license stipulates that only a single instance of the library can run.  \n  \nYou need to configure the service. How should you complete the script?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Chia tỷ lệ cho mỗi ứng dụng phải được bật trên gói Dịch vụ ứng dụng bằng cách đặt `PerSiteScaling` thành true. Số lượng phiên bản trên mỗi ứng dụng được kiểm soát bởi `SiteConfig.NumberOfWorkers`, do đó, việc đặt thành 1 sẽ giới hạn ExcelParser ở một phiên bản riêng biệt mà không giới hạn các ứng dụng web khác trong gói dùng chung.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 100",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/100-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-101",
    "questionNumber": 101,
    "text": "You develop and deploy an ASP.NET Core application that connects to an Azure Database for MySQL instance.  \n  \nDatabase connections seem to drop intermittently, and the application code does not handle connection failures.  \n  \nYou need to handle transient connection errors in code by implementing retries.  \n  \nWhat are three possible ways to accomplish this goal? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Close the database connection and immediately report an error."
      },
      {
        "key": "B",
        "text": "Disable connection pooling and configure a second Azure Database for MySQL instance."
      },
      {
        "key": "C",
        "text": "Wait five seconds before repeating the connection attempt to the database."
      },
      {
        "key": "D",
        "text": "Set a maximum number of connection attempts to 10 and report an error on subsequent connections."
      },
      {
        "key": "E",
        "text": "Increase connection repeat attempts exponentially up to 120 seconds."
      }
    ],
    "correctAnswers": [
      "C",
      "D",
      "E"
    ],
    "explanation": "Cơ sở dữ liệu Azure tạm thời cho các lỗi kết nối MySQL nên sử dụng logic thử lại chờ trước lần thử lại đầu tiên, tăng độ trễ thử lại theo cấp số nhân khi lỗi vẫn tiếp diễn và giới hạn số lần thử lại trước khi coi thao tác là không thành công. Điều này ngăn các yêu cầu lặp lại ngay lập tức trong quá trình khôi phục đồng thời đảm bảo ứng dụng không thử lại vô thời hạn.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 101",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/101-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-102",
    "questionNumber": 102,
    "text": "You are developing an ASP.NET Core app that includes feature flags managed through Azure App Configuration. You create an Azure App Configuration store named `AppFeatureFlagStore` that contains a feature flag named `Export`.  \n  \nUpdate the app to meet these requirements:  \n  \n- Use the `Export` feature in the app without restarting the app.  \n- Validate users before they can access secure resources.  \n- Allow users to access secure resources.  \n  \nHow should you complete the code segment?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "`UseAzureAppConfiguration` bổ sung phần mềm trung gian làm mới theo yêu cầu của Cấu hình ứng dụng Azure, cho phép làm mới các giá trị cờ tính năng mà không cần khởi động lại ứng dụng. Quá trình xác thực phải chạy trước khi ủy quyền: nó tạo ra hiệu trưởng của người dùng được xác thực và sau đó ủy quyền sẽ đánh giá xem liệu người dùng đó có thể truy cập các tài nguyên được bảo vệ hay không.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 102",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/102-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-103",
    "questionNumber": 103,
    "text": "You have an Azure Queue Storage account containing a queue named `queue1`.  \n  \nYou plan to use the Azure SDK for .NET to develop a solution that uses `queue1`.  \n  \nYou need to write C# code that returns an approximate count of the messages in `queue1`. The solution must minimize development effort.  \n  \nWhich method should you use in your code?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "GetProperties method of the QueueClient class"
      },
      {
        "key": "B",
        "text": "GetProperties method of the QueueServiceClient class"
      },
      {
        "key": "C",
        "text": "PeekMessages method of the QueueClient class"
      },
      {
        "key": "D",
        "text": "GetStatistics method of the QueueServiceClient class"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "`QueueClient.GetProperties` truy xuất các thuộc tính của một hàng đợi cụ thể và giá trị `QueueProperties.ApproximateMessagesCount` được trả về cung cấp số lượng tin nhắn gần đúng của hàng đợi. Đây là hoạt động SDK trực tiếp để lấy ước tính mà không cần truy xuất thông báo.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 103",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/103-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-104",
    "questionNumber": 104,
    "text": "Solution: You configure Basic gateway credentials for the HTTP(S) endpoint.  \n  \nDoes this solution satisfy the goal?",
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
    "explanation": "Quản lý API Azure có thể xác thực với API HTTP(S) phụ trợ bằng cách sử dụng thông tin xác thực Cơ bản. Tên người dùng và mật khẩu đã định cấu hình sẽ được gửi đến phần phụ trợ trong tiêu đề Ủy quyền HTTP, tiêu đề này cung cấp xác thực phụ trợ cho dịch vụ API.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 104",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/104-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-105",
    "questionNumber": 105,
    "text": "Solution: Configure Client cert gateway credentials for the HTTP(S) endpoint.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Quản lý API Azure hỗ trợ xác thực chứng chỉ ứng dụng khách từ cổng đến dịch vụ HTTP(S) phụ trợ. Thông tin xác thực cổng chứng chỉ ứng dụng khách định cấu hình chứng chỉ mà Quản lý API cung cấp cho phần phụ trợ, đáp ứng yêu cầu xác thực phụ trợ.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 105",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/105-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-106",
    "questionNumber": 106,
    "text": "Solution: Configure **Client cert** gateway credentials for the Azure resource.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Quản lý API Azure hỗ trợ xác thực TLS lẫn nhau cho dịch vụ phụ trợ bằng cách đặt cấu hình chứng chỉ ứng dụng khách trong thông tin xác thực Cổng của API. Azure App Service có thể được định cấu hình để xác thực chứng chỉ ứng dụng khách, do đó, điều này cung cấp xác thực phụ trợ cho API RESTful.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 106",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/106-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-107",
    "questionNumber": 107,
    "text": "Solution: You configure Basic gateway credentials for the Azure resource.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Thông tin xác thực cổng cơ bản gửi tên người dùng và mật khẩu đến chương trình phụ trợ bằng xác thực HTTP Basic; họ không định cấu hình xác thực phụ trợ Azure App Service cho tài nguyên Azure. Quản lý API hỗ trợ định cấu hình chứng chỉ ứng dụng khách làm xác thực cổng cho dịch vụ phụ trợ, đây là cơ chế xác thực phụ trợ có thể áp dụng tại đây.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 107",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/107-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-108",
    "questionNumber": 108,
    "text": "You develop and deploy an Azure App Service web app that uses Azure Cache for Redis as a content cache. All resources are deployed in the East US 2 region.  \n  \nThe security team requires the following audit information from Azure Cache for Redis:  \n  \n- The number of Redis client connections from an associated IP address.  \n- Redis operations completed on the content cache.  \n- The region in which the Azure Cache for Redis instance was accessed.  \n  \nThe audit data must be captured and analyzed by a security-team application deployed in the Central US region.  \n  \nYou need to log information for all client connections to the cache.  \n  \nWhich configuration values should you use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Bộ nhớ đệm Azure dành cho Redis sử dụng cài đặt chẩn đoán Azure Monitor để thu thập nhật ký kết nối máy khách. Việc gửi các nhật ký đó đến không gian làm việc Log Analytics giúp chúng có thể truy vấn được để phân tích bảo mật; bảng ACRConnectedClientList bao gồm các trường hoạt động Redis và vùng truy cập. Đối với tài nguyên khu vực, Trung tâm sự kiện và đích lưu trữ phải nằm trong khu vực của tài nguyên được giám sát, trong khi không gian làm việc Log Analytics hỗ trợ vị trí phân tích Trung tâm Hoa Kỳ được yêu cầu.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 108",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/108-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-109",
    "questionNumber": 109,
    "text": "You need to add code at line AM10 of the application manifest so that the requirement for manually reviewing content can be fulfilled.  \n  \nHow should you complete the code?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Bản chỉnh sửa bảng kê khai nghiên cứu điển hình này bổ sung các xác nhận quyền sở hữu tùy chọn đối với mã thông báo được cấp cho ứng dụng đánh giá nội dung. Yêu cầu sid (ID phiên) là bắt buộc để hỗ trợ yêu cầu đăng xuất của người dùng trong mỗi phiên, vì vậy nó sẽ đáp ứng yêu cầu 1. Xác nhận quyền sở hữu qua email điền vào xác nhận quyền sở hữu2 vì kịch bản cho biết mọi đánh giá nội dung đã hoàn thành phải ghi lại địa chỉ email của người đánh giá để kiểm tra và email là xác nhận quyền sở hữu tùy chọn hiển thị địa chỉ email của người dùng trong mã thông báo. upn sai ở đây: mặc dù nó xác định người dùng nhưng yêu cầu kiểm tra đã nêu cụ thể là địa chỉ email của người đánh giá và email (không phải upn) là xác nhận dành riêng cho giá trị đó.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 109",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/109-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-110",
    "questionNumber": 110,
    "text": "You have a new Azure subscription. You are developing an internal employee website for viewing sensitive data. The website uses Azure Active Directory (Azure AD) for authentication.  \n  \nYou need to implement multifactor authentication for the website.  \n  \nWhich two actions should you take? Each correct answer is part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Configure the website to use Azure AD B2C."
      },
      {
        "key": "B",
        "text": "In Azure AD, create a new conditional access policy."
      },
      {
        "key": "C",
        "text": "Upgrade to Azure AD Premium."
      },
      {
        "key": "D",
        "text": "In Azure AD, enable application proxy."
      },
      {
        "key": "E",
        "text": "In Azure AD conditional access, enable the baseline policy."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Truy cập có điều kiện của Microsoft Entra có thể yêu cầu xác thực đa yếu tố khi người dùng truy cập vào một ứng dụng đã chọn. Truy cập có điều kiện yêu cầu cấp phép Microsoft Entra ID P1 hoặc P2 (trước đây là Azure AD Premium), do đó, các hành động bắt buộc là nâng cấp lên Azure AD Premium và tạo chính sách Truy cập có điều kiện yêu cầu MFA.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 110",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/110-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-111",
    "questionNumber": 111,
    "text": "You are developing a gateway solution for a public-facing news API.  \n  \nThe news API backend is a RESTful service hosted in an Azure App Service instance.  \n  \nYou need to configure backend authentication for the API Management service instance.  \n  \nWhich target and gateway credential type should you use? Each value may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "target",
        "text": "Target",
        "correctAnswer": "B"
      },
      {
        "id": "gateway_credentials",
        "text": "Gateway credentials",
        "correctAnswer": "D"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Azure Resource"
      },
      {
        "key": "B",
        "text": "HTTP(s) endpoint"
      },
      {
        "key": "C",
        "text": "Basic"
      },
      {
        "key": "D",
        "text": "Client cert"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Azure Resource"
      },
      {
        "key": "B",
        "text": "HTTP(s) endpoint"
      },
      {
        "key": "C",
        "text": "Basic"
      },
      {
        "key": "D",
        "text": "Client cert"
      }
    ],
    "correctAnswers": [
      "target=B",
      "gateway_credentials=D"
    ],
    "explanation": "Phần phụ trợ Azure App Service REST được định cấu hình trong Quản lý API dưới dạng điểm cuối HTTP(S). Xác thực chứng chỉ ứng dụng khách cho phép cổng Quản lý API xuất trình chứng chỉ cho phần phụ trợ của Dịch vụ ứng dụng. Chứng chỉ này có thể được định cấu hình để yêu cầu và xác thực chứng chỉ ứng dụng khách.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 111",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/111-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-112",
    "questionNumber": 112,
    "text": "You are configuring a development environment for your team. You deploy the latest Visual Studio image from the Azure Marketplace to your Azure subscription.  \n  \nThe development environment requires several software development kits (SDKs) and third-party components to support application development across the organization. You install and customize the deployed virtual machine (VM) for your development team. The customized VM must be saved to enable provisioning of a development environment for a new team member.  \n  \nYou need to save the customized VM for future provisioning.  \n  \nWhich tools or services should you use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Hình ảnh Windows VM có thể tái sử dụng phải được khái quát hóa sau Sysprep và Azure PowerShell cung cấp các lệnh Azure VM được sử dụng cho thao tác đó. Các đĩa Azure virtual machine được lưu trữ dưới dạng các đốm trang trong Azure Blob Storage, khiến Blob Storage trở thành lựa chọn thích hợp cho dữ liệu hình ảnh.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 112",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/112-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-113",
    "questionNumber": 113,
    "text": "You need to implement telemetry for non-user actions.  \n  \nHow should you complete the `Filter` class? Each code segment may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "s1",
        "text": "Slot 1:",
        "correctAnswer": "E"
      },
      {
        "id": "s2",
        "text": "Slot 2:",
        "correctAnswer": "E"
      },
      {
        "id": "s3",
        "text": "Slot 3:",
        "correctAnswer": "E"
      },
      {
        "id": "s4",
        "text": "Slot 4:",
        "correctAnswer": "C"
      },
      {
        "id": "s5",
        "text": "Slot 5:",
        "correctAnswer": "A"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "/health"
      },
      {
        "key": "B",
        "text": "/status"
      },
      {
        "key": "C",
        "text": "RequestTelemetry"
      },
      {
        "key": "D",
        "text": "PageViewTelemetry"
      },
      {
        "key": "E",
        "text": "ITelemetryProcessor"
      },
      {
        "key": "F",
        "text": "ITelemetryInitializer"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "/health"
      },
      {
        "key": "B",
        "text": "/status"
      },
      {
        "key": "C",
        "text": "RequestTelemetry"
      },
      {
        "key": "D",
        "text": "PageViewTelemetry"
      },
      {
        "key": "E",
        "text": "ITelemetryProcessor"
      },
      {
        "key": "F",
        "text": "ITelemetryInitializer"
      }
    ],
    "correctAnswers": [
      "s1=E",
      "s2=E",
      "s3=E",
      "s4=C",
      "s5=A"
    ],
    "explanation": "Để lọc dữ liệu đo từ xa, bạn triển khai ITelemetryProcessor, xuất hiện ba lần trong lớp Bộ lọc: lớp này triển khai giao diện, trường Tiếp theo được nhập là ITelemetryProcessor và hàm tạo lấy tham số tiếp theo là ITelemetryProcessor. Trong phương thức Quy trình, mục này được chuyển sang Yêu cầu từ xa để có thể kiểm tra các thuộc tính dành riêng cho yêu cầu (chẳng hạn như đường dẫn URL). Hành động không phải của người dùng là các yêu cầu kiểm tra tình trạng tự động, do đó, mã sẽ loại bỏ phép đo từ xa có đường dẫn bằng /health bằng cách quay lại mà không gọi Next.Process. PageViewTelemetry và ITelemetryInitializer sai: công cụ khởi tạo thêm/sửa đổi các thuộc tính thay vì loại bỏ các mục và lượt xem trang thể hiện hành động của người dùng chứ không phải lưu lượng kiểm tra tình trạng đang được lọc.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 113",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/113-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-114",
    "questionNumber": 114,
    "text": "You are developing a website that uses Azure Blob storage for data storage. You configure the Azure Blob storage lifecycle to move all blobs to the archive tier after 30 days.  \n  \nCustomers have requested a service-level agreement (SLA) for viewing data more than 30 days old.  \n  \nYou need to document the minimum SLA for data recovery.  \n  \nWhich SLA should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "at least two days"
      },
      {
        "key": "B",
        "text": "between one and 15 hours"
      },
      {
        "key": "C",
        "text": "at least one day"
      },
      {
        "key": "D",
        "text": "between zero and 60 minutes"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Các đốm màu trong archive tier đang ngoại tuyến và phải được cấp nước lại ở cấp độ trực tuyến trước khi có thể truy cập được. Quá trình bù nước cho kho lưu trữ có mức độ ưu tiên tiêu chuẩn có thể mất tới 15 giờ, do đó SLA phục hồi hiện hành là từ 1 đến 15 giờ.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 114",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/114-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-115",
    "questionNumber": 115,
    "text": "You are developing an Azure Function app.  \n  \nThe Azure Function app must enable a WebHook to read an image from Azure Blob Storage and create a new Azure Cosmos DB document.  \n  \nYou need to implement the Azure Function app.  \n  \nWhich configuration should you use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "HTTP và webhooks cung cấp trình kích hoạt HTTP cho Hàm Azure. Liên kết đầu vào Blob Storage đọc dữ liệu blob vào hàm và liên kết đầu ra Azure Cosmos DB ghi tài liệu đã tạo vào Cosmos DB.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 115",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/115-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-116",
    "questionNumber": 116,
    "text": "You are developing a Java application that will be deployed in Azure. The application stores sensitive data in Azure Cosmos DB.  \n  \nYou need to configure Always Encrypted so that the sensitive data is encrypted within the application.  \n  \nWhat should you do first?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create a new container to include an encryption policy with the JSON properties to be encrypted."
      },
      {
        "key": "B",
        "text": "Create a customer-managed key (CMK) and store the key in a new Azure Key Vault instance."
      },
      {
        "key": "C",
        "text": "Create a data encryption key (DEK) by using the Azure Cosmos DB SDK and store the key in Azure Cosmos DB."
      },
      {
        "key": "D",
        "text": "Create an Azure AD managed identity and assign the identity to a new Azure Key Vault instance."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Luôn được mã hóa mã hóa dữ liệu bằng DEK được tạo phía máy khách và chỉ được lưu trữ trong Azure Cosmos DB sau khi chúng được bao bọc bởi CMK. CMK trước tiên phải được tạo trong Azure Key Vault; Cần có mã định danh khóa của nó khi tạo DEK. Chính sách mã hóa sau đó được chỉ định khi vùng chứa được tạo.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 116",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/116-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-117",
    "questionNumber": 117,
    "text": "You are building an ASP.NET Core time sheet application that runs as an Azure Web App. Application users submit their time sheet data on the first day of each month.  \n  \nThe application relies on a third-party web service to validate data.  \n  \nThe application periodically experiences server errors from calls to a third-party web server. Every request to that third-party server has the same probability of failing.  \n  \nYou need to configure an Azure Monitor alert that detects server errors not related to the third-party service while minimizing false-positive alerts.  \n  \nHow should you complete the Azure Resource Manager template?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Ngưỡng động tìm hiểu mẫu lỗi thông thường, bao gồm lỗi ngẫu nhiên của bên thứ ba và mẫu lưu lượng truy cập hàng tháng, đồng thời cảnh báo về những sai lệch bất thường. `Http5xx` đo lỗi máy chủ; `Http4xx` đo lỗi yêu cầu của khách hàng. Độ nhạy thấp sử dụng ngưỡng động lỏng lẻo hơn và do đó tạo ra ít cảnh báo hơn.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 117",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/117-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-118",
    "questionNumber": 118,
    "text": "You must authenticate a user to the corporate website as shown in the architectural diagram.  \n  \nWhich two values should be used? Each correct answer provides part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "ID token signature"
      },
      {
        "key": "B",
        "text": "ID token claims"
      },
      {
        "key": "C",
        "text": "HTTP response code"
      },
      {
        "key": "D",
        "text": "Azure AD endpoint URI"
      },
      {
        "key": "E",
        "text": "Azure AD tenant ID"
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Mã thông báo ID chỉ thiết lập danh tính của người dùng sau khi chữ ký của nó được xác thực và các xác nhận quyền sở hữu của nó đã được xác minh. Xác thực chữ ký xác nhận mã thông báo được phát hành bởi nhà cung cấp danh tính đáng tin cậy, trong khi xác thực yêu cầu xác nhận các thuộc tính như đối tượng và nhà phát hành dự kiến. Microsoft Entra ID ghi lại rằng các ứng dụng xác thực mã thông báo ID phải xác thực cả chữ ký mã thông báo và các xác nhận quyền sở hữu có thể áp dụng.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 118",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/118-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-119",
    "questionNumber": 119,
    "text": "You develop a web application that provides access to legal documents stored in Azure Blob Storage using version-level immutability policies. The documents are protected by both time-based policies and legal-hold policies. Every time-based retention policy has the `AllowProtectedAppendWrites` property enabled.  \n  \nYou must prevent users from attempting operations that would fail only if a legal hold is active and all other policies have expired.  \n  \nYou need to meet the requirement.  \n  \nWhich two operations should you prevent? Each correct answer presents a complete solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "adding data to documents"
      },
      {
        "key": "B",
        "text": "deleting documents"
      },
      {
        "key": "C",
        "text": "creating documents"
      },
      {
        "key": "D",
        "text": "overwriting existing documents"
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Với tính bất biến ở cấp độ phiên bản, việc ghi đè blob sẽ tạo ra một phiên bản mới, do đó, việc lưu giữ pháp lý của phiên bản hiện tại không chặn việc ghi đè. Các đốm màu mới cũng có thể được tạo ra. `AllowProtectedAppendWrites` cho phép thêm vào khi chính sách lưu giữ theo thời gian đang hoạt động; sau khi chính sách đó hết hạn, lệnh lưu giữ pháp lý có hiệu lực sẽ ngăn việc sửa đổi tài liệu được lưu giữ, bao gồm cả việc thêm dữ liệu. Việc lưu giữ hợp pháp cũng ngăn chặn việc xóa cho đến khi nó được xóa rõ ràng.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 119",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/119-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-120",
    "questionNumber": 120,
    "text": "You have an App Service plan named asp1 that uses the Free pricing tier.  \n  \nYou plan to use asp1 to implement an Azure Function app with a queue trigger. The solution must minimize cost.  \n  \nIdentify the configuration options that meet the requirements.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Luôn bật giúp máy chủ Chức năng luôn sẵn sàng khi một ứng dụng chạy trên gói Dịch vụ ứng dụng chuyên dụng, điều này cần thiết để chức năng được kích hoạt hàng đợi tiếp tục xử lý tin nhắn thay vì ở trạng thái rảnh. Cấp Cơ bản là cấp được liệt kê ít tốn kém nhất hỗ trợ Luôn bật; Miễn phí và chia sẻ không hỗ trợ nó. Managed identity và việc triển khai liên tục không giải quyết được tính khả dụng của máy chủ.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 120",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/120-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-121",
    "questionNumber": 121,
    "text": "You are developing an ASP.NET Core website to manage photographs stored in Azure Blob Storage containers.  \n  \nWebsite users authenticate with their Azure Active Directory (Azure AD) credentials. You implement role-based access control (RBAC) permissions on the photograph containers and assign users to RBAC roles.  \n  \nConfigure the website's Azure AD application so that users' permissions can be used with the Azure Blob containers. Each setting may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "azure_storage_permission",
        "text": "Azure Storage — Permission",
        "correctAnswer": "E"
      },
      {
        "id": "azure_storage_type",
        "text": "Azure Storage — Type",
        "correctAnswer": "C"
      },
      {
        "id": "microsoft_graph_type",
        "text": "Microsoft Graph — Type",
        "correctAnswer": "C"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "client_id"
      },
      {
        "key": "B",
        "text": "profile"
      },
      {
        "key": "C",
        "text": "delegated"
      },
      {
        "key": "D",
        "text": "application"
      },
      {
        "key": "E",
        "text": "user_impersonation"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "client_id"
      },
      {
        "key": "B",
        "text": "profile"
      },
      {
        "key": "C",
        "text": "delegated"
      },
      {
        "key": "D",
        "text": "application"
      },
      {
        "key": "E",
        "text": "user_impersonation"
      }
    ],
    "correctAnswers": [
      "azure_storage_permission=E",
      "azure_storage_type=C",
      "microsoft_graph_type=C"
    ],
    "explanation": "Azure Storage hiển thị `user_impersonation` dưới dạng phạm vi được ủy quyền duy nhất. Nó cho phép ứng dụng hoạt động trong phạm vi quyền của người dùng đã đăng nhập, do đó Azure Storage RBAC xác định quyền truy cập hiệu quả của người dùng vào các đốm màu. Quyền hiện có của Microsoft Graph `User.Read` cũng được ủy quyền khi ứng dụng hoạt động thay mặt cho người dùng đã đăng nhập.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 121",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/121-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-122",
    "questionNumber": 122,
    "text": "You need to ensure that validation testing is initiated according to the requirements.  \n  \nHow should you complete the code segment?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Cơ quan đăng ký vùng chứa Azure xuất bản `Microsoft.ContainerRegistry.ImagePushed` khi hình ảnh được đẩy. Dữ liệu sự kiện Lưới sự kiện của nó bao gồm `data.target.repository`, trong khi sự kiện Lưới sự kiện `topic` xác định tài nguyên đăng ký. Các hoạt động kiểm tra này giới hạn việc kiểm tra xác thực đối với các hình ảnh được đẩy trong kho lưu trữ `contentanalysisservice` của sổ đăng ký `contosoimages`.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 122",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/122-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-123",
    "questionNumber": 123,
    "text": "You need to troubleshoot the order workflow.  \n  \nWhich two actions should you take? Each correct answer represents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Review the API connections."
      },
      {
        "key": "B",
        "text": "Review the activity log."
      },
      {
        "key": "C",
        "text": "Review the run history."
      },
      {
        "key": "D",
        "text": "Review the trigger history."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Lịch sử kích hoạt Power Automate cho biết liệu một sự kiện đã được nhận và trình kích hoạt có được kích hoạt hay không, trong khi lịch sử chạy hiển thị trạng thái và lỗi chi tiết của từng lần thực thi quy trình làm việc. Cùng nhau, chúng phân biệt sự cố kích hoạt với lỗi trong hành động sau này của quy trình làm việc.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 123",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/123-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-124",
    "questionNumber": 124,
    "text": "You must add markup at line AM04 to implement the ContentReview role. How should the markup be completed?  \n  \nEach JSON segment may be used once, multiple times, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "blank1",
        "text": "Slot 1:",
        "correctAnswer": "E"
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
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "User"
      },
      {
        "key": "B",
        "text": "value"
      },
      {
        "key": "C",
        "text": "role"
      },
      {
        "key": "D",
        "text": "Application"
      },
      {
        "key": "E",
        "text": "allowedMemberTypes"
      },
      {
        "key": "F",
        "text": "allowedAccountTypes"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "User"
      },
      {
        "key": "B",
        "text": "value"
      },
      {
        "key": "C",
        "text": "role"
      },
      {
        "key": "D",
        "text": "Application"
      },
      {
        "key": "E",
        "text": "allowedMemberTypes"
      },
      {
        "key": "F",
        "text": "allowedAccountTypes"
      }
    ],
    "correctAnswers": [
      "blank1=E",
      "blank2=A",
      "blank3=B"
    ],
    "explanation": "Vai trò ứng dụng sử dụng `allowedMemberTypes` để xác định các loại người được giao được hỗ trợ. Việc bao gồm `User` giúp người dùng có thể chỉ định vai trò. Thuộc tính `value` là giá trị vai trò được phát ra trong xác nhận quyền sở hữu `roles`, do đó, nó được đặt thành `ContentReviewer`.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 124",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/124-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-125",
    "questionNumber": 125,
    "text": "You need to make sure that every message from Azure Event Grid is processed.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Event Grid topic"
      },
      {
        "key": "B",
        "text": "Azure Service Bus topic"
      },
      {
        "key": "C",
        "text": "Azure Service Bus queue"
      },
      {
        "key": "D",
        "text": "Azure Storage queue"
      },
      {
        "key": "E",
        "text": "Azure Logic App custom connector"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Hàng đợi Azure Service Bus cung cấp tính năng nhắn tin bền bỉ, không đồng bộ: Lưới sự kiện có thể phân phối các sự kiện đến hàng đợi và người tiêu dùng xử lý cũng như hoàn thành từng thông báo từ bộ đệm đó. Điều này tách biệt việc phân phối sự kiện khỏi quá trình xử lý và hỗ trợ xử lý đáng tin cậy khi người tiêu dùng tạm thời không có mặt.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 125",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/125-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-126",
    "questionNumber": 126,
    "text": "You are preparing to deploy an Azure virtual machine (VM)-based application.  \n  \nThe application VMs have these requirements:  \n  \n- When a VM is provisioned, its firewall must be automatically configured before it can access Azure resources.  \n- Supporting services must be installed by using an Azure PowerShell script stored in Azure Storage.  \n  \nYou need to ensure the requirements are met. Which features should you use?  \n  \nEach feature may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "firewall_configuration",
        "text": "Slot 1:",
        "correctAnswer": "D"
      },
      {
        "id": "supporting_services_script",
        "text": "Slot 2:",
        "correctAnswer": "D"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Run Command"
      },
      {
        "key": "B",
        "text": "Serial console"
      },
      {
        "key": "C",
        "text": "Hybrid Runbook Worker"
      },
      {
        "key": "D",
        "text": "Custom Script Extension"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Run Command"
      },
      {
        "key": "B",
        "text": "Serial console"
      },
      {
        "key": "C",
        "text": "Hybrid Runbook Worker"
      },
      {
        "key": "D",
        "text": "Custom Script Extension"
      }
    ],
    "correctAnswers": [
      "firewall_configuration=D",
      "supporting_services_script=D"
    ],
    "explanation": "Tiện ích mở rộng tập lệnh tùy chỉnh chạy tự động trong quá trình cung cấp VM, do đó, nó có thể định cấu hình tường lửa trước khi VM truy cập tài nguyên Azure, đồng thời có thể tải xuống và chạy tập lệnh PowerShell trực tiếp từ Azure Storage để cài đặt các dịch vụ hỗ trợ — đáp ứng cả hai yêu cầu. Bảng điều khiển nối tiếp là một công cụ khắc phục sự cố tương tác yêu cầu kết nối thủ công và không thể chạy tự động khi cung cấp, do đó, hành động tường lửa không chính xác. Run Command dành cho việc thực thi đặc biệt theo yêu cầu và Hybrid Runbook Worker nhắm mục tiêu các kịch bản Tự động hóa tại chỗ/kết hợp, cả hai kịch bản này đều không phù hợp với cấu hình tự động cung cấp sau từ tập lệnh được lưu trữ.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 126",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/126-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-127",
    "questionNumber": 127,
    "text": "You implement an Azure solution that includes Azure Cosmos DB, the latest Azure Cosmos DB SDK, and the Core (SQL) API. You also implement a change feed processor on a new container instance by using the Azure Functions trigger for Azure Cosmos DB.  \n  \nA large document batch keeps failing when one document in that batch is read. The triggered function continuously retries the same document batch, but a new batch must be read.  \n  \nYou need to implement the change feed processor to read the documents.  \n  \nWhich feature should you implement?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Hàng đợi thư chết ghi lại các tài liệu không thể xử lý được, cho phép quá trình gọi lại quá trình xử lý hoàn tất để bộ xử lý nguồn cấp dữ liệu thay đổi có thể kiểm tra điểm và tiếp tục đến các đợt sau. Thông báo về vòng đời cung cấp các trình xử lý như `WithErrorNotification` cho các lỗi của bộ xử lý và ủy quyền. Một container cho thuê duy trì trạng thái điểm kiểm tra và phối hợp; công cụ ước tính nguồn cấp dữ liệu thay đổi chỉ đo lường công việc chưa hoàn thành.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 127",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/127-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-128",
    "questionNumber": 128,
    "text": "You must resolve an issue with notification latency.  \n  \nWhich two actions should you take? Each correct answer represents part of the solution.  \n  \n> NOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Set Always On to true."
      },
      {
        "key": "B",
        "text": "Ensure that the Azure Function is using an App Service plan."
      },
      {
        "key": "C",
        "text": "Set Always On to false."
      },
      {
        "key": "D",
        "text": "Ensure that the Azure Function is set to use a consumption plan."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Trên gói Dịch vụ ứng dụng chuyên dụng, thời gian chạy Azure Functions có thể không hoạt động sau một thời gian không hoạt động. Việc bật **Luôn bật** giúp thiết bị luôn chạy và tránh độ trễ khởi động liên quan. Cài đặt Luôn bật chỉ khả dụng khi chức năng này sử dụng gói Dịch vụ ứng dụng; Các ứng dụng kế hoạch tiêu dùng được nền tảng kích hoạt tự động.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 128",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/128-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-129",
    "questionNumber": 129,
    "text": "You manage an Azure SQL database that supports Azure AD authentication.  \n  \nYou need to ensure that database developers can connect to the SQL database by using Microsoft SQL Server Management Studio (SSMS). You must also ensure that the developers authenticate by using their on-premises Active Directory account. Your approach should minimize authentication prompts.  \n  \nWhich of the following should you implement?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure AD token."
      },
      {
        "key": "B",
        "text": "Azure Multi-Factor authentication."
      },
      {
        "key": "C",
        "text": "Active Directory integrated authentication."
      },
      {
        "key": "D",
        "text": "OATH software tokens."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Xác thực tích hợp Active Directory sử dụng Xác thực Windows tích hợp với thông tin xác thực Active Directory tại chỗ hiện có của nhà phát triển, miễn là thư mục tại chỗ được nối với Microsoft Entra ID. Trên máy tham gia miền, nó cho phép truy cập vào Azure SQL mà không cần nhắc thông tin xác thực, giảm thiểu lời nhắc xác thực.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 129",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/129-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-130",
    "questionNumber": 130,
    "text": "HOTSPOT –  \n  \nYou are deploying a software-as-a-service (SaaS) ASP.NET Core web service as an Azure Web App. The service will use an on-premises SQL Server database for storage and includes a WebJob that processes data updates. Four customers will use the service.  \n  \n- Each WebJob instance handles data for one customer and must run as a singleton instance.  \n- Every deployment must be validated with deployment slots before it serves production data.  \n- Azure costs must be minimized.  \n- Azure resources must reside in an isolated network.  \n  \nYou need to configure the App Service plan for the Web App. How should you configure it?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Bốn khách hàng yêu cầu bốn phiên bản WebJob đơn lẻ chuyên dụng khi mỗi phiên bản xử lý các bản cập nhật của một khách hàng. Môi trường dịch vụ ứng dụng cung cấp khả năng triển khai mạng biệt lập cần thiết và sử dụng bậc giá Dịch vụ ứng dụng biệt lập. Các vị trí triển khai được hỗ trợ ở bậc Biệt lập và bốn là số lượng phiên bản được cung cấp thấp nhất đáp ứng yêu cầu của khách hàng.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 130",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/130-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-131",
    "questionNumber": 131,
    "text": "You need to audit sales transactions from retail stores.  \n  \nWhich two possible methods can achieve this goal? Each correct answer provides a complete solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Update the retail store location data upload process to include blob index tags. Create an Azure Function to process the blob index tags and filter by store location."
      },
      {
        "key": "B",
        "text": "Process the change feed logs of the Azure Blob storage account by using an Azure Function. Specify a time range for the change feed data."
      },
      {
        "key": "C",
        "text": "Enable blob versioning for the storage account. Use an Azure Function to process a list of the blob versions per day."
      },
      {
        "key": "D",
        "text": "Process an Azure Storage blob inventory report by using an Azure Function. Create rule filters on the blob inventory report."
      },
      {
        "key": "E",
        "text": "Subscribe to blob storage events by using an Azure Function and Azure Event Grid. Filter the events by store location."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "Nguồn cấp dữ liệu thay đổi Azure Blob Storage cung cấp nhật ký giao dịch lâu dài, bất biến cho các thay đổi siêu dữ liệu blob và blob, đồng thời hỗ trợ sử dụng các thay đổi trong phạm vi thời gian đã chọn. Kiểm kê blob của Bộ lưu trữ Azure tạo các báo cáo theo lịch trình, có thể lọc về các blob và thuộc tính của chúng, báo cáo này có thể được xử lý để kiểm tra nội dung lưu trữ.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 131",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/131-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-132",
    "questionNumber": 132,
    "text": "You are developing a web application that uses the Microsoft identity platform for user authentication.  \n  \nYou are implementing user identification for the web application.  \n  \nYou need to obtain a claim that uniquely identifies a user. Which claim type should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "aud"
      },
      {
        "key": "B",
        "text": "nonce"
      },
      {
        "key": "C",
        "text": "oid"
      },
      {
        "key": "D",
        "text": "idp"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Xác nhận quyền sở hữu `oid` là mã định danh đối tượng bất biến cho tài khoản người dùng. Nó nhận dạng duy nhất người dùng trên các ứng dụng sử dụng nền tảng nhận dạng của Microsoft.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 132",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/132-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-133",
    "questionNumber": 133,
    "text": "You use Azure Front Door Service and expect inbound files to use Brotli compression. You find that inbound XML files, each 9 MB in size, are not compressed.  \n  \nYou need to identify the root cause.  \n  \nFor each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "The file MIME type is supported by the service.",
        "correctAnswer": "Yes"
      },
      {
        "id": "2",
        "text": "Edge nodes must be purged of all cache assets.",
        "correctAnswer": "No"
      },
      {
        "id": "3",
        "text": "The compression type is supported.",
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
    "explanation": "Azure Front Door hỗ trợ các kiểu XML MIME và nén Brotli. Tuy nhiên, tệp phải nhỏ hơn 8 MB để đủ điều kiện nén, vì vậy tệp XML 9 MB không đủ điều kiện. Việc xóa bộ nhớ đệm chỉ xóa nội dung được lưu trong bộ nhớ đệm và không làm cho tệp có kích thước quá lớn có thể nén được.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 133",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/133-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-134",
    "questionNumber": 134,
    "text": "Solution: Update the app with a method named `statuscheck` that runs the scripts. Update the app settings for the app. Configure `WEBSITE_SWAP_WARMUP_PING_PATH` and `WEBSITE_SWAP_WARMUP_PING_STATUSES` with a path to the new method and appropriate response codes.  \n  \nDoes this solution meet the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "No"
      },
      {
        "key": "B",
        "text": "Yes"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "`WEBSITE_SWAP_WARMUP_PING_PATH` định cấu hình điểm cuối mà Azure App Service ping để làm ấm khe triển khai mục tiêu trong quá trình hoán đổi. `WEBSITE_SWAP_WARMUP_PING_STATUSES` xác định mã trạng thái HTTP cho phép tiếp tục khởi động và trao đổi; các phản hồi khác dừng hoạt động. Điểm cuối chạy các tập lệnh cần thiết và trả về mã trạng thái được chấp nhận, đảm bảo các hành động đó hoàn tất trước khi quá trình hoán đổi được tiến hành.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 134",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/134-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-135",
    "questionNumber": 135,
    "text": "Solution: Turn on auto swap for the Testing slot. Deploy the app to the Testing slot.  \n  \nDoes this solution meet the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "No"
      },
      {
        "key": "B",
        "text": "Yes"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Tự động hoán đổi sẽ làm ấm khe nguồn trước khi hoán đổi, nhưng việc bật nó sẽ không cấu hình các hành động khởi tạo tùy chỉnh. Đối với các ứng dụng Azure App Service được lưu trữ trên Windows, phần tử `applicationInitialization` trong `Web.config` chỉ định các hành động khởi động tùy chỉnh và Dịch vụ ứng dụng sẽ đợi quá trình khởi động đó kết thúc trước khi hoán đổi với vị trí mục tiêu.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 135",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/135-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-136",
    "questionNumber": 136,
    "text": "Solution: Turn off auto swap. Update the app with a method called `statuscheck` that runs the scripts. Turn auto swap back on, and deploy the app to the Production slot.  \n  \nDoes this solution meet the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "No"
      },
      {
        "key": "B",
        "text": "Yes"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Dịch vụ ứng dụng yêu cầu đường dẫn khởi động được định cấu hình hoặc cấu hình khởi tạo ứng dụng để gọi điểm cuối trước khi hoán đổi vị trí. Việc thêm một phương thức `statuscheck` không khiến Dịch vụ ứng dụng gọi nó; `WEBSITE_SWAP_WARMUP_PING_PATH` phải được đặt thành đường dẫn như `/statuscheck` hoặc phải định cấu hình khởi tạo ứng dụng tương đương.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 136",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/136-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-137",
    "questionNumber": 137,
    "text": "Solution: Modify the `web.config` file to add the `applicationInitialization` configuration element. Define custom initialization actions that run the scripts.  \n  \nDoes this solution meet the goal?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "No"
      },
      {
        "key": "B",
        "text": "Yes"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Azure App Service hỗ trợ khởi động trước khi hoán đổi tùy chỉnh thông qua phần tử `applicationInitialization` trong `Web.config`. Nền tảng chạy các hành động khởi tạo được chỉ định và đợi quá trình khởi động tùy chỉnh kết thúc trước khi hoàn tất việc hoán đổi vị trí.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 137",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/137-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-138",
    "questionNumber": 138,
    "text": "You build an ASP.NET Core application by integrating the Application Insights SDK into your solution.  \n  \nThe application transmits telemetry at a very high rate during a short time interval. You notice fewer events, traces, and metrics being recorded, along with higher error rates for telemetry ingestion.  \n  \nYou need to decrease telemetry traffic, data costs, and storage costs while retaining a statistically correct analysis of application telemetry data. The solution must ensure that HTTP request and response data can be correlated.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Configure a Log Analytics workspace data collection rule (DCR). Use a Kusto Query Language (KQL) statement to filter incoming data."
      },
      {
        "key": "B",
        "text": "Disable adaptive sampling. Enable and configure the fixed-rate sampling module."
      },
      {
        "key": "C",
        "text": "Set a daily cap on the Log Analytics workspace. Create an Activity log alert rule."
      },
      {
        "key": "D",
        "text": "Configure the TelemetryConfiguration object in the instrumented code. Increase the metric aggregation interval to 15 minutes."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Lấy mẫu tốc độ cố định làm giảm việc đo từ xa được gửi từ các ứng dụng ASP.NET Core ở tỷ lệ phần trăm được định cấu hình, giảm lưu lượng và chi phí. Application Insights điều chỉnh số lượng được hiển thị cho tốc độ lấy mẫu để cung cấp giá trị gần đúng chính xác về mặt thống kê và việc lấy mẫu của nó bảo toàn phép đo từ xa liên quan theo ID hoạt động; lấy mẫu theo tỷ lệ cố định cũng đồng bộ hóa các quyết định của máy khách và máy chủ để các yêu cầu HTTP liên quan có thể tương quan với nhau.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 138",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/138-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-139",
    "questionNumber": 139,
    "text": "Your company has a web app named WebApp1.  \n  \nYou use the WebJobs SDK to create a triggered App Service background task that automatically calls a function in the code whenever new data arrives in a queue.  \n  \nYou are preparing to configure the service that processes a queue data item. Which service should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Logic Apps"
      },
      {
        "key": "B",
        "text": "WebJobs"
      },
      {
        "key": "C",
        "text": "Flow"
      },
      {
        "key": "D",
        "text": "Functions"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Azure WebJobs lưu trữ xử lý nền cho ứng dụng Dịch vụ ứng dụng. SDK WebJobs cung cấp trình kích hoạt hàng đợi tự động gọi một hàm bất cứ khi nào nhận được thông báo hàng đợi mới.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 139",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/139-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-140",
    "questionNumber": 140,
    "text": "You are developing an Azure Function app that requires scalability and integration with Azure Blob Storage.  \n  \nThe code must run in an Azure production environment that can scale the function based on demand, provide instance-size selection and greater concurrency control.  \n  \nThe function must connect to other Azure services secured within a virtual network, scale to zero instances when no events are received, and minimize costs.  \n  \nYou need to choose a hosting plan that meets these requirements.  \n  \nWhich plan should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Flex Consumption"
      },
      {
        "key": "B",
        "text": "Consumption"
      },
      {
        "key": "C",
        "text": "Premium"
      },
      {
        "key": "D",
        "text": "Dedicated"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Gói Tiêu dùng Linh hoạt cung cấp khả năng mở rộng quy mô theo sự kiện và thanh toán dựa trên mức tiêu thụ, không cần máy chủ, bao gồm cả hành vi mở rộng quy mô về 0. Nó cũng hỗ trợ tích hợp mạng ảo, kích thước bộ nhớ phiên bản có thể lựa chọn và khả năng đồng thời có thể định cấu hình, cùng đáp ứng các yêu cầu về kết nối, khả năng mở rộng, kiểm soát và chi phí.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 140",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/140-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-141",
    "questionNumber": 141,
    "text": "You are developing an Azure solution.  \n  \nYou need to write code that accesses a secret stored in Azure Key Vault.  \n  \nEach code segment can be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "client",
        "text": "Slot 1:",
        "correctAnswer": "D"
      },
      {
        "id": "credential",
        "text": "Slot 2:",
        "correctAnswer": "A"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "DefaultAzureCredential"
      },
      {
        "key": "B",
        "text": "ClientSecretCredential"
      },
      {
        "key": "C",
        "text": "CloudClients"
      },
      {
        "key": "D",
        "text": "SecretClient"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "DefaultAzureCredential"
      },
      {
        "key": "B",
        "text": "ClientSecretCredential"
      },
      {
        "key": "C",
        "text": "CloudClients"
      },
      {
        "key": "D",
        "text": "SecretClient"
      }
    ],
    "correctAnswers": [
      "client=D",
      "credential=A"
    ],
    "explanation": "`SecretClient` là ứng dụng khách SDK bí mật Azure Key Vault. Hàm tạo của nó lấy URI vault và `TokenCredential`; `DefaultAzureCredential` cung cấp thông tin xác thực đó và chọn một bản phát triển có sẵn hoặc danh tính được lưu trữ trên Azure khi chạy.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 141",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/141-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-142",
    "questionNumber": 142,
    "text": "You are developing several APIs hosted in Azure API Management (APIM).  \n  \nYou must inspect API request processing in APIM, including requests made to APIM by using a REST client. The request inspection must include the following information:  \n  \n- Requests APIM sent to the API backend and the response that it received  \n- Policies applied to the response before it is returned to the caller  \n- Errors that occurred while processing the request and the policies applied to those errors  \n- The original request APIM received from the caller and the policies applied to the request  \n  \nYou need to inspect the APIs.  \n  \nWhich three actions should you take? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Enable the Allow tracing setting for the subscription used to inspect the API."
      },
      {
        "key": "B",
        "text": "Add the Ocp-Apim-Trace header value to the API call whit a value set to true."
      },
      {
        "key": "C",
        "text": "Add the Ocp-Apim-Subscription-Key header value to the key for a subscription that allows access to the API."
      },
      {
        "key": "D",
        "text": "Create and configure a custom policy. Apply the policy to the inbound policy section with a global scope."
      },
      {
        "key": "E",
        "text": "Create and configure a custom policy. Apply the policy to the outbound policy section with an API scope."
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Trong mô hình theo dõi APIM dựa trên đăng ký cũ, dấu vết yêu cầu hoàn chỉnh được bật bằng cách cho phép theo dõi đăng ký, gửi `Ocp-Apim-Trace: true` và bao gồm `Ocp-Apim-Subscription-Key` cho đăng ký có thể truy cập API. Dấu vết tích hợp ghi lại quá trình xử lý gửi đến, phụ trợ, gửi đi và xử lý lỗi, bao gồm cả việc thực thi chính sách; chính sách gửi đến hoặc gửi đi tùy chỉnh là không cần thiết. Tài liệu APIM hiện tại lưu ý rằng cơ chế tiêu đề/đăng ký cũ này được no hỗ trợ lâu hơn và đã được thay thế bằng mã thông báo theo dõi cấp API có giới hạn thời gian.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 142",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/142-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-143",
    "questionNumber": 143,
    "text": "You are creating an Azure Static Web App containing training materials for a tool company. Each tool’s material is on a static webpage linked from that tool’s publicly available description page.  \n  \nA user must authenticate with Azure AD before viewing training.  \n  \nEnsure that users can view the training material pages after authentication. How should you complete the configuration file?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Ứng dụng web tĩnh Azure có thể ghi đè phản hồi 401 được tạo cho yêu cầu không được xác thực tới tuyến đường được bảo vệ. Việc chuyển hướng phản hồi đó tới `/.auth/login/aad` sẽ bắt đầu đăng nhập Azure AD. Tham số `post_login_redirect_uri=.referrer` đưa người dùng trở lại trang đào tạo được yêu cầu ban đầu sau khi đăng nhập và 302 là trạng thái chuyển hướng tạm thời thích hợp.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 143",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/143-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-144",
    "questionNumber": 144,
    "text": "You need to lower read latency for the retail store solution.  \n  \nWhat are two possible methods to accomplish this goal? Each correct answer provides a complete solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create a new composite index for the store location data queries in Azure Cosmos DB. Modify the queries to support parameterized SQL and update the Azure Function app to call the new queries."
      },
      {
        "key": "B",
        "text": "Provision an Azure Cosmos DB dedicated gateway. Update the Azure Function app connection string to use the new dedicated gateway endpoint."
      },
      {
        "key": "C",
        "text": "Configure Azure Cosmos DB consistency to session consistency. Cache session tokens in a new Azure Redis cache instance after every write. Update reads to use the session token stored in Azure Redis."
      },
      {
        "key": "D",
        "text": "Provision an Azure Cosmos DB dedicated gateway. Update blob storage to use the new dedicated gateway endpoint."
      },
      {
        "key": "E",
        "text": "Configure Azure Cosmos DB consistency to strong consistency. Increase the RUs for the container supporting store location data."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Chỉ mục tổng hợp cải thiện hiệu quả của các truy vấn Azure Cosmos DB hiện hành, bao gồm các truy vấn có nhiều bộ lọc hoặc lọc và sắp xếp, có thể giảm chi phí và độ trễ thực hiện truy vấn. Cổng chuyên dụng cung cấp điểm cuối chuyên dụng và bộ nhớ đệm tích hợp; các yêu cầu được định tuyến qua nó có độ trễ thấp hơn, dễ dự đoán hơn so với những yêu cầu sử dụng cổng tiêu chuẩn và các lần truy cập bộ nhớ đệm được cung cấp từ bộ nhớ.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 144",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/144-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-145",
    "questionNumber": 145,
    "text": "You develop and deploy the following `staticwebapp.config.json` file to the `app_location` specified in the workflow file for an Azure Static Web App:  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783826167335-efytcfms.png)  \n  \nFor each statement, select **Yes** if it is true. Otherwise, select **No**.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "Unauthenticated users are challenged to authenticate with GitHub.",
        "correctAnswer": "No"
      },
      {
        "id": "2",
        "text": "A non-existent file in the /images/ folder will generate a 404 response code.",
        "correctAnswer": "Yes"
      },
      {
        "id": "3",
        "text": "HTTP GET method requests from authenticated users in the role named registeredusers are sent to the API folder.",
        "correctAnswer": "Yes"
      },
      {
        "id": "4",
        "text": "Authenticated users that are not in the role named registeredusers and unauthenticated users are served a 401 HTTP error when accessing the API folder.",
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
      "3:Yes",
      "4:No"
    ],
    "explanation": "Phản hồiOverrides cho 401 chuyển hướng các yêu cầu trái phép đến /.auth/login/aad (Azure AD), do đó, những người dùng chưa được xác thực truy cập vào tuyến đường được bảo vệ sẽ bị thách thức bởi AAD chứ không phải GitHub; Đăng nhập GitHub chỉ xảy ra nếu người dùng duyệt rõ ràng đến/đăng nhập (No). NavigationFallback loại trừ /images/*.{png,jpg,gif} khỏi việc ghi lại chỉ mục.html, do đó, một tệp hình ảnh bị thiếu sẽ được cung cấp trực tiếp và trả về 404 (404ResponseOverride ghi lại thành /404.html nhưng việc viết lại sẽ giữ nguyên mã trạng thái 404) (Yes). Tuyến đường /api/* với các phương thức GET và allowRoles người dùng đã đăng ký cho phép các yêu cầu GET từ người dùng đã đăng ký tiếp cận API (Yes). Đối với statement 4, người dùng thiếu vai trò người dùng đã đăng ký và người dùng ẩn danh sẽ nhận được 401, nhưng phản hồi 401 sẽ chuyển đổi thành chuyển hướng 302 đến trang đăng nhập AAD, vì vậy họ KHÔNG gặp lỗi 401 (No).",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783826167335-efytcfms.png",
    "sourceTitle": "Examcademy AZ-204 Question 145",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/145-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-146",
    "questionNumber": 146,
    "text": "You manage an Azure App Service web app named App1 and its associated Azure Application Insights resource, AppInsights1.  \n  \nYou need alerts for any abnormal increase in the rate of failed HTTP requests directed to App1.  \n  \nYou must implement push notifications.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From the Azure portal, create a service health alert of Azure Monitor."
      },
      {
        "key": "B",
        "text": "From the Azure portal, modify a smart detection rule of AppInsights1."
      },
      {
        "key": "C",
        "text": "Deploy an Azure Resource Manager template that configures AppInsights1."
      },
      {
        "key": "D",
        "text": "From the Azure portal, modify an action group of Azure Monitor."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Lỗi phát hiện thông minh Application Insights Sự bất thường phát hiện sự gia tăng bất thường về tỷ lệ yêu cầu HTTP không thành công. Các nhóm hành động Azure Monitor xác định việc gửi thông báo cảnh báo và hỗ trợ thông báo đẩy ứng dụng Azure, do đó, nhóm hành động được liên kết với cảnh báo phải được sửa đổi để bao gồm hành động thông báo đẩy.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 146",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/146-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-147",
    "questionNumber": 147,
    "text": "You need to implement a solution that resolves the retail store location data issue.  \n  \nWhich three Azure Blob features should you enable? Each correct answer represents part of the solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Soft delete"
      },
      {
        "key": "B",
        "text": "Change feed"
      },
      {
        "key": "C",
        "text": "Snapshots"
      },
      {
        "key": "D",
        "text": "Versioning"
      },
      {
        "key": "E",
        "text": "Object replication"
      },
      {
        "key": "F",
        "text": "Immutability"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "D"
    ],
    "explanation": "Khôi phục theo thời điểm Azure Blob phụ thuộc vào phiên bản blob, xóa mềm blob và thay đổi nguồn cấp dữ liệu. Lập phiên bản duy trì trạng thái blob trước đó, xóa mềm sẽ giữ lại các blob và phiên bản đã xóa trong khoảng thời gian lưu giữ đã định cấu hình, đồng thời thay đổi nguồn cấp dữ liệu ghi lại những thay đổi blob cần thiết để khôi phục các blob khối về thời điểm trước đó.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 147",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/147-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-148",
    "questionNumber": 148,
    "text": "HOTSPOT –  \n  \nYou must implement event routing for retail store location data.  \n  \nWhich configurations should you use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Azure Event Hubs sử dụng dữ liệu sự kiện phát trực tuyến có khối lượng lớn chẳng hạn như đo từ xa từ các địa điểm bán lẻ. Azure Event Grid định tuyến các sự kiện đến người đăng ký và Ứng dụng chức năng Azure có thể nhận và xử lý các sự kiện Lưới sự kiện.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 148",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/148-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-149",
    "questionNumber": 149,
    "text": "You need to store customized items in Azure Cosmos DB.  \n  \nWhich Azure Cosmos DB configuration should be used?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Azure Cosmos DB dành cho NoSQL là API tài liệu gốc và hỗ trợ xử lý nguồn cấp dữ liệu thay đổi của các bản cập nhật hiện tại. Tính nhất quán của phiên đảm bảo hoạt động đọc-ghi của bạn và đọc đơn điệu cho một phiên của người dùng, đáp ứng yêu cầu về độ chính xác của người dùng hiện tại với độ trễ thấp hơn và thông lượng cao hơn Tính nhất quán mạnh.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 149",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/149-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-150",
    "questionNumber": 150,
    "text": "You need to secure the corporate website for users.  \n  \nWhich four actions should you perform in sequence?  \n  \nMore than one ordering of the choices is correct; credit is awarded for any correct ordering.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "1",
        "text": "1.",
        "correctAnswer": "A"
      },
      {
        "id": "2",
        "text": "2.",
        "correctAnswer": "C"
      },
      {
        "id": "3",
        "text": "3.",
        "correctAnswer": "E"
      },
      {
        "id": "4",
        "text": "4.",
        "correctAnswer": "D"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Register the web app with Microsoft Entra."
      },
      {
        "key": "B",
        "text": "Create a user flow and associate the function app."
      },
      {
        "key": "C",
        "text": "Create a client secret."
      },
      {
        "key": "D",
        "text": "Grant Microsoft Graph API permissions to the web app."
      },
      {
        "key": "E",
        "text": "Create a user flow and associate the web app."
      },
      {
        "key": "F",
        "text": "Register the function app with Microsoft Entra."
      },
      {
        "key": "G",
        "text": "Grant Microsoft Graph API permissions to the function app."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Register the web app with Microsoft Entra."
      },
      {
        "key": "B",
        "text": "Create a user flow and associate the function app."
      },
      {
        "key": "C",
        "text": "Create a client secret."
      },
      {
        "key": "D",
        "text": "Grant Microsoft Graph API permissions to the web app."
      },
      {
        "key": "E",
        "text": "Create a user flow and associate the web app."
      },
      {
        "key": "F",
        "text": "Register the function app with Microsoft Entra."
      },
      {
        "key": "G",
        "text": "Grant Microsoft Graph API permissions to the function app."
      }
    ],
    "correctAnswers": [
      "1=A",
      "2=C",
      "3=E",
      "4=D"
    ],
    "explanation": "Luồng người dùng ID bên ngoài của Microsoft Entra cung cấp các lựa chọn đăng nhập bao gồm mật mã email một lần và tài khoản xã hội Google hoặc Facebook. Trang web công ty phải được đăng ký làm ứng dụng dành cho khách hàng và cấu hình máy chủ bí mật của nó sử dụng bí mật của khách hàng. Liên kết ứng dụng đã đăng ký đó với luồng người dùng và cấp các quyền Microsoft Graph cần thiết cho ứng dụng đó. Ứng dụng chức năng không cấu hình xác thực khách hàng cho trang web công ty.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 150",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/150-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-151",
    "questionNumber": 151,
    "text": "You need to store inventory item images.  \n  \nWhich Azure Blob Storage feature should you use? Each feature may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "store_images_native_format",
        "text": "Slot 1:",
        "correctAnswer": "B"
      },
      {
        "id": "store_image_exif_data",
        "text": "Slot 2:",
        "correctAnswer": "D"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Index tags"
      },
      {
        "key": "B",
        "text": "System properties"
      },
      {
        "key": "C",
        "text": "Change feed"
      },
      {
        "key": "D",
        "text": "User-defined metadata"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Index tags"
      },
      {
        "key": "B",
        "text": "System properties"
      },
      {
        "key": "C",
        "text": "Change feed"
      },
      {
        "key": "D",
        "text": "User-defined metadata"
      }
    ],
    "correctAnswers": [
      "store_images_native_format=B",
      "store_image_exif_data=D"
    ],
    "explanation": "Việc lưu trữ hình ảnh ở định dạng gốc phụ thuộc vào thuộc tính hệ thống — cụ thể là thuộc tính hệ thống Loại nội dung (ContentType) — cho khách hàng và trình duyệt biết loại MIME chính xác để hình ảnh hiển thị ở định dạng gốc. Dữ liệu ứng dụng tùy ý như thông tin EXIF ​​​​của ảnh được lưu trữ dưới dạng siêu dữ liệu do người dùng xác định, là các cặp tên-giá trị tùy chỉnh được gắn vào blob cho mục đích riêng của bạn. Thẻ chỉ mục sẽ được sử dụng nếu bạn cần tìm kiếm/phân loại gốc, được lập chỉ mục trên các đốm màu và Nguồn cấp dữ liệu thay đổi là nhật ký có thứ tự của các sự kiện thay đổi blob — cả hai thẻ này đều không được sử dụng để lưu trữ định dạng byte hình ảnh hoặc dữ liệu EXIF.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 151",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/151-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-152",
    "questionNumber": 152,
    "text": "You need to mitigate the Azure Cache for Redis issue.  \n  \nWhat are two possible ways to accomplish this goal? Each correct answer presents part of the solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Test application code by rebooting all nodes in the test environment."
      },
      {
        "key": "B",
        "text": "Configure client connections to retry commands with exponential backoff."
      },
      {
        "key": "C",
        "text": "Modify the maxmemory policy to evict the least frequently used keys out of all keys."
      },
      {
        "key": "D",
        "text": "Increase the maxmemory-reserved and maxfragmentationmemory-reserved values."
      },
      {
        "key": "E",
        "text": "Test application code by purging the cache in the test environment."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "Chuyển đổi dự phòng liên quan đến bảo trì có thể thêm tải sao chép và gây ra độ trễ hoặc thời gian chờ. Logic thử lại máy khách với thời gian chờ theo cấp số nhân sẽ xử lý các lỗi kết nối và lệnh nhất thời. Việc tăng `maxmemory-reserved` và `maxfragmentationmemory-reserved` dự trữ bộ nhớ cho các hoạt động và phân mảnh không phải bộ đệm, giúp bộ đệm vẫn phản hồi nhanh khi tải chuyển đổi dự phòng và bảo trì.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 152",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/152-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-153",
    "questionNumber": 153,
    "text": "You need to deliver static content from the corporate website.  \n  \nWhat are two possible ways to accomplish this goal? Each correct answer provides a complete solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Store all static content in Azure Blob Storage. Enable Azure Content Delivery Network for the storage account."
      },
      {
        "key": "B",
        "text": "Configure App Service networking to create a Content Delivery Network profile and endpoint."
      },
      {
        "key": "C",
        "text": "Configure the Azure App Service Local Cache feature and set the app setting WEBSITE_LOCAL_CACHE_SIZEINMB value."
      },
      {
        "key": "D",
        "text": "Create a nested Azure Traffic Manager profile. Configure the parent profile to the performance traffic routing method and the child profile to the priority traffic routing method."
      },
      {
        "key": "E",
        "text": "Update the Azure Traffic Manager routing method to priority."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Mạng phân phối nội dung Azure lưu trữ nội dung web tĩnh tại các vị trí biên được phân phối trên toàn cầu. Điểm cuối CDN có thể sử dụng Azure Blob Storage hoặc ứng dụng web Azure App Service làm nguồn gốc, do đó, việc lưu trữ nội dung tĩnh trong Blob Storage và bật CDN hoặc tạo hồ sơ CDN và điểm cuối cho trang Dịch vụ ứng dụng đều đáp ứng yêu cầu.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 153",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/153-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-154",
    "questionNumber": 154,
    "text": "You need to implement processing for enqueued inventory items.  \n  \nWhich message value should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Sequence number"
      },
      {
        "key": "B",
        "text": "Timestamp"
      },
      {
        "key": "C",
        "text": "Session identifier"
      },
      {
        "key": "D",
        "text": "Partition key"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Phiên Azure Service Bus cung cấp khả năng xử lý FIFO cho các tin nhắn liên quan. Việc chỉ định cùng một mã định danh phiên cho các thông báo mục hàng tồn kho sẽ khiến Service Bus xử lý các thông báo của phiên đó theo thứ tự; chỉ một số thứ tự không đảm bảo thứ tự xử lý khi sử dụng nhiều người tiêu dùng.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 154",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/154-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-155",
    "questionNumber": 155,
    "text": "You need to use Azure Functions to implement a function that processes customized items. How should you implement the function?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Trình kích hoạt Azure Functions gọi hàm khi xảy ra sự kiện. Trình kích hoạt Bus dịch vụ chạy khi một tin nhắn được đặt trên hàng đợi Azure Service Bus đã định cấu hình, khớp với các tin nhắn mục tùy chỉnh phải được xử lý. Cosmos DB sẽ được sử dụng làm liên kết đầu ra để lưu các mục đã xử lý chứ không phải làm nguồn sự kiện kích hoạt trong quy trình này.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 155",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/155-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-156",
    "questionNumber": 156,
    "text": "You need to implement code that processes inventory changes and updates orders.  \n  \nWhich configuration should you use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Chức năng không có máy chủ Azure Functions là máy chủ điện toán hướng sự kiện đơn giản nhất để phản ứng với các thay đổi về hàng tồn kho và cập nhật đơn đặt hàng, do đó lựa chọn máy chủ điện toán là chính xác. Khi đọc nguồn cấp dữ liệu thay đổi Azure Cosmos DB, có hai cách tiếp cận: mô hình kéo, trong đó khách hàng của bạn thăm dò và quản lý trạng thái điểm kiểm tra/cho thuê của chính nó và mô hình đẩy, trong đó bộ xử lý nguồn cấp dữ liệu thay đổi sẽ đẩy các sự kiện mới vào mã của bạn. Trình kích hoạt Azure Functions Cosmos DB được xây dựng trên bộ xử lý nguồn cấp dữ liệu thay đổi và do đó sử dụng mô hình PUSH - chức năng này được gọi tự động trên mỗi thay đổi mới. Vì máy chủ điện toán là một Hàm Azure nên cơ chế đọc nguồn cấp dữ liệu thay đổi phù hợp là mô hình đẩy chứ không phải mô hình kéo.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 156",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/156-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-157",
    "questionNumber": 157,
    "text": "You must support local development testing for developers.  \n  \nWhich tool should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azurite"
      },
      {
        "key": "B",
        "text": "Azure Storage Emulator"
      },
      {
        "key": "C",
        "text": "SQL Server Management Studio (SSMS)"
      },
      {
        "key": "D",
        "text": "Azure Storage Explorer"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Azurite cung cấp trình mô phỏng cục bộ cho Azure Blob, Queue và Table Storage hỗ trợ thử nghiệm phát triển và tích hợp. Nó thay thế Trình mô phỏng lưu trữ Azure không còn được dùng nữa và tiếp tục nhận được bản cập nhật cho các phiên bản API lưu trữ Azure mới nhất.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 157",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/157-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-158",
    "questionNumber": 158,
    "text": "You need to securely access inventory items while developing the Inventory Items API.  \n  \nWhat are three possible ways to accomplish this goal? Each correct answer provides a complete solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create a SQL role definition under the Azure Cosmos DB account.Create a user-assigned managed identity and assign the identity to the function app.Assign the user assigned managed identity the SQL role definition.Update the function app code to implement the DefaultAzureCredential class and reference the user-assigned managed identity."
      },
      {
        "key": "B",
        "text": "Create a SQL role definition under the Azure Cosmas DB account.Assign the role to the function apps system-assigned managed identity.Programmatically access the Azure Cosmos DB keys from the function app."
      },
      {
        "key": "C",
        "text": "Create a custom Microsoft Entra role.Assign the custom roe to the Azure Cosmos DB accountUpdate the function app to use certificate-based authentication."
      },
      {
        "key": "D",
        "text": "Create a custom Microsoft Entra role.Assign the custom role to Azure Key Vault.Assign the custom role to the function app.Reference the custom role in the function app code when accessing Azure Key Vault values."
      },
      {
        "key": "E",
        "text": "Create a system-assigned managed ident for the function app with read access to secrets in Azure Key Vault.Store the Azure Cosmos DB primary key and UR in Azure Key Vaults secrets.Use function app settings to reference the secret values."
      }
    ],
    "correctAnswers": [
      "A",
      "D",
      "E"
    ],
    "explanation": "Dữ liệu Cosmos DB có thể được bảo mật bằng Microsoft Entra Identity + RBAC (khóa no) hoặc bằng cách bảo vệ các khóa trong Key Vault. Option A sử dụng user-assigned managed identity được cấp định nghĩa vai trò Cosmos DB SQL và DefaultAzureCredential - một cách tiếp cận hoàn chỉnh, không cần chìa khóa. Option E lưu trữ URI Cosmos DB và khóa chính dưới dạng bí mật Key Vault và tham chiếu chúng từ cài đặt ứng dụng chức năng thông qua system-assigned managed identity với quyền truy cập đọc bí mật - hoàn tất. Option D sử dụng vai trò Entra tùy chỉnh trong phạm vi Key Vault để cho phép ứng dụng chức năng đọc các giá trị - hoàn tất. Option B không chính xác vì sau khi tạo vai trò SQL, nó sẽ 'truy cập vào các khóa Cosmos DB theo chương trình', mâu thuẫn với cách tiếp cận dựa trên vai trò và option C dựa trên quyền truy cập dựa trên xác thực chứng chỉ dựa trên vai trò tùy chỉnh được gán cho tài khoản, đây không phải là mẫu mặt phẳng dữ liệu không cần khóa hợp lệ.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 158",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/158-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-159",
    "questionNumber": 159,
    "text": "You need to implement the Log policy.  \n  \nComplete the Azure Event Grid subscription. Each JSON segment may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "endpointType",
        "text": "Slot 1:",
        "correctAnswer": "B"
      },
      {
        "id": "filterProperty",
        "text": "Slot 2:",
        "correctAnswer": "F"
      },
      {
        "id": "includedEventType",
        "text": "Slot 3:",
        "correctAnswer": "G"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "All"
      },
      {
        "key": "B",
        "text": "WebHook"
      },
      {
        "key": "C",
        "text": "EventHub"
      },
      {
        "key": "D",
        "text": "subjectEndsWith"
      },
      {
        "key": "E",
        "text": "Microsoft.Storage"
      },
      {
        "key": "F",
        "text": "subjectBeginsWith"
      },
      {
        "key": "G",
        "text": "Microsoft.Storage.BlobCreated"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "All"
      },
      {
        "key": "B",
        "text": "WebHook"
      },
      {
        "key": "C",
        "text": "EventHub"
      },
      {
        "key": "D",
        "text": "subjectEndsWith"
      },
      {
        "key": "E",
        "text": "Microsoft.Storage"
      },
      {
        "key": "F",
        "text": "subjectBeginsWith"
      },
      {
        "key": "G",
        "text": "Microsoft.Storage.BlobCreated"
      }
    ],
    "correctAnswers": [
      "endpointType=B",
      "filterProperty=F",
      "includedEventType=G"
    ],
    "explanation": "Azure Event Grid sử dụng `WebHook` cho điểm cuối phân phối webhook. Chủ đề sự kiện Blob Storage bắt đầu bằng `/blobServices/default/containers/<containername>/`; do đó `subjectBeginsWith` giới hạn đăng ký ở vùng chứa `logdrop`. `Microsoft.Storage.BlobCreated` là loại sự kiện được phát ra khi một blob được tạo.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 159",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/159-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-160",
    "questionNumber": 160,
    "text": "You must configure the ContentUploadService deployment.  \n  \nWhich two actions should you take? Each correct answer represents part of the solution.  \n  \n> NOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Add the following markup to line CS23: type: Private"
      },
      {
        "key": "B",
        "text": "Add the following markup to line CS24: osType: Windows"
      },
      {
        "key": "C",
        "text": "Add the following markup to line CS24: osType: Linux"
      },
      {
        "key": "D",
        "text": "Add the following markup to line CS23: type: Public"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Đối với nhóm vùng chứa Azure Container Instances được triển khai để truy cập mạng ảo nội bộ, giá trị `ipAddress.type` phải là `Private`. `osType` của nhóm vùng chứa phải khớp với vùng chứa Linux của nó, do đó, nó phải được đặt thành `Linux`. Azure Container Instances định nghĩa `type` là `Public` hoặc `Private` và hỗ trợ `Windows` hoặc `Linux` cho `osType`.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 160",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/160-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-161",
    "questionNumber": 161,
    "text": "You have an Azure API Management (APIM) Standard tier instance named APIM1 that uses a managed gateway.  \n  \nYou plan to use APIM1 to publish an API named API1 that uses a backend database supporting only a limited number of requests per minute. You also require a policy for API1 that minimizes the possibility that requests to the backend database from each individual IP address you specify exceed the supported limit.  \n  \nYou need to identify a policy for API1 that meets the requirements.  \n  \nWhich policy should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "ip-filter"
      },
      {
        "key": "B",
        "text": "quota-by-key"
      },
      {
        "key": "C",
        "text": "rate-limit-by-key"
      },
      {
        "key": "D",
        "text": "rate-limit"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Chính sách `rate-limit-by-key` giới hạn tốc độ cuộc gọi cho mỗi khóa bộ đếm trong khoảng thời gian gia hạn được chỉ định. Việc đặt khóa bộ đếm cho địa chỉ IP của người gọi sẽ áp dụng giới hạn mỗi phút một cách độc lập cho từng địa chỉ IP, giúp bảo vệ cơ sở dữ liệu phụ trợ với ràng buộc yêu cầu mỗi phút.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 161",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/161-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-162",
    "questionNumber": 162,
    "text": "You develop and deploy an Azure App Service web app named App1. You create a new Azure Key Vault called Vault1. You import several API keys, passwords, certificates, and cryptographic keys into Vault1.  \n  \nYou must grant App1 access to Vault1 and automatically rotate credentials. Credentials must not be stored in code.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Enable App Service authentication for Appl. Assign a custom RBAC role to Vault1."
      },
      {
        "key": "B",
        "text": "Add a TLS/SSL binding to App1."
      },
      {
        "key": "C",
        "text": "Upload a self-signed client certificate to Vault1. Update App1 to use the client certificate."
      },
      {
        "key": "D",
        "text": "Assign a managed identity to App1."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "managed identity cung cấp cho ứng dụng Azure App Service danh tính Microsoft Entra mà ứng dụng này có thể sử dụng để truy cập Azure Key Vault mà không cần thông tin xác thực trong mã. Azure quản lý và luân chuyển thông tin xác thực danh tính; danh tính phải được cấp quyền thích hợp cho Key Vault, chẳng hạn như vai trò Người dùng Key Vault Secrets để truy cập bí mật.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 162",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/162-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-163",
    "questionNumber": 163,
    "text": "You are developing an application that stores business-critical data in Azure Blob storage.  \n  \nThe application must satisfy these requirements:  \n  \n- Data must not be changed or deleted for a user-specified interval.  \n- Data must be safeguarded against overwrites and deletions.  \n- Data must be written once and readable many times.  \n  \nYou need to protect the data in the Azure Blob storage account.  \n  \nWhich two actions should you take? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Configure a time-based retention policy for the storage account."
      },
      {
        "key": "B",
        "text": "Create an account shared-access signature (SAS)."
      },
      {
        "key": "C",
        "text": "Enable the blob change feed for the storage account."
      },
      {
        "key": "D",
        "text": "Enable version-level immutability support for the storage account."
      },
      {
        "key": "E",
        "text": "Enable point-in-time restore for containers in the storage account."
      },
      {
        "key": "F",
        "text": "Create a service shared-access signature (SAS)."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Bộ lưu trữ bất biến Azure Blob hỗ trợ trạng thái ghi một lần, đọc nhiều (WORM). Chính sách lưu giữ dựa trên thời gian ngăn không cho dữ liệu blob được bảo vệ bị sửa đổi hoặc xóa trong khoảng thời gian lưu giữ đã định cấu hình. Hỗ trợ tính bất biến ở cấp phiên bản phải được bật trước khi có thể định cấu hình chính sách lưu giữ dựa trên thời gian ở cấp phiên bản mặc định cho tài khoản lưu trữ.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 163",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/163-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-164",
    "questionNumber": 164,
    "text": "You are building a web application that uses the Microsoft Identity platform for user and resource authentication and calls several REST APIs.  \n  \nYou are implementing different authentication and authorization flows for the web application.  \n  \nYou need to validate claims in the authentication token.  \n  \nWhich token type should be used?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Mã thông báo ID xác thực và nhận dạng người dùng thông qua xác nhận danh tính. Mã thông báo truy cập mang thông tin ủy quyền cho các API được bảo vệ. Mã thông báo làm mới cho phép khách hàng nhận mã thông báo truy cập thay thế mà không yêu cầu người dùng đăng nhập lại. Xác nhận SAML là mã thông báo dựa trên XML được WS-Federation hỗ trợ.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 164",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/164-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-165",
    "questionNumber": 165,
    "text": "You are developing an application that stores millions of images in Azure Blob Storage. The images are uploaded to the `companyimages` Azure Blob Storage container in the `companymedia` Azure Blob Storage account. The stored images have multiple blob index tags across multiple blobs in the container.  \n  \nYou must locate all blobs in the container whose tags satisfy a search expression. The expression must evaluate an index tag named `status` with a value of `final`.  \n  \nYou need to construct the GET request URI.  \n  \nEach parameter may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "account",
        "text": "Slot 1:",
        "correctAnswer": "C"
      },
      {
        "id": "container",
        "text": "Slot 2:",
        "correctAnswer": "D"
      },
      {
        "id": "expression",
        "text": "Slot 3:",
        "correctAnswer": "A"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Status ='Final'"
      },
      {
        "key": "B",
        "text": "Status <= 'Final'"
      },
      {
        "key": "C",
        "text": "companymedia"
      },
      {
        "key": "D",
        "text": "companyimages"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Status ='Final'"
      },
      {
        "key": "B",
        "text": "Status <= 'Final'"
      },
      {
        "key": "C",
        "text": "companymedia"
      },
      {
        "key": "D",
        "text": "companyimages"
      }
    ],
    "correctAnswers": [
      "account=C",
      "container=D",
      "expression=A"
    ],
    "explanation": "Thao tác Tìm Blobs theo Thẻ trong phạm vi vùng chứa đặt tài khoản lưu trữ vào tên máy chủ và vùng chứa trong đường dẫn, sau đó sử dụng `restype=container&comp=blobs`. Tham số `where` của nó chấp nhận biểu thức đẳng thức; `Status ='Final'` chọn các đốm màu có thẻ Trạng thái bằng Cuối cùng. Biểu thức phải được mã hóa URI trong một yêu cầu HTTP thực tế.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 165",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/165-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-166",
    "questionNumber": 166,
    "text": "You are developing an Azure Function App named App1 and plan to use cross-origin requests (CORS).  \n  \nRequirements:  \n  \n- App1 functions must securely access an Azure Blob Storage account.  \n- Access to the Azure Blob Storage account must not require provisioning or rotating secrets.  \n- JavaScript running in a browser hosted externally must not be able to interact with the function.  \n  \nYou need to implement App1. Which configuration should you use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "system-assigned managed identity cho phép App1 xác thực với Azure Blob Storage thông qua Microsoft Entra ID và Azure RBAC mà không lưu trữ, cung cấp hoặc xoay vòng bí mật ứng dụng khách. Việc định cấu hình danh sách nguồn gốc được phép CORS thành không ngăn mã trình duyệt từ các nguồn gốc bên ngoài thực hiện các yêu cầu có nguồn gốc chéo đối với hàm.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 166",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/166-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-167",
    "questionNumber": 167,
    "text": "You are developing a new website page that uses Azure Cosmos DB for data storage. The feature uses documents in the following format:  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783790134629-8sv05yqt.png)  \n  \nYou must show data for the new page in a particular order. You create the following query for the page:  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783790137473-840lrm7d.png)  \n  \nYou need to configure a Cosmos DB policy that supports the query. Each JSON segment may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "index_type",
        "text": "Slot 1:",
        "correctAnswer": "E"
      },
      {
        "id": "city_order",
        "text": "Slot 2:",
        "correctAnswer": "D"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "orderBy"
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
        "text": "orderBy"
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
      "index_type=E",
      "city_order=D"
    ],
    "explanation": "`ORDER BY` đa thuộc tính yêu cầu chỉ mục tổng hợp. Các đường dẫn tổng hợp phải có cùng trình tự với các thuộc tính sắp xếp và mỗi hướng phải khớp: `name` theo mặc định là tăng dần và `city` là giảm dần. Do đó, chính sách sử dụng `compositeIndexes` với `/name` giảm dần như được cung cấp và `/city` giảm dần; đảo ngược mọi hướng cũng được Cosmos DB hỗ trợ.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783790134629-8sv05yqt.png",
    "sourceTitle": "Examcademy AZ-204 Question 167",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/167-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-168",
    "questionNumber": 168,
    "text": "You develop a Python image-rendering application that uses GPU resources to optimize rendering operations. You deploy the application to an Azure Container Instances (ACI) Linux container.  \n  \nThe application needs a secret value supplied when the container starts. The value must be accessible only from inside the container.  \n  \nYou need to provide the secret value.  \n  \nWhat are two possible ways to accomplish this goal? Each correct answer is a complete solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create an environment variable Set the secureValue property to the secret value."
      },
      {
        "key": "B",
        "text": "Add the secret value to the container image. Use a managed identity."
      },
      {
        "key": "C",
        "text": "Add the secret value to the application code Set the container startup command."
      },
      {
        "key": "D",
        "text": "Add the secret value to an Azure Blob storage account. Generate a SAS token."
      },
      {
        "key": "E",
        "text": "Mount a secret volume containing the secret value in a secrets file."
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "Azure Container Instances hỗ trợ các biến môi trường an toàn bằng cách sử dụng thuộc tính `secureValue`; giá trị không được hiển thị trong thuộc tính vùng chứa và chỉ có thể được truy cập trong vùng chứa. Bộ chứa ACI Linux cũng hỗ trợ các tập tin bí mật chỉ đọc, cung cấp các bí mật dưới dạng tệp được gắn bên trong bộ chứa.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 168",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/168-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-169",
    "questionNumber": 169,
    "text": "You need to set up security and compliance for the corporate website files.  \n  \nWhich Azure Blob Storage settings should you use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Chữ ký truy cập được chia sẻ (SAS) cung cấp quyền truy cập được ủy quyền, có phạm vi và giới hạn thời gian vào tài nguyên Blob Storage. Nguồn cấp dữ liệu thay đổi Blob ghi lại các sự kiện tạo, sửa đổi và xóa blob trong nhật ký có thứ tự, hỗ trợ kiểm tra thay đổi tệp.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 169",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/169-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-170",
    "questionNumber": 170,
    "text": "You need to resolve the error in the `RequestUserApproval` Function app.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Update line RA13 to use the async keyword and return an HttpRequest object value."
      },
      {
        "key": "B",
        "text": "Configure the Function app to use an App Service hosting plan. Enable the Always On setting of the hosting plan."
      },
      {
        "key": "C",
        "text": "Update the function to be stateful by using Durable Functions to process the request payload."
      },
      {
        "key": "D",
        "text": "Update the functionTimeout property of the host.json project file to 15 minutes."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Quy trình phê duyệt yêu cầu một quy trình có trạng thái có thể tạm dừng phản hồi của con người, nhận phản hồi đó dưới dạng sự kiện bên ngoài và tùy ý xử lý thời gian chờ. Các hàm bền vững cung cấp trạng thái điều phối bền vững và mô hình tương tác giữa con người với mục đích này; chức năng kích hoạt HTTP tiêu chuẩn không thể chờ phản hồi phê duyệt vô thời hạn.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 170",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/170-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-171",
    "questionNumber": 171,
    "text": "You intend to develop an Azure Functions app that uses an HTTP trigger.  \n  \nThe app must meet these requirements:  \n  \n- Event-driven scaling  \n- The ability to use custom Linux images for function execution  \n  \nIdentify the app hosting plan and the maximum time the app function can take to respond to incoming requests.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Gói Premium hỗ trợ mở rộng quy mô theo sự kiện và chạy Azure Functions trong các bộ chứa Linux tùy chỉnh. Hàm được kích hoạt HTTP phải trả về phản hồi HTTP trong vòng 230 giây do hết thời gian chờ của Azure Load Balancer; giới hạn phản hồi này áp dụng ngay cả khi thời gian chờ thực thi hàm không bị giới hạn.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 171",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/171-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-172",
    "questionNumber": 172,
    "text": "You need to secure the Shipping Logic App.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure App Service Environment (ASE)"
      },
      {
        "key": "B",
        "text": "Integration Service Environment (ISE)"
      },
      {
        "key": "C",
        "text": "VNet service endpoint"
      },
      {
        "key": "D",
        "text": "Azure AD B2B integration"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Môi trường dịch vụ tích hợp (ISE) cung cấp thời gian chạy Ứng dụng Azure Logic chuyên dụng có thể tích hợp trực tiếp với các hệ thống trong mạng ảo, bao gồm các hệ thống tại chỗ thông qua ExpressRoute, cung cấp khả năng cách ly và bảo mật mạng cần thiết.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 172",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/172-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-173",
    "questionNumber": 173,
    "text": "You are developing an application that tracks cell towers available to phones in near real time. A phone will send information to the application by using Azure Web PubSub service. The data will be processed by using an Azure Functions app. Traffic will be delivered through a content delivery network (CDN).  \n  \nThe Azure function must be protected from misconfigured or unauthorized invocations.  \n  \nYou need to ensure that the CDN permits the Azure function protection.  \n  \nWhich HTTP header should be included on the allow list?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Authorization"
      },
      {
        "key": "B",
        "text": "WebHook-Request-Callback"
      },
      {
        "key": "C",
        "text": "Resource"
      },
      {
        "key": "D",
        "text": "WebHook-Request-Origin"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Azure Web PubSub xác thực từng webhook ngược dòng được định cấu hình bằng cách sử dụng tính năng chống lạm dụng CloudEvents. Yêu cầu xác thực chứa tiêu đề `WebHook-Request-Origin` và webhook phải nhận dạng tiêu đề đó và phản hồi bằng giá trị `WebHook-Allowed-Origin` thích hợp. Do đó, CDN phía trước Chức năng Azure phải cho phép `WebHook-Request-Origin` đi qua.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 173",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/173-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-174",
    "questionNumber": 174,
    "text": "You have an Azure Functions app on the Consumption hosting plan for a company. The app includes these functions:  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783879214981-zx8zr6vw.png)  \n  \nYou plan to turn on dynamic concurrency for the app. The company requires each function’s concurrency level to be managed independently.  \n  \nYou need to configure dynamic concurrency for the app.  \n  \nWhich file and function names should you use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Tính đồng thời động được bật trong Host.json và được quản lý độc lập cho từng chức năng được hỗ trợ. Các loại trình kích hoạt được hỗ trợ bao gồm Azure Queue Storage, trong khi trình kích hoạt HTTP và Bộ hẹn giờ không sử dụng đồng thời động; do đó f3 là hàm có thể áp dụng.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783879214981-zx8zr6vw.png",
    "sourceTitle": "Examcademy AZ-204 Question 174",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/174-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-175",
    "questionNumber": 175,
    "text": "You develop and deploy an Azure App Service web app that accesses data in an Azure SQL database.  \n  \nYou must update the app to store frequently used data in a new Azure Cache for Redis Premium instance.  \n  \nYou need to implement Azure Cache for Redis features. Which feature should you implement for each requirement? Each feature may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "slot1",
        "text": "Create a data structure for storing collections of related items",
        "correctAnswer": "D"
      },
      {
        "id": "slot2",
        "text": "Create a data structure for the most recently accessed cache items",
        "correctAnswer": "C"
      },
      {
        "id": "slot3",
        "text": "Send messages through a high-performance publisher/subscriber mechanism",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "horizontal partitioning"
      },
      {
        "key": "B",
        "text": "channel"
      },
      {
        "key": "C",
        "text": "list"
      },
      {
        "key": "D",
        "text": "set"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "horizontal partitioning"
      },
      {
        "key": "B",
        "text": "channel"
      },
      {
        "key": "C",
        "text": "list"
      },
      {
        "key": "D",
        "text": "set"
      }
    ],
    "correctAnswers": [
      "slot1=D",
      "slot2=C",
      "slot3=B"
    ],
    "explanation": "Bộ Redis lưu trữ các bộ sưu tập không có thứ tự của các giá trị liên quan duy nhất. Danh sách Redis là các bộ sưu tập được sắp xếp có thể triển khai trình tự được sử dụng gần đây nhất bằng cách di chuyển một mục được truy cập lên đầu. Redis Pub/Sub sử dụng các kênh để nhắn tin cho nhà xuất bản/người đăng ký hiệu suất cao. Phân vùng ngang là không cần thiết cho các yêu cầu này.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 175",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/175-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-176",
    "questionNumber": 176,
    "text": "You create and publish a new Azure App Service web app.  \n  \nUser authentication and authorization must use Azure Active Directory (Azure AD).  \n  \nYou need to configure authentication and authorization.  \n  \nWhat should you do first?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Add an identity provider."
      },
      {
        "key": "B",
        "text": "Map an existing custom DNS name."
      },
      {
        "key": "C",
        "text": "Create and configure a new app setting."
      },
      {
        "key": "D",
        "text": "Add a private certificate."
      },
      {
        "key": "E",
        "text": "Create and configure a managed identity."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Xác thực và ủy quyền Azure App Service sử dụng nhà cung cấp danh tính liên kết để đăng nhập người dùng. Định cấu hình xác thực Azure AD/Microsoft Entra bắt đầu bằng cách thêm nhà cung cấp danh tính Microsoft trong cài đặt Xác thực của ứng dụng; sau đó, cấu hình nhà cung cấp có thể tạo hoặc sử dụng đăng ký ứng dụng và đặt yêu cầu truy cập.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 176",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/176-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-177",
    "questionNumber": 177,
    "text": "You have an application that delivers weather-forecasting data to external partners by publishing APIs through Azure API Management. You must modify the API behavior to meet these requirements:  \n  \n- Support alternative input parameters.  \n- Remove formatting text from responses.  \n- Provide additional context to back-end services.  \n  \nWhich policy types should you implement? Each policy type may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "support-alternative-input-parameters",
        "text": "Support alternative input parameters.",
        "correctAnswer": "A"
      },
      {
        "id": "remove-formatting-text-from-responses",
        "text": "Remove formatting text from responses.",
        "correctAnswer": "B"
      },
      {
        "id": "provide-additional-context-to-back-end-services",
        "text": "Provide additional context to back-end services.",
        "correctAnswer": "C"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Inbound"
      },
      {
        "key": "B",
        "text": "Outbound"
      },
      {
        "key": "C",
        "text": "Backend"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Inbound"
      },
      {
        "key": "B",
        "text": "Outbound"
      },
      {
        "key": "C",
        "text": "Backend"
      }
    ],
    "correctAnswers": [
      "support-alternative-input-parameters=A",
      "remove-formatting-text-from-responses=B",
      "provide-additional-context-to-back-end-services=C"
    ],
    "explanation": "Chính sách gửi đến sẽ sửa đổi yêu cầu đến trước khi gửi đến chương trình phụ trợ, bao gồm việc viết lại URL công khai hoặc tham số truy vấn thành dạng mà dịch vụ mong đợi. Các chính sách gửi đi sửa đổi phản hồi phụ trợ trước khi nó được gửi đến người gọi, đây là nơi có thể xóa định dạng phản hồi. Chính sách phụ trợ chạy ngay lập tức trước khi chuyển tiếp yêu cầu đến dịch vụ phụ trợ và có thể thêm hoặc cung cấp ngữ cảnh cho dịch vụ đó.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 177",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/177-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-178",
    "questionNumber": 178,
    "text": "A company operates multiple web and mobile applications. Each application uses custom, in-house identity providers and social identity providers.  \n  \nYou need to implement single sign-on (SSO) across all the applications.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Use Azure Active Directory B2C (Azure AD B2C) with custom policies."
      },
      {
        "key": "B",
        "text": "Use Azure Active Directory B2B (Azure AD B2B) and enable external collaboration."
      },
      {
        "key": "C",
        "text": "Use Azure Active Directory B2C (Azure AD B2C) with user flows."
      },
      {
        "key": "D",
        "text": "Use Azure Active Directory B2B (Azure AD B2B)."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Azure AD B2C hỗ trợ liên kết với các nhà cung cấp danh tính xã hội và bên ngoài cho các ứng dụng hướng tới khách hàng. Các chính sách tùy chỉnh của nó có thể định cấu hình đầy đủ và có thể điều phối niềm tin với các nhà cung cấp danh tính thông qua các giao thức như OpenID Connect, OAuth và SAML, giúp chúng phù hợp với trải nghiệm SSO được chia sẻ bao gồm các nhà cung cấp nội bộ tùy chỉnh. Sự cộng tác bên ngoài Azure AD B2B được thiết kế để cấp cho người dùng khách quyền truy cập vào các tài nguyên của tổ chức thay vì cung cấp hành trình nhận dạng người tiêu dùng.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 178",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/178-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-179",
    "questionNumber": 179,
    "text": "HOTSPOT —  \n  \nYou are developing a solution that uses the Azure Storage Client library for .NET. The following code is used (line numbers are only for reference):  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783790236271-3ehuu9u7.jpg)  \n  \nFor each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "The code creates an infinite lease",
        "correctAnswer": "Yes"
      },
      {
        "id": "2",
        "text": "The code at line 06 always creates a new blob",
        "correctAnswer": "No"
      },
      {
        "id": "3",
        "text": "The finally block releases the lease",
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
    "explanation": "Thời hạn thuê vô hiệu sẽ tạo ra một hợp đồng thuê vô hạn. Việc lấy tham chiếu block-blob không tạo ra blob. Khối cuối cùng phá vỡ bất kỳ hợp đồng thuê nguồn đang hoạt động nào với thời gian nghỉ bằng 0, khiến nó có sẵn ngay lập tức.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783790236271-3ehuu9u7.jpg",
    "sourceTitle": "Examcademy AZ-204 Question 179",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/179-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-180",
    "questionNumber": 180,
    "text": "Solution: Scale up ASPPlan1 to the Premium V2 pricing tier.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Tự động chia tỷ lệ theo lịch trình cho Azure App Service được hỗ trợ ở cấp Tiêu chuẩn trở lên. Do đó, Premium V2 không phải là mức chi phí thấp nhất có thể cung cấp chức năng cần thiết, do đó, việc mở rộng sang Premium V2 không giúp giảm thiểu chi phí.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 180",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/180-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-181",
    "questionNumber": 181,
    "text": "Solution: Scale down ASPPlan1 to the Shared pricing tier.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Cấp Dịch vụ ứng dụng dùng chung sử dụng điện toán dùng chung và không thể mở rộng quy mô. Tính năng tự động chia tỷ lệ theo lịch trình áp dụng cho gói Dịch vụ ứng dụng và yêu cầu khả năng Tự động chia tỷ lệ có sẵn ở các bậc Tiêu chuẩn trở lên; do đó, gói Chia sẻ cấp độ không thể đáp ứng yêu cầu tự động điều chỉnh quy mô theo lịch trình, mặc dù chi phí thấp hơn. [Azure App Service Plans](https://learn.microsoft.com/en-us/azure/app-service/overview-hosting-plans)",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 181",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/181-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-182",
    "questionNumber": 182,
    "text": "Solution: Scale out APSPlan1.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Azure Autoscale dựa trên lịch trình cho gói Dịch vụ ứng dụng chỉ được hỗ trợ ở cấp Tiêu chuẩn trở lên; gói B1 cơ bản không thể sử dụng nó. Việc mở rộng quy mô cũng bổ sung thêm các phiên bản VM, mỗi phiên bản đều phát sinh chi phí thay vì giảm thiểu chi phí chạy ứng dụng.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 182",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/182-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-183",
    "questionNumber": 183,
    "text": "You are building a web application that uses the Microsoft identity platform to authenticate users and resources. The web application invokes several REST APIs.  \n  \nThe APIs require an access token issued by the Microsoft identity platform.  \n  \nYou need to request a token.  \n  \nWhich three properties should you use? Each correct answer forms part of the solution.  \n  \n> **NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Redirect URI/URL"
      },
      {
        "key": "B",
        "text": "Application ID"
      },
      {
        "key": "C",
        "text": "Application name"
      },
      {
        "key": "D",
        "text": "Application secret"
      },
      {
        "key": "E",
        "text": "Supported account type"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "D"
    ],
    "explanation": "Đối với một ứng dụng web bí mật đổi mã ủy quyền lấy mã thông báo truy cập, nền tảng nhận dạng Microsoft yêu cầu ID ứng dụng (ứng dụng khách), bí mật ứng dụng và cùng một URI chuyển hướng được sử dụng để lấy mã ủy quyền. Tên ứng dụng và loại tài khoản được hỗ trợ là cài đặt cấu hình đăng ký ứng dụng chứ không phải là tham số được sử dụng để đổi mã thông báo.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 183",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/183-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-184",
    "questionNumber": 184,
    "text": "You intend to implement an Azure function named Function1 that uses the timer trigger.  \n  \nYou intend to use a TimeSpan value to specify the function-execution schedule.  \n  \nSelect the hosting model and the schedule-expression assignment method.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Trình kích hoạt hẹn giờ chỉ có thể sử dụng lịch trình TimeSpan trên gói Dịch vụ ứng dụng. Lịch trình liên kết kích hoạt được xác định trong function.json; Host.json dành cho cấu hình trên toàn máy chủ, trong khi cài đặt ứng dụng chỉ có thể được tham chiếu dưới dạng giá trị lịch trình.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 184",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/184-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-185",
    "questionNumber": 185,
    "text": "You are developing an Azure Function that connects to an Azure SQL Database instance. The function is triggered by an Azure Storage queue.  \n  \nYou receive reports of numerous `System.InvalidOperationExceptions` with the following message:  \n  \n`Timeout expired. The timeout period elapsed prior to obtaining a connection from the pool. This may have occurred because all pooled connections were in use and max pool size was reached.`  \n  \nYou need to prevent this exception. What should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "In the host.json file, decrease the value of the batchSize option"
      },
      {
        "key": "B",
        "text": "Convert the trigger to Azure Event Hub"
      },
      {
        "key": "C",
        "text": "Convert the Azure Function to the Premium plan"
      },
      {
        "key": "D",
        "text": "In the function.json file, change the value of the type option to queueScaling"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Trình kích hoạt hàng đợi Lưu trữ Azure truy xuất và xử lý các thông báo hàng đợi đồng thời. Cài đặt `batchSize` trong `host.json` kiểm soát số lượng tin nhắn được xử lý song song, do đó, việc giảm cài đặt này sẽ làm giảm các lệnh gọi Hàm Azure đồng thời và mức sử dụng kết nối Azure SQL Database đồng thời của chúng. Điều này tránh làm cạn kiệt nhóm kết nối SQL.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 185",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/185-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-186",
    "questionNumber": 186,
    "text": "You are developing a microservices-based application by using Azure Container Apps. The application includes several containerized services that perform tasks such as processing orders, managing inventory, and generating reports.  \n  \nOrder processing has these requirements:  \n  \n- Orders must be triggered by a web request.  \n- Additional replicas must be added when the total web-request count exceeds 300 for at least 15 seconds.  \n- Order processing must remain available according to incoming web requests.  \n- Costs for the Azure Container Apps instance must be minimized.  \n  \nYou need to configure scaling.  \n  \nHow should you complete the CLI command?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "`az containerapp create` triển khai Ứng dụng Container. Quy tắc thang đo HTTP đánh giá các yêu cầu trong khoảng thời gian 15 giây, do đó, 300 yêu cầu trong 15 giây tương ứng với mục tiêu được định cấu hình là 20 yêu cầu mỗi giây. Với tính năng xâm nhập HTTP và quy tắc tỷ lệ HTTP, Azure Container Apps có thể kích hoạt từ 0 bản sao khi có yêu cầu đến. Do đó, `--min-replicas 0` giảm thiểu chi phí nhàn rỗi trong khi vẫn duy trì khả năng mở rộng theo yêu cầu.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 186",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/186-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-187",
    "questionNumber": 187,
    "text": "Your company is developing an Azure-hosted Azure API.  \n  \nYou need to implement authentication so that the Azure API can access other Azure resources. You have the following requirements:  \n  \n- All API calls must be authenticated.  \n- API callers must not send credentials to the API.  \n  \nWhich authentication mechanism should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Basic"
      },
      {
        "key": "B",
        "text": "Anonymous"
      },
      {
        "key": "C",
        "text": "Managed identity"
      },
      {
        "key": "D",
        "text": "Client certificate"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Managed identity cung cấp khối lượng công việc được lưu trữ trên Azure với danh tính Microsoft Entra được quản lý tự động mà nó có thể sử dụng để nhận mã thông báo cho quyền truy cập được ủy quyền vào tài nguyên Azure. Azure quản lý thông tin xác thực cơ bản nên người gọi không cần gửi thông tin xác thực tới API.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 187",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/187-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-188",
    "questionNumber": 188,
    "text": "You are creating a loyalty program for a large snack manufacturer. When customers purchase a snack at any of 100 participating retailers, the event is recorded in Azure Event Hub. Each retailer receives a unique identifier that serves as the primary identifier for the loyalty program.  \n  \nRetailers must be able to be added or removed at any time. A retailer must be able to record sales only for itself.  \n  \nYou need to ensure that retailers can record sales.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Use publisher policies for retailers."
      },
      {
        "key": "B",
        "text": "Create a partition for each retailer."
      },
      {
        "key": "C",
        "text": "Define a namespace for each retailer."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Chính sách của nhà xuất bản Azure Event Hubs cung cấp khả năng kiểm soát chi tiết cho nhiều nhà xuất bản độc lập. Mỗi nhà xuất bản sử dụng một mã định danh duy nhất và tên nhà xuất bản phải khớp với mã thông báo SAS được sử dụng để xác thực; do đó, việc chỉ định mỗi nhà bán lẻ số nhận dạng của họ làm danh tính nhà xuất bản sẽ hạn chế họ xuất bản doanh số bán hàng của riêng mình. Các phân vùng tổ chức các luồng sự kiện và không gian tên cung cấp phạm vi tài nguyên rộng hơn, cả hai đều không thực thi quyền gửi dành riêng cho nhà xuất bản.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 188",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/188-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-189",
    "questionNumber": 189,
    "text": "You develop a Web App that uses a D1 App Service plan.  \n  \nYou observe that page-load times rise during peak-traffic periods.  \n  \nYou want to implement automatic scaling when CPU load exceeds 80 percent. Your solution must minimize costs.  \n  \nWhat should you do first?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Enable autoscaling on the Web App."
      },
      {
        "key": "B",
        "text": "Switch to the Premium App Service tier plan."
      },
      {
        "key": "C",
        "text": "Switch to the Standard App Service tier plan."
      },
      {
        "key": "D",
        "text": "Switch to the Azure App Services consumption plan."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Cấp chia sẻ (D1) không thể mở rộng quy mô. Tính năng tự động thay đổi quy mô có sẵn ở cấp Tiêu chuẩn trở lên, do đó, việc chuyển gói Dịch vụ ứng dụng sang Tiêu chuẩn sẽ cung cấp khả năng tự động thay đổi quy mô dựa trên CPU cần thiết với chi phí thấp hơn so với Premium.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 189",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/189-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-190",
    "questionNumber": 190,
    "text": "You develop a web app that interacts with Azure Active Directory (Azure AD) groups by using Microsoft Graph.  \n  \nYou build a webpage that displays all Azure AD groups that are not of the type `Unified`.  \n  \nYou need to construct the Microsoft Graph query for the page.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "`$filter` áp dụng vị từ OData cho bộ sưu tập nhóm. `not groupTypes/any(s:s eq 'Unified')` trả về các nhóm có mục nhập no `Unified` trong `groupTypes`. Truy vấn thư mục Microsoft Entra nâng cao này yêu cầu `$count=true`; yêu cầu HTTP cũng yêu cầu tiêu đề `ConsistencyLevel: eventual`.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 190",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/190-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-191",
    "questionNumber": 191,
    "text": "You manage an Azure subscription containing 100 Azure App Service web apps. Each web app is linked to a separate Application Insights instance.  \n  \nYou plan to remove Classic availability tests from every Application Insights instance where this functionality is configured.  \n  \nYou have the following PowerShell statement:  \n  \n```powershell  \nGet-AzApplicationInsightsWebTest | Where-Object \\{ $condition \\}  \n```  \n  \nYou need to set the value of the `$condition` variable.  \n  \nWhich value should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "$$_.Type -eq \"ping\""
      },
      {
        "key": "B",
        "text": "$$_.WebTestKind -eq \"ping\""
      },
      {
        "key": "C",
        "text": "$$_.WebTestKind -eq \"standard\""
      },
      {
        "key": "D",
        "text": "$$_.Type -eq \"standard\""
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Kiểm tra tính khả dụng của ping URL cổ điển có `WebTestKind` được đặt thành `ping`. `Get-AzApplicationInsightsWebTest` hiển thị thuộc tính này để lọc, trong khi `Type` đại diện cho loại tài nguyên Azure; `standard` biểu thị bài kiểm tra Tiêu chuẩn chứ không phải bài kiểm tra ping Cổ điển.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 191",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/191-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-192",
    "questionNumber": 192,
    "text": "You are developing a road-tollway tracking application that sends tracking events by using Azure Event Hubs in the Premium tier.  \n  \nEach road must be assigned a unique throttling policy.  \n  \nYou need to configure the event hub to support per-road throttling.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Use a unique consumer group for each road."
      },
      {
        "key": "B",
        "text": "Ensure each road stores events in a different partition."
      },
      {
        "key": "C",
        "text": "Ensure each road has a unique connection string."
      },
      {
        "key": "D",
        "text": "Use a unique application group for each road."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Các nhóm ứng dụng Azure Event Hubs hỗ trợ các chính sách điều chỉnh và có sẵn ở cấp Premium. Việc chỉ định mỗi con đường cho nhóm ứng dụng riêng của nó sẽ cho phép có chính sách điều tiết riêng biệt cho con đường đó.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 192",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/192-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-193",
    "questionNumber": 193,
    "text": "You are a developer at a Software as a Service (SaaS) company. You create solutions that enable notifications to be sent by using Azure Notification Hubs.  \n  \nYou need to create sample code that customers can use as a reference for sending raw notifications to Windows Push Notification Services (WNS) devices. The sample code must not use external packages.  \n  \nHow should you complete the code segment? Each code segment may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "format",
        "text": "Slot 1:",
        "correctAnswer": "B"
      },
      {
        "id": "contentType",
        "text": "Slot 2:",
        "correctAnswer": "F"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "raw"
      },
      {
        "key": "B",
        "text": "windows"
      },
      {
        "key": "C",
        "text": "windowsphone"
      },
      {
        "key": "D",
        "text": "application/xml"
      },
      {
        "key": "E",
        "text": "application/json"
      },
      {
        "key": "F",
        "text": "application/octet-stream"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "raw"
      },
      {
        "key": "B",
        "text": "windows"
      },
      {
        "key": "C",
        "text": "windowsphone"
      },
      {
        "key": "D",
        "text": "application/xml"
      },
      {
        "key": "E",
        "text": "application/json"
      },
      {
        "key": "F",
        "text": "application/octet-stream"
      }
    ],
    "correctAnswers": [
      "format=B",
      "contentType=F"
    ],
    "explanation": "Đối với thông báo gốc WNS, Trung tâm thông báo Azure yêu cầu `ServiceBusNotification-Format` phải là `windows`. Thông báo WNS thô (`X-WNS-Type: wns/raw`) phải sử dụng loại nội dung `application/octet-stream`.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 193",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/193-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-194",
    "questionNumber": 194,
    "text": "You are developing a new API to host in Azure API Management (APIM). The backend service that implements the API is not yet complete, and you are creating a test API and operation.  \n  \nYou must allow developers to continue implementing and testing the APIM instance integrations while backend API development is completed.  \n  \nYou need to configure a test API response.  \n  \nHow should you complete the configuration?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Chính sách `mock-response` trả về phản hồi API mô phỏng và hủy quá trình thực thi quy trình thông thường. Việc áp dụng nó trong phần gửi đến sẽ ngăn APIM chuyển tiếp yêu cầu đến phần phụ trợ chưa hoàn thành. Mã trạng thái 200 trả về phản hồi kiểm tra thành công.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 194",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/194-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-195",
    "questionNumber": 195,
    "text": "HOTSPOT  \n  \nYou are developing an online game in which players vote for their preferred photo that illustrates a word. The game is built with Azure Functions and uses durable entities to track vote counts.  \n  \nThe voting window is 30 seconds, and you must minimize latency.  \n  \nYou need to implement the Azure Function for voting.  \n  \nHow should you complete the code?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "`IDurableEntityClient` là giao diện máy khách Chức năng bền vững cho các hoạt động của thực thể. `SignalEntityAsync` gửi tín hiệu không đồng bộ một chiều và không đợi thực thể trả về kết quả, điều này giúp giảm thiểu độ trễ yêu cầu để ghi lại phiếu bầu. `CallEntityAsync` chờ phản hồi và không phù hợp với thao tác chỉ cập nhật này.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 195",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/195-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-196",
    "questionNumber": 196,
    "text": "Your company is developing an API in Azure.  \n  \nYou must implement authentication for the Azure API and meet the following requirements:  \n  \n- All API calls must be secure.  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783790054162-qxdo0k9v.png)  \n  \n- API callers must not send credentials to the API.  \n  \nWhich authentication mechanism should be used?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Basic"
      },
      {
        "key": "B",
        "text": "Anonymous"
      },
      {
        "key": "C",
        "text": "Managed identity"
      },
      {
        "key": "D",
        "text": "Client certificate"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Danh tính được quản lý cho phép khối lượng công việc được lưu trữ trên Azure nhận được mã thông báo Microsoft Entra ID mà không cần lưu trữ, quản lý hoặc gửi thông tin xác thực đến API mục tiêu. API có thể xác thực mã thông báo và ủy quyền managed identity, cung cấp quyền truy cập an toàn được xác thực mà không cần bí mật hoặc chứng chỉ do người gọi cung cấp.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783790054162-qxdo0k9v.png",
    "sourceTitle": "Examcademy AZ-204 Question 196",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/196-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-197",
    "questionNumber": 197,
    "text": "You have an Azure App Service web app named App1 with **/public** and **/private** areas. The App Service plan for App1 uses the D1 pricing tier.  \n  \nYou plan to configure mutual TLS authentication for App1 and must minimize cost.  \n  \nEnsure that only the **/private** area of App1 requires mutual TLS authentication.  \n  \nWhich three actions should you perform in sequence?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "slot1",
        "text": "1.",
        "correctAnswer": "B"
      },
      {
        "id": "slot2",
        "text": "2.",
        "correctAnswer": "A"
      },
      {
        "id": "slot3",
        "text": "3.",
        "correctAnswer": "E"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Modify the client certificate mode of the Configuration settings of App1."
      },
      {
        "key": "B",
        "text": "Upgrade the pricing tier of the App Service plan."
      },
      {
        "key": "C",
        "text": "Add an identity provider to the Authentication settings of App1."
      },
      {
        "key": "D",
        "text": "Downgrade the pricing tier of the App Service plan."
      },
      {
        "key": "E",
        "text": "Modify the certificate exclusion path of the Configuration settings of App1."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Modify the client certificate mode of the Configuration settings of App1."
      },
      {
        "key": "B",
        "text": "Upgrade the pricing tier of the App Service plan."
      },
      {
        "key": "C",
        "text": "Add an identity provider to the Authentication settings of App1."
      },
      {
        "key": "D",
        "text": "Downgrade the pricing tier of the App Service plan."
      },
      {
        "key": "E",
        "text": "Modify the certificate exclusion path of the Configuration settings of App1."
      }
    ],
    "correctAnswers": [
      "slot1=B",
      "slot2=A",
      "slot3=E"
    ],
    "explanation": "TLS tương hỗ trong Azure App Service yêu cầu cấp Cơ bản, Tiêu chuẩn, Cao cấp hoặc Riêng biệt; D1 không được hỗ trợ. Sau khi bật xác thực chứng chỉ ứng dụng khách, hãy định cấu hình /public làm đường dẫn loại trừ chứng chỉ để nó không yêu cầu chứng chỉ ứng dụng khách, trong khi /private vẫn được bảo vệ. Xác thực nhà cung cấp danh tính không triển khai xác thực chứng chỉ ứng dụng khách TLS.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 197",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/197-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-198",
    "questionNumber": 198,
    "text": "You need to add code at line PC26 of Processing.cs to ensure that security policies are met.  \n  \nHow should you complete the code added at line PC26?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Mã hóa phía máy khách Azure Storage sử dụng `BlobEncryptionPolicy` được định cấu hình với `IKey` và `IKeyResolver`. Trình phân giải Key Vault chuyển đổi mã định danh của Gói khóa thành khóa bắt buộc và gán chính sách đó cho `DefaultRequestOptions.EncryptionPolicy` sẽ áp dụng chính sách đó cho các hoạt động blob-client.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 198",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/198-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-199",
    "questionNumber": 199,
    "text": "You are developing several microservices to run on Azure Container Apps, with external HTTP ingress traffic enabled.  \n  \nA deployed microservice must be updated so users can test new features. The requirements are:  \n  \n- Enable and maintain a single URL for the updated microservice to give to test users.  \n- Update the microservice that corresponds to the current microservice version.  \n  \nYou need to configure Azure Container Apps. Which features should you configure?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Nhãn sửa đổi cung cấp một URL duy nhất cho bản sửa đổi Azure Container Apps cụ thể và có thể được chuyển sang bản sửa đổi khác, giữ nguyên URL được người kiểm tra sử dụng. Chế độ sửa đổi kiểm soát những bản sửa đổi nào đang hoạt động; chế độ sửa đổi duy nhất kích hoạt bản sửa đổi mới và hướng lưu lượng truy cập đến nó khi nó sẵn sàng.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 199",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/199-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-200",
    "questionNumber": 200,
    "text": "You need to secure the Shipping Function app.  \n  \nHow should the app be configured?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Hàm Azure được kích hoạt HTTP với cấp ủy quyền Hàm yêu cầu khóa truy cập dành riêng cho chức năng; Ẩn danh yêu cầu khóa truy cập no và Quản trị viên yêu cầu khóa chính của ứng dụng. JWT mang theo các xác nhận quyền sở hữu danh tính người dùng đã được xác thực, trong khi mã thông báo SAS ủy quyền quyền truy cập Bộ nhớ và khóa API không truyền tải các xác nhận quyền sở hữu của người dùng.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 200",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/200-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-201",
    "questionNumber": 201,
    "text": "You are developing a static website hosted on Azure Blob Storage. You create a storage account and enable static website hosting.  \n  \nThe website must support these requirements:  \n  \n- Custom domain name  \n- Custom header values for all responses  \n- Custom SSL certificate  \n  \nYou need to implement the static website. What should you configure?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Azure CDN có thể chạy trước trang web tĩnh Azure Blob Storage và hỗ trợ các miền tùy chỉnh, sửa đổi tiêu đề phản hồi thông qua các quy tắc và HTTPS cho các miền tùy chỉnh sử dụng chứng chỉ do khách hàng quản lý hoặc do khách hàng cung cấp. CORS kiểm soát quyền truy cập nhiều nguồn gốc của trình duyệt, thẻ chỉ mục blob sắp xếp các đốm màu và SSE mã hóa dữ liệu lưu trữ ở trạng thái lưu trữ; không có cái nào cung cấp cả ba tính năng của trang web.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 201",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/201-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-202",
    "questionNumber": 202,
    "text": "You are developing an Azure Cosmos DB solution using the Azure Cosmos DB SQL API. The data contains millions of documents, and each document can contain hundreds of properties.  \n  \nThe document properties do not have distinct values suitable for partitioning. Azure Cosmos DB must scale individual containers in the database to satisfy the application's performance requirements by distributing the workload evenly across all partitions over time.  \n  \nYou need to choose a partition key.  \n  \nWhich two partition keys can you use? Each correct answer presents a complete solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "a single property value that does not appear frequently in the documents"
      },
      {
        "key": "B",
        "text": "a value containing the collection name"
      },
      {
        "key": "C",
        "text": "a single property value that appears frequently in the documents"
      },
      {
        "key": "D",
        "text": "a concatenation of multiple property values with a random suffix appended"
      },
      {
        "key": "E",
        "text": "a hash suffix appended to a property value"
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "Khóa phân vùng tổng hợp cung cấp số lượng và phân phối đầy đủ khi thuộc tính duy nhất no đủ khác biệt. Việc ghép nhiều giá trị thuộc tính với một hậu tố ngẫu nhiên sẽ ghi trải rộng trên các giá trị khóa phân vùng và việc thêm hậu tố băm được tính toán sẽ phân phối khối lượng công việc một cách tương tự trong khi cho phép sao chép hậu tố đó cho các lần đọc được nhắm mục tiêu.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 202",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/202-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-203",
    "questionNumber": 203,
    "text": "You are developing a web app protected by Azure Web Application Firewall (WAF). All traffic to the web app passes through an Azure Application Gateway instance that is shared by multiple web apps. The web app address is `contoso.azurewebsites.net`.  \n  \nAll traffic must be protected with SSL. The Azure Application Gateway instance is shared by multiple web apps.  \n  \nYou need to configure Azure Application Gateway for the web app.  \n  \nWhich two actions should you take? Each correct answer is part of the solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "In the Azure Application Gateway's HTTP setting, enable the Use for App service setting."
      },
      {
        "key": "B",
        "text": "Convert the web app to run in an Azure App service environment (ASE)."
      },
      {
        "key": "C",
        "text": "Add an authentication certificate for contoso.azurewebsites.net to the Azure Application Gateway."
      },
      {
        "key": "D",
        "text": "In the Azure Application Gateway's HTTP setting, set the value of the Override backend path option to contoso22.azurewebsites.net."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Đối với phần phụ trợ của Dịch vụ ứng dụng sử dụng miền `azurewebsites.net` mặc định của nó, cài đặt HTTP Cổng ứng dụng phải sử dụng cài đặt dành riêng cho Dịch vụ ứng dụng để yêu cầu phụ trợ sử dụng tên máy chủ Dịch vụ ứng dụng thích hợp. HTTPS đầu cuối cũng yêu cầu Cổng ứng dụng xác thực và tin cậy chứng chỉ máy chủ phụ trợ cho `contoso.azurewebsites.net`.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 203",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/203-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-204",
    "questionNumber": 204,
    "text": "You are building a solution to store documents in Azure Blob Storage. Customers upload PDF, CSV, Microsoft Office, and plain-text documents to multiple containers.  \n  \nThe solution must process millions of documents across hundreds of containers and must:  \n  \n- Categorize documents by a customer identifier as they are uploaded to the storage account.  \n- Allow filtering by customer identifier.  \n- Allow searching for information contained within a document.  \n- Minimize costs.  \n  \nYou create and configure a standard general-purpose v2 storage account to support the solution.  \n  \nWhat should you implement?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Thẻ chỉ mục Azure Blob là các thuộc tính khóa-giá trị được lập chỉ mục trên các đốm màu và hỗ trợ lọc phía máy chủ theo mã định danh khách hàng. Azure Cognitive Search có thể sử dụng bộ chỉ mục Azure Blob Storage để trích xuất và lập chỉ mục nội dung tài liệu để tìm kiếm toàn văn bản. Siêu dữ liệu Blob không phải là cơ chế lọc được lập chỉ mục phía máy chủ và các chính sách kiểm kê blob tạo ra các báo cáo thay vì tìm kiếm nội dung tài liệu.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 204",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/204-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-205",
    "questionNumber": 205,
    "text": "You are developing a software-as-a-service (SaaS) application that analyzes DNA data and will run on Azure virtual machines (VMs) in an availability zone. The data is kept on managed disks attached to the VM, and analysis performance is determined by the speed of the attached disk.  \n  \nRequirements:  \n  \n- The application must be able to rapidly revert to the prior day’s data when a systemic error is found.  \n- The application must minimize downtime if an Azure datacenter outage occurs.  \n  \nProvision the managed disk for maximum performance while satisfying these requirements.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "SSD cao cấp cung cấp hiệu suất đĩa được quản lý cao nhất trong số các lựa chọn được liệt kê. Zone-redundant storage (ZRS) sao chép dữ liệu một cách đồng bộ trên availability zones trong một khu vực, cung cấp khả năng phục hồi khi mất điện ở trung tâm dữ liệu/khu vực. Ảnh chụp nhanh đĩa được quản lý theo thời gian có thể được giữ lại để khôi phục dữ liệu của ngày hôm trước.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 205",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/205-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-206",
    "questionNumber": 206,
    "text": "You develop software solutions for a mobile delivery service. You are building a mobile app that lets users place orders from a restaurant in their area. The app follows this workflow:  \n  \n1. A driver chooses the restaurants for which they will deliver orders.  \n2. Orders are sent to every available driver in an area.  \n3. A driver sees only orders for the restaurants they selected.  \n4. When the first driver accepts an order, it is removed from the available-orders list.  \n  \nYou need to implement an Azure Service Bus solution.  \n  \nWhich three actions should you perform, in order?",
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
        "correctAnswer": "F"
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
        "text": "Create a single Service Bus topic."
      },
      {
        "key": "B",
        "text": "Create a Service Bus Namespace for each restaurant for which a driver can receive messages."
      },
      {
        "key": "C",
        "text": "Create a single Service Bus subscription."
      },
      {
        "key": "D",
        "text": "Create a Service Bus subscription for each restaurant for which a driver can receive orders."
      },
      {
        "key": "E",
        "text": "Create s single Service Bus Namespace."
      },
      {
        "key": "F",
        "text": "Create a Service Bus topic for each restaurant for which a driver can receive messages."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Create a single Service Bus topic."
      },
      {
        "key": "B",
        "text": "Create a Service Bus Namespace for each restaurant for which a driver can receive messages."
      },
      {
        "key": "C",
        "text": "Create a single Service Bus subscription."
      },
      {
        "key": "D",
        "text": "Create a Service Bus subscription for each restaurant for which a driver can receive orders."
      },
      {
        "key": "E",
        "text": "Create s single Service Bus Namespace."
      },
      {
        "key": "F",
        "text": "Create a Service Bus topic for each restaurant for which a driver can receive messages."
      }
    ],
    "correctAnswers": [
      "step1=E",
      "step2=F",
      "step3=D"
    ],
    "explanation": "Không gian tên Azure Service Bus là nơi chứa các thực thể Service Bus. Một chủ đề hỗ trợ xuất bản tới nhiều người tiêu dùng và các chủ đề nhà hàng riêng biệt sẽ tách biệt luồng đơn hàng của từng nhà hàng. Việc tạo đăng ký cho mỗi nhà hàng mà tài xế đã chọn sẽ chỉ cấp cho tài xế đó quyền truy cập vào các luồng đặt hàng hiện hành của nhà hàng.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 206",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/206-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-207",
    "questionNumber": 207,
    "text": "You are developing a microservice that will run on Azure Container Apps for a company. External HTTP ingress traffic is enabled.  \n  \nThe company requires that updates to the microservice do not cause downtime.  \n  \nYou need to deploy an update to the microservice.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Enable single revision mode."
      },
      {
        "key": "B",
        "text": "Use multiple environments for each container."
      },
      {
        "key": "C",
        "text": "Use a private container registry and single image for all containers."
      },
      {
        "key": "D",
        "text": "Use a single environment for all containers."
      },
      {
        "key": "E",
        "text": "Enable multiple revision mode."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Trong chế độ sửa đổi đơn Azure Container Apps, bản sửa đổi hiện tại tiếp tục nhận 100% lưu lượng truy cập vào cho đến khi bản sửa đổi mới được cung cấp, mở rộng quy mô và vượt qua các cuộc thăm dò khởi động và sẵn sàng thành công. Điều này mang lại khả năng triển khai không có thời gian ngừng hoạt động; nếu cập nhật không thành công, lưu lượng truy cập vẫn còn trên bản sửa đổi hiện có.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 207",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/207-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-208",
    "questionNumber": 208,
    "text": "You are implementing an Azure solution that uses Azure Cosmos DB and the latest Azure Cosmos DB SDK. You add a change feed processor to a new container instance.  \n  \nYou try to read a batch of 100 documents. Processing fails while reading one document. The solution must monitor the progress of the change feed processor instance on the new container as the change feed is read. It must also prevent the processor from retrying the entire batch when a document cannot be read.  \n  \nWhich features should you use? Each feature may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "monitor_progress",
        "text": "Monitor the progress of the change feed processor",
        "correctAnswer": "A"
      },
      {
        "id": "prevent_batch_retry",
        "text": "Prevent the change feed processor from retrying the entire batch when one document cannot be read",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Change feed estimator"
      },
      {
        "key": "B",
        "text": "Dead-letter queue"
      },
      {
        "key": "C",
        "text": "Deployment unit"
      },
      {
        "key": "D",
        "text": "Lease container"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Change feed estimator"
      },
      {
        "key": "B",
        "text": "Dead-letter queue"
      },
      {
        "key": "C",
        "text": "Deployment unit"
      },
      {
        "key": "D",
        "text": "Lease container"
      }
    ],
    "correctAnswers": [
      "monitor_progress=A",
      "prevent_batch_retry=B"
    ],
    "explanation": "Công cụ ước tính nguồn cấp dữ liệu thay đổi theo dõi tiến trình của bộ xử lý bằng cách ước tính các thay đổi đang chờ xử lý trong nguồn cấp dữ liệu. Hàng đợi thư chết tồn tại một tài liệu riêng lẻ không thể xử lý được, cho phép bộ xử lý tiếp tục và tránh bị kẹt khi thử lại cùng một lô. Bộ chứa cho thuê lưu trữ trạng thái điểm kiểm tra/cho thuê, trong khi đơn vị triển khai mô tả một nhóm phiên bản bộ xử lý.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 208",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/208-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-209",
    "questionNumber": 209,
    "text": "You are developing an Azure Function App using a language that the Azure Function App host does not support. The language supports HTTP primitives.  \n  \nYou must deploy the code to a production Azure Function App environment and need to configure the application for deployment.  \n  \nWhich configuration values should you use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Trình xử lý tùy chỉnh Azure Functions hỗ trợ mã được viết bằng các ngôn ngữ mà Azure Functions không hỗ trợ nguyên bản khi mã có thể chạy máy chủ web và xử lý các nguyên gốc HTTP. Điều này sử dụng triển khai mã, ngăn xếp thời gian chạy Trình xử lý tùy chỉnh và lựa chọn phiên bản tùy chỉnh.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 209",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/209-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-210",
    "questionNumber": 210,
    "text": "A company uses Azure Container Apps. A container app named App1 is in a resource group named RG1.  \n  \nThe company must test updates to App1. Multiple revision modes are enabled on App1.  \n  \nYou need to make sure traffic is routed to every revision of App1.  \n  \nHow should you complete the code segment?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "`az containerapp ingress traffic set` định cấu hình trọng số lưu lượng truy cập vào cho các bản sửa đổi Azure Container Apps. Hai trọng số sửa đổi được chỉ định, 80 và 20, tổng cộng là 100 phần trăm, do đó cả hai bản sửa đổi đều nhận được lưu lượng truy cập.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 210",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/210-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-211",
    "questionNumber": 211,
    "text": "You are developing an Azure Function App that processes images uploaded to an Azure Blob container.  \n  \nImages must be processed as soon as possible after they are uploaded, and the solution must minimize latency. You create code that processes images when the Function App is triggered.  \n  \nYou need to configure the Function App.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Use an App Service plan. Configure the Function App to use an Azure Blob Storage input trigger."
      },
      {
        "key": "B",
        "text": "Use a Consumption plan. Configure the Function App to use an Azure Blob Storage trigger."
      },
      {
        "key": "C",
        "text": "Use a Consumption plan. Configure the Function App to use a Timer trigger."
      },
      {
        "key": "D",
        "text": "Use an App Service plan. Configure the Function App to use an Azure Blob Storage trigger."
      },
      {
        "key": "E",
        "text": "Use a Consumption plan. Configure the Function App to use an Azure Blob Storage input trigger."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Trình kích hoạt Blob Storage chạy một hàm để phản hồi một blob mới hoặc được cập nhật, trong khi liên kết đầu vào Blob Storage chỉ cung cấp dữ liệu blob cho một hàm đã được gọi. Quá trình xử lý trình kích hoạt blob trên gói Tiêu thụ có thể bị trì hoãn khi ứng dụng không hoạt động. Gói Dịch vụ ứng dụng có thể sử dụng Luôn bật để tránh độ trễ không hoạt động đó, khiến gói này trở thành gói được liệt kê phù hợp để xử lý hình ảnh có độ trễ thấp.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 211",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/211-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-212",
    "questionNumber": 212,
    "text": "You are developing an app that will use CosmosDB for data storage. The app will process batches of relational data.  \n  \nYou need to choose an API for the app.  \n  \nWhich API should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "MongoDB API"
      },
      {
        "key": "B",
        "text": "Table API"
      },
      {
        "key": "C",
        "text": "SQL API"
      },
      {
        "key": "D",
        "text": "Cassandra API"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "API SQL Azure Cosmos DB hỗ trợ các truy vấn giống SQL và toán tử truy vấn quan hệ trên các tài liệu JSON, khiến nó trở thành API thích hợp để xử lý các lô dữ liệu quan hệ.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 212",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/212-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-213",
    "questionNumber": 213,
    "text": "You are developing an ASP.NET Core web application on the latest .NET runtime, hosted in Azure App Service.  \n  \nYou must collect traces, metrics, logs, and exceptions to monitor performance and diagnose issues. The requirements are:  \n  \n- All data must be sent to a new Application Insights instance.  \n- The Application Insights resource connection must be secure.  \n- The resource connection value must be updateable by code deployment pipelines.  \n- You must enable selection and filtering of metrics and performance counters for near-real-time examination.  \n- You must inspect stack traces from sampled failed requests and exceptions.  \n  \nYou create a new Application Insights instance in the Azure portal and install the latest `Azure.Monitor.OpenTelemetry.AspNetCore` NuGet package in the application.  \n  \nYou need to enable and configure OpenTelemetry-based data collection. Which configuration should you use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Đối với các ứng dụng ASP.NET Core sản xuất, hãy định cấu hình `APPLICATIONINSIGHTS_CONNECTION_STRING` làm biến môi trường; trong Azure App Service, tính năng này hỗ trợ cài đặt ứng dụng an toàn và cập nhật theo hướng quy trình mà không cần đặt giá trị vào mã nguồn. Đăng ký bản phân phối Azure Monitor OpenTelemetry trong `Program.cs` với `AddOpenTelemetry().UseAzureMonitor()`. Bản phân phối bao gồm công cụ ASP.NET Core và Live Metrics được bật theo mặc định, hỗ trợ điều tra lỗi và số liệu gần như thời gian thực.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 213",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/213-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-214",
    "questionNumber": 214,
    "text": "You have a workspace-based Azure Application Insights resource named Insights1 and an Azure App Service web app named App1. Insights1 collects telemetry produced by App1.  \n  \nYou plan to evaluate the alerting capability of the availability testing enabled for App1 by taking it offline for 50 minutes.  \n  \nYou create a standard availability test for App1, configure its frequency as 15 minutes, and set its alert status to Enabled.  \n  \nYou need to determine how many alerts to expect when App1 is offline for 50 minutes.  \n  \nHow many alerts should you expect?",
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
    "explanation": "Cảnh báo về tính khả dụng của Application Insights dựa trên trạng thái: một cảnh báo được tạo khi phát hiện điểm cuối là không khả dụng và các cảnh báo tiếp theo của no được tạo ở các lần đánh giá sau này trong khi nó vẫn không khả dụng. Tần suất kiểm tra 15 phút không gây ra cảnh báo lặp đi lặp lại trong cùng 50 phút ngừng hoạt động.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 214",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/214-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-215",
    "questionNumber": 215,
    "text": "You need to retrieve all order line items from Order.json and sort the results alphabetically by city.  \n  \nHow should you complete the code? Select the appropriate option for each blank in the answer area.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Trong API SQL của Azure Cosmos DB, JOIN thực hiện tự nối nội bộ tài liệu để làm phẳng một thuộc tính mảng được lồng bên trong mỗi mục, sử dụng mẫu FROM <container> <alias> JOIN <newAlias> IN <alias>.<arrayProperty>. Bởi vì danh sách SELECT dự án li.id và li.price, nên 'li' phải là bí danh được JOIN giới thiệu trên mảng line_items của đơn hàng, do đó truy vấn sẽ đọc FROM Order o JOIN li IN o.line_items — thao tác này tạo ra một hàng đầu ra cho mỗi chi tiết đơn hàng trên tất cả các đơn hàng. Giá trị thành phố được sử dụng để sắp xếp thuộc về địa chỉ của đơn hàng, là thuộc tính của chính tài liệu đặt hàng (o.address.city), không phải của một chi tiết đơn hàng riêng lẻ, vì các chi tiết đơn hàng trong mô hình dữ liệu này không chứa trường địa chỉ/thành phố. Do đó, ORDER BY o.address.city ASC sắp xếp chính xác các hàng mục hàng được làm phẳng theo thứ tự bảng chữ cái theo thành phố của đơn hàng.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 215",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/215-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-216",
    "questionNumber": 216,
    "text": "You have two Hyper-V hosts, named Host1 and Host2. Host1 contains an Azure virtual machine named VM1 that was deployed using a custom Azure Resource Manager template.  \n  \nYou need to move VM1 to Host2.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "From the Update management blade, click Enable."
      },
      {
        "key": "B",
        "text": "From the Overview blade, move VM1 to a different subscription."
      },
      {
        "key": "C",
        "text": "From the Redeploy blade, click Redeploy."
      },
      {
        "key": "D",
        "text": "From the Profile blade, modify the usage location."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Việc triển khai lại Azure virtual machine sẽ tắt nó, chuyển nó sang nút cơ sở hạ tầng Azure mới và bật lại trong khi vẫn giữ lại cấu hình và các tài nguyên liên quan. Hoạt động Triển khai lại thực hiện việc di chuyển máy chủ cần thiết.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 216",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/216-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-217",
    "questionNumber": 217,
    "text": "You must add a JSON segment beginning at line AM04 in the application manifest to implement the ContentReviewer role.  \n  \nHow should the JSON segment be completed? Each JSON segment can be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "member_types_property",
        "text": "Slot 1:",
        "correctAnswer": "D"
      },
      {
        "id": "member_type",
        "text": "Slot 2:",
        "correctAnswer": "A"
      },
      {
        "id": "role_value_property",
        "text": "Slot 3:",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "User"
      },
      {
        "key": "B",
        "text": "value"
      },
      {
        "key": "C",
        "text": "name"
      },
      {
        "key": "D",
        "text": "allowedMemberTypes"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "User"
      },
      {
        "key": "B",
        "text": "value"
      },
      {
        "key": "C",
        "text": "name"
      },
      {
        "key": "D",
        "text": "allowedMemberTypes"
      }
    ],
    "correctAnswers": [
      "member_types_property=D",
      "member_type=A",
      "role_value_property=B"
    ],
    "explanation": "Định nghĩa vai trò ứng dụng Microsoft Entra sử dụng `allowedMemberTypes` để xác định các loại chính có thể gán. `User` cho phép gán cho người dùng (và nhóm), phù hợp với người đánh giá nội dung của nhân viên. Thuộc tính `value` là giá trị vai trò được bao gồm trong yêu cầu vai trò của mã thông báo, do đó `ContentReviewer` xác định vai trò người đánh giá được chỉ định.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 217",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/217-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-218",
    "questionNumber": 218,
    "text": "You develop and deploy an Azure App Service web app. The app is deployed across multiple regions and uses Azure Traffic Manager. Application Insights is enabled for the app.  \n  \nYou need to analyze the app uptime for each month.  \n  \nWhich two solutions will achieve the goal? Each correct answer presents a complete solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Monitor logs"
      },
      {
        "key": "B",
        "text": "Application Insights alerts"
      },
      {
        "key": "C",
        "text": "Azure Monitor metrics"
      },
      {
        "key": "D",
        "text": "Application Insights web tests"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Để phân tích thời gian hoạt động hàng tháng, bạn cần có dữ liệu sẵn có cùng với cách truy vấn dữ liệu đó theo thời gian. Các bài kiểm tra tính khả dụng của Application Insights (ping web/URL) (D) chủ động thăm dò ứng dụng từ nhiều vị trí và ghi lại kết quả về tính khả dụng, đây là cơ chế tiêu chuẩn để đo thời gian hoạt động của ứng dụng đa khu vực, có giao diện Trình quản lý lưu lượng truy cập. Nhật ký Azure Monitor (A) lưu trữ các Kết quả sẵn có đó và cho phép bạn chạy các truy vấn KQL để tổng hợp thời gian hoạt động mỗi tháng. Chỉ số Azure Monitor (C) lưu giữ dữ liệu trong một khoảng thời gian giới hạn và không phù hợp với phân tích lịch sử hàng tháng, đồng thời cảnh báo Application Insights (B) chỉ thông báo về các điều kiện thay vì phân tích thời gian hoạt động, vì vậy mỗi chỉ số đều là một giải pháp chưa hoàn chỉnh.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 218",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/218-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-219",
    "questionNumber": 219,
    "text": "You develop for a software-as-a-service (SaaS) company that uses an Azure Function to process orders. The function currently runs in an Azure Function app and is triggered by an Azure Storage queue.  \n  \nYou are preparing to migrate the Azure Function to Kubernetes by using Kubernetes-based Event Driven Autoscaling (KEDA). You must configure Kubernetes Custom Resource Definitions (CRDs) for the Azure Function.  \n  \nWhich CRDs should you configure? Each CRD type can be used once, multiple times, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "azure_function_code",
        "text": "Azure Function code",
        "correctAnswer": "B"
      },
      {
        "id": "polling_interval",
        "text": "Polling interval",
        "correctAnswer": "C"
      },
      {
        "id": "azure_storage_connection_string",
        "text": "Azure Storage connection string",
        "correctAnswer": "A"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Secret"
      },
      {
        "key": "B",
        "text": "Deployment"
      },
      {
        "key": "C",
        "text": "ScaledObject"
      },
      {
        "key": "D",
        "text": "TriggerAuthentication"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Secret"
      },
      {
        "key": "B",
        "text": "Deployment"
      },
      {
        "key": "C",
        "text": "ScaledObject"
      },
      {
        "key": "D",
        "text": "TriggerAuthentication"
      }
    ],
    "correctAnswers": [
      "azure_function_code=B",
      "polling_interval=C",
      "azure_storage_connection_string=A"
    ],
    "explanation": "Triển khai chạy hình ảnh vùng chứa chứa mã Hàm Azure. KEDA ScaledObject xác định hành vi chia tỷ lệ và bao gồm `pollingInterval`. Chuỗi kết nối Bộ lưu trữ Azure là thông tin xác thực và thuộc về Bí mật Kubernetes; KEDA có thể sử dụng nó thông qua môi trường khối lượng công việc hoặc cấu hình xác thực.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 219",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/219-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-220",
    "questionNumber": 220,
    "text": "You are developing an application that transfers data between on-premises file servers and Azure Blob storage. The application stores keys, secrets, and certificates in Azure Key Vault and uses the Azure Key Vault APIs.  \n  \nYou need to configure the application so that an accidentally deleted key vault or key vault object can be recovered for 90 days after deletion.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Run the Add-AzKeyVaultKey cmdlet."
      },
      {
        "key": "B",
        "text": "Run the az keyvault update --enable-soft-delete true --enable-purge-protection true CLI."
      },
      {
        "key": "C",
        "text": "Implement virtual network service endpoints for Azure Key Vault."
      },
      {
        "key": "D",
        "text": "Run the az keyvault update --enable-soft-delete false CLI."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Xóa mềm Azure Key Vault giữ lại các vault và đối tượng vault đã xóa trong khoảng thời gian lưu giữ có thể phục hồi, mặc định là 90 ngày. Bảo vệ thanh lọc ngăn chặn việc thanh lọc vĩnh viễn trong thời gian đó. Việc kích hoạt cả hai tính năng này sẽ cung cấp khả năng bảo vệ khôi phục cho các kho tiền, khóa, bí mật và chứng chỉ vô tình bị xóa.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 220",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/220-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-221",
    "questionNumber": 221,
    "text": "You need to fix the corporate website error.  \n  \nWhich four actions should be recommended, in sequence?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "step1",
        "text": "Slot 1:",
        "correctAnswer": "G"
      },
      {
        "id": "step2",
        "text": "Slot 2:",
        "correctAnswer": "F"
      },
      {
        "id": "step3",
        "text": "Slot 3:",
        "correctAnswer": "D"
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
        "text": "Upload the certificate to Azure Key Vault."
      },
      {
        "key": "B",
        "text": "Update line SC05 of Security.cs to include error handling and then redeploy the code."
      },
      {
        "key": "C",
        "text": "Update line SC03 of Security.cs to include a using statement and then re-deploy the code."
      },
      {
        "key": "D",
        "text": "Add the certificate thumbprint to the WEBSITE_LOAD_CERTIFICATES app setting."
      },
      {
        "key": "E",
        "text": "Upload the certificate to source control."
      },
      {
        "key": "F",
        "text": "Import the certificate to Azure App Service."
      },
      {
        "key": "G",
        "text": "Generate a certificate."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Upload the certificate to Azure Key Vault."
      },
      {
        "key": "B",
        "text": "Update line SC05 of Security.cs to include error handling and then redeploy the code."
      },
      {
        "key": "C",
        "text": "Update line SC03 of Security.cs to include a using statement and then re-deploy the code."
      },
      {
        "key": "D",
        "text": "Add the certificate thumbprint to the WEBSITE_LOAD_CERTIFICATES app setting."
      },
      {
        "key": "E",
        "text": "Upload the certificate to source control."
      },
      {
        "key": "F",
        "text": "Import the certificate to Azure App Service."
      },
      {
        "key": "G",
        "text": "Generate a certificate."
      }
    ],
    "correctAnswers": [
      "step1=G",
      "step2=F",
      "step3=D",
      "step4=C"
    ],
    "explanation": "Chứng chỉ Dịch vụ ứng dụng phải được tạo và nhập vào ứng dụng trước khi có thể sử dụng. WEBSITE_LOAD_CERTIFICATES cung cấp chứng chỉ được chỉ định bằng dấu vân tay của nó cho mã ứng dụng. Mã lưu trữ chứng chỉ C# yêu cầu không gian tên chứng chỉ X.509, sau đó ứng dụng đã cập nhật phải được triển khai lại.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 221",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/221-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-222",
    "questionNumber": 222,
    "text": "You are configuring a new development environment for a Java application.  \n  \nThe environment requires a Virtual Machine Scale Set (VMSS), several storage accounts, and networking components. The VMSS must not be created until the storage accounts have been successfully created and an associated load balancer and virtual network are configured.  \n  \nHow should you complete the Azure Resource Manager template?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "`copyIndex()` trả về chỉ mục lặp cho vòng lặp sao chép tài nguyên, cho phép mỗi tên tài khoản lưu trữ là duy nhất. Đối tượng `copy` xác định vòng lặp tài nguyên đó và số lượng của nó. `dependsOn` đặt thứ tự triển khai một cách rõ ràng, do đó tài nguyên máy ảo sẽ chờ bộ cân bằng tải, mạng ảo và tài nguyên tài khoản lưu trữ cần thiết.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 222",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/222-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-223",
    "questionNumber": 223,
    "text": "You are building an ASP.NET Core Web API web service. The web service uses Azure Application Insights for all telemetry and dependency tracking. The web service reads from and writes to a database other than Microsoft SQL Server.  \n  \nYou need to make sure dependency tracking functions for calls to the third-party database.  \n  \nWhich two dependency telemetry properties should you use? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Telemetry.Context.Cloud.RoleInstance"
      },
      {
        "key": "B",
        "text": "Telemetry.Id"
      },
      {
        "key": "C",
        "text": "Telemetry.Name"
      },
      {
        "key": "D",
        "text": "Telemetry.Context.Operation.Id"
      },
      {
        "key": "E",
        "text": "Telemetry.Context.Session.Id"
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "Để theo dõi phần phụ thuộc tùy chỉnh trên một ranh giới từ xa, phép đo từ xa phụ thuộc `Id` đóng vai trò là mã định danh gốc và `Context.Operation.Id` xác định hoạt động gốc. Việc truyền bá các mã định danh tương quan này cho phép phép đo từ xa có liên quan được liên kết với cùng một hoạt động từ đầu đến cuối. Application Insights xác định phần phụ thuộc `Id` là mã định danh cuộc gọi phụ thuộc duy nhất được sử dụng để liên kết cuộc gọi với yêu cầu tương ứng của nó.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 223",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/223-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-224",
    "questionNumber": 224,
    "text": "You are developing a web application that analyzes user photos and returns metadata about the objects it identifies. Image analysis is very expensive in both time and compute resources. You plan to use Azure Redis Cache so that duplicate uploads do not require reprocessing.  \n  \nIn the event of an Azure data-center outage, metadata loss must be minimized.  \n  \nYou need to configure the Azure Redis cache instance.  \n  \nWhich two actions should you take? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Configure Azure Redis with AOF persistence."
      },
      {
        "key": "B",
        "text": "Configure Azure Redis with RDB persistence."
      },
      {
        "key": "C",
        "text": "Configure second storage account for persistence."
      },
      {
        "key": "D",
        "text": "Set backup frequency to the minimum value."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Tính bền vững của AOF lưu mọi thao tác ghi vào bộ đệm vào nhật ký chỉ nối thêm và duy trì nhật ký đó một lần mỗi giây, mang lại khả năng mất dữ liệu thấp hơn đáng kể so với ảnh chụp nhanh RDB đã lên lịch. Đối với Premium Azure Cache dành cho Redis, tính bền vững của AOF có thể được định cấu hình bằng tài khoản lưu trữ thứ hai, cho phép phân phối dữ liệu AOF liên tục trên các tài khoản lưu trữ đã định cấu hình.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 224",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/224-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-225",
    "questionNumber": 225,
    "text": "You are developing an application that stores sensitive customer data in Azure Blob Storage. The data must be encrypted by using a key unique to each customer.  \n  \nIf an encryption key is corrupted, it must not be used for encryption.  \n  \nYou need to ensure the blob is encrypted. How should you complete the code segment?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Khóa do khách hàng cung cấp Azure Blob Storage cho phép ứng dụng cung cấp khóa mã hóa AES-256 riêng cho các hoạt động blob. `CustomerProvidedKey` được định cấu hình trên `BlobClientOptions`; xác thực giá trị khóa trước khi đặt tùy chọn đó sẽ tránh tiếp tục với khóa không đạt giá trị xác minh của ứng dụng.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 225",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/225-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-226",
    "questionNumber": 226,
    "text": "You are building a web application that runs as an Azure Web App. The web application stores data in Azure SQL Database and files in an Azure Storage account. As part of normal operations, it makes HTTP requests to external services.  \n  \nThe web application is instrumented with Application Insights, and the external services are OpenTelemetry compliant.  \n  \nYou need to ensure that the customer ID of the signed-in user is associated with every operation across the overall system.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Add the customer ID for the signed in user to the CorrelationContext in the web application"
      },
      {
        "key": "B",
        "text": "On the current SpanContext, set the TraceId to the customer ID for the signed in user"
      },
      {
        "key": "C",
        "text": "Set the header Ocp-Apim-Trace to the customer ID for the signed in user"
      },
      {
        "key": "D",
        "text": "Create a new SpanContext with the TraceFlags value set to the customer ID for the signed in user"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "CorrelationContext truyền các thuộc tính theo dõi phân phối tên-giá trị do ứng dụng xác định bằng một thao tác, do đó, việc đặt ID khách hàng của người dùng đã đăng nhập vào đó sẽ liên kết giá trị đó với phép đo từ xa và các hoạt động HTTP xuôi dòng. ID theo dõi và cờ theo dõi là các trường theo dõi dành riêng, không phải là nơi chứa số nhận dạng doanh nghiệp.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 226",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/226-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-227",
    "questionNumber": 227,
    "text": "You are developing an application that monitors data added to an Azure Blob storage account.  \n  \nYou need to process every change made to the storage account.  \n  \nHow should you complete the code segment?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "`GetChanges(x).AsPages()` liệt kê nguồn cấp dữ liệu thay đổi dưới dạng trang, sử dụng `x` làm mã thông báo tiếp tục khi tiếp tục. `ContinuationToken` của mỗi trang xác định nơi bắt đầu liệt kê tiếp theo, trong khi `Values` chứa các sự kiện cần xử lý.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 227",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/227-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-228",
    "questionNumber": 228,
    "text": "You develop and deploy a web app to Azure App Service. The web app lets users authenticate through social identity providers by using the Azure B2C service. All user-profile information is stored in Azure B2C.  \n  \nYou must update the web app to display common Azure B2C user properties, including:  \n  \n- Email address  \n- Job title  \n- First name  \n- Last name  \n- Office location  \n  \nYou need to implement user properties in the web app. Which code library and API should you use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Microsoft Graph hiển thị tài nguyên người dùng Azure AD B2C và thuộc tính hồ sơ của họ. MSAL cung cấp xác thực ứng dụng và thu thập mã thông báo cho Azure AD B2C, cho phép ứng dụng web gọi Microsoft Graph với các quyền được ủy quyền phù hợp.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 228",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/228-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-229",
    "questionNumber": 229,
    "text": "You have 100 Azure virtual machines (VMs) with system-assigned managed identities enabled.  \n  \nYou need to determine the value of the object ID attribute for each identity.  \n  \nWhich command should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Get-AzureADUser"
      },
      {
        "key": "B",
        "text": "Get-AzResource"
      },
      {
        "key": "C",
        "text": "Get-AzureADUserOwnedObject"
      },
      {
        "key": "D",
        "text": "az ad signed-in-user list-owned-objects"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Đối với system-assigned managed identity, ID đối tượng của managed identity service principal là `PrincipalId` của nhận dạng tài nguyên. `Get-AzResource` truy xuất tài nguyên VM, cho phép lấy giá trị `Identity.PrincipalId` của nó.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 229",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/229-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-230",
    "questionNumber": 230,
    "text": "You are updating an application that stores data in Azure and uses Azure Cosmos DB for storage. The application keeps data in multiple documents associated with one username.  \n  \nThe application must be able to update multiple documents for a username in one ACID operation.  \n  \nYou need to configure Azure Cosmos DB.  \n  \nWhich two actions should you take? Each correct answer represents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create a collection sharded on username to store documents."
      },
      {
        "key": "B",
        "text": "Configure Azure Cosmos DB to use the Gremlin API."
      },
      {
        "key": "C",
        "text": "Create an unsharded collection to store documents."
      },
      {
        "key": "D",
        "text": "Configure Azure Cosmos DB to use the MongoDB API."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Azure Cosmos DB dành cho MongoDB cung cấp các giao dịch nhiều tài liệu với ngữ nghĩa ACID chỉ trong một bộ sưu tập không được phân chia. Các giao dịch nhiều tài liệu không được hỗ trợ trong các bộ sưu tập được phân chia, vì vậy cấu hình bắt buộc là một bộ sưu tập không được phân chia bằng API MongoDB.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 230",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/230-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-231",
    "questionNumber": 231,
    "text": "You are developing a Docker/Go application by using Azure App Service Web App for Containers. You plan to run the container in an App Service on Linux and have identified a Docker container image to use.  \n  \nNone of the current resource groups are in a location that supports Linux. You must minimize the required number of resource groups.  \n  \nYou need to create the application and carry out its initial deployment.  \n  \nWhich three Azure CLI commands should you use, in the correct order?",
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
        "correctAnswer": "E"
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
        "text": "az group create"
      },
      {
        "key": "B",
        "text": "az group update"
      },
      {
        "key": "C",
        "text": "az webapp update"
      },
      {
        "key": "D",
        "text": "az webapp create"
      },
      {
        "key": "E",
        "text": "az appservice plan create"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "az group create"
      },
      {
        "key": "B",
        "text": "az group update"
      },
      {
        "key": "C",
        "text": "az webapp update"
      },
      {
        "key": "D",
        "text": "az webapp create"
      },
      {
        "key": "E",
        "text": "az appservice plan create"
      }
    ],
    "correctAnswers": [
      "step1=A",
      "step2=E",
      "step3=D"
    ],
    "explanation": "Tạo nhóm tài nguyên ở vị trí Dịch vụ ứng dụng hỗ trợ Linux, sau đó tạo gói Dịch vụ ứng dụng Linux trong nhóm đó (sử dụng `--is-linux`). Tạo ứng dụng web trong gói đó bằng `az webapp create`, chỉ định hình ảnh vùng chứa cho lần triển khai ban đầu. Các lệnh cập nhật sửa đổi các tài nguyên hiện có và không phù hợp để cung cấp các tài nguyên này.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 231",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/231-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-232",
    "questionNumber": 232,
    "text": "HOTSPOT —  \n  \nYou are developing an ASP.NET Core web application that you plan to deploy to Azure Web App for Containers. The application must retain runtime diagnostic data across application restarts. It uses the following code:  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783790037738-uxr7jtrs.jpg)  \n  \nConfigure the application settings so diagnostic data is stored as required.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Các vùng chứa tùy chỉnh Linux trong Azure App Service chỉ duy trì dữ liệu trong `/home` khi bộ lưu trữ Dịch vụ ứng dụng được bật. Việc đặt `WEBSITE_ENABLE_APP_SERVICE_STORAGE` thành `true` sẽ bật tính năng lưu trữ đó và việc đặt `DIAGDATA` thành `/home` sẽ hướng mã ghi dữ liệu chẩn đoán vào đó.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783790037738-uxr7jtrs.jpg",
    "sourceTitle": "Examcademy AZ-204 Question 232",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/232-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-233",
    "questionNumber": 233,
    "text": "You are developing an application that will be hosted on a set of Azure virtual machines (VMs).  \n  \nYou need to configure Azure Monitor to collect logs from the application.  \n  \nWhich four actions should you take in sequence?",
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
        "text": "Create a Log Analytics workspace."
      },
      {
        "key": "B",
        "text": "Install agents on the VM and VM scale set to be monitored."
      },
      {
        "key": "C",
        "text": "Send console logs."
      },
      {
        "key": "D",
        "text": "Add a VMInsights solution."
      },
      {
        "key": "E",
        "text": "Create an Application Insights resource."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Create a Log Analytics workspace."
      },
      {
        "key": "B",
        "text": "Install agents on the VM and VM scale set to be monitored."
      },
      {
        "key": "C",
        "text": "Send console logs."
      },
      {
        "key": "D",
        "text": "Add a VMInsights solution."
      },
      {
        "key": "E",
        "text": "Create an Application Insights resource."
      }
    ],
    "correctAnswers": [
      "step1=A",
      "step2=D",
      "step3=B",
      "step4=E"
    ],
    "explanation": "Không gian làm việc Log Analytics là kho lưu trữ dữ liệu đo từ xa được VM Insights và Application Insights dựa trên không gian làm việc sử dụng. VM Insights được cấu hình dựa trên không gian làm việc đó trước khi các máy ảo được giám sát và các phiên bản thiết lập quy mô được tích hợp với các tác nhân của chúng. Application Insights sau đó cung cấp bộ sưu tập đo từ xa ở cấp ứng dụng. Ghi nhật ký bảng điều khiển không phải là hành động tiên quyết trong trình tự cấu hình này.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 233",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/233-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-234",
    "questionNumber": 234,
    "text": "You have an Azure Queue Storage queue named `queue1`.  \n  \nYou plan to develop code to process messages in `queue1`.  \n  \nYou need to implement a queue operation that sets the visibility-timeout value for individual messages in `queue1`.  \n  \nWhich two operations can you use? Each correct answer provides a complete solution.  \n  \n> **NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Peek at a message in the queue."
      },
      {
        "key": "B",
        "text": "Delete a message in the queue."
      },
      {
        "key": "C",
        "text": "Add a message to the queue."
      },
      {
        "key": "D",
        "text": "Update a message in the queue."
      },
      {
        "key": "E",
        "text": "Receive a message from the queue."
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "Hoạt động Nhận/Nhận tin nhắn chấp nhận tham số `visibilitytimeout`, làm cho mỗi tin nhắn được truy xuất trở nên ẩn đối với những người tiêu dùng khác trong khoảng thời gian được chỉ định. Hoạt động Cập nhật tin nhắn thay đổi rõ ràng thời gian chờ hiển thị của một tin nhắn được xác định, sử dụng ID tin nhắn và biên nhận pop của nó.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 234",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/234-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-235",
    "questionNumber": 235,
    "text": "You are developing a .NET application that communicates with Azure Storage.  \n  \nA message must be stored when the application starts.  \n  \nYou need to implement the message.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "CloudStorageAccount.CreateCloudQueueClient tạo CloudQueueClient. GetQueueReference truy xuất đối tượng CloudQueue theo tên hàng đợi. CloudQueue hỗ trợ tạo hàng đợi không đồng bộ và thêm CloudQueueMessage.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 235",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/235-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-236",
    "questionNumber": 236,
    "text": "You must support the requirements of the Shipping Logic App.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Active Directory Application Proxy"
      },
      {
        "key": "B",
        "text": "Site-to-Site (S2S) VPN connection"
      },
      {
        "key": "C",
        "text": "On-premises Data Gateway"
      },
      {
        "key": "D",
        "text": "Point-to-Site (P2S) VPN connection"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Cổng dữ liệu tại chỗ cung cấp cầu nối an toàn được các trình kết nối Ứng dụng Azure Logic sử dụng để truy cập các nguồn dữ liệu tại chỗ. Nó hỗ trợ giao tiếp gửi đi từ môi trường tại chỗ và tránh yêu cầu kết nối gửi đến.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 236",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/236-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-237",
    "questionNumber": 237,
    "text": "You are developing an application that uses Azure Storage to store customer data. The data must be decrypted only by the customer, who must also receive a script to rotate keys.  \n  \nYou need to provide a script for key rotation. How should you complete the command?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Mã hóa do khách hàng quản lý của Azure Storage sử dụng khóa Key Vault. `az keyvault key list-versions` truy xuất mã nhận dạng phiên bản cho khóa đó và `Microsoft.Keyvault` định cấu hình tài khoản lưu trữ để sử dụng nguồn khóa do khách hàng Key Vault quản lý.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 237",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/237-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-238",
    "questionNumber": 238,
    "text": "Solution: Install the Docker client on the device and run the `docker run -it microsoft/azure-cli:0.10.17` command.  \n  \nDoes this accomplish the goal?",
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
    "explanation": "Việc triển khai tệp kê khai AKS yêu cầu `kubectl` được định cấu hình bằng thông tin xác thực cụm, thường thu được bằng `az aks get-credentials` và triển khai bằng `kubectl apply -f <manifest>`. Chỉ khởi động vùng chứa Azure CLI sẽ không định cấu hình quyền truy cập Kubernetes cũng như không áp dụng tệp kê khai YAML.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 238",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/238-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-239",
    "questionNumber": 239,
    "text": "Solution: You install the Azure CLI on the device and run the `kubectl apply \"f myapp.yaml` command.  \n  \nDoes this achieve the goal?",
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
    "explanation": "Tệp kê khai YAML được triển khai với kubectl bằng cách sử dụng cờ `-f`, chẳng hạn như `kubectl apply -f myapp.yaml`. Riêng Azure CLI không cài đặt kubectl và lệnh hiển thị không sử dụng cú pháp cờ tệp kê khai hợp lệ.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 239",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/239-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-240",
    "questionNumber": 240,
    "text": "You downloaded an Azure Resource Manager template to deploy multiple virtual machines. The template is based on an existing virtual machine, but it must be adapted to reference an administrative password.  \n  \nYou need to ensure that the password is not stored as plain text.  \n  \nYou are preparing to create the required components to accomplish this goal. Which component should you create?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "answer",
        "text": "Slot 1:",
        "correctAnswer": "A"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "An Azure Key Vault"
      },
      {
        "key": "B",
        "text": "An Azure Storage account"
      },
      {
        "key": "C",
        "text": "Azure Active Directory (AD) Identity Protection"
      },
      {
        "key": "D",
        "text": "An access policy"
      },
      {
        "key": "E",
        "text": "An Azure policy"
      },
      {
        "key": "F",
        "text": "A backup policy"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "An Azure Key Vault"
      },
      {
        "key": "B",
        "text": "An Azure Storage account"
      },
      {
        "key": "C",
        "text": "Azure Active Directory (AD) Identity Protection"
      },
      {
        "key": "D",
        "text": "An access policy"
      },
      {
        "key": "E",
        "text": "An Azure policy"
      },
      {
        "key": "F",
        "text": "A backup policy"
      }
    ],
    "correctAnswers": [
      "answer=A"
    ],
    "explanation": "Azure Key Vault lưu trữ an toàn các bí mật như mật khẩu quản trị. Quá trình triển khai Trình quản lý tài nguyên Azure có thể tham chiếu bí mật Key Vault dưới dạng giá trị tham số bảo mật, loại bỏ mật khẩu khỏi mẫu.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 240",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/240-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-241",
    "questionNumber": 241,
    "text": "You manage several existing Logic Apps and must regularly change definitions, add new logic, and optimize the apps.  \n  \nWhat should you use?  \n  \nEach tool may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "edit_b2b_workflows",
        "text": "Edit B2B workflows",
        "correctAnswer": "C"
      },
      {
        "id": "edit_definitions_json",
        "text": "Edit definitions in JSON",
        "correctAnswer": "B"
      },
      {
        "id": "visually_add_functionality",
        "text": "Visually add functionality",
        "correctAnswer": "A"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Logic Apps Designer"
      },
      {
        "key": "B",
        "text": "Code View Editor"
      },
      {
        "key": "C",
        "text": "Enterprise Integration Pack"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Logic Apps Designer"
      },
      {
        "key": "B",
        "text": "Code View Editor"
      },
      {
        "key": "C",
        "text": "Enterprise Integration Pack"
      }
    ],
    "correctAnswers": [
      "edit_b2b_workflows=C",
      "edit_definitions_json=B",
      "visually_add_functionality=A"
    ],
    "explanation": "Logic Apps Designer là bề mặt soạn thảo trực quan để thêm các hành động, trình kích hoạt và logic quy trình làm việc. Code View Editor chỉnh sửa trực tiếp định nghĩa quy trình công việc trong JSON. Gói tích hợp doanh nghiệp cung cấp các khả năng và tạo phẩm tích hợp B2B, bao gồm các đối tác thương mại, thỏa thuận, sơ đồ, bản đồ và chứng chỉ.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 241",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/241-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-242",
    "questionNumber": 242,
    "text": "You are developing a content-management application for technical manuals that is deployed as an Azure Static Web App.  \n  \nAuthenticated users must be able to view pages under `/manuals`, but only contributors can access `/manuals/new.html`.  \n  \nConfigure routing for the web app.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Quy tắc lộ trình được đánh giá theo thứ tự khai báo và quá trình xử lý dừng ở lần khớp đầu tiên. Do đó, quy tắc `/manuals/new.html` chính xác phải đứng trước `/manuals*`; nó giới hạn trang đó ở `contributors`. Sau đó, quy tắc ký tự đại diện cho phép bất kỳ người dùng được xác thực nào truy cập vào các đường dẫn `/manuals` còn lại. `authenticated` là vai trò tích hợp dành cho người dùng đã đăng nhập.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 242",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/242-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-243",
    "questionNumber": 243,
    "text": "You maintain an existing application that uses an Azure Blob GPv1 Premium storage account. Data older than three months is rarely used.  \n  \nData newer than three months must be available immediately. Data older than one year must be retained, but does not need to be immediately available.  \n  \nYou need to configure the account to support a lifecycle management rule that moves blob data not modified in the last year to archive storage.  \n  \nWhich three actions should you perform, in sequence?",
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
        "text": "Upgrade the storage account to GPv2"
      },
      {
        "key": "B",
        "text": "Create a new GPv2 Standard account and set its default access tier level to cool"
      },
      {
        "key": "C",
        "text": "Change the storage account access tier from hot to cool"
      },
      {
        "key": "D",
        "text": "Copy the data to be archived to a Standard GPv2 storage account and then delete the data from the original storage account"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Upgrade the storage account to GPv2"
      },
      {
        "key": "B",
        "text": "Create a new GPv2 Standard account and set its default access tier level to cool"
      },
      {
        "key": "C",
        "text": "Change the storage account access tier from hot to cool"
      },
      {
        "key": "D",
        "text": "Copy the data to be archived to a Standard GPv2 storage account and then delete the data from the original storage account"
      }
    ],
    "correctAnswers": [
      "step1=A",
      "step2=D",
      "step3=C"
    ],
    "explanation": "Tài khoản GPv1 không hỗ trợ quản lý vòng đời hoặc phân tầng blob, trong khi GPv2 hỗ trợ các khả năng này. Bộ lưu trữ lưu trữ yêu cầu tài khoản GPv2 tiêu chuẩn, do đó dữ liệu cần lưu trữ sẽ được sao chép vào đó và xóa khỏi nguồn Premium. Cấp tài khoản tuyệt vời phù hợp với dữ liệu hiếm khi được truy cập sau ba tháng; việc phân tầng lưu trữ sau đó được thực hiện trên mỗi blob bằng cách quản lý vòng đời.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 243",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/243-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-244",
    "questionNumber": 244,
    "text": "You are developing an application that uses a premium block blob storage account. The application processes a large volume of transactions each day, and Blob storage versioning is enabled.  \n  \nTo optimize costs by automating Azure Blob Storage access tiers, you apply the following policy rules to the storage account. (Line numbers are included only for reference.)  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783809794075-17bl12zq.png)  \n  \nFor each statement, select **Yes** if it is true. Otherwise, select **No**.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "Block blobs prefixed with transactions will transition blobs that have not been modified in over 60 days to cool storage, and delete blobs not modified in 365 days",
        "correctAnswer": "No"
      },
      {
        "id": "2",
        "text": "Blobs are moved to cool storage if they have not been accessed for 60 days",
        "correctAnswer": "No"
      },
      {
        "id": "3",
        "text": "The policy rule tiers previous versions within a container named transactions that are 60 days or older to the cool tier and deletes previous versions that are 365 days or older",
        "correctAnswer": "No"
      },
      {
        "id": "4",
        "text": "Blobs will automatically be tiered from cool back to hot if accessed again after being tiered to cool",
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
      "2:No",
      "3:No",
      "4:No"
    ],
    "explanation": "Các hành động trong vòng đời của `version` áp dụng cho các phiên bản trước và `daysAfterCreationGreaterThan` đo lường thời gian tạo thay vì sửa đổi hoặc truy cập không hoạt động. Bộ lọc `prefixMatch` không phải là khai báo của vùng chứa có tên `transactions`. Tự động phân cấp từ nguội sang nóng yêu cầu cài đặt `enableAutoTierToHotFromCool` rõ ràng và điều kiện lần truy cập cuối cùng. Việc phân cấp để làm mát cũng không được hỗ trợ đối với các tài khoản lưu trữ blob khối cao cấp.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783809794075-17bl12zq.png",
    "sourceTitle": "Examcademy AZ-204 Question 244",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/244-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-245",
    "questionNumber": 245,
    "text": "Solution: Deploy and configure an Azure Database for PostgreSQL, and update the web applications.  \n  \nDoes this solution satisfy the goal?",
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
    "explanation": "Azure Cache cho Redis là dịch vụ Azure hỗ trợ trạng thái phiên ASP.NET được chia sẻ với quyền truy cập đồng thời được kiểm soát cho nhiều người đọc và một người ghi, cũng như các phản hồi HTTP/đầu ra HTML được lưu trong bộ nhớ đệm. Riêng Cơ sở dữ liệu Azure dành cho PostgreSQL không cung cấp cơ chế lưu vào bộ nhớ đệm đầu ra và trạng thái phiên này.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 245",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/245-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-246",
    "questionNumber": 246,
    "text": "Solution: Turn on Application Request Routing (ARR).  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Mối quan hệ ARR cung cấp định tuyến phiên cố định cho cùng một phiên bản Dịch vụ ứng dụng; nó không lưu trữ hoặc chia sẻ trạng thái phiên hoặc phản hồi HTTP đầy đủ. Do đó, khả năng lưu trữ phản hồi và trạng thái phân tán cần thiết không được đáp ứng.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 246",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/246-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-247",
    "questionNumber": 247,
    "text": "Solution: Deploy and configure Azure Cache for Redis, and update the web applications.  \n  \nDoes the solution satisfy the goal?",
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
    "explanation": "Azure Cache dành cho Redis hoạt động như một kho lưu trữ phiên phân phối được chia sẻ và cung cấp nhà cung cấp bộ đệm đầu ra ASP.NET cho các phản hồi HTTP được lưu trong bộ nhớ đệm. Hành vi của nhà cung cấp trạng thái phiên ASP.NET hỗ trợ khóa mục phiên độc quyền trong khi ghi, trong khi quyền truy cập phiên chỉ đọc không có được khóa đó, cho phép truy cập đồng thời được kiểm soát cần thiết.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 247",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/247-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-248",
    "questionNumber": 248,
    "text": "HOTSPOT –  \n  \nYou are building a website that accesses project data for teams in your organization. The website does not permit anonymous access. Authentication is performed by using an Azure Active Directory (Azure AD) app named **internal**.  \n  \nThe website has these authentication requirements:  \n  \n- Azure AD users must be able to sign in to the website.  \n- Website personalization must be based on Active Directory group membership.  \n  \nConfigure the application's manifest to meet the authentication requirements.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "`groupMembershipClaims` định cấu hình xác nhận quyền sở hữu nhóm được phát trong mã thông báo truy cập của người dùng hoặc OAuth 2.0; `\"All\"` bao gồm các nhóm bảo mật, nhóm phân phối và vai trò thư mục của người dùng. `oauth2AllowImplicitFlow` kích hoạt mã thông báo truy cập luồng ngầm cho ứng dụng dựa trên trình duyệt.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 248",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/248-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-249",
    "questionNumber": 249,
    "text": "You deploy an Azure App Service web app and create an app registration for it in Azure Active Directory (Azure AD) and Twitter.  \n  \nThe app must authenticate users, use SSL for all communications, and use Twitter as the identity provider.  \n  \nYou need to validate the Azure AD request in the app code.  \n  \nWhat should you validate?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "ID token header"
      },
      {
        "key": "B",
        "text": "ID token signature"
      },
      {
        "key": "C",
        "text": "HTTP response code"
      },
      {
        "key": "D",
        "text": "Tenant ID"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Mã thông báo ID là JWT đã ký, do đó, việc xác thực chữ ký của nó bằng khóa ký được xuất bản của nhà cung cấp danh tính sẽ xác minh rằng mã thông báo được phát hành bởi nhà cung cấp đáng tin cậy và không bị thay đổi. Xác thực mã thông báo cũng sẽ xác thực các yêu cầu có thể áp dụng, nhưng chữ ký là xác thực có liên quan trong số các lựa chọn này.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 249",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/249-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-250",
    "questionNumber": 250,
    "text": "You are developing an application that uses a premium block blob storage account. You are optimizing costs by automating Azure Blob Storage access tiers.  \n  \nYou apply the following policy rules to the storage account. Determine the effects of applying the rules to the data. (Line numbers are provided for reference only.)  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783793792250-vq0gso5m.png)  \n  \nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "Block blobs prefixed with container1/salesorders or container2/inventory which have not been modified in over 60 days are moved to cool storage. Blobs that have not been modified in 120 days are moved to the archive tier.",
        "correctAnswer": "No"
      },
      {
        "id": "2",
        "text": "Blobs are moved to cool storage if they have not been accessed for 30 days.",
        "correctAnswer": "No"
      },
      {
        "id": "3",
        "text": "Blobs will automatically be tiered from cool back to hot if accessed again after being tiered to cool.",
        "correctAnswer": "No"
      },
      {
        "id": "4",
        "text": "All block blobs older than 730 days will be deleted.",
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
      "2:No",
      "3:No",
      "4:No"
    ],
    "explanation": "Quản lý vòng đời Azure Blob Storage không thể phân cấp dữ liệu trong tài khoản lưu trữ blob khối cao cấp thành nóng, mát, lạnh hoặc lưu trữ, do đó không có kết quả phân cấp hoặc tự động phân cấp nào xảy ra. Chính sách vòng đời yêu cầu mỗi quy tắc phải là một phần tử của mảng `rules` gốc; định nghĩa xóa 730 ngày được lồng không chính xác và không phải là quy tắc xóa có thể áp dụng.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783793792250-vq0gso5m.png",
    "sourceTitle": "Examcademy AZ-204 Question 250",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/250-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-251",
    "questionNumber": 251,
    "text": "You have an Azure Cosmos DB for NoSQL account.  \n  \nYou plan to develop two apps named App1 and App2 that use change feed functionality to track container changes. App1 uses the pull model, and App2 uses the push model.  \n  \nYou need to select the method that tracks the most recently processed change for App1 and App2.  \n  \nEach component may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "app1",
        "text": "App1",
        "correctAnswer": "C"
      },
      {
        "id": "app2",
        "text": "App2",
        "correctAnswer": "A"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Lease container"
      },
      {
        "key": "B",
        "text": "Integrated cache"
      },
      {
        "key": "C",
        "text": "Continuation token"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Lease container"
      },
      {
        "key": "B",
        "text": "Integrated cache"
      },
      {
        "key": "C",
        "text": "Continuation token"
      }
    ],
    "correctAnswers": [
      "app1=C",
      "app2=A"
    ],
    "explanation": "Mô hình kéo yêu cầu khách hàng lưu mã thông báo tiếp tục làm dấu trang cho những thay đổi được xử lý cuối cùng. Mô hình đẩy sử dụng bộ xử lý nguồn cấp dữ liệu thay đổi, bộ xử lý này tự động lưu trữ trạng thái xử lý của nó trong vùng chứa cho thuê. Bộ đệm tích hợp không liên quan đến việc theo dõi điểm kiểm tra nguồn cấp dữ liệu thay đổi.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 251",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/251-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-252",
    "questionNumber": 252,
    "text": "You create an Azure subscription called Sub1. In Sub1, you create a custom Azure Event Grid topic named Topic1. You then create an Event Grid event subscription named EventSub1. EventSub1 uses Topic1 as its event source and a Web Hook as its endpoint.  \n  \nYou plan to enable dead-lettering for EventSub1.  \n  \nYou need to ensure that dead-lettering can be enabled for EventSub1.  \n  \nWhat should you do first?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Configure delivery properties of EventSub1."
      },
      {
        "key": "B",
        "text": "Create an Azure Blob Storage container in Sub1."
      },
      {
        "key": "C",
        "text": "Create an Azure Storage queue in Sub1."
      },
      {
        "key": "D",
        "text": "Configure the retry policy of EventSub1."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Thư chết Azure Event Grid lưu trữ các sự kiện không thể gửi được trong vùng chứa Azure Blob Storage. Do đó, tài khoản lưu trữ và vùng chứa blob của nó phải được tạo trước khi định cấu hình đích thư chết của đăng ký sự kiện. [Set dead-letter location and retry policy — Azure Event Grid](https://learn.microsoft.com/en-us/azure/event-grid/manage-event-delivery)",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 252",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/252-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-253",
    "questionNumber": 253,
    "text": "A company uses Azure Blob Storage for archiving.  \n  \nThe company requires that data in Blob Storage reside only in the archive tier.  \n  \nYou need to ensure that data copied to Blob Storage is moved to the archive tier.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Use a Put Block List operation with a request header of x-ms-immutability-policy-mode."
      },
      {
        "key": "B",
        "text": "Create a lifecycle policy with an action of tierToArchive and configure daysAfterModificationGreaterThan for 0."
      },
      {
        "key": "C",
        "text": "Use a Put Blob operation with a request header of x-ms-immutability-policy-until-date."
      },
      {
        "key": "D",
        "text": "Create a lifecycle policy with an action of tierToArchive and configure a filter for blobIndexMatch."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Quản lý vòng đời Azure Blob Storage có thể chuyển các khối khối đủ điều kiện sang tầng truy cập lưu trữ thông qua hành động `tierToArchive`. Việc đặt `daysAfterModificationGreaterThan` thành `0` làm cho các đốm màu đủ điều kiện ngay sau lần sửa đổi cuối cùng, bao gồm cả việc sao chép dữ liệu vào Blob Storage. Tiêu đề chính sách bất biến không đặt cấp truy cập và bộ lọc chỉ mục blob chỉ xác định blob nào mà quy tắc vòng đời nhắm mục tiêu.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 253",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/253-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-254",
    "questionNumber": 254,
    "text": "Your company's Azure subscription contains an Azure Log Analytics workspace.  \n  \nYour company has a hundred on-premises servers running either Windows Server 2012 R2 or Windows Server 2016, and they are connected to the Azure Log Analytics workspace. The Azure Log Analytics workspace is configured to collect security-related performance counters from these connected servers.  \n  \nYou must configure alerts based on the data collected by the Azure Log Analytics workspace.  \n  \nYou must ensure that alert rules support dimensions and that alert-creation time is minimized. In addition, one alert notification must be generated when an alert is created and when it is resolved.  \n  \nYou need to use the required signal type when creating the alert rules.  \n  \nWhich of the following options should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "The Activity log signal type."
      },
      {
        "key": "B",
        "text": "The Application Log signal type."
      },
      {
        "key": "C",
        "text": "The Metric signal type."
      },
      {
        "key": "D",
        "text": "The Audit Log signal type."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Quy tắc cảnh báo số liệu Azure Monitor hỗ trợ các thứ nguyên để theo dõi chuỗi thời gian riêng biệt và có thể được định cấu hình ở trạng thái. Cảnh báo số liệu có trạng thái sẽ gửi thông báo khi kích hoạt và một thông báo khác khi điều kiện được giải quyết. Cảnh báo Nhật ký hoạt động giám sát các sự kiện trong nhật ký hoạt động của Azure thay vì các số liệu về bộ đếm hiệu suất.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 254",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/254-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-255",
    "questionNumber": 255,
    "text": "You are developing several APIs hosted in Azure API Management (APIM).  \n  \nThe APIs must meet these requirements:  \n  \n- Require a subscription key to access every API.  \n- Include terms of use that subscribers must accept to use the APIs.  \n- Require administrators to review and either approve or reject subscription attempts.  \n- Limit the number of simultaneous subscriptions.  \n  \nYou need to implement the APIs.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Configure and apply header-based versioning."
      },
      {
        "key": "B",
        "text": "Create and publish a product."
      },
      {
        "key": "C",
        "text": "Configure and apply query string-based versioning."
      },
      {
        "key": "D",
        "text": "Add a new revision to all APIs. Make the revisions current and add a change log entry."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Sản phẩm Quản lý API Azure nhóm các API và cung cấp các biện pháp kiểm soát đăng ký cấp sản phẩm. Một sản phẩm được xuất bản, được bảo vệ có thể yêu cầu khóa đăng ký, đưa ra các điều khoản sử dụng để người đăng ký chấp nhận, yêu cầu quản trị viên phê duyệt các yêu cầu đăng ký và đặt giới hạn cho các đăng ký đồng thời.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 255",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/255-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-256",
    "questionNumber": 256,
    "text": "You have an Azure Blob Storage account named account1.  \n  \nYou plan to grant permissions for access to blobs in account1 by using a combination of a shared access signature token and a stored access policy. You must set the duration of the token validity by using the stored access policy.  \n  \nYou need to complete the configuration of the stored access policy and generate the shared access signature token.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Chính sách truy cập được lưu trữ xác định quyền, thời gian bắt đầu và thời gian hết hạn cho SAS dịch vụ. Chữ ký truy cập chia sẻ vùng chứa Blob là SAS dịch vụ và có thể sử dụng chính sách truy cập được lưu trữ; tài khoản SAS và ủy quyền người dùng SAS không thể.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 256",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/256-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-257",
    "questionNumber": 257,
    "text": "You are building a .NET web application that stores data in Azure Cosmos DB. The application must use the Core API and support millions of read and write operations.  \n  \nThe Azure Cosmos DB account was created with multiple write regions enabled. The application is deployed in the East US2 and Central US regions.  \n  \nYou need to modify the application to support multi-region writes.  \n  \nWhich two actions could accomplish this goal? Each correct answer is part of the solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Update the ConnectionPolicy class for the Cosmos client and populate the PreferredLocations property based on the geo-proximity of the application."
      },
      {
        "key": "B",
        "text": "Update Azure Cosmos DB to use the Strong consistency level. Add indexed properties to the container to indicate region."
      },
      {
        "key": "C",
        "text": "Update the ConnectionPolicy class for the Cosmos client and set the UseMultipleWriteLocations property to true."
      },
      {
        "key": "D",
        "text": "Create and deploy a custom conflict resolution policy."
      },
      {
        "key": "E",
        "text": "Update Azure Cosmos DB to use the Session consistency level. Send the SessionToken property value from the FeedResponse object of the write action to the end-user by using a cookie."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Đối với.NET Core API SDK v2, tính năng ghi nhiều vùng được bật trên máy khách bằng cách đặt `ConnectionPolicy.UseMultipleWriteLocations` thành `true`. Máy khách cũng phải thiết lập tùy chọn khu vực thông qua `PreferredLocations` dựa trên vị trí ứng dụng, do đó thao tác ghi sẽ được chuyển hướng đến khu vực có thể ghi gần đó. Tài khoản đã được cấu hình với nhiều vùng ghi. [Configure multi-region writes in applications that use Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/how-to-multi-master)",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 257",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/257-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-258",
    "questionNumber": 258,
    "text": "An organization intends to deploy Azure storage services.  \n  \nYou must configure shared access signatures (SAS) to grant access to Azure Storage. Which SAS types should be used?  \n  \nEach SAS type may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "slot1",
        "text": "Delegate access to resources in one or more of the storage services",
        "correctAnswer": "A"
      },
      {
        "id": "slot2",
        "text": "Delegate access to a resource in a single storage service",
        "correctAnswer": "B"
      },
      {
        "id": "slot3",
        "text": "Secure a resource by using Azure AD credentials",
        "correctAnswer": "C"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Account-level"
      },
      {
        "key": "B",
        "text": "Service-level"
      },
      {
        "key": "C",
        "text": "User delegation"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Account-level"
      },
      {
        "key": "B",
        "text": "Service-level"
      },
      {
        "key": "C",
        "text": "User delegation"
      }
    ],
    "correctAnswers": [
      "slot1=A",
      "slot2=B",
      "slot3=C"
    ],
    "explanation": "Một tài khoản SAS ủy quyền truy cập trên nhiều dịch vụ lưu trữ, trong khi SAS dịch vụ được giới hạn trong một tài nguyên trong một dịch vụ lưu trữ. SAS ủy quyền người dùng được ký bằng thông tin xác thực Microsoft Entra ID (Azure AD) và được sử dụng để ủy quyền quyền truy cập được bảo mật bằng các thông tin xác thực đó.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 258",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/258-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-259",
    "questionNumber": 259,
    "text": "You develop and deploy a web app to Azure App Service. The Azure App Service uses a Basic plan in one region.  \n  \nUsers report that the web app responds slowly. You must capture the full call stack to help identify code performance issues. Call-stack data must be correlated across app instances. You must minimize cost and the effect on web app users.  \n  \nYou need to capture the telemetry.  \n  \nWhich three actions should you take? Each correct answer represents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Restart all apps in the App Service plan."
      },
      {
        "key": "B",
        "text": "Enable Application Insights site extensions."
      },
      {
        "key": "C",
        "text": "Upgrade the Azure App Service plan to Premium."
      },
      {
        "key": "D",
        "text": "Enable Profiler."
      },
      {
        "key": "E",
        "text": "Enable the Always On setting for the app service."
      },
      {
        "key": "F",
        "text": "Enable Snapshot debugger."
      }
    ],
    "correctAnswers": [
      "B",
      "D",
      "E"
    ],
    "explanation": "Application Insights Profiler ghi lại các ngăn xếp cuộc gọi đối với các yêu cầu chậm và lưu trữ kết quả trong Application Insights, cho phép phân tích trên các phiên bản Dịch vụ ứng dụng. Tiện ích mở rộng trang web Application Insights cung cấp tích hợp đo từ xa Dịch vụ ứng dụng và Luôn bật phải được bật cho Profiler. Profiler được hỗ trợ ở cấp Dịch vụ ứng dụng cơ bản trở lên, do đó, việc nâng cấp Premium là không cần thiết và sẽ làm tăng thêm chi phí.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 259",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/259-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-260",
    "questionNumber": 260,
    "text": "You are developing an application that uses keys held in Azure Key Vault.  \n  \nYou need to enforce a particular cryptographic algorithm and key size for keys stored in the vault.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Secret versioning"
      },
      {
        "key": "B",
        "text": "Azure Policy"
      },
      {
        "key": "C",
        "text": "Key Vault Firewall"
      },
      {
        "key": "D",
        "text": "Access policies"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Chính sách Azure có thể thực thi các yêu cầu về khóa Key Vault thông qua các chính sách hạn chế các loại khóa mật mã được phép và yêu cầu kích thước khóa RSA tối thiểu được chỉ định, sử dụng các hiệu ứng như Từ chối hoặc Kiểm tra.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 260",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/260-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-261",
    "questionNumber": 261,
    "text": "HOTSPOT -  \n  \nYou create the following PowerShell script:  \n  \n![Question Image](https://cdn.examcademy.com/images/questions/1783792688926-w4vfp3ow.png)  \n  \nFor each of the following statements, select **Yes** if the statement is true. Otherwise, select **No**.",
    "questionType": "statement_matrix",
    "statements": [
      {
        "id": "1",
        "text": "A log alert is created that sends an email when the CPU percentage is above 60 percent for five minutes.",
        "correctAnswer": "No"
      },
      {
        "id": "2",
        "text": "A log alert is created that sends an email when the number of virtual machine heartbeats in the past hour is less than five.",
        "correctAnswer": "Yes"
      },
      {
        "id": "3",
        "text": "The log alert is scheduled to run every two hours.",
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
    "explanation": "Quy tắc đánh giá các bản ghi Nhịp tim từ giờ trước và kích hoạt khi số lượng bản ghi đó nhỏ hơn năm. Nhóm hành động cung cấp thông báo qua email. Tần suất 60 phút chạy quy tắc mỗi giờ và điều kiện phần trăm CPU no được định cấu hình.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "imageUrl": "https://cdn.examcademy.com/images/questions/1783792688926-w4vfp3ow.png",
    "sourceTitle": "Examcademy AZ-204 Question 261",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/261-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-262",
    "questionNumber": 262,
    "text": "You are developing several microservices to run on Azure Container Apps.  \n  \nThe microservices must provide HTTPS access by using a custom domain.  \n  \nYou need to configure the custom domain in Azure Container Apps.  \n  \nIn which sequence should you perform the actions?",
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
        "correctAnswer": "E"
      },
      {
        "id": "slot3",
        "text": "Slot 3:",
        "correctAnswer": "D"
      },
      {
        "id": "slot4",
        "text": "Slot 4:",
        "correctAnswer": "A"
      },
      {
        "id": "slot5",
        "text": "Slot 5:",
        "correctAnswer": "C"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Validate the custom domain name."
      },
      {
        "key": "B",
        "text": "Enable ingress."
      },
      {
        "key": "C",
        "text": "Bind the certificate."
      },
      {
        "key": "D",
        "text": "Add DNS records to the domain provider."
      },
      {
        "key": "E",
        "text": "Add the custom domain name."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Validate the custom domain name."
      },
      {
        "key": "B",
        "text": "Enable ingress."
      },
      {
        "key": "C",
        "text": "Bind the certificate."
      },
      {
        "key": "D",
        "text": "Add DNS records to the domain provider."
      },
      {
        "key": "E",
        "text": "Add the custom domain name."
      }
    ],
    "correctAnswers": [
      "slot1=B",
      "slot2=E",
      "slot3=D",
      "slot4=A",
      "slot5=C"
    ],
    "explanation": "Azure Container Apps yêu cầu nhập HTTP trước khi có thể thêm miền tùy chỉnh. Việc thêm tên miền sẽ hiển thị các giá trị xác thực DNS được yêu cầu; hồ sơ nhà cung cấp DNS sau đó chứng minh quyền sở hữu và chỉ đạo tên máy chủ. Sau khi xác thực thành công, chứng chỉ TLS/SSL có thể được liên kết với miền tùy chỉnh cho HTTPS.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 262",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/262-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-263",
    "questionNumber": 263,
    "text": "You are developing a solution that uses several Azure Service Bus queues. You create an Azure Event Grid subscription for the Azure Service Bus namespace and use Azure Functions as subscribers to process messages.  \n  \nYou need to emit events from the queues to Azure Event Grid while using least privilege and minimizing costs.  \n  \nWhich Azure Service Bus values should you use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Tích hợp Service Bus-to-Event Grid (phát ra các sự kiện như ActiveMessagesAvailableWithNoListeners) chỉ khả dụng trên tầng không gian tên Premium; Cơ bản và Tiêu chuẩn không thể phát sự kiện tới Lưới sự kiện, vì vậy cần phải có Premium. Tài liệu của Microsoft nêu rõ rằng để bật tính năng này, bạn cần có quyền truy cập của Người đóng góp vào không gian tên Service Bus và có vai trò tích hợp chi tiết hơn no có thể tạo đăng ký Lưới sự kiện trên không gian tên, vì vậy Người đóng góp là tùy chọn có ít đặc quyền nhất thực sự có thể thực hiện tác vụ. Bộ thu dữ liệu sai vì nó chỉ cấp quyền nhận tin nhắn từ hàng đợi/đăng ký chứ không cấp quyền cấu hình tích hợp Lưới sự kiện của không gian tên.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 263",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/263-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-264",
    "questionNumber": 264,
    "text": "You administer an Azure Storage account named `storage1`.  \n  \nYou plan to upload 1 million blobs to `storage1`.  \n  \nYou must assign key-value pairs to the blobs so that both the keys and values are automatically indexed and searchable through the built-in services of `storage1`.  \n  \nYou need to run a command to assign the key-value pairs.  \n  \nWhich command should you run?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "az storage blob tag set"
      },
      {
        "key": "B",
        "text": "az storage blob service-properties update"
      },
      {
        "key": "C",
        "text": "az storage blob directory metadata update"
      },
      {
        "key": "D",
        "text": "New-AzStorageBlobQueryConfig"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Thẻ chỉ mục Azure Blob lưu trữ các cặp khóa-giá trị trên các đốm màu riêng lẻ và được lập chỉ mục tự động để tìm kiếm và lọc. Lệnh Azure CLI đặt các thẻ này là `az storage blob tag set`.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 264",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/264-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-265",
    "questionNumber": 265,
    "text": "You are developing an application that retrieves user profile information by using the Microsoft Graph SDK.  \n  \nThe application must retrieve user profile information by making a Microsoft Graph API call. You need to call the Microsoft Graph API from the application.  \n  \nIn which sequence should you perform the actions?",
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
        "correctAnswer": "A"
      },
      {
        "id": "step4",
        "text": "Slot 4:",
        "correctAnswer": "B"
      },
      {
        "id": "step5",
        "text": "Slot 5:",
        "correctAnswer": "C"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Create an authentication provider."
      },
      {
        "key": "B",
        "text": "Create a new instance of the GraphServiceClient."
      },
      {
        "key": "C",
        "text": "Invoke the request to the Microsoft Graph API."
      },
      {
        "key": "D",
        "text": "Register the application with the Microsoft identity platform"
      },
      {
        "key": "E",
        "text": "Build a client by using the client app ID."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Create an authentication provider."
      },
      {
        "key": "B",
        "text": "Create a new instance of the GraphServiceClient."
      },
      {
        "key": "C",
        "text": "Invoke the request to the Microsoft Graph API."
      },
      {
        "key": "D",
        "text": "Register the application with the Microsoft identity platform"
      },
      {
        "key": "E",
        "text": "Build a client by using the client app ID."
      }
    ],
    "correctAnswers": [
      "step1=D",
      "step2=E",
      "step3=A",
      "step4=B",
      "step5=C"
    ],
    "explanation": "Đăng ký nền tảng nhận dạng Microsoft tạo ID khách hàng cần thiết để đặt cấu hình ứng dụng khách xác thực. Nhà cung cấp xác thực thu được mã thông báo và được sử dụng để khởi tạo GraphServiceClient; Sau đó, ứng dụng khách dịch vụ đó sẽ gửi yêu cầu API Microsoft Graph.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 265",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/265-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-266",
    "questionNumber": 266,
    "text": "You are developing an Azure Function app. You need to implement the app. Which Azure Function app features should you use? Each feature may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "rust",
        "text": "Enable developers to write the functions by using the Rust language.",
        "correctAnswer": "A"
      },
      {
        "id": "blob",
        "text": "Declaratively connect to an Azure Blob Storage account.",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Custom handler"
      },
      {
        "key": "B",
        "text": "Extension bundle"
      },
      {
        "key": "C",
        "text": "Trigger"
      },
      {
        "key": "D",
        "text": "Runtime"
      },
      {
        "key": "E",
        "text": "Policy"
      },
      {
        "key": "F",
        "text": "Hosting plan"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Custom handler"
      },
      {
        "key": "B",
        "text": "Extension bundle"
      },
      {
        "key": "C",
        "text": "Trigger"
      },
      {
        "key": "D",
        "text": "Runtime"
      },
      {
        "key": "E",
        "text": "Policy"
      },
      {
        "key": "F",
        "text": "Hosting plan"
      }
    ],
    "correctAnswers": [
      "rust=A",
      "blob=B"
    ],
    "explanation": "Trình xử lý tùy chỉnh hỗ trợ các ứng dụng Azure Functions được viết bằng các ngôn ngữ không được cung cấp theo mặc định, bao gồm cả Rust. Các gói tiện ích mở rộng cung cấp các tiện ích mở rộng ràng buộc và kích hoạt tương thích được sử dụng bởi các ứng dụng không có chức năng.NET; Các liên kết Blob Storage khai báo kết nối một hàm với Blob Storage.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 266",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/266-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-267",
    "questionNumber": 267,
    "text": "A development team is building a new REST API that will store data in Azure Blob storage. You plan to deploy the API to Azure App Service.  \n  \nDevelopers need access to the Azure Blob storage account to develop the API for the next two months. After that two-month period, the developers must no longer be able to access the Azure Blob storage account.  \n  \nYou need to provide developers access to the Azure Blob storage account.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Generate a shared access signature (SAS) for the Azure Blob storage account and provide the SAS to all developers."
      },
      {
        "key": "B",
        "text": "Create and apply a new lifecycle management policy to include a last accessed date value. Apply the policy to the Azure Blob storage account."
      },
      {
        "key": "C",
        "text": "Provide all developers with the access key for the Azure Blob storage account. Update the API to include the Coordinated Universal Time (UTC) timestamp for the request header."
      },
      {
        "key": "D",
        "text": "Grant all developers access to the Azure Blob storage account by assigning role-based access control (RBAC) roles."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Chữ ký truy cập chung (SAS) ủy quyền quyền truy cập hạn chế vào Bộ lưu trữ Azure trong một khoảng thời gian nhất định và với các quyền được chỉ định. Việc phát hành SAS hết hạn sau hai tháng sẽ cung cấp quyền truy cập tạm thời cần thiết mà không cấp cho nhà phát triển thông tin xác thực tài khoản lưu trữ vĩnh viễn. Chính sách vòng đời quản lý dữ liệu được lưu trữ và khóa tài khoản lưu trữ cung cấp quyền truy cập rộng rãi mà không cần sự ủy quyền có giới hạn thời gian này.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 267",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/267-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-268",
    "questionNumber": 268,
    "text": "Solution:  \n  \n- Create a new Azure AD application. In the application's manifest, define application roles that correspond to the required permission levels for the application.  \n- Assign the appropriate Azure AD group to each role. In the website, use the `roles` claim value from the user's JWT to determine permissions.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Vai trò ứng dụng Microsoft Entra ID hỗ trợ ủy quyền dựa trên vai trò: vai trò có thể được xác định cho một ứng dụng, được gán cho các nhóm và được bao gồm trong mã thông báo của người dùng đã đăng nhập thông qua xác nhận quyền sở hữu `roles`. Ứng dụng có thể ủy quyền cho người dùng dựa trên yêu cầu đó, ánh xạ tư cách thành viên nhóm Azure AD tới các cấp quyền được yêu cầu.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 268",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/268-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-269",
    "questionNumber": 269,
    "text": "Solution: Configure the Azure Web App that hosts the website to permit only authenticated requests and require Azure AD sign-in.  \n  \nDoes this solution achieve the goal?",
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
    "explanation": "Việc yêu cầu xác thực Microsoft Entra ID sẽ chặn các yêu cầu chưa được xác thực nhưng không ánh xạ tư cách thành viên nhóm Azure AD tới cấp độ quyền quản trị viên, quyền thông thường và quyền người đọc. Ủy quyền theo vai trò hoặc nhóm cụ thể phải đánh giá các khiếu nại của người dùng được xác thực.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 269",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/269-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-270",
    "questionNumber": 270,
    "text": "Solution:  \n  \n- Create a new Azure AD application. In the application manifest, set the `groupMembershipClaims` option value to `All`.  \n- In the website, use the `groups` claim value from the user's JWT to determine permissions.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Cài đặt tệp kê khai `groupMembershipClaims` định cấu hình xác nhận quyền sở hữu `groups` được cấp trong mã thông báo người dùng. Giá trị `All` bao gồm tư cách thành viên nhóm của người dùng đã đăng nhập, cho phép trang web chỉ định cấp độ quyền của nó từ số nhận dạng nhóm trong JWT.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 270",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/270-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-271",
    "questionNumber": 271,
    "text": "Solution:  \n  \n- Configure and use Integrated Windows Authentication in the website.  \n- In the website, query the Microsoft Graph API to load the groups that the user belongs to.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Xác thực Azure App Service cho người dùng đăng nhập bằng thông tin xác thực Azure AD (Microsoft Entra ID) phải được đặt cấu hình với Microsoft Entra ID làm nhà cung cấp danh tính. Xác thực Windows tích hợp được hỗ trợ cho các máy khách di động và máy tính để bàn Windows được tham gia miền hoặc được tham gia vào miền hiện hành, không phải như cấu hình xác thực web Dịch vụ ứng dụng bắt buộc. Truy vấn Microsoft Graph về tư cách thành viên nhóm có thể hỗ trợ ủy quyền, nhưng nó không làm cho phương pháp xác thực đáp ứng được yêu cầu.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 271",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/271-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-272",
    "questionNumber": 272,
    "text": "You have a workspace-based Azure Application Insights resource named Insights1 and an on-premises website. Internet access to the website is blocked. You plan to implement availability testing for the website by using Insights1. The implementation must maximize security while minimizing maintenance effort. You need to determine which Application Insights availability test to use to provide the required functionality.  \n  \nWhich availability test should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "standard test"
      },
      {
        "key": "B",
        "text": "multi-step web test"
      },
      {
        "key": "C",
        "text": "custom TrackAvailability test"
      },
      {
        "key": "D",
        "text": "URL ping test"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Các thử nghiệm về tính khả dụng của Application Insights công khai yêu cầu điểm cuối HTTP hoặc HTTPS có thể truy cập được từ Internet công cộng. Đối với điểm cuối nội bộ hoặc điểm cuối xâm nhập no, việc kiểm tra tính khả dụng phải chạy từ bên trong mạng và gửi kết quả đến Application Insights thông qua API `TrackAvailability()`. Điều này giữ lại quyền truy cập internet bị chặn của trang web.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 272",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/272-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-273",
    "questionNumber": 273,
    "text": "HOTSPOT –  \n  \nA company is developing a Java web app. Its code is hosted in the GitHub repository at https://github.com/Contoso/webapp.  \n  \nThe web app must be evaluated before being moved to production. You must deploy the initial code release to a deployment slot named staging.  \n  \nYou need to create the web app and deploy the code. How should you complete the commands?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "`az group create` tạo nhóm tài nguyên, `az appservice plan create` tạo gói Dịch vụ ứng dụng với SKU S3 và `az webapp create` tạo ứng dụng web trong gói đó. `az webapp deployment slot create` tạo khe dàn. `az webapp deployment source config` định cấu hình triển khai kho Git cho vị trí đó.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 273",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/273-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-274",
    "questionNumber": 274,
    "text": "You are troubleshooting an application running on an Azure Kubernetes cluster named cluster1. The cluster uses Azure Monitor for containers to monitor it.  \n  \nThe application has sticky sessions enabled on the ingress controller. Some customers have reported many application errors during the past 24 hours.  \n  \nYou need to identify the virtual machines (VMs) where the errors occur. How should you complete the Azure Monitor query?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "`ago(1d)` tạo ra ranh giới thời gian 24 giờ bắt buộc. `distinct ContainerID` trả về ID vùng chứa từ Cụm1 và `where ContainerID in (ContainerIDs)` hạn chế các bản ghi nhật ký vùng chứa đối với các vùng chứa đó. Sau đó, các bản ghi nhật ký lỗi tiêu chuẩn (`stderr`) được tính bằng `summarize count() by Computer`, nhóm các lỗi theo máy ảo/máy chủ.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 274",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/274-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-275",
    "questionNumber": 275,
    "text": "You plan to create a Docker image that runs an ASP.NET Core application named ContosoApp. You have a setup script named setupScript.ps1 and application files that include ContosoApp.dll.  \n  \nYou need to create a Dockerfile that meets these requirements:  \n  \n- Call setupScripts.ps1 when the container is built.  \n- Run ContosoApp.dll when the container starts.  \n  \nThe Dockerfile must be created in the same folder as ContosoApp.dll and setupScript.ps1.  \n  \nWhich five commands should you use to develop the solution, arranged in the correct order?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "line1",
        "text": "Slot 1:",
        "correctAnswer": "A"
      },
      {
        "id": "line2",
        "text": "Slot 2:",
        "correctAnswer": "B"
      },
      {
        "id": "line3",
        "text": "Slot 3:",
        "correctAnswer": "D"
      },
      {
        "id": "line4",
        "text": "Slot 4:",
        "correctAnswer": "E"
      },
      {
        "id": "line5",
        "text": "Slot 5:",
        "correctAnswer": "C"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "FROM microsoft/aspnetcore:latest"
      },
      {
        "key": "B",
        "text": "WORKDIR /apps/ContosoApp"
      },
      {
        "key": "C",
        "text": "CMD [\"dotnet\", \"ContosoApp.dll\"]"
      },
      {
        "key": "D",
        "text": "COPY ./ ."
      },
      {
        "key": "E",
        "text": "RUN powershell ./setupScript.ps1"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "FROM microsoft/aspnetcore:latest"
      },
      {
        "key": "B",
        "text": "WORKDIR /apps/ContosoApp"
      },
      {
        "key": "C",
        "text": "CMD [\"dotnet\", \"ContosoApp.dll\"]"
      },
      {
        "key": "D",
        "text": "COPY ./ ."
      },
      {
        "key": "E",
        "text": "RUN powershell ./setupScript.ps1"
      }
    ],
    "correctAnswers": [
      "line1=A",
      "line2=B",
      "line3=D",
      "line4=E",
      "line5=C"
    ],
    "explanation": "`RUN` thực thi trong quá trình xây dựng hình ảnh, do đó tập lệnh thiết lập phải tuân theo việc sao chép tập lệnh vào hình ảnh. `CMD` cung cấp lệnh mặc định khi vùng chứa khởi động, do đó, nó gọi `dotnet` bằng `ContosoApp.dll`. `WORKDIR` thiết lập thư mục ứng dụng đích trước `COPY`.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 275",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/275-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-276",
    "questionNumber": 276,
    "text": "You are developing a solution that will use a multi-partition Azure Cosmos DB database. You plan to use the latest Azure Cosmos DB SDK for development.  \n  \nThe solution must meet these requirements:  \n  \n- Send insert and update operations to an Azure Blob storage account.  \n- Process changes from all partitions immediately.  \n- Allow change processing to be parallelized.  \n  \nYou need to process the Azure Cosmos DB operations.  \n  \nWhat are two possible ways to accomplish this goal? Each correct answer provides a complete solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create an Azure App Service API and implement the change feed estimator of the SDK. Scale the API by using multiple Azure App Service instances."
      },
      {
        "key": "B",
        "text": "Create a background job in an Azure Kubernetes Service and implement the change feed feature of the SDK."
      },
      {
        "key": "C",
        "text": "Create an Azure Function to use a trigger for Azure Cosmos DB. Configure the trigger to connect to the container."
      },
      {
        "key": "D",
        "text": "Create an Azure Function that uses a FeedIterator object that processes the change feed by using the pull model on the container. Use a FeedRange object to parallelize the processing of the change feed across multiple functions."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Trình kích hoạt Azure Cosmos DB cho Azure Functions sử dụng bộ xử lý nguồn cấp dữ liệu thay đổi bên trong, phát hiện các phần chèn và cập nhật trong vùng chứa được giám sát, đồng thời tự động xử lý song song trên các phân vùng vùng chứa. Mô hình kéo nguồn cấp dữ liệu thay đổi cũng có thể xử lý các thay đổi song song bằng cách lấy các giá trị FeedRange và sử dụng FeedIterator cho từng phạm vi trên nhiều phiên bản hàm; mã chức năng có thể ghi từng thay đổi được xử lý vào Azure Blob Storage. Công cụ ước tính nguồn cấp dữ liệu thay đổi báo cáo công việc chưa hoàn thành nhưng không sử dụng hoặc xử lý nguồn cấp dữ liệu thay đổi.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 276",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/276-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-277",
    "questionNumber": 277,
    "text": "You are developing a web service that will run on Azure virtual machines using Azure Storage. You configure every virtual machine to use managed identities.  \n  \nThe requirements are:  \n  \n- Secret-based authentication mechanisms cannot be used to access an Azure Storage account.  \n- Only Azure Instance Metadata Service endpoints may be used.  \n  \nYou need to write code that retrieves an access token for Azure Storage.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "endpoint",
        "text": "Slot 1:",
        "correctAnswer": "D"
      },
      {
        "id": "parser",
        "text": "Slot 2:",
        "correctAnswer": "H"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "http://localhost:50342/oauth2/token"
      },
      {
        "key": "B",
        "text": "http://169.254.169.254:50432/oauth2/token"
      },
      {
        "key": "C",
        "text": "http://localhost/metadata/identity/oauth2/token"
      },
      {
        "key": "D",
        "text": "http://169.254.169.254/metadata/identity/oauth2/token"
      },
      {
        "key": "E",
        "text": "import xml.etree.ElementTree as e\ne.parse(response.read())"
      },
      {
        "key": "F",
        "text": "import csv\ncsv.DictReader(response.read())"
      },
      {
        "key": "G",
        "text": "import yaml\nreturn yaml.load(response.read())"
      },
      {
        "key": "H",
        "text": "import json\nreturn json.loads(response.read())"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "http://localhost:50342/oauth2/token"
      },
      {
        "key": "B",
        "text": "http://169.254.169.254:50432/oauth2/token"
      },
      {
        "key": "C",
        "text": "http://localhost/metadata/identity/oauth2/token"
      },
      {
        "key": "D",
        "text": "http://169.254.169.254/metadata/identity/oauth2/token"
      },
      {
        "key": "E",
        "text": "import xml.etree.ElementTree as e\ne.parse(response.read())"
      },
      {
        "key": "F",
        "text": "import csv\ncsv.DictReader(response.read())"
      },
      {
        "key": "G",
        "text": "import yaml\nreturn yaml.load(response.read())"
      },
      {
        "key": "H",
        "text": "import json\nreturn json.loads(response.read())"
      }
    ],
    "correctAnswers": [
      "endpoint=D",
      "parser=H"
    ],
    "explanation": "Trên máy ảo Azure, managed identity nhận được mã thông báo thông qua điểm cuối nhận dạng được quản lý IMDS tại 169.254.169.254/metadata/identity/oauth2/token. Phản hồi mã thông báo IMDS sử dụng JSON, do đó `json.loads(response.read())` phân tích cú pháp JSON để truy xuất mã thông báo truy cập.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 277",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/277-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-279",
    "questionNumber": 279,
    "text": "An application includes an Azure Web App and several Azure Function apps. Application secrets, including connection strings and certificates, are kept in Azure Key Vault.  \n  \nSecrets must not be stored in the application or its runtime environment. Changes to Azure Active Directory (Azure AD) must be kept to a minimum.  \n  \nYou need to design how application secrets are loaded.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create a single user-assigned Managed Identity with permission to access Key Vault and configure each App Service to use that Managed Identity."
      },
      {
        "key": "B",
        "text": "Create a single Azure AD Service Principal with permission to access Key Vault and use a client secret from within the App Services to access Key Vault."
      },
      {
        "key": "C",
        "text": "Create a system assigned Managed Identity in each App Service with permission to access Key Vault."
      },
      {
        "key": "D",
        "text": "Create an Azure AD Service Principal with Permissions to access Key Vault for each App Service and use a certificate from within the App Services to access Key Vault."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "user-assigned managed identity có thể được gán cho nhiều tài nguyên Azure App Service và được phép đọc các bí mật Azure Key Vault cần thiết. Danh tính được quản lý nhận được mã thông báo mà không cần bí mật hoặc chứng chỉ ứng dụng khách được quản lý và việc chia sẻ một danh tính do người dùng chỉ định sẽ tránh việc tạo và ủy quyền danh tính Microsoft Entra riêng cho từng ứng dụng.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 279",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/279-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-280",
    "questionNumber": 280,
    "text": "You build Azure solutions.  \n  \nYou must connect to a globally distributed No-SQL database by using the .NET API.  \n  \nYou need to create an object that configures and executes requests in the database.  \n  \nWhich code segment should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "new Container(EndpointUri, PrimaryKey);"
      },
      {
        "key": "B",
        "text": "new Database(EndpointUri, PrimaryKey);"
      },
      {
        "key": "C",
        "text": "new CosmosClient(EndpointUri, PrimaryKey);"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "`CosmosClient` là ứng dụng khách cấp tài khoản của Azure Cosmos DB.NET SDK để định cấu hình và thực hiện các yêu cầu. Hàm tạo của nó chấp nhận URI điểm cuối tài khoản và khóa tài khoản; `Database` và `Container` là các đối tượng tài nguyên được truy cập thông qua ứng dụng khách đó.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 280",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/280-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-281",
    "questionNumber": 281,
    "text": "Fourth Coffee has an ASP.NET Core web app that runs in Docker and is mapped to the `www.fourthcoffee.com` domain. Fourth Coffee is migrating this application to Azure.  \n  \nYou need to provision an App Service Web App to host this Docker image and map the custom domain to the App Service web app.  \n  \nA resource group named `FourthCoffeePublicWebResourceGroup` has been created in the `WestUS` region that contains an App Service Plan named `AppServiceLinuxDockerPlan`.  \n  \nWhich order should the CLI commands be used to develop the solution?",
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
        "text": "az webapp config container set\n--docker-custom-image-name\n$dockerHubContainerPath\n--name $appName\n--resource-group\nfourthCoffeePublicWebResourceGroup"
      },
      {
        "key": "B",
        "text": "az webapp config hostname add\n--webapp-name $appName\n--resource-group\nfourthCoffeePublicWebResourceGroup \\\n--hostname $fqdn"
      },
      {
        "key": "C",
        "text": "az webapp create\n--name $appName\n--plan AppServiceLinuxDockerPlan\n--resource-group\nfourthCoffeePublicWebResourceGroup"
      },
      {
        "key": "D",
        "text": "#/bin/bash\nappName=\"FourthCoffeePublicWeb$random\"\nlocation=\"WestUS\"\ndockerHubContainerPath=\"FourthCoffee/publicweb:v1\"\nfqdn=\"http://www.fourthcoffee.com\">www.fourthcoffee.com"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "az webapp config container set\n--docker-custom-image-name\n$dockerHubContainerPath\n--name $appName\n--resource-group\nfourthCoffeePublicWebResourceGroup"
      },
      {
        "key": "B",
        "text": "az webapp config hostname add\n--webapp-name $appName\n--resource-group\nfourthCoffeePublicWebResourceGroup \\\n--hostname $fqdn"
      },
      {
        "key": "C",
        "text": "az webapp create\n--name $appName\n--plan AppServiceLinuxDockerPlan\n--resource-group\nfourthCoffeePublicWebResourceGroup"
      },
      {
        "key": "D",
        "text": "#/bin/bash\nappName=\"FourthCoffeePublicWeb$random\"\nlocation=\"WestUS\"\ndockerHubContainerPath=\"FourthCoffee/publicweb:v1\"\nfqdn=\"http://www.fourthcoffee.com\">www.fourthcoffee.com"
      }
    ],
    "correctAnswers": [
      "step1=C",
      "step2=A",
      "step3=B"
    ],
    "explanation": "Ứng dụng web phải tồn tại trước khi có thể định cấu hình cài đặt vùng chứa của ứng dụng đó hoặc có thể ràng buộc tên máy chủ. Lệnh tạo sẽ triển khai ứng dụng web lên gói Dịch vụ ứng dụng Linux hiện có; lệnh container đặt hình ảnh Docker của nó; và lệnh tên máy chủ liên kết `www.fourthcoffee.com` với ứng dụng đó.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 281",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/281-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-282",
    "questionNumber": 282,
    "text": "You have an Azure Service Bus namespace that contains a partitioned queue named `queue1`.  \n  \nYou plan to send a high volume of messages through `queue1` during the next few weeks. Message order will be random. You must minimize the chance that transient failures in individual partitions interrupt message transmission.  \n  \nYou need to use the optimal partition-key configuration for the messages.  \n  \nWhich configuration should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Set the partition key of messages to the message ID value."
      },
      {
        "key": "B",
        "text": "Enable sessions. Set the partition key of messages to the session ID value."
      },
      {
        "key": "C",
        "text": "Enable sessions. Ensure that the partition key is different from the session ID value."
      },
      {
        "key": "D",
        "text": "Leave the partition key value as null."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Việc không đặt khóa phân vùng cho phép Azure Service Bus phân phối thông báo giữa các phân vùng và thử lại phân vùng khác khi phân vùng được chọn ban đầu tạm thời không khả dụng. Khóa phân vùng được đặt, bao gồm ID phiên, ghim tin nhắn vào một phân vùng và có thể gây ra lỗi nếu phân vùng đó không khả dụng. Các phiên là không cần thiết vì không cần phải giao hàng theo yêu cầu.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 282",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/282-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-283",
    "questionNumber": 283,
    "text": "You are developing a hospital solution to support these use cases:  \n  \n- Retrieve the latest patient-status details, even if multiple users in different locations updated the patient record.  \n- Retrieve patient health-monitoring data that is the current version or the prior version.  \n- After a patient is discharged and all charges are assessed, ensure the patient billing record contains the final charges.  \n  \nYou provision a Cosmos DB NoSQL database and configure the database account’s default consistency level as Strong. You set Indexing Mode to Consistent.  \n  \nYou need to minimize latency and effects on solution availability. Override the default consistency level at the query level to meet the required consistency guarantees for the scenarios.  \n  \nWhich consistency levels should you implement? Each consistency level may be used once, more than once, or not at all.",
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
        "correctAnswer": "B"
      },
      {
        "id": "billing_data",
        "text": "After patient is discharged and all charges are assessed, retrieve the correct billing data with the final charges.",
        "correctAnswer": "A"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Strong"
      },
      {
        "key": "B",
        "text": "Bounded Staleness"
      },
      {
        "key": "C",
        "text": "Consistent Prefix"
      },
      {
        "key": "D",
        "text": "Eventual"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Strong"
      },
      {
        "key": "B",
        "text": "Bounded Staleness"
      },
      {
        "key": "C",
        "text": "Consistent Prefix"
      },
      {
        "key": "D",
        "text": "Eventual"
      }
    ],
    "correctAnswers": [
      "patient_status=A",
      "health_monitoring=B",
      "billing_data=A"
    ],
    "explanation": "Tính nhất quán cao trả về phiên bản mục đã cam kết gần đây nhất, cần thiết cho trạng thái bệnh nhân mới nhất và chi phí thanh toán cuối cùng. Độ cứng bị giới hạn đặt độ trễ tối đa trong các phiên bản vật phẩm; giới hạn một phiên bản đáp ứng yêu cầu theo dõi sức khỏe. Tiền tố nhất quán và Cuối cùng không cung cấp sự đảm bảo về độ mới cần thiết.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 283",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/283-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-284",
    "questionNumber": 284,
    "text": "You have an Azure subscription containing an Application Insights resource named AI1 and an Azure App Service web app named App1.  \n  \nYou create a Standard availability test in AI1 and configure its URL to target App1.  \n  \nYou need to make sure that every failed test sends email notifications to the subscription owners.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create an action group."
      },
      {
        "key": "B",
        "text": "Create an alert rule."
      },
      {
        "key": "C",
        "text": "Enable the test."
      },
      {
        "key": "D",
        "text": "Enable the alert."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Kiểm tra tính khả dụng của Application Insights có quy tắc cảnh báo tính khả dụng liên quan nhưng việc gửi email được định cấu hình thông qua nhóm hành động Azure Monitor. Một nhóm hành động có thể xác định thông báo qua email cho vai trò **Chủ sở hữu** Trình quản lý tài nguyên Azure ở phạm vi đăng ký, do đó, việc đính kèm nhóm hành động đó vào cảnh báo về tính khả dụng sẽ gửi thông báo khi thử nghiệm thất bại.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 284",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/284-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-285",
    "questionNumber": 285,
    "text": "You are building an app that stores globally distributed data across several Azure Blob Storage containers. Each container contains multiple blobs in which every app instance stores data. You enable blob versioning and soft delete.  \n  \nApp testing and faulty code have often corrupted data. App development must support restoring data to a previous day for testing.  \n  \nYou need to configure the storage account to support point-in-time restore.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Enable the change feed on the storage account to begin capturing and recording changes."
      },
      {
        "key": "B",
        "text": "Configure object replication and specify replication rules."
      },
      {
        "key": "C",
        "text": "Create a snapshot of the blob in the hot tier."
      },
      {
        "key": "D",
        "text": "Configure an immutability policy that is scoped to a blob version."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Khôi phục theo thời điểm Azure Blob Storage yêu cầu xóa mềm blob, lập phiên bản blob và nguồn cấp dữ liệu thay đổi. Khi tính năng xóa mềm và lập phiên bản đã được bật, tài khoản lưu trữ phải kích hoạt nguồn cấp dữ liệu thay đổi để nắm bắt các thay đổi blob cần thiết nhằm khôi phục các blob khối về thời điểm trước đó.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 285",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/285-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-286",
    "questionNumber": 286,
    "text": "You administer an Azure Storage account called `storage1`.  \n  \nYou intend to load 1 million blobs into `storage1`.  \n  \nYou must apply key-value pairs to the blobs so that both the keys and values are automatically indexed and searchable through the built-in services of `storage1`.  \n  \nYou need to run a command that assigns the key-value pairs.  \n  \nWhich command should you run?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Update -AzStorageBobServiceProperty"
      },
      {
        "key": "B",
        "text": "Set-AzStorageBlobTag"
      },
      {
        "key": "C",
        "text": "az storage blob service-properties update"
      },
      {
        "key": "D",
        "text": "Set-AzStorageBlobContent"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Thẻ chỉ mục Azure Blob là thuộc tính khóa-giá trị mà Azure Storage tự động lập chỉ mục, cho phép định vị các đốm màu bằng biểu thức thẻ. `Set-AzStorageBlobTag` gán các thẻ chỉ mục blob đó.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 286",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/286-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-287",
    "questionNumber": 287,
    "text": "You develop an application that sells AI-generated images from user input. A recent marketing campaign displays distinct ads every second day.  \n  \nSales data is stored in Azure Cosmos DB, and each sale date is stored in the `whenFinished` property.  \n  \nMarketing needs a view showing the number of sales for every unique ad. Implement the query for the view.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "`count(c.whenFinished)` trả về số lượng bán hàng kèm theo ngày hoàn thành được điền sẵn. `DateTimeBin(c.whenFinished, 'day', 2)` nhóm các dấu thời gian thành các khoảng thời gian hai ngày liên tiếp, phù hợp với các quảng cáo thay đổi mỗi ngày. Truy vấn tổng hợp được nhóm phải chọn và nhóm theo cùng một biểu thức bin.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 287",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/287-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-288",
    "questionNumber": 288,
    "text": "Solution: Create an Azure Event Grid. Configure event filtering to evaluate the device identifier.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Azure Event Grid lọc và định tuyến các sự kiện đến các trình xử lý đã đăng ký; bộ lọc nâng cao có thể đánh giá các trường trong dữ liệu sự kiện. Bản thân nó không cung cấp khả năng nhập dữ liệu từ xa của thiết bị hoặc lưu trữ tải trọng POS trong Azure Blob Storage, do đó việc định cấu hình bộ lọc nhận dạng thiết bị không đáp ứng yêu cầu lưu trữ và nhận dữ liệu.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 288",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/288-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-289",
    "questionNumber": 289,
    "text": "Solution: Provision an Azure Service Bus. Configure a topic to receive the device data by using a correlation filter.  \n  \nDoes the solution meet the goal?",
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
    "explanation": "Bộ lọc tương quan Azure Service Bus được định cấu hình làm quy tắc về đăng ký chủ đề, trong đó chúng chọn tin nhắn dựa trên thuộc tính tin nhắn. Chúng không tự cấu hình chủ đề để nhận hoặc liên kết dữ liệu thiết bị đến; do đó, cấu hình này không đáp ứng yêu cầu nhập. [Azure Service Bus topic filters and actions](https://learn.microsoft.com/en-us/azure/service-bus-messaging/topic-filters)",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 289",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/289-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-290",
    "questionNumber": 290,
    "text": "Solution: Create an Azure Notification Hub and register every device with the hub.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Trung tâm thông báo Azure cung cấp thông báo đẩy từ chương trình phụ trợ đến các thiết bị đã đăng ký; đây không phải là dịch vụ nhập dữ liệu và không nhận dữ liệu đo từ xa POS để lưu trữ trong Azure Blob Storage. [Azure Notification Hubs documentation](https://learn.microsoft.com/en-us/azure/notification-hubs/)",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 290",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/290-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-291",
    "questionNumber": 291,
    "text": "Solution: Provision Azure Event Grid. Configure the machine identifier as the partition key and enable capture.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Azure Event Hubs, thay vì Azure Event Grid, cung cấp các khóa phân vùng để tương quan với các sự kiện thiết bị liên quan và tính năng Chụp tự động ghi dữ liệu truyền phát vào Azure Blob Storage. Không thể định cấu hình Azure Event Grid bằng Event Hubs Capture, vì vậy giải pháp này không cung cấp khả năng lưu trữ và nhập dữ liệu thiết bị cần thiết.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 291",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/291-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-292",
    "questionNumber": 292,
    "text": "Solution: Provision an Azure Event Hub. Set the machine identifier as the partition key and enable Capture.  \n  \nDoes this solution meet the goal?",
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
    "explanation": "Azure Event Hubs chấp nhận phép đo từ xa của thiết bị có thể mở rộng và khóa phân vùng do người gửi cung cấp có thể sử dụng mã nhận dạng máy để nhóm các sự kiện của thiết bị để tương quan. Trung tâm sự kiện Capture tự động lưu trữ các sự kiện phát trực tuyến trong Azure Blob Storage và điều chỉnh quy mô theo công suất của Trung tâm sự kiện, hỗ trợ sự phát triển về số lượng cửa hàng và thiết bị trong tương lai.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 292",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/292-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-293",
    "questionNumber": 293,
    "text": "You are building an e-commerce solution that uses a microservice architecture.  \n  \nYou need to design a communication backplane to exchange transactional messages among the different parts of the solution. Messages must be delivered in first-in-first-out (FIFO) order.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure Storage Queue"
      },
      {
        "key": "B",
        "text": "Azure Event Hub"
      },
      {
        "key": "C",
        "text": "Azure Service Bus"
      },
      {
        "key": "D",
        "text": "Azure Event Grid"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Azure Service Bus được thiết kế để nhắn tin giao dịch và doanh nghiệp đáng tin cậy giữa các dịch vụ. Các phiên tin nhắn của nó cung cấp khả năng xử lý FIFO được đảm bảo cho các chuỗi tin nhắn liên quan, khiến nó phù hợp với bảng nối đa năng liên lạc vi dịch vụ được đặt hàng.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 293",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/293-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-294",
    "questionNumber": 294,
    "text": "You develop an app that enables users to upload photos and videos to Azure storage. The app uses a Storage REST API call to upload media to a blob storage account named Account1. You have blob storage containers named Container1 and Container2.  \n  \nVideo uploads happen on an irregular basis.  \n  \nYou need to copy particular blobs from Container1 to Container2 whenever a new video is uploaded.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Copy blobs to Container2 by using the Put Blob operation of the Blob Service REST API"
      },
      {
        "key": "B",
        "text": "Create an Event Grid topic that uses the Start-AzureStorageBlobCopy cmdlet"
      },
      {
        "key": "C",
        "text": "Use AzCopy with the Snapshot switch to copy blobs to Container2"
      },
      {
        "key": "D",
        "text": "Download the blob to a virtual machine and then upload the blob to Container2"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Azure Blob Storage phát ra sự kiện Lưới sự kiện `Microsoft.Storage.BlobCreated` khi một blob được tạo hoặc thay thế thông qua API Blob REST. Trình xử lý được kích hoạt bởi Lưới sự kiện có thể bắt đầu bản sao blob phía máy chủ cho video đã tải lên đủ điều kiện, do đó việc sao chép diễn ra để phản hồi lại mỗi lần tải lên bất thường mà không cần thăm dò ý kiến ​​hoặc chuyển blob thông qua máy ảo.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 294",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/294-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-295",
    "questionNumber": 295,
    "text": "You have an Azure Application Insights resource named AI1 that monitors an Azure App Service web app named App1.  \n  \nYou plan to regularly analyze usage of particular App1 pages by a subset of users. This subset will include users who access specified App1 pages five or more times during a month. You must be able to filter sessions and events by that subset while viewing AI1 in the Azure portal.  \n  \nYou need to configure AI1 to support the analysis.  \n  \nWhat should you configure for AI1?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Một nhóm thuần tập xác định một nhóm người dùng có thể sử dụng lại dựa trên tiêu chí hành vi, bao gồm số lượt xem trang và số lần xuất hiện tối thiểu trong một khoảng thời gian. Application Insights sử dụng KQL để truy vấn và phân tích phép đo từ xa như phiên và sự kiện.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 295",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/295-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-296",
    "questionNumber": 296,
    "text": "A company is building a solution that enables smart refrigerators to send temperature data to a central location.  \n  \nThe solution must receive and retain messages until they are processed. You create an Azure Service Bus instance by specifying a name, pricing tier, subscription, resource group, and location.  \n  \nYou need to finish the configuration.  \n  \nWhich Azure CLI or PowerShell command should you run?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "![](https://cdn.examcademy.com/images/questions/1785598761001-xu6xkmth.png)"
      },
      {
        "key": "B",
        "text": "![](https://cdn.examcademy.com/images/questions/1785598763461-gj3c8hny.png)"
      },
      {
        "key": "C",
        "text": "![](https://cdn.examcademy.com/images/questions/1785598765773-tca5aqhh.png)"
      },
      {
        "key": "D",
        "text": "![](https://cdn.examcademy.com/images/questions/1785598768109-ugxd6t6i.png)"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Hàng đợi Azure Service Bus cung cấp khả năng lưu trữ tin nhắn lâu dài giúp tách biệt người gửi khỏi người nhận cho đến khi người tiêu dùng xử lý từng tin nhắn. Việc tạo hàng đợi bắt buộc trong không gian tên `fridge-ns` hiện có được thực hiện bằng `New-AzureRmServiceBusQueue` bằng cách sử dụng các tham số nhóm tài nguyên, không gian tên và tên hàng đợi. Tài liệu `New-AzServiceBusQueue` hiện tại của Microsoft mô tả lệnh ghép ngắn tương đương và các tham số hàng đợi, không gian tên và nhóm tài nguyên bắt buộc.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 296",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/296-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-297",
    "questionNumber": 297,
    "text": "You are building a collection of RESTful APIs that external partners will consume.  \n  \nYou must securely expose the APIs through Azure API Management and meet these requirements:  \n  \n- Only authenticated and authorized clients can access the APIs.  \n- Implement control over the number of API calls to prevent abuse and ensure fair use.  \n- Perform data transformation and validation for incoming requests and outgoing responses without changing the back-end services.  \n- Collect insights into API usage patterns, performance metrics, and anomaly detection.  \n  \nYou need to implement the APIs.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Use basic authentication over HTTPS.Apply IP filtering policies.Perform transformation logic in the client application.Enable Azure diagnostics logs."
      },
      {
        "key": "B",
        "text": "Use OAuth 2.0 for authentication and authorization.Apply rate limit policies.Use inbound and outbound policies for transformation.Enable Azure Monitor for detailed analytics."
      },
      {
        "key": "C",
        "text": "Require clients to present client certificates.Use response caching policies.Implement request and response transformation in back-end services.Analyze logs with Log Analytics."
      },
      {
        "key": "D",
        "text": "Use subscription keys for authentication.Implement caching policies.Modify API code for transformation.Use Application insights for monitoring."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "OAuth 2.0 cung cấp ủy quyền dựa trên mã thông báo để truy cập API và Quản lý API Azure có thể xác thực các mã thông báo đó. Chính sách giới hạn tỷ lệ hạn chế tần suất yêu cầu để bảo vệ dịch vụ và thúc đẩy việc sử dụng hợp lý. Các chính sách Quản lý API gửi đến và gửi đi thực thi tại cổng, cho phép xác thực yêu cầu và chuyển đổi các yêu cầu hoặc phản hồi mà không sửa đổi các dịch vụ phụ trợ. Azure Monitor thu thập và phân tích phép đo từ xa Quản lý API để theo dõi việc sử dụng và hiệu suất.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 297",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/297-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-298",
    "questionNumber": 298,
    "text": "You must secure the Azure Functions to satisfy the security requirements.  \n  \nWhich two actions should you take? Each correct answer forms part of the solution.  \n  \n**NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Store the RSA-HSM key in Azure Key Vault with soft-delete and purge-protection features enabled."
      },
      {
        "key": "B",
        "text": "Store the RSA-HSM key in Azure Blob storage with an immutability policy applied to the container."
      },
      {
        "key": "C",
        "text": "Create a free tier Azure App Configuration instance with a new Azure AD service principal."
      },
      {
        "key": "D",
        "text": "Create a standard tier Azure App Configuration instance with an assigned Azure AD managed identity."
      },
      {
        "key": "E",
        "text": "Store the RSA-HSM key in Azure Cosmos DB. Apply the built-in policies for customer-managed keys and allowed locations."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Mã hóa do khách hàng quản lý Cấu hình ứng dụng Azure sử dụng khóa Key Vault RSA hoặc RSA-HSM và yêu cầu bảo vệ xóa mềm và thanh lọc Key Vault. Kho Cấu hình ứng dụng cũng cần được chỉ định managed identity để có thể xác thực với Key Vault và thực hiện các thao tác bọc và mở khóa; Khóa do khách hàng quản lý yêu cầu cấp Tiêu chuẩn hoặc Cao cấp, không phải cấp Miễn phí.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 298",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/298-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-299",
    "questionNumber": 299,
    "text": "You are developing an application that uses Azure Blob Storage.  \n  \nThe application must read transaction logs for every change made to blobs and blob metadata in the storage account for auditing. The changes must be ordered as they occurred, contain only create, update, delete, and copy operations, and be retained for compliance.  \n  \nYou need to process the transaction logs asynchronously.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Process all Azure Blob storage events by using Azure Event Grid with a subscriber Azure Function app."
      },
      {
        "key": "B",
        "text": "Enable the change feed on the storage account and process all changes for available events."
      },
      {
        "key": "C",
        "text": "Process all Azure Storage Analytics logs for successful blob events."
      },
      {
        "key": "D",
        "text": "Use the Azure Monitor HTTP Data Collector API and scan the request body for successful blob events."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Nguồn cấp dữ liệu thay đổi Azure Blob Storage cung cấp nhật ký giao dịch bền vững, không thay đổi, chỉ đọc để thay đổi siêu dữ liệu blob và blob. Các ứng dụng có thể sử dụng nguồn cấp dữ liệu không đồng bộ, tăng dần hoặc theo đợt và việc lưu giữ có thể được định cấu hình để đáp ứng các yêu cầu tuân thủ. Nguồn cấp dữ liệu ghi lại các sự kiện thay đổi blob có sẵn, cho phép người tiêu dùng lọc theo các loại hoạt động được yêu cầu.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 299",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/299-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-300",
    "questionNumber": 300,
    "text": "HOTSPOT -  \n  \nYou are developing an application that needs access to an Azure virtual machine (VM).  \n  \nThe application's access lifecycle must be associated with the VM service instance.  \n  \nYou need to enable managed identity for the VM.  \n  \nHow should you complete the PowerShell segment?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "system-assigned managed identity được gắn với vòng đời của VM và bị xóa khi VM bị xóa. user-assigned managed identity là tài nguyên Azure riêng biệt có vòng đời độc lập. `-AssignIdentity` gán danh tính hệ thống cho VM.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 300",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/300-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-301",
    "questionNumber": 301,
    "text": "You have an Azure Cosmos DB for NoSQL API account named account1 and a database named db1. An application named app1 accesses db1 to perform read and write operations.  \n  \nYou plan to modify the consistency levels for reads and writes performed by app1 on db1.  \n  \nYou must enforce consistency on a per-operation basis whenever possible.  \n  \nWhich locations should you configure? Each location may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "read",
        "text": "Read",
        "correctAnswer": "B"
      },
      {
        "id": "write",
        "text": "Write",
        "correctAnswer": "C"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "db1"
      },
      {
        "key": "B",
        "text": "app1"
      },
      {
        "key": "C",
        "text": "account1"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "db1"
      },
      {
        "key": "B",
        "text": "app1"
      },
      {
        "key": "C",
        "text": "account1"
      }
    ],
    "correctAnswers": [
      "read=B",
      "write=C"
    ],
    "explanation": "Ứng dụng khách SDK có thể ghi đè mức độ nhất quán mặc định của tài khoản đối với các yêu cầu đọc riêng lẻ. Việc ghi đè chỉ áp dụng cho các lần đọc; tính nhất quán ghi vẫn bị chi phối bởi mức độ nhất quán mặc định được đặt trên tài khoản Azure Cosmos DB.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 301",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/301-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.819Z"
  },
  {
    "id": "az204-302",
    "questionNumber": 302,
    "text": "You are building an Azure Durable Function to manage an online ordering process.  \n  \nThe process must invoke an external API to obtain product discount information. You need to implement the Azure Durable Function.  \n  \nWhich Azure Durable Function types should you use? Each correct answer forms part of the solution.  \n  \n> **NOTE:** Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Orchestrator"
      },
      {
        "key": "B",
        "text": "Entity"
      },
      {
        "key": "C",
        "text": "Client"
      },
      {
        "key": "D",
        "text": "Activity"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Chức năng điều phối điều phối quy trình đặt hàng lâu dài và gọi các chức năng hoạt động. Các hàm hoạt động là nơi thích hợp cho I/O bên ngoài, chẳng hạn như gọi API bên ngoài để truy xuất dữ liệu giảm giá, vì các hàm điều phối thông thường không được thực hiện I/O trực tiếp.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 302",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/302-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-303",
    "questionNumber": 303,
    "text": "A large retail company runs both online and physical stores. It tracks inventory levels in real time to manage stock efficiently across every location. You develop an Azure Event Grid solution to process events generated by the inventory management system deployed in Azure.  \n  \nYou need to implement a subscription filter that dynamically adapts to seasonal shifts in product demand.  \n  \nWhich event filter should you use?",
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
        "text": "A subscription filter that uses label filter to include events tagged with seasonal promotional codes"
      },
      {
        "key": "D",
        "text": "A static subject filter that targets events with a subject ending in “/seasonal/inventory”"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Bộ lọc nâng cao Azure Event Grid đánh giá các trường dữ liệu sự kiện bằng toán tử so sánh được hỗ trợ và nhiều bộ lọc nâng cao có thể được kết hợp khi đăng ký sự kiện. Do đó, trường liên quan đến mùa trong tải trọng sự kiện có thể được sử dụng để áp dụng tính năng lọc theo mùa linh hoạt, không giống như hậu tố chủ đề cố định hoặc tiền tố loại sự kiện. [Event filters for Azure Event Grid namespace topics](https://learn.microsoft.com/en-us/azure/event-grid/namespace-event-filtering)",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 303",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/303-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-304",
    "questionNumber": 304,
    "text": "You are creating an application that stores millions of images in Azure Blob Storage.  \n  \nThe application must:  \n  \n- Store each image's Exif (exchangeable image file format) data as blob metadata when the image is uploaded.  \n- Retrieve the image's Exif data while minimizing bandwidth and processing time.  \n- Use the REST API.  \n  \nYou need to use the image Exif data as blob metadata in the application. Which HTTP verbs should you use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Siêu dữ liệu Blob được viết bằng PUT. Yêu cầu HEAD truy xuất các thuộc tính blob và siêu dữ liệu do người dùng xác định từ tiêu đề mà không trả về nội dung blob, giảm thiểu băng thông và thời gian xử lý.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 304",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/304-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-305",
    "questionNumber": 305,
    "text": "You are developing an Azure Function that calls external APIs by supplying an access token for the API. The access token is stored in a secret named `token` in an Azure Key Vault named `mykeyvault`.  \n  \nYou need to ensure that the Azure Function can access the token. Which value should you store in the Azure Function App configuration?",
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
        "text": "AZUREKVCONNSTR_ https://mykeyveult.vault.ezure.net/secrets/token/"
      },
      {
        "key": "D",
        "text": "@Microsoft.KeyVault(SecretUri=https://mykeyvault.vault.azure.net/secrets/token/)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Cài đặt Ứng dụng Chức năng Azure hỗ trợ các tham chiếu Azure Key Vault bằng `@Microsoft.KeyVault(SecretUri=<secretUri>)`. URI bí mật cho `token` bí mật trong vault `mykeyvault` là `https://mykeyvault.vault.azure.net/secrets/token/`, do đó tham chiếu này giải quyết giá trị bí mật cho ứng dụng hàm, miễn là danh tính của nó có quyền đọc bí mật.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 305",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/305-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-306",
    "questionNumber": 306,
    "text": "You are developing a containerized microservices application that will be deployed by using Azure Container Apps. The application uses Dapr for service invocation between microservices.  \n  \nYou develop two services: OrderService and PaymentService.  \n  \nOrderService must invoke a method named ProcessPayment on PaymentService.  \n  \nYou need to invoke the method.  \n  \nHow should you complete the code segment?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "`DaprClientBuilder().Build()` tạo `DaprClient`, cung cấp `InvokeMethodAsync` cho lệnh gọi dịch vụ Dapr. Gọi nó bằng ID ứng dụng PaymentService (`paymentservice`) và `ProcessPayment` định tuyến yêu cầu thông qua sidecar Dapr tới phương thức dịch vụ đó.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 306",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/306-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-307",
    "questionNumber": 307,
    "text": "Add code at line AM09 so that users can review content through ContentAnalysisService. How should the code be completed?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "React SPA dựa trên trình duyệt phải được bật để nhận cả mã thông báo truy cập luồng ngầm OAuth 2.0 và mã thông báo ID. `oauth2AllowImplicitFlow` cho phép mã thông báo truy cập luồng ngầm và `oauth2AllowIdTokenImplicitFlow` cho phép mã thông báo ID luồng ngầm để người dùng đăng nhập.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 307",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/307-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-308",
    "questionNumber": 308,
    "text": "You need to make sure that the solution meets the scaling requirements for Policy Service.  \n  \nWhich Azure Application Insights data model should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "an Application Insights dependency"
      },
      {
        "key": "B",
        "text": "an Application Insights event"
      },
      {
        "key": "C",
        "text": "an Application Insights trace"
      },
      {
        "key": "D",
        "text": "an Application Insights metric"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Số liệu Application Insights, bao gồm số liệu tùy chỉnh, cung cấp phép đo từ xa theo chuỗi thời gian bằng số mà Azure Monitor có thể sử dụng để đưa ra các quyết định tự động chia tỷ lệ. Số liệu tùy chỉnh có thể biểu thị số lượng hành động chính sách đang được thực hiện.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 308",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/308-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-309",
    "questionNumber": 309,
    "text": "You are developing a microservices-based application using Azure Container Apps. The application consists of several containerized services that perform tasks such as processing orders, managing inventory, and generating reports.  \n  \nYou must deploy two microservices, named serviceA and serviceB, to support inventory management. Deployment requirements are:  \n  \n- serviceA must create and configure all required Azure resources, including multiple Dapr components and an Azure Blob Storage account, using Bicep files.  \n- serviceB must create and configure all required Azure resources without using Bicep files.  \n- All microservices must use the same resource group, environment, Azure Container Registry, and Log Analytics workspace.  \n  \nYou need to deploy the microservices.  \n  \nWhich CLI command should you use? Each CLI command may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "serviceA",
        "text": "serviceA",
        "correctAnswer": "A"
      },
      {
        "id": "serviceB",
        "text": "serviceB",
        "correctAnswer": "C"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "azd up"
      },
      {
        "key": "B",
        "text": "az acr build"
      },
      {
        "key": "C",
        "text": "az containerapp up"
      },
      {
        "key": "D",
        "text": "docker-compose up"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "azd up"
      },
      {
        "key": "B",
        "text": "az acr build"
      },
      {
        "key": "C",
        "text": "az containerapp up"
      },
      {
        "key": "D",
        "text": "docker-compose up"
      }
    ],
    "correctAnswers": [
      "serviceA=A",
      "serviceB=C"
    ],
    "explanation": "`azd up` cung cấp và triển khai một ứng dụng từ cấu hình dự án Azure Developer CLI và các mẫu cơ sở hạ tầng dưới dạng mã, bao gồm các tài nguyên do Bicept xác định như Ứng dụng vùng chứa, thành phần Dapr và bộ lưu trữ. `az containerapp up` tạo hoặc sử dụng lại tài nguyên hỗ trợ Azure Container Apps trong khi triển khai ứng dụng vùng chứa mà không yêu cầu Bicept. Cả hai đều có thể nhắm mục tiêu cùng một tài nguyên Azure được chia sẻ hiện có.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 309",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/309-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-310",
    "questionNumber": 310,
    "text": "HOTSPOT —  \n  \nYou plan to deploy a new application to a Linux virtual machine (VM) hosted in Azure. The entire VM must be protected at rest by using industry-standard encryption technology to meet organizational security and compliance requirements.  \n  \nYou need to configure Azure Disk Encryption for the VM. How should you complete the Azure CLI commands?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "`az keyvault create` tạo Key Vault và `az keyvault key create` tạo khóa được bảo vệ bằng phần mềm trong đó. `az vm create` cung cấp VM. Mã hóa đĩa Azure được bật với `az vm encryption enable`; `--volume-type all` mã hóa cả hệ điều hành và đĩa dữ liệu.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 310",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/310-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-311",
    "questionNumber": 311,
    "text": "You develop an image-upload service exposed through Azure API Management. Images are analyzed after upload for automatic tagging.  \n  \nImages over 500 KB are handled by a separate, lower-cost backend. The lower service tier is indicated by an `x-large-request` header. Images exceeding 500 KB must never be processed by backends intended for smaller images and must always be charged the lower price.  \n  \nImplement API Management policies to ensure images are processed correctly. Complete the inbound policy by selecting the appropriate options.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Đối với các yêu cầu dưới ngưỡng, `delete` sẽ xóa tiêu đề `x-large-request` do khách hàng cung cấp để một hình ảnh nhỏ không thể được chỉ định cấp dịch vụ hình ảnh lớn. `set-backend-service` chuyển hướng các yêu cầu còn lại đến phần phụ trợ hình ảnh lớn và `base-url` cung cấp URL của phần phụ trợ đó.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 311",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/311-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-312",
    "questionNumber": 312,
    "text": "You have an on-premises datacenter and an Azure subscription containing an Azure Application Insights instance.  \n  \nYou plan to implement the Azure Monitor Application Insights Agent to instrument web apps hosted on the on-premises servers.  \n  \nYou need to automate this implementation by using PowerShell.  \n  \nWhich four PowerShell cmdlets should you run, in sequence?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "slot1",
        "text": "1",
        "correctAnswer": "B"
      },
      {
        "id": "slot2",
        "text": "2",
        "correctAnswer": "E"
      },
      {
        "id": "slot3",
        "text": "3",
        "correctAnswer": "D"
      },
      {
        "id": "slot4",
        "text": "4",
        "correctAnswer": "C"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Import-Module with the Name parameter set to Az.ApplicationMonitor"
      },
      {
        "key": "B",
        "text": "Install-PackageProvider with the Name parameter set to NuGet"
      },
      {
        "key": "C",
        "text": "Enable-ApplicationInsightsMonitoring with the ConnectionString parameter set to the Application Insights ingestion endpoint"
      },
      {
        "key": "D",
        "text": "Install-Module with the Name parameter set to Az.ApplicationMonitor"
      },
      {
        "key": "E",
        "text": "Install-Module with the Name parameter set to PowerShellGet"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Import-Module with the Name parameter set to Az.ApplicationMonitor"
      },
      {
        "key": "B",
        "text": "Install-PackageProvider with the Name parameter set to NuGet"
      },
      {
        "key": "C",
        "text": "Enable-ApplicationInsightsMonitoring with the ConnectionString parameter set to the Application Insights ingestion endpoint"
      },
      {
        "key": "D",
        "text": "Install-Module with the Name parameter set to Az.ApplicationMonitor"
      },
      {
        "key": "E",
        "text": "Install-Module with the Name parameter set to PowerShellGet"
      }
    ],
    "correctAnswers": [
      "slot1=B",
      "slot2=E",
      "slot3=D",
      "slot4=C"
    ],
    "explanation": "Tác nhân Application Insights được phân phối dưới dạng mô-đun PowerShell Az.ApplicationMonitor. Các điều kiện tiên quyết của Thư viện PowerShell của nó phải cài đặt nhà cung cấp gói NuGet và PowerShellGet trước khi cài đặt Az.ApplicationMonitor. Sau đó, Enable-ApplicationInsightsMonitoring sẽ thiết lập các ứng dụng web được lưu trữ và sử dụng chuỗi kết nối Application Insights, bao gồm cả điểm cuối nhập của nó, để gửi dữ liệu đo từ xa đến tài nguyên đích.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 312",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/312-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-313",
    "questionNumber": 313,
    "text": "HOTSPOT -  \n  \nYou have a single-page application (SPA) web app that manages information based on data returned by Microsoft Graph from another company’s Azure Active Directory (Azure AD) instance.  \n  \nUsers must authenticate and access Microsoft Graph by using their own company’s Azure AD instance.  \n  \nYou need to configure the application manifest for the app registration.  \n  \nHow should you complete the manifest?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "`requiredResourceAccess` khai báo quyền Microsoft Graph được ủy quyền mà ứng dụng yêu cầu. `AzureADMultipleOrgs` giúp ứng dụng có nhiều đối tượng thuê cho các tài khoản Azure AD của tổ chức. Để hiển thị cài đặt tệp kê khai luồng tiềm ẩn SPA cũ, `oauth2AllowImplicitFlow` phải được bật (`true`).",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 313",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/313-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-314",
    "questionNumber": 314,
    "text": "You must grant access to the retail-store location data for the inventory service development initiative.  \n  \nWhat should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Azure AD access token"
      },
      {
        "key": "B",
        "text": "Azure RBAC role"
      },
      {
        "key": "C",
        "text": "Shared access signature (SAS) token"
      },
      {
        "key": "D",
        "text": "Azure AD ID token"
      },
      {
        "key": "E",
        "text": "Azure AD refresh token"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Mã thông báo chữ ký truy cập chung (SAS) cấp quyền truy cập được ủy quyền vào tài nguyên Bộ lưu trữ Azure với các quyền, phạm vi tài nguyên và thời hạn hiệu lực được xác định. Nó phù hợp để cung cấp quyền truy cập được kiểm soát bởi dịch vụ kiểm kê vào dữ liệu vị trí.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 314",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/314-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-315",
    "questionNumber": 315,
    "text": "You have 100 Azure virtual machines (VMs) that have system-assigned managed identity enabled.  \n  \nYou need to determine the object ID attribute value for each identity.  \n  \nWhich command should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "az ad sp credential list"
      },
      {
        "key": "B",
        "text": "Get-AzVM"
      },
      {
        "key": "C",
        "text": "Get-AzureADUser"
      },
      {
        "key": "D",
        "text": "az resource show"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "ID đối tượng của system-assigned managed identity là `principalId` trong thuộc tính `identity` của tài nguyên Azure. `az resource show` có thể truy xuất tài nguyên VM và truy vấn `identity.principalId`, làm cho nó phù hợp để lấy ID đối tượng của từng danh tính VM. Tài liệu của Microsoft truy xuất ID chính dịch vụ VM managed identity từ danh tính tài nguyên và sử dụng ID đó cho các nhiệm vụ truy cập.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 315",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/315-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-316",
    "questionNumber": 316,
    "text": "You are developing microservices named serviceA, serviceB, and serviceC, and deploy them to a new Azure Container Apps environment.  \n  \nRequirements:  \n  \n- The microservices must retain data in storage.  \n- serviceA must retain data visible only to its current container, limited to disk space available in that container.  \n- serviceB must retain data for the replica lifetime and let multiple containers in that replica mount the same storage location.  \n- serviceC must retain data after the replica ends, let multiple containers access the storage, and provide per-object permissions.  \n  \nConfigure storage for each microservice. Each storage type can be used once, multiple times, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "serviceA",
        "text": "serviceA",
        "correctAnswer": "D"
      },
      {
        "id": "serviceB",
        "text": "serviceB",
        "correctAnswer": "C"
      },
      {
        "id": "serviceC",
        "text": "serviceC",
        "correctAnswer": "A"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Azure Blob Storage"
      },
      {
        "key": "B",
        "text": "Azure Files storage"
      },
      {
        "key": "C",
        "text": "Ephemeral volume"
      },
      {
        "key": "D",
        "text": "Container file system"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Azure Blob Storage"
      },
      {
        "key": "B",
        "text": "Azure Files storage"
      },
      {
        "key": "C",
        "text": "Ephemeral volume"
      },
      {
        "key": "D",
        "text": "Container file system"
      }
    ],
    "correctAnswers": [
      "serviceA=D",
      "serviceB=C",
      "serviceC=A"
    ],
    "explanation": "Bộ lưu trữ hệ thống tệp vùng chứa chỉ hiển thị với các tiến trình trong vùng chứa hiện tại của nó và bị giới hạn ở dung lượng đĩa tạm thời của vùng chứa. Một ổ đĩa tạm thời có phạm vi bản sao, vẫn tồn tại sau khi khởi động lại vùng chứa trong bản sao đó và có thể được gắn bởi nhiều vùng chứa trong đó. Azure Blob Storage tồn tại độc lập với các bản sao và cung cấp ủy quyền cấp đối tượng thông qua Microsoft Entra ID/RBAC hoặc chữ ký truy cập được chia sẻ.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 316",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/316-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-317",
    "questionNumber": 317,
    "text": "You are developing a Cosmos DB solution that will be deployed across multiple Azure regions.  \n  \nYour solution must meet these requirements:  \n  \n- Read operations must never receive write operations out of order.  \n- Maximize concurrency for read operations in every region.  \n  \nYou need to select the consistency level for the solution.  \n  \nWhich consistency level should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "session"
      },
      {
        "key": "B",
        "text": "eventual"
      },
      {
        "key": "C",
        "text": "bounded staleness"
      },
      {
        "key": "D",
        "text": "consistent prefix"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Tính nhất quán của tiền tố đảm bảo các lần đọc trả về tiền tố của chuỗi ghi đã cam kết, do đó việc ghi không bao giờ bị sai thứ tự. Nó sử dụng các lần đọc một bản sao, cung cấp khả năng đọc đồng thời cao hơn mức độ nhất quán yêu cầu số lần đọc đại biểu, chẳng hạn như độ cứng giới hạn.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 317",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/317-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-318",
    "questionNumber": 318,
    "text": "A company operates multiple warehouses. Each warehouse contains IoT temperature devices that deliver temperature data to an Azure Service Bus queue.  \n  \nYou need to send email alerts to facility supervisors immediately if a warehouse temperature rises above or falls below specified threshold temperatures.  \n  \nWhich five actions should you perform in sequence?",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "step1",
        "text": "Slot 1:",
        "correctAnswer": "G"
      },
      {
        "id": "step2",
        "text": "Slot 2:",
        "correctAnswer": "A"
      },
      {
        "id": "step3",
        "text": "Slot 3:",
        "correctAnswer": "H"
      },
      {
        "id": "step4",
        "text": "Slot 4:",
        "correctAnswer": "F"
      },
      {
        "id": "step5",
        "text": "Slot 5:",
        "correctAnswer": "C"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Add a logic app trigger that fires when one or more messages arrive in the queue."
      },
      {
        "key": "B",
        "text": "Add a Recurrence trigger that schedules the app to run every 15 minutes."
      },
      {
        "key": "C",
        "text": "Add an action that sends an email to specified personnel if the temperature is outside of those thresholds."
      },
      {
        "key": "D",
        "text": "Add a trigger that reads IoT temperature data from a Service Bus queue."
      },
      {
        "key": "E",
        "text": "Add a logic app action that fires when one or more messages arrive in the queue."
      },
      {
        "key": "F",
        "text": "Add a condition that compares the temperature against the upper and lower thresholds."
      },
      {
        "key": "G",
        "text": "Create a blank Logic app."
      },
      {
        "key": "H",
        "text": "Add an action that reads IoT temperature data from the Service Bus queue."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Add a logic app trigger that fires when one or more messages arrive in the queue."
      },
      {
        "key": "B",
        "text": "Add a Recurrence trigger that schedules the app to run every 15 minutes."
      },
      {
        "key": "C",
        "text": "Add an action that sends an email to specified personnel if the temperature is outside of those thresholds."
      },
      {
        "key": "D",
        "text": "Add a trigger that reads IoT temperature data from a Service Bus queue."
      },
      {
        "key": "E",
        "text": "Add a logic app action that fires when one or more messages arrive in the queue."
      },
      {
        "key": "F",
        "text": "Add a condition that compares the temperature against the upper and lower thresholds."
      },
      {
        "key": "G",
        "text": "Create a blank Logic app."
      },
      {
        "key": "H",
        "text": "Add an action that reads IoT temperature data from the Service Bus queue."
      }
    ],
    "correctAnswers": [
      "step1=G",
      "step2=A",
      "step3=H",
      "step4=F",
      "step5=C"
    ],
    "explanation": "Trình kích hoạt gửi tin nhắn trên Bus dịch vụ sẽ khởi động Ứng dụng Logic ngay khi có tin nhắn. Sau đó, quy trình làm việc sẽ đọc dữ liệu nhiệt độ, đánh giá xem nó nằm ngoài ngưỡng trên hay ngưỡng dưới và chỉ gửi email khi điều kiện đó được đáp ứng. Trình kích hoạt lặp lại sẽ không cung cấp cảnh báo ngay lập tức và tác vụ Ứng dụng Logic không thể bắt đầu chạy quy trình công việc.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 318",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/318-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-319",
    "questionNumber": 319,
    "text": "You are developing an Azure solution that uses Cosmos DB. The existing Cosmos DB container must be replicated and use a partition key optimized for queries.  \n  \nYou need to implement a change feed processor solution.  \n  \nWhich change feed processor components should you use? Each component may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "slot1",
        "text": "Store the data from which the change feed is generated.",
        "correctAnswer": "D"
      },
      {
        "id": "slot2",
        "text": "Coordinate processing of the change feed across multiple workers.",
        "correctAnswer": "C"
      },
      {
        "id": "slot3",
        "text": "Use the change feed processor to listen for changes.",
        "correctAnswer": "A"
      },
      {
        "id": "slot4",
        "text": "Handle each batch of changes.",
        "correctAnswer": "B"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Host"
      },
      {
        "key": "B",
        "text": "Delegate"
      },
      {
        "key": "C",
        "text": "Lease container"
      },
      {
        "key": "D",
        "text": "Monitored container"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Host"
      },
      {
        "key": "B",
        "text": "Delegate"
      },
      {
        "key": "C",
        "text": "Lease container"
      },
      {
        "key": "D",
        "text": "Monitored container"
      }
    ],
    "correctAnswers": [
      "slot1=D",
      "slot2=C",
      "slot3=A",
      "slot4=B"
    ],
    "explanation": "Vùng chứa được giám sát là nguồn có các thay đổi được đọc. Bộ chứa cho thuê lưu trữ trạng thái cho thuê để các phiên bản bộ xử lý có thể phối hợp quyền sở hữu phân vùng. Một phiên bản máy chủ chạy bộ xử lý nguồn cấp dữ liệu thay đổi và lắng nghe những thay đổi mới, trong khi lệnh gọi lại đại biểu xử lý từng lô được phân phối.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 319",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/319-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-320",
    "questionNumber": 320,
    "text": "You are developing a web application with the Azure SDK. The application accesses data in a zone-redundant BlockBlobStorage storage account.  \n  \nThe application must identify whether data changed after it was last read. Update operations must write using the latest data changes in the storage account.  \n  \nYou need to implement the update operations.  \n  \nWhich values should you use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Azure Blob Storage hỗ trợ đồng thời lạc quan thông qua ETag. Một lần đọc sẽ trả về ETag của blob, giá trị này sẽ thay đổi sau khi ghi. Việc cung cấp giá trị đã lưu đó trong tiêu đề If-Match làm cho việc cập nhật có điều kiện trên blob vẫn có cùng ETag đó; nếu không thì Blob Storage trả về HTTP 412, yêu cầu ứng dụng đọc lại dữ liệu mới nhất trước khi cập nhật.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 320",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/320-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-321",
    "questionNumber": 321,
    "text": "A web service supplies customer-summary data to e-commerce partners through an Azure Function app with an HTTP trigger. Access to the API is provided through an Azure API Management instance configured in consumption-plan mode, and every API call is authenticated with OAuth.  \n  \nAPI calls must be cached, but customers must not be able to view another customer's cached data.  \n  \nConfigure the API Management caching policies.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "caching_type",
        "text": "Slot 1:",
        "correctAnswer": "D"
      },
      {
        "id": "downstream_caching_type",
        "text": "Slot 2:",
        "correctAnswer": "C"
      },
      {
        "id": "vary_by_header",
        "text": "Slot 3:",
        "correctAnswer": "F"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Expect"
      },
      {
        "key": "B",
        "text": "Public"
      },
      {
        "key": "C",
        "text": "Private"
      },
      {
        "key": "D",
        "text": "Internal"
      },
      {
        "key": "E",
        "text": "External"
      },
      {
        "key": "F",
        "text": "Authorization"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Expect"
      },
      {
        "key": "B",
        "text": "Public"
      },
      {
        "key": "C",
        "text": "Private"
      },
      {
        "key": "D",
        "text": "Internal"
      },
      {
        "key": "E",
        "text": "External"
      },
      {
        "key": "F",
        "text": "Authorization"
      }
    ],
    "correctAnswers": [
      "caching_type=D",
      "downstream_caching_type=C",
      "vary_by_header=F"
    ],
    "explanation": "Tầng tiêu thụ sử dụng bộ nhớ đệm Quản lý API (nội bộ) tích hợp sẵn. Việc đánh dấu bộ nhớ đệm xuôi dòng là riêng tư sẽ ngăn các bộ nhớ đệm xuôi dòng được chia sẻ phân phát phản hồi của khách hàng này cho khách hàng khác. Việc thay đổi cách tra cứu bộ nhớ đệm theo tiêu đề Ủy quyền sẽ tạo ra các mục nhập bộ nhớ đệm riêng biệt cho các yêu cầu được xác thực bằng OAuth với các thông tin xác thực khác nhau.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 321",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/321-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-322",
    "questionNumber": 322,
    "text": "You develop and deploy an ASP.NET web app to Azure App Service, using Application Insights telemetry to monitor it.  \n  \nYou must test the app to confirm that it is available and responsive from different locations worldwide at regular intervals. If the app does not respond, an alert must be sent to support staff.  \n  \nYou need to configure a test for the web app.  \n  \nWhich two test types can you use? Each correct answer presents a complete solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "integration"
      },
      {
        "key": "B",
        "text": "multi-step web"
      },
      {
        "key": "C",
        "text": "URL ping"
      },
      {
        "key": "D",
        "text": "unit"
      },
      {
        "key": "E",
        "text": "load"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Các bài kiểm tra tính khả dụng của Application Insights chạy các yêu cầu web đều đặn từ các vị trí được phân bổ theo địa lý và có thể cảnh báo khi ứng dụng không khả dụng hoặc phản hồi quá chậm. Các loại thử nghiệm web-khả dụng cũ có thể áp dụng là thử nghiệm ping URL cho một yêu cầu điểm cuối duy nhất và thử nghiệm web nhiều bước cho một chuỗi yêu cầu web. Kiểm tra ping URL không được dùng nữa trong tài liệu Azure hiện tại nhưng chúng vẫn phù hợp hợp lệ với các lựa chọn loại kiểm tra được cung cấp.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 322",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/322-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-323",
    "questionNumber": 323,
    "text": "You are building a Microsoft Entra ID–integrated app that communicates with Microsoft Graph.  \n  \nYou must enable GET operations to receive unknown members that could be defined in the future in the Microsoft Graph API. You plan to support evolvable enumerations in the app.  \n  \nYou need to specify the HTTP request header that provides evolvable-enumeration support in the app.  \n  \nWhich header should you specify?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Accept"
      },
      {
        "key": "B",
        "text": "Content-Type"
      },
      {
        "key": "C",
        "text": "If-Match"
      },
      {
        "key": "D",
        "text": "Prefer"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Microsoft Graph sử dụng tiêu đề yêu cầu `Prefer` với giá trị `include-unknown-enum-members` để chọn tham gia vào các thành viên tương lai của bảng liệt kê có thể phát triển trong các hoạt động GET.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 323",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/323-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-324",
    "questionNumber": 324,
    "text": "You have 100 Azure virtual machines (VMs) that have system-assigned managed identity enabled.  \n  \nYou need to determine the value of the object ID attribute for each identity.  \n  \nWhich command should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Get-AzVM"
      },
      {
        "key": "B",
        "text": "Get-AzureADUserOwnedObject"
      },
      {
        "key": "C",
        "text": "az ad sp credential list"
      },
      {
        "key": "D",
        "text": "az resource show"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "system-assigned managed identity của máy ảo hiển thị ID đối tượng Microsoft Entra của nó là `Identity.PrincipalId`. `Get-AzVM` truy xuất các thuộc tính VM, do đó đầu ra của nó có thể được liệt kê để thu được `Identity.PrincipalId` cho mọi VM.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 324",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/324-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-325",
    "questionNumber": 325,
    "text": "You are building an online game with a feature that lets players interact with other players on the same team when they are within a specified distance. The calculation that identifies players in range runs when players move and is cached in an Azure Cache for Redis instance.  \n  \nThe system must prioritize players according to how recently they moved and must not prioritize players who have logged out of the game.  \n  \nYou need to choose an eviction policy.  \n  \nWhich eviction policy should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "allkeys-Iru"
      },
      {
        "key": "B",
        "text": "volatile-Iru"
      },
      {
        "key": "C",
        "text": "allkeys-lfu"
      },
      {
        "key": "D",
        "text": "volatile-ttl"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Chính sách `allkeys-lru` loại bỏ khóa ít được sử dụng gần đây nhất khỏi toàn bộ bộ đệm, giữ lại các mục nhập được lưu trong bộ nhớ đệm cho những người chơi đã di chuyển gần đây nhất đồng thời cho phép xóa các mục nhập cũ, bao gồm cả những mục nhập dành cho người chơi đã đăng xuất. Microsoft ghi lại rằng `allkeys-lru` loại bỏ khóa ít được sử dụng gần đây nhất, trong khi `volatile-lru` chỉ xem xét các khóa có thời hạn sử dụng.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 325",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/325-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-326",
    "questionNumber": 326,
    "text": "You have an Azure Service Bus namespace containing a topic named Topic1.  \n  \nYou plan to create a subscription named Sub1 for Topic1. In Sub1, you intend to filter Topic1 messages by their system properties and apply an action that annotates every filtered message.  \n  \nYou need to configure the filtering.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Bộ lọc SQL có thể đánh giá các thuộc tính hệ thống Azure Service Bus. Hành động quy tắc SQL của nó chạy sau khi thông báo khớp và có thể thêm, xóa hoặc thay thế các thuộc tính; những thay đổi chỉ áp dụng cho bản sao tin nhắn được gửi tới thuê bao. Nội dung thư không được cập nhật bởi các hành động quy tắc và thông báo chủ đề ban đầu không thay đổi.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 326",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/326-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-327",
    "questionNumber": 327,
    "text": "You are developing a REST web service that customers access through an Azure API Management instance.  \n  \nThe service does not handle conflicts correctly: rather than returning HTTP status code 409, it returns status code 500, and the status-message body contains only the word `conflict`.  \n  \nYou need to ensure that conflicts return the correct response. Complete the policy. Each code segment may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "section_open",
        "text": "Slot 1:",
        "correctAnswer": "C"
      },
      {
        "id": "response_context",
        "text": "Slot 2:",
        "correctAnswer": "B"
      },
      {
        "id": "error_context",
        "text": "Slot 3:",
        "correctAnswer": "B"
      },
      {
        "id": "status_policy",
        "text": "Slot 4:",
        "correctAnswer": "D"
      },
      {
        "id": "section_close",
        "text": "Slot 5:",
        "correctAnswer": "C"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "server"
      },
      {
        "key": "B",
        "text": "context"
      },
      {
        "key": "C",
        "text": "on-error"
      },
      {
        "key": "D",
        "text": "set-status"
      },
      {
        "key": "E",
        "text": "when-error"
      },
      {
        "key": "F",
        "text": "override-status"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "server"
      },
      {
        "key": "B",
        "text": "context"
      },
      {
        "key": "C",
        "text": "on-error"
      },
      {
        "key": "D",
        "text": "set-status"
      },
      {
        "key": "E",
        "text": "when-error"
      },
      {
        "key": "F",
        "text": "override-status"
      }
    ],
    "correctAnswers": [
      "section_open=C",
      "response_context=B",
      "error_context=B",
      "status_policy=D",
      "section_close=C"
    ],
    "explanation": "Phần `on-error` xử lý các lỗi xử lý chính sách và hiển thị chi tiết lỗi thông qua `context.LastError`. Điều kiện phát hiện phản hồi 500 sai và thông báo xung đột. `return-response` dừng xử lý đường ống và con `set-status` của nó đặt mã HTTP được trả về thành phản hồi xung đột 409 được yêu cầu.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 327",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/327-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-328",
    "questionNumber": 328,
    "text": "You are designing a solution that will use two Azure Functions apps: App1 and App2. App1 is Windows-based and will be deployed as code. App2 is Linux-based and will be deployed as a container image. Estimated request-processing duration for both apps ranges from 1 to 10 minutes.  \n  \nYou plan to implement App1 and App2 by using hosting plans that meet these requirements:  \n  \n- Request processing can complete within the estimated time range.  \n- Autoscaling behavior is event-driven.  \n- The upper scaling limit is maximized.  \n  \nWhich hosting plan should you create? Each hosting plan may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "app1",
        "text": "App1",
        "correctAnswer": "B"
      },
      {
        "id": "app2",
        "text": "App2",
        "correctAnswer": "A"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Premium"
      },
      {
        "key": "B",
        "text": "Consumption"
      },
      {
        "key": "C",
        "text": "Dedicated"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Premium"
      },
      {
        "key": "B",
        "text": "Consumption"
      },
      {
        "key": "C",
        "text": "Dedicated"
      }
    ],
    "correctAnswers": [
      "app1=B",
      "app2=A"
    ],
    "explanation": "Ứng dụng chức năng dựa trên mã Windows có thể sử dụng gói Tiêu thụ, gói này sẽ điều chỉnh theo các sự kiện đến và cho phép thời gian chờ thực thi được định cấu hình lên tới 10 phút. Giới hạn mở rộng của nó cao hơn Premium trong trường hợp này. Ứng dụng chức năng được chứa trong Linux yêu cầu dịch vụ lưu trữ Cao cấp hoặc Chuyên dụng; Premium là lựa chọn phù hợp vì nó hỗ trợ triển khai bộ chứa Linux và mở rộng quy mô theo sự kiện. Lưu trữ chuyên dụng không tự động mở rộng quy mô từ các sự kiện.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 328",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/328-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-329",
    "questionNumber": 329,
    "text": "You need to add code at line EG15 in `EventGridController.cs` so that the Log policy is applied to all services.  \n  \nHow should you complete the code? Each code segment may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "blank1",
        "text": "Slot 1:",
        "correctAnswer": "B"
      },
      {
        "id": "blank2",
        "text": "Slot 2:",
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
        "text": "status"
      },
      {
        "key": "C",
        "text": "eventType"
      },
      {
        "key": "D",
        "text": "Succeeded"
      },
      {
        "key": "E",
        "text": "operationName"
      },
      {
        "key": "F",
        "text": "resourceProvider"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "topic"
      },
      {
        "key": "B",
        "text": "status"
      },
      {
        "key": "C",
        "text": "eventType"
      },
      {
        "key": "D",
        "text": "Succeeded"
      },
      {
        "key": "E",
        "text": "operationName"
      },
      {
        "key": "F",
        "text": "resourceProvider"
      }
    ],
    "correctAnswers": [
      "blank1=B",
      "blank2=E"
    ],
    "explanation": "Trạng thái dữ liệu sự kiện xác định liệu thao tác có thành công hay không, do đó `status` phải được so sánh với `Succeeded`. Hoạt động tài nguyên được xác định bởi `operationName`, được so sánh với `Microsoft.Web/sites/write`; điều này nắm bắt các hoạt động ghi thành công cho các trang Azure App Service.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 329",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/329-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-330",
    "questionNumber": 330,
    "text": "You need to implement the Azure Function for delivery driver profile information. Which configurations should you use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "MSAL mua lại mã thông báo nền tảng nhận dạng của Microsoft cho các API web được bảo vệ. Microsoft Graph cung cấp tài nguyên người dùng và các thuộc tính hồ sơ của nó. Azure Key Vault quản lý bí mật, khóa và chứng chỉ chứ không phải hồ sơ thư mục; Đồ thị Azure AD đã ngừng hoạt động.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 330",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/330-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-331",
    "questionNumber": 331,
    "text": "You develop several Azure Functions app functions to process JSON documents from a third-party system. The third-party system sends events to Azure Event Grid and includes hundreds of event types, such as billing, inventory, and shipping updates.  \n  \nEvents must go to a single endpoint for the Azure Functions app to process, and they must be filtered by event type before processing. You must also have authorization and authentication control to partition tenants that receive the event data.  \n  \nYou need to configure Azure Event Grid.  \n  \nWhich configuration should you use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Miền sự kiện Lưới sự kiện cung cấp một điểm cuối xuất bản duy nhất cho nhiều chủ đề riêng lẻ và hỗ trợ xác thực và ủy quyền chi tiết cho mỗi chủ đề, cho phép phân vùng đối tượng thuê. Đăng ký sự kiện xác định điểm cuối đích và có thể lọc các sự kiện được phân phối theo loại sự kiện, do đó, nó chỉ định tuyến các sự kiện cần thiết đến ứng dụng Azure Functions.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 331",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/331-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-332",
    "questionNumber": 332,
    "text": "You are authoring nested Azure Resource Manager templates to deploy Azure resources. The `mainTemplate.json` template contains the linked templates `linkedTemplate1.json` and `linkedTemplate2.json`.  \n  \nYou add parameters to a parameters template file named `mainTemplate.parameters,json`. All templates are saved locally in the `C:\\templates\\` folder.  \n  \nRequirements:  \n  \n- Store templates in Azure for later deployment.  \n- Enable template versioning.  \n- Manage template access by using Azure RBAC.  \n- Ensure users have read-only access to templates.  \n- Allow users to deploy templates.  \n  \nYou need to store the templates in Azure. Complete the command.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Thông số mẫu Azure là các tài nguyên mẫu ARM được phiên bản sử dụng Azure RBAC. `az ts create` tạo thông số mẫu và tệp mẫu của nó phải là mẫu gốc, `mainTemplate.json`; các mẫu được liên kết được giải quyết từ mẫu chính đó.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 332",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/332-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-333",
    "questionNumber": 333,
    "text": "You develop Azure Durable Functions to manage vehicle loans.  \n  \nThe loan process contains multiple actions that must run in a specified order. One action is a customer credit-check process, which might take multiple days to complete.  \n  \nYou need to implement Azure Durable Functions for the loan process.  \n  \nWhich Azure Durable Functions type should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "orchestrator"
      },
      {
        "key": "B",
        "text": "client"
      },
      {
        "key": "C",
        "text": "entity"
      },
      {
        "key": "D",
        "text": "activity"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Chức năng điều phối phối hợp các chức năng khác dưới dạng quy trình làm việc dựa trên mã, bền vững, cho phép các hành động được chạy theo trình tự xác định trong khi vẫn duy trì tiến trình trong thời gian chờ đợi kéo dài. Các phiên bản điều phối có thể chạy trong nhiều ngày hoặc lâu hơn, hỗ trợ quy trình kiểm tra tín dụng có thể mất nhiều ngày.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 333",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/333-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-334",
    "questionNumber": 334,
    "text": "You have a web service used to pay for food deliveries that uses Azure Cosmos DB as its data store.  \n  \nYou plan to add a feature that lets users set a tip amount. The feature requires every Cosmos DB document to have a `tip` property containing a numeric value.  \n  \nMany existing websites and mobile apps that use the web service will not be updated to set the `tip` property for some time.  \n  \nHow should you complete the trigger?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Trình kích hoạt trước Cosmos DB truy cập mục đang chờ xử lý thông qua `getContext().getRequest()`. Nó có thể thêm `tip` số mặc định của `0` cho các giá trị bị thiếu, null hoặc không phải số, sau đó sử dụng `setBody()` để ghi mục đã sửa đổi vào thao tác đang chờ xử lý.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 334",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/334-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-335",
    "questionNumber": 335,
    "text": "You are creating an Azure Cosmos DB account that uses the SQL API. A web application will add data to the account every day.  \n  \nYou need to ensure that an email notification is sent when information is received from IoT devices and that compute cost is reduced.  \n  \nYou decide to deploy a function app. Which options should you configure the function app to use?",
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
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Azure Cosmos DB connector"
      },
      {
        "key": "B",
        "text": "SendGrid action"
      },
      {
        "key": "C",
        "text": "Consumption plan"
      },
      {
        "key": "D",
        "text": "Azure Event Hubs binding"
      },
      {
        "key": "E",
        "text": "SendGrid binding"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Azure Cosmos DB connector"
      },
      {
        "key": "B",
        "text": "SendGrid action"
      },
      {
        "key": "C",
        "text": "Consumption plan"
      },
      {
        "key": "D",
        "text": "Azure Event Hubs binding"
      },
      {
        "key": "E",
        "text": "SendGrid binding"
      }
    ],
    "correctAnswers": [
      "slot1=C",
      "slot2=E"
    ],
    "explanation": "Liên kết đầu ra SendGrid cho phép Chức năng Azure gửi email. Gói tiêu thụ tự động thêm và loại bỏ các phiên bản máy chủ chức năng theo nhu cầu và chi phí thực thi/tiêu thụ tài nguyên, giúp kế hoạch này phù hợp để giảm chi phí điện toán cho khối lượng công việc không liên tục.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 335",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/335-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-336",
    "questionNumber": 336,
    "text": "You are building a serverless Java application in Azure and create a new Azure Key Vault for secrets used by a new Azure Functions application.  \n  \nThe application must meet these requirements:  \n  \n- Reference Azure Key Vault without changing the Java code.  \n- Dynamically add or remove Azure Functions host instances according to incoming application events.  \n- Keep instances perpetually warm to prevent cold starts.  \n- Connect to a VNet.  \n- Remove Azure Key Vault authentication when the Azure Function application is deleted.  \n  \nYou need to give the Azure Functions application access to Azure Key Vault.  \n  \nWhich three actions should you take, in order?",
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
        "correctAnswer": "G"
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
        "text": "Create a user-assigned managed identity for the application."
      },
      {
        "key": "B",
        "text": "Create the Azure Functions app with a Premium plan type."
      },
      {
        "key": "C",
        "text": "Create an access policy in Azure Key Vault for the application identity."
      },
      {
        "key": "D",
        "text": "Create an SSL certification in Azure Key Vault for the application identity."
      },
      {
        "key": "E",
        "text": "Create the Azure Functions app with an App Service plan type."
      },
      {
        "key": "F",
        "text": "Create the Azure Functions app with a Consumption plan type."
      },
      {
        "key": "G",
        "text": "Create a system-assigned managed identity for the application."
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Create a user-assigned managed identity for the application."
      },
      {
        "key": "B",
        "text": "Create the Azure Functions app with a Premium plan type."
      },
      {
        "key": "C",
        "text": "Create an access policy in Azure Key Vault for the application identity."
      },
      {
        "key": "D",
        "text": "Create an SSL certification in Azure Key Vault for the application identity."
      },
      {
        "key": "E",
        "text": "Create the Azure Functions app with an App Service plan type."
      },
      {
        "key": "F",
        "text": "Create the Azure Functions app with a Consumption plan type."
      },
      {
        "key": "G",
        "text": "Create a system-assigned managed identity for the application."
      }
    ],
    "correctAnswers": [
      "step1=B",
      "step2=G",
      "step3=C"
    ],
    "explanation": "Azure Functions Premium cung cấp các phiên bản luôn sẵn sàng mở rộng theo sự kiện để tránh khởi động nguội và tích hợp VNet. system-assigned managed identity chia sẻ vòng đời của ứng dụng chức năng và bị xóa cùng với ứng dụng. Chính sách truy cập Key Vault cấp quyền truy cập danh tính đó mà không cần thông tin xác thực được nhúng hoặc thay đổi mã Java.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 336",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/336-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-337",
    "questionNumber": 337,
    "text": "You need to ensure that PolicyLib requirements are met.  \n  \nHow should you complete the code segment? Each code segment may be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "class_interface",
        "text": "Slot 1:",
        "correctAnswer": "E"
      },
      {
        "id": "method_name",
        "text": "Slot 2:",
        "correctAnswer": "B"
      },
      {
        "id": "event_telemetry",
        "text": "Slot 3:",
        "correctAnswer": "H"
      },
      {
        "id": "assigned_value",
        "text": "Slot 4:",
        "correctAnswer": "G"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Process"
      },
      {
        "key": "B",
        "text": "Initialize"
      },
      {
        "key": "C",
        "text": "telemetry.Sequence"
      },
      {
        "key": "D",
        "text": "ITelemetryProcessor"
      },
      {
        "key": "E",
        "text": "ITelemetryInitializer"
      },
      {
        "key": "F",
        "text": "telemetry.Context"
      },
      {
        "key": "G",
        "text": "EventGridController.EventId.Value"
      },
      {
        "key": "H",
        "text": "((EventTelemetry)telemetry).Properties[\"EventId\"]"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Process"
      },
      {
        "key": "B",
        "text": "Initialize"
      },
      {
        "key": "C",
        "text": "telemetry.Sequence"
      },
      {
        "key": "D",
        "text": "ITelemetryProcessor"
      },
      {
        "key": "E",
        "text": "ITelemetryInitializer"
      },
      {
        "key": "F",
        "text": "telemetry.Context"
      },
      {
        "key": "G",
        "text": "EventGridController.EventId.Value"
      },
      {
        "key": "H",
        "text": "((EventTelemetry)telemetry).Properties[\"EventId\"]"
      }
    ],
    "correctAnswers": [
      "class_interface=E",
      "method_name=B",
      "event_telemetry=H",
      "assigned_value=G"
    ],
    "explanation": "Công cụ khởi tạo phép đo từ xa Application Insights triển khai `ITelemetryInitializer` và sử dụng phương pháp `Initialize(ITelemetry)` của nó để làm phong phú thêm phép đo từ xa. Truyền mục tới `EventTelemetry` cho phép đặt thuộc tính tùy chỉnh `Properties[\"EventId\"]` của nó thành `EventGridController.EventId.Value`.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 337",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/337-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-338",
    "questionNumber": 338,
    "text": "You are building a web application that uses the Microsoft identity platform to authenticate users and resources. The web application calls several REST APIs.  \n  \nA REST API request must read the user's calendar. The web application also needs permission to send email as the user.  \n  \nYou need to authorize the web application and the API.  \n  \nWhich parameter should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "tenant"
      },
      {
        "key": "B",
        "text": "code_challenge"
      },
      {
        "key": "C",
        "text": "state"
      },
      {
        "key": "D",
        "text": "client_id"
      },
      {
        "key": "E",
        "text": "scope"
      }
    ],
    "correctAnswers": [
      "E"
    ],
    "explanation": "Tham số `scope` yêu cầu các quyền được ủy quyền mà ứng dụng web cần để truy cập tài nguyên thay mặt cho người dùng đã đăng nhập, bao gồm các quyền như `Calendars.Read` và `Mail.Send`.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 338",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/338-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-339",
    "questionNumber": 339,
    "text": "You develop solutions for Azure.  \n  \nA .NET application must receive a message whenever an Azure virtual machine completes data processing. Messages must **NOT** persist after the receiving application processes them.  \n  \nYou need to implement the .NET object that receives the messages.  \n  \nWhich object should you use?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "QueueClient"
      },
      {
        "key": "B",
        "text": "SubscriptionClient"
      },
      {
        "key": "C",
        "text": "TopicClient"
      },
      {
        "key": "D",
        "text": "CloudQueueClient"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Hàng đợi Azure Service Bus hỗ trợ phân phối điểm-điểm tới một người tiêu dùng. QueueClient có thể nhận tin nhắn bằng chế độ NhậnAndDelete, chế độ này coi các tin nhắn như đã được giải quyết khi chúng được gửi và xóa chúng khỏi hàng đợi, do đó chúng không còn tồn tại sau khi xử lý.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 339",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/339-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-340",
    "questionNumber": 340,
    "text": "You are developing an application that runs in several customer Azure Kubernetes Service clusters. In every cluster, a pod collects performance data for later analysis. Because a large volume of data is collected, saving latency must be kept to a minimum.  \n  \nThe performance data must remain available when a pod restarts, and write latency must be minimized.  \n  \nYou need to configure blob storage.  \n  \nHow should you complete the YAML configuration?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "StorageClass xác định việc cung cấp khối lượng động. Azure Disk cung cấp bộ lưu trữ khối liên tục phù hợp với khối lượng công việc có độ trễ thấp; Premium_LRS nhắm mục tiêu hơn nữa đến hiệu suất được hỗ trợ bởi SSD. Đặt chính sách thu hồi thành `retain` sẽ bảo toàn đĩa cơ bản và dữ liệu của nó khi xác nhận quyền sở hữu liên quan bị xóa.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 340",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/340-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-341",
    "questionNumber": 341,
    "text": "You plan to implement an Azure Functions app.  \n  \nThe app must:  \n  \n- Be triggered by a message placed in an Azure Storage queue.  \n- Use the queue name configured by an app setting named `input_queue`.  \n- Create an Azure Blob Storage blob whose name matches the message content.  \n  \nIdentify how to reference the queue and blob names in the `function.json` file.",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Azure Functions giải quyết tham chiếu cài đặt ứng dụng được đính kèm trong các dấu phần trăm, do đó `%input_queue%` cung cấp tên hàng đợi. Đối với trình kích hoạt Hàng đợi Azure, biểu thức liên kết `{queueTrigger}` đại diện cho nội dung thư; sử dụng nó trong đường dẫn liên kết blob sẽ làm cho tên blob bằng nội dung thư.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 341",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/341-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-342",
    "questionNumber": 342,
    "text": "You are developing several microservices to run on Azure Container Apps. External HTTP ingress traffic is enabled for the microservices.  \n  \nThe microservices must be deployed in the same virtual network and write logs to the same Log Analytics workspace.  \n  \nYou need to deploy the microservices.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Enable single revision mode."
      },
      {
        "key": "B",
        "text": "Use a separate environment for each container."
      },
      {
        "key": "C",
        "text": "Use a private container registry image and single image for all containers."
      },
      {
        "key": "D",
        "text": "Use a single environment for all containers."
      },
      {
        "key": "E",
        "text": "Enable multiple revision mode."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Môi trường Azure Container Apps cung cấp ranh giới chung cho các ứng dụng vùng chứa của nó. Các ứng dụng vùng chứa được triển khai trong cùng một môi trường sẽ chia sẻ mạng ảo và sử dụng cùng đích ghi nhật ký Log Analytics, do đó, một môi trường duy nhất đáp ứng cả hai yêu cầu.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 342",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/342-develop-azure-compute-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-343",
    "questionNumber": 343,
    "text": "A company backs up all manufacturing data to Azure Blob Storage. Administrators move blobs from hot storage to the archive tier every month.  \n  \nYou must automatically move blobs to the Archive tier after they have not been modified for 180 days. The path for every item that is not archived must be put in an existing queue. The operation must run automatically once each month. The value of `TierAgeInDays` is set to `-180`.  \n  \nHow should you configure the Logic App? Each trigger or action block can be used once, more than once, or not at all.",
    "questionType": "matching_drag_drop",
    "statements": [
      {
        "id": "slot1",
        "text": "Slot 1:",
        "correctAnswer": "D"
      },
      {
        "id": "slot2",
        "text": "Slot 2:",
        "correctAnswer": "F"
      },
      {
        "id": "slot3",
        "text": "Slot 3:",
        "correctAnswer": "B"
      },
      {
        "id": "slot4",
        "text": "Slot 4:",
        "correctAnswer": "G"
      },
      {
        "id": "slot5",
        "text": "Slot 5:",
        "correctAnswer": "E"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Insert Entity"
      },
      {
        "key": "B",
        "text": "Tier blob"
      },
      {
        "key": "C",
        "text": "When there are messages in a queue"
      },
      {
        "key": "D",
        "text": "Recurrence"
      },
      {
        "key": "E",
        "text": "List blobs 2"
      },
      {
        "key": "F",
        "text": "Condition"
      },
      {
        "key": "G",
        "text": "Put a message on a queue"
      }
    ],
    "choices": [
      {
        "key": "A",
        "text": "Insert Entity"
      },
      {
        "key": "B",
        "text": "Tier blob"
      },
      {
        "key": "C",
        "text": "When there are messages in a queue"
      },
      {
        "key": "D",
        "text": "Recurrence"
      },
      {
        "key": "E",
        "text": "List blobs 2"
      },
      {
        "key": "F",
        "text": "Condition"
      },
      {
        "key": "G",
        "text": "Put a message on a queue"
      }
    ],
    "correctAnswers": [
      "slot1=D",
      "slot2=F",
      "slot3=B",
      "slot4=G",
      "slot5=E"
    ],
    "explanation": "Hoạt động phải chạy tự động mỗi tháng một lần, do đó, trình kích hoạt là Lặp lại. Sau đó, Điều kiện sẽ đánh giá xem mỗi đốm màu có được sửa đổi trong 180 ngày hay không (sử dụng giá trị TierAgeInDays là -180 so với ngày được sửa đổi lần cuối). Nếu điều kiện là đúng, blob đáp ứng ngưỡng lưu trữ và hành động blob Cấp sẽ di chuyển nó tới Archive tier; nếu sai thì mục đó sẽ không được lưu trữ nên đường dẫn của nó sẽ được ghi vào hàng đợi hiện có bằng cách Đặt thư vào hàng đợi. Danh sách các đốm màu 2 tiếp tục liệt kê các đốm màu còn lại. Hàng đợi chỉ nhận đường dẫn của các mục chưa được lưu trữ, phù hợp với yêu cầu.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 343",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/343-develop-for-azure-storage",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-344",
    "questionNumber": 344,
    "text": "You are developing an application that enforces a set of governance policies for internal and external services, as well as for applications.  \n  \nYou develop a stateful ASP.NET Core 2.1 web application named PolicyApp and deploy it to an Azure App Service Web App. PolicyApp responds to events from Azure Event Grid and performs policy actions based on those events.  \n  \nYou have the following requirements:  \n  \n- Authentication events must be used to monitor users as they sign in and sign out.  \n- PolicyApp must process all authentication events.  \n- Sign-outs must be processed as quickly as possible.  \n  \nWhat should you do?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create a new Azure Event Grid subscription for all authentication events. Use the subscription to process sign-out events."
      },
      {
        "key": "B",
        "text": "Create a separate Azure Event Grid handler for sign-in and sign-out events."
      },
      {
        "key": "C",
        "text": "Create separate Azure Event Grid topics and subscriptions for sign-in and sign-out events."
      },
      {
        "key": "D",
        "text": "Add a subject prefix to sign-out events. Create an Azure Event Grid subscription. Configure the subscription to use the subjectBeginsWith filter."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Đăng ký sự kiện Azure Event Grid hỗ trợ lọc tiền tố chủ đề thông qua `subjectBeginsWith`, chỉ cung cấp các sự kiện có chủ đề khớp với tiền tố được định cấu hình. Cung cấp cho các sự kiện đăng xuất một tiền tố chủ đề riêng biệt và đăng ký bằng bộ lọc đó sẽ tách biệt chúng để xử lý trực tiếp, nhanh chóng trong khi quá trình xử lý sự kiện xác thực khác vẫn có sẵn cho PolicyApp.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 344",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/344-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-345",
    "questionNumber": 345,
    "text": "You are building a hazard-notification system with one signaling server that causes audio and visual alarms to start and stop.  \n  \nYou use Azure Service Bus to publish alarms. Each alarm controller uses Azure Service Bus to receive alarm signals within a transaction. Alarm events must be logged for auditing. Each transaction record must contain information about the type of alarm that was activated.  \n  \nYou need to implement a reply-trail auditing solution.  \n  \nWhich two actions should you perform? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Assign the value of the hazard message SessionID property to the ReplyToSessionId property."
      },
      {
        "key": "B",
        "text": "Assign the value of the hazard message MessageId property to the DevileryCount property."
      },
      {
        "key": "C",
        "text": "Assign the value of the hazard message SessionID property to the SequenceNumber property."
      },
      {
        "key": "D",
        "text": "Assign the value of the hazard message MessageId property to the CorrelationId property."
      },
      {
        "key": "E",
        "text": "Assign the value of the hazard message SequenceNumber property to the DeliveryCount property."
      },
      {
        "key": "F",
        "text": "Assign the value of the hazard message MessageId property to the SequenceNumber property."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Định tuyến trả lời Azure Service Bus có thể sử dụng `ReplyToSessionId` để chỉ định mã định danh phiên cho các phản hồi. Một thư trả lời tương ứng với thông báo kích hoạt của nó bằng cách đặt `CorrelationId` của tin nhắn trả lời thành `MessageId` của tin nhắn được xử lý. Điều này bảo tồn dấu vết kiểm tra giữa tín hiệu nguy hiểm ban đầu và phản hồi của từng bộ điều khiển.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 345",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/345-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-346",
    "questionNumber": 346,
    "text": "You are developing a solution using the Azure Event Hubs SDK. You create a standard Azure Event Hub with 16 partitions and implement eight event processor clients.  \n  \nYou must dynamically balance the load when an event processor client fails. When one fails, another event processor must continue processing from the exact point where the failure occurred. All events must be aggregated and uploaded to an Azure Blob storage account.  \n  \nYou need to implement event-processing recovery for the solution.  \n  \nWhich SDK features should you use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Phần bù là vị trí (con trỏ phía máy khách) của một sự kiện trong chuỗi sự kiện của phân vùng, do đó, nó điền vào chỗ trống1, yêu cầu cơ chế xác định vị trí trong chuỗi sự kiện. Điểm kiểm tra được Microsoft định nghĩa là quá trình mà người đọc đánh dấu hoặc cam kết vị trí của họ trong chuỗi sự kiện phân vùng, khớp với Blank2 gần như nguyên văn và là điều cho phép bộ xử lý sự kiện còn sót lại tiếp tục từ điểm chính xác nơi bộ xử lý sự kiện bị lỗi đã dừng. Hai danh sách thả xuống yêu cầu các câu trả lời khác nhau: phần bù là giá trị vị trí, trong khi điểm kiểm tra là cam kết lâu dài của phần bù đó với bộ lưu trữ cho phép khôi phục và cân bằng lại tải, do đó, câu trả lời Điểm kiểm tra cho cả hai đều không chính xác.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 346",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/346-connect-to-and-consume-azure-services-and-third-party-servic",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-347",
    "questionNumber": 347,
    "text": "You are developing several microservices for deployment to a new Azure Kubernetes Service cluster. The microservices manage data stored in Azure Cosmos DB and Azure Blob storage. The data is protected by using customer-managed keys stored in Azure Key Vault.  \n  \nYou must automate rotation for all Azure Key Vault keys while also allowing manual key rotation. Keys must be rotated every three months. Notifications for expiring keys must be sent before the keys expire.  \n  \nYou need to configure key rotation and enable key-expiry notifications.  \n  \nWhich two actions should you take? Each correct answer presents part of the solution.  \n  \nNOTE: Each correct selection is worth one point.",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Create and configure a new Azure Event Grid instance."
      },
      {
        "key": "B",
        "text": "Configure Azure Key Vault alerts."
      },
      {
        "key": "C",
        "text": "Create and assign an Azure Key Vault access policy."
      },
      {
        "key": "D",
        "text": "Create and configure a key rotation policy during key creation."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Chính sách xoay vòng khóa Azure Key Vault có thể lên lịch tự động tạo các phiên bản khóa mới theo một khoảng thời gian xác định và vẫn cho phép xoay vòng theo yêu cầu. Hành động thông báo của nó kích hoạt các sự kiện khóa gần hết hạn Azure Event Grid trước khi hết hạn; định cấu hình Lưới sự kiện cho phép các sự kiện đó được chuyển đến trình xử lý thông báo.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 347",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/347-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-348",
    "questionNumber": 348,
    "text": "You developed a Web App for your company that provides services and must run across multiple regions.  \n  \nYou need notification whenever the Web App consumes more than 85 percent of the available CPU cores during a five-minute period, while minimizing costs.  \n  \nWhich command should you use?",
    "questionType": "multiple_choice",
    "options": [],
    "correctAnswers": [],
    "explanation": "Các điều kiện cảnh báo số liệu sử dụng tên tổng hợp và số liệu, do đó `avg Percentage CPU > 85` đánh giá phần trăm CPU trung bình. `--window-size 5m` định cấu hình cửa sổ tổng hợp năm phút. `--evaluation-frequency` chỉ là nhịp mà quy tắc được đánh giá.",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 348",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/348-monitor-and-troubleshoot-azure-solutions",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  },
  {
    "id": "az204-349",
    "questionNumber": 349,
    "text": "You need to access data from the user claim object in the e-commerce web app.  \n  \nWhat should you do first?",
    "questionType": "multiple_choice",
    "options": [
      {
        "key": "A",
        "text": "Write custom code to make a Microsoft Graph API call from the e-commerce web app."
      },
      {
        "key": "B",
        "text": "Assign the Contributor RBAC role to the e-commerce web app by using the Resource Manager create role assignment API."
      },
      {
        "key": "C",
        "text": "Update the e-commerce web app to read the HTTP request header values."
      },
      {
        "key": "D",
        "text": "Using the Azure CLI, enable Cross-origin resource sharing (CORS) from the e-commerce checkout API to the e-commerce web app."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Xác thực Azure App Service hiển thị các khiếu nại của người dùng đã được xác thực đối với mã ứng dụng trong các tiêu đề yêu cầu HTTP được chèn vào, chẳng hạn như `X-MS-CLIENT-PRINCIPAL`. Ứng dụng phải đọc các tiêu đề đó để lấy và xử lý dữ liệu xác nhận quyền sở hữu. [Work with user identities in Azure App Service authentication](https://learn.microsoft.com/en-us/azure/app-service/configure-authentication-user-identities)",
    "category": "General",
    "tags": [
      "AZ-204",
      "General"
    ],
    "sourceTitle": "Examcademy AZ-204 Question 349",
    "sourceUrl": "https://examcademy.com/exams/microsoft/az-204/q/349-implement-azure-security",
    "lastVerifiedAt": "2026-09-14T14:46:22.820Z"
  }
];
