import { Button, Container, Menu, MenuItem } from 'semantic-ui-react';

export default function NavBar(){
    return(
        <Menu inverted fixed = 'top'>
            <Container>
                <MenuItem header>
                    <img src="../../../public/assests/logo.png" alt="logo" style={{marginRight : '10px'}}></img>
                    Reactivites
                </MenuItem>
                <MenuItem name = "Activites"></MenuItem>
                <MenuItem>
                <Button positive content='Create'></Button>
                </MenuItem>
            </Container>
        </Menu>
    )
}

