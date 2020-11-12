import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';




const Login = () => {
    const [user, setUser] = useState('')

    const history = useHistory()
    const handleClick = () => {
        history.push('/Main')
    }
    return (
        <div>
            <h1 >井戸端会議</h1>
            <TextField id="user" label="user" value={user} onChange={e => setUser(e.target.value)} /><br />
            <Button variant="outlined" onClick={handleClick}>login</Button><br />
        </div>
    );
}

export default Login;