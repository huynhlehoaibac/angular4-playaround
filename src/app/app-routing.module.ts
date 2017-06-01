import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './admin/guard/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        loadChildren: './home-page/home-page.module#HomePageModule'
    },
    {
        path: 'page-one',
        loadChildren: './page-one/page-one.module#PageOneModule'
    },
    {
        path: 'page-two',
        loadChildren: './page-two/page-two.module#PageTwoModule'
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
