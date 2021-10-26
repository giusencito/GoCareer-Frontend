import { User } from 'src/app/models/Users';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UsersService } from './Users.service';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
describe('Service: Users', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService]
    });
  });

  it('should be created', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
 });

 it('should have getData function', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service.getAll()).toBeTruthy();
 });
 it('should have post function', () => {
  const date=new Date ();
 const newEmp:User= {UserId:1,UserName:"true",UserLastName:"1",UserEmail:"2",UserPassword:"aaa"} ;
 const service: UsersService = TestBed.get(UsersService);
 expect(service.create(newEmp)).toBeTruthy();
});
it('should have update function', () => {
 const date=new Date ();
 const newEmp:User= {UserId:1,UserName:"true",UserLastName:"1",UserEmail:"2",UserPassword:"aaa"} ;
 const service: UsersService = TestBed.get(UsersService);
 expect(service.update(1,newEmp)).toBeTruthy();
});
it('should have delete function', () => {
 const service: UsersService = TestBed.get(UsersService);
 expect(service.delete(1)).toBeTruthy();
});
});
