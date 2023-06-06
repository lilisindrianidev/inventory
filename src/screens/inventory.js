import { useState,  memo} from "react";
import "./../assets/sass/page.scss"
import Show from './show.js'

function Hello(){
  const [create, setCreate]= useState({
    title:'',
    descript:'',
    picture:'',
    price:'',
  });

  // const Showme= ({ show, addShow}) =>{
  //   console.log('render');
  // }
  
  const handleChange =(event) =>{
    setCreate(({...create,[event.target.name]: event.target.value }));
  }
  const handleSubmit =(event)=>{
    event.preventDefault();
    setCreate({title:'', descript:"", picture:"", price:""});
    console.log(create);
    
  
  }
  //  const addShow = (event) => {
  //   event.preventDefault();
  //   setCreate( [{ title:"", descript:"", picture:"", price:""}]);
  //   console.log(create);
  // };
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" onChange={handleChange} value={create.title||""}/>
        <br/>
        <input type="text" name="descript" onChange={handleChange} value={create.descript||""}/>
        <br/>
        <input type="file" name="picture" onChange={handleChange} value={create.picture||""}/>
        <br/>
        <input type="number" name="price" onChange={handleChange} value={create.price||""}/>

        {/* <button type="submit"> Submit</button> */}
       
        <button type="submit"> add</button>
      </form>
      
     <Show />
      <>
      {Array.isArray(create) 
      ? create.map(show1 => ( 
        <h1 >hello: {show1.title}</h1>
      )): null}

       
      <div className="first">
        <img  className="first_image"/>
        <div className="item">
          
          <h3 className="title">Premium Macbook</h3>
          <h3 className="deskrip">hello</h3>
          <h3 className="price">Rp</h3>
          
        </div>
       

      </div> 
      </>
    </div>
    
  )

}
export default Hello;

