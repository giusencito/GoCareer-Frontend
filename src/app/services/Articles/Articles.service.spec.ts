import { Article } from './../../models/Article';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArticlesService } from './Articles.service';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule,HttpClient,HttpResponse } from '@angular/common/http';
describe('Service: Articles', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let articleService: ArticlesService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArticlesService]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    articleService = TestBed.inject(ArticlesService);
  });

  it('should be created', () => {
    const service: ArticlesService = TestBed.get(ArticlesService);
    expect(service).toBeTruthy();
 });

 it('should have getData function', () => {
    const service: ArticlesService = TestBed.get(ArticlesService);
    expect(service.getAll()).toBeTruthy();
 });
 it('should have post function', () => {
  const newEmp:Article= {articleid:1,"articleName":"aaaa","articleDescription":"bbbb","careerid":2} ;
  const service: ArticlesService = TestBed.get(ArticlesService);
  expect(service.create(newEmp)).toBeTruthy();
});
it('should have update function', () => {
  const newEmp:Article= {articleid:1,"articleName":"aaaa","articleDescription":"bbbb","careerid":2} ;
  const service: ArticlesService = TestBed.get(ArticlesService);
  expect(service.update(1,newEmp)).toBeTruthy();
});
it('should have delete function', () => {
  const service: ArticlesService = TestBed.get(ArticlesService);
  expect(service.delete(1)).toBeTruthy();
});
it('should have getdatabycareer function', () => {
  const service: ArticlesService = TestBed.get(ArticlesService);
  expect(service.getallarticlesbycarreer(1)).toBeTruthy();
});




 /*it('should add an Article and return it', () => {
  const newEmp:Article= {id:1,ArticleName:"aaaa",ArticleDescription:"bbbb",CareerId:2} ;

  articleService.create(newEmp).subscribe(

    data=>expect(data).toEqual(newEmp,'should return the article'),
    fail
  )
  const req = httpTestingController.expectOne(articleService.basePath);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(newEmp);

    // Expect server to return the employee after POST
    const expectedResponse = new HttpResponse({ status: 201, statusText: 'created', body: newEmp });
    req.event(expectedResponse);


 });*/




});
