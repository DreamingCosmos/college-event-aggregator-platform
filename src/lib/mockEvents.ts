export interface Event {
  id: string;
  eventName: string;
  eventDate: string;
  eventType: 'hackathon' | 'tech-talk' | 'workshop';
  college: string;
  location: string;
  link: string;
  description: string;
}

export const mockEvents: Event[] = [
  {
    id: '1',
    eventName: 'HackMIT 2024',
    eventDate: '2024-02-15',
    eventType: 'hackathon',
    college: 'Massachusetts Institute of Technology',
    location: 'Cambridge, MA',
    link: 'https://hackmit.org',
    description: 'Join us for 48 hours of innovation, collaboration, and coding at one of the most prestigious hackathons in the world. Build something amazing with fellow students from around the globe.'
  },
  {
    id: '2',
    eventName: 'AI in Healthcare Workshop',
    eventDate: '2024-02-20',
    eventType: 'workshop',
    college: 'Stanford University',
    location: 'Palo Alto, CA',
    link: 'https://stanford.edu/ai-healthcare',
    description: 'Explore the intersection of artificial intelligence and healthcare. Learn about machine learning applications in medical diagnosis, treatment planning, and patient care.'
  },
  {
    id: '3',
    eventName: 'Future of Web Development',
    eventDate: '2024-02-25',
    eventType: 'tech-talk',
    college: 'University of California, Berkeley',
    location: 'Berkeley, CA',
    link: 'https://berkeley.edu/webdev-talk',
    description: 'Industry leaders discuss emerging trends in web development, including WebAssembly, edge computing, and the next generation of JavaScript frameworks.'
  },
  {
    id: '4',
    eventName: 'CalHacks 11.0',
    eventDate: '2024-03-01',
    eventType: 'hackathon',
    college: 'University of California, Berkeley',
    location: 'Berkeley, CA',
    link: 'https://calhacks.io',
    description: 'The largest collegiate hackathon on the West Coast. Build innovative solutions to real-world problems with access to cutting-edge APIs and mentorship from industry professionals.'
  },
  {
    id: '5',
    eventName: 'Cybersecurity Fundamentals',
    eventDate: '2024-03-05',
    eventType: 'workshop',
    college: 'Carnegie Mellon University',
    location: 'Pittsburgh, PA',
    link: 'https://cmu.edu/cybersecurity',
    description: 'Learn the basics of cybersecurity including network security, cryptography, and ethical hacking. Hands-on exercises with real-world scenarios.'
  },
  {
    id: '6',
    eventName: 'Quantum Computing Breakthrough',
    eventDate: '2024-03-10',
    eventType: 'tech-talk',
    college: 'Harvard University',
    location: 'Cambridge, MA',
    link: 'https://harvard.edu/quantum-talk',
    description: 'Leading researchers present the latest breakthroughs in quantum computing and discuss the potential impact on cryptography, optimization, and scientific simulation.'
  },
  {
    id: '7',
    eventName: 'TreeHacks 2024',
    eventDate: '2024-03-15',
    eventType: 'hackathon',
    college: 'Stanford University',
    location: 'Palo Alto, CA',
    link: 'https://treehacks.com',
    description: 'Stanford\'s premier hackathon focused on creating technology for social good. Work on projects that make a positive impact on society and the environment.'
  },
  {
    id: '8',
    eventName: 'Mobile App Development Bootcamp',
    eventDate: '2024-03-20',
    eventType: 'workshop',
    college: 'Georgia Institute of Technology',
    location: 'Atlanta, GA',
    link: 'https://gatech.edu/mobile-bootcamp',
    description: 'Intensive 3-day bootcamp covering iOS and Android development. Build and deploy your first mobile app with guidance from experienced developers.'
  },
  {
    id: '9',
    eventName: 'The Ethics of AI',
    eventDate: '2024-03-25',
    eventType: 'tech-talk',
    college: 'New York University',
    location: 'New York, NY',
    link: 'https://nyu.edu/ai-ethics',
    description: 'A critical discussion on the ethical implications of artificial intelligence, including bias in algorithms, privacy concerns, and the future of human-AI collaboration.'
  },
  {
    id: '10',
    eventName: 'HackPrinceton Spring 2024',
    eventDate: '2024-03-30',
    eventType: 'hackathon',
    college: 'Princeton University',
    location: 'Princeton, NJ',
    link: 'https://hackprinceton.com',
    description: 'Princeton\'s biannual hackathon bringing together students from across the Northeast. Focus on innovation in fintech, healthtech, and sustainable technology.'
  },
  {
    id: '11',
    eventName: 'Data Science with Python',
    eventDate: '2024-04-05',
    eventType: 'workshop',
    college: 'University of Chicago',
    location: 'Chicago, IL',
    link: 'https://uchicago.edu/data-science',
    description: 'Learn data analysis and visualization using Python, pandas, and matplotlib. Perfect for beginners looking to enter the field of data science.'
  },
  {
    id: '12',
    eventName: 'Blockchain and Cryptocurrency',
    eventDate: '2024-04-10',
    eventType: 'tech-talk',
    college: 'University of Pennsylvania',
    location: 'Philadelphia, PA',
    link: 'https://upenn.edu/blockchain-talk',
    description: 'Explore the technology behind cryptocurrencies and learn about smart contracts, DeFi, and the future of decentralized finance.'
  }
];

export const eventTypes = [
  { value: 'all', label: 'All Types' },
  { value: 'hackathon', label: 'Hackathon' },
  { value: 'tech-talk', label: 'Tech Talk' },
  { value: 'workshop', label: 'Workshop' }
];

export const colleges = [
  'All Colleges',
  'Massachusetts Institute of Technology',
  'Stanford University',
  'University of California, Berkeley',
  'Carnegie Mellon University',
  'Harvard University',
  'Georgia Institute of Technology',
  'New York University',
  'Princeton University',
  'University of Chicago',
  'University of Pennsylvania'
];
