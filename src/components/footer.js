import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './footer.module.css'

const Footer = (props) => {
  return (
    <footer
      id="footer"
      className={` ${styles['Footer']} ${styles[props.rootClassName]} `}
    >
      <div className={styles['container']}>
        <div className={styles['Logo']}>
          <div className={styles['Logo1']}>
            <img
              alt={props.image_alt}
              src={props.image_src}
              className={styles['image']}
            />
            <span className={` ${styles['text']} ${projectStyles['body-16']} `}>
              <span>Bliss Rom</span>
            </span>
          </div>
          <span className={styles['text02']}>
            <span>
              <span>
                An open-source operating system based on Android with
                customizations, options and added security features.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
        </div>
        <div className={styles['LinksContainer']}>
          <div className={styles['Container1']}>
            <div className={styles['community-Container']}>
              <span className={styles['text05']}>Community</span>
              <a
                href="https://t.me/Team_Bliss_Community"
                target="_blank"
                rel="noreferrer noopener"
                className={` ${styles['link']} ${projectStyles['Footerlink']} `}
              >
                <span>BlissRoms Telegram</span>
                <br></br>
                <span></span>
              </a>
              <a
                href="https://t.me/blissx86"
                target="_blank"
                rel="noreferrer noopener"
                className={` ${styles['link01']} ${projectStyles['Footerlink']} `}
              >
                Bliss OS Telegram
              </a>
              <a
                href="https://discord.gg/wwc4Aua4fp"
                target="_blank"
                rel="noreferrer noopener"
                className={` ${styles['link02']} ${projectStyles['Footerlink']} `}
              >
                Bliss Discord
              </a>
            </div>
            <div className={styles['sources-Container']}>
              <span className={styles['text08']}>Sources</span>
              <span className={projectStyles['Footerlink']}>
                BlissRoms Gerrit Review
              </span>
              <a
                href="https://review-x86.blissroms.com/"
                target="_blank"
                rel="noreferrer noopener"
                className={` ${styles['link03']} ${projectStyles['Footerlink']} `}
              >
                <span>Bliss OS (x86) Gerrit Review</span>
                <br></br>
                <span></span>
              </a>
              <a
                href="https://github.com/BlissRoms"
                target="_blank"
                rel="noreferrer noopener"
                className={` ${styles['link04']} ${projectStyles['Footerlink']} `}
              >
                BlissRoms GitHub
              </a>
              <a
                href="https://github.com/BlissRoms-Devices"
                target="_blank"
                rel="noreferrer noopener"
                className={` ${styles['link05']} ${projectStyles['Footerlink']} `}
              >
                BlissRoms-Devices GitHub
              </a>
              <a
                href="https://github.com/BlissRoms-x86"
                target="_blank"
                rel="noreferrer noopener"
                className={` ${styles['link06']} ${projectStyles['Footerlink']} `}
              >
                Bliss OS GitHub
              </a>
              <a
                href="https://github.com/BlissRoms-pine64"
                target="_blank"
                rel="noreferrer noopener"
                className={` ${styles['link07']} ${projectStyles['Footerlink']} `}
              >
                BlissRoms-PINE64 GitHub
              </a>
            </div>
          </div>
          <div className={styles['container2']}>
            <div className={styles['Contact']}>
              <span
                className={` ${styles['text12']} ${projectStyles['footer-Text-Style']} `}
              >
                Links
              </span>
              <a
                href="https://blissroms.org/team.html"
                target="_blank"
                rel="noreferrer noopener"
                className={` ${styles['link08']} ${projectStyles['Footerlink']} `}
              >
                Team members
              </a>
              <a
                href="https://status.blissroms.org/"
                target="_blank"
                rel="noreferrer noopener"
                className={` ${styles['link09']} ${projectStyles['Footerlink']} `}
              >
                Status
              </a>
              <a
                href="https://blog.blissroms.org/"
                target="_blank"
                rel="noreferrer noopener"
                className={` ${styles['link10']} ${projectStyles['Footerlink']} `}
              >
                Blog
              </a>
            </div>
            <div className={styles['Socials']}>
              <span
                className={` ${styles['text13']} ${projectStyles['footer-Text-Style']} `}
              >
                Follow Us
              </span>
              <div className={styles['IconGroup']}>
                <a
                  href="https://twitter.com/stayblissful"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles['link11']}
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className={projectStyles['icons']}
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/blissroms/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles['link12']}
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={` ${styles['icon02']} ${projectStyles['icons']} `}
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://github.com/BlissRoms"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles['link13']}
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={` ${styles['icon04']} ${projectStyles['icons']} `}
                  >
                    <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
                  </svg>
                </a>
                <a
                  href="https://t.me/BlissROM_Updates"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles['link14']}
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className={` ${styles['icon06']} ${projectStyles['icons']} `}
                  >
                    <path d="M679.429 746.857l84-396c7.429-34.857-12.571-48.571-35.429-40l-493.714 190.286c-33.714 13.143-33.143 32-5.714 40.571l126.286 39.429 293.143-184.571c13.714-9.143 26.286-4 16 5.143l-237.143 214.286-9.143 130.286c13.143 0 18.857-5.714 25.714-12.571l61.714-59.429 128 94.286c23.429 13.143 40 6.286 46.286-21.714zM1024 512c0 282.857-229.143 512-512 512s-512-229.143-512-512 229.143-512 512-512 512 229.143 512 512z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/stayblissful"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles['link15']}
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={` ${styles['icon08']} ${projectStyles['icons']} `}
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.reddit.com/r/BlissRoms"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles['link16']}
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className={` ${projectStyles['icons']} ${styles['icon10']} `}
                  >
                    <path d="M1024 483.429c0 44.571-25.143 82.857-62.286 101.714 4.571 17.714 6.857 36 6.857 54.857 0 180.571-204 326.857-455.429 326.857-250.857 0-454.857-146.286-454.857-326.857 0-18.286 2.286-36.571 6.286-53.714-38.286-18.857-64.571-57.714-64.571-102.857 0-62.857 50.857-113.714 113.714-113.714 32.571 0 61.714 13.714 82.857 36 77.143-53.714 180-88.571 294.286-92.571l66.286-297.714c2.286-10.286 13.143-17.143 23.429-14.857l210.857 46.286c13.714-27.429 42.857-46.857 76-46.857 47.429 0 85.714 38.286 85.714 85.143 0 47.429-38.286 85.714-85.714 85.714-46.857 0-85.143-38.286-85.143-85.143l-190.857-42.286-59.429 269.714c114.857 3.429 218.857 37.714 296.571 91.429 20.571-21.714 49.714-34.857 81.714-34.857 62.857 0 113.714 50.857 113.714 113.714zM238.857 597.143c0 47.429 38.286 85.714 85.143 85.714 47.429 0 85.714-38.286 85.714-85.714 0-46.857-38.286-85.143-85.714-85.143-46.857 0-85.143 38.286-85.143 85.143zM701.714 800c8.571-8.571 8.571-21.143 0-29.714-8-8-21.143-8-29.143 0-34.286 34.857-108 46.857-160.571 46.857s-126.286-12-160.571-46.857c-8-8-21.143-8-29.143 0-8.571 8-8.571 21.143 0 29.714 54.286 54.286 158.857 58.286 189.714 58.286s135.429-4 189.714-58.286zM700 682.857c46.857 0 85.143-38.286 85.143-85.714 0-46.857-38.286-85.143-85.143-85.143-47.429 0-85.714 38.286-85.714 85.143 0 47.429 38.286 85.714 85.714 85.714z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['Separator']}></div>
    </footer>
  )
}

Footer.defaultProps = {
  image_alt: 'logo',
  image_src: '/playground_assets/bliss%20logo1.svg',
  rootClassName: '',
}

Footer.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Footer
