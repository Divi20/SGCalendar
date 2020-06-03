import React from 'React';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import $ from 'jquery'
import Time from './TimeComponent'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


function Calender(){
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
    eventClick = {this.state.eventClick}
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
<p>Enter your remindme:</p>
<input
  type='text'
  name='remindme'
  id =  "remindme"
  onChange={this.myChangeHandler}
/>
<div className="row">
<this.handleStartTime></this.handleStartTime>
<this.handleEndTime></this.handleEndTime>
</div>

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

<div className="modal fade" id="createDeleteEventModal" role="dialog">
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
  id = "cdname"
  onChange={this.myChangeHandler}
/>
<p>Enter your age:</p>
<input
  type='text'
  name='description'
  id = "cddescription"
  onChange={this.myChangeHandler}
/>
<p>Enter your remindme:</p>
<input
  type='text'
  name='remindme'
  id =  "remindme"
  onChange={this.myChangeHandler}
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

);


}

export default Calender();