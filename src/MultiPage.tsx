import { FC } from 'react'
import './styles.css'

export const MultiPage: FC = () => {
  return (
    <div className="App">
      <div className="page">
        <div className="textbox">
          <h1>Hi, I'm Quang.</h1>
          <p>I'm a full stack engineer based in the San Francisco Bay Area.</p>
        </div>
      </div>
      <div className="page">Services</div>
    </div>
  )
}
