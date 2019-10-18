(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-absence-requests-absence-requests-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/absence-requests/absence-requests-staff/absence-requests-staff.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/absence-requests/absence-requests-staff/absence-requests-staff.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-xs-12\">\r\n        <div class=\"x_panel\">\r\n            <div class=\"x_title\">\r\n                <h3>Absence Requests<small> (Only accept when you received their letter)</small></h3>\r\n                <div class=\"clearfix\"></div>\r\n            </div>\r\n            <div class=\"x_content\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-4\">\r\n                        <input placeholder=\"Search Code/Name\" class=\"form-control\" [(ngModel)]=\"search_text\" (ngModelChange)=\"onSearchChange()\" />\r\n                    </div>\r\n                    <div class=\"col-xs-3\">\r\n                        <select class=\"form-control\" [(ngModel)]=\"selectedStatus\" (ngModelChange)=\"onChangeStatus()\">\r\n                            <option *ngFor=\"let status of absence_request_status\" [value]=\"status.id\">{{status.title}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <br/>\r\n                <table class=\"table table-bordered text-center table-hover\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Code</th>\r\n                            <th>Name</th>\r\n                            <th>Reason</th>\r\n                            <th>Start Date</th>\r\n                            <th>End Date</th>\r\n                            <th>Submited At</th>\r\n                            <th>Accepted/Rejected At</th>\r\n                            <th>Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let request of absence_requests\">\r\n                            <td>{{request.code}}</td>\r\n                            <td>{{request.name}}</td>\r\n                            <td>{{request.reason}}</td>\r\n                            <td>{{request.start_date | date: 'dd/MM/yyyy'}}</td>\r\n                            <td>{{request.end_date | date: 'dd/MM/yyyy'}}</td>\r\n                            <td>{{request.created_at | date: 'short'}}</td>\r\n                            <td *ngIf=\"request.status == appService.absence_request_status.new.id\"></td>\r\n                            <td *ngIf=\"request.status != appService.absence_request_status.new.id\">{{request.updated_at | date: 'short'}}</td>\r\n                            <td *ngIf=\"request.status == appService.absence_request_status.new.id\"><button class=\"btn btn-success btn-sm\" (click)=\"onAcceptRequest(request.id)\">Accept</button><button class=\"btn btn-danger btn-sm\" (click)=\"onRejectRequest(request.id)\">Reject</button>\r\n                            </td>\r\n                            <td *ngIf=\"request.status != appService.absence_request_status.new.id\"><button class=\"btn btn-warning btn-sm\" (click)=\"onUndoRequest(request.id)\">Undo</button></td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                <pagination [boundaryLinks]=\"true\" [totalItems]=\"totalItems\" [itemsPerPage]=\"itemsPerPage\" [(ngModel)]=\"currentPage\" (pageChanged)=\"onPageChanged($event)\" class=\"pull-right no_margin\"></pagination>\r\n                <div class=\"form-group\">\r\n                    <select [(ngModel)]=\"itemsPerPage\" (ngModelChange)=\"getAbsenceRequests()\">\r\n                        <option>10</option>\r\n                        <option>30</option>\r\n                        <option>50</option>\r\n                    </select>\r\n                    <span>Items/page</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n</div>\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"confirmModal\" role=\"dialog\">\r\n    <div class=\"vertical-alignment-helper\">\r\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                    <h4 class=\"modal-title\">{{confirm_modal_title}}</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                    <button type=\"button\" class=\"btn btn-default btn-success\" (click)=\"confirmAction()\" data-dismiss=\"modal\">Confirm</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/absence-requests/absence-requests-student/absence-requests-student.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/absence-requests/absence-requests-student/absence-requests-student.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-xs-12\">\r\n    <div class=\"x_panel\">\r\n        <div class=\"x_title\">\r\n            <h3>Absence Requests</h3>\r\n            <div class=\"clearfix\"></div>\r\n        </div>\r\n        <div class=\"x_content\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-4\">\r\n                    <input placeholder=\"Search Code/Name\" class=\"form-control\" [(ngModel)]=\"search_text\" (ngModelChange)=\"onSearchChange()\" />\r\n                </div>\r\n                <div class=\"col-xs-3\">\r\n                    <select class=\"form-control\" [(ngModel)]=\"selectedStatus\" (ngModelChange)=\"onChangeStatus()\">\r\n                        <option *ngFor=\"let status of absence_request_status\" [value]=\"status.id\">{{status.title}}</option>\r\n                    </select>\r\n                </div>\r\n                <button class=\"btn btn-primary\" (click)=\"onCreateRequest()\"><i class=\"fa fa-plus\"></i> Send request</button>\r\n            </div>\r\n            <br/>\r\n            <table class=\"table table-bordered text-center table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Reason</th>\r\n                        <th>Start Date</th>\r\n                        <th>End Date</th>\r\n                        <th>Submited At</th>\r\n                        <th>Accepted/Rejected At</th>\r\n                        <th>Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let request of absence_requests\">\r\n                        <td>{{request.reason}}</td>\r\n                        <td>{{request.start_date | date: 'dd/MM/yyyy'}}</td>\r\n                        <td>{{request.end_date | date: 'dd/MM/yyyy'}}</td>\r\n                        <td>{{request.created_at | date: 'short'}}</td>\r\n                        <td *ngIf=\"request.status == appService.absence_request_status.new.id\"></td>\r\n                        <td *ngIf=\"request.status != appService.absence_request_status.new.id\">{{request.updated_at | date: 'short'}}</td>\r\n                        <td *ngIf=\"request.status == appService.absence_request_status.new.id\"><button class=\"btn btn-danger btn-sm\" (click)=\"onCancelRequest(request.id)\">Cancel</button></td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Modal -->\r\n<create-absence-request-modal (onConfirmed)=\"onRequestCreated($event)\"></create-absence-request-modal>\r\n<div class=\"modal fade\" id=\"confirmModal\" role=\"dialog\">\r\n    <div class=\"vertical-alignment-helper\">\r\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                    <h4 class=\"modal-title\">{{confirm_modal_title}}</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                    <button type=\"button\" class=\"btn btn-default btn-success\" (click)=\"confirmAction()\" data-dismiss=\"modal\">Send</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/absence-requests/absence-requests.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/absence-requests/absence-requests.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-absence-requests-staff *ngIf=\"authService.current_user.role_id == appService.userType.staff || authService.current_user.role_id == appService.userType.admin\"></app-absence-requests-staff>\r\n<app-absence-requests-student *ngIf=\"authService.current_user.role_id == appService.userType.student\"></app-absence-requests-student>");

/***/ }),

/***/ "./src/app/absence-requests/absence-requests-staff/absence-requests-staff.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/absence-requests/absence-requests-staff/absence-requests-staff.component.ts ***!
  \*********************************************************************************************/
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
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var shared_module_1 = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var AbsenceRequestsStaffComponent = /** @class */ (function () {
    function AbsenceRequestsStaffComponent(router, absenceRequestService, appService) {
        this.router = router;
        this.absenceRequestService = absenceRequestService;
        this.appService = appService;
        this.pageNumber = 1;
        this.limit = 15;
        this.currentPage = 1;
        this.totalItems = 0;
        this.itemsPerPage = 10;
        this.absence_requests = [];
        this.absence_request_status = [];
        this.search_text = '';
        this.current_request_id = 0;
        this.current_request_status = 0;
        this.confirm_modal_title = '';
    }
    AbsenceRequestsStaffComponent.prototype.ngOnInit = function () {
        this.getAbsenceRequests();
        this.absence_request_status.push(this.appService.absence_request_status.new);
        this.absence_request_status.push(this.appService.absence_request_status.accepted);
        this.absence_request_status.push(this.appService.absence_request_status.rejected);
        this.selectedStatus = this.appService.absence_request_status.new.id;
    };
    AbsenceRequestsStaffComponent.prototype.getAbsenceRequests = function () {
        var _this = this;
        this.absenceRequestService.getAbsenceRequests(this.selectedStatus, this.search_text).subscribe(function (result) {
            _this.absence_requests = result.absence_requests;
            _this.totalItems = result.total_items;
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get absence_requests", 'error'); });
    };
    AbsenceRequestsStaffComponent.prototype.onChangeStatus = function () {
        this.getAbsenceRequests();
    };
    AbsenceRequestsStaffComponent.prototype.onAcceptRequest = function (id) {
        jQuery('#confirmModal').modal("show");
        this.confirm_modal_title = 'Accept this request ?';
        this.current_request_id = id;
        this.current_request_status = this.appService.absence_request_status.accepted.id;
    };
    AbsenceRequestsStaffComponent.prototype.onUndoRequest = function (id) {
        jQuery('#confirmModal').modal("show");
        this.confirm_modal_title = 'Undo this request ?';
        this.current_request_id = id;
        this.current_request_status = this.appService.absence_request_status.new.id;
    };
    AbsenceRequestsStaffComponent.prototype.onRejectRequest = function (id) {
        jQuery('#confirmModal').modal("show");
        this.confirm_modal_title = 'Reject this request ?';
        this.current_request_id = id;
        this.current_request_status = this.appService.absence_request_status.rejected.id;
    };
    AbsenceRequestsStaffComponent.prototype.confirmAction = function () {
        var _this = this;
        this.absenceRequestService.changeRequestStatus(this.current_request_id, this.current_request_status)
            .subscribe(function (result) {
            _this.absenceRequestService.getAbsenceRequests(_this.selectedStatus, _this.search_text)
                .subscribe(function (result) {
                _this.absence_requests = result.absence_requests;
                jQuery('#confirmModal').modal("hide");
            }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get requests", 'error'); });
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't change request status", 'error'); });
    };
    AbsenceRequestsStaffComponent.prototype.onSearchChange = function () {
        if (this.search_text.length > 3 || this.search_text.length == 0) {
            this.getAbsenceRequests();
        }
    };
    AbsenceRequestsStaffComponent.prototype.onPageChanged = function (event) {
        this.pageNumber = event.page;
        this.getAbsenceRequests();
    };
    AbsenceRequestsStaffComponent.ctorParameters = function () { return [
        { type: router_1.Router },
        { type: shared_module_1.AbsenceRequestService },
        { type: shared_module_1.AppService }
    ]; };
    AbsenceRequestsStaffComponent = __decorate([
        core_1.Component({
            selector: 'app-absence-requests-staff',
            template: __importDefault(__webpack_require__(/*! raw-loader!./absence-requests-staff.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/absence-requests/absence-requests-staff/absence-requests-staff.component.html")).default
        }),
        __metadata("design:paramtypes", [router_1.Router, shared_module_1.AbsenceRequestService, shared_module_1.AppService])
    ], AbsenceRequestsStaffComponent);
    return AbsenceRequestsStaffComponent;
}());
exports.AbsenceRequestsStaffComponent = AbsenceRequestsStaffComponent;


/***/ }),

/***/ "./src/app/absence-requests/absence-requests-student/absence-requests-student.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/absence-requests/absence-requests-student/absence-requests-student.component.ts ***!
  \*************************************************************************************************/
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
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var shared_module_1 = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var AbsenceRequestsStudentComponent = /** @class */ (function () {
    function AbsenceRequestsStudentComponent(router, absenceRequestService, appService, authService) {
        this.router = router;
        this.absenceRequestService = absenceRequestService;
        this.appService = appService;
        this.authService = authService;
        this.absence_requests = [];
        this.absence_request_status = [];
        this.search_text = '';
        this.current_request_id = 0;
        this.current_request_status = 0;
        this.confirm_modal_title = '';
    }
    AbsenceRequestsStudentComponent.prototype.ngOnInit = function () {
        this.getAbsenceRequests();
        this.absence_request_status.push(this.appService.absence_request_status.new);
        this.absence_request_status.push(this.appService.absence_request_status.accepted);
        this.absence_request_status.push(this.appService.absence_request_status.rejected);
        this.selectedStatus = this.appService.absence_request_status.new.id;
    };
    AbsenceRequestsStudentComponent.prototype.getAbsenceRequests = function () {
        var _this = this;
        this.absenceRequestService.getRequestsByStudent(this.authService.current_user.id, this.selectedStatus, this.search_text).subscribe(function (result) {
            _this.absence_requests = result.absence_requests;
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get absence requests", 'error'); });
    };
    AbsenceRequestsStudentComponent.prototype.onChangeStatus = function () {
        this.getAbsenceRequests();
    };
    AbsenceRequestsStudentComponent.prototype.onCancelRequest = function (id) {
        jQuery('#confirmModal').modal("show");
        this.confirm_modal_title = 'Cancel this request ?';
        this.current_request_id = id;
    };
    AbsenceRequestsStudentComponent.prototype.onCreateRequest = function () {
        this.createAbsenceRequestModal.onOpenModal();
    };
    AbsenceRequestsStudentComponent.prototype.onRequestCreated = function (result) {
        if (result == 'success') {
            this.getAbsenceRequests();
        }
    };
    AbsenceRequestsStudentComponent.prototype.confirmAction = function () {
        var _this = this;
        this.absenceRequestService.cancelAbsenceRequests(this.current_request_id)
            .subscribe(function (result) {
            _this.apiResult = result.result;
            _this.apiResultMessage = result.message;
            _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
            if (_this.apiResult == 'success') {
                jQuery('#confirmModal').modal("hide");
                _this.getAbsenceRequests();
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't cancel request", 'error'); });
    };
    AbsenceRequestsStudentComponent.prototype.onSearchChange = function () {
        if (this.search_text.length > 3 || this.search_text.length == 0) {
            this.getAbsenceRequests();
        }
    };
    AbsenceRequestsStudentComponent.ctorParameters = function () { return [
        { type: router_1.Router },
        { type: shared_module_1.AbsenceRequestService },
        { type: shared_module_1.AppService },
        { type: shared_module_1.AuthService }
    ]; };
    __decorate([
        core_1.ViewChild(shared_module_1.CreateAbsenceRequestModalComponent, { static: false }),
        __metadata("design:type", shared_module_1.CreateAbsenceRequestModalComponent)
    ], AbsenceRequestsStudentComponent.prototype, "createAbsenceRequestModal", void 0);
    AbsenceRequestsStudentComponent = __decorate([
        core_1.Component({
            selector: 'app-absence-requests-student',
            template: __importDefault(__webpack_require__(/*! raw-loader!./absence-requests-student.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/absence-requests/absence-requests-student/absence-requests-student.component.html")).default
        }),
        __metadata("design:paramtypes", [router_1.Router, shared_module_1.AbsenceRequestService, shared_module_1.AppService, shared_module_1.AuthService])
    ], AbsenceRequestsStudentComponent);
    return AbsenceRequestsStudentComponent;
}());
exports.AbsenceRequestsStudentComponent = AbsenceRequestsStudentComponent;


/***/ }),

/***/ "./src/app/absence-requests/absence-requests.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/absence-requests/absence-requests.component.ts ***!
  \****************************************************************/
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
var AbsenceRequestsComponent = /** @class */ (function () {
    function AbsenceRequestsComponent(authService, appService) {
        this.authService = authService;
        this.appService = appService;
    }
    AbsenceRequestsComponent.prototype.ngOnInit = function () {
    };
    AbsenceRequestsComponent.ctorParameters = function () { return [
        { type: shared_module_1.AuthService },
        { type: shared_module_1.AppService }
    ]; };
    AbsenceRequestsComponent = __decorate([
        core_1.Component({
            selector: 'app-absence-requests',
            template: __importDefault(__webpack_require__(/*! raw-loader!./absence-requests.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/absence-requests/absence-requests.component.html")).default
        }),
        __metadata("design:paramtypes", [shared_module_1.AuthService, shared_module_1.AppService])
    ], AbsenceRequestsComponent);
    return AbsenceRequestsComponent;
}());
exports.AbsenceRequestsComponent = AbsenceRequestsComponent;


/***/ }),

/***/ "./src/app/absence-requests/absence-requests.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/absence-requests/absence-requests.module.ts ***!
  \*************************************************************/
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
var absence_requests_component_1 = __webpack_require__(/*! ./absence-requests.component */ "./src/app/absence-requests/absence-requests.component.ts");
var absence_requests_staff_component_1 = __webpack_require__(/*! ./absence-requests-staff/absence-requests-staff.component */ "./src/app/absence-requests/absence-requests-staff/absence-requests-staff.component.ts");
var absence_requests_student_component_1 = __webpack_require__(/*! ./absence-requests-student/absence-requests-student.component */ "./src/app/absence-requests/absence-requests-student/absence-requests-student.component.ts");
var ngx_bootstrap_1 = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
var shared_module_1 = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var AbsenceRequestsRoutes = [
    { path: '', component: absence_requests_component_1.AbsenceRequestsComponent },
];
var AbsenceRequestsModule = /** @class */ (function () {
    function AbsenceRequestsModule() {
    }
    AbsenceRequestsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(AbsenceRequestsRoutes),
                ngx_bootstrap_1.CollapseModule.forRoot(),
                ngx_bootstrap_1.PaginationModule.forRoot(),
                ngx_bootstrap_1.TabsModule,
                ngx_bootstrap_1.DatepickerModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                absence_requests_component_1.AbsenceRequestsComponent,
                absence_requests_staff_component_1.AbsenceRequestsStaffComponent,
                absence_requests_student_component_1.AbsenceRequestsStudentComponent
            ],
            providers: []
        })
    ], AbsenceRequestsModule);
    return AbsenceRequestsModule;
}());
exports.AbsenceRequestsModule = AbsenceRequestsModule;


/***/ })

}]);
//# sourceMappingURL=app-absence-requests-absence-requests-module.js.map