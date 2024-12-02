import { Container, Nav, Navbar, Stack} from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
    return <Navbar bg="black" className = "mb-4" style={{height:"5.95rem"}}>
        <Container>
          <Link to = "/" className="link-light text-decoration-none">
            <img 
              src="/src/assets/coldbox-logo.png" alt = "Logo" style = {{ height: "2.5 rem"}}
            />   
          </Link>
          <span className = "text-warning">Logged in as Gieremy BL</span>
          <Nav>
            <Stack direction = "horizontal" gap={3}>
              <Link to = "/login" className = "link-light text-decoration-none">
                Login
              </Link>
              <Link to = "/register" className="link-light text-decoration-none">
                Register
              </Link>
              </Stack>
          </Nav>
        </Container>
        </Navbar>
}
 
export default NavBar;