// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Cozy Cabin Retreat App",
      description: "A mobile app for booking cabin stays with a focus on natural beauty and relaxation.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOyNRzvpFGYrNLMHLsuYzmhRBKV6uTj6l6LPk4u6qCpObb94xA3BWq3l5Xr4CyPw2A559e-8VuOGWwaNuwu2ETFM5tB2M75sWmqlTeKCRXdMZJwG472XELZUU5E3qjPF20TMaUC5vku6BfZ9XUjHW46hdRB4oGrEVq1Y7oNi98pm-Xy8xNKZGewubUfbyGDX2yXFZkiToInLYih6BocGWqTJOXgHyzccztTKP93q033JQIwgw5uRGfwh8Rd4vSwyTY2cZBsJwF2so"
    },
    {
      id: 2,
      title: "Rustic Farmhouse Website",
      description: "A website for a local farm stand, emphasizing organic produce and community.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxoyaWqV3VwY07DksS7p2SwRRrXDQyWxyabhQiGJeeyndc413ylQyMAU52hH-PzSAvZYSt0iKbDKqzw_XSnW-908Ufk_vxTGUGaJmB4OXuXyOouTG2yLg5He2uT5F7zzVlMYx60J0RoRh_ErfGplGmHiAAM0heXMNWwD4iWzg-kvQZaSrTNNLTjo7tuMMPJ9Z_YK5QnN7IKBElCa65omqFCp-HAQ0cyQbuFxCTuE3atAi12HWPB1GW0A0pc0ryqN0Eh3ZvVmYNx34"
    },
    {
      id: 3,
      title: "Enchanted Forest Game UI",
      description: "UI design for a fantasy game with a whimsical, nature-inspired aesthetic.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTyUT6FWy2F-Wl2oqPofjJqllGEtG1d0fuHjKQp2CyeKTd9-CSUIsMlJFvoESi6ZNG3u29NV8IL72KN2zV6KArdSs99ai6C8PxJUAckCEZHfUV2mRlzeCbcPvkSdgGOR7R2ww0ZPjj_RMmaBlGRNMBwLNJNm0suK8n02U7Y8VDGCPYEoiuttnaRcovvhsbk94VE_jztOnK-vdyEfbM8B_BJmMGq9dS_Ws3Fmb5NzQqOqr17Eznr60sHgGeeixZdKjh5zL75WxAFUc"
    }
  ];

  return (
    <div className="flex flex-1 justify-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl">
        {/* Hero Section */}
        <div className="@container">
          <div className="p-0 @[480px]:p-4">
            <div
              className="relative flex min-h-[480px] flex-col items-center justify-center gap-6 rounded-xl bg-cover bg-center p-8 text-center text-white"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBw58WxKFmkLWS5WK56G8uh3mYwLhNR9bpum3rGNFlrvbT3cdgwppl_vQ93GI_Ct8pZ-8Ofx237WBCnLP_NmDH_6KtPjka4EbV6cEoz62Y5iZUll8_RafvOg3a2K69awyr_udC0cM1_mvXkmjZ0fZQYLK_91pC3x_KiYtav3kqTS_8CUj7t4K0EmvTiGkYFmJfT8xkiG6kidCVOVnQNguP3zy4P-iayWR-d97DUA3osPt8mPIDBAiHnWtcWiz6o5J_KUlzIdhZKBzo")`
              }}
            >
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-bold leading-tight @[480px]:text-6xl">Sutanuka Dey</h1>
                <p className="text-base font-normal @[480px]:text-lg">
                  Transforming imagination into timeless works of art.
                </p>
              </div>
              <Link
                to="/projects"
                className="h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-6 text-sm font-bold text-background-dark transition-transform hover:scale-105 @[480px]:text-base flex"
              >
                <span className="truncate">View Projects</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Projects Section */}
        <section className="px-4 py-12 sm:px-0">
          <h2 className="mb-6 text-3xl font-bold text-background-dark dark:text-background-light">Featured Projects</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map(project => (
              <div
  key={project.id}
  className="group flex flex-col gap-3 transition-transform duration-300 hover:-translate-y-2"
>
  <div
    className="aspect-video w-full rounded-lg bg-cover bg-center transition-transform duration-500 group-hover:scale-105 group-hover:shadow-lg"
    style={{ backgroundImage: `url(${project.image})` }}
  ></div>
  <div>
    <h3 className="text-lg font-medium text-background-dark dark:text-background-light group-hover:text-primary transition-colors">
      {project.title}
    </h3>
    <p className="text-sm text-background-dark/60 dark:text-background-light/60">
      {project.description}
    </p>
  </div>
</div>
            ))}
          </div>

          {/* All Artworks Button */}
          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-bold text-background-dark transition-transform hover:scale-105 hover:bg-primary/90"
            >
              View All Artworks
            </Link>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="px-4 py-12 sm:px-0">
          <h2 className="mb-6 text-3xl font-bold text-background-dark dark:text-background-light">About Me</h2>
          <p className="text-base leading-relaxed text-background-dark/80 dark:text-background-light/80 mb-6">
            Hi, I’m Sutanuka Dey — a UI designer passionate about blending creativity with clarity. My design philosophy embraces the cottagecore aesthetic, infusing natural textures and warmth into digital spaces that are as functional as they are beautiful.          </p>
          <Link
            to="/about"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold tracking-wide text-background-dark shadow-md transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5"
          >
            Discover My Story
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Home;