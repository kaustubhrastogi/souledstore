import React from 'react'
import Footer from '../Footer/Footer'
import Inputform from './Inputform'
import Login from './Login'

export default function Signin({register}) {
    return (
        <div>
            <Login />
            <div className='divspace'>
                <Inputform />
            </div>

            <div className='divspace'>    
            <Footer />
            </div>
           
        </div>
    )
}
