import React from 'react';
import './RootPage.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from '../../constants/routes'
import AccountPageContainer from "../AccountPage/AccountPageContainer";
import AddCasePageContainer from "../AddCasePage/AddCasePageContainer";
import AdminPageContainer from "../AdminPage/AdminPageContainer";
import EditCaseContainer from "../EditCasePage/EditCasePageContainer";
import HomePageContainer from "../HomePage/HomePageContainer";
import PasswordForgetPageContainer from "../PasswordForgetPage/PasswordForgetPageContainer";
import SignInPageContainer from "../SignInPage/SignInPageContainer";
import AddUserContainer from "../AdminPage/UserManagement/AddUser/AddUserContainer";
import PrivateRouteContainer from "../Ui/PrivateRoute/PrivateRouteContainer";
import AdminRouteContainer from "../Ui/AdminRoute/AdminRouteContainer";
import NavigationContainer from "./Navigation/NavigationContainer";
import LeadCheckListContainer from "../CheckLists/LeadCheckList/LeadCheckListContainer";
import WebCheckListContainer from "../CheckLists/WebCheckList.js/WebCheckListContainer";
import EditMasterDataContainer from "../AdminPage/MasterData/EditMasterData/EditMasterDataContainer";
import NotFound from "../Status/NotFound";
import {Switch} from "react-router";
import CommentPageContainer from "../CommentPage/CommentPageContainer";
import EditUserContainer from "../AdminPage/UserManagement/EditUser/EditUserContainer";


function RootPage(props) {
    return (
        <Router>
            {props.auth.isEmpty ? null : <NavigationContainer/>}
            <Switch>
            <Route path={ROUTES.SIGN_IN} component={SignInPageContainer}/>
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPageContainer}/>
            <PrivateRouteContainer exact path={ROUTES.HOME} component={HomePageContainer}/>
            <PrivateRouteContainer path={ROUTES.ACCOUNT} component={AccountPageContainer}/>
            <PrivateRouteContainer path={ROUTES.ADD_USER} component={AddUserContainer}/>
            <PrivateRouteContainer path={ROUTES.ADD_CASE} component={AddCasePageContainer}/>
            <PrivateRouteContainer path={ROUTES.EDIT_CASE + "/:id"} component={EditCaseContainer}/>
            <PrivateRouteContainer path={ROUTES.LEAD_CHECKS + "/:id"} component={LeadCheckListContainer}/>
            <PrivateRouteContainer path={ROUTES.WEB_CHECKS + "/:id"} component={WebCheckListContainer}/>
            <PrivateRouteContainer path={ROUTES.COMMENTS + "/:id"} component={CommentPageContainer}/>
            <AdminRouteContainer path={ROUTES.ADMIN} component={AdminPageContainer}/>
            <AdminRouteContainer path={ROUTES.EDIT_MASTERDATA + "/:id"} component={EditMasterDataContainer}/>
            <AdminRouteContainer path={ROUTES.EDIT_USER + "/:id"} component={EditUserContainer}/>
            <PrivateRouteContainer component={NotFound}/>
            </Switch>
        </Router>
    );
}


export default RootPage;
