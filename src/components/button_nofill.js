import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './button_nofill.module.css'

const ButtonNofill = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <span className={` ${styles['text']} ${projectStyles['body-16']} `}>
        {props.Button}
      </span>
    </div>
  )
}

ButtonNofill.defaultProps = {
  rootClassName: '',
  Button: 'Download',
}

ButtonNofill.propTypes = {
  rootClassName: PropTypes.string,
  Button: PropTypes.string,
}

export default ButtonNofill
