const recommendationCard = [
  {
    id: 0,
    name: 'Abhishek',
    image: "images/Abhishek.jpg",
    designation: 'React JS | NEXT JS | Node | MERN | Python',
    view: "I had the pleasure of working with Akshat on a few projects during our time in college. He's quick to learn, very dependable, and always brings a positive attitude to the team. Akshat's grasp of React.js and Next.js is solid, and he's always eager to take on new challenges. He'd be a great addition to any team.",
    linkednURL: "https://www.linkedin.com/in/abhichaurasia03/"
  },
  {
    id: 1,
    name: 'Akhand',
    image: "images/Akhand.jpg",
    designation: '.NET Developer | C# Enthusiast | MERN',
    view: "I've known Akshat for a long time, and we worked together on several college projects. Recently, we both collaborated at JMM Technologies, where Akshat's dedication and attention to detail really stood out. He's not just a great coder but also a reliable team member who always gets the job done. I highly recommend Akshat for any role that requires a strong and committed developer.",
    linkednURL: "https://www.linkedin.com/in/akhand-pratap-singh-486118244/"
  },
  {
    id: 2,
    name: 'Sonu',
    image: "images/Sonu.jpg",
    designation: 'MERN | JavaScript | Tailwind | Bootstrap | Python',
    view: "Akshat is someone who truly understands frontend development. He has a knack for UI/UX design and pairs it with strong skills in React.js and Node.js. He's attentive to details and works hard to deliver top-notch results. Any team would be lucky to have Akshat on board.",
    linkednURL: "https://www.linkedin.com/in/sonu-singhcs/"
  },
  {
    id: 3,
    name: 'Prateek',
    image: "images/Prateek.jpg",
    designation: 'MERN Stack Developer | Java ',
    view: "If you're looking for someone who knows their way around ReactJS and Next.js, Akshat is the person to call. He's professional, reliable, and always puts in the effort to make sure everything is perfect. I highly recommend him for any frontend development role.",
    linkednURL: "https://www.linkedin.com/in/prateek-mishra-2a8206203/"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
