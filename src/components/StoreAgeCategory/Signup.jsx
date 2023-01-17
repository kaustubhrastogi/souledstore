import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button, Form, Segment } from 'semantic-ui-react'
import { login } from '../../redux/login-reducer';
import Footer from '../Footer/Footer';
import Login from './Login';

export default function Signup({ register }) {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [infor, setInfor] = useState("");
    const [dataInput, setDataInput] = useState([]);
    const dispatch = useDispatch();

    const submitThis = () => {
        const info = { name: name, email: email, password: password };
        setDataInput([info]);

        
        let olddata =JSON.parse( localStorage.getItem('datainput'));  
        // console.log("olddata=========>",olddata)  
        let oldArr =  olddata
        
        if (!olddata  ) {
           olddata=[]
            olddata.push(info)
            localStorage.setItem('datainput', JSON.stringify(olddata));
            setSubmitted(true);
            navigate(`/`);
            dispatch(login(info));
           
        } 
    
        else {
           

           const user= oldArr.filter((i)=>i.email==email)  
           console.log("uuuuu===>",user) 
            if(user[0]){
           
                setInfor(" already added")
            }
            else {
                oldArr.push(info)
             
                localStorage.setItem("datainput", JSON.stringify(oldArr))
                dispatch(login(info));
                setSubmitted(true);
                navigate(`/`);
            }
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




    return (
        <div>
            <Login />
            <div className="messages">

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
                        <h1 style={{color:'red'}}>{infor}</h1>
                        <Form onSubmit={submitThis}>


                            <Form.Input fluid label='Name' onChange={handleName} className="input"
                                value={name} type="text" required />
                            <Form.Group widths={2}>

                                <Form.Input fluid label='Email' onChange={handleEmail} className="input"
                                    value={email} type="email" required />


                                <Form.Input fluid label='Password' onChange={handlePassword} className="input"
                                    value={password} type="password" required />
                            </Form.Group>

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
