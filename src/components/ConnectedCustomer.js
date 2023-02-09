import React from 'react'

function ConnectedCustomer({connectedCustomersData}) {
  return (
    <section className="connected-customer"> 
    <div className="connected-customer-img" >
      <img  src="./images/Image.png" alt="" />
    </div>
    <div className="connected-customer-text">
      <h3>{connectedCustomersData.title1} <br /> {connectedCustomersData.title2} <br /> {connectedCustomersData.title3}</h3>
      <div className="connect-services">
        {connectedCustomersData.list.map((i) => (
           <><div className={i.class}>
            <h4>{i.name}</h4>
            <img src={i.imgLink} />
         </div>
          <div className="line1"></div>
          </>
        ))}
      </div>
    </div>
  </section>
  )
}

export default ConnectedCustomer