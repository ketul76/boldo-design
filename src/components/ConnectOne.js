import React from 'react'

function ConnectOne({connectOneData}) {
  return (
    <>
    <section className="connect">
        <img className="connect-img" src="./images/connect-main.png" alt="" />
        <div className="connect-text">
          <h3>{connectOneData.connectTitle1} <br /> {connectOneData.connectTitle2} <br/> {connectOneData.connectTitle3}</h3>
          {connectOneData.connectList.map((i) => (
            <div className={i.class}>
            <img src={i.imgList} alt="img" />
            <h5>{i.listName}</h5>
          </div>  
          ))}
          <button>{connectOneData.connectBtn}</button>
        </div>
      </section>
    </>
  )
}

export default ConnectOne