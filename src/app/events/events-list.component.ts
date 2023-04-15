import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

@Component({
    template: `
    <div>
        <h1>Upcomiming Angular Events</h1>
        <hr />
        <div class="row">
        <div class="col-md-5" *ngFor="let event of events">
            <event-thumbnail #thumbnail [event]="event"></event-thumbnail>
        </div>
    </div>`
})
export class EventsListComponent implements OnInit  {
    events: IEvent[];
    constructor(private eventService: EventService,
        private route: ActivatedRoute) {}

    ngOnInit() {
        this.events = this.route.snapshot.data['events'];
    }

}
