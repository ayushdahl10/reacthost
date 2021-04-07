import React,{useState,useEffect, Fragment} from 'react'
import axios from 'axios'

const Dataftech=()=> {
const [posts,setPost]=useState([])
const [limit,setLimit]=useState(20)



useEffect(() => {
   axios.get('https://jsonplaceholder.typicode.com/posts') 
    .then(res=>{
        console.log(res)
        setPost(res.data)

    })
    .catch(error=>console.log(error))

}, [])
// empty array means use effect only execute once
//axios to get 3rd party api
    return (
        <div>
            {posts.slice(0,limit).map(p=>{
                return (
                    <Fragment key={p.id}>
                        <li>{p.title}</li>
                        <p>{p.body}</p>
                    </Fragment>
                )
            })}    

       { limit<posts.length &&   <button onClick={()=>setLimit(limit+20)} style={{backgroundColor:'orange'}}>Load More</button>}
        </div>
    )
}

export default Dataftech
