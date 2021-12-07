import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import NavElement from './nav_element'
import Button from './button'
import projectStyles from '../style.module.css'
import styles from './navbar_team.module.css'

const NavbarTeam = (props) => {
  return (
    <nav
      className={` ${projectStyles['Navbar']} ${
        projectStyles['navbar-fixed']
      } ${styles[props.rootClassName]} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <div className={styles['container']}>
        <nav className={styles['Nav-Elements-Desktop']}>
          <Link to="/" className={styles['navlink']}>
            <NavElement className={styles['component']}></NavElement>
          </Link>
          <Link to="/team" className={styles['navlink1']}>
            <NavElement
              Home="Team"
              className={styles['component1']}
            ></NavElement>
          </Link>
          <a
            href="https://bliss-family-store.creator-spring.com/"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link']}
          >
            <NavElement
              Home="Gear"
              className={styles['component2']}
            ></NavElement>
          </a>
          <a
            href="https://docs.blissroms.org/"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link1']}
          >
            <NavElement
              Home="Docs"
              className={styles['component3']}
            ></NavElement>
          </a>
        </nav>
      </div>
      <a href="#downloads">
        <div className={styles['BtnGroup']}>
          <Button
            rootClassName="rootClassName8"
            className={styles['component4']}
          ></Button>
        </div>
      </a>
      <div
        className={` ${styles['Burger-Menu']} ${projectStyles['teleport-menu-burger']} `}
      >
        <svg viewBox="0 0 1024 1024" className={styles['icon']}>
          <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </svg>
      </div>
      <nav
        className={` ${styles['Nav-Elements-Mobile']} ${projectStyles['teleport-menu-mobile']} `}
      >
        <Link
          to="/"
          className={` ${styles['navlink2']} ${projectStyles['h4-28']} ${projectStyles['mb-12']} ${projectStyles['navelement']} `}
        >
          {props.text}
        </Link>
        <a
          href="#features"
          className={` ${styles['link3']} ${projectStyles['h4-28']} ${projectStyles['mb-12']} ${projectStyles['navelement']} `}
        >
          {props.text1}
        </a>
        <Link
          to="/team"
          className={` ${styles['navlink3']} ${projectStyles['h4-28']} ${projectStyles['mb-12']} ${projectStyles['navelement']} `}
        >
          {props.text2}
        </Link>
        <span
          className={` ${styles['text']} ${projectStyles['h4-28']} ${projectStyles['mb-12']} ${projectStyles['navelement']} `}
        >
          {props.text3}
        </span>
        <span
          className={` ${styles['text1']} ${projectStyles['h4-28']} ${projectStyles['mb-12']} ${projectStyles['navelement']} `}
        >
          {props.text4}
        </span>
        <a href="#downloads">
          <div className={styles['BtnGroup1']}>
            <Button
              rootClassName="rootClassName9"
              className={styles['component5']}
            ></Button>
          </div>
        </a>
        <div
          className={` ${styles['container1']} ${projectStyles['teleport-menu-close']} `}
        >
          <svg viewBox="0 0 804.5714285714286 1024" className={styles['icon2']}>
            <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
          </svg>
        </div>
      </nav>
    </nav>
  )
}

NavbarTeam.defaultProps = {
  text3: 'Gear',
  text1: 'Features',
  image_alt: 'logo',
  text: 'Home',
  text2: 'Team',
  image_src: '/playground_assets/nav_logo.svg',
  text4: 'Blog',
  rootClassName: '',
}

NavbarTeam.propTypes = {
  text3: PropTypes.string,
  text1: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  image_src: PropTypes.string,
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavbarTeam
