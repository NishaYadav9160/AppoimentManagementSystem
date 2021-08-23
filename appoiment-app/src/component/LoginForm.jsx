import React, { useState } from 'react'

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ name: "", email: "", password: "" })
    const submitHandler = e => {
        e.preventDefault();
        Login(details)

    }
    return (
        <div>

            <h2>Login Page</h2><br />
            {(error !== "")?(<div>{error}</div>):""}

            <div className="login">
                <form onSubmit={submitHandler}>
                <label><b>User Name
                    </b>
                    </label>
                    <input type="text" name="name" id="Uname" placeholder="Username" onChange={e=>setDetails({...details,name:e.target.value})}value={details.name} required/>
                    <br /><br />
                    <label><b>User Email
                    </b>
                    </label>
                    <input type="text" name="email" id="Uname" placeholder="User Email" onChange={e=>setDetails({...details,email:e.target.value})}value={details.email} required/>
                    <br /><br />
                    <label><b>Password
                    </b>
                    </label>
                    <input type="Password" name="password" id="Pass" placeholder="Password" onChange={e=>setDetails({...details,password:e.target.value})}value={details.password} required />
                    <br /><br />
                    <input type="submit" name="log" id="log" value="Log In" />
                    <br /><br />
                </form>
            </div>
        </div>
    )
}

export default LoginForm
