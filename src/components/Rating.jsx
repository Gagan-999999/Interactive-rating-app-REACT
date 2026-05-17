import Button from "./Button";
import Modal from "./Modal";
import styles from "./Rating.module.css";

function Rating({ selectedRating, onSelectRating, onFormSubmit }) {
  return (
    <Modal classType={styles.rating} headingId="rating-heading">
      <div aria-hidden="true" className={styles.star}>
        <img src="icon-star.svg" alt="" width={17} height={15} />
      </div>
      <h1 id="rating-heading">How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form onSubmit={onFormSubmit}>
        <fieldset>
          <legend className="sr-only">How would you rate our support?</legend>
          {Array.from({ length: 5 }, (_, i) => {
            const ratingValue = i + 1;
            return (
              <div key={ratingValue}>
                <label htmlFor={`rating-${ratingValue}`}>{ratingValue}</label>
                <input
                  type="radio"
                  value={ratingValue}
                  name="rating"
                  id={`rating-${ratingValue}`}
                  className="sr-only"
                  checked={ratingValue === selectedRating}
                  onChange={onSelectRating}
                />
              </div>
            );
          })}
        </fieldset>
        <Button
          btnType="submit"
          isDisabled={selectedRating === 0}
          ariaDescribedBy="instruction"
        >
          submit
        </Button>
        <p id="instruction" className="sr-only">
          Please select a rating before submitting.
        </p>
      </form>
    </Modal>
  );
}

export default Rating;
