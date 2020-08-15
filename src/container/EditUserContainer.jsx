import React, { Component } from 'react'
import { Container } from 'reactstrap'
import PageComp from '../components/PageComp'

class EditUserContainer extends Component {
    render() {
        return (
            <Container>
                <PageComp/>
                <h1>Edit User</h1>
            </Container>
        )
    }
}

export default EditUserContainer
