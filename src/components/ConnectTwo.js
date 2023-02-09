import React from 'react'

function ConnectTwo({connectTwoData}) {
  return (
    <>
      <section className="connect">
      <div className="connect-text">
        <h3>{connectTwoData.connectTitle1} <br /> {connectTwoData.connectTitle2} <br /> {connectTwoData.connectTitle3}</h3>
        {connectTwoData.connectList.map((i) => {
            return <div className={i.class}>
              <img src={i.imgList} alt="" />
              <h5>{i.listName}</h5>
            </div>
        })}
      </div>
      <img className="connect-img connect-one-main" src="./images/connect-one-main.png" alt="" />
    </section>
    </>
  )
}

export default ConnectTwo