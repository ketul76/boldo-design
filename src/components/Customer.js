import React from 'react'

function Customer() {
  return (
    <>
       <section className="customer">
      <div className="customer-header">
        <h3>An enterprise template to ramp <br /> up your company website</h3>
        <div className="cus-header-img">
          <img src="./images/left.png" alt="" />
          <img src="./images/right.png" alt="" />
        </div>
      </div>
      <div className="customers-cards">
        <div className="customer-card">
          <h2>“Buyer buzz partner network disruptive non-disclosure agreement business”</h2>
          <div className="customer-profile">
           <img src="./images/customer-1.png" alt="" />
           <div className="client-text">
            <h1>Albus Dumbledore</h1>
            <p>Manager @ Howarts</p>
           </div>
          </div>
        </div>
        <div className="customer-card">
          <h2>“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”</h2>
          <div className="customer-profile">
           <img src="./images/customer-2.png" alt="" />
           <div className="client-text">
            <h1>Severus Snape</h1>
            <p>Manager @ Slytherin</p>
           </div>
          </div>
        </div>
        <div className="customer-card">
          <h2>“Release facebook responsive web design business model canvas seed money monetization.”</h2>
          <div className="customer-profile">
           <img src="./images/customer-3.png" alt="" />
           <div className="client-text">
            <h1>Harry Potter</h1>
            <p>Team Leader @ Gryffindor</p>
           </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Customer