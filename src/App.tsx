import { FC } from 'react'
import './app.css'

interface SectionProps {
  title?: string
  data?: string[]
}

const Section: FC<SectionProps> = ({ title, data }) => (
  <>
    {title && <h2 className="headline">{title}</h2>}
    {data && (
      <div>
        {data.map((text, idx) => (
          <p className="outlined-bubble" key={idx}>
            {text}
          </p>
        ))}
      </div>
    )}
  </>
)

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
      <h1>Quang Nguyen</h1>
      <p>Senior Software Engineer</p>
    </div>
    <img id="profile" src="profile.jpg" alt="profile.jpg" />
  </header>
)

const Body = () => (
  <main>
    <h2 className="headline">Hi, I'm Quang.</h2>
    <div className="bio">
      <p>
        I'm an independent contractor/consultant based on Orange County Area, California. I offer a
        variety of software development services and online learning to help others learn more about
        tech.
      </p>
      <p>
        +5 years of experience building real-world applications and dynamic backend systems using
        various tech stacks; wore multiple hats while juggling at numerous startups in the past;
        experienced working in various industries from telecommunication, entertainmen to
        automotive. Learn more about what I do on my{' '}
        <a href="/resume.pdf" target="_blank">
          resume
        </a>
        .
      </p>
      <p></p>
    </div>
    <Section
      title="Services I Offer"
      data={[
        'E-commerce',
        'Website',
        'Web Apppcation',
        'Mobile Apppcation',
        'CRM System',
        'Mock Interview (Front End, Back End and System Design)',
        '1:1 Computer Science Tutoring // Ask Me Anything',
      ]}
    />
    <Section
      title="Areas of Expertise"
      data={[
        'Web Application Development',
        'Mobile Application Development',
        'Front End Development',
        'Back End Development',
        'System Architecture',
        'Distributed System',
        'Cloud Computing',
        'Database Design / Modeling',
        'Software as a service (SaaS)',
        'Platform as a service (PaaS)',
      ]}
    />
    <Section
      title="Technologies & Frameworks I Use"
      data={[
        'HTML',
        'CSS',
        'Javascript',
        'Typescript',
        'React',
        'React Native',
        'Vue',
        'Angular',
        'Material UI',
        'Ant Design',
        'Boostrap',
        'TailwindCSS',
        'Webpack',
        'Babel',
        'Vite',
        'Microfrontend',
        'Swift',
        'SwiftUI',
        'UIKit',
        'Python',
        'REST',
        'GraphQL',
        'Node',
        'NPM',
        'Deno',
        'Microservices',
        'Serverless',
        'Kubernetes',
        'AWS',
        'GCP',
        'Firebase',
        'MongoDB',
        'Realm',
        'SQL',
      ]}
    />
    <h2 className="headline">Social</h2>
    <div className="social">
      <a href="https://github.com/quangnguyen17" target="_blank">
        <img className="github" src="github.png" alt="github.png" />
      </a>
      <a href="https://www.instagram.com/qdnguyen118" target="_blank">
        <img className="instagram" src="instagram.png" alt="instagram.png" />
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
  <div className="layout">
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
    <Banner />
  </div>
)

export default App
