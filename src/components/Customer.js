import React from 'react'

function Customer({customersData}) {
  return (
    <>
       <section className="customer">
      <div className="customer-header">
        <h3>{customersData.customerTitle1} <br />{customersData.customerTitle2}</h3>
        <div className="cus-header-img">
          <img src="./images/left.png" alt="" />
          <img src="./images/right.png" alt="" />
        </div>
      </div>
      <div className="customers-cards">
        {customersData.customerCards.map((i) => (
           <div className={i.class}>
           <h2>{i.title}</h2>
           <div className="customer-profile">
            <img src="./images/customer-1.png" alt="" />
            <div className="client-text">
             <h1>{i.name}</h1>
             <p>{i.post}</p>
            </div>
           </div>
         </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default Customer