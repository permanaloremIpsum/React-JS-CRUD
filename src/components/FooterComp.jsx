import React from 'react';
import {
  Navbar,
  NavbarText,
  Container
} from 'reactstrap';

const FooterComp = (props) => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <Container>
            <NavbarText>Copyright 2020 - Develop by Dede Permana</NavbarText>
        </Container>
      </Navbar>
    </div>
  );
}

export default FooterComp;