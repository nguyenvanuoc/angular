import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VBDenComponent } from './VBDen/danhsach/vanban.component';
import { MainPageQLVBDComponent } from './VBDen/mainpage/mainpage.component';
import { TTVBDenComponent } from './VBDen/TTVanBan/TTVanBanDen.component';
import { VBDenActionsComponent } from './VBDen/actions/vbden-actions.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

    {
      path:'',component:HomeComponent,
    },
    {
      path:'qlvbden',component:MainPageQLVBDComponent,
      children: [
        {
          path: '',
          component: VBDenActionsComponent,
        },
        {
          path: 'danh-sach',
          component: VBDenComponent,
        },
        {
          path: 'thong-tin-van-ban-den',
          component: TTVBDenComponent,
        }
      ]
    }
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
