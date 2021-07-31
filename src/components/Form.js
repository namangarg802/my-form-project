import React, {useState}from 'react'
import Top from './Top.js'
import Detail from './Detail.js'
import InputFeild from './InputFeild.js'
import { useHistory } from "react-router-dom";
import Response from './Response.js'
import './styles.css'

function Form() {
   
     const [formdata,updateData]=useState([])
     const [postId,setPostId]=useState([])
    let history = useHistory();
  const SubmitData=(e)=>{
    
    console.log(e.target.value);

  }
  let data=null;
  let value=null;

//   let formdata=null;
function handleSubmit(event) {
    event.preventDefault();
     data = new FormData(event.target);
    console.log(data);
    
   value = Object.fromEntries(data.entries());
    let list=[...formdata];
    console.log({ value });
    updateData(list)
    window.localStorage.setItem('data',JSON.stringify(list))

    const maal=window.localStorage.getItem('data');
    console.log(maal);

    window.location.href ="/Submitted"
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(value)
    };
    fetch('https://reqres.in/api/posts', requestOptions)
        .then(response => response.json())
        .then(data => setPostId(data.id));
        history.push("/Submitted")
        
    }
 
   console.log(formdata,formdata.length);
    return (
        <div  >
            <div className="container  xl:w-1/2    mx-auto ">
               
                    <Top/>
                    <Detail/>
                    
                    <form action="" type="submit" onSubmit={(e)=>{handleSubmit(e)}} >
                        <InputFeild label="Name*" name="name" placeholder="Enter Your Name" type="name"/>
                        <InputFeild label="Email Id*" name="email" placeholder="Enter Your Email Id" type="email"/> 
                        <InputFeild label="Phone No.*" name="phoneno" placeholder="Enter Your Phone No." type="number"/>
                        <InputFeild label="Page Url*" name="url" placeholder="Enter Your Url" type="url"/>
                        <InputFeild label="What is FundingX about? *" name="about" placeholder="Enter Your Answer" type="text"/>
                     
                         <button type="submit"  className="bg-pink-300 btn rounded-xl w-1/4  my-3 px-3 py-3 hover:bg-white hover:shadow-lg hover:border-transparent focus:placeholder-red-700 focus:bg-white focus:outline-none" >Submit</button>
                    </form> 
            </div>
        </div>
    )
}

export default Form;
