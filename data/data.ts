type Todo = {
  id: string;
  text: string;
  category: string;
  description: string;
  dueDate: string;
  priority: string;
  assignee: string;
};

type Project = {
  name: string;
  deadline: string;
  tags: string;
  priority: string;
  todos: Todo[];
  id: string;
  projectColor: string;
  projectDescription: string;
};

type ProjectData = Project[];

const ProjectData: ProjectData = [
  {
    name: "Website Redesign",
    deadline: "1/17/2023",
    tags: "Web Design",
    priority: "low",
    todos: [
      {
        id: "16858010897098625",
        text: "Conduct user research to gather insights on user preferences. ",
        category: "inProgress",
        description:
          "Analyze user behavior and preferences through surveys and interviews.",
        dueDate: "2023-02-01",
        priority: "medium",
        assignee: "UX Researcher",
      },
      {
        id: "16858011668055533",
        text: "Develop wireframes and mockups.",
        category: "done",
        description:
          "Create visual representations of the website layout and design elements.",
        dueDate: "2023-02-08",
        priority: "high",
        assignee: "UI Designer",
      },
      {
        id: "1685801211676469",
        text: "Implement responsive website design using HTML, CSS, and JavaScript.",
        category: "inProgress",
        description:
          "Code and build the website's front-end to ensure compatibility across devices.",
        dueDate: "2023-06-15",
        priority: "medium",
        assignee: "Front-end Developer",
      },
      {
        id: "16858012548688385",
        text: "Perform usability testing and iterate on design improvements. ",
        category: "inProgress",
        description:
          "Donec pellentesque rutrum quam non tristique. Quisque mattis cursus efficitur. Praesent dignissim tempus ante vel ultricies. Nullam non arcu venenatis, interdum dolor non, ornare erat. Nulla facilisi.",
        dueDate: "2023-02-24",
        priority: "high",
        assignee: "UX Designer",
      },
      {
        id: "16858012957482295",
        text: "Finalize design elements and prepare the website for launch. ",
        category: "inProgress",
        description:
          "Coordinate the finalization of design assets and oversee the website launch.",
        dueDate: "2023-01-31",
        priority: "high",
        assignee: "Project Manager",
      },
      {
        id: "16858014054191686",
        text: "Test the website",
        category: "todo",
        description:
          "Conduct rigorous testing to ensure the website's functionality, responsiveness, and performance.",
        dueDate: "2023-02-24",
        priority: "high",
        assignee: "Quality Assurance Tester",
      },
      {
        id: "1685801438763983",
        text: "Implement SEO ",
        category: "done",
        description:
          "Ut posuere tellus at nisi fermentum, a dapibus nunc faucibus. Aenean vitae mauris mauris. Sed aliquet eleifend nunc eget pharetra. Nulla in consectetur nisl. Proin vulputate et mi sit amet dapibus. Suspendisse potenti. Ut tincidunt nibh nec aliquam lacinia. Donec sed semper orci.",
        dueDate: "2023-02-22",
        priority: "medium",
        assignee: "SEO Specialist",
      },
    ],
    id: "26235",
    projectColor: "#f43f5e",
    projectDescription:
      "Revamp client's existing website to improve user experience and modernize the design.",
  },
  {
    name: "Mobile App Design",
    deadline: "1/21/2023",
    tags: "Mobile App Design",
    priority: "medium",
    todos: [
      {
        id: "16858016026917432",
        text: "Conduct user research and create user personas. ",
        category: "inProgress",
        description:
          "Gather insights about user needs and preferences through research and persona creation.",
        dueDate: "2023-02-22",
        priority: "medium",
        assignee: " UX Researcher",
      },
      {
        id: "16858016275234123",
        text: "Design wireframes and interactive prototypes. ",
        category: "done",
        description:
          "Develop visual representations and interactive models of the mobile app design.",
        dueDate: "2023-02-28",
        priority: "high",
        assignee: "UI/UX Designer",
      },
      {
        id: "16858016635384680",
        text: "Develop the visual design and user interface elements.",
        category: "todo",
        description:
          "Maecenas sit amet dignissim mi, eget sollicitudin nibh. Vivamus vel dui et dui lobortis rutrum id sit amet nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla tincidunt nunc enim, eget ullamcorper mi tincidunt et. Nullam consequat pulvinar fermentum.",
        dueDate: "2023-02-28",
        priority: "high",
        assignee: "UI Designer",
      },
      {
        id: "16858016926912810",
        text: "Collaborate with developers to ensure design implementation.",
        category: "done",
        description:
          "Work closely with developers to ensure accurate implementation of the app's design.",
        dueDate: "2023-02-25",
        priority: "medium",
        assignee: "Mobile App Developer",
      },
      {
        id: "16858017249704721",
        text: "Conduct usability testing",
        category: "todo",
        description:
          "Test the app's usability and collect feedback from users to refine the design.",
        dueDate: "2023-03-02",
        priority: "low",
        assignee: "UX Researcher",
      },
      {
        id: "16858017582269067",
        text: "Develop visual representations",
        category: "done",
        description:
          "Nulla in consectetur nisl. Proin vulputate et mi sit amet dapibus. Suspendisse potenti. Ut tincidunt nibh nec aliquam lacinia. Donec sed semper orci.",
        dueDate: "2023-02-08",
        priority: "medium",
        assignee: "UI/UX Designer",
      },
    ],
    id: "155606",
    projectColor: "#84cc16",
    projectDescription:
      "Nulla in consectetur nisl. Proin vulputate et mi sit amet dapibus. Suspendisse potenti. Ut tincidunt nibh nec aliquam lacinia. Donec sed semper orci.",
  },
  {
    name: "Content Marketing Strategy",
    deadline: "2/23/2023",
    tags: "Content Marketing",
    priority: "medium",
    todos: [],
    id: "374131",
    projectColor: "#3b82f6",
    projectDescription:
      "Fusce non dui a purus rutrum feugiat non eget mauris. Suspendisse ligula ipsum, ultrices sit amet gravida sed, rhoncus ac sem. Ut posuere tellus at nisi fermentum, a dapibus nunc faucibus. Aenean vitae mauris mauris. Sed aliquet eleifend nunc eget pharetra. Nulla in consectetur nisl. Proin vulputate et mi sit amet dapibus. Suspendisse potenti. Ut tincidunt nibh nec aliquam lacinia. Donec sed semper orci.",
  },
  {
    name: "E-commerce Website Development",
    deadline: "2/16/2023",
    tags: "Web Development",
    priority: "medium",
    todos: [],
    id: "158061",
    projectColor: "#f43f5e",
    projectDescription:
      "Aenean viverra sagittis purus vitae condimentum. Etiam ullamcorper vel velit ac tempor. Aenean interdum et mauris ut congue. Quisque at nisi vitae nibh fringilla pharetra. ",
  },
  {
    name: "Mobile App Design",
    deadline: "2/7/2023",
    tags: "",
    priority: "medium",
    todos: [],
    id: "556196",
    projectColor: "#f59e0b",
    projectDescription:
      "Nulla in consectetur nisl. Proin vulputate et mi sit amet dapibus. Suspendisse potenti. Ut tincidunt nibh nec aliquam lacinia. Donec sed semper orci.",
  },
  {
    name: "Social Media Marketing Campaign",
    deadline: "2/14/2023",
    tags: "Social Media Marketing",
    priority: "high",
    todos: [],
    id: "268763",
    projectColor: "#8b5cf6",
    projectDescription:
      "Create and execute a targeted social media campaign to increase brand awareness and engagement",
  },
  {
    name: "Brand Identity Development",
    deadline: "5/17/2023",
    tags: "Brand",
    priority: "medium",
    todos: [],
    id: "935958",
    projectColor: "#06b6d4",
    projectDescription:
      "Pellentesque tincidunt lorem vitae nisl convallis, nec vestibulum urna vehicula. Fusce semper congue auctor. Maecenas sit amet dignissim mi, eget sollicitudin nibh.",
  },
  {
    name: "App Development",
    deadline: "2/25/2023",
    tags: "Dev",
    priority: "low",
    todos: [],
    id: "900864",
    projectColor: "#3b82f6",
    projectDescription:
      "Develop a mobile application that provides a seamless user experience and valuable features.",
  },
  {
    name: "Pay-Per-Click (PPC) Campaign Optimization",
    deadline: "3/20/2023",
    tags: "PPC",
    priority: "high",
    todos: [],
    id: "738542",
    projectColor: "#ef4444",
    projectDescription:
      "Vivamus vel dui et dui lobortis rutrum id sit amet nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla tincidunt nunc enim, eget ullamcorper mi tincidunt et. Nullam consequat pulvinar fermentum.",
  },
  {
    name: "Social Media Analytics and Reporting",
    deadline: "3/20/2023",
    tags: "Socials",
    priority: "low",
    todos: [],
    id: "821634",
    projectColor: "#d946ef",
    projectDescription:
      "Collect and analyze social media data to provide insights and measure the effectiveness of social media campaigns.",
  },
  {
    name: " Search Engine Marketing (SEM)",
    deadline: "3/28/2023",
    tags: "SEM",
    priority: "high",
    todos: [],
    id: "996718",
    projectColor: "#6b7280",
    projectDescription:
      " Create and manage a search engine marketing campaign to increase website visibility and drive targeted traffic.",
  },
  {
    name: "Social Media Influencer Marketing",
    deadline: "3/31/2023",
    tags: "Socials",
    priority: "high",
    todos: [],
    id: "259384",
    projectColor: "#06b6d4",
    projectDescription:
      "In aliquam lobortis eros, id porttitor lorem lobortis id. Donec imperdiet augue semper massa posuere, id luctus nulla laoreet. Sed ornare pharetra quam eu pretium. Mauris eget elementum elit.",
  },
  {
    name: "Email Newsletter Campaign",
    deadline: "4/19/2023",
    tags: "Mail camps",
    priority: "medium",
    todos: [],
    id: "830557",
    projectColor: "#8b5cf6",
    projectDescription:
      "Cras pharetra mi nec felis placerat pellentesque. Suspendisse bibendum malesuada lectus sit amet sollicitudin. Donec eu velit a justo pharetra euismod nec in elit.",
  },
  {
    name: "Video Production for Social Media",
    deadline: "4/28/2023",
    tags: "Video",
    priority: "low",
    todos: [],
    id: "878986",
    projectColor: "#84cc16",
    projectDescription:
      " Create captivating and shareable videos optimized for social media platforms to enhance brand visibility.",
  },
  {
    name: "E-commerce Platform Development",
    deadline: "10/30/2023",
    tags: "Web Development",
    priority: "high",
    todos: [
      {
        id: "16858010897098626",
        text: "Gather requirements from the client and create a project plan.",
        category: "todo",
        description:
          "Meet with the client to understand their business needs and document the required features and functionalities for the e-commerce platform.",
        dueDate: "2023-07-05",
        priority: "medium",
        assignee: "Business Analyst",
      },
      {
        id: "16858011668055534",
        text: "Design the database schema for the e-commerce platform.",
        category: "inProgress",
        description:
          "Create an efficient and scalable database structure to store product information, customer data, and order details.",
        dueDate: "2023-07-12",
        priority: "high",
        assignee: "Database Architect",
      },
      {
        id: "1685801211676470",
        text: "Develop the front-end interface using ReactJS.",
        category: "todo",
        description:
          "Implement the user interface components and design the layout for the e-commerce platform using ReactJS framework.",
        dueDate: "2023-08-15",
        priority: "high",
        assignee: "Front-end Developer",
      },
      {
        id: "16858012548688386",
        text: "Build the back-end API using Node.js and Express.",
        category: "todo",
        description:
          "Develop the server-side logic and create RESTful APIs to handle product listing, user authentication, and order processing.",
        dueDate: "2023-08-30",
        priority: "high",
        assignee: "Back-end Developer",
      },
      {
        id: "16858012957482296",
        text: "Integrate payment gateway for secure transactions.",
        category: "todo",
        description:
          "Implement a payment gateway integration to allow customers to securely make online payments for their purchases.",
        dueDate: "2023-09-15",
        priority: "medium",
        assignee: "Payment Gateway Specialist",
      },
      {
        id: "16858014054191687",
        text: "Perform extensive testing and bug fixing.",
        category: "todo",
        description:
          "Conduct thorough testing of the e-commerce platform, identify and fix any bugs or issues to ensure a smooth user experience.",
        dueDate: "2023-09-25",
        priority: "high",
        assignee: "Quality Assurance Tester",
      },
      {
        id: "1685801438763984",
        text: "Deploy the e-commerce platform to a production server.",
        category: "todo",
        description:
          "Configure the necessary server infrastructure and deploy the e-commerce platform to a production environment for public access.",
        dueDate: "2023-10-05",
        priority: "high",
        assignee: "DevOps Engineer",
      },
    ],
    id: "26236",
    projectColor: "#4287f5",
    projectDescription:
      "Build a fully functional and secure e-commerce platform for the client to sell their products online.",
  },
  {
    name: "Mobile App Development",
    deadline: "1/31/2023",
    tags: "Mobile Development",
    priority: "medium",
    todos: [
      {
        id: "16858010897098627",
        text: "Define app requirements and target audience.",
        category: "inProgress",
        description:
          "Gather information about the desired features and functionalities of the mobile app and identify the target audience.",
        dueDate: "2023-01-10",
        priority: "medium",
        assignee: "Product Manager",
      },
      {
        id: "16858011668055535",
        text: "Create wireframes and app mockups.",
        category: "inProgress",
        description:
          "Design the visual layout and user interface of the mobile app using wireframing and mockup tools.",
        dueDate: "2023-01-15",
        priority: "high",
        assignee: "UI/UX Designer",
      },
      {
        id: "1685801211676471",
        text: "Develop login and registration functionality.",
        category: "todo",
        description:
          "Implement the user authentication and registration features for the mobile app.",
        dueDate: "2023-01-18",
        priority: "high",
        assignee: "Mobile Developer",
      },
      {
        id: "16858012548688387",
        text: "Integrate API for data retrieval.",
        category: "todo",
        description:
          "Connect the mobile app with the necessary APIs to fetch data from the server or external sources.",
        dueDate: "2023-01-22",
        priority: "medium",
        assignee: "Mobile Developer",
      },
      {
        id: "16858012957482297",
        text: "Implement push notification functionality.",
        category: "todo",
        description:
          "Set up push notifications to enable real-time updates and engagement with app users.",
        dueDate: "2023-01-25",
        priority: "medium",
        assignee: "Mobile Developer",
      },
      {
        id: "16858014054191688",
        text: "Perform unit testing for app components.",
        category: "todo",
        description:
          "Write and execute test cases to ensure the individual components of the app function correctly.",
        dueDate: "2023-01-28",
        priority: "low",
        assignee: "QA Engineer",
      },
      {
        id: "1685801438763985",
        text: "Optimize app performance and responsiveness.",
        category: "todo",
        description:
          "Identify and optimize areas of the app that need improvement in terms of performance and responsiveness.",
        dueDate: "2023-01-29",
        priority: "high",
        assignee: "Mobile Developer",
      },
      {
        id: "16858015012457781",
        text: "Implement user feedback and bug fixes.",
        category: "todo",
        description:
          "Address user feedback and fix any reported bugs or issues in the mobile app.",
        dueDate: "2023-01-30",
        priority: "high",
        assignee: "Mobile Developer",
      },
      {
        id: "16858015243055821",
        text: "Prepare app for app store submission.",
        category: "todo",
        description:
          "Ensure that all necessary app store requirements are met before submitting the app for review and publishing.",
        dueDate: "2023-01-31",
        priority: "medium",
        assignee: "Mobile Developer",
      },
      {
        id: "16858015469377265",
        text: "Create app marketing materials and assets.",
        category: "todo",
        description:
          "Design and prepare marketing materials such as app screenshots, promotional graphics, and app description.",
        dueDate: "2023-01-31",
        priority: "low",
        assignee: "Marketing Specialist",
      }
    ],
    id: "26237",
    projectColor: "#67c55a",
    projectDescription:
      "Develop a mobile app for both iOS and Android platforms to provide a seamless user experience for our customers.",
  },
  {
    name: "Content Management System Development",
    deadline: "3/15/2023",
    tags: "Web Development",
    priority: "high",
    todos: [
      {
        id: "16858010897098628",
        text: "Define system requirements and features.",
        category: "todo",
        description:
          "Gather information about the required features and functionalities of the content management system.",
        dueDate: "2023-02-01",
        priority: "medium",
        assignee: "Product Manager",
      },
      {
        id: "16858011668055536",
        text: "Design the database schema for the CMS.",
        category: "todo",
        description:
          "Create an efficient and scalable database structure to store content, user data, and settings.",
        dueDate: "2023-02-10",
        priority: "high",
        assignee: "Database Architect",
      },
      {
        id: "1685801211676472",
        text: "Develop user authentication and access control.",
        category: "todo",
        description:
          "Implement the functionality to allow users to register, login, and manage their access rights within the CMS.",
        dueDate: "2023-02-15",
        priority: "high",
        assignee: "Back-end Developer",
      },
      {
        id: "16858012548688388",
        text: "Create content creation and editing interfaces.",
        category: "todo",
        description:
          "Design and develop user-friendly interfaces to allow content authors and editors to create and manage content easily.",
        dueDate: "2023-02-20",
        priority: "medium",
        assignee: "Front-end Developer",
      },
      {
        id: "16858012957482298",
        text: "Implement workflow and approval system.",
        category: "todo",
        description:
          "Develop a system to manage content approval processes and workflow based on user roles and permissions.",
        dueDate: "2023-02-25",
        priority: "high",
        assignee: "Back-end Developer",
      },
      {
        id: "16858014054191689",
        text: "Integrate search functionality.",
        category: "todo",
        description:
          "Implement a search feature to allow users to find content easily within the CMS.",
        dueDate: "2023-03-01",
        priority: "medium",
        assignee: "Back-end Developer",
      },
      {
        id: "1685801438763986",
        text: "Set up caching and performance optimization.",
        category: "todo",
        description:
          "Configure caching mechanisms and optimize the CMS for better performance and response times.",
        dueDate: "2023-03-05",
        priority: "high",
        assignee: "DevOps Engineer",
      },
      {
        id: "16858015012457782",
        text: "Perform extensive testing and bug fixing.",
        category: "todo",
        description:
          "Conduct thorough testing of the CMS, identify and fix any bugs or issues to ensure a stable and reliable system.",
        dueDate: "2023-03-10",
        priority: "high",
        assignee: "Quality Assurance Tester",
      },
      {
        id: "16858015243055822",
        text: "Prepare documentation and user guides.",
        category: "todo",
        description:
          "Create comprehensive documentation and user guides to help users understand and utilize the CMS effectively.",
        dueDate: "2023-03-12",
        priority: "low",
        assignee: "Technical Writer",
      },
      {
        id: "16858015469377266",
        text: "Deploy the CMS to a production server.",
        category: "todo",
        description:
          "Configure the necessary server infrastructure and deploy the CMS to a production environment for public access.",
        dueDate: "2023-03-15",
        priority: "high",
        assignee: "DevOps Engineer",
      }
    ],
    id: "26238",
    projectColor: "#f5863f",
    projectDescription:
      "Build a flexible and feature-rich content management system to streamline content creation and management processes.",
  },
  {
    name: "E-commerce Website Development",
    deadline: "2/28/2023",
    tags: "Web Development",
    priority: "high",
    todos: [
      {
        id: "16858010897098629",
        text: "Gather requirements and define website scope.",
        category: "todo",
        description:
          "Meet with stakeholders to gather requirements and define the scope of the e-commerce website project.",
        dueDate: "2023-01-10",
        priority: "high",
        assignee: "Business Analyst",
      },
      {
        id: "16858011668055537",
        text: "Design the website's user interface.",
        category: "todo",
        description:
          "Create visually appealing and user-friendly designs for the website's pages and elements.",
        dueDate: "2023-01-15",
        priority: "high",
        assignee: "UI/UX Designer",
      },
      {
        id: "1685801211676473",
        text: "Develop product listing and search functionality.",
        category: "todo",
        description:
          "Implement features that allow users to browse and search for products on the e-commerce website.",
        dueDate: "2023-01-20",
        priority: "medium",
        assignee: "Back-end Developer",
      },
      {
        id: "16858012548688389",
        text: "Integrate payment gateway for online transactions.",
        category: "todo",
        description:
          "Integrate a secure and reliable payment gateway to facilitate online transactions on the website.",
        dueDate: "2023-01-25",
        priority: "high",
        assignee: "Back-end Developer",
      },
      {
        id: "16858012957482299",
        text: "Implement shopping cart and checkout process.",
        category: "todo",
        description:
          "Develop functionality that allows users to add products to a shopping cart and complete the checkout process.",
        dueDate: "2023-01-30",
        priority: "high",
        assignee: "Back-end Developer",
      },
      {
        id: "16858014054191690",
        text: "Create user registration and authentication system.",
        category: "todo",
        description:
          "Develop user registration and authentication functionality to enable user accounts and secure access to the website.",
        dueDate: "2023-02-05",
        priority: "medium",
        assignee: "Back-end Developer",
      },
      {
        id: "1685801438763987",
        text: "Optimize website performance and loading speed.",
        category: "todo",
        description:
          "Identify and implement optimizations to improve the website's performance and loading speed.",
        dueDate: "2023-02-10",
        priority: "high",
        assignee: "Front-end Developer",
      },
      {
        id: "16858015012457783",
        text: "Implement customer reviews and ratings functionality.",
        category: "todo",
        description:
          "Add features that allow customers to leave reviews and ratings for products on the website.",
        dueDate: "2023-02-15",
        priority: "medium",
        assignee: "Back-end Developer",
      },
      {
        id: "16858015243055823",
        text: "Set up order management and inventory system.",
        category: "todo",
        description:
          "Implement a system to manage orders and track inventory levels for efficient e-commerce operations.",
        dueDate: "2023-02-20",
        priority: "high",
        assignee: "Back-end Developer",
      },
      {
        id: "16858015469377267",
        text: "Perform comprehensive testing and bug fixing.",
        category: "todo",
        description:
          "Conduct extensive testing to identify and fix any issues or bugs in the e-commerce website's functionality.",
        dueDate: "2023-02-25",
        priority: "high",
        assignee: "Quality Assurance Tester",
      },
      {
        id: "16858015688591214",
        text: "Prepare documentation and user guides.",
        category: "todo",
        description:
          "Create detailed documentation and user guides to assist users in navigating and using the e-commerce website.",
        dueDate: "2023-02-28",
        priority: "medium",
        assignee: "Technical Writer",
      },
      {
        id: "16858015911987362",
        text: "Deploy the website to a production server.",
        category: "todo",
        description:
          "Configure the necessary server infrastructure and deploy the e-commerce website to a production environment.",
        dueDate: "2023-02-28",
        priority: "high",
        assignee: "DevOps Engineer",
      }
    ],
    id: "26239",
    projectColor: "#3f6af5",
    projectDescription:
      "Develop a robust and user-friendly e-commerce website to facilitate online shopping for customers.",
  },
  {
    name: "Mobile App Development",
    deadline: "4/30/2023",
    tags: "Mobile Development",
    priority: "medium",
    todos: [
      {
        id: "16858010897098630",
        text: "Define app requirements and target platforms.",
        category: "todo",
        description:
          "Gather and document the requirements for the mobile app and determine the target platforms (iOS, Android, etc.).",
        dueDate: "2023-02-05",
        priority: "medium",
        assignee: "Product Manager",
      },
      {
        id: "16858011668055538",
        text: "Design the app's user interface and user experience.",
        category: "todo",
        description:
          "Create wireframes and design mockups to establish the visual and interactive elements of the mobile app.",
        dueDate: "2023-02-10",
        priority: "high",
        assignee: "UI/UX Designer",
      },
      {
        id: "1685801211676474",
        text: "Implement the app's core functionality and features.",
        category: "todo",
        description:
          "Develop the main features and functionalities of the mobile app, ensuring smooth and efficient performance.",
        dueDate: "2023-02-25",
        priority: "high",
        assignee: "Mobile Developer",
      },
      {
        id: "16858012548688390",
        text: "Integrate third-party APIs for additional functionality.",
        category: "todo",
        description:
          "Incorporate relevant third-party APIs into the app to enhance its capabilities and provide additional services.",
        dueDate: "2023-03-05",
        priority: "medium",
        assignee: "Mobile Developer",
      },
      {
        id: "16858012957482300",
        text: "Implement user authentication and data security measures.",
        category: "todo",
        description:
          "Develop secure user authentication features and ensure the app's data is protected using appropriate security measures.",
        dueDate: "2023-03-15",
        priority: "high",
        assignee: "Mobile Developer",
      },
      {
        id: "16858014054191691",
        text: "Test the app's functionality and user experience.",
        category: "todo",
        description:
          "Conduct thorough testing of the app to identify and fix any bugs or issues affecting its functionality and user experience.",
        dueDate: "2023-03-20",
        priority: "high",
        assignee: "Quality Assurance Tester",
      },
      {
        id: "1685801438763988",
        text: "Optimize the app's performance and responsiveness.",
        category: "todo",
        description:
          "Identify and implement optimizations to improve the app's performance, speed, and responsiveness.",
        dueDate: "2023-03-25",
        priority: "medium",
        assignee: "Mobile Developer",
      },
      {
        id: "16858015012457784",
        text: "Localize the app for different languages and regions.",
        category: "todo",
        description:
          "Adapt the app to support multiple languages and regions to cater to a global user base.",
        dueDate: "2023-03-31",
        priority: "low",
        assignee: "Localization Specialist",
      },
      {
        id: "16858015243055824",
        text: "Prepare app store assets and metadata.",
        category: "todo",
        description:
          "Create compelling app store assets, such as app icons and screenshots, and provide accurate metadata for app store listings.",
        dueDate: "2023-04-05",
        priority: "medium",
        assignee: "Marketing Specialist",
      },
      {
        id: "16858015469377268",
        text: "Deploy the app to app stores.",
        category: "todo",
        description:
          "Prepare the necessary build and deploy the mobile app to the respective app stores (e.g., Apple App Store, Google Play Store).",
        dueDate: "2023-04-10",
        priority: "high",
        assignee: "Mobile Developer",
      },
      {
        id: "16858015688591215",
        text: "Plan and execute app marketing and promotion strategies.",
        category: "todo",
        description:
          "Develop marketing plans and strategies to promote the app and increase user acquisition and engagement.",
        dueDate: "2023-04-15",
        priority: "medium",
        assignee: "Marketing Specialist",
      },
      {
        id: "16858015911987363",
        text: "Monitor app performance and user feedback.",
        category: "todo",
        description:
          "Continuously monitor the app's performance metrics and gather user feedback to identify areas for improvement.",
        dueDate: "2023-04-30",
        priority: "low",
        assignee: "Product Manager",
      }
    ],
    id: "26240",
    projectColor: "#3f99f5",
    projectDescription:
      "Develop a mobile app with engaging features and seamless user experience to cater to the target audience's needs.",
  }
  ,
  {
    name: "Content Management System (CMS) Development",
    deadline: "6/30/2023",
    tags: "Web Development",
    priority: "medium",
    todos: [
      {
        id: "16858010897098631",
        text: "Gather requirements and define CMS functionalities.",
        category: "todo",
        description:
          "Meet with stakeholders to gather requirements and define the functionalities needed in the content management system.",
        dueDate: "2023-04-10",
        priority: "medium",
        assignee: "Business Analyst",
      },
      {
        id: "16858011668055539",
        text: "Design the CMS database schema.",
        category: "todo",
        description:
          "Create the database schema for the CMS, including tables, relationships, and data models.",
        dueDate: "2023-04-15",
        priority: "high",
        assignee: "Database Architect",
      },
      {
        id: "1685801211676475",
        text: "Implement user authentication and authorization.",
        category: "todo",
        description:
          "Develop user authentication and authorization functionality to secure access to the CMS and its features.",
        dueDate: "2023-04-25",
        priority: "high",
        assignee: "Back-end Developer",
      },
      {
        id: "16858012548688391",
        text: "Create content creation and management interfaces.",
        category: "todo",
        description:
          "Build intuitive interfaces that allow users to create, manage, and publish content in the CMS.",
        dueDate: "2023-05-05",
        priority: "medium",
        assignee: "Front-end Developer",
      },
      {
        id: "16858012957482301",
        text: "Implement search functionality for content retrieval.",
        category: "todo",
        description:
          "Integrate search functionality that enables users to find specific content within the CMS.",
        dueDate: "2023-05-15",
        priority: "high",
        assignee: "Back-end Developer",
      },
      {
        id: "16858014054191692",
        text: "Add media management capabilities to the CMS.",
        category: "todo",
        description:
          "Develop features that allow users to upload, organize, and manage media files (images, videos, etc.) within the CMS.",
        dueDate: "2023-05-20",
        priority: "medium",
        assignee: "Full-stack Developer",
      },
      {
        id: "1685801438763989",
        text: "Implement user permissions and role management.",
        category: "todo",
        description:
          "Create a system for managing user roles and permissions to control access and actions within the CMS.",
        dueDate: "2023-05-25",
        priority: "high",
        assignee: "Back-end Developer",
      },
      {
        id: "16858015012457785",
        text: "Perform comprehensive testing and bug fixing.",
        category: "todo",
        description:
          "Conduct extensive testing to identify and fix any issues or bugs in the CMS functionality and user experience.",
        dueDate: "2023-06-15",
        priority: "high",
        assignee: "Quality Assurance Tester",
      }
    ],
    id: "26241",
    projectColor: "#3faaf5",
    projectDescription:
      "Develop a robust and user-friendly content management system (CMS) to streamline content creation and management processes.",
  }
  ,
  {
    name: "Marketing Campaign Launch",
    deadline: "8/15/2023",
    tags: "Marketing",
    priority: "high",
    todos: [
      {
        id: "16858010897098632",
        text: "Define campaign objectives and target audience.",
        category: "todo",
        description:
          "Identify the objectives of the marketing campaign and define the target audience based on market research and analysis.",
        dueDate: "2023-06-01",
        priority: "medium",
        assignee: "Marketing Manager",
      },
      {
        id: "16858011668055540",
        text: "Create compelling campaign messages and visuals.",
        category: "todo",
        description:
          "Develop engaging and persuasive campaign messages and visuals that resonate with the target audience.",
        dueDate: "2023-06-15",
        priority: "high",
        assignee: "Creative Team",
      },
      {
        id: "1685801211676476",
        text: "Plan and execute multi-channel marketing strategies.",
        category: "todo",
        description:
          "Develop a comprehensive marketing plan that includes online and offline channels to reach the target audience effectively.",
        dueDate: "2023-06-30",
        priority: "high",
        assignee: "Marketing Team",
      },
      {
        id: "16858012548688392",
        text: "Launch social media advertising campaigns.",
        category: "todo",
        description:
          "Create and manage social media advertising campaigns to increase brand visibility and generate leads.",
        dueDate: "2023-07-05",
        priority: "medium",
        assignee: "Social Media Specialist",
      },
      {
        id: "16858012957482302",
        text: "Coordinate email marketing campaigns.",
        category: "todo",
        description:
          "Develop and execute targeted email marketing campaigns to engage with leads and nurture customer relationships.",
        dueDate: "2023-07-15",
        priority: "high",
        assignee: "Email Marketing Specialist",
      },
      {
        id: "16858014054191693",
        text: "Organize promotional events and partnerships.",
        category: "todo",
        description:
          "Plan and execute promotional events and partnerships to expand reach and attract potential customers.",
        dueDate: "2023-07-30",
        priority: "medium",
        assignee: "Event Coordinator",
      },
      {
        id: "1685801438763990",
        text: "Monitor campaign performance and analytics.",
        category: "todo",
        description:
          "Track and analyze campaign performance using relevant marketing analytics tools to make data-driven optimizations.",
        dueDate: "2023-08-10",
        priority: "high",
        assignee: "Marketing Analyst",
      }
    ],
    id: "26242",
    projectColor: "#f5d03f",
    projectDescription:
      "Launch a comprehensive marketing campaign to increase brand awareness, generate leads, and drive conversions.",
  },
  {
    name: "Mobile Game Development",
    deadline: "10/31/2023",
    tags: "Game Development",
    priority: "high",
    todos: [
      {
        id: "16858010897098633",
        text: "Conceptualize game mechanics and story.",
        category: "todo",
        description:
          "Develop the core mechanics and storyline for the mobile game, outlining the gameplay and narrative elements.",
        dueDate: "2023-08-01",
        priority: "medium",
        assignee: "Game Designer",
      },
      {
        id: "16858011668055541",
        text: "Create game assets and visual design.",
        category: "todo",
        description:
          "Design and create the game assets, including characters, environments, UI elements, and animations.",
        dueDate: "2023-08-15",
        priority: "high",
        assignee: "Graphic Designer",
      },
      {
        id: "1685801211676477",
        text: "Develop game mechanics and gameplay features.",
        category: "todo",
        description:
          "Implement the game mechanics, controls, and gameplay features to provide an engaging and immersive user experience.",
        dueDate: "2023-09-01",
        priority: "high",
        assignee: "Game Developer",
      },
      {
        id: "16858012548688393",
        text: "Integrate sound and music into the game.",
        category: "todo",
        description:
          "Incorporate sound effects and background music that enhance the game's atmosphere and overall experience.",
        dueDate: "2023-09-15",
        priority: "medium",
        assignee: "Sound Designer",
      },
      {
        id: "16858012957482303",
        text: "Perform game testing and bug fixing.",
        category: "todo",
        description:
          "Conduct thorough testing to identify and fix any bugs or issues in the gameplay, mechanics, and user interface.",
        dueDate: "2023-09-30",
        priority: "high",
        assignee: "Quality Assurance Tester",
      },
      {
        id: "16858014054191694",
        text: "Optimize game performance and load times.",
        category: "todo",
        description:
          "Optimize the game's performance and reduce load times to ensure a smooth and enjoyable gaming experience.",
        dueDate: "2023-10-10",
        priority: "medium",
        assignee: "Game Developer",
      },
      {
        id: "1685801438763991",
        text: "Prepare game for release and distribution.",
        category: "todo",
        description:
          "Package and prepare the game for release on various mobile platforms, such as iOS and Android app stores.",
        dueDate: "2023-10-25",
        priority: "high",
        assignee: "Game Developer",
      }
    ],
    id: "26243",
    projectColor: "#9c3ff5",
    projectDescription:
      "Develop an exciting and captivating mobile game with unique gameplay and stunning visuals to engage players.",
  },
  {
    name: "E-commerce Website Development",
    deadline: "12/31/2023",
    tags: "Web Development",
    priority: "high",
    todos: [
      {
        id: "16858010897098634",
        text: "Gather requirements and define website features.",
        category: "todo",
        description:
          "Meet with stakeholders to gather requirements and define the essential features and functionality of the e-commerce website.",
        dueDate: "2023-09-01",
        priority: "medium",
        assignee: "Business Analyst",
      },
      {
        id: "16858011668055542",
        text: "Design the website's user interface and user experience.",
        category: "todo",
        description:
          "Create a visually appealing and intuitive user interface (UI) design that provides a seamless user experience (UX).",
        dueDate: "2023-09-15",
        priority: "high",
        assignee: "UI/UX Designer",
      },
      {
        id: "1685801211676478",
        text: "Develop the front-end of the e-commerce website.",
        category: "todo",
        description:
          "Code and build the client-side of the e-commerce website using HTML, CSS, and JavaScript to create the interactive user interface.",
        dueDate: "2023-10-15",
        priority: "high",
        assignee: "Front-end Developer",
      },
      {
        id: "16858012548688394",
        text: "Implement the back-end functionality of the website.",
        category: "todo",
        description:
          "Develop the server-side functionality of the e-commerce website, including product management, shopping cart, and payment integration.",
        dueDate: "2023-11-15",
        priority: "medium",
        assignee: "Back-end Developer",
      },
      {
        id: "16858012957482304",
        text: "Integrate secure payment gateways.",
        category: "todo",
        description:
          "Integrate secure and reliable payment gateways to enable customers to make online transactions securely.",
        dueDate: "2023-11-30",
        priority: "high",
        assignee: "Payment Integration Specialist",
      },
      {
        id: "16858014054191695",
        text: "Implement product search and filtering functionality.",
        category: "todo",
        description:
          "Develop a robust product search and filtering system to allow users to find products based on various criteria.",
        dueDate: "2023-12-10",
        priority: "medium",
        assignee: "Back-end Developer",
      },
      {
        id: "1685801438763992",
        text: "Perform extensive testing and bug fixing.",
        category: "todo",
        description:
          "Conduct thorough testing to identify and fix any bugs or issues in the website's functionality, performance, and responsiveness.",
        dueDate: "2023-12-20",
        priority: "high",
        assignee: "Quality Assurance Tester",
      },
      {
        id: "16858015012457786",
        text: "Launch and deploy the e-commerce website.",
        category: "todo",
        description:
          "Deploy the website to a production environment, ensuring it is accessible to users and ready for commercial use.",
        dueDate: "2023-12-31",
        priority: "high",
        assignee: "DevOps Engineer",
      }
    ],
    id: "26244",
    projectColor: "#3ff5c7",
    projectDescription:
      "Develop a fully functional and secure e-commerce website to facilitate online transactions and improve customer shopping experience.",
  },
  {
    name: "Mobile App Development",
    deadline: "6/1/2023",
    tags: "App Development",
    priority: "high",
    todos: [
      {
        id: "16858010897098635",
        text: "Gather app requirements and create a project plan.",
        category: "todo",
        description:
          "Meet with stakeholders to gather app requirements and create a detailed project plan outlining the app's features, design, and development timeline.",
        dueDate: "2023-02-15",
        priority: "medium",
        assignee: "Project Manager",
      },
      {
        id: "16858011668055543",
        text: "Design the app's user interface and user experience.",
        category: "todo",
        description:
          "Create visually appealing and user-friendly designs for the app's interface, ensuring an intuitive and enjoyable user experience.",
        dueDate: "2023-02-28",
        priority: "high",
        assignee: "UI/UX Designer",
      },
      {
        id: "1685801211676479",
        text: "Develop the front-end of the mobile app.",
        category: "todo",
        description:
          "Implement the app's front-end using appropriate technologies, ensuring responsiveness, smooth navigation, and seamless interactions.",
        dueDate: "2023-03-15",
        priority: "high",
        assignee: "Front-end Developer",
      },
      {
        id: "16858012548688395",
        text: "Build the back-end infrastructure and APIs.",
        category: "todo",
        description:
          "Develop the necessary back-end infrastructure and APIs to support the app's functionality, data management, and integration with external services.",
        dueDate: "2023-04-01",
        priority: "medium",
        assignee: "Back-end Developer",
      },
      {
        id: "16858012957482305",
        text: "Integrate third-party services and APIs.",
        category: "todo",
        description:
          "Integrate external services and APIs, such as authentication, payment gateways, and social media platforms, to enhance the app's capabilities.",
        dueDate: "2023-04-15",
        priority: "high",
        assignee: "Integration Specialist",
      },
      {
        id: "16858014054191696",
        text: "Implement app analytics and tracking.",
        category: "todo",
        description:
          "Integrate analytics and tracking tools into the app to gather valuable insights on user behavior, performance, and engagement.",
        dueDate: "2023-04-30",
        priority: "medium",
        assignee: "Analytics Specialist",
      },
      {
        id: "1685801438763993",
        text: "Perform rigorous testing and bug fixing.",
        category: "todo",
        description:
          "Conduct comprehensive testing to identify and fix any bugs or issues, ensuring the app functions smoothly and meets quality standards.",
        dueDate: "2023-05-15",
        priority: "high",
        assignee: "Quality Assurance Tester",
      },
      {
        id: "16858015012457787",
        text: "Prepare the app for deployment and launch.",
        category: "todo",
        description:
          "Prepare the app for deployment by optimizing performance, ensuring compatibility with target platforms, and submitting it to the respective app stores.",
        dueDate: "2023-05-30",
        priority: "high",
        assignee: "Release Manager",
      }
    ],
    id: "26245",
    projectColor: "#ffa500",
    projectDescription:
      "Develop a feature-rich and user-friendly mobile app to cater to the needs of our target audience and provide a seamless mobile experience.",
  },
  {
    name: "Social Media Marketing Campaign",
    deadline: "6/5/2023",
    tags: "Marketing",
    priority: "medium",
    todos: [
      {
        id: "16858010897098636",
        text: "Define campaign goals and target audience.",
        category: "todo",
        description:
          "Determine the goals of the social media marketing campaign and identify the target audience to tailor the campaign's messaging and content.",
        dueDate: "2023-03-01",
        priority: "medium",
        assignee: "Marketing Strategist",
      },
      {
        id: "16858011668055544",
        text: "Create engaging and compelling social media content.",
        category: "todo",
        description:
          "Develop creative and visually appealing content for social media platforms to capture the attention of the target audience and promote brand awareness.",
        dueDate: "2023-03-15",
        priority: "high",
        assignee: "Content Creator",
      },
      {
        id: "1685801211676480",
        text: "Schedule and publish social media posts.",
        category: "todo",
        description:
          "Create a content calendar and schedule social media posts to ensure a consistent and strategic presence on the chosen platforms.",
        dueDate: "2023-03-31",
        priority: "high",
        assignee: "Social Media Manager",
      },
      {
        id: "16858012548688396",
        text: "Engage with the audience and respond to comments/messages.",
        category: "todo",
        description:
          "Monitor social media platforms, respond to audience comments and messages promptly, and engage with followers to build positive relationships and foster brand loyalty.",
        dueDate: "2023-04-15",
        priority: "medium",
        assignee: "Community Manager",
      },
      {
        id: "16858012957482306",
        text: "Run targeted social media ad campaigns.",
        category: "todo",
        description:
          "Create and manage targeted social media advertising campaigns to reach a wider audience, increase brand visibility, and drive desired actions.",
        dueDate: "2023-05-01",
        priority: "high",
        assignee: "Advertising Specialist",
      },
      {
        id: "16858014054191697",
        text: "Track and analyze campaign performance.",
        category: "todo",
        description:
          "Monitor the performance of the social media marketing campaign using analytics tools, track key metrics, and generate reports to evaluate the effectiveness of the campaign and make data-driven optimizations.",
        dueDate: "2023-05-15",
        priority: "medium",
        assignee: "Data Analyst",
      },
      {
        id: "1685801438763994",
        text: "Collaborate with influencers and brand ambassadors.",
        category: "todo",
        description:
          "Identify relevant influencers and brand ambassadors in the industry and establish collaborations or partnerships to amplify the reach and impact of the social media marketing campaign.",
        dueDate: "2023-05-30",
        priority: "medium",
        assignee: "Influencer Manager",
      },
      {
        id: "16858015012457788",
        text: "Evaluate the campaign results and prepare a final report.",
        category: "todo",
        description:
          "Analyze the overall performance and impact of the social media marketing campaign, summarize the results, and prepare a comprehensive report to share with stakeholders.",
        dueDate: "2023-06-05",
        priority: "high",
        assignee: "Marketing Analyst",
      }
    ],
    id: "26255",
    projectColor: "#3cb371",
    projectDescription:
      "Execute a comprehensive social media marketing campaign to increase brand awareness, engage the target audience, and drive conversions for our products and services.",
  },
  {
    name: "Content Creation for Blog",
    deadline: "6/7/2023",
    tags: "Content",
    priority: "medium",
    todos: [
      {
        id: "16858010897098637",
        text: "Research and identify trending topics in the industry.",
        category: "todo",
        description:
          "Conduct research to identify popular and trending topics in the industry to ensure the blog content remains relevant and engaging for the target audience.",
        dueDate: "2023-03-01",
        priority: "medium",
        assignee: "Content Strategist",
      },
      {
        id: "16858011668055545",
        text: "Create an editorial calendar for blog posts.",
        category: "todo",
        description:
          "Develop an editorial calendar that outlines the publishing schedule and topics for each blog post, ensuring a consistent flow of content and timely delivery.",
        dueDate: "2023-03-15",
        priority: "high",
        assignee: "Content Manager",
      },
      {
        id: "1685801211676481",
        text: "Write high-quality and engaging blog articles.",
        category: "todo",
        description:
          "Produce well-researched, informative, and engaging blog articles that provide value to the readers, while aligning with the brand's voice and style guidelines.",
        dueDate: "2023-03-31",
        priority: "high",
        assignee: "Content Writer",
      },
      {
        id: "16858012548688397",
        text: "Proofread and edit blog content.",
        category: "todo",
        description:
          "Review and edit the drafted blog articles for clarity, grammar, spelling, and coherence, ensuring the content meets quality standards before publication.",
        dueDate: "2023-04-15",
        priority: "medium",
        assignee: "Editor",
      },
      {
        id: "16858012957482307",
        text: "Optimize blog posts for SEO.",
        category: "todo",
        description:
          "Implement SEO strategies, including keyword research, on-page optimization, and meta tags optimization, to improve the visibility and search engine ranking of the blog posts.",
        dueDate: "2023-05-01",
        priority: "high",
        assignee: "SEO Specialist",
      },
      {
        id: "16858014054191698",
        text: "Design and create visuals for the blog content.",
        category: "todo",
        description:
          "Create visually appealing graphics, images, or infographics to accompany the blog content and enhance its visual appeal and shareability on social media.",
        dueDate: "2023-05-15",
        priority: "medium",
        assignee: "Graphic Designer",
      },
      {
        id: "1685801438763995",
        text: "Publish and promote the blog posts.",
        category: "todo",
        description:
          "Publish the finalized blog posts on the website, optimize meta tags and descriptions, and promote the content through social media channels and email newsletters.",
        dueDate: "2023-05-30",
        priority: "high",
        assignee: "Content Marketer",
      },
      {
        id: "16858015012457789",
        text: "Monitor and analyze blog performance.",
        category: "todo",
        description:
          "Monitor key metrics such as traffic, engagement, and conversion rates for the blog posts, and analyze the data to gain insights and make data-driven decisions for future content strategies.",
        dueDate: "2023-06-07",
        priority: "medium",
        assignee: "Analytics Specialist",
      }
    ],
    id: "26265",
    projectColor: "#ff69b4",
    projectDescription:
      "Develop and publish high-quality and engaging blog content to educate and inform the target audience, establish thought leadership, and drive organic traffic to the website.",
  },
  {
    name: "E-commerce Website Development",
    deadline: "2023-02-15",
    tags: "Web Development",
    priority: "high",
    todos: [
      {
        id: "16858010897098638",
        text: "Gather requirements and create a project plan.",
        category: "todo",
        description:
          "Conduct meetings with stakeholders to gather requirements for the e-commerce website and create a detailed project plan outlining the tasks, timeline, and resources needed.",
        dueDate: "2023-01-01",
        priority: "high",
        assignee: "Project Manager",
      },
      {
        id: "16858011668055546",
        text: "Design website wireframes and user interface.",
        category: "todo",
        description:
          "Create wireframes and design the user interface for the e-commerce website, ensuring a seamless user experience and intuitive navigation.",
        dueDate: "2023-01-05",
        priority: "medium",
        assignee: "UI/UX Designer",
      },
      {
        id: "1685801211676482",
        text: "Develop front-end functionality using HTML, CSS, and JavaScript.",
        category: "todo",
        description:
          "Code and implement the front-end functionality of the e-commerce website, ensuring responsiveness, compatibility, and optimal performance across devices.",
        dueDate: "2023-01-10",
        priority: "high",
        assignee: "Front-end Developer",
      },
      {
        id: "16858012548688398",
        text: "Build back-end infrastructure and database.",
        category: "todo",
        description:
          "Set up the back-end infrastructure, including server configuration and database management, to support the e-commerce website's functionality and data storage.",
        dueDate: "2023-01-12",
        priority: "medium",
        assignee: "Back-end Developer",
      },
      {
        id: "16858012957482308",
        text: "Integrate payment gateway and shopping cart functionality.",
        category: "todo",
        description:
          "Implement a secure payment gateway and shopping cart functionality, ensuring smooth and secure transactions for customers on the e-commerce website.",
        dueDate: "2023-01-14",
        priority: "high",
        assignee: "Payment Integration Specialist",
      },
      {
        id: "16858014054191699",
        text: "Implement product listing and search functionality.",
        category: "todo",
        description:
          "Set up the product listing and search functionality, allowing customers to easily browse and search for products based on categories, filters, and keywords.",
        dueDate: "2023-01-15",
        priority: "medium",
        assignee: "Product Management",
      },
      {
        id: "1685801438763996",
        text: "Perform extensive testing and bug fixing.",
        category: "todo",
        description:
          "Conduct rigorous testing to identify and fix any bugs, errors, or inconsistencies in the e-commerce website, ensuring a smooth and error-free user experience.",
        dueDate: "2023-01-15",
        priority: "high",
        assignee: "Quality Assurance Tester",
      },
      {
        id: "16858015012457790",
        text: "Deploy the e-commerce website to production servers.",
        category: "todo",
        description:
          "Prepare the e-commerce website for deployment, configure the production servers, and ensure a seamless transition from development to the live environment.",
        dueDate: "2023-01-15",
        priority: "high",
        assignee: "DevOps Engineer",
      }
    ],
    id: "26275",
    projectColor: "#9370db",
    projectDescription:
      "Develop a robust and user-friendly e-commerce website to showcase and sell products online, providing customers with a convenient and secure shopping experience.",
  },
  {
    name: "Mobile App Development",
    deadline: "2023-03-15",
    tags: "Mobile Development",
    priority: "high",
    todos: [
      {
        id: "16858010897098639",
        text: "Define app requirements and features.",
        category: "todo",
        description:
          "Gather requirements and define the key features and functionality for the mobile app, considering user needs, market trends, and business objectives.",
        dueDate: "2023-02-01",
        priority: "high",
        assignee: "Product Manager",
      },
      {
        id: "16858011668055547",
        text: "Design app wireframes and user interface.",
        category: "todo",
        description:
          "Create wireframes and design the user interface for the mobile app, ensuring an intuitive and visually appealing user experience.",
        dueDate: "2023-02-05",
        priority: "medium",
        assignee: "UI/UX Designer",
      },
      {
        id: "1685801211676483",
        text: "Develop front-end of the mobile app using React Native.",
        category: "todo",
        description:
          "Code and implement the front-end of the mobile app using React Native framework, ensuring compatibility and optimal performance on both iOS and Android platforms.",
        dueDate: "2023-02-10",
        priority: "high",
        assignee: "Mobile App Developer",
      },
      {
        id: "16858012548688399",
        text: "Build back-end APIs and server-side functionality.",
        category: "todo",
        description:
          "Develop the back-end APIs and server-side functionality to support data management, user authentication, and integration with external services.",
        dueDate: "2023-02-12",
        priority: "medium",
        assignee: "Backend Developer",
      },
      {
        id: "16858012957482309",
        text: "Integrate third-party APIs for additional features.",
        category: "todo",
        description:
          "Integrate third-party APIs, such as social media login, payment gateway, or map services, to enhance the functionality and user experience of the mobile app.",
        dueDate: "2023-02-14",
        priority: "high",
        assignee: "API Integration Specialist",
      },
      {
        id: "16858014054191700",
        text: "Implement app testing and bug fixing.",
        category: "todo",
        description:
          "Perform rigorous testing to identify and fix any bugs, errors, or usability issues in the mobile app, ensuring a smooth and error-free user experience.",
        dueDate: "2023-02-15",
        priority: "medium",
        assignee: "Quality Assurance Tester",
      },
      {
        id: "1685801438763997",
        text: "Prepare app for release and submission to app stores.",
        category: "todo",
        description:
          "Prepare the mobile app for release, including finalizing app store assets, generating release builds, and ensuring compliance with app store guidelines.",
        dueDate: "2023-02-15",
        priority: "high",
        assignee: "Release Manager",
      },
      {
        id: "16858015012457791",
        text: "Deploy the app to production servers and app stores.",
        category: "todo",
        description:
          "Deploy the mobile app to production servers and publish it on the respective app stores, ensuring a seamless distribution to users.",
        dueDate: "2023-02-15",
        priority: "high",
        assignee: "DevOps Engineer",
      }
    ],
    id: "26285",
    projectColor: "#ffa500",
    projectDescription:
      "Develop a feature-rich and user-friendly mobile app to cater to the growing mobile audience, providing them with a convenient and engaging experience on their smartphones.",
  },
  {
    name: "Social Media Marketing Campaign",
    deadline: "2023-04-15",
    tags: "Marketing",
    priority: "medium",
    todos: [
      {
        id: "16858010897098640",
        text: "Define campaign goals and target audience.",
        category: "todo",
        description:
          "Define the goals and objectives of the social media marketing campaign, as well as identify the target audience and key performance indicators (KPIs) for measuring success.",
        dueDate: "2023-03-01",
        priority: "high",
        assignee: "Marketing Manager",
      },
      {
        id: "16858011668055548",
        text: "Create content calendar and plan social media posts.",
        category: "todo",
        description:
          "Develop a content calendar outlining the topics, themes, and posting schedule for social media platforms, ensuring a consistent and engaging presence throughout the campaign.",
        dueDate: "2023-03-05",
        priority: "medium",
        assignee: "Content Strategist",
      },
      {
        id: "1685801211676484",
        text: "Design visual assets for social media posts.",
        category: "todo",
        description:
          "Create visually appealing and on-brand graphics, images, and videos to accompany the social media posts, capturing the attention of the target audience and driving engagement.",
        dueDate: "2023-03-10",
        priority: "high",
        assignee: "Graphic Designer",
      },
      {
        id: "16858012548688400",
        text: "Craft compelling copy and captions for social media posts.",
        category: "todo",
        description:
          "Write persuasive and engaging copy and captions for the social media posts, conveying key messages, promoting offers, and encouraging audience interaction and participation.",
        dueDate: "2023-03-12",
        priority: "medium",
        assignee: "Copywriter",
      },
      {
        id: "16858012957482310",
        text: "Schedule and publish social media posts.",
        category: "todo",
        description:
          "Utilize social media management tools to schedule and publish the prepared content across various social media platforms, ensuring timely and consistent delivery of posts.",
        dueDate: "2023-03-14",
        priority: "high",
        assignee: "Social Media Manager",
      },
      {
        id: "16858014054191701",
        text: "Monitor and engage with audience comments and messages.",
        category: "todo",
        description:
          "Regularly monitor social media platforms for audience comments, messages, and mentions, and proactively engage with the audience by responding, addressing concerns, and fostering positive interactions.",
        dueDate: "2023-03-15",
        priority: "medium",
        assignee: "Community Manager",
      },
      {
        id: "1685801438763998",
        text: "Analyze campaign performance and adjust strategies.",
        category: "todo",
        description:
          "Analyze the performance of the social media marketing campaign by tracking key metrics and KPIs, and make data-driven adjustments and optimizations to improve results and achieve campaign goals.",
        dueDate: "2023-03-15",
        priority: "high",
        assignee: "Data Analyst",
      },
      {
        id: "16858015012457792",
        text: "Generate campaign performance reports.",
        category: "todo",
        description:
          "Compile and generate comprehensive reports on the social media campaign performance, highlighting key insights, achievements, and areas for improvement.",
        dueDate: "2023-03-15",
        priority: "medium",
        assignee: "Marketing Analyst",
      }
    ],
    id: "26295",
    projectColor: "#008080",
    projectDescription:
      "Launch a targeted and engaging social media marketing campaign to increase brand awareness, drive website traffic, and generate leads, leveraging the power of various social media platforms.",
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
];

export default ProjectData;