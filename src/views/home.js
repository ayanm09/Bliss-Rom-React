import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Button from '../components/button'
import ButtonNofill from '../components/button_nofill'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>BlissRoms</title>
        <meta
          name="description"
          content="BlissRoms. An open-source operating system based on Android with customizations, options, and added security features."
        />
        <meta property="og:title" content="BlissRoms" />
        <meta
          property="og:description"
          content="BlissRoms. An open-source operating system based on Android with customizations, options, and added security features."
        />
      </Helmet>
      <Navbar rootClassName="rootClassName"></Navbar>
      <div className={styles['Hero']}>
        <span className={styles['text']}>BlissRoms</span>
        <span className={` ${styles['text01']} ${projectStyles['h6-20']} `}>
          An open-source operating system based on Android with customizations,
          options and added security features.
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <img
          alt="image"
          src="/playground_assets/phone_img-1500h.png"
          loading="lazy"
          className={styles['image']}
        />
      </div>
      <div id="features" className={styles['Features-section']}>
        <div className={styles['featuresheader']}>
          <span className={` ${styles['text02']} ${projectStyles['h4-28']} `}>
            Itâs more than what you think
          </span>
          <span className={` ${styles['text03']} ${projectStyles['body-16']} `}>
            A comprehesive overview of features
          </span>
        </div>
        <div className={styles['Features']}>
          <div className={styles['Sec-bb']}>
            <div className={styles['Security']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                <path d="M512 42l384 172v256q0 178-110 325t-274 187q-164-40-274-187t-110-325v-256zM512 512v382q118-38 200-143t98-239h-298zM512 512v-376l-298 132v244h298z"></path>
              </svg>
              <span
                className={` ${styles['text04']} ${projectStyles['h6-20']} `}
              >
                Added Security
              </span>
              <span
                className={` ${styles['text05']} ${projectStyles['body-12']} `}
              >
                We include many options for customization and theming throughout
                the OS
              </span>
            </div>
            <div className={styles['Battery']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon02']}>
                <path d="M213.333 725.333h-85.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-341.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h136.107c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-136.107c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v341.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h85.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667zM640 298.667h85.333c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v341.333c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-136.107c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h136.107c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-341.333c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-85.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM1024 554.667v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667zM433.835 232.32l-170.667 256c-13.056 19.627-7.765 46.080 11.819 59.179 7.339 4.907 15.659 7.211 23.68 7.168h176.256l-126.464 189.653c-13.056 19.627-7.765 46.080 11.819 59.179s46.080 7.765 59.179-11.819l170.667-256c4.523-6.656 7.211-14.848 7.211-23.68 0-23.552-19.115-42.667-42.667-42.667h-176.256l126.464-189.653c13.056-19.627 7.765-46.080-11.819-59.179s-46.080-7.765-59.179 11.819z"></path>
              </svg>
              <span
                className={` ${styles['text06']} ${projectStyles['h6-20']} `}
              >
                Battery-friendly
              </span>
              <span
                className={` ${styles['text07']} ${projectStyles['body-12']} `}
              >
                Extra options are provided to help tune battery consumption to
                the best levels
              </span>
            </div>
          </div>
          <div className={styles['Design-settings']}>
            <div className={styles['focusondesign']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon04']}>
                <path d="M1018.17 291.89l-286.058-286.058c-9.334-9.334-21.644-7.234-27.356 4.666l-38.354 79.904 267.198 267.198 79.904-38.354c11.9-5.712 14-18.022 4.666-27.356z"></path>
                <path d="M615.384 135.384l-263.384 21.95c-17.5 2.166-32.080 5.898-37.090 28.752-0.006 0.024-0.012 0.042-0.018 0.066-71.422 343.070-314.892 677.848-314.892 677.848l57.374 57.374 271.986-271.99c-5.996-12.53-9.36-26.564-9.36-41.384 0-53.020 42.98-96 96-96s96 42.98 96 96-42.98 96-96 96c-14.82 0-28.852-3.364-41.384-9.36l-271.988 271.986 57.372 57.374c0 0 334.778-243.47 677.848-314.892 0.024-0.006 0.042-0.012 0.066-0.018 22.854-5.010 26.586-19.59 28.752-37.090l21.95-263.384-273.232-273.232z"></path>
              </svg>
              <span
                className={` ${styles['text08']} ${projectStyles['h6-20']} `}
              >
                Focus on design
              </span>
              <span
                className={` ${styles['text09']} ${projectStyles['body-12']} `}
              >
                We include many options for customization and theming throughout
                the OS
              </span>
            </div>
            <img
              alt="image"
              src="/playground_assets/bliss_logo.svg"
              className={styles['image1']}
            />
            <div className={styles['Settings']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon07']}>
                <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
              </svg>
              <span
                className={` ${styles['text10']} ${projectStyles['h6-20']} `}
              >
                Customized settings
              </span>
              <span
                className={` ${styles['text11']} ${projectStyles['body-12']} `}
              >
                Choose settings depending on the criteria you value the most.
                With no limits.
              </span>
            </div>
          </div>
          <div className={styles['Perf-comp']}>
            <div className={styles['performance']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon09']}>
                <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM302.836 834.152c11.106-30.632 17.164-63.688 17.164-98.152 0-124.35-78.81-230.292-189.208-270.606 10.21-84.924 48.254-163.498 109.678-224.924 72.53-72.526 168.96-112.47 271.53-112.47s199 39.944 271.53 112.47c61.428 61.426 99.468 140 109.682 224.924-110.402 40.314-189.212 146.256-189.212 270.606 0 34.468 6.060 67.52 17.166 98.15-61.706 40.242-133.77 61.85-209.166 61.85-75.394 0-147.458-21.608-209.164-61.848zM551.754 640.996c13.878 3.494 24.246 16.080 24.246 31.004v64c0 17.6-14.4 32-32 32h-64c-17.6 0-32-14.4-32-32v-64c0-14.924 10.368-27.51 24.246-31.004l23.754-448.996h32l23.754 448.996z"></path>
              </svg>
              <span
                className={` ${styles['text12']} ${projectStyles['h6-20']} `}
              >
                Performance
              </span>
              <span
                className={` ${styles['text13']} ${projectStyles['body-12']} `}
              >
                Focused on speed and stability with tweaks to assist in the most
                demanding applications
              </span>
            </div>
            <div className={styles['compatibility']}>
              <img
                alt="image"
                src="/playground_assets/compatibility.svg"
                className={styles['image2']}
              />
              <span
                className={` ${styles['text14']} ${projectStyles['h6-20']} `}
              >
                Compatibility
              </span>
              <span
                className={` ${styles['text15']} ${projectStyles['body-12']} `}
              >
                We bring Bliss to every device we own. And our PC builds include
                extras for ARM/ARM64 app compatibility
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['Stats']}>
        <div className={styles['Stat']}>
          <svg viewBox="0 0 1152 1024" className={styles['icon11']}>
            <path d="M768 770.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
            <path d="M327.196 795.328c55.31-36.15 124.080-63.636 199.788-80.414-15.054-17.784-28.708-37.622-40.492-59.020-30.414-55.234-46.492-116.058-46.492-175.894 0-86.042 0-167.31 30.6-233.762 29.706-64.504 83.128-104.496 159.222-119.488-16.914-76.48-61.94-126.75-181.822-126.75-192 0-192 128.942-192 288 0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h279.006c14.518-12.91 30.596-25.172 48.19-36.672z"></path>
          </svg>
          <span className={styles['text16']}>Maintainer</span>
          <span className={styles['text17']}>Total no of maintainers</span>
          <h1 className={` ${styles['text18']} ${projectStyles['h3-48']} `}>
            <span>35</span>
          </h1>
        </div>
        <div className={styles['Stat1']}>
          <svg viewBox="0 0 1024 1024" className={styles['icon14']}>
            <path d="M214 768h596v86h-596v-86zM810 384l-298 298-298-298h170v-256h256v256h170z"></path>
          </svg>
          <span className={styles['text20']}>Downloads</span>
          <span className={styles['text21']}>Total no of downloads</span>
          <h1 className={` ${styles['text22']} ${projectStyles['h3-48']} `}>
            <span>7.2k</span>
          </h1>
        </div>
        <div className={styles['Stat2']}>
          <svg viewBox="0 0 1024 1024" className={styles['icon16']}>
            <path d="M938 726v-300h-170v300h170zM982 342q18 0 30 12t12 30v426q0 18-12 31t-30 13h-256q-18 0-31-13t-13-31v-426q0-18 13-30t31-12h256zM170 256v470h428v128h-598v-128h86v-470q0-34 25-60t59-26h768v86h-768z"></path>
          </svg>
          <span className={styles['text24']}>Devices</span>
          <span className={styles['text25']}>
            total no of supported devices
          </span>
          <h1 className={` ${styles['text26']} ${projectStyles['h3-48']} `}>
            <span>37</span>
          </h1>
        </div>
      </div>
      <div id="downloads" className={styles['downloads']}>
        <h1 className={projectStyles['h4-28']}>
          <span className={styles['text29']}>Downloads</span>
        </h1>
        <span className={` ${styles['text30']} ${projectStyles['body-12']} `}>
          <span>
            Open source software is code that is designed to be publicly
            accessible
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            anyone can see, modify, and distribute the code as they see fit.
          </span>
        </span>
        <div className={styles['container1']}>
          <div className={styles['container2']}>
            <div className={styles['PC']}>
              <h1 className={` ${styles['text33']} ${projectStyles['h5-24']} `}>
                Bliss OS for pc
              </h1>
              <span
                className={` ${styles['text34']} ${projectStyles['body-12']} `}
              >
                <span>
                  An Open Source OS, based on Android for PC&apos;s &amp;
                  Tablets
                </span>
              </span>
              <span
                className={` ${styles['text36']} ${projectStyles['body-12']} `}
              ></span>
              <a
                href="https://blissos.org/"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link']}
              >
                <Button
                  Button="Bliss OS"
                  rootClassName="rootClassName"
                  className={styles['component1']}
                ></Button>
              </a>
              <a
                href="https://android-generic.github.io/"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link1']}
              >
                <Button
                  Button="Android Generic"
                  rootClassName="rootClassName1"
                  className={styles['component2']}
                ></Button>
              </a>
            </div>
          </div>
          <div className={styles['Rom']}>
            <h1 className={` ${styles['text37']} ${projectStyles['h5-24']} `}>
              BlissRoms for mobile
            </h1>
            <span
              className={` ${styles['text38']} ${projectStyles['body-12']} `}
            >
              <span>An open-source operating system based on Android</span>
            </span>
            <a
              href="https://downloads.blissroms.org/"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link2']}
            >
              <Button
                Button="BlissRoms"
                rootClassName="rootClassName2"
                className={styles['component3']}
              ></Button>
            </a>
            <div className={styles['container3']}>
              <a
                href="https://sourceforge.net/projects/blissroms/files/https://sourceforge.net/projects/blissroms/files/"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link3']}
              >
                <ButtonNofill
                  Button="Earlier Builds"
                  rootClassName="rootClassName"
                  className={styles['component4']}
                ></ButtonNofill>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['joinbliss']}>
        <div className={styles['container4']}>
          <h1 className={` ${styles['text40']} ${projectStyles['h3-36']} `}>
            Join Bliss
          </h1>
          <h1 className={` ${styles['text41']} ${projectStyles['body-16']} `}>
            <span className={styles['text42']}>
              We are accepting applications for maintainer and team
            </span>
          </h1>
        </div>
        <a
          href="https://docs.google.com/forms/d/1NbZ0mDqYoTnGbqLcd_XXt8d_SwQ2erxIAEWXHzhElS0/viewform"
          target="_blank"
          rel="noreferrer noopener"
          className={` ${styles['link4']} ${projectStyles['button-14']} ${projectStyles['join']} ${projectStyles['button']} `}
        >
          Join
        </a>
      </div>
      <Footer rootClassName="rootClassName1"></Footer>
    </div>
  )
}

export default Home
