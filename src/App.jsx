import { useState } from 'react';
import { 
  FaAward as Award, 
  FaCode as Code, 
  FaUser as User, 
  FaEnvelope as Mail, 
  FaGithub as Github, 
  FaLinkedin as Linkedin, 
  FaFacebook as Facebook,
  FaBars as Menu, 
  FaTimes as X, 
  FaArrowRight as ArrowRight, 
  FaPhone as Phone, 
  FaMapMarkerAlt as MapPin 
} from 'react-icons/fa';

import scrt1 from './assets/scrt1.jpeg';
import scrt2 from './assets/scrt2.jpeg';
import Myphoto from './assets/Myphoto.jpeg';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const skillsList = [
    'HTML5', 'CSS3 / Tailwind', 'JavaScript','Python','Java','C/C++','React.js', 
    'PHP', 'Laravel', 'Yii2', 'Joomla', 'MySQL',
    'XAMPP', 'Laragon', 'Git & GitHub', 'Responsive Design'
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-purple-500 selection:text-white">
      
      {/* ================= Navbar ================= */}
      <nav className="fixed top-0 left-0 w-full bg-white/85 backdrop-blur-md z-50 border-b border-slate-200 shadow-xs transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          
          <a href="#home" className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent hover:scale-105 transition-transform">
            Lavlu<span className="text-purple-600">.dev</span>
          </a>

          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600 items-center">
            <a href="#home" className="hover:text-purple-600 transition-colors py-1">Home</a>
            <a href="#about" className="hover:text-purple-600 transition-colors py-1">About</a>
            <a href="#skills" className="hover:text-purple-600 transition-colors py-1">Skills</a>
            <a href="#achievements" className="hover:text-purple-600 transition-colors py-1">Achievements</a>
            <a href="#contact" className="hover:text-purple-600 transition-colors py-1">Contact</a>

            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <a href="https://github.com/Lavlu331" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-purple-600 transition">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/ashikurislamavlu" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-purple-600 transition">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-700 focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3 shadow-md">
            <a href="#home" onClick={() => setIsOpen(false)} className="block text-slate-600 hover:text-purple-600 transition">Home</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="block text-slate-600 hover:text-purple-600 transition">About</a>
            <a href="#skills" onClick={() => setIsOpen(false)} className="block text-slate-600 hover:text-purple-600 transition">Skills</a>
            <a href="#achievements" onClick={() => setIsOpen(false)} className="block text-slate-600 hover:text-purple-600 transition">Achievements</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block text-slate-600 hover:text-purple-600 transition">Contact</a>
            
            <div className="flex gap-4 pt-2 border-t border-slate-100">
              <a href="https://github.com/Lavlu331" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-purple-600"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/ashikurislamavlu" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-purple-600"><Linkedin size={20} /></a>
            </div>
          </div>
        )}
      </nav>

      {/* ================= Hero Section ================= */}
      <section id="home" className="pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 min-h-[90vh]">
        <div className="md:w-1/2 space-y-6 text-left">
          <span className="px-3 py-1 text-xs font-semibold bg-purple-100 text-purple-700 border border-purple-200 rounded-full">
            Welcome to my portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Md. Lavlu Mia</span>
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            A passionate web developer and backend enthusiast. I love building modern, responsive web applications and working with PHP frameworks like Laravel and Yii2.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <a href="#contact" className="px-6 py-3 bg-purple-600 text-white font-medium rounded-xl shadow-lg shadow-purple-600/20 hover:bg-purple-700 transition flex items-center gap-2">
              Let's Talk <ArrowRight size={18} />
            </a>
            <a href="#achievements" className="px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-xl hover:bg-slate-100 transition">
              View Achievements
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-gradient-to-tr from-purple-500 to-indigo-600 p-1 shadow-xl">
            <div className="w-full h-full bg-white rounded-[22px] flex items-center justify-center overflow-hidden">
              <img src={Myphoto} alt="Lavlu" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= About Section ================= */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-200">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 flex items-center justify-center gap-3 tracking-wide">
            <User className="text-purple-600" /> About Me
          </h2>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed">
            Hello! I'm <span className="font-semibold text-slate-900">Md. Lavlu Mia</span>, a dedicated web developer based in Mymensingh, Bangladesh. I specialize in both frontend and backend development, utilizing tools and technologies like React, PHP, Laravel, and Yii2 to bring ideas to life.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Driven by curiosity and a commitment to clean code, I constantly explore new technologies—from local server environments like Laragon and XAMPP to modern content management systems like Joomla—ensuring robust and scalable solutions.
          </p>
        </div>
      </section>

      {/* ================= Skills Section ================= */}
      <section id="skills" className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-200">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 flex items-center justify-center gap-3 tracking-wide">
            <Code className="text-purple-600" /> My Skills
          </h2>
          <p className="text-slate-500 text-sm mt-2">Technologies, frameworks, and tools I work with</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {skillsList.map((skill, index) => (
            <div key={index} className="bg-white border border-slate-200 p-4 rounded-xl text-center shadow-xs hover:border-purple-500 transition font-medium text-slate-700">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* ================= Achievements & Certificates Section ================= */}
      <section id="achievements" className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-200">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 flex items-center justify-center gap-3 tracking-wide">
            <Award className="text-purple-600" /> Achievements & Certificates
          </h2>
          <p className="text-slate-500 text-sm mt-2">Competitions I have participated in and received certificates for</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs space-y-4 hover:border-purple-500 transition">
            <div className="w-full h-56 bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center">
              <img src={scrt1} alt="Asset Skills Competition" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-xs bg-purple-100 text-purple-700 font-semibold px-3 py-1 rounded-full">Certificate 01</span>
              <h3 className="text-xl font-bold text-slate-900 mt-2">Asset Skills Competition 2025</h3>
              <p className="text-slate-600 text-sm leading-relaxed mt-1">
                Successfully participated and earned a Certificate of Participation at the <strong className="text-slate-800">Institute Level</strong> under the ASSET project.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs space-y-4 hover:border-purple-500 transition">
            <div className="w-full h-56 bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center">
              <img src={scrt2} alt="Second Competition" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-xs bg-indigo-100 text-indigo-700 font-semibold px-3 py-1 rounded-full">Certificate 02</span>
              <h3 className="text-xl font-bold text-slate-900 mt-2">Asset Skills and Innovation Competition 2025</h3>
              <p className="text-slate-600 text-sm leading-relaxed mt-1">
                Successfully participated and received a Certificate of Participation for this technical event.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= Contact Section ================= */}
      <section id="contact" className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-200">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 flex items-center justify-center gap-3 tracking-wide">
            <Mail className="text-purple-600" /> Get In Touch
          </h2>
          <p className="text-slate-500 text-sm mt-2">Feel free to reach out for collaboration or questions</p>
        </div>

        <div className="max-w-xl mx-auto bg-white border border-slate-200 p-8 rounded-3xl shadow-xs text-center space-y-6">
          <p className="text-slate-600 text-sm">
            Want to connect or discuss a project? Click the button below to send me an email directly from your device.
          </p>
          
          <a 
            href="mailto:ashikurislamlavlu@gmail.com?subject=Hello%20Lavlu,%20I%20found%20your%20portfolio&body=Hi%20Lavlu,%20" 
            className="inline-block w-full py-3 bg-purple-600 text-white font-medium rounded-xl hover:bg-purple-700 transition shadow-md shadow-purple-600/20 text-center text-sm"
          >
            Send Email Directly
          </a>
        </div>
      </section>

      {/* ================= Footer ================= */}
      <footer className="py-12 px-6 bg-white border-t border-slate-200 text-slate-600 text-sm">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-left">
          
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">Md. Lavlu Mia</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Passionate Web Developer focused on creating clean, responsive, and robust web experiences.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider">Contact Info</h4>
            <p className="text-xs flex items-center gap-2 text-slate-600"><Mail size={14} className="text-purple-600" /> ashikurislamlavlu@gmail.com</p>
            <p className="text-xs flex items-center gap-2 text-slate-600"><Phone size={14} className="text-purple-600" /> +880 1833620729</p>
            <p className="text-xs flex items-center gap-2 text-slate-600"><MapPin size={14} className="text-purple-600" /> Mymensingh, Bangladesh</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider">Follow Me</h4>
            <div className="flex items-center gap-3 pt-1">
              <a href="https://facebook.com/ashikur.islam.lavlu" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 hover:bg-purple-600 hover:text-white rounded-lg transition text-slate-700">
                <Facebook size={18} />
              </a>
              <a href="https://github.com/Lavlu331" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 hover:bg-purple-600 hover:text-white rounded-lg transition text-slate-700">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/ashikurislamavlu" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 hover:bg-purple-600 hover:text-white rounded-lg transition text-slate-700">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

        </div>

        <div className="max-w-5xl mx-auto pt-6 border-t border-slate-100 text-center text-xs text-slate-400">
          <p>© 2026 Md. Lavlu Mia. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}