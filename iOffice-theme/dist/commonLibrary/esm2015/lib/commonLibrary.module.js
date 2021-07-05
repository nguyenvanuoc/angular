import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { VAffixModule } from '@vnpt/oneui-ui/affix';
import { VButtonModule } from '@vnpt/oneui-ui/button';
import { VIconModule } from '@vnpt/oneui-ui/icon';
import { VLayoutModule } from '@vnpt/oneui-ui/layout';
import { BlankPageComponent } from './blank.page.component/blank.page.component';
import { AuthService } from './auth.service';
import { InterceptedHttp } from './http.interceptor';
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
import { OneuiCoreModule } from '@vnpt/oneui-core';
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
            ngModule: CommonLibraryModule,
            providers: [AuthService],
        };
    }
}
CommonLibraryModule.ɵmod = i0.ɵɵdefineNgModule({ type: CommonLibraryModule });
CommonLibraryModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CommonLibraryModule_Factory(t) { return new (t || CommonLibraryModule)(); }, providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptedHttp,
            multi: true,
        },
    ], imports: [[
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
            OneuiCoreModule,
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
        OneuiCoreModule,
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
                    OneuiCoreModule,
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
                providers: [
                    {
                        provide: HTTP_INTERCEPTORS,
                        useClass: InterceptedHttp,
                        multi: true,
                    },
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uTGlicmFyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25MaWJyYXJ5L3NyYy9saWIvY29tbW9uTGlicmFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDdkYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDdEcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUM3RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQXdEckUsTUFBTSxPQUFPLG1CQUFtQjtJQUN2QixNQUFNLENBQUMsT0FBTztRQUNuQixPQUFPO1lBQ0wsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7U0FDekIsQ0FBQztJQUNKLENBQUM7O3VEQU5VLG1CQUFtQjtxSEFBbkIsbUJBQW1CLG1CQVJuQjtRQUNUO1lBQ0UsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixRQUFRLEVBQUUsZUFBZTtZQUN6QixLQUFLLEVBQUUsSUFBSTtTQUNaO0tBQ0YsWUFyQ1E7WUFDUCxZQUFZO1lBQ1osV0FBVztZQUNYLFlBQVk7WUFDWixhQUFhO1lBQ2IsV0FBVztZQUNYLGNBQWM7WUFDZCxpQkFBaUI7WUFDakIsV0FBVztZQUNYLFdBQVc7WUFDWCxZQUFZO1lBQ1osZUFBZTtZQUNmLGNBQWM7WUFDZCxXQUFXO1lBQ1gsYUFBYTtZQUNiLGVBQWU7U0FDaEI7d0ZBdUJVLG1CQUFtQixtQkFwRDVCLGtCQUFrQjtRQUNsQiwyQkFBMkI7UUFDM0IsbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIsa0JBQWtCLGFBR2xCLFlBQVk7UUFDWixXQUFXO1FBQ1gsWUFBWTtRQUNaLGFBQWE7UUFDYixXQUFXO1FBQ1gsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsV0FBVztRQUNYLFlBQVk7UUFDWixlQUFlO1FBQ2YsY0FBYztRQUNkLFdBQVc7UUFDWCxhQUFhO1FBQ2IsZUFBZSxhQUdmLGtCQUFrQjtRQUNsQiwyQkFBMkI7UUFDM0IsbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIsa0JBQWtCO2tEQVVULG1CQUFtQjtjQXREL0IsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixrQkFBa0I7b0JBQ2xCLDJCQUEyQjtvQkFDM0IsbUJBQW1CO29CQUNuQixvQkFBb0I7b0JBQ3BCLHNCQUFzQjtvQkFDdEIsa0JBQWtCO29CQUNsQixnQkFBZ0I7b0JBQ2hCLFlBQVk7b0JBQ1osa0JBQWtCO29CQUNsQixnQkFBZ0I7b0JBQ2hCLG9CQUFvQjtvQkFDcEIsa0JBQWtCO2lCQUNuQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixXQUFXO29CQUNYLGNBQWM7b0JBQ2QsaUJBQWlCO29CQUNqQixXQUFXO29CQUNYLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixlQUFlO29CQUNmLGNBQWM7b0JBQ2QsV0FBVztvQkFDWCxhQUFhO29CQUNiLGVBQWU7aUJBQ2hCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxrQkFBa0I7b0JBQ2xCLDJCQUEyQjtvQkFDM0IsbUJBQW1CO29CQUNuQixvQkFBb0I7b0JBQ3BCLHNCQUFzQjtvQkFDdEIsa0JBQWtCO29CQUNsQixnQkFBZ0I7b0JBQ2hCLFlBQVk7b0JBQ1osa0JBQWtCO29CQUNsQixnQkFBZ0I7b0JBQ2hCLG9CQUFvQjtvQkFDcEIsa0JBQWtCO2lCQUNuQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVkFmZml4TW9kdWxlIH0gZnJvbSAnQHZucHQvb25ldWktdWkvYWZmaXgnO1xyXG5pbXBvcnQgeyBWQnV0dG9uTW9kdWxlIH0gZnJvbSAnQHZucHQvb25ldWktdWkvYnV0dG9uJztcclxuaW1wb3J0IHsgVkljb25Nb2R1bGUgfSBmcm9tICdAdm5wdC9vbmV1aS11aS9pY29uJztcclxuaW1wb3J0IHsgVkxheW91dE1vZHVsZSB9IGZyb20gJ0B2bnB0L29uZXVpLXVpL2xheW91dCc7XHJcbmltcG9ydCB7IEJsYW5rUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vYmxhbmsucGFnZS5jb21wb25lbnQvYmxhbmsucGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSW50ZXJjZXB0ZWRIdHRwIH0gZnJvbSAnLi9odHRwLmludGVyY2VwdG9yJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBDb250ZXh1YWxBY3Rpb25CYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbnRleC5hY3Rpb24uYmFyL2FjdGlvbi5iYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWN0aW9uSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29udGV4LmFjdGlvbi5iYXIvYWN0aW9uLml0ZW0uY29tcG9uZW50L2FjdGlvbi5pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZHcmlkTW9kdWxlIH0gZnJvbSAnQHZucHQvb25ldWktdWkvZ3JpZCc7XHJcbmltcG9ydCB7IFZUb29sVGlwTW9kdWxlIH0gZnJvbSAnQHZucHQvb25ldWktdWkvdG9vbHRpcCc7XHJcbmltcG9ydCB7IE1haW5Db250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9tYWluLmNvbnRlbnQuY29tcG9uZW50L21haW4uY29udGVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWVHlwb2dyYXBoeU1vZHVsZSB9IGZyb20gJ0B2bnB0L29uZXVpLXVpL3R5cG9ncmFwaHknO1xyXG5pbXBvcnQgeyBEcmF3ZXJDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9kcmF3ZXIuY29udGVudC5jb21wb25lbnQvZHJhd2VyLmNvbnRlbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVkNhcmRNb2R1bGUgfSBmcm9tICdAdm5wdC9vbmV1aS11aS9jYXJkJztcclxuaW1wb3J0IHsgQWN0aXZlVXJsQ2hlY2tQaXBlIH0gZnJvbSAnLi9tZW51LnBpcGVzJztcclxuaW1wb3J0IHsgVk1lbnVNb2R1bGUgfSBmcm9tICdAdm5wdC9vbmV1aS11aS9tZW51JztcclxuaW1wb3J0IHsgU3ViTWVudUNvbXBvbmVudCB9IGZyb20gJy4vbWVudS5jb21wb25lbnQvbWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBc3NldFVybFBpcGUgfSBmcm9tICcuL2Fzc2VydC5waXBlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgT25ldWlDb3JlTW9kdWxlIH0gZnJvbSAnQHZucHQvb25ldWktY29yZSc7XHJcbmltcG9ydCB7IENoYW5nZURhdGVUaW1lUGlwZSB9IGZyb20gJy4vY2hhbmdlZGF0ZXRpbWUucGlwZSc7XHJcbmltcG9ydCB7IFZEaXZpZGVyTW9kdWxlIH0gZnJvbSAnQHZucHQvb25ldWktdWkvZGl2aWRlcic7XHJcbmltcG9ydCB7IFZMaXN0TW9kdWxlIH0gZnJvbSAnQHZucHQvb25ldWktdWkvbGlzdCc7XHJcbmltcG9ydCB7IFRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIuY29tcG9uZW50L3Rvb2xiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVG9vbGJhckl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIuY29tcG9uZW50L3Rvb2xiYXIuaXRlbS5jb21wb25lbnQvdG9vbGJhci5pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZEcm9wRG93bk1vZHVsZSB9IGZyb20gJ0B2bnB0L29uZXVpLXVpL2Ryb3Bkb3duJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQm90dG9tYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9ib3R0b21iYXIvYm90dG9tYmFyLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQmxhbmtQYWdlQ29tcG9uZW50LFxyXG4gICAgQ29udGV4dWFsQWN0aW9uQmFyQ29tcG9uZW50LFxyXG4gICAgQWN0aW9uSXRlbUNvbXBvbmVudCxcclxuICAgIE1haW5Db250ZW50Q29tcG9uZW50LFxyXG4gICAgRHJhd2VyQ29udGVudENvbXBvbmVudCxcclxuICAgIEFjdGl2ZVVybENoZWNrUGlwZSxcclxuICAgIFN1Yk1lbnVDb21wb25lbnQsXHJcbiAgICBBc3NldFVybFBpcGUsXHJcbiAgICBDaGFuZ2VEYXRlVGltZVBpcGUsXHJcbiAgICBUb29sYmFyQ29tcG9uZW50LFxyXG4gICAgVG9vbGJhckl0ZW1Db21wb25lbnQsXHJcbiAgICBCb3R0b21iYXJDb21wb25lbnQsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBWR3JpZE1vZHVsZSxcclxuICAgIFZBZmZpeE1vZHVsZSxcclxuICAgIFZCdXR0b25Nb2R1bGUsXHJcbiAgICBWSWNvbk1vZHVsZSxcclxuICAgIFZUb29sVGlwTW9kdWxlLFxyXG4gICAgVlR5cG9ncmFwaHlNb2R1bGUsXHJcbiAgICBWQ2FyZE1vZHVsZSxcclxuICAgIFZNZW51TW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgT25ldWlDb3JlTW9kdWxlLFxyXG4gICAgVkRpdmlkZXJNb2R1bGUsXHJcbiAgICBWTGlzdE1vZHVsZSxcclxuICAgIFZMYXlvdXRNb2R1bGUsXHJcbiAgICBWRHJvcERvd25Nb2R1bGUsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBCbGFua1BhZ2VDb21wb25lbnQsXHJcbiAgICBDb250ZXh1YWxBY3Rpb25CYXJDb21wb25lbnQsXHJcbiAgICBBY3Rpb25JdGVtQ29tcG9uZW50LFxyXG4gICAgTWFpbkNvbnRlbnRDb21wb25lbnQsXHJcbiAgICBEcmF3ZXJDb250ZW50Q29tcG9uZW50LFxyXG4gICAgQWN0aXZlVXJsQ2hlY2tQaXBlLFxyXG4gICAgU3ViTWVudUNvbXBvbmVudCxcclxuICAgIEFzc2V0VXJsUGlwZSxcclxuICAgIENoYW5nZURhdGVUaW1lUGlwZSxcclxuICAgIFRvb2xiYXJDb21wb25lbnQsXHJcbiAgICBUb29sYmFySXRlbUNvbXBvbmVudCxcclxuICAgIEJvdHRvbWJhckNvbXBvbmVudCxcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuICAgICAgdXNlQ2xhc3M6IEludGVyY2VwdGVkSHR0cCxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21tb25MaWJyYXJ5TW9kdWxlIHtcclxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDb21tb25MaWJyYXJ5TW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQ29tbW9uTGlicmFyeU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2VdLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19