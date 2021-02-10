import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/profile.png'
const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Melisa Laurini</h1>
        <p>beautician</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a href="https://blog.mlaurini.com/">Blog</a>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            {props.lang ? 'Work' : 'Работа'}
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            {props.lang ? 'About Us' : 'За Нас'}
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            {props.lang ? 'Contact' : 'Контакт'}
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
