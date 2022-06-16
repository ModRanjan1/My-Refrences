import React from 'react'
let Data = require('./SubNavBarData.json')

const SubNavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-light'>
      <div className='container-fluid'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='/navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            {Data.map((item, index) => {
              return (
                <li className='nav-item dropdown' key={index}>
                  <a
                    className='nav-link dropdown-toggle'
                    href='/'
                    id='navbarDropdown'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    {item.name}
                  </a>
                  <ul
                    className='dropdown-menu'
                    aria-labelledby='navbarDropdown'
                  >
                    <li>
                      <a className='dropdown-item' href={item.documentationUrl}>
                        Official Documentation
                      </a>
                    </li>

                    {item.topics.map((topic, index) => {
                      return (
                        <li key={index}>
                          <a className='dropdown-item' href={topic.link}>
                            {topic.name}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default SubNavBar
