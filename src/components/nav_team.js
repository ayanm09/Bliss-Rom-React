import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './nav_team.module.css'

const NavTeam = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <span
        className={` ${styles['text']} ${projectStyles['subtitle-16']} ${projectStyles['navelement']} `}
      >
        {props.Home}
      </span>
    </div>
  )
}

NavTeam.defaultProps = {
  Home: 'Home',
  rootClassName: '',
}

NavTeam.propTypes = {
  Home: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavTeam
