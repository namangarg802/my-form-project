import React from 'react'

function Response(props) {
    const data=window.localStorage.getItem('data');
    const led=JSON.parse(data)
    let s=led[3].value.name
    console.log(led[3].value.name);
    return (
        <div>
            <table>
                <tr>
                    <td>name</td>
                    <td>Email</td>
                    <td>Mobile No</td>
                </tr>
            </table>
            hii
            <div>{s}</div>
            {/* <div>{props.data}</div> */}
        </div>
    )
}

export default Response
