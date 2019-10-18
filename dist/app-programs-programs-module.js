(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-programs-programs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/programs/programs.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/programs/programs.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"x_panel\">\r\n        <div class=\"x_title\">\r\n            <h3>Programs</h3>\r\n            <div class=\"navbar-btn pull-right\">\r\n                <button type=\"button\" class=\"btn btn-primary btn-round\" (click)=\"onAddProgram()\"> <i class=\"fa fa-plus\"></i> Add</button>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n        </div>\r\n        <div class=\"x_content\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-4 col-xs-12\">\r\n                    <input placeholder=\"Search Class Name\" class=\"form-control\" [(ngModel)]=\"searchText\" (ngModelChange)=\"getProgramList()\" />\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <table class=\"table table-bordered text-center table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Code</th>\r\n                        <th>Name</th>\r\n                        <th>Total classes</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let program of programs\" (click)='onCellClick()'>\r\n                        <td>{{program.code}}</td>\r\n                        <td>{{program.name}}</td>\r\n                        <td>{{program.total_class}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <pagination [boundaryLinks]=\"true\" [totalItems]=\"totalItems\" [itemsPerPage]=\"itemsPerPage\" [(ngModel)]=\"currentPage\" (pageChanged)=\"onPageChanged($event)\" class=\"pull-right no_margin\"></pagination>\r\n            <div class=\"form-group\">\r\n                <select [(ngModel)]=\"itemsPerPage\" (ngModelChange)=\"getProgramList()\">\r\n                    <option>10</option>\r\n                    <option>30</option>\r\n                    <option>50</option>\r\n                </select>\r\n                <span>Items/page</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"addProgramModal\" role=\"dialog\">\r\n    <div class=\"vertical-alignment-helper\">\r\n        <div class=\"modal-dialog vertical-align-center\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                    <h4 class=\"modal-title\">Add new program</h4>\r\n                </div>\r\n                <form class=\"form-horizontal form-label-left\">\r\n                    <div class=\"modal-body\">\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Name*</label>\r\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                                    <input type=\"text\" [(ngModel)]=\"new_program_name\" name=\"new_program_name\" required=\"required\" class=\"form-control col-md-7 col-xs-12\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Code*</label>\r\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                                    <input type=\"text\" [(ngModel)]=\"new_program_code\" name=\"new_program_code\" required=\"required\" class=\"form-control col-md-7 col-xs-12\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\r\n                        <button type=\"button\" class=\"btn btn-default btn-success\" (click)=\"confirmAddProgram()\">Add</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/programs/programs.component.ts":
/*!************************************************!*\
  !*** ./src/app/programs/programs.component.ts ***!
  \************************************************/
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
var ProgramsComponent = /** @class */ (function () {
    function ProgramsComponent(appService, programService, authService) {
        this.appService = appService;
        this.programService = programService;
        this.authService = authService;
        this.sort_tag = ['none', 'asc', 'dsc'];
        this.sort_index = 0;
        this.pageNumber = 1;
        this.limit = 15;
        this.currentPage = 1;
        this.totalItems = 0;
        this.itemsPerPage = 10;
        this.programs = [];
        this.new_program_name = '';
        this.new_program_code = '';
    }
    ProgramsComponent.prototype.ngOnInit = function () {
        this.getProgramList();
    };
    ProgramsComponent.prototype.getProgramList = function () {
        var _this = this;
        this.programService.getProgramList(this.searchText, this.sort_tag[this.sort_index], this.pageNumber, this.itemsPerPage)
            .subscribe(function (result) {
            _this.programs = result.programs;
            _this.totalItems = result.total_items;
            _this.apiResult = result.result;
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get program list", 'error'); });
    };
    ProgramsComponent.prototype.onPageChanged = function (event) {
        this.pageNumber = event.page;
        this.getProgramList();
    };
    ProgramsComponent.prototype.onCellClick = function (id) {
    };
    ProgramsComponent.prototype.onAddProgram = function () {
        this.new_program_name = '';
        this.new_program_code = '';
        jQuery("#addProgramModal").modal("show");
    };
    ProgramsComponent.prototype.confirmAddProgram = function () {
        var _this = this;
        this.programService.addProgram(this.new_program_name, this.new_program_code).subscribe(function (result) {
            _this.apiResult = result.result;
            _this.apiResultMessage = result.message;
            if (result.result == 'success') {
                _this.getProgramList();
                _this.new_program_name = '';
                _this.new_program_code = '';
                jQuery("#addProgramModal").modal("hide");
            }
            _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't add class", 'error'); });
    };
    ProgramsComponent.ctorParameters = function () { return [
        { type: shared_module_1.AppService },
        { type: shared_module_1.ProgramsService },
        { type: shared_module_1.AuthService }
    ]; };
    ProgramsComponent = __decorate([
        core_1.Component({
            selector: 'app-programs',
            template: __importDefault(__webpack_require__(/*! raw-loader!./programs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/programs/programs.component.html")).default
        }),
        __metadata("design:paramtypes", [shared_module_1.AppService, shared_module_1.ProgramsService, shared_module_1.AuthService])
    ], ProgramsComponent);
    return ProgramsComponent;
}());
exports.ProgramsComponent = ProgramsComponent;


/***/ }),

/***/ "./src/app/programs/programs.module.ts":
/*!*********************************************!*\
  !*** ./src/app/programs/programs.module.ts ***!
  \*********************************************/
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
var programs_component_1 = __webpack_require__(/*! ./programs.component */ "./src/app/programs/programs.component.ts");
var ngx_bootstrap_1 = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
var shared_module_1 = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var pagination_1 = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
var ng2_file_upload_1 = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
var homeRoutes = [
    {
        path: '',
        component: programs_component_1.ProgramsComponent,
    }
];
var ProgramsModule = /** @class */ (function () {
    function ProgramsModule() {
    }
    ProgramsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(homeRoutes),
                shared_module_1.SharedModule,
                ngx_bootstrap_1.TooltipModule.forRoot(),
                ng2_file_upload_1.FileUploadModule,
                pagination_1.PaginationModule.forRoot(),
            ],
            declarations: [
                programs_component_1.ProgramsComponent
            ],
            providers: []
        })
    ], ProgramsModule);
    return ProgramsModule;
}());
exports.ProgramsModule = ProgramsModule;


/***/ })

}]);
//# sourceMappingURL=app-programs-programs-module.js.map