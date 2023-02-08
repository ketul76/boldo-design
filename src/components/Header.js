import React from 'react'

function Header() {
  return (
    <>
      <header>
      <div className="logo">
        <img src="./images/home-logo.png" alt="" />
        <h1>Boldo</h1>
      </div>
      <nav>
        <ul>
          <li>Product</li>
          <li>Services</li>
          <li>About</li>
          <button>Log In</button>
        </ul>
      </nav>
    </header>
    <div className="bg">
      <img src="./images/home-bg-img.png" alt="" />
    </div>
    </>
  )
}

export default Header