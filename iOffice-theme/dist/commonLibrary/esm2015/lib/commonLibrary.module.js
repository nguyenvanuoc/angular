import { NgModule } from '@angular/core';
import { VAffixModule } from '@vnpt/oneui-ui/affix';
import { VButtonModule } from '@vnpt/oneui-ui/button';
import { VIconModule } from '@vnpt/oneui-ui/icon';
import { VLayoutModule } from '@vnpt/oneui-ui/layout';
import { BlankPageComponent } from './blank.page.component/blank.page.component';
import { ContexualActionBarComponent } from './contex.action.bar/action.bar.component';
import { ActionItemComponent } from './contex.action.bar/action.item.component/action.item.component';
import { VGridModule } from '@vnpt/oneui-ui/grid';
import { VToolTipModule } from '@vnpt/oneui-ui/tooltip';
import { MainContentComponent } from './main.content.component/main.content.component';
import { VTypographyModule } from '@vnpt/oneui-ui/typography';
import { DrawerContentComponent } from './drawer.content.component/drawer.content.component';
import { VCardModule } from '@vnpt/oneui-ui/card';
import { ActiveUrlCheckPipe } from './menu.pipes';
import { VMenuModule } from '@vnpt/oneui-ui/menu';
import { SubMenuComponent } from './menu.component/menu.component';
import { AssetUrlPipe } from './assert.pipe';
import { RouterModule } from '@angular/router';
import { ChangeDateTimePipe } from './changedatetime.pipe';
import { VDividerModule } from '@vnpt/oneui-ui/divider';
import { VListModule } from '@vnpt/oneui-ui/list';
import { ToolbarComponent } from './toolbar.component/toolbar.component';
import { ToolbarItemComponent } from './toolbar.component/toolbar.item.component/toolbar.item.component';
import { VDropDownModule } from '@vnpt/oneui-ui/dropdown';
import { CommonModule } from '@angular/common';
import { BottombarComponent } from './bottombar/bottombar.component';
import * as i0 from "@angular/core";
export class CommonLibraryModule {
    static forRoot() {
        return {
            ngModule: CommonLibraryModule
        };
    }
}
CommonLibraryModule.ɵmod = i0.ɵɵdefineNgModule({ type: CommonLibraryModule });
CommonLibraryModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CommonLibraryModule_Factory(t) { return new (t || CommonLibraryModule)(); }, providers: [], imports: [[
            CommonModule,
            VGridModule,
            VAffixModule,
            VButtonModule,
            VIconModule,
            VToolTipModule,
            VTypographyModule,
            VCardModule,
            VMenuModule,
            RouterModule,
            VDividerModule,
            VListModule,
            VLayoutModule,
            VDropDownModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CommonLibraryModule, { declarations: [BlankPageComponent,
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
        BottombarComponent], imports: [CommonModule,
        VGridModule,
        VAffixModule,
        VButtonModule,
        VIconModule,
        VToolTipModule,
        VTypographyModule,
        VCardModule,
        VMenuModule,
        RouterModule,
        VDividerModule,
        VListModule,
        VLayoutModule,
        VDropDownModule], exports: [BlankPageComponent,
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
        BottombarComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CommonLibraryModule, [{
        type: NgModule,
        args: [{
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
                ],
                imports: [
                    CommonModule,
                    VGridModule,
                    VAffixModule,
                    VButtonModule,
                    VIconModule,
                    VToolTipModule,
                    VTypographyModule,
                    VCardModule,
                    VMenuModule,
                    RouterModule,
                    VDividerModule,
                    VListModule,
                    VLayoutModule,
                    VDropDownModule,
                ],
                exports: [
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
                ],
                providers: [],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uTGlicmFyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25MaWJyYXJ5L3NyYy9saWIvY29tbW9uTGlicmFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRWpGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdkYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDN0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNB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RUFBRSxFQUNWO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVkFmZml4TW9kdWxlIH0gZnJvbSAnQHZucHQvb25ldWktdWkvYWZmaXgnO1xyXG5pbXBvcnQgeyBWQnV0dG9uTW9kdWxlIH0gZnJvbSAnQHZucHQvb25ldWktdWkvYnV0dG9uJztcclxuaW1wb3J0IHsgVkljb25Nb2R1bGUgfSBmcm9tICdAdm5wdC9vbmV1aS11aS9pY29uJztcclxuaW1wb3J0IHsgVkxheW91dE1vZHVsZSB9IGZyb20gJ0B2bnB0L29uZXVpLXVpL2xheW91dCc7XHJcbmltcG9ydCB7IEJsYW5rUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vYmxhbmsucGFnZS5jb21wb25lbnQvYmxhbmsucGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IENvbnRleHVhbEFjdGlvbkJhckNvbXBvbmVudCB9IGZyb20gJy4vY29udGV4LmFjdGlvbi5iYXIvYWN0aW9uLmJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY3Rpb25JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb250ZXguYWN0aW9uLmJhci9hY3Rpb24uaXRlbS5jb21wb25lbnQvYWN0aW9uLml0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVkdyaWRNb2R1bGUgfSBmcm9tICdAdm5wdC9vbmV1aS11aS9ncmlkJztcclxuaW1wb3J0IHsgVlRvb2xUaXBNb2R1bGUgfSBmcm9tICdAdm5wdC9vbmV1aS11aS90b29sdGlwJztcclxuaW1wb3J0IHsgTWFpbkNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL21haW4uY29udGVudC5jb21wb25lbnQvbWFpbi5jb250ZW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZUeXBvZ3JhcGh5TW9kdWxlIH0gZnJvbSAnQHZucHQvb25ldWktdWkvdHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IERyYXdlckNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2RyYXdlci5jb250ZW50LmNvbXBvbmVudC9kcmF3ZXIuY29udGVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWQ2FyZE1vZHVsZSB9IGZyb20gJ0B2bnB0L29uZXVpLXVpL2NhcmQnO1xyXG5pbXBvcnQgeyBBY3RpdmVVcmxDaGVja1BpcGUgfSBmcm9tICcuL21lbnUucGlwZXMnO1xyXG5pbXBvcnQgeyBWTWVudU1vZHVsZSB9IGZyb20gJ0B2bnB0L29uZXVpLXVpL21lbnUnO1xyXG5pbXBvcnQgeyBTdWJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9tZW51LmNvbXBvbmVudC9tZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFzc2V0VXJsUGlwZSB9IGZyb20gJy4vYXNzZXJ0LnBpcGUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDaGFuZ2VEYXRlVGltZVBpcGUgfSBmcm9tICcuL2NoYW5nZWRhdGV0aW1lLnBpcGUnO1xyXG5pbXBvcnQgeyBWRGl2aWRlck1vZHVsZSB9IGZyb20gJ0B2bnB0L29uZXVpLXVpL2RpdmlkZXInO1xyXG5pbXBvcnQgeyBWTGlzdE1vZHVsZSB9IGZyb20gJ0B2bnB0L29uZXVpLXVpL2xpc3QnO1xyXG5pbXBvcnQgeyBUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyLmNvbXBvbmVudC90b29sYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvb2xiYXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyLmNvbXBvbmVudC90b29sYmFyLml0ZW0uY29tcG9uZW50L3Rvb2xiYXIuaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWRHJvcERvd25Nb2R1bGUgfSBmcm9tICdAdm5wdC9vbmV1aS11aS9kcm9wZG93bic7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEJvdHRvbWJhckNvbXBvbmVudCB9IGZyb20gJy4vYm90dG9tYmFyL2JvdHRvbWJhci5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEJsYW5rUGFnZUNvbXBvbmVudCxcclxuICAgIENvbnRleHVhbEFjdGlvbkJhckNvbXBvbmVudCxcclxuICAgIEFjdGlvbkl0ZW1Db21wb25lbnQsXHJcbiAgICBNYWluQ29udGVudENvbXBvbmVudCxcclxuICAgIERyYXdlckNvbnRlbnRDb21wb25lbnQsXHJcbiAgICBBY3RpdmVVcmxDaGVja1BpcGUsXHJcbiAgICBTdWJNZW51Q29tcG9uZW50LFxyXG4gICAgQXNzZXRVcmxQaXBlLFxyXG4gICAgQ2hhbmdlRGF0ZVRpbWVQaXBlLFxyXG4gICAgVG9vbGJhckNvbXBvbmVudCxcclxuICAgIFRvb2xiYXJJdGVtQ29tcG9uZW50LFxyXG4gICAgQm90dG9tYmFyQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgVkdyaWRNb2R1bGUsXHJcbiAgICBWQWZmaXhNb2R1bGUsXHJcbiAgICBWQnV0dG9uTW9kdWxlLFxyXG4gICAgVkljb25Nb2R1bGUsXHJcbiAgICBWVG9vbFRpcE1vZHVsZSxcclxuICAgIFZUeXBvZ3JhcGh5TW9kdWxlLFxyXG4gICAgVkNhcmRNb2R1bGUsXHJcbiAgICBWTWVudU1vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuICAgIFZEaXZpZGVyTW9kdWxlLFxyXG4gICAgVkxpc3RNb2R1bGUsXHJcbiAgICBWTGF5b3V0TW9kdWxlLFxyXG4gICAgVkRyb3BEb3duTW9kdWxlLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQmxhbmtQYWdlQ29tcG9uZW50LFxyXG4gICAgQ29udGV4dWFsQWN0aW9uQmFyQ29tcG9uZW50LFxyXG4gICAgQWN0aW9uSXRlbUNvbXBvbmVudCxcclxuICAgIE1haW5Db250ZW50Q29tcG9uZW50LFxyXG4gICAgRHJhd2VyQ29udGVudENvbXBvbmVudCxcclxuICAgIEFjdGl2ZVVybENoZWNrUGlwZSxcclxuICAgIFN1Yk1lbnVDb21wb25lbnQsXHJcbiAgICBBc3NldFVybFBpcGUsXHJcbiAgICBDaGFuZ2VEYXRlVGltZVBpcGUsXHJcbiAgICBUb29sYmFyQ29tcG9uZW50LFxyXG4gICAgVG9vbGJhckl0ZW1Db21wb25lbnQsXHJcbiAgICBCb3R0b21iYXJDb21wb25lbnQsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tbW9uTGlicmFyeU1vZHVsZSB7XHJcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q29tbW9uTGlicmFyeU1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IENvbW1vbkxpYnJhcnlNb2R1bGVcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==