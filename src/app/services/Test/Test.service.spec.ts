import { Test } from './../../models/Test';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TestService } from './Test.service';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
describe('Service: Test', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TestService]
    });
  });

  it('should be created', () => {
    const service: TestService = TestBed.get(TestService);
    expect(service).toBeTruthy();
 });

 it('should have getData function', () => {
    const service: TestService = TestBed.get(TestService);
    expect(service.getAll()).toBeTruthy();
 });
 it('should have post function', () => {
  const date=new Date ();
 const newEmp:Test= {testid:1,personalized:true,especialistId:1,testname:"2"} ;
 const service: TestService = TestBed.get(TestService);
 expect(service.create(newEmp)).toBeTruthy();
});
it('should have update function', () => {
 const date=new Date ();
 const newEmp:Test= {testid:1,personalized:true,especialistId:1,testname:"2"} ;
 const service: TestService = TestBed.get(TestService);
 expect(service.update(1,newEmp)).toBeTruthy();
});
it('should have delete function', () => {
 const service: TestService = TestBed.get(TestService);
 expect(service.delete(1)).toBeTruthy();
});
});
