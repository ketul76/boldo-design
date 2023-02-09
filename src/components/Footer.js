import React from 'react'

function Footer({footerData}) {
  return (
    <footer>
      <div className="footer-title">
        <div className="footer-logo">
          <img src="./images/footer-logo.png" alt="" />
          <h2>{footerData.logoName}</h2>
        </div>
        <p>{footerData.footerIntro1} <br /> {footerData.footerIntro2} <br /> {footerData.footerIntro3}
        </p>
          <h3>{footerData.rights}</h3>
      </div>
        <div className="footer-lists">
          <div className="list">
            <h1>{footerData.landing}</h1>
            <p>{footerData.landing1}</p>
            <p>{footerData.landing2}</p>
            <p>{footerData.landing3}</p>
          </div>
          <div className="list">
            <h1>{footerData.company}</h1>
            <p>{footerData.company1}</p>
            <p>{footerData.company2} <span><button>{footerData.btn}</button></span></p>
            <p>{footerData.company3}</p>
          </div>
          <div className="list">
            <h1>{footerData.resources}</h1>
            <p>{footerData.res1}</p>
            <p>{footerData.res2}</p>
            <p>{footerData.res3}</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer