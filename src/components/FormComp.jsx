import React, { Component } from 'react'
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import UserValidations from '../validations/UserValidations';

const renderField = ({
    input,
    type,
    placeholder,
    label,
    disabled,
    readOnly,
    meta: { touched, error, warning },
}) => (
        <Row>
            <Col md="12">
                <Label htmlFor="{input}" className="col-form-label">
                    {label}
                </Label>
            </Col>
            <Col md="12">
                <Input
                    {...input}
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    readOnly={readOnly}
                ></Input>
                {touched &&
                    ((error && <p style={{ color: "red" }}>{error}</p>) ||
                        (warning && <p style={{ color: "brown" }}>{warning}</p>))}
            </Col>
        </Row>
    );

class FormComp extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <FormGroup row>
                    <Col md={6}>
                        <FormGroup>
                            <Field
                                type="text"
                                name="nama"
                                component={renderField}
                                label="Nama :"
                            />
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup>
                            <Field
                                type="text"
                                name="alamat"
                                component={renderField}
                                label="Alamat :"
                            />
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup>
                            <Field
                                type="text"
                                name="umur"
                                component={renderField}
                                label="Umur :"
                            />
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup>
                            <Field
                                type="text"
                                name="nohp"
                                component={renderField}
                                label="No. Hp :"
                            />
                        </FormGroup>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col md="12">
                        <FormGroup>
                            <Button
                                color="dark"
                                type="submit"
                                disabled={this.props.submitting}>
                                Submit
                            </Button>
                        </FormGroup>
                    </Col>
                </FormGroup>
            </form>
        )
    }
}

FormComp = reduxForm({
    form: "formCreateUser",
    validate : UserValidations,
    enableReinitialize: true,
})(FormComp);
export default connect()(FormComp)
