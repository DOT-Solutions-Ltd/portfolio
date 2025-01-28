export const navLinks = [
    {
        id: 1,
        pageName: "Home",
        path: "/"
    },
    {
        id: 2,
        pageName: "Our Services",
        path: "/services"
    },
    {
        id: 3,
        pageName: "Our Work",
        path: "/works"
    },
    {
        id: 4,
        pageName: "About Us",
        path: "/about"
    }
];

// Replace static imports with dynamic imports
const imageImports = {
    TeamPic1: () => import('./assets/team-pic1.png'),
    TeamPic2: () => import('./assets/team-pic2.png'),
    TeamPic3: () => import('./assets/team-pic3.png'),
    TeamPic4: () => import('./assets/team-pic4.png'),
    TeamPic5: () => import('./assets/team-pic5.png'),
    TeamPic6: () => import('./assets/abiloye2.png'),
    TeamPic7: () => import('./assets/new-bnh.png'),
    Portfolio2: () => import('./assets/ow-image2.png'),
    Portfolio3: () => import('./assets/ow-image4.png'),
    Portfolio4: () => import('./assets/ow-image6.png'),
    Portfolio5: () => import('./assets/ow-image19.png'),
    Portfolio6: () => import('./assets/ow-image3.png'),
    Portfolio7: () => import('./assets/ow-image18.jpeg'),
    Portfolio8: () => import('./assets/ow-image20.webp'),
    Portfolio9: () => import('./assets/ow-image21.png'),
    Portfolio10: () => import('./assets/ow-image22.png'),
    Portfolio11: () => import('./assets/ow-image12.jpeg'),
    Portfolio12: () => import('./assets/Screenshot (157).png'),
    Portfolio13: () => import('./assets/Screenshot (198).png')
};

// Update the team array to use dynamic imports
export const team = [
    {
        id: 1,
        image: imageImports.TeamPic1,
        name: "Daniel Fasiku",
        title: "co-founder/chief executive officer (CEO & CPA)"
    },
    {
        id: 2,
        image: imageImports.TeamPic2,
        name: "julius niyi-onifade",
        title: "co-founder/ president & chief operations officer (COO)"
    },
    {
        id: 3,
        image: imageImports.TeamPic3,
        name: "oladipupo laleye",
        title: "co-founder/ chief product designer"
    },
    {
        id: 4,
        image: imageImports.TeamPic4,
        name: "bamtefa todimu",
        title: "chief information technology officer"
    },
    {
        id: 5,
        image: imageImports.TeamPic5,
        name: "ajayi boluwatife",
        title: "chief technology officer"
    },
    {
        id: 6,
        image: imageImports.TeamPic6,
        name: "Mogbeyiteren Abiloye",
        title: "Chief Information Security Officer"
    },
    {
        id: 7,
        image: imageImports.TeamPic7,
        name: "Nyor Hephzibah Iwanger",
        title: "Vice President, Product Quality Assurance"
    }
];

export const faqData1 = [
    {
        id: 1,
        question: "What services does DOT provide?",
        isOpen: false,
        answer: "We offer a wide range of services including the development of intuitive websites, powerful native mobile apps, and robust ERP (Enterprise Resource Planning) software. We also specialize in SaaS (Software as a Service) solutions tailored to help businesses optimize their operations, drive productivity, and adapt to changing market needs."
    },
    {
        id: 2,
        question: "How does DOT help enterprises enhance operational efficiency?",
        isOpen: false,
        answer: "We focus on building customized software solutions that streamline core business processes, automate repetitive tasks, and integrate systems to improve overall efficiency. By optimizing workflows and reducing manual errors, our solutions empower businesses to operate more effectively and with greater speed."
    },
    {
        id: 3,
        question: "What industries does DOT specialize in?",
        isOpen: false,
        answer: "While our solutions are adaptable to various industries, we primarily serve enterprises in sectors such as manufacturing, retail, logistics, healthcare, and financial services. Our flexible approach allows us to tailor our services to meet the unique needs of different businesses."
    },
    {
        id: 4,
        question: "What technologies does DOT use to build software solutions?",
        isOpen: false,
        answer: "We leverage cutting-edge technologies including React for websites, React Native for mobile apps, Node.js for backend development, and MongoDB for database management. For ERP and SaaS solutions, we use scalable cloud technologies and robust security protocols to ensure reliability and performance."
    },
    {
        id: 5,
        question: "Can DOT customize solutions based on our unique business requirements?",
        isOpen: false,
        answer: "Absolutely! We pride ourselves on delivering fully customized solutions. We work closely with each client to understand their specific needs, challenges, and goals, then tailor our software to optimize their operations and support their business growth."
    },
];

export const faqData2 = [
    {
        id: 6,
        question: "How does our SaaS solutions help businesses adapt to market changes?",
        isOpen: false,
        answer: "Our SaaS solutions provide businesses with flexible, cloud-based tools that can easily scale as the company grows or as market conditions change. They help organizations stay agile, streamline workflows, and make data-driven decisions, which is crucial for adapting to fast-evolving markets."
    },
    {
        id: 7,
        question: "What is DOT's approach to ensuring software quality and reliability?",
        isOpen: false,
        answer: "We follow industry best practices for software development, including continuous integration, thorough testing, and regular updates. Our commitment to quality ensures that all solutions are reliable, secure, and able to perform optimally even in high-demand environments."
    },
    {
        id: 8,
        question: "How long does it take to build a custom solution for my business?",
        isOpen: false,
        answer: "The timeline depends on the complexity and scope of the project. On average, a custom website or mobile app can take between 6 to 12 weeks, while more complex ERP systems and SaaS applications may take longer. We provide detailed timelines during the project planning phase."
    },
    {
        id: 9,
        question: "Does DOT provide ongoing support after the solution is deployed?",
        isOpen: false,
        answer: "Yes, we offer comprehensive post-launch support, including maintenance, updates, and troubleshooting. Our goal is to ensure that your software remains functional, secure, and efficient over the long term."
    },
    {
        id: 10,
        question: "How does DOT foster innovation within enterprises?",
        isOpen: false,
        answer: "We empower enterprises by providing them with the latest digital tools and platforms that encourage creativity and innovation. Our solutions allow businesses to experiment with new ideas, automate tasks, and harness data analytics to make informed decisions, helping them stay ahead in a competitive market."
    }
];

export const portfolioData = [
    {
        id: 1,
        image: imageImports.Portfolio2,
        title: "Blackcopper Website",
        content: "The Official Website Of Blackcopper Services Limited, built with amazing user interface",
        devTags: [
            {tag: "Vue.js"},
            {tag: "Tailwind CSS"},
            {tag: "Sanity CMS"},
            {tag: "Website"}
        ],
        projectLink: "https://blackcopper.io/",
        sourceCode: "",
        backgroundColor: "#2A69FC"
    },
    {
        id: 2,
        image: imageImports.Portfolio3,
        title: "Aiden Dashboard Web Application",
        content: "In This admin dashboard for aiden Restaurant owners and administrators can efficiently oversee menu items, table configurations, user roles, schedules, and more, the dashboard offers a great platform for streamlined restaurant management.",
        devTags: [
            { tag: "React.js" },
            { tag: "Redux" },
            { tag: "ShardCN" },
            { tag: "Tailwind CSS" },
            { tag: "Tanstack Query" },
            { tag: "Web Application"}
        ],
        projectLink: "https://aiden-web.vercel.app/",
        sourceCode: "",
        backgroundColor: "#00AB2E"
    },
    {
        id: 3,
        image: imageImports.Portfolio4,
        title: "Charterxe Website",
        content: "The Official Website Of Charterxe brand of falconaero, built with amazing user interface",
        devTags: [
            { tag: "Next.js" },
            { tag: "Tailwind CSS" },
            { tag: "Framer Motion" },
            { tag: "Website"}
        ],
        projectLink: "https://www.charterxe.com/en",
        sourceCode: "",
        backgroundColor: "#8F2A2C"
    },
    {
        id: 4,
        image: imageImports.Portfolio5,
        title: "Falconaero Canada Website",
        content: "FalconAero Canada boasts a beautifully designed website showcasing subtle animations and stylish elements. Tailored for the Canadian market, the site effectively reflects FalconAero's brand identity.",
        devTags: [
            { tag: "Next.js" },
            { tag: "Tailwind CSS" },
            { tag: "ShardCN" },
            { tag: "Framer Motion" },
            { tag: "Website"}
        ],
        projectLink: "https://www.falconaero.ca/",
        sourceCode: "",
        backgroundColor: "#8E2A8F"
    },
    {
        id: 5,
        image: imageImports.Portfolio6,
        title: "Villaja E-commerce Mobile Application",
        content: "A de-centralized marketplace featuring robust capabilities: escrow ordering system, seamless transactions via payment gateways, real-time order tracking, multi-store vendors, secure authentication, and intuitive dashboards for both users and administrators, chat systems plus many more features.",
        devTags: [
            { tag: "React Native" },
            { tag: "Node.js" },
            { tag: "MongoDB" },
            { tag: "Paystack" },
            { tag: "Context API" },
            { tag: "Mobile Application"}
        ],
        projectLink: "",
        sourceCode: "",
        backgroundColor: "#FC5B2A"
    },
    {
        id: 6,
        image: imageImports.Portfolio7,
        title: "mylegalsoftware client mobile app.",
        content: "The client mobile application for myls case management software where users can effectively manage their cases",
        devTags: [
            { tag: "React Native" },
            { tag: "expo" },
            { tag: "MongoDB" },
            { tag: "Context API" },
            { tag: "Mobile Application"}
        ],
        projectLink: "",
        sourceCode: "",
        backgroundColor: "#00AB2E"
    },
    {
        id: 7,
        image: imageImports.Portfolio8,
        title: "Zenfipay Services Website",
        content: "The Official Website Of Zenfipay Service Limited, built with amazing user interface",
        devTags: [
            { tag: "Vue.js" },
            { tag: "Tailwind CSS" },
            { tag: "Contentful CMS" },
            { tag: "Website"}
        ],
        projectLink: "https://website-v2-zeta.vercel.app/",
        sourceCode: "",
        backgroundColor: "#00ABA3"
    },
    {
        id: 8,
        image: imageImports.Portfolio9,
        title: "Next Nomad",
        content: "An all-in-one workspace booking app with real-time availability, payment integration,, booking management, user profiles, workspace selection, reviews and ratings, and admin dashboards. Streamline your booking experience with these and many more features.",
        devTags: [
            { tag: "Next.js" },
            { tag: "Prisma" },
            { tag: "Tailwind CSS" },
            { tag: "React Query" },
            { tag: "Web Application"}
        ],
        projectLink: "https://nextnomad.vercel.app/",
        sourceCode: "https://github.com/boluwatifeajayi/NextNomad",
        backgroundColor: "#00AB2E"
    },
    {
        id: 9,
        image: imageImports.Portfolio10,
        title: "Instig Labs",
        content: "The Official Website Of Instiglabs, built with amazing user interface",
        devTags: [
            { tag: "Next.js" },
            { tag: "Sanity CMS" },
            { tag: "Tailwind CSS" },
            { tag: "Website"}
        ],
        projectLink: "https://www.instiglabs.io/",
        sourceCode: "",
        backgroundColor: "#8F2A2C"
    },
    {
        id: 10,
        image: imageImports.Portfolio11,
        title: "Astra Mobile App",
        content: "Astra is a mobile application for connecting tutors with student based on the courses they want to learn and particular learning styles they choose",
        devTags: [
            { tag: "React Native" },
            { tag: "Expo" },
            { tag: "Redux" },
            { tag: "Mobile Application"}
        ],
        projectLink: "",
        sourceCode: "https://github.com/boluwatifeajayi/astra-app",
        backgroundColor: ""
    },
    {
        id: 11,
        image: imageImports.Portfolio12,
        title: "AO CyberSecurity Partners",
        content: "The Official Website Of AO cybersecurity partners, built with amazing user interface",
        devTags: [
            { tag: "React.js" },
            { tag: "Email.js" },
            { tag: "React Router" },
            { tag: "Website"}
        ],
        projectLink: "",
        sourceCode: "",
        backgroundColor: "#8F2A2C"
    },
    {
        id: 12,
        image: imageImports.Portfolio13,
        title: "Gadgt E-commerce Web-Application",
        content: "Gadgt is an e-commerce web-application built for Gadgt, a startup that sells gadgets and electronics",
        devTags: [
            { tag: "UI/UX Design" },
            { tag: "Figma" },
            { tag: "Web-Application"}
        ],
        projectLink: "https://www.behance.net/gallery/181520729/Tech-Shop-E-Commerce-Website-Landing-Page-Exploration",
        sourceCode: "",
        backgroundColor: "#2A69FC"
    }
]
