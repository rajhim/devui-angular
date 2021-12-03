import {Routes} from '@angular/router';

export const AuthLayout_ROUTES: Routes = [

  {
    path: '',
    loadChildren: () => import('../../auth/auth.module').then(m => m.AuthModule),
  }

];
