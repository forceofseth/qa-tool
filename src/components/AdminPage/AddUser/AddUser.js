import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import {useAuthorizationRedirect} from "../../../hooks/useAuthorizationRedirect";
import ForbiddenPage from "../../Status/ForbiddenPage";

function AddUser(props) {

    const redirectCondition = (authUser) => !!authUser;
    useAuthorizationRedirect(redirectCondition, props.authUser);

    return (
        <div>{props.authUser ? <AddUserAuth/> : <ForbiddenPage/>}</div>
    );
}


const AddUserAuth = () => {
    return (
        <Container maxWidth="lg">
            <CssBaseline/>
            <h1>Add New User</h1>

        </Container>)
};


export default AddUser;