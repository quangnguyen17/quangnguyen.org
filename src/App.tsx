import { FC } from 'react'
import './App.css'

interface SectionProps {
  title?: string
  data?: string[]
}

const Section: FC<SectionProps> = ({ title, data }) => (
  <>
    {title && <h2 className="headline">{title}</h2>}
    {data && (
      <div className="section">
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

const Body = () => (
  <main>
    <div>
      <img id="profile" src="profile.jpg" alt="profile.jpg" />
      <div style={{ marginTop: '0.8rem' }}>
        <h1 style={{ fontSize: '2.4rem', fontWeight: '600', marginBottom: '0.3rem' }}>
          Quang Nguyen
        </h1>
        <p style={{ fontSize: '1.1rem', fontWeight: '300' }}>UI / Front End Engineer</p>
        <div
          style={{
            marginTop: '0.5rem',
            alignSelf: 'flex-start',
            backgroundColor: '#ffbb00',
            width: '100px',
            height: '3px',
          }}
        ></div>
      </div>
    </div>
    <div className="bio">
      <p>
        I'm an independent contractor/consultant based on Orange County Area, California. I offer a
        variety of software development services and online learning to help others learn more about
        tech; +5 years of experience building real-world applications and dynamic backend systems
        using various tech stacks; wore multiple hats while juggling at numerous startups in the
        past; experienced working in various industries from telecommunication, entertainment to
        automotive. Learn more about my work{' '}
        <a href="/resume.pdf" target="_blank">
          here
        </a>
        .
      </p>
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
  <div className="App">
    <Banner />
    <Body />
    <Footer />
  </div>
)

export default App
