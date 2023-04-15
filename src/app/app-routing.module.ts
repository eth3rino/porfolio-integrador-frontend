import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'contact-me', component: ContactComponent},
  {path:'about-me', component: AboutMeComponent},
  {path:'work', component: WorkComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
