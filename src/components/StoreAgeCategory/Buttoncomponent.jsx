import { handleRef } from "@fluentui/react-component-ref";
import React from "react";
import Button from 'react-bootstrap/Button';
import { Link , useNavigate} from "react-router-dom";
import Login from "./Login";



const buttonuri = [
  {
    uri: "https://prod-img.thesouledstore.com/public/theSoul/images/my-account.png?format=webp&amp;w=300&amp;dpr=1.0",
    valuetext: 'My Account',
    path:"/Signin"
    


  },
  {
    uri: "https://prod-img.thesouledstore.com/public/theSoul/images/track.png?format=webp&amp;w=300&amp;dpr=1.0",
    valuetext: 'Track'
  },
  {
    uri: "https://prod-img.thesouledstore.com/public/theSoul/images/return.png?format=webp&amp;w=240&amp;dpr=1.0",
    valuetext: 'Return'
  },
  {
    uri: "https://prod-img.thesouledstore.com/public/theSoul/images/cancel.png?format=webp&amp;w=240&amp;dpr=1.0",
    valuetext: 'Cancel',
    
  },


]

const Buttoncomponent = ({}) => {
  const navigate = useNavigate();

  return (
    <>
      {
        buttonuri.map((i) => {

          return (
            
            // <Link to={`/Signin`}  >
            <Button className='btnstyle btn-light' onClick={() => navigate(i.path)}>
              <img src={i.uri} />
              <br />
              <text>{i.valuetext}</text>
              {/* <Login /> */}
            </Button>
            // </Link>
           

          )
        })
      }
    </>
  );
}

export default Buttoncomponent


//   {children}
