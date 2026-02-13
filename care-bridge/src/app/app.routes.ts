import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { SupportDetailComponent } from './components/pages/support-detail/support-detail.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'support-types', redirectTo: '', pathMatch: 'full' }, /* For now redirect to home or create a list page if needed, but Home has the list */
    { path: 'support/:id', component: SupportDetailComponent },
    { path: '**', redirectTo: '' }
];
