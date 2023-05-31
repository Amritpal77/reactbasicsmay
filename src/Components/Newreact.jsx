import React, { useState } from 'react';

function Newreact(props){
    const initialStudentList=[
        {id: 1, name: "Amritpal SIngh", fees:25000, course: "Python"},
        {id: 2, name: "Amrit SIngh", fees:35000, course: "Web development"},
        {id: 3, name: "Pal SIngh", fees:15000, course: "Java"},
        {id: 4, name: "SIngh", fees:45000, course: "c"},
        {id: 5, name: "SIngh amrit", fees:55000, course: "Mern"}
    ]
    const [title, setTitle]=useState("React State");
    const [studentData, setStudentData]=useState(initialStudentList);

    const updateStudent=()=>{
        setStudentData((prev)=>{
            return [
                ...prev,
                {id:6, name:"Arsh", fees:27000, course: "JavaScript"}
            ]
        })
    }
    return(
        <div>
            <h1>{title}</h1>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Fees</td>
                        <td>Course</td>
                    </tr>
                </thead>
                <tbody>
                    {
                   studentData.map((item, index)=>{
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.fees}</td>
                            <td>{item.course}</td>
                        </tr>
                    )
                   })
                    }
                </tbody>
            </table>
            <button onClick={updateStudent}>Update</button>
        </div>
    )
}
export default Newreact;