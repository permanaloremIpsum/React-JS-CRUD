import React from 'react'
import { connect } from "react-redux";
import { Table } from 'reactstrap';

const mapStateToProps = (state) => {
    return {
        getUserDetail: state.users.getUsersDetail,
        errorUsersDetail: state.users.errorUsersDetail
    };
};

const DetailComp = (props) => {
    console.log(props.getUserDetail)
    return (
        <Table>
            <tbody>
                <tr>
                    <td width="200">Nama</td>
                    <td width="10">:</td>
                    <td>{props.getUserDetail.nama}</td>
                </tr>
                <tr>
                    <td width="200">Alamat</td>
                    <td width="10">:</td>
                    <td>{props.getUserDetail.alamat}</td>
                </tr>
                <tr>
                    <td width="200">Umur</td>
                    <td width="10">:</td>
                    <td>{props.getUserDetail.umur}</td>
                </tr>
                <tr>
                    <td width="200">No. Hp</td>
                    <td width="10">:</td>
                    <td>{props.getUserDetail.nohp}</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default connect(mapStateToProps, null)(DetailComp)
