import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AccountComponent } from './pages/account/account.component';
import { ChekoutComponent } from './pages/chekout/chekout.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LiginComponent } from './pages/ligin/ligin.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProductsComponent } from './pages/products/products.component';
import { ChekoutGuard } from './parent/shared/directives/pipes/chekout.guard';
import { AuthGuard } from './parent/shared/directives/pipes/guards/auth.guard';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {
    path:'',redirectTo:'layout/home',pathMatch:'full'
  },
  {
    path:'success',component:SuccessComponent, canActivate:[ChekoutGuard]
  }
  ,

  {
    path:'login',component:LiginComponent
  },

{
  path:'layout',
  component:LayoutComponent,
  canActivate:[AuthGuard]
  ,children:[
    {
      path:'checkout',component:ChekoutComponent
    },
    {
    path:'home',component:HomeComponent
  },

  {
    path:'about',component:AboutComponent
  },
  {
    path:'account',component:AccountComponent
  },
  {
    path:'products',component:ProductsComponent
  },
  ]

},
{
  path:'**',component:NotfoundComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
