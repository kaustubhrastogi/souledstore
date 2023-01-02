import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Dropdown } from 'semantic-ui-react'
import Faqs from './Faqs';

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
        <h1 className='odermange'>Manage Order Easily</h1>
        <div className='btndirection'>

        
          <div className='btndirection'>


            <Button className='btnstyle'  >
              <img
                src="https://prod-img.thesouledstore.com/public/theSoul/images/my-account.png?format=webp&amp;w=300&amp;dpr=1.0" />
              <text> My Account</text>
            </Button >
          </div>
          <div className='btndirection'>
            <Button className='btnstyle' >
              <img
                src="https://prod-img.thesouledstore.com/public/theSoul/images/track.png?format=webp&amp;w=300&amp;dpr=1.0" />
              <text> Track</text>
            </Button>
          </div>
          <div className='btndirection'>
            <Button className='btnstyle' >
              <img
                src="https://prod-img.thesouledstore.com/public/theSoul/images/return.png?format=webp&amp;w=240&amp;dpr=1.0" alt="Return" class="gm-added gm-loaded gm-observing gm-observing-cb" />
              <text> Return</text>
            </Button>
          </div>
          <div className='btndirection'>
            <Button className='btnstyle' >
              <img
                src="https://prod-img.thesouledstore.com/public/theSoul/images/cancel.png?format=webp&amp;w=240&amp;dpr=1.0" alt="Cancel" class="gm-added gm-loaded gm-observing gm-observing-cb" />
              <text > Cancel</text>
            </Button>
          </div>


      </div>
      <div style={{ backgroundColor: 'rgb(0,89,89)', height: '80px' }}>
        <h1>What can we help you with today?</h1>
        <div style={{ justifyContent: 'center', position: 'absolute' }}>
          <Dropdown placeholder='Skills' fluid multiple selection options={options}
            className='dropdownstyle' />
        </div>
      </div>
      <div>
        <Faqs />
      </div>

    </div>
    </>

  );
}

export default BasicExample;



