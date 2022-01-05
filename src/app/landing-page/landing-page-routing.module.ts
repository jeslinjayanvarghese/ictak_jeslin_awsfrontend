import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMainComponent } from './About/about-main/about-main.component';
import { HomeMainComponent } from './Home/home-main/home-main.component';
import { MainPageComponent } from './Courses/main-page/main-page.component';
import { SinglePageComponent } from './Courses/single-page/single-page.component';
import { AcademicComponent } from './Offerings/academic/academic.component';
import { AcademiccollaborationsComponent } from './Offerings/academic/academiccollaborations/academiccollaborations.component';
import { CorporateComponent } from './Offerings/corporate/corporate.component';
import { CorporateformComponent } from './Offerings/corporate/corporateform/corporateform.component';
import { PartenshipformComponent } from './Offerings/partnership/partenshipform/partenshipform.component';
import { PartnershipComponent } from './Offerings/partnership/partnership.component';
import { AcademicformComponent } from './Offerings/academic/academicform/academicform.component';
import { EventComponent } from './events/event/event.component';
import { ContactusComponent } from './Home/contactus/contactus.component';



const routes: Routes = [
  
    {
      path: '',
      component: HomeMainComponent
    },    
    {
      path: 'about',
      component: AboutMainComponent
    },
    {
      path: 'courses',
      component: MainPageComponent
    },
    {
      path: 'singlecourses/:id',
      component: SinglePageComponent
    },
    {
      path: 'partnership',
      component: PartnershipComponent
    },
    {
      path: 'partnershipform',
      component: PartenshipformComponent
    },
    {
      path: 'academicform',
      component: AcademicformComponent
    },
    {
      path: 'corporate',
      component: CorporateComponent
    },
    {
      path: 'corporateform',
      component: CorporateformComponent
    },
    {
      path: 'academic',
      component: AcademicComponent
    },
    {
      path: 'academiccollaboarations',
      component: AcademiccollaborationsComponent
    },
    {
      path: 'academicform',
      component: AcademicformComponent
    },
    {
      path: 'event/:id',
      component: EventComponent
    },
    {
      path: 'contactus',
      component: ContactusComponent
    }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
