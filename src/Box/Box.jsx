import React from 'react'
import PropTypes from 'prop-types'

import STYLES from "./Box.module.css"

export default function Box({children}) {
  return (
    <div className={STYLES.Box}>{children}</div>
  )
}

Box.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
