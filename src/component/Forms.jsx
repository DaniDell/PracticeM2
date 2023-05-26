import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Forms = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name] : event.target.value
        })};

    const handlerSubmit = (event) => {
        event.preventDefault();
        navigate("/home");

    }


return (    
<form onSubmit={handlerSubmit}>

    <label htmlFor="email">Email:</label>
    <input type="text" name="email" value={form.email} onChange={handleChange}/>

    <hr />  

    <label htmlFor="password">Password:</label>
    <input type="text" name="password" value={form.password} onChange={handleChange} />

    <hr />   

    <button type="submit">LogIn</button>
</form>
)
}

export default Forms