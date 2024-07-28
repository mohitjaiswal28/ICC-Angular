import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ParenttochildComponent } from './components/parenttochild/parenttochild.component';
import { ChildtoparentComponent } from './components/childtoparent/childtoparent.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'home/p2c', component: ParenttochildComponent},
    {path: 'home/c2p', component: ChildtoparentComponent},
];
