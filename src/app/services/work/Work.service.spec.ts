import { Work } from 'src/app/models/Work';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WorkService } from './Work.service';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
describe('Service: Work', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WorkService]
    });
  });

  it('should be created', () => {
    const service: WorkService = TestBed.get(WorkService);
    expect(service).toBeTruthy();
 });

 it('should have getData function', () => {
    const service: WorkService = TestBed.get(WorkService);
    expect(service.getAll()).toBeTruthy();
 });
 it('should have post function', () => {
  const date=new Date ();
 const newEmp:Work= {Workid:1,WorkName:"true",WorkDescription:"1",CareerId:2} ;
 const service: WorkService = TestBed.get(WorkService);
 expect(service.create(newEmp)).toBeTruthy();
});
it('should have update function', () => {
 const date=new Date ();
 const newEmp:Work= {Workid:1,WorkName:"true",WorkDescription:"1",CareerId:2} ;
 const service: WorkService = TestBed.get(WorkService);
 expect(service.update(1,newEmp)).toBeTruthy();
});
it('should have delete function', () => {
 const service: WorkService = TestBed.get(WorkService);
 expect(service.delete(1)).toBeTruthy();
});
});
