(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-layout-layout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-xs-12\">\r\n    <div class=\"x_panel\">\r\n        <div class=\"x_title\">\r\n            <h3>Change Password</h3>\r\n            <div class=\"clearfix\"></div>\r\n        </div>\r\n        <div class=\"x_content\">\r\n            <form class=\"form-horizontal form-label-left\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"control-label col-sm-offset-2 col-sm-2 col-xs-12\">Current Password*</label>\r\n                                <div class=\"col-sm-4 col-xs-12\">\r\n                                    <input type=\"password\" [(ngModel)]=\"current_password\" name=\"current_password\" required=\"required\" class=\"form-control col-md-7 col-xs-12\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-12\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"control-label col-sm-offset-2 col-sm-2 col-xs-12\">New Password*</label>\r\n                                <div class=\"col-sm-4 col-xs-12\">\r\n                                    <input type=\"password\" [(ngModel)]=\"new_password\" name=\"new_password\" required=\"required\" class=\"form-control col-md-7 col-xs-12\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-12\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"control-label col-sm-offset-2 col-sm-2 col-xs-12\">Confirm Password*</label>\r\n                                <div class=\"col-sm-4 col-xs-12\">\r\n                                    <input type=\"password\" [(ngModel)]=\"confirm_password\" name=\"confirm_password\" required=\"required\" class=\"form-control col-md-7 col-xs-12\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"onCancelChangePassword()\">Cancel</button>\r\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"onChangePassword()\">Change Password</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container body\">\r\n    <div class=\"main_container\">\r\n        <div id =\"menu_fixed\" class=\"col-md-3 left_col menu_fixed\">\r\n            <app-side-menu></app-side-menu>\r\n        </div>\r\n        <div class=\"top_nav\">\r\n            <app-top-navigation></app-top-navigation>\r\n        </div>\r\n        <div class=\"right_col\" role=\"main\">\r\n            <div id=\"app_content\">\r\n                <div id=\"app_content_inner\" class=\"row\">\r\n                    <router-outlet></router-outlet>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <app-footer></app-footer>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/change-password/change-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/change-password/change-password.component.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var shared_module_1 = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var angular_2_local_storage_1 = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/fesm5/angular-2-local-storage.js");
var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(route, appService, authService, router, localStorage) {
        this.route = route;
        this.appService = appService;
        this.authService = authService;
        this.router = router;
        this.localStorage = localStorage;
        this.current_password = '';
        this.new_password = '';
        this.confirm_password = '';
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent.prototype.onCancelChangePassword = function () {
        this.router.navigate(['/dashboard']);
    };
    ChangePasswordComponent.prototype.onChangePassword = function () {
        var _this = this;
        this.appService.changePassword(this.current_password, this.new_password, this.confirm_password).subscribe(function (result) {
            _this.apiResult = result.result;
            _this.apiResultMessage = result.message;
            if (result.result == 'success') {
                setTimeout(function () {
                    _this.router.navigate(['/dashboard']);
                }, 2000);
            }
            _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't change password", 'error'); });
    };
    ChangePasswordComponent.ctorParameters = function () { return [
        { type: router_1.ActivatedRoute },
        { type: shared_module_1.AppService },
        { type: shared_module_1.AuthService },
        { type: router_1.Router },
        { type: angular_2_local_storage_1.LocalStorageService }
    ]; };
    ChangePasswordComponent = __decorate([
        core_1.Component({
            selector: 'app-change-password',
            template: __importDefault(__webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.component.html")).default,
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, shared_module_1.AppService, shared_module_1.AuthService, router_1.Router, angular_2_local_storage_1.LocalStorageService])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());
exports.ChangePasswordComponent = ChangePasswordComponent;


/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngAfterViewInit = function () {
        jQuery(document).ready(function () {
            console.log('jQuery ready');
            var CURRENT_PATH = window.location.protocol + "//" + window.location.host + window.location.pathname;
            var setContentHeight = function () {
                // jQuery('#app_content').css('height', jQuery('#app_content_inner').outerHeight());
                // jQuery('.left_col').css('height', jQuery('.left_col_content').outerHeight());
                // var leftColHeight = jQuery('.left_col').outerHeight();
                // var rightColHeight = jQuery('#app_content').outerHeight() + jQuery('.top_nav').outerHeight() + jQuery('#footer').outerHeight() + 10;
                // if (leftColHeight < rightColHeight) {
                //     jQuery('.left_col').css('height', rightColHeight);
                // } else {
                //     jQuery('#app_content').css('height', leftColHeight - jQuery('.top_nav').outerHeight() - jQuery('#footer').outerHeight() - 10);
                // }
            };
            jQuery('#sidebar-menu').find('a').on('click', function (ev) {
                console.log('clicked - sidebar_menu');
                var jQueryli = jQuery(this).parent();
                jQuery('#sidebar-menu').find('li').removeClass('current-page');
                jQuery('#sidebar-menu').find('.child_menu').find('li').removeClass('active');
                if (jQueryli.is('.active')) {
                    jQueryli.removeClass('active active-sm');
                    jQuery('ul:first', jQueryli).slideUp(function () {
                        setContentHeight();
                    });
                }
                else {
                    // prevent closing menu if we are on child menu
                    if (!jQueryli.parent().is('.child_menu')) {
                        jQuery('#sidebar-menu').find('li').removeClass('active active-sm');
                        jQuery('#sidebar-menu').find('li ul').slideUp();
                    }
                    else {
                        if (jQuery('body').is(".nav-sm")) {
                            jQuery('#sidebar-menu').find("li").removeClass("active active-sm");
                            jQuery('#sidebar-menu').find("li ul").slideUp();
                        }
                    }
                    jQueryli.addClass('active').addClass('current-page');
                    jQuery('ul:first', jQueryli).slideDown(function () {
                        setContentHeight();
                    });
                }
            });
            // toggle small or large menu 
            jQuery('#menu_toggle').on('click', function () {
                console.log('clicked - menu toggle');
                if (jQuery('body').hasClass('nav-md')) {
                    jQuery('#sidebar-menu').find('li.active ul').hide();
                    jQuery('#sidebar-menu').find('li.active').addClass('active-sm').removeClass('active');
                }
                else {
                    jQuery('#sidebar-menu').find('li.active-sm ul').show();
                    jQuery('#sidebar-menu').find('li.active-sm').addClass('active').removeClass('active-sm');
                }
                jQuery('body').toggleClass('nav-md nav-sm');
                setContentHeight();
            });
            // check active menu
            jQuery('#sidebar-menu').find('a[href="' + CURRENT_PATH + '"]').parent('li').addClass('current-page');
            jQuery('#sidebar-menu').find('a').filter(function () {
                return this.href == CURRENT_PATH;
            }).parent('li').addClass('current-page').parents('ul').slideDown(function () {
                setContentHeight();
            }).parent().addClass('active');
            setContentHeight();
            // fixed sidebar
            if (jQuery.fn.mCustomScrollbar) {
                jQuery('.menu_fixed').mCustomScrollbar({
                    autoHideScrollbar: true,
                    theme: 'minimal',
                    mouseWheel: { preventDefault: true, scrollAmount: 150 }
                });
            }
        });
    };
    LayoutComponent.prototype.ngAfterViewChecked = function () {
        jQuery('.right_col').css('min-height', jQuery(window).height());
        var bodyHeight = jQuery('body').outerHeight(), footerHeight = jQuery('body').hasClass('footer_fixed') ? -10 : jQuery('footer').height(), leftColHeight = jQuery('.left_col').eq(1).height() + jQuery('.sidebar-footer').height(), contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;
        // normalize content
        contentHeight -= jQuery('.nav_menu').height() + footerHeight;
        jQuery('.right_col').css('min-height', contentHeight);
    };
    LayoutComponent = __decorate([
        core_1.Component({
            selector: 'app-layout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html")).default,
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());
exports.LayoutComponent = LayoutComponent;


/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var http_1 = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var layout_component_1 = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
var change_password_component_1 = __webpack_require__(/*! ../change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");
var shared_module_1 = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var shared_module_2 = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var ROUTES = [{
        path: '',
        component: layout_component_1.LayoutComponent,
        canActivateChild: [shared_module_2.AuthGuardService],
        children: [
            { path: '', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
            { path: 'courses', loadChildren: 'app/courses/courses.module#CoursesModule' },
            { path: 'students', loadChildren: 'app/students/students.module#StudentsModule' },
            { path: 'teachers', loadChildren: 'app/teachers/teachers.module#TeachersModule' },
            { path: 'schedule', loadChildren: 'app/schedule/schedule.module#ScheduleModule' },
            { path: 'absence-requests', loadChildren: 'app/absence-requests/absence-requests.module#AbsenceRequestsModule' },
            { path: 'feedbacks', loadChildren: 'app/feedback/feedback.module#FeedbackModule' },
            { path: 'settings', loadChildren: 'app/settings/setting.module#SettingModule' },
            { path: 'check-attendance', loadChildren: 'app/check-attendance/check-attendance.module#CheckAttendanceModule' },
            { path: 'check-attendance/quiz', loadChildren: 'app/check-attendance-quiz/check-attendance-quiz.module#CheckAttendanceQuizModule' },
            { path: 'quiz', loadChildren: 'app/quiz/quiz.module#QuizModule' },
            { path: 'statistic', loadChildren: 'app/statistic/statistic.module#StatisticModule' },
            { path: 'classes', loadChildren: 'app/classes/classes.module#ClassesModule' },
            { path: 'programs', loadChildren: 'app/programs/programs.module#ProgramsModule' },
            { path: 'semesters', loadChildren: 'app/semesters/semesters.module#SemestersModule' },
            { path: 'change-password', component: change_password_component_1.ChangePasswordComponent },
        ]
    },];
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        core_1.NgModule({
            declarations: [
                layout_component_1.LayoutComponent,
                change_password_component_1.ChangePasswordComponent,
            ],
            imports: [
                forms_1.FormsModule,
                http_1.HttpModule,
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(ROUTES),
            ],
            providers: [],
        })
    ], LayoutModule);
    return LayoutModule;
}());
exports.LayoutModule = LayoutModule;


/***/ })

}]);
//# sourceMappingURL=app-layout-layout-module.js.map