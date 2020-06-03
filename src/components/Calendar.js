import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import $ from 'jquery'

export default class EventCalender extends React.Component{

  calendarComponentRef = React.createRef()
  state = {
    name : '',
    currentdate: null,
    calendarWeekends: true,
    calendarEvents: [ // initial event data
      { title: 'Event Now', start: new Date()}
    ],
    eventTimeFormat: { // like '14:30:00'
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    meridiem: false
  },
  displayEventTime:'true',
  eventClick: function(info) {
    var eventObj = info.event;

    if (eventObj.url) {
      alert(
        'Clicked hah' + eventObj.title + '.\n' +
        'Will open ' + eventObj.url + ' in a new tab'
      );

      window.open(eventObj.url);

      info.jsEvent.preventDefault(); // prevents browser from following link in current tab.
    } else {
      alert('Clicked haha' + eventObj.title);
    }
  }
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.name + this.state.description + this.state.remindme);
    this.setState({  // add new event data
      calendarEvents: this.state.calendarEvents.concat({ // creates a new array
        title: this.state.name,
        start: this.state.currentdate,
        allDay: 'false',
        displayEventTime: 'true'
      })
    })

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
            eventClick = {this.state.eventClick}
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
          onChange={this.myChangeHandler}
        />
        <p>Enter your age:</p>
        <input
          type='text'
          name='description'
          onChange={this.myChangeHandler}
        />
        <p>Enter your remindme:</p>
        <input
          type='text'
          name='remindme'
          onChange={this.myChangeHandler}
        />

        <input
    type='submit'
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

  


   
}