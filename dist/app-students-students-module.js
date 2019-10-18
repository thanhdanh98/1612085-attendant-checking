(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-students-students-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/students/student-detail/student-detail.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/students/student-detail/student-detail.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n    <div *ngIf=\"student_not_found\" class=\"x_panel\">\r\n        <div class=\"x_title\">\r\n            <h3 class=\"course_title\">Student not found</h3>\r\n            <div class=\"clearfix\"></div>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"!student_not_found\" class=\"x_panel\">\r\n        <div class=\"x_content\">\r\n            <div class=\"col-md-3 col-sm-3 col-xs-12 profile_left\">\r\n                <img id=\"profilePic\" style=\"height:150px;width:150px;padding-bottom: 5px;\" [src]=\"student.avatar\">\r\n                <ng-container *ngIf=\"!isEditingStudent\">\r\n                    <h3>{{editing_name}}</h3>\r\n                    <ul class=\"list-unstyled user_data\" style=\"font-size: medium;\">\r\n                        <li *ngIf=\"student.status == appService.student_status.active.id\" style=\"color: green\">\r\n                            <i class=\"fa fa-info-circle\"></i> {{appService.student_status.active.title}}\r\n                        </li>\r\n                        <li *ngIf=\"student.status == appService.student_status.reserved.id\" style=\"color: orange\">\r\n                            <i class=\"fa fa-info-circle\"></i> {{appService.student_status.reserved.title}}\r\n                        </li>\r\n                        <li *ngIf=\"student.status == appService.student_status.dropped.id\" style=\"color: red\">\r\n                            <i class=\"fa fa-info-circle\"></i> {{appService.student_status.dropped.title}}\r\n                        </li>\r\n                        <li>\r\n                            <i class=\"fa fa-id-card-o\"></i> {{student.code}}\r\n                        </li>\r\n                        <li>\r\n                            <i class=\"fa fa-group\"></i> {{student.class_name}}\r\n                        </li>\r\n                        <li>\r\n                            <i class=\"fa fa-phone\"></i> {{student.phone}}\r\n                        </li>\r\n                        <li>\r\n                            <i class=\"fa fa-envelope-o\"></i> {{student.email}}\r\n                        </li>\r\n                    </ul>\r\n                    <button class=\"btn btn-primary\" (click)=\"onEditStudent()\"><i class=\"fa fa-pencil\"></i> Edit</button>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"isEditingStudent\">\r\n                    <h3><input class=\"form-control\" type=\"text\" name=\"editing_name\" [(ngModel)] = \"editing_name\"></h3>\r\n                    <ul class=\"list-unstyled user_data\" style=\"font-size: medium;\">\r\n                        <li>\r\n                            <i class=\"fa fa-info-circle\"></i>\r\n                            <select class=\"form-control\" [(ngModel)]=\"editing_status\">\r\n                                <option [value]=\"appService.student_status.active.id\">{{appService.student_status.active.title}}</option>\r\n                                <option [value]=\"appService.student_status.reserved.id\">{{appService.student_status.reserved.title}}</option>\r\n                                <option [value]=\"appService.student_status.dropped.id\">{{appService.student_status.dropped.title}}</option>\r\n                            </select>\r\n                        </li>\r\n                        <li>\r\n                            <i class=\"fa fa-id-card-o\"></i> {{student.code}}\r\n                        </li>\r\n                        <li>\r\n                            <i class=\"fa fa-group\"></i> {{student.class_name}}\r\n                        </li>\r\n                        <li>\r\n                            <i class=\"fa fa-phone\"></i>\r\n                            <input class=\"form-control\" type=\"text\" name=\"editing_phone\" [(ngModel)]=\"editing_phone\">\r\n                        </li>\r\n                        <li>\r\n                            <i class=\"fa fa-envelope-o\"></i>\r\n                            <input class=\"form-control\" type=\"text\" name=\"editing_mail\" [(ngModel)]=\"editing_mail\">\r\n                        </li>\r\n                    </ul>\r\n                    <button class=\"btn btn-default\" (click)=\"onCancelEditStudent()\">Cancel</button>\r\n                    <button class=\"btn btn-success\" (click)=\"onSaveEditStudent()\">Save</button>\r\n                </ng-container>\r\n                <br />\r\n            </div>\r\n            <div class=\"col-md-9 col-sm-9 col-xs-12\">\r\n                <tabset>\r\n                    <tab heading='Current Courses'>\r\n                        <table class=\"data table table-striped text-center\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Course</th>\r\n                                    <th>Lecturers</th>\r\n                                    <th>No. Absences</th>\r\n                                    <th>Attendance Status</th>\r\n                                    <!-- <th>Enrollment Status</th> -->\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let course of current_courses\">\r\n                                    <td><a routerLink=\"/courses/{{course.id}}\" routerLinkActive=\"active\"><strong>{{course.code}} - {{course.name}}</strong></a></td>\r\n                                    <td>{{course.lecturers}}</td>\r\n                                    <td>{{course.absence_count}}</td>\r\n                                    <td *ngIf=\"course.attendance_status == appService.attendance_status.normal\"><button class=\"btn btn-primary\" (click)=\"onChangeAttendanceStatus(course.id,appService.attendance_status.exemption)\">Normal</button></td>\r\n                                    <td *ngIf=\"course.attendance_status == appService.attendance_status.exemption\"><button class=\"btn btn-warning\" (click)=\"onChangeAttendanceStatus(course.id,appService.attendance_status.normal)\">Exemption</button></td>\r\n                                    <!-- <td *ngIf=\"course.enrollment_status == appService.enrollment_status.compulsory\">Compulsory</td>\r\n                                    <td *ngIf=\"course.enrollment_status == appService.enrollment_status.elective\">Elective</td> -->\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </tab>\r\n                    <tab heading='Absence Requests'>\r\n                        <table class=\"data table table-striped text-center\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Reason</th>\r\n                                    <th>Start Date</th>\r\n                                    <th>End Date</th>\r\n                                    <th>Status</th>\r\n                                    <th>Created At</th>\r\n                                    <th>Accepted/Rejected At</th>\r\n                                    <th>Action</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let request of absence_requests\">\r\n                                    <td>{{request.reason}}</td>\r\n                                    <td>{{request.start_date | date: 'dd/MM/yyyy'}}</td>\r\n                                    <td>{{request.end_date | date: 'dd/MM/yyyy'}}</td>\r\n                                    <td *ngIf=\"request.status == appService.absence_request_status.new.id\" style=\"color: blue\">{{appService.absence_request_status.new.title}}</td>\r\n                                    <td *ngIf=\"request.status == appService.absence_request_status.accepted.id\" style=\"color: green\">{{appService.absence_request_status.accepted.title}}</td>\r\n                                    <td *ngIf=\"request.status == appService.absence_request_status.rejected.id\" style=\"color: red\">{{appService.absence_request_status.rejected.title}}</td>\r\n                                    <td>{{request.created_at | date: 'short'}}</td>\r\n                                    <td *ngIf=\"request.status == appService.absence_request_status.new.id\"></td>\r\n                                    <td *ngIf=\"request.status != appService.absence_request_status.new.id\">{{request.updated_at | date: 'short'}}</td>\r\n                                    <td *ngIf=\"request.status == appService.absence_request_status.new.id\"><button class=\"btn btn-success btn-sm\" (click)=\"onAcceptRequest(request.id)\">Accept</button><button class=\"btn btn-danger btn-sm\" (click)=\"onRejectRequest(request.id)\">Reject</button></td>\r\n                                    <td *ngIf=\"request.status != appService.absence_request_status.new.id\"><button class=\"btn btn-warning btn-sm\" (click)=\"onUndoRequest(request.id)\">Undo</button></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </tab>\r\n                </tabset>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Modal -->\r\n<result-message-modal [modal_title]=\"apiResult\" [modal_message]=\"apiResultMessage\"></result-message-modal>\r\n<div class=\"modal fade\" id=\"confirmModal\" role=\"dialog\">\r\n    <div class=\"vertical-alignment-helper\">\r\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                    <h4 class=\"modal-title\">{{confirm_modal_title}}</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                    <button type=\"button\" class=\"btn btn-default btn-success\" (click)=\"confirmAction()\" data-dismiss=\"modal\">Confirm</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"confirmChangeAttendanceStatusModal\" role=\"dialog\">\r\n    <div class=\"vertical-alignment-helper\">\r\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                    <h4 class=\"modal-title\">{{confirm_modal_title}}</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div *ngIf=\"current_attendance_status == appService.attendance_status.exemption\">\r\n                        <label>*Only do this when you received permission from the lecturer</label>\r\n                    </div>\r\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                    <button type=\"button\" class=\"btn btn-default btn-success\" (click)=\"confirmChangeAttendanceStatus()\" data-dismiss=\"modal\">Confirm</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/students/students.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/students/students.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"x_panel\">\r\n        <div class=\"x_title\">\r\n            <h3>All Students</h3>\r\n            <div class=\"pull-right navbar-btn\">\r\n                <button type=\"button\" class=\"btn btn-primary btn-round\" (click)=\"onOpenAddStudent()\"> <i class=\"fa fa-plus\"></i> Add</button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-round\" (click)=\"onImportStudent()\"> <i class=\"fa fa-upload\"></i> Import</button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-round\" (click)=\"onExportStudent()\"> <i class=\"fa fa-download\"></i> Export</button>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n        </div>\r\n        <div class=\"x_content\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12 col-sm-4\">\r\n                    <input placeholder=\"Search\" class=\"form-control\" [(ngModel)]=\"searchText\" (ngModelChange)=\"getCurrentList()\" />\r\n                </div>\r\n                <div class=\"col-xs-12 col-sm-6\">\r\n                    <div class=\"col-xs-5\">\r\n                        <select class=\"form-control\" [(ngModel)]=\"selectedProgram\" (ngModelChange)=\"onChangeProgram()\">\r\n                            <option *ngFor=\"let program of programs\" [value]=\"program.id\">{{program.name}}</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-xs-4\">\r\n                        <select class=\"form-control\" [(ngModel)]=\"selectedClasses\" (ngModelChange)=\"getCurrentList()\">\r\n                            <option *ngFor=\"let class of filteredClasses\" [value]=\"class.id\">{{class.name}}</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-xs-3\">\r\n                        <select class=\"form-control\" [(ngModel)]=\"selected_status\" (ngModelChange)=\"getCurrentList()\">\r\n                            <option [value]=\"appService.student_status.active.id\">{{appService.student_status.active.title}}</option>\r\n                            <option [value]=\"appService.student_status.reserved.id\">{{appService.student_status.reserved.title}}</option>\r\n                            <option [value]=\"appService.student_status.dropped.id\">{{appService.student_status.dropped.title}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <table id=\"table_test\" class=\"table table-bordered text-center table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Code</th>\r\n                        <th>Name</th>\r\n                        <th>Class</th>\r\n                        <th>Phone</th>\r\n                        <th>Enrolled Courses</th>\r\n                        <th>Status</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let student of student_list\" (click)='onCellClick(student.id)'>\r\n                        <td>{{student.code}}</td>\r\n                        <td>{{student.name}}</td>\r\n                        <td>{{student.class_name}}</td>\r\n                        <td>{{student.phone}}</td>\r\n                        <td>{{student.enroll_course}}</td>\r\n                        <td *ngIf=\"student.status == appService.student_status.active.id\" style=\"color: green\">{{appService.student_status.active.title}}</td>\r\n                        <td *ngIf=\"student.status == appService.student_status.reserved.id\" style=\"color: orange\">{{appService.student_status.reserved.title}}</td>\r\n                        <td *ngIf=\"student.status == appService.student_status.dropped.id\" style=\"color: red\">{{appService.student_status.dropped.title}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <pagination [boundaryLinks]=\"true\" [totalItems]=\"totalItems\" [itemsPerPage]=\"itemsPerPage\" [(ngModel)]=\"currentPage\" (pageChanged)=\"onPageChanged($event)\" class=\"pull-right no_margin\"></pagination>\r\n            <div class=\"form-group\">\r\n                <select [(ngModel)]=\"itemsPerPage\" (ngModelChange)=\"getCurrentList()\">\r\n                    <option>10</option>\r\n                    <option>30</option>\r\n                    <option>50</option>\r\n                </select>\r\n                <span>Items/page</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"addStudentModal\" role=\"dialog\">\r\n    <div class=\"vertical-alignment-helper\">\r\n        <div class=\"modal-dialog modal-lg vertical-align-center\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                    <h4 class=\"modal-title\">Add student</h4>\r\n                </div>\r\n                <form class=\"form-horizontal form-label-left\">\r\n                    <div class=\"modal-body row\">\r\n                        <div class=\"col-xs-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\"> Program* </label>\r\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                                    <select class=\"form-control\" name=\"program\" [(ngModel)]=\"newProgram\" (ngModelChange)=\"onChangeNewProgram()\">\r\n                                        <option *ngFor=\"let program of new_programs\" [value]=\"program.id\">{{program.name}}</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\"> Class* </label>\r\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                                    <select class=\"form-control\" name=\"class\" [(ngModel)]=\"newClass\">\r\n                                        <option *ngFor=\"let class of new_classes\" [value]=\"class.id\">{{class.name}}</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Code*</label>\r\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                                    <input type=\"text\" [(ngModel)]=\"newCode\" (ngModelChange)=\"onChangeStudentCode()\" name=\"first_name\" required=\"required\" class=\"form-control col-md-7 col-xs-12\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\"> Email</label>\r\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                                    <input type=\"text\" readonly [(ngModel)]=\"newEmail\" name=\"email\" required=\"required\" class=\"form-control col-md-7 col-xs-12\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">First Name*</label>\r\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                                    <input type=\"text\" [(ngModel)]=\"newFirstName\" name=\"first_name\" required=\"required\" class=\"form-control col-md-7 col-xs-12\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Last Name*</label>\r\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                                    <input type=\"text\" [(ngModel)]=\"newLastName\" name=\"last_name\" required=\"required\" class=\"form-control col-md-7 col-xs-12\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\"> Phone </label>\r\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                                    <input class=\"form-control col-md-7 col-xs-12\" type=\"text\" name=\"phone\" [(ngModel)]=\"newPhone\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\"> Note </label>\r\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                                    <input class=\"form-control col-md-7 col-xs-12\" type=\"text\" name=\"note\" [(ngModel)]=\"newNote\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                        <button type=\"button\" class=\"btn btn-default\" (click)=\"onCancelAddStudent()\">Cancel</button>\r\n                        <button type=\"button\" class=\"btn btn-default btn-success\" (click)=\"onAddStudent()\">Add</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"progressModal\" role=\"dialog\">\r\n    <div class=\"vertical-alignment-helper\">\r\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"text-center\">\r\n                        <h2>Loading</h2>\r\n                    </div>\r\n                    <div class=\"progress\">\r\n                        <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" style=\"width:100%\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<import-modal [import_type]=\"appService.import_export_type.student\" [title]=\"'Import Student'\" [note] = \"'*Students class will be based on file name. E.g. 13CTT.xlsx'\" (onClose)=\"onCloseImport($event)\"></import-modal>\r\n<export-modal [export_type]=\"appService.import_export_type.student\" [title]=\"'Export Student'\" [search_data]=\"export_search_data\"></export-modal>\r\n'");

/***/ }),

/***/ "./src/app/students/student-detail/student-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/students/student-detail/student-detail.component.ts ***!
  \*********************************************************************/
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
var StudentDetailComponent = /** @class */ (function () {
    function StudentDetailComponent(route, router, studentService, authService, appService, absenceRequestService) {
        this.route = route;
        this.router = router;
        this.studentService = studentService;
        this.authService = authService;
        this.appService = appService;
        this.absenceRequestService = absenceRequestService;
        this.student_not_found = false;
        this.isEditingStudent = false;
        this.student = {
            id: 0,
            first_name: '',
            last_name: '',
            class_name: '',
            class_id: 0,
            status: 0,
            email: '',
            phone: '',
            avatar: '',
            code: ''
        };
        this.current_courses = [];
        this.current_course_id = 0;
        this.absence_requests = [];
        this.current_request_id = 0;
        this.current_request_status = 0;
        this.confirm_modal_title = '';
        this.current_attendance_status = 0;
    }
    StudentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { _this.student_id = params['id']; });
        //get Student from database
        this.getStudentrDetail();
    };
    StudentDetailComponent.prototype.getStudentrDetail = function () {
        var _this = this;
        this.studentService.getStudentrDetail(this.student_id).subscribe(function (result) {
            _this.student = result.student;
            if (_this.student == undefined || _this.student == null) {
                _this.student_not_found = true;
                return;
            }
            _this.current_courses = result.current_courses;
            _this.editing_name = _this.student.first_name + ' ' + _this.student.last_name;
            _this.absenceRequestService.getRequestsByStudent(_this.student_id, -1, '')
                .subscribe(function (result) {
                _this.absence_requests = result.absence_requests;
            }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get absence requests by student", 'error'); });
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't student detail", 'error'); });
    };
    StudentDetailComponent.prototype.onCourseClick = function (id) {
        this.router.navigate(['/courses/', id]);
    };
    StudentDetailComponent.prototype.onAcceptRequest = function (id) {
        jQuery('#confirmModal').modal("show");
        this.confirm_modal_title = 'Accept this request ?';
        this.current_request_id = id;
        this.current_request_status = this.appService.absence_request_status.accepted.id;
    };
    StudentDetailComponent.prototype.onUndoRequest = function (id) {
        jQuery('#confirmModal').modal("show");
        this.confirm_modal_title = 'Undo this request ?';
        this.current_request_id = id;
        this.current_request_status = this.appService.absence_request_status.new.id;
    };
    StudentDetailComponent.prototype.onRejectRequest = function (id) {
        jQuery('#confirmModal').modal("show");
        this.confirm_modal_title = 'Reject this request ?';
        this.current_request_id = id;
        this.current_request_status = this.appService.absence_request_status.rejected.id;
    };
    StudentDetailComponent.prototype.confirmAction = function () {
        var _this = this;
        this.absenceRequestService.changeRequestStatus(this.current_request_id, this.current_request_status)
            .subscribe(function (result) {
            _this.absenceRequestService.getRequestsByStudent(_this.student_id, -1, '')
                .subscribe(function (result) {
                _this.absence_requests = result.absence_requests;
                jQuery('#confirmModal').modal("hide");
            }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get absence_requests by student", 'error'); });
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't change request status", 'error'); });
    };
    StudentDetailComponent.prototype.onEditStudent = function () {
        this.editing_name = this.student.first_name + ' ' + this.student.last_name;
        this.editing_mail = this.student.email;
        this.editing_phone = this.student.phone;
        this.editing_status = this.student.status;
        this.isEditingStudent = true;
    };
    StudentDetailComponent.prototype.onCancelEditStudent = function () {
        this.isEditingStudent = false;
    };
    StudentDetailComponent.prototype.onSaveEditStudent = function () {
        var _this = this;
        this.studentService.updateStudent(this.student.id, this.editing_name, this.editing_mail, this.editing_phone, this.student.avatar, this.editing_status)
            .subscribe(function (result) {
            _this.apiResult = result.result;
            _this.apiResultMessage = result.message;
            if (result.result == 'success') {
                _this.isEditingStudent = false;
                _this.student.email = _this.editing_mail;
                _this.student.phone = _this.editing_phone;
                _this.student.status = _this.editing_status;
            }
            //this.resultMessageModal.onOpenModal();
            _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't update profile", 'error'); });
    };
    StudentDetailComponent.prototype.onChangeAttendanceStatus = function (course_id, status) {
        jQuery('#confirmChangeAttendanceStatusModal').modal("show");
        if (this.appService.attendance_status.exemption == status) {
            this.confirm_modal_title = 'Change attendance status to Exemption?';
        }
        else {
            this.confirm_modal_title = 'Change attendance status to Normal?';
        }
        this.current_attendance_status = status;
        this.current_course_id = course_id;
    };
    StudentDetailComponent.prototype.confirmChangeAttendanceStatus = function () {
        var _this = this;
        this.studentService.changeAttendanceStatus(this.student_id, this.current_course_id, this.student.class_id, this.current_attendance_status).subscribe(function (result) {
            _this.apiResult = result.result;
            _this.apiResultMessage = result.message;
            if (result.result == 'success') {
                jQuery('#confirmChangeAttendanceStatusModal').modal("hide");
                _this.getStudentrDetail();
            }
            _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't change attendance status", 'error'); });
    };
    StudentDetailComponent.ctorParameters = function () { return [
        { type: router_1.ActivatedRoute },
        { type: router_1.Router },
        { type: shared_module_1.StudentService },
        { type: shared_module_1.AuthService },
        { type: shared_module_1.AppService },
        { type: shared_module_1.AbsenceRequestService }
    ]; };
    __decorate([
        core_1.ViewChild(shared_module_1.ResultMessageModalComponent, { static: false }),
        __metadata("design:type", shared_module_1.ResultMessageModalComponent)
    ], StudentDetailComponent.prototype, "resultMessageModal", void 0);
    StudentDetailComponent = __decorate([
        core_1.Component({
            selector: 'students-detail',
            template: __importDefault(__webpack_require__(/*! raw-loader!./student-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/students/student-detail/student-detail.component.html")).default
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, shared_module_1.StudentService, shared_module_1.AuthService, shared_module_1.AppService, shared_module_1.AbsenceRequestService])
    ], StudentDetailComponent);
    return StudentDetailComponent;
}());
exports.StudentDetailComponent = StudentDetailComponent;


/***/ }),

/***/ "./src/app/students/students.component.ts":
/*!************************************************!*\
  !*** ./src/app/students/students.component.ts ***!
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
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var shared_module_1 = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var StudentsComponent = /** @class */ (function () {
    function StudentsComponent(appService, studentService, router) {
        this.appService = appService;
        this.studentService = studentService;
        this.router = router;
        this.sort = 'none'; // ['none', 'asc', 'dsc'];
        this.sort_tag = '';
        this.semesters = [];
        this.programs = [];
        this.classes = [];
        this.selected_status = this.appService.student_status.active.id;
        this.student_list = [];
        this.pageNumber = 1;
        this.limit = 15;
        this.currentPage = 1;
        this.totalItems = 0;
        this.itemsPerPage = 10;
        this.newFirstName = "";
        this.newLastName = "";
        this.newPhone = "";
        this.newEmail = "";
        this.newCode = "";
        this.newClass = 0;
        this.newProgram = 0;
        this.newNote = '';
        this.new_programs = [];
        this.new_classes = [];
        this.export_search_data = {};
    }
    StudentsComponent.prototype.ngOnInit = function () {
        this.getSemesterProgramClass();
    };
    StudentsComponent.prototype.getSemesterProgramClass = function () {
        var _this = this;
        this.appService.getSemesterProgramClass().subscribe(function (results) {
            _this.semesters = results.semesters;
            _this.selectedSemester = _this.semesters.length > 0 ? _this.semesters[_this.semesters.length - 1].id : 0;
            _this.classes = results.classes;
            _this.programs = _this.new_programs = results.programs;
            _this.selectedProgram = _this.programs.length > 0 ? _this.programs[0].id : 0;
            _this.onChangeProgram();
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't semester class program", 'error'); });
    };
    StudentsComponent.prototype.getCurrentList = function () {
        var _this = this;
        this.studentService.getListStudents(this.selectedProgram, this.selectedClasses, this.selected_status, this.searchText, this.pageNumber, this.itemsPerPage)
            .subscribe(function (result) {
            _this.student_list = result.student_list;
            _this.totalItems = result.total_items;
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't student list", 'error'); });
    };
    StudentsComponent.prototype.onChangeProgram = function () {
        this.filteredClasses = [{ id: 0, name: 'All Classes' }];
        for (var i = 0; i < this.classes.length; i++) {
            if (this.classes[i].program_id == this.selectedProgram) {
                this.filteredClasses.push(this.classes[i]);
            }
        }
        this.selectedClasses = this.filteredClasses[0].id;
        this.getCurrentList();
    };
    StudentsComponent.prototype.onPageChanged = function (event) {
        this.pageNumber = event.page;
        this.getCurrentList();
    };
    StudentsComponent.prototype.onCellClick = function (id) {
        this.router.navigate(['/students/', id]);
    };
    StudentsComponent.prototype.onChangeStudentCode = function () {
        this.newEmail = this.newCode + "@student.hcmus.edu.vn";
    };
    StudentsComponent.prototype.onOpenAddStudent = function () {
        this.newProgram = this.programs.length > 0 ? this.new_programs[this.new_programs.length - 1].id : 0;
        this.newEmail = "@student.hcmus.edu.vn";
        this.onChangeNewProgram();
        jQuery("#addStudentModal").modal("show");
    };
    StudentsComponent.prototype.onCancelAddStudent = function () {
        this.newFirstName = this.newLastName = this.newPhone = this.newEmail = this.newCode = this.newNote = '';
        this.newClass = this.newProgram = 0;
        jQuery("#addStudentModal").modal("hide");
    };
    StudentsComponent.prototype.onAddStudent = function () {
        var _this = this;
        this.studentService.addStudent(this.newProgram, this.newClass, this.newCode, this.newFirstName, this.newLastName, this.newEmail, this.newPhone, this.newNote)
            .subscribe(function (list) {
            _this.apiResult = list.result;
            _this.apiResultMessage = list.message;
            if (_this.apiResult == 'success') {
                jQuery("#addStudentModal").modal("hide");
                _this.newFirstName = _this.newLastName = _this.newPhone = _this.newEmail = _this.newCode = _this.newNote = '';
                _this.newClass = _this.newProgram = 0;
                _this.getCurrentList();
            }
            _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
        }, function (err) { _this.appService.showPNotify('failure', "Server Error! Can't add student", 'error'); });
    };
    StudentsComponent.prototype.onChangeNewProgram = function () {
        this.new_classes = [];
        for (var i = 0; i < this.classes.length; i++) {
            if (this.classes[i].program_id == this.newProgram) {
                this.new_classes.push(this.classes[i]);
            }
        }
        this.newClass = this.new_classes[0].id;
    };
    StudentsComponent.prototype.onImportStudent = function () {
        this.importModal.onOpenModal();
    };
    StudentsComponent.prototype.onCloseImport = function (event) {
        this.getSemesterProgramClass();
    };
    StudentsComponent.prototype.onExportStudent = function () {
        this.export_search_data = {};
        this.export_search_data['search_text'] = this.searchText;
        this.export_search_data['program_id'] = this.selectedProgram;
        this.export_search_data['class_id'] = this.selectedClasses;
        this.export_search_data['status'] = this.selected_status;
        this.exportModal.onOpenModal();
    };
    StudentsComponent.ctorParameters = function () { return [
        { type: shared_module_1.AppService },
        { type: shared_module_1.StudentService },
        { type: router_1.Router }
    ]; };
    __decorate([
        core_1.ViewChild(shared_module_1.ImportModalComponent, { static: false }),
        __metadata("design:type", shared_module_1.ImportModalComponent)
    ], StudentsComponent.prototype, "importModal", void 0);
    __decorate([
        core_1.ViewChild(shared_module_1.ExportModalComponent, { static: false }),
        __metadata("design:type", shared_module_1.ExportModalComponent)
    ], StudentsComponent.prototype, "exportModal", void 0);
    StudentsComponent = __decorate([
        core_1.Component({
            selector: 'app-students',
            template: __importDefault(__webpack_require__(/*! raw-loader!./students.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/students/students.component.html")).default
        }),
        __metadata("design:paramtypes", [shared_module_1.AppService, shared_module_1.StudentService, router_1.Router])
    ], StudentsComponent);
    return StudentsComponent;
}());
exports.StudentsComponent = StudentsComponent;


/***/ }),

/***/ "./src/app/students/students.module.ts":
/*!*********************************************!*\
  !*** ./src/app/students/students.module.ts ***!
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
var students_component_1 = __webpack_require__(/*! ./students.component */ "./src/app/students/students.component.ts");
var student_detail_component_1 = __webpack_require__(/*! ./student-detail/student-detail.component */ "./src/app/students/student-detail/student-detail.component.ts");
var pagination_1 = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
var tabs_1 = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
var ng2_file_upload_1 = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
var shared_module_1 = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var studentsRoutes = [
    { path: '', component: students_component_1.StudentsComponent },
    { path: ':id', component: student_detail_component_1.StudentDetailComponent }
];
var StudentsModule = /** @class */ (function () {
    function StudentsModule() {
    }
    StudentsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(studentsRoutes),
                pagination_1.PaginationModule.forRoot(),
                tabs_1.TabsModule.forRoot(),
                ng2_file_upload_1.FileUploadModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                students_component_1.StudentsComponent,
                student_detail_component_1.StudentDetailComponent
            ],
            providers: []
        })
    ], StudentsModule);
    return StudentsModule;
}());
exports.StudentsModule = StudentsModule;


/***/ })

}]);
//# sourceMappingURL=app-students-students-module.js.map