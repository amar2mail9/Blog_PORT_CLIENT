export const blogData = [
  {
    title: "Understanding JavaScript Closures",
    slug: "understanding-javascript-closures",
    content:
      "A closure is a function that remembers the variables from its lexical scope even when the function is executed outside that scope...",
    expertContent:
      "Closures are essential for data privacy and callback functions in JavaScript. They help in functional programming paradigms and maintaining state without polluting the global scope.",
    category: "Programming",
    tags: ["JavaScript", "Closures", "Web Development"],
    author: { id: "65f2b3a7d4e3b9c8f1a4b7d2", name: "John Doe" },
    featuredImage:
      "https://dmitripavlutin.com/static/00b6ed6d91a74c2e4ca5096e2d541dd7/59014/cover-5.png",
    publishedAt: "2025-03-17T12:30:00Z",
    updatedAt: "2025-03-17T14:00:00Z",
    status: "published",
    views: 1500,
    likes: 250,
    comments: [],
  },
  {
    title: "What is the difference between var, let, and const?",
    slug: "difference-var-let-const",
    content:
      "Understanding the differences between var, let, and const is crucial for writing reliable JavaScript code...",
    expertContent:
      "Use 'let' and 'const' over 'var' to avoid scope-related issues. 'const' is for values that shouldn't change, while 'let' is for variables that might be reassigned.",
    category: "JavaScript",
    tags: ["var", "let", "const", "ES6"],
    author: { id: "65f2b3a7d4e3b9c8f1a4b7d2", name: "John Doe" },
    featuredImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSikYb-FZgJ6RCVngcFloIlNstvQWwFJTC8w&s",
    publishedAt: "2025-03-18T10:00:00Z",
    updatedAt: "2025-03-18T11:00:00Z",
    status: "published",
    views: 1300,
    likes: 220,
    comments: [],
  },
  {
    title: "What is the Virtual DOM in React?",
    slug: "virtual-dom-react",
    content:
      "The Virtual DOM is a lightweight JavaScript representation of the actual DOM...",
    expertContent:
      "React uses the Virtual DOM to optimize rendering performance by updating only the changed parts instead of the entire DOM tree.",
    category: "React.js",
    tags: ["React", "Virtual DOM", "Optimization"],
    author: { id: "65f2c4a8b9d1e5f2b6e7d3a9", name: "Alice Johnson" },
    featuredImage:
      "https://media.licdn.com/dms/image/v2/D5612AQHrTcE_Vu_qjQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1694674429966?e=2147483647&v=beta&t=WcS_3i23wxUd-Mk8FUD5NFISCp8hzNgZeTWT5IGEs6o",
    publishedAt: "2025-03-14T09:00:00Z",
    updatedAt: "2025-03-14T10:30:00Z",
    status: "published",
    views: 1700,
    likes: 350,
    comments: [],
  },
  {
    title: "What is Redux, and why is it used in React applications?",
    slug: "redux-in-react",
    content:
      "Redux is a state management library used in React applications to manage global state...",
    expertContent:
      "Redux provides a single source of truth for state, making it easier to manage complex application data flow with predictable state updates.",
    category: "Redux",
    tags: ["Redux", "State Management", "React"],
    author: { id: "65f4b6d8c2a9f1e3d7b5c4f2", name: "Olivia White" },
    featuredImage:
      "https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif",
    publishedAt: "2025-03-12T10:30:00Z",
    updatedAt: "2025-03-13T12:00:00Z",
    status: "published",
    views: 1800,
    likes: 370,
    comments: [],
  },
  {
    title: "What are RESTful APIs, and how do they work?",
    slug: "restful-api-intro",
    content:
      "RESTful APIs follow REST principles and allow communication between client and server...",
    expertContent:
      "A RESTful API uses HTTP methods (GET, POST, PUT, DELETE) and follows stateless principles to ensure scalability and efficiency.",
    category: "Web Development",
    tags: ["REST", "API", "Backend"],
    author: { id: "65f3d4b9c8f1a4b7d2e5c6f3", name: "Michael Smith" },
    featuredImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQedPx-0aQN3yjMTeeHBnX7EG4ty63UblERcg&s",
    publishedAt: "2025-03-11T11:45:00Z",
    updatedAt: "2025-03-11T13:30:00Z",
    status: "published",
    views: 1600,
    likes: 290,
    comments: [],
  },
  {
    title: "What is the difference between GET and POST requests?",
    slug: "get-vs-post",
    content:
      "GET and POST are two of the most commonly used HTTP methods, but they serve different purposes...",
    expertContent:
      "GET is used to retrieve data without modifying it, while POST is used to send data to the server for processing.",
    category: "Web Development",
    tags: ["GET", "POST", "HTTP Methods"],
    author: { id: "65f2c7e5b9d4a8f1e3d5c6b2", name: "Emma Wilson" },
    featuredImage:
      "https://www.baeldung.com/wp-content/uploads/sites/4/2023/01/Cache-GET-POST.jpg",
    publishedAt: "2025-03-09T08:20:00Z",
    updatedAt: "2025-03-09T09:40:00Z",
    status: "published",
    views: 1400,
    likes: 260,
    comments: [],
  },
  {
    title: "Introduction to TypeScript: Why Use It?",
    slug: "introduction-to-typescript",
    content:
      "TypeScript is a superset of JavaScript that adds static typing to the language...",
    expertContent:
      "TypeScript helps catch errors during development, improves code readability, and enhances tooling support for large-scale applications.",
    category: "Programming",
    tags: ["TypeScript", "JavaScript", "Web Development"],
    author: { id: "65f2b3a7d4e3b9c8f1a4b7d2", name: "John Doe" },
    featuredImage:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1673516184719/42ba3fbe-c592-4c63-ba76-5f874d5e57a4.png",
    publishedAt: "2025-03-20T08:00:00Z",
    updatedAt: "2025-03-20T09:30:00Z",
    status: "published",
    views: 1200,
    likes: 200,
    comments: [],
  },
  {
    title: "How to Use Async/Await in JavaScript",
    slug: "async-await-javascript",
    content:
      "Async/await is a modern way to handle asynchronous operations in JavaScript...",
    expertContent:
      "Async/await simplifies asynchronous code, making it look synchronous and easier to debug compared to traditional promise chains.",
    category: "JavaScript",
    tags: ["Async/Await", "JavaScript", "Promises"],
    author: { id: "65f2c4a8b9d1e5f2b6e7d3a9", name: "Alice Johnson" },
    featuredImage:
      "https://media2.dev.to/dynamic/image/width=1280,height=720,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F212kaxcr0jk7j1tg79uo.png",
    publishedAt: "2025-03-19T07:00:00Z",
    updatedAt: "2025-03-19T08:15:00Z",
    status: "published",
    views: 1100,
    likes: 180,
    comments: [],
  },
  {
    title: "What is Node.js and Why Should You Use It?",
    slug: "introduction-to-nodejs",
    content:
      "Node.js is a runtime environment that allows you to run JavaScript on the server...",
    expertContent:
      "Node.js is known for its non-blocking I/O model, making it ideal for building scalable and high-performance applications.",
    category: "Node.js",
    tags: ["Node.js", "JavaScript", "Backend"],
    author: { id: "65f4b6d8c2a9f1e3d7b5c4f2", name: "Olivia White" },
    featuredImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8vcPSyNO8rQQOgXM__cZtpIxsz5lgQPGnJQ&s",
    publishedAt: "2025-03-16T06:00:00Z",
    updatedAt: "2025-03-16T07:30:00Z",
    status: "published",
    views: 1000,
    likes: 170,
    comments: [],
  },
  {
    title: "What is GraphQL and How Does It Work?",
    slug: "introduction-to-graphql",
    content:
      "GraphQL is a query language for APIs that allows clients to request exactly the data they need...",
    expertContent:
      "GraphQL reduces over-fetching and under-fetching of data, providing a more efficient and flexible alternative to REST APIs.",
    category: "GraphQL",
    tags: ["GraphQL", "API", "Web Development"],
    author: { id: "65f3d4b9c8f1a4b7d2e5c6f3", name: "Michael Smith" },
    featuredImage:
      "https://cdn.prod.website-files.com/5ff66329429d880392f6cba2/66e8369278e154217b4474ad_614841249e5f844b0c7550d1_REST%2520vs%2520GraphQL.png",
    publishedAt: "2025-03-15T05:00:00Z",
    updatedAt: "2025-03-15T06:45:00Z",
    status: "published",
    views: 900,
    likes: 150,
    comments: [],
  },
  {
    title: "What is Docker and Why Should You Use It?",
    slug: "introduction-to-docker",
    content:
      "Docker is a platform that allows you to containerize applications for easy deployment...",
    expertContent:
      "Docker ensures consistency across environments, simplifies dependency management, and improves scalability.",
    category: "DevOps",
    tags: ["Docker", "Containers", "DevOps"],
    author: { id: "65f2c7e5b9d4a8f1e3d5c6b2", name: "Emma Wilson" },
    featuredImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfOvpjjuzH9HeUBDDQ1Mk88n0dq-RbZYmS4A&s",
    publishedAt: "2025-03-10T04:00:00Z",
    updatedAt: "2025-03-10T05:20:00Z",
    status: "published",
    views: 800,
    likes: 140,
    comments: [],
  },
  {
    title: "What is Kubernetes and How Does It Work?",
    slug: "introduction-to-kubernetes",
    content:
      "Kubernetes is an open-source platform for automating containerized application deployment...",
    expertContent:
      "Kubernetes simplifies scaling, load balancing, and self-healing for containerized applications.",
    category: "DevOps",
    tags: ["Kubernetes", "Containers", "DevOps"],
    author: { id: "65f2b3a7d4e3b9c8f1a4b7d2", name: "John Doe" },
    featuredImage: "https://i.ytimg.com/vi/TlHvYWVUZyc/maxresdefault.jpg",
    publishedAt: "2025-03-08T03:00:00Z",
    updatedAt: "2025-03-08T04:30:00Z",
    status: "published",
    views: 700,
    likes: 130,
    comments: [],
  },
  {
    title: "What is CI/CD and Why Is It Important?",
    slug: "introduction-to-ci-cd",
    content:
      "CI/CD stands for Continuous Integration and Continuous Deployment...",
    expertContent:
      "CI/CD pipelines automate testing and deployment, ensuring faster and more reliable software delivery.",
    category: "DevOps",
    tags: ["CI/CD", "DevOps", "Automation"],
    author: { id: "65f2c4a8b9d1e5f2b6e7d3a9", name: "Alice Johnson" },
    featuredImage:
      "https://media.licdn.com/dms/image/v2/C4D12AQENBd0yPYAYmA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1579305236455?e=2147483647&v=beta&t=1mpNpHdpBRI7X1IeqH6d5xTucTInxgnN1565i41udQU",
    publishedAt: "2025-03-07T02:00:00Z",
    updatedAt: "2025-03-07T03:15:00Z",
    status: "published",
    views: 600,
    likes: 120,
    comments: [],
  },
  {
    title: "What is Machine Learning?",
    slug: "introduction-to-machine-learning",
    content:
      "Machine learning is a subset of artificial intelligence that enables systems to learn from data...",
    expertContent:
      "Machine learning algorithms improve over time by identifying patterns and making data-driven predictions.",
    category: "Machine Learning",
    tags: ["Machine Learning", "AI", "Data Science"],
    author: { id: "65f4b6d8c2a9f1e3d7b5c4f2", name: "Olivia White" },
    featuredImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJUE5pntnadgR-eLd5ygo3XzLLJblrkFukvw&s",
    publishedAt: "2025-03-06T01:00:00Z",
    updatedAt: "2025-03-06T02:30:00Z",
    status: "published",
    views: 500,
    likes: 110,
    comments: [],
  },
  {
    title: "What is Deep Learning?",
    slug: "introduction-to-deep-learning",
    content:
      "Deep learning is a subset of machine learning that uses neural networks to model complex patterns...",
    expertContent:
      "Deep learning excels in tasks like image recognition, natural language processing, and speech recognition.",
    category: "Machine Learning",
    tags: ["Deep Learning", "Neural Networks", "AI"],
    author: { id: "65f3d4b9c8f1a4b7d2e5c6f3", name: "Michael Smith" },
    featuredImage:
      "https://builtin.com/sites/www.builtin.com/files/2022-04/what-is-deep-learning.png",
    publishedAt: "2025-03-05T00:00:00Z",
    updatedAt: "2025-03-05T01:45:00Z",
    status: "published",
    views: 400,
    likes: 100,
    comments: [],
  },
  {
    title: "What is Blockchain Technology?",
    slug: "introduction-to-blockchain",
    content:
      "Blockchain is a decentralized ledger technology that ensures secure and transparent transactions...",
    expertContent:
      "Blockchain is the backbone of cryptocurrencies like Bitcoin and enables smart contracts and decentralized applications.",
    category: "Blockchain",
    tags: ["Blockchain", "Cryptocurrency", "Decentralization"],
    author: { id: "65f2c7e5b9d4a8f1e3d5c6b2", name: "Emma Wilson" },
    featuredImage:
      "https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg",
    publishedAt: "2025-03-04T23:00:00Z",
    updatedAt: "2025-03-05T00:30:00Z",
    status: "published",
    views: 300,
    likes: 90,
    comments: [],
  },
  {
    title: "What is Cybersecurity and Why Is It Important?",
    slug: "introduction-to-cybersecurity",
    content:
      "Cybersecurity involves protecting systems, networks, and data from digital attacks...",
    expertContent:
      "Cybersecurity is critical for safeguarding sensitive information and ensuring business continuity.",
    category: "Cybersecurity",
    tags: ["Cybersecurity", "Data Protection", "Networking"],
    author: { id: "65f2b3a7d4e3b9c8f1a4b7d2", name: "John Doe" },
    featuredImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyJ_C54Kq5YmuCBI4hvNfwA_oLtvnM9t5vMg&s",
    publishedAt: "2025-03-03T22:00:00Z",
    updatedAt: "2025-03-03T23:15:00Z",
    status: "published",
    views: 200,
    likes: 80,
    comments: [],
  },
  {
    title: "What is Big Data?",
    slug: "introduction-to-big-data",
    content:
      "<p><strong>Big Data</strong> refers to large volumes of structured, semi-structured, and unstructured data that is collected and analyzed to extract meaningful insights. The concept of Big Data is often defined by the three Vs:</p><h2>1. Volume</h2><p>Big Data involves enormous amounts of data generated every second from various sources like social media, sensors, transactions, and more.</p><h2>2. Velocity</h2><p>The speed at which data is generated, collected, and processed is crucial. Real-time or near real-time processing is a key characteristic of Big Data.</p><h2>3. Variety</h2><p>Big Data includes different data types: structured (databases), semi-structured (XML, JSON), and unstructured (videos, images, social media posts).</p><h2>Applications of Big Data</h2><p>Big Data is used in various industries, including:</p><ul><li><strong>Healthcare:</strong> Disease prediction and personalized treatment.</li><li><strong>Finance:</strong> Fraud detection and risk management.</li><li><strong>E-commerce:</strong> Customer behavior analysis and recommendation systems.</li><li><strong>Social Media:</strong> Sentiment analysis and targeted advertising.</li></ul><h2>Conclusion</h2><p>Big Data is transforming industries by enabling data-driven decision-making. With advancements in technologies like AI, ML, and cloud computing, the future of Big Data looks promising.</p>",
    expertContent:
      "Big data technologies enable businesses to extract valuable insights and make data-driven decisions.",
    category: "Data Science",
    tags: ["Big Data", "Data Science", "Analytics"],
    author: { id: "65f2c4a8b9d1e5f2b6e7d3a9", name: "Alice Johnson" },
    featuredImage:
      "https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2018/06/Feature-Image-What-is-Big-Data.png",
    publishedAt: "2025-03-02T21:00:00Z",
    updatedAt: "2025-03-02T22:30:00Z",
    status: "published",
    views: 100,
    likes: 70,
    comments: [],
  },
  {
    title: "What is Data Science?",
    slug: "introduction-to-data-science",
    content:
      "<p><strong>Data Science</strong> is an interdisciplinary field that combines statistics, programming, and domain knowledge to extract insights from structured and unstructured data.</p><h2>Key Components of Data Science</h2><ul><li><strong>Data Collection:</strong> Gathering raw data from various sources such as databases, web scraping, IoT devices.</li><li><strong>Data Cleaning:</strong> Preprocessing and transforming data to remove inconsistencies and missing values</li><li><strong>Data Analysis:</strong> Using statistical techniques to understand patterns and trends in the data.</li><li><strong>Machine Learning:</strong> Applying algorithms to make predictions and automate decision-making.</li><li><strong>Data Visualization:</strong> Presenting insights using graphs, charts, and dashboards.</li></ul><h2>Applications of Data Science</h2><ul><li><strong>Healthcare:</strong> Predicting diseases and improving patient care.</li><li><strong>Finance:</strong> Fraud detection and risk assessment.</li><li><strong>Marketing:</strong> Customer segmentation and targeted advertising.</li><li><strong>Social Media:</strong> Sentiment analysis and content recommendations.</li></ul><h2>Conclusion</h2><p>Data Science is revolutionizing industries by turning raw data into actionable insights. As technology evolves, the demand for data scientists continues to grow.</p>",
    expertContent:
      "Data science combines statistics, programming, and domain expertise to solve complex problems.",
    category: "Data Science",
    tags: ["Data Science", "Machine Learning", "Analytics"],
    author: { id: "65f4b6d8c2a9f1e3d7b5c4f2", name: "Olivia White" },
    featuredImage:
      "https://cdn.prod.website-files.com/63ccf2f0ea97be12ead278ed/644a18b637053fa3709c5ba2_what-is-data-science.jpg",
    publishedAt: "2025-03-01T20:00:00Z",
    updatedAt: "2025-03-01T21:45:00Z",
    status: "published",
    views: 50,
    likes: 60,
    comments: [],
  },
];
