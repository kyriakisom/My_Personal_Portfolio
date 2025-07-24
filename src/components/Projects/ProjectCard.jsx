import React from "react";
import styles from "./ProjectCard.module.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi"; // ή χρησιμοποιείς άλλο redirect icon

const ProjectCard = ({ project, openModal }) => {
  return (
    <div className={styles.projectCard} tabIndex={0}>
      <div className={styles.projectImageWrapper}>
        <img
          className={styles.projectImage}
          src={project.imageSrc}
          alt={project.title}
          loading="lazy"
        />
      </div>
      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{project.title}</h3>

        <button
          className={styles.showDescriptionButton}
          onClick={() => openModal(project)}
          aria-label={`Show full description for ${project.title}`}
        >
          Show Details
        </button>

        <div className={styles.projectSkills}>
          {project.skills.map((skill, idx) => (
            <span key={idx} className={styles.projectSkill}>
              {skill}
            </span>
          ))}
        </div>

        <div className={styles.projectLinks}>
          {project.source && (
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectButton}
            >
              <FaGithub size={18} color="#ffffff" />
              Source
              <FiExternalLink size={18} color="#ffffff" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
