
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import styles from './navbar.module.css'


const NavbarComp = () => {
   return(
    <div className='flex justify'>
      <Navbar expand="md" className="bg-secondary">
      <div className='mx-2'> </div>
      <Navbar.Brand href="#home" className='text-white ml-3'>RTC Hubs Limited</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className='text-white mt-1'>Home</Nav.Link>
          <Nav.Link href="#link" className='text-white mt-1'>About us</Nav.Link>
          <NavDropdown 
          title="Dropdown" id="nav-dropdown" menuVariant='dark' className='mt-1' >
            <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
    </div>
   ); 
}

export default NavbarComp;