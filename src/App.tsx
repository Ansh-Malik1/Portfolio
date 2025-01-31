import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Send, 
  Download,
  Moon,
  Sun,
  Terminal,
  Database,
  Layout,
  Server
} from 'lucide-react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [nameRef, nameInView] = useInView({ triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true });
  const [contactRef, contactInView] = useInView({ triggerOnce: true });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const skills = [
    { name: 'Frontend Development', icon: <Layout />, progress: 90 },
    { name: 'Backend Development', icon: <Server />, progress: 85 },
    { name: 'Database Management', icon: <Database />, progress: 80 },
    { name: 'DevOps', icon: <Terminal />, progress: 75 },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleDownloadCV = () => {
    // Replace with actual CV download logic
    window.open('https://example.com/cv.pdf', '_blank');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' : 'bg-gradient-to-br from-gray-50 to-white text-gray-900'
    }`}>
      {/* Theme Toggle */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed top-4 right-4 p-3 rounded-full ${
          isDarkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-900'
        }`}
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </motion.button>

      {/* Hero Section */}
      <motion.header 
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-20 bg-cover bg-center" />
        <div className="container mx-auto px-4 z-10">
          <motion.div
            ref={nameRef}
            initial="hidden"
            animate={nameInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.h1 
              className="text-6xl font-bold mb-4"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              John Doe
            </motion.h1>
            <p className="text-2xl text-gray-300 mb-8">Full Stack Developer</p>
            <div className="flex justify-center space-x-6 mb-8">
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                className={`${isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`}
              >
                <Github size={24} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                className={`${isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a 
                href="mailto:john@example.com"
                whileHover={{ scale: 1.2, rotate: 360 }}
                className={`${isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`}
              >
                <Mail size={24} />
              </motion.a>
            </div>
            <motion.button
              onClick={handleDownloadCV}
              className={`px-6 py-3 rounded-full ${
                isDarkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'
              } text-white font-medium flex items-center gap-2 mx-auto`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download CV
            </motion.button>
          </motion.div>
        </div>
      </motion.header>

      {/* About Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <motion.div
            ref={aboutRef}
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                I'm a passionate full-stack developer with expertise in modern web technologies.
                With 5+ years of experience building scalable applications, I love turning complex
                problems into simple, beautiful solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <motion.div
            ref={skillsRef}
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={skillsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.2 }}
                  className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    {skill.icon}
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>
                  <div className={`h-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <motion.div
                      className="h-full rounded-full bg-blue-500"
                      initial={{ width: 0 }}
                      animate={skillsInView ? { width: `${skill.progress}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                  <span className="text-sm mt-2 block text-right">{skill.progress}%</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <motion.div
            ref={projectsRef}
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <motion.div
                  key={project}
                  className={`rounded-lg overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative group">
                    <img
                      src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80`}
                      alt={`Project ${project}`}
                      className="w-full h-48 object-cover"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-blue-500 bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center transition-all duration-300"
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.button
                        className="px-4 py-2 bg-white text-blue-500 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        View Details
                      </motion.button>
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Project {project}</h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                      A brief description of the project and its key features.
                    </p>
                    <div className="flex justify-between items-center">
                      <motion.a 
                        href="#" 
                        className={`${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'} flex items-center gap-2`}
                        whileHover={{ x: 5 }}
                      >
                        <Code size={20} />
                        View Code
                      </motion.a>
                      <motion.a 
                        href="#" 
                        className={`${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'} flex items-center gap-2`}
                        whileHover={{ x: 5 }}
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <motion.div
            ref={contactRef}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
            <div className="max-w-lg mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode 
                        ? 'bg-gray-800 border-gray-700 text-white' 
                        : 'bg-gray-50 border-gray-300 text-gray-900'
                    }`}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode 
                        ? 'bg-gray-800 border-gray-700 text-white' 
                        : 'bg-gray-50 border-gray-300 text-gray-900'
                    }`}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode 
                        ? 'bg-gray-800 border-gray-700 text-white' 
                        : 'bg-gray-50 border-gray-300 text-gray-900'
                    }`}
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg flex items-center justify-center gap-2 ${
                    isDarkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'
                  } text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
                <AnimatePresence>
                  {submitStatus !== 'idle' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`text-center p-3 rounded-lg ${
                        submitStatus === 'success' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-red-500 text-white'
                      }`}
                    >
                      {submitStatus === 'success' 
                        ? 'Message sent successfully!' 
                        : 'Failed to send message. Please try again.'}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${isDarkMode ? 'bg-gray-900 text-gray-400' : 'bg-gray-100 text-gray-600'} text-center`}>
        <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;