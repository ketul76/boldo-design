import React from 'react'

function ConnectOne() {
  return (
    <>
    <section className="connect">
        <img className="connect-img" src="./images/connect-main.png" alt="" />
        <div className="connect-text">
          <h3>We connect our customers <br /> with the best, and help them <br/> keep up-and stay open.</h3>
          <div className="connect-list">
            <img src="./images/truemark.png" alt="" />
            <h5>We connect our customers with the best.</h5>
          </div>
          <div className="connect-list">
            <img src="./images/truemark.png" alt="" />
            <h5>Advisor success customer launch party.</h5>
          </div>
          <div className="connect-list">
            <img src="./images/truemark.png" alt="" />
            <h5>Business-to-consumer long tail.</h5>
          </div>
          <button>Start now</button>
        </div>
      </section>
    </>
  )
}

export default ConnectOne