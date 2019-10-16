import { userConstants } from '../_constants';

export function calendar(state = [], action) {
  switch (action.type) {
    // Get all user events
    case userConstants.GET_EVENTS_REQUEST:
      return {
        loading: true
      };
    case userConstants.GET_EVENTS_SUCCESS:     
      return {
        events: action.events
      };
    case userConstants.GET_EVENTS_FAILURE:
      return { 
        error: action.error
      };

    // Add event 
    case userConstants.ADD_EVENT_SUCCESS:  
      return {
        events: [...state.events, action.event.event] 
      };

    // Update event   
    case userConstants.UPDATE_EVENT_SUCCESS:  
      const newEvents =  [...state.events];   
      const index =  newEvents.findIndex(e => e.id === action.event.newEvent.id);
      newEvents[index] =  action.event.newEvent;
      return {
        events: newEvents
      };

    // Delete event
    case userConstants.DELETE_EVENT_SUCCESS:
      return {
        events: state.events.filter(event => event.id !== action.event.id)
      };

    default:
      return state;
  }
}