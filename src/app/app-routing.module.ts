import { QuestionCreateComponent } from './QuestionCreate/QuestionCreate.component';
import { TestmakerComponent } from './Testmaker/Testmaker.component';
import { TextselectorComponent } from './textselector/textselector.component';
import { AnswerMessageComponent } from './AnswerMessage/AnswerMessage.component';
import { MessageComponent } from './Message/Message.component';
import { EspecialistRegisterComponent } from './EspecialistRegister/EspecialistRegister.component';
import { EspecialistLoginComponent } from './EspecialistLogin/EspecialistLogin.component';
import { EspecialistDateComponent } from './EspecialistDate/EspecialistDate.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticlesComponent } from './Articles/Articles.component';
import { StudentLoginComponent } from './StudentLogin/StudentLogin.component';
import { StudentRegisterComponent } from './StudentRegister/StudentRegister.component';
import { EspecialistSelectComponent } from './EspecialistSelect/EspecialistSelect.component';
import { CareerComponent } from './Career/Career.component';
import { HomeEspecialistComponent } from './Home-Especialist/Home-Especialist.component';

const routes: Routes = [
{path:'',component:HomePageComponent},
{path:'User/:id',component:HomePageComponent},
{path:'User/:id/Careers/:careerid',component:ArticlesComponent},
{path:'loginstudent',component:StudentLoginComponent},
{path:'studentregister',component:StudentRegisterComponent},
{path:'User/:id/especialistSelect',component:EspecialistSelectComponent},
{path:'User/:id/especialistSelect/:especid',component:EspecialistDateComponent},
{path:'User/:id/Careers',component:CareerComponent},
{path:'EspecialistRegister',component:EspecialistRegisterComponent},
{path:'loginEspecialist',component:EspecialistLoginComponent},
{path:'Especialist/:id',component:HomeEspecialistComponent},
{path:'Especialist/:id/Messages',component:MessageComponent},
{path:'Especialist/:id/Messages/:mesid',component:AnswerMessageComponent},
{path:'Especialist/:id/Testselector',component:TextselectorComponent},
{path:'Especialist/:id/Testselector/:type',component:TestmakerComponent},
{path:'Especialist/:id/Testselector/:type/Test/:testid',component:QuestionCreateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
