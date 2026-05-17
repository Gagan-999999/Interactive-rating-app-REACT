import styles from "./Modal.module.css";

function Modal({ children, classType, headingId }) {
  return (
    <section
      className={`${styles.modal} ${classType || ""}`}
      aria-labelledby={headingId}
    >
      {children}
    </section>
  );
}

export default Modal;
