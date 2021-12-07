import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarTeam from '../components/navbar_team'
import Member from '../components/member'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './team.module.css'

const Team = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Team - BlissRoms</title>
        <meta
          name="description"
          content="BlissRoms. An open-source operating system based on Android with customizations, options, and added security features."
        />
        <meta property="og:title" content="Team - BlissRoms" />
        <meta
          property="og:description"
          content="BlissRoms. An open-source operating system based on Android with customizations, options, and added security features."
        />
      </Helmet>
      <NavbarTeam rootClassName="rootClassName"></NavbarTeam>
      <div className={styles['Herosection']}>
        <div className={styles['container01']}>
          <span className={styles['text']}>
            <span>
              Meet
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>the</span>
            <br></br>
            <span className={styles['text04']}>Developer</span>
            <br></br>
            <span className={styles['text06']}>Team</span>
          </span>
          <span className={` ${styles['text07']} ${projectStyles['h6-20']} `}>
            Our development team is a group of people that work together to
            create the blissful experience for you.
          </span>
        </div>
        <img
          alt="image"
          src="/playground_assets/teamwork-1500h.png"
          className={styles['image']}
        />
      </div>
      <div className={styles['scroll-down']}>
        <svg viewBox="0 0 1024 1024" className={styles['icon']}>
          <path d="M854 512l-342 342-342-342 62-60 238 238v-520h84v520l240-238z"></path>
        </svg>
        <div className={styles['container02']}>
          <span className={styles['text08']}>
            <span>Scroll</span>
            <br></br>
            <span>Down</span>
          </span>
        </div>
      </div>
      <div className={styles['coremembers']}>
        <span className={` ${styles['text12']} ${projectStyles['h3-36']} `}>
          Core Members
        </span>
        <div className={styles['container03']}>
          <div className={styles['container04']}>
            <Member
              text="Founder / CEO / Lead Developer"
              heading="Jackeagle"
              image_src="https://administrators.blissroms.org/storage/uploads/avatar/jackeagle_1615397360.jpeg"
              rootClassName="rootClassName"
            ></Member>
            <Member
              text="CFO / HR"
              heading="Donna West"
              image_src="https://administrators.blissroms.org/storage/uploads/avatar/donna_1615397691.jpg"
              rootClassName="rootClassName3"
            ></Member>
          </div>
          <div className={styles['container05']}>
            <Member
              text="Board Member"
              heading="Antonio Luciano"
              image_src="https://administrators.blissroms.org/storage/uploads/avatar/antonio_1615397746.jpeg"
              rootClassName="rootClassName2"
            ></Member>
            <Member
              text="Board Member"
              heading="customworx"
              image_src="https://administrators.blissroms.org/storage/uploads/avatar/custom_1615440519.jpeg"
              rootClassName="rootClassName1"
            ></Member>
          </div>
        </div>
        <div className={styles['container06']}>
          <div className={styles['container07']}>
            <Member
              text="Backend Developer / Lead Maintainer"
              heading="Eric Park"
              image_src="https://administrators.blissroms.org/storage/uploads/avatar/eric_1615432668.jpeg"
              rootClassName="rootClassName4"
            ></Member>
            <Member
              text="Lead Developer"
              heading="Rohan Purohit"
              image_src="https://administrators.blissroms.org/storage/uploads/avatar/rohan_1615432707.jpeg"
              rootClassName="rootClassName5"
            ></Member>
          </div>
          <div className={styles['container08']}>
            <Member
              text="Server Administrator"
              heading="Vaughn"
              image_src="https://administrators.blissroms.org/storage/uploads/avatar/vaughn_1615441296.png"
              rootClassName="rootClassName6"
            ></Member>
            <Member
              text="Server Administrator"
              heading="Deepak Sharma"
              image_src="https://administrators.blissroms.org/storage/uploads/avatar/deepak_1615432964.jpeg"
              rootClassName="rootClassName7"
            ></Member>
          </div>
        </div>
        <div className={styles['container09']}>
          <div className={styles['container10']}>
            <Member
              text="Wiki Lead"
              heading="EvilVenÃ¸m"
              image_src="https://administrators.blissroms.org/storage/uploads/avatar/evilvenom_1616695344.jpeg"
              rootClassName="rootClassName8"
            ></Member>
            <Member
              text="Graphics Designer"
              heading="Bounty\n"
              image_src="https://administrators.blissroms.org/storage/uploads/avatar/bounty_1628012042.jpg"
              rootClassName="rootClassName9"
            ></Member>
          </div>
          <div className={styles['container11']}>
            <Member
              text="Graphics Designer"
              heading="Adnan Faysal"
              image_src="https://administrators.blissroms.org/storage/uploads/avatar/adnan_1632894945.jpg"
              rootClassName="rootClassName10"
            ></Member>
            <Member
              text="Lead Developer"
              heading="utzcoz"
              image_src="https://administrators.blissroms.org/storage/uploads/avatar/utzoz_1615729927.png"
              rootClassName="rootClassName14"
            ></Member>
          </div>
        </div>
        <div className={styles['container12']}>
          <Member
            text="CTO / OS Lead Developer"
            heading="Jon West"
            image_src="https://administrators.blissroms.org/storage/uploads/avatar/electrikjesus_1615397569.png"
            rootClassName="rootClassName15"
          ></Member>
          <Member
            text="App Developer"
            heading="theGeekyLad"
            image_src="https://administrators.blissroms.org/storage/uploads/avatar/geekylad_1629779195.png"
            rootClassName="rootClassName11"
          ></Member>
        </div>
      </div>
      <Footer rootClassName="rootClassName"></Footer>
    </div>
  )
}

export default Team
