import { Especialist } from 'src/app/models/Especialist';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EspecialistService } from './Especialist.service';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
describe('Service: Especialist', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EspecialistService]
    });
  });

  it('should be created', () => {
    const service: EspecialistService = TestBed.get(EspecialistService);
    expect(service).toBeTruthy();
 });

 it('should have getData function', () => {
    const service: EspecialistService = TestBed.get(EspecialistService);
    expect(service.getAll()).toBeTruthy();
 });
 it('should have post function', () => {
  const newEmp:Especialist= {especialistId:1,especialistName:"aaaa",especialistLastName:"bbbb",especialistEmail:"ccc",especialistPassword:"aaass",especialistInformation:"aaasq"} ;
  const service: EspecialistService = TestBed.get(EspecialistService);
  expect(service.create(newEmp)).toBeTruthy();
});
it('should have update function', () => {
  const newEmp:Especialist= {especialistId:1,especialistName:"aaaa",especialistLastName:"bbbb",especialistEmail:"ccc",especialistPassword:"aaass",especialistInformation:"aaasq"} ;
  const service: EspecialistService = TestBed.get(EspecialistService);
  expect(service.update(1,newEmp)).toBeTruthy();
});
it('should have delete function', () => {
  const service: EspecialistService = TestBed.get(EspecialistService);
  expect(service.delete(1)).toBeTruthy();
});

});
