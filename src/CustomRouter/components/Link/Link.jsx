import { useNavigate } from "../../hooks/useNavigate";

import styles from "./styles.module.css";
import classnames from "classnames";

export const Link = ({ to, children, className }) => {
  const navigate = useNavigate();

  const onClick = (event) => {
    event.preventDefault();
    navigate(to);
  };

  return (
    <a
      href={to}
      className={classnames(styles.root, className)}
      onClick={onClick}
    >
      {children}
    </a>
  );
};
