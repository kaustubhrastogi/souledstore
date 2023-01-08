import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Dropdown, Grid, List, Icon } from 'semantic-ui-react'
import Footer from '../Footer/Footer';
import ButtonIcon from '../Header/ButtonIcon';
import Buttoncomponent from './Buttoncomponent';
import Faqs from './Faqs';
import Linkcomponent from './Linkcomponent';
import Login from './Login';
import { Link } from 'react-router-dom';

const linkuri1 = [
  {
    uri: "https://www.instagram.com/TheSouledStore/",
    name:'Instagram',
    value:'instagram'

  },
  {
    uri: "https://www.youtube.com/channel/UC1LkdB8GTrMEwFF_yzqytoA",
    name:'Youtube',
    value:'youtube'
    
  },
  {
    uri: "https://twitter.com/TheSouledStore",
    name:'Twitter',
    value:'twitter'
 
  },
  {
    uri: "https://www.facebook.com/SouledStore",
    name:'Facebook',
    value:'facebook'
    
  },
]

const options = [
  { key: 'angular', text: 'Angularjfhjfhfhfh', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'ember', text: 'Ember', value: 'ember' },
  { key: 'html', text: 'HTML', value: 'html' },
  { key: 'ia', text: 'Information Architecture', value: 'ia' },
  { key: 'javascript', text: 'Javascript', value: 'javascript' },
  { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
  { key: 'meteor', text: 'Meteor', value: 'meteor' },
  { key: 'node', text: 'NodeJS', value: 'node' },
  { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
  { key: 'python', text: 'Python', value: 'python' },
  { key: 'rails', text: 'Rails', value: 'rails' },
  { key: 'react', text: 'React', value: 'react' },
  { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
  { key: 'ruby', text: 'Ruby', value: 'ruby' },
  { key: 'ui', text: 'UI Design', value: 'ui' },
  { key: 'ux', text: 'User Experience', value: 'ux' },
]

function BasicExample() {
  return (
    <>
      <div>
        <h1 className='divspace' style={{margin:'40px'}}>Manage Order Easily</h1>
        <div className='btndirection' >
          <Buttoncomponent />
        </div>

        <div className='sp1'>
          <h1>What can we help you with today?</h1>
          <div >
            <Dropdown placeholder='Skills'
             fluid multiple selection options={options}
              style={{ width: '400px', margin: 'auto' }} />
          </div>
        </div>

        <div className='divspace' >
          <Grid>
            <Grid.Column >
              <Faqs />
            </Grid.Column>
          </Grid>

          <div className='divspace'>
            <h1>Need more help? Get in touch.</h1>
            <h3>Speak With Us</h3>
            <p>Mon-Sun: 9:00 AM to 8:00 PM </p>
            <p><Icon name="phone" /> 630-6640-599 </p>
            <h1>Stay in touch</h1>

            <div className='linkstyle'>
              <ButtonIcon value ={linkuri1}/>     
            </div>
          </div>
        </div>
        {/* <div >
        <Login />
        </div> */}
        <div className='divspace'>
          
          <Footer />
        </div>

      </div>
    </>

  );
}

export default BasicExample;



