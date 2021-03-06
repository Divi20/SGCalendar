import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import $ from 'jquery'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EventCalender extends React.Component{
  calendarComponentRef = React.createRef()
  state = {
    name : '',
    startDate : new Date(),
    endDate : new Date(),
    currentdate: null,
    calendarWeekends: true,
    calendarEvents: [ // initial event data
      { title: 'Event Now', start: new Date(), end: null}
    ],
    eventTimeFormat: { // like '14:30:00'
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    meridiem: false
    }
  }

  eventClick = (info) => {
    var eventObj = info.event;
    var eventId = info.event.id;
    
    this.setState({name : eventObj.title});
    this.setState({currentdate : eventObj.start})

  $('#createDeleteEventModal').modal('show')
  $('#deleteEventButton').click(function() {
      eventObj.remove();
  });
  
  this.setState({eventToDelete : eventId});
}

  mySubmitHandler = (event) => {
    event.preventDefault();
    window.confirm("You are submitting " + this.state.name + this.state.description + this.state.remindme + this.state.startDate + this.state.endDate);
    if(this.state.name === ""){
      alert("please enter event");
    }
    else{
    this.setState({  // add new event data
      calendarEvents: this.state.calendarEvents.concat({ // creates a new array
        title: this.state.name,
        start:this.state.startDate,
        end: this.state.endDate
      })
    })
  }
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  toggleWeekends = () => {
    this.setState({ // update a property
      calendarWeekends: !this.state.calendarWeekends
    })
  }

  gotoPast = () => {
    let calendarApi = this.calendarComponentRef.current.getApi()
    calendarApi.gotoDate('2000-01-01') // call a method on the Calendar object
  }
    render(){
        return(
            <div>
            <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            }}
            plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
            ref={ this.calendarComponentRef }
            weekends={ this.state.calendarWeekends }
            events={ this.state.calendarEvents }
            dateClick={ this.handleDateClick }
            eventClick = {this.eventClick}
            editable = 'true'
            displayEventTime = 'true'
            displayEventEnd = 'true'
            />
          
  <div className="modal fade" id="addEventModal" role="dialog">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title"></h4>
        </div>
        <div className="modal-body">
        <form onSubmit={this.mySubmitHandler}>
        <h1>Hello {this.state.name} {this.state.age}</h1>
        <p>Enter your name:</p>
        <input
          type='text'
          name='name'
          id = "name"
          onChange={this.myChangeHandler}
        />
        <p>Enter your age:</p>
        <input
          type='text'
          name='description'
          id = "description"
          onChange={this.myChangeHandler}
        />
        <p>Choose the date range</p>
       
        <div className="row" style={{justifyContent:"center"}}>
       
        <this.handleStartTime></this.handleStartTime>
        <this.handleEndTime></this.handleEndTime>
        </div>
<br></br>
        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">remindme</label>
  
<div>
<input
type = 'submit'
name = 'submit'
/>
</div>

     
        </form>
         
        </div>
        <div className="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>

  <div className="modal fade" id="createDeleteEventModal" role="dialog">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title"></h4>
        </div>
        
        <div className="modal-body">
          <form onSubmit={this.mySubmitHandler}>
            <h1>Hello</h1>
            <p>Edit Event Name:</p>
            <input
              type='text'
              name='name'
              id = "cdname"
              onChange={this.myChangeHandler}
              placeholder={this.state.name}
            />

            <p>Edit event date:</p>
            <input
              type='text'
              name='description'
              id = "cddescription"
              placeholder={this.state.currentdate}
            />

            <p>
              <this.handleStartTime></this.handleStartTime>
              <this.handleEndTime></this.handleEndTime>
            
            </p>
             
            <p>Edit remindme:</p>
            <input
              type='text'
              name='remindme'
              id =  "remindme"
            />


        <p>
        <button id="deleteEventButton" type="button" class="btn btn-default">Delete</button>
      </p>

      <input
        type = 'submit'
        name = 'submit'
        />
        </form>
         
        </div>
        <div className="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>

            </div>

        )
    }

    
    handleDateClick = (arg) => {
      $('#addEventModal').modal('show')
      this.setState({currentdate : arg.date});
    
    }

   handleStartTime = () => {
     
      return (
        <DatePicker
          selected={this.state.startDate}
          onChange={date => this.setState({startDate: date}) }
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
        />
      );
    };

    handleEndTime = () => {
      
      return (
        <DatePicker
        selected={this.state.endDate}
        onChange={date => this.setState({endDate: date}) }
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
        />
      );
    };

  


   
}