import React,{useState} from 'react'

const Increment=()=> {
    const [count,setCount]=useState(0)
    
    // []array d struct
    // const increase=()=>
    // {
    //         setCount(count+1);
           
    // }
    // function decrease()
    // {
    //     if(count>0)
    //     {
    //         setCount(count-1);
    //     }
    // }

    return (
     
        <>
        <h1>{count}</h1>
        
        {count<50 && <button onClick={()=>setCount(count+1)}>Click to increase value</button>}&nbsp;
        {count>0 && <button onClick={()=> setCount(count-1)}>click to decrease the value</button>}
        </>
    )
}

export default Increment
