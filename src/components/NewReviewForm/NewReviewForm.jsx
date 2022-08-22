import styles from "./styles.module.css";
import classnames from "classnames";
import { useReducer } from "react";
import { Rating } from "../Rating/Rating";

const FORM_ACTIONS = {
  setName: "setName",
  setText: "setText",
  setRating: "setRating",
};

const reducer = (state, action) => {
  switch (action?.type) {
    case FORM_ACTIONS.setName:
      return { name: action.payload.name, text: "", rating: 0 };
    case FORM_ACTIONS.setText:
      return { ...state, text: action.payload.text };
    case FORM_ACTIONS.setRating:
      return { ...state, rating: action.payload.rating };
    default:
      return state;
  }
};

export const NewReviewForm = ({ className }) => {
  const [form, dispatch] = useReducer(reducer, {
    name: "Artem",
    text: "text",
    rating: 0,
  });

  return (
    <div className={classnames(styles.root, className)}>
      <div className={styles.section}>
        <span className={styles.sectionTitle}>Name</span>
        <input
          value={form.name}
          onChange={(event) =>
            dispatch({
              type: FORM_ACTIONS.setName,
              payload: { name: event.target.value },
            })
          }
        />
      </div>

      <div className={styles.section}>
        <span className={styles.sectionTitle}>Text</span>
        <input
          value={form.text}
          onChange={(event) =>
            dispatch({
              type: FORM_ACTIONS.setText,
              payload: { text: event.target.value },
            })
          }
        />
      </div>

      <div className={styles.section}>
        <span className={styles.sectionTitle}>Rating</span>
        <Rating
          value={form.rating}
          onChange={(value) =>
            dispatch({
              type: FORM_ACTIONS.setRating,
              payload: { rating: value },
            })
          }
        />
      </div>
    </div>
  );
};
