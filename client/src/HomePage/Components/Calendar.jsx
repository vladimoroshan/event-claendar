import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrapPlugin from "@fullcalendar/bootstrap";

import "@fullcalendar/core/main.css";
import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/bootstrap/main.css";

const Calendar = (props) => {
  return   <div className="calendar">
    <FullCalendar
      schedulerLicenseKey='CC-Attribution-NonCommercial-NoDerivatives'

      plugins={[timeGridPlugin, interactionPlugin, bootstrapPlugin]} 
      defaultView="timeGridDay"
      
      header={{
        left: "prev,today,next",
        center: "title",
        right: "export",
      }}               
      buttonText={{
        prev: '<',
        next: '>'
      }}

      minTime="08:00:00"
      maxTime="18:00:00"
      slotLabelFormat={{
        hour: 'numeric',
        minute: '2-digit',
        hour12: false //true
      }}

      themeSystem="bootstrap"
      eventTextColor="black"
      eventBackgroundColor="#E2ECF5"
      eventBorderColor="#6E9ECF"
      contentHeight={463} 
      navLinks={true}            
      editable={true}
      droppable={true}
      selectable={true}
      eventLimit={true}
      slotEventOverlap={false} 
      allDaySlot={false}

      // Methods
      events={props.events}
      select={props.addEvent}
      eventClick={props.editOrRemoveEvent}
      eventDrop={props.eventUpdate} // Triggered when dragging stops and the event has moved to a different day/time.
      eventResize={props.eventUpdate} // Triggered when resizing stops and the event has moved to a different day/time.
    
      customButtons={{              
        export: {
          text: 'Export data as JSON',
          click: props.exportBtn
        }
      }}// End customButtons 
    />
  </div>
}

export { Calendar }