import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Segment } from 'semantic-ui-react'
import { login } from '../../redux/login-reducer';

const Inputform = ({ register }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [dataInput, setDataInput] = useState([]);
    const [invalid, setInvalid] = useState("")
    const submitThis = () => {
        const info = { name:name ,email: email, password: password };
        setDataInput([info]);      
        let olddata = localStorage.getItem('datainput')
        let oldArr = JSON.parse(olddata)

        const user = oldArr.filter(arr => {
            if (arr.name==name  && (arr.password == password)) {
                return true
            }
            else return false

        }
        )
        if (user[0]) {

            navigate(`/`);
            dispatch(login(info));


        }
        else {

            setInvalid("invalid usser or register")

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
                        <h1 style={{ color: 'red', }}>{invalid}</h1>
                        <Form.Input fluid label='Name' placeholder='Name'
                            type="text" name="email" id="name" value={name}
                            onChange={(e) => setName(e.target.value)} required />
                       


                        <Form.Input fluid label='Password' placeholder='Password'
                            type="text" name="passw" id="passw" value={password}
                            onChange={(e) => setPassword(e.target.value)} required />


                        <Button type='submit'>Submit</Button>
                    </Form>
                </Segment>

            </div>

        </div>
    )
}
export default Inputform