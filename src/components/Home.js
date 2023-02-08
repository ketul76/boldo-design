import React from 'react'

function Home() {
  return (
    <>
       <section className="home">
        <div className="home-text">
          <h3>Save time by building <br/> fast with Boldo Template </h3>
          <p>Funding handshake buyer business-to-business metrics iPad partnership. <br/> First mover advantage innovator success deployment non-disclosure.</p>
          <div className="home-btns">
            <button>Buy template</button>
            <button>Explore</button>
          </div>
        </div>
        <div className="home-img">
          <img src="./images/home-main-img.png" alt="" />
        </div>
      </section>
      <div className="home-list">
          <img src="./images/Logos.png" alt="" />
      </div>
    </>
  )
}

export default Home