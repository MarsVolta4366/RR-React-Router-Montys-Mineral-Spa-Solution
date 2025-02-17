import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <Container>
            <Nav defaultActiveKey="/" variant="tabs" fill>
                <Nav.Item>
                    <Nav.Link href="/">
                        <Link to="/" className='links'>Home</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link href="/about">
                        <Link to="/about" className='links'>About Us</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link href="/packages">
                        <Link to="/packages" className='links'>Our Packages</Link>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    )
}

export default NavBar