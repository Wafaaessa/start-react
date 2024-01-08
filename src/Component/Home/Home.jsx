import React from 'react'
import style from './Home.module.css'
export default function Home() {
  return (
    <div className={style.back}>
      <div className="container d-flex align-items-center justify-content-center mt-5">
      <div className="avatar mt-5 pt-5">
      <img src="http://routeegypt.com/start-react/assets/img/avataaars.svg" className='w-75 mb-5 ms-5 ' alt="" />
  <div className="content d-flex justify-content-center align-items-center flex-column">
    <div className={style.title}>
    <h1>START REACT</h1>
    </div>
    <div className={style.star}>
    <i className="fa-solid fa-star text-center text-white fa-4x"></i>
    </div>
    <p className={style.para}>Graphic Artist - Web Designer - Illustrator</p>
  </div>
      </div>
      </div>
     
 
 
 </div>
  )
}
