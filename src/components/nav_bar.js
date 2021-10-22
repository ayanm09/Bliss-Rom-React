import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import NavElement from './nav_element'
import Button from './button'
import projectStyles from '../style.module.css'
import styles from './nav_bar.module.css'

const NavBar = (props) => {
  return (
    <nav
      className={` ${styles['Header']} ${projectStyles['Navbar']} ${
        styles[props.rootClassName]
      } `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <div className={styles['container']}>
        <nav className={styles['Navelements']}>
          <NavElement></NavElement>
          <NavElement Home="Features"></NavElement>
          <Link to="/team" className={styles['navlink']}>
            <NavElement
              Home="Team"
              className={` ${styles['component2']} ${projectStyles['thqLink']} `}
            ></NavElement>
          </Link>
          <NavElement Home="Gear"></NavElement>
          <NavElement Home="Blog"></NavElement>
        </nav>
      </div>
      <div className={styles['BtnGroup']}>
        <Button rootClassName="rootClassName3"></Button>
      </div>
      <svg viewBox="0 0 1024 1024" className={styles['icon']}>
        <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
      </svg>
    </nav>
  )
}

NavBar.defaultProps = {
  image_alt: 'logo',
  image_src: '/playground_assets/nav_logo.svg',
  rootClassName: '',
}

NavBar.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavBar
