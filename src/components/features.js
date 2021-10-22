import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './features.module.css'

const Features = (props) => {
  return (
    <div className={` ${styles['Features']} ${styles[props.rootClassName]} `}>
      <span className={` ${styles['text']} ${projectStyles['h4-28']} `}>
        {props.text}
      </span>
      <span className={styles['text01']}>{props.text1}</span>
      <div className={styles['Features1']}>
        <div className={styles['Sec-bb']}>
          <div className={styles['Security']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon']}>
              <path d="M512 42l384 172v256q0 178-110 325t-274 187q-164-40-274-187t-110-325v-256zM512 512v382q118-38 200-143t98-239h-298zM512 512v-376l-298 132v244h298z"></path>
            </svg>
            <span className={` ${styles['text02']} ${projectStyles['h6-20']} `}>
              {props.text2}
            </span>
            <span
              className={` ${styles['text03']} ${projectStyles['body-12']} `}
            >
              {props.text3}
            </span>
          </div>
          <div className={styles['Battery']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon02']}>
              <path d="M213.333 725.333h-85.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-341.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h136.107c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-136.107c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v341.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h85.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667zM640 298.667h85.333c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v341.333c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-136.107c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h136.107c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-341.333c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-85.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM1024 554.667v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667zM433.835 232.32l-170.667 256c-13.056 19.627-7.765 46.080 11.819 59.179 7.339 4.907 15.659 7.211 23.68 7.168h176.256l-126.464 189.653c-13.056 19.627-7.765 46.080 11.819 59.179s46.080 7.765 59.179-11.819l170.667-256c4.523-6.656 7.211-14.848 7.211-23.68 0-23.552-19.115-42.667-42.667-42.667h-176.256l126.464-189.653c13.056-19.627 7.765-46.080-11.819-59.179s-46.080-7.765-59.179 11.819z"></path>
            </svg>
            <span className={` ${styles['text04']} ${projectStyles['h6-20']} `}>
              {props.text4}
            </span>
            <span
              className={` ${styles['text05']} ${projectStyles['body-12']} `}
            >
              {props.text5}
            </span>
          </div>
        </div>
        <div className={styles['Design-settings']}>
          <div className={styles['focusondesign']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon04']}>
              <path d="M1018.17 291.89l-286.058-286.058c-9.334-9.334-21.644-7.234-27.356 4.666l-38.354 79.904 267.198 267.198 79.904-38.354c11.9-5.712 14-18.022 4.666-27.356z"></path>
              <path d="M615.384 135.384l-263.384 21.95c-17.5 2.166-32.080 5.898-37.090 28.752-0.006 0.024-0.012 0.042-0.018 0.066-71.422 343.070-314.892 677.848-314.892 677.848l57.374 57.374 271.986-271.99c-5.996-12.53-9.36-26.564-9.36-41.384 0-53.020 42.98-96 96-96s96 42.98 96 96-42.98 96-96 96c-14.82 0-28.852-3.364-41.384-9.36l-271.988 271.986 57.372 57.374c0 0 334.778-243.47 677.848-314.892 0.024-0.006 0.042-0.012 0.066-0.018 22.854-5.010 26.586-19.59 28.752-37.090l21.95-263.384-273.232-273.232z"></path>
            </svg>
            <span className={` ${styles['text06']} ${projectStyles['h6-20']} `}>
              {props.text6}
            </span>
            <span
              className={` ${styles['text07']} ${projectStyles['body-12']} `}
            >
              {props.text7}
            </span>
          </div>
          <img
            alt={props.image_alt}
            src={props.image_src}
            className={styles['image']}
          />
          <div className={styles['Settings']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon07']}>
              <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
            </svg>
            <span className={` ${styles['text08']} ${projectStyles['h6-20']} `}>
              {props.text8}
            </span>
            <span
              className={` ${styles['text09']} ${projectStyles['body-12']} `}
            >
              {props.text9}
            </span>
          </div>
        </div>
        <div className={styles['Perf-comp']}>
          <div className={styles['performance']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon09']}>
              <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM302.836 834.152c11.106-30.632 17.164-63.688 17.164-98.152 0-124.35-78.81-230.292-189.208-270.606 10.21-84.924 48.254-163.498 109.678-224.924 72.53-72.526 168.96-112.47 271.53-112.47s199 39.944 271.53 112.47c61.428 61.426 99.468 140 109.682 224.924-110.402 40.314-189.212 146.256-189.212 270.606 0 34.468 6.060 67.52 17.166 98.15-61.706 40.242-133.77 61.85-209.166 61.85-75.394 0-147.458-21.608-209.164-61.848zM551.754 640.996c13.878 3.494 24.246 16.080 24.246 31.004v64c0 17.6-14.4 32-32 32h-64c-17.6 0-32-14.4-32-32v-64c0-14.924 10.368-27.51 24.246-31.004l23.754-448.996h32l23.754 448.996z"></path>
            </svg>
            <span className={` ${styles['text10']} ${projectStyles['h6-20']} `}>
              {props.text10}
            </span>
            <span
              className={` ${styles['text11']} ${projectStyles['body-12']} `}
            >
              {props.text11}
            </span>
          </div>
          <div className={styles['compatibility']}>
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className={styles['image1']}
            />
            <span className={` ${styles['text12']} ${projectStyles['h6-20']} `}>
              {props.text12}
            </span>
            <span
              className={` ${styles['text13']} ${projectStyles['body-12']} `}
            >
              {props.text13}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features.defaultProps = {
  text6: 'Focus on design',
  text11:
    'Focused on speed and stability with tweaks to assist in the most demanding applications',
  text3:
    'We include many options for customization and theming throughout the OS',
  text5:
    'Extra options are provided to help tune battery consumption to the best levels',
  rootClassName: '',
  text2: 'Added Security',
  text: 'Itâs more than what you think',
  image_alt: 'image',
  image_src1: '/playground_assets/compatibility.svg',
  text8: 'Customized settings',
  image_alt1: 'image',
  image_src: '/playground_assets/bliss_logo.svg',
  text12: 'Compatibility',
  text10: 'Performance',
  text13:
    'We bring Bliss to every device we own. And our PC builds include extras for ARM/ARM64 app compatibility ',
  text7:
    'We include many options for customization and theming throughout the OS',
  text4: 'Battery-friendly',
  text1: 'A comprehesive overview of features',
  text9:
    'Choose settings depending on the criteria you value the most. With no limits.',
}

Features.propTypes = {
  text6: PropTypes.string,
  text11: PropTypes.string,
  text3: PropTypes.string,
  text5: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  text8: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src: PropTypes.string,
  text12: PropTypes.string,
  text10: PropTypes.string,
  text13: PropTypes.string,
  text7: PropTypes.string,
  text4: PropTypes.string,
  text1: PropTypes.string,
  text9: PropTypes.string,
}

export default Features
