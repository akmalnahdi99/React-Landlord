import React from 'react'
import FullCalendar from '@fullcalendar/react'; 
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'


export default class CalendarPage extends React.Component {
    
    render() {
        return (
            <FullCalendar defaultView="dayGridMonth" dateClick={this.handleDateClick} select={this.handleSelectClick} selectable='true' plugins={[ dayGridPlugin, interactionPlugin ]}  event={[
                { title: 'event 1', allDay: true, start: '2020-12-04', end: '2020-12-05' },
                { title: 'event 2', allDay: true, start: '2020-05-29', end: '2020-05-30'}
            ]}/>
        )
      }
      handleDateClick = (arg) => { // bind with an arrow function
        
      }
    }
