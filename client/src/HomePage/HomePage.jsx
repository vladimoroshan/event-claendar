import React from 'react';
import { connect } from 'react-redux';
import FileSaver from "file-saver";
import { userActions } from '../_actions';
import { Header } from './Components/Header';
import { Calendar } from './Components/Calendar';
import { AddForm } from './Components/AddForm';
import { EditForm } from './Components/EditForm';

import { convertDatatoJSON } from "../_helpers/convertToJSON";
import './style.scss';

// Simple, fast generation of RFC4122 UUIDS.
const uuidv1 = require('uuid/v1'); // Read more at https://github.com/kelektiv/node-uuid

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddFormOpen: false,
            isEditFormOpen: false,
            eventEdited: {}
        }
    }

    componentDidMount() {
        this.props.getEvents(); 
    }

    // Triggered by clicking on empty field
    openAddForm = (e) => { //by select
        this.setState({
            isAddFormOpen: true,
            eventEdited: {
                start: e.startStr, // start and end defined by what rows user selected or clicked
                end: e.endStr
            }
        });
    }

    // Triggered by clicking on existing event
    openEditForm = (e) => {
        this.setState({
            eventEdited: {
                id: e.event.id,
                title: e.event.title,
                start: e.event.start,
                end: e.event.end
            },
            isEditFormOpen: true
        });
    }

    // Triggered by dragging or resizing
    eventUpdateTime = (e) => {
        const index = this.props.calendar.events.findIndex(item => item.id === e.event.id);        
        let eventToUpdate =  this.props.calendar.events[index];
        eventToUpdate.start = e.event.start;
        eventToUpdate.end = e.event.end;
        // console.log(" eventUpdateTime ", eventToUpdate)   
        this.props.updateEvent(eventToUpdate);
    }

    // Triggered by dialog form. This method for add, update or delete event
    handleClose = (type, value) => {
        if (type === "save") {
            let newEvent = { ...this.state.eventEdited } // get start and end time
            newEvent.title = value; // add title from form
            newEvent.id = uuidv1(); // generete unique ID 
            this.props.addEvent(newEvent);        
        } else if (type === "update") {
            const index = this.props.calendar.events.findIndex(item => item.id === this.state.eventEdited.id);
            let eventToUpdate = { ...this.props.calendar.events[index] }; // shallow copy
            eventToUpdate.title = value;   //update title 
            // console.log(" eventToUpdate ", eventToUpdate)                    
            this.props.updateEvent(eventToUpdate);
        } else if (type === "delete") {
            const eventToDelete = this.state.eventEdited;
            this.props.deleteEvent(eventToDelete);
        }

        this.setState({
            isAddFormOpen: false,
            isEditFormOpen: false,
            eventEdited: {} // clear
        });
    }; // end handleClose

    exportDataAsJSON = () => {
        const dataForExport = convertDatatoJSON(this.props.calendar.events);
        console.log(dataForExport)
        const fileName = "calendarEvents.json";

        const fileToSave = new Blob([JSON.stringify(dataForExport)], {
            type: "application/json",
            name: fileName
        });

        FileSaver.saveAs(fileToSave, fileName);
    }

    render() {
        return (
            <div>
                <Header />
                <AddForm
                    open={this.state.isAddFormOpen}
                    handleClose={this.handleClose}
                />
                <EditForm
                    open={this.state.isEditFormOpen}
                    handleClose={this.handleClose}
                    value={this.state.eventEdited.title}
                />
                <Calendar
                    events={this.props.calendar.events || []}
                    addEvent={this.openAddForm}
                    editOrRemoveEvent={this.openEditForm}
                    exportBtn={this.exportDataAsJSON}
                    eventUpdate={this.eventUpdateTime}
                />
            </div>
        );
    }
}


function mapStateToProps(state) {
    // console.log(state)
    const { authentication, calendar } = state;
    const { user } = authentication;
    return { user, calendar };
}

const mapDispatchToProps = {
    getEvents: userActions.getEvents,
    addEvent: userActions.addEvent,
    updateEvent: userActions.updateEvent,
    deleteEvent: userActions.deleteEvent
}

const connectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);
export { connectedHomePage as HomePage };

