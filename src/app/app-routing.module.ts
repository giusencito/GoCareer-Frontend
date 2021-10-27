import { UserProfileComponent } from './User-Profile/User-Profile.component';
import { ResultComponent } from './Result/Result.component';
import { TestComponent } from './Test/Test.component';
import { TestSelectComponent } from './TestSelect/TestSelect.component';
import { MeetingRoomEspecialistComponent } from './MeetingRoom-Especialist/MeetingRoom-Especialist.component';
import { ReservedComponent } from './Reserved/Reserved.component';
import { EspecialistProfileComponent } from './especialist-profile/especialist-profile.component';
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
{path:'',component:StudentLoginComponent},
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
{path:'Especialist/:id/Testselector/:type/Test/:testid',component:QuestionCreateComponent},
{path:'Especialist/:id/Profile',component:EspecialistProfileComponent},
{path:'Especialist/:id/Profile/Meetings',component:ReservedComponent},
{path:'Especialist/:id/Profile/Meetings/:metid/:userid',component:MeetingRoomEspecialistComponent},
{path:'User/:id/Test_Vocacional',component:TestSelectComponent},
{path:'User/:id/Test_Vocacional/:testid',component:TestComponent},
{path:'User/:id/Test_Vocacional/:testid/Result/:resultid',component:ResultComponent},
{path:'User/:id/Profile',component:UserProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
