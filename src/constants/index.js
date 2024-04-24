import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    novartoLogo,
    ghms,
    ghs,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React and React Native Developer",
        icon: mobile,
    },
    // {
    //     title: "Backend Developer",
    //     icon: backend,
    // },
    // {
    //     title: "Concierge",
    //     icon: creator,
    // },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Junior Front-end developer",
        company_name: "Novarto ltd.",
        icon: novartoLogo,
        iconBg: "white",
        date: "January 2023 - March 2024",
        points: [
            "Played a role in multiple projects utilizing React and React Native technologies, contributing to the development of user interface elements.",
            "Gain proficiency in creating responsive and visually appealing UI components, enhancing user experience across various applications.",
            "Strengthened communication skills through active participation in team environments. Expanded technical expertise by gaining exposure to back-end technologies like Node.js, supplementing front-end development skills and contributing to a comprehensive understanding of full-stack development principles.",

        ],
    },
    {
        title: "Intership Trainee Front-end",
        company_name: "Novarto ltd.",
        icon: novartoLogo,
        iconBg: "white",
        date: "July 2022 - January 2023",
        points: [
            "Participated in an intensive training program focused on HTML, CSS, JavaScript, and React, under the mentorship of experienced developers.",
            "Developed a solid foundation in front-end development principles and practices through hands-on learning and guided projects.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Chief Concierge",
        company_name: "Grand Hotel Millennium Sofia",
        icon: ghms,
        iconBg: "#383E56",
        date: "Feb 2020 - Jul 2022",
        points: [
            "As main Concierge at a prominent 5-star hotel in Sofia, played a pivotal role in the hotel's grand opening, spearheading the development of the concierge department from its inception",
            "Additionally, actively contributed to the training and mentorship of front office staff, ensuring seamless coordination between departments and upholding the highest standards of service excellence.",
        ],
    },
    {
        title: "Bellhop / Concierge",
        company_name: "Grand Hotel Sofia",
        icon: ghs,
        iconBg: "#E6DEDD",
        date: "May 2016 - Feb 2020",
        points: [
            "Started as a bellhop at a prestigious 5-star hotel in Sofia, swiftly advancing to the role of concierge due to exceptional service and dedication.",
            "Developed strong communication and problem-solving skills in a fast-paced, high-demand environment, consistently exceeding guest expectations and upholding the hotel's reputation for excellence. ",

        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        // source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };