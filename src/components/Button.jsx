import styles from "./Button.module.css";

function Button({
  children,
  isDisabled = false,
  btnType = "button",
  ariaDescribedBy = "",
  btnStyle = "",
  onclick,
}) {
  return (
    <button
      type={btnType}
      aria-describedby={ariaDescribedBy}
      disabled={isDisabled}
      className={`${styles.button} ${styles[btnStyle] || ""}`}
      onClick={onclick}
    >
      {children}
    </button>
  );
}

export default Button;
