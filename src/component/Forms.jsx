import { useState } from "react";

const Forms = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        
        setForm({
            ...form,
            [event.target.name] : event.target.value
        })

    }


return (    
<form>
    <label htmlFor="email">Email:</label>
    <input type="text" name="email" value={form.email} onChange={handleChange}/>

    <hr />  

    <label htmlFor="password">Password:</label>
    <input type="text" name="password" value={form.password} onChange={handleChange} />

    <hr />   

    <button>LogIn</button>
</form>
)
}

export default Forms