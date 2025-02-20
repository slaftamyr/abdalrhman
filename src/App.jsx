 
 import React, { useState } from "react";
 import "./App.css";
 import { Swiper, SwiperSlide } from "swiper/react";
 import "swiper/css";
 import "swiper/css/navigation";
 import { Navigation, Autoplay } from "swiper/modules";
 import { FaWhatsapp, FaFacebook, FaBriefcase, FaTools, FaHome, FaPhone } from "react-icons/fa";
 import Modal from "react-modal";
 
 const images = ["/images/proj7.jpg", "/images/proj1.jpg", "/images/proj3.jpg", "/images/proj4.jpg", "/images/proj2.jpg" , "/images/proj5.jpg" , "/images/proj6.jpg"];
 
 const projects = [
   { id: 1,  image: "/images/proj1.jpg" },
   { id: 2,  image: "/images/proj2.jpg" },
   { id: 3,  image: "/images/proj3.jpg" },
   { id: 4,   image: "/images/proj4.jpg" },
   { id: 5,   image: "/images/proj5.jpg"},
   { id: 6,   image: "/images/proj6.jpg"},
   { id: 7,   image: "/images/proj7.jpg"},
 ];
 
 const services = [
   { id: 1, title: "تصميم استكرات", description: "تصميم استكرات احترافية بجودة عالية تناسب مختلف الاستخدامات.", icon: "🎨" },
   { id: 2, title: "تصميم بوسترات", description: "بوسترات تسويقية مميزة تجذب الانتباه.", icon: "🖼️" },
   { id: 3, title: "تصميم بطاقة عمل", description: "تصميم كروت أعمال احترافية تعكس هويتك التجارية.", icon: "💳" },
   { id: 4, title: "تصميم قائمة الأسعار", description: "تصميم عصري وجذاب لقائمة أسعار المطاعم والمحلات.", icon: "📋" },
   { id: 5, title: "تصميم إعلانات سوشيال ميديا", description: "إعلانات إبداعية لزيادة التفاعل وجذب العملاء.", icon: "📢" },
   { id: 6, title: "بطاقة دعوة زواج، تهنئة مواليد وتخريج", description: "تصميم بطاقات دعوة مميزة تناسب جميع المناسبات.", icon: "💌" },
   { id: 7, title: "فيديو دعوة زواج، تهنئة مواليد وتخريج", description: "فيديوهات دعوة احترافية بلمسة إبداعية.", icon: "🎥" },
 ];
 
 Modal.setAppElement("#root");
 
 function App() {
   const [selectedProject, setSelectedProject] = useState(null);
 
   return (
     <div className="container">
       <nav className="navbar">
         <h1>Abd-Alrhman</h1>
         <ul>
           <li><a href="#portfolio"><FaHome /> </a> </li>
           <li><a href="#services"><FaTools /> </a> </li>
           <li><a href="#contact"><FaPhone /> </a> </li>
           <li><a href="#projects"><FaBriefcase /> </a></li>
         </ul>
       </nav>
 
       <section id="portfolio" className="slider">
         <Swiper modules={[Navigation, Autoplay]} spaceBetween={10} slidesPerView={1} loop={true} autoplay={{ delay: 3000, disableOnInteraction: false }} navigation>
           {images.map((img, index) => (
             <SwiperSlide key={index}>
               <img src={img} alt={`design-${index}`} className="slide-img" />
             </SwiperSlide>
           ))}
         </Swiper>
       </section>
 
       <section id="services" className="services">
         <h2>الخدمات</h2>
         <p className="quote">"شغفنا هو صنع تصاميم تحدث الفرق🤎🌱"</p>
         <div className="services-grid">
           {services.map((service) => (
             <div key={service.id} className="service-card">
               <span className="service-icon">{service.icon}</span>
               <h3>{service.title}</h3>
               <p>{service.description}</p>
             </div>
           ))}
         </div>
       </section>
 
       <section id="contact" className="info">
         <h3>تواصل معنا</h3>
         <div className="social-icons">
           <a href="https://wa.me/+249915977337" className="whatsapp"><FaWhatsapp /></a>
           <a href="https://www.facebook.com/share/1Y3rbg64R3/?mibextid=wwXIfr" className="facebook"><FaFacebook /></a>
         </div>
       </section>
 
       <section id="projects" className="projects">
         <h2>الأعمال والمشاريع</h2>
         <div className="projects-grid">
           {projects.map((project) => (
             <div key={project.id} className="project-card" onClick={() => setSelectedProject(project)}>
               <img src={project.image} alt={project.name} />
               <h3>{project.name}</h3>
             </div>
           ))}
         </div>
       </section>
 
       {selectedProject && (
         <Modal isOpen={!!selectedProject} onRequestClose={() => setSelectedProject(null)} className="modal" overlayClassName="overlay">
           <h2>{selectedProject.name}</h2>
           <img src={selectedProject.image} alt={selectedProject.name} />
           <button onClick={() => setSelectedProject(null)}>إغلاق</button>
         </Modal>
       )}
 
       <footer className="footer">
         <p>&copy; 2025 جميع الحقوق محفوظة  </p>
         <div className="social-icons">
           <a href="https://wa.me/+249915977337" className="whatsapp"><FaWhatsapp /></a>
           <a href="https://www.facebook.com/share/1Y3rbg64R3/?mibextid=wwXIfr" className="facebook"><FaFacebook /></a>
         </div>
       </footer>
     </div>
   );
 }
  

 export default App;
 