import React from 'react'

function Home({homeData}) {
  return (
    <>
       <section className="home">
        <div className="home-text">
          <h3>{homeData.homeTitle1} <br/> {homeData.homeTitle2} </h3>
          <p>{homeData.homeParagraph1} <br/> {homeData.homeParagraph2}</p>
          <div className="home-btns">
            <button>{homeData.homeBtn1}</button>
            <button>{homeData.homeBtn2}</button>
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