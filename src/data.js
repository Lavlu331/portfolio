// সব কনটেন্ট এই ফাইলে। শুধু এখানে বদলালেই পুরো সাইট বদলে যাবে।
// "TODO" লেখা অংশগুলো নমুনা: নিজের আসল তথ্য দিয়ে বদলে নিন।

export const profile = {
  name: 'Md. Lavlu Mia',
  shortName: 'Lavlu',
  role: 'Web developer',
  location: 'Mymensingh, Bangladesh',
  email: 'ashikurislamlavlu@gmail.com',
  headline: 'I build web apps with Laravel, PHP and React.',
  intro:
    'I am a web developer from Mymensingh. I like backend work, clean code and interfaces that work well on a phone.',
  status: 'Open to internships and junior roles', // TODO: বদলান বা মুছে দিন
  resume: '/resume.pdf', // TODO: public/ ফোল্ডারে আপনার CV দিন, নাম resume.pdf
  links: {
    github: 'https://github.com/Lavlu331',
    linkedin: 'https://www.linkedin.com/in/ashikurislamavlu',
    facebook: 'https://facebook.com/ashikur.islam.lavlu',
  },
}

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export const about = [
  'I specialize in both frontend and backend development. I use React, PHP, Laravel and Yii2 to turn ideas into working products.',
  'I keep learning new tools, from local environments like Laragon and XAMPP to content systems like Joomla, so the sites I build stay reliable and easy to grow.',
]

export const skills = [
  { group: 'Frontend', items: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'React.js', 'Responsive design'] },
  { group: 'Backend', items: ['JavaScript (Node.js)','Express.js', 'PHP','Laravel', 'Yii2'] },
  { group: 'Database', items: ['MySQL','Mongodb'] },
  { group: 'Languages', items: ['Python', 'Java', 'C / C++'] },
  { group: 'Tools', items: ['Git & GitHub', 'XAMPP', 'Laragon'] },
  { group: 'Problem solving', items: ['Data structures', 'Algorithms', 'C++ STL'] },
  { group: 'IoT and electronics', items: ['Digital electronics', 'IoT systems'] },
]

// TODO: এগুলো নমুনা প্রজেক্ট। আপনার আসল প্রজেক্ট দিয়ে বদলান।
// github বা live না থাকলে ওই লাইন মুছে দিন, বাটন নিজে থেকে লুকিয়ে যাবে।
export const projects = [
  {
    title: 'MyStore — Full-Stack E-commerce Demo',
    description:
      'Browse products, manage a cart, apply coupons and track cash-on-delivery orders. The admin panel manages products, inventory and orders.',
    stack: ['React', 'Vite', 'Node.js', 'Express', 'MariaDB 11.8', 'alwaysdata'],
    github: 'https://github.com/Lavlu331/MyStore',
    githubLabel: 'Source Code',
    live: 'https://lavlu.alwaysdata.net/',
    liveLabel: 'Live Demo',
  },
  {
    title: 'Student Management System',
    description:
      'A Laravel app for managing students, courses and results, with admin login and printable reports.',
    stack: ['Laravel', 'MySQL', 'Tailwind CSS'],
    github: 'https://github.com/Lavlu331',
    live: '',
  },
  {
    title: 'Online Bookshop',
    description:
      'A PHP and MySQL shop with product search, a cart and an order dashboard for the owner.',
    stack: ['PHP', 'MySQL', 'JavaScript'],
    github: 'https://github.com/Lavlu331',
    live: '',
  },
  {
    title: 'Task Tracker',
    description:
      'A React task board where you add, filter and finish tasks. Data is saved in the browser.',
    stack: ['React', 'Tailwind CSS'],
    github: 'https://github.com/Lavlu331',
    live: '',
  },
  {
    title: 'Company Website (Joomla)',
    description:
      'A multi-page business website on Joomla with a custom template and an editable news section.',
    stack: ['Joomla', 'PHP', 'CSS3'],
    github: '',
    live: '',
  },
]

// TODO: নিজের পড়াশোনা ও অভিজ্ঞতা দিয়ে বদলান
export const education = [
  { title: 'Diploma in Computer Technology', place: 'Your institute name', period: '2022 - Present', note: 'Core subjects: programming, databases, web development.' },
  { title: 'Secondary School Certificate', place: 'Your school name', period: '2020 - 2022', note: '' },
]

export const experience = [
  { title: 'Freelance web developer', place: 'Self-employed', period: '2025 - Present', note: 'Small business websites and class projects with Laravel and React.' },
]

export const achievements = [
  {
    title: 'Asset Skills Competition 2025',
    badge: 'Institute level',
    text: 'Earned a Certificate of Participation at the institute level under the ASSET project.',
    imageKey: 'scrt1',
  },
  {
    title: 'Asset Skills and Innovation Competition 2025',
    badge: 'Participation',
    text: 'Received a Certificate of Participation for this technical event.',
    imageKey: 'scrt2',
  },
]
