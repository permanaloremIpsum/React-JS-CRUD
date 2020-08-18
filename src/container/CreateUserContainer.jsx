import React, { Component } from 'react'
import { Container } from 'reactstrap'
import PageComp from '../components/PageComp'
import FormComp from '../components/FormComp'
import { connect } from "react-redux";
import { postUsersCreate } from '../actions/userAction';

class CreateUserContainer extends Component {
    handleSubmit = (data) =>{
        this.props.dispatch(postUsersCreate(data))
    }

    render() {
        return (
            <Container>
                <PageComp/>
                <h1>Create User</h1>
                <FormComp onSubmit={(data) => this.handleSubmit(data)}/>
            </Container>
        )
    }
}

export default connect()(CreateUserContainer)
