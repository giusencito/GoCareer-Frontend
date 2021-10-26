import { Option } from './../../models/Option';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OptionService } from './Option.service';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
describe('Service: Option', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OptionService]
    });
  });

  it('should be created', () => {
    const service: OptionService = TestBed.get(OptionService);
    expect(service).toBeTruthy();
 });

 it('should have getData function', () => {
    const service: OptionService = TestBed.get(OptionService);
    expect(service.getAll()).toBeTruthy();
 });

 it('should have post function', () => {
  const date=new Date ();
 const newEmp:Option= {id:1,OptionName:"1",QuestionId:1,Optionpoint:2} ;
 const service: OptionService = TestBed.get(OptionService);
 expect(service.create(newEmp)).toBeTruthy();
});
it('should have update function', () => {
 const date=new Date ();
 const newEmp:Option= {id:1,OptionName:"1",QuestionId:1,Optionpoint:2} ;
 const service: OptionService = TestBed.get(OptionService);
 expect(service.update(1,newEmp)).toBeTruthy();
});
it('should have delete function', () => {
 const service: OptionService = TestBed.get(OptionService);
 expect(service.delete(1)).toBeTruthy();
});
});
