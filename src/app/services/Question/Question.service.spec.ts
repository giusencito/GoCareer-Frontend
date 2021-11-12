import { Question } from 'src/app/models/Question';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuestionService } from './Question.service';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
describe('Service: Question', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [QuestionService]
    });
  });

  it('should be created', () => {
    const service: QuestionService = TestBed.get(QuestionService);
    expect(service).toBeTruthy();
 });

 it('should have getData function', () => {
    const service: QuestionService = TestBed.get(QuestionService);
    expect(service.getAll()).toBeTruthy();
 });
 it('should have post function', () => {
  const date=new Date ();
 const newEmp:Question= {questionId:1,questionName:"1",testid:1} ;
 const service: QuestionService = TestBed.get(QuestionService);
 expect(service.create(newEmp)).toBeTruthy();
});
it('should have update function', () => {
 const date=new Date ();
 const newEmp:Question= {questionId:1,questionName:"1",testid:1} ;
 const service: QuestionService = TestBed.get(QuestionService);
 expect(service.update(1,newEmp)).toBeTruthy();
});
it('should have delete function', () => {
 const service: QuestionService = TestBed.get(QuestionService);
 expect(service.delete(1)).toBeTruthy();
});
});
