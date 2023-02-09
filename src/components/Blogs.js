import React from 'react'

function Blogs({blogsData}) {
  return (
    <>
      <section className="our-blog">
      <h1>{blogsData.title}</h1>
      <h2>{blogsData.blogInfo1} <br /> {blogsData.blogInfo2}</h2>
      <div className="blogs">     
        {blogsData.blogsLists.map((i) => (
        <div className={i.class} >
            <img src={i.blogLink} alt="img"/>
            <h3>{i.category} <span> {i.time}</span></h3>
            <p>{i.intro1} <br /> {i.intro2} <br />  {i.intro3}</p>
            <div className="blog-writer">
              <img src={i.profileImg} alt="" />
              <h4>{i.profileName}</h4>
            </div>
        </div>
        ))}
      </div>

      
      <div className="load-more-btn">
        <button>{blogsData.blogBtn}</button>
      </div>
    </section>
    </>
  )
}

export default Blogs