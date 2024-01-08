import React from 'react'
import style from './About.module.css'

export default function About() {
  return (
    < div className={style.back}>
  <div className="container">
  <div className={"title mt-5 text-center"}>
        <h1 className={style.abo}>ABOUT</h1>
        <div className={style.star}>
    <i className="fa-solid fa-star text-center text-white fa-4x"></i>
    </div>
    </div>
    <div className="row d-flex justify-content-center mt-5">
      <div className="col-lg-4 ">
        <p className={style.para}> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.

</p>

      </div>
      <div className="col-lg-4 ">
        <p className={style.para}>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
      </div>
    </div>
  </div>
    </div>
  )
}
