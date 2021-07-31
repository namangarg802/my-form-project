import React from 'react'
import Top from './Top.js'
import {Link} from 'react-router-dom';
// import Detail from './Detail.js'
function Submitted() {
    return (
        <div>
            <div className="container xl:w-1/2 mx-auto ">
                <Top />
                <div className=" border rounded-xl m-4 border-t-4  bg-white border-red-500 h-auto">
                        <h1 className=" mt-5 ml-5 text-3xl">Web Development Task</h1>
                        <p className="m-5">Your Response has been recorded</p>
                        <Link className="m-5 text-blue-800 underline hover:text-red-500"  to="/">Submit Another response </Link>
                       </div>
                    </div>
        </div>
            
    )
}

export default Submitted
