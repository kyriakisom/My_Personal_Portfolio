import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";
import Modal from "./Modal";

import projects from "../../data/projects.json";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1.2}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
           0: {
      slidesPerView: 1, 
    },
          640: { slidesPerView: 1.3 },
          768: { slidesPerView: 2.0 },
          1024: { slidesPerView: 3.0},
        }}
        className={styles.swiper}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard project={project} openModal={openModal} />
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedProject && (
        <Modal
          title={selectedProject.title}
          description={selectedProject.description}
          closeModal={closeModal}
        />
      )}
    </section>
  );
};
