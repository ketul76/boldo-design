import React from 'react'

function Service({servicesData}) {
  return (
    <>
    <section className="services">
        <h1>{servicesData.title}</h1>
        <h2>{servicesData.titleinfo1}<br /> {servicesData.titleinfo2}</h2>
        <div className="our-service">
          <div className="service">
            <img className="service-img" src="./images/service1.png" alt="" />
            <h3>{servicesData.service1Title}</h3>
            <p>{servicesData.serviceInfo1} <br /> {servicesData.serviceInfo2}</p>
            <div className="explore">
              <h5>{servicesData.explore}</h5>
              <img src="./images/arrow-right.png" alt="" />
            </div>
            <div className="line"></div>
          </div>
          <div className="service">
            <img className="service-img" src="./images/service2.png" alt="" />
            <h3>{servicesData.service2Title}</h3>
            <p>{servicesData.serviceInfo1}<br /> {servicesData.serviceInfo2}</p>
            <div className="explore">
              <h5>{servicesData.explore}</h5>
              <img src="./images/arrow-right.png" alt="" />
            </div>
            <div className="line"></div>
          </div>
          <div className="service">
            <img className="service-img" src="./images/service3.png" alt="" />
            <h3>{servicesData.service3Title}</h3>
            <p>{servicesData.serviceInfo1} <br /> {servicesData.serviceInfo2}</p>
            <div className="explore">
              <h5>{servicesData.explore}</h5>
              <img src="./images/arrow-right.png" alt="" />
            </div>
            <div className="line"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Service