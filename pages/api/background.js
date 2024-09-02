const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Dr. A.P.J. Abdul Kalam Technical University',
                degree: 'Bachelor of Technology',
                detail: "Bachelor's Degree in Technology from Dr. A.P.J. Abdul Kalam Technical University, UP, India.",
                year: '2020-2024'
            },
            {
                id: 1,
                title: 'Aditya Birla Intermediate College',
                degree: 'Major in Mathematics',
                detail: "Completed Intermediate with a major in Mathematics from Aditya Birla Intermediate College, Renukoot, UP, India.",
                year: '2019-2020'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'PMaxTek',
                role: 'MERN Developer',
                url: 'https://pmaxtek.com/',
                desc: 'Designed and developed web applications from scratch using the MERN stack, resulting in increased client satisfaction.',
                year: '01/2024 - Present',
                location: 'Mumbai, Maharashtra, India'
            },
            {
                id: 2,
                title: 'IFSTATIC TECHNOLOGIES PVT. LTD.',
                role: 'Web Developer',
                url: 'https://ifstatic.com/',
                desc: 'Developed, tested, and maintained high-quality web applications, coordinating with the development team remotely.',
                year: '09/2023 - 12/2023',
                location: 'Remote'
            },
            {
                id: 3,
                title: 'ACMEGRADE',
                role: 'Web Development Training',
                url: 'https://acmegrade.com/',
                desc: 'Contributed to coding and testing React.js components and features, collaborating closely with experienced developers.',
                year: '08/2023 - 09/2023',
                location: 'Remote'
            },
        ]
    }
]

export default function handler(req, res) {
    res.status(200).json(background)
}
