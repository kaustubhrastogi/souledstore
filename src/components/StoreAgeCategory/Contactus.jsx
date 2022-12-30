// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function BasicExample() {
//   return (
//     <>
//       <div>
//         <h1 style={{ display: 'flex', justifyContent: 'center', margin: '1rem' }}>Manage Order Easily</h1>
//         <div style={{ display: 'flex', justifyContent: 'space-between' }}>

//           <div style={{ width: '20rem', margin: '2rem', justifyContent: 'center' }}>

//             <Button style={{backgroundColor:'white',borderColor:"gray",width: '18rem',  padding: '23px', display: 'flex', flexDirection: 'column', color: 'gray', justifyContent: 'center', alignItems: 'center' }} >
//               <img src="https://prod-img.thesouledstore.com/public/theSoul/images/my-account.png?format=webp&amp;w=300&amp;dpr=1.0" />
//               <text> My Account</text>
//             </Button>

//           </div>

//           <div style={{ width: '18rem', margin: '2rem', justifyContent: 'center' }}>

//             <Button style={{backgroundColor:'white',borderColor:"gray",width: '18rem',  padding: '23px', display: 'flex', flexDirection: 'column', color: 'gray', justifyContent: 'center', alignItems: 'center' }} >
//             <img src="https://prod-img.thesouledstore.com/public/theSoul/images/track.png?format=webp&amp;w=300&amp;dpr=1.0" />
//               <text> Track</text>
//             </Button>

//           </div>
//           <div style={{ width: '18rem', margin: '2rem', justifyContent: 'center' }}>

//             <Button style={{backgroundColor:'white',borderColor:"gray",width: '18rem',  padding: '23px', display: 'flex', flexDirection: 'column', color: 'gray', justifyContent: 'center', alignItems: 'center' }} >
//             <img data-v-1b989c5c="" src="https://prod-img.thesouledstore.com/public/theSoul/images/return.png?format=webp&amp;w=240&amp;dpr=1.0" alt="Return" class="gm-added gm-loaded gm-observing gm-observing-cb" />
//               <text> Return</text>
//             </Button>

//           </div>
//           <div style={{ width: '18rem', margin: '2rem', justifyContent: 'center' }}>

//             <Button style={{backgroundColor:'white',borderColor:"gray",width: '18rem',  padding: '23px', display: 'flex', flexDirection: 'column', color: 'gray', justifyContent: 'center', alignItems: 'center' }}>
//             <img data-v-1b989c5c="" src="https://prod-img.thesouledstore.com/public/theSoul/images/cancel.png?format=webp&amp;w=240&amp;dpr=1.0" alt="Cancel" class="gm-added gm-loaded gm-observing gm-observing-cb"/>
//               <text > Cancel</text>
//             </Button>

//           </div>
//           {/* <Card style={{ width: '18rem', margin: '2rem', border: '0px' }}>
//             <Card.Body>
//               <img
//                 className="d-block w-100"
//                 src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage--Banner--Shirts_JI8v3qP.jpg?format=webp&w=1366&dpr=1.0"
//                 alt="First slide" />
//               <Button variant="danger" style={{ padding: '4px', margin: '4px' }}>cancel</Button>

//             </Card.Body>
//           </Card> */}
//         </div>
//           <div style={{backgroundColor:'rgb(0,89,89)',height:'80px'}}>
//             <h1>What can we help you with today?</h1>
//           </div>
          
//       </div>
//     </>

//   );
// }

// export default BasicExample;



import React from 'react'
import { Dropdown, Header, Icon } from 'semantic-ui-react'

const options = [
  {
    key: 'today',
    text: 'todaykjhvjksdhafsdhfkhkhdsklafjhklhlsdhflkdshlkfhdsklhaflkhdskl',
    value: 'today',
    content: 'Today',
  },
  {
    key: 'this week',
    text: 'this weekhckaslchkdhkfhasdklhfklhklsdfahlhjkhkdsahfkhkhfkhsdakfhdk',
    value: 'this week',
    content: 'This Week',
  },
  {
    key: 'this month',
    text: 'this monthhkasdhfkjdhfkjhdskjfhjdskhjksadhfkjhjkdsfgjsdfjkjk',
    value: 'this month',
    content: 'This Month',
  },
]

const DropdownExampleInlineTwo = () => (
  <Header as='h4'>
    <Icon name='trophy' />
    <Header.Content>
      Trending reposbjdsfjksdfkjdsjkfhdsjfhjksdsfkhklfhsdjk{' '}
      <Dropdown
        inline
        header='Adjust time span'
        options={options}
        defaultValue={options[0].value}
      />
    </Header.Content>
  </Header>
)

export default DropdownExampleInlineTwo



