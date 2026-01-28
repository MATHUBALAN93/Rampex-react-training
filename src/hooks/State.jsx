import {useState} from "react"
const State = () => {
    const[count,setCount]=useState(0)
    const[like,setLike]=useState(0)
  return (
    <div>
        <h4>UseState</h4>
        <h5>click me {count}</h5>
        <button onClick={()=>setCount(count+1)}> click me here!🎉</button>
        <p>If you like this click on like button below!</p>
        <button onClick={()=>setLike(like+1)}> Like❤️</button>
        <h3>we have support by {like} peoples</h3>
    </div>
  )
}

export default State
