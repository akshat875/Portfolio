const portfolio = [
    {
        id: 0,
        projectName: "Netflix-GPT",
        url: "https://netflix-ai-delta.vercel.app/",
        image: "projects/NetflixGPT.png",
        projectDetail: " The application features a Login/Sign-Up form that redirects to a Browse page post-authentication. The Browse page includes a Header, Main Movie with a background trailer, Title & Description, Movie Suggestions, MovieList, and NetflixGPT for search and recommendations. ",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Java Script"
            },
            {
                tech: "Redux"
            },
            {
                tech: "Node.js"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "Tour",
        url: "https://tour-iota-lime.vercel.app/",
        image: "projects/Tour.png",
        projectDetail: "I designed a responsive tour website where users can effortlessly plan their trips by booking flights, cruise ships, or hotels. The site blends SCSS, HTML, CSS, and JavaScript to deliver a sleek and interactive experience.",
        technologiesUsed: [
            {
                tech: "HTML"
            },
            {
                tech: "CSS"
            },
            {
                tech: "Java Script"
            },
            {
                tech: "SCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "Currency Converter",
        url: "https://currency-exchange-dun.vercel.app/",
        image: "projects/Currency.png",
        projectDetail: "The Currency Converter is a web application that enables users to convert amounts between various currencies in real-time. Built using HTML, CSS, Tailwind CSS, JavaScript, React, and Vite, it offers a modern and responsive user interface. The application fetches live exchange rates from an external API, ensuring accurate conversions.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Java Script"
            },
            {
                tech: "HTML"
            },
            {
                tech: "CSS"
            },
            {
                tech: "TailwindCSS"
            },
           
        ]
    },
    {
        id: 0,
        projectName: "Food",
        url: "https://foodstore-omega.vercel.app/",
        image: "projects/Restaurant.jpg",
        projectDetail: "I have developed a food store app to grasp Redux Toolkit basics.with a focus on utilizing promotion tags from API data for enhanced state management and real-time updates.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Redux"
            },
            {
                tech: "CSS"
            },
            {
                tech: "Java Script"
            },
           
        ]
    },
    {
        id: 0,
        projectName: "To-Do",
        url: "https://to-do-gules-xi.vercel.app/",
        image: "projects/ToDo.png",
        projectDetail: "Developed a ToDo web app with task management, prioritization, deadlines, categories, search functionality, and real-time updates for efficient productivity.",
        technologiesUsed: [
            {
                tech: "Java Script"
            },
            {
                tech: "HTML"
            },
            {
                tech: "CSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "Basic Portfolio",
        url: "https://portfolio-ruddy-six-39.vercel.app/",
        image: "projects/BasicPortfolio.png",
        projectDetail: "I developed a basic portfolio using React and Tailwind CSS, incorporating both dark and light themes. The portfolio features a modern design that highlights my projects and skills, providing an engaging and visually appealing experience for visitors. Additionally, I created this to learn the workflow of Redux store.",
        technologiesUsed: [
            {
                tech: "ReactJS + vite"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "sanke-game",
        url: "https://github.com/akshat875/snake-game",
        image: "projects/snakegame.png",
        projectDetail: "Tojjar is ecommerce website,  where you can open your own store and sell products of different brands!",
        technologiesUsed: [
            {
                tech: "Nextjs with SSR"
            },
            {
                tech: "Laravel"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
