import React from 'react'

function Header({headerData}) {
  return (
    <>
      <header>
      <div className="logo">
        <img src="./images/home-logo.png" alt="" />
        <h1>{headerData.name}</h1>
      </div>
      <nav>
        <ul>
          <li>{headerData.navList1}</li>
          <li>{headerData.navList2}</li>
          <li>{headerData.navList3}</li>
          <button>{headerData.headerBtn}</button>
        </ul>
      </nav>
    </header>
    <div className="bg">
      <img src="./images/home-bg-img.png" alt="" />
    </div>
    </>
  )
}

export default Header