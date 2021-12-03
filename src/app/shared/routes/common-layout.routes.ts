import {Routes} from '@angular/router';
import {AuthGuard} from "../guard/auth.guard";

export const CommonLayout_ROUTES: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../../pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    loadChildren: () => import('../../pages/user/user.module').then(m => m.UserModule),
    canActivate: [AuthGuard]
  }

];
