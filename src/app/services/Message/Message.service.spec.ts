import { Message } from 'src/app/models/Message';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MessageService } from './Message.service';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
describe('Service: Message', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MessageService]
    });
  });
  it('should be created', () => {
    const service: MessageService = TestBed.get(MessageService);
    expect(service).toBeTruthy();
 });

 it('should have getData function', () => {
    const service: MessageService = TestBed.get(MessageService);
    expect(service.getAll()).toBeTruthy();
 });
 it('should have post function', () => {
  const date=new Date ();
 const newEmp:Message= {id:1,MessageDescription:"1",UserId:1,EspecialistId:2,Respuesta:"date"} ;
 const service: MessageService = TestBed.get(MessageService);
 expect(service.create(newEmp)).toBeTruthy();
});
it('should have update function', () => {
 const date=new Date ();
 const newEmp:Message= {id:1,MessageDescription:"1",UserId:1,EspecialistId:2,Respuesta:"date"} ;
 const service: MessageService = TestBed.get(MessageService);
 expect(service.update(1,newEmp)).toBeTruthy();
});
it('should have delete function', () => {
 const service: MessageService = TestBed.get(MessageService);
 expect(service.delete(1)).toBeTruthy();
});
});
