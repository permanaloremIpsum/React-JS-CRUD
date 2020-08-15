import React, { Component } from 'react'
import TableComp from '../components/TableComp'
import { connect } from "react-redux";
import {getUsersList, deleteUsersDetail} from '../actions/userAction'

class HomeContainer extends Component {
    componentDidMount(){
        this.props.dispatch(getUsersList())
        this.props.dispatch(deleteUsersDetail())
    }

    render() {
        return (
            <div>
                <TableComp/>
            </div>
        )
    }
}

export default connect()(HomeContainer)
