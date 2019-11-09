import React, {useState} from 'react';

import {useAuthorizationRedirect} from "../../hooks/useAuthorizationRedirect";
import ForbiddenPage from "../Status/ForbiddenPage";

function AddCasePage(props) {

    const redirectCondition = (authUser) => !!authUser;
    useAuthorizationRedirect(redirectCondition, props.authUser);
    return (
        <div>{props.authUser ? <AddCaseAuth {...props}/> : <ForbiddenPage/>}</div>
    );
}

function AddCaseAuth(props) {

    const INITIAL_STATE = {
        approved: '',
        customer: '',
        date: '',
        projectId: '',
        lead: '',
        product: '',
        web: ''
    };

    const [state, setState] = useState(INITIAL_STATE);

    const isInvalid = state.approved === '' || state.customer === ''
        || state.date === '' || state.projectId === '' || state.lead === '' || state.product === '' || state.web === '';

    const onSubmit = event => {
        props.createCase(state);
        event.preventDefault();
        setState(INITIAL_STATE);
    };

    const onChange = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };


    return (
        <div>
            <h1>SignUp</h1>

            <form onSubmit={onSubmit}>
                <input
                    name="approved"
                    value={state.approved}
                    onChange={onChange}
                    type="text"
                    placeholder="approved"
                />
                <input
                    name="customer"
                    value={state.customer}
                    onChange={onChange}
                    type="text"
                    placeholder="customer"
                />
                <input
                    name="date"
                    value={state.date}
                    onChange={onChange}
                    type="date"
                    placeholder="date"
                />
                <input
                    name="projectId"
                    value={state.projectId}
                    onChange={onChange}
                    type="text"
                    placeholder="id"
                />
                <input
                    name="lead"
                    value={state.lead}
                    onChange={onChange}
                    type="text"
                    placeholder="lead"
                />
                <input
                    name="product"
                    value={state.product}
                    onChange={onChange}
                    type="text"
                    placeholder="product"
                />
                <input
                    name="web"
                    value={state.web}
                    onChange={onChange}
                    type="text"
                    placeholder="web"
                />
                <button
                    type="submit"
                    disabled={isInvalid}
                >Create Case
                </button>
                {state.error && <p>{state.error.message}</p>}
            </form>
        </div>

    );
}


export default AddCasePage;