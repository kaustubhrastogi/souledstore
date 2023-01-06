import { useState } from 'react';

import { Button, Form, Segment } from 'semantic-ui-react'
import Footer from '../Footer/Footer';
import Login from './Login';

export default function Signup({ register }) {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [dataInput, setDataInput] = useState([]);


    const submitThis = () => {
        const info = { name: name, email: email, password: password };
        setDataInput([info]);
        // localStorage.setItem('datainput', JSON.stringify([...dataInput, info]));
        let olddata = localStorage.getItem('datainput');
        if (olddata == null) {
            olddata = []
            olddata.push(info)
            localStorage.setItem('datainput', JSON.stringify(olddata));
        } else {
            let oldArr = JSON.parse(olddata)
            oldArr.push(info)
            localStorage.setItem("datainput", JSON.stringify(oldArr))
            console.log(oldArr, 'hhg')
        }
    }
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };


    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };


    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };

    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>User {name} successfully registered!!</h1>

            </div>
        );
    };


    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    };

    return (
        <div>
            <Login />
                <div className="messages">
                    {errorMessage()}
                    {successMessage()}
                </div>
                <div className='divspace'>
                <div style={{ width: '600px', margin: 'auto' }}>
                <Segment >
                    <div className='divspace'>
                        <h1>User Registration</h1>
                    </div>
                   
                        <img
                            className="appLogo"
                            src="https://www.thesouledstore.com/static/img/300x157-twitter.png"
                        />
                        <Form onSubmit={submitThis}>


                            <Form.Input fluid label='Name' onChange={handleName} className="input"
                                value={name} type="text" required/>
                            <Form.Group widths={2}>

                                <Form.Input fluid label='Email' onChange={handleEmail} className="input"
                                    value={email} type="email"  required/>


                                <Form.Input fluid label='Password' onChange={handlePassword} className="input"
                                    value={password} type="password" required/>
                            </Form.Group>
                            <Form.Checkbox label='I agree to the Terms and Conditions' />
                            <Button className="btn" type="submit">
                                Submit
                            </Button>
                        </Form>

                </Segment>
                </div>


                <div className='divspace'>
                    <Footer />
                </div>
                </div>
            </div>

    );
}
