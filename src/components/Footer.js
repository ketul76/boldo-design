import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="footer-title">
        <div className="footer-logo">
          <img src="./images/footer-logo.png" alt="" />
          <h2>Boldo</h2>
        </div>
        <p>Social media validation business model <br /> canvas graphical user interface launch <br /> party creative facebook iPad twitter.
        </p>
          <h3>All rights reserved.</h3>
      </div>
        <div className="footer-lists">
          <div className="list">
            <h1>Landings</h1>
            <p>Home</p>
            <p>Products</p>
            <p>Services</p>
          </div>
          <div className="list">
            <h1>Company</h1>
            <p>Home</p>
            <p>Carrers <span><button>Hiring</button></span></p>
            <p>Services</p>
          </div>
          <div className="list">
            <h1>Resources</h1>
            <p>Blog</p>
            <p>Products</p>
            <p>Services</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer