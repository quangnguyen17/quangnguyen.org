import './app.css'

const Banner = () => (
  <div className="banner">
    <p>
      Have an app idea but don't know where to start? Want to work together? Let's build something
      cool.{' '}
      <a href="mailto:wan15112001@gmail.com" target="_blank">
        Email me
      </a>{' '}
      and we'll chat!
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

const Body = () => (
  <main>
    <h2 className="headline">Hi, I'm Quang.</h2>
    <div className="bio">
      <p>
        <span>Senior Software Engineer at</span>{' '}
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
    <h2 className="headline">Services</h2>
    <div className="services">
      <p>E-commerce</p>
      <p>Website</p>
      <p>Web Apppcation</p>
      <p>Mobile Apppcation</p>
      <p>CRM System</p>
      <p>Software as a service (SaaS)</p>
      <p>Platform as a service (PaaS)</p>
      <p>Mock Interview (Front End, Back End and System Design)</p>
      <p>1:1 Computer Science Tutoring // Ask Me Anything</p>
    </div>
    <h2 className="headline">Social</h2>
    <div className="social">
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
  </main>
)

const Footer = () => (
  <footer>
    <p>© 2022 Quang Nguyen LLC. All Rights Reserved.</p>
    <a href="mailto:wan15112001@gmail.com" target="_blank">
      <img className="email" src="email.png" alt="email.png" />
    </a>
  </footer>
)

const App = () => (
  <div className="App">
    <Banner />
    <Header />
    <Body />
    <Footer />
  </div>
)

export default App
