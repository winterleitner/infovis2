import React, {useState} from 'react'
import {
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    DropdownMenu,
    DropdownItem,
    NavbarToggler,
    Collapse,
    UncontrolledDropdown,
    DropdownToggle,
    Nav
} from "reactstrap";

const Layout = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/#/">Scuba Diving Support</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/#/welcome">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#/dt">Depth-Temperature</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#/vis">Vis</NavLink>
                        </NavItem>
                    </Nav>
                    <UncontrolledDropdown navbar>
                        <DropdownToggle nav>
                            Group 14
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <strong>Members</strong>
                            </DropdownItem>
                            <DropdownItem divider/>
                            <DropdownItem>
                                Simone Andreetto
                            </DropdownItem>
                            <DropdownItem>
                                Christoph Götz
                            </DropdownItem>
                            <DropdownItem>
                                Felix Winterleitner
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Collapse>
            </Navbar>
            <div className="container">
            {props.children}
            </div>
        </div>
    )
}

export default Layout