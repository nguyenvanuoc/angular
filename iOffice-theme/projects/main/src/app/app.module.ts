import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { HeaderComponent } from './navigation/header/header.component';
import { BreadcrumbComponent } from './navigation/breadcrumb/breadcrumb.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';

import { HomeVBDenComponent } from './VBDen/home/home.component';
import { VBDenComponent } from './VBDen/danhsach/vanban.component';
import { TTVBDenComponent } from './VBDen/TTVanBan/TTVanBanDen.component';
import { QuetTaiLieuComponent } from './VBDen/QuetTaiLieu/app.component';
import { ChonVBLienQuanComponent } from './VBDen/ChonVBLienQuan/vanban.component';
import { MauYKienComponent } from './VBDen/MauYKien/vanban.component';
import { LichSuFileComponent } from './VBDen/LichSuFile/app.component';


import { VBDiComponent } from './VBDi/danhsach/vanban.component';
import { VBDiTimKiemComponent } from './VBDi/TimKiemNangCao/timkiem.component';
import { HomeVBDiComponent } from './VBDi/home/home.component';

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

/*Myministry */
import {CongViecComponent} from './CongViec/grid/app.component';
import {CongViecListComponent} from './CongViec/List/app.component';
import {CongViecThemMoiComponent} from './CongViec/ThemMoi/app.component';
import {CongViecChiTietComponent} from './CongViec/ChiTiet/app.component';
import {GanttAppComponent} from './CongViec/gantt/app.component';
import {GanttComponent} from './CongViec/gantt/components/gantt.component';
import {CongViecCardComponent} from './CongViec/card/app.component';
import {CongViecQuaHanComponent} from './CongViec/QuaHan/app.component';
import {SearchResultComponent} from './CongViec/SearchResult/app.component';
import {CongViecSettingsComponent} from './CongViec/settings/app.component';
import {CongViecThongKeComponent} from './CongViec/thongke/app.component';
/* End Myministry*/

import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VButtonModule } from '@vnpt/oneui-ui/button';
import { VTypographyModule } from '@vnpt/oneui-ui/typography';
import { VBreadCrumbModule } from '@vnpt/oneui-ui/breadcrumb';
import { VDropDownModule } from '@vnpt/oneui-ui/dropdown';
import { VMenuModule } from '@vnpt/oneui-ui/menu';
import { VPaginationModule } from '@vnpt/oneui-ui/pagination';
import { VStepsModule } from '@vnpt/oneui-ui/steps';
import { VCascaderModule } from '@vnpt/oneui-ui/cascader';
import { VCheckboxModule } from '@vnpt/oneui-ui/checkbox';
import { VDatePickerModule } from '@vnpt/oneui-ui/date-picker';
import { VFormModule } from '@vnpt/oneui-ui/form';
import { VInputModule } from '@vnpt/oneui-ui/input';
import { VRadioModule } from '@vnpt/oneui-ui/radio';
import { VRateModule } from '@vnpt/oneui-ui/rate';
import { VSelectModule } from '@vnpt/oneui-ui/select';
import { VSliderModule } from '@vnpt/oneui-ui/slider';
import { VSwitchModule } from '@vnpt/oneui-ui/switch';
import { VTimePickerModule } from '@vnpt/oneui-ui/time-picker';
import { VTreeSelectModule } from '@vnpt/oneui-ui/tree-select';
import { VAvatarModule } from '@vnpt/oneui-ui/avatar';
import { VBadgeModule } from '@vnpt/oneui-ui/badge';
import { VCalendarModule } from '@vnpt/oneui-ui/calendar';
import { VCardModule } from '@vnpt/oneui-ui/card';
import { VCollapseModule } from '@vnpt/oneui-ui/collapse';
import { VListModule } from '@vnpt/oneui-ui/list';
import { VPopoverModule } from '@vnpt/oneui-ui/popover';
import { VTableModule } from '@vnpt/oneui-ui/table';
import { VTabsModule } from '@vnpt/oneui-ui/tabs';
import { VTagModule } from '@vnpt/oneui-ui/tag';
import { VToolTipModule } from '@vnpt/oneui-ui/tooltip';
import { VTreeModule } from '@vnpt/oneui-ui/tree';
import { VTreeViewModule } from '@vnpt/oneui-ui/tree-view';
import { VAlertModule } from '@vnpt/oneui-ui/alert';
import { VDrawerModule } from '@vnpt/oneui-ui/drawer';
import { VMessageModule } from '@vnpt/oneui-ui/message';
import { VModalModule } from '@vnpt/oneui-ui/modal';
import { VNotificationModule } from '@vnpt/oneui-ui/notification';
import { VPopconfirmModule } from '@vnpt/oneui-ui/popconfirm';
import { VProgressModule } from '@vnpt/oneui-ui/progress';
import { VIconModule } from '@vnpt/oneui-ui/icon';
import { VLayoutModule } from '@vnpt/oneui-ui/layout';
import { VGridModule } from '@vnpt/oneui-ui/grid';
import { VDividerModule } from '@vnpt/oneui-ui/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VInputNumberModule } from '@vnpt/oneui-ui/input-number';
import { VTransferModule } from '@vnpt/oneui-ui/transfer';
import { VMentionModule } from '@vnpt/oneui-ui/mention';
import { VUploadModule } from '@vnpt/oneui-ui/upload';
import { HttpClientModule } from '@angular/common/http';
import { VSkeletonModule } from '@vnpt/oneui-ui/skeleton';
import { VBackTopModule } from '@vnpt/oneui-ui/back-top';
import { VAffixModule } from '@vnpt/oneui-ui/affix';
import { VTimelineModule } from '@vnpt/oneui-ui/timeline';
import { VLogoModule } from '@vnpt/oneui-ui/logo';
import { VImageModule } from '@vnpt/oneui-ui/image';
import { OneuiChartsModule } from '@vnpt/oneui-charts';
import { BlankPageComponent } from './shared-components/blank.page.component/blank.page.component';
import { ContexualActionBarComponent } from './shared-components/contex.action.bar/action.bar.component';
import { ActionItemComponent } from './shared-components/contex.action.bar/action.item.component/action.item.component';
import { MainContentComponent } from './shared-components/main.content.component/main.content.component';
import { DrawerContentComponent } from './shared-components/drawer.content.component/drawer.content.component';
import { ActiveUrlCheckPipe } from './shared-components/menu.pipes';
import { SubMenuComponent } from './shared-components/menu.component/menu.component';
import { AssetUrlPipe } from './shared-components/assert.pipe';
import { ChangeDateTimePipe } from './shared-components/changedatetime.pipe';
import { ToolbarComponent } from './shared-components/toolbar.component/toolbar.component';
import { ToolbarItemComponent } from './shared-components/toolbar.component/toolbar.item.component/toolbar.item.component';
import { BottombarComponent } from './shared-components/bottombar/bottombar.component';
import { QuickMenuComponent } from './shared-components/quick-menu/quick-menu.component';

import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService}  from './CongViec/gantt/services/in-memory-data.service'

registerLocaleData(localeVi);

@NgModule({
  declarations: [
    BlankPageComponent,
    ContexualActionBarComponent,
    ActionItemComponent,
    MainContentComponent,
    DrawerContentComponent,
    ActiveUrlCheckPipe,
    SubMenuComponent,
    AssetUrlPipe,
    ChangeDateTimePipe,
    ToolbarComponent,
    ToolbarItemComponent,
    BottombarComponent,
    AppComponent,
    HeaderComponent,
    BreadcrumbComponent,
    SidebarComponent,
    VBDenComponent,
    TTVBDenComponent,
    HomeComponent,
    QuickMenuComponent,
    VBDiComponent,
    VBDiTimKiemComponent,
    HomeVBDenComponent,
    HomeVBDiComponent,
    QuetTaiLieuComponent,
    ChonVBLienQuanComponent,
    MauYKienComponent,
    LichSuFileComponent,
    CauHinhVanBanComponent,
    CauHinhLinhVucThemMoiComponent,
    CauHinhLinhVucSuaComponent ,
    GiuSoKyHieuComponent,
    GiuSoKyHieuThemMoiComponent,
    SoVBDenAdminComponent,
    SoVBDenAdminThemMoiComponent,
    SoVBDenAdminSuaComponent,
    SoVBDenAdminXuatBCComponent,
    SoVBDenAdminNhanBanComponent,
    CongViecComponent,
    CongViecThemMoiComponent,
    CongViecListComponent,
    CongViecChiTietComponent,
    GanttAppComponent,
    GanttComponent,
    CongViecCardComponent,
    CongViecQuaHanComponent,
    SearchResultComponent,
    CongViecSettingsComponent,
    CongViecThongKeComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    VLayoutModule,
    VGridModule,
    VButtonModule,
    VIconModule,
    VTypographyModule,
    VBreadCrumbModule,
    VDropDownModule,
    VMenuModule,
    VPaginationModule,
    VStepsModule,
    VCascaderModule,
    VCheckboxModule,
    VDatePickerModule,
    VFormModule,
    VInputModule,
    VRadioModule,
    VRateModule,
    VSelectModule,
    VSliderModule,
    VSwitchModule,
    VTimePickerModule,
    VTreeSelectModule,
    VAvatarModule,
    VBadgeModule,
    VCalendarModule,
    VCardModule,
    VCollapseModule,
    VImageModule,
    VListModule,
    VPopoverModule,
    VTableModule,
    VTabsModule,
    VTagModule,
    VToolTipModule,
    VTreeModule,
    VAlertModule,
    VDrawerModule,
    VMessageModule,
    VModalModule,
    VNotificationModule,
    VPopconfirmModule,
    VProgressModule,
    VDividerModule,
    FormsModule,
    VInputNumberModule,
    VTransferModule,
    VMentionModule,
    VUploadModule,
    HttpClientModule,
    ReactiveFormsModule,
    VSkeletonModule,
    VBackTopModule,
    VAffixModule,
    VTimelineModule,
    VTreeViewModule,
    VLogoModule,
    OneuiChartsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
