(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/absence-requests/absence-requests.module": [
		"./src/app/absence-requests/absence-requests.module.ts",
		"app-absence-requests-absence-requests-module"
	],
	"app/check-attendance-quiz/check-attendance-quiz.module": [
		"./src/app/check-attendance-quiz/check-attendance-quiz.module.ts",
		"default~app-check-attendance-quiz-check-attendance-quiz-module~app-settings-setting-module",
		"app-check-attendance-quiz-check-attendance-quiz-module"
	],
	"app/check-attendance/check-attendance.module": [
		"./src/app/check-attendance/check-attendance.module.ts",
		"app-check-attendance-check-attendance-module"
	],
	"app/classes/classes.module": [
		"./src/app/classes/classes.module.ts",
		"app-classes-classes-module"
	],
	"app/courses/courses.module": [
		"./src/app/courses/courses.module.ts",
		"app-courses-courses-module"
	],
	"app/dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"app-dashboard-dashboard-module"
	],
	"app/feedback/feedback.module": [
		"./src/app/feedback/feedback.module.ts",
		"app-feedback-feedback-module"
	],
	"app/layout/layout.module": [
		"./src/app/layout/layout.module.ts",
		"app-layout-layout-module"
	],
	"app/programs/programs.module": [
		"./src/app/programs/programs.module.ts",
		"app-programs-programs-module"
	],
	"app/quiz/quiz.module": [
		"./src/app/quiz/quiz.module.ts",
		"app-quiz-quiz-module"
	],
	"app/schedule/schedule.module": [
		"./src/app/schedule/schedule.module.ts",
		"app-schedule-schedule-module"
	],
	"app/semesters/semesters.module": [
		"./src/app/semesters/semesters.module.ts",
		"app-semesters-semesters-module"
	],
	"app/settings/setting.module": [
		"./src/app/settings/setting.module.ts",
		"default~app-check-attendance-quiz-check-attendance-quiz-module~app-settings-setting-module",
		"app-settings-setting-module"
	],
	"app/statistic/statistic.module": [
		"./src/app/statistic/statistic.module.ts",
		"app-statistic-statistic-module"
	],
	"app/students/students.module": [
		"./src/app/students/students.module.ts",
		"app-students-students-module"
	],
	"app/teachers/teachers.module": [
		"./src/app/teachers/teachers.module.ts",
		"app-teachers-teachers-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div *ngIf=\"!authService.isLoggedIn\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<div *ngIf=\"authService.isLoggedIn\" class=\"container body\">\r\n    <div class=\"main_container\">\r\n        <div>\r\n            <div class=\"col-md-3 left_col menu_fixed\">\r\n                <app-side-menu></app-side-menu>\r\n            </div>\r\n            <div class=\"top_nav\">\r\n                <app-top-navigation></app-top-navigation>\r\n            </div>\r\n            <div class=\"right_col\" role=\"main\">\r\n                <router-outlet></router-outlet>\r\n            </div>\r\n            <app-footer></app-footer>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <div class=\"login_wrapper\">\r\n        <div class=\"animate form login_form\">\r\n            <section class=\"login_content\">\r\n                <form *ngIf=\"!reset_token\">\r\n                    <h1>Forgot Password?</h1>\r\n                    <div *ngIf=\"apiResult == 'failure'\">\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-body\">To reset your password, submit your email address below. If we can find you in the database, an email will be sent to your email address, with instructions how to get access again.</div>\r\n                        </div>\r\n                        <div *ngIf=\"error_message\" class=\"alert alert-danger text-center\" style=\"padding-top: 6px;padding-bottom: 6px\">\r\n                            <i class=\"fa fa-warning\"></i> {{error_message}}\r\n                        </div>\r\n                        <div>\r\n                            <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\" />\r\n                        </div>\r\n                        <div>\r\n                            <button class=\"btn btn-default\" (click)=\"forgotPassword()\">Search</button>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"apiResult == 'success'\">\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-body\">An email has been sent to your address at {{email}}. It contains easy instructions to confirm and complete this password change. If you continue to have difficulty, contact the site administrator.</div>\r\n                            <div>\r\n                                <button class=\"btn btn-default\" (click)=\"continue()\">Continue</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                </form>\r\n                <form *ngIf=\"reset_token\">\r\n                    <h1>Forgot Password?</h1>\r\n                    <div *ngIf=\"error_message\" class=\"alert alert-danger text-center\" style=\"padding-top: 6px;padding-bottom: 6px\">\r\n                        <i class=\"fa fa-warning\"></i> {{error_message}}\r\n                    </div>\r\n                    <div *ngIf=\"success_message\" class=\"alert alert-success text-center\" style=\"padding-top: 6px;padding-bottom: 6px\">\r\n                        {{success_message}}\r\n                    </div>\r\n                    <div *ngIf=\"reset_password_check == 'failure'\">\r\n                        <div>\r\n                            <button class=\"btn btn-default\" (click)=\"continue()\">Continue</button>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"reset_password_check == 'success'\">\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-body\">Enter your new password and confirm it</div>\r\n                        </div>\r\n                        <div>\r\n                            <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" />\r\n                        </div>\r\n                        <div>\r\n                            <input type=\"password\" class=\"form-control\" name=\"confirm_password\" placeholder=\"Confirm Password\" [(ngModel)]=\"confirm_password\" />\r\n                        </div>\r\n                        <div>\r\n                            <button class=\"btn btn-default\" (click)=\"resetPassword()\">Change</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                </form>\r\n            </section>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <div class=\"login_wrapper\">\r\n        <div class=\"animate form login_form\">\r\n            <section class=\"login_content\">\r\n                <img src=\"assets/images/logo2.png\" alt=\"\">\r\n                <form (keydown)=\"keyDownFunction($event)\">\r\n                    <h1>Login</h1>\r\n                    <div *ngIf=\"authService.redirectMessage\" class=\"alert-danger alert text-center\" style=\"padding-top: 6px;padding-bottom: 6px\">\r\n                        <i class=\"fa fa-warning\"></i> {{authService.redirectMessage}}\r\n                    </div>\r\n                    <div *ngIf=\"error_message\" class=\"alert alert-danger text-center\" style=\"padding-top: 6px;padding-bottom: 6px\">\r\n                        {{error_message}}\r\n                    </div>\r\n                    <div>\r\n                        <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Username\" [(ngModel)]=\"username\" />\r\n                    </div>\r\n                    <div>\r\n                        <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" />\r\n                    </div>\r\n                    <div>\r\n                        <button class=\"btn btn-default\" (click)=\"login()\">Log in</button>\r\n                    </div>\r\n                    <div>\r\n                        <a (click)=\"forgotPassword()\">Forgot your password?</a>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                </form>\r\n            </section>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <div class=\"login_wrapper\" style=\"margin: 3% auto 0\">\r\n        <div class=\"animate form login_form\">\r\n            <section class=\"login_content\">\r\n                <form *ngIf=\"!reset_token\">\r\n                    <div>\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-body\">Token is required to setup your account for the first time.</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                </form>\r\n                <form *ngIf=\"reset_token\">\r\n                    <h1>Enter information</h1>\r\n                    <div *ngIf=\"error_message\" class=\"alert alert-danger text-center\" style=\"padding-top: 6px;padding-bottom: 6px\">\r\n                        <i class=\"fa fa-warning\"></i> {{error_message}}\r\n                    </div>\r\n                    <div *ngIf=\"success_message\" class=\"alert alert-success text-center\" style=\"padding-top: 6px;padding-bottom: 6px\">\r\n                        {{success_message}}\r\n                    </div>\r\n                    <div *ngIf=\"register_check == 'failure'\">\r\n                        <div>\r\n                            <button class=\"btn btn-default\" (click)=\"continue()\">Back to login</button>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"register_check == 'success'\">\r\n                        <div>\r\n                            <input type='text' class=\"form-control\" name=\"first_name\" placeholder=\"First Name\" [(ngModel)]=\"first_name\" />\r\n                        </div>\r\n                        <div>\r\n                            <input type='text' class=\"form-control\" name=\"last_name\" placeholder=\"Last Name\" [(ngModel)]=\"last_name\" />\r\n                        </div>\r\n                        <div>\r\n                            <input type='text' class=\"form-control\" name=\"phone\" placeholder=\"Phone\" [(ngModel)]=\"phone\" />\r\n                        </div>\r\n                        <div>\r\n                            <label class=\"control-label\">Your username will be the part before '@' in your email.</label>\r\n                        </div>\r\n                        <div>\r\n                            <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" />\r\n                        </div>\r\n                        <div>\r\n                            <input type=\"password\" class=\"form-control\" name=\"confirm_password\" placeholder=\"Confirm Password\" [(ngModel)]=\"confirm_password\" />\r\n                        </div>\r\n                        <div style=\"padding: 0;text-align: center;\">\r\n                            <img id=\"profilePic\" style=\"height:100px;width:100px;padding-bottom: 5px;\">\r\n                            <ng-container>\r\n                                <label class=\"btn btn-default\">\r\n                                    Upload your avatar\r\n                                    <input type=\"file\" style=\"display:none;\" name=\"uploads\" (change)=\"onEditProfilePic($event)\">\r\n                                </label>  \r\n                            </ng-container>    \r\n                        </div>\r\n                        <div>\r\n                            <button class=\"btn btn-primary\" (click)=\"onRegister()\">Confirm</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                </form>\r\n            </section>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"progressModal\" role=\"dialog\">\r\n    <div class=\"vertical-alignment-helper\">\r\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"text-center\">\r\n                        <h2>Loading</h2>\r\n                    </div>\r\n                    <div class=\"progress\">\r\n                        <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" style=\"width:100%\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/create-absence-request-modal/create-absence-request-modal.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/create-absence-request-modal/create-absence-request-modal.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal fade\" id=\"createAbsenceRequestModal\" role=\"dialog\">\r\n    <div class=\"vertical-alignment-helper\">\r\n        <div class=\"modal-dialog\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                    <h4 class=\"modal-title\">New Absence request</h4>\r\n                </div>\r\n                <form class=\"form-horizontal form-label-left\">\r\n                    <div class=\"modal-body\">\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\"> Reason* </label>\r\n                                <div class=\"col-md-9 col-sm-9 col-xs-12\">\r\n                                    <textarea class=\"form-control\" name=\"reason\" rows=\"4\" [(ngModel)]=\"new_reason\"></textarea>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\"> From - To* </label>\r\n                                <div class=\"col-md-9 col-sm-9 col-xs-12\">\r\n                                    <div class=\"input-prepend input-group\">\r\n                                        <span class=\"add-on input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\r\n                                        <input type=\"text\" name=\"from_to\" id=\"from_to\" class=\"form-control\" />\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                        <button type=\"button\" class=\"btn btn-default btn-success\" (click)=\"onConfirmCreateRequest()\">Confirm</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/edit-schedule-modal/edit-schedule-modal.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/edit-schedule-modal/edit-schedule-modal.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal fade\" id=\"{{modal_id}}\" role=\"dialog\">\r\n    <div class=\"vertical-alignment-helper\">\r\n        <div class=\"modal-dialog modal-lg vertical-align-center\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                    <h4 class=\"modal-title\">{{modal_title}}</h4>\r\n                </div>\r\n                <form class=\"form-horizontal form-label-left\">\r\n                    <div class=\"modal-body\">\r\n                        <ul class=\"nav nav-tabs\" *ngIf=\"classes.length > 1\">\r\n                          <li *ngFor=\"let class of classes; let i = index\" [ngClass]=\"{'active': i == current_class_id}\" (click)=\"onChangeClass(i)\"><a>{{class.class_name}}</a></li>\r\n                        </ul>\r\n                        <table class=\"table table-bordered text-center\" style=\"font-weight: bold\">\r\n                            <thead class=\"text-center\">\r\n                                <tr>\r\n                                    <th width=\"15%\"> </th>\r\n                                    <th width=\"12%\">2</th>\r\n                                    <th width=\"12%\">3</th>\r\n                                    <th width=\"12%\">4</th>\r\n                                    <th width=\"12%\">5</th>\r\n                                    <th width=\"12%\">6</th>\r\n                                    <th width=\"12%\">7</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td><strong>(LT)7:30-9:10 <br> (TH)7:30-9:30</strong></td>\r\n                                    <td *ngIf=\"sessions[current_class_id][0].room\" (click)=\"onCellClick(0)\">{{sessions[current_class_id][0].room}} - {{sessions[current_class_id][0].type}}</td>\r\n                                    <td *ngIf=\"!sessions[current_class_id][0].room\" (click)=\"onCellClick(0)\"></td>\r\n                                    <td *ngIf=\"sessions[current_class_id][4].room\" (click)=\"onCellClick(4)\">{{sessions[current_class_id][4].room}} - {{sessions[current_class_id][4].type}}</td>\r\n                                    <td *ngIf=\"!sessions[current_class_id][4].room\" (click)=\"onCellClick(4)\"></td>\r\n                                    <td *ngIf=\"sessions[current_class_id][8].room\" (click)=\"onCellClick(8)\">{{sessions[current_class_id][8].room}} - {{sessions[current_class_id][8].type}}</td>\r\n                                    <td *ngIf=\"!sessions[current_class_id][8].room\" (click)=\"onCellClick(8)\"></td>\r\n                                    <td *ngIf=\"sessions[current_class_id][12].room\" (click)=\"onCellClick(12)\">{{sessions[current_class_id][12].room}} - {{sessions[current_class_id][12].type}}</td>\r\n                                    <td *ngIf=\"!sessions[current_class_id][12].room\" (click)=\"onCellClick(12)\"></td>\r\n                                    <td *ngIf=\"sessions[current_class_id][16].room\" (click)=\"onCellClick(16)\">{{sessions[current_class_id][16].room}} - {{sessions[current_class_id][16].type}}</td>\r\n                                    <td *ngIf=\"!sessions[current_class_id][16].room\" (click)=\"onCellClick(16)\"></td>\r\n                                    <td *ngIf=\"sessions[current_class_id][20].room\" (click)=\"onCellClick(20)\">{{sessions[current_class_id][20].room}} - {{sessions[current_class_id][20].type}}</td>\r\n                                    <td *ngIf=\"!sessions[current_class_id][20].room\" (click)=\"onCellClick(20)\"></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td><strong>(LT)9:30-11:10 <br> (TH)9:30-11:30</strong></td>\r\n                                    <td *ngIf=\"sessions[current_class_id][1].room\" (click)=\"onCellClick(1)\">{{sessions[current_class_id][1].room}} - {{sessions[current_class_id][1].type}}</td>\r\n                                    <td *ngIf=\"!sessions[current_class_id][1].room\" (click)=\"onCellClick(1)\"></td>\r\n                                    <td *ngIf=\"sessions[current_class_id][5].room\" (click)=\"onCellClick(5)\">{{sessions[current_class_id][5].room}} - {{sessions[current_class_id][5].type}}</td>\r\n                                    <td *ngIf=\"!sessions[current_class_id][5].room\" (click)=\"onCellClick(5)\"></td>\r\n                                    <td *ngIf=\"sessions[current_class_id][9].room\" (click)=\"onCellClick(9)\">{{sessions[current_class_id][9].room}} - {{sessions[current_class_id][9].type}}</td>\r\n                                    <td *ngIf=\"!sessions[current_class_id][9].room\" (click)=\"onCellClick(9)\"></td>\r\n                                    <td *ngIf=\"sessions[current_class_id][13].room\" (click)=\"onCellClick(13)\">{{sessions[current_class_id][13].room}} - {{sessions[current_class_id][13].type}}</td>\r\n                                    <td *ngIf=\"!sessions[current_class_id][13].room\" (click)=\"onCellClick(13)\"></td>\r\n                                    <td *ngIf=\"sessions[current_class_id][17].room\" (click)=\"onCellClick(17)\">{{sessions[current_class_id][17].room}} - {{sessions[current_class_id][17].type}}</td>\r\n                                    <td *ngIf=\"!sessions[current_class_id][17].room\" (click)=\"onCellClick(17)\"></td>\r\n                                    <td *ngIf=\"sessions[current_class_id][21].room\" (click)=\"onCellClick(21)\">{{sessions[current_class_id][21].room}} - {{sessions[current_class_id][21].type}}</td>\r\n                                    <td *ngIf=\"!sessions[current_class_id][21].room\" (click)=\"onCellClick(21)\"></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td><strong>(LT)13:30-15:10 <br> (TH)13:30-15:30</strong></td>\r\n                                    <td *ngIf=\"sessions[current_class_id][2].room\" (click)=\"onCellClick(2)\">{{sessions[current_class_id][2].room}} - {{sessions[current_class_id][2].type}}</td>\r\n                                    <td *ngIf=\"!sessions[current_class_id][2].room\" (click)=\"onCellClick(2)\"></td>\r\n                                    <td *ngIf=\"sessions[current_class_id][6].room\" (click)=\"onCellClick(6)\">{{sessions[current_class_id][6].room}} - {{sessions[current_class_id][6].type}}</td>\r\n                                    <td *ngIf=\"!sessions[current_class_id][6].room\" (click)=\"onCellClick(6)\"></td>\r\n                                    <td *ngIf=\"sessions[current_class_id][10].room\" (click)=\"onCellClick(10)\">{{sessions[current_class_id][10].room}} - {{sessions[current_class_id][10].type}}</td>\r\n                                    <td *ngIf=\"!sessions[current_class_id][10].room\" (click)=\"onCellClick(10)\"></td>\r\n                                    <td *ngIf=\"sessions[current_class_id][14].room\" (click)=\"onCellClick(14)\">{{sessions[current_class_id][14].room}} - {{sessions[current_class_id][14].type}}</td>\r\n                                    <td *ngIf=\"!sessions[current_class_id][14].room\" (click)=\"onCellClick(14)\"></td>\r\n                                    <td *ngIf=\"sessions[current_class_id][18].room\" (click)=\"onCellClick(18)\">{{sessions[current_class_id][18].room}} - {{sessions[current_class_id][18].type}}</td>\r\n                                    <td *ngIf=\"!sessions[current_class_id][18].room\" (click)=\"onCellClick(18)\"></td>\r\n                                    <td *ngIf=\"sessions[current_class_id][22].room\" (click)=\"onCellClick(22)\">{{sessions[current_class_id][22].room}} - {{sessions[current_class_id][22].type}}</td>\r\n                                    <td *ngIf=\"!sessions[current_class_id][22].room\" (click)=\"onCellClick(22)\"></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td><strong>(LT)15:30-17:10 <br> (TH)15:30-17:30</strong></td>\r\n                                    <td *ngIf=\"sessions[current_class_id][3].room\" (click)=\"onCellClick(3)\">{{sessions[current_class_id][3].room}} - {{sessions[current_class_id][3].type}}</td>\r\n                                    <td *ngIf=\"!sessions[current_class_id][3].room\" (click)=\"onCellClick(3)\"></td>\r\n                                    <td *ngIf=\"sessions[current_class_id][7].room\" (click)=\"onCellClick(7)\">{{sessions[current_class_id][7].room}} - {{sessions[current_class_id][7].type}}</td>\r\n                                    <td *ngIf=\"!sessions[current_class_id][7].room\" (click)=\"onCellClick(7)\"></td>\r\n                                    <td *ngIf=\"sessions[current_class_id][11].room\" (click)=\"onCellClick(11)\">{{sessions[current_class_id][11].room}} - {{sessions[current_class_id][11].type}}</td>\r\n                                    <td *ngIf=\"!sessions[current_class_id][11].room\" (click)=\"onCellClick(11)\"></td>\r\n                                    <td *ngIf=\"sessions[current_class_id][15].room\" (click)=\"onCellClick(15)\">{{sessions[current_class_id][15].room}} - {{sessions[current_class_id][15].type}}</td>\r\n                                    <td *ngIf=\"!sessions[current_class_id][15].room\" (click)=\"onCellClick(15)\"></td>\r\n                                    <td *ngIf=\"sessions[current_class_id][19].room\" (click)=\"onCellClick(19)\">{{sessions[current_class_id][19].room}} - {{sessions[current_class_id][19].type}}</td>\r\n                                    <td *ngIf=\"!sessions[current_class_id][19].room\" (click)=\"onCellClick(19)\"></td>\r\n                                    <td *ngIf=\"sessions[current_class_id][23].room\" (click)=\"onCellClick(23)\">{{sessions[current_class_id][23].room}} - {{sessions[current_class_id][23].type}}</td>\r\n                                    <td *ngIf=\"!sessions[current_class_id][23].room\" (click)=\"onCellClick(23)\"></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <div class=\"form-group\" *ngIf=\"editingCellIndex != -1 && !view_only\">\r\n                            <label class=\"control-label col-sm-1 col-xs-6\"> Room:</label>\r\n                            <div class=\"col-sm-3 col-xs-6\">\r\n                                <input id=\"roomInput\" class=\"form-control col-md-7 col-xs-12\" name=\"room\" [(ngModel)]=\"temp_room\">\r\n                            </div>\r\n                            <label class=\"control-label col-sm-1 col-xs-6\"> Type:</label>\r\n                            <div class=\"col-sm-2 col-xs-6\">\r\n                                <label class=\"radio-inline\">\r\n                                    <input type=\"radio\" name=\"optradio\" [(ngModel)]=\"temp_type\" [value]=\"'LT'\" [checked]=\"temp_type == 'LT'\">LT</label>\r\n                                <label class=\"radio-inline\">\r\n                                    <input type=\"radio\" name=\"optradio\" [(ngModel)]=\"temp_type\" [value]=\"'TH'\" [checked]=\"temp_type == 'TH'\">TH</label>\r\n                            </div>\r\n                            <div class=\"col-sm-4 col-xs-12\">\r\n                                <button type=\"button\" class=\"btn btn-default\" (click)=\"onCancelCell()\">Cancel</button>\r\n                                <button type=\"button\" class=\"btn btn-danger\" (click)=\"onRemoveCell()\">Remove</button>\r\n                                <button type=\"button\" class=\"btn btn-success\" (click)=\"onUpdateCell()\">Update</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"!view_only\" class=\"modal-footer\">\r\n                        <button type=\"button\" class=\"btn btn-default\" (click)=\"onCancelModal()\">Cancel</button>\r\n                        <button type=\"button\" class=\"btn btn-default btn-success\" (click)=\"onSaveModal()\">Save</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/export-modal/export-modal.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/export-modal/export-modal.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal fade\" id=\"exportModal\" role=\"dialog\">\r\n    <div class=\"vertical-alignment-helper\">\r\n        <div class=\"modal-dialog vertical-align-center\">\r\n            <div [ngClass] = \"{'modal-content':true, 'larger_modal':larger_modal}\">\r\n                <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title\">{{title}}</h4>\r\n                </div>\r\n                <div class=\"row modal-body\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div *ngIf=\"export_type != appService.import_export_type.examinees && export_type != appService.import_export_type.attendance_summary && export_type != appService.import_export_type.attendance_lists && export_type != appService.import_export_type.exceeded_absence_limit\" class=\"radio\">\r\n                            <label>\r\n                                <input type=\"radio\" name=\"optradio\" [value]=\"1\" [(ngModel)]=\"export_on_search\">Export based on Search results</label>\r\n                        </div>\r\n                        <div *ngIf=\"export_type != appService.import_export_type.teacher\" class=\"radio\">\r\n                            <label>\r\n                                <input type=\"radio\" name=\"optradio\" [value]=\"0\" [(ngModel)]=\"export_on_search\">Export based on selection</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\" *ngIf=\"export_on_search\">\r\n                        <div>\r\n                            <input placeholder=\"File name\" class=\"form-control\" [(ngModel)]=\"file_name\" />\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"!export_on_search && (export_type == appService.import_export_type.examinees || export_type == appService.import_export_type.attendance_summary || export_type == appService.import_export_type.attendance_lists || export_type == appService.import_export_type.exceeded_absence_limit)\">\r\n                        <div class=\"col-sm-6 form-horizontal\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4 class=\"pull-right\">Semester : </h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <select class=\"form-control\" [(ngModel)]=\"selectedSemester\" (ngModelChange)=\"onGetProgramHasCourse()\">\r\n                                    <option *ngFor=\"let semester of semesters\" [value]=\"semester.id\">{{semester.name}}</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row col-xs-12\">\r\n                            <hr>\r\n                            <ng-container *ngFor=\"let program of program_has_course; let i = index\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <label>{{program.name}}</label>\r\n                                    <div style=\"overflow:auto;max-height:300px;\">\r\n                                        <table class=\"table text-center table-bordered\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th><label><input type=\"checkbox\" [(ngModel)]=\"select_all_program_has_course[i]\" (ngModelChange)=\"onSelectAllProgramHasCourse(i)\"></label></th>\r\n                                                    <th>Course</th>\r\n                                                    <th width=\"25%\">Class</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let course of program.courses\">\r\n                                                    <td><label><input type=\"checkbox\" [(ngModel)]=\"course.selected\"></label></td>\r\n                                                    <td>{{course.code}} - {{course.name}}</td>\r\n                                                    <td>{{course.class_name}}</td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-container>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"!export_on_search && export_type == appService.import_export_type.schedule\">\r\n                        <div class=\"col-sm-12\">\r\n                        </div>\r\n                        <div class=\"col-sm-6\" style=\"overflow:auto;max-height:300px;\">\r\n                            <table class=\"table text-center table-bordered\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th><label><input type=\"checkbox\" [(ngModel)]=\"select_all_program\" (ngModelChange)=\"onSelectAllProgram()\"></label></th>\r\n                                        <th>Program</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let program of programs; let i = index\">\r\n                                        <td><label><input type=\"checkbox\" [(ngModel)]=\"program.selected\"></label></td>\r\n                                        <td>{{program.name}}</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"!export_on_search\" class=\"col-sm-6\">\r\n                        <div *ngIf=\"export_type == appService.import_export_type.student || export_type == appService.import_export_type.course || export_type == appService.import_export_type.schedule\" style=\"overflow:auto; max-height:300px;\">\r\n                            <table class=\"table text-center table-bordered\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th><label><input type=\"checkbox\" [(ngModel)]=\"select_all_class\" (ngModelChange)=\"onSelectAllClass()\"></label></th>\r\n                                        <th>Class</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let class of classes; let i = index\">\r\n                                        <td><label><input type=\"checkbox\" [(ngModel)]=\"class.selected\"></label></td>\r\n                                        <td>{{class.name}}</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"onCancelExport()\">Cancel</button>\r\n                    <button *ngIf=\"!isExporting\" type=\"button\" class=\"btn btn-success\" (click)=\"onExport()\">Export</button>\r\n                    <button *ngIf=\"isExporting\" type=\"button\" class=\"btn btn-danger\" (click)=\"onStopExport()\">Stop</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- footer content -->\r\n<footer id=\"footer\">\r\n\t<div class=\"pull-right\">\r\n\t\tManager Website for Quality Assurance\r\n\t</div>\r\n\t<div class=\"clearfix\"></div>\r\n</footer>\r\n<!-- /footer content -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/import-modal/import-modal.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/import-modal/import-modal.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal fade\" id=\"importModal\" role=\"dialog\">\r\n    <div class=\"vertical-alignment-helper\">\r\n        <div class=\"modal-dialog vertical-align-center\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title\">{{title}}</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div *ngIf=\"note\" class=\"form-group text-center\">\r\n                        <label>{{note}}</label>\r\n                    </div>\r\n                    <ng-container *ngIf=\"import_type != appService.import_export_type.attendance_list\">\r\n                        <div class=\"file-drop nv-file-over\" ng2FileDrop [uploader]=\"uploader\" (onFileDrop)=\"onSelectFile($event)\">\r\n                            <h2>Drag files here</h2>\r\n                        </div>\r\n                        <br> Or click here\r\n                        <label class=\"btn btn-primary btn-sm btn-file\">\r\n                            Choose files\r\n                            <input type=\"file\" multiple accept=\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel\" style=\"display:none;\" (change)=\"onSelectFile($event.target.files)\">\r\n                        </label>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"import_type == appService.import_export_type.attendance_list\">\r\n                        <div class=\"file-drop nv-file-over\" ng2FileDrop [uploader]=\"uploader\" (onFileDrop)=\"onSelectFile($event)\">\r\n                            <h2>Drag file here</h2>\r\n                        </div>\r\n                        <br> Or click here\r\n                        <label class=\"btn btn-primary btn-sm btn-file\">\r\n                            Choose file\r\n                            <input type=\"file\" accept=\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel\" style=\"display:none;\" (change)=\"onSelectFile($event.target.files)\">\r\n                        </label>\r\n                    </ng-container>\r\n                    <div style=\"overflow:auto; max-height:400px;\">\r\n                        <table *ngIf=\"import_list.length > 0\" class=\"table text-center\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Name</th>\r\n                                    <th>Status</th>\r\n                                    <th><button *ngIf=\"!isImporting\" class=\"btn btn-danger btn-sm\" (click)=\"onRemoveAllFile()\">Remove All</button></th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                    <tr *ngFor=\"let import of import_list; let i = index\">\r\n                                        <td>{{import.file['name']}}</td>\r\n                                        <td *ngIf=\"import.result == ''\"></td>\r\n                                        <td [tooltip]=\"import.result_message\" container=\"body\" *ngIf=\"import.result == 'success'\" style=\"color: green\"><i class=\"fa fa-check-circle fa-2x\"></i></td>\r\n                                        <td [tooltip]=\"import.result_message\" container=\"body\" *ngIf=\"import.result == 'failure'\" style=\"color: red\"><i class=\"fa fa-exclamation-circle fa-2x\"></i></td>\r\n                                        <td><button *ngIf=\"!isImporting\" class=\"btn btn-danger btn-sm\" (click)=\"onRemoveFile(i)\">Remove</button><label *ngIf=\"isImporting && this.import_progress == (100 / this.import_list.length * i)\" style=\"color: green\">Processing</label></td>\r\n                                    </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                    <div *ngIf=\"import_list.length > 0\">\r\n                        Progress:\r\n                        <div class=\"progress\" style=\"\">\r\n                            <div class=\"progress-bar progress-bar-success progress-bar-striped active\" role=\"progressbar\" [ngStyle]=\"{ 'width': import_progress + '%' }\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                        <button type=\"button\" class=\"btn btn-default\" (click)=\"onCancelImport()\">Cancel</button>\r\n                        <button *ngIf=\"!isImporting\" type=\"button\" class=\"btn btn-success\" (click)=\"onImport()\">Import</button>\r\n                        <button *ngIf=\"isImporting\" type=\"button\" class=\"btn btn-danger\" (click)=\"onStopImport()\">Stop</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/map-modal/map-modal.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/map-modal/map-modal.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal fade\" id=\"mapModal\" role=\"dialog\">\r\n    <div class=\"vertical-alignment-helper\">\r\n        <div class=\"modal-dialog vertical-align-center\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title\">{{title}}</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <agm-map #map [latitude]=\"lat\"\r\n                    [longitude]=\"lng\"\r\n                    [zoom]=\"zoom\"\r\n                    [disableDefaultUI]=\"false\">\r\n                        <agm-marker \r\n                        *ngFor=\"let m of markers; let i = index\"\r\n                        [latitude]=\"m.lat\"\r\n                        [longitude]=\"m.lng\">\r\n                        <agm-info-window>\r\n                            <strong>{{m.label}}</strong>\r\n                          </agm-info-window>\r\n                        </agm-marker>\r\n                    </agm-map>\r\n                    <div class=\"modal-footer\">\r\n                        <button type=\"button\" class=\"btn btn-default\" (click)=\"onCloseMap()\">Close</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/quiz-display/quiz-display.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/quiz-display/quiz-display.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!get_published_quiz_error\" class=\"col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"x_panel\">\r\n        <div class=\"x_title\">\r\n            <h2>{{quiz.title}} - <ng-container *ngIf=\"quiz['type'] == appService.quiz_type.academic.id\">{{appService.quiz_type.academic.title}}</ng-container><ng-container *ngIf=\"quiz['type'] == appService.quiz_type.miscellaneous.id\">{{appService.quiz_type.miscellaneous.title}}</ng-container></h2>\r\n            <div class=\"navbar-btn pull-right\">\r\n                <ng-container *ngIf=\"!is_started && !is_ended && !is_ready\">\r\n                    <button *ngIf=\"quiz['participants'].length > 0\" class=\"btn btn-primary btn-lg\" (click)=\"onStartQuiz()\">Start</button>\r\n                    <button *ngIf=\"quiz['participants'].length == 0\" type=\"button\" class=\"btn btn-primary btn-lg\" disabled>Start</button>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"is_started && !is_ended && !is_ready\">\r\n                    <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"onNextQuestion()\">Next</button>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"is_save_quiz_error\">\r\n                    <button class=\"btn btn-primary btn-lg\" (click)=\"onSaveQuiz()\">Save Quiz</button>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"!is_started && is_ended && !is_ready\">\r\n                    <button class=\"btn btn-primary btn-lg\" (click)=\"onReturn()\">Close</button>\r\n                </ng-container>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n        </div>\r\n        <div class=\"x_content\">\r\n            <div *ngIf=\"!is_started && !is_ended  && !is_ready\" class=\"row\">\r\n                <div class=\"col-xs-12 text-center\">\r\n                    <h1>Quiz Code: <label class=\"underline\">{{quiz.code}}</label></h1>\r\n                    <h2>Joined Students: {{quiz.participants.length}}</h2>\r\n                </div>\r\n                <div class=\"col-xs-12 col-md-6 col-md-offset-3\">\r\n                    <div style=\"overflow:auto; max-height:500px;\">\r\n                        <table class=\"table table-striped table-bordered\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Code</th>\r\n                                    <th>Name</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let student of quiz.participants\">\r\n                                    <td>{{student.code}}</td>\r\n                                    <td>{{student.name}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"is_started  && !is_ended && !is_ready\" class=\"row\">\r\n                <div class=\"col-xs-12\">\r\n                    <div class=\"col-xs-10\">\r\n                        <h3 style=\"white-space: pre-wrap\"><label class=\"underline\">Q:</label> {{quiz['questions'][current_question_index]['text']}}</h3>\r\n                    </div>\r\n                    <div class=\"col-xs-2\">\r\n                        <h1 class=\"question_timer\">{{quiz['questions'][current_question_index]['timer']}}</h1>\r\n                        <h4 style=\"white-space: pre-wrap\">{{quiz['questions'][current_question_index]['answers']['length']}} answers</h4>\r\n                    </div>\r\n                </div>\r\n                <div class=\"container-fluid\">\r\n                    <div class=\"row\">\r\n                        <button class=\"col-xs-5 btn btn-primary\" disabled><h3>A. {{quiz['questions'][current_question_index]['option_a']}}</h3></button>\r\n                        <button class=\"col-xs-5 col-xs-offset-1 btn btn-primary\" disabled><h3>B. {{quiz['questions'][current_question_index]['option_b']}}</h3></button>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <button class=\"col-xs-5 btn btn-primary\" disabled><h3>C. {{quiz['questions'][current_question_index]['option_c']}}</h3></button>\r\n                        <button class=\"col-xs-5 col-xs-offset-1 btn btn-primary\" disabled><h3>D. {{quiz['questions'][current_question_index]['option_d']}}</h3></button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-12\">\r\n                    <div class=\"pull-right\">\r\n                        <button class=\"btn btn-danger\" (click)=\"onStopQuiz()\">Stop Quiz</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"!is_started && is_ended  && !is_ready\" class=\"row\">\r\n                <div class=\"col-xs-12 text-center\">\r\n                    <h2>Quiz is finished. Total student in course : {{student_list.length}}, {{quiz['participants']['length']}} participated</h2>\r\n                </div>\r\n                <div class=\"container-fluid\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4 col-xs-12 text-center\">\r\n                            <h4 class=\"green_text\">Attendance Checked : {{attendance_checked_list.length}}</h4>\r\n                            <div style=\"overflow:auto; max-height:300px;\">\r\n                                <table class=\"table table-striped table-bordered\">\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let student of attendance_checked_list\">\r\n                                            <td>{{student.code}}</td>\r\n                                            <td>{{student.name}}</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4 col-xs-12 text-center\">\r\n                            <h4 class=\"red_text\">Attendance Not Checked : {{attendance_not_checked_list.length}}</h4>\r\n                            <div style=\"overflow:auto; max-height:300px;\">\r\n                                <table class=\"table table-striped table-bordered\">\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let student of attendance_not_checked_list\">\r\n                                            <td>{{student.code}}</td>\r\n                                            <td>{{student.name}}</td>\r\n                                            <td>{{student.reason}}</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4 col-xs-12 text-center\">\r\n                            <h4 class=\"red_text\">Not participated : {{not_participated_list.length}}</h4>\r\n                            <div style=\"overflow:auto; max-height:300px;\">\r\n                                <table class=\"table table-striped table-bordered\">\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let student of not_participated_list\">\r\n                                            <td>{{student.code}}</td>\r\n                                            <td>{{student.name}}</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                        <hr/>\r\n                    </div>\r\n                </div>\r\n                <div class=\"container-fluid\">\r\n                    <ng-container  *ngFor=\"let question of quiz.questions\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-8 col-xs-12\">\r\n                                <h3 style=\"white-space: pre-wrap\"><label class=\"underline\">Q:</label> {{question.text}}</h3>\r\n                                <h4 [ngClass]=\"{'green_text': question.option_a == question.correct_option}\">A. {{question.option_a}}</h4>\r\n                                <h4 [ngClass]=\"{'green_text': question.option_b == question.correct_option}\">B. {{question.option_b}}</h4>\r\n                                <h4 [ngClass]=\"{'green_text': question.option_c == question.correct_option}\">C. {{question.option_c}}</h4>\r\n                                <h4 [ngClass]=\"{'green_text': question.option_d == question.correct_option}\">D. {{question.option_d}}</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-4 col-xs-12\" style=\"overflow:auto; max-height:300px;\">\r\n                                <table class=\"table table-striped\">\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let answer of question['answers']\">\r\n                                            <td>{{answer.name}} - {{answer.code}}</td>\r\n                                            <td>{{answer.selected_option}}</td>\r\n                                            <td><label><i *ngIf=\"question['option_' + answer.selected_option.toLowerCase()] == question.correct_option\" class=\"fa fa-check green\"></i><i *ngIf=\"question['option_' + answer.selected_option.toLowerCase()] != question.correct_option\" class=\"fa fa-times red\"></i></label></td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                        <hr/>\r\n                    </ng-container>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"!is_started && !is_ended  && is_ready\" class=\"row\">\r\n                <div class=\"col-xs-12\">\r\n                    <div class=\"col-xs-8 col-xs-offset-2 text-center\">\r\n                        <h3>Ready for the next question</h3>\r\n                        <div class=\"progress\" style=\"\">\r\n                            <div class=\"progress-bar progress-bar-success progress-bar-striped active\" role=\"progressbar\" [ngStyle]=\"{ 'width': ready_progress + '%' }\"></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"get_published_quiz_error\" class=\"col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"x_panel\">\r\n        <div class=\"x_title\">\r\n        </div>\r\n        <div class=\"x_content\">\r\n            <div class=\"row text-center\">\r\n                <h2>{{get_published_quiz_error}}</h2>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/result-message-modal/result-message-modal.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/result-message-modal/result-message-modal.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal fade\" id=\"resultMessageModal\" role=\"dialog\">\r\n    <div class=\"vertical-alignment-helper\">\r\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                    <h4 class=\"modal-title\">{{modal_title}}</h4>\r\n                </div>\r\n                <form class=\"form-horizontal form-label-left\">\r\n                    <div class=\"modal-body\">\r\n                        <div class=\"form-group\">\r\n                            <div *ngIf=\"modal_title == 'failure'\" class=\"alert-danger alert text-center\">\r\n                                {{modal_message}}\r\n                            </div>\r\n                            <div *ngIf=\"modal_title == 'success'\" class=\"alert-success alert text-center\">\r\n                                {{modal_message}}\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/send-feedback-modal/send-feedback-modal.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/send-feedback-modal/send-feedback-modal.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal fade\" id=\"sendFeedbackModal\" role=\"dialog\">\r\n    <div class=\"vertical-alignment-helper\">\r\n        <div class=\"modal-dialog\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                    <h4 class=\"modal-title\">Feedback</h4>\r\n                </div>\r\n                <form class=\"form-horizontal form-label-left\">\r\n                    <div class=\"modal-body\">\r\n                        <div class=\"row\">\r\n                            <ng-container *ngIf=\"authService.current_user.role_id == appService.userType.teacher\">\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"control-label col-md-6 col-sm-6 col-xs-12\"> Receiver : Academic Affair </label>\r\n                                </div>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"authService.current_user.role_id == appService.userType.student\">\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"control-label col-md-3 col-sm-3 col-xs-12\"> Receiver* </label>\r\n                                    <div class=\"col-md-9 col-sm-9 col-xs-12\">\r\n                                        <select class=\"form-control\" name=\"receiver\" [(ngModel)]=\"selected_receiver\">\r\n                                            <option *ngFor=\"let receiver of receivers\" [value]=\"receiver.id\">{{receiver.title}}</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\" *ngIf=\"selected_receiver\">\r\n                                    <label class=\"control-label col-md-3 col-sm-3 col-xs-12\"> Lecturer/TA* </label>\r\n                                    <div class=\"col-md-9 col-sm-9 col-xs-12\">\r\n                                        <select class=\"form-control\" name=\"teacher\" [(ngModel)]=\"selected_teacher\">\r\n                                            <option *ngFor=\"let teacher of teacher_list\" [value]=\"teacher.id\">{{teacher.name}}</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-container>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\"> Category* </label>\r\n                                <div class=\"col-md-9 col-sm-9 col-xs-12\">\r\n                                    <select class=\"form-control\" name=\"category\" [(ngModel)]=\"selected_category\">\r\n                                        <ng-container *ngFor=\"let category of appService.feedback_categories\">\r\n                                            <option *ngIf=\"category.id > 0\" [value]=\"category.id\">{{category.title}}</option>\r\n                                        </ng-container>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\"> Title* </label>\r\n                                <div class=\"col-md-9 col-sm-9 col-xs-12\">\r\n                                    <input type=\"text\" name=\"title\" class=\"form-control\" [(ngModel)]=\"title\" />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\"> Content* </label>\r\n                                <div class=\"col-md-9 col-sm-9 col-xs-12\">\r\n                                    <textarea class=\"form-control\" name=\"content\" rows=\"4\" [(ngModel)]=\"content\"></textarea>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"authService.current_user.role_id != appService.userType.teacher\" class=\"form-group\">\r\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-11\"> Anonymous? </label>\r\n                                <div class=\"col-xs-1\">\r\n                                    <input class=\"form-control\" type=\"checkbox\" name=\"isAnonymous\" [(ngModel)]=\"isAnonymous\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                        <button type=\"button\" class=\"btn btn-default btn-success\" (click)=\"onSendFeedback()\">Send</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/side-menu/side-menu.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/side-menu/side-menu.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"left_col_content\">\r\n    <div class=\"navbar nav_title \" style=\"border: 0;\">\r\n        <a routerLink=\"/\" routerLinkActive=\"active\" class=\"site_title\"><span> Attendance Website</span></a>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n    <!-- sidebar menu -->\r\n    <div id=\"sidebar-menu\" class=\"main_menu_side hidden-print main_menu\">\r\n        <div class=\"menu_section\">\r\n            <ul class=\"nav side-menu\">\r\n                <li *ngFor=\"let route of sideMenu\">\r\n                    <a *ngIf=\"!route.subMenu\" routerLink=\"{{route.url}}\" routerLinkActive=\"active\"><i class=\"fa {{route.icon}}\"></i>{{route.title}}</a>\r\n                    <a *ngIf=\"route.subMenu\"><i class=\"fa {{route.icon}}\"></i>{{route.title}}<span class=\"fa fa-chevron-down\"></span></a>\r\n                    <ul *ngIf=\"route.subMenu\" class=\"nav child_menu\">\r\n                        <li *ngFor=\"let subroute of route.subMenu\"><a routerLink=\"{{subroute.url}}\">{{subroute.title}}</a></li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <!-- /sidebar menu -->\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/top-navigation/top-navigation.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/top-navigation/top-navigation.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nav_menu\">\r\n    <nav>\r\n        <div class=\"nav toggle\">\r\n            <a id=\"menu_toggle\"><i class=\"fa fa-bars\"></i></a>\r\n        </div>\r\n<!--         <div class=\"navbar-nav\" style=\"padding-top: 12px\">\r\n            <select class=\"form-control\" [(ngModel)]=\"selected_language\" (ngModelChange)=\"onChangeLanguage()\">\r\n                <option *ngFor=\"let language of languages\" [value]=\"language.id\">{{language.name}}</option>\r\n            </select>\r\n        </div> -->\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n            <li class=\"\">\r\n                <a class=\"user-profile dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                    <img id=\"topNavPic\" [src]=\"authService.current_user.avatar\">\r\n                    <strong>{{authService.current_user.first_name}} {{authService.current_user.last_name}} <span class=\" fa fa-angle-down\"></span></strong>\r\n                </a>\r\n                <ul class=\"dropdown-menu dropdown-usermenu pull-right\">\r\n                    <li><a (click)=\"onChangePassword()\"><i class=\"fa fa-cog pull-right\"></i> Change Password</a></li>\r\n                    <li><a (click)=\"logout()\"><i class=\"fa fa-sign-out pull-right\"></i> Logout </a></li>\r\n                </ul>\r\n            </li>\r\n            <li role=\"presentation\" class=\"dropdown\">\r\n                <a href=\"javascript:;\" class=\"dropdown-toggle info-number\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                    <i class=\"fa fa-bell-o\"></i>\r\n                    <span *ngIf=\"notifications.length != 0\" class=\"badge bg-green\">{{notifications.length}}</span>\r\n                </a>\r\n                <ul id=\"menu1\" class=\"dropdown-menu list-unstyled msg_list\" role=\"menu\">\r\n                    <li *ngIf=\"notifications.length == 0\">\r\n                        <a class=\"text-center\">\r\n                            <label>No notification</label>\r\n                        </a>\r\n                    </li>\r\n                    <ng-container *ngIf=\"notifications.length != 0\">\r\n                        <li *ngFor=\"let notification of notifications;let i = index\">\r\n                            <a (click)=\"onNotificationClick(i)\">\r\n                                <span class=\"image\"><i class=\"fa fa-envelope\"></i></span>\r\n                                <span>\r\n                                <span>{{notification.from}}</span>\r\n                                <span class=\"time\">{{notification.created_at | date:'short'}}</span>\r\n                                </span>\r\n                                <span class=\"message\">{{notification.message}}</span>\r\n                            </a>\r\n                        </li>\r\n                    </ng-container>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n    </nav>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
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
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-component',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
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
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var http_1 = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ng2_file_upload_1 = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var login_component_1 = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var logout_component_1 = __webpack_require__(/*! ./logout.component */ "./src/app/logout.component.ts");
var forgot_password_component_1 = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
var register_component_1 = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
var shared_module_1 = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var http_loader_1 = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
var http_2 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var ROUTES = [
    { path: '', loadChildren: 'app/layout/layout.module#LayoutModule' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'logout', component: logout_component_1.LogoutComponent },
    { path: 'forgot-password', component: forgot_password_component_1.ForgotPasswordComponent },
    { path: 'qr-code', component: shared_module_1.QRCodeComponent },
    { path: 'quiz/display', component: shared_module_1.QuizDisplayComponent },
    { path: '**', component: shared_module_1.PageNotFoundComponent },
];
function HttpLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
exports.HttpLoaderFactory = HttpLoaderFactory;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                forgot_password_component_1.ForgotPasswordComponent,
                logout_component_1.LogoutComponent,
                register_component_1.RegisterComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                ng2_file_upload_1.FileUploadModule,
                http_2.HttpClientModule,
                shared_module_1.SharedModule,
                router_1.RouterModule.forRoot(ROUTES),
                core_2.TranslateModule.forRoot({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [http_2.HttpClient]
                    }
                })
            ],
            providers: [
                { provide: core_1.LOCALE_ID, useValue: "vi-VN" },
                shared_module_1.AuthService, shared_module_1.AuthGuardService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
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
var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(route, appService, authService, router, localStorage) {
        this.route = route;
        this.appService = appService;
        this.authService = authService;
        this.router = router;
        this.localStorage = localStorage;
        this.email = '';
        this.password = '';
        this.confirm_password = '';
        this.apiResult = 'failure';
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { _this.reset_token = params['token']; });
        if (this.reset_token) {
            this.authService.resetPasswordCheck(this.reset_token).subscribe(function (result) {
                _this.reset_password_check = result.result;
                _this.error_message = result.message;
            }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't check reset password", 'error'); });
        }
    };
    ForgotPasswordComponent.prototype.resetPassword = function () {
        var _this = this;
        this.error_message = '';
        this.authService.resetPassword(this.password, this.confirm_password, this.reset_token).subscribe(function (result) {
            if (result.result == 'success') {
                _this.success_message = "Successfully changed your password ! Returning to login page...";
                setTimeout(function () {
                    _this.router.navigate(['/login']);
                }, 3000);
            }
            else {
                _this.error_message = result.message;
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't reset password", 'error'); });
    };
    ForgotPasswordComponent.prototype.forgotPassword = function () {
        var _this = this;
        this.authService.forgotPassword(this.email).subscribe(function (results) {
            _this.apiResult = results.result;
            if (results.result == 'failure') {
                _this.error_message = results.message;
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't proceed forgot password", 'error'); });
    };
    ForgotPasswordComponent.prototype.continue = function () {
        this.router.navigate(['/login']);
    };
    ForgotPasswordComponent.ctorParameters = function () { return [
        { type: router_1.ActivatedRoute },
        { type: shared_module_1.AppService },
        { type: shared_module_1.AuthService },
        { type: router_1.Router },
        { type: angular_2_local_storage_1.LocalStorageService }
    ]; };
    ForgotPasswordComponent = __decorate([
        core_1.Component({
            selector: 'app-forgot-password',
            template: __importDefault(__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html")).default,
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, shared_module_1.AppService, shared_module_1.AuthService, router_1.Router, angular_2_local_storage_1.LocalStorageService])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());
exports.ForgotPasswordComponent = ForgotPasswordComponent;


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
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
var LoginComponent = /** @class */ (function () {
    function LoginComponent(appService, authService, router, localStorage) {
        this.appService = appService;
        this.authService = authService;
        this.router = router;
        this.localStorage = localStorage;
        this.username = '';
        this.password = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.localStorage.get('isLoggedIn')) {
            this.authService.current_user = this.localStorage.get('current_user');
            this.authService.token = this.localStorage.get('token').toString();
            this.router.navigate(['/dashboard']);
        }
    };
    LoginComponent.prototype.keyDownFunction = function (event) {
        if (event.keyCode == 13) {
            this.login();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.redirectMessage = '';
        this.authService.login(this.username, this.password).subscribe(function (results) {
            if (results.result == 'success') {
                _this.authService.token = results.token;
                _this.authService.current_user = results.user;
                //save to localStorage
                _this.localStorage.set('isLoggedIn', true);
                _this.localStorage.set('token', results.token);
                _this.localStorage.set('current_user', results.user);
                //let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.error_message = results.message;
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't login", 'error'); });
    };
    LoginComponent.prototype.forgotPassword = function () {
        this.router.navigate(['/forgot-password']);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: shared_module_1.AppService },
        { type: shared_module_1.AuthService },
        { type: router_1.Router },
        { type: angular_2_local_storage_1.LocalStorageService }
    ]; };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        }),
        __metadata("design:paramtypes", [shared_module_1.AppService, shared_module_1.AuthService, router_1.Router, angular_2_local_storage_1.LocalStorageService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/logout.component.ts":
/*!*************************************!*\
  !*** ./src/app/logout.component.ts ***!
  \*************************************/
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
var shared_module_1 = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    LogoutComponent.ctorParameters = function () { return [
        { type: shared_module_1.AuthService },
        { type: router_1.Router }
    ]; };
    LogoutComponent = __decorate([
        core_1.Component({
            selector: 'app-logout',
            template: '<div></div>',
        }),
        __metadata("design:paramtypes", [shared_module_1.AuthService, router_1.Router])
    ], LogoutComponent);
    return LogoutComponent;
}());
exports.LogoutComponent = LogoutComponent;


/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
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
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var angular_2_local_storage_1 = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/fesm5/angular-2-local-storage.js");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(route, appService, authService, router, localStorage, element) {
        this.route = route;
        this.appService = appService;
        this.authService = authService;
        this.router = router;
        this.localStorage = localStorage;
        this.element = element;
        this.email = '';
        this.first_name = '';
        this.last_name = '';
        this.phone = '';
        this.avatar_link = this.appService.default_avatar;
        this.password = '';
        this.confirm_password = '';
        this.apiResult = 'failure';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { _this.reset_token = params['token']; });
        if (this.reset_token) {
            this.authService.registerCheck(this.reset_token).subscribe(function (result) {
                _this.register_check = result.result;
                _this.error_message = result.message;
                if (_this.register_check == 'success') {
                    setTimeout(function () {
                        var image = _this.element.nativeElement.querySelector('#profilePic');
                        image.src = _this.appService.default_avatar;
                        _this.first_name = result.user.first_name;
                        _this.last_name = result.user.last_name;
                        _this.phone = result.user.phone;
                    }, 1000);
                }
            }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't check register token", 'error'); });
        }
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.authService.register(this.first_name, this.last_name, this.phone, this.avatar_link, this.password, this.confirm_password, this.reset_token).subscribe(function (result) {
            jQuery('#progressModal').modal('hide');
            if (result.result == 'success') {
                _this.success_message = "Successfully register your account ! Returning to login page...";
                _this.register_check = '';
                setTimeout(function () {
                    _this.router.navigate(['/login']);
                }, 3000);
            }
            else {
                _this.error_message = result.message;
            }
        }, function (error) {
            jQuery('#progressModal').modal('hide');
            _this.appService.showPNotify('failure', "Server Error! Can't register", 'error');
        });
    };
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        this.error_message = '';
        jQuery('#progressModal').modal({ backdrop: 'static', keyboard: false });
        if (this.avatar != null) {
            this.appService.uploadAvatar(this.avatar).subscribe(function (result) {
                _this.avatar_link = result['data'].link;
                _this.register();
            }, function (error) {
                jQuery('#progressModal').modal('hide');
                _this.appService.showPNotify('failure', "Error! Can't upload new profile picture", 'error');
            });
        }
        else {
            this.register();
        }
    };
    RegisterComponent.prototype.continue = function () {
        this.router.navigate(['/login']);
    };
    RegisterComponent.prototype.onEditProfilePic = function (event) {
        var reader = new FileReader();
        var image = this.element.nativeElement.querySelector('#profilePic');
        reader.onload = function (e) {
            var src = e.target['result'];
            image.src = src;
        };
        this.avatar = event.target.files[0];
        reader.readAsDataURL(event.target.files[0]);
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: router_1.ActivatedRoute },
        { type: shared_module_1.AppService },
        { type: shared_module_1.AuthService },
        { type: router_1.Router },
        { type: angular_2_local_storage_1.LocalStorageService },
        { type: core_1.ElementRef }
    ]; };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            template: __importDefault(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, shared_module_1.AppService, shared_module_1.AuthService,
            router_1.Router, angular_2_local_storage_1.LocalStorageService, core_1.ElementRef])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "./src/app/shared/components/create-absence-request-modal/create-absence-request-modal.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/shared/components/create-absence-request-modal/create-absence-request-modal.component.ts ***!
  \**********************************************************************************************************/
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
var absence_request_service_1 = __webpack_require__(/*! ../../services/absence-request.service */ "./src/app/shared/services/absence-request.service.ts");
var app_service_1 = __webpack_require__(/*! ../../services/app.service */ "./src/app/shared/services/app.service.ts");
var CreateAbsenceRequestModalComponent = /** @class */ (function () {
    function CreateAbsenceRequestModalComponent(absenceRequestService, appService) {
        this.absenceRequestService = absenceRequestService;
        this.appService = appService;
        this.onConfirmed = new core_1.EventEmitter();
        this.new_reason = "";
    }
    CreateAbsenceRequestModalComponent.prototype.onOpenModal = function () {
        jQuery("#createAbsenceRequestModal").modal("show");
    };
    CreateAbsenceRequestModalComponent.prototype.onConfirmCreateRequest = function () {
        var _this = this;
        this.new_start_date = jQuery('#from_to').data('daterangepicker').startDate;
        this.new_end_date = jQuery('#from_to').data('daterangepicker').endDate;
        this.absenceRequestService.createAbsenceRequests(this.new_reason, this.new_start_date, this.new_end_date).subscribe(function (result) {
            _this.apiResult = result.result;
            _this.apiResultMessage = result.message;
            _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
            if (_this.apiResult == 'success') {
                _this.new_reason = '';
                jQuery("#createAbsenceRequestModal").modal("hide");
                _this.onConfirmed.emit('success');
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't create absence request", 'error'); });
    };
    CreateAbsenceRequestModalComponent.prototype.ngOnInit = function () {
        jQuery('#from_to').daterangepicker(null, function (start, end, label) {
        });
    };
    CreateAbsenceRequestModalComponent.ctorParameters = function () { return [
        { type: absence_request_service_1.AbsenceRequestService },
        { type: app_service_1.AppService }
    ]; };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], CreateAbsenceRequestModalComponent.prototype, "classes", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], CreateAbsenceRequestModalComponent.prototype, "onConfirmed", void 0);
    CreateAbsenceRequestModalComponent = __decorate([
        core_1.Component({
            selector: 'create-absence-request-modal',
            template: __importDefault(__webpack_require__(/*! raw-loader!./create-absence-request-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/create-absence-request-modal/create-absence-request-modal.component.html")).default,
        }),
        __metadata("design:paramtypes", [absence_request_service_1.AbsenceRequestService, app_service_1.AppService])
    ], CreateAbsenceRequestModalComponent);
    return CreateAbsenceRequestModalComponent;
}());
exports.CreateAbsenceRequestModalComponent = CreateAbsenceRequestModalComponent;


/***/ }),

/***/ "./src/app/shared/components/edit-schedule-modal/edit-schedule-modal.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/edit-schedule-modal/edit-schedule-modal.component.ts ***!
  \****************************************************************************************/
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
var EditScheduleModalComponent = /** @class */ (function () {
    function EditScheduleModalComponent() {
        this.view_only = false;
        this.onSave = new core_1.EventEmitter();
        this.editingCellIndex = -1;
        this.temp_room = '';
        this.temp_type = '';
        this.scheduleOutput = [];
        this.sessions = [];
        this.current_class_id = 0;
    }
    EditScheduleModalComponent.prototype.initSessions = function () {
        this.sessions = [];
        for (var i = 0; i < this.classes.length; i++) {
            var temp_sessions = [
                { room: '', type: 'LT' },
                { room: '', type: 'LT' },
                { room: '', type: 'LT' },
                { room: '', type: 'LT' },
                { room: '', type: 'LT' },
                { room: '', type: 'LT' },
                { room: '', type: 'LT' },
                { room: '', type: 'LT' },
                { room: '', type: 'LT' },
                { room: '', type: 'LT' },
                { room: '', type: 'LT' },
                { room: '', type: 'LT' },
                { room: '', type: 'LT' },
                { room: '', type: 'LT' },
                { room: '', type: 'LT' },
                { room: '', type: 'LT' },
                { room: '', type: 'LT' },
                { room: '', type: 'LT' },
                { room: '', type: 'LT' },
                { room: '', type: 'LT' },
                { room: '', type: 'LT' },
                { room: '', type: 'LT' },
                { room: '', type: 'LT' },
                { room: '', type: 'LT' },
            ];
            this.sessions.push(temp_sessions);
        }
    };
    EditScheduleModalComponent.prototype.onChangeClass = function (index) {
        this.current_class_id = index;
    };
    EditScheduleModalComponent.prototype.onOpenModal = function () {
        jQuery("#" + this.modal_id).modal("show");
        this.current_class_id = 0;
        this.initSessions();
        for (var i = 0; i < this.classes.length; i++) {
            if (this.classes[i].schedules == undefined || this.classes[i].schedules == '')
                continue;
            var schedule = this.classes[i].schedules.split(';');
            for (var j = 0; j < schedule.length; j++) {
                var temp = schedule[j].split('-');
                var index = temp[0];
                var room = temp[1];
                var type = temp[2];
                this.sessions[i][index].room = room;
                this.sessions[i][index].type = type;
            }
        }
    };
    EditScheduleModalComponent.prototype.onCancelModal = function () {
        this.initSessions();
        this.editingCellIndex = -1;
        jQuery("#" + this.modal_id).modal("hide");
    };
    EditScheduleModalComponent.prototype.onSaveModal = function () {
        this.scheduleOutput = [];
        for (var i = 0; i < this.sessions.length; i++) {
            var temp_schedule = '';
            for (var j = 0; j < this.sessions[i].length; j++) {
                if (this.sessions[i][j].room != '') {
                    temp_schedule += j + '-' + this.sessions[i][j].room + '-' + this.sessions[i][j].type + ';';
                }
            }
            this.scheduleOutput.push(temp_schedule.substr(0, temp_schedule.length - 1));
        }
        this.onSave.emit(this.scheduleOutput);
        //this.initSessions();
        jQuery("#" + this.modal_id).modal("hide");
    };
    EditScheduleModalComponent.prototype.onCellClick = function (index) {
        this.editingCellIndex = index;
        this.temp_room = this.sessions[this.current_class_id][index].room;
        this.temp_type = this.sessions[this.current_class_id][index].type;
        setTimeout(function () {
            jQuery('#roomInput').focus();
        }, 500);
    };
    EditScheduleModalComponent.prototype.onCancelCell = function () {
        this.editingCellIndex = -1;
    };
    EditScheduleModalComponent.prototype.onRemoveCell = function () {
        this.sessions[this.current_class_id][this.editingCellIndex].room = '';
        this.sessions[this.current_class_id][this.editingCellIndex].type = 'LT';
        this.editingCellIndex = -1;
    };
    EditScheduleModalComponent.prototype.onUpdateCell = function () {
        this.sessions[this.current_class_id][this.editingCellIndex].room = this.temp_room;
        this.sessions[this.current_class_id][this.editingCellIndex].type = this.temp_type;
        this.editingCellIndex = -1;
    };
    EditScheduleModalComponent.prototype.ngOnInit = function () {
        this.initSessions();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], EditScheduleModalComponent.prototype, "modal_id", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], EditScheduleModalComponent.prototype, "modal_title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], EditScheduleModalComponent.prototype, "view_only", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], EditScheduleModalComponent.prototype, "classes", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], EditScheduleModalComponent.prototype, "onSave", void 0);
    EditScheduleModalComponent = __decorate([
        core_1.Component({
            selector: 'edit-schedule-modal',
            template: __importDefault(__webpack_require__(/*! raw-loader!./edit-schedule-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/edit-schedule-modal/edit-schedule-modal.component.html")).default,
        }),
        __metadata("design:paramtypes", [])
    ], EditScheduleModalComponent);
    return EditScheduleModalComponent;
}());
exports.EditScheduleModalComponent = EditScheduleModalComponent;


/***/ }),

/***/ "./src/app/shared/components/export-modal/export-modal.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/export-modal/export-modal.component.ts ***!
  \**************************************************************************/
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
var shared_module_1 = __webpack_require__(/*! ../../shared.module */ "./src/app/shared/shared.module.ts");
var ExportModalComponent = /** @class */ (function () {
    function ExportModalComponent(excelService, appService, studentService, teacherService, courseService, scheduleService) {
        this.excelService = excelService;
        this.appService = appService;
        this.studentService = studentService;
        this.teacherService = teacherService;
        this.courseService = courseService;
        this.scheduleService = scheduleService;
        this.classes = [];
        this.programs = [];
        this.program_has_course = [];
        this.export_on_search = 0;
        this.export_list = [];
        this.export_progress = 0;
        this.isExporting = false;
        this.select_all_class = 0;
        this.select_all_program_has_course = [];
        this.select_all_program = 0;
        this.file_name = '';
        this.larger_modal = false;
        this.semesters = [];
    }
    ExportModalComponent.prototype.ngOnInit = function () { };
    ExportModalComponent.prototype.onGetProgramHasCourse = function () {
        var _this = this;
        this.courseService.getProgramHasCourse(this.selectedSemester).subscribe(function (result) {
            _this.program_has_course = result.program_has_course;
            for (var i = 0; i < _this.program_has_course.length; i++) {
                for (var j = 0; j < _this.program_has_course[i].courses.length; j++) {
                    _this.program_has_course[i].courses[j]['selected'] = false;
                }
                _this.select_all_program_has_course.push(0);
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get program_has_course", 'error'); });
    };
    ExportModalComponent.prototype.onOpenModal = function () {
        var _this = this;
        this.file_name = '';
        this.export_progress = 0;
        switch (this.export_type) {
            case this.appService.import_export_type.student:
            case this.appService.import_export_type.course:
            case this.appService.import_export_type.schedule:
                this.export_on_search = 1;
                this.appService.getSemesterProgramClass().subscribe(function (result) {
                    _this.classes = result.classes;
                    for (var i = 0; i < _this.classes.length; i++) {
                        _this.classes[i]['selected'] = false;
                    }
                    _this.programs = result.programs;
                    for (var i = 0; i < _this.programs.length; i++) {
                        _this.programs[i]['selected'] = false;
                    }
                }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't semester class program", 'error'); });
                break;
            case this.appService.import_export_type.teacher:
                this.export_on_search = 1;
                break;
            case this.appService.import_export_type.examinees:
            case this.appService.import_export_type.attendance_summary:
            case this.appService.import_export_type.attendance_lists:
            case this.appService.import_export_type.exceeded_absence_limit:
                this.export_on_search = 0;
                this.larger_modal = true;
                this.appService.getSemesterProgramClass().subscribe(function (results) {
                    _this.semesters = results.semesters;
                    _this.selectedSemester = _this.semesters.length > 0 ? _this.semesters[_this.semesters.length - 1].id : 0;
                    _this.onGetProgramHasCourse();
                }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get semester_program_class", 'error'); });
                break;
            default:
                // code...
                break;
        }
        jQuery("#exportModal").modal({ backdrop: 'static', keyboard: false });
    };
    ExportModalComponent.prototype.onSelectAllClass = function () {
        for (var i = 0; i < this.classes.length; i++) {
            this.classes[i]['selected'] = this.select_all_class;
        }
    };
    ExportModalComponent.prototype.onSelectAllProgram = function () {
        for (var i = 0; i < this.programs.length; i++) {
            this.programs[i]['selected'] = this.select_all_program;
        }
    };
    ExportModalComponent.prototype.onSelectAllProgramHasCourse = function (index) {
        for (var j = 0; j < this.program_has_course[index].courses.length; j++) {
            this.program_has_course[index].courses[j]['selected'] = this.select_all_program_has_course[index];
        }
    };
    ExportModalComponent.prototype.onCancelExport = function () {
        this.isExporting = false;
        jQuery("#exportModal").modal("hide");
    };
    ExportModalComponent.prototype.onExport = function () {
        switch (this.export_type) {
            case this.appService.import_export_type.student:
                this.exportStudent();
                break;
            case this.appService.import_export_type.teacher:
                this.exportTeacher();
                break;
            case this.appService.import_export_type.course:
                this.exportCourse();
                break;
            case this.appService.import_export_type.schedule:
                this.exportSchedule();
                break;
            case this.appService.import_export_type.examinees:
                this.exportExaminees();
                break;
            case this.appService.import_export_type.attendance_summary:
                this.exportAttendanceSummary();
                break;
            case this.appService.import_export_type.attendance_lists:
                this.exportAttendanceLists();
                break;
            case this.appService.import_export_type.exceeded_absence_limit:
                this.exportExceededAbsenceLimit();
                break;
            default:
                // code...
                break;
        }
    };
    ExportModalComponent.prototype.onStopExport = function () {
    };
    ExportModalComponent.prototype.exportStudent = function () {
        var _this = this;
        if (!this.export_on_search) {
            var selected_classes = [];
            var selected_classes_name = [];
            for (var i = 0; i < this.classes.length; i++) {
                if (this.classes[i].selected) {
                    selected_classes.push(this.classes[i].id);
                    selected_classes_name.push(this.classes[i].name);
                }
            }
            if (selected_classes.length == 0) {
                this.isExporting = false;
            }
            else {
                this.studentService.exportStudent(selected_classes).subscribe(function (result) {
                    var student_lists = result.student_lists;
                    _this.excelService.writeStudentLists(student_lists, selected_classes_name);
                    _this.isExporting = false;
                }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get student list", 'error'); });
            }
        }
        else {
            this.studentService.getListStudents(this.search_data['program_id'], this.search_data['class_id'], this.search_data['status'], this.search_data['search_text'], 1, -1).subscribe(function (result) {
                var student_list = result.student_list;
                _this.excelService.writeStudentSearchList(student_list, _this.file_name);
                _this.isExporting = false;
            }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get student list", 'error'); });
        }
    };
    ExportModalComponent.prototype.exportTeacher = function () {
        var _this = this;
        this.teacherService.getListTeachers(this.search_data['search_text'], 1, -1, this.search_data['sort_tag']).subscribe(function (result) {
            var teacher_list = result.teacher_list;
            _this.excelService.writeTeacherSearchList(teacher_list, _this.file_name);
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get teacher list", 'error'); });
    };
    ExportModalComponent.prototype.exportCourse = function () {
        var _this = this;
        if (!this.export_on_search) {
            var selected_classes = [];
            for (var i = 0; i < this.classes.length; i++) {
                if (this.classes[i].selected) {
                    selected_classes.push(this.classes[i].id);
                }
            }
            if (selected_classes.length == 0) {
                return;
            }
            else {
                this.courseService.exportCourse(selected_classes).subscribe(function (result) {
                    var course_lists = result.course_lists;
                    _this.excelService.writeCourseLists(course_lists);
                }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get course lists", 'error'); });
            }
        }
        else {
            this.courseService.getCourseLists(this.search_data['program_id'], this.search_data['class_id'], this.search_data['semester_id'], this.search_data['search_text']).subscribe(function (result) {
                var course_list = result.courses;
                _this.excelService.writeCourseSearchList(course_list, _this.file_name);
            }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get course list", 'error'); });
        }
    };
    ExportModalComponent.prototype.exportSchedule = function () {
        var _this = this;
        if (!this.export_on_search) {
            var selected_classes = [];
            var selected_programs = [];
            for (var i = 0; i < this.classes.length; i++) {
                if (this.classes[i].selected) {
                    selected_classes.push(this.classes[i].id);
                }
            }
            for (var i = 0; i < this.programs.length; i++) {
                if (this.programs[i].selected) {
                    selected_programs.push(this.programs[i].id);
                }
            }
            if (selected_classes.length == 0 && selected_programs.length == 0) {
                return;
            }
            else {
                this.scheduleService.exportSchedule(selected_programs, selected_classes)
                    .subscribe(function (result) {
                    var schedules = result.schedules;
                    _this.excelService.writeScheduleLists(schedules);
                }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get schedules", 'error'); });
            }
        }
        else {
            this.scheduleService.getSchedulesAndCourses(this.search_data['program_id'], this.search_data['class_id'], this.search_data['semester_id'])
                .subscribe(function (result) {
                var courses = result.courses;
                _this.excelService.writeScheduleSearchList(courses, _this.search_data['semester'], _this.file_name);
            }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get schedule and courses", 'error'); });
        }
    };
    ExportModalComponent.prototype.exportExaminees = function () {
        var _this = this;
        var selected_class_has_course_id = [];
        var selected_class_has_course = [];
        for (var i = 0; i < this.program_has_course.length; i++) {
            for (var j = 0; j < this.program_has_course[i].courses.length; j++) {
                if (this.program_has_course[i].courses[j].selected) {
                    selected_class_has_course_id.push(this.program_has_course[i].courses[j].id);
                    this.program_has_course[i].courses[j]['program'] = this.program_has_course[i].name;
                    selected_class_has_course.push(this.program_has_course[i].courses[j]);
                }
            }
        }
        if (selected_class_has_course_id.length == 0) {
            return;
        }
        else {
            this.studentService.exportExaminees(selected_class_has_course_id).subscribe(function (result) {
                var examinees_lists = result.examinees_lists;
                _this.excelService.writeExamineesLists(examinees_lists, selected_class_has_course);
            }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get examinees lists", 'error'); });
        }
    };
    ExportModalComponent.prototype.exportAttendanceSummary = function () {
        var _this = this;
        var selected_class_has_course_id = [];
        var selected_class_has_course = [];
        for (var i = 0; i < this.program_has_course.length; i++) {
            for (var j = 0; j < this.program_has_course[i].courses.length; j++) {
                if (this.program_has_course[i].courses[j].selected) {
                    selected_class_has_course_id.push(this.program_has_course[i].courses[j].id);
                    selected_class_has_course.push(this.program_has_course[i].courses[j]);
                }
            }
        }
        if (selected_class_has_course_id.length == 0) {
            return;
        }
        else {
            this.studentService.exportAttendanceSummary(selected_class_has_course_id).subscribe(function (result) {
                var attendance_summary_lists = result.attendance_summary_lists;
                _this.excelService.writeAttendanceSummary(attendance_summary_lists, selected_class_has_course);
            }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get attendance summary", 'error'); });
        }
    };
    ExportModalComponent.prototype.exportAttendanceLists = function () {
        var _this = this;
        var selected_class_has_course_id = [];
        var selected_class_has_course = [];
        for (var i = 0; i < this.program_has_course.length; i++) {
            for (var j = 0; j < this.program_has_course[i].courses.length; j++) {
                if (this.program_has_course[i].courses[j].selected) {
                    selected_class_has_course_id.push(this.program_has_course[i].courses[j].id);
                    selected_class_has_course.push(this.program_has_course[i].courses[j]);
                }
            }
        }
        if (selected_class_has_course_id.length == 0) {
            return;
        }
        else {
            this.studentService.exportAttendanceLists(selected_class_has_course_id).subscribe(function (result) {
                var attendance_lists = result.attendance_lists;
                _this.excelService.writeAttendanceLists(attendance_lists, selected_class_has_course);
            }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get attendance lists", 'error'); });
        }
    };
    ExportModalComponent.prototype.exportExceededAbsenceLimit = function () {
        var _this = this;
        var selected_class_has_course_id = [];
        var selected_class_has_course = [];
        for (var i = 0; i < this.program_has_course.length; i++) {
            for (var j = 0; j < this.program_has_course[i].courses.length; j++) {
                if (this.program_has_course[i].courses[j].selected) {
                    selected_class_has_course_id.push(this.program_has_course[i].courses[j].id);
                    selected_class_has_course.push(this.program_has_course[i].courses[j]);
                }
            }
        }
        if (selected_class_has_course_id.length == 0) {
            return;
        }
        else {
            this.studentService.exportExceededAbsenceLimit(selected_class_has_course_id).subscribe(function (result) {
                var attendance_summary_lists = result.exceeded_absence_limit;
                _this.excelService.writeExceededAbsenceLimit(attendance_summary_lists, selected_class_has_course);
            }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get exceeded absence limit", 'error'); });
        }
    };
    ExportModalComponent.ctorParameters = function () { return [
        { type: shared_module_1.ExcelService },
        { type: shared_module_1.AppService },
        { type: shared_module_1.StudentService },
        { type: shared_module_1.TeacherService },
        { type: shared_module_1.CourseService },
        { type: shared_module_1.ScheduleService }
    ]; };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ExportModalComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ExportModalComponent.prototype, "note", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ExportModalComponent.prototype, "export_type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ExportModalComponent.prototype, "search_data", void 0);
    ExportModalComponent = __decorate([
        core_1.Component({
            selector: 'export-modal',
            template: __importDefault(__webpack_require__(/*! raw-loader!./export-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/export-modal/export-modal.component.html")).default,
        }),
        __metadata("design:paramtypes", [shared_module_1.ExcelService, shared_module_1.AppService, shared_module_1.StudentService,
            shared_module_1.TeacherService, shared_module_1.CourseService, shared_module_1.ScheduleService])
    ], ExportModalComponent);
    return ExportModalComponent;
}());
exports.ExportModalComponent = ExportModalComponent;


/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
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
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html")).default,
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/app/shared/components/import-modal/import-modal.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/import-modal/import-modal.component.ts ***!
  \**************************************************************************/
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
var ng2_file_upload_1 = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
var shared_module_1 = __webpack_require__(/*! ../../shared.module */ "./src/app/shared/shared.module.ts");
var ImportModalComponent = /** @class */ (function () {
    function ImportModalComponent(excelService, appService, studentService, teacherService, courseService, scheduleService) {
        this.excelService = excelService;
        this.appService = appService;
        this.studentService = studentService;
        this.teacherService = teacherService;
        this.courseService = courseService;
        this.scheduleService = scheduleService;
        this.onClose = new core_1.EventEmitter();
        this.import_list = [];
        this.uploader = new ng2_file_upload_1.FileUploader({ url: '' });
        this.import_progress = 0;
        this.isImporting = false;
        this.file_index = 0;
    }
    ImportModalComponent.prototype.ngOnInit = function () {
        this.import_progress = 0;
    };
    ImportModalComponent.prototype.onSelectFile = function (files) {
        if (this.import_type == this.appService.import_export_type.attendance_list) {
            var file_list = Array.prototype.slice.call(files);
            var _import = {
                file: file_list[0],
                result: '',
                result_message: ''
            };
            this.import_list.push(_import);
        }
        else {
            var file_list = Array.prototype.slice.call(files);
            for (var i = 0; i < file_list.length; i++) {
                var _import = {
                    file: file_list[i],
                    result: '',
                    result_message: ''
                };
                this.import_list.push(_import);
            }
        }
    };
    ImportModalComponent.prototype.onRemoveFile = function (index) {
        for (var i = index; i < this.import_list.length - 1; i++) {
            this.import_list[i].file = this.import_list[i + 1].file;
            this.import_list[i].result = this.import_list[i + 1].result;
        }
        this.import_list.pop();
    };
    ImportModalComponent.prototype.onRemoveAllFile = function (i) {
        this.import_list = [];
        this.isImporting = false;
    };
    ImportModalComponent.prototype.onCancelImport = function () {
        this.isImporting = false;
        jQuery("#importModal").modal("hide");
        this.onClose.emit('close');
    };
    ImportModalComponent.prototype.onImport = function () {
        this.import_progress = 0;
        this.file_index = 0;
        this.isImporting = true;
        if (this.import_list.length > 0) {
            this.loopReadFile();
        }
        else {
            this.isImporting = false;
        }
    };
    ImportModalComponent.prototype.onStopImport = function () {
        this.isImporting = false;
    };
    ImportModalComponent.prototype.onOpenModal = function () {
        this.import_progress = 0;
        this.import_list = [];
        jQuery("#importModal").modal({ backdrop: 'static', keyboard: false });
    };
    ImportModalComponent.prototype.loopReadFile = function () {
        var _this = this;
        if (this.import_progress == 100 || this.isImporting == false) {
            this.isImporting = false;
            console.log('loop end');
            return;
        }
        else {
            setTimeout(function () {
                if (_this.isImporting == false) {
                    _this.isImporting = false;
                    console.log('loop end');
                    return;
                }
                switch (_this.import_type) {
                    case _this.appService.import_export_type.student:
                        _this.readStudentFile(_this.file_index);
                        break;
                    case _this.appService.import_export_type.teacher:
                        _this.readTeacherFile(_this.file_index);
                        break;
                    case _this.appService.import_export_type.course:
                        _this.readCourseFile(_this.file_index);
                        break;
                    case _this.appService.import_export_type.schedule:
                        _this.readScheduleFile(_this.file_index);
                        break;
                    case _this.appService.import_export_type.attendance_list:
                        _this.readAttendanceListFile(_this.file_index);
                        break;
                    default:
                        break;
                }
            }, 2000);
        }
    };
    ImportModalComponent.prototype.checkFileExtension = function (file_index) {
        var file_extenstion = this.import_list[file_index].file['name'].split('.').pop();
        if (file_extenstion == 'xlsx' || file_extenstion == 'xls') {
            return true;
        }
        else {
            this.readFileCallback(file_index, { result: 'failure', message: "Not supported file type!" });
            return false;
        }
    };
    ImportModalComponent.prototype.readFileCallback = function (file_index, result) {
        this.import_list[file_index].result = result.result;
        this.import_list[file_index].result_message = result.message;
        this.import_progress += 100 / this.import_list.length;
        this.file_index++;
        this.loopReadFile();
    };
    ImportModalComponent.prototype.readStudentFile = function (file_index) {
        var _this = this;
        if (this.checkFileExtension(file_index)) {
            this.excelService.readStudentListFile(this.import_list[file_index].file).subscribe(function (result) {
                if (result.result == 'failure') {
                    _this.readFileCallback(file_index, result);
                    return;
                }
                if (result.result == 'success') {
                    var student_list = result.student_list.slice();
                    var class_name = _this.import_list[file_index].file['name'].split('.')[0];
                    _this.studentService.importStudent(class_name, student_list).subscribe(function (result) {
                        _this.readFileCallback(file_index, result);
                    }, function (error) {
                        _this.readFileCallback(file_index, { result: 'failure', message: "Server error ! Can't import student" });
                    });
                }
            }, function (error) {
                _this.readFileCallback(file_index, { result: 'failure', message: "Service error" });
            });
        }
    };
    ImportModalComponent.prototype.readTeacherFile = function (file_index) {
        var _this = this;
        if (this.checkFileExtension(file_index)) {
            this.excelService.readTeacherListFile(this.import_list[file_index].file).subscribe(function (result) {
                if (result.result == 'failure') {
                    _this.readFileCallback(file_index, result);
                    return;
                }
                if (result.result == 'success') {
                    var teacher_list = result.teacher_list.slice();
                    _this.teacherService.importTeacher(teacher_list).subscribe(function (result) {
                        _this.readFileCallback(file_index, result);
                    }, function (error) {
                        _this.readFileCallback(file_index, { result: 'failure', message: "Server error ! Can't import teacher" });
                    });
                }
            }, function (error) {
                _this.readFileCallback(file_index, { result: 'failure', message: "Service error" });
            });
        }
    };
    ImportModalComponent.prototype.readCourseFile = function (file_index) {
        var _this = this;
        if (this.checkFileExtension(file_index)) {
            this.excelService.readCourseListFile(this.import_list[file_index].file).subscribe(function (result) {
                if (result.result == 'failure') {
                    _this.readFileCallback(file_index, result);
                    return;
                }
                if (result.result == 'success') {
                    var course_list = result.course_list.slice();
                    var class_name = _this.import_list[file_index].file['name'].split('.')[0];
                    _this.courseService.importCourse(class_name, course_list).subscribe(function (result) {
                        _this.readFileCallback(file_index, result);
                    }, function (error) {
                        _this.readFileCallback(file_index, { result: 'failure', message: "Server error ! Can't import course" });
                    });
                }
            }, function (error) {
                _this.readFileCallback(file_index, { result: 'failure', message: "Service error" });
            });
        }
    };
    ImportModalComponent.prototype.readAttendanceListFile = function (file_index) {
        var _this = this;
        if (this.checkFileExtension(file_index)) {
            this.excelService.readAttendanceListFile(this.import_list[file_index].file).subscribe(function (result) {
                if (result.result == 'failure') {
                    _this.readFileCallback(file_index, result);
                    return;
                }
                if (result.result == 'success') {
                    jQuery("#importModal").modal("hide");
                    _this.onClose.emit(result.attendance_list);
                }
            }, function (error) {
                _this.readFileCallback(file_index, { result: 'failure', message: "Service error" });
            });
        }
    };
    ImportModalComponent.prototype.readScheduleFile = function (file_index) {
        var _this = this;
        if (this.checkFileExtension(file_index)) {
            this.excelService.readScheduleFile(this.import_list[file_index].file).subscribe(function (result) {
                if (result.result == 'failure') {
                    _this.readFileCallback(file_index, result);
                    return;
                }
                if (result.result == 'success') {
                    _this.readFileCallback(file_index, result);
                    var schedule = result.schedule;
                    _this.scheduleService.importSchedule(schedule).subscribe(function (result) {
                        _this.readFileCallback(file_index, result);
                    }, function (error) {
                        _this.readFileCallback(file_index, { result: 'failure', message: "Server error ! Can't import schedule" });
                    });
                }
            }, function (error) {
                _this.readFileCallback(file_index, { result: 'failure', message: "Service error" });
            });
        }
    };
    ImportModalComponent.ctorParameters = function () { return [
        { type: shared_module_1.ExcelService },
        { type: shared_module_1.AppService },
        { type: shared_module_1.StudentService },
        { type: shared_module_1.TeacherService },
        { type: shared_module_1.CourseService },
        { type: shared_module_1.ScheduleService }
    ]; };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ImportModalComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ImportModalComponent.prototype, "note", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ImportModalComponent.prototype, "import_type", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ImportModalComponent.prototype, "onClose", void 0);
    ImportModalComponent = __decorate([
        core_1.Component({
            selector: 'import-modal',
            template: __importDefault(__webpack_require__(/*! raw-loader!./import-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/import-modal/import-modal.component.html")).default,
        }),
        __metadata("design:paramtypes", [shared_module_1.ExcelService, shared_module_1.AppService, shared_module_1.StudentService,
            shared_module_1.TeacherService, shared_module_1.CourseService, shared_module_1.ScheduleService])
    ], ImportModalComponent);
    return ImportModalComponent;
}());
exports.ImportModalComponent = ImportModalComponent;


/***/ }),

/***/ "./src/app/shared/components/map-modal/map-modal.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/map-modal/map-modal.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\r\n    height: 300px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWFwLW1vZGFsL21hcC1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWFwLW1vZGFsL21hcC1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/map-modal/map-modal.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/map-modal/map-modal.component.ts ***!
  \********************************************************************/
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
var core_2 = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
var MapModalComponent = /** @class */ (function () {
    function MapModalComponent() {
        this.zoom = 15;
        this.lat = 10.762417;
        this.lng = 106.681201;
        this.markers = [
            {
                lat: 10.7896335,
                lng: 106.7022943,
                text: '1'
            },
            {
                lat: 10.7895644,
                lng: 106.7024484,
                text: '3:5'
            },
            {
                lat: 10.7896215,
                lng: 106.7024325,
                text: '9'
            },
            {
                lat: 10.7893873,
                lng: 106.7025177,
                text: '10,4'
            }
        ];
    }
    MapModalComponent.prototype.ngOnInit = function () {
        this.resizeMap();
    };
    MapModalComponent.prototype.ngOnChanges = function () {
        var _this = this;
        setTimeout(function () { _this.map.triggerResize(); }, 500);
    };
    MapModalComponent.prototype.onCloseMap = function () {
        jQuery("#mapModal").modal("hide");
    };
    MapModalComponent.prototype.onOpenModal = function () {
        jQuery("#mapModal").modal({ backdrop: 'static', keyboard: false });
        this.resizeMap();
    };
    MapModalComponent.prototype.resizeMap = function () {
        this.map.triggerResize();
    };
    __decorate([
        core_1.ViewChild('map', { static: false }),
        __metadata("design:type", core_2.AgmMap)
    ], MapModalComponent.prototype, "map", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MapModalComponent.prototype, "title", void 0);
    MapModalComponent = __decorate([
        core_1.Component({
            selector: 'map-modal',
            template: __importDefault(__webpack_require__(/*! raw-loader!./map-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/map-modal/map-modal.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./map-modal.component.css */ "./src/app/shared/components/map-modal/map-modal.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], MapModalComponent);
    return MapModalComponent;
}());
exports.MapModalComponent = MapModalComponent;


/***/ }),

/***/ "./src/app/shared/components/page-not-found.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/page-not-found.component.ts ***!
  \***************************************************************/
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
var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        core_1.Component({
            selector: 'app-page-not-found',
            template: '<h2>Page not found</h2>'
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
exports.PageNotFoundComponent = PageNotFoundComponent;


/***/ }),

/***/ "./src/app/shared/components/qr-code.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/components/qr-code.component.ts ***!
  \********************************************************/
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
var angular_2_local_storage_1 = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/fesm5/angular-2-local-storage.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var QRCodeComponent = /** @class */ (function () {
    function QRCodeComponent(localStorage, router) {
        this.localStorage = localStorage;
        this.router = router;
        this.data = "localhost.com:4200";
        this.size = 0;
    }
    QRCodeComponent.prototype.ngOnInit = function () {
        this.data = this.localStorage.get('qrCodeData').toString();
        if (!this.data || this.data == undefined) {
            this.router.navigate(['/dashboard']);
        }
        this.localStorage.remove('qrCodeData');
        this.onResize();
    };
    QRCodeComponent.prototype.onResize = function () {
        var width = window.innerWidth;
        var height = window.innerHeight;
        this.size = width > height ? height : width;
    };
    QRCodeComponent.ctorParameters = function () { return [
        { type: angular_2_local_storage_1.LocalStorageService },
        { type: router_1.Router }
    ]; };
    __decorate([
        core_1.HostListener('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], QRCodeComponent.prototype, "onResize", null);
    QRCodeComponent = __decorate([
        core_1.Component({
            selector: 'app-page-not-found',
            template: "<div class=\"text-center\"><qr-code [value]=\"data\" [size]=\"size\" [level]=\"'H'\"></qr-code></div>"
        }),
        __metadata("design:paramtypes", [angular_2_local_storage_1.LocalStorageService, router_1.Router])
    ], QRCodeComponent);
    return QRCodeComponent;
}());
exports.QRCodeComponent = QRCodeComponent;


/***/ }),

/***/ "./src/app/shared/components/quiz-display/quiz-display.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/quiz-display/quiz-display.component.ts ***!
  \**************************************************************************/
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
var angular_2_local_storage_1 = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/fesm5/angular-2-local-storage.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var shared_module_1 = __webpack_require__(/*! ../../shared.module */ "./src/app/shared/shared.module.ts");
var QuizDisplayComponent = /** @class */ (function () {
    function QuizDisplayComponent(localStorage, router, quizService, appService, socketService, studentService) {
        var _this = this;
        this.localStorage = localStorage;
        this.router = router;
        this.quizService = quizService;
        this.appService = appService;
        this.socketService = socketService;
        this.studentService = studentService;
        this.quiz = {
            id: 0,
            code: '',
            is_randomize_questions: true,
            is_randomize_answers: true,
            type: 0,
            title: '',
            participants: [],
            questions: [{
                    text: '',
                    option_a: '',
                    option_b: '',
                    option_c: '',
                    option_d: '',
                    correct_option: null,
                    timer: 10,
                    answers: []
                }]
        };
        this.quiz_code = null;
        this.is_started = false;
        this.is_ended = false;
        this.is_ready = false;
        this.current_question_index = 0;
        this.current_question = {};
        this.current_question_timer = 0;
        this.ready = 0;
        this.ready_progress = 0;
        this.ready_time = 5;
        this.student_list = [];
        this.attendance_checked_list = [];
        this.attendance_not_checked_list = [];
        this.not_participated_list = [];
        this.miscellaneous_threshold = 0;
        this.is_save_quiz_error = false;
        socketService.consumeEventOnJoinedQuiz();
        socketService.invokeJoinedQuiz.subscribe(function (result) {
            if (_this.quiz_code == result['quiz_code']) {
                _this.getQuiz();
            }
        });
        socketService.consumeEventOnQuittedQuiz();
        socketService.invokeQuittedQuiz.subscribe(function (result) {
            if (_this.quiz_code == result['quiz_code']) {
                for (var i = 0; i < _this.quiz['participants'].length; i++) {
                    if (_this.quiz['participants'][i].id == result['student_id']) {
                        _this.quiz['participants'].splice(i, 1);
                        break;
                    }
                }
            }
        });
        socketService.consumeEventOnCheckAttendanceStopped();
        socketService.invokeCheckAttendanceStopped.subscribe(function (result) {
            if (_this.selected_attendance['course_id'] == result['course_id'] && _this.selected_attendance['class_id'] == result['class_id']) {
                _this.onStopQuiz();
                _this.appService.showPNotify('Info', "Attendance session is " + result['message'], 'info');
            }
        });
    }
    QuizDisplayComponent.prototype.onWindowUnload = function (event) {
        var _this = this;
        if (this.quiz_code) {
            this.quizService.stopQuiz(this.quiz_code).subscribe(function (result) {
            }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get quiz detail", 'error'); });
        }
    };
    QuizDisplayComponent.prototype.onWindowBeforeUnload = function (event) {
        if (this.is_ended) {
            return true;
        }
        else {
            return false;
        }
    };
    QuizDisplayComponent.prototype.ngOnInit = function () {
        if (this.localStorage.get('get_published_quiz_error')) {
            this.get_published_quiz_error = this.localStorage.get('get_published_quiz_error');
        }
        else {
            this.selected_attendance = this.localStorage.get('selected_attendance');
            if (!this.localStorage.get('quiz_code')) {
                this.get_published_quiz_error = 'Quiz is stopped';
            }
            else {
                this.quiz_code = this.localStorage.get('quiz_code').toString();
                this.localStorage.remove('quiz_code');
                this.getQuiz();
            }
        }
    };
    QuizDisplayComponent.prototype.closeSocket = function () {
        this.socketService.stopEventOnJoinedQuiz();
        this.socketService.stopEventOnCheckAttendanceStopped();
        this.socketService.stopEventOnAnsweredQuiz();
    };
    QuizDisplayComponent.prototype.ngOnDestroy = function () {
        this.socketService.emitEventOnQuizStopped({ 'quiz_code': this.quiz_code });
        this.closeSocket();
    };
    QuizDisplayComponent.prototype.getQuiz = function () {
        var _this = this;
        this.quizService.getPublishedQuiz(this.quiz_code).subscribe(function (result) {
            if (result.result == 'success') {
                _this.quiz = result.quiz;
                _this.miscellaneous_threshold = _this.quiz['questions'].length;
            }
            else {
                _this.appService.showPNotify('failure', result.message, 'error');
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get quiz detail", 'error'); });
    };
    QuizDisplayComponent.prototype.onStartQuestion = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.quiz['questions'][_this.current_question_index]['timer']--;
            if (_this.quiz['questions'][_this.current_question_index]['timer'] == 0) {
                _this.socketService.emitEventOnQuizQuestionEnded({ 'quiz_code': _this.quiz_code });
                clearInterval(_this.interval);
                _this.current_question_index++;
                _this.onReadyForNextQuestion(_this.current_question_index);
            }
        }, 1000);
    };
    QuizDisplayComponent.prototype.onReadyForNextQuestion = function (next_question_index) {
        var _this = this;
        if (next_question_index > 0) {
            var last_question_index = next_question_index - 1;
            for (var i = 0; i < this.quiz['participants']['length']; i++) {
                var check_no_answer = 0;
                for (var j = 0; j < this.quiz['questions'][last_question_index]['answers'].length; j++) {
                    if (this.quiz['questions'][last_question_index]['answers'][j]['answered_by'] == this.quiz['participants'][i]['id']) {
                        break;
                    }
                    else {
                        check_no_answer++;
                    }
                }
                if (check_no_answer == this.quiz['questions'][last_question_index]['answers'].length) {
                    this.quiz['questions'][last_question_index]['answers'].push({
                        answered_by: this.quiz['participants'][i]['id'],
                        answered_at: null,
                        selected_option: '',
                        name: this.quiz['participants'][i]['name'],
                        code: this.quiz['participants'][i]['code']
                    });
                }
            }
        }
        if (next_question_index == this.quiz['questions'].length) {
            this.is_ended = true;
            this.is_ready = this.is_started = false;
            this.onEndQuiz();
            this.socketService.emitEventOnQuizEnded({ 'quiz_code': this.quiz_code });
            this.closeSocket();
            return;
        }
        this.socketService.emitEventOnQuizQuestionReady({ 'quiz_code': this.quiz_code });
        this.is_started = false;
        this.is_ready = true;
        this.ready = 0;
        this.ready_progress = 0;
        this.interval = setInterval(function () {
            _this.ready++;
            if (_this.ready > _this.ready_time) {
                clearInterval(_this.interval);
                _this.is_started = true;
                _this.is_ready = false;
                _this.current_question_index = next_question_index;
                _this.socketService.emitEventOnQuizQuestionLoaded({ 'quiz_code': _this.quiz_code, 'question_index': _this.current_question_index });
                _this.onStartQuestion();
            }
            _this.ready_progress = _this.ready * 20;
        }, 1000);
    };
    QuizDisplayComponent.prototype.onStartQuiz = function () {
        var _this = this;
        this.quizService.startQuiz(this.quiz_code).subscribe(function (result) {
            if (result.result == 'success') {
                _this.quiz['started_at'] = new Date();
                _this.socketService.consumeEventOnAnsweredQuiz();
                _this.socketService.invokeAnsweredQuiz.subscribe(function (result) {
                    if (_this.quiz_code == result['quiz_code']) {
                        var question_index = result['question_index'];
                        for (var i = 0; i < _this.quiz['participants']['length']; i++) {
                            if (result['student_id'] == _this.quiz['participants'][i]['id']) {
                                _this.quiz['questions'][question_index]['answers'].push({
                                    answered_by: result['student_id'],
                                    answered_at: new Date(),
                                    selected_option: result['option'].toUpperCase(),
                                    name: _this.quiz['participants'][i]['name'],
                                    code: _this.quiz['participants'][i]['code']
                                });
                                break;
                            }
                        }
                        if (_this.quiz['participants'].length == _this.quiz['questions'][question_index]['answers'].length) {
                            _this.socketService.emitEventOnQuizQuestionEnded({ 'quiz_code': _this.quiz_code });
                            clearInterval(_this.interval);
                            _this.current_question_index++;
                            _this.onReadyForNextQuestion(_this.current_question_index);
                        }
                    }
                });
                _this.onReadyForNextQuestion(_this.current_question_index);
            }
            else {
                _this.appService.showPNotify('failure', result.message, 'error');
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't start quiz", 'error'); });
    };
    QuizDisplayComponent.prototype.onSaveQuiz = function () {
        var _this = this;
        this.quizService.saveQuiz(this.quiz, this.attendance_checked_list).subscribe(function (result) {
            if (result.result == 'failure') {
                _this.appService.showPNotify('failure', result.message, 'error');
                _this.is_save_quiz_error = true;
            }
            else {
                _this.appService.showPNotify('success', result.message, 'success');
                _this.is_save_quiz_error = false;
            }
        }, function (error) {
            _this.is_save_quiz_error = true;
            _this.appService.showPNotify('failure', "Server Error! Can't save quiz and attendance info", 'error');
        });
    };
    QuizDisplayComponent.prototype.onEndQuiz = function () {
        var _this = this;
        this.studentService.getStudentByCourse(this.selected_attendance['course_id'], this.selected_attendance['class_id']).subscribe(function (result) {
            if (result.result == 'success') {
                _this.student_list = result.student_list;
                for (var i = 0; i < _this.student_list.length; i++) {
                    var check_no_participated = 0;
                    var check_no_answer = 0;
                    var check_right_answer = 0;
                    for (var j = 0; j < _this.quiz['participants']['length']; j++) {
                        if (_this.student_list[i]['id'] == _this.quiz['participants'][j]['id']) {
                            //Có tham gia quiz
                            for (var k = 0; k < _this.quiz['questions'].length; k++) {
                                for (var l = 0; l < _this.quiz['questions'][k]['answers'].length; l++) {
                                    if (_this.quiz['questions'][k]['answers'][l]['answered_by'] == _this.student_list[i]['id']) {
                                        if (_this.quiz['questions'][k]['answers'][l]['selected_option'] == '') {
                                            check_no_answer++;
                                            continue;
                                        }
                                        if (_this.quiz['questions'][k]['correct_option'] == _this.quiz['questions'][k]['option_' + _this.quiz['questions'][k]['answers'][l]['selected_option'].toLowerCase()]) {
                                            check_right_answer++;
                                        }
                                    }
                                }
                            }
                            break;
                        }
                        else {
                            //Ko tham gia quiz
                            check_no_participated++;
                        }
                    }
                    if (check_no_participated == _this.quiz['participants']['length']) {
                        _this.not_participated_list.push({
                            id: _this.student_list[i]['id'],
                            code: _this.student_list[i]['code'],
                            name: _this.student_list[i]['name'],
                        });
                    }
                    else {
                        if (_this.quiz['questions']['length'] == check_no_answer) {
                            //Ko trả lời câu nào
                            _this.attendance_not_checked_list.push({
                                id: _this.student_list[i]['id'],
                                code: _this.student_list[i]['code'],
                                name: _this.student_list[i]['name'],
                                reason: "Didn't answer any question"
                            });
                        }
                        else {
                            if (_this.quiz['type'] == _this.appService.quiz_type.academic.id) {
                                if (_this.quiz['required_correct_answers'] > check_right_answer) {
                                    _this.attendance_not_checked_list.push({
                                        id: _this.student_list[i]['id'],
                                        code: _this.student_list[i]['code'],
                                        name: _this.student_list[i]['name'],
                                        reason: "Not enough correct answers (" + check_right_answer + "/" + _this.quiz['required_correct_answers'] + ")"
                                    });
                                }
                                else {
                                    _this.attendance_checked_list.push({
                                        id: _this.student_list[i]['id'],
                                        code: _this.student_list[i]['code'],
                                        name: _this.student_list[i]['name']
                                    });
                                }
                            }
                            else {
                                if (check_right_answer < _this.miscellaneous_threshold) {
                                    _this.attendance_not_checked_list.push({
                                        id: _this.student_list[i]['id'],
                                        code: _this.student_list[i]['code'],
                                        name: _this.student_list[i]['name'],
                                        reason: "Not enough correct answers (" + check_right_answer + "/" + _this.miscellaneous_threshold + ")"
                                    });
                                }
                                else {
                                    _this.attendance_checked_list.push({
                                        id: _this.student_list[i]['id'],
                                        code: _this.student_list[i]['code'],
                                        name: _this.student_list[i]['name']
                                    });
                                }
                            }
                        }
                    }
                }
                _this.onSaveQuiz();
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get student list by course", 'error'); });
    };
    QuizDisplayComponent.prototype.onReturn = function () {
        window.close();
    };
    QuizDisplayComponent.prototype.onNextQuestion = function () {
        clearInterval(this.interval);
        this.socketService.emitEventOnQuizQuestionEnded({ 'quiz_code': this.quiz_code });
        this.onReadyForNextQuestion(this.current_question_index++);
    };
    QuizDisplayComponent.prototype.onStopQuiz = function () {
        var _this = this;
        this.quizService.stopQuiz(this.quiz_code).subscribe(function (result) {
            clearInterval(_this.interval);
            _this.get_published_quiz_error = 'Quiz is stopped';
            _this.socketService.emitEventOnQuizStopped({ 'quiz_code': _this.quiz_code });
            _this.closeSocket();
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get quiz detail", 'error'); });
    };
    QuizDisplayComponent.ctorParameters = function () { return [
        { type: angular_2_local_storage_1.LocalStorageService },
        { type: router_1.Router },
        { type: shared_module_1.QuizService },
        { type: shared_module_1.AppService },
        { type: shared_module_1.SocketService },
        { type: shared_module_1.StudentService }
    ]; };
    __decorate([
        core_1.HostListener('window:unload', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], QuizDisplayComponent.prototype, "onWindowUnload", null);
    __decorate([
        core_1.HostListener('window:beforeunload', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], QuizDisplayComponent.prototype, "onWindowBeforeUnload", null);
    QuizDisplayComponent = __decorate([
        core_1.Component({
            selector: 'app-quiz-display',
            template: __importDefault(__webpack_require__(/*! raw-loader!./quiz-display.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/quiz-display/quiz-display.component.html")).default
        }),
        __metadata("design:paramtypes", [angular_2_local_storage_1.LocalStorageService, router_1.Router, shared_module_1.QuizService,
            shared_module_1.AppService, shared_module_1.SocketService, shared_module_1.StudentService])
    ], QuizDisplayComponent);
    return QuizDisplayComponent;
}());
exports.QuizDisplayComponent = QuizDisplayComponent;


/***/ }),

/***/ "./src/app/shared/components/result-message-modal/result-message-modal.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/result-message-modal/result-message-modal.component.ts ***!
  \******************************************************************************************/
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
var ResultMessageModalComponent = /** @class */ (function () {
    function ResultMessageModalComponent() {
    }
    ResultMessageModalComponent.prototype.onOpenModal = function () {
        jQuery("#resultMessageModal").modal("show");
    };
    ResultMessageModalComponent.prototype.onCancelModal = function () {
        jQuery("#resultMessageModal").modal("hide");
    };
    ResultMessageModalComponent.prototype.onSaveModal = function () {
        jQuery("#resultMessageModal").modal("hide");
    };
    ResultMessageModalComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ResultMessageModalComponent.prototype, "modal_message", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ResultMessageModalComponent.prototype, "modal_title", void 0);
    ResultMessageModalComponent = __decorate([
        core_1.Component({
            selector: 'result-message-modal',
            template: __importDefault(__webpack_require__(/*! raw-loader!./result-message-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/result-message-modal/result-message-modal.component.html")).default,
        }),
        __metadata("design:paramtypes", [])
    ], ResultMessageModalComponent);
    return ResultMessageModalComponent;
}());
exports.ResultMessageModalComponent = ResultMessageModalComponent;


/***/ }),

/***/ "./src/app/shared/components/send-feedback-modal/send-feedback-modal.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/send-feedback-modal/send-feedback-modal.component.ts ***!
  \****************************************************************************************/
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
var feedback_service_1 = __webpack_require__(/*! ../../services/feedback.service */ "./src/app/shared/services/feedback.service.ts");
var app_service_1 = __webpack_require__(/*! ../../services/app.service */ "./src/app/shared/services/app.service.ts");
var auth_service_1 = __webpack_require__(/*! ../../services/auth.service */ "./src/app/shared/services/auth.service.ts");
var student_service_1 = __webpack_require__(/*! ../../services/student.service */ "./src/app/shared/services/student.service.ts");
var SendFeedbackModalComponent = /** @class */ (function () {
    function SendFeedbackModalComponent(feedbackService, appService, authService, studentService) {
        this.feedbackService = feedbackService;
        this.appService = appService;
        this.authService = authService;
        this.studentService = studentService;
        this.onSent = new core_1.EventEmitter();
        this.isAnonymous = false;
        this.title = '';
        this.content = '';
        this.teacher_list = [];
        this.receivers = [
            {
                id: 0,
                title: 'Academic Affair'
            },
            {
                id: 1,
                title: 'Lecturer/TA'
            }
        ];
        this.selected_receiver = 0;
        this.selected_teacher = 0;
        this.selected_category = 1;
    }
    SendFeedbackModalComponent.prototype.onOpenModal = function () {
        var _this = this;
        this.studentService.getTeachingTeacherList().subscribe(function (result) {
            if (result.result == 'success') {
                _this.teacher_list = result.teacher_list;
                _this.selected_teacher = _this.teacher_list[_this.teacher_list.length - 1].id;
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get teaching teacher list", 'error'); });
        jQuery("#sendFeedbackModal").modal("show");
    };
    SendFeedbackModalComponent.prototype.onSendFeedback = function () {
        var _this = this;
        var receiver = this.selected_receiver == 0 ? this.selected_receiver : this.selected_teacher;
        this.feedbackService.sendFeedbacks(receiver, this.title, this.selected_category, this.content, this.isAnonymous).subscribe(function (result) {
            _this.apiResult = result.result;
            _this.apiResultMessage = result.message;
            _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
            if (_this.apiResult == 'success') {
                _this.isAnonymous = false;
                _this.title = '';
                _this.content = '';
                jQuery("#sendFeedbackModal").modal("hide");
                _this.onSent.emit('success');
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't send feedbacks", 'error'); });
    };
    SendFeedbackModalComponent.prototype.ngOnInit = function () {
    };
    SendFeedbackModalComponent.ctorParameters = function () { return [
        { type: feedback_service_1.FeedbackService },
        { type: app_service_1.AppService },
        { type: auth_service_1.AuthService },
        { type: student_service_1.StudentService }
    ]; };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], SendFeedbackModalComponent.prototype, "onSent", void 0);
    SendFeedbackModalComponent = __decorate([
        core_1.Component({
            selector: 'send-feedback-modal',
            template: __importDefault(__webpack_require__(/*! raw-loader!./send-feedback-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/send-feedback-modal/send-feedback-modal.component.html")).default,
        }),
        __metadata("design:paramtypes", [feedback_service_1.FeedbackService, app_service_1.AppService, auth_service_1.AuthService, student_service_1.StudentService])
    ], SendFeedbackModalComponent);
    return SendFeedbackModalComponent;
}());
exports.SendFeedbackModalComponent = SendFeedbackModalComponent;


/***/ }),

/***/ "./src/app/shared/components/side-menu/side-menu.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/side-menu/side-menu.component.ts ***!
  \********************************************************************/
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
var auth_service_1 = __webpack_require__(/*! ../../services/auth.service */ "./src/app/shared/services/auth.service.ts");
var app_service_1 = __webpack_require__(/*! ../../services/app.service */ "./src/app/shared/services/app.service.ts");
var SideMenuComponent = /** @class */ (function () {
    function SideMenuComponent(authService, appService) {
        this.authService = authService;
        this.appService = appService;
        this.sideMenu = [];
        this.adminMenu = [
            { title: 'Dashboard', url: '/', icon: 'fa-home' },
            // { title: 'Clear Data', url: '/clear-data', icon: 'fa-database' },
            { title: 'Settings', url: '/settings', icon: 'fa-cog' },
            { title: 'Logout', url: '/logout', icon: 'fa-sign-out' }
        ];
        this.staffMenu = [
            { title: 'Dashboard', url: '/', icon: 'fa-home' },
            { title: 'Statistic', url: '/statistic', icon: 'fa-line-chart' },
            { title: 'Students', url: '/students', icon: 'fa-user' },
            { title: 'Courses', url: '/courses', icon: 'fa-book' },
            { title: 'Teachers', url: '/teachers', icon: 'fa-graduation-cap' },
            { title: 'Schedule', url: '/schedule', icon: 'fa-calendar' },
            { title: 'Absence Requests', url: '/absence-requests', icon: 'fa-envelope' },
            { title: 'Feedbacks', url: '/feedbacks', icon: 'fa-comments' },
            { title: 'Classes', url: '/classes', icon: 'fa-users' },
            { title: 'Programs', url: '/programs', icon: 'fa-institution' },
            { title: 'Semesters', url: '/semesters', icon: 'fa-calendar-plus-o' },
            { title: 'Logout', url: '/logout', icon: 'fa-sign-out' }
        ];
        this.studentMenu = [
            { title: 'Dashboard', url: '/', icon: 'fa-home' },
            { title: 'Attendance - Checklist', url: '/check-attendance', icon: 'fa-check-square-o' },
            { title: 'Attendance - Quiz', url: '/check-attendance/quiz', icon: 'fa-question-circle' },
            { title: 'Schedule', url: '/schedule', icon: 'fa-calendar' },
            { title: 'Feedbacks', url: '/feedbacks', icon: 'fa-comments' },
            { title: 'Absence Requests', url: '/absence-requests', icon: 'fa-envelope' },
            { title: 'Logout', url: '/logout', icon: 'fa-sign-out' }
        ];
        this.teacherMenu = [
            { title: 'Dashboard', url: '/', icon: 'fa-home' },
            { title: 'Check Attendance', url: '/check-attendance', icon: 'fa-check-square-o' },
            { title: 'Quiz', url: '/quiz', icon: 'fa-question-circle' },
            { title: 'Schedule', url: '/schedule', icon: 'fa-calendar' },
            { title: 'Feedbacks', url: '/feedbacks', icon: 'fa-comments' },
            { title: 'Logout', url: '/logout', icon: 'fa-sign-out' }
        ];
        switch (authService.current_user.role_id) {
            case appService.userType.staff:
                this.sideMenu = this.staffMenu;
                break;
            case this.appService.userType.student:
                this.sideMenu = this.studentMenu;
                break;
            case this.appService.userType.teacher:
                this.sideMenu = this.teacherMenu;
                break;
            case this.appService.userType.admin:
                this.sideMenu = this.adminMenu;
                break;
        }
    }
    SideMenuComponent.prototype.ngOnInit = function () { };
    SideMenuComponent.ctorParameters = function () { return [
        { type: auth_service_1.AuthService },
        { type: app_service_1.AppService }
    ]; };
    SideMenuComponent = __decorate([
        core_1.Component({
            selector: 'app-side-menu',
            template: __importDefault(__webpack_require__(/*! raw-loader!./side-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/side-menu/side-menu.component.html")).default,
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, app_service_1.AppService])
    ], SideMenuComponent);
    return SideMenuComponent;
}());
exports.SideMenuComponent = SideMenuComponent;


/***/ }),

/***/ "./src/app/shared/components/top-navigation/top-navigation.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/top-navigation/top-navigation.component.ts ***!
  \******************************************************************************/
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
var auth_service_1 = __webpack_require__(/*! ../../services/auth.service */ "./src/app/shared/services/auth.service.ts");
var app_service_1 = __webpack_require__(/*! ../../services/app.service */ "./src/app/shared/services/app.service.ts");
var socket_service_1 = __webpack_require__(/*! ../../services/socket.service */ "./src/app/shared/services/socket.service.ts");
var notification_service_1 = __webpack_require__(/*! ../../services/notification.service */ "./src/app/shared/services/notification.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var angular_2_local_storage_1 = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/fesm5/angular-2-local-storage.js");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var TopNavigationComponent = /** @class */ (function () {
    function TopNavigationComponent(router, authService, socketService, notificationService, appService, translate, localStorage) {
        var _this = this;
        this.router = router;
        this.authService = authService;
        this.socketService = socketService;
        this.notificationService = notificationService;
        this.appService = appService;
        this.translate = translate;
        this.localStorage = localStorage;
        this.selected_language = 'vi';
        this.languages = [
            {
                id: 'vi',
                name: 'Vietnamese (vi)'
            },
            {
                id: 'en',
                name: 'English (en)'
            }
        ];
        this.notifications = [];
        // this language will be used as a fallback when a translation isn't found in the current language
        //   translate.setDefaultLang('vi');
        //    // the lang to use, if the lang isn't available, it will use the current loader to get them
        // if(this.localStorage.get('language') != null){
        // 	 translate.use(this.localStorage.get('language').toString());
        // 	 this.selected_language = this.localStorage.get('language').toString();
        // }else{
        // 	this.translate.use('vi');
        // }
        socketService.consumeEventOnNotificationPushed();
        socketService.invokeNotificationPushed.subscribe(function (result) {
            if (_this.authService.current_user.id == result['to_id']) {
                _this.getNotification();
            }
            if (_this.authService.current_user.role_id == _this.appService.userType.staff && result['to_id'] == 0) {
                _this.getNotification();
            }
        });
    }
    TopNavigationComponent.prototype.onChangeLanguage = function () {
        // this.translate.use(this.selected_language);
        // this.localStorage.set('language',this.selected_language);
    };
    TopNavigationComponent.prototype.getNotification = function () {
        var _this = this;
        this.notificationService.getNotification(this.authService.current_user.id, this.authService.current_user.role_id).subscribe(function (result) {
            if (result.result == 'success') {
                _this.notifications = result.notifications;
            }
            else {
                _this.appService.showPNotify('failure', result.message, 'error');
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get notifications", 'error'); });
    };
    TopNavigationComponent.prototype.ngOnInit = function () {
        this.getNotification();
    };
    TopNavigationComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    TopNavigationComponent.prototype.onChangePassword = function () {
        this.router.navigate(['/change-password']);
    };
    TopNavigationComponent.prototype.onNotificationClick = function (index) {
        var _this = this;
        this.notificationService.readNotification(this.notifications[index].id).subscribe(function (result) {
            if (result.result == 'success') {
                switch (_this.notifications[index].type) {
                    case _this.appService.notification_type.send_feedback:
                    case _this.appService.notification_type.reply_feedback:
                        _this.router.navigate(['/feedbacks']);
                        break;
                    case _this.appService.notification_type.send_absence_request:
                    case _this.appService.notification_type.accept_absence_request:
                    case _this.appService.notification_type.reject_absence_request:
                        _this.router.navigate(['/absence-requests']);
                        break;
                    case _this.appService.notification_type.request_to_be_check_attendance:
                        _this.router.navigate(['/check-attendance']);
                        break;
                    default:
                        // code...
                        break;
                }
                _this.notifications.splice(index, 1);
            }
            else {
                _this.appService.showPNotify('failure', result.message, 'error');
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't read notifications", 'error'); });
    };
    TopNavigationComponent.ctorParameters = function () { return [
        { type: router_1.Router },
        { type: auth_service_1.AuthService },
        { type: socket_service_1.SocketService },
        { type: notification_service_1.NotificationService },
        { type: app_service_1.AppService },
        { type: core_2.TranslateService },
        { type: angular_2_local_storage_1.LocalStorageService }
    ]; };
    TopNavigationComponent = __decorate([
        core_1.Component({
            selector: 'app-top-navigation',
            template: __importDefault(__webpack_require__(/*! raw-loader!./top-navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/top-navigation/top-navigation.component.html")).default,
        }),
        __metadata("design:paramtypes", [router_1.Router, auth_service_1.AuthService, socket_service_1.SocketService,
            notification_service_1.NotificationService, app_service_1.AppService,
            core_2.TranslateService, angular_2_local_storage_1.LocalStorageService])
    ], TopNavigationComponent);
    return TopNavigationComponent;
}());
exports.TopNavigationComponent = TopNavigationComponent;


/***/ }),

/***/ "./src/app/shared/config.ts":
/*!**********************************!*\
  !*** ./src/app/shared/config.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AppConfig = /** @class */ (function () {
    function AppConfig() {
        this.apiHost = "https://attendantchecking1612369.herokuapp.com/api";
        this.host = "https://attendantchecking1612369.herokuapp.com";
    }
    return AppConfig;
}());
exports.AppConfig = AppConfig;


/***/ }),

/***/ "./src/app/shared/services/absence-request.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/services/absence-request.service.ts ***!
  \************************************************************/
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
var http_1 = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var Rx_1 = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");
var config_1 = __webpack_require__(/*! ../config */ "./src/app/shared/config.ts");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var AbsenceRequestService = /** @class */ (function () {
    // Resolve HTTP using the constructor
    function AbsenceRequestService(http, appConfig, authService, router) {
        this.http = http;
        this.appConfig = appConfig;
        this.authService = authService;
        this.router = router;
        // private instance variable to hold base url
        this.getRequestsByStudentUrl = this.appConfig.apiHost + '/absence-request/by-student';
        this.changeRequestStatusUrl = this.appConfig.apiHost + '/absence-request/change-status';
        this.getAbsenceRequestsUrl = this.appConfig.apiHost + '/absence-request/list';
        this.createAbsenceRequestsUrl = this.appConfig.apiHost + '/absence-request/create';
        this.cancelAbsenceRequestsUrl = this.appConfig.apiHost + '/absence-request/cancel';
    }
    AbsenceRequestService.prototype.getRequestsByStudent = function (id, status, search_text) {
        var _this = this;
        var params = {
            'id': id,
            'status': status,
            'search_text': search_text
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.getRequestsByStudentUrl, params, options)
            // ...and calling .json() on the response to return data
            //...errors if any
            .pipe(operators_1.map(function (res) { return res.json(); }))
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return Rx_1.Observable.throw(error || 'Server error');
        });
    };
    AbsenceRequestService.prototype.changeRequestStatus = function (id, status) {
        var _this = this;
        var params = {
            'id': id,
            'status': status
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(this.changeRequestStatusUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return Rx_1.Observable.throw(error || 'Server error');
        });
    };
    AbsenceRequestService.prototype.getAbsenceRequests = function (status, search_text, page, limit) {
        var _this = this;
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = -1; }
        var params = {
            'status': status,
            'search_text': search_text,
            'page': page,
            'limit': limit,
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.getAbsenceRequestsUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return Rx_1.Observable.throw(error || 'Server error');
        });
    };
    AbsenceRequestService.prototype.createAbsenceRequests = function (reason, start_date, end_date) {
        var _this = this;
        var params = {
            'reason': reason,
            'start_date': start_date,
            'end_date': end_date
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.createAbsenceRequestsUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return Rx_1.Observable.throw(error || 'Server error');
        });
    };
    AbsenceRequestService.prototype.cancelAbsenceRequests = function (id) {
        var _this = this;
        var params = {
            'id': id,
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.cancelAbsenceRequestsUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return Rx_1.Observable.throw(error || 'Server error');
        });
    };
    AbsenceRequestService.ctorParameters = function () { return [
        { type: http_1.Http },
        { type: config_1.AppConfig },
        { type: auth_service_1.AuthService },
        { type: router_1.Router }
    ]; };
    AbsenceRequestService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, config_1.AppConfig, auth_service_1.AuthService, router_1.Router])
    ], AbsenceRequestService);
    return AbsenceRequestService;
}());
exports.AbsenceRequestService = AbsenceRequestService;


/***/ }),

/***/ "./src/app/shared/services/app.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/app.service.ts ***!
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
var http_1 = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var config_1 = __webpack_require__(/*! ../config */ "./src/app/shared/config.ts");
var auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");
var AppService = /** @class */ (function () {
    function AppService(http, appConfig, authService, router) {
        this.http = http;
        this.appConfig = appConfig;
        this.authService = authService;
        this.router = router;
        this.feedback_status = [
            {
                id: 0,
                title: 'Pending'
            },
            {
                id: 1,
                title: 'Replied'
            }
        ];
        this.feedback_categories = [
            {
                id: 0,
                title: 'All categories'
            },
            {
                id: 1,
                title: 'Academic'
            },
            {
                id: 2,
                title: 'Facility'
            }
        ];
        this.student_status = {
            active: {
                id: 0,
                title: 'Active'
            },
            reserved: {
                id: 1,
                title: 'Reserved'
            },
            dropped: {
                id: 2,
                title: 'Dropped'
            }
        };
        this.quiz_type = {
            academic: {
                id: 0,
                title: 'Academic'
            },
            miscellaneous: {
                id: 1,
                title: 'Miscellaneous'
            }
        };
        this.timers = [
            {
                value: 5,
                text: '5s'
            },
            {
                value: 10,
                text: '10s'
            },
            {
                value: 20,
                text: '20s'
            },
            {
                value: 30,
                text: '30s'
            },
            {
                value: 60,
                text: '60s'
            },
            {
                value: 90,
                text: '90s'
            },
            {
                value: 120,
                text: '120s'
            }
        ];
        this.absence_request_status = {
            new: {
                id: 0,
                title: 'New'
            },
            accepted: {
                id: 1,
                title: 'Accepted'
            },
            rejected: {
                id: 2,
                title: 'Rejected'
            },
        };
        this.notification_type = {
            send_feedback: 0,
            reply_feedback: 1,
            send_absence_request: 2,
            accept_absence_request: 3,
            reject_absence_request: 4,
            open_attendance: 5,
            request_to_be_check_attendance: 6,
        };
        this.default_avatar = 'http://i.imgur.com/FTa2JWD.png';
        this.student_interaction_type = { answer_question: 0, discuss: 1, present: 2 };
        this.import_export_type = { student: 0, teacher: 1, course: 2, schedule: 3, examinees: 4, attendance_summary: 5, class: 6,
            attendance_list: 7,
            attendance_lists: 8,
            exceeded_absence_limit: 9
        };
        this.enrollment_status = { compulsory: 0, elective: 1 };
        this.attendance_status = { normal: 0, exemption: 1 };
        this.userType = { admin: 4, student: 1, teacher: 2, staff: 3 };
        this.attendance_type = { permited_absent: -1, absent: 0, checklist: 1, qr: 2, quiz: 3, face: 4 };
        this.getSemesterProgramClassUrl = this.appConfig.apiHost + '/semesters-programs-classes';
        this.changePasswordUrl = this.appConfig.apiHost + '/user/change-password';
        this.uploadAvatarUrl = 'https://api.imgur.com/3/upload';
        this.getStaffsUrl = this.appConfig.apiHost + '/staffs';
        this.addStaffUrl = this.appConfig.apiHost + '/add-staff';
        this.removeStaffUrl = this.appConfig.apiHost + '/remove-staff';
        this.sendReplyUrl = this.appConfig.apiHost + '/feedback/send-reply';
        this.getSettingsUrl = this.appConfig.apiHost + '/settings';
        this.saveSettingsUrl = this.appConfig.apiHost + '/settings';
    }
    AppService.prototype.getSemesterProgramClass = function () {
        var _this = this;
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.getSemesterProgramClassUrl, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            //.catch((error: any) => Observable.throw(error || 'Server error'));
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    AppService.prototype.changePassword = function (current_password, new_password, confirm_password) {
        var _this = this;
        var params = {
            'current_password': current_password,
            'new_password': new_password,
            'confirm_password': confirm_password
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.changePasswordUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            //.catch((error: any) => Observable.throw(error || 'Server error'));
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    AppService.prototype.uploadAvatar = function (avatar) {
        var _this = this;
        var formData = new FormData();
        formData.append("image", avatar);
        var headers = new http_1.Headers();
        headers.append("Authorization", "Client-ID 56f531f985863ea");
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.uploadAvatarUrl, formData, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            //.catch((error: any) => Observable.throw(error || 'Server error'));
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    AppService.prototype.showPNotify = function (title, message, type) {
        PNotify.desktop.permission();
        new PNotify({
            title: title,
            text: message,
            type: type,
            delay: 3000,
            animation: "fade",
            styling: 'fontawesome',
            buttons: { closer: true, sticker: false },
            stack: { "dir1": "down", "dir2": "right", "firstpos1": 25, "firstpos2": (jQuery(window).width() / 2) - (Number(PNotify.prototype.options.width.replace(/\D/g, '')) / 2) },
        });
    };
    AppService.prototype.getStaffs = function () {
        var _this = this;
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.getStaffsUrl, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            //.catch((error: any) => Observable.throw(error || 'Server error'));
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    AppService.prototype.addStaff = function (email, phone, first_name, last_name) {
        var _this = this;
        var params = {
            'email': email,
            'phone': phone,
            'first_name': first_name,
            'last_name': last_name
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.addStaffUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            //.catch((error: any) => Observable.throw(error || 'Server error'));
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    AppService.prototype.removeStaff = function (email) {
        var _this = this;
        var params = {
            'email': email,
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.removeStaffUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            //.catch((error: any) => Observable.throw(error || 'Server error'));
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    AppService.prototype.sendReply = function (content, id) {
        var _this = this;
        var params = {
            'content': content,
            'id': id
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.sendReplyUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            //.catch((error: any) => Observable.throw(error || 'Server error'));
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    AppService.prototype.getSettings = function () {
        var _this = this;
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.getSettingsUrl, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            //.catch((error: any) => Observable.throw(error || 'Server error'));
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    AppService.prototype.saveSettings = function (settings) {
        var _this = this;
        var params = {
            'settings': settings
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.saveSettingsUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            //.catch((error: any) => Observable.throw(error || 'Server error'));
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    AppService.ctorParameters = function () { return [
        { type: http_1.Http },
        { type: config_1.AppConfig },
        { type: auth_service_1.AuthService },
        { type: router_1.Router }
    ]; };
    AppService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, config_1.AppConfig, auth_service_1.AuthService, router_1.Router])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;


/***/ }),

/***/ "./src/app/shared/services/attendance.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/attendance.service.ts ***!
  \*******************************************************/
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
var http_1 = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var config_1 = __webpack_require__(/*! ../config */ "./src/app/shared/config.ts");
var auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var AttendanceService = /** @class */ (function () {
    // Resolve HTTP using the constructor
    function AttendanceService(http, appConfig, authService, router) {
        this.http = http;
        this.appConfig = appConfig;
        this.authService = authService;
        this.router = router;
        this.getAttendanceListByCourseUrl = this.appConfig.apiHost + '/attendance/list-by-course';
        this.checkAddToCourseUrl = this.appConfig.apiHost + '/attendance/check-add-to-course';
        /*
        public  checkRemoveFromCourseUrl = this.appConfig.apiHost + '/attendance/check-remove-from-course';
        public checkRemoveFromCourse(course_id: number, delete_student_index: number): Observable < { result: string, message: string} > {
            var params = {
                'course_id': course_id,
                'delete_student_index': delete_student_index,
            };
            let authToken = this.authService.token;
            let headers = new Headers();
            headers.append('x-access-token', `${authToken}`);
            let options = new RequestOptions({ headers: headers });
            return this.http.post(this.checkRemoveFromCourseUrl, params, options)
                // ...and calling .json() on the response to return data
                .map((res: Response) => res.json())
                // ...errors if any
                .catch((error: any) => {
                    if (error.status === 401) {
                        this.authService.tokenExpired(this.router.url);
                    }
                    // this.authService.tokenExpired(this.router.url);
                    return Observable.throw(error || 'Server error');
                });
        }
        */
        this.updateAttendanceListByCourseUrl = this.appConfig.apiHost + '/attendance/update-list-by-course';
        this.getOpeningAttendanceUrl = this.appConfig.apiHost + '/attendance/opening-by-teacher';
        this.createAttendanceUrl = this.appConfig.apiHost + '/attendance/create';
        this.cancelAttendanceUrl = this.appConfig.apiHost + '/attendance/delete';
        this.closeAttendanceUrl = this.appConfig.apiHost + '/attendance/close';
        this.getCheckAttendanceListUrl = this.appConfig.apiHost + '/attendance/check-attendance-list';
        this.getAttendanceListByStudentUrl = this.appConfig.apiHost + '/attendance/list-by-student';
        this.getOpeningAttendanceForStudentUrl = this.appConfig.apiHost + '/attendance/opening-for-student';
        this.requestToBeCheckAttendanceUrl = this.appConfig.apiHost + '/attendance/request_to_be_check_attendance';
    }
    AttendanceService.prototype.getAttendanceListByCourse = function (course_id, classes_id) {
        var _this = this;
        var params = {
            'course_id': course_id,
            'classes_id': classes_id
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.getAttendanceListByCourseUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    AttendanceService.prototype.checkAddToCourse = function (course_id, student_code, student_name) {
        var _this = this;
        var params = {
            'course_id': course_id,
            'student_code': student_code,
            'student_name': student_name,
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.checkAddToCourseUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            // ...errors if any
            .catch(function (error) {
            if (error.status === 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            // this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    AttendanceService.prototype.updateAttendanceListByCourse = function (course_id, classes_id, attendance_lists) {
        var _this = this;
        var params = {
            'course_id': course_id,
            'classes_id': classes_id,
            'attendance_lists': attendance_lists
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.updateAttendanceListByCourseUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status === 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    AttendanceService.prototype.getOpeningAttendanceCourse = function (teacher_id) {
        var _this = this;
        var params = {
            'teacher_id': teacher_id
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.getOpeningAttendanceUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    AttendanceService.prototype.createAttendance = function (course_id, classes_id, teacher_id) {
        var _this = this;
        var params = {
            'course_id': course_id,
            'class_id': classes_id,
            'created_by': teacher_id
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.createAttendanceUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    AttendanceService.prototype.cancelAttendance = function (attendance_id) {
        var _this = this;
        var params = {
            'attendance_id': attendance_id,
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.cancelAttendanceUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    AttendanceService.prototype.closeAttendance = function (attendance_id) {
        var _this = this;
        var params = {
            'attendance_id': attendance_id,
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.closeAttendanceUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    AttendanceService.prototype.getCheckAttendanceList = function (course_id, class_id) {
        var _this = this;
        var params = {
            'course_id': course_id,
            'class_id': class_id
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.getCheckAttendanceListUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    AttendanceService.prototype.getAttendanceListByStudent = function (student_id) {
        var _this = this;
        var params = {
            'student_id': student_id
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.getAttendanceListByStudentUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    AttendanceService.prototype.getOpeningAttendanceForStudent = function (student_id) {
        var _this = this;
        var params = {
            'student_id': student_id
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.getOpeningAttendanceForStudentUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    AttendanceService.prototype.requestToBeCheckAttendance = function (student_id, course_id) {
        var _this = this;
        var params = {
            'student_id': student_id,
            'course_id': course_id
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.requestToBeCheckAttendanceUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    AttendanceService.ctorParameters = function () { return [
        { type: http_1.Http },
        { type: config_1.AppConfig },
        { type: auth_service_1.AuthService },
        { type: router_1.Router }
    ]; };
    AttendanceService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, config_1.AppConfig, auth_service_1.AuthService, router_1.Router])
    ], AttendanceService);
    return AttendanceService;
}());
exports.AttendanceService = AttendanceService;


/***/ }),

/***/ "./src/app/shared/services/auth-guard.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/auth-guard.service.ts ***!
  \*******************************************************/
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
var auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");
var app_service_1 = __webpack_require__(/*! ./app.service */ "./src/app/shared/services/app.service.ts");
var angular_2_local_storage_1 = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/fesm5/angular-2-local-storage.js");
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(appService, authService, router, localStorage) {
        this.appService = appService;
        this.authService = authService;
        this.router = router;
        this.localStorage = localStorage;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuardService.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuardService.prototype.canLoad = function (route) {
        var url = "/" + route.path;
        return this.checkLogin(url);
    };
    AuthGuardService.prototype.checkRole = function (url) {
        if (this.authService.current_user.role_id == this.appService.userType.teacher) {
            if (url.indexOf('/statistic') >= 0 ||
                url.indexOf("/semesters") >= 0 ||
                url.indexOf("/classes") >= 0 ||
                url.indexOf("/programs") >= 0 ||
                url.indexOf("/settings") >= 0 ||
                url.indexOf("/absence-requests") >= 0 ||
                url.indexOf('/teachers') >= 0 ||
                url.indexOf('/courses/add') >= 0 ||
                (url.indexOf('/courses') >= 0 && url.indexOf('/edit') >= 0) ||
                url.indexOf('/students') >= 0) {
                this.router.navigate(['/dashboard']);
                return false;
            }
            else {
                return true;
            }
        }
        if (this.authService.current_user.role_id == this.appService.userType.student) {
            if (url.indexOf('/statistic') >= 0 ||
                url.indexOf("/semesters") >= 0 ||
                url.indexOf("/classes") >= 0 ||
                url.indexOf("/programs") >= 0 ||
                url.indexOf("/settings") >= 0 ||
                url.indexOf('/teachers') >= 0 ||
                url.indexOf('/courses') >= 0 ||
                url.indexOf('/students') >= 0 ||
                url == '/quiz' ||
                url == '/quiz/display') {
                this.router.navigate(['/dashboard']);
                return false;
            }
            else {
                return true;
            }
        }
        if (this.authService.current_user.role_id == this.appService.userType.staff) {
            if (url.indexOf("/settings") >= 0 ||
                url.indexOf('/check-attendance') >= 0 ||
                url == '/quiz' ||
                url == '/quiz/display') {
                this.router.navigate(['/dashboard']);
                return false;
            }
            else {
                return true;
            }
        }
        if (this.authService.current_user.role_id == this.appService.userType.admin) {
            if (url.indexOf('/statistic') >= 0 ||
                url.indexOf("/semesters") >= 0 ||
                url.indexOf("/classes") >= 0 ||
                url.indexOf("/programs") >= 0 ||
                url.indexOf('/teachers') >= 0 ||
                url.indexOf('/courses') >= 0 ||
                url.indexOf('/students') >= 0 ||
                url.indexOf('/check-attendance') >= 0 ||
                url.indexOf("/absence-requests") >= 0 ||
                url == '/quiz' ||
                url == '/quiz/display') {
                this.router.navigate(['/dashboard']);
                return false;
            }
            else {
                return true;
            }
        }
        return true;
    };
    AuthGuardService.prototype.checkLogin = function (url) {
        if (this.localStorage.get('isLoggedIn')) {
            this.authService.current_user = this.localStorage.get('current_user');
            this.authService.token = this.localStorage.get('token').toString();
            return this.checkRole(url);
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        this.authService.redirectMessage = 'You have to login first!';
        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuardService.ctorParameters = function () { return [
        { type: app_service_1.AppService },
        { type: auth_service_1.AuthService },
        { type: router_1.Router },
        { type: angular_2_local_storage_1.LocalStorageService }
    ]; };
    AuthGuardService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [app_service_1.AppService, auth_service_1.AuthService, router_1.Router, angular_2_local_storage_1.LocalStorageService])
    ], AuthGuardService);
    return AuthGuardService;
}());
exports.AuthGuardService = AuthGuardService;


/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
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
var http_1 = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var config_1 = __webpack_require__(/*! ../config */ "./src/app/shared/config.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var angular_2_local_storage_1 = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/fesm5/angular-2-local-storage.js");
var AuthService = /** @class */ (function () {
    function AuthService(http, appConfig, router, localStorage) {
        this.http = http;
        this.appConfig = appConfig;
        this.router = router;
        this.localStorage = localStorage;
        // isLoggedIn: boolean = false;
        this.token = '';
        this.loginUrl = this.appConfig.host + '/authenticate/login';
        this.logoutUrl = this.appConfig.host + '/authenticate/logout';
        this.forgotPasswordUrl = this.appConfig.host + '/authenticate/forgot-password';
        this.resetPasswordCheckUrl = this.appConfig.host + '/authenticate/reset-password-check';
        this.resetPasswordUrl = this.appConfig.host + '/authenticate/reset-password';
        this.registerCheckUrl = this.appConfig.host + '/authenticate/register-check';
        this.registerUrl = this.appConfig.host + '/authenticate/register';
    }
    AuthService.prototype.tokenExpired = function (redirectUrl) {
        this.redirectUrl = redirectUrl;
        this.redirectMessage = 'Your session is expired. Please login again!';
        this.logout();
        this.router.navigate(['/login']);
    };
    AuthService.prototype.login = function (username, password) {
        var params = {
            'username': username,
            'password': password
        };
        return this.http.post(this.loginUrl, params)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) { return rxjs_1.Observable.throw(error || 'Server error'); });
    };
    AuthService.prototype.logout = function () {
        var params = {
            'token': this.token,
        };
        //this.http.post(this.logoutUrl, params).catch((error: any) => Observable.throw(error || 'Server error'));
        this.token = '';
        this.current_user = '';
        //delete from localStorage
        this.localStorage.set('isLoggedIn', false);
        this.localStorage.remove('token', 'current_user');
    };
    AuthService.prototype.forgotPassword = function (email) {
        this.token = '';
        this.current_user = '';
        this.localStorage.set('isLoggedIn', false);
        this.localStorage.remove('token', 'current_user');
        var params = {
            'email': email,
        };
        return this.http.post(this.forgotPasswordUrl, params)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) { return rxjs_1.Observable.throw(error || 'Server error'); });
    };
    AuthService.prototype.resetPasswordCheck = function (token) {
        var params = {
            'token': token,
        };
        return this.http.post(this.resetPasswordCheckUrl, params)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return rxjs_1.Observable.throw(error || 'Server error'); });
    };
    AuthService.prototype.resetPassword = function (password, confirm_password, token) {
        var params = {
            'password': password,
            'confirm_password': confirm_password,
            'token': token
        };
        return this.http.post(this.resetPasswordUrl, params)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) { return rxjs_1.Observable.throw(error || 'Server error'); });
    };
    AuthService.prototype.saveCurrentUserToLocal = function () {
        this.localStorage.set('current_user', this.current_user);
    };
    AuthService.prototype.registerCheck = function (token) {
        var params = {
            'token': token,
        };
        return this.http.post(this.registerCheckUrl, params)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return rxjs_1.Observable.throw(error || 'Server error'); });
    };
    AuthService.prototype.register = function (first_name, last_name, phone, avatar, password, confirm_password, token) {
        var params = {
            'first_name': first_name,
            'last_name': last_name,
            'phone': phone,
            'avatar': avatar,
            'password': password,
            'confirm_password': confirm_password,
            'token': token
        };
        return this.http.post(this.registerUrl, params)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) { return rxjs_1.Observable.throw(error || 'Server error'); });
    };
    AuthService.ctorParameters = function () { return [
        { type: http_1.Http },
        { type: config_1.AppConfig },
        { type: router_1.Router },
        { type: angular_2_local_storage_1.LocalStorageService }
    ]; };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, config_1.AppConfig, router_1.Router, angular_2_local_storage_1.LocalStorageService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/app/shared/services/check-attendance.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/check-attendance.service.ts ***!
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var config_1 = __webpack_require__(/*! ../config */ "./src/app/shared/config.ts");
var auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var CheckAttendanceService = /** @class */ (function () {
    // Resolve HTTP using the constructor
    function CheckAttendanceService(http, appConfig, authService, router) {
        this.http = http;
        this.appConfig = appConfig;
        this.authService = authService;
        this.router = router;
        this.checkListUrl = this.appConfig.apiHost + '/check-attendance/check-list';
        this.generateDelegateCodeUrl = this.appConfig.apiHost + '/attendance/generate-delegate-code';
        this.checkDelegateCodeUrl = this.appConfig.apiHost + '/attendance/check-delegate-code';
    }
    CheckAttendanceService.prototype.checkList = function (attendance_id, student_id, attendance_type) {
        var _this = this;
        var params = {
            'attendance_id': attendance_id,
            'student_id': student_id,
            'attendance_type': attendance_type
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.checkListUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    CheckAttendanceService.prototype.generateDelegateCode = function (course_id, class_id) {
        var _this = this;
        var params = {
            'course_id': course_id,
            'class_id': class_id
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.generateDelegateCodeUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    CheckAttendanceService.prototype.checkDelegateCode = function (code) {
        var _this = this;
        var params = {
            'code': code,
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.checkDelegateCodeUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    CheckAttendanceService.ctorParameters = function () { return [
        { type: http_1.Http },
        { type: config_1.AppConfig },
        { type: auth_service_1.AuthService },
        { type: router_1.Router }
    ]; };
    CheckAttendanceService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, config_1.AppConfig, auth_service_1.AuthService, router_1.Router])
    ], CheckAttendanceService);
    return CheckAttendanceService;
}());
exports.CheckAttendanceService = CheckAttendanceService;


/***/ }),

/***/ "./src/app/shared/services/classes.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/classes.service.ts ***!
  \****************************************************/
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
var http_1 = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var config_1 = __webpack_require__(/*! ../config */ "./src/app/shared/config.ts");
var auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ClassesService = /** @class */ (function () {
    // Resolve HTTP using the constructor
    function ClassesService(http, appConfig, authService, router) {
        this.http = http;
        this.appConfig = appConfig;
        this.authService = authService;
        this.router = router;
        this.getClassListsUrl = this.appConfig.apiHost + '/class/list';
        this.addClassUrl = this.appConfig.apiHost + '/class/create';
    }
    ClassesService.prototype.getClassList = function (program_id, searchText, sort, page, limit) {
        var _this = this;
        if (searchText === void 0) { searchText = null; }
        if (sort === void 0) { sort = 'none'; }
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = -1; }
        var params = {
            'searchText': searchText,
            'page': page,
            'limit': limit,
            'sort': sort,
            'program_id': program_id,
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.getClassListsUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    ClassesService.prototype.addClass = function (name, email, program_id, student_list) {
        var _this = this;
        if (student_list === void 0) { student_list = []; }
        var params = {
            'name': name,
            'email': email,
            'program_id': program_id,
            'student_list': student_list
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.addClassUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            //.catch((error: any) => Observable.throw(error || 'Server error'));
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    ClassesService.ctorParameters = function () { return [
        { type: http_1.Http },
        { type: config_1.AppConfig },
        { type: auth_service_1.AuthService },
        { type: router_1.Router }
    ]; };
    ClassesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, config_1.AppConfig, auth_service_1.AuthService, router_1.Router])
    ], ClassesService);
    return ClassesService;
}());
exports.ClassesService = ClassesService;


/***/ }),

/***/ "./src/app/shared/services/courses.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/courses.service.ts ***!
  \****************************************************/
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
var http_1 = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var config_1 = __webpack_require__(/*! ../config */ "./src/app/shared/config.ts");
var auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var CourseService = /** @class */ (function () {
    // Resolve HTTP using the constructor
    function CourseService(http, appConfig, authService, router) {
        this.http = http;
        this.appConfig = appConfig;
        this.authService = authService;
        this.router = router;
        this.getCourseDetailsUrl = this.appConfig.apiHost + '/course/detail';
        this.getCourseListsUrl = this.appConfig.apiHost + '/course/list';
        this.addCourseUrl = this.appConfig.apiHost + '/course/add';
        this.editCourseUrl = this.appConfig.apiHost + '/course/edit';
        this.getTeachingCoursesUrl = this.appConfig.apiHost + '/course/list/teaching';
        this.importCourseUrl = this.appConfig.apiHost + '/course/import';
        this.exportCourseUrl = this.appConfig.apiHost + '/course/export';
        this.getClassHasCourseUrl = this.appConfig.apiHost + '/course/class-has-course';
        this.getProgramHasCourseUrl = this.appConfig.apiHost + '/course/program-has-course';
    }
    CourseService.prototype.getCourseDetail = function (id) {
        var _this = this;
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.getCourseDetailsUrl + "/" + id, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    CourseService.prototype.getCourseLists = function (program_id, class_id, semester_id, searchText, sort, page, limit) {
        var _this = this;
        if (searchText === void 0) { searchText = null; }
        if (sort === void 0) { sort = 'none'; }
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = -1; }
        var params = {
            'searchText': searchText,
            'page': page,
            'limit': limit,
            'sort': sort,
            'program_id': program_id,
            'class_id': class_id,
            'semester_id': semester_id
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.getCourseListsUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    CourseService.prototype.addCourse = function (code, name, lecturers, TAs, office_hour, note, program_id, classes) {
        var _this = this;
        var params = {
            code: code,
            name: name,
            lecturers: lecturers,
            TAs: TAs,
            office_hour: office_hour,
            note: note,
            program_id: program_id,
            classes: classes,
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.addCourseUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    CourseService.prototype.editCourse = function (id, code, name, lecturers, TAs, office_hour, note) {
        var _this = this;
        var params = {
            id: id,
            code: code,
            name: name,
            lecturers: lecturers,
            TAs: TAs,
            office_hour: office_hour,
            note: note
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.editCourseUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    CourseService.prototype.getTeachingCourses = function (teacher_id, searchText, program_id, class_id) {
        var _this = this;
        if (searchText === void 0) { searchText = null; }
        if (program_id === void 0) { program_id = 0; }
        if (class_id === void 0) { class_id = 0; }
        var params = {
            'teacher_id': teacher_id,
            'searchText': searchText,
            'program_id': program_id,
            'class_id': class_id,
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.getTeachingCoursesUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    CourseService.prototype.importCourse = function (class_name, course_list) {
        var _this = this;
        var params = {
            'class_name': class_name,
            'course_list': course_list,
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.importCourseUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    CourseService.prototype.exportCourse = function (classes_id) {
        var _this = this;
        var params = {
            'classes_id': classes_id,
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.exportCourseUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    CourseService.prototype.getClassHasCourse = function () {
        var _this = this;
        var params = {};
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.getClassHasCourseUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    CourseService.prototype.getProgramHasCourse = function (semester_id) {
        var _this = this;
        var params = {
            'semester_id': semester_id
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.getProgramHasCourseUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    CourseService.ctorParameters = function () { return [
        { type: http_1.Http },
        { type: config_1.AppConfig },
        { type: auth_service_1.AuthService },
        { type: router_1.Router }
    ]; };
    CourseService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, config_1.AppConfig, auth_service_1.AuthService, router_1.Router])
    ], CourseService);
    return CourseService;
}());
exports.CourseService = CourseService;


/***/ }),

/***/ "./src/app/shared/services/excel.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/excel.service.ts ***!
  \**************************************************/
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
var http_1 = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var FileSaver = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
var JSZip = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.js");
var Async = __webpack_require__(/*! async */ "./node_modules/async/dist/async.mjs");
var app_service_1 = __webpack_require__(/*! ./app.service */ "./src/app/shared/services/app.service.ts");
var ExcelService = /** @class */ (function () {
    function ExcelService(http, appService) {
        this.http = http;
        this.appService = appService;
    }
    ExcelService.prototype.s2ab = function (s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i != s.length; ++i)
            view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    };
    ExcelService.prototype.readStudentListFile = function (file) {
        return new rxjs_1.Observable(function (observer) {
            XlsxPopulate.fromDataAsync(file)
                .then(function (workbook) {
                observer.next(workbook.sheet(0));
            });
        }).map(function (sheet) {
            var cells = sheet.usedRange().value();
            var import_start = 0;
            var student_list = [];
            for (var i = 0; i < cells.length; i++) {
                if (cells[i][0] == 'STT') {
                    import_start = i + 1;
                    break;
                }
            }
            for (var i = import_start; i < cells.length; i++) {
                var student = {
                    stt: cells[i][0],
                    stud_id: cells[i][1],
                    name: cells[i][2],
                    phone: cells[i][3],
                };
                if (student.stud_id != undefined || student.name != undefined) {
                    student_list.push(student);
                }
            }
            return { result: 'success', message: 'success', student_list: student_list };
        }).catch(function (error) { return rxjs_1.Observable.of({ result: 'failure', message: error, student_list: null }); });
    };
    ExcelService.prototype.writeStudentSearchList = function (student_list, file_name) {
        XlsxPopulate.fromBlankAsync()
            .then(function (workbook) {
            workbook.sheet(0).cell("A1").value("Danh sách sinh viên").style("horizontalAlignment", "center");
            workbook.sheet(0).cell("A3").value("STT").style("border", true).style("horizontalAlignment", "center");
            workbook.sheet(0).cell("B3").value("MSSV").style("border", true).style("horizontalAlignment", "center");
            workbook.sheet(0).cell("C3").value("Họ Tên").style("border", true).style("horizontalAlignment", "center");
            workbook.sheet(0).cell("D3").value("SĐT").style("border", true).style("horizontalAlignment", "center");
            workbook.sheet(0).cell("E3").value("Lớp").style("border", true).style("horizontalAlignment", "center");
            for (var i = 0; i < student_list.length; i++) {
                workbook.sheet(0).cell("A" + Math.floor(i + 4)).value(i + 1).style("border", true);
                workbook.sheet(0).cell("B" + Math.floor(i + 4)).value(student_list[i].code).style("border", true);
                workbook.sheet(0).cell("C" + Math.floor(i + 4)).value(student_list[i].name).style("border", true);
                workbook.sheet(0).cell("D" + Math.floor(i + 4)).value(student_list[i].phone).style("border", true);
                workbook.sheet(0).cell("E" + Math.floor(i + 4)).value(student_list[i].class_name).style("border", true);
            }
            workbook.sheet(0).range("A1:E1").merged(true);
            var range = workbook.sheet(0).range("A1:Y" + Math.floor(student_list.length + 4));
            return workbook.outputAsync()
                .then(function (blob) {
                if (file_name == '')
                    file_name = 'students';
                FileSaver.saveAs(blob, file_name + ".xlsx");
            });
        });
    };
    ExcelService.prototype.writeStudentLists = function (student_lists, file_names) {
        var zip = new JSZip();
        Async.eachOf(student_lists, function (student_list, index, callback) {
            XlsxPopulate.fromBlankAsync()
                .then(function (workbook) {
                workbook.sheet(0).cell("A1").value("Danh sách sinh viên " + file_names[index]).style("horizontalAlignment", "center");
                workbook.sheet(0).cell("A3").value("STT").style("border", true).style("horizontalAlignment", "center");
                workbook.sheet(0).cell("B3").value("MSSV").style("border", true).style("horizontalAlignment", "center");
                workbook.sheet(0).cell("C3").value("Họ Tên").style("border", true).style("horizontalAlignment", "center");
                workbook.sheet(0).cell("D3").value("SĐT").style("border", true).style("horizontalAlignment", "center");
                workbook.sheet(0).cell("E3").value("Lớp").style("border", true).style("horizontalAlignment", "center");
                for (var i = 0; i < student_list.length; i++) {
                    workbook.sheet(0).cell("A" + Math.floor(i + 4)).value(i + 1).style("border", true);
                    workbook.sheet(0).cell("B" + Math.floor(i + 4)).value(student_list[i].code).style("border", true);
                    workbook.sheet(0).cell("C" + Math.floor(i + 4)).value(student_list[i].name).style("border", true);
                    workbook.sheet(0).cell("D" + Math.floor(i + 4)).value(student_list[i].phone).style("border", true);
                    workbook.sheet(0).cell("E" + Math.floor(i + 4)).value(student_list[i].class_name).style("border", true);
                }
                workbook.sheet(0).range("A1:E1").merged(true);
                var range = workbook.sheet(0).range("A1:Y" + Math.floor(student_list.length + 3));
                return workbook.outputAsync()
                    .then(function (blob) {
                    zip.file(file_names[index] + ".xlsx", blob);
                    callback();
                });
            });
        }, function (error) {
            if (error) {
                console.log(error);
            }
            else {
                zip.generateAsync({ type: "blob" })
                    .then(function (content) {
                    FileSaver.saveAs(content, "students.zip");
                });
            }
        });
    };
    ExcelService.prototype.writeExamineesLists = function (student_lists, class_has_courses) {
        var zip = new JSZip();
        Async.eachOf(student_lists, function (student_list, index, callback) {
            var class_has_course = class_has_courses[index];
            XlsxPopulate.fromBlankAsync()
                .then(function (workbook) {
                workbook.sheet(0).cell("A1").value("Trường Đại học Khoa học Tự nhiên - TP.HCM");
                workbook.sheet(0).cell("A2").value("Khoa Công Nghệ Thông Tin");
                workbook.sheet(0).cell("A3").value("BẢNG ĐIỂM TỔNG KẾT MÔN").style("horizontalAlignment", "center");
                workbook.sheet(0).cell("A4").value("Học kỳ: " + class_has_course.semester);
                workbook.sheet(0).cell("A5").value('Chương trình: ' + class_has_course.program);
                workbook.sheet(0).cell("H5").value('Lớp: ' + class_has_course.class_name);
                workbook.sheet(0).cell("A6").value('Môn: ' + class_has_course.code + ' - ' + class_has_course.name);
                workbook.sheet(0).cell("H6").value('Ngày thi: ');
                workbook.sheet(0).cell("A7").value('Giảng viên: ' + class_has_course.lecturers);
                workbook.sheet(0).cell("H7").value('Phòng: ');
                workbook.sheet(0).cell("A9").value("STT").style("border", true);
                workbook.sheet(0).cell("B9").value("MSSV").style("border", true);
                workbook.sheet(0).cell("C9").value("Họ SV").style("border", true);
                workbook.sheet(0).cell("D9").value("Tên SV").style("border", true);
                workbook.sheet(0).cell("E9").value("Số tờ").style("border", true);
                workbook.sheet(0).cell("F9").value("Ký tên").style("border", true);
                workbook.sheet(0).cell("G9").value("Điểm CK").style("border", true);
                workbook.sheet(0).cell("H9").value("Điểm TK").style("border", true);
                workbook.sheet(0).cell("I9").value("Ghi chú").style("border", true);
                for (var i = 0; i < student_list.length; i++) {
                    workbook.sheet(0).cell("A" + Math.floor(i + 10)).value(i + 1).style("border", true);
                    workbook.sheet(0).cell("B" + Math.floor(i + 10)).value(student_list[i].student_code).style("border", true);
                    workbook.sheet(0).cell("C" + Math.floor(i + 10)).value(student_list[i].first_name).style("border", true);
                    workbook.sheet(0).cell("D" + Math.floor(i + 10)).value(student_list[i].last_name).style("border", true);
                    workbook.sheet(0).cell("E" + Math.floor(i + 10)).value('').style("border", true);
                    workbook.sheet(0).cell("F" + Math.floor(i + 10)).value('').style("border", true);
                    workbook.sheet(0).cell("G" + Math.floor(i + 10)).value('').style("border", true);
                    workbook.sheet(0).cell("H" + Math.floor(i + 10)).value('').style("border", true);
                    workbook.sheet(0).cell("I" + Math.floor(i + 10)).value('').style("border", true);
                }
                workbook.sheet(0).cell("A" + Math.floor(student_list.length + 12)).value('Giảng viên: ...................................');
                workbook.sheet(0).cell("A" + Math.floor(student_list.length + 13)).value('Ngày: ................................');
                workbook.sheet(0).range("A3:I3").merged(true);
                var range = workbook.sheet(0).range("A1:I" + Math.floor(student_list.length + 13));
                return workbook.outputAsync()
                    .then(function (blob) {
                    zip.file(class_has_course.code + ' - ' + class_has_course.name + ' - ' + class_has_course.class_name + ".xlsx", blob);
                    callback();
                });
            });
        }, function (error) {
            if (error) {
                console.log(error);
            }
            else {
                zip.generateAsync({ type: "blob" })
                    .then(function (content) {
                    FileSaver.saveAs(content, "examinees.zip");
                });
            }
        });
    };
    ExcelService.prototype.writeAttendanceSummary = function (student_lists, class_has_courses) {
        var zip = new JSZip();
        Async.eachOf(student_lists, function (student_list, index, callback) {
            var class_has_course = class_has_courses[index];
            XlsxPopulate.fromBlankAsync()
                .then(function (workbook) {
                workbook.sheet(0).cell("A1").value('Danh Sách Sinh Viên Môn ' + class_has_course.code + ' - ' + class_has_course.name);
                workbook.sheet(0).cell("A2").value("Học kỳ: " + class_has_course.semester);
                workbook.sheet(0).cell("A3").value('Giảng viên: ' + class_has_course.lecturers);
                workbook.sheet(0).cell("A5").value("STT").style("border", true);
                workbook.sheet(0).cell("B5").value("MSSV").style("border", true);
                workbook.sheet(0).cell("C5").value("Họ SV").style("border", true);
                workbook.sheet(0).cell("D5").value("Tên SV").style("border", true);
                workbook.sheet(0).cell("E5").value("Số buổi vắng").style("border", true);
                workbook.sheet(0).cell("F5").value("Số % buổi vắng").style("border", true);
                for (var i = 0; i < student_list.length; i++) {
                    workbook.sheet(0).cell("A" + Math.floor(i + 6)).value(i + 1).style("border", true);
                    workbook.sheet(0).cell("B" + Math.floor(i + 6)).value(student_list[i].student_code).style("border", true);
                    workbook.sheet(0).cell("C" + Math.floor(i + 6)).value(student_list[i].first_name).style("border", true);
                    workbook.sheet(0).cell("D" + Math.floor(i + 6)).value(student_list[i].last_name).style("border", true);
                    if (student_list[i].exemption) {
                        workbook.sheet(0).cell("E" + Math.floor(i + 6)).value('Miễn điểm danh').style("border", true).style("fontColor", 'ff0000');
                        workbook.sheet(0).range("E" + Math.floor(i + 6) + ":" + "F" + Math.floor(i + 6)).merged(true);
                    }
                    else {
                        if (student_list[i].absent_percentage > 30) {
                            workbook.sheet(0).cell("E" + Math.floor(i + 6)).value(student_list[i].absent_count).style("border", true).style("fontColor", 'ff0000');
                            workbook.sheet(0).cell("F" + Math.floor(i + 6)).value(student_list[i].absent_percentage + '%').style("border", true).style("fontColor", 'ff0000');
                        }
                        else {
                            workbook.sheet(0).cell("E" + Math.floor(i + 6)).value(student_list[i].absent_count).style("border", true);
                            workbook.sheet(0).cell("F" + Math.floor(i + 6)).value(student_list[i].absent_percentage + '%').style("border", true);
                        }
                    }
                }
                var range = workbook.sheet(0).range("A1:G" + Math.floor(student_list.length + 6));
                return workbook.outputAsync()
                    .then(function (blob) {
                    zip.file(class_has_course.code + ' - ' + class_has_course.name + ' - ' + class_has_course.class_name + ".xlsx", blob);
                    callback();
                });
            });
        }, function (error) {
            if (error) {
                console.log(error);
            }
            else {
                zip.generateAsync({ type: "blob" })
                    .then(function (content) {
                    FileSaver.saveAs(content, "attendance_summary.zip");
                });
            }
        });
    };
    ExcelService.prototype.readTeacherListFile = function (file) {
        return new rxjs_1.Observable(function (observer) {
            XlsxPopulate.fromDataAsync(file)
                .then(function (workbook) {
                observer.next(workbook.sheet(0));
            });
        }).map(function (sheet) {
            var cells = sheet.usedRange().value();
            var import_start = 0;
            var teacher_list = [];
            for (var i = 0; i < cells.length; i++) {
                if (cells[i][0] == 'STT') {
                    import_start = i + 1;
                    break;
                }
            }
            for (var i = import_start; i < cells.length; i++) {
                var teacher = {
                    stt: cells[i][0],
                    first_name: cells[i][1],
                    last_name: cells[i][2],
                    phone: cells[i][3],
                    email: cells[i][4]
                };
                teacher_list.push(teacher);
            }
            return { result: 'success', message: 'success', teacher_list: teacher_list };
        }).catch(function (error) { return rxjs_1.Observable.of({ result: 'failure', message: error, teacher_list: null }); });
    };
    ExcelService.prototype.writeTeacherSearchList = function (teacher_list, file_name) {
        XlsxPopulate.fromBlankAsync()
            .then(function (workbook) {
            workbook.sheet(0).cell("A1").value("STT").style("border", true);
            workbook.sheet(0).cell("B1").value("Họ").style("border", true);
            workbook.sheet(0).cell("C1").value("Tên").style("border", true);
            workbook.sheet(0).cell("D1").value("SĐT").style("border", true);
            workbook.sheet(0).cell("E1").value("Email").style("border", true);
            for (var i = 0; i < teacher_list.length; i++) {
                workbook.sheet(0).cell("A" + Math.floor(i + 2)).value(i + 2).style("border", true);
                workbook.sheet(0).cell("B" + Math.floor(i + 2)).value(teacher_list[i].first_name).style("border", true);
                workbook.sheet(0).cell("C" + Math.floor(i + 2)).value(teacher_list[i].last_name).style("border", true);
                workbook.sheet(0).cell("D" + Math.floor(i + 2)).value(teacher_list[i].phone).style("border", true);
                workbook.sheet(0).cell("E" + Math.floor(i + 2)).value(teacher_list[i].email).style("border", true);
            }
            var range = workbook.sheet(0).range("A1:E" + Math.floor(teacher_list.length + 1));
            return workbook.outputAsync()
                .then(function (blob) {
                if (file_name == '')
                    file_name = 'teachers';
                FileSaver.saveAs(blob, file_name + ".xlsx");
            });
        });
    };
    ExcelService.prototype.readCourseListFile = function (file) {
        return new rxjs_1.Observable(function (observer) {
            XlsxPopulate.fromDataAsync(file)
                .then(function (workbook) {
                observer.next(workbook.sheet(0));
            });
        }).map(function (sheet) {
            var cells = sheet.usedRange().value();
            var import_start = 0;
            var course_list = [];
            for (var i = 0; i < cells.length; i++) {
                if (cells[i][0] == 'STT') {
                    import_start = i + 1;
                    break;
                }
            }
            for (var i = import_start; i < cells.length; i++) {
                var course = {
                    stt: cells[i][0],
                    code: cells[i][1],
                    name: cells[i][2],
                    lecturers: cells[i][3],
                    TAs: cells[i][4],
                    office_hour: cells[i][5],
                    note: cells[i][6],
                };
                course_list.push(course);
            }
            return { result: 'success', message: 'success', course_list: course_list };
        }).catch(function (error) { return rxjs_1.Observable.of({ result: 'failure', message: error, course_list: null }); });
    };
    ExcelService.prototype.writeCourseSearchList = function (course_list, file_name) {
        XlsxPopulate.fromBlankAsync()
            .then(function (workbook) {
            workbook.sheet(0).cell("A1").value("STT").style("border", true).style("horizontalAlignment", "center");
            workbook.sheet(0).cell("B1").value("Mã môn").style("border", true).style("horizontalAlignment", "center");
            workbook.sheet(0).cell("C1").value("Tên môn").style("border", true).style("horizontalAlignment", "center");
            workbook.sheet(0).cell("D1").value("GV Lý Thuyết").style("border", true).style("horizontalAlignment", "center");
            workbook.sheet(0).cell("E1").value("Trợ giảng").style("border", true).style("horizontalAlignment", "center");
            workbook.sheet(0).cell("F1").value("Office hour").style("border", true).style("horizontalAlignment", "center");
            workbook.sheet(0).cell("G1").value("Ghi chú").style("border", true).style("horizontalAlignment", "center");
            for (var i = 0; i < course_list.length; i++) {
                workbook.sheet(0).cell("A" + Math.floor(i + 2)).value(i + 1).style("border", true);
                workbook.sheet(0).cell("B" + Math.floor(i + 2)).value(course_list[i].code).style("border", true);
                workbook.sheet(0).cell("C" + Math.floor(i + 2)).value(course_list[i].name).style("border", true);
                workbook.sheet(0).cell("D" + Math.floor(i + 2)).value(course_list[i].lecturers).style("border", true);
                workbook.sheet(0).cell("E" + Math.floor(i + 2)).value(course_list[i].tas).style("border", true);
                workbook.sheet(0).cell("F" + Math.floor(i + 2)).value(course_list[i].office_hour).style("border", true);
                workbook.sheet(0).cell("G" + Math.floor(i + 2)).value(course_list[i].note).style("border", true);
            }
            var range = workbook.sheet(0).range("A1:G" + Math.floor(course_list.length + 4));
            return workbook.outputAsync()
                .then(function (blob) {
                if (file_name == '')
                    file_name = 'courses';
                FileSaver.saveAs(blob, file_name + ".xlsx");
            });
        });
    };
    ExcelService.prototype.writeCourseLists = function (course_lists) {
        var zip = new JSZip();
        Async.each(course_lists, function (course_list, callback) {
            XlsxPopulate.fromBlankAsync()
                .then(function (workbook) {
                workbook.sheet(0).cell("A1").value("STT").style("border", true).style("horizontalAlignment", "center");
                workbook.sheet(0).cell("B1").value("Mã Môn").style("border", true).style("horizontalAlignment", "center");
                workbook.sheet(0).cell("C1").value("Tên Môn").style("border", true).style("horizontalAlignment", "center");
                workbook.sheet(0).cell("D1").value("GV Lý Thuyết").style("border", true).style("horizontalAlignment", "center");
                workbook.sheet(0).cell("E1").value("Trợ Giảng").style("border", true).style("horizontalAlignment", "center");
                workbook.sheet(0).cell("F1").value("Office hour").style("border", true).style("horizontalAlignment", "center");
                workbook.sheet(0).cell("G1").value("Ghi chú").style("border", true).style("horizontalAlignment", "center");
                for (var i = 0; i < course_list.length; i++) {
                    workbook.sheet(0).cell("A" + Math.floor(i + 2)).value(i + 1).style("border", true);
                    workbook.sheet(0).cell("B" + Math.floor(i + 2)).value(course_list[i].code).style("border", true);
                    workbook.sheet(0).cell("C" + Math.floor(i + 2)).value(course_list[i].name).style("border", true);
                    workbook.sheet(0).cell("D" + Math.floor(i + 2)).value(course_list[i].lecturers).style("border", true);
                    workbook.sheet(0).cell("E" + Math.floor(i + 2)).value(course_list[i].tas).style("border", true);
                    workbook.sheet(0).cell("F" + Math.floor(i + 2)).value(course_list[i].office_hour).style("border", true);
                    workbook.sheet(0).cell("G" + Math.floor(i + 2)).value(course_list[i].note).style("border", true);
                }
                var range = workbook.sheet(0).range("A1:G" + Math.floor(course_list.length + 4));
                return workbook.outputAsync()
                    .then(function (blob) {
                    zip.file(course_list[0].class_name + ".xlsx", blob);
                    callback();
                });
            });
        }, function (error) {
            if (error) {
                console.log(error);
            }
            else {
                zip.generateAsync({ type: "blob" })
                    .then(function (content) {
                    FileSaver.saveAs(content, "courses.zip");
                });
            }
        });
    };
    ExcelService.prototype.readScheduleFile = function (file) {
        return new rxjs_1.Observable(function (observer) {
            XlsxPopulate.fromDataAsync(file)
                .then(function (workbook) {
                observer.next(workbook.sheet(0));
            });
        }).map(function (sheet) {
            var cells = sheet.usedRange().value();
            var import_start = 0;
            var schedule = {};
            schedule['course_list'] = [];
            schedule['program'] = file['name'].split('.')[0];
            for (var i = 0; i < cells.length; i++) {
                if (cells[i][0] == 'STT') {
                    import_start = i + 1;
                    break;
                }
            }
            for (var i = import_start; i < cells.length; i++) {
                if (cells[i][0] == undefined) {
                    break;
                }
                if (cells[i][1] == undefined || cells[i][1] == '') {
                    return { result: 'failure', schedule: null, message: "Course's code is missing in line " + i };
                }
                if (cells[i][2] == undefined || cells[i][2] == '') {
                    return { result: 'failure', schedule: null, message: "Course's name is missing in line " + i };
                }
                if (cells[i][3] == undefined || cells[i][3] == '') {
                    return { result: 'failure', schedule: null, message: 'Class is missing in line ' + i };
                }
                if (cells[i][4] == undefined || cells[i][4] == '') {
                    return { result: 'failure', schedule: null, message: 'Lecturers is missing in line ' + i };
                }
                var course = {
                    stt: cells[i][0],
                    code: cells[i][1],
                    name: cells[i][2],
                    class_name: cells[i][3],
                    lecturers: cells[i][4],
                    TAs: cells[i][5] != undefined ? cells[i][5] : '',
                    office_hour: cells[i][6] != undefined ? cells[i][6] : '',
                    note: cells[i][7] != undefined ? cells[i][7] : '',
                    schedules: ''
                };
                schedule['course_list'].push(course);
            }
            for (var i = 4; i < 8; i++) {
                for (var j = 1; j < 7; j++) {
                    if (cells[i][j] == undefined) {
                        continue;
                    }
                    var session = cells[i][j].split('\r\n');
                    for (var k = 0; k < session.length; k++) {
                        for (var l = 0; l < schedule['course_list'].length; l++) {
                            var session_array = session[k].split('-');
                            var code = session_array[0];
                            var class_name = session_array[1];
                            var new_session = Math.floor((i - 4) + (j - 1) * 4) + '-' + session_array[2] + '-' + session_array[3];
                            if (schedule['course_list'][l].code == code && schedule['course_list'][l].class_name == class_name) {
                                if (schedule['course_list'][l].schedules == '')
                                    schedule['course_list'][l].schedules = new_session;
                                else
                                    schedule['course_list'][l].schedules += ';' + new_session;
                            }
                        }
                    }
                }
            }
            console.log(schedule);
            return { result: 'success', schedule: schedule, message: 'success' };
        }).catch(function (error) { return rxjs_1.Observable.of({ result: 'failure', schedule: null, message: error }); });
    };
    ExcelService.prototype.writeScheduleLists = function (schedules) {
        var zip = new JSZip();
        Async.each(schedules, function (schedule, callback) {
            XlsxPopulate.fromBlankAsync()
                .then(function (workbook) {
                var sessions = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
                var group = [
                    {
                        color: 'ff0000',
                        class: ''
                    }, {
                        color: '0000ff',
                        class: ''
                    }, {
                        color: 'f4a460',
                        class: ''
                    }, {
                        color: '00ff00',
                        class: ''
                    }, {
                        color: 'ff69b4',
                        class: ''
                    }
                ];
                var time = ['(LT)7:30-9:10 \r\n (TH)7:30-9:30', '(LT)9:30-11:10 \r\n (TH)9:30-11:30',
                    '(LT)13:30-15:10 \r\n (TH)13:30-15:30', '(LT)15:30-17:10 \r\n (TH)15:30-17:30'];
                workbook.sheet(0).cell("A11").value("STT").style("border", true).style("bold", true);
                workbook.sheet(0).cell("B11").value("Mã môn").style("border", true).style("bold", true);
                workbook.sheet(0).cell("C11").value("Tên môn").style("border", true).style("bold", true);
                workbook.sheet(0).cell("D11").value("Lớp").style("border", true).style("bold", true);
                workbook.sheet(0).cell("E11").value("GV Lý Thuyết").style("border", true).style("bold", true);
                workbook.sheet(0).cell("F11").value("Trợ giảng").style("border", true).style("bold", true);
                workbook.sheet(0).cell("G11").value("Office hour").style("border", true).style("bold", true);
                workbook.sheet(0).cell("H11").value("Ghi chú").style("border", true).style("bold", true);
                for (var i = 0; i < schedule.course_list.length; i++) {
                    var color = '';
                    for (var j = 0; j < group.length; j++) {
                        if (group[j].class == '') {
                            color = group[j].color;
                            group[j].class = schedule.course_list[i].class_name;
                            break;
                        }
                        else {
                            if (group[j].class == schedule.course_list[i].class_name) {
                                color = group[j].color;
                                break;
                            }
                        }
                    }
                    workbook.sheet(0).cell("A" + Math.floor(i + 12)).value(i + 1).style("border", true);
                    workbook.sheet(0).cell("B" + Math.floor(i + 12)).value(schedule.course_list[i].code).style("border", true).style("fontColor", color).style("bold", true);
                    workbook.sheet(0).cell("C" + Math.floor(i + 12)).value(schedule.course_list[i].name).style("border", true);
                    workbook.sheet(0).cell("D" + Math.floor(i + 12)).value(schedule.course_list[i].class_name).style("border", true);
                    workbook.sheet(0).cell("E" + Math.floor(i + 12)).value(schedule.course_list[i].lecturers).style("border", true);
                    workbook.sheet(0).cell("F" + Math.floor(i + 12)).value(schedule.course_list[i].tas).style("border", true);
                    workbook.sheet(0).cell("G" + Math.floor(i + 12)).value(schedule.course_list[i].office_hour).style("border", true);
                    workbook.sheet(0).cell("H" + Math.floor(i + 12)).value(schedule.course_list[i].note).style("border", true);
                    workbook.sheet(0).row(Math.floor(i + 12)).height(30);
                    var schedules = schedule.course_list[i].schedules.split(';');
                    for (var j = 0; j < schedules.length; j++) {
                        var temp = schedules[j].split('-');
                        var index = temp[0];
                        var room = temp[1];
                        var type = temp[2];
                        sessions[index] += schedule.course_list[i].code + '-' + schedule.course_list[i].class_name + '-' + room + '-' + type + '\r\n';
                    }
                }
                workbook.sheet(0).cell("A1").value("THỜI KHÓA BIỂU ");
                workbook.sheet(0).range("A3:G3").merged(true);
                workbook.sheet(0).column("A").width(30).style("horizontalAlignment", "center").style("verticalAlignment", "center").style("wrapText", true);
                workbook.sheet(0).column("B").width(30).style("horizontalAlignment", "center").style("verticalAlignment", "center").style("wrapText", true);
                workbook.sheet(0).column("C").width(30).style("horizontalAlignment", "center").style("verticalAlignment", "center").style("wrapText", true);
                workbook.sheet(0).column("D").width(30).style("horizontalAlignment", "center").style("verticalAlignment", "center").style("wrapText", true);
                workbook.sheet(0).column("E").width(30).style("horizontalAlignment", "center").style("verticalAlignment", "center").style("wrapText", true);
                workbook.sheet(0).column("F").width(30).style("horizontalAlignment", "center").style("verticalAlignment", "center").style("wrapText", true);
                workbook.sheet(0).column("G").width(30).style("horizontalAlignment", "center").style("verticalAlignment", "center").style("wrapText", true);
                workbook.sheet(0).column("H").width(30).style("horizontalAlignment", "center").style("verticalAlignment", "center").style("wrapText", true);
                workbook.sheet(0).cell("A4").value("").style("border", true);
                workbook.sheet(0).cell("B4").value("2").style("border", true);
                workbook.sheet(0).cell("C4").value("3").style("border", true);
                workbook.sheet(0).cell("D4").value("4").style("border", true);
                workbook.sheet(0).cell("E4").value("5").style("border", true);
                workbook.sheet(0).cell("F4").value("6").style("border", true);
                workbook.sheet(0).cell("G4").value("7").style("border", true);
                for (var i = 0; i < 4; i++) {
                    workbook.sheet(0).cell("A" + Math.floor(i + 5)).value(time[i]).style("border", true).style("fontColor", "0000ff").style("bold", true);
                    workbook.sheet(0).cell("B" + Math.floor(i + 5)).value(sessions[i]).style("border", true).style("bold", true);
                    workbook.sheet(0).cell("C" + Math.floor(i + 5)).value(sessions[i + 4]).style("border", true).style("bold", true);
                    workbook.sheet(0).cell("D" + Math.floor(i + 5)).value(sessions[i + 8]).style("border", true).style("bold", true);
                    workbook.sheet(0).cell("E" + Math.floor(i + 5)).value(sessions[i + 12]).style("border", true).style("bold", true);
                    workbook.sheet(0).cell("F" + Math.floor(i + 5)).value(sessions[i + 16]).style("border", true).style("bold", true);
                    workbook.sheet(0).cell("G" + Math.floor(i + 5)).value(sessions[i + 20]).style("border", true).style("bold", true);
                    workbook.sheet(0).row(Math.floor(i + 5)).height(100);
                }
                var range = workbook.sheet(0).range("A1:H" + Math.floor(schedule.course_list.length + 12));
                return workbook.outputAsync()
                    .then(function (blob) {
                    zip.file(schedule.file_name + ".xlsx", blob);
                    callback();
                });
            });
        }, function (error) {
            if (error) {
                console.log(error);
            }
            else {
                zip.generateAsync({ type: "blob" })
                    .then(function (content) {
                    FileSaver.saveAs(content, "schedules.zip");
                });
            }
        });
    };
    ExcelService.prototype.writeScheduleSearchList = function (course_list, semester, file_name) {
        XlsxPopulate.fromBlankAsync()
            .then(function (workbook) {
            var sessions = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];
            var group = [
                {
                    color: 'ff0000',
                    class: ''
                }, {
                    color: '0000ff',
                    class: ''
                }, {
                    color: 'f4a460',
                    class: ''
                }, {
                    color: '00ff00',
                    class: ''
                }, {
                    color: 'ff69b4',
                    class: ''
                }
            ];
            var time = ['(LT)7:30-9:10 \r\n (TH)7:30-9:30', '(LT)9:30-11:10 \r\n (TH)9:30-11:30',
                '(LT)13:30-15:10 \r\n (TH)13:30-15:30', '(LT)15:30-17:10 \r\n (TH)15:30-17:30'];
            workbook.sheet(0).cell("A11").value("STT").style("border", true).style("bold", true);
            workbook.sheet(0).cell("B11").value("Mã môn").style("border", true).style("bold", true);
            workbook.sheet(0).cell("C11").value("Tên môn").style("border", true).style("bold", true);
            workbook.sheet(0).cell("D11").value("Lớp").style("border", true).style("bold", true);
            workbook.sheet(0).cell("E11").value("GV Lý Thuyết").style("border", true).style("bold", true);
            workbook.sheet(0).cell("F11").value("Trợ giảng").style("border", true).style("bold", true);
            workbook.sheet(0).cell("G11").value("Office hour").style("border", true).style("bold", true);
            workbook.sheet(0).cell("H11").value("Ghi chú").style("border", true).style("bold", true);
            for (var i = 0; i < course_list.length; i++) {
                var color = '';
                for (var j = 0; j < group.length; j++) {
                    if (group[j].class == '') {
                        color = group[j].color;
                        group[j].class = course_list[i].class_name;
                        break;
                    }
                    else {
                        if (group[j].class == course_list[i].class_name) {
                            color = group[j].color;
                            break;
                        }
                    }
                }
                workbook.sheet(0).cell("A" + Math.floor(i + 12)).value(i + 1).style("border", true);
                workbook.sheet(0).cell("B" + Math.floor(i + 12)).value(course_list[i].code).style("border", true).style("fontColor", color).style("bold", true);
                workbook.sheet(0).cell("C" + Math.floor(i + 12)).value(course_list[i].name).style("border", true);
                workbook.sheet(0).cell("D" + Math.floor(i + 12)).value(course_list[i].class_name).style("border", true);
                workbook.sheet(0).cell("E" + Math.floor(i + 12)).value(course_list[i].lecturers).style("border", true);
                workbook.sheet(0).cell("F" + Math.floor(i + 12)).value(course_list[i].tas).style("border", true);
                workbook.sheet(0).cell("G" + Math.floor(i + 12)).value(course_list[i].office_hour).style("border", true);
                workbook.sheet(0).cell("H" + Math.floor(i + 12)).value(course_list[i].note).style("border", true);
                workbook.sheet(0).row(Math.floor(i + 12)).height(30);
                var schedules = course_list[i].schedules.split(';');
                for (var j = 0; j < schedules.length; j++) {
                    var temp = schedules[j].split('-');
                    var index = temp[0];
                    var room = temp[1];
                    var type = temp[2];
                    sessions[index] += course_list[i].code + '-' + course_list[i].class_name + '-' + room + '-' + type + '\r\n';
                }
            }
            workbook.sheet(0).cell("A1").value("THỜI KHÓA BIỂU " + semester.name);
            workbook.sheet(0).range("A1:G1").merged(true);
            workbook.sheet(0).cell("A2").value("Thời gian học: " + semester.start_date.toString('dd-MMM-yyyy') + ' - ' + semester.end_date.toString('dd-MMM-yyyy'));
            workbook.sheet(0).range("A2:G2").merged(true);
            workbook.sheet(0).cell("A3").value("Thời gian nghỉ: " + semester.vacation_time);
            workbook.sheet(0).range("A3:G3").merged(true);
            workbook.sheet(0).column("A").width(30).style("horizontalAlignment", "center").style("verticalAlignment", "center").style("wrapText", true);
            workbook.sheet(0).column("B").width(30).style("horizontalAlignment", "center").style("verticalAlignment", "center").style("wrapText", true);
            workbook.sheet(0).column("C").width(30).style("horizontalAlignment", "center").style("verticalAlignment", "center").style("wrapText", true);
            workbook.sheet(0).column("D").width(30).style("horizontalAlignment", "center").style("verticalAlignment", "center").style("wrapText", true);
            workbook.sheet(0).column("E").width(30).style("horizontalAlignment", "center").style("verticalAlignment", "center").style("wrapText", true);
            workbook.sheet(0).column("F").width(30).style("horizontalAlignment", "center").style("verticalAlignment", "center").style("wrapText", true);
            workbook.sheet(0).column("G").width(30).style("horizontalAlignment", "center").style("verticalAlignment", "center").style("wrapText", true);
            workbook.sheet(0).column("H").width(30).style("horizontalAlignment", "center").style("verticalAlignment", "center").style("wrapText", true);
            workbook.sheet(0).cell("A4").value("").style("border", true);
            workbook.sheet(0).cell("B4").value("2").style("border", true);
            workbook.sheet(0).cell("C4").value("3").style("border", true);
            workbook.sheet(0).cell("D4").value("4").style("border", true);
            workbook.sheet(0).cell("E4").value("5").style("border", true);
            workbook.sheet(0).cell("F4").value("6").style("border", true);
            workbook.sheet(0).cell("G4").value("7").style("border", true);
            for (var i = 0; i < 4; i++) {
                workbook.sheet(0).cell("A" + Math.floor(i + 5)).value(time[i]).style("border", true).style("fontColor", "0000ff").style("bold", true);
                workbook.sheet(0).cell("B" + Math.floor(i + 5)).value(sessions[i]).style("border", true).style("bold", true);
                workbook.sheet(0).cell("C" + Math.floor(i + 5)).value(sessions[i + 4]).style("border", true).style("bold", true);
                workbook.sheet(0).cell("D" + Math.floor(i + 5)).value(sessions[i + 8]).style("border", true).style("bold", true);
                workbook.sheet(0).cell("E" + Math.floor(i + 5)).value(sessions[i + 12]).style("border", true).style("bold", true);
                workbook.sheet(0).cell("F" + Math.floor(i + 5)).value(sessions[i + 16]).style("border", true).style("bold", true);
                workbook.sheet(0).cell("G" + Math.floor(i + 5)).value(sessions[i + 20]).style("border", true).style("bold", true);
                workbook.sheet(0).row(Math.floor(i + 5)).height(100);
            }
            var range = workbook.sheet(0).range("A1:H" + Math.floor(course_list.length + 12));
            return workbook.outputAsync()
                .then(function (blob) {
                console.log(5);
                if (file_name == '')
                    file_name = 'schedule';
                FileSaver.saveAs(blob, file_name + ".xlsx");
            });
        });
    };
    ExcelService.prototype.readAttendanceListFile = function (file) {
        var _this = this;
        return new rxjs_1.Observable(function (observer) {
            XlsxPopulate.fromDataAsync(file)
                .then(function (workbook) {
                observer.next(workbook.sheet(0));
            });
        }).map(function (sheet) {
            var cells = sheet.usedRange().value();
            var import_start = 0;
            var attendance_list = [];
            for (var i = 0; i < cells.length; i++) {
                if (cells[i][0] == 'STT') {
                    import_start = i + 1;
                    break;
                }
            }
            for (var i = import_start; i < cells.length; i++) {
                var attendance = {
                    code: cells[i][1],
                    name: cells[i][2],
                    attendance_details: []
                };
                for (var j = 3; j < cells[i].length; j++) {
                    var type = _this.appService.attendance_type.absent;
                    var icon = '';
                    var method = 'Absent';
                    if (cells[i][j] != undefined) {
                        switch (cells[i][j]) {
                            case 'X':
                                type = _this.appService.attendance_type.checklist;
                                icon = 'fa-check';
                                method = 'Checklist';
                                break;
                            case 'P':
                                icon = 'fa-envelope-square';
                                method = 'Permited Absent';
                                type = _this.appService.attendance_type.permited_absent;
                                break;
                        }
                    }
                    attendance.attendance_details.push({
                        attendance_type: type,
                        method: method,
                        icon: icon
                    });
                }
                attendance_list.push(attendance);
            }
            return { result: 'success', attendance_list: attendance_list, message: 'success' };
        }).catch(function (error) { return rxjs_1.Observable.of({ result: 'failure', attendance_list: null, message: error }); });
    };
    ExcelService.prototype.writeAttendanceList = function (attendance_list, file_name, lecturers) {
        var _this = this;
        XlsxPopulate.fromBlankAsync()
            .then(function (workbook) {
            workbook.sheet(0).cell("A1").value("Danh sách điểm danh " + file_name).style("horizontalAlignment", "center").style("bold", true);
            workbook.sheet(0).range("A1:X1").merged(true);
            workbook.sheet(0).cell("A2").value("GV : " + lecturers).style("horizontalAlignment", "center").style("bold", true);
            workbook.sheet(0).range("A2:X2").merged(true);
            workbook.sheet(0).cell("A4").value("STT").style("border", true).style("horizontalAlignment", "center").style("bold", true);
            workbook.sheet(0).cell("B4").value("MSSV").style("border", true).style("horizontalAlignment", "center").style("bold", true);
            workbook.sheet(0).cell("C4").value("Họ Tên").style("border", true).style("horizontalAlignment", "center").style("bold", true);
            workbook.sheet(0).column("C").width(30);
            workbook.sheet(0).cell("D4").value("Tuần 1").style("horizontalAlignment", "center").style("bold", true);
            workbook.sheet(0).cell("F4").value("Tuần 2").style("horizontalAlignment", "center").style("bold", true);
            workbook.sheet(0).cell("H4").value("Tuần 3").style("horizontalAlignment", "center").style("bold", true);
            workbook.sheet(0).cell("J4").value("Tuần 4").style("horizontalAlignment", "center").style("bold", true);
            workbook.sheet(0).cell("L4").value("Tuần 5").style("horizontalAlignment", "center").style("bold", true);
            workbook.sheet(0).cell("N4").value("Tuần 6").style("horizontalAlignment", "center").style("bold", true);
            workbook.sheet(0).cell("P4").value("Tuần 7").style("horizontalAlignment", "center").style("bold", true);
            workbook.sheet(0).cell("R4").value("Tuần 8").style("horizontalAlignment", "center").style("bold", true);
            workbook.sheet(0).cell("T4").value("Tuần 9").style("horizontalAlignment", "center").style("bold", true);
            workbook.sheet(0).cell("V4").value("Tuần 10").style("horizontalAlignment", "center").style("bold", true);
            workbook.sheet(0).cell("X4").value("Tuần 11").style("horizontalAlignment", "center").style("bold", true);
            var cell = ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y'];
            for (var i = 0; i < attendance_list.length; i++) {
                workbook.sheet(0).cell("A" + Math.floor(i + 5)).value(i + 1).style("border", true);
                workbook.sheet(0).cell("B" + Math.floor(i + 5)).value(attendance_list[i].code).style("border", true);
                workbook.sheet(0).cell("C" + Math.floor(i + 5)).value(attendance_list[i].name).style("border", true);
                var j = 0;
                for (j = 0; j < attendance_list[i].attendance_details.length; j++) {
                    var value;
                    switch (attendance_list[i].attendance_details[j].attendance_type) {
                        case _this.appService.attendance_type.checklist:
                        case _this.appService.attendance_type.quiz:
                        case _this.appService.attendance_type.qr:
                            workbook.sheet(0).cell(cell[j] + Math.floor(i + 5)).value('X').style("border", true).style("bold", true);
                            break;
                        case _this.appService.attendance_type.permited_absent:
                            workbook.sheet(0).cell(cell[j] + Math.floor(i + 5)).value('P').style("border", true).style("bold", true);
                            break;
                        case _this.appService.attendance_type.absent:
                            workbook.sheet(0).cell(cell[j] + Math.floor(i + 5)).value('A').style("border", true).style("fontColor", 'ff0000').style("bold", true);
                            break;
                    }
                }
                for (; j < 22; j++) {
                    workbook.sheet(0).cell(cell[j] + Math.floor(i + 5)).value('').style("border", true);
                }
            }
            workbook.sheet(0).range("D4:E4").merged(true).style("border", true);
            workbook.sheet(0).range("F4:G4").merged(true).style("border", true);
            workbook.sheet(0).range("H4:I4").merged(true).style("border", true);
            workbook.sheet(0).range("J4:K4").merged(true).style("border", true);
            workbook.sheet(0).range("L4:M4").merged(true).style("border", true);
            workbook.sheet(0).range("N4:O4").merged(true).style("border", true);
            workbook.sheet(0).range("P4:Q4").merged(true).style("border", true);
            workbook.sheet(0).range("R4:S4").merged(true).style("border", true);
            workbook.sheet(0).range("T4:U4").merged(true).style("border", true);
            workbook.sheet(0).range("V4:W4").merged(true).style("border", true);
            workbook.sheet(0).range("X4:Y4").merged(true).style("border", true);
            var range = workbook.sheet(0).range("A1:Y" + Math.floor(attendance_list.length + 5));
            return workbook.outputAsync()
                .then(function (blob) {
                if (file_name == '')
                    file_name = 'attendance_list';
                FileSaver.saveAs(blob, file_name + ".xlsx");
            });
        });
    };
    ExcelService.prototype.writeAttendanceLists = function (attendance_lists, class_has_courses) {
        var zip = new JSZip();
        Async.eachOf(attendance_lists, function (student_list, index, callback) {
            var class_has_course = class_has_courses[index];
            XlsxPopulate.fromBlankAsync()
                .then(function (workbook) {
                workbook.sheet(0).cell("A1").value('Danh Sách Điểm Danh Môn ' + class_has_course.code + ' - ' + class_has_course.name).style("horizontalAlignment", "center").style("bold", true);
                workbook.sheet(0).range("A1:L1").merged(true);
                workbook.sheet(0).cell("A2").value("Học kỳ: " + class_has_course.semester);
                workbook.sheet(0).range("A2:L2").merged(true);
                workbook.sheet(0).cell("A3").value('Giảng viên: ' + class_has_course.lecturers);
                workbook.sheet(0).range("A3:L3").merged(true);
                workbook.sheet(0).cell("A5").value("STT").style("border", true).style("bold", true);
                workbook.sheet(0).cell("B5").value("MSSV").style("border", true).style("bold", true);
                workbook.sheet(0).cell("C5").value("Họ Tên").style("border", true).style("bold", true);
                workbook.sheet(0).column("C").width(30);
                workbook.sheet(0).cell("D5").value("Tuần 1").style("horizontalAlignment", "center").style("bold", true);
                workbook.sheet(0).cell("F5").value("Tuần 2").style("horizontalAlignment", "center").style("bold", true);
                workbook.sheet(0).cell("H5").value("Tuần 3").style("horizontalAlignment", "center").style("bold", true);
                workbook.sheet(0).cell("J5").value("Tuần 4").style("horizontalAlignment", "center").style("bold", true);
                workbook.sheet(0).cell("L5").value("Tuần 5").style("horizontalAlignment", "center").style("bold", true);
                workbook.sheet(0).cell("N5").value("Tuần 6").style("horizontalAlignment", "center").style("bold", true);
                workbook.sheet(0).cell("P5").value("Tuần 7").style("horizontalAlignment", "center").style("bold", true);
                workbook.sheet(0).cell("R5").value("Tuần 8").style("horizontalAlignment", "center").style("bold", true);
                workbook.sheet(0).cell("T5").value("Tuần 9").style("horizontalAlignment", "center").style("bold", true);
                workbook.sheet(0).cell("V5").value("Tuần 10").style("horizontalAlignment", "center").style("bold", true);
                workbook.sheet(0).cell("X5").value("Tuần 11").style("horizontalAlignment", "center").style("bold", true);
                for (var i = 0; i < student_list.length; i++) {
                    workbook.sheet(0).cell("A" + Math.floor(i + 6)).value(i + 1).style("border", true);
                    workbook.sheet(0).cell("B" + Math.floor(i + 6)).value(student_list[i].student_code).style("border", true);
                    workbook.sheet(0).cell("C" + Math.floor(i + 6)).value(student_list[i].first_name + ' ' + student_list[i].last_name).style("border", true);
                    if (student_list[i].exemption) {
                        workbook.sheet(0).cell("D" + Math.floor(i + 6)).value('Miễn điểm danh').style("border", true).style("fontColor", 'ff0000').style("bold", true);
                        workbook.sheet(0).range("D" + Math.floor(i + 6) + ":" + "Y" + Math.floor(i + 6)).merged(true);
                    }
                    else {
                        var j = 0;
                        var cell = ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y'];
                        for (j = 0; j < student_list[i].attendance_details.length; j++) {
                            if (student_list[i].attendance_details[j].attendance_type > 0) {
                                workbook.sheet(0).cell(cell[j] + Math.floor(i + 6)).value('X').style("border", true).style("bold", true);
                            }
                            else {
                                if (student_list[i].attendance_details[j].attendance_type == 0) {
                                    workbook.sheet(0).cell(cell[j] + Math.floor(i + 6)).value('A').style("border", true).style("fontColor", 'ff0000').style("bold", true);
                                }
                                else {
                                    workbook.sheet(0).cell(cell[j] + Math.floor(i + 6)).value('P').style("border", true).style("bold", true);
                                }
                            }
                        }
                        for (; j < 22; j++) {
                            workbook.sheet(0).cell(cell[j] + Math.floor(i + 6)).value('').style("border", true);
                        }
                    }
                }
                workbook.sheet(0).range("D5:E5").merged(true).style("border", true);
                workbook.sheet(0).range("F5:G5").merged(true).style("border", true);
                workbook.sheet(0).range("H5:I5").merged(true).style("border", true);
                workbook.sheet(0).range("J5:K5").merged(true).style("border", true);
                workbook.sheet(0).range("L5:M5").merged(true).style("border", true);
                workbook.sheet(0).range("N5:O5").merged(true).style("border", true);
                workbook.sheet(0).range("P5:Q5").merged(true).style("border", true);
                workbook.sheet(0).range("R5:S5").merged(true).style("border", true);
                workbook.sheet(0).range("T5:U5").merged(true).style("border", true);
                workbook.sheet(0).range("V5:W5").merged(true).style("border", true);
                workbook.sheet(0).range("X5:Y5").merged(true).style("border", true);
                var range = workbook.sheet(0).range("A1:Y" + Math.floor(student_list.length + 6));
                return workbook.outputAsync()
                    .then(function (blob) {
                    zip.file(class_has_course.code + ' - ' + class_has_course.name + ' - ' + class_has_course.class_name + ".xlsx", blob);
                    callback();
                });
            });
        }, function (error) {
            if (error) {
                console.log(error);
            }
            else {
                zip.generateAsync({ type: "blob" })
                    .then(function (content) {
                    FileSaver.saveAs(content, "attendance_lists.zip");
                });
            }
        });
    };
    ExcelService.prototype.writeExceededAbsenceLimit = function (student_lists, class_has_courses) {
        var zip = new JSZip();
        Async.eachOf(student_lists, function (student_list, index, callback) {
            var class_has_course = class_has_courses[index];
            XlsxPopulate.fromBlankAsync()
                .then(function (workbook) {
                workbook.sheet(0).cell("A1").value('Danh Sách Sinh Viên Vượt Quá Số Buổi Vắng Cho Phép Môn ' + class_has_course.code + ' - ' + class_has_course.name);
                workbook.sheet(0).cell("A2").value("Học kỳ: " + class_has_course.semester);
                workbook.sheet(0).cell("A3").value('Giảng viên: ' + class_has_course.lecturers);
                workbook.sheet(0).cell("A5").value("STT").style("border", true);
                workbook.sheet(0).cell("B5").value("MSSV").style("border", true);
                workbook.sheet(0).cell("C5").value("Họ SV").style("border", true);
                workbook.sheet(0).cell("D5").value("Tên SV").style("border", true);
                workbook.sheet(0).cell("E5").value("Số buổi vắng").style("border", true);
                workbook.sheet(0).cell("F5").value("Số % buổi vắng").style("border", true);
                for (var i = 0; i < student_list.length; i++) {
                    workbook.sheet(0).cell("A" + Math.floor(i + 6)).value(i + 1).style("border", true);
                    workbook.sheet(0).cell("B" + Math.floor(i + 6)).value(student_list[i].student_code).style("border", true);
                    workbook.sheet(0).cell("C" + Math.floor(i + 6)).value(student_list[i].first_name).style("border", true);
                    workbook.sheet(0).cell("D" + Math.floor(i + 6)).value(student_list[i].last_name).style("border", true);
                    if (student_list[i].exemption) {
                        workbook.sheet(0).cell("E" + Math.floor(i + 6)).value('Miễn điểm danh').style("border", true).style("fontColor", 'ff0000');
                        workbook.sheet(0).range("E" + Math.floor(i + 6) + ":" + "F" + Math.floor(i + 6)).merged(true);
                    }
                    else {
                        if (student_list[i].absent_percentage > 30) {
                            workbook.sheet(0).cell("E" + Math.floor(i + 6)).value(student_list[i].absent_count).style("border", true).style("fontColor", 'ff0000');
                            workbook.sheet(0).cell("F" + Math.floor(i + 6)).value(student_list[i].absent_percentage + '%').style("border", true).style("fontColor", 'ff0000');
                        }
                        else {
                            workbook.sheet(0).cell("E" + Math.floor(i + 6)).value(student_list[i].absent_count).style("border", true);
                            workbook.sheet(0).cell("F" + Math.floor(i + 6)).value(student_list[i].absent_percentage + '%').style("border", true);
                        }
                    }
                }
                var range = workbook.sheet(0).range("A1:G" + Math.floor(student_list.length + 6));
                return workbook.outputAsync()
                    .then(function (blob) {
                    zip.file(class_has_course.code + ' - ' + class_has_course.name + ' - ' + class_has_course.class_name + ".xlsx", blob);
                    callback();
                });
            });
        }, function (error) {
            if (error) {
                console.log(error);
            }
            else {
                zip.generateAsync({ type: "blob" })
                    .then(function (content) {
                    FileSaver.saveAs(content, "exceeded_absence_limit.zip");
                });
            }
        });
    };
    ExcelService.ctorParameters = function () { return [
        { type: http_1.Http },
        { type: app_service_1.AppService }
    ]; };
    ExcelService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, app_service_1.AppService])
    ], ExcelService);
    return ExcelService;
}());
exports.ExcelService = ExcelService;


/***/ }),

/***/ "./src/app/shared/services/feedback.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/feedback.service.ts ***!
  \*****************************************************/
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
var http_1 = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var app_service_1 = __webpack_require__(/*! ./app.service */ "./src/app/shared/services/app.service.ts");
var config_1 = __webpack_require__(/*! ../config */ "./src/app/shared/config.ts");
var FeedbackService = /** @class */ (function () {
    // Resolve HTTP using the constructor
    function FeedbackService(http, appService, appConfig, authService, router) {
        this.http = http;
        this.appService = appService;
        this.appConfig = appConfig;
        this.authService = authService;
        this.router = router;
        this.getFeedbacksUrl = this.appConfig.apiHost + '/feedback/list';
        this.readFeedbacksUrl = this.appConfig.apiHost + '/feedback/read';
        this.sendFeedbacksUrl = this.appConfig.apiHost + '/feedback/send';
        this.getFeedbackHistoryUrl = this.appConfig.apiHost + '/feedback/history';
        this.deleteFeedbackUrl = this.appConfig.apiHost + '/feedback/delete';
    }
    FeedbackService.prototype.getFeedbacks = function (search_text, category, role_id, status, page, limit) {
        var _this = this;
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = -1; }
        var params = {
            'search_text': search_text,
            'category': category,
            'role_id': role_id,
            'status': status,
            'page': page,
            'limit': limit,
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.getFeedbacksUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    FeedbackService.prototype.readFeedbacks = function (feedback_id) {
        var _this = this;
        var params = {
            'feedback_id': feedback_id
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(this.readFeedbacksUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    FeedbackService.prototype.sendFeedbacks = function (to_id, title, category, content, isAnonymous) {
        var _this = this;
        var params = {
            'to_id': to_id,
            'category': category,
            'title': title,
            'content': content,
            'isAnonymous': isAnonymous
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.sendFeedbacksUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    FeedbackService.prototype.getFeedbackHistory = function (from_to, search_text, category, status, page, limit) {
        var _this = this;
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = -1; }
        var params = {
            'from_to': from_to,
            'category': category,
            'status': status,
            'search_text': search_text,
            'page': page,
            'limit': limit,
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.getFeedbackHistoryUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    FeedbackService.prototype.deleteFeedback = function (id) {
        var _this = this;
        var params = {
            'id': id
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.deleteFeedbackUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    FeedbackService.ctorParameters = function () { return [
        { type: http_1.Http },
        { type: app_service_1.AppService },
        { type: config_1.AppConfig },
        { type: auth_service_1.AuthService },
        { type: router_1.Router }
    ]; };
    FeedbackService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, app_service_1.AppService, config_1.AppConfig, auth_service_1.AuthService, router_1.Router])
    ], FeedbackService);
    return FeedbackService;
}());
exports.FeedbackService = FeedbackService;


/***/ }),

/***/ "./src/app/shared/services/map.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/map.service.ts ***!
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
var http_1 = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var config_1 = __webpack_require__(/*! ../config */ "./src/app/shared/config.ts");
var auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var MapService = /** @class */ (function () {
    // Resolve HTTP using the constructor
    function MapService(http, appConfig, authService, router) {
        this.http = http;
        this.appConfig = appConfig;
        this.authService = authService;
        this.router = router;
        this.getMapUrl = 'http://checkingattendance.000webhostapp.com/LogAPI/getLog.php';
    }
    MapService.prototype.getMap = function () {
        var _this = this;
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.getMapUrl)
            // ...and calling .json() on the response to return data
            .map(function (res) { return { result: res.toString(), message: res.toString() }; })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    MapService.ctorParameters = function () { return [
        { type: http_1.Http },
        { type: config_1.AppConfig },
        { type: auth_service_1.AuthService },
        { type: router_1.Router }
    ]; };
    MapService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, config_1.AppConfig, auth_service_1.AuthService, router_1.Router])
    ], MapService);
    return MapService;
}());
exports.MapService = MapService;


/***/ }),

/***/ "./src/app/shared/services/notification.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/notification.service.ts ***!
  \*********************************************************/
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
var http_1 = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var config_1 = __webpack_require__(/*! ../config */ "./src/app/shared/config.ts");
var auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var NotificationService = /** @class */ (function () {
    // Resolve HTTP using the constructor
    function NotificationService(http, appConfig, authService, router) {
        this.http = http;
        this.appConfig = appConfig;
        this.authService = authService;
        this.router = router;
        this.getNotificationUrl = this.appConfig.apiHost + '/notification/list';
        this.readNotificationUrl = this.appConfig.apiHost + '/notification/read';
    }
    NotificationService.prototype.getNotification = function (user_id, user_role) {
        var _this = this;
        var params = {
            'user_id': user_id,
            'user_role': user_role
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.getNotificationUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    NotificationService.prototype.readNotification = function (id) {
        var _this = this;
        var params = {
            'id': id,
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.readNotificationUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    NotificationService.ctorParameters = function () { return [
        { type: http_1.Http },
        { type: config_1.AppConfig },
        { type: auth_service_1.AuthService },
        { type: router_1.Router }
    ]; };
    NotificationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, config_1.AppConfig, auth_service_1.AuthService, router_1.Router])
    ], NotificationService);
    return NotificationService;
}());
exports.NotificationService = NotificationService;


/***/ }),

/***/ "./src/app/shared/services/programs.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/programs.service.ts ***!
  \*****************************************************/
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
var http_1 = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var config_1 = __webpack_require__(/*! ../config */ "./src/app/shared/config.ts");
var auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ProgramsService = /** @class */ (function () {
    // Resolve HTTP using the constructor
    function ProgramsService(http, appConfig, authService, router) {
        this.http = http;
        this.appConfig = appConfig;
        this.authService = authService;
        this.router = router;
        this.getProgramListsUrl = this.appConfig.apiHost + '/program/list';
        this.addProgramUrl = this.appConfig.apiHost + '/program/create';
    }
    ProgramsService.prototype.getProgramList = function (searchText, sort, page, limit) {
        var _this = this;
        if (searchText === void 0) { searchText = null; }
        if (sort === void 0) { sort = 'none'; }
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = -1; }
        var params = {
            'searchText': searchText,
            'page': page,
            'limit': limit,
            'sort': sort
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.getProgramListsUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    ProgramsService.prototype.addProgram = function (name, code) {
        var _this = this;
        var params = {
            'name': name,
            'code': code,
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.addProgramUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            //.catch((error: any) => Observable.throw(error || 'Server error'));
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    ProgramsService.ctorParameters = function () { return [
        { type: http_1.Http },
        { type: config_1.AppConfig },
        { type: auth_service_1.AuthService },
        { type: router_1.Router }
    ]; };
    ProgramsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, config_1.AppConfig, auth_service_1.AuthService, router_1.Router])
    ], ProgramsService);
    return ProgramsService;
}());
exports.ProgramsService = ProgramsService;


/***/ }),

/***/ "./src/app/shared/services/quiz.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/quiz.service.ts ***!
  \*************************************************/
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
var http_1 = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var angular_2_local_storage_1 = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/fesm5/angular-2-local-storage.js");
var auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var app_service_1 = __webpack_require__(/*! ./app.service */ "./src/app/shared/services/app.service.ts");
var config_1 = __webpack_require__(/*! ../config */ "./src/app/shared/config.ts");
var QuizService = /** @class */ (function () {
    // Resolve HTTP using the constructor
    function QuizService(http, appService, appConfig, authService, router, localStorage) {
        this.http = http;
        this.appService = appService;
        this.appConfig = appConfig;
        this.authService = authService;
        this.router = router;
        this.localStorage = localStorage;
        //load quiz template for teacher
        this.getQuizByCourseAndClassUrl = this.appConfig.apiHost + '/quiz/list';
        //for teacher to load and show to student
        this.getPublishedQuizUrl = this.appConfig.apiHost + '/quiz/published';
        //for teacher to notify server that quiz has started
        this.startQuizUrl = this.appConfig.apiHost + '/quiz/start';
        //For teacher to publish quiz
        this.publishQuizUrl = this.appConfig.apiHost + '/quiz/publish';
        //Teacher to stop quiz midway
        this.stopQuizUrl = this.appConfig.apiHost + '/quiz/stop';
        //Teacher delete template quiz
        this.deleteQuizUrl = this.appConfig.apiHost + '/quiz/delete';
        //Teacher add template quiz
        this.addQuizUrl = this.appConfig.apiHost + '/quiz/add';
        //Student join quiz
        this.joinQuizUrl = this.appConfig.apiHost + '/quiz/join';
        //Student quit quiz
        this.quitQuizUrl = this.appConfig.apiHost + '/quiz/quit';
        //Teacher save quiz and attendance
        this.saveQuizUrl = this.appConfig.apiHost + '/quiz/save';
        //Teacher get misc question
        this.getMiscQuestionUrl = this.appConfig.apiHost + '/quiz/misc-question';
        //Teacher update template quiz
        this.updateQuizUrl = this.appConfig.apiHost + '/quiz/update';
    }
    QuizService.prototype.getQuizByCourseAndClass = function (course_id, class_id) {
        var _this = this;
        var params = {
            'course_id': course_id,
            'class_id': class_id,
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.getQuizByCourseAndClassUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    QuizService.prototype.getPublishedQuiz = function (quiz_code) {
        var _this = this;
        var params = {
            'quiz_code': quiz_code,
        };
        var authToken = this.authService.token ? this.authService.token : this.localStorage.get('token');
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.getPublishedQuizUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    QuizService.prototype.startQuiz = function (quiz_code) {
        var _this = this;
        var params = {
            'quiz_code': quiz_code,
        };
        var authToken = this.authService.token ? this.authService.token : this.localStorage.get('token');
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.startQuizUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    QuizService.prototype.publishQuiz = function (course_id, class_id, quiz) {
        var _this = this;
        var params = {
            'course_id': course_id,
            'class_id': class_id,
            'quiz': quiz
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.publishQuizUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    QuizService.prototype.stopQuiz = function (quiz_code) {
        var _this = this;
        var params = {
            'quiz_code': quiz_code
        };
        var authToken = this.authService.token ? this.authService.token : this.localStorage.get('token');
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.stopQuizUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    QuizService.prototype.deleteQuiz = function (quiz_id) {
        var _this = this;
        var params = {
            'quiz_id': quiz_id
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.deleteQuizUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    QuizService.prototype.addQuiz = function (course_id, class_id, quiz) {
        var _this = this;
        var params = {
            'course_id': course_id,
            'class_id': class_id,
            'quiz': quiz
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.addQuizUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    QuizService.prototype.joinQuiz = function (code) {
        var _this = this;
        var params = {
            'code': code
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.joinQuizUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    QuizService.prototype.quitQuiz = function (code) {
        var _this = this;
        var params = {
            'code': code
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.quitQuizUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    QuizService.prototype.saveQuiz = function (quiz, checked_student_list) {
        var _this = this;
        var params = {
            'checked_student_list': checked_student_list,
            'quiz': quiz
        };
        var authToken = this.authService.token ? this.authService.token : this.localStorage.get('token');
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.saveQuizUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    QuizService.prototype.getMiscQuestion = function (number_of_question) {
        var _this = this;
        var params = {
            'number_of_question': number_of_question
        };
        var authToken = this.authService.token ? this.authService.token : this.localStorage.get('token');
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.getMiscQuestionUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    QuizService.prototype.updateQuiz = function (quiz) {
        var _this = this;
        var params = {
            'quiz': quiz
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.updateQuizUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    QuizService.ctorParameters = function () { return [
        { type: http_1.Http },
        { type: app_service_1.AppService },
        { type: config_1.AppConfig },
        { type: auth_service_1.AuthService },
        { type: router_1.Router },
        { type: angular_2_local_storage_1.LocalStorageService }
    ]; };
    QuizService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, app_service_1.AppService, config_1.AppConfig,
            auth_service_1.AuthService, router_1.Router, angular_2_local_storage_1.LocalStorageService])
    ], QuizService);
    return QuizService;
}());
exports.QuizService = QuizService;


/***/ }),

/***/ "./src/app/shared/services/schedule.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/schedule.service.ts ***!
  \*****************************************************/
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
var http_1 = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var config_1 = __webpack_require__(/*! ../config */ "./src/app/shared/config.ts");
var auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ScheduleService = /** @class */ (function () {
    // Resolve HTTP using the constructor
    function ScheduleService(http, appConfig, authService, router) {
        this.http = http;
        this.appConfig = appConfig;
        this.authService = authService;
        this.router = router;
        this.updateScheduleUrl = this.appConfig.apiHost + '/schedule/update/';
        this.getSchedulesAndCoursesUrl = this.appConfig.apiHost + '/schedule/schedules-and-courses/';
        this.getSchedulesAndCoursesByStudentUrl = this.appConfig.apiHost + '/schedule/schedules-and-courses-by-student/';
        this.getSchedulesAndCoursesByTeacherUrl = this.appConfig.apiHost + '/schedule/schedules-and-courses-by-teacher/';
        this.exportScheduleUrl = this.appConfig.apiHost + '/schedule/export/';
        this.importScheduleUrl = this.appConfig.apiHost + '/schedule/import';
    }
    ScheduleService.prototype.updateSchedule = function (classes) {
        var _this = this;
        var params = {
            'classes': classes
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(this.updateScheduleUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    ScheduleService.prototype.getSchedulesAndCourses = function (program_id, class_id, semester_id) {
        var _this = this;
        var params = {
            'program_id': program_id,
            'class_id': class_id,
            'semester_id': semester_id
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.getSchedulesAndCoursesUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    ScheduleService.prototype.getSchedulesAndCoursesByStudent = function (semester_id) {
        var _this = this;
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.getSchedulesAndCoursesByStudentUrl, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    ScheduleService.prototype.getSchedulesAndCoursesByTeacher = function (semester_id) {
        var _this = this;
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.getSchedulesAndCoursesByTeacherUrl, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    ScheduleService.prototype.exportSchedule = function (programs, classes) {
        var _this = this;
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        var params = {
            'programs': programs,
            'classes': classes
        };
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.exportScheduleUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    ScheduleService.prototype.importSchedule = function (schedule) {
        var _this = this;
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        var params = {
            'schedule': schedule
        };
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.importScheduleUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    ScheduleService.ctorParameters = function () { return [
        { type: http_1.Http },
        { type: config_1.AppConfig },
        { type: auth_service_1.AuthService },
        { type: router_1.Router }
    ]; };
    ScheduleService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, config_1.AppConfig, auth_service_1.AuthService, router_1.Router])
    ], ScheduleService);
    return ScheduleService;
}());
exports.ScheduleService = ScheduleService;


/***/ }),

/***/ "./src/app/shared/services/semester.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/semester.service.ts ***!
  \*****************************************************/
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
var http_1 = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var config_1 = __webpack_require__(/*! ../config */ "./src/app/shared/config.ts");
var auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var SemesterService = /** @class */ (function () {
    // Resolve HTTP using the constructor
    function SemesterService(http, appConfig, authService, router) {
        this.http = http;
        this.appConfig = appConfig;
        this.authService = authService;
        this.router = router;
        this.getSemesterUrl = this.appConfig.apiHost + '/semester';
        this.getSemesterListsUrl = this.appConfig.apiHost + '/semester/list';
        this.addSemesterUrl = this.appConfig.apiHost + '/semester/create';
    }
    SemesterService.prototype.getSemester = function (id) {
        var _this = this;
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.getSemesterUrl + "/" + id, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    SemesterService.prototype.getSemesterList = function (searchText, sort, page, limit) {
        var _this = this;
        if (searchText === void 0) { searchText = null; }
        if (sort === void 0) { sort = 'none'; }
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = -1; }
        var params = {
            'searchText': searchText,
            'page': page,
            'limit': limit,
            'sort': sort
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.getSemesterListsUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    SemesterService.prototype.addSemester = function (name, start_date, end_date, vacation_time) {
        var _this = this;
        var params = {
            'name': name,
            'start_date': start_date,
            'end_date': end_date,
            'vacation_time': vacation_time
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.addSemesterUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            //.catch((error: any) => Observable.throw(error || 'Server error'));
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    SemesterService.ctorParameters = function () { return [
        { type: http_1.Http },
        { type: config_1.AppConfig },
        { type: auth_service_1.AuthService },
        { type: router_1.Router }
    ]; };
    SemesterService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, config_1.AppConfig, auth_service_1.AuthService, router_1.Router])
    ], SemesterService);
    return SemesterService;
}());
exports.SemesterService = SemesterService;


/***/ }),

/***/ "./src/app/shared/services/socket.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/socket.service.ts ***!
  \***************************************************/
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
var io = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var SocketService = /** @class */ (function () {
    // Constructor with an injection of ToastService
    function SocketService() {
        this.invokeCheckAttendanceUpdated = new rxjs_1.Subject();
        this.invokeCheckAttendanceCreated = new rxjs_1.Subject();
        this.invokeCheckAttendanceStopped = new rxjs_1.Subject();
        this.invokeQuizStopped = new rxjs_1.Subject();
        this.invokeQuizQuestionReady = new rxjs_1.Subject();
        this.invokeQuizQuestionLoaded = new rxjs_1.Subject();
        this.invokeQuizQuestionEnded = new rxjs_1.Subject();
        this.invokeJoinedQuiz = new rxjs_1.Subject();
        this.invokeQuittedQuiz = new rxjs_1.Subject();
        this.invokeAnsweredQuiz = new rxjs_1.Subject();
        this.invokeQuizEnded = new rxjs_1.Subject();
        this.invokeNotificationPushed = new rxjs_1.Subject();
        this.socket = io();
    }
    // Emit: Check Attendance updated event
    SocketService.prototype.emitEventOnCheckAttendanceUpdated = function (checkAttendanceUpdated) {
        this.socket.emit('checkAttendanceUpdated', checkAttendanceUpdated);
    };
    // Consume on Check Attendance updated 
    SocketService.prototype.consumeEventOnCheckAttendanceUpdated = function () {
        var self = this;
        this.socket.on('checkAttendanceUpdated', function (event) {
            self.invokeCheckAttendanceUpdated.next(event);
        });
    };
    SocketService.prototype.stopEventOnCheckAttendanceUpdated = function () {
        this.socket.off('checkAttendanceUpdated');
    };
    // Emit: Check Attendance created event
    SocketService.prototype.emitEventOnCheckAttendanceCreated = function (checkAttendanceCreated) {
        this.socket.emit('checkAttendanceCreated', checkAttendanceCreated);
    };
    // Consume on Check Attendance created 
    SocketService.prototype.consumeEventOnCheckAttendanceCreated = function () {
        var self = this;
        this.socket.on('checkAttendanceCreated', function (event) {
            self.invokeCheckAttendanceCreated.next(event);
        });
    };
    SocketService.prototype.stopEventOnCheckAttendanceCreated = function () {
        this.socket.off('checkAttendanceCreated');
    };
    // Emit: Check Attendance created event
    SocketService.prototype.emitEventOnCheckAttendanceStopped = function (checkAttendanceStopped) {
        this.socket.emit('checkAttendanceStopped', checkAttendanceStopped);
    };
    // Consume on Check Attendance stopped 
    SocketService.prototype.consumeEventOnCheckAttendanceStopped = function () {
        var self = this;
        this.socket.on('checkAttendanceStopped', function (event) {
            self.invokeCheckAttendanceStopped.next(event);
        });
    };
    SocketService.prototype.stopEventOnCheckAttendanceStopped = function () {
        this.socket.off('checkAttendanceStopped');
    };
    //Teacher stop quiz midway
    SocketService.prototype.emitEventOnQuizStopped = function (quizStopped) { this.socket.emit('quizStopped', quizStopped); };
    SocketService.prototype.consumeEventOnQuizStopped = function () {
        var self = this;
        this.socket.on('quizStopped', function (event) {
            self.invokeQuizStopped.next(event);
        });
    };
    SocketService.prototype.stopEventOnQuizStopped = function () { this.socket.off('quizStopped'); };
    //Teacher end quiz normarlly
    SocketService.prototype.emitEventOnQuizEnded = function (quizEnded) { this.socket.emit('quizEnded', quizEnded); };
    SocketService.prototype.consumeEventOnQuizEnded = function () {
        var self = this;
        this.socket.on('quizEnded', function (event) {
            self.invokeQuizEnded.next(event);
        });
    };
    SocketService.prototype.stopEventOnQuizEnded = function () { this.socket.off('quizEnded'); };
    //Question ready
    SocketService.prototype.emitEventOnQuizQuestionReady = function (quizQuestionReady) { this.socket.emit('quizQuestionReady', quizQuestionReady); };
    SocketService.prototype.consumeEventOnQuizQuestionReady = function () {
        var self = this;
        this.socket.on('quizQuestionReady', function (event) {
            self.invokeQuizQuestionReady.next(event);
        });
    };
    SocketService.prototype.stopEventOnQuizQuestionReady = function () { this.socket.off('quizQuestionReady'); };
    //Question loaded
    SocketService.prototype.emitEventOnQuizQuestionLoaded = function (quizQuestionLoaded) { this.socket.emit('quizQuestionLoaded', quizQuestionLoaded); };
    SocketService.prototype.consumeEventOnQuizQuestionLoaded = function () {
        var self = this;
        this.socket.on('quizQuestionLoaded', function (event) {
            self.invokeQuizQuestionLoaded.next(event);
        });
    };
    SocketService.prototype.stopEventOnQuizQuestionLoaded = function () { this.socket.off('quizQuestionLoaded'); };
    //Question ended
    SocketService.prototype.emitEventOnQuizQuestionEnded = function (quizQuestionEnded) { this.socket.emit('quizQuestionEnded', quizQuestionEnded); };
    SocketService.prototype.consumeEventOnQuizQuestionEnded = function () {
        var self = this;
        this.socket.on('quizQuestionEnded', function (event) {
            self.invokeQuizQuestionEnded.next(event);
        });
    };
    SocketService.prototype.stopEventOnQuizQuestionEnded = function () { this.socket.off('quizQuestionEnded'); };
    //Joined Quiz
    SocketService.prototype.emitEventOnJoinedQuiz = function (joinedQuiz) { this.socket.emit('joinedQuiz', joinedQuiz); };
    SocketService.prototype.consumeEventOnJoinedQuiz = function () {
        var self = this;
        this.socket.on('joinedQuiz', function (event) {
            self.invokeJoinedQuiz.next(event);
        });
    };
    SocketService.prototype.stopEventOnJoinedQuiz = function () { this.socket.off('joinedQuiz'); };
    //Quitted Quiz
    SocketService.prototype.emitEventOnQuittedQuiz = function (quittedQuiz) { this.socket.emit('quittedQuiz', quittedQuiz); };
    SocketService.prototype.consumeEventOnQuittedQuiz = function () {
        var self = this;
        this.socket.on('quittedQuiz', function (event) {
            self.invokeQuittedQuiz.next(event);
        });
    };
    SocketService.prototype.stopEventOnQuittedQuiz = function () { this.socket.off('quittedQuiz'); };
    //Answered Quiz
    SocketService.prototype.emitEventOnAnsweredQuiz = function (answeredQuiz) { this.socket.emit('answeredQuiz', answeredQuiz); };
    SocketService.prototype.consumeEventOnAnsweredQuiz = function () {
        var self = this;
        this.socket.on('answeredQuiz', function (event) {
            self.invokeAnsweredQuiz.next(event);
        });
    };
    SocketService.prototype.stopEventOnAnsweredQuiz = function () { this.socket.off('answeredQuiz'); };
    //Push notification
    SocketService.prototype.emitEventOnNotificationPushed = function (notificationPushed) { this.socket.emit('notificationPushed', notificationPushed); };
    SocketService.prototype.consumeEventOnNotificationPushed = function () {
        var self = this;
        this.socket.on('notificationPushed', function (event) {
            self.invokeNotificationPushed.next(event);
        });
    };
    SocketService.prototype.stopEventOnNotificationPushed = function () { this.socket.off('notificationPushed'); };
    SocketService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());
exports.SocketService = SocketService;


/***/ }),

/***/ "./src/app/shared/services/student.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/student.service.ts ***!
  \****************************************************/
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
var http_1 = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var config_1 = __webpack_require__(/*! ../config */ "./src/app/shared/config.ts");
var auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var angular_2_local_storage_1 = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/fesm5/angular-2-local-storage.js");
var StudentService = /** @class */ (function () {
    // Resolve HTTP using the constructor
    function StudentService(http, appConfig, authService, router, localStorage) {
        this.http = http;
        this.appConfig = appConfig;
        this.authService = authService;
        this.router = router;
        this.localStorage = localStorage;
        // private instance variable to hold base url
        this.getListStudentsUrl = this.appConfig.apiHost + '/student/list';
        this.getStudentDetailsUrl = this.appConfig.apiHost + '/student/detail';
        this.addStudentUrl = this.appConfig.apiHost + '/student/add';
        this.updateStudentUrl = this.appConfig.apiHost + '/student/update';
        this.importStudentUrl = this.appConfig.apiHost + '/student/import';
        this.exportStudentUrl = this.appConfig.apiHost + '/student/export';
        this.getStudentDetailByCodeUrl = this.appConfig.apiHost + '/student/detail-by-code';
        this.changeAttendanceStatusUrl = this.appConfig.apiHost + '/student/change-attendance-status';
        this.exportExamineesUrl = this.appConfig.apiHost + '/student/export-examinees';
        this.exportAttenadanceSummaryUrl = this.appConfig.apiHost + '/student/export-attendance-summary';
        this.exportAttenadanceListsUrl = this.appConfig.apiHost + '/student/export-attendance-lists';
        this.exportExceededAbsenceLimitUrl = this.appConfig.apiHost + '/student/export-exceeded-absence-limit';
        this.updateStudentInteractionUrl = this.appConfig.apiHost + '/attendance/update-interaction';
        this.getStudentByCourseUrl = this.appConfig.apiHost + '/student/list-by-course';
        this.getTeachingTeacherListUrl = this.appConfig.apiHost + '/student/teaching_teacher_list';
    }
    StudentService.prototype.getListStudents = function (program_id, class_id, status, searchText, page, limit) {
        var _this = this;
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 10; }
        var params = {
            'searchText': searchText,
            'page': page,
            'limit': limit,
            'program_id': program_id,
            'class_id': class_id,
            'status': status
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.getListStudentsUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    StudentService.prototype.getStudentrDetail = function (id) {
        var _this = this;
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.getStudentDetailsUrl + "/" + id, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    StudentService.prototype.addStudent = function (program_id, class_id, code, first_name, last_name, email, phone, note) {
        var _this = this;
        if (phone === void 0) { phone = null; }
        if (note === void 0) { note = null; }
        var params = {
            'program_id': program_id,
            'class_id': class_id,
            'code': code,
            'first_name': first_name,
            'last_name': last_name,
            'email': email,
            'phone': phone,
            'note': note
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.addStudentUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    StudentService.prototype.updateStudent = function (id, name, email, phone, avatar, status) {
        var _this = this;
        var params = {
            'id': id,
            'name': name,
            'email': email,
            'phone': phone,
            'avatar': avatar,
            'status': status
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(this.updateStudentUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    StudentService.prototype.importStudent = function (class_name, student_list) {
        var _this = this;
        var params = {
            'class_name': class_name,
            'student_list': student_list
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.importStudentUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    StudentService.prototype.exportStudent = function (classes_id) {
        var _this = this;
        var params = {
            'classes_id': classes_id,
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.exportStudentUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    StudentService.prototype.getStudentDetailByCode = function (code) {
        var _this = this;
        var params = {
            'code': code,
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.getStudentDetailByCodeUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    StudentService.prototype.changeAttendanceStatus = function (student_id, course_id, class_id, status) {
        var _this = this;
        var params = {
            'student_id': student_id,
            'course_id': course_id,
            'class_id': class_id,
            'status': status
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.changeAttendanceStatusUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    StudentService.prototype.exportExaminees = function (class_has_course_id) {
        var _this = this;
        var params = {
            'class_has_course_id': class_has_course_id,
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.exportExamineesUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    StudentService.prototype.exportAttendanceSummary = function (class_has_course_id) {
        var _this = this;
        var params = {
            'class_has_course_id': class_has_course_id,
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.exportAttenadanceSummaryUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    StudentService.prototype.exportAttendanceLists = function (class_has_course_id) {
        var _this = this;
        var params = {
            'class_has_course_id': class_has_course_id,
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.exportAttenadanceListsUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    StudentService.prototype.exportExceededAbsenceLimit = function (class_has_course_id) {
        var _this = this;
        var params = {
            'class_has_course_id': class_has_course_id,
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.exportExceededAbsenceLimitUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    StudentService.prototype.updateStudentInteraction = function (id, attendance_id, interaction_type) {
        var _this = this;
        var params = {
            'id': id,
            'attendance_id': attendance_id,
            'interaction_type': interaction_type,
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.updateStudentInteractionUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    StudentService.prototype.getStudentByCourse = function (course_id, class_id) {
        var _this = this;
        var params = {
            'course_id': course_id,
            'class_id': class_id,
        };
        var authToken = this.authService.token ? this.authService.token : this.localStorage.get('token');
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.getStudentByCourseUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    StudentService.prototype.getTeachingTeacherList = function () {
        var _this = this;
        var params = {};
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.getTeachingTeacherListUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    StudentService.ctorParameters = function () { return [
        { type: http_1.Http },
        { type: config_1.AppConfig },
        { type: auth_service_1.AuthService },
        { type: router_1.Router },
        { type: angular_2_local_storage_1.LocalStorageService }
    ]; };
    StudentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, config_1.AppConfig, auth_service_1.AuthService,
            router_1.Router, angular_2_local_storage_1.LocalStorageService])
    ], StudentService);
    return StudentService;
}());
exports.StudentService = StudentService;


/***/ }),

/***/ "./src/app/shared/services/teachers.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/teachers.service.ts ***!
  \*****************************************************/
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
var http_1 = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var config_1 = __webpack_require__(/*! ../config */ "./src/app/shared/config.ts");
var auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var TeacherService = /** @class */ (function () {
    // Resolve HTTP using the constructor
    function TeacherService(http, appConfig, authService, router) {
        this.http = http;
        this.appConfig = appConfig;
        this.authService = authService;
        this.router = router;
        // private instance variable to hold base url
        this.getListTeachersUrl = this.appConfig.apiHost + '/teacher/list';
        this.getTeacherDetailsUrl = this.appConfig.apiHost + '/teacher/detail';
        this.addTeacherUrl = this.appConfig.apiHost + '/teacher/add';
        this.updateTeacherUrl = this.appConfig.apiHost + '/teacher/update';
        this.importTeacherUrl = this.appConfig.apiHost + '/teacher/import';
    }
    TeacherService.prototype.getListTeachers = function (searchText, page, limit, sort) {
        var _this = this;
        if (searchText === void 0) { searchText = null; }
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 10; }
        if (sort === void 0) { sort = 'none'; }
        var params = {
            'searchText': searchText,
            'page': page,
            'limit': limit,
            'sort': sort,
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.getListTeachersUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    TeacherService.prototype.getTeacherDetail = function (id) {
        var _this = this;
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.getTeacherDetailsUrl + "/" + id, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    TeacherService.prototype.addTeacher = function (first_name, last_name, email, phone) {
        var _this = this;
        if (phone === void 0) { phone = null; }
        var params = {
            'first_name': first_name,
            'last_name': last_name,
            'email': email,
            'phone': phone
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.addTeacherUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    TeacherService.prototype.updateTeacher = function (id, name, email, phone, avatar) {
        var _this = this;
        if (phone === void 0) { phone = null; }
        var params = {
            'id': id,
            'name': name,
            'email': email,
            'phone': phone,
            'avatar': avatar
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(this.updateTeacherUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    TeacherService.prototype.importTeacher = function (teacher_list) {
        var _this = this;
        var params = {
            'teacher_list': teacher_list
        };
        var authToken = this.authService.token;
        var headers = new http_1.Headers();
        headers.append('x-access-token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.importTeacherUrl, params, options)
            // ...and calling .json() on the response to return data
            .map(function (res) { return res.json(); })
            //...errors if any
            .catch(function (error) {
            if (error.status == 401) {
                _this.authService.tokenExpired(_this.router.url);
            }
            //this.authService.tokenExpired(this.router.url);
            return rxjs_1.Observable.throw(error || 'Server error');
        });
    };
    TeacherService.ctorParameters = function () { return [
        { type: http_1.Http },
        { type: config_1.AppConfig },
        { type: auth_service_1.AuthService },
        { type: router_1.Router }
    ]; };
    TeacherService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, config_1.AppConfig, auth_service_1.AuthService, router_1.Router])
    ], TeacherService);
    return TeacherService;
}());
exports.TeacherService = TeacherService;


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
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
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ngx_bootstrap_1 = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
var angular2_qrcode_1 = __webpack_require__(/*! angular2-qrcode */ "./node_modules/angular2-qrcode/lib/angular2-qrcode.js");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var angular_2_local_storage_1 = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/fesm5/angular-2-local-storage.js");
var ng2_file_upload_1 = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
var config_1 = __webpack_require__(/*! ./config */ "./src/app/shared/config.ts");
exports.AppConfig = config_1.AppConfig;
var core_3 = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
var side_menu_component_1 = __webpack_require__(/*! ./components/side-menu/side-menu.component */ "./src/app/shared/components/side-menu/side-menu.component.ts");
var top_navigation_component_1 = __webpack_require__(/*! ./components/top-navigation/top-navigation.component */ "./src/app/shared/components/top-navigation/top-navigation.component.ts");
var footer_component_1 = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
var page_not_found_component_1 = __webpack_require__(/*! ./components/page-not-found.component */ "./src/app/shared/components/page-not-found.component.ts");
exports.PageNotFoundComponent = page_not_found_component_1.PageNotFoundComponent;
var edit_schedule_modal_component_1 = __webpack_require__(/*! ./components/edit-schedule-modal/edit-schedule-modal.component */ "./src/app/shared/components/edit-schedule-modal/edit-schedule-modal.component.ts");
exports.EditScheduleModalComponent = edit_schedule_modal_component_1.EditScheduleModalComponent;
var result_message_modal_component_1 = __webpack_require__(/*! ./components/result-message-modal/result-message-modal.component */ "./src/app/shared/components/result-message-modal/result-message-modal.component.ts");
exports.ResultMessageModalComponent = result_message_modal_component_1.ResultMessageModalComponent;
var import_modal_component_1 = __webpack_require__(/*! ./components/import-modal/import-modal.component */ "./src/app/shared/components/import-modal/import-modal.component.ts");
exports.ImportModalComponent = import_modal_component_1.ImportModalComponent;
var map_modal_component_1 = __webpack_require__(/*! ./components/map-modal/map-modal.component */ "./src/app/shared/components/map-modal/map-modal.component.ts");
exports.MapModalComponent = map_modal_component_1.MapModalComponent;
var export_modal_component_1 = __webpack_require__(/*! ./components/export-modal/export-modal.component */ "./src/app/shared/components/export-modal/export-modal.component.ts");
exports.ExportModalComponent = export_modal_component_1.ExportModalComponent;
var create_absence_request_modal_component_1 = __webpack_require__(/*! ./components/create-absence-request-modal/create-absence-request-modal.component */ "./src/app/shared/components/create-absence-request-modal/create-absence-request-modal.component.ts");
exports.CreateAbsenceRequestModalComponent = create_absence_request_modal_component_1.CreateAbsenceRequestModalComponent;
var send_feedback_modal_component_1 = __webpack_require__(/*! ./components/send-feedback-modal/send-feedback-modal.component */ "./src/app/shared/components/send-feedback-modal/send-feedback-modal.component.ts");
exports.SendFeedbackModalComponent = send_feedback_modal_component_1.SendFeedbackModalComponent;
var qr_code_component_1 = __webpack_require__(/*! ./components/qr-code.component */ "./src/app/shared/components/qr-code.component.ts");
exports.QRCodeComponent = qr_code_component_1.QRCodeComponent;
var quiz_display_component_1 = __webpack_require__(/*! ./components/quiz-display/quiz-display.component */ "./src/app/shared/components/quiz-display/quiz-display.component.ts");
exports.QuizDisplayComponent = quiz_display_component_1.QuizDisplayComponent;
var app_service_1 = __webpack_require__(/*! ./services/app.service */ "./src/app/shared/services/app.service.ts");
exports.AppService = app_service_1.AppService;
var courses_service_1 = __webpack_require__(/*! ./services/courses.service */ "./src/app/shared/services/courses.service.ts");
exports.CourseService = courses_service_1.CourseService;
var teachers_service_1 = __webpack_require__(/*! ./services/teachers.service */ "./src/app/shared/services/teachers.service.ts");
exports.TeacherService = teachers_service_1.TeacherService;
var attendance_service_1 = __webpack_require__(/*! ./services/attendance.service */ "./src/app/shared/services/attendance.service.ts");
exports.AttendanceService = attendance_service_1.AttendanceService;
var excel_service_1 = __webpack_require__(/*! ./services/excel.service */ "./src/app/shared/services/excel.service.ts");
exports.ExcelService = excel_service_1.ExcelService;
var schedule_service_1 = __webpack_require__(/*! ./services/schedule.service */ "./src/app/shared/services/schedule.service.ts");
exports.ScheduleService = schedule_service_1.ScheduleService;
var student_service_1 = __webpack_require__(/*! ./services/student.service */ "./src/app/shared/services/student.service.ts");
exports.StudentService = student_service_1.StudentService;
var absence_request_service_1 = __webpack_require__(/*! ./services/absence-request.service */ "./src/app/shared/services/absence-request.service.ts");
exports.AbsenceRequestService = absence_request_service_1.AbsenceRequestService;
var auth_guard_service_1 = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/shared/services/auth-guard.service.ts");
exports.AuthGuardService = auth_guard_service_1.AuthGuardService;
var auth_service_1 = __webpack_require__(/*! ./services/auth.service */ "./src/app/shared/services/auth.service.ts");
exports.AuthService = auth_service_1.AuthService;
var semester_service_1 = __webpack_require__(/*! ./services/semester.service */ "./src/app/shared/services/semester.service.ts");
exports.SemesterService = semester_service_1.SemesterService;
var feedback_service_1 = __webpack_require__(/*! ./services/feedback.service */ "./src/app/shared/services/feedback.service.ts");
exports.FeedbackService = feedback_service_1.FeedbackService;
var socket_service_1 = __webpack_require__(/*! ./services/socket.service */ "./src/app/shared/services/socket.service.ts");
exports.SocketService = socket_service_1.SocketService;
var check_attendance_service_1 = __webpack_require__(/*! ./services/check-attendance.service */ "./src/app/shared/services/check-attendance.service.ts");
exports.CheckAttendanceService = check_attendance_service_1.CheckAttendanceService;
var quiz_service_1 = __webpack_require__(/*! ./services/quiz.service */ "./src/app/shared/services/quiz.service.ts");
exports.QuizService = quiz_service_1.QuizService;
var classes_service_1 = __webpack_require__(/*! ./services/classes.service */ "./src/app/shared/services/classes.service.ts");
exports.ClassesService = classes_service_1.ClassesService;
var programs_service_1 = __webpack_require__(/*! ./services/programs.service */ "./src/app/shared/services/programs.service.ts");
exports.ProgramsService = programs_service_1.ProgramsService;
var notification_service_1 = __webpack_require__(/*! ./services/notification.service */ "./src/app/shared/services/notification.service.ts");
exports.NotificationService = notification_service_1.NotificationService;
var map_service_1 = __webpack_require__(/*! ./services/map.service */ "./src/app/shared/services/map.service.ts");
exports.MapService = map_service_1.MapService;
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                ngx_bootstrap_1.TabsModule,
                angular2_qrcode_1.QRCodeModule,
                angular_2_local_storage_1.LocalStorageModule.forRoot({
                    prefix: 'qldd',
                    storageType: 'localStorage'
                }),
                core_3.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyAaHGDoehkovVBMyKmJL1Q-7-4wZRYpqVg'
                }),
                ng2_file_upload_1.FileUploadModule,
                ngx_bootstrap_1.TooltipModule.forRoot(),
                core_2.TranslateModule
            ],
            declarations: [
                footer_component_1.FooterComponent,
                side_menu_component_1.SideMenuComponent,
                top_navigation_component_1.TopNavigationComponent,
                page_not_found_component_1.PageNotFoundComponent,
                edit_schedule_modal_component_1.EditScheduleModalComponent,
                result_message_modal_component_1.ResultMessageModalComponent,
                import_modal_component_1.ImportModalComponent,
                map_modal_component_1.MapModalComponent,
                create_absence_request_modal_component_1.CreateAbsenceRequestModalComponent,
                send_feedback_modal_component_1.SendFeedbackModalComponent,
                export_modal_component_1.ExportModalComponent,
                qr_code_component_1.QRCodeComponent,
                quiz_display_component_1.QuizDisplayComponent
            ],
            exports: [
                footer_component_1.FooterComponent,
                side_menu_component_1.SideMenuComponent,
                top_navigation_component_1.TopNavigationComponent,
                page_not_found_component_1.PageNotFoundComponent,
                edit_schedule_modal_component_1.EditScheduleModalComponent,
                result_message_modal_component_1.ResultMessageModalComponent,
                import_modal_component_1.ImportModalComponent,
                map_modal_component_1.MapModalComponent,
                create_absence_request_modal_component_1.CreateAbsenceRequestModalComponent,
                send_feedback_modal_component_1.SendFeedbackModalComponent,
                export_modal_component_1.ExportModalComponent,
                qr_code_component_1.QRCodeComponent,
                quiz_display_component_1.QuizDisplayComponent,
                core_2.TranslateModule
            ],
            providers: [
                app_service_1.AppService,
                courses_service_1.CourseService,
                teachers_service_1.TeacherService,
                attendance_service_1.AttendanceService,
                schedule_service_1.ScheduleService,
                student_service_1.StudentService,
                excel_service_1.ExcelService,
                absence_request_service_1.AbsenceRequestService,
                config_1.AppConfig,
                auth_guard_service_1.AuthGuardService,
                semester_service_1.SemesterService,
                feedback_service_1.FeedbackService,
                check_attendance_service_1.CheckAttendanceService,
                socket_service_1.SocketService,
                quiz_service_1.QuizService,
                classes_service_1.ClassesService,
                programs_service_1.ProgramsService,
                notification_service_1.NotificationService,
                map_service_1.MapService
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\KCPM\CaseStudy\1612369\1612369-attendant-checking\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map