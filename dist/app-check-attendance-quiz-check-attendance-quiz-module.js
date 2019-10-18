(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-check-attendance-quiz-check-attendance-quiz-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/check-attendance-quiz/check-attendance-quiz-student/check-attendance-quiz-student.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/check-attendance-quiz/check-attendance-quiz-student/check-attendance-quiz-student.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal fade\" id=\"quizModal\" role=\"dialog\">\r\n    <div class=\"vertical-alignment-helper\">\r\n        <div class=\"modal-dialog modal-lg vertical-align-center\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h2 *ngIf=\"!is_ended\" class=\"modal-title pull-right\">Question {{current_question_index + 1}} of {{quiz['questions']['length']}}</h2>\r\n                    <button *ngIf=\"is_ended\" class=\"modal-title pull-right btn btn-lg btn-primary\" (click)=\"onReturn()\">Return</button>\r\n                    <h2 class=\"modal-title\">{{quiz['title']}} - <ng-container *ngIf=\"quiz['type'] == appService.quiz_type.academic.id\">{{appService.quiz_type.academic.title}}</ng-container><ng-container *ngIf=\"quiz['type'] == appService.quiz_type.miscellaneous.id\">{{appService.quiz_type.miscellaneous.title}}</ng-container></h2>\r\n                </div>\r\n                <div class=\"modal-body container-fluid\">\r\n                    <div *ngIf=\"!is_started && !is_ended  && !is_ready\" class=\"row\">\r\n                        <div class=\"col-xs-12 text-center\">\r\n                            <h2>You joined the quiz. Wait for your teacher to start</h2>\r\n                        </div>\r\n                    </div>\r\n                    <div  *ngIf=\"is_started && !is_ended  && !is_ready\" class=\"container-fluid\">\r\n                        <ng-container *ngIf=\"!is_answered\">\r\n                            <div class=\"row\">\r\n                                <button class=\"col-xs-5 btn btn-primary\" (click)=\"onClickAnswer('A')\">\r\n                                    <h1>A.</h1>\r\n                                </button>\r\n                                <button class=\"col-xs-5 col-xs-offset-1 btn btn-primary\" (click)=\"onClickAnswer('B')\">\r\n                                    <h1>B.</h1>\r\n                                </button>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <button class=\"col-xs-5 btn btn-primary\" (click)=\"onClickAnswer('C')\">\r\n                                    <h1>C.</h1>\r\n                                </button>\r\n                                <button class=\"col-xs-5 col-xs-offset-1 btn btn-primary\" (click)=\"onClickAnswer('D')\">\r\n                                    <h1>D.</h1>\r\n                                </button>\r\n                            </div>\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"is_answered\">\r\n                            <div class=\"row\">\r\n                                <button disabled *ngIf=\"selected_option == 'a'\" class=\"col-xs-5 btn btn-success\"><h1>A</h1></button>\r\n                                <button disabled *ngIf=\"selected_option != 'a'\" class=\"col-xs-5 btn btn-primary\"><h1>A</h1></button>\r\n                                <button disabled *ngIf=\"selected_option == 'b'\" class=\"col-xs-5 col-xs-offset-1 btn btn-success\"><h1>B</h1></button>\r\n                                <button disabled *ngIf=\"selected_option != 'b'\" class=\"col-xs-5 col-xs-offset-1 btn btn-primary\"><h1>B</h1></button>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <button disabled *ngIf=\"selected_option == 'c'\" class=\"col-xs-5 btn btn-success\"><h1>C</h1></button>\r\n                                <button disabled *ngIf=\"selected_option != 'c'\" class=\"col-xs-5 btn btn-primary\"><h1>C</h1></button>\r\n                                <button disabled *ngIf=\"selected_option == 'd'\" class=\"col-xs-5 col-xs-offset-1 btn btn-success\"><h1>D</h1></button>\r\n                                <button disabled *ngIf=\"selected_option != 'd'\" class=\"col-xs-5 col-xs-offset-1 btn btn-primary\"><h1>D</h1></button>\r\n                            </div>\r\n                        </ng-container>\r\n                    </div>\r\n                    <div *ngIf=\"!is_started && !is_ended  && is_ready\" class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <div class=\"col-xs-8 col-xs-offset-2\">\r\n                                <h3>Ready for the next question</h3>\r\n                                <div class=\"progress\" style=\"\">\r\n                                    <div class=\"progress-bar progress-bar-success progress-bar-striped active\" role=\"progressbar\" [ngStyle]=\"{ 'width': ready_progress + '%' }\"></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"!is_started && is_ended  && !is_ready\" class=\"row\">\r\n                        <div class=\"row text-center\">\r\n                            <h2>You've finished the quiz</h2>\r\n                        </div>\r\n                        <div class=\"row text-center\">\r\n                            <h2>Result: {{correct_answers}} out of {{quiz['questions']['length']}}</h2>\r\n                        </div>\r\n                        <div *ngIf=\"no_answer\" class=\"row text-center red_text\">\r\n                            <h2>Your Attendance is not checked. You didn't answer any question.</h2>\r\n                        </div>\r\n                        <ng-container *ngIf=\"!no_answer\">\r\n                            <div *ngIf=\"quiz['type'] == appService.quiz_type.academic.id || correct_answers == quiz['questions']['length']\" class=\"row text-center green_text\">\r\n                                <h2>Your Attendance is checked</h2>\r\n                            </div>\r\n                            <div *ngIf=\"quiz['type'] == appService.quiz_type.academic.id && correct_answers < quiz.required_correct_answers\" class=\"row text-center red_text\">\r\n                                <h2>Your Attendance is not checked. This quiz requires you to have at least {{quiz.required_correct_answers}} correct answers</h2>\r\n                            </div>\r\n                            <div *ngIf=\"quiz['type'] == appService.quiz_type.miscellaneous.id && correct_answers != quiz['questions']['length']\" class=\"row text-center red_text\">\r\n                                <h2>Your Attendance is not checked. Miscellaneous quiz requires you to be 100% correct to be checked</h2>\r\n                            </div>\r\n                        </ng-container>\r\n                        <div class=\"container-fluid\">\r\n                            <ng-container *ngFor=\"let question of this.quiz.questions\">\r\n                                <div class=\"row\">\r\n                                    <div>\r\n                                        <h4 style=\"white-space: pre-wrap\"><label class=\"underline\">Q:</label>{{question.text}}</h4>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div><h4 [ngClass]=\"{'green_text': question['answers'] == 'a'}\">A. {{question.option_a}} <i *ngIf=\"question['option_a'] != question['correct_option']\" class=\"fa fa-times red\"></i><i *ngIf=\"question['option_a'] == question['correct_option']\" class=\"fa fa-check green\"></i></h4></div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div><h4 [ngClass]=\"{'green_text': question['answers'] == 'b'}\">B. {{question.option_b}} <i *ngIf=\"question['option_b'] != question['correct_option']\" class=\"fa fa-times red\"></i><i *ngIf=\"question['option_b'] == question['correct_option']\" class=\"fa fa-check green\"></i></h4></div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div><h4 [ngClass]=\"{'green_text': question['answers'] == 'c'}\">C. {{question.option_c}} <i *ngIf=\"question['option_c'] != question['correct_option']\" class=\"fa fa-times red\"></i><i *ngIf=\"question['option_c'] == question['correct_option']\" class=\"fa fa-check green\"></i></h4></div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div><h4 [ngClass]=\"{'green_text': question['answers'] == 'd'}\">D. {{question.option_d}} <i *ngIf=\"question['option_d'] != question['correct_option']\" class=\"fa fa-times red\"></i><i *ngIf=\"question['option_d'] == question['correct_option']\" class=\"fa fa-check green\"></i></h4></div>\r\n                                </div>\r\n                                <hr/>\r\n                            </ng-container>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"quizStoppedModal\" role=\"dialog\">\r\n    <div class=\"vertical-alignment-helper\">\r\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title\">{{stopped_modal_message}}</h4>\r\n                </div>\r\n                <div class=\"modal-footer text-center\">\r\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"router.navigate(['/dashboard'])\">Close</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"enterQuizCodeModal\" role=\"dialog\">\r\n    <div class=\"vertical-alignment-helper\">\r\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\" (keydown)=\"keyDownFunction($event)\">\r\n                <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title\">Enter Quiz Code</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"quiz_code\">\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"cancelCheckQuizCode()\">Cancel</button>\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"checkQuizCode()\">Submit</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/check-attendance-quiz/check-attendance-quiz-teacher/check-attendance-quiz-teacher.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/check-attendance-quiz/check-attendance-quiz-teacher/check-attendance-quiz-teacher.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"x_panel\">\r\n        <div class=\"x_title\">\r\n            <h3>Check Attendance Quiz ({{selected_attendance['course_name']}}-{{selected_attendance['class_name']}})</h3>\r\n            <div class=\"clearfix\"></div>\r\n        </div>\r\n        <div class=\"x_content\">\r\n            <div class=\"col-xs-12 form-horizontal\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label col-sm-1 col-xs-6\">Quiz type: </label>\r\n                    <div class=\"col-sm-3 col-xs-6\">\r\n                        <select class=\"form-control\" name=\"selected_quiz_type\" [(ngModel)]=\"selected_quiz_type\" (ngModelChange)=\"onChangeQuizType()\">\r\n                            <option *ngFor=\"let quiz_type of quiz_types\" [value]=\"quiz_type.id\">{{quiz_type.title}}</option>\r\n                        </select>\r\n                    </div>\r\n                    <ng-container *ngIf=\"selected_quiz_type == appService.quiz_type.academic.id\">\r\n                        <label class=\"control-label col-sm-2 col-xs-6\">Quiz template: </label>\r\n                        <div class=\"col-sm-3 col-xs-6\">\r\n                            <select class=\"form-control\" name=\"selected_quiz\" [(ngModel)]=\"selected_quiz\" (ngModelChange)=\"onChangeQuiz()\">\r\n                                <option *ngFor=\"let quiz of quizzes\" [value]=\"quiz.id\">{{quiz.title}}</option>\r\n                            </select>\r\n                        </div>\r\n                        <ng-container *ngIf=\"selected_quiz != 0\">\r\n                            <div class=\"col-sm-3 col-xs-6\">\r\n                                <div class=\"checkbox\">\r\n                                    <label>\r\n                                        <input type=\"checkbox\" name=\"is_edit_quiz\" [(ngModel)]=\"is_edit_quiz\"> Edit quiz?\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"selected_quiz_type == appService.quiz_type.miscellaneous.id\">\r\n                        <div class=\"col-sm-1 col-xs-6\">\r\n                            <ng-template #tolTemplate>\r\n                                <div>Miscellaneous Quiz requires students to have 100% correct answers for their attendance to be checked</div>\r\n                            </ng-template>\r\n                            <i class=\"fa fa-question-circle fa-2x\" [tooltip]=\"tolTemplate\" container=\"body\"></i>\r\n                        </div>\r\n                        <label class=\"control-label col-sm-2 col-xs-4\">No. questions: </label>\r\n                        <div class=\"col-sm-2 col-xs-4\">\r\n                            <input class=\"form-control\" name=\"number_questions\" [(ngModel)]=\"number_misc_question\">\r\n                        </div>\r\n                        <div class=\"col-sm-3 col-xs-4\">\r\n                            <button class=\"btn btn-primary btn-round\" (click)=\"generateMiscQuestion()\">Generate questions</button>\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"col-xs-12 col-sm-6\">\r\n                        <textarea autosize class=\"form-control only_bottom_border\" placeholder=\"Quiz title\" [(ngModel)]=\"quiz.title\" style=\"font-size: large; resize: none;\"></textarea>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-6\">\r\n                        <div class=\"form-horizontal\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-1 col-xs-offset-2\">\r\n                                        <div class=\"checkbox\">\r\n                                            <label>\r\n                                                <input type=\"checkbox\" name=\"is_randomize_questions\" [(ngModel)]=\"quiz.is_randomize_questions\">\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-xs-8\">\r\n                                        <h4>Randomimze order of questions</h4>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-1 col-xs-offset-2\">\r\n                                        <div class=\"checkbox\">\r\n                                            <label>\r\n                                                <input type=\"checkbox\" name=\"is_randomize_answers\" [(ngModel)]=\"quiz.is_randomize_answers\">\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-xs-8\">\r\n                                        <h4>Randomize order of answers</h4>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\" *ngIf=\"selected_quiz_type == appService.quiz_type.academic.id\">\r\n                                    <div class=\"col-xs-2 col-xs-offset-1\">\r\n                                        <input class=\"form-control\" type=\"text\" name=\"required_correct_answers\" [(ngModel)]=\"quiz.required_correct_answers\">\r\n                                    </div>\r\n                                    <div class=\"col-xs-8\">\r\n                                        <h4>No. required correct answers</h4>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div>\r\n                    <ng-container *ngIf=\"selected_quiz_type == appService.quiz_type.miscellaneous.id || is_edit_quiz\">\r\n                        <div *ngFor=\"let question of quiz.questions; let i = index;\">\r\n                            <form class=\"form-group well\">\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-sm-6 col-xs-12\">\r\n                                        <textarea autosize rows=\"2\" class=\"form-control only_bottom_border\" name=\"question_title_{{i}}\" placeholder=\"Question\" [(ngModel)]=\"question.text\" style=\"resize: none;\" (keydown)=\"onTabInTextarea($event)\"></textarea>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-xs-6\">\r\n                                        <label class=\"control-label col-sm-3\">Timer: </label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <select class=\"form-control\" [(ngModel)]=\"question.timer\" name=\"question_timer_{{i}}\">\r\n                                                <option *ngFor=\"let timer of appService.timers\" [value]=\"timer.value\">{{timer.text}}</option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-1\" *ngIf=\"quiz.questions.length > 1\">\r\n                                        <button class=\"btn btn-danger\" (click)=\"onRemoveQuestion(i)\"><i class=\"fa fa-times\"></i></button>\r\n                                    </div>\r\n                                    <div class=\"col-sm-1\" *ngIf=\"i == quiz.questions.length-1\">\r\n                                        <button class=\"btn btn-primary\" (click)=\"onAddQuestion()\"><i class=\"fa fa-plus\"></i></button>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-sm-4 col-sm-offset-1\">\r\n                                        <input class=\"form-control\" name=\"question_{{i}}_option_a\" placeholder=\"Option A\" [(ngModel)]=\"question.option_a\">\r\n                                    </div>\r\n                                    <div class=\"col-sm-1 radio\">\r\n                                        <label>\r\n                                            <input type=\"radio\" name=\"optradio\" [value]=\"question.option_a\" [(ngModel)]=\"question.correct_option\">\r\n                                            <p class=\"green_text\" *ngIf=\"question.option_a == question.correct_option\">Correct</p>\r\n                                        </label>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-sm-offset-1\">\r\n                                        <input class=\"form-control\" name=\"question_{{i}}_option_b\" placeholder=\"Option B\" [(ngModel)]=\"question.option_b\">\r\n                                    </div>\r\n                                    <div class=\"col-sm-1 radio\">\r\n                                        <label>\r\n                                            <input type=\"radio\" name=\"optradio\" [value]=\"question.option_b\" [(ngModel)]=\"question.correct_option\">\r\n                                            <p class=\"green_text\" *ngIf=\"question.option_b == question.correct_option\">Correct</p>\r\n                                        </label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-sm-4 col-sm-offset-1\">\r\n                                        <input class=\"form-control\" name=\"question_{{i}}_option_c\" placeholder=\"Option C\" [(ngModel)]=\"question.option_c\">\r\n                                    </div>\r\n                                    <div class=\"col-sm-1 radio\">\r\n                                        <label>\r\n                                            <input type=\"radio\" name=\"optradio\" [value]=\"question.option_c\" [(ngModel)]=\"question.correct_option\">\r\n                                            <p class=\"green_text\" *ngIf=\"question.option_c == question.correct_option\">Correct</p>\r\n                                        </label>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-sm-offset-1\">\r\n                                        <input class=\"form-control\" name=\"question_{{i}}_option_d\" placeholder=\"Option D\" [(ngModel)]=\"question.option_d\">\r\n                                    </div>\r\n                                    <div class=\"col-sm-1 radio\">\r\n                                        <label>\r\n                                            <input type=\"radio\" name=\"optradio\" [value]=\"question.option_d\" [(ngModel)]=\"question.correct_option\">\r\n                                            <p class=\"green_text\" *ngIf=\"question.option_d == question.correct_option\">Correct</p>\r\n                                        </label>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"text-center\">\r\n                        <button class=\"btn btn-default\" (click)=\"onBack()\">Back</button>\r\n                        <button class=\"btn btn-success\" (click)=\"onPublishQuiz()\">Publish</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/check-attendance-quiz/check-attendance-quiz.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/check-attendance-quiz/check-attendance-quiz.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<check-attendance-quiz-teacher *ngIf=\"authService.current_user.role_id == appService.userType.teacher\"></check-attendance-quiz-teacher>\r\n<check-attendance-quiz-student *ngIf=\"authService.current_user.role_id == appService.userType.student\"></check-attendance-quiz-student>\r\n");

/***/ }),

/***/ "./src/app/check-attendance-quiz/check-attendance-quiz-student/check-attendance-quiz-student.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/check-attendance-quiz/check-attendance-quiz-student/check-attendance-quiz-student.component.ts ***!
  \****************************************************************************************************************/
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
var CheckAttendanceQuizStudentComponent = /** @class */ (function () {
    function CheckAttendanceQuizStudentComponent(quizService, checkAttendanceService, appConfig, socketService, authService, attendanceService, localStorage, appService, router) {
        this.quizService = quizService;
        this.checkAttendanceService = checkAttendanceService;
        this.appConfig = appConfig;
        this.socketService = socketService;
        this.authService = authService;
        this.attendanceService = attendanceService;
        this.localStorage = localStorage;
        this.appService = appService;
        this.router = router;
        this.quiz_code_checked = false;
        this.quiz_code = '';
        this.quiz_id = 0;
        this.quiz = {
            questions: []
        };
        this.is_started = false;
        this.is_ready = false;
        this.is_ended = false;
        this.is_answered = false;
        this.current_question_index = 0;
        this.ready = 0;
        this.ready_progress = 0;
        this.ready_time = 5;
        this.correct_answers = 0;
        this.no_answer = false;
    }
    CheckAttendanceQuizStudentComponent.prototype.onWindowUnload = function (event) {
        if (!this.is_ended)
            this.socketService.emitEventOnQuittedQuiz({ 'quiz_code': this.quiz_code, 'student_id': this.authService.current_user.id });
    };
    CheckAttendanceQuizStudentComponent.prototype.onWindowBeforeUnload = function (event) {
        return false;
    };
    CheckAttendanceQuizStudentComponent.prototype.ngOnInit = function () {
        jQuery('#enterQuizCodeModal').modal({ backdrop: 'static', keyboard: false });
    };
    CheckAttendanceQuizStudentComponent.prototype.ngOnDestroy = function () {
        if (!this.is_ended)
            this.socketService.emitEventOnQuittedQuiz({ 'quiz_code': this.quiz_code, 'student_id': this.authService.current_user.id });
        this.closeSocket();
    };
    CheckAttendanceQuizStudentComponent.prototype.cancelCheckQuizCode = function () {
        jQuery("#enterQuizCodeModal").modal("hide");
        this.router.navigate(['/dashboard']);
    };
    CheckAttendanceQuizStudentComponent.prototype.keyDownFunction = function (event) {
        if (event.keyCode == 13) {
            this.checkQuizCode();
        }
    };
    CheckAttendanceQuizStudentComponent.prototype.checkQuizCode = function () {
        var _this = this;
        this.quizService.joinQuiz(this.quiz_code).subscribe(function (result) {
            _this.apiResult = result.result;
            _this.apiResultMessage = result.message;
            if (_this.apiResult == 'success') {
                _this.quiz_code_checked = true;
                jQuery("#enterQuizCodeModal").modal("hide");
                setTimeout(function () {
                    jQuery("#quizModal").modal({ backdrop: 'static', keyboard: false });
                }, 1000);
                _this.getQuizDetail();
                _this.socketService.consumeEventOnQuizStopped();
                _this.socketService.invokeQuizStopped.subscribe(function (result) {
                    if (_this.quiz_code == result['quiz_code']) {
                        _this.closeSocket();
                        jQuery("#quizModal").modal('hide');
                        _this.stopped_modal_message = "Quiz is stopped";
                        jQuery('#quizStoppedModal').modal({ backdrop: 'static', keyboard: false });
                    }
                });
                _this.socketService.consumeEventOnQuizEnded();
                _this.socketService.invokeQuizEnded.subscribe(function (result) {
                    if (_this.quiz_code == result['quiz_code']) {
                        _this.is_ended = true;
                        _this.is_started = false;
                        _this.is_ready = false;
                    }
                });
                _this.socketService.consumeEventOnQuizQuestionReady();
                _this.socketService.invokeQuizQuestionReady.subscribe(function (result) {
                    if (_this.quiz_code == result['quiz_code']) {
                        _this.ready = 0;
                        _this.ready_progress = 0;
                        _this.is_ready = true;
                        _this.is_started = false;
                        _this.interval = setInterval(function () {
                            _this.ready++;
                            if (_this.ready > _this.ready_time) {
                                clearInterval(_this.interval);
                                _this.ready = 0;
                                _this.ready_progress = 0;
                            }
                            else {
                                _this.ready_progress = _this.ready * 20;
                            }
                        }, 1000);
                    }
                });
                _this.socketService.consumeEventOnQuizQuestionLoaded();
                _this.socketService.invokeQuizQuestionLoaded.subscribe(function (result) {
                    console.log(result['quiz_code'] + '==' + _this.quiz_code);
                    if (_this.quiz_code == result['quiz_code']) {
                        _this.is_answered = false;
                        _this.is_started = true;
                        _this.is_ready = false;
                        _this.current_question_index = result['question_index'];
                    }
                });
                _this.socketService.consumeEventOnQuizQuestionEnded();
                _this.socketService.invokeQuizQuestionEnded.subscribe(function (result) {
                    if (_this.quiz_code == result['quiz_code']) {
                        _this.is_started = false;
                        _this.is_ready = true;
                        _this.correct_answers = 0;
                        var check_no_answer = 0;
                        for (var i = 0; i < _this.quiz['questions']['length']; i++) {
                            if (_this.quiz['questions'][i]['answers'] == 0) {
                                check_no_answer++;
                            }
                            else {
                                var selected_answers = _this.quiz['questions'][i]['option_' + _this.quiz['questions'][i]['answers']];
                                if (_this.quiz['questions'][i]['correct_option'] == selected_answers) {
                                    _this.correct_answers++;
                                }
                            }
                        }
                        if (check_no_answer == _this.quiz['questions']['length']) {
                            _this.no_answer = true;
                        }
                    }
                });
            }
            else {
                _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, 'error');
            }
        }, function (error) {
            _this.appService.showPNotify('failure', "Server Error! Can't check quiz code", 'error');
        });
    };
    CheckAttendanceQuizStudentComponent.prototype.onReturn = function () {
        jQuery("#quizModal").modal('hide');
        this.router.navigate(['/dashboard']);
    };
    CheckAttendanceQuizStudentComponent.prototype.onClickAnswer = function (option) {
        this.selected_option = option.toLowerCase();
        this.is_answered = true;
        this.socketService.emitEventOnAnsweredQuiz({
            'quiz_code': this.quiz_code,
            'question_index': this.current_question_index,
            'option': option.toLowerCase(),
            'student_id': this.authService.current_user.id,
        });
        this.quiz['questions'][this.current_question_index]['answers'] = option.toLowerCase();
    };
    CheckAttendanceQuizStudentComponent.prototype.closeSocket = function () {
        this.socketService.stopEventOnQuizStopped();
        this.socketService.stopEventOnQuizEnded();
        this.socketService.stopEventOnQuizQuestionEnded();
        this.socketService.stopEventOnQuizQuestionLoaded();
        this.socketService.stopEventOnQuizQuestionReady();
    };
    CheckAttendanceQuizStudentComponent.prototype.getQuizDetail = function () {
        var _this = this;
        this.quizService.getPublishedQuiz(this.quiz_code).subscribe(function (result) {
            _this.apiResult = result.result;
            _this.apiResultMessage = result.message;
            if (_this.apiResult == 'success') {
                _this.quiz = result.quiz;
                for (var i = 0; i < _this.quiz['questions'].length; i++) {
                    _this.quiz['questions'][i]['answers'] = 0;
                }
            }
            else {
                _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, 'error');
            }
        }, function (error) {
            _this.appService.showPNotify('failure', "Server Error! Can't get quiz detail", 'error');
        });
    };
    CheckAttendanceQuizStudentComponent.ctorParameters = function () { return [
        { type: shared_module_1.QuizService },
        { type: shared_module_1.CheckAttendanceService },
        { type: shared_module_1.AppConfig },
        { type: shared_module_1.SocketService },
        { type: shared_module_1.AuthService },
        { type: shared_module_1.AttendanceService },
        { type: angular_2_local_storage_1.LocalStorageService },
        { type: shared_module_1.AppService },
        { type: router_1.Router }
    ]; };
    __decorate([
        core_1.HostListener('window:unload', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], CheckAttendanceQuizStudentComponent.prototype, "onWindowUnload", null);
    __decorate([
        core_1.HostListener('window:beforeunload', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], CheckAttendanceQuizStudentComponent.prototype, "onWindowBeforeUnload", null);
    CheckAttendanceQuizStudentComponent = __decorate([
        core_1.Component({
            selector: 'check-attendance-quiz-student',
            template: __importDefault(__webpack_require__(/*! raw-loader!./check-attendance-quiz-student.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/check-attendance-quiz/check-attendance-quiz-student/check-attendance-quiz-student.component.html")).default
        }),
        __metadata("design:paramtypes", [shared_module_1.QuizService, shared_module_1.CheckAttendanceService,
            shared_module_1.AppConfig, shared_module_1.SocketService, shared_module_1.AuthService,
            shared_module_1.AttendanceService, angular_2_local_storage_1.LocalStorageService, shared_module_1.AppService,
            router_1.Router])
    ], CheckAttendanceQuizStudentComponent);
    return CheckAttendanceQuizStudentComponent;
}());
exports.CheckAttendanceQuizStudentComponent = CheckAttendanceQuizStudentComponent;


/***/ }),

/***/ "./src/app/check-attendance-quiz/check-attendance-quiz-teacher/check-attendance-quiz-teacher.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/check-attendance-quiz/check-attendance-quiz-teacher/check-attendance-quiz-teacher.component.ts ***!
  \****************************************************************************************************************/
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
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var shared_module_1 = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var angular_2_local_storage_1 = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/fesm5/angular-2-local-storage.js");
var CheckAttendanceQuizTeacherComponent = /** @class */ (function () {
    function CheckAttendanceQuizTeacherComponent(quizService, location, checkAttendanceService, appConfig, socketService, authService, attendanceService, localStorage, appService, router) {
        var _this = this;
        this.quizService = quizService;
        this.location = location;
        this.checkAttendanceService = checkAttendanceService;
        this.appConfig = appConfig;
        this.socketService = socketService;
        this.authService = authService;
        this.attendanceService = attendanceService;
        this.localStorage = localStorage;
        this.appService = appService;
        this.router = router;
        this.is_edit_quiz = false;
        this.is_published = false;
        this.selected_attendance = {};
        this.quizzes = [];
        this.quiz_types = [];
        this.selected_quiz = 0;
        this.selected_quiz_type = 1;
        this.quiz = {
            id: 0,
            code: '',
            is_randomize_questions: true,
            is_randomize_answers: true,
            required_correct_answers: 0,
            type: this.appService.quiz_type.miscellaneous.id,
            title: 'Attendance Quiz',
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
        this.number_misc_question = 3;
        socketService.consumeEventOnCheckAttendanceStopped();
        socketService.invokeCheckAttendanceStopped.subscribe(function (result) {
            if (_this.selected_attendance['course_id'] == result['course_id'] && _this.selected_attendance['class_id'] == result['class_id']) {
                _this.appService.showPNotify('Info', "Attendance session is " + result['message'], 'info');
                _this.router.navigate(['/dashboard']);
            }
        });
    }
    CheckAttendanceQuizTeacherComponent.prototype.ngOnDestroy = function () {
        // this.socketService.stopEventOnQuizAnswered();
        // this.socketService.stopEventOnQuizStopped();
        this.socketService.stopEventOnCheckAttendanceStopped();
    };
    CheckAttendanceQuizTeacherComponent.prototype.ngOnInit = function () {
        if (!this.localStorage.get('selected_attendance')) {
            this.router.navigate(['/dashboard']);
        }
        else {
            this.selected_attendance = this.localStorage.get('selected_attendance');
            this.quiz_types.push(this.appService.quiz_type.miscellaneous);
            this.quiz_types.push(this.appService.quiz_type.academic);
            this.generateMiscQuestion();
        }
    };
    CheckAttendanceQuizTeacherComponent.prototype.onAddQuestion = function () {
        this.quiz.questions.push({
            text: '',
            option_a: '',
            option_b: '',
            option_c: '',
            option_d: '',
            correct_option: null,
            timer: 10,
            answers: []
        });
    };
    CheckAttendanceQuizTeacherComponent.prototype.onRemoveQuestion = function (index) {
        for (var i = index; i < this.quiz.questions.length - 1; i++) {
            this.quiz.questions[i].text = this.quiz.questions[i + 1].text;
            this.quiz.questions[i].option_a = this.quiz.questions[i + 1].option_a;
            this.quiz.questions[i].option_b = this.quiz.questions[i + 1].option_b;
            this.quiz.questions[i].option_c = this.quiz.questions[i + 1].option_c;
            this.quiz.questions[i].option_d = this.quiz.questions[i + 1].option_d;
            this.quiz.questions[i].correct_option = this.quiz.questions[i + 1].correct_option;
            this.quiz.questions[i].timer = this.quiz.questions[i + 1].timer;
        }
        this.quiz.questions.pop();
    };
    CheckAttendanceQuizTeacherComponent.prototype.onPublishQuiz = function () {
        var _this = this;
        var w = window.open(this.appConfig.host + '/quiz/display', '_blank', 'height=720,width=1024,scrollbars=yes,status=0,toolbar=0,menubar=0,location=0');
        this.localStorage.remove('quiz_code');
        this.localStorage.remove('get_published_quiz_error');
        this.quizService.publishQuiz(this.selected_attendance['course_id'], this.selected_attendance['class_id'], this.quiz).subscribe(function (result) {
            _this.apiResult = result.result;
            _this.apiResultMessage = result.message;
            if (_this.apiResult == 'failure') {
                _this.localStorage.set('get_published_quiz_error', _this.apiResultMessage);
                w.location.href = _this.appConfig.host + '/quiz/display';
                _this.appService.showPNotify('failure', _this.apiResultMessage, 'error');
            }
            if (result.result == 'success') {
                _this.localStorage.set('token', _this.authService.token);
                _this.localStorage.set('quiz_code', result.quiz_code);
                w.location.href = _this.appConfig.host + '/quiz/display';
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't publish quiz", 'error'); });
    };
    CheckAttendanceQuizTeacherComponent.prototype.onBack = function () {
        this.location.back();
    };
    CheckAttendanceQuizTeacherComponent.prototype.onChangeQuiz = function () {
        for (var i = 0; i < this.quizzes.length; i++) {
            if (this.selected_quiz == this.quizzes[i].id) {
                this.is_edit_quiz = (this.quizzes[i].id == 0);
                this.quiz.questions = [];
                this.quiz.id = this.quizzes[i].id;
                this.quiz.title = this.quizzes[i].title;
                this.quiz.code = this.quizzes[i].code;
                this.quiz.required_correct_answers = this.quizzes[i].required_correct_answers;
                for (var j = 0; j < this.quizzes[i].questions.length; j++) {
                    this.quiz.questions.push({
                        text: this.quizzes[i].questions[j].text,
                        option_a: this.quizzes[i].questions[j].option_a,
                        option_b: this.quizzes[i].questions[j].option_b,
                        option_c: this.quizzes[i].questions[j].option_c,
                        option_d: this.quizzes[i].questions[j].option_d,
                        correct_option: this.quizzes[i].questions[j].correct_option,
                        timer: this.quizzes[i].questions[j].timer,
                        answers: []
                    });
                }
                return;
            }
        }
    };
    CheckAttendanceQuizTeacherComponent.prototype.onChangeQuizType = function () {
        if (this.selected_quiz_type == this.appService.quiz_type.academic.id) {
            this.getQuizList();
        }
        else {
            this.generateMiscQuestion();
        }
        this.quiz.type = this.selected_quiz_type;
    };
    CheckAttendanceQuizTeacherComponent.prototype.getQuizList = function () {
        var _this = this;
        this.quizService.getQuizByCourseAndClass(this.selected_attendance['course_id'], this.selected_attendance['class_id']).subscribe(function (result) {
            _this.apiResult = result.result;
            _this.apiResultMessage = result.message;
            if (_this.apiResult == 'failure') {
                _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, 'error');
            }
            else {
                _this.quizzes = [];
                for (var i = 0; i < result.quiz_list.length; i++) {
                    if (result.quiz_list[i].is_template) {
                        _this.quizzes.push(result.quiz_list[i]);
                    }
                }
                _this.quizzes.unshift({
                    id: 0,
                    code: result.quiz_code,
                    is_randomize_questions: true,
                    is_randomize_answers: true,
                    required_correct_answers: 0,
                    type: 0,
                    title: 'New quiz',
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
                });
                _this.selected_quiz = _this.quizzes[0].id;
                _this.onChangeQuiz();
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get quiz list", 'error'); });
    };
    CheckAttendanceQuizTeacherComponent.prototype.generateMiscQuestion = function () {
        var _this = this;
        if (this.number_misc_question <= 0) {
            this.appService.showPNotify('failure', 'Number of questions must be greater than 0', 'error');
        }
        else {
            this.quizService.getMiscQuestion(this.number_misc_question).subscribe(function (result) {
                if (result.result == 'success') {
                    _this.quiz.questions = result.questions;
                }
                else {
                    _this.appService.showPNotify('failure', result.message, 'error');
                }
            }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get miscellaneous questions", 'error'); });
        }
    };
    CheckAttendanceQuizTeacherComponent.ctorParameters = function () { return [
        { type: shared_module_1.QuizService },
        { type: common_1.Location },
        { type: shared_module_1.CheckAttendanceService },
        { type: shared_module_1.AppConfig },
        { type: shared_module_1.SocketService },
        { type: shared_module_1.AuthService },
        { type: shared_module_1.AttendanceService },
        { type: angular_2_local_storage_1.LocalStorageService },
        { type: shared_module_1.AppService },
        { type: router_1.Router }
    ]; };
    CheckAttendanceQuizTeacherComponent = __decorate([
        core_1.Component({
            selector: 'check-attendance-quiz-teacher',
            template: __importDefault(__webpack_require__(/*! raw-loader!./check-attendance-quiz-teacher.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/check-attendance-quiz/check-attendance-quiz-teacher/check-attendance-quiz-teacher.component.html")).default
        }),
        __metadata("design:paramtypes", [shared_module_1.QuizService, common_1.Location, shared_module_1.CheckAttendanceService,
            shared_module_1.AppConfig, shared_module_1.SocketService,
            shared_module_1.AuthService, shared_module_1.AttendanceService, angular_2_local_storage_1.LocalStorageService, shared_module_1.AppService, router_1.Router])
    ], CheckAttendanceQuizTeacherComponent);
    return CheckAttendanceQuizTeacherComponent;
}());
exports.CheckAttendanceQuizTeacherComponent = CheckAttendanceQuizTeacherComponent;


/***/ }),

/***/ "./src/app/check-attendance-quiz/check-attendance-quiz.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/check-attendance-quiz/check-attendance-quiz.component.ts ***!
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
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var shared_module_1 = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var angular_2_local_storage_1 = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/fesm5/angular-2-local-storage.js");
var CheckAttendanceQuizComponent = /** @class */ (function () {
    function CheckAttendanceQuizComponent(checkAttendanceService, appConfig, authService, attendanceService, localStorage, appService, router) {
        this.checkAttendanceService = checkAttendanceService;
        this.appConfig = appConfig;
        this.authService = authService;
        this.attendanceService = attendanceService;
        this.localStorage = localStorage;
        this.appService = appService;
        this.router = router;
    }
    CheckAttendanceQuizComponent.prototype.ngOnInit = function () {
    };
    CheckAttendanceQuizComponent.ctorParameters = function () { return [
        { type: shared_module_1.CheckAttendanceService },
        { type: shared_module_1.AppConfig },
        { type: shared_module_1.AuthService },
        { type: shared_module_1.AttendanceService },
        { type: angular_2_local_storage_1.LocalStorageService },
        { type: shared_module_1.AppService },
        { type: router_1.Router }
    ]; };
    CheckAttendanceQuizComponent = __decorate([
        core_1.Component({
            selector: 'app-check-attendance-quiz',
            template: __importDefault(__webpack_require__(/*! raw-loader!./check-attendance-quiz.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/check-attendance-quiz/check-attendance-quiz.component.html")).default
        }),
        __metadata("design:paramtypes", [shared_module_1.CheckAttendanceService, shared_module_1.AppConfig,
            shared_module_1.AuthService, shared_module_1.AttendanceService, angular_2_local_storage_1.LocalStorageService, shared_module_1.AppService, router_1.Router])
    ], CheckAttendanceQuizComponent);
    return CheckAttendanceQuizComponent;
}());
exports.CheckAttendanceQuizComponent = CheckAttendanceQuizComponent;


/***/ }),

/***/ "./src/app/check-attendance-quiz/check-attendance-quiz.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/check-attendance-quiz/check-attendance-quiz.module.ts ***!
  \***********************************************************************/
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
var angular2_text_mask_1 = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
var ngx_bootstrap_1 = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
var check_attendance_quiz_component_1 = __webpack_require__(/*! ./check-attendance-quiz.component */ "./src/app/check-attendance-quiz/check-attendance-quiz.component.ts");
var check_attendance_quiz_teacher_component_1 = __webpack_require__(/*! ./check-attendance-quiz-teacher/check-attendance-quiz-teacher.component */ "./src/app/check-attendance-quiz/check-attendance-quiz-teacher/check-attendance-quiz-teacher.component.ts");
var check_attendance_quiz_student_component_1 = __webpack_require__(/*! ./check-attendance-quiz-student/check-attendance-quiz-student.component */ "./src/app/check-attendance-quiz/check-attendance-quiz-student/check-attendance-quiz-student.component.ts");
var ngx_bootstrap_2 = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
var pagination_1 = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
var tabs_1 = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
var shared_module_1 = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var autosize_module_1 = __webpack_require__(/*! ../shared/module/autosize/autosize.module */ "./src/app/shared/module/autosize/autosize.module.ts");
var Routes = [
    { path: '', component: check_attendance_quiz_component_1.CheckAttendanceQuizComponent },
];
var CheckAttendanceQuizModule = /** @class */ (function () {
    function CheckAttendanceQuizModule() {
    }
    CheckAttendanceQuizModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(Routes),
                ngx_bootstrap_1.CollapseModule.forRoot(),
                ngx_bootstrap_2.TooltipModule.forRoot(),
                pagination_1.PaginationModule.forRoot(),
                tabs_1.TabsModule.forRoot(),
                shared_module_1.SharedModule,
                angular2_text_mask_1.TextMaskModule,
                autosize_module_1.AutosizeModule
            ],
            declarations: [
                check_attendance_quiz_component_1.CheckAttendanceQuizComponent,
                check_attendance_quiz_student_component_1.CheckAttendanceQuizStudentComponent,
                check_attendance_quiz_teacher_component_1.CheckAttendanceQuizTeacherComponent,
            ],
            providers: []
        })
    ], CheckAttendanceQuizModule);
    return CheckAttendanceQuizModule;
}());
exports.CheckAttendanceQuizModule = CheckAttendanceQuizModule;


/***/ })

}]);
//# sourceMappingURL=app-check-attendance-quiz-check-attendance-quiz-module.js.map