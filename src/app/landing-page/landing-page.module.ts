import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LandingPageRoutingModule } from './landing-page-routing.module';

//HEADER & FOOTER
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

//COURSES
import { SinglePageComponent } from './Courses/single-page/single-page.component';
import { MainPageComponent } from './Courses/main-page/main-page.component';

//OFFERINGS
import { AcademicComponent } from './Offerings/academic/academic.component';
import { CorporateComponent } from './Offerings/corporate/corporate.component';
import { PartnershipComponent } from './Offerings/partnership/partnership.component';

//HOME
import { HomeMainComponent } from './Home/home-main/home-main.component';
import { BannerHomeComponent } from './Home/banner-home/banner-home.component';
import { VideoComponent } from './Home/video/video.component';
import { CardsComponent } from './Home/cards/cards.component';
import { ContactusComponent } from './Home/contactus/contactus.component';
import { TestimonialsComponent } from './Home/testimonials/testimonials.component';


//ABOUT
import { AboutMainComponent } from './About/about-main/about-main.component';
import { BannerComponent } from './About/banner/banner.component';
import { AbtComponent } from './About/abt/abt.component';
import { FeatureComponent } from './About/feature/feature.component';
import { LeadersComponent } from './About/leaders/leaders.component';
import { TeamComponent } from './About/team/team.component';
import { PatronsComponent } from './About/patrons/patrons.component';
import { IndustrialPartnersComponent } from './About/industrial-partners/industrial-partners.component';
import { MarketingPartnersComponent } from './About/marketing-partners/marketing-partners.component';
import { KnowledgePartnersComponent } from './About/knowledge-partners/knowledge-partners.component';
import { VendorsComponent } from './vendors/vendors.component';

import { PartenshipformComponent } from './Offerings/partnership/partenshipform/partenshipform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CorporateformComponent } from './Offerings/corporate/corporateform/corporateform.component';
import { AcademiccollaborationsComponent } from './Offerings/academic/academiccollaborations/academiccollaborations.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { BannerpartnershipComponent } from './Offerings/bannerpartnership/bannerpartnership.component';
import { PartnershipcontentComponent } from './Offerings/partnershipcontent/partnershipcontent.component';
import { BanneracademicComponent } from './Offerings/academic/banneracademic/banneracademic.component';
import { BannercorporateComponent } from './Offerings/corporate/bannercorporate/bannercorporate.component';
import { AcademicformComponent } from './Offerings/academic/academicform/academicform.component';
import { EventComponent } from './events/event/event.component';
import { EventTestimonialsComponent } from './events/event-testimonials/event-testimonials.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SinglePageComponent,
    MainPageComponent,

    //HOME
    HomeMainComponent,
    BannerHomeComponent,
    VideoComponent,
    CardsComponent,
    TestimonialsComponent,
    ContactusComponent,

    //ABOUT
    AboutMainComponent,
    BannerComponent,
    AbtComponent,
    FeatureComponent,
    LeadersComponent,
    TeamComponent,
    PatronsComponent,
    IndustrialPartnersComponent,
    MarketingPartnersComponent,
    KnowledgePartnersComponent,
    VendorsComponent,

    //OFFERINGS

    AcademicComponent,
    CorporateComponent,
    PartnershipComponent,
    PartenshipformComponent,
    CorporateformComponent,
    AcademiccollaborationsComponent,
    BannerpartnershipComponent,
    PartnershipcontentComponent,
    BanneracademicComponent,
    BannercorporateComponent,
    AcademicformComponent,

    //EVENT
    EventComponent,
    EventTestimonialsComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    FormsModule,
    NgSelectModule,
    CarouselModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class LandingPageModule { }
