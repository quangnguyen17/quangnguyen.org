import { FC } from 'react'
import './SinglePage.css'

const Banner = () => (
  <div className="banner">
    <p>
      Have an app idea but don't know where to start? Want to work together? Let's build something
      cool.{' '}
      <a href="mailto:wan15112001@gmail.com" target="_blank">
        Email me
      </a>{' '}
      and we'll chat.
    </p>
  </div>
)

const Header = () => (
  <header>
    <div className="heading">
      <h1>QUANG NGUYEN</h1>
      <p>Senior Software Engineer</p>
    </div>
    <img id="profile" src="profile.jpg" alt="profile" />
  </header>
)

const Bio = () => (
  <div className="bio">
    <p>
      <span>I'm a Senior Software Engineer at</span>
      <span> </span>
      <a href="https://rivian.com/" target="_blank">
        Rivian
      </a>{' '}
      based in the San Francisco Bay Area.
    </p>
    <p>
      +5 years of experience building real-world applications and dynamic backend systems using
      various tech stacks; wore multiple hats while juggling at numerous startups in the past;
      experienced working in various industries from telecommunication, entertainment and now
      automotive.
    </p>
    <p>
      You can find my resume <a href="/resume.pdf">here</a>.
    </p>
  </div>
)

const Services = () => (
  <>
    <h2 className="headline">Services I Offer</h2>
    <div>
      <p>
        I offer software development consulting services to help you build the product of your dream
        and achieve your goal. I can build apps / websites based on specific requirements. I can
        also help you with your exsting projects, such as fixings bugs, adding new features or
        investigating new technical solutions, etc.
      </p>
    </div>
  </>
)

const Connect = () => (
  <>
    <h2 className="headline">Connect With Me</h2>
    <div className="connect">
      <a href="https://github.com/quangnguyen17" target="_blank">
        <img className="github" src="github.png" alt="github.png" />
      </a>
      <a href="https://twitter.com/quangnguyen1501" target="_blank">
        <img className="twitter" src="twitter.png" alt="twitter.png" />
      </a>
      <a href="https://www.linkedin.com/in/quangnguyen2001" target="_blank">
        <img className="linkedin" src="linkedin.png" alt="linkedin.png" />
      </a>
    </div>
  </>
)

const Footer = () => (
  <footer>
    <p>© 2022 Quang Nguyen LLC. All Rights Reserved.</p>
    <a href="mailto:wan15112001@gmail.com" target="_blank">
      <img className="email" src="email.png" alt="email.png" />
    </a>
  </footer>
)

export const SinglePage: FC = () => (
  <div className="App">
    <Banner />
    <Header />
    <main>
      <Bio />
      <Services />
      <Connect />
    </main>
    <Footer />
  </div>
)