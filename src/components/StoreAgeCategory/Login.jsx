import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {  Link } from "react-router-dom";

const colors = [
    'red',
]

class ExampleMenu extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { color } = this.props
        const { activeItem } = this.state

        return (
            <div style={{ width: '400px', margin: 'auto' }}>


                <Menu color={color} widths={2}>
                    <Menu.Item
                        name='Login'
                        active={activeItem === 'Login'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to="/Signin"
                    />
                    <Menu.Item
                        name='Register'
                        active={activeItem === 'Register'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to="/Signup"
                    />
                </Menu>
            </div>
        )
    }
}

const Login = () => {
    const menus = colors.map((color) => <ExampleMenu color={color} key={color} />)

    return (
        <div>
            {menus}
          
        </div>
    )
}

export default Login