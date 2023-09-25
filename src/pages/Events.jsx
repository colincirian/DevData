import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import { enUS } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.module.css"

const locales = {
    "en-US": enUS,
  };

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {}
]

function Events() {

    const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent])
    }

    return (
        <div className="calendar-app">
            <h1>Events</h1>
            <h3>Add a New Event</h3>
            <div className="add-events-div">
                <input 
                type="text"
                className="input" 
                placeholder="Add Title" 
                style={{width: "20%", marginLeft: "50px"}}
                value={newEvent.title} 
                onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                />
                <DatePicker 
                placeholderText="Start Date" 
                style={{margin: "10px"}}
                selected={newEvent.start} 
                onChange={(start) => setNewEvent({...newEvent, start})}
                />
                <DatePicker 
                placeholderText="End Date" 
                selected={newEvent.end} 
                onChange={(end) => setNewEvent({...newEvent, end})}
                />
                <button 
                style={{marginTop: "10px"}}
                onClick={handleAddEvent}>
                    Add Event
                </button>
            </div>
            <Calendar 
            localizer={localizer} 
            events={allEvents} 
            startAccessor="start" 
            endAccessor="end" 
            style={{height: 550, margin: "50px"}} 
            />
        </div>
    )
}

export default Events;