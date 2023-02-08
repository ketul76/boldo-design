import React from 'react'

function ConnectTwo() {
  return (
    <>
      <section className="connect">
      <div className="connect-text">
        <h3>We connect our customers <br /> with the best, and help them <br /> keep up-and stay open.</h3>
        <div className="connect-list connect-list-one">
          <img style={{backgroundColor:"black"}} src="./images/feather.png" alt="" />
          <h5>We connect our customers with the best.</h5>
        </div>
        <div className="connect-list connect-list-one">
          <img src="./images/star.png" alt="" />
          <h5>Advisor success customer launch party.</h5>
        </div>
        <div className="connect-list connect-list-one">
          <img src="./images/sun.png" alt="" />
          <h5>Business-to-consumer long tail.</h5>
        </div>
      </div>
      <img className="connect-img connect-one-main" src="./images/connect-one-main.png" alt="" />
    </section>
    </>
  )
}

export default ConnectTwo