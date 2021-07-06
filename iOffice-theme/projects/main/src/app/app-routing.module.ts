import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VBDenComponent } from './VBDen/main-page/vanban.component';
import { TTVBDenComponent } from './VBDen/TTVanBan/TTVanBanDen.component';

const routes: Routes = [
    {path:'',component:VBDenComponent},
    {path:'thong-tin-van-ban-den',component:TTVBDenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
