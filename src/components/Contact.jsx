import React, { useState } from 'react';
import { FiMail, FiMapPin, FiGithub, FiCopy, FiCheck, FiArrowRight } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    error: null
  });
  const [copied, setCopied] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCopyEmail = (e) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText('jasim.mohammed.dev@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2050);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, error: null });

    try {
      const googleFormUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSf5jVj9iTibPJtokxy-J8w9OEt5CX_gYpI-cejc089qveB2sA/formResponse';
      
      const formDataBody = new URLSearchParams();
      formDataBody.append('entry.1010482389', formData.name);
      formDataBody.append('entry.129584953', formData.email);
      formDataBody.append('entry.1458023160', formData.message);

      // Submit with no-cors so it doesn't fail due to Google Forms not returning CORS headers.
      // The request will be sent, but the browser will prevent reading the exact response.
      await fetch(googleFormUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formDataBody.toString()
      });

      setStatus({
        submitting: false,
        success: 'Your message has been sent successfully!',
        error: null
      });
      setShowSuccessModal(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Submission error:', err);
      setStatus({
        submitting: false,
        success: null,
        error: 'Failed to submit form. Please try again later.'
      });
    }
  };

  return (
    <div name="contact" className="w-full bg-[#09090b] text-zinc-350 py-32 flex items-center relative overflow-hidden">
      
      {/* Background glow and subtle blobs */}
      <div className="absolute -bottom-20 right-1/4 w-[500px] h-[500px] bg-linear-to-tr from-brand-500/10 to-accent/5 blur-[120px] rounded-full -z-10 animate-pulse-slow"></div>
      <div className="absolute top-20 -left-20 w-[400px] h-[400px] bg-linear-to-tr from-cyberpink/5 to-transparent blur-[100px] rounded-full -z-10"></div>

      <div className="max-w-7xl px-6 mx-auto w-full h-full relative z-10 flex flex-col lg:flex-row gap-20 lg:gap-24">
        
        {/* Left Side: Copy and Cards Grid */}
        <div className="lg:w-1/2 flex flex-col justify-center text-left">
          <p className="text-sm font-bold tracking-widest text-accent uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-zinc-100 tracking-tighter mb-8 leading-[1.1]">
            Let's build something <br/> exceptional <span className="text-transparent bg-clip-text bg-linear-to-r from-accent via-brand-500 to-cyberpink">together.</span>
          </h2>
          <p className="text-zinc-400 font-light text-lg sm:text-xl leading-relaxed mb-12 max-w-lg">
            I specialize in crafting high-performance, visually engaging cross-platform applications. Whether you have a project idea, a job opportunity, or just want to connect, reach out!
          </p>

          {/* Contact Details Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg">
            {/* Email Card */}
            <a 
              href="mailto:jasim.mohammed.dev@gmail.com" 
              className="card-premium p-6 rounded-2xl group flex flex-col justify-between h-48 border border-zinc-800/80 hover:border-accent/40 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex justify-between items-start z-10">
                <div className="p-3 bg-accent/10 rounded-xl text-accent group-hover:scale-110 transition-transform duration-300">
                  <FiMail size={24} />
                </div>
                <button 
                  onClick={handleCopyEmail}
                  className="p-2 text-zinc-500 hover:text-zinc-200 bg-zinc-900/60 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all duration-300 relative cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? <FiCheck size={16} className="text-emerald-400" /> : <FiCopy size={16} />}
                  {copied && (
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-zinc-900 text-emerald-400 py-1 px-2 rounded-md border border-emerald-500/20 shadow-md whitespace-nowrap animate-fadeIn">
                      Copied!
                    </span>
                  )}
                </button>
              </div>
              
              <div className="z-10 mt-6">
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-1">Email Me</p>
                <p className="text-zinc-200 text-sm sm:text-base font-medium truncate">jasim.mohammed.dev@gmail.com</p>
              </div>
            </a>

            {/* Location Card */}
            <div className="card-premium p-6 rounded-2xl group flex flex-col justify-between h-48 border border-zinc-800/80 hover:border-cyberpink/40 relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-cyberpink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex justify-between items-start z-10">
                <div className="p-3 bg-cyberpink/10 rounded-xl text-cyberpink group-hover:scale-110 transition-transform duration-300">
                  <FiMapPin size={24} />
                </div>
              </div>
              
              <div className="z-10 mt-6">
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-1">Location</p>
                <p className="text-zinc-200 text-base sm:text-lg font-medium">Kerala, India</p>
              </div>
            </div>

            {/* GitHub Card */}
            <a 
              href="https://github.com/jasim1t" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="card-premium p-6 rounded-2xl group flex flex-col justify-between h-48 border border-zinc-800/80 hover:border-brand-500/40 relative overflow-hidden sm:col-span-2"
            >
              <div className="absolute inset-0 bg-linear-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex justify-between items-start z-10">
                <div className="p-3 bg-brand-500/10 rounded-xl text-brand-500 group-hover:scale-110 transition-transform duration-300">
                  <FiGithub size={24} />
                </div>
                <div className="p-2 text-zinc-500 group-hover:text-zinc-200 transition-colors">
                  <FiArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              
              <div className="z-10 mt-6">
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-1">GitHub Profile</p>
                <p className="text-zinc-200 text-base font-medium">github.com/jasim1t</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:w-1/2 flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col space-y-12 card-premium p-8 sm:p-12 rounded-[2.5rem] border border-zinc-800 relative overflow-hidden text-left"
          >
            {/* Background design accents */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/5 rounded-full blur-2xl"></div>

            <div>
              <h3 className="text-2xl font-bold text-zinc-100">Send a Message</h3>
              <p className="text-zinc-500 text-sm mt-1">I'll respond as soon as possible.</p>
            </div>

            {status.error && (
              <div className="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-455 rounded-2xl text-center text-sm font-medium animate-fadeIn">
                {status.error}
              </div>
            )}

            {/* Name Input */}
            <div className="relative group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full py-4 bg-transparent border-b-2 border-zinc-800 text-zinc-100 text-lg focus:outline-none focus:border-transparent transition-all duration-300"
                required
                disabled={status.submitting}
              />
              <label
                htmlFor="name"
                className={`absolute left-0 top-4 text-zinc-500 text-lg transition-all duration-300 pointer-events-none origin-top-left ${
                  formData.name
                    ? '-translate-y-7 scale-80 text-accent'
                    : 'peer-focus:-translate-y-7 peer-focus:scale-80 peer-focus:text-accent'
                }`}
              >
                What's your name?
              </label>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-zinc-800/60"></div>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-linear-to-r from-accent to-cyberpink transform scale-x-0 peer-focus:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>

            {/* Email Input */}
            <div className="relative group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full py-4 bg-transparent border-b-2 border-zinc-800 text-zinc-100 text-lg focus:outline-none focus:border-transparent transition-all duration-300"
                required
                disabled={status.submitting}
              />
              <label
                htmlFor="email"
                className={`absolute left-0 top-4 text-zinc-500 text-lg transition-all duration-300 pointer-events-none origin-top-left ${
                  formData.email
                    ? '-translate-y-7 scale-80 text-accent'
                    : 'peer-focus:-translate-y-7 peer-focus:scale-80 peer-focus:text-accent'
                }`}
              >
                Your email address
              </label>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-zinc-800/60"></div>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-linear-to-r from-accent to-cyberpink transform scale-x-0 peer-focus:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>

            {/* Message Input */}
            <div className="relative group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                rows="4"
                className="peer w-full py-4 bg-transparent border-b-2 border-zinc-800 text-zinc-100 text-lg focus:outline-none focus:border-transparent transition-all duration-300 resize-none"
                required
                disabled={status.submitting}
              ></textarea>
              <label
                htmlFor="message"
                className={`absolute left-0 top-4 text-zinc-500 text-lg transition-all duration-300 pointer-events-none origin-top-left ${
                  formData.message
                    ? '-translate-y-7 scale-80 text-accent'
                    : 'peer-focus:-translate-y-7 peer-focus:scale-80 peer-focus:text-accent'
                }`}
              >
                Tell me about your project...
              </label>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-zinc-800/60"></div>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-linear-to-r from-accent to-cyberpink transform scale-x-0 peer-focus:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>

            <button 
              type="submit"
              disabled={status.submitting}
              className="relative overflow-hidden group w-fit py-4 px-10 rounded-full font-bold text-lg text-white mt-4 bg-zinc-850 border border-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-accent/15 transition-all duration-300 cursor-pointer"
            >
              <span className="absolute inset-0 w-full h-full bg-linear-to-r from-accent to-cyberpink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-4 group-hover:gap-6 transition-all duration-300">
                {status.submitting ? 'Sending...' : 'Send Message'}
                {!status.submitting && (
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                )}
              </span>
            </button>
          </form>
        </div>
        
      </div>

      {/* Confirmation Popup Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-zinc-950/80 backdrop-blur-md z-50 flex items-center justify-center p-6 animate-fadeIn">
          <div className="card-premium p-8 sm:p-10 rounded-[2.5rem] max-w-sm w-full border border-zinc-800 text-center flex flex-col items-center relative overflow-hidden">
            {/* Accent light highlight */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl"></div>

            {/* Pulse Glow Circular Checked Checkmark */}
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 shadow-lg shadow-emerald-500/10 animate-bounce">
              <FiCheck size={32} />
            </div>

            {/* Title */}
            <h4 className="text-2xl font-bold text-zinc-100 mb-2">Message Sent!</h4>
            
            {/* Description */}
            <p className="text-zinc-400 text-sm font-light leading-relaxed mb-8">
              Thank you for reaching out! Your details have been submitted successfully, and I will get back to you within 24 hours.
            </p>

            {/* GOT IT button */}
            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full py-3.5 rounded-full font-bold text-sm text-white bg-zinc-900 border border-zinc-850 hover:bg-zinc-800 hover:border-zinc-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md cursor-pointer"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
