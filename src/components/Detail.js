import React from 'react'
import './styles.css'

function Detail() {
    return (
        <div>
            <div className=" my border rounded-xl border-t-4 p-2 border-red-500 mt-3 detail">
                        <h1 className="text-2xl  font-bold text-3xl">Web Development Task</h1>
                        <div className=" p-2 leading-8 tracking-wide text-bclack">
                           Welcome to FundingX! <br/>

To become a part of our Web Development Team, please complete the task
before the deadline mentioned.<br/>
 
No task submissions will be entertained after the deadline <br/>

TASK -<br/>
Replicate this Google form which you are looking at.<br/>

You may use HTML,CSS or ReactJs. Preference will be given to one using 
ReactJs and able to send JSON file to a URL.<br/>

If you like, you may enhance the looks of the page according to you.<br/>

Host this page on GitHub pages or any hosting service you like and 
paste link in the form.<br/>

The tasks given are for understanding how well you are equipped with
 the skills.<br/>

Deadline for submission- July 31, 4:00 p.m.<br/>

<div className="text-red-500">*Required</div>
                        </div>
                    </div>
        </div>
    )
}

export default Detail
