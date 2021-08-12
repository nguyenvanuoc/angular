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

import { GiuSoKyHieuComponent } from './QuanTriVanBan/GiuSoKyHieu/danhsach/vanban.component';
import { GiuSoKyHieuThemMoiComponent } from './QuanTriVanBan/GiuSoKyHieu/ThemMoi/app.component';

import { SoVBDenAdminComponent } from './QuanTriVanBan/SoVanBanDenAdmin/danhsach/vanban.component';
import { SoVBDenAdminThemMoiComponent } from './QuanTriVanBan/SoVanBanDenAdmin/ThemMoi/app.component';
import { SoVBDenAdminSuaComponent } from './QuanTriVanBan/SoVanBanDenAdmin/sua/app.component';
import { SoVBDenAdminXuatBCComponent } from './QuanTriVanBan/SoVanBanDenAdmin/XuatBC/app.component';
import { SoVBDenAdminNhanBanComponent } from './QuanTriVanBan/SoVanBanDenAdmin/NhanBan/app.component';

/*Myministry*/
import {CongViecComponent} from './CongViec/grid/app.component';
import {CongViecThemMoiComponent} from './CongViec/ThemMoi/app.component';
import {CongViecListComponent} from './CongViec/List/app.component';
import {CongViecChiTietComponent} from './CongViec/ChiTiet/app.component';
import {GanttAppComponent} from './CongViec/gantt/app.component';
import {CongViecCardComponent} from './CongViec/card/app.component';
import {CongViecQuaHanComponent} from './CongViec/QuaHan/app.component';
import {SearchResultComponent} from './CongViec/SearchResult/app.component';
import {CongViecSettingsComponent} from './CongViec/settings/app.component';
import {CongViecThongKeComponent} from './CongViec/thongke/app.component';
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
    {
      path:'giu-so-ky-hieu',
      component:GiuSoKyHieuComponent,
      
    },
    {
      path:'giu-so-ky-hieu-them-moi',
      component:GiuSoKyHieuThemMoiComponent,
      
    },
    {
      path:'so-van-ban-den-admin',
      component:SoVBDenAdminComponent,
      
    },
    {
      path:'so-van-ban-den-admin-them-moi',
      component:SoVBDenAdminThemMoiComponent,
      
    },
    {
      path:'so-van-ban-den-admin-sua',
      component:SoVBDenAdminSuaComponent,
      
    },
    {
      path:'so-van-ban-den-admin-xuatbc',
      component:SoVBDenAdminXuatBCComponent,
      
    },
    {
      path:'so-van-ban-den-admin-nhan-ban',
      component:SoVBDenAdminNhanBanComponent,
      
    },
    {
      path:'cong-viec',
      component:CongViecComponent,
      
    },
    {
      path:'cong-viec-them-moi',
      component:CongViecThemMoiComponent,
      
    },
    {
      path:'cong-viec-list',
      component:CongViecListComponent,
      
    },
    {
      path:'cong-viec-chi-tiet',
      component:CongViecChiTietComponent,
      
    },
    {
      path:'cong-viec-gantt',
      component:GanttAppComponent,
      
    },
    {
      path:'cong-viec-card',
      component:CongViecCardComponent,
      
    },
    {
      path:'cong-viec-qua-han',
      component:CongViecQuaHanComponent,
      
    },
    {
      path:'ket-qua-tim-kiem',
      component:SearchResultComponent,
      
    },
    {
      path:'cai-dat',
      component:CongViecSettingsComponent,
      
    },
    {
      path:'thong-ke',
      component:CongViecThongKeComponent,
      
    },
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
