import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { sendMessage } from '../Config/firebase';

const Main = ({ name }) => {
    const [string, setString] = useState('');

    const handleClick = async () => {
        await sendMessage(name, string)
        console.log(string)
        console.log(name)

    };

    return (
        <div>
            {name}
            <footer>
                <TextField id="message" label="message" value={string} onChange={e => setString(e.target.value)} />
                <Button variant="outlined" onClick={handleClick}>送信</Button>
            </footer>
        </div>
    );
};

export default Main;