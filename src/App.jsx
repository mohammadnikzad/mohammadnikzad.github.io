import { useState } from 'react'
import profilePic from './assets/profile.jpeg'
// import aboutPic from './assets/about-pic.png'
import aboutPic from './assets/about-pic-2.jpg'
import experienceIcon from './assets/experience.png'
import educationIcon from './assets/education.png'
import arrowIcon from './assets/arrow.png'
import linkedinIcon from './assets/linkedin.png'
import githubIcon from './assets/github.png'
import emailIcon from './assets/email.png'
import checkmark from './assets/checkmark.png'
import project1 from './assets/project-1.png'
import project2 from './assets/project-2.png'
import project3 from './assets/project-3.png'
import cvFile from './assets/lebenslauf.pdf'

const projects = [
  {
    title: 'Matnnama',
    type: 'app',
    platform: 'android',
    image: project1,
    bazaarLink: 'https://cafebazaar.ir/app/ir.matnnama.android?l=en',
    playLink:
      'https://play.google.com/store/apps/details?id=ir.matnnama.android',
  },
  {
    title: 'Project Two',
    type: 'web',
    image: project2,
    github: 'https://github.com/',
    live: 'https://github.com/',
  },
  {
    title: 'Project Three',
    type: 'web',
    image: project3,
    github: 'https://github.com/',
    live: 'https://github.com/',
  },
]

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const projectImages = [project1, project2, project3]

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <nav id='desktop-nav'>
        <div className='logo'>Mohammad Nikzadfarokhi</div>
        <div>
          <ul className='nav-links'>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#experience'>Experience</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id='hamburger-nav'>
        <div className='logo'>Mohammad Nikzadfarokhi</div>
        <div className='hamburger-menu'>
          <div
            className={`hamburger-icon ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
            <li>
              <a href='#about' onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href='#experience' onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href='#projects' onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href='#contact' onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
      <section id='profile'>
        <div className='section__pic-container'>
          <img
            className='profile-pic'
            src={profilePic}
            alt='Mohammad Nikzadfarokhi profile'
          />
        </div>
        <div className='section__text'>
          <p className='section__text__p1'>Hello, I'm</p>
          <h1 className='title'>Mohammad Nikzadfarokhi</h1>
          <p className='section__text__p2'>Backend Developer</p>
          <div className='btn-container'>
            <button
              className='btn btn-color-2'
              onClick={() => window.open(cvFile)}
            >
              Download CV
            </button>
            <button
              className='btn btn-color-1'
              onClick={() => (window.location.href = './#contact')}
            >
              Contact Info
            </button>
          </div>
          <div id='socials-container'>
            <img
              src={linkedinIcon}
              alt='LinkedIn'
              className='icon'
              onClick={() =>
                window.open('https://www.linkedin.com/in/nikzadme', '_blank')
              }
            />
            <img
              src={githubIcon}
              alt='GitHub'
              className='icon'
              onClick={() =>
                window.open('https://github.com/mohammadnikzad', '_blank')
              }
            />
          </div>
        </div>
      </section>
      <section id='about'>
        <p className='section__text__p1'>Get To Know More</p>
        <h1 className='title'>About Me</h1>
        <div className='section-container'>
          <div className='section__pic-container'>
            <img src={aboutPic} alt='Profile picture' className='about-pic' />
          </div>
          <div className='about-details-container'>
            <div className='about-containers'>
              <div className='details-container'>
                <img
                  src={experienceIcon}
                  alt='Experience icon'
                  className='icon'
                />
                <h3>Experience</h3>
                <p>
                  7+ years <br />
                  Backend Development
                </p>
              </div>
              <div className='details-container'>
                <img
                  src={educationIcon}
                  alt='Education icon'
                  className='icon'
                />
                <h3>Education</h3>
                <p>
                  Recognized as an equivalent professional qualification by the
                  IHK Hannover
                </p>
              </div>
            </div>
            <div className='text-container'>
              <p>
                Experienced Backend Developer with over 9 years of experience in
                software development, specializing in scalable web solutions.
                Spent around 4 years working extensively with PHP, Laravel, and
                MySQL. For more than 7 years, I have built expertise in Node.js,
                Express.js, NestJS, and MongoDB. Successfully optimized system
                architectures, resulting in 30% faster load times and improved
                system stability.
              </p>
            </div>
          </div>
        </div>
        <img
          src={arrowIcon}
          alt='Arrow icon'
          className='icon arrow'
          onClick={() => (window.location.href = './#experience')}
        />
      </section>
      <section id='experience'>
        <p className='section__text__p1'>Explore My</p>
        <h1 className='title'>Experience</h1>
        <div className='experience-details-container'>
          <div className='about-containers'>
            <div className='details-container'>
              <h2 className='experience-sub-title'>Frontend Development</h2>
              <div className='article-container'>
                {[
                  'HTML',
                  'CSS',
                  'React.js',
                  'JavaScript',
                  'TypeScript',
                  'Material UI',
                ].map((tech, i) => (
                  <article key={i}>
                    <img
                      src={checkmark}
                      alt='Experience icon'
                      className='icon'
                    />
                    <div>
                      <h3>{tech}</h3>
                      <p>
                        {tech === 'JavaScript' ? 'Experienced' : 'Intermediate'}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className='details-container'>
              <h2 className='experience-sub-title'>Backend Development</h2>
              <div className='article-container'>
                {[
                  'Node.js',
                  'Express.js',
                  'Nest.js',
                  'MongoDB',
                  'PostgreSQL',
                  'Git',
                ].map((tech, i) => (
                  <article key={i}>
                    <img
                      src={checkmark}
                      alt='Experience icon'
                      className='icon'
                    />
                    <div>
                      <h3>{tech}</h3>
                      <p>
                        {tech === 'PostgreSQL'
                          ? 'Basic'
                          : tech === 'MongoDB'
                          ? 'Intermediate'
                          : 'Experienced'}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
        <img
          src={arrowIcon}
          alt='Arrow icon'
          className='icon arrow'
          onClick={() => (window.location.href = './#projects')}
        />
      </section>
      <section id='projects'>
        <p className='section__text__p1'>Browse My Recent</p>
        <h1 className='title'>Projects</h1>
        <div className='experience-details-container'>
          {/* <div className='about-containers'>
            {[1, 2, 3].map((num, index) => (
              <div className='details-container color-container' key={num}>
                <div className='article-container'>
                  <img
                    src={projectImages[index]}
                    alt={`Project ${num}`}
                    className='project-img'
                  />
                </div>
                <h2 className='experience-sub-title project-title'>
                  Project {['One', 'Two', 'Three'][num - 1]}
                </h2>
                <div className='btn-container'>
                  <button
                    className='btn btn-color-2 project-btn'
                    onClick={() =>
                      (window.location.href = 'https://github.com/')
                    }
                  >
                    Github
                  </button>
                  <button
                    className='btn btn-color-2 project-btn'
                    onClick={() =>
                      (window.location.href = 'https://github.com/')
                    }
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            ))}
          </div> */}
          <div className='about-containers'>
            {projects.map((project, index) => (
              <div className='details-container color-container' key={index}>
                <div className='article-container'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='project-img'
                  />
                </div>
                <h2 className='experience-sub-title project-title'>
                  {project.title}
                </h2>
                <div className='btn-container'>
                  {project.type === 'app' ? (
                    <>
                      <button
                        className='btn btn-color-2 project-btn'
                        onClick={() =>
                          window.open(project.bazaarLink, '_blank')
                        }
                      >
                        Cafebazaar
                      </button>
                      <button
                        className='btn btn-color-2 project-btn'
                        disabled
                        onClick={() =>
                          (window.location.href = project.playLink)
                        }
                      >
                        Google Play
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className='btn btn-color-2 project-btn'
                        onClick={() => (window.location.href = project.github)}
                      >
                        Github
                      </button>
                      <button
                        className='btn btn-color-2 project-btn'
                        onClick={() => (window.location.href = project.live)}
                      >
                        Live Demo
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          src={arrowIcon}
          alt='Arrow icon'
          className='icon arrow'
          onClick={() => (window.location.href = './#contact')}
        />
      </section>
      <section id='contact'>
        <p className='section__text__p1'>Get in Touch</p>
        <h1 className='title'>Contact Me</h1>
        <div className='contact-info-upper-container'>
          <div className='contact-info-container'>
            <img
              src={emailIcon}
              alt='Email icon'
              className='icon contact-icon email-icon'
            />
            <p>
              <a href='mailto:nikzad.engineer@gmail.com'>
                nikzad.engineer@gmail.com
              </a>
            </p>
          </div>
          <div className='contact-info-container'>
            <img
              src={linkedinIcon}
              alt='LinkedIn icon'
              className='icon contact-icon'
            />
            <p>
              <a target='_blank' href='https://www.linkedin.com/in/nikzadme'>
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>
      <footer>
        <nav>
          <div className='nav-links-container'>
            <ul className='nav-links'>
              <li>
                <a href='#about'>About</a>
              </li>
              <li>
                <a href='#experience'>Experience</a>
              </li>
              <li>
                <a href='#projects'>Projects</a>
              </li>
              <li>
                <a href='#contact'>Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <p>Copyright © 2023 Mohammad Nikzadfarokhi. All Rights Reserved.</p>
      </footer>
    </>
  )
}

export default App
