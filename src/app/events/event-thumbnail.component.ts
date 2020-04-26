import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { IEvent } from './shared/event.model';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class='well hoverwell thumbnail'>
    <h2>{{ event?.name }}</h2>
    <div>Date: {{ event?.date }}</div>
    <div [ngStyle]='getStartTimeStyle()' [ngSwitch]="event?.time">Time: {{ event?.time }}
      <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
      <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price: \${{ event?.price }}</div>
    <div *ngIf="event?.location">
      <span>Location: {{ event?.location?.address }}</span>
      <span class='pad-left'>{{ event?.location?.city }}, {{ event?.location?.country }}</span>
      <span></span>
    </div>
    <div *ngIf="event?.onlineUrl">Online URL: {{ event?.onlineUrl }}</div>
  </div>
  `,
  styles: [`
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px;}
    .well div { color: #bbb; }
  `]
})

export class EventThumbnailComponent implements OnInit {
  @Input()event: IEvent;

  constructor() { }

  ngOnInit() { }

  getStartTimeStyle() {
    if (this.event && this.event.time === '8:00 am') {
      return {color:"#003300", 'font-weight' /*in quotes because of the dash in it's name*/ : 'bold'}
    } else{
      return {}
    }
  }
}
