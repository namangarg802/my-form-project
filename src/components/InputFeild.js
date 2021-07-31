
import React, {useState}from 'react'
import './styles.css'
function InputFeild(props) {
    const SubmitData=(e)=>{
        console.log(e.target.value);
        console.log("submittse");}

    
    return (
        <div>
            <div className="bg-pink-300  mt-3 py-4 pl-4 border rounded-xl grid grid-rows gap-4 detail">
                         <label htmlFor="input">{props.label}</label>
                        
                        <input type={props.type} name={props.name} required onChange={(e)=>{SubmitData(e)}} className="bg-pink-100  placeholder-black  border-black rounded-xl sm:w-1/2  my-3 px-3 py-3  hover:shadow-lg hover:border-transparent focus:placeholder-red-700 focus:bg-white focus:outline-none"  placeholder={props.placeholder}/>
                    </div>
        </div>
    )
}

export default InputFeild
