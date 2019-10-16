import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    register,
    login,
    logout,    
    getEvents,
    addEvent,
    updateEvent,
    deleteEvent
};

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}


function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}


function getEvents() { 
    return dispatch => {
        dispatch(request());

        userService.getEvents()
            .then(
                res => dispatch(success(res)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GET_EVENTS_REQUEST } }
    function success(res) { return { type: userConstants.GET_EVENTS_SUCCESS, events: res } }
    function failure(error) { return { type: userConstants.GET_EVENTS_FAILURE, error } }
}

function addEvent(event) { 
    return dispatch => {
        userService.addEvent(event)
            .then(
                event => dispatch(success(event)),
                error => dispatch(failure(event, error.toString()))
            );
    };

    function success(event) { return { type: userConstants.ADD_EVENT_SUCCESS, event } }
    function failure(event, error) { return { type: userConstants.ADD_EVENT_FAILURE, event, error } }
}

function updateEvent(event) { 
    return dispatch => {
        userService.updateEvent(event)
            .then(
                event => dispatch(success(event)),
                error => dispatch(failure(event, error.toString()))
            );
    };

    function success(event) { return { type: userConstants.UPDATE_EVENT_SUCCESS, event } }
    function failure(event, error) { return { type: userConstants.UPDATE_EVENT_FAILURE, event, error } }
}

function deleteEvent(event) { 
    return dispatch => {
        userService.deleteEvent(event)
            .then(
                event => dispatch(success(event)),
                error => dispatch(failure(event, error.toString()))
            );
    };

    function success(event) { return { type: userConstants.DELETE_EVENT_SUCCESS, event } }
    function failure(event, error) { return { type: userConstants.DELETE_EVENT_FAILURE, event, error } }
}