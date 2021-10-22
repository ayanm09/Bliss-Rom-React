import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './download.module.css'

const Download = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <button
        className={` ${styles['button']} ${projectStyles['button-14']} ${projectStyles['button']} `}
      >
        {props.button}
      </button>
    </div>
  )
}

Download.defaultProps = {
  button: 'Download',
  rootClassName: '',
}

Download.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Download
