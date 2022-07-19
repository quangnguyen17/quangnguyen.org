import { FC } from 'react'
import './SinglePage.css'

export const SinglePage: FC = () => (
  <div className="App">
    <div className="profile">
      <img id="profile" src="profile.jpg" alt="profile" />
      <div className="heading">
        <h1>Quang Nguyen</h1>
        <p className="headline">Senior Software Engineer</p>
      </div>
    </div>
    <ul>
      <li>
        I'm a Senior Software Engineer at{' '}
        <a href="https://rivian.com/" target="_blank">
          Rivian
        </a>{' '}
        based in the San Francisco Bay Area.
      </li>
      <li>
        +5 years of experience building real-world applications and dynamic backend systems using various tech stacks;
        wore multiple hats while juggling at numerous startups in the past; experienced working in various industries
        from telecommunication, entertainment and now automotive.
      </li>
      <li>Have an app idea but don't know where to start? I can help with that, connect with me and we'll chat.</li>
      <li>
        You can find my resume <a href="/resume.pdf">here</a>.
      </li>
    </ul>
    <h2 className="headline">Services</h2>
    <p>
      I offer software development consulting services to help you build the product of your dream and achieve your
      goal. I can build apps / websites based on specific requirements. I can also help you with your exsting projects,
      such as fixings bugs, adding new features or investigating new technical solutions, etc.
    </p>
    <h2 className="headline">Experience</h2>
    <ul>
      <li>
        Senior Software Engineer -{' '}
        <a href="https://rivian.com/" target="_blank">
          Rivian
        </a>{' '}
        (October 2021 - Present)
      </li>
      <li>
        Contract Software Engineer -{' '}
        <a href="https://www.virtusa.com/" target="_blank">
          Virtusa
        </a>{' '}
        (July 2021 - October 2021)
      </li>
      <li>
        Software Engineer -{' '}
        <a href="https://intellivision.com/" target="_blank">
          Intellivision Entertainment
        </a>{' '}
        (November 2020 - July 2021)
      </li>
      <li>
        Lead Software Engineer -{' '}
        <a href="https://globechat.com/" target="_blank">
          GlobeChat
        </a>{' '}
        (April 2020 - July 2021)
      </li>
    </ul>
    <h2 className="headline">Connect</h2>
    <div className="connect">
      <a href="https://twitter.com/quangnguyen1501" target="_blank">
        <img src="twitter.png" alt="twitter.png" />
      </a>
      <a href="https://www.linkedin.com/in/quangnguyen2001" target="_blank">
        <img src="linkedin.png" alt="linkedin.png" />
      </a>
      <a href="https://github.com/quangnguyen17" target="_blank">
        <img src="github.png" alt="github.png" />
      </a>
      <a href="mailto:wan15112001@gmail.com" target="_blank">
        <img src="email.png" alt="email.png" />
      </a>
    </div>
  </div>
)
