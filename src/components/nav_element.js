import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './nav_element.module.css'

const NavElement = (props) => {
  return (
    <div className={styles['container']}>
      <span className={` ${styles['text']} ${projectStyles['navelement']} `}>
        {props.Home}
      </span>
    </div>
  )
}

NavElement.defaultProps = {
  Home: 'Home',
}

NavElement.propTypes = {
  Home: PropTypes.string,
}

export default NavElement
