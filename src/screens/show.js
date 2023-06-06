import {memo, useState} from 'react';


const Showme= ({ create, addCreate}) =>{
  console.log('render');
  return(
    <>
    {create && create.map((show1, index) => ( 
        <h1 key={index}>{show1}</h1>
      ))}
       
    </>
  )
}

export default memo (Showme);