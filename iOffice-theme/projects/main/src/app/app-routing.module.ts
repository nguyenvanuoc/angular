import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeVBDenComponent } from './VBDen/home/home.component';
import { VBDenComponent } from './VBDen/danhsach/vanban.component';
import { TTVBDenComponent } from './VBDen/TTVanBan/TTVanBanDen.component';
import { QuetTaiLieuComponent } from './VBDen/QuetTaiLieu/app.component';
import { ChonVBLienQuanComponent } from './VBDen/ChonVBLienQuan/vanban.component';
import { LichSuFileComponent } from './VBDen/LichSuFile/app.component';
import { MauYKienComponent } from './VBDen/MauYKien/vanban.component';


import { HomeComponent } from './home/home.component';


import { HomeVBDiComponent } from './VBDi/home/home.component';
import { VBDiComponent } from './VBDi/danhsach/vanban.component';
import { VBDiTimKiemComponent } from './VBDi/TimKiemNangCao/timkiem.component';


import { CauHinhVanBanComponent } from './QuanTriVanBan/CauHinhPhuTrachLinhVuc/danhsach/vanban.component';
import { CauHinhLinhVucThemMoiComponent } from './QuanTriVanBan/CauHinhPhuTrachLinhVuc/ThemMoi/app.component';
import { CauHinhLinhVucSuaComponent } from './QuanTriVanBan/CauHinhPhuTrachLinhVuc/Sua/app.component';
const routes: Routes = [

    {
      path:'',component:HomeComponent,
    },
    {
      path:'qlvbden',component:HomeVBDenComponent,
      children: [
        {
          path: '',
          component: VBDenComponent,
        },
        {
          path: 'thong-tin-van-ban-den',
          component: TTVBDenComponent,
        },
        {
          path: 'quet-tai-lieu',
          component: QuetTaiLieuComponent,
        },
        {
          path: 'chon-vb-lien-quan',
          component: ChonVBLienQuanComponent,
        },
        {
          path: 'mau-y-kien',
          component: MauYKienComponent,
        },
        {
          path: 'lich-su-file',
          component: LichSuFileComponent,
        }
      ]
    },

    {
      path:'qlvbdi',component:HomeVBDiComponent,
      children: [
        {
          path: '',
          component: VBDiComponent,
        },
        {
          path: 'tim-kiem-nang-cao',
          component: VBDiTimKiemComponent,
        }
      ]
    },

    {
      path:'cau-hinh-phu-trach-linh-vuc',
      component:CauHinhVanBanComponent,
      
    },
    {
      path:'cau-hinh-phu-trach-linh-vuc-them-moi',
      component:CauHinhLinhVucThemMoiComponent,
      
    },
    {
      path:'cau-hinh-phu-trach-linh-vuc-sua',
      component:CauHinhLinhVucSuaComponent,
      
    },
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
