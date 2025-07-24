import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ title, description, closeModal }) => {
  return (
    <div
      className={styles.modalOverlay}
      onClick={closeModal}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      aria-describedby="modalDesc"
    >
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.closeButton}
          onClick={closeModal}
          aria-label="Close modal"
        >
          ×
        </button>
        <h3 id="modalTitle" className={styles.modalTitle}>
          {title}
        </h3>
        <p id="modalDesc" className={styles.modalDescription}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Modal;
