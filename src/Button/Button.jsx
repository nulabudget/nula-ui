import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import STYLES from "./Button.module.css";

export default function Button({ children, fluid = false, onClick, type = "submit"  }) {
  const className = classNames(STYLES.Button, {
    [STYLES.ButtonFluid]: fluid,
  });

  const handleClick = (e) => {
    if(onClick) {
      onClick(e);
    }
  }

  return (
    <button className={className} onClick={handleClick} type={type}>
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
