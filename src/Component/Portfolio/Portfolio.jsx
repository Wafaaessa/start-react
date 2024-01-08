import React from 'react'
import style from './Portfolio.module.css'
import im1 from '../../../src/cabin.png'
import im2 from '../../../src/cake.png'
import im3 from '../../../src/circus.png'
import im4 from '../../../src/game.png'
import im5 from '../../../src/safe.png'
import im6 from '../../../src/submarine.png'
var imgList = Array.from(document.querySelectorAll('.item '))
var lightBoxCont = document.getElementById('lightbox-cont')
var lightItem = document.getElementById('light-item')
var currentIndex;
var title1=document.querySelector('.title1')
var closeS =document.getElementById('close')
var closeE =document.getElementById('closeBtn')

for ( var i = 0 ;i < imgList.length; i++ ){
   imgList[i].addEventListener('click',function(e){
    lightBoxCont.classList.remove('d-none')
    var imgSrc= e.target.getAttribute('src')
      currentIndex = imgList.indexOf(e.target)
     console.log(currentIndex);
    lightItem.style.backgroundImage = `url(${imgSrc})`
    var titleSrc = e.target.getAttribute('alt');
    title1.innerHTML = titleSrc;
    })
}
function closeB(){
    lightBoxCont.classList.add('d-none')
}
function closeC(){
    lightBoxCont.classList.add('d-none')
}
if (closeS!=null){
    closeS.addEventListener('click',closeB)

}
if (closeE!=null){
    closeE.addEventListener('click',closeC)

}
export default function Portfolio() {

  return (
    <div className={style.back}>
        <div className="container">
        <div className="title mt-5 pt-5 text-center">
        <h1 className='pt-5 '>PORTFOLIO</h1>
        <div className={style.star}>
    <i className="fa-solid fa-star text-center fa-4x  "></i>
    </div>
    </div>
{/* gallary */}
<div className="row " >
<div className="col-md-5 col-lg-4 mb-5">
<div className={style.proitem}>
    <div className="item">
    <img src={im1} className='w-100 ' alt="LOG CABIN" />
    {/* <div className={style.backpro}>
    <i className="fa-solid fa-plus text-white text-center"></i>
    </div> */}
    </div>


</div>
</div>
<div className="col-md-5 col-lg-4 mb-5">
<div className={style.proitem}>
    <div className="item">
    <img src={im2} className='w-100 ' alt="TASTY CAKE" />
    {/* <div className={style.backpro}>
    <i className="fa-solid fa-plus text-white text-center"></i>
    </div> */}

    </div>

</div>
</div>
<div className="col-md-5 col-lg-4 mb-5">
<div className={style.proitem}>
    <div className="item">
    <img src={im3} className='w-100' alt="CIRCUS TENT" />
    {/* <div className={style.backpro}>
    <i className="fa-solid fa-plus text-white text-center"></i>
    </div> */}
    </div>

</div>
</div>
<div className="col-md-5 col-lg-4 mb-5">
<div className={style.proitem}>
    <div className="item">
    <img src={im4} className='w-100' alt="CONTROLLER" />
    {/* <div className={style.backpro}>
    <i className="fa-solid fa-plus text-white text-center"></i>
    </div> */}
    </div>

</div>
</div>
<div className="col-md-5 col-lg-4 mb-5">
<div className={style.proitem}>
    <div className="item">
    <img src={im5} className='w-100' alt="LOCKED SAFE" />
    {/* <div className={style.backpro}>
    <i className="fa-solid fa-plus text-white text-center"></i>
    </div> */}
    </div>

</div>
</div>
<div className="col-md-5 col-lg-4 mb-5">
<div className={style.proitem}>
    <div className="item">
    <img src={im6} className='w-100' alt="SUBMARINE" />
    {/* <div className={style.backpro}>
    <i className="fa-solid fa-plus text-white text-center"></i>
    </div> */}
    </div>

</div>
</div>
</div>
</div>
<div id="lightbox-cont" className="d-none">
    <div className="box d-flex flex-column justify-content-center align-content-center w-75 container">
    <i  id="close" className="fa-regular fa-circle-xmark position-absolute top-0 end-0 pe-3"></i>
        <div id="box-title">
        <h1 className='title1'></h1>
        <div className={style.star2}>
    <i className="fa-solid fa-star text-center fa-4x d-flex justify-content-center align-items-center pb-2"></i>
    </div>
    </div>
<div id="light-item" className="d-flex justify-content-between  align-items-center "></div>
<div className="para mt-5 ">
<p className=' lead text-center pt-5 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
</div>
<button className="btn btn-primary w-25 mx-auto" id='closeBtn'  data-dismiss="modal"> X Close Window</button>
    </div>
    
    </div>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalPopovers">
    Launch demo modal
  </button>
    <div class="modal-body">
  <h2 class="fs-5">Popover in a modal</h2>
  <p>This <a href="#" role="button" class="btn btn-secondary" data-bs-toggle="popover" title="Popover title" data-bs-content="Popover body content is set in this attribute.">button</a> triggers a popover on click.</p>
  <hr/>
  <h2 class="fs-5">Tooltips in a modal</h2>
  <p><a href="#" data-bs-toggle="tooltip" title="Tooltip">This link</a> and <a href="#" data-bs-toggle="tooltip" title="Tooltip">that link</a> have tooltips on hover.</p>
</div>
    </div>
  )
}

