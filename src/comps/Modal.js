import React from 'react';

const Modal =(selectedImg)=>{
 const handleClick =(e)=>{
   if (e.target.classList.contains('backdrop'))
   setSelectedImg(null);
 }
 return(

  <div className="backdrop" onClick={handleClick}>
    <image src={selectedImg} alt="enlarged pic" />
  </div>
 )

}
export default Modal;