import {RouterModule, Routes} from '@angular/router';
import { ListClinicsComponent } from './list-clinics/list-clinics.component';
import { ListItemDetailComponent } from './list-item-detail/list-item-detail.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '',
        component: ListClinicsComponent
    },
    {
        path: 'clinics',
        component: ListClinicsComponent
    },
    {
        path: 'clinics/:id',
        component: ListItemDetailComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);