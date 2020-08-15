import React, { Component } from 'react'
import { Container } from 'reactstrap'
import PageComp from '../components/PageComp'
import { connect } from "react-redux";
import { getUsersDetail } from '../actions/userAction';
import DetailComp from '../components/DetailComp';

class DetailUserContainer extends Component {
    componentDidMount(){
        let id = this.props.match.params.id
        this.props.dispatch(getUsersDetail(id))
    }

    render() {
        return (
            <Container>
                <PageComp/>
                <h1>Detail User</h1>
                <DetailComp/>
            </Container>
        )
    }
}

export default connect()(DetailUserContainer)
