import { useState } from 'react';

import { Button, Form, Segment } from 'semantic-ui-react'
import Footer from '../Footer/Footer';

export default function Signup() {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);


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
        <div className="form">
            <div>
                <h1>User Registration</h1>
            </div>


            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>
            <div style={{width:'600px', margin:'auto'}}>
            <img
              className="appLogo"
              src="https://www.thesouledstore.com/static/img/300x157-twitter.png"
            />
                <Segment >
                    <Form>


                        <Form.Input  fluid label='Name'  onChange={handleName} className="input"
                            value={name} type="text" />
                        <Form.Group widths={2}>

                            <Form.Input   fluid label='Email' onChange={handleEmail} className="input"
                                value={email} type="email" />


                            <Form.Input  fluid label='Password'  onChange={handlePassword} className="input"
                                value={password} type="password" />
                        </Form.Group>
                        <Form.Checkbox label='I agree to the Terms and Conditions' />
                        <Button onClick={handleSubmit} className="btn" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Segment>
                
            </div>
            <div className='divspace'>
                    <Footer />
                </div>
        </div>
    );
}
