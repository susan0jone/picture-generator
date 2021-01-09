import logo from './logo.svg';
import './App.css';
import React , { Component, useEffect, useState } from 'react'

function App(){
  const [List , setList] = useState([{
    src:{
      original: "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg"
    }
  },{
    src:{
      original: "https://images.pexels.com/photos/2365457/pexels-photo-2365457.jpeg"
    }
  },{
    src:{
      original: "https://images.pexels.com/photos/1592119/pexels-photo-1592119.jpeg"
    }
  }, {
    src:{
      original: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg"
    }
  }, {
    src:{
      original: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg"
    }
  }]);
  const [input , setInput] = useState("");

const handleChange = (e) =>{
 
  setInput(e.target.value);
}
// console.log(input);

const updateBody = async (e , info) => {
  e.preventDefault();
  const users = await fetch("https://api.pexels.com/v1/search?query=nature",{
    headers: {
      Authorization: "563492ad6f917000010000017965602626b94d55809c96f59ff802ad"
    }
  });
  const data = await users.json();
  let unfilteredArr = data.photos
  const filteredArr = unfilteredArr.filter((el) => {
      return el.url.includes(info);
    })
  
  
  // console.log(filteredArr);
  // console.log(unfilteredArr);
  setList(filteredArr);

}

// console.log(input)
//   console.log(List);
  


  return (
    <div className = "body-wrapper">
     <div className = "body-content">
     <p>PICTURE GENERATOR</p>
       <form onSubmit = {(e) => updateBody(e, input)}>
      <input placeholder = "Search Images" type="text" value = {input} onChange={handleChange}/>
       </form>
       <div className= "button-wrapper">
       <button onClick = {(e) => updateBody(e, "mountain")}>Mountain</button>
       <button onClick = {(e) => updateBody(e, "solar")}>Solar</button>
       <button onClick = {(e) => updateBody(e, "sea")}>Sea</button>
       </div>
     </div>
      <div>
      {List.length === 0 ? 
            <div>No results</div>
            :
            <div>{List.map((reptile) => 
              <li><img src = {reptile.src.original}/></li>
             )};</div>
        }
      
    </div>
   
    </div>
  );



}

export default App;
