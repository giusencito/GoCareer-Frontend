import { Meeting } from 'src/app/models/Meeting';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MeetingService } from './Meeting.service';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
describe('Service: Meeting', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MeetingService]
    });
  });

  it('should be created', () => {
    const service: MeetingService = TestBed.get(MeetingService);
    expect(service).toBeTruthy();
 });

 it('should have getData function', () => {
    const service: MeetingService = TestBed.get(MeetingService);
    expect(service.getAll()).toBeTruthy();
 });

 it('should have post function', () => {
   const date=new Date ();
  const newEmp:Meeting= {  meetingId:1,userId:1,especialistId:1,date:date,hour:date} ;
  const service: MeetingService = TestBed.get(MeetingService);
  expect(service.create(newEmp)).toBeTruthy();
});
it('should have update function', () => {
  const date=new Date ();
  const newEmp:Meeting= {meetingId:1,userId:1,especialistId:1,date:date,hour:date} ;
  const service: MeetingService = TestBed.get(MeetingService);
  expect(service.update(1,newEmp)).toBeTruthy();
});
it('should have delete function', () => {
  const service: MeetingService = TestBed.get(MeetingService);
  expect(service.delete(1)).toBeTruthy();
});


});
