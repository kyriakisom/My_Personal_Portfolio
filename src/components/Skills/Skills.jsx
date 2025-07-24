import React, { useState } from "react";
import styles from "./Skills.module.css";
import { getImageUrl } from "../../utils";
import { motion, AnimatePresence } from "framer-motion";

import backendSkills from "../../data/backend.json";
import databaseSkills from "../../data/database.json";
import languageSkills from "../../data/languages.json";
import securitySkills from "../../data/security.json";
import frontSkills from "../../data/front.json";
import toolSkills from "../../data/tools.json";
import msSkills from "../../data/ms.json";
import erpSkills from "../../data/erp.json";

const skillCategories = [
  { id: "backend", title: "Backend", skills: backendSkills },
  { id: "database", title: "Databases", skills: databaseSkills },
  { id: "erp", title: "ERP Systems", skills: erpSkills },
  { id: "languages", title: "Programming Languages", skills: languageSkills },
  { id: "ms", title: "Microsoft Office", skills: msSkills },
  { id: "security", title: "Security", skills: securitySkills },
  { id: "front", title: "Frontend", skills: frontSkills },
  { id: "tools", title: "Design & Dev Tools", skills: toolSkills },
];

export const Skills = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (id) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  return (
    <section className={styles.container}>
      {skillCategories.map((category) => (
        <div key={category.id} className={styles.accordionItem}>
          <button
            className={styles.accordionHeader}
            onClick={() => toggleCategory(category.id)}
          >
            {category.title}
            <span className={styles.icon}>
              {openCategory === category.id ? "−" : "+"}
            </span>
          </button>

          <AnimatePresence>
            {openCategory === category.id && (
              <motion.div
               className={styles.skills}
               initial={{ height: 0, opacity: 0 }}
               animate={{ height: "auto", opacity: 1 }}
               exit={{ height: 0, opacity: 0 }}
               transition={{ duration: 0.2, ease: "easeInOut" }}
>

                {category.skills.map((skill, index) => (
                  <div key={index} className={styles.skill}>
                    <div className={styles.skillImageContainer}>
                      <img
                        src={getImageUrl(skill.imageSrc)}
                        alt={skill.title}
                      />
                    </div>
                    <p>{skill.title}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </section>
  );
};
