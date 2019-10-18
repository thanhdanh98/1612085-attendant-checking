(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-check-attendance-check-attendance-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/check-attendance/check-attendance-student/check-attendance-student.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/check-attendance/check-attendance-student/check-attendance-student.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"x_panel\">\r\n        <div class=\"x_title\">\r\n            <h3>Check Attendance ({{selected_attendance['created_at'] | date:'short'}})</h3>\r\n            <div class=\"clearfix\"></div>\r\n        </div>\r\n        <div class=\"x_content\">\r\n            <div *ngIf=\"delegate_code_checked\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-1\" style=\"text-align: right\">\r\n                        <h4>Course:</h4>\r\n                    </div>\r\n                    <div class=\"col-xs-5\">\r\n                        <h4>{{selected_attendance['course_code']}} - {{selected_attendance['course_name']}}</h4>\r\n                    </div>\r\n                    <div class=\"col-xs-1\" style=\"text-align: right;\">\r\n                        <h4>Class: </h4>\r\n                    </div>\r\n                    <div class=\"col-xs-1\">\r\n                        <h4>{{selected_attendance['class_name']}}</h4>\r\n                    </div>\r\n                    <div class=\"col-xs-2\" style=\"text-align: right;\">\r\n                        <h4>Present/Total: </h4>\r\n                    </div>\r\n                    <div class=\"col-xs-2\">\r\n                        <h4>{{selected_attendance['student_count']}} / {{selected_attendance['total_stud']}}</h4>\r\n                    </div>\r\n                </div>\r\n            <div class=\"row\">\r\n                <tabset>\r\n                    <tab heading='Current Week'>\r\n                        <br>\r\n                        <ng-container *ngFor=\"let student of check_attendance_list;let i = index;\">\r\n                            <ng-container *ngIf=\"!student.exemption\">\r\n                                <div class=\"col-sm-3 col-md-55 text-center\">\r\n                                    <div class=\"thumbnail\" style=\"height: 190px\">\r\n                                        <ng-template #tolTemplate1>\r\n                                            <div>Method : {{student.attendance_details[student.attendance_details.length-1].method}}</div>\r\n                                        </ng-template>\r\n                                        <div class=\"image\" (click)=\"onAttendanceCheckClick(i,student.attendance_details.length-1)\" [tooltip]=\"tolTemplate1\" container=\"body\">\r\n                                            <div class=\"checked_overlay\" *ngIf=\"student.attendance_details[student.attendance_details.length-1].attendance_type\"><i [ngClass]=\"['fa avatar_check', student.attendance_details[student.attendance_details.length-1].icon]\"></i></div>\r\n                                            <img [src]=\"student.avatar\" class=\"attendance_avatar\">\r\n                                        </div>\r\n                                        <div class=\"caption\">\r\n                                            <p><label>{{student.code}}</label></p>\r\n                                            <p><label>{{student.name}}</label></p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-container>\r\n                        </ng-container>\r\n                    </tab>\r\n                    <tab heading='History'>\r\n                        <table class=\"table table-bordered text-center\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>No</th>\r\n                                    <th>Code</th>\r\n                                    <th>Name</th>\r\n                                    <th colspan=\"2\">Week 1</th>\r\n                                    <th colspan=\"2\">Week 2</th>\r\n                                    <th colspan=\"2\">Week 3</th>\r\n                                    <th colspan=\"2\">Week 4</th>\r\n                                    <th colspan=\"2\">Week 5</th>\r\n                                    <th colspan=\"2\">Week 6</th>\r\n                                    <th colspan=\"2\">Week 7</th>\r\n                                    <th colspan=\"2\">Week 8</th>\r\n                                    <th colspan=\"2\">Week 9</th>\r\n                                    <th colspan=\"2\">Week 10</th>\r\n                                    <th colspan=\"2\">Week 11</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let student of check_attendance_list;let i = index;\">\r\n                                    <td>{{i+1}}</td>\r\n                                    <td>{{student.code}}</td>\r\n                                    <td>{{student.name}}</td>\r\n                                    <ng-container *ngIf=\"student.exemption\">\r\n                                        <td class=\"gray_background\" colspan=\"22\" style=\"font-weight: bold;\">Exempted</td>\r\n                                    </ng-container>\r\n                                    <ng-container *ngIf=\"!student.exemption\">\r\n                                        <ng-container *ngFor=\"let attendance_detail of student.attendance_details;let j = index\">\r\n                                            <ng-template #tolTemplate>\r\n                                                <div>Method : {{attendance_detail.method}}</div>\r\n                                                <div>Created at : {{attendance_detail.created_at | date:'short'}}</div>\r\n                                                <div>Edited at : {{attendance_detail.attendance_time | date:'short'}}</div>\r\n                                                <div *ngIf=\"attendance_detail.edited_by\">Edited by : {{attendance_detail.editor}}</div>\r\n                                                <div *ngIf=\"attendance_detail.edited_by\">Reason : {{attendance_detail.edited_reason}}</div>\r\n                                            </ng-template>\r\n                                            <td width=\"3%\" [ngClass]=\"{'gray_background': j < student.attendance_details.length-1, 'warning_background': attendance_detail.edited_by}\" [tooltip]=\"tolTemplate\" container=\"body\"><i [ngClass]=\"['fa attendance-check', attendance_detail.icon]\"></i></td>\r\n                                        </ng-container>\r\n                                        <ng-container *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]\">\r\n                                            <td class=\"gray_background\" width=\"3%\" *ngIf=\"number > student.attendance_details.length\"></td>\r\n                                        </ng-container>\r\n                                    </ng-container>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </tab>\r\n                </tabset>\r\n            </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"sessionStoppedModal\" role=\"dialog\">\r\n    <div class=\"vertical-alignment-helper\">\r\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title\">{{stopped_modal_message}}</h4>\r\n                </div>\r\n                <div class=\"modal-footer text-center\">\r\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"router.navigate(['/dashboard'])\">Close</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"enterDelegateCodeModal\" role=\"dialog\">\r\n    <div class=\"vertical-alignment-helper\">\r\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\" (keydown)=\"keyDownFunction($event)\">\r\n                <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title\">Enter Delegate Code</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"delegate_code\">\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"cancelCheckDelegateCode()\">Cancel</button>\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"checkDelegateCode()\">Submit</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/check-attendance/check-attendance-teacher/check-attendance-teacher.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/check-attendance/check-attendance-teacher/check-attendance-teacher.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"x_panel\">\r\n        <div class=\"x_title\">\r\n            <h3>Check Attendance ({{selected_attendance['created_at'] | date:'short'}})</h3>\r\n            <div class=\"pull-right\">\r\n                <select class=\"form-control\" [(ngModel)]=\"selected_attendance_id\" (ngModelChange)=\"onChangeAttendance()\">\r\n                    <option *ngFor=\"let attendance of opening_attendances\" [value]=\"attendance.id\">{{attendance.course_name}}-{{attendance.class_name}}</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n        </div>\r\n        <div class=\"x_content\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-1\" style=\"text-align: right\">\r\n                    <h4>Course:</h4>\r\n                </div>\r\n                <div class=\"col-xs-5\">\r\n                    <h4>{{selected_attendance['course_code']}} - {{selected_attendance['course_name']}}</h4>\r\n                </div>\r\n                <div class=\"col-xs-1\" style=\"text-align: right;\">\r\n                    <h4>Class: </h4>\r\n                </div>\r\n                <div class=\"col-xs-1\">\r\n                    <h4>{{selected_attendance['class_name']}}</h4>\r\n                </div>\r\n                <div class=\"col-xs-2\" style=\"text-align: right;\">\r\n                    <h4>Present/Total: </h4>\r\n                </div>\r\n                <div class=\"col-xs-2\">\r\n                    <h4>{{selected_attendance['student_count']}} / {{selected_attendance['total_stud']}}</h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"pull-right\">\r\n                    <button class=\"btn btn-primary\" (click)=\"generateQRCode()\"><i class=\"fa fa-qrcode\"></i> QR code</button>\r\n                    <button class=\"btn btn-primary\" (click)=\"generateDelegateCode()\"><i class=\"fa fa-external-link-square\"></i> Delegate Code</button>\r\n                    <button class=\"btn btn-primary\" (click)=\"generateQuiz()\"><i class=\"fa fa-question-circle\"></i> Quiz</button>\r\n                </div>\r\n            </div>\r\n            <hr>\r\n            <div class=\"row\">\r\n                <tabset [justified]=\"true\">\r\n                    <tab heading='Current Week'>\r\n                        <br>\r\n                        <ng-container *ngFor=\"let student of check_attendance_list;let i = index;\">\r\n                            <ng-container *ngIf=\"!student.exemption\">\r\n                                <div class=\"col-sm-3 col-md-55 text-center\">\r\n                                    <div class=\"thumbnail\" style=\"height: 190px\">\r\n                                        <ng-template #tolTemplate1>\r\n                                            <div>Method : {{student.attendance_details[student.attendance_details.length-1].method}}</div>\r\n                                            <div>Checked at : {{student.attendance_details[student.attendance_details.length-1].attendance_time | date:'short'}}</div>\r\n                                        </ng-template>\r\n                                        <div class=\"image\" (click)=\"onAttendanceCheckClick(i,student.attendance_details.length-1)\" [tooltip]=\"tolTemplate1\" container=\"body\">\r\n                                            <div class=\"checked_overlay\" *ngIf=\"student.attendance_details[student.attendance_details.length-1].attendance_type\"><i [ngClass]=\"['fa avatar_check', student.attendance_details[student.attendance_details.length-1]['icon']]\"></i></div>\r\n                                            <img [src]=\"student.avatar\" class=\"attendance_avatar\">\r\n                                        </div>\r\n                                        <div class=\"caption\">\r\n                                            <p><label>{{student.code}}</label></p>\r\n                                            <p><label>{{student.name}}</label></p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-container>\r\n                        </ng-container>\r\n                    </tab>\r\n                    <tab class=\"text-center\" heading='Class management'>\r\n                        <br>\r\n                        <label class=\"note\">Note: Student's interactions: No. answered questions (<i class=\"fa fa-question-circle-o\"></i>), No. discussions (<i class=\"fa fa-comments\"></i>), No. presentations (<i class=\"fa fa-laptop\"></i>)</label>\r\n                        <br>\r\n                        <ng-container *ngFor=\"let student of check_attendance_list;let i = index;\">\r\n                            <ng-container *ngIf=\"!student.exemption\">\r\n                                <div class=\"col-sm-3 col-md-55 text-center\" *ngIf=\"student.attendance_details[student.attendance_details.length-1].attendance_type\">\r\n                                    <div class=\"thumbnail\" style=\"height: 220px\">\r\n                                        <div class=\"image\">\r\n                                            <img [src]=\"student.avatar\" class=\"attendance_avatar\">\r\n                                        </div>\r\n                                        <div class=\"caption\">\r\n                                            <div class=\"row student_interaction\">\r\n                                                <button class=\"btn btn-round btn-primary\" (click)=\"confirmInteraction(student,appService.student_interaction_type.answer_question)\"><i class=\"fa fa-question-circle-o\"></i> {{student.attendance_details[student.attendance_details.length-1].answered_questions}}</button>\r\n                                                <button class=\"btn btn-round btn-primary\" (click)=\"confirmInteraction(student,appService.student_interaction_type.discuss)\"><i class=\"fa fa-comments\"></i> {{student.attendance_details[student.attendance_details.length-1].discussions}}</button>\r\n                                                <button class=\"btn btn-round btn-primary\" (click)=\"confirmInteraction(student,appService.student_interaction_type.present)\"><i class=\"fa fa-laptop\"></i> {{student.attendance_details[student.attendance_details.length-1].presentations}}</button>\r\n                                            </div>\r\n                                            <p><label>{{student.code}}</label></p>\r\n                                            <p><label>{{student.name}}</label></p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-container>\r\n                        </ng-container>\r\n                    </tab>\r\n                    <tab heading='History'>\r\n                        <br>\r\n                        <button class=\"pull-right btn-primary btn\" (click)=\"changeHistory()\">\r\n                            <span *ngIf=\"is_show_attendance_history\">Show interaction history</span>\r\n                            <span *ngIf=\"!is_show_attendance_history\">Show attendance history</span>\r\n                        </button>\r\n                        <table *ngIf=\"is_show_attendance_history\" class=\"table table-bordered text-center\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>No</th>\r\n                                    <th>Code</th>\r\n                                    <th>Name</th>\r\n                                    <th colspan=\"2\">Week 1</th>\r\n                                    <th colspan=\"2\">Week 2</th>\r\n                                    <th colspan=\"2\">Week 3</th>\r\n                                    <th colspan=\"2\">Week 4</th>\r\n                                    <th colspan=\"2\">Week 5</th>\r\n                                    <th colspan=\"2\">Week 6</th>\r\n                                    <th colspan=\"2\">Week 7</th>\r\n                                    <th colspan=\"2\">Week 8</th>\r\n                                    <th colspan=\"2\">Week 9</th>\r\n                                    <th colspan=\"2\">Week 10</th>\r\n                                    <th colspan=\"2\">Week 11</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let student of check_attendance_list;let i = index;\">\r\n                                    <td>{{i+1}}</td>\r\n                                    <td>{{student.code}}</td>\r\n                                    <td>{{student.name}}</td>\r\n                                    <ng-container *ngIf=\"student.exemption\">\r\n                                        <td class=\"gray_background\" colspan=\"22\" style=\"font-weight: bold;\">Exempted</td>\r\n                                    </ng-container>\r\n                                    <ng-container *ngIf=\"!student.exemption\">\r\n                                        <ng-container *ngFor=\"let attendance_detail of student.attendance_details;let j = index\">\r\n                                            <ng-template #tolTemplate>\r\n                                                <div>Method : {{attendance_detail.method}}</div>\r\n                                                <div>Created at : {{attendance_detail.created_at | date:'short'}}</div>\r\n                                                <div>Checked at : {{attendance_detail.attendance_time | date:'short'}}</div>\r\n                                                <div *ngIf=\"attendance_detail.edited_by\">Edited by : {{attendance_detail.editor}}</div>\r\n                                                <div *ngIf=\"attendance_detail.edited_by\">Reason : {{attendance_detail.edited_reason}}</div>\r\n                                            </ng-template>\r\n                                            <td width=\"3%\" [ngClass]=\"{'gray_background': j < student.attendance_details.length-1, 'warning_background': attendance_detail.edited_by}\" [tooltip]=\"tolTemplate\" container=\"body\"><i [ngClass]=\"['fa attendance-check', attendance_detail.icon]\"></i></td>\r\n                                        </ng-container>\r\n                                        <ng-container *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]\">\r\n                                            <td class=\"gray_background\" width=\"3%\" *ngIf=\"number > student.attendance_details.length\"></td>\r\n                                        </ng-container>\r\n                                    </ng-container>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <div *ngIf=\"!is_show_attendance_history\">\r\n                            <div>\r\n                                <label>Student's interaction : </label>\r\n                                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" [value]=\"appService.student_interaction_type.answer_question\" [(ngModel)]=\"selected_interaction\">Answered questions (<i class=\"fa fa-question-circle-o\"></i>)</label>\r\n                                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" [value]=\"appService.student_interaction_type.discuss\" [(ngModel)]=\"selected_interaction\">Discussions (<i class=\"fa fa-comments\"></i>)</label>\r\n                                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" [value]=\"appService.student_interaction_type.present\" [(ngModel)]=\"selected_interaction\">Presentations (<i class=\"fa fa-laptop\"></i>)</label>\r\n                            </div>\r\n                            <table class=\"table table-bordered text-center\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Code</th>\r\n                                        <th>Name</th>\r\n                                        <th colspan=\"2\">Week 1</th>\r\n                                        <th colspan=\"2\">Week 2</th>\r\n                                        <th colspan=\"2\">Week 3</th>\r\n                                        <th colspan=\"2\">Week 4</th>\r\n                                        <th colspan=\"2\">Week 5</th>\r\n                                        <th colspan=\"2\">Week 6</th>\r\n                                        <th colspan=\"2\">Week 7</th>\r\n                                        <th colspan=\"2\">Week 8</th>\r\n                                        <th colspan=\"2\">Week 9</th>\r\n                                        <th colspan=\"2\">Week 10</th>\r\n                                        <th colspan=\"2\">Week 11</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let student of check_attendance_list;let i = index;\">\r\n                                        <td>{{student.code}}</td>\r\n                                        <td>{{student.name}}</td>\r\n                                        <ng-container *ngFor=\"let attendance_detail of student.attendance_details;let j = index\">\r\n                                            <td [ngClass]=\"{'gray_background': j < student.attendance_details.length-1}\"><label *ngIf=\"selected_interaction == appService.student_interaction_type.answer_question\">{{attendance_detail.answered_questions}}</label><label *ngIf=\"selected_interaction == appService.student_interaction_type.discuss\">{{attendance_detail.discussions}}</label><label *ngIf=\"selected_interaction == appService.student_interaction_type.present\">{{attendance_detail.presentations}}</label></td>\r\n                                        </ng-container>\r\n                                        <ng-container *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]\">\r\n                                            <td class=\"gray_background\" width=\"3%\" *ngIf=\"number > student.attendance_details.length\"></td>\r\n                                        </ng-container>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </tab>\r\n                </tabset>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"pull-right\">\r\n                    <button class=\"btn btn-danger\" (click)=\"onCancelAttendanceSession()\">Cancel Attendance Session</button>\r\n                    <button class=\"btn btn-success\" (click)=\"onCloseAttendanceSession()\">Close Attendance Session</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"confirmCancelModal\" role=\"dialog\">\r\n    <div class=\"vertical-alignment-helper\">\r\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                    <h4 class=\"modal-title\">Confirm Cancel Session</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div class=\"row\">\r\n                        *All data of this session will be deleted.\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                    <button type=\"button\" class=\"btn btn-default btn-danger\" (click)=\"confirmCancelAttendanceSession()\" data-dismiss=\"modal\">Confirm</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"confirmEndModal\" role=\"dialog\">\r\n    <div class=\"vertical-alignment-helper\">\r\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                    <h4 class=\"modal-title\">Confirm End Session</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div class=\"row\">\r\n                        This session won't be updated once it's closed.\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                    <button type=\"button\" class=\"btn btn-default btn-success\" (click)=\"confirmCloseAttendanceSession()\" data-dismiss=\"modal\">Confirm</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"sessionStoppedModal\" role=\"dialog\">\r\n    <div class=\"vertical-alignment-helper\">\r\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title\">{{stopped_modal_message}}</h4>\r\n                </div>\r\n                <div class=\"modal-footer text-center\">\r\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"router.navigate(['/dashboard'])\">Close</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"delegateCodeModal\" role=\"dialog\">\r\n    <div class=\"vertical-alignment-helper\">\r\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                    <h4 class=\"modal-title\">Delegate Code</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <h3 class=\"well well-sm text-center\">{{delegate_code}}</h3>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/check-attendance/check-attendance.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/check-attendance/check-attendance.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<check-attendance-teacher *ngIf=\"authService.current_user.role_id == appService.userType.teacher\"></check-attendance-teacher>\r\n<check-attendance-student *ngIf=\"authService.current_user.role_id == appService.userType.student\"></check-attendance-student>\r\n");

/***/ }),

/***/ "./src/app/check-attendance/check-attendance-student/check-attendance-student.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/check-attendance/check-attendance-student/check-attendance-student.component.ts ***!
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
var angular_2_local_storage_1 = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/fesm5/angular-2-local-storage.js");
var CheckAttendanceStudentComponent = /** @class */ (function () {
    function CheckAttendanceStudentComponent(checkAttendanceService, appConfig, socketService, authService, attendanceService, localStorage, appService, router) {
        var _this = this;
        this.checkAttendanceService = checkAttendanceService;
        this.appConfig = appConfig;
        this.socketService = socketService;
        this.authService = authService;
        this.attendanceService = attendanceService;
        this.localStorage = localStorage;
        this.appService = appService;
        this.router = router;
        this.opening_attendances = [];
        this.selected_attendance = {};
        this.selected_attendance_id = 0;
        this.check_attendance_list = [];
        this.delegate_code_checked = false;
        this.delegate_code = '';
        this.delegate_detail = {};
        socketService.consumeEventOnCheckAttendanceUpdated();
        socketService.invokeCheckAttendanceUpdated.subscribe(function (result) {
            if (_this.delegate_detail['course_id'] == result['course_id'] && _this.delegate_detail['class_id'] == result['class_id']) {
                _this.getOpeningAttendance();
            }
        });
        socketService.consumeEventOnCheckAttendanceStopped();
        socketService.invokeCheckAttendanceStopped.subscribe(function (result) {
            if (_this.delegate_detail['course_id'] == result['course_id'] && _this.delegate_detail['class_id'] == result['class_id']) {
                _this.stopped_modal_message = "Session is " + result['message'];
                jQuery('#sessionStoppedModal').modal({ backdrop: 'static', keyboard: false });
            }
        });
    }
    CheckAttendanceStudentComponent.prototype.sortAttendanceList = function () {
        var temp_check_attendance_list = [];
        for (var i = 0; i < this.check_attendance_list.length; i++) {
            var attendance_details = this.check_attendance_list[i].attendance_details;
            if (!attendance_details[attendance_details.length - 1].attendance_type) {
                var temp_attendance_details = [];
                for (var j = 0; j < attendance_details.length; j++) {
                    temp_attendance_details.push({
                        attendance_type: attendance_details[j].attendance_type,
                        attendance_time: attendance_details[j].attendance_time,
                        attendance_id: attendance_details[j].attendance_id,
                        created_at: attendance_details[j].created_at,
                        edited_reason: attendance_details[j].edited_reason,
                        edited_by: attendance_details[j].edited_by,
                        editor: attendance_details[j].editor,
                    });
                }
                temp_check_attendance_list.push({
                    id: this.check_attendance_list[i].id,
                    code: this.check_attendance_list[i].code,
                    name: this.check_attendance_list[i].name,
                    exemption: this.check_attendance_list[i].exemption,
                    avatar: this.check_attendance_list[i].avatar,
                    attendance_details: temp_attendance_details
                });
            }
        }
        for (var i = 0; i < this.check_attendance_list.length; i++) {
            var attendance_details = this.check_attendance_list[i].attendance_details;
            if (attendance_details[attendance_details.length - 1].attendance_type) {
                var temp_attendance_details = [];
                for (var j = 0; j < attendance_details.length; j++) {
                    temp_attendance_details.push({
                        attendance_type: attendance_details[j].attendance_type,
                        attendance_time: attendance_details[j].attendance_time,
                        attendance_id: attendance_details[j].attendance_id,
                        created_at: attendance_details[j].created_at,
                        edited_reason: attendance_details[j].edited_reason,
                        edited_by: attendance_details[j].edited_by,
                        editor: attendance_details[j].editor,
                    });
                }
                temp_check_attendance_list.push({
                    id: this.check_attendance_list[i].id,
                    code: this.check_attendance_list[i].code,
                    name: this.check_attendance_list[i].name,
                    exemption: this.check_attendance_list[i].exemption,
                    avatar: this.check_attendance_list[i].avatar,
                    attendance_details: temp_attendance_details
                });
            }
        }
        for (var i = 0; i < this.check_attendance_list.length; i++) {
            this.check_attendance_list[i].id = temp_check_attendance_list[i].id;
            this.check_attendance_list[i].code = temp_check_attendance_list[i].code;
            this.check_attendance_list[i].name = temp_check_attendance_list[i].name;
            this.check_attendance_list[i].exemption = temp_check_attendance_list[i].exemption;
            this.check_attendance_list[i].avatar = temp_check_attendance_list[i].avatar;
            for (var j = 0; j < temp_check_attendance_list[i].attendance_details.length; j++) {
                this.check_attendance_list[i].attendance_details[j].attendance_id = temp_check_attendance_list[i].attendance_details[j].attendance_id;
                this.check_attendance_list[i].attendance_details[j].attendance_type = temp_check_attendance_list[i].attendance_details[j].attendance_type;
                this.check_attendance_list[i].attendance_details[j].attendance_time = temp_check_attendance_list[i].attendance_details[j].attendance_time;
                this.check_attendance_list[i].attendance_details[j].created_at = temp_check_attendance_list[i].attendance_details[j].created_at;
                this.check_attendance_list[i].attendance_details[j].edited_reason = temp_check_attendance_list[i].attendance_details[j].edited_reason;
                this.check_attendance_list[i].attendance_details[j].edited_by = temp_check_attendance_list[i].attendance_details[j].edited_by;
                this.check_attendance_list[i].attendance_details[j].editor = temp_check_attendance_list[i].attendance_details[j].editor;
                switch (this.check_attendance_list[i].attendance_details[j].attendance_type) {
                    case this.appService.attendance_type.checklist:
                        this.check_attendance_list[i].attendance_details[j]['icon'] = 'fa-check';
                        this.check_attendance_list[i].attendance_details[j]['method'] = 'Checklist';
                        break;
                    case this.appService.attendance_type.qr:
                        this.check_attendance_list[i].attendance_details[j]['icon'] = 'fa-qrcode';
                        this.check_attendance_list[i].attendance_details[j]['method'] = 'QR Code';
                        break;
                    case this.appService.attendance_type.quiz:
                        this.check_attendance_list[i].attendance_details[j]['icon'] = 'fa-question-circle';
                        this.check_attendance_list[i].attendance_details[j]['method'] = 'Quiz';
                        break;
                    case this.appService.attendance_type.permited_absent:
                        this.check_attendance_list[i].attendance_details[j]['icon'] = 'fa-envelope-square';
                        this.check_attendance_list[i].attendance_details[j]['method'] = 'Permited Absent';
                        break;
                    default:
                        this.check_attendance_list[i].attendance_details[j]['icon'] = '';
                        this.check_attendance_list[i].attendance_details[j]['method'] = 'Absent';
                        break;
                }
            }
        }
    };
    CheckAttendanceStudentComponent.prototype.getCheckAttendanceList = function () {
        var _this = this;
        this.attendanceService.getCheckAttendanceList(this.delegate_detail['course_id'], this.delegate_detail['class_id']).subscribe(function (result) {
            _this.apiResult = result.result;
            _this.check_attendance_list = result.check_attendance_list;
            _this.sortAttendanceList();
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get check_attendance_list", 'error'); });
    };
    CheckAttendanceStudentComponent.prototype.ngOnInit = function () {
        jQuery('#enterDelegateCodeModal').modal({ backdrop: 'static', keyboard: false });
    };
    CheckAttendanceStudentComponent.prototype.ngOnDestroy = function () {
        this.socketService.stopEventOnCheckAttendanceStopped();
        this.socketService.stopEventOnCheckAttendanceUpdated();
    };
    CheckAttendanceStudentComponent.prototype.cancelCheckDelegateCode = function () {
        jQuery("#enterDelegateCodeModal").modal("hide");
        this.router.navigate(['/dashboard']);
    };
    CheckAttendanceStudentComponent.prototype.checkDelegateCode = function () {
        var _this = this;
        this.checkAttendanceService.checkDelegateCode(this.delegate_code).subscribe(function (result) {
            _this.apiResult = result.result;
            _this.apiResultMessage = result.message;
            if (_this.apiResult == 'success') {
                _this.delegate_detail = result.delegate_detail;
                _this.delegate_code_checked = true;
                _this.getOpeningAttendance();
                jQuery("#enterDelegateCodeModal").modal("hide");
            }
            else {
                _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, 'error');
            }
        }, function (error) {
            _this.appService.showPNotify('failure', "Server Error! Can't check delegate code", 'error');
        });
    };
    CheckAttendanceStudentComponent.prototype.getOpeningAttendance = function () {
        var _this = this;
        this.attendanceService.getOpeningAttendanceCourse(this.delegate_detail['created_by']).subscribe(function (result) {
            if (result.result == 'success') {
                _this.opening_attendances = result.opening_attendances;
                for (var j = 0; j < _this.opening_attendances.length; j++) {
                    if (_this.opening_attendances[j].course_id == _this.delegate_detail['course_id'] && _this.opening_attendances[j].class_id == _this.delegate_detail['class_id']) {
                        _this.selected_attendance = _this.opening_attendances[j];
                        _this.selected_attendance_id = _this.opening_attendances[j].id;
                        break;
                    }
                }
            }
            _this.getCheckAttendanceList();
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get opening attendances", 'error'); });
    };
    CheckAttendanceStudentComponent.prototype.onAttendanceCheckClick = function (student_index, attendance_detail_index) {
        var _this = this;
        var type;
        if (this.check_attendance_list[student_index].attendance_details[attendance_detail_index].attendance_type) {
            type = this.appService.attendance_type.absent;
        }
        else {
            type = this.appService.attendance_type.checklist;
        }
        this.checkAttendanceService.checkList(this.check_attendance_list[student_index].attendance_details[attendance_detail_index].attendance_id, this.check_attendance_list[student_index].id, type).subscribe(function (result) {
            if (_this.apiResult == 'success') {
                _this.check_attendance_list[student_index].attendance_details[attendance_detail_index].attendance_type = type;
                if (type) {
                    _this.check_attendance_list[student_index].attendance_details[attendance_detail_index]['icon'] = 'fa-check';
                    _this.check_attendance_list[student_index].attendance_details[attendance_detail_index]['method'] = 'Checklist';
                }
                else {
                    _this.check_attendance_list[student_index].attendance_details[attendance_detail_index]['icon'] = '';
                    _this.check_attendance_list[student_index].attendance_details[attendance_detail_index]['method'] = 'Absent';
                }
                _this.sortAttendanceList();
                _this.socketService.emitEventOnCheckAttendanceUpdated({ course_id: _this.delegate_detail['course_id'], class_id: _this.delegate_detail['class_id'] });
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't check_list", 'error'); });
    };
    CheckAttendanceStudentComponent.prototype.keyDownFunction = function (event) {
        if (event.keyCode == 13) {
            this.checkDelegateCode();
        }
    };
    CheckAttendanceStudentComponent.ctorParameters = function () { return [
        { type: shared_module_1.CheckAttendanceService },
        { type: shared_module_1.AppConfig },
        { type: shared_module_1.SocketService },
        { type: shared_module_1.AuthService },
        { type: shared_module_1.AttendanceService },
        { type: angular_2_local_storage_1.LocalStorageService },
        { type: shared_module_1.AppService },
        { type: router_1.Router }
    ]; };
    CheckAttendanceStudentComponent = __decorate([
        core_1.Component({
            selector: 'check-attendance-student',
            template: __importDefault(__webpack_require__(/*! raw-loader!./check-attendance-student.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/check-attendance/check-attendance-student/check-attendance-student.component.html")).default
        }),
        __metadata("design:paramtypes", [shared_module_1.CheckAttendanceService, shared_module_1.AppConfig, shared_module_1.SocketService,
            shared_module_1.AuthService, shared_module_1.AttendanceService, angular_2_local_storage_1.LocalStorageService, shared_module_1.AppService, router_1.Router])
    ], CheckAttendanceStudentComponent);
    return CheckAttendanceStudentComponent;
}());
exports.CheckAttendanceStudentComponent = CheckAttendanceStudentComponent;


/***/ }),

/***/ "./src/app/check-attendance/check-attendance-teacher/check-attendance-teacher.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/check-attendance/check-attendance-teacher/check-attendance-teacher.component.ts ***!
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
var angular_2_local_storage_1 = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/fesm5/angular-2-local-storage.js");
var CheckAttendanceTeacherComponent = /** @class */ (function () {
    function CheckAttendanceTeacherComponent(checkAttendanceService, appConfig, socketService, authService, attendanceService, localStorage, appService, router, studentService) {
        var _this = this;
        this.checkAttendanceService = checkAttendanceService;
        this.appConfig = appConfig;
        this.socketService = socketService;
        this.authService = authService;
        this.attendanceService = attendanceService;
        this.localStorage = localStorage;
        this.appService = appService;
        this.router = router;
        this.studentService = studentService;
        this.opening_attendances = [];
        this.selected_attendance = {};
        this.selected_attendance_id = 0;
        this.delegate_code = '';
        this.check_attendance_list = [];
        this.is_show_attendance_history = true;
        socketService.consumeEventOnCheckAttendanceUpdated();
        socketService.invokeCheckAttendanceUpdated.subscribe(function (result) {
            if (_this.selected_course_id == result['course_id'] && _this.selected_class_id == result['class_id']) {
                _this.getOpeningAttendance();
            }
        });
        socketService.consumeEventOnCheckAttendanceCreated();
        socketService.invokeCheckAttendanceCreated.subscribe(function (result) {
            _this.getOpeningAttendance();
        });
        socketService.consumeEventOnCheckAttendanceStopped();
        socketService.invokeCheckAttendanceStopped.subscribe(function (result) {
            if (_this.selected_course_id == result['course_id'] && _this.selected_class_id == result['class_id']) {
                _this.stopped_modal_message = "Session is " + result['message'];
                jQuery('#sessionStoppedModal').modal({ backdrop: 'static', keyboard: false });
            }
        });
    }
    CheckAttendanceTeacherComponent.prototype.changeHistory = function () {
        this.is_show_attendance_history = !this.is_show_attendance_history;
    };
    CheckAttendanceTeacherComponent.prototype.sortAttendanceList = function () {
        var temp_check_attendance_list = [];
        for (var i = 0; i < this.check_attendance_list.length; i++) {
            var attendance_details = this.check_attendance_list[i].attendance_details;
            if (!attendance_details[attendance_details.length - 1].attendance_type) {
                var temp_attendance_details = [];
                for (var j = 0; j < attendance_details.length; j++) {
                    temp_attendance_details.push({
                        attendance_type: attendance_details[j].attendance_type,
                        attendance_time: attendance_details[j].attendance_time,
                        attendance_id: attendance_details[j].attendance_id,
                        created_at: attendance_details[j].created_at,
                        edited_reason: attendance_details[j].edited_reason,
                        edited_by: attendance_details[j].edited_by,
                        editor: attendance_details[j].editor,
                        answered_questions: attendance_details[j].answered_questions,
                        discussions: attendance_details[j].discussions,
                        presentations: attendance_details[j].presentations,
                    });
                }
                temp_check_attendance_list.push({
                    id: this.check_attendance_list[i].id,
                    code: this.check_attendance_list[i].code,
                    name: this.check_attendance_list[i].name,
                    exemption: this.check_attendance_list[i].exemption,
                    avatar: this.check_attendance_list[i].avatar,
                    attendance_details: temp_attendance_details
                });
            }
        }
        for (var i = 0; i < this.check_attendance_list.length; i++) {
            var attendance_details = this.check_attendance_list[i].attendance_details;
            if (attendance_details[attendance_details.length - 1].attendance_type) {
                var temp_attendance_details = [];
                for (var j = 0; j < attendance_details.length; j++) {
                    temp_attendance_details.push({
                        attendance_type: attendance_details[j].attendance_type,
                        attendance_time: attendance_details[j].attendance_time,
                        attendance_id: attendance_details[j].attendance_id,
                        created_at: attendance_details[j].created_at,
                        edited_reason: attendance_details[j].edited_reason,
                        edited_by: attendance_details[j].edited_by,
                        editor: attendance_details[j].editor,
                        answered_questions: attendance_details[j].answered_questions,
                        discussions: attendance_details[j].discussions,
                        presentations: attendance_details[j].presentations,
                    });
                }
                temp_check_attendance_list.push({
                    id: this.check_attendance_list[i].id,
                    code: this.check_attendance_list[i].code,
                    name: this.check_attendance_list[i].name,
                    exemption: this.check_attendance_list[i].exemption,
                    avatar: this.check_attendance_list[i].avatar,
                    attendance_details: temp_attendance_details
                });
            }
        }
        for (var i = 0; i < this.check_attendance_list.length; i++) {
            this.check_attendance_list[i].id = temp_check_attendance_list[i].id;
            this.check_attendance_list[i].code = temp_check_attendance_list[i].code;
            this.check_attendance_list[i].name = temp_check_attendance_list[i].name;
            this.check_attendance_list[i].exemption = temp_check_attendance_list[i].exemption;
            this.check_attendance_list[i].avatar = temp_check_attendance_list[i].avatar;
            for (var j = 0; j < temp_check_attendance_list[i].attendance_details.length; j++) {
                this.check_attendance_list[i].attendance_details[j].attendance_id = temp_check_attendance_list[i].attendance_details[j].attendance_id;
                this.check_attendance_list[i].attendance_details[j].attendance_type = temp_check_attendance_list[i].attendance_details[j].attendance_type;
                this.check_attendance_list[i].attendance_details[j].attendance_time = temp_check_attendance_list[i].attendance_details[j].attendance_time;
                this.check_attendance_list[i].attendance_details[j].created_at = temp_check_attendance_list[i].attendance_details[j].created_at;
                this.check_attendance_list[i].attendance_details[j].edited_reason = temp_check_attendance_list[i].attendance_details[j].edited_reason;
                this.check_attendance_list[i].attendance_details[j].edited_by = temp_check_attendance_list[i].attendance_details[j].edited_by;
                this.check_attendance_list[i].attendance_details[j].editor = temp_check_attendance_list[i].attendance_details[j].editor;
                this.check_attendance_list[i].attendance_details[j].answered_questions = temp_check_attendance_list[i].attendance_details[j].answered_questions;
                this.check_attendance_list[i].attendance_details[j].discussions = temp_check_attendance_list[i].attendance_details[j].discussions;
                this.check_attendance_list[i].attendance_details[j].presentations = temp_check_attendance_list[i].attendance_details[j].presentations;
                switch (this.check_attendance_list[i].attendance_details[j].attendance_type) {
                    case this.appService.attendance_type.checklist:
                        this.check_attendance_list[i].attendance_details[j]['icon'] = 'fa-check';
                        this.check_attendance_list[i].attendance_details[j]['method'] = 'Checklist';
                        break;
                    case this.appService.attendance_type.qr:
                        this.check_attendance_list[i].attendance_details[j]['icon'] = 'fa-qrcode';
                        this.check_attendance_list[i].attendance_details[j]['method'] = 'QR Code';
                        break;
                    case this.appService.attendance_type.quiz:
                        this.check_attendance_list[i].attendance_details[j]['icon'] = 'fa-question-circle';
                        this.check_attendance_list[i].attendance_details[j]['method'] = 'Quiz';
                        break;
                    case this.appService.attendance_type.permited_absent:
                        this.check_attendance_list[i].attendance_details[j]['icon'] = 'fa-envelope-square';
                        this.check_attendance_list[i].attendance_details[j]['method'] = 'Permited Absent';
                        break;
                    default:
                        this.check_attendance_list[i].attendance_details[j]['icon'] = '';
                        this.check_attendance_list[i].attendance_details[j]['method'] = 'Absent';
                        break;
                }
            }
        }
    };
    CheckAttendanceTeacherComponent.prototype.getCheckAttendanceList = function () {
        var _this = this;
        this.selected_class_id = this.selected_attendance['class_id'];
        this.selected_course_id = this.selected_attendance['course_id'];
        this.attendanceService.getCheckAttendanceList(this.selected_course_id, this.selected_class_id).subscribe(function (result) {
            _this.apiResult = result.result;
            _this.check_attendance_list = result.check_attendance_list;
            _this.sortAttendanceList();
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get check_attendance_list", 'error'); });
    };
    CheckAttendanceTeacherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selected_interaction = this.appService.student_interaction_type.answer_question;
        this.attendanceService.getOpeningAttendanceCourse(this.authService.current_user.id)
            .subscribe(function (result) {
            _this.opening_attendances = result.opening_attendances;
            _this.selected_course_id = _this.localStorage.get('check_attendance_course_id');
            _this.selected_class_id = _this.localStorage.get('check_attendance_class_id');
            _this.localStorage.remove('check_attendance_course_id', 'check_attendance_class_id');
            if (_this.opening_attendances.length == 0) {
                if (_this.selected_course_id && _this.selected_class_id) {
                    _this.createAttendance();
                }
                else {
                    _this.router.navigate(['/dashboard']);
                    _this.appService.showPNotify('info', "There are no opening attendance! Select one first", 'info');
                }
            }
            else {
                if (!_this.selected_course_id) {
                    //show first opening
                    _this.selected_attendance_id = _this.opening_attendances[0].id;
                    _this.selected_attendance = _this.opening_attendances[0];
                    _this.getCheckAttendanceList();
                }
                else {
                    //check if new or not
                    var i;
                    for (i = 0; i < _this.opening_attendances.length; i++) {
                        if (_this.opening_attendances[i].course_id == _this.selected_course_id && _this.opening_attendances[i].class_id == _this.selected_class_id) {
                            _this.selected_attendance = _this.opening_attendances[i];
                            _this.selected_attendance_id = _this.opening_attendances[i].id;
                            break;
                        }
                    }
                    if (i == _this.opening_attendances.length) {
                        //new
                        _this.createAttendance();
                    }
                    else {
                        _this.getCheckAttendanceList();
                    }
                }
                setTimeout(function () {
                    //
                }, 1000);
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get opening attendances", 'error'); });
    };
    CheckAttendanceTeacherComponent.prototype.ngOnDestroy = function () {
        console.log('abc');
        this.socketService.stopEventOnCheckAttendanceStopped();
        this.socketService.stopEventOnCheckAttendanceCreated();
        this.socketService.stopEventOnCheckAttendanceUpdated();
    };
    CheckAttendanceTeacherComponent.prototype.getOpeningAttendance = function () {
        var _this = this;
        this.attendanceService.getOpeningAttendanceCourse(this.authService.current_user.id).subscribe(function (result) {
            _this.opening_attendances = result.opening_attendances;
            for (var j = 0; j < _this.opening_attendances.length; j++) {
                if (_this.opening_attendances[j].course_id == _this.selected_course_id && _this.opening_attendances[j].class_id == _this.selected_class_id) {
                    _this.selected_attendance = _this.opening_attendances[j];
                    _this.selected_attendance_id = _this.opening_attendances[j].id;
                    break;
                }
            }
            _this.getCheckAttendanceList();
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get opening attendances", 'error'); });
    };
    CheckAttendanceTeacherComponent.prototype.createAttendance = function () {
        var _this = this;
        this.attendanceService.createAttendance(this.selected_course_id, this.selected_class_id, this.authService.current_user.id)
            .subscribe(function (result) {
            if (result.result == 'success') {
                _this.getOpeningAttendance();
                _this.socketService.emitEventOnCheckAttendanceCreated(null);
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't create new attendances", 'error'); });
    };
    CheckAttendanceTeacherComponent.prototype.onChangeAttendance = function () {
        for (var j = 0; j < this.opening_attendances.length; j++) {
            if (this.opening_attendances[j].id == this.selected_attendance_id) {
                this.selected_attendance = this.opening_attendances[j];
                break;
            }
        }
        this.getCheckAttendanceList();
    };
    CheckAttendanceTeacherComponent.prototype.onCancelAttendanceSession = function () {
        jQuery('#confirmCancelModal').modal('show');
    };
    CheckAttendanceTeacherComponent.prototype.onCloseAttendanceSession = function () {
        jQuery('#confirmEndModal').modal('show');
    };
    CheckAttendanceTeacherComponent.prototype.confirmCancelAttendanceSession = function () {
        var _this = this;
        this.attendanceService.cancelAttendance(this.selected_attendance['id']).subscribe(function (result) {
            if (result.result == 'success') {
                var temp_attendance = _this.localStorage.get('selected_attendance');
                if (temp_attendance && _this.selected_attendance['id'] == temp_attendance['id']) {
                    _this.localStorage.remove('selected_attendance');
                }
                _this.socketService.emitEventOnCheckAttendanceStopped({
                    message: 'cancelled by ' + _this.authService.current_user.first_name + ' ' + _this.authService.current_user.last_name,
                    course_id: _this.selected_course_id,
                    class_id: _this.selected_class_id,
                });
                _this.appService.showPNotify('success', "Canceled Attendance Session", 'success');
                _this.router.navigate(['/dashboard']);
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't cancel attendance session", 'error'); });
    };
    CheckAttendanceTeacherComponent.prototype.confirmCloseAttendanceSession = function () {
        var _this = this;
        this.attendanceService.closeAttendance(this.selected_attendance['id']).subscribe(function (result) {
            if (result.result == 'success') {
                var temp_attendance = _this.localStorage.get('selected_attendance');
                if (temp_attendance && _this.selected_attendance['id'] == temp_attendance['id']) {
                    _this.localStorage.remove('selected_attendance');
                }
                _this.socketService.emitEventOnCheckAttendanceStopped({
                    message: 'closed by ' + _this.authService.current_user.first_name + ' ' + _this.authService.current_user.last_name,
                    course_id: _this.selected_course_id,
                    class_id: _this.selected_class_id,
                });
                _this.appService.showPNotify('success', "Closed Attendance Session", 'success');
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.appService.showPNotify('failure', result.message, 'error');
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't close attendance session", 'error'); });
    };
    CheckAttendanceTeacherComponent.prototype.generateQRCode = function () {
        var check_attendance_url = this.appConfig.apiHost + "/check-attendance/qr-code/" + this.selected_attendance_id;
        this.localStorage.set('qrCodeData', check_attendance_url);
        window.open(this.appConfig.host + '/qr-code', '_blank', 'height=300,width=300,scrollbars=yes,status=0,toolbar=0,menubar=0,location=0');
    };
    CheckAttendanceTeacherComponent.prototype.generateDelegateCode = function () {
        var _this = this;
        this.checkAttendanceService.generateDelegateCode(this.selected_course_id, this.selected_class_id).subscribe(function (result) {
            _this.delegate_code = result.code;
            jQuery('#delegateCodeModal').modal('show');
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't generate delegate code", 'error'); });
    };
    CheckAttendanceTeacherComponent.prototype.generateQuiz = function () {
        this.localStorage.set('selected_attendance', this.selected_attendance);
        this.router.navigate(['/check-attendance/quiz/']);
    };
    CheckAttendanceTeacherComponent.prototype.onAttendanceCheckClick = function (student_index, attendance_detail_index) {
        var _this = this;
        var type;
        if (this.check_attendance_list[student_index].attendance_details[attendance_detail_index].attendance_type) {
            type = this.appService.attendance_type.absent;
        }
        else {
            type = this.appService.attendance_type.checklist;
        }
        this.checkAttendanceService.checkList(this.check_attendance_list[student_index].attendance_details[attendance_detail_index].attendance_id, this.check_attendance_list[student_index].id, type).subscribe(function (result) {
            if (result.result == 'success') {
                _this.check_attendance_list[student_index].attendance_details[attendance_detail_index].attendance_type = type;
                if (type) {
                    _this.check_attendance_list[student_index].attendance_details[attendance_detail_index]['icon'] = 'fa-check';
                    _this.check_attendance_list[student_index].attendance_details[attendance_detail_index]['method'] = 'Checklist';
                }
                else {
                    _this.check_attendance_list[student_index].attendance_details[attendance_detail_index]['icon'] = '';
                    _this.check_attendance_list[student_index].attendance_details[attendance_detail_index]['method'] = 'Absent';
                }
                _this.sortAttendanceList();
                _this.socketService.emitEventOnCheckAttendanceUpdated({
                    course_id: _this.selected_course_id,
                    class_id: _this.selected_class_id,
                });
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't check_list", 'error'); });
    };
    CheckAttendanceTeacherComponent.prototype.confirmInteraction = function (student, interaction_type) {
        var _this = this;
        this.studentService.updateStudentInteraction(student.id, this.selected_attendance_id, interaction_type)
            .subscribe(function (result) {
            if (result.result == 'success') {
                switch (interaction_type) {
                    case _this.appService.student_interaction_type.answer_question:
                        student.attendance_details[student.attendance_details.length - 1].answered_questions++;
                        break;
                    case _this.appService.student_interaction_type.discuss:
                        student.attendance_details[student.attendance_details.length - 1].discussions++;
                        break;
                    case _this.appService.student_interaction_type.present:
                        student.attendance_details[student.attendance_details.length - 1].presentations++;
                        break;
                }
                _this.appService.showPNotify('success', "Successfully update student interaction!", 'success');
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't update student interaction", 'error'); });
    };
    CheckAttendanceTeacherComponent.ctorParameters = function () { return [
        { type: shared_module_1.CheckAttendanceService },
        { type: shared_module_1.AppConfig },
        { type: shared_module_1.SocketService },
        { type: shared_module_1.AuthService },
        { type: shared_module_1.AttendanceService },
        { type: angular_2_local_storage_1.LocalStorageService },
        { type: shared_module_1.AppService },
        { type: router_1.Router },
        { type: shared_module_1.StudentService }
    ]; };
    CheckAttendanceTeacherComponent = __decorate([
        core_1.Component({
            selector: 'check-attendance-teacher',
            template: __importDefault(__webpack_require__(/*! raw-loader!./check-attendance-teacher.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/check-attendance/check-attendance-teacher/check-attendance-teacher.component.html")).default
        }),
        __metadata("design:paramtypes", [shared_module_1.CheckAttendanceService, shared_module_1.AppConfig, shared_module_1.SocketService,
            shared_module_1.AuthService, shared_module_1.AttendanceService, angular_2_local_storage_1.LocalStorageService,
            shared_module_1.AppService, router_1.Router, shared_module_1.StudentService])
    ], CheckAttendanceTeacherComponent);
    return CheckAttendanceTeacherComponent;
}());
exports.CheckAttendanceTeacherComponent = CheckAttendanceTeacherComponent;


/***/ }),

/***/ "./src/app/check-attendance/check-attendance.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/check-attendance/check-attendance.component.ts ***!
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
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var shared_module_1 = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var angular_2_local_storage_1 = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/fesm5/angular-2-local-storage.js");
var CheckAttendanceComponent = /** @class */ (function () {
    function CheckAttendanceComponent(checkAttendanceService, appConfig, authService, attendanceService, localStorage, appService, router) {
        this.checkAttendanceService = checkAttendanceService;
        this.appConfig = appConfig;
        this.authService = authService;
        this.attendanceService = attendanceService;
        this.localStorage = localStorage;
        this.appService = appService;
        this.router = router;
    }
    CheckAttendanceComponent.prototype.ngOnInit = function () {
    };
    CheckAttendanceComponent.ctorParameters = function () { return [
        { type: shared_module_1.CheckAttendanceService },
        { type: shared_module_1.AppConfig },
        { type: shared_module_1.AuthService },
        { type: shared_module_1.AttendanceService },
        { type: angular_2_local_storage_1.LocalStorageService },
        { type: shared_module_1.AppService },
        { type: router_1.Router }
    ]; };
    CheckAttendanceComponent = __decorate([
        core_1.Component({
            selector: 'app-check-attendance',
            template: __importDefault(__webpack_require__(/*! raw-loader!./check-attendance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/check-attendance/check-attendance.component.html")).default
        }),
        __metadata("design:paramtypes", [shared_module_1.CheckAttendanceService, shared_module_1.AppConfig,
            shared_module_1.AuthService, shared_module_1.AttendanceService, angular_2_local_storage_1.LocalStorageService, shared_module_1.AppService, router_1.Router])
    ], CheckAttendanceComponent);
    return CheckAttendanceComponent;
}());
exports.CheckAttendanceComponent = CheckAttendanceComponent;


/***/ }),

/***/ "./src/app/check-attendance/check-attendance.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/check-attendance/check-attendance.module.ts ***!
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
var ngx_bootstrap_1 = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
var check_attendance_component_1 = __webpack_require__(/*! ./check-attendance.component */ "./src/app/check-attendance/check-attendance.component.ts");
var check_attendance_teacher_component_1 = __webpack_require__(/*! ./check-attendance-teacher/check-attendance-teacher.component */ "./src/app/check-attendance/check-attendance-teacher/check-attendance-teacher.component.ts");
var check_attendance_student_component_1 = __webpack_require__(/*! ./check-attendance-student/check-attendance-student.component */ "./src/app/check-attendance/check-attendance-student/check-attendance-student.component.ts");
var ngx_bootstrap_2 = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
var pagination_1 = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
var tabs_1 = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
var shared_module_1 = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var Routes = [
    { path: '', component: check_attendance_component_1.CheckAttendanceComponent },
];
var CheckAttendanceModule = /** @class */ (function () {
    function CheckAttendanceModule() {
    }
    CheckAttendanceModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(Routes),
                ngx_bootstrap_1.CollapseModule.forRoot(),
                ngx_bootstrap_2.TooltipModule.forRoot(),
                pagination_1.PaginationModule.forRoot(),
                tabs_1.TabsModule.forRoot(),
                shared_module_1.SharedModule
            ],
            declarations: [
                check_attendance_component_1.CheckAttendanceComponent,
                check_attendance_student_component_1.CheckAttendanceStudentComponent,
                check_attendance_teacher_component_1.CheckAttendanceTeacherComponent,
            ],
            providers: []
        })
    ], CheckAttendanceModule);
    return CheckAttendanceModule;
}());
exports.CheckAttendanceModule = CheckAttendanceModule;


/***/ })

}]);
//# sourceMappingURL=app-check-attendance-check-attendance-module.js.map