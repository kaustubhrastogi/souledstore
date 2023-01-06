import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Segment } from 'semantic-ui-react'

const Inputform = ({ register }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dataInput, setDataInput] = useState([]);
    const[invalid ,setInvalid]=useState("")
    const submitThis = () => {
        const info = { email: email, password: password };
        setDataInput([info]);
        // localStorage.setItem('datainput', JSON.stringify([...dataInput, info]));
        let olddata = localStorage.getItem('datainput')
        let oldArr = JSON.parse(olddata)
        const user = oldArr.filter(arr => {
            if (arr.email == email && (arr.password == password)) {
                return true
            }
            else return false

        }
        )
        if (user[0]) {

            navigate(`/`);
        }
        else {
            
            setInvalid("invalid usser")

        }
    }
    return (
        <div>
            <div style={{ width: '600px', margin: 'auto' }}>
                <Segment  >
                    <h1>User Login</h1>
                    <img
                        className="appLogo"
                        src="https://www.thesouledstore.com/static/img/300x157-twitter.png"
                    />
                    <Form onSubmit={submitThis}>
                        <h1 style={{color:'red',}}>{invalid}</h1>
                        <Form.Input fluid label='Email' placeholder='Email'
                            type="text" name="email" id="email" value={email}
                            onChange={(e) => setEmail(e.target.value)} required />

                        <Form.Input fluid label='Password' placeholder='Password'
                            type="text" name="passw" id="passw" value={password}
                            onChange={(e) => setPassword(e.target.value)}  required/>

                        <Form.Checkbox label='I agree to the Terms and Conditions' />
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Segment>

            </div>

        </div>
    )
}
export default Inputform