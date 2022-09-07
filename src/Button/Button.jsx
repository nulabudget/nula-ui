import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import styles from "./Button.module.scss";

export default function Button({
  children,
  fluid = false,
  onClick,
  type = "submit",
}) {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  console.log(styles);

  return (
    <button
      className={cn(styles.Button, { [styles["Button--fluid"]]: fluid })}
      onClick={handleClick}
      type={type}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["submit", "reset", "button"]),
};
