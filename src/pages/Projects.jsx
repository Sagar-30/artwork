// pages/Projects.js
import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Cozy Cabin Retreat App",
      description: "A mobile app for booking cabin stays with a focus on natural beauty and relaxation.",
      category: "mobile",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOyNRzvpFGYrNLMHLsuYzmhRBKV6uTj6l6LPk4u6qCpObb94xA3BWq3l5Xr4CyPw2A559e-8VuOGWwaNuwu2ETFM5tB2M75sWmqlTeKCRXdMZJwG472XELZUU5E3qjPF20TMaUC5vku6BfZ9XUjHW46hdRB4oGrEVq1Y7oNi98pm-Xy8xNKZGewubUfbyGDX2yXFZkiToInLYih6BocGWqTJOXgHyzccztTKP93q033JQIwgw5uRGfwh8Rd4vSwyTY2cZBsJwF2so",
      tags: ["UI Design", "Mobile", "Travel"]
    },
    {
      id: 2,
      title: "Rustic Farmhouse Website",
      description: "A website for a local farm stand, emphasizing organic produce and community.",
      category: "web",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxoyaWqV3VwY07DksS7p2SwRRrXDQyWxyabhQiGJeeyndc413ylQyMAU52hH-PzSAvZYSt0iKbDKqzw_XSnW-908Ufk_vxTGUGaJmB4OXuXyOouTG2yLg5He2uT5F7zzVlMYx60J0RoRh_ErfGplGmHiAAM0heXMNWwD4iWzg-kvQZaSrTNNLTjo7tuMMPJ9Z_YK5QnN7IKBElCa65omqFCp-HAQ0cyQbuFxCTuE3atAi12HWPB1GW0A0pc0ryqN0Eh3ZvVmYNx34",
      tags: ["Web Design", "E-commerce", "Community"]
    },
    {
      id: 3,
      title: "Enchanted Forest Game UI",
      description: "UI design for a fantasy game with a whimsical, nature-inspired aesthetic.",
      category: "game",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTyUT6FWy2F-Wl2oqPofjJqllGEtG1d0fuHjKQp2CyeKTd9-CSUIsMlJFvoESi6ZNG3u29NV8IL72KN2zV6KArdSs99ai6C8PxJUAckCEZHfUV2mRlzeCbcPvkSdgGOR7R2ww0ZPjj_RMmaBlGRNMBwLNJNm0suK8n02U7Y8VDGCPYEoiuttnaRcovvhsbk94VE_jztOnK-vdyEfbM8B_BJmMGq9dS_Ws3Fmb5NzQqOqr17Eznr60sHgGeeixZdKjh5zL75WxAFUc",
      tags: ["Game UI", "Fantasy", "Illustration"]
    },
    {
      id: 4,
      title: "Botanical Garden App",
      description: "Mobile application for exploring and learning about plants in botanical gardens.",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=300&fit=crop",
      tags: ["Education", "Mobile", "Nature"]
    },
    {
      id: 5,
      title: "Artisan Marketplace",
      description: "E-commerce platform for local artisans to sell their handmade crafts.",
      category: "web",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tags: ["E-commerce", "Web Design", "Community"]
    },
    {
      id: 6,
      title: "Wellness Tracking App",
      description: "A holistic wellness app that helps users track their mental and physical health.",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      tags: ["Health", "Mobile", "UI/UX"]
    },
    // {
    //   id: 7,
    //   title: "Art video ",
    //   description: "A holistic wellness app that helps users track their mental and physical health.",
    //   category: "mobile",
    //   video: "/art1.mp4",
    //   tags: ["Health", "Mobile", "UI/UX"]
    // }
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
        <section className="px-4 py-12 my-4 sm:px-0 bg-gradient-to-r from-[#fdfcfb] to-[#d7ccc8] rounded-xl shadow-md">
          <h2 className="mb-4 text-4xl font-bold text-center text-background-dark dark:text-background-light tracking-wide">
            Professional Artworks
          </h2>
          <p className="text-center text-lg text-gray-600 dark:text-gray-300">
            A curated showcase of commissioned pieces and brand collaborations.
          </p>
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

        {/*Personal Projects Grid */}

        <section className="px-4 py-12 my-4 sm:px-0 bg-gradient-to-r from-[#fdfcfb] to-[#d7ccc8] rounded-xl shadow-md mt-8">
          <h2 className="mb-4 text-4xl font-bold text-center text-background-dark dark:text-background-light tracking-wide">
            Personal Artworks
          </h2>
          <p className="text-center text-lg text-gray-600 dark:text-gray-300">
            Explorations of emotion, nature, and personal storytelling through art.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="group flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden rounded-lg aspect-video transition-transform duration-500 group-hover:scale-105 group-hover:shadow-lg">
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>
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