// pages/About.js
import React from 'react';

const About = () => {
  const skills = [
    "UI/UX Design",
    "User Research",
    "Wireframing & Prototyping",
    "Visual Design",
    "Design Systems",
    "Front-end Development",
    "Accessibility",
    "Design Thinking"
  ];

  return (
    <div className="flex flex-1 justify-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-background-dark dark:text-background-light mb-4">About Me</h1>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div 
              className="aspect-square rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQVw6ihOhRNRUaJseXWGdRocqNEvqAmU3VrZ8S9EyMVfXIBZW_bQXMvNxX18a5_AUQnwFsfuETHw8GgKwh9JPKopzMTw4zgULSeIZHjJfnB6uD0DR5PboFf_82EwgLKw2z2QR0PffaKFQE3k71LxZd_XvIauCr1-GtKG2Re1PgIHhxh671-m1BKeRMGQ9jDS37BJi2UxjPuEJEcvHb8Z-LxvyKlYRMaGE985FruDiLgVJ-9g4wxn8_Wsi0HgiZ5hzqcK3H39ZYGkg")'
              }}
            ></div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-background-dark dark:text-background-light mb-6">Sutanuka Dey</h2>
            <p className="text-base leading-relaxed text-background-dark/80 dark:text-background-light/80 mb-6">
              I'm a UI designer passionate about creating user interfaces that are both beautiful and functional. My design philosophy is rooted in the cottagecore aesthetic, blending natural elements with modern usability.
            </p>
            <p className="text-base leading-relaxed text-background-dark/80 dark:text-background-light/80 mb-6">
              I believe in crafting experiences that feel like a breath of fresh air, inviting and intuitive. With a background in visual arts and a keen eye for detail, I strive to bring a unique perspective to every project.
            </p>
            <p className="text-base leading-relaxed text-background-dark/80 dark:text-background-light/80">
              When I'm not designing, you can find me exploring nature trails, tending to my garden, or experimenting with new craft projects. These passions deeply influence my design work and help me create interfaces that feel authentic and connected to the natural world.
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-background-dark dark:text-background-light mb-8 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-primary/10 rounded-lg p-4 text-center hover:bg-primary/20 transition-colors"
              >
                <span className="text-background-dark dark:text-background-light font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-primary/5 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-background-dark dark:text-background-light mb-4 text-center">Let's Collaborate</h2>
          <p className="text-base leading-relaxed text-background-dark/80 dark:text-background-light/80 text-center mb-6">
            I'm always excited to take on new challenges and collaborate with like-minded individuals and teams. Whether you have a specific project in mind or just want to chat about design, I'd love to hear from you.
          </p>
          <div className="text-center">
            <a 
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-bold text-background-dark transition-transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 