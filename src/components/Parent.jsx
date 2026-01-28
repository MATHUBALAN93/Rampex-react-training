import Child from "./Child"
const Parent = () => {
    const getData=(data)=>{
        console.log("Data recived from child",data)
    }
  return (
    <div>
        <h2>Parent ivaru</h2>
      <Child send = {getData}/>
    </div>
  )
}

export default Parent
