// pages/Projects.js
import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 2,
      title: "Rustic Farmhouse Website",
      description: "A website for a local farm stand, emphasizing organic produce and community.",
      category: "web",
      image: "doctor.png",
      tags: ["Web Design", "E-commerce", "Community"]
    },
    {
      id: 3,
      title: "Enchanted Forest Game UI",
      description: "UI design for a fantasy game with a whimsical, nature-inspired aesthetic.",
      category: "game",
      image: "womens_day_story.jpeg",
      tags: ["Game UI", "Fantasy", "Illustration"]
    },
    {
      id: 4,
      title: "Art video ",
      description: "A holistic wellness app that helps users track their mental and physical health.",
      category: "mobile",
      video: "art1.mp4",
      tags: ["Health", "Mobile", "UI/UX"]
    }, {
      id: 5,
      title: "Enchanted Forest Game UI",
      description: "UI design for a fantasy game with a whimsical, nature-inspired aesthetic.",
      category: "game",
      image: "mahamhal_8.png",
      tags: ["Game UI", "Fantasy", "Illustration"]
    },
    {
      id: 6,
      title: "Enchanted Forest Game UI",
      description: "UI design for a fantasy game with a whimsical, nature-inspired aesthetic.",
      category: "game",
      image: "Moo&Co.png",
      tags: ["Game UI", "Fantasy", "Illustration"]
    },
    {
      id: 7,
      title: "Enchanted Forest Game UI",
      description: "UI design for a fantasy game with a whimsical, nature-inspired aesthetic.",
      category: "game",
      image: "music.jpeg",
      tags: ["Game UI", "Fantasy", "Illustration"]
    },
    {
      id: 8,
      title: "Art video ",
      description: "A holistic wellness app that helps users track their mental and physical health.",
      category: "mobile",
      video: "Forengers _story.mp4",
      tags: ["Health", "Mobile", "UI/UX"]
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Design' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'game', label: 'Game UI' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="flex flex-1 justify-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-background-dark dark:text-background-light mb-4">My Projects</h1>
          <p className="text-lg text-background-dark/60 dark:text-background-light/60 max-w-2xl mx-auto">
            A selection of recent creations that highlight my dedication to crafting interfaces that are both intuitive and visually striking.
          </p>
        </div>

        {/* Filter Buttons */}
        {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeFilter === filter.key
                ? 'bg-primary text-background-dark'
                : 'bg-background-light dark:bg-background-dark text-background-dark/60 dark:text-background-light/60 hover:text-primary dark:hover:text-primary'
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div> */}

        {/* one image grid */}
        <section className="px-4 py-12 my-4 sm:px-0 bg-gradient-to-r from-[#7c2d12] to-[#9d174d] rounded-xl shadow-lg">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-3 text-3xl font-bold text-white font-display">
              Professional Artworks
            </h2>
            <p className="text-white/90 text-lg">
              A curated showcase of commissioned pieces and brand collaborations.
            </p>
          </div>
        </section>

        <section className="w-full">
          <div className="grid grid-cols-3 grid-rows-3 gap-0">
            <img src="/gridImage1.jpeg" alt="Grid part 1" className="w-full h-full object-cover" />
            <img src="/gridImage2.jpeg" alt="Grid part 2" className="w-full h-full object-cover" />
            <img src="/gridImage3.jpeg" alt="Grid part 3" className="w-full h-full object-cover" />
            <img src="/gridImage4.jpeg" alt="Grid part 4" className="w-full h-full object-cover" />
            <img src="/gridImage5.jpeg" alt="Grid part 5" className="w-full h-full object-cover" />
            <img src="/gridImage6.jpeg" alt="Grid part 6" className="w-full h-full object-cover" />
            <img src="/gridImage7.jpeg" alt="Grid part 7" className="w-full h-full object-cover" />
            <img src="/gridImage8.jpeg" alt="Grid part 8" className="w-full h-full object-cover" />
            <img src="/gridImage9.jpeg" alt="Grid part 9" className="w-full h-full object-cover" />
          </div>
        </section>

        <div className="flex flex-col my-4 gap-3 px-2">
          <h3
            className="text-xl font-semibold tracking-tight text-background-dark dark:text-background-light transition-colors duration-300 group-hover:text-primary">
            Project Title
          </h3>
          <p
            className="text-sm leading-relaxed text-background-dark/70 dark:text-background-light/70 transition-colors duration-300">
            Project Description
          </p>
        </div>
        {/* Another image */}
        <img
          src="tedx_bubble.png"
          alt="Banner"
          className="w-full h-64 md:h-96 object-cover mb-0 md:mb-0"
        />
        <img
          src="tedx_6.png"
          alt="Banner"
          className="w-full h-64 md:h-96 object-cover "
        />
        <div className="flex flex-col my-4 gap-3 px-2">
          <h3
            className="text-xl font-semibold tracking-tight text-background-dark dark:text-background-light transition-colors duration-300 group-hover:text-primary">
            Project Title
          </h3>
          <p
            className="text-sm leading-relaxed text-background-dark/70 dark:text-background-light/70 transition-colors duration-300">
            Project Description
          </p>
        </div>


        <img
          src="tedx_7.png"
          alt="Banner"
          className="w-full h-64 my-5 md:h-96 object-cover rounded-lg mb-8 
             transition-transform duration-500 hover:scale-105"
        />
        <div className="flex flex-col gap-3 px-2">
          <h3
            className="text-xl font-semibold tracking-tight text-background-dark dark:text-background-light transition-colors duration-300 group-hover:text-primary">
            Project Title
          </h3>
          <p
            className="text-sm leading-relaxed text-background-dark/70 dark:text-background-light/70 transition-colors duration-300">
            Project Description
          </p>
        </div>


        <img
          src="tedx_bubble_2.png"
          alt="Banner"
          className="w-full h-64 my-5 md:h-96 object-cover rounded-lg mb-8 
             transition-transform duration-500 hover:scale-105"
        />
        <div className="flex flex-col gap-3 px-2">
          <h3
            className="text-xl font-semibold tracking-tight text-background-dark dark:text-background-light transition-colors duration-300 group-hover:text-primary">
            Project Title
          </h3>
          <p
            className="text-sm leading-relaxed text-background-dark/70 dark:text-background-light/70 transition-colors duration-300">
            Project Description
          </p>
        </div>


        {/*Personal Projects Grid */}
        <section className="px-4 py-12 my-5 sm:px-0 bg-gradient-to-r from-rose-100 via-orange-100 to-yellow-100 rounded-xl shadow-md mt-8">
          <h2 className="mb-4 text-4xl font-bold text-center text-background-dark dark:text-background-light tracking-wide">
            Personal Artworks
          </h2>
          <p className="text-center text-lg text-gray-600 dark:text-gray-300">
            Explorations of emotion, nature, and personal storytelling through art.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="group flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden rounded-lg h-80 transition-transform duration-500 group-hover:scale-105 group-hover:shadow-lg">
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />

                )}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium text-background-dark dark:text-background-light transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="text-sm text-background-dark/60 dark:text-background-light/60">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full transition-colors duration-300 group-hover:bg-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-background-dark dark:text-background-light mb-4">
            Interested in Collaborating?
          </h2>
          <p className="text-background-dark/60 dark:text-background-light/60 mb-6">
            I'm always open to discussing new opportunities and creative projects.
          </p>
          <a
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-bold text-background-dark transition-transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;