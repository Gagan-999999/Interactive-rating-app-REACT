import Button from "./Button";
import Modal from "./Modal";
import styles from "./ThankYou.module.css";

function ThankYou({ rating, onReset }) {
  return (
    <Modal classType={styles.thankYou} headingId="thank-you-heading">
      <img
        src="illustration-thank-you.svg"
        alt=""
        aria-hidden="true"
        width={162}
        height={108}
      />
      <p role="status" className={styles.status}>
        You selected {rating} out of 5
      </p>
      <h1 id="thank-you-heading" className={styles["thanks-title"]}>
        Thank you!
      </h1>
      <p className={styles.description}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to reach out!
      </p>
      <Button btnStyle="reset-btn" onclick={onReset}>
        Rate again
      </Button>
    </Modal>
  );
}

export default ThankYou;
