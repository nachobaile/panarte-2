webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"User\"></div>\n<app-nav-bar></app-nav-bar>\n<!-- <app-home></app-home> -->\n<app-login-form></app-login-form>\n<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("./src/services/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(session) {
        this.session = session;
        this.title = 'EMPAN-ARTE';
        this.user = this.session.getUser();
        this.session.getUserEvent();
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__("./src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_form_login_form_component__ = __webpack_require__("./src/app/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_session_service__ = __webpack_require__("./src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_product_service__ = __webpack_require__("./src/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nav_bar_nav_bar_component__ = __webpack_require__("./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__products_products_component__ = __webpack_require__("./src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__panes_panes_component__ = __webpack_require__("./src/app/panes/panes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__filter_pipe__ = __webpack_require__("./src/app/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__patty_patty_component__ = __webpack_require__("./src/app/patty/patty.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__cakes_cakes_component__ = __webpack_require__("./src/app/cakes/cakes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__cart_cart_component__ = __webpack_require__("./src/app/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_cart_service__ = __webpack_require__("./src/services/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_form_login_form_component__["a" /* LoginFormComponent */],
                __WEBPACK_IMPORTED_MODULE_9__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__panes_panes_component__["a" /* PanesComponent */],
                __WEBPACK_IMPORTED_MODULE_14__filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_15__patty_patty_component__["a" /* PattyComponent */],
                __WEBPACK_IMPORTED_MODULE_16__cakes_cakes_component__["a" /* CakesComponent */],
                __WEBPACK_IMPORTED_MODULE_17__cart_cart_component__["a" /* CartComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__routes__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_8__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_18__services_cart_service__["a" /* CartService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cakes/cakes.component.css":
/***/ (function(module, exports) {

module.exports = "div{\n    padding: 5px;\n    \n}\n\n.cont{\n    border: 3px black solid;\n    padding: 5px;\n    margin: 10px;\n    text-align: center;\n    border-radius: 10%;\n    background:-webkit-gradient(linear, left top, left bottom, from(rgba(147,206,222,1)), color-stop(41%, rgba(117,189,209,1)), to(rgba(73,165,191,1)));\n    background:linear-gradient(to bottom, rgba(147,206,222,1) 0%, rgba(117,189,209,1) 41%, rgba(73,165,191,1) 100%);\n\n}\n\nimg{\n    border-radius: 10%;\n    border: 1px greenyellow solid;\n    display: inline-block;\n}\n"

/***/ }),

/***/ "./src/app/cakes/cakes.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngFor=\"let productos of productList\">\n    <div *ngIf=\"productos.category==='cakes'\">\n        <div>{{productos.name}}</div>\n        <div>\n            <img src=\"{{productos.image}}\"width=\"220\" height=\"120\">\n        </div>\n        <div>{{productos.category }}</div>\n     \n        <div>{{productos.price}}</div>\n        <div>{{productos.ingredients}}</div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/cakes/cakes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CakesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("./src/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cart_service__ = __webpack_require__("./src/services/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CakesComponent = /** @class */ (function () {
    function CakesComponent(service, cartService) {
        var _this = this;
        this.service = service;
        this.cartService = cartService;
        this.service
            .getListProduct()
            .subscribe(function (productList) {
            _this.productList = productList.slice();
            console.log(_this.productList);
        });
    }
    CakesComponent.prototype.ngOnInit = function () {
    };
    CakesComponent.prototype.addToCart = function (productId) {
        this.cartService.cart.push(productId);
    };
    CakesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cakes',
            template: __webpack_require__("./src/app/cakes/cakes.component.html"),
            styles: [__webpack_require__("./src/app/cakes/cakes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */]])
    ], CakesComponent);
    return CakesComponent;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  cart works!\n</p>\n"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartComponent = /** @class */ (function () {
    function CartComponent() {
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cart',
            template: __webpack_require__("./src/app/cart/cart.component.html"),
            styles: [__webpack_require__("./src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, field, value) {
        if (!items)
            return [];
        if (!value)
            return items;
        var myPattern = new RegExp(value, 'i');
        return items.filter(function (it) { return it[field].match(myPattern); });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <br> <br> <br>\n  <br> <br> \n \n\n\n<div *ngIf=\"!session.user\" class=\"message\">\n   \n  </div>\n\n  <div *ngIf=\"session.user\" class=\"message\">\n      <h1>Welcome </h1>\n        <p>{{ session.user.username }}</p>\n     \n  </div>\n\n  \n\n<div class=\"right\">\n  <div class=\"btns\">\n    <a *ngIf=\"session.user\" routerLink='/customers'>Go to DashBoard</a>\n   \n    <!-- <a *ngIf=\"!session.user\" [routerLink]=\"['signup']\">Signup</a>\n   -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("./src/services/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(session) {
        this.session = session;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login-form/login-form.component.css":
/***/ (function(module, exports) {

module.exports = ".error{\n    background-color:red;\n    color: white;\n    padding: 10px;\n    border: 1px solid black;\n    border-radius: 5px;\n}"

/***/ }),

/***/ "./src/app/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br><br><br><br>\n <div *ngIf=\"!session.getUser()\">\n  <!-- <form>\n    <h2> Login or Signup </h2>\n    <label> Username </label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\"/>\n    <br>\n    <label> Password </label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\"/>\n    <div>\n      <button (click)=\"login()\"> login </button>\n      <button (click)=\"signup()\"> signup </button>\n    </div>\n  </form>\n  <p *ngIf=\"error\" class=\"error\"> {{ error }} </p>\n</div>\n\n<div *ngIf=\"session.getUser()\">\n  <pre> {{ session.getUser() | json }} </pre>\n  <button (click)=\"logout()\"> Logout </button>\n</div>  -->\n\n\n<div class=\"container\">    \n  <div id=\"loginbox\" style=\"margin-top:50px;\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">                    \n      <div class=\"panel panel-info\" >\n              <div class=\"panel-heading\">\n                  <div class=\"panel-title\">Sign In</div>\n                  <div style=\"float:right; font-size: 80%; position: relative; top:-10px\"><a href=\"#\">Forgot password?</a></div>\n              </div>     \n\n              <div style=\"padding-top:30px\" class=\"panel-body\" >\n\n                  <div style=\"display:none\" id=\"login-alert\" class=\"alert alert-danger col-sm-12\"></div>\n                      \n                  <form id=\"loginform\" class=\"form-horizontal\" role=\"form\">\n                              \n                      <div style=\"margin-bottom: 25px\" class=\"input-group\">\n                                  <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                                  <input id=\"login-username\" [(ngModel)]=\"username\" type=\"text\" class=\"form-control\" name=\"username\" value=\"\" placeholder=\"username or email\">    \n                                                      \n                              </div>\n                          \n                      <div style=\"margin-bottom: 25px\" class=\"input-group\">\n                                  <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n                                  <input id=\"login-password\" type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" name=\"password\" placeholder=\"password\">\n                              </div>\n                              \n\n\n                          <div style=\"margin-top:10px\" class=\"form-group\">\n                              <!-- Button -->\n\n                              <div class=\"col-sm-12 controls\">\n                                <!-- <a id=\"btn-login\" href=\"login()\" class=\"btn btn-success\">Login  </a> -->\n                                <button id=\"btn-login\" (click)=\"login()\"class=\"btn btn-success\"> login </button>  \n\n                              </div>\n                          </div>\n\n\n                          <div class=\"form-group\">\n                              <div class=\"col-md-12 control\">\n                                  <div style=\"border-top: 1px solidrgb(158, 5, 5); padding-top:15px; font-size:85%\" >\n                                      Don't have an account! \n                                  <button (click)=\"signup()\">\n Sign Up Here\n                                \n                                  </button>\n                                  </div>\n                              </div>\n                          </div>    \n                      </form>     \n\n                      <p *ngIf=\"error\" class=\"error\"> {{ error }} </p>\n\n                  </div>                     \n              </div>  \n  </div>\n\n<div *ngIf=\"session.getUser()\">\n  <pre> {{ session.getUser() | json }} </pre>\n  <button (click)=\"logout()\"> Logout </button>\n</div>\n\n\n\n  <div id=\"signupbox\" style=\"display:none; margin-top:50px\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\n              <div class=\"panel panel-info\">\n                  <div class=\"panel-heading\">\n                      <div class=\"panel-title\">Sign Up</div>\n                      <div style=\"float:right; font-size: 85%; position: relative; top:-10px\"><a id=\"signinlink\" href=\"#\" onclick=\"$('#signupbox').hide(); $('#loginbox').show()\">Sign In</a></div>\n                  </div>  \n                  <div class=\"panel-body\" >\n                      <form id=\"signupform\" class=\"form-horizontal\" role=\"form\">\n                          \n                          <div id=\"signupalert\" style=\"display:none\" class=\"alert alert-danger\">\n                              <p>Error:</p>\n                              <span></span>\n                          </div>\n                              \n                          \n                            \n                          <div class=\"form-group\">\n                              <label for=\"email\" class=\"col-md-3 control-label\">Email</label>\n                              <div class=\"col-md-9\">\n                                  <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email Address\">\n                              </div>\n                          </div>\n                              \n                          <div class=\"form-group\">\n                              <label for=\"firstname\" class=\"col-md-3 control-label\">First Name</label>\n                              <div class=\"col-md-9\">\n                                  <input type=\"text\" class=\"form-control\" name=\"firstname\" placeholder=\"First Name\">\n                              </div>\n                          </div>\n                          <div class=\"form-group\">\n                              <label for=\"lastname\" class=\"col-md-3 control-label\">Last Name</label>\n                              <div class=\"col-md-9\">\n                                  <input type=\"text\" class=\"form-control\" name=\"lastname\" placeholder=\"Last Name\">\n                              </div>\n                          </div>\n                          <div class=\"form-group\">\n                              <label for=\"password\" class=\"col-md-3 control-label\">Password</label>\n                              <div class=\"col-md-9\">\n                                  <input type=\"password\" class=\"form-control\" name=\"passwd\" placeholder=\"Password\">\n                              </div>\n                          </div>\n                              \n                          <div class=\"form-group\">\n                              <label for=\"icode\" class=\"col-md-3 control-label\">Invitation Code</label>\n                              <div class=\"col-md-9\">\n                                  <input type=\"text\" class=\"form-control\" name=\"icode\" placeholder=\"\">\n                              </div>\n                          </div>\n\n                          <div class=\"form-group\">\n                              <!-- Button -->                                        \n                              <div class=\"col-md-offset-3 col-md-9\">\n                                  <button id=\"btn-signup\" type=\"button\" class=\"btn btn-info\"><i class=\"icon-hand-right\"></i> &nbsp Sign Up</button>\n                                  <span style=\"margin-left:8px;\">or</span>  \n                              </div>\n                          </div>\n                          \n                          <div style=\"border-top: 1px solid #999; padding-top:20px\"  class=\"form-group\">\n                              \n                              <div class=\"col-md-offset-3 col-md-9\">\n                                  <button id=\"btn-fbsignup\" type=\"button\" class=\"btn btn-primary\"><i class=\"icon-facebook\"></i>   Sign Up with Facebook</button>\n                              </div>                                           \n                                  \n                          </div>\n                          \n                          \n                          \n                      </form>\n                   </div>\n              </div>\n\n         \n         \n          \n   </div> \n</div>\n"

/***/ }),

/***/ "./src/app/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("./src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(session, router, route) {
        this.session = session;
        this.router = router;
        this.route = route;
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.login = function () {
        var _this = this;
        this.session.login(this.username, this.password)
            .subscribe(function (user) {
            console.log('te ejecuto a ti');
            _this.router.navigate(["home"]);
            console.log("Welcome " + user.username);
        });
    };
    LoginFormComponent.prototype.signup = function () {
        var _this = this;
        this.session.signup(this.username, this.password)
            .catch(function (e) { return _this.error = e; })
            .subscribe();
    };
    LoginFormComponent.prototype.logout = function () {
        var _this = this;
        this.session.logout()
            .catch(function (e) { return _this.error = e; })
            .subscribe();
    };
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-form',
            template: __webpack_require__("./src/app/login-form/login-form.component.html"),
            styles: [__webpack_require__("./src/app/login-form/login-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/***/ (function(module, exports) {

module.exports = ".botones h1{\n    display: inline-block;\n    text-align: center;\n}\n\n\n.btn{\n    margin-top: 8px;\n}\n\n\nbutton{\n    margin-top: 11px;\n}"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n\n\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n        aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"/\">\n        <img src=\"https://vectr.com/nachobaile/a14B7rZ23K.svg?width=693.8545005303426&height=351.5&select=f2SrQYyNGP,casZcfLC4e,c4cpRRrbkI&source=selection\"\n          alt=\"\">\n      </a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n\n      <ul class=\"nav navbar-nav navbar-right\">\n\n        <li>\n          <div class=\"dropdown\">\n            <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" data-hover=\"dropdown\">\n              Nuestros EmPan-Artesanos\n              <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\">\n              <li>\n                <a [routerLink]='[\"products/breads\"]'>Nuestros panes</a>\n              </li>\n              <li>\n                <a [routerLink]='[\"products/cakes\"]'>Nuestras tartas</a>\n              </li>\n              <li class=\"dropdown\">\n                <a [routerLink]='[\"products/pattys\"]'>Nuestras empanadas</a>\n              </li>\n            \n            </ul>\n          </div>\n          \n        </li>\n        <li>\n          <a href=\"#\">Promociones</a>\n        </li>\n        <li>\n          <a href=\"#\">Recetas Empan-Artestasanas</a>\n        </li>\n        <li>\n          <button (click)=\"logout()\" class=\"btn btn-danger\"> Logout </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("./src/services/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(session) {
        this.session = session;
        this.title = 'EMPAN-ARTE';
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.logout = function () {
        var _this = this;
        this.session.logout()
            .catch(function (e) { return _this.error = e; })
            .subscribe();
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav-bar',
            template: __webpack_require__("./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("./src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/panes/panes.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/panes/panes.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <div *ngFor=\"let productos of productList\">\n            <div *ngIf=\"productos.category==='Breads'\">\n              <div>{{productos.name}}</div>\n              <div>{{productos.category }}</div>\n              <div>\n                  <img src=\"{{productos.image}}\" alt=\"\">\n              </div>\n              <div>{{productos.price}}</div>\n              <div>{{productos.ingredients}}</div>\n            </div>\n        </div>"

/***/ }),

/***/ "./src/app/panes/panes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("./src/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cart_service__ = __webpack_require__("./src/services/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PanesComponent = /** @class */ (function () {
    function PanesComponent(service, cartService) {
        var _this = this;
        this.service = service;
        this.cartService = cartService;
        this.service
            .getListProduct()
            .subscribe(function (productList) {
            _this.productList = productList.slice();
            console.log(_this.productList);
        });
    }
    PanesComponent.prototype.ngOnInit = function () {
    };
    PanesComponent.prototype.addToCart = function (productId) {
        this.cartService.cart.push(productId);
    };
    PanesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-panes',
            template: __webpack_require__("./src/app/panes/panes.component.html"),
            styles: [__webpack_require__("./src/app/panes/panes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */]])
    ], PanesComponent);
    return PanesComponent;
}());



/***/ }),

/***/ "./src/app/patty/patty.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/patty/patty.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <div *ngFor=\"let productos of productList\">\n        <div *ngIf=\"productos.category==='Pattys'\">\n          <div>{{productos.name}}</div>\n          <div>{{productos.category }}</div>\n          <div>\n              <img src=\"{{productos.image}}\" alt=\"\">\n          </div>\n          <div>{{productos.price}}</div>\n          <div>{{productos.ingredients}}</div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/patty/patty.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PattyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("./src/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cart_service__ = __webpack_require__("./src/services/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PattyComponent = /** @class */ (function () {
    function PattyComponent(service, cartService) {
        var _this = this;
        this.service = service;
        this.cartService = cartService;
        this.service
            .getListProduct()
            .subscribe(function (productList) {
            _this.productList = productList.slice();
            console.log(_this.productList);
        });
    }
    PattyComponent.prototype.ngOnInit = function () {
    };
    PattyComponent.prototype.addToCart = function (productId) {
        this.cartService.cart.push(productId);
    };
    PattyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-patty',
            template: __webpack_require__("./src/app/patty/patty.component.html"),
            styles: [__webpack_require__("./src/app/patty/patty.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */]])
    ], PattyComponent);
    return PattyComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n\n\n<select [(ngModel)]=\"xxx\">\n        <option value=\"empa\">Nuestras Empanadas</option>\n        <option value=\"art\">Nuestras tartas</option>\n        <option value=\"arra\">Nuestros Panes</option>\n    </select>\n    \n    <div *ngFor=\"let productos of productList | filter:'name':xxx\">\n        <div>{{productos.name}}</div>\n        <div>{{productos.category }}</div>\n        <div>\n            <img src=\"{{productos.image}}\" alt=\"\">\n        </div>\n        <div>{{productos.price}}</div>\n        <div>{{productos.ingredients}}</div>\n    </div>"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("./src/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cart_service__ = __webpack_require__("./src/services/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(service, cartService) {
        var _this = this;
        this.service = service;
        this.cartService = cartService;
        this.productList = [];
        this.service
            .getListProduct()
            .subscribe(function (productList) {
            _this.productList = productList.slice();
            console.log(_this.productList);
        });
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent.prototype.addToCart = function (productId) {
        this.cartService.cart.push(productId);
    };
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-products",
            template: __webpack_require__("./src/app/products/products.component.html"),
            styles: [__webpack_require__("./src/app/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_form_login_form_component__ = __webpack_require__("./src/app/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_products_component__ = __webpack_require__("./src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__patty_patty_component__ = __webpack_require__("./src/app/patty/patty.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__panes_panes_component__ = __webpack_require__("./src/app/panes/panes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cakes_cakes_component__ = __webpack_require__("./src/app/cakes/cakes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart_component__ = __webpack_require__("./src/app/cart/cart.component.ts");







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: '**', redirectTo: 'home' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_form_login_form_component__["a" /* LoginFormComponent */] },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_2__products_products_component__["a" /* ProductsComponent */] },
    { path: 'products/pattys', component: __WEBPACK_IMPORTED_MODULE_3__patty_patty_component__["a" /* PattyComponent */] },
    { path: 'products/breads', component: __WEBPACK_IMPORTED_MODULE_4__panes_panes_component__["a" /* PanesComponent */] },
    { path: 'products/cakes', component: __WEBPACK_IMPORTED_MODULE_5__cakes_cakes_component__["a" /* CakesComponent */] },
    { path: 'products/cart', component: __WEBPACK_IMPORTED_MODULE_6__cart_cart_component__["a" /* CartComponent */] },
];


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    BASEURL: ""
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/services/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartService = /** @class */ (function () {
    function CartService(http) {
        this.http = http;
        this.cart = [];
        this.BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL;
        this.options = { withCredentials: true };
    }
    CartService.prototype.createCart = function (userId) {
        return this.http
            .post(this.BASEURL + "/api/cart/new", { orders: this.cart, buyer: userId }, this.options)
            .map(function (res) { return res.json(); });
    };
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL;
        this.options = { withCredentials: true };
    }
    ProductService.prototype.getListProduct = function () {
        return this.http.get(this.BASEURL + "/api/products/show")
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProduct = function (id) {
        return this.http.get(this.BASEURL + "/api/products/show/" + id)
            .map(function (res) { return res.json(); });
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/services/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SessionService = /** @class */ (function () {
    function SessionService(http) {
        this.http = http;
        this.BASEURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].BASEURL;
        this.options = { withCredentials: true };
        this.isLoggedIn().subscribe();
    }
    SessionService.prototype.getUser = function () {
        return this.user;
    };
    SessionService.prototype.getUserEvent = function () {
        return this.userEvent;
    };
    SessionService.prototype.configureUser = function (set) {
        var _this = this;
        if (set === void 0) { set = false; }
        return function (user) {
            if (set) {
                _this.user = user;
                console.log("Setting user, welcome " + _this.user.username);
            }
            else {
                console.log("bye bye " + _this.user.username);
                _this.user = null;
            }
            return user;
        };
    };
    SessionService.prototype.handleError = function (e) {
        console.log(e);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* Observable */].throw(e.json().message);
    };
    SessionService.prototype.signup = function (username, password) {
        return this.http.post(this.BASEURL + "/api/auth/signup", { username: username, password: password }, this.options)
            .map(function (res) { return res.json(); })
            .map(this.configureUser(true))
            .catch(this.handleError);
    };
    SessionService.prototype.login = function (username, password) {
        return this.http.post(this.BASEURL + "/api/auth/login", { username: username, password: password }, this.options)
            .map(function (res) { return res.json(); })
            .map(this.configureUser(true))
            .catch(this.handleError);
    };
    SessionService.prototype.logout = function () {
        return this.http.get(this.BASEURL + "/api/auth/logout", this.options)
            .map(function (res) { return res.json(); })
            .map(this.configureUser(false))
            .catch(this.handleError);
    };
    SessionService.prototype.isLoggedIn = function () {
        return this.http.get(this.BASEURL + "/api/auth/loggedin", this.options)
            .map(function (res) { return res.json(); })
            .map(this.configureUser(true))
            .catch(this.handleError);
    };
    SessionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map