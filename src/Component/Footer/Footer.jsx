import React from 'react'

export default function Footer() {
  return (
    
    <div>
     <footer className='pt-5 '>
       <div className="container pb-5">
        <div className="row text-center">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h1>LOCATION</h1>
            <p className='lead text-center'>2215 John Daniel Drive <br/>
              Clark, MO 65243</p>
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h1>AROUND THE WEB</h1>
            <div className="social-icon mt-3">
            <a className="btn btn-outline-light btn-social mx-1 " href="#!"><i className="fab fa-fw fa-facebook-f"></i></a>
             <a className="btn btn-outline-light btn-social mx-1 " href="#!"><i className="fab fa-fw fa-twitter"></i></a>
             <a className="btn btn-outline-light btn-social mx-1 " href="#!"><i className="fab fa-fw fa-linkedin-in"></i></a>
             <a className="btn btn-outline-light btn-social mx-1 " href="#!"><i className="fab fa-fw fa-dribbble"></i></a>
            </div>
          
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h1>ABOUT FREELANCER</h1>
            <p className='lead text-center'>Freelance is a free to use, MIT <br/>
               licensed Bootstrap theme created by<br/>
             Route</p>
          </div>
         
        </div>
       </div>
       <div className="copyright py-4 text-center ">
            <div className="container"><small>Copyright © Your Website 2021</small></div>
        </div>
     </footer>
   
    </div>
  )
}
