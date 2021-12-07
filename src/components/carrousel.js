import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './carrousel.module.css'

const Carrousel = (props) => {
  return (
    <div className={` ${styles['Carrousel']} ${styles[props.rootClassName]} `}>
      <span className={` ${styles['Title']} ${projectStyles['h3-36']} `}>
        {props.Title}
      </span>
      <div className={styles['images']}>
        <div data-action="goLeft" className={styles['GoLeft']}>
          <svg viewBox="0 0 1024 1024" className={styles['icon']}>
            <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
          </svg>
        </div>
        <div className={styles['Slider']}>
          <div className={styles['SlidesContainer']}>
            <img
              src={props.Left_src1}
              className={` ${styles['Left']} ${projectStyles['hidden-element']} ${projectStyles['left-element']} ${projectStyles['left-element-initial']} `}
            />
            <img
              src={props.Left_src}
              className={` ${styles['Left1']} ${projectStyles['left-element']} ${projectStyles['left-element-initial']} `}
            />
            <img
              src={props.Mid_src}
              loading="lazy"
              className={` ${styles['Mid']} ${projectStyles['mid-element']} ${projectStyles['mid-element-initial']} `}
            />
            <img
              src={props.Right_src}
              className={` ${styles['Right']} ${projectStyles['right-element-initial']} ${projectStyles['right-element']} `}
            />
            <img
              src={props.Right_src1}
              className={` ${styles['Right1']} ${projectStyles['hidden-element']} ${projectStyles['right-element-initial']} ${projectStyles['right-element']} `}
            />
          </div>
        </div>
        <div data-action="goRight" className={styles['GoRight']}>
          <svg viewBox="0 0 1024 1024" className={styles['icon2']}>
            <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

Carrousel.defaultProps = {
  Mid_src:
    'https://images.unsplash.com/photo-1638204956063-5e65c3288d3c?ixid=Mnw5MTMyMXwwfDF8YWxsfDE3fHx8fHx8Mnx8MTYzODI5Mzg3NQ&ixlib=rb-1.2.1&h=300',
  Left_src1:
    'https://images.unsplash.com/photo-1638292597251-6fe6b2ba50f9?ixid=Mnw5MTMyMXwwfDF8YWxsfDN8fHx8fHwyfHwxNjM4MzQwMjk2&ixlib=rb-1.2.1&h=300',
  Right_src:
    'https://images.unsplash.com/photo-1638210574680-b30164f073f3?ixid=Mnw5MTMyMXwwfDF8YWxsfDE5fHx8fHx8Mnx8MTYzODI5NzAzOQ&ixlib=rb-1.2.1&h=300',
  Left_src:
    'https://images.unsplash.com/photo-1638190654307-66662e77fed9?ixid=Mnw5MTMyMXwwfDF8YWxsfDN8fHx8fHwyfHwxNjM4MjkzODc1&ixlib=rb-1.2.1&h=300',
  rootClassName: '',
  Right_src1:
    'https://images.unsplash.com/photo-1638043883400-33d4ab1017a1?ixid=Mnw5MTMyMXwwfDF8YWxsfDV8fHx8fHwyfHwxNjM4MzQwMjk2&ixlib=rb-1.2.1&h=300',
  Title: 'Screenshots',
}

Carrousel.propTypes = {
  Mid_src: PropTypes.string,
  Left_src1: PropTypes.string,
  Right_src: PropTypes.string,
  Left_src: PropTypes.string,
  rootClassName: PropTypes.string,
  Right_src1: PropTypes.string,
  Title: PropTypes.string,
}

export default Carrousel
