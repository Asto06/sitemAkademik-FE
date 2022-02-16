import { Component, OnInit } from '@angular/core';
import {
  CalendarOptions,
  DateSelectArg,
  EventClickArg,
  EventApi,
} from '@fullcalendar/angular';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ScheduleService } from 'src/app/_services/schedule.service';

@Component({
  selector: 'app-parent-schedule',
  templateUrl: './parent-schedule.component.html',
  styleUrls: ['./parent-schedule.component.css'],
})
export class ParentScheduleComponent implements OnInit {
  constructor(private scheduleService: ScheduleService) {}

  events: any[] = [];
  getEvent: any[] = [];
  calendarVisible = true;
  currentEvents: EventApi[] = [];
  calendarOptions!: CalendarOptions;
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

  ngOnInit(): void {
    this._eventInit();
    setTimeout(() => {
      this.calendarOptions = {
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'timeGridWeek, listWeek',
        },
        initialView: 'timeGridWeek',
        events: this.events[0],
        weekends: true,
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        // select: this.handleDateSelect.bind(this),
        // eventClick: this.handleEventClick.bind(this),
        eventsSet: this.handleEvents.bind(this),
      };
    }, 1500);
  }

  private _eventInit() {
    this.scheduleService.getEvent().subscribe((events) => {
      this.events.push(events);
    });
  }

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      const event = {
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      };

      calendarApi.addEvent(event);
      this.scheduleService.addEvent(event).subscribe((res) => {
        this.getEvent = res;
        console.log('Ini Consolelog AddEvent', this.getEvent);
        const resultArray = Object.keys(this.getEvent).map((index: any) => {
          let person = this.getEvent[index];
          return person;
        });
      });
      calendarApi.getEvents();
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.scheduleService.getEvent().subscribe((events) => {
      this.events.push(events);
    });
  }
}

function Id(Id: any) {
  throw new Error('Function not implemented.');
}
