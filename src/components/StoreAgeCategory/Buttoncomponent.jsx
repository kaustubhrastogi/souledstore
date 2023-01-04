import React from "react";
import Button from 'react-bootstrap/Button';


const buttonuri = [
  {
    uri: "https://prod-img.thesouledstore.com/public/theSoul/images/my-account.png?format=webp&amp;w=300&amp;dpr=1.0",
    valuetext: 'My Account',
    dynamic:'https://www.instagram.com/TheSouledStore/'


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
    valuetext: 'Cancel'
  },


]

const Buttoncomponent = ({}) => {
  return (
    <>
      {
        buttonuri.map((i) => {
          return (
            <Button className='btnstyle btn-light' >
              <img src={i.uri} />
              <br />
              <text>{i.valuetext}</text>
            </Button>
          )
        })
      }
    </>
  );
}

export default Buttoncomponent


//   {children}
