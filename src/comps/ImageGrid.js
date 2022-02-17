import React from 'react';
import useFirestore from '../hooks/useFirestore';
const ImageGrid =() =>{
 const { docs } = useFirestore('images');
  return(
    <div className="img-grid">
    
    {docs && doc.map(doc =>(
      <div className="img-wrap" key={doc.id}
      onClick={()=> setSelectedImg(doc.url)}>
      <img src={doc.url} alt="uploaded images"/>
      </div>
    )) }

    </div>
  )

}

export default ImageGrid;