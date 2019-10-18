(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-settings-setting-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/setting.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/setting.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n    <div class=\"x_panel\">\r\n        <div class=\"x_title\">\r\n            <h4>Email</h4>\r\n            <div class=\"clearfix\"></div>\r\n        </div>\r\n        <div class=\"x_content\">\r\n            <div class=\"form-group form-horizontal\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" for=\"first-name\">Host <span class=\"required\">*</span></label>\r\n                    <div class=\"col-md-9 col-sm-9 col-xs-12\">\r\n                        <select class=\"form-control\" name=\"host\" [(ngModel)]=\"settings['selected_host']\" (ngModelChange)=\"onChangeHost()\">\r\n                            <option *ngFor=\"let email of settings['emails']\" [value]=\"email.host_name\">{{email.host_name}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" for=\"first-name\">Email <span class=\"required\">*</span></label>\r\n                    <div class=\"col-md-9 col-sm-9 col-xs-12\">\r\n                        <input type=\"text\" name=\"email\" [(ngModel)]=\"settings['emails'][selected_email_index]['config']['auth']['user']\" class=\"form-control col-md-7 col-xs-12\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" for=\"first-name\">Password <span class=\"required\">*</span></label>\r\n                    <div class=\"col-md-9 col-sm-9 col-xs-12\">\r\n                        <input type=\"password\" name=\"password\" [(ngModel)]=\"settings['emails'][selected_email_index]['config']['auth']['pass']\" class=\"form-control col-md-7 col-xs-12\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" for=\"first-name\"> Signature <span class=\"required\">*</span></label>\r\n                    <div class=\"col-md-9 col-sm-9 col-xs-12\">\r\n                        <textarea class=\"form-control col-md-7 col-xs-12\" name=\"signature\" autosize rows=\"2\" style=\"resize: none;\" [(ngModel)]=\"settings['emails'][selected_email_index]['signature']\"></textarea>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n    <div class=\"x_panel\">\r\n        <div class=\"x_title\">\r\n            <h4>General</h4>\r\n            <div class=\"clearfix\"></div>\r\n        </div>\r\n        <div class=\"x_content\">\r\n            <div class=\"form-group form-horizontal\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label col-md-5 col-sm-6 col-xs-12\" for=\"first-name\">Auto close attendance time</label>\r\n                    <div class=\"col-md-3 col-sm-3 col-xs-12\">\r\n                        <input [textMask]=\"{mask: mask,guide:true,placeholderChar:'_'}\" class=\"form-control only_bottom_border\" [(ngModel)]=\"settings['auto_close_attendance_time']\" style=\"font-size: large;\">\r\n                    </div>\r\n                </div>\r\n                <br>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n<div class=\"col-xs-12\">\r\n    <button class=\"btn btn-success pull-right\" (click)=\"saveSetting()\">Save</button>\r\n</div>");

/***/ }),

/***/ "./src/app/settings/setting.component.ts":
/*!***********************************************!*\
  !*** ./src/app/settings/setting.component.ts ***!
  \***********************************************/
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
var SettingComponent = /** @class */ (function () {
    function SettingComponent(scheduleService, appService, router, semesterService) {
        this.scheduleService = scheduleService;
        this.appService = appService;
        this.router = router;
        this.semesterService = semesterService;
        this.mask = [/\d/, /\d/, ':', /\d/, /\d/];
        this.settings = {
            emails: [
                {
                    host_name: '',
                    signature: '',
                    config: {
                        auth: {
                            user: '',
                            pass: ''
                        }
                    },
                }
            ]
        };
        this.selected_email_index = 0;
    }
    SettingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getSettings().subscribe(function (result) {
            _this.settings = result.settings;
            console.log(_this.settings.emails);
            _this.onChangeHost();
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get settings", 'error'); });
    };
    SettingComponent.prototype.onChangeHost = function () {
        for (var i = 0; i < this.settings['emails'].length; i++) {
            if (this.settings['emails'][i].host_name == this.settings['selected_host']) {
                this.selected_email_index = i;
                break;
            }
        }
    };
    SettingComponent.prototype.saveSetting = function () {
        var _this = this;
        this.appService.saveSettings(this.settings).subscribe(function (result) {
            if (result.result == 'success') {
                _this.appService.showPNotify('success', result.message, 'success');
            }
            else {
                _this.appService.showPNotify('failure', result.message, 'error');
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get settings", 'error'); });
    };
    SettingComponent.ctorParameters = function () { return [
        { type: shared_module_1.ScheduleService },
        { type: shared_module_1.AppService },
        { type: router_1.Router },
        { type: shared_module_1.SemesterService }
    ]; };
    SettingComponent = __decorate([
        core_1.Component({
            selector: 'app-setting',
            template: __importDefault(__webpack_require__(/*! raw-loader!./setting.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/setting.component.html")).default
        }),
        __metadata("design:paramtypes", [shared_module_1.ScheduleService, shared_module_1.AppService, router_1.Router, shared_module_1.SemesterService])
    ], SettingComponent);
    return SettingComponent;
}());
exports.SettingComponent = SettingComponent;


/***/ }),

/***/ "./src/app/settings/setting.module.ts":
/*!********************************************!*\
  !*** ./src/app/settings/setting.module.ts ***!
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
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ngx_bootstrap_1 = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
var angular2_text_mask_1 = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
var setting_component_1 = __webpack_require__(/*! ./setting.component */ "./src/app/settings/setting.component.ts");
var pagination_1 = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
var tabs_1 = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
var ng2_file_upload_1 = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
var autosize_module_1 = __webpack_require__(/*! ../shared/module/autosize/autosize.module */ "./src/app/shared/module/autosize/autosize.module.ts");
var Routes = [
    { path: '', component: setting_component_1.SettingComponent }
];
var SettingModule = /** @class */ (function () {
    function SettingModule() {
    }
    SettingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(Routes),
                ngx_bootstrap_1.CollapseModule.forRoot(),
                pagination_1.PaginationModule.forRoot(),
                tabs_1.TabsModule,
                ng2_file_upload_1.FileUploadModule,
                angular2_text_mask_1.TextMaskModule,
                autosize_module_1.AutosizeModule
            ],
            declarations: [
                setting_component_1.SettingComponent,
            ],
            providers: []
        })
    ], SettingModule);
    return SettingModule;
}());
exports.SettingModule = SettingModule;


/***/ })

}]);
//# sourceMappingURL=app-settings-setting-module.js.map