import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DemoMaterialModule } from './material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticlesComponent } from './Articles/Articles.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentRegisterComponent } from './StudentRegister/StudentRegister.component';
import { StudentLoginComponent } from './StudentLogin/StudentLogin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { EspecialistSelectComponent } from './EspecialistSelect/EspecialistSelect.component';
import { EspecialistDateComponent } from './EspecialistDate/EspecialistDate.component';
import { CareerComponent } from './Career/Career.component';
import { EspecialistRegisterComponent } from './EspecialistRegister/EspecialistRegister.component';
import { EspecialistLoginComponent } from './EspecialistLogin/EspecialistLogin.component';
import { HomeEspecialistComponent } from './Home-Especialist/Home-Especialist.component';
import { EspecialistNavigationComponent } from './Especialist-navigation/Especialist-navigation.component';
import { MessageComponent } from './Message/Message.component';
import { AnswerMessageComponent } from './AnswerMessage/AnswerMessage.component';
import { TextselectorComponent } from './textselector/textselector.component';
import { TestmakerComponent } from './Testmaker/Testmaker.component';
import { QuestionCreateComponent } from './QuestionCreate/QuestionCreate.component';
import { EspecialistProfileComponent } from './especialist-profile/especialist-profile.component';
import { ReservedComponent } from './Reserved/Reserved.component';
import { MeetingRoomEspecialistComponent } from './MeetingRoom-Especialist/MeetingRoom-Especialist.component';
import { TestComponent } from './Test/Test.component';
import { TestSelectComponent } from './TestSelect/TestSelect.component';
import { OptionComponent } from './Option/Option.component';

@NgModule({
  declarations: [								
    AppComponent,
    HomePageComponent,
      NavigationComponent,
      ArticlesComponent,
      StudentRegisterComponent,
      StudentLoginComponent,
      EspecialistSelectComponent,
      EspecialistDateComponent,
      CareerComponent,
      EspecialistRegisterComponent,
      EspecialistLoginComponent,
      HomeEspecialistComponent,
      EspecialistNavigationComponent,
      MessageComponent,
      AnswerMessageComponent,
      TextselectorComponent,
      TestmakerComponent,
      QuestionCreateComponent,
      EspecialistProfileComponent,
      ReservedComponent,
      MeetingRoomEspecialistComponent,
      TestComponent,
      TestSelectComponent,
      OptionComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
