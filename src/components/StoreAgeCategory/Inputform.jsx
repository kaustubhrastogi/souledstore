import React, { useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

const Inputform = () => {
    const [email, setEmail] = useState("");
    const [passw, setPassw] = useState("");
    const [dataInput, setDataInput] = useState([]);
    const submitThis = () => {
        const info = { email: email, passw: passw };
        setDataInput([info]);
        localStorage.setItem('datainput', JSON.stringify([...dataInput, info]));
    }
    return (
        <div>
         <div style={{width:'600px',margin:'auto'}}>
            <Segment  >
            <img
              className="appLogo"
              src="https://www.thesouledstore.com/static/img/300x157-twitter.png"
            />
                <Form onSubmit={submitThis}>

                        <Form.Input fluid label='Email' placeholder='Email'
                            type="text" name="email" id="email" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                         
                        <Form.Input fluid label='Password' placeholder='Password'
                            type="text" name="passw" id="passw" value={passw}
                            onChange={(e) => setPassw(e.target.value)} />

                    <Form.Checkbox label='I agree to the Terms and Conditions' />
                    <Button type='submit'>Submit</Button>
                </Form>
            </Segment>

            </div>

        </div>
    )
}
export default Inputform