import React, {Component } from 'react';
import EventCalender from './Calendar';

export default class Content extends Component {
  render() {
    return <div
    className="content-container">
    <EventCalender></EventCalender>
    </div>
  }
}