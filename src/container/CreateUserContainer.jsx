import React, { Component } from 'react'
import { Container } from 'reactstrap'
import PageComp from '../components/PageComp'

class CreateUserContainer extends Component {
    render() {
        return (
            <Container>
                <PageComp/>
                <h1>Create User</h1>
            </Container>
        )
    }
}

export default CreateUserContainer
