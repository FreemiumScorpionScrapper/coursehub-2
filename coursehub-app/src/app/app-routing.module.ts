import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursePageComponent } from './views/course-page/course-page.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ProfileComponent } from './views/profile/profile.component';

const routes: Routes = [  {
  path: 'course/:courseId',
  component: CoursePageComponent
},
{
  path: 'search/:searchQuery',
  component: DashboardComponent
},
{
  path: 'user/:userId',
  component: ProfileComponent
},
{ path: 'search', component: DashboardComponent},
{ path: '**', redirectTo: '/search'},
{ path: '', redirectTo: '/search', pathMatch: 'full'},
{ path: 'callback', component: LoadingComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}