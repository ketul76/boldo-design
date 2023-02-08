import React from 'react'

function Blogs() {
  return (
    <>
      <section className="our-blog">
      <h1>Our Blog</h1>
      <h2>Value proposition accelerator product <br /> management venture</h2>
      <div className="blogs">
        <div className="blog">
          <img src="./images/blog-1.png" alt="" />
          <h3>Category <span>November 22, 2021</span></h3>
          <p>Pitch termsheet backing <br /> validation focus release.</p>
          <div className="blog-writer">
            <img src="./images/blog-profile-1.png" alt="" />
            <h4>Chandler Bing</h4>
          </div>
        </div>
        <div className="blog">
          <img src="./images/blog-2.png" alt="" />
          <h3>Category <span>November 22, 2021</span></h3>
          <p>Seed round direct mailing non- <br /> disclosure agreement graphical <br /> user interface rockstar.</p>
          <div className="blog-writer">
            <img src="./images/blog-profile-2.png" alt="" />
            <h4>Rachel Green</h4>
          </div>
        </div>
        <div className="blog">
          <img src="./images/blog-3.png" alt="" />
          <h3>Category <span>November 22, 2021</span></h3>
          <p>Beta prototype sales iPad gen-z <br /> marketing network effects value <br /> proposition</p>
          <div className="blog-writer">
            <img src="./images/blog-profile-3.png" alt="" />
            <h4>Monica Geller</h4>
          </div>
        </div>
      </div>
      <div className="load-more-btn">
        <button>Load More</button>
      </div>
    </section>
    </>
  )
}

export default Blogs