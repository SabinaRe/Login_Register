import {useState, useEffect} from 'react'
import axios from 'axios'

export default function AxiosFetch() {
    const[myData, setData]= useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=> setData(res.data))
    })
  return (
    <>
         {myData.map((person)=> {
            const{userName, email, id, body, title} = person;
            return(
                <div className="section" key={id}>
                    {/* <h1>Name: {userName}</h1>
                    <h3>Email: {email}</h3> */}
                    <h3>{title}</h3>
                    <p>{body}</p>
                </div>
            )

         })}

    </>

  )
}
