import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './button.module.css'

const Button = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <span className={` ${styles['text']} ${projectStyles['body-16']} `}>
        {props.Button}
      </span>
    </div>
  )
}

Button.defaultProps = {
  Button: 'Download',
  rootClassName: '',
}

Button.propTypes = {
  Button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Button
