import { Career } from './../../models/Career';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CareerService } from './Career.service';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
describe('Service: Career', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CareerService]
    });
  });


  it('should be created', () => {
    const service: CareerService = TestBed.get(CareerService);
    expect(service).toBeTruthy();
 });

 it('should have getData function', () => {
    const service: CareerService = TestBed.get(CareerService);
    expect(service.getAll()).toBeTruthy();
 });
 it('should have post function', () => {
  const newEmp:Career= {id:1,"CareerName":"aaaa","CareerDescription":"bbbb"} ;
  const service: CareerService = TestBed.get(CareerService);
  expect(service.create(newEmp)).toBeTruthy();
});
it('should have update function', () => {
  const newEmp:Career= {id:1,"CareerName":"aaaa","CareerDescription":"bbbb"} ;
  const service: CareerService = TestBed.get(CareerService);
  expect(service.update(1,newEmp)).toBeTruthy();
});
it('should have delete function', () => {
  const service: CareerService = TestBed.get(CareerService);
  expect(service.delete(1)).toBeTruthy();
});


});
