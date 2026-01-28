import {useState} from 'react'

const Form = () => {
    const[form,setForm]=useState({
        st_id:"",
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        const{name,value}=e.target
        setForm((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(form)

    }
  return (
    <div>
        <h2>Form Hook</h2>
        <form onSubmit={handleSubmit}>
            <label>St_id: </label>
            <input type="text" name='st_id' value={form.st_id} onChange={handleChange} />
            <br />
            <label >Email:</label>
            <input type="email" name='email' value={form.email} onChange={handleChange} />
            <br />
            <label >Password:</label>
            <input type="password" name='password' value={form.password} onChange={handleChange} />
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form
